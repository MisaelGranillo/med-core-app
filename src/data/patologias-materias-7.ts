/* Patologías por materia (séptimo lote) — Embriología: placenta previa e
 * incompatibilidad Rh (segunda semana e implantación), síndrome ovárico
 * metabólico poliendocrino e insuficiencia ovárica primaria (infertilidad).
 * Mismas reglas que los lotes anteriores: GPC mexicana del Catálogo Maestro
 * cuando existe y organismos internacionales como complemento; solo datos
 * verificados. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  insercion: { codigo: 'GPC IMSS-589-19', titulo: 'Diagnóstico y manejo de las anomalías en la inserción placentaria y vasa previa (actualización 2019)', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/589GRR.pdf' },
  rcog: { codigo: 'RCOG 2018', titulo: 'Placenta praevia and placenta accreta: diagnosis and management. Green-top Guideline No. 27a. BJOG. 2019;126(1):e1–e48', url: 'https://doi.org/10.1111/1471-0528.15306' },
  ehrn: { codigo: 'GPC IMSS-373-18', titulo: 'Diagnóstico y tratamiento de la enfermedad hemolítica por isoinmunización a Rh en el recién nacido (actualización 2018)', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/373GRR.pdf' },
  acogRh: { codigo: 'ACOG 2017', titulo: 'Practice Bulletin No. 181: Prevention of Rh D alloimmunization. Obstet Gynecol. 2017;130(2):e57–e70', url: 'https://doi.org/10.1097/AOG.0000000000002232' },
  pcos: { codigo: 'Guía internacional 2023', titulo: 'Recommendations from the 2023 International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome. J Clin Endocrinol Metab. 2023;108(10):2447–2469', url: 'https://doi.org/10.1210/clinem/dgad463' },
  pmos: { codigo: 'Lancet 2026', titulo: 'Polyendocrine metabolic ovarian syndrome, the new name for polycystic ovary syndrome: a multistep global consensus process. Lancet. 2026', url: 'https://doi.org/10.1016/S0140-6736(26)00717-8' },
  poi: { codigo: 'ESHRE 2024', titulo: 'Evidence-based guideline: premature ovarian insufficiency (ESHRE, ASRM, CREWHIRL e IMS). Hum Reprod Open. 2024;2024(4):hoae065', url: 'https://doi.org/10.1093/hropen/hoae065' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Embriología ────────────────────────────────────────────────── */

