# PROMPT — Wire the 2 missing Artrología AtlasTopics (plates 1–5)

> For: **Claude Code**, repo `~/med-core-app`. Small, focused change.
> **Prompt in English; MedCore content in Spanish.**
> The 5 artrología plates are in `public/atlas/`. Three AtlasTopics are already
> wired (`artrologia-clasificacion`, `articulacion-temporomandibular`,
> `articulaciones-miembro-inferior`). **Add the two missing ones** and verify all
> five resolve.

---

## Do this

In `src/data/atlas-topics.ts`, add **two** `AtlasTopic`s next to the existing
artrología ones, following the same shape (`id, title, subtitle, category: 'anatomia',
emoji, imagePath, colorKey: 'artrologia', relatedTopicIds, questions[]`):

1. **`articulaciones-columna`**
   - `imagePath: '/atlas/articulaciones-columna.png'`
   - `relatedTopicIds: ['articulaciones-columna']`
   - 6–8 `AtlasQuestion` (ids `acol-a1…`) on what's in the plate: which ligament runs
     down the **front** vs the **back** of the vertebral bodies (longitudinal anterior
     vs posterior), where the **ligamento flavo (amarillo)** sits (between the arches),
     which joints between the arches are synovial (cigapofisarias), and the
     intervertebral disc between bodies. TA primary · classic in parentheses; the
     classic term also counts as correct.

2. **`articulaciones-miembro-superior`**
   - `imagePath: '/atlas/articulaciones-miembro-superior.png'`
   - `relatedTopicIds: ['articulaciones-miembro-superior']`
   - 6–8 `AtlasQuestion` (ids `amsup-a1…`) on the shoulder complex shown: name the
     three joints (esternoclavicular, acromioclavicular, glenohumeral), which is
     ball‑and‑socket/**esferoidea (enartrosis)**, and which joint has a fibrocartilage
     disc and two synovial cavities (esternoclavicular). Keep questions to structures
     **visible in the plate**.

Also confirm the existing **`artrologia-clasificacion`** AtlasTopic links back to the
study topic: `relatedTopicIds` should include **`artrologia-generalidades`** (its
plate is the joint‑shape classification). Fix if missing.

Do not change the three already‑wired topics otherwise, and don't renumber anything.

---

## Verify

```bash
npm run build
# all five artrología plates wired, each to an existing PNG:
grep -n "imagePath: '/atlas/\(artrologia-clasificacion\|articulacion-temporomandibular\|articulaciones-columna\|articulaciones-miembro-superior\|articulaciones-miembro-inferior\).png'" src/data/atlas-topics.ts
for f in artrologia-clasificacion articulacion-temporomandibular articulaciones-columna articulaciones-miembro-superior articulaciones-miembro-inferior; do test -f "public/atlas/$f.png" && echo "OK $f" || echo "MISSING $f"; done
grep -o "id: 'acol-a[0-9]*'\|id: 'amsup-a[0-9]*'" src/data/atlas-topics.ts | sort | uniq -d   # empty (no dup ids)
```

Manual (`npm run dev`): `/atlas` lists all five artrología plates; opening
**columna** and **miembro superior** shows the new image with its questions; the other
three still work.

Commit: `feat(atlas): cablea las láminas de columna y miembro superior (artrología)`.
