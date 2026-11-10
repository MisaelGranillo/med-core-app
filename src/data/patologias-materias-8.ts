/* Patologías por materia (octavo lote) — Embriología: tercera semana y periodo
 * embrionario (teratoma sacrococcígeo, holoprosencefalia, herpes zóster y
 * dermatomas, neuroblastoma y gastrosquisis). Mismas reglas que los lotes
 * anteriores: GPC mexicana del Catálogo Maestro cuando existe y es accesible, y
 * organismos internacionales como complemento; solo datos verificados. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  sct: { codigo: 'J Korean Neurosurg Soc 2021', titulo: 'Sacrococcygeal teratoma: a tumor at the center of embryogenesis. J Korean Neurosurg Soc. 2021;64(3):406–413', url: 'https://doi.org/10.3340/jkns.2021.0015' },
  hpe: { codigo: 'Children 2023', titulo: 'Holoprosencephaly: review of embryology, clinical phenotypes, etiology and management. Children (Basel). 2023;10(4):647', url: 'https://doi.org/10.3390/children10040647' },
  hzCdc: { codigo: 'CDC', titulo: 'Clinical overview of shingles (herpes zoster). Centros para el Control y la Prevención de Enfermedades (EE. UU.)', url: 'https://www.cdc.gov/shingles/hcp/clinical-overview/index.html' },
  hzEdf: { codigo: 'EDF/EADV 2017', titulo: 'European consensus-based (S2k) guideline on the management of herpes zoster, part 2: treatment. J Eur Acad Dermatol Venereol. 2017;31(1):20–29', url: 'https://doi.org/10.1111/jdv.13957' },
  nb: { codigo: 'NCI PDQ', titulo: 'Neuroblastoma treatment (PDQ®), versión para profesionales de la salud. Instituto Nacional del Cáncer (EE. UU.)', url: 'https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq' },
  gsCdc: { codigo: 'CDC', titulo: 'About gastroschisis. Centros para el Control y la Prevención de Enfermedades (EE. UU.)', url: 'https://www.cdc.gov/birth-defects/about/gastroschisis.html' },
  gsRev: { codigo: 'Children 2020', titulo: 'Gastroschisis: a state-of-the-art review. Children (Basel). 2020;7(12):302', url: 'https://doi.org/10.3390/children7120302' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Embriología ────────────────────────────────────────────────── */

