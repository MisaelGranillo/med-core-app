/* Patologías por materia (tercer lote) — patologías menos frecuentes que ya
 * aparecen en los temas cargados. Mismas reglas que los lotes anteriores: GPC
 * mexicana del Catálogo Maestro y, si no hay, organismos internacionales;
 * solo datos verificados. */

import type { Question } from '../types'
import type { Patologia, PatoFuente } from './patologias'

const F = {
  melanoma: { codigo: 'GPC IMSS-547-12', titulo: 'Abordaje diagnóstico del melanoma maligno', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/547GER.pdf' },
  psoriasis: { codigo: 'GPC IMSS-696-13', titulo: 'Tratamiento farmacológico para pacientes adultos con psoriasis en placas', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/696GER.pdf' },
  penfigo: { codigo: 'GPC IMSS-593-13', titulo: 'Abordaje terapéutico dermatológico ambulatorio del pénfigo vulgar en adultos', url: 'https://www.imss.gob.mx/sites/all/statics/guiasclinicas/593GER.pdf' },
  penfigoEadv: { codigo: 'EADV 2020', titulo: 'Updated S2K guidelines on the management of pemphigus vulgaris and foliaceus. J Eur Acad Dermatol Venereol. 2020;34(9):1900–1913', url: 'https://doi.org/10.1111/jdv.16752' },
  dcp: { codigo: 'ERS 2017', titulo: 'European Respiratory Society guidelines for the diagnosis of primary ciliary dyskinesia. Eur Respir J. 2017;49:1601090', url: 'https://doi.org/10.1183/13993003.01090-2016' },
  t18: { codigo: 'MedlinePlus Genetics', titulo: 'Trisomy 18. Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/trisomy-18/' },
  t13: { codigo: 'MedlinePlus Genetics', titulo: 'Trisomy 13. Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/genetics/condition/trisomy-13/' },
  gaucher: { codigo: 'GPC IMSS-461-11', titulo: 'Diagnóstico y tratamiento de la enfermedad de Gaucher tipo I', url: 'https://www.facmed.unam.mx/sg/css/documentos_pdf/Cat%20Maestro%20539%20GPC%202012/IMSS-461-11_Enfermedad%20de%20Gaucher%20Tipo%20I/IMSS-461-11-Diagn%c3%b3stico%20y%20Tratamiento%20de%20la%20Enfermedad%20de%20Gaucher%20Tipo%20I.pdf' },
  taySachs: { codigo: 'GeneReviews', titulo: 'Hexosaminidase A deficiency. GeneReviews, NCBI Bookshelf (NIH, EE. UU.)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1218/' },
  urea: { codigo: 'Häberle 2019', titulo: 'Suggested guidelines for the diagnosis and management of urea cycle disorders: first revision. J Inherit Metab Dis. 2019;42(6):1192–1230', url: 'https://doi.org/10.1002/jimd.12100' },
  reye: { codigo: 'MedlinePlus', titulo: 'Síndrome de Reye. Enciclopedia médica, Biblioteca Nacional de Medicina (NIH, EE. UU.)', url: 'https://medlineplus.gov/spanish/ency/article/001565.htm' },
  desfiladero: { codigo: 'SVS 2016', titulo: 'Reporting standards of the Society for Vascular Surgery for thoracic outlet syndrome. J Vasc Surg. 2016;64(3):e23–e35', url: 'https://doi.org/10.1016/j.jvs.2016.04.039' },
  atm: { codigo: 'DC/TMD 2014', titulo: 'Diagnostic Criteria for Temporomandibular Disorders (DC/TMD) for clinical and research applications. J Oral Facial Pain Headache. 2014;28(1):6–27', url: 'https://doi.org/10.11607/jop.1151' },
} satisfies Record<string, PatoFuente>

const q = (
  id: string, topicId: string, question: string, options: string[], correctIndex: number,
  explanation: string, difficulty: Question['difficulty'] = 'medium',
): Question => ({ id, topicId, type: 'multiple-choice', question, options, correctIndex, explanation, difficulty })

/* ── Bioquímica ─────────────────────────────────────────────────── */

const ESFINGOLIPIDOSIS: Patologia = {
  id: 'gaucher-tay-sachs',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Enfermedad de Gaucher y enfermedad de Tay-Sachs',
  aka: 'Esfingolipidosis',
  ambito: 'Lisosomas',
  resumen:
    'Dos esfingolipidosis autosómicas recesivas: falta una enzima lisosomal y un esfingolípido se acumula. En Gaucher se llenan los macrófagos (bazo, hígado, médula ósea, hueso); en Tay-Sachs, las neuronas. Gaucher tipo 1 tiene tratamiento de reemplazo enzimático; la forma infantil de Tay-Sachs no tiene cura.',
  sections: [
    {
      id: 'esf-1',
      title: 'Qué son',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Los esfingolípidos se degradan paso a paso dentro de los lisosomas. Si falta una de las enzimas, el lípido que debía degradar se acumula en el lisosoma de las células que más lo procesan y las daña.',
        },
        {
          type: 'table',
          title: 'Comparación',
          data: {
            headers: ['Dato', 'Gaucher', 'Tay-Sachs'],
            rows: [
              ['Enzima deficiente', 'β-glucocerebrosidasa', 'Hexosaminidasa A'],
              ['Se acumula', 'Glucocerebrósido', 'Gangliósido GM2'],
              ['Células afectadas', 'Macrófagos (células de Gaucher)', 'Neuronas'],
              ['Órganos', 'Bazo, hígado, médula ósea, hueso', 'Sistema nervioso central y retina'],
              ['Visceromegalia', 'Sí: esplenomegalia muy marcada', 'No'],
            ],
          },
        },
        {
          type: 'paragraph',
          content:
            'Ambas son más frecuentes en personas de ascendencia judía askenazí. Gaucher ocurre en 1 de cada 40 000 a 60 000 personas en la población general y en cerca de 1 de cada 450 en la askenazí (GPC).',
        },
      ],
    },
    {
      id: 'esf-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          title: 'Gaucher tipo 1 (no neuronopático, el más común)',
          items: [
            'Esplenomegalia, a menudo masiva, y hepatomegalia.',
            'Citopenias: anemia, trombocitopenia con sangrados fáciles.',
            'Enfermedad ósea: dolor, crisis óseas, fracturas, necrosis avascular y deformidad del fémur distal en «matraz de Erlenmeyer».',
            'Los tipos 2 y 3 además afectan el sistema nervioso.',
          ],
        },
        {
          type: 'list',
          title: 'Tay-Sachs infantil',
          items: [
            'Normal hasta los 3–6 meses.',
            'Después: debilidad, sobresalto exagerado ante los ruidos y pérdida de los logros del desarrollo.',
            'Mancha rojo cereza en la mácula, ceguera y crisis convulsivas.',
            'Neurodegeneración progresiva; la muerte suele ocurrir en la primera infancia.',
          ],
        },
      ],
    },
    {
      id: 'esf-3',
      title: 'Cómo se confirman',
      blocks: [
        {
          type: 'list',
          items: [
            'Gaucher: actividad de β-glucocerebrosidasa baja en leucocitos (o en sangre seca), confirmada con estudio del gen GBA1. La quitotriosidasa, que secretan los macrófagos activados, sube mucho y sirve para el seguimiento.',
            'En la médula ósea pueden verse las células de Gaucher, macrófagos con citoplasma de aspecto de «papel arrugado».',
            'Tay-Sachs: actividad de hexosaminidasa A baja y estudio del gen HEXA.',
            'En familias de riesgo se ofrece el estudio de portadores.',
          ],
        },
      ],
    },
    {
      id: 'esf-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Gaucher tipo 1: terapia de reemplazo enzimático intravenosa cada dos semanas (imiglucerasa, en la GPC); reduce el bazo y el hígado y mejora las citopenias y el hueso.',
            'Gaucher: otra opción es reducir la síntesis del sustrato con fármacos orales.',
            'Tay-Sachs: no hay tratamiento curativo; el manejo es de soporte.',
            'Consejería genética: herencia autosómica recesiva, 25 % de riesgo en cada embarazo de dos portadores.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-lipidos-funcion-esteroides', sectionId: 'bfe-4', label: 'Esfingolípidos: tabla completa de patologías', porQue: 'El lípido que se acumula y la enzima que falta en cada esfingolipidosis.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-trigliceridos-fosfolipidos', sectionId: 'btf-6', label: 'Glucolípidos y esfingolipidosis', porQue: 'Cerebrósidos y gangliósidos.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-trigliceridos-fosfolipidos', sectionId: 'btf-5', label: 'Esfingolípidos y ceramida', porQue: 'La ceramida, base de todos los esfingolípidos.' },
    { materia: 'Histología', topicId: 'histologia-conectivo-celulas', sectionId: 'hctc-5', label: 'Macrófago y sistema fagocítico mononuclear', porQue: 'La célula que se llena de glucocerebrósido.' },
    { materia: 'Genética', topicId: 'genetica-mendel', sectionId: 'gmen-2', label: 'Las tres leyes', porQue: 'Herencia autosómica recesiva.' },
  ],
  atlas: [
    { id: 'bioquimica-lipidos', title: 'Lípidos' },
    { id: 'histologia-conectivo', title: 'Tejido conectivo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 16 años con cansancio, moretones fáciles y dolor óseo. Tiene esplenomegalia masiva y hepatomegalia. Hb 9.8 g/dL, plaquetas 72 000/µL. La radiografía muestra ensanchamiento del fémur distal. No hay alteraciones neurológicas.',
    preguntas: [
      q('pat-esf-1', 'gaucher-tay-sachs', '¿Qué enfermedad es la más probable?',
        ['Enfermedad de Gaucher tipo 1', 'Tay-Sachs', 'Leucemia linfoblástica', 'Talasemia'], 0,
        'Esplenomegalia, citopenias y enfermedad ósea sin afectación neurológica.', 'easy'),
      q('pat-esf-2', 'gaucher-tay-sachs', '¿Qué enzima falta?',
        ['Hexosaminidasa A', 'Esfingomielinasa', 'β-glucocerebrosidasa', 'Galactocerebrosidasa'], 2,
        'Sin ella, el glucocerebrósido se acumula en los lisosomas de los macrófagos.'),
      q('pat-esf-3', 'gaucher-tay-sachs', '¿Qué célula se llena del lípido acumulado?',
        ['Neurona', 'Hepatocito', 'Eritrocito', 'Macrófago'], 3,
        'Las células de Gaucher son macrófagos cargados de glucocerebrósido.'),
      q('pat-esf-4', 'gaucher-tay-sachs', '¿Qué hallazgo distingue a Tay-Sachs de Gaucher?',
        ['Esplenomegalia masiva', 'Mancha rojo cereza en la mácula, sin visceromegalia', 'Crisis óseas', 'Trombocitopenia'], 1,
        'En Tay-Sachs se afectan las neuronas, no los macrófagos de las vísceras.'),
      q('pat-esf-5', 'gaucher-tay-sachs', '¿Qué tratamiento existe para Gaucher tipo 1?',
        ['Ninguno', 'Esplenectomía en todos los casos', 'Terapia de reemplazo enzimático', 'Dieta sin lípidos'], 2,
        'La enzima recombinante llega a los macrófagos y degrada el lípido acumulado.'),
    ],
  },
  fuentes: [F.gaucher, F.taySachs],
}

