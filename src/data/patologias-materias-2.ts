/* Patologías por materia (segundo lote) — patologías que ya aparecen en las
 * correlaciones clínicas de los temas cargados. Mismo formato y reglas que
 * src/data/patologias-materias.ts: GPC mexicana del Catálogo Maestro y, si no
 * hay, organismos internacionales; solo datos verificados. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  falciforme: { codigo: 'NHLBI 2014', titulo: 'Management of sickle cell disease: summary of the 2014 evidence-based report by expert panel members. JAMA. 2014;312(10):1033–1048', url: 'https://doi.org/10.1001/jama.2014.10517' },
  lactosa: { codigo: 'NIDDK', titulo: 'Intolerancia a la lactosa. Instituto Nacional de la Diabetes y las Enfermedades Digestivas y Renales (NIH, EE. UU.)', url: 'https://www.niddk.nih.gov/health-information/informacion-de-la-salud/enfermedades-digestivas/intolerancia-lactosa' },
  gotaGpc: { codigo: 'GPC SSA-216-09', titulo: 'Prevención, diagnóstico, tratamiento y referencia oportuna de hiperuricemia y gota en el primer nivel de atención', url: 'https://www.facmed.unam.mx/sg/css/GPC/SIDSS-GPC/gpc/docs/SSA-216-09-ER.pdf' },
  gotaAcr: { codigo: 'ACR 2020', titulo: '2020 American College of Rheumatology guideline for the management of gout. Arthritis Care Res. 2020;72(6):744–760', url: 'https://doi.org/10.1002/acr.24180' },
  galactosemia: { codigo: 'GPC IMSS-536-12', titulo: 'Tratamiento nutricional del paciente pediátrico y adolescente con galactosemia', url: 'https://dcs.uqroo.mx/paginas/guiasclinicas/gpc/docs/IMSS-536-12-ER.pdf' },
  hsc: { codigo: 'GPC IMSS-715-14', titulo: 'Tamizaje, diagnóstico y tratamiento del paciente con hiperplasia suprarrenal congénita por deficiencia de 21-hidroxilasa', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/715GER.pdf' },
  klinefelter: { codigo: 'EAA 2020', titulo: 'European Academy of Andrology guidelines on Klinefelter syndrome. Andrology. 2021;9(1):145–167', url: 'https://doi.org/10.1111/andr.12909' },
  vihGpc: { codigo: 'GPC SSA-067-08', titulo: 'Diagnóstico y referencia oportuna del paciente con infección por el VIH en el primer nivel de atención', url: 'https://www.facmed.unam.mx/sg/css/GPC/SIDSS-GPC/gpc/docs/SSA-067-08-ER.pdf' },
  vihArv: { codigo: 'SSA 2025', titulo: 'Guía de manejo antirretroviral de las personas con VIH. Secretaría de Salud, México, 2025', url: 'https://www.gob.mx/cms/uploads/attachment/file/1006720/Guia_de_manejo_antirretroviral_de_las_personas_con_VIH_2025.pdf' },
  nac: { codigo: 'GPC SS-120-08', titulo: 'Diagnóstico y tratamiento de la neumonía adquirida en la comunidad en pacientes de 3 meses a 18 años en el primer y segundo nivel de atención', url: 'https://www.facmed.unam.mx/sg/css/GPC/SIDSS-GPC/gpc/docs/SS-120-08-ER.pdf' },
  rinitis: { codigo: 'GPC IMSS-041-08', titulo: 'Diagnóstico y tratamiento de rinitis alérgica', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/041GER.pdf' },
  lla: { codigo: 'NCI PDQ', titulo: 'Tratamiento de la leucemia linfoblástica aguda infantil (PDQ), versión para profesionales de salud. Instituto Nacional del Cáncer (NIH, EE. UU.)', url: 'https://www.cancer.gov/espanol/tipos/leucemia/pro/tratamiento-lla-infantil-pdq' },
  quemadurasNinos: { codigo: 'GPC SSA-090-08', titulo: 'Diagnóstico y tratamiento inicial de quemaduras en menores de 18 años en el primer nivel de atención', url: 'https://www.facmed.unam.mx/sg/css/GPC/SIDSS-GPC/gpc/docs/SSA-090-08-ER.pdf' },
  granQuemado: { codigo: 'GPC IMSS-040-08', titulo: 'Diagnóstico y tratamiento del paciente «gran quemado»', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/040GER.pdf' },
  bell: { codigo: 'GPC IMSS-066-08', titulo: 'Diagnóstico y manejo de la parálisis de Bell (parálisis facial idiopática)', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/066GER.pdf' },
  cadera: { codigo: 'GPC IMSS-115-08', titulo: 'Diagnóstico y tratamiento de fracturas intracapsulares del extremo proximal del fémur', url: 'https://www.facmed.unam.mx/sg/css/GPC/SIDSS-GPC/gpc/docs/IMSS-115-08-ER.pdf' },
  tce: { codigo: 'GPC SSA-016-08', titulo: 'Manejo inicial del traumatismo craneoencefálico en el adulto en el primer nivel de atención', url: 'https://www.facmed.unam.mx/sg/css/GPC/SIDSS-GPC/gpc/docs/SSA-016-08-ER.pdf' },
  sinusitis: { codigo: 'GPC IMSS-080-08', titulo: 'Diagnóstico y tratamiento de sinusitis aguda', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/080GER.pdf' },
  sinusitisIdsa: { codigo: 'IDSA 2012', titulo: 'IDSA clinical practice guideline for acute bacterial rhinosinusitis in children and adults (resumen ejecutivo). Clin Infect Dis. 2012;54(8):1041–1045', url: 'https://doi.org/10.1093/cid/cir1043' },
  artrosis: { codigo: 'GPC IMSS-079-08', titulo: 'Diagnóstico y tratamiento de la osteoartrosis de rodilla', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/079GER.pdf' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Bioquímica ─────────────────────────────────────────────────── */

const FALCIFORME: Patologia = {
  id: 'anemia-falciforme',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Anemia falciforme',
  aka: 'Drepanocitosis',
  ambito: 'Hemoglobina',
  resumen:
    'Enfermedad autosómica recesiva por un solo cambio de aminoácido en la cadena β de la hemoglobina. La hemoglobina S se polimeriza al desoxigenarse y deforma al eritrocito en hoz: hemólisis crónica y oclusión de vasos pequeños.',
  sections: [
    {
      id: 'fal-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'steps',
          title: 'De la mutación a la enfermedad',
          steps: [
            'Mutación puntual del gen de la globina β (cromosoma 11): en la posición 6, el glutamato se sustituye por valina.',
            'La valina es hidrofóbica: crea un parche pegajoso en la superficie de la hemoglobina S (HbS).',
            'Al desoxigenarse, la HbS se polimeriza en fibras largas.',
            'Las fibras deforman al eritrocito en hoz (drepanocito), que se vuelve rígido.',
            'Los eritrocitos rígidos se destruyen pronto (hemólisis) y tapan vasos pequeños (vasooclusión).',
          ],
        },
        {
          type: 'comparison',
          title: 'Enfermedad frente a rasgo',
          left: {
            title: 'Anemia falciforme (HbSS)',
            items: ['Dos alelos mutados', 'Solo HbS (y algo de HbF)', 'Anemia hemolítica crónica y crisis vasooclusivas'],
          },
          right: {
            title: 'Rasgo falciforme (HbAS)',
            items: ['Un alelo mutado: portador', 'HbA y HbS', 'Por lo general sin síntomas; protege en parte contra el paludismo'],
          },
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'Por qué los síntomas empiezan hacia los 6 meses',
          content:
            'Al nacer predomina la hemoglobina fetal (HbF), que no tiene cadenas β y no se polimeriza. A medida que la HbF es reemplazada por la del adulto, aparecen los síntomas. Por eso aumentar la HbF es una estrategia de tratamiento.',
        },
      ],
    },
    {
      id: 'fal-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Anemia hemolítica crónica: palidez, ictericia, cálculos biliares de bilirrubina.',
            'Crisis dolorosas por vasooclusión: huesos, tórax, abdomen.',
            'En lactantes, dactilitis: hinchazón dolorosa de manos y pies.',
            'Síndrome torácico agudo: dolor torácico, fiebre e infiltrado pulmonar; es una urgencia.',
            'Infecciones graves (neumococo) por asplenia funcional: el bazo se infarta poco a poco.',
            'Secuestro esplénico en niños pequeños, enfermedad vascular cerebral y priapismo.',
          ],
        },
      ],
    },
    {
      id: 'fal-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Electroforesis de hemoglobina (o HPLC): solo HbS en la enfermedad; HbA y HbS en el rasgo. La HbS migra más lento que la HbA porque perdió una carga negativa.',
            'Biometría: anemia con reticulocitos altos (la médula compensa la hemólisis).',
            'Frotis: eritrocitos en hoz.',
            'Hemólisis: bilirrubina indirecta y LDH elevadas.',
            'En los programas de tamiz neonatal que la incluyen se detecta al nacer.',
          ],
        },
      ],
    },
    {
      id: 'fal-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'Panel de expertos del NHLBI (2014)',
          items: [
            'Hidroxiurea: aumenta la HbF y reduce las crisis; se ofrece desde los 9 meses de edad.',
            'Penicilina profiláctica oral en niños hasta los 5 años y vacunas, sobre todo contra el neumococo.',
            'Doppler transcraneal anual de los 2 a los 16 años para detectar el riesgo de infarto cerebral; si es alto, transfusiones.',
            'Crisis dolorosa: analgesia rápida, dentro de la primera hora, con opioides si el dolor es intenso; hidratación.',
            'Consejería genética a la familia.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-plegamiento-proteico', sectionId: 'bpp-5', label: 'Globinas: mioglobina y hemoglobina', porQue: 'El cambio glutamato → valina en la cadena β.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-proteinas-clasificacion-funcion', sectionId: 'bpc-3', label: 'Patologías por estructura o plegamiento anormal', porQue: 'Electroforesis de hemoglobina: sano, rasgo y enfermedad.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-enzimas-estructura', sectionId: 'bez-4', label: 'Cuando cambia un aminoácido', porQue: 'Un solo aminoácido cambia la estructura y la función.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-estructura-terciaria-cuaternaria', sectionId: 'btc-4', label: 'Estructura cuaternaria', porQue: 'La hemoglobina como tetrámero de dos cadenas α y dos β.' },
    { materia: 'Histología', topicId: 'histologia-sangre', sectionId: 'hsan-5', label: 'Eritrocitos y hemoglobina', porQue: 'El disco bicóncavo flexible que se vuelve rígido.' },
    { materia: 'Histología', topicId: 'histologia-linfoide-secundarios', sectionId: 'hls-3', label: 'Bazo', porQue: 'La pulpa roja que filtra los eritrocitos y se infarta.' },
    { materia: 'Genética', topicId: 'genetica-mendel', sectionId: 'gmen-2', label: 'Las tres leyes', porQue: 'Herencia autosómica recesiva: dos portadores, 25 % de hijos afectados.' },
  ],
  atlas: [
    { id: 'bioquimica-proteinas', title: 'Aminoácidos y proteínas' },
    { id: 'histologia-sangre', title: 'Sangre y elementos formes' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Niño de 2 años, hijo de padres con rasgo falciforme, con dolor e hinchazón en manos y pies desde ayer. Está pálido y con ictericia leve. Hb 7.8 g/dL, reticulocitos 12 %, bilirrubina indirecta elevada; el frotis muestra eritrocitos en hoz.',
    preguntas: [
      q('pat-fal-1', 'anemia-falciforme', '¿Cómo se llama la hinchazón dolorosa de manos y pies?',
        ['Dactilitis', 'Artritis séptica', 'Coiloniquia', 'Acrocianosis'], 0,
        'Es una crisis vasooclusiva en los huesos de manos y pies, típica de los lactantes.', 'easy'),
      q('pat-fal-2', 'anemia-falciforme', '¿Qué estudio confirma la enfermedad?',
        ['Ferritina', 'Cariotipo', 'Prueba de Coombs', 'Electroforesis de hemoglobina'], 3,
        'Muestra solo HbS; en los padres portadores muestra HbA y HbS.'),
      q('pat-fal-3', 'anemia-falciforme', '¿Por qué la HbS deforma al eritrocito?',
        ['Porque no fija oxígeno', 'Porque le falta hierro', 'Porque la valina crea un parche hidrofóbico y la HbS desoxigenada se polimeriza', 'Porque el eritrocito pierde su membrana'], 2,
        'Las fibras de HbS estiran y endurecen la célula.'),
      q('pat-fal-4', 'anemia-falciforme', '¿Por qué recibe penicilina diaria hasta los 5 años?',
        ['Por la asplenia funcional, que aumenta el riesgo de infección grave por neumococo', 'Para evitar las crisis dolorosas', 'Para aumentar la HbF', 'Por la ictericia'], 0,
        'El bazo se infarta y deja de filtrar bacterias encapsuladas.'),
      q('pat-fal-5', 'anemia-falciforme', '¿Qué hace la hidroxiurea?',
        ['Elimina la HbS', 'Corrige la mutación', 'Aporta hierro', 'Aumenta la hemoglobina fetal, que no se polimeriza'], 3,
        'Más HbF significa menos polimerización y menos crisis.'),
    ],
  },
  fuentes: [F.falciforme],
}

