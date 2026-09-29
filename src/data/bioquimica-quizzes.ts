import type { Question } from '../types'

// Bioquímica I — Semana 1, Clase 1: metabolismo digestivo.
export const bioquimicaQuestions: Question[] = [
  // ═══════════ Semana 1 · Clase 1 — Metabolismo digestivo (bio-metq) ═══════════
  {
    id: 'bio-metq-q1', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: 'El metabolismo se define como:',
    options: ['El conjunto de procesos químicos, físicos, moleculares y enzimáticos, sobre todo celulares', 'La ruptura de alimentos en la boca', 'El paso de nutrientes a la sangre', 'La eliminación de las heces'],
    correctIndex: 0, difficulty: 'easy',
    explanation: 'El metabolismo reúne los procesos químicos, físicos, moleculares y enzimáticos que ocurren principalmente dentro de la célula para obtener moléculas y energía y sintetizar componentes.',
  },
  {
    id: 'bio-metq-q2', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: 'El paso de moléculas pequeñas a través del epitelio intestinal hacia la sangre o la linfa se llama:',
    options: ['Digestión', 'Metabolismo', 'Absorción', 'Hidrólisis'],
    correctIndex: 2, difficulty: 'easy',
    explanation: 'La digestión rompe las macromoléculas; la absorción las hace atravesar el epitelio hacia sangre o linfa; el metabolismo las transforma en la célula.',
  },
  {
    id: 'bio-metq-q3', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: 'La conversión de aminoácidos en proteínas es un ejemplo de:',
    options: ['Catabolismo, que libera energía', 'Digestión luminal', 'Maladigestión', 'Anabolismo, que consume energía'],
    correctIndex: 3, difficulty: 'medium',
    explanation: 'Anabolismo = «armar»: síntesis de moléculas grandes a partir de pequeñas, con consumo de energía (glucosa → glucógeno, aminoácidos → proteínas).',
  },
  {
    id: 'bio-metq-q4', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: 'El catabolismo se caracteriza por:',
    options: ['Degradar moléculas complejas y poder liberar energía', 'Sintetizar moléculas complejas y consumir energía', 'Ocurrir solo en la boca', 'No usar enzimas'],
    correctIndex: 0, difficulty: 'easy',
    explanation: 'Catabolismo = «cortar»: degrada moléculas grandes a pequeñas (p. ej., triglicéridos → ácidos grasos + glicerol) y puede liberar energía.',
  },
  {
    id: 'bio-metq-q5', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: 'La enzima de la saliva que inicia la digestión de los glúcidos es:',
    options: ['Pepsina', 'Lipasa pancreática', 'α-amilasa salival (ptialina)', 'Lactasa'],
    correctIndex: 2, difficulty: 'easy',
    explanation: 'La α-amilasa salival o ptialina inicia la hidrólisis del almidón en la boca.',
  },
  {
    id: 'bio-metq-q6', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: 'La glándula salival de secreción predominantemente serosa (rica en enzimas) es la:',
    options: ['Parótida', 'Sublingual', 'Submandibular', 'Tiroides'],
    correctIndex: 0, difficulty: 'medium',
    explanation: 'Parótida → serosa; submandibular → mixta; sublingual → predominantemente mucosa.',
  },
  {
    id: 'bio-metq-q7', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: '¿Dónde inicia la digestión de las proteínas?',
    options: ['En la boca', 'En el estómago', 'En el colon', 'En el hígado'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Las proteínas empiezan a digerirse en el estómago (pepsina activada por el HCl) y continúan en duodeno y yeyuno. En la boca solo inician los glúcidos.',
  },
  {
    id: 'bio-metq-q8', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: '¿Por qué la amilasa salival deja de actuar en el estómago?',
    options: ['Porque el estómago no tiene agua', 'Porque la bilis la destruye', 'Porque se absorbe en el esófago', 'Porque el medio ácido del HCl altera su estructura y la inactiva'],
    correctIndex: 3, difficulty: 'medium',
    explanation: 'La amilasa salival funciona a pH ≈ 7; el pH ácido del estómago la inactiva. La amilasa pancreática continúa después en el intestino delgado.',
  },
  {
    id: 'bio-metq-q9', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: 'La fase de la digestión en la que actúan las enzimas del borde en cepillo y se absorben los nutrientes es la:',
    options: ['Fase luminal', 'Fase mucosa', 'Fase de transporte', 'Fase cefálica'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Luminal = hidrólisis en la luz; mucosa = hidrólisis final en el borde en cepillo + absorción; transporte = paso a sangre o linfa.',
  },
  {
    id: 'bio-metq-q10', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: 'La función de las sales biliares en la digestión de los lípidos es:',
    options: ['Hidrolizar los triglicéridos', 'Neutralizar el quimo', 'Emulsificar las grasas para aumentar la superficie de acción de la lipasa', 'Absorber el colesterol en el colon'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'Las sales biliares emulsifican: dividen la grasa en gotas pequeñas para que la lipasa pancreática actúe sobre más superficie.',
  },
  {
    id: 'bio-metq-q11', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: 'Además de enzimas, el páncreas secreta ___, que neutraliza el quimo ácido:',
    options: ['Pepsina', 'Gastrina', 'Mucina', 'Bicarbonato'],
    correctIndex: 3, difficulty: 'medium',
    explanation: 'El bicarbonato pancreático (estimulado por la secretina) neutraliza el ácido que llega del estómago.',
  },
  {
    id: 'bio-metq-q12', topicId: 'bioquimica-metabolismo-digestivo', type: 'multiple-choice',
    question: 'Una persona con déficit de lactasa presenta distensión, gases y diarrea tras tomar leche. Esto es un ejemplo de:',
    options: ['Malabsorción de grasas', 'Exceso de amilasa', 'Maladigestión: la lactosa no se hidroliza y se fermenta en el colon', 'Falla de la bilis'],
    correctIndex: 2, difficulty: 'medium',
    explanation: 'Sin lactasa, la lactosa no se degrada (maladigestión), llega al colon, se fermenta y ejerce efecto osmótico → distensión, gases y diarrea.',
  },
]
