# PROMPT — MedCore · Histología I · Semana 2 Clase 1 — Tejido epitelial

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-08.
> **Prompt language: English. MedCore content stays in Spanish.**
> Load Histología Semana 2 Clase 1: **tejido epitelial** — generalidades, clasificación,
> funciones, nutrición (corion) y glándulas. One rich Topic + a quiz bank.

---

## 0. Sources & current state
Primary = ChatGPT study notes (digested); transcript + slides for verification:
- `…/Histología I y sus Laboratorios DEF/Clases/Semana 2/Clase 1/Histologia_I_Semana_2_Clase_1_Apuntes.md`
- `…/…/Semana 2/Clase 1/# Histología I y sus Laboratorios DEF Week 2 Class 1.md` (transcript)
- slides PDF — stays in the private library, **not** the repo.

Existing: `histologia-topics.ts` (`histologia-introduccion`, `histologia-microscopia-tecnica`,
`histologia-celula`, `histologia-repaso-s1`), `histologia-quizzes.ts` (prefixes `his-q`,
`his-r-q`), modules `histologia-uad-s1` + `histologia-uad-repaso-s1`, plan Histología
Semana 2 = placeholder (title "Tejido epitelial", `temas` listed, **no `topicIds`, no
`estado`**).

```bash
cd ~/med-core-app && npm run build
grep -n "id: 'histologia" src/data/histologia-topics.ts | grep -v "his-\|-q"
grep -n "Tejido epitelial\|number: 2" src/data/plans/uad-medicina.ts | head
```

---

## 1. New Topic — `histologia-epitelial` (append to `histologiaTopics`)
`colorKey: 'histologia'`, `categoria: 'Histología'`, `emoji: '🔬'`.
Title *"Tejido epitelial: generalidades y clasificación"*; subtitle *"Revestimiento y
glándulas: capas, forma celular, funciones, nutrición y ejemplos anatómicos"*.
6–8 `keyPoints`. Depth bar (teaching prose + complete definitions; ≥1 `correlacion`).
Sections:

1. **Los cuatro tejidos básicos + qué es un tejido.** Epitelial, conectivo, muscular,
   nervioso (idea de cada uno). En Histología I se ven epitelial y conectivo; muscular y
   nervioso en Histología II. Tejido = asociación ordenada de células semejantes; la meta
   es **describir y diferenciar**, no solo nombrar.
2. **Generalidades del epitelio.** De revestimiento vs glandular/secretor. **Avascular**;
   descansa sobre **membrana basal**; asociado a tejido conectivo subyacente; **alta
   renovación** (velocidad según el sitio). Origen embrionario: ecto (epidermis), meso
   (mesotelio), endo (epitelio intestinal).
3. **Funciones (5).** Protección (barrera contra virus/bacterias/hongos/partículas);
   transporte (cilios — tráquea); absorción (intestino delgado); síntesis/secreción
   (glucoproteínas, hormonas — sudoríparas, tiroides); recepción de estímulos
   (neuroepitelios — gusto, olfato).
4. **Cómo clasificar — el algoritmo.** Pregunta 1: **¿cuántas capas?** → simple /
   estratificado / pseudoestratificado / transicional. Pregunta 2: **¿qué forma tienen las
   células?** → plano (escamoso) / cúbico (cuboidal) / cilíndrico. Regla de oro del
   estratificado: **el nombre lo da la capa más superficial**. `note` con el algoritmo de
   4 pasos (membrana basal → nº capas → forma superficial → ¿queratina?).
5. **Epitelios simples** (una capa, todas sobre la membrana basal): **plano simple**
   (alvéolos, cápsula de Bowman, vasos=endotelio, pleura, peritoneo, asa de Henle,
   mesotelio); **cúbico simple** (túbulos renales, folículo tiroideo, conductos
   glandulares); **cilíndrico simple** (tubo digestivo, útero, oviducto, vesícula biliar).
6. **Epitelios estratificados** (≥2 capas; no todas tocan la membrana basal; se nombran
   por la superficie): **plano estratificado no queratinizado** (superficiales planas con
   núcleo — boca, faringe, esófago, cuerdas vocales, vagina); **plano estratificado
   queratinizado** (superficiales muertas sin núcleo + capa de queratina — **epidermis**;
   piel fina y gruesa); **cúbico estratificado** (conductos de glándulas sudoríparas);
   **cilíndrico estratificado** (grandes conductos excretores, uretra masculina).
   Renovación de la piel ≈ **28–30 días**.
7. **Pseudoestratificado y transicional.** **Cilíndrico pseudoestratificado**: parece
   estratificado pero **todas las células tocan la membrana basal** (no todas llegan a la
   superficie); puede tener **cilios** — tráquea, bronquios, epidídimo, conductos
   deferentes. **Transicional/urotelio**: células que **cambian de forma con la
   distensión**; **exclusivo del sistema urinario** (vías urinarias, cálices, uretra
   proximal).
