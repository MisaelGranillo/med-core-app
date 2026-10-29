/* Patologías — fichas que conectan lo estudiado en las materias con la clínica.
 *
 * La guía «Cómo leer un caso clínico» y una ficha por patología. Cada ficha
 * enlaza a las secciones de los temas donde está su base (topicId + sectionId)
 * y cita la guía de práctica clínica (GPC) mexicana en que se apoya. Solo datos
 * verificados, sin referencias a lo dicho en clase. El tratamiento se resume
 * como idea general, nunca como indicación. Los casos son escritos para MedCore
 * (ningún paciente real). */

import type { ContentBlock, Question } from '../types'
import { FICHAS_MATERIAS } from './patologias-materias'
import { FICHAS_MATERIAS_2 } from './patologias-materias-2'
import { FICHAS_MATERIAS_3 } from './patologias-materias-3'
import { FICHAS_MATERIAS_4 } from './patologias-materias-4'
import { FICHAS_MATERIAS_5 } from './patologias-materias-5'
import { FICHAS_MATERIAS_6 } from './patologias-materias-6'

export type PatoMateria = 'Bioquímica' | 'Genética' | 'Histología' | 'Anatomía' | 'Embriología' | 'Medicina Humanística'

export interface PatoBase {
  materia: PatoMateria
  topicId: string
  sectionId?: string
  label: string
  porQue: string
}

export interface PatoFuente {
  codigo: string
  titulo: string
  url: string
}

export interface PatoSeccion {
  id: string
  title: string
  blocks: ContentBlock[]
}

export interface Patologia {
  id: string
  kind: 'ficha' | 'guia'
  /* Materia con la que se agrupa en el índice (las fichas). */
  materia?: PatoMateria
  title: string
  aka?: string
  ambito: string
  resumen: string
  sections: PatoSeccion[]
  bases: PatoBase[]
  atlas: { id: string; title: string }[]
  caso: { titulo: string; texto: string; preguntas: Question[] }
  fuentes: PatoFuente[]
}