const TERATOMA: Patologia = {
  id: 'teratoma-sacrococcigeo',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Teratoma sacrococcígeo',
  aka: 'Tumor de células germinales de la región sacrococcígea',
  ambito: 'Línea primitiva y células germinales',
  resumen:
    'Tumor congénito de la región sacrococcígea, con tejidos de las tres capas germinales. Es el tumor más frecuente del recién nacido (1 de cada 20 000 a 40 000 nacimientos) y predomina en niñas. Casi siempre es benigno al nacer, pero el riesgo de malignidad crece si se retrasa la cirugía, que debe ser completa e incluir el cóccix.',
  sections: [
    {
      id: 'tsc-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La región sacrococcígea corresponde al sitio de la línea primitiva y el nodo primitivo. Si ahí persisten células pluripotenciales, o si células germinales primordiales que migraban del saco vitelino a las crestas gonadales quedan en el camino, pueden formar un teratoma con tejidos de las tres capas: piel, pelo, dientes, cartílago, hueso, músculo, tejido nervioso o epitelio intestinal.',
        },
        {
          type: 'table',
          title: 'Clasificación de Altman',
          data: {
            headers: ['Tipo', 'Localización', 'Frecuencia aproximada'],
            rows: [
              ['I', 'Casi todo externo', '≈ 45 %'],
              ['II', 'Externo con una porción pélvica importante', '≈ 35 %'],
              ['III', 'Sobre todo dentro de la pelvis', '≈ 10 %'],
              ['IV', 'Presacro, sin componente externo', '≈ 10 %'],
            ],
          },
        },
      ],
    },
    {
      id: 'tsc-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Entre 25 y 50 % se diagnostican antes del nacimiento por ultrasonido.',
            'Los tumores grandes y muy vascularizados pueden causar insuficiencia cardiaca de alto gasto, hidrops fetal, polihidramnios y parto pretérmino; el diagnóstico antes de las 30 semanas es de peor pronóstico.',
            'Al nacer, la mayoría son teratomas maduros o inmaduros. Cuando el diagnóstico es tardío (después de los 2 meses) o la masa es sobre todo sólida, aumenta la probabilidad de un componente maligno, casi siempre tumor del saco vitelino.',
            'Los tipos III y IV no se ven por fuera y pueden detectarse tarde, por estreñimiento, retención urinaria o una masa al tacto rectal.',
          ],
        },
      ],
    },
    {
      id: 'tsc-3',
      title: 'Tratamiento y seguimiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Resección quirúrgica completa y temprana, SIEMPRE con el cóccix y sin romper el tumor; dejar el cóccix aumenta la recurrencia.',
            'Los tipos I y II se operan por vía sacra; los III grandes pueden requerir además vía abdominal.',
            'Recurren entre 10 y 15 %, a menudo como tumor maligno, sobre todo entre los 6 y 36 meses.',
            'Seguimiento con tacto rectal y alfafetoproteína cada 3 meses durante 3 a 4 años; la AFP del recién nacido es alta de forma normal, así que se interpreta con cuidado.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-tercera-semana', sectionId: 'ets-2', label: 'Línea primitiva e invaginación', porQue: 'Por la línea primitiva pasan las células que forman las tres capas; si quedan restos, son pluripotenciales.' },
    { materia: 'Embriología', topicId: 'embriologia-tercera-semana', sectionId: 'ets-9', label: 'Clínica de la gastrulación', porQue: 'El teratoma es lo contrario de la disgenesia caudal: la línea primitiva persiste en lugar de retirarse antes de tiempo.' },
    { materia: 'Embriología', topicId: 'embriologia-periodo-embrionario', sectionId: 'epe-9', label: 'Endodermo', porQue: 'Las células germinales primordiales nacen en la pared del saco vitelino y migran a las gónadas; las que se pierden pueden formar teratomas.' },
  ],
  atlas: [
    { id: 'embriologia-tercera-semana', title: 'Tercera semana y periodo embrionario' },
    { id: 'embriologia-desarrollo-temprano', title: 'Desarrollo temprano' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacida de término con una masa de 8 cm en la región sacrococcígea, cubierta de piel, que desplaza el ano hacia adelante. El ultrasonido muestra un componente quístico y otro sólido, con calcificaciones, y una pequeña porción dentro de la pelvis.',
    preguntas: [
      q('pat-tsc-1', 'teratoma-sacrococcigeo', '¿Cuál es el diagnóstico más probable?',
        ['Mielomeningocele', 'Teratoma sacrococcígeo', 'Lipoma', 'Absceso perianal'], 1,
        'Masa sacrococcígea congénita con componentes quístico y sólido y calcificaciones (dientes o hueso).', 'easy'),
      q('pat-tsc-2', 'teratoma-sacrococcigeo', '¿De qué estructura embrionaria se originan sus células?',
        ['Notocorda', 'Tubo neural', 'Restos de la línea primitiva o células germinales primordiales', 'Mesodermo intermedio'], 2,
        'Son células pluripotenciales que forman tejidos de las tres capas germinales.'),
      q('pat-tsc-3', 'teratoma-sacrococcigeo', 'Externo con una porción pélvica importante. ¿Qué tipo de Altman es?',
        ['Tipo II', 'Tipo I', 'Tipo III', 'Tipo IV'], 0,
        'El I es casi todo externo, el III sobre todo pélvico y el IV presacro sin parte externa.'),
      q('pat-tsc-4', 'teratoma-sacrococcigeo', '¿Qué debe incluir la cirugía?',
        ['Solo la porción externa', 'Biopsia y observación', 'Quimioterapia previa en todos los casos', 'Resección completa del tumor con el cóccix'], 3,
        'Dejar el cóccix se asocia con recurrencia.'),
      q('pat-tsc-5', 'teratoma-sacrococcigeo', '¿Qué marcador se usa en el seguimiento para detectar recurrencia maligna?',
        ['Alfafetoproteína', 'Antígeno carcinoembrionario', 'β-hCG materna', 'Calcitonina'], 0,
        'Se mide cada 3 meses durante 3 a 4 años, junto con el tacto rectal.'),
    ],
  },
  fuentes: [F.sct],
}

