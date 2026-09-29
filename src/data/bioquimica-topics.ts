import type { Topic } from '../types'

// Bioquímica I y su Laboratorio (UAD · BQ01002) — Semana 1, Clase 1:
// introducción al metabolismo digestivo.
export const bioquimicaTopics: Topic[] = [
  {
    id: 'bioquimica-metabolismo-digestivo',
    title: 'Metabolismo digestivo',
    subtitle: 'Digestión, absorción y metabolismo; saliva, segmentos y fases de la digestión',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🧪',
    keyPoints: [
      'METABOLISMO: conjunto de procesos químicos, físicos, moleculares y enzimáticos, sobre todo celulares, para obtener moléculas y energía y sintetizar componentes. Cadena: alimento → digestión → moléculas pequeñas → absorción → circulación → célula → rutas metabólicas.',
      'DIGESTIÓN rompe macromoléculas; ABSORCIÓN las hace atravesar el epitelio hacia sangre o linfa; METABOLISMO las transforma dentro de la célula.',
      'ANABOLISMO = ARMAR (síntesis, pequeño → grande, consume energía) · CATABOLISMO = CORTAR (degradación, grande → pequeño, libera energía).',
      'La digestión inicia según la macromolécula ★: GLÚCIDOS en la boca (amilasa salival) · PROTEÍNAS en el estómago (pepsina + HCl) · LÍPIDOS en el estómago, pero la mayor parte ocurre en el intestino delgado (bilis + lipasa pancreática).',
      'La amilasa salival actúa a pH ≈ 7 y pierde actividad en el medio ácido del estómago; la amilasa pancreática continúa la digestión de glúcidos en el intestino.',
      'Fases: LUMINAL (hidrólisis en la luz) → MUCOSA (hidrólisis final + absorción por el epitelio) → TRANSPORTE (paso a sangre o linfa).',
    ],
    sections: [
      {
        id: 'bmd-1',
        number: 1,
        title: 'Metabolismo: del alimento a la célula',
        keyTerms: ['metabolismo', 'rutas metabólicas'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El METABOLISMO es el conjunto de procesos químicos, físicos, moleculares y enzimáticos que ocurren principalmente a nivel celular para obtener moléculas utilizables, obtener o utilizar energía y sintetizar lo necesario para la estructura y función de la célula. La digestión ocurre en el aparato digestivo; el metabolismo continúa sobre todo dentro de la célula. En el curso, «carbohidratos» se nombra como «glúcidos».',
          },
          {
            type: 'steps',
            title: 'La cadena completa',
            steps: [
              'Alimento.',
              'Digestión: las macromoléculas se rompen en moléculas pequeñas.',
              'Absorción: atraviesan el epitelio intestinal.',
              'Circulación: viajan por sangre o linfa.',
              'Célula: entran a las rutas metabólicas (p. ej., glucosa → glucólisis → piruvato → acetil-CoA → ciclo de Krebs).',
            ],
          },
          {
            type: 'note',
            title: 'Idea integradora',
            content: 'Comer no es todavía metabolizar: primero se digiere, después se absorbe y solo entonces la célula puede usar los nutrientes en sus rutas metabólicas.',
          },
        ],
      },
      {
        id: 'bmd-2',
        number: 2,
        title: 'Digestión, absorción y metabolismo',
        keyTerms: ['digestión', 'absorción', 'hidrólisis'],
        blocks: [
          {
            type: 'table',
            title: 'Tres procesos distintos',
            data: {
              headers: ['Proceso', 'Qué ocurre', 'Dónde'],
              rows: [
                ['Digestión', 'Las moléculas grandes se rompen en moléculas más pequeñas (hidrólisis)', 'Luz del tubo digestivo'],
                ['Absorción', 'Las moléculas pequeñas atraviesan el epitelio y pasan a sangre o linfa', 'Sobre todo intestino delgado'],
                ['Metabolismo', 'La célula usa y transforma esas moléculas mediante rutas bioquímicas', 'Dentro de la célula'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Hidrólisis',
            content: 'Ruptura de un enlace químico con participación de una molécula de agua. Es el mecanismo de la digestión de glúcidos, proteínas y lípidos. — Hidrólisis.',
          },
          {
            type: 'table',
            title: 'Qué produce la digestión de cada macromolécula',
            data: {
              headers: ['Nutriente', 'Unidades resultantes', 'Destino general'],
              rows: [
                ['Glúcidos', 'Monosacáridos (sobre todo glucosa)', 'Energía, almacenamiento y biosíntesis'],
                ['Proteínas', 'Aminoácidos', 'Síntesis proteica y otras rutas'],
                ['Lípidos', 'Ácidos grasos, monoacilgliceroles y otros', 'Energía, membranas y biosíntesis'],
              ],
            },
          },
        ],
      },
      {
        id: 'bmd-3',
        number: 3,
        title: 'Anabolismo y catabolismo',
        keyTerms: ['anabolismo', 'catabolismo', 'energía'],
        blocks: [
          {
            type: 'comparison',
            title: 'Construir vs degradar',
            left: {
              title: 'Anabolismo — «armar»',
              items: [
                'Síntesis: moléculas pequeñas → grandes',
                'Requiere (consume) energía',
                'Glucosa → glucógeno',
                'Aminoácidos → proteínas',
                'Ácidos grasos + glicerol → triglicéridos',
              ],
            },
            right: {
              title: 'Catabolismo — «cortar»',
              items: [
                'Degradación: moléculas grandes → pequeñas',
                'Libera energía que la célula puede usar',
                'Glucógeno → glucosa',
                'Proteínas → aminoácidos',
                'Triglicéridos → ácidos grasos + glicerol',
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Para no confundirlos',
            content: 'ANAbolismo = ARMAR (de algo chiquito a algo grandote). CATAbolismo = CORTAR (de algo grande a algo pequeño).',
          },
        ],
      },
      {
        id: 'bmd-4',
        number: 4,
        title: 'Regulación del sistema digestivo',
        keyTerms: ['sistema nervioso entérico', 'gastrina', 'hormonas gastrointestinales'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos vías de regulación',
            left: {
              title: 'Neuronal',
              items: [
                'Receptores del canal alimentario: mecanorreceptores (distensión), quimiorreceptores y osmorreceptores',
                'Sistema nervioso entérico: plexo mientérico de Auerbach (motilidad) y submucoso de Meissner (secreción)',
                'Autónomo: el parasimpático (vago) estimula la digestión; el simpático la reduce',
              ],
            },
            right: {
              title: 'Endocrina',
              items: [
                'Hormonas gastrointestinales que coordinan las etapas',
                'Gastrina: alimento en el estómago → secreción de HCl por las células parietales',
                'Secretina: ácido en el duodeno → bicarbonato pancreático',
                'CCK: grasas y aminoácidos en el duodeno → enzimas pancreáticas y contracción de la vesícula',
              ],
            },
          },
          {
            type: 'note',
            title: 'Qué regulan',
            content: 'Motilidad (peristaltismo y segmentación), secreciones digestivas y saciedad. Comer despacio da tiempo a que las señales mecánicas, químicas y neuroendocrinas de saciedad se integren.',
          },
        ],
      },
      {
        id: 'bmd-5',
        number: 5,
        title: 'Saliva y glándulas salivales',
        keyTerms: ['saliva', 'amilasa salival', 'ptialina', 'mucina', 'parótida'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Se producen unos 800–1500 mL de saliva al día (≈0.5 mL/min en reposo), con un pH cercano a 7. Contiene agua, enzimas —sobre todo la α-AMILASA SALIVAL o PTIALINA, que inicia la hidrólisis del almidón—, MUCINA (lubricación), BICARBONATO y electrolitos (Na⁺, K⁺, Cl⁻). Como esquema de estudio: la parte SEROSA aporta las enzimas y la parte MUCOSA el agua y el moco.',
          },
          {
            type: 'table',
            title: 'Glándulas salivales mayores',
            data: {
              headers: ['Glándula', 'Tipo de secreción predominante'],
              rows: [
                ['Parótida', 'Serosa (rica en enzimas)'],
                ['Submandibular', 'Mixta (serosa y mucosa)'],
                ['Sublingual', 'Mucosa'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Funciones de la saliva',
            items: [
              'Humedece y lubrica el alimento; facilita masticación y deglución.',
              'Limpia la cavidad oral y arrastra partículas.',
              'Protección antimicrobiana (lisozima, tiocianato, anticuerpos).',
              'Inicia la digestión de los glúcidos.',
            ],
          },
          {
            type: 'note',
            title: 'Estímulo y masticación',
            content: 'Un estímulo gustativo (p. ej., el limón) activa receptores → vías nerviosas → centros salivales → aumenta la secreción. La masticación reduce el tamaño de las partículas, aumenta la superficie para las enzimas y forma el bolo.',
          },
        ],
      },
      {
        id: 'bmd-6',
        number: 6,
        title: '¿Dónde comienza la digestión? ★',
        keyTerms: ['glúcidos', 'proteínas', 'lípidos', 'pepsina', 'pH'],
        blocks: [
          {
            type: 'table',
            title: 'Depende de la macromolécula',
            data: {
              headers: ['Macromolécula', 'Inicia en', 'Enzima / factor', 'Continúa en'],
              rows: [
                ['Glúcidos', 'Boca', 'Amilasa salival (ptialina)', 'Intestino delgado: amilasa pancreática y enzimas del borde en cepillo'],
                ['Proteínas', 'Estómago', 'Pepsina, activada por el HCl', 'Duodeno y yeyuno: proteasas pancreáticas'],
                ['Lípidos', 'Estómago (con aporte de la lipasa lingual)', 'Lipasas lingual y gástrica', 'Intestino delgado, donde ocurre la mayor parte: bilis + lipasa pancreática'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Amilasa y pH',
            content: 'Las enzimas necesitan condiciones químicas adecuadas. En la boca (pH ≈ 7) actúa la amilasa salival; al llegar al estómago, el medio ácido del HCl altera su estructura y la inactiva. En el intestino delgado, la amilasa PANCREÁTICA continúa la digestión de los glúcidos.',
          },
        ],
      },
      {
        id: 'bmd-7',
        number: 7,
        title: 'Intestinos y fases de la digestión',
        keyTerms: ['intestino delgado', 'fase luminal', 'fase mucosa', 'microbiota'],
        blocks: [
          {
            type: 'comparison',
            title: 'Intestino delgado vs grueso',
            left: {
              title: 'Intestino delgado (duodeno, yeyuno, íleon)',
              items: ['Principal sitio de digestión y absorción', 'Vellosidades y borde en cepillo amplían la superficie', 'La mayor parte de la absorción de nutrientes ocurre aquí'],
            },
            right: {
              title: 'Intestino grueso',
              items: ['Recupera agua y electrolitos', 'Forma las heces', 'La microbiota fermenta lo no digerido y produce ácidos grasos de cadena corta'],
            },
          },
          {
            type: 'steps',
            title: 'Las tres fases',
            steps: [
              'LUMINAL: hidrólisis y solubilización en la luz intestinal (secreciones pancreáticas + bilis).',
              'MUCOSA: hidrólisis final por enzimas del borde en cepillo y absorción por el epitelio.',
              'TRANSPORTE: los nutrientes pasan a los capilares sanguíneos o linfáticos.',
            ],
          },
        ],
      },
      {
        id: 'bmd-8',
        number: 8,
        title: 'Hígado, bilis y páncreas',
        keyTerms: ['bilis', 'emulsificación', 'lipasa pancreática', 'bicarbonato'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El HÍGADO produce los ácidos y sales biliares a partir del colesterol; la VESÍCULA BILIAR almacena y concentra la bilis y la libera al intestino. Las sales biliares EMULSIFICAN las grasas: dividen las masas de grasa en gotas pequeñas y aumentan la superficie para la lipasa. El PÁNCREAS aporta enzimas (amilasa, lipasa y proteasas) y BICARBONATO, que neutraliza el quimo ácido que llega del estómago.',
          },
          {
            type: 'note',
            title: 'Secuencia de los lípidos',
            content: 'Grasa → emulsificación por sales biliares → mayor superficie → acción de la lipasa pancreática → productos absorbibles.',
          },
        ],
      },
      {
        id: 'bmd-9',
        number: 9,
        title: 'Maladigestión vs malabsorción',
        keyTerms: ['maladigestión', 'malabsorción', 'lactasa', 'intolerancia a la lactosa'],
        blocks: [
          {
            type: 'comparison',
            title: 'No son sinónimos',
            left: {
              title: 'Maladigestión',
              items: ['Falla al DEGRADAR una molécula', 'Ej.: déficit de lactasa → la lactosa no se hidroliza'],
            },
            right: {
              title: 'Malabsorción',
              items: ['Falla al ABSORBER nutrientes ya digeridos', 'Una maladigestión puede causarla (la molécula queda demasiado grande)'],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Intolerancia a la lactosa',
            content:
              'Normal: lactosa —lactasa→ glucosa + galactosa → absorción. Con déficit de LACTASA, la lactosa no se hidroliza, llega al colon, las bacterias la fermentan y ejerce un efecto osmótico → distensión, gases y diarrea. Es un ejemplo de cómo una falla de la digestión de una sola molécula produce síntomas gastrointestinales.',
          },
        ],
      },
    ],
  },
]
