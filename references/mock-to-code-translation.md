# Mock To Code Translation

Use this reference after the user approves the mock and before implementation.

## Implementation Reading

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

## Translation Priorities

Translate in this order:

1. Global theme and page background.
2. App shell proportions: sidebar/header/content/mobile structure.
3. Primary content hierarchy: hero area only if the app actually needs one, cards, tables, charts, work surfaces.
4. Component states: selected, hover, focus, active tab, warning, success, disabled, loading.
5. Responsive behavior.
6. Polish: alignment, shadows, border strength, text rhythm, icon consistency.

## Board Regions

Most generated mocks are design boards. Separate source regions before coding:

- App screenshot regions: implement these as the real UI.
- Mobile preview region: implement this as responsive behavior, not as a desktop element.
- Token strip: use for colors, radius, surfaces, status colors, and component style.
- Component examples: use for button/input/chip/table styling, not as extra product content.
- Labels or annotations: use for design interpretation, not literal app UI unless they are part of the product screen.

Do not accidentally recreate the whole design-board canvas inside the app.

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

Do not accept "close enough" when the mismatch is visible in a screenshot. Fix it.

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
