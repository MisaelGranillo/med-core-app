# PROMPT — MedCore · Histología I · Semana 2 Clases 3–4

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-10.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "el docente dijo"; use "se…" and, for exam authority, "del examen / de las
> diapositivas" (regla de la skill `medcore-semana`).**
> Carga Clase 3 (glándulas, regeneración, epitelios de órganos: urinario, glomerular y
> respiratorio) y Clase 4 (piel). Clases 1–2 ya están cargadas — **enlaza, no dupliques**.

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript + slides for verification (todo en la
biblioteca privada, **nunca al repo**):
- `…/Histología I y sus Laboratorios DEF/Clases/Semana 2/Clase 3/Histologia_I_Semana_2_Clase_3_Apuntes.md` (+ transcript `# … Week 2 Class 3.md`)
- `…/Semana 2/Clase 4/Histologia_I_Semana_2_Clase_4_Apuntes.md` (+ transcript, + `Histologia_I_Semana_2_Clase_4_Preguntas_de_Repaso.md` con **15 preguntas resueltas**)

Existing (loaded, do not edit): topics `histologia-epitelial` (C1), `histologia-epitelial-polaridad`
(C2); module `histologia-uad-s2` (`topicIds: ['histologia-epitelial','histologia-epitelial-polaridad']`);
quiz prefixes `his-epiq`, `his-polq`; plan Histología Semana 2 = impartida.

```bash
cd ~/med-core-app && npm run build
grep -n "histologia-epitelial\|histologia-uad-s2" src/data/modules.ts src/data/plans/uad-medicina.ts | head
grep -o "id: 'his-[a-z0-9]*q" src/data/histologia-quizzes.ts | sort -u
```

> Overlap: C2 introdujo glándulas (exocrina/endocrina, adenómero, merócrina/apócrina/
> holócrina). C3 **amplía** (añade citógena, mecanismo regulado/constitutivo y toda la
> clasificación). En el topic de C3 haz un recap de una línea que enlace a
> `histologia-epitelial-polaridad` y desarrolla lo nuevo.

---

## 1. New Topics (append to `histologiaTopics`, `colorKey:'histologia'`, `categoria:'Histología'`, `emoji:'🔬'`)
Depth bar (prosa que enseñe sin diapositivas; definiciones completas; ≥1 `correlacion`).
Cuatro topics:

### 1a. `histologia-glandulas` — "Glándulas y regeneración epitelial" (C3, parte 1)
- **Mecanismos de secreción**: regulado (almacena en gránulos, libera por señal) vs
  constitutivo (continuo, sin almacenamiento).
- **Tipos**: **merócrina** (exocitosis, célula intacta — páncreas, sudoríparas),
  **apócrina** (pierde parte apical — mamaria), **holócrina** (muere toda la célula —
  sebácea), **citógena** (libera células completas — óvulos, espermatozoides). *(Este 4.º
  tipo es nuevo respecto a C2.)*
- **Adenómero** (porción secretora) vs **conducto excretor** (transporta).
- **Clasificación**: por conducto (simple / compuesta / acinar en racimos); por forma del
  adenómero (acinosa, alveolar, tubular); por nº de células (unicelular = caliciforme /
  multicelular); por producto (mucoso: núcleo aplanado, citoplasma claro / seroso: núcleo
  redondo, citoplasma granular basófilo / mixto: **semilunas de Gianuzzi** — sublingual,
  submandibular); por ubicación (intraepitelial / intramural / extramural).
- **Organización topográfica**: cápsula, tabiques, lóbulos, lobulillos; **estroma**
  (soporte) vs **parénquima** (función).
- **Regeneración por células madre**: localización según el epitelio (simple con
  glándulas: fondo del adenómero; pseudoestratificado y estratificado: capa basal);
  **modelo asimétrico** (una hija se mantiene madre, otra se diferencia) vs **simétrico**
  (expansión). `correlacion` (dato): por qué la piel conserva reserva de células madre.

