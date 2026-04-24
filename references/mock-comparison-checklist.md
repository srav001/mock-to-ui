# Mock Comparison Checklist

Use this checklist on every generated mock before showing it to the user or accepting it as a keeper.

## Required Comparison Method

1. Load all eight temporary reference images into context before judging the new mock.
2. Compare the new mock directly against the reference set, not only against the prompt text.
3. Mark each item `pass`, `fail`, or `n/a`.
4. If any critical item fails, reject the mock immediately.
5. Only treat a mock as acceptable when:
   - every critical item passes, and
   - at least 44 of 50 items pass.

Critical items are marked with `CRITICAL`.

## 50-Point Checklist

### A. First Impression

1. `CRITICAL` The screen reads as premium product UI, not Bootstrap, default shadcn, or a generic admin template.
2. The first glance reveals one clear active object or main workspace, not a wall of equal modules.
3. `CRITICAL` The composition feels airy, with enough visible negative space around the primary content.
4. `CRITICAL` The screen feels like an app workspace, not a website hero, landing page, poster, or marketing concept with scenic/decorative background art.
5. `CRITICAL` At thumbnail scale, the outer stage, app canvas, and focal surfaces separate clearly.

### B. Layout And Composition

6. The screen does not fall back into the standard layout of nav + title + fact strip + a few cards + bottom actions unless that structure has been clearly transformed into something more designed.
7. The composition has some openness, asymmetry, layering, or deliberate structural rhythm instead of a plain rectangular stack.
8. `CRITICAL` The first screen focuses on one immediate task instead of trying to show the whole product or several parallel decisions at once.
9. Secondary modules have been pushed behind tabs, scroll, drawers, or secondary pages when they are not needed now. The screen should err on omission rather than completeness.
10. `CRITICAL` No local cluster feels cramped: side modules, steppers, bands, bottom actions, and mobile blocks all have breathing room.

### C. Navigation And Chrome

11. `CRITICAL` The navigation model fits the app type instead of being chosen by habit.
12. `CRITICAL` Navigation chrome is visibly distinct from the main canvas when navigation exists.
13. The navigation contrast is balanced: slightly stronger than the main canvas so nav anchors the UI at thumbnail scale, but not so heavy that nav dominates the page.
14. Active nav, active tab, or active control states are obvious at a glance.
15. Mobile navigation affordances use the same surface logic and elevation language as desktop when present.

### D. Surfaces, Cards, And Borders

16. `CRITICAL` The desktop outer tinted stage remains visible and does not disappear into a flat white page.
17. `CRITICAL` The main app canvas uses cool off-white, porcelain, or similarly refined surfaces instead of raw white.
18. Focal surfaces are brighter or more intentional than surrounding panels, and they do not become overstuffed mini-pages.
19. `CRITICAL` The layout does not solve the screen as a set of large neighboring full-card shells. At least one major region should feel open, banded, embedded, or only partially bounded instead of fully boxed.
20. Borders are low-contrast and selective rather than heavy or everywhere.

### E. Shadows And Elevation

21. `CRITICAL` Elevation is visible in the real UI, not only in the design dock.
22. Lift is applied on meaningful states such as nav chrome, a selected record, an important decision card, a floating control, or mobile controls, and those lifted states stay compact and purposeful.
23. Shadows stay tight, close to the surface, and low-opacity.
24. `CRITICAL` Shadow fades are smooth. No shadow ends as a sharp gray band, hard ring, or abrupt cutoff.
25. No element uses a noticeably heavier or more abrupt shadow than sibling surfaces unless it is intentionally the main focal lift.

### F. Typography And Text Rhythm

26. Headings are app-scale and expressive, not oversized website display type.
27. Typography hierarchy is readable at a glance, including labels, metrics, and actions.
28. `CRITICAL` Key facts are not rendered as a long repetitive metadata rail or detached KPI strip.
29. No text is clipped, overcrowded, or forced into tiny areas.
30. The copy structure helps the workflow: the user can tell what matters now, what the issue is, and what action comes next without reading through long support copy inside cards.

### G. Color And Theme System

31. `CRITICAL` The palette does not fall back to default blue primary and blue-tinted nav unless the brief actually asks for blue.
32. Accent, status, and neutral colors feel coherent as one system.
33. The outer stage, app canvas, nav chrome, focal surfaces, and controls have distinct tonal roles.
34. Key actions and status states have enough contrast to read clearly.
35. The UI does not collapse into same-white or too-near-white blending between page and surfaces.

### H. Product-Specific Structured Object

36. `CRITICAL` The screen contains at least one domain-specific structured object richer than a generic card or chart.
37. That object feels designed for the product, not like a stock chart, placeholder graph, or default widget.
38. Records, rows, or lanes feel transformed and curated instead of looking like a table.
39. Connector lines, steppers, route bands, and timelines align cleanly.
40. The main action cluster is clearly tied to the active object and current decision.

### I. Mobile Companion

41. The mobile view is calmer than desktop and shows fewer simultaneous modules.
42. `CRITICAL` The mobile view is not just a squeezed desktop screenshot.
43. The mobile view preserves the key decision context and primary action.
44. Mobile shadows, chips, tabs, and controls follow the same refined surface logic as desktop.
45. Spacing, tap targets, and information density look comfortable on the phone view.

### J. Design Dock Fidelity And Anti-Generic Gate

46. The design dock is compact enough that it does not crowd the main board.
47. Radius tokens shown in the dock match the visible UI.
48. Elevation tokens shown in the dock match the visible UI.
49. `CRITICAL` No part of the board still looks like a default shadcn/admin-template leftover.
50. `CRITICAL` The overall quality is meaningfully close to the eight reference images, not merely "clean enough."

## What To Do On Failure

- If a critical item fails, reject the mock and regenerate.
- If the mock passes fewer than 44 items, reject it and regenerate.
- If the same item fails repeatedly across fresh prompts, strengthen the reusable skill guidance before generating again.

## Batch-Level Repeatability Checks

When validating whether the skill guidance really generalizes, do not stop at one strong mock. Run these checks across the fresh batch as well.

1. Use a four-app validation batch unless the user asked for a different matrix.
2. Default validation batch:
   - CPQ
   - ERP
   - ticketing / Jira-style work tracking
   - health / fitness
3. Each app still has to pass the full 50-point per-mock checklist above.
4. The batch fails if only one app looks premium while the others fall back to template-like UI.
5. The batch fails if the same layout skeleton repeats across all four apps.
6. The batch fails if the same blue-led palette repeats by default across all four apps without a product reason.
7. The batch should show layout variety that fits the product:
   - ERP and CPQ may use sidebars when they help.
   - Ticketing and health / fitness should not default to the same sidebar shell unless the product brief clearly calls for it.
8. The batch fails if the navigation model is chosen by habit rather than product fit.
9. The batch fails if any one app becomes obviously more crowded, card-heavy, or information-dense than the others.
10. The batch fails if any one app ignores the surface hierarchy, outer stage tint, navigation contrast, or elevation rules that stronger mocks in the batch already prove are possible.
11. The skill guidance should only be treated as stable when the whole batch looks like it came from the same quality bar, not when one prompt happened to land well.
