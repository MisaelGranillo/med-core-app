# PROMPT — MedCore · Anatomy I · Week 2 · Class 3 (hip bone / hueso coxal)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-12.
> **Prompt language: English. MedCore content stays in Spanish** — every string
> written into topics, quizzes, plan and atlas is Spanish.
> **Phase 3 of Week 2**: adds **Class 3 — Hueso coxal (pelvis ósea)**. Classes 1
> (`torax-oseo`) and 2 (`miembro-superior-oseo`) are already loaded — don't touch
> them. The **femur, tibia, fibula and foot are NOT yet taught** (Class 3 ended on
> the "Anatomía del fémur" title slide) → Phase 4.

---

## 0. Before touching code

Copy the established Week-2 pattern:

```bash
cd ~/med-core-app
sed -n '/id: .miembro-superior-oseo./,/^  \},/p' src/data/anatomia-uad-topics.ts | head -60   # pattern to imitate
sed -n '11,20p'   src/data/modules.ts                  # module 'anatomia-uad-s2' (currently 2 topics)
sed -n '128,150p' src/data/plans/uad-medicina.ts       # Week-2 (estado, topicIds, fuentes)
sed -n '85,120p'  src/data/atlas-topics.ts             # AtlasTopic pattern
grep -n "id: 'mso-q" src/data/anatomia-uad-quizzes.ts | tail -1   # end of the previous quiz block
git log --oneline -6
```

Clean `npm run build` first. Check id collisions:
`grep -rn "hueso-coxal\|'cox-\|'coxal" src/`

---

## 1. Objective

| Layer | File | What to add |
|---|---|---|
| Study guide | `src/data/anatomia-uad-topics.ts` | 1 `Topic`: `hueso-coxal` |
| Question bank | `src/data/anatomia-uad-quizzes.ts` | ~12 `Question`, prefix `cox-q` |
| Subject sheet | `src/data/plans/uad-medicina.ts` | Week-2 `topicIds` gains the new one; stays PARTIAL |
| Module | `src/data/modules.ts` | `anatomia-uad-s2` gains the new one; update `subtitle`/`title` |
| Atlas | `src/data/atlas-topics.ts` (+ `public/atlas/`) | 1 `AtlasTopic` `hueso-coxal`, 8 questions |

Reuse `colorKey: 'osteologia'`. Never renumber existing `sectionId`s.

---

## 2. Sources of truth

- **Class (58 captures):**
  `~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 2/Clase 3/`.
  Verified content in §4. The deck covers only the **hip bone** (ilion, isquion,
  pubis, acetábulo) and ends on the femur title slide.
- **Textbook:** `Moore Anatomía.pdf`, **Miembro inferior → Huesos de la pelvis /
  hueso coxal**. Offset verified: **book = PDF − 24.** Locate the pages with
  `pdftotext -layout -f <n> -l <m>` and cite **both numberings** in `fuentes`.
- **Complementary:** `Serie RT Anatomía.pdf`, Quiroz (classic nomenclature).

---

## 3. Terminology rule (TA primary · classic in parentheses)

TA is the headline term; the professor's classic term goes in parentheses on first
use per section; in items the classic term **also counts as correct**. One `note`
per topic on the coexistence. Mapping for this class:

| TA (primary) | classic (in parentheses) |
|---|---|
| Hueso coxal | hueso ilíaco |
| Línea arqueada | línea innominada |
| Incisura isquiática mayor / menor | escotadura ciática mayor / menor |
| Espina isquiática | espina ciática |
| Acetábulo | cavidad cotiloidea |
| Labrum acetabular | rodete cotiloideo |
| Cara glútea del ala del ilion | fosa ilíaca externa (glútea) |
| Carilla auricular | superficie auricular |
| Eminencia iliopúbica | eminencia iliopectínea |
| Agujero obturado | agujero obturador |
| Rama isquiopúbica | rama ascendente del isquion + rama descendente del pubis |

> The slide title is already TA-first ("HUESO COXAL (Hueso ilíaco)") — keep that
> style everywhere.

---

## 4. Verified class content (hip bone) — write in Spanish

Organize the Topic in **7 sections** (`cox-1`…`cox-7`). Do not add structures the
class didn't name (no femur, no hip joint beyond the acetabulum).

### 4.1 Generalidades
El **hueso coxal (hueso ilíaco)** resulta de la fusión de **tres huesos** —
**ilion, isquion y pubis**— que se unen en el **acetábulo**.

### 4.2 Ilion — cuerpo y ala
- **Cuerpo:** línea arqueada (línea innominada), eminencia iliopúbica
  (iliopectínea).
