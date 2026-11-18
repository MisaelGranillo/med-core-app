/* Patologías por materia (decimotercer lote) — Embriología: cabeza y cuello
 * (labio y paladar hendidos, quiste del conducto tirogloso, quiste y fístula
 * branquial y síndrome de Treacher Collins). No se encontró GPC mexicana vigente
 * en línea para estas fichas: se usan una revisión mexicana, CDC, Manual Merck,
 * MedlinePlus y una serie quirúrgica. Solo datos verificados en esas fuentes. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  lphRevision: { codigo: 'Acta Méd Grupo Ángeles 2019', titulo: 'Palmero Picazo J, Rodríguez Gallegos MF. Labio y paladar hendido. Conceptos actuales', url: 'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1870-72032019000400372' },
  lphCdc: { codigo: 'CDC', titulo: 'About Cleft Lip and Cleft Palate (Centers for Disease Control and Prevention)', url: 'https://www.cdc.gov/birth-defects/about/cleft-lip-cleft-palate.html' },
  cuelloMerck: { codigo: 'Manual Merck', titulo: 'Neck Mass (Merck Manual, versión profesional)', url: 'https://www.merckmanuals.com/professional/ear,-nose,-and-throat-disorders/approach-to-the-patient-with-nasal-and-pharyngeal-symptoms/neck-mass' },
  sistrunk: { codigo: 'Head Neck 2015', titulo: 'Thyroglossal duct cyst: Sistrunk procedure frente a escisión simple (serie de 207 pacientes)', url: 'https://pubmed.ncbi.nlm.nih.gov/24985922/' },
  ectopica: { codigo: 'An ORL Mex 2011', titulo: 'Becerril Ramírez PB y cols. Tiroides ectópica. Experiencia de 15 años del Hospital General Dr. Manuel Gea González', url: 'https://www.medigraphic.com/pdfs/anaotomex/aom-2011/aom114b.pdf' },
  branquialMedline: { codigo: 'MedlinePlus', titulo: 'Branchial cleft cyst (Enciclopedia médica MedlinePlus)', url: 'https://medlineplus.gov/ency/article/001396.htm' },
  tcsMedline: { codigo: 'MedlinePlus Genetics', titulo: 'Treacher Collins syndrome (Biblioteca Nacional de Medicina de EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/treacher-collins-syndrome/' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

const ATLAS_CC = { id: 'embriologia-cabeza-cuello', title: 'Cabeza y cuello: aparato faríngeo y cara' }

/* ── Embriología ────────────────────────────────────────────────── */