const LACTOSA: Patologia = {
  id: 'intolerancia-lactosa',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Intolerancia a la lactosa',
  ambito: 'Digestión',
  resumen:
    'Síntomas digestivos por falta de lactasa: la lactosa no se divide en glucosa y galactosa, llega al colon, atrae agua y las bacterias la fermentan. No es una alergia y casi nunca obliga a quitar todos los lácteos.',
  sections: [
    {
      id: 'lac-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La lactasa es una enzima del borde en cepillo de los enterocitos del intestino delgado. Rompe el enlace β-1,4 de la lactosa en glucosa y galactosa, que sí se absorben. Si hay poca lactasa, la lactosa sigue de largo.',
        },
        {
          type: 'table',
          title: 'Tipos',
          data: {
            headers: ['Tipo', 'Causa'],
            rows: [
              ['Primaria (la más frecuente)', 'La lactasa disminuye de forma programada después del destete; afecta a la mayoría de los adultos del mundo'],
              ['Secundaria', 'Daño de la mucosa intestinal: gastroenteritis, enfermedad celiaca; mejora al curar la causa'],
              ['Congénita', 'Muy rara, autosómica recesiva; síntomas desde la primera toma de leche'],
            ],
          },
        },
        {
          type: 'steps',
          title: 'De dónde salen los síntomas',
          steps: [
            'La lactosa no digerida queda en la luz del intestino y atrae agua por ósmosis: diarrea.',
            'En el colon las bacterias la fermentan: producen hidrógeno, CO₂ y metano (gases, distensión) y ácidos que irritan.',
          ],
        },
      ],
    },
    {
      id: 'lac-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'De 30 minutos a 2 horas después de consumir lácteos: distensión, cólicos, gases, ruidos intestinales y diarrea; a veces náusea.',
            'Depende de la cantidad: muchas personas toleran porciones pequeñas.',
            'No produce sangre en las heces ni pérdida de peso: si aparecen, hay que buscar otra causa.',
          ],
        },
        {
          type: 'comparison',
          title: 'No es lo mismo que la alergia a la leche',
          left: { title: 'Intolerancia a la lactosa', items: ['Falta una enzima', 'El problema es un azúcar (lactosa)', 'Síntomas digestivos según la cantidad'] },
          right: { title: 'Alergia a la proteína de la leche', items: ['Reacción inmunológica', 'El problema es una proteína (caseína, proteínas del suero)', 'Puede dar urticaria, vómito, sangre en heces o anafilaxia aun con poca cantidad'] },
        },
      ],
    },
    {
      id: 'lac-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Clínica y prueba de retirada: quitar los lácteos unas semanas y reintroducirlos.',
            'Prueba de hidrógeno en el aliento: tras una carga de lactosa, el hidrógeno espirado sube porque las bacterias del colon la fermentaron.',
            'En lactantes y niños pequeños: prueba de acidez de las heces.',
          ],
        },
      ],
    },
    {
      id: 'lac-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'NIDDK',
          items: [
            'Ajustar la cantidad de lactosa a lo que se tolera; no hace falta eliminar todos los lácteos.',
            'Productos deslactosados, yogur y quesos madurados (tienen menos lactosa).',
            'Tabletas o gotas de lactasa antes de comer lácteos.',
            'Cuidar el aporte de calcio y vitamina D si se reducen los lácteos.',
            'En la forma secundaria, tratar la causa.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-glucidos-clasificacion', sectionId: 'bgc-5', label: 'Disacáridos', porQue: 'La lactosa: glucosa + galactosa unidas por un enlace β-1,4.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-metabolismo-digestivo', sectionId: 'bmd-9', label: 'Maladigestión vs malabsorción', porQue: 'La intolerancia a la lactosa es una maladigestión.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-metabolismo-digestivo', sectionId: 'bmd-7', label: 'Intestinos y fases de la digestión', porQue: 'Dónde actúa la lactasa.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-enzimas-estructura', sectionId: 'bez-1', label: 'Qué es una enzima', porQue: 'Una deficiencia enzimática con síntomas.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-agua-osmolaridad-soluciones', sectionId: 'bao-5', label: 'Osmolaridad y tonicidad', porQue: 'Por qué un soluto no absorbido produce diarrea.' },
  ],
  atlas: [
    { id: 'bioquimica-metabolismo-digestivo', title: 'Metabolismo digestivo' },
    { id: 'bioquimica-glucidos', title: 'Glúcidos' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 25 años que desde la adolescencia, una hora después de tomar un licuado con leche, tiene distensión, gases, cólicos y diarrea. No ha bajado de peso ni tiene sangre en las heces. Tolera bien el yogur y el queso añejo.',
    preguntas: [
      q('pat-lac-1', 'intolerancia-lactosa', '¿Qué enzima falta?',
        ['Amilasa', 'Sacarasa', 'Lipasa', 'Lactasa'], 3,
        'La lactasa divide la lactosa en glucosa y galactosa.', 'easy'),
      q('pat-lac-2', 'intolerancia-lactosa', '¿Por qué hay diarrea?',
        ['La lactosa no absorbida atrae agua a la luz intestinal', 'Por una infección bacteriana', 'Por inflamación autoinmune', 'Por exceso de bilis'], 0,
        'Es una diarrea osmótica; la fermentación en el colon añade gases y distensión.'),
      q('pat-lac-3', 'intolerancia-lactosa', '¿Qué prueba lo confirma?',
        ['Biopsia de colon', 'IgE específica a la leche', 'Prueba de hidrógeno en el aliento tras una carga de lactosa', 'Colonoscopia'], 2,
        'Las bacterias del colon fermentan la lactosa y liberan hidrógeno que se exhala.'),
      q('pat-lac-4', 'intolerancia-lactosa', '¿En qué se diferencia de la alergia a la leche?',
        ['La alergia es una reacción inmunológica contra una proteína; la intolerancia, la falta de una enzima para un azúcar', 'Son lo mismo', 'La intolerancia es más grave', 'La alergia solo da diarrea'], 0,
        'La alergia puede dar urticaria o anafilaxia aun con poca leche.'),
      q('pat-lac-5', 'intolerancia-lactosa', '¿Qué se le recomienda?',
        ['Eliminar para siempre todos los lácteos', 'Antibióticos', 'Ajustar la cantidad de lactosa, usar deslactosados o lactasa y cuidar el calcio', 'Dieta sin gluten'], 2,
        'La mayoría tolera porciones pequeñas y productos con poca lactosa.'),
    ],
  },
  fuentes: [F.lactosa],
}

const GOTA: Patologia = {
  id: 'gota',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Gota',
  aka: 'Artritis gotosa',
  ambito: 'Purinas',
  resumen:
    'Artritis por depósito de cristales de urato monosódico cuando el ácido úrico se mantiene alto. Las purinas terminan en ácido úrico; si se produce de más o se elimina poco, precipita en las articulaciones.',
  sections: [
    {
      id: 'got-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'steps',
          title: 'De las purinas a los cristales',
          steps: [
            'Las purinas (adenina, guanina) de los nucleótidos se degradan a hipoxantina y xantina.',
            'La xantina oxidasa forma ácido úrico; los humanos no tenemos uricasa para degradarlo más.',
            'Arriba de ~6.8 mg/dL el urato satura el plasma y puede precipitar como cristales.',
            'Los cristales en la articulación activan una inflamación intensa: el ataque de gota.',
          ],
        },
        {
          type: 'list',
          title: 'Factores de riesgo',
          items: [
            'Sexo masculino; en mujeres es rara antes de la menopausia.',
            'La causa más común es la baja excreción renal de ácido úrico; también la producción alta.',
            'Obesidad, alcohol (sobre todo cerveza), carnes rojas, vísceras, mariscos y bebidas con fructosa.',
            'Diuréticos (tiazidas) y enfermedad renal.',
          ],
        },
        {
          type: 'note',
          content:
            'La mayoría de las personas con hiperuricemia nunca tiene gota.',
        },
      ],
    },
    {
      id: 'got-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Ataque agudo: dolor muy intenso de inicio súbito, a menudo de noche, en una sola articulación, con enrojecimiento, calor e hinchazón; llega a su máximo en menos de 24 horas.',
            'La primera articulación metatarsofalángica (podagra) es la más típica.',
            'El ataque cede solo en 1–2 semanas; después vienen periodos sin síntomas.',
            'Gota crónica: tofos (depósitos de urato) en pabellón auricular, codos y dedos, y erosiones articulares.',
            'Cálculos renales de ácido úrico.',
          ],
        },
      ],
    },
    {
      id: 'got-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Estándar de oro: cristales de urato monosódico en el líquido sinovial, en forma de aguja y con birrefringencia negativa en el microscopio de luz polarizada.',
            'El ácido úrico sérico puede ser normal durante el ataque: no lo descarta.',
            'Diferencial: artritis séptica (se cultiva el líquido) y pseudogota (cristales de pirofosfato de calcio, romboides y con birrefringencia positiva).',
            'En la gota crónica la radiografía muestra erosiones «en sacabocado».',
          ],
        },
      ],
    },
    {
      id: 'got-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'steps',
          title: 'ACR 2020 y GPC SSA-216-09',
          steps: [
            'Ataque: colchicina, un antiinflamatorio no esteroideo o un glucocorticoide, lo antes posible; hielo y reposo de la articulación.',
            'Bajar el urato con alopurinol (primera línea) si hay 2 o más ataques al año, tofos o daño articular; se inicia a dosis baja y se ajusta según la función renal.',
            'Meta: urato sérico menor de 6 mg/dL.',
            'Al iniciar el alopurinol se da profilaxis con colchicina durante los primeros meses, porque bajar el urato puede desencadenar ataques.',
            'Reducir alcohol, purinas y bebidas azucaradas, y bajar de peso.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-arn-tipos', sectionId: 'bat-4', label: 'De dónde salen los nucleótidos', porQue: 'Las purinas y su degradación a ácido úrico.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-acidos-nucleicos-estructura', sectionId: 'ban-2', label: 'Componentes del nucleótido', porQue: 'Adenina y guanina son purinas.' },
    { materia: 'Anatomía', topicId: 'artrologia-generalidades', sectionId: 'art-2', label: 'Composición de la articulación sinovial', porQue: 'El líquido sinovial donde se buscan los cristales.' },
    { materia: 'Anatomía', topicId: 'articulaciones-miembro-inferior', sectionId: 'aminf-5', label: 'Articulaciones del pie', porQue: 'La primera metatarsofalángica, sitio típico del ataque.' },
  ],
  atlas: [
    { id: 'articulaciones-rodilla-tobillo', title: 'Rodilla, tobillo y pie' },
    { id: 'bioquimica-replicacion-codigo', title: 'Replicación y código genético' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 52 años, con obesidad e hipertensión tratada con hidroclorotiazida. Despertó a las 3 de la mañana con dolor insoportable en la base del dedo gordo del pie derecho, que está rojo, caliente e hinchado; no tolera ni la sábana. Ayer comió mariscos y tomó cerveza. Ácido úrico sérico: 6.2 mg/dL.',
    preguntas: [
      q('pat-got-1', 'gota', '¿Cómo se llama la afectación de la primera metatarsofalángica?',
        ['Hallux valgus', 'Podagra', 'Bursitis', 'Dactilitis'], 1,
        'Es la presentación más típica del ataque de gota.', 'easy'),
      q('pat-got-2', 'gota', 'El ácido úrico de 6.2 mg/dL, ¿descarta la gota?',
        ['Sí, porque está por debajo de 6.8', 'Sí, la gota siempre tiene urato alto', 'No: durante el ataque el urato puede ser normal', 'Solo si se repite'], 2,
        'El diagnóstico se confirma con los cristales en el líquido sinovial.'),
      q('pat-got-3', 'gota', '¿Qué se vería en el líquido sinovial?',
        ['Cristales en aguja con birrefringencia negativa', 'Cristales romboides con birrefringencia positiva', 'Bacterias grampositivas', 'Ningún cristal'], 0,
        'Los romboides con birrefringencia positiva son de pirofosfato de calcio (pseudogota).'),
      q('pat-got-4', 'gota', '¿Qué fármaco de su tratamiento eleva el ácido úrico?',
        ['Hidroclorotiazida', 'Paracetamol', 'Alopurinol', 'Colchicina'], 0,
        'Las tiazidas reducen la excreción renal de urato.'),
      q('pat-got-5', 'gota', 'Si llega a necesitar alopurinol, ¿qué meta se busca?',
        ['Urato menor de 10 mg/dL', 'Urato de 0 mg/dL', 'Que no haya dolor, sin importar el urato', 'Urato sérico menor de 6 mg/dL'], 3,
        'Por debajo de la saturación los cristales se disuelven poco a poco.'),
    ],
  },
  fuentes: [F.gotaGpc, F.gotaAcr],
}

/* ── Genética ───────────────────────────────────────────────────── */

