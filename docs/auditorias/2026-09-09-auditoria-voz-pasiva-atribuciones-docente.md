# Auditoría — atribuciones al docente ("el profesor dijo / la Dra. dijo") → voz pasiva

Fecha: 2026-09-09. Alcance: todo `src/` (contenido en `src/data/**` y texto visible en
`src/pages/**`). Objetivo: localizar dónde el sitio narra lo que "dijo/hizo" el docente y
convertirlo a voz pasiva/impersonal, **preservando el significado** (sobre todo la marca de
"autoridad de examen", que es una regla de MedCore).

Las ocurrencias no son equivalentes. Se agrupan en tres categorías con distinto criterio de
ajuste.

---

## Categoría A — Verbos de habla/acción atribuidos al docente  → **reescribir a pasiva** (claro)
Son las frases que el usuario señaló: "la Dra. dictó/aclaró", "el profesor marcó/dejó como
tarea/resolvió". Ajuste directo a impersonal con «se».

| Archivo:línea | Actual (fragmento) | Propuesta (voz pasiva) |
|---|---|---|
| `genetica-topics.ts:34` | «la **docente sugiere** como apoyo…» | «**se sugiere** como apoyo…» |
| `genetica-topics.ts:752` | «La **profesora indicó** que NO hay que memorizar…» | «**Conviene** no memorizar las 64 combinaciones; **basta con dominar**…» |
| `genetica-topics.ts:843` | «La **Dra. subrayó** que hay tres enzimas…» | «**Destacan** tres enzimas que sí conviene aprender…» / «**Se destacan**…» |
| `genetica-topics.ts:909` (subtítulo) | «Las 9 prioridades **que dictó la Dra.**» | «Las 9 prioridades **del examen**» |
| `genetica-topics.ts:931` (título) | «Banco de prioridades **dictado por la Dra.**» | «Banco de prioridades **del examen**» |
| `genetica-topics.ts:933` | «al cerrar la Clase 3, **la Dra. dictó** las 9 prioridades…» | «al cerrar la Clase 3 **se dictaron** las 9 prioridades…» / «**quedaron marcadas**…» |
| `genetica-topics.ts:940` | «La **Dra. aclaró** que el examen se concentra…» | «**El examen se concentra** en los conceptos fundamentales…» |
| `histologia-topics.ts:174` | «El **profesor marca** con una estrella…» | «**Se marcan** con una estrella (★) los datos que pueden caer…» |
| `histologia-topics.ts:599/601` | «banco tipo examen **del profesor**… **el profesor resolvió** un banco…» | «banco tipo examen… **se resolvió** un banco de preguntas…» |
| `histologia-topics.ts:608/620` | «Consejos **del profesor**… (del banco **del profesor**)» | «Consejos **para el examen**… (del banco de repaso)» |
| `histologia-topics.ts:864` | «Asociaciones **que el docente priorizó**…» | «Asociaciones **prioritarias para el examen**…» |
| `histologia-topics.ts:1036` | «El **profesor dejó** como TAREA…» | «**Se dejó** como TAREA elaborar la tabla…» |
| `histologia-quizzes.ts:211` | «(El **profesor dejó** pendiente verificar…)» | «(**Quedó pendiente** verificar si tampoco tiñe el ADN.)» |
| `anatomia-uad-topics.ts:1103/1226/1325` | «el **profesor clasifica** las flotantes…» | «las flotantes **se clasifican** como subconjunto de las falsas (criterio del examen)» |
| `anatomia-uad-topics.ts:1125` | «El **profesor sitúa** la manubrio-esternal a D3…» | «La manubrio-esternal **se sitúa** en D3 (nivel evaluable)…» |
| `anatomia-uad-topics.ts:1790/1837` | «El **profesor anota** la contribución… como…» | «La contribución **se anota** (en las diapositivas) como…» |
| `anatomia-uad-topics.ts:1884` | «El **profesor escribe** "peroné" y "astrágalo"…» | «Las diapositivas **usan** "peroné" y "astrágalo" (los del examen)…» |
| `anatomia-uad-topics.ts:2243` (título) | «Datos **que el profesor repite**» | «Datos **que se repiten** en el examen» |
| `anatomia-uad-topics.ts:2157/2292/2416` | «lo que **el profesor marcó** como evaluable…» | «lo **marcado como evaluable**…» |
| `anatomia-uad-topics.ts:3479` | «El **profesor cuenta** 11 músculos…» | «**Se cuentan** 11 músculos de la nariz por lado…» |
| `anatomia-uad-quizzes.ts:550` | «El **profesor clasifica** las falsas como…» | «Las falsas **se clasifican** como 8.ª–12.ª (criterio del examen)…» |
| `anatomia-uad-quizzes.ts:585` | «**Según el profesor**… El **profesor sitúa**…» | «**En el examen**… **se sitúa** la manubrio-esternal en D3…» |
| `ingles-uad-topics.ts:876` | «el **profesor tomó** las tablas… casi textualmente» | «las tablas **se tomaron** casi textualmente del libro» |
| `ingles-uad-topics.ts:1390` | «La regla práctica **del profesor**…» | «Regla práctica: la palabra señal suele indicar el tiempo…» |
| `ingles-uad-topics.ts:2324` | «El **profesor puede recortarlo**…» | «**Puede recortarse, reordenarse o reenfatizarse** en clase…» |

