/* Patologías por materia (duodécimo lote) — Embriología: función placentaria,
 * líquido amniótico y gemelos (rotura prematura de membranas, hiperbilirrubinemia
 * neonatal, síndrome de transfusión feto-fetal y atresia esofágica). GPC mexicanas
 * cuando existen (IMSS-262-19, IMSS-628-13, COMEGO 2009); si no, ACOG y Merck.
 * Solo datos verificados en esas fuentes. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  rpmComego: { codigo: 'GPC COMEGO 2009', titulo: 'Manejo de ruptura prematura de membranas pretérmino (Ginecol Obstet Mex 2009;77(7):S177-S208)', url: 'https://www.medigraphic.com/pdfs/ginobsmex/gom-2009/gom097g.pdf' },
  acog217: { codigo: 'ACOG PB 217', titulo: 'Prelabor Rupture of Membranes. ACOG Practice Bulletin No. 217 (Obstet Gynecol 2020;135:e80-e97)', url: 'https://pubmed.ncbi.nlm.nih.gov/32080050/' },
  ictericia: { codigo: 'GPC IMSS-262-19', titulo: 'Diagnóstico y tratamiento de la ictericia neonatal (actualización 2019)', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/262GER.pdf' },
  multiple: { codigo: 'GPC IMSS-628-13', titulo: 'Diagnóstico y manejo del embarazo múltiple', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/628GER.pdf' },
  aeMerck: { codigo: 'Manual Merck', titulo: 'Esophageal Atresia (Merck Manual, versión profesional)', url: 'https://www.merckmanuals.com/professional/pediatrics/congenital-gastrointestinal-anomalies/esophageal-atresia' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

const ATLAS_FUNCION = { id: 'embriologia-funcion-placentaria', title: 'Función placentaria, líquido amniótico y gemelos' }

/* ── Embriología ────────────────────────────────────────────────── */

