/*
 * Inglés Médico I (UAD · IN01005) — Banco de ADELANTO. 68 reactivos.
 *
 * SEPARADO del banco de Semana 1 (ingles-uad-quizzes.ts): cubre las unidades
 * II a VI, tomadas del libro de texto y aún no impartidas. Se agrega a
 * quizzes.ts como array propio.
 *
 * `question` y `options` en inglés; `explanation` en español. En
 * ingles-false-friends la regla del cognado se invierte y se vuelve el
 * contenido: el distractor DEBE ser la trampa del cognado.
 *
 * Distribución: 14 word-parts · 10 plurals · 10 false-friends · 8 literature.
 * (Las 12 de abbreviations se promovieron en la Semana 2, Clase 3; las 14 de
 * verb-tenses y las 12 de sentence-structure, en la Semana 3 — todas al banco
 * impartido en ingles-uad-quizzes.ts.)
 */

import type { Question } from '../types'

export const inglesAdelantoQuestions: Question[] = [
  // ─── WORD PARTS (iwp) ────────────────────────────────────────────────
  {
    id: 'iwp-q1', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The combining vowel that links word parts is almost always:',
    options: ['a', 'e', 'i', 'o'],
    correctIndex: 3, difficulty: 'easy',
    explanation: 'La vocal de enlace es casi siempre "o" (cardi/o, gastr/o). Une una raíz con un sufijo consonántico o con otra raíz.',
  },
  {
    id: 'iwp-q2', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The prefix "peri-" means:',
    options: ['around', 'within', 'against', 'below'],
    correctIndex: 0, difficulty: 'easy',
    explanation: 'peri- = alrededor (pericarditis = inflamación alrededor del corazón).',
  },
  {
    id: 'iwp-q3', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The suffix "-itis" means:',
    options: ['excision', 'inflammation', 'enlargement', 'study of'],
    correctIndex: 1, difficulty: 'easy',
    explanation: '-itis = inflamación (arthritis = inflamación de una articulación).',
  },
  {
    id: 'iwp-q4', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The suffix "-ectomy" means:',
    options: ['incision', 'new opening', 'surgical removal', 'visual examination'],
    correctIndex: 2, difficulty: 'medium',
    explanation: '-ectomy = extirpación quirúrgica (appendectomy = extirpación del apéndice).',
  },
  {
    id: 'iwp-q5', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'To interpret a medical term, you should start at the:',
    options: ['suffix (the end)', 'prefix (the beginning)', 'combining vowel', 'first root'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'Se lee primero el sufijo (condición/procedimiento), luego el prefijo y al final la(s) raíz(es).',
  },
  {
    id: 'iwp-q6', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The prefix "hyper-" means:',
    options: ['deficient, below normal', 'excessive, above normal', 'around', 'slow'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'hyper- = excesivo, por encima de lo normal (hyperglycemia). Su opuesto es hypo- (deficiente).',
  },
  {
    id: 'iwp-q7', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The prefix "hypo-" means:',
    options: ['above normal', 'fast', 'deficient, below normal', 'against'],
    correctIndex: 2, difficulty: 'easy',
    explanation: 'hypo- = deficiente, por debajo de lo normal (hypoglycemia).',
  },
  {
    id: 'iwp-q8', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The combining form "gastr/o" refers to the:',
    options: ['kidney', 'liver', 'stomach', 'heart'],
    correctIndex: 2, difficulty: 'easy',
    explanation: 'gastr/o = estómago (gastritis, gastroenterology).',
  },
  {
    id: 'iwp-q9', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The combining form "nephr/o" refers to the:',
    options: ['nerve', 'kidney', 'bone', 'lung'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'nephr/o = riñón (nephrology). No confundir con neur/o = nervio.',
  },
  {
    id: 'iwp-q10', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The suffix "-megaly" means:',
    options: ['pain', 'abnormal condition', 'disease', 'enlargement'],
    correctIndex: 3, difficulty: 'medium',
    explanation: '-megaly = agrandamiento (hepatomegaly = hígado agrandado).',
  },
  {
    id: 'iwp-q11', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The prefix "brady-" means:',
    options: ['slow', 'fast', 'without', 'within'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'brady- = lento (bradycardia = frecuencia cardíaca lenta). Su opuesto es tachy- (rápido).',
  },
  {
    id: 'iwp-q12', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'A "combining form" is:',
    options: ['a prefix plus a suffix', 'a word root plus a combining vowel', 'two suffixes joined', 'a root without any vowel'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'La forma combinante es la raíz más la vocal de enlace: cardi + o = cardi/o.',
  },
  {
    id: 'iwp-q13', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Reading its parts, "pericarditis" means:',
    options: ['removal of the heart', 'inflammation around the heart', 'enlargement of the heart', 'study of the heart'],
    correctIndex: 1, difficulty: 'hard',
    explanation: 'peri- (alrededor) + card (corazón) + -itis (inflamación) = inflamación alrededor del corazón.',
  },
  {
    id: 'iwp-q14', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The prefix "tachy-" means:',
    options: ['below', 'around', 'slow', 'fast, rapid'],
    correctIndex: 3, difficulty: 'medium',
    explanation: 'tachy- = rápido (tachycardia = frecuencia cardíaca acelerada).',
  },

  // ─── FALSE FRIENDS (iff) — el distractor ES la trampa del cognado ─────
  {
    id: 'iff-q1', topicId: 'ingles-false-friends', type: 'multiple-choice',
    question: 'In a chart, "the patient is intoxicated" means the patient is:',
    options: ['poisoned', 'drunk or under the influence', 'dehydrated', 'unconscious'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Falso cognado: intoxicated = ebrio / bajo efectos de sustancias, NO "intoxicado" (que sería poisoned). Es de los que más caro salen en una historia clínica.',
  },
  {
    id: 'iff-q2', topicId: 'ingles-false-friends', type: 'multiple-choice',
    question: '"The patient is constipated" means the patient:',
    options: ['has a cold', 'is congested', 'is estreñido (has difficulty passing stool)', 'is dehydrated'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'Falso cognado: constipated = estreñido, NO "constipado/resfriado" (to have a cold). Invierte el cuadro si se traduce mal.',
  },
  {
    id: 'iff-q3', topicId: 'ingles-false-friends', type: 'multiple-choice',
    question: '"She felt embarrassed" means she felt:',
    options: ['pregnant', 'ashamed / self-conscious', 'nauseous', 'tired'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'Falso cognado: embarrassed = avergonzado, NO "embarazada" (pregnant).',
  },
  {
    id: 'iff-q4', topicId: 'ingles-false-friends', type: 'multiple-choice',
    question: 'In "the drug is actually quite safe", "actually" means:',
    options: ['currently', 'in reality / in fact', 'temporarily', 'usually'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Falso cognado: actually = en realidad, NO "actualmente" (currently).',
  },
  {
    id: 'iff-q5', topicId: 'ingles-false-friends', type: 'multiple-choice',
    question: 'In "the patient has a serious heart condition", "condition" means:',
    options: ['a requirement', 'a clinical state or disorder', 'a condition to be met', 'a physical fitness level'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Falso cognado: condition = estado clínico / afección, NO "condición / requisito" (requirement).',
  },
  {
    id: 'iff-q6', topicId: 'ingles-false-friends', type: 'multiple-choice',
    question: 'In "the patient is in severe pain", "severe" means:',
    options: ['strict', 'serious / intense', 'permanent', 'sudden'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Falso cognado: severe (pain) = intenso/grave, NO "severo" de carácter (strict).',
  },
  {
    id: 'iff-q7', topicId: 'ingles-false-friends', type: 'multiple-choice',
    question: 'In "the symptoms eventually disappeared", "eventually" means:',
    options: ['occasionally', 'finally / in the end', 'unexpectedly', 'possibly'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Falso cognado: eventually = finalmente, con el tiempo, NO "eventualmente" (occasionally).',
  },
  {
    id: 'iff-q8', topicId: 'ingles-false-friends', type: 'multiple-choice',
    question: 'In "the doctor realized the mistake", "realized" means:',
    options: ['carried out', 'became aware of', 'accepted', 'reported'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Falso cognado: to realize = darse cuenta, NO "realizar" (to carry out / to perform).',
  },
  {
    id: 'iff-q9', topicId: 'ingles-false-friends', type: 'multiple-choice',
    question: 'In obstetrics, "the patient is in labor" means she is:',
    options: ['doing a task', 'working hard', 'in the process of childbirth', 'exhausted'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'Falso cognado: labor = trabajo de parto, NO "labor/tarea" (task).',
  },
  {
    id: 'iff-q10', topicId: 'ingles-false-friends', type: 'multiple-choice',
    question: '"A nurse will assist the surgeon" means the nurse will:',
    options: ['attend (be present at) the surgery', 'help the surgeon', 'replace the surgeon', 'watch the surgery'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Falso cognado: to assist = ayudar, NO "asistir a un lugar" (to attend).',
  },

  // ─── SCIENTIFIC LITERATURE (isl) ─────────────────────────────────────
  {
    id: 'isl-q1', topicId: 'ingles-scientific-literature', type: 'multiple-choice',
    question: 'IMRaD stands for:',
    options: ['Introduction, Methods, Results and Discussion', 'Index, Materials, Review and Data', 'Introduction, Materials, Research and Design', 'Information, Methods, Records and Diagnosis'],
    correctIndex: 0, difficulty: 'easy',
    explanation: 'IMRaD = Introduction, Methods, Results and Discussion, la estructura estándar de un artículo de investigación.',
  },
  {
    id: 'isl-q2', topicId: 'ingles-scientific-literature', type: 'multiple-choice',
    question: 'Which section answers "how was the study done"?',
    options: ['Introduction', 'Methods', 'Results', 'Discussion'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'La sección Methods describe el diseño, los sujetos y los procedimientos: cómo se hizo.',
  },
  {
    id: 'isl-q3', topicId: 'ingles-scientific-literature', type: 'multiple-choice',
    question: 'Which section interprets the findings and states the conclusion?',
    options: ['Methods', 'Results', 'Discussion', 'Abstract'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'La Discussion interpreta los resultados, señala limitaciones y concluye qué significan.',
  },
  {
    id: 'isl-q4', topicId: 'ingles-scientific-literature', type: 'multiple-choice',
    question: 'What should you read first to decide if a paper is relevant?',
    options: ['the references', 'the abstract', 'the methods', 'the acknowledgements'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'El abstract es un resumen de todo el artículo; se lee primero para decidir si vale la pena seguir.',
  },
  {
    id: 'isl-q5', topicId: 'ingles-scientific-literature', type: 'multiple-choice',
    question: 'Today, the lingua franca of medical science is:',
    options: ['German', 'French', 'Latin', 'English'],
    correctIndex: 3, difficulty: 'easy',
    explanation: 'El inglés es hoy la lengua vehicular de la ciencia médica: la mayor parte de la literatura actual está en inglés.',
  },
  {
    id: 'isl-q6', topicId: 'ingles-scientific-literature', type: 'multiple-choice',
    question: 'According to The Language of Medicine, the share of German references fell from 80–90% in 1920 to about:',
    options: ['50–60% in 1995', '10–20% in 1995', '0% in 1995', '30–40% in 1995'],
    correctIndex: 1, difficulty: 'hard',
    explanation: 'La proporción de referencias en alemán cayó de un 80–90 % (1920) a un 10–20 % (1995), mientras el inglés se volvía dominante.',
  },
  {
    id: 'isl-q7', topicId: 'ingles-scientific-literature', type: 'multiple-choice',
    question: 'The key numbers and data of a study are found in the:',
    options: ['Introduction', 'Results', 'Discussion', 'References'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Los datos, figuras y tablas —lo que se encontró— están en la sección Results.',
  },
  {
    id: 'isl-q8', topicId: 'ingles-scientific-literature', type: 'multiple-choice',
    question: 'The record-keeping principle "if it is not written down, ___":',
    options: ['it did not happen', 'it is confidential', 'it is optional', 'it must be repeated'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'Principio legal del expediente: "if it is not written down, it did not happen" — lo no documentado, a efectos legales, no ocurrió.',
  },
]