const HOLOPROSENCEFALIA: Patologia = {
  id: 'holoprosencefalia',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Holoprosencefalia',
  aka: 'Falta de división del prosencéfalo',
  ambito: 'Línea media del encéfalo y la cara',
  resumen:
    'El prosencéfalo no se divide bien en dos hemisferios. Se presenta en cerca de 1 de cada 250 concepciones, pero muchas se pierden: en nacidos vivos es de 1 en 8 000 a 16 000. La gravedad del encéfalo se refleja en la cara, del hipotelorismo a la ciclopía. Se asocia con trisomía 13, mutaciones de SHH, diabetes materna y alcohol.',
  sections: [
    {
      id: 'hpe-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'table',
          title: 'Formas, de la más grave a la más leve',
          data: {
            headers: ['Forma', 'Separación de los hemisferios'],
            rows: [
              ['Alobar', 'Ninguna o casi ninguna; un solo ventrículo en la línea media'],
              ['Semilobar', 'No se separan las porciones anteriores'],
              ['Lobar', 'Solo quedan sin separar las partes más anteriores e inferiores de los lóbulos frontales'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Causas',
          items: [
            'Cromosómicas: la más frecuente es la trisomía 13 (síndrome de Patau).',
            'Genéticas: SHH (sonic hedgehog) es el gen aislado más frecuente.',
            'Ambientales: diabetes materna y consumo de alcohol en las primeras semanas, que daña la región anterior de la línea media del disco.',
          ],
        },
      ],
    },
    {
      id: 'hpe-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          title: '«La cara predice el encéfalo»',
          items: [
            'Formas graves: ciclopía (un ojo) con probóscide, etmocefalia, cebocefalia (nariz con una sola fosa).',
            'Formas intermedias: hipotelorismo con labio hendido medio.',
            'Formas leves: hipotelorismo o un incisivo central único.',
          ],
        },
        {
          type: 'list',
          items: [
            'Problemas frecuentes: discapacidad intelectual, convulsiones, hidrocefalia, dificultad para alimentarse y alteraciones hipotálamo-hipofisarias, como la diabetes insípida.',
            'Se sospecha en el ultrasonido prenatal y se confirma con resonancia magnética; se ofrece cariotipo y estudio genético.',
            'La forma alobar rara vez sobrevive el primer año; las lobares leves pueden llegar a la edad adulta.',
          ],
        },
      ],
    },
    {
      id: 'hpe-3',
      title: 'Manejo: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'No hay tratamiento curativo: el manejo es de sostén y multidisciplinario (neurología, endocrinología, nutrición, cirugía de labio y paladar).',
            'Vigilar sodio y agua por la diabetes insípida; tratar las convulsiones y la hidrocefalia.',
            'Asesoramiento genético a la familia por el riesgo de recurrencia, que depende de la causa.',
            'Prevención: control de la diabetes antes del embarazo y evitar el alcohol.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-tercera-semana', sectionId: 'ets-9', label: 'Clínica de la gastrulación', porQue: 'El alcohol daña la región anterior de la línea media del disco, que forma el área óptica y el encéfalo anterior.' },
    { materia: 'Embriología', topicId: 'embriologia-tercera-semana', sectionId: 'ets-6', label: 'Mapa del destino', porQue: 'Cada región del disco tiene un destino: la línea media anterior forma las estructuras craneofaciales centrales.' },
    { materia: 'Embriología', topicId: 'embriologia-tercera-semana', sectionId: 'ets-4', label: 'Membranas orofaríngea y cloacal y placa precordal', porQue: 'La placa precordal induce el prosencéfalo, la vesícula que no se divide.' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-numericas', sectionId: 'ean-4', label: 'Edwards, Patau y diagnóstico prenatal', porQue: 'La trisomía 13 es la causa cromosómica más frecuente.' },
  ],
  atlas: [
    { id: 'embriologia-tercera-semana', title: 'Tercera semana y periodo embrionario' },
    { id: 'embriologia-anomalias-cromosomicas', title: 'Anomalías cromosómicas' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Mujer de 31 años con diabetes tipo 1 mal controlada antes del embarazo. En el ultrasonido de las 20 semanas se observa un solo ventrículo cerebral en la línea media, sin separación de los hemisferios, y los ojos muy juntos.',
    preguntas: [
      q('pat-hpe-1', 'holoprosencefalia', '¿Cuál es el diagnóstico más probable?',
        ['Hidrocefalia por estenosis del acueducto', 'Anencefalia', 'Holoprosencefalia alobar', 'Espina bífida'], 2,
        'Un solo ventrículo sin separación de los hemisferios define la forma alobar.', 'easy'),
      q('pat-hpe-2', 'holoprosencefalia', '¿Qué factor de riesgo materno tiene?',
        ['Edad de 31 años', 'Diabetes mal controlada', 'Primer embarazo', 'Ninguno'], 1,
        'La diabetes materna, como el alcohol, se asocia con defectos de la línea media.'),
      q('pat-hpe-3', 'holoprosencefalia', '¿Qué hallazgo facial se espera en las formas leves?',
        ['Hipertelorismo', 'Ciclopía', 'Paladar intacto con ojos separados', 'Hipotelorismo o un incisivo central único'], 3,
        'En la holoprosencefalia «la cara predice el encéfalo»: los ojos tienden a juntarse.'),
      q('pat-hpe-4', 'holoprosencefalia', '¿Qué trisomía es la causa cromosómica más frecuente?',
        ['Trisomía 13', 'Trisomía 21', 'Trisomía 18', 'Trisomía X'], 0,
        'Su cuadro es más craneofacial, con holoprosencefalia y labio y paladar hendidos.'),
      q('pat-hpe-5', 'holoprosencefalia', 'Un niño con holoprosencefalia lobar tiene poliuria y sodio alto. ¿Qué sospechar?',
        ['Diabetes mellitus', 'Insuficiencia renal', 'Diabetes insípida', 'Hipotiroidismo'], 2,
        'La alteración del eje hipotálamo-hipofisario es frecuente.'),
    ],
  },
  fuentes: [F.hpe],
}

const HERPES_ZOSTER: Patologia = {
  id: 'herpes-zoster',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Herpes zóster',
  aka: 'Culebrilla · zóster',
  ambito: 'Ganglios sensitivos y dermatomas',
  resumen:
    'Reactivación del virus varicela-zóster que quedó latente en un ganglio sensitivo después de la varicela. Produce dolor y una erupción de vesículas en franja que sigue un dermatoma, de un solo lado del cuerpo. Se trata con antivirales en las primeras 72 horas, y se previene con la vacuna recombinante.',
  sections: [
    {
      id: 'hz-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Después de la varicela, el virus varicela-zóster queda latente en los ganglios de la raíz dorsal y de los nervios craneales. Cuando la inmunidad celular baja (edad avanzada, estrés, inmunosupresión) se reactiva y viaja por el nervio a la piel que ese ganglio inerva: un DERMATOMA. Cerca de 1 de cada 3 personas lo tendrá en algún momento de su vida.',
        },
      ],
    },
    {
      id: 'hz-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Pródromo de dolor, ardor, comezón u hormigueo en la zona, días antes de la erupción.',
            'Vesículas agrupadas sobre piel enrojecida en uno o dos dermatomas vecinos, casi siempre del tronco o la cara, que NO cruzan la línea media; sanan en 2 a 4 semanas.',
            'El diagnóstico es clínico por la distribución y el aspecto de las lesiones.',
            'Las lesiones activas contagian por contacto con el líquido de las vesículas: pueden causar varicela en quien no la ha tenido ni está vacunado.',
          ],
        },
        {
          type: 'list',
          title: 'Complicaciones',
          items: [
            'Neuralgia posherpética: dolor que persiste después de que sana la erupción; es la más frecuente.',
            'Zóster oftálmico (rama oftálmica del trigémino): puede dañar la córnea y la visión; requiere valoración oftalmológica.',
            'Pérdida auditiva, encefalitis y neumonía, sobre todo en inmunodeprimidos.',
          ],
        },
      ],
    },
    {
      id: 'hz-3',
      title: 'Tratamiento y prevención: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Antiviral (aciclovir, valaciclovir o famciclovir), más eficaz si se inicia en las primeras 72 horas; se indica sobre todo en mayores de 50 años, en la cara, en casos graves y en inmunodeprimidos.',
            'Control del dolor desde el inicio.',
            'Vacuna recombinante (2 dosis) para adultos de 50 años o más y para adultos de 19 años o más con inmunosupresión.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-periodo-embrionario', sectionId: 'epe-6', label: 'Mesodermo paraxial: somitas', porQue: 'Cada dermatoma conserva la inervación de su segmento de origen: por eso la erupción dibuja una franja.' },
    { materia: 'Embriología', topicId: 'embriologia-periodo-embrionario', sectionId: 'epe-4', label: 'Células de la cresta neural', porQue: 'Los ganglios sensitivos, donde el virus queda latente, derivan de la cresta neural.' },
  ],
  atlas: [
    { id: 'embriologia-tercera-semana', title: 'Tercera semana y periodo embrionario' },
    { id: 'sistema-nervioso', title: 'Sistema Nervioso' },
    { id: 'histologia-piel', title: 'La piel' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Hombre de 68 años con ardor en el lado derecho del tórax desde hace 3 días. Hoy aparecieron vesículas agrupadas sobre piel enrojecida en una franja que va de la columna al esternón, a la altura del pezón, sin cruzar la línea media. Tuvo varicela de niño.',
    preguntas: [
      q('pat-hz-1', 'herpes-zoster', '¿Cuál es el diagnóstico más probable?',
        ['Dermatitis por contacto', 'Herpes zóster', 'Varicela', 'Impétigo'], 1,
        'Dolor previo y vesículas en franja unilateral que siguen un dermatoma.', 'easy'),
      q('pat-hz-2', 'herpes-zoster', '¿Dónde estaba latente el virus?',
        ['En la piel', 'En la médula ósea', 'En el ganglio de la raíz dorsal', 'En el músculo intercostal'], 2,
        'De ahí viaja por el nervio a la piel de su dermatoma.'),
      q('pat-hz-3', 'herpes-zoster', '¿Por qué la erupción no cruza la línea media?',
        ['Porque cada dermatoma depende de un nervio espinal de un solo lado', 'Porque el virus no tolera la piel del esternón', 'Por la presión de la ropa', 'Porque la piel de la línea media es más gruesa'], 0,
        'La inervación segmentaria se establece en el periodo embrionario, a partir de los somitas.'),
      q('pat-hz-4', 'herpes-zoster', '¿Qué tratamiento conviene iniciar hoy?',
        ['Solo crema con esteroide', 'Antibiótico oral', 'Ninguno: se resuelve solo', 'Antiviral, como valaciclovir, más analgesia'], 3,
        'Está dentro de las 72 horas y es mayor de 50 años.'),
      q('pat-hz-5', 'herpes-zoster', 'Tres meses después sigue con dolor en la misma zona, sin lesiones. ¿Qué es?',
        ['Reinfección', 'Neuralgia posherpética', 'Infarto', 'Varicela'], 1,
        'Es la complicación más frecuente; la vacuna recombinante ayuda a prevenir el zóster y sus complicaciones.'),
    ],
  },
  fuentes: [F.hzCdc, F.hzEdf],
}

