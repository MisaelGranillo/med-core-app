# PROMPT — MedCore · Genética Básica & Histología I · Week 1 (Classes 1–2)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-30.
> **Prompt language: English. MedCore content stays in Spanish.**
> First study content for the two new subjects. The plan already has their ficha
> (from the alta prompt). This adds Week‑1 Topics from Classes 1–2.
> **Genética = 3 clases/semana → Clase 3 pendiente (Semana 1 parcial).**
> **Histología: the professor marks EXAM items with a ★ in his slides — preserve
> every ★ as a high‑yield flag (§4).**

---

## 0. Sources of truth (transcripts + slides)
- Genética: `…/Genética Básica DEF/Clases/Semana 1/Clase 1/# … Class 1.md`,
  `…/Clase 2/# … Class 2.md` (+ PDFs `Genética Básica - Semana 1 - Clase {1,2}.pdf`).
- Histología: `…/Histología I y sus Laboratorios DEF/Clases/Semana 1/Clase 1/# … Class 1.md`,
  `…/Clase 2/# … Class 2.md` (+ PDF `Histología 1 Semana 1 Clase 1.pdf` and the Clase 2
  screenshots — **the ★ marks live in the images, not the .md**).
Read each `## Summary` (use) + skim `## Transcript`. Ignore attendee lists/logistics.

```bash
cd ~/med-core-app && npm run build
sed -n '54,96p' src/types/index.ts                 # TopicColorKey union
sed -n '20,45p' src/data/colors.ts                 # palette pattern (11 fields)
grep -n "id: 'genetica-basica'\|id: 'histologia-1'" src/data/plans/uad-medicina.ts
tail -3 src/data/anatomia-uad-quizzes.ts
```
Collisions: `grep -rn "genetica-conceptos\|genetica-mendel\|histologia-introduccion\|histologia-microscopia\|'gen-basq\|'his-q" src/`

New data files (mirror `anatomia-uad-topics.ts` / `-quizzes.ts`): create
`src/data/genetica-topics.ts`, `src/data/genetica-quizzes.ts`,
`src/data/histologia-topics.ts`, `src/data/histologia-quizzes.ts`, and spread them into
`topics.ts` / `quizzes.ts`. Add colorKeys **`genetica`** and **`histologia`** (union +
11‑field `TOPIC_COLORS`, verify light/dark). `categoria: 'Genética'` / `'Histología'`.
Each topic: terminology/`note`, variety of `BlockType`, `keyTerms`, 6–8 `keyPoints`,
**≥1 `correlacion`**.

---

## 1. Genética Básica — Week 1 (2 topics; Clase 3 pending)

### 1.1 `genetica-conceptos` — *"Conceptos base e historia de la genética"* (Clase 1)
- **Conceptos**: cromosoma; haploide/diploide; gen; locus; alelo;
  homocigoto/heterocigoto; genotipo/fenotipo.
- **Dominancia**: completa, incompleta, codominancia (ejemplos: plantas, ratones,
  vacas; heterocromía).
- **Epigenética**: el fenotipo cambia por el ambiente con genotipo idéntico (gemelas).
- **Historia**: Hooke (célula), Darwin, Mendel (redescubierto en 1900), **Watson &
  Crick (1953)**, **Rosalind Franklin** (Photo 51 del ADN, 1952, usada sin crédito),
  **genoma humano secuenciado el 24 abr 2003**.

### 1.2 `genetica-mendel` — *"Las leyes de Mendel"* (Clase 2)
- **1.ª ley (uniformidad)**: AA × aa → F1 uniforme, fenotipo dominante.
- **2.ª ley (segregación)**: Aa × Aa → recesivo reaparece **3:1**.
- **3.ª ley (transmisión independiente)**: dihíbrido **9:3:3:1** (16 combinaciones).
- **Cuadro de Punnett**.
- **Grupos sanguíneos** (no siguen variabilidad mendeliana amplia; útil en paternidad:
  padres A y O **no** pueden tener hijo AB).
