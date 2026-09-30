# PROMPT — MedCore · Inglés Médico I · Biblioteca y unidades II–VI

> Destinatario: **Claude Code**, repo `~/med-core-app`. Emitido 2026-08-07.
> **Complemento de** [`2026-08-07-ingles-medico-semana-1.md`](./2026-08-07-ingles-medico-semana-1.md).
> Ese prompt carga lo **impartido**; este carga la **biblioteca** y el
> **adelanto** de las unidades II a VI desde los libros de la materia.
> Córrelo **después**, no antes: reutiliza la capa MedEN y el módulo que aquel crea.

---

## 1. Objetivo y la advertencia que lo acompaña

Dos cosas:

1. **Normalizar y subir la biblioteca** de Inglés Médico I (13 PDFs) a
   `library.medcore.icu/ingles-medico-1/`.
2. **Cubrir las seis unidades del programa** con contenido de estudio extraído
   de los libros, sin esperar a que se impartan.

> **La regla vigente en los demás prompts —no generar contenido de clases no
> impartidas— se suspende aquí a petición expresa de Misael.** A cambio, es
> obligatorio que el adelanto quede **marcado como tal en la interfaz**. El
> riesgo no es que el material sea incorrecto —viene de los libros de la
> materia—, sino que el profesor recorte, reordene o enfatice distinto, y que
> el viernes anterior a un parcial no se distinga qué entra y qué no.
>
> Un adelanto etiquetado es una ventaja. Un adelanto indistinguible de lo
> impartido es ruido justo cuando más caro sale.

---

## 2. Inventario de la biblioteca

Ruta: `~/Desktop/UAD/Primer Semestre/Inglés Médico I DEF/`

| Archivo real | Págs | Destino |
|---|---|---|
| `Medical Terminology A living Language 6th Edition_booksmedicos (2).pdf` | 669 | `Medical Terminology - A Living Language 6th ed.pdf` |
| `Check_Your_English_Vocabulary_for_Medicine.pdf` | 65 | `Check Your English Vocabulary for Medicine.pdf` |
| `Check_Your_English_Vocabulary_for_Medicine(1).pdf` | 65 | **DUPLICADO — no subir** |
| `Useful Vocabulary for Medical Students and Practitioners.pdf` | 21 | mismo nombre |
| `Studocu 2017 Medical Abbreviations (Westgard Rules [Khyber Medical University).pdf` | 6 | `Medical Abbreviations (Studocu).pdf` |
| `The Language of Medicine.pdf` | 4 | mismo nombre |
| `English as an international language of medicine.pdf` | 2 | mismo nombre |
| `Importance of English language for medical students.pdf` | 4 | `Importance of English for medical students.pdf` |
| `Importancia del Ingles en las ciencias de la Salud.pdf` | 3 | `Importancia del Ingles en las Ciencias de la Salud.pdf` |
| `The role of medical English in Helacare Education.pdf` | 13 | `The role of medical English in healthcare education.pdf` |
| `Medical_record_keeping_for_quality_patient_care_An.pdf` | 8 | `Medical record keeping for quality patient care.pdf` |
| `Inglés médico I programa 2024-2.pdf` | 13 | `Ingles Medico I - Programa.pdf` |
| `Inglés médico I planeación 2024-2 .pdf` | 22 | `Ingles Medico I - Planeacion.pdf` |
| `Ana Paulina Nájera Soto (Resumen Curricular).pdf` | 1 | **no subir** — documento administrativo |
| `CORREO ELECTRÓNICO.docx.pdf` | 1 | **no subir** — solo contiene `draanapnajera@outlook.com` |

**Tres cosas a corregir:**

1. **El workbook está duplicado**: `Check_Your_English_Vocabulary_for_Medicine.pdf`
   y `(1).pdf` comparten md5 `b8b7bea8e1a165ba91cb1e87605430be`. Sube una sola.
2. **`materiales` en `uad-medicina.ts` ya usa nombres normalizados que no existen
   en disco.** El caso más claro: el plan dice
   `The role of medical English in healthcare education.pdf`, el archivo dice
   `Helacare` (errata del original). Si subes sin renombrar, ese enlace da 404.
   **Renombra al subir** para que coincida con lo que ya declara el plan, y
   verifica los 12 nombres uno por uno, no solo ese.