const OTC: Patologia = {
  id: 'deficiencia-otc',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Deficiencia de ornitina transcarbamilasa',
  aka: 'Deficiencia de OTC',
  ambito: 'Ciclo de la urea',
  resumen:
    'El trastorno del ciclo de la urea más frecuente y el único ligado al X. Sin OTC el amoniaco no se convierte en urea, sube en la sangre y produce edema cerebral. En un recién nacido o un niño con encefalopatía sin explicación hay que medir el amonio.',
  sections: [
    {
      id: 'otc-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'steps',
          title: 'Dónde falla el ciclo',
          steps: [
            'En la mitocondria del hepatocito, la carbamoil fosfato sintetasa I (CPS-I) une amoniaco y CO₂ en carbamoil fosfato.',
            'La ornitina transcarbamilasa (OTC) une el carbamoil fosfato con ornitina y forma citrulina.',
            'Sin OTC el ciclo se detiene: el amoniaco se acumula.',
            'El carbamoil fosfato sobrante se desvía a la síntesis de pirimidinas y aumenta el ácido orótico en la orina.',
          ],
        },
        {
          type: 'paragraph',
          content:
            'Herencia ligada al X: los varones hemicigotos suelen tener la forma grave neonatal; las mujeres heterocigotas van de sin síntomas a crisis graves, según cuántas de sus células inactivaron el X sano.',
        },
      ],
    },
    {
      id: 'otc-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          title: 'Varón recién nacido',
          items: [
            'Se ve sano al nacer; en las primeras horas o días de alimentarse aparecen rechazo al alimento y vómito.',
            'Letargo, hipotermia e hiperventilación (el amoniaco estimula el centro respiratorio).',
            'Convulsiones y coma por edema cerebral.',
          ],
        },
        {
          type: 'list',
          title: 'Formas tardías y mujeres portadoras',
          items: [
            'Episodios de vómito, cefalea, confusión o conducta extraña.',
            'Se desencadenan con una carga de proteína o con catabolismo: infecciones, ayuno, cirugía, posparto.',
            'Rechazo espontáneo a los alimentos ricos en proteína.',
          ],
        },
      ],
    },
    {
      id: 'otc-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Amonio en plasma muy elevado: se mide de urgencia, con muestra de flujo libre, en hielo y procesada de inmediato.',
            'Alcalosis respiratoria, con glucosa y brecha aniónica normales (a diferencia de las acidemias orgánicas).',
            'Aminoácidos: glutamina alta y citrulina baja o ausente.',
            'Ácido orótico urinario alto: distingue la deficiencia de OTC de la de CPS-I, en la que es normal o bajo.',
            'Confirmación genética.',
          ],
        },
      ],
    },
    {
      id: 'otc-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'steps',
          title: 'Crisis de hiperamonemia (Häberle 2019)',
          steps: [
            'Suspender las proteínas por un tiempo corto (24–48 horas).',
            'Aportar muchas calorías con glucosa IV (y lípidos) para frenar el catabolismo.',
            'Quelantes de amonio IV (benzoato y fenilacetato de sodio) y arginina.',
            'Hemodiálisis si el amonio es muy alto o no baja.',
          ],
        },
        {
          type: 'list',
          title: 'A largo plazo',
          items: [
            'Dieta restringida en proteínas con suplementos de aminoácidos esenciales.',
            'Citrulina o arginina y quelantes orales de amonio.',
            'Trasplante hepático en las formas graves.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-nitrogeno-ciclo-urea', sectionId: 'bnu-3', label: 'Ciclo de la urea', porQue: 'Los pasos del ciclo y la hiperamonemia por deficiencia de OTC.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-nitrogeno-ciclo-urea', sectionId: 'bnu-2', label: 'Desaminación oxidativa del glutamato', porQue: 'De dónde sale el amoniaco libre.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-nitrogeno-ciclo-urea', sectionId: 'bnu-1', label: 'Transaminación', porQue: 'Cómo llega el nitrógeno de los aminoácidos al hígado.' },
    { materia: 'Genética', topicId: 'genetica-cromosomas-herencia', sectionId: 'gher-1', label: 'Teoría cromosómica de la herencia', porQue: 'Por qué un gen del X afecta más a los varones.' },
  ],
  atlas: [
    { id: 'bioquimica-ciclo-urea', title: 'Nitrógeno y ciclo de la urea' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacido varón de 3 días, de término, que comió bien el primer día. Ahora rechaza el alimento, vomita, está letárgico y respira rápido. Glucosa normal, gasometría con alcalosis respiratoria y brecha aniónica normal. Amonio de 680 µmol/L. Un tío materno murió de recién nacido.',
    preguntas: [
      q('pat-otc-1', 'deficiencia-otc', '¿Qué estudio fue clave y debe pedirse ante una encefalopatía sin explicación?',
        ['Amonio en plasma', 'Tomografía de cráneo', 'Cariotipo', 'Hemocultivo'], 0,
        'Un amonio alto orienta a un trastorno del ciclo de la urea.', 'easy'),
      q('pat-otc-2', 'deficiencia-otc', '¿Por qué respira rápido?',
        ['Por acidosis metabólica', 'Por neumonía', 'Porque el amoniaco estimula el centro respiratorio: alcalosis respiratoria', 'Por anemia'], 2,
        'Es un dato temprano típico de la hiperamonemia.'),
      q('pat-otc-3', 'deficiencia-otc', '¿Qué hallazgo distingue la deficiencia de OTC de la de CPS-I?',
        ['Amonio alto', 'Ácido orótico urinario alto', 'Glutamina alta', 'Alcalosis respiratoria'], 1,
        'El carbamoil fosfato que no usa la OTC se desvía a la síntesis de pirimidinas.'),
      q('pat-otc-4', 'deficiencia-otc', 'El tío materno muerto en el periodo neonatal sugiere herencia:',
        ['Autosómica dominante', 'Mitocondrial', 'Autosómica recesiva', 'Ligada al X'], 3,
        'La madre sería portadora; los varones que heredan el X mutado se afectan.'),
      q('pat-otc-5', 'deficiencia-otc', '¿Qué se hace de inmediato?',
        ['Fórmula alta en proteínas', 'Suspender proteínas, glucosa IV, quelantes de amonio y diálisis si no baja', 'Solo observar', 'Dar ácido acetilsalicílico'], 1,
        'Hay que frenar el catabolismo y retirar el amonio cuanto antes: el edema cerebral es la amenaza.'),
    ],
  },
  fuentes: [F.urea],
}

