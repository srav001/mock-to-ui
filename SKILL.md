---
name: mock-to-ui
description: "Generate premium GPT Image design boards first, then translate approved mocks into polished React shadcn/ui frontends with visual verification. Use when the user wants an app, dashboard, workspace, prototype, or UI explored through image-led mock generation before implementation."
---

# Mock-To-Ui

## Core Idea

Re-read this `SKILL.md` after every compaction before continuing work. Do not assume prior conversational memory is sufficient. Re-load the stage-appropriate references as well: for mock generation re-read `references/gpt-image-2-generation.md`, `references/visual-style-references.md`, and `references/mock-comparison-checklist.md`; for implementation re-read `references/mock-to-code-translation.md` and `references/shadcn-setup-and-theming.md`; for visual QA re-read `references/playwright.md`.

Use GPT Image as the visual design source of truth before writing the frontend. First create or revise a light-mode design board with `gpt-image-2`; only after the light board is approved or the user explicitly waives approval should the agent generate the matching dark-mode board and then translate the approved design into a React shadcn/ui implementation.

This skill is strict because its goal is not a generic approximation. The delivered UI should match the approved mock as closely as practical: layout, color roles, density, border radius, typography feel, component hierarchy, responsive behavior, and visual polish should all be intentionally reproduced. Do not stop halfway, do not leave a generic starter UI, and do not claim completion until the written gates below have actually been cleared.

Do not over-trust the image model. `gpt-image-2` and similar image models are not expected to internalize complex design governance as reliably as a full reasoning agent. The calling agent is responsible for translating this skill into a focused prompt that foregrounds the critical rules, and then for validating the output harshly instead of assuming the model followed instructions just because they were present somewhere in the prompt.

This file is the execution protocol. The detailed design rules live in the references. Follow this file for process, gates, artifacts, and stop conditions. Follow the references for the actual design quality bar.

## Critical Implementation Invariant

This is the lifeline of the skill and it overrides any temptation to be "good enough":

- The built app must be a real interactive app, not a static visual facsimile.
- The built app must be a near one-to-one reproduction of the approved mock to the finest practical detail.
- If the implementation is visibly off, the implementation has failed and the agent must keep iterating.
- If stock shadcn or Tailwind styling is not enough, the agent must use custom CSS, custom classes, and component overrides until the mock is matched.
- If a visible control exists in the mock, it must be implemented as a real control with matching state, not as frozen markup.
- The agent must keep doubting the match and re-checking it with Playwright until the user should not be able to tell the difference between the mock and the app in normal comparison.
- The agent must review the implementation part by part, section by section, and area by area. Do not judge the page only as a whole.
- Ordinary UI structure must be exact across the whole screen. Buttons, chips, tabs, spacing, border treatment, layout geometry, navigation, content structure, and support regions are not allowed to drift just because the overall page mood feels close.
- Hard bespoke illustration zones may be the only tolerated approximation. If a mock includes a body silhouette, custom human figure, decorative anatomy drawing, or similarly bespoke generated art, preserve the composition and role of that area, but prioritize exactness everywhere else around it.

Treat these as hard constraints, not suggestions. Provider, model family, or time pressure do not relax them.

## Operating Modes

Every run of this skill is in one of two modes. Decide which mode applies before generating anything.

### Validation Mode

Use this when the user is testing or improving the skill itself.

- Use fresh prompt files for each run.
- Use `mock-tests/` in this skill repo as the scratch area.
- Judge repeatability across fresh prompts, not only whether one lucky output looked good.
- If a repeated failure persists across fresh prompts, update the reusable skill docs before generating again.
- Do not scaffold or build an app unless the user explicitly switches to implementation work.

### Delivery Mode

Use this when the user wants a real project mock and then a real implementation.

- Start from a fresh first prompt.
- If the first board is close but fails on named issues, do not self-approve it and do not discard it too early. Run iterative corrections on that same mock.
- Tie every revision request back to failed checklist items or concrete structural faults.
- Do not move a mock into `design/` until the written approval gate is satisfied.
- Do not sign off implementation until the written open-gaps gate is satisfied.

