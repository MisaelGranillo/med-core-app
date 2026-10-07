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
  {
    id: 'bioquimica-agua-electrolitos',
    title: 'Agua corporal y electrolitos',
    subtitle: 'Distribución del agua, compartimentos, electrolitos principales y sus alteraciones',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🧪',
    keyPoints: [
      'El agua es el medio de casi todas las reacciones bioquímicas: solvente, reactivo (hidrólisis) y, por su ionización (H₂O ⇌ H⁺ + OH⁻), parte del equilibrio ácido-base.',
      'Compartimentos ★: LIC ≈ 2/3 del agua corporal (≈ 40 % del peso) y LEC ≈ 1/3 (≈ 20 % del peso: intersticial 15 % + plasma 5 %).',
      'Na⁺ = principal catión EXTRACELULAR (135–145 mEq/L; «el sodio atrae agua») · K⁺ = principal catión INTRACELULAR (plasma 3.5–5.0 mEq/L; dentro de la célula 140–150).',
      'Valores que se repitieron en clase ★: Na⁺ 135–145 mEq/L · K⁺ 3.5–5.0 mEq/L · Ca²⁺ 8.5–10.5 mg/dL · osmolaridad plasmática 275–295 mOsm.',
      'Nomenclatura: hiper = alto, hipo = bajo (hipernatremia/hiponatremia, hiperpotasemia/hipopotasemia, hipercalcemia/hipocalcemia).',
      'Regulación: ingresos por la sed; egresos por el riñón bajo la ADH (hormona antidiurética). El riñón es la vía de pérdida regulable.',
    ],
    sections: [
      {
        id: 'bae-1',
        number: 1,
        title: 'El agua en el organismo',
        keyTerms: ['agua', 'solvente', 'ionización del agua', 'ADH'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El agua es el componente predominante del cuerpo y el medio donde ocurre la mayor parte de las reacciones bioquímicas. Actúa como solvente, participa directamente en reacciones (como la hidrólisis) y, al ionizarse, interviene en el equilibrio ácido-base. Su distribución la regulan mecanismos neuronales, endocrinos y renales, con un papel central de la hormona antidiurética (ADH).',
          },
          {
            type: 'note',
            title: 'Ionización del agua',
            content: 'H₂O ⇌ H⁺ (hidrogenión) + OH⁻ (hidroxilo). El balance entre H⁺ y OH⁻ se relaciona con el pH y el equilibrio ácido-base.',
          },
        ],
      },
      {
        id: 'bae-2',
        number: 2,
        title: '¿Cuánta agua hay en el cuerpo?',
        keyTerms: ['agua corporal total', 'edad', 'composición corporal'],
        blocks: [
          {
            type: 'table',
            title: 'Porcentaje de agua según la clase',
            data: {
              headers: ['Etapa', 'Agua corporal (valor de la clase)'],
              rows: [
                ['Feto', '~100 %'],
                ['Recién nacido', '~80 %'],
                ['Niños', '~83 %'],
                ['Hombre adulto', '~75 %'],
                ['Mujer adulta', '~45 % (mayor proporción de grasa)'],
                ['Vejez', '~50 %'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Cifras de la clase vs bibliografía',
            content: 'Para el examen se usan las cifras de la clase. En la bibliografía (Harper, Guyton), el agua corporal total del adulto suele estimarse en ~60 % del peso en el hombre y ~50–55 % en la mujer; esta última cifra es la que cuadra con la distribución por compartimentos (40 % + 20 % del peso). La idea firme en ambas fuentes: el porcentaje baja con la edad y con la grasa corporal.',
          },
          {
            type: 'list',
            title: 'Agua por órgano o tejido (presentación)',
            items: ['Sangre ~85 %', 'Cerebro ~83 %', 'Pulmón ~83 %', 'Corazón ~75 %', 'Músculo ~75 %'],
          },
        ],
      },
      {
        id: 'bae-3',
        number: 3,
        title: 'Compartimentos del agua corporal',
        keyTerms: ['LIC', 'LEC', 'líquido intersticial', 'plasma', 'homeostasis'],
        blocks: [
          {
            type: 'table',
            title: 'Intracelular vs extracelular ★',
            data: {
              headers: ['Rasgo', 'Líquido intracelular (LIC)', 'Líquido extracelular (LEC)'],
              rows: [
                ['Fracción', '≈ 2/3 del agua corporal (≈ 40 % del peso)', '≈ 1/3 del agua corporal (≈ 20 % del peso)'],
                ['Subdivisión', 'Un solo compartimento dentro de las células', 'Intersticial (≈ 15 % del peso) + plasma/intravascular (≈ 5 %) + transcelular (LCR, sinovial, etc.)'],
                ['Catión principal', 'K⁺', 'Na⁺'],
                ['Anión principal', 'Fosfatos y proteínas', 'Cl⁻ (y HCO₃⁻)'],
                ['pH', 'Ligeramente más ácido: 7.10–7.20', 'Ligeramente alcalino: 7.35–7.45'],
                ['Mantiene el gradiente', 'Bomba Na⁺/K⁺ ATPasa', 'Fuerzas de Starling (presión hidrostática y oncótica)'],
              ],
            },
          },
          {
            type: 'note',
            title: 'El líquido intersticial',
            content: 'El líquido intersticial baña a las células y se repone desde el plasma: plasma ↔ intersticio ↔ células. Mantiene estables temperatura, glucosa, pH, calcio, oxígeno, CO₂ y volumen; de ese intercambio depende la homeostasis. Lo regulan el sistema nervioso y el endocrino, en respuesta a la actividad física y la ingesta.',
          },
        ],
      },
      {
        id: 'bae-4',
        number: 4,
        title: 'Electrolitos principales',
        keyTerms: ['sodio', 'potasio', 'calcio', 'magnesio', 'cloro', 'bicarbonato'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los electrolitos son sustancias que están como iones en los líquidos corporales: CATIONES (+) y ANIONES (−). Su reparto desigual entre compartimentos crea los potenciales de membrana y determina hacia dónde se mueve el agua. El sodio y el potasio son los principales en la regulación de la homeostasis del agua.',
          },
          {
            type: 'table',
            title: 'Valores de referencia plasmáticos (presentación)',
            data: {
              headers: ['Electrolito', 'Valor', 'Función clave'],
              rows: [
                ['Na⁺ ★', '135–145 mEq/L (LIC 10–14)', 'Principal catión extracelular: osmolaridad, volemia, potenciales de membrana. «El sodio atrae agua»'],
                ['K⁺ ★', '3.5–5.0 mEq/L (LIC 140–150)', 'Principal catión intracelular: excitabilidad neuromuscular y función cardíaca'],
                ['Ca²⁺ ★', '8.5–10.5 mg/dL', 'Contracción muscular, función neuromuscular, señalización'],
                ['Mg²⁺', '1.5–2.5 mEq/L (LIC 20–30)', 'Cofactor enzimático; se asocia al ATP y sus grupos fosfato'],
                ['Cl⁻', '98–106 mEq/L', 'Principal anión extracelular'],
                ['HCO₃⁻', '22–26 mEq/L', 'Principal amortiguador extracelular (ácido-base)'],
                ['Fosfatos', '1.5–4.5 mg/dL (LIC 100–110 mEq/L)', 'Sobre todo intracelulares; ATP y amortiguación ácido-base'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Cuidado con las unidades',
            content: 'Na⁺ y K⁺ en mEq/L; el Ca²⁺ clínico en mg/dL; la osmolaridad en mOsm. Y distingue siempre el K⁺ PLASMÁTICO (3.5–5.0) del INTRACELULAR (140–150).',
          },
        ],
      },
      {
        id: 'bae-5',
        number: 5,
        title: 'Alteraciones de los electrolitos',
        keyTerms: ['hiponatremia', 'hipernatremia', 'hipopotasemia', 'hiperpotasemia', 'hipocalcemia'],
        blocks: [
          {
            type: 'table',
            title: 'Qué produce cada alteración',
            data: {
              headers: ['Alteración', 'Umbral', 'Consecuencias (presentación)'],
              rows: [
                ['Hiponatremia', 'Na⁺ < 135 mEq/L', 'Edema cerebral, confusión, convulsiones'],
                ['Hipernatremia', 'Na⁺ > 145 mEq/L', 'Deshidratación celular, alteración del estado mental, debilidad muscular'],
                ['Hipopotasemia', 'K⁺ < 3.5 mEq/L', 'Arritmias, debilidad muscular, alcalosis metabólica'],
                ['Hiperpotasemia', 'K⁺ > 5.0 mEq/L', 'Alteraciones neuromusculares, riesgo de paro cardíaco'],
                ['Hipocalcemia', 'Ca²⁺ < 8.5 mg/dL', 'Tetania, espasmo muscular, QT prolongado'],
                ['Hipercalcemia', 'Ca²⁺ > 10.5 mg/dL', 'Debilidad, letargo, cálculos renales'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué el sodio afecta al cerebro',
            content:
              'Como el sodio «atrae agua», en la hiponatremia el LEC queda relativamente diluido y el agua entra a las neuronas → edema cerebral, confusión y convulsiones. En la hipernatremia ocurre lo contrario: el agua sale de las células (deshidratación celular) y aparecen alteraciones del estado mental. Los trastornos del potasio, en cambio, amenazan sobre todo al corazón (arritmias, paro).',
          },
        ],
      },
      {
        id: 'bae-6',
        number: 6,
        title: 'Regulación, ingresos y pérdidas de agua',
        keyTerms: ['sed', 'ADH', 'pérdidas insensibles', 'deshidratación'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El equilibrio del agua depende del individuo y su ambiente: los INGRESOS se regulan por la sed y los EGRESOS por la función renal, bajo el control de la hormona antidiurética (ADH) y del sistema endocrino. Cuando hay que conservar agua, sube la ADH y el riñón retiene más agua.',
          },
          {
            type: 'table',
            title: 'Pérdidas diarias de agua (presentación)',
            data: {
              headers: ['Vía', 'Volumen aproximado'],
              rows: [
                ['Respiración (sin percibirse)', '300–400 mL/día'],
                ['Difusión por la piel (sin percibirse)', '300–400 mL/día'],
                ['Total insensible', '~700 mL/día'],
                ['Sudoración', '~100 mL/día (en clima cálido, 1–2 L/hora)'],
                ['Tracto digestivo', '~100 mL/día (aumenta en enfermedad)'],
                ['Riñón (principal vía regulable)', '500–2000 mL/día'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Desequilibrios hídricos',
            content: 'DESHIDRATACIÓN: pérdida de agua (vómito, diarrea, sudoración, hemorragia) → baja el volumen y pueden subir la osmolaridad y el sodio. SOBREHIDRATACIÓN: exceso relativo de agua → diluye los electrolitos (hiponatremia dilucional).',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-agua-osmolaridad-soluciones',
    title: 'Propiedades del agua, osmolaridad y soluciones',
    subtitle: 'Estructura y puentes de hidrógeno, osmolaridad vs tonicidad y cálculo de concentraciones',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '💧',
    keyPoints: [
      'El agua es un dipolo: O δ− (electronegativo, 2 pares de electrones no compartidos) y H δ+; geometría angular (tetraedro irregular) con ángulo de ~104.5°.',
      'Puentes de hidrógeno: débiles, transitorios (se forman y rompen continuamente), ~4.5 kcal/mol; en conjunto explican cohesión, tensión superficial, viscosidad y punto de ebullición.',
      'Propiedades químicas: mínima ionización, anfótera y NUCLEÓFILA → participa en la HIDRÓLISIS (p. ej., del enlace peptídico).',
      'OSMOLARIDAD = cuántas partículas (plasma 275–295 mOsm) · TONICIDAD = qué efecto tienen sobre el volumen celular. No son sinónimos.',
      'Todo porcentaje se interpreta sobre 100: D5 % = 5 g/100 mL → 25 g en 500 mL · NaCl 0.9 % = 0.9 g/100 mL → 4.5 g en 500 mL, 9 g por litro · D50 % 50 mL → 25 g.',
      'Molaridad = mol/L de SOLUCIÓN (cambia con la temperatura) · Molalidad = mol/kg de SOLVENTE.',
    ],
    sections: [
      {
        id: 'bao-1',
        number: 1,
        title: 'Estructura de la molécula de agua',
        keyTerms: ['dipolo', 'electronegatividad', '104.5°', 'constante dieléctrica'],
        blocks: [
          {
            type: 'list',
            title: 'Rasgos estructurales (presentación)',
            items: [
              'Fórmula H₂O; geometría angular representada como un tetraedro irregular.',
              'El oxígeno es electronegativo y tiene dos pares de electrones no compartidos.',
              'Ángulo H–O–H de ~104.5°.',
              'Distribución asimétrica de cargas: O δ− y H δ+ → molécula polar (dipolo).',
            ],
          },
          {
            type: 'note',
            title: 'Constante dieléctrica',
            content: 'En clase se explicó que el agua «mantiene una constante dieléctrica»: cuando cede un hidrógeno, el oxígeno busca de inmediato otro para estabilizarse, por lo que cede y recupera hidrógenos con rapidez. En la bibliografía, que el agua tenga una constante dieléctrica ALTA significa que debilita la atracción entre iones de carga opuesta; por eso disuelve tan bien las sales y otras moléculas polares.',
          },
          {
            type: 'paragraph',
            content:
              'El ángulo de 104.5° es consecuencia de la distribución electrónica alrededor del oxígeno. Ese arreglo hace posibles la polaridad, la interacción entre moléculas y los puentes de hidrógeno, y explica la organización ordenada del agua en estado sólido (las estructuras cristalinas de los copos de nieve).',
          },
        ],
      },
      {
        id: 'bao-2',
        number: 2,
        title: 'Puentes de hidrógeno y propiedades físicas',
        keyTerms: ['puente de hidrógeno', 'cohesión', 'tensión superficial', 'viscosidad'],
        blocks: [
          {
            type: 'definition',
            title: 'Puente de hidrógeno',
            content: 'Interacción entre el H δ+ de una molécula de agua y el O δ− de otra. Individualmente es débil (su ruptura requiere ~4.5 kcal/mol) y transitoria, con vida media muy corta. — Puente (enlace) de hidrógeno.',
          },
          {
            type: 'comparison',
            title: 'Propiedades del agua',
            left: {
              title: 'Físicas',
              items: ['Incolora y sin sabor', 'Existe en estado sólido, líquido y gaseoso', 'Alta cohesión', 'Tensión superficial', 'Viscosidad', 'Punto de ebullición elevado'],
            },
            right: {
              title: 'Químicas',
              items: ['Molécula inorgánica y polar', 'Mínima ionización (H₂O ⇌ H⁺ + OH⁻)', 'Anfótera (actúa como ácido o como base)', 'Nucleófila', 'Participa en reacciones (hidrólisis)', 'Disuelve múltiples sustancias'],
            },
          },
          {
            type: 'note',
            title: 'Débiles pero numerosos',
            content: 'Cada puente de hidrógeno es débil, pero son tantos y se reorganizan tan rápido que, en conjunto, producen la cohesión, la tensión superficial, la viscosidad y el punto de ebullición característicos del agua.',
          },
        ],
      },
      {
        id: 'bao-3',
        number: 3,
        title: 'El agua como nucleófilo: hidrólisis',
        keyTerms: ['nucleófilo', 'hidrólisis', 'enlace peptídico'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Un nucleófilo es una especie rica en electrones que reacciona donando densidad electrónica. El agua es nucleófila porque su oxígeno tiene regiones ricas en electrones; por eso puede romper enlaces al incorporarse a ellos: la HIDRÓLISIS (A—B + H₂O → A—OH + H—B).',
          },
          {
            type: 'steps',
            title: 'Enlace peptídico: formación e hidrólisis',
            steps: [
              'Aminoácido 1 + aminoácido 2 → dipéptido + H₂O (se forma el enlace peptídico y se libera agua).',
              'Dipéptido + H₂O → aminoácido + aminoácido (hidrólisis: el agua rompe el enlace).',
              'Las proteasas digestivas catalizan esta hidrólisis al degradar las proteínas de la dieta.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Conexión con la Clase 1',
            content:
              'La digestión revisada en la clase anterior (amilasa, pepsina, tripsina, lipasas) es, químicamente, una serie de hidrólisis: en cada enlace roto de un carbohidrato, proteína o triglicérido participa una molécula de agua.',
          },
        ],
      },
      {
        id: 'bao-4',
        number: 4,
        title: 'Agua alcalina, ácida y de ósmosis',
        keyTerms: ['agua alcalina', 'agua ácida', 'agua de ósmosis'],
        blocks: [
          {
            type: 'table',
            title: 'Lo que muestra la presentación',
            data: {
              headers: ['Tipo', 'Características', 'Advertencia'],
              rows: [
                ['Agua alcalina', 'pH > 7, contiene minerales; se le atribuyen efectos sobre el equilibrio ácido-base', 'La propia presentación indica que la evidencia de esos efectos es limitada e inconsistente'],
                ['Agua ácida', 'pH < 7', 'Posibles efectos: erosión dental e irritación gastrointestinal'],
                ['Agua de ósmosis', 'Muy baja en minerales', 'Uso en contextos específicos (p. ej., pacientes con enfermedad renal, procesos técnicos)'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Nota de estudio',
            content: 'No conviene convertir afirmaciones comerciales sobre el «agua alcalina» en reglas clínicas: el pH sanguíneo lo regulan los amortiguadores, el pulmón y el riñón, no el agua que se bebe.',
          },
        ],
      },
      {
        id: 'bao-5',
        number: 5,
        title: 'Osmolaridad y tonicidad',
        keyTerms: ['osmolaridad', 'tonicidad', 'ósmosis', 'osmorreceptores'],
        blocks: [
          {
            type: 'table',
            title: 'No son sinónimos ★',
            data: {
              headers: ['Rasgo', 'Osmolaridad', 'Tonicidad'],
              rows: [
                ['Qué mide', 'Concentración de partículas osmóticamente activas', 'Efecto de un fluido sobre el volumen celular'],
                ['Unidad / forma', 'mOsm/L (plasma 275–295 mOsm)', 'Isotónico, hipotónico, hipertónico'],
                ['Solutos que cuenta', 'Todos, incluso los que atraviesan membranas', 'Solo los solutos efectivos (no penetrantes), como el Na⁺'],
                ['Para memorizar', '¿Cuántas partículas?', '¿Qué le pasa a la célula?'],
              ],
            },
          },
          {
            type: 'paragraph',
            content:
              'El agua se mueve entre compartimentos por difusión, transporte activo, filtración y ósmosis. En la ósmosis, el agua cruza una membrana semipermeable hacia donde hay mayor concentración efectiva de solutos, buscando equilibrar la tonicidad; los osmorreceptores detectan esos cambios y participan en la regulación.',
          },
          {
            type: 'comparison',
            title: 'Efecto sobre la célula',
            left: { title: 'Medio hipertónico', items: ['El agua SALE de la célula', 'La célula se encoge (deshidratación celular)'] },
            right: { title: 'Medio hipotónico', items: ['El agua ENTRA a la célula', 'La célula se hincha; en casos extremos, edema celular'] },
          },
          {
            type: 'note',
            title: 'Valores: clase vs bibliografía',
            content: 'En clase: normal 275–295 mOsm y «más de 320» como hiperosmolaridad. En la bibliografía, cualquier valor > 295 ya es hiperosmolar; > 320 mOsm/kg es el umbral del estado hiperosmolar hiperglucémico (con glucosa > 600 mg/dL), la forma grave que se tomó como ejemplo.',
          },
        ],
      },
      {
        id: 'bao-6',
        number: 6,
        title: 'Alteraciones: hiper e hipoosmolaridad',
        keyTerms: ['hiperosmolaridad', 'hiponatremia hipotónica', 'urea', 'metanol', 'presión oncótica'],
        blocks: [
          {
            type: 'list',
            title: 'Hiperosmolaridad (ejemplos de clase)',
            items: [
              'Hiperglucemia: ↑ glucosa → ↑ osmolaridad → el agua sale de las células → deshidratación celular; además, la glucosuria arrastra agua por el riñón.',
              'Intoxicación por metanol: hiperosmolaridad + acidosis metabólica.',
            ],
          },
          {
            type: 'note',
            title: 'Actividad 1: hiperosmolaridad SIN hipertonicidad',
            content: 'Actividad 1 — hiperosmolaridad SIN hipertonicidad: ocurre cuando lo que sube la osmolaridad es un soluto que atraviesa las membranas y se reparte a ambos lados, así que no sostiene un gradiente efectivo. Ejemplos: urea elevada (uremia), metanol y otros alcoholes u osmoles pequeños. ↑ osmolaridad ≠ ↑ tonicidad.',
          },
          {
            type: 'steps',
            title: 'Hipotonicidad con hipoosmolaridad: hiponatremia hipotónica',
            steps: [
              '↓ Na⁺ extracelular respecto al agua.',
              'El LEC se vuelve hipotónico (baja la osmolaridad y la tonicidad).',
              'El agua entra a las células → edema celular.',
              'En el SNC: edema cerebral → confusión → convulsiones.',
            ],
          },
          {
            type: 'comparison',
            title: 'Presión osmótica vs oncótica',
            left: { title: 'Presión osmótica', items: ['Depende de las partículas osmóticamente activas', 'Mueve agua entre compartimentos'] },
            right: { title: 'Presión oncótica', items: ['Depende sobre todo de las proteínas plasmáticas (albúmina)', 'Retiene agua dentro del vaso (fuerzas de Starling)'] },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El paciente diabético descompensado',
            content:
              'Una glucosa muy alta eleva la osmolaridad plasmática por encima de 320 mOsm: el agua sale de las neuronas y aparece alteración del estado de conciencia, mientras la glucosuria provoca poliuria y deshidratación. Por eso en el estado hiperosmolar hiperglucémico se repone primero volumen, con soluciones como el NaCl 0.9 %.',
          },
        ],
      },
      {
        id: 'bao-7',
        number: 7,
        title: 'Soluciones y formas de expresar concentración',
        keyTerms: ['soluto', 'solvente', '% m/v', 'molaridad', 'molalidad'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Una solución tiene un SOLUTO (lo que se disuelve; se expresa en kg, g o mg) y un SOLVENTE (el medio que lo disuelve; en L o mL). En las soluciones clínicas el solvente suele ser agua. Regla de la clase: todo porcentaje se interpreta sobre 100.',
          },
          {
            type: 'table',
            title: 'Formas de expresar concentración',
            data: {
              headers: ['Expresión', 'Fórmula', 'Nota'],
              rows: [
                ['% m/m', 'g de soluto / g de solución × 100', 'Masa sobre masa'],
                ['% v/v', 'mL de soluto / mL de solución × 100', 'Volumen sobre volumen'],
                ['% m/v', 'g de soluto / mL de solución × 100', 'La de las soluciones IV (D5 %, NaCl 0.9 %)'],
                ['Molaridad (M)', 'moles de soluto / L de SOLUCIÓN', 'Depende del volumen → cambia con la temperatura'],
                ['Molalidad (m)', 'moles de soluto / kg de SOLVENTE', 'Depende de la masa → casi no cambia con la temperatura'],
                ['Osmolaridad', 'mOsm / L', 'Partículas osmóticamente activas (plasma 275–295)'],
              ],
            },
          },
        ],
      },
      {
        id: 'bao-8',
        number: 8,
        title: 'Cálculos con soluciones intravenosas',
        keyTerms: ['dextrosa 5 %', 'dextrosa 50 %', 'solución fisiológica', 'Hartmann'],
        blocks: [
          {
            type: 'steps',
            title: 'Regla de tres: dextrosa al 5 % en 500 mL',
            steps: [
              '5 % = 5 g de glucosa en 100 mL.',
              '5 g → 100 mL; x g → 500 mL.',
              'x = (5 × 500) / 100 = 25 g de glucosa.',
              'Con la misma lógica: D5 % en 50 mL = 2.5 g.',
            ],
          },
          {
            type: 'table',
            title: 'Resultados que conviene dominar ★',
            data: {
              headers: ['Solución', 'Significa', 'Volumen', 'Soluto'],
              rows: [
                ['Dextrosa 5 %', '5 g/100 mL', '500 mL', '25 g de glucosa'],
                ['Dextrosa 5 %', '5 g/100 mL', '50 mL', '2.5 g de glucosa'],
                ['Dextrosa 50 % (hipoglucemia)', '50 g/100 mL', '50 mL', '25 g de glucosa'],
                ['NaCl 0.9 %', '0.9 g/100 mL', '500 mL', '4.5 g de NaCl'],
                ['NaCl 0.9 %', '0.9 g/100 mL', '1000 mL', '9 g de NaCl'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Actividad 2: soluciones IV y tonicidad',
            data: {
              headers: ['Solución', 'Composición', 'Tonicidad / uso'],
              rows: [
                ['NaCl 0.9 % (fisiológica)', '0.9 g NaCl/100 mL', 'Isotónica; reposición de volumen'],
                ['Dextrosa 5 %', '5 g glucosa/100 mL', 'Osmolaridad cercana al plasma, pero la glucosa se metaboliza y deja agua libre → efecto final hipotónico'],
                ['Solución mixta', 'Salina + glucosa', 'Depende de la formulación'],
                ['Hartmann (Ringer lactato)', 'Varios electrolitos (solución balanceada)', 'Isotónica; reposición de volumen y electrolitos'],
                ['NaCl 0.45 %', '0.45 g NaCl/100 mL', 'Hipotónica'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'El porcentaje ya es la receta',
            content:
              '«X %» = X gramos en cada 100 mL. Para cualquier volumen: gramos = (% × mL) / 100. D5 % en 1 L → 50 g; NaCl 0.9 % en 1 L → 9 g. La tonicidad, en cambio, no se deduce solo del porcentaje: depende de si el soluto cruza membranas o se metaboliza.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-presion-osmotica-oncotica',
    title: 'Presión osmótica, oncótica y fuerzas de Starling',
    subtitle: 'Osmolaridad vs osmolalidad, ósmosis vs difusión, albúmina, Starling y cristaloides vs coloides',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🫧',
    keyPoints: [
      'OSMOLARIDAD = partículas por LITRO de solución (mOsm/L; plasma 275–295) · OSMOLALIDAD = partículas por KG de solvente (mOsm/kg H₂O). Ambas = molaridad o molalidad × i (partículas por disociación).',
      'ÓSMOSIS = paso pasivo de AGUA de menor a mayor concentración de solutos · PRESIÓN OSMÓTICA = la fuerza que frena ese paso (~17 mmHg por litro). DIFUSIÓN = paso de SOLUTOS según tamaño, carga y polaridad.',
      'Na⁺ = principal soluto osmótico EXTRACELULAR · K⁺ = INTRACELULAR · proteínas (albúmina) = INTRAVASCULAR.',
      'ALBÚMINA ★: ~60 % de las proteínas del plasma, ~25 mmHg de presión oncótica, se sintetiza en el hígado y transporta ácidos grasos, bilirrubina, iones y fármacos.',
      'STARLING: la presión HIDROSTÁTICA saca agua del vaso al intersticio; la ONCÓTICA la regresa del intersticio al vaso.',
      'CRISTALOIDES (fisiológica, mixta, Hartmann) vs COLOIDES (albúmina, almidón, gelatinas): los coloides elevan la presión oncótica y retienen agua en el vaso.',
    ],
    sections: [
      {
        id: 'bpo-1',
        number: 1,
        title: 'Osmolaridad vs osmolalidad',
        keyTerms: ['osmolaridad', 'osmolalidad', 'factor i', 'osmómetro'],
        blocks: [
          {
            type: 'table',
            title: 'Dos formas de expresar las partículas',
            data: {
              headers: ['Rasgo', 'Osmolaridad plasmática', 'Osmolalidad plasmática'],
              rows: [
                ['Qué mide', 'Partículas osmóticamente activas por LITRO de solución', 'Partículas osmóticamente activas por KG de agua (solvente)'],
                ['Fórmula', 'Molaridad × i', 'Molalidad × i'],
                ['Unidad', 'mOsm/L', 'mOsm/kg H₂O'],
                ['Cómo se obtiene', 'Se calcula con fórmula (sodio, glucosa, nitrógeno ureico)', 'Se mide en el laboratorio con un osmómetro'],
                ['Temperatura', 'Varía con la temperatura y el volumen', 'No varía con la temperatura'],
                ['Rango normal', '275–295 mOsm/L', '275–295 mOsm/kg H₂O'],
              ],
            },
          },
          {
            type: 'note',
            title: 'El factor i',
            content: 'El factor i es el número de partículas que libera el soluto al disolverse: la glucosa no se disocia (i = 1); el NaCl se separa en Na⁺ y Cl⁻ (i ≈ 2). Por eso una misma molaridad de NaCl aporta casi el doble de osmoles que de glucosa. Regla: osmolaRidad = litRo de solución; osmolaLidad = kiLo de solvente.',
          },
        ],
      },
      {
        id: 'bpo-2',
        number: 2,
        title: 'Estados clínicos hiper e hipoosmolares',
        keyTerms: ['estado hiperglucémico hiperosmolar', 'diabetes insípida', 'SIADH', 'polidipsia psicógena'],
        blocks: [
          {
            type: 'table',
            title: 'Lo que muestra la presentación',
            data: {
              headers: ['Condición', 'Estado osmolar', 'Mecanismo', 'Clave clínica'],
              rows: [
                ['Estado hiperglucémico hiperosmolar (EHH)', 'Hiperosmolar (> 320 mOsm/kg)', 'Glucosa muy elevada (> 600 mg/dL)', 'Deshidratación celular severa, alteración del estado de alerta'],
                ['Diabetes insípida', 'Hiperosmolar (> 295)', 'Pérdida de agua libre (hipernatremia)', 'Poliuria diluida (> 3 L/día), polidipsia'],
                ['Intoxicación por metanol / etilenglicol', 'Hiperosmolar (brecha osmolar > 10)', 'Alcoholes o glicoles no medidos', 'Acidosis metabólica con anión gap e hiperosmolaridad'],
                ['SIADH', 'Hipoosmolar (< 275)', 'Retención de agua libre por ADH', 'Hiponatremia euvolémica; riesgo de edema cerebral'],
                ['Insuficiencia cardíaca / cirrosis', 'Hipoosmolar (< 275)', 'Retención de agua por estímulo neurohumoral', 'Edema periférico o ascitis con hiponatremia dilucional'],
                ['Polidipsia psicógena', 'Hipoosmolar (< 275)', 'Ingesta masiva de agua', 'Orina extremadamente diluida (< 100 mOsm/kg)'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Etanol vs metanol',
            content:
              'El etanol es el alcohol de consumo; el metanol (alcohol de madera) es tóxico: produce hiperosmolaridad y acidosis metabólica. Se insistió en su relevancia en temporadas de fiestas, cuando aumentan las bebidas adulteradas.',
          },
        ],
      },
      {
        id: 'bpo-3',
        number: 3,
        title: 'Presión osmótica y ósmosis',
        keyTerms: ['presión osmótica', 'ósmosis', 'membrana semipermeable'],
        blocks: [
          {
            type: 'comparison',
            title: 'No son lo mismo',
            left: { title: 'Ósmosis', items: ['Paso de AGUA de menor a mayor concentración de solutos', 'Busca igualar la concentración a ambos lados', 'Proceso pasivo', 'Requiere membrana semipermeable'] },
            right: { title: 'Presión osmótica', items: ['Fuerza que ejercen los solutos para atraer agua', 'Fuerza necesaria para FRENAR la ósmosis', 'Se mide en miliosmoles; ~17 mmHg por litro de agua', 'Depende del número de partículas, no de su carga'] },
          },
          {
            type: 'list',
            title: 'Factores que afectan la presión osmótica',
            items: ['Concentración de solutos.', 'Volumen de la solución.', 'Temperatura.'],
          },
          {
            type: 'note',
            title: 'Usos de la presión osmótica',
            content: 'La presión osmótica mantiene la integridad de la célula y el equilibrio hídrico entre compartimentos. Fuera del cuerpo se aprovecha en membranas semipermeables, purificación de agua y conservación de alimentos (deshidratarlos en soluciones muy concentradas alarga su vida).',
          },
        ],
      },
      {
        id: 'bpo-4',
        number: 4,
        title: 'Ósmosis vs difusión',
        keyTerms: ['difusión', 'canales iónicos', 'GLUT', 'Na⁺/K⁺-ATPasa'],
        blocks: [
          {
            type: 'comparison',
            title: 'Qué se mueve',
            left: { title: 'Difusión', items: ['Se mueven MOLÉCULAS (solutos)', 'Depende de tamaño, carga, polaridad y gradiente', 'Pasiva, por canales o transportadores (GLUT)', 'Activa si gasta energía (bomba Na⁺/K⁺-ATPasa, simportadores, antiportadores)'] },
            right: { title: 'Ósmosis', items: ['Se mueve el AGUA', 'Va hacia donde hay más solutos', 'Siempre pasiva'] },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Regla rápida',
            content: 'Difusión = solutos. Ósmosis = agua. Presión osmótica = la fuerza contraria a la ósmosis.',
          },
        ],
      },
      {
        id: 'bpo-5',
        number: 5,
        title: 'Electrolitos que sostienen la presión osmótica',
        keyTerms: ['sodio', 'potasio', 'volemia', 'potencial de membrana'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Cada compartimento tiene su soluto dominante: el Na⁺ regula la presión osmótica EXTRACELULAR (y con ella la volemia), el K⁺ la INTRACELULAR (clave en la conducción eléctrica y el potencial de membrana) y las proteínas, sobre todo la albúmina, la INTRAVASCULAR.',
          },
          {
            type: 'table',
            title: 'Tabla de esta presentación (mEq/L)',
            data: {
              headers: ['Electrolito', 'Extracelular', 'Intracelular'],
              rows: [
                ['Sodio (Na⁺)', '135–145', '15–20'],
                ['Potasio (K⁺)', '3.5–5', '150–155'],
                ['Calcio (Ca²⁺)', '1–2', '4.5–5'],
                ['Bicarbonato (HCO₃⁻)', '18–23', '10–12'],
                ['Cloro (Cl⁻)', '98–108', '1–4'],
                ['Magnesio (Mg²⁺)', '4.5–5.5', '27–29'],
                ['Fosfato (HPO₄²⁻)', '1.7–4.5', '100–104'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Cifras distintas entre clases',
            content: 'Esta tabla no coincide del todo con la de la Clase 2 (p. ej., K⁺ intracelular 150–155 vs 140–150; Mg²⁺ extracelular 4.5–5.5 vs 1.5–2.5; HCO₃⁻ extracelular 18–23 vs 22–26). Las ideas que no cambian: Na⁺ y Cl⁻ dominan fuera de la célula; K⁺, Mg²⁺ y fosfatos, dentro. Para valores clínicos de laboratorio conviene usar los de la Clase 2 (Na⁺ 135–145, K⁺ 3.5–5.0, HCO₃⁻ 22–26 mEq/L).',
          },
        ],
      },
      {
        id: 'bpo-6',
        number: 6,
        title: 'Albúmina y presión oncótica',
        keyTerms: ['albúmina', 'presión oncótica', 'fenitoína', 'hipoalbuminemia'],
        blocks: [
          {
            type: 'definition',
            title: 'Presión oncótica',
            content: 'Presión osmótica que ejercen las proteínas del plasma. Es pequeña comparada con la de los electrolitos, pero decisiva para retener agua dentro del vaso. La principal responsable es la albúmina. — Presión oncótica (coloidosmótica).',
          },
          {
            type: 'list',
            title: 'Albúmina ★',
            items: [
              'Representa ~60 % de las proteínas del plasma.',
              'Aporta ~25 mmHg de presión oncótica.',
              'Se sintetiza principalmente en el hígado.',
              'Transporta ácidos grasos, bilirrubina, iones metálicos y fármacos.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Fenitoína e hipoalbuminemia',
            content:
              'La fenitoína (difenilhidantoína) viaja muy unida a la albúmina; solo la fracción libre actúa. Si la albúmina baja (enfermedad hepática, malnutrición proteica), aumenta la fenitoína libre y el paciente puede intoxicarse aunque la dosis no haya cambiado.',
          },
        ],
      },
      {
        id: 'bpo-7',
        number: 7,
        title: 'Fuerzas de Starling',
        keyTerms: ['presión hidrostática', 'presión oncótica', 'intersticio', 'edema'],
        blocks: [
          {
            type: 'table',
            title: 'Ley de Starling',
            data: {
              headers: ['Presión', 'Efecto'],
              rows: [
                ['Hidrostática', 'Favorece que el agua pase del compartimento INTRAVASCULAR al INTERSTICIAL'],
                ['Oncótica', 'Favorece que el agua regrese del INTERSTICIAL al INTRAVASCULAR'],
              ],
            },
          },
          {
            type: 'paragraph',
            content:
              'El equilibrio entre ambas fuerzas regula el intercambio de agua y electrolitos entre la sangre y el líquido intersticial. Si cae la albúmina, la presión oncótica ya no compensa a la hidrostática y el agua se queda en el intersticio: edema.',
          },
        ],
      },
      {
        id: 'bpo-8',
        number: 8,
        title: 'Cristaloides, coloides y tonicidad',
        keyTerms: ['cristaloides', 'coloides', 'hipovolemia', 'tonicidad'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos familias de soluciones IV',
            left: { title: 'Cristaloides', items: ['Solutos pequeños (electrolitos, glucosa)', 'Se reparten con facilidad entre compartimentos', 'Fisiológica 0.9 %, mixta, Hartmann'] },
            right: { title: 'Coloides', items: ['Moléculas grandes', 'Elevan la presión oncótica y retienen agua en el vaso', 'Albúmina, almidón, gelatinas'] },
          },
          {
            type: 'table',
            title: 'Clasificación por tonicidad (actividad 5)',
            data: {
              headers: ['Hipertónicas', 'Isotónicas', 'Hipotónicas'],
              rows: [
                ['Dextrosa 50 % (clase)', 'NaCl 0.9 % (clase)', 'Dextrosa 5 %* (clase)'],
                ['NaCl 3 %', 'Hartmann / Ringer lactato', 'NaCl 0.45 %'],
                ['Dextrosa 10 %', 'Plasma-Lyte A', 'NaCl 0.225 %'],
              ],
            },
          },
          {
            type: 'note',
            title: '*Dextrosa 5 %',
            content: '*La dextrosa 5 % es casi isoosmolar en la bolsa, pero al metabolizarse la glucosa queda agua libre: su efecto en el cuerpo es hipotónico. Los ejemplos sin «(clase)» son soluciones hospitalarias habituales para completar la actividad.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Choque hipovolémico',
            content:
              'Ante la pérdida de volumen intravascular se reponen cristaloides y, según el caso, coloides (albúmina, gelatinas, almidón) para sostener la presión oncótica. En clase se advirtió que la solución salina hipertónica no es la opción para reponer volumen, porque saca agua de las células y las deshidrata.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-equilibrio-acido-base',
    title: 'Equilibrio ácido-base y sistemas amortiguadores',
    subtitle: 'pH, gasometría, pulmón vs riñón, amortiguadores y los cuatro trastornos',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '⚖️',
    keyPoints: [
      'pH sanguíneo normal 7.35–7.45 ★: < 7.35 = ACIDOSIS · > 7.45 = ALCALOSIS. Ácido = DONA H⁺; base = ACEPTA H⁺.',
      'Gasometría ★: pCO₂ 35–45 mmHg (pulmón) · HCO₃⁻ 22–26 mEq/L (riñón) · pO₂ 80–100 mmHg (pulmón) · pH 7.35–7.45.',
      'CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (la anhidrasa carbónica acelera la reacción). ↑ CO₂ → ↑ H⁺ → ↓ pH.',
      'PULMÓN corrige en MINUTOS (retiene o elimina CO₂) · RIÑÓN en HORAS a DÍAS (secreta H⁺, reabsorbe ~80 % del HCO₃⁻ en el túbulo proximal, genera bicarbonato nuevo con glutamina y fosfatos).',
      'Regla de clase: si el trastorno es METABÓLICO, pH y HCO₃⁻ van en la MISMA dirección; si es RESPIRATORIO, pH y pCO₂ van en dirección CONTRARIA.',
      'Ejemplos: cetoacidosis diabética y acidosis láctica (acidosis metabólica) · vómito crónico y furosemida (alcalosis metabólica) · EPOC y asma (acidosis respiratoria) · ansiedad e hiperventilación (alcalosis respiratoria).',
    ],
    sections: [
      {
        id: 'bab-1',
        number: 1,
        title: 'pH, ácidos y bases',
        keyTerms: ['pH', 'ácido', 'base', 'Henderson-Hasselbalch'],
        blocks: [
          {
            type: 'comparison',
            title: 'Ácido vs base',
            left: { title: 'Ácido', items: ['DONADOR de protones (H⁺)', 'Fuerte: se disocia totalmente (HCl)', 'La mayoría son débiles: se disocian parcialmente'] },
            right: { title: 'Base', items: ['ACEPTOR de protones (H⁺)', 'Fuerte: se ioniza completamente liberando OH⁻', 'La mayoría son débiles'] },
          },
          {
            type: 'note',
            title: 'Henderson-Hasselbalch',
            content: 'Henderson-Hasselbalch: pH = pKa + log (A⁻ / HA), donde HA es el ácido y A⁻ su base conjugada. No se pide calcular: basta entender que el pH depende de la proporción entre la base y el ácido. En la sangre esa proporción es HCO₃⁻ (riñón) frente a CO₂ (pulmón).',
          },
          {
            type: 'table',
            title: 'Gases arteriales y quién los regula ★',
            data: {
              headers: ['Parámetro', 'Valor normal', 'Órgano que lo regula'],
              rows: [
                ['pCO₂', '35–45 mmHg', 'Respiratorio'],
                ['HCO₃⁻', '22–26 mEq/L', 'Renal'],
                ['pO₂', '80–100 mmHg', 'Respiratorio'],
                ['pH', '7.35–7.45', 'Diversos mecanismos'],
              ],
            },
          },
        ],
      },
      {
        id: 'bab-2',
        number: 2,
        title: 'Regulación respiratoria: el CO₂',
        keyTerms: ['CO₂', 'ácido carbónico', 'hiperventilación', 'hipoventilación'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El CO₂ que producen las células actúa como ácido: al unirse al agua forma ácido carbónico (H₂CO₃), que libera H⁺ y HCO₃⁻. Como es una molécula pequeña y muy soluble, difunde con facilidad entre membranas y compartimentos, así que el pulmón puede cambiar el pH en MINUTOS ventilando más o menos.',
          },
          {
            type: 'steps',
            title: 'Efecto de los cambios en la pCO₂',
            steps: [
              'Hipoventilación → se retiene CO₂ → ↑ H₂CO₃ → ↑ H⁺ → ↓ pH → acidosis respiratoria.',
              'Hiperventilación → se elimina CO₂ → ↓ H₂CO₃ → ↓ H⁺ → ↑ pH → alcalosis respiratoria.',
            ],
          },
          {
            type: 'note',
            title: 'Anhidrasa carbónica',
            content: 'La anhidrasa carbónica es la enzima que acelera CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (reacción reversible). Está en el eritrocito, el páncreas, el intestino, el músculo estriado, el endotelio pulmonar y la nefrona.',
          },
        ],
      },
      {
        id: 'bab-3',
        number: 3,
        title: 'Regulación renal: H⁺ y bicarbonato',
        keyTerms: ['túbulo proximal', 'glutamina', 'amonio', 'fosfato'],
        blocks: [
          {
            type: 'list',
            title: 'Qué hace el riñón (horas a días)',
            items: [
              'El túbulo proximal aumenta o disminuye la secreción de H⁺.',
              'Reabsorbe ~80 % del HCO₃⁻ filtrado.',
              'Produce bicarbonato nuevo por dos vías: glutamina y fosfatos.',
            ],
          },
          {
            type: 'steps',
            title: 'Vía de la glutamina',
            steps: [
              'La glutamina se desamina en la célula tubular → α-cetoglutarato + amonio (NH₄⁺).',
              'El α-cetoglutarato se metaboliza con CO₂ y H₂O → HCO₃⁻ nuevo, que pasa a la sangre.',
              'El NH₄⁺ se disocia en amoniaco y se elimina en la luz tubular: sale ácido por la orina.',
            ],
          },
          {
            type: 'table',
            title: 'Sistema fosfato (H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻)',
            data: {
              headers: ['Situación', 'Qué hace el fosfato'],
              rows: [
                ['Aumenta el H⁺', 'HPO₄²⁻ capta H⁺ → H₂PO₄⁻ (fosfato ácido, se elimina por orina)'],
                ['Disminuye el H⁺', 'H₂PO₄⁻ libera H⁺ → HPO₄²⁻'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Dónde actúa el fosfato',
            content: 'El fosfato actúa sobre todo dentro de la célula (alta concentración de PO₄, presente en ATP, ADN, ARN y fosfolípidos) y en el túbulo renal, donde se filtra en el glomérulo y se une a H⁺ para eliminarse como fosfato ácido. Es el principal control metabólico (no respiratorio) del equilibrio ácido-base.',
          },
        ],
      },
      {
        id: 'bab-4',
        number: 4,
        title: 'Sistemas amortiguadores',
        keyTerms: ['amortiguador', 'tampón', 'bicarbonato', 'hemoglobina'],
        blocks: [
          {
            type: 'definition',
            title: 'Amortiguador',
            content: 'Sistema (tampón o buffer) que capta o cede H⁺ para impedir cambios bruscos de pH. El principal de la sangre es el par bicarbonato / ácido carbónico. — Amortiguador (tampón, buffer).',
          },
          {
            type: 'table',
            title: 'Seis amortiguadores (actividad 11)',
            data: {
              headers: ['Amortiguador', 'Dónde / cómo actúa'],
              rows: [
                ['Bicarbonato / ácido carbónico', 'Principal amortiguador extracelular; conecta pulmón (CO₂) y riñón (HCO₃⁻)'],
                ['Fosfato', 'Intracelular y tubular renal; capta o libera H⁺'],
                ['Albúmina y proteínas plasmáticas', 'Sus grupos ácidos y básicos captan o ceden H⁺'],
                ['Hemoglobina', 'Amortigua el H⁺ que se genera al transportar CO₂ en el eritrocito'],
                ['Proteínas intracelulares', 'Amortiguación dentro de la célula'],
                ['Amonio / amoniaco (NH₄⁺/NH₃)', 'Permite al riñón eliminar ácido por la orina'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Qué viene de la clase',
            content: 'El bicarbonato, el fosfato, el amonio (vía glutamina) y la albúmina se vieron en clase; hemoglobina y proteínas intracelulares completan la actividad con la bibliografía.',
          },
        ],
      },
      {
        id: 'bab-5',
        number: 5,
        title: 'Los cuatro trastornos ácido-base',
        keyTerms: ['acidosis metabólica', 'alcalosis metabólica', 'acidosis respiratoria', 'alcalosis respiratoria'],
        blocks: [
          {
            type: 'table',
            title: 'Tabla de la presentación',
            data: {
              headers: ['Trastorno', 'pH', 'HCO₃⁻', 'pCO₂', 'Causas'],
              rows: [
                ['Acidosis metabólica', '< 7.35', '< 22 mEq/L', '< 35 mmHg (compensa)', 'Enfermedad renal, choque, cetoacidosis diabética, diarrea, acidosis tubular, intoxicación por ácidos'],
                ['Alcalosis metabólica', '> 7.45', '> 26 mEq/L', '> 45 mmHg (compensa)', 'Vómito crónico, furosemida, torasemida, potasio bajo'],
                ['Acidosis respiratoria', '< 7.35', '> 26 mEq/L (compensa)', '> 45 mmHg', 'EPOC, asma, neumonía, enfisema, falla cardíaca'],
                ['Alcalosis respiratoria', '> 7.45', '< 22 mEq/L (compensa)', '< 35 mmHg', 'Ansiedad, hiperventilación, dolor, teofilina, encefalitis, traumatismo craneoencefálico'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Hiperaldosteronismo',
            content: 'Ojo con el hiperaldosteronismo: en clase y en la diapositiva se mencionó el hiperaldosteronismo entre las causas de acidosis metabólica. En la bibliografía (Guyton, Harper) se asocia con ALCALOSIS metabólica: la aldosterona hace que el riñón pierda H⁺ y K⁺. Conviene anotarlo en la alcalosis.',
          },
          {
            type: 'steps',
            title: 'Cómo leer una gasometría (regla de clase)',
            steps: [
              'Mira el pH: < 7.35 acidosis; > 7.45 alcalosis.',
              'Busca el origen: si cambió sobre todo el HCO₃⁻ es METABÓLICO; si cambió la pCO₂ es RESPIRATORIO.',
              'Metabólico: pH y HCO₃⁻ van en la MISMA dirección. Respiratorio: pH y pCO₂ van en dirección CONTRARIA.',
              'Revisa la compensación: el otro órgano mueve su parámetro para acercar el pH a la normalidad.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Ejemplos que dio el docente',
            content:
              'Cetoacidosis diabética y acidosis láctica → acidosis metabólica. Vómito de contenido gástrico ácido (se pierde HCl) y furosemida → alcalosis metabólica. Crisis de asma o EPOC (retienen CO₂) → acidosis respiratoria. Ataque de ansiedad (hiperventila) → alcalosis respiratoria.',
          },
        ],
      },
      {
        id: 'bab-6',
        number: 6,
        title: 'Fósforo y enfermedad renal',
        keyTerms: ['fósforo sérico', 'fosfaturia', 'enfermedad renal crónica', 'hiperparatiroidismo'],
        blocks: [
          {
            type: 'table',
            title: 'Pruebas para el fosfato',
            data: {
              headers: ['Prueba', 'Qué aporta'],
              rows: [
                ['Fósforo sérico ★', 'La mejor prueba: 2.5–4.5 mg/dL; refleja el fosfato extracelular'],
                ['Fósforo urinario de 24 h', 'Cuantifica la excreción (muestra titulable)'],
                ['EGO', 'Detecta fosfatos en orina (fosfaturia, cristales)'],
                ['Gases arteriales', 'pH, pCO₂ y HCO₃⁻: estado ácido-base'],
                ['Electrolitos séricos', 'Na⁺, K⁺, Cl⁻, HCO₃⁻, Ca²⁺, Mg²⁺ y fosfato'],
                ['Depuración renal', 'TFG / aclaramiento de creatinina'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Indicaciones específicas',
            data: {
              headers: ['Situación', 'Qué pedir'],
              rows: [
                ['Litiasis renal', 'Fosfato urinario de 24 h, EGO (cristales), electrolitos y función renal'],
                ['Hiperparatiroidismo', 'Fósforo sérico (suele estar bajo), calcio (elevado), PTH, vitamina D, función renal'],
                ['Enfermedad renal crónica', 'Fósforo sérico y urinario, electrolitos, gases arteriales, TFG/creatinina'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Riñón enfermo → acidosis',
            content:
              'En la enfermedad renal disminuye la excreción de H⁺ y falla el amortiguador fosfato: aparece acidosis metabólica. Las alteraciones del fósforo afectan además el metabolismo óseo y la producción de ATP.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-glucidos',
    title: 'Glúcidos: concepto y estructura general',
    subtitle: 'Unidad II — glucosa, grupos hidroxilo, aldosas y cetosas, Fischer y Haworth, D/L y α/β',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🍞',
    keyPoints: [
      'GLÚCIDOS ★ = polihidroxialdehídos o polihidroxicetonas: cadenas de carbono con varios grupos hidroxilo (–OH) y un grupo carbonilo (C=O). En el curso se prefiere «glúcidos» a «carbohidratos».',
      'Fórmula general (CH₂O)n, proporción C:H:O = 1:2:1. Un adulto requiere ~2000 kcal/día: glúcidos 40–60 %, lípidos 30–40 %, proteínas 10–15 %.',
      'ALDOSA = carbonilo como aldehído en C1 (glucosa) · CETOSA = carbonilo como cetona en C2 (fructosa). Solo los MONOSACÁRIDOS se clasifican en aldosas y cetosas.',
      'Glucosa, fructosa y galactosa comparten C₆H₁₂O₆: lo que las distingue es la POSICIÓN de los –OH y del carbonilo (pregunta de examen).',
      'FISCHER = representación LINEAL (orienta los carbonos y los –OH) · HAWORTH = representación CÍCLICA, en azúcares de 5 o más carbonos en medio acuoso; permite ver α y β.',
      'D = forma natural y más abundante; L = su imagen en espejo. En el anillo: –OH del carbono anomérico ABAJO = α; ARRIBA = β.',
    ],
    sections: [
      {
        id: 'bgl-1',
        number: 1,
        title: 'Los glúcidos en la dieta',
        keyTerms: ['carbohidratos', 'kcal', 'dieta'],
        blocks: [
          {
            type: 'table',
            title: 'Distribución de ~2000 kcal/día en el adulto',
            data: {
              headers: ['Macronutriente', 'Proporción'],
              rows: [
                ['Carbohidratos (glúcidos)', '40–60 %'],
                ['Lípidos', '30–40 %'],
                ['Proteínas', '10–15 %'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Unidad II',
            content: 'La Unidad II (estructura, función e importancia de los glúcidos) empezó en la Clase 3 y su estructura general se desarrolló en la Clase 4. La clasificación y el enlace glucosídico están en el tema «Clasificación de los glúcidos y enlace glucosídico».',
          },
        ],
      },
      {
        id: 'bgl-2',
        number: 2,
        title: 'La glucosa y sus destinos',
        keyTerms: ['glucosa', 'glucógeno', 'ribosa', 'galactosa'],
        blocks: [
          {
            type: 'list',
            title: 'Qué se obtiene de la glucosa',
            items: [
              'Energía: es la principal fuente.',
              'Glucógeno: su forma de almacenamiento.',
              'Ribosa y desoxirribosa: los azúcares de ARN y ADN.',
              'Galactosa: para sintetizar la lactosa de la leche.',
              'Glucolípidos.',
              'Glucoproteínas.',
              'Proteoglucanos.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Conexión con clases previas',
            content:
              'La glucosa une temas ya vistos: la amilasa inicia la digestión de los glúcidos en la boca (Clase 1), la dextrosa es glucosa en las soluciones IV y la hiperglucemia eleva la osmolaridad (Clases 2 y 3), y la cetoacidosis diabética aparece cuando la célula no puede usarla (acidosis metabólica).',
          },
        ],
      },
      {
        id: 'bgl-3',
        number: 3,
        title: 'Qué es un glúcido',
        keyTerms: ['polihidroxialdehído', 'polihidroxicetona', 'carbonilo', '(CH₂O)n'],
        blocks: [
          {
            type: 'definition',
            title: 'Glúcido',
            content: 'Compuesto polihidroxialdehído o polihidroxicetona: una cadena de carbonos con varios grupos hidroxilo (–OH) y un grupo carbonilo (C=O). Fórmula general (CH₂O)n, con proporción C:H:O de 1:2:1 (triosa C₃H₆O₃, pentosa C₅H₁₀O₅, hexosa C₆H₁₂O₆). — Glúcido (carbohidrato, hidrato de carbono).',
          },
          {
            type: 'note',
            title: '¿Por qué «glúcidos»?',
            content: '«Carbohidrato» viene de carbono + hidrato (H y O). En clase se prefiere «glúcidos» porque lípidos y proteínas también contienen carbono, hidrógeno y oxígeno: el nombre no los distingue.',
          },
          {
            type: 'paragraph',
            content:
              'Conocer la estructura importa porque en sus enlaces se almacena la energía que la planta capta en la fotosíntesis, y esa energía se libera al romperlos durante la respiración celular. La estructura determina también cómo se almacena el glúcido y si nuestras enzimas pueden digerirlo.',
          },
        ],
      },
      {
        id: 'bgl-4',
        number: 4,
        title: 'El grupo hidroxilo (–OH)',
        keyTerms: ['grupo hidroxilo', 'isómeros', 'solubilidad', 'puentes de hidrógeno'],
        blocks: [
          {
            type: 'list',
            title: 'Qué determina el –OH',
            items: [
              'Polaridad y solubilidad: forma puentes de hidrógeno con el agua y hace que los glúcidos se disuelvan en sangre y citoplasma.',
              'Reactividad y formación de enlaces: con él se forman los anillos y los enlaces α o β.',
              'Reconocimiento biológico: enzimas, transportadores y señalización celular reconocen la orientación de cada –OH.',
            ],
          },
          {
            type: 'table',
            title: 'Misma fórmula, distinta molécula ★',
            data: {
              headers: ['Molécula', 'Fórmula', 'Carbonilo', 'Tipo'],
              rows: [
                ['Glucosa', 'C₆H₁₂O₆', 'Aldehído en C1', 'Aldohexosa'],
                ['Galactosa', 'C₆H₁₂O₆', 'Aldehído en C1 (–OH de C4 invertido respecto a la glucosa)', 'Aldohexosa'],
                ['Fructosa', 'C₆H₁₂O₆', 'Cetona en C2', 'Cetohexosa'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Pregunta de examen',
            content: 'Glucosa, galactosa y fructosa son isómeros: misma fórmula molecular, distinta posición de los –OH o del carbonilo. Esa diferencia basta para cambiar su nombre, sus propiedades y su función.',
          },
        ],
      },
      {
        id: 'bgl-5',
        number: 5,
        title: 'Aldosas y cetosas',
        keyTerms: ['aldosa', 'cetosa', 'aldohexosa', 'cetohexosa'],
        blocks: [
          {
            type: 'comparison',
            title: 'Según el grupo carbonilo',
            left: { title: 'Aldosa', items: ['Carbonilo en forma de ALDEHÍDO', 'En el carbono 1 (C1)', 'Glucosa, galactosa, ribosa, gliceraldehído'] },
            right: { title: 'Cetosa', items: ['Carbonilo en forma de CETONA', 'En el carbono 2 (C2)', 'Fructosa, ribulosa, dihidroxiacetona'] },
          },
          {
            type: 'note',
            title: 'Dos criterios que se combinan',
            content: 'Aldosa/cetosa describe el carbonilo; triosa/pentosa/hexosa, el número de carbonos. Se juntan en un solo nombre: la glucosa es una ALDOHEXOSA (aldehído + 6 carbonos) y la fructosa una CETOHEXOSA. Solo los monosacáridos se clasifican así.',
          },
        ],
      },
      {
        id: 'bgl-6',
        number: 6,
        title: 'Proyecciones de Fischer y Haworth',
        keyTerms: ['proyección de Fischer', 'proyección de Haworth', 'forma cíclica', 'carbono anomérico'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos maneras de dibujar la glucosa',
            left: { title: 'Fischer (lineal)', items: ['Cadena vertical: el carbonilo arriba', 'Muestra la orientación de los carbonos y de cada –OH', 'Enlaces horizontales: salen hacia el observador', 'Enlaces verticales: van hacia atrás del plano', 'Se puede girar 180° sin cambiar la configuración, pero NO 90°'] },
            right: { title: 'Haworth (cíclica)', items: ['En medio acuoso, los glúcidos de 5 o más carbonos forman un anillo', 'El carbonilo se une al oxígeno de un –OH de la misma cadena', 'El anillo se dibuja plano (aunque no lo es)', 'Permite ver la configuración α y β'] },
          },
          {
            type: 'note',
            title: 'El nombre',
            content: 'En clase se pronunció «Howard», pero el nombre correcto es proyección de HAWORTH (Walter Haworth). La glucosa se ve así en tres formas: cadena abierta, Fischer y anillo de Haworth.',
          },
        ],
      },
      {
        id: 'bgl-7',
        number: 7,
        title: 'Configuración D/L y α/β',
        keyTerms: ['D-glucosa', 'L-glucosa', 'enantiómeros', 'alfa', 'beta'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos pares que no hay que confundir',
            left: { title: 'D y L', items: ['Se definen en la forma LINEAL (Fischer)', 'Son imágenes en espejo (enantiómeros)', 'D = forma natural y más abundante; la que usa el cuerpo'] },
            right: { title: 'α y β', items: ['Se definen en la forma CÍCLICA (Haworth)', '–OH del carbono anomérico ABAJO → α', '–OH del carbono anomérico ARRIBA → β', 'Las formas α y β pueden interconvertirse'] },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '¿Por qué D-glucosa y no L-glucosa? (actividad)',
            content: 'Las enzimas y los transportadores (como los GLUT) tienen sitios con forma tridimensional específica: reconocen la D-glucosa y no su imagen en espejo, igual que una mano derecha no entra en un guante izquierdo. Por eso el organismo usa la forma D.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-glucidos-clasificacion',
    title: 'Clasificación de los glúcidos y enlace glucosídico',
    subtitle: 'Por carbonos y por unidades; mono, di, oligo y polisacáridos; enlaces α y β',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🍬',
    keyPoints: [
      'Por CARBONOS ★: 3 triosa · 4 tetrosa · 5 pentosa · 6 hexosa · 7 heptosa. Ribosa (ARN) y desoxirribosa (ADN) son pentosas.',
      'Por UNIDADES ★: 1 monosacárido · 2 disacárido · 3–10 oligosacárido · más de 10 polisacárido.',
      'Disacáridos clave: SACAROSA = glucosa + fructosa, α(1→2) · LACTOSA = galactosa + glucosa, β(1→4) · MALTOSA = glucosa + glucosa, α(1→4).',
      'ENLACE GLUCOSÍDICO: unión covalente por CONDENSACIÓN (libera agua). Azúcar–azúcar = O-glucosídico; con nitrógeno = N-glucosídico.',
      'Enlaces α se digieren (ALMIDÓN) · enlaces β no se digieren: no tenemos celulasa (CELULOSA, fibra).',
      'Lactulosa = galactosa + fructosa: laxante para estreñimiento y encefalopatía hepática.',
    ],
    sections: [
      {
        id: 'bgc-1',
        number: 1,
        title: 'Clasificación por número de carbonos',
        keyTerms: ['triosa', 'pentosa', 'hexosa', 'heptosa'],
        blocks: [
          {
            type: 'table',
            title: 'Monosacáridos según sus carbonos',
            data: {
              headers: ['Carbonos', 'Nombre', 'Aldosa (ejemplo)', 'Cetosa (ejemplo)'],
              rows: [
                ['3', 'Triosa', 'Gliceraldehído', 'Dihidroxiacetona'],
                ['4', 'Tetrosa', 'Eritrosa', 'Eritrulosa'],
                ['5', 'Pentosa', 'Ribosa', 'Ribulosa, xilulosa'],
                ['6', 'Hexosa', 'Glucosa, galactosa, manosa', 'Fructosa'],
                ['7', 'Heptosa', '—', 'Sedoheptulosa'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Por qué importan los carbonos',
            content: 'Los monosacáridos más comunes tienen 3, 4, 5 y 6 carbonos, y el número reaparecerá en el metabolismo: la glucosa (6 C) se parte en moléculas de 3 C como el gliceraldehído-3-fosfato. La ribosa (ARN) y la desoxirribosa (ADN) son pentosas.',
          },
        ],
      },
      {
        id: 'bgc-2',
        number: 2,
        title: 'Clasificación por número de unidades',
        keyTerms: ['monosacárido', 'disacárido', 'oligosacárido', 'polisacárido'],
        blocks: [
          {
            type: 'table',
            title: 'Moléculas de azúcar',
            data: {
              headers: ['Grupo', 'Unidades', 'Ejemplos'],
              rows: [
                ['Monosacárido', '1', 'Glucosa, fructosa, galactosa, ribosa'],
                ['Disacárido', '2', 'Sacarosa, lactosa, maltosa'],
                ['Oligosacárido', '3–10', 'Rafinosa (trisacárido)'],
                ['Polisacárido', 'Más de 10', 'Almidón, glucógeno, celulosa'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Simples vs complejos',
            content: 'Por su tamaño, los monosacáridos, disacáridos y oligosacáridos se agrupan como glúcidos SIMPLES (bajo peso molecular) y los polisacáridos como COMPLEJOS (alto peso molecular, polímeros).',
          },
        ],
      },
      {
        id: 'bgc-3',
        number: 3,
        title: 'Monosacáridos',
        keyTerms: ['ribosa', 'desoxirribosa', 'glucosamina', 'ácido glucurónico'],
        blocks: [
          {
            type: 'list',
            title: 'Características',
            items: ['Una sola molécula de azúcar; no se hidrolizan en glúcidos más pequeños.', 'Tienen 3 o más carbonos.', 'Pueden estar en cadena lineal o en anillo.', 'Son los únicos que se clasifican en aldosas y cetosas.'],
          },
          {
            type: 'table',
            title: 'Ejemplos y usos (presentación)',
            data: {
              headers: ['Monosacárido', 'Uso o importancia'],
              rows: [
                ['Fructosa', 'Presente en frutas; alimento para el espermatozoide'],
                ['Galactosa', 'Con la glucosa forma lactosa; parte de glucolípidos, glucoproteínas y cerebrósidos'],
                ['Ribosa', 'Necesaria para formar ARN y ATP'],
                ['Desoxirribosa', 'Azúcar de los nucleótidos del ADN'],
                ['Gliceraldehído', 'Intermediario de la vía metabólica de la glucosa'],
                ['Glucosamina', 'Amino azúcar usado para proteger las articulaciones; presente en el cartílago'],
                ['Ácido glucurónico', 'Se forma por oxidación de la glucosa; abundante en el tejido conectivo'],
              ],
            },
          },
        ],
      },
      {
        id: 'bgc-4',
        number: 4,
        title: 'El enlace glucosídico',
        keyTerms: ['enlace glucosídico', 'condensación', 'O-glucosídico', 'N-glucosídico'],
        blocks: [
          {
            type: 'steps',
            title: 'Cómo se forma',
            steps: [
              'Un –OH de un monosacárido reacciona con un –OH de otra molécula.',
              'Se forma un enlace covalente tipo éter (C–O–C) y se libera una molécula de agua (condensación).',
              'La enzima que lo construye es una glicosiltransferasa.',
              'La numeración indica qué carbonos se unen: 1→4 une el C1 de un azúcar con el C4 del siguiente (maltosa).',
            ],
          },
          {
            type: 'table',
            title: 'Tipos de enlace glucosídico',
            data: {
              headers: ['Tipo', 'El azúcar se une a…', 'Dónde aparece'],
              rows: [
                ['O-glucosídico', 'Un oxígeno: otro azúcar', 'Disacáridos (1→4, 1→6), oligo y polisacáridos; se forma en el aparato de Golgi'],
                ['N-glucosídico', 'Un nitrógeno', 'Glucoproteínas (retículo endoplásmico) y nucleótidos (base nitrogenada)'],
                ['S-glucosídico', 'Un azufre', 'Menos frecuente'],
              ],
            },
          },
          {
            type: 'note',
            title: 'S-glucosídico',
            content: 'En clase se asoció el enlace S-glucosídico con los lípidos. La «S» se refiere al azufre: es la unión del azúcar con otra molécula a través de un átomo de azufre (tioglucósidos). Para el examen conviene recordar O = azúcar–azúcar y N = con nitrógeno (proteínas, nucleótidos).',
          },
        ],
      },
      {
        id: 'bgc-5',
        number: 5,
        title: 'Disacáridos',
        keyTerms: ['sacarosa', 'lactosa', 'maltosa', 'lactulosa'],
        blocks: [
          {
            type: 'table',
            title: 'Los tres disacáridos principales ★',
            data: {
              headers: ['Disacárido', 'Monosacáridos', 'Enlace', 'Características'],
              rows: [
                ['Sacarosa', 'Glucosa + fructosa', 'α(1→2)', 'Azúcar de mesa (caña, remolacha); muy soluble y dulce; cristalina, incolora y sólida'],
                ['Lactosa', 'Galactosa + glucosa', 'β(1→4)', 'Azúcar de la leche; soluble, menos dulce'],
                ['Maltosa', 'Glucosa + glucosa', 'α(1→4)', 'Producto de la hidrólisis del almidón (cebada, cerveza)'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Rasgos de los disacáridos',
            items: ['Dos monosacáridos unidos por condensación (enlace glucosídico + H₂O).', 'Pueden ser iguales (maltosa) o diferentes (sacarosa).', 'Muy solubles en agua y casi todos de sabor dulce (la lactosa menos).', 'Son los glúcidos más abundantes de la dieta.'],
          },
          {
            type: 'table',
            title: 'Otros disacáridos (presentación)',
            data: {
              headers: ['Disacárido', 'Composición', 'Uso'],
              rows: [
                ['Trehalosa', 'Glucosa + glucosa', 'En hongos; propiedades reductoras'],
                ['Celobiosa', 'Glucosa + glucosa', 'Resulta de la hidrólisis de la celulosa'],
                ['Isomaltosa', 'Glucosa + glucosa', 'Del metabolismo del almidón; edulcorante'],
                ['Lactulosa', 'Fructosa + galactosa', 'Estreñimiento y encefalopatía hepática'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Lactulosa',
            content: 'La lactulosa no se absorbe: llega al colon, retiene agua por efecto osmótico y actúa como laxante; también se usa en la encefalopatía hepática. Como contiene fructosa y galactosa, el docente advirtió no usarla de forma continua sin indicación, sobre todo en pacientes con diabetes.',
          },
        ],
      },
      {
        id: 'bgc-6',
        number: 6,
        title: 'Oligosacáridos y polisacáridos',
        keyTerms: ['prebióticos', 'almidón', 'glucógeno', 'celulosa'],
        blocks: [
          {
            type: 'list',
            title: 'Oligosacáridos o prebióticos (3–10 unidades)',
            items: ['Presentes en las plantas en forma de fibra.', 'No se absorben en el estómago ni en el intestino.', 'No aportan glucosa.', 'Los metabolizan las bacterias intestinales por fermentación.', 'Forman parte de glucoproteínas y glucolípidos.'],
          },
          {
            type: 'table',
            title: 'Polisacáridos (más de 10 unidades de glucosa)',
            data: {
              headers: ['Polisacárido', 'Función', 'Enlace', '¿Lo digerimos?'],
              rows: [
                ['Almidón', 'Reserva energética vegetal (papa, arroz, maíz, trigo)', 'α', 'Sí'],
                ['Glucógeno', 'Reserva energética animal (hígado y músculo)', 'α', 'Sí'],
                ['Celulosa', 'Estructura de la planta; fibra dietética', 'β', 'No: no tenemos celulasa'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Almidón vs celulosa',
            content: 'Ambos están hechos solo de glucosa: lo que cambia es el enlace. Las enzimas digestivas rompen los enlaces α del almidón y liberan glucosa; los enlaces β de la celulosa llegan intactos al colon como fibra, aumentan el bolo fecal y alimentan a la microbiota.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-polisacaridos-fibra',
    title: 'Polisacáridos, fibra y prebióticos',
    subtitle: 'Almidón, glucógeno y celulosa; fibra soluble e insoluble; prebióticos vs probióticos',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🌾',
    keyPoints: [
      'HOMOPOLISACÁRIDOS = un solo tipo de monosacárido (almidón, glucógeno, celulosa, quitina) · HETEROPOLISACÁRIDOS = varios tipos (ácido hialurónico, condroitín sulfato, heparina).',
      'ALMIDÓN = reserva VEGETAL: amilosa (~20 %, lineal y helicoidal, α1→4, 200–2500 glucosas) + amilopectina (~80 %, ramificada, α1→4 con ramas α1→6 cada 10–30 glucosas). Es ~70 % de la dieta humana.',
      'GLUCÓGENO = reserva ANIMAL, aún más ramificado (α1→4 y α1→6). HÍGADO: mantiene la glucemia en ayuno · MÚSCULO: reserva local, no libera glucosa a la sangre. Lo regulan insulina, glucagón y noradrenalina.',
      'CELULOSA = glucosa con enlaces β(1→4): estructural, fibra; nuestras enzimas no la hidrolizan.',
      'FIBRA SOLUBLE (pectinas, β-glucanos, mucílagos, gomas, inulina, FOS) forma gel · INSOLUBLE (celulosa, hemicelulosa, lignina, almidón resistente) aumenta el volumen fecal. Recomendación: 20–30 g/día.',
      'PREBIÓTICO = sustrato que alimenta a la microbiota · PROBIÓTICO = microorganismo vivo benéfico.',
    ],
    sections: [
      {
        id: 'bpf-1',
        number: 1,
        title: 'Oligosacáridos: prebióticos y probióticos',
        keyTerms: ['oligosacárido', 'prebiótico', 'probiótico', 'microbiota'],
        blocks: [
          {
            type: 'list',
            title: 'Qué hacen los oligosacáridos (prebióticos)',
            items: [
              'Sirven de alimento para la microbiota intestinal.',
              'Participan en la formación de membranas y nucleótidos.',
              'Favorecen el funcionamiento de la digestión.',
              'Contribuyen a disminuir el colesterol.',
              'Ayudan a regular la concentración de glucosa.',
              'Favorecen el peristaltismo y previenen el estreñimiento.',
            ],
          },
          {
            type: 'comparison',
            title: 'No son lo mismo',
            left: { title: 'Prebiótico', items: ['Sustrato (alimento) que usan las bacterias benéficas', 'Ajo, cebolla, plátano verde, espárragos, achicoria'] },
            right: { title: 'Probiótico', items: ['Microorganismo VIVO que aporta beneficios', 'Yogur natural con cultivos vivos, kéfir, chucrut, kimchi, miso'] },
          },
        ],
      },
      {
        id: 'bpf-2',
        number: 2,
        title: 'Fibra dietética',
        keyTerms: ['fibra soluble', 'fibra insoluble', 'mucílago', 'nopal'],
        blocks: [
          {
            type: 'comparison',
            title: 'Fibra soluble vs insoluble',
            left: { title: 'Soluble', items: ['Pectinas, β-glucanos, mucílagos, gomas, inulina, fructooligosacáridos', 'Forma un gel con el agua', 'Ayuda a regular glucosa y colesterol', 'Avena, manzana con cáscara, cítricos, chía, lentejas'] },
            right: { title: 'Insoluble', items: ['Celulosa, hemicelulosa, lignina, almidón resistente', 'Aumenta el volumen de las heces', 'Favorece el tránsito intestinal', 'Pan y arroz integrales, verduras de hoja verde y crucíferas, frutos secos, quinoa'] },
          },
          {
            type: 'note',
            title: 'Cuánta fibra',
            content: 'La recomendación citada en clase (OMS) es de 20–30 g de fibra al día, con suficiente agua. El exceso también causa molestias gastrointestinales. La fruta madura y sin cáscara aporta menos fibra: conviene comerla con cáscara.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El nopal en el paciente diabético',
            content: 'El nopal es rico en fibra y forma mucílago, que disminuye la absorción de glucosa. En clase se recomendó agregar medio nopal tierno crudo (licuado o en ensalada) a la dieta del paciente diabético, en lugar de productos procesados como las «tortillas de nopal» con mucha sal.',
          },
        ],
      },
      {
        id: 'bpf-3',
        number: 3,
        title: 'Clasificación de los polisacáridos',
        keyTerms: ['homopolisacárido', 'heteropolisacárido', 'reserva', 'estructural'],
        blocks: [
          {
            type: 'table',
            title: 'Polisacáridos o glucanos',
            data: {
              headers: ['Grupo', 'Función', 'Ejemplos'],
              rows: [
                ['Homopolisacáridos', 'Reserva', 'Almidón, glucógeno, dextrano, inulina'],
                ['Homopolisacáridos', 'Estructural', 'Celulosa, quitina (y la lignina, que acompaña a la celulosa)'],
                ['Heteropolisacáridos', 'Estructurales y de matriz', 'Ácido hialurónico, condroitín sulfato, heparina, hemicelulosas, pectinas, agar, goma arábiga'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Datos de la presentación',
            content: 'El monosacárido más común en los polisacáridos tiene 6 carbonos (glucosa). El almidón representa ~70 % de los glúcidos de la dieta humana (avena, papa, trigo, arroz, maíz, pan). La quitina está en el exoesqueleto de camarón, langosta e insectos y en los hongos.',
          },
        ],
      },
      {
        id: 'bpf-4',
        number: 4,
        title: 'Almidón: amilosa y amilopectina',
        keyTerms: ['almidón', 'amilosa', 'amilopectina', 'α(1→6)'],
        blocks: [
          {
            type: 'table',
            title: 'Los dos componentes del almidón ★',
            data: {
              headers: ['Rasgo', 'Amilosa', 'Amilopectina'],
              rows: [
                ['Proporción', '~15–20 %', '~80 %'],
                ['Forma', 'Lineal, helicoidal', 'Muy ramificada (como un árbol)'],
                ['Enlaces', 'α(1→4)', 'α(1→4) en la cadena + α(1→6) en las ramas'],
                ['Tamaño / ramas', '200–2500 glucosas', 'Una rama cada 10–30 glucosas'],
              ],
            },
          },
          {
            type: 'paragraph',
            content:
              'El almidón es la reserva de energía de las plantas: miles de moléculas de glucosa unidas por enlaces α. Como esos enlaces son α, la amilasa (salival y pancreática) los rompe y libera glucosa.',
          },
        ],
      },
      {
        id: 'bpf-5',
        number: 5,
        title: 'Glucógeno: la reserva animal',
        keyTerms: ['glucógeno', 'hígado', 'músculo', 'glucagón'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El glucógeno es un polímero de glucosa con enlaces α(1→4) y α(1→6), más ramificado que la amilopectina. Sus muchos extremos permiten liberar glucosa rápidamente cuando se hidroliza.',
          },
          {
            type: 'comparison',
            title: 'Dos depósitos con funciones distintas',
            left: { title: 'Hígado', items: ['Mantiene la glucemia durante el ayuno', 'Libera glucosa a la sangre'] },
            right: { title: 'Músculo', items: ['Reserva para la propia contracción', 'NO libera glucosa a la sangre'] },
          },
          {
            type: 'note',
            title: 'Regulación hormonal',
            content: 'La síntesis (glucogénesis) y la degradación (glucogenólisis) del glucógeno hepático las regulan la insulina, el glucagón y la noradrenalina.',
          },
        ],
      },
      {
        id: 'bpf-6',
        number: 6,
        title: 'Celulosa vs almidón (práctica 6)',
        keyTerms: ['celulosa', 'β(1→4)', 'celulasa'],
        blocks: [
          {
            type: 'table',
            title: 'Misma glucosa, distinto enlace',
            data: {
              headers: ['Rasgo', 'Almidón', 'Celulosa'],
              rows: [
                ['Monómero', 'Glucosa', 'Glucosa'],
                ['Enlace', 'α(1→4) (+ α1→6 en la amilopectina)', 'β(1→4)'],
                ['Forma', 'Hélices y ramas', 'Cadenas rectas paralelas'],
                ['Función', 'Reserva energética vegetal', 'Estructura de la pared vegetal'],
                ['¿Lo digerimos?', 'Sí (amilasa)', 'No: no tenemos celulasa → fibra'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Idea de examen',
            content: 'Misma unidad (glucosa) + distinto enlace (α vs β) = distinta estructura y función. Almidón y glucógeno se digieren; la celulosa llega al colon como fibra.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-glucidos-funcion',
    title: 'Función de los glúcidos e índice glucémico',
    subtitle: 'Simples vs complejos, índice glucémico, edulcorantes y glucoconjugados de membrana',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '📈',
    keyPoints: [
      'SIMPLES (glucosa, fructosa, sacarosa, lactosa…): moléculas pequeñas, se absorben rápido, picos altos y breves de glucosa («calorías vacías») · COMPLEJOS (almidón, fibra): cadenas largas, absorción lenta y sostenida, más vitaminas y minerales.',
      'ÍNDICE GLUCÉMICO (1–100) = qué tan rápido sube la glucosa tras comer un alimento: BAJO < 55 · MEDIO 55–69 · ALTO ≥ 70.',
      'El IG sube con el refinamiento, la madurez y la cocción o molienda; baja con la fibra, la grasa y la acidez.',
      'Absorción intestinal relativa: galactosa 110 > glucosa 100 > fructosa 43 > manosa 39 > xilosa 15 > arabinosa 9.',
      'Edulcorantes: NATURALES (glucosa, fructosa, miel…), NUTRITIVOS (jarabes, azúcar invertido, polioles como sorbitol y xilitol, FOS; todos aportan calorías) e INTENSOS (sacarina, aspartamo, acesulfamo, ciclamato; de origen vegetal: glicirrina).',
      'Glúcido + proteína = glucoproteína (enlaces N u O-glucosídicos) · glúcido + lípido = glucolípido (cerebrósidos, gangliósidos): reconocimiento celular y glucocálix.',
    ],
    sections: [
      {
        id: 'bgf-1',
        number: 1,
        title: 'Funciones de los glúcidos',
        keyTerms: ['energía', 'estructura', 'comunicación celular', 'respiración celular'],
        blocks: [
          {
            type: 'list',
            title: 'Las funciones que da la presentación',
            items: [
              'Comunicación celular (glucocálix, receptores).',
              'Energía celular y fibra.',
              'Estructura celular.',
              'Ahorran proteínas y grasas: al usarse como combustible evitan que estas se degraden para obtener energía.',
              'Participan en la regulación de procesos metabólicos.',
              'Edulcorantes.',
            ],
          },
          {
            type: 'note',
            title: 'Respiración celular',
            content: 'La energía de la glucosa se obtiene al oxidarla: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ~32 ATP.',
          },
          {
            type: 'note',
            title: 'Dos aclaraciones',
            content: 'La presentación pone a la insulina como ejemplo de «glúcido con funciones metabólicas», pero la insulina es una hormona proteica que REGULA el metabolismo de la glucosa, no un glúcido. Y como antioxidantes menciona los polifenoles, que no son glúcidos (aunque en las plantas suelen estar unidos a azúcares).',
          },
        ],
      },
      {
        id: 'bgf-2',
        number: 2,
        title: 'Glúcidos simples vs complejos',
        keyTerms: ['glúcidos simples', 'glúcidos complejos', 'calorías vacías'],
        blocks: [
          {
            type: 'comparison',
            title: 'Cómo se comportan',
            left: { title: 'Simples («calorías vacías»)', items: ['Moléculas pequeñas', 'Se absorben y metabolizan rápido', 'Glucosa alta en sangre, pero por poco tiempo', 'Glucosa, fructosa, galactosa, ribosa, sacarosa, lactosa, maltosa', 'Azúcar, refrescos, dulces, cereales envasados'] },
            right: { title: 'Complejos', items: ['Cadenas largas de azúcares simples', 'Absorción y metabolismo más lentos', 'Glucosa más baja y sostenida', 'Menos probable que se conviertan en grasa', 'Ricos en vitaminas y minerales', 'Integrales, avena, maíz, leguminosas, verduras, papa'] },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Picos de insulina',
            content: 'Los glúcidos simples producen picos de glucosa y de insulina; repetidos con frecuencia favorecen la resistencia a la insulina. Los complejos dan una curva más plana, aunque la cantidad sigue importando. En diabetes tipo 1 se hace conteo de glúcidos repartidos en tres comidas y dos colaciones, según la dosis de insulina.',
          },
        ],
      },
      {
        id: 'bgf-3',
        number: 3,
        title: 'Índice glucémico',
        keyTerms: ['índice glucémico', 'refinamiento', 'madurez', 'absorción'],
        blocks: [
          {
            type: 'definition',
            title: 'Índice glucémico',
            content: 'Escala de 1 (más lento) a 100 (más rápido) que mide cuánto y qué tan rápido sube la glucosa en sangre después de comer un alimento, comparado con una dosis de glucosa. — Índice glucémico (IG).',
          },
          {
            type: 'table',
            title: 'Rangos y ejemplos (presentación)',
            data: {
              headers: ['IG', 'Qué pasa', 'Ejemplos'],
              rows: [
                ['Alto (≥ 70)', 'Pasa rápido a la sangre', 'Pan blanco, donas, bizcochos, arroz blanco, papa cocida, melón, maíz inflado'],
                ['Medio (55–69)', 'Absorción más lenta y moderada', 'Pan integral, pasta, arroz integral, plátano, piña, mango'],
                ['Bajo (< 55)', 'Glucosa sostenida, sin grandes picos de insulina', 'Pera, manzana, naranja, lentejas, zanahoria, nueces, leche, yogur natural, verduras de hoja verde, brócoli, tomate'],
              ],
            },
          },
          {
            type: 'list',
            title: 'De qué depende el IG',
            items: [
              'Refinamiento: el carbohidrato refinado sube más.',
              'Tipo de almidón: la papa se absorbe más rápido que la cebada.',
              'Fibra: más fibra, menos carbohidrato absorbido.',
              'Madurez: fruta más madura, más IG.',
              'Grasa y acidez: a más grasa y acidez, menos absorción.',
              'Preparación: más cocido o molido, más IG.',
              'Un carbohidrato complejo tiene menor IG que uno simple.',
            ],
          },
          {
            type: 'table',
            title: 'Tasa de absorción intestinal (glucosa = 100)',
            data: {
              headers: ['Monosacárido', 'Tasa relativa'],
              rows: [['Galactosa', '110'], ['Glucosa', '100'], ['Fructosa', '43'], ['Manosa', '39'], ['Xilosa', '15'], ['Arabinosa', '9']],
            },
          },
        ],
      },
      {
        id: 'bgf-4',
        number: 4,
        title: 'Edulcorantes',
        keyTerms: ['edulcorantes', 'polioles', 'sacarina', 'aspartamo'],
        blocks: [
          {
            type: 'table',
            title: 'Tres grupos',
            data: {
              headers: ['Grupo', 'Ejemplos', 'Calorías'],
              rows: [
                ['Naturales', 'Glucosa, fructosa, galactosa, lactosa, maltosa, miel', 'Sí'],
                ['Nutritivos', 'Jarabe de glucosa (del almidón), azúcar invertido (de la sacarosa), polioles (sorbitol, manitol, xilitol), fructooligosacáridos', 'Sí: todos aportan calorías'],
                ['Intensos', 'Artificiales: sacarina, aspartamo, acesulfamo, ciclamato, alitamo · de origen vegetal: glicirrina (y la stevia)', 'Prácticamente ninguna por la cantidad que se usa'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Sobre la stevia',
            content: 'En clase se dijo que casi todos los edulcorantes aportan calorías salvo la stevia. Es más preciso decir que los edulcorantes intensos (stevia, sacarina, sucralosa, acesulfamo, aspartamo) se usan en cantidades tan pequeñas que su aporte es prácticamente nulo; los naturales y los nutritivos sí aportan calorías.',
          },
        ],
      },
      {
        id: 'bgf-5',
        number: 5,
        title: 'Aldosas, cetosas y cuerpos cetónicos',
        keyTerms: ['aldosa', 'cetosa', 'cuerpos cetónicos', 'acetona'],
        blocks: [
          {
            type: 'table',
            title: 'Comparación (presentación)',
            data: {
              headers: ['Rasgo', 'Aldosa', 'Cetosa'],
              rows: [
                ['Grupo funcional', 'Aldehído (–CHO)', 'Cetona (>C=O)'],
                ['Posición del carbonilo', 'Extremo (C1)', 'Interior (C2)'],
                ['Ejemplo', 'Glucosa (aldohexosa)', 'Fructosa (cetohexosa)'],
                ['Nomenclatura', 'Prefijo aldo- + número de carbonos', 'Prefijo ceto- + número de carbonos (cetotriosa = dihidroxiacetona)'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Cetosa ≠ cetona ≠ cuerpo cetónico',
            content: 'En clase se dijo que las cetosas son «más tóxicas»; ahí se mezclaron conceptos. Una CETOSA es un azúcar (la fructosa de la fruta y la miel) y no es tóxica. Las CETONAS industriales (como la acetona) son otra cosa, y los CUERPOS CETÓNICOS (acetona, acetoacetato y 3-hidroxibutirato) son productos del metabolismo de las grasas. Comparten la raíz «ceto» por el grupo C=O, nada más.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cuerpos cetónicos',
            content: 'Cuando la célula no puede usar glucosa (ayuno prolongado, diabetes descompensada), el hígado produce cuerpos cetónicos a partir de las grasas. En exceso causan cetoacidosis (acidosis metabólica, ver «Equilibrio ácido-base»), y la acetona se elimina por el pulmón: aliento afrutado.',
          },
        ],
      },
      {
        id: 'bgf-6',
        number: 6,
        title: 'Glucoconjugados y estructura celular',
        keyTerms: ['glucoproteína', 'glucolípido', 'cerebrósido', 'gangliósido'],
        blocks: [
          {
            type: 'table',
            title: 'Glúcidos unidos a otras moléculas (actividad 9)',
            data: {
              headers: ['Molécula', 'Composición', 'Función'],
              rows: [
                ['Glucoproteína', 'Glúcido + proteína', 'Reconocimiento celular, receptores, adhesión'],
                ['Glucolípido', 'Glúcido + lípido', 'Membrana, reconocimiento y señalización'],
                ['Cerebrósido', 'Ceramida + glucosa o galactosa', 'Membranas del tejido nervioso: ~2 % de la materia gris y ~12 % de la blanca'],
                ['Gangliósido', 'Glúcido complejo + lípido', 'Receptores de membrana en el glucocálix; diferenciación celular y morfogénesis'],
                ['Proteoglucano', 'Glucosaminoglucanos + proteína central', 'Matriz extracelular del tejido conectivo'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Cómo se unen el glúcido y la proteína',
            left: { title: 'N-glucosídico', items: ['Grupo amida de una ASPARAGINA', '+ carbono anomérico de la N-acetilglucosamina'] },
            right: { title: 'O-glucosídico', items: ['Grupo –OH de una SERINA o TREONINA', '+ carbono anomérico de la N-acetilgalactosamina o la xilosa'] },
          },
          {
            type: 'note',
            title: 'Por qué sirven como estructura',
            content: 'Los glúcidos forman muchos puentes de hidrógeno entre sí, lo que da estabilidad y rigidez a estructuras como la celulosa, la quitina y el ácido hialurónico, que no se descomponen fácilmente.',
          },
          {
            type: 'list',
            title: 'Cuatro polímeros con uso médico (práctica 7)',
            items: [
              'Ácido hialurónico: matriz extracelular; usos oftálmicos y articulares.',
              'Heparina: anticoagulante.',
              'Condroitín sulfato: componente del cartílago.',
              'Dextrano: coloide expansor del plasma (ver «Presión osmótica, oncótica…»).',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-lipidos-estructura',
    title: 'Lípidos: estructura y ácidos grasos',
    subtitle: 'Enlace éster, anfipatía, clasificación de los lípidos, longitud de cadena, saturados vs insaturados y cis vs trans',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🧈',
    keyPoints: [
      'LÍPIDOS = C, H y O; insolubles en agua y solubles en solventes no polares (éter, cloroformo). Aportan ~9 kcal/g.',
      'ENLACE ÉSTER = ácido carboxílico + alcohol → éster + H₂O (en los glúcidos el enlace es glucosídico).',
      'ÁCIDO GRASO = COOH–(CH₂)n–CH₃: cabeza carboxilo HIDROFÍLICA + cadena hidrocarbonada LIPOFÍLICA → molécula ANFIPÁTICA (micelas, emulsiones, bicapa).',
      'Normalmente 12–22 carbonos, cadena lineal sin ramificar; más de 70 tipos en la naturaleza.',
      'LONGITUD: corta < 6 C · mediana 6–12 C · larga > 12 C (las más abundantes).',
      'SATURADO = sin dobles enlaces C=C (terminación -anoico, sólido) · INSATURADO = 1 (mono) o ≥ 2 (poli) dobles enlaces (terminación -enoico).',
      'CIS = cadena doblada, líquida, la forma natural · TRANS = cadena recta y rígida, rara en la naturaleza, se forma por hidrogenación parcial; se asocia a cardiopatía.',
    ],
    sections: [
      {
        id: 'ble-1',
        number: 1,
        title: 'Qué son los lípidos y el enlace éster',
        keyTerms: ['lípido', 'enlace éster', 'solventes no polares'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Glúcidos, lípidos y proteínas comparten carbono, hidrógeno y oxígeno. Lo que distingue a los lípidos es que son insolubles en agua y solubles en solventes no polares, como el éter y el cloroformo. En el cuerpo se encuentran sobre todo como ésteres: grasas, aceites y ácidos grasos.',
          },
          {
            type: 'definition',
            title: 'Enlace éster',
            content: 'Unión entre el grupo carboxilo de un ácido y el grupo hidroxilo de un alcohol, con liberación de una molécula de agua: R₁–COOH + HO–R₂ ⇌ R₁–COO–R₂ + H₂O. — Enlace éster.',
          },
          {
            type: 'comparison',
            title: 'El enlace característico de cada biomolécula',
            left: { title: 'Glúcidos', items: ['Enlace glucosídico (O-glucosídico)', 'Une monosacárido con monosacárido'] },
            right: { title: 'Lípidos', items: ['Enlace éster', 'Une ácido graso con alcohol (p. ej., glicerol en los triglicéridos)'] },
          },
          {
            type: 'note',
            title: 'Triglicéridos',
            content: 'Un triglicérido (triacilglicerol) es glicerol esterificado con tres ácidos grasos (tres enlaces éster). Es la principal forma de almacenar energía en el tejido adiposo.',
          },
        ],
      },
      {
        id: 'ble-2',
        number: 2,
        title: 'Estructura del ácido graso: una molécula anfipática',
        keyTerms: ['ácido graso', 'anfipático', 'micela', 'bicapa lipídica'],
        blocks: [
          {
            type: 'table',
            title: 'Las dos regiones de un ácido graso (ejemplo: ácido esteárico)',
            data: {
              headers: ['Región', 'Grupo', 'Comportamiento en agua'],
              rows: [
                ['Cabeza', 'Carboxilo (–COOH)', 'Hidrofílica: interactúa con el agua (hasta 4 moléculas de H₂O)'],
                ['Cola', 'Cadena hidrocarbonada (CH₂)n y metilo terminal (–CH₃)', 'Hidrofóbica / lipofílica: evita el agua'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Características de los ácidos grasos (presentación)',
            items: [
              'Son ácidos carboxílicos de 12 a 22 carbonos.',
              'Cadena larga, lineal y sin ramificar.',
              'Componentes estructurales de grasas y aceites (no de los esteroides).',
              'Hay más de 70 en la naturaleza.',
              'Se clasifican por la presencia y el número de dobles enlaces C=C.',
            ],
          },
          {
            type: 'paragraph',
            content:
              'En agua, las colas hidrofóbicas de varios ácidos grasos se agrupan y dejan un espacio del que se excluye el agua. Así se forman micelas, emulsiones (otras moléculas quedan atrapadas dentro) o espuma (queda aire). La misma propiedad permite formar la bicapa lipídica de las membranas: cabezas hacia el agua, colas hacia el interior.',
          },
          {
            type: 'note',
            title: '(CH₂)n',
            content: 'La «n» indica la longitud de la cadena. En Bioquímica II será clave para la β-oxidación: cada vuelta corta la cadena de dos en dos carbonos.',
          },
        ],
      },
      {
        id: 'ble-3',
        number: 3,
        title: 'Clasificación de los lípidos',
        keyTerms: ['triglicéridos', 'fosfoglicéridos', 'esfingolípidos', 'esteroides'],
        blocks: [
          {
            type: 'list',
            title: 'Esquema de la presentación',
            items: [
              'Ácidos grasos → triglicéridos y ceras.',
              'Fosfoglicéridos (fosfolípidos).',
              'Esfingolípidos → esfingomielina y glucolípidos (cerebrósidos y gangliósidos).',
              'Esteroides (no derivan de ácidos grasos; ejemplo: colesterol).',
            ],
          },
          {
            type: 'list',
            title: 'Funciones generales',
            items: [
              'Reserva de energía: ~9 kcal/g, más del doble que glúcidos y proteínas (4 kcal/g).',
              'Componentes de las membranas celulares.',
              'Precursores de hormonas esteroideas y de sales biliares.',
              'Absorción de las vitaminas liposolubles A, D, E y K.',
              'Aporte de ácidos grasos esenciales y señalización celular (eicosanoides).',
            ],
          },
        ],
      },
      {
        id: 'ble-4',
        number: 4,
        title: 'Longitud de la cadena',
        keyTerms: ['cadena corta', 'cadena mediana', 'cadena larga', 'butirato'],
        blocks: [
          {
            type: 'table',
            title: 'Clasificación por número de carbonos ★',
            data: {
              headers: ['Tipo', 'Carbonos', 'Ejemplos', 'Dato clínico'],
              rows: [
                ['Corta', '< 6', 'Acético (2), butírico (4), valérico (5)', 'La microbiota produce butirato, el combustible de los colonocitos'],
                ['Mediana', '6–12', 'Caproico (6), caprílico (8), cáprico (10), láurico (12)', 'Se absorben directo a la vena porta, sin formar quilomicrones'],
                ['Larga', '> 12', 'Mirístico (14), palmítico (16), esteárico (18), oleico (18)', 'Las más abundantes en la dieta; se empaquetan en quilomicrones'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Triglicéridos de cadena media',
            content: 'Como los ácidos grasos de cadena mediana no necesitan sales biliares ni quilomicrones para absorberse, los triglicéridos de cadena media (aceite MCT, derivado del coco) se usan en nutrición clínica en pacientes con malabsorción de grasas.',
          },
        ],
      },
      {
        id: 'ble-5',
        number: 5,
        title: 'Saturados vs insaturados',
        keyTerms: ['saturado', 'monoinsaturado', 'poliinsaturado', 'anoico', 'enoico'],
        blocks: [
          {
            type: 'comparison',
            title: 'Por tipo de enlace ★',
            left: { title: 'Saturados', items: ['Solo enlaces simples C–C', 'El máximo de hidrógenos en la cadena', 'Cadena recta: se compactan, sólidos a temperatura ambiente (mantequilla)', 'Terminación -anoico (hexadecanoico = palmítico)', 'Palmítico (C16:0), esteárico (C18:0), láurico, mirístico'] },
            right: { title: 'Insaturados', items: ['Uno o más dobles enlaces C=C', 'Menos hidrógenos', '«Codos» en cada doble enlace: líquidos a temperatura ambiente', 'Terminación -enoico (octadecenoico = oleico)', 'Mono (1 C=C): oleico · Poli (≥ 2 C=C): linoleico, linolénico, araquidónico'] },
          },
          {
            type: 'note',
            title: 'Los de mayor presencia',
            content: 'El ácido graso saturado más abundante en los alimentos es el palmítico (C16:0) y el insaturado más abundante es el oleico (C18:1).',
          },
          {
            type: 'note',
            title: 'Nomenclatura C18:1',
            content: 'El primer número indica los carbonos y el segundo los dobles enlaces: palmítico C16:0, esteárico C18:0, oleico C18:1, linoleico C18:2, α-linolénico C18:3, araquidónico C20:4. Ojo: el araquídico (C20:0, saturado) no es el araquidónico (C20:4, poliinsaturado).',
          },
        ],
      },
      {
        id: 'ble-6',
        number: 6,
        title: 'Configuración cis vs trans',
        keyTerms: ['cis', 'trans', 'hidrogenación parcial', 'grasas trans'],
        blocks: [
          {
            type: 'table',
            title: 'Dos formas del mismo doble enlace',
            data: {
              headers: ['Rasgo', 'Cis', 'Trans'],
              rows: [
                ['Hidrógenos del C=C', 'Del mismo lado', 'En lados opuestos'],
                ['Forma de la cadena', 'Doblada', 'Recta, parecida a un saturado'],
                ['Estado', 'Líquido a temperatura ambiente', 'Sólido o semisólido'],
                ['En la membrana', 'Da fluidez y flexibilidad', 'Da rigidez'],
                ['Origen', 'La forma natural (mono y poliinsaturados)', 'Rara en la naturaleza; se forma por hidrogenación parcial industrial'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Grasas trans y riesgo cardiovascular',
            content: 'Las grasas trans (margarinas parcialmente hidrogenadas, frituras comerciales, repostería y galletas industriales, snacks ultraprocesados) elevan el colesterol LDL y bajan el HDL, favorecen la inflamación y la aterosclerosis y aumentan el riesgo de cardiopatía isquémica. Por eso conviene evitarlas por completo.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-omega-grasas-aceites',
    title: 'Omega 3, 6 y 9; grasas y aceites',
    subtitle: 'Posición del doble enlace, ácidos grasos esenciales, EPA y DHA, eicosanoides y composición de grasas y aceites',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🐟',
    keyPoints: [
      'OMEGA (ω, n) = posición del PRIMER doble enlace contado desde el extremo METILO: ω-3 en C3, ω-6 en C6, ω-9 en C9. Pregunta de examen.',
      'DELTA (Δ) cuenta desde el extremo CARBOXILO: oleico = C18:1 Δ9 = C18:1 n-9.',
      'ESENCIALES (hay que comerlos) = linoleico (ω-6, C18:2) y α-linolénico (ω-3, C18:3): los mamíferos no pueden colocar dobles enlaces en esas posiciones · el OLEICO (ω-9) NO es esencial.',
      'NO esenciales: el cuerpo los sintetiza a partir de acetil-CoA (exceso de glúcidos o proteínas).',
      'EPA → corazón, articulaciones, inmunidad · DHA → vista, cerebro y desarrollo. Fuentes baratas: sardina y salmón.',
      'Poliinsaturados (araquidónico, C20:4 ω-6) → EICOSANOIDES: prostaglandinas, tromboxanos y leucotrienos.',
      'GRASA = sólida (más saturados) · ACEITE = líquido (más insaturados). Recalentar el aceite lo degrada (acroleína).',
    ],
    sections: [
      {
        id: 'bom-1',
        number: 1,
        title: 'Nomenclatura omega y delta',
        keyTerms: ['omega', 'delta', 'extremo metilo', 'extremo carboxilo'],
        blocks: [
          {
            type: 'table',
            title: 'Dónde está el primer doble enlace ★',
            data: {
              headers: ['Familia', 'Primer doble enlace (desde el metilo)', 'Ácido graso representativo'],
              rows: [
                ['Omega-3', 'Carbono 3', 'α-linolénico (ALA), C18:3 n-3'],
                ['Omega-6', 'Carbono 6', 'Linoleico (LA), C18:2 n-6'],
                ['Omega-9', 'Carbono 9', 'Oleico, C18:1 n-9'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'No confundir los dos sistemas',
            left: { title: 'Omega (ω o n)', items: ['Cuenta desde el extremo METILO (–CH₃)', 'Oleico = n-9'] },
            right: { title: 'Delta (Δ)', items: ['Cuenta desde el extremo CARBOXILO (–COOH)', 'Oleico = Δ9 · linoleico = Δ9,12 · linolénico = Δ9,12,15 · araquidónico = Δ5,8,11,14'] },
          },
        ],
      },
      {
        id: 'bom-2',
        number: 2,
        title: 'Ácidos grasos esenciales',
        keyTerms: ['esencial', 'linoleico', 'α-linolénico', 'acetil-CoA'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los mamíferos pueden introducir dobles enlaces hasta el carbono 9 contado desde el carboxilo, pero no más allá (hacia el metilo). Por eso no pueden fabricar los dobles enlaces de las posiciones ω-3 y ω-6, y esos ácidos grasos deben venir de la dieta. El oleico (ω-9) sí se sintetiza.',
          },
          {
            type: 'comparison',
            title: 'Esenciales vs no esenciales',
            left: { title: 'Esenciales', items: ['Poliinsaturados', 'Linoleico (ω-6) y α-linolénico (ω-3)', 'Deben consumirse en la dieta'] },
            right: { title: 'No esenciales', items: ['El cuerpo los sintetiza a partir de acetil-CoA', 'Proviene del exceso de glúcidos o de proteínas', 'Ejemplo: oleico (ω-9), palmítico'] },
          },
          {
            type: 'note',
            title: 'Una contradicción en las fuentes',
            content: 'En clase se dijo que omega 3, 6 y 9 «se consideran esenciales», y una diapositiva dice que el humano «no puede sintetizar omega 3 y 9». Lo correcto, y lo que muestra la propia infografía de la presentación, es que los esenciales son el ω-3 (α-linolénico) y el ω-6 (linoleico); el ω-9 (oleico) NO es esencial.',
          },
        ],
      },
      {
        id: 'bom-3',
        number: 3,
        title: 'De ALA y LA a EPA, DHA y araquidónico',
        keyTerms: ['EPA', 'DHA', 'araquidónico', 'eicosanoides'],
        blocks: [
          {
            type: 'steps',
            title: 'Las dos rutas (desaturación y elongación)',
            steps: [
              'Omega-6: linoleico (18:2) → γ-linolénico (18:3) → dihomo-γ-linolénico (20:3) → ARAQUIDÓNICO (20:4).',
              'Omega-3: α-linolénico (18:3) → estearidónico (18:4) → eicosatetraenoico (20:4) → EPA (20:5) → DPA (22:5) → DHA (22:6).',
            ],
          },
          {
            type: 'comparison',
            title: 'EPA vs DHA',
            left: { title: 'EPA (eicosapentaenoico)', items: ['Salud cardiovascular', 'Articulaciones', 'Inmunidad y regulación de la inflamación', 'Estado de ánimo'] },
            right: { title: 'DHA (docosahexaenoico)', items: ['Retina (vista)', 'Cerebro y memoria', 'Desarrollo neurológico fetal e infantil'] },
          },
          {
            type: 'paragraph',
            content:
              'Los ácidos grasos poliinsaturados de 20 carbonos (como el araquidónico) son precursores de los eicosanoides: prostaglandinas, tromboxanos y leucotrienos, que regulan la inflamación, la coagulación, la respuesta inmune y el tono vascular.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Orientación al paciente',
            content: 'EPA y DHA son especialmente importantes en el embarazo y en etapas de crecimiento. Como fuente económica de omega-3 se sugirió la sardina (también salmón, arenque y aceite de algas); el ALA vegetal está en chía, linaza y canola. El omega-6 abunda en aceites de girasol, soya, maíz y sésamo, almendras, cacahuates, huevo y carne de ave.',
          },
        ],
      },
      {
        id: 'bom-4',
        number: 4,
        title: 'Grasas vs aceites: composición',
        keyTerms: ['grasa', 'aceite', 'aceite de oliva', 'aceite de coco', 'canola'],
        blocks: [
          {
            type: 'comparison',
            title: 'Grasa vs aceite',
            left: { title: 'Grasa', items: ['Sólida o semisólida a temperatura ambiente', 'Predominan los saturados', 'Mantequilla, sebo, manteca de cerdo'] },
            right: { title: 'Aceite', items: ['Líquido a temperatura ambiente', 'Predominan los insaturados', 'Oliva, canola, maíz, soya, cacahuate'] },
          },
          {
            type: 'table',
            title: 'Composición media (% de ácidos grasos, presentación)',
            data: {
              headers: ['Alimento', 'Saturados (láurico + mirístico + palmítico + esteárico)', 'Oleico (ω-9)', 'Linoleico (ω-6)', 'Linolénico (ω-3)'],
              rows: [
                ['Mantequilla', '3 + 11 + 27 + 12', '29', '2', '1'],
                ['Manteca de cerdo', '— + 2 + 26 + 14', '44', '10', '—'],
                ['Aceite de coco', '47 + 18 + 9 + 3', '6', '2', '—'],
                ['Aceite de oliva', '— + — + 13 + 3', '71', '10', '1'],
                ['Aceite de canola', '— + — + 4 + 2', '62', '22', '10'],
                ['Aceite de maíz', '— + — + 11 + 2', '28', '58', '1'],
                ['Aceite de soya', '— + — + 11 + 4', '24', '54', '7'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Cómo leer la tabla',
            content: 'El palmítico es el saturado presente en casi todo. El aceite de coco es casi todo saturado (sobre todo láurico, de cadena mediana), aunque sea vegetal. La manteca de cerdo tiene mucho oleico (44 %), pero también ~42 % de saturados. La canola tiene muy pocos saturados (~6 %), mucho oleico (62 %) y omega-3, por lo que en clase se presentó como una buena opción para recomendar.',
          },
        ],
      },
      {
        id: 'bom-5',
        number: 5,
        title: 'El calor y el aceite recalentado',
        keyTerms: ['acroleína', 'recalentamiento', 'prensado en frío'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Calentar y sobre todo recalentar varias veces un aceite lo oxida y lo degrada. A temperaturas altas el glicerol se deshidrata y forma acroleína, un compuesto irritante y tóxico clasificado como probable carcinógeno; además se forman otros productos de oxidación y el aceite pierde calidad.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Qué recomendar',
            content: 'No reutilizar el aceite de freír. El aceite de oliva extra virgen (prensado en frío) se aprovecha mejor crudo, en ensaladas. Para cocinar conviene un aceite con pocos saturados (canola) en lugar de manteca o mantequilla.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-trigliceridos-fosfolipidos',
    title: 'Triglicéridos, fosfolípidos y esfingolípidos',
    subtitle: 'Esterificación y reserva anhidra, triglicérido simple vs mixto, glicerofosfolípidos, ceramida, esfingomielina, glucolípidos y esfingolipidosis',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🫧',
    keyPoints: [
      'TRIGLICÉRIDO = glicerol + 3 ácidos grasos unidos por enlaces ÉSTER. Al esterificarse pierde sus grupos polares → apolar e hidrófobo → se almacena de forma ANHIDRA en el adipocito.',
      'SIMPLE = los 3 ácidos grasos iguales (triestearina) · MIXTO = 2 o 3 ácidos grasos diferentes.',
      'Del triglicérido, solo el GLICEROL puede convertirse en glucosa; los ácidos grasos van a β-oxidación. En ayuno prolongado o dieta cetogénica se forman cuerpos cetónicos (la acetona sale por el pulmón: halitosis).',
      'GLICEROFOSFOLÍPIDO = glicerol + 2 ácidos grasos + fosfato + alcohol (colina, etanolamina, serina, inositol, glicerol). La FOSFATIDILCOLINA (lecitina) es el más abundante de la membrana.',
      'ESFINGOLÍPIDO = ESFINGOSINA (no glicerol) + ácido graso por enlace AMIDA = CERAMIDA, precursora de todos los esfingolípidos.',
      'Ceramida + fosfocolina = ESFINGOMIELINA (mielina) · ceramida + azúcar = GLUCOLÍPIDOS: cerebrósidos (1 azúcar), globósidos (oligosacárido) y gangliósidos (oligosacárido + ácido siálico).',
      'Esfingolipidosis (lisosomales): Niemann-Pick (esfingomielinasa) · Gaucher (glucocerebrosidasa) · Fabry (α-galactosidasa A) · Tay-Sachs (hexosaminidasa A).',
    ],
    sections: [
      {
        id: 'btf-1',
        number: 1,
        title: 'Por qué importan el linoleico y el α-linolénico',
        keyTerms: ['esenciales', 'EPA', 'DHA', 'araquidónico'],
        blocks: [
          {
            type: 'list',
            title: 'Importancia de los ácidos grasos esenciales (presentación)',
            items: [
              'No los podemos sintetizar: deben venir de la dieta.',
              'Son necesarios para el crecimiento y el desarrollo.',
              'Participan en el transporte y el metabolismo del colesterol.',
              'El omega-3 (α-linolénico) es necesario para formar EPA y DHA.',
              'El omega-6 (linoleico) es necesario para formar el ácido araquidónico.',
            ],
          },
          {
            type: 'note',
            title: 'Recordatorio',
            content: 'Los esenciales son el linoleico (ω-6) y el α-linolénico (ω-3). El oleico (ω-9) lo sintetiza el cuerpo. Los no esenciales se forman a partir de acetil-CoA, que proviene del exceso de glúcidos y proteínas.',
          },
        ],
      },
      {
        id: 'btf-2',
        number: 2,
        title: 'Triglicéridos: estructura y función',
        keyTerms: ['triglicérido', 'esterificación', 'anhidro', 'β-oxidación'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El triglicérido (triacilglicerol) se forma cuando cada uno de los tres –OH del glicerol se une al –COOH de un ácido graso, liberando agua (enlace éster). Al perder esos grupos polares la molécula queda apolar e hidrófoba, y por eso el adipocito puede guardarla sin agua (forma anhidra): mucha energía en poco peso.',
          },
          {
            type: 'list',
            title: 'Funciones',
            items: [
              'Reserva de energía: los ácidos grasos están más reducidos que los glúcidos (~9 vs 4 kcal/g).',
              'Aislamiento y protección: almohadillas de grasa alrededor de órganos como el riñón y el corazón; aislante térmico.',
              'Mantenimiento celular: sus ácidos grasos son precursores de fosfolípidos, esfingolípidos y, si son poliinsaturados (araquidónico), de eicosanoides.',
            ],
          },
          {
            type: 'comparison',
            title: 'Simple vs mixto',
            left: { title: 'Triglicérido simple', items: ['Los 3 –OH esterificados con el mismo ácido graso', 'Ejemplo: triestearina (3 × esteárico)'] },
            right: { title: 'Triglicérido mixto', items: ['2 o 3 ácidos grasos diferentes', 'Ejemplo: palmítico + mirístico + oleico', 'Es lo habitual en los alimentos'] },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Ayuno, dieta cetogénica y halitosis',
            content: 'Al romper un triglicérido, los tres ácidos grasos van a β-oxidación y solo el glicerol puede convertirse en glucosa (se verá en Bioquímica II). En ayuno prolongado o dieta cetogénica se moviliza mucha grasa y el exceso de acetil-CoA forma cuerpos cetónicos. La acetona es volátil y se elimina por el pulmón: aliento con olor afrutado (halitosis).',
          },
        ],
      },
      {
        id: 'btf-3',
        number: 3,
        title: 'Grasas y aceites: propiedades',
        keyTerms: ['grasa', 'aceite', 'saponificación', 'caroteno'],
        blocks: [
          {
            type: 'list',
            title: 'Propiedades (presentación)',
            items: [
              'Son los lípidos más abundantes de la naturaleza; químicamente son triglicéridos.',
              'Más ligeros que el agua; malos conductores de calor y electricidad (excelentes aislantes).',
              'Se hidrolizan; con bases forman jabón (saponificación).',
              'Grasa si es sólida a 25 °C, aceite si es líquida: depende del grado de insaturación y del número de carbonos.',
              'Puros son incoloros, inodoros e insípidos: el color y el sabor vienen de otras moléculas que absorben.',
            ],
          },
          {
            type: 'note',
            title: 'Animal sólido, vegetal líquido… con excepciones',
            content: 'La presentación generaliza que los triglicéridos animales son sólidos y los vegetales líquidos. Hay excepciones importantes: los aceites de coco y de palma son vegetales y muy saturados, y el aceite de pescado es animal y líquido.',
          },
          {
            type: 'note',
            title: 'El color de la mantequilla',
            content: 'El color amarillo viene de carotenos (de la dieta de la vaca o añadidos) y el sabor del diacetilo y la 3-hidroxi-2-butanona (acetoína), producidos por fermentación bacteriana. En clase se mencionó que los pigmentos del cempasúchil se usan para dar color amarillo al pollo.',
          },
        ],
      },
      {
        id: 'btf-4',
        number: 4,
        title: 'Glicerofosfolípidos',
        keyTerms: ['fosfatidilcolina', 'lecitina', 'cefalina', 'cardiolipina'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Un glicerofosfolípido tiene como base el glicerol: dos de sus –OH se unen a ácidos grasos (colas hidrofóbicas) y el tercero a un fosfato, que a su vez se une a un alcohol (cabeza polar). Es anfipático, por lo que forma la bicapa de las membranas. Los dobles enlaces cis de sus colas dan flexibilidad a la membrana.',
          },
          {
            type: 'table',
            title: 'El alcohol da el nombre ★',
            data: {
              headers: ['Cabeza polar (X)', 'Fosfolípido', 'Dato'],
              rows: [
                ['Colina', 'Fosfatidilcolina (lecitina)', 'El más abundante de la membrana'],
                ['Etanolamina', 'Fosfatidiletanolamina (cefalina)', 'Abundante en tejido nervioso'],
                ['Serina', 'Fosfatidilserina', 'Cara interna; si se expone afuera es señal de apoptosis'],
                ['Inositol', 'Fosfatidilinositol (PIP₂)', 'Da los segundos mensajeros IP₃ y DAG'],
                ['Glicerol', 'Cardiolipina (difosfatidilglicerol)', 'Membrana mitocondrial interna'],
              ],
            },
          },
        ],
      },
      {
        id: 'btf-5',
        number: 5,
        title: 'Esfingolípidos y ceramida',
        keyTerms: ['esfingosina', 'ceramida', 'enlace amida', 'esfingomielina'],
        blocks: [
          {
            type: 'comparison',
            title: 'Cambia la molécula base',
            left: { title: 'Glicerofosfolípido', items: ['Base: GLICEROL', 'Ácidos grasos unidos por enlace éster'] },
            right: { title: 'Esfingolípido', items: ['Base: ESFINGOSINA (aminoalcohol)', 'Ácido graso unido al grupo amino del C-2 por enlace AMIDA'] },
          },
          {
            type: 'definition',
            title: 'Ceramida',
            content: 'Esfingosina + ácido graso unidos por enlace amida. Es el precursor de todos los esfingolípidos y una molécula señalizadora en el estrés celular y la muerte celular programada. Los esfingolípidos se clasifican según el grupo polar unido al –OH del C-1 de la ceramida. — Ceramida.',
          },
          {
            type: 'paragraph',
            content:
              'La ESFINGOMIELINA es el único esfingolípido con fosfato (ceramida + fosfocolina). Forma la vaina de mielina, actúa como aislante eléctrico y abunda en las balsas lipídicas junto con el colesterol.',
          },
        ],
      },
      {
        id: 'btf-6',
        number: 6,
        title: 'Glucolípidos y esfingolipidosis',
        keyTerms: ['cerebrósido', 'globósido', 'gangliósido', 'Tay-Sachs', 'Gaucher'],
        blocks: [
          {
            type: 'table',
            title: 'Glucoesfingolípidos (sin fosfato; el azúcar va por enlace O-glucosídico)',
            data: {
              headers: ['Tipo', 'Composición', 'Dónde / función'],
              rows: [
                ['Cerebrósidos', 'Ceramida + glucosa o galactosa', 'Galactocerebrósidos: tejido nervioso y mielina · glucocerebrósidos: tejidos no neuronales'],
                ['Globósidos', 'Ceramida + oligosacárido', 'Grupos sanguíneos (ABO), receptores de toxinas bacterianas'],
                ['Gangliósidos', 'Ceramida + oligosacárido + ácido siálico (carga negativa)', 'Sustancia gris (~6 % de sus lípidos de membrana), receptores celulares (toxina del cólera); GM1, GM2, GD1…'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Esfingolipidosis: falta una enzima lisosomal y el lípido se acumula ★',
            data: {
              headers: ['Enfermedad', 'Enzima deficiente', 'Lo que se acumula'],
              rows: [
                ['Niemann-Pick (A y B)', 'Esfingomielinasa ácida', 'Esfingomielina en hígado, bazo y cerebro'],
                ['Gaucher', 'Glucocerebrosidasa (β-glucosidasa)', 'Glucosilceramida en macrófagos (células de Gaucher)'],
                ['Fabry', 'α-galactosidasa A', 'Trihexosilceramida en vasos sanguíneos y riñones'],
                ['Tay-Sachs', 'Hexosaminidasa A', 'Gangliósido GM2 en neuronas: neurodegeneración grave'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Error frecuente',
            content: 'En estas enfermedades el lípido SÍ se forma pero NO se degrada: la enzima que falta es la que lo rompe en el lisosoma, por eso se acumula. (En clase se dijo que en Niemann-Pick «no se genera esfingomielina»; es al revés: se acumula.)',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-eicosanoides',
    title: 'Eicosanoides: COX, lipoxigenasa y fármacos',
    subtitle: 'Prostaglandinas, prostaciclinas, tromboxanos, leucotrienos y lipoxinas; vías del araquidonato y su farmacología básica',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '💊',
    keyPoints: [
      'EICOSANOIDES = moléculas de señalización local de 20 carbonos («eicosa») derivadas del ácido araquidónico u otros ácidos grasos poliinsaturados.',
      'Fosfolípido de membrana → (fosfolipasa A₂) → ÁCIDO ARAQUIDÓNICO.',
      'Vía COX (COX-1 y COX-2) → PGH₂ → PROSTAGLANDINAS, PROSTACICLINA (PGI₂) y TROMBOXANO (TXA₂) · vía LIPOXIGENASA → LEUCOTRIENOS (y lipoxinas).',
      'TXA₂ (plaquetas) = vasoconstricción + agregación · PGI₂ (endotelio) = vasodilatación + inhibe la agregación.',
      'Leucotrienos = inflamación, alergia y BRONCOCONSTRICCIÓN (asma).',
      'Aspirina a dosis baja (75–150 mg) bloquea el TXA₂ plaquetario: ANTIAGREGANTE. COX-2 selectivos (celecoxib, etoricoxib) = antiinflamatorios con menos daño gástrico pero más riesgo de infarto. Pregunta de examen.',
      'Cada familia tiene 4 series: 2 de ω-6, 1 de ω-3 (EPA) y 1 de ω-9 (ácido de Mead). El ω-6 no se convierte en ω-3.',
    ],
    sections: [
      {
        id: 'bei-1',
        number: 1,
        title: 'Qué son los eicosanoides',
        keyTerms: ['eicosanoide', 'ácido araquidónico', 'series'],
        blocks: [
          {
            type: 'definition',
            title: 'Eicosanoides',
            content: 'Moléculas de señalización producidas por la oxidación enzimática (o no enzimática) del ácido araquidónico u otros ácidos grasos poliinsaturados de 20 carbonos. Actúan localmente sobre la inflamación, el dolor, la fiebre, la coagulación y el tono vascular. — Eicosanoides.',
          },
          {
            type: 'list',
            title: 'Familias y series (presentación)',
            items: [
              'Familias: prostaglandinas, tromboxanos, leucotrienos, lipoxinas, resolvinas y eoxinas.',
              'Cada familia tiene al menos 4 series de metabolitos:',
              '— 2 series de ω-6 (araquidónico y dihomo-γ-linolénico).',
              '— 1 serie de ω-3 (eicosapentaenoico, EPA).',
              '— 1 serie de ω-9 (ácido de Mead).',
            ],
          },
          {
            type: 'note',
            title: 'Omega-6 vs omega-3',
            content: 'El cuerpo no puede convertir ω-6 en ω-3. Por eso la proporción de ambos en los tejidos, y de los eicosanoides que derivan de ellos, depende directamente de lo que se come. Las series ω-6 y ω-3 tienen efectos fisiológicos y patológicos distintos.',
          },
        ],
      },
      {
        id: 'bei-2',
        number: 2,
        title: 'Las dos vías del ácido araquidónico',
        keyTerms: ['fosfolipasa A₂', 'ciclooxigenasa', 'lipoxigenasa', 'PGH₂'],
        blocks: [
          {
            type: 'steps',
            title: 'De la membrana al mediador',
            steps: [
              'Una lesión (por ejemplo, una cortada) activa la fosfolipasa A₂, que libera ácido araquidónico de los fosfolípidos de membrana.',
              'Vía de la CICLOOXIGENASA (COX-1 y COX-2; «PGH₂ sintasa») → PGH₂ → prostaglandinas (PGD₂, PGE₂, PGF₂α), prostaciclina (PGI₂, en el endotelio) y tromboxano A₂ (TXA₂, en las plaquetas).',
              'Vía de la LIPOXIGENASA (5-LOX) → HPETE → leucotrieno A₄ → LTB₄, o con glutatión → LTC₄ → LTD₄ → LTE₄.',
            ],
          },
          {
            type: 'comparison',
            title: 'COX-1 vs COX-2',
            left: { title: 'COX-1', items: ['Constitutiva («fisiológica»)', 'Protege la mucosa gástrica (prostaglandinas: moco y bicarbonato)', 'TXA₂ de las plaquetas', 'Función renal'] },
            right: { title: 'COX-2', items: ['Inducible: aumenta en la inflamación', 'Inflamación, dolor y fiebre', 'También produce PGI₂ en el endotelio'] },
          },
        ],
      },
      {
        id: 'bei-3',
        number: 3,
        title: 'Qué hace cada eicosanoide',
        keyTerms: ['prostaglandina', 'tromboxano', 'prostaciclina', 'leucotrieno', 'lipoxina'],
        blocks: [
          {
            type: 'table',
            title: 'Familias y funciones ★',
            data: {
              headers: ['Eicosanoide', 'Estructura / origen', 'Función principal'],
              rows: [
                ['Prostaglandinas', 'Ácido prostanoico: anillo de 5 carbonos + cadena con COOH', 'Inflamación, dolor, fiebre, contracción uterina; protegen la mucosa gástrica. PGD₂: potente inductor del sueño'],
                ['Tromboxano A₂', 'Plaquetas', 'Vasoconstricción y agregación plaquetaria'],
                ['Prostaciclina (PGI₂)', 'Endotelio vascular', 'Vasodilatación e inhibe la agregación plaquetaria'],
                ['Leucotrienos', 'Sin anillo, 4 dobles enlaces (vía lipoxigenasa)', 'Inflamación, alergia, broncoconstricción, permeabilidad vascular'],
                ['Lipoxinas', 'Sin anillo, 4 dobles enlaces; las forman neutrófilos y plaquetas', 'Resolución de la inflamación'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Equilibrio en el vaso',
            content: 'El tromboxano (plaqueta) y la prostaciclina (endotelio) son opuestos: uno agrega y contrae, el otro antiagrega y dilata. Su equilibrio mantiene la sangre fluida sin dejar de coagular cuando hay una lesión.',
          },
          {
            type: 'note',
            title: 'Prostaglandinas y AMPc',
            content: 'Según la presentación, las prostaglandinas aumentan el AMPc en plaquetas, tiroides, cuerpo lúteo, hueso fetal, adenohipófisis y pulmón, y lo reducen en el túbulo renal y el tejido adiposo.',
          },
        ],
      },
      {
        id: 'bei-4',
        number: 4,
        title: 'Farmacología de los eicosanoides',
        keyTerms: ['aspirina', 'AINE', 'COX-2 selectivo', 'montelukast', 'misoprostol'],
        blocks: [
          {
            type: 'table',
            title: 'Fármacos que actúan sobre estas vías',
            data: {
              headers: ['Fármaco', 'Mecanismo', 'Uso'],
              rows: [
                ['Ácido acetilsalicílico (aspirina)', 'Inhibe la COX de forma irreversible; en la plaqueta (sin núcleo) bloquea el TXA₂ toda su vida', 'Dosis baja (75–150 mg; presentación de 100 mg): antiagregante. Dosis mayores: analgésico, antipirético y antiinflamatorio'],
                ['AINE no selectivos (diclofenaco, naproxeno, ketorolaco)', 'Inhiben COX-1 y COX-2', 'Dolor e inflamación; dañan la mucosa gástrica'],
                ['COX-2 selectivos (celecoxib, etoricoxib)', 'Inhiben solo la COX-2', 'Inflamación (artritis) con menos daño gástrico; más caros y con más riesgo de infarto'],
                ['Montelukast', 'Antagonista del receptor de leucotrienos (CysLT₁)', 'Asma y rinitis alérgica: menos broncoconstricción'],
                ['Misoprostol', 'Análogo sintético de la prostaglandina E₁', 'Protege la mucosa gástrica (moco y bicarbonato); también induce contracción uterina (uso obstétrico)'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué los COX-2 dan infartos',
            content: 'Al bloquear solo la COX-2 se reduce la prostaciclina del endotelio (antiagregante y vasodilatadora), pero el tromboxano de las plaquetas, que depende de la COX-1, sigue intacto. El equilibrio se inclina hacia la agregación y la vasoconstricción, lo que aumenta el riesgo de trombosis e infarto.',
          },
          {
            type: 'note',
            title: 'Correcciones a lo dicho en clase',
            content: 'El montelukast no inhibe la lipoxigenasa: bloquea el receptor de leucotrienos (el que inhibe la 5-lipoxigenasa es el zileutón). El misoprostol no «estimula la COX-1»: es una prostaglandina sintética que sustituye a las que el AINE deja de producir. Y las dosis analgésica y antipirética de la aspirina son mayores que las dichas en clase (en adultos, ~500 mg–1 g por toma); solo el rango antiagregante (75–150 mg) es correcto.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-lipidos-funcion-esteroides',
    title: 'Funciones de los lípidos, colesterol y hormonas esteroideas',
    subtitle: 'Clasificación funcional, omega 3/6/9, esfingolipidosis, colesterol, esteroidogénesis y hormonas que derivan de él',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🧬',
    keyPoints: [
      'Funciones: energía (9 kcal/g, reserva en el tejido adiposo), membrana, ácidos grasos esenciales, vitaminas liposolubles (A, D, E, K), hormonas, aislante térmico, protección de órganos, eicosanoides y señalización (DAG, esfingosina).',
      'El exceso, sobre todo de saturados, se asocia a obesidad, resistencia a la insulina, infarto, evento vascular cerebral, embolias y trombosis.',
      'ω-3 = antiinflamatorio, cardioprotector, retina y neuronas · ω-6 = proinflamatorio fisiológico (eicosanoides de serie 2 y 4) · ω-9 = no esencial (Δ9-desaturasa), baja el LDL.',
      'Esfingolipidosis: Farber (ceramidasa) · Niemann-Pick (esfingomielinasa) · Krabbe (galactocerebrosidasa) · Gaucher (glucocerebrosidasa) · leucodistrofia metacromática (arilsulfatasa A) · Fabry (α-galactosidasa A) · Tay-Sachs (hexosaminidasa A) · Sandhoff (hexosaminidasa A y B).',
      'COLESTEROL = núcleo esteroide de 4 anillos fusionados (A, B, C, D). Precursor de progestágenos, andrógenos, estrógenos, glucocorticoides, mineralocorticoides, vitamina D y sales biliares.',
      'Esteroidogénesis: colesterol → mitocondria (proteína StAR) → PREGNENOLONA (desmolasa, P450scc) → retículo endoplásmico liso → hormona.',
      'Aldosterona: reabsorbe Na⁺ y agua, excreta K⁺ y H⁺. Addison = hiponatremia, hiperpotasemia, hipotensión · Conn = hipertensión, hipopotasemia, alcalosis, renina baja.',
    ],
    sections: [
      {
        id: 'bfe-1',
        number: 1,
        title: 'Clasificación funcional de los lípidos',
        keyTerms: ['lípidos simples', 'lípidos complejos', 'precursores y derivados'],
        blocks: [
          {
            type: 'table',
            title: 'Tres grupos (presentación)',
            data: {
              headers: ['Grupo', 'Composición', 'Ejemplos'],
              rows: [
                ['Simples', 'C, H y O: ácido graso + alcohol', 'Grasas (ésteres de glicerol, saturadas, sólidas: mantequilla, sebo), aceites (insaturados, líquidos: oliva, linaza, girasol, soya), ceras (ácido graso + alcohol monohidroxilado)'],
                ['Complejos o de membrana', 'C, H, O, N, P y S: además glúcidos o aminas', 'Fosfolípidos (glicerofosfolípidos y esfingolípidos), glucolípidos, sulfolípidos y aminolípidos'],
                ['Precursores y derivados', 'Grupo heterogéneo; muchos derivan de alcoholes cíclicos', 'Ácidos grasos, glicerol, esteroides, cuerpos cetónicos, vitaminas liposolubles, hormonas'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Lípidos de membrana (según Lehninger)',
            items: [
              'Glicerofosfolípidos: glicerol + 2 ácidos grasos + fosfato + alcohol (fosfatidilcolina, etanolamina, serina).',
              'Esfingolípidos: fosfoesfingolípidos (esfingomielina) y glucoesfingolípidos (cerebrósidos y gangliósidos).',
              'Esteroles: colesterol.',
              'Los fosfolípidos son los lípidos más abundantes de la membrana (la presentación cita ~70 %); los dobles enlaces de sus colas separan las moléculas y dan fluidez.',
            ],
          },
        ],
      },
      {
        id: 'bfe-2',
        number: 2,
        title: 'Funciones y riesgos del consumo excesivo',
        keyTerms: ['reserva energética', 'aislante térmico', 'señalización', 'segundos mensajeros'],
        blocks: [
          {
            type: 'list',
            title: 'Para qué sirven los lípidos',
            items: [
              'Fuente y reserva de energía: 9 kcal/g, almacenada como triglicéridos en el tejido adiposo; se usa cuando faltan glúcidos.',
              'Membrana plasmática: forman la bicapa y le dan fluidez, permeabilidad y soporte.',
              'Ácidos grasos esenciales (ω-3 y ω-6) para funciones metabólicas y de señalización.',
              'Absorción y transporte de las vitaminas A, D, E y K.',
              'Hormonas: el colesterol es precursor de las hormonas esteroideas y de las sales biliares.',
              'Aislante térmico y protección de órganos (almohadillas lipídicas).',
              'Mielina: función neurológica.',
              'Eicosanoides (inflamación, coagulación) y segundos mensajeros (diacilglicerol, esfingosina).',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué cuidar su consumo',
            content: 'El consumo excesivo de ácidos grasos saturados se asocia a obesidad, resistencia a la insulina, evento vascular cerebral, infarto agudo de miocardio, embolias y trombosis. En la orientación al paciente se prefieren las grasas insaturadas, sobre todo el ω-3.',
          },
        ],
      },
      {
        id: 'bfe-3',
        number: 3,
        title: 'Omega-3, 6 y 9: diferencias funcionales',
        keyTerms: ['omega-3', 'omega-6', 'omega-9', 'proinflamatorio'],
        blocks: [
          {
            type: 'table',
            title: 'Comparación (presentación)',
            data: {
              headers: ['Rasgo', 'Omega-3 (ALA, EPA, DHA)', 'Omega-6 (linoleico, araquidónico)', 'Omega-9 (oleico)'],
              rows: [
                ['¿Esencial?', 'Sí', 'Sí', 'No: se sintetiza con la Δ9-desaturasa'],
                ['Función', 'Antiinflamatorio (resolvinas, protectinas), cardioprotector (baja VLDL y triglicéridos), antiagregante, estructural en neuronas y retina', 'Proinflamatorio fisiológico (eicosanoides de serie 2 y 4), respuesta inmune y hemostasia, barrera cutánea', 'Cardioprotector: baja el LDL sin bajar el HDL; más estable frente a la oxidación; mejora la sensibilidad a la insulina'],
                ['Problema', 'Deficiencia: retraso del neurodesarrollo, piel seca, más riesgo cardiovascular. Exceso: sangrado', 'Exceso relativo (ω-6:ω-3 > 10:1): inflamación crónica, aterosclerosis, trombosis', 'Deficiencia rara; exceso = exceso calórico'],
                ['Fuentes', 'Pescados azules (salmón, sardina, atún, caballa), krill, microalgas; chía, linaza, nueces, canola', 'Aceites de soya, maíz, girasol, cártamo; carnes, pollo, huevo', 'Aceite de oliva, aguacate, almendras, avellanas, cacahuates'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Proinflamatorio no es «malo»',
            content: 'Los eicosanoides del ω-6 son necesarios para defenderse, coagular y reparar tejidos. Lo que se asocia a enfermedad es el exceso relativo de ω-6 frente a ω-3, típico de la dieta occidental.',
          },
        ],
      },
      {
        id: 'bfe-4',
        number: 4,
        title: 'Esfingolípidos: tabla completa de patologías',
        keyTerms: ['Farber', 'Krabbe', 'leucodistrofia metacromática', 'Sandhoff'],
        blocks: [
          {
            type: 'table',
            title: 'Esfingolipidosis (enzima lisosomal deficiente) ★',
            data: {
              headers: ['Lípido que se acumula', 'Estructura', 'Enfermedad', 'Enzima deficiente'],
              rows: [
                ['Ceramida', 'Esfingosina + ácido graso (amida en C-2)', 'Farber', 'Ceramidasa ácida'],
                ['Esfingomielina', 'Ceramida + fosfocolina', 'Niemann-Pick A y B', 'Esfingomielinasa ácida'],
                ['Galactocerebrósido', 'Ceramida + galactosa', 'Krabbe (leucodistrofia de células globoides)', 'β-galactocerebrosidasa'],
                ['Glucocerebrósido', 'Ceramida + glucosa', 'Gaucher', 'β-glucocerebrosidasa'],
                ['Sulfátido', 'Ceramida + galactosa + sulfato', 'Leucodistrofia metacromática', 'Arilsulfatasa A'],
                ['Globósidos', 'Ceramida + oligosacárido neutro', 'Fabry', 'α-galactosidasa A'],
                ['Gangliósidos (GM2)', 'Ceramida + oligosacárido + ácido siálico (NANA)', 'Tay-Sachs · Sandhoff', 'β-hexosaminidasa A · hexosaminidasas A y B'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Dónde está cada uno',
            content: 'Esfingomielina: mielina y balsas lipídicas. Galactocerebrósido y sulfátido: mielina del SNC y SNP. Glucocerebrósido: bazo, hígado y médula ósea. Globósidos: eritrocitos y endotelio (antígenos ABO). Gangliósidos: neuronas y sinapsis (~6 % de los lípidos de la sustancia gris; GM1 es el receptor de la toxina del cólera).',
          },
        ],
      },
      {
        id: 'bfe-5',
        number: 5,
        title: 'Colesterol y esteroidogénesis',
        keyTerms: ['colesterol', 'núcleo esteroide', 'StAR', 'pregnenolona', 'P450scc'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El colesterol tiene un núcleo esteroide de cuatro anillos fusionados (A, B y C de seis carbonos y D de cinco), un –OH en el C-3 y una cadena lateral. Es la base de todas las hormonas esteroideas, de la vitamina D y de las sales biliares. Conviene memorizar los cuatro anillos: se retoman en Bioquímica II.',
          },
          {
            type: 'steps',
            title: 'Esteroidogénesis (presentación)',
            steps: [
              'El colesterol del citoplasma entra a la mitocondria gracias a la proteína StAR.',
              'En la mitocondria la desmolasa (P450scc, corta la cadena lateral) lo convierte en PREGNENOLONA.',
              'La pregnenolona pasa al retículo endoplásmico liso, donde se modifica por deshidrogenación e hidroxilación enzimática.',
              'La hormona terminada sale a la sangre (por ejemplo, la progesterona) o regresa a la mitocondria para el último paso y después sale.',
            ],
          },
          {
            type: 'table',
            title: 'Familias por número de carbonos',
            data: {
              headers: ['Esqueleto', 'Carbonos', 'Hormonas'],
              rows: [
                ['Pregnano', 'C21', 'Progesterona, cortisol, aldosterona'],
                ['Androstano', 'C19', 'Testosterona, DHEA, androstenediona'],
                ['Estrano', 'C18', 'Estradiol, estrona, estriol (anillo A aromático)'],
              ],
            },
          },
        ],
      },
      {
        id: 'bfe-6',
        number: 6,
        title: 'Hormonas esteroideas: función, deficiencia y exceso',
        keyTerms: ['estrógenos', 'progesterona', 'andrógenos', 'aldosterona', 'aromatasa'],
        blocks: [
          {
            type: 'table',
            title: 'Resumen (presentación)',
            data: {
              headers: ['Hormona', 'Síntesis', 'Funciones', 'Deficiencia', 'Exceso'],
              rows: [
                ['Estrógenos (estradiol)', 'Androstenediona/testosterona → aromatasa (CYP19A1); ovario, placenta, tejido adiposo', 'Caracteres sexuales femeninos, endometrio proliferativo, cierre epifisario, densidad ósea, ↑HDL ↓LDL', 'Amenorrea, osteoporosis, atrofia urogenital, bochornos, infertilidad', 'Hiperplasia endometrial, riesgo de cáncer de endometrio y mama, tromboembolismo, ginecomastia'],
                ['Progesterona', 'Colesterol → pregnenolona → progesterona (3β-HSD); cuerpo lúteo, placenta', 'Endometrio secretor para la implantación, mantiene el embarazo, ↑temperatura basal, desarrollo mamario', 'Abortos recurrentes (insuficiencia lútea), sangrado disfuncional, ciclos anovulatorios', 'Sedación, retención de líquidos, estreñimiento'],
                ['Andrógenos (testosterona, DHT)', 'Pregnenolona → DHEA → testosterona; → DHT por 5α-reductasa; células de Leydig, suprarrenal', 'Caracteres sexuales masculinos, espermatogénesis, anabolismo proteico, eritropoyesis, próstata (DHT)', 'Hipogonadismo, infertilidad, disfunción eréctil, anemia, pérdida ósea', 'Hirsutismo y virilización en mujeres, hiperplasia prostática (DHT), policitemia, cierre epifisario prematuro'],
                ['Mineralocorticoides (aldosterona)', 'Progesterona → desoxicorticosterona → aldosterona (aldosterona sintasa, CYP11B2); zona glomerulosa', '↑Reabsorción de Na⁺ y agua y ↑excreción de K⁺ y H⁺ en el túbulo distal y colector; volumen y presión', 'Addison: hiponatremia, hiperpotasemia, hipotensión, acidosis metabólica hiperclorémica (tipo 4)', 'Conn: hipertensión resistente, hipopotasemia, alcalosis metabólica, renina suprimida'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Testosterona exógena',
            content: 'La testosterona que se usa sin indicación (por ejemplo, en el gimnasio) frena por retroalimentación negativa la LH y la FSH: los testículos dejan de producir testosterona y espermatozoides. Resultado: atrofia testicular, infertilidad y, al suspenderla, hipogonadismo con baja de la libido.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-vitaminas-liposolubles-patologias',
    title: 'Vitaminas liposolubles, eicosanoides y patologías de los ácidos grasos',
    subtitle: 'Vitaminas A y E, los tres grupos de eicosanoides, leucotrienos y lipoxinas, patologías por mal metabolismo de ácidos grasos y síndrome de Reye',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🥕',
    keyPoints: [
      'Vitaminas LIPOSOLUBLES = A, D, E y K: se absorben con las grasas (micelas, sales biliares) y pueden acumularse.',
      'VITAMINA A (retinol; provitamina: β-caroteno): visión (11-cis-retinal + opsina = rodopsina), expresión génica, epitelios e inmunidad. Deficiencia: ceguera nocturna → xeroftalmia → queratomalacia. Exceso: teratógena.',
      'VITAMINA E (α-tocoferol): principal antioxidante de las membranas, protege los ácidos grasos poliinsaturados. Deficiencia: anemia hemolítica, ataxia, neuropatía. Dosis muy altas antagonizan la vitamina K.',
      'Eicosanoides en 3 grupos: dihomo-γ-linolénico → serie 1 · araquidónico → serie 2 (prostanoides) y serie 4 (leucotrienos) · EPA → serie 3 y serie 5.',
      'Leucotrienos C₄, D₄, E₄ = broncoconstricción potente · + B₄ = permeabilidad vascular, quimiotaxis de leucocitos, hipersensibilidad inmediata (asma).',
      'SÍNDROME DE REYE = encefalopatía aguda + esteatosis hepática microvesicular por disfunción mitocondrial; asociado a salicilatos (aspirina) en niños con infecciones virales.',
      'La aspirina acetila la COX de la plaqueta de forma IRREVERSIBLE: el efecto dura lo que vive la plaqueta (7–10 días).',
    ],
    sections: [
      {
        id: 'bvl-1',
        number: 1,
        title: 'Vitamina A',
        keyTerms: ['retinol', 'rodopsina', 'ceguera nocturna', 'xeroftalmia', 'β-caroteno'],
        blocks: [
          {
            type: 'table',
            title: 'Vitamina A (presentación)',
            data: {
              headers: ['Aspecto', 'Detalle'],
              rows: [
                ['Formas', 'Retinoides: retinol, retinal, ácido retinoico. Provitamina: β-caroteno'],
                ['Funciones', 'Visión: el 11-cis-retinal se une a la opsina y forma rodopsina (visión nocturna). Expresión génica: el ácido retinoico actúa sobre receptores nucleares (RAR/RXR) y regula la diferenciación de epitelios. Inmunidad e integridad epitelial'],
                ['Deficiencia', 'Ceguera nocturna (nictalopía) → xeroftalmia (sequedad corneal y conjuntival, manchas de Bitot) → queratomalacia (ulceración corneal, ceguera irreversible); hiperqueratosis folicular e infecciones recurrentes'],
                ['Exceso', 'Aguda: cefalea, papiledema, náusea, vómito. Crónica: hepatomegalia, cirrosis, alopecia, piel seca. Teratogenia: malformaciones graves si se consume en dosis altas en el embarazo'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Isotretinoína y embarazo',
            content: 'Por la teratogenia de los retinoides, los derivados de la vitamina A que se usan contra el acné (isotretinoína) están contraindicados en el embarazo y exigen anticoncepción segura durante el tratamiento.',
          },
        ],
      },
      {
        id: 'bvl-2',
        number: 2,
        title: 'Vitamina E',
        keyTerms: ['α-tocoferol', 'antioxidante', 'peroxidación lipídica', 'anemia hemolítica'],
        blocks: [
          {
            type: 'table',
            title: 'Vitamina E (tocoferoles y tocotrienoles)',
            data: {
              headers: ['Aspecto', 'Detalle'],
              rows: [
                ['Estructura', 'Anillo cromanol + cadena isoprenoide hidrofóbica (principalmente α-tocoferol)'],
                ['Función', 'Principal antioxidante liposoluble de las membranas: atrapa radicales libres y protege a los ácidos grasos poliinsaturados de la peroxidación; estabiliza la membrana del eritrocito y de tejidos con alto consumo de O₂ (músculo, sistema nervioso)'],
                ['Fuentes', 'Aceites vegetales, frutos secos, semillas, aguacate, verduras de hoja verde'],
                ['Deficiencia', 'Anemia hemolítica (sobre todo en prematuros), ataxia espinocerebelosa, neuropatía periférica, retinopatía pigmentaria, miopatía'],
                ['Exceso', 'Es la liposoluble menos tóxica, pero a dosis muy altas (> 1000 mg/día) antagoniza la vitamina K y aumenta el sangrado, sobre todo con warfarina'],
              ],
            },
          },
        ],
      },
      {
        id: 'bvl-3',
        number: 3,
        title: 'Los tres grupos de eicosanoides',
        keyTerms: ['serie 1', 'serie 2', 'serie 3', 'leucotrienos', 'lipoxinas'],
        blocks: [
          {
            type: 'table',
            title: 'Origen de cada grupo (Harper)',
            data: {
              headers: ['Grupo', 'Precursor', 'Prostanoides (vía COX)', 'Leucotrienos (vía LOX)'],
              rows: [
                ['1', 'Dihomo-γ-linolénico (del linoleico, ω-6)', 'Serie 1 (PGE₁, TXA₁)', 'Serie 3'],
                ['2', 'Araquidónico (ω-6), liberado por la fosfolipasa A₂', 'Serie 2 (PGE₂, PGI₂, TXA₂)', 'Serie 4 (LTB₄, LTC₄…) y lipoxinas'],
                ['3', 'Eicosapentaenoico (EPA, del α-linolénico, ω-3)', 'Serie 3 (PGI₃, TXA₃)', 'Serie 5'],
              ],
            },
          },
          {
            type: 'note',
            title: 'El subíndice',
            content: 'El número del subíndice indica cuántos dobles enlaces tiene la molécula, y con eso la serie a la que pertenece. La fosfolipasa A₂ se activa por angiotensina II, bradicinina, epinefrina y trombina.',
          },
          {
            type: 'list',
            title: 'Leucotrienos y lipoxinas (presentación)',
            items: [
              'La vía de la lipoxigenasa forma leucotrienos en leucocitos, mastocitos, plaquetas y macrófagos ante estímulos inmunitarios y no inmunitarios.',
              'Leucotrienos C₄, D₄ y E₄: potentes constrictores del músculo liso bronquial.',
              'C₄, D₄, E₄ + B₄: aumentan la permeabilidad vascular, atraen y activan leucocitos; reacciones inflamatorias y de hipersensibilidad inmediata (asma).',
              'Lipoxinas: vasoactivas e inmunorreguladoras.',
              'Prostaglandinas: dolor, fiebre, presión arterial, coagulación, inducción del parto, sueño y vigilia.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Aspirina antes de un procedimiento',
            content: 'La aspirina acetila de forma irreversible la COX de la plaqueta, que no tiene núcleo para fabricar otra; el efecto antiagregante dura lo que vive la plaqueta (7–10 días). En clase se indicó suspenderla 7 días antes de una cirugía dental. Hoy la decisión se individualiza: en extracciones simples la dosis baja suele mantenerse con hemostasia local, y nunca se suspende por cuenta propia si el paciente la toma por un stent o un infarto previo.',
          },
        ],
      },
      {
        id: 'bvl-4',
        number: 4,
        title: 'Patologías del metabolismo de los ácidos grasos esenciales',
        keyTerms: ['deficiencia de ácidos grasos esenciales', 'Sjögren-Larsson', 'síndrome de Reye'],
        blocks: [
          {
            type: 'table',
            title: 'Metabolismo anormal de ácidos grasos esenciales (presentación)',
            data: {
              headers: ['Situación', 'Qué pasa'],
              rows: [
                ['Dieta insuficiente', 'Poco ω-3 y ω-6: dermatitis, alteraciones del crecimiento, de la piel, inmunes y neurológicas, retraso del desarrollo'],
                ['Fibrosis quística, acrodermatitis enteropática, síndrome hepatorrenal', 'Mala absorción o metabolismo de los esenciales: piel seca y descamativa, alteraciones hepáticas y renales'],
                ['Síndrome de Sjögren-Larsson', 'Deficiencia de la aldehído deshidrogenasa de ácidos grasos de cadena larga'],
                ['Degeneración neonatal multisistémica', 'Déficit grave en neonatos: piel, sistema nervioso, retina, inmunidad y crecimiento'],
                ['Enfermedad de Crohn', 'Inflamación intestinal crónica → malabsorción de lípidos y deficiencia de esenciales'],
                ['Cirrosis y alcoholismo', 'Menor síntesis de fosfolípidos y lipoproteínas; hígado graso; daño de membranas'],
                ['Síndrome de Reye', 'Encefalopatía aguda con esteatosis hepática microvesicular por disfunción mitocondrial (β-oxidación); asociado a salicilatos en niños con infecciones virales'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Síndrome de Reye',
            content: 'En niños y adolescentes con influenza o varicela no se usa aspirina para la fiebre. La aspirina daña la mitocondria hepática: falla la β-oxidación, se acumula grasa en el hígado y sube el amonio, que causa edema cerebral. Para la fiebre en niños se usa paracetamol o ibuprofeno.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-proteinas-aminoacidos',
    title: 'Proteínas: aminoácidos y enlace peptídico',
    subtitle: 'Inicio de la Unidad IV: estructura del aminoácido, clasificación por grupo R, enlace peptídico y destino glucogénico o cetogénico',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🥚',
    keyPoints: [
      'PROTEÍNAS = biopolímeros de aminoácidos unidos por ENLACES PEPTÍDICOS; se sintetizan en los ribosomas del retículo endoplásmico a partir del ARN.',
      'AMINOÁCIDO = carbono α unido a un grupo AMINO (–NH₂), un grupo CARBOXILO (–COOH), un H y un grupo R (cadena lateral).',
      'El esqueleto proteico se forma normalmente con 20 aminoácidos; el grupo R define sus propiedades.',
      'Por su R: no polares alifáticos · aromáticos · polares sin carga · con carga positiva (básicos) · con carga negativa (ácidos).',
      'ENLACE PEPTÍDICO = –COOH de un aminoácido + –NH₂ del siguiente, con salida de una molécula de agua. La cadena tiene un extremo amino (N-terminal) y uno carboxilo (C-terminal).',
      'Esqueleto carbonado: GLUCOGÉNICO (da glucosa), CETOGÉNICO (da cuerpos cetónicos: solo leucina y lisina) o ambos (isoleucina, fenilalanina, tirosina, triptófano, treonina).',
    ],
    sections: [
      {
        id: 'bpa-1',
        number: 1,
        title: 'Qué son las proteínas',
        keyTerms: ['biopolímero', 'aminoácido', 'ribosoma'],
        blocks: [
          {
            type: 'list',
            title: 'Características (presentación)',
            items: [
              'Se sintetizan en el retículo endoplásmico rugoso (ribosomas) a partir del ARN.',
              'Interaccionan con lípidos y carbohidratos (lipoproteínas, glucoproteínas).',
              'Su esqueleto se forma normalmente con 20 aminoácidos.',
              'Son biopolímeros: los aminoácidos se unen por enlaces peptídicos, quedan terminales carboxilo y amino, y en cada unión sale una molécula de agua.',
            ],
          },
          {
            type: 'note',
            title: 'Las mismas tres biomoléculas',
            content: 'Glúcidos, lípidos y proteínas comparten C, H y O; las proteínas además tienen nitrógeno (el grupo amino) y, algunas, azufre (cisteína, metionina). Cada una tiene su enlace: glucosídico, éster y peptídico.',
          },
        ],
      },
      {
        id: 'bpa-2',
        number: 2,
        title: 'Estructura del aminoácido',
        keyTerms: ['carbono α', 'grupo amino', 'grupo carboxilo', 'grupo R'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Todos los aminoácidos de las proteínas comparten la misma base: un carbono central, el carbono α, unido a cuatro grupos distintos: un grupo amino (–NH₂), un grupo carboxilo (–COOH), un átomo de hidrógeno y un grupo R o cadena lateral. Lo único que cambia de un aminoácido a otro es el R.',
          },
          {
            type: 'table',
            title: 'Clasificación por el grupo R ★',
            data: {
              headers: ['Grupo', 'Aminoácidos', 'Rasgo'],
              rows: [
                ['No polares, alifáticos', 'Glicina, alanina, valina, leucina, isoleucina, metionina, prolina', 'Hidrofóbicos; tienden al interior de la proteína'],
                ['Aromáticos', 'Fenilalanina, tirosina, triptófano', 'Anillo aromático; absorben luz UV'],
                ['Polares sin carga', 'Serina, treonina, cisteína, asparagina, glutamina', 'Forman puentes de hidrógeno; la cisteína forma puentes disulfuro'],
                ['Con carga positiva (básicos)', 'Lisina, arginina, histidina', 'R con grupo amino o imidazol'],
                ['Con carga negativa (ácidos)', 'Aspartato, glutamato', 'R con un segundo grupo carboxilo'],
              ],
            },
          },
        ],
      },
      {
        id: 'bpa-3',
        number: 3,
        title: 'Enlace peptídico',
        keyTerms: ['enlace peptídico', 'N-terminal', 'C-terminal', 'deshidratación'],
        blocks: [
          {
            type: 'definition',
            title: 'Enlace peptídico',
            content: 'Enlace amida entre el grupo carboxilo de un aminoácido y el grupo amino del siguiente, con liberación de una molécula de agua (condensación). — Enlace peptídico.',
          },
          {
            type: 'paragraph',
            content:
              'Al unir muchos aminoácidos queda una cadena con un esqueleto repetido (N–Cα–C) y las cadenas laterales hacia afuera. Un extremo conserva el amino libre (N-terminal) y el otro el carboxilo libre (C-terminal); la secuencia se lee de N a C.',
          },
          {
            type: 'comparison',
            title: 'Los enlaces de las biomoléculas',
            left: { title: 'Glúcidos y lípidos', items: ['Glucosídico: entre monosacáridos', 'Éster: ácido graso + alcohol'] },
            right: { title: 'Proteínas', items: ['Peptídico (amida): –COOH + –NH₂', 'También se libera agua al formarse'] },
          },
        ],
      },
      {
        id: 'bpa-4',
        number: 4,
        title: 'Destino del esqueleto carbonado',
        keyTerms: ['glucogénico', 'cetogénico', 'ciclo de Krebs'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Cuando un aminoácido se usa como combustible pierde su grupo amino y su esqueleto de carbonos entra al metabolismo central. Según en qué molécula entre, puede servir para fabricar glucosa, cuerpos cetónicos o ambos. Se estudia a fondo en Bioquímica II.',
          },
          {
            type: 'table',
            title: 'Glucogénicos vs cetogénicos (Lehninger, figura 20.11)',
            data: {
              headers: ['Tipo', 'Entran como', 'Aminoácidos'],
              rows: [
                ['Glucogénicos', 'Piruvato, oxalacetato, fumarato, succinil-CoA o α-cetoglutarato → glucosa', 'La mayoría: alanina, glicina, serina, cisteína, aspartato, asparagina, glutamato, glutamina, arginina, histidina, prolina, valina, metionina'],
                ['Solo cetogénicos', 'Acetil-CoA o acetoacetato → cuerpos cetónicos', 'Leucina y lisina'],
                ['Ambos', 'Por más de una vía', 'Isoleucina, fenilalanina, tirosina, triptófano, treonina'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Solo cetogénicos',
            content: 'Leucina y Lisina son los únicos puramente cetogénicos: «las dos L».',
          },
        ],
      },
    ],
  },
]
