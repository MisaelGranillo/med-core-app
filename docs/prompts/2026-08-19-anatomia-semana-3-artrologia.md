# PROMPT — MedCore · Anatomy I · Week 3 (Artrología / joints)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-19.
> **Prompt language: English. MedCore content stays in Spanish.**
> **Phase 1 of Week 3.** Classes 1–3 covered **Artrología (joints) only**. The
> syllabus week is "Artrología y Miología I" — **Miología (muscles) was NOT taught
> yet → Phase 2.** Mark Week 3 as partial.

---

## 0. Scale &amp; sources — read before anything

This is a large week: **~449 captures** (Clase 1: 101 · Clase 2: 132 · Clase 3: 213)
in `~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 3/Clase {1,2,3}/`.
The content is dense but single-theme (joints). Verified structure (what each class
covered) is in §4; **open the captures to confirm detail** you turn into items —
don't invent ligaments or movements.

Coverage by class (verified):
- **Clase 1**: joint classification + synovial composition + **TMJ (ATM)** + start of
  vertebral-column joints.
- **Clase 2**: vertebral-column joints (the 6 groups) + upper-limb joints
  (sternoclavicular, shoulder, elbow, wrist, hand).
- **Clase 3**: hand joints + lower-limb joints (hip with blood supply/innervation,
  knee, tibiofibular, ankle).

```bash
cd ~/med-core-app
npm run build                                  # clean first
sed -n '5,28p'  src/data/modules.ts            # anatomia modules (uad, s2, repaso-p2)
sed -n '20,45p' src/data/colors.ts             # osteologia palette (11 fields) — copy pattern
sed -n '54,75p' src/types/index.ts             # TopicColorKey union
sed -n '150,175p' src/data/plans/uad-medicina.ts   # Week-3 plan block (Artrología y Miología I)
grep -n "id: 'cox-q" src/data/anatomia-uad-quizzes.ts | tail -1
git log --oneline -6
```
Collisions: `grep -rn "artrologia\|articulaciones-\|'atm-\|'acol-\|'amsup-\|'aminf-" src/`

---

## 1. Objective — five joint topics + a Week-3 module

| Layer | File | What to add |
|---|---|---|
| Study guides | `anatomia-uad-topics.ts` | **5 Topics** (§2) |
| Bank | `anatomia-uad-quizzes.ts` | ~28 `Question` total, one prefix per topic |
| Subject sheet | `plans/uad-medicina.ts` | Week-3 `topicIds`; **partial** (miología pending) |
| Module | `modules.ts` | new `anatomia-uad-s3` |
| Color | `types/index.ts` + `colors.ts` | add `artrologia` colorKey (or reuse `locomotor`) |

**Color:** prefer adding one new key **`artrologia`** so joints read differently from
bones (`osteologia`). Copy the `osteologia` block in `TOPIC_COLORS` (it has **11
fields**), retune the hue, add `'artrologia'` to the `TopicColorKey` union, and
**verify in light AND dark** (`tailwind.config.js` overrides `zinc`). If you'd rather
not add a key, reuse the existing `locomotor` key — but not `osteologia`.

Never renumber existing `sectionId`s.

---

## 2. The five Topics (all `colorKey: 'artrologia'`)

1. **`artrologia-generalidades`** — *"Artrología: clasificación y articulación
   sinovial"* · prefix `art-q` · atlas optional.
2. **`articulacion-temporomandibular`** — *"Articulación temporomandibular (ATM)"* ·
   prefix `atm-q`.
3. **`articulaciones-columna`** — *"Articulaciones de la columna vertebral"* ·
   prefix `acol-q`.
4. **`articulaciones-miembro-superior`** — *"Articulaciones del miembro superior"* ·
   prefix `amsup-q`.
5. **`articulaciones-miembro-inferior`** — *"Articulaciones del miembro inferior"* ·
   prefix `aminf-q`.

Each: 5–8 sections, variety of `BlockType`, `keyTerms`, 6–8 `keyPoints`, one
terminology `note` (§3).

---

## 3. Terminology rule (TA primary · classic in parentheses)

Classic term also counts as correct in items. Mapping for this week:

| TA (primary) | classic (professor) |
|---|---|
| Articulación sinovial | diartrosis |
| Articulación cartilaginosa | anfiartrosis |
| Articulación fibrosa | sinartrosis |
| Esferoidea | enartrosis |
| Selar / en silla de montar | encaje recíproco |
| Plana | artrodia |
| Ligamento longitudinal anterior / posterior | ligamento longitudinal común anterior / posterior |
| Ligamentos flavos | ligamentos amarillos |
| Ligamento nucal | ligamento cervical posterior |
| Articulación atlantooccipital | occipitoatloidea |
| Ligamento esfenomandibular / estilomandibular | esfenomaxilar / estilomaxilar |
| Labrum acetabular | rodete cotiloideo |
| Ligamento de la cabeza del fémur | ligamento redondo |
| Complejo del fibrocartílago triangular | ligamento triangular |
| Articulación radiocarpiana | articulación de la muñeca |

---

## 4. Verified content per topic — write in Spanish

### 4.1 artrologia-generalidades
- **Clasificación por el material que une** (con movilidad): **sinoviales
  (diartrosis)** → móviles · **cartilaginosas (anfiartrosis)** → semimóviles ·
  **fibrosas (sinartrosis)** → no móviles.
- **Composición de la articulación sinovial**: superficies articulares lisas
  recubiertas de **cartílago hialino**, **cápsula articular (fibrosa)**, **ligamentos
  de sostén**, **membrana sinovial**, **líquido sinovial**.
- **Clasificación de las sinoviales por ejes/forma**: **multiaxiales** → 1.
  esferoidea (enartrosis) · **biaxiales** → 2. condílea (elipsoidal), 3. selar
  (encaje recíproco / silla de montar) · 4. plana (artrodia). (Confirma en las
  capturas si el profesor añadió uniaxiales: troclear/gínglimo y trocoide/pivote.)
- Ejemplos que usó: glenohumeral (esferoidea), radiocarpiana (condílea),
  trapeciometacarpiana (selar), tarsometatarsianas (plana).

### 4.2 articulacion-temporomandibular (ATM)
- **Cápsula articular**; **disco articular** (cara superior cóncavo-convexa, inferior
  cóncava); inserción del **pterigoideo lateral**.
- **Ligamentos**: **temporomandibular**, **esfenomandibular (esfenomaxilar)**,
  **estilomandibular (estilomaxilar)**.
- **Movimientos y músculos**: **descenso** (pterigoideo lateral, digástrico,
  milohioideo, geniohioideo, gravedad) · **elevación** (temporal, masetero,
  pterigoideo medial) · **protrusión** (pterigoideos medial y lateral, masetero) ·
  **retracción** (temporal).

### 4.3 articulaciones-columna (los 6 grupos)
1. **Entre los cuerpos vertebrales**: discos intervertebrales; **ligamento
   longitudinal anterior** y **posterior**.
2. **Entre los arcos vertebrales**: **articulaciones cigapofisarias (sinoviales)**;
   ligamentos **supraespinoso**, **nucal (cervical posterior)**, **interespinosos**,
   **flavos (amarillos)**, **intertransversos**.
3. **Atlantooccipital (occipitoatloidea)**: sinovial condílea; **membranas
   atlantooccipital anterior y posterior**.
4. **Atlantoaxial (atlas–axis)**.
5. **Costovertebrales (vértebras–costillas)**.
6. **Sacroilíaca (sacro–hueso coxal)**.

### 4.4 articulaciones-miembro-superior
- **Esternoclavicular**: tipo **doble encaje recíproco**; superficies (manubrio, 1.er
  cartílago costal, cabeza medial de la clavícula); **fibrocartílago interarticular**;
  **dos cavidades sinoviales**; ligamentos esternoclaviculares **anterior, posterior,
  superior**, **interclavicular**, **costoclavicular**; movimientos
  (descenso/elevación, protracción/retracción, circunducción).
- **Hombro**: **glenohumeral (esferoidea/enartrosis)** + **acromioclavicular**.
- **Codo** (confirma en capturas: húmero-cubital + húmero-radial + radiocubital
  proximal; tróclea/gínglimo).
- **Radiocarpiana (muñeca)**: **condílea**; superficies radio + escafoides, semilunar,
  piramidal; **complejo del fibrocartílago triangular (ligamento triangular)** —base
  en el radio, vértice hacia el cúbito; ligamentos radiocarpiano palmar,
  cubitocarpiano palmar, medial, lateral, radiocarpiano dorsal; movimientos
  flexión/extensión, abducción/aducción.
- **Mano**: del carpo (1.ª fila, 2.ª fila, mediocarpiana), **carpometacarpianas**
  (pulgar / últimos 4 dedos), **intermetacarpianas**, **metacarpofalángicas**,
  **interfalángicas**.