const GPC = {
  diarrea: {
    codigo: 'GPC SSA-156-08',
    titulo: 'Prevención, diagnóstico y tratamiento de la diarrea aguda en niños de dos meses a cinco años en el primero y segundo nivel de atención',
    url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/156GRR.pdf',
  },
  hombroDoloroso: {
    codigo: 'GPC IMSS-085-08',
    titulo: 'Diagnóstico y tratamiento del síndrome de hombro doloroso en primer nivel de atención (actualización 2016)',
    url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/085GER.pdf',
  },
  inestabilidad: {
    codigo: 'GPC IMSS-531-11',
    titulo: 'Tratamiento quirúrgico de la inestabilidad anterior de hombro (articulación glenohumeral) en el adulto',
    url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/531GER.pdf',
  },
  clavicula: {
    codigo: 'GPC IMSS-584-12',
    titulo: 'Tratamiento de la fractura de clavícula en el adulto',
    url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/584GER.pdf',
  },
  nom004: {
    codigo: 'NOM-004-SSA3-2012',
    titulo: 'Del expediente clínico (numeral 6.1, historia clínica)',
    url: 'https://www.dof.gob.mx/nota_detalle.php?codigo=5272787&fecha=15/10/2012',
  },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Guía: Cómo leer un caso clínico ─────────────────────────────── */

const GUIA: Patologia = {
  id: 'como-leer-un-caso-clinico',
  kind: 'guia',
  title: 'Cómo leer un caso clínico',
  ambito: 'Método',
  resumen:
    'Un caso se desarma en pasos: mirar al paciente, ordenar los datos como en la historia clínica de la NOM-004, separar síntomas de signos y estudios, analizar cada dato por separado y, al final, integrar. Las guías de práctica clínica (GPC) dicen qué buscar en cada paso y cuándo un dato es de alarma.',
  sections: [
    {
      id: 'g-1',
      title: 'Primero, el paciente',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Antes de decir «buenos días» ya se está explorando: el paciente se observa de forma rápida en cuanto entra. ¿Llega solo o acompañado? ¿Camina bien, cojea, llega en silla? ¿Qué postura tiene? ¿Viene aseado? ¿A qué huele? Todo eso es información clínica.',
        },
        {
          type: 'list',
          title: 'Lo que se observa al entrar',
          items: [
            'Acompañamiento y forma de llegar (caminando, en silla, en camilla).',
            'Aspecto general y aseo; facies (de dolor, de angustia, de enfermedad crónica).',
            'Postura y marcha.',
            'Olor: un aliento afrutado («a manzana») orienta a cetoacidosis diabética.',
            'Edad aparente frente a la cronológica: igual, mayor o menor de la que tiene.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'En un caso escrito',
          content:
            'El caso suele empezar con «masculino de 45 años». Hay que imaginarlo: ¿cómo se ve un hombre de 45 años sano? Cualquier dato que se aparte de esa imagen (se ve mayor, llega somnoliento, huele a alcohol) es la primera pista.',
        },
      ],
    },
    {
      id: 'g-2',
      title: 'Ordena los datos como la historia clínica',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La NOM-004-SSA3-2012 fija qué debe llevar la historia clínica (numeral 6.1). Los casos de examen siguen casi siempre ese mismo orden, así que sirve de mapa para saber dónde buscar cada dato y qué falta.',
        },
        {
          type: 'steps',
          title: 'Historia clínica según la NOM-004 (contenido mínimo)',
          steps: [
            'Interrogatorio: ficha de identificación, antecedentes heredofamiliares, antecedentes personales patológicos y no patológicos, padecimiento actual (incluidos los tratamientos previos) e interrogatorio por aparatos y sistemas.',
            'Exploración física: habitus exterior (aspecto general), signos vitales (temperatura, tensión arterial, frecuencia cardiaca y frecuencia respiratoria), peso y talla, y datos de cabeza, cuello, tórax, abdomen, miembros y genitales.',
            'Resultados de estudios de laboratorio, gabinete y otros.',
            'Diagnósticos o problemas clínicos.',
            'Pronóstico.',
            'Indicación terapéutica.',
          ],
        },
        {
          type: 'list',
          title: 'Para el padecimiento actual: la semiología del síntoma',
          items: [
            'Inicio y tiempo de evolución.',
            'Intensidad, localización e irradiación.',
            'Progresión y factores desencadenantes (qué lo empeora, qué lo alivia).',
            'Incapacidad funcional: qué ya no puede hacer.',
            'Tratamientos previos y antecedentes laborales o deportivos.',
          ],
        },
        {
          type: 'note',
          content:
            'La lista de arriba es la que la GPC IMSS-085-08 pide indagar ante un hombro doloroso, pero sirve para cualquier dolor.',
        },
      ],
    },
    {
      id: 'g-3',
      title: 'Separa síntomas, signos y estudios',
      blocks: [
        {
          type: 'table',
          title: 'Tres tipos de dato',
          data: {
            headers: ['Tipo', 'Qué es', 'Ejemplo (deshidratación)'],
            rows: [
              ['Síntoma', 'Lo que el paciente refiere («siento…»). Es subjetivo.', 'Sed, mareo al levantarse, cansancio'],
              ['Signo', 'Lo que el médico observa o mide en ese momento.', 'Taquicardia, mucosas secas, llenado capilar > 2 s, signo del pliegue'],
              ['Estudio', 'Laboratorio o gabinete: requiere una muestra o un equipo.', 'Hematocrito alto, sodio sérico, gasometría'],
            ],
          },
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Los laboratorios no son signos',
          content:
            'Un resultado de laboratorio es medible, pero no se observa en el paciente en ese momento: hay que tomar una muestra. Confirma u orienta; no sustituye a la exploración.',
        },
      ],
    },
    {
      id: 'g-4',
      title: 'Analiza cada dato por separado',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Se toma cada dato anormal y hacer una lista rápida de lo que lo puede causar. «Cefalea: ¿qué causa cefalea?». «Hipertensión: ¿qué causa hipertensión?». Después se cruzan las listas: el diagnóstico suele estar donde coinciden, y lo que no explica todos los datos se descarta.',
        },
        {
          type: 'steps',
          title: 'Paso a paso',
          steps: [
            'Subrayar cada dato que se aparta de lo normal (primero hay que saber lo normal).',
            'Para cada dato, una lista corta de causas.',
            'Cruzar las listas y quedarse con lo que explica más datos.',
            'Descartar lo que contradice algún dato.',
            'Revisar qué estudio confirmaría o descartaría lo que queda.',
          ],
        },
        {
          type: 'table',
          title: 'Lo normal: signos vitales de un adulto en reposo',
          data: {
            headers: ['Signo', 'Rango habitual'],
            rows: [
              ['Frecuencia cardiaca', '60–100 lpm'],
              ['Frecuencia respiratoria', '12–20 rpm'],
              ['Tensión arterial', 'Menos de 120/80 mmHg'],
              ['Temperatura', '36–37.5 °C'],
              ['Llenado capilar', 'Menos de 2 segundos'],
            ],
          },
        },
        {
          type: 'note',
          content:
            'En niños los rangos cambian con la edad: un lactante tiene la frecuencia cardiaca y la respiratoria más altas que un adulto.',
        },
      ],
    },
    {
      id: 'g-5',
      title: 'Clasifica la gravedad y busca los datos de alarma',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Las GPC organizan las decisiones por gravedad. Antes de pensar en el diagnóstico fino, la pregunta es: ¿hay algo que ponga en riesgo la vida o la extremidad? Eso se atiende primero.',
        },
        {
          type: 'table',
          title: 'Cómo lo hace cada guía',
          data: {
            headers: ['GPC', 'Cómo clasifica', 'Datos de alarma'],
            rows: [
              ['Diarrea aguda en niños (SSA-156-08)', 'Sin deshidratación detectable · deshidratación clínica · con datos de choque', '«Viñetas rojas»: aspecto deteriorado, letargo o irritabilidad, ojos hundidos, taquicardia, taquipnea, turgencia disminuida'],
              ['Fractura de clavícula (IMSS-584-12)', 'Por tercio (medial, medio, lateral) y desplazamiento', 'Exposición ósea o piel a punto de romperse, lesión neurovascular, compromiso pleuropulmonar'],
              ['Hombro doloroso (IMSS-085-08)', 'Agudo frente a sin respuesta a 4–6 semanas de manejo conservador', 'Signos de una condición seria que ponga en peligro la vida o la integridad'],
            ],
          },
        },
      ],
    },
    {
      id: 'g-6',
      title: 'Pide solo los estudios que cambian la decisión',
      blocks: [
        {
          type: 'list',
          title: 'Lo que recomiendan las guías del piloto',
          items: [
            'Deshidratación: el diagnóstico es clínico. Los electrolitos, la urea, la creatinina y la glucosa se miden cuando el niño necesita líquidos intravenosos.',
            'Hombro doloroso agudo: no se piden radiografías, ultrasonido ni resonancia de entrada; se indican si no mejora tras 4–6 semanas de manejo conservador o si hay datos de alarma.',
            'Fractura de clavícula: radiografía anteroposterior del hombro que abarque de la articulación esternoclavicular a la porción lateral del húmero. La tomografía, solo en fracturas de los extremos con sospecha de lesión intraarticular.',
          ],
        },
      ],
    },
    {
      id: 'g-7',
      title: 'Cómo leer una guía de práctica clínica',
      blocks: [
        {
          type: 'definition',
          title: 'Guía de práctica clínica (GPC)',
          content:
            'Documento con recomendaciones basadas en la mejor evidencia disponible para un problema de salud concreto. En México las publica el Catálogo Maestro de GPC (CENETEC), con guías elaboradas por el IMSS, la Secretaría de Salud y otras instituciones.',
        },
        {
          type: 'table',
          title: 'Lo que hay que saber para usarlas',
          data: {
            headers: ['Elemento', 'Qué significa'],
            rows: [
              ['Clave (p. ej., IMSS-584-12)', 'Institución que la elaboró · número de catálogo · año'],
              ['GER', 'Guía de Evidencias y Recomendaciones: la versión extensa, con cada recomendación y su respaldo'],
              ['GRR', 'Guía de Referencia Rápida: el resumen para consulta en el consultorio'],
              ['Nivel de evidencia', 'Qué tan sólido es el estudio que respalda la afirmación (ensayo clínico, cohorte, opinión de expertos)'],
              ['Grado de recomendación (A–D)', 'A: respaldo más fuerte; D: opinión de expertos. «Punto de buena práctica»: consenso del grupo que hizo la guía'],
              ['Población y nivel de atención', 'A quién aplica (edad, primer o segundo nivel). Una guía pediátrica no se traslada tal cual al adulto'],
              ['Vigencia', 'Se actualizan cada 3 a 5 años: conviene revisar la fecha'],
            ],
          },
        },
      ],
    },
    {
      id: 'g-8',
      title: 'Integra y decide',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Con los datos ordenados y la gravedad clara, se integra: qué síndrome forman, cuál es el diagnóstico más probable, qué falta para confirmarlo y qué se hace primero. Rara vez un solo dato da el diagnóstico.',
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Saber referir también es parte del caso',
          content:
            'Cada GPC trae criterios de referencia a segundo o tercer nivel. Si no hay mejoría o el problema rebasa lo que se puede resolver en ese nivel, se deriva a quien tenga el conocimiento especializado.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'anatomia-generalidades', sectionId: 'gen-2', label: 'Terminología anatómica y médica', porQue: 'El caso se describe y se reporta con terminología precisa; al paciente se le explica en palabras sencillas.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-equilibrio-acido-base', sectionId: 'bab-5', label: 'Los cuatro trastornos ácido-base', porQue: 'La cetoacidosis diabética (el aliento afrutado) es una acidosis metabólica.' },
    { materia: 'Histología', topicId: 'histologia-biometria-hematica', sectionId: 'hbh-1', label: 'Principios de interpretación', porQue: 'Leer un estudio es comparar con valores de referencia y buscar un patrón, igual que con los signos.' },
  ],
  atlas: [],
  caso: {
    titulo: 'Practica el método',
    texto:
      'Femenina de 68 años, traída por su hija por 3 días de evacuaciones líquidas. Se ve mayor de su edad, somnolienta, con la mucosa oral seca. Refiere sed y mareo al levantarse. TA 88/50 mmHg, FC 118 lpm, FR 22 rpm, temperatura 36.8 °C, llenado capilar de 4 s. El pliegue cutáneo tarda en desaparecer. Biometría: hemoglobina 17 g/dL.',
    preguntas: [
      q('pat-guia-1', 'como-leer-un-caso-clinico', '¿Cuál de estos datos es un síntoma?',
        ['FC de 118 lpm', 'Mareo al levantarse', 'Llenado capilar de 4 s', 'Hemoglobina de 17 g/dL'], 1,
        'El mareo lo refiere la paciente: es subjetivo. La frecuencia cardiaca y el llenado capilar son signos (los mide el médico) y la hemoglobina es un estudio de laboratorio.', 'easy'),
      q('pat-guia-2', 'como-leer-un-caso-clinico', '¿En qué apartado de la historia clínica (NOM-004) se registran los «3 días de evacuaciones líquidas»?',
        ['Antecedentes heredofamiliares', 'Antecedentes personales no patológicos', 'Padecimiento actual', 'Exploración física'], 2,
        'El motivo por el que llega y su evolución forman el padecimiento actual, dentro del interrogatorio.', 'easy'),
      q('pat-guia-3', 'como-leer-un-caso-clinico', '¿Qué se atiende primero?',
        ['La temperatura de 36.8 °C', 'La edad aparente mayor a la cronológica', 'La hemoglobina alta', 'La hipotensión con taquicardia y llenado capilar lento: datos de hipoperfusión'], 3,
        'TA baja, FC alta, llenado capilar prolongado y somnolencia indican que los tejidos no se perfunden bien: probable choque hipovolémico. Lo que pone en riesgo la vida va primero.'),
      q('pat-guia-4', 'como-leer-un-caso-clinico', '¿Cómo se interpreta el pliegue cutáneo lento en esta paciente?',
        ['Con cautela: con la edad la piel pierde elasticidad, así que se valora junto con mucosas, FC, TA y diuresis', 'Confirma por sí solo la deshidratación', 'Descarta la deshidratación', 'Indica hipocalcemia'], 0,
        'En adultos mayores el pliegue puede tardar en bajar aunque no haya deshidratación aguda. Ningún dato aislado da el diagnóstico.'),
      q('pat-guia-5', 'como-leer-un-caso-clinico', 'La hemoglobina de 17 g/dL en este contexto se explica mejor por:',
        ['Policitemia vera', 'Anemia ferropénica', 'Hemoconcentración: hay menos plasma para el mismo número de eritrocitos', 'Hemólisis'], 2,
        'Al perder líquido se reduce el plasma y los eritrocitos quedan más concentrados. Al rehidratarla, la cifra baja.'),
    ],
  },
  fuentes: [GPC.nom004, GPC.diarrea, GPC.hombroDoloroso, GPC.clavicula],
}