const RPM: Patologia = {
  id: 'rotura-prematura-membranas',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Rotura prematura de membranas',
  aka: 'Ruptura prematura de membranas (RPM) · RPM pretérmino',
  ambito: 'Membrana amniocoriónica',
  resumen:
    'Rotura de la membrana amniocoriónica antes de que empiece el trabajo de parto. A término complica cerca del 8 % de los embarazos; antes de la semana 37 (RPM pretérmino), el 2 a 3 %, y es una causa importante de parto pretérmino. Sus riesgos son la infección intraamniótica, la compresión del cordón y las complicaciones de la prematurez. Qué se hace depende sobre todo de la edad gestacional.',
  sections: [
    {
      id: 'rpm-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'table',
          title: 'Definiciones',
          data: {
            headers: ['Término', 'Criterio'],
            rows: [
              ['RPM', 'Rotura de membranas antes del inicio del trabajo de parto'],
              ['RPM a término', 'A partir de la semana 37'],
              ['RPM pretérmino', 'Antes de la semana 37'],
              ['Latencia', 'Tiempo entre la rotura y el nacimiento; es más corta cuanto más avanzado está el embarazo'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Factores de riesgo',
          items: [
            'RPM pretérmino o parto pretérmino en un embarazo previo (el más fuerte).',
            'Infección del tracto genital.',
            'Sangrado durante el embarazo.',
            'Tabaquismo.',
            'Polihidramnios grave, que distiende las membranas.',
          ],
        },
        {
          type: 'note',
          content: 'Con manejo expectante de una RPM lejos del término, la mitad o más de las pacientes tiene a su bebé en la primera semana después de la rotura.',
        },
      ],
    },
    {
      id: 'rpm-2',
      title: 'Diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Historia clínica (salida de líquido por la vagina) y ESPECULOSCOPIA: se ve salir líquido amniótico por el orificio cervical.',
            'Si hay duda: prueba de NITRAZINA (el líquido amniótico es menos ácido que la secreción vaginal y cambia el color del papel) y CRISTALOGRAFÍA (el líquido seco cristaliza «en helecho»). La sangre, el semen y algunas infecciones dan falsos positivos de nitrazina.',
            'EVITAR EL TACTO VAGINAL: aporta poco, sube el riesgo de infección ascendente y acorta la latencia.',
            'Ultrasonido para edad gestacional, presentación y líquido amniótico; cultivo para estreptococo del grupo B.',
            'Signos de infección intraamniótica: fiebre materna, taquicardia materna o fetal, útero doloroso y líquido fétido.',
          ],
        },
      ],
    },
    {
      id: 'rpm-3',
      title: 'Tratamiento según la edad gestacional',
      blocks: [
        {
          type: 'table',
          data: {
            headers: ['Edad gestacional', 'Conducta'],
            rows: [
              ['37 semanas o más', 'Proceder al nacimiento (inducción o cesárea si está indicada); profilaxis para estreptococo del grupo B según indicación'],
              ['34 a 36 semanas', 'Nacimiento o manejo expectante tras explicar riesgos y beneficios, sin pasar de la semana 37. Sin antibióticos de latencia. Un ciclo de corticoesteroide si no lo recibió y el nacimiento será en 24 horas a 7 días'],
              ['24 a 33 semanas', 'Manejo EXPECTANTE en el hospital: antibióticos para prolongar la latencia, un solo ciclo de corticoesteroide y vigilancia materno-fetal diaria'],
              ['Menos de 32 semanas', 'Además, SULFATO DE MAGNESIO antes del nacimiento para proteger el cerebro fetal'],
              ['Infección intraamniótica, en cualquier edad', 'Antibióticos y nacimiento'],
            ],
          },
        },
        {
          type: 'list',
          items: [
            'Antibióticos de latencia (esquema de la GPC mexicana): ampicilina con eritromicina intravenosas 48 horas y luego amoxicilina con eritromicina por vía oral 5 días.',
            'Corticoesteroide: betametasona 12 mg IM cada 24 horas, dos dosis (o dexametasona 6 mg IM cada 12 horas, cuatro dosis). Reduce la dificultad respiratoria, la hemorragia intraventricular, la enterocolitis necrosante y la mortalidad. No se repiten ciclos de rutina.',
            'Los tocolíticos no se usan de rutina: no prolongan el embarazo ni mejoran el pronóstico neonatal.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-funcion-placentaria', sectionId: 'efp-8', label: 'Rotura prematura de membranas', porQue: 'Definiciones, frecuencia, factores de riesgo y conducta según la edad gestacional vistos en clase.' },
    { materia: 'Embriología', topicId: 'embriologia-placenta', sectionId: 'epl-6', label: 'Deciduas, corion y membrana amniocoriónica', porQue: 'La membrana que se rompe es la amniocoriónica: amnios fusionado con el corion leve.' },
    { materia: 'Embriología', topicId: 'embriologia-funcion-placentaria', sectionId: 'efp-9', label: 'Líquido amniótico', porQue: 'Si el líquido se pierde pronto y por mucho tiempo, el oligohidramnios puede impedir que los pulmones se expandan.' },
  ],
  atlas: [ATLAS_FUNCION, { id: 'embriologia-placenta', title: 'Placenta y membranas fetales' }],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Mujer de 27 años con embarazo de 30 semanas. Desde hace 3 horas le escurre líquido claro por la vagina, sin contracciones. Está afebril, con frecuencia cardiaca fetal de 140 por minuto. En la especuloscopia sale líquido por el orificio cervical al pedirle que tosa.',
    preguntas: [
      q('pat-rpm-1', 'rotura-prematura-membranas', '¿Cuál es el diagnóstico?',
        ['Rotura prematura de membranas pretérmino', 'Trabajo de parto pretérmino', 'Incontinencia urinaria', 'Placenta previa'], 0,
        'Salida de líquido amniótico por el cérvix antes de la semana 37 y sin contracciones.', 'easy'),
      q('pat-rpm-2', 'rotura-prematura-membranas', '¿Qué exploración conviene evitar?',
        ['El ultrasonido', 'El tacto vaginal', 'La toma de signos vitales', 'El registro de la frecuencia cardiaca fetal'], 1,
        'Aumenta el riesgo de infección ascendente y acorta la latencia sin aportar mucho.'),
      q('pat-rpm-3', 'rotura-prematura-membranas', '¿Para qué se le da betametasona?',
        ['Para detener las contracciones', 'Para prevenir la infección', 'Para madurar el pulmón fetal y reducir la morbilidad neonatal', 'Para sellar las membranas'], 2,
        'Un ciclo único: 12 mg IM cada 24 horas, dos dosis.'),
      q('pat-rpm-4', 'rotura-prematura-membranas', '¿Para qué se indican los antibióticos en su caso?',
        ['Para tratar una corioamnionitis confirmada', 'Para inducir el trabajo de parto', 'Porque sustituyen al corticoesteroide', 'Para prolongar la latencia y reducir la infección materna y neonatal'], 3,
        'Ampicilina con eritromicina IV 48 horas y luego amoxicilina con eritromicina oral 5 días.'),
      q('pat-rpm-5', 'rotura-prematura-membranas', 'Dos días después tiene 38.5 °C, taquicardia fetal y útero doloroso. ¿Qué se hace?',
        ['Antibióticos y terminar el embarazo', 'Seguir con manejo expectante', 'Dar tocolíticos', 'Repetir el ciclo de corticoesteroide'], 0,
        'Es una infección intraamniótica: ya no se espera.'),
    ],
  },
  fuentes: [F.rpmComego, F.acog217],
}