const PLACENTA_PREVIA: Patologia = {
  id: 'placenta-previa',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Placenta previa',
  aka: 'Anomalía de la inserción placentaria',
  ambito: 'Implantación y placenta',
  resumen:
    'La placenta se inserta en el segmento uterino inferior y cubre el orificio cervical interno. Causa sangrado transvaginal indoloro en la segunda mitad del embarazo. Se diagnostica con ultrasonido, se evita el tacto vaginal y el embarazo se resuelve por cesárea programada.',
  sections: [
    {
      id: 'plp-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Cuando el blastocisto se implanta cerca del orificio cervical interno, la placenta crece en el segmento uterino inferior. Hacia el final del embarazo ese segmento se adelgaza y se estira, y la placenta, que no puede estirarse igual, se desprende parcialmente y sangra.',
        },
        {
          type: 'comparison',
          title: 'Dos grados (RCOG)',
          left: { title: 'Placenta previa', items: ['La placenta cubre directamente el orificio cervical interno'] },
          right: { title: 'Inserción baja de placenta', items: ['El borde placentario queda a menos de 20 mm del orificio cervical interno'] },
        },
        {
          type: 'list',
          title: 'Factores de riesgo (GPC)',
          items: ['Cesárea previa.', 'Placenta previa en un embarazo anterior.', 'Tratamientos de infertilidad.', 'Edad materna avanzada.', 'Tabaquismo.'],
        },
      ],
    },
    {
      id: 'plp-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Sangrado transvaginal rojo brillante e INDOLORO en la segunda mitad del embarazo, con útero blando; el dolor y el útero hipertónico orientan más a desprendimiento de placenta.',
            'NO se realiza tacto vaginal: puede desprender la placenta y provocar una hemorragia grave (GPC).',
            'Ante la sospecha: hospitalización, ultrasonido y especuloscopia para ver si el sangrado viene de la cavidad uterina (GPC).',
            'El ultrasonido es la herramienta principal; si el abdominal sugiere placenta previa, se confirma con ultrasonido endovaginal (GPC).',
            'El diagnóstico se confirma a partir de las 32 semanas: muchas placentas bajas del segundo trimestre se alejan del cuello al crecer el útero (GPC).',
          ],
        },
        {
          type: 'note',
          title: 'Placenta previa y acretismo',
          content: 'Una placenta previa sobre la cicatriz de una cesárea puede invadir el miometrio (acretismo placentario). Por eso, en pacientes con cesárea previa se busca acretismo en el ultrasonido.',
        },
      ],
    },
    {
      id: 'plp-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Corticoesteroides para la madurez pulmonar fetal entre las semanas 24 y 34 (GPC).',
            'Sin factores de riesgo ni complicaciones, el nacimiento se programa entre las semanas 36 y 37 por cesárea, de preferencia con anestesia regional (GPC).',
            'En la inserción baja, sin sangrado activo y con condiciones obstétricas favorables, puede considerarse el parto vaginal (GPC).',
            'Si la hemorragia no se controla con manejo conservador, histerectomía obstétrica (GPC).',
            'Referencia a segundo o tercer nivel ante hallazgos sugestivos en el ultrasonido (GPC).',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-placenta', sectionId: 'epl-10', label: 'Patología placentaria: casos', porQue: 'La placenta es normal; lo anormal es el sitio de implantación junto al orificio cervical interno.' },
    { materia: 'Embriología', topicId: 'embriologia-segunda-semana', sectionId: 'ess-8', label: 'Implantación anómala: embarazo ectópico y placenta previa', porQue: 'La placenta previa empieza con un blastocisto que se implanta cerca del orificio cervical interno.' },
    { materia: 'Embriología', topicId: 'embriologia-segunda-semana', sectionId: 'ess-4', label: 'Días 11–12: circulación uteroplacentaria y mesodermo extraembrionario', porQue: 'El sangrado es materno: viene de los vasos uterinos que el trofoblasto abrió para formar la circulación uteroplacentaria.' },
    { materia: 'Embriología', topicId: 'embriologia-fecundacion', sectionId: 'efe-7', label: 'Implantación e inicio de la segunda semana', porQue: 'La implantación normal ocurre en la pared anterior o posterior del cuerpo del útero, lejos del cuello.' },
  ],
  atlas: [
    { id: 'embriologia-segunda-semana', title: 'Segunda semana e implantación' },
    { id: 'embriologia-desarrollo-temprano', title: 'Desarrollo temprano' },
    { id: 'aparato-reproductor', title: 'Aparato Reproductor' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 34 años, con dos cesáreas previas, cursa 30 semanas de gestación. Acude por sangrado transvaginal rojo brillante, abundante, sin dolor, que empezó en reposo. TA 110/70 mmHg, FC 92 lpm. Útero blando, no doloroso; frecuencia cardiaca fetal de 145 lpm.',
    preguntas: [
      q('pat-plp-1', 'placenta-previa', '¿Cuál es el diagnóstico más probable?',
        ['Desprendimiento prematuro de placenta', 'Placenta previa', 'Amenaza de parto pretérmino', 'Rotura uterina'], 1,
        'Sangrado indoloro con útero blando en la segunda mitad del embarazo; el desprendimiento duele y el útero está hipertónico.', 'easy'),
      q('pat-plp-2', 'placenta-previa', '¿Qué maniobra debe evitarse?',
        ['Ultrasonido', 'Especuloscopia', 'Tacto vaginal', 'Monitorización fetal'], 2,
        'El tacto vaginal puede desprender la placenta y causar una hemorragia grave.'),
      q('pat-plp-3', 'placenta-previa', '¿Qué factor de riesgo tiene la paciente?',
        ['Dos cesáreas previas', 'El sangrado en reposo', 'La frecuencia cardiaca fetal', 'La edad gestacional de 30 semanas'], 0,
        'La cicatriz uterina favorece la implantación baja y, además, el acretismo.'),
      q('pat-plp-4', 'placenta-previa', 'El sangrado cede y la paciente está estable. ¿Qué se indica por la edad gestacional?',
        ['Cesárea inmediata', 'Tocolíticos por tiempo indefinido', 'Alta sin seguimiento', 'Corticoesteroides para la madurez pulmonar fetal'], 3,
        'La GPC los recomienda entre las semanas 24 y 34 en placenta previa o inserción baja.'),
      q('pat-plp-5', 'placenta-previa', 'Si permanece sin sangrado ni complicaciones, ¿cuándo y cómo se programa el nacimiento?',
        ['A las 32–33 semanas por parto vaginal', 'A las 34 semanas por inducción', 'Entre las 36 y 37 semanas por cesárea', 'A las 40–41 semanas por parto vaginal'], 2,
        'Una placenta que cubre el orificio cervical interno impide el parto vaginal.'),
    ],
  },
  fuentes: [F.insercion, F.rcog],
}

