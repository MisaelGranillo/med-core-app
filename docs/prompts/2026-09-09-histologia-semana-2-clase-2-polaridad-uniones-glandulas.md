# PROMPT — MedCore · Histología I · Semana 2 Clase 2 — Polaridad celular, medios de unión y glándulas

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-09.
> **Prompt language: English. MedCore content stays in Spanish.**
> Completa Semana 2 de Histología: **Clase 2** = polaridad celular epitelial (dominios
> apical/lateral/basal), especializaciones apicales, medios de unión, membrana basal y
> glándulas (incl. la **tarea** de mecanismos de secreción). Clase 1 (tejido epitelial)
> ya está cargada como `histologia-epitelial`.

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript for verification:
- `…/Histología I y sus Laboratorios DEF/Clases/Semana 2/Clase 2/Histologia_I_Semana_2_Clase_2_Apuntes_y_Tarea.md`
  (+ `# Epithelial Cell Polarity Overview Week 2 Class 2.md` transcript, + slides PDF).
  PDF stays in the private library.

Existing (loaded): topic `histologia-epitelial`; module `histologia-uad-s2`
(`topicIds: ['histologia-epitelial']`); quiz prefix `his-epiq`; plan Histología Semana 2 =
impartida (title "Tejido epitelial"). The Clase 1 topic closed announcing polaridad celular
as the next class — this is it.

```bash
cd ~/med-core-app && npm run build
grep -n "histologia-uad-s2\|histologia-epitelial" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -o "id: 'his-[a-z]*q" src/data/histologia-quizzes.ts | sort -u
```

---

## 1. New Topic — `histologia-epitelial-polaridad` (append to `histologiaTopics`)
`colorKey: 'histologia'`, `categoria: 'Histología'`, `emoji: '🔬'`. Title *"Polaridad
celular epitelial: dominios, uniones y glándulas"*; subtitle *"Apical/lateral/basal,
especializaciones, medios de unión, membrana basal y glándulas"*. Depth bar; ≥1
`correlacion`. Sections:

1. **Polaridad celular.** Tres dominios (tabla): **apical** (hacia la luz/superficie
   libre; polo funcional), **lateral** (entre células vecinas; unión y comunicación),
   **basal** (hacia la membrana basal; anclaje y nutrición). La polaridad dirige procesos
   (p. ej. el enterocito absorbe por apical y dirige a basal).
2. **Dominio apical — especializaciones.** **Microvellosidades** (aumentan superficie de
   absorción; base de **actina**; **villina** hace fascículos; **ribete en cepillo** =
   intestino, **chapa estriada** = túbulo proximal renal). **Estereocilios** (largos,
   filiformes, **inmóviles**, sensoriales/absorción; **espectrina**; oído interno,
   epidídimo, conducto deferente). **Cilios** (móviles; ~10 μm × 0.2 μm; estructura interna
   = **axonema**; proteína motora **dineína**). Tabla de cilios: **móviles 9+2** (moco/
   partículas — vías respiratorias, trompas de Falopio; golpe efectivo + de recuperación,
   ritmo metacrónico), **primarios 9+0** (inmóviles, sensoriales), **nodales 9+0**
   (rotatorio, eje izquierda‑derecha embrionario).
3. **Dominio lateral — medios de unión.** Categorías por extensión: **zónula** (rodea toda
   la célula), **fascia/banda** (zona amplia), **mácula** (punto). **Zónula occludens**
   (unión estrecha; sella el espacio; barrera selectiva; **ocludina, claudina**). **Zónula
   adherente** (cinturón bajo la occludens; **cadherinas** Ca²⁺‑dependientes; unida a
   **actina**). **Desmosoma / mácula adherente** (unión célula‑célula fuerte;
   **desmogleína, desmocolina**; resistencia mecánica). **Uniones comunicantes / nexos**
   (**conexinas** en **conexones**; comunicación rápida — músculo cardíaco).
4. **Dominio basal.** **Hemidesmosomas** (anclan a la membrana basal; **integrina** +
   **filamentos intermedios**; epitelios con abrasión — piel, córnea, cavidad oral,
   esófago, vagina). **Contactos focales** (**integrina** + **filamentos de actina**; más
   dinámicos; migración y cicatrización; vinculina, talina).
5. **Membrana basal.** Capas: **lámina lúcida, lámina densa, lámina reticular**; la lámina
   densa es rica en **colágeno tipo IV**. Funciones: soporte, filtración selectiva,
   reparación/regeneración, y limita la invasión de células malignas mientras esté intacta.
