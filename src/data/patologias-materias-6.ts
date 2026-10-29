/* Patologías por materia (sexto lote) — Embriología: anomalías cromosómicas
 * estructurales (X frágil, deleción 22q11.2, Prader-Willi y Angelman, Cri du
 * chat) y Genética: defectos del tubo neural. Mismas reglas que los lotes
 * anteriores: GPC mexicana del Catálogo Maestro cuando existe (no la hay para
 * los síndromes genéticos) y organismos internacionales como complemento;
 * solo datos verificados. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  fxAap: { codigo: 'AAP 2011', titulo: 'Health supervision for children with fragile X syndrome. Pediatrics. 2011;127(5):994–1006', url: 'https://doi.org/10.1542/peds.2010-3500' },
  fxAcmg: { codigo: 'ACMG 2013', titulo: 'ACMG Standards and Guidelines for fragile X testing. Genet Med. 2013;15(7):575–586', url: 'https://doi.org/10.1038/gim.2013.61' },
  fxMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Fragile X syndrome. Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/fragile-x-syndrome/' },
  q22Soc: { codigo: '22q11.2 Society 2023', titulo: 'Updated clinical practice recommendations for managing children with 22q11.2 deletion syndrome. Genet Med. 2023;25(3):100338', url: 'https://doi.org/10.1016/j.gim.2022.11.006' },
  q22Guia: { codigo: 'J Pediatr 2011', titulo: 'Practical guidelines for managing patients with 22q11.2 deletion syndrome. J Pediatr. 2011;159(2):332–339', url: 'https://doi.org/10.1016/j.jpeds.2011.02.039' },
  q22Medline: { codigo: 'MedlinePlus Genetics', titulo: '22q11.2 deletion syndrome. Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/22q112-deletion-syndrome/' },
  pws: { codigo: 'Mol Genet Genomic Med 2019', titulo: 'A multidisciplinary approach to the clinical management of Prader–Willi syndrome. Mol Genet Genomic Med. 2019;7(3):e514', url: 'https://doi.org/10.1002/mgg3.514' },
  as: { codigo: 'Mol Genet Genomic Med 2022', titulo: 'A multidisciplinary approach and consensus statement to establish standards of care for Angelman syndrome. Mol Genet Genomic Med. 2022;10(3):e1843', url: 'https://doi.org/10.1002/mgg3.1843' },
  pwsMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Prader-Willi syndrome. Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/prader-willi-syndrome/' },
  asMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Angelman syndrome. Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/angelman-syndrome/' },
  cdc: { codigo: 'Orphanet J Rare Dis 2006', titulo: 'Cri du Chat syndrome. Orphanet J Rare Dis. 2006;1:33', url: 'https://doi.org/10.1186/1750-1172-1-33' },
  cdcMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Cri-du-chat syndrome. Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/cri-du-chat-syndrome/' },
  prenatal: { codigo: 'GPC IMSS-028-08', titulo: 'Control prenatal con atención centrada en la paciente (actualización 2017)', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/028GER.pdf' },
  ebCdc: { codigo: 'CDC', titulo: 'What is spina bifida? Centros para el Control y la Prevención de Enfermedades (EE. UU.)', url: 'https://www.cdc.gov/spina-bifida/about/index.html' },
  ebMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Spina bifida. Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/spina-bifida/' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Embriología ────────────────────────────────────────────────── */