const RH: Patologia = {
  id: 'enfermedad-hemolitica-rh',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Enfermedad hemolítica por isoinmunización a Rh',
  aka: 'Incompatibilidad Rh · aloinmunización anti-D',
  ambito: 'Interfase materno-fetal',
  resumen:
    'Una madre Rh negativo expuesta a eritrocitos Rh positivo del feto produce anticuerpos anti-D. En embarazos siguientes, esos anticuerpos IgG cruzan la placenta y destruyen los eritrocitos fetales: anemia, ictericia y, en los casos graves, hidrops. Es prevenible con inmunoglobulina anti-D.',
  sections: [
    {
      id: 'ehr-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'steps',
          title: 'Cómo se produce',
          steps: [
            'La madre es Rh(D) negativo y el feto, Rh(D) positivo, heredado del padre.',
            'Eritrocitos fetales pasan a la circulación materna, sobre todo en el parto o en eventos obstétricos con sangrado.',
            'La madre se sensibiliza y produce anticuerpos anti-D. La primera respuesta llega tarde, por eso el primer hijo casi nunca se afecta.',
            'En el siguiente embarazo con feto Rh positivo, los anticuerpos IgG cruzan la placenta y destruyen sus eritrocitos (hemólisis).',
          ],
        },
        {
          type: 'list',
          title: 'Antecedentes maternos que pueden sensibilizar (GPC)',
          items: [
            'Embarazo ectópico, aborto espontáneo o muerte fetal.',
            'Placenta previa o desprendimiento de placenta.',
            'Trauma abdominal o pélvico.',
            'Procedimientos obstétricos invasivos, como la amniocentesis.',
            'Falta de atención prenatal.',
          ],
        },
      ],
    },
    {
      id: 'ehr-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          title: 'En el recién nacido (GPC)',
          items: [
            'Desde hemólisis leve, detectable solo en el laboratorio (≈ 15 %), hasta anemia grave.',
            'Anemia grave: hepatoesplenomegalia por eritropoyesis compensatoria, insuficiencia cardiaca, anasarca (hidrops) y colapso circulatorio.',
            'Ictericia temprana: en casos graves desde el primer día, con riesgo de encefalopatía y kernicterus.',
            'Hipoglucemia por hiperinsulinismo e hipertrofia de los islotes pancreáticos.',
          ],
        },
        {
          type: 'comparison',
          title: 'Dos pruebas de Coombs',
          left: { title: 'Coombs indirecto (madre)', items: ['Busca anticuerpos libres en el suero materno', 'Se pide a TODAS las embarazadas en la primera consulta, junto con grupo y Rh (GPC)'] },
          right: { title: 'Coombs directo (recién nacido)', items: ['Detecta anticuerpos pegados a los eritrocitos del bebé', 'Se pide en sangre de cordón con grupo, Rh, hemoglobina, hematocrito, bilirrubina y frotis (GPC)'] },
        },
      ],
    },
    {
      id: 'ehr-3',
      title: 'Tratamiento y prevención: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'Tratamiento del recién nacido (GPC)',
          items: [
            'Fototerapia según las horas de vida, la edad gestacional y la bilirrubina; suele requerirse fototerapia múltiple.',
            'Exanguinotransfusión en la unidad de cuidados intensivos neonatales cuando la bilirrubina alcanza el umbral, y siempre ante signos de encefalopatía aguda (opistótonos, rigidez), aunque la bilirrubina esté en rango de fototerapia.',
            'La inmunoglobulina intravenosa no se recomienda de rutina.',
          ],
        },
        {
          type: 'list',
          title: 'Prevención en la madre Rh negativo no sensibilizada (ACOG)',
          items: [
            'Inmunoglobulina anti-D de 300 µg alrededor de la semana 28.',
            'Otra dosis dentro de las 72 horas posteriores al parto si el recién nacido es Rh positivo.',
            'También tras aborto, embarazo ectópico, procedimientos invasivos, trauma o sangrado.',
            'Con la dosis posparto la aloinmunización bajó de 13–16 % a 0.5–1.8 %, y con la dosis prenatal, a 0.14–0.2 %.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-segunda-semana', sectionId: 'ess-9', label: 'Mola hidatiforme e incompatibilidad Rh', porQue: 'La incompatibilidad Rh y su prevención con inmunoglobulina anti-D a las 28 semanas y después del parto.' },
    { materia: 'Embriología', topicId: 'embriologia-segunda-semana', sectionId: 'ess-7', label: 'Rechazo inmunológico y embarazo', porQue: 'Por qué la madre normalmente tolera al feto, y qué pasa cuando sus anticuerpos sí reconocen un antígeno fetal.' },
    { materia: 'Genética', topicId: 'genetica-mendel', sectionId: 'gmen-3', label: 'Grupos sanguíneos y paternidad', porQue: 'El feto hereda del padre el antígeno D que la madre no tiene.' },
    { materia: 'Histología', topicId: 'histologia-sangre', sectionId: 'hsan-6', label: 'Eritropoyesis, EPO y grupos sanguíneos', porQue: 'La hemólisis estimula la eritropoyesis compensatoria en hígado y bazo.' },
  ],
  atlas: [
    { id: 'embriologia-segunda-semana', title: 'Segunda semana e implantación' },
    { id: 'histologia-sangre', title: 'Sangre y elementos formes' },
    { id: 'genetica-mendel', title: 'Conceptos base y leyes de Mendel' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 26 años, Rh negativo, cursa su segundo embarazo con 24 semanas. Su primer hijo nació hace tres años, sano, en un parto sin control prenatal; no recibió inmunoglobulina anti-D. En la primera consulta de este embarazo el Coombs indirecto resulta positivo, con anticuerpos anti-D.',
    preguntas: [
      q('pat-ehr-1', 'enfermedad-hemolitica-rh', '¿Qué explica el Coombs indirecto positivo?',
        ['Una infección viral reciente', 'Anticuerpos anti-A naturales', 'Un error de laboratorio', 'Sensibilización en el parto anterior por no recibir anti-D'], 3,
        'En el parto anterior pasaron eritrocitos Rh positivo a la madre y produjo anticuerpos anti-D.', 'easy'),
      q('pat-ehr-2', 'enfermedad-hemolitica-rh', '¿Por qué su primer hijo nació sano?',
        ['La sensibilización ocurrió sobre todo en el parto y la primera respuesta llega tarde', 'Los anticuerpos anti-D no cruzan la placenta', 'El primer hijo era Rh negativo con seguridad', 'La placenta destruye todos los anticuerpos'], 0,
        'Los anticuerpos IgG afectan sobre todo los embarazos siguientes con feto Rh positivo.'),
      q('pat-ehr-3', 'enfermedad-hemolitica-rh', 'El bebé nace ictérico en las primeras horas. ¿Qué prueba confirma anticuerpos sobre sus eritrocitos?',
        ['Coombs indirecto al recién nacido', 'Coombs directo en sangre de cordón', 'Biometría hemática aislada', 'Perfil tiroideo'], 1,
        'El directo detecta anticuerpos pegados a los eritrocitos; el indirecto, anticuerpos libres en el suero.'),
      q('pat-ehr-4', 'enfermedad-hemolitica-rh', 'Presenta opistótonos y rigidez, con bilirrubina en rango de fototerapia. ¿Qué indica la GPC?',
        ['Fototerapia simple y vigilancia', 'Albúmina intravenosa', 'Alta con control en una semana', 'Exanguinotransfusión'], 3,
        'Los signos de encefalopatía aguda son indicación de exanguinotransfusión, sin importar la cifra de bilirrubina.'),
      q('pat-ehr-5', 'enfermedad-hemolitica-rh', 'En una embarazada Rh negativo NO sensibilizada, ¿qué evita este problema?',
        ['Inmunoglobulina anti-D a las 28 semanas y dentro de las 72 horas posparto si el bebé es Rh positivo', 'Vacuna contra la rubéola', 'Ácido fólico a dosis alta', 'Transfusión de sangre Rh positivo'], 0,
        'La inmunoglobulina elimina los eritrocitos fetales antes de que la madre produzca sus propios anticuerpos.'),
    ],
  },
  fuentes: [F.ehrn, F.acogRh],
}