Total categoría A: ~26 cadenas de contenido (+ 3 subtítulos de módulo, abajo).

---

## Categoría B — "del profesor / según el profesor" como marca de AUTORIDAD DE EXAMEN → reescribir con cuidado
No es habla ("dijo"), es un posesivo que distingue *lo que evalúa el examen* de *lo que dice
el libro*. **Esa distinción es una regla de MedCore y no debe perderse.** Ajuste: sustituir la
persona por la fuente/autoridad impersonal.

- **Título repetido** `«Nomenclatura: TA principal, clásica del profesor entre paréntesis»`
  — **17 ocurrencias** en `anatomia-uad-topics.ts` (líneas 1117, 1371, 1648, 2172, 2521, 2646,
  2745, 2880, 3007, 3153, 3552, 3751, 3970, 4096, 4225, 4334, y una más). Propuesta:
  **«Nomenclatura: TA principal, clásica (la del examen) entre paréntesis»** o «…clásica de
  las diapositivas entre paréntesis». Un solo find‑and‑replace resuelve las 17.
- Cuerpos con «el clásico **del profesor** entre paréntesis», «la nomenclatura clásica **del
  profesor**», «la diapositiva **del profesor**», «versión / matiz / niveles / dato **del
  profesor**» → «el clásico **del examen**», «la nomenclatura clásica **de las
  diapositivas**», «la versión **evaluada en el examen**», «los niveles **evaluables (D3/
  D10)**», «el dato **del examen (cítese literal)**».
- Quiz `anatomia-uad-quizzes.ts` 534/542/547/655/770/773 y `atlas-topics.ts:101` — mismo
  patrón: «según el profesor / del profesor» → «según el examen / la versión evaluada».

Total categoría B: **~65 ocurrencias** de "del profesor / según el profesor" (incluye los 17
títulos). Recomendación: reescribir **preservando explícitamente** el marcador de examen
("del examen", "evaluable", "de las diapositivas"), nunca borrarlo a secas.

---

## Categoría C — Nombres propios del docente (autoría/procedencia)
Aquí no hay verbo de habla; se nombra a la persona como fuente.

- **Visible en UI:**
  - `src/pages/MedEn.tsx:301` — «Fuente: **clases de la Dra. Ana Paulina Nájera Soto**.»
  - `modules.ts:128` — «Las 9 prioridades **de la Dra.**: …»
  - `modules.ts:144` — «Banco tipo examen **del profesor**: …»
  - `genetica-topics.ts:909`, `histologia-topics.ts:577/595`, `anatomia-uad-topics.ts:2132`
    (subtítulos «banco… del profesor», «… del profesor»).
  - `plans/uad-medicina.ts:286` — «…prioridades del examen **dictadas por la Dra.**»
- **Solo en comentarios de código (NO visibles en el sitio):** cabeceras que nombran a
  «Dr. Soto Pacheco», «Dra. Cazares», «Prof. Dra. Nájera Soto» en `anatomia-uad-topics.ts:3`,
  `anatomia-uad-quizzes.ts:3`, `genetica-topics.ts:3`, `histologia-topics.ts:3`,
  `ingles-uad-topics.ts:3/11`, `plans/uad-medicina.ts:111`, etc.
- **Campo de tipo:** `meden-terms.ts:32` comentario `// errata del profesor` y
  `plans/types.ts:48` `// horas docente` (metadato, no prosa).

Decisión de alcance (tuya): la Categoría C **no es "el Dr. dijo"**; es atribución de fuente.
Puede (a) dejarse como está —es correcto citar la procedencia—, (b) neutralizarse solo en el
texto **visible** ("del examen" / "de la materia"), o (c) quitarse también de los comentarios.
Los comentarios no afectan al sitio.

---

## Recomendación de ejecución
1. **Ahora / regla futura:** la skill `medcore-semana` queda actualizada para **redactar en
   voz pasiva** desde el inicio (sin "el profesor dijo"), conservando la marca de examen.
2. **Corrección del contenido existente:** se puede hacer en un solo prompt para Claude Code:
   - **A**: reescritura a pasiva (lista de arriba) — bajo riesgo.
   - **B**: find‑and‑replace del título ×17 + cuerpos, **preservando** "del examen/evaluable".
   - **C**: según lo que decidas (recomendado: neutralizar solo lo visible; conservar los
     comentarios de autoría).
   No tocar `sectionId`s. `npm run build` + revisión en claro/oscuro.

## Nota de método (Think Again)
La Categoría B es la trampa: convertir mecánicamente "del profesor" en pasiva puede **borrar**
una distinción real (examen vs libro) que tú mismo pediste conservar. Por eso el ajuste no es
"quitar al profesor", sino "cambiar la persona por la autoridad" (el examen / las
diapositivas). Antes de ejecutar B conviene revisar 3–4 casos para confirmar que el
significado evaluable se mantiene.