const X_FRAGIL: Patologia = {
  id: 'sindrome-x-fragil',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Síndrome de X frágil',
  aka: 'Trastorno relacionado con FMR1',
  ambito: 'Sitios frágiles y repeticiones de trinucleótidos',
  resumen:
    'Una expansión de más de 200 repeticiones CGG en el gen FMR1 (Xq27.3) apaga el gen y deja a la neurona sin la proteína FMRP. Es la forma hereditaria más frecuente de discapacidad intelectual: afecta a cerca de 1 de cada 4000 varones y 1 de cada 8000 mujeres, y es más grave en ellos. Se confirma con el estudio molecular de FMR1, no con el cariotipo.',
  sections: [
    {
      id: 'fxs-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El gen FMR1 tiene en su inicio una secuencia CGG que se repite. Cuando pasa de 200 repeticiones, la región se metila y el gen deja de transcribirse: no se produce FMRP, una proteína que regula la síntesis de otras proteínas en la sinapsis. El número de repeticiones define la categoría (ACMG).',
        },
        {
          type: 'table',
          title: 'Repeticiones CGG en FMR1',
          data: {
            headers: ['Repeticiones', 'Categoría', 'Qué significa'],
            rows: [
              ['5 a 44', 'Normal', 'Se transmite estable'],
              ['45 a 54', 'Intermedia (zona gris)', 'No causa el síndrome; puede crecer un poco en generaciones siguientes'],
              ['55 a 200', 'Premutación', 'No causa el síndrome, pero en la mujer puede expandirse a mutación completa al pasar a sus hijos'],
              ['Más de 200', 'Mutación completa', 'Síndrome de X frágil'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Cómo se hereda',
          items: [
            'Está ligado al X: el varón tiene un solo X y no tiene otra copia que compense.',
            'La premutación de la madre puede crecer a más de 200 repeticiones durante la formación del óvulo.',
            'La premutación del padre no se expande y pasa a sus hijas, nunca a sus hijos varones (a ellos les da el cromosoma Y).',
            'Los portadores de premutación tienen riesgo propio: insuficiencia ovárica primaria en la mujer y síndrome de temblor y ataxia (FXTAS) en el adulto mayor.',
          ],
        },
      ],
    },
    {
      id: 'fxs-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'comparison',
          title: 'Varones y mujeres',
          left: {
            title: 'Varones',
            items: [
              'Discapacidad intelectual, casi siempre leve a moderada',
              'Cara larga y estrecha, orejas grandes, mandíbula y frente prominentes',
              'Articulaciones laxas y pies planos',
              'Testículos grandes después de la pubertad',
              'Convulsiones en cerca del 15 %',
            ],
          },
          right: {
            title: 'Mujeres',
            items: [
              'Cuadro casi siempre más leve, porque tienen un segundo X',
              'Alrededor de un tercio tiene discapacidad intelectual',
              'Cerca de la mitad muestra los rasgos físicos',
              'Convulsiones en cerca del 5 %',
            ],
          },
        },
        {
          type: 'list',
          title: 'En ambos sexos',
          items: [
            'Retraso del lenguaje desde los 2 años.',
            'Ansiedad, hiperactividad y déficit de atención; cerca de un tercio tiene rasgos del espectro autista.',
            'En la infancia los rasgos físicos son poco evidentes: el aspecto típico del adulto aparece hasta la segunda década (AAP).',
          ],
        },
        {
          type: 'table',
          title: 'Cómo se confirma',
          data: {
            headers: ['Estudio', 'Qué aporta'],
            rows: [
              ['PCR del gen FMR1', 'Cuenta las repeticiones CGG'],
              ['Southern blot o PCR específica de metilación', 'Detecta expansiones grandes y si el gen está metilado (apagado)'],
              ['Cariotipo', 'No sirve: la expansión es demasiado pequeña para verse; el diagnóstico es molecular'],
            ],
          },
        },
        {
          type: 'note',
          content: 'La AAP recomienda considerar el estudio molecular en todo niño con retraso del desarrollo o discapacidad intelectual sin causa aclarada, sobre todo si hay antecedentes familiares.',
        },
      ],
    },
    {
      id: 'fxs-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'No hay un tratamiento que corrija el gen; el manejo busca el mejor desarrollo posible.',
            'Intervención temprana: terapia de lenguaje, terapia ocupacional y apoyo educativo.',
            'Manejo de la conducta y, cuando hace falta, medicamentos para la hiperactividad o la ansiedad, indicados por el especialista.',
            'Vigilancia de convulsiones y de los problemas asociados según la edad.',
            'Asesoramiento genético a toda la familia: la madre suele ser portadora, y otros familiares pueden tener premutación.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-5', label: 'Sitios frágiles: síndrome de X frágil', porQue: 'Repeticiones CGG, el gen FMR1 y el umbral de más de 200 repeticiones.' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-1', label: 'Estructura y nomenclatura del cromosoma', porQue: '«Xq27» se lee: cromosoma X, brazo largo, región 2, banda 7.' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-6', label: 'Mutaciones génicas y patrones de herencia', porQue: 'Por qué un cambio en un solo gen produce un síndrome y cómo se transmite.' },
    { materia: 'Genética', topicId: 'genetica-cromosomas-herencia', sectionId: 'gher-5', label: 'Bandeo cromosómico y nomenclatura del locus', porQue: 'Cómo se nombra la localización de un gen en el cromosoma.' },
  ],
  atlas: [
    { id: 'embriologia-anomalias-cromosomicas', title: 'Anomalías cromosómicas' },
    { id: 'genetica-cromosomas-cariotipo', title: 'Cromosomas, cariotipo y bandeo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 4 años con retraso del lenguaje: dice pocas palabras sueltas. Es muy inquieto, evita la mirada y aletea las manos cuando se emociona. Tiene cara alargada y orejas grandes. Un tío materno tiene discapacidad intelectual. El cariotipo que le hicieron el año pasado fue normal, 46,XY.',
    preguntas: [
      q('pat-fxs-1', 'sindrome-x-fragil', '¿Cuál es el diagnóstico más probable?',
        ['Síndrome de Down', 'Síndrome de Klinefelter', 'Síndrome de X frágil', 'Síndrome de Turner'], 2,
        'Varón con retraso del lenguaje, rasgos autistas, cara alargada, orejas grandes y un tío materno afectado.', 'easy'),
      q('pat-fxs-2', 'sindrome-x-fragil', '¿Qué estudio confirma el diagnóstico?',
        ['Estudio molecular del gen FMR1 (PCR y Southern blot)', 'Repetir el cariotipo', 'Perfil tiroideo', 'Resonancia magnética de cráneo'], 0,
        'La expansión CGG no se ve en el cariotipo: se cuentan las repeticiones y se valora la metilación.'),
      q('pat-fxs-3', 'sindrome-x-fragil', 'El estudio informa 350 repeticiones CGG. ¿Cómo se clasifica?',
        ['Normal', 'Intermedia', 'Premutación', 'Mutación completa'], 3,
        'Más de 200 repeticiones es mutación completa: el gen se metila y no produce FMRP.'),
      q('pat-fxs-4', 'sindrome-x-fragil', 'La madre tiene 90 repeticiones y no tiene síntomas. ¿Qué es?',
        ['Mutación completa sin expresión', 'Portadora de premutación', 'Un resultado normal', 'Un hallazgo sin relación con su hijo'], 1,
        'De 55 a 200 es premutación; en la mujer puede expandirse a mutación completa al pasar a sus hijos.'),
      q('pat-fxs-5', 'sindrome-x-fragil', '¿Por qué el cariotipo previo salió normal?',
        ['La expansión de trinucleótidos es demasiado pequeña para verse al microscopio', 'Porque el síndrome no es genético', 'Porque solo afecta a las mujeres', 'Porque el cariotipo se tomó antes de la pubertad'], 0,
        'Un cambio de unos cientos de nucleótidos no altera la forma del cromosoma en un cariotipo convencional.'),
    ],
  },
  fuentes: [F.fxAap, F.fxAcmg, F.fxMedline],
}

