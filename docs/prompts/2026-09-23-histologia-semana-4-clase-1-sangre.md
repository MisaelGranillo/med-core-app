# PROMPT — MedCore · Histología I · Semana 4 Clase 1 — Tejido sanguíneo

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-23.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "el docente dijo"; use "se…" / "del examen" (regla de la skill).**
> Carga la Semana 4 Clase 1: **tejido sanguíneo** — generalidades y plasma, eritrocitos,
> leucocitos (clasificación y fórmula) y plaquetas, con identificación en frotis. Enfoque
> **histológico** (morfología/función/identificación); la inmunología solo lo necesario.

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript para verificar:
- `…/Histología I y sus Laboratorios DEF/Clases/Semana 4 /Clase 1/Histologia_I_Semana_4_Clase_1_Apuntes.md`
  (+ slides PDF a la biblioteca privada, no al repo).
Ya cargado (S3): `histologia-conectivo-celulas` (macrófagos, sistema fagocítico),
`histologia-hueso` (médula) → enlaza. No hay módulo `histologia-uad-s4` (créalo).

```bash
cd ~/med-core-app && npm run build
grep -n "histologia-uad-s3\|Tejidos sanguíneo\|number: 4" src/data/modules.ts src/data/plans/uad-medicina.ts | head
grep -o "id: 'his-[a-z0-9]*q" src/data/histologia-quizzes.ts | sort -u
```

---

## 1. New Topics (append a `histologiaTopics`, `colorKey:'histologia'`, `categoria:'Histología'`, `emoji:'🔬'`)
Depth bar; ≥1 `correlacion`. Dos topics:

### 1a. `histologia-sangre` — "Tejido sanguíneo: plasma y eritrocitos" (S4 C1, parte 1)
- **La sangre como tejido conjuntivo especializado** con **matriz líquida** (plasma);
  volumen **5–6 L** (~8 % del peso); al centrifugar: **plasma 55 % / elementos formes 45 %**.
- **Plasma**: agua **90–92 %** + proteínas **7–8 %** + iones + sustancias orgánicas.
  Proteínas: **albúmina** (presión oncótica; ↓albúmina→edema/ascitis — cirrosis, síndrome
  nefrótico), **globulinas** (transporte/defensa, inmunoglobulinas), **fibrinógeno**
  (→ fibrina → coagulación). Iones (Na⁺/K⁺/Ca²⁺/Cl⁻/HCO₃⁻).
- **Funciones de la sangre**: transporte de gases (hemoglobina), defensa (leucocitos),
  hemostasia (plaquetas + factores), homeostasia (pH **7.35–7.45**, temperatura).
- **Eritrocitos**: **disco bicóncavo** (~**7–8 μm**), **anucleado** y sin organelos (máximo
  espacio para Hb); vida **~120 días**. **Hemoglobina** = 4 globinas + 4 hemo con **Fe²⁺**
  (une O₂). **Eritropoyesis** en médula ósea roja; **EPO** (células peritubulares renales,
  estímulo **hipoxia**); maduración eritroblasto→**reticulocito**→eritrocito. **ABO/Rh**
  (introducción: antígenos de membrana).
- `correlacion` (clinica): **anemia** — sin Hb suficiente no hay transporte aunque haya
  eritrocitos (déficit de hierro); ↓albúmina → edema.

### 1b. `histologia-leucocitos` — "Leucocitos, plaquetas e identificación en frotis" (S4 C1, parte 2)
- **Leucocitos ≠ linfocitos** (el linfocito es un tipo de leucocito). Clasificación:
  **granulocitos/polimorfonucleares** (neutrófilo, eosinófilo, basófilo) y **agranulocitos/
  mononucleares** (linfocito, monocito). **Fórmula leucocitaria** (tabla): neutrófilos
  **60–70 %**, linfocitos **20–35 %**, monocitos **3–8 %**, eosinófilos **2–4 %**, basófilos
  **0.5–1 %**.
- **Neutrófilo**: núcleo **multilobulado (3–5 lóbulos)**, gránulos finos; **fagocitosis
  bacteriana**; NETs; vida corta. **Eosinófilo**: **bilobulado**, gránulos **naranja**;
  parásitos/alergias (proteína básica mayor). **Basófilo**: gránulos **azul‑violeta** que
  ocultan el núcleo; **histamina/heparina**; hipersensibilidad inmediata tipo I.
  **Linfocito** (introducción: T/B/NK — se detalla en Clase 2). **Monocito**: el más grande
  (**12–20 μm**), núcleo **arriñonado**; → **macrófago** tisular (Kupffer/microglía/
  osteoclasto — enlaza a `histologia-conectivo-celulas`).
