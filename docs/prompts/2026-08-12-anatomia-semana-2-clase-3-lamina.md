# PROMPT — Atlas plate · Hueso coxal (Week 2 · Class 3)

> For: image generator (**Gemini / Nano Banana**). Consumer: Claude Code →
> `src/data/atlas-topics.ts` + `public/atlas/hueso-coxal.png`.
> Anatomy I · UAD · Week 2 · Class 3. Sibling of
> `2026-08-12-anatomia-semana-2-clase-3.md` (AtlasTopic §5.5).

Same architecture as `2026-08-05-laminas-atlas-imagen.md`: **the image AI writes no
text.** In osteology the label *is* the content. Gemini produces only the
illustration with regions differentiated by flat color; Claude Code overlays all
verified Spanish text (TA primary · classic in parentheses).

Apply the **global style spec** (§2) and **hard rules** (§3) of that master doc:
vertical 2:3, background `#EFF6FF`, contemporary editorial medical illustration, no
photorealism, flat colors distinguishable in grayscale and for red–green color
blindness, bottom third left empty for the legend.

---

## PLATE — Hueso coxal

Final file: `public/atlas/hueso-coxal.png`

### Prompt for Gemini

```
Editorial medical illustration of the right human hip bone (os coxae) of an adult,
in two views inside a vertical 2:3 canvas.

LAYOUT:
- Top, larger: lateral (external) view of the isolated hip bone showing the
  acetabulum, the iliac crest, the greater and lesser sciatic notches and the
  obturator foramen.
- Middle: medial (internal) view of the same bone showing the arcuate line,
  the iliac fossa and the auricular surface.
- The bottom third of the canvas stays completely empty, background color only.

COLOR CODE — the hip bone is a single fused bone, but tint its three developmental
parts as flat regions to show their contribution, meeting at the acetabulum:
- Ilium (upper, wing): warm orange, medium
- Ischium (posteroinferior, with the tuberosity): medium blue
- Pubis (anteromedial, with the two rami): medium green
- Acetabulum rim highlighted as a subtle neutral ring where the three colors meet
- The large obturator foramen is an empty opening (background color), not a bone
- Regions mutually distinguishable and also distinguishable in grayscale.

MANDATORY ANATOMICAL ACCURACY:
- Fan-shaped iliac wing above; ischial tuberosity as the thick posteroinferior mass;
  pubis forming the anterior part with superior and inferior rami enclosing, with
  the ischial ramus, the obturator foramen.
- Deep cup-shaped acetabulum on the lateral view at the junction of the three parts.
- Greater sciatic notch above the ischial spine, lesser sciatic notch below it.
- Correct proportions and curvature of a real hip bone.
```

Append the master doc's **REGLAS ABSOLUTAS** block (no typography, no arrows, each
region one flat color, boundaries as color edges, 2:3, empty bottom third). If text
appears anyway: **regenerate.**

### Color key & legend composed by Claude Code (verified Spanish text)

TA primary · classic in parentheses, consistent with the topic:

- Ilion (naranja) — cresta ilíaca, EIAS, cara glútea (fosa ilíaca externa),
  fosa ilíaca interna, línea arqueada (línea innominada)
- Isquion (azul) — tuberosidad isquiática, espina isquiática (espina ciática),
  incisura isquiática mayor y menor
- Pubis (verde) — cuerpo, rama superior (horizontal) y rama inferior (descendente),
  cresta pectínea
- Acetábulo (anillo neutro) — superficie semilunar, fosa acetabular, labrum
  acetabular (rodete cotiloideo)
- Agujero obturado (abertura) — limitado por pubis e isquion

Numeric markers (max 6), only where color doesn't suffice, on the lateral view:
(1) EIAS, (2) espina isquiática, (3) tuberosidad isquiática, (4) acetábulo,
(5) incisura isquiática mayor, (6) agujero obturado.
