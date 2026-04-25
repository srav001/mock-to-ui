# Implementation Checkpoints

Use this reference to avoid stopping halfway. Each checkpoint should end with a Playwright screenshot and a visual comparison against the approved mock.

The app is not done unless it is both interactive and visually near one-to-one with the approved mock. Failing either condition means the implementation loop is still open.

Delivery-mode companion artifacts should exist as this phase advances:

- `design/implementation-reading.md`
- `design/implementation-review.md`
- `design/implementation-open-gaps.md`

## Checkpoint 1: Project And Tooling

Done means:

- The intended target folder was scaffolded directly as the app root; the app was not created in a temporary location and then copied over as a workaround.
- The React shadcn/ui project exists in the approved location.
- The app runs locally.
- `lucide-react` is installed.
- Required shadcn components are installed.
- `openai` and `playwright` are installed for generation and QA tooling.
- `scripts/generate-design-mock.mjs` exists in the project.
- `.env.example` includes `OPENAI_API_KEY=`.
- The mock artifact folder exists, usually `mocks/`.

## Checkpoint 2: Approved Mock

Done means:

- A light-mode design board was generated with `gpt-image-2`.
- The light board includes desktop UI, mobile UI, and light design tokens.
- The user approved the light mock for implementation, or explicitly waived approval.
- The approved light mock was moved into `design/`.
- `design/spec.json` exists and has at least `common` and `light`.
- `design/history.md` exists and captures why the approved direction was chosen.
- A dark-mode companion board was generated from the approved light board before implementation begins.
- The accepted dark-mode board is stored in `design/`.
- `design/spec.json` now includes `dark`.
- Both approved/accepted mock paths are recorded.
- `design/mock-review.md` exists and records the actual checklist pass that justified approval.

Do not code the UI before this checkpoint unless the user explicitly waived mock approval.

## Checkpoint 3: Theme

Done means:

- `design/spec.json` has been read before theming.
- `design/implementation-reading.md` has been written before theming work starts.
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
- Any visual detail that could not be matched with stock shadcn/Tailwind has been handled with targeted custom CSS rather than waived away.

## Checkpoint 6: Interactions And States

Done means:

- Tabs, filters, selected rows, dialogs, sheets, menus, mobile nav, and other visible interactions work if present.
- Dropdowns, selects, popovers, accordions, tooltips, segmented controls, and other visible controls are real interactive components, not static imitations.
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
- Multiple deliberate scale/polish passes were made as needed; expect several rounds rather than one quick adjustment.
- Any remaining mismatch was either fixed or recorded as an intentional implementation constraint.
- Each major visible region was checked independently rather than being judged only through the overall page impression.
- `design/implementation-review.md` and `design/implementation-open-gaps.md` were updated after the comparison pass.
- Focused screenshots exist for navigation chrome, header/context, dominant workflow surface, support modules, and mobile above-the-fold.

## Checkpoint 9: Final Verification

Done means:

- Build/type/lint checks pass where available.
- Desktop and mobile Playwright screenshots are saved.
- Additional focused screenshots of important regions and interaction states were captured when needed to verify one-to-one fidelity.
- The screenshot artifacts have been reviewed against the approved mock.
- Visible differences have been fixed; only concrete implementation constraints may remain, and they must be explicitly justified.
- `design/implementation-open-gaps.md` is empty or contains only explicitly tolerated hard-illustration exceptions.
- The first comparison pass did not falsely declare the open-gaps ledger empty.
- An adversarial final pass was completed and documented in `design/implementation-review.md`.
- The final response identifies the generated project path, approved mock path, and verification performed.

If any reviewer could still point at an obvious ordinary-view mismatch between the app and the mock, this checkpoint has not passed.

If the remaining mismatch is in ordinary UI chrome, content structure, spacing, borders, controls, navigation, or layout proportions, this checkpoint has definitely not passed. Only genuinely hard bespoke illustration areas deserve softer tolerance.
