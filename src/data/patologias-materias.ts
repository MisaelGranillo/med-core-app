/* Patologías por materia — fichas sobre temas ya cargados de Bioquímica,
 * Genética, Histología y Anatomía. Mismo formato que src/data/patologias.ts:
 * cada ficha se apoya en la GPC mexicana del Catálogo Maestro y, cuando no hay
 * una, en recomendaciones de organismos internacionales. Solo datos
 * verificados; los casos son escritos para MedCore. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  iam: { codigo: 'GPC IMSS-357-13', titulo: 'Diagnóstico y tratamiento del infarto agudo de miocardio con elevación del segmento ST en mayores de 65 años', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/357GER.pdf' },
  scasest: { codigo: 'GPC IMSS-191-08', titulo: 'Diagnóstico y tratamiento del síndrome coronario agudo sin elevación del segmento ST (actualización 2018)', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/191GER.pdf' },
  udmi: { codigo: 'ESC/ACC/AHA/WHF 2018', titulo: 'Cuarta definición universal del infarto de miocardio. Eur Heart J. 2019;40:237–269', url: 'https://doi.org/10.1093/eurheartj/ehy462' },
  cad: { codigo: 'ADA/EASD 2024', titulo: 'Hyperglycemic crises in adults with diabetes: a consensus report (ADA, EASD, AACE, JBDS, DTS). Diabetes Care. 2024;47(8):1257–1275', url: 'https://doi.org/10.2337/dci24-0032' },
  pancreatitis: { codigo: 'GPC IMSS-239-09', titulo: 'Diagnóstico y tratamiento de pancreatitis aguda', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/239GER.pdf' },
  downPrenatal: { codigo: 'GPC IMSS-494-11', titulo: 'Diagnóstico prenatal del síndrome de Down', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/494GER.pdf' },
  downAAP: { codigo: 'AAP 2022', titulo: 'Health supervision for children and adolescents with Down syndrome. Pediatrics. 2022;149(5):e2022057010', url: 'https://doi.org/10.1542/peds.2022-057010' },
  pku: { codigo: 'GPC IMSS-554-12', titulo: 'Tratamiento nutricional del paciente pediátrico y adolescente con fenilcetonuria', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/554GER.pdf' },
  hc: { codigo: 'GPC ISSSTE-135-08', titulo: 'Prevención, diagnóstico y tratamiento del hipotiroidismo congénito neonatal en el primer nivel de atención', url: 'https://www.facmed.unam.mx/sg/css/GPC/SIDSS-GPC/gpc/docs/ISSSTE-135-08-ER.pdf' },
  turner: { codigo: 'GPC IMSS-570-12', titulo: 'Diagnóstico, tratamiento y cuidado de la salud en niñas y mujeres con síndrome de Turner', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/570GER.pdf' },
  anemia: { codigo: 'GPC IMSS-415-10', titulo: 'Prevención, diagnóstico y tratamiento de la anemia por deficiencia de hierro en niños y adultos', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/415GER.pdf' },
  osteoporosis: { codigo: 'GPC IMSS-083-08', titulo: 'Diagnóstico y tratamiento de la osteoporosis en el adulto', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/083GER.pdf' },
  carpo: { codigo: 'GPC IMSS-043-08', titulo: 'Diagnóstico y tratamiento del síndrome del túnel del carpo en el primer nivel de atención (actualización 2016)', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/043GER.pdf' },
  lumbalgia: { codigo: 'GPC IMSS-045-08', titulo: 'Diagnóstico, tratamiento y prevención de lumbalgia aguda y crónica en el primer nivel de atención', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/045GER.pdf' },
  tobillo: { codigo: 'GPC IMSS-034-08', titulo: 'Diagnóstico y manejo del esguince de tobillo en la fase aguda en el primer nivel de atención (actualización 2013)', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/034GER.pdf' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Bioquímica ─────────────────────────────────────────────────── */

const INFARTO: Patologia = {
  id: 'infarto-agudo-miocardio',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Infarto agudo de miocardio',
  aka: 'IAM',
  ambito: 'Corazón',
  resumen:
    'Necrosis del músculo cardiaco por isquemia prolongada, casi siempre porque un trombo ocluye una arteria coronaria sobre una placa de ateroma. Se diagnostica con el cuadro clínico, el electrocardiograma y la curva de troponina.',
  sections: [
    {
      id: 'iam-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Infarto de miocardio (definición universal)',
          content:
            'Lesión miocárdica aguda, demostrada por una troponina que sube o baja con al menos un valor por encima del percentil 99 del límite superior de referencia, en un contexto clínico de isquemia: síntomas, cambios nuevos en el electrocardiograma, ondas Q patológicas o pérdida de miocardio viable en la imagen.',
        },
        {
          type: 'steps',
          title: 'De la placa al infarto',
          steps: [
            'El colesterol LDL se deposita en la pared de la arteria coronaria y forma una placa de ateroma.',
            'La placa se rompe o se erosiona y expone su contenido a la sangre.',
            'Las plaquetas se adhieren y se agregan; se forma un trombo que ocluye la luz.',
            'El miocardio sin oxígeno pasa a metabolismo anaerobio y deja de contraerse.',
            'Si la isquemia se prolonga, los cardiomiocitos mueren: «el tiempo es músculo».',
          ],
        },
        {
          type: 'comparison',
          title: 'Dos presentaciones del síndrome coronario agudo',
          left: {
            title: 'Con elevación del ST (IAMCEST)',
            items: ['Oclusión total de la coronaria', 'Elevación del ST en dos o más derivaciones contiguas', 'Necesita reperfusión urgente'],
          },
          right: {
            title: 'Sin elevación del ST (SCASEST)',
            items: ['Oclusión parcial o intermitente', 'Descenso del ST, inversión de la onda T o ECG normal', 'La troponina separa el infarto de la angina inestable'],
          },
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'Factores de riesgo',
          content:
            'Tabaquismo, diabetes, hipertensión, colesterol LDL alto, obesidad, sedentarismo, edad y antecedente familiar de cardiopatía isquémica. En México las enfermedades del corazón son la primera causa de muerte.',
        },
      ],
    },
    {
      id: 'iam-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          title: 'Lo típico',
          items: [
            'Dolor torácico opresivo, retroesternal, de al menos 20 minutos, que no cede con el reposo.',
            'Irradiación al brazo izquierdo, el cuello o la mandíbula.',
            'Diaforesis y palidez (activación del sistema nervioso autónomo), náusea, disnea.',
            'A la exploración no hay un signo específico: puede haber hipotensión, taquicardia o bradicardia, tercer ruido y estertores.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'El infarto sin dolor',
          content:
            'En adultos mayores, mujeres y personas con diabetes el infarto puede presentarse con fatiga, disnea, debilidad o síncope, sin dolor torácico. En estudios de cohorte, alrededor de 1 de cada 3 pacientes con infarto confirmado llegó con síntomas distintos al dolor.',
        },
      ],
    },
    {
      id: 'iam-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          title: 'Electrocardiograma: el primer estudio',
          items: [
            'Se toma en los primeros 10 minutos desde el primer contacto médico.',
            'IAMCEST: elevación nueva del ST en el punto J en dos derivaciones contiguas, de 0.1 mV o más en cualquier derivación; en V2–V3, de 0.2 mV en hombres y 0.15 mV en mujeres.',
            'Derivaciones contiguas: anteriores V1–V6; inferiores II, III y aVF; laterales I y aVL.',
            'Un bloqueo de rama izquierda nuevo se maneja como IAMCEST.',
          ],
        },
        {
          type: 'table',
          title: 'Biomarcadores de lesión miocárdica',
          data: {
            headers: ['Marcador', 'Sube', 'Pico', 'Se normaliza', 'Para qué sirve'],
            rows: [
              ['Troponina cardiaca (I o T)', '3–4 h', '12–24 h', '7–14 días', 'Elección: la más sensible y específica'],
              ['CK-MB', '3–6 h', '18–24 h', '48–72 h', 'Detectar un reinfarto, porque se normaliza pronto'],
              ['Mioglobina', '1–3 h', '6–10 h', '~24 h', 'Muy precoz, poco específica (también es del músculo esquelético)'],
            ],
          },
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Una troponina normal temprana no descarta',
          content:
            'La troponina tarda horas en subir: se mide de forma seriada. Y si el electrocardiograma ya muestra elevación del ST, la reperfusión no espera al resultado de la troponina.',
        },
      ],
    },
    {
      id: 'iam-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'steps',
          title: 'Lo que se busca',
          steps: [
            'Reperfundir lo antes posible: angioplastia primaria (intervención coronaria percutánea) si hay sala de hemodinamia disponible, dentro de las primeras 12 horas; si no, fibrinólisis.',
            'Antiagregación plaquetaria (ácido acetilsalicílico más un segundo antiagregante) y anticoagulación.',
            'Oxígeno solo si hay hipoxemia: la GPC de 2013 lo indica con saturación menor de 95 %; las guías europeas actuales, con saturación menor de 90 %.',
            'Nitroglicerina para el dolor, salvo hipotensión o infarto del ventrículo derecho; morfina si el dolor persiste.',
            'Al egreso: betabloqueador, inhibidor de la enzima convertidora de angiotensina y estatina, que reducen la mortalidad; dejar de fumar y cambiar hábitos.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-biomarcadores-enzimaticos', sectionId: 'bbm-2', label: 'Marcadores de lesión miocárdica', porQue: 'La cronología de troponina, CK-MB y mioglobina.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-enzimas-mecanismo-clinica', sectionId: 'bmc-4', label: 'Isoenzimas y biomarcadores', porQue: 'Por qué la CK-MB es más específica del corazón que la CK total.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-lipidos-funcion-esteroides', sectionId: 'bfe-5', label: 'Colesterol y esteroidogénesis', porQue: 'El colesterol que forma la placa de ateroma.' },
    { materia: 'Histología', topicId: 'histologia-medula-hematopoyesis', sectionId: 'hmed-2', label: 'Hemostasia', porQue: 'Adhesión y agregación plaquetaria: el trombo que ocluye la coronaria.' },
  ],
  atlas: [
    { id: 'bioquimica-biomarcadores', title: 'Biomarcadores enzimáticos' },
    { id: 'bioquimica-lipidos', title: 'Lípidos' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 58 años, fumador y con diabetes tipo 2, llega con 40 minutos de dolor opresivo retroesternal irradiado al brazo izquierdo y la mandíbula; está diaforético. TA 100/70 mmHg, FC 104 lpm. El electrocardiograma muestra elevación del ST de 0.3 mV en II, III y aVF. La troponina, tomada a la hora del inicio del dolor, es normal.',
    preguntas: [
      q('pat-iam-1', 'infarto-agudo-miocardio', '¿Qué cara del corazón está afectada?',
        ['Anterior', 'Lateral', 'Inferior', 'Posterior'], 2,
        'II, III y aVF son las derivaciones inferiores.', 'easy'),
      q('pat-iam-2', 'infarto-agudo-miocardio', '¿Cómo se interpreta la troponina normal?',
        ['Descarta el infarto', 'No lo descarta: la troponina empieza a subir a las 3–4 horas y se mide de forma seriada', 'Indica que el dolor no es cardiaco', 'Obliga a medir mioglobina en su lugar'], 1,
        'A una hora del inicio la troponina todavía puede ser normal. Por eso se repite.'),
      q('pat-iam-3', 'infarto-agudo-miocardio', '¿Qué es lo prioritario?',
        ['Esperar la segunda troponina para confirmar', 'Pedir una prueba de esfuerzo', 'Dar el alta con analgésico', 'Reperfundir: angioplastia primaria o, si no hay sala, fibrinólisis'], 3,
        'Con elevación del ST el diagnóstico es IAMCEST y la reperfusión no espera al laboratorio.'),
      q('pat-iam-4', 'infarto-agudo-miocardio', 'Cinco días después vuelve a tener dolor. ¿Qué marcador ayuda más a detectar un reinfarto?',
        ['CK-MB, porque se normaliza en 48–72 horas', 'Troponina, porque se normaliza en 24 horas', 'Mioglobina, porque es la más específica', 'LDH, porque es la más precoz'], 0,
        'La troponina sigue elevada 7–14 días; la CK-MB ya se normalizó, así que una nueva elevación indica un nuevo daño.'),
      q('pat-iam-5', 'infarto-agudo-miocardio', '¿Cuál es el mecanismo más frecuente del infarto?',
        ['Espasmo coronario aislado', 'Embolia de grasa', 'Ruptura de una placa de ateroma con formación de un trombo plaquetario', 'Anemia grave'], 2,
        'La placa rota expone su contenido; las plaquetas se agregan y el trombo ocluye la arteria.'),
    ],
  },
  fuentes: [F.iam, F.scasest, F.udmi],
}

