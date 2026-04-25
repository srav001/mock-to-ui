# Visual Style References

Use this reference by default when the user does not provide a strict competing style. Also use it when the user wants a modern, minimal, premium, non-bootstrappy UI.

This file is the skill's default visual language. It should be enough to generate the style without bundling or attaching screenshot references. Do not make any image reference assets part of the runtime workflow; keep the style as written rules and prompt language.

## Collective Style

These references are not standard Bootstrap-style dashboards. They feel premium because they combine oversized spatial composition, soft surfaces, expressive type scale, selective color, and carefully layered controls. They are minimal, but not empty: each screen has confident hierarchy, strong rhythm, and a few memorable visual moments.

The default style must be visibly different from an ordinary enterprise admin template. A plain sidebar, top filter row, KPI strip, data table, and right detail panel is not enough. If that familiar structure appears, it must be transformed through scale, layering, unusual panel geometry, richer row treatment, expressive type, and a stronger surface system.

For the first mock, do not choose the safest neutral dashboard variant and do not start in dark mode. Pick an opinionated light-mode default from the reference language: soft editorial finance, layered sales report, warm product overview, or quiet collaboration workspace. The output should have one strong stylistic identity, not a diluted average of all references.

The quality bar is not "clean SaaS." A clean functional app screen can still fail if it is just one white dashboard card with a few polite controls. The default should have a designed-object feeling: a visible stage, clear surface hierarchy, large quiet regions, confident typographic anchors, and a few custom workflow surfaces that would not appear in a starter kit.
It can also fail when the page is polished but still structurally resolves as two or three large neighboring cards under a header. The references feel more composed than that: they mix open bands, embedded zones, floating controls, selected lanes, and one or two truly special lifted surfaces.

This is still for building working apps, not marketing pages or portfolio concepts. Do not turn the main app screen into a landing-page hero, poster, or editorial website. Keep the design operational: visible navigation, controls, lists, filters, forms, timelines, actions, state, and realistic interaction surfaces should remain central. The style should make an app feel premium, not make the app stop feeling like software.
The target sits on a fine line: not old enterprise/admin heaviness, and not sparse marketing-site composition. The reference quality comes from keeping the app obviously useful while still being airy, minimal, and spacious.
The next step after mock approval is implementation, so the dominant workspace should already feel translatable into React plus shadcn/ui. Favor buildable arrangements of records, chips, tabs, filters, detail panes, action groups, sheets, menus, and compact form surfaces over bespoke infographic compositions.
Do not introduce scenic or decorative illustration motifs into the workspace background unless the product explicitly needs them. Leaves, landscape washes, mountain scenes, lifestyle cutouts, decorative blobs, ambient editorial art, faint plant silhouettes, or blurred branch shadows quickly push the result toward marketing-page composition instead of app UI. If the design needs atmosphere, keep it structural and tonal: subtle surface temperature, faint grain, restrained contour lines, or barely visible geometry tied to the UI.
For this skill, the approved artifact is a design board rather than only an app screenshot. Keep a full-width bottom design-system dock with implementation-facing metadata: foundation surfaces, palette and status swatches, typography scale, radius samples, border treatment, Contact 0-3 elevation tokens, and a few representative component/state examples. The dock is board metadata, not product UI, so do not remove it when cleaning up the app workspace.

## Why The Reference Set Feels Polished

These eight references repeat the same higher-order quality signals. A mock can be clean and still fail if these signals are missing.

### 1. Surface Hierarchy Is Immediate

- The screen usually has at least three readable layers: outer stage, main app canvas, and one or more focal surfaces.
- Light-mode screens avoid same-white blending. The canvas is not the same value as the page, and focal surfaces are not the same value as the canvas.
- Dark-mode screens also separate stage, canvas, and focal regions clearly, but through graphite depth, restrained glow, and tonal contrast instead of generic bright borders.
- At thumbnail scale, you can tell where the product frame ends, where navigation lives, and which area matters most.

### 2. Color Is Restrained, Not Timid

- Most of the screen is neutral, off-white, stone, graphite, or black.
- Accent color is selective and purposeful. It marks active state, selected item, key metric, primary action, or one memorable visual moment.
- The palette is not noisy, but it is also not anonymous. There is always enough temperature or hue distinction to make the screen feel authored.
- Light-mode status treatment is soft, pastel-leaning, and systemized rather than loud, dark, or validation-like.

### 3. Typography Carries Authority

- Headings and numeric anchors are confidently large.
- Utility text is smaller, lighter, and clearly subordinate.
- Some references add editorial contrast through serif-like moments or more characterful display treatment; others use assertive sans or condensed display type. In both cases, the hierarchy is obvious.
- The typography makes the layout feel designed before borders or shadows do.

### 4. Navigation Feels Like Product Chrome

- Sidebars, top bars, rails, and command surfaces are slightly darker or more tinted than the canvas, so the app frame reads instantly.
- Navigation is quiet and refined, not a heavy slab. The chrome anchors the product without overpowering the workflow.
- Active states are obvious, but the entire nav is not screaming for attention.

### 5. Shapes And Controls Are Calm

- The screens use a consistent radius language: large rounded shells, rounded panels, pill controls, smaller nested radii.
- Controls look calm and intentional rather than default component-library drops.
- Buttons, tabs, filters, chips, and icon buttons feel like one system.

### 6. Borders And Shadows Stay Quiet

- Structure comes mainly from spacing, surface tone, radius, and grouping.
- Borders are light and low-contrast.
- When elevation appears, it is a thin contact-edge lift close to the surface, not a fluffy ambient shadow.
- The effect is crisp separation, not old-school floating cards.

### 7. Each Screen Has One Strong Visual Idea

- There is usually one dominant operational object: a card, lane, route, report zone, thread, timeline, or command surface.
- That dominant idea is still a working app surface, not a poster graph. The reference set does not rely on a hero chart or decorative diagram as the main answer; it makes one functional zone memorable through hierarchy, typography, spacing, and selective emphasis.
- The layout does not try to impress through quantity.
- Supporting modules are quieter, smaller, or more open than the main object.

