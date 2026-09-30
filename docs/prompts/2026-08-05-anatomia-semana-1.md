# PROMPT — MedCore · Anatomía Humana y Disección I · Semana 1

> Destinatario: **Claude Code**, ejecutando en el repo `~/med-core-app`.
> Emitido 2026-08-05 · **revisado 2026-08-06 tras la clase 4**.
> Idioma de todo el código, comentarios y cadenas de UI: **español**.
>
> **Cambio respecto a la versión anterior:** la clase 4 cubrió la columna
> vertebral **completa** (22 diapositivas), no la mitad. Las dos fases previstas
> se colapsan en **una sola corrida** con 4 Topics y el reparto definitivo de 50
> reactivos. Lo único diferido es el parche de §9.

---

## 0. Antes de escribir una sola línea

1. Lee `README.md` y `docs/ARCHIVE-UNISA.md`.
2. Lee los esquemas que vas a tocar, **completos**, antes de editarlos:
   - `src/types/index.ts` → `Topic`, `Section`, `ContentBlock`, `BlockType`, `TopicColorKey`, `TopicColors`, `Question`, `Module`
   - `src/data/plans/types.ts` → `Plan`, `Subject`, `SubjectContent`, `SemanaContent`, `TemarioUnit`, `BiblioRef`, `MaterialRef`, `RecursoLink`
   - `src/data/atlas-topics.ts` (primeras 30 líneas) → `AtlasTopic`, `AtlasQuestion`, `AtlasPaiLink`
   - `src/data/medlex-terms.ts` (primeras 50 líneas) → `MedLexTerm`, `SISTEMA_LABELS`, `SISTEMA_COLORS`
   - `src/data/colors.ts` → forma exacta de una entrada de `TOPIC_COLORS` (11 campos)
   - `src/data/plans/index.ts` → `LIBRARY_BASE`, `findSubject`, `SISTEMAS_CORPORALES`
3. Confirma que el build limpio pasa **antes** de empezar: `npm run build`.

No inventes campos. Si un dato no cabe en el esquema, **pregunta** antes de
extender el tipo.

---

## 1. Objetivo

Cargar en MedCore el contenido realmente impartido en la **Semana 1** de
*Anatomía Humana y Disección I* (clave `AN01001`, `subjectId`
`anatomia-humana-diseccion-1`, plan `uad-medicina`), en cinco capas:

| # | Capa | Archivo |
|---|------|---------|
| 1 | Guías de estudio navegables | `src/data/topics.ts` (+ `types/index.ts`, `colors.ts`, `modules.ts`) |
| 2 | Banco de 50 reactivos | `src/data/anatomia-uad-quizzes.ts` (nuevo) + `src/data/quizzes.ts` |
| 3 | Ficha de la materia | `src/data/plans/uad-medicina.ts` |
| 4 | Terminología osteológica | `src/data/medlex-terms.ts` |
| 5 | Láminas de Atlas | `src/data/atlas-topics.ts` + `public/atlas/*.png` |

Más una tarea de infraestructura: **subir los PDFs de clase a la biblioteca privada**.

**Fuera de alcance de este prompt:** las 9 prácticas de laboratorio
(`Entregas Prácticas/`). Tienen su propio flujo de entregables y su propio
prompt. No las toques aquí.

---

## 2. Fuentes de verdad

Ruta base:
`~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/`

### 2.1 Clases impartidas (autoridad primaria — es lo que va al examen)

Carpeta `Semana 1 Clases 1 a 4/`:

| Clase | Archivo | Tamaño | Cubre |
|-------|---------|--------|-------|
| 1 | `1 GENERALIDADES DE LA ANATOMIA PDF.pdf` | **214 MB** | Temario del módulo (semanas 1–4) · conceptos generales · terminología · planos · términos de relación, lateralidad y movimiento · circunducción |
| 2 | `2 HUESOS DE LA CABEZA.pdf` | 2.4 MB | Cráneo: enunciado de los 8 huesos + detalle de **frontal, etmoides, esfenoides, parietal, occipital** |
| 3 | `3 HUESOS DE LA CARA Y HIOIDES.pdf` | 1.5 MB | **Maxilar superior, malar, nasal, vómer, cornete inferior, palatino, lagrimal** |
| 4 | `4 HUESOS COLUMNA VERTEBRAL.pdf` | 2.5 MB · 22 diapositivas | Columna **completa**: generalidades y curvaturas · vértebra típica · cervicales · dorsales · lumbares · sacro · cóccix |

Extrae el texto con `pdftotext -layout`. El PDF de 214 MB es pesado por medios
embebidos, no por texto: extráelo por rangos si hace falta.

> El profesor titular es el **Dr. Leonardo Andrés Soto Pacheco**; algunas
> diapositivas están firmadas por el **Dr. Juan José B. Sánchez Espinoza**. El
> encabezado del PDF 1 dice "MÉDICO CIRUJANO - UJED": es la adscripción del
> docente, no de la materia. No transcribas "UJED" ni "UDO" a ningún dato del plan.

### 2.2 Tablas de Moore fotografiadas por el alumno

En la misma carpeta, **contenido de alto valor de examen** que debe entrar
íntegro al Topic `huesos-craneo`:

- **`8.1.jpeg`** — *Orificios, forámenes, fisuras y otras aperturas de las fosas
  craneales y contenido.* Transcrita completa en §2.4.
- **`8.2.jpeg`** — *Puntos craneométricos* con definición y etimología.
  Transcrita completa en §2.5.

Transcríbelas **desde el texto de §2.4 y §2.5 de este documento**, ya verificado.
No las re-leas con OCR: introducirías errores donde ya no los hay.

### 2.3 Moore — *Anatomía con orientación clínica* (autoridad de respaldo)

Archivo: `Moore Anatomía.pdf` (143 MB, 710 páginas).

**Offset verificado: página del libro = página del PDF − 24.**
- PDF **25–37** = libro **1–13** → Cap. 1 *Introducción a la Anatomía Clínica*:
  métodos de estudio, terminología, posición anatómica, planos, términos de
  relación/comparación/lateralidad/movimiento, variaciones anatómicas, sistema
  esquelético, osificación (centros primarios y secundarios, epífisis, diáfisis,
  línea epifisaria).
- PDF **509 en adelante** = libro **485+** → Cap. 7 *Cabeza*: Cráneo (libro 486),
  Cara (libro 507), Región bucal (libro 545).
- Para la columna vertebral, localiza el **Cap. 4 *Dorso*** por el índice y
  aplica el mismo offset.

Estos rangos son las "notas" de Misael: **no existe un archivo de notas aparte**.
Sintetiza directamente del PDF y marca en los comentarios de código de qué
páginas (formato `Moore p. 8` = página del libro) proviene cada bloque.

### 2.4 Transcripción verificada de `8.1.jpeg` — forámenes de las fosas craneales

**Fosa craneal anterior**

| Agujero / abertura | Contenido |
|---|---|
| Foramen ciego | Vena emisaria nasal (1 % de la población) |
| Forámenes cribosos de la lámina cribosa | Axones de las células olfatorias del epitelio olfatorio, que forman los nervios olfatorios |
| Forámenes etmoidales anterior y posterior | Vasos y nervios del mismo nombre |

**Fosa craneal media**

| Agujero / abertura | Contenido |
|---|---|
| Conducto óptico | Nervio óptico (NC II) y arteria oftálmica |
| Fisura orbitaria superior | Venas oftálmicas; nervio oftálmico (NC V₁), NC III, IV y VI; fibras simpáticas |
| Foramen redondo | Nervio maxilar (NC V₂) |
| Foramen oval | Nervio mandibular (NC V₃) y arteria meníngea accesoria |
| Foramen espinoso | Arteria y vena meníngeas medias, y ramo meníngeo del NC V₃ |
| Foramen rasgado | Nervio petroso profundo, algunas ramas de la arteria meníngea media y venas pequeñas |
| Surco o hiato del nervio petroso mayor | Nervio petroso mayor y rama petrosa de la arteria meníngea media |

> Nota al pie de la tabla original: la arteria carótida interna y los plexos
> venoso y simpático que la acompañan atraviesan el área del foramen rasgado
> **horizontalmente**, no verticalmente. El foramen rasgado existe como tal en el
> cráneo seco; en el individuo vivo está cerrado por cartílago.

**Fosa craneal posterior**

| Agujero / abertura | Contenido |
|---|---|
| Foramen magno | Médula oblongada y meninges; arterias vertebrales; NC XI; venas de la duramadre; arterias espinales anterior y posteriores |
| Foramen yugular | NC IX, X y XI; bulbo superior de la vena yugular interna; senos petroso inferior y sigmoideo; ramas meníngeas de las arterias faríngea ascendente y occipital |
| Conducto del nervio hipogloso | Nervio hipogloso (NC XII) |
| Conducto condíleo | Vena emisaria del seno sigmoideo a las venas vertebrales del cuello |
| Foramen mastoideo | Vena emisaria mastoidea del seno sigmoideo y rama meníngea de la arteria occipital |

**Equivalencias con la nomenclatura del profesor** — obligatorio incluirlas
como bloque `comparison` o `table` en el Topic:

| Diapositiva (clásica) | Moore (internacional) |
|---|---|
| Agujero Redondo Mayor | Foramen redondo |
| Agujero Oval | Foramen oval |
| Agujero Redondo Menor | **Foramen espinoso** |
| Agujero Occipital | **Foramen magno** |
| Agujero Óptico / Canal Óptico | Conducto óptico |
| Fisura Orbitaria Superior | (mismo término) |
| Agujero Ciego | Foramen ciego |

La tercera y la cuarta fila son las que más confusión producen: el nombre clásico
y el internacional no se parecen.

### 2.5 Transcripción verificada de `8.2.jpeg` — puntos craneométricos