const REYE: Patologia = {
  id: 'sindrome-reye',
  kind: 'ficha',
  materia: 'Bioquímica',
  title: 'Síndrome de Reye',
  ambito: 'Hígado y cerebro',
  resumen:
    'Daño agudo del hígado y del cerebro en niños y adolescentes que se recuperan de una infección viral, asociado al uso de ácido acetilsalicílico. Es raro desde que se dejó de dar aspirina a los niños, pero puede ser mortal.',
  sections: [
    {
      id: 'rey-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'steps',
          title: 'El mecanismo',
          steps: [
            'Un niño con influenza o varicela recibe ácido acetilsalicílico.',
            'Las mitocondrias del hepatocito se dañan y falla la β-oxidación de los ácidos grasos.',
            'Se acumula grasa en el hígado (esteatosis microvesicular) y sube el amonio.',
            'El amonio y las alteraciones metabólicas producen edema cerebral.',
          ],
        },
        {
          type: 'note',
          content:
            'Algunos errores innatos del metabolismo (de la β-oxidación o del ciclo de la urea) dan un cuadro casi idéntico: hay que descartarlos.',
        },
      ],
    },
    {
      id: 'rey-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Empieza días después de la infección viral, cuando el niño parecía mejorar.',
            'Vómito persistente.',
            'Letargo, confusión, irritabilidad o conducta agresiva.',
            'Puede progresar a convulsiones, coma y muerte por edema cerebral.',
            'Por lo general sin ictericia.',
          ],
        },
      ],
    },
    {
      id: 'rey-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Transaminasas elevadas con bilirrubina normal o casi normal.',
            'Amonio elevado; hipoglucemia, sobre todo en niños pequeños.',
            'Tiempo de protrombina prolongado.',
            'Descartar meningitis, intoxicaciones y errores innatos del metabolismo.',
            'La biopsia hepática muestra esteatosis microvesicular.',
          ],
        },
      ],
    },
    {
      id: 'rey-4',
      title: 'Tratamiento y prevención',
      blocks: [
        {
          type: 'list',
          items: [
            'Hospitalización, a menudo en terapia intensiva.',
            'Control del edema cerebral y de la presión intracraneal.',
            'Glucosa y corrección de electrolitos y de la coagulación.',
            'Prevención: no dar ácido acetilsalicílico a niños ni adolescentes con fiebre o infección viral, salvo indicación médica; para la fiebre se usa paracetamol o ibuprofeno.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Bioquímica', topicId: 'bioquimica-vitaminas-liposolubles-patologias', sectionId: 'bvl-4', label: 'Patologías del metabolismo de los ácidos grasos esenciales', porQue: 'La correlación del síndrome de Reye y la aspirina.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-nitrogeno-ciclo-urea', sectionId: 'bnu-4', label: 'Coenzimas en acción: β-oxidación', porQue: 'La vía mitocondrial que falla.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-nitrogeno-ciclo-urea', sectionId: 'bnu-3', label: 'Ciclo de la urea', porQue: 'Por qué sube el amonio cuando falla el hígado.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-eicosanoides', sectionId: 'bei-4', label: 'Farmacología de los eicosanoides', porQue: 'El ácido acetilsalicílico como inhibidor de la COX.' },
    { materia: 'Bioquímica', topicId: 'bioquimica-biomarcadores-enzimaticos', sectionId: 'bbm-3', label: 'Páncreas, hígado y próstata', porQue: 'Las transaminasas que suben.' },
  ],
  atlas: [
    { id: 'bioquimica-ciclo-urea', title: 'Nitrógeno y ciclo de la urea' },
    { id: 'bioquimica-biomarcadores', title: 'Biomarcadores enzimáticos' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Niño de 8 años que tuvo varicela la semana pasada; su abuela le dio aspirina para la fiebre. Cuando ya mejoraba empezó con vómito persistente; hoy está confuso e irritable. No tiene ictericia. ALT 420 U/L, bilirrubina normal, amonio elevado, glucosa 52 mg/dL.',
    preguntas: [
      q('pat-rey-1', 'sindrome-reye', '¿Qué fármaco se asocia con este cuadro?',
        ['Paracetamol', 'Ibuprofeno', 'Amoxicilina', 'Ácido acetilsalicílico'], 3,
        'Por eso no se da aspirina a niños con infecciones virales.', 'easy'),
      q('pat-rey-2', 'sindrome-reye', '¿Qué organelo se daña en el hepatocito?',
        ['Mitocondria', 'Lisosoma', 'Núcleo', 'Aparato de Golgi'], 0,
        'Falla la β-oxidación mitocondrial y se acumula grasa.'),
      q('pat-rey-3', 'sindrome-reye', '¿Qué explica la confusión?',
        ['Una infección del cerebro', 'Edema cerebral por el amonio y las alteraciones metabólicas', 'Ictericia', 'Deshidratación'], 1,
        'El edema cerebral es lo que lo hace mortal.'),
      q('pat-rey-4', 'sindrome-reye', '¿Qué patrón de laboratorio es típico?',
        ['Bilirrubina muy alta y transaminasas normales', 'Todo normal', 'Transaminasas altas con bilirrubina normal, amonio alto e hipoglucemia', 'Solo leucocitosis'], 2,
        'Daño hepático sin ictericia.'),
      q('pat-rey-5', 'sindrome-reye', '¿Qué otra causa debe descartarse antes de diagnosticarlo?',
        ['Errores innatos del metabolismo, como la deficiencia de OTC', 'Anemia ferropénica', 'Hipotiroidismo', 'Rinitis alérgica'], 0,
        'Los trastornos del ciclo de la urea y de la β-oxidación dan un cuadro casi igual.'),
    ],
  },
  fuentes: [F.reye],
}

/* ── Genética ───────────────────────────────────────────────────── */

const TRISOMIAS: Patologia = {
  id: 'trisomias-18-13',
  kind: 'ficha',
  materia: 'Genética',
  title: 'Síndromes de Edwards y de Patau',
  aka: 'Trisomías 18 y 13',
  ambito: 'Cromosomas',
  resumen:
    'Trisomías autosómicas mucho más graves que la del 21: la mayoría de los fetos se pierde durante el embarazo y menos del 10 % de los nacidos vivos llega al año. Edwards (18) destaca por las manos empuñadas con dedos encimados; Patau (13), por las malformaciones de la línea media.',
  sections: [
    {
      id: 'tri-1',
      title: 'Qué son',
      blocks: [
        {
          type: 'table',
          data: {
            headers: ['Dato', 'Edwards', 'Patau'],
            rows: [
              ['Cariotipo', 'Trisomía 18 (47,+18)', 'Trisomía 13 (47,+13)'],
              ['Frecuencia', 'Cerca de 1 de cada 5000 nacidos vivos', 'Cerca de 1 de cada 16 000 recién nacidos'],
              ['Mecanismo', 'Casi siempre trisomía libre por no disyunción', 'Trisomía libre; una parte por translocación robertsoniana'],
              ['Supervivencia', 'Menos del 10 % pasa el primer año', 'Entre 5 y 10 % pasa el primer año'],
            ],
          },
        },
        {
          type: 'note',
          content:
            'Como en el síndrome de Down, el riesgo de la trisomía libre aumenta con la edad materna.',
        },
      ],
    },
    {
      id: 'tri-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'comparison',
          title: 'Los rasgos que las distinguen',
          left: {
            title: 'Edwards (18)',
            items: [
              'Restricción del crecimiento intrauterino y bajo peso',
              'Microcefalia y micrognatia; orejas bajas',
              'Puños cerrados con dedos encimados (índice sobre medio, meñique sobre anular)',
              'Pies en mecedora, esternón corto',
              'Cardiopatía congénita en la mayoría',
            ],
          },
          right: {
            title: 'Patau (13)',
            items: [
              'Holoprosencefalia (el cerebro no se divide en dos hemisferios)',
              'Labio y paladar hendido, ojos pequeños o un solo ojo',
              'Polidactilia',
              'Defectos de la piel cabelluda',
              'Cardiopatía y malformaciones renales',
            ],
          },
        },
        {
          type: 'paragraph',
          content:
            'En ambas hay discapacidad intelectual grave en quienes sobreviven.',
        },
      ],
    },
    {
      id: 'tri-3',
      title: 'Cómo se confirman',
      blocks: [
        {
          type: 'list',
          items: [
            'Prenatal: el ultrasonido muestra malformaciones y restricción del crecimiento; en el tamizaje del primer trimestre de la trisomía 18, tanto la β-hCG como la PAPP-A están bajas.',
            'Confirmación: cariotipo en vellosidades coriales o líquido amniótico, o en sangre al nacer.',
            'Si hay translocación, cariotipo de los padres.',
          ],
        },
      ],
    },
    {
      id: 'tri-4',
      title: 'Manejo: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'No hay tratamiento curativo; las decisiones se toman con la familia según el pronóstico de cada niño.',
            'Cuidados paliativos o tratamiento de las malformaciones en casos seleccionados.',
            'Consejería genética: el riesgo de recurrencia es bajo en la trisomía libre y mayor si un progenitor porta una translocación.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-4', label: 'Síndromes por aneuploidía', porQue: 'Edwards y Patau junto al síndrome de Down.' },
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-2', label: 'Anomalías numéricas y aneuploidía', porQue: 'Qué es una trisomía.' },
    { materia: 'Genética', topicId: 'genetica-citogenetica-clinica', sectionId: 'gcit-3', label: 'Anomalías estructurales', porQue: 'La translocación robertsoniana.' },
    { materia: 'Genética', topicId: 'genetica-mitosis-meiosis', sectionId: 'gmm-4', label: 'Mitosis vs meiosis', porQue: 'La no disyunción.' },
    { materia: 'Genética', topicId: 'genetica-cromosomas-cariotipo', sectionId: 'gcro-4', label: 'Clasificación por el centrómero', porQue: 'El 13 es acrocéntrico y por eso participa en translocaciones robertsonianas.' },
  ],
  atlas: [
    { id: 'genetica-citogenetica-tamiz', title: 'Citogenética clínica y tamiz' },
    { id: 'genetica-cromosomas-cariotipo', title: 'Cromosomas, cariotipo y bandeo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Recién nacida de 2100 g a término, de una madre de 40 años. Tiene microcefalia, mandíbula pequeña, orejas bajas, manos empuñadas con el índice sobre el medio y el meñique sobre el anular, y pies en mecedora. Se ausculta un soplo.',
    preguntas: [
      q('pat-tri-1', 'trisomias-18-13', '¿Qué trisomía es la más probable?',
        ['13', '21', '18', 'X'], 2,
        'Los dedos encimados y los pies en mecedora son típicos de Edwards.', 'easy'),
      q('pat-tri-2', 'trisomias-18-13', '¿Qué estudio confirma el diagnóstico?',
        ['Cariotipo', 'Tamiz metabólico', 'Ultrasonido renal', 'Biometría hemática'], 0,
        'Muestra el cromosoma extra y el mecanismo.'),
      q('pat-tri-3', 'trisomias-18-13', '¿Qué rasgo orientaría más a trisomía 13?',
        ['Pies en mecedora', 'Holoprosencefalia con labio y paladar hendido y polidactilia', 'Manchas de Brushfield', 'Cuello alado'], 1,
        'Las malformaciones de la línea media son características de Patau.'),
      q('pat-tri-4', 'trisomias-18-13', '¿Qué pronóstico tiene en general?',
        ['Normal', 'Similar al del síndrome de Down', 'Mejor que el del síndrome de Down', 'Menos del 10 % sobrevive el primer año'], 3,
        'Por eso las decisiones se individualizan con la familia.'),
      q('pat-tri-5', 'trisomias-18-13', '¿Qué factor aumenta el riesgo de la trisomía libre?',
        ['Edad paterna joven', 'Edad materna avanzada', 'Dieta materna', 'Ser el primer hijo'], 1,
        'Igual que en el síndrome de Down, por la no disyunción en el ovocito.'),
    ],
  },
  fuentes: [F.t18, F.t13],
}

/* ── Histología ─────────────────────────────────────────────────── */

const MELANOMA: Patologia = {
  id: 'melanoma',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Melanoma',
  aka: 'Melanoma maligno',
  ambito: 'Piel',
  resumen:
    'Tumor maligno de los melanocitos, que viven en el estrato basal de la epidermis. Mientras no atraviesa la membrana basal es curable con cirugía; cuando invade la dermis alcanza vasos y linfáticos y da metástasis.',
  sections: [
    {
      id: 'mel-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Melanoma (GPC IMSS-547-12)',
          content:
            'Tumor maligno originado en los melanocitos epidérmicos; con menor frecuencia aparece en mucosas, retina o leptomeninges. A diferencia de otros cánceres de piel, tiende a dar metástasis linfáticas y hematógenas.',
        },
        {
          type: 'list',
          title: 'Factores de riesgo',
          items: [
            'Radiación ultravioleta: quemaduras solares, sobre todo en la infancia, y camas de bronceado.',
            'Piel clara que se quema con facilidad.',
            'Muchos nevos o nevos displásicos.',
            'Antecedente familiar (genes como CDKN2A) e inmunosupresión.',
          ],
        },
        {
          type: 'table',
          title: 'Subtipos clínicos (GPC)',
          data: {
            headers: ['Subtipo', 'Rasgos'],
            rows: [
              ['De extensión superficial', 'El más común en el mundo; mancha que cambia de tamaño, forma o color'],
              ['Nodular', 'Crece en vertical desde el inicio; firme, a veces sin pigmento; el más agresivo'],
              ['Léntigo maligno', '5–10 %; cara y cuello de personas con mucha exposición solar acumulada'],
              ['Acral lentiginoso', 'Palmas, plantas y uñas; no se relaciona con el sol; 50 % de los melanomas en personas de piel negra'],
            ],
          },
        },
      ],
    },
    {
      id: 'mel-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'table',
          title: 'Regla ABCDE',
          data: {
            headers: ['Letra', 'Significado'],
            rows: [
              ['A', 'Asimetría'],
              ['B', 'Bordes irregulares'],
              ['C', 'Color: más de uno (café, negro, gris, blanco)'],
              ['D', 'Diámetro mayor de 6 mm'],
              ['E', 'Evolución: cambios de tamaño, forma o color, prurito o sangrado'],
            ],
          },
        },
        {
          type: 'list',
          items: [
            'Signo del «patito feo»: un lunar distinto a todos los demás del paciente.',
            'El nodular no cumple el ABCDE: se reconoce por ser elevado, firme y de crecimiento progresivo.',
            'En la uña: banda pigmentada longitudinal; si el pigmento pasa a la piel de alrededor (signo de Hutchinson), es muy sospechoso.',
          ],
        },
      ],
    },
    {
      id: 'mel-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-547-12',
          items: [
            'Exploración de toda la piel y dermatoscopia.',
            'Biopsia escisional de la lesión completa con 1–3 mm de margen; no se usan punch ni rasurado en una lesión sospechosa.',
            'El reporte de patología incluye el grosor de Breslow (en mm), la ulceración, el índice mitótico y los márgenes.',
            'El grosor de Breslow es el principal factor pronóstico.',
          ],
        },
        {
          type: 'correlacion',
          variant: 'clinica',
          title: 'La membrana basal decide el pronóstico',
          content:
            'La epidermis no tiene vasos. Mientras el melanoma está por encima de la membrana basal (in situ) no puede diseminarse. Al cruzarla llega a los vasos y linfáticos de la dermis: cuanto más profundo, mayor riesgo de metástasis.',
        },
      ],
    },
    {
      id: 'mel-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Escisión amplia, con márgenes que dependen del grosor de Breslow.',
            'Biopsia del ganglio centinela en tumores con riesgo de diseminación.',
            'En la enfermedad avanzada: inmunoterapia y terapias dirigidas.',
            'Prevención: protección solar, evitar quemaduras y camas de bronceado, y revisar la piel.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-piel', sectionId: 'hpiel-5', label: 'Las cuatro poblaciones celulares', porQue: 'El melanocito del estrato basal.' },
    { materia: 'Histología', topicId: 'histologia-piel', sectionId: 'hpiel-6', label: 'Unión dermoepidérmica y membrana basal', porQue: 'La barrera que el melanoma cruza al volverse invasor.' },
    { materia: 'Histología', topicId: 'histologia-piel', sectionId: 'hpiel-7', label: 'Correlaciones clínicas de la piel', porQue: 'La regla ABCDE y la biopsia.' },
    { materia: 'Histología', topicId: 'histologia-epitelial-polaridad', sectionId: 'hpol-5', label: 'Membrana basal', porQue: 'Qué es y qué separa.' },
    { materia: 'Genética', topicId: 'genetica-reparacion-adn', sectionId: 'grep-2', label: 'Origen del daño: endógeno vs. exógeno', porQue: 'La radiación ultravioleta y los dímeros de pirimidina.' },
  ],
  atlas: [
    { id: 'histologia-piel', title: 'La piel' },
    { id: 'genetica-reparacion-adn', title: 'Reparación del ADN y mutaciones' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 45 años, de piel clara, con quemaduras solares frecuentes en la infancia. Su esposa notó que un lunar de la espalda creció en los últimos meses. Mide 9 mm, es asimétrico, de bordes irregulares y tiene zonas café, negras y grises. Es distinto a sus demás lunares.',
    preguntas: [
      q('pat-mel-1', 'melanoma', '¿Cuántos criterios ABCDE cumple?',
        ['Ninguno', 'Solo el de diámetro', 'Dos', 'Todos: asimetría, bordes, color, diámetro y evolución'], 3,
        'Además tiene el signo del patito feo.', 'easy'),
      q('pat-mel-2', 'melanoma', '¿Cómo se toma la biopsia?',
        ['Escisional, de toda la lesión con 1–3 mm de margen', 'Por rasurado', 'Con punch del centro', 'No se biopsia; se observa'], 0,
        'Permite medir el grosor de Breslow completo.'),
      q('pat-mel-3', 'melanoma', '¿Cuál es el principal factor pronóstico del reporte?',
        ['El color', 'El diámetro', 'El grosor de Breslow', 'La edad del paciente'], 2,
        'Indica qué tan profundo invadió.'),
      q('pat-mel-4', 'melanoma', '¿Por qué un melanoma in situ no da metástasis?',
        ['Porque es benigno', 'Porque no ha cruzado la membrana basal y la epidermis no tiene vasos', 'Porque es pequeño', 'Porque no tiene pigmento'], 1,
        'Al cruzarla alcanza los vasos y linfáticos de la dermis.'),
      q('pat-mel-5', 'melanoma', '¿Qué subtipo no se relaciona con el sol y aparece en palmas, plantas y uñas?',
        ['Léntigo maligno', 'De extensión superficial', 'Nodular', 'Acral lentiginoso'], 3,
        'Hay que revisar también estas zonas.'),
    ],
  },
  fuentes: [F.melanoma],
}

