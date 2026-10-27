import type { Topic } from '../types'

// Embriología I (UAD · EM01004) — Semana 1, Clases 1–2: panorama del desarrollo
// temprano, cromosomas, mitosis y meiosis, ovogénesis, espermatogénesis y
// anomalías cromosómicas numéricas.
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
            content: 'La gran mayoría de los ovocitos no llega a ovularse: degenera por ATRESIA. Desde la pubertad, cada mes empiezan a madurar de 15 a 20 folículos, pero normalmente solo uno alcanza la ovulación. Cuando se agotan los folículos llega la menopausia, que se diagnostica tras 12 meses consecutivos sin menstruación.',
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
  {
    id: 'embriologia-espermatogenesis',
    title: 'Espermatogénesis y espermiogénesis',
    subtitle: 'De la espermatogonia al espermatozoide, células de Sertoli y de Leydig, eje hipotálamo-hipófisis-testículo, temperatura testicular y partes del espermatozoide',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '🧬',
    keyPoints: [
      'La espermatogénesis comienza en la PUBERTAD (la ovogénesis, antes del nacimiento) y ocurre en los TÚBULOS SEMINÍFEROS ★',
      'Espermatogonia A → espermatogonia B → espermatocito primario → (meiosis I) espermatocito secundario → (meiosis II) espermátides → (espermiogénesis) espermatozoide.',
      'Dura unos 74 días; la profase I del espermatocito primario, unos 22 días. Se producen unos 300 millones de espermatozoides al día.',
      'SERTOLI: sostiene, nutre y protege; responde a FSH y testosterona · LEYDIG: produce testosterona por estímulo de la LH.',
      'ESPERMIOGÉNESIS: no es división; forma el acrosoma, condensa el núcleo (protaminas), forma la cola y elimina el citoplasma.',
      'Los testículos funcionan 2–3 °C por debajo de la temperatura corporal: la criptorquidia y el varicocele alteran la espermatogénesis.',
    ],
    sections: [
      {
        id: 'esp-1',
        number: 1,
        title: 'De la espermatogonia a la espermátide',
        keyTerms: ['espermatogonia', 'espermatocito', 'espermátide', 'túbulo seminífero'],
        blocks: [
          {
            type: 'steps',
            title: 'Secuencia',
            steps: [
              'Al nacer, las células germinales primordiales están en los cordones sexuales del testículo.',
              'En la pubertad, los cordones adquieren luz y forman los túbulos seminíferos; las células germinales originan espermatogonias tipo A.',
              'Las espermatogonias A se dividen por mitosis; la última división produce espermatogonias tipo B.',
              'Las tipo B se dividen y forman espermatocitos primarios, que entran en meiosis I (con una profase de unos 22 días).',
              'La meiosis I produce dos espermatocitos secundarios (haploides, con cromosomas de dos cromátidas).',
              'La meiosis II produce cuatro espermátides.',
              'Por espermiogénesis, las espermátides se transforman en espermatozoides, que maduran y se almacenan en el epidídimo.',
            ],
          },
          {
            type: 'list',
            title: 'Datos para recordar',
            items: [
              'Todo el proceso dura unos 74 días.',
              'Se producen unos 300 millones de espermatozoides al día.',
              'Las células hijas de una misma espermatogonia permanecen unidas por puentes citoplasmáticos hasta el final.',
            ],
          },
          {
            type: 'comparison',
            title: 'Espermatogénesis frente a ovogénesis',
            left: {
              title: 'Espermatogénesis',
              items: ['Comienza en la pubertad y continúa toda la vida', '1 espermatocito primario → 4 espermatozoides funcionales', 'Gametos con X o con Y', 'Sin detenciones de años en la meiosis'],
            },
            right: {
              title: 'Ovogénesis',
              items: ['Comienza antes del nacimiento', '1 ovocito primario → 1 gameto funcional + cuerpos polares', 'Gametos siempre con X', 'Detenida en profase I y después en metafase II'],
            },
          },
        ],
      },
      {
        id: 'esp-2',
        number: 2,
        title: 'Células de Sertoli, de Leydig y control hormonal',
        keyTerms: ['Sertoli', 'Leydig', 'testosterona', 'inhibina', 'GnRH'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos células del testículo',
            left: {
              title: 'Sertoli (dentro del túbulo)',
              items: ['Sostienen, protegen y nutren a las células germinales', 'Fagocitan el citoplasma residual de las espermátides', 'Liberan a los espermatozoides a la luz', 'Responden a la FSH y a la testosterona; producen inhibina'],
            },
            right: {
              title: 'Leydig (en el intersticio)',
              items: ['Entre los túbulos seminíferos', 'Producen testosterona', 'Se estimulan por la LH'],
            },
          },
          {
            type: 'steps',
            title: 'Eje hipotálamo-hipófisis-testículo',
            steps: [
              'El hipotálamo libera GnRH.',
              'La GnRH estimula a la hipófisis anterior para liberar FSH y LH.',
              'La LH estimula a las células de Leydig a producir testosterona.',
              'La FSH, junto con la testosterona, actúa sobre las células de Sertoli y mantiene la espermatogénesis.',
              'La inhibina de las células de Sertoli frena la secreción de FSH (retroalimentación negativa); la testosterona frena la GnRH y la LH.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Testosterona externa e infertilidad',
            content: 'La testosterona o los esteroides anabólicos administrados desde fuera suprimen la LH y la FSH por retroalimentación negativa. Sin FSH ni testosterona dentro del testículo, la espermatogénesis se detiene y puede aparecer azoospermia, aunque el nivel de testosterona en sangre sea alto.',
          },
        ],
      },
      {
        id: 'esp-3',
        number: 3,
        title: 'Espermiogénesis y partes del espermatozoide',
        keyTerms: ['espermiogénesis', 'acrosoma', 'protaminas', 'pieza intermedia'],
        blocks: [
          {
            type: 'definition',
            title: 'Espermiogénesis',
            content: 'Transformación de la espermátide (célula redonda) en espermatozoide. No es una división celular: es un proceso de diferenciación.',
          },
          {
            type: 'list',
            title: 'Cambios',
            items: [
              'Formación del ACROSOMA a partir del aparato de Golgi; contiene enzimas (acrosina, hialuronidasa) para atravesar las cubiertas del ovocito.',
              'Condensación del núcleo: las histonas se sustituyen por PROTAMINAS y el ADN se compacta.',
              'Formación del cuello, la pieza intermedia y la cola (flagelo).',
              'Las mitocondrias se agrupan en espiral en la pieza intermedia y aportan ATP para el movimiento.',
              'Se elimina casi todo el citoplasma, que fagocitan las células de Sertoli.',
            ],
          },
          {
            type: 'table',
            title: 'Partes del espermatozoide',
            data: {
              headers: ['Parte', 'Contenido', 'Función'],
              rows: [
                ['Cabeza', 'Núcleo compacto y acrosoma', 'Aporta el ADN paterno; penetra las cubiertas del ovocito'],
                ['Cuello', 'Centriolo', 'Une la cabeza con la cola'],
                ['Pieza intermedia', 'Mitocondrias', 'Energía para el movimiento'],
                ['Cola (flagelo)', 'Axonema', 'Movilidad'],
              ],
            },
          },
        ],
      },
      {
        id: 'esp-4',
        number: 4,
        title: 'Temperatura testicular y alteraciones',
        keyTerms: ['criptorquidia', 'varicocele', 'oligospermia', 'azoospermia'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Los testículos se ubican en el escroto porque la espermatogénesis requiere una temperatura de 2–3 °C por debajo de la corporal. Todo lo que eleve su temperatura o altere su circulación puede reducir la producción de espermatozoides.',
          },
          {
            type: 'table',
            title: 'Términos clínicos',
            data: {
              headers: ['Término', 'Significado'],
              rows: [
                ['Criptorquidia', 'Uno o ambos testículos no descienden al escroto'],
                ['Varicocele', 'Dilatación de las venas del plexo pampiniforme; aumenta la temperatura testicular'],
                ['Oligospermia', 'Cantidad reducida de espermatozoides en el semen'],
                ['Azoospermia', 'Ausencia de espermatozoides en el semen'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Criptorquidia: corregir antes del año y medio',
            content: 'El testículo que no desciende está expuesto a la temperatura abdominal: su espermatogénesis se daña y su riesgo de cáncer testicular es mayor. Si no ha descendido a los 6 meses de edad, se recomienda bajarlo quirúrgicamente (orquidopexia), idealmente antes de los 18 meses.',
          },
        ],
      },
    ],
  },
  {
    id: 'embriologia-anomalias-numericas',
    title: 'Anomalías cromosómicas numéricas y síndrome de Down',
    subtitle: 'No disyunción, trisomías y monosomías, frecuencia en abortos y defectos congénitos, síndrome de Down (mecanismos, clínica y edad materna), Edwards y Patau',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '🔢',
    keyPoints: [
      'NO DISYUNCIÓN: un par de homólogos (meiosis I) o de cromátidas (meiosis II) no se separa → gametos con 24 o 22 cromosomas → cigoto con 47 (trisomía) o 45 (monosomía) ★',
      'Las anomalías cromosómicas causan alrededor del 10 % de los defectos congénitos mayores; las mutaciones de un gen, otro 8 %.',
      'Cerca del 50 % de las concepciones termina en aborto espontáneo y la mitad de esos embriones tiene una anomalía cromosómica: unas 25 % de todas las concepciones.',
      'DOWN (trisomía 21): no disyunción ≈ 95 % (sobre todo materna), translocación ≈ 4 %, mosaicismo ≈ 1 %.',
      'Riesgo de Down por edad materna: 1/2000 antes de los 25 años, 1/300 a los 35, 1/100 a los 40.',
      'EDWARDS = trisomía 18 · PATAU = trisomía 13 · KLINEFELTER = 47,XXY · TURNER = 45,X · TRIPLE X = 47,XXX.',
    ],
    sections: [
      {
        id: 'ean-1',
        number: 1,
        title: 'No disyunción',
        keyTerms: ['no disyunción', 'trisomía', 'monosomía', 'aneuploidía'],
        blocks: [
          {
            type: 'steps',
            title: 'Cómo se produce una trisomía',
            steps: [
              'En la meiosis I un par de homólogos no se separa (o en la meiosis II, un par de cromátidas hermanas).',
              'Un gameto recibe los dos cromosomas (24) y otro ninguno (22).',
              'Si el gameto con 24 se une a uno normal (23), el cigoto tiene 47: TRISOMÍA.',
              'Si el gameto con 22 se une a uno normal, el cigoto tiene 45: MONOSOMÍA.',
            ],
          },
          {
            type: 'comparison',
            title: 'Euploidía y aneuploidía',
            left: {
              title: 'Euploidía',
              items: ['Múltiplo exacto de n (23)', 'Diploidía (2n = 46): el estado NORMAL de las células somáticas', 'Triploidía (3n = 69): anormal; casi nunca compatible con la vida'],
            },
            right: {
              title: 'Aneuploidía',
              items: ['Número que no es múltiplo de 23', 'Trisomía: un cromosoma de más (47)', 'Monosomía: un cromosoma de menos (45)'],
            },
          },
          {
            type: 'note',
            title: 'Puede afectar autosomas o cromosomas sexuales',
            content: 'La no disyunción de los cromosomas sexuales produce 45,X (Turner), 47,XXY (Klinefelter) o 47,XXX (triple X). Las monosomías de autosomas no son compatibles con la vida.',
          },
        ],
      },
      {
        id: 'ean-2',
        number: 2,
        title: 'Frecuencia: abortos y defectos congénitos',
        keyTerms: ['aborto espontáneo', 'defectos congénitos', 'trisomía 16'],
        blocks: [
          {
            type: 'table',
            title: 'Cifras para recordar',
            data: {
              headers: ['Dato', 'Valor'],
              rows: [
                ['Defectos congénitos mayores por anomalías cromosómicas', '≈ 10 %'],
                ['Defectos congénitos mayores por mutaciones de un gen', '≈ 8 %'],
                ['Concepciones que terminan en aborto espontáneo', '≈ 50 %'],
                ['De esos abortos, con anomalía cromosómica mayor', '≈ 50 % (≈ 25 % de todas las concepciones)'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'En los productos de aborto espontáneo las anomalías más frecuentes son la monosomía 45,X, la triploidía y la trisomía 16, que no son compatibles con el desarrollo completo. Por eso muchos abortos del primer trimestre son, en realidad, una selección natural de embriones con errores cromosómicos.',
          },
          {
            type: 'table',
            title: 'Síndromes por aneuploidía',
            data: {
              headers: ['Síndrome', 'Cariotipo'],
              rows: [
                ['Down', '47,XX o XY,+21'],
                ['Edwards', '47,+18'],
                ['Patau', '47,+13'],
                ['Klinefelter', '47,XXY'],
                ['Triple X', '47,XXX'],
                ['Turner', '45,X (la única monosomía completa compatible con la vida)'],
              ],
            },
          },
        ],
      },
      {
        id: 'ean-3',
        number: 3,
        title: 'Síndrome de Down',
        keyTerms: ['trisomía 21', 'translocación', 'mosaicismo', 'edad materna'],
        blocks: [
          {
            type: 'table',
            title: 'Mecanismos',
            data: {
              headers: ['Mecanismo', 'Frecuencia', 'Qué ocurre'],
              rows: [
                ['No disyunción meiótica', '≈ 95 %', 'Trisomía libre (47 cromosomas); en ≈ 75 % de estos casos el error ocurre en la formación del ovocito'],
                ['Translocación', '≈ 4 %', 'El cromosoma 21 extra está unido a otro (13, 14, 15 o 21); el cariotipo puede tener 46 cromosomas'],
                ['Mosaicismo', '≈ 1 %', 'Solo una parte de las células tiene trisomía 21; el cuadro suele ser más leve'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Rasgos clínicos',
            items: [
              'Fisuras palpebrales oblicuas hacia arriba, pliegues epicánticos y cara aplanada.',
              'Macroglosia relativa y pliegue palmar único.',
              'Hipotonía y discapacidad intelectual de grado variable.',
              'Cardiopatías congénitas (sobre todo defectos de los cojinetes endocárdicos).',
              'Más riesgo de leucemia, infecciones, hipotiroidismo y Alzheimer de inicio temprano.',
            ],
          },
          {
            type: 'table',
            title: 'Riesgo según la edad materna',
            data: {
              headers: ['Edad de la madre', 'Riesgo aproximado'],
              rows: [
                ['Menos de 25 años', '1 en 2000'],
                ['35 años', '1 en 300'],
                ['40 años', '1 en 100'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué importa saber el mecanismo',
            content: 'En la trisomía libre por no disyunción el riesgo de repetición es bajo y depende sobre todo de la edad materna. En la translocación, uno de los padres puede ser portador balanceado sano, y el riesgo en embarazos futuros es mucho mayor. Por eso todo niño con síndrome de Down necesita un cariotipo, no solo el diagnóstico clínico.',
          },
        ],
      },
      {
        id: 'ean-4',
        number: 4,
        title: 'Edwards, Patau y diagnóstico prenatal',
        keyTerms: ['Edwards', 'Patau', 'holoprosencefalia', 'amniocentesis'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos trisomías graves',
            left: {
              title: 'Edwards (trisomía 18)',
              items: ['Micrognatia y occipucio prominente', 'Puños cerrados con dedos superpuestos', 'Anomalías renales y cardiacas', 'Malformaciones esqueléticas'],
            },
            right: {
              title: 'Patau (trisomía 13)',
              items: ['Holoprosencefalia', 'Labio y paladar hendidos', 'Microftalmia, anoftalmia o coloboma', 'Polidactilia y sordera'],
            },
          },
          {
            type: 'paragraph',
            content: 'Ante un riesgo cromosómico alto, el cariotipo fetal puede obtenerse por amniocentesis (líquido amniótico, en general a partir de la semana 15) o por biopsia de vellosidades coriales. Son estudios invasivos con un riesgo pequeño de pérdida del embarazo, por lo que se ofrecen después de un tamizaje y con asesoría genética.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'También cuenta la salud paterna',
            content: 'La edad paterna avanzada se asocia sobre todo con mutaciones nuevas de un solo gen, porque las espermatogonias se dividen durante toda la vida y acumulan errores de copia. La edad materna, en cambio, pesa más en las aneuploidías.',
          },
        ],
      },
    ],
  },
]
