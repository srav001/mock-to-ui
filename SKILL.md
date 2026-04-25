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
- For each iteration run, write entirely new prompt files from the current skill docs and the current user brief only. Do not copy-forward old batch prompt wording unless that wording has first been promoted into the reusable skill docs.
- For repeatability testing, prefer a fresh four-app validation batch instead of a single prompt: CPQ, ERM, ticketing / Jira-style work tracking, and health / fitness. Use fresh prompt files for each app and judge the whole batch, not just the strongest one.
- When running a four-way exploratory comparison set, include at least one sharper or zero-radius control-language variant as a control comparison, even though the default premium baseline still prefers rounder modern controls.
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
   - Generate a light-mode design board, not just a single screenshot. It must include the main desktop UI, a mobile view, and a full-width bottom design-system dock. The dock must visibly expose foundation surfaces such as stage/canvas/navigation chrome, palette and status swatches, typography scale, radius samples, border treatment, Contact 0-3 elevation tokens, and a few component or state examples that are clear enough to implement from.
   - Carry the style through writing, not screenshot attachments: the user brief, this skill's common anti-generic rules, `references/visual-style-references.md`, and the selected prompt pattern should define the design direction for GPT Image.
   - Use low quality only for fast rough exploration. Use high quality for the mock that may become implementation source.
   - The anti-footer and anti-bottom-tray rules apply to the app workspace itself, not to the board-only design-system dock. Do not remove, collapse, or miniaturize the dock in order to keep the app cleaner; the dock is mandatory implementation metadata and should stay clearly separated from the app UI.
   - Inspect the board before showing it to the user. If it looks like Bootstrap, a default admin template, a plain shadcn demo, or a conventional sidebar/KPI/table dashboard, reject it yourself.
   - Also reject the board if the bottom design-system dock is missing, reduced to a tiny stub, cropped, or too vague to implement from. If the board lacks readable surface, palette, typography, radius, border, or Contact 0-3 elevation information, it is not an acceptable design board.
   - Also reject the board if it creates information overload: cramped panels, too many simultaneous modules, small controls everywhere, weak gutters, little negative space, or a first screen that tries to show the whole product at once. The default style should feel minimal, spacious, airy, and deliberately gapped.
   - Also reject the board if it solves density by shrinking and stacking more content instead of omitting secondary material. When unsure, remove a whole secondary module or collapse it behind navigation rather than squeezing more into the first screen.
   - Also reject the board if the main workspace still resolves as a conventional list, table, vertical row stack, swimlane/process grid, stage-by-stage option matrix, or column-header row with a polished shell around it. Records can appear, but they must be secondary or visually transformed into a single integrated domain-specific lane, route, band, stack, map, selected object, or workflow surface.
   - Also reject the board if the main structure is three neighboring cards or columns of similar weight. A trio of polished cards is still a template unless one dominant integrated object clearly drives the current decision.
   - Also reject the board if domain details merely decorate normal rows. Icons, route markers, avatars, colored pills, and tiny diagrams inside rows do not count as a product-specific object when the dominant first read is still a list.
   - Also reject the board if the active object is built from a central circle, price box, score panel, or node fed by symmetrical left/right row stacks or feeder cards. Connector lines do not make row cards into an integrated object; that is usually a disguised admin table, even when the center has a domain label.
   - Also reject the board if the top of the workspace becomes a horizontal metric/KPI strip. Important numbers should be integrated into the active object or a small support marker, not arranged as a dashboard header row.
   - Also reject the board if a softer-looking multi-column fact bar reproduces the same pattern above the active object. Equal-weight facts in a neat row still read like a dashboard header even when borders are light.
   - Also reject the board if a route or flow is explained by stage labels or numbered steps across the top. A route with a step header is still a process layout.
   - Also reject the board if the supposed active object is really a large bordered container split into several labeled columns, compartments, or mini-modules. Wrapping a dashboard/process layout inside one shell does not make it a single integrated object.
   - Also reject the board if the product-specific structured object is only a small decoration beside a standard page layout. The domain object should drive the composition and decision flow.
   - Also reject the board if the active object becomes too abstract or decorative: a clean curve, graph, or diagram with too little usable product information, too few concrete facts, or too few direct actions. Minimal is not the same as empty; the hero still needs operational content.
   - Also reject the board if the main workspace is mostly a single graph, route, or diagram without enough control surfaces, filters, state, or direct actions to behave like software. A beautiful diagram alone is not a usable app screen.
   - Also reject the board if the main workspace reads more like a bespoke illustration or infographic than a buildable app surface. The next stage after approval is React plus shadcn/ui implementation, so the dominant object should be composed from feasible UI primitives such as selected records, rows, chips, tabs, filters, forms, detail surfaces, menus, drawers, and attached action clusters rather than relying on custom poster-like vector art.
  - For business-facing operational apps, a single continuous working surface made from three or four rich adjustable rows or levers is acceptable and often preferable to a more bespoke hero object, as long as the section still reads as one calm operating surface rather than a table, grid, or dashboard strip. Treat those rows as product controls inside one section: no column headers, no spreadsheet density, no repeated metadata columns, and no helper-card wall around them.
  - Also reject a row-based working surface if it reveals itself as a table through explicit column headers, rigid four-column scaffolding, line-by-line spreadsheet alignment, or repeated cell structure above every row. The approved row-based pattern must still feel like one authored operating surface, not a table with better spacing.
  - Also reject a row-based working surface if every row repeats the same fixed left-to-right anatomy such as label, current value, control, impact, and amount/confidence. Even without headers, that many repeated columns still read like a hidden table. Reduce the visible columns, keep the rows taller and calmer, and show only the few inline outcomes needed for the decision.
  - Also reject a business-app working surface if each lever/lane becomes its own rounded card, boxed module, or bordered slot inside the larger section. The approved pattern is one parent surface with quiet dividers, guide lines, or subtle bands, not card-per-row composition.
  - Also reject a business-app working surface if the impact/result area for each row becomes a separate sidecar card or boxed mini-panel. Impacts should usually sit inline at the edge of the same row rather than turning each lane into a left-card/right-card pair.
  - Also reject a business-app workspace if the whole main lever/row section becomes one large rounded white shell when the same information could live more openly on the canvas. Prefer open rows, subtle banding, or thin dividers before wrapping the whole working area in a giant card.
  - Also reject a business-app workspace if the parent working section still feels like a prominent bordered container whose shell is more noticeable than the content. When possible, the rows should feel like they live directly on the canvas or on a barely-there field rather than inside a hero card.
  - Also reject a business-app context zone if quote/program facts are wrapped in a full bordered strip or summary card when they could sit as open facts on the canvas with spacing and a few dividers.
   - Also reject the board if the active object offers only one obvious call to action and little else. The hero should usually include at least one scoped control, filter, or mode switch plus one attached action cluster, adjustment, or decision parameter so the screen behaves like a real working surface instead of a static concept render.
   - Also reject the board if the attempt to add utility turns into a conventional support section under the hero: full line-item tables, spreadsheet-like grids, stacked summary cards, note boxes, or form panels bolted beneath the main object. Add richer behavior through attached controls and a few concise support surfaces, not a generic admin lower half.
   - Also reject the board if buildability is solved by laying out a row or grid of same-weight factor cards directly under the focal object. Repeated driver or metric cards should usually be embedded as inline chips, anchors, compact rows, or one concise sidecar instead of becoming a dashboard strip inside the hero.
   - Also reject the board if buildability is solved by a plain list/table on one side and ordinary summary or action cards on the other. The active object should still feel integrated and product-shaped, not like a standard CRUD page with nicer spacing.
   - Also reject the board if chart marks, rings, route strokes, or decorative analytical lines are doing the visual heavy lifting while the actual operator-facing content is thin. In the reference quality bar, polish comes from hierarchy, surface tone, typography, and functional grouping, not from replacing working content with a hero graph.
   - Also reject the board if it becomes too much like a website, landing page, poster, or marketing hero. This skill builds app UIs: the screen must still show usable navigation, controls, records, actions, states, and workflow context.
   - Also reject the board if the composition falls into the wrong side of the balance: either old enterprise density or marketing-site emptiness. The target is app-first minimalism with real utility on screen.
   - Also reject the board if the app category being business-facing, operational, or enterprise-facing causes the design to default to old enterprise UI language. Business workflow is not permission to use dense admin composition, card grids, KPI strips, or conventional enterprise furniture.
   - Also reject the board if generated component details are visibly inconsistent: misaligned timeline dots, connector lines that do not pass through step centers, uneven card shadows, clipped text, broken icons, accidental overlaps, or mismatched row heights.
   - Also reject the board if shadows look old-fashioned, heavy, hard-edged, broad, blurry, feathered, ambient, or like default Bootstrap/card drop shadows. Elevation should use only crisp grey contact-edge tokens: Contact 0 is no shadow plus a 1px border; Contact 1 is `0 0 0 1px rgba(16,24,40,0.07), 0 1px 0 rgba(16,24,40,0.08)`; Contact 2 is `0 0 0 1px rgba(16,24,40,0.08), 0 1px 2px rgba(16,24,40,0.10)`; Contact 3 is for popovers only and maxes at `0 2px 3px rgba(16,24,40,0.10)`. If the model cannot render this crisply, prefer Contact 0 border-only surfaces over any visible soft shadow.
   - Also reject the board if a shadow spreads beyond a few pixels from the element edge. The acceptable shadow is a thin contact edge like a selected nav item or tiny popover, never a soft cloud, glow, dark band, muddy blur, or classic offset drop shadow.
   - Also reject the board if a lifted notice/action card becomes a mini-dashboard with stacked subsections, multiple equal-weight buttons, and long explanatory copy. Important lifted cards should stay concise, single-purpose, and easy to scan.
   - Also reject the board if the design-system strip shows elevation tokens but the actual app UI does not use that elevation on visible lifted states such as navigation chrome, selected records, important notices/cards, floating controls, popovers, or mobile navigation affordances.
  - Also reject the board if the design-system dock tries to show too many samples and loses implementation fidelity. When space is tight, sacrifice extra component examples before sacrificing legibility of surface, radius, border, and Contact 0-3 token metadata. Fewer, larger dock sections are better than a busy dock with incorrect values.
  - Also reject the board if the Contact 0-3 area is rendered like a palette, avatar list, semantic status chip set, or colored token ramp. Contact tokens are elevation metadata: show neutral sample surfaces plus text, not colored fills or role colors.
  - Also reject the board if the dock falls back to generic token naming such as `xs/sm/md/lg/xl`, `2xl`, `elevation-1`, or `shadow scale`. For this skill, the dock should usually document literal radius values such as `12px`, `16px`, `20px`, `24px`, and `Full pill`, and it must literally name `Contact 0`, `Contact 1`, `Contact 2`, and `Contact 3`.
   - Also reject the board if major cards, notices, or active objects use dark colored borders, sharp status outlines, or validation-style framed boxes. In the reference set, emphasis comes from soft tint, short accent marks, icons, pills, and tonal separation, not heavy colored card outlines.
   - Also reject the board if radius treatment is inconsistent across sibling cards, records, buttons, inputs, chips, or navigation controls.
   - Also reject the board if buttons, segmented controls, tabs, or small interactive surfaces fall into a middling enterprise radius that makes the UI feel default or admin-like. Controls should be either clearly rounded with generous modern radii or intentionally zero/near-zero when the product style calls for it. Visible 4px/6px/8px-style control radii usually read too timid and administrative. Avoid the vague in-between look entirely.
   - Also reject the board if the design-system dock samples a generic 4px/6px/8px radius ladder for a rounded light-mode system. The default rounded family should usually start around 12px and then step upward such as 12/16/20/24/full, unless the board is intentionally exploring a sharp system. If sharp is being explored, show an explicit zero-radius token rather than drifting into middling admin radii.
   - Also reject the board if the tinted outer background disappears on desktop, if sidebar/top navigation blends into the content canvas, or if sidebar/rail shadows become broad, harsh, or dirty.
   - Also reject the board if top bars, tabs, command bars, or sidebars flatten into the same surface value as the content canvas. Navigation chrome should stay slightly darker or more tinted than the main workspace in light mode, often through a soft graphite, stone, or muted primary-derived tint rather than plain same-white surfaces.
   - Also reject light-mode navigation chrome if it is technically different from the canvas but still reads same-white at thumbnail scale. The rail/sidebar/topbar must be visibly offset by a few perceptual steps through soft graphite, stone, or muted primary-family tint, not just a barely-there border.
   - Also reject the board if adding a sidebar causes the main content to regress into generic enterprise UI. CPQ, ERM, and user-requested sidebar apps may use sidebars, but the main canvas must remain modern, spacious, de-carded, and driven by a product-specific active object. The sidebar should never be followed by a default operational page made from rows, cards, KPI strips, and tables.
   - Design sidebar apps as if the main workspace had to clear the same quality bar without the sidebar. The sidebar is quiet chrome wrapped around the product, not permission to simplify the content into a standard enterprise layout.
   - If the workflow only needs lightweight left navigation, prefer a slim rail or rail-plus-secondary-context pattern before a full labeled sidebar. Do not spend the style budget on a heavier sidebar unless it is genuinely helping the product.
   - Also reject left navigation that grows into a wide labeled enterprise sidebar by habit. For this skill's default business-app baseline, left navigation should usually be either a slim rail or a narrow quiet sidebar that keeps labels subordinate and leaves the main canvas visually dominant.
   - In light mode, also reject a default charcoal/black sidebar slab unless the user's strict style explicitly asks for it. Prefer a softly tinted graphite, stone, muted brand tint, or a very light shade of a darker primary-family color that anchors the app without making it feel like enterprise admin software.
   - Also reject detached bottom metadata/action rails or selected-summary footers that turn the screen into a form workflow after the main object. Primary actions should be tied to the active object, a concise lifted notice, or a small floating control, not a generic footer bar.
   - Also reject a wide bottom approval tray, planner-decision strip, next-step strip, or multi-column action band spanning the lower canvas beneath the active object. Even when softly styled, these still behave like footer workflow furniture and pull the mock back toward enterprise software.
   - Also reject full-width recommendation or next-step bands placed beneath the active object. Even when softly styled, they still behave like a footer rail and flatten the composition.
   - Also reject a coaching or readiness screen whose top half is split into separate summary modules for readiness, drivers, training load, or session context. Those facts should merge into one decision surface instead of forming a quiet dashboard.
   - Also reject a coaching or readiness screen that hides those separate modules inside one large shell with dividers. One wrapper around readiness, drivers, load, recommendation, and session blocks still counts as a dashboard split.
   - Also reject a coaching or readiness screen if a large circular score, readiness ring, donut, or gauge becomes the dominant hero. In this skill's premium app language, polish should come from hierarchy, copy, signals, and recommendation flow rather than a giant wellness meter.
   - For fitness/coaching boards, prefer an open left-to-right recommendation band or path directly on the canvas, with readiness and load as inline markers and the chosen session attached to the same path. Reject a bordered overview card with titled compartments even if it is the only large object.
   - Also reject a ticketing/blocker screen if the active blocker is still a normal rectangular issue card or if the next action beneath it becomes another normal card. The blocker should feel embedded in the dependency field through a focal zone, capsule cluster, or line-attached detail.
   - Also reject ticketing/blocker layouts where the selected incident becomes a wide horizontal alert panel or tall mobile rectangle with a full perimeter outline, title block, metadata row, and CTA button inside a conventional card shell. Soft tint is acceptable; a standard alert card is not.
   - Before every comparison, load all eight temporary reference images into context.
   - Compare every generated board against the default-style quality gate in `references/visual-style-references.md` and the full checklist in `references/mock-comparison-checklist.md` before showing it. If the mock fails any critical checklist item or the overall pass count is too low, revise the prompt and regenerate.
   - During comparison, explicitly inspect the reference polish signals as well: stage/canvas/focal-surface separation, restrained accent use, typography contrast, nav chrome tone, calm radius/control language, quiet border system, contact-edge shadow discipline, one dominant visual idea, breathing room, curated data expression, and micro-precision.
   - When validating the reusable guidance with a fresh batch, also run the batch-level repeatability checks in `mock-tests/batch-repeatability-checks.md`. That file is for skill-development validation, not normal per-mock runtime use.
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
- Do not accept a generated mock that says "enterprise" only through enterprise styling. Enterprise/business apps should still use the same modern sparse design language: broad spacing, restrained information, and de-carded composition.
- Do not accept a generated mock that is cramped or overly information-dense. The default reference style needs generous whitespace, large panel padding, clear gutters, fewer simultaneous objects, and progressive disclosure instead of showing the entire product on one screen.
- Do not accept a generated mock that keeps too much first-screen content by shrinking cards, rows, or type. Remove or collapse secondary content instead of compressing the main screen.
- Do not accept a generated mock that covers the first screen in cards. Use card shells only for one or two lifted emphasis states at most; let most of the page separate through spacing, surface tone, subtle dividers, guide lines, or tight graphite contact-edge lift instead.
- For business/enterprise operational apps, prefer the newly approved sparse rail-led language: a slim tonal rail or narrow quiet sidebar, an open top context zone, one dominant working section, and only a very small number of lifted surfaces. Avoid side summary cards, outcome cards, assumptions lanes, and stacked helper panels unless the user explicitly asks for a denser product.
- In that business-app baseline, one calm operator surface with a few rich adjustable rows or levers is often the right answer. The goal is not to avoid rows at all costs; the goal is to avoid rows turning into a spreadsheet, process grid, KPI deck, or admin table.
- Do not accept a generated mock where those business-app rows repeat a fixed multi-column anatomy across the whole section. If every row is laid out as the same label/value/control/impact/value strip, it is still table logic wearing nicer spacing.
- Do not accept a generated mock where the primary workspace is still a table-like list, vertical row stack, swimlane/process grid, stage-by-stage option matrix, column-header row layout, or generic records with cosmetic styling. The main structure must be a domain-shaped object, route, lane, band, stack, map, or other custom workflow surface.
- Do not accept a generated mock where rows have simply been decorated with icons, route nodes, avatars, pills, or tiny charts. If the first read is still "a list of options," it fails.
- Do not accept a generated mock where the main canvas is just two or three similarly weighted cards/columns. The references use cards, but they do not let equal cards replace a dominant active object.
- Do not accept a generated mock where a central node, price box, score panel, or status object is flanked by left/right row lists or feeder cards. It still reads like a table split around a central object.
- Do not accept a generated mock where a top metric strip carries the decision. Metrics should be embedded in the active object or one concise support surface.
- Do not accept a generated mock where a soft multi-column fact bar above the active object quietly reproduces the same KPI-strip pattern. Equal-weight fact rows above the hero still count as a dashboard header.
- Do not accept a generated mock where a route is organized by stage labels, numbered steps, or headings across the top. That is still a process grid even when the route itself is elegant.
- Do not accept a generated mock where the domain-specific object exists but does not control the composition. It must be the main way the user understands the task, not a decorative chart next to a normal admin page.
- Do not accept a generated mock where the focal object is mostly an illustration, infographic, or poster-like diagram rather than a buildable app surface. The approved mock should already imply a feasible component map for React plus shadcn/ui.
- Do not accept a generated mock where charts, route strokes, rings, or decorative analytical marks are doing the work that should be handled by records, controls, state, filters, and attached actions.
- Do not accept a generated mock where buildability has been turned into a row or grid of same-weight driver cards beneath the hero. Inline anchors, compact rows, embedded chips, or one concise sidecar are preferred over a secondary dashboard strip.
- Do not accept a generated mock where buildability has been turned into a plain list/table plus ordinary helper cards. The active object must stay special and integrated even when every piece is feasible to build.
- Do not accept a generated mock that turns an app workspace into a website/marketing hero. Premium typography and spacing must stay app-appropriate and operational.
- Do not accept a generated mock that adds decorative garnish behind the workspace such as leaf silhouettes, plant shadows, blurred branch shapes, lifestyle cutouts, or other ambient motifs that are not buildable as product UI.
- Do not accept a generated mock with obvious AI artifacting in structured UI components. Timelines, steppers, rows, chips, borders, icons, and mobile previews must be clean, aligned, and internally consistent.
- Do not accept a generated mock with dated drop shadows. Surfaces should be separated mainly with subtle background offset, low-contrast borders, and crisp grey contact-edge tokens used on meaningful elevated states.
- Do not accept shadows outside the target style: no sharp Bootstrap shadows, no feathered blur, no broad blur halos, no dark offset shadows, no muddy gray clouds, no soft aura, and no hard bottom bands. The only accepted light-mode shadow is Contact 0-3: a 1-2px crisp fine grey lifted edge, with blur no greater than 3px and y-offset no greater than 2px. When the result is ambiguous, reject it; border-only is better than a soft shadow.
- Do not accept a generated mock where a lifted notice/action card becomes a dense mini-layout with multiple titled sections and a stack of equal-weight CTAs. Those surfaces should stay concise and decision-focused.
- Do not accept a generated mock where elevation appears only as a token sample in the design dock while navigation, selected rows, important cards/notices, floating controls, mobile nav controls, and popovers remain flat.
- Do not accept a generated mock if the full-width bottom design-system dock is missing, tiny, cropped, or too vague to guide implementation. The board must carry readable theme metadata: foundation surfaces, palette/status swatches, typography scale, radius samples, border treatment, Contact 0-3 elevation tokens, and a few component/state examples.
- Do not accept a generated mock if the dock replaces the required Contact 0-3 system with a generic shadow scale such as `Elevation (light)` or soft 4px/8px/12px tokens. The dock should literally name Contact 0, Contact 1, Contact 2, and Contact 3 and keep those values within the approved crisp contact-edge family.
- Do not accept a generated mock if the dock falls back to generic naming like `XS/SM/MD/LG/XL`, `2XL`, or `elevation-0..4`. The dock should use literal radius values and literal Contact token names so implementation can map them directly.
- Do not accept a generated mock if the dock advertises one radius or elevation family while the actual app uses another. The dock is implementation metadata, so its radii, borders, and Contact tokens must match the visible UI rather than behaving like an unrelated style board.
- Do not confuse the board-only design-system dock with the app UI. Anti-footer and anti-bottom-tray rules apply to the product workspace, not to the dock. Keep footer-like decision bands out of the app, but keep the dock in the board.
- Do not accept a generated mock where dark or heavy colored borders outline major cards, active objects, or notices. In light mode, border emphasis should stay soft and pastel-leaning; dark outlined cards read as validation-state enterprise UI, not the premium reference style.
- Do not accept inconsistent radius systems. The mock should expose a coherent radius scale and apply it consistently.
- Do not accept a generated mock where buttons or small controls use a middling enterprise radius that makes the interface feel default/admin. Controls should be either clearly rounded and modern or intentionally zero/near-zero for a sharp-style direction. Visible 4px/6px/8px-style control radii usually still feel administrative, and the chosen radius language must be applied consistently.
- Do not accept a desktop mock where the outer tinted background is lost, navigation chrome is nearly the same color as the content canvas, or navigation shadows become harsh.
- Do not accept a default light-mode sidebar that becomes a heavy charcoal/black slab unless the user explicitly requested that contrast. A sidebar or top/navigation surface in the default style should usually be tonal, quiet, and light-to-mid tinted, with a soft graphite or muted primary-derived cast rather than the same near-white as the content canvas.
- Do not accept a sidebar mock where the sidebar appears to have caused the rest of the screen to become a default enterprise admin layout. The sidebar should be quiet chrome; the main content should still look as premium and airy as a no-sidebar composition, with rows and cards subordinate to the integrated workflow object.
- Do not accept a sidebar mock where the main content quality is visibly worse than the no-sidebar apps in the same batch. A sidebar is not a style change. The main workspace should still look like something that would be strong even if the sidebar were removed.
- If lightweight left navigation is enough, prefer a slim rail over a labeled sidebar. Escalate to a fuller sidebar only when the workflow clearly needs it.
- Do not accept a bottom footer/action rail or selected-summary rail that detaches actions from the active object and makes the mock feel like a conventional form application.
- Do not accept a full-width recommendation or next-action band below the active object. Decision support should stay compact and attached, not stretched across the canvas like a footer section.
- Do not accept a generated mock where the top half of a coaching or readiness screen is split into separate summary sections for readiness, drivers, training load, and session context. That is still dashboard structure, not one integrated decision surface.
- Do not show a generated mock until it has cleared the written default-style quality gate.
- Do not show a generated mock until it has cleared the full checklist in `references/mock-comparison-checklist.md` against the eight reference images.
- Do not stop after scaffolding, theming, or a partial shell unless the user explicitly pauses the task.
- Do not rely on functional tests as visual proof.
- Do not sign off without Playwright screenshots for desktop and mobile.
- Do not ignore small visual mismatches. Tighten them until the implementation tracks the mock closely.