const NEUROBLASTOMA: Patologia = {
  id: 'neuroblastoma',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Neuroblastoma',
  ambito: 'Cresta neural y sistema nervioso simpático',
  resumen:
    'Tumor de los precursores del sistema nervioso simpático, derivados de la cresta neural. Es el tumor sólido extracraneal más frecuente de la infancia; la edad mediana al diagnóstico es de 17 meses. Suele presentarse como una masa abdominal, casi siempre suprarrenal. El pronóstico depende de la edad, el estadio y la amplificación de MYCN.',
  sections: [
    {
      id: 'nb-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Nace de células de la cresta neural que formarían la médula suprarrenal y los ganglios simpáticos paravertebrales. El sitio primario más frecuente es la glándula SUPRARRENAL. 90 % de los casos se diagnostican antes de los 5 años.',
        },
      ],
    },
    {
      id: 'nb-2',
      title: 'Cuadro clínico y diagnóstico',
      blocks: [
        {
          type: 'list',
          title: 'Cómo se presenta',
          items: [
            'Masa abdominal: la presentación más frecuente.',
            'Equimosis periorbitarias y proptosis («ojos de mapache») por metástasis a la órbita.',
            'Dolor óseo, fiebre, anemia; hipertensión arterial.',
            'Compresión de la médula espinal en tumores paravertebrales: urgencia.',
            'Síndrome de Horner, diarrea acuosa, nódulos azulados en la piel de lactantes y el síndrome de opsoclono-mioclono.',
          ],
        },
        {
          type: 'list',
          title: 'Cómo se confirma',
          items: [
            'Tomografía o resonancia, y gammagrafía con MIBG (≈ 90 % de los tumores captan).',
            'Ácido vanilmandélico (VMA) y homovanílico (HVA) en orina: metabolitos de las catecolaminas.',
            'Biopsia para histología y biología del tumor (amplificación de MYCN).',
          ],
        },
      ],
    },
    {
      id: 'nb-3',
      title: 'Pronóstico y tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Mejor pronóstico en menores de 18 meses; peor con amplificación de MYCN.',
            'En lactantes algunos tumores REGRESAN solos; los suprarrenales pequeños en menores de 6 meses pueden vigilarse sin cirugía.',
            'El tratamiento depende del grupo de riesgo: desde observación o cirugía hasta quimioterapia, radioterapia, trasplante de células madre, ácido retinoico e inmunoterapia en alto riesgo.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-periodo-embrionario', sectionId: 'epe-4', label: 'Células de la cresta neural', porQue: 'Por la ruta ventral la cresta neural forma las neuronas simpáticas y la médula suprarrenal, donde nace el tumor.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-aminas-citocinas', sectionId: 'bha-3', label: 'Tirosina: catecolaminas, hormonas tiroideas y melanina', porQue: 'El tumor produce catecolaminas; sus metabolitos (VMA y HVA) se miden en orina.' },
  ],
  atlas: [
    { id: 'embriologia-tercera-semana', title: 'Tercera semana y periodo embrionario' },
    { id: 'bioquimica-hormonas', title: 'Hormonas y receptores' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Niño de 2 años con distensión abdominal, pérdida de peso y equimosis alrededor de ambos ojos. A la exploración, una masa dura en el flanco izquierdo que cruza la línea media. TA 118/76 mmHg, elevada para su edad.',
    preguntas: [
      q('pat-nb-1', 'neuroblastoma', '¿Cuál es el diagnóstico más probable?',
        ['Neuroblastoma', 'Quiste renal simple', 'Hernia umbilical', 'Apendicitis'], 0,
        'Masa abdominal, equimosis periorbitarias por metástasis e hipertensión en un niño pequeño.', 'easy'),
      q('pat-nb-2', 'neuroblastoma', '¿De qué población embrionaria derivan sus células?',
        ['Mesodermo intermedio', 'Endodermo', 'Cresta neural', 'Notocorda'], 2,
        'Forma la médula suprarrenal y los ganglios simpáticos.'),
      q('pat-nb-3', 'neuroblastoma', '¿Qué estudio de orina apoya el diagnóstico?',
        ['Glucosa', 'Proteínas', 'Cetonas', 'Ácido vanilmandélico y homovanílico'], 3,
        'Son metabolitos de las catecolaminas que produce el tumor.'),
      q('pat-nb-4', 'neuroblastoma', '¿Qué hallazgo biológico empeora el pronóstico?',
        ['Edad menor de 18 meses', 'Amplificación de MYCN', 'Tumor pequeño', 'Regresión espontánea'], 1,
        'La edad mayor de 18 meses y el estadio avanzado también empeoran el pronóstico.'),
      q('pat-nb-5', 'neuroblastoma', '¿Cuál es el sitio primario más frecuente?',
        ['Mediastino', 'Cuello', 'Pelvis', 'Glándula suprarrenal'], 3,
        'También aparece en ganglios simpáticos paravertebrales del tórax, el abdomen o la pelvis.'),
    ],
  },
  fuentes: [F.nb],
}

