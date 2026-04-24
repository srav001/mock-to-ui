# Visual Style References

Use this reference by default when the user does not provide a strict competing style. Also use it when the user wants a modern, minimal, premium, non-bootstrappy UI.

This file is the skill's default visual language. It should be enough to generate the style without bundling or attaching screenshot references. Do not make any image reference assets part of the runtime workflow; keep the style as written rules and prompt language.

## Collective Style

These references are not standard Bootstrap-style dashboards. They feel premium because they combine oversized spatial composition, soft surfaces, expressive type scale, selective color, and carefully layered controls. They are minimal, but not empty: each screen has confident hierarchy, strong rhythm, and a few memorable visual moments.

The default style must be visibly different from an ordinary enterprise admin template. A plain sidebar, top filter row, KPI strip, data table, and right detail panel is not enough. If that familiar structure appears, it must be transformed through scale, layering, unusual panel geometry, richer row treatment, expressive type, and a stronger surface system.

For the first mock, do not choose the safest neutral dashboard variant and do not start in dark mode. Pick an opinionated light-mode default from the reference language: soft editorial finance, layered sales report, warm product overview, or quiet collaboration workspace. The output should have one strong stylistic identity, not a diluted average of all references.

The quality bar is not "clean SaaS." A clean functional app screen can still fail if it is just one white dashboard card with a few polite controls. The default should have a designed-object feeling: a visible stage, clear surface hierarchy, large quiet regions, confident typographic anchors, and a few custom data objects that would not appear in a starter kit.

This is still for building working apps, not marketing pages or portfolio concepts. Do not turn the main app screen into a landing-page hero, poster, or editorial website. Keep the design operational: visible navigation, controls, lists, filters, forms, timelines, actions, state, and realistic interaction surfaces should remain central. The style should make an app feel premium, not make the app stop feeling like software.

## Color

The light screens use cool off-white, pale gray, and porcelain backgrounds rather than pure white everywhere. Common colors:

- Backgrounds: cool white, glacier, porcelain, soft cloud gray, pale stone, faint blue-gray.
- Text: near-black charcoal for primary text, cool gray for secondary labels.
- Borders: very light gray with low contrast.
- Accent colors: one or two vivid accents only, such as coral, rose, mint, electric green, amber, or deep navy.
- Status colors: softened tints with readable text, not saturated badge spam.

The references often separate the outer background from the main content by only a few perceptual steps. This slight offset makes the content pop without looking contrasty:

- Outer background: visibly tinted and slightly darker than the main content, such as pale gray, cool porcelain, glacier gray, mist, or faint blue-gray.
- Main app frame: lighter cool off-white or near-white, not default pure white.
- Cards and raised controls: subtly brighter cool white/off-white than the frame, not raw browser white.
- Selected surfaces: a mild tint or lifted white surface with soft shadow.
- Avoid using the same pure white for body, app frame, panels, cards, and controls.
- Avoid `#fff` as the default surface. Use it only for tiny highlights when the surrounding surfaces are already cool off-white.
- The contrast should be readable at a glance: page background, app canvas, and focal surfaces must not blend into one flat white mass.
- The background/app offset must remain visible at thumbnail scale. If the app looks like a white rectangle on an almost-white page, increase the outer tint or make the app canvas warmer.
- The outer stage must remain visible on desktop, not only in the mobile preview. Keep enough tinted margin around the app frame and avoid letting the app canvas blend into the board background.
- Use accent color as a focal mark, pill, tab, icon, short rule, or partial stroke. Avoid wrapping large hero panels in full bright outlines; that can make the UI feel like a form validation state instead of a premium layout.

The dark screens use black and near-black surfaces with restrained contrast:

- Backgrounds: black, graphite, charcoal, dark smoke.
- Panels: slightly lighter charcoal with subtle borders.
- Accent colors: neon mint, acid green, orange, or white used sparingly.
- Glow: color appears as a soft bloom or gradient wash behind charts, not as a generic full-page gradient.

Avoid one-note palettes. A good screen may be mostly neutral, but it still has controlled accent contrast and depth.

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

## Shadows, Borders, And Depth

Depth is soft and layered, but it should not depend on obvious old-school card shadows. Premium light UI usually pops first through a tinted outer background, a lighter app canvas, brighter focal surfaces, rounded geometry, selective borders, tonal changes, and small modern elevation.

- Light UIs use low-contrast borders, subtle inner tonal shifts, and occasional ambient elevation under floating cards or selected menu items.
- Small modern shadows are allowed and often useful. Use the spirit of Tailwind `shadow-xs` and `shadow-sm`: tiny y-offset, tight blur, low-opacity black, clean fade, no dirty gray halo.
- Use `shadow-xs`/`shadow-sm` style elevation selectively on floating controls, selected rows, and important panels. The shadow should be softer, tighter, and closer to the surface than a classic card shadow.
- Many regions should have no border and no card shell; they can live directly on the app canvas through spacing and typography.
- Selected items can look slightly raised through a brighter surface, subtle border color, and small modern shadow.
- Dark UIs rely more on border, glow, and tonal contrast than classic drop shadow.
- Floating overlays, command palettes, popovers, and cards should feel lifted but remain understated; the shadow should fade smoothly into the background.
- Elevation tokens shown in the design-system strip must be represented in the actual app UI. They are not just documentation swatches. Use them on meaningful lifted states such as navigation chrome, active nav, selected records, important notices/cards, compact floating controls, popovers/sheets, mobile navigation controls, mobile preview devices, and one important focal surface when useful. The effect should be visible enough to read as elevation at thumbnail scale, but still tighter, thinner, and more faded than a normal card shadow.

