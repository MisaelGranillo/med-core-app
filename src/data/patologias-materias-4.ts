/* Patologías por materia (cuarto lote) — endocrinología, inmunología y sepsis
 * sobre los temas de hormonas, receptores y citocinas. Mismas reglas que los
 * lotes anteriores: GPC mexicana del Catálogo Maestro y, si no hay, organismos
 * internacionales; solo datos verificados. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  avpNombre: { codigo: 'Arima 2022', titulo: 'Changing the name of diabetes insipidus: a position statement of The Working Group for Renaming Diabetes Insipidus. Eur J Endocrinol. 2022;187(5):P1–P3', url: 'https://doi.org/10.1530/EJE-22-0751' },
  avpSfe: { codigo: 'Society for Endocrinology 2018', titulo: 'Society for Endocrinology clinical guidance: inpatient management of cranial diabetes insipidus. Endocr Connect. 2018;7(7):G8–G11', url: 'https://doi.org/10.1530/EC-18-0154' },
  avpMedline: { codigo: 'MedlinePlus', titulo: 'Diabetes insípida central. Enciclopedia médica, Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/spanish/ency/article/000460.htm' },
  suprarrenal: { codigo: 'Endocrine Society 2016', titulo: 'Diagnosis and treatment of primary adrenal insufficiency: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2016;101(2):364–389', url: 'https://doi.org/10.1210/jc.2015-1710' },
  suprarrenalGc: { codigo: 'ESE/Endocrine Society 2024', titulo: 'Diagnosis and therapy of glucocorticoid-induced adrenal insufficiency. Eur J Endocrinol. 2024;190(5):G25–G51', url: 'https://doi.org/10.1093/ejendo/lvae029' },
  dm2: { codigo: 'GPC IMSS-718-18', titulo: 'Diagnóstico y tratamiento farmacológico de la diabetes mellitus tipo 2 en el primer nivel de atención (actualización 2018)', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/718GER.pdf' },
  graves: { codigo: 'GPC IMSS-514-11', titulo: 'Diagnóstico y tratamiento de la enfermedad de Graves en mayores de 18 años', url: 'https://www.facmed.unam.mx/sg/css/documentos_pdf/Cat%20Maestro%20539%20GPC%202012/IMSS-514-11-Enf%20Graves/IMSS-514-11-EnfermedadGraves.pdf' },
  gravesAta: { codigo: 'ATA 2016', titulo: '2016 American Thyroid Association guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis. Thyroid. 2016;26(10):1343–1421', url: 'https://doi.org/10.1089/thy.2016.0229' },
  xla: { codigo: 'GeneReviews', titulo: 'X-linked agammaglobulinemia. GeneReviews, NCBI Bookshelf (NIH, EE. UU.)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1453/' },
  xlaMedline: { codigo: 'MedlinePlus Genetics', titulo: 'X-linked agammaglobulinemia. Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/x-linked-agammaglobulinemia/' },
  sepsisGpc: { codigo: 'GPC IMSS-084-08', titulo: 'Diagnóstico y tratamiento de sepsis grave y choque séptico en el adulto', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/084GER.pdf' },
  sepsis3: { codigo: 'Sepsis-3', titulo: 'The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801–810', url: 'https://doi.org/10.1001/jama.2016.0287' },
  ssc2026: { codigo: 'Surviving Sepsis Campaign 2026', titulo: 'Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Intensive Care Med. 2026;52:863–936', url: 'https://doi.org/10.1007/s00134-026-08361-1' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Bioquímica ─────────────────────────────────────────────────── */

