# PROMPT — MedCore · Medical English I · Week 2 · Class 3 (abbreviations, healthcare settings, review)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-12.
> **Prompt language: English. MedCore chrome/explanations stay in Spanish; the
> study object (English terms/abbreviations/sentences) stays in English.**
> Class 3 is largely a **Unit-II review/closing class** (define combining forms/
> prefixes/suffixes, build terms, crossword, matching game) plus two genuinely new
> content blocks: **Abbreviations** and **Healthcare settings**.

---

## 1. Situation

Week-2 topics already loaded: `ingles-word-parts` and `ingles-plurals` (impartido).
Class 3 adds:

1. **Abbreviations** — MedCore already has `ingles-abbreviations` **in the advance
   module** (`ingles-medico-adelanto`). Class 3 taught it → **promote it**.
2. **Healthcare settings** — types of facilities where medical terminology is used.
   **New content**, no topic exists → create `ingles-healthcare-settings`.
3. **Review practice** (crossword, matching game, build-a-term) → a small
   consolidation quiz; no new topic needed for the review itself.

Promotion, not rewrite: reconcile `ingles-abbreviations` with the class list; don't
redo it from scratch.

---

## 2. Before touching code

```bash
cd ~/med-core-app
sed -n '/id: .ingles-abbreviations./,/^  \},/p' src/data/ingles-uad-topics.ts   # read current content + Adelanto note
sed -n '29,66p' src/data/modules.ts                    # 'ingles-medico-uad-s2' and 'ingles-medico-adelanto'
sed -n '244,300p' src/data/plans/uad-medicina.ts       # Week-2 ingles block + materiales
grep -n "abbrev\|Adelanto" src/data/ingles-adelanto-quizzes.ts
git log --oneline -6
```

Clean `npm run build` first. Collisions: `grep -rn "healthcare-settings\|'hcs-" src/`

---

## 3. Verified class content (write chrome in Spanish, keep English terms)

### 3.1 Abbreviations (reconcile `ingles-abbreviations`)
Commonly used to save time; wrong ones cause errors; when in doubt, spell the word
out; each facility keeps an approved list. Sample from the deck (verify the topic
covers these; complete what's missing, don't duplicate):
- **ā** = before · **AAROM** = active assistive range of motion · **AB** =
  abortion · **AIDS** = acquired immunodeficiency syndrome · **BC** = bone
  conduction · **BDT** = bone density testing · **bpm** = beats per minute ·
  **bx / BX** = biopsy · **Ca** = calcium, cancer · **SM** = simple mastectomy ·
  **sm** = small.
> Teaching point for a `note`: the same letters can mean different things by case
> (**Ca** vs **ca**, **SM** vs **sm**) — abbreviations are context- and
> case-sensitive; ambiguity is a patient-safety issue.

### 3.2 Healthcare settings (new topic `ingles-healthcare-settings`)
Types of settings where medical terminology is used:
- **Acute Care / General Hospital** — diagnose and treat for short periods; usually
  also emergency and obstetric care.
- **Specialty Care Hospitals** — very specific disease types (e.g. psychiatric).
- **Nursing Homes / Long-Term Care Facilities** — long-term care for those needing
  extra recovery time or who can no longer care for themselves.
- **Ambulatory Care / Surgical / Outpatient Centers** — no overnight stay; simple
  surgeries to diagnostic testing or therapy.
- **Physician's Offices** — diagnosis and treatment in a private office.
- **Health Maintenance Organization (HMO)** — wide range of prepaid services via a
  group of primary-care physicians and specialists.
- **Home Health Care** — nursing, therapy, personal or housekeeping care in the
  patient's own home.
- **Rehabilitation Centers** — intensive physical and occupational therapy
  (inpatient and outpatient).
- **Hospices** — supportive treatment for terminally ill patients and families.

### 3.3 Confusions to target (review + abbreviations)
1. Case sensitivity: **Ca** (calcium/cancer) vs **ca**; **SM** vs **sm**.
2. Facility type by scenario (outpatient/ambulatory vs long-term vs hospice vs HMO).
3. Building terms end-to-end (cardi/o + -megaly; gastr/o + -ostomy; rhin/o +
   -plasty; hyper- + -trophy) — reuse from `ingles-word-parts`.
4. Matching definitions to terms (cystoscopy, nephromegaly, hyperkalemia,
   glycosuria, vasectomy, nephrolith, cystalgia) — surgical/procedural/suffix recall.

---

## 4. Deliverables

### 4.1 Promote `ingles-abbreviations`
- Rewrite the content of its "Adelanto" section **keeping its `id`**: replace the
  "Adelanto — aún no impartido" note with `{ type: 'note' }` = *"Impartido en la
  Semana 2, Clase 3."*. Don't renumber sections.
