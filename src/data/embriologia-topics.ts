import type { Topic } from '../types'

// Embriología I (UAD · EM01004) — Semana 1, Clases 1–3: panorama del desarrollo
// temprano, cromosomas, mitosis y meiosis, ovogénesis, espermatogénesis,
// anomalías cromosómicas numéricas y estructurales, ciclo ovárico y ovulación.
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
    subtitle: 'No disyunción, trisomías y monosomías, frecuencia en abortos y defectos congénitos, síndrome de Down (mecanismos, clínica y edad materna), Edwards y Patau, Klinefelter y Turner',
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
            type: 'table',
            title: 'Las tres trisomías principales, de mayor a menor frecuencia y supervivencia',
            data: {
              headers: ['Trisomía', 'Frecuencia', 'Supervivencia', 'Patrón de anomalías'],
              rows: [
                ['Down (21)', 'Según la edad materna: 1/2000 a 1/100', 'La mayor de las tres', 'Craneofaciales y sistémicas'],
                ['Edwards (18)', '≈ 1 de cada 5000 recién nacidos', '≈ 85 % de los fetos se pierde entre la semana 10 y el término; los nacidos vivos suelen morir antes de los 2 meses; ≈ 5 % vive más de un año', 'Más SISTÉMICAS: micrognatia, anomalías renales, sindactilia, malformaciones esqueléticas'],
                ['Patau (13)', '≈ 1 de cada 20 000 nacidos vivos', 'Más del 90 % muere en el primer mes; ≈ 5 % vive más de un año', 'Más CRANEOFACIALES: holoprosencefalia (fusión variable de los hemisferios), defectos oculares, labio y paladar hendidos, sordera'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Lo que comparten',
            content: 'Las tres trisomías suelen tener cardiopatía y anomalías del oído (por ejemplo, orejas de implantación baja). En Down son típicas la comunicación interauricular e interventricular; en Edwards y Patau las cardiopatías graves son la principal causa de la baja supervivencia.',
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
      {
        id: 'ean-5',
        number: 5,
        title: 'Klinefelter y Turner',
        keyTerms: ['Klinefelter', 'Turner', 'cuerpo de Barr', 'disgenesia gonadal', 'cuello alado'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos aneuploidías de los cromosomas sexuales',
            left: {
              title: 'Klinefelter (47,XXY)',
              items: [
                'Trisomía; solo en varones porque siempre hay un Y',
                'Causa más frecuente: no disyunción de los homólogos XX',
                'Cuerpo de Barr presente en ≈ 80 % (un X inactivado)',
                'Esterilidad por hialinización de los túbulos seminíferos y atrofia testicular; a veces ginecomastia',
                'Variantes con más X (48,XXXY): a más X, más afectación cognitiva',
                '≈ 1 de cada 500 varones',
              ],
            },
            right: {
              title: 'Turner (45,X)',
              items: [
                'Única monosomía completa compatible con la vida, aunque ≈ 98 % de los fetos 45,X se aborta',
                '≈ 55 % de las pacientes tiene monosomía X sin cuerpo de Barr; en ≈ 80 % de ellas la no disyunción ocurrió en el gameto del padre',
                'El resto: anomalías estructurales del X o mosaicismo por no disyunción mitótica (cuadro más leve)',
                'Disgenesia gonadal (ovarios ausentes o en cintilla) y esterilidad',
                'Talla baja, cuello alado, linfedema de manos y pies, tórax amplio con mamilas separadas',
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Amenorrea primaria con FSH alta',
            content: 'Una adolescente con talla baja, cuello alado y sin desarrollo mamario que no ha menstruado sugiere Turner: sin ovarios no hay estrógenos, y la FSH y la LH suben porque falta la retroalimentación negativa. El cariotipo confirma el diagnóstico.',
          },
        ],
      },
    ],
  },
  {
    id: 'embriologia-anomalias-estructurales',
    title: 'Anomalías cromosómicas estructurales y mutaciones génicas',
    subtitle: 'Estructura del cromosoma, alteraciones balanceadas y desbalanceadas, translocación robertsoniana, microdeleciones (Cri du chat, Angelman, Prader-Willi, Miller-Dieker, DiGeorge), X frágil, herencia autosómica dominante y recesiva, mosaicismo y errores innatos del metabolismo',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '✂️',
    keyPoints: [
      'Cromosoma: brazo corto «p», brazo largo «q», centrómero, bandas y telómeros. «22q11» se lee: cromosoma 22, brazo largo, región 1, banda 1.',
      'BALANCEADAS (inversiones, translocaciones recíprocas): sin pérdida ni ganancia relevante de material, sin fenotipo alterado · DESBALANCEADAS (deleciones, duplicaciones): pérdida o ganancia de material, fenotipo alterado ★',
      'ROBERTSONIANA: fusión de dos cromosomas acrocéntricos (13, 14, 15, 21 y 22). El portador suele ser sano, pero puede tener hijos con trisomía o monosomía (≈ 4 % de los casos de Down).',
      'Microdeleciones: CRI DU CHAT 5p · ANGELMAN 15q11-13 materno · PRADER-WILLI 15q11-13 paterno · MILLER-DIEKER 17p13 · DIGEORGE 22q11 ★',
      'X FRÁGIL: más de 200 repeticiones CGG en el gen FMR1 (Xq27); portadores con 55 a 200. Segunda causa genética de discapacidad intelectual, después del Down.',
      'Herencia AUTOSÓMICA DOMINANTE: un alelo basta, 50 % de los hijos afectados · RECESIVA: padres portadores, 25 % afectados, 50 % portadores y 25 % sin el alelo ★',
    ],
    sections: [
      {
        id: 'eae-1',
        number: 1,
        title: 'Estructura y nomenclatura del cromosoma',
        keyTerms: ['brazo p', 'brazo q', 'centrómero', 'bandas', 'telómeros'],
        blocks: [
          {
            type: 'list',
            title: 'Partes de un cromosoma en metafase',
            items: [
              'Dos CROMÁTIDAS HERMANAS unidas por el CENTRÓMERO.',
              'El centrómero divide cada cromátida en un BRAZO CORTO (p, de petit) y un BRAZO LARGO (q).',
              'Con tinciones especiales cada brazo muestra BANDAS claras y oscuras, que se numeran por regiones.',
              'En los extremos están los TELÓMEROS.',
            ],
          },
          {
            type: 'definition',
            title: 'Cómo se lee una localización',
            content: 'Número del cromosoma + brazo + región + banda. «5p» es el brazo corto del cromosoma 5; «22q11» es el cromosoma 22, brazo largo, región 1, banda 1; «15q11-13» abarca de la banda 11 a la 13 del brazo largo del cromosoma 15.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Telómeros y vida celular',
            content: 'Los telómeros se acortan un poco en cada división celular; cuando se agotan, la célula deja de dividirse. Es la base de la teoría de la capacidad replicativa finita de la célula, una de las teorías determinísticas del envejecimiento que se estudian en Medicina Humanística.',
          },
        ],
      },
      {
        id: 'eae-2',
        number: 2,
        title: 'Alteraciones balanceadas y desbalanceadas',
        keyTerms: ['deleción', 'duplicación', 'inversión', 'translocación recíproca', 'entrecruzamiento desigual'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Las anomalías estructurales suelen derivar de la rotura de uno o más cromosomas durante la división celular, con una redistribución anómala del material entre cromosomas. Se clasifican según si cambia o no la cantidad de material genético.',
          },
          {
            type: 'comparison',
            title: 'Dos grandes grupos',
            left: {
              title: 'Balanceadas',
              items: [
                'No hay pérdida ni ganancia relevante de material genético',
                'INVERSIÓN: un segmento se rompe y se reinserta girado en el mismo cromosoma',
                'TRANSLOCACIÓN RECÍPROCA: dos cromosomas intercambian segmentos',
                'El portador no suele tener fenotipo alterado, pero sus gametos pueden quedar desbalanceados',
              ],
            },
            right: {
              title: 'Desbalanceadas',
              items: [
                'Hay pérdida o ganancia de material genético',
                'DELECIÓN: se pierde un segmento',
                'DUPLICACIÓN: un segmento aparece dos veces',
                'Pueden dar un fenotipo alterado',
              ],
            },
          },
          {
            type: 'steps',
            title: 'Entrecruzamiento desigual',
            steps: [
              'En la meiosis los cromosomas homólogos se alinean alelo con alelo.',
              'Si se alinean desplazados, el entrecruzamiento ocurre entre segmentos que no se corresponden.',
              'Resultado: un cromosoma gana material (duplicación) y su homólogo lo pierde (deleción).',
            ],
          },
        ],
      },
      {
        id: 'eae-3',
        number: 3,
        title: 'Translocación robertsoniana',
        keyTerms: ['translocación robertsoniana', 'cromosomas acrocéntricos', 'trisomía parcial', 'portador balanceado'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Los cromosomas 13, 14, 15, 21 y 22 son acrocéntricos (el centrómero está casi en un extremo) y tienden a agruparse durante la meiosis. Dos de ellos pueden fusionarse por sus centrómeros: es la translocación robertsoniana.',
          },
          {
            type: 'steps',
            title: 'Del portador a la descendencia',
            steps: [
              'El portador tiene 45 cromosomas, pero conserva casi todo el material: es una translocación balanceada y suele ser sano.',
              'Al formar sus gametos, el cromosoma fusionado puede repartirse de manera desequilibrada.',
              'Un gameto puede llevar material de más o de menos del cromosoma involucrado.',
              'Tras la fecundación se origina una trisomía o una monosomía (completa o parcial).',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Down por translocación',
            content: 'Alrededor del 4 % de los casos de síndrome de Down se deben a una translocación robertsoniana, casi siempre entre el 21 y el 14, el 15, el 13 u otro 21. La trisomía 13 (Patau) también puede originarse así. Si uno de los padres es portador balanceado, el riesgo de repetición es alto, y puede descubrirse por abortos de repetición o por un primer hijo afectado.',
          },
        ],
      },
      {
        id: 'eae-4',
        number: 4,
        title: 'Microdeleciones',
        keyTerms: ['Cri du chat', 'Angelman', 'Prader-Willi', 'Miller-Dieker', 'DiGeorge', 'cresta neural'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Una deleción pequeña, que abarca solo unos cuantos genes contiguos, puede pasar inadvertida en un cariotipo convencional y aun así producir un síndrome. Comparten con frecuencia discapacidad intelectual, microcefalia, hipotonía y cardiopatía congénita; cada uno tiene además un rasgo distintivo.',
          },
          {
            type: 'table',
            title: 'Síndromes por deleción',
            data: {
              headers: ['Síndrome', 'Región', 'Rasgos distintivos'],
              rows: [
                ['Cri du chat («maullido de gato»)', 'Brazo corto del 5 (5p)', 'Llanto agudo como maullido de gato, microcefalia, discapacidad intelectual, cardiopatía congénita'],
                ['Angelman', '15q11-13 del cromosoma MATERNO', 'Discapacidad intelectual, no hablan, desarrollo motor deficiente, periodos espontáneos y prolongados de risa'],
                ['Prader-Willi', '15q11-13 del cromosoma PATERNO', 'Hipotonía, obesidad, discapacidad intelectual, hipogonadismo y criptorquidia'],
                ['Miller-Dieker', '17p13', 'Lisencefalia (corteza con pocas circunvoluciones), retraso del desarrollo, convulsiones, anomalías cardiacas y faciales'],
                ['DiGeorge', '22q11', 'Defectos del paladar, cardiopatía troncoconal (tracto de salida), retraso del lenguaje, problemas de aprendizaje, trastorno parecido a la esquizofrenia'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Misma región, dos síndromes',
            content: 'Angelman y Prader-Willi afectan la misma región del cromosoma 15. Cuál aparece depende de si la deleción está en el cromosoma heredado de la madre (Angelman) o del padre (Prader-Willi), porque en esa región solo se expresa una de las dos copias según su origen (impronta genómica).',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cresta neural: corazón y cara a la vez',
            content: 'Miller-Dieker y DiGeorge comparten defectos cardiacos y craneofaciales porque afectan a las células de la cresta neural, que forman estructuras de la cara y del tracto de salida del corazón (aorta y arteria pulmonar). En DiGeorge las paratiroides pueden faltar o ser pequeñas: sin paratohormona baja el calcio, y la hipocalcemia puede causar convulsiones en el recién nacido. En Miller-Dieker las convulsiones se deben a la lisencefalia.',
          },
        ],
      },
      {
        id: 'eae-5',
        number: 5,
        title: 'Sitios frágiles: síndrome de X frágil',
        keyTerms: ['sitio frágil', 'repeticiones CGG', 'FMR1', 'Xq27', 'premutación'],
        blocks: [
          {
            type: 'definition',
            title: 'Sitio frágil',
            content: 'Región cromosómica que tiende a separarse o romperse durante ciertas manipulaciones celulares. Muchos se deben a la repetición de una secuencia de tres nucleótidos, como citosina-guanina-guanina (CGG).',
          },
          {
            type: 'table',
            title: 'Repeticiones CGG en el gen FMR1',
            data: {
              headers: ['Número de repeticiones', 'Situación'],
              rows: [
                ['6 a 54', 'Normal'],
                ['55 a 200', 'Portador (premutación): no tiene el síndrome, pero la repetición puede crecer al pasar a la descendencia'],
                ['Más de 200', 'Mutación completa: síndrome de X frágil; el brazo largo del X (Xq27) se ve adelgazado'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Rasgos clínicos',
            items: [
              'Discapacidad intelectual.',
              'Pabellones auriculares grandes y mandíbula prominente.',
              'Testículos grandes.',
              'Es la segunda causa genética de discapacidad intelectual, después del síndrome de Down.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Por qué afecta más a los varones',
            content: 'El varón tiene un solo cromosoma X: si ese X lleva la mutación completa, no hay otra copia que compense. Las mujeres también pueden tener el síndrome, pero suele ser más leve porque tienen un segundo X, en parte activo.',
          },
        ],
      },
      {
        id: 'eae-6',
        number: 6,
        title: 'Mutaciones génicas y patrones de herencia',
        keyTerms: ['herencia autosómica dominante', 'herencia autosómica recesiva', 'mosaicismo', 'errores innatos del metabolismo'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Muchos defectos congénitos se deben al cambio de un solo gen; se calcula que causan alrededor del 8 % de las malformaciones humanas. Las mutaciones pueden ocurrir en una célula somática o en la línea germinal mientras el embrión se desarrolla.',
          },
          {
            type: 'comparison',
            title: 'Patrones de herencia mendeliana',
            left: {
              title: 'Autosómica dominante',
              items: [
                'Un solo alelo alterado basta para tener la enfermedad',
                'El progenitor que lo transmite está afectado (no es solo portador)',
                'Riesgo teórico: 50 % de los hijos afectados',
              ],
            },
            right: {
              title: 'Autosómica recesiva',
              items: [
                'Se necesitan los dos alelos alterados',
                'Típicamente ambos padres son portadores sanos',
                'Riesgo teórico: 25 % afectados, 50 % portadores, 25 % sin el alelo',
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Dónde ocurre la mutación',
            left: {
              title: 'Célula somática',
              items: ['La persona muestra MOSAICISMO: unas células con la mutación y otras sin ella'],
            },
            right: {
              title: 'Línea germinal',
              items: ['MOSAICISMO DE LÍNEA GERMINAL: el progenitor no expresa la anomalía (sus células somáticas son normales), pero puede transmitirla a varios de sus hijos'],
            },
          },
          {
            type: 'list',
            title: 'Errores innatos del metabolismo',
            items: [
              'FENILCETONURIA: no se metaboliza la fenilalanina.',
              'HOMOCISTINURIA: no se metaboliza la homocisteína.',
              'GALACTOSEMIA: no se metaboliza la galactosa.',
              'Sin diagnóstico oportuno y dieta adecuada, el compuesto se acumula y produce discapacidad intelectual de grado variable.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por eso existe el tamiz neonatal',
            content: 'El tamiz metabólico neonatal (gotas de sangre del talón en los primeros días de vida) busca, entre otras, fenilcetonuria y galactosemia. Detectarlas antes de que haya síntomas permite iniciar la dieta a tiempo y evitar el daño neurológico.',
          },
        ],
      },
      {
        id: 'eae-7',
        number: 7,
        title: 'Integración: casos clínicos',
        keyTerms: ['casos clínicos', 'hipogonadismo hipergonadotrópico', 'amenorrea primaria'],
        blocks: [
          {
            type: 'table',
            title: 'De la pista clínica al diagnóstico',
            data: {
              headers: ['Caso', 'Pistas clave', 'Diagnóstico', 'Tipo de alteración'],
              rows: [
                ['Recién nacido, madre de 39 años', 'Hipotonía, cara plana, pliegue palmar único, soplo por defecto del tabique auriculoventricular', 'Trisomía 21 (Down), 47 cromosomas', 'Numérica: no disyunción meiótica, sobre todo en la meiosis I materna; factor de riesgo: edad materna'],
                ['Lactante de 2 meses', 'Llanto agudo como maullido, microcefalia, hipotonía, retraso del crecimiento', 'Cri du chat', 'Estructural: deleción del brazo corto del 5 (5p)'],
                ['Adolescente de 15 años', 'Amenorrea primaria, talla baja, cuello alado, tórax ancho, sin desarrollo mamario', 'Turner, 45,X', 'Numérica (monosomía X); viable, aunque ≈ 98 % de los fetos 45,X se abortan'],
                ['Adolescente varón de 16 años', 'Talla alta, extremidades largas, problemas de aprendizaje, poco vello facial, testículos pequeños', 'Klinefelter, 47,XXY', 'Numérica: ganancia de un X por no disyunción meiótica'],
                ['Recién nacido', 'Micrognatia, orejas de implantación baja, puños cerrados con dedos sobrepuestos, cardiopatía grave', 'Edwards (trisomía 18)', 'Numérica'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'LH y FSH altas con hormonas sexuales bajas',
            content: 'En Klinefelter y en Turner el hipotálamo y la hipófisis funcionan: hay GnRH, LH y FSH, pero la gónada no responde (testículo atrófico con túbulos hialinizados; ovario en cintilla). Baja la testosterona o el estradiol y, sin retroalimentación negativa, LH y FSH suben: hipogonadismo hipergonadotrópico. Por eso faltan los caracteres sexuales secundarios.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'El tamaño del soplo engaña',
            content: 'En una comunicación interventricular, un defecto pequeño suele producir un soplo más intenso que uno grande, porque la sangre pasa a gran velocidad por un orificio estrecho. Un soplo débil o ausente no descarta una cardiopatía importante.',
          },
        ],
      },
    ],
  },
  {
    id: 'embriologia-ciclo-ovarico',
    title: 'Ciclo ovárico y ovulación',
    subtitle: 'Primera semana del desarrollo (inicio): eje hipotálamo-hipófisis-ovario, fases del ciclo ovárico, teca interna y granulosa, pico de LH y ovulación, cuerpo lúteo y transporte del ovocito',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '🥚',
    keyPoints: [
      'GnRH del hipotálamo → células gonadótropas de la adenohipófisis: pulsos RÁPIDOS liberan LH; pulsos LENTOS liberan FSH ★',
      'Ciclo ovárico: fase FOLICULAR, OVULATORIA, LÚTEA y luteólisis o menstruación; ocurre a la par del ciclo endometrial.',
      'Cada ciclo se reclutan 15 a 20 folículos primordiales; normalmente solo uno llega a folículo de Graaf (≈ 25 mm).',
      'Dos células: la TECA INTERNA hace andrógenos (por LH) y la GRANULOSA los convierte en estrógenos con AROMATASA (por FSH) ★',
      'Pico de LH: factor promotor de la maduración (termina la meiosis I; el ovocito se detiene en metafase II), luteinización, prostaglandinas y colagenasa → ovulación ★',
      'El cuerpo lúteo produce sobre todo PROGESTERONA → endometrio en fase secretora. La fecundación ocurre casi siempre en la AMPOLLA; el cigoto llega al útero en 3 a 4 días.',
    ],
    sections: [
      {
        id: 'eco-1',
        number: 1,
        title: 'Eje hipotálamo-hipófisis-ovario',
        keyTerms: ['GnRH', 'adenohipófisis', 'gonadótropas', 'LH', 'FSH'],
        blocks: [
          {
            type: 'steps',
            title: 'Tres niveles',
            steps: [
              'HIPOTÁLAMO: secreta hormona liberadora de gonadotropinas (GnRH) en pulsos.',
              'LÓBULO ANTERIOR DE LA HIPÓFISIS (adenohipófisis): sus células gonadótropas responden a la GnRH y liberan LH y FSH.',
              'GÓNADAS: en la mujer, los ovarios; las mismas gonadotropinas actúan sobre el testículo en el varón.',
            ],
          },
          {
            type: 'table',
            title: 'La frecuencia del pulso decide',
            data: {
              headers: ['Pulsos de GnRH', 'Gonadotropina que predomina'],
              rows: [
                ['Rápidos', 'LH (hormona luteinizante)'],
                ['Lentos', 'FSH (hormona foliculoestimulante)'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Un patrón que se repite',
            content: 'Muchas hormonas siguen el esquema hipotálamo → hipófisis → órgano blanco: gónadas, tiroides o glándula suprarrenal. Los estrógenos del propio folículo son la señal que acelera los pulsos de GnRH y provoca el pico de LH.',
          },
        ],
      },
      {
        id: 'eco-2',
        number: 2,
        title: 'Fases del ciclo ovárico y maduración folicular',
        keyTerms: ['fase folicular', 'fase lútea', 'folículo primario', 'antro', 'folículo de Graaf'],
        blocks: [
          {
            type: 'list',
            title: 'Fases del ciclo ovárico',
            items: [
              'Fase FOLICULAR.',
              'Fase OVULATORIA.',
              'Fase LÚTEA.',
              'LUTEÓLISIS y MENSTRUACIÓN: dos fenómenos distintos que ocurren casi al mismo tiempo; uno desencadena al otro.',
            ],
          },
          {
            type: 'steps',
            title: 'Del folículo primordial al de Graaf',
            steps: [
              'Al nacer hay unos 600 000 a 800 000 ovocitos primarios, cada uno en un folículo primordial.',
              'Desde la pubertad, cada mes la FSH recluta 15 a 20 folículos primordiales; normalmente solo uno completa su maduración.',
              'FOLÍCULO PRIMARIO: las células foliculares pasan de planas a cúbicas y proliferan en varias capas (células de la granulosa).',
              'FOLÍCULO SECUNDARIO: la granulosa secreta líquido que forma el antro folicular.',
              'FOLÍCULO DE GRAAF (maduro o terciario): el antro crece hasta un diámetro de unos 25 mm.',
            ],
          },
        ],
      },
      {
        id: 'eco-3',
        number: 3,
        title: 'Teca interna y granulosa: los estrógenos',
        keyTerms: ['teca interna', 'granulosa', 'aromatasa', 'estradiol', 'moco cervical'],
        blocks: [
          {
            type: 'steps',
            title: 'Modelo de dos células',
            steps: [
              'La TECA INTERNA (vascularizada, secretora de esteroides) responde a niveles bajos de LH y produce androstenediona y testosterona.',
              'Los andrógenos pasan a la GRANULOSA.',
              'Por estímulo de la FSH, la granulosa sintetiza AROMATASA, que convierte los andrógenos en estrona y estradiol 17β.',
            ],
          },
          {
            type: 'list',
            title: 'Efectos de los estrógenos',
            items: [
              'El ENDOMETRIO entra en fase folicular o PROLIFERATIVA: aumenta de grosor.',
              'El MOCO CERVICAL se vuelve más fluido y menos ácido (pH ≈ 7.2–7.5) cerca de la ovulación, lo que facilita el paso de los espermatozoides; el resto del tiempo la vagina es ácida.',
              'El aumento de estrógenos estimula al hipotálamo a liberar pulsos rápidos de GnRH: se produce el PICO DE LH.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El moco cervical como signo de fertilidad',
            content: 'En los días cercanos a la ovulación el moco cervical se vuelve transparente, elástico y filante (como clara de huevo). Algunos métodos de conocimiento de la fertilidad se basan en observar este cambio para identificar los días fértiles.',
          },
        ],
      },
      {
        id: 'eco-4',
        number: 4,
        title: 'Pico de LH y ovulación',
        keyTerms: ['pico de LH', 'factor promotor de la maduración', 'prostaglandinas', 'colagenasa', 'estigma', 'corona radiada'],
        blocks: [
          {
            type: 'list',
            title: 'Acciones del pico de LH',
            items: [
              'Eleva el FACTOR PROMOTOR DE LA MADURACIÓN: el ovocito primario completa la meiosis I (se vuelve ovocito secundario) e inicia la meiosis II.',
              'El ovocito se detiene en METAFASE II unas 3 horas antes de la ovulación, y así se libera.',
              'Estimula la producción de PROGESTERONA en la granulosa y la teca interna (LUTEINIZACIÓN).',
              'Aumenta las PROSTAGLANDINAS, que contraen el músculo liso de la pared ovárica.',
              'Aumenta la actividad de la COLAGENASA, que digiere las fibras de colágeno alrededor del folículo.',
            ],
          },
          {
            type: 'paragraph',
            content: 'En la superficie del ovario aparece una pequeña zona avascular, el ESTIGMA, por donde sale el ovocito. Sale rodeado de células del CÚMULO OÓFORO, que al quedar libres con él se llaman CORONA RADIADA: la primera barrera que debe atravesar el espermatozoide. El resto de la granulosa y la teca permanece en el ovario.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: '¿Puede liberarse más de un ovocito?',
            content: 'Normalmente se libera un solo ovocito, de un solo ovario, y el ovario que ovula alterna sin un orden fijo. Con fármacos inductores de la ovulación (reproducción asistida o tratamiento de la anovulación, por ejemplo en el síndrome de ovario poliquístico) pueden madurar varios folículos y liberarse dos o más ovocitos, lo que aumenta la probabilidad de un embarazo múltiple.',
          },
        ],
      },
      {
        id: 'eco-5',
        number: 5,
        title: 'Fase lútea: el cuerpo lúteo',
        keyTerms: ['luteinización', 'células luteínicas', 'cuerpo lúteo', 'progesterona', 'fase secretora'],
        blocks: [
          {
            type: 'steps',
            title: 'Formación del cuerpo lúteo',
            steps: [
              'Por la LH, las células de la granulosa que quedan y las de la teca interna se vascularizan.',
              'Adquieren un pigmento amarillo: son las CÉLULAS LUTEÍNICAS («lúteo» = amarillo).',
              'En conjunto forman el CUERPO LÚTEO.',
            ],
          },
          {
            type: 'comparison',
            title: 'El endometrio sigue al ovario',
            left: {
              title: 'Antes de la ovulación',
              items: ['Estrógenos de los folículos', 'Endometrio en fase folicular o PROLIFERATIVA'],
            },
            right: {
              title: 'Después de la ovulación',
              items: ['Cuerpo lúteo: algo de estrógenos y sobre todo PROGESTERONA', 'Endometrio en fase progestacional o SECRETORA, listo para una posible implantación'],
            },
          },
          {
            type: 'note',
            title: 'La «hormona del embarazo»',
            content: 'La progesterona prepara el útero para recibir al embrión; por eso se le conoce como la hormona del embarazo.',
          },
        ],
      },
      {
        id: 'eco-6',
        number: 6,
        title: 'Transporte del ovocito',
        keyTerms: ['fimbrias', 'infundíbulo', 'ampolla', 'istmo', 'fecundación'],
        blocks: [
          {
            type: 'list',
            title: 'Partes de la trompa uterina (de lateral a medial)',
            items: [
              'FIMBRIAS: prolongaciones del borde; solo un par de ellas une la trompa con el ovario.',
              'INFUNDÍBULO: la porción más ancha, en forma de embudo.',
              'AMPOLLA: región amplia; sitio más frecuente de la fecundación.',
              'ISTMO: la porción más estrecha, unida a la pared del útero.',
            ],
          },
          {
            type: 'steps',
            title: 'Captación del ovocito',
            steps: [
              'La trompa no está pegada al ovario: necesita acercarse.',
              'Contracciones PERISTÁLTICAS de la trompa la aproximan al ovario.',
              'Las FIMBRIAS barren la superficie ovárica y captan al ovocito.',
              'En la AMPOLLA suele encontrarse con el espermatozoide; el ovocito fecundado llega a la cavidad uterina en unos 3 a 4 días, mientras se segmenta.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cuando el embrión no llega',
            content: 'Si el transporte por la trompa se retrasa o se bloquea (por ejemplo, por cicatrices de una infección pélvica), el embrión puede implantarse fuera del útero. La trompa, y en especial la ampolla, es el sitio más frecuente del embarazo ectópico.',
          },
        ],
      },
    ],
  },
]
