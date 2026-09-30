# PROMPT — MedCore · Genética Básica · Semana 4 Clase 1 — Citogenética clínica y errores del metabolismo

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-22.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "la Dra. dijo"; use "se…" / "del examen" (regla de la skill).**
> Carga la Semana 4 Clase 1: **citogenética clínica** (anomalías cromosómicas y síndromes) y
> **errores innatos del metabolismo** (tamiz neonatal).

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript para verificar:
- `…/Genética Básica DEF/Clases/Semana 4/Clase 1/Genetica_Semana_4_Clase_1_Apuntes.md`
  (+ transcript `# … Week 4 Class 1.md`, + slides PDF a la biblioteca privada, no al repo).
Ya cargado (S3): `genetica-cromosomas-herencia` (cromosoma, cariotipo, bandeo),
`genetica-mitosis-meiosis` (no disyunción → aneuploidías) → **enlaza**, no repitas.
No hay módulo `genetica-uad-s4` aún (créalo).

```bash
cd ~/med-core-app && npm run build
grep -n "genetica-cromosomas-herencia\|genetica-uad-s3\|number: 4" src/data/genetica-topics.ts src/data/modules.ts src/data/plans/uad-medicina.ts | head
grep -o "id: 'gen-[a-z]*q" src/data/genetica-quizzes.ts | sort -u
```

## Enfoque de examen (indicación de la Dra. — refléjalo, ★)
Para citogenética: priorizar **cariotipo/representación cromosómica + relación cromosoma↔
síndrome** (no memorizar toda la clínica de cada síndrome). Para metabolismo: **defecto
principal + consecuencia + relación con el tamiz neonatal**.

---

## 1. New Topics (append a `geneticaTopics`, `colorKey:'genetica'`, `categoria:'Genética'`, `emoji:'🧬'`)
Depth bar; ≥1 `correlacion`. Dos topics:

### 1a. `genetica-citogenetica-clinica` — "Citogenética clínica: anomalías cromosómicas y síndromes" (S4 C1, parte 1)
- **Citogenética clínica**: estudia cromosomas (estructura/número/alteraciones) con
  aplicación médica; cadena ADN→cromatina→cromosoma→cariotipo→alteraciones. Recap breve del
  cariotipo (46 = 23 pares; 46,XX / 46,XY) enlazando a `genetica-cromosomas-herencia`.
- **Anomalías numéricas**: **monosomía (2n−1)** y **trisomía (2n+1)**; **aneuploidía** por
  **no disyunción** (anafase) — enlaza a `genetica-mitosis-meiosis`.
- **Anomalías estructurales**: **deleción** (terminal/intersticial), **inversión**,
  **translocación** (recíproca y **robertsoniana** = fusión de acrocéntricos → 45
  cromosomas). Menciona **disomía uniparental**.
- **Síndromes** (tabla ★ cariotipo↔síndrome, con 2–3 rasgos clave c/u, sin lista exhaustiva):
  **Down (trisomía 21)**, **Edwards (18)**, **Patau (13)**, **Turner (45,X)** — mujer, talla
  baja, disgenesia gonadal, cuello alado; **Klinefelter (47,XXY)** — varón, ginecomastia,
  azoospermia; **Triple X (47,XXX)** — mujer, talla alta. Mnemotecnia: Patau 13 · Edwards
  18 · Down 21.
- Incluye un `note`/glosario corto de términos clínicos usados (pliegue epicántico, manchas
  de Brushfield, micrognatia, microtia, polidactilia, ginecomastia, criptorquidia…) — como
  referencia, no para memorizar.
- `correlacion` (clinica): en Down se menciona el **ultrasonido estructural ~12–13 semanas**
  (hueso nasal, región occipital) como detección prenatal.

### 1b. `genetica-errores-metabolismo` — "Errores innatos del metabolismo y tamiz neonatal" (S4 C1, parte 2)
- **Tamiz neonatal** (2.º–7.º día de vida): detectar temprano → tratar temprano → prevenir
  complicaciones. Cubre 4 patologías:
- **Fenilcetonuria (PKU)**: déficit de **fenilalanina hidroxilasa** → ↑ fenilalanina (no se
  convierte en tirosina) → **daño neurológico**; cromosoma 12; el **aspartamo** contiene
  fenilalanina; tratamiento = **dieta** temprana.
