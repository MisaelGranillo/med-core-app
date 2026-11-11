/* Patologías por materia (undécimo lote) — Embriología: placenta (preeclampsia
 * y acretismo placentario). GPC mexicanas del Catálogo Maestro: IMSS-020-08
 * (actualización 2017) e IMSS-589-19; solo datos verificados. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  pe: { codigo: 'GPC IMSS-020-08', titulo: 'Prevención, diagnóstico y tratamiento de la preeclampsia en segundo y tercer nivel de atención (actualización 2017)', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/020GER.pdf' },
  insercion: { codigo: 'GPC IMSS-589-19', titulo: 'Diagnóstico y manejo de las anomalías en la inserción placentaria y vasa previa (actualización 2019)', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/589GER.pdf' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Embriología ────────────────────────────────────────────────── */

const PREECLAMPSIA: Patologia = {
  id: 'preeclampsia',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Preeclampsia',
  aka: 'Incluye eclampsia y síndrome HELLP',
  ambito: 'Placenta y endotelio materno',
  resumen:
    'Hipertensión con proteinuria significativa que aparece por primera vez después de la semana 20, en el parto o en el puerperio; también cuenta la hipertensión con un dato de severidad aunque aún no haya proteinuria. Nace de una placenta mal implantada que daña el endotelio materno. Los trastornos hipertensivos afectan cerca del 15 % de los embarazos y causan casi el 18 % de las muertes maternas en el mundo. La única cura es terminar el embarazo.',
  sections: [
    {
      id: 'pe-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'En la placentación normal, el citotrofoblasto invade las arterias espirales, reemplaza su endotelio y las vuelve vasos anchos de baja resistencia. En la preeclampsia esa transformación queda incompleta: llega menos sangre a la placenta y esta libera factores que dañan el endotelio de los órganos maternos. La alteración empieza temprano, pero la enfermedad se manifiesta después de la semana 20.',
        },
        {
          type: 'table',
          title: 'Definiciones',
          data: {
            headers: ['Término', 'Criterio'],
            rows: [
              ['Preeclampsia', 'Presión de 140/90 mmHg o más y proteinuria significativa (300 mg o más en orina de 24 horas), por primera vez después de la semana 20'],
              ['Con criterios de severidad', 'Presión de 160/110 mmHg o más; cefalea persistente, alteraciones visuales o cerebrales, dolor epigástrico o en hipocondrio derecho, edema pulmonar; creatinina mayor de 1.1 mg/dL, transaminasas mayores de 70 UI/L o plaquetas menores de 100 000/mm³'],
              ['Eclampsia', 'Preeclampsia con convulsiones'],
              ['Síndrome HELLP', 'Hemólisis, enzimas hepáticas elevadas y plaquetas bajas: presentación de la preeclampsia severa'],
              ['Hipertensión gestacional', 'Hipertensión después de la semana 20 sin proteinuria'],
              ['Hipertensión crónica', 'Presente antes del embarazo o diagnosticada antes de la semana 20'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Factores de riesgo',
          items: [
            'Preeclampsia en un embarazo previo (sobre todo antes de la semana 34).',
            'Primer embarazo, obesidad y antecedente familiar.',
            'Embarazo múltiple.',
            'Hipertensión crónica, diabetes, enfermedad renal o autoinmune.',
            'Mola hidatiforme.',
          ],
        },
      ],
    },
    {
      id: 'pe-2',
      title: 'Prevención y diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'PREVENCIÓN: en mujeres con factores de riesgo, ácido acetilsalicílico 100 mg al día iniciado antes de la semana 16. Las dosis menores de 75 mg no protegen.',
            'En zonas con baja ingesta de calcio: calcio elemental 1.5 a 2 g al día durante el embarazo.',
            'Toma correcta de la presión en cada consulta y búsqueda de proteinuria.',
            'La tira reactiva negativa no descarta proteinuria; el estándar es la orina de 24 horas o el cociente proteínas/creatinina.',
            'Si hay severidad: biometría hemática con plaquetas, creatinina, transaminasas y deshidrogenasa láctica; vigilancia del bienestar y del crecimiento fetal.',
          ],
        },
      ],
    },
    {
      id: 'pe-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'La única curación es terminar el embarazo (sacar la placenta); el momento depende de las semanas y de la gravedad.',
            'Antihipertensivos (por ejemplo labetalol, hidralazina o nifedipino) para la hipertensión severa.',
            'SULFATO DE MAGNESIO para prevenir y tratar la eclampsia: 4 g IV en 5 minutos y luego 1 g por hora durante 24 horas.',
            'En el síndrome HELLP la resolución es terminar el embarazo.',
            'Si se adelanta el nacimiento antes de la semana 34: esteroides para madurar el pulmón fetal.',
            'En el puerperio se sigue vigilando la presión: la preeclampsia puede aparecer o empeorar después del parto.',
          ],
        },
        {
          type: 'note',
          content: 'A largo plazo, la mujer que tuvo preeclampsia tiene más riesgo de hipertensión y enfermedad cardiovascular: requiere seguimiento.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-placenta', sectionId: 'epl-3', label: 'Invasión endovascular de las arterias espirales', porQue: 'Si el citotrofoblasto no transforma las arterias espirales, llega menos sangre a la placenta y se daña el endotelio materno.' },
    { materia: 'Embriología', topicId: 'embriologia-placenta', sectionId: 'epl-5', label: 'Preeclampsia', porQue: 'Definición, criterios, eclampsia, HELLP y factores de riesgo vistos en clase.' },
    { materia: 'Embriología', topicId: 'embriologia-periodo-fetal', sectionId: 'epf-8', label: 'Peso bajo, PEG y restricción del crecimiento', porQue: 'La insuficiencia placentaria de la preeclampsia es causa frecuente de RCIU.' },
  ],
  atlas: [
    { id: 'embriologia-placenta', title: 'Placenta y membranas fetales' },
    { id: 'aparato-reproductor', title: 'Aparato Reproductor' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Mujer de 24 años, primer embarazo, 32 semanas. Acude por cefalea intensa y visión borrosa. Presión arterial de 168/112 mmHg, proteinuria de 2+ en tira reactiva, plaquetas de 85 000/mm³ y transaminasas elevadas. El ultrasonido muestra un feto pequeño para su edad.',
    preguntas: [
      q('pat-pe-1', 'preeclampsia', '¿Cuál es el diagnóstico?',
        ['Hipertensión crónica', 'Preeclampsia con criterios de severidad (en evolución a HELLP)', 'Hipertensión gestacional', 'Migraña con aura'], 1,
        'Hipertensión severa, síntomas cerebrales, plaquetas bajas y transaminasas elevadas después de la semana 20.', 'easy'),
      q('pat-pe-2', 'preeclampsia', '¿Qué fármaco previene la eclampsia?',
        ['Diazepam', 'Fenitoína', 'Sulfato de magnesio', 'Paracetamol'], 2,
        'Dosis inicial de 4 g IV en 5 minutos y luego 1 g por hora durante 24 horas.'),
      q('pat-pe-3', 'preeclampsia', '¿Cuál es el tratamiento definitivo?',
        ['Terminar el embarazo', 'Reposo en cama', 'Diuréticos', 'Dieta sin sal'], 0,
        'La enfermedad depende de la placenta; por eso se adelanta el nacimiento con esteroides si es antes de la semana 34.'),
      q('pat-pe-4', 'preeclampsia', '¿Qué falla de la placentación explica la enfermedad?',
        ['Exceso de líquido amniótico', 'Inserción baja de la placenta', 'Fusión prematura del amnios y el corion', 'Remodelado incompleto de las arterias espirales por el citotrofoblasto'], 3,
        'Las arterias siguen estrechas y resistentes; baja la perfusión placentaria y se daña el endotelio materno.'),
      q('pat-pe-5', 'preeclampsia', 'En su siguiente embarazo, ¿qué medida reduce el riesgo de que se repita?',
        ['Ácido acetilsalicílico 100 mg al día desde antes de la semana 16', 'Hierro intravenoso', 'Restringir líquidos', 'Ninguna'], 0,
        'Las dosis menores de 75 mg no protegen.'),
    ],
  },
  fuentes: [F.pe],
}