## Required Artifacts

These files are mandatory enforcement artifacts in delivery mode. They are how the agent proves that the gates were actually checked.

- `mocks/`: active candidate mocks and iteration outputs.
- `design/`: approved design source-of-truth artifacts.
- `design/mock-review.md`: required before a light mock can be approved or promoted. Must record the checklist score, failed items, pass/fail call, and why the board passed or failed.
- `design/mock-revision-notes.md`: required whenever a board fails but is close enough to revise in place. Must record `preserve`, `fix`, `failed checklist items`, and `do not change`.
- `design/spec.json`: structured design spec extracted from the approved board's dock.
- `design/history.md`: concise record of why approved design changes were made.
- `design/implementation-reading.md`: brief section-by-section reading of the approved mock before coding.
- `design/implementation-review.md`: running section-by-section comparison of app vs approved mock.
- `design/implementation-open-gaps.md`: every remaining mismatch. This file must be empty or contain only explicitly tolerated hard-illustration exceptions before signoff.

Use the templates in `assets/templates/` when they help, but the artifact itself matters more than the exact wording.

## Multi-Phase Protocol

### Phase 0: Start-Up And Scope

1. Re-read this file after compaction and load only the stage-appropriate references.
2. Determine the mode: validation or delivery.
3. Check whether `design/` already exists.
   - If it exists, read `design/spec.json` and `design/history.md` before generating or implementing anything.
4. Decide whether this run is mock-only or full delivery.
   - Mock-only: stay in the skill repo scratch workflow.
   - Full delivery: work inside the target project folder.
5. If full delivery requires a new app:
   - confirm the target path
   - create the child folder first if needed
   - scaffold the real Vite/shadcn app directly there with `npx shadcn@latest init --preset b0 --template vite --pointer`
   - answer the CLI project-name prompt with the intended project name
   - if `--name` or other non-interactive naming flags are unsupported or ignored, continue through the interactive CLI instead of failing
   - do not scaffold into a temp folder and copy later
   - install `lucide-react`, `openai`, and `playwright`
   - only after the app exists, create `mocks/`, set up `.env` / `.env.example`, and copy `assets/scripts/generate-design-mock.mjs`

### Phase 1: First Light Board

1. Read `references/briefing.md`.
2. Gather only the brief details needed to make a strong first board.
3. Read `references/gpt-image-2-generation.md`, `references/visual-style-references.md`, and `references/mock-comparison-checklist.md`.
4. Compose the prompt from the user brief plus the written rules in this skill and its references, not from conversational memory.
5. Put the highest-risk failures near the top of the prompt in direct language.
6. Generate the first board in light mode.
7. Save prompts and outputs under:
   - `mock-tests/` in validation mode
   - `mocks/` in delivery mode
8. The board must contain:
   - the desktop app view
   - the mobile companion view
   - the full-width bottom design-system dock
9. Allow enough time for generation to complete.
   - High-quality image generation may take a couple of minutes and can take up to around 10 minutes.
   - Wait and poll rather than assuming the run stopped just because there is no immediate output.

### Phase 2: Mock Acceptance Loop

This phase repeats until the light board passes.

1. Load the eight reference images into context before judging the mock.
2. Score the board directly against `references/mock-comparison-checklist.md`.
3. Write or update `design/mock-review.md` with:
   - date and iteration
   - mock path
   - critical item result
   - total score
   - failed item numbers
   - short pass/fail rationale
4. Apply the hard gate from `references/mock-comparison-checklist.md`:
   - every critical item must pass
   - at least `44/50` items must pass
5. If the board fails:
   - do not show it as approved
   - do not move it to `design/`
   - do not call it "good enough"
6. If the board fails in validation mode:
   - write a fresh prompt from the current skill docs
   - regenerate from that fresh prompt
   - if the same category keeps failing, strengthen the reusable skill docs before generating again
