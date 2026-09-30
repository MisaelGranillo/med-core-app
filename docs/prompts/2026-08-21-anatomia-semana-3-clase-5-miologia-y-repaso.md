# PROMPT — MedCore · Anatomy I · Week 3 · Class 5 — finish Miología I + Repaso 3er Parcial

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-21.
> **Prompt language: English. MedCore content stays in Spanish.**
> Two parts: **(A)** complete Miología I with the Class‑5 muscle groups, and **(B)**
> build a **Repaso 3er Parcial** review topic + quiz for the module exam.
> Depends on the Class‑4 miología prompt (`…clase-4-miologia.md`) having been run —
> if the miología topics don't exist yet, run that first, then this.

---

## 0. Sources of truth (authoritative transcripts)

The class provides **Markdown transcripts** — read them, they carry exact
origen/inserción/función/inervación and the professor's eponyms:
- Class 5 content: `~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 3/Clase 5/# Facial and Neck Muscles Review.md`
- Exam review: `~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 3/Clase 5/Repaso para examen/# Joint Types and Musculoskeletal Review.md`

Each `.md` has a `## Summary` (use this) followed by a long `## Transcript` (skim for
detail only). The Clase 5 folder has 142 screenshots; the Repaso subfolder has its own
screenshots.

```bash
cd ~/med-core-app
npm run build
sed -n '/id: .musculos-cara-craneo./,/^  \},/p' src/data/anatomia-uad-topics.ts | head -20
sed -n '/id: .musculos-cuello-nuca./,/^  \},/p' src/data/anatomia-uad-topics.ts | head -20
grep -n "musculos-diafragma\|anatomia-uad-s3-miologia\|repaso-2p\|anatomia-uad-repaso" src/data/modules.ts src/data/anatomia-uad-topics.ts | head
git log --oneline -6
```

---

## Part A — complete Miología I with Class‑5 groups

Extend the existing miología topics (append sections / add blocks; **never renumber
`sectionId`s**). Pull detail from the Class‑5 `.md`.

1. **`musculos-cara-craneo`** — add:
   - **Músculos de la nariz** (11 por lado según el profesor): piramidal (desciende la
     piel ciliar), transverso, mirtiforme (estrechan los orificios), dilatador propio
     del ala nasal (abre las alas).
   - **Boca (detalle)**: orbicular de los labios (**único, no par; esfínter**),
     buccinador (permite soplar; **atravesado por el conducto de Stenon/parotídeo**),
     elevadores (común del ala de la nariz y labio superior, propio del labio superior,
     del ángulo de la boca), cigomático mayor y menor, risorio (de Santorini),
     depresores y mentonianos.
   - `correlacion` (dato): **cigomático mayor = "músculo de la sonrisa"; elevador del
     ángulo de la boca = "músculo del Joker".** Toda la mímica es **VII (facial)**
     (ramas temporal, cigomática, bucal, mandibular, cervical).

2. **`musculos-cuello-nuca`** — add:
   - **Triángulo suboccipital**: límites recto posterior mayor (medial), oblicuo
     superior/menor (lateral), oblicuo inferior/mayor (inferior); piso = membrana
     atlantooccipital posterior + arco posterior del atlas; techo = complejo
     mayor/semiespinoso; **contenido = arteria vertebral (C1), nervio suboccipital
     (rama posterior de C1) y plexo venoso suboccipital**. Inervación de los
     suboccipitales: nervio suboccipital.
   - **Cuello superficiales**: **platisma (cutáneo del cuello)**, **ECM** (flexiona el
     cuello; girando la cabeza si es unilateral; orígenes esternón + clavícula,
     inserción apófisis mastoides; inervación **XI + C2–C3**), trapecio (**XI +
     C2–C3**).
   - **Infrahioideos** (esternohioideo, esternotiroideo, tirohioideo, omohioideo):
     descienden hioides/laringe; inervación **asa cervical (C1–C2)**; el tirohioideo
     por rama independiente.
   - Refina **suprahioideos** con la inervación mixta: **V** (milohioideo y vientre
     anterior del digástrico), **VII** (estilohioideo y vientre posterior del
     digástrico), **XII** (geniohioideo).

3. **`musculos-diafragma`** (o el topic de tórax) — add **músculos intercostales**
   (internos y externos): elevan/descienden las costillas (inspiración/espiración).
   Mantén el diafragma (frénico C3‑4‑5; orificios cava/esofágico/aórtico).

### Part‑A correlations (accurate; from the class)
- *"Los suprahioideos tienen inervación mixta (V, VII, XII); el digástrico resume la
  regla: vientre anterior por el V, posterior por el VII."*
- *"El ECM y el trapecio comparten inervación: el XI (accesorio) motor, con aferencias
  propioceptivas de C2–C3."*
- *"El buccinador está perforado por el conducto parotídeo (de Stenon): por eso morder
  la mejilla y masticar se relacionan con este músculo."*

---

## Part B — Repaso 3er Parcial (topic + quiz)

Mirror the earlier `repaso-2p`. This is exam‑prep concentrating the module‑exam
emphasis from the Repaso `.md` (artrología + miología). **Not new content** — it
references the existing topics.