const AVP: Patologia = {
  id: 'deficiencia-arginina-vasopresina',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Deficiencia de arginina vasopresina',
  aka: 'Diabetes insípida central',
  ambito: 'Hipotálamo, hipófisis posterior y riñón',
  resumen:
    'El hipotálamo o la hipófisis posterior no liberan suficiente hormona antidiurética (ADH o arginina vasopresina). Sin ella, el túbulo colector no reabsorbe agua: el paciente orina grandes volúmenes de orina diluida y tiene mucha sed. Desde 2022 se recomienda llamarla deficiencia de arginina vasopresina, para no confundirla con la diabetes mellitus.',
  sections: [
    {
      id: 'avp-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Poliuria hipotónica',
          content:
            'Más de 50 mL/kg de orina en 24 horas (más de 3 L en un adulto) con osmolalidad urinaria menor de 300 mOsm/kg. Si la causa es la falta de ADH es una deficiencia de arginina vasopresina (antes diabetes insípida central); si el riñón no responde a la ADH es una resistencia a la arginina vasopresina (antes diabetes insípida nefrogénica).',
        },
        {
          type: 'list',
          title: 'Causas de la deficiencia',
          items: [
            'Cirugía de la hipófisis o del hipotálamo y traumatismo craneoencefálico.',
            'Tumores de la región, como el craneofaringioma, y metástasis.',
            'Enfermedades infiltrativas (histiocitosis de células de Langerhans) y autoinmunes.',
            'Formas genéticas y casos sin causa identificada (idiopáticos).',
          ],
        },
      ],
    },
    {
      id: 'avp-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Poliuria y nicturia; sed intensa con preferencia por el agua fría.',
            'Mientras la persona pueda beber, el sodio en sangre se mantiene casi normal.',
            'Si no puede beber (lactante, adulto mayor, paciente inconsciente o sin sed), aparece deshidratación con hipernatremia.',
          ],
        },
      ],
    },
    {
      id: 'avp-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Medir el volumen de orina en 24 horas, el sodio y la osmolalidad del plasma y de la orina.',
            'Descartar primero la hiperglucemia, la hipercalcemia y la hipopotasemia, que también causan poliuria.',
            'Prueba de privación de agua seguida de desmopresina: en la deficiencia de AVP la orina se concentra solo después de dar desmopresina.',
            'Copeptina (fragmento que se libera junto con la AVP) estimulada con solución salina hipertónica o arginina, una alternativa más reciente.',
            'Resonancia magnética de la región hipotálamo-hipofisaria para buscar la causa.',
          ],
        },
      ],
    },
    {
      id: 'avp-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Desmopresina, análogo sintético de la ADH que actúa en el receptor V₂ del riñón (oral, sublingual o intranasal).',
            'Riesgo principal del tratamiento: hiponatremia si el paciente sigue bebiendo mucha agua con la desmopresina.',
            'En el hospital la desmopresina no debe omitirse: si se olvidan las dosis, el paciente puede deshidratarse con rapidez. Se vigila el sodio a diario.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-hipofisis-pancreas', sectionId: 'bhe-1', label: 'Hipotálamo e hipófisis', porQue: 'Dónde se forma la ADH y cómo actúa en el riñón.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-sintesis-transporte', sectionId: 'bhs-1', label: 'Síntesis de las hormonas peptídicas', porQue: 'La ADH es un péptido; la copeptina sale del mismo precursor.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-agua-osmolaridad-soluciones', sectionId: 'bao-6', label: 'Alteraciones: hiper e hipoosmolaridad', porQue: 'La hipernatremia cuando el paciente no puede beber.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-agua-electrolitos', sectionId: 'bae-3', label: 'Compartimentos del agua corporal', porQue: 'De dónde sale el agua que se pierde por la orina.' },
  ],
  atlas: [
    { id: 'bioquimica-hormonas', title: 'Hormonas y receptores' },
    { id: 'agua-electrolitos-osmolaridad', title: 'Agua, electrolitos y osmolaridad' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 34 años operado hace 5 días de un adenoma hipofisario. Desde entonces orina más de 6 litros al día y pide agua fría constantemente. Glucosa normal. Sodio sérico 147 mmol/L, osmolalidad urinaria 120 mOsm/kg.',
    preguntas: [
      q('pat-avp-1', 'deficiencia-arginina-vasopresina', '¿Qué hormona falta?',
        ['Aldosterona', 'Oxitocina', 'Hormona antidiurética (arginina vasopresina)', 'Cortisol'], 2,
        'Se sintetiza en el hipotálamo y se libera en la hipófisis posterior, la zona operada.', 'easy'),
      q('pat-avp-2', 'deficiencia-arginina-vasopresina', '¿Por qué la orina es tan diluida?',
        ['El túbulo colector no reabsorbe agua sin ADH', 'El glomérulo filtra menos', 'Hay glucosa en la orina', 'Falta sodio en la dieta'], 0,
        'La ADH inserta acuaporinas en el túbulo colector a través del receptor V₂.'),
      q('pat-avp-3', 'deficiencia-arginina-vasopresina', 'En la prueba de privación de agua, ¿qué ocurre al dar desmopresina?',
        ['Nada cambia', 'La orina se concentra', 'Baja la glucosa', 'Sube el potasio'], 1,
        'El riñón responde a la hormona; si no respondiera, sería una resistencia a la AVP (nefrogénica).'),
      q('pat-avp-4', 'deficiencia-arginina-vasopresina', '¿Qué complicación puede causar el tratamiento?',
        ['Hiperpotasemia', 'Hipoglucemia', 'Hipercalcemia', 'Hiponatremia'], 3,
        'Si el paciente sigue bebiendo mucho con la desmopresina, retiene agua y se diluye el sodio.'),
      q('pat-avp-5', 'deficiencia-arginina-vasopresina', '¿Por qué se cambió el nombre de «diabetes insípida»?',
        ['Para evitar confusiones con la diabetes mellitus', 'Porque ya no existe', 'Porque se descubrió que es infecciosa', 'Porque solo afecta a niños'], 0,
        'La confusión entre ambas ha causado errores de tratamiento en hospitales.', 'easy'),
    ],
  },
  fuentes: [F.avpNombre, F.avpSfe, F.avpMedline],
}