const HIPERBILIRRUBINEMIA: Patologia = {
  id: 'hiperbilirrubinemia-neonatal',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Hiperbilirrubinemia neonatal',
  aka: 'Ictericia neonatal',
  ambito: 'Recién nacido',
  resumen:
    'Coloración amarilla de la piel y las mucosas por bilirrubina elevada. Cerca del 60 % de los recién nacidos de término y el 80 % de los prematuros la presentan en la primera semana; casi siempre es FISIOLÓGICA e inofensiva. Importa porque la bilirrubina no conjugada en exceso es tóxica para el cerebro, sobre todo los núcleos basales: puede causar encefalopatía aguda y KERNICTERUS, con parálisis cerebral, sordera y retraso del desarrollo. Se trata con fototerapia y, en casos graves, exanguinotransfusión.',
  sections: [
    {
      id: 'hbn-1',
      title: 'Por qué ocurre y tipos',
      blocks: [
        {
          type: 'list',
          title: 'Por qué el recién nacido acumula bilirrubina',
          items: [
            'Tiene más eritrocitos por kilo de peso.',
            'Sus eritrocitos viven menos (≈ 90 días).',
            'Reabsorbe más bilirrubina del intestino (circulación enterohepática).',
            'Su hígado la capta y la conjuga poco, porque la glucuroniltransferasa aún es inmadura.',
          ],
        },
        {
          type: 'table',
          data: {
            headers: ['Tipo', 'Características'],
            rows: [
              ['Fisiológica', 'La más común; en la primera semana, sin causa identificable; su intensidad depende de la madurez del recién nacido'],
              ['Asociada a leche materna', 'Empieza hacia el quinto día y puede durar hasta 9 semanas; es no conjugada e inofensiva. Se relaciona con poca ingesta de leche y más circulación enterohepática'],
              ['No fisiológica', 'Incompatibilidad Rh, ABO o de subgrupos, otras hemólisis, sepsis, hematomas y trastornos metabólicos'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Señales de alarma',
          items: [
            'Ictericia visible en las primeras 24 horas de vida.',
            'Bilirrubina que sube rápido o llega al umbral de tratamiento.',
            'Bilirrubina CONJUGADA mayor de 1.47 mg/dL (25 µmol/L) o ictericia prolongada: puede indicar enfermedad hepática grave.',
            'Datos de encefalopatía aguda, como el opistótonos.',
          ],
        },
      ],
    },
    {
      id: 'hbn-2',
      title: 'Diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Factores que aumentan la probabilidad: edad gestacional menor de 38 semanas, un hermano que necesitó fototerapia, ictericia en las primeras 24 horas y alimentación exclusiva al seno materno.',
            'Buscarla en cada revisión, sobre todo en las primeras 72 horas: recién nacido desnudo, con buena luz (de preferencia natural), presionando la piel y revisando escleras y encías, útil en todos los tonos de piel.',
            'La ESCALA DE KRAMER solo sirve para decir si hay o no ictericia. Si hay ictericia, siempre se mide la bilirrubina.',
            'Ictericia en las primeras 24 horas: bilirrubina sérica en las 2 horas siguientes y luego cada 6 horas. Después de las 24 horas: medirla en las 6 horas siguientes.',
            'Bilirrubinómetro transcutáneo en recién nacidos de 35 semanas o más y con más de 24 horas de vida; si marca más de 14.7 mg/dL, se confirma en sangre.',
            'Si la bilirrubina es significativa: biometría hemática, reticulocitos, grupo y Rh de la madre y del hijo y prueba de Coombs directa.',
          ],
        },
      ],
    },
    {
      id: 'hbn-3',
      title: 'Tratamiento',
      blocks: [
        {
          type: 'list',
          items: [
            'La decisión se toma con la bilirrubina total en tablas que consideran las horas de vida y la edad gestacional.',
            'FOTOTERAPIA simple o múltiple según el nivel; la enfermedad hemolítica suele necesitar la múltiple. La mayor respuesta se ve en las primeras 2 a 6 horas.',
            'Se mantiene la lactancia materna durante la observación y el tratamiento.',
            'Durante la fototerapia se mide la bilirrubina a las 4–6 horas y luego cada 6–12 horas. Se suspende cuando queda al menos 3 mg/dL (50 µmol/L) por debajo del umbral, y se revisa el rebote 12–18 horas después.',
            'EXANGUINOTRANSFUSIÓN si la bilirrubina sigue por encima de su umbral o hay signos de encefalopatía aguda; durante y después se continúa la fototerapia.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-funcion-placentaria', sectionId: 'efp-5', label: 'Ictericia neonatal y escala de Kramer', porQue: 'Cuándo aparece cada tipo de ictericia y por qué la escala de Kramer solo orienta.' },
    { materia: 'Embriología', topicId: 'embriologia-funcion-placentaria', sectionId: 'efp-4', label: 'Incompatibilidad sanguínea materno-fetal: ABO y Rh', porQue: 'La hemólisis por incompatibilidad es la causa clásica de ictericia en las primeras 24 horas.' },
    { materia: 'Histología', topicId: 'histologia-sangre', sectionId: 'hsan-6', label: 'Eritropoyesis, EPO y grupos sanguíneos', porQue: 'Más eritrocitos y de vida más corta: más hemoglobina que degradar a bilirrubina.' },
  ],
  atlas: [ATLAS_FUNCION],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido de término, de 18 horas de vida, alimentado al seno materno. La enfermera lo nota amarillo en la cara, el cuello y el tronco hasta el ombligo. La madre es O positivo; el bebé, A positivo.',
    preguntas: [
      q('pat-hbn-1', 'hiperbilirrubinemia-neonatal', '¿Por qué esta ictericia preocupa?',
        ['Porque llega al ombligo', 'Porque apareció en las primeras 24 horas de vida', 'Porque toma seno materno', 'No preocupa: es fisiológica'], 1,
        'La ictericia de las primeras 24 horas se considera patológica hasta demostrar lo contrario.', 'easy'),
      q('pat-hbn-2', 'hiperbilirrubinemia-neonatal', '¿Qué se hace con la bilirrubina?',
        ['Se estima con la escala de Kramer y se espera', 'Se mide solo si llega a palmas y plantas', 'Se mide en sangre en las 2 horas siguientes', 'Se mide en sangre del cordón'], 2,
        'Kramer solo indica si hay ictericia; luego se repite cada 6 horas.'),
      q('pat-hbn-3', 'hiperbilirrubinemia-neonatal', '¿Qué causa es la más probable?',
        ['Ictericia por leche materna', 'Atresia de vías biliares', 'Hipotiroidismo congénito', 'Incompatibilidad ABO'], 3,
        'Madre O con hijo A: los anticuerpos anti-A IgG maternos pueden afectar desde el primer embarazo.'),
      q('pat-hbn-4', 'hiperbilirrubinemia-neonatal', '¿Qué estudios ayudan a buscar la causa?',
        ['Biometría, reticulocitos, grupo y Rh de madre e hijo y Coombs directo', 'Solo bilirrubina directa', 'Ultrasonido abdominal', 'Tamiz metabólico'], 0,
        'Buscan hemólisis y su origen inmunitario.'),
      q('pat-hbn-5', 'hiperbilirrubinemia-neonatal', '¿Qué complicación se quiere evitar con el tratamiento?',
        ['Neumonía', 'Kernicterus', 'Hipoglucemia', 'Enterocolitis'], 1,
        'La bilirrubina no conjugada daña los núcleos basales: parálisis cerebral, sordera y retraso del desarrollo.'),
    ],
  },
  fuentes: [F.ictericia],
}

const STFF: Patologia = {
  id: 'transfusion-feto-fetal',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Síndrome de transfusión feto-fetal',
  aka: 'STFF · transfusión gemelo a gemelo',
  ambito: 'Placenta monocorial',
  resumen:
    'Transfusión crónica y desbalanceada de sangre de un gemelo (DONANTE) al otro (RECEPTOR) por anastomosis vasculares de una placenta COMPARTIDA. Solo ocurre en embarazos monocoriales: el 20 a 25 % de los gemelares son monocoriales y, de estos, el 10 a 15 % se complica. Sin tratamiento, entre el 60 y el 90 % termina en muerte fetal, muerte neonatal o discapacidad; con fetoscopia y coagulación láser de las anastomosis, sobrevive al menos un bebé en el 70 a 85 %.',
  sections: [
    {
      id: 'stff-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content: 'En toda placenta monocorial hay anastomosis entre las circulaciones de los gemelos, y normalmente el intercambio está equilibrado. En el STFF el paso es desigual: un gemelo dona y el otro recibe. Los cambios aparecen en el segundo trimestre y se ven en el ultrasonido.',
        },
        {
          type: 'comparison',
          left: { title: 'Gemelo DONANTE', items: ['Hipovolemia', 'Oliguria: la vejiga deja de verse', 'OLIGOHIDRAMNIOS: puede quedar «pegado» a la membrana', 'Crece menos'] },
          right: { title: 'Gemelo RECEPTOR', items: ['Sobrecarga de volumen', 'Poliuria', 'POLIHIDRAMNIOS', 'Insuficiencia cardiaca e hidropesía'] },
        },
      ],
    },
    {
      id: 'stff-2',
      title: 'Diagnóstico y estadios',
      blocks: [
        {
          type: 'list',
          items: [
            'Determinar la CORIONICIDAD en el primer ultrasonido: el signo de la lambda indica dos corion; el signo de la T, uno solo. Después de la semana 16 estos signos son menos confiables.',
            'Un dato temprano: translucencia nucal o longitud cefalocaudal discordantes entre gemelos monocoriales a las 11–13.6 semanas.',
            'Vigilancia por ultrasonido desde la semana 16, cada 2 semanas hasta la 24; semanal si hay signos tempranos.',
            'Criterio diagnóstico: bolsillo máximo de líquido de 2 cm o menos en un saco y de 8 cm o más en el otro (más de 10 cm después de la semana 20).',
          ],
        },
        {
          type: 'table',
          title: 'Estadios de Quintero',
          data: {
            headers: ['Estadio', 'Hallazgo'],
            rows: [
              ['I', 'Discordancia de líquido: oligohidramnios en el donante y polihidramnios en el receptor'],
              ['II', 'No se ve la vejiga del donante'],
              ['III', 'Doppler críticamente anormal en cualquiera de los fetos'],
              ['IV', 'Hidropesía en un feto (derrames, ascitis, edema)'],
              ['V', 'Muerte de uno o de ambos fetos'],
            ],
          },
        },
      ],
    },
    {
      id: 'stff-3',
      title: 'Tratamiento',
      blocks: [
        {
          type: 'list',
          items: [
            'De elección en todos los estadios: FETOSCOPIA CON COAGULACIÓN LÁSER de las anastomosis placentarias. En el STFF grave antes de la semana 26 se prefiere al drenaje de líquido.',
            'Si no hay un centro con fetoscopia: AMNIODRENAJE (amniorreducción) o septostomía, después de agotar la posibilidad de referir.',
            'El láser también reduce el riesgo de alteraciones del neurodesarrollo.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-funcion-placentaria', sectionId: 'efp-10', label: 'Gemelos dicigóticos y monocigóticos', porQue: 'Solo los monocigóticos que se dividen después de la etapa de dos blastómeras comparten placenta.' },
    { materia: 'Embriología', topicId: 'embriologia-funcion-placentaria', sectionId: 'efp-11', label: 'Complicaciones de los embarazos gemelares', porQue: 'El síndrome de transfusión feto-fetal se vio en clase como complicación de los monocoriónicos.' },
    { materia: 'Embriología', topicId: 'embriologia-funcion-placentaria', sectionId: 'efp-9', label: 'Líquido amniótico', porQue: 'La orina fetal produce el líquido: el donante orina poco (oligohidramnios) y el receptor mucho (polihidramnios).' },
  ],
  atlas: [ATLAS_FUNCION, { id: 'embriologia-placenta', title: 'Placenta y membranas fetales' }],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Mujer de 29 años con embarazo gemelar de 19 semanas. En el primer trimestre se vio el signo de la T. Hoy, un gemelo tiene un bolsillo máximo de líquido de 1.5 cm y su vejiga no se ve; el otro, de 9 cm, con vejiga grande. El Doppler es normal y no hay hidropesía.',
    preguntas: [
      q('pat-stff-1', 'transfusion-feto-fetal', '¿Qué tipo de embarazo gemelar es?',
        ['Dicoriónico-diamniótico', 'Monocoriónico-monoamniótico', 'Monocoriónico-diamniótico', 'Dicigótico con placentas fusionadas'], 2,
        'El signo de la T indica un solo corion; hay dos bolsillos de líquido, así que son dos amnios.', 'easy'),
      q('pat-stff-2', 'transfusion-feto-fetal', '¿Cuál es el diagnóstico?',
        ['Restricción selectiva del crecimiento', 'Gemelo evanescente', 'Rotura de membranas', 'Síndrome de transfusión feto-fetal'], 3,
        'Bolsillo de 2 cm o menos en un saco y de 8 cm o más en el otro en un embarazo monocorial.'),
      q('pat-stff-3', 'transfusion-feto-fetal', '¿En qué estadio de Quintero está?',
        ['II', 'I', 'III', 'IV'], 0,
        'La vejiga del donante no se ve, pero el Doppler es normal y no hay hidropesía.'),
      q('pat-stff-4', 'transfusion-feto-fetal', '¿Cuál es el tratamiento de elección?',
        ['Interrupción inmediata del embarazo', 'Fetoscopia con coagulación láser de las anastomosis', 'Reposo y vigilancia mensual', 'Corticoesteroides'], 1,
        'Es de elección en todos los estadios, sobre todo antes de la semana 26.'),
      q('pat-stff-5', 'transfusion-feto-fetal', '¿Cuál de los gemelos tiene más riesgo de insuficiencia cardiaca e hidropesía?',
        ['El donante', 'Ninguno', 'El receptor', 'Los dos por igual'], 2,
        'Recibe sangre de más: sobrecarga de volumen, poliuria y polihidramnios.'),
    ],
  },
  fuentes: [F.multiple],
}

const ATRESIA_ESOFAGICA: Patologia = {
  id: 'atresia-esofagica',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Atresia esofágica',
  aka: 'Con o sin fístula traqueoesofágica',
  ambito: 'Intestino anterior',
  resumen:
    'El esófago termina en un fondo de saco ciego y no se comunica con el estómago; con frecuencia hay además una fístula entre el esófago y la tráquea. Es la atresia digestiva más común: 1 de cada 3 000 a 4 000 nacidos vivos. Hasta el 50 % tiene otras malformaciones y cerca del 20 % cumple criterios de asociación VACTERL. El feto no puede deglutir, por lo que puede haber polihidramnios. Se corrige con cirugía.',
  sections: [
    {
      id: 'ae-1',
      title: 'Qué es y cómo se manifiesta',
      blocks: [
        {
          type: 'list',
          items: [
            'Hay 5 tipos principales según dónde está la atresia y si hay fístula con la tráquea. Si hay FÍSTULA DISTAL, el aire pasa de la tráquea al estómago.',
            'ANTES DE NACER: polihidramnios (no es específico) y, en menos de la mitad, el estómago no se ve en el ultrasonido.',
            'AL NACER: secreciones excesivas, tos y CIANOSIS al intentar alimentarlo, y neumonía por aspiración. Con fístula distal, el abdomen se distiende al llorar.',
            'La fístula «en H», sin atresia, puede manifestarse hasta la infancia.',
          ],
        },
        {
          type: 'definition',
          title: 'Asociación VACTERL',
          content: 'Malformaciones Vertebrales, Anorrectales, Cardiacas, Traqueoesofágicas, Renales y de extremidades (Limb). Cerca del 20 % de los niños con atresia esofágica cumple sus criterios; también se asocia con el síndrome CHARGE.',
        },
      ],
    },
    {
      id: 'ae-2',
      title: 'Diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Se sospecha cuando la SONDA nasogástrica u orogástrica no llega al estómago.',
            'La radiografía con sonda radiopaca muestra la sonda ENROLLADA en el saco esofágico proximal y el nivel de la atresia.',
            'GAS EN EL INTESTINO indica que hay fístula distal.',
            'Se buscan las anomalías asociadas: ecocardiograma y ultrasonido renal.',
          ],
        },
      ],
    },
    {
      id: 'ae-3',
      title: 'Tratamiento y pronóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Antes de la cirugía: nada por la boca, nutrición parenteral y SUCCIÓN CONTINUA del saco proximal para que no aspire saliva; boca abajo con la cabeza elevada 30 a 40° para que no aspire ácido por la fístula.',
            'Cirugía cuando está estable: se liga la fístula y se unen los extremos del esófago (anastomosis primaria posible en ≈ 80 %). Si la brecha es larga: técnica de Foker, transposición gástrica o interposición de colon.',
            'Complicaciones: fuga o ESTENOSIS de la anastomosis. La motilidad del esófago distal es mala en el 80 a 90 %: reflujo en más del 40 % y disfagia; por eso se indica supresión de ácido a todos.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-funcion-placentaria', sectionId: 'efp-9', label: 'Líquido amniótico', porQue: 'El feto no puede deglutir el líquido amniótico y se acumula: polihidramnios.' },
    { materia: 'Embriología', topicId: 'embriologia-cavidades-corporales', sectionId: 'ecc-2', label: 'Plegamiento lateral y cefalocaudal', porQue: 'El plegamiento forma el intestino anterior, del que derivan el esófago y la tráquea.' },
  ],
  atlas: [ATLAS_FUNCION, { id: 'embriologia-cavidades-corporales', title: 'Tubo intestinal y cavidades corporales' }],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido de 37 semanas; en el ultrasonido prenatal hubo polihidramnios. Desde que nació babea mucho y en la primera toma tose y se pone cianótico. La sonda orogástrica se detiene a 10 cm de la encía.',
    preguntas: [
      q('pat-ae-1', 'atresia-esofagica', '¿Cuál es el diagnóstico más probable?',
        ['Atresia esofágica', 'Reflujo gastroesofágico', 'Estenosis pilórica', 'Hernia diafragmática'], 0,
        'Polihidramnios, secreciones excesivas, cianosis al comer y sonda que no pasa.', 'easy'),
      q('pat-ae-2', 'atresia-esofagica', '¿Qué muestra la radiografía con la sonda radiopaca?',
        ['Neumoperitoneo', 'Doble burbuja', 'La sonda enrollada en el saco esofágico proximal', 'Asas intestinales en el tórax'], 2,
        'Marca el nivel de la atresia.'),
      q('pat-ae-3', 'atresia-esofagica', 'La radiografía también muestra gas en el estómago y el intestino. ¿Qué significa?',
        ['Que la atresia es parcial', 'Que hay una fístula traqueoesofágica distal', 'Que la sonda perforó el esófago', 'Nada: es normal'], 1,
        'El aire pasa de la tráquea al esófago distal y al estómago.'),
      q('pat-ae-4', 'atresia-esofagica', '¿Qué estudios se piden antes de operar?',
        ['Electroencefalograma', 'Tomografía de cráneo', 'Cariotipo y tamiz auditivo', 'Ecocardiograma y ultrasonido renal'], 3,
        'Para buscar malformaciones de la asociación VACTERL.'),
      q('pat-ae-5', 'atresia-esofagica', '¿Qué medida evita que aspire saliva mientras espera la cirugía?',
        ['Darle leche espesada', 'Darle antibiótico oral', 'Acostarlo boca arriba sin elevar la cabeza', 'Succión continua del saco esofágico proximal'], 3,
        'Además, nada por la boca, nutrición parenteral y cabeza elevada 30 a 40°.'),
    ],
  },
  fuentes: [F.aeMerck],
}

export const FICHAS_MATERIAS_12: Patologia[] = [RPM, HIPERBILIRRUBINEMIA, STFF, ATRESIA_ESOFAGICA]
