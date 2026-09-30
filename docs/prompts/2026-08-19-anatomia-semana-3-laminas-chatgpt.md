# PROMPT — Atlas plates · Artrología (Week 3) — for **ChatGPT** image generation

> **Image generator: ChatGPT** (GPT‑4o image tool). Paste each plate's prompt into
> ChatGPT. Consumer: Claude Code → `src/data/atlas-topics.ts` + `public/atlas/`.
> Anatomy I · UAD · Week 3 (Artrología). Companion to
> `2026-08-19-anatomia-semana-3-artrologia.md`.

Follows the architecture of `2026-08-05-laminas-atlas-imagen.md` (now
ChatGPT‑addressed): **the image AI writes no text.** ChatGPT is *especially* prone to
inserting garbled labels, so enforce "cero tipografía" hard and **iterate
conversationally** — if a plate comes back with text or repeated colors, reply
"regenera la misma imagen sin ningún texto ni etiqueta" / "haz cada estructura de un
color plano distinto" instead of rewriting the prompt.

**Global style (all plates):** vertical **2:3, 1024 × 1536**; background white or very
pale blue `#EFF6FF`, flat (no texture/vignette/paper); contemporary editorial medical
illustration (no photorealism, no 3D render, no Gray‑style engraving, no watercolor);
flat mid‑saturation colors, mutually distinct **and distinguishable in grayscale**,
safe for red‑green color blindness; **leave the bottom third empty** for the legend
Code composes.

At the end of **every** plate prompt, paste this block (repeat as a correction if
ChatGPT ignores it):
```
REGLAS ABSOLUTAS:
- NO incluyas ningún texto, palabra, letra, etiqueta, título ni leyenda. Cero tipografía, en ningún idioma.
- NO dibujes líneas guía, flechas de rótulo ni bocadillos.
- NO añadas marca de agua, firma, logo ni borde decorativo.
- NO uses fondo de papel envejecido, textura ni degradado.
- Cada estructura = UN color plano, uniforme y constante en toda la imagen.
- Los límites entre estructuras se ven como el borde nítido entre dos colores, no como una línea dibujada encima.
- Formato vertical 2:3 (1024 × 1536). Tercio inferior vacío, solo fondo.
```
If text persists after 2–3 tries: ask for "solo las formas anatómicas en bloques de
color plano, sin ningún rótulo." Never edit text in post — regenerate.

---

## PLATE 1 — Clasificación de las articulaciones sinoviales (por forma)
Final file: `public/atlas/artrologia-clasificacion.png`

### ChatGPT prompt
```
A clean educational medical illustration comparing the shapes of synovial joints,
as six simplified bone-pair diagrams arranged in a 2 (wide) × 3 (tall) grid inside a
tall vertical canvas (portrait 2:3). Each cell shows a single simplified pair of
bone ends that meet to form one joint type, drawn in flat editorial style:
- Ball-and-socket joint: a rounded ball of one bone sitting in a cup of another.
- Condyloid / ellipsoidal joint: an oval convex end meeting a shallow oval socket.
- Saddle joint: two concave-convex saddle-shaped surfaces interlocking.
- Plane / gliding joint: two nearly flat surfaces sliding on each other.
- Hinge joint: a spool-shaped end fitting a matching notch (like a door hinge).
- Pivot joint: a rounded peg of bone rotating inside a ring.
Each of the six joints uses its OWN flat color for both bones so the six cells are
easy to tell apart. Simple, diagrammatic, no realistic texture. The bottom third of
the canvas is empty background.
```
Then paste **REGLAS ABSOLUTAS**.
> ChatGPT note: it will *want* to label each cell — insist none. If it merges cells
> or adds arrows, ask for "six separate simple bone-pair diagrams in a grid, no
> arrows, no text."