### 1b. `histologia-epitelios-urinario` — "Epitelios del aparato urinario: urotelio y glomérulo" (C3, parte 2)
- **Urotelio** (epitelio de transición): extensión **cálices menores → cálices mayores →
  pelvis renal → uréteres → vejiga → uretra proximal** (no toda la uretra); poblaciones:
  **basales** (madre, tocan MB), **intermedias** (reserva piriforme), **superficiales/en
  paraguas** (grandes, binucleadas, enfrentan la orina); distensión (vacía = más estratos/
  abombadas; llena = parece más delgado, se deslizan — no se pierden células); protección:
  **placas uroteliales (uroplaquinas)**, **vesículas fusiformes**, uniones ocluyentes
  desarrolladas, recambio lento.
- `correlacion` (clinica): **cistitis** (exfolia células en paraguas → disuria/frecuencia/
  hematuria); **E. coli** con **fimbrias**; reflujo vesicoureteral (niños); **carcinoma
  urotelial** multifocal (tabaco, aminas aromáticas, tintes). La vía urinaria conduce y
  almacena; **no modifica** la orina tras la filtración.
- **Corpúsculo renal** = glomérulo + **cápsula de Bowman**; hoja **parietal** = **plano
  simple**; hoja **visceral** = **podocitos** con **pedicelos** → **ranuras de
  filtración**; polo vascular (arteriolas aferente/eferente) vs polo urinario (cambia a
  **cúbico simple** = túbulo proximal). Epitelios de la nefrona (tabla): Bowman plano
  simple · túbulo proximal cúbico con borde en cepillo · asa de Henle plano simple ·
  colector cúbico→cilíndrico.
- **Barrera de filtración glomerular** (3 capas): **endotelio fenestrado** + **MBG**
  (colágeno IV + heparán sulfato; barrera de carga que frena la albúmina) + **podocitos/
  pedicelos**. `correlacion` (clinica): diabetes → hiperfiltración → engrosamiento →
  **albuminuria**. Dato: ~**180 L/día** de ultrafiltrado, se reabsorbe **>99 %**.

### 1c. `histologia-epitelios-respiratorio` — "Epitelios del aparato respiratorio y alvéolo" (C3, parte 3)
- Porción **conductora** (conduce/limpia/calienta/humidifica) vs **respiratoria**
  (intercambio). Epitelio respiratorio (tráquea/bronquios): **cilíndrico
  pseudoestratificado ciliado con caliciformes** (todas tocan MB, no todas llegan a la
  superficie); células ciliadas, caliciformes (moco), basales (madre); **sistema
  mucociliar** (moco atrapa, cilios desplazan). A menor calibre, epitelio más bajo y menos
  caliciformes (tráquea→bronquios→bronquiolos→alvéolos); en bronquiolos, **células de
  Club**.
- `correlacion` (clinica): **metaplasia escamosa** por tabaquismo (pierde cilios); **fibrosis
  quística** (moco espeso, bronquiectasias).
- **Alvéolos**: **plano simple**; **neumocito I** (95 % de superficie, intercambio),
  **neumocito II** (surfactante en **cuerpos lamelares** + regeneración/progenitora).
  **Barrera hematogaseosa** (~**0.2 μm**): neumocito I + membranas basales fusionadas +
  endotelio capilar. Macrófagos alveolares (limpieza). `correlacion` (clinica): anafilaxia →
  edema pulmonar / compromiso del intercambio.

### 1d. `histologia-piel` — "Histología de la piel: epidermis y estratos" (C4)
- Generalidades: órgano más grande (~1.8 m², ≈16 % del peso, recambio 4–6 semanas);
  funciones (barrera; termorregulación; sensorial; inmunovigilancia = Langerhans; vitamina
  D; fotoprotección). Componentes: **epidermis** (ectodermo, avascular), **dermis**
  (mesodermo, vasos/nervios), **hipodermis** (fascia superficial, no es piel).
