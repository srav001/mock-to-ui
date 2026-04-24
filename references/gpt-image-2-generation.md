# GPT Image 2 Generation

Use this reference when generating or revising the visual mock. The current OpenAI image model for this workflow is `gpt-image-2`.

## API Choice

Use the Image API when generating or editing one mock from one prompt:

```bash
node --env-file=.env scripts/generate-design-mock.mjs \
  --prompt-file mock/prompts/design-board.md \
  --output mock/design-board-v1.png \
  --size 1536x1024 \
  --quality high
```

If `.env` lives in the parent skill/workspace folder rather than the generated app, use:

```bash
node --env-file=../.env scripts/generate-design-mock.mjs \
  --prompt-file mock/prompts/design-board.md \
  --output mock/design-board-v1.png \
  --size 1536x1024 \
  --quality high
```

Use Bun if the project uses Bun:

```bash
bun scripts/generate-design-mock.mjs \
  --prompt-file mock/prompts/design-board.md \
  --output mock/design-board-v1.png \
  --size 1536x1024 \
  --quality high
```

Use the Responses API only when the implementation needs conversational image state or image-generation tool behavior. For this skill, the provided script uses the Image API because it is direct, simple, and suitable for saved design-board files.

For mock-only skill testing, run the script directly from the skill folder and save artifacts outside any generated app:

```bash
node --env-file=.env assets/scripts/generate-design-mock.mjs \
  --prompt-file mock-tests/prompts/design-board.md \
  --output mock-tests/design-board-v1.png \
  --size 1536x1024 \
  --quality high
```

This mock-only path is for image iteration only. Do not scaffold or build a frontend while using it.

## Model Rules

- Use `model: "gpt-image-2"`.
- Use `OPENAI_API_KEY`.
- Use `quality: "low"` for rough exploration only.
- Use `quality: "high"` for approved or near-approved design boards.
- Use `size` values that match the design target. Good defaults:
  - `1536x1024` for desktop-first design boards.
  - `1024x1536` for mobile-first design boards.
  - `2048x1152` for high-detail desktop boards when cost/latency are acceptable.
- Do not request transparent backgrounds with `gpt-image-2`; it is not supported.
- For edits with image references, do not set `input_fidelity`; `gpt-image-2` handles image inputs at high fidelity automatically.

## Design Board Requirements

The mock must be a design board, not only a screenshot. Require:

- Main desktop UI as the largest region.
- Mobile UI in a smaller region on the side or lower section.
- Color palette strip with hex-like labels or readable color swatches.
- Theme notes for radius, surface style, border strength, shadow depth, and typography feel.
- Component examples visible enough to implement: buttons, inputs, tables, tabs, cards, nav, charts, status chips, filters, modals, or whichever components fit the app.
- Realistic mock data and labels. Avoid tiny dense text where exact words matter because image text may be imperfect.
- No decorative filler that cannot be implemented or that distracts from the product UI.

The implementation should reproduce the app views shown on the design board, not the board canvas itself. Do not build the palette strip, radius samples, component samples, annotations, or mobile preview frame into the actual app unless the user explicitly wants a style-guide page. Use those regions only to extract theme, scale, and responsive decisions.

## Light First, Dark Companion

The first generated mock must always be light mode by default. Use cool off-white, pale gray, porcelain, glacier, or similar light surfaces unless the user explicitly requests a dark-only product. Avoid raw white as the default surface.

After the light-mode board is approved, or after the user explicitly waives approval and says to build, generate a dark-mode companion board by passing the approved light board as an image reference and using `assets/prompts/dark-mode-companion-prompt.md`. The dark companion board is not a redesign; it preserves layout and workflow while translating the design system into dark-mode tokens.

Implementation starts only after:

- Approved or approval-waived light board exists.
- Dark companion board exists when the app will support dark mode.
- The implementation reading names both light and dark theme tokens.

## Prompt Structure

Always include a concise design-thinking and anti-generic section in the prompt. Then include either the default premium minimal style reference or the user's explicit style direction.

Style selection:

- No strict user style: use the written guidance in `references/visual-style-references.md` as the default style language.
- Strict user style: follow the user's style and do not force the default style, but still apply the anti-generic design rules.
- Partial user style: combine the user's colors/shapes/materials with the default premium minimal style.