/* ── Ficha 1: Deshidratación y choque hipovolémico ─────────────── */

const DESHIDRATACION: Patologia = {
  id: 'deshidratacion-choque-hipovolemico',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Deshidratación y choque hipovolémico',
  aka: 'Hipovolemia',
  ambito: 'Líquidos y electrolitos',
  resumen:
    'Cuando se pierde más líquido del que entra, baja el volumen circulante. El cuerpo compensa con taquicardia y vasoconstricción; si la pérdida sigue, la presión cae y los órganos dejan de recibir suficiente sangre: eso es el choque hipovolémico.',
  sections: [
    {
      id: 'des-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'table',
          title: 'Tres términos que no son sinónimos',
          data: {
            headers: ['Término', 'Qué es'],
            rows: [
              ['Deshidratación', 'Pérdida de agua corporal (con o sin electrolitos) mayor que el aporte'],
              ['Hipovolemia', 'Disminución del volumen dentro de los vasos'],
              ['Choque hipovolémico', 'Falla circulatoria por pérdida de volumen, con hipoperfusión de los órganos; pone en riesgo la vida'],
            ],
          },
        },
        {
          type: 'paragraph',
          content:
            'Las causas más comunes son el vómito, la diarrea, la sudoración intensa (calor, ejercicio) y la hemorragia. Los lactantes se deshidratan en uno o dos días; los adultos mayores también son vulnerables.',
        },
        {
          type: 'steps',
          title: 'De la pérdida al choque',
          steps: [
            'Se pierde líquido y baja el volumen circulante.',
            'El corazón compensa: late más rápido (taquicardia) y los vasos periféricos se contraen.',
            'El cuerpo prioriza cerebro y corazón: la piel se enfría, el llenado capilar se alarga y se orina menos.',
            'Cuando la pérdida supera la compensación, la presión arterial cae (choque descompensado).',
            'Los órganos reciben menos oxígeno: se altera el estado de conciencia y aparece daño orgánico.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'La bomba y el tinaco',
          content:
            'Una analogía: el corazón es la bomba que sube el agua de la cisterna al tinaco. Con menos agua en el sistema, la bomba trabaja más rápido y con más fuerza para mantener la presión (taquicardia). Cuando ya no alcanza, la presión cae aunque los vasos se contraigan (hipotensión).',
        },
      ],
    },
    {
      id: 'des-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La GPC SSA-156-08 (niños de 2 meses a 5 años) clasifica la deshidratación en tres grupos según los signos. La misma lógica sirve para entender al adulto: primero aparecen los signos de pérdida de líquido y al final los de mala perfusión.',
        },
        {
          type: 'table',
          title: 'Clasificación de la GPC',
          data: {
            headers: ['Dato', 'Sin deshidratación detectable', 'Deshidratación clínica', 'Con datos de choque (se suman)'],
            rows: [
              ['Aspecto y conciencia', 'Buena apariencia, alerta y reactivo', 'Decaído ⚑; irritable o letárgico ⚑', 'Soporoso o comatoso'],
              ['Ojos y mucosas', 'Tono ocular normal, mucosas húmedas', 'Ojos hundidos ⚑, mucosas secas', '—'],
              ['FC y FR', 'Normales', 'Taquicardia ⚑, taquipnea ⚑', 'Taquicardia, taquipnea'],
              ['Piel', 'Coloración y turgencia normales, extremidades tibias', 'Turgencia disminuida ⚑; coloración normal, extremidades tibias', 'Pálida o marmórea, extremidades frías'],
              ['Pulsos y llenado capilar', 'Normales', 'Normales', 'Pulsos débiles, llenado capilar prolongado'],
              ['Presión arterial', 'Normal', 'Normal', 'Hipotensión (choque descompensado)'],
              ['Orina', 'Gasto urinario normal', 'Gasto urinario disminuido', '—'],
            ],
          },
        },
        {
          type: 'note',
          content:
            '⚑ = «viñetas rojas» de la GPC: señalan a los niños con más riesgo de progresar a choque. Una presión arterial normal no descarta el problema: cae tarde, cuando la compensación ya no alcanza.',
        },
        {
          type: 'list',
          title: 'Los signos más útiles para una deshidratación mayor al 5 % (GPC)',
          items: [
            'Llenado capilar prolongado (más de 2 s): el de mayor peso, razón de probabilidad positiva de 4.1.',
            'Turgencia anormal de la piel (signo del pliegue): 2.5.',
            'Ausencia de lágrimas: 2.3.',
            'Patrón respiratorio anormal: 2.0.',
            'En lactantes, además: fontanela anterior deprimida y extremidades frías.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'Ojo con los adultos mayores',
          content:
            'Con la edad la piel pierde elasticidad y el pliegue puede tardar en bajar sin que haya deshidratación aguda. Se interpreta junto con las mucosas, la frecuencia cardiaca, la presión y la diuresis.',
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Los electrolitos que acompañan la pérdida',
          content:
            'El potasio es potencialmente mortal: tanto la hiperpotasemia como la hipopotasemia causan arritmias y pueden llevar al paro cardiaco. El sodio afecta sobre todo al cerebro. La hipocalcemia produce tetania, con dos signos clásicos: Trousseau (espasmo de la mano al inflar el manguito del baumanómetro) y Chvostek (contracción de la cara al percutir el nervio facial).',
        },
      ],
    },
    {
      id: 'des-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El diagnóstico es clínico. La GPC considera estándar de oro la pérdida de peso: la diferencia entre el peso al llegar y el peso ya rehidratado, como porcentaje del peso corporal, equivale al grado de deshidratación.',
        },
        {
          type: 'list',
          title: 'Laboratorio: no son signos, pero confirman y orientan',
          items: [
            'Biometría hemática: hemoconcentración (hematocrito y hemoglobina altos porque hay menos plasma).',
            'Electrolitos: sodio (hiper o hiponatremia) y potasio.',
            'Urea, creatinina y glucosa. La GPC pide medirlos al iniciar líquidos intravenosos.',
            'Gasometría: la diarrea pierde bicarbonato y produce acidosis metabólica; el vómito de contenido gástrico pierde ácido clorhídrico y produce alcalosis metabólica.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Cuándo pensar en otra cosa (GPC)',
          content:
            'Fiebre alta, rigidez de nuca, fontanela abombada, alteración de la conciencia desproporcionada, sangre o moco en las heces, vómito biliar (verde) o dolor abdominal intenso o localizado obligan a buscar otra causa distinta a una gastroenteritis.',
        },
      ],
    },
    {
      id: 'des-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'note',
          content:
            'Resumen de lo que recomienda la GPC pediátrica; no es una indicación. No existe una GPC mexicana específica de choque hipovolémico en el adulto, así que esa parte se apoya en la fisiología.',
        },
        {
          type: 'steps',
          title: 'Según la gravedad (GPC SSA-156-08)',
          steps: [
            'Con riesgo o deshidratación leve: aumentar los líquidos habituales (leche materna, suero oral) y evitar las bebidas gaseosas.',
            'Deshidratación clínica: suero de rehidratación oral (SRO) de baja osmolaridad, 50 mL/kg en 4 horas, en tomas pequeñas y frecuentes (unos 5 mL/kg cada 15 minutos), más los líquidos de mantenimiento. Si no lo tolera, por sonda nasogástrica.',
            'Choque sospechado o confirmado: carga intravenosa rápida de solución salina 0.9 % a 20 mL/kg. Si persiste, una segunda carga y buscar otras causas de choque, como la sepsis.',
            'Ya rehidratado: continuar la lactancia y la alimentación, y reponer las pérdidas que sigan.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'La bioquímica de las soluciones',
          content:
            'En 2002 la OMS cambió el suero oral a una fórmula de baja osmolaridad: 245 mOsm/L y 75 mmol/L de sodio (la original tenía 311 mOsm/L). La GPC recomienda soluciones de 240–250 mOsm/L, por debajo de la osmolaridad del plasma (275–295). La solución salina 0.9 % es isotónica: se queda fuera de las células y repone volumen sin moverles agua.',
        },
        {
          type: 'list',
          title: 'Criterios de hospitalización (GPC)',
          items: [
            'Choque o deshidratación grave (más del 9 % del peso).',
            'Alteraciones neurológicas: letargo, crisis convulsivas.',
            'Falla de la rehidratación oral o sospecha de un problema quirúrgico.',
            'Vigilancia de los niños con más riesgo: menores de 6 meses, más de 8 evacuaciones o más de 4 vómitos en 24 horas.',
            'Cuidadores que no pueden manejar al niño en casa.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-agua-electrolitos', sectionId: 'bae-3', label: 'Compartimentos del agua corporal', porQue: 'La pérdida empieza en el líquido extracelular; el plasma es la parte que circula.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-agua-electrolitos', sectionId: 'bae-5', label: 'Alteraciones de los electrolitos', porQue: 'Sodio, potasio y calcio: qué produce cada exceso o déficit.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-agua-electrolitos', sectionId: 'bae-6', label: 'Regulación, ingresos y pérdidas de agua', porQue: 'El vómito, la diarrea y el sudor son vías de pérdida.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-agua-osmolaridad-soluciones', sectionId: 'bao-5', label: 'Osmolaridad y tonicidad', porQue: 'Por qué el suero oral es de baja osmolaridad y la salina 0.9 % es isotónica.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-presion-osmotica-oncotica', sectionId: 'bpo-8', label: 'Cristaloides, coloides y tonicidad', porQue: 'Con qué soluciones se repone el volumen en el choque.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-equilibrio-acido-base', sectionId: 'bab-5', label: 'Los cuatro trastornos ácido-base', porQue: 'Diarrea → acidosis metabólica; vómito → alcalosis metabólica.' },
    { materia: 'Histología', topicId: 'histologia-sangre', sectionId: 'hsan-2', label: 'Plasma: composición', porQue: 'La hemoconcentración es menos plasma para los mismos eritrocitos.' },
    { materia: 'Histología', topicId: 'histologia-biometria-hematica', sectionId: 'hbh-2', label: 'Valores de referencia y su significado', porQue: 'El hematocrito alto de un paciente deshidratado.' },
    { materia: 'Medicina Humanística', topicId: 'humanistica-sindromes-filiacion-cultural', sectionId: 'hsf-4', label: 'Susto y caída de mollera', porQue: 'La «mollera caída» que describen las familias es la fontanela hundida de la deshidratación.' },
  ],
  atlas: [
    { id: 'agua-electrolitos-osmolaridad', title: 'Agua, electrolitos y osmolaridad' },
    { id: 'bioquimica-acido-base', title: 'Equilibrio ácido-base' },
    { id: 'histologia-sangre', title: 'Sangre y elementos formes' },
    { id: 'medicina-humanistica', title: 'Medicina Humanística' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Lactante masculino de 14 meses, llevado a urgencias por 2 días de evacuaciones líquidas (8 en las últimas 24 horas) y vómito. Se ve irritable, con ojos hundidos y la mucosa oral seca. FC 160 lpm, FR 40 rpm, llenado capilar de 2 s, pulsos periféricos normales, extremidades tibias y presión arterial normal para su edad. La mamá refiere que moja menos pañales.',
    preguntas: [
      q('pat-des-1', 'deshidratacion-choque-hipovolemico', '¿Cómo se clasifica según la GPC?',
        ['Sin deshidratación clínicamente detectable', 'Deshidratación clínica', 'Deshidratación con datos de choque', 'No puede clasificarse sin laboratorio'], 1,
        'Irritabilidad, ojos hundidos, mucosas secas, taquicardia y menos orina indican deshidratación; pulsos, llenado capilar, extremidades y presión normales descartan el choque. Varias son viñetas rojas: hay que revalorarlo seguido.'),
      q('pat-des-2', 'deshidratacion-choque-hipovolemico', '¿Qué manejo inicial recomienda la GPC?',
        ['Carga IV de salina 0.9 % a 20 mL/kg', 'Jugos o refresco para que acepte líquidos', 'Ayuno hasta que cedan los vómitos', 'Suero oral de baja osmolaridad, 50 mL/kg en 4 horas, en tomas pequeñas y frecuentes'], 3,
        'En la deshidratación clínica sin choque la primera opción es la rehidratación oral; si no la tolera, por sonda nasogástrica. Los jugos y refrescos no se recomiendan.'),
      q('pat-des-3', 'deshidratacion-choque-hipovolemico', 'Dos horas después está soporoso, con piel marmórea, extremidades frías, pulsos débiles y llenado capilar de 4 s. ¿Qué sigue?',
        ['Carga intravenosa rápida de salina 0.9 % a 20 mL/kg', 'Continuar el suero oral: va mejorando', 'Solución salina hipertónica', 'Esperar los resultados de laboratorio'], 0,
        'Son datos de choque. La GPC indica una carga rápida de salina 0.9 % a 20 mL/kg; si no responde, una segunda carga y buscar otras causas.'),
      q('pat-des-4', 'deshidratacion-choque-hipovolemico', 'Su gasometría muestra pH 7.28 y HCO₃⁻ de 15 mEq/L. ¿Qué trastorno es?',
        ['Acidosis metabólica por pérdida de bicarbonato en las heces', 'Alcalosis metabólica por pérdida de ácido clorhídrico', 'Acidosis respiratoria por hipoventilación', 'Alcalosis respiratoria por taquipnea'], 0,
        'pH bajo con bicarbonato bajo es una acidosis metabólica. En la diarrea se pierde bicarbonato; la taquipnea es la compensación respiratoria, que elimina CO₂.'),
      q('pat-des-5', 'deshidratacion-choque-hipovolemico', '¿Por qué la salina hipertónica no sirve para reponer volumen?',
        ['Porque tiene poco sodio', 'Porque produce acidosis', 'Porque saca agua de las células y las deshidrata', 'Porque solo existe para uso oral'], 2,
        'Una solución hipertónica atrae agua del interior de las células hacia fuera. Para reponer volumen se usan cristaloides isotónicos como la salina 0.9 %.', 'easy'),
    ],
  },
  fuentes: [GPC.diarrea],
}

/* ── Ficha 2: Luxación de hombro y lesión del manguito rotador ─── */

const HOMBRO: Patologia = {
  id: 'luxacion-hombro-manguito-rotador',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Luxación de hombro y lesión del manguito rotador',
  aka: 'Inestabilidad glenohumeral',
  ambito: 'Hombro',
  resumen:
    'La glenohumeral es la articulación más móvil del cuerpo y, por eso mismo, la que más se luxa. Su estabilidad depende sobre todo de partes blandas: el rodete, la cápsula, los ligamentos y el manguito rotador.',
  sections: [
    {
      id: 'hom-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Luxación · subluxación',
          content:
            'Luxación: las superficies articulares pierden por completo el contacto (la cabeza del húmero sale de la cavidad glenoidea). Subluxación: la pérdida de contacto es parcial.',
        },
        {
          type: 'paragraph',
          content:
            'Más del 95 % de las luxaciones de hombro son anteriores. El mecanismo típico es la rotación externa forzada con el brazo en abducción, que empuja la cabeza del húmero hacia adelante (GPC IMSS-531-11).',
        },
        {
          type: 'comparison',
          title: 'Por qué el hombro se luxa y la cadera casi no',
          left: {
            title: 'Glenohumeral',
            items: [
              'Cabeza del húmero grande sobre una cavidad glenoidea pequeña y poco profunda',
              'Flexión y extensión, abducción y aducción, rotaciones y circunducción',
              'La sostienen sobre todo partes blandas',
              'Máxima movilidad, mínima estabilidad',
            ],
          },
          right: {
            title: 'Coxofemoral',
            items: [
              'El acetábulo cubre casi toda la cabeza del fémur',
              'Estabilidad ósea',
              'Se luxa solo con traumatismos de mucha energía',
            ],
          },
        },
        {
          type: 'table',
          title: 'Quién estabiliza el hombro (glosario de la GPC)',
          data: {
            headers: ['Tipo', 'Estructuras'],
            rows: [
              ['Estáticos', 'Rodete glenoideo, cápsula articular, ligamentos glenohumerales, arco coracoacromial y la presión negativa dentro de la articulación'],
              ['Dinámicos', 'Manguito rotador, tendón del bíceps y músculos escapulotorácicos'],
            ],
          },
        },
        {
          type: 'correlacion',
          variant: 'mnemotecnia',
          title: 'SITS',
          content:
            'Los cuatro músculos del manguito rotador: Supraespinoso, Infraespinoso, redondo menor (Teres minor) y Subescapular.',
        },
      ],
    },
    {
      id: 'hom-2',
      title: 'Lesiones que deja la luxación',
      blocks: [
        {
          type: 'table',
          title: 'Las que nombra la GPC',
          data: {
            headers: ['Lesión', 'Qué es'],
            rows: [
              ['Bankart', 'Avulsión del rodete (labrum) de la glena, en su parte anteroinferior'],
              ['Hill-Sachs', 'Defecto en la parte posterior de la cabeza del húmero, que choca contra el borde de la glena'],
              ['SLAP', 'Lesión del rodete superior, donde se inserta la porción larga del bíceps'],
            ],
          },
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'La primera luxación no suele ser la última',
          content:
            'La recurrencia se relaciona con haber tenido la primera luxación a menor edad. En un estudio citado por la GPC, el 55 % presentó inestabilidad a los 2 años de la primera luxación. Por eso en jóvenes deportistas se valora la cirugía desde el primer episodio.',
        },
      ],
    },
    {
      id: 'hom-3',
      title: 'Lesión del manguito rotador',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El supraespinoso pasa por el espacio estrecho que queda bajo el acromion: es el músculo del manguito que más se pinza y se desgarra. El uso repetido con el brazo elevado, las cargas y las posturas sostenidas producen tendinitis, pinzamiento y rupturas parciales o totales. Además, un manguito débil deja de centrar la cabeza humeral y facilita la luxación.',
        },
        {
          type: 'list',
          title: 'Factores de riesgo ocupacional (GPC IMSS-085-08)',
          items: [
            'Posturas mantenidas, prolongadas o forzadas del hombro.',
            'Movimientos repetitivos.',
            'Manipulación de cargas y esfuerzos estáticos de los miembros superiores.',
            'Vibración del miembro superior.',
          ],
        },
        {
          type: 'table',
          title: 'Pruebas de exploración (GPC IMSS-085-08)',
          data: {
            headers: ['Prueba', 'Si es positiva, orienta a'],
            rows: [
              ['Neer', 'Manguito rotador o pinzamiento subacromial'],
              ['Hawkins-Kennedy', 'Manguito rotador'],
              ['Yocum', 'Manguito rotador'],
              ['Speed', 'Tendinitis bicipital'],
              ['Yergason', 'Tendinitis bicipital'],
            ],
          },
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'Explorar por función',
          content:
            'Cada músculo del manguito se explora por lo que hace: el supraespinoso inicia la abducción, el infraespinoso y el redondo menor hacen la rotación externa, y el subescapular la rotación interna. La debilidad de un movimiento señala al músculo lesionado.',
        },
      ],
    },
    {
      id: 'hom-4',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          title: 'Luxación anterior aguda',
          items: [
            'Dolor intenso e incapacidad para mover el hombro tras una caída o un traumatismo.',
            'El brazo queda en abducción y rotación externa.',
            'Se pierde el contorno redondeado del deltoides y el acromion sobresale: hombro «en charretera».',
            'La cabeza del húmero se palpa por delante.',
          ],
        },
        {
          type: 'list',
          title: 'Lesión del manguito rotador',
          items: [
            'Dolor en el hombro que aumenta al levantar el brazo.',
            'Debilidad para la abducción o para las rotaciones.',
            'Pruebas de Neer, Hawkins-Kennedy o Yocum positivas.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'El nervio axilar',
          content:
            'El nervio axilar rodea el cuello quirúrgico del húmero e inerva el deltoides y el redondo menor. En la luxación anterior puede estirarse o lesionarse: siempre se explora la sensibilidad de la cara lateral del hombro y la fuerza del deltoides, antes y después de reducir.',
        },
      ],
    },
    {
      id: 'hom-5',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          title: 'Luxación',
          items: [
            'La sospecha es clínica y se confirma con radiografías del hombro, que además descartan una fractura asociada.',
            'Para la inestabilidad que se repite, la tomografía y la resonancia muestran la pérdida ósea de la glena y las lesiones del rodete.',
          ],
        },
        {
          type: 'list',
          title: 'Hombro doloroso y manguito rotador (GPC IMSS-085-08)',
          items: [
            'El diagnóstico es inicialmente clínico.',
            'En el dolor agudo no se indican radiografías, ultrasonido ni resonancia, salvo datos de una condición seria.',
            'Si no mejora tras 4–6 semanas de manejo conservador, se consideran estudios.',
            'Ante sospecha de ruptura total del manguito: ultrasonido o resonancia magnética.',
          ],
        },
      ],
    },
    {
      id: 'hom-6',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'steps',
          title: 'Luxación',
          steps: [
            'Reducción por personal capacitado, con exploración neurovascular antes y después.',
            'Inmovilización breve y analgesia. Mientras la luxación es aguda no se hacen ejercicios de fisioterapia.',
            'Luxación reducida: rehabilitación, con énfasis en fortalecer el manguito rotador.',
            'Inestabilidad que se repite: se refiere a traumatología. La GPC IMSS-531-11 recomienda la reparación de Bankart, de preferencia por artroscopia.',
          ],
        },
        {
          type: 'steps',
          title: 'Manguito rotador (GPC IMSS-085-08)',
          steps: [
            'Analgésicos y antiinflamatorios (AINE), y evitar la actividad que lo provocó.',
            'Fisioterapia supervisada y luego en casa: ejercicios pendulares y de escalerilla para mantener el arco de movilidad.',
            'Si no responde: infiltración subacromial por el traumatólogo.',
            'Se refiere a traumatología ante ruptura total en pacientes jóvenes, falta de respuesta o luxación recidivante.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'articulaciones-miembro-superior', sectionId: 'amsup-2', label: 'Hombro', porQue: 'La glenohumeral es una sinovial esferoidea, la más móvil del cuerpo.' },
    { materia: 'Anatomía', topicId: 'musculos-hombro-brazo', sectionId: 'mhb-4', label: 'Manguito rotador (SITS)', porQue: 'Función e inervación de los cuatro músculos que centran la cabeza humeral.' },
    { materia: 'Anatomía', topicId: 'miembro-superior-oseo', sectionId: 'mso-3', label: 'Escápula', porQue: 'Cavidad glenoidea, acromion y coracoides: el «plato» y el techo del hombro.' },
    { materia: 'Anatomía', topicId: 'miembro-superior-oseo', sectionId: 'mso-4', label: 'Húmero', porQue: 'Cabeza y cuello quirúrgico, por donde pasa el nervio axilar.' },
    { materia: 'Anatomía', topicId: 'artrologia-generalidades', sectionId: 'art-2', label: 'Composición de la articulación sinovial', porQue: 'Cápsula, membrana sinovial y ligamentos: los estabilizadores estáticos.' },
    { materia: 'Anatomía', topicId: 'articulaciones-miembro-inferior', sectionId: 'aminf-1', label: 'Coxofemoral (cadera)', porQue: 'Por comparación: el acetábulo cubre casi toda la cabeza del fémur.' },
    { materia: 'Histología', topicId: 'histologia-cartilago', label: 'Cartílago', porQue: 'Cartílago hialino articular y fibrocartílago, el tejido del rodete glenoideo.' },
  ],
  atlas: [
    { id: 'articulaciones-miembro-superior', title: 'Articulaciones del miembro superior' },
    { id: 'musculos-miembro-superior', title: 'Músculos del miembro superior' },
    { id: 'miembro-superior-oseo', title: 'Miembro superior óseo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 22 años, jugador de voleibol, llega a urgencias tras caer sobre el brazo derecho durante un bloqueo, con el brazo en abducción y rotación externa. Refiere dolor intenso e incapacidad para mover el hombro. A la inspección se ha perdido el contorno del deltoides y el acromion sobresale; la cabeza del húmero se palpa por delante. Tiene disminución de la sensibilidad en la cara lateral del hombro.',
    preguntas: [
      q('pat-hom-1', 'luxacion-hombro-manguito-rotador', '¿Cuál es el diagnóstico más probable?',
        ['Luxación anterior glenohumeral', 'Luxación posterior glenohumeral', 'Fractura de clavícula', 'Ruptura aislada del supraespinoso'], 0,
        'Mecanismo de abducción con rotación externa, pérdida del contorno del deltoides, acromion prominente y cabeza humeral palpable por delante: luxación anterior, la de más del 95 % de los casos.', 'easy'),
      q('pat-hom-2', 'luxacion-hombro-manguito-rotador', 'La hipoestesia de la cara lateral del hombro sugiere lesión de:',
        ['Nervio musculocutáneo', 'Nervio supraescapular', 'Nervio radial', 'Nervio axilar'], 3,
        'El nervio axilar rodea el cuello quirúrgico del húmero, inerva el deltoides y el redondo menor, y da la sensibilidad de la cara lateral del hombro.'),
      q('pat-hom-3', 'luxacion-hombro-manguito-rotador', 'La avulsión del rodete anteroinferior de la glena se llama lesión de:',
        ['Hill-Sachs', 'Bankart', 'SLAP', 'Neer'], 1,
        'Bankart es la avulsión del labrum de la glena. Hill-Sachs es el defecto en la cabeza del húmero y SLAP, la lesión del rodete superior.'),
      q('pat-hom-4', 'luxacion-hombro-manguito-rotador', '¿Qué aumenta su riesgo de volver a luxarse, según la GPC?',
        ['Que el hombro se haya reducido en urgencias', 'Ser diestro', 'Haber tenido la primera luxación a una edad joven', 'La lesión del nervio axilar'], 2,
        'La recurrencia se correlaciona con una primera luxación a menor edad: más de la mitad presenta inestabilidad en los 2 años siguientes.'),
      q('pat-hom-5', 'luxacion-hombro-manguito-rotador', 'Otra paciente, de 50 años, tiene dolor de 2 semanas al levantar el brazo y la prueba de Neer positiva, sin datos de alarma. ¿Qué dice la GPC sobre los estudios de imagen?',
        ['Resonancia magnética de inmediato', 'Tomografía en todos los casos', 'Radiografía de tórax', 'No se indican en el dolor agudo; se consideran si no mejora tras 4–6 semanas de manejo conservador'], 3,
        'El hombro doloroso agudo se diagnostica y se trata primero de forma clínica. Los estudios se reservan para la falta de respuesta o los datos de alarma.'),
      q('pat-hom-6', 'luxacion-hombro-manguito-rotador', '¿Qué músculo del manguito se pinza con más frecuencia bajo el acromion?',
        ['Subescapular', 'Redondo menor', 'Supraespinoso', 'Infraespinoso'], 2,
        'El tendón del supraespinoso pasa por el espacio subacromial, que es estrecho; por eso es el que más se pinza y se desgarra.', 'easy'),
    ],
  },
  fuentes: [GPC.inestabilidad, GPC.hombroDoloroso],
}

/* ── Ficha 3: Fractura de clavícula ────────────────────────────── */

const CLAVICULA: Patologia = {
  id: 'fractura-clavicula',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Fractura de clavícula',
  ambito: 'Cintura escapular',
  resumen:
    'La clavícula es el único puntal óseo entre el miembro superior y el tronco, y uno de los huesos que más se fracturan. La mayoría se rompe en su tercio medio y consolida con tratamiento conservador.',
  sections: [
    {
      id: 'cla-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Fractura de clavícula (GPC IMSS-584-12)',
          content:
            'Solución de continuidad a cualquier nivel de la clavícula, por lo general resultado de un golpe directo sobre el hombro.',
        },
        {
          type: 'table',
          title: 'Dónde se rompe',
          data: {
            headers: ['Segmento', 'Frecuencia', 'Comentario'],
            rows: [
              ['Tercio medio', '75–80 %', 'Típico de personas jóvenes'],
              ['Tercio lateral (distal)', '15–25 %', 'Cerca de los ligamentos coracoclaviculares'],
              ['Tercio medial (proximal)', 'Menos del 5 %', 'Casi siempre sin desplazamiento'],
            ],
          },
        },
        {
          type: 'paragraph',
          content:
            'Representa del 2.6 al 10 % de todas las fracturas. Es más frecuente en hombres jóvenes, menores de 25 años; después, en hombres mayores de 55 y mujeres mayores de 75.',
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'Por qué en el tercio medio',
          content:
            'La clavícula tiene forma de S itálica: su parte medial es convexa hacia adelante y la lateral, cóncava. Donde cambian las dos curvas el hueso es más delgado y no tiene ligamentos que lo refuercen. Ahí se concentra la fuerza y ahí se rompe.',
        },
      ],
    },
    {
      id: 'cla-2',
      title: 'Mecanismo',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Como en un edificio, la carga se reparte por columnas y trabes hasta las zapatas. En el miembro superior, una fuerza viaja por el antebrazo y el húmero hasta el hombro, y de ahí la clavícula la transmite al esternón. Si la fuerza supera lo que el hueso resiste, se rompe en su punto más débil.',
        },
        {
          type: 'list',
          title: 'Mecanismos que registra la GPC',
          items: [
            'Traumatismo directo o contusión en la cara lateral del hombro (el más común).',
            'Lesiones deportivas y caídas de altura.',
            'Accidentes en vehículo.',
            'Heridas por proyectil de arma de fuego.',
            'Hueso debilitado: osteoporosis, trastornos metabólicos, desnutrición.',
          ],
        },
        {
          type: 'comparison',
          title: 'Fractura no es lo mismo que luxación',
          left: {
            title: 'Fractura',
            items: ['Se rompe el hueso', 'Solución de continuidad del hueso', 'Clavícula: la lesión más frecuente del segmento'],
          },
          right: {
            title: 'Luxación',
            items: ['El hueso sale de su articulación sin romperse', 'Pérdida del contacto articular', 'Esternoclavicular o acromioclavicular: mucho menos frecuentes'],
          },
        },
      ],
    },
    {
      id: 'cla-3',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'comparison',
          title: 'Lo que refiere y lo que se encuentra',
          left: { title: 'Síntomas', items: ['Dolor', 'Pérdida de la función del brazo'] },
          right: {
            title: 'Signos',
            items: ['Deformidad y movilidad anormal', 'Aumento de volumen y equimosis', 'Crepitación ósea', 'Deformidad de la cintura escapular'],
          },
        },
        {
          type: 'list',
          title: 'Qué explorar siempre (GPC)',
          items: [
            'La piel sobre la clavícula: exposición ósea o un fragmento a punto de romperla.',
            'El estado neurovascular distal, el plexo braquial y los vasos subclavios.',
            'La condición pleuropulmonar del lado afectado.',
            'Lesiones asociadas: luxación esternoclavicular o acromioclavicular, fractura de la 1.ª costilla, luxación glenohumeral y «hombro flotante» (clavícula y cuello de la escápula del mismo lado).',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Qué hay debajo de la clavícula',
          content:
            'Bajo la clavícula pasan la arteria y la vena subclavias y el plexo braquial, sobre la 1.ª costilla, y por dentro está la cúpula de la pleura. Un fragmento desplazado puede lesionarlos: por eso se exploran los pulsos, la sensibilidad, la fuerza y los ruidos respiratorios.',
        },
      ],
    },
    {
      id: 'cla-4',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          title: 'Estudios (GPC IMSS-584-12)',
          items: [
            'Radiografía anteroposterior del hombro afectado que abarque de la articulación esternoclavicular a la porción lateral del húmero.',
            'Si el acortamiento pasa de 20 mm: radiografía posteroanterior a 15° para medirlo.',
            'Radiografía de tórax si se sospecha neumotórax o hemotórax.',
            'Tomografía solo en fracturas de los extremos con sospecha de lesión intraarticular.',
          ],
        },
        {
          type: 'table',
          title: 'Clasificaciones que menciona la guía',
          data: {
            headers: ['Clasificación', 'Qué toma en cuenta'],
            rows: [
              ['Allman', 'Localización por tercios: medial, medio y lateral'],
              ['Neer', 'Fracturas laterales: tipo I sin desplazamiento, tipo II desplazadas (IIA con los ligamentos coracoclaviculares íntegros, IIB con ellos rotos)'],
              ['Edimburgo', 'Desplazamiento y conminución; afectación articular en los extremos'],
              ['AO', 'Simple, en cuña o compleja (A, B, C)'],
            ],
          },
        },
      ],
    },
    {
      id: 'cla-5',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'steps',
          title: 'Conservador: primera elección en el tercio medial y en el medio sin desplazamiento',
          steps: [
            'Cabestrillo para inmovilizar el lado afectado, y analgesia.',
            'No se hacen maniobras de reducción: la fractura es inestable y ningún vendaje reduce una fractura desplazada. El vendaje en 8 y el Velpeau pueden lesionar la piel o comprimir el paquete neurovascular.',
            'Radiografías de control a las 6 y a las 12 semanas para ver el callo óseo.',
            'Consolida en unos 90 días; en adultos mayores, en unos 120.',
          ],
        },
        {
          type: 'list',
          title: 'Indicaciones absolutas de cirugía (GPC)',
          items: [
            'Fractura expuesta o con inminencia de exposición.',
            'Lesión neurológica o vascular asociada.',
            'Fractura de ambas clavículas.',
            'Compromiso pleuropulmonar o tórax inestable.',
            'Hombro flotante con desplazamiento de la escápula mayor a 2 cm.',
          ],
        },
        {
          type: 'note',
          content:
            'La cirugía puede considerarse además en personas jóvenes y muy activas o con acortamiento de 1.5 a 2 cm, según la valoración clínica y radiológica. La GPC es para adultos; en niños el manejo lo decide el especialista.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'miembro-superior-oseo', sectionId: 'mso-2', label: 'Clavícula', porQue: 'Tubérculo conoideo y línea trapezoide (ligamentos coracoclaviculares de la clasificación de Neer) y surco del subclavio.' },
    { materia: 'Anatomía', topicId: 'miembro-superior-oseo', sectionId: 'mso-1', label: 'Divisiones del miembro superior', porQue: 'La cintura escapular une el miembro superior al tronco.' },
    { materia: 'Anatomía', topicId: 'articulaciones-miembro-superior', sectionId: 'amsup-1', label: 'Esternoclavicular', porQue: 'El extremo medial y su articulación con el manubrio.' },
    { materia: 'Anatomía', topicId: 'articulaciones-miembro-superior', sectionId: 'amsup-2', label: 'Hombro', porQue: 'La acromioclavicular, en el extremo lateral.' },
    { materia: 'Histología', topicId: 'histologia-hueso', sectionId: 'hhue-6', label: 'Osificación: intramembranosa vs endocondral', porQue: 'La clavícula se forma por osificación intramembranosa.' },
    { materia: 'Histología', topicId: 'histologia-hueso', sectionId: 'hhue-7', label: 'Remodelación y regulación', porQue: 'Cómo se forma y se remodela el callo óseo que se busca en las radiografías de control.' },
  ],
  atlas: [
    { id: 'miembro-superior-oseo', title: 'Miembro superior óseo' },
    { id: 'articulaciones-miembro-superior', title: 'Articulaciones del miembro superior' },
    { id: 'histologia-cartilago-hueso', title: 'Adiposo, cartílago y hueso' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 19 años que cae de la bicicleta y se golpea directamente el hombro izquierdo contra el pavimento. Refiere dolor y no puede levantar el brazo; lo sostiene pegado al cuerpo. A la exploración hay deformidad y aumento de volumen a la mitad de la clavícula, con equimosis y crepitación. La piel está íntegra, los pulsos radiales son simétricos, la sensibilidad y la fuerza distales son normales y los ruidos respiratorios también.',
    preguntas: [
      q('pat-cla-1', 'fractura-clavicula', '¿En qué segmento es más probable la fractura?',
        ['Tercio medial', 'Tercio medio', 'Tercio lateral', 'Articulación esternoclavicular'], 1,
        'El tercio medio concentra del 75 al 80 % de las fracturas de clavícula, sobre todo en jóvenes; además, la deformidad está a la mitad del hueso.', 'easy'),
      q('pat-cla-2', 'fractura-clavicula', '¿Qué estudio pide primero la GPC?',
        ['Tomografía tridimensional', 'Resonancia magnética', 'Radiografía anteroposterior del hombro que incluya de la esternoclavicular a la porción lateral del húmero', 'Ultrasonido'], 2,
        'La radiografía simple confirma la fractura y sus características. La tomografía se reserva para los extremos con sospecha de lesión intraarticular.'),
      q('pat-cla-3', 'fractura-clavicula', 'La radiografía muestra una fractura del tercio medio sin desplazamiento. ¿Cuál es el manejo?',
        ['Cabestrillo, analgesia y radiografías de control a las 6 y 12 semanas', 'Reducción cerrada y vendaje en 8', 'Placa quirúrgica en todos los casos', 'Reposo sin inmovilizar'], 0,
        'El conservador es de primera elección. La GPC desaconseja las maniobras de reducción y el vendaje en 8, que puede lesionar la piel o comprimir el paquete neurovascular.'),
      q('pat-cla-4', 'fractura-clavicula', '¿Cuál de estos hallazgos sería una indicación absoluta de cirugía?',
        ['Dolor intenso', 'Equimosis extensa', 'Tener 19 años', 'Un fragmento que tensa la piel y está a punto de romperla'], 3,
        'La inminencia de exposición es una indicación absoluta, igual que la fractura expuesta, la lesión neurovascular o el compromiso pleuropulmonar.'),
      q('pat-cla-5', 'fractura-clavicula', 'En las fracturas del tercio lateral, Neer distingue el tipo IIA del IIB según la integridad de:',
        ['Los ligamentos coracoclaviculares (conoide y trapezoide)', 'El ligamento costoclavicular', 'El ligamento coracoacromial', 'Los ligamentos glenohumerales'], 0,
        'Los ligamentos conoide y trapezoide se insertan en el tubérculo conoideo y la línea trapezoide de la cara inferior de la clavícula. Si se rompen (IIB), el fragmento medial queda libre y se desplaza.'),
      q('pat-cla-6', 'fractura-clavicula', '¿Por qué se exploran los pulsos, la sensibilidad y los ruidos respiratorios?',
        ['Por rutina; no tienen relación con la clavícula', 'Para descartar una luxación de cadera', 'Para valorar la deshidratación', 'Porque bajo la clavícula pasan los vasos subclavios y el plexo braquial, y por dentro está la cúpula pleural'], 3,
        'Un fragmento desplazado puede lesionar los vasos subclavios, el plexo braquial o la pleura (neumotórax). La GPC pide explorarlos en todos los pacientes.'),
    ],
  },
  fuentes: [GPC.clavicula],
}

export const GUIA_CASO = GUIA
export const FICHAS: Patologia[] = [DESHIDRATACION, HOMBRO, CLAVICULA, ...FICHAS_MATERIAS, ...FICHAS_MATERIAS_2, ...FICHAS_MATERIAS_3, ...FICHAS_MATERIAS_4, ...FICHAS_MATERIAS_5, ...FICHAS_MATERIAS_6]
export const PATOLOGIAS: Patologia[] = [GUIA, ...FICHAS]

export const patologiaById = (id: string) => PATOLOGIAS.find((p) => p.id === id)

/* Fichas que se apoyan en un tema; alimenta «Patologías relacionadas» en /topic/:id. */
export const patologiasDeTema = (topicId: string) =>
  FICHAS.filter((p) => p.bases.some((b) => b.topicId === topicId))