const GALACTOSEMIA: Patologia = {
  id: 'galactosemia',
  kind: 'ficha',
  materia: 'Genética',
  title: 'Galactosemia',
  ambito: 'Errores innatos del metabolismo',
  resumen:
    'Error innato, autosómico recesivo, que impide convertir la galactosa en glucosa. La forma clásica, por falta de GALT, se manifiesta en cuanto el recién nacido toma leche y puede ser mortal en días: ante la sospecha se suspende la leche.',
  sections: [
    {
      id: 'gal-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'table',
          title: 'La vía de Leloir y sus deficiencias',
          data: {
            headers: ['Enzima', 'Deficiencia'],
            rows: [
              ['Galactocinasa (GALK)', 'Cataratas; casi sin daño sistémico'],
              ['Galactosa-1-fosfato uridiltransferasa (GALT)', 'Galactosemia clásica: la más común y la más grave'],
              ['UDP-galactosa 4-epimerasa (GALE)', 'Rara; de leve a grave'],
            ],
          },
        },
        {
          type: 'paragraph',
          content:
            'En la forma clásica se acumulan la galactosa-1-fosfato, tóxica para el hígado, el riñón y el cerebro, y el galactitol, que en el cristalino produce cataratas. La incidencia es de 1 en 40 000 a 60 000 recién nacidos.',
        },
        {
          type: 'correlacion',
          variant: 'dato',
          title: 'Por qué empieza con la leche',
          content:
            'La lactosa de la leche materna y de las fórmulas es glucosa + galactosa. El recién nacido parece sano hasta que empieza a alimentarse.',
        },
      ],
    },
    {
      id: 'gal-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          title: 'En los primeros días (GPC)',
          items: [
            'Rechazo al alimento, vómito y diarrea.',
            'Ictericia y hepatomegalia; alteración de la coagulación.',
            'Letargo, irritabilidad e hipotonía.',
            'Cataratas (alrededor del 10 %) y daño tubular renal.',
            'Sepsis por Escherichia coli.',
            'Sin tratamiento, entre los 6 y 10 días: insuficiencia hepática, choque y muerte.',
          ],
        },
        {
          type: 'note',
          content:
            'Aun con dieta adecuada pueden aparecer a largo plazo problemas del lenguaje y del aprendizaje, insuficiencia ovárica en las niñas y baja densidad ósea; por eso el seguimiento es de por vida.',
        },
      ],
    },
    {
      id: 'gal-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Tamiz neonatal: la detecta antes de los síntomas o en cuanto aparecen.',
            'Confirmación: actividad de GALT en eritrocitos (menor del 5 % en la forma clásica) y galactosa-1-fosfato eritrocitaria elevada.',
            'Ante un recién nacido con ictericia, intolerancia a la vía oral, sepsis o falla hepática hay que pensar en galactosemia.',
          ],
        },
      ],
    },
    {
      id: 'gal-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-536-12',
          items: [
            'Ante la sospecha o un tamiz positivo se suspenden la leche materna y las fórmulas con lactosa, sin esperar la confirmación.',
            'Fórmula a base de proteína aislada de soya.',
            'Dieta restringida en galactosa de por vida, con calcio, vitamina D y micronutrimentos.',
            'Seguimiento con galactosa-1-fosfato eritrocitaria, revisión oftalmológica anual, densidad ósea y función ovárica en las niñas.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Al revés que en la fenilcetonuria',
          content:
            'En la fenilcetonuria la leche materna se puede dar en cantidad medida. En la galactosemia clásica está contraindicada, porque toda su lactosa aporta galactosa.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Genética', topicId: 'genetica-errores-metabolismo', sectionId: 'gmet-4', label: 'Galactosemia', porQue: 'La galactosa que se acumula y el daño hepático.' },
    { materia: 'Genética', topicId: 'genetica-errores-metabolismo', sectionId: 'gmet-1', label: 'Tamiz neonatal', porQue: 'La detección antes de los síntomas.' },
    { materia: 'Genética', topicId: 'genetica-mendel', sectionId: 'gmen-2', label: 'Las tres leyes', porQue: 'Herencia autosómica recesiva.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-glucidos-clasificacion', sectionId: 'bgc-5', label: 'Disacáridos', porQue: 'La lactosa es glucosa + galactosa.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-glucidos-clasificacion', sectionId: 'bgc-3', label: 'Monosacáridos', porQue: 'La galactosa difiere de la glucosa solo en el carbono 4.' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-estructurales', sectionId: 'eae-6', label: 'Mutaciones génicas y patrones de herencia', porQue: 'Herencia autosómica recesiva y errores innatos del metabolismo.' },
  ],
  atlas: [
    { id: 'genetica-citogenetica-tamiz', title: 'Citogenética clínica y tamiz' },
    { id: 'bioquimica-glucidos', title: 'Glúcidos' },
    { id: 'embriologia-anomalias-cromosomicas', title: 'Anomalías cromosómicas' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido de 6 días, alimentado al seno materno, con rechazo al alimento, vómito, ictericia y hepatomegalia; está letárgico. El tamiz neonatal reporta galactosa elevada. El hemocultivo desarrolla Escherichia coli.',
    preguntas: [
      q('pat-gal-1', 'galactosemia', '¿Qué enzima falta en la forma clásica?',
        ['Galactocinasa', 'Lactasa', 'Galactosa-1-fosfato uridiltransferasa (GALT)', 'Fenilalanina hidroxilasa'], 2,
        'Es la deficiencia más frecuente y la más grave.'),
      q('pat-gal-2', 'galactosemia', '¿Qué se hace de inmediato con la alimentación?',
        ['Suspender la leche materna y dar fórmula de soya, sin esperar la confirmación', 'Seguir con leche materna en menor cantidad', 'Cambiar a fórmula deslactosada de vaca y seguir lactando', 'Ayuno de una semana'], 0,
        'Retirar la galactosa resuelve los síntomas agudos; esperar puede ser mortal.'),
      q('pat-gal-3', 'galactosemia', '¿Qué molécula causa las cataratas?',
        ['Galactitol', 'Glucosa', 'Fenilpiruvato', 'Bilirrubina'], 0,
        'La galactosa acumulada se reduce a galactitol en el cristalino.'),
      q('pat-gal-4', 'galactosemia', '¿Qué infección se asocia de forma característica?',
        ['Neumococo', 'Sepsis por Escherichia coli', 'Herpes', 'Tuberculosis'], 1,
        'Es una complicación clásica del recién nacido con galactosemia sin tratar.', 'easy'),
      q('pat-gal-5', 'galactosemia', '¿Qué estudio confirma el diagnóstico?',
        ['Cariotipo', 'Ultrasonido hepático', 'Glucosa en ayuno', 'Actividad de GALT en eritrocitos'], 3,
        'En la forma clásica la actividad es menor del 5 % de lo normal.'),
    ],
  },
  fuentes: [F.galactosemia],
}

const HSC: Patologia = {
  id: 'hiperplasia-suprarrenal-congenita',
  kind: 'ficha',
  materia: 'Genética',
  title: 'Hiperplasia suprarrenal congénita',
  aka: 'Deficiencia de 21-hidroxilasa',
  ambito: 'Tamiz neonatal',
  resumen:
    'Grupo de enfermedades autosómicas recesivas en las que la suprarrenal no puede formar cortisol; en el 95 % falta la 21-hidroxilasa. Sobran andrógenos y, en la forma perdedora de sal, falta aldosterona: puede causar genitales ambiguos en niñas y una crisis mortal en los primeros días.',
  sections: [
    {
      id: 'hsc-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'steps',
          title: 'Por qué se hiperplasia la glándula',
          steps: [
            'La deficiencia de 21-hidroxilasa (gen CYP21A2) impide formar cortisol y aldosterona.',
            'Sin cortisol no hay retroalimentación negativa: la hipófisis libera más ACTH.',
            'La ACTH agranda la suprarrenal (hiperplasia).',
            'Los precursores acumulados, como la 17-hidroxiprogesterona (17-OHP), se desvían a la vía de los andrógenos.',
          ],
        },
        {
          type: 'table',
          title: 'Formas (GPC)',
          data: {
            headers: ['Forma', 'Qué falta', 'Cómo se presenta'],
            rows: [
              ['Clásica perdedora de sal (~67 % de las clásicas)', 'Cortisol y aldosterona', 'Crisis suprarrenal en las primeras semanas; virilización en niñas'],
              ['Clásica virilizante simple (~33 %)', 'Cortisol', 'Exceso de andrógenos sin pérdida de sal'],
              ['No clásica (tardía)', 'Deficiencia leve', 'En la infancia o la adolescencia: pubertad precoz, hirsutismo, acné'],
            ],
          },
        },
        {
          type: 'paragraph',
          content:
            'En el mundo afecta a alrededor de 1 de cada 16 000 recién nacidos; en el IMSS se ha reportado 1 de cada 8743.',
        },
      ],
    },
    {
      id: 'hsc-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'comparison',
          title: 'Según el sexo cromosómico',
          left: {
            title: 'Niñas 46,XX',
            items: ['Genitales ambiguos al nacer: clitoromegalia y fusión labioescrotal', 'Útero y ovarios normales', 'Se sospecha desde el nacimiento'],
          },
          right: {
            title: 'Varones 46,XY',
            items: ['Genitales normales al nacer', 'La crisis perdedora de sal puede ser el primer dato', 'Por eso el tamiz es clave'],
          },
        },
        {
          type: 'list',
          title: 'Crisis perdedora de sal (suele aparecer en la 2.ª semana)',
          items: [
            'Rechazo al alimento, vómito y falta de crecimiento.',
            'Deshidratación, hipotensión, hipoglucemia y choque.',
            'Hiponatremia, hiperpotasemia y acidosis metabólica, porque falta aldosterona.',
          ],
        },
      ],
    },
    {
      id: 'hsc-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Tamiz neonatal: 17-OHP en sangre de talón. Da falsos positivos en prematuros y recién nacidos estresados.',
            'Confirmación: 17-OHP sérica elevada; electrolitos, renina y aldosterona.',
            'Ante genitales ambiguos: cariotipo y ultrasonido pélvico; no se asigna sexo hasta completar el estudio.',
          ],
        },
      ],
    },
    {
      id: 'hsc-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-715-14',
          items: [
            'Hidrocortisona: el glucocorticoide de elección en niños; repone el cortisol y frena la ACTH y los andrógenos.',
            'En la forma perdedora de sal, además, fludrocortisona y suplementos de cloruro de sodio.',
            'Crisis suprarrenal: hidrocortisona IV a dosis de estrés, solución salina y glucosa.',
            'En enfermedades o cirugías se aumenta la dosis (dosis de estrés).',
            'Equipo multidisciplinario y consejería genética; la cirugía genital se decide de forma individual.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-sintesis-transporte', sectionId: 'bhs-3', label: 'Síntesis de las hormonas esteroideas', porQue: 'Las ramas de la esteroidogénesis y el papel de la 21-hidroxilasa.' },
    { materia: 'Genética', topicId: 'genetica-errores-metabolismo', sectionId: 'gmet-5', label: 'Hiperplasia suprarrenal congénita', porQue: 'Menos cortisol y aldosterona, más andrógenos.' },
    { materia: 'Genética', topicId: 'genetica-diferenciacion-sexual', sectionId: 'gdsx-5', label: 'Genitales externos: período indiferenciado', porQue: 'Los andrógenos virilizan los genitales externos de una niña 46,XX.' },
    { materia: 'Genética', topicId: 'genetica-dsd', sectionId: 'gdsd-2', label: '¿Cuándo sospechar una DSD?', porQue: 'Los genitales ambiguos al nacer.' },
    { materia: 'Genética', topicId: 'genetica-dsd', sectionId: 'gdsd-3', label: 'Diagnóstico de primera línea', porQue: 'Cariotipo y estudios iniciales.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-lipidos-funcion-esteroides', sectionId: 'bfe-5', label: 'Colesterol y esteroidogénesis', porQue: 'La vía del colesterol al cortisol, la aldosterona y los andrógenos.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-agua-electrolitos', sectionId: 'bae-5', label: 'Alteraciones de los electrolitos', porQue: 'Hiponatremia e hiperpotasemia por falta de aldosterona.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-hipofisis-pancreas', sectionId: 'bhe-1', label: 'Hipotálamo e hipófisis', porQue: 'La ACTH estimula a la suprarrenal; sin cortisol que la frene, sube.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-hipofisis-pancreas', sectionId: 'bhe-4', label: 'Hormonas de alarma', porQue: 'Por qué se aumenta la dosis de hidrocortisona en una enfermedad o cirugía.' },
  ],
  atlas: [
    { id: 'bioquimica-hormonas', title: 'Hormonas y receptores' },
    { id: 'genetica-desarrollo', title: 'Desarrollo embrionario y sexual' },
    { id: 'genetica-citogenetica-tamiz', title: 'Citogenética clínica y tamiz' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Varón de 12 días con genitales normales al nacer y sin resultado de tamiz. Llega con vómito, rechazo al alimento, deshidratación e hipotensión. Na⁺ 124 mmol/L, K⁺ 7.1 mmol/L, glucosa 48 mg/dL, acidosis metabólica. La 17-hidroxiprogesterona está muy elevada.',
    preguntas: [
      q('pat-hsc-1', 'hiperplasia-suprarrenal-congenita', '¿Qué enzima falta con más probabilidad?',
        ['11β-hidroxilasa', '21-hidroxilasa', '5α-reductasa', 'Aromatasa'], 1,
        'Explica el 95 % de los casos y eleva la 17-OHP.', 'easy'),
      q('pat-hsc-2', 'hiperplasia-suprarrenal-congenita', '¿Qué explica el sodio bajo y el potasio alto?',
        ['El exceso de andrógenos', 'La deshidratación sola', 'La falta de aldosterona', 'Un error de laboratorio'], 2,
        'Sin aldosterona el riñón pierde sodio y retiene potasio.'),
      q('pat-hsc-3', 'hiperplasia-suprarrenal-congenita', '¿Por qué en los varones se diagnostica más tarde?',
        ['Porque sus genitales son normales al nacer', 'Porque no tienen la enzima', 'Porque la enfermedad es leve en ellos', 'Porque no se hereda a varones'], 0,
        'En las niñas los genitales ambiguos alertan desde el nacimiento.'),
      q('pat-hsc-4', 'hiperplasia-suprarrenal-congenita', '¿Qué es lo prioritario?',
        ['Esperar el cariotipo', 'Solo dar potasio', 'Dar testosterona', 'Hidrocortisona IV a dosis de estrés, solución salina y glucosa'], 3,
        'Es una crisis suprarrenal: sin tratamiento lleva al choque y la muerte.'),
      q('pat-hsc-5', 'hiperplasia-suprarrenal-congenita', 'Su hermana nació con clitoromegalia y fusión labioescrotal. ¿Qué es correcto?',
        ['Se asigna sexo masculino de inmediato', 'No se asigna sexo hasta completar el estudio; se espera cariotipo 46,XX con útero y ovarios', 'Se hace cirugía el primer día', 'No requiere estudio'], 1,
        'Los andrógenos virilizan los genitales externos, pero los internos son femeninos.'),
    ],
  },
  fuentes: [F.hsc],
}