### 8. Space Is Treated As A Design Material

- Large gutters and panel padding are normal.
- Quiet areas are left intentionally blank.
- The screens do not try to prove usefulness by filling every region with widgets.
- This air is a major reason they feel premium instead of assembled.

### 9. Operational Content Is Curated And Art-Directed

- Records, filters, actions, status chips, and detail surfaces do most of the functional work.
- Lists are stylized or transformed rather than dumped in raw admin form.
- Metrics get breathing room, but they do not replace the app's working surface.
- If a chart or analytical mark appears, it stays secondary, compact, and clearly buildable rather than becoming the whole screen's reason to exist.
- Rows, badges, avatars, icons, and status markers are edited into composition rather than dumped as raw UI inventory.

### 10. Micro-Precision Protects The Illusion

- Repeated rows align.
- Pills and chips sit cleanly.
- Icons feel balanced with labels.
- Connector lines, chart marks, list baselines, and internal spacing are coherent.
- Small geometry mistakes immediately reduce the premium feeling, even when the overall layout is good.

## Color

The light screens use cool off-white, pale gray, and porcelain backgrounds rather than pure white everywhere. Common colors:

- Backgrounds: cool white, glacier, porcelain, soft cloud gray, pale stone, faint blue-gray.
- Text: near-black charcoal for primary text, cool gray for secondary labels.
- Borders: very light gray with low contrast.
- Accent colors: one or two vivid accents only, such as coral, rose, mint, electric green, amber, or deep navy.
- Status colors: softened tints with readable text, not saturated badge spam.
- Do not default to blue as the primary color family. Blue is valid when the brand or product calls for it, but the default system should also comfortably generate green, olive, maroon, rust, charcoal, cocoa, black-led monochrome, teal, forest, and other restrained palettes.
- In repeatability batches, treat blue as the exception rather than the automatic fallback. If multiple apps drift back to blue-led nav and blue CTA systems, the batch is regressing.

The references often separate the outer background from the main content by only a few perceptual steps. This slight offset makes the content pop without looking contrasty:

- Outer background: visibly tinted and slightly darker than the main content, such as pale gray, cool porcelain, glacier gray, mist, or faint blue-gray.
- Main app frame: lighter cool off-white or near-white, not default pure white.
- Cards and raised controls: subtly brighter cool white/off-white than the frame, not raw browser white.
- Selected surfaces: a mild tint or lifted white surface with a crisp narrow grey contact shadow.
- Avoid using the same pure white for body, app frame, panels, cards, and controls.
- Avoid `#fff` as the default surface. Use it only for tiny highlights when the surrounding surfaces are already cool off-white.
- The contrast should be readable at a glance: page background, app canvas, and focal surfaces must not blend into one flat white mass.
- The background/app offset must remain visible at thumbnail scale. If the app looks like a white rectangle on an almost-white page, increase the outer tint or make the app canvas warmer.
- The outer stage must remain visible on desktop, not only in the mobile preview. Keep enough tinted margin around the app frame and avoid letting the app canvas blend into the board background.
- Use accent color as a focal mark, pill, tab, icon, short rule, or partial stroke. Avoid wrapping large hero panels in full bright outlines; that can make the UI feel like a form validation state instead of a premium layout.
- Navigation surfaces need slightly more tonal separation than the main canvas so they anchor the workspace at a glance. Same-white nav and content fail; the nav should be a little cooler, darker, or more tinted, often through soft graphite, stone, or a very light muted shade of a darker primary-family color, while still staying refined and not heavy.

The dark screens use black and near-black surfaces with restrained contrast:

- Backgrounds: black, graphite, charcoal, dark smoke.
- Panels: slightly lighter charcoal with subtle borders.
- Accent colors: neon mint, acid green, orange, or white used sparingly.
- Glow: color appears as a soft bloom or gradient wash behind charts, not as a generic full-page gradient.

Avoid one-note palettes. A good screen may be mostly neutral, but it still has controlled accent contrast and depth. Also avoid a hidden blue bias where every fresh generation becomes blue primary with a blue-tinted sidebar.

## Borders And Radius

Borders are present but quiet. They define structure without making every component look like a boxed admin template.

- Light UI borders: 1px, low-opacity gray, often barely visible.
- Dark UI borders: 1px graphite or white at very low opacity.
- Radius is generous on large panels, often 24-48px.
- Small controls use pill or rounded capsule shapes.
- Nested elements often have slightly smaller radius than parent panels.
- Avoid default 8px-card grids unless the mock specifically calls for dense enterprise styling.

The strongest examples use a large rounded outer canvas, rounded sidebars, and pill controls. This creates a designed object feel instead of a page of rectangles.

Radius must be a coherent system, not random decoration:

- Pick 3-4 radius tokens and apply them consistently across the board.
- Outer app frame and major shells use the largest token.
- Large panels/cards use a smaller shared token.
- Record rows, inputs, buttons, popovers, and tabs share a related medium token unless intentionally pill-shaped.
- Chips, badges, icon buttons, and small controls use a small token or true pill consistently.
- Repeated cards in the same group must share the same radius, border strength, and shadow depth.
- Child radius should usually be smaller than parent radius; avoid a small parent containing a larger rounded child.
- Buttons and inputs in the same control family should not have visibly unrelated corner shapes.
- The visible UI should match the radius samples shown in the design-system strip.
- Avoid the vague middle-radius look on buttons and segmented controls; it often reads as generic enterprise UI. Controls should be either clearly rounded/pill-like or intentionally square-ish with zero radius. Visible 4px/6px/8px-style button and segmented-control radii often still feel administrative. Crisp/square-ish controls can work, but only when the whole system is intentionally sharp and editorial; otherwise they slip toward enterprise admin UI.
- The design-system dock should reflect the same decision. In the default rounded light-mode direction, radius samples should usually start around 12px and step upward such as 12/16/20/24/full rather than advertising a timid 4/6/8 ladder. If sharp language is being explored, show zero radius explicitly as a deliberate token instead of drifting into middle radii.
- The dock should prioritize accuracy over quantity. If space gets tight, remove extra component examples before shrinking or corrupting the core token metadata for surfaces, radii, borders, and Contact 0-3 elevation.
- Contact 0-3 should read as elevation metadata, not as a palette. Show neutral sample surfaces with literal token labels/values rather than colored ramps, avatars, or semantic chips.
- Do not let the dock drift into generic shorthand such as `xs/sm/md/lg/xl/2xl` or `elevation-0..4`. The strongest boards keep the dock implementation-facing by using literal radius values and literal Contact token names.