const PSORIASIS: Patologia = {
  id: 'psoriasis',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Psoriasis',
  ambito: 'Piel',
  resumen:
    'Enfermedad inflamatoria crónica de origen inmunológico en la que los queratinocitos se renuevan demasiado rápido. Produce placas rojas con escama plateada; puede afectar uñas y articulaciones y se asocia con enfermedad cardiovascular.',
  sections: [
    {
      id: 'pso-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Psoriasis (GPC IMSS-696-13)',
          content:
            'Padecimiento crónico, inflamatorio y sistémico de origen genético, modificable por factores ambientales; puede asociarse con artritis psoriásica, enfermedad inflamatoria intestinal y enfermedad coronaria.',
        },
        {
          type: 'paragraph',
          content:
            'Los linfocitos T activados liberan citocinas que aceleran la proliferación de los queratinocitos: el recambio de la epidermis baja de 4–6 semanas a 7–10 días. Las células llegan al estrato córneo sin terminar de madurar. Afecta a alrededor del 2 % de la población.',
        },
        {
          type: 'table',
          title: 'Lo que se ve al microscopio',
          data: {
            headers: ['Hallazgo', 'Qué significa'],
            rows: [
              ['Acantosis', 'Epidermis engrosada'],
              ['Paraqueratosis', 'Núcleos retenidos en el estrato córneo: los queratinocitos no maduraron'],
              ['Pérdida del estrato granuloso', 'Falta el paso previo a la queratinización'],
              ['Capilares dilatados en las papilas', 'Explican el sangrado puntiforme al raspar la escama (signo de Auspitz)'],
              ['Neutrófilos en el estrato córneo', 'Microabscesos de Munro'],
            ],
          },
        },
      ],
    },
    {
      id: 'pso-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Placas rojas bien delimitadas con escama blanco-plateada en codos, rodillas, piel cabelluda y región lumbosacra.',
            'Fenómeno de Koebner: aparecen lesiones donde la piel se lastima.',
            'Uñas: puntillado, separación del lecho (onicólisis) y «mancha de aceite».',
            'Artritis psoriásica en una parte de los pacientes.',
            'Desencadenantes: infecciones por estreptococo (forma en gotas), estrés, alcohol, tabaco y fármacos como el litio o los betabloqueadores.',
          ],
        },
      ],
    },
    {
      id: 'pso-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'El diagnóstico es clínico; la biopsia se reserva para los casos dudosos.',
            'La gravedad se mide con la superficie corporal afectada y el índice PASI.',
            'Se buscan artritis y factores de riesgo cardiovascular (síndrome metabólico).',
          ],
        },
      ],
    },
    {
      id: 'pso-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          title: 'GPC IMSS-696-13',
          items: [
            'Leve a moderada: corticosteroides tópicos (de baja potencia en cara y pliegues), solos o combinados con calcipotriol; inhibidores de calcineurina en cara y pliegues; alquitrán de hulla.',
            'Moderada a grave: fototerapia, metotrexato, ciclosporina o acitretina.',
            'Biológicos dirigidos contra citocinas en los casos que no responden.',
            'No se usan corticosteroides sistémicos: al suspenderlos la psoriasis puede empeorar o volverse pustulosa.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-piel', sectionId: 'hpiel-3', label: 'Epidermis y los cinco estratos', porQue: 'Los estratos que cambian en la psoriasis.' },
    { materia: 'Histología', topicId: 'histologia-piel', sectionId: 'hpiel-4', label: 'Historia de vida del queratinocito', porQue: 'El recambio que se acelera.' },
    { materia: 'Histología', topicId: 'histologia-piel', sectionId: 'hpiel-7', label: 'Correlaciones clínicas de la piel', porQue: 'Recambio de 7–10 días frente a 4–6 semanas.' },
    { materia: 'Histología', topicId: 'histologia-linfocitos', sectionId: 'hlin-3', label: 'Linfocitos T (inmunidad celular): CD4 y CD8', porQue: 'Los linfocitos T que inician la inflamación.' },
  ],
  atlas: [
    { id: 'histologia-piel', title: 'La piel' },
    { id: 'histologia-epitelio', title: 'Tejido epitelial' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 32 años con placas rojas bien delimitadas, cubiertas de escama plateada, en codos, rodillas y piel cabelluda desde hace 2 años. Al raspar la escama aparecen puntos de sangrado. Sus uñas tienen pequeños hoyuelos. Hace poco le salieron lesiones nuevas sobre un rasguño.',
    preguntas: [
      q('pat-pso-1', 'psoriasis', '¿Cómo se llaman los puntos de sangrado al raspar la escama?',
        ['Signo de Nikolsky', 'Signo de Auspitz', 'Signo de Koebner', 'Signo de Darier'], 1,
        'Se deben a los capilares dilatados de las papilas dérmicas.', 'easy'),
      q('pat-pso-2', 'psoriasis', '¿Cómo se llama la aparición de lesiones sobre el rasguño?',
        ['Fenómeno de Koebner', 'Signo de Auspitz', 'Liquenificación', 'Dermografismo'], 0,
        'La psoriasis aparece donde la piel se traumatiza.'),
      q('pat-pso-3', 'psoriasis', '¿Qué significa la paraqueratosis?',
        ['Exceso de melanina', 'Ampolla intraepidérmica', 'Queratinocitos que llegan al estrato córneo conservando su núcleo', 'Pérdida de la membrana basal'], 2,
        'El recambio acelerado no deja tiempo para que maduren.'),
      q('pat-pso-4', 'psoriasis', '¿Qué otra afectación se debe buscar?',
        ['Artritis psoriásica y riesgo cardiovascular', 'Anemia falciforme', 'Hipotiroidismo congénito', 'Cataratas'], 0,
        'La psoriasis es una enfermedad sistémica.'),
      q('pat-pso-5', 'psoriasis', '¿Qué no se recomienda?',
        ['Corticosteroides tópicos', 'Calcipotriol', 'Fototerapia', 'Corticosteroides sistémicos, por el rebote al suspenderlos'], 3,
        'Pueden desencadenar una forma pustulosa grave.'),
    ],
  },
  fuentes: [F.psoriasis],
}

