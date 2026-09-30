# PROMPT — MedCore · Genética Básica · Semana 3 Clase 2 — Mitosis, meiosis y gametogénesis

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-17.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "la Dra. dijo"; use "se…" / "del examen" (regla de la skill).**
> Carga la Clase 2 de la Semana 3: **división celular (mitosis y meiosis)** y
> **gametogénesis**. Continúa el ciclo celular de la Clase 1. *(Esta semana fue corta —
> feriado del 16 — así que Genética solo tuvo 2 clases.)*

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript para verificar:
- `…/Genética Básica DEF/Clases/Semana 3/Clase 2/Genetica_Semana_3_Clase_2_Apuntes.md`
  (+ transcript `# … Week 3 Class 2.md`, + slides PDF a la biblioteca privada, no al repo).
Ya cargado (S3 C1): `genetica-ciclo-celular` (interfase) y `genetica-cromosomas-herencia`;
módulo `genetica-uad-s3`. **Enlaza** con el ciclo celular (la división es la fase M) —
no repitas la interfase.

```bash
cd ~/med-core-app && npm run build
grep -n "genetica-ciclo-celular\|genetica-uad-s3" src/data/genetica-topics.ts src/data/modules.ts | head
grep -o "id: 'gen-[a-z]*q" src/data/genetica-quizzes.ts | sort -u
```

---

## 1. New Topics (append to `geneticaTopics`, `colorKey:'genetica'`, `categoria:'Genética'`, `emoji:'🧬'`)
Depth bar; ≥1 `correlacion`. Dos topics:

### 1a. `genetica-mitosis-meiosis` — "División celular: mitosis y meiosis" (S3 C2, parte 1)
- **Mitosis** (somáticas; 1 división → **2 hijas diploides**; crecimiento/reparación).
  Fases: **profase** (condensa, desaparece nucléolo, se desintegra la carioteca, se forma
  el huso), **prometafase** (el huso se une por los **cinetocoros**), **metafase** (placa
  ecuatorial), **anafase** (se separan las **cromátidas hermanas**; aquí pueden surgir
  **aneuploidías**), **telofase** (descondensa, reaparece la envoltura nuclear),
  **citocinesis** (2 células).
- **Meiosis** (germinales; **2 divisiones → 4 células haploides**; reduce nº cromosómico y
  genera **variabilidad**). **Meiosis I** separa **cromosomas homólogos**: **Profase I** es
  la más importante — **sinapsis** de homólogos y **crossing over** (intercambio de
  segmentos, en **paquiteno**) → variabilidad; metafase I (doble placa), anafase I (separa
  **homólogos**), telofase I → **2 haploides con cromosomas aún duplicados**. **Meiosis II**
  (sin nueva replicación del ADN entre I y II): anafase II separa **cromátidas hermanas** →
  **4 haploides**.
- **Anafase I vs II** (tabla): I = homólogos; II = hermanas; anafase mitótica = hermanas.
- **Mitosis vs meiosis** (tabla completa: tipo celular, nº divisiones, células finales,
  ploidía, crossing over, función). Regla: **mitosis = mantiene; meiosis = mitad + mezcla**.
- Aclaración: existen **mitosis, meiosis I y meiosis II** — **no** existe "mitosis I/II".
- `correlacion` (clinica): la mala segregación (no disyunción) en anafase produce
  **aneuploidías** (ej. trisomía 21; enlace a `genetica-cromosomas-herencia`).

### 1b. `genetica-gametogenesis` — "Gametogénesis: ovogénesis y espermatogénesis" (S3 C2, parte 2)
- **Meiosis ≠ gametogénesis**: la meiosis describe las fases de división; la gametogénesis
  aplica esos procesos a formar gametos.
- **Ovogénesis**: el **ovocito primario queda detenido en Profase I** (diploteno) **hasta
  la pubertad**; luego se reanuda; al completar meiosis I → **ovocito secundario** + cuerpo
  polar; se detiene en **Metafase II** (~**3 h antes de la ovulación**). Citoplasma
  desigual → **1 gameto funcional + 3 cuerpos polares**.