6. **Glándulas.** Célula glandular = epitelial especializada en secretar; glándula =
   conjunto organizado. **Histogénesis** = invaginación del epitelio hacia el conjuntivo.
   **Exocrinas** (con **conducto**; **adenómero** = porción secretora + conducto).
   **Endocrinas** (sin conducto; vierten a **capilares**). Clasificación introducida: por
   conducto (simple/compuesta), por forma del adenómero, por producto (serosa/mucosa/mixta),
   por mecanismo (merócrina/apócrina/holócrina/endócrina). **Células caliciformes** =
   secretoras unicelulares de **moco** (epitelio gastrointestinal).
7. **Mecanismos de secreción (TAREA asignada).** Tabla: **merócrina** (la célula queda
   íntegra; **exocitosis** — sudoríparas, acinos pancreáticos), **apócrina** (pierde parte
   del citoplasma apical — **glándula mamaria**), **holócrina** (**muere toda la célula**,
   que pasa a la secreción — **glándula sebácea**), **endócrina** (íntegra; libera a
   **capilares** — tiroides). Marca como `note` que fue **tarea** del docente.

**`correlacion` (clinica):** **pénfigo vulgar** = autoanticuerpos contra proteínas del
desmosoma (**desmogleína**) → ampollas por pérdida de adhesión célula‑célula (está en la
clase). *(Opcional enriquecimiento, verifícalo y etiquétalo: discinesia ciliar primaria /
síndrome de Kartagener por dineína defectuosa → situs inversus, ligado a los cilios
móviles 9+2 y nodales — no está en la transcripción.)*

---

## 2. Quiz bank — 10–12 items (`histologia-quizzes.ts`, `topicId: 'histologia-epitelial-polaridad'`)
New prefix **`his-polq`**. Cubre: los 3 dominios (función de cada uno); microvellosidades →
actina/absorción; estereocilios → inmóviles/espectrina; cilios móviles **9+2 + dineína**
vs primarios/nodales **9+0**; zónula occludens → **ocludina/claudina**; zónula adherente →
**cadherina/Ca²⁺**; desmosoma → **desmogleína/desmocolina**; nexos → **conexinas**;
hemidesmosoma → **integrina + filamentos intermedios**; membrana basal → **colágeno IV**
en lámina densa; exocrina (conducto) vs endocrina (capilares); adenómero = porción
secretora; **merócrina/apócrina/holócrina** (exocitosis / pierde ápice / muere la célula);
pénfigo vulgar → desmogleína. `explanation` en español; distractores de estructura hermana;
`correctIndex` repartido; sin IDs duplicados.

---

## 3. Wire it in
- **`modules.ts`**: add `'histologia-epitelial-polaridad'` to `histologia-uad-s2.topicIds`
  and update its subtitle to incluir polaridad, uniones y glándulas.
- **`plans/uad-medicina.ts`** Histología Semana 2: add the new topicId; enrich `temas`
  (polaridad celular y dominios; especializaciones apicales/cilios; medios de unión;
  membrana basal; glándulas y mecanismos de secreción); add a `materiales` entry "Semana 2
  · Clase 2 — Polaridad celular, uniones y glándulas". Keep `estado` impartido. Si la clase
  anunció una siguiente (p. ej. tejido conectivo), deja una línea "pendiente" si aplica.
- `topics.ts` / `quizzes.ts` already spread the histología arrays.

---

## 4. Verification
```bash
npm run build
grep -n "histologia-epitelial-polaridad" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "his-polq" src/data/histologia-quizzes.ts        # 10–12
grep -o "id: 'his-polq-q[0-9]*'" src/data/histologia-quizzes.ts | sort | uniq -d   # empty
```
Manual (`npm run dev`, light+dark): new polaridad topic reachable from `histologia-uad-s2`
and Plan → Histología Semana 2; tablas (dominios, cilios, medios de unión, secreción)
legibles en dark; la sección de secreción marcada como tarea; quiz plays.

**Mandatory self‑audit (Think Again):** the notes are a secondary digest — verify against
the transcript/a histology text on 5 points: cilios **móviles 9+2 / primarios y nodales
9+0**; zónula occludens = **ocludina/claudina**; desmosoma = **desmogleína/desmocolina**
(pénfigo vulgar); hemidesmosoma = **integrina + filamentos intermedios**; **holócrina =
muere toda la célula** (sebácea) vs **merócrina = exocitosis**. Report the item count and
anything you couldn't confirm; keep any Kartagener/enrichment clearly labeled, not asserted
as class content.

---

## 5. Non‑objectives
- Don't renumber existing `sectionId`s or edit `histologia-epitelial` (Clase 1). Don't
  build atlas/láminas here. No PDF/.md into the repo. No `npm run deploy`.

## 6. Delivery
1. `feat(histologia): Topic polaridad celular, uniones y glándulas (S2 C2)`
2. `feat(histologia): banco de quiz his-polq`
3. `chore(histologia): Semana 2 Clase 2 en módulo y plan`

Report the item count and the self‑audit.