const KLINEFELTER: Patologia = {
  id: 'sindrome-klinefelter',
  kind: 'ficha',
  materia: 'Genética',
  title: 'Síndrome de Klinefelter',
  aka: '47,XXY',
  ambito: 'Cromosomas sexuales',
  resumen:
    'Varón con un cromosoma X adicional. Es la aneuploidía sexual más frecuente en hombres y la causa genética más común de infertilidad masculina; la mayoría nunca se diagnostica.',
  sections: [
    {
      id: 'kli-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La mayoría tiene cariotipo 47,XXY; una minoría es mosaico (46,XY/47,XXY) y tiene un fenotipo más leve. Ocurre en alrededor de 1 de cada 600 varones. El X extra se origina por no disyunción en la meiosis materna o paterna.',
        },
        {
          type: 'steps',
          title: 'Por qué hay hipogonadismo',
          steps: [
            'Los túbulos seminíferos se fibrosan y se hialinizan: no hay espermatogénesis (azoospermia).',
            'Las células de Leydig producen poca testosterona.',
            'La hipófisis responde con FSH y LH altas: hipogonadismo hipergonadotrópico.',
          ],
        },
      ],
    },
    {
      id: 'kli-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Testículos pequeños y firmes: el hallazgo más constante.',
            'Infertilidad por azoospermia.',
            'Talla alta con extremidades largas, ginecomastia y poco vello corporal.',
            'Dificultades del lenguaje y del aprendizaje en algunos.',
            'Mayor riesgo de osteoporosis, síndrome metabólico y diabetes tipo 2, tromboembolia y cáncer de mama.',
          ],
        },
      ],
    },
    {
      id: 'kli-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Cariotipo en sangre periférica: confirma el diagnóstico.',
            'Hormonas: testosterona baja o normal baja con FSH y LH altas.',
            'Espermatobioscopia: azoospermia.',
          ],
        },
      ],
    },
    {
      id: 'kli-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'Academia Europea de Andrología (2020)',
          items: [
            'Testosterona sustitutiva cuando hay hipogonadismo: desarrolla y mantiene los caracteres sexuales, la masa ósea y muscular y el ánimo.',
            'La testosterona no restaura la fertilidad.',
            'Fertilidad: extracción de espermatozoides del testículo (micro-TESE) e inyección intracitoplasmática.',
            'Apoyo educativo y de lenguaje; vigilancia del hueso y del metabolismo.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-4', label: 'Síndromes por aneuploidía', porQue: 'Klinefelter (47,XXY) junto a Turner y triple X.' },
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-2', label: 'Anomalías numéricas y aneuploidía', porQue: 'Qué es una aneuploidía.' },
    { materia: 'Genética', topicId: 'genetica-mitosis-meiosis', sectionId: 'gmm-4', label: 'Mitosis vs meiosis', porQue: 'La no disyunción que origina el X extra.' },
    { materia: 'Genética', topicId: 'genetica-dsd', sectionId: 'gdsd-5', label: 'Turner y Klinefelter dentro de las DSD', porQue: 'Por qué se considera una diferencia del desarrollo sexual.' },
    { materia: 'Genética', topicId: 'genetica-gametogenesis', sectionId: 'ggam-3', label: 'Espermatogénesis y espermiogénesis', porQue: 'Lo que falla en el testículo.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-lipidos-funcion-esteroides', sectionId: 'bfe-6', label: 'Hormonas esteroideas: función, deficiencia y exceso', porQue: 'La deficiencia de testosterona.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-hormonas-hipofisis-pancreas', sectionId: 'bhe-1', label: 'Hipotálamo e hipófisis', porQue: 'La LH y la FSH que suben cuando el testículo no responde.' },
    { materia: 'Embriología', topicId: 'embriologia-cromosomas-division', sectionId: 'ecd-4', label: 'Meiosis y no disyunción', porQue: 'El cromosoma X adicional procede de una no disyunción en la meiosis materna o paterna.' },
    { materia: 'Embriología', topicId: 'embriologia-espermatogenesis', sectionId: 'esp-2', label: 'Sertoli, Leydig y control hormonal', porQue: 'Por qué la falla testicular eleva la FSH y la LH y causa azoospermia.' },
    { materia: 'Embriología', topicId: 'embriologia-anomalias-numericas', sectionId: 'ean-5', label: 'Klinefelter y Turner', porQue: 'No disyunción de los X, cuerpo de Barr y túbulos seminíferos hialinizados.' },
  ],
  atlas: [
    { id: 'genetica-citogenetica-tamiz', title: 'Citogenética clínica y tamiz' },
    { id: 'genetica-cromosomas-cariotipo', title: 'Cromosomas, cariotipo y bandeo' },
    { id: 'genetica-gametogenesis', title: 'Gametogénesis y fecundación' },
    { id: 'embriologia-desarrollo-temprano', title: 'Desarrollo temprano' },
    { id: 'embriologia-anomalias-cromosomicas', title: 'Anomalías cromosómicas' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 28 años que consulta porque en 2 años no ha logrado un embarazo con su pareja. Es alto, con ginecomastia bilateral y poco vello corporal. Testículos de 3 mL y firmes. Espermatobioscopia: azoospermia. FSH y LH altas, testosterona baja.',
    preguntas: [
      q('pat-kli-1', 'sindrome-klinefelter', '¿Qué estudio confirma la sospecha?',
        ['Ultrasonido testicular', 'Cariotipo en sangre periférica', 'Biopsia de mama', 'Tamiz neonatal'], 1,
        'Muestra el cariotipo 47,XXY o un mosaico.', 'easy'),
      q('pat-kli-2', 'sindrome-klinefelter', '¿Qué tipo de hipogonadismo tiene?',
        ['Hipogonadotrópico, por falla de la hipófisis', 'No tiene hipogonadismo', 'Hipotalámico', 'Hipergonadotrópico: el testículo falla y la hipófisis eleva FSH y LH'], 3,
        'La falla es primaria, del testículo.'),
      q('pat-kli-3', 'sindrome-klinefelter', '¿Cómo se origina el X adicional?',
        ['Por una mutación puntual', 'Por no disyunción de los cromosomas sexuales en la meiosis', 'Por una translocación', 'Por un virus'], 1,
        'Puede ocurrir en la meiosis materna o en la paterna.'),
      q('pat-kli-4', 'sindrome-klinefelter', 'Si recibe testosterona, ¿qué pasa con la fertilidad?',
        ['Se recupera por completo', 'Mejora la producción de espermatozoides', 'Se vuelve fértil en un año', 'No se restaura; la opción es extraer espermatozoides del testículo para reproducción asistida'], 3,
        'La testosterona trata el hipogonadismo, no la azoospermia.'),
      q('pat-kli-5', 'sindrome-klinefelter', '¿Qué riesgo está aumentado?',
        ['Cáncer de mama y osteoporosis', 'Talla baja', 'Hipercolesterolemia familiar', 'Anemia falciforme'], 0,
        'También el síndrome metabólico y la tromboembolia.'),
    ],
  },
  fuentes: [F.klinefelter],
}

/* ── Histología ─────────────────────────────────────────────────── */

const VIH: Patologia = {
  id: 'vih-sida',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Infección por VIH y sida',
  ambito: 'Inmunidad',
  resumen:
    'El virus de la inmunodeficiencia humana destruye poco a poco a los linfocitos T CD4. Sin tratamiento, en años lleva al sida; con tratamiento antirretroviral la carga viral se vuelve indetectable y el virus deja de transmitirse por vía sexual.',
  sections: [
    {
      id: 'vih-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El VIH es un retrovirus: su genoma es ARN y usa la transcriptasa inversa para formar ADN e integrarse al genoma de la célula. Entra a las células que tienen CD4 (linfocitos T CD4, macrófagos), con ayuda de un correceptor (CCR5 o CXCR4).',
        },
        {
          type: 'steps',
          title: 'Historia natural sin tratamiento',
          steps: [
            'Síndrome retroviral agudo, 2 a 4 semanas después de la infección: fiebre, cefalea, mialgias, adenomegalias, cuadro parecido a la mononucleosis.',
            'Latencia clínica de años: pocos síntomas mientras los CD4 bajan.',
            'Sida: CD4 menores de 200/µL o una enfermedad definitoria (neumonía por Pneumocystis jirovecii, candidiasis esofágica, toxoplasmosis cerebral, sarcoma de Kaposi, tuberculosis, entre otras).',
          ],
        },
        {
          type: 'list',
          title: 'Vías de transmisión (GPC)',
          items: [
            'Relaciones sexuales sin condón.',
            'Sangre: compartir agujas o jeringas, transfusiones.',
            'Trasplante de tejidos.',
            'Vertical: embarazo, parto o lactancia.',
            'Exposición laboral.',
          ],
        },
      ],
    },
    {
      id: 'vih-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          title: 'Datos que deben hacer pensar en VIH (GPC)',
          items: [
            'Fiebre de más de un mes, diaforesis nocturna y pérdida de más del 10 % del peso.',
            'Diarrea crónica de más de un mes.',
            'Candidiasis oral o vaginal persistente.',
            'Neumonías de repetición, tuberculosis, herpes zóster.',
            'Adenomegalias generalizadas.',
          ],
        },
      ],
    },
    {
      id: 'vih-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Tamizaje con prueba rápida o inmunoensayo; un resultado reactivo se confirma con una segunda prueba según el algoritmo vigente.',
            'Las pruebas de cuarta generación detectan anticuerpos y el antígeno p24, lo que acorta el periodo de ventana.',
            'Una vez confirmado: conteo de linfocitos T CD4 y carga viral (copias de ARN del VIH por mL).',
            'En la biometría suele haber linfopenia.',
          ],
        },
      ],
    },
    {
      id: 'vih-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'Guía de manejo antirretroviral (Secretaría de Salud, 2025)',
          items: [
            'Tratamiento antirretroviral para todas las personas con VIH, sin importar el conteo de CD4 ni los síntomas, y lo más pronto posible.',
            'Se combinan varios antirretrovirales; los esquemas preferentes actuales incluyen un inhibidor de la integrasa.',
            'Meta: carga viral indetectable. Indetectable = intransmisible: con la carga viral suprimida no se transmite por vía sexual.',
            'Profilaxis de infecciones oportunistas cuando los CD4 están bajos.',
            'Prevención: condón, profilaxis previa a la exposición (PrEP) y profilaxis posterior a la exposición, iniciada en las primeras 72 horas.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-linfocitos', sectionId: 'hlin-3', label: 'Linfocitos T (inmunidad celular): CD4 y CD8', porQue: 'La célula que el VIH destruye y su papel de coordinadora.' },
    { materia: 'Histología', topicId: 'histologia-linfocitos', sectionId: 'hlin-6', label: 'Correlación clínica: VIH y trasplantes', porQue: 'CD4 menores de 200 = sida.' },
    { materia: 'Histología', topicId: 'histologia-biometria-hematica', sectionId: 'hbh-5', label: 'Caso 3 — VIH/SIDA', porQue: 'Leucopenia y linfopenia en la biometría.' },
    { materia: 'Histología', topicId: 'histologia-linfoide-primarios', sectionId: 'hlp-4', label: 'Maduración y selección del linfocito T', porQue: 'De dónde salen los linfocitos T CD4.' },
    { materia: 'Genética', topicId: 'genetica-dogma-transcripcion', sectionId: 'gdog-1', label: 'El dogma central', porQue: 'El retrovirus invierte el flujo: de ARN a ADN.' },
  ],
  atlas: [
    { id: 'histologia-linfoide-hematopoyesis', title: 'Órganos linfoides y hematopoyesis' },
    { id: 'histologia-biometria-hematica', title: 'Biometría hemática' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 29 años con candidiasis oral que regresa a pesar del tratamiento, pérdida del 12 % de su peso y diarrea de 6 semanas. La prueba rápida de VIH es reactiva.',
    preguntas: [
      q('pat-vih-1', 'vih-sida', '¿Qué sigue tras la prueba rápida reactiva?',
        ['Iniciar tratamiento sin confirmar', 'Confirmar con una segunda prueba según el algoritmo y medir CD4 y carga viral', 'Repetir la misma prueba rápida en un año', 'Biopsia de ganglio'], 1,
        'Un tamizaje reactivo se confirma antes de dar el diagnóstico.'),
      q('pat-vih-2', 'vih-sida', 'Se confirma y sus CD4 son 150/µL. ¿Cómo se clasifica?',
        ['Infección aguda', 'Portadora sin enfermedad', 'Sida', 'Latencia clínica'], 2,
        'CD4 menores de 200/µL definen sida.', 'easy'),
      q('pat-vih-3', 'vih-sida', '¿Cuándo debe iniciar el tratamiento antirretroviral?',
        ['Lo antes posible; se recomienda para todas las personas con VIH', 'Solo cuando los CD4 bajen de 50', 'Cuando la carga viral pase de un millón', 'Después de 6 meses de observación'], 0,
        'La guía de 2025 lo recomienda sin importar CD4 ni síntomas.'),
      q('pat-vih-4', 'vih-sida', '¿Qué enzima permite al VIH integrarse al genoma de la célula?',
        ['ADN polimerasa humana', 'ARN polimerasa', 'Lactasa', 'Transcriptasa inversa'], 3,
        'Forma ADN a partir del ARN viral; después la integrasa lo inserta.'),
      q('pat-vih-5', 'vih-sida', '¿Qué significa «indetectable = intransmisible»?',
        ['Que el virus desapareció del cuerpo', 'Que ya no necesita tratamiento', 'Que la prueba se volvió negativa', 'Que con la carga viral suprimida por el tratamiento no se transmite por vía sexual'], 3,
        'El tratamiento debe mantenerse para conservar la supresión.'),
    ],
  },
  fuentes: [F.vihArv, F.vihGpc],
}

