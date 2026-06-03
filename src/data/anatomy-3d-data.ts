/*
 * FUENTES DE MODELOS GLTF GRATUITOS:
 *   - NIH 3D Print Exchange: https://3d.nih.gov  (licencias CC0/CC-BY)
 *   - BodyParts3D/Anatomography: http://lifesciencedb.jp/bp3d/ (CC-BY-SA)
 *   - Sketchfab: https://sketchfab.com/tags/anatomy (filtrar por licencia CC)
 *   - Visible Human Project: https://www.nlm.nih.gov/research/visible/
 *
 * CÓMO REEMPLAZAR EL MODELO PLACEHOLDER:
 *   1. Descarga un modelo .glb de las fuentes anteriores.
 *   2. Cópialo a /public/models/body.glb
 *   3. En AnatomyViewer.tsx, descomenta la sección "CARGA DE MODELO GLTF"
 *      y elimina la sección "MODELO PROCEDURAL PLACEHOLDER".
 *   4. Asegúrate de que los nombres de malla (mesh.name) en el GLB coincidan
 *      con las claves del objeto anatomyParts definido en este archivo.
 *
 * CÓMO DESPLEGAR A CLOUDFLARE PAGES:
 *   git add . && git commit -m "feat: actualizar visor 3D" && git push origin main
 *   Cloudflare detectará el push, ejecutará `npm run build` y desplegará /dist.
 */

export interface AnatomyPart {
  id: string
  nombre: string
  sistema: 'Esquelético' | 'Muscular' | 'Órganos'
  descripcion: string
  funcionesClave: string[]
}

