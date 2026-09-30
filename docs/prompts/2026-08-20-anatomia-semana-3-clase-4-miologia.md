# PROMPT — MedCore · Anatomy I · Week 3 · Class 4–5 (finish artrología + Miología I)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-20.
> **Prompt language: English. MedCore content stays in Spanish.**
> Two parts: **(A)** complete the lower‑limb **foot joints** (finishes Artrología),
> and **(B)** load **Miología I** (muscles) from the class PowerPoint. After this,
> Week 3 ("Artrología y Miología I") is fully taught; Miología II (abdomen, pelvis,
> limbs) remains Semana 4.

---

## 0. Sources of truth

- **Muscles deck (primary):** `~/Desktop/UAD/Primer Semestre/Anatomía Humana y
  Disección I DEF/Semana 3/MUSCULOS 3ERA SEMANA.pptx` (63 slides, ~37 MB). It carries
  **origen / inserción / inervación / función per muscle** — extract them; don't
  invent. The Clase 4 folder (153 screenshots) is the same content captured live.
- **Textbook:** Moore, capítulos de músculos de cabeza, cuello, dorso y tórax
  (offset book = PDF − 24; cite both numberings in `fuentes`).

Extract the deck text before writing:
```bash
cd ~/med-core-app
python3 - <<'PY'
from pptx import Presentation
p=Presentation("/Users/USER/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 3/MUSCULOS 3ERA SEMANA.pptx")
for i,s in enumerate(p.slides,1):
    t=" | ".join(sh.text_frame.text.strip() for sh in s.shapes if sh.has_text_frame and sh.text_frame.text.strip())
    if t: print(i, t)
PY
```
(`pip install python-pptx --break-system-packages` if needed.)

---

## 1. Before touching code

```bash
npm run build                                  # clean first
sed -n "/id: 'articulaciones-miembro-inferior'/,/^  \},/p" src/data/anatomia-uad-topics.ts | head -30
sed -n '20,28p' src/data/modules.ts            # anatomia-uad-s3 (5 artrología topics)
sed -n '20,45p' src/data/colors.ts             # osteologia/artrologia palette pattern (11 fields)
sed -n '90,96p' src/types/index.ts             # TopicColorKey union (has 'artrologia')
sed -n '150,162p' src/data/plans/uad-medicina.ts   # Week-3 plan (Artrología y Miología I)
grep -n "id: 'aminf-q\|id: 'art-q" src/data/anatomia-uad-quizzes.ts | tail -1
```
Collisions: `grep -rn "miologia\|musculos-\|'mio-\|'mmast-\|'mcara-\|'mcue-\|'mdor-\|'mdia-" src/`

---

## 2. Part A — finish Artrología: foot joints

`articulaciones-miembro-inferior` already has cadera, rodilla, tibiofibulares and
tobillo (talocrural). **Append** a section for the **articulaciones del pie** (do not
renumber existing `sectionId`s), from the Clase 4 material:
- **Tarsometatarsianas** (artrodias/planas): la 1.ª aislada; 2.ª y 3.ª continúan con
  las intertarsianas; 4.ª y 5.ª cavidad aislada. Ligamentos tarsometatarsianos
  dorsales, plantares e interóseos.
- **Intermetatarsianas** (artrodias): la 1.ª y 2.ª separadas; ligamentos dorsales,
  plantares e interóseos.
- **Metatarsofalángicas** (condíleas): ligamentos colaterales; ligamento transverso
  profundo del metatarso.
- **Interfalángicas** (trocleares): ligamentos colaterales.
- Update the topic `subtitle` to include "y pie", and add ≥1 `correlacion` (e.g. the
  transverse arch / marcha).

Commit: `feat(anatomia): articulaciones del pie completan el miembro inferior`.

---

## 3. Part B — Miología I

### 3.1 New color + module
- Add colorKey **`miologia`** (union in `types/index.ts` + 11‑field block in
  `TOPIC_COLORS`, copy the `artrologia`/`osteologia` pattern, verify light+dark). Do
  **not** reuse `osteologia`/`artrologia`.