const NEUMONIA: Patologia = {
  id: 'neumonia-adquirida-comunidad',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Neumonía adquirida en la comunidad',
  aka: 'NAC',
  ambito: 'Pulmón',
  resumen:
    'Infección aguda del pulmón adquirida fuera del hospital. Los alvéolos se llenan de exudado inflamatorio y dejan de intercambiar gases. En niños, la taquipnea es el signo más útil y el diagnóstico es sobre todo clínico.',
  sections: [
    {
      id: 'nac-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Neumonía adquirida en la comunidad (GPC SS-120-08)',
          content:
            'Infección pulmonar aguda adquirida fuera del hospital, o que se manifiesta después de 72 horas del egreso hospitalario.',
        },
        {
          type: 'paragraph',
          content:
            'Cuando los microorganismos superan las defensas (sistema mucociliar y macrófagos alveolares), los alvéolos se llenan de neutrófilos, fibrina y líquido: consolidación. La sangre pasa por alvéolos sin aire y baja la oxigenación.',
        },
        {
          type: 'table',
          title: 'Agentes más frecuentes',
          data: {
            headers: ['Grupo', 'Agentes'],
            rows: [
              ['Bacteria más común', 'Streptococcus pneumoniae (neumococo)'],
              ['Menores de 5 años', 'Muchas son virales (virus sincitial respiratorio, influenza)'],
              ['Escolares y adolescentes', 'Mycoplasma pneumoniae, además del neumococo'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Factores de riesgo en niños (GPC)',
          items: [
            'Desnutrición, bajo peso al nacer y lactancia no exclusiva.',
            'Hacinamiento, guardería y humo de tabaco.',
            'Esquema de vacunación incompleto.',
          ],
        },
      ],
    },
    {
      id: 'nac-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          title: 'Lo que se busca (GPC)',
          items: [
            'Fiebre mayor de 38.5 °C y tos.',
            'Taquipnea y dificultad respiratoria: tiraje, aleteo nasal, uso de músculos accesorios.',
            'Estertores a la auscultación.',
            'Saturación de oxígeno menor de 94 %.',
            'En niños, fiebre con dolor abdominal aun sin síntomas respiratorios (neumonía de base).',
            'Gravedad: aspecto general, estado de alerta y capacidad para comer.',
          ],
        },
        {
          type: 'table',
          title: 'Taquipnea según la edad (OMS)',
          data: {
            headers: ['Edad', 'Frecuencia respiratoria'],
            rows: [
              ['Menos de 2 meses', '60 o más por minuto'],
              ['2 a 12 meses', '50 o más por minuto'],
              ['1 a 5 años', '40 o más por minuto'],
            ],
          },
        },
      ],
    },
    {
      id: 'nac-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          title: 'GPC SS-120-08',
          items: [
            'El diagnóstico es clínico.',
            'Radiografía de tórax solo en hospitalizados, ante fiebre con dolor abdominal, sospecha de complicación o estertores sin taquipnea en niños de 12 a 36 meses.',
            'La biometría no se pide a todos; sí a los hospitalizados. Si se hace, leucocitosis con neutrofilia y bandas orienta a una causa bacteriana.',
            'No se recomiendan de rutina la proteína C reactiva, el cultivo faríngeo ni las serologías.',
          ],
        },
      ],
    },
    {
      id: 'nac-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC SS-120-08',
          items: [
            'Ambulatorio, de 2 meses a 5 años: amoxicilina oral 80–90 mg/kg/día en tres dosis, 7 a 10 días.',
            'Mayores de 5 años: azitromicina (cubre Mycoplasma); también en alérgicos a la penicilina.',
            'Hospitalizados: penicilina sódica cristalina IV; se pasa a la vía oral si evoluciona bien a las 72 horas.',
            'Hospitalización ante datos de gravedad: mal aspecto, alteración del estado de alerta, rechazo al alimento, dificultad respiratoria importante o saturación baja.',
            'Prevención: lavado de manos, lactancia materna exclusiva, evitar el humo de tabaco y vacunas contra neumococo, Haemophilus (pentavalente) e influenza.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-epitelios-respiratorio', sectionId: 'hres-4', label: 'Alvéolo y neumocitos', porQue: 'Lo que se llena de exudado en la consolidación.' },
    { materia: 'Histología', topicId: 'histologia-epitelios-respiratorio', sectionId: 'hres-5', label: 'Barrera hematogaseosa y macrófagos', porQue: 'Por qué baja la oxigenación y quién defiende el alvéolo.' },
    { materia: 'Histología', topicId: 'histologia-epitelios-respiratorio', sectionId: 'hres-3', label: 'Sistema mucociliar y cambio por calibre', porQue: 'La primera barrera contra los microorganismos inhalados.' },
    { materia: 'Histología', topicId: 'histologia-biometria-hematica', sectionId: 'hbh-3', label: 'Caso 1 — Neumonía bacteriana en un niño', porQue: 'Neutrofilia con bandas, granulaciones tóxicas y cuerpos de Döhle.' },
    { materia: 'Histología', topicId: 'histologia-leucocitos', sectionId: 'hleu-3', label: 'Granulocitos: neutrófilo, eosinófilo, basófilo', porQue: 'El neutrófilo, célula principal del exudado.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-citocinas-fase-aguda', sectionId: 'bcf-1', label: 'Propiedades de las citocinas', porQue: 'De dónde viene la fiebre y por qué la bajan los antipiréticos.' },
  ],
  atlas: [
    { id: 'histologia-epitelios-especializados', title: 'Epitelios especializados' },
    { id: 'histologia-biometria-hematica', title: 'Biometría hemática' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Niño de 3 años con 2 días de fiebre de 39.2 °C y tos. FR 48 por minuto, tiraje subcostal leve, saturación de 95 % y estertores en la base derecha. Está alerta y come bien. Esquema de vacunación incompleto.',
    preguntas: [
      q('pat-nac-1', 'neumonia-adquirida-comunidad', '¿Tiene taquipnea?',
        ['No, es normal a su edad', 'Sí: de 1 a 5 años, 40 o más por minuto es taquipnea', 'Solo si pasa de 60', 'No se valora en niños'], 1,
        'Es el signo clínico más útil para sospechar neumonía en niños.', 'easy'),
      q('pat-nac-2', 'neumonia-adquirida-comunidad', '¿Necesita radiografía de tórax para el diagnóstico?',
        ['No: se maneja de forma ambulatoria y el diagnóstico es clínico', 'Sí, siempre', 'Sí, y también tomografía', 'Solo después del antibiótico'], 0,
        'La GPC la reserva para hospitalizados, sospecha de complicación y situaciones específicas.'),
      q('pat-nac-3', 'neumonia-adquirida-comunidad', '¿Qué antibiótico le corresponde?',
        ['Azitromicina', 'Ciprofloxacino', 'Amoxicilina oral 80–90 mg/kg/día en tres dosis', 'Ninguno'], 2,
        'Es la primera elección de 2 meses a 5 años en manejo ambulatorio.'),
      q('pat-nac-4', 'neumonia-adquirida-comunidad', '¿Cuál es la bacteria más frecuente?',
        ['Staphylococcus aureus', 'Escherichia coli', 'Pseudomonas aeruginosa', 'Streptococcus pneumoniae'], 3,
        'Por eso la vacuna antineumocócica forma parte de la prevención.'),
      q('pat-nac-5', 'neumonia-adquirida-comunidad', 'Si se le hiciera biometría, ¿qué patrón apoyaría una causa bacteriana?',
        ['Leucocitosis con neutrofilia y bandas', 'Linfocitosis atípica', 'Eosinofilia', 'Pancitopenia'], 0,
        'La médula libera formas jóvenes (desviación a la izquierda).'),
    ],
  },
  fuentes: [F.nac],
}

const RINITIS: Patologia = {
  id: 'rinitis-alergica',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Rinitis alérgica',
  ambito: 'Nariz',
  resumen:
    'Inflamación crónica de la mucosa nasal mediada por IgE. Al contacto con el alérgeno los mastocitos liberan histamina: estornudos en salva, prurito, rinorrea y obstrucción. Se asocia con asma y conjuntivitis.',
  sections: [
    {
      id: 'rin-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Rinitis alérgica (GPC IMSS-041-08)',
          content:
            'Enfermedad inflamatoria crónica de la mucosa nasal mediada por anticuerpos IgE específicos contra alérgenos, cuyos síntomas principales son rinorrea, obstrucción nasal, prurito nasal y estornudos en salva.',
        },
        {
          type: 'steps',
          title: 'Cómo ocurre',
          steps: [
            'Sensibilización: el primer contacto con el alérgeno genera IgE específica, que se fija a los mastocitos.',
            'Reexposición: el alérgeno une dos IgE en el mastocito y este se desgranula.',
            'Fase temprana (minutos): histamina y otros mediadores causan estornudos, prurito y rinorrea.',
            'Fase tardía (horas): llegan eosinófilos y otras células; predomina la obstrucción.',
          ],
        },
        {
          type: 'list',
          title: 'Factores de riesgo (GPC)',
          items: [
            'Atopia familiar.',
            'Ácaros del polvo, epitelios de animales y humo de tabaco.',
            'Exposiciones laborales.',
          ],
        },
      ],
    },
    {
      id: 'rin-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Prurito nasal y faríngeo, estornudos en salva, rinorrea acuosa y obstrucción; síntomas conjuntivales.',
            'La rinorrea predomina en la forma estacional; la obstrucción, en la perenne.',
            'Estigmas alérgicos: ojeras, líneas de Dennie-Morgan bajo los párpados y pliegue nasal transversal por frotarse la nariz.',
            'Se asocia con asma y dermatitis atópica.',
          ],
        },
        {
          type: 'table',
          title: 'Clasificación ARIA',
          data: {
            headers: ['Criterio', 'Categorías'],
            rows: [
              ['Duración', 'Intermitente (menos de 4 días por semana o menos de 4 semanas) o persistente (4 días o más por semana y más de 4 semanas)'],
              ['Gravedad', 'Leve, o moderada-grave si altera el sueño, las actividades, el trabajo o la escuela'],
            ],
          },
        },
      ],
    },
    {
      id: 'rin-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'El diagnóstico es clínico.',
            'Laboratorio de apoyo: eosinofilia e IgE total elevada con el resto de la biometría normal; eosinófilos en el moco nasal.',
            'Pruebas cutáneas con alérgenos en la rinitis persistente moderada-grave que no mejora tras 3 meses de tratamiento supervisado (GPC). No se hacen en embarazadas ni con dermografismo.',
          ],
        },
      ],
    },
    {
      id: 'rin-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-041-08',
          items: [
            'Control ambiental: ácaros, mascotas, humo.',
            'Antihistamínicos H1 de segunda generación (loratadina, fexofenadina): sedan poco. Los de primera generación no se recomiendan en adultos mayores.',
            'Esteroides nasales: primera línea en la rinitis persistente, sobre todo con obstrucción; se dirigen hacia los cornetes, lejos del septum.',
            'Descongestionantes tópicos solo por cursos cortos (menos de una semana): causan rebote y rinitis medicamentosa.',
            'Antileucotrienos como tercera opción; inmunoterapia con alérgenos en casos seleccionados.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-biometria-hematica', sectionId: 'hbh-4', label: 'Caso 2 — Rinitis alérgica estacional', porQue: 'IgE alta y eosinofilia con el resto de la biometría normal.' },
    { materia: 'Histología', topicId: 'histologia-conectivo-celulas', sectionId: 'hctc-4', label: 'Pericito y mastocito', porQue: 'El mastocito que libera histamina.' },
    { materia: 'Histología', topicId: 'histologia-leucocitos', sectionId: 'hleu-3', label: 'Granulocitos: neutrófilo, eosinófilo, basófilo', porQue: 'El eosinófilo de la fase tardía.' },
    { materia: 'Histología', topicId: 'histologia-linfocitos', sectionId: 'hlin-2', label: 'Linfocitos B (inmunidad humoral)', porQue: 'Las células que producen la IgE.' },
    { materia: 'Histología', topicId: 'histologia-epitelios-respiratorio', sectionId: 'hres-2', label: 'Epitelio respiratorio y sus células', porQue: 'La mucosa nasal que se inflama.' },
  ],
  atlas: [
    { id: 'histologia-epitelios-especializados', title: 'Epitelios especializados' },
    { id: 'histologia-conectivo', title: 'Tejido conectivo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 22 años con dermatitis atópica en la infancia y madre asmática. Cada primavera tiene estornudos en salva, comezón en nariz y ojos y moco acuoso; ahora los síntomas no la dejan dormir y la han hecho faltar a clases. Tiene ojeras y pliegue nasal transversal.',
    preguntas: [
      q('pat-rin-1', 'rinitis-alergica', '¿Qué célula libera la histamina?',
        ['Neutrófilo', 'Mastocito', 'Linfocito T CD8', 'Plaqueta'], 1,
        'La IgE fijada al mastocito reconoce el alérgeno y provoca su desgranulación.', 'easy'),
      q('pat-rin-2', 'rinitis-alergica', 'Según ARIA, si dura menos de 4 semanas al año pero altera el sueño y la escuela, es:',
        ['Persistente leve', 'Persistente moderada-grave', 'Intermitente leve', 'Intermitente moderada-grave'], 3,
        'La duración la hace intermitente; la afectación del sueño y las actividades, moderada-grave.'),
      q('pat-rin-3', 'rinitis-alergica', '¿Qué hallazgo de laboratorio la apoya?',
        ['Leucocitosis con neutrofilia', 'Linfopenia', 'Eosinofilia e IgE total elevada con el resto normal', 'Anemia microcítica'], 2,
        'Una parasitosis daría además leucocitosis.'),
      q('pat-rin-4', 'rinitis-alergica', '¿Qué antihistamínico se prefiere?',
        ['De segunda generación, como loratadina o fexofenadina', 'Clorfenamina en dosis altas', 'Difenhidramina por la noche', 'Ninguno'], 0,
        'Sedan poco y duran 24 horas.'),
      q('pat-rin-5', 'rinitis-alergica', '¿Por qué no se usan descongestionantes nasales por más de una semana?',
        ['Porque causan sangrado', 'Porque producen dependencia a la histamina', 'Porque causan rebote y rinitis medicamentosa', 'Porque dañan el cartílago'], 2,
        'La vasoconstricción repetida termina en congestión de rebote.'),
    ],
  },
  fuentes: [F.rinitis],
}

