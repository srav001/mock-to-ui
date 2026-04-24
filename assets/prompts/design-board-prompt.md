# Design Board Prompt Template

Intent:
Create a production-ready light-mode design board for a React shadcn/ui frontend. The board will be used as the visual source of truth for implementation, so make it specific, coherent, and directly buildable.

Product:
<Describe the app, user, domain, and primary workflow.>

Design Thinking:
Understand the product purpose, primary user, tone, constraints, and the one memorable visual idea. Choose a clear aesthetic point of view and execute it with precision. The design can be refined minimal, editorial, dark neon, luxury, playful, brutalist, industrial, soft/pastel, skeuomorphic, or another direction if the user asks for it. Intentionality matters more than intensity.

Always-On Anti-Generic Rules:
Do not generate a generic AI dashboard, Bootstrap/admin-template UI, default blue-gray shadcn screen, predictable equal-card grid, left-nav plus KPI-strip plus plain data-table layout, purple-gradient SaaS hero, or cookie-cutter enterprise screen. Avoid default-looking typography, harsh borders everywhere, timid evenly-distributed palettes, and components that look dropped in without design direction. The UI must feel deliberately designed for this product. If the first composition could be mistaken for a standard admin template, it is a failed design.

Style Direction:
If the user provided a strict style, follow it. Otherwise use the skill's default premium minimal reference style in light mode: a designed-object interface with a subtly offset pale background, cool off-white/porcelain content surfaces instead of raw white, a large rounded outer canvas, oversized editorial panels, pill controls, quiet low-contrast borders, tonal elevation, extremely soft ambient depth only where needed, expressive metric typography, asymmetric composition, carefully stacked/overlapping cards, sparse custom charts, generous whitespace, and one or two strong accent colors. The default should feel closer to a premium product design reference than an enterprise admin kit.

App-First Rule:
This skill builds app UIs, not marketing pages. Premium and editorial must not mean landing-page hero, portfolio poster, or oversized website H1. Keep the screen operational: navigation, controls, filters, forms, lists, state, actions, and responsive app behavior should be visible and usable. Use expressive type and a strong active object, but keep title scale proportional to app workflow.

Designed-Object Standard:
The default quality bar is higher than clean SaaS. Do not create one large white dashboard card on an almost-white page and call it premium. The outer stage, app canvas, active object, mobile preview, and token strip need a clear surface hierarchy visible even at thumbnail scale. Use a stronger tinted outer background, a cool off-white app canvas, brighter cool-white focal surfaces, and a few custom product-specific data forms.

Default Composition Requirements:
Use one memorable structural idea. Examples: a large rounded command/work surface, an oversized active-record panel, a layered record stack, a compact icon rail with a secondary navigation tree, a floating workflow timeline, a soft mobile device preview, or an editorial analysis panel. Do not let a table dominate the screen unless it has been visually transformed into rich rows, lanes, cards, or grouped records. Make the app screenshot itself distinctive; do not rely on the surrounding design-system strip to make the board look polished.

App Scale:
Use app-scale display typography. Headings can be distinctive and larger than utility labels, but they should not consume the viewport like a website hero. Keep enough above-the-fold room for controls, records, actions, status, and analysis modules.

Spacing And Density:
Default to spacious minimal composition. Use large gutters between regions, generous padding inside panels, fewer visible records, fewer simultaneous modules, and clear blank space around the main object. Let important elements breathe. Avoid filling every available area with controls, rows, metrics, charts, or annotations.

Progressive Disclosure:
The first screen does not need to show the whole product. Show the user's primary task, a small amount of decision-critical context, and clear paths to secondary detail through tabs, scroll, drawers, sheets, drill-down pages, or secondary routes. Data-heavy does not mean visually dense. A calm first page with fewer visible objects and clear next actions is better than a crowded page full of widgets.

Minimum Necessary Content:
Every visible module must earn its place by helping the immediate task. Do not show secondary lists, timelines, version history, audit activity, detailed routes, analytics, or multiple parallel panels just because they exist in the product. Collapse, summarize, or route them away until the user asks for that detail. Prefer one strong active workspace with a small amount of supporting context over a page that exposes all adjacent product areas.