const DELECION_22Q: Patologia = {
  id: 'delecion-22q11',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Síndrome de deleción 22q11.2',
  aka: 'Síndrome de DiGeorge, síndrome velocardiofacial',
  ambito: 'Microdeleciones y cresta neural',
  resumen:
    'Es la microdeleción más frecuente: cerca de 1 de cada 4000 nacidos vivos. Falta un segmento de unos 3 millones de pares de bases con 30 a 40 genes, entre ellos TBX1. Combina cardiopatía conotruncal, defectos del paladar, hipocalcemia por hipoparatiroidismo, inmunodeficiencia por hipoplasia del timo, problemas de aprendizaje y riesgo psiquiátrico. Más del 90 % de las deleciones aparece de novo.',
  sections: [
    {
      id: 'dg-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Es una deleción en una de las dos copias del cromosoma 22, en el brazo largo (región 22q11.2). Una sola copia basta para causar el síndrome (herencia autosómica dominante). Después del síndrome de Down, es la segunda causa más frecuente de retraso del desarrollo y de cardiopatía congénita mayor; explica alrededor del 10 al 15 % de los casos de tetralogía de Fallot.',
        },
        {
          type: 'table',
          title: 'Del defecto embrionario al rasgo clínico',
          data: {
            headers: ['Rasgo', 'Por qué ocurre'],
            rows: [
              ['Cardiopatía conotruncal (tetralogía de Fallot y otras del tracto de salida)', 'Las células de la cresta neural participan en la división del tracto de salida del corazón'],
              ['Hipocalcemia', 'Las paratiroides (de la 3.ª y 4.ª bolsas faríngeas) son pequeñas o faltan: hay poca paratohormona'],
              ['Infecciones de repetición', 'El timo (de la 3.ª bolsa faríngea) es pequeño o falta: se forman menos linfocitos T'],
              ['Paladar hendido submucoso, úvula bífida, voz nasal', 'Defecto del desarrollo craneofacial'],
              ['Rasgos faciales característicos', 'También de origen craneofacial'],
            ],
          },
        },
        {
          type: 'note',
          content: 'DiGeorge y velocardiofacial eran nombres de distintos grupos de rasgos; hoy se sabe que tienen la misma causa y se nombran por ella: síndrome de deleción 22q11.2.',
        },
      ],
    },
    {
      id: 'dg-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          title: 'Según la edad',
          items: [
            'Recién nacido y lactante: cardiopatía, problemas de alimentación, regurgitación nasal, hipocalcemia que puede causar convulsiones e infecciones.',
            'Preescolar y escolar: retraso del lenguaje, voz nasal y dificultades de aprendizaje (lectura, matemáticas).',
            'Adolescente y adulto: mayor riesgo de trastornos psiquiátricos (ansiedad, TDAH, espectro autista y psicosis, incluida la esquizofrenia).',
            'Otros: hipoacusia, alteraciones renales, plaquetas bajas y talla baja leve.',
          ],
        },
        {
          type: 'table',
          title: 'Cómo se confirma',
          data: {
            headers: ['Estudio', 'Qué aporta'],
            rows: [
              ['FISH para 22q11.2', 'Detecta la deleción típica con una sonda de la región'],
              ['Microarreglo cromosómico o MLPA', 'Detectan deleciones de cualquier tamaño, incluidas las atípicas que el FISH no ve'],
              ['Cariotipo convencional', 'No basta: la deleción es demasiado pequeña'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Al hacer el diagnóstico se buscan',
          items: [
            'Calcio, paratohormona y vitamina D.',
            'Biometría hemática y citometría de flujo (número de linfocitos T).',
            'Ecocardiograma.',
            'Revisión del paladar, la audición y los riñones.',
          ],
        },
      ],
    },
    {
      id: 'dg-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Cada problema se trata según el órgano: cirugía de la cardiopatía, del paladar y terapia de lenguaje.',
            'Todos reciben vitamina D; si hay hipoparatiroidismo, se da calcio y una forma activa de vitamina D (calcitriol) con vigilancia del endocrinólogo.',
            'Lactantes: menos exposición a infecciones y productos sanguíneos irradiados y negativos a citomegalovirus.',
            'Las vacunas de virus vivos se aplican solo después de evaluar la función inmune.',
            'Apoyo educativo y vigilancia de la salud mental durante toda la vida.',
            'Asesoramiento genético: una persona con la deleción la transmite al 50 % de sus hijos.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-4', label: 'Microdeleciones', porQue: 'DiGeorge en la tabla de síndromes por deleción y la cresta neural como origen común de corazón y cara.' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-1', label: 'Estructura y nomenclatura del cromosoma', porQue: '«22q11» se lee: cromosoma 22, brazo largo, región 1, banda 1.' },
    { materia: 'Histología', topicId: 'histologia-linfoide-primarios', sectionId: 'hlp-5', label: 'Correlación clínica', porQue: 'La aplasia o hipoplasia del timo deja una inmunodeficiencia de linfocitos T desde el nacimiento.' },
    { materia: 'Genética', topicId: 'genetica-organogenesis', sectionId: 'gorg-3', label: 'Gastrulación y disco trilaminar', porQue: 'La cresta neural migra y forma parte del macizo craneofacial.' },
  ],
  atlas: [
    { id: 'embriologia-anomalias-cromosomicas', title: 'Anomalías cromosómicas' },
    { id: 'histologia-linfoide-hematopoyesis', title: 'Órganos linfoides y hematopoyesis' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido masculino de 3 días con cianosis y soplo; el ecocardiograma muestra tetralogía de Fallot. Al cuarto día presenta una crisis convulsiva. Calcio sérico 6.2 mg/dL (bajo). Tiene úvula bífida, y en la radiografía de tórax no se observa la sombra del timo.',
    preguntas: [
      q('pat-dg-1', 'delecion-22q11', '¿Cuál es el diagnóstico más probable?',
        ['Síndrome de Down', 'Síndrome de deleción 22q11.2', 'Síndrome de Turner', 'Trisomía 18'], 1,
        'Cardiopatía conotruncal, hipocalcemia, defecto del paladar y timo ausente.', 'easy'),
      q('pat-dg-2', 'delecion-22q11', '¿Qué explica la crisis convulsiva?',
        ['Fiebre', 'Hipoglucemia', 'Epilepsia primaria', 'Hipocalcemia por hipoparatiroidismo'], 3,
        'Las paratiroides son pequeñas o faltan: sin paratohormona baja el calcio.'),
      q('pat-dg-3', 'delecion-22q11', '¿Qué riesgo implica no ver la sombra del timo?',
        ['Infecciones por deficiencia de linfocitos T', 'Anemia', 'Hipotiroidismo', 'Trombosis'], 0,
        'El timo es donde maduran los linfocitos T; si es pequeño o falta, hay inmunodeficiencia celular.'),
      q('pat-dg-4', 'delecion-22q11', '¿Qué estudio confirma el diagnóstico?',
        ['Cariotipo convencional', 'Repetir el ecocardiograma', 'FISH o microarreglo de la región 22q11.2', 'Perfil tiroideo'], 2,
        'La deleción es submicroscópica: no se ve en el cariotipo convencional.'),
      q('pat-dg-5', 'delecion-22q11', 'Llega la edad de una vacuna de virus vivos. ¿Qué se hace?',
        ['Aplicarla igual que a cualquier niño', 'Evaluar antes la función inmune', 'No vacunarlo nunca', 'Dar antibiótico profiláctico y vacunar'], 1,
        'Las vacunas de virus vivos se aplican solo después de valorar los linfocitos T y su función.'),
    ],
  },
  fuentes: [F.q22Soc, F.q22Guia, F.q22Medline],
}

const PRADER_ANGELMAN: Patologia = {
  id: 'prader-willi-angelman',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Síndromes de Prader-Willi y Angelman',
  aka: 'Trastornos de la impronta del 15q11-q13',
  ambito: 'Microdeleciones e impronta genómica',
  resumen:
    'Dos síndromes distintos causados por la misma región del cromosoma 15. En esa región algunos genes solo funcionan en la copia del padre y otros solo en la de la madre (impronta genómica). Si falta la contribución paterna aparece Prader-Willi: hipotonía, hiperfagia y obesidad, hipogonadismo. Si falta la materna (gen UBE3A) aparece Angelman: sin lenguaje, ataxia, epilepsia y conducta alegre. Se estudian primero con el análisis de metilación.',
  sections: [
    {
      id: 'pwa-1',
      title: 'Qué es: la impronta genómica',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Casi todos los genes funcionan en las dos copias. En la región 15q11-q13 no: ciertos genes se expresan solo desde el cromosoma del padre y otros solo desde el de la madre. En las neuronas, UBE3A funciona solo desde la copia materna. Por eso importa de qué progenitor viene la copia que falla.',
        },
        {
          type: 'table',
          title: 'Mecanismos',
          data: {
            headers: ['Mecanismo', 'Prader-Willi (falta lo paterno)', 'Angelman (falta lo materno)'],
            rows: [
              ['Deleción 15q11-q13', 'Del cromosoma paterno, ≈ 70 %', 'Del cromosoma materno, ≈ 70 %'],
              ['Disomía uniparental', 'Las dos copias son maternas, ≈ 25 %', 'Las dos copias son paternas, pocos casos'],
              ['Defecto de impronta', 'Raro', 'Raro'],
              ['Variante del gen UBE3A materno', 'No aplica', '≈ 10–20 %'],
            ],
          },
        },
      ],
    },
    {
      id: 'pwa-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'comparison',
          title: 'Dos cuadros opuestos',
          left: {
            title: 'Prader-Willi',
            items: [
              'Lactante con hipotonía marcada y mala succión, hasta cerca de los 9 meses',
              'En la infancia aparece el hambre insaciable (hiperfagia) y la obesidad',
              'Talla baja por deficiencia de hormona de crecimiento',
              'Hipogonadismo: genitales poco desarrollados, criptorquidia, pubertad incompleta',
              'Discapacidad intelectual leve a moderada; berrinches, terquedad, rascado de la piel',
              'Alta tolerancia al dolor; riesgo de atragantamiento y de dilatación gástrica',
            ],
          },
          right: {
            title: 'Angelman',
            items: [
              'El retraso del desarrollo se nota entre los 6 y 12 meses',
              'Lenguaje muy limitado o ausente, toda la vida',
              'Ataxia: marcha y equilibrio alterados',
              'Epilepsia en 80–90 % de los casos por deleción',
              'Microcefalia hacia los 2 años, sobre todo en la deleción',
              'Conducta alegre y excitable: risa frecuente, aleteo de manos, poco sueño',
            ],
          },
        },
        {
          type: 'table',
          title: 'Cómo se confirma',
          data: {
            headers: ['Estudio', 'Qué aporta'],
            rows: [
              ['Análisis de metilación del 15q11-q13', 'Primer estudio: detecta el 99 % de Prader-Willi y los Angelman por deleción, disomía o defecto de impronta'],
              ['FISH, microarreglo o estudio de disomía', 'Precisan el mecanismo, que cambia el riesgo de repetición'],
              ['Secuenciación de UBE3A', 'Para un Angelman con metilación normal'],
            ],
          },
        },
      ],
    },
    {
      id: 'pwa-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'comparison',
          title: 'Manejo de cada síndrome',
          left: {
            title: 'Prader-Willi',
            items: [
              'Control estricto del acceso a la comida, dieta y ejercicio',
              'Hormona de crecimiento, con polisomnografía antes de iniciarla y a las 8–10 semanas',
              'Atención urológica de la criptorquidia',
              'Vigilancia endocrina: hipotiroidismo central e insuficiencia suprarrenal',
            ],
          },
          right: {
            title: 'Angelman',
            items: [
              'Antiepilépticos indicados por neurología',
              'Comunicación aumentativa (señas, pictogramas, dispositivos)',
              'Fisioterapia para la marcha y el equilibrio',
              'Manejo de los trastornos del sueño',
            ],
          },
        },
        {
          type: 'note',
          content: 'Ninguno tiene cura. El riesgo de que se repita en otro hijo es bajo si la causa fue una deleción o una disomía de novo; es mayor si la madre porta una variante de UBE3A o hay un defecto de impronta heredable. Por eso se precisa el mecanismo y se ofrece asesoramiento genético.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-4', label: 'Microdeleciones', porQue: 'Misma región 15q11-13: deleción materna en Angelman y paterna en Prader-Willi (impronta genómica).' },
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-3', label: 'Anomalías estructurales', porQue: 'Deleción y disomía uniparental: dos copias de un cromosoma de un solo progenitor.' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-1', label: 'Estructura y nomenclatura del cromosoma', porQue: '«15q11-13» abarca de la banda 11 a la 13 del brazo largo del cromosoma 15.' },
  ],
  atlas: [
    { id: 'embriologia-anomalias-cromosomicas', title: 'Anomalías cromosómicas' },
    { id: 'genetica-citogenetica-tamiz', title: 'Citogenética clínica y tamiz' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 5 años. Al nacer era muy hipotónico y succionaba mal; necesitó sonda para alimentarse los primeros meses. Desde los 3 años come sin saciarse y busca comida a escondidas. Hoy tiene obesidad, talla baja, testículos no descendidos y discapacidad intelectual leve. El cariotipo convencional fue normal.',
    preguntas: [
      q('pat-pwa-1', 'prader-willi-angelman', '¿Cuál es el diagnóstico más probable?',
        ['Síndrome de Angelman', 'Síndrome de Down', 'Hipotiroidismo congénito', 'Síndrome de Prader-Willi'], 3,
        'Hipotonía y mala succión en el lactante, después hiperfagia, obesidad, talla baja e hipogonadismo.', 'easy'),
      q('pat-pwa-2', 'prader-willi-angelman', '¿Cuál es el mecanismo más frecuente?',
        ['Deleción 15q11-q13 del cromosoma paterno', 'Deleción 15q11-q13 del cromosoma materno', 'Trisomía 15', 'Variante del gen UBE3A'], 0,
        'Alrededor del 70 % de los casos; le sigue la disomía uniparental materna.'),
      q('pat-pwa-3', 'prader-willi-angelman', '¿Qué estudio se pide primero?',
        ['Repetir el cariotipo', 'Perfil tiroideo', 'Análisis de metilación del 15q11-q13', 'Ecocardiograma'], 2,
        'Detecta el 99 % de los casos, cualquiera que sea el mecanismo.'),
      q('pat-pwa-4', 'prader-willi-angelman', 'El estudio muestra dos cromosomas 15, ambos de la madre. ¿Qué es?',
        ['Un resultado normal', 'Disomía uniparental materna, causa de Prader-Willi', 'Síndrome de Angelman', 'Trisomía 15 en mosaico'], 1,
        'Sin copia paterna, los genes que solo funcionan desde el padre quedan apagados.'),
      q('pat-pwa-5', 'prader-willi-angelman', 'Si la misma deleción estuviera en el cromosoma materno, ¿qué cuadro se esperaría?',
        ['Prader-Willi igual', 'Ningún síntoma', 'Síndrome de Turner', 'Angelman: sin lenguaje, ataxia, epilepsia y risa frecuente'], 3,
        'Faltaría UBE3A materno, la única copia activa en las neuronas.'),
    ],
  },
  fuentes: [F.pws, F.as, F.pwsMedline, F.asMedline],
}