- **Espermatogénesis**: inicia en la **pubertad**, en los **túbulos seminíferos**, asociada
  a **células de Sertoli**. Secuencia: espermatogonio → espermatocito primario → (meiosis I)
  → espermatocitos secundarios → (meiosis II) → espermátides → **espermiogénesis** →
  espermatozoides. Profase I ~**22 días**; regulación por **LH/FSH**. Espermiogénesis =
  espermátide → espermatozoide (reduce citoplasma, cabeza, **acrosoma**, pieza intermedia,
  cola).
- **Fecundación**: n(23) + n(23) → cigoto **2n(46)** (recupera la diploidía).
- **Clonación** (contraste): **transferencia nuclear** de una célula somática a un óvulo
  enucleado; conserva la información del donante y **evita** el crossing over → no busca
  variabilidad.
- `correlacion` (dato): la larga detención del ovocito en Profase I se relaciona con el
  aumento de aneuploidías con la edad materna.

Prioridades de examen (márcalas ★ donde aplique): fases de mitosis y meiosis y qué ocurre
en cada una; crossing over en Profase I; anafase I (homólogos) vs II (hermanas); ovocito
detenido en Profase I y en Metafase II; **no** memorizar leptoteno/cigoteno/etc. ni el
detalle embriológico.

---

## 2. Quiz banks (`genetica-quizzes.ts`) — ~8–10 c/u
- **`gen-mmq`** → `genetica-mitosis-meiosis`: mitosis = 2 / meiosis = 4; somáticas vs
  germinales; fase de cada evento (metafase=placa, anafase=separa); crossing over en
  Profase I (paquiteno); anafase I homólogos vs anafase II hermanas; sin replicación entre
  meiosis I y II; mitosis vs meiosis; no existe "mitosis II".
- **`gen-gamq`** → `genetica-gametogenesis`: meiosis ≠ gametogénesis; ovocito detenido en
  Profase I / Metafase II; 1 gameto + 3 cuerpos polares; espermatogénesis (pubertad,
  túbulos seminíferos, Sertoli); espermiogénesis; fecundación 23+23=46; clonación =
  transferencia nuclear sin crossing over.
`explanation` en español; distractores de fase/concepto hermano; `correctIndex` repartido.

---

## 3. Wire it in
- **`modules.ts`** `genetica-uad-s3`: agrega `'genetica-mitosis-meiosis'` y
  `'genetica-gametogenesis'` a `topicIds`; actualiza subtitle para incluir división celular
  y gametogénesis.
- **`plans/uad-medicina.ts`** Genética Semana 3: agrega ambos topicIds; en `temas` marca
  **Clase 2 (impartida)**: mitosis, meiosis I/II y gametogénesis. Nota: la semana fue corta
  (feriado del 16‑sep) → solo 2 clases. Añade `materiales` "Semana 3 · Clase 2".
- `topics.ts` / `quizzes.ts` ya hacen spread de los arrays de genética.

---

## 4. Verification
```bash
npm run build
grep -n "genetica-mitosis-meiosis\|genetica-gametogenesis" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "gen-mmq\|gen-gamq" src/data/genetica-quizzes.ts
for p in gen-mmq gen-gamq; do grep -o "id: '$p-q[0-9]*'" src/data/genetica-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): dos topics nuevos accesibles desde `genetica-uad-s3`
y Plan → Genética Semana 3; enlazan con el ciclo celular (Clase 1) sin repetir la interfase.

**Autoauditoría (Think Again):** los apuntes son un digest de ChatGPT — verifica contra la
transcripción/un texto base: crossing over en **paquiteno** de Profase I; anafase I separa
**homólogos** y anafase II separa **hermanas**; **no** hay replicación del ADN entre meiosis
I y II; ovocito detenido en Profase I (hasta pubertad) y Metafase II (antes de ovular);
ovogénesis = 1 gameto + 3 cuerpos polares. Reporta conteos y lo no confirmado.

## 5. Non-objectives
- No repitas la interfase (ya en `genetica-ciclo-celular`; recap + enlace). No renumeres
  `sectionId`s. No PDF/.md al repo. No `npm run deploy`.

## 6. Delivery
1. `feat(genetica): Topic división celular — mitosis y meiosis (S3 C2)`
2. `feat(genetica): Topic gametogénesis (S3 C2)`
3. `feat(genetica): bancos gen-mmq y gen-gamq`
4. `chore(genetica): Semana 3 Clase 2 en módulo y plan`

Reporta conteos y la autoauditoría.