- **Ala** (presenta **3 bordes** y **3 caras**):
  - Accidentes del borde superior: espina ilíaca anterosuperior (EIAS), espina
    ilíaca posterosuperior (EIPS), **cresta ilíaca** (labio externo/interno,
    intersticio y tubérculo de la cresta).
  - **3 bordes:** *Anterior* → EIAI (espina ilíaca anteroinferior) y eminencia
    iliopúbica; *Posterior* → EIPI (espina ilíaca posteroinferior) e incisura
    isquiática mayor; *Medial* → línea arqueada.
  - **3 caras:** *Cara glútea (fosa ilíaca externa)* → líneas glúteas posterior,
    anterior e inferior; *Fosa ilíaca interna*; *Cara sacropélvica* → carilla
    auricular, tuberosidad ilíaca, surco preauricular.

### 4.3 Isquion
- **Cuerpo** (extremidad superior e inferior): **3 caras** femoral, pélvica y
  posterior; **3 bordes** externo, posterior y anterior → **tuberosidad
  isquiática**, incisura isquiática mayor, **espina isquiática (espina ciática)**,
  incisura isquiática menor.
- **Rama ascendente** (→ **rama isquiopúbica**): borde superior e inferior; cara
  lateral y medial.

### 4.4 Pubis
- **Cuerpo:** 3 caras (sinfisiaria, femoral y pélvica); cresta del pubis, espina
  del pubis.
- **Rama horizontal (superior):** eminencia iliopúbica, cresta pectínea, cresta
  obturatriz, surco obturador; 3 bordes (anterior, inferior, posterior); 3 caras
  (pectínea, pélvica, obturatriz).
- **Rama descendente (inferior).**

### 4.5 Acetábulo (cavidad cotiloidea)
- Formado por los tres huesos que confluyen; el profesor anota su contribución
  como **isquion 2/5, pubis 2/5, ilion 1/5** (la diapositiva usa la notación
  "isquion +2/5 · pubis 2/5 · ilion −2/5"; **cita la diapositiva literal** y NO la
  "corrijas" a una fracción limpia — decláralo como el dato del profesor).
- Accidentes: **incisura isquiopúbica (escotadura isquiopúbica)**, **fosa
  acetabular**, **superficie semilunar** (parte articular), **labrum acetabular
  (rodete cotiloideo)**.

### 4.6 Agujero obturado
Delimitado por el pubis y el isquion; cerrado en vida por la membrana obturatriz.

### 4.7 Confusions to target (≥25 % of the bank)
1. **Qué hueso aporta cada parte del acetábulo** (ilion, isquion, pubis) y la
   proporción del profesor.
2. **Incisura isquiática mayor vs menor**, separadas por la **espina isquiática**.
3. **Tuberosidad isquiática** = punto de apoyo al sentarse (isquion).
4. Landmarks de la cresta ilíaca: **EIAS, EIPS, EIAI, EIPI** (no confundir
   anterosuperior con anteroinferior).
5. **Superficie semilunar (articular)** vs **fosa acetabular (no articular)**.
6. **Cara glútea (externa)** vs **fosa ilíaca interna** vs **cara sacropélvica**.
7. **Línea arqueada (innominada)** = parte del estrecho superior de la pelvis.
8. **Agujero obturado** limitado por pubis + isquion (no el ilion).

---

## 5. Deliverables

### 5.1 Topic `hueso-coxal`
- `id: 'hueso-coxal'`, `colorKey: 'osteologia'`,
  `title: 'Hueso coxal (hueso ilíaco): ilion, isquion, pubis y acetábulo'`,
  `subtitle: 'Los tres huesos de la pelvis ósea y la cavidad acetabular'`.
- 7 sections (§4.1–§4.6). `cox-1` opens with the terminology `note`. Use `table`
  for the borders/faces of each bone, `comparison` for greater vs lesser sciatic
  notch and for semilunar surface vs acetabular fossa, `list` for the three bones,
  `definition` for acetábulo, línea arqueada, tuberosidad isquiática.
- `keyTerms`: hueso coxal, línea arqueada, incisura isquiática mayor, espina
  isquiática, acetábulo, labrum acetabular, tuberosidad isquiática, agujero
  obturado (classic in parentheses).
- 6–8 `keyPoints` (tres huesos → acetábulo; isquion soporta el peso al sentarse;
  espina isquiática entre las dos incisuras; agujero obturado = pubis + isquion).

### 5.2 Bank `anatomia-uad-quizzes.ts`
- ~12 items, prefix `cox-q`, appended after the `mso-q` block. Descending study
  value with a header comment. Rubric: distractors from another part of the same
  bone or from a neighboring bone (e.g. attribute the tuberosidad isquiática to the
  pubis); `explanation` justifies the key and rules out a distractor; `correctIndex`
  spread 0–3. ≥3 items on §4.7.