const CRI_DU_CHAT: Patologia = {
  id: 'cri-du-chat',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Síndrome de Cri du chat',
  aka: 'Síndrome 5p−, «maullido de gato»',
  ambito: 'Deleciones cromosómicas',
  resumen:
    'Deleción de tamaño variable del brazo corto del cromosoma 5. Ocurre en 1 de cada 15,000 a 50,000 nacidos vivos. El recién nacido tiene un llanto agudo y monótono como maullido, microcefalia, bajo peso e hipotonía; después aparece una discapacidad intelectual grave. El diagnóstico es clínico y se confirma con cariotipo; no hay tratamiento específico, pero la intervención temprana mejora el pronóstico.',
  sections: [
    {
      id: 'cdc-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Se pierde un segmento del brazo corto del cromosoma 5 (5p). La mayoría de las deleciones aparecen de novo, casi siempre en el cromosoma de origen paterno. Cuanto mayor es la deleción, más grave suele ser la discapacidad intelectual; la pérdida del gen CTNND2, que participa en el desarrollo cerebral, se relaciona con los casos más graves.',
        },
        {
          type: 'table',
          title: 'Tipo de alteración (registro italiano, 80 pacientes)',
          data: {
            headers: ['Alteración', 'Frecuencia'],
            rows: [
              ['Deleción terminal de 5p', '77.5 %'],
              ['Deleción intersticial', '8.75 %'],
              ['Translocación de novo', '5 %'],
              ['Translocación heredada de un progenitor portador', '3.75 %'],
              ['Mosaicismo', '3.75 %'],
            ],
          },
        },
        {
          type: 'note',
          content: 'Cerca del 10 % de los casos se hereda de un progenitor sano que porta una translocación balanceada: él no tiene síntomas, pero puede formar gametos con el 5p incompleto.',
        },
      ],
    },
    {
      id: 'cdc-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Llanto agudo y monótono como maullido, por una laringe pequeña y una epiglotis blanda e hipotónica.',
            'Microcefalia, bajo peso al nacer e hipotonía.',
            'Cara redonda, ojos separados (hipertelorismo), pliegues epicánticos, puente nasal ancho, mandíbula pequeña y orejas de implantación baja.',
            'El retraso psicomotor grave se hace evidente en el primer año.',
            'Malformaciones menos frecuentes: cardiacas, renales, sindactilia, hipospadias y criptorquidia.',
            'Infecciones respiratorias e intestinales repetidas en los primeros años.',
          ],
        },
        {
          type: 'table',
          title: 'Cómo se confirma',
          data: {
            headers: ['Estudio', 'Qué aporta'],
            rows: [
              ['Cariotipo', 'Confirma la deleción del 5p en la mayoría de los casos'],
              ['FISH o microarreglo', 'En casos dudosos o deleciones pequeñas; el microarreglo precisa el tamaño'],
              ['Cariotipo de los padres', 'Busca una translocación balanceada, que cambia el riesgo de repetición'],
            ],
          },
        },
      ],
    },
    {
      id: 'cdc-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'No hay tratamiento específico.',
            'La rehabilitación y la intervención educativa tempranas mejoran el pronóstico y la adaptación social.',
            'Se atienden las malformaciones y las infecciones según aparezcan.',
            'Asesoramiento genético: si la deleción es de novo, el riesgo de repetición es prácticamente nulo; si un progenitor porta una translocación balanceada, el riesgo es alto.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-4', label: 'Microdeleciones', porQue: 'Cri du chat en la tabla de síndromes por deleción: brazo corto del 5.' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-2', label: 'Alteraciones balanceadas y desbalanceadas', porQue: 'Un progenitor con translocación balanceada puede formar gametos desbalanceados.' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-7', label: 'Integración: casos clínicos', porQue: 'El caso del lactante con llanto como maullido y microcefalia.' },
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-3', label: 'Anomalías estructurales', porQue: 'Deleción terminal e intersticial.' },
  ],
  atlas: [
    { id: 'embriologia-anomalias-cromosomicas', title: 'Anomalías cromosómicas' },
    { id: 'genetica-citogenetica-tamiz', title: 'Citogenética clínica y tamiz' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido femenino de 2 días, de término, con peso de 2300 g. Llama la atención un llanto agudo y monótono, parecido al maullido de un gato. Tiene microcefalia, cara redonda, ojos separados, mandíbula pequeña e hipotonía. La exploración cardiaca es normal.',
    preguntas: [
      q('pat-cdc-1', 'cri-du-chat', '¿Cuál es el diagnóstico más probable?',
        ['Síndrome de Cri du chat', 'Síndrome de Down', 'Síndrome de Angelman', 'Trisomía 18'], 0,
        'El llanto como maullido con microcefalia, bajo peso e hipotonía es característico.', 'easy'),
      q('pat-cdc-2', 'cri-du-chat', '¿Qué alteración cromosómica se espera?',
        ['Trisomía 5', 'Monosomía del X', 'Deleción del brazo corto del cromosoma 5', 'Deleción 22q11.2'], 2,
        'Es una deleción (5p−) de tamaño variable.'),
      q('pat-cdc-3', 'cri-du-chat', '¿A qué se debe el llanto característico?',
        ['A una infección de las vías respiratorias', 'A una laringe pequeña y una epiglotis hipotónica', 'A la hipocalcemia', 'A una sordera congénita'], 1,
        'Se suman las alteraciones de la laringe y las neurológicas.'),
      q('pat-cdc-4', 'cri-du-chat', '¿Para qué se pide el cariotipo de los padres?',
        ['Para confirmar el diagnóstico de la niña', 'Para buscar una trisomía en los padres', 'Para descartar diabetes materna', 'Para saber si alguno porta una translocación balanceada'], 3,
        'Si un progenitor la porta, el riesgo de repetición es alto; si la deleción es de novo, es casi nulo.'),
      q('pat-cdc-5', 'cri-du-chat', '¿Qué mejora el pronóstico?',
        ['Hormona de crecimiento', 'Dieta sin fenilalanina', 'Rehabilitación e intervención educativa tempranas', 'Trasplante de médula ósea'], 2,
        'No hay tratamiento específico; la intervención temprana mejora el desarrollo y la adaptación social.'),
    ],
  },
  fuentes: [F.cdc, F.cdcMedline],
}