- **Codominancia / dominancia incompleta** (heterocromía).
- **ADN mitocondrial**: herencia **solo materna** (la cola del espermatozoide se
  desprende).
- Correlaciones: paternidad por grupo sanguíneo; linajes por ADN mitocondrial.

Plan (`genetica-basica`, Semana 1): `topicIds: ['genetica-conceptos','genetica-mendel']`;
mark **parcial** (Clase 3 pendiente — 3 clases/semana). Materiales: los 2 PDFs de clase.
Bank: ~10 items (`gen-basq-q`), targeting 3:1 vs 9:3:3:1, dominancia vs codominancia vs
incompleta, herencia mitocondrial materna, grupos sanguíneos/paternidad.

---

## 2. Histología I — Week 1 (2 topics)

### 2.1 `histologia-introduccion` — *"Introducción: célula y tejidos"* (Clase 1 + inicio 2)
- **Enfoque**: Histología I cubre **tejido epitelial y conectivo** (muscular y nervioso
  → Histología II); abordaje inductivo **célula → tejido → órgano**, con enfoque clínico.
- **Origen celular**: sopa primordial → ARN → procariota → eucariota (LUCA).
- **Eucariota vs procariota**: eucariota más grande, organelos y núcleo definido;
  procariota pequeña, sin organelos membranosos, material en nucleoide.
- **Capacidad regenerativa por tejido**: **epitelial alta**, conectivo variable,
  **muscular limitada**, **nervioso mínima**; cardiomiocitos y neuronas maduras no se
  dividen (cicatriz / gliosis).

### 2.2 `histologia-microscopia-tecnica` — *"Microscopía y técnica histológica"* (Clase 2)
- **Tipos de microscopio y resolución** (tabla):
  ojo humano **0.2 mm** ·★ campo claro **0.2 μm** (luz directa, menor resolución) ·
  campo oscuro **~0.2 μm** ·★ contraste de fase **0.2 μm** (células vivas sin teñir) ·
  fluorescencia **0.2 μm** (inmunofluorescencia) · **MEB 2.5 nm** (3D) ·
  **MET 0.2 nm** (mayor resolución óptica; criofractura; ultraestructura) ·
  **fuerza atómica 50 pm** (★ **mayor resolución**).
- **Estructura del microscopio óptico**: ocular, tubo, objetivos, platina, condensador
  (★ enfoca el haz sobre la muestra), diafragma, tornillos macro/micrométrico; lente
  objetivo (★ recoge la luz que atraviesa la muestra).
- **Técnica histológica (pasos)**: obtención → **fijación (formol 4–10 %)** →
  deshidratación (alcoholes ascendentes) → aclaramiento (**xilol/tolueno**) → **inclusión
  (parafina)** → **corte** (microtomo **3–5 μm** óptico; ★ **ultramicrotomo 50–150 nm**,
  **tetróxido de osmio OsO₄** conserva membranas) → **tinción** → **montaje** (pineno/
  resinas).
- **Tinciones**: **H&E** de rutina (**hematoxilina = basófilo**, azul; **eosina =
  acidófilo**, rosa) · Mallory · **PAS** (glucógeno; celíaca) · **Feulgen** (ADN) ·
  fucsina‑resorcina (fibras elásticas).

Plan (`histologia-1`, Semana 1): `topicIds: ['histologia-introduccion','histologia-microscopia-tecnica']`;
`estado: 'impartido'` (nota: organelos con más detalle pueden continuar). Materiales:
la clase 1 PDF + el **Proyecto Integrador Semana 1** (kind 'Entrega'). Bank: ~12 items
(`his-q`), targeting the ★ facts, stain acidófilo/basófilo, resolutions ranking,
regeneration by tissue, fijación/inclusión/corte order.

---