const CETOACIDOSIS: Patologia = {
  id: 'cetoacidosis-diabetica',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Cetoacidosis diabética',
  aka: 'CAD',
  ambito: 'Metabolismo',
  resumen:
    'Complicación aguda de la diabetes por falta de insulina. Sin insulina la glucosa no entra a las células, el hígado quema grasa y produce cuerpos cetónicos que acidifican la sangre: hiperglucemia, cetonemia y acidosis metabólica.',
  sections: [
    {
      id: 'cad-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'table',
          title: 'Criterios diagnósticos (consenso ADA/EASD 2024): se requieren los tres',
          data: {
            headers: ['Letra', 'Criterio', 'Valor'],
            rows: [
              ['D (diabetes)', 'Hiperglucemia', 'Glucosa de 200 mg/dL o más, o diabetes ya conocida'],
              ['K (cetonas)', 'Cetonemia', 'β-hidroxibutirato de 3.0 mmol/L o más (o cetonas en orina de 2+ o más)'],
              ['A (acidosis)', 'Acidosis metabólica', 'pH menor de 7.3 y/o bicarbonato menor de 18 mmol/L'],
            ],
          },
        },
        {
          type: 'steps',
          title: 'Qué pasa en el cuerpo',
          steps: [
            'Falta insulina y suben las hormonas contrarreguladoras (glucagón, cortisol, catecolaminas).',
            'La glucosa no entra al músculo ni al tejido adiposo, y el hígado produce más glucosa: hiperglucemia.',
            'La glucosa se pierde por la orina y arrastra agua (diuresis osmótica): deshidratación y pérdida de electrolitos.',
            'El tejido adiposo libera ácidos grasos; el hígado los oxida y forma cuerpos cetónicos (acetoacetato, β-hidroxibutirato y acetona).',
            'Los cuerpos cetónicos son ácidos: consumen bicarbonato y producen una acidosis metabólica con brecha aniónica elevada.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'Qué la desencadena',
          content:
            'Sobre todo infecciones (urinaria, neumonía) y la omisión o falta de insulina; también el debut de la diabetes, el infarto, la pancreatitis y algunos fármacos (glucocorticoides, inhibidores de SGLT2). Es más común en la diabetes tipo 1, pero también ocurre en la tipo 2.',
        },
      ],
    },
    {
      id: 'cad-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          title: 'Se instala en horas a pocos días',
          items: [
            'Poliuria, polidipsia y pérdida de peso.',
            'Náusea, vómito y dolor abdominal.',
            'Datos de deshidratación: mucosas secas, taquicardia, hipotensión.',
            'Respiración de Kussmaul: profunda y rápida, para eliminar CO₂ y compensar la acidosis.',
            'Aliento afrutado por la acetona que se elimina por el pulmón.',
            'Somnolencia, estupor o coma en los casos graves.',
          ],
        },
        {
          type: 'table',
          title: 'Gravedad (consenso ADA/EASD 2024)',
          data: {
            headers: ['Gravedad', 'pH', 'Bicarbonato', 'β-hidroxibutirato', 'Conciencia'],
            rows: [
              ['Leve', '7.25–7.30', '15–18 mmol/L', '3.0–6.0 mmol/L', 'Alerta'],
              ['Moderada', '7.00–7.25', '10–15 mmol/L', '3.0–6.0 mmol/L', 'Alerta o somnoliento'],
              ['Grave', 'Menor de 7.00', 'Menor de 10 mmol/L', 'Más de 6.0 mmol/L', 'Estupor o coma'],
            ],
          },
        },
      ],
    },
    {
      id: 'cad-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          title: 'Estudios iniciales',
          items: [
            'Glucosa capilar y sérica.',
            'Cetonas: el β-hidroxibutirato en sangre es preferible a la tira de orina.',
            'Gasometría venosa: pH y bicarbonato.',
            'Electrolitos (sodio, potasio, cloro) para calcular la brecha aniónica: Na⁺ − (Cl⁻ + HCO₃⁻).',
            'Urea, creatinina y osmolaridad.',
            'Búsqueda del desencadenante: biometría hemática, examen general de orina, radiografía de tórax, electrocardiograma.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'El potasio engaña',
          content:
            'Al llegar, el potasio sérico puede estar normal o alto aunque el potasio corporal total esté bajo: la falta de insulina y la acidosis lo sacan de las células. Al dar insulina, el potasio vuelve a entrar a las células y cae en la sangre; por eso se vigila desde el inicio.',
        },
        {
          type: 'note',
          content:
            'El estado hiperglucémico hiperosmolar es la otra crisis de la diabetes: glucosa de 600 mg/dL o más y osmolaridad muy alta, sin cetoacidosis importante. Es más frecuente en adultos mayores con diabetes tipo 2.',
        },
      ],
    },
    {
      id: 'cad-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'steps',
          title: 'Consenso ADA/EASD 2024',
          steps: [
            'Líquidos IV: solución salina 0.9 % o un cristaloide balanceado, 500–1000 mL/h las primeras 2–4 horas (menos en adultos mayores o con insuficiencia cardiaca).',
            'Potasio antes que insulina: si es menor de 3.5 mmol/L se repone y la insulina se retrasa; entre 3.5 y 5.0 se agrega a los líquidos; si es mayor de 5.0 no se repone todavía y se vigila.',
            'Insulina IV en infusión, 0.1 U/kg/h. Cuando la glucosa baja de 250 mg/dL se agrega dextrosa al 5–10 % y se reduce la infusión: la meta es eliminar las cetonas, no solo bajar la glucosa.',
            'Bicarbonato solo si el pH es menor de 7.0.',
            'Tratar el desencadenante.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'Cuándo se resolvió',
          content:
            'Cetonas en sangre menores de 0.6 mmol/L y pH venoso de 7.3 o más o bicarbonato de 18 mmol/L o más. Ni la brecha aniónica ni las cetonas en orina sirven para decidirlo.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-glucidos-funcion', sectionId: 'bgf-5', label: 'Aldosas, cetosas y cuerpos cetónicos', porQue: 'Qué son los cuerpos cetónicos y por qué el aliento huele afrutado.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-glucidos', sectionId: 'bgl-2', label: 'La glucosa y sus destinos', porQue: 'Qué pasa con la glucosa cuando no hay insulina.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-equilibrio-acido-base', sectionId: 'bab-5', label: 'Los cuatro trastornos ácido-base', porQue: 'La cetoacidosis es una acidosis metabólica.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-equilibrio-acido-base', sectionId: 'bab-2', label: 'Regulación respiratoria: el CO₂', porQue: 'La respiración de Kussmaul es la compensación respiratoria.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-agua-osmolaridad-soluciones', sectionId: 'bao-6', label: 'Alteraciones: hiper e hipoosmolaridad', porQue: 'La glucosa alta eleva la osmolaridad y deshidrata a las células.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-agua-electrolitos', sectionId: 'bae-5', label: 'Alteraciones de los electrolitos', porQue: 'Por qué el potasio es el electrolito que más se vigila.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-hipofisis-pancreas', sectionId: 'bhe-2', label: 'Islotes de Langerhans', porQue: 'Sin insulina, el glucagón queda sin oposición y el hígado produce glucosa y cuerpos cetónicos.' },
  ],
  atlas: [
    { id: 'bioquimica-acido-base', title: 'Equilibrio ácido-base' },
    { id: 'bioquimica-glucidos', title: 'Glúcidos' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 19 años con diabetes tipo 1 que dejó de aplicarse insulina hace 2 días porque tenía vómito. Llega somnolienta, con dolor abdominal, respiración profunda y rápida y aliento afrutado. FC 120 lpm, TA 95/60 mmHg, FR 30 rpm. Glucosa 480 mg/dL, pH 7.05, HCO₃⁻ 11 mmol/L, β-hidroxibutirato 5.2 mmol/L, Na⁺ 131, Cl⁻ 98, K⁺ 5.6 mmol/L.',
    preguntas: [
      q('pat-cad-1', 'cetoacidosis-diabetica', 'Por pH, bicarbonato, cetonas y conciencia, ¿qué gravedad tiene?',
        ['Leve', 'Moderada', 'Grave', 'Es un estado hiperglucémico hiperosmolar'], 1,
        'pH 7.00–7.25, bicarbonato 10–15, β-hidroxibutirato 3–6 y somnolencia corresponden a una cetoacidosis moderada.'),
      q('pat-cad-2', 'cetoacidosis-diabetica', '¿Cuánto vale la brecha aniónica y qué la explica?',
        ['12, normal', '22, elevada por los cuerpos cetónicos', '33, elevada por el cloro', '8, baja por la hiponatremia'], 1,
        '131 − (98 + 11) = 22. Los cuerpos cetónicos son aniones que no se miden en la fórmula.'),
      q('pat-cad-3', 'cetoacidosis-diabetica', '¿Qué es la respiración profunda y rápida?',
        ['Una crisis de ansiedad', 'Una neumonía', 'Respiración de Kussmaul: elimina CO₂ para compensar la acidosis metabólica', 'Respiración de Cheyne-Stokes'], 2,
        'Al eliminar CO₂ baja el ácido carbónico y el pH sube un poco: es la compensación respiratoria.'),
      q('pat-cad-4', 'cetoacidosis-diabetica', 'Con K⁺ de 5.6 mmol/L, ¿qué se hace con el potasio?',
        ['No se repone todavía; se inicia la insulina y se vigila, porque el potasio bajará', 'Se da un quelante de potasio', 'Se retrasa la insulina hasta que el potasio baje', 'Se repone de inmediato'], 0,
        'Arriba de 5.0 no se repone aún. La insulina lo meterá a las células y caerá; se mide a las 2 horas y luego cada 4.'),
      q('pat-cad-5', 'cetoacidosis-diabetica', 'Horas después la glucosa es de 230 mg/dL, pero el pH sigue en 7.22. ¿Qué sigue?',
        ['Suspender la insulina', 'Pasar a insulina subcutánea y dar de alta', 'Dar bicarbonato', 'Seguir con la insulina, agregar dextrosa a los líquidos y bajar la infusión'], 3,
        'La cetoacidosis no se ha resuelto. La dextrosa evita la hipoglucemia mientras la insulina sigue frenando la producción de cetonas.'),
    ],
  },
  fuentes: [F.cad],
}

