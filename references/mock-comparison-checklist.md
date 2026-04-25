# Mock Comparison Checklist

Use this checklist on every generated mock before showing it to the user or accepting it as a keeper. It converts the eight reference images into concrete verification items, so review the mock against the references directly rather than judging from prompt compliance alone.

This checklist is the enforcement layer for the calling agent, not a capability assumption about the image model. The model may miss or only partially obey some rules even when prompted correctly. The agent must therefore use this checklist as a hard gate after generation rather than assuming prompt compliance.

## Required Comparison Method

1. Load all eight temporary reference images into context before judging the new mock.
2. Compare the new mock directly against the reference set and `visual-style-references.md`.
3. Explicitly review the reference polish signals in `visual-style-references.md`: surface hierarchy, restrained accent use, typography contrast, quiet nav chrome, calm radius/control language, quiet borders/contact-edge lift, one dominant visual idea, breathing room, curated data expression, and micro-precision.
4. Mark each item `pass`, `fail`, or `n/a`.
5. If any critical item fails, reject the mock immediately.
6. Only treat a mock as acceptable when every critical item passes and at least 44 of 50 items pass.

In delivery mode, record that result in `design/mock-review.md`. If the board is close but fails, create `design/mock-revision-notes.md` before the next correction pass so the failed items are carried into the next prompt explicitly.

Critical items are marked with `CRITICAL`.

## Reference Polish Lens

Before scoring the 50 items, make an explicit judgment on these reference-derived polish signals:

1. Surface hierarchy: outer stage, app canvas, navigation chrome, and focal surfaces separate clearly.
2. Accent restraint: color is selective and purposeful rather than spread across many unrelated modules.
3. Typography authority: display or numeric anchors clearly outrank utility text.
4. Nav chrome tone: sidebars/top bars feel like quiet product chrome, not blank same-white filler or heavy slabs.
5. Shape calmness: radius, pills, and control families feel consistent and deliberate.
6. Shadow/border discipline: separation comes from tone, spacing, and contact-edge lift rather than fluffy drop shadows or dark outlines.
7. Dominant visual idea: the screen has one memorable operational object instead of many equal cards.
8. Breathing room: the composition leaves real quiet areas and generous padding.
9. Curated operational content: records, actions, metrics, filters, and any charts feel edited into the composition rather than dumped as raw UI inventory.
10. Micro-precision: geometry, alignment, icons, chips, and internal spacing hold up in close crops.

A mock can be structurally correct and still fail the quality bar if several of these polish signals are weak.

## 50-Point Checklist

### A. Reference Closeness And App Identity

1. `CRITICAL` The mock reads as premium product UI at first glance, not Bootstrap, default shadcn, or a generic admin template.
2. `CRITICAL` The screen remains an operational app workspace with controls, records, states, and actions, not a website hero, landing page, poster, decorative concept, or sparse marketing-style composition. Business/enterprise domain is not an excuse for old enterprise admin styling, and decorative garnish such as leaf shadows, branch silhouettes, or ambient lifestyle art should not appear behind the workspace.
3. The board has a designed-object feeling: a clear app frame, stage, silhouette, or authored product boundary rather than a normal browser page of boxes.
4. `CRITICAL` At thumbnail scale, the outer stage, app canvas, navigation chrome, focal surfaces, and selected states separate clearly; the mock does not collapse into one flat white or one flat dark plane.
5. The overall result is meaningfully close to the reference set in composition quality, restraint, hierarchy, polish, and single-idea clarity, not merely clean or tidy.

### B. Active Workspace And Composition

6. `CRITICAL` One active object or current decision dominates the first screen.
7. The active object is visually memorable, operational, and buildable: selected record, route, report, account, readiness band, timeline, thread, product stack, or equivalent product-shaped structure with usable facts and direct actions, composed from realistic app primitives rather than bespoke illustration. A single graph/route/diagram without controls, state, or next-step action fails. A giant hero ring, donut, gauge, or wellness meter also fails when it becomes the main answer. One elegant object plus one lonely CTA is still too thin; the hero should usually provide at least one scoped control, filter, or mode switch and one attached action cluster, adjustment, or decision parameter.
8. The layout does not fall back to header plus filters plus KPI strip plus card grid plus table unless that skeleton has been visibly transformed.
9. The composition uses openness, asymmetry, layering, selected lanes, bands, or embedded zones instead of an equal rectangular stack, three equal cards, a process grid, a vertical row list, a plain list/table with helper cards beside it, or one large wrapper that still contains several ordinary modules.
10. `CRITICAL` The first screen focuses on one immediate task and does not try to show the whole product.

### C. Progressive Disclosure And Density