Local Spacing:
Do not let secondary modules become cramped. Side analysis stacks, data/composition bars, workflow routes, steppers, and bottom action groups need their own breathing room. Use larger vertical gaps between modules, more row height in bar groups, enough room between labels and values, and a clear gap above action buttons. On mobile, increase spacing further and show fewer simultaneous details so the phone view feels calm and usable.

Mobile Prioritization:
Do not squeeze every desktop module into the mobile preview. Mobile may omit, summarize, or collapse secondary desktop information. Prefer a calm mobile flow with only the information needed for the immediate action plus clear primary actions. Use larger vertical gaps and touch-friendly controls. If including every desktop section makes the phone cramped, remove the lower-priority section.

Background And Surface Contrast:
Use a clear but tasteful offset between the outer page/background and actual content surfaces so the product UI pops. The outer background should be visibly tinted and slightly darker than the main content: cool gray, glacier gray, porcelain gray, mist, or faint blue-gray. The main app canvas should be lighter cool off-white, and focal elevated surfaces may be brighter cool white/off-white. Avoid pure white everywhere. Use tonal contrast, selective light borders, and modern small shadows to separate surfaces. The tinted outer stage must remain visible on desktop as well as mobile; keep enough margin around the app frame so the desktop view does not become one flat pale surface.

Navigation Contrast:
If the product uses a sidebar, icon rail, secondary nav, top nav, tabs, command bar, breadcrumb, or filter bar, make that navigation chrome readable and intentionally anchored through subtle tonal separation. Navigation should be slightly cooler, slightly darker, or slightly more tinted than the app canvas, but never a saturated or heavy colored block that overpowers the workspace. Use a distinct surface token, low-contrast divider, inset edge, active pill, and tight `shadow-xs`/faded `shadow-sm` where useful. Sidebar/rail shadows may be used, but they must be soft, tight, low-opacity, and close to the edge; avoid broad vertical clouds or harsh strips. Active nav states should be stronger than inactive ones without making the whole nav high contrast. Mobile navigation affordances such as hamburger buttons, bottom nav, tab bars, and drawers should carry the same subtle surface contrast and small elevation when they appear. Do not force a sidebar or top nav into every app; apply this only to the navigation pattern that fits the product.

Radius System:
Use a coherent radius scale across the board. Pick 3-4 radius tokens and apply them consistently: largest for outer app frame/shells, medium-large for panels/cards, medium for rows/inputs/buttons/tabs, and small or pill for chips/badges/icon buttons. Repeated cards in the same group must share radius, border strength, and shadow depth. Buttons and inputs in the same control family should not have unrelated corner shapes. The visible UI must match the radius tokens shown in the design-system strip.

Shadow And Border Treatment:
Avoid old-school card shadows. Do not use large, dark, hard-edged, or dirty gray drop shadows. Modern small shadows are allowed only when they are softer, tighter, and closer to the element than a classic card shadow: think Tailwind `shadow-xs` or a very restrained `shadow-sm`, with tiny y-offsets, low opacity, short fade distance, and no broad gray halo. Large panels should usually separate through surface tone, radius, spacing, and a low-contrast border, not obvious shadow. Use shadow mainly on selected rows, floating controls, and one or two focal surfaces. Do not put every region inside a bordered card.

Elevation Usage:
The design-system strip may show elevation tokens, but those tokens are not decorative samples. The main UI must actually use them on several meaningful lifted states: navigation chrome or active nav, a selected/active record lane, an important notice/card, compact floating controls, popovers/sheets, mobile navigation affordances, mobile device preview, or one important focal surface. Important notice/cards should not rely only on tinted border color; combine a brighter focal surface, a tiny tight shadow, and clear spacing so the lift is visible. Keep this elevation tighter and more faded than ordinary `shadow-sm`: tiny vertical offset, close blur, low alpha, and smooth feathering. The depth should be visible at thumbnail scale as a refined lifted edge, but should never look like a broad card shadow. Do not use elevation on every card, and do not let shadows become the primary separator for large panels. If the screen is separated almost entirely by borders while the dock shows elevation tokens, or if mobile controls are flat while the dock advertises elevation, the design failed.

Open Composition Rule:
Do not box every functional group. At least one major secondary region should be an open area on the app canvas using typography, spacing, pills, bars, dividers, or background bands instead of a full card shell. Use fewer cards, larger gaps, and stronger hierarchy. The board should look designed, not assembled from a component library.

