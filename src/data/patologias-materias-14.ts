/* Patologías por materia (decimocuarto lote) — Embriología: sistema esquelético
 * (acondroplasia, craniosinostosis y disostosis cleidocraneal). Craniosinostosis
 * con la GPC del CENETEC publicada en Cirugía y Cirujanos (2017); acondroplasia y
 * disostosis con MedlinePlus Genetics y una revisión de Anales de Pediatría (2022).
 * Solo datos verificados en esas fuentes. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  achMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Achondroplasia (Biblioteca Nacional de Medicina de EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/achondroplasia/' },
  achRevision: { codigo: 'An Pediatr 2022', titulo: 'Achondroplasia: update on diagnosis, follow-up and treatment (Anales de Pediatría)', url: 'https://www.analesdepediatria.org/en-achondroplasia-update-on-diagnosis-follow-up-articulo-S2341287922002228' },
  csGpc: { codigo: 'GPC CENETEC (Cir Cir 2017)', titulo: 'Guía de práctica clínica para el diagnóstico, tratamiento y rehabilitación de craneosinostosis no sindrómica en los tres niveles de atención', url: 'https://www.elsevier.es/en-revista-cirugia-cirujanos-139-articulo-guide-clinical-practice-for-diagnosis-S2444050717300797' },
  ccdMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Cleidocranial dysplasia (Biblioteca Nacional de Medicina de EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/cleidocranial-dysplasia/' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

const ATLAS_ESQ = { id: 'embriologia-esqueleto-axial', title: 'Sistema esquelético axial' }

/* ── Embriología ────────────────────────────────────────────────── */

