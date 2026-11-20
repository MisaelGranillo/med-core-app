/* Patologías por materia (decimoquinto lote) — Embriología: sistema muscular
 * (distrofias de Duchenne y Becker, secuencia de Poland, síndrome de abdomen en
 * ciruela pasa y defectos de reducción de extremidades). No hay GPC mexicana para
 * estos temas: Duchenne con el consenso internacional de 2018 (Lancet Neurology) y
 * MedlinePlus Genetics; Poland con MedlinePlus Genetics y NORD; ciruela pasa con el
 * Manual MSD y NORD; extremidades con los CDC y la revisión de Vargesson (2013).
 * Solo datos verificados en esas fuentes. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  dmdCare1: { codigo: 'Lancet Neurol 2018 (1)', titulo: 'Diagnosis and management of Duchenne muscular dystrophy, part 1 (Birnkrant et al., DMD Care Considerations Working Group)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5869704/' },
  dmdCare2: { codigo: 'Lancet Neurol 2018 (2)', titulo: 'Diagnosis and management of Duchenne muscular dystrophy, part 2: respiratory, cardiac, bone health, and orthopaedic management', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5889091/' },
  dmdMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Duchenne and Becker muscular dystrophy (Biblioteca Nacional de Medicina de EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/duchenne-and-becker-muscular-dystrophy/' },
  polMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Poland syndrome (Biblioteca Nacional de Medicina de EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/poland-syndrome/' },
  polNord: { codigo: 'NORD', titulo: 'Poland Syndrome (National Organization for Rare Disorders)', url: 'https://rarediseases.org/rare-diseases/poland-syndrome/' },
  pbMsd: { codigo: 'Manual MSD', titulo: 'Prune-Belly Syndrome (Triad Syndrome), versión para profesionales', url: 'https://www.msdmanuals.com/professional/pediatrics/congenital-anomalies-of-the-kidney-and-urinary-tract/prune-belly-syndrome-triad-syndrome' },
  pbNord: { codigo: 'NORD', titulo: 'Prune Belly Syndrome (National Organization for Rare Disorders)', url: 'https://rarediseases.org/rare-diseases/prune-belly/' },
  lrdCdc: { codigo: 'CDC', titulo: 'Limb Reduction Defects (Centros para el Control y la Prevención de Enfermedades)', url: 'https://www.cdc.gov/birth-defects/about/limb-reduction-defects.html' },
  lrdTalidomida: { codigo: 'Vargesson 2013', titulo: 'Thalidomide embryopathy: an enigmatic challenge (ISRN Developmental Biology)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3713624/' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

const ATLAS_MUS = { id: 'embriologia-sistema-muscular', title: 'Sistema muscular' }

/* ── Embriología ────────────────────────────────────────────────── */