const LLA: Patologia = {
  id: 'leucemia-linfoblastica-aguda',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Leucemia linfoblástica aguda',
  aka: 'LLA',
  ambito: 'Médula ósea',
  resumen:
    'Neoplasia de los precursores de los linfocitos: los linfoblastos ocupan la médula ósea y desplazan la producción normal. Es el cáncer más frecuente en la infancia y, con tratamiento, la mayoría de los niños se cura.',
  sections: [
    {
      id: 'lla-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Un clon de linfoblastos, casi siempre de estirpe B y en menor proporción T, prolifera sin madurar. La médula se llena de blastos y deja de producir eritrocitos, neutrófilos y plaquetas: «la fábrica ocupada».',
        },
        {
          type: 'list',
          title: 'Datos generales',
          items: [
            'Es el cáncer más frecuente en niños; el pico de incidencia está entre los 2 y los 5 años.',
            'El síndrome de Down aumenta el riesgo de leucemia.',
          ],
        },
      ],
    },
    {
      id: 'lla-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'comparison',
          title: 'Dos mecanismos',
          left: {
            title: 'Por la médula ocupada (pancitopenia)',
            items: ['Anemia: palidez y cansancio', 'Neutropenia: fiebre e infecciones', 'Trombocitopenia: petequias, equimosis, sangrado de encías o nariz'],
          },
          right: {
            title: 'Por infiltración',
            items: ['Dolor óseo: cojera o rechazo a caminar', 'Hepatoesplenomegalia y adenomegalias', 'Masa mediastinal en la estirpe T; infiltración del sistema nervioso central'],
          },
        },
      ],
    },
    {
      id: 'lla-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Biometría hemática: anemia y trombocitopenia; los leucocitos pueden estar bajos, normales o altos. El frotis muestra blastos.',
            'Diagnóstico definitivo: aspirado y biopsia de médula ósea, que demuestran la infiltración por linfoblastos.',
            'Inmunofenotipo por citometría de flujo: define si es B o T.',
            'Citogenética y estudios moleculares: definen el riesgo y el tratamiento.',
            'Punción lumbar: busca blastos en el líquido cefalorraquídeo.',
          ],
        },
      ],
    },
    {
      id: 'lla-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'Instituto Nacional del Cáncer (PDQ)',
          items: [
            'Quimioterapia por fases: inducción de la remisión, consolidación o intensificación y mantenimiento, en total de 2 a 3 años.',
            'Tratamiento dirigido al sistema nervioso central para prevenir recaídas ahí.',
            'La intensidad se adapta al riesgo; el trasplante de células progenitoras se reserva para casos de alto riesgo o recaída.',
            'En niños, la supervivencia a 5 años es de alrededor del 90 %.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Síndrome de lisis tumoral',
          content:
            'Al iniciar la quimioterapia, la destrucción masiva de blastos libera su contenido: hiperuricemia (por la degradación de las purinas de su ADN), hiperpotasemia e hiperfosfatemia, que pueden dañar el riñón. Se previene con hidratación y fármacos que bajan el ácido úrico.',
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-medula-hematopoyesis', sectionId: 'hmed-6', label: 'Correlación clínica: leucemia y otras alteraciones', porQue: 'La médula ocupada y la pancitopenia.' },
    { materia: 'Histología', topicId: 'histologia-medula-hematopoyesis', sectionId: 'hmed-4', label: 'Hematopoyesis: HSC y las dos líneas', porQue: 'La línea linfoide de la que sale el linfoblasto.' },
    { materia: 'Histología', topicId: 'histologia-medula-hematopoyesis', sectionId: 'hmed-3', label: 'Médula ósea: roja y amarilla', porQue: 'Dónde se toma el aspirado.' },
    { materia: 'Histología', topicId: 'histologia-linfocitos', sectionId: 'hlin-2', label: 'Linfocitos B (inmunidad humoral)', porQue: 'La estirpe más frecuente de la LLA.' },
    { materia: 'Histología', topicId: 'histologia-biometria-hematica', sectionId: 'hbh-2', label: 'Valores de referencia y su significado', porQue: 'Leer la pancitopenia en la biometría.' },
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-4', label: 'Síndromes por aneuploidía', porQue: 'El síndrome de Down aumenta el riesgo de leucemia.' },
  ],
  atlas: [
    { id: 'histologia-linfoide-hematopoyesis', title: 'Órganos linfoides y hematopoyesis' },
    { id: 'histologia-biometria-hematica', title: 'Biometría hemática' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Niña de 4 años con 3 semanas de palidez, fiebre intermitente, petequias en piernas y dolor en las piernas: no quiere caminar. Tiene hepatoesplenomegalia. Biometría: Hb 7.2 g/dL, plaquetas 28 000/µL, leucocitos 3100/µL con 40 % de blastos.',
    preguntas: [
      q('pat-lla-1', 'leucemia-linfoblastica-aguda', '¿Por qué tiene anemia, neutropenia y trombocitopenia a la vez?',
        ['Por una hemorragia', 'Porque los blastos ocupan la médula y desplazan la producción normal', 'Por destrucción en el bazo', 'Por deficiencia de hierro'], 1,
        'Es la pancitopenia de la médula ocupada.', 'easy'),
      q('pat-lla-2', 'leucemia-linfoblastica-aguda', '¿Qué confirma el diagnóstico?',
        ['Aspirado y biopsia de médula ósea con inmunofenotipo', 'Repetir la biometría', 'Ultrasonido abdominal', 'Radiografía de huesos largos'], 0,
        'Demuestra la infiltración y define si es de estirpe B o T.'),
      q('pat-lla-3', 'leucemia-linfoblastica-aguda', '¿Qué explica las petequias?',
        ['La anemia', 'La neutropenia', 'La fiebre', 'La trombocitopenia'], 3,
        'Con menos de 50 000 plaquetas aparecen petequias y sangrados.'),
      q('pat-lla-4', 'leucemia-linfoblastica-aguda', '¿Por qué no quiere caminar?',
        ['Por debilidad muscular', 'Por artritis séptica', 'Por dolor óseo debido a la infiltración de la médula', 'Por hipocalcemia'], 2,
        'Los blastos expanden la cavidad medular y causan dolor.'),
      q('pat-lla-5', 'leucemia-linfoblastica-aguda', 'Al iniciar la quimioterapia, ¿qué alteración se vigila?',
        ['Hipoglucemia', 'Síndrome de lisis tumoral: ácido úrico, potasio y fósforo altos', 'Hipernatremia', 'Alcalosis respiratoria'], 1,
        'La destrucción de blastos libera su contenido; el ácido úrico viene de sus purinas.'),
    ],
  },
  fuentes: [F.lla],
}

const QUEMADURAS: Patologia = {
  id: 'quemaduras',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Quemaduras',
  ambito: 'Piel',
  resumen:
    'Lesión de la piel por calor, electricidad, químicos o radiación. La profundidad depende de qué capas destruye: la epidermis se regenera; si se pierde toda la dermis, ya no hay de dónde reepitelizar y hace falta un injerto.',
  sections: [
    {
      id: 'que-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Quemadura (GPC SSA-090-08)',
          content:
            'Deshidratación súbita del tejido por diferentes agentes, con desnaturalización de las proteínas, destrucción celular y pérdida de la continuidad de la piel.',
        },
        {
          type: 'list',
          title: 'Causas',
          items: [
            'En niños, sobre todo líquidos calientes en el hogar (cocina y baño); los menores de 5 años son los más afectados.',
            'Fuego directo, electricidad, químicos, radiación e inhalación de humo.',
          ],
        },
      ],
    },
    {
      id: 'que-2',
      title: 'Profundidad: lo que dice la histología',
      blocks: [
        {
          type: 'table',
          data: {
            headers: ['Grado', 'Capas afectadas', 'Aspecto', 'Dolor', 'Curación'],
            rows: [
              ['Primero (epidérmica)', 'Solo epidermis', 'Eritema, sin ampollas', 'Sí', '3–7 días, sin cicatriz'],
              ['Segundo superficial', 'Epidermis y dermis papilar', 'Ampollas, rosado y húmedo; llenado capilar presente', 'Mucho', '2–3 semanas desde los anexos'],
              ['Segundo profundo', 'Hasta la dermis reticular', 'Blanquecino o moteado; llenado capilar lento o ausente', 'Menos', 'Más de 3 semanas; deja cicatriz o requiere injerto'],
              ['Tercero (espesor total)', 'Toda la dermis, a veces la hipodermis', 'Blanco nacarado, acartonado o escara', 'No: se destruyeron las terminaciones nerviosas', 'Requiere injerto'],
            ],
          },
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Por qué sangra o no',
          content:
            'La epidermis es avascular: una quemadura que solo la afecta no sangra. Si alcanza la dermis, que sí tiene vasos, sangra. Los folículos y glándulas de la dermis guardan células epiteliales que regeneran la piel en las quemaduras de segundo grado superficial.',
        },
      ],
    },
    {
      id: 'que-3',
      title: 'Extensión',
      blocks: [
        {
          type: 'list',
          items: [
            'Regla de los 9 en adultos: cabeza 9 %, cada miembro superior 9 %, tronco anterior 18 %, tronco posterior 18 %, cada miembro inferior 18 %, genitales 1 %.',
            'La palma de la mano del paciente, con los dedos, equivale a cerca del 1 %.',
            'En niños se usa el esquema de Lund y Browder, porque la cabeza es proporcionalmente mayor (GPC).',
            'Solo se suman las quemaduras de segundo y tercer grado.',
          ],
        },
      ],
    },
    {
      id: 'que-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'steps',
          title: 'Primeros auxilios (GPC SSA-090-08)',
          steps: [
            'Asegurar la escena; si hay llamas, cubrir con una manta y rodar; en la eléctrica, cortar la corriente antes de tocar.',
            'Retirar ropa y joyas, que retienen calor.',
            'Enfriar con agua corriente (8–15 °C) al menos 20 minutos. No usar hielo: profundiza la lesión y causa hipotermia.',
            'Cubrir con apósito o tela limpia y seca; no aplicar remedios tópicos hasta valorar la profundidad.',
          ],
        },
        {
          type: 'list',
          title: 'Atención médica',
          items: [
            'Vía aérea, ventilación y circulación primero; sospechar inhalación si hay quemaduras faciales, hollín o ronquera.',
            'Líquidos IV si la superficie quemada es de 10 % o más en niños o de 15 % o más en adultos: 3–4 mL/kg por cada % quemado en 24 horas, la mitad en las primeras 8 horas.',
            'Analgesia y profilaxis antitetánica.',
            'Referir: quemaduras en cara, manos, pies, genitales o articulaciones; eléctricas, químicas o por inhalación; circunferenciales; extensas; en los extremos de la vida, y ante sospecha de maltrato.',
            'Las que no sanan en 14 días se envían a segundo nivel.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-piel', sectionId: 'hpiel-2', label: 'Componentes: epidermis, dermis e hipodermis', porQue: 'Las capas que definen el grado.' },
    { materia: 'Histología', topicId: 'histologia-piel', sectionId: 'hpiel-3', label: 'Epidermis y los cinco estratos', porQue: 'El estrato basal que regenera la epidermis.' },
    { materia: 'Histología', topicId: 'histologia-piel', sectionId: 'hpiel-7', label: 'Correlaciones clínicas de la piel', porQue: 'La quemadura que llega a la dermis sangra.' },
    { materia: 'Histología', topicId: 'histologia-epitelial', sectionId: 'hepi-8', label: 'Nutrición del epitelio y glándulas', porQue: 'El epitelio es avascular y se nutre por difusión.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-presion-osmotica-oncotica', sectionId: 'bpo-7', label: 'Fuerzas de Starling', porQue: 'La fuga de plasma y el edema del paciente quemado.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-presion-osmotica-oncotica', sectionId: 'bpo-8', label: 'Cristaloides, coloides y tonicidad', porQue: 'Las soluciones de la reanimación.' },
    { materia: 'Histología', topicId: 'histologia-introduccion', sectionId: 'hint-3', label: 'Capacidad regenerativa por tejido', porQue: 'El epitelio regenera: las quemaduras superficiales cierran solas; las profundas dejan cicatriz.' },
  ],
  atlas: [
    { id: 'histologia-piel', title: 'La piel' },
    { id: 'histologia-epitelio', title: 'Tejido epitelial' },
    { id: 'histologia-introduccion', title: 'Introducción a la histología' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Niño de 3 años (14 kg) que se vació encima una olla de agua hirviendo hace 30 minutos. Tiene lesiones en la cara anterior del tórax y en todo el brazo derecho: ampollas, piel rosada y húmeda, muy dolorosa, con llenado capilar presente. Su mamá le puso hielo.',
    preguntas: [
      q('pat-que-1', 'quemaduras', '¿Qué profundidad tienen las lesiones?',
        ['Primer grado', 'Segundo grado superficial', 'Segundo grado profundo', 'Tercer grado'], 1,
        'Ampollas, rosado, húmedo, muy doloroso y llenado capilar presente: epidermis y dermis papilar.'),
      q('pat-que-2', 'quemaduras', '¿Qué esquema estima mejor la extensión en un niño?',
        ['Regla de los 9 del adulto', 'Escala de Glasgow', 'Esquema de Lund y Browder', 'Clasificación de Garden'], 2,
        'Ajusta los porcentajes porque la cabeza del niño es proporcionalmente mayor.'),
      q('pat-que-3', 'quemaduras', '¿Qué se debió hacer en lugar del hielo?',
        ['Aplicar pasta dental', 'Enfriar con agua corriente al menos 20 minutos', 'Reventar las ampollas', 'Cubrir con pomada de inmediato'], 1,
        'El hielo profundiza la quemadura y causa hipotermia.', 'easy'),
      q('pat-que-4', 'quemaduras', 'Si la extensión fuera del 12 %, ¿qué indica la GPC?',
        ['Solo analgesia oral', 'Líquidos IV, porque en niños se reponen desde el 10 %', 'Esperar 24 horas', 'Antibiótico tópico y alta'], 1,
        '3–4 mL/kg por cada % quemado en 24 horas, la mitad en las primeras 8.'),
      q('pat-que-5', 'quemaduras', '¿Por qué una quemadura de tercer grado no duele?',
        ['Porque la epidermis está intacta', 'Porque el paciente está en choque', 'Porque se destruyeron las terminaciones nerviosas de la dermis', 'Porque se aplicó agua fría'], 2,
        'El dolor intenso, en cambio, indica que la dermis sigue viva.'),
    ],
  },
  fuentes: [F.quemadurasNinos, F.granQuemado],
}

/* ── Anatomía ───────────────────────────────────────────────────── */

const BELL: Patologia = {
  id: 'paralisis-bell',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Parálisis de Bell',
  aka: 'Parálisis facial idiopática',
  ambito: 'Cara',
  resumen:
    'Parálisis periférica aguda del nervio facial (VII) sin causa identificable. Paraliza toda la mímica de un lado, incluida la frente, y deja intacta la masticación. Con esteroide en las primeras 72 horas y protección del ojo, la mayoría se recupera.',
  sections: [
    {
      id: 'bel-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Parálisis de Bell (GPC IMSS-066-08)',
          content:
            'Parálisis del VII nervio craneal de tipo periférico y de comienzo agudo; puede ser completa o incompleta. Es un diagnóstico de exclusión.',
        },
        {
          type: 'table',
          title: 'Qué hace el nervio facial',
          data: {
            headers: ['Función', 'Qué se pierde'],
            rows: [
              ['Músculos de la mímica', 'Frente, cierre del ojo, sonrisa del lado afectado'],
              ['Músculo estapedio', 'Hiperacusia: los ruidos se oyen más fuertes'],
              ['Cuerda del tímpano', 'Gusto de los dos tercios anteriores de la lengua (disgeusia)'],
              ['Glándula lagrimal', 'Alteración del lagrimeo'],
            ],
          },
        },
        {
          type: 'comparison',
          title: 'Periférica frente a central',
          left: {
            title: 'Periférica (Bell)',
            items: ['Lesión del nervio', 'Se paraliza toda la hemicara, incluida la frente', 'No hay otros déficits neurológicos'],
          },
          right: {
            title: 'Central (por ejemplo, un EVC)',
            items: ['Lesión por encima del núcleo', 'Se respeta la frente: su parte del núcleo recibe fibras de ambos hemisferios', 'Suele acompañarse de hemiparesia u otros déficits'],
          },
        },
      ],
    },
    {
      id: 'bel-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Pérdida de la expresión de un lado de la cara de inicio agudo, que progresa en horas.',
            'No puede arrugar la frente ni cerrar el ojo (lagoftalmos); al intentarlo, el ojo gira hacia arriba (signo de Bell).',
            'La comisura se desvía hacia el lado sano; se le escurren los líquidos.',
            'Lagrimeo, dolor detrás de la oreja, hiperacusia y alteración del gusto.',
            'La masticación es normal: los músculos masticadores dependen del nervio trigémino (V3).',
          ],
        },
        {
          type: 'note',
          content:
            'La gravedad se gradúa con la escala de House-Brackmann, de I (normal) a VI (parálisis total).',
        },
      ],
    },
    {
      id: 'bel-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'El diagnóstico es clínico y por exclusión.',
            'Descartar: otitis, herpes zóster ótico (síndrome de Ramsay Hunt: vesículas en el oído), tumores, enfermedad vascular cerebral y episodios recurrentes.',
            'La electromiografía la indica el especialista en rehabilitación en los casos graves o que no mejoran.',
          ],
        },
      ],
    },
    {
      id: 'bel-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-066-08',
          items: [
            'Prednisona en las primeras 72 horas, con reducción progresiva en una semana.',
            'Proteger el ojo que no cierra: lágrimas artificiales (hipromelosa) cada hora de día y oclusión nocturna.',
            'Rehabilitación a partir del sexto día según el grado de House-Brackmann.',
            'Envío urgente si baja de forma súbita la agudeza visual o hay úlcera corneal.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'musculos-cara-craneo', sectionId: 'mcara-1', label: 'La mímica: toda por el VII', porQue: 'Todos los músculos que se paralizan.' },
    { materia: 'Anatomía', topicId: 'musculos-cara-craneo', sectionId: 'mcara-5', label: 'Masticación (V3) vs. mímica (VII)', porQue: 'Por qué la mordida queda intacta.' },
    { materia: 'Anatomía', topicId: 'musculos-cara-craneo', sectionId: 'mcara-3', label: 'Periorbitarios y de la nariz', porQue: 'El orbicular de los ojos que ya no cierra el párpado.' },
    { materia: 'Anatomía', topicId: 'musculos-cara-craneo', sectionId: 'mcara-4', label: 'Peribucales', porQue: 'La comisura que se desvía.' },
    { materia: 'Anatomía', topicId: 'musculos-masticacion', sectionId: 'mmast-1', label: 'Los cuatro músculos masticatorios', porQue: 'Inervados por V3, no por el facial.' },
  ],
  atlas: [
    { id: 'musculos-cabeza', title: 'Músculos de la cabeza' },
    { id: 'huesos-craneo', title: 'Huesos del Cráneo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 35 años que amaneció con la cara «chueca». No puede cerrar el ojo derecho ni arrugar la frente de ese lado, la comisura se desvía a la izquierda y desde ayer le duele detrás de la oreja derecha. Mastica sin problema. No hay vesículas en el oído ni otros déficits neurológicos.',
    preguntas: [
      q('pat-bel-1', 'paralisis-bell', '¿Qué nervio está afectado?',
        ['Trigémino derecho', 'Facial izquierdo', 'Facial derecho, de tipo periférico', 'Hipogloso derecho'], 2,
        'La comisura se desvía hacia el lado sano, el izquierdo.', 'easy'),
      q('pat-bel-2', 'paralisis-bell', '¿Qué dato indica que la lesión es periférica y no central?',
        ['Que la frente está paralizada', 'Que la comisura está desviada', 'Que le duele la oreja', 'Que es un hombre joven'], 0,
        'En la lesión central la frente se respeta por su inervación bilateral.'),
      q('pat-bel-3', 'paralisis-bell', '¿Por qué mastica normal?',
        ['Porque la lesión es incompleta', 'Porque el facial tiene dos ramas', 'Porque compensa con el lado sano', 'Porque los masticadores los inerva el trigémino (V3)'], 3,
        'Distinguir mímica de masticación localiza la lesión.'),
      q('pat-bel-4', 'paralisis-bell', '¿Cuál es el manejo?',
        ['Antibiótico y observación', 'Cirugía de descompresión inmediata', 'Solo masaje', 'Prednisona en las primeras 72 horas y protección del ojo'], 3,
        'El ojo que no cierra puede sufrir una úlcera corneal.'),
      q('pat-bel-5', 'paralisis-bell', 'Si tuviera vesículas en el conducto auditivo, ¿qué se sospecharía?',
        ['Otitis externa bacteriana', 'Síndrome de Ramsay Hunt (herpes zóster ótico)', 'Enfermedad vascular cerebral', 'Parálisis de Bell típica'], 1,
        'Es una causa identificable: ya no es parálisis de Bell.'),
    ],
  },
  fuentes: [F.bell],
}

const CADERA: Patologia = {
  id: 'fractura-cuello-femoral',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Fractura del cuello femoral',
  aka: 'Fractura de cadera intracapsular',
  ambito: 'Cadera',
  resumen:
    'Fractura del extremo proximal del fémur dentro de la cápsula articular. Es típica del adulto mayor con osteoporosis tras una caída simple; al desplazarse puede romper las arterias que nutren la cabeza femoral y causar necrosis avascular.',
  sections: [
    {
      id: 'cad-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Fracturas intracapsulares del extremo proximal del fémur (GPC IMSS-115-08)',
          content:
            'Las que ocurren desde la superficie articular de la cabeza femoral hasta la inserción de la cápsula, en la línea que une los trocánteres: capitales y cervicales (subcapital, transcervical y basicervical).',
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Por qué se necrosa la cabeza',
          content:
            'La cabeza femoral recibe sangre sobre todo de la arteria circunfleja femoral medial, cuyas ramas suben por el cuello por debajo de la cápsula. Una fractura desplazada las rompe. La arteria del ligamento redondo aporta poco en el adulto. Las fracturas extracapsulares (intertrocantéricas) respetan esta irrigación.',
        },
        {
          type: 'list',
          title: 'Factores de riesgo (GPC)',
          items: [
            'No modificables: sexo femenino, edad mayor de 75 años, antecedente materno de fractura de cadera, osteoporosis, demencia.',
            'Modificables: tabaquismo, alcoholismo, bajo peso, sedentarismo, baja ingesta de calcio, deficiencia de estrógenos.',
          ],
        },
      ],
    },
    {
      id: 'cad-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Adulto mayor que cae desde su propia altura; en jóvenes se necesita un traumatismo de alta energía.',
            'Dolor en la ingle al mover la cadera y no puede caminar ni levantar el talón de la cama.',
            'Si está desplazada: miembro acortado y en rotación externa.',
            'Las fracturas impactadas pueden permitir caminar con dolor: hay que sospecharlas.',
          ],
        },
      ],
    },
    {
      id: 'cad-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-115-08',
          items: [
            'Radiografía anteroposterior de cadera con rotación interna de 15° y proyección axial.',
            'Si el dolor persiste con radiografías normales: tomografía o resonancia (fractura oculta).',
          ],
        },
        {
          type: 'table',
          title: 'Clasificación de Garden',
          data: {
            headers: ['Tipo', 'Descripción'],
            rows: [
              ['I', 'Incompleta o impactada en valgo'],
              ['II', 'Completa, sin desplazamiento'],
              ['III', 'Completa, parcialmente desplazada'],
              ['IV', 'Completa, totalmente desplazada'],
            ],
          },
        },
      ],
    },
    {
      id: 'cad-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-115-08',
          items: [
            'Cirugía temprana en un centro especializado.',
            'No desplazadas o impactadas: fijación interna con tres tornillos canulados paralelos antes de que se desplacen.',
            'Desplazadas en el adulto mayor: hemiartroplastia; reemplazo total en ancianos sanos y activos.',
            'Antibiótico profiláctico y tromboprofilaxis (por ejemplo, enoxaparina 40 mg al día) hasta que camine.',
            'Rehabilitación y movilización tempranas; tratar la osteoporosis con calcio (1000–1500 mg/día) y vitamina D (400–800 UI/día).',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'miembro-inferior-oseo', sectionId: 'minf-2', label: 'Fémur: epífisis superior', porQue: 'Cabeza, cuello y trocánteres.' },
    { materia: 'Anatomía', topicId: 'articulaciones-miembro-inferior', sectionId: 'aminf-1', label: 'Coxofemoral (cadera)', porQue: 'La cápsula, el ligamento redondo y la irrigación de la cabeza.' },
    { materia: 'Anatomía', topicId: 'hueso-coxal', sectionId: 'cox-5', label: 'Acetábulo', porQue: 'La otra mitad de la articulación.' },
    { materia: 'Anatomía', topicId: 'musculos-cadera-muslo', sectionId: 'mcm-3', label: 'Rotadores externos', porQue: 'Los músculos que dejan el miembro en rotación externa.' },
    { materia: 'Histología', topicId: 'histologia-hueso', sectionId: 'hhue-7', label: 'Remodelación y regulación', porQue: 'La osteoporosis que debilita el cuello femoral.' },
    { materia: 'Medicina Humanística', topicId: 'humanistica-envejecimiento', sectionId: 'hen-3', label: 'Etapas de la vejez y cambios asociados', porQue: 'Menos masa muscular y ósea, y el círculo vicioso del miedo a caer.' },
  ],
  atlas: [
    { id: 'miembro-inferior-oseo', title: 'Miembro inferior óseo' },
    { id: 'articulaciones-miembro-inferior', title: 'Articulación coxofemoral (cadera)' },
    { id: 'hueso-coxal', title: 'Hueso coxal' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 81 años con osteoporosis que se cae en su casa al levantarse de noche. No puede ponerse de pie; le duele la ingle izquierda. El miembro inferior izquierdo está acortado y en rotación externa, y no puede levantar el talón de la cama.',
    preguntas: [
      q('pat-fcf-1', 'fractura-cuello-femoral', '¿Cuál es el diagnóstico más probable?',
        ['Luxación de rodilla', 'Fractura del cuello femoral', 'Esguince de tobillo', 'Lumbalgia'], 1,
        'Caída simple, adulta mayor con osteoporosis, acortamiento y rotación externa.', 'easy'),
      q('pat-fcf-2', 'fractura-cuello-femoral', '¿Qué estudios se piden?',
        ['Resonancia de columna', 'Ultrasonido de cadera', 'Radiografía AP de cadera con rotación interna de 15° y axial', 'Densitometría'], 2,
        'Son las proyecciones que indica la GPC; la densitometría viene después.'),
      q('pat-fcf-3', 'fractura-cuello-femoral', '¿Por qué una fractura desplazada puede necrosar la cabeza femoral?',
        ['Porque rompe las ramas de la arteria circunfleja femoral medial que suben por el cuello', 'Porque se infecta', 'Porque comprime el nervio femoral', 'Porque se forma un trombo venoso'], 0,
        'La arteria del ligamento redondo no basta en el adulto.'),
      q('pat-fcf-4', 'fractura-cuello-femoral', 'Es una Garden IV. ¿Qué tratamiento corresponde a su edad?',
        ['Reposo en cama 3 meses', 'Yeso pelvipédico', 'Tres tornillos canulados', 'Hemiartroplastia'], 3,
        'En el adulto mayor con fractura desplazada se reemplaza la cabeza.'),
      q('pat-fcf-5', 'fractura-cuello-femoral', '¿Por qué se busca operar y movilizar pronto?',
        ['Para reducir el dolor solamente', 'Porque la inmovilidad causa trombosis, neumonía y úlceras por presión', 'Porque la fractura se cura sola', 'Para evitar la osteoporosis'], 1,
        'Por eso además se da tromboprofilaxis.'),
    ],
  },
  fuentes: [F.cadera],
}

