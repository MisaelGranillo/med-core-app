# PROMPT — MedCore · Genética Básica · Semana 3 Clase 1

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-14.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "la Dra. dijo"; use "se…" / "del examen" (regla de la skill `medcore-semana`).**
> Carga la Clase 1 de la Semana 3: **bases cromosómicas de la herencia + bandeo + cariotipo
> clínico** y el **ciclo celular** (interfase). Mitosis y meiosis son de la **próxima
> clase** → no las desarrolles (adelanto).

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript para verificar:
- `…/Genética Básica DEF/Clases/Semana 3/Clase 1/Genetica_Semana_3_Clase_1_Apuntes.md`
  (+ transcript `# … Week 3 Class1 .md`, + slides PDF a la biblioteca privada, no al repo).
Ya cargado (Semana 2): `genetica-cromosomas-cariotipo` cubre empaquetamiento, estructura y
clasificación de cromosomas + cariotipo básico → **recap + enlace**, no dupliques.
Semana 3 son **3 clases**; esta es la 1.ª → semana **parcial** (mitosis/meiosis pendientes).

```bash
cd ~/med-core-app && npm run build
grep -n "genetica-cromosomas-cariotipo\|number: 3" src/data/genetica-topics.ts src/data/plans/uad-medicina.ts | head
grep -o "id: 'gen-[a-z]*q" src/data/genetica-quizzes.ts | sort -u
```

---

## 1. New Topics (append to `geneticaTopics`, `colorKey:'genetica'`, `categoria:'Genética'`, `emoji:'🧬'`)
Depth bar; ≥1 `correlacion`. Dos topics:

### 1a. `genetica-cromosomas-herencia` — "Bases cromosómicas de la herencia, cariotipo y bandeo" (S3 C1, parte 1)
- **Teoría cromosómica de la herencia**: genes ↔ ADN ↔ cromosomas ↔ herencia; los genes
  son segmentos de ADN en posiciones específicas (**loci**); conecta las leyes de Mendel
  con el comportamiento de los cromosomas en la división. (Enlaza a `genetica-mendel`.)
- **Cromosomas homólogos**: 46 = 23 pares; uno materno + uno paterno; 22 autosomas + par
  sexual (XX/XY). El homólogo sano sirve de molde en la reparación homóloga (enlace a
  `genetica-reparacion-adn`).
- **Cromatina vs cromátida** y **homólogos vs cromátidas hermanas** (definir bien las dos
  parejas): cromatina = material menos condensado; cromátida = una copia de un cromosoma
  duplicado, unidas por el centrómero; homólogos = mismo par (materno+paterno); cromátidas
  hermanas = copias idénticas.
- **Cariotipo vs cariograma**: cariotipo = conjunto de características cromosómicas de la
  especie; cariograma = representación gráfica ordenada por pares (por tamaño).
- **Bandeo cromosómico** (tabla): **G** (Giemsa + tripsina; claras/oscuras; el más usado),
  **Q** (quinacrina; fluorescencia), **R** (patrón inverso; regiones terminales), **T**
  (telómeros), **C** (centrómero/heterocromatina). Alta resolución ~**550–650 bandas**.
- **Nomenclatura del locus**: ej. **7q31.2** → 7 (cromosoma) · q (brazo largo) · 31.2
  (región y sub-banda). Recordatorio **p = corto, q = largo**.
- `correlacion` (clinica): utilidad clínica del cariotipo — detectar número/forma y
  anomalías (ej. **trisomía 21**); obtención de células por **cultivo** o **amniocentesis**
  (líquido amniótico guiado por ultrasonido).

### 1b. `genetica-ciclo-celular` — "El ciclo celular: interfase" (S3 C1, parte 2)
- **Concepto**: secuencia de crecimiento, duplicación del ADN, preparación y división =
  **Interfase (G1 + S + G2) + fase M**.
- **Diploide vs haploide**: **2n = 46** (somáticas, homólogos, producto de mitosis → 2
  hijas) vs **n = 23** (gametos, producto de meiosis → 4 hijas); óvulo 23 + espermatozoide
  23 → cigoto 46.
- **G1** (6–12 h): crecimiento, síntesis de proteínas, ATP, inicio de duplicación de
  centrosomas; destinos: seguir a S, **G0/quiescencia**, **senescencia**, **apoptosis**.
- **Puntos de control** (G1 y G2): daño → detención → reparación → si no se repara,
  apoptosis. **CDK + ciclinas** regulan la progresión por **fosforilación** (definir
  fosforilación; sin memorizar CDK2/CDK4).
