/*
 * Inglés Médico I (UAD · IN01005) — Banco de reactivos, Semana 1. 40 preguntas.
 *
 * IDIOMA: `question` y `options` en inglés (es lo que evalúa el examen);
 * `explanation` en español (es donde se aprende).
 *
 * COBERTURA de erratas (§3 del prompt): 4 reactivos atacan las erratas de las
 * diapositivas con la forma correcta como respuesta y la de la diapositiva como
 * distractor — breath/breathe (pos-q3), their/they're (imr-q10), overwhelmed
 * (imr-q11) y medical/medial (imr-q12). Ningún reactivo es respondible por
 * cognado: las opciones incorrectas son inglés plausible, no traducciones.
 *
 * Distribución: 14 imr · 14 pos · 12 wfp.
 */

import type { Question } from '../types'

export const inglesUadQuestions: Question[] = [
  // ─── THE MEDICAL RECORD (imr) ────────────────────────────────────────
  {
    id: 'imr-q1', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'What does the abbreviation "CC" stand for in a medical record?',
    options: ['Chief Complaint', 'Clinical Course', 'Chronic Condition', 'Continuity of Care'],
    correctIndex: 0, difficulty: 'easy',
    explanation: 'CC = Chief Complaint (motivo de consulta): la razón principal por la que el paciente acude, idealmente en sus propias palabras.',
  },
  {
    id: 'imr-q2', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'What is the primary purpose of the medical record?',
    options: ['To bill the insurance company', 'To advertise the hospital\'s services', 'To record information about patients and their care', 'To replace the physical examination'],
    correctIndex: 2, difficulty: 'easy',
    explanation: 'Aunque cumple muchas funciones (legal, docente, administrativa), su propósito PRIMARIO es registrar información sobre los pacientes y su atención.',
  },
  {
    id: 'imr-q3', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'In a patient\'s history, "FH" refers to the:',
    options: ['Final History', 'Functional Health', 'Fluid Homeostasis', 'Family History'],
    correctIndex: 3, difficulty: 'easy',
    explanation: 'FH = Family History (antecedentes heredofamiliares): edad, estado (vivo/fallecido) y presencia de enfermedades crónicas en padres, hermanos e hijos.',
  },
  {
    id: 'imr-q4', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'Which section is usually documented in the patient\'s own words?',
    options: ['History of Present Illness', 'Physical Examination', 'Chief Complaint', 'Review of Systems'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'El Chief Complaint se registra con las palabras del propio paciente ("in the patient\'s own words"). La HPI las desarrolla ya en lenguaje clínico y orden cronológico.',
  },
  {
    id: 'imr-q5', topicId: 'ingles-medical-record', type: 'true-false',
    question: 'Patient demographics (name, address and gender) are part of the chief complaint.',
    options: ['True', 'False'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'Falso. Los datos demográficos (nombre, dirección, género) forman su propia sección; el chief complaint es el motivo de consulta, no la identificación.',
  },
  {
    id: 'imr-q6', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'Which section records the subjective symptoms the patient reports?',
    options: ['Physical Examination', 'Laboratory results', 'Review of Systems', 'Problem List'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'La Review of Systems (ROS) recoge lo subjetivo: lo que el paciente refiere sentir. La Physical Examination es objetiva (lo que el clínico observa y mide).',
  },
  {
    id: 'imr-q7', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'Which section contains objective information documented head-to-toe by the practitioner?',
    options: ['Review of Systems', 'Physical Examination', 'Medication History', 'Social History'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'La Physical Examination (PE) es la exploración física: información objetiva registrada de la cabeza a los pies por quien examina.',
  },
  {
    id: 'imr-q8', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'In the Problem List, the number-one item is usually the:',
    options: ['working diagnosis', 'discharge date', 'patient\'s allergies', 'billing code'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'La Problem List se ordena por prioridad decreciente; el problema número uno es el diagnóstico de trabajo que explica los signos y síntomas de presentación.',
  },
  {
    id: 'imr-q9', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'The Past Medical History (PMH) is best described as:',
    options: ['The reason for today\'s visit', 'The results of the physical exam', 'The patient\'s home address', 'A list of past and current medical conditions'],
    correctIndex: 3, difficulty: 'easy',
    explanation: 'La PMH es una lista de las condiciones médicas pasadas y actuales del paciente (antecedentes personales patológicos).',
  },
  {
    id: 'imr-q10', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'Choose the correct word: "Clinicians must protect ___ patients\' confidential data."',
    options: ['they\'re', 'their', 'there', 'theirs'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Errata de la clase. Se necesita el posesivo their ("sus"). they\'re es la contracción de "they are" y no cabe aquí. La diapositiva escribió "they\'re primary purpose" por error.',
  },
  {
    id: 'imr-q11', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'Choose the correct form: "With so much data to review, it is easy to become ___."',
    options: ['overwhelm', 'overwhelming', 'overwhelms', 'overwhelmed'],
    correctIndex: 3, difficulty: 'medium',
    explanation: 'Errata de la clase. Tras "become" se usa el participio overwhelmed (sentirse abrumado). La diapositiva escribió "become overwhelm", sin el participio.',
  },
  {
    id: 'imr-q12', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'Choose the correct word: "The patient\'s information is stored in their ___ record."',
    options: ['medical', 'medial', 'middle', 'model'],
    correctIndex: 0, difficulty: 'easy',
    explanation: 'Errata de la clase. Es medical record (expediente médico). "medial" existe pero significa "hacia la línea media": otra palabra. La diapositiva escribió "medial record".',
  },
  {
    id: 'imr-q13', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'A complete Medication History should include dosages, frequency, duration and:',
    options: ['the patient\'s marital status', 'the family\'s income', 'the reason for taking each drug', 'the room number'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'La Medication History registra el medicamento actual (con o sin receta, complementario) más dosis, frecuencia, duración y el motivo por el que se toma.',
  },
  {
    id: 'imr-q14', topicId: 'ingles-medical-record', type: 'multiple-choice',
    question: 'In laboratory results, "CBC" stands for:',
    options: ['Central Blood Culture', 'Chronic Bronchial Condition', 'Cardiac Baseline Check', 'Complete Blood Count'],
    correctIndex: 3, difficulty: 'easy',
    explanation: 'CBC = Complete Blood Count (biometría hemática), parte del panel básico de laboratorio del expediente.',
  },

  // ─── PARTS OF SPEECH (pos) ───────────────────────────────────────────
  {
    id: 'pos-q1', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'How many parts of speech are studied in this class?',
    options: ['nine', 'seven', 'eight', 'ten'],
    correctIndex: 0, difficulty: 'easy',
    explanation: 'Nueve: nouns, articles, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions e interjections.',
  },
  {
    id: 'pos-q2', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'Complete with the correct article: "The nurse gave the child ___ injection."',
    options: ['a', 'an', 'the', 'no article'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'Se usa "an" antes de sonido vocálico: an injection. "a" va antes de sonido consonántico (a patient, a cure).',
  },
  {
    id: 'pos-q3', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'Choose the correct verb: "The patient is struggling to ___ because of the asthma attack."',
    options: ['breath', 'breathe', 'breathes', 'breathing'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Errata de la clase. El VERBO es breathe /briːð/ (respirar); breath /breθ/ es el sustantivo. Tras "to" va el infinitivo breathe. La diapositiva de verbos escribió "Breath".',
  },
  {
    id: 'pos-q4', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'Choose the correct noun: "The doctor asked her to take a deep ___."',
    options: ['breathed', 'breathing', 'breath', 'breathe'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'Aquí se necesita el SUSTANTIVO breath (la respiración/el aliento): "take a deep breath". El verbo sería breathe. Es el par exacto que evalúa el examen.',
  },
  {
    id: 'pos-q5', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'Which of these is a coordinating conjunction (FANBOYS)?',
    options: ['because', 'although', 'while', 'but'],
    correctIndex: 3, difficulty: 'medium',
    explanation: 'FANBOYS = For, And, Nor, But, Or, Yet, So. "but" es coordinante; because, although y while son subordinantes.',
  },
  {
    id: 'pos-q6', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'A word that modifies a verb, an adjective or another adverb is:',
    options: ['a noun', 'an adverb', 'an adjective', 'a pronoun'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'Esa es la definición de adverbio (adverb). El adjetivo modifica solo sustantivos o pronombres.',
  },
  {
    id: 'pos-q7', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'In English, an adjective normally comes ___ the noun it modifies.',
    options: ['before', 'after', 'instead of', 'far from'],
    correctIndex: 0, difficulty: 'easy',
    explanation: 'A diferencia del español, el adjetivo suele ir ANTES del sustantivo: acute pain, chronic disease, malignant tumor.',
  },
  {
    id: 'pos-q8', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'The object form of the pronoun "they" is:',
    options: ['their', 'them', 'theirs', 'they\'re'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Subject: they · Object: them · Possessive adj.: their · Possessive pron.: theirs. "The doctor treated them."',
  },
  {
    id: 'pos-q9', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'Choose the possessive adjective: "The patients took ___ medication on time."',
    options: ['they\'re', 'there', 'their', 'them'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'El posesivo their ("su/sus") acompaña al sustantivo medication. their ≠ they\'re (they are) ≠ there (allí): son homófonos con funciones distintas.',
  },
  {
    id: 'pos-q10', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'The reflexive pronoun for "we" is:',
    options: ['ourself', 'themselves', 'ourselves', 'yourselves'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'La forma reflexiva de "we" es ourselves. "We should protect ourselves from infection."',
  },
  {
    id: 'pos-q11', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'Which word is an interjection?',
    options: ['carefully', 'swollen', 'ouch!', 'through'],
    correctIndex: 2, difficulty: 'easy',
    explanation: 'Una interjección expresa un estado emocional y puede ir sola: ouch! (¡ay!). "carefully" es adverbio, "swollen" adjetivo y "through" preposición.',
  },
  {
    id: 'pos-q12', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'Complete: "The GP referred her to ___ ophthalmologist for the first time."',
    options: ['a', 'an', 'the', 'no article'],
    correctIndex: 1, difficulty: 'medium',
    explanation: '"ophthalmologist" empieza con sonido vocálico /ɒ/, así que se usa "an". El artículo depende del SONIDO inicial, no de la letra.',
  },
  {
    id: 'pos-q13', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'Which of these words is a verb?',
    options: ['diagnosis', 'diagnostic', 'diagnostician', 'diagnose'],
    correctIndex: 3, difficulty: 'medium',
    explanation: 'diagnose es el verbo (diagnosticar). diagnosis es sustantivo, diagnostic adjetivo y diagnostician el sustantivo que nombra a la persona.',
  },
  {
    id: 'pos-q14', topicId: 'ingles-parts-of-speech', type: 'multiple-choice',
    question: 'Which of these is a conjunctive adverb?',
    options: ['and', 'under', 'however', 'sore'],
    correctIndex: 2, difficulty: 'hard',
    explanation: 'however (sin embargo) es un adverbio conjuntivo. "and" es conjunción coordinante, "under" preposición y "sore" adjetivo.',
  },

  // ─── WORD FORMS & PHRASAL VERBS (wfp) ────────────────────────────────
  {
    id: 'wfp-q1', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Complete with the correct form: "After the tests, the doctor reached a clear ___."',
    options: ['diagnose', 'diagnosed', 'diagnosing', 'diagnosis'],
    correctIndex: 3, difficulty: 'medium',
    explanation: 'Tras el artículo "a" se necesita el SUSTANTIVO diagnosis. diagnose es el verbo. Verbo → sustantivo: diagnose → diagnosis.',
  },
  {
    id: 'wfp-q2', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Complete: "The pharmacist could not read the ___ the doctor had written."',
    options: ['prescribe', 'prescribed', 'prescription', 'prescriptive'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'Se necesita el sustantivo prescription (la receta). El verbo es prescribe. "I prescribed antibiotics." / "I wrote a prescription."',
  },
  {
    id: 'wfp-q3', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Complete: "The lab found an ___ amount of bile in the blood."',
    options: ['excess', 'excessively', 'exceed', 'excessive'],
    correctIndex: 3, difficulty: 'medium',
    explanation: 'Antes del sustantivo "amount" se necesita el ADJETIVO excessive. excess es sustantivo ("an excess of bile") y exceed el verbo.',
  },
  {
    id: 'wfp-q4', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Complete: "The vaccine should make you ___ to tuberculosis."',
    options: ['immunity', 'immunize', 'immune', 'immunly'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'Tras "make you" se necesita el adjetivo immune. immunity es el sustantivo ("give immunity to…"). "immunly" no existe.',
  },
  {
    id: 'wfp-q5', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Complete: "She has a physical ___ on amphetamines."',
    options: ['dependent', 'depend', 'dependence', 'dependently'],
    correctIndex: 2, difficulty: 'hard',
    explanation: 'Tras el adjetivo "physical" se necesita el SUSTANTIVO dependence (con e). El adjetivo es dependent: "She is physically dependent on…". Ojo con la escritura: no es "dependance".',
  },
  {
    id: 'wfp-q6', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Complete: "The blood sample was sent to the lab for ___."',
    options: ['analyze', 'analysis', 'analytic', 'analyzed'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Tras la preposición "for" se necesita el sustantivo analysis. analyze es el verbo. Verbo → sustantivo: analyze → analysis.',
  },
  {
    id: 'wfp-q7', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Complete: "Recovery after the surgery was slow and ___."',
    options: ['pain', 'painfully', 'pained', 'painful'],
    correctIndex: 3, difficulty: 'medium',
    explanation: 'Tras el verbo copulativo "was" se necesita el adjetivo painful (doloroso). pain es el sustantivo y painfully el adverbio.',
  },
  {
    id: 'wfp-q8', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Choose the phrasal verb meaning "to faint": "The donor ___ during the blood draw."',
    options: ['dropped off', 'took after', 'brought up', 'passed out'],
    correctIndex: 3, difficulty: 'medium',
    explanation: 'pass out = desmayarse (to faint). drop off = quedarse dormido; take after = parecerse a un padre; bring up = expectorar. Son verbos frasales del mismo listado.',
  },
  {
    id: 'wfp-q9', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Choose the phrasal verb meaning "to fall asleep": "Elderly patients sometimes ___ in the afternoon."',
    options: ['pass out', 'knock out', 'drop off', 'give up'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'drop off = quedarse dormido. No confundir con pass out (desmayarse) ni knock out (dejar inconsciente de un golpe).',
  },
  {
    id: 'wfp-q10', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Choose the phrasal verb: "The physiotherapy helped him ___ the mucus from his lungs."',
    options: ['bring up', 'take off', 'look after', 'get around'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'bring up = expectorar, sacar material como moco de los pulmones. take off = quitarse ropa; look after = cuidar; get around = desplazarse.',
  },
  {
    id: 'wfp-q11', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Identify the phrasal verb and tense: "The nurses ___ her very well." (present continuous)',
    options: ['are looking after', 'are passing out', 'are breaking down', 'are going down'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'look after = cuidar, atender las necesidades de alguien. En presente continuo: are looking after. break down = ponerse a llorar; go down = disminuir.',
  },
  {
    id: 'wfp-q12', topicId: 'ingles-word-forms', type: 'multiple-choice',
    question: 'Choose the phrasal verb: "With those eyes, she really ___ her mother."',
    options: ['takes off', 'looks after', 'takes after', 'gets over'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'take after = parecerse a uno de los padres. take off = quitarse (ropa); look after = cuidar; get over = recuperarse de una enfermedad o disgusto.',
  },
]
