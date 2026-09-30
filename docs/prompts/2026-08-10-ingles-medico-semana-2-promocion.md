# PROMPT — MedCore · Inglés Médico I · Semana 2 (promoción de adelanto)

> Destinatario: **Claude Code**, repo `~/med-core-app`. Emitido 2026-08-10.
> Idioma: chrome y explicaciones en español; contenido de estudio en inglés.
> **Este prompt NO crea contenido nuevo de terminología. Promueve el que ya
> existe** y añade solo lo que el profesor agregó respecto al libro.

---

## 1. Situación — por qué esto es una promoción, no una carga

El adelanto de las unidades II–VI **ya está en el repo** (commits `d3da42e`,
`b45cbd5`, `dba8bca`). Existen `ingles-word-parts`, `ingles-plurals` y otros
cinco Topics, en el módulo `ingles-medico-adelanto`, cada uno con una sección 1
`{ type: 'note' }` titulada **"Adelanto — aún no impartido"**.

El **10 de agosto** el profesor impartió la **Semana 2 · Clase 1** (de 3), que
cubre la **Unidad II** del programa: *Terminología griega y latina · construcción
de términos médicos*. Verificado contra las 28 capturas de
`~/Desktop/UAD/Primer Semestre/Inglés Médico I DEF/Semana 2/Clase 1/`:

> El profesor tomó la clase **casi textualmente del capítulo 1 de *Medical
> Terminology: A Living Language*** — el mismo libro del que se construyó el
> adelanto y que ya está en la biblioteca. Las tablas de formas combinantes,
> prefijos y sufijos coinciden con las que ya cargaste.

Consecuencia: **el contenido de `ingles-word-parts` e `ingles-plurals` es
correcto y ya está impartido.** El trabajo no es reescribirlo — es:

1. **Promoverlos** de "adelanto" a "impartido".
2. **Reconciliar** su contenido con lo que el profesor efectivamente dio
   (añadir lo que falte, no duplicar lo que ya está).
3. Enlazarlos a la **Semana 2** del plan.
4. Añadir el **Proyecto Integrador** de la semana como quiz de repaso.
5. Subir el material de clase a la biblioteca.

Reescribir desde cero lo que ya está bien cargado es tirar trabajo válido e
introducir riesgo de regresión. Reconcilia, no rehagas.

---

## 2. Antes de escribir código

Lee: `src/data/ingles-uad-topics.ts` (Topics `ingles-word-parts` líneas ~830 y
`ingles-plurals` ~1016), `src/data/modules.ts`, `src/data/plans/types.ts`
(tipos `SemanaContent`, `FuenteRef`), `src/data/plans/uad-medicina.ts`
(materia `ingles-medico-1`, `content.semanas`), `src/data/meden-terms.ts`,
`src/data/ingles-adelanto-quizzes.ts`.

`npm run build` limpio antes de empezar.

---

## 3. Reconciliación de contenido — clase vs. adelanto

Contenido verificado de la Semana 2 · Clase 1. **Marca en el reporte qué ya
existía en el Topic y qué tuviste que añadir**, campo por campo.

### 3.1 `ingles-word-parts` — comprobaciones

La clase enseña, con estas piezas (todas deben quedar en el Topic; las que ya
estén, no las dupliques):

- **Las cuatro partes de un término**: word root · combining vowel/form ·
  prefix · suffix. Regla enunciada por el profesor: *todo término debe tener
  sufijo; no todo término tiene prefijo*.
- **Regla de la vocal de enlace** (la parte más evaluable):
  - Entre raíz y sufijo: si el **sufijo empieza por vocal**, NO se usa vocal de
    enlace (`arthr` + `-itis` → *arthritis*); si empieza por **consonante**, SÍ
    (`arthr` + `-scope` → *arthroscope*).
  - Entre dos raíces: la vocal de enlace **se conserva** aunque la segunda raíz
    empiece por vocal (`gastr` + `enter` + `-itis` → *gastroenteritis*).
  - La vocal de enlace es casi siempre **o**, a veces **i**.
  - La **combining form** es la raíz escrita con su vocal (`cardi/o` → heart).
- **Ejemplo troncal**: `oste/o` (bone) + `arthr` (joint) + `-itis` (inflammation)
  → *osteoarthritis* = inflamación del hueso en una articulación.
- **Origen histórico** (contexto, va como `paragraph`/`note`, no como reactivo
  denso): ~3/4 de la terminología es de origen griego (clínica: cardiology,
  nephropathia, gastritis); el latín domina la anatomía (ventriculus); Hipócrates
  y Galeno; Vesalio y *De humani corporis fabrica* (1543); hoy el inglés es la
  lingua franca y ~90 % del vocabulario médico inglés es grecolatino. Este bloque
  **enlaza con `ingles-scientific-literature`** (Unidad VI) — referencia cruzada,
  no lo repitas entero.