Do not attach screenshot references to GPT Image prompts for the default style. The default style must be carried by the written guidance in `references/visual-style-references.md`.

Use labeled sections:

```text
Intent:
Create a production-ready light-mode design board for a React shadcn/ui app.

Product:
<what the app is and who uses it>

Design Thinking:
Understand the purpose, user, tone, constraints, and the one memorable visual idea. Choose a clear aesthetic direction and execute it precisely. Refined minimalism, maximalism, editorial, dark neon, luxury, playful, industrial, or skeuomorphic styles can all work if intentional.

Anti-Generic Rules:
Do not produce a generic AI dashboard, Bootstrap/admin-template UI, default blue-gray shadcn screen, equal-card grid, purple gradient hero, or common SaaS layout with no point of view. Use distinctive typography, committed color, purposeful composition, contextual depth, and polished component details.

## Reference Comparison Protocol

Before judging any generated mock:

1. Load all eight temporary reference images into context.
2. Compare the new mock against `references/mock-comparison-checklist.md`.
3. Reject the mock immediately if any critical checklist item fails.
4. Reject the mock if it passes fewer than 44 of the 50 checklist items.
5. If the same failure repeats across fresh prompts, tighten the reusable skill guidance before generating again.

Style Direction:
<default premium minimal light-mode reference style unless the user gave a strict different style>

Canvas:
<desktop-first or mobile-first, size, board layout>

Desktop UI:
<layout, navigation, main content, data density>

Mobile UI:
<responsive behavior and mobile priority>

Design System:
<light-mode colors, surfaces, radius, typography, icons, spacing>

Interaction States:
<tabs, filters, selected rows, dialogs, empty states>

Constraints:
<no generic hero, no marketing fluff, no illegible text, etc.>
```

## Revision Prompting

When revising a mock, include the previous mock as an image reference and state exactly what changes while preserving the rest:

```text
Edit the referenced design board. Change only:
- <change 1>
- <change 2>

Preserve:
- Overall app structure and desktop/mobile board layout
- Existing color system except the requested changes
- Component hierarchy and spacing unless specifically mentioned
- Product domain, data density, and shadcn/ui implementation feasibility
```

Small changes are easier to control than overloaded revisions. If the user lists many changes, group them into one coherent revision but keep the preserve list explicit.

## Inspecting Generated Mocks

Before asking for approval, inspect the image yourself:

- Is it implementable in React and shadcn/ui?
- Are desktop and mobile both visible?
- Are design tokens visible and coherent?
- Does it fit the user brief?
- Is the layout specific enough to guide code?
- Is the spacing good enough: broad gutters, generous panel padding, enough negative space, and not too many visible rows/widgets?
- Does it avoid information overload by using progressive disclosure instead of showing every product module on one screen?
- Are local modules spacious enough: bar groups, workflow routes, side panels, bottom actions, and mobile sections should not feel compressed.
- Did the mock reduce first-screen density by omitting secondary content, or did it simply shrink more content into view?
- Does it still read as an app workspace rather than a website, landing-page hero, poster, or marketing concept?
- Do surfaces pop through a subtle background/content color offset rather than pure white everywhere?
- Are shadows modern and useful: `shadow-xs`/`shadow-sm` style where needed, no hard edge, no heavy dark offset, no old-school `shadow-lg` card look?
- Do lifted notice/action cards stay concise and decision-focused, instead of becoming stacked mini-pages with several sections and buttons?
- If the design-system strip shows elevation tokens, are those tokens actually used in the app on navigation, selected records, important notices/cards, floating controls, popovers/sheets, mobile navigation controls, mobile preview, or one important surface?
- Is the layout over-carded? If every group is boxed with a border/card shell, regenerate with more open sections and selective surfaces.
- Are structured components visually consistent: centered timeline dots, clean connector lines, consistent repeated row/card geometry, aligned icons, and no clipping?
- Are there contradictions, impossible visual effects, or illegible core content?

If the mock is clearly unusable, regenerate once before showing it to the user.

## Validation Testing

When testing whether the reusable skill guidance works, use fresh prompts rather than patching the previous prompt. Delete old scratch prompts, create a new task prompt from the current skill guidance, generate one board, inspect the failure modes, then update the reusable guidance if needed. Do not rely on multiple prompt iterations for validation because that can hide whether a new app request will follow the skill by default.

