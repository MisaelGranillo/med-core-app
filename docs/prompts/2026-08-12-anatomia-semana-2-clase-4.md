# PROMPT — MedCore · Anatomy I · Week 2 · Class 4 (lower limb: femur, tibia, fibula, foot)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-12.
> **Prompt language: English. MedCore content stays in Spanish.**
> **Phase 4 — completes Week 2.** Adds **femur, tibia, fibula (peroné) and the
> bones of the foot**. `torax-oseo`, `miembro-superior-oseo` and `hueso-coxal` are
> already loaded — don't touch them. After this, Week 2 is fully taught.

---

## 0. Source is a .pptx, not PNG captures

The class material is a single PowerPoint:
`~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 2/Clase 4/HUESOS COXALES, FEMUR, TIBIA, PERONÉ Y DEL PIE.pptx`
(28 slides). **Slides 1–8 repeat the hip bone** already covered by `hueso-coxal` —
**do not duplicate it**. The new content is slides 9–28 (femur, tibia, fibula,
foot), transcribed and verified in §4.

Extract/confirm the text yourself before writing:
```bash
cd ~/med-core-app
python3 - <<'PY'
from pptx import Presentation
p=Presentation("/Users/USER/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 2/Clase 4/HUESOS COXALES, FEMUR, TIBIA, PERONÉ Y DEL PIE.pptx")
for i,s in enumerate(p.slides,1):
    t=" | ".join(sh.text_frame.text.strip() for sh in s.shapes if sh.has_text_frame and sh.text_frame.text.strip())
    if t: print(i, t)
PY
```
(`pip install python-pptx --break-system-packages` if missing.)

---

## 1. Before touching code

```bash
sed -n '/id: .hueso-coxal./,/^  \},/p' src/data/anatomia-uad-topics.ts | head -40   # pattern
sed -n '11,20p'   src/data/modules.ts                  # 'anatomia-uad-s2' (3 topics now)
sed -n '128,150p' src/data/plans/uad-medicina.ts       # Week-2 (estado, topicIds, temas)
grep -n "id: 'cox-q" src/data/anatomia-uad-quizzes.ts | tail -1   # end of previous block
```
Clean `npm run build`. Collisions: `grep -rn "miembro-inferior-oseo\|'minf-" src/`

---

## 2. Objective

| Layer | File | What to add |
|---|---|---|
| Study guide | `anatomia-uad-topics.ts` | 1 `Topic`: `miembro-inferior-oseo` (femur+tibia+fibula+foot) |
| Bank | `anatomia-uad-quizzes.ts` | ~16 `Question`, prefix `minf-q` |
| Subject sheet | `plans/uad-medicina.ts` | Week-2 `topicIds` gains it; Week 2 now **fully taught** |
| Module | `modules.ts` | `anatomia-uad-s2` gains it; update title/subtitle (no more "por impartir") |
| Atlas | `atlas-topics.ts` (+ `public/atlas/`) | 1 `AtlasTopic` `miembro-inferior-oseo`, 8 questions |

Reuse `colorKey: 'osteologia'`. Never renumber existing `sectionId`s.

---

## 3. Terminology rule (TA primary · classic in parentheses)

Critical mapping for this class (professor uses classic heavily):

| TA (primary) | classic (professor) |
|---|---|
| Fíbula | peroné |
| Talus | astrágalo |
| Hueso navicular | escafoides (del pie) |
| Maléolo medial | maléolo interno |
| Maléolo lateral | maléolo externo |
| Fóvea de la cabeza del fémur | fosita para el ligamento redondo |
| Fosa trocantérea | fosita digital |
| Incisura fibular | escotadura peroneal |
| Tróclea peronea (del calcáneo) | apófisis peronea |
| Cuneiformes medial/intermedio/lateral | 1.ª/2.ª/3.ª cuña |
| Línea intertrocantérea (anterior) · cresta intertrocantérea (posterior) | (igual) |

> Classic term still counts as correct in items. One `note` per topic on the
> coexistence. **The professor writes "peroné" and "astrágalo" — those are exactly
> what the exam uses**; keep them in parentheses everywhere.

---

## 4. Verified class content (slides 9–28) — write in Spanish

