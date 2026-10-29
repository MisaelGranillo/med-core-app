/* Patologías por materia (quinto lote) — Embriología: implantación y
 * trofoblasto. Mismas reglas que los lotes anteriores: GPC mexicana del
 * Catálogo Maestro y organismos internacionales como complemento; solo datos
 * verificados. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  tubario: { codigo: 'GPC IMSS-182-09', titulo: 'Diagnóstico y tratamiento de embarazo tubario', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/182GER.pdf' },
  acog: { codigo: 'ACOG 2018', titulo: 'ACOG Practice Bulletin No. 193: Tubal ectopic pregnancy. Obstet Gynecol. 2018;131(3):e91–e103', url: 'https://doi.org/10.1097/AOG.0000000000002560' },
  etg: { codigo: 'GPC SS-228-09', titulo: 'Diagnóstico y tratamiento de la enfermedad trofoblástica gestacional', url: 'https://www.cenetec-difusion.com/CMGPC/S-228-09/ER.pdf' },
  figo: { codigo: 'FIGO 2021', titulo: 'Update on the diagnosis and management of gestational trophoblastic disease. Int J Gynaecol Obstet. 2021;155(Suppl 1):86–93', url: 'https://doi.org/10.1002/ijgo.13877' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Embriología ────────────────────────────────────────────────── */

