import type { PaiTema } from '../pai-types'

// Contenido generado usando Claude API como enriquecimiento
// (Módulo 2 — sin apuntes Notion propios)
// Alineado con el currículo PAI de la LMGC, UNISA

export const saludPublicaTemas: PaiTema[] = [
  {
    modulo: 'salud-publica', id: 'sp-1', orden: 1, generadoPorIA: true,
    titulo: 'Tema 1 — Definición de Salud (OMS) y Conceptos Fundamentales',
    icono: '🏥',
    resumen: 'La OMS define salud como "estado de completo bienestar físico, mental y social — no solo ausencia de enfermedad". Esta definición supera el modelo biomédico e incorpora dimensiones sociales y psicológicas.',
    bloques: [
      { t: 'h2', c: 'Definición de salud (OMS, 1948)' },
      { t: 'p', c: '"La salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades." Esta definición sigue siendo la referencia oficial de la Organización Mundial de la Salud.' },
      { t: 'h2', c: 'Evolución histórica del concepto de salud' },
      { t: 'table', h: ['Modelo', 'Enfoque', 'Limitación'], r: [
        ['Mágico-religioso', 'La enfermedad como castigo divino', 'No considera causas naturales'],
        ['Biomédico', 'Enfermedad como disfunción biológica; salud = ausencia de enfermedad', 'Reduce la salud a la biología; ignora dimensiones sociales'],
        ['Biopsicosocial (Engel, 1977)', 'Integra factores biológicos, psicológicos y sociales', 'Complejidad de implementación'],
        ['Determinación social (Breilh)', 'Las condiciones sociales determinan el proceso salud-enfermedad', 'Modelo de referencia en la LMGC'],
      ]},
      { t: 'h2', c: 'Triángulo epidemiológico clásico' },
      { t: 'list', items: [
        'Agente: el elemento capaz de causar daño (bacterias, virus, toxinas, etc.).',
        'Huésped: la persona susceptible de enfermar (factores del individuo).',
        'Ambiente: las condiciones externas que facilitan o impiden la enfermedad (físico, biológico, socioeconómico).',
        'La enfermedad ocurre cuando se altera el equilibrio entre los tres vértices del triángulo.',
      ]},
    ],
    mnemotecnia: { items: ['Triángulo epidemiológico: "A-H-A" → Agente · Huésped · Ambiente'] },
    puntosClave: [
      'La definición de la OMS (1948) incluye bienestar físico, MENTAL y SOCIAL.',
      'El modelo biopsicosocial (Engel, 1977) supera al biomédico al incorporar factores psicológicos y sociales.',
      'La determinación social de la salud es el marco de la LMGC.',
    ],
    errorFrecuente: 'Definir salud solo como ausencia de enfermedad. La OMS expresamente rechaza esta definición reduccionista.',
  },
  {
    modulo: 'salud-publica', id: 'sp-2', orden: 2, generadoPorIA: true,
    titulo: 'Tema 2 — Determinantes Sociales de la Salud',
    icono: '🌐',
    resumen: 'Los determinantes sociales son las condiciones en que las personas nacen, crecen, viven, trabajan y envejecen. Son la causa de las causas: explican por qué ciertas poblaciones enferman más que otras.',
    bloques: [
      { t: 'h2', c: 'Determinantes sociales de la salud (OMS)' },
      { t: 'table', h: ['Categoría', 'Ejemplos', 'Impacto en salud'], r: [
        ['Socioeconómicos', 'Nivel de ingreso, educación, empleo, seguridad social', 'A menor nivel socioeconómico, mayor morbimortalidad'],
        ['Condiciones de vida', 'Vivienda, acceso a agua potable, saneamiento, alimentación', 'Determinan enfermedades infecciosas y crónicas'],
        ['Acceso a servicios de salud', 'Cobertura, calidad, equidad en la atención', 'Acceso temprano reduce mortalidad por enfermedades prevenibles'],
        ['Factores culturales', 'Discriminación, género, etnia, creencias sobre la salud', 'Afectan conductas de salud y acceso a servicios'],
        ['Políticas públicas', 'Leyes de salud, programas gubernamentales, seguridad social', 'Determinantes estructurales de la equidad en salud'],
      ]},
      { t: 'h2', c: 'Inequidad en salud en México' },
      { t: 'list', items: [
        'Las poblaciones indígenas, rurales y de bajos ingresos presentan mayor mortalidad infantil.',
        'La diabetes mellitus tipo 2 afecta desproporcionadamente a poblaciones con obesidad, sedentarismo y acceso limitado a alimentos saludables.',
        'Las mujeres en situación de pobreza tienen mayor riesgo de mortalidad materna.',
        'La violencia es más frecuente en comunidades con alta marginación social.',
      ]},
    ],
    mnemotecnia: { items: ['Determinantes sociales: condiciones en que la gente NACE · CRECE · VIVE · TRABAJA · ENVEJECE (Comisión de Determinantes Sociales, OMS 2008)'] },
    puntosClave: [
      'Los determinantes sociales son "la causa de las causas" de la enfermedad.',
      'La equidad en salud (no igualdad) implica dar más a quien más necesita.',
      'Intervenir en determinantes sociales es más costo-efectivo que tratar enfermedades establecidas.',
    ],
    errorFrecuente: 'Confundir igualdad con equidad en salud. Igualdad = todos reciben lo mismo. Equidad = se da más a quien más necesita para lograr igualdad de resultados.',
  },
  {
    modulo: 'salud-publica', id: 'sp-3', orden: 3, generadoPorIA: true,
    titulo: 'Tema 3 — Epidemiología Básica y Morbimortalidad en México',
    icono: '📊',
    resumen: 'La epidemiología estudia la distribución y determinantes de la salud y las enfermedades en poblaciones. Sus medidas básicas (prevalencia, incidencia, mortalidad) permiten cuantificar el problema de salud pública.',
    bloques: [
      { t: 'h2', c: 'Medidas básicas de epidemiología' },
      { t: 'table', h: ['Medida', 'Definición', 'Fórmula'], r: [
        ['Prevalencia', 'Proporción de personas con una enfermedad en un momento dado', 'Casos existentes / Población total × 100'],
        ['Incidencia', 'Número de NUEVOS casos en un periodo de tiempo', 'Casos nuevos / Población en riesgo × 100'],
        ['Mortalidad', 'Número de muertes en una población en un periodo', 'Defunciones / Población × 1,000'],
        ['Morbilidad', 'Frecuencia de enfermedades o lesiones en una población', 'Casos de enfermedad / Población × 1,000'],
      ]},
      { t: 'h2', c: 'Perfil epidemiológico de México (referencia)' },
      { t: 'table', h: ['Causa', 'Posición', 'Nota'], r: [
        ['Enfermedades del corazón', '1ª causa de muerte', '20.1% del total de defunciones (2017)'],
        ['Diabetes mellitus', '2ª causa de muerte', '15.2%; México con alta prevalencia mundial'],
        ['Tumores malignos', '3ª causa de muerte', '12%'],
        ['Infecciones respiratorias agudas', '1ª causa de enfermedad', '54.8% de consultas en primer nivel'],
        ['Infecciones intestinales', '2ª causa de enfermedad', '12%'],
      ]},
    ],
    mnemotecnia: { items: ['Prevalencia vs. Incidencia: Prevalencia = EXISTENTES (fotografía). Incidencia = NUEVOS (película). "P = foto del momento, I = nuevos ingresos"'] },
    puntosClave: [
      'Prevalencia = proporción en un momento dado. Incidencia = NUEVOS casos.',
      'Las 3 principales causas de muerte en México (cardiopatía, DM2, cáncer) son mayoritariamente crónicas y prevenibles.',
      'Las infecciones respiratorias son la principal causa de consulta en primer nivel.',
    ],
    errorFrecuente: 'Confundir prevalencia con incidencia. Prevalencia incluye casos viejos y nuevos. Incidencia solo incluye NUEVOS casos en un periodo definido.',
  },
  {
    modulo: 'salud-publica', id: 'sp-4', orden: 4, generadoPorIA: true,
    titulo: 'Tema 4 — Niveles de Prevención',
    icono: '🛡️',
    resumen: 'Leavell y Clark (1965) definieron 3 niveles de prevención que corresponden a distintos momentos del proceso salud-enfermedad. El primer nivel es el más costo-efectivo y es la base de la APS-I.',
    bloques: [
      { t: 'h2', c: '3 niveles de prevención (Leavell y Clark)' },
      { t: 'table', h: ['Nivel', 'Momento del proceso', 'Acciones', 'Ejemplos'], r: [
        ['Primario', 'ANTES de que ocurra la enfermedad (período prepatogénico)', 'Promoción de la salud y Protección específica', 'Vacunación, educación para la salud, control de vectores, uso de cinturón de seguridad'],
        ['Secundario', 'DURANTE la enfermedad (período patogénico temprano)', 'Diagnóstico precoz, tratamiento oportuno, limitación del daño', 'Tamizaje (Pap, mamografía, glucosa), diagnóstico y tratamiento de hipertensión, DM2'],
        ['Terciario', 'DESPUÉS de la enfermedad establecida (secuelas)', 'Rehabilitación y reinserción social', 'Fisioterapia tras AVC, rehabilitación cardíaca, grupos de apoyo para adicciones'],
      ]},
      { t: 'h2', c: 'Prevención cuaternaria (concepto actual)' },
      { t: 'p', c: 'Concepto más reciente: medidas para evitar el daño causado por la sobre-medicalización y las intervenciones médicas innecesarias o excesivas (Marc Jamoulle, 1986). Incluye evitar diagnósticos y tratamientos que no benefician al paciente.' },
    ],
    mnemotecnia: { items: ['3 niveles: "ANTES-DURANTE-DESPUÉS" → Primario (prevención/promoción) · Secundario (diagnóstico/tratamiento precoz) · Terciario (rehabilitación)'] },
    puntosClave: [
      'El nivel primario de prevención es el más costo-efectivo a largo plazo.',
      'El tamizaje pertenece al nivel secundario (diagnóstico precoz de personas asintomáticas).',
      'La rehabilitación es un derecho de salud y pertenece al nivel terciario.',
    ],
    errorFrecuente: 'Clasificar la vacunación como prevención secundaria. La vacunación es prevención PRIMARIA (previene que ocurra la enfermedad, antes del período patogénico).',
  },
  {
    modulo: 'salud-publica', id: 'sp-5', orden: 5, generadoPorIA: true,
    titulo: 'Tema 5 — Normas Oficiales Mexicanas (NOM) y Sistema de Salud',
    icono: '📜',
    resumen: 'Las NOM son documentos técnicos de cumplimiento legal obligatorio durante el ejercicio profesional médico en México. Emitidas por la Secretaría de Salud (COFEPRIS/COFEPRES).',
    bloques: [
      { t: 'h2', c: 'Sistema Nacional de Salud en México' },
      { t: 'table', h: ['Institución', 'Población objetivo'], r: [
        ['IMSS (Instituto Mexicano del Seguro Social)', 'Trabajadores del sector formal privado y sus familias'],
        ['ISSSTE (Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado)', 'Trabajadores del sector público federal'],
        ['PEMEX / SEMAR / SEDENA', 'Trabajadores de sus propias instituciones'],
        ['IMSS-Bienestar / Secretaría de Salud', 'Población sin seguridad social (cobertura universal)'],
        ['Sector privado', 'Población con capacidad de pago'],
      ]},
      { t: 'h2', c: 'NOMs más relevantes para el médico general' },
      { t: 'table', h: ['NOM', 'Temática'], r: [
        ['NOM-005-SSA2', 'Planificación familiar'],
        ['NOM-007-SSA2', 'Atención de la mujer durante el embarazo, parto y puerperio y del recién nacido'],
        ['NOM-017-SSA2', 'Vigilancia epidemiológica'],
        ['NOM-030-SSA2', 'Prevención, detección, diagnóstico, tratamiento y control de la hipertensión arterial sistémica'],
        ['NOM-043-SSA2', 'Orientación alimentaria'],
        ['NOM-046-SSA2', 'Violencia familiar, sexual y contra las mujeres'],
      ]},
    ],
    mnemotecnia: { items: ['Sistema de salud México: "IMSS · ISSSTE · PEMEX-SEMAR-SEDENA · IMSS-Bienestar/SSa · Sector privado"'] },
    puntosClave: [
      'Las NOMs son de cumplimiento OBLIGATORIO en la práctica médica.',
      'El médico general debe conocer las NOMs de su área de atención como marco legal.',
      'México tiene un sistema fragmentado con múltiples instituciones por tipo de trabajador.',
    ],
    errorFrecuente: 'Creer que las NOMs son guías de práctica clínica opcionales. Las NOMs son normas legales de cumplimiento obligatorio — incumplirlas puede tener consecuencias legales.',
  },
]
