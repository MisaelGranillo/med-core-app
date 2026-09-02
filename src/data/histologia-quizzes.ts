import type { Question } from '../types'

// Histología I — Semana 1 (Clases 1–2). Objetivo: los ★ del profesor, tinción
// acidófilo/basófilo, orden de resoluciones, regeneración por tejido y la técnica.
export const histologiaQuestions: Question[] = [
  {
    id: 'his-q1', topicId: 'histologia-introduccion', type: 'multiple-choice',
    question: 'Histología I cubre los tejidos epitelial y conectivo. ¿Qué tejidos quedan para Histología II?',
    options: ['Óseo y cartilaginoso', 'Muscular y nervioso', 'Sanguíneo y linfático', 'Adiposo y epitelial'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'El muscular y el nervioso se estudian en Histología II. El óseo, cartilaginoso, adiposo, sanguíneo y linfático son variedades del conectivo, que sí entran en Histología I.',
  },
  {
    id: 'his-q2', topicId: 'histologia-introduccion', type: 'multiple-choice',
    question: 'Ordenando de MAYOR a MENOR capacidad de regeneración, ¿cuál es correcto?',
    options: ['Nervioso > muscular > conectivo > epitelial', 'Epitelial > conectivo > muscular > nervioso', 'Muscular > epitelial > nervioso > conectivo', 'Conectivo > epitelial > nervioso > muscular'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Epitelial (alta) > conectivo (variable) > muscular (limitada) > nervioso (mínima). Por eso las lesiones nerviosas y cardíacas dejan secuela.',
  },
  {
    id: 'his-q3', topicId: 'histologia-introduccion', type: 'multiple-choice',
    question: '¿Por qué un infarto deja cicatriz en lugar de músculo nuevo?',
    options: ['Porque el corazón no recibe sangre', 'Porque los cardiomiocitos maduros no se dividen', 'Porque el tejido epitelial lo reemplaza', 'Porque la fijación daña el tejido'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Los cardiomiocitos (y las neuronas maduras) no se dividen: la zona lesionada se repara con cicatriz fibrosa, no con músculo funcional.',
  },
  {
    id: 'his-q4', topicId: 'histologia-introduccion', type: 'multiple-choice',
    question: 'Una célula pequeña, sin organelos membranosos y con su material genético en un nucleoide es:',
    options: ['Eucariota', 'Procariota', 'Una célula muscular', 'Un gameto'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'Es una procariota: sin núcleo definido ni organelos membranosos. La eucariota es más grande, con núcleo y organelos membranosos.',
  },
  {
    id: 'his-q5', topicId: 'histologia-microscopia-tecnica', type: 'multiple-choice',
    question: '★ ¿Cuál de estos microscopios tiene la MAYOR resolución?',
    options: ['MET (transmisión), 0.2 nm', 'MEB (barrido), 2.5 nm', 'Fuerza atómica, 50 pm', 'Contraste de fase, 0.2 μm'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'El microscopio de fuerza atómica (50 pm) tiene la mayor resolución. Ojo: 50 pm < 0.2 nm, así que supera al MET.',
  },
  {
    id: 'his-q6', topicId: 'histologia-microscopia-tecnica', type: 'multiple-choice',
    question: '★ El microscopio que permite observar CÉLULAS VIVAS sin teñir, por diferencias de índice de refracción, es el de:',
    options: ['Campo claro', 'Contraste de fase', 'Fluorescencia', 'Barrido (MEB)'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'El contraste de fase observa células vivas sin teñir. El campo claro requiere muestra teñida; la fluorescencia usa marcadores; el MEB, muestra procesada.',
  },
  {
    id: 'his-q7', topicId: 'histologia-microscopia-tecnica', type: 'multiple-choice',
    question: '★ En el microscopio de campo oscuro, la imagen se forma porque al objetivo solo entra la luz:',
    options: ['Directa que atraviesa la muestra', 'Refractada por la muestra (fondo negro)', 'Ultravioleta', 'Emitida por fluorescencia'],
    correctIndex: 1, difficulty: 'hard',
    explanation: 'En campo oscuro solo la luz refractada por la muestra llega al objetivo, sobre un fondo negro. La luz directa se bloquea. Se usa, p. ej., para ver Treponema (sífilis).',
  },
  {
    id: 'his-q8', topicId: 'histologia-microscopia-tecnica', type: 'multiple-choice',
    question: '★ La pieza del microscopio óptico que enfoca (concentra) el haz de luz SOBRE la muestra es el:',
    options: ['Objetivo', 'Ocular', 'Condensador', 'Diafragma'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'El condensador concentra la luz sobre la muestra. La lente OBJETIVO, en cambio, recoge la luz que ya atravesó la muestra y forma la imagen.',
  },
  {
    id: 'his-q9', topicId: 'histologia-microscopia-tecnica', type: 'multiple-choice',
    question: '★ En la tinción de rutina H&E, la HEMATOXILINA tiñe las estructuras:',
    options: ['Acidófilas, de rosa', 'Basófilas, de azul (núcleos)', 'Elásticas, de negro', 'Con glucógeno, de magenta'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'La hematoxilina tiñe lo basófilo de azul (núcleos). La eosina tiñe lo acidófilo de rosa (citoplasma). Es la trampa clásica del examen.',
  },
  {
    id: 'his-q10', topicId: 'histologia-microscopia-tecnica', type: 'multiple-choice',
    question: 'El primer paso de la técnica histológica, tras obtener la muestra, es:',
    options: ['La inclusión en parafina', 'La fijación (formol 4–10 %)', 'El corte con microtomo', 'La tinción'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Orden: obtención → FIJACIÓN (formol) → deshidratación → aclaramiento → inclusión → corte → tinción → montaje. La fijación conserva el tejido antes de procesarlo.',
  },
  {
    id: 'his-q11', topicId: 'histologia-microscopia-tecnica', type: 'multiple-choice',
    question: '★ Para microscopía electrónica, el ultramicrotomo fija con tetróxido de osmio (OsO₄) porque:',
    options: ['Corta más grueso', 'Conserva las membranas', 'Tiñe el ADN', 'Deshidrata la muestra'],
    correctIndex: 1, difficulty: 'hard',
    explanation: 'El OsO₄ conserva las membranas y da contraste para el MET; el ultramicrotomo corta 50–150 nm. El microtomo óptico corta 3–5 μm.',
  },
  {
    id: 'his-q12', topicId: 'histologia-microscopia-tecnica', type: 'multiple-choice',
    question: 'La tinción de PAS, positiva para glucógeno y polisacáridos, es útil en el diagnóstico de:',
    options: ['Enfermedad celíaca', 'Fracturas', 'Miopatías mitocondriales', 'Sífilis'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'El PAS marca glucógeno/polisacáridos y ayuda en la enfermedad celíaca. El Feulgen es específico de ADN; la fucsina-resorcina, de fibras elásticas.',
  },
]