const EPIDURAL: Patologia = {
  id: 'hematoma-epidural',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Hematoma epidural',
  ambito: 'Cráneo',
  resumen:
    'Sangrado entre el hueso del cráneo y la duramadre, casi siempre por una fractura temporal que rompe la arteria meníngea media bajo el pterión. Es arterial y crece rápido: una urgencia neuroquirúrgica.',
  sections: [
    {
      id: 'epi-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El pterión, donde se unen el frontal, el parietal, el temporal y el ala mayor del esfenoides, es el punto más delgado del cráneo. Por dentro pasa la arteria meníngea media, que entra al cráneo por el foramen espinoso. Un golpe ahí fractura el hueso y rompe la arteria.',
        },
        {
          type: 'comparison',
          title: 'Epidural frente a subdural',
          left: {
            title: 'Epidural',
            items: ['Entre el hueso y la duramadre', 'Arterial (meníngea media)', 'Lente biconvexa en la tomografía', 'No cruza las suturas, donde la duramadre está adherida'],
          },
          right: {
            title: 'Subdural',
            items: ['Entre la duramadre y la aracnoides', 'Venoso (venas puente)', 'Forma de media luna', 'Sí cruza las suturas; más frecuente en ancianos y alcohólicos'],
          },
        },
      ],
    },
    {
      id: 'epi-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'steps',
          title: 'La secuencia clásica',
          steps: [
            'Golpe en la región temporal con pérdida breve del conocimiento.',
            'Intervalo lúcido: el paciente se recupera y habla bien (no siempre aparece).',
            'Deterioro rápido mientras el hematoma crece: cefalea intensa, vómito y somnolencia.',
            'Herniación del uncus: pupila dilatada del mismo lado (compresión del III nervio) y debilidad del lado contrario.',
          ],
        },
        {
          type: 'table',
          title: 'Escala de coma de Glasgow',
          data: {
            headers: ['Respuesta', 'Puntos'],
            rows: [
              ['Apertura ocular', '1 a 4'],
              ['Respuesta verbal', '1 a 5'],
              ['Respuesta motora', '1 a 6'],
              ['Gravedad del traumatismo (GPC)', 'Leve 14–15 · moderado 9–13 · grave menos de 9'],
            ],
          },
        },
      ],
    },
    {
      id: 'epi-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Tomografía simple de cráneo: colección hiperdensa en forma de lente biconvexa. La GPC SSA-016-08 indica tomografía y valoración neuroquirúrgica en todo traumatismo de alto riesgo.',
        },
        {
          type: 'list',
          title: 'Traumatismo de alto riesgo (GPC)',
          items: [
            'Factores de riesgo: edad mayor de 65 años, coagulopatía o anticoagulantes, mecanismo peligroso (caída de más de 1 metro o 5 escalones, atropellamiento, salir despedido de un vehículo).',
            'Signos de alarma: amnesia de más de 30 minutos, cefalea persistente, 2 o más vómitos, cambios pupilares, déficit focal, crisis convulsivas, fractura de cráneo, caída de 2 o más puntos en el Glasgow, Glasgow de 13 o menos en cualquier momento.',
            'Sin factores ni signos: observar al menos 4 horas y dar de alta con un familiar que lo vigile.',
          ],
        },
      ],
    },
    {
      id: 'epi-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Vía aérea, ventilación y circulación, con protección de la columna cervical.',
            'Medir la glucosa en todo paciente con alteración del estado de alerta (GPC).',
            'Craneotomía urgente para evacuar el hematoma y controlar la arteria: el pronóstico depende del tiempo.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'huesos-craneo', sectionId: 'cra-8', label: 'Suturas y puntos craneométricos', porQue: 'El pterión y las suturas que el hematoma no cruza.' },
    { materia: 'Anatomía', topicId: 'huesos-craneo', sectionId: 'cra-9', label: 'Forámenes de las fosas craneales', porQue: 'El foramen espinoso, por donde entra la arteria meníngea media.' },
    { materia: 'Anatomía', topicId: 'huesos-craneo', sectionId: 'cra-4', label: 'Hueso esfenoides', porQue: 'El ala mayor que forma el pterión.' },
    { materia: 'Anatomía', topicId: 'huesos-craneo', sectionId: 'cra-1', label: 'Constitución del cráneo', porQue: 'La correlación del pterión y el hematoma epidural.' },
  ],
  atlas: [
    { id: 'huesos-craneo', title: 'Huesos del Cráneo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 22 años golpeado con un bate en la sien derecha. Perdió el conocimiento un minuto y después habló con normalidad. Dos horas más tarde tiene cefalea intensa, vomita dos veces y está somnoliento. Pupila derecha dilatada, debilidad del lado izquierdo. Glasgow de 9.',
    preguntas: [
      q('pat-epi-1', 'hematoma-epidural', '¿Qué vaso se rompió con más probabilidad?',
        ['Arteria cerebral media', 'Venas puente', 'Arteria meníngea media', 'Seno sagital superior'], 2,
        'Pasa por dentro del pterión, el punto más delgado del cráneo.', 'easy'),
      q('pat-epi-2', 'hematoma-epidural', '¿Cómo se llama el periodo en que habló con normalidad?',
        ['Intervalo lúcido', 'Amnesia anterógrada', 'Estado postictal', 'Conmoción'], 0,
        'El hematoma sigue creciendo aunque el paciente parezca bien.'),
      q('pat-epi-3', 'hematoma-epidural', '¿Por qué se dilata la pupila derecha?',
        ['Por lesión directa del ojo', 'Por el golpe en la órbita', 'Por compresión del III nervio craneal derecho al herniarse el uncus', 'Por el vómito'], 2,
        'La herniación del mismo lado comprime el nervio oculomotor.'),
      q('pat-epi-4', 'hematoma-epidural', '¿Qué forma tendrá en la tomografía?',
        ['Media luna que cruza suturas', 'Puntos dispersos en el parénquima', 'Sangre en las cisternas', 'Lente biconvexa que no cruza suturas'], 3,
        'La duramadre adherida en las suturas limita su extensión.'),
      q('pat-epi-5', 'hematoma-epidural', 'Con Glasgow de 9, ¿qué gravedad tiene el traumatismo según la GPC?',
        ['Leve', 'Grave', 'No se clasifica', 'Moderado'], 3,
        'Moderado es de 9 a 13 puntos; grave, menos de 9.'),
    ],
  },
  fuentes: [F.tce],
}