const PANCREATITIS: Patologia = {
  id: 'pancreatitis-aguda',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Pancreatitis aguda',
  ambito: 'Páncreas',
  resumen:
    'Inflamación aguda del páncreas en la que sus enzimas se activan dentro de la glándula. Las causas principales son los cálculos biliares y el alcohol. Se diagnostica con dos de tres criterios: dolor típico, lipasa o amilasa al triple del valor normal o más, e imagen.',
  sections: [
    {
      id: 'pan-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Pancreatitis aguda (GPC IMSS-239-09)',
          content:
            'Proceso inflamatorio agudo del páncreas que con frecuencia afecta el tejido peripancreático y puede afectar órganos y sistemas distantes.',
        },
        {
          type: 'paragraph',
          content:
            'El páncreas fabrica sus enzimas como zimógenos inactivos; el tripsinógeno se activa a tripsina hasta llegar al duodeno. En la pancreatitis se activa dentro de la glándula, activa a las demás enzimas y el páncreas se autodigiere. La inflamación puede extenderse y causar una respuesta inflamatoria sistémica con falla de órganos.',
        },
        {
          type: 'table',
          title: 'Causas',
          data: {
            headers: ['Causa', 'Frecuencia'],
            rows: [
              ['Litiasis biliar', '49–52 %'],
              ['Alcohol', '37–41 %'],
              ['Otras: hipertrigliceridemia, hipercalcemia, fármacos, después de una CPRE, traumatismo', 'El resto; una parte queda sin causa (idiopática)'],
            ],
          },
        },
      ],
    },
    {
      id: 'pan-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Dolor en el epigastrio, intenso y progresivo, que se irradia a la espalda.',
            'Náusea y vómito.',
            'Distensión abdominal y fiebre.',
            'En los casos graves: taquicardia, hipotensión, dificultad respiratoria y equimosis en los flancos (signo de Grey Turner) o alrededor del ombligo (signo de Cullen).',
          ],
        },
        {
          type: 'table',
          title: 'Gravedad (clasificación de Atlanta revisada, 2012)',
          data: {
            headers: ['Gravedad', 'Qué la define'],
            rows: [
              ['Leve', 'Sin falla orgánica ni complicaciones'],
              ['Moderadamente grave', 'Falla orgánica transitoria (menos de 48 h) o complicaciones locales'],
              ['Grave', 'Falla orgánica que persiste más de 48 h'],
            ],
          },
        },
      ],
    },
    {
      id: 'pan-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'steps',
          title: 'Se necesitan al menos dos de tres criterios (GPC)',
          steps: [
            'Cuadro clínico sugerente: dolor epigástrico irradiado a la espalda, con náusea y vómito.',
            'Lipasa y/o amilasa séricas al menos tres veces por encima del valor de referencia.',
            'Alteraciones del páncreas o de las estructuras vecinas en un estudio de imagen.',
          ],
        },
        {
          type: 'comparison',
          title: 'Lipasa frente a amilasa',
          left: {
            title: 'Lipasa',
            items: ['La de elección', 'Más específica del páncreas (sensibilidad 90–100 %, especificidad 99 %)', 'Se mantiene elevada más tiempo (8–14 días)'],
          },
          right: {
            title: 'Amilasa',
            items: ['Sube rápido', 'Se normaliza en 3–5 días aunque siga el cuadro', 'También tiene origen salival e intestinal'],
          },
        },
        {
          type: 'list',
          title: 'Imagen',
          items: [
            'Ultrasonido abdominal en todos los pacientes desde el inicio: busca cálculos en la vesícula y la vía biliar.',
            'Tomografía contrastada: se reserva para la duda diagnóstica o la sospecha de complicaciones, como la necrosis.',
          ],
        },
      ],
    },
    {
      id: 'pan-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'steps',
          steps: [
            'Líquidos IV con cristaloides para evitar la hipovolemia, el choque y la falla renal.',
            'Vigilar la oxigenación: con saturación de 95 % o menos, gasometría arterial.',
            'Analgesia.',
            'Nutrición: en cuanto se tolere, por vía oral o enteral (por sonda); se prefiere a la nutrición parenteral.',
            'Origen biliar: retirar la vesícula (colecistectomía) durante la misma hospitalización para evitar recurrencias.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-biomarcadores-enzimaticos', sectionId: 'bbm-3', label: 'Páncreas, hígado y próstata', porQue: 'Lipasa y amilasa: cuándo suben y cuánto duran.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-metabolismo-digestivo', sectionId: 'bmd-8', label: 'Hígado, bilis y páncreas', porQue: 'Las enzimas del jugo pancreático y su relación con la vía biliar.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-enzimas-mecanismo-clinica', sectionId: 'bmc-4', label: 'Isoenzimas y biomarcadores', porQue: 'Por qué una enzima en la sangre indica daño de un órgano.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-trigliceridos-fosfolipidos', sectionId: 'btf-2', label: 'Triglicéridos: estructura y función', porQue: 'La hipertrigliceridemia es una causa de pancreatitis.' },
  ],
  atlas: [
    { id: 'bioquimica-biomarcadores', title: 'Biomarcadores enzimáticos' },
    { id: 'bioquimica-metabolismo-digestivo', title: 'Metabolismo digestivo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 45 años, con obesidad y cólicos biliares previos, llega con 8 horas de dolor epigástrico intenso irradiado a la espalda y vómito. FC 108 lpm, TA 120/80 mmHg, temperatura 37.8 °C. Lipasa 1800 U/L (referencia menor de 60). El ultrasonido muestra cálculos en la vesícula.',
    preguntas: [
      q('pat-pan-1', 'pancreatitis-aguda', '¿Se puede diagnosticar ya la pancreatitis?',
        ['No, falta la tomografía', 'Sí: cumple dos de tres criterios, el dolor típico y la lipasa al triple del normal o más', 'No, falta la amilasa', 'Solo si hay fiebre alta'], 1,
        'Con dos criterios basta. La tomografía no es necesaria para el diagnóstico inicial.'),
      q('pat-pan-2', 'pancreatitis-aguda', '¿Cuál es la causa más probable?',
        ['Alcohol', 'Hipertrigliceridemia', 'Hipercalcemia', 'Litiasis biliar'], 3,
        'Tiene cólicos biliares previos y cálculos en la vesícula: la causa biliar es la más frecuente.', 'easy'),
      q('pat-pan-3', 'pancreatitis-aguda', '¿Por qué se prefiere la lipasa a la amilasa?',
        ['Es más específica del páncreas y se mantiene elevada más tiempo', 'Sube antes', 'Es más barata', 'También mide el daño hepático'], 0,
        'La amilasa también viene de las glándulas salivales y se normaliza en 3–5 días.'),
      q('pat-pan-4', 'pancreatitis-aguda', '¿Qué explica el daño de la glándula?',
        ['La falta de insulina', 'Una infección viral del páncreas', 'La activación del tripsinógeno dentro del páncreas, que lo autodigiere', 'La obstrucción del colédoco por moco'], 2,
        'Normalmente el tripsinógeno se activa hasta el duodeno; dentro del páncreas activa a las demás enzimas.'),
      q('pat-pan-5', 'pancreatitis-aguda', 'Al tercer día tiene falla renal que persiste más de 48 horas. Según Atlanta, la pancreatitis es:',
        ['Leve', 'Moderadamente grave', 'Grave', 'Crónica'], 2,
        'La falla orgánica que persiste más de 48 horas define la pancreatitis grave.'),
    ],
  },
  fuentes: [F.pancreatitis],
}

/* ── Genética ───────────────────────────────────────────────────── */