De-Carding Rule:
The active hero area should not look like a standard white card with a drop shadow. Prefer an open hero band, a faintly tinted panel, a partial-border surface, or content placed directly on the app canvas. If the layout needs cards, reserve visible card treatment for the selected row, a floating control, or a mobile preview, not every region.

Accent Rule:
Use strong accent color as a badge, short rail, selected tab, small icon, partial edge, or focused metric. Do not wrap large hero regions in a full bright outline unless the user explicitly asks for an alert-heavy visual system; a full coral rectangle around the main panel usually reads like form validation, not premium UI.

List Rule:
Do not render important records as a bordered table box. Use a sparse set of rich lanes with generous height, open sibling rows, a clear selected/lifted state when useful, sparse columns, and clear whitespace. If the records read as a spreadsheet or admin table, redesign them.

Self-Review Gate:
Before finalizing the image, check whether the main app could be mistaken for Bootstrap, a CRM/admin template, or default shadcn. Also check whether it feels like a website/marketing hero instead of an app workspace. Check whether it feels cramped or information-dense globally or locally. Reject it if the first screen tries to show the whole product instead of using progressive disclosure. Reject it if secondary lists, version history, timelines, routes, analytics, or detail panels are visible without directly supporting the immediate task. Inspect side stacks, bar groups, workflow routes, steppers, bottom action groups, and mobile modules specifically for cramped spacing. Check whether there is enough contrast between page background, app canvas, focal surfaces, and any navigation chrome at thumbnail scale, including on desktop. Check whether navigation chrome has subtle tonal separation when navigation exists; reject nav that is either same-white as content or too saturated/dark compared with the app canvas. Check whether the desktop outer tint is still visible around the app frame. Check whether surfaces use cool off-white/porcelain values instead of default raw white. Check whether too many areas are boxed as cards. Check whether radius is consistent across sibling cards, rows, inputs, buttons, tabs, chips, and icon buttons. Check whether shadows are too harsh, too wide, too dark, old-fashioned, or visibly uneven between siblings, especially sidebar/rail shadows. Check whether elevation tokens shown in the design-system strip are actually visible in the app UI on meaningful lifted states rather than only in the strip, including important notices/cards and mobile nav affordances when present. Check whether the active object is just a standard white card or a full alert-outlined validation box. Check whether records look like a bordered table. Check for visual generation mistakes in structured components: timeline dots must align to connector lines, row heights must be consistent, card edges should not clip, icons should be clean, and labels should not overlap. If any of these fail, redesign it with app-appropriate scale, stronger hierarchy, fewer boxes, larger gaps, stronger tinted background, cool off-white surface roles, balanced navigation contrast where navigation exists, coherent radius tokens, softer/tighter modern elevation, richer record visualization, and more precise component geometry.

Canvas:
Desktop-first light-mode design board. Show the main desktop screen as the largest area. Include a smaller mobile version on the side or lower portion. Include a visible light-mode design system strip with colors, radius, surface style, typography notes, and component examples.

Desktop UI:
<Describe app shell, sidebar/header, content layout, panels, tables, charts, filters, cards, forms, and primary actions.>

Mobile UI:
<Describe mobile layout, collapsed navigation, stacked content, priority information, and touch-friendly controls.>

Design System:
Use a shadcn/ui-compatible component system with CSS variable theming and Tailwind implementation, but do not make it look like default shadcn. Show a clear light-mode color palette, surface hierarchy, border strength, border radius, modern shadow tokens like `shadow-xs` and `shadow-sm`, status colors, muted text, focus/selection states, typography scale, and motion/interaction notes. The implementation will later generate a separate dark-mode companion board from this approved light board, so do not make the first board dark.

Implementation Feasibility:
Use components that can be built with React, shadcn/ui, Tailwind, lucide icons, and local mock data. Avoid visual effects that require heavy custom graphics unless essential to the product.

Constraints:
No generic landing-page hero unless the product is specifically a landing page. No poster-like website hero for app products. No placeholder lorem ipsum. No vague decorative filler. No illegible dense microtext. No random gradients or purely atmospheric imagery. No bland enterprise dashboard defaults. No small-radius white cards arranged in a mechanical grid. No plain spreadsheet table as the main visual answer. No crowded dashboard canvas. No visibly broken timeline/stepper/row/card geometry. No old-school heavy drop shadows. The result should look like a real app that shipped and has a memorable visual identity.
