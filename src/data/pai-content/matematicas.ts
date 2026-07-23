import type { PaiTema } from '../pai-types'

/* Guía de Bioestadística — Probabilidad, Estadística Descriptiva e
 * Inferencial. Cosechada del módulo PAI de Matemáticas; los temas de
 * Aritmética y Álgebra se congelaron en el tag v1.0-unisa-lmgc.
 * Orientada a la materia UAD “Epidemiología y Bioestadística” (3º). */
export const matematicasTemas: PaiTema[] = [
  {
    modulo: 'matematicas', id: 'mat-3', orden: 1,
    titulo: 'Tema 1 — Probabilidad',
    icono: '🎲',
    resumen: 'La probabilidad es una medida numérica que representa la posibilidad de que ocurra un evento. Se expresa entre 0 (imposible) y 1 (certeza). La suma de todas las probabilidades del espacio muestral = 1.',
    bloques: [
      { t: 'formula', f: 'P(E) = Número de veces en que E ocurre / Número de veces en que E puede ocurrir' },
      { t: 'h2', c: 'Tipos de distribuciones de probabilidad' },
      { t: 'table', h: ['Distribución', 'Descripción', 'Aplicación clínica'], r: [
        ['Uniforme discreta', 'Todos los resultados tienen la misma probabilidad', 'Elección al azar de opciones'],
        ['Bernoulli', 'Solo dos resultados posibles: éxito (p) y fracaso (1-p)', 'Éxito/fracaso en intervención diagnóstica'],
        ['Binomial', 'Serie de n ensayos Bernoulli independientes', 'Número de pacientes con respuesta positiva en n pruebas'],
        ['Poisson', 'Probabilidad de ocurrencias en intervalo de tiempo', 'Número de pacientes que llegan a urgencias por hora'],
        ['Normal (Gauss)', 'Curva en forma de campana; fenómenos continuos', 'Presión arterial, talla, colesterol en población'],
      ]},
      { t: 'h2', c: 'Reglas básicas de probabilidad' },
      { t: 'table', h: ['Regla', 'Fórmula', 'Condición'], r: [
        ['Adición (sin intersección)', 'P(A ∪ B) = P(A) + P(B)', 'Eventos mutuamente excluyentes'],
        ['Adición (con intersección)', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', 'Eventos con intersección'],
        ['Multiplicación', 'P(A y B) = P(A) × P(B)', 'Eventos independientes'],
        ['Probabilidad condicional', 'P(D/E) = P(D ∩ E) / P(E)', 'Dado que E ya ocurrió'],
      ]},
      { t: 'h2', c: 'Ejemplo clínico — Test de APGAR' },
      { t: 'note', c: 'P(deceso | APGAR < 6) = 42/122 = 0.3443 → la probabilidad de deceso en el primer año de vida dado un APGAR < 6 a los 10 minutos es 34.43%.' },
    ],
    mnemotecnia: {
      items: [
        'Escala: 0 = imposible · 0.5 = equiprobable · 1 = certeza. La suma de todas las probabilidades = 1.',
        '5 distribuciones: "U-B-B-P-N" → Uniforme · Bernoulli · Binomial · Poisson · Normal',
        'Reglas: Adición sin intersección: P(A)+P(B) · Con intersección: P(A)+P(B)-P(A∩B) · Multiplicación independientes: P(A)×P(B)',
      ],
    },
    puntosClave: [
      'P(E) siempre está entre 0 y 1. Si obtienes un valor negativo o mayor que 1, hay un error.',
      'La distribución normal (campana de Gauss) es la base de la estadística clínica.',
      'Probabilidad condicional es clave en diagnóstico clínico: P(enfermedad / prueba positiva) = Valor Predictivo Positivo.',
    ],
    errorFrecuente: 'Aplicar la fórmula de adición simple cuando los eventos tienen intersección. Si los eventos pueden ocurrir simultáneamente, SIEMPRE se resta P(A∩B).',
  },
  {
    modulo: 'matematicas', id: 'mat-4', orden: 2,
    titulo: 'Tema 2 — Estadística Descriptiva',
    icono: '📊',
    resumen: 'La estadística descriptiva se limita a la descripción de un conjunto de datos SIN formular generalizaciones sobre la población. N = población, n = muestra. Parámetros: μ, σ. Estadísticos: x̄, s.',
    bloques: [
      { t: 'h2', c: 'Tipos de variables' },
      { t: 'comparison',
        left: { title: 'Cualitativas (categóricas)', items: ['Dicotómicas: solo 2 valores. Ej: Vivo/muerto.', 'Politómicas: más de 2 valores. Ej: Estado civil.'] },
        right: { title: 'Cuantitativas (numéricas)', items: ['Discretas: número finito de valores. Ej: Número de hijos.', 'Continuas: cualquier valor en un rango. Ej: Peso, temperatura.'] },
      },
      { t: 'h2', c: 'Medidas de tendencia central' },
      { t: 'table', h: ['Medida', 'Fórmula / Procedimiento', 'Afectada por outliers'], r: [
        ['Media (promedio)', 'x̄ = (Σxi) / n', 'Sí — usar mediana si hay valores extremos'],
        ['Mediana', 'Valor central de datos ordenados; posición (n+1)/2', 'No — medida resistente'],
        ['Moda', 'Valor que aparece con mayor frecuencia', 'No'],
      ]},
      { t: 'h2', c: 'Medidas de dispersión' },
      { t: 'table', h: ['Medida', 'Fórmula', 'Descripción'], r: [
        ['Rango', 'Valor máx − Valor mín', 'Diferencia extremos; sensible a outliers'],
        ['Varianza (muestra)', 's² = Σ(xi−x̄)²/(n−1)', 'En unidades al cuadrado'],
        ['Desviación estándar', 's = √s²', 'En unidades originales; siempre positiva'],
        ['Rango intercuartil (IQR)', 'IQR = Q3 − Q1', 'Dispersión del 50% central; robusto frente a outliers'],
      ]},
    ],
    mnemotecnia: {
      items: [
        'Las 3M: Media (afectada por outliers) · Mediana (NO afectada) · Moda (valor más frecuente)',
        '4 medidas de dispersión: "R-V-D-I" → Rango · Varianza · Desviación estándar · IQR',
        'Outliers: usar Mediana (no Media). Sin outliers: usar Media.',
      ],
    },
    puntosClave: [
      'Media es la única medida de tendencia central afectada por outliers.',
      'Para calcular la mediana: ORDENAR primero, luego ubicar el centro.',
      'Desviación estándar (s) siempre es positiva y está en las mismas unidades que los datos.',
      'Correlación ≠ causalidad: dos variables pueden correlacionar sin que una cause la otra.',
      'N (mayúscula) = población; n (minúscula) = muestra.',
    ],
    errorFrecuente: 'Olvidar ordenar los datos antes de calcular la mediana. También: confundir varianza (s², unidades al cuadrado) con desviación estándar (s, unidades originales).',
  },
  {
    modulo: 'matematicas', id: 'mat-5', orden: 3,
    titulo: 'Tema 3 — Estadística Inferencial',
    icono: '🔬',
    resumen: 'La estadística inferencial formula conclusiones sobre una POBLACIÓN basadas en una MUESTRA. Involucra pruebas de hipótesis, estimación de parámetros y formulación de predicciones.',
    bloques: [
      { t: 'h2', c: 'Prueba de hipótesis' },
      { t: 'table', h: ['Hipótesis', 'Descripción'], r: [
        ['Nula (H₀)', 'El resultado que se desea contrastar o rechazar; representa la ausencia de diferencia'],
        ['Alternativa (Ha)', 'Manifestación en desacuerdo con H₀; hipótesis de trabajo'],
      ]},
      { t: 'h2', c: 'Pasos para probar una hipótesis' },
      { t: 'table', h: ['Paso', 'Acción'], r: [
        ['1', 'Formular H₀ y Ha'],
        ['2', 'Fijar el nivel de significación (α): típicamente 0.05 (5%)'],
        ['3', 'Seleccionar la prueba estadística (Z, T de Student, ANOVA, Chi²)'],
        ['4', 'Calcular el valor de P'],
        ['5', 'Decisión: si P < α → rechazar H₀. Si P ≥ α → aceptar H₀'],
      ]},
      { t: 'h2', c: 'Tipos de error' },
      { t: 'table', h: ['Error', 'Nombre', 'Descripción', 'Ejemplo clínico'], r: [
        ['Tipo I (α)', 'Falso positivo', 'Se rechaza incorrectamente H₀ cuando es verdadera', 'Se le dice a un hombre que está embarazado'],
        ['Tipo II (β)', 'Falso negativo', 'Se acepta incorrectamente H₀ cuando es falsa', 'Se le dice a una mujer embarazada que no lo está'],
      ]},
      { t: 'h2', c: 'Regresión lineal simple' },
      { t: 'formula', f: 'y = b₀ + b₁x', d: 'y = variable dependiente · x = variable independiente · b₀ = intersección · b₁ = pendiente (cambio en y por cada unidad de x).' },
    ],
    mnemotecnia: {
      items: [
        'Regla de decisión: "p < α → rechaza H₀"',
        'Tipos de error: Tipo I (α) = Falso Positivo | Tipo II (β) = Falso Negativo',
        'Pasos de hipótesis: "FFSCD" → Formular · Fijar α · Seleccionar prueba · Calcular p · Decisión',
        'Potencia del test = 1 − β (mayor potencia = menor probabilidad de falso negativo)',
      ],
    },
    puntosClave: [
      'α = 0.05 es el valor más común: se acepta 5% de probabilidad de error Tipo I.',
      'Valor p NO es la probabilidad de que H₀ sea verdadera — es la probabilidad de obtener los resultados observados si H₀ fuera verdadera.',
      'Potencia del test = 1 − β. Se aumenta la potencia aumentando el tamaño de muestra.',
      'La regresión lineal simple tiene UNA variable independiente (x). La múltiple tiene más de una.',
    ],
    errorFrecuente: 'Interpretar p > 0.05 como "no hay diferencia" o "H₀ es verdadera". Solo dice que con los datos disponibles no hay evidencia suficiente para rechazar H₀ — podría haber una diferencia real no detectada (error Tipo II).',
  },
]
