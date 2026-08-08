import type { Topic } from '../types'
import { bioestadisticaTopics } from './bioestadistica-topics'
import { anatomiaUadTopics } from './anatomia-uad-topics'
import { inglesUadTopics } from './ingles-uad-topics'

const anatomyTopics: Topic[] = [
  {
    id: 'digestivo',
    title: 'Aparato Digestivo',
    subtitle: 'Digestión, absorción y eliminación de nutrientes',
    colorKey: 'digestivo',
    emoji: '🫃',
    keyPoints: [
      'La digestión comienza en la boca y se completa principalmente en el intestino delgado.',
      'El intestino delgado (~7m) es el principal sitio de digestión y absorción.',
      'El hígado (~1500g) es central en el metabolismo y producción de bilis.',
      'Conocer enzimas y pH por segmento es clave para entender la digestión.',
      'Los marcadores serológicos permiten diagnosticar el tipo y la fase de hepatitis.',
      'En Hepatitis C, los AAD curan >95% y evitan cirrosis y carcinoma hepatocelular.',
    ],
    sections: [
      {
        id: 'dig-1',
        number: 1,
        title: 'Visión General',
        keyTerms: ['digestión', 'absorción', 'secreción', 'motilidad', 'defensa'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Conjunto de órganos que digieren los alimentos, absorben nutrientes y agua, y eliminan los desechos.',
          },
          {
            type: 'list',
            title: 'Funciones principales',
            items: [
              'DIGESTIÓN: Transformación mecánica y química de los alimentos.',
              'ABSORCIÓN: Paso de nutrientes, agua y electrolitos a la sangre o linfa.',
              'SECRECIÓN: Producción de jugos digestivos, moco, bilis y hormonas.',
              'MOTILIDAD: Peristaltismo, segmentación y control del tránsito.',
              'DEFENSA: Barrera mucosa, ácido, enzimas y microbiota.',
            ],
          },
        ],
      },
      {
        id: 'dig-2',
        number: 2,
        title: 'Órganos del Aparato Digestivo',
        keyTerms: ['hígado', 'vesícula biliar', 'páncreas', 'intestino delgado', 'duodeno', 'yeyuno', 'íleon', 'colon'],
        blocks: [
          {
            type: 'list',
            title: 'Tubo Digestivo (en orden)',
            items: [
              'Boca: Dientes, lengua y glándulas salivales.',
              'Faringe: Conduce el bolo al esófago.',
              'Esófago (25 cm): Transporte por peristaltismo.',
              'Estómago: Almacena y mezcla; secreción de ácido y pepsina.',
              'Intestino Delgado (~7m): Duodeno, yeyuno, íleon — principal sitio de digestión y absorción.',
              'Intestino Grueso (120–160 cm): Colon, recto y ano.',
            ],
          },
          {
            type: 'list',
            title: 'Órganos Accesorios',
            items: [
              'Hígado (~1500g): Produce bilis (600–1000 mL/día). Metabolismo, detoxificación, almacenamiento.',
              'Vesícula biliar: Almacena y concentra bilis (50–70 mL).',
              'Páncreas: Secreción exocrina (enzimas + bicarbonato). Secreción endocrina (insulina, glucagón).',
            ],
          },
        ],
      },
      {
        id: 'dig-3',
        number: 3,
        title: 'Medidas y Datos Clave',
        keyTerms: ['esófago', 'estómago', 'intestino delgado', 'intestino grueso', 'saliva', 'jugo gástrico', 'bilis', 'jugo pancreático'],
        blocks: [
          {
            type: 'table',
            title: 'Longitudes y Capacidades',
            data: {
              headers: ['Estructura', 'Valor'],
              rows: [
                ['Esófago', '25 cm'],
                ['Estómago (capacidad)', '1–1.5 L'],
                ['Intestino delgado', '~7 m'],
                ['Superficie de absorción', '200–250 m²'],
                ['Intestino grueso', '120–160 cm'],
                ['Saliva', '1–1.5 L/día'],
                ['Jugo gástrico', '2–3 L/día'],
                ['Bilis (hígado)', '600–1000 mL/día'],
                ['Jugo pancreático', '1–2 L/día'],
                ['Secreción intestinal', '1–2 L/día'],
              ],
            },
          },
        ],
      },
      {
        id: 'dig-4',
        number: 4,
        title: 'Digestión y Absorción por Segmento',
        keyTerms: ['amilasa', 'pepsina', 'HCl', 'bilis', 'tripsina', 'lipasa', 'factor intrínseco', 'B12', 'disacaridasas'],
        blocks: [
          {
            type: 'table',
            title: 'Resumen por segmento',
            data: {
              headers: ['Segmento', 'pH / Secreción', 'Enzimas', 'Función principal'],
              rows: [
                ['Boca', 'pH 6.2–7.4 / Saliva', 'Amilasa salival, Lipasa lingual', 'Digestión inicial de carbohidratos y grasas'],
                ['Estómago', 'pH 1.5–2.5 / Jugo gástrico', 'HCl, Pepsina, Lipasa gástrica, Factor intrínseco', 'Digestión de proteínas; pepsinógeno → pepsina; absorción de B12'],
                ['Duodeno', 'Neutro / Bilis + HCO₃⁻', 'Sales biliares, HCO₃⁻, Moco', 'Emulsifica grasas, neutraliza ácido'],
                ['Yeyuno', 'Neutro / Jugo pancreático', 'Tripsina, Quimiotripsina, Carbopeptidasa, Amilasa, Disacaridasas', 'Digestión enzimática completa; mayor absorción de nutrientes'],
                ['Íleon', 'Neutro / Jugo intestinal', 'Peptidasas', 'Absorción de vitamina B12 y sales biliares'],
                ['Colon', 'Neutro / Moco', 'Microbiota (fermentación)', 'Absorción de agua y electrolitos; formación de heces; producción de vit. K y B'],
              ],
            },
          },
        ],
      },
      {
        id: 'dig-5',
        number: 5,
        title: 'Procesos Digestivos y Destino de Nutrientes',
        keyTerms: ['carbohidratos', 'proteínas', 'grasas', 'quilomicrones', 'sangre portal', 'vellosidades'],
        blocks: [
          {
            type: 'steps',
            title: 'Secuencia del proceso digestivo',
            steps: [
              'Entrada de alimentos por la boca.',
              'Digestión Mecánica: Masticación, mezcla, segmentación y peristaltismo.',
              'Digestión Química: Acción de enzimas sobre los nutrientes.',
              'Absorción: Paso de nutrientes a sangre o linfa a través de vellosidades.',
              'Defecación: Eliminación de desechos no digeridos.',
            ],
          },
          {
            type: 'list',
            title: 'Destino de los Nutrientes',
            items: [
              'Carbohidratos → Monosacáridos (glucosa, fructosa, galactosa) → Sangre portal → Hígado.',
              'Proteínas → Aminoácidos / dipéptidos → Sangre portal → Hígado.',
              'Grasas → Ácidos grasos + monoglicéridos → Quilomicrones → Linfa → Sangre.',
              'Vitaminas liposolubles (A, D, E, K) → junto con grasas (quilomicrones).',
              'Agua, electrolitos y vitaminas hidrosolubles → Sangre portal.',
            ],
          },
        ],
      },
      {
        id: 'dig-6',
        number: 6,
        title: 'Intestino: Estructura de la Pared',
        keyTerms: ['mucosa', 'submucosa', 'muscular propia', 'serosa', 'plexo de Meissner', 'plexo de Auerbach', 'GALT'],
        blocks: [
          {
            type: 'list',
            title: 'Capas de la pared intestinal (de dentro afuera)',
            items: [
              'Mucosa: Epitelio (enterocitos, células caliciformes, enteroendocrinas), Lámina propia, Muscular de la mucosa.',
              'Submucosa: Vasos sanguíneos y linfáticos, Plexo submucoso (Meissner) — regula secreción.',
              'Muscular propia: Capa circular interna + capa longitudinal externa. Plexo mientérico (Auerbach) — regula motilidad.',
              'Serosa/Peritoneo visceral: Capa más externa.',
            ],
          },
          {
            type: 'list',
            title: 'Funciones del intestino',
            items: [
              'Absorción de nutrientes, agua y electrolitos.',
              'Secreción de moco, enzimas y hormonas.',
              'Defensa inmunológica (GALT — tejido linfoide asociado al intestino, placas de Peyer).',
              'Motilidad intestinal (peristaltismo y segmentación).',
            ],
          },
        ],
      },
      {
        id: 'dig-7',
        number: 7,
        title: 'Microbiota Intestinal',
        keyTerms: ['microbiota', 'disbiosis', 'AGCC', 'butirato', 'probióticos', 'fibra'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Trillones de microorganismos (>1000 especies) que habitan principalmente el colon.',
          },
          {
            type: 'list',
            title: 'Funciones',
            items: [
              'Fermentación de fibra → AGCC (acetato, propionato, butirato) — energía para colonocitos.',
              'Síntesis de vitamina K y algunas del complejo B.',
              'Protección contra patógenos (compite por nutrientes).',
              'Desarrollo y modulación del sistema inmune.',
              'Mantiene integridad de la barrera intestinal.',
            ],
          },
          {
            type: 'list',
            title: 'Factores que alteran la microbiota',
            items: ['Antibióticos', 'Dieta pobre en fibra', 'Infecciones', 'Estrés crónico', 'Enfermedades (EII, DM, etc.)'],
          },
          {
            type: 'note',
            content: 'DISBIOSIS: Desequilibrio de la microbiota → inflamación, SII, obesidad, alergias y enfermedades autoinmunes.',
          },
        ],
      },
      {
        id: 'dig-8',
        number: 8,
        title: 'Hepatitis Virales: Marcadores Serológicos',
        keyTerms: ['hepatitis A', 'hepatitis B', 'hepatitis C', 'hepatitis D', 'hepatitis E', 'HAV', 'HBV', 'HCV', 'AgHBs', 'anti-HBc'],
        blocks: [
          {
            type: 'table',
            title: 'Comparación de hepatitis virales',
            data: {
              headers: ['Virus', 'Transmisión', 'Incubación', 'Cronicidad'],
              rows: [
                ['A (HAV)', 'Fecal-oral (agua/alimentos)', '15–50 días', 'No — cura espontáneamente'],
                ['B (HBV)', 'Sangre, sexual, perinatal', '45–180 días', 'Sí (5–10% adultos, >90% neonatos)'],
                ['C (HCV)', 'Sangre (parenteral)', '2–26 semanas', 'Sí (>70% si no se trata)'],
                ['D (HDV)', 'Sexual, sangre (requiere HBV)', '2–8 semanas', 'Solo con HBV — coinfección más severa'],
                ['E (HEV)', 'Fecal-oral (agua contaminada)', '15–64 días', 'No (excepto inmunocomprometidos)'],
              ],
            },
          },
          {
            type: 'note',
            content: 'HAV y HEV: infecciones agudas autolimitadas. HBV puede cronificarse; riesgo de cirrosis y CHC. HDV: coinfección o sobreinfección en portadores HBV; curso más severo.',
          },
        ],
      },
      {
        id: 'dig-9',
        number: 9,
        title: 'Hepatitis C: Tratamiento Actual (AAD)',
        keyTerms: ['antivirales de acción directa', 'sofosbuvir', 'glecaprevir', 'ledipasvir', 'RVS12', 'genotipo'],
        blocks: [
          {
            type: 'list',
            title: 'Antivirales de Acción Directa (AAD) — ejemplos por genotipo',
            items: [
              'Sofosbuvir + Velpatasvir (12 semanas)',
              'Glecaprevir / Pibrentasvir (8–12 semanas)',
              'Ledipasvir / Sofosbuvir (12 semanas)',
            ],
          },
          {
            type: 'keypoints',
            title: 'Principios generales del tratamiento',
            items: [
              'Tratamiento oral, bien tolerado.',
              'Individualizar según genotipo, carga viral, función hepática y comorbilidades.',
              'No requiere interferón.',
              'Monitorizar: carga viral, función hepática.',
            ],
          },
          {
            type: 'formula',
            formula: 'RVS12 (Respuesta Virológica Sostenida) > 95%',
            description: 'Curación virológica sostenida en la mayoría de genotipos. OBJETIVO: Erradicar el virus, prevenir cirrosis y CHC.',
          },
        ],
      },
      {
        id: 'dig-10',
        number: 10,
        title: 'Enfermedades Frecuentes',
        keyTerms: ['ERGE', 'gastritis', 'úlcera péptica', 'SII', 'Crohn', 'colitis ulcerosa', 'colelitiasis', 'H. pylori'],
        blocks: [
          {
            type: 'table',
            title: 'Patologías digestivas frecuentes',
            data: {
              headers: ['Enfermedad', 'Causa principal', 'Manifestaciones clave'],
              rows: [
                ['ERGE', 'Relajación inapropiada del EEI o hernia hiatal', 'Pirosis, regurgitación, tos nocturna, esofagitis'],
                ['Gastritis', 'H. pylori, AINEs, alcohol', 'Dolor epigástrico, dispepsia, náuseas'],
                ['Úlcera Péptica', 'H. pylori, AINEs — lesión en mucosa gástrica o duodenal', 'Dolor epigástrico, relación con comidas'],
                ['SII', 'Trastorno funcional de motilidad y sensibilidad', 'Dolor abdominal, distensión, alteración del hábito intestinal'],
                ['EII (Crohn / CU)', 'Inflamación crónica del intestino', 'Diarrea crónica, sangre en heces, pérdida de peso'],
                ['Colelitiasis', 'Cálculos en vesícula biliar', 'Cólico biliar, dolor en hipocondrio derecho'],
              ],
            },
          },
        ],
      },
      {
        id: 'dig-11',
        number: 11,
        title: 'Escala de Bristol (Heces)',
        keyTerms: ['escala de Bristol', 'estreñimiento', 'diarrea', 'tránsito intestinal'],
        blocks: [
          {
            type: 'table',
            title: 'Tipos de heces y tránsito intestinal',
            data: {
              headers: ['Tipo', 'Descripción', 'Tránsito'],
              rows: [
                ['Tipo 1', 'Bolitas duras separadas (estreñimiento severo)', 'Muy lento'],
                ['Tipo 2', 'Forma de salchicha grumosa', 'Lento'],
                ['Tipo 3', 'Forma de salchicha con grietas', 'Normal'],
                ['Tipo 4', 'Forma de salchicha suave y lisa', 'Normal'],
                ['Tipo 5', 'Trozos blandos con bordes definidos', 'Rápido'],
                ['Tipo 6', 'Trozos blandos con bordes irregulares', 'Rápido'],
                ['Tipo 7', 'Acuosa, sin sólidos (diarrea)', 'Muy rápido'],
              ],
            },
          },
        ],
      },
    ],
  },

  {
    id: 'urinario',
    title: 'Aparato Urinario y Sistema RAAS',
    subtitle: 'Filtración, regulación y homeostasis del medio interno',
    colorKey: 'urinario',
    emoji: '🫘',
    keyPoints: [
      'TFG normal: ~120 mL/min; TCP reabsorbe ~65% del Na⁺; RAAS mantiene la PA.',
      'Orina final: 1–2 L/día. Flujo plasmático renal: ~600 mL/min.',
      'IECA y ARA II son los fármacos clave para protección renal.',
      'ERC: TFG < 60 por ≥3 meses — conocer causas y factores de progresión.',
      'Diálisis y trasplante son terapias de reemplazo en falla renal avanzada.',
    ],
    sections: [
      {
        id: 'uri-1',
        number: 1,
        title: 'Visión General del Aparato Urinario',
        keyTerms: ['riñón', 'uréter', 'vejiga', 'uretra', 'homeostasis', 'filtración'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El aparato urinario mantiene la homeostasis del medio interno regulando el volumen, la osmolaridad, el pH y la presión arterial.',
          },
          {
            type: 'list',
            title: 'Funciones principales',
            items: [
              'FILTRACIÓN: Elimina desechos nitrogenados y toxinas.',
              'EQUILIBRIO HIDROELECTROLÍTICO: Regula Na⁺, K⁺, Cl⁻, HCO₃⁻, Ca²⁺, PO₄³⁻, agua.',
              'REGULACIÓN ÁCIDO-BASE: Excreta H⁺ y reabsorbe HCO₃⁻.',
              'FUNCIONES ENDOCRINAS: Produce renina, eritropoyetina (EPO) y calcitriol (activa Vit. D).',
            ],
          },
          {
            type: 'table',
            title: 'Datos clave del riñón',
            data: {
              headers: ['Parámetro', 'Valor'],
              rows: [
                ['Riñones', '2 (10–12 cm de longitud)'],
                ['Peso por riñón', '120–150 g/c.u.'],
                ['Nefronas por riñón', '~1 millón'],
                ['Flujo plasmático renal', '~1.1 L/min'],
                ['TFG normal', '~120 mL/min (~180 L/día)'],
                ['Orina final', '1–2 L/día'],
              ],
            },
          },
        ],
      },
      {
        id: 'uri-2',
        number: 2,
        title: 'Riñón: Anatomía Interna',
        keyTerms: ['corteza', 'médula', 'pirámides', 'pelvis renal', 'cáliz', 'arteria renal', 'irrigación'],
        blocks: [
          {
            type: 'list',
            title: 'Zonas del riñón',
            items: [
              'Corteza renal: Contiene glomérulos y túbulos contorneados — principalmente filtración.',
              'Médula renal: Contiene pirámides con asas de Henle y túbulos colectores.',
              'Papila renal: Vértice de cada pirámide que vierte orina a los cálices.',
              'Pelvis renal: Colecta orina y la conduce al uréter.',
            ],
          },
          {
            type: 'list',
            title: 'Irrigación arterial',
            items: [
              'Arteria renal → segmentarias → interlobulares → arqueadas → interlobulillares → arteriola aferente.',
            ],
          },
        ],
      },
      {
        id: 'uri-3',
        number: 3,
        title: 'Nefrona: Unidad Funcional',
        keyTerms: ['glomérulo', 'cápsula de Bowman', 'túbulo contorneado proximal', 'asa de Henle', 'túbulo contorneado distal', 'túbulo colector', 'TCP'],
        blocks: [
          {
            type: 'list',
            title: 'Componentes de la nefrona (~1 millón por riñón)',
            items: [
              '1. Glomérulo: Filtración del plasma. Barrera: endotelio fenestrado + membrana basal glomerular + podocitos.',
              '2. Túbulo contorneado proximal (TCP): Reabsorbe ~65% del Na⁺, casi toda la glucosa, aminoácidos y agua.',
              '3. Asa de Henle: Rama descendente (permeable al agua). Rama ascendente gruesa: reabsorbe Na⁺, K⁺, 2Cl⁻ (cotransportador NKCC2).',
              '4. Túbulo contorneado distal (TCD): Reabsorbe NaCl; regulado por PTH (Ca²⁺), aldosterona (Na⁺, K⁺).',
              '5. Túbulo colector: Reabsorbe agua (ADH) y Na⁺ (aldosterona). Determina concentración final de orina.',
            ],
          },
        ],
      },
      {
        id: 'uri-4',
        number: 4,
        title: 'Formación de la Orina',
        keyTerms: ['filtración glomerular', 'reabsorción tubular', 'secreción tubular', 'excreción'],
        blocks: [
          {
            type: 'steps',
            title: 'Pasos de la formación de orina',
            steps: [
              'FILTRACIÓN GLOMERULAR: Paso de plasma a la cápsula de Bowman. ~180 L/día (sin proteínas ni células). TFG normal: ~120 mL/min.',
              'REABSORCIÓN TUBULAR: Paso de sustancias útiles del túbulo al capilar peritubular. ~178 L/día recuperados.',
              'SECRECIÓN TUBULAR: Paso de sustancias desde la sangre al túbulo (H⁺, K⁺, NH₄⁺, fármacos, creatinina, urea). ~1–2 L/día.',
              'EXCRECIÓN: Eliminación de desechos en la orina final: 1–2 L/día.',
            ],
          },
        ],
      },
      {
        id: 'uri-5',
        number: 5,
        title: 'Transporte Tubular: Resumen',
        keyTerms: ['TCP', 'asa descendente', 'asa ascendente', 'TCD', 'túbulo colector', 'ADH', 'aldosterona', 'PTH'],
        blocks: [
          {
            type: 'table',
            title: 'Transporte por segmento de la nefrona',
            data: {
              headers: ['Segmento', 'Reabsorción principal', 'Secreción principal', 'Regulación'],
              rows: [
                ['TCP (65% Na⁺)', 'Na⁺, Cl⁻, HCO₃⁻, K⁺, fosfato, glucosa, aminoácidos, agua', 'H⁺, NH₄⁺, creatinina, fármacos, ácidos orgánicos', 'Angiotensina II, NHE3, transportadores de contratransporte'],
                ['Asa descendente', 'Agua (75% del segmento)', '—', 'ADH (indirecta)'],
                ['Asa ascendente gruesa', 'Na⁺, K⁺, 2Cl⁻ (25%) — NKCC2', '—', 'ADH (indirecta)'],
                ['TCD temprano', 'NaCl (NCC), Ca²⁺ (↑)', 'H⁺', 'PTH ↑ Ca²⁺'],
                ['TCD tardío / Colector cortical', 'Na⁺ (ENaC), K⁺ (secreción)', 'H⁺, K⁺', 'Aldosterona ↑ Na⁺, ↓ K⁺; Ang II'],
                ['Túbulo colector medular', 'Agua (ADH, AQP2), urea (UT-A1/3)', 'H⁺ (células intercaladas)', 'ADH, aldosterona, ANP'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Hormonas clave',
            items: [
              'ADH (vasopresina): ↑ reabsorción de agua en colector.',
              'Aldosterona (corteza suprarrenal): ↑ reabsorción de Na⁺ y agua; ↑ secreción de K⁺ y H⁺.',
              'PTH: ↑ reabsorción de Ca²⁺ en TCD.',
              'ANP (péptido natriurético auricular): ↓ reabsorción de Na⁺ (efecto natriurético).',
            ],
          },
        ],
      },
      {
        id: 'uri-6',
        number: 6,
        title: 'Filtración Glomerular',
        keyTerms: ['TFG', 'presión hidrostática', 'presión oncótica', 'barrera de filtración', 'podocitos', 'membrana basal'],
        blocks: [
          {
            type: 'list',
            title: 'Barrera de filtración glomerular',
            items: [
              '1. Endotelio fenestrado (poros grandes pero no permiten células).',
              '2. Membrana basal glomerular (carga negativa — repele proteínas).',
              '3. Podocitos y hendiduras de filtración (selectividad por tamaño y carga).',
            ],
          },
          {
            type: 'list',
            title: 'Factores que determinan la TFG',
            items: [
              '↑ Presión hidrostática glomerular → ↑ TFG.',
              '↑ Presión oncótica del plasma → ↓ TFG.',
              '↑ Presión hidrostática capsular → ↓ TFG.',
              'Coeficiente de filtración (Kf).',
            ],
          },
          {
            type: 'table',
            title: 'Valores normales',
            data: {
              headers: ['Parámetro', 'Valor'],
              rows: [
                ['TFG', '~120 mL/min (90–130)'],
                ['Flujo plasmático renal', '~600 mL/min'],
                ['Fracción de filtración', '~20%'],
              ],
            },
          },
        ],
      },
      {
        id: 'uri-7',
        number: 7,
        title: 'Sistema RAAS (Renina-Angiotensina-Aldosterona)',
        keyTerms: ['renina', 'angiotensina', 'aldosterona', 'RAAS', 'mácula densa', 'células yuxtaglomerulares'],
        blocks: [
          {
            type: 'steps',
            title: 'Cascada del RAAS',
            steps: [
              '↓ Filtración renal / ↓ NaCl en mácula densa / ↑ Actividad simpática (β1) → células yuxtaglomerulares liberan RENINA.',
              'Renina convierte Angiotensinógeno (hígado) → Angiotensina I.',
              'ECA (pulmón principalmente) convierte Angiotensina I → Angiotensina II.',
              'Angiotensina II produce: Vasoconstricción arteriolar (↑ PA), ↑ Aldosterona (↑ Na⁺, ↑ agua), ↑ ADH (↑ agua), Sed.',
              'Efecto final: ↑ Volumen extracelular y ↑ Presión arterial → ↑ Perfusión renal.',
            ],
          },
          {
            type: 'note',
            content: 'Regulación negativa: ANP/BNP, ↑ PA, ↑ Na⁺ en mácula densa suprimen el RAAS.',
          },
        ],
      },
      {
        id: 'uri-8',
        number: 8,
        title: 'Fármacos que Actúan en el RAAS',
        keyTerms: ['IECA', 'ARA II', 'espironolactona', 'aliskirén', 'enalapril', 'losartán', 'captopril'],
        blocks: [
          {
            type: 'table',
            title: 'Fármacos del RAAS',
            data: {
              headers: ['Clase', 'Ejemplos', 'Mecanismo', 'Usos clínicos'],
              rows: [
                ['IECA', 'Enalapril, captopril, lisinopril', 'Inhiben ECA → ↓ Ang II → ↓ bradicinina', 'HTA, IC post-IAM, nefropatía diabética, proteinuria'],
                ['ARA II', 'Losartán, valsartán, candesartán', 'Bloquean receptor AT₁ de Ang II', 'Mismos que IECA (sin ↑ bradicinina — menos tos)'],
                ['Antagonistas aldosterona', 'Espironolactona, eplerenona', 'Bloquean receptor mineralocorticoide', 'IC, hiperaldosteronismo, HTA resistente'],
                ['Inhibidor de renina', 'Aliskirén', 'Inhibe directamente la renina', 'HTA (uso limitado)'],
              ],
            },
          },
        ],
      },
      {
        id: 'uri-9',
        number: 9,
        title: 'Enfermedad Renal Crónica (ERC)',
        keyTerms: ['ERC', 'TFG', 'creatinina', 'proteinuria', 'IECA', 'diálisis', 'trasplante', 'estadios ERC'],
        blocks: [
          {
            type: 'definition',
            title: 'Definición de ERC',
            content: 'Daño renal estructural o funcional con TFG < 60 mL/min/1.73 m² durante ≥ 3 meses.',
          },
          {
            type: 'list',
            title: 'Manejo general',
            items: [
              'Control de PA y glucemia.',
              'Dieta: ↓ sal, ↓ proteína (0.8 g/kg/día), control de fósforo y potasio.',
              'IECA/ARA II si hay proteinuria.',
              'Evitar nefrotóxicos.',
              'Tratar anemia, acidosis, alteraciones óseas y electrolíticas.',
            ],
          },
          {
            type: 'comparison',
            title: 'Terapias de reemplazo renal',
            left: {
              title: 'Hemodiálisis',
              items: ['3 veces/semana, 3–5 h por sesión', 'Membrana semipermeable extracorpórea', 'Remueve toxinas y exceso de agua'],
            },
            right: {
              title: 'Diálisis Peritoneal',
              items: ['Diálisis continua en domicilio', 'Membrana peritoneal como filtro', 'Mayor autonomía del paciente'],
            },
          },
          {
            type: 'note',
            content: 'Trasplante renal: Mejor opción para pacientes seleccionados con ERC estadio 5.',
          },
        ],
      },
      {
        id: 'uri-10',
        number: 10,
        title: 'Trastornos Ácido-Base y Electrolíticos',
        keyTerms: ['acidosis metabólica', 'alcalosis metabólica', 'hiperkalemia', 'hipokalemia', 'hiponatremia', 'hipernatremia', 'HCO3'],
        blocks: [
          {
            type: 'list',
            title: 'Trastornos ácido-base renales',
            items: [
              'ACIDOSIS METABÓLICA (↓ HCO₃⁻): Causas — ERC, diarrea, acidosis tubular renal, cetoacidosis. Riñón: ↓ excreción de H⁺ o reabsorción de HCO₃⁻.',
              'ALCALOSIS METABÓLICA (↑ HCO₃⁻): Causas — vómitos, diuréticos, hiperaldosteronismo. Riñón: ↑ pérdida de H⁺ y retención de HCO₃⁻.',
            ],
          },
          {
            type: 'table',
            title: 'Alteraciones electrolíticas frecuentes',
            data: {
              headers: ['Alteración', 'Valor', 'Causas principales'],
              rows: [
                ['Hiperkalemia', '> 5.1 mEq/L', 'ERC, IECA/ARA II, espironolactona, acidosis, lisis celular'],
                ['Hipokalemia', '< 3.5 mEq/L', 'Diuréticos, vómitos, diarrea, hiperaldosteronismo'],
                ['Hiponatremia', '< 135 mEq/L', 'SIADH, insuficiencia cardíaca, diuréticos'],
                ['Hipernatremia', '> 145 mEq/L', 'Pérdida de agua libre, diabetes insípida'],
              ],
            },
          },
        ],
      },
    ],
  },

  {
    id: 'reproductor',
    title: 'Aparato Reproductor y Ciclo Menstrual',
    subtitle: 'Reproducción, gametos, hormonas y ciclo menstrual',
    colorKey: 'reproductor',
    emoji: '🧬',
    keyPoints: [
      'Testículos producen espermatozoides y testosterona; ovarios producen óvulos y hormonas.',
      'El ciclo menstrual promedia 28 días con ovulación ≈ día 14.',
      'hCG mantiene el cuerpo lúteo y el embarazo en las primeras semanas.',
      'El RAAS regula la presión arterial y el balance de Na⁺ y agua durante el embarazo.',
      'La prevención y detección precoz mejoran la salud reproductiva.',
    ],
    sections: [
      {
        id: 'rep-1',
        number: 1,
        title: 'Función General',
        keyTerms: ['gametogénesis', 'fecundación', 'desarrollo', 'hormonas sexuales', 'reproducción'],
        blocks: [
          {
            type: 'list',
            title: 'Funciones del aparato reproductor',
            items: [
              'GAMETOGÉNESIS: Producción de espermatozoides u óvulos.',
              'HORMONAL: Secreción de hormonas sexuales y reguladoras.',
              'FECUNDACIÓN: Unión de gametos para formar un cigoto.',
              'DESARROLLO: Embarazo, nutrición fetal y parto.',
            ],
          },
        ],
      },
      {
        id: 'rep-2',
        number: 2,
        title: 'Aparato Reproductor Masculino',
        keyTerms: ['testículo', 'espermatogénesis', 'epidídimo', 'conducto deferente', 'próstata', 'testosterona', 'FSH', 'LH'],
        blocks: [
          {
            type: 'list',
            title: 'Estructuras y funciones',
            items: [
              'Testículos: Producen espermatozoides (túbulos seminíferos) y testosterona (células de Leydig).',
              'Vesículas seminales: Secretan líquido rico en fructosa (~60% del volumen seminal).',
              'Conductos deferentes: Transportan espermatozoides desde el epidídimo.',
              'Próstata: Secreta líquido prostático alcalino con enzimas (PSA).',
              'Glándulas bulbouretrales (de Cowper): Moco lubricante preeyaculatorio.',
              'Uretra: Conducto de salida de orina y semen.',
            ],
          },
          {
            type: 'paragraph',
            title: 'Espermatogénesis (≈ 64–72 días)',
            content: 'Espermatogonia (2n) → Espermatocito primario (2n) → Espermatocito secundario (n) → Espermátide (n) → Espermatozoide (n). Regulada por FSH (maduración) y LH (estimula testosterona via células de Leydig).',
          },
        ],
      },
      {
        id: 'rep-3',
        number: 3,
        title: 'Aparato Reproductor Femenino',
        keyTerms: ['ovario', 'ovogénesis', 'trompa de Falopio', 'útero', 'cérvix', 'endometrio', 'estrógenos', 'progesterona'],
        blocks: [
          {
            type: 'list',
            title: 'Estructuras y funciones',
            items: [
              'Ovarios: Producen óvulos y hormonas sexuales: estrógenos (folículos) y progesterona (cuerpo lúteo).',
              'Trompas de Falopio: Lugar habitual de fecundación (ampolla).',
              'Útero: Implantación y desarrollo del embrión.',
              'Cérvix: Produce moco cervical — función protectora y reproductiva.',
              'Vagina: Canal del parto y cópula.',
            ],
          },
          {
            type: 'list',
            title: 'Ovogénesis',
            items: [
              'Ovogonia (2n) → Ovocito primario (2n) → Ovocito secundario (n) + 1er corpúsculo polar → Óvulo (n) + corpúsculo polar.',
              'La ovulación libera el ovocito secundario (completado solo si hay fecundación).',
            ],
          },
        ],
      },
      {
        id: 'rep-4',
        number: 4,
        title: 'Comparación Masculino vs Femenino',
        keyTerms: ['gametos', 'producción continua', 'producción cíclica', 'testosterona', 'estrógenos', 'pubertad'],
        blocks: [
          {
            type: 'table',
            title: 'Diferencias clave',
            data: {
              headers: ['Característica', 'Masculino', 'Femenino'],
              rows: [
                ['Gametos', 'Espermatozoides (n)', 'Óvulos (n)'],
                ['Producción', 'Continua (millones/día)', 'Cíclica (~1/mes)'],
                ['Sitio de producción', 'Testículos (túbulos seminíferos)', 'Ovarios (folículos ováricos)'],
                ['Inicio de función', 'Pubertad', 'Pubertad'],
                ['Hormonas principales', 'Testosterona', 'Estrógenos y progesterona'],
                ['Conductos', 'Epidídimo → conducto deferente → uretra', 'Trompas → útero → cérvix → vagina'],
                ['Función principal', 'Fertilizar', 'Recibir, gestar y dar a luz'],
              ],
            },
          },
        ],
      },
      {
        id: 'rep-5',
        number: 5,
        title: 'Ciclo Menstrual (28 días promedio)',
        keyTerms: ['ciclo menstrual', 'hipotálamo', 'hipófisis', 'GnRH', 'FSH', 'LH', 'ovario', 'endometrio'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Interacción hipotálamo-hipófisis-ovario-útero. El hipotálamo libera GnRH (pulsátil) → Hipófisis anterior libera FSH y LH → Ovario responde con maduración folicular, ovulación y formación del cuerpo lúteo → El útero (endometrio) responde con cambios cíclicos.',
          },
          {
            type: 'table',
            title: 'Fases del ciclo menstrual',
            data: {
              headers: ['Fase', 'Días aprox.', 'Eventos principales', 'Hormonas dominantes'],
              rows: [
                ['Menstrual', '1–5', 'Descamación del endometrio (sangrado menstrual)', '↓ Estrógenos, ↓ Progesterona'],
                ['Folicular (Proliferativa)', '1–13', 'FSH estimula crecimiento folicular y producción de estrógenos; proliferación endometrial', '↑ Estrógenos, FSH moderada'],
                ['Ovulatoria', '≈ 14', 'Pico de LH → ruptura del folículo y liberación del ovocito secundario', 'Pico de LH (FSH menor)'],
                ['Lútea (Secretora)', '15–28', 'Cuerpo lúteo produce progesterona. Endometrio secretor preparado para implantación', '↑ Progesterona, ↑ Estrógenos'],
                ['Sin fecundación', '—', 'Degeneración del cuerpo lúteo → caída de hormonas → menstruación', '↓ Progesterona, ↓ Estrógenos'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Duración promedio: 28 días (rango 21–35 días). La ovulación ocurre ~14 días ANTES del inicio de la siguiente menstruación.',
          },
        ],
      },
      {
        id: 'rep-6',
        number: 6,
        title: 'Fecundación e Implantación',
        keyTerms: ['fecundación', 'cigoto', 'segmentación', 'mórula', 'blastocisto', 'implantación', 'trofoblasto'],
        blocks: [
          {
            type: 'steps',
            title: 'Proceso de fecundación e implantación',
            steps: [
              'FECUNDACIÓN: Ocurre en la ampolla de la trompa. Espermatozoide + ovocito → cigoto (2n).',
              'SEGMENTACIÓN: El cigoto se divide mientras se desplaza hacia el útero.',
              'MÓRULA → BLASTOCISTO: Llega al útero (día 5–6).',
              'IMPLANTACIÓN: El blastocisto se implanta en el endometrio (día 6–10).',
              'El trofoblasto produce hCG → mantiene el cuerpo lúteo → progesterona alta → no hay menstruación.',
            ],
          },
        ],
      },
      {
        id: 'rep-7',
        number: 7,
        title: 'Hormonas del Embarazo',
        keyTerms: ['hCG', 'progesterona', 'estrógenos', 'hPL', 'relaxina', 'trofoblasto', 'placenta'],
        blocks: [
          {
            type: 'table',
            title: 'Hormonas clave del embarazo',
            data: {
              headers: ['Hormona', 'Función principal'],
              rows: [
                ['hCG (gonadotropina coriónica humana)', 'Producida por trofoblasto. Mantiene cuerpo lúteo y producción de progesterona (1er trimestre). Base del test de embarazo.'],
                ['Progesterona', 'Mantiene endometrio, inhibe contracciones uterinas, prepara mamas.'],
                ['Estrógenos', 'Crecimiento uterino, flujo uteroplacentario, desarrollo mamario.'],
                ['hPL (lactógeno placentario)', 'Preparación metabólica materna — resistencia a la insulina.'],
                ['Relaxina', 'Relaja ligamentos pélvicos y cuello uterino antes del parto.'],
              ],
            },
          },
        ],
      },
      {
        id: 'rep-8',
        number: 8,
        title: 'Patologías Frecuentes',
        keyTerms: ['SOP', 'endometriosis', 'miomas', 'hipogonadismo', 'prostatitis', 'cáncer de próstata', 'PSA'],
        blocks: [
          {
            type: 'table',
            title: 'Patologías reproductivas frecuentes',
            data: {
              headers: ['Condición', 'Características principales'],
              rows: [
                ['SOP (Síndrome de Ovario Poliquístico)', 'Hiperandrogenismo, anovulación, quistes ováricos múltiples, resistencia a la insulina.'],
                ['Endometriosis', 'Endometrio fuera del útero → dolor, infertilidad. Dismenorrea severa.'],
                ['Miomas uterinos', 'Tumores benignos del músculo uterino → sangrado, dolor, infertilidad.'],
                ['Hipogonadismo masculino', 'Baja testosterona → libido ↓, infertilidad, pérdida de masa muscular.'],
                ['Prostatitis', 'Inflamación prostática → dolor, disuria, fiebre.'],
                ['Cáncer de próstata', 'Aumenta con la edad → tamizaje con PSA + tacto rectal.'],
              ],
            },
          },
        ],
      },
      {
        id: 'rep-9',
        number: 9,
        title: 'Anticoncepción: Métodos Principales',
        keyTerms: ['anticonceptivos', 'condón', 'DIU', 'implante', 'inyectable', 'pastillas anticonceptivas', 'eficacia'],
        blocks: [
          {
            type: 'table',
            title: 'Métodos anticonceptivos y eficacia',
            data: {
              headers: ['Método', 'Tipo', 'Eficacia típica'],
              rows: [
                ['Condón masculino / femenino', 'Barrera', '85%'],
                ['Anticonceptivos orales combinados', 'Hormonal', '91%'],
                ['DIU (cobre)', 'No hormonal', '>99%'],
                ['DIU con levonorgestrel', 'DIU hormonal', '>99%'],
                ['Implante subdérmico', 'Hormonal', '>99%'],
                ['Inyectables (DMPA)', 'Hormonal', '94%'],
              ],
            },
          },
        ],
      },
    ],
  },

  {
    id: 'circulatorio',
    title: 'Sistema Circulatorio, ECG y Anemias',
    subtitle: 'Corazón, sangre, electrocardiograma y trastornos hematológicos',
    colorKey: 'circulatorio',
    emoji: '❤️',
    keyPoints: [
      'El GC depende de FC y VS; en reposo ≈ 5 L/min.',
      'Dos circuitos: pulmonar (VD→AI) y sistémico (VI→AD).',
      'En el ECG: P (aurículas), QRS (ventrículos), T (repolarización).',
      'STEMI = emergencia médica — reperfusión < 90 min mejora pronóstico.',
      'Ferropénica = microcítica, ferritina baja. Megaloblástica = macrocítica, déficit B12/folato.',
      'El sistema linfático defiende y el timo se atrofia tras la pubertad.',
    ],
    sections: [
      {
        id: 'cir-1',
        number: 1,
        title: 'Función y Componentes',
        keyTerms: ['transporte', 'protección', 'regulación', 'homeostasis', 'corazón', 'vasos', 'sangre'],
        blocks: [
          {
            type: 'list',
            title: 'Funciones del sistema circulatorio',
            items: [
              'TRANSPORTE: Lleva O₂, nutrientes, hormonas y elimina CO₂ y desechos.',
              'PROTECCIÓN: Coagulación, defensa inmunológica.',
              'REGULACIÓN: pH, temperatura corporal, volumen y presión arterial.',
              'HOMEOSTASIS: Mantiene el equilibrio interno del organismo.',
            ],
          },
          {
            type: 'list',
            title: 'Componentes',
            items: ['Corazón', 'Vasos sanguíneos: arterias, venas, capilares', 'Sangre'],
          },
        ],
      },
      {
        id: 'cir-2',
        number: 2,
        title: 'Circuitos de la Circulación',
        keyTerms: ['circuito pulmonar', 'circuito sistémico', 'ventrículo derecho', 'ventrículo izquierdo', 'aurícula'],
        blocks: [
          {
            type: 'comparison',
            left: {
              title: 'Circuito Pulmonar (Baja presión)',
              items: [
                'VD → Arteria pulmonar → Pulmones → AI.',
                'Intercambio gaseoso: CO₂ sale / O₂ entra.',
                'Sangre oxigenada llega a la AI.',
              ],
            },
            right: {
              title: 'Circuito Sistémico (Alta presión)',
              items: [
                'VI → Aorta → Tejidos → AD.',
                'Distribuye O₂ y nutrientes a todos los tejidos.',
                'Sangre desoxigenada llega a la AD.',
              ],
            },
          },
          {
            type: 'steps',
            title: 'Flujo del sangre completo',
            steps: [
              'AD → VD → Arteria pulmonar → Pulmones → Venas pulmonares → AI → VI → Aorta → Tejidos → Venas cavas → AD.',
            ],
          },
        ],
      },
      {
        id: 'cir-3',
        number: 3,
        title: 'Corazón: Anatomía y Válvulas',
        keyTerms: ['válvula tricúspide', 'válvula pulmonar', 'válvula mitral', 'válvula aórtica', 'aurícula', 'ventrículo'],
        blocks: [
          {
            type: 'table',
            title: 'Válvulas cardíacas',
            data: {
              headers: ['Válvula', 'Ubicación', 'Función'],
              rows: [
                ['Tricúspide', 'AD → VD', 'Evita reflujo a la aurícula derecha'],
                ['Pulmonar', 'VD → A. pulmonar', 'Evita reflujo a la aurícula derecha'],
                ['Mitral (bicúspide)', 'AI → VI', 'Evita reflujo a la aurícula izquierda'],
                ['Aórtica', 'VI → Aorta', 'Evita reflujo al ventrículo izquierdo'],
              ],
            },
          },
        ],
      },
      {
        id: 'cir-4',
        number: 4,
        title: 'Hemodinámica Básica',
        keyTerms: ['gasto cardíaco', 'volumen sistólico', 'frecuencia cardíaca', 'presión arterial', 'resistencia vascular'],
        blocks: [
          {
            type: 'formula',
            formula: 'GC = FC × VS',
            description: 'Gasto Cardíaco = Frecuencia Cardíaca × Volumen Sistólico. Normal en reposo: ~5 L/min.',
          },
          {
            type: 'formula',
            formula: 'PA = GC × RVP',
            description: 'Presión Arterial = Gasto Cardíaco × Resistencia Vascular Periférica.',
          },
          {
            type: 'table',
            title: 'Valores normales',
            data: {
              headers: ['Parámetro', 'Valor normal'],
              rows: [
                ['Volumen sanguíneo total', '5–6 L'],
                ['Gasto cardíaco en reposo', '~5 L/min'],
                ['Volumen sistólico', '70 mL'],
                ['Frecuencia cardíaca', '60–100 lpm'],
                ['Presión arterial normal', '~120/80 mmHg'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Distribución del gasto cardíaco',
            items: [
              'Coronarias: 4–5%',
              'Cerebro: 12–15%',
              'Riñones: 20–25%',
              'Músculo esquelético: 15–20%',
              'Hígado: 20–25%',
              'Otros: 10–15%',
            ],
          },
        ],
      },
      {
        id: 'cir-5',
        number: 5,
        title: 'Electrocardiograma (ECG) Normal',
        keyTerms: ['onda P', 'complejo QRS', 'onda T', 'intervalo PR', 'segmento ST', 'QTc', 'ritmo sinusal'],
        blocks: [
          {
            type: 'table',
            title: 'Componentes del ECG normal',
            data: {
              headers: ['Onda/Segmento', 'Significado', 'Valor normal'],
              rows: [
                ['Onda P', 'Despolarización de aurículas', 'Duración < 120 ms'],
                ['Intervalo PR', 'Conducción AV (auriculoventricular)', '120–200 ms'],
                ['Complejo QRS', 'Despolarización de ventrículos', '< 120 ms'],
                ['Segmento ST', 'Meseta del potencial de acción ventricular — isoeléctrico', 'Línea isoeléctrica (sin elevación/depresión)'],
                ['Onda T', 'Repolarización de ventrículos', 'Positiva en DII, aVF'],
                ['Intervalo QT', 'Despolarización + repolarización ventricular', 'QTc < 440 ms (H), < 460 ms (M)'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Ritmo sinusal: P positiva en DII y aVF. Ejes eléctricos normales: entre −30° y +90°. Frecuencia: 60–100 lpm.',
          },
        ],
      },
      {
        id: 'cir-6',
        number: 6,
        title: 'Alteraciones ECG Importantes',
        keyTerms: ['STEMI', 'NSTEMI', 'bloqueo AV', 'elevación ST', 'onda T invertida', 'IAM', 'fibrilación', 'ICP'],
        blocks: [
          {
            type: 'table',
            title: 'Patrones ECG clave',
            data: {
              headers: ['Alteración', 'Hallazgo en ECG', 'Significado clínico'],
              rows: [
                ['IAM con elevación ST (STEMI)', 'Elevación del ST en derivaciones contiguas', 'EMERGENCIA — reperfusión < 90 min'],
                ['IAM sin elevación ST (NSTEMI)', 'Depresión ST o inversión de onda T', 'Síndrome coronario agudo sin oclusión total'],
                ['Bloqueo AV completo', 'Disociación AV (P y QRS independientes)', 'Marcapasos urgente frecuentemente'],
                ['Hipertrofia ventricular izq.', 'Voltaje alto en DI, aVL, V5–V6', 'HTA crónica, estenosis aórtica'],
                ['Hipokalemia', 'Onda U prominente, aplana T', 'Monitorizar K⁺ sérico'],
                ['Hipercalcemia', 'QT corto', 'Hipercalcemia severa'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Tratamiento STEMI',
            items: [
              'ICP primaria (preferida): Angioplastia + stent < 90 minutos.',
              'Fibrinólisis: Si no hay ICP disponible, dentro de las primeras horas.',
              'Objetivo: Reperfusión rápida para minimizar daño miocárdico.',
            ],
          },
        ],
      },
      {
        id: 'cir-7',
        number: 7,
        title: 'Sistema Linfático',
        keyTerms: ['ganglios linfáticos', 'bazo', 'timo', 'linfa', 'MALT', 'inmunidad', 'amígdalas'],
        blocks: [
          {
            type: 'list',
            title: 'Funciones del sistema linfático',
            items: [
              'Drenaje de líquido intersticial.',
              'Absorción de grasas (quilomicrones desde intestino).',
              'Transporte de linfocitos.',
              'Defensa inmunológica.',
            ],
          },
          {
            type: 'list',
            title: 'Órganos linfáticos',
            items: [
              'PRIMARIOS (generación): Médula ósea, Timo (se atrofia tras la pubertad).',
              'SECUNDARIOS (activación): Ganglios linfáticos, Bazo, Tejido linfoide asociado a mucosas (MALT).',
              'Amígdalas: Primera línea de defensa (atrofia tras la pubertad).',
            ],
          },
        ],
      },
      {
        id: 'cir-8',
        number: 8,
        title: 'Células y Componentes de la Sangre',
        keyTerms: ['eritrocitos', 'leucocitos', 'plaquetas', 'plasma', 'hemoglobina', 'hematocrito', 'albúmina', 'fibrinógeno'],
        blocks: [
          {
            type: 'table',
            title: 'Elementos formes de la sangre',
            data: {
              headers: ['Elemento', 'Valores normales', 'Función'],
              rows: [
                ['Eritrocitos (glóbulos rojos)', '4–6 millones/μL', 'Transporte de O₂ y CO₂ (hemoglobina)'],
                ['Leucocitos (glóbulos blancos)', '4,000–11,000/μL', 'Defensa inmunológica'],
                ['Plaquetas (trombocitos)', '150,000–400,000/μL', 'Hemostasia y coagulación'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Composición del plasma (55% de la sangre)',
            items: [
              'Agua: 90–92%',
              'Proteínas: Albúmina (oncótica), Globulinas (inmunidad), Fibrinógeno (coagulación).',
              'Electrolitos, nutrientes, hormonas, desechos.',
            ],
          },
          {
            type: 'note',
            content: 'Eritrocitos 45% (hematocrito), Buffy coat <1% (leucocitos + plaquetas), Plasma 55%.',
          },
        ],
      },
      {
        id: 'cir-9',
        number: 9,
        title: 'Anemia Ferropénica vs Megaloblástica',
        keyTerms: ['anemia ferropénica', 'anemia megaloblástica', 'VCM', 'ferritina', 'transferrina', 'TIBC', 'vitamina B12', 'folato', 'microcítica', 'macrocítica'],
        blocks: [
          {
            type: 'table',
            title: 'Comparación de anemias',
            data: {
              headers: ['Característica', 'Ferropénica', 'Megaloblástica (B12 / Folato)'],
              rows: [
                ['Causa', 'Déficit de hierro', 'Déficit de Vit B12 o folato'],
                ['VCM', 'Bajo (<80 fL) — microcítica', 'Alto (>100 fL) — macrocítica'],
                ['Ferritina', '↓ Disminuida', 'Normal o ↑'],
                ['Hierro sérico', 'Disminuido', 'Normal o ↑'],
                ['TIBC / Transferrina', '↑ Aumentada', 'Normal o ↓'],
                ['Reticulocitos', 'Disminuidos', '↓ o Normal'],
                ['Frotis periférico', 'Microcitos, hipocromos', 'Macro-ovalocitos, hipersegmentación PMN'],
                ['Clínica típica', 'Fatiga, palidez, pica, caída de cabello', 'Glositis, parestesias, síntomas neurológicos (B12)'],
                ['Tratamiento', 'Hierro oral o IV', 'B12 IM / Folato VO'],
              ],
            },
          },
        ],
      },
      {
        id: 'cir-10',
        number: 10,
        title: 'Hemoglobinopatías y Grupos Sanguíneos',
        keyTerms: ['anemia falciforme', 'talasemia', 'grupo sanguíneo', 'sistema ABO', 'factor Rh', 'transfusión', 'anticuerpos'],
        blocks: [
          {
            type: 'comparison',
            left: {
              title: 'Anemia Falciforme (Hb SS)',
              items: [
                'Mutación gen β de globina (Glu6Val).',
                'Eritrocitos en forma de hoz.',
                'Crisis vasoclusivas, dolor, anemia hemolítica.',
                'Tratamiento: hidroxiurea, transfusiones, quelación de hierro.',
              ],
            },
            right: {
              title: 'Talasemias (α o β)',
              items: [
                'Disminución de síntesis de cadenas de globina.',
                'Microcitosis, hipocromía.',
                '↑ HbA₂ (β-talasemia).',
                'Tratamiento: soporte, transfusiones, quelación de hierro.',
              ],
            },
          },
          {
            type: 'table',
            title: 'Sistema ABO y Rh',
            data: {
              headers: ['Grupo', 'Antígeno (eritrocito)', 'Anticuerpo (plasma)', 'Factor Rh'],
              rows: [
                ['A', 'A', 'Anti-B', 'Rh+ tiene antígeno D'],
                ['B', 'B', 'Anti-A', 'Rh− no tiene antígeno D'],
                ['AB', 'A y B', 'Ninguno', 'Receptor universal (AB+)'],
                ['O', '—', 'Anti-A y Anti-B', 'Donador universal (O−)'],
              ],
            },
          },
        ],
      },
    ],
  },

  {
    id: 'respiratorio',
    title: 'Aparato Respiratorio',
    subtitle: 'Intercambio gaseoso, ventilación y regulación ácido-base',
    colorKey: 'respiratorio',
    emoji: '🫁',
    keyPoints: [
      'La función principal es el intercambio de gases: O₂ entra a la sangre y CO₂ sale.',
      'Volumen corriente (VT) = 500 mL; Capacidad vital (CV) = 4600 mL.',
      'FEV₁/FVC < 0.70 indica patrón obstructivo (asma, EPOC).',
      'El efecto Bohr regula la liberación de O₂ según el pH, CO₂ y temperatura.',
      '~300 millones de alvéolos con una superficie total de ~70 m².',
      'Las defensas de la vía aérea y el control ventilatorio mantienen la homeostasis.',
    ],
    sections: [
      {
        id: 'res-1',
        number: 1,
        title: 'Visión General',
        keyTerms: ['ventilación', 'intercambio gaseoso', 'defensa', 'regulación', 'fonación', 'olfato'],
        blocks: [
          {
            type: 'list',
            title: 'Funciones del aparato respiratorio',
            items: [
              'VENTILACIÓN: Entrada y salida de aire.',
              'INTERCAMBIO GASEOSO: O₂ hacia la sangre y CO₂ hacia el aire.',
              'DEFENSA: Filtración, moco, cilios, macrófagos, IgA.',
              'REGULACIÓN: Control del pH (CO₂) y de la temperatura.',
              'FONACIÓN Y OLFATO: Laringe (voz) y epitelio olfatorio.',
            ],
          },
        ],
      },
      {
        id: 'res-2',
        number: 2,
        title: 'Ruta del Aire: Nariz → Alvéolos',
        keyTerms: ['fosas nasales', 'faringe', 'laringe', 'tráquea', 'bronquios', 'bronquiolos', 'alvéolos'],
        blocks: [
          {
            type: 'steps',
            title: 'Vía aérea en orden',
            steps: [
              'Fosas nasales: Filtra, calienta y humedifica el aire.',
              'Faringe → Laringe (cuerdas vocales): Fonación.',
              'Tráquea: Conducto principal (cartílago en C).',
              'Bronquios principales → Bronquios lobares → Bronquios segmentarios → Bronquiolos → Bronquiolos terminales.',
              'Conductos alveolares → Alvéolos: ~300 millones, superficie ~70 m².',
            ],
          },
        ],
      },
      {
        id: 'res-3',
        number: 3,
        title: 'Pulmones y Pleuras',
        keyTerms: ['pulmón derecho', 'pulmón izquierdo', 'pleura parietal', 'pleura visceral', 'espacio pleural', 'presión intrapleural', 'lóbulos'],
        blocks: [
          {
            type: 'comparison',
            left: {
              title: 'Pulmón Derecho (3 lóbulos)',
              items: ['Lóbulo superior', 'Lóbulo medio', 'Lóbulo inferior'],
            },
            right: {
              title: 'Pulmón Izquierdo (2 lóbulos)',
              items: ['Lóbulo superior', 'Lóbulo inferior (+ língula)', 'Incisura cardíaca'],
            },
          },
          {
            type: 'list',
            title: 'Pleuras',
            items: [
              'Pleura parietal: Recubre la cavidad torácica.',
              'Pleura visceral: Recubre el pulmón.',
              'Espacio pleural: Líquido lubricante entre ambas pleuras.',
              'Función: Reduce la fricción; mantiene la adherencia pulmón-pared torácica.',
              'Presión intrapleural negativa (−5 cmH₂O): Mantiene los pulmones expandidos.',
            ],
          },
        ],
      },
      {
        id: 'res-4',
        number: 4,
        title: 'Volúmenes y Capacidades Pulmonares',
        keyTerms: ['volumen corriente', 'VRI', 'VRE', 'VR', 'capacidad vital', 'capacidad pulmonar total', 'CRF'],
        blocks: [
          {
            type: 'table',
            title: 'Volúmenes y capacidades pulmonares (adulto sano)',
            data: {
              headers: ['Parámetro', 'Abreviatura', 'Valor aprox.', 'Definición'],
              rows: [
                ['Volumen corriente', 'VT', '500 mL', 'Aire que entra o sale en una respiración tranquila'],
                ['Volumen de reserva inspiratoria', 'VRI', '3000 mL', 'Aire adicional que puede inhalarse tras una inspiración normal'],
                ['Volumen de reserva espiratoria', 'VRE', '1100 mL', 'Aire adicional que puede espirarse tras una espiración normal'],
                ['Volumen residual', 'VR', '1200 mL', 'Aire que permanece tras una espiración máxima'],
                ['Capacidad inspiratoria', 'CI', '3500 mL', 'VT + VRI'],
                ['Capacidad residual funcional', 'CRF', '2300 mL', 'VRE + VR'],
                ['Capacidad vital', 'CV', '4600 mL', 'VRI + VT + VRE'],
                ['Capacidad pulmonar total', 'CPT', '5800 mL', 'CV + VR'],
              ],
            },
          },
        ],
      },
      {
        id: 'res-5',
        number: 5,
        title: 'Espirometría',
        keyTerms: ['FVC', 'FEV1', 'FEV1/FVC', 'patrón obstructivo', 'patrón restrictivo', 'asma', 'EPOC', 'fibrosis pulmonar'],
        blocks: [
          {
            type: 'formula',
            formula: 'FEV₁/FVC < 0.70 = Patrón obstructivo',
            description: 'FVC: Capacidad vital forzada. FEV₁: Volumen espirado en el primer segundo. La relación FEV₁/FVC es el índice clave para el diagnóstico.',
          },
          {
            type: 'table',
            title: 'Interpretación espirométrica',
            data: {
              headers: ['Patrón', 'FEV₁/FVC', 'FEV₁', 'FVC', 'Ejemplos'],
              rows: [
                ['Normal', '≥ 0.70', 'Normal', 'Normal', 'Sano'],
                ['Obstructivo', '< 0.70', 'Disminuido', 'Normal o ↓', 'Asma, EPOC'],
                ['Restrictivo', '≥ 0.70', 'Disminuido', 'Disminuido', 'Fibrosis, cifoescoliosis'],
                ['Mixto', '< 0.70', 'Disminuido', 'Disminuido', 'EPOC avanzado, fibrosis + EPOC'],
              ],
            },
          },
        ],
      },
      {
        id: 'res-6',
        number: 6,
        title: 'Intercambio Gaseoso',
        keyTerms: ['difusión', 'presión parcial', 'PAO2', 'PaCO2', 'alvéolo', 'capilar', 'membrana alveolo-capilar'],
        blocks: [
          {
            type: 'list',
            title: 'Datos clave del intercambio',
            items: [
              '~300 millones de alvéolos; superficie total: ~70 m².',
              'Grosor de la membrana respiratoria: ~0.5 μm.',
              'Difusión por gradientes de presión parcial.',
              'O₂ difunde del alvéolo → sangre capilar.',
              'CO₂ difunde de la sangre capilar → alvéolo.',
            ],
          },
          {
            type: 'table',
            title: 'Presiones parciales (mmHg)',
            data: {
              headers: ['Gas', 'Aire alveolar (PAO₂)', 'Sangre venosa', 'Sangre arterial'],
              rows: [
                ['O₂', '100 mmHg', '40 mmHg', '95 mmHg'],
                ['CO₂', '40 mmHg', '46 mmHg', '40 mmHg'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Transporte de gases en sangre',
            items: [
              'O₂: 98.5% unido a Hb (oxihemoglobina) — 1.5% disuelto en plasma.',
              'CO₂: 70% como HCO₃⁻ — 20% como carbamino-Hb — 10% disuelto.',
            ],
          },
        ],
      },
      {
        id: 'res-7',
        number: 7,
        title: 'Curva de Disociación Hb-O₂ (Efecto Bohr)',
        keyTerms: ['efecto Bohr', 'curva de disociación', 'oxihemoglobina', '2,3-BPG', 'pH', 'temperatura', 'CO2'],
        blocks: [
          {
            type: 'comparison',
            left: {
              title: 'Desplazamiento a la DERECHA (↑ descarga de O₂)',
              items: [
                '↑ CO₂',
                '↓ pH (acidosis)',
                '↑ Temperatura',
                '↑ 2,3-BPG',
                'Ej.: ejercicio, fiebre, altitud.',
              ],
            },
            right: {
              title: 'Desplazamiento a la IZQUIERDA (↑ afinidad Hb-O₂)',
              items: [
                '↓ CO₂',
                '↑ pH (alcalosis)',
                '↓ Temperatura',
                '↓ 2,3-BPG',
                'Ej.: alcalosis, hipotermia, conservación de órganos.',
              ],
            },
          },
        ],
      },
      {
        id: 'res-8',
        number: 8,
        title: 'Control de la Respiración',
        keyTerms: ['centro respiratorio', 'bulbo raquídeo', 'centro apnéustico', 'quimiorreceptores', 'PaCO2', 'PaO2', 'pH'],
        blocks: [
          {
            type: 'list',
            title: 'Centros respiratorios',
            items: [
              'Corteza cerebral: Control voluntario de la respiración.',
              'Centro dorsales: Modulan el ritmo básico.',
              'Bulbo raquídeo: Grupo dorsal (inspira); Grupo ventral (espira).',
            ],
          },
          {
            type: 'list',
            title: 'Estímulos que aumentan la ventilación',
            items: [
              '↑ PaCO₂ (principal estímulo — quimiorreceptores centrales).',
              '↓ PaO₂ < 60 mmHg (quimiorreceptores periféricos).',
              '↓ pH (acidosis).',
              'Ejercicio.',
              'Dolor, fiebre.',
            ],
          },
        ],
      },
      {
        id: 'res-9',
        number: 9,
        title: 'Aplicaciones Clínicas Rápidas',
        keyTerms: ['hipoventilación', 'hiperventilación', 'EPOC', 'asma', 'SDRA', 'acidosis respiratoria', 'alcalosis respiratoria'],
        blocks: [
          {
            type: 'table',
            title: 'Síndromes respiratorios clínicos',
            data: {
              headers: ['Condición', 'Mecanismo', 'Ejemplo'],
              rows: [
                ['Hipoventilación', '↑ PaCO₂ → ↓ PaO₂; acidosis respiratoria', 'SNC deprimido, EPOC avanzado'],
                ['Hiperventilación', '↓ PaCO₂; alcalosis respiratoria', 'Ansiedad, dolor, sepsis temprana'],
                ['EPOC (Obstructivo Crónico)', 'Obstrucción crónica, inflamación y destrucción alveolar; FEV₁/FVC < 0.70', 'Tabaquismo crónico'],
                ['Asma', 'Obstrucción reversible, broncoconstricción; variabilidad del flujo espiratorio', 'Alergia, ejercicio, humo'],
                ['SDRA', 'Daño alveolar difuso, hipoxemia refractaria; PaO₂/FiO₂ < 300', 'Sepsis, neumonía grave, trauma'],
              ],
            },
          },
        ],
      },
      {
        id: 'res-10',
        number: 10,
        title: 'Gases en la Sangre: Valores Normales',
        keyTerms: ['gasometría', 'pH', 'PaO2', 'PaCO2', 'HCO3', 'SaO2', 'acidosis', 'alcalosis'],
        blocks: [
          {
            type: 'table',
            title: 'Valores de gasometría arterial normal',
            data: {
              headers: ['Parámetro', 'Sangre Arterial', 'Sangre Venosa Mixta'],
              rows: [
                ['pH', '7.35–7.45', '7.31–7.41'],
                ['PaO₂', '80–100 mmHg', '35–45 mmHg'],
                ['PaCO₂', '35–45 mmHg', '41–51 mmHg'],
                ['HCO₃⁻', '22–26 mEq/L', '24–28 mEq/L'],
                ['SaO₂', '95–100%', '60–80%'],
              ],
            },
          },
          {
            type: 'formula',
            formula: 'PAO₂ = FiO₂ × (Patm − PH₂O) − PaCO₂ / R',
            description: 'Ecuación Alveolar. FiO₂: fracción inspirada de O₂ (0.21 al nivel del mar). Patm: presión atmosférica (760 mmHg). PH₂O: presión de vapor de agua (47 mmHg). R: cociente respiratorio (0.8).',
          },
        ],
      },
    ],
  },

  {
    id: 'locomotor',
    title: 'Sistema Locomotor',
    subtitle: 'Huesos, músculos y articulaciones — movimiento y soporte',
    colorKey: 'locomotor',
    emoji: '🦴',
    keyPoints: [
      'El sistema locomotor permite movimiento, soporte, protección y homeostasis.',
      '206 huesos en el adulto; ~650 músculos (~40% del peso corporal).',
      'Tendones unen músculo-hueso; ligamentos unen hueso-hueso y estabilizan.',
      'Las articulaciones sinoviales permiten gran movilidad con estabilidad y lubricación.',
      'La osteoporosis aumenta el riesgo de fracturas — FRAX y DEXA son herramientas clave.',
    ],
    sections: [
      {
        id: 'loc-1',
        number: 1,
        title: 'Visión General',
        keyTerms: ['soporte', 'movimiento', 'protección', 'almacenamiento', 'hematopoyesis', 'calcio', 'médula ósea'],
        blocks: [
          {
            type: 'list',
            title: 'Funciones del sistema locomotor',
            items: [
              'SOPORTE: Da forma y sostén al cuerpo.',
              'MOVIMIENTO: Permite la locomoción.',
              'PROTECCIÓN: Protege órganos vitales (cráneo → cerebro, tórax → corazón/pulmones).',
              'ALMACENAMIENTO: Reservorio de Ca²⁺ y P.',
              'HEMATOPOYESIS: Producción de células sanguíneas en médula ósea roja.',
            ],
          },
        ],
      },
      {
        id: 'loc-2',
        number: 2,
        title: 'Esqueleto Humano: 206 Huesos',
        keyTerms: ['cráneo', 'tórax', 'columna vertebral', 'miembros superiores', 'miembros inferiores', '206 huesos'],
        blocks: [
          {
            type: 'table',
            title: 'Distribución ósea',
            data: {
              headers: ['Región', 'Número de huesos'],
              rows: [
                ['Cráneo (neurocráneo + viscerocráneo)', '8 + 14 = 22'],
                ['Tórax (esternón + costillas)', '1 + 24 = 25'],
                ['Columna vertebral', '26'],
                ['Miembros superiores (cintura + brazo + mano)', '60'],
                ['Miembros inferiores (cintura pélvica + muslo + pierna + pie)', '60'],
                ['TOTAL', '206 huesos'],
              ],
            },
          },
        ],
      },
      {
        id: 'loc-3',
        number: 3,
        title: 'Tipos de Hueso',
        keyTerms: ['hueso largo', 'hueso corto', 'hueso plano', 'hueso irregular', 'sesamoideo', 'cortical', 'esponjoso', 'hidroxiapatita'],
        blocks: [
          {
            type: 'list',
            title: 'Clasificación morfológica',
            items: [
              'LARGO (ej. fémur): Predomina la longitud. Epífisis, diáfisis, metáfisis.',
              'CORTO (ej. huesos del carpo): Dimensiones similares en todos los ejes.',
              'PLANO (ej. esternón): Delgados y protectores.',
              'IRREGULAR (ej. vértebras): Formas complejas.',
              'SESAMOIDEO (ej. rótula): Dentro de tendones — protegen y mejoran la mecánica.',
            ],
          },
          {
            type: 'list',
            title: 'Composición del hueso',
            items: [
              '50% mineral (hidroxiapatita — Ca₁₀(PO₄)₆(OH)₂) — aporta rigidez.',
              '30% matriz orgánica (colágeno tipo I) — aporta flexibilidad.',
              '20% agua.',
            ],
          },
        ],
      },
      {
        id: 'loc-4',
        number: 4,
        title: 'Tipos de Músculo',
        keyTerms: ['músculo estriado esquelético', 'músculo cardíaco', 'músculo liso', 'voluntario', 'involuntario', 'sarcómero', 'actina', 'miosina'],
        blocks: [
          {
            type: 'table',
            title: 'Comparación de tipos musculares',
            data: {
              headers: ['Característica', 'Estriado Esquelético', 'Estriado Cardíaco', 'Liso'],
              rows: [
                ['Localización', 'Unido a huesos', 'Pared del corazón (miocardio)', 'Pared de vísceras y vasos sanguíneos'],
                ['Control', 'Voluntario (SN somático)', 'Involuntario (SNA)', 'Involuntario (SNA, hormonas, factores locales)'],
                ['Morfología', 'Fibras largas, cilíndricas, multinucleadas, estriadas', 'Fibras ramificadas, 1–2 núcleos centrales, estriadas, discos intercalares', 'Fibras fusiformes, 1 núcleo central, no estriadas'],
                ['Función', 'Movimiento, postura, producción de calor', 'Contracción rítmica propulsa la sangre', 'Movimiento de vísceras, vasoconstricción, peristalsis'],
                ['Ejemplos', 'Bíceps, cuádriceps, diafragma', 'Miocardio', 'Intestino, útero, bronquios, vasos'],
              ],
            },
          },
        ],
      },
      {
        id: 'loc-5',
        number: 5,
        title: 'Tendones vs Ligamentos',
        keyTerms: ['tendón', 'ligamento', 'tejido conjuntivo', 'colágeno', 'Aquiles', 'ligamento cruzado', 'cicatrización'],
        blocks: [
          {
            type: 'comparison',
            left: {
              title: 'Tendón',
              items: [
                'Une músculo con hueso.',
                'Tejido conjuntivo denso regular.',
                'Muy resistente a la tracción.',
                'Poco vascularizado (cicatrización lenta).',
                'Ej: Tendón de Aquiles, del bíceps.',
              ],
            },
            right: {
              title: 'Ligamento',
              items: [
                'Une un hueso con hueso.',
                'Tejido conjuntivo denso regular.',
                'Estabiliza articulaciones.',
                'Más vascularizado que los tendones.',
                'Ej: Ligamento cruzado anterior (rodilla).',
              ],
            },
          },
        ],
      },
      {
        id: 'loc-6',
        number: 6,
        title: 'Articulaciones',
        keyTerms: ['articulación sinovial', 'articulación fibrosa', 'articulación cartilaginosa', 'diartrosis', 'sinartrosis', 'cápsula articular', 'líquido sinovial'],
        blocks: [
          {
            type: 'table',
            title: 'Clasificación de articulaciones',
            data: {
              headers: ['Tipo', 'Movilidad', 'Ejemplos'],
              rows: [
                ['Fibrosas (Sinartrosis)', 'Inmóviles', 'Suturas del cráneo, sindesmosis (radio-cúbito distal)'],
                ['Cartilaginosas (Anfiartrosis)', 'Semimóviles', 'Sínfisis del pubis, discos intervertebrales'],
                ['Sinoviales (Diartrosis)', 'Muy móviles — con cavidad sinovial', 'Hombro, rodilla, cadera, codo'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Tipos de articulaciones sinoviales',
            items: [
              'PLANA (artrodia): Deslizamiento — ej. intercarpianas.',
              'BISAGRA (gínglimo): Flexión-extensión — ej. rodilla, codo.',
              'PIVOTE (trocoide): Rotación — ej. atlantoaxial.',
              'CONDÍLEA (elipsoidea): Flexión-extensión, abducción-aducción — ej. radiocarpianas.',
              'EN SILLA DE MONTAR (selar): Múltiples movimientos — ej. trapeciometacarpiana del pulgar.',
              'ENARTROSIS (esferoidea): Todos los movimientos — ej. hombro, cadera.',
            ],
          },
        ],
      },
      {
        id: 'loc-7',
        number: 7,
        title: 'Fibra Muscular: Contracción',
        keyTerms: ['sarcómero', 'actina', 'miosina', 'troponina', 'tropomiosina', 'placa motora', 'ACh', 'Ca2+', 'ATP'],
        blocks: [
          {
            type: 'steps',
            title: 'Mecanismo de contracción muscular (Teoría del filamento deslizante)',
            steps: [
              'Potencial de acción llega a la placa motora.',
              'Liberación de acetilcolina (ACh).',
              'Despolarización del sarcolema y túbulos T.',
              'Liberación de Ca²⁺ del retículo sarcoplasmático.',
              'Ca²⁺ se une a la troponina → desplaza tropomiosina → expone sitios activos de actina.',
              'Formación de puentes actina-miosina (ATP-dependiente).',
              'Deslizamiento de filamentos → contracción.',
              'RELAJACIÓN: Recaptación de Ca²⁺ por el retículo sarcoplasmático y disociación de puentes.',
            ],
          },
        ],
      },
      {
        id: 'loc-8',
        number: 8,
        title: 'Osteoporosis',
        keyTerms: ['osteoporosis', 'densitometría', 'DEXA', 'T-score', 'FRAX', 'bifosfonatos', 'denosumab', 'teriparatida', 'calcio', 'vitamina D'],
        blocks: [
          {
            type: 'definition',
            title: 'Definición',
            content: 'Enfermedad esquelética sistémica caracterizada por disminución de la densidad ósea y deterioro de la microarquitectura → ↑ riesgo de fracturas.',
          },
          {
            type: 'table',
            title: 'Densitometría ósea (DEXA) — T-score',
            data: {
              headers: ['Diagnóstico', 'T-score'],
              rows: [
                ['Normal', 'T-score ≥ −1.0'],
                ['Osteopenia', '−2.5 < T-score < −1.0'],
                ['Osteoporosis', 'T-score ≤ −2.5'],
                ['Osteoporosis grave', 'T-score ≤ −2.5 + fractura'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Tratamiento farmacológico',
            items: [
              'ANTIRRESORTIVOS: Bifosfonatos (alendronato, risedronato, ibandronato, ácido zoledrónico); Denosumab (anti-RANKL).',
              'ANABÓLICOS: Teriparatida (PTH 1–34) — indicada en osteoporosis grave.',
              'SUPLEMENTACIÓN: Calcio 1000–1200 mg/día; Vitamina D 800–2000 UI/día.',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'nervioso',
    title: 'Sistema Nervioso Central y Periférico',
    subtitle: 'Integración, neurotransmisión y enfermedades neurológicas',
    colorKey: 'nervioso',
    emoji: '🧠',
    keyPoints: [
      'SNC: procesa y coordina. SNP: conecta SNC con el cuerpo.',
      'El equilibrio del SNA mantiene la homeostasis del organismo.',
      'Los neurotransmisores median todas las funciones del SNC y SNP.',
      'Entender la fisiopatología guía el tratamiento eficaz y seguro.',
      'La BHE protege al SNC y regula el paso de sustancias.',
    ],
    sections: [
      {
        id: 'ner-1',
        number: 1,
        title: 'Visión General: SNC y SNP',
        keyTerms: ['SNC', 'SNP', 'encéfalo', 'médula espinal', 'nervios craneales', 'nervios espinales', 'aferente', 'eferente'],
        blocks: [
          {
            type: 'comparison',
            left: {
              title: 'SNC (Sistema Nervioso Central)',
              items: [
                'Encéfalo + Médula espinal.',
                'Integra, procesa y coordina la información.',
                'Centro de control del organismo.',
                'Funciones: pensamiento, memoria, emoción, sensación, percepción, movimiento.',
              ],
            },
            right: {
              title: 'SNP (Sistema Nervioso Periférico)',
              items: [
                'Nervios craneales (12 pares) + espinales (31 pares) + Ganglios + Receptores.',
                'Conecta el SNC con el resto del cuerpo.',
                'AFERENTE (sensitivo): lleva información al SNC.',
                'EFERENTE (motor): lleva órdenes del SNC al cuerpo.',
              ],
            },
          },
        ],
      },
      {
        id: 'ner-2',
        number: 2,
        title: 'Encéfalo: Estructuras Principales',
        keyTerms: ['corteza cerebral', 'hipotálamo', 'tálamo', 'cerebelo', 'tronco encefálico', 'ganglios basales', 'cuerpo calloso'],
        blocks: [
          {
            type: 'table',
            title: 'Estructuras encefálicas y funciones',
            data: {
              headers: ['Estructura', 'Función principal'],
              rows: [
                ['Corteza cerebral', 'Cognición, lenguaje, memoria, percepción, movimiento voluntario.'],
                ['Ganglios basales', 'Movimiento habitual y control motor aprendido.'],
                ['Tálamo', 'Estación de relevo sensorial (excepto olfato) hacia la corteza.'],
                ['Hipotálamo', 'Homeostasis: temperatura, hambre, sed, ritmos circadianos, control endocrino.'],
                ['Tronco encefálico', 'Funciones vitales: respiración, FC, PA. Mesencéfalo, puente (protuberancia), bulbo raquídeo.'],
                ['Cerebelo', 'Coordinación, equilibrio, precisión y aprendizaje motor.'],
                ['Cuerpo calloso', 'Comisura que conecta ambos hemisferios cerebrales.'],
              ],
            },
          },
          {
            type: 'note',
            content: 'MÉDULA ESPINAL: Conduce impulsos entre encéfalo y cuerpo. Reflejos espinales (independientes del encéfalo).',
          },
        ],
      },
      {
        id: 'ner-3',
        number: 3,
        title: 'Arquitectura de la Neurona',
        keyTerms: ['soma', 'axón', 'dendritas', 'vaina de mielina', 'nodos de Ranvier', 'sinapsis', 'neurotransmisor', 'potencial de acción'],
        blocks: [
          {
            type: 'list',
            title: 'Componentes de la neurona',
            items: [
              'Dendritas: Reciben señales de otras neuronas o receptores.',
              'Soma (cuerpo celular): Procesa la información; contiene el núcleo.',
              'Axón: Conduce el impulso nervioso alejándose del soma.',
              'Vaina de mielina: Aislante lipídico; acelera la conducción (saltatorio).',
              'Nodos de Ranvier: Interrupciones de la mielina — sitios de conducción saltatoria.',
              'Terminales axónicas: Liberan neurotransmisores en la sinapsis.',
            ],
          },
          {
            type: 'steps',
            title: 'Sinapsis química',
            steps: [
              'Llegada del potencial de acción al terminal presináptico.',
              'Entrada de Ca²⁺.',
              'Exocitosis de vesículas con neurotransmisor.',
              'Neurotransmisor se une a receptor postsináptico.',
              'Generación de respuesta excitatoria o inhibitoria.',
            ],
          },
        ],
      },
      {
        id: 'ner-4',
        number: 4,
        title: 'Sistema Nervioso Autónomo (SNA)',
        keyTerms: ['simpático', 'parasimpático', 'lucha o fuga', 'reposo y digestión', 'ACh', 'norepinefrina', 'ganglio'],
        blocks: [
          {
            type: 'table',
            title: 'Simpático vs Parasimpático',
            data: {
              headers: ['Efecto', 'Simpático (Lucha o Fuga)', 'Parasimpático (Reposo y Digestión)'],
              rows: [
                ['Pupilas', 'Dilatación (midriasis)', 'Constricción (miosis)'],
                ['Corazón', '↑ FC y ↑ fuerza de contracción', '↓ FC y ↓ fuerza de contracción'],
                ['Pulmones', 'Broncodilatación', 'Broncoconstricción'],
                ['Tubo digestivo', '↓ Motilidad gastrointestinal, ↓ Secreciones', '↑ Motilidad gastrointestinal, ↑ Secreciones'],
                ['Hígado/Metabolismo', '↑ Glucogenólisis, ↑ Glucogenogénesis', '↑ Almacenamiento de energía (glucogénesis)'],
                ['Vejiga', 'Relaja detrusor, Contrae esfínter interno', 'Contrae detrusor, Relaja esfínter interno'],
                ['Genitales', 'Eyaculación', 'Erección'],
              ],
            },
          },
        ],
      },
      {
        id: 'ner-5',
        number: 5,
        title: 'Neurotransmisores Principales',
        keyTerms: ['acetilcolina', 'norepinefrina', 'dopamina', 'serotonina', 'GABA', 'glutamato', 'endorfinas'],
        blocks: [
          {
            type: 'table',
            title: 'Neurotransmisores y funciones',
            data: {
              headers: ['Neurotransmisor', 'Función principal', 'Vías / Ubicación clave'],
              rows: [
                ['Acetilcolina (ACh)', 'Contracción muscular, atención, aprendizaje, SNA (pregaglionares, parasimpático posganglionar)', 'Unión neuromuscular, corteza, hipocampo, sistema límbico, ganglios autónomos'],
                ['Norepinefrina (NE)', 'Alerta, atención, respuesta al estrés, vasoconstricción', 'Locus cerúleo → corteza, tálamo, hipotálamo, médula espinal'],
                ['Dopamina (DA)', 'Control del movimiento, recompensa, motivación, funciones ejecutivas', 'Sustancia negra, área tegmental ventral → estriado, corteza prefrontal, sistema límbico'],
                ['Serotonina (5-HT)', 'Estado de ánimo, sueño, apetito, modulación del dolor', 'Núcleos del rafe → corteza, hipocampo, tálamo, asta dorsal'],
                ['GABA (ácido γ-aminobutírico)', 'Principal neurotransmisor inhibidor; reduce excitabilidad neuronal', 'Corteza, cerebelo, ganglios basales, asta dorsal'],
                ['Glutamato', 'Principal neurotransmisor excitador; aprendizaje y memoria', 'Todo el SNC (sinapsis excitadoras)'],
              ],
            },
          },
        ],
      },
      {
        id: 'ner-6',
        number: 6,
        title: 'Barrera Hematoencefálica (BHE)',
        keyTerms: ['barrera hematoencefálica', 'BHE', 'uniones estrechas', 'astrocitos', 'pericitos', 'transporte selectivo', 'glucosa', 'L-DOPA'],
        blocks: [
          {
            type: 'list',
            title: 'Características de la BHE',
            items: [
              'Endotelio continuo con uniones estrechas (sin fenestras).',
              'Membrana basal.',
              'Pericitos y astrocitos (pie de astrocito).',
              'Bomba de P-gp: limita el paso de muchas sustancias.',
            ],
          },
          {
            type: 'list',
            title: 'Transporte selectivo',
            items: [
              'SÍ pasan libremente: O₂, CO₂, esteroides liposolubles, etanol.',
              'GLUT1: entrada de glucosa al SNC.',
              'Aminoácidos esenciales: transportadores específicos.',
              'NO cruzan libremente: proteínas, la mayoría de fármacos, dopamina.',
            ],
          },
          {
            type: 'note',
            content: 'La levodopa (L-DOPA) cruza la BHE por un transportador de aminoácidos grandes neutros (LAT1). La dopamina NO cruza la BHE — por eso se usa L-DOPA en el Parkinson.',
          },
        ],
      },
      {
        id: 'ner-7',
        number: 7,
        title: 'Parkinson: Fisiopatología y Clínica',
        keyTerms: ['Parkinson', 'dopamina', 'sustancia negra', 'estriado', 'levodopa', 'carbidopa', 'temblor', 'rigidez', 'bradicinesia'],
        blocks: [
          {
            type: 'paragraph',
            title: 'Fisiopatología',
            content: 'Degeneración de neuronas dopaminérgicas en la Sustancia Negra pars compacta. ↓ Dopamina en el Estriado (núcleo caudado y putamen) → alteración de los circuitos de los ganglios basales.',
          },
          {
            type: 'list',
            title: 'Clínica — Tétrada Cardinal',
            items: [
              'Temblor de reposo (3–6 Hz) — pill-rolling.',
              'Rigidez (rueda dentada).',
              'Bradicinesia (lentitud).',
              'Inestabilidad postural.',
              'Otros: hipomimia, micrografía, trastornos del sueño, depresión.',
            ],
          },
          {
            type: 'list',
            title: 'Tratamiento',
            items: [
              'Levodopa + carbidopa (gold standard): precursor de dopamina que cruza la BHE.',
              'Agonistas dopaminérgicos (Pramipexol, Ropinirol): estimulan receptores de dopamina.',
              'Inhibidores MAO-B (Selegilina, Rasagilina): ↓ degradación de dopamina.',
              'Estimulación cerebral profunda (casos seleccionados).',
            ],
          },
        ],
      },
      {
        id: 'ner-8',
        number: 8,
        title: 'Miastenia Gravis',
        keyTerms: ['miastenia gravis', 'anti-AChR', 'unión neuromuscular', 'acetilcolina', 'inhibidores AChE', 'neostigmina', 'timoma', 'timo'],
        blocks: [
          {
            type: 'paragraph',
            title: 'Fisiopatología',
            content: 'Enfermedad autoinmune mediada por anticuerpos contra el receptor nicotínico de acetilcolina (AChR) en la unión neuromuscular. ↓ Número de receptores → falla en la transmisión neuromuscular excitadora → debilidad fluctuante.',
          },
          {
            type: 'list',
            title: 'Clínica',
            items: [
              'Debilidad muscular fluctuante — empeora con el ejercicio, mejora con el descanso.',
              'Ptosis palpebral, diplopía (frecuentes).',
              'Disartria, disfagia, disnea.',
              'Debilidad proximal (extremidades).',
              'Fatigabilidad (empeora con uso).',
            ],
          },
          {
            type: 'list',
            title: 'Tratamiento',
            items: [
              'Inhibidores de AChE (neostigmina, piridostigmina): ↑ ACh en la hendidura → mejoran la transmisión.',
              'Inmunosupresores: corticoides, azatioprina.',
              'Timectomía (si timoma o hiperplasia tímica).',
              'Inmunoglobulinas IV o plasmaféresis en crisis.',
            ],
          },
        ],
      },
      {
        id: 'ner-9',
        number: 9,
        title: 'Nervios Craneales (12 Pares)',
        keyTerms: ['nervio olfatorio', 'nervio óptico', 'nervio oculomotor', 'nervio vago', 'nervio facial', 'nervio trigémino', 'pares craneales'],
        blocks: [
          {
            type: 'table',
            title: 'Los 12 pares craneales',
            data: {
              headers: ['Par', 'Nombre', 'Tipo', 'Función principal'],
              rows: [
                ['I', 'Olfatorio', 'Sensitivo', 'Olfato'],
                ['II', 'Óptico', 'Sensitivo', 'Visión'],
                ['III', 'Oculomotor', 'Motor / Parasimpático', 'Movimiento ocular, elevación del párpado, miosis'],
                ['IV', 'Troclear', 'Motor', 'Músculo oblicuo superior'],
                ['V', 'Trigémino', 'Mixto', 'Sensibilidad facial, masticación'],
                ['VI', 'Abducens', 'Motor', 'Músculo recto lateral (movimiento ocular lateral)'],
                ['VII', 'Facial', 'Mixto / Parasimpático', 'Expresión facial, gusto 2/3 anteriores, lágrima, saliva'],
                ['VIII', 'Vestibulococlear', 'Sensitivo', 'Audición y equilibrio'],
                ['IX', 'Glosofaríngeo', 'Mixto', 'Deglución, voz, vísceras torácicas y abdominales, gusto 1/3 posterior'],
                ['X', 'Vago', 'Mixto / Parasimpático', 'Deglución, voz, vísceras torácicas y abdominales'],
                ['XI', 'Accesorio', 'Motor', 'ECM y trapecio'],
                ['XII', 'Hipogloso', 'Motor', 'Movimientos de la lengua'],
              ],
            },
          },
        ],
      },
      {
        id: 'ner-10',
        number: 10,
        title: 'Tipos de Fibras Nerviosas',
        keyTerms: ['fibra Aα', 'fibra Aβ', 'fibra Aδ', 'fibra C', 'mielina', 'velocidad de conducción', 'dolor', 'propiocepción'],
        blocks: [
          {
            type: 'table',
            title: 'Clasificación de fibras nerviosas',
            data: {
              headers: ['Tipo', 'Diámetro (μm)', 'Mielina', 'Velocidad (m/s)', 'Función'],
              rows: [
                ['Aα', '12–20', 'Sí', '70–120', 'Motora (músculo esquelético), Propiocepción muscular'],
                ['Aβ', '5–12', 'Sí', '30–70', 'Tacto, presión, vibración'],
                ['Aδ', '2–5', 'Sí (poco)', '5–30', 'Dolor rápido (agudo, bien localizado), Temperatura fría'],
                ['B', '< 3', 'Sí', '3–15', 'Preganglionares autonómicas'],
                ['C', '0.2–1.5', 'No', '0.5–2', 'Dolor lento (urente, difuso), Temperatura calor, fibras posganglionares SNA'],
              ],
            },
          },
        ],
      },
    ],
  },
]

export const topics: Topic[] = [...anatomiaUadTopics, ...inglesUadTopics, ...anatomyTopics, ...bioestadisticaTopics]