### B.1 Topic `repaso-3p` (`colorKey: 'artrologia'` or a neutral one, `categoria:
'Artrología'` or `'Miología'`)
- `title: 'Repaso 3er Parcial — artrología y miología'`,
  `subtitle: 'Lo evaluable del módulo: articulaciones, tipos de músculo y músculos de cabeza, cuello y tronco'`.
- 3–4 summary sections (a `note` "es repaso, no contenido nuevo", plus grouped
  high‑yield facts and the classic traps), pointing back to the source topics.

### B.2 Exam blueprint → ~30 items, prefix `rep3-q`, `topicId: 'repaso-3p'`
From the Repaso `.md`, write items (descending by emphasis; classic term also correct):
1. Articulación = une hueso con **hueso, cartílago o diente**.
2. Clasificación **funcional** por movilidad: **sinartrosis (inmóvil), anfiartrosis
   (semimóvil), diartrosis (móvil)**.
3. Una **sinovial** requiere **cápsula, cavidad con líquido sinovial y cartílago
   articular**.
4. **Tibioperonea distal = sindesmosis** (membrana interósea).
5. **Glenohumeral y coxofemoral = esferoideas, multiaxiales.**
6. **Húmero‑cubital e interfalángicas = trocleares (bisagra), uniaxiales**
   (flexión‑extensión, eje transversal).
7. **Ligamentos cruzados** restringen el desplazamiento **antero‑posterior**; los
   **colaterales**, el lateral.
8. **Esquelético** (estriado voluntario) · **liso** (involuntario visceral) ·
   **cardíaco** (estriado involuntario).
9. **Tendón** une músculo‑hueso; **ligamento** une hueso‑hueso; **cartílago** amortigua.
10. **ECM**: orígenes esternón, clavícula y **apófisis mastoides**.
11. **Diafragma**: principal inspirador, **nervio frénico** ("dolor de caballo").
12. **Recto anterior del abdomen = poligástrico** ("cuadritos"); **masetero = el más
    fuerte** (~90 kg).
13. **Intercostales** (internos y externos) elevan/descienden costillas
    (inspiración/espiración).
14. Masticación **V3** vs mímica **VII**; suprahioideos inervación mixta (V, VII, XII).
15. Contenido del **triángulo suboccipital**: arteria vertebral, nervio suboccipital,
    plexo venoso.
Round to **28–32** items so the bank mirrors the exam. Rubric: distractors from a
sibling structure; `explanation` justifies the key and rules out one distractor;
`correctIndex` spread 0–3; ≥8 items on the classic traps.

### B.3 Module
Add `repaso-3p` to a review module (reuse `anatomia-uad-repaso-p2`'s pattern → create
`anatomia-uad-repaso-p3` with badge "UAD · Anatomía I — Repaso", title "Repaso 3er
Parcial", emoji 📝).

---

## Part C — Library
Compose the Class‑5 PDF from its 142 screenshots and (optionally) a repaso PDF; upload
to `library.medcore.icu/anatomia-humana-diseccion-1/`:
```bash
cd "~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 3/Clase 5"
python3 -c "
from PIL import Image; import glob
ims=[Image.open(f).convert('RGB') for f in sorted(glob.glob('*.png'))]
ims[0].save('Semana 3 - Clase 5 Musculos cara y cuello.pdf', save_all=True, append_images=ims[1:], resolution=130)
print(len(ims))"
```
Add the matching `MaterialRef` to Week 3 in `plans/uad-medicina.ts`. Compress with
Ghostscript if >30 MB. **Show me the upload command before running it.** Don't commit
PNG/PDF/.md into the repo.

---

## Verification

```bash
npm run build
grep -c "id: 'rep3-q" src/data/anatomia-uad-quizzes.ts             # 28–32
grep -o "id: 'rep3-q[0-9]*'" src/data/anatomia-uad-quizzes.ts | sort | uniq -d   # empty
grep -n "repaso-3p\|musculos de la nariz\|platisma\|intercostales\|triángulo suboccipital" src/data/anatomia-uad-topics.ts src/data/modules.ts
```

Manual (`npm run dev`):
- [ ] `musculos-cara-craneo` now covers nose + detailed mouth muscles with the eponym
      correlations; `musculos-cuello-nuca` covers suboccipital triangle + superficial
      neck (platisma/ECM/trapecio) + infrahioideos; intercostales present.
- [ ] A **Repaso 3er Parcial** module/topic with a ~30‑item `rep3-q` quiz.
- [ ] Reading progress preserved (no `sectionId` renumbering); light + dark OK.

**Mandatory self‑audit:** verify 5 items against the Repaso `.md` — sinovial
requirements, tibioperonea distal = sindesmosis, glenohumeral = esferoidea multiaxial,
húmero‑cubital = troclear uniaxial, diaphragm = frénico. Report the item count and any
fact you softened.

---

## Non‑objectives
- Don't load Miología II (abdomen/pelvis/limbs) — Semana 4.
- Don't invent muscle facts — use the `.md` transcripts.
- Don't renumber `sectionId`s. No PDF/PNG/.md in the repo. No `npm run deploy`.

## Delivery (atomic commits)
1. `feat(anatomia): músculos de nariz y boca — detalle (Clase 5)`
2. `feat(anatomia): triángulo suboccipital, cuello superficial e infrahioideos`
3. `feat(anatomia): intercostales`
4. `feat(anatomia): Repaso 3er Parcial — topic y banco (~30)`
5. `feat(plan,modules): material y módulo de repaso de Semana 3`

Report: which Class‑5 groups you added vs. already present, the exam‑review item count,
and the self‑audit result.
