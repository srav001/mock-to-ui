#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const args = parseArgs(process.argv.slice(2));

if (args.help) {
  printHelp();
  process.exit(0);
}

const apiKey = process.env.OPENAI_API_KEY || process.env.OPENAI_KEY;
if (!apiKey) {
  fail("Missing OPENAI_API_KEY. Add it to .env, then run with `node --env-file=.env ...` or use Bun.");
}

const prompt = readPrompt(args);
const outputPath = args.output || "mock/design-board.png";
const model = args.model || "gpt-image-2";
const quality = args.quality || "high";
const size = args.size || "1536x1024";
const format = args.format || "png";

const { default: OpenAI, toFile } = await importOpenAI();
const client = new OpenAI({ apiKey });

await fs.promises.mkdir(path.dirname(outputPath), { recursive: true });

const request = {
  model,
  prompt,
  quality,
  size,
  output_format: format,
};

if (args.moderation) {
  request.moderation = args.moderation;
}

const images = collectList(args.image);
if (images.length > 0) {
  request.image = await Promise.all(
    images.map(async (imagePath) => {
      const file = await fs.promises.readFile(imagePath);
      return toFile(file, path.basename(imagePath), { type: mimeForImagePath(imagePath) });
    }),
  );
  const result = await client.images.edit(request);
  await writeImage(result, outputPath);
  console.error(`Edited mock saved to ${outputPath}`);
} else {
  const result = await client.images.generate(request);
  await writeImage(result, outputPath);
  console.error(`Generated mock saved to ${outputPath}`);
}

async function writeImage(result, outputPath) {
  const b64 = result?.data?.[0]?.b64_json;
  if (!b64) {
    fail("OpenAI response did not include data[0].b64_json.");
  }
  await fs.promises.writeFile(outputPath, Buffer.from(b64, "base64"));
  const metaPath = `${outputPath}.json`;
  await fs.promises.writeFile(
    metaPath,
    JSON.stringify(
      {
        output: outputPath,
        model,
        quality,
        size,
        format,
        imageInputs: images,
        createdAt: new Date().toISOString(),
        prompt,
      },
      null,
      2,
    ),
  );
  console.log(JSON.stringify({ output: outputPath, metadata: metaPath }));
}

function readPrompt(args) {
  if (args.promptFile) {
    return fs.readFileSync(args.promptFile, "utf8").trim();
  }
  if (args.prompt) {
    return args.prompt.trim();
  }
  fail("Provide --prompt-file <path> or --prompt <text>.");
}

function parseArgs(rawArgs) {
  const parsed = {};
  for (let index = 0; index < rawArgs.length; index += 1) {
    const token = rawArgs[index];
    if (token === "--help" || token === "-h") {
      parsed.help = true;
      continue;
    }
    if (!token.startsWith("--")) {
      fail(`Unexpected argument: ${token}`);
    }
    const key = toCamel(token.slice(2));
    const value = rawArgs[index + 1];
    if (!value || value.startsWith("--")) {
      fail(`Missing value for ${token}`);
    }
    if (parsed[key]) {
      parsed[key] = Array.isArray(parsed[key]) ? [...parsed[key], value] : [parsed[key], value];
    } else {
      parsed[key] = value;
    }
    index += 1;
  }
  return parsed;
}

function collectList(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function mimeForImagePath(imagePath) {
  const extension = path.extname(imagePath).toLowerCase();
  if (extension === ".png") return "image/png";
  if (extension === ".jpg" || extension === ".jpeg") return "image/jpeg";
  if (extension === ".webp") return "image/webp";
  fail(`Unsupported image input format for ${imagePath}. Use png, jpeg, or webp.`);
}

function toCamel(value) {
  return value.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

async function importOpenAI() {
  try {
    return await import("openai");
  } catch (error) {
    if (error?.code === "ERR_MODULE_NOT_FOUND") {
      fail("Missing dependency `openai`. Install it in the generated project with `npm install -D openai` or `bun add -d openai`.");
    }
    throw error;
  }
}

function printHelp() {
  console.log(`Usage:
  node --env-file=.env scripts/generate-design-mock.mjs --prompt-file mock/prompts/design-board.md --output mock/design-board-v1.png
  bun scripts/generate-design-mock.mjs --prompt-file mock/prompts/design-board.md --output mock/design-board-v1.png

Options:
  --prompt-file <path>   Read prompt text from a file.
  --prompt <text>        Prompt text.
  --output <path>        Output image path. Default: mock/design-board.png
  --image <path>         Input image for edit/reference. May be repeated.
  --quality <value>      low, medium, high, or auto. Default: high
  --size <value>         Image size. Default: 1536x1024
  --format <value>       png, jpeg, or webp. Default: png
  --model <value>        Image model. Default: gpt-image-2
  --moderation <value>   auto or low.
`);
}