const LABIO_PALADAR: Patologia = {
  id: 'labio-paladar-hendido',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Labio y paladar hendidos',
  aka: 'Fisuras labiopalatinas · incluye la secuencia de Pierre Robin',
  ambito: 'Cara y paladar',
  resumen:
    'Es la malformación craneofacial congénita más frecuente. El labio se forma entre las semanas 4 y 7 y el paladar entre la 6 y la 9; una fusión incompleta deja una fisura. En México se reporta entre 1 de cada 2 000 y 1 de cada 5 000 nacimientos; en Estados Unidos, 1 de cada 1 031 tiene labio hendido con o sin paladar hendido y 1 de cada 1 563 solo paladar hendido. Afecta la alimentación, el oído, el habla y los dientes, y se corrige con cirugía dentro de un equipo multidisciplinario.',
  sections: [
    {
      id: 'lph-1',
      title: 'Qué es y cómo se clasifica',
      blocks: [
        {
          type: 'comparison',
          title: 'El foramen incisivo divide las fisuras',
          left: { title: 'ANTERIORES (labio y maxilar hendidos)', items: ['Falla la fusión de la prominencia MAXILAR con la NASAL MEDIAL', 'Unilateral o bilateral; completa o incompleta'] },
          right: { title: 'POSTERIORES (paladar hendido)', items: ['Las CRESTAS PALATINAS no se fusionan entre sí ni con el tabique nasal', 'Puede llegar a la úvula; existe la forma SUBMUCOSA, cubierta por mucosa'] },
        },
        {
          type: 'list',
          title: 'Factores asociados',
          items: [
            'Tabaquismo y alcohol durante el embarazo.',
            'Diabetes antes del embarazo.',
            'Algunos anticonvulsivos (fenitoína, topiramato).',
            'Deficiencias nutricionales en el primer trimestre (ácido fólico, vitamina A, vitamina B2).',
            'Componente genético; puede formar parte de síndromes como Treacher Collins o la deleción 22q11.2.',
          ],
        },
        {
          type: 'definition',
          title: 'Secuencia de Pierre Robin',
          content: 'Una mandíbula pequeña (micrognatia) desplaza la lengua hacia atrás (glosoptosis); la lengua impide que las crestas palatinas suban y se fusionen, y queda paladar hendido. Puede ser aislada, parte de un síndrome o por compresión fetal en el oligohidramnios.',
        },
      ],
    },
    {
      id: 'lph-2',
      title: 'Qué problemas causa',
      blocks: [
        {
          type: 'table',
          data: {
            headers: ['Área', 'Problema'],
            rows: [
              ['Alimentación', 'No se puede sellar la boca para succionar'],
              ['Oído', 'Otitis media recurrente e hipoacusia de transmisión'],
              ['Habla', 'Voz nasal'],
              ['Dientes', 'Piezas desalineadas'],
            ],
          },
        },
        {
          type: 'paragraph',
          content: 'DIAGNÓSTICO PRENATAL: el ultrasonido tridimensional puede detectar el labio hendido desde la semana 13; el paladar hendido es mucho más difícil de ver.',
        },
      ],
    },
    {
      id: 'lph-3',
      title: 'Tratamiento',
      blocks: [
        {
          type: 'list',
          items: [
            'Equipo multidisciplinario: cirugía plástica y maxilofacial, odontopediatría, terapia del lenguaje, pediatría y otorrinolaringología, entre otros.',
            'QUEILOPLASTIA (cierre del labio): en los primeros 3 a 6 meses en la revisión mexicana; los CDC recomiendan dentro de los primeros 12 meses.',
            'PALATOPLASTIA (cierre del paladar): la guía mexicana la recomienda antes de los 2 años; los CDC, dentro de los primeros 18 meses o antes si es posible.',
            'Después: terapia del lenguaje, vigilancia del oído y tratamiento dental; puede requerir varias cirugías a lo largo de la infancia.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-cabeza-cuello', sectionId: 'ecyc-10', label: 'Paladar primario y secundario', porQue: 'El segmento intermaxilar forma el paladar primario y las crestas palatinas el secundario; el foramen incisivo marca su unión.' },
    { materia: 'Embriología', topicId: 'embriologia-cabeza-cuello', sectionId: 'ecyc-9', label: 'Desarrollo de la cara y la nariz', porQue: 'El labio superior se forma por la fusión de las prominencias nasales mediales con las maxilares.' },
    { materia: 'Embriología', topicId: 'embriologia-dientes-craneofacial', sectionId: 'ecf-9', label: 'Fisuras faciales', porQue: 'Fisuras anteriores y posteriores al foramen incisivo vistas en clase.' },
  ],
  atlas: [ATLAS_CC],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido con una hendidura en el lado izquierdo del labio superior que llega a la nariz y al reborde alveolar. Al explorar la boca, el paladar está íntegro. La madre fumó durante el embarazo y tomó fenitoína por epilepsia.',
    preguntas: [
      q('pat-lph-1', 'labio-paladar-hendido', '¿Qué fusión falló?',
        ['Las crestas palatinas entre sí', 'La prominencia maxilar con la nasal medial izquierda', 'Las prominencias mandibulares', 'Las prominencias nasales laterales'], 1,
        'Es una fisura anterior al foramen incisivo: labio y maxilar hendidos.', 'easy'),
      q('pat-lph-2', 'labio-paladar-hendido', '¿Qué factores de riesgo tiene?',
        ['Ninguno', 'Solo genéticos', 'Tabaquismo y fenitoína durante el embarazo', 'Edad materna avanzada'], 2,
        'También la diabetes pregestacional, el alcohol y la deficiencia de ácido fólico.'),
      q('pat-lph-3', 'labio-paladar-hendido', '¿Cuándo se suele cerrar el labio?',
        ['Al nacer, en las primeras horas', 'A los 5 años', 'En la adolescencia', 'En los primeros meses de vida (3–6 meses; antes de los 12)'], 3,
        'El paladar, cuando está afectado, antes de los 18 meses a 2 años.'),
      q('pat-lph-4', 'labio-paladar-hendido', 'Si además tuviera paladar hendido, ¿qué problema de oído es frecuente?',
        ['Otitis media recurrente con hipoacusia de transmisión', 'Sordera neurosensorial', 'Otitis externa', 'Vértigo'], 0,
        'Junto con la voz nasal y la dificultad para succionar.'),
      q('pat-lph-5', 'labio-paladar-hendido', 'Un recién nacido con mandíbula muy pequeña, lengua desplazada hacia atrás y paladar hendido tiene:',
        ['Labio hendido bilateral', 'Secuencia de Pierre Robin', 'Fisura submucosa aislada', 'Microsomía hemifacial'], 1,
        'Micrognatia → glosoptosis → las crestas palatinas no se fusionan.'),
    ],
  },
  fuentes: [F.lphRevision, F.lphCdc],
}

const QUISTE_TIROGLOSO: Patologia = {
  id: 'quiste-tirogloso',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Quiste del conducto tirogloso',
  aka: 'Quiste tirogloso · fístula tiroglosa',
  ambito: 'Línea media del cuello',
  resumen:
    'Resto del conducto tirogloso, el trayecto por el que la tiroides baja desde el foramen ciego de la lengua hasta delante de la tráquea. Es una masa de la LÍNEA MEDIA, no dolorosa, que suele aparecer en la infancia o la adolescencia y sube al deglutir. Puede infectarse y abrirse como fístula. Se trata con la operación de Sistrunk, que reduce mucho las recurrencias.',
  sections: [
    {
      id: 'qtg-1',
      title: 'Cómo se reconoce',
      blocks: [
        {
          type: 'list',
          items: [
            'Masa en la línea media o muy cerca, no dolorosa; cerca de la mitad está junto al hioides o por debajo de él; también en la base de la lengua o junto al cartílago tiroides.',
            'SUBE AL DEGLUTIR, porque el trayecto está unido al hioides y a la base de la lengua.',
            'Puede notarse desde el nacimiento, aunque suele aparecer en la infancia o la adolescencia y a veces más tarde.',
            'Si se infecta duele, se enrojece y puede romperse: así se forman casi todas las fístulas tiroglosas.',
            'Es firme pero no pétreo; la malignización es rara.',
          ],
        },
        {
          type: 'comparison',
          title: 'Frente al quiste branquial',
          left: { title: 'Quiste TIROGLOSO', items: ['Línea media', 'Conducto tirogloso', 'Sube al deglutir'] },
          right: { title: 'Quiste BRANQUIAL', items: ['Lateral, anterior al esternocleidomastoideo', 'Seno cervical (hendiduras 2.ª a 4.ª)', 'No sube al deglutir'] },
        },
      ],
    },
    {
      id: 'qtg-2',
      title: 'Estudio y tratamiento',
      blocks: [
        {
          type: 'list',
          items: [
            'En niños se prefiere el ULTRASONIDO para no radiar; la tomografía o la resonancia sirven si hay que ver su relación con otras estructuras.',
            'Antes de operar se confirma que existe una tiroides normal (incluso con gammagrafía): a veces la masa es tejido tiroideo ectópico, que puede ser la única tiroides del paciente.',
            'Si está infectado, primero se trata la infección.',
            'OPERACIÓN DE SISTRUNK: se extirpa el quiste con todo su trayecto y la porción central del hioides. En una serie de 207 pacientes, la recurrencia fue de 5.3 % con Sistrunk y de 55.6 % con la escisión simple del quiste.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-cabeza-cuello', sectionId: 'ecyc-8', label: 'Glándula tiroides', porQue: 'La tiroides baja desde el foramen ciego por el conducto tirogloso; si el conducto no desaparece, queda el quiste.' },
    { materia: 'Embriología', topicId: 'embriologia-dientes-craneofacial', sectionId: 'ecf-7', label: 'Quistes y fístulas del cuello', porQue: 'Diferencias entre el quiste tirogloso y el cervical vistas en clase.' },
  ],
  atlas: [ATLAS_CC],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Niña de 6 años con una masa de 2 cm en la línea media del cuello, justo debajo del hioides, que su mamá nota desde hace un año. No duele. Al pedirle que trague, la masa sube.',
    preguntas: [
      q('pat-qtg-1', 'quiste-tirogloso', '¿Cuál es el diagnóstico más probable?',
        ['Quiste branquial', 'Ganglio cervical', 'Quiste del conducto tirogloso', 'Bocio'], 2,
        'Masa de la línea media, junto al hioides, que sube al deglutir.', 'easy'),
      q('pat-qtg-2', 'quiste-tirogloso', '¿De qué estructura embrionaria es resto?',
        ['Del seno cervical', 'De la tercera bolsa faríngea', 'Del cuerpo ultimobranquial', 'Del conducto tirogloso'], 3,
        'Trayecto de descenso de la tiroides desde el foramen ciego.'),
      q('pat-qtg-3', 'quiste-tirogloso', '¿Qué conviene confirmar antes de operar?',
        ['Que existe una tiroides normal', 'Que no hay paladar hendido', 'El cariotipo', 'La audición'], 0,
        'A veces la masa es tejido tiroideo ectópico, el único que tiene el paciente.'),
      q('pat-qtg-4', 'quiste-tirogloso', '¿Qué operación reduce más las recurrencias?',
        ['Drenaje del quiste', 'Operación de Sistrunk: quiste, trayecto y porción central del hioides', 'Escisión simple del quiste', 'Tiroidectomía total'], 1,
        'En una serie, 5.3 % de recurrencia contra 55.6 % con escisión simple.'),
      q('pat-qtg-5', 'quiste-tirogloso', 'Si el quiste estuviera infectado, ¿qué se hace primero?',
        ['Operar de inmediato', 'Biopsia', 'Tratar la infección', 'Radioterapia'], 2,
        'Después, la cirugía.'),
    ],
  },
  fuentes: [F.cuelloMerck, F.sistrunk, F.ectopica],
}

const QUISTE_BRANQUIAL: Patologia = {
  id: 'quiste-branquial',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Quiste y fístula branquial (cervical)',
  aka: 'Quiste de hendidura branquial · seno cervical persistente',
  ambito: 'Cara lateral del cuello',
  resumen:
    'Defecto congénito por persistencia del SENO CERVICAL, el espacio que queda cuando el segundo arco faríngeo cubre las hendiduras 2.ª a 4.ª. Aparece como una masa o un orificio en la cara LATERAL del cuello, anterior al esternocleidomastoideo y a menudo cerca del ángulo de la mandíbula. Se ve sobre todo en niños, se infecta con frecuencia y se trata con cirugía.',
  sections: [
    {
      id: 'qbr-1',
      title: 'Cómo se reconoce',
      blocks: [
        {
          type: 'list',
          items: [
            'Masa lateral, sobre el borde anterior del esternocleidomastoideo; a menudo con un SENO o FÍSTULA.',
            'Pequeños orificios, bultos o apéndices de piel a uno o ambos lados del cuello o bajo la mandíbula, con salida de líquido.',
            'Las fístulas EXTERNAS (a la piel) son más frecuentes que las INTERNAS (hacia la región amigdalina).',
            'Se infecta: duele, se enrojece y supura. Si es grande puede obstruir parte de la vía aérea y causar respiración ruidosa.',
            'Suele verse en niños; a veces hasta la edad adulta.',
          ],
        },
      ],
    },
    {
      id: 'qbr-2',
      title: 'Estudio y tratamiento',
      blocks: [
        {
          type: 'list',
          items: [
            'Imagen: ULTRASONIDO en niños; TOMOGRAFÍA en adultos.',
            'Si está infectado: antibióticos primero.',
            'CIRUGÍA para extirparlo y evitar infecciones repetidas, una vez controlada la infección. Las infecciones previas hacen más difícil quitarlo.',
            'El resultado de la cirugía suele ser bueno.',
          ],
        },
        {
          type: 'note',
          content: 'En un adulto, una masa lateral del cuello dura, fija o mayor de 1.5 cm obliga a descartar cáncer antes de pensar en un quiste congénito.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-cabeza-cuello', sectionId: 'ecyc-5', label: 'Hendiduras faríngeas y seno cervical', porQue: 'El segundo arco cubre las hendiduras 2.ª a 4.ª y forma el seno cervical; si persiste, queda el quiste.' },
    { materia: 'Embriología', topicId: 'embriologia-dientes-craneofacial', sectionId: 'ecf-7', label: 'Quistes y fístulas del cuello', porQue: 'Fístulas externas e internas y diferencia con el quiste tirogloso.' },
  ],
  atlas: [ATLAS_CC],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Niño de 6 años con aumento de volumen intermitente en el lado derecho del cuello, por delante del esternocleidomastoideo y cerca del ángulo de la mandíbula. Ha tenido tres infecciones; hoy sale pus por un pequeño orificio en la piel. Tiroides y estudios inmunológicos normales.',
    preguntas: [
      q('pat-qbr-1', 'quiste-branquial', '¿Cuál es el diagnóstico más probable?',
        ['Quiste branquial con fístula externa', 'Quiste tirogloso', 'Linfoma', 'Parotiditis'], 0,
        'Lateral, anterior al esternocleidomastoideo, con fístula a la piel.', 'easy'),
      q('pat-qbr-2', 'quiste-branquial', '¿Qué estructura embrionaria persistió?',
        ['El conducto tirogloso', 'El seno cervical', 'La primera bolsa', 'El foramen ciego'], 1,
        'El segundo arco cubre las hendiduras 2.ª a 4.ª y forma el seno cervical.'),
      q('pat-qbr-3', 'quiste-branquial', '¿Qué estudio de imagen se prefiere en este niño?',
        ['Tomografía', 'Resonancia', 'Ultrasonido', 'Radiografía de tórax'], 2,
        'Evita la radiación; en adultos se usa tomografía.'),
      q('pat-qbr-4', 'quiste-branquial', '¿Cuál es el manejo?',
        ['Solo observación', 'Radioterapia', 'Drenaje repetido', 'Antibióticos para la infección y después extirpación quirúrgica'], 3,
        'Las infecciones repetidas dificultan la cirugía.'),
      q('pat-qbr-5', 'quiste-branquial', '¿Qué tipo de fístula es más frecuente en estos quistes?',
        ['Externa, hacia la piel', 'Interna, hacia la amígdala', 'Hacia el mediastino', 'Hacia el conducto auditivo'], 0,
        'Las internas existen, pero son menos frecuentes.'),
    ],
  },
  fuentes: [F.branquialMedline, F.cuelloMerck],
}

const TREACHER_COLLINS: Patologia = {
  id: 'treacher-collins',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Síndrome de Treacher Collins',
  aka: 'Disostosis mandibulofacial',
  ambito: 'Primer y segundo arcos faríngeos',
  resumen:
    'Trastorno genético del desarrollo de los huesos y tejidos de la cara, derivados de la cresta neural de los primeros arcos faríngeos. Afecta a cerca de 1 de cada 50 000 personas. Da pómulos poco desarrollados, mandíbula y mentón muy pequeños, orejas malformadas con hipoacusia y coloboma del párpado inferior. La inteligencia suele ser normal. La gravedad varía mucho; en los casos graves puede comprometer la vía aérea.',
  sections: [
    {
      id: 'tcs-1',
      title: 'Genética',
      blocks: [
        {
          type: 'table',
          data: {
            headers: ['Gen', 'Proporción de casos', 'Herencia'],
            rows: [
              ['TCOF1 (5q32; proteína treacle)', '81–93 %', 'Autosómica dominante'],
              ['POLR1D', '≈ 2 % junto con POLR1C', 'Autosómica dominante'],
              ['POLR1C', '≈ 2 % junto con POLR1D', 'Autosómica recesiva'],
            ],
          },
        },
        {
          type: 'note',
          content: 'Cerca del 60 % de los casos dominantes son variantes nuevas: ninguno de los padres tiene el síndrome.',
        },
      ],
    },
    {
      id: 'tcs-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Pómulos (cigomáticos) poco desarrollados y mandíbula y mentón muy pequeños.',
            'Hendiduras palpebrales inclinadas hacia abajo, pestañas escasas y COLOBOMA del párpado inferior.',
            'Orejas ausentes, pequeñas o malformadas.',
            'HIPOACUSIA en cerca de la mitad, por defectos de los huesecillos del oído medio o del conducto auditivo.',
            'Paladar hendido en algunos.',
            'En los casos graves, problemas de la vía aérea que pueden poner en riesgo la vida.',
            'Inteligencia habitualmente normal.',
          ],
        },
        {
          type: 'comparison',
          title: 'Frente a la microsomía hemifacial (Goldenhar)',
          left: { title: 'Treacher Collins', items: ['BILATERAL y simétrico', 'Genético (TCOF1 en la mayoría)', 'Coloboma del párpado inferior'] },
          right: { title: 'Microsomía hemifacial', items: ['UNILATERAL', 'Microtia, dermoides oculares y hemivértebras', 'Hasta el 50 % con cardiopatía'] },
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-dientes-craneofacial', sectionId: 'ecf-8', label: 'Defectos de la cresta neural y síndromes del primer arco', porQue: 'Treacher Collins, Pierre Robin, microsomía hemifacial y deleción 22q11.2 vistos en clase.' },
    { materia: 'Embriología', topicId: 'embriologia-cabeza-cuello', sectionId: 'ecyc-3', label: 'Derivados de los arcos faríngeos', porQue: 'Mandíbula, cigomáticos, martillo y yunque vienen del primer arco; el estribo, del segundo.' },
    { materia: 'Embriología', topicId: 'embriologia-cabeza-cuello', sectionId: 'ecyc-1', label: 'De dónde salen los tejidos de cabeza y cuello', porQue: 'El esqueleto de la cara (viscerocráneo) deriva de la cresta neural.' },
  ],
  atlas: [ATLAS_CC],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido con pómulos aplanados, mandíbula pequeña, hendiduras palpebrales inclinadas hacia abajo, una muesca en ambos párpados inferiores y orejas pequeñas y malformadas. Su papá tiene rasgos parecidos pero más leves.',
    preguntas: [
      q('pat-tcs-1', 'treacher-collins', '¿Cuál es el diagnóstico más probable?',
        ['Microsomía hemifacial', 'Deleción 22q11.2', 'Síndrome de Treacher Collins', 'Secuencia de Pierre Robin aislada'], 2,
        'Afectación bilateral de estructuras del primer arco con coloboma del párpado inferior.', 'easy'),
      q('pat-tcs-2', 'treacher-collins', '¿Qué gen está alterado con más frecuencia?',
        ['POLR1C', 'FGFR3', 'TBX1', 'TCOF1'], 3,
        'Explica el 81–93 % de los casos; codifica la proteína treacle.'),
      q('pat-tcs-3', 'treacher-collins', 'Si el gen es TCOF1, ¿cuál es su herencia?',
        ['Autosómica dominante', 'Autosómica recesiva', 'Ligada al X', 'Mitocondrial'], 0,
        'Con el papá afectado, el riesgo para cada hijo es del 50 %.'),
      q('pat-tcs-4', 'treacher-collins', '¿Qué problema de audición tiene la mitad de los pacientes?',
        ['Ninguno', 'Hipoacusia por defectos del oído medio o del conducto auditivo', 'Sordera por daño del nervio auditivo', 'Hiperacusia'], 1,
        'Los huesecillos derivan de los arcos 1 y 2.'),
      q('pat-tcs-5', 'treacher-collins', '¿Qué lo distingue de la microsomía hemifacial?',
        ['Que es bilateral y simétrico', 'Que solo afecta un lado', 'Que siempre tiene cardiopatía', 'Que no afecta las orejas'], 0,
        'La microsomía hemifacial es unilateral.'),
    ],
  },
  fuentes: [F.tcsMedline],
}

export const FICHAS_MATERIAS_13: Patologia[] = [LABIO_PALADAR, QUISTE_TIROGLOSO, QUISTE_BRANQUIAL, TREACHER_COLLINS]