## Shadows, Borders, And Depth

Depth is layered, but it should not depend on obvious old-school card shadows. Premium light UI usually pops first through a tinted outer background, a lighter app canvas, brighter focal surfaces, rounded geometry, selective borders, tonal changes, and tiny contact-edge elevation. The target elevation style is a crisp grey contact edge like a premium selected nav item or tiny popover: 1-2px lifted edge, low-opacity grey, tiny offset, and no feathered blur or visible aura.

- Light UIs use low-contrast borders, subtle inner tonal shifts, and occasional contact-edge elevation under floating cards or selected menu items.
- Borders should stay mostly neutral in light mode. Avoid dark or heavy colored full-card outlines on major surfaces; emphasis should stay soft, light, and pastel-leaning instead.
- Contact-edge shadows are allowed only when they match the crisp grey contact-edge profile: 1-2px edge, tiny y-offset, low-opacity grey/black, crisp surface definition, no feathered blur and no dirty gray halo.
- Use custom contact-edge elevation selectively on floating controls, selected rows, dropdowns, popovers, command boxes, selected nav items, mobile preview devices, and important panels. The shadow should be thin, grey, close to the surface, and more like a selected navigation item than a classic card shadow.
- Many regions should have no border and no card shell; they can live directly on the app canvas through spacing and typography.
- Selected items can look slightly raised through a brighter surface, subtle border color, and crisp contact-edge shadow.
- Dark UIs rely more on border, glow, and tonal contrast than classic drop shadow.
- If the main screen resolves as two or three large neighboring bordered cards sitting on the canvas, it is still too close to a template. At least one major area should be open, partially bounded, integrated into a band, or embedded directly in the canvas.
- A dominant object should feel compositionally special. If the focal object is only one more card beside two sibling cards of similar weight, the screen needs redesign.
- Floating overlays, command palettes, popovers, and cards should feel lifted but remain understated; the shadow should read as a fine grey edge, not as a soft blur.
- Elevation tokens shown in the design-system strip must be represented in the actual app UI. They are not just documentation swatches. Use them on meaningful lifted states such as navigation chrome, active nav, selected records, important notices/cards, compact floating controls, popovers/sheets, mobile navigation controls, mobile preview devices, and one important focal surface when useful. The effect should be visible enough to read as elevation at thumbnail scale as a thin grey lifted edge, but never as a soft card shadow.

Avoid generic `shadow-sm`, `shadow-md`, `shadow-lg`, or larger shadows entirely in default light-mode mocks. Avoid dark offset shadows, hard-edge shadows, broad blur halos, muddy gray clouds, soft ambient shadows, and anything that looks like Bootstrap or a default heavy card drop shadow. If the shadow is visibly announcing itself before the surface shape, it is too strong.

Reference-grade shadow behavior:

- Use this token family only: Contact 0 is no shadow plus a 1px low-opacity border; Contact 1 is `0 0 0 1px rgba(16,24,40,0.07), 0 1px 0 rgba(16,24,40,0.08)`; Contact 2 is `0 0 0 1px rgba(16,24,40,0.08), 0 1px 2px rgba(16,24,40,0.10)`; Contact 3 for popovers only is `0 0 0 1px rgba(16,24,40,0.08), 0 2px 3px rgba(16,24,40,0.10)`.
- The shadow should sit close to the element as a 1-2px contact edge.
- Reject any shadow that becomes a hard band, sharp ring, visible gray cutoff, muddy cloud, broad halo, or soft aura.
- It should not create a broad gray cloud around the card.
- It should not become the main method of separating every panel.
- It should be paired with stronger tonal background contrast so the UI does not become flat.
- Large panels should rarely use visible shadow. Use shadow mainly for selected rows, compact floating controls, popovers, and small lifted states.
- If a large white rounded panel is separated primarily by shadow, it will read as old admin UI. De-card the region or increase tonal separation instead.
- If the design dock shows elevation examples but the app surface itself remains completely flat, revise the prompt. The UI should demonstrate the elevation system sparingly and functionally.
- If the whole screen is separated only by 1px borders while elevation appears only in the dock, it will feel like documentation rather than a designed product. Revise toward a few lifted functional surfaces instead of adding borders everywhere.
- Important notices/cards should not be only a tinted border or colored background. Use a brighter focal surface, Contact 1 or Contact 2, and enough surrounding spacing so the elevation token is actually visible without becoming heavy.
- Status emphasis should not come from wrapping a whole major card or active object in a dark colored outline. Use soft tint fills, pills, icons, short accent rails, corner accents, or inline labels instead.
- Reject validation-style framing: full outline cards, sharp alert boxes, or major panels whose colored border is darker or louder than the surrounding surface system.

## Typography

Typography is a major reason these screens feel modern.

- Large headings are genuinely large and confident.
- Some references mix editorial serif headings with clean sans UI text.
- Others use condensed bold display type for dark dashboards.
- Numeric metrics are oversized, high-contrast, and treated as visual anchors.
- Secondary labels are smaller, lighter, and often lower contrast.
- Letter spacing stays natural; do not over-track body text.

The style relies on contrast between display type and small utility text. Do not make every label the same size.