const SUPRARRENAL: Patologia = {
  id: 'insuficiencia-suprarrenal',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Insuficiencia suprarrenal',
  aka: 'Enfermedad de Addison (forma primaria)',
  ambito: 'Corteza suprarrenal y eje hipotálamo-hipófisis',
  resumen:
    'La suprarrenal no produce suficiente cortisol. En la forma primaria (enfermedad de Addison) la glándula está destruida y falta también aldosterona; en la secundaria falla la ACTH. La causa más frecuente en la práctica es la supresión del eje por el uso de glucocorticoides. La crisis suprarrenal es una urgencia que se trata con hidrocortisona sin esperar estudios.',
  sections: [
    {
      id: 'isr-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'comparison',
          title: 'Primaria frente a secundaria',
          left: {
            title: 'Primaria (Addison)',
            items: ['Falla la propia suprarrenal', 'Causa más común: autoinmune; también tuberculosis', 'Falta cortisol y aldosterona', 'ACTH alta: hiperpigmentación de piel y mucosas', 'Hiponatremia e hiperpotasemia'],
          },
          right: {
            title: 'Secundaria',
            items: ['Falta ACTH (hipófisis) o la supresión del eje', 'Causa más común: glucocorticoides exógenos', 'Falta cortisol; la aldosterona se conserva (la regula la renina)', 'Sin hiperpigmentación', 'Puede haber hiponatremia, sin hiperpotasemia'],
          },
        },
        {
          type: 'note',
          content:
            'Cualquier vía de glucocorticoide (oral, inhalada, intraarticular, tópica) puede suprimir el eje si la dosis y el tiempo son suficientes. Con tratamientos de menos de 3 a 4 semanas el riesgo es bajo.',
        },
      ],
    },
    {
      id: 'isr-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          title: 'Crónico',
          items: [
            'Cansancio, debilidad, pérdida de peso y falta de apetito.',
            'Náusea, vómito y dolor abdominal.',
            'Hipotensión, sobre todo al ponerse de pie; avidez por la sal.',
            'Laboratorio: hiponatremia, hiperpotasemia (en la primaria) e hipoglucemia.',
          ],
        },
        {
          type: 'list',
          title: 'Crisis suprarrenal',
          items: [
            'Hipotensión o choque, vómito, dolor abdominal y confusión.',
            'Desencadenantes: infecciones, cirugía, traumatismo o suspensión brusca del glucocorticoide.',
          ],
        },
      ],
    },
    {
      id: 'isr-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Cortisol sérico matutino bajo; en la primaria, con ACTH plasmática elevada.',
            'Prueba de estimulación con cosintropina (ACTH sintética) 250 µg: un cortisol máximo menor de 18 µg/dL (500 nmol/L) a los 30 o 60 minutos confirma la insuficiencia (el punto de corte depende del método).',
            'Renina alta y aldosterona baja orientan a la forma primaria.',
          ],
        },
      ],
    },
    {
      id: 'isr-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Crisis: hidrocortisona 100 mg IV de inmediato y después 200 mg en 24 horas, con solución salina y glucosa si hace falta. No se retrasa por estudios.',
            'Crónico: hidrocortisona en dosis divididas (15 a 25 mg al día); en la primaria se agrega fludrocortisona para sustituir a la aldosterona.',
            'Reglas para días de enfermedad: duplicar o triplicar la dosis con fiebre o enfermedad, e inyectar hidrocortisona si hay vómito. Llevar una tarjeta o brazalete de alerta.',
            'Los glucocorticoides de uso prolongado se retiran de forma gradual para dar tiempo a que el eje se recupere.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-hipofisis-pancreas', sectionId: 'bhe-1', label: 'Hipotálamo e hipófisis', porQue: 'La ACTH controla a la corteza suprarrenal.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-receptores', sectionId: 'bhr-6', label: 'Receptores nucleares', porQue: 'Por qué los glucocorticoides suprimen el eje y se retiran poco a poco.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-hipofisis-pancreas', sectionId: 'bhe-4', label: 'Hormonas de alarma', porQue: 'Por qué la dosis se aumenta en una enfermedad o cirugía.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-sintesis-transporte', sectionId: 'bhs-3', label: 'Síntesis de las hormonas esteroideas', porQue: 'Del colesterol al cortisol y la aldosterona.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-lipidos-funcion-esteroides', sectionId: 'bfe-6', label: 'Hormonas esteroideas: función, deficiencia y exceso', porQue: 'Lo que ocurre cuando faltan.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-agua-electrolitos', sectionId: 'bae-5', label: 'Alteraciones de los electrolitos', porQue: 'La hiponatremia y la hiperpotasemia por falta de aldosterona.' },
  ],
  atlas: [
    { id: 'bioquimica-hormonas', title: 'Hormonas y receptores' },
    { id: 'bioquimica-lipidos', title: 'Lípidos' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 41 años con 6 meses de cansancio, pérdida de 7 kg y antojo de comida salada. Tiene la piel más oscura, sobre todo en los pliegues de las manos y las encías. TA 88/56 mmHg. Sodio 128 mmol/L, potasio 5.8 mmol/L.',
    preguntas: [
      q('pat-isr-1', 'insuficiencia-suprarrenal', '¿Qué forma de insuficiencia suprarrenal sugiere la hiperpigmentación?',
        ['Secundaria', 'Primaria', 'Por exceso de cortisol', 'Ninguna'], 1,
        'La ACTH alta estimula a los melanocitos; en la secundaria la ACTH está baja.', 'easy'),
      q('pat-isr-2', 'insuficiencia-suprarrenal', '¿Por qué tiene el potasio alto?',
        ['Por falta de aldosterona', 'Por exceso de cortisol', 'Por falta de ACTH', 'Por exceso de insulina'], 0,
        'Sin aldosterona el riñón no elimina potasio ni retiene sodio.'),
      q('pat-isr-3', 'insuficiencia-suprarrenal', '¿Qué estudio confirma el diagnóstico?',
        ['Biometría hemática', 'Examen general de orina', 'Prueba de estimulación con cosintropina', 'TSH'], 2,
        'Si el cortisol no sube tras la ACTH sintética, la suprarrenal no responde.'),
      q('pat-isr-4', 'insuficiencia-suprarrenal', 'Llega con vómito, confusión y TA 70/40. ¿Qué se hace primero?',
        ['Esperar el cortisol', 'Hidrocortisona IV y solución salina de inmediato', 'Fludrocortisona oral', 'Solo antieméticos'], 1,
        'La crisis suprarrenal es mortal; se trata sin esperar resultados.'),
      q('pat-isr-5', 'insuficiencia-suprarrenal', '¿Cuál es la causa más común de insuficiencia suprarrenal en la práctica?',
        ['Tuberculosis', 'Hemorragia suprarrenal', 'Tumor hipofisario', 'Suspender bruscamente un glucocorticoide de uso prolongado'], 3,
        'La hormona externa suprime el eje por retroalimentación negativa.'),
    ],
  },
  fuentes: [F.suprarrenal, F.suprarrenalGc],
}

