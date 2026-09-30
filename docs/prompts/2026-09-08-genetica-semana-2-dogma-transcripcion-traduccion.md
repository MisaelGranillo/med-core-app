# PROMPT — MedCore · Genética Básica · Semana 2 (Clases 1–2)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-08.
> **Prompt language: English. MedCore content stays in Spanish.**
> Load Semana 2 of Genética: **Clase 1** (dogma central → ARN → transcripción, y
> cromosomas/cariotipo) and **Clase 2** (aminoácidos, péptidos y las 3 etapas de la
> traducción). Semana 1 (incl. `genetica-adn`) ya está cargada — **enlaza, no dupliques**.

---

## 0. Sources & current state
Primary = the ChatGPT study notes (already digested, well‑structured); transcript for
verification:
- `…/Genética Básica DEF/Clases/Semana 2/Clase 1/Genetica_Basica_Semana_2_Clase_1_Apuntes.md` (+ `# … Week 2 Class 1 .md` transcript, + slides PDF)
- `…/Genética Básica DEF/Clases/Semana 2/Clase 2/Genetica_Basica_Semana_2_Clase_2_Apuntes.md` (+ `# … Week 2 Class 2.md` transcript, + slides PDF)
PDFs/slides stay in the private library, **not** the repo.

Existing (do not touch content, only append/wire): `genetica-topics.ts`
(`genetica-conceptos`, `genetica-mendel`, `genetica-adn`), `genetica-quizzes.ts`
(prefixes `gen-basq`, `gen-adnq`), module `genetica-uad-s1`, plan Genética Semana 2
(currently a placeholder: title "El material genético: ADN y cromosomas", `temas` listed,
**no `topicIds`, no `estado`**).

```bash
cd ~/med-core-app && npm run build
grep -n "genetica-adn\|number: 2" src/data/genetica-topics.ts src/data/plans/uad-medicina.ts | head
```

> Overlap warning: Clase 1 re‑explains ADN structure, base pairing, RNA vs DNA and DNA
> packaging (already in `genetica-adn`). Treat those as **review**: a one‑line recap that
> links back to `genetica-adn`, and spend the depth on what's **new** (dogma as a named
> concept, transcription mechanism, nucleósido vs nucleótido, chromosome anatomy,
> chromosome classification, karyotype).

---

## 1. New Topics (append to `geneticaTopics`, `colorKey: 'genetica'`, `categoria: 'Genética'`, `emoji: '🧬'`)
Write each at the **depth bar** (teaching prose around every list/table; complete
definitions; ≥1 `correlacion` per topic). Three topics:

### 1a. `genetica-dogma-transcripcion` — "Dogma central, ARN y transcripción" (Clase 1, parte 1)
- **Dogma central**: **ADN → ARN → proteína**; transcripción = ADN→ARN, traducción =
  ARN→proteína. Localización: **transcripción en el núcleo**, **traducción en el
  citoplasma** (marca como pregunta probable de examen).
- **Nucleósido vs nucleótido** (distinción nueva): nucleósido = base + azúcar;
  **nucleótido = base + azúcar + fosfato**.
- **ADN vs ARN** (tabla): desoxirribosa vs ribosa; doble vs una cadena; **T vs U**;
  bases. (Recap breve; enlaza a `genetica-adn`.)
- **Los tres ARN**: **ARNm** (mensaje/copia de instrucciones; intrones+exones →
  procesamiento elimina intrones → exones), **ARNt** (adaptador; anticodón + aminoácido),
  **ARNr** (forma el ribosoma; se sintetiza en el **nucléolo**). Regla m/t/r.
- **Transcripción (mecanismo)**: ocurre en el núcleo; la **ARN polimerasa** abre
  localmente el ADN; una hebra sirve de molde; se sintetiza ARN por complementariedad
  **ADN→ARN: A→U, T→A, C→G, G→C**; el ADN se vuelve a cerrar. Longitud de ARNm variable
  (referencia ~2,200 nt ≈ ~730 codones — **no es fija**).
- `correlacion` (dato): intrones/exones y el procesamiento (splicing) — por qué el ARNm
  maduro solo conserva exones.

