import type { Topic } from '../types'

// Embriología I (UAD · EM01004) — Semana 1, Clase 1: panorama del desarrollo
// temprano, cromosomas, mitosis y meiosis, y ovogénesis.
export const embriologiaTopics: Topic[] = [
  {
    id: 'embriologia-desarrollo-temprano',
    title: 'Panorama del desarrollo temprano',
    subtitle: 'Periodos embrionario y fetal; fecundación, segmentación, blastocisto e implantación; disco bilaminar y gastrulación',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '🌱',
    keyPoints: [
      'PERIODO EMBRIONARIO: semanas 1 a 8 · PERIODO FETAL: semana 9 al nacimiento (crecimiento y maduración).',
      'La fecundación ocurre con mayor frecuencia en la AMPOLLA de la trompa uterina y forma el CIGOTO ★',
      'Segmentación: cigoto → 2, 4, 8 células → MÓRULA (≈ día 3, 16–32 células) → BLASTOCISTO (≈ día 5) → inicio de la IMPLANTACIÓN (días 5–6) en el endometrio.',
      'Blastocisto: EMBRIOBLASTO (masa celular interna → embrión), TROFOBLASTO (masa celular externa → placenta) y BLASTOCELE.',
      '2.ª semana: disco BILAMINAR (epiblasto + hipoblasto); trofoblasto en citotrofoblasto y sincitiotrofoblasto; cavidad amniótica y saco vitelino.',
      '3.ª semana: GASTRULACIÓN → tres capas germinales: ectodermo, mesodermo y endodermo.',
    ],
    sections: [
      {
        id: 'edt-1',
        number: 1,
        title: 'Periodos del desarrollo',
        keyTerms: ['periodo embrionario', 'periodo fetal'],
        blocks: [
          {
            type: 'comparison',
            title: 'Embrión y feto',
            left: {
              title: 'Periodo embrionario (semanas 1–8)',
              items: [
                'Semanas 1–2: fecundación, segmentación e implantación',
                'Semana 3: gastrulación, aparecen las tres capas germinales',
                'Semanas 4–8: se forman los esbozos de órganos y sistemas (organogénesis)',
                'Es el periodo más sensible a los teratógenos',
              ],
            },
            right: {
              title: 'Periodo fetal (semana 9 al nacimiento)',
              items: [
                'Predomina el crecimiento',
                'Aumenta el peso',
                'Maduran los órganos y sistemas ya formados',
              ],
            },
          },
          {
            type: 'note',
            title: 'Por qué importan las primeras tres semanas',
            content: 'En ellas se establece la organización inicial del nuevo individuo: el plan corporal, las capas germinales y la relación con la madre a través del trofoblasto.',
          },
        ],
      },
      {
        id: 'edt-2',
        number: 2,
        title: 'Estructuras del aparato reproductor femenino',
        keyTerms: ['trompa uterina', 'ampolla', 'endometrio'],
        blocks: [
          {
            type: 'table',
            title: 'Dónde ocurre cada evento',
            data: {
              headers: ['Estructura', 'Papel en el desarrollo temprano'],
              rows: [
                ['Ovario', 'Contiene los folículos y libera el ovocito en la ovulación'],
                ['Fimbrias e infundíbulo', 'Captan el ovocito liberado'],
                ['Ampolla', 'Porción más amplia de la trompa: sitio más frecuente de la fecundación'],
                ['Istmo', 'Porción más estrecha de la trompa, cercana al útero'],
                ['Endometrio', 'Capa interna del útero, donde normalmente se implanta el blastocisto'],
                ['Miometrio', 'Capa de músculo liso del útero'],
                ['Perimetrio', 'Capa más externa del útero'],
              ],
            },
          },
        ],
      },
      {
        id: 'edt-3',
        number: 3,
        title: 'Primera semana: fecundación, segmentación e implantación',
        keyTerms: ['cigoto', 'segmentación', 'mórula', 'blastocisto', 'implantación'],
        blocks: [
          {
            type: 'definition',
            title: 'Fecundación',
            content: 'Unión del ovocito con el espermatozoide. Forma el CIGOTO, la primera célula del nuevo individuo, con material genético materno y paterno.',
          },
          {
            type: 'steps',
            title: 'Del cigoto a la implantación',
            steps: [
              'Cigoto: se forma en la ampolla de la trompa.',
              'Segmentación: divisiones sucesivas a 2, 4 y 8 células mientras el conjunto avanza por la trompa hacia el útero.',
              'Mórula (≈ día 3): esfera de unas 16–32 células.',
              'Blastocisto (≈ día 5): aparece una cavidad y las células se separan en dos poblaciones.',
              'Implantación (≈ días 5–6): el blastocisto se adhiere al endometrio y el trofoblasto empieza a invadirlo.',
            ],
          },
          {
            type: 'table',
            title: 'Partes del blastocisto',
            data: {
              headers: ['Parte', 'Otro nombre', 'Destino'],
              rows: [
                ['Embrioblasto', 'Masa celular interna', 'Tejidos del embrión'],
                ['Trofoblasto', 'Masa celular externa', 'Implantación y parte fetal de la placenta'],
                ['Blastocele', 'Cavidad blastocística', 'Cavidad interna del blastocisto'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Embarazo ectópico',
            content: 'Es la implantación fuera de la cavidad uterina. El sitio más frecuente es la trompa uterina (sobre todo la ampolla); con menos frecuencia ocurre en el ovario, el cuello uterino o la cavidad abdominal. Esos tejidos no pueden sostener la gestación y la trompa puede romperse con hemorragia interna, por eso es una urgencia.',
          },
        ],
      },
      {
        id: 'edt-4',
        number: 4,
        title: 'Segunda semana: disco embrionario bilaminar',
        keyTerms: ['epiblasto', 'hipoblasto', 'citotrofoblasto', 'sincitiotrofoblasto'],
        blocks: [
          {
            type: 'comparison',
            title: 'Embrioblasto y trofoblasto en la segunda semana',
            left: {
              title: 'Embrioblasto → disco bilaminar',
              items: [
                'Epiblasto: junto a él se forma la cavidad amniótica',
                'Hipoblasto: se relaciona con el saco vitelino',
              ],
            },
            right: {
              title: 'Trofoblasto → dos capas',
              items: [
                'Citotrofoblasto: capa interna, de células individuales',
                'Sincitiotrofoblasto: capa externa, sin límites celulares; invade el endometrio',
              ],
            },
          },
          {
            type: 'list',
            title: 'Cavidades',
            items: [
              'Cavidad amniótica: se llenará de líquido amniótico, que suspende y protege al embrión y al feto.',
              'Saco vitelino: estructura temporal; en su pared aparecen las primeras células sanguíneas y las células germinales primordiales.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Embarazo molar',
            content: 'En la mola hidatiforme el trofoblasto prolifera de forma anormal. En la mola completa no hay tejido embrionario: un ovocito sin núcleo materno es fecundado y todo el material genético es paterno. En la mola parcial hay algo de tejido embrionario y el producto suele ser triploide (un ovocito fecundado por dos espermatozoides). Ninguna es viable y la hormona hCG se eleva mucho.',
          },
        ],
      },
      {
        id: 'edt-5',
        number: 5,
        title: 'Tercera semana: gastrulación',
        keyTerms: ['gastrulación', 'ectodermo', 'mesodermo', 'endodermo'],
        blocks: [
          {
            type: 'definition',
            title: 'Gastrulación',
            content: 'Proceso de la tercera semana que transforma el disco bilaminar en un disco TRILAMINAR: el epiblasto origina las tres capas germinales (ectodermo, mesodermo y endodermo), de las que derivan todos los tejidos del embrión.',
          },
          {
            type: 'table',
            title: 'Derivados de las capas germinales',
            data: {
              headers: ['Capa', 'Derivados'],
              rows: [
                ['Ectodermo', 'Sistema nervioso central y periférico, epidermis, pelo y uñas, esmalte dental, glándulas sudoríparas, sebáceas y mamarias'],
                ['Mesodermo', 'Músculos, huesos, cartílago, tendones y sistema urogenital'],
                ['Endodermo', 'Revestimiento del tubo digestivo y del aparato respiratorio, y sus glándulas asociadas'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Ecto = afuera, endo = adentro',
            content: 'ECTOdermo forma lo que está «afuera» y lo que nos comunica con el exterior (piel y sistema nervioso). ENDOdermo forma los «tubos» internos (digestivo y respiratorio). MESOdermo queda en medio: músculo, hueso y aparato urogenital.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Teratogénesis',
            content: 'Fármacos, alcohol, drogas, infecciones y radiación pueden alterar el desarrollo de los tejidos. El daño depende del agente, de la dosis y del momento: el periodo embrionario (semanas 3–8), cuando se forman los órganos, es el más sensible.',
          },
        ],
      },
    ],
  },
  {
    id: 'embriologia-cromosomas-division',
    title: 'Gametogénesis, cromosomas, mitosis y meiosis',
    subtitle: 'Células germinales primordiales, diploide y haploide, euploidía y aneuploidía, fases de la mitosis y de la meiosis I y II',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '🧬',
    keyPoints: [
      'GAMETOGÉNESIS = MEIOSIS (reduce los cromosomas) + CITODIFERENCIACIÓN (maduración).',
      'Las células germinales primordiales aparecen en la pared del SACO VITELINO, migran a las gónadas desde la 4.ª semana y llegan al final de la 5.ª.',
      'Célula somática: 46 cromosomas, DIPLOIDE (2n) · Gameto: 23 cromosomas, HAPLOIDE (n).',
      'EUPLOIDÍA: múltiplo exacto de n (2n normal; 3n triploide) · ANEUPLOIDÍA: número que no es múltiplo de n (trisomía, monosomía).',
      'MITOSIS: profase → prometafase → metafase → anafase → telofase → citocinesis; 1 célula → 2 hijas idénticas.',
      'MEIOSIS: una replicación y dos divisiones. Meiosis I separa HOMÓLOGOS (entrecruzamiento en paquiteno); meiosis II separa CROMÁTIDAS HERMANAS → 4 células haploides ★',
    ],
    sections: [
      {
        id: 'ecd-1',
        number: 1,
        title: 'Gametogénesis y células germinales primordiales',
        keyTerms: ['gametogénesis', 'células germinales primordiales', 'citodiferenciación'],
        blocks: [
          {
            type: 'definition',
            title: 'Gametogénesis',
            content: 'Transformación de las células germinales en gametos masculinos (espermatozoides) y femeninos (ovocitos). Incluye la MEIOSIS, que reduce el número de cromosomas, y la CITODIFERENCIACIÓN, que completa su maduración.',
          },
          {
            type: 'steps',
            title: 'Origen de las células germinales',
            steps: [
              'Las células germinales primordiales se observan en la pared del saco vitelino.',
              'Durante la 4.ª semana empiezan a migrar hacia las gónadas en desarrollo.',
              'Llegan a las gónadas al final de la 5.ª semana.',
              'Allí se diferencian en ovogonias (embrión femenino) o espermatogonias (embrión masculino).',
            ],
          },
        ],
      },
      {
        id: 'ecd-2',
        number: 2,
        title: 'Número de cromosomas',
        keyTerms: ['diploide', 'haploide', 'euploidía', 'aneuploidía'],
        blocks: [
          {
            type: 'comparison',
            title: 'Células somáticas y gametos',
            left: {
              title: 'Célula somática',
              items: ['46 cromosomas (23 pares)', 'Diploide (2n)', 'Forma los tejidos del cuerpo'],
            },
            right: {
              title: 'Gameto',
              items: ['23 cromosomas', 'Haploide (n)', 'La fecundación restablece los 46 en el cigoto'],
            },
          },
          {
            type: 'table',
            title: 'Anomalías del número',
            data: {
              headers: ['Término', 'Significado', 'Ejemplo'],
              rows: [
                ['Euploidía', 'Múltiplo exacto de n', 'Diploide 2n = 46 (normal); triploide 3n = 69 (anormal)'],
                ['Aneuploidía', 'Número que no es múltiplo exacto de n', 'Ganancia o pérdida de cromosomas sueltos'],
                ['Trisomía', 'Un cromosoma de más (47)', 'Down (21), Edwards (18), Patau (13)'],
                ['Monosomía', 'Falta un cromosoma (45)', 'Turner (45,X)'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Síndrome de Turner',
            content: 'Es la única monosomía completa compatible con la vida. Las niñas con 45,X tienen talla baja, cuello alado, linfedema de manos y pies al nacer, ovarios reemplazados por cintillas fibrosas (amenorrea e infertilidad) y riesgo de coartación de la aorta. Las anomalías del número pueden originarse en la meiosis o en la mitosis.',
          },
        ],
      },
      {
        id: 'ecd-3',
        number: 3,
        title: 'Mitosis',
        keyTerms: ['mitosis', 'huso mitótico', 'citocinesis'],
        blocks: [
          {
            type: 'definition',
            title: 'Mitosis',
            content: 'División por la que una célula da origen a dos células hijas con la misma carga genética que la progenitora (46 cromosomas en la célula somática humana). Antes, en la interfase, se replica el ADN.',
          },
          {
            type: 'steps',
            title: 'Fases',
            steps: [
              'Profase temprana: los cromosomas comienzan a condensarse, desaparece el nucléolo y empieza a formarse el huso mitótico.',
              'Prometafase (profase tardía): se descompone la envoltura nuclear; los cromosomas, ya condensados, se unen a los microtúbulos del huso.',
              'Metafase: los cromosomas se alinean en la placa metafásica (ecuatorial).',
              'Anafase: las cromátidas hermanas se separan y los microtúbulos las llevan a polos opuestos.',
              'Telofase: desaparece el huso, los cromosomas se descondensan y reaparecen la envoltura nuclear y el nucléolo.',
              'Citocinesis: un anillo de actina forma el surco de división y separa las dos células.',
            ],
          },
          {
            type: 'list',
            title: 'Para qué sirve',
            items: [
              'Crecimiento y desarrollo del organismo.',
              'Renovación y reparación de los tejidos.',
              'Multiplicación de las células germinales (ovogonias y espermatogonias) antes de la meiosis.',
            ],
          },
        ],
      },
      {
        id: 'ecd-4',
        number: 4,
        title: 'Meiosis',
        keyTerms: ['meiosis', 'sinapsis', 'entrecruzamiento', 'quiasma'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La meiosis es la división de las células germinales que forma los gametos. Hay UNA replicación del ADN y DOS divisiones: la meiosis I separa los cromosomas homólogos y la meiosis II separa las cromátidas hermanas.',
          },
          {
            type: 'table',
            title: 'Subetapas de la profase I',
            data: {
              headers: ['Etapa', 'Qué ocurre'],
              rows: [
                ['Leptoteno', 'Los cromosomas empiezan a condensarse'],
                ['Cigoteno', 'Los homólogos se aparean (sinapsis) gracias al complejo sinaptonémico'],
                ['Paquiteno', 'Entrecruzamiento: los homólogos intercambian segmentos de ADN'],
                ['Diploteno', 'Los homólogos se separan pero quedan unidos en los quiasmas'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Meiosis I y meiosis II',
            left: {
              title: 'Meiosis I (reduccional)',
              items: [
                'Metafase I: los pares de homólogos se alinean',
                'Anafase I: se separan los HOMÓLOGOS; las cromátidas hermanas siguen juntas',
                'Telofase I: 2 células haploides con 23 cromosomas de dos cromátidas',
              ],
            },
            right: {
              title: 'Meiosis II (ecuacional)',
              items: [
                'No hay nueva replicación',
                'Anafase II: se separan las CROMÁTIDAS HERMANAS',
                'Telofase II: 4 células haploides; cada cromosoma con una cromátida',
              ],
            },
          },
          {
            type: 'table',
            title: 'Mitosis frente a meiosis',
            data: {
              headers: ['Característica', 'Mitosis', 'Meiosis'],
              rows: [
                ['Células', 'Somáticas (y germinales en multiplicación)', 'Germinales'],
                ['Divisiones', 'Una', 'Dos'],
                ['Resultado', '2 células diploides', '4 células haploides'],
                ['Número cromosómico', 'Se conserva (2n)', 'Se reduce (2n → n)'],
                ['Variabilidad', 'Hijas idénticas a la progenitora', 'Entrecruzamiento y reparto al azar de homólogos'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'No disyunción y edad materna',
            content: 'Si un par de homólogos (meiosis I) o de cromátidas (meiosis II) no se separa, un gameto lleva un cromosoma de más y otro uno de menos. La fecundación produce entonces una trisomía o una monosomía. La mayoría de las trisomías 21 se originan en la meiosis I materna, y el riesgo aumenta con la edad de la madre.',
          },
        ],
      },
    ],
  },
  {
    id: 'embriologia-ovogenesis',
    title: 'Ovogénesis y desarrollo folicular',
    subtitle: 'De la ovogonia al ovocito secundario, detenciones meióticas, número de ovocitos y folículos primordial, primario, secundario y de Graaf',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '🥚',
    keyPoints: [
      'OVOGÉNESIS: las ovogonias se diferencian en ovocitos maduros. Comienza antes del nacimiento.',
      'Al entrar en meiosis I la ovogonia se llama OVOCITO PRIMARIO y queda detenido en DIPLOTENO de la profase I hasta después de la pubertad ★',
      'Ovocitos: ≈ 7 millones al 5.º mes de gestación · 600,000–800,000 al nacer · ≈ 40,000 en la pubertad · menos de 500 se ovulan en la vida.',
      'Folículos: PRIMORDIAL (células planas) → PRIMARIO (células cúbicas, granulosa, zona pelúcida) → SECUNDARIO (antro, teca) → DE GRAAF (≈ 25 mm, cúmulo oóforo).',
      'El pico de LH completa la meiosis I → OVOCITO SECUNDARIO + primer cuerpo polar; el ovocito secundario se detiene en METAFASE II ≈ 3 h antes de la ovulación.',
      'La meiosis II solo se completa si hay FECUNDACIÓN. Resultado: 1 gameto funcional y cuerpos polares que degeneran.',
    ],
    sections: [
      {
        id: 'eov-1',
        number: 1,
        title: 'Ovogénesis antes del nacimiento',
        keyTerms: ['ovogonia', 'ovocito primario', 'diploteno', 'atresia'],
        blocks: [
          {
            type: 'steps',
            title: 'De la célula germinal al folículo primordial',
            steps: [
              'Las células germinales primordiales llegan a la gónada de un embrión con genética femenina y se diferencian en ovogonias.',
              'Las ovogonias se dividen por mitosis; al final del tercer mes forman cúmulos rodeados por células epiteliales planas.',
              'Cuando una ovogonia entra en meiosis I pasa a llamarse ovocito primario.',
              'El ovocito primario rodeado por una capa de células foliculares planas forma un folículo primordial.',
              'El ovocito primario queda DETENIDO en diploteno de la profase I. No terminará la meiosis I hasta que su folículo madure, después de la pubertad.',
            ],
          },
          {
            type: 'table',
            title: 'Cuántos ovocitos hay',
            data: {
              headers: ['Momento', 'Cantidad aproximada'],
              rows: [
                ['5.º mes de gestación', '≈ 7 millones (máximo)'],
                ['Nacimiento', '600,000–800,000'],
                ['Inicio de la pubertad', '≈ 40,000'],
                ['Vida reproductiva', 'Se ovulan menos de 500 hasta la menopausia'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'La gran mayoría de los ovocitos no llega a ovularse: degenera por ATRESIA. Desde la pubertad, cada mes empiezan a madurar de 15 a 20 folículos, pero normalmente solo uno alcanza la ovulación.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Edad materna y aneuploidías',
            content: 'Como el ovocito primario permanece detenido en la profase I desde antes del nacimiento, un ovocito ovulado a los 40 años lleva cuatro décadas en meiosis. Esa larga detención se asocia con más errores de separación de los cromosomas y explica por qué el riesgo de trisomías, como la 21, crece con la edad materna.',
          },
        ],
      },
      {
        id: 'eov-2',
        number: 2,
        title: 'Desarrollo de los folículos',
        keyTerms: ['folículo primordial', 'granulosa', 'zona pelúcida', 'teca', 'folículo de Graaf'],
        blocks: [
          {
            type: 'table',
            title: 'Etapas del folículo',
            data: {
              headers: ['Folículo', 'Características'],
              rows: [
                ['Primordial', 'Ovocito primario rodeado por una sola capa de células foliculares PLANAS'],
                ['Primario', 'Las células foliculares se vuelven CÚBICAS y proliferan en varias capas (GRANULOSA); aparece la ZONA PELÚCIDA'],
                ['Secundario (vesicular o antral)', 'La granulosa secreta líquido y se forma el ANTRO; el tejido conectivo forma la TECA interna y la externa'],
                ['Terciario, maduro o de Graaf', 'Antro grande, ≈ 25 mm de diámetro; el ovocito queda rodeado por el CÚMULO OÓFORO'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Las dos tecas',
            left: {
              title: 'Teca interna',
              items: ['Rica en vasos sanguíneos', 'Secreta esteroides'],
            },
            right: {
              title: 'Teca externa',
              items: ['Capa de tejido conectivo', 'Se fusiona gradualmente con el estroma del ovario'],
            },
          },
          {
            type: 'note',
            title: 'Zona pelúcida y corona radiada',
            content: 'La zona pelúcida es una capa de glucoproteínas entre el ovocito y la granulosa; el espermatozoide debe atravesarla en la fecundación. En la ovulación el ovocito sale rodeado por células de la granulosa que forman la CORONA RADIADA.',
          },
        ],
      },
      {
        id: 'eov-3',
        number: 3,
        title: 'Control hormonal y fin de la meiosis',
        keyTerms: ['FSH', 'LH', 'ovocito secundario', 'metafase II', 'cuerpo polar'],
        blocks: [
          {
            type: 'steps',
            title: 'De la pubertad a la fecundación',
            steps: [
              'La FSH estimula el crecimiento de los folículos y la maduración de las células foliculares.',
              'El pico de LH hace que el ovocito primario complete la meiosis I.',
              'Se forman un OVOCITO SECUNDARIO, que se queda con casi todo el citoplasma, y el PRIMER CUERPO POLAR, pequeño.',
              'El ovocito secundario entra en meiosis II y se detiene en METAFASE II unas 3 horas antes de la ovulación; así se libera.',
              'Si hay fecundación, completa la meiosis II: se forma el óvulo maduro y el segundo cuerpo polar.',
              'Si no hay fecundación, el ovocito secundario degenera en unas 24 horas.',
            ],
          },
          {
            type: 'comparison',
            title: 'Las dos detenciones que hay que memorizar',
            left: {
              title: 'Ovocito primario',
              items: ['Detenido en DIPLOTENO de la profase I', 'Desde antes del nacimiento', 'Reanuda con el pico de LH en cada ciclo'],
            },
            right: {
              title: 'Ovocito secundario',
              items: ['Detenido en METAFASE II', 'Desde ≈ 3 h antes de la ovulación', 'Completa la división solo si es fecundado'],
            },
          },
          {
            type: 'paragraph',
            content: 'A diferencia de la espermatogénesis, la ovogénesis reparte el citoplasma de forma DESIGUAL: de las divisiones meióticas resulta un solo gameto funcional y cuerpos polares que degeneran. Cada producto femenino lleva 22 autosomas y un cromosoma X; el espermatozoide aporta un X o un Y, y con ello determina el sexo cromosómico.',
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Primario en PROfase, secundario en METAfase',
            content: 'PRImario se detiene en PRofase I (diploteno); SEcundario se detiene en metafase II. La segunda detención solo se rompe con la llegada del espermatozoide.',
          },
        ],
      },
    ],
  },
]
