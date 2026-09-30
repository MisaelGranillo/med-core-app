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
]
