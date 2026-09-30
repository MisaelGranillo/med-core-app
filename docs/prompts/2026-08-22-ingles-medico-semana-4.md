# PROMPT — MedCore · Medical English I · Week 4 — acronyms, false friends & clinical communication

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-22.
> **Prompt language: English. MedCore chrome/explanations in Spanish; the study
> object (English) in English.**
> Week 4 covers Units IV–V (acrónimos, errores frecuentes/falsos cognados) plus
> clinical communication (phrasal verbs, "have something done", pain questions,
> symptom vocabulary). **Unit VI (bibliografía científica) was NOT taught → keep
> `ingles-scientific-literature` in adelanto.**

---

## 0. Sources of truth (transcripts)

- `…/Inglés Médico I DEF/Semana 4/Clase 1/# Week 4 Class 1.md` — abbreviations/acronyms
  + common errors (collocations).
- `…/Semana 4/Clase 2/# Week 4 Class 2.md` — passive review, phrasal verbs, "have
  something done", pain questions.
- `…/Semana 4/Clase 3/# Week 4 Class 3.md` — pain questions, cold/flu symptom
  vocabulary, regular medical verbs list.
Read each `## Summary` (use) + skim `## Transcript`.

```bash
cd ~/med-core-app
npm run build
sed -n '/id: .ingles-abbreviations./,/^  \},/p' src/data/ingles-uad-topics.ts | head -8
sed -n '/id: .ingles-false-friends./,/^  \},/p' src/data/ingles-uad-topics.ts | head -20
grep -n "ingles-medico-adelanto\|ingles-medico-uad-s3" src/data/modules.ts
grep -n "number: 4" src/data/plans/uad-medicina.ts   # ingles Week-4 block
```
Collisions: `grep -rn "ingles-clinical-communication\|ingles-symptoms\|'icc-\|'isy-" src/`

---

## 1. Deliverables

### 1.1 Enrich `ingles-abbreviations` (already impartido)
Add from Clase 1: origin (Latin manuscripts; 20th‑c acronyms LASER/SONAR), advantages
in the medical record, **risks** (ISMP >7,000 medication‑error deaths/yr; the UK
pediatric audit 56%/31%), the rule to **spell out ambiguous acronyms** (AED, ED, CA),
and that each center follows an approved list (**COFEPRIS** in México, **HIPAA** in the
US). A `correlacion` (clinica): abbreviation ambiguity is a patient‑safety issue.

### 1.2 Promote `ingles-false-friends` (adelanto → impartido)
Rewrite its "Adelanto" section keeping its `id`; reconcile with Clase 1's **common
errors / collocations**:
- Verb collocations: **operate on** patients, **attend to** patients, **make** a
  diagnosis (not "do"); **suffer from**, **complain of** (internal) vs **complain
  about** (external).
- Article with profession: "I'm **a** pediatrician"; medication with **on**: "I'm **on**
  antibiotics".
- Age structure: "**a 23‑year‑old** female patient" (year, no -s, hyphenated).
- Symptoms with **have**: "She **has** a fever".
- False cognates / confusables: **sore** (leve, irritado) vs **pain**; **sore ≠ sour**.
Move it from `ingles-medico-adelanto` into a Week‑4 module (§1.5). Keep the false‑
cognate distractor rule (professor errors never as correct answers).

### 1.3 New topic `ingles-clinical-communication` — *"Comunicación clínica"*
- **Phrasal verbs médicos**: bring up, cough up, throw up, pull through, break out in,
  wear out, puff up, flare up (+ wear out vs burnout).
- **"Have something done"**: have + object + past participle (+ by doer) — have your
  eyes tested, have a biopsy taken, have a colonoscopy performed; also injuries (had
  his nose broken).
- **Pain questions**: onset/triggers (When did the pain start? Does anything trigger
  it?), description/intensity (Can you describe the pain? Rate it 1–10), frequency,
  duration; treat the patient as an individual (informed consent).

### 1.4 New topic `ingles-symptoms` — *"Síntomas: cold & flu"*
- Symptom vocabulary: headache, sore throat, cough (dry/hacking vs wet), sneezing,
  nasal congestion (stuffy/blocked/bunged up), runny nose, watering eyes,
  chills/shivering, fever (mild/high/raised)/feverish, sweating/perspiration,
  fatigue/weariness/exhaustion, nausea/vomiting, body aches, loss of smell.