const DM2: Patologia = {
  id: 'diabetes-tipo-2',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Diabetes mellitus tipo 2',
  ambito: 'Metabolismo de la glucosa',
  resumen:
    'Hiperglucemia crónica por resistencia a la insulina en el músculo, el hígado y el tejido adiposo, junto con una falla progresiva de las células β. Se asocia con la obesidad y el sedentarismo. Durante años puede no dar síntomas, por eso se busca con estudios. El tratamiento inicia con cambios en el estilo de vida y metformina.',
  sections: [
    {
      id: 'dm2-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La insulina se une a su receptor, pero la señal posterior está disminuida: el GLUT4 sube menos a la membrana y el hígado sigue produciendo glucosa. Al principio la célula β compensa con más insulina; con el tiempo se agota y la glucosa sube.',
        },
        {
          type: 'table',
          title: 'Criterios diagnósticos (GPC IMSS-718-18, con ADA)',
          data: {
            headers: ['Estudio', 'Diabetes'],
            rows: [
              ['Glucosa plasmática en ayuno (8 horas sin comer)', '≥ 126 mg/dL'],
              ['Glucosa a las 2 horas de una carga oral de 75 g', '≥ 200 mg/dL'],
              ['Hemoglobina glucosilada (HbA1c)', '≥ 6.5 %'],
              ['Glucosa al azar con síntomas de hiperglucemia', '≥ 200 mg/dL'],
            ],
          },
        },
        {
          type: 'note',
          content: 'Sin síntomas claros, un resultado alterado se confirma con una segunda prueba.',
        },
      ],
    },
    {
      id: 'dm2-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Con frecuencia sin síntomas al diagnóstico.',
            'Poliuria, polidipsia, polifagia y pérdida de peso cuando la glucosa es muy alta.',
            'Acantosis nigricans (piel oscura y aterciopelada en cuello y axilas), signo de resistencia a la insulina.',
            'Infecciones frecuentes y cicatrización lenta.',
          ],
        },
        {
          type: 'comparison',
          title: 'Complicaciones crónicas',
          left: { title: 'Microvasculares', items: ['Retinopatía', 'Nefropatía', 'Neuropatía (pie diabético)'] },
          right: { title: 'Macrovasculares', items: ['Infarto de miocardio', 'Evento vascular cerebral', 'Enfermedad arterial periférica'] },
        },
      ],
    },
    {
      id: 'dm2-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Cambios en el estilo de vida (alimentación, actividad física, pérdida de peso) y metformina desde el diagnóstico (GPC, recomendación fuerte).',
            'La metformina se inicia a dosis baja y se sube poco a poco para evitar molestias digestivas (GPC).',
            'Meta general de control: HbA1c menor de 7 %, individualizada según la edad y el riesgo de hipoglucemia (GPC).',
            'Si no se alcanza la meta se agregan otros fármacos y, con el tiempo, insulina.',
            'Revisión periódica de ojos, riñón, pies, presión arterial y lípidos.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-receptores', sectionId: 'bhr-5', label: 'Receptores con actividad enzimática', porQue: 'La señal de la insulina y dónde falla en la resistencia.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-hipofisis-pancreas', sectionId: 'bhe-2', label: 'Islotes de Langerhans', porQue: 'La célula β que se agota y el glucagón que no se frena.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-glucidos', sectionId: 'bgl-2', label: 'La glucosa y sus destinos', porQue: 'A dónde va la glucosa cuando la insulina funciona.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-polisacaridos-fibra', sectionId: 'bpf-5', label: 'Glucógeno: la reserva animal', porQue: 'La insulina estimula su síntesis en hígado y músculo.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-presion-osmotica-oncotica', sectionId: 'bpo-2', label: 'Estados clínicos hiper e hipoosmolares', porQue: 'La glucosa muy alta eleva la osmolaridad del plasma.' },
  ],
  atlas: [
    { id: 'bioquimica-hormonas', title: 'Hormonas y receptores' },
    { id: 'bioquimica-glucidos', title: 'Glúcidos' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 48 años con obesidad (IMC 33), sin síntomas, acude a una revisión laboral. Tiene la piel del cuello oscura y aterciopelada. Glucosa en ayuno 138 mg/dL; una semana después, HbA1c 7.4 %.',
    preguntas: [
      q('pat-dm2-1', 'diabetes-tipo-2', '¿Se confirma el diagnóstico de diabetes?',
        ['No, falta una curva de tolerancia', 'Sí: dos pruebas en rango de diabetes', 'No, la HbA1c es normal', 'Solo si tiene síntomas'], 1,
        'Glucosa en ayuno ≥126 mg/dL y HbA1c ≥6.5 %.', 'easy'),
      q('pat-dm2-2', 'diabetes-tipo-2', '¿Qué indica la piel oscura del cuello?',
        ['Insuficiencia suprarrenal', 'Hipotiroidismo', 'Resistencia a la insulina', 'Deficiencia de vitamina D'], 2,
        'La acantosis nigricans acompaña a la hiperinsulinemia.'),
      q('pat-dm2-3', 'diabetes-tipo-2', '¿Con qué se inicia el tratamiento según la GPC?',
        ['Insulina', 'Glibenclamida', 'Solo dieta durante un año', 'Metformina y cambios en el estilo de vida'], 3,
        'Recomendación fuerte de la GPC desde el diagnóstico.'),
      q('pat-dm2-4', 'diabetes-tipo-2', 'En la resistencia a la insulina, ¿qué parte de la señal falla sobre todo?',
        ['La vía PI3K → Akt después del receptor', 'La síntesis de insulina', 'La unión de la insulina al ADN', 'La proteína Gq'], 0,
        'Sin esa vía el GLUT4 no sube a la membrana.', 'hard'),
      q('pat-dm2-5', 'diabetes-tipo-2', '¿Cuál es una complicación microvascular?',
        ['Infarto de miocardio', 'Enfermedad arterial periférica', 'Evento vascular cerebral', 'Retinopatía'], 3,
        'Las microvasculares son retinopatía, nefropatía y neuropatía.'),
    ],
  },
  fuentes: [F.dm2],
}

