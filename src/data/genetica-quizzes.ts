import type { Question } from '../types'

// Genética Básica — Semana 1 (Clases 1–2). Objetivo: 3:1 vs 9:3:3:1, tipos de
// dominancia, herencia mitocondrial materna y grupos sanguíneos/paternidad.
export const geneticaQuestions: Question[] = [
  {
    id: 'gen-basq-q1', topicId: 'genetica-conceptos', type: 'multiple-choice',
    question: 'La posición fija que ocupa un gen dentro del cromosoma se llama:',
    options: ['Alelo', 'Locus', 'Genotipo', 'Fenotipo'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'El locus es la posición del gen en el cromosoma. El alelo es cada variante del gen; el genotipo es la combinación de alelos y el fenotipo el rasgo observable.',
  },
  {
    id: 'gen-basq-q2', topicId: 'genetica-conceptos', type: 'multiple-choice',
    question: 'Un individuo con dos alelos distintos para un gen (Aa) es:',
    options: ['Homocigoto dominante', 'Homocigoto recesivo', 'Heterocigoto', 'Haploide'],
    correctIndex: 2, difficulty: 'easy',
    explanation: 'Dos alelos distintos = heterocigoto (Aa). Homocigoto es cuando son iguales (AA o aa); haploide se refiere al número de juegos cromosómicos.',
  },
  {
    id: 'gen-basq-q3', topicId: 'genetica-conceptos', type: 'multiple-choice',
    question: 'Cuando el heterocigoto muestra un fenotipo INTERMEDIO (mezcla de ambos), se trata de:',
    options: ['Dominancia completa', 'Dominancia incompleta', 'Codominancia', 'Epistasis'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'La dominancia incompleta da un fenotipo intermedio (rojo × blanco → rosa). En la codominancia se expresan ambos alelos por separado (AB); en la completa, el dominante enmascara al recesivo.',
  },
  {
    id: 'gen-basq-q4', topicId: 'genetica-conceptos', type: 'multiple-choice',
    question: 'Que dos gemelas idénticas desarrollen rasgos distintos según su ambiente, con el mismo ADN, ilustra:',
    options: ['Una mutación', 'La epigenética', 'La codominancia', 'La segregación'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'La epigenética: el ambiente cambia la expresión de los genes (el fenotipo) sin alterar el genotipo. No hay mutación del ADN.',
  },
  {
    id: 'gen-basq-q5', topicId: 'genetica-conceptos', type: 'multiple-choice',
    question: 'La fotografía de difracción de rayos X (Photo 51) que reveló la doble hélice del ADN fue tomada por:',
    options: ['Watson y Crick', 'Rosalind Franklin', 'Gregor Mendel', 'Robert Hooke'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'Rosalind Franklin tomó la Photo 51 (1952). Watson y Crick la usaron en 1953 para su modelo, sin darle crédito. Hooke acuñó «célula»; Mendel formuló las leyes de la herencia.',
  },
  {
    id: 'gen-basq-q6', topicId: 'genetica-mendel', type: 'multiple-choice',
    question: 'Al cruzar dos heterocigotos (Aa × Aa), la 2.ª ley de Mendel predice una proporción fenotípica de:',
    options: ['1:1', '3:1', '9:3:3:1', '1:2:1'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'La ley de la segregación da 3:1 (fenotipos) en la F2. El 1:2:1 es la proporción de GENOTIPOS; el 9:3:3:1 es de un dihíbrido (3.ª ley).',
  },
  {
    id: 'gen-basq-q7', topicId: 'genetica-mendel', type: 'multiple-choice',
    question: 'La proporción 9:3:3:1 corresponde a:',
    options: ['Un cruce monohíbrido Aa × Aa', 'Un cruce dihíbrido AaBb × AaBb (transmisión independiente)', 'Un cruce de razas puras AA × aa', 'La herencia mitocondrial'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'El 9:3:3:1 (16 combinaciones) surge de un dihíbrido AaBb × AaBb: la 3.ª ley (transmisión independiente). El monohíbrido da 3:1.',
  },
  {
    id: 'gen-basq-q8', topicId: 'genetica-mendel', type: 'multiple-choice',
    question: 'Según la 1.ª ley (uniformidad), cruzar dos razas puras AA × aa produce una F1:',
    options: ['Mitad dominante, mitad recesiva', 'Uniforme, con el fenotipo dominante', 'En proporción 3:1', 'Con fenotipo intermedio siempre'],
    correctIndex: 1, difficulty: 'easy',
    explanation: 'La 1.ª ley: AA × aa da una F1 uniforme (todos Aa) con el fenotipo dominante. El 3:1 aparece en la F2 (2.ª ley).',
  },
  {
    id: 'gen-basq-q9', topicId: 'genetica-mendel', type: 'multiple-choice',
    question: 'Unos padres de grupo sanguíneo A y O, respecto a un hijo de grupo AB:',
    options: ['Pueden tenerlo sin problema', 'NO pueden tenerlo (se excluye la paternidad)', 'Solo si ambos son heterocigotos', 'Solo si el hijo es Rh negativo'],
    correctIndex: 1, difficulty: 'hard',
    explanation: 'Ni el progenitor A ni el O aportan el alelo B, así que un hijo AB es imposible: el grupo sanguíneo sirve para EXCLUIR paternidad, no para confirmarla.',
  },
  {
    id: 'gen-basq-q10', topicId: 'genetica-mendel', type: 'multiple-choice',
    question: 'El ADN mitocondrial se hereda:',
    options: ['Solo del padre', 'Solo de la madre', 'De ambos por igual', 'Al azar en cada célula'],
    correctIndex: 1, difficulty: 'medium',
    explanation: 'La herencia mitocondrial es exclusivamente materna: la cola del espermatozoide (con sus mitocondrias) se desprende y no entra al óvulo, así que todas las mitocondrias vienen de la madre.',
  },
]
