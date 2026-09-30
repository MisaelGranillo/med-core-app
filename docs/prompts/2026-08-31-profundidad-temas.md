# PROMPT — MedCore: deepen every tema (fuller study guides, not bullet lists)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-31.
> **Prompt language: English. MedCore content stays in Spanish.**
> Problem: because recent topics were scaffolded as "pull detail from the transcript",
> many temas ended up **thin** (bare bullet lists). Raise the depth so each tema reads
> like a real study guide, using the transcripts (`.md`) and textbooks already in the
> materials. Preserve `sectionId`s (progress). Do it **subject by subject**.

---

## 0. The depth bar (what "deep enough" means)

A section must let the student **learn from it without the slides**. For each section:
1. **Explanatory prose, not just lists.** Every `list`/`table` keeps a 2–5 sentence
   `paragraph` around it that explains the *what, why and how* — mechanism, function,
   relationships — in Spanish.
2. **Complete definitions.** Each `keyTerm`/structure gets a real definition, not a
   label. (e.g. not "Membrana plasmática: 8–10 nm" but what it is, its bilayer, its
   function, why the thickness matters.)
3. **Mechanism / process** where relevant (how a tense/reaction/pathway/step works),
   not only the name.
4. **A worked example or clinical tie‑in** per section (reuse `correlacion` blocks; keep
   ≥1 clinical/high‑yield per topic).
5. **Keep it accurate** — source from the class `.md` transcript first, then the
   textbook (`moore.md`, the Histología deck, Medical Terminology, etc.). Don't invent.
6. **Don't pad.** Add signal (explanations, mechanisms, correlations), not filler.

Reference the class transcripts in the materials folders (each week/class has a
`# … .md` with `## Summary` + `## Transcript`) and the textbooks for verification.

---

## 1. Scope — re‑enrich existing topics, per subject, in batches

Go file by file; enrich **thin** sections up to the §0 bar. Don't renumber `sectionId`s;
add `paragraph`/`definition`/`correlacion` blocks and expand existing prose. Skip
sections that already meet the bar.

Order (each is a commit; run `npm run build` after each file):
1. `src/data/anatomia-uad-topics.ts` — osteología, artrología, miología (verify against
   `moore.md`).
2. `src/data/histologia-topics.ts` — verify against the Histología deck/transcripts;
   keep the ★ exam flags intact.
3. `src/data/genetica-topics.ts` — verify against the Genética transcripts.
4. `src/data/ingles-uad-topics.ts` — the grammar/terminology topics (explain the rule +
   examples, not just tables).
5. `src/data/bioestadistica-topics.ts` and `src/data/topics.ts` (base) — if thin.

For each topic keep: TA‑primary terminology (anatomy), `categoria`, ≥1 `correlacion`,
6–8 `keyPoints`. Aim for **6–9 substantive sections** per topic.

**Before/after example (do this kind of upgrade):**
- Before: `list: ['Cápsula articular', 'Membrana sinovial', 'Líquido sinovial']`
- After: same list **plus** a `paragraph`: *"La articulación sinovial está envuelta por
  una cápsula fibrosa cuya capa interna, la membrana sinovial, secreta el líquido
  sinovial: un ultrafiltrado del plasma rico en ácido hialurónico que lubrica y nutre
  al cartílago avascular. Por eso una inflamación sinovial (sinovitis) produce derrame y
  dolor…"* + a `correlacion` clínica.

---

## 2. Verification
```bash
npm run build
# spot the ratio of prose to lists rose (rough proxy):
grep -c "type: 'paragraph'" src/data/anatomia-uad-topics.ts src/data/histologia-topics.ts src/data/genetica-topics.ts src/data/ingles-uad-topics.ts
```
Manual (`npm run dev`): open 2 topics per subject — each section explains the concept in
prose (not only bullets); definitions are complete; ≥1 correlation; reading progress
preserved (no `sectionId` reset); ★ flags intact in Histología.

**Self‑audit:** pick 5 sections you deepened across subjects and confirm each is now
learnable without the slides and factually matches the transcript/textbook. Report which
topics you judged already deep enough and skipped.

---

## 3. Non‑objectives
- Don't renumber `sectionId`s (breaks progress). Don't change quizzes/atlas/plan.
- Don't invent facts to reach length — depth means explanation, not padding.
- No `npm run deploy`.

## 4. Delivery — one commit per file (§1). Report per‑file: sections deepened, topics
skipped as already sufficient, and the self‑audit result.

> Note: the topic‑authoring standard has been updated (skill `medcore-semana`) so all
> **new** temas are written at this depth from now on; this prompt brings the existing
> ones up to par.