- **Epidermis** = **plano estratificado queratinizado**. **5 estratos** (profundo→superficial):
  **basal** (germinativo; una hilera, mitosis/células madre, melanocitos, Merkel) →
  **espinoso** (8–10 hileras, poliédricas, **desmosomas + tonofilamentos**, Langerhans) →
  **granuloso** (3–5 hileras, **queratohialina/filagrina**, **cuerpos lamelares** →
  ceramidas/colesterol/ácidos grasos = barrera) → **lúcido** (solo **piel gruesa**: palmas/
  plantas; eleidina) → **córneo** (corneocitos anucleados, queratina). Mnemotecnia
  **B‑E‑G‑L‑C**. Piel delgada vs gruesa = presencia del **lúcido**.
- **4 poblaciones** (tabla origen/localización/función/%): **queratinocito** (ectodermo,
  85–90 %), **melanocito** (cresta neural, basal, melanosomas/melanina, unidad
  melanoepidérmica 1:30–40, sombrilla perinuclear), **Langerhans** (médula ósea, espinoso,
  APC), **Merkel** (basal, mecanorreceptor de adaptación lenta).
- **Unión dermoepidérmica**: **desmosomas** (queratinocito↔queratinocito; desmogleína/
  desmocolina) vs **hemidesmosomas** (basal↔MB; integrinas, BP180/BP230); membrana basal
  (lámina lúcida/densa, colágeno IV y VII, fibrillas de anclaje). Dermis papilar vs
  reticular; plexos vasculares (termorregulación). *(La celularidad de la dermis se ve en
  tejido conectivo — solo introducir.)*
- `correlacion` (clinica) — el docente cargó la clínica dermatológica: **pénfigo vulgar**
  (anti‑desmogleína 1/3 → ampolla **intra**epidérmica) vs **penfigoide ampolloso**
  (hemidesmosoma/BP180/BP230 → ampolla **sub**epidérmica); **psoriasis** (recambio 7–10
  días); **vitíligo** (destrucción autoinmune de melanocitos) vs **albinismo** (melanocitos
  presentes, **tirosinasa** deficiente); **melanoma** (melanocito; invasivo al cruzar la MB;
  regla **ABCDE**; dx por biopsia). Quemadura: epidermis avascular no sangra; si alcanza
  dermis (2.º grado) sangra.

---