### 1b. `genetica-cromosomas-cariotipo` — "Cromosomas, cariotipo y clasificación" (Clase 1, parte 2)
- **Empaquetamiento** (recap + enlace a `genetica-adn`): **ADN → histonas → nucleosoma →
  cromatina → cromosoma**. Octámero de histonas = **2×H2A, 2×H2B, 2×H3, 2×H4 = 8**.
- **Cromatina vs cromosoma**: cromatina = menos condensada (interfase); cromosoma =
  altamente condensado y **visible durante la división celular** (pregunta clásica).
- **Estructura del cromosoma**: cromátidas, **centrómero**, **brazo p (corto)**, **brazo
  q (largo)**, **cinetocoro** (une el huso mitótico), **telómeros** (extremos).
- `correlacion` (clinica): **acortamiento de telómeros → envejecimiento celular** y mayor
  entrada en apoptosis.
- **Clasificación por posición del centrómero** (tabla): **metacéntrico** (centro, brazos
  similares — humanos 1, 3, 19, 20), **submetacéntrico** (desplazado — 16, 17, 18),
  **acrocéntrico** (muy desplazado, brazo corto muy pequeño — **13, 14, 15, 21, 22**),
  **telocéntrico** (centrómero en el extremo; en humanos no es normal, se asocia a
  alteraciones). Secuencia: Meta → Submeta → Acro → Telo.
- **Cariotipo y humanos**: **46 cromosomas = 23 pares**; **1–22 autosomas**, **par 23
  sexual**. Cariotipo = representación ordenada por tamaño (1 mayor → 22 menor, 23
  sexuales); **bandeo** requiere cromosomas condensados (en división).

### 1c. `genetica-traduccion` — "Aminoácidos, péptidos y traducción" (Clase 2)
- **Aminoácidos**: 20 estándar; **9 esenciales** (Histidina, Isoleucina, Leucina, Lisina,
  Metionina, Fenilalanina, Treonina, Triptófano, Valina) = deben venir de la dieta; no
  esenciales = el cuerpo los sintetiza. **Metionina = inicio (AUG)**.
- **Mutaciones** (a nivel de aminoácido): **silenciosa** (mismo aminoácido), **missense /
  sentido erróneo** (cambia un aminoácido), **nonsense / sin sentido** (genera un stop);
  sustituciones conservadoras vs no conservadoras. Idea clave: ¿cambió el aminoácido? ¿ese
  cambio altera la proteína?
- **Péptidos**: enlace peptídico une aminoácidos y **libera H₂O**; clasificación por número:
  **oligopéptido <10**, **polipéptido 10–50**, **proteína >50**. Ejemplo: **titina
  ~33,000 aa** (músculo, elasticidad).
- **Traducción (3 etapas)**: **iniciación** (ribosoma + ARNm + ARNt iniciador; **AUG →
  metionina**), **elongación** (sitios del ribosoma **A → P → E**: A entra el ARNt, P se
  forma la cadena peptídica, E sale el ARNt), **terminación** (codón stop → se libera el
  polipéptido). **Codón = 3 bases** (64 combinaciones); **codón vs anticodón** (codón en
  ARNm, anticodón complementario en ARNt). **Stops: UAA, UAG, UGA**. Tras usarse, el ARNm
  se degrada en el citoplasma y se reutiliza.
- `correlacion` (dato): la profesora prioriza para examen **AUG→metionina→inicio** y
  **UAA/UAG/UGA→stop**, no memorizar las 64 combinaciones. Márcalo ★.

Cierra `genetica-traduccion` reconstruyendo la cadena completa (keyPoint o note):
**ADN → gen → transcripción → ARNm → codón → ARNt/anticodón → aminoácido → ribosoma →
polipéptido → proteína**.

---

## 2. Quiz banks (`genetica-quizzes.ts`)
New prefixes, ~8–10 items each, `explanation` en español, distractores de concepto
hermano, `correctIndex` repartido:
- **`gen-dogq`** → `topicId: 'genetica-dogma-transcripcion'`: dogma; transcripción=ADN→ARN
  y dónde; traducción=ARN→proteína y dónde; nucleósido vs nucleótido; T→U; ARNm/ARNt/ARNr;
  nucléolo→ARNr; complementariedad de transcripción; intrones vs exones.