const ECTOPICO: Patologia = {
  id: 'embarazo-ectopico',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Embarazo ectópico',
  aka: 'Embarazo tubario',
  ambito: 'Implantación del blastocisto',
  resumen:
    'El blastocisto se implanta fuera de la cavidad uterina, casi siempre en la trompa. Afecta al 1–2 % de los embarazos. La trompa no puede sostener la gestación y puede romperse con una hemorragia interna que pone en riesgo la vida. Se confirma con ultrasonido transvaginal y β-hCG; se trata con metotrexato o con cirugía.',
  sections: [
    {
      id: 'ect-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Normalmente el cigoto avanza por la trompa mientras se segmenta y el blastocisto se implanta en el endometrio hacia los días 5–6. Si el transporte se retrasa (por ejemplo, por una trompa dañada), el blastocisto se implanta antes de llegar al útero. La localización más frecuente es la trompa; con menos frecuencia ocurre en el ovario, el cuello uterino o la cavidad abdominal.',
        },
        {
          type: 'list',
          title: 'Factores de riesgo (GPC)',
          items: [
            'Embarazo tubario previo o cirugía de las trompas.',
            'Enfermedad pélvica inflamatoria.',
            'Dispositivo intrauterino.',
            'Técnicas de reproducción asistida.',
            'Tabaquismo.',
          ],
        },
        {
          type: 'note',
          content: 'Cerca de la mitad de las pacientes no tiene ningún factor de riesgo identificable.',
        },
      ],
    },
    {
      id: 'ect-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Retraso menstrual, dolor abdominal bajo y sangrado transvaginal en una mujer en edad reproductiva.',
            'La tríada clásica (dolor, sangrado y masa anexial) solo aparece en el 45 % de los casos (GPC).',
            'El sangrado de la trompa puede ser lento: algunas pacientes siguen estables con un hemoperitoneo de 1 a 1.5 L.',
            'Datos de rotura: dolor intenso, irritación peritoneal, dolor referido al hombro, taquicardia e hipotensión.',
          ],
        },
        {
          type: 'table',
          title: 'Cómo se confirma',
          data: {
            headers: ['Estudio', 'Qué aporta'],
            rows: [
              ['Ultrasonido transvaginal', 'Busca el saco gestacional dentro del útero o una masa anexial; es más sensible que el abdominal'],
              ['β-hCG sérica', 'Por sí sola no distingue un embarazo ectópico de uno intrauterino; se interpreta junto con el ultrasonido'],
              ['Zona de discriminación', 'Con β-hCG de 1500–2000 mUI/mL ya debería verse el saco intrauterino; si no se ve, se sospecha ectópico'],
              ['Laparoscopia', 'Cuando la duda persiste'],
            ],
          },
        },
      ],
    },
    {
      id: 'ect-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'comparison',
          title: 'Médico o quirúrgico',
          left: {
            title: 'Metotrexato',
            items: [
              'Paciente estable, embarazo no roto, sin sangrado activo',
              'β-hCG menor de 2000 mUI/mL, saco menor de 3.5 cm y sin latido embrionario (GPC)',
              'Se vigila la caída de la β-hCG entre los días 4 y 7',
              'No se usa en la lactancia ni con daño renal, hepático o de médula ósea',
            ],
          },
          right: {
            title: 'Cirugía',
            items: [
              'Inestabilidad hemodinámica o rotura (se estabiliza antes de operar)',
              'Falla del metotrexato o contraindicación para usarlo',
              'De preferencia por laparoscopia si la paciente está estable',
              'Salpingostomía (conserva la trompa) o salpingectomía (la retira)',
            ],
          },
        },
        {
          type: 'list',
          items: [
            'El manejo expectante solo se acepta en casos seleccionados: asintomática, sin sangrado y con β-hCG menor de 1000.',
            'Toda paciente Rh negativo no sensibilizada recibe inmunoglobulina anti-D (GPC).',
            'El metotrexato es un antagonista del ácido fólico: frena la síntesis de ADN de las células del trofoblasto, que se dividen rápido.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-desarrollo-temprano', sectionId: 'edt-2', label: 'Estructuras del aparato reproductor femenino', porQue: 'La ampolla, donde ocurre la fecundación, y el endometrio, donde debería implantarse.' },
    { materia: 'Embriología', topicId: 'embriologia-desarrollo-temprano', sectionId: 'edt-3', label: 'Primera semana', porQue: 'El recorrido del cigoto por la trompa y la implantación en los días 5–6.' },
    { materia: 'Embriología', topicId: 'embriologia-desarrollo-temprano', sectionId: 'edt-4', label: 'Segunda semana', porQue: 'El sincitiotrofoblasto invade el tejido donde se implanta, sea o no el útero.' },
    { materia: 'Histología', topicId: 'histologia-epitelial-polaridad', sectionId: 'hpol-2', label: 'Cilios del dominio apical', porQue: 'Los cilios de la trompa ayudan a mover el cigoto; si se dañan, el transporte se retrasa.' },
    { materia: 'Embriología', topicId: 'embriologia-fecundacion', sectionId: 'efe-7', label: 'Implantación e inicio de la segunda semana', porQue: 'El trofoblasto invade el tejido donde se implanta y el sincitiotrofoblasto secreta la β-hCG que se mide en el diagnóstico.' },
    { materia: 'Embriología', topicId: 'embriologia-ciclo-ovarico', sectionId: 'eco-6', label: 'Transporte del ovocito', porQue: 'Fecundación en la ampolla y llegada al útero en 3 a 4 días: si el transporte falla, el embrión se implanta en la trompa.' },
  ],
  atlas: [
    { id: 'embriologia-desarrollo-temprano', title: 'Desarrollo temprano' },
    { id: 'histologia-epitelio', title: 'Tejido epitelial' },
    { id: 'embriologia-ciclo-fecundacion', title: 'Ciclo ovárico y fecundación' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 27 años con antecedente de enfermedad pélvica inflamatoria. Tiene 7 semanas de retraso menstrual, dolor en la fosa ilíaca derecha y sangrado transvaginal escaso. TA 112/70 mmHg, FC 88 lpm. β-hCG 1800 mUI/mL. El ultrasonido transvaginal no muestra saco gestacional en el útero y sí una masa anexial derecha de 2.5 cm sin latido.',
    preguntas: [
      q('pat-ect-1', 'embarazo-ectopico', '¿Cuál es el diagnóstico más probable?',
        ['Aborto completo', 'Embarazo intrauterino temprano', 'Embarazo ectópico tubario', 'Mola hidatiforme'], 2,
        'Con β-hCG en la zona de discriminación ya debería verse el saco intrauterino; hay masa anexial.', 'easy'),
      q('pat-ect-2', 'embarazo-ectopico', '¿Qué factor de riesgo tiene la paciente?',
        ['Enfermedad pélvica inflamatoria previa', 'Edad de 27 años', 'Sangrado escaso', 'Dolor en la fosa ilíaca'], 0,
        'La inflamación previa daña la trompa y retrasa el transporte del cigoto.'),
      q('pat-ect-3', 'embarazo-ectopico', 'Está estable, el embarazo no está roto, la β-hCG es menor de 2000 y no hay latido. ¿Qué tratamiento es razonable según la GPC?',
        ['Histerectomía', 'Esperar sin vigilancia', 'Legrado uterino', 'Metotrexato con β-hCG de control'], 3,
        'Cumple los criterios de tratamiento médico; se vigila la caída de la β-hCG entre los días 4 y 7.'),
      q('pat-ect-4', 'embarazo-ectopico', 'Dos días después llega con dolor intenso, dolor en el hombro, FC 124 y TA 80/50. ¿Qué indica?',
        ['Efecto adverso leve del metotrexato', 'Rotura tubaria con hemoperitoneo', 'Embarazo intrauterino', 'Infección urinaria'], 1,
        'Requiere estabilizar y operar de inmediato; el dolor en el hombro es por sangre que irrita el diafragma.'),
      q('pat-ect-5', 'embarazo-ectopico', 'Es Rh negativo y no está sensibilizada. ¿Qué se le aplica?',
        ['Inmunoglobulina anti-D', 'Hierro intravenoso', 'Oxitocina', 'Vitamina K'], 0,
        'Evita la sensibilización contra el antígeno D en embarazos futuros.'),
    ],
  },
  fuentes: [F.tubario, F.acog],
}

