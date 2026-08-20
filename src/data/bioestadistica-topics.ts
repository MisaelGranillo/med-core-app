import type { Topic } from '../types'

/* Temas de Bioestadística — Probabilidad, Estadística Descriptiva e
 * Inferencial. Transferidos del banco PAI a la materia UAD
 * “Epidemiología y Bioestadística” (3º). Material de estudio agnóstico,
 * consumido por topics.ts. */
export const bioestadisticaTopics: Topic[] = [
  {
    id: 'probabilidad',
    title: 'Probabilidad',
    subtitle: 'Cuantificar la incertidumbre para tomar decisiones informadas en ciencias de la salud',
    colorKey: 'probabilidad',
    categoria: 'Probabilidad',
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
    categoria: 'Estadística',
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
    categoria: 'Estadística',
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
