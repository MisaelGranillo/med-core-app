# PROMPT — Atlas plate · Miembro inferior óseo (Week 2 · Class 4)

> For: image generator (**Gemini / Nano Banana**). Consumer: Claude Code →
> `src/data/atlas-topics.ts` + `public/atlas/miembro-inferior-oseo.png`.
> Anatomy I · UAD · Week 2 · Class 4. Sibling of
> `2026-08-12-anatomia-semana-2-clase-4.md` (AtlasTopic §5.5).

Same architecture as `2026-08-05-laminas-atlas-imagen.md`: **the image AI writes no
text.** Gemini produces only the illustration with bones differentiated by flat
color; Claude Code overlays all verified Spanish text (TA primary · classic in
parentheses). Apply the master doc's global style spec (§2) and hard rules (§3):
vertical 2:3, background `#EFF6FF`, editorial non-photorealistic illustration, flat
colors distinguishable in grayscale and for red–green color blindness, bottom third
empty for the legend.

---

## PLATE — Miembro inferior óseo

Final file: `public/atlas/miembro-inferior-oseo.png`

### Prompt for Gemini

```
Editorial medical illustration of the bones of the right human lower limb (adult),
excluding the hip bone, in views inside a vertical 2:3 canvas.

LAYOUT:
- Left, tall: femur, isolated, anterior view (head, neck, greater and lesser
  trochanters, shaft, condyles).
- Center, tall: tibia and fibula side by side, anterior view, in anatomical
  position (tibia medial, fibula lateral), showing both malleoli at the bottom.
- Right, lower: bones of the foot from above (dorsal view) — tarsals, five
  metatarsals and the phalanges.
- The bottom third of the canvas stays completely empty, background color only.

COLOR CODE — each bone a flat color, constant across views:
- Femur: warm orange, medium
- Tibia: medium blue
- Fibula (peroné): medium green
- Tarsal bones (as a group): rose coral
- Metatarsals: light blue-gray
- Phalanges: warm light gray
- Mutually distinguishable and also distinguishable in grayscale.

MANDATORY ANATOMICAL ACCURACY:
- Femur is the longest bone, with a rounded head on a medial neck and two distal
  condyles; tibia is the thicker medial leg bone, fibula the thin lateral one.
- In anatomical position the tibia is MEDIAL and the fibula LATERAL; the medial
  malleolus belongs to the tibia and the lateral malleolus to the fibula.
- Foot: 7 tarsal bones (talus articulating superiorly), 5 metatarsals, and
  phalanges (great toe with two, the others with three).
- Correct proportions and articulations.
```

Append the master doc's **REGLAS ABSOLUTAS** block (no typography, no arrows, each
bone one flat color, boundaries as color edges, 2:3, empty bottom third). If text
appears anyway: **regenerate.**

### Color key & legend composed by Claude Code (verified Spanish text)

TA primary · classic in parentheses:

- Fémur (naranja) — cabeza y fóvea (fosita del ligamento redondo), trocánter mayor
  y menor, línea áspera, cóndilos medial y lateral
- Tibia (azul) — cóndilos, tuberosidad de la tibia, maléolo medial (interno),
  eminencia intercondílea
- Fíbula / peroné (verde) — cabeza, maléolo lateral (externo)
- Tarso (coral) — talus (astrágalo), calcáneo, navicular (escafoides), cuboides,
  cuneiformes medial/intermedio/lateral
- Metatarsianos I–V — con tuberosidad estiloidea en el 5.º
- Falanges — proximal, media, distal

Numeric markers (max 6), only where color doesn't suffice: (1) trocánter mayor,
(2) línea áspera (posterior — omit if only anterior view), (3) maléolo medial (tibia),
(4) maléolo lateral (fíbula), (5) talus/astrágalo, (6) calcáneo.
