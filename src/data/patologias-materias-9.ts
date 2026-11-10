/* Patologías por materia (noveno lote) — Embriología: ejes corporales y
 * cavidades corporales (hernia diafragmática congénita, onfalocele, divertículo
 * de Meckel, heterotaxia y extrofia vesical). No hay GPC mexicana del Catálogo
 * Maestro para estas anomalías, así que se usan organismos internacionales y
 * revisiones; solo datos verificados. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  hdcMerck: { codigo: 'Manual Merck', titulo: 'Diaphragmatic hernia. Manual Merck, versión para profesionales (pediatría)', url: 'https://www.merckmanuals.com/professional/pediatrics/congenital-gastrointestinal-anomalies/diaphragmatic-hernia' },
  hdcEuro: { codigo: 'CDH EURO 2015', titulo: 'Standardized postnatal management of infants with congenital diaphragmatic hernia in Europe: the CDH EURO Consortium Consensus, 2015 update. Neonatology. 2016;110(1):66–74', url: 'https://doi.org/10.1159/000444210' },
  hdcTotal: { codigo: 'NEJM 2021', titulo: 'Randomized trial of fetal surgery for severe left diaphragmatic hernia (TOTAL). N Engl J Med. 2021;385(2):107–118', url: 'https://doi.org/10.1056/NEJMoa2027030' },
  hdcMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Congenital diaphragmatic hernia. Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/congenital-diaphragmatic-hernia/' },
  onfCdc: { codigo: 'CDC', titulo: 'About omphalocele. Centros para el Control y la Prevención de Enfermedades (EE. UU.)', url: 'https://www.cdc.gov/birth-defects/about/omphalocele.html' },
  onfMerck: { codigo: 'Manual Merck', titulo: 'Omphalocele. Manual Merck, versión para profesionales (pediatría)', url: 'https://www.merckmanuals.com/professional/pediatrics/congenital-gastrointestinal-anomalies/omphalocele' },
  onfBdr: { codigo: 'Birth Defects Res 2020', titulo: 'A multi-country study of prevalence and early childhood mortality among children with omphalocele. Birth Defects Res. 2020;112(20):1787–1801', url: 'https://doi.org/10.1002/bdr2.1822' },
  mkMerck: { codigo: 'Manual Merck', titulo: 'Meckel diverticulum. Manual Merck, versión para profesionales', url: 'https://www.merckmanuals.com/professional/gastrointestinal-disorders/diverticular-disease/meckel-diverticulum' },
  mkRev: { codigo: 'Medicine 2018', titulo: "Systematic review of epidemiology, presentation, and management of Meckel's diverticulum in the 21st century. Medicine (Baltimore). 2018;97(35):e12154", url: 'https://doi.org/10.1097/MD.0000000000012154' },
  htxMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Heterotaxy syndrome. Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/heterotaxy-syndrome/' },
  htxRch: { codigo: 'RCH Melbourne', titulo: 'Asplenia: prevention of infection (protocolo). Royal Children’s Hospital, Melbourne', url: 'https://www.rch.org.au/uploadedfiles/main/content/genmed/asplenia_protocol.pdf' },
  exNord: { codigo: 'NORD', titulo: 'Bladder exstrophy-epispadias-cloacal exstrophy complex. National Organization for Rare Disorders (EE. UU.)', url: 'https://rarediseases.org/rare-diseases/bladder-exstrophy/' },
  exMerck: { codigo: 'Manual Merck', titulo: 'Bladder anomalies (bladder exstrophy). Manual Merck, versión para profesionales (pediatría)', url: 'https://www.merckmanuals.com/professional/pediatrics/congenital-renal-and-genitourinary-anomalies/bladder-anomalies' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Embriología ────────────────────────────────────────────────── */