const MOLA: Patologia = {
  id: 'mola-hidatiforme',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Mola hidatiforme',
  aka: 'Enfermedad trofoblástica gestacional',
  ambito: 'Trofoblasto y placenta',
  resumen:
    'Proliferación anormal del trofoblasto tras una fecundación anómala: las vellosidades coriales se llenan de líquido y la hCG sube mucho. En la mola completa no hay embrión; en la parcial sí, pero es triploide. Se trata evacuando el útero y vigilando la β-hCG, porque una parte evoluciona a neoplasia trofoblástica.',
  sections: [
    {
      id: 'mol-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'comparison',
          title: 'Mola completa y mola parcial',
          left: {
            title: 'Completa',
            items: [
              'Sin tejido embrionario ni fetal',
              'Vellosidades con edema difuso e hiperplasia del trofoblasto',
              'Cariotipo diploide, casi siempre 46,XX, con todo el material genético paterno',
              'Un ovocito sin núcleo es fecundado por un espermatozoide que duplica su ADN (o por dos espermatozoides)',
            ],
          },
          right: {
            title: 'Parcial',
            items: [
              'Hay tejido embrionario o fetal',
              'Hiperplasia focal del trofoblasto',
              'Cariotipo triploide (69 cromosomas)',
              'Un ovocito normal fecundado por dos espermatozoides',
            ],
          },
        },
        {
          type: 'table',
          title: 'Enfermedad trofoblástica gestacional (GPC)',
          data: {
            headers: ['Grupo', 'Entidades'],
            rows: [
              ['Mola hidatiforme', 'Completa y parcial'],
              ['Neoplasia trofoblástica gestacional', 'Mola invasora, coriocarcinoma, tumor del sitio placentario'],
            ],
          },
        },
      ],
    },
    {
      id: 'mol-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          title: 'Se sospecha en el primer trimestre ante (GPC)',
          items: [
            'Sangrado uterino anormal.',
            'Útero más grande de lo esperado para la edad gestacional.',
            'Ausencia de frecuencia cardiaca fetal.',
            'Quistes tecaluteínicos en los ovarios.',
            'Hiperémesis gravídica.',
            'Hipertensión antes de las 20 semanas.',
            'β-hCG muy elevada; puede causar hipertiroidismo, porque la hCG estimula al receptor de TSH.',
          ],
        },
        {
          type: 'list',
          title: 'Cómo se confirma',
          items: [
            'Ultrasonido: patrón ecogénico mixto difuso en el útero y quistes tecaluteínicos; en la mola parcial puede verse un feto.',
            'El diagnóstico definitivo es histopatológico: todo tejido de una evacuación uterina se envía a patología (GPC).',
          ],
        },
      ],
    },
    {
      id: 'mol-3',
      title: 'Tratamiento y vigilancia: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Evacuación uterina, de preferencia por aspiración, con oxitocina durante el procedimiento; no se induce el aborto (GPC).',
            'Histerectomía en bloque como opción en pacientes con paridad satisfecha; aun así se vigila la β-hCG.',
            'Inmunoglobulina anti-D si la paciente es Rh negativo.',
            'β-hCG semanal hasta que sea negativa y después mensual hasta 6 meses; anticoncepción hormonal durante la vigilancia.',
            'Se sospecha neoplasia trofoblástica si la β-hCG se estanca (cuatro mediciones en los días 1, 7, 14 y 21), sube más de 10 % en tres mediciones o sigue detectable a los 6 meses: requiere quimioterapia.',
            'Después de una mola, el riesgo de otra en el siguiente embarazo es unas 10 veces mayor (1–2 %).',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-desarrollo-temprano', sectionId: 'edt-3', label: 'Partes del blastocisto', porQue: 'El trofoblasto, la capa que prolifera en la mola, forma la parte fetal de la placenta.' },
    { materia: 'Embriología', topicId: 'embriologia-desarrollo-temprano', sectionId: 'edt-4', label: 'Segunda semana: citotrofoblasto y sincitiotrofoblasto', porQue: 'El sincitiotrofoblasto es el que produce la hCG.' },
    { materia: 'Embriología', topicId: 'embriologia-cromosomas-division', sectionId: 'ecd-2', label: 'Número de cromosomas', porQue: 'La mola parcial es triploide: una euploidía anormal (3n = 69).' },
    { materia: 'Embriología', topicId: 'embriologia-fecundacion', sectionId: 'efe-4', label: 'Fusión de membranas y bloqueo de la polispermia', porQue: 'Un ovocito fecundado por dos espermatozoides es triploide: el origen de la mola parcial.' },
    { materia: 'Histología', topicId: 'histologia-introduccion', sectionId: 'hint-4', label: 'Método y aplicaciones diagnósticas', porQue: 'El diagnóstico definitivo de la mola es histopatológico.' },
  ],
  atlas: [
    { id: 'embriologia-desarrollo-temprano', title: 'Desarrollo temprano' },
    { id: 'histologia-introduccion', title: 'Introducción a la histología' },
    { id: 'embriologia-ciclo-fecundacion', title: 'Ciclo ovárico y fecundación' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 19 años con 11 semanas de amenorrea, sangrado transvaginal y vómitos intensos. El útero corresponde a 16 semanas. TA 150/95 mmHg. No se escucha frecuencia cardiaca fetal. β-hCG 280,000 mUI/mL. El ultrasonido muestra un patrón ecogénico mixto difuso en el útero, sin embrión, y ovarios aumentados con quistes.',
    preguntas: [
      q('pat-mol-1', 'mola-hidatiforme', '¿Cuál es el diagnóstico más probable?',
        ['Mola hidatiforme completa', 'Embarazo ectópico', 'Embarazo gemelar normal', 'Aborto incompleto'], 0,
        'Útero grande, hCG muy alta, hiperémesis, hipertensión temprana y ausencia de embrión.', 'easy'),
      q('pat-mol-2', 'mola-hidatiforme', '¿Qué cariotipo se espera en esta mola?',
        ['69,XXY', '46,XX de origen totalmente paterno', '45,X', '47,XX,+21'], 1,
        'La mola completa es diploide y androgenética; la parcial es triploide.'),
      q('pat-mol-3', 'mola-hidatiforme', '¿Qué explica los quistes ováricos?',
        ['Endometriosis', 'Falta de estrógenos', 'La hCG muy elevada estimula los ovarios (quistes tecaluteínicos)', 'Infección'], 2,
        'La hCG comparte estructura con la LH y estimula a la teca.'),
      q('pat-mol-4', 'mola-hidatiforme', '¿Cuál es el tratamiento inicial según la GPC?',
        ['Inducir el aborto con medicamentos', 'Quimioterapia inmediata', 'Esperar la expulsión espontánea', 'Evacuación uterina por aspiración y estudio histopatológico'], 3,
        'Se evacua con oxitocina transoperatoria y todo el tejido se envía a patología.'),
      q('pat-mol-5', 'mola-hidatiforme', 'A los 21 días la β-hCG se mantiene igual en cuatro mediciones. ¿Qué sugiere?',
        ['Neoplasia trofoblástica gestacional', 'Curación completa', 'Nuevo embarazo normal', 'Error de laboratorio sin importancia'], 0,
        'La meseta de la β-hCG es criterio para iniciar quimioterapia.'),
    ],
  },
  fuentes: [F.etg, F.figo],
}

export const FICHAS_MATERIAS_5: Patologia[] = [ECTOPICO, MOLA]
