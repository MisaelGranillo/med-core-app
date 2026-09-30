# PROMPT — MedCore · Anatomy nomenclature audit: enforce International TA as the primary term

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-11.
> **Prompt language: English. MedCore content stays in Spanish** — every string
> you write into topics, quizzes, atlas and UI remains Spanish. Only this
> instruction document is in English.
> Goal: make MedCore consistently use **International Anatomical Terminology (TA)
> as the primary term**, with the professor's classic term in parentheses. Today
> several Week-1 topics still show the **classic** term as primary. Fix them.

---

## 0. The rule (unchanged, just not yet applied everywhere)

MedCore uses the **TA term as primary** in `title`, `question`, `options` and
`keyTerms`; the **classic** term goes **in parentheses** the first time it appears
in each section and in `explanation` where useful. Never mix both forms inside a
single option. Each topic keeps one `note` block explaining the coexistence.

The exam is graded with the professor's classic nomenclature, so in multiple-choice
items **the classic term still counts as correct** — this audit does **not** remove
classic terms, it demotes them from *primary* to *parenthetical*. A student must not
lose points for studying the correct name, nor be shown the classic name as the
headline term.

---

## 1. Before touching code

```bash
cd ~/med-core-app
npm run build            # must be clean first
# Where classic is currently primary (Week-1 topics are the main offenders):
grep -nE "title: '(Maxilar superior|Malar|Apófisis|Agujero|Dorsales)" src/data/anatomia-uad-topics.ts
grep -noE "(maxilar superior|malar|apófisis odontoides|agujero occipital|agujero redondo menor|apófisis|escotadura|dorsales|unguis|hueso propio de la nariz)" \
  src/data/anatomia-uad-topics.ts src/data/anatomia-uad-quizzes.ts src/data/atlas-topics.ts | sort | uniq -c | sort -rn
git log --oneline -6
```

Read the offending sections in full before editing — `huesos-craneo`,
`huesos-cara-hioides`, `columna-vertebral` in `anatomia-uad-topics.ts`, their quiz
blocks (`cra-q*`, `cah-q*`, `col-q*`) and their `atlas-topics.ts` entries.

---

## 2. Scope

**In scope (classic currently primary):**
- Topics `huesos-craneo`, `huesos-cara-hioides`, `columna-vertebral`, and any
  residue in `anatomia-generalidades`.
- Their quiz blocks in `anatomia-uad-quizzes.ts`.
- Their `atlas-topics.ts` entries and `AtlasQuestion`s.

**Already correct — verify, don't churn:** `torax-oseo`, `miembro-superior-oseo`
(Week-2) were authored TA-first. Fix only genuine violations if any.

**Out of scope:** Inglés Médico, PAI, `unisa-lmgc`, `lmgc-modules`, Bioestadística.

---

## 3. Equivalences — TA (primary) → classic (parenthetical)

Apply exactly these. TA is the headline; classic goes in parentheses on first use.

| TA (primary) | classic (in parentheses) |
|---|---|
| Maxilar | maxilar superior |
| Cigomático | malar |
| Foramen | agujero |
| Foramen magno | agujero occipital |
| Foramen espinoso | agujero redondo menor |
| Proceso | apófisis |
| Proceso odontoides / diente del axis | apófisis odontoides |
| Incisura | escotadura |
| Nasal | hueso propio de la nariz |
| Lagrimal | unguis |
| Vértebras torácicas (T1–T12) | dorsales (D1–D12) |
| Concha nasal | cornete |
| Trompa auditiva | trompa de Eustaquio |

Specific fixes already spotted (non-exhaustive — grep for the rest):
- `title: 'Maxilar superior'` → `title: 'Maxilar (maxilar superior)'`.
- `title: 'Malar (cigomático) …'` is **reversed** → `title: 'Cigomático (malar) …'`.
- Every bare `apófisis <X>` used as the primary label → `proceso <X> (apófisis
  <X>)` on first use, then `proceso <X>` thereafter in the same section.