const HDC: Patologia = {
  id: 'hernia-diafragmatica-congenita',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Hernia diafragmática congénita',
  aka: 'Hernia de Bochdalek',
  ambito: 'Diafragma y pulmón del recién nacido',
  resumen:
    'Defecto del diafragma por el que las vísceras abdominales pasan al tórax y comprimen el pulmón en desarrollo. Afecta a cerca de 1 de cada 2 500 a 4 000 recién nacidos; casi siempre es posterolateral e izquierda. Lo grave es la hipoplasia pulmonar con hipertensión pulmonar. Al nacer se intuba de inmediato, sin ventilar con bolsa y mascarilla, y se opera cuando el bebé está estable.',
  sections: [
    {
      id: 'hdc-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El diafragma se forma entre la cuarta y la octava semanas: el tabique transverso, las membranas pleuroperitoneales, el mesenterio del esófago y el músculo que llega de los somitas C3–C5 cierran los conductos que comunican tórax y abdomen. Si una membrana no se cierra o no se muscula, queda un orificio por donde suben intestino, estómago, hígado o bazo.',
        },
        {
          type: 'table',
          title: 'Tipos',
          data: {
            headers: ['Tipo', 'Sitio', 'Frecuencia'],
            rows: [
              ['BOCHDALEK', 'Posterolateral', 'La gran mayoría (80–95 % según la serie); 85 % del lado izquierdo'],
              ['MORGAGNI', 'Anterior, junto al esternón', 'Poco frecuente (2–5 %); puede descubrirse hasta la vida adulta'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Por qué es grave',
          items: [
            'El pulmón del lado afectado no crece (HIPOPLASIA PULMONAR), y a menudo también el del otro lado.',
            'Los vasos pulmonares también se desarrollan poco: HIPERTENSIÓN PULMONAR, con paso de sangre de derecha a izquierda por el foramen oval o el conducto arterioso.',
            'Cerca de la mitad tiene otras anomalías, sobre todo cardiopatías; 10 a 15 % forma parte de un síndrome.',
          ],
        },
      ],
    },
    {
      id: 'hdc-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Prenatal: ultrasonido y resonancia fetal. El pronóstico se estima con la relación pulmón-cabeza observada/esperada y la posición del hígado (dentro o fuera del abdomen).',
            'Al nacer: dificultad respiratoria desde las primeras horas, ABDOMEN EXCAVADO (escafoides), ruidos intestinales y ausencia de ruidos respiratorios en el hemitórax afectado, ruidos cardiacos desplazados.',
            'Radiografía de tórax: asas con aire en el hemitórax y el mediastino desplazado al otro lado.',
            'Ecocardiograma: busca cardiopatía e hipertensión pulmonar.',
          ],
        },
      ],
    },
    {
      id: 'hdc-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Nacimiento planeado en un centro de tercer nivel con experiencia, después de las 39 semanas si el embarazo lo permite.',
            'En la sala de partos: INTUBAR de inmediato y NO ventilar con bolsa y mascarilla, que llena de aire las asas del tórax. Sonda gástrica con succión para descomprimir.',
            'Ventilación gentil, con presiones bajas y saturación preductal meta de 80–95 %; manejo de la hipertensión pulmonar y, en casos graves, oxigenación con membrana extracorpórea (ECMO).',
            'La cirugía regresa las vísceras al abdomen y cierra el defecto una vez que el bebé está estable; no es una urgencia inmediata.',
            'En fetos con hipoplasia grave, la oclusión traqueal fetoscópica (FETO) aumentó la supervivencia (40 % frente a 15 % en el ensayo TOTAL), con más riesgo de parto pretérmino.',
          ],
        },
        {
          type: 'note',
          content: 'Seguimiento a largo plazo: hipertensión pulmonar, reflujo gastroesofágico, problemas de alimentación y del neurodesarrollo.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-cavidades-corporales', sectionId: 'ecc-5', label: 'Formación del diafragma', porQue: 'El defecto es una falla de las membranas pleuroperitoneales o de la migración del músculo de C3–C5.' },
    { materia: 'Embriología', topicId: 'embriologia-cavidades-corporales', sectionId: 'ecc-8', label: 'Hernias diafragmáticas', porQue: 'El 85–90 % es izquierdo y la gravedad la da la hipoplasia pulmonar.' },
    { materia: 'Anatomía', topicId: 'musculos-diafragma', sectionId: 'mdia-2', label: 'Porciones', porQue: 'La hernia de Morgagni pasa entre las porciones esternal y costal; la de Bochdalek, por la región posterolateral.' },
  ],
  atlas: [
    { id: 'musculos-dorso-diafragma', title: 'Dorso y diafragma' },
    { id: 'aparato-respiratorio', title: 'Aparato Respiratorio' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido de término que a los pocos minutos presenta dificultad respiratoria y cianosis. El abdomen se ve excavado; en el hemitórax izquierdo no se escuchan ruidos respiratorios, pero sí ruidos intestinales, y los ruidos cardiacos se oyen a la derecha.',
    preguntas: [
      q('pat-hdc-1', 'hernia-diafragmatica-congenita', '¿Cuál es el diagnóstico más probable?',
        ['Neumotórax', 'Hernia diafragmática congénita', 'Dextrocardia aislada', 'Atresia de esófago'], 1,
        'Abdomen excavado y ruidos intestinales en el tórax, casi siempre del lado izquierdo.', 'easy'),
      q('pat-hdc-2', 'hernia-diafragmatica-congenita', '¿Qué NO se debe hacer en la sala de partos?',
        ['Intubar', 'Colocar sonda gástrica', 'Ventilar con bolsa y mascarilla', 'Medir la saturación preductal'], 2,
        'La bolsa y mascarilla mete aire al estómago y a las asas del tórax y comprime más el pulmón.'),
      q('pat-hdc-3', 'hernia-diafragmatica-congenita', '¿Qué determina sobre todo el pronóstico?',
        ['El tamaño del hígado', 'La hipoplasia pulmonar y la hipertensión pulmonar', 'El peso al nacer', 'El lado del defecto únicamente'], 1,
        'Por eso, antes de nacer, se mide el tamaño del pulmón y la posición del hígado.'),
      q('pat-hdc-4', 'hernia-diafragmatica-congenita', '¿Cuándo se opera?',
        ['En la sala de partos', 'A los 6 meses', 'Nunca: cierra solo', 'Cuando el bebé está estable'], 3,
        'Primero se estabiliza la respiración y la hipertensión pulmonar; la cirugía no es inmediata.'),
      q('pat-hdc-5', 'hernia-diafragmatica-congenita', '¿De qué segmentos viene el músculo que no llegó a cerrar el defecto?',
        ['C3–C5', 'T1–T4', 'L1–L3', 'C1–C2'], 0,
        'Los somitas C3–C5 dan el músculo del diafragma y el nervio frénico.'),
    ],
  },
  fuentes: [F.hdcMerck, F.hdcEuro, F.hdcTotal, F.hdcMedline],
}