11. Secondary modules are omitted, collapsed, placed behind tabs, moved below the fold, or routed to drawers/pages when they are not needed for the current decision.
12. Empty space and quiet bands are preserved as part of the design rather than filled with extra widgets; the screen leaves real calm areas and does not treat every open region as capacity to fill.
13. `CRITICAL` No local cluster feels cramped: routes, steppers, side modules, bottom actions, analysis areas, and mobile blocks have breathing room.
14. The screen avoids long metadata rails, repeated icon-label-value columns, and detached fact strips under the title.
15. Supporting content is quieter than the active object and does not compete for equal visual weight; top metric/KPI strips, soft multi-column fact bars, internally sectioned mega-panels, a generic lower admin section of table-plus-summary-plus-form, a row/grid of equal-weight driver cards under the hero, or a wide bottom decision/approval tray do not carry the main decision. The first screen should not be blanketed in card shells; one or two emphasis cards at most is the target. For business/enterprise operational apps, the first screen should usually resolve as an open context/header zone plus one dominant working section rather than a dashboard stack of summary cards and helper modules. A row-based working section also fails if each row becomes its own rounded card, boxed sidecar pair, a fixed repeated multi-column strip, or a giant enclosing shell that could be more open on the canvas.

### D. Surface System, Cards, And Borders

16. `CRITICAL` The desktop outer stage remains visibly tinted or darker than the app canvas.
17. `CRITICAL` The main app canvas uses refined off-white, porcelain, glacier, stone, graphite, charcoal, or equivalent surfaces instead of raw default white or flat gray.
18. Focal surfaces are subtly brighter, cleaner, tinted, or more intentional than surrounding canvas areas; they do not use the same raw white as every other region.
19. `CRITICAL` Not every group is boxed. At least one major region is open, banded, embedded, or only partially bounded.
20. Borders are quiet, low-contrast, and selective; structure comes mainly from spacing, tone, grouping, and hierarchy rather than a heavy admin-card grid or dark colored outline system.

### E. Navigation And Product Chrome

21. `CRITICAL` The navigation model fits the product workflow instead of defaulting to a sidebar. If lightweight left navigation is enough, a slim rail or a narrow quiet sidebar is usually better than a fuller labeled sidebar.
22. Navigation chrome is tonally distinct from the main canvas when present; top bars and sidebars should stay slightly darker or more tinted than the workspace, ideally through soft graphite, stone, or a muted primary-derived tint rather than same-white chrome, but a default light-mode sidebar is not a heavy charcoal/black slab unless explicitly requested. If the nav is technically different but still reads same-white at thumbnail scale, fail it. A barely warmer or barely darker rail is still a fail if the chrome does not visibly anchor the workspace.
23. Active nav, tabs, segmented controls, command buttons, and selected controls are obvious at a glance.
24. Command/search/filter surfaces feel spacious, grouped, and intentional rather than a cramped toolbar row; the nav and command layer should feel authored, not like utility text floating on blank white.
25. `CRITICAL` If a sidebar is present, the main workspace still avoids generic enterprise/admin composition and keeps a spacious, modern, domain-object-led layout. The sidebar must not be followed by a default title/filter/KPI/table/card canvas, and the main content should still look as strong as a comparable no-sidebar app in the same batch.

### F. Color And Theme Discipline

26. `CRITICAL` The palette does not fall back to default blue primary and blue-tinted navigation unless the brief asks for blue.
27. Accent color is selective and purposeful: active state, route node, selected record, primary action, badge, short rule, or one compact analytical highlight.
28. Status colors are softened and systemized, not saturated badge spam or validation-style full-card outlines.
29. Neutral, accent, status, border, and surface colors feel like one coherent, restrained design system rather than many unrelated highlight colors.
30. The UI avoids same-white blending and also avoids becoming a one-note palette with no focal contrast.

### G. Typography And Text Rhythm

31. Display type, numeric anchors, labels, captions, status text, and actions have clear role-based hierarchy.
32. Metrics or key facts are treated as visual anchors when present, not small values in a repetitive grid.
33. Headings are expressive but app-scale; they do not overwhelm controls or turn the screen into a marketing hero.
34. Utility labels are lighter and smaller without becoming illegible.
35. No important text is clipped, overcrowded, randomly tiny, or forced into too-small UI areas.

### H. Product-Specific Data Objects

