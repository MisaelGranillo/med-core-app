# PROMPT — MedCore · Anatomy I · Week 4 — Miología II (abdominal wall + limbs)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-22.
> **Prompt language: English. MedCore content stays in Spanish.**
> Completes **Anatomía Humana y Disección I**: the muscles of the abdominal wall and
> of the upper and lower limbs. Depends on the Week‑3 miología (colorKey `miologia`,
> module `anatomia-uad-s3-miologia`) already existing.

---

## 0. Sources of truth (authoritative)

Per‑class **Markdown transcripts** (exact origen/inserción/inervación/función,
mnemonics, clinical notes) — read them:
- `…/Anatomía Humana y Disección I DEF/Semana 4/Clase 1/# Week 4 Anatomy Review Class 1.md` (pared abdominal)
- `…/Semana 4/Clase 2/# Week 4 Anatomy Review Class 2.md` (miembro superior: pectoral, dorso, hombro, brazo, antebrazo anterior)
- `…/Semana 4/Clase 3/# Week 4 Anatomy Review Class 3.md` (antebrazo posterior, mano, glúteos)
- `…/Semana 4/Clase 4/# Week 4 Anatomy Review Class 4.md` (muslo, pierna)
- Slides: `…/Semana 4/Musculos Clases 1 y 2.pptx` and `…/Semana 4/Clase 3/Músculos Clase 3.pptx`
- **Textbook, full, as Markdown:** `…/Anatomía Humana y Disección I DEF/moore.md`
  (2.7 MB) — use to **verify** insertions/innervation and to cite pages.

Each `.md` has a `## Summary` (use) + `## Transcript` (skim). Foot muscles ("pie")
were flagged for the next session — if that class's material isn't present, mark the
foot as a small pending patch and load everything else.

```bash
cd ~/med-core-app
npm run build
sed -n '20,30p' src/data/modules.ts                 # anatomia-uad-s3-miologia
grep -n "colorKey: 'miologia'\|categoria: 'Miología'" src/data/anatomia-uad-topics.ts | head
grep -n "id: 'mdia-q\|id: 'mdor-q" src/data/anatomia-uad-quizzes.ts | tail -1
sed -n '160,175p' src/data/plans/uad-medicina.ts    # Week 4 plan (Miología II)
```
Collisions: `grep -rn "musculos-pared-abdominal\|musculos-hombro-brazo\|musculos-antebrazo-mano\|musculos-cadera-muslo\|musculos-pierna-pie" src/`

---

## 1. Objective — five topics (colorKey `miologia`, `categoria: 'Miología'`)

| Topic | Cubre | prefijo quiz |
|---|---|---|
| `musculos-pared-abdominal` | anterolateral + posterior | `mpab-q` |
| `musculos-hombro-brazo` | pectoral, dorso, hombro, manguito rotador, brazo | `mhb-q` |
| `musculos-antebrazo-mano` | antebrazo anterior/posterior, mano | `mam-q` |
| `musculos-cadera-muslo` | glúteos, rotadores externos, muslo | `mcm-q` |
| `musculos-pierna-pie` | pierna (y pie si hay material) | `mpp-q` |

Add them to a Week‑4 module and to the plan. Each topic: 5–8 sections, `keyTerms`,
6–8 `keyPoints`, terminology `note` (§3), **≥1 `correlacion`** (the class is full of
high‑yield clinical hooks — §4). Never renumber `sectionId`s.

---

## 2. Verified content (scaffold; pull per‑muscle detail from the `.md` + moore.md)

### 2.1 `musculos-pared-abdominal`
- **Anterolateral** (5): oblicuo externo (mayor), oblicuo interno (menor), transverso
  del abdomen, recto del abdomen (poligástrico — los "cuadritos"), piramidal. Capas:
  piel, fascia de **Camper**, fascia de **Scarpa (Escarpa)**. **Vaina del recto**
  (anterior y posterior) → **línea alba**; bajo el **arco de Douglas** desaparece la
  hoja posterior. **Triángulo lumbar de Petit** (medial dorsal ancho, lateral oblicuo
  externo, piso oblicuo interno, base cresta ilíaca).
- **Posterior**: **psoas ilíaco (iliopsoas)** → trocánter menor (flexiona muslo o
  tronco), psoas menor (inconstante), cuadrado lumbar (fija el tronco; subcostal +
  plexo lumbar).

### 2.2 `musculos-hombro-brazo`
- **Región pectoral**: pectoral mayor (clavícula/esternón → surco intertubercular /
  canal bicipital; aducción + rotación interna), pectoral menor, subclavio, serrato
  anterior (mayor).