const GRAVES: Patologia = {
  id: 'enfermedad-graves',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Enfermedad de Graves',
  aka: 'Bocio difuso tóxico',
  ambito: 'Tiroides',
  resumen:
    'Enfermedad autoinmune en la que anticuerpos contra el receptor de TSH (TRAb) lo estimulan sin control. La tiroides crece (bocio difuso) y produce hormona tiroidea en exceso. Es la causa de 60 a 70 % de las tirotoxicosis. Puede afectar los ojos (oftalmopatía) y la piel de las piernas (mixedema pretibial).',
  sections: [
    {
      id: 'grv-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El receptor de TSH está acoplado a una proteína Gs. Los TRAb se unen a él e imitan a la TSH: sube el AMPc y la célula folicular crece y produce más T₄ y T₃. La TSH de la hipófisis queda suprimida por retroalimentación negativa, pero los anticuerpos siguen estimulando.',
        },
      ],
    },
    {
      id: 'grv-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Pérdida de peso con apetito aumentado, intolerancia al calor y sudoración.',
            'Taquicardia, palpitaciones y, en mayores, fibrilación auricular.',
            'Temblor fino, nerviosismo, insomnio y evacuaciones frecuentes.',
            'Bocio difuso, a veces con soplo.',
            'Oftalmopatía: ojos saltones (exoftalmos), retracción del párpado, ojo rojo y seco.',
          ],
        },
      ],
    },
    {
      id: 'grv-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'TSH suprimida con T₄ libre y T₃ elevadas.',
            'Anticuerpos contra el receptor de TSH (TRAb): confirman la causa y ayudan a predecir la evolución (GPC).',
            'Gammagrama o captación de yodo radiactivo: captación difusa y aumentada, útil cuando la causa no es clara (GPC).',
          ],
        },
      ],
    },
    {
      id: 'grv-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Betabloqueador (propranolol) para controlar la taquicardia y el temblor mientras actúa el tratamiento de fondo.',
            'Antitiroideos: metimazol como fármaco habitual; inhiben la síntesis de hormona tiroidea.',
            'Yodo radiactivo o tiroidectomía cuando los antitiroideos no logran la remisión o no pueden usarse; ambos suelen dejar hipotiroidismo, que se trata con levotiroxina.',
            'Efecto adverso grave de los antitiroideos: agranulocitosis (0.1 a 0.4 %). Ante fiebre o dolor de garganta se suspende el fármaco y se pide una biometría hemática.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-receptores', sectionId: 'bhr-4', label: 'Receptores acoplados a proteína G', porQue: 'El receptor de TSH que activan los anticuerpos usa Gs.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-hipofisis-pancreas', sectionId: 'bhe-1', label: 'Hipotálamo e hipófisis', porQue: 'La TSH y su efecto sobre la tiroides.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-concepto-clasificacion', sectionId: 'bhc-5', label: 'Retroalimentación y ejes endocrinos', porQue: 'Por qué la TSH está suprimida.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-aminas-citocinas', sectionId: 'bha-3', label: 'Tirosina: catecolaminas, hormonas tiroideas y melanina', porQue: 'Cómo se forman T₄ y T₃.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-receptores', sectionId: 'bhr-6', label: 'Receptores nucleares', porQue: 'La T₃ actúa en un receptor nuclear y acelera el metabolismo.' },
  ],
  atlas: [
    { id: 'bioquimica-hormonas', title: 'Hormonas y receptores' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 29 años con 3 meses de pérdida de 6 kg a pesar de comer más, palpitaciones, temblor de manos y calor excesivo. Tiene los ojos saltones y la tiroides crecida de forma difusa. FC 112 lpm. TSH indetectable y T₄ libre elevada.',
    preguntas: [
      q('pat-grv-1', 'enfermedad-graves', '¿Contra qué van los anticuerpos?',
        ['La tiroglobulina', 'El receptor de TSH', 'La peroxidasa', 'La hipófisis'], 1,
        'Los TRAb estimulan el receptor como si fueran TSH.', 'easy'),
      q('pat-grv-2', 'enfermedad-graves', '¿Por qué la TSH está indetectable?',
        ['Por retroalimentación negativa de la T₄ y la T₃ altas', 'Porque la hipófisis está destruida', 'Por falta de yodo', 'Por un error de laboratorio'], 0,
        'La hormona tiroidea elevada frena a la hipófisis.'),
      q('pat-grv-3', 'enfermedad-graves', '¿Qué fármaco controla rápido las palpitaciones y el temblor?',
        ['Levotiroxina', 'Metformina', 'Propranolol', 'Hidrocortisona'], 2,
        'El betabloqueador alivia los síntomas adrenérgicos mientras actúa el antitiroideo.'),
      q('pat-grv-4', 'enfermedad-graves', 'Toma metimazol y presenta fiebre con dolor de garganta. ¿Qué se sospecha?',
        ['Recaída del hipertiroidismo', 'Hipotiroidismo', 'Faringitis viral sin importancia', 'Agranulocitosis'], 3,
        'Se suspende el fármaco y se pide biometría hemática de inmediato.'),
      q('pat-grv-5', 'enfermedad-graves', '¿Qué segundo mensajero aumenta cuando los TRAb activan el receptor?',
        ['AMPc', 'IP₃', 'GMPc', 'Ca²⁺ por canal iónico'], 0,
        'El receptor de TSH está acoplado a Gs, que activa la adenilato ciclasa.', 'hard'),
    ],
  },
  fuentes: [F.graves, F.gravesAta],
}

