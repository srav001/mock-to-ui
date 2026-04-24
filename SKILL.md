---
name: mock-to-ui
description: "Generate premium GPT Image design boards first, then translate approved mocks into polished React shadcn/ui frontends with visual verification. Use when the user wants an app, dashboard, workspace, prototype, or UI explored through image-led mock generation before implementation."
---

# Mock-To-Ui

## Core Idea

Use GPT Image as the visual design source of truth before writing the frontend. First create or revise a light-mode design board with `gpt-image-2`; only after the user approves it, generate the matching dark-mode board from the approved light board, then translate both boards into a React shadcn/ui implementation and use Playwright screenshots to compare the working app against the approved mock.

This skill is strict because its goal is not a generic approximation. The delivered UI should match the approved mock as closely as practical: layout, color roles, density, border radius, typography feel, component hierarchy, responsive behavior, and visual polish should all be intentionally reproduced. Do not stop halfway, do not leave a generic starter UI, and do not claim completion until visual verification has been performed.

When a fresh agent uses this skill, it must not rely on prior conversation memory alone. It should gather the user's product needs, workflow, density, brand, and style constraints, then compose the GPT Image prompt from that brief plus the written design rules and visual references inside this skill.

## Required Flow

If the user is testing image generation only, use Mock-Only Iteration Mode instead of scaffolding an app:

- Do not create a React project.
- Do not install shadcn/ui components.
- Do not build the frontend.
- Generate light-mode boards from the skill folder using `assets/scripts/generate-design-mock.mjs`.
- Save prompt and image artifacts under a scratch folder such as `mock-tests/`.
- When validating whether reusable skill guidance works, delete old scratch prompts and start each test from a fresh prompt. Do not keep patching the same prompt, because that can hide whether the base skill instructions generalize.
- For repeatability testing, prefer a fresh four-app validation batch instead of a single prompt: CPQ, ERP, ticketing / Jira-style work tracking, and health / fitness. Use fresh prompt files for each app and judge the whole batch, not just the strongest one.
- Use iterative correction prompts only when the user is explicitly revising a specific mock they intend to approve.
- Generate dark-mode companion boards only when the user asks for them or when the light board is approved for the eventual implementation phase.

1. Confirm project creation before scaffolding.
   - Ask the user to confirm that a new React shadcn/ui project may be created in the current folder or a named child folder.
   - If the user already specified the target folder, restate it once and proceed.
   - Do not overwrite an existing app unless the user explicitly approved that exact path.
2. Check runtime prerequisites.
   - Check for Node.js and Bun. Either is acceptable.
   - Prefer the package manager already implied by the workspace; otherwise use Bun if available, then npm.
   - If neither Node.js nor Bun exists, stop and tell the user the frontend scaffold cannot proceed.
3. Scaffold a fresh React shadcn/ui app.
   - Use the current shadcn CLI flow for a Vite React app. Prefer `shadcn@latest init -t vite` or the latest official equivalent.
   - Add shadcn components needed by the design, not every component indiscriminately.
   - Install `openai` and `playwright` as development/build-time tooling unless the app itself needs runtime OpenAI calls.
4. Copy the image-generation script.
   - Copy `assets/scripts/generate-design-mock.mjs` into the generated project, usually under `scripts/generate-design-mock.mjs`.
   - Create or update `.env.example` with `OPENAI_API_KEY=`.
   - Ask the user to add `OPENAI_API_KEY` to `.env` before running image generation. The script should fail clearly if the key is missing.
5. Clarify the app brief.
   - Read `references/briefing.md`.
   - Gather the product type, primary users, core workflow, required screens, visual direction, density, brand constraints, and target viewport priorities.
   - If the user does not provide a strict visual style, default to the premium minimal style in `references/visual-style-references.md`.
   - If the user provides a clear style, follow it while still applying the anti-generic design rules in the design-board prompt.
   - Ask only the questions needed to create a strong first mock. If the user says to use judgment, proceed with reasonable assumptions and state them briefly.
   - Treat the resulting brief as the input contract for the image prompt. The prompt should be synthesized from the user brief plus this skill's written design rules and visual references, not improvised from memory.