For app UIs, display type should be expressive but not marketing-scale. A selected record title may be prominent, but it should not dominate the whole viewport like a website H1. Keep title scale proportional to the surrounding controls and workflow; the user should still see what they can do next without scrolling or hunting.

## Layout Patterns

Common patterns:

- Large rounded app frame sitting on a pale background.
- Left rail plus secondary sidebar, often with icon-only vertical navigation.
- Wide top search or command surface with lots of negative space.
- Main content uses asymmetric grids rather than uniform equal cards.
- Important metrics get large breathing room.
- Secondary panels cluster as pills, floating cards, timeline blocks, or compact lists.
- Some cards overlap or sit in layered stacks, but the layout remains readable.
- Dark dashboards use dramatic scale, wide gutters, and big focal work surfaces rather than small dense widgets.

The design should feel composed. Do not fill every grid cell just because there is room.
Business-facing or enterprise-facing product type does not justify enterprise admin styling. The same modern sparse language should still apply: generous spacing, restrained information density, and mostly de-carded composition.
For business-facing operational apps, the approved direction is now clearer: a slim tonal rail or narrow quiet sidebar when left navigation is needed, an open top context zone with only selective facts, one main working section, and very few lifted cards. This is the target language for modern business apps in this skill, not an edge case.
That dominant working section does not need to become a bespoke graph or diagram. A sparse operating surface with three or four rich adjustable rows or levers can be the right premium answer when it behaves as one calm section rather than a spreadsheet: tall rows, few visible columns, shared context, attached actions, and no helper-card wall.
If those rows pick up explicit column headers, rigid table scaffolding, repeated cell structure, or the same repeated left-to-right anatomy across every row, the effect collapses back into enterprise admin UI. Keep the operator surface authored and sectional, not tabular.
If those rows each become their own rounded cards, bordered slots, or left-control/right-impact card pairs, that also fails. The better pattern is one parent surface with thin dividers, subtle banding, and inline impact at the row edge rather than a pile of mini-cards.
If the whole operator surface sits inside a prominent white shell whose border/radius is one of the first things you notice, it is still too boxed. The strongest business references feel more like rows living on a calm field than content trapped inside a hero card.

Navigation and workspace chrome should anchor the product without becoming heavy. If the app uses a sidebar, icon rail, secondary navigation, top nav, tabs, command bar, breadcrumb, or filter bar, give it enough tonal contrast and active-state clarity to be readable at a glance:

- Use a subtly distinct rail/sidebar/top-nav background, border, Contact 1 edge, inset line, or active pill so navigation does not disappear into the canvas. The nav surface should read slightly darker, cooler, or more tinted than the app canvas at thumbnail scale, but it should not become a saturated colored block or high-contrast slab. Soft graphite, misty stone, and muted primary-derived tints are stronger defaults than same-white chrome.
- If the sidebar or top bar falls back to the same near-white value as the canvas, the composition loses its frame and starts to feel unfinished. Keep a visible pastel/tonal offset between nav chrome and content.
- A barely perceptible offset is not enough. If the rail/sidebar still reads same-white at thumbnail scale, it fails even if its hex value is technically different.
- Sidebar or rail shadows may help, but they must be narrow, grey, and close to the edge: a crisp contact shadow or inset edge shadow, not a feathered broad vertical cloud spreading across the content.
- Active navigation states should have stronger contrast than inactive icons/text.
- Top bars and filter bars should feel intentionally placed, not like low-contrast text floating on white.
- Mobile navigation controls, hamburger buttons, bottom tabs, and drawers should inherit the same contrast and tight elevation behavior when present; they should not look flatter than the desktop nav system.
- Do not force a sidebar or top nav when the app does not need one. Apply the contrast rule only to the navigation structure implied by the product.
- Keep navigation contrast balanced: clearer than the canvas, but not heavier than the main workflow. If the sidebar becomes the most visually dominant element, reduce its tint and rely on the active state, divider, and tight edge elevation.
- Sidebar is not the default answer. Many apps should use a top bar, top tabs, segmented header, or bottom navigation instead. The chosen navigation model should fit the workflow, not the component library.
- If a left-side navigation aid is useful but the workflow does not need a full menu, a slim rail usually performs better than a labeled sidebar. Escalate to a fuller sidebar only when it is genuinely earning the space, and keep even labeled sidebars narrow and quiet rather than enterprise-wide.
- In light mode, sidebars should usually be tonal and quiet rather than charcoal or black slabs. Use porcelain, mist, stone, soft graphite, muted brand tint, or a low-contrast side surface derived from the primary family unless a strict user style requires high contrast.
- A sidebar must not change the quality bar for the main content. CPQ, ERM, and user-requested sidebar apps should still have the same modern, airy, de-carded, domain-object composition that works in no-sidebar mocks.
- When a sidebar is used, design the main workspace first and treat the sidebar as quiet chrome added around it. If the main canvas looks weaker, more boxed, or more enterprise than the no-sidebar apps, the sidebar is being allowed to dictate style and the design fails.
- Treat the sidebar as quiet product chrome, not as permission to generate a conventional enterprise admin screen. The main canvas must not become title + filters + KPI strip + table simply because a left nav exists.
- If a sidebar is present, the active workspace should feel even more designed: larger open areas, stronger product-specific structure, fewer visible rows, and more breathing room to counter the admin-template pull of the sidebar.