| Punto | Etimología | Forma y localización |
|---|---|---|
| **Pterión** | griego, *ala* | Unión del ala mayor del esfenoides, la porción escamosa del temporal y los huesos frontal y parietal; se encuentra sobre el trayecto de la división anterior de la arteria meníngea media |
| **Lambda** | griego, letra Λ | Punto sobre la calvaria en la unión de las suturas lambdoidea y sagital |
| **Bregma** | griego, *parte anterior de la cabeza* | Punto sobre la calvaria en la unión de las suturas coronal y sagital |
| **Vértice / vértex** | latín, *giro, espiral* | Punto superior del neurocráneo, en la línea media, con el cráneo orientado en el plano orbitomeatal de Frankfort |
| **Asterión** | griego, *estrellado* | En forma de estrella; unión de tres suturas: parietomastoidea, occipitomastoidea y lambdoidea |
| **Glabela** | latín, *liso, pelado* | Prominencia lisa, más pronunciada en los hombres, sobre los huesos frontales, superior a la raíz de la nariz; parte de la frente con proyección más anterior |
| **Inión** | griego, *parte posterior de la cabeza* | Punto más sobresaliente de la protuberancia occipital externa |
| **Nasión** | latín, *nariz* | Punto del cráneo donde se encuentran las suturas frontonasal e internasal |

> **Discrepancia a documentar, no a resolver en silencio:** la diapositiva del
> occipital define asterión como "unión parietotemporal"; Moore lo define como
> confluencia de **tres** suturas (parietomastoidea, occipitomastoidea,
> lambdoidea). Describen el mismo punto, pero la del profesor es más laxa.
> Incluye ambas en un bloque `note` y señala cuál es cuál. El pterión clínico —
> por su relación con la arteria meníngea media y el hematoma epidural — no
> aparece en las diapositivas y **sí** en Moore: márcalo como aporte del libro.

### 2.6 Documentos oficiales del programa

- `PROGRAMA ANATOMÍA I.docx.pdf` — programa académico
- `SEC. DID ANATOMIA I.docx.pdf` — secuencia didáctica
- `MANUAL ANATOMÍA I.pdf` (24 MB) y `MANUAL DE ANATOMÍA HUMANA Y SU DISECCIÓN 1.docx.pdf`
- `Formato UAD para entrega de trabajos (1).pdf`

Úsalos para llenar `semanas[]` con las **semanas 2, 3 y 4** del módulo, verbatim.

---

## 3. Regla de terminología — LEER CON ATENCIÓN

MedCore usa la **Terminología Anatómica Internacional (TA)** como término
principal, y la **terminología clásica del profesor entre paréntesis** cuando
existe. Es una decisión deliberada de Misael: quiere aprender la nomenclatura
vigente, no la antigua.

| TA / Moore (→ término principal) | Clásica (diapositivas → entre paréntesis) |
|---|---|
| Maxilar | Maxilar superior |
| Cigomático | Malar / cigomático–malar |
| Nasal | Hueso propio de la nariz |
| Lagrimal | Unguis |
| Foramen (ciego, oval, magno…) | Agujero |
| Foramen espinoso | Agujero redondo menor |
| Foramen magno | Agujero occipital |
| Proceso | Apófisis |
| Incisura | Escotadura |
| Vértebras torácicas | Vértebras dorsales |
| Diente del axis | Apófisis odontoides |
| Proceso costiforme / costal | Apófisis transversa (lumbar) |

**Regla operativa:**
- El **término principal** en todo `title`, `question`, `options` y `keyTerms`
  es el de la TA (Moore).
- El equivalente clásico del profesor va **entre paréntesis** la primera vez que
  aparece en cada sección, y en el `explanation` cuando sea relevante. Si el
  profesor no usó un término distinto, no hay paréntesis.
- Nunca mezcles las dos formas dentro de una misma opción de respuesta: eso
  convierte un reactivo de conocimiento en uno de adivinanza.
- Añade en cada Topic nuevo un bloque `{ type: 'note' }` que explique la
  coexistencia de ambas nomenclaturas y por qué MedCore lidera con la TA.