const DOWN: Patologia = {
  id: 'sindrome-down',
  kind: 'ficha',
  materia: 'Genética',
  title: 'Síndrome de Down',
  aka: 'Trisomía 21',
  ambito: 'Cromosomas',
  resumen:
    'Cromosomopatía por un cromosoma 21 extra. Es la aneuploidía más frecuente compatible con la vida y la causa genética más común de discapacidad intelectual. El riesgo aumenta con la edad materna.',
  sections: [
    {
      id: 'dow-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'table',
          title: 'Cómo se origina el cromosoma 21 extra',
          data: {
            headers: ['Mecanismo', 'Frecuencia', 'Qué implica'],
            rows: [
              ['Trisomía libre (47,XX,+21 o 47,XY,+21)', '95 %', 'No disyunción, casi siempre en la meiosis materna; no suele repetirse en la familia'],
              ['Translocación robertsoniana', '4 %', 'El 21 extra está fusionado a otro cromosoma (p. ej., el 14); puede heredarse de un progenitor portador'],
              ['Mosaicismo', '1 %', 'No disyunción en una mitosis después de la fecundación; fenotipo variable'],
            ],
          },
        },
        {
          type: 'paragraph',
          content:
            'Ocurre en alrededor de 1 de cada 700 nacidos vivos. Factores de riesgo (GPC IMSS-494-11): edad materna mayor de 35 años, edad paterna mayor de 45, hijo previo con una cromosomopatía y padres portadores de un rearreglo balanceado del cromosoma 21.',
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Por qué pesa la edad materna',
          content:
            'Los ovocitos primarios se detienen en la profase de la meiosis I desde la vida fetal y la terminan hasta la ovulación, décadas después. Cuanto más tiempo pasan detenidos, más probable es que los cromosomas homólogos no se separen bien.',
        },
      ],
    },
    {
      id: 'dow-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          title: 'Fenotipo',
          items: [
            'Hipotonía al nacer.',
            'Braquicefalia, cara plana, puente nasal deprimido, epicanto y fisuras palpebrales oblicuas hacia arriba; manchas de Brushfield en el iris.',
            'Protrusión lingual, orejas pequeñas de implantación baja, cuello corto con piel redundante en la nuca.',
            'Pliegue palmar transverso único, clinodactilia del quinto dedo y separación amplia entre el primero y el segundo ortejo (signo de la sandalia).',
            'Discapacidad intelectual de grado variable.',
          ],
        },
        {
          type: 'list',
          title: 'Problemas asociados que se buscan',
          items: [
            'Cardiopatía congénita en cerca de la mitad; la más característica es el canal auriculoventricular.',
            'Hipotiroidismo.',
            'Pérdida auditiva y alteraciones visuales.',
            'Malformaciones digestivas (atresia duodenal, enfermedad de Hirschsprung).',
            'Mayor riesgo de leucemia.',
            'Inestabilidad atlantoaxial y apnea obstructiva del sueño.',
          ],
        },
      ],
    },
    {
      id: 'dow-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'comparison',
          title: 'Tamizaje no es diagnóstico (GPC IMSS-494-11)',
          left: {
            title: 'Tamizaje prenatal (calcula el riesgo)',
            items: [
              'Semanas 11 a 13+6: edad materna + translucencia nucal + β-hCG libre + PAPP-A; detecta 85–90 %',
              'En el síndrome de Down la PAPP-A está baja y la β-hCG alta',
              'Segundo trimestre: cuádruple marcador (α-fetoproteína, estriol no conjugado, hCG e inhibina A)',
            ],
          },
          right: {
            title: 'Diagnóstico (lo confirma)',
            items: [
              'Prenatal: cariotipo en vellosidades coriales o líquido amniótico (estudios invasivos)',
              'Al nacer: cariotipo en sangre periférica',
              'Si hay translocación: cariotipo de los padres',
            ],
          },
        },
        {
          type: 'note',
          content:
            'Toda prueba prenatal requiere consejería genética previa y consentimiento informado.',
        },
      ],
    },
    {
      id: 'dow-4',
      title: 'Seguimiento: la idea general',
      blocks: [
        {
          type: 'paragraph',
          content:
            'No tiene cura; el seguimiento busca detectar a tiempo los problemas asociados y favorecer el desarrollo. Recomendaciones de la Academia Americana de Pediatría (2022):',
        },
        {
          type: 'list',
          items: [
            'Ecocardiograma a todos los recién nacidos.',
            'TSH al nacer, a los 6 y a los 12 meses, y después cada año.',
            'Evaluación de audición y visión.',
            'Biometría hemática al nacer.',
            'Estimulación temprana y terapias de lenguaje, física y ocupacional.',
            'Consejería genética a la familia, sobre todo si hay translocación.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-2', label: 'Anomalías numéricas y aneuploidía', porQue: 'Qué es una trisomía y cómo se produce.' },
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-4', label: 'Síndromes por aneuploidía', porQue: 'Down junto a Edwards, Patau y las aneuploidías sexuales.' },
    { materia: 'Genética', topicId: 'genetica-mitosis-meiosis', sectionId: 'gmm-2', label: 'Meiosis I: homólogos y crossing over', porQue: 'La no disyunción de los homólogos en la meiosis I.' },
    { materia: 'Genética', topicId: 'genetica-gametogenesis', sectionId: 'ggam-2', label: 'Ovogénesis', porQue: 'Por qué el ovocito pasa años detenido en la meiosis I.' },
    { materia: 'Genética', topicId: 'genetica-cromosomas-cariotipo', sectionId: 'gcro-5', label: 'Cariotipo humano', porQue: 'El estudio que confirma el diagnóstico.' },
    { materia: 'Histología', topicId: 'histologia-medula-hematopoyesis', sectionId: 'hmed-6', label: 'Correlación clínica: leucemia y otras alteraciones', porQue: 'El mayor riesgo de leucemia en el síndrome de Down.' },
  ],
  atlas: [
    { id: 'genetica-citogenetica-tamiz', title: 'Citogenética clínica y tamiz' },
    { id: 'genetica-cromosomas-cariotipo', title: 'Cromosomas, cariotipo y bandeo' },
    { id: 'genetica-gametogenesis', title: 'Gametogénesis y fecundación' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido de una madre de 41 años sin control prenatal. Presenta hipotonía, perfil facial plano, epicanto, protrusión lingual, pliegue palmar transverso único en ambas manos y separación amplia entre el primero y el segundo ortejo. Se ausculta un soplo cardiaco.',
    preguntas: [
      q('pat-dow-1', 'sindrome-down', '¿Qué estudio confirma el diagnóstico?',
        ['Ultrasonido de cráneo', 'Cariotipo en sangre periférica', 'Tamiz metabólico neonatal', 'Biometría hemática'], 1,
        'El diagnóstico es citogenético: el cariotipo muestra el cromosoma 21 extra y el mecanismo.', 'easy'),
      q('pat-dow-2', 'sindrome-down', '¿Cuál es el mecanismo más probable?',
        ['Translocación heredada del padre', 'Mosaicismo', 'Trisomía libre por no disyunción en la meiosis materna', 'Deleción del brazo corto del 21'], 2,
        'El 95 % son trisomías libres, casi siempre por no disyunción en la meiosis materna; la edad materna lo favorece.'),
      q('pat-dow-3', 'sindrome-down', 'El cariotipo muestra una translocación robertsoniana entre el 14 y el 21. ¿Qué se hace?',
        ['Nada más: no tiene implicación familiar', 'Repetir el cariotipo al año', 'Cariotipo de los padres y consejería genética', 'Iniciar levotiroxina'], 2,
        'Uno de los padres puede ser portador de una translocación balanceada, lo que aumenta el riesgo en futuros embarazos.'),
      q('pat-dow-4', 'sindrome-down', 'Por el soplo, ¿qué estudio sigue y qué cardiopatía es la más característica?',
        ['Ecocardiograma; canal auriculoventricular', 'Radiografía de tórax; coartación de aorta', 'Electrocardiograma; transposición de grandes vasos', 'Prueba de esfuerzo; estenosis aórtica'], 0,
        'Se hace ecocardiograma a todo recién nacido con síndrome de Down; cerca de la mitad tiene cardiopatía.'),
      q('pat-dow-5', 'sindrome-down', 'En un tamizaje del primer trimestre, ¿qué patrón aumenta el riesgo de síndrome de Down?',
        ['PAPP-A alta y β-hCG baja', 'PAPP-A baja y β-hCG alta, con translucencia nucal aumentada', 'α-fetoproteína alta', 'Glucosa materna alta'], 1,
        'Es un tamizaje: calcula el riesgo. El diagnóstico solo lo da el cariotipo.'),
    ],
  },
  fuentes: [F.downPrenatal, F.downAAP],
}

const FENILCETONURIA: Patologia = {
  id: 'fenilcetonuria',
  kind: 'ficha',
  materia: 'Genética',
  title: 'Fenilcetonuria',
  aka: 'PKU',
  ambito: 'Errores innatos del metabolismo',
  resumen:
    'Error innato del metabolismo de los aminoácidos, autosómico recesivo, por deficiencia de fenilalanina hidroxilasa. La fenilalanina se acumula y daña el cerebro; detectada por tamiz neonatal y tratada con dieta desde los primeros días, el desarrollo puede ser normal.',
  sections: [
    {
      id: 'pku-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'steps',
          title: 'La vía bloqueada',
          steps: [
            'La fenilalanina hidroxilasa (cofactor: tetrahidrobiopterina, BH4) convierte la fenilalanina en tirosina.',
            'Si falta la enzima, la fenilalanina se acumula en la sangre y los tejidos.',
            'Se desvía a fenilpiruvato, una fenilcetona que aparece en la orina (de ahí el nombre), y a fenilacetato.',
            'Falta tirosina, precursora de la melanina, la dopamina y las hormonas tiroideas.',
          ],
        },
        {
          type: 'paragraph',
          content:
            'Herencia autosómica recesiva: el gen PAH está en el brazo largo del cromosoma 12. Dos padres portadores sanos tienen un 25 % de probabilidad de tener un hijo afectado en cada embarazo. La incidencia mundial es de 1 en 10 000 a 20 000 recién nacidos; en México se estima de 1 en 20 000 a 70 000.',
        },
      ],
    },
    {
      id: 'pku-2',
      title: 'Cuadro clínico sin tratamiento',
      blocks: [
        {
          type: 'list',
          items: [
            'Al nacer el bebé se ve sano: la madre depuró la fenilalanina durante el embarazo.',
            'En los meses siguientes: discapacidad intelectual progresiva e irreversible, crisis convulsivas, microcefalia y alteraciones de la conducta.',
            'Olor a humedad o «a ratón» por el fenilacetato.',
            'Piel, cabello y ojos claros por la menor síntesis de melanina; eccema.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Por eso se busca antes de los síntomas',
          content:
            'El daño neurológico es irreversible. La GPC pide diagnosticar e iniciar el tratamiento lo antes posible, no más allá de los 10 días de vida. En una mujer con fenilcetonuria que se embaraza, la fenilalanina alta es teratógena: la dieta se controla antes y durante el embarazo.',
        },
      ],
    },
    {
      id: 'pku-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'steps',
          steps: [
            'Tamiz neonatal (obligatorio en México): gota de sangre del talón en papel filtro, una vez iniciada la alimentación.',
            'Un tamiz positivo no es diagnóstico: se cuantifica la fenilalanina en sangre (y la tirosina).',
            'Se descartan los defectos de la tetrahidrobiopterina, que se tratan de otra forma.',
          ],
        },
      ],
    },
    {
      id: 'pku-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-554-12',
          items: [
            'Dieta baja en fenilalanina desde la primera semana y de por vida.',
            'La fenilalanina es esencial: no se elimina por completo, se da en cantidades medidas.',
            'Fórmula de aminoácidos libre de fenilalanina, suplementada con tirosina, vitaminas y minerales.',
            'Se evitan los alimentos ricos en proteína (carne, pescado, queso, huevo) y el aspartamo; la leche materna se puede dar en cantidad controlada.',
            'Meta: fenilalanina de 120–360 µmol/L (2–6 mg/dL) hasta los 12 años y durante el embarazo; en mayores de 13 años, de 120 a 900 µmol/L.',
            'Medición frecuente: semanal durante el primer año.',
            'La sapropterina (BH4) solo en las formas que responden a ella.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-aminas-citocinas', sectionId: 'bha-3', label: 'Tirosina: catecolaminas, hormonas tiroideas y melanina', porQue: 'Lo que deja de formarse cuando falta tirosina.' },
    { materia: 'Genética', topicId: 'genetica-errores-metabolismo', sectionId: 'gmet-1', label: 'Tamiz neonatal', porQue: 'Cómo y cuándo se toma la muestra.' },
    { materia: 'Genética', topicId: 'genetica-errores-metabolismo', sectionId: 'gmet-2', label: 'Fenilcetonuria (PKU)', porQue: 'La enzima, la vía bloqueada y la dieta.' },
    { materia: 'Genética', topicId: 'genetica-mendel', sectionId: 'gmen-2', label: 'Las tres leyes', porQue: 'Por qué dos portadores sanos tienen un hijo afectado con probabilidad de 1/4.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-aminoacidos-clasificacion', sectionId: 'bac-3', label: 'Esenciales y destino del esqueleto carbonado', porQue: 'La fenilalanina es esencial: no puede quitarse por completo de la dieta.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-aminoacidos-clasificacion', sectionId: 'bac-4', label: 'Moléculas que derivan de los aminoácidos', porQue: 'De la tirosina salen la melanina y las catecolaminas.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-enzimas-estructura', sectionId: 'bez-5', label: 'Cofactores y coenzimas', porQue: 'La tetrahidrobiopterina es el cofactor de la enzima.' },
  ],
  atlas: [
    { id: 'genetica-citogenetica-tamiz', title: 'Citogenética clínica y tamiz' },
    { id: 'bioquimica-proteinas', title: 'Aminoácidos y proteínas' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido de 7 días, sano a la exploración, cuyo tamiz neonatal reporta fenilalanina elevada. Sus padres son sanos y primos entre sí.',
    preguntas: [
      q('pat-pku-1', 'fenilcetonuria', '¿Qué sigue?',
        ['Iniciar la dieta sin más estudios', 'Repetir el tamiz al mes', 'Cuantificar la fenilalanina en sangre para confirmar', 'Esperar a que aparezcan síntomas'], 2,
        'El tamiz no es diagnóstico. La confirmación debe ser rápida: el tratamiento no debe pasar de los 10 días de vida.'),
      q('pat-pku-2', 'fenilcetonuria', 'Si se confirma, ¿qué probabilidad tiene un siguiente hijo de estar afectado?',
        ['25 %', '50 %', '75 %', '0 %, porque los padres están sanos'], 0,
        'Ambos padres son portadores de una herencia autosómica recesiva. Que sean primos aumenta la probabilidad de compartir el mismo alelo.'),
      q('pat-pku-3', 'fenilcetonuria', '¿Qué reacción está bloqueada?',
        ['Tirosina → fenilalanina', 'Fenilalanina → tirosina, por la fenilalanina hidroxilasa', 'Galactosa → glucosa', 'Amoniaco → urea'], 1,
        'La fenilalanina hidroxilasa, con tetrahidrobiopterina como cofactor, forma tirosina.', 'easy'),
      q('pat-pku-4', 'fenilcetonuria', '¿Cómo es la dieta?',
        ['Sin nada de fenilalanina', 'Normal, con suplemento de tirosina', 'Alta en proteínas para compensar', 'Baja en fenilalanina en cantidades medidas, con fórmula libre de fenilalanina y tirosina'], 3,
        'La fenilalanina es esencial: quitarla del todo también daña el crecimiento.'),
      q('pat-pku-5', 'fenilcetonuria', 'Sin tratamiento, ¿por qué la piel y el cabello son más claros?',
        ['Por anemia', 'Porque falta tirosina para formar melanina', 'Por la acumulación de fenilpiruvato en la piel', 'Por falta de vitamina A'], 1,
        'La tirosina es la precursora de la melanina; sin la enzima se forma menos.'),
    ],
  },
  fuentes: [F.pku],
}

const HIPOTIROIDISMO: Patologia = {
  id: 'hipotiroidismo-congenito',
  kind: 'ficha',
  materia: 'Genética',
  title: 'Hipotiroidismo congénito',
  ambito: 'Tamiz neonatal',
  resumen:
    'Disminución de la acción de las hormonas tiroideas desde el nacimiento. Es una causa prevenible de discapacidad intelectual: casi nunca da síntomas al nacer, por eso se detecta con el tamiz neonatal y se trata con levotiroxina.',
  sections: [
    {
      id: 'hc-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Hipotiroidismo congénito (GPC ISSSTE-135-08)',
          content:
            'Disminución de la actividad biológica de las hormonas tiroideas en los tejidos, por producción deficiente, resistencia a su acción o alteración de su transporte o metabolismo.',
        },
        {
          type: 'table',
          title: 'Clasificación por origen',
          data: {
            headers: ['Tipo', 'Dónde está la falla', 'Causas'],
            rows: [
              ['Primario (el más frecuente)', 'Tiroides', 'Disgenesia (~85 %: agenesia, hipoplasia o ectopia) o dishormonogénesis (~15 %: defecto en la síntesis)'],
              ['Secundario', 'Hipófisis', 'Deficiencia de TSH'],
              ['Terciario', 'Hipotálamo', 'Deficiencia de TRH'],
              ['Transitorio', 'Pasajera', 'Antitiroideos o anticuerpos maternos, deficiencia de yodo'],
            ],
          },
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'Por qué es urgente',
          content:
            'Las hormonas tiroideas son indispensables para el neurodesarrollo y la maduración ósea en los primeros años. En México la incidencia es de alrededor de 1 en 2800 recién nacidos.',
        },
      ],
    },
    {
      id: 'hc-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Casi todos se ven normales al nacer, porque reciben hormona tiroidea de la madre durante el embarazo. Sin tratamiento, en semanas aparecen los datos que lista la GPC:',
        },
        {
          type: 'list',
          items: [
            'Somnolencia o letargo, hipotonía, llanto ronco, lentitud para comer.',
            'Ictericia prolongada (más de 2 semanas).',
            'Fontanela posterior amplia (más de 0.5 cm), facies tosca, macroglosia.',
            'Hernia umbilical y estreñimiento.',
            'Piel marmórea y fría, hipotermia y bradicardia.',
            'Retraso del crecimiento y del desarrollo.',
          ],
        },
      ],
    },
    {
      id: 'hc-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'steps',
          steps: [
            'Tamiz neonatal (obligatorio en México): TSH en sangre del talón, de preferencia entre el 3.º y el 5.º día de vida.',
            'Un tamiz anormal no es diagnóstico: se confirma con perfil tiroideo en suero.',
            'TSH alta con T4 libre baja confirma el hipotiroidismo primario.',
            'Después se investiga la causa (ultrasonido o gammagrama de tiroides).',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Por qué no en las primeras horas',
          content:
            'Al nacer, el frío provoca un pico fisiológico de TSH (60–80 mU/L en la primera media hora) que baja en los días siguientes. Una muestra muy temprana da falsos positivos. Se repite la muestra en prematuros, recién nacidos de menos de 2.5 kg, enfermos graves y gemelos.',
        },
      ],
    },
    {
      id: 'hc-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC ISSSTE-135-08',
          items: [
            'Levotiroxina oral en ayuno, por la mañana, con dosis inicial de 12–15 µg/kg/día; se ajusta con el crecimiento.',
            'Ante la sospecha clínica sin posibilidad de confirmar, se inicia el tratamiento: las secuelas de no tratar son peores.',
            'Separarla al menos 2 horas de los suplementos de hierro o calcio, que disminuyen su absorción.',
            'Control periódico de TSH y T4 y evaluación del neurodesarrollo.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-aminas-citocinas', sectionId: 'bha-3', label: 'Tirosina: catecolaminas, hormonas tiroideas y melanina', porQue: 'Cómo se forman T₄ y T₃ en la tiroglobulina.' },
    { materia: 'Genética', topicId: 'genetica-errores-metabolismo', sectionId: 'gmet-1', label: 'Tamiz neonatal', porQue: 'Qué enfermedades busca y cuándo se toma la muestra.' },
    { materia: 'Genética', topicId: 'genetica-errores-metabolismo', sectionId: 'gmet-3', label: 'Hipotiroidismo congénito', porQue: 'Disgenesia tiroidea, TSH y levotiroxina.' },
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-4', label: 'Síndromes por aneuploidía', porQue: 'El síndrome de Down y el de Turner son factores de riesgo.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-aminoacidos-clasificacion', sectionId: 'bac-4', label: 'Moléculas que derivan de los aminoácidos', porQue: 'Las hormonas tiroideas se forman a partir de la tirosina.' },
    { materia: 'Histología', topicId: 'histologia-hueso', sectionId: 'hhue-6', label: 'Osificación: intramembranosa vs endocondral', porQue: 'Sin hormona tiroidea se retrasa la maduración ósea.' },
  ],
  atlas: [
    { id: 'genetica-citogenetica-tamiz', title: 'Citogenética clínica y tamiz' },
    { id: 'histologia-cartilago-hueso', title: 'Adiposo, cartílago y hueso' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Lactante de 3 semanas nacida en casa, sin tamiz neonatal. La mamá la nota muy dormilona; come lento y está estreñida. Persiste con ictericia. Tiene hernia umbilical, macroglosia y fontanela posterior de 1 cm.',
    preguntas: [
      q('pat-hc-1', 'hipotiroidismo-congenito', '¿Qué estudio se pide?',
        ['Ultrasonido abdominal', 'Perfil tiroideo en suero de inmediato', 'Cariotipo', 'Esperar al siguiente control'], 1,
        'Sin tamiz y con datos clínicos, la GPC indica perfil tiroideo inmediato.', 'easy'),
      q('pat-hc-2', 'hipotiroidismo-congenito', 'Resultado: TSH 95 mU/L y T4 libre baja. ¿Dónde está la falla?',
        ['En la tiroides (primario)', 'En la hipófisis (secundario)', 'En el hipotálamo (terciario)', 'Es una resistencia periférica'], 0,
        'La hipófisis responde con TSH alta porque la tiroides no produce suficiente hormona.'),
      q('pat-hc-3', 'hipotiroidismo-congenito', '¿Cuál es el tratamiento?',
        ['Yodo oral', 'Hormona de crecimiento', 'Esperar la maduración espontánea', 'Levotiroxina oral de inmediato, 12–15 µg/kg/día'], 3,
        'Cada día sin tratamiento aumenta el riesgo de daño neurológico.'),
      q('pat-hc-4', 'hipotiroidismo-congenito', '¿Cuál es la causa más frecuente?',
        ['Deficiencia de TSH', 'Dishormonogénesis', 'Disgenesia tiroidea', 'Anticuerpos maternos'], 2,
        'La disgenesia (agenesia, hipoplasia o ectopia) explica cerca del 85 %.'),
      q('pat-hc-5', 'hipotiroidismo-congenito', '¿Por qué el tamiz no se toma en las primeras horas de vida?',
        ['Porque el bebé no ha comido', 'Por el pico fisiológico de TSH después del nacimiento, que daría falsos positivos', 'Porque el talón es muy pequeño', 'Porque la T4 materna lo impide'], 1,
        'La TSH sube mucho en la primera media hora y luego desciende; se espera al 3.º–5.º día.'),
    ],
  },
  fuentes: [F.hc],
}

