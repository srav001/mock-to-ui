# Briefing

Use this reference before generating the first design board. The goal is to gather enough product and visual context to create a mock that can become an implementation source.

For a fresh agent, this brief is the bridge between user intent and the image prompt. Do not depend on remembered context alone. Capture the brief, then combine it with the local skill rules and visual references when writing the GPT Image prompt.

## Minimum Brief

Capture these details:

- Product type: dashboard, SaaS tool, marketplace, internal tool, consumer app, portfolio, landing page, game UI, editor, or another category.
- Primary user: role, skill level, context, and what they are trying to accomplish.
- Core workflow: what the user should be able to do on the first screen.
- Required screens or views: dashboard, list, detail, settings, modal, onboarding, mobile state, empty state, loading state, or error state.
- Data domain: examples of realistic labels, metrics, entities, statuses, and actions.
- Visual tone: utilitarian, premium, playful, editorial, technical, calm, dense, spacious, clinical, financial, creative, etc.
- Brand constraints: colors, logo, typography, imagery, existing references, forbidden styles, accessibility requirements.
- Explicit style direction: whether the user wants a named style such as skeuomorphic, brutalist, playful, industrial, editorial, glassy, dark neon, luxury, or a specific color/shape system.
- Target viewports: desktop-first, mobile-first, both equally, or a specific viewport.
- Interaction expectations: filters, tabs, sidebars, drawers, command menus, editable tables, charts, timeline, forms, drag/drop, etc.

## Clarifying Questions

Ask the smallest useful set. Good questions:

- "What is the app and who uses it?"
- "What should be visible in the first screen?"
- "Should it feel dense and operational, or spacious and brand-led?"
- "What is the one task that must be clear on the first screen, and what can move to secondary pages, drawers, tabs, or scroll?"
- "Do you have colors, references, or competitors to avoid/copy?"
- "Do you want a specific visual style, or should I use the default premium minimal reference style?"
- "Should mobile be a compact version of the same screen or a separate priority workflow?"

If the user gives a broad prompt and wants speed, proceed with assumptions:

```text
I will assume this is a desktop-first operational SaaS UI, with a responsive mobile summary view, realistic mock data, and a restrained shadcn-style component system. I will generate a design board first, then wait for approval before implementing.
```

If the user does not specify a strong style, add this assumption:

```text
I will use the skill's default premium minimal light-mode visual reference style first: visibly tinted pale background, lighter cool off-white/porcelain content canvas instead of raw white, brighter focal surfaces, subtly tinted navigation chrome when navigation exists, a large rounded app frame, app-appropriate active-object workspace, generous whitespace, broad gutters, large panel padding, pill controls, selective light borders, modern `shadow-xs`/tighter faded `shadow-sm` style elevation used on real UI states, expressive but not marketing-scale typography, asymmetric open composition, and one or two strong accents chosen from a varied palette rather than default blue. I will choose the navigation model that fits the product instead of defaulting to a sidebar. I will keep it operational as an app UI, not a website hero, and avoid generic Bootstrap/admin-dashboard styling, cramped information-dense layouts, secondary modules shown just because they exist, boxing everything as cards, same-white or overly contrasty navigation/content surfaces, old-school drop shadows, heavy top-bar shadows, dock-only elevation tokens, blue-by-default palettes, and visibly inconsistent generated UI details. After the light board is approved or approval is waived, I will generate a matching dark-mode companion board for implementation tokens.
```

## Brief To Prompt Conversion

Turn the brief into concrete visual instructions:

- Replace vague adjectives with visible properties.
- Convert "modern" into color, spacing, hierarchy, materials, and component density.
- Convert "dashboard" into a layout: sidebar, header, filters, KPI cards, main table, charts, activity panel, detail preview.
- Convert "premium" into disciplined whitespace, balanced type scale, restrained accent color, high-quality surfaces, and fewer noisy borders.
- Convert "data-heavy" into prioritization and progressive disclosure, not a crowded first screen.
- Convert "editorial" into distinctive type hierarchy and composition while preserving app controls and workflows; do not turn app screens into marketing pages.
- Convert "enterprise" into dense but readable tables, clear navigation, status chips, filters, and predictable hierarchy.
- Convert "creative" into stronger imagery, custom composition, bolder type, and more expressive but still usable UI.
- Build the final image prompt from three inputs together: the user brief, the common anti-generic and quality rules from this skill, and the chosen style source (default visual references or the user's explicit style).

## Style Selection

Always include the common anti-generic design rules from `assets/prompts/design-board-prompt.md` in the image prompt.

Then choose style input:

- If the user gives no strict style, use `references/visual-style-references.md` as the default style language.
- If the user asks for a specific style, use that style instead of the default reference style.
- If the user gives colors/shapes/materials but no full style, combine those constraints with the default premium minimal style.
- If the user explicitly asks for a conventional enterprise/admin look, still avoid generic Bootstrap defaults; make it intentionally utilitarian and polished.
- The first design board is light mode by default. Generate dark mode only after light approval or explicit approval waiver.
- Before showing any default-style mock, compare it against the written default-style quality gate in `references/visual-style-references.md` and regenerate if surface contrast, shadows, spacing, typography, component precision, or card usage is visibly weak.

## Approval Language

After generating a mock, ask for approval in concrete terms:

```text
The light-mode design board is generated at <path>. Please review the desktop layout, mobile layout, colors, density, and component style. If this is approved, I will generate the matching dark-mode companion board, then implement the React shadcn/ui app from both mocks. If you want changes, tell me what to adjust and I will revise the light mock first.
```