export const anatomyParts: Record<string, AnatomyPart> = {

  // ═══════════════════════════════════════════════════
  // SISTEMA ESQUELÉTICO
  // ═══════════════════════════════════════════════════

  'craneo': {
    id: 'craneo',
    nombre: 'Cráneo',
    sistema: 'Esquelético',
    descripcion:
      'El cráneo es la estructura ósea que forma la cabeza y protege el encéfalo. ' +
      'Está compuesto por 8 huesos craneales (frontal, parietales, temporales, occipital, esfenoides y etmoides) ' +
      'y 14 huesos faciales. Su cavidad interna, la bóveda craneal, aloja el cerebro, el tronco encefálico y el cerebelo.',
    funcionesClave: [
      'Protección del encéfalo frente a traumatismos físicos.',
      'Soporte de los órganos de los sentidos: ojos, oídos, nariz y lengua.',
      'Puntos de inserción para músculos de la masticación, cabeza y cuello.',
      'Aloja las meninges y el líquido cefalorraquídeo que amortiguan el cerebro.',
    ],
  },

  'columna-vertebral': {
    id: 'columna-vertebral',
    nombre: 'Columna Vertebral',
    sistema: 'Esquelético',
    descripcion:
      'La columna vertebral o raquis está compuesta por 33 vértebras distribuidas en 5 regiones: ' +
      'cervical (7), torácica (12), lumbar (5), sacra (5 fusionadas) y coccígea (4 fusionadas). ' +
      'Es el eje central del esqueleto axial y contiene el canal vertebral, donde discurre la médula espinal.',
    funcionesClave: [
      'Protege la médula espinal dentro del canal vertebral.',
      'Soporta el peso de la cabeza, el tronco y los miembros superiores.',
      'Permite movimientos de flexión, extensión, rotación y flexión lateral del tronco.',
      'Amortigua impactos mediante los discos intervertebrales (fibrocartílago).',
    ],
  },

  'caja-toracica': {
    id: 'caja-toracica',
    nombre: 'Caja Torácica',
    sistema: 'Esquelético',
    descripcion:
      'La caja torácica está formada por 12 pares de costillas, el esternón y las 12 vértebras torácicas. ' +
      'Las costillas 1–7 son "verdaderas" (articuladas directamente con el esternón); las 8–10 son "falsas"; ' +
      'las 11–12 son "flotantes". Junto con los músculos intercostales forma la pared del tórax.',
    funcionesClave: [
      'Protege órganos vitales: corazón, pulmones y grandes vasos sanguíneos.',
      'Participa activamente en la mecánica respiratoria (expansión y contracción).',
      'Proporciona inserción a músculos respiratorios, pectorales y abdominales.',
      'Articula con las clavículas para el movimiento de los miembros superiores.',
    ],
  },

  'humero': {
    id: 'humero',
    nombre: 'Húmero',
    sistema: 'Esquelético',
    descripcion:
      'El húmero es el hueso largo del brazo y el más largo del miembro superior. ' +
      'Proximalmente se articula con la escápula formando la articulación glenohumeral (hombro), ' +
      'la más móvil del cuerpo. Distalmente forma el codo con el radio y el cúbito.',
    funcionesClave: [
      'Forma el esqueleto del brazo y actúa como palanca para el movimiento.',
      'Transmite fuerzas mecánicas entre el hombro y el codo.',
      'Sirve de inserción al manguito rotador, bíceps braquial y tríceps.',
      'Participa en la articulación del hombro (gran movilidad) y el codo (bisagra).',
    ],
  },

  'femur': {
    id: 'femur',
    nombre: 'Fémur',
    sistema: 'Esquelético',
    descripcion:
      'El fémur es el hueso más largo, más robusto y más pesado del cuerpo humano. ' +
      'Se articula con el acetábulo del coxal formando la cadera (articulación coxofemoral). ' +
      'Distalmente forma la rodilla con la tibia y la rótula. Es fundamental para la bipedestación humana.',
    funcionesClave: [
      'Soporta todo el peso corporal durante la bipedestación y la marcha.',
      'Transmite fuerzas desde la cadera hasta la rodilla durante el movimiento.',
      'Proporciona inserción a los músculos más potentes del cuerpo (cuádriceps, glúteos).',
      'Participa en las articulaciones de cadera (enartrosis) y rodilla (bisagra modificada).',
    ],
  },

  // ═══════════════════════════════════════════════════
  // SISTEMA MUSCULAR
  // ═══════════════════════════════════════════════════

  'biceps': {
    id: 'biceps',
    nombre: 'Músculo Bíceps Braquial',
    sistema: 'Muscular',
    descripcion:
      'El bíceps braquial es un músculo biarticular con dos cabezas de origen (larga y corta) ' +
      'que recorre la cara anterior del brazo. Es el principal flexor del codo y supinador del antebrazo, ' +
      'y uno de los músculos más reconocibles del cuerpo. Se inserta en la tuberosidad bicipital del radio.',
    funcionesClave: [
      'Flexión del codo: función principal, especialmente en posición de supinación.',
      'Supinación del antebrazo: gira la palma hacia arriba (movimiento de "abrir un tornillo").',
      'Flexión débil del hombro (cabeza larga).',
      'Estabilización dinámica de la articulación glenohumeral.',
    ],
  },

  'cuadriceps': {
    id: 'cuadriceps',
    nombre: 'Músculo Cuádriceps Femoral',
    sistema: 'Muscular',
    descripcion:
      'El cuádriceps femoral es el músculo más voluminoso y potente del cuerpo humano. ' +
      'Ocupa toda la cara anterior del muslo y está formado por 4 cabezas: ' +
      'recto femoral, vasto lateral, vasto medial y vasto intermedio. ' +
      'Convergen en el tendón cuadricipital que se inserta en la rótula y la tuberosidad tibial.',
    funcionesClave: [
      'Extensión de la rodilla: función esencial para caminar, correr y saltar.',
      'El recto femoral también flexiona la cadera.',
      'Estabilización y protección de la articulación de la rodilla.',
      'Absorción de impactos durante la marcha y la carrera.',
    ],
  },

  'diafragma': {
    id: 'diafragma',
    nombre: 'Músculo Diafragma',
    sistema: 'Muscular',
    descripcion:
      'El diafragma es el músculo principal de la respiración. ' +
      'Es una lámina musculotendinosa en forma de cúpula que separa la cavidad torácica de la abdominal. ' +
      'Contiene tres orificios principales para el paso del esófago, la aorta y la vena cava inferior. ' +
      'Está inervado por los nervios frénicos (C3-C5).',
    funcionesClave: [
      'Principal músculo inspiratorio: su contracción desciende la cúpula y amplía el tórax.',
      'Aumenta la presión intraabdominal en la maniobra de Valsalva (tos, defecación, parto).',
      'Control de la unión gastroesofágica: ayuda a prevenir el reflujo.',
      'Separación anatómica y funcional entre cavidad torácica y abdominal.',
    ],
  },

  'trapecio': {
    id: 'trapecio',
    nombre: 'Músculo Trapecio',
    sistema: 'Muscular',
    descripcion:
      'El trapecio es un músculo superficial de gran tamaño que cubre la parte posterior del cuello ' +
      'y el tórax superior. Tiene forma trapezoidal y se divide en tres porciones: ' +
      'superior (descendente), media (transversa) e inferior (ascendente). ' +
      'Su inervación motora proviene del nervio accesorio (XI par craneal).',
    funcionesClave: [
      'Porción superior: eleva la escápula y el hombro.',
      'Porción media: retrae la escápula (la acerca a la columna vertebral).',
      'Porción inferior: deprime y rota la escápula hacia arriba.',
      'Extensión y rotación contralateral del cuello (fibras superiores).',
    ],
  },

  'gastrocnemio': {
    id: 'gastrocnemio',
    nombre: 'Músculo Gastrocnemio',
    sistema: 'Muscular',
    descripcion:
      'El gastrocnemio (o gemelo) es el músculo más superficial de la pantorrilla. ' +
      'Tiene dos cabezas (medial y lateral) que se unen para formar el tendón de Aquiles, ' +
      'el tendón más grueso y resistente del cuerpo humano. Es un músculo biarticular que cruza ' +
      'tanto la rodilla como el tobillo.',
    funcionesClave: [
      'Flexión plantar del tobillo: empuje durante la marcha (fase de propulsión).',
      'Flexión débil de la rodilla.',
      'Aceleración del cuerpo en la carrera y el salto.',
      'Retorno venoso desde las extremidades inferiores hacia el corazón (bomba muscular).',
    ],
  },

  // ═══════════════════════════════════════════════════
  // SISTEMA DE ÓRGANOS
  // ═══════════════════════════════════════════════════

  'cerebro': {
    id: 'cerebro',
    nombre: 'Cerebro',
    sistema: 'Órganos',
    descripcion:
      'El cerebro es el órgano central del sistema nervioso y la estructura más compleja del cuerpo. ' +
      'Pesa aproximadamente 1,400 g y está dividido en dos hemisferios unidos por el cuerpo calloso. ' +
      'Contiene ~86,000 millones de neuronas y consume el 20% del oxígeno total ' +
      'a pesar de representar solo el 2% del peso corporal.',
    funcionesClave: [
      'Procesamiento de información sensorial y coordinación de respuestas motoras voluntarias.',
      'Funciones cognitivas superiores: pensamiento, lenguaje, memoria y aprendizaje.',
      'Control de emociones y comportamiento (sistema límbico, amígdala, hipocampo).',
      'Regulación de funciones autónomas vitales a través del hipotálamo.',
    ],
  },

  'corazon': {
    id: 'corazon',
    nombre: 'Corazón',
    sistema: 'Órganos',
    descripcion:
      'El corazón es el órgano central del sistema cardiovascular, situado en el mediastino medio ' +
      'con desplazamiento hacia la izquierda (levoposición). Pesa 250–350 g. ' +
      'Tiene 4 cámaras: aurícula derecha, ventrículo derecho, aurícula izquierda y ventrículo izquierdo. ' +
      'Genera aproximadamente 100,000 latidos diarios.',
    funcionesClave: [
      'Bombear sangre oxigenada desde el VI hacia todo el cuerpo (circulación sistémica, presión ~120/80 mmHg).',
      'Recibir sangre desoxigenada y enviarla a los pulmones (circulación pulmonar, baja presión).',
      'Mantener la presión arterial y la perfusión de todos los tejidos.',
      'Frecuencia cardíaca normal en reposo: 60–100 latidos por minuto (lpm).',
    ],
  },

  'pulmones': {
    id: 'pulmones',
    nombre: 'Pulmones',
    sistema: 'Órganos',
    descripcion:
      'Los pulmones son los órganos principales del sistema respiratorio. ' +
      'El pulmón derecho tiene 3 lóbulos (superior, medio e inferior); el izquierdo tiene 2 (superior e inferior). ' +
      'Juntos contienen ~300 millones de alvéolos con una superficie de intercambio de 70–140 m². ' +
      'El volumen corriente en reposo es de 500 mL.',
    funcionesClave: [
      'Intercambio gaseoso: O₂ difunde hacia la sangre y CO₂ desde la sangre al alveolo.',
      'Regulación del equilibrio ácido-base mediante la eliminación de CO₂.',
      'Filtrado de microémbolos de la circulación sanguínea.',
      'Producción de surfactante alveolar para evitar el colapso (atelectasia).',
    ],
  },

  'higado': {
    id: 'higado',
    nombre: 'Hígado',
    sistema: 'Órganos',
    descripcion:
      'El hígado es el órgano sólido más grande del cuerpo, con un peso de ~1,500 g. ' +
      'Está ubicado en el hipocondrio derecho y el epigastrio. ' +
      'Recibe sangre de la arteria hepática (30%, rico en O₂) y la vena porta (70%, rico en nutrientes). ' +
      'Tiene más de 500 funciones metabólicas conocidas.',
    funcionesClave: [
      'Metabolismo de carbohidratos (glucogénesis, gluconeogénesis), lípidos y proteínas.',
      'Producción de bilis (600–1000 mL/día): esencial para la digestión y absorción de grasas.',
      'Detoxificación de fármacos, alcohol, amoniaco y otras toxinas (efecto primer paso).',
      'Síntesis de factores de coagulación (I, II, V, VII, IX, X) y proteínas plasmáticas (albúmina).',
    ],
  },

  'estomago': {
    id: 'estomago',
    nombre: 'Estómago',
    sistema: 'Órganos',
    descripcion:
      'El estómago es un órgano muscular hueco del tracto digestivo situado en el hipocondrio izquierdo. ' +
      'Tiene una capacidad de 1–1.5 litros cuando está lleno. ' +
      'Su mucosa contiene glándulas gástricas que secretan HCl (pH 1.5–2.5), pepsina y factor intrínseco. ' +
      'Se comunica con el esófago (cardias) y el duodeno (píloro).',
    funcionesClave: [
      'Almacenamiento temporal de los alimentos ingeridos y regulación del vaciamiento gástrico.',
      'Digestión química: el HCl activa la pepsina para iniciar la proteólisis.',
      'Digestión mecánica: movimientos peristálticos homogeneizan el contenido (quimo).',
      'Producción de factor intrínseco: esencial para la absorción de vitamina B12 en el íleon.',
    ],
  },
}

// Colores por sistema (valores hexadecimales en formato Three.js)
export const SYSTEM_COLORS: Record<string, number> = {
  'Esquelético': 0xe8dcc8,   // beige/hueso
  'Muscular':    0xc0392b,   // rojo oscuro
  'Órganos':     0x8e44ad,   // púrpura
}

// Mapeo de id de sistema a clave de filtro
export const SYSTEM_FILTER_MAP: Record<string, 'esqueletico' | 'muscular' | 'organos'> = {
  'Esquelético': 'esqueletico',
  'Muscular':    'muscular',
  'Órganos':     'organos',
}

export const SYSTEM_FILTER_OPTIONS = [
  { id: 'todos',       label: 'Todos',      emoji: '🫀' },
  { id: 'esqueletico', label: 'Esquelético', emoji: '🦴' },
  { id: 'muscular',    label: 'Muscular',    emoji: '💪' },
  { id: 'organos',     label: 'Órganos',     emoji: '🫁' },
] as const

export type SystemFilter = 'todos' | 'esqueletico' | 'muscular' | 'organos'
