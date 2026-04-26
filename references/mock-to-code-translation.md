# Mock To Code Translation

Use this reference after the user approves the mock and before implementation.

## Core Invariant

Implementation is considered successful only when both conditions are true:

- the UI is a real interactive app composed from actual components and states, not frozen markup
- the UI is a near one-to-one reproduction of the approved mock at ordinary screenshot comparison

If either condition fails, continue iterating. Do not downgrade the requirement to "similar", "close", or "good enough".

Once the mock is approved, you are no longer designing broadly. You are reproducing an approved artifact. Make local implementation judgments only when they preserve or tighten fidelity.

The approved artifact is a design board, not a literal page layout to recreate wholesale. The app regions inside the board are the product. The board presentation around them is reference packaging.

## Implementation Reading

If `design/spec.json` exists, read it before writing the implementation reading. Treat it as the current approved token and design-continuity layer, then verify it against the approved board images.

Write a short implementation reading from the approved mock. It should be concrete enough to drive code and visual QA:

```text
Approved mock reading:
- Layout: ...
- Navigation: ...
- Theme: ...
- Components: ...
- Data density: ...
- Desktop behavior: ...
- Mobile behavior: ...
- Interaction states: ...
- Visual risks to verify: ...
```

Keep it brief, but do not skip it. This reading prevents the agent from coding a generic UI from memory instead of matching the approved design board.

If `design/history.md` exists, read it too. Use it to understand why prior design choices were accepted so the implementation does not accidentally undo them.

Write this into `design/implementation-reading.md` in delivery mode.

The target is not "similar" or "inspired by." The target is a near one-to-one reproduction of the approved mock, including spacing, geometry, component state, shadow treatment, border strength, typography rhythm, and responsive behavior.
Layout fidelity and style fidelity are separate gates. Matching the placement while drifting into a different visual language is still a failure.

## Translation Priorities

Translate in this order:

1. Global theme and page background.
2. App shell proportions: sidebar/header/content/mobile structure.
3. Primary content hierarchy: hero area only if the app actually needs one, cards, tables, charts, work surfaces.
4. Component states: selected, hover, focus, active tab, warning, success, disabled, loading.
5. Responsive behavior.
6. Polish: alignment, shadows, border strength, text rhythm, icon consistency.
7. Fine-grain visual parity: keep iterating until close screenshot comparison stops revealing obvious drift.

## Board Regions

Most generated mocks are design boards. Separate source regions before coding:

- App screenshot regions: implement these as the real UI.
- Mobile preview region: implement this as responsive behavior, not as a desktop element.
- Token strip: use for colors, radius, surfaces, status colors, and component style.
- Component examples: use for button/input/chip/table styling, not as extra product content.
- Labels or annotations: use for design interpretation, not literal app UI unless they are part of the product screen.
- Outer board stage, device frames, centered poster padding, and exhibition-style framing: do not implement these as product UI unless the product itself clearly requires them.

Do not accidentally recreate the whole design-board canvas inside the app.
Do not build an HTML mock sitting inside a big padded page. Build the real app so it owns the viewport. The browser window should feel like the product itself, not like a board containing the product.
If the approved board shows a rounded outer shell around the desktop app, treat that shell as the real application boundary or chrome edge, not as a second framed object that floats inside another neutral page.
The outermost browser-visible page should usually be the product background and shell. A separate exhibition page around the app is a failure unless the product explicitly calls for it.

When extracting from the token strip, update `design/spec.json` first if it is missing or stale. Implementation should consume that structured spec rather than repeatedly re-parsing the board from scratch.

## Match Criteria

The implementation should match the mock in:

- Composition: same major regions, proportions, and visual weight.
- Color: same background/surface/action/status roles.
- Density: similar number of visible rows/cards/controls and similar whitespace.
- Shape: similar radius, border style, shadow depth, and separators.
- Typography feel: similar scale, hierarchy, weight, and contrast.
- Components: same kind of sidebar, header, table, cards, filters, charts, forms, or dialogs.
- Mobile: same responsive priorities shown in the design board.
- Scale: sidebar width, header height, KPI card height, table row height, right-panel width, mobile card density, and bottom-nav height should visually match the mock.
- Interaction reality: visible controls should be real components with matching states, not frozen drawings of open/selected UI.
- Viewport ownership: the implemented desktop app should occupy the viewport as the actual product shell rather than floating as a centered mock inside extra presentation padding.