Rows are allowed only when they are subordinate to the main object. A vertical stack of shipment options, quote options, exercise prescriptions, tickets, or tickets-with-route-icons is not enough; the first-read structure must be a larger integrated route, band, map, pressure curve, readiness object, selected stack, or active thread. The same applies to process grids and three-column layouts: a stage-by-stage option matrix or three polished cards can still be generic if no single active object controls the decision.
For business-facing operational tools, there is one important exception: a single continuous operating surface with a few rich adjustable rows or levers can itself be the main object if it reads as one authored section rather than a spreadsheet. Keep that surface tall, sparse, low-column, and attached to shared context and actions.
Also reject fake integration: a central circle, price box, score panel, or status node flanked by mirrored left/right row lists or feeder cards is still a split table. Connector lines do not fix this. A top metric strip followed by a chart or object still reads like a dashboard header, not a reference-grade active workspace.
One big wrapper does not solve this. If a large hero panel is still subdivided into several labeled columns, vertical compartments, or mini-modules, it remains a dashboard/process layout wearing one border.
Minimal does not mean abstract. The main object still needs concrete operational facts, direct controls, clear ownership/state, and a usable next action; a pretty curve with a few labels is not enough.
Likewise, a single graph, route, or diagram cannot carry the whole screen by itself. It needs nearby controls, state, scoped context, or next-step actions so the workspace still behaves like an app.
Likewise, a giant ring, donut, gauge, or circular score should not become the main hero for wellness or readiness products. Those screens should still lead with an actionable recommendation surface and inline signals rather than a decorative meter.
Do not let the main surface drift into bespoke infographic territory. If the object would require substantial custom illustration work or still feels like a concept render rather than something that could be assembled from realistic app components, redesign it toward a more concrete working surface.
Do not let the hero resolve as one elegant object plus one lonely button. A stronger reference-grade workspace usually gives the active object at least one local control, filter, or view switch and one attached action cluster, adjustment, or decision parameter so the user can read, adjust, and act without leaving the object.
Do not fix a thin hero by bolting on a generic lower section made of table rows, summary cards, note boxes, or form panels. Reference-grade screens keep the extra utility selective, sparse, and attached to the main object rather than building a second admin workspace beneath it.
Do not fix a thin hero by adding a row or grid of equal-weight factor cards under it. Repeated driver, cost, or status facts should usually become inline anchors, compact stacked rows, embedded chips, or one concise attached sidecar rather than a secondary dashboard strip.
Do not fix buildability by reverting to a plain list or table with a couple of ordinary helper cards beside it. The references stay buildable without becoming CRUD screens; the active object still needs to feel authored and product-shaped.
Do not fix a thin hero with a wide bottom decision tray, approval strip, planner-action band, or full-width next-step footer under the main object. Those still read like enterprise workflow furniture even when the top half is cleaner.
For CPQ, components like material, labor, freight, overhead, discount, surcharge, margin, and approval threshold should be embedded as segments, bends, ticks, or labels within one quote pressure object; they should not become separate row cards around a central price card, and they should not become a five-part labeled mega-panel.
For ticketing, the blocker should not be a standard alert card with downstream cards attached. The blocker must feel embedded in the dependency field through a focal zone, capsule cluster, or line-attached node treatment, and the next action should stay local instead of becoming another card.
Reject both wide horizontal blocker cards on desktop and tall mobile blocker rectangles when they use a full perimeter outline, title block, metadata rows, and a CTA inside a conventional alert-card shell. Soft embedded emphasis is acceptable; standard alert framing is not.
For fitness, sleep, HRV, strain, soreness, load, session path, and coach guidance should merge into one readiness/session surface; avoid the conventional score card plus right signal list plus bottom coach-note card layout, and also avoid hiding that same split inside one large bordered shell with dividers. A stronger default is an open left-to-right recommendation band or path on the canvas with inline signals and one chosen session branch, not a titled overview card.

Strong light-mode composition patterns:

- De-carded hero: the main active object sits directly on the app canvas or a softly tinted band, with no obvious drop shadow.
- Partial accent hero: use a short coral rail, top rule, badge, or corner treatment for risk, not a full alert-colored rectangle around the whole hero.
- App-first hero: a prominent active object includes controls, state, actions, and nearby operational context; it is not a giant marketing headline block.
- Selected lane: only the chosen row or record lane lifts slightly; sibling rows are flatter and calmer.
- Open workflow route: timeline/stepper dots and labels live in a clean open area with one guide line, not inside a heavy card.
- Tinted module: use a faint colored wash or subtle band behind an analysis region instead of another plain white card.
- Sparse command bar: filters and actions are grouped as pills with ample separation, not packed into a toolbar.
- Mobile companion: a simplified designed object, not a compressed duplicate of the desktop.

## Spacing And Density

The references look premium largely because they leave room around things. The default style should be spacious and minimal, not merely decorated.

- Use large outer margins around the app frame or page surface.
- Use broad gutters between major regions; the gaps should be visible at a glance.
- Give large panels generous interior padding so text and controls do not hug edges.
- Prefer fewer, larger panels over many small panels.
- Do not put every functional group in a separate bordered card. Use open sections, background bands, typography, and spacing where a card is not needed.
- Show only the visible rows or records that are needed for the current task; spacious, legible records are better than cramped completeness.
- Let important metrics, headings, and active objects sit in open space.
- Keep utility controls grouped and sparse. Do not scatter small chips and buttons everywhere.
- Avoid overfilling side panels. A mobile preview should be calm and readable, not a compressed replica of the desktop.
- The design board should feel like there is air between regions even at 1536x1024.

The first screen does not need to show the whole product. Good app UI uses progressive disclosure: show the primary task, a small amount of decision-critical context, and clear paths to secondary detail through scrolling, tabs, drill-down pages, drawers, sheets, or secondary routes.