> ⚠️ **Costo que debes tener presente, no ocultar: el examen se califica con la
> terminología clásica del profesor.** Por eso el clásico no es opcional cuando
> existe —debe acompañar SIEMPRE al término TA de toda estructura que el profesor
> haya nombrado— y en los reactivos de opción múltiple **el término clásico
> cuenta como respuesta correcta**: si un reactivo pregunta por el foramen magno
> y una opción dice "agujero occipital", esa opción es válida. El `explanation`
> debe reforzar el par completo ("Foramen magno, que el profesor llama agujero
> occipital"). Un alumno no puede perder puntos en el parcial por haber
> estudiado el nombre correcto.

---

## 4. Alcance real

La Semana 1 son **5 clases** (Anatomía se imparte lunes a viernes, teoría
12:00–14:00 y práctica 14:00–15:00).

| Clase | Fecha | Tema | Estado |
|---|---|---|---|
| 1 | lun 3 ago | Generalidades, terminología, planos | ✅ impartida |
| 2 | mar 4 ago | Cráneo — frontal, etmoides, esfenoides, parietal, occipital | ✅ impartida |
| 3 | mié 5 ago | Cara — maxilar superior, malar, nasal, vómer, cornete inferior, palatino, lagrimal | ✅ impartida |
| 4 | jue 6 ago | **Columna vertebral completa** | ✅ impartida |
| 5 | vie 7 ago | Sin material aún | ⏳ pendiente |

> **Verificado extrayendo el texto de los PDFs, no deducido de los títulos:**
> la clase 2 **no cubrió el hueso temporal** (detalla 5 de los 6 huesos distintos
> del cráneo) y la clase 3 **no cubrió mandíbula ni hioides**, pese a llamarse
> "Huesos de la Cara y Hioides" — su listado termina en el lagrimal.
>
> **No generes contenido de temporal, mandíbula ni hioides.** Los tres son piezas
> faltantes de Topics que sí existirán, no Topics nuevos; §9 explica cómo
> añadirlos cuando lleguen.
>
> Tampoco generes artrología ni miología: son las semanas 3 y 4.

Rellenar huecos con material no impartido produce una app que *parece*
actualizada y desalinea el estudio del examen real. Ante la duda, deja el hueco
visible y rotulado.

---

## 5. Entregables

### 5.1 Nuevos `TopicColorKey` — `src/types/index.ts` + `src/data/colors.ts`

Añade dos claves al union `TopicColorKey`:

- `anatomiaGeneral` → paleta Tailwind **`slate`**
- `osteologia` → paleta Tailwind **`stone`**

Agrega sus entradas completas (los 11 campos: `bg`, `bgLight`, `border`, `text`,
`badge`, `button`, `dot`, `ring`, `gradientFrom`, `gradientTo`, `headerBg`) a
`TOPIC_COLORS`, copiando exactamente el patrón de `digestivo`.

> ⚠️ `tailwind.config.js` **sobrescribe `zinc`** con tokens de modo oscuro.
> `slate` y `stone` son paletas crudas y **no** se adaptan automáticamente.
> Verifica los dos temas nuevos en modo claro y oscuro antes de dar por hecho el
> entregable. Si el contraste falla en oscuro, dilo — no lo silencies.

### 5.2 Cuatro Topics nuevos — `src/data/topics.ts`

Crea un array `anatomiaUadTopics: Topic[]` y agrégalo al `topics` existente
(mismo patrón que `bioestadisticaTopics`). Con cuatro Topics el archivo se pasa
de largo: **extráelo a `src/data/anatomia-uad-topics.ts`** e impórtalo.

| `id` | `title` | `subtitle` | `colorKey` | `emoji` |
|---|---|---|---|---|
| `anatomia-generalidades` | Generalidades, Terminología y Planos | Métodos de estudio, posición y planos anatómicos, términos de relación y movimiento | `anatomiaGeneral` | 🧭 |
| `huesos-craneo` | Huesos del Cráneo | Los 8 huesos del neurocráneo: caras, bordes, accidentes, forámenes y puntos craneométricos | `osteologia` | 💀 |
| `huesos-cara-hioides` | Huesos de la Cara | Viscerocráneo: relieves, cavidades y articulaciones | `osteologia` | 🦴 |
| `columna-vertebral` | Columna Vertebral | Curvaturas, vértebra típica y caracteres de cada región: cervical, dorsal, lumbar, sacra y coccígea | `osteologia` | 🦴 |

Requisitos por Topic:

- **6–9 `sections`**, numeradas consecutivamente desde 1, con `id` prefijado
  (`gen-1…`, `cra-1…`, `cah-1…`, `col-1…`).
- Cada sección con **`keyTerms`** (5–12 términos, en TA; el clásico entre
  paréntesis solo si el profesor usó uno distinto, p. ej. "foramen magno (agujero
  occipital)").
- Usa la variedad completa de `BlockType`. En particular:
  - `table` para los inventarios de accidentes óseos por cara/borde
    (encabezados `['Cara / Borde', 'Accidentes']`) — es el formato en que el
    profesor los dictó y en que se preguntan.
  - `comparison` para: pares vs. impares del cráneo; neurocráneo vs.
    viscerocráneo; osificación intramembranosa vs. endocondral; curvaturas
    primarias vs. secundarias; atlas vs. axis; términos opuestos.
  - `definition` para cada término de posición, plano, movimiento y punto
    craneométrico.
  - `note` para la advertencia de nomenclatura (§3), las variaciones anatómicas,
    la discrepancia de asterión (§2.5) y los huesos pendientes (§4).
  - `steps` para desarrollo y crecimiento óseo (Moore pp. 11–13).
- **`keyPoints`**: 6–8 afirmaciones por Topic, cada una verificable contra una
  fuente. Nada de generalidades vacías.

**Contenido obligatorio por Topic:**

`huesos-craneo` — enunciado "8 huesos: 2 pares (parietales, temporales) y 4
impares (frontal, esfenoides, occipital, etmoides)", más el desglose de los
**cinco impartidos**: frontal (3 caras y 3 bordes, glabela, arcos supraciliares,
cresta frontal, agujero ciego, escotadura etmoidal, senos frontales, suturas,
bregma); etmoides (lámina vertical con crista galli, lámina horizontal con lámina
cribosa y agujeros olfatorios, 2 masas laterales con cornetes superior y medio);
esfenoides (cuerpo con silla turca y canal óptico, alas menores, alas mayores con
agujeros redondo mayor / oval / redondo menor y fisura orbitaria superior,
apófisis pterigoides); parietal (2 caras, 4 bordes, 4 ángulos, surco de la
arteria meníngea media); occipital (agujero occipital 35 × 30 mm, inion,
cóndilos, agujeros condíleos, lambda, asterión).
**Más las dos tablas de Moore de §2.4 y §2.5, íntegras**, y un `note` que declare
el temporal pendiente de clase futura.

`huesos-cara-hioides` — maxilar superior (caras interna y externa, 4 bordes,
4 ángulos), malar, hueso propio de la nariz, vómer, cornete inferior, palatino
(porciones horizontal y vertical) y lagrimal. **Mandíbula e hioides en `note`
como pendientes.**

`columna-vertebral` — todo lo de la clase 4:
- **Generalidades:** 24 vértebras presacras (7 cervicales, 12 dorsales,
  5 lumbares) + sacro + cóccix. Representa **2/5 de la altura total**. Ángulo
  lumbosacro **130–160°**.
- **Curvaturas:** primarias (dorsal y sacra) y secundarias (cervical y lumbar).
  Acentuaciones patológicas: cifosis (primarias) y lordosis (secundarias),
  ambas anteroposteriores; **escoliosis**, lateral.
- **Vértebra típica:** cuerpo; arco vertebral (2 pedículos con escotaduras
  superior e inferior, 2 láminas); 7 apófisis (2 transversas, 1 espinosa,
  2 articulares superiores, 2 articulares inferiores); agujero vertebral,
  conducto vertebral, agujero intervertebral (de conjunción).
- **Cervicales (7):** típicas C3–C6 — cuerpo ancho y pequeño, agujero vertebral
  triangular, apófisis espinosas bífidas, agujeros transversos, tubérculos
  anterior y posterior, apófisis unciformes. Atípicas: **C1 atlas** (arco y
  tubérculo anterior, arco y tubérculo posterior, 2 masas laterales),
  **C2 axis** (apófisis odontoides), **C7 de transición** (apófisis espinosa sin
  bifurcar).
- **Dorsales (12):** típicas D2–D8 — cuerpo reniforme, agujero vertebral
  circular, apófisis espinosas oblicuas, carillas costales en los cuerpos.
  Atípicas: **D1** (carilla superior completa, apófisis espinosa recta),
  **D9** (medialuna superior), **D10** (medialuna superior), **D11** (carilla
  completa única, sin carillas costales en las transversas), **D12 de
  transición** (carilla completa única, apófisis espinosa recta, tubérculos
  mamilar, accesorio y costal).
- **Lumbares (5):** típicas L1–L4 — cuerpo reniforme, agujero vertebral
  triangular, apófisis espinosas cuadriláteras, tubérculos mamilares, apófisis
  costales (transversas), tubérculos accesorios. Atípica **L5 de transición**
  (cuerpo grueso por delante, apófisis transversas grandes y prominentes).
- **Sacro:** 5 vértebras fusionadas; 2 caras, base, vértice, 2 bordes laterales.
  Cara anterior cóncava y lisa, 4 líneas transversales, 4 pares de agujeros
  sacros anteriores. Cara posterior convexa y rugosa, cresta sacra media,
  intermedia y lateral, astas del sacro, 4 pares de agujeros sacros posteriores,
  hiato sacro. Bordes: superficie auricular, tuberosidad sacra. Base:
  promontorio, carilla articular lumbosacra, conducto sacro, aletas sacras,
  2 apófisis articulares superiores. **Contenido del conducto sacro:** conducto
  dural, cauda equina, filum terminale.
- **Cóccix:** 4 vértebras fusionadas; 2 caras, 2 bordes laterales, vértice,
  base, astas del cóccix.

Una `table` comparativa **región por región** es obligatoria (cuerpo, agujero
vertebral, apófisis espinosa, apófisis transversas, carillas articulares, número
de piezas): es el formato en que esto se pregunta, casi sin excepción.

### 5.3 Módulo — `src/data/modules.ts`

Añade un módulo nuevo (no toques el módulo `anatomia` existente, que viene del
banco PAI de aparatos y sistemas):

```ts
{
  id: 'anatomia-uad',
  badge: 'UAD · Anatomía Humana y Disección I',
  title: 'Osteología — Cabeza y Columna',
  subtitle: 'Semana 1: generalidades, planos anatómicos, huesos del cráneo y la cara, y columna vertebral.',
  emoji: '💀',
  topicIds: ['anatomia-generalidades', 'huesos-craneo', 'huesos-cara-hioides', 'columna-vertebral'],
}
```

Colócalo **primero** en el array: es la materia en curso.

### 5.4 Banco de 50 reactivos — `src/data/anatomia-uad-quizzes.ts` (nuevo)

Exporta `anatomiaUadQuestions: Question[]` y agrégalo al spread final de
`src/data/quizzes.ts`:
`export const questions: Question[] = [...anatomyQuestions, ...newQuestions, ...anatomiaUadQuestions]`

**Distribución obligatoria (50 exactos):**

| `topicId` | Reactivos | Prefijo de `id` |
|---|---|---|
| `anatomia-generalidades` | 11 | `gen-q1` … `gen-q11` |
| `huesos-craneo` | 14 | `cra-q1` … `cra-q14` |
| `huesos-cara-hioides` | 11 | `cah-q1` … `cah-q11` |
| `columna-vertebral` | 14 | `col-q1` … `col-q14` |
| **Total** | **50** | |

Cráneo y columna llevan más peso porque son los bloques de contenido más
extensos, no por reparto igualitario.

**Dificultad:** ~15 `easy`, ~22 `medium`, ~13 `hard`.
**Tipo:** ~42 `multiple-choice` (4 opciones) + ~8 `true-false`
(`options: ['Verdadero', 'Falso']`).

Calidad de los reactivos — esto separa un banco útil de uno decorativo:

1. **Los distractores deben ser plausibles.** Un distractor tomado de otro hueso,
   de otra cara del mismo hueso o de otra región vertebral enseña. Un distractor
   absurdo solo mide si el alumno sabe leer.
2. **El `explanation` justifica la correcta Y descarta al menos un distractor.**
   Copia el nivel de detalle de `new-quizzes.ts`.
3. **Al menos 13 reactivos deben apuntar a confusiones reales**, no a datos
   sueltos. Las de esta semana, concretamente:
   - Agujero redondo **menor** ≡ foramen **espinoso** (no "foramen redondo menor").
   - Agujero occipital ≡ foramen magno.
   - Escotadura etmoidal: pertenece al **frontal**, aloja al etmoides.
   - Apófisis cigomática: existe en frontal, temporal y maxilar — cuál se pregunta.
   - Lámina cribosa (etmoides) vs. lámina cuadrilátera (esfenoides).
   - Pares (parietales, temporales) vs. impares (frontal, esfenoides, occipital, etmoides).
   - Cornetes superior y medio son del **etmoides**; el inferior es hueso independiente.
   - Curvaturas **primarias** = dorsal y sacra (no cervical y lumbar).
   - Cifosis acentúa las primarias; lordosis, las secundarias.
   - Apófisis espinosa: bífida en cervicales típicas, oblicua en dorsales,
     cuadrilátera en lumbares, recta en D1 y D12, sin bifurcar en C7.
   - Agujero vertebral: triangular en cervicales **y** lumbares, circular en dorsales.
   - Agujeros transversos: exclusivos de las cervicales.
   - Sacro = 5 fusionadas; cóccix = 4 fusionadas.
   - Proximal/distal aplicados incorrectamente al tronco.

   Los errores que un alumno comete **con confianza** son los que cuestan puntos:
   priorízalos sobre los datos que ya sabe que no sabe.
4. **Ningún reactivo respondible por eliminación gramatical** (longitud de la
   opción correcta, concordancia de género, "todas las anteriores").
5. **`correctIndex` repartido** entre 0–3, sin sesgo hacia ninguno.
6. **Orden descendente de valor de estudio dentro de cada bloque**, declarado en
   un comentario de cabecera. Cuando llegue el parche de §9 habrá que
   intercambiar unos pocos reactivos; escribir en este orden convierte ese
   intercambio en una operación mecánica en vez de un rejuicio del lote.

### 5.5 Ficha de la materia — `src/data/plans/uad-medicina.ts`

En `anatomia-humana-diseccion-1 → content`:

1. **`semanas`**: completa los `temas` de la semana 1 con lo realmente impartido
   y **añade las semanas 2, 3 y 4** transcritas verbatim del PDF 1 (semana 2:
   esqueleto del tórax, miembro superior, miembro inferior; semana 3: artrología
   e inicio de miología; semana 4: músculos del abdomen, región inguinal, pelvis
   y miembros).
2. **`materiales`**: un `MaterialRef` por cada PDF de clase y documento oficial:

   ```ts
   { title: 'Clase 1 — Generalidades de la Anatomía',    file: 'Semana 1 - Clase 1 Generalidades.pdf', kind: 'Clase' },
   { title: 'Clase 2 — Huesos de la Cabeza',             file: 'Semana 1 - Clase 2 Huesos de la Cabeza.pdf', kind: 'Clase' },
   { title: 'Clase 3 — Huesos de la Cara',               file: 'Semana 1 - Clase 3 Huesos de la Cara.pdf', kind: 'Clase' },
   { title: 'Clase 4 — Columna Vertebral',               file: 'Semana 1 - Clase 4 Columna Vertebral.pdf', kind: 'Clase' },
   { title: 'Manual de Anatomía I',                      file: 'MANUAL ANATOMIA I.pdf', kind: 'Manual' },
   { title: 'Manual de Anatomía Humana y su Disección 1',file: 'MANUAL DE ANATOMIA HUMANA Y SU DISECCION 1.pdf', kind: 'Manual' },
   { title: 'Programa Académico — Anatomía I',           file: 'PROGRAMA ANATOMIA I.pdf', kind: 'Programa' },
   { title: 'Secuencia Didáctica — Anatomía I',          file: 'SEC DID ANATOMIA I.pdf', kind: 'Programa' },
   { title: 'Formato UAD para entrega de trabajos',      file: 'Formato UAD entrega de trabajos.pdf', kind: 'Formato' },
   ```

   Nombres de archivo **sin acentos ni caracteres especiales** — son URLs
   (`${LIBRARY_BASE}/${subject.id}/${file}`). Renombra los originales al subirlos
   (§5.8) para que coincidan exactamente.
3. No toques `temario`, `bibliografia`, `recursos`, `competencia`, `credits` ni
   `code`: ya están transcritos del programa oficial.

### 5.6 MedLex — `src/data/medlex-terms.ts`

Añade **25–30 morfemas** de osteología craneofacial y vertebral:

- Craneofaciales: `oste(o)-`, `crane(o)-`, `condr(o)-`, `-blasto`, `-clasto`,
  `epi-`, `diá-`, `meta-`, `apo-`, `sutur-`, `fontanel-`, `orbit-`, `nas(o)-`,
  `maxil-`, `cigo-/zigo-`, `mandíbul-`, `pterig-`, `etmo-`, `esfen-`, `-ión`
  (como en pterión, asterión, inión).
- Vertebrales: `vertebr-`, `espondil-`, `raqui-`, `sacr-`, `cocci-`, `lord-`,
  `cif-`, `escoli-`, `disc-`, `-lisis`, `-listesis`.

`sistema: 'musculoesqueletico'` para los óseos; `'general'` para los morfemas de
proceso (`-blasto`, `-clasto`, `epi-`, `diá-`, `-lisis`).

> **Integridad de atribución.** El corpus MedLex existente es de la ENP UNAM
> (Paula Abramo Tostado, CC BY-SA 4.0). Los términos que añadas **no** provienen
> de esa fuente. Colócalos en un array separado, comentado como autoría MedCore,
> y concaténalo al export. No los mezcles dentro de los bloques existentes: la
> atribución dejaría de ser verificable.

### 5.7 Atlas — `src/data/atlas-topics.ts` + `public/atlas/`

**Las imágenes se producen según un documento aparte:
[`2026-08-05-laminas-atlas-imagen.md`](./2026-08-05-laminas-atlas-imagen.md).
Léelo antes de tocar esta capa.** En resumen: una IA de imágenes genera la
ilustración anatómica **sin una sola palabra de texto**, con los huesos
diferenciados por color plano; **tú compones** la lámina final con Pillow
(1024 × 1536 px) añadiendo título, clave de color y leyenda como texto real.

Motivo, verificable en el repo: `public/atlas/sistema-locomotor.png` —ya
desplegada— contiene texto alucinado ("ell sistema esquelético", "Boeso
compacto", "Calemanetas, binocatoras") y un conteo óseo que suma 193 rotulado
como 206. En osteología la etiqueta *es* el contenido, así que ninguna palabra de
una lámina puede venir de un modelo de imagen.

1. Compón e instala:
   - `public/atlas/huesos-craneo.png`
   - `public/atlas/huesos-cara-hioides.png`
   - `public/atlas/columna-vertebral.png`
   - `public/atlas/sistema-locomotor.png` (**reemplaza** la defectuosa)
2. Añade tres `AtlasTopic` con `category: 'anatomia'`, `colorKey: 'osteologia'`,
   **6–8 `AtlasQuestion`** cada uno (independientes del banco de 50; ids
   `hcr-1…`, `hch-1…`, `cvt-1…`), y `relatedTopicIds` apuntando a los Topics de
   §5.2. El `AtlasTopic` de locomotor ya existe: solo se sustituye la imagen.
3. No uses `relatedPai` — los módulos PAI están congelados.
4. Si una lámina no supera el control de calidad del §8 de ese documento,
   **respaldo obligatorio**: extrae la figura del PDF de clase con
   `pdftoppm -r 200 -png`. Exactitud por encima de estética.

### 5.8 Biblioteca privada

Los PDFs **no se commitean al repo** (Cloudflare Pages tiene cap de 25 MB y la
biblioteca es privada por diseño). Súbelos a `library.medcore.icu` bajo
`anatomia-humana-diseccion-1/`, con los nombres exactos de §5.5.

El PDF 1 pesa **214 MB** por medios embebidos. Comprímelo antes de subir:

```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.5 \
   -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile="Semana 1 - Clase 1 Generalidades.pdf" \
   "1 GENERALIDADES DE LA ANATOMIA PDF.pdf"
```

Verifica que el resultado siga siendo legible (no menos de ~150 dpi en las
láminas) antes de descartar el original. **Muéstrame el destino y el comando de
subida antes de ejecutarlo**; no asumas la ruta del túnel.

---

## 6. Verificación (obligatoria, antes de reportar)

Ejecuta y **pega la salida** de:

```bash
npm run build                                  # tsc + vite, sin errores ni warnings nuevos
grep -o "id: '[a-z0-9-]*'" src/data/anatomia-uad-topics.ts | sort | uniq -d
grep -o "id: '[a-z0-9-]*q[0-9]*'" src/data/*.ts | sort | uniq -d
grep -c "topicId: 'anatomia-generalidades'" src/data/anatomia-uad-quizzes.ts   # → 11
grep -c "topicId: 'huesos-craneo'"          src/data/anatomia-uad-quizzes.ts   # → 14
grep -c "topicId: 'huesos-cara-hioides'"    src/data/anatomia-uad-quizzes.ts   # → 11
grep -c "topicId: 'columna-vertebral'"      src/data/anatomia-uad-quizzes.ts   # → 14
```

Con `npm run dev`, comprueba a mano:

- [ ] `/quiz` lista el módulo **UAD · Anatomía** con 4 temas y **50** reactivos
- [ ] `/topic/columna-vertebral` renderiza la tabla comparativa región por región
- [ ] `/topic/huesos-craneo` renderiza las dos tablas de Moore completas
- [ ] `/plan/anatomia-humana-diseccion-1` muestra 4 semanas y los 9 materiales
- [ ] `/atlas` muestra las 3 láminas nuevas + la de locomotor sustituida
- [ ] `/terminologia?sistema=musculoesqueletico` incluye los morfemas nuevos
- [ ] Modo claro **y oscuro** legibles en los dos `colorKey` nuevos
- [ ] Los enlaces de biblioteca resuelven (o dan 403 de Cloudflare Access, **no**
      404 — un 404 significa nombre de archivo mal escrito)

**Auto-revisión de contenido antes de entregar:** toma 5 reactivos al azar y
verifícalos contra la diapositiva o la página de Moore correspondiente. Si alguno
no se sostiene, revisa el lote completo de ese Topic. Reporta lo que encontraste,
incluso si el resultado fue "los 5 correctos".

---

## 7. No-objetivos (no lo hagas)

- No toques `unisa-lmgc.ts`, `lmgc-modules.ts`, `pai*.ts` ni `pai-content/`.
- No renombres ningún `id` existente — son claves de enlace profundo y de
  progreso persistido en `useProgress`.
- No introduzcas cadenas de UI en inglés.
- No commitees PDFs, ni `.DS_Store`, ni los PNG base de la IA de imágenes.
- No ejecutes `npm run deploy`. El despliegue a `medcore.icu` lo autorizo yo.
- No generes contenido de temporal, mandíbula ni hioides (§4 y §9).
- No generes artrología ni miología: semanas 3 y 4.
- No toques `Entregas Prácticas/` — tiene su propio prompt.
- No añadas dependencias nuevas a `package.json`.

---

## 8. Entrega

Commits atómicos, en el estilo del historial del repo:

1. `feat(anatomia): topics de Semana 1 — generalidades, cráneo, cara y columna`
2. `feat(quizzes): banco UAD Anatomía I — 50 reactivos Semana 1`
3. `feat(plan): semanas 1-4 y materiales de clase de Anatomía I`
4. `feat(medlex): morfemas de osteología craneofacial y vertebral`
5. `feat(atlas): láminas de cráneo, cara y columna + sustitución de locomotor`

Al terminar, reporta en un bloque corto: qué quedó fuera, qué contradicciones
encontraste entre las diapositivas y Moore, y qué decisiones tomaste que
convendría que yo revisara. Las contradicciones son el entregable más valioso del
lote — no las resuelvas en silencio.

---
---

# 9. PARCHE — temporal, mandíbula e hioides

> **No ejecutes esta sección hasta que exista el material.** Al cierre de la
> Semana 1 estos tres huesos no se habían impartido pese a estar en el temario.

## 9.1 Cuándo

Cuando aparezca un PDF de clase que los cubra —clase 5 del viernes 7, o ya
dentro de la Semana 2— o cuando Misael confirme que se vieron en sesión práctica.
**No los cargues por deducción del temario oficial**: el temario los lista y las
clases 2 y 3 no los dieron. Esa es precisamente la discrepancia que este bloque
existe para no repetir.

## 9.2 Qué son y qué no son

Piezas faltantes de Topics que **ya existen**. No crees Topics nuevos ni un
módulo nuevo:

| Hueso | Destino |
|---|---|
| **Temporal** | secciones nuevas en `huesos-craneo` |
| **Mandíbula** | secciones nuevas en `huesos-cara-hioides` |
| **Hioides** | sección nueva en `huesos-cara-hioides` |

Numera las secciones nuevas **al final** de cada Topic. **No renumeres las
existentes:** los `sectionId` están persistidos en `useProgress` y renumerarlos
borra el avance de lectura ya registrado. (Los `id` de reactivo **no** están
persistidos: solo se guarda `topicId`, `sectionsRead` y `quizAttempts`. Moverlos
o eliminarlos es seguro.)

## 9.3 Banco: intercambio, no crecimiento

El banco sigue midiendo **50**. Añade 3 reactivos de temporal a `huesos-craneo`
y 3 de mandíbula/hioides a `huesos-cara-hioides`, y retira los 3 de mayor número
de cada uno de esos dos bloques (`cra-q12…q14`, `cah-q9…q11`).

Recorta **por regla, no por opinión**: el orden descendente de valor se
estableció en §5.4 con el contenido fresco, y volver a juzgarlo meses después
solo introduce ruido. Los retirados van a un array `reserva: Question[]` en el
mismo archivo, comentado como banco de repaso, **sin exportar** a `questions`.
Conserva sus `id` intactos.

Cuota tras el parche: 11 / 14 / 11 / 14 = 50. No cambia.

## 9.4 Resto de capas

- **Plan:** añadir el PDF de clase a `materiales` y subirlo a la biblioteca (§5.8).
- **Atlas:** regenerar `huesos-craneo.png` y `huesos-cara-hioides.png` con el
  temporal y la mandíbula ya **en color propio** en vez de gris, y actualizar la
  clave de color quitando la marca "pendiente".
- **MedLex:** añadir `tempor-`, `mastoid-`, `petros-`, `gnat-`, `hioid-`.

## 9.5 Corrección menor (opcional, si hay margen)

`src/pages/Quiz.tsx:24` implementa `shuffle` como
`[...arr].sort(() => Math.random() - 0.5)`. Eso **no** produce una permutación
uniforme: algunos reactivos aparecen sistemáticamente antes que otros. En un
banco de 50 con sesiones cortas, ese sesgo se nota. Sustitúyelo por Fisher–Yates:

```ts
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
```

Commit aparte: `fix(quiz): baraja uniforme Fisher–Yates`.