### 4.5 articulaciones-miembro-inferior
- **Coxofemoral (esferoidea/enartrosis)**: **labrum acetabular (rodete cotiloideo)**,
  ligamento transverso; ligamentos capsulares **iliofemoral, pubofemoral,
  isquiofemoral**, **zona orbicular**; **ligamento de la cabeza del fémur (redondo)**;
  bolsa serosa iliopectínea. **Irrigación**: a. obturatriz (rama acetabular), a.
  circunfleja femoral lateral y medial (ramas retinaculares). **Inervación**: n.
  femoral, obturador, glúteo superior, cuadrado femoral.
- **Rodilla** (confirma en capturas: cóndilos, meniscos, ligamentos cruzados y
  colaterales, rótula).
- **Tibiofibular proximal**: **plana**; ligamentos anterior y posterior de la cabeza
  del peroné. **Tibiofibular distal**: **sindesmosis (fibrocartilaginosa)**.
- **Tobillo (talocrural)** (confirma en capturas).

### 4.6 Confusions to target (≥25 % of the combined bank)
1. **sinovial=diartrosis=móvil · cartilaginosa=anfiartrosis=semimóvil ·
   fibrosa=sinartrosis=inmóvil.**
2. **Esferoidea (multiaxial: hombro/cadera)** vs condílea (biaxial) vs plana
   (artrodia) vs selar (silla de montar: pulgar).
3. **ATM**: qué músculos hacen descenso vs elevación.
4. **Columna**: ligamentos de los cuerpos (longitudinal anterior/posterior) vs de los
   arcos (supraespinoso, interespinoso, flavos).
5. **Atlantooccipital = condílea** (sí móvil).
6. **Esternoclavicular** tiene fibrocartílago + **dos** cavidades sinoviales.
7. **Muñeca = condílea**; el fibrocartílago triangular tiene **base en el radio,
   vértice hacia el cúbito**.
8. **Cadera**: iliofemoral (el más fuerte), pubofemoral, isquiofemoral; el ligamento
   redondo lleva la arteria a la cabeza femoral; el labrum profundiza el acetábulo.
9. **Tibiofibular distal = sindesmosis (fibrosa)** vs proximal = plana (sinovial).

---

## 5. Deliverables

### 5.1 Topics (`anatomia-uad-topics.ts`)
Create the five Topics of §2/§4. Each opens (section 1) with the terminology `note`
(§3). Use `table` for classifications and ligament lists, `comparison` for the
classic traps (esferoidea vs condílea; sinartrosis vs anfiartrosis vs diartrosis;
sindesmosis distal vs plana proximal), `list` for the 6 column groups and the hand
joint list, `definition` for labrum, membrana sinovial, sindesmosis.

### 5.2 Bank (`anatomia-uad-quizzes.ts`)
~28 items total, appended after `cox-q`/`minf-q` blocks, one prefix per topic
(`art-q` ~6, `atm-q` ~4, `acol-q` ~6, `amsup-q` ~6, `aminf-q` ~6). Header comment per
block; descending study value. Distractors from a sibling joint/ligament (e.g.
attribute the ligamento redondo to the knee, or "sinartrosis" to a mobile joint);
`explanation` justifies the key and rules out one distractor; `correctIndex` spread
0–3. ≥7 items on §4.6.

### 5.3 Module (`modules.ts`)
```ts
{
  id: 'anatomia-uad-s3',
  badge: 'UAD · Anatomía Humana y Disección I — Semana 3',
  title: 'Artrología — articulaciones',
  subtitle: 'Clasificación, ATM, columna y articulaciones de los miembros. Miología por impartir.',
  emoji: '🦵',
  topicIds: ['artrologia-generalidades','articulacion-temporomandibular','articulaciones-columna','articulaciones-miembro-superior','articulaciones-miembro-inferior'],
}
```
Place after `anatomia-uad-s2` (before or after `anatomia-uad-repaso-p2`, your call).

### 5.4 Subject sheet (`plans/uad-medicina.ts`, Week 3)
- `estado: 'impartido'` + a comment that this week is **PARTIAL**: Artrología taught,
  **Miología pending (Phase 2)**.
- `topicIds`: the five joint topics.
- Split the `temas` so the artrología bullets read as taught and the miología bullets
  as "por impartir".
- Add `fuentes` (Moore, capítulos de articulaciones de cada región; offset book =
  PDF − 24, both numberings).