- Leave real empty areas and quiet bands. Empty space is part of the design, not unused capacity to fill.
- Prefer a clear primary workflow region with only the supporting regions needed for the user's current decision, rather than a wall of equally important modules.
- Supporting modules should usually be quieter, more open, or less boxed than the active object. Avoid giving every major module the same card shell, border strength, and visual weight.
- Do not blanket the first screen in cards just because the product is operational or data-heavy. Use card shells sparingly, usually for one or two highlighted states only; separate the rest through spacing, tonal grouping, guide lines, and tight graphite contact-edge lift.
- A strong business-app home screen often has just two structural beats: an open context/header zone and one main working section. Resist adding extra helper panels unless they materially improve the current decision.
- When in doubt, remove one whole supporting module instead of compressing all modules to fit. Omission is better than a crowded "complete" first screen.
- If the product has many metrics, lists, charts, forms, and workflows, do not place them all on the first screen. Choose what the user needs now and move the rest behind navigation, scroll, or drill-down.
- Data-heavy does not mean visually dense. Use larger row heights, sparse visible records, bigger gutters, and clearer hierarchy so the user does not feel overloaded.
- A main page can imply additional content below the fold; it does not need every module visible in the design board viewport.
- Use tabs, collapsed rows, drawers, detail pages, and secondary views to keep the first screen calm.
- Visible modules must earn their place by supporting the immediate task. Move secondary lists, version history, detailed timelines, activity, audit trails, analytics, and configuration detail behind navigation, tabs, drawers, drill-down pages, or scroll when they are not needed right now.
- Do not add another panel merely because there is empty space. Empty space is part of the premium composition.
- Do not fill the page with a balanced trio of equally weighted panels just because the grid allows it. That symmetry often makes the result feel assembled rather than designed.
- Lifted support cards should stay concise. A decision card, warning card, next-step card, or insight card should present one issue, a short rationale, and the minimum actions needed. If it reads like a full side page shrunk into one card, it is too dense.
- Primary actions should stay visually connected to the active object or concise notice. Avoid broad bottom footer/action rails in default premium mocks; they make even polished layouts feel like conventional enterprise forms.

If a mock has many tiny labels, dense rows, packed cards, tight gutters, every panel filled to the edge, or no obvious breathing room, reject it and regenerate with stronger spacing direction.

Section-level spacing matters as much as the overall page. Side panels, analysis stacks, workflow routes, steppers, action bars, and mobile sections often become cramped even when the larger layout looks good. Reject the mock if these areas feel compressed:

- Stacked analysis modules need clear vertical separation; bars, labels, and values should not crowd the next module.
- Bar groups need breathing room between rows and between the bar and its numeric value.
- Workflow routes, steppers, and timelines need enough horizontal and vertical space for dots, labels, status, and date to be legible without colliding.
- Action groups should not sit tight against timeline/stepper/workflow content; leave a calm gap or move them into a clearer bottom action area.
- Mobile sections need more spacing than desktop, not less: larger vertical gaps, readable labels, and fewer simultaneous rows.
- A mobile preview should never look like the desktop was squeezed into a narrow phone. It should prioritize the top task and separate modules with generous padding.
- Mobile should omit, summarize, or collapse lower-priority desktop modules. Do not show every desktop module just because it exists on the desktop board.
- Mobile should show only the primary workflow and the information needed for the immediate action. Secondary details can become a collapsed row, chip, omitted preview, drawer, or secondary screen.

## Precision And Visual Integrity

Generated UI mocks can fail through small inconsistencies even when the overall style is close. Reject and regenerate when any structured element looks visibly wrong.

- Timeline or stepper dots must sit on the connector line center.
- Connector lines should have consistent thickness and spacing.
- Repeated rows/cards should share consistent height, radius, shadows, and internal padding.
- Border radii should be consistent within each component family and follow the board's token scale.
- Icons should be clean and aligned to their labels.
- Chips and badges should not collide with text or drift vertically.
- Mobile previews should not contain clipped cards, cramped text, or duplicated controls.
- Component shadows should be coherent; one card should not randomly float more than its siblings unless intentionally selected.
- Shadows should be crisp contact edges, not feathered blur. Reject shadows that stop abruptly, look dirty, extend too far, create a hard gray outline, become a broad blur, or read as a sharp shadow ring under an otherwise refined surface.
- On small lifted cards, the shadow should feel like a 1-2px grey contact edge: tight and close to the surface. If the lower edge reads as a distinct dark band or soft cloud in a crop, it is too heavy.
- If the model seems likely to soften the shadow, choose Contact 0 border-only instead. A flat border is preferable to a blurry or feathered shadow.
- Avoid partially cropped or edge-cut elements unless the design clearly uses an intentional carousel/overflow pattern.

## Reference-Derived Design Checklist

Use this checklist to understand why the eight reference images look premium. These are not decorative preferences; they are the concrete decisions that keep the output from becoming a generic dashboard.

### 1. Product Object Feeling

- The screen feels like a designed product object, not a normal web page with panels placed on it.
- A large rounded stage, app frame, or canvas gives the UI a clear boundary and silhouette.
- The board has a strong first-read shape even when viewed as a small thumbnail.
- The main screen has one memorable operational object: account card, route, thread, report, timeline, readiness band, workflow lane, wallet, product stack, or another domain-shaped structure.
- The distinctive object is useful to the workflow, not decorative art.
- The design avoids solving the page as only a header, filters, KPI strip, card grid, and table.
- A softened multi-column fact strip is still a metric strip. If five or six equal facts sit in a neat row above the active object, the layout is still behaving like a dashboard header.
- A route with stage headings or numbered steps across the top is still a process grid, even when the route line itself is refined.

### 2. Clear Active Workspace

- The user can tell what they are supposed to work on now within the first second.
- One active object or current decision dominates the screen.
- Secondary facts orbit the active object as chips, compact rows, small floated controls, or concise support surfaces.
- The screen does not show the whole product at once; it shows the current task plus the minimum decision context.
- Empty areas and quiet bands are treated as part of the composition, not unused space to fill.
- The active workspace remains operational: navigation, filters, records, states, and actions are still visible.

### 3. Surface Separation

- The outer stage is visibly tinted or darker than the app canvas.
- The app canvas is lighter, cooler, or cleaner than the outer stage, usually porcelain, glacier, cloud, stone, graphite, or charcoal.
- Focal surfaces are subtly brighter or more intentional than the canvas.
- Selected rows, active nav items, important notices, command surfaces, and floating controls have distinct tonal roles.
- The UI does not collapse into pure-white-on-pure-white or same-gray-on-gray blending.
- In dark references, contrast comes from black outer stage, graphite panels, faint borders, luminous accents, and restrained glow.

