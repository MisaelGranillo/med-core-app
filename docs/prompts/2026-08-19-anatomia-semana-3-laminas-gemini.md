# PROMPT — Atlas plates 1–5 · Artrología (Week 3) — for **Gemini (Plus)**

> **Image generator: Gemini (Plus)** — "Nano Banana" / Gemini image model. Paste each
> plate's prompt into Gemini. Consumer: Claude Code → `public/atlas/`.
> Anatomy I · UAD · Week 3 (Artrología). Regenerates plates 1–5 to **replace** the
> current files.

**Replace flow (no code change):** each plate keeps its **exact existing filename**,
so you just overwrite the PNG in `public/atlas/` and redeploy — the `AtlasTopic`
wiring and paths stay valid. Export each as **PNG, portrait 2:3 (≈1024 × 1536)**.

**Gemini notes:** Gemini follows "no text" and aspect ratio better than ChatGPT, but
can still slip in labels — keep the ABSOLUTE RULES block and, if any text appears,
reply "regenerate the same image with zero text or labels." Same house style as the
master doc (`2026-08-05-laminas-atlas-imagen.md`): pale background `#EFF6FF`, flat
editorial medical illustration (no photorealism / 3D render / engraving / watercolor),
flat mid‑saturation colors distinct **in grayscale** and color‑blind‑safe, **bottom
third empty** for the legend Code composes. **The image AI writes no text**; Claude
Code overlays every label (TA primary · classic in parentheses).

Paste this block at the end of **every** plate prompt:
```
ABSOLUTE RULES:
- NO text, words, letters, labels, titles or legend anywhere. Zero typography, in any language.
- NO leader lines, callout arrows or empty speech bubbles.
- NO watermark, signature, logo or decorative border.
- NO aged-paper background, texture or gradient.
- Each structure = ONE flat, uniform color, constant across the whole image.
- Boundaries between structures read as the crisp edge between two colors, not a drawn line on top.
- Vertical 2:3 (portrait, ~1024×1536). Bottom third empty, background color only.
```

---

## PLATE 1 — Clasificación de las articulaciones sinoviales (por forma)
Replace file: `public/atlas/artrologia-clasificacion.png`

```
A clean educational medical illustration comparing the shapes of synovial joints, as
six simplified bone-pair diagrams arranged in a 2-wide × 3-tall grid inside a portrait
2:3 canvas. Each cell shows one simplified pair of bone ends meeting to form one joint
type, flat editorial style:
- Ball-and-socket: a rounded ball of one bone sitting in a cup of another.
- Condyloid/ellipsoidal: an oval convex end meeting a shallow oval socket.
- Saddle: two concave-convex saddle-shaped surfaces interlocking.
- Plane/gliding: two nearly flat surfaces sliding on each other.
- Hinge: a spool-shaped end fitting a matching notch, like a door hinge.
- Pivot: a rounded peg of bone rotating inside a ring.
Each of the six joints uses its OWN flat color for both of its bones, so the six cells
are easy to tell apart. Simple and diagrammatic, no realistic texture. Bottom third of
the canvas empty.
```
+ ABSOLUTE RULES.
**Code legend (TA · classic):** Esferoidea (enartrosis) · Condílea (elipsoidal) · Selar
/ silla de montar (encaje recíproco) · Plana (artrodia) · Troclear (gínglimo) · Trocoide
(pivote).

---

## PLATE 2 — Articulación temporomandibular (ATM)
Replace file: `public/atlas/articulacion-temporomandibular.png`

```
A clean editorial medical illustration of the human temporomandibular joint, lateral
(side) view of the skull region around the jaw joint, filling the upper two-thirds of a
portrait 2:3 canvas. Show: the temporal bone with its mandibular fossa above, the
rounded head (condyle) of the mandible below, and between them the oval articular disc.
Draw the joint capsule as a distinct band enclosing the joint. Flat distinct colors:
temporal bone one color, mandible another, articular disc a third clearly different
color, capsule a fourth. Simplified, not photorealistic. Bottom third empty.
```
+ ABSOLUTE RULES.
**Code legend:** Hueso temporal · Fosa mandibular · Cabeza (cóndilo) de la mandíbula ·
Disco articular · Cápsula articular · Ligamento temporomandibular. Markers if needed:
(1) disco articular, (2) cóndilo, (3) fosa mandibular, (4) cápsula.

