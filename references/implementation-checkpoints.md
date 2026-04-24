# Implementation Checkpoints

Use this reference to avoid stopping halfway. Each checkpoint should end with a Playwright screenshot and a visual comparison against the approved mock.

## Checkpoint 1: Project And Tooling

Done means:

- The React shadcn/ui project exists in the approved location.
- The app runs locally.
- Required shadcn components are installed.
- `openai` and `playwright` are installed for generation and QA tooling.
- `scripts/generate-design-mock.mjs` exists in the project.
- `.env.example` includes `OPENAI_API_KEY=`.
- The mock artifact folder exists, usually `mock/`.

## Checkpoint 2: Approved Mock

Done means:

- A light-mode design board was generated with `gpt-image-2`.
- The light board includes desktop UI, mobile UI, and light design tokens.
- The user approved the light mock for implementation, or explicitly waived approval.
- A dark-mode companion board was generated from the approved light board before implementation begins.
- Both approved/accepted mock paths are recorded.

Do not code the UI before this checkpoint unless the user explicitly waived mock approval.

## Checkpoint 3: Theme

Done means:

- Global shadcn `:root` variables match the light mock.
- Global shadcn `.dark` variables match the dark companion mock.
- Page background, foreground, card surfaces, borders, primary/accent colors, muted text, rings, radius, and chart colors are set.
- A Playwright screenshot confirms the blank or partial app already has the correct visual atmosphere.

## Checkpoint 4: App Shell

Done means:

- Sidebar/header/navigation/shell proportions match the mock.
- Responsive shell behavior is started, not left for the end.
- Desktop screenshot matches the mock's composition.

## Checkpoint 5: Main Content

Done means:

- Main cards, tables, charts, forms, filters, or work surfaces are implemented.
- Mock data is realistic and sufficient without creating information overload.
- Component hierarchy matches the mock.
- Screenshot comparison does not show obvious drift.

## Checkpoint 6: Interactions And States

Done means:

- Tabs, filters, selected rows, dialogs, sheets, menus, mobile nav, and other visible interactions work if present.
- Important states are visually implemented: hover, active, selected, disabled, loading, empty, warning, success.
- Playwright captures at least one meaningful post-interaction screenshot.

## Checkpoint 7: Responsive UI

Done means:

- Mobile viewport matches the design board's mobile region.
- Content does not clip, overflow, or become illegible.
- Navigation has a clear mobile pattern.
- Screenshot comparison covers at least one narrow mobile viewport.

## Checkpoint 8: Scale Calibration

Done means:

- The first desktop and mobile screenshots have been compared against the approved mock.
- Sidebar width, header height, KPI height, table row height, right-panel width, mobile card density, and bottom-nav scale were checked.
- At least one deliberate scale/polish pass was made unless the screenshots already matched the mock extremely tightly.
- Any remaining mismatch was either fixed or recorded as an intentional implementation constraint.

## Checkpoint 9: Final Verification

Done means:

- Build/type/lint checks pass where available.
- Desktop and mobile Playwright screenshots are saved.
- The screenshot artifacts have been reviewed against the approved mock.
- Visible differences have been fixed or explicitly justified.
- The final response identifies the generated project path, approved mock path, and verification performed.