6. Generate the first design board in light mode.
   - Read `references/gpt-image-2-generation.md`.
   - Use `assets/prompts/design-board-prompt.md` as the base prompt pattern.
   - The first generated board must always be light mode unless the user explicitly requires dark-only output.
   - Generate a light-mode design board, not just a single screenshot. It must include the main desktop UI, a mobile view, and visible light-mode design tokens such as colors, radius, surfaces, and typography notes.
   - Carry the style through writing, not screenshot attachments: the user brief, this skill's common anti-generic rules, `references/visual-style-references.md`, and the selected prompt pattern should define the design direction for GPT Image.
   - Use low quality only for fast rough exploration. Use high quality for the mock that may become implementation source.
   - Inspect the board before showing it to the user. If it looks like Bootstrap, a default admin template, a plain shadcn demo, or a conventional sidebar/KPI/table dashboard, reject it yourself.
   - Also reject the board if it creates information overload: cramped panels, too many simultaneous modules, small controls everywhere, weak gutters, little negative space, or a first screen that tries to show the whole product at once. The default style should feel minimal, spacious, airy, and deliberately gapped.
   - Also reject the board if it solves density by shrinking and stacking more content instead of omitting secondary material. When unsure, remove a whole secondary module or collapse it behind navigation rather than squeezing more into the first screen.
   - Also reject the board if the main workspace still resolves as a conventional list, table, vertical row stack, or column-header row with a polished shell around it. Records can appear, but they must be secondary or visually transformed into a single integrated domain-specific lane, route, band, stack, map, selected object, or workflow surface.
   - Also reject the board if the main structure is three neighboring cards or columns of similar weight. A trio of polished cards is still a template unless one dominant integrated object clearly drives the current decision.
   - Also reject the board if domain details merely decorate normal rows. Icons, route markers, avatars, colored pills, and tiny diagrams inside rows do not count as a product-specific object when the dominant first read is still a list.
   - Also reject the board if the product-specific structured object is only a small decoration beside a standard page layout. The domain object should drive the composition and decision flow.
   - Also reject the board if it becomes too much like a website, landing page, poster, or marketing hero. This skill builds app UIs: the screen must still show usable navigation, controls, records, actions, states, and workflow context.
   - Also reject the board if generated component details are visibly inconsistent: misaligned timeline dots, connector lines that do not pass through step centers, uneven card shadows, clipped text, broken icons, accidental overlaps, or mismatched row heights.
   - Also reject the board if shadows look old-fashioned, heavy, hard-edged, or like default card drop shadows. Elevation should be a tight, thin, faded system used sparingly on navigation chrome, selected records, floating controls, popovers, or one important focal surface.
   - Also reject the board if a shadow fades out too abruptly. The lift can be small, but its edge must feather smoothly instead of ending as a crisp gray band or sharp halo.
   - Also reject the board if a lifted notice/action card becomes a mini-dashboard with stacked subsections, multiple equal-weight buttons, and long explanatory copy. Important lifted cards should stay concise, single-purpose, and easy to scan.
   - Also reject the board if the design-system strip shows elevation tokens but the actual app UI does not use that elevation on visible lifted states such as navigation chrome, selected records, important notices/cards, floating controls, popovers, or mobile navigation affordances.
   - Also reject the board if radius treatment is inconsistent across sibling cards, records, buttons, inputs, chips, or navigation controls.
   - Also reject the board if the tinted outer background disappears on desktop, if sidebar/top navigation blends into the content canvas, or if sidebar/rail shadows become broad, harsh, or dirty.
   - Also reject the board if adding a sidebar causes the main content to regress into generic enterprise UI. CPQ, ERP, and user-requested sidebar apps may use sidebars, but the main canvas must remain modern, spacious, de-carded, and driven by a product-specific active object. The sidebar should never be followed by a default operational page made from rows, cards, KPI strips, and tables.
   - In light mode, also reject a default charcoal/black sidebar slab unless the user's strict style explicitly asks for it. Prefer a softly tinted, tonal, porcelain, stone, or muted brand sidebar that anchors the app without making it feel like enterprise admin software.
   - Also reject detached bottom metadata/action rails that turn the screen into a form workflow after the main object. Primary actions should be tied to the active object, a concise lifted notice, or a small floating control, not a generic footer bar.
   - Before every comparison, load all eight temporary reference images into context.
   - Compare every generated board against the default-style quality gate in `references/visual-style-references.md` and the full checklist in `references/mock-comparison-checklist.md` before showing it. If the mock fails any critical checklist item or the overall pass count is too low, revise the prompt and regenerate.
   - When validating the reusable guidance with a fresh batch, also run the batch-level repeatability checks in `references/mock-comparison-checklist.md`. The skill does not pass if only one app type looks premium.
   - When rejecting a board, revise the prompt with sharper composition, stronger default-style language, and more explicit anti-patterns, then regenerate. Do not ask the user to approve a weak mock.
