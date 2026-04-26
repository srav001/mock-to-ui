# Playwright Visual QA

Use this reference during implementation and final verification. The purpose is to compare the working React app against the approved GPT Image design board, not merely to prove that the page loads.

This QA loop is not complete until the implementation is a near one-to-one reproduction of the approved mock. Treat visual drift as a failure condition. Expect repeated screenshot, compare, fix, and rerun passes. Five to ten passes is normal; many more are acceptable when needed.

This is not optional polish. This is the main enforcement mechanism for the skill. If Playwright comparison still reveals visible drift or fake/static control behavior, the build is not done.

Use `design/implementation-review.md` and `design/implementation-open-gaps.md` as the written memory for this loop. Do not keep the remaining mismatch list only in your head.
Do not allow those files to become vague signoff theater. They should contain screenshot-backed evidence, concrete mismatches, and concrete next fixes.

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
   - Focused screenshots for:
     - navigation chrome
     - header/context
     - dominant workflow surface
     - support modules
     - mobile above-the-fold
   - Additional focused region screenshots whenever a local area still has visible drift.
5. Compare screenshots against the approved mock.
   - Inspect the screenshot visually.
   - Fix visible drift before continuing.
   - Do not accept a functional pass as visual proof.
   - Repeat the loop until the user should not be able to tell the implementation from the mock in ordinary comparison.
   - Treat every ordinary visible mismatch as a blocker that keeps the loop open.
   - Inspect the page section by section, not only as a full-page mood check.
   - Update `design/implementation-open-gaps.md` after each pass before coding the next fix.
   - Update `design/implementation-review.md` with screenshot-backed region notes after each pass.
6. Perform scale calibration after the first desktop and mobile screenshots.
   - Compare key dimensions and density against the approved mock.
   - Make a deliberate scale/polish pass before final signoff unless the match is already extremely tight.
7. Exercise real interactions, not frozen mock states.
   - If the mock shows an open select, menu, popover, tooltip, sheet, dialog, accordion, or tab state, reproduce that with the actual interactive component and capture the screenshot in that state.
   - Do not hardcode an always-open fake control just to mimic the image.
8. Run final responsive QA.
   - Capture desktop and mobile screenshots.
   - Check viewport fit, clipping, overflow, layering, contrast, and readable density.
9. Run an adversarial final pass after the UI seems done.
   - Assume the implementation is still wrong.
   - Try to find at least five visible differences.
   - Either record and fix them, or explain specifically why each suspected difference is not a blocking mismatch.

This loop should stay open until the open-gaps file is empty or contains only explicitly tolerated hard-illustration exceptions.

## Screenshot Naming

Save screenshots in the project, usually under `mocks/verification/`:

```text
mocks/approved-design-board.png
mocks/verification/01-theme-desktop.png
mocks/verification/02-shell-desktop.png
mocks/verification/03-main-content-desktop.png
mocks/verification/04-interaction-desktop.png
mocks/verification/05-focused-region-a.png
mocks/verification/final-desktop.png
mocks/verification/final-mobile.png
```

Remove stale failed screenshots or keep them clearly separated from final evidence.

Focused region screenshots should use predictable names when practical:

```text
mocks/verification/06-nav-region.png
mocks/verification/07-header-region.png
mocks/verification/08-main-surface-region.png
mocks/verification/09-support-region.png
mocks/verification/10-mobile-above-fold.png
```

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
    path: "mocks/verification/final-desktop.png",
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
    path: "mocks/verification/final-mobile.png",
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
- Interaction fidelity: visible open or active controls in the mock are reproduced through real component state, not static markup.
- Mobile: same content priority, stacking, spacing, and navigation pattern.
- Scale calibration: sidebar width, header height, KPI card height, table row height, right-panel width, mobile density, and bottom-nav height match the mock.

Scrutinize these regions separately:

- Header/context area: title, subtitle, utility controls, chips, spacing, and alignment.
- Navigation chrome: rail/sidebar tint, active state treatment, icon sizing, row height, profile area, bottom nav.
- Main workflow surface: overall geometry, proportions, attached actions, inline metrics, separators, and emphasis.
- Supporting modules: weight, openness, padding, and whether they are too cardy or too heavy.
- Mobile viewport: what appears above the fold, density, stacking, and action prominence.
- Viewport ownership: whether the browser window feels like the real app or like a board/mock being displayed inside HTML.