const PENFIGO: Patologia = {
  id: 'penfigo-vulgar',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Pénfigo vulgar',
  ambito: 'Piel y mucosas',
  resumen:
    'Enfermedad autoinmune en la que anticuerpos IgG atacan a las desmogleínas de los desmosomas. Los queratinocitos se separan entre sí y se forman ampollas dentro de la epidermis que se rompen con facilidad. Casi siempre empieza en la boca y, sin tratamiento, puede ser mortal.',
  sections: [
    {
      id: 'pen-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'definition',
          title: 'Pénfigo vulgar (GPC IMSS-593-13)',
          content:
            'Enfermedad ampollosa autoinmune, crónica y potencialmente fatal, en la que anticuerpos IgG contra proteínas desmosómicas producen ampollas intraepiteliales en piel y mucosas. La desmogleína 3 es el antígeno principal; 50–60 % de los pacientes tiene además anticuerpos contra la desmogleína 1.',
        },
        {
          type: 'comparison',
          title: 'Pénfigo vulgar frente a penfigoide ampolloso',
          left: {
            title: 'Pénfigo vulgar',
            items: ['Anticuerpos contra desmogleínas (desmosoma)', 'Ampolla intraepidérmica, suprabasal', 'Ampollas flácidas que se rompen; erosiones', 'Mucosa oral casi siempre afectada', 'Adultos de mediana edad'],
          },
          right: {
            title: 'Penfigoide ampolloso',
            items: ['Anticuerpos contra el hemidesmosoma', 'Ampolla subepidérmica', 'Ampollas tensas que duran', 'Mucosas rara vez afectadas', 'Adultos mayores'],
          },
        },
      ],
    },
    {
      id: 'pen-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Erosiones dolorosas en la boca, a menudo el primer dato, durante semanas o meses.',
            'Después, ampollas flácidas en la piel que se rompen y dejan erosiones extensas.',
            'Signo de Nikolsky: al frotar la piel sana cerca de una lesión, la epidermis se desprende.',
            'Riesgo de infección, pérdida de líquidos y desnutrición en los casos extensos.',
          ],
        },
      ],
    },
    {
      id: 'pen-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Biopsia del borde de una ampolla reciente: separación justo por encima de la capa basal (acantólisis suprabasal); las células basales quedan unidas a la membrana basal como «hilera de lápidas».',
            'Inmunofluorescencia directa: IgG y C3 entre los queratinocitos, con patrón en red.',
            'Anticuerpos contra desmogleína 1 y 3 en sangre (ELISA), útiles también para el seguimiento.',
          ],
        },
      ],
    },
    {
      id: 'pen-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Corticosteroides sistémicos: prednisona 0.5–1 mg/kg/día y reducción lenta cuando las lesiones curan (GPC).',
            'Inmunosupresores ahorradores de esteroide: azatioprina o micofenolato (GPC).',
            'Rituximab (anticuerpo anti-CD20, contra los linfocitos B): la GPC de 2013 lo reserva para casos resistentes; la guía europea de 2020 ya lo recomienda como primera línea en el pénfigo moderado a grave.',
            'Cuidado de las heridas, control de infecciones y prevención de los efectos del esteroide (osteoporosis, diabetes).',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-epitelial-polaridad', sectionId: 'hpol-3', label: 'Dominio lateral: medios de unión', porQue: 'El desmosoma y la correlación del pénfigo vulgar.' },
    { materia: 'Histología', topicId: 'histologia-epitelial-polaridad', sectionId: 'hpol-4', label: 'Dominio basal: unión a la matriz', porQue: 'El hemidesmosoma del penfigoide.' },
    { materia: 'Histología', topicId: 'histologia-piel', sectionId: 'hpiel-7', label: 'Correlaciones clínicas de la piel', porQue: 'Pénfigo frente a penfigoide.' },
    { materia: 'Histología', topicId: 'histologia-piel', sectionId: 'hpiel-3', label: 'Epidermis y los cinco estratos', porQue: 'Dónde ocurre la separación.' },
    { materia: 'Histología', topicId: 'histologia-linfocitos', sectionId: 'hlin-2', label: 'Linfocitos B (inmunidad humoral)', porQue: 'Las células que producen los anticuerpos y a las que se dirige el rituximab.' },
  ],
  atlas: [
    { id: 'histologia-piel', title: 'La piel' },
    { id: 'histologia-epitelio', title: 'Tejido epitelial' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 52 años con 3 meses de erosiones dolorosas en la boca que no cicatrizan. Hace 2 semanas le salieron ampollas flácidas en el tórax que se rompen y dejan zonas en carne viva. Al frotar la piel sana junto a una lesión, la epidermis se desprende.',
    preguntas: [
      q('pat-pen-1', 'penfigo-vulgar', '¿Cómo se llama el desprendimiento de la epidermis al frotar?',
        ['Signo de Auspitz', 'Fenómeno de Koebner', 'Signo de Nikolsky', 'Signo de Hutchinson'], 2,
        'Refleja la pérdida de adhesión entre queratinocitos.', 'easy'),
      q('pat-pen-2', 'penfigo-vulgar', '¿Contra qué estructura van los anticuerpos?',
        ['Hemidesmosoma', 'Desmosoma (desmogleínas)', 'Membrana basal', 'Melanocito'], 1,
        'Al perder los desmosomas, los queratinocitos se separan entre sí.'),
      q('pat-pen-3', 'penfigo-vulgar', '¿Dónde se forma la ampolla?',
        ['Dentro de la epidermis, por encima de la capa basal', 'Debajo de la membrana basal', 'En la hipodermis', 'En la dermis reticular'], 0,
        'Por eso es flácida y se rompe fácil, a diferencia del penfigoide.'),
      q('pat-pen-4', 'penfigo-vulgar', '¿Qué estudio muestra los anticuerpos en la piel?',
        ['Cultivo', 'Dermatoscopia', 'Prueba de parche', 'Inmunofluorescencia directa'], 3,
        'Muestra IgG entre los queratinocitos con patrón en red.'),
      q('pat-pen-5', 'penfigo-vulgar', '¿Cuál es el pilar del tratamiento inicial según la GPC?',
        ['Antibióticos', 'Corticosteroides sistémicos con reducción lenta', 'Antihistamínicos', 'Cirugía'], 1,
        'Se agregan inmunosupresores para reducir la dosis de esteroide; la guía europea de 2020 ya incluye el rituximab desde el inicio.'),
    ],
  },
  fuentes: [F.penfigo, F.penfigoEadv],
}