---

## PLATE 3 — Articulación coxofemoral (cadera)
Replace file: `public/atlas/articulaciones-miembro-inferior.png`

```
A clean editorial medical illustration of the human hip joint, anterior (front) view,
filling the upper two-thirds of a portrait 2:3 canvas. Show the hip bone (pelvis) with
its cup-shaped acetabulum and the head of the femur seated inside it, with the femoral
neck and greater trochanter. Over the joint, draw the main capsular ligaments as
distinct flat-colored bands spiraling from pelvis to femur (one strong anterior band
shaped like an inverted Y, and a lower medial band). Flat distinct colors: hip bone one
color, femur another, each ligament band its own separate color. Simplified, not
photorealistic. Bottom third empty.
```
+ ABSOLUTE RULES.
**Code legend (TA · classic):** Hueso coxal · Cabeza del fémur · Acetábulo · Labrum
acetabular (rodete cotiloideo) · Ligamento iliofemoral (el más fuerte, en Y) · Ligamento
pubofemoral · Ligamento isquiofemoral (posterior) · Ligamento de la cabeza del fémur
(redondo).

---

## PLATE 4 — Articulaciones de la columna vertebral
Replace file: `public/atlas/articulaciones-columna.png`

```
A clean educational medical illustration of three stacked human vertebrae seen from the
side (lateral view), filling the upper two-thirds of a portrait 2:3 canvas. Show
clearly: the vertebral bodies stacked in front with an intervertebral disc between each
pair; the vertebral arches and spinous processes behind; and the small facet joints
where the arches meet. Draw the main ligaments as separate flat-colored bands: one long
band down the FRONT of the bodies, one long band down the BACK of the bodies, a short
band between the arches, and a band connecting the tips of the spinous processes. Flat
distinct colors: bone one color, intervertebral discs another, and EACH ligament band
its own separate color. Simple and diagrammatic, not photorealistic. Bottom third empty.
```
+ ABSOLUTE RULES.
**Code legend (TA · classic):** Cuerpo vertebral · Disco intervertebral · Articulación
cigapofisaria (facetaria) · Ligamento longitudinal anterior (frente) · Ligamento
longitudinal posterior (detrás) · Ligamento flavo (amarillo) · Ligamento supraespinoso e
interespinoso.

---

## PLATE 5 — Articulaciones del miembro superior (complejo del hombro)
Replace file: `public/atlas/articulaciones-miembro-superior.png`

```
A clean editorial medical illustration of the bones of the human right shoulder girdle,
anterior (front) view, filling the upper two-thirds of a portrait 2:3 canvas. Show: the
upper part of the sternum in the middle, the clavicle running sideways from the sternum
to the shoulder, the scapula behind the shoulder, and the head of the humerus meeting
the scapula. This displays three joints: clavicle-to-sternum, clavicle-to-acromion, and
humerus-head-to-scapula socket. Flat distinct colors: sternum one color, clavicle
another, scapula another, humerus another. Simplified, not photorealistic. Bottom third
empty.
```
+ ABSOLUTE RULES.
**Code legend (TA · classic):** Esternón · Clavícula · Escápula · Cabeza del húmero ·
Articulación esternoclavicular (doble encaje recíproco) · Articulación acromioclavicular ·
Articulación glenohumeral (esferoidea / enartrosis).

---

## After generating — replace in MedCore
Overwrite these five files in `public/atlas/` (same names → no code change), keep PNG,
portrait 2:3:
`artrologia-clasificacion.png` · `articulacion-temporomandibular.png` ·
`articulaciones-miembro-inferior.png` · `articulaciones-columna.png` ·
`articulaciones-miembro-superior.png`.
The `AtlasTopic` wiring (from the earlier Week‑3 lámina docs) already points to these
paths — nothing else to change. Redeploy when ready (Misael authorizes `npm run deploy`).