const SINUSITIS: Patologia = {
  id: 'rinosinusitis-aguda',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Rinosinusitis aguda',
  aka: 'Sinusitis aguda',
  ambito: 'Senos paranasales',
  resumen:
    'Inflamación de la mucosa de la nariz y los senos paranasales. Casi siempre es viral y se resuelve sola; el seno maxilar es el que más se afecta porque drena por un orificio alto. Los antibióticos se reservan para la sospecha bacteriana.',
  sections: [
    {
      id: 'sin-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Rinosinusitis aguda (GPC IMSS-080-08)',
          content:
            'Inflamación de la mucosa de la nariz y los senos paranasales.',
        },
        {
          type: 'paragraph',
          content:
            'Los senos (maxilar, frontal, etmoidales y esfenoidal) están revestidos de epitelio respiratorio ciliado que arrastra el moco hacia sus orificios de drenaje. Si la mucosa se inflama y el orificio se cierra, el moco se estanca y puede infectarse. La mayoría de los casos empieza con un resfriado viral.',
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'Por qué el maxilar',
          content:
            'El seno maxilar es el más grande y drena por un orificio alto en su pared medial, hacia el meato medio: de pie drena mal. Además, las raíces de los molares superiores están cerca de su piso, por eso hay sinusitis de origen dental.',
        },
      ],
    },
    {
      id: 'sin-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'comparison',
          title: 'Síntomas (GPC)',
          left: { title: 'Mayores', items: ['Rinorrea purulenta', 'Obstrucción nasal', 'Dolor o presión facial', 'Hiposmia o anosmia', 'Fiebre'] },
          right: { title: 'Menores', items: ['Cefalea', 'Tos', 'Halitosis', 'Fatiga', 'Dolor de oído o plenitud ótica', 'Dolor dental'] },
        },
        {
          type: 'note',
          content:
            'Dos síntomas mayores, o uno mayor y dos menores, bastan para el diagnóstico. El dolor del seno maxilar aumenta al inclinar la cabeza.',
        },
      ],
    },
    {
      id: 'sin-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'El diagnóstico es clínico; no se recomiendan radiografías cuando el diagnóstico clínico es claro (GPC).',
            'Sospecha bacteriana (IDSA): síntomas que duran más de 10 días sin mejoría, cuadro grave con fiebre alta y rinorrea purulenta desde el inicio, o empeoramiento después de haber mejorado.',
            'La tomografía se reserva para complicaciones o enfermedad crónica.',
          ],
        },
      ],
    },
    {
      id: 'sin-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Medidas generales: lavados nasales con solución salina y paracetamol para el dolor o la fiebre.',
            'Descongestionante tópico (oximetazolina) solo 3 a 4 días.',
            'Sospecha bacteriana: amoxicilina; en alérgicos a la penicilina, trimetoprima con sulfametoxazol (GPC).',
            'Envío urgente (GPC): alteraciones visuales, edema, eritema o dolor alrededor del ojo, edema facial, cambios en el estado mental o datos de meningitis.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'huesos-cara-hioides', sectionId: 'cah-2', label: 'Maxilar', porQue: 'El seno maxilar y su relación con los molares.' },
    { materia: 'Anatomía', topicId: 'huesos-cara-hioides', sectionId: 'cah-1', label: 'Constitución del macizo facial', porQue: 'Por qué el seno maxilar drena mal de pie.' },
    { materia: 'Anatomía', topicId: 'huesos-craneo', sectionId: 'cra-3', label: 'Hueso etmoides', porQue: 'Las celdillas etmoidales, vecinas de la órbita.' },
    { materia: 'Anatomía', topicId: 'huesos-craneo', sectionId: 'cra-2', label: 'Hueso frontal', porQue: 'El seno frontal.' },
    { materia: 'Histología', topicId: 'histologia-epitelios-respiratorio', sectionId: 'hres-3', label: 'Sistema mucociliar y cambio por calibre', porQue: 'Los cilios que drenan el moco de los senos.' },
  ],
  atlas: [
    { id: 'huesos-cara-hioides', title: 'Huesos de la Cara' },
    { id: 'huesos-craneo', title: 'Huesos del Cráneo' },
    { id: 'histologia-epitelios-especializados', title: 'Epitelios especializados' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 30 años con un resfriado de hace 12 días que no mejora: moco verde, obstrucción nasal y dolor en la mejilla derecha que aumenta al agacharse; le duelen los molares superiores derechos. Temperatura de 37.8 °C. No tiene molestias en los ojos ni edema alrededor de ellos.',
    preguntas: [
      q('pat-sin-1', 'rinosinusitis-aguda', '¿Cumple los criterios de la GPC?',
        ['No, faltan síntomas', 'Solo si tiene fiebre alta', 'Sí: tiene varios síntomas mayores (rinorrea purulenta, obstrucción, dolor facial)', 'No, porque es un resfriado'], 2,
        'Dos mayores, o uno mayor y dos menores, bastan.', 'easy'),
      q('pat-sin-2', 'rinosinusitis-aguda', '¿Qué seno es el más probable y por qué se afecta tanto?',
        ['Maxilar: drena por un orificio alto en su pared medial', 'Frontal: es el más grande', 'Esfenoidal: está más expuesto', 'Etmoidal: no tiene cilios'], 0,
        'Además está cerca de las raíces de los molares superiores.'),
      q('pat-sin-3', 'rinosinusitis-aguda', 'Con 12 días sin mejoría, ¿qué sugiere?',
        ['Que es viral y no requiere nada', 'Una alergia', 'Que es crónica', 'Sospecha bacteriana: se justifica la amoxicilina'], 3,
        'Más de 10 días sin mejoría es uno de los criterios de la IDSA.'),
      q('pat-sin-4', 'rinosinusitis-aguda', '¿Necesita radiografía?',
        ['No: el diagnóstico clínico es claro', 'Sí, de senos paranasales', 'Sí, tomografía', 'Solo si es mujer'], 0,
        'La GPC no la recomienda con un diagnóstico clínico preciso.'),
      q('pat-sin-5', 'rinosinusitis-aguda', '¿Qué dato obligaría a enviarla de urgencia?',
        ['Moco verde', 'Edema y dolor alrededor del ojo o alteraciones visuales', 'Dolor dental', 'Tos'], 1,
        'Sugieren una complicación orbitaria.'),
    ],
  },
  fuentes: [F.sinusitis, F.sinusitisIdsa],
}

const ARTROSIS: Patologia = {
  id: 'osteoartrosis-rodilla',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Osteoartrosis de rodilla',
  aka: 'Gonartrosis',
  ambito: 'Rodilla',
  resumen:
    'Degeneración del cartílago articular de la rodilla con cambios en el hueso subcondral. Como el cartílago es avascular, repara mal y el daño es en gran parte irreversible. El dolor es mecánico y la base del tratamiento es bajar de peso y fortalecer el cuádriceps.',
  sections: [
    {
      id: 'oar-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Osteoartrosis de rodilla (GPC IMSS-079-08)',
          content:
            'Enfermedad articular caracterizada por degeneración y pérdida del cartílago, alteración del hueso subcondral y cambios en los tejidos blandos.',
        },
        {
          type: 'paragraph',
          content:
            'El cartílago articular es hialino, avascular, sin nervios y sin pericondrio: se nutre del líquido sinovial con el movimiento. Cuando los condrocitos pierden el equilibrio entre formar y degradar matriz, el cartílago se adelgaza; el hueso de abajo reacciona con esclerosis y osteofitos.',
        },
        {
          type: 'list',
          title: 'Factores de riesgo (GPC)',
          items: [
            'Modificables: obesidad, sobrecarga articular, debilidad muscular, trabajo físico pesado.',
            'Potencialmente modificables: traumatismo previo, atrofia del cuádriceps, laxitud articular.',
            'No modificables: edad, sexo femenino, factores genéticos.',
          ],
        },
      ],
    },
    {
      id: 'oar-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Dolor de inicio insidioso que aumenta al estar de pie, al iniciar la marcha y al subir escaleras, y mejora con el reposo.',
            'Rigidez matutina de menos de 30 minutos.',
            'Crepitación, deformidad (varo o valgo) y limitación del movimiento.',
            'Derrame sin aumento importante de la temperatura; atrofia del cuádriceps.',
          ],
        },
        {
          type: 'note',
          content:
            'La rigidez de más de una hora y el dolor que mejora con el ejercicio orientan, en cambio, a una artritis inflamatoria.',
        },
      ],
    },
    {
      id: 'oar-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-079-08',
          items: [
            'Diagnóstico clínico.',
            'Radiografías: anteroposterior bilateral de pie con carga, lateral con flexión de 60° y axial de rótula.',
            'Hallazgos: estrechamiento del espacio articular, osteofitos, esclerosis subcondral (escala de Kellgren-Lawrence, de 0 a 4).',
            'Si hay derrame en una sola articulación, se estudia el líquido sinovial (células, Gram y cultivo, cristales) para descartar infección o gota.',
          ],
        },
      ],
    },
    {
      id: 'oar-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-079-08',
          items: [
            'Educación, bajar de peso y ejercicio: fortalecimiento del cuádriceps y ejercicio aeróbico (caminar, bicicleta).',
            'Bastón, muletas o andadera para descargar la articulación.',
            'Paracetamol como primera línea; los antiinflamatorios son más eficaces en el dolor moderado a grave, con vigilancia de sus riesgos.',
            'Los inhibidores selectivos de la COX-2 tienen menos efectos gástricos, pero su uso prolongado se asocia con infarto.',
            'Esteroide intraarticular en las exacerbaciones con derrame.',
            'Reemplazo articular cuando el dolor y la discapacidad no responden.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'articulaciones-miembro-inferior', sectionId: 'aminf-2', label: 'Rodilla', porQue: 'La articulación, sus meniscos y sus ligamentos.' },
    { materia: 'Anatomía', topicId: 'artrologia-generalidades', sectionId: 'art-1', label: 'Clasificación de las articulaciones por su material', porQue: 'Por qué la artrosis no repara.' },
    { materia: 'Anatomía', topicId: 'artrologia-generalidades', sectionId: 'art-2', label: 'Composición de la articulación sinovial', porQue: 'Cartílago articular y líquido sinovial.' },
    { materia: 'Anatomía', topicId: 'musculos-cadera-muslo', sectionId: 'mcm-4', label: 'Los tres compartimientos del muslo', porQue: 'El cuádriceps que hay que fortalecer.' },
    { materia: 'Histología', topicId: 'histologia-cartilago', sectionId: 'hcar-4', label: 'Pericondrio, nutrición y crecimiento', porQue: 'El cartílago articular no tiene pericondrio y se nutre del líquido sinovial.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-eicosanoides', sectionId: 'bei-4', label: 'Farmacología de los eicosanoides', porQue: 'Por qué los inhibidores de la COX-2 aumentan el riesgo de infarto.' },
  ],
  atlas: [
    { id: 'articulaciones-rodilla-tobillo', title: 'Rodilla, tobillo y pie' },
    { id: 'histologia-cartilago-hueso', title: 'Adiposo, cartílago y hueso' },
    { id: 'musculos-miembro-inferior', title: 'Músculos del miembro inferior' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 62 años con IMC de 32. Desde hace 2 años le duelen ambas rodillas al subir escaleras y al empezar a caminar; mejoran con el reposo. Rigidez matutina de 15 minutos, crepitación y un derrame leve sin calor. La radiografía muestra estrechamiento del compartimiento medial y osteofitos.',
    preguntas: [
      q('pat-oar-1', 'osteoartrosis-rodilla', '¿Cuál es el diagnóstico más probable?',
        ['Artritis reumatoide', 'Gota', 'Osteoartrosis de rodilla', 'Artritis séptica'], 2,
        'Dolor mecánico, rigidez breve, crepitación y osteofitos.', 'easy'),
      q('pat-oar-2', 'osteoartrosis-rodilla', '¿Por qué el cartílago articular repara mal?',
        ['Porque es avascular y sin pericondrio: se nutre solo del líquido sinovial', 'Porque tiene demasiados vasos', 'Porque es cartílago elástico', 'Porque no tiene matriz'], 0,
        'Sin vasos ni pericondrio no llegan células ni nutrientes para repararlo.'),
      q('pat-oar-3', 'osteoartrosis-rodilla', '¿Qué dato ayuda a distinguirla de una artritis inflamatoria?',
        ['El derrame', 'La edad', 'La afectación bilateral', 'La rigidez matutina de menos de 30 minutos'], 3,
        'En las inflamatorias la rigidez suele durar más de una hora.'),
      q('pat-oar-4', 'osteoartrosis-rodilla', '¿Cuál es la medida más importante sin fármacos?',
        ['Reposo absoluto', 'Bajar de peso y fortalecer el cuádriceps', 'Inmovilizar con férula', 'Evitar caminar'], 1,
        'Reduce la carga y mejora el dolor y la función.'),
      q('pat-oar-5', 'osteoartrosis-rodilla', '¿Qué analgésico es la primera línea según la GPC?',
        ['Opioides', 'Inhibidores de la COX-2', 'Esteroide oral', 'Paracetamol'], 3,
        'Los antiinflamatorios se agregan si el dolor es moderado a grave.'),
    ],
  },
  fuentes: [F.artrosis],
}

export const FICHAS_MATERIAS_2: Patologia[] = [
  FALCIFORME, LACTOSA, GOTA,
  GALACTOSEMIA, HSC, KLINEFELTER,
  VIH, NEUMONIA, RINITIS, LLA, QUEMADURAS,
  BELL, CADERA, EPIDURAL, SINUSITIS, ARTROSIS,
]