const SOMP: Patologia = {
  id: 'sindrome-ovarico-metabolico-poliendocrino',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Síndrome ovárico metabólico poliendocrino',
  aka: 'SOMP · antes síndrome de ovario poliquístico (SOP)',
  ambito: 'Ovario y metabolismo',
  resumen:
    'Trastorno endocrino frecuente en la edad reproductiva: disfunción ovulatoria, hiperandrogenismo y ovarios con muchos folículos pequeños, a menudo con resistencia a la insulina. Es la principal causa de infertilidad por anovulación. Se trata con cambios en el estilo de vida, anticonceptivos combinados, metformina y, si se busca embarazo, letrozol.',
  sections: [
    {
      id: 'smp-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'En 2026 un consenso internacional, con participación de pacientes, cambió el nombre de síndrome de ovario poliquístico por síndrome ovárico metabólico poliendocrino. Los «quistes» en realidad son folículos detenidos, y el trastorno abarca también lo metabólico, lo endocrino, lo dermatológico y lo psicológico. Los criterios diagnósticos de la guía internacional de 2023 siguen vigentes.',
        },
        {
          type: 'steps',
          title: 'Fisiopatología',
          steps: [
            'Pulsos rápidos de GnRH: más LH que FSH.',
            'La LH estimula a la teca, que produce más andrógenos.',
            'Con poca FSH hay poca aromatasa en la granulosa: los folículos no maduran y no hay ovulación.',
            'La hiperinsulinemia estimula a la teca y reduce la SHBG, con lo que sube la testosterona libre.',
          ],
        },
      ],
    },
    {
      id: 'smp-2',
      title: 'Diagnóstico',
      blocks: [
        {
          type: 'list',
          title: 'En adultas, dos de tres criterios (guía internacional 2023)',
          items: [
            'Disfunción ovulatoria: ciclos irregulares.',
            'Hiperandrogenismo clínico (hirsutismo, acné, alopecia) o bioquímico (andrógenos elevados).',
            'Ovarios poliquísticos en el ultrasonido o, como alternativa, hormona antimülleriana (AMH) elevada.',
          ],
        },
        {
          type: 'list',
          items: [
            'En adolescentes se requieren ciclos irregulares Y hiperandrogenismo; el ultrasonido y la AMH no se usan en los primeros 8 años tras la menarca.',
            'Antes se descartan otras causas: embarazo, alteraciones tiroideas, hiperprolactinemia e hiperplasia suprarrenal congénita no clásica.',
            'Una vez diagnosticado se evalúan el metabolismo de la glucosa, los lípidos, el peso, la presión arterial y la salud emocional (ansiedad y depresión).',
          ],
        },
      ],
    },
    {
      id: 'smp-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Estilo de vida (alimentación y actividad física) para todas, con o sin sobrepeso.',
            'Anticonceptivos orales combinados: primera línea para los ciclos irregulares y el hiperandrogenismo.',
            'Metformina para los aspectos metabólicos, sola o junto con los anticonceptivos.',
            'Si se busca embarazo, el LETROZOL es el fármaco de primera línea para inducir la ovulación; el clomifeno queda en segunda línea.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-infertilidad-reproduccion', sectionId: 'eir-6', label: 'Síndrome ovárico metabólico poliendocrino (SOMP)', porQue: 'Fisiopatología, cuadro clínico y por qué ayudan el ejercicio y la metformina.' },
    { materia: 'Embriología', topicId: 'embriologia-ciclo-ovarico', sectionId: 'eco-3', label: 'Teca interna y granulosa: los estrógenos', porQue: 'El modelo de dos células explica el exceso de andrógenos: la teca produce y la granulosa no alcanza a convertir.' },
    { materia: 'Embriología', topicId: 'embriologia-infertilidad-reproduccion', sectionId: 'eir-2', label: 'Ovulación e inducción de la ovulación', porQue: 'La anovulación es la causa de la infertilidad, y la inducción de la ovulación su tratamiento.' },
    { materia: 'Embriología', topicId: 'embriologia-infertilidad-reproduccion', sectionId: 'eir-7', label: 'Amenorrea y menopausia', porQue: 'Es una causa frecuente de amenorrea secundaria, después de descartar embarazo.' },
  ],
  atlas: [
    { id: 'embriologia-ciclo-fecundacion', title: 'Ciclo ovárico y fecundación' },
    { id: 'bioquimica-hormonas', title: 'Hormonas y receptores' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 22 años con ciclos menstruales cada 45 a 60 días desde la menarca, vello en mentón y abdomen, y acné. IMC 31, acantosis nigricans en el cuello. Prueba de embarazo negativa; TSH y prolactina normales. El ultrasonido muestra ovarios con más de 20 folículos pequeños cada uno.',
    preguntas: [
      q('pat-smp-1', 'sindrome-ovarico-metabolico-poliendocrino', '¿Cuál es el diagnóstico más probable?',
        ['Insuficiencia ovárica primaria', 'Hiperprolactinemia', 'Síndrome ovárico metabólico poliendocrino', 'Embarazo'], 2,
        'Ciclos irregulares, hiperandrogenismo y ovarios con muchos folículos, con TSH y prolactina normales.', 'easy'),
      q('pat-smp-2', 'sindrome-ovarico-metabolico-poliendocrino', '¿Cuántos criterios se necesitan en una adulta?',
        ['Los tres', 'Dos de tres', 'Solo el ultrasonido', 'Solo los andrógenos elevados'], 1,
        'Disfunción ovulatoria, hiperandrogenismo y morfología ovárica (o AMH elevada): basta con dos.'),
      q('pat-smp-3', 'sindrome-ovarico-metabolico-poliendocrino', '¿Qué debe descartarse antes de confirmar el diagnóstico?',
        ['Embarazo, alteraciones tiroideas, hiperprolactinemia e hiperplasia suprarrenal no clásica', 'Solo la anemia', 'Infección urinaria', 'Nada: el ultrasonido basta'], 0,
        'Por eso ya se pidieron prueba de embarazo, TSH y prolactina.'),
      q('pat-smp-4', 'sindrome-ovarico-metabolico-poliendocrino', 'No busca embarazo y le molestan los ciclos irregulares y el vello. Además del estilo de vida, ¿cuál es la primera línea?',
        ['Clomifeno', 'Letrozol', 'Anticonceptivos orales combinados', 'Metotrexato'], 2,
        'Regulan el ciclo y reducen los andrógenos; la metformina se agrega por lo metabólico.'),
      q('pat-smp-5', 'sindrome-ovarico-metabolico-poliendocrino', 'Años después busca embarazo sin lograrlo. ¿Cuál es el fármaco de primera línea para inducir la ovulación?',
        ['Clomifeno', 'Letrozol', 'Metformina sola', 'Progesterona'], 1,
        'La guía internacional de 2023 lo prefiere al clomifeno, que queda en segunda línea.'),
    ],
  },
  fuentes: [F.pcos, F.pmos],
}