- **Tabla de formas combinantes** — verifica que estén estas 20 (las del libro).
  Si el Topic ya trae una tabla equivalente, complétala hasta cubrirlas; no crees
  una segunda:

  bi/o vida · carcin/o cáncer · cardi/o corazón · chem/o químico · cis/o cortar ·
  dermat/o piel · enter/o intestino delgado · gastr/o estómago · gynec/o mujer ·
  hemat/o sangre · immun/o inmunidad · laryng/o laringe · nephr/o riñón ·
  neur/o nervio · ophthalm/o ojo · ot/o oído · path/o enfermedad ·
  pulmon/o pulmón · rhin/o nariz.

- **Prefijos comunes** (a-, an-, anti-, auto-, brady-, de-, dys-, endo-, epi-,
  eu-, ex-, extra-, hetero-, homo-, hyper-, hypo-, in-, inter-, intra-, macro-,
  micro-, neo-, para-, per-, peri-, post-, pre-, pro-, pseudo-, re-, retro-,
  sub-, tachy-, trans-, ultra-, un-) y **prefijos numéricos** (bi-, hemi-, mono-,
  multi-, nulli-, pan-, poly-, quadri-, semi-, tetra-, tri-).
- **Sufijos comunes** (-algia, -cele, -cyte, -dynia, -ectasis, -gen, -genic, -ia,
  -iasis, -ism, -itis, -logist, -logy, -lytic, -malacia, -megaly, -oma, -opsy,
  -osis, -pathy, -plasm, -plegia, -ptosis, -rrhage, -rrhagia, -rrhea, -rrhexis,
  -sclerosis, -stenosis, -therapy, -trophy).

> Casi todo esto ya está en MedEN (commit `dba8bca`). El Topic debe **enseñar la
> regla** y remitir a `/vocabulario` para el listado navegable, no reproducir las
> tres tablas completas dentro del Topic. Si el adelanto ya lo hacía así,
> confírmalo y no cambies nada.

### 3.2 `ingles-plurals`

La Clase 1 **no** desarrolló la formación de plurales — eso es Unidad II pero
probablemente cae en la Clase 2 o 3. **Por tanto `ingles-plurals` NO se promueve
todavía**: se queda en adelanto. Solo `ingles-word-parts` pasa a impartido.

Si al leer las capturas encuentras que el profesor sí tocó plurales, promuévelo
también y dilo. Con lo verificado, no lo hizo.

### 3.3 Confusiones reales de esta semana (para reactivos nuevos)

- Vocal de enlace: `arthr-o-scope` (consonante, se usa) vs. `arthr-itis` (vocal,
  no se usa). Es EL punto que cae.
- La vocal se conserva entre dos raíces aunque siga vocal: *gastroenteritis*.
- Todo término tiene sufijo; no todo tiene prefijo.
- `-logy` (estudio de) vs. `-logist` (quien estudia): cardiology / cardiologist.
- Prefijos numéricos que se confunden: mono/uni (uno), bi (dos), tri (tres),
  quadri/tetra (cuatro), hemi/semi (mitad/parcial), poly/multi (muchos),
  nulli (ninguno), pan (todo).
- `-rrhage` / `-rrhagia` / `-rrhea` / `-rrhexis`: flujo excesivo / condición de
  flujo / secreción / ruptura. Cuatro sufijos que suenan casi igual.

---

## 4. Entregables

### 4.1 Promoción — `ingles-uad-topics.ts` + `modules.ts`

