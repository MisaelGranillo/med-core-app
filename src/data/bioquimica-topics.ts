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
  {
    id: 'bioquimica-aminoacidos-clasificacion',
    title: 'Aminoácidos: configuración D/L, clasificación y derivados',
    subtitle: 'L vs D, seis grupos por cadena lateral, cisteína vs metionina, esenciales, glucogénicos/cetogénicos, moléculas derivadas y péptidos',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🧩',
    keyPoints: [
      'Las proteínas humanas se fabrican con L-α-aminoácidos. Los D-aminoácidos existen en la pared bacteriana (D-Ala, D-Glu), en antibióticos peptídicos y en el SNC (D-serina, coagonista del receptor NMDA).',
      'Péptidos con D-aminoácidos resisten a las peptidasas (que solo reconocen enlaces entre L-aminoácidos): vida media más larga, útil en fármacos.',
      'Seis grupos por R: alifáticos · hidroxilo o azufre · cíclicos (prolina) · aromáticos · básicos · ácidos o amidas.',
      'CISTEÍNA (–SH) forma puentes disulfuro · METIONINA (–S–CH₃) es esencial, no forma puentes disulfuro e inicia la síntesis de proteínas.',
      'Esenciales (presentación): arginina*, histidina, isoleucina, leucina, lisina, metionina, fenilalanina, treonina, triptófano, valina.',
      'Solo cetogénicos: leucina y lisina · glucogénicos y cetogénicos: isoleucina, fenilalanina, tirosina, triptófano.',
      'Péptidos: di (2, carnosina) · tri (3, glutatión) · tetra (4, encefalinas) · oligo (2–10, oxitocina y vasopresina de 9 aa) · poli (> 10).',
    ],
    sections: [
      {
        id: 'bac-1',
        number: 1,
        title: 'Configuración L y D',
        keyTerms: ['L-aminoácido', 'D-aminoácido', 'quiralidad', 'péptidos D'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El carbono α tiene cuatro grupos distintos (amino, carboxilo, H y R), así que es quiral: cada aminoácido existe en dos formas, imágenes en espejo, llamadas L y D. La glicina es la excepción porque su R es otro H. Los ribosomas solo usan L-aminoácidos.',
          },
          {
            type: 'table',
            title: 'Funciones de los D-aminoácidos (presentación)',
            data: {
              headers: ['Sistema', 'Papel', 'Ejemplo'],
              rows: [
                ['Pared bacteriana', 'Resistencia frente a las proteasas del huésped, que solo rompen enlaces entre L-aminoácidos', 'D-alanina y D-glutamato en el peptidoglucano (Gram + y Gram −)'],
                ['Antibióticos peptídicos', 'Síntesis no ribosomal en hongos y bacterias', 'Gramicidina y valinomicina'],
                ['Sistema nervioso central', 'Neuromodulación; se forman a partir de L-aminoácidos por racemasas', 'D-serina: coagonista del receptor NMDA · D-aspartato: desarrollo neural y endocrino'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Péptidos D en farmacología',
            content: 'Los péptidos terapéuticos normales (de L-aminoácidos) se degradan rápido por las peptidasas del plasma y el hígado. Sustituir algunos por D-aminoácidos (o diseñar péptidos «retro-inversos») alarga mucho su vida media. Con la misma idea se diseñan péptidos antimicrobianos que no se inactivan en el organismo.',
          },
        ],
      },
      {
        id: 'bac-2',
        number: 2,
        title: 'Clasificación por cadena lateral',
        keyTerms: ['alifáticos', 'aromáticos', 'básicos', 'ácidos', 'prolina'],
        blocks: [
          {
            type: 'table',
            title: 'Seis grupos (presentación) ★',
            data: {
              headers: ['Grupo', 'Rasgo del R', 'Aminoácidos'],
              rows: [
                ['1. Alifáticos', 'Cadena hidrocarbonada no polar', 'Glicina, alanina, valina, leucina, isoleucina'],
                ['2. Hidroxilo o azufre', 'Grupo –OH o –S', 'Serina, treonina (–OH); cisteína, metionina (S)'],
                ['3. Cíclicos', 'La cadena lateral cierra un anillo con el grupo amino', 'Prolina'],
                ['4. Aromáticos', 'Anillo aromático', 'Fenilalanina, tirosina, triptófano'],
                ['5. Básicos', 'Carga positiva a pH fisiológico', 'Lisina, arginina, histidina'],
                ['6. Ácidos o amidas', 'Carga negativa o grupo amida', 'Aspartato, glutamato; asparagina, glutamina (amidas)'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Los dos aminoácidos con azufre',
            left: { title: 'Cisteína (Cys, C)', items: ['Grupo tiol (–SH), reactivo', 'Dos cisteínas forman un puente disulfuro (–S–S–) que estabiliza proteínas', 'El tiol puede ionizarse (pKR ≈ 8.3)', 'No esencial'] },
            right: { title: 'Metionina (Met, M)', items: ['Tioéter (–S–CH₃), menos reactivo', 'No forma puentes disulfuro', 'ESENCIAL', 'Inicia la síntesis de proteínas (metionina iniciadora, codón AUG)'] },
          },
        ],
      },
      {
        id: 'bac-3',
        number: 3,
        title: 'Esenciales y destino del esqueleto carbonado',
        keyTerms: ['esenciales', 'glucogénicos', 'cetogénicos'],
        blocks: [
          {
            type: 'comparison',
            title: 'Según la presentación',
            left: { title: 'Esenciales', items: ['Arginina*, histidina, isoleucina, leucina, lisina, metionina, fenilalanina, treonina, triptófano, valina', '*La arginina es condicionalmente esencial: hace falta en la dieta durante el crecimiento o el estrés'] },
            right: { title: 'No esenciales', items: ['Alanina, asparagina, aspartato, cisteína, glutamato, glutamina, glicina, prolina, serina, tirosina', 'La tirosina se forma a partir de la fenilalanina'] },
          },
          {
            type: 'table',
            title: 'Qué pasa con el esqueleto al quitar el grupo amino ★',
            data: {
              headers: ['Destino', 'Aminoácidos'],
              rows: [
                ['Solo glucogénicos (dan glucosa)', 'Alanina, arginina, asparagina, aspartato, cisteína, glutamato, glutamina, glicina, histidina, metionina, prolina, serina, treonina, valina'],
                ['Glucogénicos y cetogénicos', 'Isoleucina, fenilalanina, tirosina, triptófano'],
                ['Solo cetogénicos (dan acetil-CoA/acetoacetato)', 'Leucina y lisina'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Ojo con la tabla de la diapositiva',
            content: 'La tabla de la presentación pone al triptófano en la columna de solo cetogénicos, pero el diagrama de la misma diapositiva (y los textos) lo muestran entrando también como piruvato: es glucogénico y cetogénico. Los únicos puramente cetogénicos son leucina y lisina. La treonina aparece como glucogénica en esta clase y como mixta en Lehninger; ambas clasificaciones se usan.',
          },
        ],
      },
      {
        id: 'bac-4',
        number: 4,
        title: 'Moléculas que derivan de los aminoácidos',
        keyTerms: ['serotonina', 'catecolaminas', 'hemo', 'óxido nítrico', 'GABA'],
        blocks: [
          {
            type: 'table',
            title: 'Funciones biosintéticas (presentación) ★',
            data: {
              headers: ['Aminoácido', 'Produce'],
              rows: [
                ['Arginina', 'Urea, creatina, óxido nítrico'],
                ['Glutamato', 'GABA (con vitamina B₆), glutatión (con cisteína y glicina)'],
                ['Glicina', 'Porfirinas → grupo hemo (con B₆); purinas'],
                ['Aspartato y glutamina', 'Purinas y pirimidinas'],
                ['Histidina', 'Histamina (con B₆)'],
                ['Triptófano', 'Serotonina → melatonina (con B₆ y BH₄); niacina (NAD⁺/NADP⁺)'],
                ['Fenilalanina → tirosina', 'Hormonas tiroideas (T₄, T₃), melanina, DOPA → dopamina → noradrenalina → adrenalina'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Ejemplos de clase',
            content: 'La alanina se convierte en piruvato y entra al ciclo de Krebs; la glicina participa en la síntesis del grupo hemo; el triptófano, con vitamina B₆, da serotonina y melatonina.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Suplementos de aminoácidos',
            content: 'Los suplementos de aminoácidos que se venden sin control no están libres de riesgo. En pacientes que sí los necesitan (por ejemplo, desnutrición por cáncer) se indican con un equipo interdisciplinario y con vigilancia.',
          },
        ],
      },
      {
        id: 'bac-5',
        number: 5,
        title: 'Péptidos por número de aminoácidos',
        keyTerms: ['dipéptido', 'tripéptido', 'oligopéptido', 'polipéptido', 'glutatión'],
        blocks: [
          {
            type: 'table',
            title: 'Clasificación (presentación)',
            data: {
              headers: ['Tipo', 'Aminoácidos', 'Ejemplo'],
              rows: [
                ['Dipéptido', '2', 'Carnosina (β-alanina + histidina)'],
                ['Tripéptido', '3', 'Glutatión (γ-glutamato + cisteína + glicina)'],
                ['Tetrapéptido', '4', 'Encefalinas (péptidos opioides endógenos)'],
                ['Oligopéptido', '2 a ~10', 'Oxitocina y vasopresina (9 aminoácidos)'],
                ['Polipéptido', '> 10', 'Cadena lineal o proteína funcional'],
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-plegamiento-proteico',
    title: 'Enlace peptídico y plegamiento: estructura primaria y secundaria',
    subtitle: 'Enlace peptídico plano, cómo se estudian las proteínas, ciclo de vida, estructura primaria, α-hélice y β-lámina, globinas y desnaturalización',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🌀',
    keyPoints: [
      'ENLACE PEPTÍDICO: condensación –COOH + –NH₂ con salida de H₂O. Por resonancia tiene carácter de doble enlace parcial: es RÍGIDO y PLANO.',
      'La secuencia se numera desde el extremo amino libre (N-terminal) hacia el carboxilo (C-terminal).',
      'Lo que diferencia a las proteínas es el NÚMERO, TIPO y SECUENCIA de sus aminoácidos.',
      'El plegamiento es secuencial: primaria → secundaria → terciaria → cuaternaria; cada nivel depende del anterior. Estructura → plegamiento → función.',
      'PRIMARIA = secuencia lineal unida por enlaces peptídicos (covalentes).',
      'SECUNDARIA = α-hélice y β-lámina plegada, estabilizadas por PUENTES DE HIDRÓGENO. La α-hélice gira a la derecha con ~3.6 aminoácidos por vuelta.',
      'Mioglobina y hemoglobina: ~70 % α-hélice, residuos hidrofóbicos hacia el interior y grupo HEMO como grupo prostético.',
    ],
    sections: [
      {
        id: 'bpp-1',
        number: 1,
        title: 'El enlace peptídico',
        keyTerms: ['condensación', 'resonancia', 'plano', 'N-terminal'],
        blocks: [
          {
            type: 'steps',
            title: 'De dos aminoácidos a un dipéptido',
            steps: [
              'El –OH del carboxilo de un aminoácido y un H del amino del siguiente salen como agua (condensación o deshidratación).',
              'El C del carbonilo queda unido al N: enlace peptídico (–CO–NH–).',
              'La cadena crece de forma lineal; la unidad repetitiva es N–Cα–C con las cadenas R hacia afuera.',
            ],
          },
          {
            type: 'paragraph',
            content:
              'Los electrones se reparten entre el C=O y el C–N (resonancia), por lo que el enlace peptídico tiene carácter de doble enlace parcial: no gira libremente, es rígido y plano. Los giros de la cadena ocurren en los enlaces del carbono α, y eso limita las formas que puede adoptar la proteína.',
          },
        ],
      },
      {
        id: 'bpp-2',
        number: 2,
        title: 'Cómo se estudian las proteínas',
        keyTerms: ['Edman', 'electroforesis', 'cristalografía', 'ninhidrina'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Para conocer qué aminoácidos tiene una proteína, cuántos y en qué orden, se hidroliza. En la secuenciación de Edman, el fenilisotiocianato (PITC) se une al aminoácido del extremo amino, se separa por escisión ácida y se identifica; el proceso se repite con el siguiente.',
          },
          {
            type: 'table',
            title: 'Técnicas (presentación)',
            data: {
              headers: ['Técnica', 'Qué determina'],
              rows: [
                ['Cromatografía', 'Separa aminoácidos por carga, tamaño y afinidad'],
                ['Electroforesis', 'Separa por carga'],
                ['Cristalografía de rayos X', 'Configuración tridimensional'],
                ['Espectroscopia de fluorescencia y dicroísmo circular', 'Tipo de plegamiento'],
                ['Resonancia magnética nuclear', 'Estructura en solución'],
                ['Espectrometría de masas', 'Relación masa/carga de los iones'],
                ['Reacción con ninhidrina', 'Color con los aminoácidos que tienen grupo amino libre'],
                ['Secuenciación y proteólisis', 'Orden de los aminoácidos'],
              ],
            },
          },
        ],
      },
      {
        id: 'bpp-3',
        number: 3,
        title: 'Ciclo de vida de una proteína',
        keyTerms: ['ubiquitinación', 'modificación covalente', 'proteasoma'],
        blocks: [
          {
            type: 'steps',
            title: 'Diez etapas (figura de Harper en la presentación)',
            steps: [
              'Síntesis en el ribosoma a partir del ARNm.',
              'Plegamiento.',
              'Procesamiento (por ejemplo, formación de puentes disulfuro).',
              'Modificación covalente (por ejemplo, acilación con un ácido graso).',
              'Translocación a su destino (por ejemplo, la membrana).',
              'Activación.',
              'Catálisis o función.',
              '«Envejecimiento»: oxidación, desamidación, desnaturalización.',
              'Ubiquitinación: se marca para destruirse.',
              'Degradación; sus aminoácidos regresan al pool para reutilizarse.',
            ],
          },
        ],
      },
      {
        id: 'bpp-4',
        number: 4,
        title: 'Estructura primaria y secundaria',
        keyTerms: ['estructura primaria', 'α-hélice', 'β-lámina', 'puentes de hidrógeno'],
        blocks: [
          {
            type: 'comparison',
            title: 'Los dos primeros niveles',
            left: { title: 'Primaria', items: ['Secuencia lineal de aminoácidos', 'Enlaces peptídicos (covalentes)', 'La presentación cita 50–300 aminoácidos (algunas > 1000)', 'Las cadenas R sobresalen y luego interactúan con otros aminoácidos'] },
            right: { title: 'Secundaria', items: ['Conformación tridimensional local', 'Estabilizada por puentes de hidrógeno del esqueleto (C=O ··· H–N)', 'Dos formas: α-hélice y β-lámina plegada', 'Forma los motivos y dominios de la proteína'] },
          },
          {
            type: 'list',
            title: 'α-hélice',
            items: [
              'Espiral que gira hacia la derecha (dextrógira).',
              '~3.6 aminoácidos por vuelta (la presentación redondea a 3.5); avanza 0.54 nm por vuelta.',
              'Cada giro depende de los aminoácidos que la forman; puentes de hidrógeno entre vueltas.',
              'Las cadenas R quedan hacia el exterior: deciden si el segmento es hidrofóbico o hidrofílico.',
              'Segmentos hidrofóbicos atraviesan la membrana (interactúan con las colas de los fosfolípidos); las proteínas solubles tienen hélices ricas en residuos polares hacia el agua.',
            ],
          },
          {
            type: 'note',
            title: 'Correcciones a la presentación',
            content: 'La diapositiva dice que la secundaria forma «codones»; los codones son tripletes del ARNm, no partes de la proteína: lo correcto es motivos o dominios. Habla de «β-hélice», que es β-lámina plegada. Y la clasificación omite la estructura cuaternaria, que sí existe (varias subunidades, como en la hemoglobina).',
          },
        ],
      },
      {
        id: 'bpp-5',
        number: 5,
        title: 'Globinas: mioglobina y hemoglobina',
        keyTerms: ['mioglobina', 'hemoglobina', 'grupo hemo', 'histidina proximal'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La mioglobina y las subunidades de la hemoglobina son ~70 % α-hélice. Sus aminoácidos hidrofóbicos quedan hacia el interior y los hidrofílicos hacia el exterior. En el centro está el grupo hemo, su grupo prostético: un anillo plano e hidrófobo con un Fe²⁺ que une el O₂.',
          },
          {
            type: 'comparison',
            title: 'Las dos histidinas del hemo',
            left: { title: 'His F8 (proximal, His 93)', items: ['En la hélice F', 'Se une directamente al hierro del hemo'] },
            right: { title: 'His E7 (distal, His 64)', items: ['En la hélice E', 'Forma un puente de hidrógeno con el O₂ unido'] },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Anemia falciforme',
            content: 'Un solo cambio en la estructura primaria de la cadena β de la hemoglobina (glutamato → valina en la posición 6) crea una zona hidrofóbica. Las moléculas desoxigenadas se pegan entre sí y deforman al eritrocito en hoz: cambio de secuencia → cambio de plegamiento → cambio de función → enfermedad.',
          },
        ],
      },
      {
        id: 'bpp-6',
        number: 6,
        title: 'Desnaturalización y alergias',
        keyTerms: ['desnaturalización', 'pH', 'temperatura', 'reactividad cruzada'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La temperatura y el pH rompen los enlaces débiles que mantienen el plegamiento (puentes de hidrógeno, interacciones entre cadenas R). La proteína pierde su forma y su función, aunque la secuencia (primaria) quede intacta: eso es desnaturalización. El pH cambia la carga de los grupos amino, carboxilo y R, y con ello sus interacciones. Por eso el pH extracelular se mantiene entre 7.35 y 7.45.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Alergias alimentarias',
            content: 'Algunas proteínas alergénicas son termolábiles: cocer la fruta (por ejemplo, la manzana) las desnaturaliza y el paciente la tolera. Otras resisten el calor (cacahuate, leche en muchos casos). La alergia al látex se cruza con el plátano (síndrome látex-fruta) porque comparten proteínas de secuencia parecida que el sistema inmune reconoce igual.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-estructura-terciaria-cuaternaria',
    title: 'Plegamiento: β-lámina, estructura terciaria y cuaternaria',
    subtitle: 'Hemoglobina vs mioglobina, β-lámina paralela y antiparalela, interacciones de la terciaria, dominios, cuaternaria, desnaturalización y AlphaFold',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🧶',
    keyPoints: [
      'MIOGLOBINA = una cadena con un hemo (músculo) · HEMOGLOBINA = tetrámero (2α + 2β), un hemo por subunidad. Al unirse el O₂ cambia la conformación de los aminoácidos cercanos al hemo: estado T (tenso) → R (relajado).',
      'β-LÁMINA = zigzag; varias cadenas lado a lado unidas por puentes de hidrógeno ENTRE cadenas. PARALELA (mismo sentido) o ANTIPARALELA (sentidos opuestos, como la fibroína de la seda).',
      'Que se forme hélice o lámina depende de la secuencia y de los ángulos φ (phi) y ψ (psi); hay segmentos largos sin estructura secundaria definida.',
      'TERCIARIA = plegamiento 3D completo de una cadena, determinado por los grupos R. Enlaces covalentes (disulfuro, amida entre cadenas laterales) y no covalentes (electrostáticos, puentes de H, hidrofóbicos, Van der Waals).',
      'DOMINIOS = regiones que se pliegan por separado y funcionan como unidades autónomas; su asociación da la terciaria (por ejemplo, los 3 dominios de la albúmina).',
      'CUATERNARIA = varias cadenas polipeptídicas plegadas que se asocian (hemoglobina, colágeno, miosina, tubulina α/β).',
      'Desnaturalizan: temperatura, pH, disolventes (alcohol, cetonas, cloroformo), detergentes, sales concentradas, urea y guanidina.',
    ],
    sections: [
      {
        id: 'btc-1',
        number: 1,
        title: 'Mioglobina y hemoglobina',
        keyTerms: ['mioglobina', 'hemoglobina', 'tetrámero', 'estado T', 'estado R'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos globinas ricas en α-hélice',
            left: { title: 'Mioglobina', items: ['Una sola cadena polipeptídica', 'Un grupo hemo', 'Músculo: une y guarda O₂ para la fibra muscular', 'Estructura terciaria'] },
            right: { title: 'Hemoglobina', items: ['Cuatro cadenas: 2 α y 2 β (HbA)', 'Un hemo en cada subunidad: hasta 4 O₂', 'Eritrocito: transporta O₂ en la sangre', 'Estructura cuaternaria'] },
          },
          {
            type: 'paragraph',
            content:
              'Cuando el O₂ se une al hierro del hemo, el hierro entra al plano del anillo y arrastra a la histidina F8 y a la hélice F. Ese movimiento cambia la conformación de los aminoácidos vecinos: la hemoglobina pasa del estado T (tenso, menor afinidad por O₂) al estado R (relajado, mayor afinidad). Así una subunidad «avisa» a las demás.',
          },
          {
            type: 'note',
            title: 'Actividades pendientes',
            content: 'La curva de saturación de mioglobina vs hemoglobina, el efecto Bohr, el 2,3-bisfosfoglicerato y la hemoglobina fetal se dejaron como actividades de investigación (4, 5 y 6) y se cargarán cuando se expliquen en clase.',
          },
        ],
      },
      {
        id: 'btc-2',
        number: 2,
        title: 'β-lámina plegada',
        keyTerms: ['β-lámina', 'paralela', 'antiparalela', 'ángulos φ y ψ'],
        blocks: [
          {
            type: 'list',
            title: 'Características (presentación)',
            items: [
              'Forma de zigzag o lámina plegada; más estable, ordenada y compacta por su forma laminar.',
              'Varias cadenas (o segmentos de la misma cadena) se colocan lado a lado.',
              'Paralela si van en la misma dirección (N→C); antiparalela si van en dirección opuesta.',
              'Los puentes de hidrógeno se forman ENTRE cadenas vecinas, no dentro de la misma cadena (a diferencia de la α-hélice).',
              'La rigidez del enlace peptídico y la apolaridad de los radicales mantienen la forma.',
            ],
          },
          {
            type: 'table',
            title: 'Qué aminoácidos favorecen cada forma (gráfica de la presentación)',
            data: {
              headers: ['Forma', 'Aminoácidos que la favorecen'],
              rows: [
                ['α-hélice', 'Glutamato, metionina, alanina, leucina, lisina'],
                ['β-lámina', 'Fenilalanina, triptófano, tirosina, isoleucina, valina, treonina, cisteína'],
                ['Giros β (curvas)', 'Glicina, prolina, asparagina, aspartato, serina'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Dos precisiones',
            content: 'La presentación dice que en la β-lámina «prevalecen glicina y prolina», pero su propia gráfica muestra que esos dos favorecen los giros, no las láminas (la prolina rompe hélices y láminas). Y el cabello y las uñas son de α-queratina; la β-queratina está en plumas, escamas y garras de aves y reptiles.',
          },
        ],
      },
      {
        id: 'btc-3',
        number: 3,
        title: 'Estructura terciaria y dominios',
        keyTerms: ['estructura terciaria', 'puente disulfuro', 'interacciones hidrofóbicas', 'dominio'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La estructura terciaria es el plegamiento tridimensional completo de una cadena polipeptídica. La deciden las interacciones entre grupos R, aunque estén lejos en la secuencia, y es la que determina la función.',
          },
          {
            type: 'table',
            title: 'Enlaces que la estabilizan ★',
            data: {
              headers: ['Tipo', 'Enlace', 'Entre'],
              rows: [
                ['Covalente', 'Puente disulfuro (–S–S–)', 'Dos cisteínas'],
                ['Covalente', 'Enlace amida (isopeptídico)', 'Cadena lateral de lisina y la de glutamina o aspartato'],
                ['No covalente', 'Electrostático (puente salino)', 'Cadenas ionizadas de carga opuesta (Asp⁻/Glu⁻ con Lys⁺/Arg⁺)'],
                ['No covalente', 'Puente de hidrógeno', 'Aminoácidos polares'],
                ['No covalente', 'Interacción hidrofóbica', 'Cadenas apolares, que se esconden del agua'],
                ['No covalente', 'Van der Waals / dipolo-dipolo', 'Átomos muy cercanos'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Dominios',
            items: [
              'Regiones diferenciadas dentro de la estructura terciaria: un nivel intermedio entre la secundaria y la terciaria.',
              'Se pliegan por separado mientras se sintetiza la cadena.',
              'Funcionan como unidades autónomas de plegamiento y de desnaturalización.',
              'Cada uno puede tener una función: unión a ADN, sitio catalítico, unión a ligandos, regulación.',
              'Ejemplo: la albúmina sérica humana tiene 3 dominios (I, II y III) con 7 sitios de unión a ácidos grasos.',
            ],
          },
          {
            type: 'note',
            title: 'Enlaces débiles = reciclaje',
            content: 'Como la mayoría de las interacciones son débiles, las proteínas se pueden desplegar y degradar con facilidad, y sus aminoácidos se reutilizan para fabricar proteínas nuevas.',
          },
        ],
      },
      {
        id: 'btc-4',
        number: 4,
        title: 'Estructura cuaternaria',
        keyTerms: ['cuaternaria', 'subunidades', 'tubulina', 'aspartato transcarbamilasa'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Cuando dos o más cadenas polipeptídicas ya plegadas (con su terciaria) se asocian, forman una estructura cuaternaria. Las unen los mismos enlaces: puentes disulfuro, atracción electrostática, puentes de hidrógeno e interacciones hidrofóbicas. Permite que la proteína interactúe con otras y cumpla funciones nuevas.',
          },
          {
            type: 'table',
            title: 'Cómo pueden ser las subunidades (presentación)',
            data: {
              headers: ['Subunidades', 'Ejemplo'],
              rows: [
                ['Iguales', 'Fosfoglucoisomerasa'],
                ['Parecidas', 'Lactato deshidrogenasa'],
                ['Distintas pero con la misma función', 'Hemoglobina (α y β transportan O₂)'],
                ['Distintas en estructura y función, juntas forman una unidad', 'Aspartato transcarbamilasa (subunidades catalíticas y reguladoras)'],
                ['Proteína + proteína para formar dímeros', 'Tubulina α y β (microtúbulos)'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Proteínas fibrosas con varias hebras',
            items: [
              'Miosina y tropomiosina: dos α-hélices enrolladas entre sí (superhélice levógira).',
              'α-queratina (cabello) y fibrinógeno: hélices α enrolladas en una fibra.',
              'Colágeno: tres hebras helicoidales levógiras que forman una superhélice dextrógira.',
              'Fibroína de la seda: varias hebras en lámina β antiparalela.',
            ],
          },
        ],
      },
      {
        id: 'btc-5',
        number: 5,
        title: 'Desnaturalización y predicción de estructuras',
        keyTerms: ['desnaturalización', 'urea', 'renaturalización', 'AlphaFold', 'CASP'],
        blocks: [
          {
            type: 'list',
            title: 'Factores que desnaturalizan (presentación)',
            items: [
              'Temperatura y pH.',
              'Disolventes orgánicos: alcohol, cetonas, cloroformo.',
              'Detergentes.',
              'Sales en alta concentración.',
              'Compuestos polares: urea y guanidina.',
            ],
          },
          {
            type: 'paragraph',
            content:
              'En el experimento clásico con la ribonucleasa, la urea y un agente reductor despliegan la proteína y rompen sus puentes disulfuro: queda inactiva. Al retirarlos, la proteína vuelve a plegarse sola, se reforman los disulfuros correctos y recupera su actividad. La secuencia contiene la información del plegamiento.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Productos de limpieza',
            content: 'Mezclar productos de limpieza (por ejemplo, cloro con amoniaco o con ácidos) libera gases tóxicos, y muchos de estos productos desnaturalizan las proteínas de la piel: causan dermatitis por contacto e irritación de vías respiratorias.',
          },
          {
            type: 'note',
            title: 'Predecir la forma desde la secuencia',
            content: 'CASP es la competencia internacional que evalúa métodos para predecir la estructura de las proteínas. AlphaFold 2 (DeepMind, Google) logró predicciones casi tan exactas como la cristalografía y aceleró el estudio de secuencias, dominios y posibles funciones. Una predicción orienta, pero se confirma de forma experimental.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Por qué importa el plegamiento',
            content: 'Conocerlo permite entender la función de cada proteína y estudiar enfermedades genéticas: una secuencia anormal se pliega mal y pierde sus propiedades biológicas.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-proteinas-clasificacion-funcion',
    title: 'Proteínas fibrosas y globulares, colágeno, clasificación y funciones',
    subtitle: 'Fibrosas vs globulares, colágeno y sus patologías, anemia falciforme, holoproteínas y heteroproteínas, funciones y albúmina',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🦴',
    keyPoints: [
      'FIBROSAS = estructurales, insolubles, un tipo de estructura secundaria repetida (colágeno, elastina, α-queratina) · GLOBULARES = solubles, varias estructuras secundarias, enzimas y reguladoras.',
      'COLÁGENO = tres cadenas levógiras que forman una superhélice dextrógira (tropocolágeno); repetición Gly-X-Y, rico en glicina, prolina/hidroxiprolina y alanina.',
      'Colágeno I: tendón, hueso y piel · II: cartílago · III: vasos, piel del recién nacido y pared intestinal.',
      'Patologías: escorbuto (falta vitamina C) · osteogénesis imperfecta (mutación de glicina en colágeno I) · Ehlers-Danlos (piel hiperextensible, articulaciones laxas) · latirismo (inhibición de la lisil oxidasa) · anemia falciforme (Glu6Val).',
      'HOLOPROTEÍNAS (simples) = solo aminoácidos · HETEROPROTEÍNAS (conjugadas) = proteína + grupo prostético: glucoproteínas, lipoproteínas, nucleoproteínas, cromoproteínas.',
      'Funciones: estructura, catálisis, transporte, almacenamiento, defensa, regulación, movimiento.',
      'ALBÚMINA: ~60 % de las proteínas del plasma, principal responsable de la presión oncótica y transportadora. Al 25 % = 25 g/100 mL → un frasco de 50 mL tiene 12.5 g.',
    ],
    sections: [
      {
        id: 'bpc-1',
        number: 1,
        title: 'Fibrosas vs globulares',
        keyTerms: ['proteínas fibrosas', 'proteínas globulares', 'solubilidad'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos formas de proteína',
            left: { title: 'Fibrosas', items: ['Un tipo de estructura secundaria que se repite', 'Función estructural', 'Insolubles en agua', 'Colágeno, elastina, α-queratinas, fibroína'] },
            right: { title: 'Globulares', items: ['Varias estructuras secundarias plegadas en una esfera', 'Enzimas y proteínas reguladoras o transportadoras', 'Solubles en agua', 'Hemoglobina, mioglobina, albúmina, anticuerpos'] },
          },
        ],
      },
      {
        id: 'bpc-2',
        number: 2,
        title: 'Colágeno',
        keyTerms: ['colágeno', 'tropocolágeno', 'triple hélice', 'glicina', 'hidroxiprolina'],
        blocks: [
          {
            type: 'list',
            title: 'Estructura (presentación)',
            items: [
              'Está en el tejido conjuntivo: tendones, cartílago, matriz orgánica del hueso, córnea.',
              'Cada cadena es una hélice levógira, más extendida que la α-hélice (~3.3 residuos por vuelta).',
              'Tres cadenas se enrollan en una superhélice dextrógira: el tropocolágeno.',
              'Secuencia repetida Gly-X-Y (X suele ser prolina e Y hidroxiprolina): la glicina, cada tercer residuo, es el único aminoácido lo bastante pequeño para caber en el centro de la triple hélice.',
              'Según la tabla de la presentación: ~33 % glicina, ~22 % prolina e hidroxiprolina, ~12 % alanina.',
              'Las moléculas se alinean escalonadas y forman fibras con estrías cada 64 nm.',
            ],
          },
          {
            type: 'table',
            title: 'Tipos principales',
            data: {
              headers: ['Tipo', 'Cadenas', 'Dónde'],
              rows: [
                ['I', '[α1(I)]₂ α2(I)', 'Tendones, hueso y piel'],
                ['II', '[α1(II)]₃', 'Cartílago'],
                ['III', '[α1(III)]₃', 'Vasos, piel del recién nacido y pared intestinal'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Precisión',
            content: 'La presentación describe la hélice del colágeno como «más compacta» que la α-hélice: en realidad es más extendida (cada residuo avanza ~0.29 nm, contra 0.15 nm en la α-hélice). La resistencia viene de enrollar tres cadenas juntas.',
          },
        ],
      },
      {
        id: 'bpc-3',
        number: 3,
        title: 'Patologías por estructura o plegamiento anormal',
        keyTerms: ['escorbuto', 'osteogénesis imperfecta', 'Ehlers-Danlos', 'latirismo', 'HbS'],
        blocks: [
          {
            type: 'table',
            title: 'Proteína alterada = función perdida ★',
            data: {
              headers: ['Patología', 'Qué falla', 'Manifestaciones (presentación)'],
              rows: [
                ['Escorbuto', 'Falta de vitamina C, cofactor de la prolil y lisil hidroxilasa: colágeno poco estable', 'Fragilidad capilar, encías sangrantes, mala cicatrización'],
                ['Osteogénesis imperfecta', 'Mutación que sustituye glicina (por ejemplo por cisteína) en el colágeno tipo I', 'Huesos frágiles, deformación del esqueleto'],
                ['Síndrome de Ehlers-Danlos', 'Defectos de la síntesis o el procesamiento del colágeno (según el tipo)', 'Piel hiperextensible, articulaciones hipermóviles, rotura de arterias y vejiga'],
                ['Latirismo', 'Inhibición de la lisil oxidasa: faltan los enlaces cruzados del colágeno y la elastina', 'Deformación de la columna, luxaciones, desmineralización ósea, hemorragias'],
                ['Anemia falciforme', 'Glutamato → valina en la posición 6 de la cadena β (HbS)', 'Eritrocitos en hoz, hemólisis, crisis vasooclusivas'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Electroforesis de hemoglobina',
            content: 'Al cambiar glutamato (carga −) por valina (sin carga), la HbS tiene menos carga negativa y en la electroforesis migra más lento hacia el polo positivo que la HbA. Así se distingue: sano (solo A), rasgo falciforme (S y A) y anemia falciforme (solo S). La HbS desoxigenada polimeriza en fibras que deforman al eritrocito.',
          },
        ],
      },
      {
        id: 'bpc-4',
        number: 4,
        title: 'Clasificación de las proteínas',
        keyTerms: ['holoproteínas', 'heteroproteínas', 'grupo prostético', 'lipoproteínas'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Las proteínas se clasifican por su composición química, su estructura, su solubilidad y su sensibilidad. La división principal es por composición: simples u holoproteínas (solo aminoácidos) y conjugadas o heteroproteínas (proteína + grupo prostético no proteico).',
          },
          {
            type: 'table',
            title: 'Holoproteínas (simples)',
            data: {
              headers: ['Tipo', 'Ejemplos (presentación)'],
              rows: [
                ['Globulares', 'Prolaminas (maíz, trigo, cebada), gluteninas (trigo, arroz), albúminas (lactoalbúmina, ovoalbúmina), hormonas (insulina, prolactina, tirotropina), enzimas (hidrolasas, ligasas, liasas)'],
                ['Fibrosas', 'Colágenos, queratinas (pelo, uña, pluma), elastinas (tendones, vasos), fibroínas (seda, araña, insectos)'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Heteroproteínas (conjugadas)',
            data: {
              headers: ['Tipo', 'Grupo prostético', 'Ejemplos'],
              rows: [
                ['Glucoproteínas', 'Glúcidos', 'Ribonucleasas, mucoproteínas, anticuerpos, hormona luteinizante'],
                ['Lipoproteínas', 'Lípidos', 'LDL, HDL, VLDL'],
                ['Nucleoproteínas', 'Ácidos nucleicos', 'Histonas, protamina, telomerasa'],
                ['Cromoproteínas', 'Grupo con color (hemo)', 'Hemoglobina, citocromos'],
              ],
            },
          },
        ],
      },
      {
        id: 'bpc-5',
        number: 5,
        title: 'Funciones de las proteínas y albúmina',
        keyTerms: ['enzimas', 'transporte', 'anticuerpos', 'albúmina', 'presión oncótica'],
        blocks: [
          {
            type: 'table',
            title: 'Funciones (presentación)',
            data: {
              headers: ['Función', 'Ejemplos'],
              rows: [
                ['Estructura y soporte; forma celular', 'Colágeno, queratina; citoesqueleto'],
                ['Catálisis (enzimas)', 'Amilasa, tripsina, lactasa'],
                ['Transporte', 'Hemoglobina, GLUT-4, albúmina, bomba sodio-potasio'],
                ['Almacenamiento de nutrientes', 'Caseína, ovoalbúmina, ferritina'],
                ['Defensa inmunológica', 'Anticuerpos, citocinas'],
                ['Regulación de procesos biológicos', 'Hormonas, proteínas que regulan ADN, ARN y metabolismo'],
                ['Contracción y masa muscular', 'Actina, miosina'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Albúmina',
            items: [
              'La proteína más abundante del plasma: ~60 % de las proteínas plasmáticas.',
              'Principal responsable de la presión oncótica (ver «Presión osmótica, oncótica…»): de los ~25 mmHg de presión oncótica del plasma, la mayor parte se debe a ella.',
              'Transportadora: ácidos grasos, bilirrubina, hormonas, calcio y fármacos (por ejemplo, fenitoína).',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cuánta albúmina tiene un frasco',
            content: 'Una solución al 25 % (p/v) contiene 25 g por cada 100 mL. Un frasco de 50 mL tiene 25 × 50/100 = 12.5 g de albúmina. Existen presentaciones al 5 % (iso-oncótica) y al 20–25 % (hiperoncótica); antes de indicarla se verifica qué hay disponible en el hospital.',
          },
          {
            type: 'note',
            title: '«60 % del volumen plasmático»',
            content: 'La diapositiva dice que la albúmina es el «60 % del volumen plasmático». Lo correcto es el 60 % de las PROTEÍNAS del plasma; el plasma es ~92 % agua.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-enzimas-estructura',
    title: 'Enzimas: apoenzima, sitio activo y coenzimas',
    subtitle: 'Apoenzima, cofactor y holoenzima; aminoácidos estructurales, de fijación y catalíticos; sitio activo, especificidad, patologías y vitaminas como coenzimas',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '✂️',
    keyPoints: [
      'ENZIMAS = catalizadores biológicos; casi todas son proteínas globulares (unas pocas son ARN: ribozimas). Aceleran la reacción y salen intactas: se reutilizan.',
      'APOENZIMA (parte proteica, inactiva sola) + COFACTOR (parte no proteica) = HOLOENZIMA (activa). Pregunta de examen.',
      'Tres tipos de aminoácidos en la enzima: ESTRUCTURALES (dan forma) · de FIJACIÓN (sujetan al sustrato con enlaces débiles) · CATALÍTICOS (rompen o forman enlaces del sustrato).',
      'SITIO ACTIVO = hendidura donde el sustrato se fija y reacciona; lo forman aminoácidos que pueden estar lejos en la secuencia. Ejemplo: tríada catalítica de la quimotripsina (Asp102, His57, Ser195).',
      'Un aminoácido cambiado = enzima ausente o no funcional: fenilcetonuria, jarabe de arce, alcaptonuria, deficiencia de OTC.',
      'Cofactores INORGÁNICOS (Mg²⁺, Zn²⁺, Cu, Fe, Mn) u ORGÁNICOS: grupo prostético (unido fuerte, como el hemo) o coenzima (unida de forma transitoria, como NAD).',
      'Coenzimas de vitaminas B: B1 → TPP · B2 → FAD/FMN · B3 → NAD/NADP · B5 → CoA · B6 → PLP (transaminasas) · biotina → carboxilasas · B9 → THF · B12 → cobalamina.',
    ],
    sections: [
      {
        id: 'bez-1',
        number: 1,
        title: 'Qué es una enzima',
        keyTerms: ['enzima', 'catalizador', 'ribozima', 'complejo enzima-sustrato'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Las enzimas son catalizadores biológicos: aceleran reacciones químicas sin consumirse. Son proteínas (la mayoría globulares), es decir, polímeros de aminoácidos unidos por enlaces covalentes con una estructura tridimensional precisa. Existen también algunas enzimas de ARN, las ribozimas (por ejemplo, el ribosoma).',
          },
          {
            type: 'steps',
            title: 'Cómo actúa (ejemplo: lactasa)',
            steps: [
              'El sustrato (lactosa) entra al sitio activo de la enzima.',
              'Se forma el complejo enzima–sustrato.',
              'La enzima hidroliza el enlace: complejo enzima–productos.',
              'Salen los productos (glucosa + galactosa) y la enzima queda libre para otra molécula.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Deficiencia enzimática',
            content: 'Un déficit puede deberse a que la enzima falte, a que haya poca o a que exista pero no funcione. En la intolerancia a la lactosa hay poca lactasa: la lactosa no se digiere, llega al colon y las bacterias la fermentan (gases, distensión, diarrea).',
          },
        ],
      },
      {
        id: 'bez-2',
        number: 2,
        title: 'Apoenzima, cofactor y holoenzima',
        keyTerms: ['apoenzima', 'cofactor', 'holoenzima'],
        blocks: [
          {
            type: 'definition',
            title: 'Holoenzima',
            content: 'Enzima completa y activa: la parte proteica (apoenzima, inactiva por sí sola) unida a su parte no proteica (cofactor o coenzima). — Holoenzima.',
          },
          {
            type: 'comparison',
            title: 'Las dos partes',
            left: { title: 'Apoenzima (parte proteica)', items: ['Da la estructura espacial específica para unir al sustrato', 'Contiene los aminoácidos estructurales, de fijación y catalíticos', 'Sola es inactiva si necesita cofactor'] },
            right: { title: 'Cofactor (parte no proteica)', items: ['Molécula químicamente distinta a la enzima', 'Necesaria para que tenga actividad', 'Inorgánico (iones metálicos) u orgánico (grupo prostético o coenzima)'] },
          },
        ],
      },
      {
        id: 'bez-3',
        number: 3,
        title: 'Tres tipos de aminoácidos y el sitio activo',
        keyTerms: ['aminoácidos estructurales', 'de fijación', 'catalíticos', 'sitio activo', 'tríada catalítica'],
        blocks: [
          {
            type: 'table',
            title: 'Aminoácidos de la enzima según su función ★',
            data: {
              headers: ['Tipo', 'Qué hace', 'Interacciones', 'Ejemplos'],
              rows: [
                ['Estructurales', 'Dan forma a la proteína y sostienen el sitio activo; casi siempre en el núcleo hidrofóbico', 'Hidrofóbicas, Van der Waals, puentes disulfuro', 'Leucina, isoleucina, valina, fenilalanina; glicina, prolina, cisteína, alanina'],
                ['De fijación', 'Reconocen, orientan y sujetan al sustrato', 'Enlaces débiles: iónicos, puentes de hidrógeno, Van der Waals', 'Lisina, arginina, aspartato, glutamato, serina, tirosina'],
                ['Catalíticos', 'Debilitan y rompen (o forman) los enlaces del sustrato; pueden formar enlaces covalentes transitorios', 'Catálisis ácido–base, catálisis covalente', 'Histidina, serina, cisteína, aspartato, glutamato, lisina'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Aminoácidos estructurales destacados (presentación)',
            data: {
              headers: ['Aminoácido', 'Rasgo', 'Papel'],
              rows: [
                ['Glicina', 'H como cadena lateral (el más pequeño)', 'Permite compactación extrema (triple hélice del colágeno)'],
                ['Prolina', 'Anillo rígido', 'Rigidez y giros'],
                ['Cisteína', 'Tiol (–SH)', 'Puentes disulfuro'],
                ['Alanina', 'Metilo corto', 'Empaquetamiento hidrofóbico denso'],
              ],
            },
          },
          {
            type: 'paragraph',
            content:
              'El sitio activo es una hendidura o bolsa en la superficie de la enzima donde el sustrato se fija (por reconocimiento complementario y de forma reversible) y donde ocurre la reacción. Solo unos pocos aminoácidos lo forman, y no necesitan estar juntos en la estructura primaria: el plegamiento los acerca. En la quimotripsina, aspartato 102, histidina 57 y serina 195 forman la tríada catalítica (un ácido, una base y un nucleófilo).',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Especificidad y biomarcadores',
            content: 'Cada enzima reconoce un sustrato y abunda en ciertos tejidos. Por eso se usan como marcadores: las transaminasas (ALT/TGP, AST/TGO) para lesión hepática, la CK y la troponina para lesión muscular o cardiaca. Se interpretan siempre junto con la clínica (se profundiza en Bioquímica II).',
          },
        ],
      },
      {
        id: 'bez-4',
        number: 4,
        title: 'Cuando cambia un aminoácido',
        keyTerms: ['fenilcetonuria', 'jarabe de arce', 'alcaptonuria', 'cistinuria'],
        blocks: [
          {
            type: 'table',
            title: 'Aminoácido, enzima y enfermedad (presentación) ★',
            data: {
              headers: ['Aminoácido / ruta', 'Enfermedad', 'Qué falla'],
              rows: [
                ['Cisteína', 'Cistinuria', 'Transporte renal de cistina (y aminoácidos dibásicos): la cistina, poco soluble, forma cálculos'],
                ['Leucina, isoleucina, valina', 'Enfermedad de la orina con olor a jarabe de arce (MSUD)', 'Complejo deshidrogenasa de α-cetoácidos de cadena ramificada: neurotoxicidad y edema cerebral'],
                ['Fenilalanina', 'Fenilcetonuria (PKU)', 'Fenilalanina hidroxilasa: la fenilalanina se acumula y causa daño neurológico (tamiz neonatal)'],
                ['Tirosina', 'Alcaptonuria · tirosinemia tipo I', 'Alcaptonuria: homogentisato oxidasa → ácido homogentísico, ocronosis (pigmento oscuro en cartílagos), artritis, orina que oscurece. Tirosinemia I: fumarilacetoacetato hidrolasa (daño hepático y renal)'],
                ['Lisina / arginina (fijación)', 'Hiperamonemia por deficiencia de OTC', 'Sin esos residuos, la ornitina transcarbamilasa no fija su sustrato y el ciclo de la urea se detiene'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Cistinuria no es cistinosis',
            content: 'En clase se usaron ambos nombres. La cistinuria es un defecto del transporte de cistina en riñón e intestino (cálculos). La cistinosis es una enfermedad de depósito lisosomal (cristales de cistina en riñón, córnea y otros órganos).',
          },
        ],
      },
      {
        id: 'bez-5',
        number: 5,
        title: 'Cofactores y coenzimas',
        keyTerms: ['cofactor', 'grupo prostético', 'coenzima', 'iones metálicos'],
        blocks: [
          {
            type: 'table',
            title: 'Clasificación de la parte no proteica',
            data: {
              headers: ['Tipo', 'Unión a la apoenzima', 'Ejemplos'],
              rows: [
                ['Inorgánico: ion metálico', 'Variable', 'Mg²⁺, Zn²⁺, Cu²⁺, Fe²⁺, Mn²⁺'],
                ['Orgánico: grupo prostético', 'Fuerte y permanente (a veces covalente)', 'Grupo hemo'],
                ['Orgánico: coenzima', 'Transitoria, por enlaces débiles; cambia durante la reacción y se regenera', 'NAD⁺, NADP⁺, FAD, CoA'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Vitaminas B → coenzimas (presentación) ★',
            data: {
              headers: ['Vitamina', 'Coenzima', 'Enzimas', 'Grupo que transporta'],
              rows: [
                ['B1 tiamina', 'TPP (pirofosfato de tiamina)', 'Piruvato deshidrogenasa, α-cetoglutarato deshidrogenasa', 'Aldehídos'],
                ['B2 riboflavina', 'FAD, FMN', 'Deshidrogenasas (flavoproteínas)', 'Electrones (hidrógenos)'],
                ['B3 niacina', 'NAD⁺, NADP⁺', 'Deshidrogenasas', 'Electrones (hidrógenos)'],
                ['B5 ácido pantoténico', 'Coenzima A (CoA)', 'Piruvato DH, acil-CoA sintetasa', 'Grupos acilo'],
                ['B6 piridoxina', 'Piridoxal fosfato (PLP)', 'Aminotransferasas', 'Grupos amino'],
                ['B7 biotina', 'Biotina', 'Carboxilasas', 'CO₂'],
                ['B9 folato', 'Tetrahidrofolato (THF)', 'Metabolismo de aminoácidos y nucleótidos', 'Unidades de un carbono'],
                ['B12 cobalamina', 'Coenzimas B12', 'Metilmalonil-CoA mutasa (propionato), metionina sintasa', 'Reordenamientos y grupos metilo'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Nomenclatura',
            content: 'En clase la biotina se llamó B8 (así se nombra en algunos países) y una fila de la diapositiva la pone junto a B6; en la nomenclatura más usada es la vitamina B7. La tabla de la presentación indica que B12 transporta «hidrógenos»: sus reacciones son de reordenamiento (metilmalonil-CoA → succinil-CoA) y de transferencia de metilos.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Alcoholismo y vitamina B6',
            content: 'En el consumo crónico de alcohol baja el PLP (B6). Sin PLP las aminotransferasas trabajan mal, y también se afectan otras reacciones del metabolismo de aminoácidos.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-nitrogeno-ciclo-urea',
    title: 'Eliminación del nitrógeno: transaminación, desaminación y ciclo de la urea',
    subtitle: 'Aminotransferasas y PLP, ciclo alanina-glucosa, glutamato deshidrogenasa, las 5 enzimas del ciclo de la urea, hiperamonemia y β-oxidación',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🚽',
    keyPoints: [
      'Flujo del nitrógeno: aminoácido → TRANSAMINACIÓN (el amino pasa al α-cetoglutarato → glutamato) → DESAMINACIÓN OXIDATIVA del glutamato (→ NH₃) → CICLO DE LA UREA → urea.',
      'Aminotransferasas usan PLP (B6). Todos los aminoácidos se transaminan excepto lisina, treonina, prolina e hidroxiprolina.',
      'ALT: alanina ⇌ piruvato · AST: aspartato ⇌ oxalacetato (ambas con α-cetoglutarato/glutamato).',
      'Ciclo alanina–glucosa: el músculo envía su nitrógeno al hígado como alanina; el hígado la transamina a piruvato (→ glucosa) y el amino va a urea. Pregunta de examen.',
      'Glutamato deshidrogenasa (con NAD⁺ o NADP⁺): glutamato → α-cetoglutarato + NH₃. Produce la mayor parte del amoniaco.',
      'CICLO DE LA UREA (hígado, mitocondria + citosol, 5 enzimas, 4 enlaces de alta energía por urea): CPS-I → OTC → argininosuccinato sintetasa → argininosuccinato liasa → arginasa. El aspartato aporta el segundo N.',
      'Deficiencia de CPS-I u OTC (pasos 1 y 2) = hiperamonemia más grave. El amoniaco es neurotóxico.',
    ],
    sections: [
      {
        id: 'bnu-1',
        number: 1,
        title: 'Transaminación',
        keyTerms: ['transaminación', 'aminotransferasa', 'PLP', 'ALT', 'AST'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Antes de oxidar el esqueleto de un aminoácido hay que quitarle el grupo amino. En la transaminación, una aminotransferasa pasa el grupo amino de un α-aminoácido a un α-cetoácido (casi siempre el α-cetoglutarato, que se convierte en glutamato). Todas usan piridoxal fosfato (PLP, de la vitamina B6). Se transaminan todos los aminoácidos excepto lisina, treonina, prolina e hidroxiprolina.',
          },
          {
            type: 'table',
            title: 'Las dos transaminasas de la clínica',
            data: {
              headers: ['Enzima', 'Reacción'],
              rows: [
                ['ALT (TGP)', 'Alanina + α-cetoglutarato ⇌ piruvato + glutamato'],
                ['AST (TGO)', 'Aspartato + α-cetoglutarato ⇌ oxalacetato + glutamato'],
              ],
            },
          },
          {
            type: 'steps',
            title: 'Ciclo alanina–glucosa ★',
            steps: [
              'En el músculo, el amoniaco de la degradación de aminoácidos se transamina hasta glutamato.',
              'La ALT pasa ese amino al piruvato: se forma alanina.',
              'La alanina viaja por la sangre al hígado.',
              'En el hígado se transamina de nuevo a piruvato, que hace gluconeogénesis (glucosa de regreso al músculo).',
              'El grupo amino termina en el ciclo de la urea.',
            ],
          },
          {
            type: 'note',
            title: 'Glutamina',
            content: 'Otra forma de transportar nitrógeno es la glutamina. En el hígado la glutaminasa la desamina y el amoniaco libre entra al ciclo de la urea; el glutamato restante se transamina a α-cetoglutarato.',
          },
        ],
      },
      {
        id: 'bnu-2',
        number: 2,
        title: 'Desaminación oxidativa del glutamato',
        keyTerms: ['glutamato deshidrogenasa', 'α-cetoglutarato', 'amoniaco'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La glutamato deshidrogenasa (GDH), que puede usar NAD⁺ o NADP⁺ como coenzima, separa el grupo amino del glutamato: se forma α-cetoglutarato (que vuelve a recibir aminos) y amoniaco (NH₃). La mayor parte del amoniaco del cuerpo sale de esta reacción.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Ayuno',
            content: 'En la inanición aumenta la degradación de proteínas para obtener energía; con ello aumenta la producción de amoniaco y la expresión de todas las enzimas del ciclo de la urea. Los cambios en la dieta pueden subir 10 a 20 veces la cantidad de estas enzimas.',
          },
        ],
      },
      {
        id: 'bnu-3',
        number: 3,
        title: 'Ciclo de la urea',
        keyTerms: ['ciclo de la urea', 'CPS-I', 'OTC', 'arginasa', 'N-acetilglutamato'],
        blocks: [
          {
            type: 'list',
            title: 'Concepto (presentación)',
            items: [
              'El amoniaco se convierte en urea en el hígado; la urea se elimina por el riñón.',
              'Requiere 5 enzimas.',
              'El aspartato cede el segundo grupo amino.',
              'Ocurre entre la mitocondria (pasos 1 y 2) y el citosol (pasos 3 a 5).',
              'Consume 4 enlaces fosfato de alta energía (3 ATP) por cada molécula de urea.',
            ],
          },
          {
            type: 'steps',
            title: 'Las cinco reacciones ★',
            steps: [
              'Mitocondria: NH₃ + CO₂ (HCO₃⁻) + 2 ATP → carbamoil fosfato (carbamoil fosfato sintetasa I, CPS-I).',
              'Mitocondria: carbamoil fosfato + ornitina → citrulina (ornitina transcarbamilasa, OTC).',
              'Citosol: citrulina + aspartato + ATP → argininosuccinato (argininosuccinato sintetasa).',
              'Citosol: argininosuccinato → arginina + fumarato (argininosuccinato liasa).',
              'Citosol: arginina + H₂O → urea + ornitina (arginasa); la ornitina regresa a la mitocondria.',
            ],
          },
          {
            type: 'note',
            title: 'Regulación',
            content: 'La CPS-I solo funciona con su activador, el N-acetilglutamato, que se forma a partir de acetil-CoA y glutamato (N-acetilglutamato sintasa) y se hidroliza a acetato y glutamato (N-acetilglutamato hidrolasa). El fumarato que sale del paso 4 conecta el ciclo de la urea con el ciclo de Krebs.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Hiperamonemia',
            content: 'La deficiencia de las enzimas de los pasos 1 o 2 (CPS-I u OTC) causa la intoxicación por amoniaco más grave. La deficiencia de OTC, ligada al X, es la más frecuente: el recién nacido se ve sano y a los pocos días tiene vómito, letargo, convulsiones y coma por edema cerebral. Pregunta de examen: causa de hiperamonemia = falla de una enzima del ciclo de la urea, sobre todo OTC.',
          },
        ],
      },
      {
        id: 'bnu-4',
        number: 4,
        title: 'Coenzimas en acción: β-oxidación',
        keyTerms: ['β-oxidación', 'acil-CoA', 'FAD', 'NAD⁺'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Antes de oxidarse, el ácido graso se activa con CoA (coenzima de la B5): la acil-CoA sintetasa (tioquinasa) gasta un ATP (→ AMP + PPi) y forma acil-CoA. Después, en la mitocondria, cada vuelta de β-oxidación tiene cuatro pasos y corta dos carbonos:',
          },
          {
            type: 'steps',
            title: 'Una vuelta de β-oxidación',
            steps: [
              'Oxidación por la acil-CoA deshidrogenasa: FAD → FADH₂ (B2).',
              'Hidratación por la enoil-CoA hidratasa.',
              'Oxidación por la 3-hidroxiacil-CoA deshidrogenasa: NAD⁺ → NADH (B3).',
              'Tiólisis por la tiolasa con otra CoA: sale un acetil-CoA y queda un acil-CoA con dos carbonos menos.',
            ],
          },
          {
            type: 'note',
            title: 'Lo que hay que recordar',
            content: 'Cada vuelta produce 1 FADH₂, 1 NADH y 1 acetil-CoA. Sin B2, B3 y B5 la β-oxidación no puede ocurrir: un ejemplo de por qué las coenzimas son indispensables. Se estudia a fondo en Bioquímica II.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-coenzimas-minerales-p450',
    title: 'Coenzimas, minerales y citocromo P450',
    subtitle: 'Holoenzima vs holoproteína, funciones del cofactor, vitaminas y sus deficiencias, minerales como cofactores y metabolismo de fármacos por CYP450',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '💊',
    keyPoints: [
      'HOLOENZIMA = apoenzima + cofactor (enzima activa) · HOLOPROTEÍNA = proteína hecha solo de aminoácidos (colágeno, albúmina). No es lo mismo holoenzima, apoenzima, cofactor, sitio de fijación y sitio activo.',
      'Funciones del cofactor: 1) participar en la catálisis, 2) servir de puente enzima–sustrato, 3) cambiar la conformación de la enzima a su forma activa.',
      'Cada enzima tiene sus sustratos; cada sustrato puede ser transformado por varias enzimas.',
      'Deficiencias: B1 → beriberi, Wernicke-Korsakoff · B2 → ariboflavinosis · B3 → pelagra (dermatitis, diarrea, demencia) · B6 → anemia sideroblástica, neuropatía · B9 → anemia megaloblástica, defectos del tubo neural · B12 → anemia perniciosa, degeneración medular.',
      'Minerales: Zn (anhidrasa carbónica, carboxipeptidasas) · Mg (estabiliza el ATP; cinasas) · Fe (hemo, citocromos) · Cu (citocromo c oxidasa; Menkes/Wilson) · Mn (arginasa, piruvato carboxilasa, SOD mitocondrial) · Se (glutatión peroxidasa; Keshan).',
      'CITOCROMO P450 = principal grupo de enzimas de fase I del metabolismo de fármacos (oxida e hidroxila). CYP3A4 participa en ~50 % de los fármacos.',
      'Inhibidores o inductores del CYP y las variantes genéticas (metabolizadores rápidos o lentos) cambian la concentración de los medicamentos: interacciones en la polifarmacia.',
    ],
    sections: [
      {
        id: 'bcm-1',
        number: 1,
        title: 'Términos que no son lo mismo',
        keyTerms: ['holoenzima', 'apoenzima', 'holoproteína', 'cosustrato'],
        blocks: [
          {
            type: 'table',
            title: 'Definiciones correctas ★',
            data: {
              headers: ['Término', 'Qué es'],
              rows: [
                ['Apoenzima', 'Parte proteica de una enzima que necesita cofactor; sola no es óptimamente activa'],
                ['Cofactor', 'Parte no proteica necesaria para la actividad: un ion metálico o una molécula orgánica'],
                ['Coenzima (cosustrato)', 'Cofactor orgánico, casi siempre derivado de vitaminas, que transporta grupos químicos entre enzimas (CoA, NAD, ácido lipoico)'],
                ['Holoenzima', 'Apoenzima + cofactor: la enzima completa y activa. Una misma enzima puede necesitar dos cofactores distintos'],
                ['Holoproteína', 'Proteína formada solo por aminoácidos, sin grupo prostético (colágeno, miosina, queratina, albúmina, actina, histonas)'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Ojo con la diapositiva 22',
            content: 'La tabla de la diapositiva 22 tiene las definiciones cruzadas (a la holoenzima le pone «parte no proteica… un simple ion» y a la coenzima «complejo de proteína y cofactor»); parece un ejercicio para relacionar columnas. Las definiciones correctas son las de la tabla de arriba. Además, no todas las enzimas necesitan cofactor: muchas actúan solo con sus aminoácidos.',
          },
          {
            type: 'list',
            title: 'Para qué sirve el cofactor (presentación)',
            items: [
              'Llevar a cabo la catálisis.',
              'Funcionar como puente de unión entre la enzima y el sustrato.',
              'Introducir un cambio de conformación que moldea a la enzima en su forma activa.',
            ],
          },
          {
            type: 'note',
            title: 'Ideas de examen',
            content: 'Cada enzima tiene un sustrato (o un grupo pequeño de sustratos) del que es específica, y cada sustrato puede ser transformado por varias enzimas a lo largo de una ruta metabólica. La estructura de las enzimas determina la individualidad de cada especie (la termita tiene una enzima para digerir la celulosa de la madera) y la presencia de enfermedades (galactosemia).',
          },
        ],
      },
      {
        id: 'bcm-2',
        number: 2,
        title: 'Coenzimas de vitaminas y sus deficiencias',
        keyTerms: ['beriberi', 'pelagra', 'ariboflavinosis', 'anemia megaloblástica'],
        blocks: [
          {
            type: 'table',
            title: 'Vitamina → coenzima → enfermedad (presentación) ★',
            data: {
              headers: ['Vitamina', 'Coenzima', 'Función', 'Deficiencia'],
              rows: [
                ['B1 tiamina', 'Pirofosfato de tiamina (TPP)', 'Descarboxilación oxidativa de α-cetoácidos (piruvato DH, α-cetoglutarato DH) y transcetolasa', 'Beriberi (húmedo: insuficiencia cardiaca; seco: neuropatía) y síndrome de Wernicke-Korsakoff'],
                ['B2 riboflavina', 'FAD / FMN', 'Aceptan o donan 2 H⁺ + 2 e⁻ en flavoproteínas (succinato DH, cadena respiratoria)', 'Ariboflavinosis: queilitis angular, estomatitis, glositis, vascularización corneal'],
                ['B3 niacina', 'NAD⁺/NADH', 'Transporta electrones en el catabolismo (glucólisis, Krebs, β-oxidación)', 'Pelagra: dermatitis, diarrea, demencia (las 3 D)'],
                ['B3 niacina', 'NADP⁺/NADPH', 'Reductor en la síntesis de lípidos y colesterol; defensa antioxidante (glutatión)', 'Sensibilidad al estrés oxidativo; hemólisis en la deficiencia de G6PD'],
                ['B5 ácido pantoténico', 'Coenzima A', 'Transfiere grupos acilo (acetil-CoA, succinil-CoA)', 'Rara: síndrome del «pie ardiente», parestesias, astenia'],
                ['B6 piridoxina', 'Piridoxal fosfato (PLP)', 'Transaminación, descarboxilación de aminoácidos, síntesis de neurotransmisores y hemo', 'Anemia sideroblástica, convulsiones (menos GABA), neuropatía periférica'],
                ['B7 biotina', 'Biotina', 'Transfiere grupos carboxilo (piruvato carboxilasa, acetil-CoA carboxilasa)', 'Dermatitis descamativa, alopecia, ataxia, acidosis láctica'],
                ['B9 ácido fólico', 'Tetrahidrofolato (THF)', 'Transfiere unidades de un carbono: purinas, timidina, ADN', 'Anemia megaloblástica; defectos del tubo neural (espina bífida)'],
                ['B12 cobalamina', 'Metilcobalamina / 5′-desoxiadenosilcobalamina', 'Remetila homocisteína a metionina; metilmalonil-CoA → succinil-CoA', 'Anemia perniciosa (megaloblástica) y degeneración combinada subaguda de la médula'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Otras coenzimas',
            content: 'El ácido lipoico participa en la descarboxilación oxidativa del piruvato. La vitamina K es el cofactor de la γ-glutamil carboxilasa que activa los factores de coagulación. En la presentación la biotina aparece como B8; en la nomenclatura más usada es B7.',
          },
        ],
      },
      {
        id: 'bcm-3',
        number: 3,
        title: 'Minerales como cofactores',
        keyTerms: ['zinc', 'magnesio', 'cobre', 'manganeso', 'selenio'],
        blocks: [
          {
            type: 'table',
            title: 'Cofactores inorgánicos (presentación) ★',
            data: {
              headers: ['Mineral', 'Función', 'Alteración'],
              rows: [
                ['Hierro (Fe²⁺/Fe³⁺)', 'Transporte de O₂ (hemoglobina, mioglobina); electrones en citocromos y centros Fe-S', 'Anemia ferropénica (deficiencia); hemocromatosis (sobrecarga)'],
                ['Magnesio (Mg²⁺)', 'Estabiliza el ATP (Mg²⁺-ATP); cofactor de cinasas y polimerasas', 'Hipomagnesemia: tetania, arritmias, debilidad, convulsiones'],
                ['Zinc (Zn²⁺)', 'Dedos de zinc; anhidrasa carbónica, carboxipeptidasas, SOD1; almacenamiento de insulina', 'Acrodermatitis enteropática, retraso del crecimiento, hipogonadismo, mala cicatrización, inmunodeficiencia'],
                ['Cobre (Cu⁺/Cu²⁺)', 'Citocromo c oxidasa, ceruloplasmina, dopamina β-hidroxilasa, SOD', 'Enfermedad de Menkes (no se absorbe); enfermedad de Wilson (se acumula)'],
                ['Manganeso (Mn²⁺)', 'Piruvato carboxilasa, arginasa, SOD mitocondrial (Mn-SOD)', 'Raro: ataxia, alteraciones del metabolismo de glúcidos y lípidos, anomalías esqueléticas'],
                ['Selenio (Se)', 'Selenocisteína de la glutatión peroxidasa y de las yodotironina desyodasas', 'Enfermedad de Keshan (miocardiopatía); enfermedad de Kashin-Beck (osteoartropatía)'],
                ['Potasio (K⁺)', 'Activa la piruvato cinasa', '—'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Quelación con lácteos',
            content: 'El calcio de los lácteos (y el hierro, el magnesio o los antiácidos) se une a las tetraciclinas y a las quinolonas y forma complejos que no se absorben. Por eso estos antibióticos se toman separados de la leche y de los suplementos minerales.',
          },
        ],
      },
      {
        id: 'bcm-4',
        number: 4,
        title: 'Citocromo P450 y metabolismo de fármacos',
        keyTerms: ['citocromo P450', 'CYP3A4', 'CYP2C19', 'inducción', 'inhibición'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El citocromo P450 (CYP) es una familia de hemoproteínas, sobre todo del retículo endoplásmico del hepatocito. Son las principales enzimas de fase I del metabolismo de xenobióticos (frente a reductasas, peroxidasas, hidrolasas y flavín-monooxigenasas). Su ciclo catalítico usa el hierro del hemo, O₂ y electrones para introducir un –OH en el sustrato (monooxigenasa): el producto queda más polar y listo para conjugarse y eliminarse. También sintetizan hormonas esteroideas, ácidos biliares y metabolitos de la vitamina D.',
          },
          {
            type: 'table',
            title: 'Principales P450 del hígado humano (Donato, presentación)',
            data: {
              headers: ['CYP', 'Fármacos que metaboliza (%)', 'Rasgo'],
              rows: [
                ['3A4', '~50 %', 'La más abundante (~30 % del P450 hepático); inducible y polimórfica'],
                ['2D6', '~25 %', 'Muy polimórfica (metabolizadores lentos y ultrarrápidos)'],
                ['2C9', '~11 %', 'Polimórfica (warfarina, AINE)'],
                ['2C19', '~6 %', 'Polimórfica (inhibidores de la bomba de protones, clopidogrel)'],
                ['1A2 · 2E1', '~4 % cada una', 'Inducibles (tabaco; alcohol)'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Polifarmacia e interacciones',
            content: 'Un paciente con claritromicina, amlodipino, un inhibidor de la bomba de protones, una estatina y una benzodiacepina tiene varios fármacos que compiten por el mismo CYP3A4. Un INHIBIDOR (claritromicina, jugo de toronja) sube la concentración de los demás y su toxicidad (miopatía por estatina, sedación); un INDUCTOR (rifampicina, carbamazepina) la baja y falla el tratamiento. La genética también cuenta: según la presentación, ~31 % de una muestra de Tlaxcala son metabolizadores lentos de CYP2C19, contra 6–8 % en Guadalajara y Monterrey.',
          },
          {
            type: 'note',
            title: 'Precisiones',
            content: 'En clase se dijo que CYP3A4 metaboliza el 50 % de «alimentos y medicamentos»; el dato de la tabla es el 50 % de los fármacos. Los «acetiladores rápidos y lentos» son otra enzima (N-acetiltransferasa 2, fase II); lo que muestra la diapositiva es el fenotipo de CYP2C19 (metabolizadores rápidos y lentos).',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-enzimas-mecanismo-clinica',
    title: 'Enzimas: mecanismo, clasificación y uso clínico',
    subtitle: 'Complejo enzima-sustrato, especificidad, llave-cerradura vs ajuste inducido, nomenclatura, las 6 clases, isoenzimas y biomarcadores',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🔬',
    keyPoints: [
      'La actividad catalítica depende de la integridad de la conformación nativa y de la secuencia de aminoácidos. Actúan por los grupos R, por su cofactor o por ambos.',
      'E + S ⇌ [ES] ⇌ E + P. El complejo enzima–sustrato se forma cuando los radicales de fijación coinciden con los del sustrato.',
      'Especificidad: de reacción · de sustrato · absoluta (un solo sustrato) · de grupo (varios sustratos parecidos).',
      'LLAVE-CERRADURA = sitio activo rígido, encaje exacto · AJUSTE INDUCIDO = el sitio activo cambia de forma al unirse el sustrato.',
      'Seis clases: 1 oxidorreductasas · 2 transferasas · 3 hidrolasas · 4 liasas · 5 isomerasas · 6 ligasas.',
      'Isoenzimas de CK: CK-MM (músculo), CK-MB (corazón), CK-BB (cerebro). La troponina es el marcador más específico de lesión miocárdica.',
      'Enzimas: catalizadores eficientes, no se gastan, están reguladas, son muy específicas y ayudan a predecir el pronóstico.',
    ],
    sections: [
      {
        id: 'bmc-1',
        number: 1,
        title: 'Complejo enzima–sustrato y especificidad',
        keyTerms: ['complejo enzima-sustrato', 'especificidad absoluta', 'especificidad de grupo'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La actividad de una enzima depende de que conserve su conformación nativa: si se desnaturaliza (por ejemplo, la fosfofructocinasa desplegada), pierde la forma del sitio activo y deja de catalizar. Según su estructura, unas enzimas actúan por los grupos químicos de sus cadenas R, otras por su cofactor y otras por ambos.',
          },
          {
            type: 'steps',
            title: 'E + S ⇌ [ES] ⇌ E + P',
            steps: [
              'El sustrato se une al sitio activo; los radicales de los aminoácidos de fijación coinciden con los del sustrato.',
              'Se forma el complejo enzima–sustrato [ES], un estado transitorio.',
              'Los aminoácidos catalíticos (o el cofactor) transforman al sustrato.',
              'Se liberan los productos y la enzima queda libre e intacta.',
            ],
          },
          {
            type: 'table',
            title: 'Tipos de especificidad (presentación)',
            data: {
              headers: ['Tipo', 'Significado'],
              rows: [
                ['De reacción', 'Cataliza un solo tipo de reacción (hidrólisis, oxidación, reducción)'],
                ['De sustrato', 'Actúa sobre uno o muy pocos sustratos'],
                ['Absoluta', 'Actúa sobre un único sustrato'],
                ['De grupo', 'Actúa sobre varios sustratos que comparten un grupo químico'],
              ],
            },
          },
        ],
      },
      {
        id: 'bmc-2',
        number: 2,
        title: 'Modelos de unión: llave-cerradura y ajuste inducido',
        keyTerms: ['llave-cerradura', 'ajuste inducido', 'Fischer', 'Koshland'],
        blocks: [
          {
            type: 'table',
            title: 'Comparación (presentación) ★',
            data: {
              headers: ['Característica', 'Llave-cerradura', 'Ajuste inducido'],
              rows: [
                ['Sitio activo', 'Rígido, con forma específica para el sustrato', 'Flexible: se adapta al sustrato al unirse'],
                ['Unión', 'El sustrato encaja exactamente, en un solo paso', 'La unión estabiliza al sustrato y acelera la reacción'],
                ['Cambio conformacional', 'No significativo', 'Sí: la enzima cambia de forma al unirse'],
                ['Especificidad', 'Alta: solo sustratos del tamaño y forma correctos', 'Alta, por ajuste inducido'],
                ['Ejemplo', 'Enzimas con alta especificidad de sustrato', 'Muchas enzimas, incluidas las alostéricas'],
              ],
            },
          },
          {
            type: 'note',
            title: 'El modelo aceptado',
            content: 'El modelo de llave-cerradura (Fischer, 1894) explica la especificidad, pero el de ajuste inducido (Koshland, 1958) describe mejor lo que ocurre: la enzima se moldea alrededor del sustrato y lo lleva al estado de transición.',
          },
        ],
      },
      {
        id: 'bmc-3',
        number: 3,
        title: 'Nomenclatura y las seis clases',
        keyTerms: ['sufijo -asa', 'oxidorreductasas', 'transferasas', 'hidrolasas', 'liasas', 'isomerasas', 'ligasas'],
        blocks: [
          {
            type: 'list',
            title: 'Cómo se nombran (presentación)',
            items: [
              'Sufijo «-asa» sobre la reacción: hidrogenasa, proteasa, isomerasa.',
              'Por el sustrato: xantina oxidasa, alcohol deshidrogenasa.',
              'Por la fuente: ribonucleasa pancreática.',
              'Por su regulación: lipasa sensible a hormonas.',
              'Con letras o números para las formas múltiples: ARN polimerasa III, proteína cinasa Cβ.',
              'Nombres históricos sin «-asa»: tripsina, pepsina.',
            ],
          },
          {
            type: 'table',
            title: 'Clasificación internacional (EC) ★',
            data: {
              headers: ['Clase', 'Reacción', 'Ejemplo'],
              rows: [
                ['1. Oxidorreductasas', 'Oxidación-reducción (transfieren electrones o H; usan NAD, NADP, FAD)', 'Alcohol deshidrogenasa: etanol → acetaldehído'],
                ['2. Transferasas', 'Transfieren un grupo (metilo, amino, fosfato, glucosilo) que no es agua', 'Creatina cinasa: creatina → creatina-fosfato; transaminasas'],
                ['3. Hidrolasas', 'Rompen enlaces añadiendo agua', 'Enzimas digestivas (amilasa, lipasa, proteasas); glucosa-6-fosfatasa'],
                ['4. Liasas', 'Rompen o forman enlaces sin agua ni oxidación; eliminan grupos (H₂O, CO₂, NH₃) formando dobles enlaces, o los añaden', 'Histidina descarboxilasa: histidina → histamina'],
                ['5. Isomerasas', 'Reordenan átomos dentro de la misma molécula', 'Triosafosfato isomerasa; epimerasas y mutasas'],
                ['6. Ligasas', 'Unen dos moléculas usando la energía del ATP (enlaces C–C, C–O, C–N, C–S)', 'Aminoacil-ARNt sintetasas'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Corrección a la tabla de la presentación',
            content: 'La diapositiva pone como ejemplo de isomerasa la «formación de almidón a partir de unidades de glucosa»; eso lo hacen transferasas (glucosiltransferasas). Ejemplos correctos de isomerasa: triosafosfato isomerasa, fosfoglucomutasa.',
          },
        ],
      },
      {
        id: 'bmc-4',
        number: 4,
        title: 'Isoenzimas y biomarcadores',
        keyTerms: ['isoenzimas', 'CK-MB', 'troponina', 'biomarcador'],
        blocks: [
          {
            type: 'table',
            title: 'Formas de una enzima según su origen (presentación)',
            data: {
              headers: ['Tipo', 'Origen', 'Ejemplo'],
              rows: [
                ['Isoenzimas verdaderas', 'Misma función, codificadas por genes distintos; diferente Km', 'LDH, CK (subunidades M y B), fosfatasa alcalina, GGT, amilasa salival vs pancreática'],
                ['Formas múltiples', 'Un solo gen; distintas modificaciones postraduccionales según el tejido', 'Fosfatasa alcalina hepática, ósea, renal, de leucocitos'],
                ['Isoformas', 'Mismo gen; se modifican al llegar al plasma (la carboxipeptidasa quita la lisina C-terminal)', 'CK-MM → MM1, MM2, MM3; CK-MB → MB1, MB2'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Creatina cinasa (CK)',
            data: {
              headers: ['Isoenzima', 'Tejido'],
              rows: [
                ['CK-MM', 'Músculo esquelético (sube también con el ejercicio intenso o una inyección intramuscular)'],
                ['CK-MB', 'Miocardio (no es exclusiva del corazón)'],
                ['CK-BB', 'Cerebro'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Marcadores de infarto',
            content: 'Un buen marcador de infarto es selectivo del corazón, específico y aparece pronto (los que tardan más de 12 h no ayudan al diagnóstico inicial). Las transaminasas no sirven. Según lo visto en clase, la CK-MB aparece a las ~4 h y dura ~72 h; la troponina aparece a las ~2–4 h y dura hasta 7–14 días. La troponina cardiaca (hoy de alta sensibilidad) es el marcador de elección en las guías; la CK-MB queda como apoyo, por ejemplo para detectar un reinfarto.',
          },
          {
            type: 'table',
            title: 'Enzimas séricas en el diagnóstico (Harper, cuadro 7-2)',
            data: {
              headers: ['Enzima', 'Uso que muestra el cuadro'],
              rows: [
                ['ALT (TGP)', 'Hepatitis viral'],
                ['AST (TGO)', 'Infarto de miocardio (uso histórico; hoy se usa sobre todo en enfermedad hepática)'],
                ['Amilasa · lipasa', 'Pancreatitis aguda (la lipasa es más específica)'],
                ['Ceruloplasmina', 'Enfermedad de Wilson'],
                ['CK', 'Trastornos musculares e infarto'],
                ['GGT', 'Enfermedades hepáticas'],
                ['LDH-5', 'Enfermedades hepáticas'],
                ['Fosfatasa ácida', 'Cáncer de próstata metastásico (hoy sustituida por el PSA)'],
                ['Fosfatasa alcalina (isoenzimas)', 'Trastornos óseos y colestasis'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Cómo se miden',
            content: 'Muchas de estas enzimas no son específicas de una sola enfermedad. Se interpretan con la historia clínica y farmacológica, según cuándo suben (etapa temprana o tardía) y qué tan rápido bajan. Su concentración en plasma depende de su resistencia a la proteólisis y de la eliminación renal; se miden en plasma, suero u orina.',
          },
        ],
      },
      {
        id: 'bmc-5',
        number: 5,
        title: 'Enzimas en la medicina y la industria',
        keyTerms: ['PCR', 'glucosa oxidasa', 'tPA', 'terapia de reemplazo enzimático'],
        blocks: [
          {
            type: 'table',
            title: 'Enzimas con impacto (presentación)',
            data: {
              headers: ['Enzima', 'Uso'],
              rows: [
                ['ADN polimerasa termoestable (PCR)', 'Millones de copias de un segmento de ADN a partir de cantidades mínimas: detectar y caracterizar ADN'],
                ['Glucosa oxidasa', 'Medir la glucosa en plasma (tiras reactivas, glucómetros)'],
                ['Activador tisular del plasminógeno (tPA) · estreptocinasa', 'Fibrinólisis en el infarto agudo de miocardio'],
                ['Enzimas pancreáticas (tripsina, lipasa, amilasa)', 'Reemplazo enzimático en la insuficiencia pancreática de la fibrosis quística'],
                ['Glucocerebrosidasa recombinante (IV)', 'Terapia de reemplazo enzimático en la enfermedad de Gaucher'],
                ['Lactasa', 'Producción de leche deslactosada'],
                ['Proteasas y amilasas', 'Detergentes'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Qué cambia la cantidad o la actividad de una enzima',
            items: [
              'Defecto genético → trastornos metabólicos y enfermedades hereditarias.',
              'Déficit nutricional (vitaminas y minerales que actúan como cofactores).',
              'Daño de tejido (la enzima sale a la sangre: base de los biomarcadores).',
              'Toxinas.',
              'Infección por virus o bacterias.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-biomarcadores-enzimaticos',
    title: 'Biomarcadores: infarto, páncreas, hígado y próstata',
    subtitle: 'Cómo elegir un biomarcador, cronología de los marcadores cardiacos, lipasa vs amilasa, ALT/AST, GGT y fosfatasa alcalina, PSA',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🩸',
    keyPoints: [
      'Un biomarcador se elige por su SELECTIVIDAD (de qué tejido viene), su ESPECIFICIDAD (qué enfermedad indica) y su VENTANA (cuándo sube y cuánto dura). Se interpreta con la clínica.',
      'Infarto: MIOGLOBINA aparece primero (1–3 h) pero es inespecífica · TROPONINAS (3–4 h, duran 7–14 días) = estándar de oro · CK-MB (3–6 h, normaliza en 48–72 h) útil para reinfarto.',
      'Pancreatitis aguda: LIPASA = biomarcador de elección (más específica y dura más) · AMILASA sube y baja rápido y también viene de glándulas salivales e intestino.',
      'Hígado: ALT = predominantemente hepática (hepatitis viral, tóxica, isquémica) · AST también en miocardio y músculo; AST/ALT > 2 sugiere hepatitis alcohólica.',
      'Colestasis: fosfatasa alcalina elevada + GGT elevada = origen hepatobiliar (la FA también viene del hueso).',
      'Próstata: PSA total (cáncer, hiperplasia prostática benigna, prostatitis, instrumentación) y cociente PSA libre/total (bajo = más sospecha de cáncer).',
    ],
    sections: [
      {
        id: 'bbm-1',
        number: 1,
        title: 'Cómo se elige un biomarcador',
        keyTerms: ['biomarcador', 'selectividad', 'especificidad', 'ventana diagnóstica'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Cuando un tejido se lesiona, sus enzimas y proteínas salen a la sangre. Su concentración depende de cuánto tejido se dañó, de cuándo se liberan y de cuánto tardan en eliminarse (proteólisis y eliminación renal). Se miden en suero, plasma u orina.',
          },
          {
            type: 'list',
            title: 'Tres preguntas antes de pedirlo',
            items: [
              'Selectividad: ¿de qué tejido u órgano proviene?',
              '¿Qué tan específico es para la enfermedad que se busca?',
              '¿Cuándo empieza a subir, cuándo llega al máximo y cuándo se normaliza?',
            ],
          },
        ],
      },
      {
        id: 'bbm-2',
        number: 2,
        title: 'Marcadores de lesión miocárdica',
        keyTerms: ['troponina', 'mioglobina', 'CK-MB', 'copeptina', 'LDH'],
        blocks: [
          {
            type: 'table',
            title: 'Cronología desde el inicio del dolor (presentación) ★',
            data: {
              headers: ['Marcador', 'Sube', 'Pico', 'Se normaliza', 'Utilidad'],
              rows: [
                ['Mioglobina', '1–3 h', '6–10 h', '~24 h', 'Muy precoz pero poco específica (también músculo esquelético); un valor negativo ayuda a descartar en las primeras horas'],
                ['Troponinas cardiacas (cTnI, cTnT)', '3–4 h', '12–24 h', '7–14 días', 'Estándar de oro: muy específicas y sensibles; detectan necrosis mínima y daño tardío'],
                ['CK total', '4–9 h', '12–30 h', '48–72 h', 'Daño muscular cardiaco o esquelético; requiere fraccionar'],
                ['CK-MB', '3–6 h', '18–24 h', '48–72 h', 'Más específica del miocardio que la CK total; útil para detectar reinfarto por su normalización rápida'],
                ['LDH (LDH-1)', '6–12 h', '24–72 h', '8–14 días', 'Tardía; la inversión LDH-1 > LDH-2 ayudaba en infartos subagudos (uso histórico)'],
                ['Copeptina', '< 1 h', '2–4 h', '24–48 h', 'Se libera con la vasopresina por el estrés agudo; se combina con troponina para descartar rápido'],
                ['PCR ultrasensible', '6–12 h', '48–72 h', '1–2 semanas', 'Marcador inflamatorio de fase aguda (no es enzima)'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'En la práctica',
            content: 'La troponina cardiaca (hoy de alta sensibilidad, con mediciones seriadas) es el marcador de elección para diagnosticar infarto, junto con el cuadro clínico y el electrocardiograma. Un solo valor temprano normal no descarta el infarto. La troponina no es una enzima: es una proteína reguladora de la contracción.',
          },
        ],
      },
      {
        id: 'bbm-3',
        number: 3,
        title: 'Páncreas, hígado y próstata',
        keyTerms: ['lipasa', 'amilasa', 'ALT', 'AST', 'GGT', 'fosfatasa alcalina', 'PSA'],
        blocks: [
          {
            type: 'table',
            title: 'Biomarcadores por órgano (presentación) ★',
            data: {
              headers: ['Órgano', 'Marcador', 'Sube', 'Se normaliza', 'Utilidad'],
              rows: [
                ['Pancreatitis aguda', 'Lipasa', '4–8 h', '8–14 días', 'Elección: más específica del páncreas que la amilasa y permanece elevada más tiempo'],
                ['Pancreatitis aguda', 'Amilasa', '2–12 h', '3–5 días', 'Sube rápido pero se normaliza pronto aunque siga el cuadro; también de origen salival o intestinal'],
                ['Hígado (agudo)', 'ALT (TGP)', '24–48 h', '2–5 semanas', 'Predominantemente hepática: hepatitis viral, tóxica o isquémica'],
                ['Hígado (crónico)', 'AST (TGO)', '24–48 h', '1–3 semanas', 'Hígado, miocardio y músculo; en la hepatitis alcohólica AST/ALT suele ser > 2'],
                ['Colestasis', 'Fosfatasa alcalina + GGT', '24–48 h', 'Días a semanas', 'La GGT confirma el origen hepatobiliar de una FA alta'],
                ['Próstata', 'PSA total', 'Variable', 'Persiste hasta tratar la causa', 'Cáncer, hiperplasia prostática benigna, prostatitis o tras instrumentación'],
                ['Próstata', 'Cociente PSA libre/total', 'Variable', 'Persistente', 'Un cociente bajo aumenta la sospecha de cáncer cuando el PSA total está ligeramente alto'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Un sustrato, muchas enzimas',
            content: 'Ningún marcador basta por sí solo: varias enfermedades elevan la misma enzima y una enfermedad eleva varias. Por eso se piden en conjunto (perfil hepático, pancreático) y se interpretan con la clínica.',
          },
          {
            type: 'note',
            title: 'Actividades pendientes',
            content: 'Las actividades 5 a 11 (productos enzimáticos hospitalarios, ejemplos por clase, enzimas inflamatorias, marcadores renales, tabla vitamina-coenzima-patología y valores de referencia de CK) son trabajo de la libreta.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-acidos-nucleicos-estructura',
    title: 'Ácidos nucleicos: nucleótidos, bases y enlaces',
    subtitle: 'ADN y ARN, pentosas, purinas y pirimidinas, nucleósido vs nucleótido, enlace N-glucosídico y fosfodiéster, pares de bases y temperatura de fusión',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🧬',
    keyPoints: [
      'ÁCIDOS NUCLEICOS = ADN y ARN: polímeros de nucleótidos, ácidos y con carga negativa a pH fisiológico (por sus fosfatos), solubles en agua.',
      'NUCLEÓTIDO = pentosa + base nitrogenada + fosfato · NUCLEÓSIDO = pentosa + base (sin fosfato) · POLINUCLEÓTIDO = muchos nucleótidos.',
      'PENTOSAS: ribosa (ARN, con –OH en el C2′) · 2-desoxirribosa (ADN, H en el C2′).',
      'PURINAS (2 anillos): adenina y guanina · PIRIMIDINAS (1 anillo): citosina, timina (solo ADN) y uracilo (solo ARN).',
      'ENLACE N-GLUCOSÍDICO: base + C1′ de la pentosa · ENLACE FOSFODIÉSTER 3′→5′: el fosfato une el C3′ de un nucleótido con el C5′ del siguiente (columna vertebral azúcar-fosfato).',
      'Pares: A=T (2 puentes de H) · G≡C (3 puentes de H). Más G-C = mayor temperatura de fusión (Tm).',
      'Nomenclatura: adenina → adenosina (nucleósido) → ácido adenílico/AMP (nucleótido).',
    ],
    sections: [
      {
        id: 'ban-1',
        number: 1,
        title: 'Qué son los ácidos nucleicos',
        keyTerms: ['ADN', 'ARN', 'polinucleótido', 'carga negativa'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los ácidos nucleicos son polímeros grandes formados por nucleótidos. Hay dos: el ácido desoxirribonucleico (ADN), que guarda y transmite la información genética, y el ácido ribonucleico (ARN), que la expresa (por ejemplo, en la síntesis de proteínas). Son ácidos por sus grupos fosfato, que a pH fisiológico tienen carga negativa; esa carga y sus grupos polares los hacen solubles en agua.',
          },
          {
            type: 'note',
            title: 'Bases, no aminoácidos',
            content: 'La presentación pregunta por los «aminoácidos» de los ácidos nucleicos y pone «base nitrogenada (forman los aminoácidos)». Los ácidos nucleicos no tienen aminoácidos ni componentes proteicos: sus unidades son nucleótidos y sus «letras» son las bases nitrogenadas A, G, C, T y U. Las proteínas se forman a partir de la información que llevan.',
          },
        ],
      },
      {
        id: 'ban-2',
        number: 2,
        title: 'Componentes del nucleótido',
        keyTerms: ['pentosa', 'purinas', 'pirimidinas', 'nucleósido', 'nucleótido'],
        blocks: [
          {
            type: 'steps',
            title: 'Cómo se arma',
            steps: [
              'Pentosa + base nitrogenada = nucleósido (enlace N-glucosídico en el C1′).',
              'Nucleósido + ácido fosfórico (en el C5′) = nucleótido.',
              'Nucleótido + nucleótido + … (n) = polinucleótido.',
            ],
          },
          {
            type: 'comparison',
            title: 'Las dos pentosas',
            left: { title: 'Ribosa (ARN)', items: ['Grupo –OH en el carbono 2′', 'Más reactiva: el ARN se hidroliza con más facilidad', 'La degradan las ribonucleasas'] },
            right: { title: '2-desoxirribosa (ADN)', items: ['Un H en el carbono 2′ (le falta un oxígeno)', 'Más estable', 'La degradan las desoxirribonucleasas'] },
          },
          {
            type: 'table',
            title: 'Bases, nucleósidos y nucleótidos (presentación) ★',
            data: {
              headers: ['Base', 'Tipo', 'Está en', 'Nucleósido', 'Nucleótido'],
              rows: [
                ['Adenina (A)', 'Purina', 'ADN y ARN', 'Adenosina', 'Ácido adenílico (AMP)'],
                ['Guanina (G)', 'Purina', 'ADN y ARN', 'Guanosina', 'Ácido guanílico (GMP)'],
                ['Citosina (C)', 'Pirimidina', 'ADN y ARN', 'Citidina', 'Ácido citidílico (CMP)'],
                ['Timina (T)', 'Pirimidina (5-metiluracilo)', 'Solo ADN', 'Timidina', 'Ácido timidílico (TMP)'],
                ['Uracilo (U)', 'Pirimidina', 'Solo ARN', 'Uridina', 'Ácido uridílico (UMP)'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Para no confundir',
            content: 'Purinas = 2 anillos = Adenina y Guanina («PURo AGua»). Pirimidinas = 1 anillo = C, T, U (las que tienen «y» en inglés: cytosine, thymine). El nucleósido termina en «-ina»/«-osina» (adenosina, citidina) y el nucleótido es el «ácido …ílico».',
          },
        ],
      },
      {
        id: 'ban-3',
        number: 3,
        title: 'Enlaces y la columna azúcar-fosfato',
        keyTerms: ['enlace N-glucosídico', 'enlace fosfodiéster', '5′→3′', 'columna vertebral'],
        blocks: [
          {
            type: 'table',
            title: 'Los enlaces del ácido nucleico',
            data: {
              headers: ['Enlace', 'Une', 'Forma'],
              rows: [
                ['N-glucosídico', 'N de la base con el C1′ de la pentosa', 'El nucleósido'],
                ['Fosfoéster', 'Fosfato con el –OH del C5′ de la pentosa', 'El nucleótido'],
                ['Fosfodiéster 3′→5′', 'Un fosfato con el C3′ de un nucleótido y el C5′ del siguiente', 'La cadena (columna vertebral azúcar-fosfato)'],
                ['Puentes de hidrógeno', 'Bases complementarias de dos cadenas', 'La doble hélice del ADN'],
              ],
            },
          },
          {
            type: 'list',
            title: 'El fosfato (presentación)',
            items: [
              'Deriva del ácido fosfórico.',
              'Se une covalentemente al azúcar para formar los monómeros (nucleótidos).',
              'Une los nucleótidos entre sí: forma la columna vertebral de la cadena de ADN y ARN.',
              'Se une al carbono 5′ de un nucleótido y al 3′ del siguiente: por eso la cadena tiene dirección 5′→3′.',
              'Al añadir un nucleótido a la cadena (desoxinucleósido trifosfato) se libera pirofosfato.',
            ],
          },
          {
            type: 'note',
            title: '¿Qué parte genera las patologías?',
            content: 'En clase se destacó al fosfato porque sin él no hay columna vertebral ni doble hélice. Sin embargo, las enfermedades genéticas no se deben a una «deficiencia de fosfato»: se deben sobre todo a cambios en la SECUENCIA de bases (mutaciones), a fallas de reparación o replicación y a alteraciones cromosómicas.',
          },
        ],
      },
      {
        id: 'ban-4',
        number: 4,
        title: 'Pares de bases y temperatura de fusión',
        keyTerms: ['complementariedad', 'puentes de hidrógeno', 'temperatura de fusión', 'Tm'],
        blocks: [
          {
            type: 'comparison',
            title: 'Pares complementarios',
            left: { title: 'A = T (A = U en ARN)', items: ['2 puentes de hidrógeno', 'Unión más débil', 'Regiones ricas en A-T se separan con más facilidad'] },
            right: { title: 'G ≡ C', items: ['3 puentes de hidrógeno', 'Unión más fuerte', 'Más G-C = más calor (más energía) para separar las cadenas'] },
          },
          {
            type: 'paragraph',
            content:
              'La temperatura de fusión (Tm) es la temperatura a la que se separa (desnaturaliza) la mitad del ADN de doble cadena en cadenas sencillas. A mayor proporción de G-C, mayor Tm: el ADN es más estable. Además de los puentes de hidrógeno, el apilamiento de las bases contribuye mucho a esa estabilidad. El ADN es de doble cadena (antiparalela, en doble hélice) y el ARN suele ser de cadena sencilla.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Tm en el laboratorio',
            content: 'La PCR usa este principio: se calienta el ADN (~94 °C) para separar las cadenas y se enfría para que los cebadores se unan. Los cebadores ricos en G-C necesitan temperaturas de alineamiento más altas.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-adn-estructura-empaquetamiento',
    title: 'ADN: niveles de estructura y empaquetamiento',
    subtitle: 'Regla de Chargaff, cadenas antiparalelas, doble hélice y modelos A, B y Z, superenrollamiento, nucleosomas, cromatina y replicación semiconservativa',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🧬',
    keyPoints: [
      'ADN = muchos desoxirribonucleótidos en DOS HEBRAS enrolladas (escalera de caracol), unidas por puentes de hidrógeno entre las bases (A, G, C, T).',
      'Regla de Chargaff: una purina siempre frente a una pirimidina: A=T (2 puentes de H) y G≡C (3), así que A = T y G = C en cantidad.',
      'Hebras ANTIPARALELAS: el extremo 5′ de una queda frente al 3′ de la otra. La numeración la da la pentosa; los fosfatos unen los nucleótidos.',
      'Niveles: PRIMARIA (secuencia de nucleótidos) · SECUNDARIA (doble hélice de Watson y Crick) · TERCIARIA (superenrollamiento, topoisomerasas) · CUATERNARIA (cromatina y cromosomas).',
      'Modelos de doble hélice: ADN-A (más compacto, poca humedad) · ADN-B (fisiológico, dextrógiro, ~10.5 pb por vuelta) · ADN-Z (levógiro, en zigzag).',
      'Empaquetamiento: doble hélice (2 nm) → nucleosoma (ADN en un octámero de histonas; «collar de perlas», 11 nm) → solenoide (30 nm) → bucles → cromosoma.',
      'Replicación SEMICONSERVATIVA: cada ADN hijo conserva una hebra original y una nueva.',
    ],
    sections: [
      {
        id: 'bae-1',
        number: 1,
        title: 'Estructura primaria y regla de Chargaff',
        keyTerms: ['desoxirribonucleótido', 'regla de Chargaff', 'antiparalelas', '5′→3′'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La estructura primaria del ADN es la secuencia de nucleótidos de una cadena: la información genética está en el orden exacto de sus bases. Cada cadena es un esqueleto de azúcar (desoxirribosa) y fosfato, y cada azúcar lleva una base. Por convención la secuencia se escribe de 5′ (fosfato libre) a 3′ (–OH libre).',
          },
          {
            type: 'comparison',
            title: 'Regla de Chargaff (complementariedad)',
            left: { title: 'Adenina = Timina', items: ['Purina con pirimidina', '2 puentes de hidrógeno'] },
            right: { title: 'Guanina ≡ Citosina', items: ['Purina con pirimidina', '3 puentes de hidrógeno: mayor estabilidad'] },
          },
          {
            type: 'note',
            title: 'Antiparalelas',
            content: 'Las dos hebras corren en direcciones opuestas: una 5′→3′ y la otra 3′→5′, de modo que el extremo 3′ de una coincide con el 5′ de la otra. Los números 1′ a 5′ son los carbonos de la pentosa; el fosfato une el C3′ de un nucleótido con el C5′ del siguiente.',
          },
        ],
      },
      {
        id: 'bae-2',
        number: 2,
        title: 'Estructura secundaria: la doble hélice',
        keyTerms: ['doble hélice', 'Watson y Crick', 'ADN-A', 'ADN-B', 'ADN-Z'],
        blocks: [
          {
            type: 'list',
            title: 'Características (presentación)',
            items: [
              'Dos cadenas complementarias y antiparalelas enrolladas alrededor de un eje imaginario.',
              'Las vueltas se estabilizan por puentes de hidrógeno entre las bases (y por el apilamiento de las bases).',
              'Explica cómo se almacena la información genética y cómo se duplica.',
              'Propuesta por Watson y Crick (1953), con los datos de difracción de rayos X de Rosalind Franklin.',
              'Tiene un surco mayor y un surco menor, donde se unen proteínas que leen el ADN.',
            ],
          },
          {
            type: 'table',
            title: 'Tres modelos de ADN ★',
            data: {
              headers: ['Modelo', 'Giro', 'Condiciones', 'Rasgos'],
              rows: [
                ['ADN-A', 'Dextrógiro', '~75 % de humedad; requiere Na⁺ o K⁺', 'Más ancho y compacto: ~11 pares por vuelta, ~23 Å de diámetro'],
                ['ADN-B', 'Dextrógiro', '~92 % de humedad, baja fuerza iónica', 'El más abundante y fisiológico (Watson y Crick): ~10.5 pares por vuelta, ~20 Å de diámetro'],
                ['ADN-Z', 'LEVÓGIRO', 'Secuencias que alternan purinas y pirimidinas', '~12 pares por vuelta, ~18 Å; el esqueleto azúcar-fosfato sigue un zigzag'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Dextrógira',
            content: 'La diapositiva dice que la doble hélice «gira en sentido contrario a las agujas del reloj» y «dextrógira o levógira». El ADN-B fisiológico es dextrógiro (gira a la derecha); solo el ADN-Z es levógiro.',
          },
        ],
      },
      {
        id: 'bae-3',
        number: 3,
        title: 'Estructura terciaria y cuaternaria: empaquetamiento',
        keyTerms: ['superenrollamiento', 'topoisomerasa', 'histonas', 'nucleosoma', 'solenoide', 'cromatina'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El ADN de una célula humana mide cerca de 2 m y debe caber en un núcleo de unos micrómetros. Primero se superenrolla (estructura terciaria), lo que reduce su longitud; las topoisomerasas (como la topoisomerasa II) cortan y vuelven a unir las hebras para controlar ese superenrollamiento. Después se asocia con proteínas, sobre todo histonas, para formar la cromatina (estructura cuaternaria).',
          },
          {
            type: 'steps',
            title: 'Del ADN al cromosoma ★',
            steps: [
              'Doble hélice: ~2 nm (20 Å) de diámetro.',
              'Nucleosoma: ~146 pares de bases enrollados casi dos vueltas en un octámero de histonas (2 × H2A, H2B, H3, H4); entre nucleosomas, un tramo de ADN conector (linker) con la histona H1.',
              '«Collar de perlas»: fibra de nucleosomas de ~11 nm (100 Å).',
              'Solenoide: la fibra se enrolla en una fibra de cromatina de ~30 nm (300 Å).',
              'Bucles radiales anclados a un andamio de proteínas no histonas.',
              'Cromosoma: el máximo de compactación, visible en la división celular (~700–1400 nm).',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Topoisomerasas como diana de fármacos',
            content: 'Como las células necesitan las topoisomerasas para replicarse, son blancos terapéuticos: las quinolonas (ciprofloxacino) inhiben la ADN girasa (topoisomerasa II) bacteriana, y fármacos antineoplásicos como el etopósido y la doxorrubicina inhiben la topoisomerasa II humana.',
          },
        ],
      },
      {
        id: 'bae-4',
        number: 4,
        title: 'Replicación semiconservativa',
        keyTerms: ['replicación', 'semiconservativa', 'molde', 'cebador'],
        blocks: [
          {
            type: 'steps',
            title: 'Idea general',
            steps: [
              'Las dos hebras se separan localmente (se rompen los puentes de hidrógeno).',
              'Cada hebra original sirve de molde.',
              'Se añaden nucleótidos complementarios (A con T, G con C) en dirección 5′→3′.',
              'Resultan dos moléculas de ADN, cada una con una hebra original y una nueva.',
            ],
          },
          {
            type: 'note',
            title: 'Precisión',
            content: 'En clase se dijo que el ADN «cede una hebra al ARN» y luego sintetiza la complementaria. En la replicación el ADN se copia a ADN; el ARN solo aporta un pequeño cebador para iniciar. Copiar ADN a ARN es otro proceso: la transcripción.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Herencia y ambiente',
            content: 'La diabetes tipo 2 ilustra que una carga hereditaria (varios genes) aumenta el riesgo, pero factores externos como la obesidad, el sedentarismo y la dieta deciden si la enfermedad aparece. Predisposición genética no es destino.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-arn-tipos',
    title: 'ARN: estructura y tipos (ARNm, ARNt, ARNr)',
    subtitle: 'Diferencias con el ADN, niveles de estructura del ARN, codón y anticodón, abundancia y función de cada tipo, nucleótidos y ATP',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '📜',
    keyPoints: [
      'ARN = una hebra, más corta y menos estable que el ADN: el –OH del C2′ de la ribosa facilita su hidrólisis. Bases: A, G, C y U.',
      'Niveles: PRIMARIA (secuencia) · SECUNDARIA (regiones apareadas consigo misma: tallos y bucles) · TERCIARIA (plegamiento 3D complejo).',
      'ARNm (5–10 %): lineal, complementario a una porción del ADN; lleva la secuencia de aminoácidos en tripletes llamados CODONES.',
      'ARNt (~15 %): el más pequeño (~75 nucleótidos), en forma de hoja de trébol; su ANTICODÓN reconoce al codón y lleva el aminoácido correspondiente.',
      'ARNr (60–80 %): el más abundante; con proteínas forma las subunidades del ribosoma y cataliza el enlace peptídico.',
      'ADN → (transcripción) → ARN → (traducción) → proteína.',
      'Purinas y pirimidinas se sintetizan con átomos de aminoácidos (glutamina, aspartato, glicina); el ATP es un nucleótido y el Mg²⁺ lo estabiliza.',
    ],
    sections: [
      {
        id: 'bat-1',
        number: 1,
        title: 'ARN vs ADN',
        keyTerms: ['ribosa', 'uracilo', 'una hebra', 'hidrólisis'],
        blocks: [
          {
            type: 'table',
            title: 'Diferencias ★',
            data: {
              headers: ['Rasgo', 'ADN', 'ARN'],
              rows: [
                ['Azúcar', 'Desoxirribosa (H en C2′)', 'Ribosa (–OH en C2′)'],
                ['Bases', 'A, G, C, T', 'A, G, C, U'],
                ['Hebras', 'Dos (doble hélice antiparalela)', 'Una, que se pliega sobre sí misma'],
                ['Longitud', 'Muy larga', 'Más corta'],
                ['Estabilidad', 'Alta', 'Menor: el –OH en 2′ facilita la hidrólisis'],
                ['Función', 'Guardar la información', 'Copiar y transportar la información; funciones catalíticas y reguladoras'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Correcciones a las diapositivas del ARN',
            content: 'Una diapositiva dice que en el ARN el emparejamiento es entre «A y G y dos pirimidinas (T y U)»: el ARN no tiene timina; sus pirimidinas son C y U (A se aparea con U). Otra dice que el ARN es «similar al ADN, con sustitución del azúcar y aminoácidos»: cambia el azúcar y una base (U por T), no aminoácidos. Los nucleótidos libres pueden tener 1, 2 o 3 fosfatos (AMP, ADP, ATP); dentro de la cadena cada uno conserva uno.',
          },
        ],
      },
      {
        id: 'bat-2',
        number: 2,
        title: 'Niveles de estructura del ARN',
        keyTerms: ['tallo-bucle', 'estructura secundaria', 'estructura terciaria'],
        blocks: [
          {
            type: 'list',
            title: 'Tres niveles (presentación)',
            items: [
              'Primaria: secuencia de bases de sus nucleótidos, unidos por enlaces fosfodiéster; una sola cadena con extremos 5′ y 3′.',
              'Secundaria: la cadena se pliega y se aparea consigo misma en regiones complementarias (tallos y bucles); esa forma determina su función.',
              'Terciaria: plegamiento complicado sobre la secundaria que da la forma tridimensional (por ejemplo, la «L» del ARNt).',
            ],
          },
        ],
      },
      {
        id: 'bat-3',
        number: 3,
        title: 'Los tres tipos principales de ARN',
        keyTerms: ['ARNm', 'ARNt', 'ARNr', 'codón', 'anticodón'],
        blocks: [
          {
            type: 'table',
            title: 'Tipo, abundancia y función ★',
            data: {
              headers: ['Tipo', 'Abundancia', 'Estructura', 'Función'],
              rows: [
                ['ARN mensajero (ARNm)', '5–10 % (el menos abundante)', 'Lineal; complementario a una porción del ADN', 'Lleva con exactitud la secuencia de aminoácidos de una proteína, en tripletes de bases llamados codones'],
                ['ARN de transferencia (ARNt)', '~15 %', 'El más pequeño (~75 nucleótidos); hoja de trébol', 'Su anticodón se aparea con el codón del ARNm y entrega el aminoácido correcto al ribosoma'],
                ['ARN ribosomal (ARNr)', '60–80 % (el más abundante)', 'Moléculas grandes con estructura secundaria y terciaria compleja', 'Se ensambla con proteínas en el nucléolo y forma las subunidades del ribosoma (mayor: 3 ARNr; menor: 1 ARNr); cataliza el enlace peptídico'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Codón vs anticodón',
            left: { title: 'Codón', items: ['Triplete de bases en el ARNm', 'Especifica un aminoácido o una señal de terminación', 'Ejemplo: AUG (metionina, inicio)'] },
            right: { title: 'Anticodón', items: ['Triplete complementario en el ARNt', 'Reconoce al codón por apareamiento de bases', 'Ejemplo: UAC (frente a AUG)'] },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Advertencia de examen',
            content: 'Se escribe «codón» (en el ARNm) y «anticodón» (en el ARNt); un término parecido pero equivocado se califica mal, igual que confundir metamizol (analgésico) con metimazol (antitiroideo). La diapositiva dice que el ARNt «traduce el codón en anticodón»: más bien, su anticodón reconoce al codón.',
          },
        ],
      },
      {
        id: 'bat-4',
        number: 4,
        title: 'De dónde salen los nucleótidos',
        keyTerms: ['síntesis de purinas', 'ATP', 'magnesio', 'ácido úrico'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El cuerpo fabrica sus propias purinas y pirimidinas. Los anillos se construyen con átomos de aminoácidos (glutamina, aspartato y glicina), CO₂ y unidades de un carbono del folato; no dependen de comer ácidos nucleicos. Los nucleótidos con uno, dos o tres fosfatos (AMP, ADP, ATP) también sirven como moneda de energía: el ATP se estabiliza con Mg²⁺. Se estudia en bioenergética.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Purinas y gota',
            content: 'Al degradarse, las purinas terminan en ácido úrico. Si el urato se acumula (por producción alta o eliminación renal baja), se forman cristales en las articulaciones: gota. Un exceso de carnes rojas, vísceras, mariscos, alcohol y fructosa aumenta el riesgo en personas susceptibles.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-replicacion-adn',
    title: 'Replicación del ADN: modelos y enzimas',
    subtitle: 'Funciones del ADN, modelos conservativo, semiconservativo y dispersivo, apareamiento con la cadena patrón, helicasa, SSB, primasa, ADN polimerasa, topoisomerasas y ligasa',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🧬',
    keyPoints: [
      'Funciones del ADN: almacenar y permitir leer la información; transcripción; síntesis de proteínas (enzimas) y hormonas; replicación celular y formación de tejidos nuevos.',
      'Tres modelos propuestos: conservativo, SEMICONSERVATIVO y dispersivo. La célula usa el semiconservativo: cada ADN hijo conserva una hebra original.',
      'Cada hebra separada sirve de molde (cadena patrón); los nucleótidos libres se aparean por complementariedad (A–T, G–C) y la cadena nueva es antiparalela.',
      'La síntesis va siempre de 5′ a 3′: cada nucleótido nuevo se une al –OH del extremo 3′ de la cadena creciente. Ocurre en pocas horas, con una tasa de error de ~1 × 10⁻⁹.',
      'Helicasa: rompe los puentes de hidrógeno y abre la horquilla. SSB: estabilizan las hebras sencillas. Primasa: cebador de ARN con el 3′-OH inicial.',
      'ADN polimerasa: forma los enlaces fosfodiéster; cadena líder continua y cadena retrasada en fragmentos de Okazaki. Topoisomerasas (girasa): alivian la tensión. Ligasa: sella los fragmentos.',
      'Las topoisomerasas son diana de fármacos: quinolonas (ciprofloxacino) en bacterias y antineoplásicos en células tumorales.',
    ],
    sections: [
      {
        id: 'brp-1',
        number: 1,
        title: 'Para qué sirve el ADN',
        keyTerms: ['almacenamiento', 'transcripción', 'síntesis de proteínas', 'replicación celular'],
        blocks: [
          {
            type: 'list',
            title: 'Funciones del ADN (presentación)',
            items: [
              'Almacenamiento de la información genética y su lectura.',
              'Transcripción: el ADN es el molde para sintetizar ARN.',
              'Síntesis de proteínas (incluidas las enzimas) y de hormonas, a través de los ARN que se transcriben.',
              'Replicación celular y formación de tejidos nuevos.',
            ],
          },
          {
            type: 'paragraph',
            content:
              'Todos los seres vivos usan las mismas cuatro bases, y la variación entre individuos y poblaciones (estatura, grupo sanguíneo, susceptibilidad a enfermedades, respuesta a fármacos) depende del orden en que se combinan. Por eso un error en la copia del ADN puede terminar en una enfermedad, y muchos fármacos actúan, para bien o para mal, sobre estas moléculas.',
          },
        ],
      },
      {
        id: 'brp-2',
        number: 2,
        title: 'Tres modelos de replicación',
        keyTerms: ['conservativa', 'semiconservativa', 'dispersiva'],
        blocks: [
          {
            type: 'table',
            title: 'Modelos propuestos ★',
            data: {
              headers: ['Modelo', 'Qué predice', '¿Es el que ocurre?'],
              rows: [
                ['Conservativo', 'Una molécula hija conserva las dos hebras originales y la otra es totalmente nueva', 'No'],
                ['Semiconservativo', 'Cada molécula hija tiene una hebra original y una nueva', 'Sí'],
                ['Dispersivo', 'Cada hebra hija mezcla fragmentos viejos y nuevos', 'No'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Características de la replicación (presentación)',
            items: [
              'Usa el modelo semiconservativo: una hebra original sirve para sintetizar la nueva.',
              'Avanza en sentido 5′ → 3′.',
              'Se separan las dos hebras y se copia todo el ADN.',
              'Ocurre en pocas horas.',
              'Tasa de error de aproximadamente 1 × 10⁻⁹ (un error por cada mil millones de nucleótidos).',
            ],
          },
          {
            type: 'note',
            title: 'Por qué «semi»',
            content: 'Para entregar una copia fiel, la célula conserva una hebra original como molde y fabrica la complementaria. Sin esa hebra de referencia no habría de dónde copiar.',
          },
        ],
      },
      {
        id: 'brp-3',
        number: 3,
        title: 'El apareamiento: cadena patrón y cadena nueva',
        keyTerms: ['cadena patrón', 'molde', 'complementariedad', 'enlace fosfodiéster'],
        blocks: [
          {
            type: 'steps',
            title: 'Cómo se copia (presentación)',
            steps: [
              'Se separan las dos cadenas; cada una sirve de molde (cadena patrón) para una nueva.',
              'Las bases de la cadena patrón exponen sus grupos que ceden o reciben puentes de hidrógeno, y los nucleótidos libres se alinean por complementariedad: A con T, G con C.',
              'La ADN polimerasa une esos nucleótidos con enlaces fosfodiéster.',
              'Resulta una cadena nueva, complementaria y antiparalela a la patrón.',
            ],
          },
          {
            type: 'note',
            title: 'Por qué 5′ → 3′',
            content: 'El fosfato del nucleótido que llega se une al –OH del carbono 3′ del último nucleótido de la cadena: por eso la cadena solo puede crecer por su extremo 3′, es decir, en dirección 5′ → 3′. Los nucleótidos llegan fosforilados (trifosfatos) y aportan la energía del enlace.',
          },
          {
            type: 'note',
            title: 'Ejercicio de clase',
            content: 'Para complementar una hebra se aplica la regla de Chargaff base por base: A → T, T → A, C → G, G → C. Ojo con la escritura: timina (base del ADN) no es tiamina (vitamina B1).',
          },
        ],
      },
      {
        id: 'brp-4',
        number: 4,
        title: 'Las enzimas de la horquilla de replicación',
        keyTerms: ['helicasa', 'SSB', 'primasa', 'ADN polimerasa', 'topoisomerasa', 'girasa', 'ligasa', 'fragmentos de Okazaki'],
        blocks: [
          {
            type: 'table',
            title: 'Quién hace qué ★',
            data: {
              headers: ['Enzima o proteína', 'Función'],
              rows: [
                ['Helicasa', 'Rompe los puentes de hidrógeno entre las bases y abre la doble hélice; desplaza la horquilla de replicación'],
                ['Proteínas de unión a cadena sencilla (SSB)', 'Estabilizan las hebras ya separadas para que no vuelvan a aparearse'],
                ['Primasa', 'Sintetiza un cebador corto de ARN que aporta el primer extremo 3′-OH'],
                ['ADN polimerasa', 'Añade nucleótidos al extremo 3′ y forma los enlaces fosfodiéster; continua en la cadena líder'],
                ['Topoisomerasas (la girasa es una topoisomerasa)', 'Cortan y vuelven a unir el ADN para aliviar la tensión y el superenrollamiento por delante de la horquilla'],
                ['ADN ligasa', 'Une los fragmentos y sella las interrupciones del esqueleto azúcar-fosfato'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Cadena líder vs cadena retrasada',
            left: { title: 'Líder', items: ['Su molde permite crecer 5′→3′ hacia la horquilla', 'Síntesis continua'] },
            right: { title: 'Retrasada', items: ['Crece en sentido contrario a la horquilla', 'Síntesis discontinua en fragmentos de Okazaki que luego sella la ligasa'] },
          },
          {
            type: 'note',
            title: 'Corrección a la diapositiva',
            content: 'La diapositiva y la clase atribuyen a la girasa aportar el –OH del carbono 3′ y sintetizar los fragmentos cortos. Ese papel es de la primasa (sintetiza el cebador de ARN que deja el primer 3′-OH). La girasa es una topoisomerasa bacteriana que reduce la tensión de la horquilla.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Topoisomerasas como diana: quinolonas',
            content: 'Las quinolonas (ciprofloxacino, levofloxacino, moxifloxacino) actúan sobre las topoisomerasas bacterianas (girasa). Un efecto adverso conocido es la tendinopatía con riesgo de rotura del tendón de Aquiles. En clase se insistió en hidratar al paciente y en evitar la sobrecarga física durante el tratamiento.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-codigo-genetico-traduccion',
    title: 'Código genético y traducción',
    subtitle: 'Por qué tripletes, 64 codones, inicio y terminación, propiedades del código, codón y anticodón, ARNt como adaptador, ARNr como ribozima y las tres fases de la traducción',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🔤',
    keyPoints: [
      'El código genético usa un idioma de 4 letras (A, U, C, G en el ARNm) para escribir 20 aminoácidos.',
      'Con 2 bases solo habría 4 × 4 = 16 combinaciones, menos que 20 aminoácidos; con 3 bases (triplete o CODÓN) hay 4³ = 64.',
      '64 codones: 61 codifican aminoácidos y 3 son de terminación (UAA, UAG, UGA). AUG = metionina = codón de inicio.',
      'Propiedades: tripletes, específico (cada codón un solo significado), degenerado (varios codones por aminoácido: la leucina tiene 6), casi universal, con inicio y final, sin solapamiento.',
      'Codón en el ARNm; anticodón en el ARNt. El ARNt es el adaptador que lleva el aminoácido correcto.',
      'ARNr: maquinaria del ribosoma; forma los enlaces peptídicos (ribozima). El ribosoma lee el ARNm de 5′ a 3′.',
      'Traducción en 3 fases: iniciación (AUG, metionina), elongación (la cadena crece del extremo N al C) y terminación (codón de paro).',
    ],
    sections: [
      {
        id: 'bcg-1',
        number: 1,
        title: 'Un idioma de cuatro letras',
        keyTerms: ['código genético', 'codón', 'triplete', 'combinaciones'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La información de una proteína está escrita en la secuencia de bases. El ARNm usa cuatro letras (A, U, C, G) y cada «palabra» de tres letras, el codón, corresponde a uno de los 20 aminoácidos o a una señal de terminación. Ese diccionario es el código genético.',
          },
          {
            type: 'table',
            title: 'Por qué tres bases ★',
            data: {
              headers: ['Bases por palabra', 'Combinaciones', '¿Alcanzan para 20 aminoácidos?'],
              rows: [
                ['1', '4', 'No'],
                ['2', '4 × 4 = 16', 'No'],
                ['3 (triplete)', '4 × 4 × 4 = 64', 'Sí, y sobran'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Precisión',
            content: 'La diapositiva y la clase dicen que cada palabra «consta de 3 aminoácidos» y que «cada base se codifica por tres aminoácidos». Es al revés: cada palabra (codón) consta de 3 bases y codifica un solo aminoácido.',
          },
        ],
      },
      {
        id: 'bcg-2',
        number: 2,
        title: 'Los 64 codones y sus propiedades',
        keyTerms: ['AUG', 'UAA', 'UAG', 'UGA', 'degenerado', 'universal', 'sin solapamiento'],
        blocks: [
          {
            type: 'table',
            title: 'Las cifras del código ★',
            data: {
              headers: ['Dato', 'Valor'],
              rows: [
                ['Codones posibles', '64'],
                ['Codifican aminoácidos', '61'],
                ['Terminación (paro)', '3: UAA, UAG, UGA'],
                ['Inicio', 'AUG, que además codifica metionina'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Propiedades (presentación)',
            items: [
              'Se lee en tripletes, codón por codón.',
              'Cada codón es específico: significa un solo aminoácido o una sola señal.',
              'Degenerado: un mismo aminoácido puede estar codificado por más de un codón.',
              'Misma lectura en (casi) todos los organismos: universal.',
              'Tiene un inicio y un final.',
              'No hay solapamiento: cada base pertenece a un solo codón.',
            ],
          },
          {
            type: 'note',
            title: 'Ejemplo: la leucina',
            content: 'La leucina tiene seis codones: CUU, CUC, CUA, CUG, UUA y UUG. Que varios codones signifiquen lo mismo (degeneración) amortigua el efecto de algunos cambios de una sola base.',
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Lo que se pregunta',
            content: 'No hay que memorizar la tabla de 64. Basta con: AUG = metionina = inicio; UAA, UAG, UGA = paro; 64 = 61 + 3.',
          },
        ],
      },
      {
        id: 'bcg-3',
        number: 3,
        title: 'Codón, anticodón y los tres ARN en la síntesis de proteínas',
        keyTerms: ['ARNm', 'ARNt', 'ARNr', 'anticodón', 'ribozima', 'adaptador'],
        blocks: [
          {
            type: 'table',
            title: 'Quién hace qué ★',
            data: {
              headers: ['ARN', 'Papel en la síntesis de proteínas'],
              rows: [
                ['ARN mensajero (ARNm)', 'Lleva la información: dice qué aminoácido se necesita mediante sus codones'],
                ['ARN de transferencia o de transporte (ARNt)', 'Adaptador molecular: su anticodón reconoce al codón y transporta el aminoácido libre del citoplasma'],
                ['ARN ribosomal (ARNr)', 'Maquinaria esencial del ribosoma; funciones estructurales y catalíticas: forma los enlaces peptídicos (actúa como ribozima)'],
              ],
            },
          },
          {
            type: 'paragraph',
            content:
              'El ARNm presenta el codón; el ARNt que trae el anticodón complementario entrega su aminoácido; el ribosoma, gracias al ARNr, lo une al anterior. Así se forma la cadena creciente de aminoácidos, el polipéptido. Los ribosomas libres en el citoplasma sintetizan proteínas de uso interno y los unidos al retículo endoplásmico rugoso, proteínas para membranas o para exportar.',
          },
          {
            type: 'note',
            title: 'Precisiones a la clase',
            content: 'En clase se dijo que el ARNm «hace la traducción»: el ARNm es el mensaje que se traduce y el ribosoma es quien lo lee. Se recomendó decir ARN «de transporte» (también «de transferencia»), nunca «de traducción». Los sitios del ribosoma son A (aminoacil, entrada del ARNt con su aminoácido), P (peptidil, donde está la cadena creciente) y E (salida); en clase se llamó «adenil» al sitio A. El tamaño del ARNt aparece como ~100 nucleótidos en la diapositiva; los textos dan ~75–90.',
          },
        ],
      },
      {
        id: 'bcg-4',
        number: 4,
        title: 'Las tres fases de la traducción',
        keyTerms: ['iniciación', 'elongación', 'terminación', 'metionina', 'GTP'],
        blocks: [
          {
            type: 'steps',
            title: 'Fases (presentación)',
            steps: [
              'Iniciación: la subunidad menor del ribosoma se une al ARNm en el codón de inicio AUG y llega el ARNt iniciador. El primer aminoácido es siempre la metionina; participan factores de iniciación y se hidroliza GTP.',
              'Elongación: llegan ARNt sucesivos con sus aminoácidos, se forma un enlace peptídico tras otro y el ribosoma se trasloca. La cadena crece desde el extremo N-terminal hacia el C-terminal.',
              'Terminación: un codón de paro (UAA, UAG o UGA) detiene la síntesis y se libera el polipéptido.',
            ],
          },
          {
            type: 'note',
            title: 'Dato de la presentación',
            content: 'En la transcripción, la ARN polimerasa copia unos 30 nucleótidos por segundo de la cadena de ADN, en dirección 5′ → 3′.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Del ADN a la proteína',
            content: 'Una mutación puede cambiar un codón y con él el aminoácido (anemia falciforme: glutamato → valina en la β-globina) o crear un codón de paro prematuro que trunca la proteína. Entender el código explica por qué algunos cambios de base no tienen efecto (degeneración) y otros sí.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-danio-acidos-nucleicos',
    title: 'Factores que dañan los ácidos nucleicos',
    subtitle: 'Radiación, metales, temperatura y pH; alquilantes, inhibidores de topoisomerasa, bleomicina, antimetabolitos, aflatoxina, benzopireno y luz UV; fármacos y farmacovigilancia',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '☢️',
    keyPoints: [
      'Factores que afectan los ácidos nucleicos: radiación ionizante, metales pesados, fármacos anticancerígenos, temperatura, acidez y alcalinidad.',
      'Ciclofosfamida y cisplatino: añaden grupos alquilo o forman enlaces cruzados (sobre todo en N7 de la guanina).',
      'Doxorrubicina y etopósido: inhiben la topoisomerasa II → roturas de doble hebra.',
      'Bleomicina: radicales libres con hierro → roturas de hebra sencilla y doble. 5-FU y metotrexato: antimetabolitos que alteran la síntesis de nucleótidos.',
      'Aflatoxina B1 (Aspergillus, hígado) y benzo[a]pireno (tabaco): aductos voluminosos en la guanina; carcinógenos.',
      'Luz UV (no ionizante) → dímeros de pirimidina (de timina). Radiación ionizante → roturas de doble hebra y daño oxidativo.',
      'La talidomida marcó un antes y un después: comités de bioética, fases de investigación y farmacovigilancia.',
    ],
    sections: [
      {
        id: 'bdn-1',
        number: 1,
        title: 'Qué puede alterar un ácido nucleico',
        keyTerms: ['radiación ionizante', 'metales pesados', 'anticancerígenos', 'temperatura', 'pH'],
        blocks: [
          {
            type: 'list',
            title: 'Factores (presentación)',
            items: [
              'Radiación ionizante.',
              'Metales pesados.',
              'Fármacos anticancerígenos.',
              'Temperatura, acidez y alcalinidad.',
            ],
          },
          {
            type: 'paragraph',
            content:
              'Aunque la replicación es muy precisa (~1 error por 10⁹ nucleótidos), agentes internos y externos pueden modificar las bases, unir las hebras entre sí o romperlas. Si el daño no se repara, la copia se hereda tal cual a las células hijas: de ahí derivan muchos procesos patológicos.',
          },
        ],
      },
      {
        id: 'bdn-2',
        number: 2,
        title: 'Agentes, mecanismo y tipo de daño',
        keyTerms: ['agentes alquilantes', 'enlaces cruzados', 'topoisomerasa II', 'aductos', 'dímeros de pirimidina'],
        blocks: [
          {
            type: 'table',
            title: 'Tabla de la presentación ★',
            data: {
              headers: ['Agente', 'Grupo', 'Mecanismo', 'Daño en el ADN', 'Relevancia clínica'],
              rows: [
                ['Ciclofosfamida · cisplatino', 'Alquilantes · compuestos de platino', 'Añaden grupos alquilo o forman enlaces cruzados entre las cadenas (sobre todo en N7 de la guanina)', 'Enlaces cruzados intra e intercatenarios; aductos voluminosos', 'Quimioterapia: linfomas, ovario, testículo'],
                ['Doxorrubicina · etopósido', 'Inhibidores de la topoisomerasa II', 'Se intercalan o se unen al complejo ADN–topoisomerasa II y bloquean la religación', 'Roturas de doble hebra; detención de la horquilla', 'Leucemias, sarcomas, mama'],
                ['Bleomicina', 'Antibiótico citotóxico', 'Se une al ADN y genera radicales libres de oxígeno con hierro', 'Roturas de hebra sencilla y doble', 'Linfoma de Hodgkin, cáncer de testículo'],
                ['5-fluorouracilo · metotrexato', 'Antimetabolitos', 'Inhiben enzimas de síntesis de nucleótidos (timidilato sintasa): se incorpora uracilo anómalo', 'Bases modificadas, roturas por escisión, inestabilidad genómica', 'Tumores gastrointestinales, mama; autoinmunes'],
                ['Aflatoxina B1', 'Micotoxina (Aspergillus)', 'El citocromo P450 hepático la convierte en un epóxido que se une a la guanina', 'Aductos voluminosos en N7-guanina; mutaciones', 'Carcinógeno ambiental: carcinoma hepatocelular'],
                ['Benzo[a]pireno', 'Hidrocarburo aromático policíclico', 'Del humo del tabaco y la combustión; sus metabolitos se unen covalentemente al ADN', 'Aductos voluminosos en purinas (guanina)', 'Cáncer de pulmón y vejiga'],
                ['Luz ultravioleta (UV-B, UV-C)', 'Radiación no ionizante', 'Enlaces covalentes entre pirimidinas vecinas de la misma hebra', 'Dímeros de pirimidina (sobre todo de timina)', 'Melanoma y otros cánceres de piel'],
                ['Radiación ionizante (rayos X, gamma)', 'Radiación ionizante', 'Ioniza directamente el esqueleto o, de forma indirecta, genera radicales hidroxilo por radiólisis del agua', 'Roturas de doble hebra; daño oxidativo (8-oxo-guanina)', 'Radioterapia; accidentes por radiación'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Un mismo blanco, dos usos',
            content: 'Varios de estos fármacos se usan a propósito para dañar el ADN de las células tumorales, que se dividen rápido; por eso también afectan tejidos sanos de recambio rápido. Su efecto depende del fármaco, la dosis y el contexto clínico.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Protección en radiología',
            content: 'El personal de radiología usa mandil plomado porque la radiación ionizante daña el ADN, y las gónadas son especialmente sensibles.',
          },
        ],
      },
      {
        id: 'bdn-3',
        number: 3,
        title: 'Fármacos, dosis y farmacovigilancia',
        keyTerms: ['talidomida', 'teratógeno', 'farmacovigilancia', 'quinolonas', 'tetraciclinas'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La talidomida se autorizó para las náuseas y el vómito del embarazo y años después se reconoció como teratógena (malformaciones congénitas graves). El caso impulsó los comités de ética y bioética, las fases de la investigación clínica (preclínica en animales y clínica en humanos) y una disciplina hoy central: la farmacovigilancia.',
          },
          {
            type: 'list',
            title: 'Otros ejemplos comentados en clase',
            items: [
              'Quinolonas (ciprofloxacino): actúan sobre las topoisomerasas bacterianas; riesgo de tendinopatía y rotura del tendón de Aquiles.',
              'Tetraciclinas (doxiciclina): contraindicadas en niños por sus efectos en el desarrollo.',
              'La dosis importa: un error de dosis (por ejemplo, diez veces la indicada) puede causar una intoxicación grave.',
            ],
          },
          {
            type: 'note',
            title: 'Precisiones',
            content: 'En clase se mencionaron también la pioglitazona, el etoricoxib y la metoclopramida; no son agentes que dañen directamente la estructura del ADN y no se incluyen como tales. La talidomida es teratógena por su efecto sobre el desarrollo embrionario, no porque «rompa» el ADN. Sobre las tetraciclinas se dieron dos edades (menores de 8 y de 12 años); la contraindicación habitual es en menores de 8 años.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué un antibiótico «selectivo» tiene contraindicaciones',
            content: 'Aunque un antibiótico se diseña para alcanzar dosis tóxicas solo para la bacteria, su blanco (topoisomerasas, ribosomas) tiene equivalentes humanos. Con dosis altas o uso prolongado el margen se rebasa: por eso existen contraindicaciones por edad y advertencias de uso.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-hormonas-concepto-clasificacion',
    title: 'Hormonas: concepto, clasificación y señalización',
    subtitle: 'Qué es una hormona; receptores y segundos mensajeros; seis grupos químicos; la estructura predice solubilidad, transporte, receptor y vida media; retroalimentación',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '📡',
    keyPoints: [
      'Hormona: molécula activa que producen células o glándulas endocrinas y que actúa sobre células blanco con receptores específicos. La palabra viene del griego «excitar».',
      'La unión hormona-receptor (ligando-receptor) activa proteínas G, receptores con actividad de cinasa o segundos mensajeros: AMPc, GMPc, Ca²⁺, IP₃ y diacilglicerol.',
      'Seis grupos: proteicas o polipeptídicas, esteroideas, derivadas de aminoácidos, derivadas de ácidos grasos, factores de crecimiento y citocinas.',
      'Hidrosolubles (peptídicas, catecolaminas): circulan libres, receptor de membrana, vida media corta. Liposolubles (esteroides, hormonas tiroideas): transportador, receptor intracelular, vida media larga.',
      'La noradrenalina es una catecolamina derivada de la tirosina con vida media de 2 a 3 minutos: por eso se administra en infusión y se ajusta según la respuesta.',
      'La secreción se regula sobre todo por retroalimentación negativa; la positiva es excepcional (pico de LH, oxitocina en el parto).',
    ],
    sections: [
      {
        id: 'bhc-1',
        number: 1,
        title: '¿Qué es una hormona?',
        keyTerms: ['hormona', 'célula blanco', 'receptor', 'ligando'],
        blocks: [
          {
            type: 'definition',
            title: 'Hormona',
            content: 'Molécula biológicamente activa que producen y liberan células o glándulas endocrinas, que en general viaja por la sangre y actúa sobre células blanco que tienen receptores específicos para ella. La palabra viene del griego hormao, «excitar» o «poner en movimiento».',
          },
          {
            type: 'list',
            title: 'Características',
            items: [
              'Es un mensajero químico: lleva una orden de un órgano a otro.',
              'Actúa en concentraciones muy pequeñas pero produce respuestas grandes.',
              'Solo responden las células que tienen su receptor; si el receptor está en varios tejidos, el efecto es multiorgánico.',
              'Su liberación depende de varios estímulos (otras hormonas, nervios, nutrientes, estrés) y se regula por retroalimentación.',
              'Se mide sobre todo en plasma, es decir, en el compartimento extracelular.',
            ],
          },
          {
            type: 'paragraph',
            content: 'La hormona y su receptor forman el complejo ligando-receptor. Se parece al complejo enzima-sustrato: la hormona debe encajar en su receptor. Conocer la estructura de la hormona permite anticipar sus propiedades químicas, físicas y biológicas: dónde está su receptor, cómo viaja, cuánto dura y qué pasa cuando falla.',
          },
          {
            type: 'list',
            title: 'Dónde puede fallar el sistema',
            items: [
              'La hormona no se sintetiza o se produce en poca cantidad (hipotiroidismo).',
              'Se produce en exceso (síndrome de Cushing, hipertiroidismo).',
              'Se produce pero su estructura no es funcional.',
              'La hormona es normal pero su receptor no responde (resistencia a la insulina).',
            ],
          },
        ],
      },
      {
        id: 'bhc-2',
        number: 2,
        title: 'Receptores y segundos mensajeros',
        keyTerms: ['proteína G', 'AMPc', 'IP₃', 'diacilglicerol', 'tirosina cinasa', 'receptor nuclear'],
        blocks: [
          {
            type: 'table',
            title: 'Cómo transmite la señal cada tipo de receptor',
            data: {
              headers: ['Receptor', 'Dónde', 'Qué activa', 'Ejemplos'],
              rows: [
                ['Acoplado a proteína G', 'Membrana', 'Adenilato ciclasa → AMPc → proteína cinasa A; o fosfolipasa C → IP₃ (libera Ca²⁺) y diacilglicerol (proteína cinasa C)', 'Glucagón, adrenalina, TSH, ADH'],
                ['Con actividad de tirosina cinasa', 'Membrana', 'Se autofosforila y fosforila proteínas en cascada', 'Insulina, factores de crecimiento'],
                ['Con actividad de guanilato ciclasa', 'Membrana o citoplasma', 'GMPc → proteína cinasa G', 'Péptido natriurético; el óxido nítrico activa la guanilato ciclasa soluble'],
                ['Intracelular o nuclear', 'Citoplasma o núcleo', 'El complejo hormona-receptor se une al ADN y cambia la transcripción de genes', 'Esteroides, hormonas tiroideas, vitamina D'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Segundo mensajero',
            content: 'Molécula intracelular que transmite y amplifica la señal de una hormona que no entra a la célula (el «primer mensajero»): AMPc, GMPc, Ca²⁺, IP₃ y diacilglicerol. El Ca²⁺ suele actuar unido a la calmodulina.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Los receptores de la noradrenalina',
            content: 'Una misma hormona puede tener varios receptores con efectos distintos. α₁: vasoconstricción y aumento de la presión arterial. α₂: frena la liberación de noradrenalina (por eso los agonistas α₂ centrales bajan la presión). β₁: aumenta la frecuencia y la fuerza del corazón. β₂: relaja el músculo liso bronquial (broncodilatación). β₃: estimula la lipólisis en el tejido adiposo.',
          },
        ],
      },
      {
        id: 'bhc-3',
        number: 3,
        title: 'Clasificación química',
        keyTerms: ['polipeptídicas', 'esteroideas', 'aminas', 'eicosanoides', 'factores de crecimiento', 'citocinas'],
        blocks: [
          {
            type: 'table',
            title: 'Los seis grupos (presentación)',
            data: {
              headers: ['Grupo', 'Origen', 'Ejemplos'],
              rows: [
                ['Proteicas y polipeptídicas', 'Cadenas de aminoácidos', 'Insulina, glucagón, somatostatina, GH, calcitonina, ACTH, oxitocina, ADH, TSH, LH, FSH'],
                ['Esteroideas', 'Colesterol', 'Cortisol, aldosterona, andrógenos, estrógenos, progesterona; la vitamina D activa es un secoesteroide'],
                ['Derivadas de aminoácidos (aminas)', 'Tirosina y triptófano', 'Catecolaminas, T₃ y T₄, serotonina, melatonina'],
                ['Derivadas de ácidos grasos', 'Ácido araquidónico (20 carbonos)', 'Eicosanoides: prostaglandinas, prostaciclinas, tromboxanos, leucotrienos'],
                ['Factores de crecimiento', 'Proteínas', 'La GH estimula la producción hepática de IGF-1, que media su efecto de crecimiento'],
                ['Citocinas', 'Proteínas y glucoproteínas', 'Interleucinas (IL-1 a IL-10 en la presentación), interferones, TNF'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Tamaño de algunas hormonas peptídicas',
            data: {
              headers: ['Hormona', 'Aminoácidos', 'Nota'],
              rows: [
                ['Oxitocina y vasopresina (ADH)', '9', 'Nonapéptidos: péptidos cortos'],
                ['Insulina', '51', 'Dos cadenas (A de 21 y B de 30) unidas por puentes disulfuro'],
                ['Hormona del crecimiento', '191', 'Proteína de una sola cadena'],
                ['FSH, LH, TSH', '—', 'Glucoproteínas: una subunidad α común y una β propia de cada hormona'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Péptido y proteína se distinguen por tamaño: los péptidos son cadenas cortas y las proteínas, largas. El retinol es la vitamina A; su derivado, el ácido retinoico, actúa como una hormona a través de receptores nucleares.',
          },
        ],
      },
      {
        id: 'bhc-4',
        number: 4,
        title: 'La estructura predice el comportamiento',
        keyTerms: ['hidrosoluble', 'liposoluble', 'vida media', 'transportador'],
        blocks: [
          {
            type: 'comparison',
            title: 'Hidrosolubles frente a liposolubles',
            left: {
              title: 'Hidrosolubles (peptídicas, catecolaminas)',
              items: [
                'Circulan libres en el plasma',
                'No atraviesan la membrana: receptor de membrana y segundos mensajeros',
                'Se almacenan en gránulos y se liberan por exocitosis',
                'Vida media corta (minutos)',
                'Las peptídicas se destruyen en el tubo digestivo: la insulina se inyecta',
              ],
            },
            right: {
              title: 'Liposolubles (esteroides, hormonas tiroideas)',
              items: [
                'Viajan unidas a proteínas transportadoras',
                'Atraviesan la membrana: receptor intracelular o nuclear',
                'Los esteroides no se almacenan: se sintetizan cuando se necesitan',
                'Vida media larga (horas a días)',
                'Se absorben por vía oral: prednisona, levotiroxina',
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La noradrenalina se ajusta minuto a minuto',
            content: 'La noradrenalina es una catecolamina (amina derivada de la tirosina), hidrosoluble y con vida media de 2 a 3 minutos. En terapia intensiva se administra en infusión continua y la dosis se ajusta según la presión y la frecuencia cardiaca: al bajar la infusión, el efecto disminuye en pocos minutos porque la molécula se elimina rápido.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Por qué los glucocorticoides suben de peso',
            content: 'Los glucocorticoides como la dexametasona o la prednisona no aumentan el peso porque «se acumulen» por ser lípidos. Lo hacen por sus efectos metabólicos: más apetito, hiperglucemia y resistencia a la insulina, redistribución de la grasa hacia el tronco y la cara, y retención de líquidos.',
          },
        ],
      },
      {
        id: 'bhc-5',
        number: 5,
        title: 'Retroalimentación y ejes endocrinos',
        keyTerms: ['retroalimentación negativa', 'retroalimentación positiva', 'eje hipotálamo-hipófisis'],
        blocks: [
          {
            type: 'steps',
            title: 'Un eje endocrino',
            steps: [
              'El hipotálamo libera una hormona liberadora (por ejemplo, TRH).',
              'La hipófisis responde con una hormona trófica (TSH).',
              'La glándula periférica produce la hormona final (T₄ y T₃).',
              'La hormona final frena al hipotálamo y a la hipófisis: retroalimentación negativa.',
            ],
          },
          {
            type: 'comparison',
            title: 'Dos tipos de retroalimentación',
            left: { title: 'Negativa (la más común)', items: ['La respuesta frena el estímulo', 'Mantiene la homeostasis', 'Ejemplo: T₃ y T₄ inhiben la TRH y la TSH'] },
            right: { title: 'Positiva (excepcional)', items: ['La respuesta amplifica el estímulo', 'Termina en un evento', 'Ejemplos: pico de LH antes de la ovulación, oxitocina durante el parto'] },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Hormona tiroidea para adelgazar',
            content: 'Algunos productos para bajar de peso contenían triyodotironina (T₃). La hormona externa aumenta el metabolismo, pero por retroalimentación negativa suprime la TSH y la producción propia de la tiroides. Produce taquicardia, arritmias y pérdida de masa muscular y ósea; al suspenderla, el eje tarda en recuperarse y el peso perdido regresa. La hormona tiroidea no debe usarse para adelgazar.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-hormonas-sintesis-transporte',
    title: 'Síntesis, liberación y transporte de las hormonas',
    subtitle: 'De preprohormona a hormona activa; exocitosis por Ca²⁺; variabilidad de las hormonas proteicas; esteroidogénesis; proteínas transportadoras, fracción libre y vida media',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '📦',
    keyPoints: [
      'Hormonas peptídicas: ADN → ARNm → traducción en el retículo endoplásmico rugoso → preprohormona → prohormona → hormona activa en gránulos de secreción → exocitosis cuando sube el Ca²⁺.',
      'La proinsulina se corta en insulina y péptido C, que se liberan en la misma cantidad.',
      'El splicing alternativo y las modificaciones postraduccionales generan variantes de una misma hormona proteica; el laboratorio debe saber cuáles reconoce su método.',
      'Esteroides: colesterol → (StAR) mitocondria → pregnenolona por la P450scc (desmolasa) → retículo endoplásmico liso; no se almacenan.',
      'Las hormonas liposolubles viajan unidas a albúmina y globulinas (TBG, SHBG, CBG); solo la fracción libre actúa.',
      'La vida media depende de la estructura y de la unión a proteínas: minutos para catecolaminas e insulina, días para la T₄.',
    ],
    sections: [
      {
        id: 'bhs-1',
        number: 1,
        title: 'Síntesis de las hormonas peptídicas',
        keyTerms: ['preprohormona', 'prohormona', 'gránulo de secreción', 'exocitosis', 'Ca²⁺'],
        blocks: [
          {
            type: 'steps',
            title: 'Fases (presentación)',
            steps: [
              'Síntesis: en el núcleo, el gen se transcribe a ARNm.',
              'El ARNm se traduce en los ribosomas del retículo endoplásmico rugoso: se forma la preprohormona.',
              'Encapsulado: se corta el péptido señal (que la dirigió al retículo) y queda la prohormona.',
              'Almacenamiento: en el aparato de Golgi la prohormona se empaqueta en gránulos de secreción, donde enzimas la cortan en la hormona activa.',
              'Secreción: un estímulo aumenta el Ca²⁺ intracelular y los gránulos se fusionan con la membrana: exocitosis.',
            ],
          },
          {
            type: 'definition',
            title: 'Prohormona',
            content: 'Precursor inactivo de una hormona que necesita cortes enzimáticos para activarse, igual que un zimógeno. La preprohormona es la prohormona con su péptido señal.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El péptido C',
            content: 'La proinsulina se corta en insulina y péptido C, que salen del gránulo en la misma cantidad. Como la insulina inyectada no trae péptido C, medirlo permite saber cuánta insulina produce el propio páncreas.',
          },
          {
            type: 'note',
            content: 'Las hormonas esteroideas no siguen este camino: no se codifican directamente en un gen ni pasan por preprohormona. Se forman a partir del colesterol mediante enzimas.',
          },
        ],
      },
      {
        id: 'bhs-2',
        number: 2,
        title: 'Variabilidad de las hormonas proteicas',
        keyTerms: ['splicing alternativo', 'glicosilación', 'isoformas', 'inmunoensayo'],
        blocks: [
          {
            type: 'list',
            title: 'Por qué una hormona puede circular en varias formas (presentación)',
            items: [
              'Splicing alternativo: en el núcleo, el pre-ARNm de un mismo gen puede empalmarse de distintas formas y dar variantes de la hormona (por ejemplo, la GH de 22 y de 20 kDa).',
              'Modificaciones después de la traducción: glicosilación, unión de dos subunidades (dímeros).',
              'Unión a proteínas transportadoras o a anticuerpos en la circulación.',
              'No todas las variantes tienen la misma actividad biológica.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Impacto en el laboratorio',
            content: 'Un inmunoensayo reconoce la hormona con anticuerpos. El laboratorio debe saber qué variantes moleculares detecta su método, porque de eso depende el valor que reporta.',
          },
        ],
      },
      {
        id: 'bhs-3',
        number: 3,
        title: 'Síntesis de las hormonas esteroideas',
        keyTerms: ['colesterol', 'StAR', 'pregnenolona', 'P450scc', '21-hidroxilasa', 'aromatasa'],
        blocks: [
          {
            type: 'list',
            title: 'Generalidades (presentación)',
            items: [
              'Todas derivan del colesterol, que llega de la dieta o se sintetiza en el hígado y viaja en LDL a las glándulas.',
              'Se producen en la corteza suprarrenal y las gónadas (y la placenta).',
              'No se almacenan: se sintetizan cuando hay estímulo.',
            ],
          },
          {
            type: 'steps',
            title: 'Del colesterol a la hormona',
            steps: [
              'La proteína StAR lleva el colesterol a la membrana mitocondrial interna.',
              'La P450scc (CYP11A1, desmolasa) corta la cadena lateral y forma pregnenolona: es el paso limitante.',
              'La pregnenolona pasa al retículo endoplásmico liso, donde otras enzimas (deshidrogenasas e hidroxilasas del citocromo P450) la modifican.',
              'Algunas rutas regresan a la mitocondria para el último paso; la hormona terminada sale a la sangre.',
            ],
          },
          {
            type: 'table',
            title: 'Las ramas de la esteroidogénesis',
            data: {
              headers: ['Producto', 'Ruta resumida', 'Dónde'],
              rows: [
                ['Aldosterona', 'Progesterona → 11-desoxicorticosterona → corticosterona → aldosterona', 'Zona glomerulosa'],
                ['Cortisol', 'Progesterona → (17α-hidroxilasa) 17-hidroxiprogesterona → (21-hidroxilasa) 11-desoxicortisol → cortisol', 'Zona fasciculada'],
                ['Andrógenos', '(17,20-liasa) DHEA → androstenediona → testosterona → (5α-reductasa) dihidrotestosterona', 'Zona reticular, células de Leydig'],
                ['Estrógenos', '(aromatasa) testosterona → estradiol; androstenediona → estrona', 'Ovario, placenta, tejido adiposo'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cuando falta una enzima',
            content: 'Si falta la 21-hidroxilasa, la suprarrenal no forma cortisol ni aldosterona y los precursores se desvían a andrógenos: hiperplasia suprarrenal congénita. Las enzimas de síntesis de esteroides son distintas de las CYP del hígado (como CYP3A4 y CYP2D6) que metabolizan fármacos.',
          },
        ],
      },
      {
        id: 'bhs-4',
        number: 4,
        title: 'Transporte en la sangre',
        keyTerms: ['proteína transportadora', 'fracción libre', 'TBG', 'SHBG', 'CBG', 'albúmina'],
        blocks: [
          {
            type: 'table',
            title: 'Principales proteínas transportadoras',
            data: {
              headers: ['Proteína', 'Transporta', 'Rasgo'],
              rows: [
                ['Albúmina', 'Muchas hormonas liposolubles', 'Poca afinidad, mucha capacidad'],
                ['Globulina transportadora de tiroxina (TBG)', 'T₄ y T₃', 'Alta afinidad'],
                ['Globulina transportadora de hormonas sexuales (SHBG)', 'Testosterona, estradiol', 'Alta afinidad'],
                ['Globulina transportadora de corticosteroides (CBG, transcortina)', 'Cortisol', 'Alta afinidad'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Funciones de las proteínas transportadoras',
            items: [
              'Facilitan el transporte de moléculas poco solubles en agua.',
              'Son específicas para su hormona.',
              'Mientras la hormona está unida, está inactiva; solo la fracción libre entra a la célula y actúa.',
              'Sirven de reservorio: liberan hormona conforme se usa la fracción libre.',
              'Prolongan la vida media al proteger a la hormona de la eliminación.',
              'Casi todas se sintetizan en el hígado.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Hormona total frente a libre',
            content: 'Los estrógenos (embarazo, anticonceptivos orales) aumentan la TBG y la SHBG. Una embarazada puede tener T₄ total alta con T₄ libre normal y sin hipertiroidismo. Por eso, en las hormonas que viajan unidas, el laboratorio debe distinguir la fracción total de la libre y considerar los fármacos.',
          },
        ],
      },
      {
        id: 'bhs-5',
        number: 5,
        title: 'Vida media y eliminación',
        keyTerms: ['vida media', 'eliminación', 'metabolismo hepático'],
        blocks: [
          {
            type: 'definition',
            title: 'Vida media',
            content: 'Tiempo que tarda la concentración de una hormona en la sangre en bajar a la mitad.',
          },
          {
            type: 'list',
            title: 'De qué depende',
            items: [
              'La estructura química (hidrosoluble o liposoluble, tamaño).',
              'La unión a proteínas transportadoras.',
              'El metabolismo en el hígado y la eliminación por riñón o bilis.',
              'Las enzimas que la degradan.',
            ],
          },
          {
            type: 'table',
            title: 'Ejemplos aproximados',
            data: {
              headers: ['Hormona', 'Vida media'],
              rows: [
                ['Catecolaminas (noradrenalina, adrenalina)', '2–3 minutos'],
                ['Insulina', 'Unos 5 minutos'],
                ['Cortisol', 'Alrededor de 1 hora'],
                ['T₃', 'Alrededor de 1 día'],
                ['T₄', 'Alrededor de 7 días'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué la levotiroxina va una vez al día',
            content: 'La T₄ dura unos 7 días en la sangre: basta una dosis diaria y, tras un cambio de dosis, la TSH se vuelve a medir semanas después, cuando la concentración ya se estabilizó.',
          },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-hormonas-aminas-citocinas',
    title: 'Hormonas derivadas de aminoácidos y citocinas',
    subtitle: 'Triptófano → serotonina y melatonina; tirosina → catecolaminas, hormonas tiroideas y melanina; citocinas e interleucinas',
    colorKey: 'bioquimica',
    categoria: 'Bioquímica',
    emoji: '🌙',
    keyPoints: [
      'Las hormonas aminadas derivan de la tirosina y el triptófano; se producen en la médula suprarrenal, la tiroides y la glándula pineal.',
      'Triptófano → 5-hidroxitriptófano → serotonina → N-acetilserotonina → melatonina.',
      'La melatonina se libera con la oscuridad y regula el ciclo sueño-vigilia; la luz, incluida la de las pantallas, la frena.',
      'Tirosina → L-DOPA → dopamina → noradrenalina → adrenalina; también T₃/T₄ y melanina.',
      'Las catecolaminas son hidrosolubles (receptor de membrana); las hormonas tiroideas son liposolubles (receptor nuclear).',
      'Las citocinas son proteínas de señalización de las células inmunitarias; algunas se usan como biomarcadores y como blanco de fármacos.',
    ],
    sections: [
      {
        id: 'bha-1',
        number: 1,
        title: 'Hormonas derivadas de aminoácidos',
        keyTerms: ['tirosina', 'triptófano', 'descarboxilación', 'aminas'],
        blocks: [
          {
            type: 'list',
            title: 'Generalidades (presentación)',
            items: [
              'Derivan de aminoácidos, sobre todo tirosina y triptófano.',
              'Se producen en la médula suprarrenal, la tiroides y la glándula pineal.',
              'Se forman modificando el aminoácido: al quitarle el grupo carboxilo (descarboxilación) queda el grupo amino, por eso se llaman aminas.',
            ],
          },
          {
            type: 'note',
            content: 'Dentro de este grupo hay propiedades distintas: las catecolaminas y la serotonina son hidrosolubles y usan receptores de membrana; las hormonas tiroideas son liposolubles, viajan unidas a proteínas y actúan en receptores nucleares.',
          },
        ],
      },
      {
        id: 'bha-2',
        number: 2,
        title: 'Triptófano: serotonina y melatonina',
        keyTerms: ['serotonina', 'melatonina', 'glándula pineal', 'ritmo circadiano'],
        blocks: [
          {
            type: 'steps',
            title: 'La ruta (presentación)',
            steps: [
              'Triptófano → 5-hidroxitriptófano, por la triptófano hidroxilasa.',
              '5-hidroxitriptófano → serotonina (5-HT), por la descarboxilasa de aminoácidos aromáticos (con vitamina B₆).',
              'Serotonina → N-acetilserotonina, por la N-acetiltransferasa.',
              'N-acetilserotonina → melatonina, por la hidroxiindol-O-metiltransferasa, en la glándula pineal.',
              'La serotonina se degrada por la monoaminooxidasa (MAO) a ácido 5-hidroxiindolacético, que se elimina en la orina.',
            ],
          },
          {
            type: 'comparison',
            title: 'Dos hormonas del mismo aminoácido',
            left: { title: 'Serotonina', items: ['Estado de ánimo, apetito y sueño', 'Motilidad intestinal: la mayor parte del cuerpo está en el intestino', 'Precursora de la melatonina'] },
            right: { title: 'Melatonina', items: ['Se produce en la glándula pineal', 'Sube cuando oscurece', 'Regula el ciclo sueño-vigilia (ritmo circadiano de 24 horas)'] },
          },
          {
            type: 'paragraph',
            content: 'El triptófano es un aminoácido esencial: viene de la dieta (huevo, carne, lácteos, nueces). Su presencia en un alimento no basta para inducir sueño; la regulación del sueño depende sobre todo de la luz y del reloj biológico.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Higiene del sueño',
            content: 'La luz, sobre todo la azul de las pantallas, frena la liberación de melatonina. Por eso se recomienda dejar el celular al menos una hora antes de dormir y dormir en una habitación oscura y sin ruido.',
          },
        ],
      },
      {
        id: 'bha-3',
        number: 3,
        title: 'Tirosina: catecolaminas, hormonas tiroideas y melanina',
        keyTerms: ['dopamina', 'noradrenalina', 'adrenalina', 'T₄', 'T₃', 'tirosinasa', 'melanina'],
        blocks: [
          {
            type: 'steps',
            title: 'Catecolaminas',
            steps: [
              'Tirosina → L-DOPA, por la tirosina hidroxilasa (paso limitante).',
              'L-DOPA → dopamina, por la DOPA descarboxilasa.',
              'Dopamina → noradrenalina, por la dopamina β-hidroxilasa.',
              'Noradrenalina → adrenalina, por la feniletanolamina N-metiltransferasa, sobre todo en la médula suprarrenal.',
            ],
          },
          {
            type: 'table',
            title: 'Los otros derivados',
            data: {
              headers: ['Derivado', 'Cómo se forma', 'Función'],
              rows: [
                ['T₄ y T₃', 'En la tiroglobulina se yodan residuos de tirosina y se acoplan; la T₄ se convierte en T₃, la forma más activa', 'Regulan el metabolismo de lípidos, glúcidos y proteínas, y el gasto energético'],
                ['Melanina', 'En el melanocito, la tirosinasa forma DOPA y dopaquinona → eumelanina (café-negra) o, con cisteína, feomelanina (amarillo-rojiza)', 'Color de piel y cabello; protección contra la radiación ultravioleta'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'La tirosina se obtiene de la dieta (queso, soya, cerdo, pollo, pescado) o a partir de la fenilalanina. Participa en la síntesis de neurotransmisores, hormonas tiroideas y melanina.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cuando falla un paso',
            content: 'En la enfermedad de Parkinson mueren las neuronas que producen dopamina en la sustancia negra; como la dopamina no cruza la barrera hematoencefálica, se da su precursor, la L-DOPA. En el albinismo falla la tirosinasa y no se forma melanina. En la fenilcetonuria falta la enzima que forma tirosina a partir de la fenilalanina. El hipotiroidismo baja el metabolismo y el hipertiroidismo lo acelera.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Bebidas energéticas',
            content: 'La cafeína de las bebidas energéticas estimula el sistema simpático: taquicardia, ansiedad e insomnio. Mezcladas con alcohol enmascaran la sensación de intoxicación.',
          },
        ],
      },
      {
        id: 'bha-4',
        number: 4,
        title: 'Citocinas',
        keyTerms: ['citocina', 'interleucina', 'TNF', 'interferón', 'cadena γ común'],
        blocks: [
          {
            type: 'definition',
            title: 'Citocina',
            content: 'Proteína o glucoproteína de señalización que producen muchas células, sobre todo las del sistema inmune (neutrófilos, monocitos, macrófagos, linfocitos). Actúa sobre la misma célula, sobre células vecinas o a distancia, a través de receptores específicos.',
          },
          {
            type: 'list',
            title: 'Familias y funciones',
            items: [
              'Interleucinas (IL), interferones, factor de necrosis tumoral (TNF), quimiocinas y factores estimulantes de colonias.',
              'Regulan la inflamación y la respuesta inmune.',
              'IL-1, IL-6 y TNF-α actúan sobre el hipotálamo y producen fiebre.',
              'La IL-6 estimula al hígado a producir proteínas de fase aguda, como la proteína C reactiva.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Receptores compartidos',
            content: 'Los receptores de IL-2, IL-4, IL-7, IL-9 y IL-15 comparten una misma cadena, la cadena γ común. Una mutación en ella deja sin señal a todas esas interleucinas y causa una inmunodeficiencia combinada grave ligada al X.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Citocinas en la clínica',
            content: 'Algunas interleucinas se miden como biomarcadores de inflamación (por ejemplo, la IL-6), pero no son diagnósticas por sí solas: se interpretan con la clínica. Varios fármacos biológicos bloquean citocinas, como los anti-TNF y los anti-IL-6 en la artritis reumatoide.',
          },
        ],
      },
    ],
  },
]