7. If the board fails in delivery mode but is structurally close:
   - write `design/mock-revision-notes.md`
   - preserve what is working
   - name the failed checklist items or exact structural faults
   - run an iterative correction pass against that same mock
   - re-score the revised board with the same checklist
8. If the board fails in delivery mode and the structure is wrong at a foundational level:
   - discard it
   - write a new first-pass prompt from the skill docs
   - generate again
9. Stay in this loop until the written review artifact shows a real pass.

The agent is not allowed to approve a mock from overall vibe, broad similarity, or optimism. Approval is a file-backed decision, not an internal feeling.

### Phase 3: Promote Approved Design

1. Create `design/` if needed.
2. Move the approved light board from `mocks/` into `design/`.
3. Generate the dark companion board from the approved light board unless the user explicitly does not want dark mode.
4. Store the accepted dark board in `design/` as well.
5. Immediately create or update:
   - `design/spec.json`
   - `design/history.md`
6. `design/spec.json` must use top-level keys:
   - `common`
   - `light`
   - `dark`
7. `design/history.md` should record why the approved direction was chosen and what future revisions must keep in mind.

### Phase 4: Implementation Preparation

1. Read:
   - `design/spec.json`
   - `design/history.md`
   - `references/mock-to-code-translation.md`
   - `references/shadcn-setup-and-theming.md`
   - `references/implementation-checkpoints.md`
2. Write `design/implementation-reading.md` before coding.
3. Break the approved board into regions:
   - navigation chrome
   - header/context
   - dominant workflow surface
   - support modules
   - mobile view
   - visible interaction states
4. Remember that implementation is now a reproduction task, not a design-exploration task.

### Phase 5: Implementation Reproduction Loop

This phase repeats until ordinary visible drift is gone.

1. Build the UI as a real interactive app.
   - visible controls must be real components with real state
   - static facsimiles fail
   - the app must own the viewport as the real product UI; do not recreate the board as a centered exhibit inside the browser
2. Reproduce the approved board section by section.
   - implement the approved desktop app region as the real desktop app
   - implement the approved mobile app region as the responsive/mobile state
   - do not implement the board's presentation frame, device frame, poster padding, or gallery-style outer canvas as literal product UI unless the product itself genuinely requires that structure
3. Use custom CSS whenever Tailwind or stock shadcn styling is not enough.
4. After each meaningful implementation pass, update:
   - `design/implementation-review.md`
   - `design/implementation-open-gaps.md`
5. `design/implementation-open-gaps.md` must be a structured mismatch ledger, not a vague note.
   - For each gap, record the region, approved mock reference, current screenshot reference, visible mismatch, severity, next fix, and resolved status.
6. The first real comparison pass is not allowed to declare the open-gaps file empty.
   - On the first pass, record the visible differences you can see.
   - If you believe nothing ordinary is wrong, run the adversarial pass from Phase 6 first and document why it still found no blocking differences.
7. `design/implementation-review.md` must cite screenshot evidence region by region rather than giving a high-level mood summary.
8. If the open-gaps file contains ordinary UI drift, the phase is still open.
9. Only truly hard bespoke illustration regions may remain as softer-tolerance exceptions, and those exceptions must be stated explicitly.
10. If the implementation still reads like a mock or board placed inside HTML rather than a full app owning the viewport, the phase is still open.

### Phase 6: Playwright Verification Loop

This phase is the main enforcement loop for implementation. Expect many passes.

1. Read `references/playwright.md`.
2. Start the app and capture repeated screenshots.
3. Take as many screenshots as needed, including:
   - desktop viewport
   - mobile viewport
   - meaningful interaction states
   - focused region crops for:
     - navigation chrome
     - header/context
     - dominant workflow surface
     - support modules
     - mobile above-the-fold
   - any additional local problem areas
