# PROMPT — MedCore · Anatomy I · "Repaso 2º Parcial" exam-prep quiz

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-12.
> **Prompt language: English. MedCore content stays in Spanish.**
> This is **NOT new content** — it's an **exam-prep review** that concentrates the
> professor's second-partial emphasis into one focused Topic + quiz. All the
> underlying osteology is already loaded (`torax-oseo`, `miembro-superior-oseo`,
> `hueso-coxal`, `miembro-inferior-oseo`). The exam has **30 questions**; the
> professor's own review deck ("REPASO SEGUNDO PARCIAL") is the blueprint, verified
> in §3.

---

## 0. Before touching code

```bash
cd ~/med-core-app
npm run build      # clean first
grep -n "id: 'anatomia-uad-s2'" src/data/modules.ts
grep -n "id: 'torax-oseo'\|id: 'miembro-superior-oseo'\|id: 'hueso-coxal'\|id: 'miembro-inferior-oseo'" src/data/anatomia-uad-topics.ts
tail -3 src/data/anatomia-uad-quizzes.ts
git log --oneline -6
```
Collisions: `grep -rn "repaso-2p\|'rep2-" src/`

---

## 1. Objective

| Layer | File | What to add |
|---|---|---|
| Study guide | `anatomia-uad-topics.ts` | 1 review `Topic`: `repaso-2p` (summary + keyPoints, links to source topics) |
| Bank | `anatomia-uad-quizzes.ts` | **~30** `Question`, prefix `rep2-q`, `topicId: 'repaso-2p'` |
| Module | `modules.ts` | new module `anatomia-uad-repaso-p2` surfacing the review Topic |

Reuse `colorKey: 'osteologia'`. This Topic is a **capstone/review** — it does not
introduce structures; it points back to the four osteology topics and drills the
exam's high-yield points. One `note` up top: *"Repaso para el 2º parcial. No es
contenido nuevo; concentra lo que el profesor marcó como evaluable. Cada estructura
se estudia a fondo en su Topic de origen."*

Terminology rule as always: **TA primary, classic in parentheses; the classic term
also counts as correct** (the professor grades in classic). This deck is heavy on
classic (troquíter, epitróclea, peroné, astrágalo, escafoides del carpo…).

---

## 2. Scope = the professor's deck

The review deck covers **limbs and pelvis** (cintura escapular, húmero, radio/cúbito,
carpo/metacarpo/falanges, miembro inferior, hueso coxal, pie). Mirror that scope.
Do **not** pad with thorax unless Misael says the exam includes it.

---

## 3. Verified review blueprint → write ~30 items (Spanish)

Turn each point below into one reactivo (some yield two). Order them **descending by
the professor's emphasis** (the "fill-in-the-blank" prompts he left are the highest
yield). Every item: 4 options, plausible distractors from a neighboring structure,
`explanation` that justifies the key and rules out a distractor, `correctIndex`
spread 0–3.

### Cintura escapular / escápula
1. **Articulación glenohumeral = cavidad glenoidea (de la escápula) + cabeza del
   húmero.** (The professor's blank: "____ + ____".)
2. Huesos de la cintura escapular: **clavícula + escápula**.
3. Cara anterior de la escápula: **fosa subescapular**; cara posterior: **espina,
   acromion, fosa supraespinosa, fosa infraespinosa**.
4. **Proceso coracoides (apófisis coracoides)** vs **acromion** (ambos anteriores,
   se confunden).

### Húmero
5. Estructuras **proximales**: cabeza, cuello anatómico, cuello quirúrgico,
   **tubérculo mayor (troquíter)**, **tubérculo menor (troquín)**, **surco
   intertubercular (corredera bicipital)**.
6. Estructuras **distales**: tróclea, capítulo (cóndilo), **epicóndilo medial
   (epitróclea)**, epicóndilo lateral, fosa coronoidea, fosa radial, **fosa del
   olécranon** (posterior).
7. **Articulaciones del húmero**: proximal = glenohumeral (con la escápula); distal =
   codo (con radio y cúbito).
8. **Cuello quirúrgico** = sitio de fractura frecuente (vs cuello anatómico).

### Radio y cúbito
9. **Posición anatómica: radio lateral, cúbito medial.**
10. **Membrana interósea** entre los bordes interóseos de radio y cúbito.
11. **Porción proximal del cúbito**: olécranon, apófisis coronoides, incisura
    troclear (escotadura troclear), incisura radial (escotadura radial).
12. **Porción distal del cúbito**: cabeza y proceso estiloides.
13. **Cabeza del radio = proximal; cabeza del cúbito = distal** (extremos opuestos).

### Carpo / metacarpo / falanges
14. **El gancho** pertenece al **hueso ganchoso (hamate)**.
15. **El sesamoideo del carpo = pisiforme.**
16. **Más medial** (fila proximal) = **pisiforme**; **más lateral** = **escafoides**.
17. **Fila superior (proximal)**: escafoides, semilunar, piramidal, pisiforme.
18. **Fila inferior (distal)**: trapecio, trapezoide, hueso grande, ganchoso.
19. **Articulación con el radio (radiocarpiana)**: escafoides y semilunar.
20. **Articulación con el cúbito**: **no es directa** — se interpone un **disco
    articular (fibrocartílago triangular)**; el cúbito no toca el carpo.
21. **Fractura más frecuente del carpo = escafoides.**
22. Metatarpo de la mano — **metacarpianos: 5, I→V de lateral a medial**; falanges:
    proximal, media, distal; el pulgar solo tiene 2.

### Miembro inferior
23. **La rótula (patela) forma la rodilla y es un hueso SESAMOIDEO** — el más grande
    del cuerpo (la pregunta del profesor: "¿normal o sesamoideo?").
24. **Hueso más grande/largo del cuerpo = fémur.**
25. **Huesos que soportan peso**: fémur y **tibia** (el peroné casi no soporta peso).
26. **Huesos del tobillo (articulación talocrural)**: tibia + peroné (fíbula) +
    **astrágalo (talus)**.
27. **Maléolo medial = tibia; maléolo lateral = peroné (fíbula).**

### Hueso coxal
28. **Tres huesos que forman el coxal → acetábulo**: ilion, isquion, pubis.
29. **Tuberosidad isquiática** = apoyo al sentarse; **espina isquiática** entre las
    dos incisuras isquiáticas (escotaduras ciáticas).

### Pie
30. **Tarso = 7 huesos**; **talón = calcáneo**; **articulación con la pierna =
    astrágalo (talus)**.

> If you produce a couple of extra items (e.g. split #5/#6 proximal vs distal into
> two), aim for **28–32** total so the bank mirrors the 30-question exam.

---

## 4. Deliverables

### 4.1 Topic `repaso-2p`
- `id: 'repaso-2p'`, `colorKey: 'osteologia'`,
  `title: 'Repaso 2º Parcial — osteología de los miembros y la pelvis'`,
  `subtitle: 'Puntos que el profesor marcó como evaluables (30 preguntas)'`.
- 3–4 sections that **summarize the emphasis** (not re-teach): a `note` (what this
  is), a `list`/`table` of the high-yield facts grouped by region (§3), and a
  `comparison` for the classic traps (troquíter/troquín, epitróclea/epicóndilo,
  radio lateral/cúbito medial, maléolo medial=tibia/lateral=peroné, cabeza radio
  proximal/cúbito distal).
- `keyPoints` (6–8): glenohumeral = glenoides + cabeza del húmero · pisiforme =
  sesamoideo · gancho = ganchoso · fractura del carpo = escafoides · el cúbito no
  articula con el carpo (disco) · rótula = sesamoideo más grande · maléolo medial =
  tibia, lateral = peroné · talón = calcáneo, articula con la pierna el astrágalo.
- End each region's summary by pointing to the source Topic (`miembro-superior-oseo`,
  `hueso-coxal`, `miembro-inferior-oseo`) so the student can drill deeper.