### 5.3 Subject sheet (`plans/uad-medicina.ts`, Week 2)
- `topicIds: ['torax-oseo', 'miembro-superior-oseo', 'hueso-coxal']`.
- Stays **PARTIAL** (`estado: 'impartido'` + comment: femur/leg/foot pending).
  Update `temas`: mark the hip bone as taught; keep "por impartir: fémur, tibia,
  peroné y huesos del pie".
- Add the hip-bone Moore source to `fuentes` (both numberings).
- Add to `content.materiales`:
  ```ts
  { title: 'Semana 2 · Clase 3 — Hueso coxal (pelvis ósea)',
    file: 'Semana 2 - Clase 3 Hueso Coxal.pdf', kind: 'Clase' },
  ```

### 5.4 Module (`modules.ts`, `anatomia-uad-s2`)
- `topicIds: ['torax-oseo', 'miembro-superior-oseo', 'hueso-coxal']`.
- Update `title`/`subtitle` to include the pelvis: e.g. subtitle *"Semana 2: tórax,
  miembro superior y hueso coxal. Fémur, pierna y pie por impartir."*

### 5.5 Atlas `hueso-coxal`
- `AtlasTopic` with 8 `AtlasQuestion` (`cox-a1`…`cox-a8`): locate ilion/isquion/
  pubis, acetábulo, tuberosidad isquiática, espina isquiática, EIAS, agujero
  obturado. `imagePath: '/atlas/hueso-coxal.png'`. Lámina from sibling prompt
  `2026-08-12-anatomia-semana-2-clase-3-lamina.md`; must not break build if the PNG
  is missing (same mechanism as the other Week-2 atlas topics).

### 5.6 Library
```bash
cd "~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 2/Clase 3"
python3 -c "
from PIL import Image; import glob
ims=[Image.open(f).convert('RGB') for f in sorted(glob.glob('*.png'))]
ims[0].save('Semana 2 - Clase 3 Hueso Coxal.pdf', save_all=True, append_images=ims[1:], resolution=150)
print(len(ims),'páginas')"
```
Upload to `library.medcore.icu/anatomia-humana-diseccion-1/` with the §5.3 name.
**Show me the upload command before running it.** Don't commit PNG/PDF.

---

## 6. Verification

```bash
npm run build
grep -c "id: 'cox-q" src/data/anatomia-uad-quizzes.ts          # ≈ 12
grep -o "id: 'cox-[a-z0-9]*'" src/data/atlas-topics.ts | sort | uniq -d   # empty
grep -n "hueso-coxal" src/data/topics.ts src/data/modules.ts src/data/plans/uad-medicina.ts src/data/atlas-topics.ts
```

Manual (`npm run dev`):
- [ ] `/estudio`: `hueso-coxal` under `anatomia-uad-s2` alongside the other two.
- [ ] `/topic/hueso-coxal`: 7 sections, terminology `note`, tables legible in light
      and dark mode (`tailwind.config.js` overrides `zinc`).
- [ ] `/plan/…anatomia-…-1`: Week 2 lists three topics; still marked partial
      (femur/leg/foot pending).
- [ ] `cox-q` quiz playable; the other two topics untouched.
- [ ] Atlas doesn't break with the PNG missing.

**Mandatory self-audit:** verify 3 items against §4 (which bone bears the ischial
tuberosity; spine between the two sciatic notches; semilunar surface vs acetabular
fossa) and report. Also report exactly how you rendered the professor's acetabular
proportions (§4.5) — do not silently normalize them.

---

## 7. Non-objectives
- Don't load femur/tibia/fibula/foot (not taught) — Phase 4.
- Don't touch `torax-oseo`, `miembro-superior-oseo`, Week-1, Inglés, PAI,
  `unisa-lmgc`, `lmgc-modules`.
- Don't cover the hip joint/ligaments or gluteal muscles (that's the arthrology/
  myology class): this is osteology only.
- No new `TopicColorKey`. No `sectionId` renumbering. No PDF/PNG in the repo. No
  `npm run deploy`.

---

## 8. Delivery (atomic commits)
1. `feat(anatomia): Topic hueso coxal — ilion, isquion, pubis, acetábulo (Semana 2 Clase 3)`
2. `feat(quizzes): banco de hueso coxal — ~12 reactivos`
3. `feat(plan,modules): Semana 2 suma hueso coxal; sigue parcial`
4. `feat(atlas): AtlasTopic hueso coxal con 8 preguntas`

Report the real Moore pages (both numberings), any id collision, how you handled
the acetabular proportions, and the self-audit result.

---

## 9. Phase 4 (pending)
When the femur, leg (tibia/fibula) and foot classes are taught, a sibling prompt
adds `femur-oseo`, `pierna-osea`, `pie-oseo` and flips Week 2 to fully `impartido`.