- `content.materiales`:
  ```ts
  { title: 'Semana 3 · Clase 1 — Artrología: clasificación, ATM e inicio de columna', file: 'Semana 3 - Clase 1 Artrologia y ATM.pdf', kind: 'Clase' },
  { title: 'Semana 3 · Clase 2 — Articulaciones de la columna y del miembro superior', file: 'Semana 3 - Clase 2 Columna y Miembro Superior.pdf', kind: 'Clase' },
  { title: 'Semana 3 · Clase 3 — Articulaciones de la mano y del miembro inferior', file: 'Semana 3 - Clase 3 Mano y Miembro Inferior.pdf', kind: 'Clase' },
  ```

### 5.5 Library
Compose one PDF per class (they are large — hundreds of images each) and upload to
`library.medcore.icu/anatomia-humana-diseccion-1/` with the §5.4 names:
```bash
cd "~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 3"
for n in 1 2 3; do
python3 -c "
from PIL import Image; import glob
ims=[Image.open(f).convert('RGB') for f in sorted(glob.glob('Clase $n/*.png'))]
names={1:'Semana 3 - Clase 1 Artrologia y ATM.pdf',2:'Semana 3 - Clase 2 Columna y Miembro Superior.pdf',3:'Semana 3 - Clase 3 Mano y Miembro Inferior.pdf'}
ims[0].save(names[$n], save_all=True, append_images=ims[1:], resolution=130); print(names[$n], len(ims))
"
done
```
If any PDF exceeds ~30 MB, compress with Ghostscript (it's screenshots, not a
textbook). **Show me the upload commands before running them.** Don't commit PNG/PDF.

### 5.6 Atlas — optional this round
The joint content is heavily diagram-based and would need several plates. **Defer
Atlas to a follow-up** unless trivial; if you do add one, start with a single
"clasificación de articulaciones sinoviales" plate and follow the
`2026-08-05-laminas-atlas-imagen.md` architecture (image = no text).

---

## 6. Verification

```bash
npm run build
grep -c "id: 'art-q\|id: 'atm-q\|id: 'acol-q\|id: 'amsup-q\|id: 'aminf-q" src/data/anatomia-uad-quizzes.ts   # ≈ 28
grep -n "artrologia-generalidades\|articulacion-temporomandibular\|articulaciones-columna\|articulaciones-miembro-superior\|articulaciones-miembro-inferior" src/data/topics.ts src/data/modules.ts src/data/plans/uad-medicina.ts
grep -n "artrologia" src/types/index.ts src/data/colors.ts     # new colorKey wired (11 fields) if added
```

Manual (`npm run dev`):
- [ ] `/estudio`: a **Semana 3** module with the five joint topics, in the new
      `artrologia` color, legible in **light and dark**.
- [ ] Each `/topic/…`: terminology `note` present; tables/comparisons render.
- [ ] `/plan/…anatomia-…-1`: Week 3 lists the five topics and the three class
      materials; reads as **partial** (miología pending).
- [ ] The five quizzes play; earlier topics/banks untouched.

**Mandatory self-audit:** verify 4 items against §4 — a classification item
(diartrosis=móvil), the ATM elevation muscles, the hip iliofemoral-is-strongest item,
and the distal tibiofibular = sindesmosis item. Report the result and per-topic item
counts.

---

## 7. Non-objectives
- **Don't load Miología (muscles)** — not taught yet; that's Phase 2 and the rest of
  the Week-3/Week-4 syllabus.
- Don't touch osteology topics, Week 1/2, the repaso topic, Inglés, PAI,
  `unisa-lmgc`, `lmgc-modules`.
- Don't reuse `osteologia` for joints. Don't renumber `sectionId`s. No PDF/PNG in the
  repo. No `npm run deploy`.

---

## 8. Delivery (atomic commits)
1. `feat(anatomia): colorKey artrologia`
2. `feat(anatomia): Topics de artrología — generalidades y ATM (Semana 3)`
3. `feat(anatomia): Topics de articulaciones de columna y miembros (Semana 3)`
4. `feat(quizzes): banco de artrología — ~28 reactivos`
5. `feat(plan,modules): Semana 3 Artrología impartida; miología pendiente`

Report: which regions of §4 you confirmed from the captures vs. left summarized, the
real Moore pages (both numberings), the sizes of the three library PDFs, and the
self-audit result.

---

## 9. Phase 2 (pending)
When Miología is taught (tipos de músculos; músculos de cabeza, cuello, región
hioidea/prevertebral; cervicales, dorsales, lumbares; tórax y diafragma), a sibling
prompt adds the muscle Topics and flips Week 3 to fully taught.