3. **`Medical Terminology` pesa 33 MB.** Está por debajo del cap de 25 MB de
   Cloudflare Pages solo porque no va al repo — va a la biblioteca por túnel,
   donde no aplica. **No lo commitees** y no lo comprimas: es el libro de texto,
   la pérdida de calidad en las tablas no compensa.

El correo de contacto de la profesora —**Dra. Ana Paulina Nájera Soto,
`draanapnajera@outlook.com`**— va a `content.recursos` como enlace `mailto:`,
no como archivo de biblioteca.

---

## 3. Offsets verificados de los libros

Ambos comprobados con cuatro puntos de control cada uno. **Úsalos; no los
recalcules.**

**`Medical Terminology — A Living Language` (669 págs PDF):**
> **página del libro = página del PDF − 28**

| Sección | Libro | PDF |
|---|---|---|
| Cap. 1 — Introduction to Medical Terminology | 1–20 | 29–48 |
| Cap. 14 — Special Topics | 499–546 | 527–574 |
| Apéndice I — Word Parts Arranged Alphabetically and Defined | 547 | 575 |
| Apéndice II — Word Parts Arranged Alphabetically by Definition | 554 | 582 |
| Apéndice III — Abbreviations | 560 | 588 |

**`Check Your English Vocabulary for Medicine` (65 págs PDF):**
> **página del workbook = página del PDF − 7**

| Unidad del workbook | Workbook | PDF |
|---|---|---|
| 2 · Word formation: nouns | 2 | 9 |
| 3 · Two-word expressions | 3 | 10 |
| 4 · **Plural formation** | 4 | 11 |
| 5 · Word formation: adjectives | 5 | 12 |
| 6 · Word association 2: partnerships | 6 | 13 |
| 7 · Opposites 1: prefixes | 7 | 14 |
| 17 · **Phrasal verbs** | 17 | 24 |
| 26 · Multiple meanings | 26 | 33 |
| 30 · **Abbreviations** | 30 | 37 |

> **Hallazgo que conviene tener presente al construir todo lo demás:** la
> Clase 3 salió literalmente de este workbook. Su unidad 2 (*Word formation:
> nouns*) abre con `1. diagnose → diagnosis … 9. infect`, que es exactamente la
> lista que el profesor dictó. Las unidades 5 y 17 corresponden a los otros dos
> ejercicios de esa clase.
>
> Consecuencia práctica: **las unidades del workbook que aún no se han visto son
> el mejor predictor disponible de lo que vendrá.** La unidad 4 es literalmente
> el tema de la Unidad II del programa (formación de plurales) y la 30 el de la
> Unidad IV (abreviaturas). Prioriza este libro sobre cualquier otro al construir
> el adelanto.

---

## 4. Mapa fuente → unidad del programa

| Unidad del programa | Fuente principal | Fuentes de apoyo |
|---|---|---|
| **I.** Introducción al idioma inglés en medicina | Los 6 artículos cortos, completos | — |
| **II.** Terminología griega y latina · plurales | *Medical Terminology* cap. 1 (libro 1–20) + apéndices I y II | Workbook 1–9 |
| **III.** Gramática práctica | Workbook 10–24 | Pugh (phrasal verbs de síntomas) |
| **IV.** Acrónimos y abreviaturas | *Medical Terminology* apéndice III (libro 560) | Workbook 30 · Studocu · secciones *Abbreviations* de cada capítulo |
| **V.** Errores frecuentes · falsos cognados | Workbook 26, 27, 29 | Cuadros *Word Watch* del libro (palabras que confunden por sonido o escritura similar) |
| **VI.** Bibliografía científica | *The Language of Medicine* · *English as an international language of medicine* | *Medical record keeping for quality patient care* |

---

## 5. Entregables

### 5.1 Esquema — fuentes por semana

En `src/data/plans/types.ts`:

```ts
export type FuenteRef = {
  title: string      // 'Medical Terminology — A Living Language'
  file?: string      // archivo en la biblioteca (LIBRARY_BASE/<subjectId>/<file>)
  paginas?: string   // 'libro 1–20 (PDF 29–48)' — SIEMPRE ambas numeraciones
  nota?: string      // 'Capítulo 1: raíces, formas combinantes, prefijos y sufijos'
}

export type SemanaContent = {
  // …campos existentes…
  estado?: 'impartido' | 'adelanto'   // por defecto 'impartido'
  fuentes?: FuenteRef[]               // lecturas de esa semana, con página exacta
}
```

`paginas` debe llevar **siempre las dos numeraciones**. Un alumno que abre el
PDF busca la página del PDF; uno que cita en un trabajo necesita la del libro.
Dar solo una obliga a recalcular el offset cada vez.

Renderiza `fuentes` en `SubjectDetail`, dentro del bloque de cada semana que ya
existe, con enlace directo a la biblioteca. Una semana con `estado: 'adelanto'`
lleva una etiqueta visible **"Adelanto"** junto a su título.

### 5.2 Siete Topics de adelanto — `src/data/ingles-uad-topics.ts`

Se añaden a los tres de Semana 1. Reutiliza `colorKey` existentes; **no añadas
claves nuevas**.

| `id` | `title` | Unidad | `colorKey` | Prefijo de sección |
|---|---|---|---|---|
| `ingles-word-parts` | Word Parts: Roots, Prefixes & Suffixes | II | `gramatica` | `iwp-` |
| `ingles-plurals` | Singular & Plural Endings | II | `gramatica` | `ipl-` |
| `ingles-verb-tenses` | Verb Tenses, Modals & Voice | III | `lectoescritura` | `ivt-` |
| `ingles-sentence-structure` | Articles, Word Order & Subordination | III | `redaccion` | `iss-` |
| `ingles-abbreviations` | Acronyms & Abbreviations | IV | `comunicacion` | `iab-` |
| `ingles-false-friends` | Common Errors & False Friends | V | `lenguaje` | `iff-` |
| `ingles-scientific-literature` | Reading Scientific Literature | VI | `lectoescritura` | `isl-` |

**Requisito no negociable:** la **sección 1 de cada uno** es un bloque
`{ type: 'note' }` titulado **"Adelanto — aún no impartido"**, con este texto:

> Este tema procede del libro de texto de la materia, no de una clase impartida.
> Corresponde a la Unidad *N* del programa, prevista para la Semana *M*. El
> profesor puede recortarlo, reordenarlo o enfatizar otros puntos. Úsalo para
> ir por delante, no como guía de lo que entra en el parcial de esta semana.

Contenido mínimo por Topic, todo trazable a una página concreta (cita la fuente
en un comentario de código con **ambas numeraciones**):

- **`ingles-word-parts`** — las cuatro partes de un término médico (word root,
  combining form, suffix, prefix); reglas de construcción y de interpretación;
  la vocal de enlace `o`; tablas de prefijos, formas combinantes y sufijos más
  frecuentes tomadas del apéndice I. Enlaza cruzadamente a MedLex: es el mismo
  fenómeno grecolatino visto desde el inglés.
- **`ingles-plurals`** — la tabla de terminaciones singular→plural del cap. 1
  (`-a → -ae`, `-ax → -aces`, `-en → -ina`, `-ex/-ix → -ices`, `-is → -es`,
  `-ma → -mata`, `-nx → -nges`, `-on → -a`, `-um → -a`, `-us → -i`), con ejemplo
  médico real por regla, **y las excepciones que siguen la regla inglesa**
  (virus → viruses). Esta es la Unidad II literal: la más predecible del semestre.
- **`ingles-verb-tenses`** — tiempos verbales en contexto clínico, verbos
  modales, condicionales, voz pasiva (central en redacción científica), estilo
  indirecto, preguntas, infinitivo vs. sufijo `-ing`. Base: workbook 15, 16, 18.
- **`ingles-sentence-structure`** — artículos, orden de palabras, proposiciones
  subordinadas, adjetivos y preposiciones. Base: workbook 20 y §4.2 del prompt
  de Semana 1.