const DISTROFIA_DUCHENNE_BECKER: Patologia = {
  id: 'distrofia-duchenne-becker',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Distrofias musculares de Duchenne y Becker',
  aka: 'Distrofinopatías · DMD y DMB',
  ambito: 'Músculo esquelético y cardíaco',
  resumen:
    'Enfermedades del gen DMD, que codifica la DISTROFINA, la proteína que une el citoesqueleto de la fibra muscular con la matriz extracelular. Se heredan de forma recesiva ligada al X y, juntas, afectan a 1 de cada 3 500 a 5 000 varones. En DUCHENNE no hay distrofina funcional: la debilidad empieza en la primera infancia y avanza rápido. En BECKER la distrofina conserva parte de su función: empieza más tarde y avanza más despacio. Ambas terminan afectando el corazón y la respiración.',
  sections: [
    {
      id: 'dmd-1',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'DUCHENNE: retraso para sentarse, pararse y caminar; torpeza, caídas, dificultad para subir escaleras y marcha de puntas.',
            'SIGNO DE GOWERS: para levantarse del suelo, el niño «trepa» sobre sus propias piernas apoyando las manos, por la debilidad de la cadera y los muslos.',
            'Sin tratamiento, la marcha se pierde hacia los 10 años; la mayoría depende de silla de ruedas en la adolescencia.',
            'La MIOCARDIOPATÍA DILATADA suele empezar en la adolescencia, en Duchenne y en Becker, y puede dar arritmias.',
            'BECKER: la debilidad aparece en la niñez tardía o la adolescencia, es más leve y variable, y muchos viven hasta los 40 años o más. En Duchenne la supervivencia suele llegar a los veintitantos años.',
          ],
        },
        {
          type: 'note',
          content: 'Las PORTADORAS pueden tener debilidad leve y calambres, y tienen más riesgo de alteraciones cardíacas: se recomienda una valoración cardiológica al inicio de la vida adulta y repetirla cada 3 a 5 años.',
        },
      ],
    },
    {
      id: 'dmd-2',
      title: 'Diagnóstico',
      blocks: [
        {
          type: 'steps',
          title: 'Secuencia diagnóstica',
          steps: [
            'Sospecha clínica o CREATINA CINASA (CK) elevada. Ojo: la ALT y la AST también suben porque salen del músculo, y pueden hacer pensar en una enfermedad del hígado.',
            'Estudio de DELECIONES Y DUPLICACIONES del gen (MLPA o microarreglo): detecta cerca del 70 % de los casos y dice si se conserva el marco de lectura.',
            'Si sale negativo, SECUENCIACIÓN del gen para las mutaciones puntuales (el 25 a 30 % restante).',
            'Solo si la genética no confirma el diagnóstico: BIOPSIA muscular para buscar la distrofina.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'Por qué una es más leve',
          content: 'Si la mutación impide fabricar distrofina funcional, el resultado es Duchenne. Si deja una distrofina más corta pero que todavía funciona en parte, el resultado es Becker.',
        },
      ],
    },
    {
      id: 'dmd-3',
      title: 'Tratamiento y seguimiento',
      blocks: [
        {
          type: 'table',
          data: {
            headers: ['Área', 'Qué se hace'],
            rows: [
              ['Glucocorticoides', 'Prednisona o deflazacort, junto con fisioterapia, son la base. Retrasan la pérdida de la marcha (de unos 10 años sin tratamiento a 11 con prednisona y casi 14 con deflazacort), conservan la fuerza de los brazos y la función respiratoria y evitan cirugía de escoliosis. Se mantienen después de perder la marcha y nunca se suspenden de golpe.'],
              ['Corazón', 'ECG e imagen al diagnóstico (ecocardiograma hasta los 6 a 7 años, después resonancia cardíaca) y luego cada año. IECA o ARA II hacia los 10 años, o antes si aparece disfunción.'],
              ['Respiración', 'Espirometría desde los 5 a 6 años; vacunas de influenza y neumococo cada año. Tos asistida y ventilación nocturna no invasiva cuando la función cae; la ventilación nocturna prolonga la supervivencia.'],
              ['Terapias según la mutación', 'Hay fármacos para mutaciones concretas, como el eteplirsen (salto de exón) y el atalureno.'],
            ],
          },
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-sistema-muscular', sectionId: 'emu-11', label: 'Distrofias musculares de Duchenne y Becker', porQue: 'La distrofina, la herencia ligada al X y la comparación entre ambas de la clase.' },
    { materia: 'Embriología', topicId: 'embriologia-sistema-muscular', sectionId: 'emu-6', label: 'Del mioblasto a la fibra muscular; tendones', porQue: 'Cómo se forma la fibra que la distrofina mantiene unida a la matriz.' },
  ],
  atlas: [ATLAS_MUS],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Niño de 4 años que camina de puntas, se cae con frecuencia y no puede subir escaleras como sus compañeros. Para levantarse del suelo se apoya con las manos en las rodillas y los muslos. Un tío materno usó silla de ruedas desde la adolescencia. La CK está muy elevada.',
    preguntas: [
      q('pat-dmd-1', 'distrofia-duchenne-becker', '¿Cuál es el diagnóstico más probable?',
        ['Distrofia muscular de Duchenne', 'Secuencia de Poland', 'Acondroplasia', 'Síndrome de abdomen en ciruela pasa'], 0,
        'Debilidad proximal que empieza en la primera infancia, signo de Gowers, CK alta y un tío materno afectado.', 'easy'),
      q('pat-dmd-2', 'distrofia-duchenne-becker', '¿Por qué el familiar afectado es un tío materno?',
        ['Herencia autosómica dominante', 'Herencia recesiva ligada al X: la madre puede ser portadora', 'Herencia mitocondrial', 'Es una casualidad'], 1,
        'Los varones con el gen alterado enferman; las mujeres suelen ser portadoras.'),
      q('pat-dmd-3', 'distrofia-duchenne-becker', '¿Cuál es el primer estudio genético que se pide?',
        ['Cariotipo', 'Biopsia muscular', 'Búsqueda de deleciones y duplicaciones del gen DMD', 'Secuenciación del exoma completo'], 2,
        'Encuentra cerca del 70 % de los casos; si sale negativo, se secuencia el gen.'),
      q('pat-dmd-4', 'distrofia-duchenne-becker', '¿Qué tratamiento retrasa la pérdida de la marcha?',
        ['Antibióticos', 'Hormona del crecimiento', 'Cirugía temprana de columna', 'Glucocorticoides (prednisona o deflazacort)'], 3,
        'También conservan la función respiratoria y de los brazos.'),
      q('pat-dmd-5', 'distrofia-duchenne-becker', 'Si en lugar de Duchenne tuviera Becker, se esperaría:',
        ['Un inicio más tardío y una evolución más lenta', 'Una herencia diferente', 'Ausencia total de distrofina', 'Que nunca afecte al corazón'], 0,
        'La distrofina conserva parte de su función; el corazón sí puede afectarse.'),
    ],
  },
  fuentes: [F.dmdCare1, F.dmdCare2, F.dmdMedline],
}

const SECUENCIA_POLAND: Patologia = {
  id: 'secuencia-poland',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Secuencia de Poland',
  aka: 'Síndrome de Poland · anomalía de Poland',
  ambito: 'Pared torácica y extremidad superior',
  resumen:
    'Falta o poco desarrollo de los músculos del tórax de un lado, sobre todo la porción ESTERNAL del pectoral mayor (a menudo también el pectoral menor), con alteraciones de la mano del MISMO lado. Ocurre en cerca de 1 de cada 20 000 recién nacidos, es dos a tres veces más frecuente en varones, afecta el lado derecho en cerca del 75 % de los casos y casi siempre es esporádica.',
  sections: [
    {
      id: 'pol-1',
      title: 'Hallazgos',
      blocks: [
        {
          type: 'list',
          items: [
            'Tórax: falta la porción esternal del pectoral mayor; pezón y areola pequeños o ausentes; en mujeres, mama poco desarrollada o ausente; poco tejido subcutáneo y vello axilar escaso.',
            'Costillas superiores y cartílagos costales cortos o poco desarrollados; puede haber escápula alta (deformidad de Sprengel).',
            'Mano del mismo lado: dedos cortos (BRAQUIDACTILIA), dedos unidos (SINDACTILIA, sobre todo índice y medio) o dedos rudimentarios; juntos se llaman SIMBRAQUIDACTILIA. El antebrazo puede ser más corto.',
            'Los casos leves pueden notarse hasta la pubertad, cuando la asimetría del tórax o de la mama se hace evidente.',
          ],
        },
      ],
    },
    {
      id: 'pol-2',
      title: 'Causa y manejo',
      blocks: [
        {
          type: 'paragraph',
          content: 'La causa no se conoce. La hipótesis más aceptada es una interrupción del flujo sanguíneo hacia la sexta semana en los vasos que formarán las arterias SUBCLAVIA y vertebral: la «secuencia de interrupción de la arteria subclavia», que también se propone para el síndrome de Möbius, el de Klippel-Feil y la deformidad de Sprengel. Algunos pacientes tienen Poland y Möbius (parálisis facial por los pares VI y VII).',
        },
        {
          type: 'paragraph',
          content: 'MANEJO: el diagnóstico suele ser clínico al nacer; la tomografía muestra qué músculos faltan y las radiografías valoran mano, antebrazo, costillas y escápula. El tratamiento es quirúrgico y según el caso: reconstrucción de la pared torácica (a veces con injertos de costilla), reconstrucción de la mama en mujeres, cirugía de la mano y fisioterapia.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-sistema-muscular', sectionId: 'emu-10', label: 'Secuencia de Poland', porQue: 'La definición, los hallazgos y la hipótesis de la subclavia que se vieron en clase.' },
    { materia: 'Embriología', topicId: 'embriologia-sistema-muscular', sectionId: 'emu-3', label: 'Dominios primaxial y abaxial', porQue: 'Los pectorales son músculos abaxiales de la pared toracoabdominal.' },
    { materia: 'Embriología', topicId: 'embriologia-sistema-muscular', sectionId: 'emu-7', label: 'Músculos de las extremidades y de la cabeza', porQue: 'La yema del brazo y la mano se forman en las mismas semanas que la pared torácica.' },
  ],
  atlas: [ATLAS_MUS],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Adolescente varón de 14 años que nota el lado derecho del tórax «plano». El pliegue axilar anterior derecho no se marca, el pezón derecho es más pequeño y está más arriba, y desde niño tiene los dedos índice y medio derechos cortos y unidos. El lado izquierdo es normal.',
    preguntas: [
      q('pat-pol-1', 'secuencia-poland', '¿Cuál es el diagnóstico más probable?',
        ['Pectus excavatum', 'Secuencia de Poland', 'Costilla cervical', 'Distrofia de Duchenne'], 1,
        'Pared torácica y mano alteradas del mismo lado.', 'easy'),
      q('pat-pol-2', 'secuencia-poland', '¿Qué porción muscular falta típicamente?',
        ['El deltoides', 'El dorsal ancho', 'La porción esternal del pectoral mayor', 'El serrato anterior completo'], 2,
        'A menudo falta también el pectoral menor.'),
      q('pat-pol-3', 'secuencia-poland', '¿Cómo se llama la combinación de dedos cortos y unidos?',
        ['Polidactilia', 'Aracnodactilia', 'Clinodactilia', 'Simbraquidactilia'], 3,
        'Braquidactilia más sindactilia, del mismo lado que el tórax afectado.'),
      q('pat-pol-4', 'secuencia-poland', '¿Qué mecanismo se propone?',
        ['Interrupción del flujo de la arteria subclavia hacia la sexta semana', 'Una trisomía', 'Infección materna por rubéola', 'Falta de distrofina'], 0,
        'Es una hipótesis; la causa exacta no se conoce.'),
      q('pat-pol-5', 'secuencia-poland', '¿Qué se esperaría en sus padres?',
        ['Que ambos estén afectados', 'Que lo más probable es que ninguno lo tenga: casi siempre es esporádica', 'Que la madre sea portadora ligada al X', 'Que el padre tenga Möbius'], 1,
        'Los casos familiares son raros.'),
    ],
  },
  fuentes: [F.polMedline, F.polNord],
}

const ABDOMEN_CIRUELA_PASA: Patologia = {
  id: 'abdomen-ciruela-pasa',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Síndrome de abdomen en ciruela pasa',
  aka: 'Prune belly · síndrome de Eagle-Barrett · síndrome de la tríada',
  ambito: 'Pared abdominal y vías urinarias',
  resumen:
    'Tríada de DEFICIENCIA DE LA MUSCULATURA abdominal, ANOMALÍAS DE LAS VÍAS URINARIAS y TESTÍCULOS NO DESCENDIDOS intraabdominales. La pared del recién nacido es delgada y arrugada, como una ciruela pasa. Es muy rara y casi todos los casos son varones. El pronóstico depende sobre todo de los riñones y los pulmones.',
  sections: [
    {
      id: 'pb-1',
      title: 'Hallazgos',
      blocks: [
        {
          type: 'list',
          items: [
            'Pared abdominal: falta parcial o total de los músculos; se ven y se palpan los órganos.',
            'Vías urinarias: vejiga grande (casi siempre), uréteres muy dilatados, hidronefrosis y reflujo vesicoureteral; a veces riñón poco desarrollado o quistes, y anomalías de la uretra.',
            'Testículos intraabdominales en ambos lados.',
            'Asociados: pie equino varo (≈ 20 %), cardiopatías (≈ 10 %), malformaciones del recto, malrotación intestinal y, en los casos graves, hipoplasia pulmonar.',
          ],
        },
        {
          type: 'note',
          content: 'Muchas veces se detecta en el ultrasonido prenatal de rutina. Después de nacer se estudia con cistouretrografía miccional y gammagrafía renal.',
        },
      ],
    },
    {
      id: 'pb-2',
      title: 'Tratamiento y pronóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Reconstrucción de las vías urinarias cuando hace falta.',
            'ABDOMINOPLASTIA y ORQUIDOPEXIA; si no se necesita abdominoplastia, la orquidopexia suele ser laparoscópica.',
            'La insuficiencia renal es frecuente: 15 a 20 % necesita diálisis o TRASPLANTE RENAL.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-sistema-muscular', sectionId: 'emu-12', label: 'Abdomen en ciruela pasa y defectos de extremidades', porQue: 'La definición, la tríada y el mecanismo propuesto en clase.' },
    { materia: 'Embriología', topicId: 'embriologia-sistema-muscular', sectionId: 'emu-3', label: 'Dominios primaxial y abaxial', porQue: 'Los músculos de la pared abdominal son abaxiales.' },
    { materia: 'Embriología', topicId: 'embriologia-espermatogenesis', sectionId: 'esp-4', label: 'Temperatura testicular y alteraciones', porQue: 'La criptorquidia y por qué el testículo necesita estar fuera del abdomen.' },
  ],
  atlas: [ATLAS_MUS],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido varón con abdomen distendido y piel abdominal delgada y arrugada; a través de ella se ven las asas intestinales. No se palpan testículos en el escroto. El ultrasonido prenatal había mostrado una vejiga grande y ambos riñones dilatados.',
    preguntas: [
      q('pat-pb-1', 'abdomen-ciruela-pasa', '¿Cuál es el diagnóstico más probable?',
        ['Gastrosquisis', 'Onfalocele', 'Síndrome de abdomen en ciruela pasa', 'Extrofia vesical'], 2,
        'Pared abdominal deficiente, vías urinarias dilatadas y testículos no descendidos.', 'easy'),
      q('pat-pb-2', 'abdomen-ciruela-pasa', '¿Cuáles son los tres componentes de la tríada?',
        ['Onfalocele, macroglosia y gigantismo', 'Pie equino, cardiopatía y fisura de paladar', 'Hipospadias, criptorquidia e hidrocele', 'Musculatura abdominal deficiente, anomalías urinarias y testículos intraabdominales'], 3,
        'De ahí el nombre «síndrome de la tríada».'),
      q('pat-pb-3', 'abdomen-ciruela-pasa', '¿Qué determina sobre todo el pronóstico?',
        ['La función renal y pulmonar', 'El tamaño de la pared abdominal', 'La edad de la madre', 'El peso al nacer'], 0,
        'La insuficiencia renal es frecuente; en los casos graves hay hipoplasia pulmonar.'),
      q('pat-pb-4', 'abdomen-ciruela-pasa', '¿Qué cirugía se hace para los testículos?',
        ['Vasectomía', 'Orquidopexia', 'Orquiectomía bilateral', 'Ninguna'], 1,
        'Suele hacerse junto con la abdominoplastia, o por laparoscopia.'),
      q('pat-pb-5', 'abdomen-ciruela-pasa', 'Si el paciente llega a insuficiencia renal, la opción definitiva es:',
        ['Trasplante de músculo abdominal', 'Solo antibióticos', 'Reposo', 'Diálisis y trasplante renal'], 3,
        'El 15 a 20 % llega a necesitarlos.'),
    ],
  },
  fuentes: [F.pbMsd, F.pbNord],
}

const DEFECTOS_REDUCCION_EXTREMIDADES: Patologia = {
  id: 'defectos-reduccion-extremidades',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Defectos de reducción de extremidades',
  aka: 'Amelia · meromelia · focomelia',
  ambito: 'Yemas de las extremidades',
  resumen:
    'Falta total o parcial de una extremidad porque no se formó completa durante el embarazo. Ocurren en cerca de 1 de cada 1 850 recién nacidos en Estados Unidos y pueden afectar brazos, piernas o ambos. En la mayoría de los casos la causa no se conoce. El ejemplo histórico es la TALIDOMIDA, que entre 1957 y 1962 causó defectos en más de 10 000 niños.',
  sections: [
    {
      id: 'lrd-1',
      title: 'Tipos y causas',
      blocks: [
        {
          type: 'table',
          data: {
            headers: ['Defecto', 'Qué falta'],
            rows: [
              ['AMELIA', 'Toda la extremidad'],
              ['MEROMELIA', 'Una parte de la extremidad'],
              ['FOCOMELIA (forma de meromelia)', 'Los segmentos proximales: la mano o el pie quedan cerca del tronco'],
            ],
          },
        },
        {
          type: 'list',
          items: [
            'Causa desconocida en la mayoría. Factores que pueden aumentar el riesgo: exposición a ciertos químicos, virus o medicamentos durante el embarazo, y fumar.',
            'TALIDOMIDA: el periodo sensible es entre los días 20 y 36 después de la fecundación (34 a 50 días desde la última menstruación); los defectos del brazo, hacia los días 24 a 32, y los de la pierna, hacia los días 27 a 34.',
            'El uso de multivitamínicos antes del embarazo se ha asociado con menor riesgo.',
          ],
        },
      ],
    },
    {
      id: 'lrd-2',
      title: 'Manejo',
      blocks: [
        {
          type: 'paragraph',
          content: 'El tratamiento depende de la edad y del tipo de defecto, y busca una extremidad que funcione y se vea bien: PRÓTESIS, ÓRTESIS (férulas o aparatos), CIRUGÍA y REHABILITACIÓN (terapia física u ocupacional). Algunas formas se asocian con cardiopatías, onfalocele o gastrosquisis.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-sistema-muscular', sectionId: 'emu-7', label: 'Músculos de las extremidades y de la cabeza', porQue: 'La cronología de las yemas: por eso la ventana de la talidomida cae a finales del primer mes.' },
    { materia: 'Embriología', topicId: 'embriologia-sistema-muscular', sectionId: 'emu-12', label: 'Abdomen en ciruela pasa y defectos de extremidades', porQue: 'Amelia, meromelia y focomelia como se vieron en clase.' },
    { materia: 'Genética', topicId: 'genetica-teratogenesis', sectionId: 'gter-3', label: 'Teratógenos farmacológicos ★', porQue: 'La talidomida como teratógeno emblemático y el periodo de máxima susceptibilidad.' },
  ],
  atlas: [ATLAS_MUS],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'En el ultrasonido de la semana 20 se ve que el feto tiene la mano derecha unida casi directamente al hombro, sin brazo ni antebrazo. Las otras tres extremidades son normales. La madre no tomó medicamentos durante el embarazo.',
    preguntas: [
      q('pat-lrd-1', 'defectos-reduccion-extremidades', '¿Cómo se llama este defecto?',
        ['Amelia', 'Sindactilia', 'Focomelia', 'Polidactilia'], 2,
        'Faltan los segmentos proximales y la mano queda pegada al tronco.', 'easy'),
      q('pat-lrd-2', 'defectos-reduccion-extremidades', 'Si faltara toda la extremidad, se llamaría:',
        ['Amelia', 'Meromelia', 'Focomelia', 'Ectrodactilia'], 0,
        'Meromelia es la falta de una parte; la focomelia es una forma de meromelia.'),
      q('pat-lrd-3', 'defectos-reduccion-extremidades', '¿Qué fármaco causó una epidemia de estos defectos entre 1957 y 1962?',
        ['Ácido valproico', 'Talidomida', 'Isotretinoína', 'Warfarina'], 1,
        'Afectó a más de 10 000 niños y cambió la regulación de los fármacos.'),
      q('pat-lrd-4', 'defectos-reduccion-extremidades', '¿En qué periodo es sensible el embrión a la talidomida?',
        ['Semanas 12 a 16', 'Las dos primeras semanas', 'El tercer trimestre', 'Días 20 a 36 después de la fecundación'], 3,
        'Coincide con la formación de las yemas de las extremidades.'),
      q('pat-lrd-5', 'defectos-reduccion-extremidades', 'En la mayoría de los defectos de reducción de extremidades, la causa:',
        ['Es la talidomida', 'Es genética', 'No se conoce', 'Es una infección'], 2,
        'Se asocian con algunos químicos, virus, medicamentos y el tabaco; los multivitamínicos antes del embarazo pueden disminuir el riesgo.'),
    ],
  },
  fuentes: [F.lrdCdc, F.lrdTalidomida],
}

export const FICHAS_MATERIAS_15: Patologia[] = [DISTROFIA_DUCHENNE_BECKER, SECUENCIA_POLAND, ABDOMEN_CIRUELA_PASA, DEFECTOS_REDUCCION_EXTREMIDADES]
