# GPT Image 2 Generation

Use this reference when generating or revising the visual mock. The current OpenAI image model for this workflow is `gpt-image-2`.

Treat the image model as a strong renderer with limited governance reliability. Do not assume it will faithfully obey a long rulebook just because the rules were included somewhere in the prompt. The calling agent must choose the right constraints, phrase them concretely, foreground the critical ones, and then strictly validate the output afterward.

The operating loop for this phase is:

1. prompt
2. render
3. score against `references/mock-comparison-checklist.md`
4. reject or approve in writing
5. revise and re-score if needed

Do not collapse that loop into one optimistic generation pass.

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
- A full-width bottom design-system dock that is clearly separate from the app UI.
- Foundation swatches for stage, canvas, and navigation chrome plus a restrained palette/status strip with readable labels.
- Theme notes for typography, radius, border strength, and Contact 0-3 elevation tokens named explicitly as Contact 0, Contact 1, Contact 2, and Contact 3 rather than a generic shadow scale. Prefer showing the exact approved values in the dock instead of paraphrasing them.
- For rounded light-mode systems, radius samples in the dock should usually start around 12px and step upward such as 12/16/20/24/full rather than drifting into a generic 4px/6px/8px admin ladder. If sharp language is being explored, show zero radius deliberately instead of falling into middle radii.
- Do not let the dock relabel these tokens as `xs/sm/md/lg/xl/2xl`, `elevation-0..4`, or similar generic design-system shorthand. Use the literal radius values and literal Contact token names so the board can drive implementation directly.
- If the dock starts getting crowded, drop extra component examples before sacrificing fidelity in the surface, radius, border, and Contact 0-3 metadata.
- The Contact token area should read as neutral elevation metadata: blank or off-white sample surfaces plus literal token text. Do not let the model turn Contact 0-3 into a color ramp, semantic chip set, avatar list, status palette, hex-fill swatch set, or simplified border-only legend. The four sample surfaces should stay visually near-identical except for the shadow treatment, and the exact approved text should appear beside them.
- Component examples visible enough to implement: buttons, inputs, lists, tables, tabs, cards, nav, sheets, dialogs, status chips, filters, menus, or whichever components fit the app. Show chart components only when they are genuinely part of the product rather than the default way to make the board feel premium.
- Realistic mock data and labels. Avoid tiny dense text where exact words matter because image text may be imperfect.
- No decorative filler that cannot be implemented or that distracts from the product UI.

The implementation should reproduce the app views shown on the design board, not the board canvas itself. Do not build the palette strip, radius samples, component samples, annotations, or mobile preview frame into the actual app unless the user explicitly wants a style-guide page. Use those regions only to extract theme, scale, and responsive decisions. The anti-footer rules apply to the app UI, not to the board-only dock: a bottom approval tray inside the app is a failure, but the board is also a failure if the dock is missing or too vague to implement from.

## Light First, Dark Companion

The first generated mock must always be light mode by default. Use cool off-white, pale gray, porcelain, glacier, or similar light surfaces unless the user explicitly requests a dark-only product. Avoid raw white as the default surface.

After the light-mode board is approved, or after the user explicitly waives approval and says to build, generate a dark-mode companion board by passing the approved light board as an image reference and using `assets/prompts/dark-mode-companion-prompt.md`. The dark companion board is not a redesign; it preserves layout and workflow while translating the design system into dark-mode tokens.

Implementation starts only after:

- Approved or approval-waived light board exists.
- Dark companion board exists when the app will support dark mode.
- The implementation reading names both light and dark theme tokens.

## Prompt Structure

Always include a concise design-thinking and anti-generic section in the prompt. Then include either the default premium minimal style reference or the user's explicit style direction.

Put the highest-risk failure modes near the top of the final prompt in direct language. In practice, the image model follows a concentrated list of critical compositional rules more reliably than a long diffuse prompt where the key restrictions are buried.

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
Do not produce a generic AI dashboard, Bootstrap/admin-template UI, default blue-gray shadcn screen, equal-card grid, purple gradient hero, common SaaS layout with no point of view, or a concept-render hero that hides thin functionality behind one pretty graph. Use distinctive typography, committed color, purposeful composition, contextual depth, polished component details, and obviously buildable app behavior.

## Reference Comparison Protocol

Before judging any generated mock:

1. Load all eight temporary reference images into context.
2. Compare the new mock against `references/mock-comparison-checklist.md`.
3. Reject the mock immediately if any critical checklist item fails.
4. Reject the mock if it passes fewer than 44 of the 50 checklist items.
5. If the same failure repeats across fresh prompts, tighten the reusable skill guidance before generating again.
6. If this is project delivery rather than reusable-skill validation, and the board is close but fails on a few named issues, prefer an iterative correction pass against that specific mock before discarding the structure entirely.

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