- **`ingles-abbreviations`** — abreviaturas por área (expediente, farmacología,
  laboratorio, imagen, órdenes médicas), del apéndice III y del Studocu. Incluye
  **obligatoriamente** la advertencia del cap. 1 sobre el peligro de las
  abreviaturas ambiguas y la lista *do-not-use*: es un tema de seguridad del
  paciente, no de vocabulario.
- **`ingles-false-friends`** — falsos cognados español↔inglés en medicina.
  Arranca con estos, verificados, y amplía desde el workbook 26 y los cuadros
  *Word Watch*:

  | Inglés | Significa | NO significa |
  |---|---|---|
  | intoxicated | ebrio, bajo efectos de sustancias | intoxicado (*poisoned*) |
  | constipated | estreñido | constipado / resfriado (*to have a cold*) |
  | embarrassed | avergonzado | embarazada (*pregnant*) |
  | actually | en realidad | actualmente (*currently*) |
  | eventually | finalmente, con el tiempo | eventualmente (*occasionally*) |
  | to assist | ayudar | asistir a un lugar (*to attend*) |
  | to realize | darse cuenta | realizar (*to carry out*) |
  | to discuss | tratar, exponer | discutir / reñir (*to argue*) |
  | condition | estado clínico, afección | condición / requisito (*requirement*) |
  | severe | grave | severo de carácter (*strict*) |
  | labor | trabajo de parto | labor / tarea (*task*) |
  | disgrace | deshonra | desgracia (*misfortune*) |

  *Intoxicated* y *constipated* son los dos que más caro salen: en una historia
  clínica invierten el sentido de lo que se documenta.
- **`ingles-scientific-literature`** — estructura IMRaD, cómo leer un abstract,
  el papel del inglés como lingua franca de la medicina (datos de
  *The Language of Medicine*: la proporción de referencias en alemán cayó de
  80–90 % en 1920 a 10–20 % en 1995), y buenas prácticas de registro clínico
  de *Medical record keeping*.

### 5.3 Módulo separado — `src/data/modules.ts`

**No metas los Topics de adelanto en `ingles-medico-uad`.** Módulo aparte:

```ts
{
  id: 'ingles-medico-adelanto',
  badge: 'UAD · Inglés Médico I — Adelanto',
  title: 'Inglés Médico · Unidades II a VI',
  subtitle: 'Contenido tomado del libro de texto, aún no impartido en clase. Unidades II a VI del programa.',
  emoji: '📚',
  topicIds: ['ingles-word-parts', 'ingles-plurals', 'ingles-verb-tenses',
             'ingles-sentence-structure', 'ingles-abbreviations',
             'ingles-false-friends', 'ingles-scientific-literature'],
}
```

Colócalo **al final** del array, después de `bioestadistica`. Lo impartido va
primero: el orden del índice es una señal de prioridad.

### 5.4 Banco de adelanto — `src/data/ingles-adelanto-quizzes.ts` (nuevo)

**Separado del banco de Semana 1.** Export `inglesAdelantoQuestions`, agregado
al spread de `quizzes.ts` como array propio.

| `topicId` | Reactivos | Prefijo |
|---|---|---|
| `ingles-word-parts` | 14 | `iwp-q1` … |
| `ingles-plurals` | 10 | `ipl-q1` … |
| `ingles-verb-tenses` | 14 | `ivt-q1` … |
| `ingles-sentence-structure` | 12 | `iss-q1` … |
| `ingles-abbreviations` | 12 | `iab-q1` … |
| `ingles-false-friends` | 10 | `iff-q1` … |
| `ingles-scientific-literature` | 8 | `isl-q1` … |
| **Total** | **80** | |

Mismas reglas de calidad que §5.3 del prompt de Semana 1: enunciados y opciones
en inglés, `explanation` en español, distractores plausibles, nada respondible
por cognado. En `ingles-false-friends` la regla del cognado se invierte y se
vuelve el contenido: el distractor **debe** ser la trampa del cognado.

### 5.5 MedEN ampliado — `src/data/meden-terms.ts`