### 4. De-Carded Composition

- Not every region is a bordered card.
- At least one major region is open, banded, embedded in the canvas, or only partially bounded.
- Cards are reserved for meaningful objects: selected states, notices, compact lists, popovers, floating tools, or repeated records.
- Large panels do not rely on obvious drop shadow as their primary separator.
- The main composition is not only two or three equal cards or columns.
- Rows and lists are subordinate to a stronger product object; they do not dominate the first read.
- Process grids, swimlanes, route option matrices, and bottom selected-summary rails are subordinate details at most; they cannot become the main composition.
- Central-node/price/score-plus-row-list layouts and top KPI strips do not count as de-carded active objects.
- Supporting areas have varied shapes: lanes, bars, pills, radial objects, timelines, guide lines, tabs, and command surfaces.
- The layout avoids a balanced trio of equal cards with equal visual weight.

### 5. Scale And Typography

- The references use deliberate type contrast: large display or numeric anchors paired with small, lighter utility labels.
- Metrics are treated as visual anchors, not just values in a grid.
- Labels, captions, and helper text stay quiet and small without becoming illegible.
- Headings are expressive but remain app-scale; they do not turn the workspace into a website hero.
- Type hierarchy changes by function: title, metric, label, status, action, and record text are not all the same weight.
- Letter spacing feels natural; the mock should not rely on over-tracked text for sophistication.

### 6. Selective Color

- Accent color appears in a few decisive places: active tabs, route nodes, selected records, primary actions, chart highlights, badges, or short rules.
- The palette is not default blue unless the brief asks for blue.
- A neutral UI can still have personality through one or two controlled accent families.
- Status colors are softened and systemized; they do not become saturated badge spam.
- Color marks hierarchy and state rather than decorating every component.
- The palette has temperature: cool porcelain, warm stone, sage, rust, coral, amber, mint, graphite, cocoa, black, or forest can all work when committed.

### 7. Modern Depth

- Depth comes first from surface offset, borders, radius, and selected states, not from large shadows.
- Shadows are crisp, narrow, grey, low-opacity, and close to the surface, with blur no greater than 3px and y-offset no greater than 2px.
- A shadow never ends as a hard gray band, ring, or dirty halo.
- Elevation appears in the real UI: selected rows, command bars, floating controls, nav chrome, notices, popovers, or mobile controls.
- Elevation samples in the design dock match visible elements in the app.
- Important lifted cards stay concise; they do not become dense mini-pages.

### 8. Navigation As Product Chrome

- Navigation matches the product workflow instead of defaulting to a sidebar.
- Sidebar, rail, top navigation, command bar, tabs, and mobile nav each have enough tonal contrast to anchor the UI.
- A sidebar is only product chrome. It must not cause the main canvas to become a generic enterprise layout.
- With a sidebar, the main workspace still needs the same spacious, minimal, modern composition expected from no-sidebar outputs.
- Active navigation states are obvious without making the nav the loudest object on the page.
- Command/search surfaces are spacious and pill-like, not cramped toolbar rows.
- Icon rails and nested guide lines can make navigation feel custom, but they must remain readable.
- Mobile navigation follows the same surface and elevation logic as desktop.

### 9. Data Made Visual

- Tables are replaced or softened into rich rows, lanes, timelines, routes, bars, object stacks, or grouped records when visual quality matters.
- If a table-like list appears, it is secondary and transformed through spacing, selected state, status treatment, or domain markers.
- Charts are sparse: smooth lines, pill bars, faint grid lines, minimal labels, and accent only where needed.
- Connector lines, dots, bars, timeline items, route nodes, and record baselines align cleanly.
- The structured object is specific to the product domain rather than a stock chart pasted into a card.
- Key facts are integrated into the active object or nearby support surfaces, not repeated as a detached metadata rail.
- Recommendation and next-step guidance should feel attached and local, not stretched into a full-width band under the main object.
- In coaching and fitness UIs, readiness, driver signals, load context, and session guidance should merge into one recommendation surface. Splitting them into separate top modules recreates dashboard logic, and placing those modules inside one wrapper with separators still fails.

### 10. Calm Mobile Companion

- The mobile view is a companion view with its own hierarchy.
- It preserves the main decision, active object, and primary action.
- It omits, collapses, or summarizes secondary desktop modules.
- Spacing is more generous vertically than desktop, not tighter.
- Mobile controls, chips, cards, and nav affordances inherit the same radius, color, and elevation system.
- The phone preview does not look like a narrow screenshot of the desktop.

## Components

Controls are familiar but highly styled:

- Buttons are pill-shaped or rounded capsules with strong contrast.
- Icon buttons are circular or soft square with clear affordance.
- Search fields are large, soft, and often central.
- Badges are rounded, muted, and tightly sized.
- Navigation items can be icon-first, nested, and connected by faint guide lines.
- Cards often have internal toolbars, chips, small menu dots, and embedded charts.
- Tables are often replaced by rich rows, lists, cards, timelines, or grouped panels when visual quality matters.
- If a table-like list is necessary, make it secondary and visually transformed: selected row as a lifted lane, sibling rows as open records, grouped lanes, timeline markers, product/data pills, status/risk indicators, and generous row rhythm. Avoid bordered table boxes with many columns.
- Avoid recreating spreadsheet logic inside the main focal lane by adding many tiny columns, metadata cells, or repeated per-row controls. Keep rows curated and sparse.
- Avoid photo-heavy row thumbnails or media tiles unless the product truly depends on imagery. In most operational web apps they add clutter and pull the mock away from the reference quality bar.

For shadcn/ui implementation, use the primitives but heavily tune spacing, radius, shadows, border opacity, type scale, and component composition.

## Charts And Data

Charts are decorative and informative:

- Lines are smooth and sparse.
- Bars and dots use pill geometry.
- Grid lines are faint.
- Data labels are minimal.
- Accent colors highlight only the important values.
- Large numbers carry the information; charts add texture and trend.

