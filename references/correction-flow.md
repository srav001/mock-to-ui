# Correction Flow

Use this reference whenever the user requests changes after a mock or after implementation begins.

## Decision Rule

Small UI correction: edit code directly.

Large design correction: revise the image mock first, get approval, then update code.

This distinction matters because the mock is the source of truth. If the requested change alters the visual direction, layout system, information architecture, or responsive behavior, updating code directly creates drift between the approved mock and the implementation.

## Edit Code Directly

Edit the UI directly when the request is localized and does not change the design board concept:

- Change a label, metric, row value, icon, or button text.
- Adjust spacing on one component.
- Fix overflow, clipping, alignment, contrast, or responsive breakage.
- Make a sidebar a little wider or narrower.
- Tune a color that is already part of the approved palette.
- Add a simple hover, selected, disabled, loading, or empty state consistent with the mock.
- Replace placeholder data with better mock data.

After the change, run the relevant Playwright screenshot and compare against the approved mock.

## Revise The Mock First

Generate a revised mock when the request changes the visual source of truth:

- Different visual style, mood, brand direction, or color system.
- Different layout structure, navigation model, density, or screen composition.
- New major panel, screen, dashboard area, mobile behavior, or product workflow.
- Replacing table-heavy UI with cards, kanban, timeline, canvas, map, or another primary surface.
- New design system details such as radius philosophy, typography scale, chart style, icon system, or surface treatment.
- Any correction where multiple components must be reinterpreted together.

Revision flow:

1. Use the current approved or latest mock as an input image.
2. Generate a revised design board with the requested changes and an explicit preserve list.
3. Ask the user to approve the revised mock.
4. Update the implementation only after approval.
5. Re-run Playwright desktop and mobile comparison.

## User Language

For direct UI edits:

```text
That is a localized UI correction, so I will update the React implementation directly and recheck the screenshot against the approved mock.
```

For mock-first changes:

```text
That changes the visual direction enough that the mock should be revised first. I will generate an updated design board, get your approval, then bring the React implementation in line with it.
```
