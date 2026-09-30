# PROMPT — MedCore · Genética Básica · Semana 4 Clase 3 — Diferenciación sexual y DSD

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-23.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "la Dra. dijo"; use "se…" / "del examen" (regla de la skill).**
> Carga la Semana 4 Clase 3 (**última clase del curso**): **anomalías de la diferenciación
> sexual (DSD)** — genes y vías de diferenciación + enfoque clínico. Enfoque **por
> comprensión** (cariotipo→gen→gónada→hormonas→genitales), no memorizar listas de genes.
> Trata el tema con **terminología médica actual y respetuosa** (DSD; asignación de género
> individualizada), como en la clase.

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript para verificar:
- `…/Genética Básica DEF/Clases/Semana 4/Clase 3/Genetica_Semana_4_Clase_3_Apuntes.md`
  (+ transcript `# … Week 4 Class 3.md`, + slides PDF a la biblioteca privada, no al repo).
Ya cargado (S4): módulo `genetica-uad-s4` con `genetica-citogenetica-clinica`,
`genetica-errores-metabolismo`, `genetica-organogenesis`, `genetica-teratogenesis`.
Enlaza: Turner/Klinefelter (de `genetica-citogenetica-clinica`) y las capas germinales/
crestas (de `genetica-organogenesis`). *(Depende de que el prompt S4 C1 haya corrido — creó
el módulo `genetica-uad-s4`; si no, créalo.)*

```bash
cd ~/med-core-app && npm run build
grep -n "genetica-uad-s4\|genetica-citogenetica-clinica\|number: 4" src/data/modules.ts src/data/plans/uad-medicina.ts | head
grep -o "id: 'gen-[a-z]*q" src/data/genetica-quizzes.ts | sort -u
```

## Enfoque de examen (indicación de la Dra. — refléjalo, ★)
Prioridad: **3 niveles** (cromosómico→gonadal→fenotípico); **genes SRY→SOX9→DAX1→SF1**;
**cadena masculina** (SRY→SOX9→Sertoli→AMH; Leydig→testosterona→5α‑reductasa→DHT);
**conductos** (AMH→regresión de Müller; testosterona→Wolff); **diagnóstico** (cariotipo +
hormonas + imagen); **hormonas clave** (testosterona, DHT, AMH); Turner 45,X / Klinefelter
47,XXY. Comprender la lógica, **no** memorizar cada gen/mecanismo.

---

## 1. New Topics (append a `geneticaTopics`, `colorKey:'genetica'`, `categoria:'Genética'`, `emoji:'🧬'`)
Depth bar; ≥1 `correlacion`. Dos topics:

### 1a. `genetica-diferenciacion-sexual` — "Diferenciación sexual: genes y vías" (S4 C3, parte 1)
- **Tres niveles**: **cromosómico** (XX/XY) → **gonadal** (ovario/testículo) → **fenotípico**
  (genitales internos/externos). Regla: **cromosoma → gónada → fenotipo**.
- **Gónada indiferenciada** inicial (SF1 en el primordio) → vía masculina o femenina.
- **Genes clave**: **SRY** (cromosoma **Y**; inicia la vía masculina → activa SOX9);
  **SOX9** (induce **células de Sertoli**; su duplicación en XX puede favorecer testículo);
  **DAX1** (cromosoma **X**; regulación de la vía femenina/antagonista de la masculina);
  **SF1** (primordio gonadal/genital + función endocrina; sus fallas → insuficiencia
  suprarrenal/disgenesia gonadal).
- **Vía masculina** (cadena ★): SRY → SOX9 → **Sertoli → AMH → regresión de los conductos de
  Müller**; **Leydig → testosterona → conductos de Wolff** (epidídimo, deferentes, vesículas
  seminales); **testosterona → 5α‑reductasa → DHT → genitales externos, próstata, uretra**.
- **Vía femenina**: en ausencia de la señal masculina → ovario; **Müller persiste** (trompas,
  útero, parte superior de vagina); Wolff regresa. Genitales externos: clítoris, labios,
  orificio vaginal.
- **Período indiferenciado de los genitales externos**: tubérculo genital, pliegue cloacal,
  eminencias genitales → la acción androgénica (DHT) los masculiniza.
- `correlacion` (clinica): **déficit de 5α‑reductasa** → 46,XY con masculinización externa
  incompleta (testosterona normal, DHT baja); **falla de AMH** → 46,XY con útero/trompas
  persistentes.

### 1b. `genetica-dsd` — "Anomalías de la diferenciación sexual (DSD): enfoque clínico" (S4 C3, parte 2)
- **DSD** = diferencias del desarrollo sexual; una alteración en cualquiera de los tres
  niveles (cromosómico/gonadal/hormonal‑enzimático). Categorías: **46,XY DSD**, **46,XX
  DSD**, formas mixtas, disgenesia gonadal, alteración de síntesis/acción de andrógenos,
  persistencia de Müller. Idea central: **sexo cromosómico ≠ necesariamente gonadal ≠
  necesariamente fenotípico**. *(Menciona los términos históricos —pseudohermafroditismo,
  ovotesticular— solo como vocabulario del material; razona en términos de DSD + causa.)*
