# PROMPT — Atlas plates · Artrología (Week 3) — remaining plates for **ChatGPT (Go)**

> **Image generator: ChatGPT — Go plan.** Paste each plate's prompt into ChatGPT.
> Consumer: Claude Code → `src/data/atlas-topics.ts` + `public/atlas/`.
> Anatomy I · UAD · Week 3. Continuation of
> `2026-08-19-anatomia-semana-3-laminas-chatgpt.md` (plates 1–3 already done and
> placed in `public/atlas/`). Remaining: **column** and **upper limb**.

**Go‑plan notes:** ChatGPT Go has a **limited daily image quota** and the same
tendency to hallucinate text. So: do **one plate at a time**; keep each a **single
simple scene** (not multi‑panel) to minimize regenerations; if text/colors are wrong,
correct in the next message ("regenera sin ningún texto", "cada estructura de un color
plano distinto") rather than starting over. Same global style as the master doc:
vertical **2:3, 1024 × 1536**, pale background, flat editorial illustration, colors
distinct in grayscale and color‑blind‑safe, **bottom third empty** for the legend.

Paste this at the end of **each** plate prompt (repeat as a correction if ignored):
```
REGLAS ABSOLUTAS:
- NO incluyas ningún texto, palabra, letra, etiqueta, título ni leyenda. Cero tipografía, en ningún idioma.
- NO dibujes líneas guía, flechas de rótulo ni bocadillos.
- NO añadas marca de agua, firma, logo ni borde decorativo.
- NO uses fondo de papel envejecido, textura ni degradado.
- Cada estructura = UN color plano, uniforme y constante en toda la imagen.
- Los límites entre estructuras se ven como el borde nítido entre dos colores, no como una línea encima.
- Formato vertical 2:3 (1024 × 1536). Tercio inferior vacío, solo fondo.
```

---

## PLATE 4 — Articulaciones de la columna vertebral
Final file: `public/atlas/articulaciones-columna.png`

Keep it to **three stacked vertebrae in a lateral (side) view** — simple, so Go
renders it in one or two tries.

### ChatGPT prompt
```
A clean educational medical illustration of three stacked human vertebrae seen from
the side (lateral view), filling the upper two-thirds of a tall vertical canvas
(portrait 2:3). Show clearly: the vertebral bodies stacked in front with an
intervertebral disc between each pair; the vertebral arches and spinous processes
behind; and the small facet joints where the arches meet. Draw the main ligaments as
separate flat-colored bands: one long band running down the FRONT of the bodies, one
long band down the BACK of the bodies, a short band between the arches, and a band
connecting the tips of the spinous processes. Use flat distinct colors: the bone one
color, the intervertebral discs another, and EACH ligament band its own separate
color. Simple and diagrammatic, not photorealistic. The bottom third of the canvas is
empty background.
```
Then paste **REGLAS ABSOLUTAS**.
> If Go crowds the drawing, ask for "solo tres vértebras de perfil, sencillas, con las
> bandas de ligamento en colores planos, sin texto."

**Legend Claude Code composes (TA primary · classic in parentheses):** Cuerpo
vertebral · Disco intervertebral · Articulación cigapofisaria (facetaria) ·
**Ligamento longitudinal anterior** (frente de los cuerpos) · **Ligamento
longitudinal posterior** (detrás de los cuerpos) · **Ligamento flavo (amarillo)**
(entre los arcos) · Ligamento supraespinoso e interespinoso (entre las apófisis
espinosas). Atlas questions: which ligament is on the front vs back of the bodies;
where the ligamentum flavum sits; which joints between arches are synovial.

---

## PLATE 5 — Articulaciones del miembro superior (complejo del hombro)
Final file: `public/atlas/articulaciones-miembro-superior.png`

The upper limb has four joints; a single clear image can't show all well on Go, so
this plate is the **shoulder complex** — the highest‑yield: sternoclavicular,
acromioclavicular and glenohumeral joints in one anterior view. (Wrist/elbow are
covered by the topic's text quiz, not this plate.)

### ChatGPT prompt
```
A clean editorial medical illustration of the bones of the human right shoulder
girdle, anterior (front) view, filling the upper two-thirds of a tall vertical canvas
(portrait 2:3). Show: the upper part of the sternum in the middle, the clavicle
running sideways from the sternum to the shoulder, the scapula behind the shoulder,
and the head of the humerus meeting the scapula. This displays three joints: where the
clavicle meets the sternum, where the clavicle meets the acromion of the scapula, and
where the humerus head meets the scapula's socket. Use flat distinct colors: sternum
one color, clavicle another, scapula another, humerus another. Simplified and
diagrammatic, not photorealistic. The bottom third of the canvas is empty background.
```
Then paste **REGLAS ABSOLUTAS**.
> If Go adds a full rib cage or clutter, ask for "solo esternón, clavícula, escápula y
> cabeza del húmero, de frente, en colores planos, sin texto."

**Legend Code composes (TA primary · classic in parentheses):** Esternón · Clavícula ·
Escápula · Cabeza del húmero · **Articulación esternoclavicular** (doble encaje
recíproco) · **Articulación acromioclavicular** · **Articulación glenohumeral**
(esferoidea / enartrosis). Atlas questions: name each joint; which is ball‑and‑socket;
which joint has a fibrocartilage disc and two synovial cavities (esternoclavicular).

---

## For Claude Code — wire these two AtlasTopics

Add two `AtlasTopic`s in `src/data/atlas-topics.ts`, matching the existing pattern
(6–8 `AtlasQuestion` each, difficulty mix, TA‑primary with classic in parentheses,
classic also counts as correct), and must not break the build if a PNG is missing:

- `id: 'articulaciones-columna'` → `imagePath: '/atlas/articulaciones-columna.png'`,
  question ids `acol-a` (ligaments front/back, ligamentum flavum, facet joints).
- `id: 'articulaciones-miembro-superior'` → `imagePath:
  '/atlas/articulaciones-miembro-superior.png'`, question ids `amsup-a` (name the three
  shoulder joints, ball‑and‑socket, sternoclavicular disc/2 cavities). Keep atlas
  questions to structures **visible in the plate** (shoulder complex); wrist/hand
  detail stays in the text quiz.

Check id duplicates; don't renumber anything else. Commit:
`feat(atlas): láminas de artrología — columna y complejo del hombro`.

---

## Status of the Week‑3 atlas set
- ✅ Plate 1 `artrologia-clasificacion.png` · Plate 2
  `articulacion-temporomandibular.png` · Plate 3 `articulaciones-miembro-inferior.png`
  (done, in `public/atlas/`).
- ⬜ Plate 4 `articulaciones-columna.png` · Plate 5
  `articulaciones-miembro-superior.png` (this document).
After these five, every Week‑3 artrología Topic has its plate. The `AtlasTopic`
wiring for plates 1–3 is in the companion doc; wiring for 4–5 is above.