const DCP: Patologia = {
  id: 'discinesia-ciliar-primaria',
  kind: 'ficha',
  materia: 'Histología',
  title: 'Discinesia ciliar primaria',
  aka: 'Síndrome de Kartagener',
  ambito: 'Vía respiratoria',
  resumen:
    'Enfermedad autosómica recesiva en la que los cilios no se mueven o se mueven mal. Falla el transporte mucociliar: infecciones respiratorias desde el nacimiento, sinusitis, otitis y bronquiectasias. Cerca de la mitad tiene situs inversus (síndrome de Kartagener).',
  sections: [
    {
      id: 'dcp-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'El axonema del cilio tiene 9 pares de microtúbulos periféricos y 2 centrales (9 + 2). Los brazos de dineína generan el movimiento. Mutaciones en los genes de estas proteínas dejan cilios inmóviles o con batido anormal. Afecta a alrededor de 1 de cada 10 000 a 20 000 personas.',
        },
        {
          type: 'table',
          title: 'Dónde fallan los cilios',
          data: {
            headers: ['Sitio', 'Consecuencia'],
            rows: [
              ['Vía respiratoria', 'El moco no avanza: infecciones, sinusitis y bronquiectasias'],
              ['Oído medio', 'Otitis media de repetición e hipoacusia'],
              ['Nodo embrionario', 'Se pierde la orientación izquierda-derecha: situs inversus en cerca de la mitad'],
              ['Flagelo del espermatozoide', 'Espermatozoides inmóviles: infertilidad masculina'],
              ['Trompa uterina', 'Subfertilidad y riesgo de embarazo ectópico'],
            ],
          },
        },
        {
          type: 'note',
          content:
            'Síndrome de Kartagener: la tríada situs inversus, bronquiectasias y sinusitis.',
        },
      ],
    },
    {
      id: 'dcp-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Dificultad respiratoria sin explicación en un recién nacido de término.',
            'Tos húmeda diaria desde la infancia.',
            'Rinitis persistente durante todo el año y sinusitis crónica.',
            'Otitis media de repetición con hipoacusia.',
            'Bronquiectasias con los años.',
            'Corazón a la derecha (dextrocardia) cuando hay situs inversus.',
          ],
        },
      ],
    },
    {
      id: 'dcp-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          title: 'Guía de la ERS (2017)',
          items: [
            'Óxido nítrico nasal muy bajo: prueba de tamizaje a partir de la edad escolar.',
            'Videomicroscopía de alta velocidad del batido ciliar en una muestra de epitelio nasal.',
            'Microscopía electrónica de transmisión: muestra la falta de brazos de dineína.',
            'Estudio genético.',
            'El diagnóstico se confirma combinando estas pruebas en un centro especializado.',
          ],
        },
      ],
    },
    {
      id: 'dcp-4',
      title: 'Manejo: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'No tiene cura: el objetivo es mantener la vía aérea limpia.',
            'Fisioterapia respiratoria diaria y ejercicio.',
            'Antibióticos en las exacerbaciones, guiados por cultivos de esputo.',
            'Vacunas, vigilancia de la audición y de los senos paranasales.',
            'Consejería genética y apoyo para la fertilidad (técnicas de reproducción asistida).',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Histología', topicId: 'histologia-repaso-s2', sectionId: 'hrep2-3', label: 'Caso clínico: síndrome de Kartagener', porQue: 'El caso del curso: dineína, situs inversus y bronquiectasias.' },
    { materia: 'Histología', topicId: 'histologia-epitelial-polaridad', sectionId: 'hpol-2', label: 'Dominio apical: microvellosidades, estereocilios y cilios', porQue: 'El axonema 9 + 2 y la dineína.' },
    { materia: 'Histología', topicId: 'histologia-epitelios-respiratorio', sectionId: 'hres-3', label: 'Sistema mucociliar y cambio por calibre', porQue: 'El transporte que falla.' },
    { materia: 'Histología', topicId: 'histologia-epitelios-respiratorio', sectionId: 'hres-2', label: 'Epitelio respiratorio y sus células', porQue: 'Las células ciliadas de la vía aérea.' },
    { materia: 'Genética', topicId: 'genetica-gametogenesis', sectionId: 'ggam-3', label: 'Espermatogénesis y espermiogénesis', porQue: 'El flagelo del espermatozoide.' },
  ],
  atlas: [
    { id: 'histologia-epitelios-especializados', title: 'Epitelios especializados' },
    { id: 'histologia-epitelio', title: 'Tejido epitelial' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Masculino de 24 años con tos con flemas todos los días desde niño, sinusitis crónica y otitis de repetición con hipoacusia. La radiografía muestra el corazón a la derecha y la tomografía, bronquiectasias. Consulta además porque su pareja no ha logrado embarazarse.',
    preguntas: [
      q('pat-dcp-1', 'discinesia-ciliar-primaria', '¿Cuál es el diagnóstico más probable?',
        ['Fibrosis quística', 'Asma', 'Síndrome de Kartagener (discinesia ciliar primaria)', 'Tuberculosis'], 2,
        'Situs inversus, bronquiectasias y sinusitis: la tríada.', 'easy'),
      q('pat-dcp-2', 'discinesia-ciliar-primaria', '¿Qué estructura del cilio suele fallar?',
        ['Los brazos de dineína', 'La membrana basal', 'Las microvellosidades', 'Los desmosomas'], 0,
        'Sin dineína los microtúbulos no se deslizan y el cilio no bate.'),
      q('pat-dcp-3', 'discinesia-ciliar-primaria', '¿Por qué tiene el corazón a la derecha?',
        ['Por un tumor que lo desplaza', 'Por bronquiectasias', 'Por una cardiopatía adquirida', 'Porque los cilios del nodo embrionario no definieron el eje izquierda-derecha'], 3,
        'La orientación de los órganos queda al azar: la mitad tiene situs inversus.'),
      q('pat-dcp-4', 'discinesia-ciliar-primaria', '¿Qué explica la infertilidad?',
        ['Falta de testosterona', 'Espermatozoides inmóviles porque su flagelo comparte la estructura del cilio', 'Obstrucción del conducto deferente', 'Varicocele'], 1,
        'El flagelo tiene el mismo axonema 9 + 2.'),
      q('pat-dcp-5', 'discinesia-ciliar-primaria', '¿Qué estudio muestra la falta de brazos de dineína?',
        ['Radiografía de tórax', 'Espirometría', 'Microscopía electrónica de transmisión', 'Biometría hemática'], 2,
        'Se complementa con videomicroscopía, óxido nítrico nasal y genética.'),
    ],
  },
  fuentes: [F.dcp],
}