- New module:
  ```ts
  {
    id: 'anatomia-uad-s3-miologia',
    badge: 'UAD · Anatomía Humana y Disección I — Semana 3 (Miología)',
    title: 'Miología I — músculos de cabeza, cuello, dorso y diafragma',
    subtitle: 'Generalidades del músculo y músculos de la cabeza, cuello, dorso y diafragma.',
    emoji: '💪',
    topicIds: ['miologia-generalidades','musculos-masticacion','musculos-cara-craneo','musculos-cuello-nuca','musculos-dorso','musculos-diafragma'],
  }
  ```
  Place after `anatomia-uad-s3`.

### 3.2 The six Miología topics (`colorKey: 'miologia'`, `categoria: 'Miología'`)
Each: 5–8 sections, `keyTerms`, 6–8 `keyPoints`, terminology `note` (§4), **≥1
`correlacion`**. Pull origen/inserción/inervación/función from the pptx (§0).

1. **`miologia-generalidades`** — *"Generalidades del sistema muscular"*
   - ¿Qué es un músculo? propiedades: excitabilidad, contractilidad, extensibilidad,
     elasticidad. Del latín *mus / musculus*.
   - Clasificación: **estriado** (esquelético voluntario · cardíaco involuntario) y
     **liso** (involuntario, vísceras).
   - Estructura: fibra/**miocito** → **endomisio**; **fascículo** → **perimisio**;
     músculo → **epimisio**; **aponeurosis**.
   - Partes: **origen (inserción fija)**, **inserción (inserción móvil)**, cabeza,
     tendón, vientre. Inserta en hueso, piel, mucosa, aponeurosis, sinovial.
   - Formas: fusiforme 1 cabeza (braquial), 2 cabezas (bíceps), digástrico (2
     vientres), poligástrico (recto del abdomen), unipenniforme (tibial posterior),
     bipenniforme (recto femoral), planos varias cabezas (oblicuo mayor).
   - Nomenclatura: por morfología (trapecio, romboides), origen/inserción
     (esternocleidomastoideo, estilohioideo), localización (tibial posterior),
     número de vientres (digástrico, bíceps), acción (elevador de la escápula).

2. **`musculos-masticacion`** — *"Músculos masticatorios"*
   - **Masetero, temporal, pterigoideo medial (interno), pterigoideo lateral
     (externo)**. Todos inervados por **V3** (rama mandibular del trigémino). Los tres
     primeros elevan la mandíbula; el **pterigoideo lateral la desciende/protruye**.

3. **`musculos-cara-craneo`** — *"Músculos de la mímica y cutáneos del cráneo"*
   - Cutáneos: **occipitofrontal (epicráneo)** con la **galea aponeurótica
     (aponeurosis epicraneal)**.
   - Periorbitarios: **orbicular del ojo (de los párpados)** — porciones orbitaria,
     palpebral, lagrimal; **corrugador superciliar (superciliar)**; depresor de la
     ceja.
   - Peribucales: **orbicular de los labios**, buccinador, elevador común del ala de
     la nariz y labio superior, elevador propio del labio superior, cigomático menor,
     cigomático mayor, risorio, depresor del ángulo de la boca.
   - Todos inervados por el **VII (facial)** — contraste clave con la masticación.

4. **`musculos-cuello-nuca`** — *"Músculos del cuello y la nuca"*
   - **Nuca / triángulo suboccipital**: recto posterior mayor y menor de la cabeza,
     oblicuo superior e inferior de la cabeza.
   - **Suprahioideos**: digástrico, estilohioideo, milohioideo, geniohioideo.
   - **Escalenos**: anterior, medio (a 1.ª costilla), posterior (a 2.ª costilla);
     función flexión lateral + inspiradores accesorios; inervación ramas anteriores
     C3–C4.
   - **Prevertebrales**: recto lateral de la cabeza, recto anterior de la cabeza,
     largo de la cabeza, largo del cuello.

5. **`musculos-dorso`** — *"Músculos del dorso"*
   - **Superficiales**: trapecio, dorsal ancho.
   - **Intermedios**: elevador de la escápula (angular del omóplato), romboides menor
     y mayor, serrato posterior superior (menor posterosuperior), serrato posterior
     inferior (menor posteroinferior).
   - **Profundos**: erectores de la columna — **espinoso (epiespinoso), longísimo
     (dorsal largo), iliocostal**; esplenios de la cabeza y del cuello;
     **transversoespinoso** (semiespinosos, multífidos, rotadores, interespinosos,
     intertransversos).

6. **`musculos-diafragma`** — *"Diafragma toracoabdominal"*
   - **Porciones**: costal, esternal, lumbar (pilares). **Orificios**: aórtico,
     esofágico, de la vena cava. Principal músculo de la inspiración; inervación
     **nervio frénico (C3–C4–C5)**.

### 3.3 Confusions to target (≥25 % of the bank)
1. **Masticación = V3; mímica = VII.** El punto más evaluable.
2. **Pterigoideo lateral** abre la boca; los otros tres masticatorios la cierran.
3. Envolturas: **endomisio (fibra) · perimisio (fascículo) · epimisio (músculo)**.
4. **Estriado (esquelético/cardíaco) vs liso.**
5. Escalenos: anterior y medio → 1.ª costilla; posterior → 2.ª; inspiradores
   accesorios.
6. Suprahioideos vs infrahioideos (aquí solo suprahioideos).
7. **Diafragma: frénico (C3‑4‑5); orificios cava (T8), esofágico (T10), aórtico
   (T12).**
8. Erectores de la columna (espinoso/longísimo/iliocostal) de lateral a medial.

### 3.4 Correlations (write accurate ones; examples)
- *"Los cuatro masticatorios reciben el V3; toda la mímica, el VII. Por eso una
  parálisis de Bell (VII) borra los pliegues faciales pero no debilita la mordida."*
- *"El diafragma lo inerva el nervio frénico (C3‑C4‑C5): «C3, 4, 5 keep the diaphragm
  alive». Una lesión cervical alta compromete la ventilación."*
- *"El occipitofrontal no tiene hueso entre sus vientres: se unen por la galea
  aponeurótica; por eso las heridas del cuero cabelludo se abren y sangran mucho."*
- *"Entre el escaleno anterior y el medio pasan el plexo braquial y la arteria
  subclavia (desfiladero de los escalenos): su compresión da el síndrome del
  desfiladero torácico."*

---

## 4. Terminology rule (TA primary · classic in parentheses)

Classic also counts as correct. Mapping for this class:

| TA (primary) | classic (professor) |
|---|---|
| Pterigoideo medial / lateral | pterigoideo interno / externo |
| Mandíbula | maxilar inferior |
| Orbicular del ojo | orbicular de los párpados |
| Corrugador superciliar | superciliar |
| Occipitofrontal / epicráneo | cutáneo del cráneo |
| Galea aponeurótica | aponeurosis epicraneal |
| Elevador de la escápula | angular del omóplato |
| Serrato posterior superior / inferior | serrato menor posterosuperior / posteroinferior |
| Longísimo | dorsal largo |
| Espinoso | epiespinoso |
| Articulación talocrural | tibioastragalina |

---

## 5. Deliverables (schema)

### 5.1 Topics — `anatomia-uad-topics.ts`
Part A section appended to `articulaciones-miembro-inferior`; six new miología topics
(§3.2). Variety of `BlockType`: `table` (muscle → origen/inserción/inervación/
función), `comparison` (masticación V3 vs mímica VII; estriado vs liso), `list`
(grupos), `definition` (endomisio/perimisio/epimisio, aponeurosis), `note`
(terminología) and `correlacion`. Assign `categoria: 'Artrología'` (Part A already
set) and `'Miología'` (Part B). Don't renumber `sectionId`s.

### 5.2 Bank — `anatomia-uad-quizzes.ts`
~4 items for foot joints (prefix `aminf-q`, appended) + **~30 miología items**, one
prefix per topic (`mio-q` generalidades ~5, `mmast-q` ~4, `mcara-q` ~6, `mcue-q` ~6,
`mdor-q` ~5, `mdia-q` ~4). Descending study value + header comments. Distractors from
a sibling muscle/group (e.g. attribute a mímica muscle to V3); `explanation` justifies
the key and rules out one distractor; `correctIndex` spread. ≥8 items on §3.3.

### 5.3 Plan — `plans/uad-medicina.ts`, Week 3
- `topicIds`: the 5 artrología + the 6 miología topics.
- Week 3 is now **fully taught** (Artrología + Miología I). Update the partial comment
  and `temas`: artrología (con pie) impartida; miología I (cabeza, cuello, dorso,
  diafragma) impartida; **Miología II (abdomen, pelvis, miembros) = Semana 4,
  pendiente**.
- Add `fuentes` (Moore músculos, both numberings) and `content.materiales`:
  ```ts
  { title: 'Semana 3 · Clase 4–5 — Miología I: músculos de cabeza, cuello, dorso y diafragma', file: 'Semana 3 - Miologia I Musculos.pdf', kind: 'Clase' },
  ```

### 5.4 Module — `modules.ts`
Add `anatomia-uad-s3-miologia` (§3.1).

### 5.5 Library — convert the pptx
```bash
cd "~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 3"
soffice --headless --convert-to pdf --outdir . "MUSCULOS 3ERA SEMANA.pptx" \
  && mv "MUSCULOS 3ERA SEMANA.pdf" "Semana 3 - Miologia I Musculos.pdf"
```
If it exceeds ~30 MB, compress with Ghostscript. If `soffice` is unavailable, tell me.
Upload to `library.medcore.icu/anatomia-humana-diseccion-1/` with the §5.3 name.
**Show me the upload command before running it.** Don't commit the pptx/PDF.

### 5.6 Atlas — deferred (as in the artrología round). Optional single "clasificación
de músculos / partes del músculo" plate later; not required here.

---

## 6. Verification

```bash
npm run build
grep -n "miologia" src/types/index.ts src/data/colors.ts        # colorKey wired (11 fields)
grep -c "id: 'mio-q\|id: 'mmast-q\|id: 'mcara-q\|id: 'mcue-q\|id: 'mdor-q\|id: 'mdia-q" src/data/anatomia-uad-quizzes.ts   # ≈ 30
grep -n "miologia-generalidades\|musculos-diafragma\|anatomia-uad-s3-miologia" src/data/topics.ts src/data/modules.ts src/data/plans/uad-medicina.ts
```

Manual (`npm run dev`):
- [ ] `/estudio`: the six miología topics appear under the new module and under the
      **Miología** category, in the new `miologia` color, legible light+dark.
- [ ] `articulaciones-miembro-inferior` now includes the foot joints section.
- [ ] `/plan/…anatomia-…-1`: Week 3 reads as fully taught (artrología + Miología I),
      with Miología II flagged pending.
- [ ] Each miología topic has ≥1 correlation; masticación V3 vs mímica VII is clear.
- [ ] The new quizzes play; artrología topics/banks untouched.

**Mandatory self‑audit:** verify 4 items against the pptx — masticación innervation
(V3), mímica innervation (VII), diaphragm nerve (frénico C3‑5), and one muscle's
origen/inserción. Report per‑topic counts, whether `soffice` was available, and any
muscle detail you couldn't confirm from the deck.

---

## 7. Non‑objectives
- Don't load Miología II (abdomen/pelvis/limbs) — Semana 4.
- Don't reuse `osteologia`/`artrologia` colors for muscles. Don't renumber
  `sectionId`s. Don't touch osteology/artrología content beyond the foot‑joints
  append. No PDF/pptx in the repo. No `npm run deploy`.

---

## 8. Delivery (atomic commits)
1. `feat(anatomia): articulaciones del pie (miembro inferior)`
2. `feat(anatomia): colorKey miologia`
3. `feat(anatomia): generalidades y músculos de la cabeza (Miología I)`
4. `feat(anatomia): músculos de cuello, dorso y diafragma (Miología I)`
5. `feat(quizzes): banco de miología I (~30) + pie`
6. `feat(plan,modules): Semana 3 completa — Artrología + Miología I`

Report: the real Moore pages (both numberings), the muscle details you pulled vs. left
summarized, whether `soffice` converted the deck, and the self‑audit result.

---

## 9. Next — Miología II (Semana 4)
Músculos del abdomen y región inguinal, pelvis, miembro superior e inferior. Sibling
prompt when that class is taught.