const IOP: Patologia = {
  id: 'insuficiencia-ovarica-primaria',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Insuficiencia ovárica primaria',
  aka: 'Antes «menopausia precoz» o «falla ovárica prematura»',
  ambito: 'Reserva folicular del ovario',
  resumen:
    'Pérdida de la función del ovario antes de los 40 años: ciclos irregulares o amenorrea con FSH elevada y estrógenos bajos. Afecta a cerca del 3.5 % de las mujeres. Se buscan causas genéticas y autoinmunes, y se indica terapia hormonal hasta la edad habitual de la menopausia para proteger hueso y corazón.',
  sections: [
    {
      id: 'iop-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Los folículos se forman antes del nacimiento y su número solo disminuye. En la insuficiencia ovárica primaria se agotan o dejan de funcionar antes de los 40 años. A diferencia de la menopausia, la actividad del ovario puede reaparecer de forma intermitente, por lo que un embarazo espontáneo es poco probable pero posible.',
        },
        {
          type: 'list',
          title: 'Causas',
          items: [
            'Desconocida en la mayoría de los casos.',
            'Genéticas: síndrome de Turner y otras alteraciones cromosómicas, premutación del gen FMR1 (X frágil).',
            'Autoinmunes, sobre todo suprarrenal y tiroidea.',
            'Iatrogénicas: quimioterapia, radioterapia o cirugía de ovario.',
          ],
        },
      ],
    },
    {
      id: 'iop-2',
      title: 'Diagnóstico',
      blocks: [
        {
          type: 'list',
          title: 'Criterios (ESHRE 2024)',
          items: [
            'Menor de 40 años.',
            'Ciclos irregulares o amenorrea durante al menos 4 meses.',
            'FSH mayor de 25 UI/L; basta una medición, y se repite a las 4–6 semanas si hay duda.',
            'El estradiol bajo apoya el diagnóstico; la AMH no es la prueba principal, pero ayuda si la FSH no es concluyente.',
            'Antes se descarta el embarazo; los anticonceptivos hormonales pueden enmascarar el cuadro.',
          ],
        },
        {
          type: 'list',
          title: 'Estudio de la causa (ESHRE 2024)',
          items: [
            'Cariotipo y prueba específica de premutación FMR1 en todas, si no hay causa iatrogénica.',
            'Anticuerpos contra la 21-hidroxilasa (insuficiencia suprarrenal autoinmune) y TSH.',
            'Densitometría ósea al diagnóstico, donde esté disponible.',
          ],
        },
      ],
    },
    {
      id: 'iop-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Terapia hormonal hasta la edad habitual de la menopausia (alrededor de los 51 años), haya o no síntomas: previene osteoporosis y enfermedad cardiovascular.',
            'Sin terapia hormonal aumentan la enfermedad coronaria, la insuficiencia cardiaca, el infarto cerebral y la mortalidad.',
            'La terapia hormonal no es anticonceptiva; si no se desea embarazo se usa un método anticonceptivo.',
            'Para la fertilidad, la donación de ovocitos es la opción establecida; ningún tratamiento ha demostrado reactivar el ovario.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-infertilidad-reproduccion', sectionId: 'eir-5', label: 'Insuficiencia ovárica primaria', porQue: 'Definición, criterios diagnósticos y por qué la AMH está baja.' },
    { materia: 'Embriología', topicId: 'embriologia-ovogenesis', sectionId: 'eov-2', label: 'Desarrollo de los folículos', porQue: 'La reserva de folículos se forma antes del nacimiento y solo disminuye.' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-numericas', sectionId: 'ean-5', label: 'Klinefelter y Turner', porQue: 'El síndrome de Turner es una causa genética de falla ovárica.' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-5', label: 'Sitios frágiles: síndrome de X frágil', porQue: 'Las portadoras de la premutación FMR1 tienen riesgo de insuficiencia ovárica.' },
    { materia: 'Embriología', topicId: 'embriologia-infertilidad-reproduccion', sectionId: 'eir-7', label: 'Amenorrea y menopausia', porQue: 'La menopausia natural ocurre en promedio hacia los 50 años; antes de los 40 se habla de insuficiencia ovárica primaria.' },
  ],
  atlas: [
    { id: 'embriologia-ciclo-fecundacion', title: 'Ciclo ovárico y fecundación' },
    { id: 'embriologia-anomalias-cromosomicas', title: 'Anomalías cromosómicas' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 34 años con amenorrea de 6 meses, bochornos y sudoración nocturna. Ciclos regulares hasta hace un año. Prueba de embarazo negativa; no usa anticonceptivos hormonales. FSH 68 UI/L, estradiol bajo, TSH y prolactina normales.',
    preguntas: [
      q('pat-iop-1', 'insuficiencia-ovarica-primaria', '¿Cuál es el diagnóstico más probable?',
        ['Síndrome ovárico metabólico poliendocrino', 'Hiperprolactinemia', 'Menopausia natural', 'Insuficiencia ovárica primaria'], 3,
        'Menor de 40 años, amenorrea de más de 4 meses y FSH mayor de 25 UI/L.', 'easy'),
      q('pat-iop-2', 'insuficiencia-ovarica-primaria', '¿Qué combinación establece el diagnóstico según la ESHRE 2024?',
        ['Menor de 40 años, al menos 4 meses de ciclos irregulares o amenorrea y FSH mayor de 25 UI/L', 'AMH baja aislada', 'Estradiol bajo en una medición', 'Bochornos en una mujer de cualquier edad'], 0,
        'Basta una FSH elevada; se repite si hay duda. La AMH no es la prueba principal.'),
      q('pat-iop-3', 'insuficiencia-ovarica-primaria', '¿Qué estudios de la causa se recomiendan?',
        ['Resonancia de cráneo a todas', 'Cariotipo y prueba de premutación FMR1', 'Biopsia de ovario', 'Anticuerpos antiovario'], 1,
        'Además, anticuerpos contra la 21-hidroxilasa y TSH; los anticuerpos antiovario no sirven para el diagnóstico.'),
      q('pat-iop-4', 'insuficiencia-ovarica-primaria', '¿Cuál es el tratamiento recomendado?',
        ['Ninguno si los bochornos son tolerables', 'Solo calcio y vitamina D', 'Terapia hormonal hasta la edad habitual de la menopausia', 'Anticonceptivo solo mientras haya síntomas'], 2,
        'Protege el hueso y el corazón aunque no haya síntomas.'),
      q('pat-iop-5', 'insuficiencia-ovarica-primaria', 'Desea embarazarse. ¿Qué es correcto?',
        ['El embarazo es imposible', 'El clomifeno restaura la ovulación', 'El letrozol es de primera línea', 'El embarazo espontáneo es poco probable; la donación de ovocitos es la opción establecida'], 3,
        'La actividad ovárica puede reaparecer de forma intermitente, pero ningún tratamiento ha demostrado reactivarla.'),
    ],
  },
  fuentes: [F.poi],
}

export const FICHAS_MATERIAS_7: Patologia[] = [PLACENTA_PREVIA, RH, SOMP, IOP]
