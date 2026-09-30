# PROMPT — MedCore · Histología I · Semana 3 Clase 1 — Tejido conectivo (introducción)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-14.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "el docente dijo"; use "se…" / "del examen" (regla de la skill).**
> Carga la Clase 1 de la Semana 3: **tejido conectivo** — introducción, matriz extracelular,
> fibras/colágenos y células (fijas y móviles). Enlaza con la piel (Semana 2), no dupliques.

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript para verificar:
- `…/Histología I y sus Laboratorios DEF/Clases/Semana 3/Clase 1/Histologia_I_Semana_3_Clase_1_Apuntes.md`
  (+ transcript `# … Week 3 Class 1.md`, + slides PDF a la biblioteca privada, no al repo).
Ya cargado: topics de Semana 2 (incl. `histologia-piel`, que introduce la dermis como
conectivo, y `histologia-epitelial-polaridad` con la membrana basal/colágeno IV) → **enlaza**.
La Semana 3 tiene más clases (leucocitos, cartílago, hueso, etc.) → esta es la **1.ª**.

```bash
cd ~/med-core-app && npm run build
grep -n "id: 'histologia-piel'\|Tejido conectivo\|number: 3" src/data/histologia-topics.ts src/data/plans/uad-medicina.ts | head
grep -o "id: 'his-[a-z0-9]*q" src/data/histologia-quizzes.ts | sort -u
```

---

## 1. New Topics (append to `histologiaTopics`, `colorKey:'histologia'`, `categoria:'Histología'`, `emoji:'🔬'`)
Depth bar; ≥1 `correlacion`. Dos topics:

### 1a. `histologia-conectivo-matriz` — "Tejido conectivo: matriz, fibras y colágenos" (S3 C1, parte 1)
- **Idea central**: es el tejido de **sostén**; a diferencia del epitelio, la **matriz
  extracelular (MEC) predomina sobre las células**. Nueva estrategia de lectura: MEC →
  fibras → células → organización → función.
- **Clasificación general**: conectivo **embrionario** (mesénquima), **propiamente dicho**,
  y **especializado** (hueso, cartílago, adiposo, sangre).
- **Funciones**: soporte estructural (tendón de Aquiles ↔ colágeno I), medio de
  **intercambio** (vaso → MEC → célula), **defensa** (macrófagos, mastocitos, linfocitos,
  plasmocitos), **depósito de grasa** (adipocitos → triglicéridos).
- **MEC**: fibras + sustancia fundamental + líquido + **proteoglucanos**; su composición
  define las propiedades mecánicas.
- **Fibras**: **colágenas**, **elásticas**, **reticulares** (entrenar el ojo para
  reconocerlas, no depender de la forma celular).
- **Colágeno** (proteína más abundante; ~**30 %** de la proteína corporal; >28 tipos) —
  tabla de los que se enfatizan: **I** tracción (conectivo, hueso, dentina, cemento,
  cicatriz), **II** cartílago (hialino/elástico), **III** fibras reticulares (hígado,
  vasos, granulación), **IV** lámina densa de la membrana basal, **V** placenta, **VII**
  anclaje (une lámina basal con reticular → unión dermoepidérmica; enlace a
  `histologia-epitelial-polaridad`).
- `correlacion` (clinica): **colágeno I → osteogénesis imperfecta**; **III → tejido de
  granulación** (aparece primero en la reparación); **VII → epidermólisis ampollosa**;
  **fibrilina/MEC → síndrome de Marfan**; cirrosis = fibrosis (acúmulo de colágeno).
- `note` con el **algoritmo de identificación** del conectivo (¿cuánta MEC? ¿qué fibras
  predominan? ¿cómo se organizan? ¿qué células? ¿función?).

### 1b. `histologia-conectivo-celulas` — "Células del tejido conectivo" (S3 C1, parte 2)
- **Fijas** (residentes): **fibroblasto**, **adipocito**, **pericito**, **mastocito**,
  **macrófago**. **Móviles** (transitorias, llegan de la sangre): **plasmocito**,
  **linfocito**, **neutrófilo**, **eosinófilo**, **basófilo**, **monocito** (el macrófago
  aparece en ambas según su origen).
- **Fibroblasto**: la más abundante; **sintetiza la MEC** (colágeno, elastina, sustancia
  fundamental); fusiforme, RER abundante, Golgi desarrollado; **miofibroblasto** →
  cicatrización.
- **Adipocito**: almacena **triglicéridos**; reserva, aislamiento, protección, función
  **endocrina** (adipocinas, **leptina**); gota lipídica = gran espacio claro con núcleo
  periférico. Diferenciar del **folículo tiroideo** (tiroides = luz + coloide + epitelio;
  adipocito = gota + núcleo periférico, sin epitelio).
- **Pericito**: rodea capilares; regula flujo y da soporte microvascular (actina/miosina).
- **Mastocito**: **gránulos metacromáticos**; inflamación e hipersensibilidad inmediata;
  **histamina y heparina**.