/* ── Anatomía ───────────────────────────────────────────────────── */

const DESFILADERO: Patologia = {
  id: 'sindrome-desfiladero-toracico',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Síndrome del desfiladero torácico',
  ambito: 'Cuello y hombro',
  resumen:
    'Compresión del plexo braquial, la vena o la arteria subclavias en su paso del cuello a la axila. La forma neurogénica es la más frecuente: dolor y hormigueo del miembro superior que empeoran con los brazos elevados.',
  sections: [
    {
      id: 'dft-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'table',
          title: 'Los tres espacios por donde pasan',
          data: {
            headers: ['Espacio', 'Límites', 'Qué pasa'],
            rows: [
              ['Triángulo interescalénico', 'Escaleno anterior, escaleno medio y 1.ª costilla', 'Plexo braquial y arteria subclavia (la vena pasa por delante del escaleno anterior)'],
              ['Espacio costoclavicular', 'Clavícula y 1.ª costilla', 'Plexo, arteria y vena subclavias'],
              ['Espacio subpectoral', 'Debajo del pectoral menor', 'Plexo y vasos axilares'],
            ],
          },
        },
        {
          type: 'table',
          title: 'Tipos (Sociedad de Cirugía Vascular, 2016)',
          data: {
            headers: ['Tipo', 'Frecuencia', 'Qué se comprime'],
            rows: [
              ['Neurogénico', 'La gran mayoría (más del 90 %)', 'Plexo braquial, sobre todo el tronco inferior (C8–T1)'],
              ['Venoso', 'Poco frecuente', 'Vena subclavia: trombosis de esfuerzo'],
              ['Arterial', 'Raro', 'Arteria subclavia, a menudo por una costilla cervical'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Causas',
          items: [
            'Costilla cervical o bandas fibrosas.',
            'Traumatismos del cuello (latigazo) y actividades repetidas con los brazos elevados.',
          ],
        },
      ],
    },
    {
      id: 'dft-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'list',
          items: [
            'Neurogénico: dolor en cuello, hombro y brazo, hormigueo en el borde cubital de la mano (C8–T1), que empeoran al elevar los brazos; en casos avanzados, debilidad y atrofia de los músculos de la mano.',
            'Venoso: el brazo se hincha y se pone morado, con venas visibles en el hombro.',
            'Arterial: brazo frío y pálido, dolor al usarlo y lesiones isquémicas en los dedos.',
          ],
        },
      ],
    },
    {
      id: 'dft-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Neurogénico, según la SVS: al menos tres de cuatro criterios (dolor e hipersensibilidad en la zona del desfiladero; síntomas de compresión nerviosa en el brazo que empeoran al elevarlo; ausencia de otra causa; respuesta favorable a la infiltración del escaleno).',
            'Maniobras provocadoras con los brazos elevados: apoyan, pero son poco específicas.',
            'Radiografía cervical para buscar costilla cervical.',
            'Formas vasculares: ultrasonido Doppler, angiotomografía o venografía.',
          ],
        },
      ],
    },
    {
      id: 'dft-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Neurogénico: fisioterapia (postura, estiramientos, fortalecimiento) como primera opción.',
            'Cirugía de descompresión (resección de la 1.ª costilla y escalenectomía) si no mejora.',
            'Venoso: anticoagulación o trombólisis y descompresión.',
            'Arterial: corrección quirúrgica de la causa y de la arteria dañada.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'musculos-cuello-nuca', sectionId: 'mcue-4', label: 'Escalenos', porQue: 'El desfiladero entre el escaleno anterior y el medio.' },
    { materia: 'Anatomía', topicId: 'torax-oseo', sectionId: 'tor-5', label: 'Costillas especiales', porQue: 'La 1.ª costilla, piso del desfiladero.' },
    { materia: 'Anatomía', topicId: 'miembro-superior-oseo', sectionId: 'mso-2', label: 'Clavícula', porQue: 'Techo del espacio costoclavicular.' },
    { materia: 'Anatomía', topicId: 'columna-vertebral', sectionId: 'col-3', label: 'Vértebras cervicales', porQue: 'La costilla cervical sale de C7.' },
    { materia: 'Anatomía', topicId: 'musculos-hombro-brazo', sectionId: 'mhb-2', label: 'Región pectoral', porQue: 'El pectoral menor del espacio subpectoral.' },
  ],
  atlas: [
    { id: 'musculos-cuello-nuca', title: 'Músculos del cuello y la nuca' },
    { id: 'torax-oseo', title: 'Tórax óseo' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 34 años que trabaja colocando mercancía en anaqueles altos. Desde hace 6 meses tiene dolor en el cuello y el hombro derechos y hormigueo en el meñique y el anular, que empeoran con los brazos arriba. Pulsos y coloración normales. La radiografía cervical muestra una costilla cervical derecha.',
    preguntas: [
      q('pat-dft-1', 'sindrome-desfiladero-toracico', '¿Qué tipo de desfiladero es el más probable?',
        ['Arterial', 'Venoso', 'Neurogénico', 'Mixto obligatoriamente'], 2,
        'Síntomas nerviosos con pulsos y coloración normales.', 'easy'),
      q('pat-dft-2', 'sindrome-desfiladero-toracico', '¿Entre qué estructuras pasa el plexo braquial en el triángulo interescalénico?',
        ['Escaleno anterior, escaleno medio y 1.ª costilla', 'Esternocleidomastoideo y trapecio', 'Clavícula y escápula', 'Pectoral mayor y menor'], 0,
        'La arteria subclavia pasa con el plexo; la vena, por delante del escaleno anterior.'),
      q('pat-dft-3', 'sindrome-desfiladero-toracico', '¿Por qué el hormigueo está en el meñique y el anular?',
        ['Por compresión del nervio mediano', 'Por compresión del tronco superior', 'Por compresión arterial', 'Por compresión del tronco inferior del plexo (C8–T1)'], 3,
        'Es el que se apoya sobre la 1.ª costilla.'),
      q('pat-dft-4', 'sindrome-desfiladero-toracico', '¿Cuál es el tratamiento inicial?',
        ['Resección de la costilla de inmediato', 'Fisioterapia de postura, estiramiento y fortalecimiento', 'Anticoagulación', 'Inmovilizar el brazo'], 1,
        'La cirugía se reserva si no mejora.'),
      q('pat-dft-5', 'sindrome-desfiladero-toracico', 'Si de pronto el brazo se hinchara y se pusiera morado tras un esfuerzo, ¿qué se sospecharía?',
        ['Trombosis de la vena subclavia (desfiladero venoso)', 'Lesión del plexo', 'Infarto', 'Celulitis'], 0,
        'Requiere Doppler y anticoagulación.'),
    ],
  },
  fuentes: [F.desfiladero],
}