Avoid generic `shadow-md`, `shadow-lg`, or larger shadows as the default. Avoid dark offset shadows, hard-edge shadows, gray halos, and anything that looks like a default heavy card drop shadow. If the shadow is visibly announcing itself before the surface shape, it is too strong.

Reference-grade shadow behavior:

- The shadow should sit close to the element and fade cleanly within a short distance.
- It should not create a broad gray cloud around the card.
- It should not become the main method of separating every panel.
- It should be paired with stronger tonal background contrast so the UI does not become flat.
- Large panels should rarely use visible shadow. Use shadow mainly for selected rows, compact floating controls, popovers, and small lifted states.
- If a large white rounded panel is separated primarily by shadow, it will read as old admin UI. De-card the region or increase tonal separation instead.
- If the design dock shows elevation examples but the app surface itself remains completely flat, revise the prompt. The UI should demonstrate the elevation system sparingly and functionally.
- If the whole screen is separated only by 1px borders while elevation appears only in the dock, it will feel like documentation rather than a designed product. Revise toward a few lifted functional surfaces instead of adding borders everywhere.
- Important notices/cards should not be only a tinted border or colored background. Use a brighter focal surface, a tight faded shadow, and enough surrounding spacing so the elevation token is actually visible without becoming heavy.

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
- Dark dashboards use dramatic scale, wide gutters, and big chart cards.

The design should feel composed. Do not fill every grid cell just because there is room.

Navigation and workspace chrome should anchor the product without becoming heavy. If the app uses a sidebar, icon rail, secondary navigation, top nav, tabs, command bar, breadcrumb, or filter bar, give it enough tonal contrast and active-state clarity to be readable at a glance:

- Use a subtly distinct rail/sidebar/top-nav background, border, shadow-xs, inset line, or active pill so navigation does not disappear into the canvas. The nav surface should read slightly darker, cooler, or more tinted than the app canvas at thumbnail scale, but it should not become a saturated colored block or high-contrast slab.
- Sidebar or rail shadows may help, but they must be soft, tight, and close to the edge: a narrow `shadow-xs`/restrained `shadow-sm` or inset edge shadow, not a broad vertical cloud spreading across the content.
- Active navigation states should have stronger contrast than inactive icons/text.
- Top bars and filter bars should feel intentionally placed, not like low-contrast text floating on white.
- Mobile navigation controls, hamburger buttons, bottom tabs, and drawers should inherit the same contrast and tight elevation behavior when present; they should not look flatter than the desktop nav system.
- Do not force a sidebar or top nav when the app does not need one. Apply the contrast rule only to the navigation structure implied by the product.
- Keep navigation contrast balanced: clearer than the canvas, but not heavier than the main workflow. If the sidebar becomes the most visually dominant element, reduce its tint and rely on the active state, divider, and tight edge elevation.

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
- If the product has many metrics, lists, charts, forms, and workflows, do not place them all on the first screen. Choose what the user needs now and move the rest behind navigation, scroll, or drill-down.
- Data-heavy does not mean visually dense. Use larger row heights, sparse visible records, bigger gutters, and clearer hierarchy so the user does not feel overloaded.
- A main page can imply additional content below the fold; it does not need every module visible in the design board viewport.
- Use tabs, collapsed rows, drawers, detail pages, and secondary views to keep the first screen calm.
- Visible modules must earn their place by supporting the immediate task. Move secondary lists, version history, detailed timelines, activity, audit trails, analytics, and configuration detail behind navigation, tabs, drawers, drill-down pages, or scroll when they are not needed right now.
- Do not add another panel merely because there is empty space. Empty space is part of the premium composition.

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
- Shadows should feather smoothly. Reject shadows that stop abruptly, look dirty, extend too far, or create a hard gray outline.
- Avoid partially cropped or edge-cut elements unless the design clearly uses an intentional carousel/overflow pattern.

Stronger default composition moves:

- Put one oversized active object at the center: selected record, account, report, thread, product, timeline, asset, or work item.
- Let secondary information orbit that object as chips, compact cards, timelines, rich rows, or floating controls.
- Use a large rounded outer app frame or a clear designed canvas so the screen feels like a product object, not a browser page of boxes.
- Prefer icon rails, nested guide lines, active pills, and layered command/search surfaces over a stock vertical menu.
- Make mobile a designed companion view with its own hierarchy, not a simple stack of desktop cards.
- Vary scale deliberately: one prominent metric or title, one dominant workflow region, several compact controls, and sparse supporting charts. Avoid website-hero scale for app titles.
- In dark companion variants, use a black outer stage, graphite panels, luminous accent bars, soft chart glow, and high-contrast white type instead of default dark cards.

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