- **Plaquetas** (introducción): **fragmentos de megacariocito**, **sin núcleo**, **2–4 μm**,
  recuento **150,000–400,000/μL**, vida **7–10 días**, hemostasia. *(La estructura y la
  hemostasia se detallan en la Clase 2.)*
- **Terminología de recuentos**: **-osis/-filia** (aumento) vs **-penia** (disminución):
  leucocitosis/leucopenia, neutrofilia/neutropenia, trombocitosis/trombocitopenia.
- **Tabla maestra de leucocitos** (célula · grupo · % · núcleo · función · clave) y **tabla
  de reconocimiento en frotis** (qué ves → qué es). Algoritmo de identificación (eritrocitos
  → ¿núcleo? → ¿gránulos? → forma del núcleo → plaquetas).
- `correlacion` (clinica): **biometría hemática** — neutrofilia (>7,000/μL) orienta a
  infección bacteriana aguda; neutropenia (<1,500/μL) por quimio/virus. (Marca que
  "orienta", no diagnostica solo.)

---

## 2. Quiz banks (`histologia-quizzes.ts`) — ~12 c/u
- **`his-sanq`** → `histologia-sangre`: tejido conjuntivo de matriz líquida; 55/45; plasma
  agua/proteínas; albúmina→oncótica/edema; fibrinógeno→coagulación; eritrocito bicóncavo/
  anucleado/120 días; hemoglobina Fe²⁺/O₂; EPO renal/hipoxia; reticulocito; ABO.
- **`his-leuq`** → `histologia-leucocitos`: granulocitos vs agranulocitos; fórmula (neutrófilo
  60–70 %…); neutrófilo multilobulado/bacterias; eosinófilo bilobulado/naranja/parásitos;
  basófilo violeta/histamina; monocito arriñonado→macrófago; plaqueta = fragmento de
  megacariocito/150–400 mil; -osis vs -penia; identificación en frotis.
`explanation` en español; distractores de célula hermana; `correctIndex` repartido.

---

## 3. Wire it in
- **`modules.ts`**: módulo **`histologia-uad-s4`** (badge "UAD · Histología I — Semana 4",
  title "Histología: tejido sanguíneo", subtitle "Plasma, eritrocitos, leucocitos y
  plaquetas; identificación en frotis", emoji 🔬, `topicIds:
  ['histologia-sangre','histologia-leucocitos']`).
- **`plans/uad-medicina.ts`** Histología Semana 4 ("Tejidos sanguíneo y linfático"):
  agrega los topicIds; en `temas` marca **Clase 1 (impartida)**: sangre (plasma,
  eritrocitos), leucocitos y plaquetas + fórmula/biometría. Deja pendiente linfocitos a
  fondo, médula/hematopoyesis (Clase 2) y **tejido linfático** (semana siguiente). Añade
  `materiales` "Semana 4 · Clase 1 — Tejido sanguíneo".
- `topics.ts` / `quizzes.ts` ya hacen spread.

---

## 4. Verification
```bash
npm run build
grep -n "histologia-sangre\|histologia-leucocitos\|histologia-uad-s4" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "his-sanq\|his-leuq" src/data/histologia-quizzes.ts
for p in his-sanq his-leuq; do grep -o "id: '$p-q[0-9]*'" src/data/histologia-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): dos topics nuevos desde `histologia-uad-s4` y Plan →
Histología Semana 4; tablas (fórmula, reconocimiento en frotis) legibles en dark; el
monocito enlaza a macrófagos (S3).

**Autoauditoría (Think Again):** apuntes = digest de ChatGPT — verifica contra la
transcripción/un texto (Ross/Junqueira): 55/45; eritrocito 7–8 μm/anucleado/120 días; EPO
renal por hipoxia; neutrófilo 3–5 lóbulos; basófilo=histamina; monocito→macrófago; plaquetas
**150,000–400,000/μL** (la fuente oral dijo "por mL" pero la diapositiva dice **/μL** — usa
/μL). Reporta conteos y lo no confirmado.

## 5. Non-objectives
- No detalles linfocitos T/B/NK ni hemostasia/médula (Clase 2). No repitas macrófagos de S3
  (enlace). No metas PDF/imágenes al repo. No renumeres `sectionId`s. No `npm run deploy`.

## 6. Delivery
1. `feat(histologia): Topic tejido sanguíneo — plasma y eritrocitos (S4 C1)`
2. `feat(histologia): Topic leucocitos, plaquetas e identificación en frotis (S4 C1)`
3. `feat(histologia): bancos his-sanq y his-leuq`
4. `chore(histologia): Semana 4 Clase 1 — módulo s4 y plan`

Reporta conteos y la autoauditoría.