- **`gen-cromq`** → `topicId: 'genetica-cromosomas-cariotipo'`: octámero de histonas;
  cromatina vs cromosoma (cuándo se ven); p vs q; cinetocoro; telómeros/envejecimiento;
  clasificación por centrómero; acrocéntricos 13/14/15/21/22; 46=23 pares; autosomas vs
  sexuales; para qué sirve el cariotipo.
- **`gen-tradq`** → `topicId: 'genetica-traduccion'`: nº aminoácidos estándar; esencial vs
  no esencial; metionina/AUG; enlace peptídico libera agua; oligo/poli/proteína; titina;
  3 etapas; sitios A/P/E; codón vs anticodón; stops UAA/UAG/UGA.

Add to `questions` spread if new exports are created (currently one `geneticaQuestions`
array — just append).

---

## 3. Wire it in (flip Semana 2 → impartida, Clase 2 pendiente)
- **`modules.ts`**: add a module **`genetica-uad-s2`** (badge "UAD · Genética Básica —
  Semana 2", title "Genética: dogma central, transcripción y traducción", emoji 🧬,
  `topicIds: ['genetica-dogma-transcripcion','genetica-cromosomas-cariotipo','genetica-traduccion']`).
- **`plans/uad-medicina.ts`** Genética Semana 2: set `estado: 'impartido'`; add
  `topicIds` = the three above; rewrite `temas` to reflect Clases 1–2 impartidas (dogma
  central; ARN y transcripción; cromosomas, clasificación y cariotipo; aminoácidos,
  péptidos y traducción con sitios A/P/E). Add `fuentes`/`materiales` entries "Semana 2 ·
  Clase 1" and "Semana 2 · Clase 2". Note Genética son **3 clases/semana**: si la Clase 3
  de la Semana 2 aún no se imparte, deja una línea "Clase 3 (pendiente): reparación del
  ADN".
- `topics.ts` already spreads `geneticaTopics`; `quizzes.ts` already spreads
  `geneticaQuestions`.

---

## 4. Verification
```bash
npm run build
grep -n "genetica-dogma-transcripcion\|genetica-cromosomas-cariotipo\|genetica-traduccion" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "gen-dogq\|gen-cromq\|gen-tradq" src/data/genetica-quizzes.ts   # ~24–30 total
for p in gen-dogq gen-cromq gen-tradq; do grep -o "id: '$p-q[0-9]*'" src/data/genetica-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, light+dark): three new Genética topics reachable from the new
Semana 2 module and from Plan → Genética Semana 2 (ahora impartida); each teaches without
slides; recap sections link back to `genetica-adn` (no duplication); quizzes play.

**Mandatory self‑audit (Think Again):** the ChatGPT notes are a secondary digest — verify
against the transcript/a base text on 5 points before asserting: transcripción
complementarity **A→U, T→A, C→G, G→C**; **AUG=metionina** start; stops **UAA/UAG/UGA**;
acrocentric human chromosomes **13,14,15,21,22**; peptide bond releases **H₂O**. Report
item counts and any claim you could not confirm (e.g. the exact submetacentric list — the
professor said she'd give a precise table later; mark it "según la clase" rather than as
fixed fact).

---

## 5. Non‑objectives
- Don't duplicate ADN‑structure/packaging already in `genetica-adn` — recap + link only.
- Don't renumber existing `sectionId`s or edit Semana 1 content. Don't build reparación
  del ADN (próxima clase). No PDF/.md into the repo. No `npm run deploy`.

## 6. Delivery (atomic commits)
1. `feat(genetica): Topic dogma central, ARN y transcripción (S2 C1)`
2. `feat(genetica): Topic cromosomas, cariotipo y clasificación (S2 C1)`
3. `feat(genetica): Topic aminoácidos, péptidos y traducción (S2 C2)`
4. `feat(genetica): bancos de quiz S2 (gen-dogq, gen-cromq, gen-tradq)`
5. `chore(genetica): Semana 2 impartida en módulo y plan`

Report item counts and the self‑audit.