## What Makes It Look Good

These screens work because they avoid the common dashboard trap of equal cards, equal padding, equal type, and default component styling. They use:

- One strong visual anchor per region.
- Big whitespace around important elements.
- Noticeable gaps between panels and generous padding inside panels.
- A slight background/surface color offset that makes raised content stand out.
- Border-led surface separation with little or no visible shadow.
- Modern low-elevation shadows used selectively, similar to Tailwind `shadow-xs` or a tighter/faded `shadow-sm`.
- Elevation tokens that are visible in the product UI itself: navigation, selected record lanes, important surfaces, floating controls, and popovers should show the same tight, faded depth system illustrated in the design dock.
- Soft neutral backgrounds with purposeful accent color.
- Rounded forms that feel product-designed, not framework-default.
- Carefully reduced borders and dividers.
- High-quality typography and metric treatment.
- Subtle depth for selected or floating content.
- Asymmetric layout with clear hierarchy.

## Default-Style Quality Gate

Before showing a default-style mock, inspect it against this checklist. If any item fails, revise the prompt and regenerate.

- Background and surfaces: the page background is visibly tinted or slightly darker, the app canvas is lighter, and focal surfaces are brighter; the UI must not be pure-white-on-pure-white or flat gray-on-white.
- Designed-object stage: the outer app frame or canvas must be visually intentional, not just a browser-like white page.
- Desktop outer tint: the tinted outer page/stage must be visible around the desktop app frame, not lost into the app canvas.
- Navigation contrast: sidebars, rails, tabs, command bars, and top navigation should have enough tonal contrast and active-state clarity when they exist. They should be slightly darker, cooler, or more tinted than the main content canvas, but not so contrasty or saturated that navigation dominates the workspace.
- Radius consistency: cards, rows, inputs, buttons, tabs, chips, and icon buttons must follow a coherent radius scale.
- Spacing: broad gutters, large panel padding, visible negative space, fewer visible objects, and calm mobile density.
- Progressive disclosure: the screen should prioritize the current task and route secondary information to tabs, drawers, drill-down pages, scrolling, or collapsed states instead of creating information overload.
- Shadows and elevation: modern small elevation only where useful; shadows are softer, tighter, lower opacity, and cleaner than classic admin-card shadows. Elevation samples in the design dock should also appear in the main UI on selected records, navigation chrome, important notices/cards, mobile navigation affordances, floating controls, popovers, or one important focal surface.
- Card usage: not every group is boxed. Some regions use open canvas, typography, background bands, or spacing instead of borders.
- Typography: clear display/numeric anchors with lighter utility labels, not the same medium text everywhere.
- Layout rhythm: one dominant active object, asymmetric support regions, rich rows or lanes instead of a plain table, and a designed mobile companion.
- Component precision: aligned timelines/steppers, consistent row geometry, clean icons, no clipped labels, no accidental overlaps, and no random shadow differences.
- Overall identity: it must not look like Bootstrap, a default shadcn screen, a generic admin dashboard, or a safe left-nav/KPI/table composition with cosmetic styling.
- App usability: the screen must still read as an app workspace with clear controls and next actions, not a marketing/website hero with dashboard decoration.
- Local breathing room: dense side panels, crowded workflow routes, tight bottom actions, or compressed mobile modules fail even if the overall desktop composition is strong.

## Anti-Patterns

Avoid:

- Bootstrap/admin-template look.
- Uniform grids of identical cards.
- Conventional left-nav + top filters + KPI row + plain table + right details as the default answer.
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
A premium modern SaaS interface inspired by soft editorial dashboard references: a visibly tinted pale background, lighter cool off-white/porcelain content canvas instead of raw white, brighter cool-white focal surfaces, visibly tinted/darker navigation chrome when navigation exists, a large rounded app frame, de-carded active-object hero area, generous whitespace, broad gutters, large panel padding, pill controls, selective low-contrast borders, selective Tailwind `shadow-xs`/tighter faded `shadow-sm` elevation used in the actual UI for navigation, selected records, important notices/cards, mobile nav affordances, floating controls, popovers, or one important focal surface, one strong accent color, expressive metric typography, asymmetric open layout, background bands and open sections instead of boxing every group, a few rich rows instead of dense tables, and a designed mobile companion view. Avoid Bootstrap/admin-template styling, equal card grids, cramped dashboards, pure-white-on-pure-white surfaces, raw white default surfaces, low-contrast blending, same-white navigation and content surfaces, card boxes around every group, elevation tokens that only appear in the design strip, large white hero cards with obvious shadows, misaligned structured components, old-school drop shadows, harsh borders, generic blue-gray dashboard defaults, and the standard sidebar/KPI/table admin composition.
```

For the dark companion board generated after light approval, include:

```text
A premium dark product dashboard with black/graphite surfaces, a large rounded outer stage, oversized metrics, deep spacing, neon accent highlights, soft chart glow, pill controls, rich record lanes, and cinematic panel composition. Avoid generic dark mode cards, ordinary left-nav/table layouts, and default admin-dashboard spacing.
```