- `apófisis odontoides` as primary → `diente del axis (apófisis odontoides)`.
- `agujero occipital` as primary → `foramen magno (agujero occipital)`.
- `dorsales` as primary for vertebrae → `torácicas (dorsales)`.

> Moore's own bone-markings glossary (book p. 11) already uses TA — "Foramen
> (agujero)", "Proceso espinoso", "Incisura" — so this alignment matches the
> textbook, not just a preference. You may cite that page in the topic `note`.

---

## 4. What to change, precisely

For each in-scope topic:

1. **`title` of every section and every block** that names a structure: TA first,
   classic in parentheses on first appearance in that section.
2. **`keyTerms`**: TA form as the entry; append classic in parentheses.
3. **Prose/`table`/`comparison`/`list` bodies**: primary mentions become TA;
   classic kept parenthetically on first use per section. Don't strip classic —
   demote it.
4. **One `note` per topic** (create if missing) stating: *"MedCore usa la
   Terminología Anatómica (TA) como término principal; el nombre clásico del
   profesor va entre paréntesis y también cuenta como correcto en los exámenes."*
5. **Do NOT renumber `sectionId`s** (breaks `useProgress`). You are editing string
   contents, not reordering sections. Keep every `id` intact.

For quizzes (`anatomia-uad-quizzes.ts`):

6. `question` and `options` use the **TA** term as the visible/primary form; add
   the classic in parentheses where it aids recognition.
7. `explanation` must state explicitly that the classic term (e.g. "agujero
   occipital") is also correct, so the student isn't confused by the swap.
8. Keep `id`s and `correctIndex` values unchanged unless an option's text genuinely
   needs it; do not reorder the bank.

For atlas (`atlas-topics.ts`):

9. Same demotion in `question`, `options`, `explanation`. Color-key legends that
   Code renders stay TA-first.

---

## 5. Verification

```bash
npm run build
# No classic term should remain as a section/block title primary:
grep -nE "title: '(Maxilar superior|Malar \(|Apófisis |Agujero occipital|Dorsales)" \
  src/data/anatomia-uad-topics.ts        # expected: no matches
# Spot the demotions landed (TA now primary, classic in parens):
grep -nE "Maxilar \(maxilar superior\)|Cigomático \(malar\)|Foramen magno \(agujero occipital\)|torácicas \(dorsales\)" \
  src/data/anatomia-uad-topics.ts
```

Manual (`npm run dev`):

- [ ] `/topic/huesos-craneo`, `/topic/huesos-cara-hioides`, `/topic/columna-vertebral`:
      every section/structure shows the TA term first, classic in parentheses; the
      coexistence `note` is present.
- [ ] Reading progress is preserved (section ids unchanged) — the topics don't
      reset to 0 % read.
- [ ] Quizzes still playable; `explanation`s state the classic term is also valid.
- [ ] Tables/labels legible in **light and dark** mode (`tailwind.config.js`
      overrides `zinc`).

**Mandatory self-audit:** run the first grep in §5 and paste its output in your
report; it must return no classic-primary titles. Pick 3 edited items and confirm
TA-primary + classic-in-parens + "classic also correct" in the explanation.

---

## 6. Non-objectives

- Do not delete classic terms — demote them to parentheses; they remain valid exam
  answers.
- Do not renumber `sectionId`s or reorder quiz banks.
- Do not touch Week-2 osteology unless it genuinely violates the rule.
- Do not touch Inglés, PAI, `unisa-lmgc`, `lmgc-modules`.
- Do not run `npm run deploy`.

---

## 7. Delivery (atomic commits)

1. `fix(anatomia): TA como término principal en huesos del cráneo`
2. `fix(anatomia): TA como término principal en huesos de la cara`
3. `fix(anatomia): TA como término principal en columna vertebral`
4. `fix(quizzes,atlas): nomenclatura TA principal; clásico válido en explicaciones`

Report only what you found while editing: how many classic-primary occurrences you
demoted per topic, any structure whose TA name you had to look up in Moore, and the
self-audit grep output.