- **Dorso/hombro**: trapecio, dorsal ancho, elevador de la escápula (angular del
  omóplato), romboides; deltoides; **manguito rotador = supraespinoso, infraespinoso,
  redondo menor, subescapular** (mnemotecnia SITS / "CIS menor").
- **Brazo**: bíceps braquial, coracobraquial, braquial anterior (flexores); tríceps
  braquial (extensor, nervio radial).

### 2.3 `musculos-antebrazo-mano`
- **Antebrazo anterior**: grupos superficial y profundo (flexores y pronadores);
  túnel del carpo, nervio mediano.
- **Antebrazo posterior**: **braquiorradial (supinador largo)** — origen cresta
  supracondílea lateral → estiloides del radio, único posterior que flexiona;
  superficiales (extensor radial largo/corto del carpo, extensor de los dedos,
  extensor del meñique, extensor cubital del carpo, ancóneo); profundos (supinador,
  abductor largo del pulgar, extensor corto y largo del pulgar, extensor del índice).
  Inervación: nervio radial / interóseo posterior.
- **Mano**: eminencia tenar (abductor corto, flexor corto, oponente, aductor del
  pulgar), hipotenar (palmar corto, abductor, flexor corto, oponente del meñique),
  lumbricales (tendón→expansión extensora), interóseos (palmares 2.º/4.º/5.º MC;
  dorsales). Mediano + cubital.

### 2.4 `musculos-cadera-muslo`
- **Glúteos**: mayor (único con porción craneal en humanos), mediano, menor, tensor
  de la fascia lata → tracto iliotibial / trocánter mayor. **Rotadores externos**:
  piriforme (piramidal), obturador interno, gemelos superior/inferior, cuadrado
  femoral, obturador externo. Inervación: glúteo inferior (mayor), glúteo superior
  (mediano, menor, TFL).
- **Muslo** (fascia lata, 3 compartimientos): **anterior** (cuádriceps = recto femoral
  + 3 vastos, sartorio, iliopsoas, subcrural; femoral L2–L4), **medial** (pectíneo,
  aductores mayor/mediano/menor, grácil; obturador), **posterior** (bíceps femoral,
  semitendinoso, semimembranoso; ciático: peroneo + tibial).

### 2.5 `musculos-pierna-pie`
- **Pierna** (3 compartimientos): **anterior** (tibial anterior, extensor largo del
  hallux, extensor largo de los dedos, peroneo anterior/tercer peroneo), **lateral**
  (peroneo largo y corto), **posterior superficial** (gastrocnemio/gemelos, sóleo,
  plantar → **tendón de Aquiles/calcáneo**) y **profundo** (poplíteo, flexores, tibial
  posterior).
- **Pie**: si hay material de la clase de cierre, añade planta (capas) y dorso; si no,
  déjalo como pequeño parche pendiente y dilo.

### 2.6 Confusions to target (≥25 % across the banks)
1. **Manguito rotador = SITS** (supraespinoso, infraespinoso, redondo menor,
   subescapular) — no el redondo mayor ni el deltoides.
2. **Tríceps = radial** (extensor); flexores del brazo = musculocutáneo.
3. **Braquiorradial (supinador largo)** flexiona el antebrazo pese a ser "posterior".
4. **Compartimientos del muslo** y su nervio: anterior femoral, medial obturador,
   posterior ciático.
5. **Isquiotibiales** (bíceps femoral, semitendinoso, semimembranoso): flexión de
   pierna + extensión de muslo.
6. **Pata de ganso** = sartorio + grácil (recto interno) + semitendinoso.
7. **Compartimiento posterior de la pierna → tendón de Aquiles**; anterior
   dorsiflexión, lateral eversión.
8. **Glúteo mediano** paralizado → marcha de Trendelenburg ("de pato").
9. **Pared abdominal**: capas Camper/Scarpa; línea alba; arco de Douglas.

---

## 3. Terminology rule (TA primary · classic in parentheses)

| TA (primary) | classic (professor) |
|---|---|
| Oblicuo externo / interno del abdomen | oblicuo mayor / menor |
| Recto del abdomen | recto anterior del abdomen |
| Iliopsoas | psoas ilíaco |
| Serrato anterior | serrato mayor |
| Elevador de la escápula | angular del omóplato |
| Braquiorradial | supinador largo |
| Supinador | supinador corto |
| Grácil | recto interno |
| Bíceps femoral | bíceps crural |
| Gastrocnemio | gemelos |
| Peroneo largo / corto (fibular) | peroné lateral largo / corto |
| Piriforme | piramidal (de la pelvis) |
| Surco intertubercular | canal bicipital |
| Tendón calcáneo | tendón de Aquiles |

Classic also counts as correct in items. One `note` per topic.