### 4.2 Bank `anatomia-uad-quizzes.ts`
- ~30 items, prefix `rep2-q`, `topicId: 'repaso-2p'`, appended after `minf-q`.
- Header comment: "Repaso 2º Parcial — orden descendente por énfasis del profesor."
- Descending study value; distractors from neighboring structures (e.g. offer
  "semilunar" as a distractor for the most-lateral carpal; "peroné" for the
  weight-bearing bone; "epicóndilo lateral" for epitróclea). `correctIndex` spread.

### 4.3 Module `modules.ts`
```ts
{
  id: 'anatomia-uad-repaso-p2',
  badge: 'UAD · Anatomía I — Repaso',
  title: 'Repaso 2º Parcial',
  subtitle: 'Osteología de miembros y pelvis: lo evaluable, en 30 reactivos.',
  emoji: '📝',
  topicIds: ['repaso-2p'],
}
```
Place it right after `anatomia-uad-s2`.

---

## 5. Verification

```bash
npm run build
grep -c "id: 'rep2-q" src/data/anatomia-uad-quizzes.ts        # 28–32
grep -o "id: 'rep2-q[0-9]*'" src/data/anatomia-uad-quizzes.ts | sort | uniq -d   # empty
grep -n "repaso-2p" src/data/topics.ts src/data/modules.ts
# correctIndex spread sanity:
grep -o "correctIndex: [0-3]" src/data/anatomia-uad-quizzes.ts | sort | uniq -c
```

Manual (`npm run dev`):
- [ ] `/estudio`: a **Repaso 2º Parcial** module with the `repaso-2p` Topic.
- [ ] `/topic/repaso-2p`: opens with the "es repaso, no contenido nuevo" note; the
      trap comparisons render; links/mentions to the source topics present.
- [ ] The `rep2-q` quiz plays with ~30 items; classic answers accepted per the
      explanations; legible light+dark.
- [ ] The four osteology topics and their banks are untouched.

**Mandatory self-audit:** verify these five against §3 — glenohumeral = glenoides +
cabeza del húmero; carpal sesamoid = pisiforme; most lateral carpal = escafoides;
patella = sesamoid; ulna does NOT articulate with the carpus (articular disc). Report
the result and the final item count.

---

## 6. Non-objectives
- Don't create new osteology content or duplicate the four source topics — this is a
  review layer that references them.
- Don't renumber `sectionId`s or touch the existing banks.
- Don't add thorax items unless Misael confirms the exam includes it.
- No new `TopicColorKey`. No `npm run deploy`.

---

## 7. Delivery (atomic commits)
1. `feat(anatomia): Topic Repaso 2º Parcial — resumen evaluable de miembros y pelvis`
2. `feat(quizzes): banco Repaso 2º Parcial — ~30 reactivos según el repaso del profesor`
3. `feat(modules): módulo Repaso 2º Parcial`

Report the final item count, the correctIndex distribution, and the self-audit result.
Flag any review point you could not turn into a fair 4-option item.