8. **Nutrición del epitelio (avascular).** Los vasos están en el tejido conectivo
   subyacente (**corion**); nutrientes por **difusión** (proceso pasivo, a favor de
   gradiente) a través de la membrana basal. **Corion liso** (epitelio delgado, contacto
   plano) vs **corion papilar** (papilas que aumentan superficie y acercan vasos — piel;
   las papilas dérmicas forman la **huella dactilar**).
9. **Glándulas.** **Exocrinas** → secretan por **conductos** (sudoríparas, salivales,
   mamarias); **endocrinas** → vierten a la **sangre** (tiroides, páncreas).

**`correlacion` (clinica o dato):** el docente marcó asociaciones de examen — inclúyelas
como bloque ★ "Núcleo duro para el examen": alvéolos / Bowman / vasos → **plano simple**;
tiroides / túbulos renales → **cúbico simple**; tubo digestivo → **cilíndrico simple**;
piel → **plano estratificado queratinizado**; esófago → **plano estratificado no
queratinizado**; tráquea → **cilíndrico pseudoestratificado ciliado**; vías urinarias →
**transicional**; estratificado → lo nombra la capa superficial; epitelio → avascular →
nutrición por difusión.

Incluye una **tabla maestra** (epitelio · nº capas · forma característica · localización
clave) — es el corazón visual del tema. TA no aplica (no es anatomía macroscópica).

---

## 2. Quiz bank — 10–12 items (`histologia-quizzes.ts`, `topicId: 'histologia-epitelial'`)
New prefix **`his-epiq`**. Cubre: los 4 tejidos; epitelio avascular + membrana basal;
regla del estratificado (capa superficial); plano simple (alvéolos/Bowman/endotelio);
cúbico simple (tiroides/túbulos); cilíndrico simple (digestivo); plano estratificado
queratinizado (piel) vs no queratinizado (esófago); cilíndrico pseudoestratificado ciliado
(tráquea); transicional (vías urinarias); pseudoestratificado ≠ estratificado (todas tocan
la membrana basal); nutrición por difusión desde el corion; corion liso vs papilar
(huella dactilar); exocrina (conducto) vs endocrina (sangre). Marca ★ las asociaciones que
el docente priorizó. `explanation` en español; distractores de un epitelio hermano;
`correctIndex` repartido.

---

## 3. Wire it in (Semana 2 → impartida)
- **`modules.ts`**: add module **`histologia-uad-s2`** (badge "UAD · Histología I —
  Semana 2", title "Histología: tejido epitelial", subtitle "Generalidades, clasificación,
  funciones, nutrición y glándulas del epitelio", emoji 🔬, `topicIds:
  ['histologia-epitelial']`).
- **`plans/uad-medicina.ts`** Histología Semana 2 (title "Tejido epitelial"): set
  `estado: 'impartido'`; add `topicIds: ['histologia-epitelial']`; enrich `temas`
  (generalidades y los 4 tejidos; clasificación por capas y forma; funciones; nutrición
  por difusión y corion; glándulas exo/endocrinas). Add a `materiales` entry "Semana 2 ·
  Clase 1 — Tejido epitelial". Nota: la clase cerró anunciando **polaridad celular
  (apical/basal/lateral)** como siguiente — deja una línea "pendiente" si aplica.
- `topics.ts` / `quizzes.ts` already spread `histologiaTopics` / `histologiaQuestions`.

---

## 4. Verification
```bash
npm run build
grep -n "histologia-epitelial" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "his-epiq" src/data/histologia-quizzes.ts        # 10–12
grep -o "id: 'his-epiq-q[0-9]*'" src/data/histologia-quizzes.ts | sort | uniq -d   # empty
```
Manual (`npm run dev`, light+dark): new **Tejido epitelial** topic reachable from the
Semana 2 module and Plan → Histología Semana 2 (impartida); tabla maestra legible en dark;
bloque ★ presente; quiz plays.

**Mandatory self‑audit (Think Again):** the notes are a secondary digest — verify against
the transcript/a histology text on 5 points before asserting: pseudoestratificado = todas
las células tocan la membrana basal; transicional = **exclusivo del sistema urinario**;
estratificado se nombra por la **capa superficial**; epitelio **avascular** nutrido por
difusión desde el corion; tráquea = **cilíndrico pseudoestratificado ciliado**. Report the
item count and anything you couldn't confirm.

---

## 5. Non‑objectives
- Don't renumber existing `sectionId`s or edit Semana 1 histología. Don't build
  atlas/láminas here (offer separately). Don't develop polaridad celular (siguiente clase).
  No PDF/.md into the repo. No `npm run deploy`.

## 6. Delivery
1. `feat(histologia): Topic tejido epitelial — generalidades y clasificación (S2 C1)`
2. `feat(histologia): banco de quiz del epitelio (his-epiq) con marcas ★`
3. `chore(histologia): Semana 2 impartida en módulo y plan`

Report the item count and the self‑audit.