Revision prompting is especially important because the image model may miss some rules on the first pass even when the prompt was correct. The calling agent should not mistake a near miss for an acceptable board, and should not assume the first render is the best test of the written guidance when the task is actual delivery rather than skill benchmarking.

In delivery mode, every failed-but-close board should produce `design/mock-revision-notes.md` before the next correction pass. That file should name:

- what to preserve
- what to fix
- which checklist items failed
- what must not change

In validation mode, repeated prompt-only failures should usually lead to a fresh prompt or a reusable-doc update rather than endless patching of one failed prompt.

When revising an existing mock:

1. Keep the successful parts stable.
2. Name the failed parts explicitly.
3. Ask for concrete visual changes, not vague "make it better" language.
4. Preserve the layout, palette, or object that is already working unless that is the thing being changed.
5. Reference the exact failed checklist items or exact composition faults from `references/mock-comparison-checklist.md` whenever possible, so the revision request is tied to the quality gate rather than vague taste language.

## Approval Discipline

For delivery work, every generated board must result in a written review artifact before approval:

- `design/mock-review.md` for the current score and pass/fail call
- `design/mock-revision-notes.md` when the board is being corrected in place

Do not move a board into `design/` and do not treat it as approved unless the written review shows that every critical checklist item passed and the total score is at least `44/50`.

## Inspecting Generated Mocks

Before asking for approval, inspect the image yourself:

- Is it implementable in React and shadcn/ui?
- Are desktop and mobile both visible?
- Are design tokens visible and coherent?
- Does it fit the user brief?
- Is the layout specific enough to guide code?
- Does the dominant workspace still look buildable with realistic React plus shadcn/ui primitives, or has it drifted into bespoke infographic territory?
- Is the spacing good enough: broad gutters, generous panel padding, enough negative space, and not too many visible rows/widgets?
- Does it avoid information overload by using progressive disclosure instead of showing every product module on one screen?
- Are local modules spacious enough: bar groups, workflow routes, side panels, bottom actions, and mobile sections should not feel compressed.
- Did the mock reduce first-screen density by omitting secondary content, or did it simply shrink more content into view?
- Does it still read as an app workspace rather than a website, landing-page hero, poster, or marketing concept?
- Do surfaces pop through a subtle background/content color offset rather than pure white everywhere?
- Are shadows modern and useful: Contact 0-3 only where needed, with a 1-2px crisp narrow grey contact edge, no hard edge, no heavy dark offset, no broad blur, and no old-school card-drop look?
- Do lifted notice/action cards stay concise and decision-focused, instead of becoming stacked mini-pages with several sections and buttons?
- If the design-system strip shows elevation tokens, are those tokens actually used in the app on navigation, selected records, important notices/cards, floating controls, popovers/sheets, mobile navigation controls, mobile preview, or one important surface?
- Does the board still include a full-width bottom design-system dock with readable surface, palette, typography, radius, border, and Contact 0-3 elevation information, or did the model accidentally delete the implementation metadata while cleaning the app UI?
- Did the dock keep the exact Contact 0-3 naming and tight values, or did it regress into a generic `elevation` scale with soft 4px/8px/12px shadow tokens?
- Did the dock render Contact tokens as neutral sample surfaces plus text, or did it incorrectly turn them into colored chips/swatches?
- Does the dock's radius family match the visible UI, or is the app showing one control language while the dock documents another?
- Did the image introduce decorative garnish such as leaf silhouettes, blurred branches, or ambient lifestyle motifs that make the workspace feel like a marketing comp instead of product UI?
- Is the layout over-carded? If every group is boxed with a border/card shell, regenerate with more open sections and selective surfaces.
- Are structured components visually consistent: centered timeline dots, clean connector lines, consistent repeated row/card geometry, aligned icons, and no clipping?
- Are there contradictions, impossible visual effects, or illegible core content?

If the mock is clearly unusable, regenerate once before showing it to the user.

For project delivery work, a good operating sequence is:

1. generate a first board from a fresh prompt
2. score it strictly against `references/mock-comparison-checklist.md`
3. if it is far off, regenerate with a stronger prompt
4. if it is close but fails on specific issues, run an iterative correction pass against that same board
5. re-score the revised board strictly before treating it as approved

## Validation Testing

When testing whether the reusable skill guidance works, use fresh prompts rather than patching the previous prompt. Delete old scratch prompts, create a new task prompt from the current skill guidance, generate one board, inspect the failure modes, then update the reusable guidance if needed. Do not rely on multiple prompt iterations for validation because that can hide whether a new app request will follow the skill by default.

For repeatability testing, prefer a fresh four-app batch rather than a single prompt:

- CPQ
- ERP
- ticketing / Jira-style work tracking
- health / fitness