Avoid default chart-library styling. If needed, custom SVG or simple CSS shapes often match these references better than generic chart components.

## Default-Style Quality Gate

Before showing a default-style mock, inspect it against the reference-derived checklist above and the formal verifier in `mock-comparison-checklist.md`. The short gate is:

- Product object: there is one memorable domain-shaped object, not only generic cards and charts.
- Active workspace: the first screen focuses on the current task and one decision.
- Surface system: outer stage, app canvas, nav chrome, focal surfaces, and selected states have distinct tonal roles.
- De-carded layout: at least one major region is open, banded, embedded, or partially bounded.
- Typography: display or numeric anchors contrast clearly with lighter utility labels.
- Color: accents are selective, status colors are softened, and the palette does not default to blue without reason.
- Depth: elevation appears in the actual UI and remains crisp, narrow, grey, and contact-like, not ambient.
- Navigation: the nav model fits the product and has readable active states.
- Data treatment: records, rows, charts, routes, and timelines are curated and domain-specific, not stock tables.
- Mobile: the phone view is calmer and more selective than desktop.
- Precision: repeated components, connector lines, radii, shadows, icons, and text alignment are clean.
- App identity: the screen remains usable software, not a marketing page, poster, or decorative concept.

## Anti-Patterns

Avoid:

- Bootstrap/admin-template look.
- Uniform grids of identical cards.
- Conventional left-nav + top filters + KPI row + plain table + right details as the default answer.
- Sidebar-induced enterprise drift: adding a sidebar and then making the main content a standard enterprise admin page.
- A sparse but still generic admin layout: sidebar + top bar + title + fact strip + one or two cards + bottom actions.
- Long horizontal stat strips that turn the main screen into labeled columns instead of a designed workspace.
- Evenly repeated metadata columns with small icons and labels under the main title.
- Screens that are only title, facts, notice card, and action buttons with no richer domain-specific visual object.
- A design board where the main app looks like a normal SaaS dashboard and only the token strip looks designed.
- Dense dashboards packed with too many rows, chips, metrics, side panels, and tiny labels.
- First screens that try to expose every product module, chart, row, status, workflow, and action at once.
- First screens that show secondary lists, version history, routes, timelines, analytics, or detail panels just because they exist.
- Side modules where chart bars, labels, values, timelines, and buttons are stacked with little air.
- Mobile previews with desktop-density labels, cramped workflow routes, or action buttons pressed into the content.
- Mobile previews that include every desktop module as tiny stacked content.
- Panels that touch or nearly touch because gutters are too small.
- Cards where content hugs the border or every area is filled.
- Pure-white-on-pure-white layouts where the main content does not pop from the background.
- Everything boxed as cards with borders.
- Too little contrast between page background, app canvas, cards, and controls.
- Desktop views where the outer tinted background disappears and everything reads as one pale surface.
- Navigation chrome that is the same near-white as the content canvas, especially sidebars and top bars.
- Navigation chrome that overcorrects into a saturated or overly contrasty colored slab.
- Blue primary plus blue-tinted sidebar appearing by default when the brief did not ask for blue.
- Sidebars used by default even when the product would read better with top navigation or another lighter navigation model.
- Inconsistent corner radii between sibling cards, rows, controls, and buttons.
- Sidebar shadows that spread too far, look dirty, or create a harsh vertical strip.
- Design docks that show elevation samples while the actual app never uses elevation.
- Misaligned timeline markers, connector lines, icons, row baselines, or repeated card geometry.
- Heavy, dated, hard-edged, or offset drop shadows.
- Generic shadow stacks that make cards look like old Bootstrap panels.
- Harsh borders around every element.
- Pure white background with pure gray cards only.
- Default raw white surfaces where cooler off-white/porcelain surfaces would give more depth.
- Default table-heavy dashboards unless the product truly requires it.
- Generic blue primary plus gray cards with no visual point of view.
- Small type everywhere.
- Random gradients, blobs, or decorative noise.
- Overly literal recreation of reference content instead of applying the style language.
- Landing-page or portfolio-style hero treatment for an app workspace.
- Giant editorial headings that make controls and workflow feel secondary.

## Prompting Guidance

When the user does not specify a strict style, include this default style direction in the GPT Image prompt:

```text
A premium modern SaaS interface inspired by soft editorial dashboard references: a visibly tinted pale background, lighter cool off-white/porcelain content canvas instead of raw white, brighter cool-white focal surfaces, subtly tinted navigation chrome when navigation exists, a large rounded app frame, de-carded active-object hero area, generous whitespace, broad gutters, large panel padding, pill controls, selective low-contrast borders, selective crisp narrow grey contact-edge elevation used in the actual UI for navigation, selected records, important notices/cards, mobile nav affordances, floating controls, popovers, or one important focal surface, one strong accent color chosen from an appropriate varied palette rather than default blue, expressive metric typography, asymmetric open layout, background bands and open sections instead of boxing every group, a few rich rows instead of dense tables, and a designed mobile companion view. Avoid Bootstrap/admin-template styling, equal card grids, cramped dashboards, pure-white-on-pure-white surfaces, raw white default surfaces, low-contrast blending, same-white navigation and content surfaces, card boxes around every group, elevation tokens that only appear in the design strip, large white hero cards with obvious shadows, old-school top-bar shadows, feathered blur shadows, ambient shadows, misaligned structured components, old-school drop shadows, harsh borders, generic blue-gray dashboard defaults, unnecessary sidebars, and the standard sidebar/KPI/table admin composition.
```

For the dark companion board generated after light approval, include:

```text
A premium dark product dashboard with black/graphite surfaces, a large rounded outer stage, oversized metrics, deep spacing, neon accent highlights, soft chart glow, pill controls, rich record lanes, and cinematic panel composition. Avoid generic dark mode cards, ordinary left-nav/table layouts, and default admin-dashboard spacing.
```