Topic `miembro-inferior-oseo`, **8 sections** (`minf-1`…`minf-8`). Don't add joints
or muscles (that's the arthrology/myology class) — osteology only.

### 4.1 Divisiones del miembro inferior (minf-1, + terminology note)
Cintura pélvica · muslo · pierna · pie. (El hueso coxal ya se estudió en su Topic.)

### 4.2 Fémur — epífisis superior (proximal)
- **Cabeza**: fóvea de la cabeza (fosita para el ligamento redondo).
- **Cuello**: línea intertrocantérea (anterior), tubérculo cervical.
- **Trocánter mayor** (2 caras, 3 bordes): cresta intertrocantérea (posterior),
  fosa trocantérea (fosita digital), tubérculo cuadrado.
- **Trocánter menor.**

### 4.3 Fémur — diáfisis
Caras anterior, lateral, medial y posterior; bordes lateral, medial y posterior.
**Línea áspera** (labios interno y externo), tuberosidad glútea, línea espiral,
línea pectínea, crestas supracondíleas externa e interna, tubérculo del 3.er
aductor, cara poplítea.

### 4.4 Fémur — epífisis inferior (distal)
Cóndilo lateral, cóndilo medial, fosa intercondílea, tróclea femoral, epicóndilo
medial, epicóndilo lateral, cresta intercondílea.

### 4.5 Tibia
- **Epífisis superior:** cóndilo lateral, cóndilo medial, tuberosidad de la tibia,
  zona intercondílea anterior y posterior, eminencia intercondílea, tubérculos
  intercondíleos medial y lateral, carilla articular para la cabeza del peroné.
- **Diáfisis:** caras interna, externa y posterior; bordes anterior, interno y
  externo; línea del sóleo, borde anterior ("espinilla"), agujero nutricio.
- **Epífisis inferior:** maléolo medial (interno) — presenta 5 caras; surco
  maleolar; incisura fibular (escotadura peroneal); carilla articular inferior.

### 4.6 Peroné (fíbula)
- **Epífisis superior:** cabeza, cuello, superficie articular para la tibia,
  proceso estiloides (apófisis estiloides).
- **Diáfisis:** bordes anterior, medial y posterior; caras anterior, posterior y
  lateral; cresta interósea (cresta interna).
- **Epífisis inferior:** maléolo lateral (externo), carilla articular para el talus
  (astrágalo), fosa maleolar.

### 4.7 Huesos del tarso (7 huesos)
**Talus (astrágalo), calcáneo, cuboides, navicular (escafoides), cuneiforme
lateral, cuneiforme intermedio, cuneiforme medial.**
- **Talus (astrágalo):** cuerpo (tróclea, carillas maleolares medial y lateral,
  apófisis lateral, apófisis posterior con surco del flexor largo del hallux y
  tubérculos medial y lateral, carillas calcáneas posterior y media), cuello,
  cabeza (carilla para el navicular, carilla calcánea anterior).
- **Calcáneo:** sustentaculum tali, carillas astragalinas posterior/media/anterior,
  tuberosidad calcánea, tubérculos anterior/medial/lateral, surco del flexor largo
  del hallux, tróclea peronea (apófisis peronea), carilla para el cuboides, seno del
  tarso.
- **Navicular (escafoides):** tuberosidad. **Cuboides:** tuberosidad, carilla
  calcánea, surco del m. peroneo largo. **Cuneiformes:** medial, intermedio, lateral.

### 4.8 Metatarso y falanges
- **Metatarsianos:** 5; base, cuerpo, cabeza; **tuberosidad (apófisis estiloides)
  del 5.º metatarsiano**.
- **Falanges:** proximal (5), media (4), distal (5); tuberosidad ungueal. El hallux
  (dedo gordo) solo tiene proximal y distal.

### 4.9 Confusions to target (≥25 % of the bank)
1. **Peroné/fíbula = lateral; tibia = medial.** Which bears weight (tibia).
2. **Maléolo medial = tibia; maléolo lateral = peroné/fíbula.** Classic trap.
3. **Fóvea/ligamento redondo** on the femoral head (proximal).
4. **Trocánter mayor vs menor**; **línea intertrocantérea (anterior) vs cresta
   intertrocantérea (posterior).**
5. **Línea áspera** = posterior femur.
6. **Fosa intercondílea (fémur)** vs **eminencia intercondílea (tibia)** — don't mix.
7. **7 tarsals; 3 cuneiforms; talus articulates with tibia/fibula; calcáneo = talón.**
8. **Sustentaculum tali** (calcáneo) supports the talus.
9. **5.º metatarsiano** has the styloid tuberosity.
10. **Falanges:** hallux 2, the rest 3 (proximal 5 · media 4 · distal 5).

---

## 5. Deliverables

### 5.1 Topic `miembro-inferior-oseo`
- `id: 'miembro-inferior-oseo'`, `colorKey: 'osteologia'`,
  `title: 'Miembro inferior óseo: fémur, tibia, peroné y pie'`,
  `subtitle: 'Muslo, pierna y pie; el hueso coxal se estudia aparte'`.
- 8 sections (§4.1–§4.8). `minf-1` opens with the terminology `note`. `table` for
  each bone's faces/borders and for the tarsal list; `comparison` for tibia vs
  fibula (medial/lateral, weight-bearing) and medial vs lateral malleolus, and for
  femoral intercondylar fossa vs tibial intercondylar eminence; `definition` for
  línea áspera, sustentaculum tali, fóvea.
- `keyTerms`: fémur, línea áspera, fóvea de la cabeza, tibia, peroné (fíbula),
  maléolo medial, maléolo lateral, talus (astrágalo), calcáneo, navicular, sustentaculum tali.
- 6–8 `keyPoints` (fíbula lateral / tibia medial; maléolo medial = tibia, lateral =
  fíbula; línea áspera posterior; 7 tarsianos, 3 cuñas; talus articula con la mortaja
  tibioperonea; 5.º MT con tuberosidad estiloidea).

### 5.2 Bank `anatomia-uad-quizzes.ts`
- ~16 items, prefix `minf-q`, appended after the `cox-q` block; descending study
  value, header comment. Distractors from a neighboring bone/feature (e.g. attribute
  the medial malleolus to the fibula, the intercondylar eminence to the femur);
  `explanation` justifies the key and rules out one distractor; `correctIndex` spread
  0–3. ≥4 items on §4.9.

### 5.3 Subject sheet (`plans/uad-medicina.ts`, Week 2)
- `topicIds: ['torax-oseo', 'miembro-superior-oseo', 'hueso-coxal', 'miembro-inferior-oseo']`.
- **Week 2 is now fully taught** — update the PARTIAL comment: remove "por impartir";
  all three temas (tórax, miembro superior, miembro inferior) are covered. Keep
  `estado: 'impartido'`.
- Add the femur/leg/foot Moore source to `fuentes` (both numberings, offset −24).
- Add to `content.materiales`:
  ```ts
  { title: 'Semana 2 · Clase 4 — Miembro inferior óseo (fémur, tibia, peroné y pie)',
    file: 'Semana 2 - Clase 4 Miembro Inferior Oseo.pdf', kind: 'Clase' },
  ```

### 5.4 Module (`modules.ts`, `anatomia-uad-s2`)
- `topicIds` gains `miembro-inferior-oseo`.
- Update `title`/`subtitle`: Week 2 complete, e.g. subtitle *"Semana 2: osteología
  del tórax y de los miembros superior e inferior."* (drop "por impartir").

### 5.5 Atlas `miembro-inferior-oseo`
- `AtlasTopic`, 8 `AtlasQuestion` (`minf-a1`…`minf-a8`): femur head/trochanters,
  línea áspera, femoral condyles, tibia vs fibula (medial/lateral), medial vs lateral
  malleolus, talus, calcáneo, metatarsals/phalanges. `imagePath:
  '/atlas/miembro-inferior-oseo.png'`. Lámina from sibling prompt
  `2026-08-12-anatomia-semana-2-clase-4-lamina.md`; must not break build if PNG absent.

### 5.6 Library (convert the .pptx to PDF)
```bash
cd "~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 2/Clase 4"
soffice --headless --convert-to pdf --outdir . "HUESOS COXALES, FEMUR, TIBIA, PERONÉ Y DEL PIE.pptx" \
  && mv "HUESOS COXALES, FEMUR, TIBIA, PERONÉ Y DEL PIE.pdf" "Semana 2 - Clase 4 Miembro Inferior Oseo.pdf"
```
If LibreOffice (`soffice`) isn't installed, tell me and I'll convert it — don't
force another route. Upload the PDF to
`library.medcore.icu/anatomia-humana-diseccion-1/` with the §5.3 name.
**Show me the upload command before running it.** Don't commit the pptx/pdf.

---

## 6. Verification

```bash
npm run build
grep -c "id: 'minf-q" src/data/anatomia-uad-quizzes.ts        # ≈ 16
grep -o "id: 'minf-[a-z0-9]*'" src/data/atlas-topics.ts | sort | uniq -d   # empty
grep -n "miembro-inferior-oseo" src/data/topics.ts src/data/modules.ts src/data/plans/uad-medicina.ts src/data/atlas-topics.ts
```

Manual (`npm run dev`):
- [ ] `/estudio`: four topics under `anatomia-uad-s2`; the module no longer says
      "por impartir".
- [ ] `/topic/miembro-inferior-oseo`: 8 sections, terminology `note`, tables legible
      light+dark.
- [ ] `/plan/…anatomia-…-1`: Week 2 lists four topics and reads as fully taught.
- [ ] `minf-q` quiz playable; the other three topics untouched.
- [ ] Atlas doesn't break with the PNG missing.

**Mandatory self-audit:** verify 3 items against §4 — medial malleolus = tibia vs
lateral = fibula; femoral intercondylar fossa vs tibial intercondylar eminence;
sustentaculum tali on the calcaneus. Report the result and the real Moore pages.

---

## 7. Non-objectives
- Don't re-create the hip bone — `hueso-coxal` already covers slides 1–8.
- Don't cover hip/knee/ankle joints, ligaments or muscles — osteology only.
- Don't touch the other Week-2 topics, Week 1, Inglés, PAI, `unisa-lmgc`,
  `lmgc-modules`.
- No new `TopicColorKey`. No `sectionId` renumbering. No pptx/PDF in the repo. No
  `npm run deploy`.

---

## 8. Delivery (atomic commits)
1. `feat(anatomia): Topic miembro inferior óseo — fémur, tibia, peroné y pie (Semana 2 Clase 4)`
2. `feat(quizzes): banco de miembro inferior óseo — ~16 reactivos`
3. `feat(plan,modules): Semana 2 completa — osteología de ambos miembros`
4. `feat(atlas): AtlasTopic miembro inferior óseo con 8 preguntas`

Report the real Moore pages (both numberings), whether `soffice` was available for
the library PDF, any id collision, and the self-audit result.

---

## 9. Week 2 complete
With this class, Week 2 osteology is fully loaded (tórax + both limbs). Next content
belongs to Week 3 (artrología y miología) per the plan's `temario`.