## 3. Modules
```ts
{ id: 'genetica-uad-s1', badge: 'UAD · Genética Básica — Semana 1',
  title: 'Genética: conceptos y leyes de Mendel', subtitle: 'Conceptos base, historia y las tres leyes de Mendel.',
  emoji: '🧬', topicIds: ['genetica-conceptos','genetica-mendel'] }
{ id: 'histologia-uad-s1', badge: 'UAD · Histología I — Semana 1',
  title: 'Histología: célula, microscopía y técnica', subtitle: 'Introducción, microscopios y técnica histológica.',
  emoji: '🔬', topicIds: ['histologia-introduccion','histologia-microscopia-tecnica'] }
```

---

## 4. ★ Exam‑flagged items (Histología) — MANDATORY

The professor marks exam‑relevant facts with a **★** in his slides. Preserve them as a
**distinct high‑yield flag**: use a `correlacion` block with `variant: 'dato'` and a
title that starts with **"★ Punto de examen"**, or a dedicated `keyPoint` prefixed
"★". Do **not** bury them in prose. The ★ items confirmed from the deck:
- **Ojo humano = 0.2 mm** (referencia de resolución).
- **Microscopio de fuerza atómica = 50 pm → la MAYOR resolución.**
- **Campo oscuro**: solo la luz **refractada** por la muestra entra al objetivo.
- **Contraste de fase**: observa **células vivas sin teñir** (diferencias de índice de
  refracción).
- **MET**: criofractura; ultraestructura (p. ej. mitocondria) — utilidad clínica en
  miopatías mitocondriales, patología renal, errores metabólicos.
- **Ultramicrotomo**: fija con **tetróxido de osmio (OsO₄)** para **conservar
  membranas** (cortes 50–150 nm).
- **Lente objetivo** recoge la luz que atraviesa la muestra; **condensador** enfoca el
  haz sobre la muestra.
Also **open the Histología Clase 2 screenshots/PDF and flag any additional ★** you find
the same way; report which ones you added beyond this list.

---

## 5. Library
Upload the class PDFs to `library.medcore.icu/genetica-basica/` and
`library.medcore.icu/histologia-1/` (names without accents/spaces). Reference them as
`MaterialRef` per week. **Show the upload commands first.** Don't commit PDFs/.md.

---

## 6. Verification
```bash
npm run build
grep -n "genetica\|histologia" src/types/index.ts src/data/colors.ts   # two new colorKeys (11 fields each)
grep -c "id: 'gen-basq-q\|id: 'his-q" src/data/genetica-quizzes.ts src/data/histologia-quizzes.ts
grep -n "genetica-conceptos\|histologia-microscopia-tecnica\|genetica-uad-s1\|histologia-uad-s1" src/data/topics.ts src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "★ Punto de examen\|★" src/data/histologia-topics.ts
```
Manual: both subjects show Week‑1 topics under new modules + their categories (Genética,
Histología), new colors legible light+dark; Genética Week 1 reads **parcial**; the ★
exam items render as distinct high‑yield callouts; quizzes play; anatomía/inglés
untouched.

**Mandatory self‑audit:** verify 4 items against the `.md`/slides — Mendel 3:1 vs
9:3:3:1; ADN mitocondrial materno; fuerza atómica = mayor resolución (★); hematoxilina =
basófilo / eosina = acidófilo. Report the ★ items flagged and per‑topic counts.

---

## 7. Non‑objectives
- Don't load Genética Clase 3 (pending) or Histología content beyond Classes 1–2.
- Don't invent facts — use the `.md`/slides. Don't touch anatomía/inglés. No PDFs/.md in
  the repo. No `npm run deploy`.

## 8. Delivery (atomic commits)
1. `feat(genetica): conceptos base, historia y leyes de Mendel (Semana 1)`
2. `feat(histologia): introducción, microscopía y técnica histológica (Semana 1)`
3. `feat(histologia): marca ★ los puntos de examen del profesor`
4. `feat(quizzes): bancos de Genética e Histología (Semana 1)`
5. `feat(plan,modules): Semana 1 de las materias nuevas (Genética parcial)`

Report the ★ items flagged, what you left pending (Genética Clase 3), and the self‑audit.