- **¿Cuándo sospechar?** ambigüedad genital, historia familiar de DSD, discordancia
  genitales↔cariotipo. Ejemplos de ambigüedad (clitoromegalia, fusión labial; micropene,
  hipospadias, testículos no descendidos). Escala de masculinización externa (qué variables
  observa; sin memorizar puntajes).
- **Diagnóstico de primera línea (★)**: **cariotipo + FISH (SRY) + hormonas + imagen**.
  Hormonas: **testosterona, DHT, AMH, 17‑hidroxiprogesterona** + electrolitos (¿por qué
  testosterona **y** DHT? para valorar la conversión por 5α‑reductasa; ¿por qué AMH? Sertoli/
  regresión de Müller). Imagen: **ecografía** (¿hay útero?), y RM/genitograma/laparoscopia/
  biopsia gonadal según el caso.
- **Tratamiento** (individualizado): **asignación de género** + **médico** (déficit adrenal →
  **hidrocortisona**; desarrollo puberal → **terapia hormonal**) + **quirúrgico** según
  anatomía/gónadas/identidad. Se decide caso por caso con acompañamiento.
- **Recap**: Turner **45,X** y Klinefelter **47,XXY** dentro de las alteraciones del
  desarrollo sexual (enlace a `genetica-citogenetica-clinica`).
- `correlacion` (clinica) con 3 casos‑razonamiento ★: (1) 46,XY + testosterona normal + DHT
  baja → **5α‑reductasa**; (2) 46,XY + útero/trompas → **AMH**; (3) 46,XX + desarrollo
  testicular → **duplicación de SOX9**.

Cierre (note): reconstruir la cadena **cariotipo → genes → gónada → hormonas → estructuras
internas → genitales externos → diagnóstico**. (Es el cierre del curso.)

---

## 2. Quiz banks (`genetica-quizzes.ts`) — ~10 c/u, ★ los de prioridad
- **`gen-dsxq`** → `genetica-diferenciacion-sexual`: 3 niveles; SRY (Y, inicia masculina);
  SOX9→Sertoli; DAX1 (X, femenina); SF1 (primordio/endocrino); AMH→regresión de Müller;
  Leydig→testosterona→Wolff; 5α‑reductasa→DHT→genitales externos; vía femenina (Müller
  persiste).
- **`gen-dsdq`** → `genetica-dsd`: definición DSD y niveles; cuándo sospechar; primera línea
  (cariotipo+FISH SRY+hormonas+imagen); por qué testosterona+DHT (5α‑reductasa); por qué AMH;
  casos 5α‑reductasa / AMH / SOX9; Turner 45,X / Klinefelter 47,XXY; hidrocortisona en déficit
  adrenal.
`explanation` en español; distractores de gen/hormona/vía hermana; `correctIndex` repartido.
Mantén el registro médico respetuoso.

---

## 3. Wire it in (completa Semana 4 y el curso)
- **`modules.ts`** `genetica-uad-s4`: agrega `'genetica-diferenciacion-sexual'` y
  `'genetica-dsd'` a `topicIds`; actualiza subtitle para incluir diferenciación sexual.
- **`plans/uad-medicina.ts`** Genética Semana 4: agrega ambos topicIds; en `temas` marca
  **Clase 3 (impartida)**: anomalías de la diferenciación sexual (genes, vías y enfoque
  clínico). Con esto la Semana 4 (citogenética, metabolismo, desarrollo/teratogénesis,
  diferenciación sexual) queda **completa**. Añade `materiales` "Semana 4 · Clase 3".
- `topics.ts` / `quizzes.ts` ya hacen spread.

---

## 4. Verification
```bash
npm run build
grep -n "genetica-diferenciacion-sexual\|genetica-dsd" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "gen-dsxq\|gen-dsdq" src/data/genetica-quizzes.ts
for p in gen-dsxq gen-dsdq; do grep -o "id: '$p-q[0-9]*'" src/data/genetica-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): dos topics nuevos desde `genetica-uad-s4` y Plan →
Genética Semana 4; tablas/cadenas legibles en dark; enlaza a Turner/Klinefelter (citogenética).

**Autoauditoría (Think Again):** apuntes = digest de ChatGPT — verifica contra la
transcripción/un texto (embriología, Langman/Moore): SRY en **Y**, activa SOX9; SOX9→
**Sertoli→AMH→regresión de Müller**; **Leydig→testosterona→Wolff**; **5α‑reductasa→DHT→
genitales externos/próstata**; DAX1 en **X**; primera línea = cariotipo+hormonas+imagen;
Turner 45,X / Klinefelter 47,XXY. Reporta conteos y lo no confirmado.

## 5. Non-objectives
- No dupliques Turner/Klinefelter de `genetica-citogenetica-clinica` (recap + enlace). No
  renumeres `sectionId`s. Registro médico respetuoso, sin juicios. No PDF/.md al repo. No
  `npm run deploy`.

## 6. Delivery
1. `feat(genetica): Topic diferenciación sexual — genes y vías (S4 C3)`
2. `feat(genetica): Topic DSD — enfoque clínico (S4 C3)`
3. `feat(genetica): bancos gen-dsxq y gen-dsdq (★)`
4. `chore(genetica): Semana 4 completa (Clase 3) en módulo s4 y plan`

Reporta conteos y la autoauditoría.