const ACRETISMO: Patologia = {
  id: 'acretismo-placentario',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Acretismo placentario',
  aka: 'Placenta acreta, increta y percreta',
  ambito: 'Placenta y miometrio',
  resumen:
    'La placenta se adhiere o invade el miometrio porque falta la decidua basal, casi siempre sobre la cicatriz de una cesárea. La mayoría se presenta con placenta previa y el riesgo crece con cada cesárea. Al nacer, la placenta no se desprende y causa una hemorragia masiva (2 a 5 litros); por eso se diagnostica antes con ultrasonido y se programa una cesárea-histerectomía en un hospital de tercer nivel.',
  sections: [
    {
      id: 'acr-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'table',
          title: 'Grados',
          data: {
            headers: ['Tipo', 'Qué hacen las vellosidades'],
            rows: [
              ['ACRETA', 'Se adhieren al miometrio sin decidua basal intermedia'],
              ['INCRETA', 'Invaden el miometrio'],
              ['PERCRETA', 'Atraviesan el miometrio y la serosa; pueden invadir la vejiga'],
            ],
          },
        },
        {
          type: 'paragraph',
          content: 'El daño del endometrio y su mala cicatrización (cesárea, legrado, miomectomía) dejan zonas sin decidua basal, donde el trofoblasto invade de más. La mayoría de los casos de acretismo ocurren con placenta previa, aunque no tener placenta previa no lo descarta.',
        },
        {
          type: 'table',
          title: 'Riesgo de acretismo con placenta previa según las cesáreas previas',
          data: {
            headers: ['Cesáreas previas', 'Riesgo'],
            rows: [['1', '3 %'], ['2', '11 %'], ['3', '40 %'], ['4', '61 %'], ['5 o más', '67 %']],
          },
        },
        {
          type: 'list',
          title: 'Otros factores de riesgo',
          items: ['Multiparidad y edad materna avanzada.', 'Tabaquismo y cocaína.', 'Embarazo múltiple y reproducción asistida.', 'Placenta previa en un embarazo anterior.'],
        },
      ],
    },
    {
      id: 'acr-2',
      title: 'Diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'El ultrasonido es el estudio principal; se busca en toda mujer con cesárea previa y placenta previa o de inserción baja.',
            'Signos: pérdida de la zona hipoecoica entre la placenta y el miometrio, LAGUNAS placentarias (a menudo con flujo) e hipervascularidad en el Doppler.',
            'La resonancia magnética ayuda a precisar la profundidad o una placenta posterior; la cistoscopia, si se sospecha invasión a la vejiga.',
          ],
        },
      ],
    },
    {
      id: 'acr-3',
      title: 'Manejo: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Atención por un equipo multidisciplinario en un hospital de tercer nivel, con sangre disponible.',
            'Nacimiento programado por cesárea entre las semanas 34 y 36.',
            'CESÁREA-HISTERECTOMÍA dejando la placenta en su lugar: intentar desprenderla provoca una hemorragia masiva.',
            'No se usan uterotónicos de forma preventiva ni metotrexato como tratamiento complementario.',
          ],
        },
        {
          type: 'note',
          content: 'El sangrado durante la cirugía suele ser de 2 000 a 5 000 mL y entre 38 y 95 % de las pacientes necesitan transfusión.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-placenta', sectionId: 'epl-10', label: 'Patología placentaria: casos', porQue: 'Acreta, increta y percreta según la profundidad de la invasión; falta la decidua basal.' },
    { materia: 'Embriología', topicId: 'embriologia-placenta', sectionId: 'epl-6', label: 'Deciduas, corion y membrana amniocoriónica', porQue: 'La decidua basal es la que limita la invasión del trofoblasto; donde falta, la placenta se adhiere al miometrio.' },
    { materia: 'Embriología', topicId: 'embriologia-segunda-semana', sectionId: 'ess-8', label: 'Implantación anómala: embarazo ectópico y placenta previa', porQue: 'La mayoría de los acretismos ocurre junto con una placenta previa.' },
  ],
  atlas: [
    { id: 'embriologia-placenta', title: 'Placenta y membranas fetales' },
    { id: 'aparato-reproductor', title: 'Aparato Reproductor' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Mujer de 35 años, con tres cesáreas previas, cursa 28 semanas. El ultrasonido muestra placenta previa anterior sobre la cicatriz, con múltiples lagunas placentarias con flujo y pérdida de la zona hipoecoica entre la placenta y el miometrio.',
    preguntas: [
      q('pat-acr-1', 'acretismo-placentario', '¿Qué se sospecha?',
        ['Mola hidatiforme', 'Desprendimiento de placenta', 'Acretismo placentario', 'Vasos previos'], 2,
        'Placenta previa sobre una cicatriz de cesárea, lagunas y pérdida de la zona de interfase.', 'easy'),
      q('pat-acr-2', 'acretismo-placentario', '¿Qué estructura falta entre la placenta y el miometrio?',
        ['La decidua basal', 'El corion leve', 'El amnios', 'La placa coriónica'], 0,
        'Sin decidua basal, las vellosidades se adhieren o invaden el miometrio.'),
      q('pat-acr-3', 'acretismo-placentario', 'Con tres cesáreas y placenta previa, ¿cuál es su riesgo aproximado de acretismo?',
        ['3 %', '11 %', '67 %', '40 %'], 3,
        'Aumenta con cada cesárea: 3, 11, 40, 61 y 67 %.'),
      q('pat-acr-4', 'acretismo-placentario', '¿Qué se hace durante la cesárea?',
        ['Desprender la placenta con la mano', 'Histerectomía dejando la placenta en su lugar', 'Dar metotrexato', 'Esperar a que la placenta salga sola'], 1,
        'Intentar desprenderla causa una hemorragia masiva.'),
      q('pat-acr-5', 'acretismo-placentario', 'Si las vellosidades atraviesan el miometrio y la serosa hasta la vejiga, se trata de placenta:',
        ['Acreta', 'Increta', 'Percreta', 'Previa'], 2,
        'Acreta: adherida. Increta: invade el miometrio. Percreta: lo atraviesa.'),
    ],
  },
  fuentes: [F.insercion],
}

export const FICHAS_MATERIAS_11: Patologia[] = [PREECLAMPSIA, ACRETISMO]