const CHOQUE: Patologia = {
  id: 'choque-septico',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Sepsis y choque séptico',
  ambito: 'Sistémico',
  resumen:
    'La sepsis es una disfunción de órganos que pone en riesgo la vida, causada por una respuesta desregulada del organismo a una infección. En el choque séptico la presión no se sostiene sin vasopresores y el lactato está alto; la mortalidad supera el 40 %. Cada hora de retraso en los antibióticos empeora el pronóstico.',
  sections: [
    {
      id: 'chs-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Definiciones (Sepsis-3)',
          content:
            'Sepsis: disfunción orgánica (aumento de 2 o más puntos en la escala SOFA) por una respuesta desregulada a la infección. Choque séptico: sepsis que necesita vasopresores para mantener una presión arterial media de 65 mmHg o más y tiene lactato mayor de 2 mmol/L a pesar de una reanimación con líquidos adecuada.',
        },
        {
          type: 'steps',
          title: 'Del microorganismo a la falla de órganos',
          steps: [
            'Componentes del microorganismo activan a los macrófagos.',
            'Se liberan en exceso TNF-α, IL-1 e IL-6.',
            'Los vasos se dilatan y se vuelven permeables: baja la presión y sale líquido a los tejidos.',
            'Se activa la coagulación en la microcirculación.',
            'Los tejidos reciben poco oxígeno, producen lactato y los órganos fallan (riñón, pulmón, cerebro).',
          ],
        },
      ],
    },
    {
      id: 'chs-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Foco infeccioso: neumonía, infección urinaria, abdominal, de piel o de catéter.',
            'Fiebre o hipotermia, taquicardia y taquipnea.',
            'Alteración del estado de alerta.',
            'Hipotensión, llenado capilar lento, piel moteada y poca orina.',
            'Lactato elevado.',
          ],
        },
      ],
    },
    {
      id: 'chs-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Hemocultivos lo antes posible, de preferencia antes del antibiótico, pero sin retrasarlo.',
            'Antibiótico intravenoso de amplio espectro dentro de la primera hora en el choque séptico.',
            'Cristaloides (de preferencia balanceados, al menos 30 mL/kg en las primeras 3 horas), reevaluando la respuesta para no dar de menos ni de más.',
            'Norepinefrina como vasopresor de primera línea, con meta inicial de presión arterial media de 65 mmHg; se agrega vasopresina si se necesita más apoyo.',
            'Medir el lactato y controlar el foco (drenar un absceso, retirar un catéter infectado).',
          ],
        },
        {
          type: 'note',
          content:
            'La GPC mexicana es de 2009; las recomendaciones de reanimación siguen la Surviving Sepsis Campaign de 2026.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-citocinas-fase-aguda', sectionId: 'bcf-2', label: 'Citocinas de la inmunidad innata', porQue: 'El TNF-α y la IL-1 que causan la vasodilatación.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-citocinas-fase-aguda', sectionId: 'bcf-3', label: 'Respuesta de fase aguda', porQue: 'La proteína C reactiva y la fiebre.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-hipofisis-pancreas', sectionId: 'bhe-4', label: 'Hormonas de alarma', porQue: 'La hiperglucemia por estrés y la respuesta a la hipotensión.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-equilibrio-acido-base', sectionId: 'bab-5', label: 'Los cuatro trastornos ácido-base', porQue: 'El lactato produce acidosis metabólica.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-presion-osmotica-oncotica', sectionId: 'bpo-7', label: 'Fuerzas de Starling', porQue: 'La fuga de líquido por los capilares permeables.' },
    { materia: 'Histología', topicId: 'histologia-leucocitos', sectionId: 'hleu-3', label: 'Granulocitos: neutrófilo, eosinófilo, basófilo', porQue: 'El neutrófilo, primera célula que responde a la infección.' },
  ],
  atlas: [
    { id: 'bioquimica-hormonas', title: 'Hormonas y receptores' },
    { id: 'bioquimica-acido-base', title: 'Equilibrio ácido-base' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 67 años con 3 días de fiebre y ardor al orinar; hoy está confundida. TA 78/44 mmHg, FC 124 lpm, FR 26 rpm, temperatura 39.2 °C. Lactato 4.1 mmol/L. Tras 30 mL/kg de cristaloide la TA sigue en 82/48 mmHg.',
    preguntas: [
      q('pat-chs-1', 'choque-septico', '¿Qué define el choque séptico en esta paciente?',
        ['La fiebre', 'La infección urinaria', 'Hipotensión que no responde a líquidos con lactato alto', 'La taquicardia'], 2,
        'Necesita vasopresor para una PAM ≥65 mmHg y tiene lactato >2 mmol/L.', 'easy'),
      q('pat-chs-2', 'choque-septico', '¿Cuál es el vasopresor de primera línea?',
        ['Dopamina', 'Norepinefrina', 'Dobutamina', 'Fenilefrina'], 1,
        'La meta inicial es una presión arterial media de 65 mmHg.'),
      q('pat-chs-3', 'choque-septico', '¿Cuándo se debe iniciar el antibiótico?',
        ['Dentro de la primera hora', 'Al tener el resultado del cultivo', 'A las 24 horas', 'Solo si el lactato sube más'], 0,
        'Se toman hemocultivos sin retrasar el antibiótico.'),
      q('pat-chs-4', 'choque-septico', '¿Qué citocinas producen la vasodilatación y la fuga capilar?',
        ['IL-10 e IL-22', 'IL-5 e IL-7', 'G-CSF y M-CSF', 'TNF-α e IL-1'], 3,
        'Su liberación masiva dilata los vasos y aumenta su permeabilidad.'),
      q('pat-chs-5', 'choque-septico', '¿Por qué sube el lactato?',
        ['Por exceso de insulina', 'Por la fiebre sola', 'Por falta de oxígeno en los tejidos', 'Por insuficiencia hepática siempre'], 2,
        'Con poca perfusión las células recurren al metabolismo anaerobio.'),
    ],
  },
  fuentes: [F.sepsisGpc, F.sepsis3, F.ssc2026],
}