Give strict scrutiny to all ordinary UI areas. Controls, chips, spacing, borders, navigation, content structure, and layout proportions should be extremely close everywhere on the screen. Allow relatively more tolerance only for truly bespoke illustration regions such as custom anatomy/body graphics, and even then preserve their compositional role.

If a mismatch is visible, fix it. Do not call it complete because the implementation is "close."

Do not let phrases like `close enough`, `broadly aligned`, `approved direction`, `ordinary review`, or `feels right overall` replace screenshot-backed mismatch review.

## Mismatch Ledger Discipline

`design/implementation-open-gaps.md` should behave like a real ledger, not a motivational note. Each unresolved item should include:

- region
- approved mock reference
- current screenshot reference
- visible mismatch
- severity
- next fix
- resolved status

The first real comparison pass should not declare the ledger empty. If you think the first pass has no ordinary mismatch, you must still run the adversarial pass before claiming that.

Add these implementation-specific failure checks:

- Does the app still look like a mock centered inside a browser page rather than the real product owning the viewport?
- Did the agent recreate the board frame, outer stage, or phone hardware instead of implementing the actual app regions?
- Is extra presentation padding making the page feel like an exhibit rather than an application shell?

## Scale Calibration Pass

After the first desktop and mobile screenshots, inspect scale before doing final polish:

- Sidebar: width, logo scale, nav item height, bottom profile position.
- Header: height, search width, filter/button sizes, horizontal rhythm.
- KPI row: card height, card gap, title/value size, icon badge scale, chart/progress scale.
- Main table: row height, header height, checkbox size, chip size, column density, pagination size.
- Detail panel: width, card spacing, section density, bottom action bar.
- Mobile: top bar height, tab height, KPI card density, quote row height, selected quote summary, bottom nav.

Make repeated deliberate corrections when the implementation is visibly looser, denser, wider, narrower, taller, or shorter than the mock. Keep iterating until that drift is gone or until a concrete implementation constraint is identified and recorded.

## Visual QA Rules

- Treat visual QA as separate from functional QA.
- Inspect the initial viewport before scrolling.
- Inspect the densest realistic state, not only the empty or default state.
- Use viewport screenshots for signoff. Use full-page screenshots only as secondary debugging artifacts.
- Use additional cropped or region-focused screenshots whenever a mismatch is easier to judge locally than at full viewport scale.
- Use additional cropped or region-focused screenshots for each major area when needed, because small mismatches are easy to miss in a full viewport.
- Look for clipping, overflow, weak contrast, blurry or tiny text, broken alignment, inconsistent spacing, awkward shadows, incorrect border strength, and layering bugs.
- Check fixed shells and internal scroll containers with screenshots and region bounds; document-level scroll metrics are not enough.
- If motion or transitions matter, inspect a settled state and at least one meaningful in-transition or post-transition state.
- Ask before signoff: what visible part of the UI has not been inspected closely?
- Ask before signoff: what visible defect would be obvious to the user if they compared this with the mock?
- Ask before signoff: if the user overlaid these two images, what would still reveal that this is not one-to-one?
- Ask before signoff: am I giving a pass because the page feels close overall even though one section is still clearly wrong?
- Ask before signoff: which exact screenshot proves that this region is finished?
- Ask before signoff: does this browser window feel like the real app, or like a mock being presented inside HTML?

## Functional QA

For mocked apps, functional QA still matters:

- Click main navigation items.
- Exercise tabs, filters, menus, dialogs, sheets, and mobile nav.
- Verify selected states and labels update.
- Exercise any visible open control state shown in the approved mock so the screenshot captures a real state transition.
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
- Focused region screenshots were captured and reviewed against the approved mock.
- A scale-calibration pass was completed after the first screenshots.
- At least one interaction state was captured or manually inspected when interactions exist.
- An adversarial final pass was completed and documented.
- Multiple screenshot-fix passes were completed until the UI was visually indistinguishable from the approved mock in ordinary comparison.
- The UI matches the approved mock so closely that visible differences are not obvious or accidental.
- Any deliberate deviation from the mock is named and justified.

If you cannot honestly say those things, do not sign off. Keep iterating.