36. `CRITICAL` The screen contains at least one domain-specific structured object richer than a generic card, KPI, chart, or table, and that object still looks feasible to build with normal app components rather than custom illustration. For business-facing operational tools, one continuous working surface with a few rich adjustable rows or levers can satisfy this if it clearly behaves like one operating section rather than a spreadsheet; explicit column headers, rigid table scaffolding, or the same repeated five-part row anatomy across the whole section fail it.
37. The structured object feels designed for the product domain rather than a stock chart, placeholder widget, abstract infographic, or raw information dump.
38. `CRITICAL` Records, rows, lanes, routes, timelines, and any analytical elements are curated and visually transformed into an integrated domain object instead of looking like a spreadsheet, decorated list, vertical option stack, central-node/price/score-with-row-stacks, feeder-card diagram, process grid, route option matrix, stage-labeled or numbered-step route, repeated row templates with fixed left-to-right columns, three-card board, a standard outlined blocker card, a hero chart doing all the work, or a single large shell subdivided into normal dashboard modules.
39. Connector lines, timeline dots, route nodes, bars, row baselines, icons, chips, and repeated geometries align cleanly and look art-directed rather than loosely generated.
40. The primary action cluster is visibly tied to the active object and current decision, not detached as a generic bottom footer/action rail, selected-summary rail, wide approval/planner tray, full-width recommendation band, or separate follow-up card beneath the focal object. The active workspace should also expose at least one nearby control, filter, or mode switch rather than forcing all utility into a single button.

### I. Elevation, Radius, And Precision

41. `CRITICAL` Elevation is visible in the real UI, not only in the design dock.
42. Elevation is applied to meaningful states such as selected records, command surfaces, nav chrome, important notices/cards, floating controls, popovers, or mobile controls, and it is used sparingly enough to stay premium.
43. `CRITICAL` Every visible light-mode shadow matches Contact 0-3 only: a 1-2px crisp narrow grey contact edge, blur no greater than 3px, y-offset no greater than 2px, no shadow spread, no feathered blur, no soft aura, no Bootstrap/card-drop look, no broad halo, no dark band, no muddy cloud, and no abrupt cutoff. This applies to the design-system strip as well as the UI itself. If the edge reads as a soft shadow rather than a tight contact edge, fail it; border-only Contact 0 is preferable. In the dock, Contact tokens should appear as neutral sample surfaces plus text, not as colored swatches, semantic chips, or role-color ramps.
44. Important lifted cards stay concise: one issue, short rationale, and minimal actions, not dense mini-pages.
45. Radius tokens are coherent across app frame, panels, records, inputs, buttons, chips, nav controls, and mobile elements; repeated controls should feel like one calm control family, and smaller action surfaces should not sit in an awkward middle-radius enterprise zone. The default premium direction should lean clearly rounded and modern; zero/sharp corners are acceptable only when they are obviously intentional, but the vague 4-8px admin look fails. In rounded light-mode boards, the dock should usually sample something like 12px, 16px, 20px, 24px, and full pill rather than 4px/6px/8px.
46. `CRITICAL` Major cards, notices, and active objects do not rely on dark colored borders or sharp status outlines. In light mode, border emphasis should stay soft and pastel-leaning; if a colored border is one of the darkest or sharpest things on the screen, fail it.

### J. Mobile Companion And Design Dock

47. `CRITICAL` The mobile view is a calmer companion view, not a squeezed desktop screenshot.
48. Mobile preserves the active object, key decision context, and primary action while omitting or collapsing secondary desktop modules.
49. Mobile spacing, tap targets, chips, cards, nav affordances, shadows, radius, and border treatment follow the same refined system as desktop.
50. `CRITICAL` The board includes a full-width bottom design-system dock that is clearly separate from the app UI and detailed enough to implement from: foundation surfaces such as stage/canvas/navigation chrome, palette/status swatches, typography scale, radius samples, border treatment, exact Contact 0-3 elevation tokens named as Contact 0, Contact 1, Contact 2, and Contact 3 with their approved values, and a few component or state examples. If the dock is missing, tiny, cropped, too vague, overcrowded enough to lose token fidelity, replaced by a generic soft elevation scale, switched to generic labels such as `xs/sm/md/lg/xl/2xl` or `elevation-0..4`, turns the Contact area into hex-fill swatches or simplified border labels instead of neutral sample surfaces plus exact text, or clearly describes a different radius/elevation family than the app itself, fail the board.

## What To Do On Failure

- If a critical item fails, reject the mock and regenerate.
- If the mock passes fewer than 44 items, reject it and regenerate.
- If one category repeatedly fails across fresh prompts, strengthen the reusable skill guidance for that category before generating again.
- If a prompt-specific output fails but the reusable guidance is already clear, create a new fresh prompt for the next validation run instead of patching the failed prompt repeatedly.
- In actual project delivery, if the board is close but fails on a few named items, run a targeted iterative correction pass against that specific mock and then score the revised result again with this same checklist before approving it.
- In actual project delivery, do not approve or promote a board to `design/` without a written review showing the score, the critical-item result, and the explicit pass/fail call.