Sobre las 80–100 entradas de Semana 1, añade **~200 más**:

- Word parts del apéndice I con `pos: 'abbreviation'`… **no**: añade
  `'word-part'` al union `pos` de `MedEnTerm`. Un prefijo no es una categoría
  gramatical y forzarlo a serlo corrompe los filtros de la página.
- Abreviaturas del apéndice III y del Studocu, con `categoria: 'abreviaturas'`.
- Falsos cognados con `categoria: 'falsos-cognados'` y el significado erróneo en
  el campo `nota`.
- Los 15 phrasal verbs de síntomas de Pugh, con `categoria: 'sintomas'`,
  distintos de los 15 de la clase.

**Todas las entradas de adelanto llevan `semana` de la unidad correspondiente
(2, 3 o 4) y `nota` que empiece por `Adelanto —`.** La página `/vocabulario`
debe permitir filtrar por semana para poder ver solo lo impartido.

---

## 6. Verificación

```bash
npm run build
md5sum ~/Desktop/UAD/Primer\ Semestre/Inglés\ Médico\ I\ DEF/Check_Your*.pdf   # confirma el duplicado antes de descartar
grep -c "topicId: 'ingles-" src/data/ingles-adelanto-quizzes.ts                # → 80
grep -c "Adelanto — aún no impartido" src/data/ingles-uad-topics.ts            # → 7
grep -o "id: '[a-z0-9-]*'" src/data/meden-terms.ts | sort | uniq -d            # → vacío
```

**Verificación de la biblioteca (la que más falla en silencio):** para cada
`MaterialRef` de `ingles-medico-1`, comprueba que existe un archivo con **ese
nombre exacto** en el destino de subida. Pega la lista de las 12 comprobaciones.
Un 403 de Cloudflare Access es correcto; un 404 significa nombre mal escrito.

Manual (`npm run dev`):

- [ ] `/estudio` muestra dos módulos de Inglés, y el de adelanto **al final**
- [ ] Cada Topic de adelanto abre con la nota de "Adelanto"
- [ ] `/plan/ingles-medico-1` muestra las 4 semanas con sus `fuentes` y páginas
      en ambas numeraciones, y la etiqueta "Adelanto" donde corresponde
- [ ] `/vocabulario` filtra por semana y por categoría; `falsos-cognados` y
      `abreviaturas` funcionan como categorías propias
- [ ] `/quiz` distingue los 40 reactivos de Semana 1 de los 80 de adelanto
- [ ] Los 12 enlaces de biblioteca resuelven (403, no 404)

**Auto-revisión:** toma 3 reactivos de `ingles-plurals` y 3 de
`ingles-false-friends` y verifícalos contra la página citada del libro. Reporta
el resultado aunque los 6 estén bien.

---

## 7. No-objetivos

- **No mezcles el adelanto con lo impartido**: ni en el mismo módulo, ni en el
  mismo archivo de quizzes, ni sin la nota de la sección 1.
- No subas el duplicado del workbook, el CV de la profesora ni el PDF del correo.
- No comprimas `Medical Terminology`: es el libro de texto.
- No commitees ningún PDF.
- No recalcules los offsets de §3: están verificados.
- No inventes falsos cognados. Los de §5.2 están comprobados; para ampliar, sal
  del workbook 26 o de los cuadros *Word Watch*, y **cita la página**.
- No toques los Topics ni el banco de Semana 1.
- No añadas dependencias. No ejecutes `npm run deploy`.

---

## 8. Entrega

1. `feat(plan): campo fuentes por semana con paginación de libro y PDF`
2. `feat(ingles): 7 topics de adelanto — unidades II a VI del programa`
3. `feat(quizzes): banco de adelanto de Inglés Médico — 80 reactivos`
4. `feat(meden): word parts, abreviaturas y falsos cognados`
5. `fix(plan): nombres de biblioteca de Inglés Médico alineados con los archivos`

En el reporte: qué nombres de archivo hubo que renombrar y cuáles ya coincidían;
qué páginas del libro citaste por unidad; y si alguna unidad del programa quedó
sin fuente localizable —eso sería una laguna real del material, y quiero saberla.