Do not accept "close enough" when the mismatch is visible in a screenshot. Fix it. The user should not be able to tell the implementation apart from the approved mock without deliberate forensic inspection.

Treat any ordinary visible mismatch as a blocker, not a polish note.
Treat style-system drift as a blocker even when the composition is preserved.

Treat these as explicit blockers as well:

- the app reads like a design mock pasted into HTML instead of a real full app
- the desktop screen is implemented as a floating exhibit card because the board itself was floating
- the mobile region is treated as a device mockup instead of responsive product behavior
- the outer board frame, poster spacing, or phone hardware silhouette are recreated as if they were product requirements
- the browser still shows a second presentation canvas or extra perimeter padding around what should be the real app
- the implementation preserves layout while typography, chrome tone, border treatment, component proportions, or accent handling visibly diverge from the approved mock
- the UI reads like a default shadcn/Tailwind implementation wearing the mock's structure instead of reproducing the mock's styling language

Judge the match section by section, not only as one overall impression:

- header and top context area
- navigation chrome
- dominant workflow object
- secondary/supporting modules
- mobile composition
- visible interaction states

Do not let a strong overall mood hide easy misses in the header, top controls, spacing, chip styling, or layout geometry. Those regions are often the easiest to reproduce and should be held to the strictest standard.
Do not let correct placement hide style misses. Border strength, fill tone, chip shape, button weight, input styling, nav tint, text contrast, and shadow/contact treatment should be judged independently from geometry.

If the mock contains a bespoke generated illustration region such as a body silhouette or custom anatomy-style figure, that zone may be allowed a looser match than the surrounding UI chrome. Preserve its role and composition, but do not use illustration difficulty as an excuse for drift in the rest of the interface.

Keep a running `design/implementation-review.md` and `design/implementation-open-gaps.md` during this phase. If an ordinary visible mismatch is still in the open-gaps file, the implementation is not ready to sign off.
Those two files must preserve the required ledger tables from the templates. Prose summaries are not an acceptable substitute.

## Scale Calibration

After the first Playwright desktop and mobile screenshots, perform one explicit calibration pass even if the UI looks broadly correct. Compare:

- Sidebar width and nav item spacing.
- Header height, search width, and control sizes.
- KPI card height, internal padding, icon badge size, and sparkline scale.
- Table row height, column density, chip size, and pagination scale.
- Right detail panel width, section spacing, and bottom action bar height.
- Mobile header height, tab size, card density, record list row height, and bottom nav.

Make at least one deliberate scale or polish adjustment unless the screenshots already match the mock extremely tightly.

## Practical Limits

Generated image mocks may contain imperfect text or visually impossible details. Preserve intent, not artifacts:

- If text in the mock is garbled, implement clear domain-specific text with the same visual density.
- If the mock shows impossible overlapping UI, implement the closest coherent equivalent.
- If the mock uses a decorative effect that hurts usability, simplify it while preserving mood.
- If the mock omits an accessibility-critical state, add it in the implementation.

When making these judgment calls, keep the visual result faithful and explain only meaningful deviations.

## Interaction Mocking

The app does not need real backend behavior. It should still feel interactive:

- Tabs should switch visible content.
- Filters should affect visible mock data or selected labels.
- Rows/cards should have selected or detail states.
- Dialogs/sheets should open and close if present in the mock.
- Buttons should have hover/focus/disabled affordances.
- Mobile nav should open as a drawer or collapse predictably.

Use simple local state. Do not build a backend unless the user requested it.

Do not hardcode a screenshot-like state when the mock clearly shows an interactive control. If a dropdown is open in the mock, use a real dropdown/select/menu and open it for the captured state. If a dialog, sheet, popover, tooltip, tabset, switch, slider, or accordion is visible, build the real component and capture the correct state through interaction.

If Tailwind utilities or stock shadcn styling are not sufficient for one-to-one fidelity, add custom CSS classes and targeted component styling. Fidelity matters more than staying inside default utility patterns.

You may also install and use any suitable React/JS libraries when they help reproduce the approved mock or the interaction model more faithfully. Charting libraries, calendar/date-planner libraries, motion helpers, advanced input primitives, and other focused UI libraries are acceptable when used intentionally. Do not force everything through stock shadcn components if a small additional library is the more faithful implementation path.
