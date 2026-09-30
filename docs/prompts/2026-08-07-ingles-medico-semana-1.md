# PROMPT — MedCore · Inglés Médico I · Semana 1

> Destinatario: **Claude Code**, repo `~/med-core-app`.
> Emitido 2026-08-07.
> **Idioma:** la interfaz, los comentarios de código y las explicaciones van en
> **español**. El contenido de aprendizaje —términos, oraciones de ejemplo,
> enunciados de reactivos— va en **inglés**, verbatim. Es una clase de inglés:
> traducir el material lo destruye. La regla del repo ("todas las cadenas en
> español") aplica al *chrome* de la app, no al objeto de estudio.

**Dependencia:** este prompt asume que ya corrió
[`2026-08-07-navegacion-plan-tema-quiz.md`](./2026-08-07-navegacion-plan-tema-quiz.md).
Solo ha llegado su commit 1 (`90c1ca5`, `topicIds` explícitos). **Termina ese
antes de empezar este**, o los Topics nuevos volverán a quedar inalcanzables.

---

## 0. Antes de escribir una sola línea

Lee completos: `src/types/index.ts`, `src/data/plans/types.ts`,
`src/data/colors.ts`, `src/data/modules.ts`, `src/data/medlex-terms.ts`,
`src/pages/Terminologia.tsx` (es el modelo de la página nueva de §5.4),
`src/data/anatomia-uad-topics.ts` (es el modelo de calidad y densidad a igualar).

`npm run build` debe pasar limpio antes de empezar.

---

## 1. Objetivo

Cargar la **Semana 1 de Inglés Médico I** (clave `IN01005`, `subjectId`
`ingles-medico-1`, plan `uad-medicina`) en cuatro capas:

| # | Capa | Archivo |
|---|---|---|
| 1 | 3 Topics de estudio | `src/data/ingles-uad-topics.ts` (nuevo) + `topics.ts` + `modules.ts` |
| 2 | Banco de 40 reactivos | `src/data/ingles-uad-quizzes.ts` (nuevo) + `quizzes.ts` |
| 3 | **MedEN** — vocabulario inglés↔español | `src/data/meden-terms.ts` + `src/pages/MedEn.tsx` (nuevos) |
| 4 | Ficha de la materia | `src/data/plans/uad-medicina.ts` |

Más el armado de los PDFs de clase y su subida a la biblioteca privada (§5.6).

**No** se crean láminas de Atlas para esta materia: no hay contenido visual
anatómico que justifique una.

---

## 2. Fuentes

Ruta base: `~/Desktop/UAD/Primer Semestre/Inglés Médico I DEF/`

### 2.1 Clases impartidas

Inglés Médico se imparte **lunes a miércoles, 10:00–12:00** (asesoría martes y
miércoles 17:00). Tres sesiones por semana, no cinco.

| Clase | Fecha | Carpeta | Contenido |
|---|---|---|---|
| 1 | lun 3 ago | — | Encuadre, objetivos, lluvia de ideas. **Sin capturas**, coherente con la planeación oficial. No generes contenido. |
| 2 | mar 4 ago | `Semana 1/Clase 2/` (11 PNG) | **The Medical Record** |
| 3 | mié 5 ago | `Semana 1/Clase 3/` (23 PNG) | **Parts of Speech · Word forms · Phrasal verbs** |

Las capturas son PNG de 2142 × 1202 px, legibles. **El contenido verificado está
transcrito en §3 y §4 de este documento.** Úsalo como fuente; abre las capturas
solo si necesitas desambiguar algo, y entonces dilo en el reporte.

### 2.2 Documentos oficiales

- `Inglés médico I programa 2024-2.pdf` — programa académico
- `Inglés médico I planeación 2024-2 .pdf` — planeación por unidad temática

**Estructura semanal oficial** (para llenar `semanas[]`):

| Semana | Unidad temática |
|---|---|
| 1 | I. Introducción al idioma inglés en medicina |
| 2 | II. Terminología griega y latina útil en el lenguaje médico (introducción; reglas de formación de plurales) |
| 3 | III. Gramática práctica utilizada en medicina (tiempos verbales, modales, condicionales, voz pasiva, estilo indirecto, preguntas, infinitivo/–ing, artículos, orden de palabras, proposiciones subordinadas, adjetivos, preposiciones) |
| 4 | IV. Acrónimos y abreviaturas · V. Errores frecuentes al hablar inglés en medicina · VI. Bibliografía científica |

**Evaluación** — distinta a la de Anatomía, no la copies:
**40 %** examen parcial semanal · **30 %** proyecto integrador · **20 %** caso
clínico · **10 %** foros. El semestre son 4 módulos de 4 semanas.

### 2.3 Entregas ya realizadas — solo archivar

- `Proyecto Integrador/Semana 1/` — ensayo *"Why is English important within the
  academic training of a Professional Medical Physician?"* (PDF y PPTX entregados).
- **Caso Clínico 1 — *Shortness of Breath*** (mujer de 35 años, disnea de 6 meses,
  tos seca, antecedente de asma infantil, industria de la imprenta, crepitantes
  inspiratorios tardíos bibasales). **Ya entregado.**

Ambos se registran como `materiales` en la ficha de la materia (§5.5). **No
generes Topics ni reactivos a partir de ellos.**

---

## 3. ERRATA — siete errores verificados en las diapositivas

Este bloque es el corazón del prompt. **Léelo antes de transcribir nada.**

En Anatomía la discrepancia era entre dos nomenclaturas legítimas y la regla era
respetar la del profesor. **Aquí no.** Son errores de inglés en una clase de
inglés: no hay una convención alternativa que los sostenga.

| # | Diapositiva (clase, sección) | Dice | Correcto | Por qué importa |
|---|---|---|---|---|
| 1 | C3 · Verbs | `Breath – Respirar` | **Breathe** | *Breath* /breθ/ es sustantivo; *breathe* /briːð/ es el verbo. Aparece en la lámina que enseña verbos |
| 2 | C3 · Different forms (sentences) | `She has a physical dependance on amphetamines` | **dependence** | La lámina anterior del mismo mazo escribe "Dependence" correctamente: el mazo se contradice |
| 3 | C2 · slide 1 | `they're primary purpose` | **their** | Confusión their/they're |
| 4 | C2 · Conclusion | `easy to become overwhelm` | **overwhelmed** | Falta el participio |
| 5 | C2 · Conclusion | `the patient's medial record` | **medical** | Errata; *medial* existe y significa otra cosa |
| 6 | C3 · Phrasal verbs | `verbs made up for two words` | **made up of** | Preposición incorrecta |
| 7 | C3 · Phrasal verbs | `Take after: to be like one or other parent` | *to be like one or the other of your parents* | Construcción agramatical |

**Regla operativa:**

1. **MedCore enseña la forma correcta.** En Topics, MedEN y reactivos aparece
   `breathe`, `dependence`, `their`, etc. Nunca la forma errónea como respuesta
   correcta ni como opción plausible.
2. **Cada Topic afectado lleva un bloque `{ type: 'note' }` titulado
   "Erratas de la presentación"**, que lista los errores de esa clase con el par
   *dice / debe decir* y una explicación de una línea. Es contenido de estudio,
   no una queja: los pares breath/breathe y their/they're son exactamente lo que
   un examen de inglés evalúa.
3. **Al menos 4 reactivos del banco atacan directamente estos pares**
   (§5.3), con la forma correcta como respuesta y la de la diapositiva como
   distractor. Un error que ya viste escrito y aceptaste como bueno es el más
   difícil de desaprender: conviene enfrentarlo de frente en lugar de esperar
   que se corrija solo.
4. En MedEN, las entradas afectadas llevan `nota` señalando la errata.

**No corrijas nada más.** Estos siete están verificados uno por uno. Si al
transcribir crees encontrar un octavo, **no lo corrijas: repórtalo** y déjalo tal
cual hasta que yo lo confirme. Un falso positivo aquí introduce el error que
pretende evitar.

---

## 4. Contenido verificado de las clases

### 4.1 Clase 2 — The Medical Record

**Definición.** *The Medical Record*, también llamado *The Medical History*,
*Case History* o *Anamnesis*. Documento legal que cumple muchas funciones, pero
cuyo propósito primario es registrar información sobre los pacientes y su
atención. Provee al personal clínico la información necesaria para dar atención
óptima en episodios hospitalarios presentes o futuros.

**Componentes del expediente (Medical History / H&P):** patient demographics ·
chief complaint (CC) · history of present illness (HPI) · past medical history
(PMH) · family history (FH) · social history (SH) · allergies · medication
history · review of systems (ROS) · physical examination (PE) · laboratory test
results · diagnostic test results · problem list · clinical notes (progress
notes, consultation notes, off-service/transfer notes, discharge summary) ·
treatment notes (medication orders, surgical procedure documentation, radiation
treatment, notes from ancillary practitioners).

**Tabla de equivalencias** — va como `table` con encabezados `['English', 'Español']`:

| English | Español |
|---|---|
| Patient demographics | Identificación del paciente |
| Chief Complaint (CC) | Problema principal o motivo de la consulta |
| History of present illness (HPI) | Enfermedad actual o anamnesis próxima |
| Past medical history (PMH) | Antecedentes o anamnesis remota |
| Family history (FH) | Historial familiar |
| Social history (SH) | Hábitos |
| Allergies | Alergias |
| Medication history | Antecedentes sobre uso de medicamentos |
| Review of systems (ROS) | Revisión por sistemas |

**Definición de cada sección** — va como bloques `definition`:

- **Patient Demographics:** name, birth date, address, phone number, gender,
  race, marital status.
- **Chief Complaint (CC):** the primary reason the patient is presenting for
  care. Often expressed in the patient's own words.
- **History of Present Illness (HPI):** typically documented in chronological
  order, describing symptoms in detail and previous treatment information.
- **Past Medical History (PMH):** a list of past and current medical conditions.
- **Family History (FH):** age, status (dead or alive) and presence or absence of
  chronic medical conditions in parents, siblings and children.
- **Social History (SH):** lifestyle and personal characteristics.
- **Allergies:** any history of allergic reactions to medications, food,
  vaccines, stings, contrast media, etc.
- **Medication History (MH):** current medication —prescription,
  non-prescription, complementary and alternative— plus dosages, frequency,
  duration and reason for taking.
- **Review of Systems (ROS):** subjective feelings or symptoms the patient is
  experiencing.
- **Physical Examination (PE):** objective information from the practitioner's
  examination, documented head-to-toe.
- **Laboratory Test Results:** basic metabolic panel, complete blood count (CBC),
  plus parameters specific to the diagnosis.
- **Diagnostic Test Results:** electrocardiograms, echocardiograms, ultrasounds,
  computer tomography (CT) scans.
- **Problem List:** the issues requiring management, in decreasing order of
  priority. The number one need is the working diagnosis that matches the signs
  and symptoms with which the patient has presented.
- **Clinical Notes:** daily progress notes by the resident and attending
  physician, updating H&P, problem list and plan.
- **Treatment Notes:** medication orders, medication administration records
  (MARs), surgical procedure documentation, radiation therapy, nutrition,
  respiratory therapy.

**Preguntas de repaso de la clase** — inclúyelas como `keypoints` o como bloque
`steps`, y conviértelas además en reactivos (§5.3):
1. What does FH mean?
2. Are name, address and gender part of the chief complaint? (Y/N)
3. What is the primary purpose of the Medical Record?
4. What does PMH contain?
5. Are allergies part of the patient's demographics? (Y/N)

### 4.2 Clase 3 — Parts of Speech

Nueve categorías: **nouns · articles · verbs · adjectives · adverbs · pronouns ·
prepositions · conjunctions · interjections**.

- **Nouns** — *a word used to name something: a person, an animal, a place, a
  thing, or an idea.* Ejemplos: diagnosis, examination, cure, allergy,
  antibiotic, germ, recovery, cardiology, pathology, arm.
- **Articles** — *a word that comes before a noun to show if it's specific or
  general.* `a` (consonante) / `an` (vocal) → un, una. `the` (ambas) → el, la,
  los, las. Ejemplos: a patient, a prescription, a referral, a cure, a paralysis;
  an injection, an operation, an eye, an arm, an ophthalmologist; the patient,
  the patients, the cure, the degeneration, the diagnoses.
- **Verbs** — *they generally express action or a state of being.* Diagnose,
  infect, cure, treat, explore, analyze, **breathe** (⚠ errata 1), operate,
  faint, fracture.
- **Adjectives** — *it modifies a noun or pronoun; normally the adjective comes
  before the noun.* Abnormal, acute, chronic, allergic, complex, benign,
  malignant, sore, swollen, inflamed.
- **Adverbs** — *a word that modifies an action verb, an adjective or another
  adverb.* Tipos: frequency (always, often, sometimes, rarely, never) · degree
  (almost, just, very, too, enough) · manner (happily, sadly, loudly, quietly,
  carefully) · place (here, there, up, down, away) · time (now, then, always,
  often, never) · interrogative (where, when, how, why, which) · relative
  (where, when, why, how) · conjunctive (therefore, however, nevertheless,
  moreover).
- **Pronouns** — *a word that replaces a noun; they eliminate the need for
  repetition.* Tabla completa obligatoria (`table`), con encabezados
  `['Person', 'Subject', 'Object', 'Possessive adj.', 'Possessive pron.', 'Reflexive']`:
  1st I/me/my/mine/myself · 2nd you/you/your/yours/yourself ·
  3rd m. he/him/his/his/himself · 3rd f. she/her/her/hers/herself ·
  3rd thing it/it/its/(not used)/itself · 1st pl. we/us/our/ours/ourselves ·
  2nd pl. you/you/your/yours/yourselves · 3rd pl. they/them/their/theirs/themselves.
- **Prepositions** — *words that, like conjunctions, connect a noun or pronoun to
  another word in a sentence.* Tipos: place, time, direction, manner, cause,
  phrasal, double, compound. Listado: in, on, at, by, up, of, with, after, over,
  upon, under, about, across, during, before, below, against, among, far, off,
  out, from, near, down, along, inside, beside, behind, outside, around, through.
- **Conjunctions** — *"the scotch tape of the grammatical world": they join
  together words and phrases.*
  - Coordinating: **FANBOYS** — For, And, Nor, But, Or, Yet, So.
  - Subordinating: although, because, since, while, unless, if, until, when,
    after, before, as, though, even if, where, as much as, now, as long as, just
    as, provided that, supposing, as soon as, as if, even though, next, so that,
    then, while, whenever, regardless, on the whole, in brief, after all,
    wherever, however, even so, in comparison, consequently, therefore, in case.
  - Correlative: either…or, neither…nor, not only…but also, both…and,
    whether…or, though…yet, as…as, not…but, as much as, such…that,
    scarcely…when, rather…than, the more…the more.
- **Interjections** — *words used to express emotional states; can stand alone.*
  Primary (oh!, wow!, hurrah!, awful!, oh no!, yikes!) · Secondary (ah!, hmm.,
  hmmph., oops., ah well., aha!) · Volitive (come on!, look out!, help!, stop!,
  go away!, let's go!).

**Glosario médico de la clase** — va a MedEN (§5.4) y como `table` en el Topic:
abnormal (adj.) anormal · ache (noun/verb) dolor · acute (adj.) agudo(a) ·
allergy (noun) alergia / allergic (adj.) alérgico(a) · amnesia (noun) amnesia ·
antibiotics (noun) antibióticos · appointment (noun) cita médica ·
arthritis (noun) artritis · biopsy (noun) biopsia · blood pressure (noun)
presión arterial · cancer (noun) cáncer · cyst (noun) quiste · deaf (adj.)
sordo(a) · diagnosis (noun) diagnóstico · disease (noun) enfermedad ·
emergency (noun) emergencia · fever (noun) fiebre · flu / influenza (noun)
influenza · fractured (adj.) fracturado · germ (noun) germen · heart attack
(noun) infarto al miocardio · HIV (noun) VIH · illness (noun) enfermedad ·
infection (noun) infección · malignant (adj.) maligno · numb (adj.) entumecido ·
pain (noun) dolor · sore (adj.) dolorido · swollen (adj.) hinchado ·
virus (noun) virus.

**Oraciones de uso de la clase** (van como `example` en MedEN):
- We knew the baby was coming right away because the woman's labour pains were **acute**.
- The **biopsy** ruled out a number of illnesses.
- The doctor would prefer to share the **diagnosis** with you in private.
- People who have the **flu** should not visit hospital patients.
- **HIV** can be passed down from the mother to her fetus.
- I knew my ankle was sprained because it was so **swollen**.
- There are very contagious **viruses**.

### 4.3 Clase 3 — Different forms of a word · Phrasal verbs

**Verbo → sustantivo (15):** diagnose→diagnosis · examine→examination ·
prescribe→prescription · suffer→suffering · operate→operation · cure→cure ·
recover→recovery · analyze→analysis · infect→infection · carry→carrier ·
replace→replacement · degenerate→degeneration · refer→referral ·
paralyze→paralysis · obstruct→obstruction.

**Sustantivo → adjetivo (10):** defect→defective · deficiency→deficient ·
depend**e**nce→dependent · excess→excessive · hypoglycemia→hypoglycemic ·
immunity→immune · inactivity→inactive · pain→painful · spine→spinal ·
stiffness→stiff.

**Pares de oraciones** (obligatorio incluirlos: son el ejercicio evaluable):
- I **diagnosed** that the patient had a heart condition. / My **diagnosis** was that the patient had a heart condition.
- I **examined** the patient fully. / I made a full **examination** of the patient.
- I **prescribed** a course of antibiotics. / I wrote a **prescription** for antibiotics.
- He **suffers** very little. / He experienced very little **suffering**.
- We **operated** immediately. / The **operation** was performed immediately.
- This disease cannot be **cured**. / There is no **cure** for this disease.
- He has **recovered** fully. / He has made a full **recovery**.
- The surgeons operated to repair the **defect** on the patient's heart valve. / …to repair the patient's **defective** heart valve.
- His diet has a calcium **deficiency**. / His diet is calcium-**deficient**.
- She has a physical **dependence** on amphetamines (⚠ errata 2). / She is physically **dependent** on amphetamines.
- The doctor noted an **excess** of bile in the patient's blood. / …an **excessive** amount of bile…
- An attack of **hypoglycemia** can be prevented… / A **hypoglycemic** attack can be prevented…
- The vaccine should give **immunity** to tuberculosis. / The vaccine should make you **immune** to tuberculosis.

**Phrasal verbs** — *verbs made up **of** two words: a verb and a preposition*
(⚠ errata 6):

| Phrasal verb | Meaning |
|---|---|
| break down | to start to cry and become upset |
| bring up | to cough up material such as mucus from the lungs or throat |
| cough up | to cough hard to expel a substance from the trachea |
| drop off | to fall asleep |
| get around | to move about |
| get over | to become better after an illness or a shock |
| give up | not to do something any more |
| go down | to become smaller |
| knock out | to hit someone so hard that he or she is no longer conscious |
| look after | to take care of a person and attend to his or her needs |
| pass out | to faint |
| pick up | to catch a disease |
| prop up | to support a person, e.g. with pillows |
| take after | to be like one or the other of your parents (⚠ errata 7) |
| take off | to remove something, especially clothes |

**Oraciones con tiempo verbal identificado** (excelente material de reactivos):
- The nurses **are looking after** her very well. *(Present Continuous)*
- She often **drops off** in front of the T.V. *(Simple Present)*
- She **broke down** and cried as she described the symptoms to the doctor. *(Simple Past)*
- The doctor asked him to **take off** his shirt. *(Simple Present)*
- Since she had the accident she **got around** using crutches. *(Simple Past)*
- He **was bringing up** mucus. *(Past Continuous)*

---

## 5. Entregables

### 5.1 Tres Topics — `src/data/ingles-uad-topics.ts` (nuevo)

Exporta `inglesUadTopics: Topic[]` y agrégalo al spread de `src/data/topics.ts`.

**Reutiliza `colorKey` existentes.** No añadas claves nuevas: `lenguaje`,
`gramatica` y `comunicacion` ya están definidas en `TOPIC_COLORS` y son
apropiadas.

| `id` | `title` | `subtitle` | `colorKey` | `emoji` |
|---|---|---|---|---|
| `ingles-medical-record` | The Medical Record | Componentes del expediente clínico y su equivalencia en español | `lenguaje` | 📋 |
| `ingles-parts-of-speech` | Parts of Speech | Las nueve categorías gramaticales con vocabulario médico | `gramatica` | 🔤 |
| `ingles-word-forms` | Word Forms & Phrasal Verbs | Derivación verbo↔sustantivo↔adjetivo y verbos frasales clínicos | `comunicacion` | 🔀 |

Requisitos: 5–8 `sections` por Topic (`imr-1…`, `pos-1…`, `wfp-1…`),
`keyTerms` **en inglés**, 6–8 `keyPoints`, y la variedad de `BlockType` del
Topic de Anatomía. Cada uno con su bloque `note` de erratas (§3.2).

**Los enunciados y ejemplos van en inglés; las explicaciones, en español.**
Ejemplo de `definition`: `title: 'Chief Complaint (CC)'`,
`content: 'The primary reason the patient is presenting for care, often
expressed in the patient's own words. — Motivo de consulta; se registra con las
palabras del propio paciente.'`

### 5.2 Módulo — `src/data/modules.ts`

```ts
{
  id: 'ingles-medico-uad',
  badge: 'UAD · Inglés Médico I',
  title: 'Inglés Médico',
  subtitle: 'Semana 1: el expediente clínico en inglés, categorías gramaticales y verbos frasales.',
  emoji: '🩺',
  topicIds: ['ingles-medical-record', 'ingles-parts-of-speech', 'ingles-word-forms'],
}
```

Colócalo **después** de `anatomia-uad` y antes de `anatomia`.

### 5.3 Banco de 40 reactivos — `src/data/ingles-uad-quizzes.ts` (nuevo)

Exporta `inglesUadQuestions: Question[]`; agrégalo al spread de `quizzes.ts`.

| `topicId` | Reactivos | Prefijo |
|---|---|---|
| `ingles-medical-record` | 14 | `imr-q1` … `imr-q14` |
| `ingles-parts-of-speech` | 14 | `pos-q1` … `pos-q14` |
| `ingles-word-forms` | 12 | `wfp-q1` … `wfp-q12` |
| **Total** | **40** | |

**Cuarenta, no cincuenta.** Inglés Médico son 4 créditos y 3 sesiones semanales;
Anatomía, 13 créditos y 5 sesiones. Un banco proporcional al contenido impartido
vale más que uno inflado con relleno para igualar una cifra.

**Idioma de los reactivos:** `question` y `options` **en inglés** —es lo que
evalúa el examen—; `explanation` **en español**, porque ahí es donde se aprende.

Reglas de calidad (§5.4 del prompt de Anatomía, aplican igual) más estas cuatro,
específicas de idioma:

1. **≥4 reactivos sobre las erratas de §3**, con la forma correcta como respuesta
   y la de la diapositiva como distractor. Obligatorio cubrir *breath/breathe* y
   *their/they're*.
2. **≥6 reactivos de derivación**: dada una oración con hueco, elegir la forma
   correcta (`suffer`/`suffering`, `excess`/`excessive`, `immunity`/`immune`).
   Es el formato exacto del ejercicio de clase.
3. **≥4 reactivos de phrasal verbs en contexto clínico**, con distractores que
   sean otros phrasal verbs del mismo listado — no invenciones. *Pass out* vs.
   *drop off* vs. *knock out* es una confusión real y evaluable.
4. **Ningún reactivo debe poder responderse por cognado.** Si la opción correcta
   se adivina desde el español sin saber inglés, no mide nada. Los falsos
   cognados son, además, la unidad temática V del programa.

### 5.4 MedEN — vocabulario inglés↔español (capa nueva)

Hermana de MedLex, no una extensión suya: MedLex es un corpus de morfemas
grecolatinos con atribución CC BY-SA de la ENP UNAM. Mezclar vocabulario inglés
ahí rompería esa atribución y confundiría dos objetos distintos.

**`src/data/meden-terms.ts`:**

```ts
export interface MedEnTerm {
  id: string
  term: string          // 'diagnosis'
  pos: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun'
      | 'preposition' | 'conjunction' | 'interjection'
      | 'article' | 'phrasal-verb' | 'abbreviation'
  es: string            // 'diagnóstico'
  forms?: { pos: MedEnTerm['pos']; word: string; es?: string }[]
  example?: string      // oración en inglés, verbatim de la clase si existe
  categoria: string     // 'historia-clinica' | 'sintomas' | 'diagnostico' | 'general' | 'gramatica'
  semana: number        // 1
  nota?: string         // errata del profesor u observación de uso
}
```

Carga **80–100 entradas** de la Semana 1: el glosario de §4.2, las abreviaturas
del expediente (CC, HPI, PMH, FH, SH, ROS, PE, MH, H&P, CBC, CT, MARs), las 25
derivaciones de §4.3 —cada una con sus `forms`— y los 15 phrasal verbs.

**`src/pages/MedEn.tsx`** — modélala sobre `src/pages/Terminologia.tsx`:
buscador, filtros por `pos` y `categoria`, tarjeta expandible y el motor de quiz
que esa página ya implementa. Ruta `/vocabulario`, con soporte de
`?categoria=` y `?pos=` como parámetros de búsqueda.

Añádela al `Navbar` como **"Vocabulario"**, `mobile: false` (la barra móvil ya
va cargada tras el prompt de navegación).

En `SubjectDetail`, la materia `ingles-medico-1` debe enlazar a
`/vocabulario?semana=1`, del mismo modo que las materias de anatomía enlazan a
MedLex.

### 5.5 Ficha de la materia — `src/data/plans/uad-medicina.ts`

En `ingles-medico-1`:

1. `topicIds: ['ingles-medical-record', 'ingles-parts-of-speech', 'ingles-word-forms']`
2. En `content.semanas`: completa la semana 1 con sus `temas` y los mismos
   `topicIds`, y **añade las semanas 2, 3 y 4** según la tabla de §2.2.
3. Añade a `materiales`:
   ```ts
   { title: 'Clase 2 — The Medical Record',            file: 'Semana 1 - Clase 2 The Medical Record.pdf', kind: 'Clase' },
   { title: 'Clase 3 — Parts of Speech & Word Forms',  file: 'Semana 1 - Clase 3 Parts of Speech.pdf', kind: 'Clase' },
   { title: 'Proyecto Integrador Semana 1 — Why is English important…', file: 'Semana 1 - Proyecto Integrador.pdf', kind: 'Entrega' },
   { title: 'Caso Clínico 1 — Shortness of Breath',    file: 'Semana 1 - Caso Clinico 1 Shortness of Breath.pdf', kind: 'Caso clínico' },
   ```
4. **Corrige `recursos`:** hoy la materia hereda los cuatro recursos de Anatomía
   (Acland Anatomy, Bates Visual Guide, LWW Health Library, 5-Minute Consult).
   Acland es un atlas de disección: no pinta nada en Inglés Médico. Déjale los
   que sí aplican y añade OVID®, que es la fuente bibliográfica **básica** que
   nombra el programa.

### 5.6 PDFs de clase y biblioteca

Las clases son capturas sueltas, no un mazo. Compón un PDF por clase, en orden
cronológico de nombre de archivo:

```bash
cd "~/Desktop/UAD/Primer Semestre/Inglés Médico I DEF/Semana 1"
python3 -c "
from PIL import Image; import glob
for src, out in [('Clase 2','Semana 1 - Clase 2 The Medical Record.pdf'),
                 ('Clase 3','Semana 1 - Clase 3 Parts of Speech.pdf')]:
    ims=[Image.open(f).convert('RGB') for f in sorted(glob.glob(src+'/*.png'))]
    ims[0].save(out, save_all=True, append_images=ims[1:], resolution=150)
    print(out, len(ims), 'páginas')
"
```

Verifica que el conteo sea **11** y **23** páginas. Súbelos a
`library.medcore.icu/ingles-medico-1/` junto con las dos entregas de §2.3,
con los nombres exactos de §5.5. **Muéstrame el comando de subida antes de
ejecutarlo.** No commitees ni los PNG ni los PDF.

---

## 6. Verificación

```bash
npm run build
grep -c "topicId: 'ingles-medical-record'"  src/data/ingles-uad-quizzes.ts   # → 14
grep -c "topicId: 'ingles-parts-of-speech'" src/data/ingles-uad-quizzes.ts   # → 14
grep -c "topicId: 'ingles-word-forms'"      src/data/ingles-uad-quizzes.ts   # → 12
grep -o "id: '[a-z0-9-]*'" src/data/meden-terms.ts | sort | uniq -d          # → vacío
```

**Chequeo de erratas — obligatorio.** Estas búsquedas deben devolver **cero
resultados** en todo `src/data/`, salvo dentro de los bloques `note` de errata y
de los distractores marcados:

```bash
grep -rn "Breath – \|Breath -\|dependance\|they're primary\|medial record\|made up for two" src/data/
```

Si alguna aparece fuera de esos dos contextos, se coló la forma incorrecta como
contenido. Arréglala y dilo.

Manual (`npm run dev`):

- [ ] `/estudio` lista el módulo **UAD · Inglés Médico** con sus 3 temas
- [ ] `/topic/ingles-parts-of-speech` renderiza la tabla de pronombres completa
- [ ] `/vocabulario` busca, filtra por categoría gramatical y lanza el quiz
- [ ] `/plan/ingles-medico-1` muestra las 3 guías, 4 semanas, los materiales
      nuevos y el enlace a Vocabulario
- [ ] `/quiz` muestra 40 reactivos nuevos, con enunciados en inglés y
      explicaciones en español
- [ ] Modo claro **y** oscuro en `/vocabulario`
- [ ] Recorrido completo sin teclear URL: Inicio → Plan → Inglés Médico I →
      Semana 1 → The Medical Record → leer → Quiz

**Auto-revisión:** toma 5 reactivos al azar y verifícalos contra §4. Reporta el
resultado aunque los 5 estén bien.

---

## 7. No-objetivos

- No traduzcas al español el contenido de aprendizaje en inglés.
- No generes contenido de la Clase 1 (encuadre, sin capturas).
- No generes contenido de las semanas 2, 3 y 4.
- No generes Topics ni reactivos del Caso Clínico ni del Proyecto Integrador:
  solo se archivan.
- No añadas claves a `TopicColorKey`: reutiliza `lenguaje`, `gramatica`, `comunicacion`.
- No metas vocabulario inglés en `medlex-terms.ts` — rompería la atribución CC BY-SA.
- No crees láminas de Atlas para esta materia.
- No corrijas erratas fuera de las siete de §3 sin consultarme.
- No toques `pai*.ts`, `unisa-lmgc.ts` ni `lmgc-modules.ts`.
- No añadas dependencias. No ejecutes `npm run deploy`.

---

## 8. Entrega

1. `feat(ingles): topics de Semana 1 — expediente clínico, parts of speech y word forms`
2. `feat(meden): capa de vocabulario inglés-español con página y buscador`
3. `feat(quizzes): banco UAD Inglés Médico I — 40 reactivos Semana 1`
4. `feat(plan): semanas 1-4, materiales y recursos de Inglés Médico I`
5. `fix(plan): recursos de Inglés Médico ya no heredan los de Anatomía`

En el reporte final: qué erratas adicionales sospechaste y **no** corregiste,
si alguna captura resultó ilegible, y cuántas entradas quedaron en MedEN.