7. Get user approval before implementation.
   - Show or reference the generated mock artifact.
   - Ask the user whether to approve it for implementation or request corrections.
   - Do not start implementation from an unapproved mock.
   - If the user explicitly asks to test the full workflow, build immediately, or use the first usable mock, treat that as approval to proceed after inspecting the mock yourself.
8. Generate the matching dark-mode board before coding.
   - Once the light-mode board is approved, or approval is explicitly waived by a "just build it" style instruction, generate a dark-mode board using the approved light board as an image reference.
   - The dark-mode board should preserve layout, information architecture, component hierarchy, density, and responsive behavior while translating the design system into dark tokens.
   - Do not use the dark board to redesign the app. Use it to derive `.dark` shadcn theme variables and dark-specific surface, border, chart, and status colors.
9. Handle corrections with the right path.
   - Read `references/correction-flow.md`.
   - For small implementation-level corrections after the app exists, edit the UI directly.
   - For large visual direction, layout, brand, or component-system corrections, revise the image mock first, get approval, then update the UI to match.
10. Extract the implementation reading.
   - Before coding the UI, write a brief checklist from the approved light mock and dark companion mock: theme tokens, layout, components, data density, responsive behavior, interaction states, and dark-mode token mapping.
   - Use `references/mock-to-code-translation.md` and `references/shadcn-setup-and-theming.md`.
11. Implement incrementally.
   - Update shadcn theme variables first for both `:root` and `.dark`: colors, radius, borders, surfaces, foregrounds, muted states, accent states, ring, and chart colors when used.
   - Build the app shell, then core content, then secondary states and interactions.
   - Use realistic mock data. The UI can be fake, but it must feel like a real product.
12. Verify after each visual phase.
   - Read `playwright.md`.
   - Use Playwright screenshots at checkpoints: theme/app shell, main content, interaction states, full desktop, and mobile.
   - Compare the Playwright screenshot to the approved mock each time and fix visible drift before moving on.
   - After the first desktop and mobile screenshots, perform a deliberate scale-calibration pass before final signoff.
13. Final signoff.
   - Run build/type checks/lint when available.
   - Run desktop and mobile Playwright visual QA.
   - Confirm that the UI is not slightly off in visible structure, styling, or responsive fit. If a difference remains, either fix it or state the implementation constraint clearly.

## Reference Map

- `references/briefing.md`: use before generating the first mock.
- `references/gpt-image-2-generation.md`: use when generating or revising mocks with GPT Image.
- `references/correction-flow.md`: use when deciding whether to edit code directly or revise the mock first.
- `references/shadcn-setup-and-theming.md`: use while scaffolding and setting theme tokens.
- `references/mock-to-code-translation.md`: use before and during implementation.
- `references/visual-style-references.md`: use by default unless the user specifies a clear competing style; also use when the user wants the UI to feel premium, modern, minimal, or less bootstrappy.
- `references/implementation-checkpoints.md`: use to pace the build and avoid stopping halfway.
- `references/mock-comparison-checklist.md`: use on every generated mock against the eight reference images before accepting it.
- `playwright.md`: use for screenshot-driven visual comparison and responsive QA.