const ONFALOCELE: Patologia = {
  id: 'onfalocele',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Onfalocele',
  aka: 'Exónfalo',
  ambito: 'Pared abdominal ventral',
  resumen:
    'Defecto en la base del ombligo por el que salen intestino y a veces hígado, cubiertos por una membrana. Afecta a 2 o 3 de cada 10 000 nacidos vivos. Cerca de dos tercios tienen otras anomalías: cromosómicas (trisomías 18, 13 y 21), cardiopatías o síndrome de Beckwith-Wiedemann, y de ellas depende el pronóstico.',
  sections: [
    {
      id: 'onf-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Entre las semanas 6 y 10 el intestino medio se hernia de forma normal hacia el cordón umbilical y regresa al abdomen hacia las semanas 10 a 12. En el onfalocele no regresa: queda en la base del ombligo, dentro de un saco de amnios y peritoneo, con el cordón insertado en el saco.',
        },
        {
          type: 'comparison',
          title: 'Pequeño o gigante',
          left: { title: 'Pequeño', items: ['Solo algunas asas de intestino', 'Cierre quirúrgico pronto tras el nacimiento'] },
          right: { title: 'Gigante', items: ['Contiene hígado, estómago o casi todas las vísceras', 'El abdomen es muy pequeño: cierre por etapas con silo o cubierta'] },
        },
      ],
    },
    {
      id: 'onf-2',
      title: 'Asociaciones y diagnóstico',
      blocks: [
        {
          type: 'list',
          title: 'Anomalías asociadas (cerca de dos tercios)',
          items: [
            'Cromosómicas: trisomía 18, trisomía 13 y síndrome de Down.',
            'Cardiopatías congénitas y anomalías renales.',
            'Atresia intestinal y defectos del tubo neural.',
            'Síndrome de Beckwith-Wiedemann (sobrecrecimiento, macroglosia, hipoglucemia).',
            'Pentalogía de Cantrell, cuando el defecto es supraumbilical.',
          ],
        },
        {
          type: 'list',
          title: 'Factores de riesgo',
          items: ['Alcohol o mucho tabaco antes o durante el embarazo.', 'Uso de ISRS en el embarazo.', 'Obesidad antes del embarazo.'],
        },
        {
          type: 'paragraph',
          content: 'Se detecta en el ultrasonido prenatal o por una alfafetoproteína elevada en el tamiz materno. Por las asociaciones se ofrece estudio cromosómico y ecocardiograma fetal, y el nacimiento se planea en un hospital de tercer nivel.',
        },
      ],
    },
    {
      id: 'onf-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Al nacer: cubrir el saco con gasa estéril húmeda no adherente para evitar pérdida de calor, de agua e infección; líquidos intravenosos (1.5 a 2 veces lo habitual), sonda gástrica y antibióticos.',
            'Buscar las anomalías asociadas antes de operar.',
            'Cierre primario si cabe; si no, un silo que se reduce poco a poco hasta que el abdomen crece.',
            'La mortalidad y el resultado dependen del tamaño del defecto y, sobre todo, de las anomalías asociadas.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-cavidades-corporales', sectionId: 'ecc-7', label: 'Gastrosquisis y onfalocele', porQue: 'Es una falla del retorno de las asas tras la herniación umbilical fisiológica (semanas 6 a 10).' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-numericas', sectionId: 'ean-4', label: 'Edwards, Patau y diagnóstico prenatal', porQue: 'Las trisomías 18 y 13 son de las anomalías cromosómicas que más acompañan al onfalocele.' },
    { materia: 'Anatomía', topicId: 'musculos-pared-abdominal', sectionId: 'mpab-2', label: 'Anterolateral (5 músculos)', porQue: 'El defecto queda en el anillo umbilical, en la línea media de la pared abdominal.' },
  ],
  atlas: [
    { id: 'musculos-pared-abdominal', title: 'Pared abdominal' },
    { id: 'embriologia-anomalias-cromosomicas', title: 'Anomalías cromosómicas' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Ultrasonido de las 20 semanas: masa en la base del cordón umbilical que contiene asas intestinales y parte del hígado, cubierta por una membrana. Se observan además manos con dedos superpuestos y una comunicación interventricular.',
    preguntas: [
      q('pat-onf-1', 'onfalocele', '¿Cuál es el diagnóstico de la pared abdominal?',
        ['Gastrosquisis', 'Hernia umbilical', 'Extrofia vesical', 'Onfalocele'], 3,
        'Está en el ombligo y cubierto por una membrana; contiene hígado (onfalocele grande).', 'easy'),
      q('pat-onf-2', 'onfalocele', 'Con los otros hallazgos, ¿qué estudio sigue?',
        ['Cariotipo fetal', 'Ninguno', 'Tomografía materna', 'Repetir el ultrasonido en 6 meses'], 0,
        'Dedos superpuestos y cardiopatía sugieren trisomía 18, frecuente con onfalocele.'),
      q('pat-onf-3', 'onfalocele', '¿Qué falla embrionaria lo explica?',
        ['Falla del cierre de los pliegues laterales', 'Falla del retorno de las asas tras la herniación fisiológica', 'Persistencia del conducto vitelino', 'Falta de membrana pleuroperitoneal'], 1,
        'La gastrosquisis, en cambio, es una falla del cierre de la pared.'),
      q('pat-onf-4', 'onfalocele', '¿De qué depende sobre todo el pronóstico?',
        ['Del sexo', 'Del peso materno', 'De las anomalías asociadas', 'De la vía de nacimiento'], 2,
        'Cromosómicas y cardiacas; también del tamaño del defecto.'),
      q('pat-onf-5', 'onfalocele', '¿Qué se hace con el saco al nacer?',
        ['Romperlo para revisar las asas', 'Cubrirlo con gasa estéril húmeda no adherente', 'Dejarlo al aire', 'Reducirlo a mano en la sala de partos'], 1,
        'Evita la pérdida de calor y de agua y la infección; luego se repara con cirugía.'),
    ],
  },
  fuentes: [F.onfCdc, F.onfMerck, F.onfBdr],
}