/* ── Genética ───────────────────────────────────────────────────── */

const TUBO_NEURAL: Patologia = {
  id: 'defectos-tubo-neural',
  kind: 'ficha',
  materia: 'Genética',
  title: 'Defectos del tubo neural',
  aka: 'Espina bífida, anencefalia',
  ambito: 'Teratogénesis y ácido fólico',
  resumen:
    'El tubo neural no se cierra por completo en las primeras semanas del embrión. Los principales son la anencefalia y la espina bífida, cuya forma más grave es el mielomeningocele. Son multifactoriales, y la deficiencia de folato es el factor de riesgo mejor establecido. La GPC recomienda 400 µg diarios de ácido fólico a toda mujer, idealmente desde 3 meses antes del embarazo, y 5 mg si hay alto riesgo.',
  sections: [
    {
      id: 'dtn-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'table',
          title: 'Tipos principales',
          data: {
            headers: ['Defecto', 'Qué ocurre', 'Consecuencia'],
            rows: [
              ['Anencefalia', 'No se cierra el extremo craneal: falta gran parte del cerebro y la bóveda del cráneo', 'Casi todos mueren antes de nacer o pocas horas o días después'],
              ['Mielomeningocele', 'Sale por la espalda un saco con meninges, líquido y médula espinal', 'Discapacidad moderada a grave: piernas, vejiga e intestino; hidrocefalia'],
              ['Meningocele', 'El saco tiene meninges y líquido, pero no médula', 'Poco o ningún daño de los nervios'],
              ['Espina bífida oculta', 'Pequeña abertura de la vértebra, sin saco', 'Casi nunca da síntomas; puede notarse un mechón de pelo o un hoyuelo'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Factores de riesgo',
          items: [
            'Embarazo previo con un defecto del tubo neural o familiares afectados.',
            'Fármacos con efecto antifolato, como los anticonvulsivantes (ácido valproico).',
            'Diabetes mellitus 1 o 2 mal controlada y obesidad.',
            'Poca ingesta de ácido fólico, tabaquismo, enfermedad celiaca o de Crohn.',
            'Hipertermia al inicio del embarazo.',
            'Variantes de genes del metabolismo del folato (la más estudiada, MTHFR).',
          ],
        },
      ],
    },
    {
      id: 'dtn-2',
      title: 'Prevención y diagnóstico',
      blocks: [
        {
          type: 'comparison',
          title: 'Ácido fólico según la GPC',
          left: {
            title: 'Toda mujer que se embaraza',
            items: [
              '400 µg al día',
              'Idealmente desde 3 meses antes del embarazo',
              'Reduce el riesgo de defecto del tubo neural en 93 %',
            ],
          },
          right: {
            title: 'Alto riesgo',
            items: [
              '5 mg al día',
              'Hijo previo o familiares con el defecto, anticonvulsivantes, diabetes mal controlada, mala absorción',
              'En mujeres con un hijo previo afectado, la repetición baja de 3.5 % a 1 %',
            ],
          },
        },
        {
          type: 'note',
          content: 'El tubo neural se cierra muy pronto, cuando muchas mujeres todavía no saben que están embarazadas. Por eso el ácido fólico tiene que empezar antes de la concepción.',
        },
        {
          type: 'table',
          title: 'Cómo se detecta',
          data: {
            headers: ['Estudio', 'Qué aporta'],
            rows: [
              ['α-fetoproteína en sangre materna', 'Está elevada cuando el tubo neural queda abierto'],
              ['Ultrasonido', 'Suele mostrar el defecto en la columna o en el cráneo'],
              ['Después del nacimiento', 'El mielomeningocele es visible; la forma oculta se sospecha por un mechón o un hoyuelo y se confirma con imagen'],
            ],
          },
        },
      ],
    },
    {
      id: 'dtn-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'El mielomeningocele se cierra con cirugía poco después del nacimiento.',
            'En casos seleccionados se opera al feto antes de las 26 semanas: menos muertes, menos necesidad de derivación al año y mejor función motora, a cambio de riesgos para la placenta y de infección.',
            'La hidrocefalia se trata con una derivación (válvula) del líquido cefalorraquídeo.',
            'Seguimiento de por vida: rehabilitación, ortopedia, manejo de la vejiga (cateterismo) y del intestino.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Genética', topicId: 'genetica-teratogenesis', sectionId: 'gter-6', label: 'Correlación clínica', porQue: 'Suplementar folato por el riesgo de defectos del tubo neural y vigilar los fármacos de riesgo.' },
    { materia: 'Genética', topicId: 'genetica-teratogenesis', sectionId: 'gter-3', label: 'Teratógenos farmacológicos ★', porQue: 'El ácido valproico produce defectos del cierre del tubo neural.' },
    { materia: 'Genética', topicId: 'genetica-teratogenesis', sectionId: 'gter-4', label: 'Teratógenos físicos ★', porQue: 'La hipertermia también se asocia a defectos del tubo neural.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-coenzimas-minerales-p450', sectionId: 'bcm-2', label: 'Coenzimas de vitaminas y sus deficiencias', porQue: 'El folato (THF) aporta unidades de un carbono para purinas, timidina y ADN; su deficiencia da espina bífida.' },
    { materia: 'Genética', topicId: 'genetica-organogenesis', sectionId: 'gorg-6', label: 'Correlación: el período crítico', porQue: 'Los órganos son más vulnerables mientras se forman, en el periodo embrionario.' },
  ],
  atlas: [
    { id: 'genetica-desarrollo', title: 'Desarrollo embrionario y sexual' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 28 años con diabetes tipo 1 mal controlada (HbA1c 9.5 %). Su primer hijo nació con mielomeningocele. Acude porque quiere embarazarse en los próximos meses y no toma ningún suplemento.',
    preguntas: [
      q('pat-dtn-1', 'defectos-tubo-neural', '¿Qué dosis de ácido fólico le corresponde según la GPC?',
        ['400 µg al día al confirmar el embarazo', '5 mg al día', 'No necesita suplemento', '50 mg a la semana'], 1,
        'Tiene dos razones de alto riesgo: un hijo previo afectado y diabetes mal controlada.'),
      q('pat-dtn-2', 'defectos-tubo-neural', '¿Cuándo debe empezar a tomarlo?',
        ['En el segundo trimestre', 'Al nacer el bebé', 'Después del primer ultrasonido', 'Idealmente 3 meses antes del embarazo'], 3,
        'El tubo neural se cierra en las primeras semanas, antes de que muchas mujeres sepan que están embarazadas.'),
      q('pat-dtn-3', 'defectos-tubo-neural', '¿Por qué el folato protege al tubo neural?',
        ['Aporta unidades de un carbono para sintetizar ADN en células que se dividen rápido', 'Aumenta la glucosa disponible', 'Es un anticoagulante', 'Bloquea la acción del valproato'], 0,
        'El tetrahidrofolato participa en la síntesis de purinas y timidina, indispensable para la proliferación celular.'),
      q('pat-dtn-4', 'defectos-tubo-neural', 'Ya embarazada, la α-fetoproteína en sangre está elevada. ¿Qué sigue?',
        ['Repetirla en 6 meses', 'Interrumpir el embarazo sin más estudios', 'Ultrasonido detallado de la columna y el cráneo fetal', 'No hacer nada'], 2,
        'La α-fetoproteína elevada sugiere un tubo neural abierto; el ultrasonido busca el defecto.'),
      q('pat-dtn-5', 'defectos-tubo-neural', 'El recién nacido tiene un saco lumbar que contiene médula. ¿Qué problemas se esperan?',
        ['Hipotiroidismo', 'Cardiopatía conotruncal', 'Cataratas congénitas', 'Hidrocefalia, debilidad de las piernas y problemas de vejiga e intestino'], 3,
        'Es un mielomeningocele: la médula y los nervios expuestos se dañan.'),
    ],
  },
  fuentes: [F.prenatal, F.ebCdc, F.ebMedline],
}

export const FICHAS_MATERIAS_6: Patologia[] = [X_FRAGIL, DELECION_22Q, PRADER_ANGELMAN, CRI_DU_CHAT, TUBO_NEURAL]