**Legend Claude Code composes (TA primary · classic in parentheses):** Esferoidea
(enartrosis) · Condílea (elipsoidal) · Selar / en silla de montar (encaje recíproco)
· Plana (artrodia) · Troclear (gínglimo) · Trocoide (pivote). Atlas questions ask
which cell is which shape and a clinical example (hombro/cadera = esferoidea; pulgar
= selar).

---

## PLATE 2 — Articulación temporomandibular (ATM)
Final file: `public/atlas/articulacion-temporomandibular.png`

### ChatGPT prompt
```
A clean editorial medical illustration of the human temporomandibular joint, lateral
(side) view of the skull region around the jaw joint, filling the upper two-thirds
of a tall vertical canvas (portrait 2:3). Show: the temporal bone with its mandibular
fossa above, the rounded head (condyle) of the mandible below, and between them the
oval articular disc. Draw the joint capsule as a distinct band enclosing the joint.
Use flat distinct colors: the temporal bone one color, the mandible another, the
articular disc a third clearly different color, the capsule a fourth. Simplified,
diagrammatic, not photorealistic. The bottom third of the canvas is empty background.
```
Then paste **REGLAS ABSOLUTAS**.

**Legend Code composes:** Hueso temporal · Fosa mandibular · Cabeza (cóndilo) de la
mandíbula · **Disco articular** · Cápsula articular · Ligamento temporomandibular.
Max 4 numeric markers if color isn't enough: (1) disco articular, (2) cóndilo
mandibular, (3) fosa mandibular, (4) cápsula. Questions target the disc and the
condyle.

---

## PLATE 3 — Articulación coxofemoral (cadera)
Final file: `public/atlas/articulaciones-miembro-inferior.png`

### ChatGPT prompt
```
A clean editorial medical illustration of the human hip joint, anterior (front) view,
filling the upper two-thirds of a tall vertical canvas (portrait 2:3). Show the hip
bone (pelvis) with its cup-shaped acetabulum and the head of the femur seated inside
it, with the femoral neck and greater trochanter. Over the joint, draw the main
capsular ligaments as distinct flat-colored bands spiraling from the pelvis to the
femur (one strong anterior band shaped like an inverted Y, and a lower medial band).
Use flat distinct colors: the hip bone one color, the femur another, and each
ligament band its own separate color. Simplified and diagrammatic, not photorealistic.
The bottom third of the canvas is empty background.
```
Then paste **REGLAS ABSOLUTAS**.

**Legend Code composes (TA primary · classic in parentheses):** Hueso coxal ·
Cabeza del fémur · Acetábulo · **Labrum acetabular (rodete cotiloideo)** · Ligamento
iliofemoral (el más fuerte, en Y invertida) · Ligamento pubofemoral · Ligamento
isquiofemoral (posterior) · Ligamento de la cabeza del fémur (redondo). Questions:
which ligament is strongest (iliofemoral); what deepens the acetabulum (labrum).

---

## For Claude Code — wire these AtlasTopics (upgrade of the content prompt §5.6)

In `src/data/atlas-topics.ts`, add three `AtlasTopic`s so these plates become
interactive, following the existing `AtlasTopic` pattern (6–8 `AtlasQuestion` each,
`difficulty` mix, TA‑primary with classic in parentheses, classic also correct):

- `id: 'artrologia-clasificacion'` → `imagePath: '/atlas/artrologia-clasificacion.png'`
  (questions: match shape → joint type → example).
- `id: 'articulacion-temporomandibular'` → `imagePath:
  '/atlas/articulacion-temporomandibular.png'` (disc, condyle, movements/muscles).
- `id: 'articulaciones-miembro-inferior'` → `imagePath:
  '/atlas/articulaciones-miembro-inferior.png'` (ligaments, labrum, ligamento redondo).

Each `AtlasTopic` must not break the build if its PNG isn't present yet (same
mechanism as the osteology atlas topics). Prefix the `AtlasQuestion` ids `acl-a`,
`atm-a`, `aminf-a` respectively; check for duplicates. Do **not** renumber anything
else. Commit: `feat(atlas): láminas de artrología — clasificación, ATM y cadera`.