- **Macrófago**: fagocitosis, presentación de antígenos; núcleo excéntrico (arriñonado),
  lisosomas. **Sistema fagocítico mononuclear**: célula madre → monoblasto → monocito →
  tejido → macrófago. Especializados: **Kupffer** (hígado), **alveolares/de polvo**
  (pulmón), **microglía** (SNC).
- **Móviles** (funciones): plasmocito → anticuerpos (deriva de linfocito B; núcleo
  excéntrico "en rueda de carro"; vive 2–3 semanas); neutrófilo → primer respondedor,
  bacterias; eosinófilo → parásitos/alergias; basófilo → alergia (histamina/heparina);
  monocito → precursor del macrófago.
- Incluye la **tabla de estudio de células** (célula · fija/móvil · función · rasgo clave).
- `correlacion` (clinica): **pericitos** → retinopatía diabética y angiogénesis tumoral;
  obesidad = hipertrofia de adipocitos; cicatrización = fibroblastos + miofibroblastos.

---

## 2. Quiz banks (`histologia-quizzes.ts`) — ~10–12 c/u
- **`his-conq`** → `histologia-conectivo-matriz`: epitelio (células) vs conectivo (MEC);
  clasificación (embrionario/propio/especializado); funciones; colágeno más abundante /
  ~30 %; colágeno I (tracción/hueso/osteogénesis imperfecta), II (cartílago), III
  (reticular/granulación), IV (lámina densa), VII (anclaje/epidermólisis ampollosa);
  Marfan/fibrilina; algoritmo de identificación.
- **`his-ctcq`** → `histologia-conectivo-celulas`: fijas vs móviles; fibroblasto sintetiza
  MEC; adipocito (triglicéridos/leptina; distinguir de folículo tiroideo); mastocito
  (gránulos metacromáticos/histamina); macrófago (sistema fagocítico; Kupffer/alveolar/
  microglía); plasmocito (anticuerpos, rueda de carro); neutrófilo/eosinófilo/basófilo;
  monocito → macrófago; pericito → retinopatía diabética.
`explanation` en español; distractores de célula/colágeno hermano; `correctIndex` repartido.

---

## 3. Wire it in
- **`modules.ts`**: módulo **`histologia-uad-s3`** (badge "UAD · Histología I — Semana 3",
  title "Histología: tejido conectivo", subtitle "Matriz, fibras y colágenos; células fijas
  y móviles", emoji 🔬, `topicIds: ['histologia-conectivo-matriz','histologia-conectivo-celulas']`).
- **`plans/uad-medicina.ts`** Histología Semana 3 ("Tejido conectivo"): agrega los dos
  topicIds; enriquece `temas` (introducción y MEC; fibras y colágenos I–VII; células fijas
  y móviles); marca **Clase 1 (impartida)**; deja pendiente lo que anunció para la próxima
  (clasificación de leucocitos, variedades laxo/denso, cartílago/hueso/adiposo/sangre según
  el plan). Añade `materiales` "Semana 3 · Clase 1 — Tejido conectivo (introducción)".
- `topics.ts` / `quizzes.ts` ya hacen spread de los arrays de histología.

---

## 4. Verification
```bash
npm run build
grep -n "histologia-conectivo-matriz\|histologia-conectivo-celulas" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "his-conq\|his-ctcq" src/data/histologia-quizzes.ts
for p in his-conq his-ctcq; do grep -o "id: '$p-q[0-9]*'" src/data/histologia-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): dos topics nuevos accesibles desde `histologia-uad-s3`
y Plan → Histología Semana 3; tablas (colágenos, células) legibles en dark; el colágeno VII
enlaza a la unión dermoepidérmica (Semana 2) sin duplicar.

**Autoauditoría (Think Again):** los apuntes son un digest de ChatGPT — verifica contra la
transcripción/un texto de histología (Ross/Junqueira): colágeno I (tracción, hueso) vs II
(cartílago) vs III (reticular) vs IV (lámina densa) vs VII (anclaje); mastocito = gránulos
metacromáticos; sistema fagocítico mononuclear (monocito→macrófago; Kupffer/microglía);
fibroblasto sintetiza la MEC. Reporta conteos y lo no confirmado.

## 5. Non-objectives
- No dupliques la dermis/unión dermoepidérmica ya en `histologia-piel`/`-polaridad` (recap +
  enlace). No desarrolles cartílago/hueso/sangre (clases siguientes). No renumeres
  `sectionId`s. No imágenes al repo/Atlas. No `npm run deploy`.

## 6. Delivery
1. `feat(histologia): Topic tejido conectivo — matriz, fibras y colágenos (S3 C1)`
2. `feat(histologia): Topic células del tejido conectivo (S3 C1)`
3. `feat(histologia): bancos his-conq y his-ctcq`
4. `chore(histologia): Semana 3 Clase 1 en módulo y plan`

Reporta conteos y la autoauditoría.