const TURNER: Patologia = {
  id: 'sindrome-turner',
  kind: 'ficha',
  materia: 'Genética',
  title: 'Síndrome de Turner',
  aka: '45,X',
  ambito: 'Cromosomas sexuales',
  resumen:
    'Ausencia total o parcial de un cromosoma X en una persona con fenotipo femenino. Se caracteriza por talla baja y disgenesia gonadal; la inteligencia suele ser normal.',
  sections: [
    {
      id: 'tur-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Síndrome de Turner (GPC IMSS-570-12)',
          content:
            'Anomalía de los cromosomas sexuales caracterizada por talla baja y disgenesia gonadal en mujeres con un solo cromosoma X y ausencia de todo o parte del segundo cromosoma sexual (X o Y).',
        },
        {
          type: 'list',
          title: 'Cariotipos posibles',
          items: [
            'Monosomía 45,X: la forma clásica.',
            'Mosaicos, como 45,X/46,XX: fenotipo más leve.',
            'Alteraciones estructurales del segundo X: isocromosoma del brazo largo, deleciones, cromosoma en anillo.',
            'Material del cromosoma Y: aumenta el riesgo de gonadoblastoma.',
          ],
        },
        {
          type: 'paragraph',
          content:
            'Afecta a alrededor de 1 de cada 2500 niñas nacidas vivas. A diferencia de las trisomías, su riesgo no aumenta con la edad materna.',
        },
      ],
    },
    {
      id: 'tur-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          title: 'Rasgos (GPC)',
          items: [
            'Linfedema de manos y pies en la recién nacida.',
            'Talla baja: por debajo del percentil 5 hacia los 2 años en la mayoría.',
            'Cuello alado (pterigium colli), línea capilar posterior baja, tórax ancho con pezones separados.',
            'Cúbito valgo, cuarto metacarpiano corto, uñas pequeñas e hiperconvexas, paladar alto.',
            'Otitis media de repetición y nevos múltiples.',
          ],
        },
        {
          type: 'list',
          title: 'Lo que hay que buscar',
          items: [
            'Falla ovárica en más del 90 %: amenorrea primaria (~85 %), pubertad retrasada, infertilidad y FSH alta.',
            'Corazón y aorta: válvula aórtica bicúspide (~30 %), coartación de aorta (~12 %), dilatación y riesgo de disección aórtica.',
            'Malformaciones renales, hipotiroidismo y enfermedad celiaca.',
            'Inteligencia en rango normal, con dificultades de aprendizaje en algunas.',
          ],
        },
      ],
    },
    {
      id: 'tur-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'steps',
          title: 'GPC IMSS-570-12',
          steps: [
            'Sospechar en toda niña con talla baja inexplicable, pubertad retrasada, cuello alado, linfedema o coartación de aorta.',
            'Cariotipo con bandeo G en linfocitos de sangre periférica, analizando 30 células para detectar mosaicismos de 10 % o más.',
            'Si la sospecha es alta y el cariotipo es normal: 50 metafases, FISH o cariotipo en otro tejido (piel).',
            'Buscar material del cromosoma Y.',
          ],
        },
        {
          type: 'note',
          content:
            'Prenatal: el higroma quístico, el hidrops fetal o la coartación en el ultrasonido aumentan la sospecha. Se confirma con cariotipo en líquido amniótico y se repite al nacer.',
        },
      ],
    },
    {
      id: 'tur-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Hormona de crecimiento recombinante en cuanto se demuestra la falla de crecimiento.',
            'Estrógenos para inducir la pubertad, mantener los caracteres sexuales y prevenir la osteoporosis.',
            'Vigilancia cardiovascular (válvula aórtica, diámetro de la aorta, presión arterial), renal, auditiva y tiroidea.',
            'Gonadectomía preventiva si hay material del cromosoma Y.',
            'Atención por un equipo multidisciplinario.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-4', label: 'Síndromes por aneuploidía', porQue: 'Turner (45,X) frente a Klinefelter y triple X.' },
    { materia: 'Genética', topicId: 'genetica-dsd', sectionId: 'gdsd-5', label: 'Turner y Klinefelter dentro de las DSD', porQue: 'Por qué se considera una diferencia del desarrollo sexual.' },
    { materia: 'Genética', topicId: 'genetica-diferenciacion-sexual', sectionId: 'gdsx-4', label: 'Vía femenina y conductos', porQue: 'El ovario necesita dos X para mantenerse: sin el segundo se forma una gónada en cintilla.' },
    { materia: 'Genética', topicId: 'genetica-cromosomas-herencia', sectionId: 'gher-5', label: 'Bandeo cromosómico y nomenclatura del locus', porQue: 'El bandeo G con el que se hace el cariotipo.' },
    { materia: 'Histología', topicId: 'histologia-hueso', sectionId: 'hhue-7', label: 'Remodelación y regulación', porQue: 'Sin estrógenos se pierde masa ósea.' },
  ],
  atlas: [
    { id: 'genetica-citogenetica-tamiz', title: 'Citogenética clínica y tamiz' },
    { id: 'genetica-desarrollo', title: 'Desarrollo embrionario y sexual' },
    { id: 'genetica-cromosomas-cariotipo', title: 'Cromosomas, cariotipo y bandeo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Adolescente de 15 años sin menarquia. Mide 140 cm (debajo del percentil 3). Tiene cuello corto con pliegues laterales, línea capilar baja, tórax ancho, cúbito valgo y cuarto metacarpiano corto. FSH elevada. La presión en el brazo derecho es de 150/90 mmHg y los pulsos femorales son débiles.',
    preguntas: [
      q('pat-tur-1', 'sindrome-turner', '¿Qué estudio confirma la sospecha?',
        ['Cariotipo en sangre periférica', 'Ultrasonido pélvico', 'Densitometría', 'Tamiz neonatal'], 0,
        'El diagnóstico requiere el fenotipo y la ausencia total o parcial del segundo cromosoma sexual.', 'easy'),
      q('pat-tur-2', 'sindrome-turner', '¿Qué indica la FSH alta?',
        ['Un tumor hipofisario', 'Falla ovárica primaria: la hipófisis estimula a un ovario que no responde', 'Pubertad precoz', 'Exceso de estrógenos'], 1,
        'Es un hipogonadismo hipergonadotrópico, típico de la disgenesia gonadal.'),
      q('pat-tur-3', 'sindrome-turner', 'Hipertensión en los brazos con pulsos femorales débiles sugiere:',
        ['Insuficiencia aórtica', 'Comunicación interventricular', 'Coartación de aorta', 'Estenosis pulmonar'], 2,
        'La coartación estrecha la aorta después de la salida de las arterias de los brazos. Ocurre en cerca del 12 % de las pacientes con Turner.'),
      q('pat-tur-4', 'sindrome-turner', 'El cariotipo es 45,X/46,XY. ¿Qué implica?',
        ['Que es un varón', 'Nada distinto a 45,X', 'Que no necesita estrógenos', 'Riesgo de gonadoblastoma: se considera gonadectomía preventiva'], 3,
        'La presencia de material del cromosoma Y en la gónada disgenética aumenta el riesgo de tumor.'),
      q('pat-tur-5', 'sindrome-turner', '¿Para qué se usan los estrógenos?',
        ['Para aumentar la talla', 'Para inducir la pubertad, mantener los caracteres sexuales y proteger el hueso', 'Para corregir la coartación', 'Para restaurar la fertilidad'], 1,
        'La talla se trata antes con hormona de crecimiento; los estrógenos sustituyen lo que el ovario no produce.'),
    ],
  },
  fuentes: [F.turner],
}

/* ── Histología ─────────────────────────────────────────────────── */

