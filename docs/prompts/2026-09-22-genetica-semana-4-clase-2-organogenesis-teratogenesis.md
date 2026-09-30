# PROMPT — MedCore · Genética Básica · Semana 4 Clase 2 — Organogénesis y teratogénesis

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-22.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "la Dra. dijo"; use "se…" / "del examen" (regla de la skill).**
> Carga la Semana 4 Clase 2: **organogénesis** (del cigoto a las capas germinales y semanas
> 4–8) y **teratogénesis** (grupos de teratógenos). Continúa la Clase 1.

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript para verificar:
- `…/Genética Básica DEF/Clases/Semana 4/Clase 2/Genetica_Semana_4_Clase_2_Apuntes.md`
  (+ transcript `# … Week 4 Class 2.md`, + slides PDF a la biblioteca privada, no al repo).
Ya cargado (S4 C1): módulo `genetica-uad-s4` con `genetica-citogenetica-clinica` y
`genetica-errores-metabolismo`. Enlaza (las malformaciones cromosómicas de C1 se conectan
con las causas de malformaciones de C2).

```bash
cd ~/med-core-app && npm run build
grep -n "genetica-uad-s4\|number: 4" src/data/modules.ts src/data/plans/uad-medicina.ts | head
grep -o "id: 'gen-[a-z]*q" src/data/genetica-quizzes.ts | sort -u
```

## Enfoque de examen (indicación de la Dra. — refléjalo, ★)
**No** memorizar toda la lista de teratógenos ni cada efecto. SÍ: la **secuencia del
desarrollo** (fecundación → capas germinales → órganos), los **derivados de cada capa
germinal**, lo relevante de las **semanas 4–8**, y los **grupos** de teratógenos
(farmacológicos, físicos, infecciosos) con 1–2 ejemplos emblemáticos.

---

## 1. New Topics (append a `geneticaTopics`, `colorKey:'genetica'`, `categoria:'Genética'`, `emoji:'🧬'`)
Depth bar; ≥1 `correlacion`. Dos topics:

### 1a. `genetica-organogenesis` — "Organogénesis y capas germinales" (S4 C2, parte 1)
- **Secuencia**: fecundación → **cigoto** → divisiones por **mitosis** → **mórula**
  (12–32→64 células) → **blastocisto** (aparece **cavidad**; **trofoblasto** externo +
  **embrioblasto** interno) → **gastrulación** (epiblasto/hipoblasto) → **3 capas
  germinales** → organogénesis.
- **Derivados de las capas germinales** (tabla ★): **ectodermo** → SNC/SNP, epidermis, piel,
  uñas, pelo, cristalino, córnea; **mesodermo** → conectivo, hueso, cartílago, músculo,
  sangre, linfático, riñón/uréteres, reproductor; **endodermo** → tubo digestivo, hígado,
  vías respiratorias, vejiga, tiroides/paratiroides. Menciona la **cresta neural** (tubo
  neural, migración) — enlaza a `histologia-piel`/melanocitos si aplica.
- **Semanas 4–8** (tabla ★): **4** = arcos faríngeos (1.º mandibular, 2.º hioideo) +
  prominencia cardíaca + forma de **C** + esbozos de extremidades; **5** = crecimiento
  marcado de la cabeza; **6** = **radios digitales** + codo; **7** = **muescas** entre radios;
  **8** (~54–55 días) = dedos libres + párpados y pabellones auriculares.
- `correlacion` (dato): el **período crítico** es la organogénesis (semanas ~3–8), cuando la
  susceptibilidad a teratógenos es máxima — puente al topic siguiente.