const ACONDROPLASIA: Patologia = {
  id: 'acondroplasia',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Acondroplasia',
  aka: 'Talla baja desproporcionada por FGFR3',
  ambito: 'Osificación endocondral',
  resumen:
    'La forma más común de talla baja con extremidades cortas: 1 de cada 15 000 a 40 000 recién nacidos. Una variante del gen FGFR3 vuelve hiperactivo al receptor, que frena la proliferación de los condrocitos de la placa de crecimiento: falla la osificación ENDOCONDRAL de los huesos largos y se respeta la intramembranosa de la bóveda. Es autosómica dominante, pero cerca del 80 % nace de padres sin la enfermedad. La inteligencia suele ser normal.',
  sections: [
    {
      id: 'ach-1',
      title: 'Causa y cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Variante heterocigota de FGFR3 con GANANCIA DE FUNCIÓN: casi todos los casos tienen la misma (c.1138G>A).',
            'Tronco de tamaño normal con brazos y piernas cortos, sobre todo los segmentos proximales (brazo y muslo).',
            'Cabeza grande con frente prominente (macrocefalia relativa), mano en tridente, lordosis lumbar marcada y piernas arqueadas (genu varo en el 40–70 %).',
            'Talla adulta sin tratamiento de unos 131 cm en hombres y 124 cm en mujeres.',
          ],
        },
        {
          type: 'paragraph',
          content: 'DIAGNÓSTICO: clínico y radiológico, con prueba genética para confirmarlo. Antes de la semana 26 es difícil de ver; en el tercer trimestre el ultrasonido muestra fémur corto y curvo (rizomelia) y una relación fémur/pie menor de 1.',
        },
      ],
    },
    {
      id: 'ach-2',
      title: 'Complicaciones y seguimiento',
      blocks: [
        {
          type: 'table',
          data: {
            headers: ['Complicación', 'Qué hacer'],
            rows: [
              ['Estenosis del foramen magno: compresión de la unión craneocervical', 'Resonancia entre los 6 meses y el año, o antes si hay datos de alarma'],
              ['Apnea del sueño, sobre todo obstructiva', 'Polisomnografía en el primer año (idealmente el primer mes) y si aparecen síntomas'],
              ['Otitis media e hipoacusia en la infancia', 'Vigilancia otológica'],
              ['Genu varo; estenosis del canal lumbar en el adulto', 'Ortopedia; la estenosis lumbar es la causa principal de cirugía de columna en el adulto'],
              ['Obesidad temprana', 'Vigilar peso con tablas de crecimiento específicas'],
            ],
          },
        },
        {
          type: 'note',
          content: 'VOSORITIDA: aprobada en Europa en 2021; inyección subcutánea diaria que aumentó la velocidad de crecimiento en ≈ 1.57 cm por año frente a placebo.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-esqueleto-axial', sectionId: 'eax-10', label: 'Displasias esqueléticas', porQue: 'Acondroplasia, hipocondroplasia y displasia tanatofórica, y el caso de repaso de la clase.' },
    { materia: 'Embriología', topicId: 'embriologia-esqueleto-axial', sectionId: 'eax-2', label: 'Osificación intramembranosa y endocondral', porQue: 'Falla la endocondral (huesos largos) y se respeta la intramembranosa (bóveda): por eso la cabeza se ve grande.' },
    { materia: 'Histología', topicId: 'histologia-hueso', sectionId: 'hhue-6', label: 'Osificación: intramembranosa vs endocondral', porQue: 'La placa de crecimiento y sus condrocitos, donde actúa FGFR3.' },
  ],
  atlas: [ATLAS_ESQ, { id: 'histologia-cartilago-hueso', title: 'Adiposo, cartílago y hueso' }],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido con extremidades cortas, sobre todo brazos y muslos, cabeza grande con frente prominente y tórax estrecho. En el ultrasonido del tercer trimestre se vio un fémur corto. Sus padres tienen talla normal.',
    preguntas: [
      q('pat-ach-1', 'acondroplasia', '¿Cuál es el diagnóstico más probable?',
        ['Acondroplasia', 'Displasia tanatofórica', 'Hipotiroidismo congénito', 'Disostosis cleidocraneal'], 0,
        'Talla baja desproporcionada con macrocefalia relativa y rizomelia.', 'easy'),
      q('pat-ach-2', 'acondroplasia', 'Si es autosómica dominante, ¿por qué los padres tienen talla normal?',
        ['Es recesiva', 'La gran mayoría de los casos son variantes nuevas', 'Tiene penetrancia incompleta en los padres', 'Es ligada al X'], 1,
        'Cerca del 80 % nace de padres sin la enfermedad.'),
      q('pat-ach-3', 'acondroplasia', '¿Qué tipo de osificación está alterada?',
        ['La intramembranosa', 'Ambas por igual', 'La endocondral', 'Ninguna'], 2,
        'Por eso los huesos largos son cortos y la bóveda crece normal.'),
      q('pat-ach-4', 'acondroplasia', '¿Qué complicación grave se busca con resonancia en el primer año?',
        ['Craniosinostosis', 'Cardiopatía', 'Atresia esofágica', 'Estenosis del foramen magno con compresión craneocervical'], 3,
        'También se hace polisomnografía por la apnea del sueño.'),
      q('pat-ach-5', 'acondroplasia', '¿Qué hace la variante de FGFR3?',
        ['Activa de más al receptor y frena a los condrocitos de la placa de crecimiento', 'Lo inactiva', 'Altera el colágeno tipo I', 'Bloquea la hormona del crecimiento'], 0,
        'Es una ganancia de función.'),
    ],
  },
  fuentes: [F.achMedline, F.achRevision],
}