- **Hipotiroidismo congénito**: causa principal **disgenesia tiroidea** (~85 %) vs alteración
  de síntesis (~15 %); hormonas tiroideas clave para neurodesarrollo; tratamiento
  **levotiroxina**; en el tamiz se mide **tirotropina (TSH)**; re‑muestra en prematuros/
  <2.5 kg/críticos/gemelos.
- **Galactosemia**: defecto del metabolismo de la **galactosa** (vía galactosa‑1‑fosfato) →
  acumulación → **daño hepático/GI** (hepatomegalia, ictericia, vómitos); la leche expone
  desde el nacimiento.
- **Hiperplasia suprarrenal congénita**: déficit de **21‑hidroxilasa** (~95 %) → **↓ cortisol
  y aldosterona + ↑ andrógenos** → alteración del desarrollo sexual.
- Tabla resumen (patología · defecto · consecuencia/clave).
- `correlacion` (dato): la idea del tamiz — detección presintomática permite tratar antes del
  daño; marca ★ los cuatro binomios defecto→consecuencia.

---

## 2. Quiz banks (`genetica-quizzes.ts`) — ~10 c/u, ★ los de prioridad
- **`gen-citq`** → `genetica-citogenetica-clinica`: monosomía vs trisomía; 2n−1/2n+1;
  aneuploidía por no disyunción; deleción/inversión/translocación; robertsoniana=45;
  Down 21 / Edwards 18 / Patau 13 / Turner 45,X / Klinefelter 47,XXY / Triple X 47,XXX
  (asociaciones cariotipo↔síndrome ★).
- **`gen-metq`** → `genetica-errores-metabolismo`: tamiz 2.º–7.º día; PKU=fenilalanina
  hidroxilasa/↑fenilalanina/dieta; hipotiroidismo=disgenesia tiroidea/levotiroxina/TSH;
  galactosemia=galactosa/daño hepático; HSC=21‑hidroxilasa/↓cortisol+↑andrógenos.
`explanation` en español; distractores de síndrome/defecto hermano; `correctIndex` repartido.

---

## 3. Wire it in
- **`modules.ts`**: módulo **`genetica-uad-s4`** (badge "UAD · Genética Básica — Semana 4",
  title "Genética en la medicina general", emoji 🧬, `topicIds:
  ['genetica-citogenetica-clinica','genetica-errores-metabolismo']`).
- **`plans/uad-medicina.ts`** Genética Semana 4 ("La genética en la medicina general"):
  agrega los topicIds; en `temas` marca **Clase 1 (impartida)**: citogenética clínica
  (anomalías y síndromes) y errores innatos del metabolismo (tamiz neonatal). Deja pendiente
  lo anunciado: **organogénesis y teratogénesis** (Clase 2) y **diferenciación sexual**.
  Añade `materiales` "Semana 4 · Clase 1".
- `topics.ts` / `quizzes.ts` ya hacen spread de los arrays de genética.

---

## 4. Verification
```bash
npm run build
grep -n "genetica-citogenetica-clinica\|genetica-errores-metabolismo\|genetica-uad-s4" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "gen-citq\|gen-metq" src/data/genetica-quizzes.ts
for p in gen-citq gen-metq; do grep -o "id: '$p-q[0-9]*'" src/data/genetica-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): dos topics nuevos desde `genetica-uad-s4` y Plan →
Genética Semana 4; tablas legibles en dark; enlaza a cromosomas/aneuploidías de S3.

**Autoauditoría (Think Again):** los apuntes son un digest de ChatGPT — verifica contra la
transcripción/un texto base: Down=21, Edwards=18, Patau=13, Turner=45,X, Klinefelter=47,XXY,
Triple X=47,XXX; PKU=fenilalanina hidroxilasa; HSC=21‑hidroxilasa; tamiz 2.º–7.º día.
Reporta conteos y lo no confirmado.

## 5. Non-objectives
- No repitas cariotipo/bandeo de S3 (recap + enlace). No desarrolles organogénesis/
  teratogénesis (Clase 2). No renumeres `sectionId`s. No PDF/.md al repo. No `npm run deploy`.

## 6. Delivery
1. `feat(genetica): Topic citogenética clínica y síndromes (S4 C1)`
2. `feat(genetica): Topic errores del metabolismo y tamiz neonatal (S4 C1)`
3. `feat(genetica): bancos gen-citq y gen-metq (★)`
4. `chore(genetica): Semana 4 Clase 1 — módulo s4 y plan`

Reporta conteos y la autoauditoría.