---

## 4. Correlations (accurate; the class gave these hooks)
- *"La ruptura del tendón distal del bíceps braquial da el **signo de Popeye**: el
  vientre se retrae y abulta en el brazo."*
- *"El **manguito rotador** (SITS) estabiliza la cabeza del húmero en la glenoides; el
  supraespinoso es el que más se desgarra."*
- *"La parálisis del **glúteo mediano** produce la **marcha de Trendelenburg** ('de
  pato'): la pelvis cae hacia el lado sano al apoyar."*
- *"La **pata de ganso** (sartorio, grácil, semitendinoso) comparte una bursa
  anserina; su tendinitis causa dolor medial de rodilla."*
- *"Grados de esguince: 1 = distensión, 2 = ruptura parcial, 3 = ruptura total del
  ligamento."*

---

## 5. Deliverables
- **Topics** (§1–§4) in `anatomia-uad-topics.ts`. Variety of `BlockType`: `table`
  (músculo → origen/inserción/inervación/función), `comparison` (compartimientos y
  nervios; manguito rotador vs otros), `list` (grupos), `definition` (línea alba, pata
  de ganso, manguito rotador), `note` (terminología), `correlacion`.
- **Bank** `anatomia-uad-quizzes.ts`: ~10–12 items per topic (~50–55 total), one prefix
  each (§1), appended; descending study value; distractors from a sibling muscle/
  compartment; `explanation` justifies + rules out one; `correctIndex` spread; ≥12 on
  §2.6.
- **Module** `modules.ts`:
  ```ts
  { id: 'anatomia-uad-s4-miologia', badge: 'UAD · Anatomía Humana y Disección I — Semana 4',
    title: 'Miología II — pared abdominal y miembros', subtitle: 'Músculos de la pared abdominal, miembro superior e inferior.',
    emoji: '🦿', topicIds: ['musculos-pared-abdominal','musculos-hombro-brazo','musculos-antebrazo-mano','musculos-cadera-muslo','musculos-pierna-pie'] }
  ```
- **Plan** `uad-medicina.ts` Week 4: `estado: 'impartido'`, `topicIds` the five; update
  `temas` (Miología II impartida; foot as small pending if no material). Add `fuentes`
  (Moore músculos de tronco y miembros, both numberings via moore.md/Moore PDF) and
  `content.materiales` for the two class decks + the **Caso Clínico (bíceps/Popeye)**
  and **Proyecto Integrador (tabla de 5+5 músculos)** as `kind: 'Entrega'`.
- **Library**: convert both pptx to PDF (`soffice --headless --convert-to pdf`), name
  them `Semana 4 - Musculos Clases 1-2.pdf` and `Semana 4 - Musculos Clase 3.pdf`,
  upload to `library.medcore.icu/anatomia-humana-diseccion-1/`. **Show the upload
  command first.** Compress >30 MB. Don't commit pptx/PDF/.md.
- **Atlas**: deferred.

---

## 6. Verification
```bash
npm run build
grep -c "id: 'mpab-q\|id: 'mhb-q\|id: 'mam-q\|id: 'mcm-q\|id: 'mpp-q" src/data/anatomia-uad-quizzes.ts   # ~50
grep -n "musculos-pierna-pie\|anatomia-uad-s4-miologia" src/data/topics.ts src/data/modules.ts src/data/plans/uad-medicina.ts
```
Manual: the five topics appear under a Week‑4 module and the **Miología** category,
`miologia` color, light+dark OK; each has ≥1 correlation; Week 4 plan reads impartido
(foot pending if applicable); quizzes play; Week‑3 miología untouched.

**Mandatory self‑audit:** verify 5 items against the `.md`/moore.md — manguito rotador
= SITS; tríceps = radial; muslo posterior = ciático; pata de ganso components; glúteo
mediano → Trendelenburg. Report per‑topic counts, the real Moore pages, whether the
foot was pending, and whether `soffice` was available.

---

## 7. Non‑objectives
- Don't reuse `osteologia`/`artrologia` colors. Don't renumber `sectionId`s. Don't
  touch earlier weeks. No pptx/PDF/.md in the repo. No `npm run deploy`.

## 8. Delivery (atomic commits)
1. `feat(anatomia): músculos de la pared abdominal (Miología II)`
2. `feat(anatomia): músculos de hombro, brazo, antebrazo y mano`
3. `feat(anatomia): músculos de cadera, muslo, pierna y pie`
4. `feat(quizzes): banco de Miología II (~50)`
5. `feat(plan,modules): Semana 4 — Miología II; cierra Anatomía I`

Report what you pulled from the transcripts vs moore.md, the foot status, and the
self‑audit result.