For repeatability testing, prefer a fresh four-app batch rather than a single prompt:

- CPQ
- ERP
- ticketing / Jira-style work tracking
- health / fitness

The point of this batch is to prove that the skill does not only work for one layout or one color family. Run each app from a fresh prompt file. Compare each mock against the 50-point checklist, then run the batch-level repeatability checks in `references/mock-comparison-checklist.md`. If one app looks strong and the others collapse into generic blue dashboards or habitual sidebars, the skill still fails.

## Default-Style Quality Gate

When the user expects the default premium style, compare every generated board against the written quality gate in `references/visual-style-references.md` before showing it.

Reject and regenerate if any criterion is visibly weak:

- Background and surface contrast: page, app canvas, focal surfaces, controls, and selected states must not blend together.
- Surface temperature: default light surfaces should be cool off-white/porcelain rather than raw white unless the user explicitly requests a different brand tone.
- Desktop outer tint: the tinted outer page/stage should remain visible around the desktop app frame, not only in the mobile preview.
- Navigation contrast: if sidebars, rails, top bars, tabs, breadcrumbs, command bars, or filter bars exist, they need enough tonal contrast and active-state clarity to anchor the workspace.
- Navigation surface: when navigation exists, it should read slightly darker, cooler, or more tinted than the main content canvas at thumbnail scale; same-white nav and content fail.
- Navigation balance: the nav surface should not become a saturated or overly contrasty block. If it dominates the page more than the active workspace, regenerate with subtler tonal separation.
- Navigation fit: do not default to a sidebar. Use the navigation model that best fits the product, which may be a top bar, top tabs, segmented header, bottom navigation, or a lighter hybrid layout.
- Color bias: do not default to blue primary and blue-tinted navigation unless the user or product actually calls for blue. Choose other coherent accent families when appropriate.
- Radius consistency: cards, rows, inputs, buttons, tabs, chips, and icon buttons should follow a coherent radius scale and match the design-system strip.
- Shadows and elevation: use modern small elevation like Tailwind `shadow-xs` or a tighter/faded `shadow-sm`; shadows should be soft, tight, clean, close to the surface, and low-opacity, not wide dirty halos or hard old card shadows. Even when the shadow is small, its fade must feather smoothly instead of ending as a sharp gray band. Elevation tokens shown in the design-system strip should be visible in the main app UI on meaningful lifted states such as navigation, selected records, important notices/cards, mobile nav affordances, floating controls, and popovers, not only as samples.
- Header/top-bar shadows: if top navigation or a command bar uses elevation, it should be especially tight, slim, and light; broad header shadows fail immediately.
- Card usage: not every group should be boxed. Use open sections, bands, typography, and spacing where cards are unnecessary.
- Spacing: large gutters, generous interior padding, and visible negative space.
- Progressive disclosure: the first screen should prioritize the current task and use tabs, drawers, drill-down pages, scrolling, or collapsed states for secondary information.
- Minimum necessary content: visible modules should directly support the immediate task; secondary lists, history, timelines, activity, analytics, and configuration detail should move out of the first screen unless essential.
- Do not solve density by shrinking everything to fit. Prefer omitting one whole secondary module or collapsing it behind drill-down.
- Lifted action/warning/next-step cards should stay compact and readable. If the card contains several titled blocks, long supporting text, and many equal-weight actions, it is too dense.
- Local spacing: side modules, workflow routes, action bars, and mobile modules must have enough breathing room, not just the overall canvas.
- Mobile prioritization: the phone preview should omit/summarize/collapse secondary desktop modules instead of squeezing every section into a narrow viewport.
- Typography: strong display/numeric hierarchy with lighter secondary text.
- Layout rhythm: one dominant visual object, asymmetric supporting regions, and a calm mobile companion.
- Component integrity: aligned steppers/timelines, clean icons, consistent rows, no clipped text, no accidental overlaps.
- App usability: visible controls, records, actions, states, and workflow context must stay central; display typography should not overwhelm the app.

If one criterion fails, revise the prompt to target that failure and regenerate. Keep the rejected artifact for debugging, but do not present it as acceptable.
