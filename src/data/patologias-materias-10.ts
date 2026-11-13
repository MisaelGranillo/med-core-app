/* Patologías por materia (décimo lote) — Embriología: periodo fetal (restricción
 * del crecimiento intrauterino y síndrome de dificultad respiratoria del
 * prematuro). GPC mexicanas del Catálogo Maestro (IMSS-500-11 e IMSS-137-08) y,
 * para el manejo respiratorio actual, el consenso europeo de 2022; solo datos
 * verificados. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  rciuGpc: { codigo: 'GPC IMSS-500-11', titulo: 'Diagnóstico y tratamiento de la restricción del crecimiento intrauterino. Evidencias y recomendaciones', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/500GER.pdf' },
  sdrGpc: { codigo: 'GPC IMSS-137-08', titulo: 'Diagnóstico y tratamiento del síndrome de dificultad respiratoria en el recién nacido', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/137GER.pdf' },
  sdrEuro: { codigo: 'Consenso europeo 2022', titulo: 'European consensus guidelines on the management of respiratory distress syndrome: 2022 update. Neonatology. 2023;120(1):3–23', url: 'https://doi.org/10.1159/000528914' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Embriología ────────────────────────────────────────────────── */

const RCIU: Patologia = {
  id: 'restriccion-crecimiento-intrauterino',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Restricción del crecimiento intrauterino',
  aka: 'RCIU · crecimiento fetal restringido',
  ambito: 'Feto y placenta',
  resumen:
    'El feto no alcanza su potencial genético de crecimiento: su peso estimado o su circunferencia abdominal quedan por debajo del percentil 10, o caen dos desviaciones estándar de su propia curva. Complica hasta 15 % de los embarazos (≈ 10 % en América Latina) y es el principal factor de riesgo de muerte fetal. Se vigila con ultrasonido Doppler y se decide el momento del nacimiento.',
  sections: [
    {
      id: 'rciu-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'table',
          title: 'Tres términos distintos',
          data: {
            headers: ['Término', 'Definición'],
            rows: [
              ['RCIU', 'El feto no alcanza su potencial genético de crecimiento: peso fetal estimado o circunferencia abdominal menor al percentil 10, o caída de dos desviaciones estándar respecto a su curva previa'],
              ['Pequeño para la edad gestacional (PEG)', 'Peso menor al percentil 10 para su edad según la población; puede ser un feto sano constitucionalmente pequeño'],
              ['Peso bajo al nacer', 'Menos de 2 500 g, sin considerar la edad gestacional'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Causas',
          items: [
            'Placentarias (la más frecuente): insuficiencia placentaria, ligada a preeclampsia e hipertensión.',
            'Maternas: hipertensión, diabetes con vasculopatía, nefropatía, cardiopatía, desnutrición, tabaco, alcohol y drogas.',
            'Fetales: anomalías cromosómicas, malformaciones, infecciones congénitas (rubéola, citomegalovirus, toxoplasmosis, sífilis) y embarazo múltiple.',
          ],
        },
        {
          type: 'paragraph',
          content: 'Cuando la placenta no cubre la demanda, el feto redistribuye la sangre hacia el encéfalo, el corazón y las suprarrenales; el hígado y la grasa reciben menos. Por eso la CIRCUNFERENCIA ABDOMINAL es la primera medida que cae.',
        },
      ],
    },
    {
      id: 'rciu-2',
      title: 'Diagnóstico y vigilancia',
      blocks: [
        {
          type: 'list',
          items: [
            'La edad gestacional exacta es el requisito: el ultrasonido temprano fecha mejor que la FUR.',
            'Sospecha: altura uterina menor a la esperada o factores de riesgo.',
            'Ultrasonido: peso fetal estimado y circunferencia abdominal; el punto de corte recomendado es el percentil 10.',
            'DOPPLER de la arteria umbilical: distingue al feto sano pequeño del que sufre insuficiencia placentaria y guía la frecuencia de vigilancia. También se valoran la arteria cerebral media, las uterinas y el ducto venoso.',
            'El flujo diastólico ausente o invertido en la arteria umbilical indica un compromiso grave.',
          ],
        },
        {
          type: 'note',
          content: 'Prevención: en mujeres con factores de riesgo, el ácido acetilsalicílico a dosis bajas iniciado entre las semanas 12 y 16 reduce la preeclampsia y la RCIU.',
        },
      ],
    },
    {
      id: 'rciu-3',
      title: 'Manejo y pronóstico: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'No hay un medicamento que haga crecer al feto: el manejo es vigilar y decidir el mejor momento para el nacimiento.',
            'Si puede nacer entre las semanas 24 y 34: esquema de esteroides para madurar el pulmón (betametasona 12 mg IM, dos dosis cada 24 h, o dexametasona 6 mg IM, cuatro dosis cada 12 h).',
            'El nacimiento debe ser en un hospital con experiencia y recursos neonatales; la cesárea no es obligatoria en todos los PEG.',
          ],
        },
        {
          type: 'comparison',
          title: 'Riesgos',
          left: { title: 'Al nacer', items: ['Asfixia perinatal', 'Aspiración de meconio', 'Hipoglucemia e hipocalcemia', 'Policitemia', 'Enterocolitis necrosante'] },
          right: { title: 'Más adelante', items: ['Lesión neurológica, retraso psicomotor', 'Hipertensión e hipercolesterolemia', 'Enfermedad coronaria', 'Intolerancia a la glucosa y diabetes (origen fetal de la enfermedad adulta)'] },
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-placenta', sectionId: 'epl-3', label: 'Invasión endovascular de las arterias espirales', porQue: 'Si las arterias espirales no se remodelan, llega menos sangre a la placenta y el feto crece menos.' },
    { materia: 'Embriología', topicId: 'embriologia-periodo-fetal', sectionId: 'epf-8', label: 'Peso bajo, PEG y restricción del crecimiento', porQue: 'Las tres definiciones no son sinónimos; la RCIU considera el potencial del feto y su edad gestacional.' },
    { materia: 'Embriología', topicId: 'embriologia-periodo-fetal', sectionId: 'epf-7', label: 'Mediciones por ultrasonido', porQue: 'La circunferencia abdominal y el peso fetal estimado son las medidas que definen la restricción.' },
    { materia: 'Embriología', topicId: 'embriologia-periodo-fetal', sectionId: 'epf-9', label: 'Regulación del crecimiento: IGF-1 y hormona del crecimiento', porQue: 'El IGF-1 es el principal factor del crecimiento fetal; mutaciones de su gen causan RCIU.' },
  ],
  atlas: [
    { id: 'embriologia-periodo-fetal', title: 'Periodo fetal' },
    { id: 'embriologia-anomalias-cromosomicas', title: 'Anomalías cromosómicas' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Mujer de 34 años con hipertensión crónica, 32 semanas de embarazo fechado por ultrasonido del primer trimestre. La altura uterina es menor a la esperada. El ultrasonido estima un peso fetal en el percentil 4 con la circunferencia abdominal muy pequeña; el Doppler de la arteria umbilical muestra resistencia aumentada.',
    preguntas: [
      q('pat-rciu-1', 'restriccion-crecimiento-intrauterino', '¿Cuál es el diagnóstico más probable?',
        ['Feto constitucionalmente pequeño sano', 'Error en la fecha del embarazo', 'Macrosomía', 'Restricción del crecimiento intrauterino por insuficiencia placentaria'], 3,
        'Peso bajo el percentil 10, hipertensión materna y Doppler umbilical alterado.', 'easy'),
      q('pat-rciu-2', 'restriccion-crecimiento-intrauterino', '¿Por qué la circunferencia abdominal es la primera medida que cae?',
        ['Porque el abdomen crece al final', 'El feto redistribuye la sangre hacia el encéfalo y el hígado recibe menos', 'Porque el líquido amniótico la comprime', 'Por un error de medición'], 1,
        'El encéfalo, el corazón y las suprarrenales se protegen; el hígado y la grasa crecen menos.'),
      q('pat-rciu-3', 'restriccion-crecimiento-intrauterino', 'Si se anticipa el nacimiento a las 32 semanas, ¿qué se indica a la madre?',
        ['Esteroides para madurar el pulmón fetal', 'Antibióticos', 'Hormona de crecimiento', 'Reposo absoluto sin otra medida'], 0,
        'Entre las semanas 24 y 34: betametasona o dexametasona.'),
      q('pat-rciu-4', 'restriccion-crecimiento-intrauterino', '¿Qué estudio guía la vigilancia del feto con RCIU?',
        ['Radiografía abdominal', 'Amniocentesis seriada', 'Doppler de la arteria umbilical', 'Perfil tiroideo materno'], 2,
        'Distingue al feto sano pequeño del que sufre insuficiencia placentaria.'),
      q('pat-rciu-5', 'restriccion-crecimiento-intrauterino', '¿Qué medida reduce el riesgo de RCIU en embarazos de riesgo?',
        ['Ácido fólico en dosis altas', 'Ácido acetilsalicílico a dosis bajas desde las semanas 12 a 16', 'Hierro intravenoso', 'Ninguna'], 1,
        'También reduce la preeclampsia en mujeres con factores de riesgo.'),
    ],
  },
  fuentes: [F.rciuGpc],
}

const SDR: Patologia = {
  id: 'sdr-prematuro',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Síndrome de dificultad respiratoria del prematuro',
  aka: 'Enfermedad de membrana hialina · deficiencia de surfactante',
  ambito: 'Pulmón del recién nacido prematuro',
  resumen:
    'El pulmón del prematuro no tiene suficiente surfactante: los alvéolos se colapsan al espirar y hay atelectasia difusa con dificultad respiratoria progresiva desde las primeras horas. Es más frecuente cuanto más prematuro es el bebé. Se previene con esteroides prenatales y se trata con presión positiva continua desde el nacimiento y surfactante exógeno cuando hace falta.',
  sections: [
    {
      id: 'sdr-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Los neumocitos tipo II producen surfactante, que baja la tensión superficial del alvéolo e impide que se colapse al final de la espiración. Empiezan a producirlo hacia el final del sexto mes, y la producción aumenta mucho en las últimas semanas del embarazo. Si el bebé nace antes, la deficiencia de surfactante (en cantidad y calidad) produce atelectasia pulmonar difusa y mal intercambio de gases.',
        },
        {
          type: 'list',
          title: 'Aumentan el riesgo',
          items: [
            'Prematurez: a menor edad gestacional, mayor riesgo.',
            'No haber recibido esteroides prenatales.',
            'Hijo de madre diabética (la hiperinsulinemia fetal retrasa la madurez del surfactante).',
            'Asfixia perinatal e hipotermia.',
            'Sexo masculino.',
          ],
        },
      ],
    },
    {
      id: 'sdr-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Dificultad respiratoria progresiva desde las primeras horas, valorada con la escala de Silverman-Andersen: aleteo nasal, QUEJIDO espiratorio, tiraje intercostal, disociación toracoabdominal y retracción xifoidea.',
            'Polipnea y cianosis.',
            'Radiografía de tórax: desde opacidad discreta hasta un patrón reticulogranular difuso bilateral en VIDRIO ESMERILADO, con broncograma aéreo y pulmones poco expandidos.',
            'Gases arteriales: hipoxemia e hipercapnia.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Por qué se queja',
          content: 'El quejido es una espiración contra la glotis semicerrada: el bebé genera su propia presión positiva para que los alvéolos no se cierren por completo. Es la misma idea de la presión positiva continua.',
        },
      ],
    },
    {
      id: 'sdr-3',
      title: 'Prevención y tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'PREVENCIÓN: toda mujer con amenaza de parto prematuro debe recibir al menos un esquema completo de esteroides prenatales (betametasona). Reducen la muerte neonatal, el SDR, la hemorragia intraventricular y la enterocolitis necrosante.',
            'Sala de partos: evitar la hipotermia (temperatura de 36.5 a 37.5 °C) y reanimar según las guías.',
            'Presión positiva continua en la vía aérea (CPAP) desde el nacimiento en todo prematuro con riesgo, para evitar intubar.',
            'SURFACTANTE exógeno si la dificultad empeora (por ejemplo, oxígeno mayor de 30 % con CPAP de al menos 6 cm H2O), de preferencia por técnicas mínimamente invasivas.',
            'Cafeína en los menores de 32 semanas y uso cuidadoso del oxígeno.',
          ],
        },
        {
          type: 'note',
          content: 'Complicaciones: neumotórax, displasia broncopulmonar (daño crónico por inmadurez, ventilación y oxígeno), hemorragia intraventricular y retinopatía del prematuro.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-periodo-fetal', sectionId: 'epf-4', label: 'Del sexto mes al nacimiento', porQue: 'El surfactante aumenta al final del embarazo; por eso la madurez pulmonar marca la supervivencia del prematuro.' },
    { materia: 'Histología', topicId: 'histologia-epitelios-respiratorio', sectionId: 'hres-4', label: 'Alvéolo y neumocitos', porQue: 'El neumocito tipo II produce el surfactante en sus cuerpos lamelares.' },
    { materia: 'Embriología', topicId: 'embriologia-periodo-fetal', sectionId: 'epf-6', label: 'Fecha probable de parto y edad gestacional', porQue: 'A menor edad gestacional, más inmaduro el pulmón y mayor riesgo.' },
    { materia: 'Embriología', topicId: 'embriologia-funcion-placentaria', sectionId: 'efp-8', label: 'Rotura prematura de membranas', porQue: 'En la RPM antes de la semana 34 se da un ciclo de corticoesteroide a la madre para prevenir el SDR del bebé.' },
  ],
  atlas: [
    { id: 'embriologia-periodo-fetal', title: 'Periodo fetal' },
    { id: 'aparato-respiratorio', title: 'Aparato Respiratorio' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido de 29 semanas; la madre llegó en trabajo de parto y no recibió esteroides. A la hora de vida tiene aleteo nasal, quejido espiratorio, tiraje intercostal y cianosis que empeoran. La radiografía muestra un patrón reticulogranular bilateral en vidrio esmerilado con broncograma aéreo.',
    preguntas: [
      q('pat-sdr-1', 'sdr-prematuro', '¿Cuál es el diagnóstico más probable?',
        ['Taquipnea transitoria del recién nacido', 'Neumonía por estreptococo', 'Síndrome de dificultad respiratoria por deficiencia de surfactante', 'Hernia diafragmática'], 2,
        'Prematuro de 29 semanas, sin esteroides, con dificultad progresiva y vidrio esmerilado.', 'easy'),
      q('pat-sdr-2', 'sdr-prematuro', '¿Qué célula produce lo que le falta?',
        ['Neumocito tipo II', 'Neumocito tipo I', 'Macrófago alveolar', 'Célula caliciforme'], 0,
        'El neumocito tipo I hace el intercambio gaseoso; el tipo II produce surfactante.'),
      q('pat-sdr-3', 'sdr-prematuro', '¿Qué medida antes del parto habría reducido el riesgo?',
        ['Antibiótico a la madre', 'Esteroides prenatales (betametasona)', 'Reposo absoluto', 'Ácido fólico'], 1,
        'Aceleran la madurez pulmonar y reducen también la hemorragia intraventricular y la enterocolitis.'),
      q('pat-sdr-4', 'sdr-prematuro', '¿Qué soporte se inicia primero si no necesita intubación?',
        ['Ventilación de alta frecuencia', 'Solo oxígeno en casco', 'Oxigenación con membrana extracorpórea', 'Presión positiva continua en la vía aérea (CPAP)'], 3,
        'Mantiene abiertos los alvéolos; se agrega surfactante si la dificultad empeora.'),
      q('pat-sdr-5', 'sdr-prematuro', '¿Qué explica el quejido espiratorio?',
        ['Dolor', 'Espirar contra la glotis cerrada para mantener los alvéolos abiertos', 'Obstrucción nasal', 'Llanto'], 1,
        'El bebé genera su propia presión positiva al final de la espiración.'),
    ],
  },
  fuentes: [F.sdrGpc, F.sdrEuro],
}

export const FICHAS_MATERIAS_10: Patologia[] = [RCIU, SDR]
