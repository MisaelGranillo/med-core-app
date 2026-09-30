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
    title: 'Glúcidos: introducción',
    subtitle: 'Unidad II — por qué importan los carbohidratos y los destinos de la glucosa',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🍞',
    keyPoints: [
      'Un adulto requiere ~2000 kcal/día: carbohidratos 40–60 %, lípidos 30–40 %, proteínas 10–15 %.',
      'La GLUCOSA es el glúcido más importante: fuente de energía y precursor de muchas biomoléculas.',
      'De la glucosa derivan glucógeno, ribosa y desoxirribosa (ácidos nucleicos) y galactosa (lactosa de la leche); además forma glucolípidos, glucoproteínas y proteoglucanos.',
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
            content: 'Esta clase solo abrió la Unidad II (estructura, función e importancia de los glúcidos). La estructura, clasificación y función de monosacáridos, disacáridos y polisacáridos se agregará con las clases siguientes.',
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
    ],
  },
]