### 1b. `genetica-teratogenesis` — "Teratogénesis" (S4 C2, parte 2)
- **Concepto**: alteraciones del desarrollo por factores que interfieren con el embrión/feto
  (teratos = "monstruo"). El efecto depende de **agente + dosis + duración + momento** ("no
  es el veneno, sino la dosis"). Interacción **genética + ambiente** → muchas malformaciones
  son **multifactoriales**.
- **Epidemiología** (aprox., idea central): ~50 % desconocidas, ~25 % multifactoriales, ~10 %
  cromosómicas, ~8 % monogénicas, ~7 % ambientales — *"muchas son desconocidas o
  multifactoriales"* (no fijar los porcentajes como dato duro; el enfoque es la idea).
- **Grupos** (★, con ejemplos emblemáticos, sin lista exhaustiva):
  - **Farmacológicos**: **talidomida → focomelia** (periodo ~21–40 días); **ácido valproico
    → defectos del tubo neural**; isotretinoína (cardíaco/cerebral); anticoagulantes
    dicumarínicos; antibióticos (**estreptomicina → sordera**, **tetraciclinas → pigmentación
    del esmalte**); antineoplásicos.
  - **Físicos**: **rayos X / radiaciones atómicas → microcefalia/hidrocefalia**; **hipertermia
    → defectos del tubo neural**; factores mecánicos (bandas amnióticas, oligohidramnios).
  - **Infecciosos** (TORCH‑like): **rubéola → cataratas + cardiopatía + sordera**; CMV
    (lesión cerebral); herpes simple; varicela; parvovirus B19 (hidrops/anemia);
    **toxoplasma → hidrocefalia + calcificaciones**.
  - **Químicos/maternos**: nicotina, alcohol, solventes; diabetes materna, deficiencia de yodo.
- `correlacion` (clinica): identificar posible embarazo **antes** de exponer a rayos X;
  suplementación de folato y control de valproato/isotretinoína por el riesgo de tubo neural.

---

## 2. Quiz banks (`genetica-quizzes.ts`) — ~10 c/u, ★ los de prioridad
- **`gen-orgq`** → `genetica-organogenesis`: cigoto=fecundación; divisiones por mitosis;
  mórula vs blastocisto (cavidad; trofoblasto/embrioblasto); gastrulación=capas germinales;
  derivados ecto/meso/endodermo (asociaciones ★); semanas 4–8 (arcos/corazón/C, cabeza,
  radios digitales, muescas, dedos libres).
- **`gen-terq`** → `genetica-teratogenesis`: factores del efecto (agente/dosis/duración/
  momento); talidomida→focomelia; ácido valproico→tubo neural; rubéola→cataratas/cardiopatía/
  sordera; toxoplasma→hidrocefalia/calcificaciones; rayos X→microcefalia; grupos
  (farmacológicos/físicos/infecciosos).
`explanation` en español; distractores de teratógeno/derivado hermano; `correctIndex` repartido.

---

## 3. Wire it in
- **`modules.ts`** `genetica-uad-s4`: agrega `'genetica-organogenesis'` y
  `'genetica-teratogenesis'` a `topicIds`; actualiza subtitle para incluir desarrollo
  embrionario y teratogénesis.
- **`plans/uad-medicina.ts`** Genética Semana 4: agrega ambos topicIds; en `temas` marca
  **Clase 2 (impartida)**: organogénesis (capas germinales, semanas 4–8) y teratogénesis
  (grupos). Deja pendiente **diferenciación sexual** si el plan la lista para después. Añade
  `materiales` "Semana 4 · Clase 2".
- `topics.ts` / `quizzes.ts` ya hacen spread.

---

## 4. Verification
```bash
npm run build
grep -n "genetica-organogenesis\|genetica-teratogenesis" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "gen-orgq\|gen-terq" src/data/genetica-quizzes.ts
for p in gen-orgq gen-terq; do grep -o "id: '$p-q[0-9]*'" src/data/genetica-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): dos topics nuevos desde `genetica-uad-s4` y Plan →
Genética Semana 4; tablas (capas germinales, semanas 4–8, teratógenos) legibles en dark.

**Autoauditoría (Think Again):** los apuntes son un digest de ChatGPT — verifica contra la
transcripción/un texto base: derivados de cada capa germinal; blastocisto = trofoblasto +
embrioblasto + cavidad; semana 6 = radios digitales; talidomida→focomelia; ácido valproico→
tubo neural; rubéola→cataratas/cardiopatía/sordera. Trata los porcentajes de epidemiología
como aproximados (idea central, no dato fijo). Reporta conteos y lo no confirmado.

## 5. Non-objectives
- No dupliques las malformaciones cromosómicas de C1 (enlace). No desarrolles diferenciación
  sexual (próxima). No renumeres `sectionId`s. No PDF/.md al repo. No `npm run deploy`.

## 6. Delivery
1. `feat(genetica): Topic organogénesis y capas germinales (S4 C2)`
2. `feat(genetica): Topic teratogénesis (S4 C2)`
3. `feat(genetica): bancos gen-orgq y gen-terq (★)`
4. `chore(genetica): Semana 4 Clase 2 en módulo s4 y plan`

Reporta conteos y la autoauditoría.
