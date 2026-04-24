# Playwright Visual QA

Use this reference during implementation and final verification. The purpose is to compare the working React app against the approved GPT Image design board, not merely to prove that the page loads.

## Core Workflow

1. Create a QA inventory before testing.
   - Include user requirements, the approved mock reading, implemented user-visible features, and final claims you expect to make.
   - Map every visual claim to a screenshot or inspection step.
   - Include desktop, mobile, and at least one meaningful interaction state when the UI is interactive.
2. Start the app in a persistent terminal session.
   - Use the generated project's normal dev or preview command.
   - Prefer a stable local URL such as `http://127.0.0.1:4444` when practical, but use another port if occupied or if the framework chooses one.
3. Write focused Playwright scripts.
   - Use one script per checkpoint or keep one script with clear named screenshot steps.
   - Rerun from a clean Node.js process after each visual code change.
4. Capture screenshots at each implementation checkpoint.
   - Theme/app shell.
   - Main content.
   - Interaction state.
   - Final desktop.
   - Final mobile.
5. Compare screenshots against the approved mock.
   - Inspect the screenshot visually.
   - Fix visible drift before continuing.
   - Do not accept a functional pass as visual proof.
6. Perform scale calibration after the first desktop and mobile screenshots.
   - Compare key dimensions and density against the approved mock.
   - Make a deliberate scale/polish pass before final signoff unless the match is already extremely tight.
7. Run final responsive QA.
   - Capture desktop and mobile screenshots.
   - Check viewport fit, clipping, overflow, layering, contrast, and readable density.

## Screenshot Naming

Save screenshots in the project, usually under `mock/verification/`:

```text
mock/approved-design-board.png
mock/verification/01-theme-desktop.png
mock/verification/02-shell-desktop.png
mock/verification/03-main-content-desktop.png
mock/verification/04-interaction-desktop.png
mock/verification/final-desktop.png
mock/verification/final-mobile.png
```

Remove stale failed screenshots or keep them clearly separated from final evidence.

## Desktop Script

Create a project-local script such as `scripts/verify-desktop.mjs`:

```javascript
import { chromium } from "playwright";

const TARGET_URL = process.env.TARGET_URL || "http://127.0.0.1:4444";
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 960 },
});
const page = await context.newPage();

try {
  await page.goto(TARGET_URL, { waitUntil: "networkidle" });
  await page.screenshot({
    path: "mock/verification/final-desktop.png",
    type: "png",
  });

  console.log(
    await page.evaluate(() => ({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      canScrollX:
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    })),
  );
} finally {
  await context.close().catch(() => {});
  await browser.close().catch(() => {});
}
```

Run it from the generated project:

```bash
node scripts/verify-desktop.mjs
```

## Mobile Script

Create `scripts/verify-mobile.mjs` when the mock includes a mobile design, which this skill normally requires:

```javascript
import { chromium } from "playwright";

const TARGET_URL = process.env.TARGET_URL || "http://127.0.0.1:4444";
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
const page = await context.newPage();

try {
  await page.goto(TARGET_URL, { waitUntil: "networkidle" });
  await page.screenshot({
    path: "mock/verification/final-mobile.png",
    type: "png",
  });
} finally {
  await context.close().catch(() => {});
  await browser.close().catch(() => {});
}
```

## Mock Comparison Checklist

Compare the Playwright screenshot to the approved mock for:

- Layout: same major regions, proportions, and visual priority.
- Theme: same palette roles, background, surfaces, borders, accent colors, and status colors.
- Radius and shape: cards, inputs, buttons, chips, menus, tables, and charts feel consistent with the mock.
- Typography: similar hierarchy, density, line height, contrast, and weight.
- Data density: similar number of visible rows, cards, filters, and metrics.
- Navigation: sidebar/header/mobile nav match the mock's structure.
- Component states: selected, hover, active tab, dialog/sheet, empty/loading/error, warning/success/destructive.
- Mobile: same content priority, stacking, spacing, and navigation pattern.
- Scale calibration: sidebar width, header height, KPI card height, table row height, right-panel width, mobile density, and bottom-nav height match the mock.

If a mismatch is visible, fix it. Do not call it complete because the implementation is "close."

## Scale Calibration Pass

After the first desktop and mobile screenshots, inspect scale before doing final polish:

- Sidebar: width, logo scale, nav item height, bottom profile position.
- Header: height, search width, filter/button sizes, horizontal rhythm.
- KPI row: card height, card gap, title/value size, icon badge scale, chart/progress scale.
- Main table: row height, header height, checkbox size, chip size, column density, pagination size.
- Detail panel: width, card spacing, section density, bottom action bar.
- Mobile: top bar height, tab height, KPI card density, quote row height, selected quote summary, bottom nav.

Make at least one deliberate correction when the implementation is visibly looser, denser, wider, narrower, taller, or shorter than the mock. If no correction is made, state why the screenshots already match tightly.

## Visual QA Rules

- Treat visual QA as separate from functional QA.
- Inspect the initial viewport before scrolling.
- Inspect the densest realistic state, not only the empty or default state.
- Use viewport screenshots for signoff. Use full-page screenshots only as secondary debugging artifacts.
- Look for clipping, overflow, weak contrast, blurry or tiny text, broken alignment, inconsistent spacing, awkward shadows, incorrect border strength, and layering bugs.
- Check fixed shells and internal scroll containers with screenshots and region bounds; document-level scroll metrics are not enough.
- If motion or transitions matter, inspect a settled state and at least one meaningful in-transition or post-transition state.
- Ask before signoff: what visible part of the UI has not been inspected closely?
- Ask before signoff: what visible defect would be obvious to the user if they compared this with the mock?

## Functional QA

For mocked apps, functional QA still matters:

- Click main navigation items.
- Exercise tabs, filters, menus, dialogs, sheets, and mobile nav.
- Verify selected states and labels update.
- Check keyboard focus for primary controls when practical.
- Confirm no console errors appear during the main flow.

## Viewport Fit Checks

The UI fails visual QA if required content is clipped, obscured, pushed out of view, or requires unintended horizontal scrolling.

Use numeric checks as support, then trust the screenshot:

```javascript
const fit = await page.evaluate(() => ({
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  clientWidth: document.documentElement.clientWidth,
  clientHeight: document.documentElement.clientHeight,
  scrollWidth: document.documentElement.scrollWidth,
  scrollHeight: document.documentElement.scrollHeight,
  canScrollX:
    document.documentElement.scrollWidth >
    document.documentElement.clientWidth,
  canScrollY:
    document.documentElement.scrollHeight >
    document.documentElement.clientHeight,
}));
console.log(fit);
```

For fixed app shells, also check important region bounds:

```javascript
const regions = await page.locator("[data-qa-region]").evaluateAll((nodes) =>
  nodes.map((node) => {
    const rect = node.getBoundingClientRect();
    return {
      name: node.getAttribute("data-qa-region"),
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height,
    };
  }),
);
console.log(regions);
```

Add `data-qa-region` attributes to major regions if clipping is a realistic risk.

## Signoff

Before final response, confirm:

- The app builds or passes the available project checks.
- Desktop screenshot was captured and reviewed against the approved mock.
- Mobile screenshot was captured and reviewed against the approved mock.
- A scale-calibration pass was completed after the first screenshots.
- At least one interaction state was captured or manually inspected when interactions exist.
- The UI matches the approved mock closely enough that visible differences are not obvious or accidental.
- Any deliberate deviation from the mock is named and justified.