The point of this batch is to prove that the skill does not only work for one layout or one color family. Run each app from a fresh prompt file. Compare each mock against the 50-point checklist, then run the batch-level repeatability checks in `mock-tests/batch-repeatability-checks.md`. If one app looks strong and the others collapse into generic blue dashboards or habitual sidebars, the skill still fails.
When running a four-way exploratory comparison set, keep at least one sharper or zero-radius control-language variant in the set as a control comparison, even if rounded remains the default premium baseline.
For each iteration run, write entirely new prompt files from the current skill docs and the current user brief only. Do not reuse old prompt files as the source of truth unless their wording has first been promoted into the reusable docs.

## Default-Style Quality Gate

When the user expects the default premium style, compare every generated board against the written quality gate in `references/visual-style-references.md` before showing it.

Reject and regenerate if any criterion is visibly weak:

- Background and surface contrast: page, app canvas, focal surfaces, controls, and selected states must not blend together.
- Surface temperature: default light surfaces should be cool off-white/porcelain rather than raw white unless the user explicitly requests a different brand tone.
- Desktop outer tint: the tinted outer page/stage should remain visible around the desktop app frame, not only in the mobile preview.
- Navigation contrast: if sidebars, rails, top bars, tabs, breadcrumbs, command bars, or filter bars exist, they need enough tonal contrast and active-state clarity to anchor the workspace. In light mode, prefer soft graphite, stone, or muted primary-derived tint over same-white chrome.
- Navigation surface: when navigation exists, it should read slightly darker, cooler, or more tinted than the main content canvas at thumbnail scale; same-white nav and content fail.
- Thumbnail nav check: if the rail/sidebar is technically different but still reads same-white at thumbnail scale, reject it.
- Business/enterprise domain is not a style waiver: operational apps should still be sparse, spacious, and mostly de-carded rather than reverting to enterprise admin layout.
- Business-app baseline: for business-facing operational tools, prefer a slim tonal rail or narrow quiet sidebar when left navigation is needed, an open top context zone with selective facts instead of a KPI strip, and one main working section with attached controls rather than several helper cards.
- Business-app working section: a sparse operating surface with three or four rich adjustable rows or levers is often a better premium answer than a hero graph or bespoke diagram, as long as it reads as one calm section rather than a spreadsheet.
- Hidden-table regression check: if that operating surface shows explicit column headers, rigid repeated cells, or the same repeated left-to-right row anatomy such as label/value/control/impact/value, it has slipped back into admin UI and should be rejected.
- Card regression check: if that operating surface turns into repeated rounded row cards or boxed sidecar impact cards, it has also slipped back into admin UI and should be rejected.
- Shell regression check: if the working section is wrapped in a large rounded white shell whose boundary is one of the main visual reads, it is still too boxed. Open the rows back onto the canvas or reduce the parent shell until it behaves like a field rather than a hero card.
- Navigation balance: the nav surface should not become a saturated or overly contrasty block. If it dominates the page more than the active workspace, regenerate with subtler tonal separation.
- Navigation fit: do not default to a sidebar. Use the navigation model that best fits the product, which may be a top bar, top tabs, segmented header, bottom navigation, or a lighter hybrid layout.
- Navigation escalation: if a left navigation aid is useful but a full menu is not essential, start with a slim rail before escalating to a labeled sidebar.
- Sidebar parity: when a sidebar is appropriate, compare the main canvas against the no-sidebar quality bar as well. If the sidebar makes the content more ordinary, more boxed, or more enterprise-looking than a comparable no-sidebar composition, regenerate and redesign the main workspace first.
- Color bias: do not default to blue primary and blue-tinted navigation unless the user or product actually calls for blue. Choose other coherent accent families when appropriate.
- Radius consistency: cards, rows, inputs, buttons, tabs, chips, and icon buttons should follow a coherent radius scale and match the design-system strip. Controls should be either clearly rounded or intentionally zero/sharp; avoid the middling admin radius zone, especially visible 4px/6px/8px-style control radii.
- Dock fidelity: the dock is implementation metadata, not decorative garnish. Its radius and Contact token samples must match the actual UI rather than describing a different system.
- Shadows and elevation: use Contact 0-3 only. Elevation should read as a crisp, narrow grey contact edge close to the surface, not a wide halo, muddy blur, soft cloud, or old card drop shadow. If the model cannot render the contact edge cleanly, prefer Contact 0 border-only surfaces instead. Elevation tokens shown in the design-system strip should be visible in the main app UI on meaningful lifted states such as navigation, selected records, important notices/cards, mobile nav affordances, floating controls, and popovers, not only as samples, and the strip itself must not advertise a larger non-approved shadow token.
- Header/top-bar shadows: if top navigation or a command bar uses elevation, it should be especially tight, slim, and light; broad header shadows fail immediately.
- Card usage: not every group should be boxed. Use open sections, bands, typography, and spacing where cards are unnecessary.
- Buildability: the focal object should be mostly made from realistic app primitives and operator-facing content, not from a hero graph, ring, route illustration, or bespoke vector concept that would force implementation to invent the real UI later.
- Health/readiness hero check: reject a giant ring, donut, gauge, or circular score when it becomes the dominant answer instead of an integrated recommendation surface.
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