const MECKEL: Patologia = {
  id: 'diverticulo-meckel',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Divertículo de Meckel',
  ambito: 'Íleon',
  resumen:
    'Restos del conducto vitelino unidos al íleon: un divertículo verdadero, la anomalía congénita más frecuente del tubo digestivo (menos de 1 a 3 % de la población). Solo 4 a 9 % da síntomas. En niños, la forma típica es sangrado rectal rojo e indoloro por mucosa gástrica ectópica; se busca con gammagrafía con tecnecio y se reseca.',
  sections: [
    {
      id: 'mk-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El conducto vitelino une el intestino medio con el saco vitelino y normalmente se oblitera hacia la sexta semana. Si persiste la parte unida al íleon queda un divertículo en el borde antimesentérico, con todas las capas de la pared: es un divertículo VERDADERO.',
        },
        {
          type: 'list',
          items: [
            'Puede contener tejido ectópico: mucosa gástrica (hasta 71 %), que secreta ácido, o pancreática (hasta 12 %).',
            'Es más frecuente en varones.',
            'El conducto vitelino también puede persistir completo (fístula onfalomesentérica con salida de contenido intestinal por el ombligo) o como un cordón fibroso que va al ombligo.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'mnemotecnia',
          title: 'La «regla de los dos»',
          content: 'Clásicamente: 2 % de la población, a unos 2 pies (60 cm) de la válvula ileocecal, unas 2 pulgadas de largo, 2 tipos de tejido ectópico (gástrico y pancreático) y síntomas antes de los 2 años. Es aproximada: la prevalencia real va de menos de 1 a 3 %.',
        },
      ],
    },
    {
      id: 'mk-2',
      title: 'Complicaciones y diagnóstico',
      blocks: [
        {
          type: 'table',
          title: 'Cómo se presenta',
          data: {
            headers: ['Complicación', 'Mecanismo', 'Más común en'],
            rows: [
              ['SANGRADO', 'El ácido de la mucosa gástrica ectópica ulcera el íleon vecino: sangre roja, indolora y recurrente', 'Niños'],
              ['OBSTRUCCIÓN', 'Intususcepción, vólvulo, bridas o hernia de Littré', 'Niños'],
              ['DIVERTICULITIS', 'Dolor periumbilical o abajo del ombligo, parecido a una apendicitis', 'Adultos'],
              ['Perforación y tumores', 'Peritonitis; tumores neuroendocrinos, raros', 'Adultos'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Estudios',
          items: [
            'Sangrado: GAMMAGRAFÍA CON PERTECNECIATO DE TECNECIO-99m (gammagrafía de Meckel), que detecta la mucosa gástrica ectópica en 85 a 97 % de los niños que sangran; no ve los divertículos sin mucosa gástrica.',
            'Dolor: ultrasonido o tomografía.',
            'Si en una cirugía por apendicitis el apéndice está normal, se busca un divertículo de Meckel.',
          ],
        },
      ],
    },
    {
      id: 'mk-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'El divertículo que sangra, obstruye o se inflama se reseca; si el íleon vecino está indurado, se reseca también ese segmento.',
            'Los pequeños y sin síntomas encontrados por casualidad no necesitan quitarse; en niños y jóvenes algunos cirujanos prefieren resecarlos.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-periodo-embrionario', sectionId: 'epe-9', label: 'Endodermo', porQue: 'El conducto vitelino une el intestino medio con el saco vitelino; si persiste, queda el divertículo.' },
    { materia: 'Embriología', topicId: 'embriologia-cavidades-corporales', sectionId: 'ecc-2', label: 'Plegamiento lateral y cefalocaudal', porQue: 'El tubo intestinal cierra salvo el conducto vitelino, que degenera entre el segundo y el tercer mes.' },
  ],
  atlas: [
    { id: 'aparato-digestivo', title: 'Aparato Digestivo' },
    { id: 'embriologia-tercera-semana', title: 'Tercera semana y periodo embrionario' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Niño de 2 años con varios episodios de sangre roja abundante en las heces, sin dolor ni fiebre. Está pálido; la exploración abdominal es normal y no hay fisuras anales.',
    preguntas: [
      q('pat-mk-1', 'diverticulo-meckel', '¿Cuál es el diagnóstico más probable?',
        ['Divertículo de Meckel', 'Apendicitis', 'Enfermedad de Crohn', 'Hemorroides'], 0,
        'Sangrado rectal indoloro y recurrente en un niño pequeño.', 'easy'),
      q('pat-mk-2', 'diverticulo-meckel', '¿Qué tejido explica el sangrado?',
        ['Mucosa pancreática', 'Mucosa colónica', 'Músculo liso', 'Mucosa gástrica ectópica'], 3,
        'Secreta ácido, que ulcera el íleon vecino.'),
      q('pat-mk-3', 'diverticulo-meckel', '¿Qué estudio lo identifica?',
        ['Colonoscopia', 'Gammagrafía con pertecneciato de tecnecio-99m', 'Radiografía simple', 'Ecocardiograma'], 1,
        'El tecnecio se concentra en la mucosa gástrica, también en la ectópica.'),
      q('pat-mk-4', 'diverticulo-meckel', '¿De qué estructura embrionaria es un resto?',
        ['Del uraco', 'De la alantoides', 'Del conducto vitelino (onfalomesentérico)', 'De la cloaca'], 2,
        'Une el intestino medio con el saco vitelino y normalmente se oblitera hacia la sexta semana.'),
      q('pat-mk-5', 'diverticulo-meckel', '¿Por qué se llama divertículo «verdadero»?',
        ['Porque siempre da síntomas', 'Porque tiene todas las capas de la pared intestinal', 'Porque es adquirido', 'Porque está en el colon'], 1,
        'Los falsos solo tienen mucosa y submucosa, como los del colon.'),
    ],
  },
  fuentes: [F.mkMerck, F.mkRev],
}

const HETEROTAXIA: Patologia = {
  id: 'heterotaxia',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Heterotaxia y situs inversus',
  aka: 'Situs ambiguus · síndromes de asplenia y poliesplenia',
  ambito: 'Lateralidad de los órganos',
  resumen:
    'En el situs inversus todos los órganos están en espejo y por lo general no hay problemas de salud. En la heterotaxia (situs ambiguus) la disposición es intermedia y desordenada: casi siempre hay cardiopatía compleja, asplenia o poliesplenia y malrotación intestinal. Se estima en 1 de cada 10 000 personas y explica cerca del 3 % de las cardiopatías congénitas.',
  sections: [
    {
      id: 'htx-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La asimetría izquierda-derecha se establece muy temprano: los cilios del nodo y la cascada NODAL, LEFTY2 y PITX2 dan identidad al lado izquierdo. Si falla, los órganos quedan en espejo o desordenados. Se han identificado mutaciones en al menos 20 genes; al menos 12 % de las personas con discinesia ciliar primaria tiene heterotaxia.',
        },
        {
          type: 'table',
          title: 'Tres disposiciones',
          data: {
            headers: ['Disposición', 'Qué es', 'Salud'],
            rows: [
              ['SITUS SOLITUS', 'Normal: corazón, bazo y páncreas a la izquierda; casi todo el hígado a la derecha', 'Normal'],
              ['SITUS INVERSUS', 'Espejo completo', 'Por lo general sin problemas, salvo que forme parte de un síndrome'],
              ['HETEROTAXIA (situs ambiguus)', 'Intermedia y discordante', 'Suele causar problemas graves'],
            ],
          },
        },
      ],
    },
    {
      id: 'htx-2',
      title: 'Qué se altera en la heterotaxia',
      blocks: [
        {
          type: 'comparison',
          title: 'Los dos patrones',
          left: {
            title: 'Bilateralidad DERECHA',
            items: ['ASPLENIA (o bazo muy pequeño)', 'Dos pulmones de tipo derecho (tres lóbulos)', 'Cardiopatía casi siempre grave', 'Alto riesgo de infecciones por bacterias encapsuladas'],
          },
          right: {
            title: 'Bilateralidad IZQUIERDA',
            items: ['POLIESPLENIA: varios bazos pequeños que funcionan mal', 'Dos pulmones de tipo izquierdo (dos lóbulos)', 'Hallazgo frecuente: vena cava inferior interrumpida con continuación por la ácigos', 'Cardiopatía, a veces menos grave'],
          },
        },
        {
          type: 'list',
          title: 'Otros hallazgos',
          items: [
            'Cardiopatía congénita crítica: la causa principal de enfermedad grave; cianosis y dificultad respiratoria.',
            'Hígado en la línea media y MALROTACIÓN INTESTINAL, con riesgo de vólvulo.',
            'Atresia de vías biliares en algunos casos.',
          ],
        },
      ],
    },
    {
      id: 'htx-3',
      title: 'Manejo: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Ecocardiograma y estudio de la anatomía de las vísceras; la cardiopatía suele requerir cirugía.',
            'Revisar la función del bazo. Con asplenia: ANTIBIÓTICO PROFILÁCTICO diario (penicilina o amoxicilina, al menos los primeros 5 años) y vacunas contra neumococo, Haemophilus influenzae tipo b y meningococo. Toda fiebre se valora como urgencia.',
            'Vigilar datos de malrotación y vólvulo (vómito biliar, dolor abdominal).',
            'Situs inversus aislado: no requiere tratamiento; conviene que el paciente lo sepa, porque una apendicitis o una colecistitis dolerán del lado contrario.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-ejes-corporales', sectionId: 'eje-6', label: 'Eje izquierda-derecha: serotonina y PITX2', porQue: 'NODAL solo a la izquierda activa PITX2, el gen maestro del lado izquierdo; si falla, la lateralidad se altera.' },
    { materia: 'Embriología', topicId: 'embriologia-ejes-corporales', sectionId: 'eje-8', label: 'Heterotaxia y síndrome de Kartagener', porQue: 'Bilateralidad izquierda con poliesplenia y derecha con asplenia; 90 % con cardiopatía compleja.' },
    { materia: 'Embriología', topicId: 'embriologia-ejes-corporales', sectionId: 'eje-7', label: 'Situs solitus, situs inversus y dextrocardia', porQue: 'El situs inversus total es un espejo completo y suele no dar problemas.' },
  ],
  atlas: [
    { id: 'sistema-cardiovascular', title: 'Sistema Cardiovascular' },
    { id: 'aparato-digestivo', title: 'Aparato Digestivo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido con cianosis desde las primeras horas. El ecocardiograma muestra una cardiopatía compleja; el ultrasonido abdominal muestra el hígado en la línea media y no se encuentra el bazo. En el frotis de sangre hay cuerpos de Howell-Jolly.',
    preguntas: [
      q('pat-htx-1', 'heterotaxia', '¿Qué cuadro presenta?',
        ['Situs inversus total', 'Heterotaxia con bilateralidad derecha (asplenia)', 'Heterotaxia con poliesplenia', 'Dextrocardia aislada'], 1,
        'Cardiopatía compleja, hígado en la línea media y ausencia de bazo.', 'easy'),
      q('pat-htx-2', 'heterotaxia', 'Además de la cirugía cardiaca, ¿qué medida es indispensable?',
        ['Ninguna', 'Esplenectomía', 'Transfusiones periódicas', 'Antibiótico profiláctico y vacunas contra bacterias encapsuladas'], 3,
        'Sin bazo, el riesgo de sepsis por neumococo y otras bacterias encapsuladas es alto.'),
      q('pat-htx-3', 'heterotaxia', '¿Qué hallazgo intestinal se busca por riesgo de vólvulo?',
        ['Malrotación intestinal', 'Divertículo de Meckel', 'Estenosis pilórica', 'Gastrosquisis'], 0,
        'Es frecuente en la heterotaxia.'),
      q('pat-htx-4', 'heterotaxia', '¿En qué se diferencia del situs inversus total?',
        ['No hay diferencia', 'El situs inversus siempre tiene cardiopatía grave', 'En el situs inversus todo está en espejo y suele no haber problemas', 'El situs inversus no tiene bazo'], 2,
        'La heterotaxia es una disposición intermedia y discordante, con anomalías graves.'),
      q('pat-htx-5', 'heterotaxia', '¿Qué gen da identidad al lado izquierdo y falla en estos trastornos?',
        ['PAX1', 'TBXT', 'SHH', 'PITX2'], 3,
        'NODAL activa la cascada con LEFTY2 y PITX2 en el lado izquierdo.'),
    ],
  },
  fuentes: [F.htxMedline, F.htxRch],
}

const EXTROFIA: Patologia = {
  id: 'extrofia-vesical',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Extrofia vesical',
  aka: 'Complejo extrofia-epispadias',
  ambito: 'Pared abdominal inferior, vejiga y genitales',
  resumen:
    'La vejiga queda abierta sobre la pared abdominal inferior, con su mucosa expuesta, el pubis separado y epispadias. Se presenta en 1 de cada 10 000 a 50 000 nacidos vivos, de 2 a 3 veces más en varones. La función renal suele conservarse; se reconstruye con varias cirugías y el reto a largo plazo es la continencia.',
  sections: [
    {
      id: 'exv-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Hacia la cuarta y quinta semanas, la membrana cloacal es reemplazada por el tejido que formará los músculos de la pared abdominal inferior. Si no se reemplaza, la pared no se cierra en la línea media y la vejiga queda abierta hacia afuera, con la orina saliendo directamente sobre la piel.',
        },
        {
          type: 'table',
          title: 'Un espectro',
          data: {
            headers: ['Forma', 'Qué queda abierto', 'Frecuencia'],
            rows: [
              ['EPISPADIAS aislado', 'Solo la uretra, en el dorso del pene', '≈ 1 de cada 112 000 varones'],
              ['EXTROFIA VESICAL clásica', 'Uretra y vejiga', '1 de cada 10 000 a 50 000'],
              ['EXTROFIA CLOACAL', 'Uretra, vejiga e intestino; suele haber onfalocele', '≈ 1 de cada 400 000'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Hallazgos de la extrofia clásica',
          items: [
            'Mucosa vesical continua con la piel del abdomen.',
            'Separación de la sínfisis del pubis.',
            'Epispadias en el varón; clítoris dividido en la mujer.',
            'Ombligo bajo y reflujo vesicoureteral casi constante.',
          ],
        },
      ],
    },
    {
      id: 'exv-2',
      title: 'Diagnóstico y tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Prenatal: ultrasonido sin vejiga visible, cordón de inserción baja, pubis separado, genitales pequeños.',
            'Primera cirugía: cerrar la vejiga, colocarla dentro de la pelvis y cerrar la pared abdominal; a menudo con osteotomías para acercar el pubis.',
            'Después: reconstrucción de los genitales y procedimientos para la continencia.',
            'Pronóstico: la función renal suele conservarse; pueden quedar incontinencia, infecciones y cálculos urinarios.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-cavidades-corporales', sectionId: 'ecc-6', label: 'Defectos de la pared ventral: tórax y pelvis', porQue: 'Es una falla del cierre de la pared corporal en la región pélvica; la extrofia cloacal expone también el recto.' },
    { materia: 'Embriología', topicId: 'embriologia-periodo-embrionario', sectionId: 'epe-9', label: 'Endodermo', porQue: 'La vejiga y la uretra vienen de la cloaca, de origen endodérmico.' },
  ],
  atlas: [
    { id: 'aparato-urinario', title: 'Aparato Urinario' },
    { id: 'hueso-coxal', title: 'Hueso coxal' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido varón con una placa roja y húmeda en la parte baja del abdomen, de la que gotea orina. El ombligo está más abajo de lo normal, el pene es corto con la uretra abierta en su cara dorsal y se palpa separación de los huesos del pubis.',
    preguntas: [
      q('pat-exv-1', 'extrofia-vesical', '¿Cuál es el diagnóstico?',
        ['Hipospadias', 'Onfalocele', 'Extrofia vesical clásica', 'Extrofia cloacal'], 2,
        'Vejiga abierta, pubis separado y epispadias, sin exposición del intestino.', 'easy'),
      q('pat-exv-2', 'extrofia-vesical', 'La uretra abierta en el dorso del pene se llama:',
        ['Epispadias', 'Hipospadias', 'Fimosis', 'Criptorquidia'], 0,
        'En el hipospadias la uretra se abre en la cara ventral.'),
      q('pat-exv-3', 'extrofia-vesical', '¿Qué estructura embrionaria no fue reemplazada por la pared abdominal?',
        ['La membrana orofaríngea', 'La membrana cloacal', 'El tabique transverso', 'La alantoides'], 1,
        'Normalmente separa las estructuras urogenitales y anales y es reemplazada por el tejido de la pared abdominal inferior.'),
      q('pat-exv-4', 'extrofia-vesical', '¿Qué la distingue de la extrofia cloacal?',
        ['La cloacal es menos grave', 'En la clásica también se expone el intestino', 'No hay diferencia', 'En la cloacal también se exponen el intestino y suele haber onfalocele'], 3,
        'La extrofia cloacal es la forma más grave del espectro.'),
      q('pat-exv-5', 'extrofia-vesical', '¿Qué se espera de la función renal tras la reconstrucción?',
        ['Suele conservarse', 'Siempre se pierde', 'Requiere trasplante temprano', 'No se puede saber'], 0,
        'El reto a largo plazo es la continencia, no la función renal.'),
    ],
  },
  fuentes: [F.exNord, F.exMerck],
}

export const FICHAS_MATERIAS_9: Patologia[] = [HDC, ONFALOCELE, MECKEL, HETEROTAXIA, EXTROFIA]