const CRANIOSINOSTOSIS: Patologia = {
  id: 'craniosinostosis',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Craniosinostosis',
  aka: 'Craneosinostosis · cierre prematuro de las suturas',
  ambito: 'Suturas del cráneo',
  resumen:
    'Cierre prematuro de una o más suturas del cráneo, que cambia la forma en que crece. Ocurre en 1 de cada 2 000 a 2 500 nacidos vivos y puede ser aislada (no sindrómica) o parte de un síndrome. La sutura sagital es la más afectada. Se diagnostica con la exploración y la tomografía 3D, y la GPC mexicana recomienda operar antes de los 12 meses, cuando el cráneo crece más rápido.',
  sections: [
    {
      id: 'csn-1',
      title: 'Formas y causas',
      blocks: [
        {
          type: 'table',
          data: {
            headers: ['Sutura', 'Frecuencia', 'Forma del cráneo'],
            rows: [
              ['Sagital', '40–60 %', 'ESCAFOCEFALIA: largo y estrecho'],
              ['Coronal', '20–30 %', 'BRAQUICEFALIA (bilateral) o plagiocefalia anterior (unilateral)'],
              ['Metópica', 'Menos del 10 %', 'TRIGONOCEFALIA: frente triangular'],
              ['Lambdoidea', 'Rara', 'Plagiocefalia posterior'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Factores de riesgo (GPC)',
          items: [
            'Del recién nacido: sexo masculino, peso bajo o pequeño para la edad gestacional, macrosomía.',
            'De la madre: 40 años o más, tabaquismo, enfermedad tiroidea o su tratamiento, anticonvulsivos, embarazo múltiple.',
            'En las formas sindrómicas participan genes como FGFR1–3, TWIST1 (Saethre-Chotzen), MSX2 y EFNB1.',
          ],
        },
      ],
    },
    {
      id: 'csn-2',
      title: 'Diagnóstico y tratamiento',
      blocks: [
        {
          type: 'list',
          items: [
            'Exploración del cráneo y la cara: forma de la cabeza, bordes de las suturas y fontanelas, y vigilancia del perímetro cefálico.',
            'Ante la sospecha: radiografía de cráneo AP y lateral y TOMOGRAFÍA con reconstrucción 3D (sensibilidad ≈ 96 %, contra ≈ 80 % de la radiografía).',
            'Complicación principal: HIPERTENSIÓN INTRACRANEAL, con o sin hidrocefalia, más frecuente si hay varias suturas cerradas.',
            'Cirugía antes de los 12 meses: el 50 % del crecimiento del cráneo ocurre en los primeros 6 meses.',
            'Referir a neurocirugía o cirugía plástica; confirmado el diagnóstico, a genética y a rehabilitación para vigilar el neurodesarrollo.',
          ],
        },
        {
          type: 'note',
          content: 'No confundir con la PLAGIOCEFALIA POSICIONAL (por la postura al dormir), mucho más frecuente (≈ 1 de cada 300), en la que las suturas están abiertas.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-esqueleto-axial', sectionId: 'eax-9', label: 'Defectos del cráneo', porQue: 'Formas de craniosinostosis por sutura, genes y teratógenos vistos en clase.' },
    { materia: 'Embriología', topicId: 'embriologia-esqueleto-axial', sectionId: 'eax-4', label: 'Suturas y fontanelas del recién nacido', porQue: 'Qué une cada sutura y cuándo cierran las fontanelas.' },
  ],
  atlas: [ATLAS_ESQ, { id: 'huesos-craneo', title: 'Huesos del Cráneo' }],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Lactante de 4 meses con la cabeza larga y angosta desde el nacimiento. Se palpa un borde óseo a lo largo de la línea media, entre los parietales. Desarrollo normal hasta ahora.',
    preguntas: [
      q('pat-csn-1', 'craniosinostosis', '¿Qué sutura se cerró antes de tiempo?',
        ['Coronal', 'Sagital', 'Metópica', 'Lambdoidea'], 1,
        'Cabeza larga y estrecha: escafocefalia.', 'easy'),
      q('pat-csn-2', 'craniosinostosis', '¿Qué estudio confirma el diagnóstico?',
        ['Ultrasonido transfontanelar', 'Gammagrafía ósea', 'Tomografía con reconstrucción 3D', 'Electroencefalograma'], 2,
        'Sensibilidad ≈ 96 %; la gammagrafía ya no se usa.'),
      q('pat-csn-3', 'craniosinostosis', '¿Antes de qué edad recomienda operar la GPC?',
        ['6 años', '3 años', '24 meses', '12 meses'], 3,
        'El 50 % del crecimiento del cráneo ocurre en los primeros 6 meses.'),
      q('pat-csn-4', 'craniosinostosis', '¿Qué complicación se busca evitar?',
        ['Hipertensión intracraneal', 'Hipocalcemia', 'Hipoacusia neurosensorial', 'Paladar hendido'], 0,
        'Es más frecuente cuando hay varias suturas cerradas.'),
      q('pat-csn-5', 'craniosinostosis', 'Un bebé con un lado de la nuca aplanado por dormir siempre del mismo lado y suturas abiertas tiene:',
        ['Craniosinostosis lambdoidea', 'Plagiocefalia posicional', 'Trigonocefalia', 'Escafocefalia'], 1,
        'Es mucho más frecuente que la sinostosis lambdoidea verdadera.'),
    ],
  },
  fuentes: [F.csGpc],
}

const DISOSTOSIS_CLEIDOCRANEAL: Patologia = {
  id: 'disostosis-cleidocraneal',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Disostosis cleidocraneal',
  aka: 'Displasia cleidocraneal',
  ambito: 'Huesos y dientes',
  resumen:
    'Displasia que afecta sobre todo a los huesos y los dientes: clavículas pequeñas o ausentes, cráneo y suturas que maduran tarde (las fontanelas pueden quedar abiertas toda la vida) y anomalías dentales. Se estima en 1 por millón y probablemente está subdiagnosticada. La causa el gen RUNX2, el «interruptor maestro» del desarrollo de huesos y dientes; es autosómica dominante y algunos casos son variantes nuevas.',
  sections: [
    {
      id: 'ccd-1',
      title: 'Cuadro clínico y genética',
      blocks: [
        {
          type: 'list',
          items: [
            'Clavículas hipoplásicas o ausentes: los hombros pueden juntarse por delante.',
            'Cierre tardío de fontanelas y suturas, con abombamiento de los huesos frontales, parietales y occipitales; las fontanelas pueden no cerrarse nunca.',
            'Alteraciones dentales.',
            'Talla menor que la de sus familiares.',
          ],
        },
        {
          type: 'table',
          data: {
            headers: ['Dato', 'Valor'],
            rows: [
              ['Gen', 'RUNX2: regula los genes del desarrollo de huesos y dientes'],
              ['Herencia', 'Autosómica dominante: basta una copia alterada'],
              ['Frecuencia', '≈ 1 por millón (probablemente subdiagnosticada)'],
            ],
          },
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-esqueleto-axial', sectionId: 'eax-10', label: 'Displasias esqueléticas', porQue: 'Fontanelas que cierran tarde y clavículas ausentes, vistas en clase.' },
    { materia: 'Embriología', topicId: 'embriologia-esqueleto-axial', sectionId: 'eax-4', label: 'Suturas y fontanelas del recién nacido', porQue: 'Cuándo cierra normalmente cada fontanela.' },
  ],
  atlas: [ATLAS_ESQ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Niño de 4 años, más bajo que sus primos, con la frente abombada y la fontanela anterior todavía abierta. Puede juntar los hombros frente al pecho. Su mamá tiene rasgos parecidos.',
    preguntas: [
      q('pat-ccd-1', 'disostosis-cleidocraneal', '¿Cuál es el diagnóstico más probable?',
        ['Acondroplasia', 'Hipotiroidismo congénito', 'Craniosinostosis', 'Disostosis cleidocraneal'], 3,
        'Clavículas que faltan y fontanela abierta a los 4 años.', 'easy'),
      q('pat-ccd-2', 'disostosis-cleidocraneal', '¿Por qué puede juntar los hombros por delante?',
        ['Porque sus clavículas son pequeñas o faltan', 'Por laxitud del deltoides', 'Por una costilla cervical', 'Por escoliosis'], 0,
        'Sin clavícula, la cintura escapular se mueve hacia adelante.'),
      q('pat-ccd-3', 'disostosis-cleidocraneal', '¿Qué gen está alterado?',
        ['FGFR3', 'TCOF1', 'RUNX2', 'TWIST1'], 2,
        'Es el regulador maestro del desarrollo de huesos y dientes.'),
      q('pat-ccd-4', 'disostosis-cleidocraneal', 'Con la mamá afectada, ¿qué herencia es la más probable?',
        ['Autosómica recesiva', 'Autosómica dominante', 'Ligada al X recesiva', 'Mitocondrial'], 1,
        'Basta una copia alterada; también hay casos por variantes nuevas.'),
      q('pat-ccd-5', 'disostosis-cleidocraneal', '¿Qué otra estructura suele afectarse además de los huesos?',
        ['Los riñones', 'El corazón', 'El oído interno', 'Los dientes'], 3,
        'RUNX2 regula también el desarrollo dental.'),
    ],
  },
  fuentes: [F.ccdMedline],
}

export const FICHAS_MATERIAS_14: Patologia[] = [ACONDROPLASIA, CRANIOSINOSTOSIS, DISOSTOSIS_CLEIDOCRANEAL]
