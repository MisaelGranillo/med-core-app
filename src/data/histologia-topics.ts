import type { Topic } from '../types'

// Histología I y su Laboratorio (UAD · HS01006) — Semana 1, Clases 1–2 (Dr. Santín).
// El profesor marca con ★ los puntos que pueden aparecer en el examen: se conservan
// como callouts «★ Punto de examen» (correlacion variant 'dato') o keyPoints con ★.
export const histologiaTopics: Topic[] = [
  {
    id: 'histologia-introduccion',
    title: 'Introducción: célula y tejidos',
    subtitle: 'Enfoque de la materia, origen celular y capacidad regenerativa por tejido',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'Histología I cubre el tejido epitelial y el conectivo; el muscular y el nervioso quedan para Histología II.',
      'Abordaje inductivo: de la célula al tejido y del tejido al órgano, con enfoque clínico.',
      'Origen de la vida: sopa primordial → ARN (la chispa) → procariota → eucariota.',
      'Procariota: pequeña, sin organelos membranosos, material genético en el nucleoide.',
      'Eucariota: más grande, con núcleo definido y organelos membranosos.',
      '★ Capacidad regenerativa por tejido: epitelial ALTA, conectivo variable, muscular LIMITADA, nervioso MÍNIMA.',
      'Los cardiomiocitos y las neuronas maduras no se dividen: sus lesiones dejan cicatriz o daño permanente.',
      'Evaluación semanal: examen 40 %, proyecto integrador 30 %, casos clínicos 30 %.',
    ],
    sections: [
      {
        id: 'hint-1',
        number: 1,
        title: 'Enfoque de la materia',
        keyTerms: ['tejido epitelial', 'tejido conectivo', 'inductivo', 'célula-tejido-órgano'],
        blocks: [
          {
            type: 'note',
            title: 'Qué cubre Histología I',
            content:
              'Histología I estudia el tejido epitelial y el conectivo (y sus variedades: óseo, cartilaginoso, adiposo, sanguíneo y linfático). Los tejidos muscular y nervioso se abordan en Histología II. El método es inductivo: de la célula al tejido y de este al órgano, siempre con enfoque clínico. Bibliografía de apoyo sugerida: Ross, Histología.',
          },
        ],
      },
      {
        id: 'hint-2',
        number: 2,
        title: 'Origen celular',
        keyTerms: ['sopa primordial', 'ARN', 'procariota', 'eucariota'],
        blocks: [
          {
            type: 'list',
            title: 'De la sopa primordial a la eucariota',
            items: [
              'Sopa primordial: caldo de moléculas orgánicas en la Tierra primitiva.',
              'El ARN aparece como la primera molécula capaz de autorreplicarse (la "chispa" de la vida).',
              'Primero surgen las células procariotas (sin núcleo definido).',
              'Después evolucionan las eucariotas (con núcleo y organelos membranosos).',
            ],
          },
          {
            type: 'comparison',
            title: 'Eucariota vs. procariota',
            left: {
              title: 'Eucariota',
              items: ['Más grande.', 'Núcleo definido (rodeado de membrana).', 'Organelos membranosos (mitocondrias, RE, Golgi…).'],
            },
            right: {
              title: 'Procariota',
              items: ['Pequeña.', 'Sin núcleo: material genético en el nucleoide.', 'Sin organelos membranosos.'],
            },
          },
        ],
      },
      {
        id: 'hint-3',
        number: 3,
        title: 'Capacidad regenerativa por tejido',
        keyTerms: ['regeneración', 'cardiomiocitos', 'neuronas', 'cicatriz'],
        blocks: [
          {
            type: 'table',
            title: 'Cuánto regenera cada tejido',
            data: {
              headers: ['Tejido', 'Capacidad de regeneración'],
              rows: [
                ['Epitelial', 'ALTA (se renueva constantemente).'],
                ['Conectivo', 'Variable (depende del subtipo).'],
                ['Muscular', 'LIMITADA.'],
                ['Nervioso', 'MÍNIMA.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué el infarto y el daño neuronal dejan secuela',
            content:
              'Los cardiomiocitos y las neuronas maduras no se dividen: tras una lesión no se reemplazan, sino que dejan cicatriz (fibrosis en el corazón) o daño permanente (gliosis en el sistema nervioso). Por eso el infarto y el ictus dejan secuelas.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-microscopia-tecnica',
    title: 'Microscopía y técnica histológica',
    subtitle: 'Microscopios y resolución, el microscopio óptico, la técnica paso a paso y las tinciones',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔭',
    keyPoints: [
      '★ El ojo humano resuelve hasta 0.2 mm; es la referencia de resolución.',
      '★ El microscopio de fuerza atómica (50 pm) tiene la MAYOR resolución de todos.',
      '★ Campo oscuro: solo la luz refractada por la muestra entra al objetivo (fondo negro).',
      '★ Contraste de fase: observa células VIVAS sin teñir, por diferencias de índice de refracción.',
      'MEB 2.5 nm da imagen 3D de superficie; MET 0.2 nm muestra la ultraestructura (organelos).',
      'Técnica: obtención → fijación (formol 4–10 %) → deshidratación → aclaramiento → inclusión (parafina) → corte → tinción → montaje.',
      '★ H&E: hematoxilina tiñe lo basófilo (azul); eosina tiñe lo acidófilo (rosa).',
      '★ El ultramicrotomo fija con tetróxido de osmio (OsO₄) para conservar las membranas (cortes de 50–150 nm).',
    ],
    sections: [
      {
        id: 'hmic-1',
        number: 1,
        title: 'Los puntos de examen (★)',
        keyTerms: ['★', 'punto de examen'],
        blocks: [
          {
            type: 'note',
            title: 'Cómo leer los ★',
            content:
              'El profesor marca con una estrella (★) los datos que pueden caer en el examen. En este tema se conservan como callouts «★ Punto de examen». Los ★ confirmados están en la resolución de los microscopios, en las piezas del microscopio óptico y en la técnica y las tinciones.',
          },
        ],
      },
      {
        id: 'hmic-2',
        number: 2,
        title: 'Tipos de microscopio y resolución',
        keyTerms: ['campo claro', 'campo oscuro', 'contraste de fase', 'MEB', 'MET', 'fuerza atómica'],
        blocks: [
          {
            type: 'table',
            title: 'Microscopios ordenados por resolución (mayor número = peor resolución)',
            data: {
              headers: ['Microscopio', 'Resolución', 'Uso / nota'],
              rows: [
                ['Ojo humano', '0.2 mm', '★ Referencia de resolución.'],
                ['Campo claro', '0.2 μm', 'Luz directa que atraviesa la muestra teñida (rutina).'],
                ['Campo oscuro', '~0.2 μm', '★ Solo la luz refractada por la muestra entra al objetivo (fondo negro): gota gruesa, sífilis.'],
                ['Contraste de fase', '0.2 μm', '★ Células VIVAS sin teñir (diferencias de índice de refracción).'],
                ['Fluorescencia', '0.2 μm', 'Inmunofluorescencia: antígenos, enfermedades autoinmunes.'],
                ['MEB (barrido)', '2.5 nm', 'Imagen 3D de la superficie.'],
                ['MET (transmisión)', '0.2 nm', 'Ultraestructura (organelos); criofractura.'],
                ['Fuerza atómica', '50 pm', '★ La MAYOR resolución de todas.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — resolución',
            content:
              'El ojo humano resuelve 0.2 mm (referencia). La MAYOR resolución la da el microscopio de FUERZA ATÓMICA (50 pm), no el MET. Campo oscuro = solo luz refractada entra al objetivo; contraste de fase = células vivas sin teñir.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'MET en la clínica',
            content:
              'El microscopio electrónico de transmisión (MET), con criofractura, revela la ultraestructura (p. ej. las mitocondrias). Es útil en miopatías mitocondriales, patología renal y errores del metabolismo.',
          },
        ],
      },
      {
        id: 'hmic-3',
        number: 3,
        title: 'El microscopio óptico',
        keyTerms: ['ocular', 'objetivo', 'condensador', 'diafragma', 'platina'],
        blocks: [
          {
            type: 'list',
            title: 'Partes principales',
            items: [
              'Ocular: lente por la que se observa (cerca del ojo).',
              'Tubo y revólver con los objetivos (las lentes de aumento).',
              'Platina: donde se coloca la preparación.',
              'Condensador y diafragma: manejan la luz que llega a la muestra.',
              'Tornillos macro y micrométrico: el enfoque grueso y fino.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — objetivo vs. condensador',
            content:
              'La LENTE OBJETIVO recoge la luz que ATRAVIESA la muestra y forma la imagen aumentada. El CONDENSADOR enfoca (concentra) el haz de luz SOBRE la muestra antes de que la atraviese. No hay que confundirlos.',
          },
        ],
      },
      {
        id: 'hmic-4',
        number: 4,
        title: 'Técnica histológica',
        keyTerms: ['fijación', 'inclusión', 'microtomo', 'ultramicrotomo', 'tetróxido de osmio'],
        blocks: [
          {
            type: 'steps',
            title: 'Del tejido al portaobjetos',
            steps: [
              'Obtención de la muestra (biopsia, pieza quirúrgica).',
              'Fijación: formol (formaldehído) al 4–10 %, para conservar el tejido.',
              'Deshidratación: alcoholes en concentración ascendente.',
              'Aclaramiento (diafanización): xilol o tolueno.',
              'Inclusión: en parafina, para dar consistencia al bloque.',
              'Corte: microtomo (3–5 μm para óptico) o ultramicrotomo (50–150 nm para electrónico).',
              'Tinción: para dar contraste (H&E de rutina).',
              'Montaje: con pineno o resinas, y cubreobjetos.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — ultramicrotomo y OsO₄',
            content:
              'Para microscopía electrónica se usa el ULTRAMICROTOMO (cortes de 50–150 nm) y se fija con TETRÓXIDO DE OSMIO (OsO₄), que conserva las membranas. El microtomo óptico corta secciones mucho más gruesas (3–5 μm).',
          },
        ],
      },
      {
        id: 'hmic-5',
        number: 5,
        title: 'Tinciones',
        keyTerms: ['H&E', 'hematoxilina', 'eosina', 'PAS', 'Feulgen', 'basófilo', 'acidófilo'],
        blocks: [
          {
            type: 'table',
            title: 'Tinciones de uso común',
            data: {
              headers: ['Tinción', 'Qué tiñe'],
              rows: [
                ['Hematoxilina (H&E)', 'Estructuras BASÓFILAS en AZUL/violeta (núcleos, ARN, ADN).'],
                ['Eosina (H&E)', 'Estructuras ACIDÓFILAS en ROSA (citoplasma, colágeno).'],
                ['Mallory', 'Tejido conectivo (tricrómico).'],
                ['PAS', 'Glucógeno y polisacáridos (útil en enfermedad celíaca).'],
                ['Feulgen', 'ADN específicamente.'],
                ['Fucsina-resorcina', 'Fibras elásticas.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — H&E',
            content:
              'En la tinción de rutina H&E: la HEMATOXILINA tiñe lo BASÓFILO de azul (núcleos), y la EOSINA tiñe lo ACIDÓFILO de rosa (citoplasma). Es la trampa clásica: basófilo = azul (hematoxilina), acidófilo = rosa (eosina).',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — colorantes ácidos vs. básicos',
            content:
              'Colorantes ÁCIDOS (Eosina ★, naranja G, anilina azul): tiñen los componentes ACIDÓFILOS, como las proteínas citoplasmáticas (acidofilia = afinidad por colorantes ácidos). Colorantes BÁSICOS (Azul de metileno ★, hematoxilina, pironina G): tiñen los componentes BASÓFILOS, como la heterocromatina ★ y el ARN.',
          },
        ],
      },
    ],
  },
]
