# PROMPT — MedCore · Add Moore ch.1 pp. 12–13: bone development + blood supply & innervation

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-11.
> **Prompt language: English. MedCore content stays in Spanish** — every string
> you write into the topic, quizzes and plan remains Spanish.
> Goal: enrich the osteology material with the content of **Moore, Introducción a
> la Anatomía Clínica, book pp. 12–13** (offset: book = PDF − 24, i.e. PDF pp.
> 36–37): **Desarrollo del hueso** and **Vascularización e inervación de los
> huesos**. Place it where it fits: the `anatomia-generalidades` topic and the
> Week-1 `temas`.

---

## 0. Before touching code

```bash
cd ~/med-core-app
npm run build                              # clean first
sed -n '/id: .anatomia-generalidades./,/id: .huesos-craneo./p' src/data/anatomia-uad-topics.ts | grep -n "id: 'gen-\|title:\|type:"
# gen-8 already exists ("Osteología: desarrollo y constitución del esqueleto").
sed -n '248,286p' src/data/anatomia-uad-topics.ts     # read gen-8 to avoid duplicating
grep -n "number: 1" src/data/plans/uad-medicina.ts     # Week-1 temas of anatomía
grep -c "id: 'gen-q" src/data/anatomia-uad-quizzes.ts
```

Optionally re-read the source to quote it faithfully:
`pdftotext -layout -f 36 -l 37 "~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Moore Anatomía.pdf" -`

---

## 1. What already exists vs. what's new

`gen-8` **already** covers ossification types (intramembranous vs endochondral) and
long-bone growth (primary/secondary centers, metaphysis, epiphyseal line). So:

- **Enrich** `gen-8`'s development content with the mechanistic detail from p. 12
  that it currently lacks (periosteal bud, calcification of the cartilage model,
  synostosis, epiphyseal fusion from puberty to maturity).
- **Add a new section** (append at the end of the topic's `sections`, e.g.
  `gen-9`) for **Vascularización e inervación de los huesos** — this is entirely
  missing today and is the substantive new material from p. 13.

Do **not** renumber existing `sectionId`s. Appending `gen-9` is safe; reordering is
not (`useProgress`).

---

## 2. Verified source content (Moore, book pp. 12–13) — write in Spanish

### 2.1 Desarrollo del hueso (enrich `gen-8`)
- Todos los huesos derivan del **mesénquima** (tejido conectivo embrionario) por una
  de dos vías; la histología del hueso es la misma en ambas:
  - **Osificación intramembranosa** (hueso membranoso): los moldes mesenquimatosos
    se forman en el período embrionario y la osificación ocurre **directamente**
    sobre el mesénquima en el período fetal.
  - **Osificación endocondral** (hueso cartilaginoso): se forma un **molde de
    cartílago** a partir del mesénquima y luego el hueso **reemplaza** la mayor
    parte del cartílago.
- **Osificación endocondral, paso a paso** (crecimiento de un hueso largo):
  1. Células mesenquimatosas → **condroblastos** → molde de cartílago hialino.
  2. En la parte media del molde, el cartílago se **calcifica**; **capilares
     periósticos** penetran el cartílago calcificado y forman, con células
     osteogénicas, una **yema perióstica**.
  3. Los capilares inician el **centro de osificación primario**; el cuerpo
     osificado a partir de él es la **diáfisis**.
  4. Tras el nacimiento aparecen los **centros de osificación secundarios** en los
     extremos; lo osificado a partir de ellos son las **epífisis** (irrigadas por
     **arterias epifisarias**).
  5. La **metáfisis** es la parte ensanchada de la diáfisis cercana a la epífisis.
  6. Entre diáfisis y epífisis persisten las **láminas (placas) epifisarias** de
     cartílago (fisis, cartílago de crecimiento): el hueso crece en longitud
     mientras estén abiertas.
  7. Cuando el crecimiento cesa, diáfisis y epífisis se **fusionan**; la unión
     (**sinostosis**) se ve en la radiografía como la **línea epifisaria**. La
     fusión epifisaria progresa desde la **pubertad hasta la madurez**.

### 2.2 Vascularización e inervación de los huesos (new section `gen-9`)
- Los huesos están muy vascularizados. La irrigación arterial procede de:
  - **Arterias nutricias** (una o más por hueso): nacen fuera del periostio,
    atraviesan el cuerpo del hueso largo por los **forámenes nutricios** y se
    dividen en **ramas longitudinales** que irrigan la médula, el hueso esponjoso y
    las capas profundas del hueso compacto.
  - **Arterias epifisarias y metafisarias**: entran por forámenes próximos a los
    extremos articulares.
  - **Arterias periósticas**: irrigan el hueso compacto superficial.
- El hueso compacto se organiza en **sistemas haversianos (osteonas)**; los
  conductos alojan pequeños vasos que nutren a los **osteocitos**.
- **Inervación**: los nervios acompañan a los vasos; el **periostio** está
  ricamente inervado por nervios sensitivos y es muy **sensible a la tensión o al
  desgarro** (dolor). Algunas fibras entran con los vasos por los forámenes
  nutricios hacia la médula.