1. En `ingles-word-parts`, la sección `iwp-1` (la nota "Adelanto — aún no
   impartido") se **transforma**: cámbiala por una nota breve
   `{ type: 'note' }` que diga *"Impartido en la Semana 2, Clase 1 (10 ago).
   Basado en el capítulo 1 de Medical Terminology: A Living Language."* No borres
   la sección —renumerar `sectionId` rompe el progreso persistido (§ regla
   `useProgress`)—; reescribe su contenido conservando `id: 'iwp-1'`.
2. **Mueve `ingles-word-parts` del módulo `ingles-medico-adelanto` al módulo
   impartido.** Como su temática (construcción de términos) es distinta de los
   tres Topics de Semana 1, crea un módulo de Semana 2 en `modules.ts`:

   ```ts
   {
     id: 'ingles-medico-uad-s2',
     badge: 'UAD · Inglés Médico I — Semana 2',
     title: 'Terminología médica: construcción de términos',
     subtitle: 'Raíces, formas combinantes, prefijos y sufijos grecolatinos.',
     emoji: '🧬',
     topicIds: ['ingles-word-parts'],
   }
   ```

   Colócalo tras `ingles-medico-uad` (Semana 1) y antes de `anatomia`. Quita
   `ingles-word-parts` del array `topicIds` de `ingles-medico-adelanto`.
3. Los otros seis Topics de adelanto **siguen en adelanto** con su nota intacta,
   incluido `ingles-plurals` (§3.2).

### 4.2 Plan — `uad-medicina.ts`, materia `ingles-medico-1`

En `content.semanas`, la **semana 2**:

- `estado: 'impartido'` (ya no adelanto).
- `topicIds: ['ingles-word-parts']`.
- `fuentes`: el capítulo de referencia, con **ambas numeraciones**
  (ya verificado que existe el offset libro = PDF − 28):
  ```ts
  fuentes: [
    { title: 'Medical Terminology — A Living Language',
      file: 'Medical Terminology - A Living Language 6th ed.pdf',
      paginas: 'cap. 1, libro 1–20 (PDF 29–48)',
      nota: 'Construcción de términos: raíz, vocal de enlace, prefijo, sufijo.' },
  ]
  ```
- `materiales` (a nivel de `content.materiales`, no dentro de la semana):
  ```ts
  { title: 'Semana 2 · Clase 1 — Terminología griega y latina',
    file: 'Semana 2 - Clase 1 Terminologia Griega y Latina.pdf', kind: 'Clase' },
  { title: 'Proyecto Integrador Semana 2 — Medical Terminology Project',
    file: 'Semana 2 - Proyecto Integrador Medical Terminology.pdf', kind: 'Entrega' },
  ```

### 4.3 Proyecto Integrador como quiz de repaso

El proyecto de la semana es un **worksheet de 13 reactivos + un crucigrama de
terminología**. Conviértelo en práctica jugable (no sustituye la entrega oficial
en PDF; es para prepararla).

Nuevo archivo `src/data/ingles-proyecto-s2-quizzes.ts`, export
`inglesProyectoS2Questions`, agregado al spread de `quizzes.ts`, con
`topicId: 'ingles-word-parts'` para que aparezca bajo ese tema.

**Worksheet — 13 reactivos verbatim** (transcritos de la captura; opciones tal
cual, respuesta marcada donde la conozco por el temario, y `explanation` en
español):

1. The prefix that means without or absence of is: a. an  b. endo  c. pan
   d. ana  e. aden/o → **a (an-)**.
2. The suffix that means pain is: a. cele  b. ante  c. adip  d. algia
   e. apheresis → **d (-algia)**.
3. The suffix -ary is defined as: a. pertaining to  b. referring to an enzyme
   c. precursor  d. state of or condition of → **a (pertaining to)**.
4. The medical term that means absence of carbon dioxide is: a. acapnia
   b. aphonia  c. anticapnia  d. antecapnia → **a (acapnia)**.
5. What does a barometer measure? a. bacteria  b. life  c. eyelid  d. pressure
   → **d (pressure)**.
6. What color is the protein albumin? a. red  b. blue  c. white  d. black
   → **c (white)**.
7. Afferent vessels carry lymph fluid in what direction? a. away from the lymph
   node  b. toward the lymph node → **b**.
8. What is found in adipose tissue? a. urea  b. air  c. amnion  d. fat → **d**.
9. What is drooping in blepharoptosis? a. arm  b. eyelids  c. atrium  d. arteries
   → **b (eyelids)**.
10. Androgens have hormones that are ______ producing. a. female  b. male
    → **b (male)**.
11. What is inflamed in adenitis? a. adrenal glands  b. glands  c. appendix
    d. ear → **b (glands)**.
12. What is being viewed in an arthroscopy? a. arteries  b. fatty plaque
    c. veins  d. joints → **d (joints)**.
13. In menarche, what is happening to the menstrual flow? a. it is beginning
    b. it is ending → **a (beginning)**.

**Crucigrama — conviértelo en reactivos de definición → término.** Pistas
verbatim de la captura:

- Across: 3 flow or discharge from nose (*rhinorrhea*) · 10 excision or removal of
  tonsils (*tonsillectomy*) · 11 suffix "tumor" or "mass" (*-oma*) · 12 suffix
  "new opening" (*-stomy*) · 14 pain of a joint (*arthralgia*) · 15 new opening
  into the colon from outside of body (*colostomy*).
- Down: 1 suffix "treatment" (*-therapy*) · 2 cancerous tumor (*carcinoma*) ·
  3 inflammation of a joint (*arthritis*) · 5 suffix "pain" (*-algia* / *-dynia*)
  · 6 blood in the urine (*hematuria*) · 7 x-ray record of the spinal cord
  (*myelography*) · 8 suffix "disease" (*-pathy*) · 9 suffix "hardening"
  (*-sclerosis*) · 13 suffix "inflammation" (*-itis*).

  > Verifica cada respuesta del crucigrama contra las tablas de sufijos de la
  > clase antes de fijarla como correcta. Donde una pista admita dos sufijos
  > (p. ej. "pain" = -algia o -dynia), acéptalos ambos en el `explanation` y elige
  > uno como `correctIndex`. Reporta cualquiera que no puedas resolver con
  > certeza en vez de adivinar.

### 4.4 MedEN — completar Semana 2

Verifica que las 20 formas combinantes, los ~35 prefijos y los ~32 sufijos de la
clase estén en `meden-terms.ts` con `semana: 2`. Los que ya cargó el adelanto,
**cámbiales la `nota`**: quita el prefijo "Adelanto —" (ya se impartieron). Añade
los que falten. Reporta cuántos tenían la marca de adelanto y ahora no.

### 4.5 Biblioteca

Compón el PDF de la clase desde las 28 capturas (orden cronológico), como en el
prompt de Semana 1:

```bash
cd "~/Desktop/UAD/Primer Semestre/Inglés Médico I DEF/Semana 2"
python3 -c "
from PIL import Image, glob
ims=[Image.open(f).convert('RGB') for f in sorted(glob.glob('Clase 1/*.png'))]
ims[0].save('Semana 2 - Clase 1 Terminologia Griega y Latina.pdf',
            save_all=True, append_images=ims[1:], resolution=150)
print(len(ims),'páginas')  # → 28
"
```

Súbelo a `library.medcore.icu/ingles-medico-1/` con el nombre exacto de §4.2.
**Muéstrame el comando de subida antes de ejecutarlo.** No commitees PNG ni PDF.

---

## 5. Verificación

```bash
npm run build
grep -c "Adelanto — aún no impartido" src/data/ingles-uad-topics.ts   # → 6 (era 7)
grep -c "topicId: 'ingles-word-parts'" src/data/ingles-proyecto-s2-quizzes.ts
grep -o "id: '[a-z0-9-]*'" src/data/ingles-proyecto-s2-quizzes.ts | sort | uniq -d   # → vacío
```

Manual (`npm run dev`):

- [ ] `/estudio` muestra `ingles-word-parts` bajo el módulo de **Semana 2**, ya
      **sin** la nota de adelanto; los otros 6 siguen en el módulo de adelanto
- [ ] `/topic/ingles-word-parts` abre con la nota de "impartido en Semana 2",
      no con la de adelanto, y **conserva el progreso de lectura previo** (los
      `sectionId` no cambiaron)
- [ ] `/plan/ingles-medico-1`: la Semana 2 aparece como **impartida**, con su
      Topic, su fuente (páginas en ambas numeraciones) y los materiales nuevos
- [ ] El quiz del Proyecto Integrador es jugable bajo `ingles-word-parts`
- [ ] `/vocabulario?semana=2` lista las formas combinantes, prefijos y sufijos
      sin la marca "Adelanto"
- [ ] El enlace de biblioteca del PDF de clase resuelve (403, no 404)

**Auto-revisión:** toma 3 reactivos del worksheet y 3 del crucigrama y
verifícalos contra la captura y las tablas de la clase. Reporta el resultado.

---

## 6. No-objetivos

- No reescribas `ingles-word-parts` desde cero: reconcilia campo por campo.
- No promuevas `ingles-plurals` ni los otros cinco Topics de adelanto: la Clase 1
  no cubrió su contenido.
- No renumeres `sectionId` de ningún Topic: rompe `useProgress`.
- No dupliques tablas que ya estén en el Topic o en MedEN.
- No conviertas el Proyecto Integrador en la entrega oficial: es repaso.
- No toques Anatomía, PAI, ni el contenido de Semana 1.
- No añadas dependencias. No ejecutes `npm run deploy`.

---

## 7. Entrega

1. `feat(ingles): promueve word-parts de adelanto a impartido (Semana 2)`
2. `feat(plan): Semana 2 de Inglés Médico como impartida, con fuentes y materiales`
3. `feat(quizzes): Proyecto Integrador S2 — worksheet y crucigrama de terminología`
4. `feat(meden): retira marca de adelanto del vocabulario de Semana 2`

En el reporte: qué campos de `ingles-word-parts` ya estaban y cuáles añadiste;
qué respuestas del crucigrama no pudiste resolver con certeza; y cuántas entradas
de MedEN perdieron la marca de adelanto.
