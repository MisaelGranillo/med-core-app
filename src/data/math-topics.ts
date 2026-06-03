import type { Topic } from '../types'

export const mathTopics: Topic[] = [
  {
    id: 'aritmetica',
    title: 'Aritmética',
    subtitle: 'Fundamentos numéricos para la resolución de problemas en ciencias de la salud',
    colorKey: 'aritmetica',
    emoji: '🔢',
    keyPoints: [
      'El sistema decimal usa clases y órdenes para leer y escribir números correctamente.',
      'El Sistema Internacional se basa en múltiplos y submúltiplos de 10.',
      'Conoce los tipos de números y su jerarquía: reales, racionales, irracionales, enteros, naturales.',
      'La teoría de conjuntos organiza y relaciona elementos de forma lógica.',
      'Domina los operadores elementales y sus propiedades.',
      'La regla de tres y el porcentaje resuelven problemas de proporcionalidad.',
      'Aplica la aritmética en situaciones reales: dosificación, diluciones, IMC.',
    ],
    sections: [
      {
        id: 'ari-1', number: 1, title: 'Sistema Decimal',
        keyTerms: ['sistema decimal', 'base 10', 'posicional', 'millones', 'miles', 'unidades', 'clases', 'órdenes'],
        blocks: [
          { type: 'paragraph', content: 'Nuestro sistema de numeración es posicional y decimal (base 10). El valor de cada dígito depende de su posición.' },
          { type: 'table', title: 'Clases y Órdenes',
            data: { headers: ['Clase', 'Millones', '', '', 'Miles', '', '', 'Unidades', '', ''],
              rows: [['Orden', 'Centenas de millón (CMi)', 'Decenas de millón (DMi)', 'Unidades de millón (UMi)', 'Centenas de mil (CM)', 'Decenas de mil (DM)', 'Unidades de mil (UM)', 'Centenas (C)', 'Decenas (D)', 'Unidades (U)']],
            },
          },
          { type: 'note', content: 'Ejemplo de lectura: 7,645,630 = 7 millones 645 mil 630. La coma separa las clases.' },
        ],
      },
      {
        id: 'ari-2', number: 2, title: 'Sistema Internacional de Unidades (SI)',
        keyTerms: ['múltiplos', 'submúltiplos', 'tera', 'giga', 'mega', 'kilo', 'hecto', 'deca', 'deci', 'centi', 'mili', 'micro', 'nano', 'pico'],
        blocks: [
          { type: 'table', title: 'Múltiplos y Submúltiplos del SI',
            data: {
              headers: ['Factor', 'Prefijo (múltiplo)', 'Símbolo', 'Prefijo (submúltiplo)', 'Símbolo', 'Factor'],
              rows: [
                ['10¹²', 'tera', 'T', 'deci', 'd', '10⁻¹'],
                ['10⁹', 'giga', 'G', 'centi', 'c', '10⁻²'],
                ['10⁶', 'mega', 'M', 'mili', 'm', '10⁻³'],
                ['10³', 'kilo', 'k', 'micro', 'μ', '10⁻⁶'],
                ['10²', 'hecto', 'h', 'nano', 'n', '10⁻⁹'],
                ['10¹', 'deca', 'da', 'pico', 'p', '10⁻¹²'],
              ],
            },
          },
          { type: 'comparison',
            left: { title: 'Hacia la derecha (a submúltiplos)', items: ['MULTIPLICAR por potencias de 10', 'Ejemplo: 3.5 km → m → ×10³ = 3,500 m'] },
            right: { title: 'Hacia la izquierda (a múltiplos)', items: ['DIVIDIR por potencias de 10', 'Ejemplo: 250 mg → g → ÷10³ = 0.25 g'] },
          },
        ],
      },
      {
        id: 'ari-3', number: 3, title: 'Escala de Conversión',
        keyTerms: ['conversión', 'kilo', 'hecto', 'deca', 'unidad', 'deci', 'centi', 'mili', 'paso'],
        blocks: [
          { type: 'list', title: 'Escala de mayor a menor',
            items: ['kilo (k) → hecto (h) → deca (da) → UNIDAD → deci (d) → centi (c) → mili (m)',
              'Cada paso a la DERECHA → ×10', 'Cada paso a la IZQUIERDA → ÷10'],
          },
          { type: 'list', title: 'Ejemplos prácticos',
            items: [
              '3.5 km = 3,500 m → 3 pasos a la derecha → ×10³',
              '250 mg = 0.25 g → 3 pasos a la izquierda → ÷10³',
              '0.075 L = 75 mL → 3 pasos a la derecha → ×10³',
            ],
          },
        ],
      },
      {
        id: 'ari-4', number: 4, title: 'Tipos de Números',
        keyTerms: ['números reales', 'racionales', 'irracionales', 'enteros', 'naturales', 'fracción', 'π', 'raíz cuadrada'],
        blocks: [
          { type: 'list', title: 'Jerarquía de los números (de mayor a menor conjunto)',
            items: [
              'REALES (R): Todos los números.',
              '↳ RACIONALES (Q): Pueden representarse como fracción p/q (q≠0). Ej: 1/2, 0.75, -3.',
              '   ↳ ENTEROS (Z): Incluyen negativos, cero y positivos. Z = {..., -2, -1, 0, 1, 2, ...}.',
              '      ↳ NATURALES (N): Números para contar elementos. N = {1, 2, 3, ...}.',
              '↳ IRRACIONALES: No pueden expresarse como fracción. Ejemplos: √2, π, e.',
            ],
          },
          { type: 'note', content: 'Los irracionales tienen expansión decimal infinita NO periódica. Ej: π = 3.14159265358979...' },
        ],
      },
      {
        id: 'ari-5', number: 5, title: 'Teoría de Conjuntos',
        keyTerms: ['conjunto', 'elemento', 'unión', 'intersección', 'complemento', 'diferencia', 'diagrama de Venn', 'subconjunto'],
        blocks: [
          { type: 'table', title: 'Símbolos básicos',
            data: {
              headers: ['Símbolo', 'Significado'],
              rows: [
                ['∈', 'Pertenece a'], ['∉', 'No pertenece a'], ['⊆', 'Está contenido en (subconjunto)'],
                ['∅', 'Conjunto vacío'], ['∪', 'Unión'], ['∩', 'Intersección'],
                ['<', 'Menor que'], ['>', 'Mayor que'],
              ],
            },
          },
          { type: 'list', title: 'Diagramas de Venn — Operaciones',
            items: [
              'Unión (A∪B): Todos los elementos que pertenecen a A, a B o a ambos.',
              'Intersección (A∩B): Solo los elementos comunes a A y B.',
              'Diferencia (A-B): Elementos en A que NO están en B.',
              'Complemento (Aᶜ): Todos los elementos que NO pertenecen a A.',
            ],
          },
          { type: 'list', title: 'Ejemplos: A = {1,2,3,4}, B = {3,4,5,6}',
            items: [
              '3 ∈ A, 7 ∉ A, A ⊆ {1,2,3,4,5}',
              'A∪B = {1,2,3,4,5,6}', 'A∩B = {3,4}', 'A-B = {1,2}',
            ],
          },
        ],
      },
      {
        id: 'ari-6', number: 6, title: 'Operadores Elementales',
        keyTerms: ['suma', 'resta', 'multiplicación', 'división', 'potencias', 'raíces', 'ley de signos', 'propiedades'],
        blocks: [
          { type: 'table', title: 'Ley de signos',
            data: {
              headers: ['Operación', 'Resultado'],
              rows: [
                ['(+) + (+)', '(+)'], ['(+) + (-)', 'Signo del mayor valor absoluto'], ['(-) + (-)', '(-)'],
                ['(+) · (+)', '(+)'], ['(-) · (-)', '(+)'], ['(+) · (-)', '(-)'], ['(-) · (+)', '(-)'],
              ],
            },
          },
          { type: 'list', title: '10 propiedades de las potencias (aⁿ)',
            items: [
              'aᵐ · aⁿ = aᵐ⁺ⁿ (misma base: suman exponentes)',
              'aᵐ / aⁿ = aᵐ⁻ⁿ (misma base: restan exponentes)',
              '(aᵐ)ⁿ = aᵐⁿ (potencia de potencia: multiplican)',
              '(ab)ⁿ = aⁿbⁿ', '(a/b)ⁿ = aⁿ/bⁿ (b≠0)',
              'a¹ = a', 'a⁰ = 1 (a≠0)',
              'a⁻ⁿ = 1/aⁿ', '(-a)ⁿ = (-1)ⁿaⁿ',
              'aⁿ/ᵐ = ᵐ√aⁿ (a≥0)',
            ],
          },
          { type: 'list', title: 'Raíces',
            items: ['√a = a^(1/2), a≥0 (raíz cuadrada)', '∛a = a^(1/3), a∈ℝ (raíz cúbica)', '⁴√a = a^(1/4), a≥0 (raíz cuarta)'],
          },
        ],
      },
      {
        id: 'ari-7', number: 7, title: 'Regla de Tres',
        keyTerms: ['regla de tres', 'proporcionalidad directa', 'multiplicación cruzada', 'razón'],
        blocks: [
          { type: 'paragraph', content: 'Permite resolver problemas de proporcionalidad directa mediante multiplicación cruzada.' },
          { type: 'formula', formula: 'x = (b × c) / a', description: 'Si a → b, entonces c → x' },
          { type: 'list', title: 'Ejemplo (precio del arroz)',
            items: [
              'Si 1 kg de arroz cuesta $17.50, ¿cuánto cuestan 714.286 g?',
              'x = (17.50 × 714.286) / 1,000 = $12.50',
              'Respuesta: Con $12.50 se compran 714.286 g de arroz.',
            ],
          },
        ],
      },
      {
        id: 'ari-8', number: 8, title: 'Porcentaje',
        keyTerms: ['porcentaje', 'tanto por ciento', 'base 100', 'parte', 'total'],
        blocks: [
          { type: 'paragraph', content: 'Expresa una parte de un total en base 100.' },
          { type: 'formula', formula: 'x = (100 × parte) / total', description: 'Para calcular qué porcentaje representa "parte" del "total".' },
          { type: 'list', title: 'Ejemplo',
            items: [
              '15 de 135 estudiantes prefieren estudiar en la mañana. ¿Qué porcentaje representa?',
              'x = (100 × 15) / 135 = 1,500 / 135 = 11.11%',
              'Respuesta: 11.11% de los estudiantes.',
            ],
          },
        ],
      },
      {
        id: 'ari-9', number: 9, title: 'Aplicaciones en Ciencias de la Salud',
        keyTerms: ['dosificación', 'dilución', 'IMC', 'porcentaje de solución', 'regla de tres en nutrición'],
        blocks: [
          { type: 'table', title: 'Aplicaciones clínicas de la aritmética',
            data: {
              headers: ['Aplicación', 'Ejemplo', 'Operación'],
              rows: [
                ['Dosificación de medicamentos', '250 mg cada 8h. ¿Cuántos mg en 24h?', '250 × 3 = 750 mg'],
                ['Diluciones', 'Diluir 5 mL en 250 mL. ¿Cuál es la proporción?', '5 / 250 = 0.02'],
                ['Índice de masa corporal (IMC)', 'Peso: 68 kg. Estatura: 1.70 m. IMC = peso/estatura²', '68 / 1.70² = 23.53'],
                ['Porcentaje de solución', '15 g de soluto en 120 g de solución. ¿% = ?', '(15/120) × 100 = 12.5%'],
                ['Regla de tres en nutrición', 'Si 100 g tienen 53 kcal, ¿cuántas en 275 g?', 'x = (53 × 275) / 100 = 145.75 kcal'],
              ],
            },
          },
        ],
      },
      {
        id: 'ari-10', number: 10, title: 'Leyes y Propiedades Importantes',
        keyTerms: ['conmutativa', 'asociativa', 'distributiva', 'neutro', 'absorbente', 'inverso'],
        blocks: [
          { type: 'table', title: 'Propiedades de las operaciones',
            data: {
              headers: ['Propiedad', 'Suma', 'Multiplicación'],
              rows: [
                ['Conmutativa', 'a + b = b + a', 'a · b = b · a'],
                ['Asociativa', '(a+b)+c = a+(b+c)', '(a·b)·c = a·(b·c)'],
                ['Distributiva', 'a·(b+c) = a·b + a·c', 'a·(b-c) = a·b - a·c'],
                ['Elemento neutro', 'a + 0 = a', 'a · 1 = a'],
                ['Elemento absorbente', '—', 'a · 0 = 0'],
                ['Elemento inverso', 'a + (-a) = 0', 'a · (1/a) = 1 (a≠0)'],
              ],
            },
          },
          { type: 'note', content: 'Estas leyes permiten simplificar cálculos y verificar resultados. Úsalas para trabajar con mayor rapidez y exactitud.' },
        ],
      },
    ],
  },

  {
    id: 'algebra',
    title: 'Álgebra',
    subtitle: 'El lenguaje de las variables para modelar, resolver y comprender fenómenos del mundo real',
    colorKey: 'algebra',
    emoji: '📐',
    keyPoints: [
      'El lenguaje algebraico traduce palabras en expresiones simbólicas.',
      'Identifica y opera correctamente con monomios, binomios y polinomios.',
      'Aplica las leyes de los exponentes para simplificar y resolver.',
      'Reduce términos semejantes y usa la propiedad distributiva.',
      'Factoriza para simplificar expresiones y resolver ecuaciones.',
      'Resuelve ecuaciones lineales y sistemas con método adecuado.',
      'Usa la fórmula cuadrática para ecuaciones de segundo grado.',
    ],
    sections: [
      {
        id: 'alg-1', number: 1, title: 'Lenguaje Algebraico',
        keyTerms: ['expresión algebraica', 'variable', 'coeficiente', 'término', 'traducción'],
        blocks: [
          { type: 'paragraph', content: 'El lenguaje algebraico convierte una oración común en una expresión algebraica usando variables y operaciones.' },
          { type: 'table', title: 'Traducción de lenguaje común a algebraico',
            data: {
              headers: ['Oración común', 'Expresión algebraica'],
              rows: [
                ['La suma de 5 y un número', '5 + x'],
                ['El doble de un número', '2x'],
                ['La diferencia entre un número y 7', 'x − 7'],
                ['El triple de la suma de un número y 4', '3(x + 4)'],
                ['El cuadrado de un número', 'x²'],
                ['La mitad de un número aumentado en 6', 'x/2 + 6'],
                ['El producto de a y b, disminuido en c', 'ab − c'],
                ['El cociente de un número entre 9', 'x/9'],
              ],
            },
          },
        ],
      },
      {
        id: 'alg-2', number: 2, title: 'Tipos de Expresiones Algebraicas',
        keyTerms: ['monomio', 'binomio', 'trinomio', 'polinomio', 'término', 'grado'],
        blocks: [
          { type: 'table', title: 'Clasificación por número de términos',
            data: {
              headers: ['Tipo', 'Nº de términos', 'Ejemplo'],
              rows: [
                ['Monomio', '1 término', '3x'],
                ['Binomio', '2 términos', '4y + 5x'],
                ['Trinomio', '3 términos', '4x² + 5x − 2y'],
                ['Polinomio', '4 o más términos', '4y + 5x + 6zy + ab'],
              ],
            },
          },
          { type: 'note', content: 'TÉRMINO: cada parte separada por + o −. Ej: 4x² + 5x − 2y tiene 3 términos.' },
        ],
      },
      {
        id: 'alg-3', number: 3, title: 'Operaciones con Expresiones Algebraicas',
        keyTerms: ['suma de polinomios', 'resta de polinomios', 'multiplicación de polinomios', 'división', 'ley de exponentes'],
        blocks: [
          { type: 'list', title: 'SUMA y RESTA: términos semejantes',
            items: [
              'Solo se pueden sumar/restar términos con la MISMA variable y el MISMO exponente.',
              'Se suman o restan los coeficientes: 3x + 7x − 2x = 8x',
              'Resta: misma variable y exponente → restan coeficientes: 9y − 4y + y = 6y',
            ],
          },
          { type: 'list', title: 'MULTIPLICACIÓN: Ley de los exponentes',
            items: [
              'Base igual → se SUMAN los exponentes: (2a³b)(−3ab²) = −6a⁴b³',
              'Distribución: a(b + c) = ab + ac',
            ],
          },
          { type: 'list', title: 'DIVISIÓN: Ley de los exponentes',
            items: [
              'Base igual → se RESTAN los exponentes: 6a³b² / 3a²b = 2ab',
              'Dominación del signo mayor.',
            ],
          },
          { type: 'formula', formula: '(x³)⁴ = x^(3×4) = x¹²', description: 'POTENCIA DE UNA POTENCIA: Se multiplican los exponentes.' },
        ],
      },
      {
        id: 'alg-4', number: 4, title: 'Reducción de Términos Semejantes y Propiedad Distributiva',
        keyTerms: ['términos semejantes', 'reducción', 'propiedad distributiva', 'simplificación'],
        blocks: [
          { type: 'list', title: 'Reducción de términos semejantes',
            items: [
              'Se combinan términos con la misma variable y exponente.',
              'Ejemplo: (3b + 8b) + (6a − 2a) − 5 = 11b + 4a − 5',
            ],
          },
          { type: 'list', title: 'Propiedad distributiva',
            items: [
              'Se multiplica el factor por cada término del paréntesis.',
              'Ejemplo: −2(x − 5) = −2(x) + (−2)(−5) = −2x + 10',
              'También: a(b + c) = ab + ac',
            ],
          },
        ],
      },
      {
        id: 'alg-5', number: 5, title: 'Factorización',
        keyTerms: ['factorización', 'factor común máximo', 'MCD', 'trinomio', 'cuadrado perfecto', 'agrupamiento'],
        blocks: [
          { type: 'list', title: 'Métodos de factorización',
            items: [
              'FACTOR COMÚN MÁXIMO (MCD): Extraer el factor común de todos los términos. 12x³y + 18x²y² − 6xy = 6xy(2x² + 3xy − 1)',
              'POR AGRUPAMIENTO: ax + ay + bx + by = a(x+y) + b(x+y) = (x+y)(a+b)',
            ],
          },
          { type: 'list', title: 'Trinomio de la forma x² + bx + c',
            items: [
              'Buscar dos números que multiplicados den c y sumados den b.',
              'Ejemplo: x² + 7x + 12 → buscar números que multiplicados den 12 y sumados den 7: 3 y 4.',
              '∴ x² + 7x + 12 = (x + 3)(x + 4)',
            ],
          },
          { type: 'list', title: 'Trinomio Cuadrado Perfecto',
            items: ['x² + 2ax + a² = (x + a)²', 'x² − 2ax + a² = (x − a)²'],
          },
        ],
      },
      {
        id: 'alg-6', number: 6, title: 'Ecuaciones Lineales',
        keyTerms: ['ecuación lineal', 'despeje', 'variable', 'incógnita', 'solución', 'verificación'],
        blocks: [
          { type: 'paragraph', content: 'Una ecuación lineal tiene la forma: ax + b = 0 (a ≠ 0). El objetivo es despejar la variable realizando las mismas operaciones en ambos lados.' },
          { type: 'steps', title: 'Resolución de ecuaciones lineales',
            steps: [
              'Identificar la variable a despejar.',
              'Realizar las mismas operaciones en ambos lados de la ecuación.',
              'Aislar la variable.',
              'Verificar la solución sustituyéndola en la ecuación original.',
            ],
          },
          { type: 'list', title: 'Ejemplo: 3x − 5 = 16',
            items: ['3x = 16 + 5 = 21', 'x = 21/3 = 7', 'Verificación: 3(7) − 5 = 21 − 5 = 16 ✓'],
          },
          { type: 'list', title: 'Aplicación en salud: IMC',
            items: [
              'IMC = peso(kg) / estatura²(m)',
              'Si una persona pesa 70 kg y mide 1.75 m: IMC = 70 / (1.75)² = 70 / 3.0625 = 22.86 kg/m²',
              'Clasificación OMS: < 18.5 bajo peso | 18.5–24.9 normal | 25–29.9 sobrepeso | ≥ 30 obesidad',
            ],
          },
        ],
      },
      {
        id: 'alg-7', number: 7, title: 'Sistemas de Ecuaciones Lineales',
        keyTerms: ['sistema de ecuaciones', 'sustitución', 'suma o resta', 'solución única', 'par ordenado'],
        blocks: [
          { type: 'comparison',
            left: {
              title: 'Método de Sustitución',
              items: [
                '1. Despejar una variable en una ecuación.',
                '2. Sustituir en la otra ecuación.',
                '3. Resolver para la variable resultante.',
                '4. Sustituir para encontrar la otra variable.',
                'Ejemplo: y = 2x+1; 3x+y = 10 → 3x+(2x+1) = 10 → x = 9/5; y = 23/5',
              ],
            },
            right: {
              title: 'Método de Suma o Resta',
              items: [
                '1. Multiplicar (si es necesario) para que las variables coincidan.',
                '2. Sumar o restar las ecuaciones.',
                '3. Resolver la variable resultante.',
                '4. Sustituir para encontrar la otra.',
                'Ejemplo: 2x+3y=13; x−3y=1 → Sumar: 3x=14 → x=14/3; y=11/9',
              ],
            },
          },
        ],
      },
      {
        id: 'alg-8', number: 8, title: 'Fórmula Cuadrática',
        keyTerms: ['fórmula cuadrática', 'discriminante', 'ecuación de segundo grado', 'raíces reales', 'raíces complejas'],
        blocks: [
          { type: 'paragraph', content: 'Para ecuaciones de la forma ax² + bx + c = 0 (a ≠ 0):' },
          { type: 'formula', formula: 'x = (−b ± √(b² − 4ac)) / 2a', description: 'Fórmula general cuadrática (Bhaskara).' },
          { type: 'table', title: 'Discriminante D = b² − 4ac',
            data: {
              headers: ['Valor de D', 'Tipo de soluciones'],
              rows: [['D > 0', 'Dos soluciones reales distintas'], ['D = 0', 'Una solución real doble'], ['D < 0', 'Dos soluciones complejas conjugadas (no reales)']],
            },
          },
          { type: 'list', title: 'Ejemplo: x² + 5x − 6 = 0',
            items: ['a=1, b=5, c=−6', 'D = 5² − 4(1)(−6) = 25 + 24 = 49', 'x = (−5 ± √49) / 2 = (−5 ± 7) / 2', 'x₁ = (−5+7)/2 = 1 | x₂ = (−5−7)/2 = −6'],
          },
          { type: 'note', content: 'ERROR COMÚN: Dividir solo el primer término por 2a. CORRECTO: x = (−b ± √(b²−4ac)) / 2a — toda la expresión sobre 2a.' },
        ],
      },
      {
        id: 'alg-9', number: 9, title: 'Jerarquía y Orden de Operaciones (PEMDAS)',
        keyTerms: ['PEMDAS', 'paréntesis', 'exponentes', 'multiplicación', 'división', 'suma', 'resta', 'orden de operaciones'],
        blocks: [
          { type: 'steps', title: 'Orden de operaciones PEMDAS',
            steps: [
              'P — Paréntesis (y corchetes): resolver primero.',
              'E — Exponentes y raíces.',
              'M/D — Multiplicación y División (de izquierda a derecha).',
              'A/S — Adición y Sustracción (de izquierda a derecha).',
            ],
          },
          { type: 'note', content: 'Los paréntesis cambian el resultado. Sin paréntesis: 2×3+4 = 10. Con paréntesis: 2×(3+4) = 14.' },
          { type: 'list', title: 'Aplicaciones en ciencias de la salud',
            items: [
              'CÁLCULO DE DOSIS: Dosis = peso(kg) × dosis(mg/kg) / frecuencia. Ej: 60 kg, 15 mg/kg, cada 8h → Dosis = (60×15)/8 = 112.5 mg',
              'DILUCIONES: C₁V₁ = C₂V₂. Ej: 250 mg en 5 mL → ¿cuánto solvente para 5 mg/mL en 250 mL? V₁ = (5×250)/250 = 5 mL',
              'VI (mL/h) = Volumen(mL) / Tiempo(h). Ej: 500 mL en 4h → 125 mL/h',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'probabilidad',
    title: 'Probabilidad',
    subtitle: 'Cuantificar la incertidumbre para tomar decisiones informadas en ciencias de la salud',
    colorKey: 'probabilidad',
    emoji: '🎲',
    keyPoints: [
      'La probabilidad mide la posibilidad de ocurrencia de un evento (0 a 1).',
      'El espacio muestral incluye todos los resultados posibles.',
      'Existen distintos tipos de eventos según su relación.',
      'Las distribuciones de probabilidad modelan fenómenos reales.',
      'Las reglas de adición y multiplicación permiten combinar eventos.',
      'La probabilidad condicional ajusta la probabilidad con nueva información.',
      'En salud, la probabilidad es esencial para diagnóstico y políticas públicas.',
    ],
    sections: [
      {
        id: 'pro-1', number: 1, title: 'Definición y Fórmula Básica',
        keyTerms: ['probabilidad', 'evento', 'espacio muestral', 'ocurrencias', 'escala de probabilidad'],
        blocks: [
          { type: 'formula', formula: 'P(E) = ocurrencias de E / total de ocurrencias posibles', description: 'La probabilidad de un evento E es la razón entre el número de veces que puede ocurrir y el número total de resultados posibles igualmente probables.' },
          { type: 'table', title: 'Escala de probabilidad (0 → 1)',
            data: {
              headers: ['Valor', 'Interpretación'],
              rows: [['0', 'Imposible (nunca ocurre)'], ['0.25', 'Poco probable'], ['0.50', 'Equitativo (igual probabilidad)'], ['0.75', 'Muy probable'], ['1', 'Seguro (siempre ocurre)']],
            },
          },
          { type: 'note', content: 'SIEMPRE: 0 ≤ P(E) ≤ 1. La suma de todas las probabilidades del espacio muestral es igual a 1.' },
        ],
      },
      {
        id: 'pro-2', number: 2, title: 'Espacio Muestral (Ω) y Ejemplos',
        keyTerms: ['espacio muestral', 'moneda', 'dado', 'muestra', 'resultados equiprobables'],
        blocks: [
          { type: 'comparison',
            left: {
              title: 'Moneda (1 volado)',
              items: ['Ω = {águila, sol}', 'n(Ω) = 2', 'P(águila) = 1/2', 'P(sol) = 1/2'],
            },
            right: {
              title: 'Dado de 6 lados',
              items: ['Ω = {1,2,3,4,5,6}', 'n(Ω) = 6', 'P(1) = P(2) = ... = P(6) = 1/6', 'Suma total = 6 × 1/6 = 1'],
            },
          },
        ],
      },
      {
        id: 'pro-3', number: 3, title: 'Dato Médico: Probabilidad de Sexo al Nacer',
        keyTerms: ['sexo', 'natalidad', 'probabilidad médica', 'epidemiología', 'planificación'],
        blocks: [
          { type: 'table', title: 'Probabilidad de sexo al nacer (población mundial)',
            data: {
              headers: ['Resultado', 'Probabilidad', 'Porcentaje'],
              rows: [['Femenino', '0.508', '50.8%'], ['Masculino', '0.492', '49.2%'], ['Total', '1.000', '100%']],
            },
          },
          { type: 'note', content: 'De cada 1,000 nacimientos, aproximadamente 508 son femeninos y 492 masculinos. Aplicación en salud: planificación de recursos materno-infantiles, estudios epidemiológicos.' },
        ],
      },
      {
        id: 'pro-4', number: 4, title: 'Tipos de Eventos',
        keyTerms: ['eventos independientes', 'eventos dependientes', 'eventos mutuamente excluyentes', 'condicional'],
        blocks: [
          { type: 'list', title: 'Tipos de eventos y sus fórmulas',
            items: [
              'INDEPENDIENTES: La ocurrencia de uno NO afecta al otro. P(A y B) = P(A) × P(B)',
              'DEPENDIENTES / CONDICIONALES: La ocurrencia de uno SÍ afecta al otro. P(B|A) = P(A y B) / P(A)',
              'MUTUAMENTE EXCLUYENTES: No pueden ocurrir al mismo tiempo. P(A y B) = 0 → P(A∪B) = P(A) + P(B)',
            ],
          },
        ],
      },
      {
        id: 'pro-5', number: 5, title: 'Distribuciones de Probabilidad Importantes',
        keyTerms: ['distribución uniforme', 'Bernoulli', 'binomial', 'Poisson', 'distribución normal', 'Gauss', 'parámetros'],
        blocks: [
          { type: 'table', title: 'Distribuciones de probabilidad más importantes',
            data: {
              headers: ['Distribución', 'Descripción', 'Función de probabilidad', 'Aplicación en salud'],
              rows: [
                ['Uniforme discreta', 'Todos los resultados tienen la misma probabilidad', 'P(X=x) = 1/n', 'Elección al azar de opciones, asignación de tratamientos'],
                ['Bernoulli', 'Un solo ensayo con dos resultados: éxito o fracaso', 'P(X=1)=p (éxito); P(X=0)=q=1−p', 'Éxito/fracaso en intervención, prueba diagnóstica'],
                ['Binomial', 'Número de éxitos en n ensayos Bernoulli', 'P(X=k) = C(n,k)·p^k·q^(n-k)', 'Número de pacientes con respuesta positiva en n pruebas'],
                ['Poisson', 'Número de ocurrencias en un intervalo de tiempo/espacio', 'P(X=k) = e^(−λ)·λ^k/k!', 'Llegada de pacientes a urgencias, eventos raros'],
                ['Normal (Gauss)', 'Variables continuas con distribución simétrica', 'f(x) = (1/σ√2π)·e^(−(x−μ)²/2σ²)', 'Talla, presión arterial, niveles de glucosa, errores de medición'],
              ],
            },
          },
          { type: 'note', content: 'En muchas situaciones biológicas, las medidas siguen aproximadamente una distribución normal.' },
        ],
      },
      {
        id: 'pro-6', number: 6, title: 'Regla de Adición',
        keyTerms: ['regla de adición', 'eventos mutuamente excluyentes', 'intersección', 'unión'],
        blocks: [
          { type: 'list', title: 'Fórmulas de adición',
            items: [
              'Eventos MUTUAMENTE EXCLUYENTES (A∩B=∅): P(A∪B) = P(A) + P(B)',
              'Eventos CON INTERSECCIÓN (A∩B≠∅): P(A∪B) = P(A) + P(B) − P(A∩B)',
            ],
          },
          { type: 'list', title: 'Ejemplos médicos',
            items: [
              'P(influenza A) = 0.12, P(COVID-19 B) = 0.08. Sin poder tener ambas a la vez: P(A∪B) = 0.12 + 0.08 = 0.20 (20%)',
              'Si 5% puede tener ambas enfermedades (A∩B = 0.05): P(A∪B) = 0.12 + 0.08 − 0.05 = 0.15 (15%)',
            ],
          },
        ],
      },
      {
        id: 'pro-7', number: 7, title: 'Regla de Multiplicación',
        keyTerms: ['regla de multiplicación', 'eventos independientes', 'eventos dependientes', 'probabilidad conjunta'],
        blocks: [
          { type: 'list', title: 'Fórmulas de multiplicación',
            items: [
              'Para eventos INDEPENDIENTES: P(A y B) = P(A) × P(B)',
              'Para eventos DEPENDIENTES: P(A y B) = P(A) × P(B|A)',
            ],
          },
          { type: 'list', title: 'Ejemplos',
            items: [
              'P(anemia A) = 0.20, P(diabetes B) = 0.10, independientes → P(A y B) = 0.20 × 0.10 = 0.02 (2%)',
              'P(infección A) = 0.30, P(fiebre B|infección) = 0.60 → P(A y B) = 0.30 × 0.60 = 0.18 (18%)',
            ],
          },
        ],
      },
      {
        id: 'pro-8', number: 8, title: 'Probabilidad Condicional',
        keyTerms: ['probabilidad condicional', 'dado que', 'Bayes', 'APGAR', 'sensibilidad', 'especificidad'],
        blocks: [
          { type: 'formula', formula: 'P(D|E) = P(D ∩ E) / P(E)', description: 'Probabilidad de D dado que ocurrió E.' },
          { type: 'list', title: 'Ejemplo médico (APGAR al 1 minuto)',
            items: [
              'En un estudio de 5,000 recién nacidos:',
              '122 tienen APGAR < 6',
              '42 de ellos fallecieron (deceso)',
              'P(deceso | APGAR<6) = 42 / 122 = 0.3443 (34.43%)',
              'Interpretación: Entre los bebés con APGAR < 6, el 34.43% falleció.',
            ],
          },
        ],
      },
      {
        id: 'pro-9', number: 9, title: 'Fórmulas y Conceptos Importantes',
        keyTerms: ['complemento', 'De Morgan', 'probabilidad total', 'Teorema de Bayes', 'epidemiología'],
        blocks: [
          { type: 'list', title: 'Fórmulas clave',
            items: [
              'Complemento: P(Aᶜ) = 1 − P(A)',
              'Ley de los complementos: P(A ∪ Aᶜ) = 1',
              'Ley de De Morgan: (A∪B)ᶜ = Aᶜ∩Bᶜ; (A∩B)ᶜ = Aᶜ∪Bᶜ',
              'Probabilidad total: Si B₁, B₂..., Bₙ es partición de Ω: P(A) = Σ P(A|Bᵢ)·P(Bᵢ)',
              'Teorema de Bayes: P(A|B) = P(B|A)·P(A) / P(B)',
            ],
          },
          { type: 'list', title: 'Aplicaciones en ciencias de la salud',
            items: [
              'Diagnóstico médico: sensibilidad, especificidad, valores predictivos y razón de verosimilitud.',
              'Epidemiología: estimación de riesgo, estudios de cohorte y casos-controles.',
              'Ensayos clínicos: asignación aleatoria, cálculo de tamaño de muestra, análisis de resultados.',
              'Cadena de infección: probabilidad de transmisión, brotes, modelos estocásticos.',
              'Control de calidad: probabilidad de defectos, aceptación de lotes, análisis de fallas.',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'estadDesc',
    title: 'Estadística Descriptiva',
    subtitle: 'Organizar, resumir y presentar datos para comprender fenómenos en ciencias de la salud',
    colorKey: 'estadDesc',
    emoji: '📊',
    keyPoints: [
      'Las variables pueden ser cualitativas o cuantitativas.',
      'La media es sensible a valores extremos; la mediana no.',
      'La moda identifica el valor más frecuente.',
      'Las medidas de dispersión describen la variabilidad de los datos.',
      'El análisis exploratorio ayuda a entender y visualizar los datos.',
      'La correlación mide relación, no causalidad.',
      'La probabilidad condicional actualiza información cuando se conoce un evento.',
    ],
    sections: [
      {
        id: 'edsc-1', number: 1, title: 'Tipos de Variables',
        keyTerms: ['variable cualitativa', 'variable cuantitativa', 'dicotómica', 'politómica', 'discreta', 'continua', 'categórica'],
        blocks: [
          { type: 'comparison',
            left: {
              title: 'CUALITATIVAS (Categóricas) — Describen cualidades',
              items: [
                'DICOTÓMICAS: Solo dos categorías posibles. Ej: Sí/No, Vivo/Muerto',
                'POLITÓMICAS: Más de dos categorías sin orden inherente. Ej: Estado civil (soltero, casado, divorciado), Grupo sanguíneo (A, B, AB, O)',
              ],
            },
            right: {
              title: 'CUANTITATIVAS (Numéricas) — Describen cantidades',
              items: [
                'DISCRETAS: Resultan de un conteo; toman valores enteros. Ej: Número de hijos, Número de consultas médicas',
                'CONTINUAS: Resultan de una medición; pueden tomar cualquier valor en un intervalo. Ej: Peso (kg), Temperatura (°C), Presión arterial (mmHg)',
              ],
            },
          },
        ],
      },
      {
        id: 'edsc-2', number: 2, title: 'Población, Muestra y Medidas',
        keyTerms: ['población', 'muestra', 'parámetro', 'estadístico', 'inferencia', 'mu', 'sigma', 'media muestral'],
        blocks: [
          { type: 'comparison',
            left: {
              title: 'POBLACIÓN (N)',
              items: ['Conjunto total de elementos de interés.', 'Parámetros: μ (media), σ (desviación), p (proporción)'],
            },
            right: {
              title: 'MUESTRA (n)',
              items: ['Subconjunto de la población seleccionado para estudio.', 'Estadísticos: x̄ (media), s (desviación), p̂ (proporción)'],
            },
          },
          { type: 'note', content: 'Los estadísticos se usan para estimar parámetros poblacionales. El muestreo representativo es fundamental para que las conclusiones sean válidas.' },
        ],
      },
      {
        id: 'edsc-3', number: 3, title: 'Media Aritmética',
        keyTerms: ['media', 'promedio', 'media aritmética', 'valor atípico', 'colesterol', 'NHANES'],
        blocks: [
          { type: 'formula', formula: 'x̄ = (Σ xᵢ) / n', description: 'Promedio de los valores de un conjunto de datos. Es afectada por valores extremos (atípicos).' },
          { type: 'note', content: 'Ejemplo en salud: La media del colesterol total en adultos (≥20 años) en EE.UU. es de 200 mg/dL. (Fuente: NHANES 2017–2020). En promedio, el colesterol total de los adultos es 200 mg/dL.' },
        ],
      },
      {
        id: 'edsc-4', number: 4, title: 'Mediana',
        keyTerms: ['mediana', 'valor central', 'datos ordenados', 'posición', 'resistente a atípicos'],
        blocks: [
          { type: 'paragraph', content: 'Valor central de un conjunto de datos ordenados. No es afectada por valores extremos.' },
          { type: 'list', title: 'Cálculo de la mediana',
            items: [
              'POSICIÓN: (n+1)/2',
              'Si n es IMPAR: la mediana es el valor en la posición (n+1)/2.',
              'Si n es PAR: la mediana es el promedio de los dos valores centrales.',
              'Ejemplo: 2, 5, 6, 7, 9, 12, 14 → n=7 (impar) → Mediana = posición 4 = 7',
            ],
          },
        ],
      },
      {
        id: 'edsc-5', number: 5, title: 'Moda',
        keyTerms: ['moda', 'frecuencia', 'unimodal', 'bimodal', 'multimodal', 'amodal'],
        blocks: [
          { type: 'paragraph', content: 'Valor que aparece con mayor frecuencia en el conjunto de datos.' },
          { type: 'list', title: 'Tipos de moda',
            items: [
              'UNIMODAL: Una sola moda.',
              'BIMODAL: Dos modas.',
              'MULTIMODAL: Más de dos modas.',
              'AMODAL: Ninguna moda (todos los valores aparecen con la misma frecuencia).',
            ],
          },
          { type: 'note', content: 'Ejemplo en salud: La moda del número de consultas en un año es 2 consultas (es el valor más frecuente en la distribución).' },
        ],
      },
      {
        id: 'edsc-6', number: 6, title: 'Medidas de Dispersión',
        keyTerms: ['rango', 'varianza', 'desviación estándar', 'IQR', 'rango intercuartil', 'dispersión', 'variabilidad'],
        blocks: [
          { type: 'table', title: 'Medidas de dispersión',
            data: {
              headers: ['Medida', 'Fórmula', 'Descripción'],
              rows: [
                ['Rango (R)', 'R = Xmax − Xmin', 'Diferencia entre el valor máximo y mínimo.'],
                ['Varianza (muestra)', 's² = Σ(xᵢ−x̄)²/(n−1)', 'Promedio de los cuadrados de las desviaciones respecto a la media.'],
                ['Varianza (población)', 'σ² = Σ(xᵢ−μ)²/N', 'Promedio de los cuadrados de las desviaciones respecto a la media poblacional.'],
                ['Desviación estándar', 's = √s²; σ = √σ²', 'Raíz cuadrada de la varianza. Se expresa en las mismas unidades que los datos.'],
                ['Rango intercuartil (IQR)', 'IQR = Q₃ − Q₁', 'Rango que contiene el 50% central de los datos (menos sensible a atípicos).'],
              ],
            },
          },
          { type: 'note', content: 'Q₁ = primer cuartil (25%) y Q₃ = tercer cuartil (75%).' },
        ],
      },
      {
        id: 'edsc-7', number: 7, title: 'Análisis Exploratorio de Datos (EDA)',
        keyTerms: ['EDA', 'histograma', 'boxplot', 'gráfica de dispersión', 'normalidad', 'atípicos', 'distribución'],
        blocks: [
          { type: 'list', title: 'Objetivos del EDA',
            items: [
              'Examinar los datos: Describir características principales del conjunto de datos.',
              'Comprobar la normalidad: Evaluar si los datos se ajustan a una distribución normal (campana de Gauss).',
              'Detectar datos anómalos (atípicos): Identificar valores extremos que pueden afectar el análisis.',
              'Generar modelos gráficos: Usar tablas, gráficos y diagramas para visualizar patrones y relaciones.',
            ],
          },
          { type: 'list', title: 'Gráficos frecuentes',
            items: [
              'Histograma: distribución de frecuencias de una variable continua.',
              'Gráfica de cajas (boxplot): dispersión y detección de atípicos.',
              'Gráfica de barras: variables cualitativas.',
              'Gráfica de líneas: tendencias en el tiempo.',
              'Gráfica de dispersión: relación entre dos variables cuantitativas.',
            ],
          },
        ],
      },
      {
        id: 'edsc-8', number: 8, title: 'Tipos de Correlación',
        keyTerms: ['correlación', 'Pearson', 'r', 'correlación positiva', 'correlación negativa', 'causalidad'],
        blocks: [
          { type: 'list', title: 'Tipos de correlación',
            items: [
              'POSITIVA: x↑ → y↑. Ambas variables aumentan juntas.',
              'NEGATIVA: x↑ → y↓. Una aumenta, la otra disminuye.',
              'NULA: Sin patrón aparente entre las variables.',
            ],
          },
          { type: 'formula', formula: 'r — Coeficiente de correlación de Pearson: −1 ≤ r ≤ 1', description: 'r = 1: correlación positiva perfecta. r = −1: correlación negativa perfecta. r = 0: no hay correlación lineal.' },
          { type: 'note', content: 'CORRELACIÓN ≠ CAUSALIDAD. Que dos variables estén correlacionadas no implica que una cause la otra. Ejemplo: el número de hospitales y la tasa de mortalidad pueden correlacionarse positivamente, pero los hospitales no "causan" la muerte.' },
        ],
      },
    ],
  },

  {
    id: 'estadInf',
    title: 'Estadística Inferencial',
    subtitle: 'Inferir, decidir, concluir y aplicar en ciencias de la salud',
    colorKey: 'estadInf',
    emoji: '📈',
    keyPoints: [
      'La estadística inferencial permite generalizar de la muestra a la población con riesgo de error controlado.',
      'Las hipótesis estadísticas se contrastan mediante pruebas formales.',
      'El nivel de significancia (α) determina el riesgo de error tipo I.',
      'La potencia (1−β) mide la capacidad del estudio para detectar efectos reales.',
      'Los intervalos de confianza cuantifican la precisión de las estimaciones.',
      'La regresión lineal modela y predice relaciones entre variables.',
      'En ciencias de la salud, estas herramientas informan decisiones clínicas y de salud pública.',
    ],
    sections: [
      {
        id: 'inf-1', number: 1, title: '¿Qué es la Estadística Inferencial?',
        keyTerms: ['estadística inferencial', 'población', 'muestra', 'inferencia', 'generalización', 'incertidumbre'],
        blocks: [
          { type: 'paragraph', content: 'Rama de la estadística que utiliza la probabilidad para extraer conclusiones sobre una población (N) a partir de información obtenida de una muestra (n).' },
          { type: 'note', content: 'OBJETIVO: Generalizar resultados y tomar decisiones con un nivel de incertidumbre controlado.' },
          { type: 'steps', title: 'Proceso general de inferencia',
            steps: ['Definir la POBLACIÓN de interés.', 'Seleccionar una MUESTRA representativa.', 'Aplicar técnicas estadísticas a la muestra.', 'Hacer INFERENCIA sobre la población con un margen de error conocido.'],
          },
        ],
      },
      {
        id: 'inf-2', number: 2, title: 'Hipótesis Estadísticas',
        keyTerms: ['hipótesis nula', 'H0', 'hipótesis alternativa', 'H1', 'bilateral', 'unilateral', 'nivel de significancia'],
        blocks: [
          { type: 'comparison',
            left: {
              title: 'Hipótesis Nula (H₀)',
              items: ['Ausencia de diferencia o efecto.', 'Representa la situación "por defecto".', 'Es la hipótesis que se pone a prueba.', 'Ejemplo: μ₁ − μ₂ = 0 (No hay diferencia en las medias)'],
            },
            right: {
              title: 'Hipótesis Alternativa (H₁)',
              items: ['Existe diferencia o efecto real.', 'Es lo que se busca evidenciar.', 'Requiere evidencia estadística para aceptarse.', 'Ejemplo: μ₁ − μ₂ ≠ 0 (Sí hay diferencia)'],
            },
          },
          { type: 'table', title: 'Tipos de hipótesis alternativa',
            data: {
              headers: ['Tipo', 'Símbolo', 'Descripción'],
              rows: [
                ['Bilateral', 'μ₁ − μ₂ ≠ 0', 'Hay diferencia en cualquier dirección'],
                ['Unilateral derecha', 'μ₁ − μ₂ > 0', 'El grupo 1 tiene mayor media'],
                ['Unilateral izquierda', 'μ₁ − μ₂ < 0', 'El grupo 1 tiene menor media'],
              ],
            },
          },
        ],
      },
      {
        id: 'inf-3', number: 3, title: 'Pasos para una Prueba de Hipótesis',
        keyTerms: ['prueba de hipótesis', 'valor p', 'nivel de significancia', 'región crítica', 'decisión estadística'],
        blocks: [
          { type: 'steps', title: 'Los 5 pasos de una prueba de hipótesis',
            steps: [
              'FORMULAR HIPÓTESIS: Plantear H₀ y H₁ claramente.',
              'FIJAR NIVEL DE SIGNIFICANCIA (α): Valores comunes: 0.10, 0.05, 0.01. Define el riesgo máximo de Error Tipo I aceptable.',
              'SELECCIONAR LA PRUEBA ESTADÍSTICA: Según el tipo de datos y diseño del estudio (Z, t, Chi², F/ANOVA, r de Pearson).',
              'CALCULAR EL VALOR P: Probabilidad de obtener un resultado igual o más extremo que el observado, si H₀ es cierta.',
              'TOMAR DECISIÓN: Si P < α → Rechazar H₀. Si P ≥ α → No rechazar H₀.',
            ],
          },
        ],
      },
      {
        id: 'inf-4', number: 4, title: 'Errores en las Pruebas de Hipótesis',
        keyTerms: ['error tipo I', 'error tipo II', 'alfa', 'beta', 'falso positivo', 'falso negativo', 'potencia'],
        blocks: [
          { type: 'comparison',
            left: {
              title: 'Error Tipo I (α) — Falso Positivo',
              items: ['Rechazar H₀ cuando en realidad es VERDADERA.', 'Ejemplo: Concluir que un tratamiento es efectivo cuando no lo es.', 'Controlado por el nivel de significancia α.'],
            },
            right: {
              title: 'Error Tipo II (β) — Falso Negativo',
              items: ['No rechazar H₀ cuando en realidad es FALSA.', 'Ejemplo: No detectar un efecto real de un tratamiento.', 'Relacionado con la Potencia del test (1−β).'],
            },
          },
          { type: 'table', title: 'Resumen de decisiones y errores',
            data: {
              headers: ['Decisión', 'H₀ verdadera', 'H₀ falsa'],
              rows: [
                ['Rechazar H₀', 'Error Tipo I (α)', 'Decisión correcta (Potencia = 1−β)'],
                ['No rechazar H₀', 'Decisión correcta', 'Error Tipo II (β)'],
              ],
            },
          },
          { type: 'note', content: 'No es posible eliminar ambos errores simultáneamente; hay un equilibrio entre α, β y el tamaño de la muestra.' },
        ],
      },
      {
        id: 'inf-5', number: 5, title: 'Potencia del Test',
        keyTerms: ['potencia estadística', '1-beta', 'tamaño de muestra', 'efecto', 'variabilidad'],
        blocks: [
          { type: 'formula', formula: 'POTENCIA = 1 − β', description: 'La potencia es la probabilidad de detectar un efecto real cuando existe. Cuanto mayor sea la potencia, menor será el riesgo de cometer un Error Tipo II.' },
          { type: 'list', title: 'Factores que aumentan la Potencia',
            items: [
              'Mayor tamaño de muestra (n) — el más importante',
              'Mayor nivel de significancia (α) — aunque aumenta Error Tipo I',
              'Mayor efecto esperado — diferencia real más grande',
              'Menor variabilidad de los datos',
            ],
          },
        ],
      },
      {
        id: 'inf-6', number: 6, title: 'Regresión Lineal Simple',
        keyTerms: ['regresión lineal', 'pendiente', 'intercepto', 'variable dependiente', 'variable independiente', 'predicción', 'b0', 'b1'],
        blocks: [
          { type: 'formula', formula: 'y = b₀ + b₁x + e', description: 'y: variable dependiente. x: variable independiente. b₀: intersección con el eje Y (valor de Y cuando X = 0). b₁: pendiente (cambio esperado en Y por cada unidad de cambio en X). e: error aleatorio.' },
          { type: 'list', title: 'Interpretación de la pendiente',
            items: ['Si b₁ > 0 → Relación positiva', 'Si b₁ < 0 → Relación negativa', 'Si b₁ = 0 → No hay relación lineal'],
          },
          { type: 'note', content: 'USOS: Predicción de valores de Y a partir de X. Evaluación de la fuerza y dirección de la relación entre dos variables.' },
        ],
      },
      {
        id: 'inf-7', number: 7, title: 'Distribuciones Muestrales Clave',
        keyTerms: ['Z normal', 't de Student', 'chi cuadrado', 'F ANOVA', 'prueba estadística', 'grados de libertad'],
        blocks: [
          { type: 'table', title: 'Distribuciones muestrales y sus usos',
            data: {
              headers: ['Distribución', 'Estadístico', 'Uso principal', 'Condiciones'],
              rows: [
                ['Normal (Z)', 'Z = (x̄−μ)/(σ/√n)', 'Media poblacional (σ conocida, n≥30)', 'Datos normales o n grande'],
                ['t de Student', 't = (x̄−μ)/(s/√n)', 'Media poblacional (σ desconocida, n<30)', 'Datos normales, n pequeña'],
                ['Chi-cuadrado (χ²)', 'χ² = Σ(O−E)²/E', 'Varianza poblacional, bondad de ajuste, tablas 2×2', 'Datos en frecuencias, observaciones independientes'],
                ['F (ANOVA)', 'F = CM_entre/CM_dentro', 'Comparación de 3 o más medias', 'Datos normales, varianzas homogéneas'],
              ],
            },
          },
        ],
      },
      {
        id: 'inf-8', number: 8, title: 'Intervalos de Confianza',
        keyTerms: ['intervalo de confianza', 'IC', '95%', 'margen de error', 'precisión', 'estimación'],
        blocks: [
          { type: 'paragraph', content: 'Rango de valores plausibles para el parámetro poblacional con un nivel de confianza (1−α).' },
          { type: 'list', title: 'Fórmulas',
            items: [
              'Media poblacional (σ CONOCIDA): IC = x̄ ± Zα/2 · (σ/√n)',
              'Media poblacional (σ DESCONOCIDA): IC = x̄ ± tα/2,n-1 · (s/√n)',
            ],
          },
          { type: 'note', content: 'Interpretación: Con 95% de confianza, el verdadero valor del parámetro está dentro del intervalo. No significa que hay 95% de probabilidad de que el parámetro esté en ese intervalo específico.' },
        ],
      },
      {
        id: 'inf-9', number: 9, title: 'Ejemplos de Aplicación Médica',
        keyTerms: ['ensayo clínico', 'diagnóstico', 'ROC', 'regresión logística', 'Mann-Whitney', 'comparación de grupos'],
        blocks: [
          { type: 'table', title: 'Aplicaciones estadísticas en medicina',
            data: {
              headers: ['Aplicación', 'Ejemplo', 'Prueba estadística'],
              rows: [
                ['Evaluación de eficacia de tratamientos', 'Comparar reducción de presión arterial entre dos grupos', 't de Student / ANOVA, IC del 95%'],
                ['Comparación de grupos', 'Comparar niveles de glucosa entre pacientes con y sin diabetes', 't de Student / U de Mann-Whitney / ANOVA'],
                ['Diagnóstico de enfermedades', 'Determinar sensibilidad y especificidad de una prueba', 'Curva ROC, IC'],
                ['Análisis de factores de riesgo', 'Estudiar relación entre tabaquismo, hipertensión y riesgo de infarto', 'Regresión logística múltiple'],
              ],
            },
          },
        ],
      },
      {
        id: 'inf-10', number: 10, title: 'Supuestos Comunes en Inferencia',
        keyTerms: ['normalidad', 'independencia', 'homocedasticidad', 'linealidad', 'supuestos estadísticos', 'residuos'],
        blocks: [
          { type: 'list', title: 'Supuestos que deben verificarse antes de aplicar pruebas paramétricas',
            items: [
              'NORMALIDAD: Los datos o los residuos se distribuyen normalmente (prueba Shapiro-Wilk, Q-Q plot).',
              'INDEPENDENCIA: Las observaciones son independientes entre sí (diseño del estudio).',
              'HOMOCEDASTICIDAD: Varianzas constantes a lo largo de los valores predichos (prueba de Levene).',
              'LINEALIDAD: Relación lineal entre variables en regresión (gráfico de dispersión).',
            ],
          },
          { type: 'note', content: 'Cuando los supuestos no se cumplen, se usan pruebas NO PARAMÉTRICAS (Mann-Whitney, Kruskal-Wallis, Spearman).' },
        ],
      },
    ],
  },
]