/* ── Histología ─────────────────────────────────────────────────── */

const XLA: Patologia = {
  id: 'agammaglobulinemia-ligada-x',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Agammaglobulinemia ligada al X',
  aka: 'Agammaglobulinemia de Bruton',
  ambito: 'Médula ósea y linfocitos B',
  resumen:
    'Inmunodeficiencia primaria por mutación del gen BTK, en el cromosoma X. Sin la tirosina cinasa de Bruton los linfocitos B no maduran en la médula ósea: casi no hay linfocitos B ni inmunoglobulinas. Afecta a varones, que presentan infecciones bacterianas de repetición desde los 6 meses, cuando se agotan los anticuerpos de la madre.',
  sections: [
    {
      id: 'xla-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La tirosina cinasa de Bruton (BTK) transmite la señal del receptor del linfocito pre-B. Sin ella, el desarrollo se detiene en la médula ósea y a la sangre llegan muy pocos linfocitos B. Sin linfocitos B no se forman células plasmáticas y todas las inmunoglobulinas (IgG, IgA, IgM) están muy bajas. Los linfocitos T son normales.',
        },
        {
          type: 'note',
          content: 'Herencia recesiva ligada al X: enferman los varones; las madres portadoras están sanas.',
        },
      ],
    },
    {
      id: 'xla-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Sano los primeros meses gracias a la IgG que pasó de la madre por la placenta.',
            'Desde los 6 a 12 meses: otitis, sinusitis y neumonías de repetición, sobre todo por bacterias encapsuladas (neumococo, Haemophilus influenzae).',
            'Diarrea crónica (Giardia) e infecciones graves por enterovirus.',
            'Amígdalas y ganglios linfáticos muy pequeños o ausentes, porque faltan los folículos de linfocitos B.',
          ],
        },
      ],
    },
    {
      id: 'xla-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Inmunoglobulinas séricas muy bajas en todas sus clases.',
            'Linfocitos B (CD19⁺) en sangre menores de 2 % por citometría de flujo.',
            'Estudio genético del gen BTK.',
          ],
        },
      ],
    },
    {
      id: 'xla-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Inmunoglobulina de reemplazo de por vida, intravenosa o subcutánea.',
            'Tratamiento antibiótico temprano de cada infección.',
            'Las vacunas de virus vivos están contraindicadas.',
            'Consejo genético a la familia.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-linfocitos', sectionId: 'hlin-2', label: 'Linfocitos B (inmunidad humoral)', porQue: 'Las células que no llegan a madurar.' },
    { materia: 'Histología', topicId: 'histologia-medula-hematopoyesis', sectionId: 'hmed-4', label: 'Hematopoyesis: HSC y las dos líneas', porQue: 'Dónde se detiene el desarrollo del linfocito B.' },
    { materia: 'Histología', topicId: 'histologia-linfoide-primarios', sectionId: 'hlp-1', label: 'El sistema linfoide como microambientes', porQue: 'Por qué faltan los folículos en ganglios y amígdalas.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-citocinas-fase-aguda', sectionId: 'bcf-4', label: 'Citocinas de la hematopoyesis', porQue: 'La IL-7 y la maduración de los linfocitos.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-receptores', sectionId: 'bhr-5', label: 'Receptores con actividad enzimática', porQue: 'La BTK es una tirosina cinasa que transmite señales por fosforilación.' },
  ],
  atlas: [
    { id: 'histologia-linfoide-hematopoyesis', title: 'Órganos linfoides y hematopoyesis' },
    { id: 'histologia-sangre', title: 'Sangre y elementos formes' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 2 años con su tercera neumonía y otitis de repetición desde los 8 meses. Un tío materno murió de niño por infecciones. No se le palpan amígdalas ni ganglios. IgG, IgA e IgM muy bajas; linfocitos B CD19⁺ 0.5 %.',
    preguntas: [
      q('pat-xla-1', 'agammaglobulinemia-ligada-x', '¿Qué gen está mutado?',
        ['CFTR', 'BTK', 'FMR1', 'HBB'], 1,
        'Codifica la tirosina cinasa de Bruton, necesaria para la maduración del linfocito B.', 'easy'),
      q('pat-xla-2', 'agammaglobulinemia-ligada-x', '¿Por qué estuvo sano los primeros meses?',
        ['Por la IgG de la madre que pasó por la placenta', 'Por la lactancia de IgE', 'Porque los linfocitos T la sustituyen', 'Por las vacunas'], 0,
        'La IgG materna se agota hacia los 6 meses.'),
      q('pat-xla-3', 'agammaglobulinemia-ligada-x', '¿Por qué no se palpan amígdalas ni ganglios?',
        ['Por desnutrición', 'Por exceso de linfocitos T', 'Faltan los folículos de linfocitos B', 'Por una infección viral'], 2,
        'El tejido linfoide secundario depende en gran parte de los linfocitos B.'),
      q('pat-xla-4', 'agammaglobulinemia-ligada-x', '¿Cuál es el tratamiento de base?',
        ['Trasplante de timo', 'Corticosteroides', 'Vacunas de virus vivos', 'Inmunoglobulina de reemplazo de por vida'], 3,
        'Se aplica por vía intravenosa o subcutánea; las vacunas vivas están contraindicadas.'),
      q('pat-xla-5', 'agammaglobulinemia-ligada-x', '¿Por qué el antecedente del tío materno es importante?',
        ['Indica herencia mitocondrial', 'Indica herencia autosómica dominante', 'Sugiere herencia recesiva ligada al X', 'No tiene relación'], 2,
        'La madre puede ser portadora sana del gen mutado.'),
    ],
  },
  fuentes: [F.xla, F.xlaMedline],
}

export const FICHAS_MATERIAS_4: Patologia[] = [
  DM2, GRAVES, SUPRARRENAL, AVP, CHOQUE,
  XLA,
]