4. Compare the screenshots against the approved mock part by part, section by section, and area by area.
5. After every comparison pass:
   - write the remaining mismatches into `design/implementation-open-gaps.md`
   - update `design/implementation-review.md` with screenshot-backed region notes
   - fix them
   - re-run the Playwright capture
6. Keep looping until the open-gaps file is empty or contains only explicitly tolerated hard-illustration exceptions.
7. Run one adversarial pass after you think the UI is done.
   - Assume the implementation is still wrong.
   - Try to find at least five visible differences.
   - Either record and fix them, or explain specifically why each suspected difference is not a real blocking mismatch.
8. Do not stop because the page feels broadly right. Stop only when the documented gaps are gone.
9. Tens or dozens of screenshot passes are acceptable. This skill should keep the agent in the loop until the UI is effectively indistinguishable from the mock.

### Phase 7: Final Signoff

Signoff is blocked unless all of the following are true:

- the light mock passed the written checklist gate in `design/mock-review.md`
- the approved artifacts are in `design/`
- `design/spec.json` and `design/history.md` are current
- `design/implementation-reading.md` exists
- `design/implementation-review.md` exists
- `design/implementation-open-gaps.md` is empty or contains only explicitly allowed hard-illustration exceptions
- the app is interactive rather than static
- desktop and mobile Playwright screenshots exist
- focused region screenshots exist for navigation chrome, header/context, dominant workflow surface, support modules, and mobile above-the-fold
- at least one adversarial final pass was completed and documented in `design/implementation-review.md`
- code checks have been run when code changed

If any ordinary visible mismatch remains, signoff is not allowed.

## Reference Map

- `references/briefing.md`: use before generating the first mock.
- `references/gpt-image-2-generation.md`: use when generating or revising mocks with GPT Image.
- `references/correction-flow.md`: use when deciding whether to edit code directly or revise the mock first.
- `references/shadcn-setup-and-theming.md`: use while scaffolding and setting theme tokens.
- `references/mock-to-code-translation.md`: use before and during implementation.
- `references/visual-style-references.md`: use by default unless the user specifies a clear competing style; also use when the user wants the UI to feel premium, modern, minimal, or less bootstrappy.
- `references/implementation-checkpoints.md`: use to pace the build and avoid stopping halfway.
- `references/mock-comparison-checklist.md`: use on every generated mock against the eight reference images before accepting it.
- `references/playwright.md`: use for screenshot-driven visual comparison and responsive QA.
- `assets/templates/mock-review.md`: optional template for the required mock approval artifact.
- `assets/templates/mock-revision-notes.md`: optional template for in-place mock correction.
- `assets/templates/implementation-reading.md`: optional template for the pre-code mock reading.
- `assets/templates/implementation-review.md`: optional template for section-by-section implementation review.
- `assets/templates/implementation-open-gaps.md`: optional template for the signoff-blocking open-gaps file.

## Non-Negotiables

- The implementation invariant above is the core enforcement rule of this skill.
- The references hold the detailed design bar. Use them directly instead of relying on memory.
- The first generated mock is light mode by default.
- The bottom design-system dock is mandatory on design boards.
- Do not approve a mock unless the pass rule in `references/mock-comparison-checklist.md` is satisfied and recorded in `design/mock-review.md`.
- Do not stop at a mock that merely feels close. Use the correction loop.
- Do not ship a static facsimile of the mock. Visible controls must behave like real UI components.
- Do not sign off implementation while `design/implementation-open-gaps.md` still contains ordinary UI drift.
- Do not implement the design board frame as product UI. The real app should own the viewport; do not center a floating mock canvas inside the browser unless the approved product actually calls for that.
- Do not let Tailwind or shadcn defaults become excuses for mismatch. Use custom CSS and component overrides.
- Do not stop when the page is only broadly aligned. Stop when the documented gaps are gone.
- Do not use vague success language such as `close enough`, `broadly aligned`, `approved direction`, or `ordinary review` as a substitute for screenshot-backed proof.