- **Regular medical verbs** list (administer, admit, diagnose, prescribe, discharge,
  refer, treat, vaccinate…) + a simple‑past exercise note. **The exam covers up to this
  regular‑verbs list** — flag that in a `note`.

### 1.5 Module + plan
- New module `ingles-medico-uad-s4` (badge "UAD · Inglés Médico I — Semana 4", title
  "Acrónimos, errores frecuentes y comunicación clínica", emoji 🩺, topicIds:
  `['ingles-abbreviations','ingles-false-friends','ingles-clinical-communication','ingles-symptoms']`).
  Remove `ingles-false-friends` from `ingles-medico-adelanto` (leave
  `ingles-scientific-literature` there — Unit VI not taught).
- Plan `uad-medicina.ts` Week‑4 ingles: `estado: 'impartido'`; `topicIds` the four
  above; update `temas` (IV acrónimos, V errores/falsos cognados, comunicación clínica
  y síntomas impartidos; **VI bibliografía científica pendiente**). Add `content.materiales`
  for the 3 classes + the **MIT / entregable** (kind 'Entrega'), and keep the abbreviations
  source.

### 1.6 EnLex (`meden-terms.ts`)
Add the **cold/flu symptom vocabulary** and the **regular medical verbs** as EnLex
entries with `semana: 4` (English term ↔ Spanish gloss). Don't duplicate existing ones.

### 1.7 Quizzes
~18–22 items across the four topics (prefixes `iabbr-q` extra, `iff-q`, `icc-q`,
`isy-q`). Target the confusions: **collocations** (operate on / attend to / make a
diagnosis), **complain of vs about**, **sore vs pain / sore ≠ sour**, **on
antibiotics**, **age structure**, **phrasal verb meaning**, **have something done**,
symptom recognition. Rubric as usual; nothing answerable by cognate; `correctIndex`
spread.

### 1.8 Library
Compose one PDF per class from the screenshots; upload to
`library.medcore.icu/ingles-medico-1/` with names like `Semana 4 - Clase 1
Abreviaturas y errores comunes.pdf`, etc. **Show the upload command first.** Don't
commit PNG/PDF/.md.

---

## 2. Verification
```bash
npm run build
grep -c "Adelanto — aún no impartido" src/data/ingles-uad-topics.ts   # one fewer (false-friends promoted)
grep -n "ingles-clinical-communication\|ingles-symptoms\|ingles-medico-uad-s4" src/data/topics.ts src/data/modules.ts
grep -o "id: '[a-z0-9-]*'" src/data/ingles-uad-quizzes.ts | sort | uniq -d   # empty
grep -c "semana: 4" src/data/meden-terms.ts
```
Manual: Week‑4 module with the four topics; `ingles-scientific-literature` still in
adelanto; false‑friends opens as taught (progress preserved); EnLex `?semana=4` lists
the new symptom/verb vocab; quizzes play.

**Mandatory self‑audit:** verify 4 items against the `.md` — operate **on** / attend
**to** / make a diagnosis; complain **of** vs **about**; **sore vs pain**; one phrasal
verb meaning. Report the item count and what you left in adelanto.

---

## 3. Non‑objectives
- Don't promote `ingles-scientific-literature` (Unit VI not taught).
- Professor errors → errata note + distractors, never the correct answer.
- Don't renumber `sectionId`s. No PNG/PDF/.md in the repo. No `npm run deploy`.

## 4. Delivery (atomic commits)
1. `feat(ingles): enriquece abreviaturas con acrónimos, riesgos y ambigüedad (Semana 4)`
2. `feat(ingles): promueve errores frecuentes y falsos cognados`
3. `feat(ingles): Topics de comunicación clínica y síntomas`
4. `feat(quizzes,meden): banco y vocabulario de Semana 4`
5. `feat(plan,modules): Semana 4 de Inglés impartida (VI pendiente)`

Report which errors/collocations you promoted vs added, the EnLex entries added, and
the self‑audit result.
