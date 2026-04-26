# Shadcn Setup And Theming

Use this reference while creating and theming the React project.

Shadcn/ui and Tailwind are accelerators, not fidelity limits. If they are not enough to reproduce the approved mock one-to-one, extend them with custom CSS and component overrides rather than accepting drift.

## Scaffold

Prefer a fresh Vite React TypeScript shadcn/ui project unless the user requests another framework. Before running scaffold commands, confirm the target path.

The intended app root should become the real scaffold location. Do not create a temporary Vite/shadcn app somewhere else and then copy it into the target folder just because the target is non-empty. If the target folder is meant to be the app, make it empty enough first and scaffold there directly.

Current shadcn documentation recommends the latest CLI flow for Vite, such as:

```bash
npx shadcn@latest init -t vite --name <app-name>
```

When available, prefer this fuller CLI flow for this skill:

```bash
npx shadcn@latest init --preset b0 --template vite --pointer
```

That flow creates the Vite app through the shadcn CLI and then asks for the project name interactively in the terminal. Provide the intended project name when prompted.

Do not depend on `--name` support. Some CLI versions ignore it or do not support it consistently. If the CLI wants the project name interactively, treat that as normal and answer it in the terminal instead of failing the scaffold.

or the package-manager equivalent:

```bash
bunx shadcn@latest init -t vite
pnpm dlx shadcn@latest init -t vite
```

Do not use `npm dlx`; not every npm version supports it. Use `npx` for npm-based projects.

Because shadcn CLI behavior changes over time, check command output and generated files before proceeding. If the CLI offers choices, choose React, TypeScript, Tailwind, CSS variables, and the app structure that best supports shadcn components.

Install `lucide-react` as part of the initial setup. The implementation phase assumes a consistent icon library is available for navigation, status, controls, and lightweight UI ornament, and `lucide-react` is the default icon set for this skill.

```bash
npm install lucide-react
```

or the package-manager equivalent:

```bash
pnpm add lucide-react
bun add lucide-react
yarn add lucide-react
```

If the CLI prompts for setup choices, use these defaults unless the user or existing project says otherwise:

- Monorepo: no.
- Component library: Radix.
- Preset: Nova or the closest clean Lucide/Geist preset.
- Template: Vite.
- TypeScript: yes.
- Tailwind and CSS variables: yes.

Prefer non-interactive flags when they work. If the CLI still prompts, use a TTY and answer deliberately; do not abandon scaffolding because the first command was interactive.
If the preferred command shape changes, the invariant is still the same: create a Vite React TypeScript shadcn/ui app in the real target folder, even if that requires stepping through the interactive CLI prompts.

Shadcn is the starting system, not the only allowed dependency. If the approved mock or interaction model benefits from a suitable React/JS library such as a charting library, date planner, virtualized list, calendar, motion helper, or specialized input primitive, install it and use it. Choose libraries pragmatically to match the approved app, not because the default component set is limited.

Recommended early order for a brand-new project:

1. confirm the target path
2. create the child folder first if needed
3. scaffold the actual Vite/shadcn app directly in that location
4. install `lucide-react`, `openai`, and `playwright`
5. install any additional React/JS libraries the approved mock genuinely needs
6. create `mocks/`
7. copy or create `.env` / `.env.example`
8. copy `scripts/generate-design-mock.mjs`
9. only then start mock generation for that project

## Components

Add only components that the approved mock needs. Common dashboard/app components:

```bash
npx shadcn@latest add button card input label select textarea badge separator sheet dialog dropdown-menu tabs table avatar tooltip skeleton progress chart scroll-area
```

Adjust the list to the approved mock and the product workflow. Do not install components just because they are common in dashboards.

## Theme First

Theme before building the app. Extract light tokens from the approved light-mode mock and dark tokens from the dark-mode companion mock.

- `--background`
- `--foreground`
- `--card`
- `--card-foreground`
- `--popover`
- `--popover-foreground`
- `--primary`
- `--primary-foreground`
- `--secondary`
- `--secondary-foreground`
- `--muted`
- `--muted-foreground`
- `--accent`
- `--accent-foreground`
- `--destructive`
- `--destructive-foreground`
- `--border`
- `--input`
- `--ring`
- `--radius`
- chart colors when charts appear

Do not stop at a rough palette. The shadcn theme should match the mock's actual roles: page background, panels, primary actions, secondary controls, muted text, selected states, warning/success/destructive statuses, border strength, and focus rings.

Light-mode contrast matters. Do not use the same white for the page background, app canvas, cards, popovers, inputs, and controls. Map the mock into distinct but related roles:

- Page background: visibly tinted pale cool gray, glacier, or porcelain.
- App canvas: lighter cool off-white/porcelain, not raw `#fff`.
- Focal surfaces/cards: brighter cool white/off-white, with raw white reserved only for tiny highlights if needed.
- Navigation chrome: distinct enough to anchor sidebars, rails, top bars, tabs, command bars, and filter bars when present.
- Navigation surface: use a dedicated sidebar/topbar/nav token that is slightly darker, cooler, or more tinted than the app canvas; do not reuse the same near-white surface everywhere, but also avoid a saturated or overly contrasty nav slab.
- Navigation model: do not assume sidebar tokens will always be used. Some apps should map their nav surfaces to top bars, tab bars, segmented headers, or bottom navigation instead.
- Accent choice: do not default the primary token to blue. Choose the accent family from the approved mock or user palette, and build related tones around it coherently.
- Flat sections: no card shell when spacing and typography are enough.
- Borders: selective and low-contrast, not around everything.
- Shadows/elevation: use Tailwind `shadow-xs` or a custom tighter/faded `shadow-sm` style elevation selectively; avoid `shadow-md`, `shadow-lg`, and larger shadows as default card styling.
- Apply elevation tokens in the actual UI, not only in a design-system sample: navigation shells or active nav, selected records, important notices/cards, compact floating controls, popovers/sheets, mobile nav controls, mobile preview containers, and one important focal surface are good candidates.

Radius should be implemented as a consistent scale, not ad hoc classes:

- Set `--radius` from the approved mock and derive related sizes with Tailwind utilities or CSS variables.
- Use the largest radius for app shells/major containers.
- Use a smaller shared radius for cards/panels.
- Use a consistent medium radius for rows, inputs, buttons, tabs, and popovers unless a control is intentionally pill-shaped.
- Use small/pill radius consistently for chips, badges, and icon buttons.
- Repeated component groups should not mix unrelated corner shapes.

Set both `:root` and `.dark` variables before building detailed UI. The light mock drives `:root`; the dark companion board drives `.dark`. If the dark board contains a token strip, use it directly. If it is visually clear but labels are imperfect, infer token roles from the same component positions used in the light board.

Do not invent dark colors by simply inverting the light palette. Use the dark companion board so dark mode has intentional surfaces, borders, foreground contrast, input states, chart colors, and status colors.

## Tailwind Overrides

Use the theme variables for common elements. Use Tailwind classes for app-specific composition:

- Exact shell dimensions.
- Sidebar width and collapse behavior.
- Panel spacing and grid tracks.
- Table density.
- KPI card rhythm.
- Chart container shape.
- Status chip variants.
- Responsive stack/collapse behavior.

Avoid fighting shadcn defaults one component at a time when a theme variable would solve the issue globally. Conversely, do not overgeneralize a one-off visual detail into the global theme.

Tailwind is not the ceiling. If utility classes are not enough to match the approved mock precisely, add custom CSS classes and component-level styles using values derived from `design/spec.json`. The implementation goal is one-to-one visual fidelity, not purity of Tailwind usage.

## Files To Inspect

After scaffolding, inspect the generated project before editing:

- `components.json`
- `src/index.css` or global CSS file
- `src/App.tsx`
- `src/main.tsx`
- `vite.config.ts`
- `package.json`
- existing `components/ui/*`

Different shadcn versions can produce different structure. Follow the generated structure rather than assuming older paths.

## Lint Quirks

Generated shadcn component files can export helpers such as variant constants alongside components. Vite ESLint setups may flag those exports with `react-refresh/only-export-components`.

If this happens, do not rewrite shadcn components just to satisfy Fast Refresh. Scope-disable that rule for generated UI components:

```javascript
{
  files: ["src/components/ui/**/*.{ts,tsx}"],
  rules: {
    "react-refresh/only-export-components": "off",
  },
}
```

Keep the exception narrow. Do not disable lint broadly for the app code.

## Design Artifact Structure

Inside a real project workspace, keep design assets organized so later iterations and implementation can reuse them cleanly:

- `mocks/`: active generated candidates, exploratory variants, and rejected iterations.
- `design/`: approved boards and design-memory files.

Before generating or implementing, check whether `design/` already exists. If it does, inspect `design/spec.json` and `design/history.md` first.

Once a mock is approved:

- Move the approved board out of `mocks/` and into `design/`.
- Create or update `design/spec.json`.
- Create or update `design/history.md`.

`design/spec.json` should stay implementation-oriented and use three main sections:

```json
{
  "common": {},
  "light": {},
  "dark": {}
}
```

Use `common` for shared items such as radius system, typography, border treatment, shadow/contact tokens, spacing notes, and any other cross-mode decisions. Use `light` and `dark` for the approved mode-specific color and surface tokens.

The board dock is the primary source, but it may not always be perfectly legible. Extract what is explicit and infer only what is visually well-supported by the approved board. This file should help later CSS variable and Tailwind theming work, not become a vague design essay.

`design/history.md` should record why a design change was made, not just what changed. Keep entries concise so future agents can understand the user's design intent quickly before making further revisions.

## Mock Data

The app can use mock data, but it must be realistic:

- Use domain-specific entity names.
- Include statuses, timestamps, owners, amounts, scores, or progress values.
- Include enough rows/cards to test density.
- Include at least one selected, warning, empty, or edge state when the mock implies it.

Do not leave generic "Item 1" or lorem ipsum in a product UI.
