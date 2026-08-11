/*
 * Inglés Médico I (UAD · IN01005) — Proyecto Integrador de la Semana 2.
 * Worksheet de 13 reactivos + crucigrama de terminología (15 pistas),
 * transcritos de las capturas de la clase. Es PRÁCTICA de repaso para preparar
 * la entrega oficial en PDF, no la sustituye.
 *
 * `question`/`options` en inglés (verbatim del worksheet); `explanation` en
 * español. Se agrega al spread de quizzes.ts con topicId 'ingles-word-parts'
 * para que aparezca bajo ese tema.
 *
 * Notas de reconciliación (ver reporte):
 *  - Crucigrama down-5 "pain": válidos -algia y -dynia; se marca -dynia y se
 *    nota -algia en la explicación.
 *  - Crucigrama down-7 "x-ray record of the spinal cord": la clave dice
 *    myelography (-graphy = proceso de registrar). El "registro" en sí sería
 *    myelogram (-gram); se marca myelography por la clave y se nota el matiz.
 */

import type { Question } from '../types'

export const inglesProyectoS2Questions: Question[] = [
  // ─── Worksheet (13 reactivos verbatim) ───────────────────────────────
  {
    id: 'ips2-w1', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The prefix that means "without" or "absence of" is:',
    options: ['an', 'endo', 'pan', 'ana', 'aden/o'],
    correctIndex: 0, difficulty: 'easy',
    explanation: 'a-/an- = sin, ausencia de (anemia = sin sangre suficiente). endo- = dentro; pan- = todo; aden/o = glándula.',
  },
  {
    id: 'ips2-w2', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The suffix that means "pain" is:',
    options: ['cele', 'ante', 'adip', 'algia', 'apheresis'],
    correctIndex: 3, difficulty: 'easy',
    explanation: '-algia = dolor (neuralgia, arthralgia). -cele = hernia; adip/o = grasa.',
  },
  {
    id: 'ips2-w3', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The suffix "-ary" is defined as:',
    options: ['pertaining to', 'referring to an enzyme', 'precursor', 'state of or condition of'],
    correctIndex: 0, difficulty: 'medium',
    explanation: '-ary = relativo a, perteneciente a (pulmonary = relativo al pulmón). Como -ac, -al, -ar.',
  },
  {
    id: 'ips2-w4', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'The medical term that means "absence of carbon dioxide" is:',
    options: ['acapnia', 'aphonia', 'anticapnia', 'antecapnia'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'a- (sin) + -capnia (dióxido de carbono) = acapnia. aphonia = sin voz.',
  },
  {
    id: 'ips2-w5', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'What does a barometer measure?',
    options: ['bacteria', 'life', 'eyelid', 'pressure'],
    correctIndex: 3, difficulty: 'easy',
    explanation: 'bar/o = presión + -meter (medir) = barómetro, mide presión.',
  },
  {
    id: 'ips2-w6', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'What color is the protein albumin?',
    options: ['red', 'blue', 'white', 'black'],
    correctIndex: 2, difficulty: 'easy',
    explanation: 'albumin viene del latín albus = blanco (como en "álbum", superficie blanca).',
  },
  {
    id: 'ips2-w7', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Afferent vessels carry lymph fluid in what direction?',
    options: ['away from the lymph node', 'toward the lymph node'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'afferent = que lleva HACIA (ad- + ferre, llevar). efferent lleva desde/fuera. Los aferentes traen la linfa hacia el ganglio.',
  },
  {
    id: 'ips2-w8', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'What is found in adipose tissue?',
    options: ['urea', 'air', 'amnion', 'fat'],
    correctIndex: 3, difficulty: 'easy',
    explanation: 'adip/o = grasa; el tejido adiposo almacena grasa.',
  },
  {
    id: 'ips2-w9', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'What is drooping in blepharoptosis?',
    options: ['arm', 'eyelids', 'atrium', 'arteries'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'blephar/o = párpado + -ptosis (caída, descenso) = caída del párpado.',
  },
  {
    id: 'ips2-w10', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Androgens are hormones that are ______ producing.',
    options: ['female', 'male'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'andr/o = varón, masculino; los andrógenos producen caracteres masculinos.',
  },
  {
    id: 'ips2-w11', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'What is inflamed in adenitis?',
    options: ['adrenal glands', 'glands', 'appendix', 'ear'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'aden/o = glándula + -itis (inflamación) = inflamación de una glándula. (adren/o sería glándula suprarrenal.)',
  },
  {
    id: 'ips2-w12', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'What is being viewed in an arthroscopy?',
    options: ['arteries', 'fatty plaque', 'veins', 'joints'],
    correctIndex: 3, difficulty: 'easy',
    explanation: 'arthr/o = articulación + -scopy (examen visual) = ver dentro de una articulación. Nota: arthr/o + -scope conserva la o (sufijo consonántico).',
  },
  {
    id: 'ips2-w13', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'In menarche, what is happening to the menstrual flow?',
    options: ['it is beginning', 'it is ending'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'men/o = menstruación + -arche (comienzo) = primera menstruación. (El final sería menopause.)',
  },

  // ─── Crucigrama: definición → término ─────────────────────────────────
  // Across
  {
    id: 'ips2-x1', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: flow or discharge from the nose.',
    options: ['rhinitis', 'rhinorrhea', 'rhinoplasty', 'rhinorrhagia'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'rhin/o (nariz) + -rrhea (flujo, secreción) = rhinorrhea (rinorrea).',
  },
  {
    id: 'ips2-x2', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: excision or removal of the tonsils.',
    options: ['tonsillitis', 'tonsillotomy', 'tonsillectomy', 'tonsillostomy'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'tonsill/o + -ectomy (extirpación) = tonsillectomy (amigdalectomía).',
  },
  {
    id: 'ips2-x3', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: the suffix meaning "tumor" or "mass".',
    options: ['-osis', '-oma', '-megaly', '-plasm'],
    correctIndex: 1, difficulty: 'easy',
    explanation: '-oma = tumor, masa (carcinoma, lipoma). -osis = condición anormal; -megaly = agrandamiento.',
  },
  {
    id: 'ips2-x4', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: the suffix meaning "new opening".',
    options: ['-tomy', '-stomy', '-ectomy', '-plasty'],
    correctIndex: 1, difficulty: 'medium',
    explanation: '-stomy (a veces -ostomy, con vocal de enlace) = creación de una abertura nueva (colostomy). -tomy = incisión; -ectomy = extirpación.',
  },
  {
    id: 'ips2-x5', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: pain of a joint.',
    options: ['arthritis', 'arthralgia', 'arthroscopy', 'arthroplasty'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'arthr (articulación) + -algia (dolor) = arthralgia. Sin vocal de enlace porque -algia empieza por vocal.',
  },
  {
    id: 'ips2-x6', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: new opening into the colon from outside the body.',
    options: ['colectomy', 'colitis', 'colostomy', 'colotomy'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'col/o (colon) + -stomy (abertura nueva) = colostomy. colectomy = extirpación del colon.',
  },
  // Down
  {
    id: 'ips2-x7', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: the suffix meaning "treatment".',
    options: ['-plasty', '-therapy', '-pexy', '-tomy'],
    correctIndex: 1, difficulty: 'easy',
    explanation: '-therapy = tratamiento (chemotherapy, radiotherapy).',
  },
  {
    id: 'ips2-x8', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: a cancerous tumor.',
    options: ['carcinoma', 'myoma', 'adenoma', 'hematoma'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'carcin/o (cáncer) + -oma (tumor) = carcinoma, tumor maligno. myoma/adenoma suelen ser benignos; hematoma es una colección de sangre.',
  },
  {
    id: 'ips2-x9', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: inflammation of a joint.',
    options: ['arthralgia', 'arthritis', 'arthrosis', 'arthroscopy'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'arthr + -itis (inflamación) = arthritis. Se elimina la vocal de enlace porque -itis empieza por vocal.',
  },
  {
    id: 'ips2-x10', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: the suffix meaning "pain".',
    options: ['-dynia', '-cele', '-rrhea', '-megaly'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'Tanto -dynia como -algia significan dolor (ambos válidos para esta pista). Se marca -dynia; -algia es el otro sufijo de dolor (como en arthralgia).',
  },
  {
    id: 'ips2-x11', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: blood in the urine.',
    options: ['hematoma', 'hematuria', 'hemostasis', 'hemolysis'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'hemat/o (sangre) + -uria (orina) = hematuria (sangre en la orina).',
  },
  {
    id: 'ips2-x12', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: x-ray record of the spinal cord.',
    options: ['myelogram', 'myelography', 'myelitis', 'myeloma'],
    correctIndex: 1, difficulty: 'hard',
    explanation: 'Según la clave: myel/o (médula espinal) + -graphy (proceso de registrar) = myelography. Matiz: el registro en sí es myelogram (-gram = registro); si la pista pide el "record", myelogram también sería defendible.',
  },
  {
    id: 'ips2-x13', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: the suffix meaning "disease".',
    options: ['-pathy', '-osis', '-itis', '-logy'],
    correctIndex: 0, difficulty: 'easy',
    explanation: '-pathy = enfermedad (neuropathy, cardiomyopathy).',
  },
  {
    id: 'ips2-x14', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: the suffix meaning "hardening".',
    options: ['-stenosis', '-sclerosis', '-malacia', '-ectasis'],
    correctIndex: 1, difficulty: 'medium',
    explanation: '-sclerosis = endurecimiento (arteriosclerosis). -stenosis = estrechamiento; -malacia = reblandecimiento.',
  },
  {
    id: 'ips2-x15', topicId: 'ingles-word-parts', type: 'multiple-choice',
    question: 'Crossword: the suffix meaning "inflammation".',
    options: ['-osis', '-itis', '-emia', '-oma'],
    correctIndex: 1, difficulty: 'easy',
    explanation: '-itis = inflamación (arthritis, gastritis, dermatitis).',
  },
]