- Reconcile the abbreviation table with §3.1; add the case-sensitivity `note`.
- **Move it** from `ingles-medico-adelanto` to `ingles-medico-uad-s2` in
  `modules.ts` (remove from the advance module's `topicIds`).

### 4.2 New topic `ingles-healthcare-settings`
- `id: 'ingles-healthcare-settings'`, reuse an existing Inglés `colorKey`,
  `title: 'Healthcare settings'`,
  `subtitle: 'Tipos de centros donde se usa la terminología médica'`.
- 3–4 sections from §3.2: a `table` (setting → definición en español), a
  `comparison` (ambulatorio/outpatient vs hospitalización/long-term), a `note`
  distinguishing HMO / home health / rehab / hospice. English names as the term,
  Spanish gloss in the definition column.
- `keyTerms`: Acute care hospital, Outpatient/Ambulatory center, Long-term care,
  HMO, Hospice, Rehabilitation center.
- Add it to the `ingles-medico-uad-s2` module `topicIds`.

### 4.3 Subject sheet (`plans/uad-medicina.ts`, Week-2 ingles)
- `topicIds: ['ingles-word-parts', 'ingles-plurals', 'ingles-abbreviations',
  'ingles-healthcare-settings']`.
- `estado: 'impartido'`. Update `temas`: Class 3 (taught) = abbreviations,
  healthcare settings and Unit-II review.
- Add to `content.materiales`:
  ```ts
  { title: 'Semana 2 · Clase 3 — Abreviaturas, healthcare settings y repaso',
    file: 'Semana 2 - Clase 3 Abreviaturas y Healthcare Settings.pdf', kind: 'Clase' },
  ```

### 4.4 Question bank
- Promote any abbreviation items from `ingles-adelanto-quizzes.ts` to the taught
  bank (`topicId: 'ingles-abbreviations'`); remove from the advance bank.
- Add ~8 new items: ~4 `ingles-abbreviations` (case sensitivity, expansions), ~4
  `ingles-healthcare-settings` (scenario → facility type). Optionally 3 review items
  (`ingles-word-parts`) from the matching game. Rubric: plausible distractors
  (another facility type; a same-length abbreviation), `explanation` justifies the
  key and rules out one distractor, `correctIndex` spread 0–3.

### 4.5 Library
```bash
cd "~/Desktop/UAD/Primer Semestre/Inglés Médico I DEF/Semana 2/Clase 3"
python3 -c "
from PIL import Image; import glob
ims=[Image.open(f).convert('RGB') for f in sorted(glob.glob('*.png'))]
ims[0].save('Semana 2 - Clase 3 Abreviaturas y Healthcare Settings.pdf', save_all=True, append_images=ims[1:], resolution=150)
print(len(ims),'páginas')"
```
Upload to `library.medcore.icu/ingles-medico-1/` with the §4.3 name.
**Show me the upload command before running it.** Don't commit PNG/PDF.

---

## 5. Verification

```bash
npm run build
grep -c "Adelanto — aún no impartido" src/data/ingles-uad-topics.ts   # one fewer than before
grep -n "ingles-abbreviations\|ingles-healthcare-settings" src/data/modules.ts   # both under s2, not adelanto
grep -o "id: '[a-z0-9-]*'" src/data/ingles-uad-quizzes.ts | sort | uniq -d       # empty
grep -n "ingles-healthcare-settings" src/data/topics.ts
```

Manual (`npm run dev`):
- [ ] `/estudio`: `ingles-abbreviations` and `ingles-healthcare-settings` under the
      Week-2 module; the remaining advance topics intact.
- [ ] `/topic/ingles-abbreviations`: opens as taught, keeps prior reading progress
      (section ids unchanged); case-sensitivity note present.
- [ ] `/topic/ingles-healthcare-settings`: renders; tables legible light+dark.
- [ ] `/plan/ingles-medico-1`: Week 2 lists four topics + the new material.
- [ ] New quizzes playable; advance abbreviation items no longer show as advance.

**Mandatory self-audit:** verify 2 abbreviation items (Ca vs ca; bx = biopsy) and 2
healthcare-settings items (hospice vs long-term care) against §3, and report.

---

## 6. Non-objectives
- Don't rewrite `ingles-abbreviations` from scratch — reconcile.
- Don't renumber `sectionId`s; new topic aside, only edit text in existing ones.
- Don't promote the other advance topics (verb-tenses, sentence-structure,
  false-friends, scientific-literature): Class 3 didn't cover them.
- Professor errors → errata note + distractors, never the correct answer.
- Don't touch Anatomy, PAI, Week-1. No `npm run deploy`.

---

## 7. Delivery (atomic commits)
1. `feat(ingles): promueve abreviaturas de adelanto a impartido (Semana 2 Clase 3)`
2. `feat(ingles): Topic healthcare settings`
3. `feat(quizzes): banco de abreviaturas y healthcare settings`
4. `feat(plan): Semana 2 de Inglés suma abreviaturas y healthcare settings`

Report which abbreviation entries already existed vs added, how many advance items
were promoted, and the self-audit result.
