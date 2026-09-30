# PROMPT — MedCore · Anatomy I · Week 4 · Class 5 — foot muscles + final review

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-27.
> **Prompt language: English. MedCore content stays in Spanish.**
> Two parts: **(A)** complete the **foot muscles** (the pending piece of Miología II),
> and **(B)** build a **Repaso final (examen Semana 4)** topic + quiz from the class's
> exam preview. Depends on the Week‑4 Miología II prompt having created
> `musculos-pierna-pie` — if not, run that first.

---

## 0. Sources of truth
- Transcript: `…/Anatomía Humana y Disección I DEF/Semana 4/Clase 5/# Foot Muscle Anatomy Review Class 5.md`
  (`## Summary` = use; `## Transcript` = skim). Also `…/Semana 4/Clase 5/` 52 screenshots.
- Muscles deck: `…/Semana 4/MUSCULOS 4TA SEMANA.pptx` — pull per‑muscle detail.
- Textbook: `…/Anatomía Humana y Disección I DEF/moore.md` to verify insertions/innervation.

> Ignore the logistics in the transcript (Kahoot winners, app links, grading) — not
> MedCore content.

```bash
cd ~/med-core-app && npm run build
sed -n "/id: 'musculos-pierna-pie'/,/^  \},/p" src/data/anatomia-uad-topics.ts | head -20
grep -n "id: 'mpp-q\|id: 'rep3-q\|anatomia-uad-repaso" src/data/anatomia-uad-quizzes.ts src/data/modules.ts | tail
```
Collisions: `grep -rn "repaso-4\|repaso-final\|'rep4-\|'pie-" src/`

---

## Part A — complete `musculos-pierna-pie` with the foot

Append a section **Músculos del pie** (don't renumber existing `sectionId`s):
- **Región dorsal**: **extensor corto de los dedos** (extensor digitorum brevis),
  del 1.º al 4.º dedo; inervación **nervio peroneo profundo (fibular profundo)**.
- **Región plantar — 4 planos**:
  - **1.º (superficial)**: aponeurosis plantar + **abductor del hallux, flexor corto
    de los dedos, abductor del 5.º dedo**.
  - **2.º**: **cuadrado plantar (flexor accesorio)** + **lumbricales**.
  - **3.º**: **flexor corto del hallux, aductor del hallux, flexor corto del 5.º dedo**.
  - **4.º (profundo)**: **interóseos plantares y dorsales**.
  - Inervación plantar: **nervio plantar medial (interno)** y **plantar lateral
    (externo)** según el músculo.
- Add ≥1 `correlacion` (e.g. la aponeurosis plantar y la fascitis plantar; el
  cuadrado plantar corrige la línea de tracción de los flexores).
- Update the topic `subtitle` to include "y pie"; keep `colorKey: 'miologia'`,
  `categoria: 'Miología'`.

Add ~4 items (`mpp-q`, appended): dorsal = solo extensor corto de los dedos; plantar
= 4 planos; inervación peroneo profundo (dorsal) vs plantar medial/lateral.

Commit: `feat(anatomia): músculos del pie completan la miología del miembro inferior`.

---

## Part B — Repaso final (examen Semana 4)

The class gave a Kahoot **exam preview**. Mirror the earlier `repaso-2p`/`repaso-3p`.
This is the **final Anatomía I exam** (Miología II + foot, with the emphasis below).

### B.1 Topic `repaso-4` (or `repaso-anatomia-final`), `categoria: 'Miología'`
- `title: 'Repaso final — músculos (Semana 4)'`,
  `subtitle: 'Lo evaluable: pared abdominal, miembros y sus inervaciones'`.
- 3–4 summary sections (`note` "es repaso"; grouped high‑yield facts; classic traps),
  pointing back to the Miología II topics.

### B.2 Exam blueprint → ~24–28 items, prefix `rep4-q`, `topicId` the repaso topic
From the preview (write items; classic term also correct):
1. **Capas de la pared abdominal**: piel, fascia de **Camper**, fascia de **Scarpa**.
2. **Vaina del recto** (hoja anterior y posterior); **arco de Douglas** (bajo él
   desaparece la hoja posterior); **línea alba** y **línea semilunar**.
3. **Pectoral mayor** (aducción + rotación interna del hombro), **dorsal ancho**,
   **trapecio**, **deltoides** (abducción).
4. **Manguito rotador = SITS** (supraespinoso, infraespinoso, redondo menor,
   subescapular).
5. **Inervaciones del antebrazo**: mediano (flexores/pronadores + túnel del carpo),
   cubital (mano), radial (extensores posteriores).
6. Compartimientos del muslo y su nervio (anterior femoral, medial obturador,
   posterior ciático); isquiotibiales; pata de ganso.
7. Pierna: compartimiento posterior → tendón de Aquiles; anterior dorsiflexión;
   lateral eversión (peroneos).
8. **Pie**: dorsal = extensor corto de los dedos; plantar = 4 planos; inervación
   peroneo profundo vs plantar medial/lateral.
Round to **24–28**. Rubric: distractors from a sibling muscle/nerve; `explanation`
justifies + rules out one; `correctIndex` spread; ≥8 on the traps.

### B.3 Module
Add `repaso-4` to a review module `anatomia-uad-repaso-final` (badge "UAD · Anatomía I
— Repaso", title "Repaso final", emoji 📝), following the `anatomia-uad-repaso-p2`
pattern.

---

## Part C — Library
Convert the week deck to PDF and upload:
```bash
cd "~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 4"
soffice --headless --convert-to pdf --outdir . "MUSCULOS 4TA SEMANA.pptx" \
  && mv "MUSCULOS 4TA SEMANA.pdf" "Semana 4 - Musculos (semana completa).pdf"
```
Add its `MaterialRef` to Week 4. Compress if >30 MB. If `soffice` is unavailable, tell
me. **Show the upload command first.** Don't commit pptx/PDF/.md.

---

## Verification
```bash
npm run build
grep -c "id: 'rep4-q" src/data/anatomia-uad-quizzes.ts               # 24–28
grep -n "musculos del pie\|extensor corto de los dedos\|cuadrado plantar\|repaso-4\|anatomia-uad-repaso-final" src/data/anatomia-uad-topics.ts src/data/modules.ts
grep -o "id: 'rep4-q[0-9]*'" src/data/anatomia-uad-quizzes.ts | sort | uniq -d   # empty
```
Manual: `musculos-pierna-pie` now has the foot section; a **Repaso final** module/topic
with a ~26‑item quiz; light+dark OK; earlier topics/banks untouched.

**Mandatory self‑audit:** verify 4 items against the `.md`/pptx — dorsal foot = only
extensor corto de los dedos; plantar = 4 planes; manguito rotador = SITS; abdominal
layers Camper/Scarpa. Report counts, whether `soffice` was available, and the result.

---

## Non‑objectives
- Don't invent muscle facts — use the `.md`/pptx/moore.md.
- Don't renumber `sectionId`s. No pptx/PDF/.md in the repo. No `npm run deploy`.

## Delivery (atomic commits)
1. `feat(anatomia): músculos del pie (Miología II completa)`
2. `feat(anatomia): Repaso final — topic y banco (~26)`
3. `feat(plan,modules): material y módulo de repaso final de Semana 4`

Report the foot detail pulled, the review item count, and the self‑audit result. With
this, **Anatomía Humana y Disección I** is fully loaded.