## 2. Quiz banks (`histologia-quizzes.ts`) — ~10–12 items c/u
Nuevos prefijos, `explanation` en español, distractores de estructura hermana,
`correctIndex` repartido, sin IDs duplicados:
- **`his-glaq`** → `histologia-glandulas`: regulado vs constitutivo; merócrina/apócrina/
  holócrina/**citógena**; adenómero vs conducto; simple vs compuesta; acinosa/alveolar/
  tubular; mucoso vs seroso; semilunas de Gianuzzi; intra/intra/extramural; estroma vs
  parénquima; modelo asimétrico vs simétrico.
- **`his-uriq`** → `histologia-epitelios-urinario`: extensión del urotelio; transición/
  distensión; células en paraguas; uroplaquinas/vesículas fusiformes; E. coli/fimbrias;
  Bowman parietal plano simple; podocitos/pedicelos; barrera glomerular (endotelio
  fenestrado/MBG colágeno IV/podocitos); albuminuria en diabetes; 180 L/día / >99 %.
- **`his-resq`** → `histologia-epitelios-respiratorio`: pseudoestratificado ciliado +
  caliciformes; sistema mucociliar; células de Club; metaplasia escamosa por tabaco;
  alvéolo plano simple; neumocito I = intercambio; neumocito II = surfactante/cuerpos
  lamelares/regeneración; barrera hematogaseosa 0.2 μm; macrófagos alveolares.
- **`his-pielq`** → `histologia-piel`: **siembra con las 15 preguntas resueltas** del
  archivo `…Clase_4_Preguntas_de_Repaso.md` (respuestas ya verificadas: 1‑C,2‑D,3‑B,4‑C,
  5‑A,6‑C,7‑A,8‑D,9‑A,10‑B,11‑D,12‑C,13‑A,14‑C,15‑C) — adáptalas y añade sobre estratos
  (B‑E‑G‑L‑C), las 4 células, desmosoma vs hemidesmosoma, pénfigo vs penfigoide, vitíligo
  vs albinismo, melanoma/ABCDE. Marca ★ las asociaciones que el examen prioriza.

---

## 3. Wire it in
- **`modules.ts`** `histologia-uad-s2`: añade los 4 topicIds nuevos; actualiza el subtitle
  para incluir glándulas, epitelios de órganos (urinario/respiratorio) y piel.
- **`plans/uad-medicina.ts`** Histología Semana 2: añade los 4 topicIds; añade semanas/temas
  de Clase 3 (glándulas y regeneración; urotelio y nefrona; aparato respiratorio) y Clase 4
  (piel: epidermis, estratos, celularidad, unión dermoepidérmica); añade `materiales`
  "Semana 2 · Clase 3 …" y "Semana 2 · Clase 4 — Histología de la piel". Mantén `estado`
  impartido.
- `topics.ts` / `quizzes.ts` ya hacen spread de los arrays de histología.

---

## 4. Verification
```bash
npm run build
grep -n "histologia-glandulas\|histologia-epitelios-urinario\|histologia-epitelios-respiratorio\|histologia-piel" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "his-glaq\|his-uriq\|his-resq\|his-pielq" src/data/histologia-quizzes.ts
for p in his-glaq his-uriq his-resq his-pielq; do grep -o "id: '$p-q[0-9]*'" src/data/histologia-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): 4 topics nuevos accesibles desde `histologia-uad-s2`
y Plan → Histología Semana 2; tablas legibles en dark; los quizzes corren; el topic de C3
enlaza a `histologia-epitelial-polaridad` sin duplicar glándulas.

**Autoauditoría obligatoria (Think Again):** los apuntes son un **digest secundario de
ChatGPT** — verifica contra la transcripción/un texto de histología (Ross) 6 puntos antes
de afirmarlos: extensión del urotelio (cálices menores → uretra proximal); Bowman parietal
= **plano simple**; barrera glomerular = endotelio fenestrado + MBG (colágeno IV) +
podocitos; neumocito I = intercambio / II = surfactante; orden de estratos **B‑E‑G‑L‑C** y
lúcido solo en piel gruesa; pénfigo (desmosoma, intraepidérmica) vs penfigoide
(hemidesmosoma, subepidérmica). Verifica las 15 respuestas sembradas contra su archivo.
Reporta conteos y lo que no puedas confirmar.

---

## 5. Non‑objectives
- No dupliques glándulas ya en `histologia-epitelial-polaridad` (recap + enlace). No
  renumeres `sectionId`s ni edites C1/C2. **No construyas aún el repaso ≥30 de la Semana 2**
  (se hace el viernes, con la semana completa; el ejercicio de repaso anunciado por el
  docente y las 15 preguntas de C4 lo alimentarán). No metas PDF/.md al repo. No
  `npm run deploy`.

## 6. Delivery (commits atómicos)
1. `feat(histologia): Topic glándulas y regeneración epitelial (S2 C3)`
2. `feat(histologia): Topic epitelios del aparato urinario y glomérulo (S2 C3)`
3. `feat(histologia): Topic epitelios del aparato respiratorio y alvéolo (S2 C3)`
4. `feat(histologia): Topic histología de la piel (S2 C4)`
5. `feat(histologia): bancos de quiz his-glaq/uriq/resq/pielq`
6. `chore(histologia): Semana 2 Clases 3–4 en módulo y plan`

Reporta conteos y la autoauditoría.