## Non-Negotiables

- The approved image mock is the source of truth.
- The first generated mock is light mode by default.
- Generate a dark-mode companion board only after the light board is approved or approval is explicitly waived.
- Implement both light and dark shadcn theme variables when building the app.
- Do not implement before approval unless the user explicitly skips approval.
- Do not produce a generic shadcn dashboard that merely resembles the prompt.
- Do not accept a generated mock that looks bootstrappy, table-first, or like a default enterprise admin dashboard. Iterate on the image prompt until the mock has a visible design point of view.
- Do not accept a generated mock that is cramped or overly information-dense. The default reference style needs generous whitespace, large panel padding, clear gutters, fewer simultaneous objects, and progressive disclosure instead of showing the entire product on one screen.
- Do not accept a generated mock that keeps too much first-screen content by shrinking cards, rows, or type. Remove or collapse secondary content instead of compressing the main screen.
- Do not accept a generated mock where the primary workspace is still a table-like list, vertical row stack, column-header row layout, or generic records with cosmetic styling. The main structure must be a domain-shaped object, route, lane, band, stack, map, or other custom workflow surface.
- Do not accept a generated mock where rows have simply been decorated with icons, route nodes, avatars, pills, or tiny charts. If the first read is still "a list of options," it fails.
- Do not accept a generated mock where the main canvas is just two or three similarly weighted cards/columns. The references use cards, but they do not let equal cards replace a dominant active object.
- Do not accept a generated mock where the domain-specific object exists but does not control the composition. It must be the main way the user understands the task, not a decorative chart next to a normal admin page.
- Do not accept a generated mock that turns an app workspace into a website/marketing hero. Premium typography and spacing must stay app-appropriate and operational.
- Do not accept a generated mock with obvious AI artifacting in structured UI components. Timelines, steppers, rows, chips, borders, icons, and mobile previews must be clean, aligned, and internally consistent.
- Do not accept a generated mock with dated drop shadows. Surfaces should be separated mainly with subtle background offset, low-contrast borders, and modern tight/faded depth used on meaningful elevated states.
- Do not accept a generated mock where otherwise-small shadows still terminate sharply. Even tight elevation must dissolve softly and smoothly.
- Do not accept a generated mock where a lifted notice/action card becomes a dense mini-layout with multiple titled sections and a stack of equal-weight CTAs. Those surfaces should stay concise and decision-focused.
- Do not accept a generated mock where elevation appears only as a token sample in the design dock while navigation, selected rows, important cards/notices, floating controls, mobile nav controls, and popovers remain flat.
- Do not accept inconsistent radius systems. The mock should expose a coherent radius scale and apply it consistently.
- Do not accept a desktop mock where the outer tinted background is lost, navigation chrome is nearly the same color as the content canvas, or navigation shadows become harsh.
- Do not accept a default light-mode sidebar that becomes a heavy charcoal/black slab unless the user explicitly requested that contrast. A sidebar in the default style should usually be tonal, quiet, and light-to-mid tinted.
- Do not accept a sidebar mock where the sidebar appears to have caused the rest of the screen to become a default enterprise admin layout. The sidebar should be quiet chrome; the main content should still look as premium and airy as a no-sidebar composition, with rows and cards subordinate to the integrated workflow object.
- Do not accept a bottom footer/action rail that detaches actions from the active object and makes the mock feel like a conventional form application.
- Do not show a generated mock until it has cleared the written default-style quality gate.
- Do not show a generated mock until it has cleared the full checklist in `references/mock-comparison-checklist.md` against the eight reference images.
- Do not stop after scaffolding, theming, or a partial shell unless the user explicitly pauses the task.
- Do not rely on functional tests as visual proof.
- Do not sign off without Playwright screenshots for desktop and mobile.
- Do not ignore small visual mismatches. Tighten them until the implementation tracks the mock closely.