const TTM: Patologia = {
  id: 'trastorno-temporomandibular',
  kind: 'ficha',
  materia: 'Anatomía',
  title: 'Trastornos temporomandibulares',
  aka: 'Disfunción de la ATM',
  ambito: 'Articulación temporomandibular',
  resumen:
    'Grupo de alteraciones dolorosas o mecánicas de la ATM y los músculos masticadores. Es la causa más común de dolor orofacial que no viene de los dientes. El desplazamiento anterior del disco produce el chasquido y, a veces, el bloqueo.',
  sections: [
    {
      id: 'ttm-1',
      title: 'Qué es',
      blocks: [
        {
          type: 'paragraph',
          content:
            'La ATM es sinovial y tiene un disco de fibrocartílago que la divide en dos compartimentos: en el inferior ocurre la rotación (primeros grados de apertura) y en el superior la traslación hacia delante. El pterigoideo lateral tira del cóndilo y del disco hacia delante.',
        },
        {
          type: 'table',
          title: 'Grupos de los criterios DC/TMD (2014)',
          data: {
            headers: ['Grupo', 'Ejemplos'],
            rows: [
              ['Dolorosos', 'Dolor de los músculos masticadores (mialgia), dolor de la articulación (artralgia), cefalea atribuida a la ATM'],
              ['Articulares', 'Desplazamiento del disco con o sin reducción, enfermedad degenerativa, subluxación'],
            ],
          },
        },
        {
          type: 'list',
          title: 'Factores asociados',
          items: [
            'Bruxismo y apretar los dientes; estrés.',
            'Más frecuente en mujeres jóvenes y de mediana edad.',
          ],
        },
      ],
    },
    {
      id: 'ttm-2',
      title: 'Cuadro clínico',
      blocks: [
        {
          type: 'comparison',
          title: 'Desplazamiento anterior del disco',
          left: {
            title: 'Con reducción',
            items: ['El disco vuelve a su lugar al abrir: chasquido', 'A menudo otro chasquido al cerrar', 'La apertura es normal'],
          },
          right: {
            title: 'Sin reducción',
            items: ['El disco no regresa: bloqueo', 'Apertura limitada (menos de 40 mm)', 'La mandíbula se desvía hacia el lado afectado al abrir'],
          },
        },
        {
          type: 'list',
          items: [
            'Dolor en la región preauricular o en los maseteros y temporales, que aumenta al masticar.',
            'Ruidos articulares: chasquidos o crepitación.',
            'Limitación o desviación al abrir la boca.',
          ],
        },
      ],
    },
    {
      id: 'ttm-3',
      title: 'Cómo se confirma',
      blocks: [
        {
          type: 'list',
          items: [
            'Exploración estandarizada (DC/TMD): apertura máxima en mm, movimientos laterales y de protrusión, ruidos y palpación de músculos y articulación.',
            'La apertura normal es de alrededor de 40–50 mm.',
            'La resonancia magnética muestra la posición del disco; se pide solo si cambia el manejo.',
          ],
        },
      ],
    },
    {
      id: 'ttm-4',
      title: 'Tratamiento: la idea general',
      blocks: [
        {
          type: 'list',
          items: [
            'Primero lo conservador y reversible: la mayoría mejora con él.',
            'Educación y autocuidado: dieta blanda, evitar abrir mucho la boca y masticar chicle, controlar el apretamiento.',
            'Calor local, antiinflamatorios por pocos días y ejercicios de fisioterapia.',
            'Guarda oclusal nocturna cuando hay bruxismo.',
            'Se evitan los tratamientos irreversibles (desgastes dentales); la cirugía es excepcional.',
          ],
        },
      ],
    },
  ],
  bases: [
    { materia: 'Anatomía', topicId: 'articulacion-temporomandibular', sectionId: 'atm-1', label: 'Generalidades y disco articular', porQue: 'El disco que se desplaza y produce el chasquido.' },
    { materia: 'Anatomía', topicId: 'articulacion-temporomandibular', sectionId: 'atm-2', label: 'Ligamentos de la ATM', porQue: 'Lo que estabiliza la articulación.' },
    { materia: 'Anatomía', topicId: 'articulacion-temporomandibular', sectionId: 'atm-3', label: 'Movimientos y músculos', porQue: 'Rotación y traslación al abrir la boca.' },
    { materia: 'Anatomía', topicId: 'musculos-masticacion', sectionId: 'mmast-1', label: 'Los cuatro músculos masticatorios', porQue: 'El pterigoideo lateral y los músculos dolorosos.' },
    { materia: 'Histología', topicId: 'histologia-cartilago', sectionId: 'hcar-5', label: 'Los tres tipos de cartílago', porQue: 'El disco de la ATM es fibrocartílago.' },
  ],
  atlas: [
    { id: 'articulacion-temporomandibular', title: 'Articulación temporomandibular (ATM)' },
    { id: 'musculos-cabeza', title: 'Músculos de la cabeza' },
  ],
  caso: {
    titulo: 'Caso clínico',
    texto:
      'Femenina de 26 años, estudiante, que despierta con dolor en ambos lados de la cara y la mandíbula cansada; su pareja dice que rechina los dientes de noche. Tiene un chasquido en la ATM derecha al abrir la boca y otro al cerrarla. Abre 45 mm sin desviación. Los maseteros duelen a la palpación.',
    preguntas: [
      q('pat-ttm-1', 'trastorno-temporomandibular', '¿Qué explica el chasquido al abrir con apertura normal?',
        ['Desplazamiento anterior del disco con reducción', 'Desplazamiento sin reducción', 'Fractura del cóndilo', 'Luxación de la ATM'], 0,
        'El disco vuelve a su sitio al abrir y produce el ruido.', 'easy'),
      q('pat-ttm-2', 'trastorno-temporomandibular', '¿De qué tejido es el disco articular?',
        ['Cartílago hialino', 'Hueso esponjoso', 'Tejido adiposo', 'Fibrocartílago'], 3,
        'Resiste la compresión y la tensión.'),
      q('pat-ttm-3', 'trastorno-temporomandibular', 'Si un día no pudiera abrir más de 30 mm y la mandíbula se desviara a la derecha, ¿qué pensaría?',
        ['Mialgia sola', 'Desplazamiento del disco sin reducción en la ATM derecha', 'Parálisis facial', 'Subluxación'], 1,
        'El disco desplazado bloquea la traslación del cóndilo de ese lado.'),
      q('pat-ttm-4', 'trastorno-temporomandibular', '¿Qué músculo tira del disco hacia delante?',
        ['Masetero', 'Temporal', 'Pterigoideo lateral', 'Pterigoideo medial'], 2,
        'Es el que inicia la apertura y la protrusión.'),
      q('pat-ttm-5', 'trastorno-temporomandibular', '¿Cuál es el manejo inicial?',
        ['Cirugía artroscópica', 'Desgaste de los dientes', 'Extracción de los terceros molares', 'Medidas conservadoras: educación, dieta blanda, calor, ejercicios y guarda nocturna'], 3,
        'La mayoría mejora sin tratamientos irreversibles.'),
    ],
  },
  fuentes: [F.atm],
}

export const FICHAS_MATERIAS_3: Patologia[] = [
  ESFINGOLIPIDOSIS, OTC, REYE,
  TRISOMIAS,
  MELANOMA, PSORIASIS, PENFIGO, DCP,
  DESFILADERO, TTM,
]