const GASTROSQUISIS: Patologia = {
  id: 'gastrosquisis',
  kind: 'ficha',
  materia: 'Embriología',
  title: 'Gastrosquisis',
  ambito: 'Pared abdominal ventral',
  resumen:
    'Defecto de la pared abdominal, casi siempre a la derecha del ombligo, por el que salen las asas intestinales sin una membrana que las cubra. Afecta a cerca de 1 de cada 2 500 recién nacidos y se asocia con madres jóvenes. Se diagnostica por ultrasonido y se repara con cirugía al nacer.',
  sections: [
    {
      id: 'gsq-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La pared ventral del cuerpo se cierra cuando los pliegues laterales, formados por la hoja somática del mesodermo de la placa lateral y el ectodermo, se encuentran en la línea media. En la gastrosquisis queda un orificio junto al cordón umbilical, casi siempre a la derecha, y el intestino sale y flota en el líquido amniótico, que lo inflama y lo engrosa.',
        },
        {
          type: 'comparison',
          title: 'Gastrosquisis frente a onfalocele',
          left: { title: 'Gastrosquisis', items: ['A un lado del ombligo, casi siempre derecho', 'SIN membrana: intestino expuesto', 'Rara vez con anomalías cromosómicas', 'Puede haber atresia intestinal'] },
          right: { title: 'Onfalocele', items: ['En el ombligo', 'Cubierto por una membrana (saco)', 'Se asocia con anomalías cromosómicas y cardiopatías'] },
        },
        {
          type: 'list',
          title: 'Factores asociados',
          items: ['Madre joven.', 'Tabaco o alcohol al inicio del embarazo.', 'Infecciones urinarias o de transmisión sexual al inicio del embarazo.'],
        },
      ],
    },
    {
      id: 'gsq-2',
      title: 'Diagnóstico',
      blocks: [
        {
          type: 'list',
          items: [
            'Ultrasonido prenatal: asas intestinales libres fuera del abdomen, sin membrana.',
            'Puede detectarse por una alfafetoproteína elevada en el tamiz del suero materno.',
            'El nacimiento se planea en un hospital con cirugía y cuidados intensivos neonatales.',
          ],
        },
      ],
    },
    {
      id: 'gsq-3',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Al nacer: cubrir las asas para evitar pérdida de calor y agua, líquidos intravenosos, sonda gástrica y antibióticos.',
            'Cirugía pronto: regresar el intestino al abdomen y cerrar el defecto; si hay mucho intestino fuera, se coloca en una bolsa (silo) y se reduce poco a poco.',
            'Nutrición intravenosa mientras el intestino recupera su función; puede haber problemas para comer y absorber.',
            'La supervivencia es alta, por encima de 90 % en centros especializados.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Embriología', topicId: 'embriologia-periodo-embrionario', sectionId: 'epe-7', label: 'Mesodermo intermedio y de la placa lateral', porQue: 'La hoja somática y los pliegues laterales cierran la pared ventral; si no se fusionan, queda el defecto.' },
    { materia: 'Embriología', topicId: 'embriologia-cavidades-corporales', sectionId: 'ecc-7', label: 'Gastrosquisis y onfalocele', porQue: 'La gastrosquisis es una falla del cierre de los pliegues laterales; el onfalocele, una falla del retorno de las asas tras la herniación fisiológica.' },
    { materia: 'Anatomía', topicId: 'musculos-pared-abdominal', sectionId: 'mpab-2', label: 'Anterolateral (5 músculos)', porQue: 'Los músculos de la pared abdominal vienen de células de los somitas que migran a la hoja somática.' },
  ],
  atlas: [
    { id: 'embriologia-tercera-semana', title: 'Tercera semana y periodo embrionario' },
    { id: 'musculos-pared-abdominal', title: 'Pared abdominal' },
    { id: 'embriologia-cavidades-corporales', title: 'Tubo intestinal y cavidades corporales' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Mujer de 18 años, fumadora, primer embarazo. En el ultrasonido de las 20 semanas se observan asas intestinales flotando en el líquido amniótico, a la derecha de la inserción del cordón, sin una membrana que las cubra. El resto de la anatomía fetal es normal.',
    preguntas: [
      q('pat-gsq-1', 'gastrosquisis', '¿Cuál es el diagnóstico más probable?',
        ['Onfalocele', 'Hernia umbilical', 'Gastrosquisis', 'Hernia diafragmática'], 2,
        'Intestino libre, sin membrana, a la derecha del cordón.', 'easy'),
      q('pat-gsq-2', 'gastrosquisis', '¿Qué lo distingue de un onfalocele?',
        ['El intestino sale sin membrana y a un lado del ombligo', 'Siempre hay trisomía 18', 'Ocurre en el ombligo', 'Solo sale el hígado'], 0,
        'El onfalocele está en el ombligo y cubierto por un saco, y se asocia con anomalías cromosómicas.'),
      q('pat-gsq-3', 'gastrosquisis', '¿Qué falla embrionaria lo explica?',
        ['Falta del tubo neural', 'Falla de los pliegues laterales para cerrar la pared ventral', 'Persistencia de la línea primitiva', 'Falta de mesodermo intermedio'], 1,
        'La hoja somática de la placa lateral, con el ectodermo, forma la pared corporal.'),
      q('pat-gsq-4', 'gastrosquisis', '¿Qué factores de riesgo tiene la madre?',
        ['Edad avanzada', 'Diabetes', 'Ninguno', 'Edad joven y tabaquismo'], 3,
        'También se asocian el alcohol y algunas infecciones al inicio del embarazo.'),
      q('pat-gsq-5', 'gastrosquisis', '¿Qué se hace al nacer, antes de la cirugía?',
        ['Alimentar por boca de inmediato', 'Cubrir las asas, dar líquidos intravenosos, sonda gástrica y antibióticos', 'Reducir el intestino a mano en la sala de parto', 'Esperar a los 6 meses para operar'], 1,
        'Evita pérdida de calor, de agua y la infección; luego se repara con cirugía o con un silo.'),
    ],
  },
  fuentes: [F.gsCdc, F.gsRev],
}

export const FICHAS_MATERIAS_8: Patologia[] = [TERATOMA, HOLOPROSENCEFALIA, HERPES_ZOSTER, NEUROBLASTOMA, GASTROSQUISIS]