const ANEMIA: Patologia = {
  id: 'anemia-ferropenica',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Anemia ferropénica',
  aka: 'Anemia por deficiencia de hierro',
  ambito: 'Sangre',
  resumen:
    'Anemia por falta de hierro para formar hemoglobina: los eritrocitos salen pequeños (microcíticos) y pálidos (hipocrómicos). Es la anemia más frecuente; en el adulto obliga a buscar dónde se pierde sangre.',
  sections: [
    {
      id: 'afe-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Anemia (OMS)',
          content:
            'Disminución de la concentración de hemoglobina: menos de 13 g/dL en hombres y menos de 12 g/dL en mujeres no embarazadas. Los niños y las embarazadas tienen sus propios límites.',
        },
        {
          type: 'list',
          title: 'Causas',
          items: [
            'Aporte insuficiente: dieta pobre en hierro.',
            'Mayor necesidad: lactancia, crecimiento, adolescencia, embarazo.',
            'Mala absorción: enfermedad celiaca, cirugía gástrica.',
            'Pérdida de sangre: menstruación abundante en mujeres en edad fértil; sangrado de tubo digestivo en hombres y mujeres posmenopáusicas.',
          ],
        },
        {
          type: 'steps',
          title: 'Se instala por etapas',
          steps: [
            'Se agotan los depósitos: ferritina baja, hemoglobina todavía normal.',
            'Falta hierro para la eritropoyesis: baja el hierro sérico y la saturación de transferrina.',
            'Anemia microcítica e hipocrómica.',
          ],
        },
      ],
    },
    {
      id: 'afe-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'comparison',
          title: 'Lo que da la anemia y lo que da la falta de hierro (GPC)',
          left: {
            title: 'Por la anemia',
            items: ['Cansancio y menor capacidad para las actividades', 'Disnea, palpitaciones, taquicardia', 'Palidez de piel y mucosas', 'Angina o calambres en casos graves'],
          },
          right: {
            title: 'Por la falta de hierro',
            items: ['Pica (comer hielo, tierra u otras sustancias)', 'Glositis, queilitis angular, estomatitis', 'Coiloniquia (uñas en cuchara)', 'Piernas inquietas; en niños, retraso del crecimiento y de la atención'],
          },
        },
      ],
    },
    {
      id: 'afe-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'table',
          title: 'Lo que se espera en los estudios (GPC)',
          data: {
            headers: ['Estudio', 'Resultado'],
            rows: [
              ['Hemoglobina y hematocrito', 'Bajos'],
              ['Volumen corpuscular medio (VCM)', 'Bajo: microcitosis'],
              ['Hemoglobina corpuscular media (HCM)', 'Normal o baja: hipocromía'],
              ['Ancho de distribución eritrocitaria (ADE)', 'Alto: eritrocitos de tamaños distintos'],
              ['Plaquetas', 'Normales o altas'],
              ['Reticulocitos', 'Normales: la médula no puede responder sin hierro'],
              ['Hierro sérico', 'Bajo'],
              ['Capacidad total de fijación del hierro', 'Alta'],
              ['Saturación de transferrina', 'Baja'],
              ['Ferritina', 'Baja: la mejor prueba. Menos de 12 µg/L en mujeres premenopáusicas o menos de 20 µg/L en hombres y posmenopáusicas confirma'],
            ],
          },
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Encontrar la causa es parte del diagnóstico',
          content:
            'En un hombre o en una mujer posmenopáusica con anemia ferropénica se busca un sangrado de tubo digestivo. La ferritina también sube con la inflamación: un valor normal no descarta la deficiencia si hay una enfermedad inflamatoria.',
        },
      ],
    },
    {
      id: 'afe-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-415-10',
          items: [
            'Sulfato ferroso oral. Dosis de hierro elemental: adultos 180 mg/día divididos en tres tomas; niños 3–6 mg/kg/día.',
            'Efectos adversos: náusea, dolor abdominal, estreñimiento o diarrea y heces oscuras.',
            'Continuar después de normalizar la hemoglobina para llenar los depósitos.',
            'Tratar la causa.',
            'Profilaxis en el embarazo: 60 mg de hierro elemental al día, del segundo trimestre a 3 meses después del parto.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-sangre', sectionId: 'hsan-5', label: 'Eritrocitos y hemoglobina', porQue: 'Cada grupo hemo lleva un Fe²⁺: sin hierro no hay hemoglobina.' },
    { materia: 'Histología', topicId: 'histologia-sangre', sectionId: 'hsan-6', label: 'Eritropoyesis, EPO y grupos sanguíneos', porQue: 'El reticulocito y la respuesta de la médula.' },
    { materia: 'Histología', topicId: 'histologia-biometria-hematica', sectionId: 'hbh-2', label: 'Valores de referencia y su significado', porQue: 'Cómo leer VCM, HCM y ADE.' },
    { materia: 'Histología', topicId: 'histologia-medula-hematopoyesis', sectionId: 'hmed-4', label: 'Hematopoyesis: HSC y las dos líneas', porQue: 'De dónde salen los eritrocitos.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-coenzimas-minerales-p450', sectionId: 'bcm-3', label: 'Minerales como cofactores', porQue: 'El hierro en la hemoglobina, la mioglobina y los citocromos.' },
  ],
  atlas: [
    { id: 'histologia-biometria-hematica', title: 'Biometría hemática' },
    { id: 'histologia-sangre', title: 'Sangre y elementos formes' },
    { id: 'histologia-linfoide-hematopoyesis', title: 'Órganos linfoides y hematopoyesis' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 32 años con menstruaciones abundantes de 8 días. Refiere cansancio, disnea al subir escaleras y ganas de comer hielo todo el día. Palidez, uñas cóncavas. Hb 8.9 g/dL, VCM 68 fL, HCM 22 pg, ADE 18 %, plaquetas 450 000/µL, reticulocitos 0.8 %, ferritina 6 µg/L.',
    preguntas: [
      q('pat-afe-1', 'anemia-ferropenica', '¿Cómo es la anemia por su morfología?',
        ['Microcítica hipocrómica', 'Macrocítica', 'Normocítica normocrómica', 'Hemolítica'], 0,
        'VCM y HCM bajos: eritrocitos pequeños y pálidos.', 'easy'),
      q('pat-afe-2', 'anemia-ferropenica', '¿Qué estudio confirma mejor la deficiencia de hierro?',
        ['Reticulocitos', 'Ferritina sérica baja', 'Recuento de plaquetas', 'Hemoglobina'], 1,
        'La ferritina refleja los depósitos. Menos de 12 µg/L en una mujer premenopáusica confirma.'),
      q('pat-afe-3', 'anemia-ferropenica', 'Las ganas de comer hielo son un ejemplo de:',
        ['Coiloniquia', 'Glositis', 'Pica', 'Disfagia'], 2,
        'La pica (en este caso pagofagia) es un síntoma característico de la falta de hierro.'),
      q('pat-afe-4', 'anemia-ferropenica', '¿Qué perfil de hierro se espera?',
        ['Hierro alto, transferrina baja', 'Todo normal', 'Hierro bajo, capacidad de fijación baja, saturación alta', 'Hierro bajo, capacidad de fijación alta, saturación baja'], 3,
        'Hay transferrina libre de sobra (capacidad de fijación alta) y poco hierro que transportar.'),
      q('pat-afe-5', 'anemia-ferropenica', 'Si fuera un hombre de 60 años con la misma anemia, ¿qué se busca?',
        ['Un sangrado de tubo digestivo', 'Una deficiencia de vitamina B12', 'Una hemólisis', 'Nada: basta con dar hierro'], 0,
        'En hombres y en mujeres posmenopáusicas la pérdida digestiva es la causa a descartar.'),
    ],
  },
  fuentes: [F.anemia],
}

const OSTEOPOROSIS: Patologia = {
  id: 'osteoporosis',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Osteoporosis',
  ambito: 'Hueso',
  resumen:
    'Enfermedad del esqueleto en la que la reabsorción ósea supera a la formación: baja la masa ósea, se deteriora la microarquitectura y el hueso se fractura con traumatismos mínimos. No duele hasta que hay una fractura.',
  sections: [
    {
      id: 'ost-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Osteoporosis (GPC IMSS-083-08)',
          content:
            'Enfermedad esquelética crónica y progresiva caracterizada por masa ósea baja, deterioro de la microarquitectura del tejido óseo, menor fortaleza del hueso, fragilidad y, en consecuencia, mayor riesgo de fractura.',
        },
        {
          type: 'paragraph',
          content:
            'En el adulto sano la formación (osteoblastos) iguala a la reabsorción (osteoclastos). Los estrógenos frenan a los osteoclastos; con la menopausia ese freno se pierde y la reabsorción se acelera. El hueso esponjoso, con más superficie, se pierde primero: por eso las vértebras y el radio distal se fracturan antes.',
        },
        {
          type: 'table',
          title: 'Factores de riesgo (GPC)',
          data: {
            headers: ['Tipo', 'Factores'],
            rows: [
              ['No modificables', 'Sexo femenino, edad mayor de 65 años, posmenopausia, menopausia antes de los 45, antecedente familiar de fractura de cadera'],
              ['Modificables', 'Tabaquismo, alcohol en exceso, IMC menor de 19, baja ingesta de calcio, deficiencia de vitamina D'],
              ['Causas secundarias', 'Glucocorticoides por más de 3 meses, anticonvulsivantes, artritis reumatoide, hiperparatiroidismo, hipogonadismo, malabsorción (enfermedad celiaca)'],
            ],
          },
        },
      ],
    },
    {
      id: 'ost-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La osteoporosis por sí misma no produce síntomas. Su consecuencia es la fractura por fragilidad: la que ocurre con un traumatismo que no rompería un hueso sano, como una caída desde la propia altura.',
        },
        {
          type: 'table',
          title: 'Dónde se fractura (GPC)',
          data: {
            headers: ['Sitio', 'Cómo se presenta'],
            rows: [
              ['Vértebras (dorsales bajas y L1–L3)', 'Dos de cada tres no dan síntomas; pérdida de estatura y cifosis progresiva'],
              ['Cadera (fémur proximal)', 'La más grave: aumenta la morbilidad y la mortalidad'],
              ['Radio distal (fractura de Colles)', 'Al caer sobre la mano extendida'],
              ['Otros', 'Húmero proximal, pelvis, fémur distal, costillas'],
            ],
          },
        },
      ],
    },
    {
      id: 'ost-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          title: 'Densitometría (DXA)',
          items: [
            'Absorciometría dual de rayos X central (cadera y columna lumbar): el estándar de oro.',
            'El índice T compara la densidad con la de un adulto joven del mismo sexo, en desviaciones estándar.',
            'También se diagnostica por la presencia de una fractura por fragilidad, una vez excluidas otras causas.',
          ],
        },
        {
          type: 'table',
          title: 'Categorías de la OMS por índice T',
          data: {
            headers: ['Índice T', 'Categoría'],
            rows: [
              ['−1.0 o más', 'Normal'],
              ['Entre −1.0 y −2.5', 'Masa ósea baja (osteopenia)'],
              ['−2.5 o menos', 'Osteoporosis'],
              ['−2.5 o menos con fractura por fragilidad', 'Osteoporosis grave (establecida)'],
            ],
          },
        },
        {
          type: 'note',
          content:
            'Para descartar causas secundarias la GPC pide biometría hemática, creatinina, transaminasas, proteínas, albúmina, calcio, fosfatasa alcalina y calcio en orina de 24 horas. Los marcadores de recambio óseo no se usan de rutina para el diagnóstico.',
        },
      ],
    },
    {
      id: 'ost-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-083-08',
          items: [
            'Calcio (1000 mg/día) y vitamina D₃ (800 UI/día), con la dieta o en suplementos.',
            'Ejercicio, prevención de caídas, dejar el tabaco y moderar el alcohol y el café.',
            'Bifosfonatos (alendronato, risedronato): primera línea; frenan a los osteoclastos y reducen fracturas vertebrales y de cadera. Se toman en ayuno, con agua.',
            'Raloxifeno cuando los bifosfonatos están contraindicados o no se toleran.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-hueso', sectionId: 'hhue-5', label: 'Células óseas', porQue: 'Osteoblasto que forma y osteoclasto que reabsorbe.' },
    { materia: 'Histología', topicId: 'histologia-hueso', sectionId: 'hhue-7', label: 'Remodelación y regulación', porQue: 'Cuando la reabsorción supera a la formación; PTH, calcitonina y vitamina D.' },
    { materia: 'Histología', topicId: 'histologia-hueso', sectionId: 'hhue-3', label: 'Compacto vs esponjoso', porQue: 'El hueso esponjoso es el que se pierde primero.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-lipidos-funcion-esteroides', sectionId: 'bfe-6', label: 'Hormonas esteroideas: función, deficiencia y exceso', porQue: 'Los estrógenos y el exceso de glucocorticoides.' },
    { materia: 'Anatomía', topicId: 'columna-vertebral', sectionId: 'col-5', label: 'Vértebras lumbares', porQue: 'El cuerpo vertebral que se aplasta en la fractura por compresión.' },
    { materia: 'Anatomía', topicId: 'miembro-inferior-oseo', sectionId: 'minf-2', label: 'Fémur: epífisis superior', porQue: 'Cuello y región trocantérica: la fractura de cadera.' },
  ],
  atlas: [
    { id: 'histologia-cartilago-hueso', title: 'Adiposo, cartílago y hueso' },
    { id: 'columna-vertebral', title: 'Columna Vertebral' },
    { id: 'miembro-inferior-oseo', title: 'Miembro inferior óseo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 68 años, con menopausia a los 44, fumadora, delgada (IMC 18) y que tomó prednisona durante 6 meses. Se cae desde su propia altura y se fractura el radio distal. Ha perdido 4 cm de estatura en los últimos años.',
    preguntas: [
      q('pat-ost-1', 'osteoporosis', '¿Qué tipo de fractura tuvo?',
        ['Fractura por estrés', 'Fractura por fragilidad (de Colles)', 'Fractura patológica por tumor', 'Fractura de alta energía'], 1,
        'Una caída desde la propia altura no debería romper un hueso sano.', 'easy'),
      q('pat-ost-2', 'osteoporosis', '¿Qué estudio confirma y mide la gravedad?',
        ['Radiografía de tórax', 'Marcadores de recambio óseo', 'Densitometría (DXA) de cadera y columna lumbar', 'Ultrasonido de calcáneo'], 2,
        'La DXA central es el estándar de oro.'),
      q('pat-ost-3', 'osteoporosis', 'Su índice T en columna lumbar es de −2.8. Con la fractura que ya tuvo, ¿cómo se clasifica?',
        ['Normal', 'Osteopenia', 'Osteoporosis sin fractura', 'Osteoporosis grave (establecida)'], 3,
        'Índice T de −2.5 o menos más una fractura por fragilidad.'),
      q('pat-ost-4', 'osteoporosis', '¿Sobre qué célula actúan los bifosfonatos?',
        ['Osteoclasto', 'Osteoblasto', 'Osteocito', 'Condrocito'], 0,
        'Frenan la reabsorción ósea que hacen los osteoclastos.'),
      q('pat-ost-5', 'osteoporosis', '¿Qué explica mejor la pérdida de 4 cm de estatura?',
        ['Deshidratación de los discos', 'Fracturas vertebrales por compresión, muchas sin síntomas', 'Atrofia muscular', 'Escoliosis congénita'], 1,
        'Dos de cada tres fracturas vertebrales pasan inadvertidas y se manifiestan con pérdida de estatura y cifosis.'),
    ],
  },
  fuentes: [F.osteoporosis],
}

