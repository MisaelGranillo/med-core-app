/*
 * anatomyHotspots.ts — Regiones interactivas del visor 2D
 *
 * ViewBox de referencia: "0 0 400 900"
 * Coordenadas calibradas al esquema SVG en AnatomyViewer2D.tsx
 * Origen (0,0) = esquina superior izquierda del SVG
 *
 * Cada hotspot usa una elipse: cx/cy = centro, rx/ry = radios
 * Las dimensiones aproximan la región anatómica real en el esquema.
 */

export interface Hotspot {
  id: string
  nombre_es: string
  nombre_lat: string
  sistema: 'esqueletico' | 'muscular' | 'organos'
  vistas: ('anterior' | 'posterior')[]
  shape: 'ellipse'
  cx: number
  cy: number
  rx: number
  ry: number
  descripcion: string
  funciones: string[]
  medlex_sistema: string
}

export const hotspots: Hotspot[] = [

  // ════════════════════════════════════════════════════════════
  // SISTEMA ESQUELÉTICO (10)
  // ════════════════════════════════════════════════════════════

  {
    id: 'craneo',
    nombre_es: 'Cráneo',
    nombre_lat: 'Cranium',
    sistema: 'esqueletico',
    vistas: ['anterior', 'posterior'],
    shape: 'ellipse',
    cx: 200, cy: 73, rx: 66, ry: 68,
    descripcion:
      'Estructura ósea que conforma la cabeza y protege el encéfalo. ' +
      'Compuesto por 8 huesos craneales (frontal, parietales, temporales, occipital, esfenoides y etmoides) ' +
      'y 14 huesos faciales articulados.',
    funciones: [
      'Protección del encéfalo y las meninges.',
      'Soporte de los órganos de los sentidos.',
      'Punto de inserción de músculos masticatorios y cervicales.',
    ],
    medlex_sistema: 'Nervioso',
  },

  {
    id: 'columna-vertebral',
    nombre_es: 'Columna Vertebral',
    nombre_lat: 'Columna vertebralis',
    sistema: 'esqueletico',
    vistas: ['anterior', 'posterior'],
    shape: 'ellipse',
    cx: 200, cy: 318, rx: 20, ry: 142,
    descripcion:
      'Eje central del esqueleto axial compuesto por 33 vértebras en 5 regiones: ' +
      'cervical (7), torácica (12), lumbar (5), sacra (5 fusionadas) y coccígea (4 fusionadas). ' +
      'Contiene el canal vertebral donde discurre la médula espinal.',
    funciones: [
      'Protección de la médula espinal en el canal vertebral.',
      'Soporte y transferencia del peso corporal.',
      'Eje de movimiento del tronco (flexión, extensión, rotación).',
      'Amortiguación de impactos mediante discos intervertebrales.',
    ],
    medlex_sistema: 'Nervioso',
  },

  {
    id: 'clavicula',
    nombre_es: 'Clavícula',
    nombre_lat: 'Clavicula',
    sistema: 'esqueletico',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 153, cy: 196, rx: 52, ry: 14,
    descripcion:
      'Hueso largo en forma de "S" itálica que conecta el esternón con la escápula. ' +
      'Forma la parte anterior de la cintura escapular y es el único hueso que articula el ' +
      'miembro superior con el esqueleto axial.',
    funciones: [
      'Transmisión de fuerzas del miembro superior al esqueleto axial.',
      'Anclaje de músculos del hombro y el cuello.',
      'Protección del paquete vasculonervioso subclavio.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'esternon',
    nombre_es: 'Esternón',
    nombre_lat: 'Sternum',
    sistema: 'esqueletico',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 200, cy: 272, rx: 16, ry: 68,
    descripcion:
      'Hueso plano en la línea media anterior del tórax. Consta de tres partes: ' +
      'manubrio (superior), cuerpo (medio) y apéndice xifoides (inferior). ' +
      'Articula con las costillas 1-7 y las clavículas.',
    funciones: [
      'Protección del corazón y los grandes vasos.',
      'Punto de inserción de músculos pectorales e intercostales.',
      'Articulación con las 7 costillas verdaderas y las clavículas.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'costillas',
    nombre_es: 'Caja Torácica',
    nombre_lat: 'Thorax osseum',
    sistema: 'esqueletico',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 200, cy: 272, rx: 94, ry: 75,
    descripcion:
      'Conjunto de 12 pares de costillas, el esternón y las 12 vértebras torácicas. ' +
      'Costillas 1-7 son "verdaderas" (articulan directamente con el esternón); ' +
      'las 8-10 son "falsas"; las 11-12 son "flotantes".',
    funciones: [
      'Protección de órganos torácicos vitales (corazón y pulmones).',
      'Mecánica respiratoria activa (expansión y contracción).',
      'Punto de inserción de músculos respiratorios.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'humero',
    nombre_es: 'Húmero',
    nombre_lat: 'Humerus',
    sistema: 'esqueletico',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 96, cy: 293, rx: 22, ry: 78,
    descripcion:
      'Hueso largo del brazo y el más largo del miembro superior. ' +
      'Articula proximalmente con la escápula en la articulación glenohumeral (hombro), ' +
      'la más móvil del cuerpo, y distalmente con el radio y el cúbito.',
    funciones: [
      'Palanca para los movimientos del miembro superior.',
      'Transmisión de fuerzas entre el hombro y el codo.',
      'Inserción del manguito rotador, bíceps y tríceps braquial.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'radio-cubito',
    nombre_es: 'Radio y Cúbito',
    nombre_lat: 'Radius et Ulna',
    sistema: 'esqueletico',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 78, cy: 415, rx: 20, ry: 66,
    descripcion:
      'Dos huesos paralelos del antebrazo. El radio rota sobre el cúbito ' +
      'permitiendo la pronación y supinación. El cúbito forma la prominencia del codo ' +
      'con su olécranon.',
    funciones: [
      'Pronación y supinación del antebrazo.',
      'Soporte estructural del antebrazo.',
      'Punto de inserción de músculos flexores y extensores de la mano.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'pelvis',
    nombre_es: 'Pelvis',
    nombre_lat: 'Pelvis',
    sistema: 'esqueletico',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 200, cy: 463, rx: 92, ry: 45,
    descripcion:
      'Anillo óseo formado por los dos coxales, el sacro y el cóccix. ' +
      'Conecta el esqueleto axial con los miembros inferiores y contiene y protege ' +
      'los órganos pélvicos.',
    funciones: [
      'Transferencia del peso del tronco a los miembros inferiores.',
      'Protección de vejiga, recto y órganos reproductores.',
      'Inserción de músculos del tronco y de los miembros inferiores.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'femur',
    nombre_es: 'Fémur',
    nombre_lat: 'Femur',
    sistema: 'esqueletico',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 156, cy: 575, rx: 30, ry: 98,
    descripcion:
      'El hueso más largo, más robusto y más pesado del cuerpo humano. ' +
      'Articula con el acetábulo del coxal (cadera) y con la tibia y la rótula (rodilla). ' +
      'Es fundamental para la bipedestación y la locomoción.',
    funciones: [
      'Soporte de todo el peso corporal en bipedestación.',
      'Transmisión de fuerzas de la cadera a la rodilla.',
      'Inserción de los músculos más potentes: cuádriceps, isquiotibiales y glúteos.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'tibia',
    nombre_es: 'Tibia y Peroné',
    nombre_lat: 'Tibia et Fibula',
    sistema: 'esqueletico',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 156, cy: 752, rx: 25, ry: 76,
    descripcion:
      'Dos huesos de la pierna. La tibia es el principal hueso de carga (medial y gruesa); ' +
      'el peroné es lateral y delgado. Articulan con el fémur arriba y con los tarsos abajo, ' +
      'formando el tobillo.',
    funciones: [
      'Carga del peso corporal (tibia, principalmente).',
      'Formación de las articulaciones de rodilla y tobillo.',
      'Inserción de músculos de la pierna y el pie.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  // ════════════════════════════════════════════════════════════
  // SISTEMA MUSCULAR (10)
  // ════════════════════════════════════════════════════════════

  {
    id: 'trapecio',
    nombre_es: 'Músculo Trapecio',
    nombre_lat: 'M. trapezius',
    sistema: 'muscular',
    vistas: ['anterior', 'posterior'],
    shape: 'ellipse',
    cx: 200, cy: 198, rx: 97, ry: 28,
    descripcion:
      'Músculo superficial de gran tamaño que cubre la región posterior del cuello ' +
      'y el tórax superior. Tiene tres porciones (superior, media, inferior) visibles ' +
      'en vista anterior en su porción superior.',
    funciones: [
      'Porción superior: eleva la escápula y el hombro.',
      'Porción media: retrae la escápula (la acerca a la columna).',
      'Porción inferior: deprime y rota la escápula hacia arriba.',
      'Extensión y rotación del cuello (fibras superiores).',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'deltoides',
    nombre_es: 'Músculo Deltoides',
    nombre_lat: 'M. deltoideus',
    sistema: 'muscular',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 96, cy: 220, rx: 30, ry: 38,
    descripcion:
      'Músculo triangular que cubre completamente la articulación del hombro. ' +
      'Tiene tres porciones (anterior, media y posterior) que permiten movimientos ' +
      'en los tres planos del espacio.',
    funciones: [
      'Abducción del brazo de 15° a 90° (porción media, función principal).',
      'Flexión y rotación medial (porción anterior).',
      'Extensión y rotación lateral del brazo (porción posterior).',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'pectoral',
    nombre_es: 'Músculo Pectoral Mayor',
    nombre_lat: 'M. pectoralis major',
    sistema: 'muscular',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 158, cy: 253, rx: 52, ry: 50,
    descripcion:
      'Músculo ancho y potente de la región anterior del tórax. Tiene dos cabezas: ' +
      'clavicular (superior) y esternocostal (inferior). Se inserta en la cresta del ' +
      'tubérculo mayor del húmero.',
    funciones: [
      'Aducción y rotación medial del húmero.',
      'Flexión del brazo hasta 90° (porción clavicular).',
      'Asistente de la inspiración forzada al elevar el tórax.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'biceps',
    nombre_es: 'Músculo Bíceps Braquial',
    nombre_lat: 'M. biceps brachii',
    sistema: 'muscular',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 91, cy: 298, rx: 22, ry: 72,
    descripcion:
      'Músculo biarticular de la cara anterior del brazo con dos cabezas de origen ' +
      '(larga y corta). Principal flexor del codo y supinador del antebrazo. ' +
      'Se inserta en la tuberosidad bicipital del radio.',
    funciones: [
      'Flexión del codo (función principal).',
      'Supinación del antebrazo (gira la palma hacia arriba).',
      'Flexión débil del hombro (cabeza larga).',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'recto-abdominal',
    nombre_es: 'Músculo Recto del Abdomen',
    nombre_lat: 'M. rectus abdominis',
    sistema: 'muscular',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 200, cy: 372, rx: 40, ry: 78,
    descripcion:
      'Músculo largo y plano en la línea media anterior del abdomen. ' +
      'Dividido por 3-4 intersecciones tendinosas y la línea alba en el centro, ' +
      'lo que crea la apariencia de tableta de chocolate en personas con bajo porcentaje graso.',
    funciones: [
      'Flexión del tronco (acercar el pecho a las rodillas).',
      'Compresión de vísceras abdominales.',
      'Participación en la espiración forzada y maniobra de Valsalva.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'cuadriceps',
    nombre_es: 'Músculo Cuádriceps Femoral',
    nombre_lat: 'M. quadriceps femoris',
    sistema: 'muscular',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 155, cy: 572, rx: 38, ry: 96,
    descripcion:
      'El músculo más voluminoso del cuerpo. Compuesto por 4 cabezas en la cara ' +
      'anterior del muslo: recto femoral, vasto lateral, vasto medial y vasto intermedio. ' +
      'Convergen en el tendón cuadricipital → rótula → tuberosidad tibial.',
    funciones: [
      'Extensión de la rodilla (función principal, esencial en marcha, carrera, salto).',
      'Flexión de la cadera (recto femoral).',
      'Estabilización dinámica de la rótula.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'gastrocnemio',
    nombre_es: 'Músculo Gastrocnemio',
    nombre_lat: 'M. gastrocnemius',
    sistema: 'muscular',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 155, cy: 746, rx: 25, ry: 58,
    descripcion:
      'Músculo más superficial de la pantorrilla, con dos cabezas (medial y lateral). ' +
      'Biarticular: cruza rodilla y tobillo. Forma junto con el sóleo el tendón de Aquiles, ' +
      'el más grueso y resistente del cuerpo.',
    funciones: [
      'Flexión plantar del tobillo (propulsión en la marcha y carrera).',
      'Flexión débil de la rodilla.',
      'Retorno venoso desde las extremidades inferiores (bomba muscular).',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'tibial-anterior',
    nombre_es: 'Músculo Tibial Anterior',
    nombre_lat: 'M. tibialis anterior',
    sistema: 'muscular',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 148, cy: 756, rx: 17, ry: 55,
    descripcion:
      'Músculo palpable en la cara anterior de la pierna, entre la tibia y el peroné. ' +
      'Es el principal dorsiflexor del pie y forma el compartimento anterior de la pierna. ' +
      'Su parálisis produce el pie caído.',
    funciones: [
      'Dorsiflexión del pie (elevar la punta del pie).',
      'Inversión del pie.',
      'Prevención del "pie caído" durante la fase de balanceo de la marcha.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'gluteo',
    nombre_es: 'Músculo Glúteo Mayor',
    nombre_lat: 'M. gluteus maximus',
    sistema: 'muscular',
    vistas: ['posterior'],
    shape: 'ellipse',
    cx: 200, cy: 468, rx: 90, ry: 48,
    descripcion:
      'El músculo más voluminoso del cuerpo, forma la prominencia de la nalga. ' +
      'Principal extensor y rotador lateral de la articulación coxofemoral. ' +
      'Fundamental para subir escaleras, levantarse de una silla y correr.',
    funciones: [
      'Extensión de la cadera (función principal).',
      'Rotación lateral del muslo.',
      'Estabilización de la pelvis y la rodilla en bipedestación.',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  {
    id: 'dorsal-ancho',
    nombre_es: 'Músculo Dorsal Ancho',
    nombre_lat: 'M. latissimus dorsi',
    sistema: 'muscular',
    vistas: ['posterior'],
    shape: 'ellipse',
    cx: 148, cy: 322, rx: 38, ry: 78,
    descripcion:
      'Músculo plano de gran extensión que cubre la mayor parte de la espalda ' +
      'inferior y media. Se origina en las vértebras torácicas inferiores, lumbares, ' +
      'sacro e ilion, y se inserta en el surco intertubercular del húmero.',
    funciones: [
      'Aducción y extensión del húmero.',
      'Rotación medial del brazo.',
      'Descenso del hombro (tirón descendente del brazo elevado).',
    ],
    medlex_sistema: 'Músculo-esquelético',
  },

  // ════════════════════════════════════════════════════════════
  // SISTEMA DE ÓRGANOS (5)
  // ════════════════════════════════════════════════════════════

  {
    id: 'cerebro',
    nombre_es: 'Cerebro',
    nombre_lat: 'Encephalon',
    sistema: 'organos',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 200, cy: 65, rx: 57, ry: 60,
    descripcion:
      'Órgano central del sistema nervioso que ocupa la mayor parte del cráneo. ' +
      'Pesa ~1,400 g, contiene ~86 mil millones de neuronas y consume el 20% del O₂ ' +
      'corporal siendo solo el 2% del peso total.',
    funciones: [
      'Control motor voluntario y procesamiento sensorial.',
      'Funciones cognitivas: pensamiento, memoria y lenguaje.',
      'Regulación emocional (sistema límbico).',
      'Coordinación de funciones autónomas vía hipotálamo.',
    ],
    medlex_sistema: 'Nervioso',
  },

  {
    id: 'corazon',
    nombre_es: 'Corazón',
    nombre_lat: 'Cor',
    sistema: 'organos',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 177, cy: 272, rx: 35, ry: 38,
    descripcion:
      'Órgano central del sistema cardiovascular situado en el mediastino medio, ' +
      'desplazado hacia la izquierda (levoposición). Pesa 250-350 g y tiene 4 cámaras: ' +
      '2 aurículas y 2 ventrículos. Genera ~100,000 latidos diarios.',
    funciones: [
      'Circulación sistémica: VI → aorta → cuerpo → aurícula D.',
      'Circulación pulmonar: VD → pulmones → aurícula I.',
      'Mantenimiento de la presión arterial y la perfusión tisular.',
      'FC normal en reposo: 60-100 lpm.',
    ],
    medlex_sistema: 'Cardiovascular',
  },

  {
    id: 'pulmones',
    nombre_es: 'Pulmones',
    nombre_lat: 'Pulmones',
    sistema: 'organos',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 200, cy: 258, rx: 86, ry: 68,
    descripcion:
      'Pulmón derecho (3 lóbulos) y pulmón izquierdo (2 lóbulos). ' +
      'Contienen ~300 millones de alvéolos con 70-140 m² de superficie de intercambio gaseoso. ' +
      'El volumen corriente en reposo es de 500 mL.',
    funciones: [
      'Intercambio gaseoso: O₂ difunde a la sangre, CO₂ al alveolo.',
      'Regulación del pH sanguíneo (tampón respiratorio).',
      'Filtrado de microémbolos circulatorios.',
      'Producción de surfactante alveolar (previene colapso alveolar).',
    ],
    medlex_sistema: 'Respiratorio',
  },

  {
    id: 'higado',
    nombre_es: 'Hígado',
    nombre_lat: 'Hepar',
    sistema: 'organos',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 228, cy: 368, rx: 58, ry: 42,
    descripcion:
      'El órgano sólido más grande del cuerpo (~1,500 g), ubicado en el hipocondrio ' +
      'derecho. Recibe sangre de la arteria hepática (30%, O₂) y la vena porta ' +
      '(70%, nutrientes). Tiene más de 500 funciones metabólicas.',
    funciones: [
      'Metabolismo de glucosa, lípidos y proteínas.',
      'Producción de bilis (600-1000 mL/día) para la digestión de grasas.',
      'Detoxificación de fármacos, alcohol y toxinas (efecto primer paso).',
      'Síntesis de factores de coagulación y proteínas plasmáticas.',
    ],
    medlex_sistema: 'Digestivo',
  },

  {
    id: 'rinones',
    nombre_es: 'Riñones',
    nombre_lat: 'Renes',
    sistema: 'organos',
    vistas: ['anterior'],
    shape: 'ellipse',
    cx: 200, cy: 400, rx: 68, ry: 32,
    descripcion:
      'Dos órganos retroperitoneales en forma de judía. Cada riñón contiene ~1 millón ' +
      'de nefronas. Filtran ~180 L de plasma al día, excretando 1-2 L como orina final. ' +
      'El riñón derecho es ligeramente más bajo por el hígado.',
    funciones: [
      'Filtración y excreción de desechos nitrogenados (urea, creatinina).',
      'Regulación del volumen, composición iónica y osmolaridad del plasma.',
      'Control del equilibrio ácido-base mediante la excreción de H⁺.',
      'Producción de eritropoyetina (EPO) y activación de vitamina D.',
    ],
    medlex_sistema: 'Urinario',
  },
]

// Mapa rápido para lookup por id
export const hotspotById = Object.fromEntries(hotspots.map(h => [h.id, h]))

// Filtros por sistema
export const HOTSPOT_SYSTEM_LABELS: Record<string, string> = {
  esqueletico: 'Sistema Esquelético',
  muscular:    'Sistema Muscular',
  organos:     'Órganos y Sistemas',
}