- **Fase S** (6–8 h): **replicación del ADN** (separación de cadenas, cada una molde,
  nucleótidos complementarios; **cebadores/primers** para iniciar) + **duplicación del
  centrosoma**.
- **Fase G2** (~4 h): crecimiento final, verificación de la replicación, preparación de
  centrosomas; checkpoint con **p53** antes de entrar a M.
- **Citocinesis**: división del citoplasma que separa las células hijas.
- Dato: G1+S+G2 (máximos 12+8+4) ≈ **24 h** de interfase (no el ciclo completo con M).
- `note` **Adelanto**: mitosis y meiosis se ven en la siguiente clase — no se desarrollan
  aquí.
- `correlacion` (dato): los puntos de control y p53 evitan que una célula con ADN dañado se
  divida; su falla se relaciona con el cáncer.

---

## 2. Quiz banks (`genetica-quizzes.ts`) — ~8–10 c/u
- **`gen-herq`** → `genetica-cromosomas-herencia`: genes/loci; homólogos (46=23 pares,
  autosomas vs sexual); cromatina vs cromátida; homólogos vs cromátidas hermanas; cariotipo
  vs cariograma; bandeo G = Giemsa/el más usado; C = centrómero; T = telómeros;
  nomenclatura 7q31.2 (p corto/q largo); trisomía 21; amniocentesis.
- **`gen-cicq`** → `genetica-ciclo-celular`: interfase = G1+S+G2; en qué fase se replica el
  ADN (S); 2n vs n; mitosis 2 hijas / meiosis 4; G0/quiescencia vs senescencia vs
  apoptosis; CDK/ciclinas y fosforilación; primers; p53 en el checkpoint de G2; citocinesis.
`explanation` en español; distractores de concepto hermano; `correctIndex` repartido.

---

## 3. Wire it in (Semana 3 parcial — Clase 1 impartida)
- **`modules.ts`**: módulo **`genetica-uad-s3`** (badge "UAD · Genética Básica — Semana 3",
  title "Genética: bases cromosómicas y ciclo celular", emoji 🧬, `topicIds:
  ['genetica-cromosomas-herencia','genetica-ciclo-celular']`).
- **`plans/uad-medicina.ts`** Genética Semana 3 ("Bases cromosómicas de la herencia"):
  agrega `topicIds` con los dos topics; en `temas` marca **Clase 1 (impartida)**: bases
  cromosómicas, bandeo y cariotipo; ciclo celular (interfase). Deja **Clases 2–3
  (pendientes): mitosis, meiosis y repaso**. No marques la semana como completamente
  impartida; añade `materiales` "Semana 3 · Clase 1".
- `topics.ts` / `quizzes.ts` ya hacen spread de los arrays de genética.

---

## 4. Verification
```bash
npm run build
grep -n "genetica-cromosomas-herencia\|genetica-ciclo-celular" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "gen-herq\|gen-cicq" src/data/genetica-quizzes.ts
for p in gen-herq gen-cicq; do grep -o "id: '$p-q[0-9]*'" src/data/genetica-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): dos topics nuevos accesibles desde `genetica-uad-s3`
y Plan → Genética Semana 3 (Clase 1 impartida; mitosis/meiosis pendientes); recap enlaza a
`genetica-cromosomas-cariotipo` sin duplicar.

**Autoauditoría (Think Again):** los apuntes son un digest de ChatGPT — verifica contra la
transcripción/un texto base: bandeo G = Giemsa (más usado); nomenclatura 7q31.2 (q =
brazo largo); S = replicación del ADN; 2n=46 / n=23; interfase = G1+S+G2. Reporta conteos y
lo no confirmado.

## 5. Non-objectives
- No dupliques lo ya cubierto en `genetica-cromosomas-cariotipo` (recap + enlace). No
  desarrolles mitosis/meiosis (próxima clase). No renumeres `sectionId`s. No PDF/.md al
  repo. No `npm run deploy`.

## 6. Delivery
1. `feat(genetica): Topic bases cromosómicas, cariotipo y bandeo (S3 C1)`
2. `feat(genetica): Topic ciclo celular — interfase (S3 C1)`
3. `feat(genetica): bancos gen-herq y gen-cicq`
4. `chore(genetica): Semana 3 Clase 1 en módulo y plan (parcial)`

Reporta conteos y la autoauditoría.