### 2.3 Confusions worth targeting in items
- **Centro primario = diáfisis** vs **centros secundarios = epífisis**.
- **Metáfisis** (zona de crecimiento junto a la fisis) vs **línea epifisaria**
  (cicatriz de la fusión).
- **Intramembranosa** (huesos planos del cráneo, directa) vs **endocondral**
  (huesos largos, molde cartilaginoso).
- **Arteria nutricia** (por el foramen nutricio, irriga médula/interior) vs
  **arterias periósticas** (hueso compacto externo).
- El **periostio** es la parte inervada y dolorosa; el hueso compacto central no
  duele por sí mismo.

---

## 3. Deliverables

### 3.1 Topic `anatomia-generalidades` (`anatomia-uad-topics.ts`)
- **Enrich `gen-8`** with §2.1 detail. Add blocks *within* `gen-8` (adding blocks is
  safe; only `sectionId` renumbering is not): a `steps` block for the 7-step
  endochondral sequence and a `note` for the intramembranous vs endochondral
  distinction if not already crisp. Cite "Moore, libro pp. 12–13 (PDF 36–37)".
- **Append new section `gen-9`**: `title: 'Vascularización e inervación de los
  huesos'`, `keyTerms: ['Arteria nutricia', 'Foramen nutricio', 'Arterias
  periósticas', 'Sistema haversiano (osteona)', 'Periostio', 'Osteocito']`, with
  `list`/`comparison` blocks from §2.2. `colorKey` stays the topic's current key.
- Follow the TA-primary rule (this content is already TA: foramen, proceso, etc.).

### 3.2 Quiz (`anatomia-uad-quizzes.ts`)
- Add **~5 items** with `topicId: 'anatomia-generalidades'`, prefix `gen-q`, appended
  after the current `gen-q` block, targeting §2.3. Quality rubric: plausible
  distractors (e.g. offer "arterias periósticas" as a distractor for the nutrient
  artery item), `explanation` justifies the key and rules out one distractor,
  `correctIndex` spread 0–3. Header comment; descending study value.

### 3.3 Plan `temas` (`plans/uad-medicina.ts`, anatomía Week 1)
- In the Week-1 `temas` (the Osteología I week that maps to `anatomia-generalidades`),
  add two bullet strings so the syllabus reflects the added content:
  - `'Desarrollo del hueso: osificación intramembranosa y endocondral; centros primario y secundarios, metáfisis y línea epifisaria (Moore pp. 12–13)'`
  - `'Vascularización e inervación de los huesos: arterias nutricias, epifisarias, metafisarias y periósticas; inervación del periostio (Moore pp. 12–13)'`
- If a `fuentes` entry for this week exists, ensure its `paginas` covers `libro
  11–13 (PDF 35–37)`; otherwise add one for Moore ch.1 with both numberings.

---

## 4. Verification

```bash
npm run build
grep -n "id: 'gen-9'" src/data/anatomia-uad-topics.ts
grep -c "id: 'gen-q" src/data/anatomia-uad-quizzes.ts        # +5
grep -n "Vascularización e inervación\|arteria nutricia\|línea epifisaria" src/data/anatomia-uad-topics.ts
grep -n "Desarrollo del hueso\|Vascularización" src/data/plans/uad-medicina.ts
```

Manual (`npm run dev`):

- [ ] `/topic/anatomia-generalidades`: `gen-8` now shows the 7-step endochondral
      sequence; a new `gen-9` "Vascularización e inervación de los huesos" appears
      at the end; earlier sections keep their `sectionId` (progress not reset).
- [ ] The new quiz items are playable and tagged to `anatomia-generalidades`.
- [ ] Week-1 anatomy `temas` list the two new bullets; the Moore source shows
      `libro 11–13 (PDF 35–37)`.
- [ ] Legible in light and dark mode.

**Mandatory self-audit:** verify 2 of the new items against §2 (nutrient artery vs
periosteal arteries; primary center = diaphysis) and report the result.

---

## 5. Non-objectives

- Don't create a separate topic for this — it belongs in `anatomia-generalidades`.
- Don't renumber existing `sectionId`s; append `gen-9`, add blocks inside `gen-8`.
- Don't duplicate what `gen-8` already states — enrich it.
- Don't touch other subjects, PAI, `unisa-lmgc`, `lmgc-modules`.
- Don't run `npm run deploy`.

---

## 6. Delivery (atomic commits)

1. `feat(anatomia): desarrollo del hueso — secuencia endocondral (Moore pp. 12–13)`
2. `feat(anatomia): vascularización e inervación de los huesos (gen-9)`
3. `feat(quizzes): reactivos de osteogénesis y vascularización ósea`
4. `feat(plan): temas de Semana 1 suman desarrollo y vascularización del hueso`

Report what you found: whether `gen-8` already covered any of §2.1 (to avoid
duplication), the exact Moore pages you quoted with both numberings, and the
self-audit result.