/* ── Anatomía ───────────────────────────────────────────────────── */

const TUNEL_CARPO: Patologia = {
  id: 'sindrome-tunel-carpo',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Síndrome del túnel del carpo',
  ambito: 'Mano y muñeca',
  resumen:
    'Compresión del nervio mediano en su paso por el túnel del carpo, bajo el retináculo flexor. Produce hormigueo y dolor en los tres primeros dedos, típicamente de noche.',
  sections: [
    {
      id: 'stc-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Síndrome del túnel del carpo (GPC IMSS-043-08)',
          content:
            'Mononeuropatía del miembro superior producida por compresión del nervio mediano en la muñeca, por aumento de la presión dentro del túnel del carpo.',
        },
        {
          type: 'table',
          title: 'Anatomía del túnel',
          data: {
            headers: ['Parte', 'Qué la forma'],
            rows: [
              ['Piso y paredes', 'Los huesos del carpo (surco carpiano)'],
              ['Techo', 'Retináculo flexor (ligamento transverso del carpo), de escafoides y trapecio a pisiforme y ganchoso'],
              ['Contenido', 'Nervio mediano y nueve tendones: cuatro del flexor superficial, cuatro del flexor profundo y el flexor largo del pulgar'],
            ],
          },
        },
        {
          type: 'paragraph',
          content:
            'El túnel es rígido: cualquier aumento de su contenido comprime al nervio. Es más frecuente en mujeres, entre los 40 y los 60 años, y es bilateral en la mitad de los casos. Factores de riesgo de la GPC: movimientos repetitivos de la muñeca, embarazo, diabetes, hipotiroidismo y artritis reumatoide.',
        },
      ],
    },
    {
      id: 'stc-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Hormigueo, adormecimiento y dolor en el pulgar, el índice, el medio y la mitad lateral del anular.',
            'Predominio nocturno o al despertar; mejora al sacudir la mano.',
            'Torpeza: se le caen los objetos.',
            'En casos avanzados: atrofia de la eminencia tenar y debilidad para la abducción y la oposición del pulgar.',
          ],
        },
        {
          type: 'table',
          title: 'Maniobras (GPC)',
          data: {
            headers: ['Maniobra', 'Cómo se hace', 'Positiva si'],
            rows: [
              ['Phalen', 'Flexión palmar de la muñeca a 90° durante un minuto', 'Aparecen parestesias en el territorio del mediano'],
              ['Tinel', 'Percutir sobre el retináculo flexor', 'Se siente un calambre en los dedos primero a tercero'],
              ['Compresión del mediano', 'Presión directa sobre el túnel', 'Reproduce los síntomas'],
            ],
          },
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'La palma tenar conserva la sensibilidad',
          content:
            'La rama cutánea palmar del mediano se separa antes de la muñeca y pasa por encima del retináculo flexor. Por eso en el túnel del carpo la piel de la eminencia tenar siente normal; si está afectada, la lesión del mediano es más proximal.',
        },
      ],
    },
    {
      id: 'stc-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'El diagnóstico es clínico: síntomas en el territorio del mediano más maniobras positivas. Ninguna maniobra aislada lo confirma.',
            'Los estudios de conducción nerviosa y la electromiografía confirman, gradúan y ayudan en el diagnóstico diferencial; los solicita el especialista, sobre todo si hay atrofia tenar o se piensa en cirugía.',
            'Diferencial: radiculopatía cervical (C6–C7) y neuropatía del nervio cubital.',
          ],
        },
      ],
    },
    {
      id: 'stc-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'steps',
          title: 'GPC IMSS-043-08',
          steps: [
            'Férula con la muñeca en posición neutra, de noche y durante las actividades.',
            'Evitar la flexoextensión forzada de la muñeca; calor local; antiinflamatorios solo en la fase aguda.',
            'Tratar la enfermedad de base (diabetes, hipotiroidismo). En el embarazo suele mejorar después del parto.',
            'Infiltración con esteroide por el especialista si no hay mejoría.',
            'Cirugía (sección del retináculo flexor) ante déficit sensitivo o motor, alteraciones electrofisiológicas o más de 3–6 meses sin mejoría.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'musculos-antebrazo-mano', sectionId: 'mam-2', label: 'Antebrazo anterior (flexores)', porQue: 'El nervio mediano y los tendones flexores bajo el retináculo.' },
    { materia: 'Anatomía', topicId: 'musculos-antebrazo-mano', sectionId: 'mam-4', label: 'Músculos de la mano', porQue: 'La eminencia tenar que se atrofia.' },
    { materia: 'Anatomía', topicId: 'miembro-superior-oseo', sectionId: 'mso-7', label: 'Huesos de la mano', porQue: 'Los huesos del carpo que forman el piso del túnel.' },
    { materia: 'Anatomía', topicId: 'articulaciones-miembro-superior', sectionId: 'amsup-4', label: 'Radiocarpiana (muñeca)', porQue: 'La flexión de la muñeca que reduce el espacio del túnel.' },
    { materia: 'Histología', topicId: 'histologia-conectivo-variedades', sectionId: 'hcva-3', label: 'Tejido conectivo denso', porQue: 'El retináculo flexor es conectivo denso: no se estira.' },
  ],
  atlas: [
    { id: 'musculos-miembro-superior', title: 'Músculos del miembro superior' },
    { id: 'miembro-superior-oseo', title: 'Miembro superior óseo' },
    { id: 'articulaciones-miembro-superior', title: 'Articulaciones del miembro superior' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 48 años, capturista, con hipotiroidismo. Desde hace 4 meses tiene hormigueo en el pulgar, el índice y el medio derechos, que la despierta y mejora al sacudir la mano. Phalen y Tinel positivos. La sensibilidad de la eminencia tenar es normal y no hay atrofia.',
    preguntas: [
      q('pat-stc-1', 'sindrome-tunel-carpo', '¿Qué nervio está comprimido?',
        ['Cubital', 'Radial', 'Musculocutáneo', 'Mediano'], 3,
        'Pulgar, índice, medio y mitad lateral del anular son su territorio sensitivo en la palma.', 'easy'),
      q('pat-stc-2', 'sindrome-tunel-carpo', '¿Qué estructura forma el techo del túnel y comprime al nervio?',
        ['Retináculo flexor (ligamento transverso del carpo)', 'Aponeurosis palmar', 'Retináculo extensor', 'Ligamento colateral radial'], 0,
        'Es la estructura que se secciona en la cirugía.'),
      q('pat-stc-3', 'sindrome-tunel-carpo', '¿Por qué la eminencia tenar siente normal?',
        ['Porque la inerva el nervio cubital', 'Porque la compresión es leve', 'Porque la rama cutánea palmar del mediano pasa por encima del retináculo', 'Porque la inerva el nervio radial'], 2,
        'Esa rama no entra al túnel; su afectación orienta a una lesión más proximal.'),
      q('pat-stc-4', 'sindrome-tunel-carpo', '¿Cuál es el manejo inicial?',
        ['Cirugía inmediata', 'Férula con la muñeca en posición neutra de noche, modificar la actividad y controlar el hipotiroidismo', 'Inmovilización con yeso por 6 semanas', 'Electromiografía y esperar'], 1,
        'Es el tratamiento conservador que indica la GPC en el primer nivel.'),
      q('pat-stc-5', 'sindrome-tunel-carpo', '¿Qué hallazgo inclinaría la decisión hacia la cirugía?',
        ['Phalen positivo', 'Síntomas nocturnos', 'Ser bilateral', 'Atrofia de la eminencia tenar con debilidad del pulgar'], 3,
        'El déficit motor indica una compresión avanzada.'),
    ],
  },
  fuentes: [F.carpo],
}

const LUMBALGIA: Patologia = {
  id: 'lumbalgia',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Lumbalgia',
  aka: 'Dolor lumbar',
  ambito: 'Columna lumbar',
  resumen:
    'Dolor entre el borde inferior de las últimas costillas y el pliegue glúteo. En la gran mayoría es mecánico e inespecífico y mejora en semanas; la tarea clínica es reconocer los signos de alarma.',
  sections: [
    {
      id: 'lum-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Lumbalgia (GPC IMSS-045-08)',
          content:
            'Dolor o malestar en la zona lumbar, entre el borde inferior de las últimas costillas y el pliegue inferior de la región glútea, con o sin irradiación a una o ambas piernas y con o sin limitación funcional.',
        },
        {
          type: 'table',
          title: 'Cómo se clasifica',
          data: {
            headers: ['Criterio', 'Tipos'],
            rows: [
              ['Duración', 'Aguda (menos de 6 semanas), subaguda (6 a 12 semanas), crónica (más de 12 semanas)'],
              ['Causa', 'Inespecífica o mecánica (músculos, ligamentos, articulaciones: la gran mayoría); radicular (compresión de una raíz, por ejemplo por hernia de disco); secundaria (tumor, infección, fractura, inflamatoria)'],
            ],
          },
        },
        {
          type: 'paragraph',
          content:
            'El 90 % de los episodios se resuelve en las primeras seis semanas. La hernia de disco suele ser posterolateral, donde el ligamento longitudinal posterior es más estrecho, y comprime la raíz que sale por debajo; los niveles más afectados son L4–L5 y L5–S1.',
        },
        {
          type: 'table',
          title: 'Dolor mecánico frente a inflamatorio (GPC)',
          data: {
            headers: ['Dato', 'Mecánico', 'Inflamatorio'],
            rows: [
              ['Inicio', 'Agudo, a cualquier edad', 'Insidioso, antes de los 40 años'],
              ['Rigidez matutina', 'Menos de 30 minutos', 'Más de 60 minutos'],
              ['Dolor nocturno', 'No', 'Frecuente'],
              ['Con el ejercicio', 'Empeora', 'Mejora'],
            ],
          },
        },
      ],
    },
    {
      id: 'lum-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Dolor lumbar que aumenta con el movimiento y la carga y mejora con el reposo relativo; contractura de los músculos paravertebrales.',
            'Si el dolor baja por la pierna, más allá de la rodilla, siguiendo un dermatoma: radiculopatía (ciática).',
            'Exploración: postura, marcha, movilidad de la columna y examen neurológico (fuerza, reflejos, sensibilidad).',
            'Lasègue (elevación de la pierna extendida): muy sensible para radiculopatía (91 %), poco específica (26 %). La debilidad muscular, en cambio, es muy específica de compresión radicular (93 %).',
          ],
        },
      ],
    },
    {
      id: 'lum-3',
      title: 'Signos de alarma y cuándo pedir imagen',
      blocks: [
        {
          type: 'list',
          title: 'Signos de alarma (GPC)',
          items: [
            'Edad mayor de 50 años, antecedente de cáncer, pérdida de peso o síndrome constitucional.',
            'Sin mejoría con el tratamiento habitual, dolor en reposo o nocturno.',
            'Fiebre o inmunodepresión.',
            'Traumatismo previo, osteoporosis o uso de esteroides.',
            'Síndrome de cauda equina: retención urinaria, anestesia en silla de montar y debilidad de ambas piernas. Es una urgencia.',
          ],
        },
        {
          type: 'note',
          content:
            'En la lumbalgia aguda inespecífica sin signos de alarma no se piden radiografías: no cambian el tratamiento. Se consideran si no hay mejoría tras 4–6 semanas o ante signos de alarma.',
        },
      ],
    },
    {
      id: 'lum-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'steps',
          title: 'GPC IMSS-045-08',
          steps: [
            'Mantenerse activo y volver pronto a las actividades y al trabajo.',
            'No se recomienda el reposo en cama; si el dolor lo exige, no más de 2 días.',
            'Paracetamol como primera elección; si no basta, un antiinflamatorio.',
            'Ejercicio terapéutico en la lumbalgia subaguda y crónica.',
            'Prevención: técnica correcta para cargar peso y fortalecimiento de los músculos del tronco.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'columna-vertebral', sectionId: 'col-5', label: 'Vértebras lumbares', porQue: 'Los cuerpos que más carga soportan.' },
    { materia: 'Anatomía', topicId: 'articulaciones-columna', sectionId: 'acol-2', label: 'Entre los cuerpos vertebrales', porQue: 'Disco intervertebral y ligamentos longitudinales: dónde se hernia el disco.' },
    { materia: 'Anatomía', topicId: 'articulaciones-columna', sectionId: 'acol-3', label: 'Entre los arcos vertebrales', porQue: 'Las articulaciones cigapofisarias, fuente frecuente de dolor mecánico.' },
    { materia: 'Anatomía', topicId: 'musculos-dorso', sectionId: 'mdor-3', label: 'Profundos: erectores y transversoespinoso', porQue: 'Los músculos paravertebrales que se contracturan.' },
    { materia: 'Histología', topicId: 'histologia-cartilago', label: 'Cartílago', porQue: 'El fibrocartílago del anillo fibroso del disco.' },
  ],
  atlas: [
    { id: 'columna-vertebral', title: 'Columna Vertebral' },
    { id: 'articulaciones-columna', title: 'Articulaciones de la columna vertebral' },
    { id: 'musculos-dorso-diafragma', title: 'Dorso y diafragma' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 35 años, almacenista. Hace 3 días, al levantar una caja, empezó con dolor lumbar intenso que no se irradia y empeora al agacharse. Hay contractura paravertebral; la exploración neurológica es normal y el Lasègue es negativo. Sin fiebre ni otros antecedentes.',
    preguntas: [
      q('pat-lum-1', 'lumbalgia', '¿Cómo se clasifica?',
        ['Lumbalgia aguda mecánica inespecífica', 'Radiculopatía L5', 'Lumbalgia inflamatoria', 'Lumbalgia crónica'], 0,
        'Menos de 6 semanas, relacionada con el esfuerzo, sin irradiación ni déficit neurológico.', 'easy'),
      q('pat-lum-2', 'lumbalgia', '¿Se pide una radiografía?',
        ['Sí, siempre', 'Sí, y también resonancia', 'No: sin signos de alarma no cambia el manejo', 'Solo de cadera'], 2,
        'En la lumbalgia aguda inespecífica sin signos de alarma la GPC no recomienda imagen.'),
      q('pat-lum-3', 'lumbalgia', '¿Qué se le recomienda?',
        ['Reposo absoluto en cama 2 semanas', 'Mantenerse activo, paracetamol y evitar el reposo en cama prolongado', 'Faja permanente', 'Cirugía'], 1,
        'El reposo de más de 2–3 días retrasa la recuperación.'),
      q('pat-lum-4', 'lumbalgia', '¿Qué dato obligaría a una evaluación urgente?',
        ['Contractura paravertebral', 'Dolor al agacharse', 'Antecedente de esfuerzo', 'Retención urinaria con anestesia en silla de montar'], 3,
        'Sugiere síndrome de cauda equina.'),
      q('pat-lum-5', 'lumbalgia', '¿Por qué la hernia de disco suele ser posterolateral?',
        ['Porque el ligamento longitudinal posterior es más estrecho a los lados', 'Porque el núcleo pulposo está en la parte anterior', 'Porque el ligamento longitudinal anterior es débil', 'Por la forma de las apófisis espinosas'], 0,
        'El ligamento refuerza la línea media; a los lados el anillo queda más expuesto, justo donde salen las raíces.'),
    ],
  },
  fuentes: [F.lumbalgia],
}

const ESGUINCE_TOBILLO: Patologia = {
  id: 'esguince-tobillo',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Esguince de tobillo',
  ambito: 'Tobillo',
  resumen:
    'Ruptura parcial o total de uno o más ligamentos del tobillo. El mecanismo típico es la inversión con el pie en flexión plantar, que lesiona primero el ligamento peroneoastragalino anterior.',
  sections: [
    {
      id: 'esg-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Esguince de tobillo (GPC IMSS-034-08)',
          content:
            'Ruptura parcial o total de uno o más ligamentos de la articulación del tobillo, que se manifiesta con dolor, edema y limitación funcional.',
        },
        {
          type: 'paragraph',
          content:
            'Es la lesión ligamentaria más frecuente en las actividades diarias y el deporte. El mecanismo más común es la supinación: inversión y aducción del pie en flexión plantar.',
        },
        {
          type: 'table',
          title: 'Qué ligamento se rompe',
          data: {
            headers: ['Ligamento', 'Cuándo se lesiona'],
            rows: [
              ['Peroneoastragalino anterior', 'El primero y más frecuente: está tenso en flexión plantar'],
              ['Peroneocalcáneo', 'El segundo, en lesiones más intensas'],
              ['Peroneoastragalino posterior', 'Rara vez'],
              ['Deltoideo (medial)', 'Poco frecuente: es muy fuerte'],
            ],
          },
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'Por qué casi siempre es lateral',
          content:
            'El maléolo lateral desciende más que el medial y frena la eversión, y el ligamento deltoideo es mucho más fuerte que los laterales. Además, la tróclea del astrágalo es más estrecha por detrás: en flexión plantar queda floja dentro de la mortaja y el tobillo es menos estable.',
        },
      ],
    },
    {
      id: 'esg-2',
      title: 'Cuadro clínico y grados',
      blocks: [
        {
          type: 'table',
          title: 'Clasificación por gravedad (GPC)',
          data: {
            headers: ['Grado', 'Lesión', 'Clínica'],
            rows: [
              ['I', 'Distensión: fibras estiradas, intactas', 'Edema leve, camina con dolor mínimo, sin inestabilidad'],
              ['II', 'Ruptura parcial', 'Dolor y edema moderados, equimosis, dolor al apoyar, inestabilidad leve a moderada'],
              ['III', 'Ruptura completa', 'Edema y equimosis importantes, no puede apoyar, inestabilidad franca'],
              ['IV', 'Luxación de la articulación', 'Lo maneja traumatología'],
            ],
          },
        },
        {
          type: 'note',
          content:
            'La prueba del cajón anterior (desplazar el pie hacia adelante con la tibia fija) explora la integridad del ligamento peroneoastragalino anterior.',
        },
      ],
    },
    {
      id: 'esg-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El diagnóstico es clínico. La radiografía solo se pide para descartar una fractura, y para decidirlo se usan las reglas de Ottawa, que la descartan con alta sensibilidad y evitan radiografías innecesarias.',
        },
        {
          type: 'comparison',
          title: 'Reglas de Ottawa: se pide radiografía si hay',
          left: {
            title: 'Dolor en la zona maleolar y',
            items: [
              'Dolor a la palpación en los 6 cm distales del borde posterior de la tibia o en la punta del maléolo medial',
              'Dolor a la palpación en los 6 cm distales del borde posterior del peroné o en la punta del maléolo lateral',
              'Incapacidad para dar 4 pasos al momento de la lesión y en urgencias',
            ],
          },
          right: {
            title: 'Dolor en el mediopié y',
            items: [
              'Dolor a la palpación en la base del 5.º metatarsiano',
              'Dolor a la palpación en el navicular',
              'Incapacidad para dar 4 pasos al momento de la lesión y en urgencias',
            ],
          },
        },
      ],
    },
    {
      id: 'esg-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'steps',
          title: 'GPC IMSS-034-08 (grados I y II)',
          steps: [
            'Primeras 48 horas: evitar el apoyo, hielo local 20 minutos cada 8 horas, elevar la pierna y movilizar el tobillo a tolerancia.',
            'Vendaje elástico no compresivo al inicio.',
            'Después de 72 horas: apoyo parcial con vendaje o soporte externo.',
            'Ejercicios de propiocepción (rodar una botella con el pie, arrugar una toalla con los dedos) y de fortalecimiento.',
            'No se usa férula de yeso en los grados I y II: la inmovilización funcional recupera antes.',
          ],
        },
        {
          type: 'note',
          content:
            'Los grados III y IV se inmovilizan parcialmente con férula de yeso y se envían a traumatología.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'articulaciones-miembro-inferior', sectionId: 'aminf-4', label: 'Tobillo (talocrural)', porQue: 'La mortaja, la tróclea del astrágalo y los ligamentos medial y laterales.' },
    { materia: 'Anatomía', topicId: 'miembro-inferior-oseo', sectionId: 'minf-6', label: 'Peroné (fíbula)', porQue: 'El maléolo lateral, que se palpa en las reglas de Ottawa.' },
    { materia: 'Anatomía', topicId: 'miembro-inferior-oseo', sectionId: 'minf-7', label: 'Huesos del tarso', porQue: 'El astrágalo y el navicular.' },
    { materia: 'Anatomía', topicId: 'miembro-inferior-oseo', sectionId: 'minf-8', label: 'Metatarso y falanges', porQue: 'La base del 5.º metatarsiano, otro punto de Ottawa.' },
    { materia: 'Anatomía', topicId: 'musculos-pierna-pie', sectionId: 'mpp-3', label: 'Compartimiento lateral', porQue: 'Los peroneos frenan la inversión; el corto se inserta en la base del 5.º metatarsiano.' },
    { materia: 'Histología', topicId: 'histologia-conectivo-variedades', sectionId: 'hcva-3', label: 'Tejido conectivo denso', porQue: 'Los ligamentos son conectivo denso regular.' },
  ],
  atlas: [
    { id: 'articulaciones-rodilla-tobillo', title: 'Rodilla, tobillo y pie' },
    { id: 'miembro-inferior-oseo', title: 'Miembro inferior óseo' },
    { id: 'musculos-miembro-inferior', title: 'Músculos del miembro inferior' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 24 años, basquetbolista, cae sobre el pie derecho en inversión y flexión plantar. Hay edema y equimosis en la cara lateral, con dolor a la palpación por delante y por debajo del maléolo lateral. Camina 4 pasos con dolor. No le duele al palpar el borde posterior ni la punta de los maléolos, ni la base del 5.º metatarsiano ni el navicular. El cajón anterior es levemente positivo.',
    preguntas: [
      q('pat-esg-1', 'esguince-tobillo', '¿Qué ligamento está lesionado con más probabilidad?',
        ['Deltoideo', 'Peroneocalcáneo', 'Peroneoastragalino anterior', 'Peroneoastragalino posterior'], 2,
        'Es el primero que se rompe en la inversión con flexión plantar; el cajón anterior lo explora.', 'easy'),
      q('pat-esg-2', 'esguince-tobillo', '¿Necesita radiografía según las reglas de Ottawa?',
        ['No: no cumple ningún criterio', 'Sí, siempre que haya equimosis', 'Sí, por el cajón anterior positivo', 'Solo de rodilla'], 0,
        'Puede dar 4 pasos y no hay dolor en los puntos óseos de la regla.'),
      q('pat-esg-3', 'esguince-tobillo', '¿Qué grado tiene?',
        ['I', 'II', 'III', 'IV'], 1,
        'Edema, equimosis, dolor al apoyar e inestabilidad leve corresponden a una ruptura parcial.'),
      q('pat-esg-4', 'esguince-tobillo', '¿Cuál es el manejo?',
        ['Férula de yeso por 6 semanas', 'Cirugía', 'Reposo absoluto sin movilizar', 'Hielo, elevación y movilización temprana, apoyo progresivo con soporte y ejercicios de propiocepción'], 3,
        'En los grados I y II la inmovilización funcional es mejor que el yeso.'),
      q('pat-esg-5', 'esguince-tobillo', 'Si tuviera dolor en la base del 5.º metatarsiano, ¿qué se sospecharía?',
        ['Lesión del tendón de Aquiles', 'Fractura por avulsión del peroneo corto: se pide radiografía', 'Esguince del deltoideo', 'Nada: es parte del esguince'], 1,
        'El peroneo corto se inserta ahí; la inversión brusca puede arrancar el fragmento óseo.'),
    ],
  },
  fuentes: [F.tobillo],
}

export const FICHAS_MATERIAS: Patologia[] = [
  INFARTO, CETOACIDOSIS, PANCREATITIS,
  DOWN, FENILCETONURIA, HIPOTIROIDISMO, TURNER,
  ANEMIA, OSTEOPOROSIS,
  TUNEL_CARPO, LUMBALGIA, ESGUINCE_TOBILLO,
]
