import type { Topic } from '../types'

// Embriología I (UAD · EM01004) — Semana 1, Clases 1–5: panorama del desarrollo
// temprano, cromosomas, mitosis y meiosis, ovogénesis, espermatogénesis,
// anomalías cromosómicas numéricas y estructurales, ciclos ovárico y endometrial,
// fecundación y primera semana del desarrollo; infertilidad, reproducción asistida,
// salud reproductiva y planos y ejes embrionarios. Semana 2, Clase 1: segunda
// semana del desarrollo (días 8–13) y clínica de la implantación. Clase 2: tercera
// semana (gastrulación, notocorda, mapa del destino) y su clínica. Clase 3: periodo
// embrionario (semanas 3–8) y derivados de las capas germinales.
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
    title: 'Ciclo ovárico, ciclo endometrial y ovulación',
    subtitle: 'Eje hipotálamo-hipófisis-ovario, fases del ciclo ovárico, teca interna y granulosa, pico de LH y ovulación, cuerpo lúteo (luteólisis o embarazo), transporte del ovocito, ciclo endometrial, ventana fértil y casos clínicos',
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
      'Sin embarazo: máximo a los ≈ 9 días (7–10) → LUTEÓLISIS → CUERPO ALBICANS → cae la progesterona → menstruación · Con embarazo: la hCG del SINCITIOTROFOBLASTO mantiene el cuerpo lúteo hasta el final del 4.º mes ★',
      'Ciclo endometrial (28 días; 21–35 normal): fases MENSTRUAL (3–8 días; se pierde la capa FUNCIONAL, queda la BASAL), PROLIFERATIVA (estrógenos), SECRETORA (progesterona) y GESTACIONAL ★',
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
      {
        id: 'eco-7',
        number: 7,
        title: 'Destino del cuerpo lúteo: luteólisis o embarazo',
        keyTerms: ['luteólisis', 'cuerpo albicans', 'hCG', 'cuerpo lúteo del embarazo', 'sincitiotrofoblasto'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos caminos',
            left: {
              title: 'Sin embarazo',
              items: [
                'El cuerpo lúteo alcanza su máximo desarrollo unos 9 días después de la ovulación (7 a 10)',
                'Sin el estímulo de la hCG degenera: LUTEÓLISIS',
                'Pierde el pigmento amarillo y se vuelve una cicatriz blanquecina y fibrosa: el CUERPO ALBICANS',
                'Caen la progesterona y los estrógenos: el endometrio se vuelve isquémico y se desprende (menstruación)',
              ],
            },
            right: {
              title: 'Con embarazo',
              items: [
                'Al implantarse, el SINCITIOTROFOBLASTO secreta gonadotropina coriónica humana (hCG)',
                'La hCG mantiene viable el cuerpo lúteo: es el CUERPO LÚTEO DEL EMBARAZO',
                'Sigue creciendo: al final del 3.er mes puede ocupar entre un tercio y la mitad del ovario',
                'Secreta progesterona hasta el final del 4.º mes; después la placenta asume esa función',
              ],
            },
          },
          {
            type: 'note',
            title: 'Luteólisis y menstruación van juntas',
            content: 'La luteólisis provoca la caída de la progesterona, y esa caída desencadena la menstruación: por eso ambos fenómenos ocurren casi al mismo tiempo. El cuerpo albicans tarda meses en desintegrarse; sus restos los eliminan células fagocíticas y algunos dejan una pequeña cicatriz en el ovario.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La hCG en la clínica',
            content: 'La hCG es la hormona que detectan las pruebas de embarazo: las cualitativas responden si hay o no embarazo y las cuantitativas miden su concentración. Alcanza niveles detectables hacia el final de la segunda semana después de la fecundación y sus cifras más altas en los primeros dos meses. Si el cuerpo lúteo es insuficiente o se extirpa antes del cuarto mes, falta progesterona y el embarazo puede perderse.',
          },
        ],
      },
      {
        id: 'eco-8',
        number: 8,
        title: 'Ciclo endometrial',
        keyTerms: ['capa funcional', 'capa basal', 'fase menstrual', 'fase proliferativa', 'fase secretora', 'fase gestacional'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El endometrio cambia en un ciclo que dura en promedio 28 días (de 21 a 35 se considera normal) y que depende de las hormonas del ovario. El primer día del sangrado menstrual es el día 1 del ciclo.',
          },
          {
            type: 'comparison',
            title: 'Capas del endometrio',
            left: {
              title: 'Capa funcional',
              items: ['Capa compacta (más externa) y capa esponjosa', 'Se desprende en cada menstruación', 'Es donde ocurre la implantación'],
            },
            right: {
              title: 'Capa basal',
              items: ['No se pierde en la menstruación', 'A partir de ella se regenera la capa funcional en cada ciclo'],
            },
          },
          {
            type: 'table',
            title: 'Fases del ciclo endometrial',
            data: {
              headers: ['Fase', 'Qué pasa en el endometrio', 'Hormona que manda'],
              rows: [
                ['MENSTRUAL (3 a 8 días)', 'La capa funcional se vuelve isquémica, se adelgaza y se desprende: sangrado', 'Caída de progesterona y estrógenos'],
                ['PROLIFERATIVA (o folicular)', 'Se reconstruye y aumenta de grosor', 'Estrógenos de los folículos en maduración'],
                ['SECRETORA (o progestacional)', 'Más gruesa, secretora y receptiva para una posible implantación', 'Progesterona del cuerpo lúteo'],
                ['GESTACIONAL', 'Si hay implantación, se adapta para sostener al embrión', 'Progesterona del cuerpo lúteo del embarazo, mantenido por la hCG'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Dos ciclos en paralelo (ciclo de 28 días)',
            data: {
              headers: ['Días', 'Ovario', 'Endometrio'],
              rows: [
                ['1 a 5', 'Fase folicular temprana; caen las hormonas del cuerpo lúteo anterior', 'Menstrual'],
                ['6 a 13', 'Fase folicular: un folículo dominante produce estrógenos', 'Proliferativa'],
                ['14', 'Pico de LH y ovulación', 'Fin de la proliferativa'],
                ['15 a 28', 'Fase lútea: cuerpo lúteo y progesterona', 'Secretora'],
              ],
            },
          },
          {
            type: 'note',
            title: 'No confundir',
            content: 'Fase folicular y fase lútea son nombres del ciclo OVÁRICO; fase proliferativa y fase secretora son del ciclo ENDOMETRIAL. Ocurren al mismo tiempo y los conectan los estrógenos y la progesterona.',
          },
        ],
      },
      {
        id: 'eco-9',
        number: 9,
        title: 'Ventana fértil y casos clínicos',
        keyTerms: ['ventana fértil', 'moco cervical', 'dolor ovulatorio', 'método del ritmo'],
        blocks: [
          {
            type: 'list',
            title: 'Qué hace fértiles a esos días',
            items: [
              'En un ciclo regular de 28 días la ovulación ocurre en promedio el día 14; la clase usó los días 12 a 16 como ventana de mayor fertilidad.',
              'Desde unos 5 a 6 días antes de la ovulación, los estrógenos producen un moco cervical abundante, transparente, fluido y elástico (como clara de huevo) y alcalino, en el que los espermatozoides sobreviven.',
              'La LH es la hormona clave de la ovulación; su pico está precedido por el aumento de estrógenos.',
              'Si no se fecunda, el ovocito degenera en la trompa en unas 24 horas.',
            ],
          },
          {
            type: 'note',
            title: 'Es una estimación',
            content: 'La ventana fértil cambia con la duración de cada ciclo, y un ciclo puede variar de un mes a otro. Por eso el método del ritmo por sí solo no se recomienda para evitar un embarazo: se acompaña de otro método.',
          },
          {
            type: 'table',
            title: 'Casos de la clase',
            data: {
              headers: ['Caso', 'Ovario', 'Hormona', 'Endometrio'],
              rows: [
                ['21 años, día 10 de un ciclo de 28', 'Fase folicular; destaca un folículo dominante', 'Estrógenos (por FSH y LH)', 'Proliferativa'],
                ['23 años, día 14, dolor leve en hipogastrio y moco claro y elástico', 'Ovulación: se rompe el folículo de Graaf', 'Pico de LH', 'Fin de la proliferativa'],
                ['20 años con menstruación normal; sin fecundación en el ciclo previo', 'El cuerpo lúteo degeneró en cuerpo albicans', 'Caen progesterona y estrógenos', 'Menstrual: se desprende la capa funcional'],
                ['24 años que desea embarazo, ciclos de 28 días', 'Ovulación hacia el día 14 (ventana 12 a 16)', 'LH, precedida por estrógenos', 'Proliferativa → secretora'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Dolor de la ovulación: leve, no intenso',
            content: 'La rotura del folículo es un pequeño traumatismo de la pared del ovario y puede causar un dolor leve en el hipogastrio o un ligero manchado a mitad del ciclo. No le ocurre a todas las mujeres. Un dolor intenso o un sangrado abundante no se atribuyen a la ovulación sin estudiarlos, porque pueden indicar un problema como un embarazo ectópico.',
          },
        ],
      },
    ],
  },
  {
    id: 'embriologia-fecundacion',
    title: 'Fecundación y primera semana del desarrollo',
    subtitle: 'Recorrido de los espermatozoides, capacitación, reacción acrosómica (ZP3), fusión y bloqueo de la polispermia, pronúcleos y cigoto, segmentación, mórula y blastocisto, eclosión, implantación y hCG, inicio de la segunda semana',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '🧫',
    keyPoints: [
      'De 200 a 300 millones de espermatozoides depositados, solo 300 a 500 llegan a la AMPOLLA y uno fecunda ★',
      'Tres pasos: CAPACITACIÓN (≈ 7 h; permite cruzar la corona radiada) → REACCIÓN ACROSÓMICA (al unirse a ZP3; acrosina y enzimas semejantes a la tripsina; cruza la zona pelúcida) → FUSIÓN de membranas ★',
      'Al entrar el espermatozoide, el ovocito responde con REACCIONES CORTICAL Y DE ZONA (bloquean la POLISPERMIA), termina la MEIOSIS II y se activa metabólicamente ★',
      'Los pronúcleos replican su ADN y forman el CIGOTO. Resultados: número DIPLOIDE (46), SEXO cromosómico (X o Y del espermatozoide) e inicio de la SEGMENTACIÓN ★',
      'Mórula (día 3; 16–32 células; COMPACTACIÓN: embrioblasto y trofoblasto) → blastocisto (día 5) → ECLOSIÓN de la zona pelúcida → implantación (días 5.5–6) ★',
      'El SINCITIOTROFOBLASTO invade el endometrio y secreta hCG; en el hipoblasto, Cerberus y Lefty-1 marcan la región craneal.',
    ],
    sections: [
      {
        id: 'efe-1',
        number: 1,
        title: 'Del depósito a la ampolla',
        keyTerms: ['ampolla', 'moco cervical', 'contracciones uterinas', 'motilidad'],
        blocks: [
          {
            type: 'steps',
            title: 'Cuántos llegan',
            steps: [
              'Se depositan de 200 a 300 millones de espermatozoides en el aparato genital femenino.',
              'Solo cerca del 1 % entra al cuello uterino, donde puede sobrevivir muchas horas gracias al moco cervical alcalino; la vagina, en cambio, es ácida.',
              'Solo de 300 a 500 llegan al sitio de la fecundación: la AMPOLLA de la trompa uterina.',
              'Normalmente, uno solo fecunda al ovocito.',
            ],
          },
          {
            type: 'paragraph',
            content: 'El paso del cuello a la trompa depende sobre todo de las contracciones del útero y de la trompa, además del movimiento propio del espermatozoide. Puede tardar desde 30 minutos hasta 6 días: no porque el trayecto sea lento, sino porque los espermatozoides pueden esperar en el moco cervical, que aparece unos 5 a 6 días antes de la ovulación. Al ovular, recuperan su motilidad y nadan hacia la ampolla.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué importa el momento de la relación sexual',
            content: 'Como los espermatozoides sobreviven varios días en el moco cervical y el ovocito solo unas 24 horas, una relación sexual unos días antes de la ovulación puede terminar en embarazo. Por eso la ventana fértil incluye los días previos a la ovulación.',
          },
        ],
      },
      {
        id: 'efe-2',
        number: 2,
        title: 'Capacitación espermática',
        keyTerms: ['capacitación', 'plasma seminal', 'región acrosómica', 'corona radiada'],
        blocks: [
          {
            type: 'definition',
            title: 'Capacitación',
            content: 'Periodo de acondicionamiento del espermatozoide dentro del aparato reproductor femenino, sobre todo en la trompa uterina; dura unas 7 horas. Se retira una capa de glucoproteínas y proteínas del plasma seminal que cubre la membrana de la región acrosómica.',
          },
          {
            type: 'list',
            title: 'Qué permite',
            items: [
              'Solo el espermatozoide capacitado pasa libremente entre las células de la CORONA RADIADA: el primer filtro del ovocito.',
              'Deja la región acrosómica libre para la reacción acrosómica.',
              'Un espermatozoide recién eyaculado no puede fecundar: primero tiene que capacitarse.',
            ],
          },
          {
            type: 'note',
            title: 'Qué lleva el plasma seminal',
            content: 'Glucoproteínas, fructosa como fuente de energía, sustancias antibacterianas y proteínas que primero coagulan y después licúan el semen.',
          },
        ],
      },
      {
        id: 'efe-3',
        number: 3,
        title: 'Reacción acrosómica y zona pelúcida',
        keyTerms: ['reacción acrosómica', 'ZP3', 'acrosina', 'zona pelúcida'],
        blocks: [
          {
            type: 'steps',
            title: 'Cómo cruza la zona pelúcida',
            steps: [
              'El espermatozoide se une a la zona pelúcida; la unión la media el ligando ZP3, una proteína de la zona.',
              'Esa unión induce la REACCIÓN ACROSÓMICA: la membrana acrosómica externa se fusiona con la membrana plasmática del espermatozoide y el contenido del acrosoma sale por exocitosis.',
              'Se liberan enzimas como la ACROSINA y sustancias semejantes a la tripsina, que abren paso a través de la zona pelúcida.',
              'Queda expuesta la membrana acrosómica interna y el espermatozoide llega a la membrana del ovocito.',
            ],
          },
          {
            type: 'comparison',
            title: 'No confundir',
            left: {
              title: 'Capacitación',
              items: ['Ocurre en el aparato reproductor femenino, sobre todo en la trompa', 'Retira la cubierta del plasma seminal', 'Permite cruzar la corona radiada'],
            },
            right: {
              title: 'Reacción acrosómica',
              items: ['Ocurre al unirse a la zona pelúcida (ZP3)', 'Libera las enzimas del acrosoma', 'Permite cruzar la zona pelúcida'],
            },
          },
        ],
      },
      {
        id: 'efe-4',
        number: 4,
        title: 'Fusión de membranas y bloqueo de la polispermia',
        keyTerms: ['fusión de membranas', 'reacción cortical', 'reacción de zona', 'polispermia', 'triploidía'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La adhesión inicial entre el espermatozoide y el ovocito la median en parte las integrinas del ovocito y sus ligandos en el espermatozoide (desintegrinas). Después se fusionan las membranas de ambas células y entran al ovocito la cabeza, la pieza intermedia y la cola del espermatozoide.',
          },
          {
            type: 'list',
            title: 'Las tres respuestas del ovocito',
            items: [
              'REACCIONES CORTICAL Y DE ZONA: los gránulos corticales liberan su contenido y modifican la zona pelúcida, que ya no deja pasar a otros espermatozoides. Así se evita la POLISPERMIA.',
              'Reanuda y termina la SEGUNDA DIVISIÓN MEIÓTICA.',
              'ACTIVACIÓN METABÓLICA: los cambios celulares y moleculares que ponen en marcha la embriogénesis temprana.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cuando entran dos espermatozoides',
            content: 'La polispermia agrega juegos extra de cromosomas: un ovocito fecundado por dos espermatozoides es triploide (69 cromosomas) y no es viable. Es el origen de la mola hidatiforme parcial, en la que prolifera el trofoblasto y hay poco tejido embrionario. En la mola completa, en cambio, el ovocito no tiene material genético propio y todo el contenido genético es paterno.',
          },
        ],
      },
      {
        id: 'efe-5',
        number: 5,
        title: 'Pronúcleos y cigoto',
        keyTerms: ['pronúcleo femenino', 'pronúcleo masculino', 'cigoto', 'número diploide', 'sexo cromosómico'],
        blocks: [
          {
            type: 'steps',
            title: 'Del ovocito al cigoto',
            steps: [
              'El ovocito secundario termina la meiosis II: se forma el óvulo maduro y un segundo cuerpo polar. Su material genético forma el PRONÚCLEO FEMENINO.',
              'El espermatozoide pierde la cola y la pieza intermedia; su cabeza crece y forma el PRONÚCLEO MASCULINO.',
              'Ambos pronúcleos, haploides, REPLICAN su ADN.',
              'Su material se reúne en la primera célula del nuevo individuo: el CIGOTO.',
            ],
          },
          {
            type: 'note',
            title: 'Por qué replican antes de unirse',
            content: 'Si los pronúcleos se unieran sin replicar, habría 46 cromosomas de una sola cromátida. Al replicar primero, el cigoto queda con 46 cromosomas de dos cromátidas, listos para la primera división.',
          },
          {
            type: 'table',
            title: 'Resultados de la fecundación',
            data: {
              headers: ['Resultado', 'Qué significa'],
              rows: [
                ['Se restablece el número diploide', '46 cromosomas: 23 de la madre y 23 del padre'],
                ['Se determina el sexo cromosómico', 'Lo decide el espermatozoide, que aporta un X o un Y'],
                ['Inicia la segmentación', 'Comienzan las divisiones del cigoto'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Si no hay fecundación',
            content: 'El ovocito secundario sigue detenido en metafase II y degenera en unas 24 horas después de la ovulación. Casi siempre lo hace dentro de la misma trompa: normalmente no llega a la cavidad uterina.',
          },
        ],
      },
      {
        id: 'efe-6',
        number: 6,
        title: 'Segmentación, mórula y blastocisto',
        keyTerms: ['blastómeras', 'mórula', 'compactación', 'blastocisto', 'eclosión'],
        blocks: [
          {
            type: 'table',
            title: 'Cronología aproximada',
            data: {
              headers: ['Tiempo tras la fecundación', 'Etapa'],
              rows: [
                ['≈ 30 horas', 'Primera segmentación: dos células (blastómeras)'],
                ['Después', 'Cuatro y ocho blastómeras, mientras avanza por la trompa'],
                ['Día 3', 'MÓRULA de 16 a 32 células; COMPACTACIÓN'],
                ['Día 5', 'BLASTOCISTO'],
                ['Días 5.5 a 6', 'Eclosión de la zona pelúcida e inicio de la implantación'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'La compactación separa dos grupos',
            left: {
              title: 'Masa celular interna (embrioblasto)',
              items: ['Forma los tejidos del embrión', 'En el blastocisto se agrupa en un polo: el POLO EMBRIONARIO'],
            },
            right: {
              title: 'Masa celular externa (trofoblasto)',
              items: ['Forma la parte fetal de la placenta', 'En el blastocisto rodea la cavidad: el BLASTOCELE'],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La eclosión',
            content: 'Hasta el día 5 el blastocisto sigue dentro de la zona pelúcida. Para implantarse tiene que salir de ella (eclosión): si no lo logra, no puede tocar el endometrio. Es uno de los mecanismos que se estudian cuando una pareja tiene dificultad para concebir.',
          },
        ],
      },
      {
        id: 'efe-7',
        number: 7,
        title: 'Implantación e inicio de la segunda semana',
        keyTerms: ['implantación', 'citotrofoblasto', 'sincitiotrofoblasto', 'hCG', 'epiblasto', 'hipoblasto', 'Cerberus', 'Lefty-1'],
        blocks: [
          {
            type: 'steps',
            title: 'Implantación (hacia la mitad del día 5 al día 6)',
            steps: [
              'El blastocisto se orienta con el polo embrionario hacia el endometrio.',
              'Ligandos de la superficie del trofoblasto se unen a receptores del endometrio.',
              'El trofoblasto se divide en dos capas e invade el endometrio.',
            ],
          },
          {
            type: 'comparison',
            title: 'Las dos capas del trofoblasto',
            left: {
              title: 'Citotrofoblasto',
              items: ['Capa interna, de células individuales', 'Más cerca del embrioblasto'],
            },
            right: {
              title: 'Sincitiotrofoblasto',
              items: ['Capa externa, sin límites entre células', 'Invade el endometrio', 'Secreta hCG, que mantiene el cuerpo lúteo'],
            },
          },
          {
            type: 'paragraph',
            content: 'Al iniciar la segunda semana, el embrioblasto forma dos láminas: el EPIBLASTO (arriba, en los esquemas) y el HIPOBLASTO (abajo). Un grupo de células del hipoblasto expresa genes como CERBERUS y LEFTY-1, que marcan la futura región craneal. Los ejes cráneo-caudal, dorso-ventral e izquierda-derecha se establecen más adelante.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Prueba de embarazo',
            content: 'Las pruebas de embarazo detectan la hCG del sincitiotrofoblasto. Las cualitativas (sí o no) son confiables a partir del final de la segunda semana o el inicio de la tercera después de la fecundación, cuando hay suficiente hormona; las cuantitativas miden su concentración en sangre.',
          },
        ],
      },
    ],
  },
  {
    id: 'embriologia-infertilidad-reproduccion',
    title: 'Infertilidad, reproducción asistida y salud reproductiva',
    subtitle: 'Infertilidad masculina y femenina, gametos anormales, inducción de la ovulación, fecundación in vitro, ICSI y diagnóstico preimplantacional, insuficiencia ovárica primaria, SOMP (antes SOP), amenorrea, menopausia, anticoncepción, planos y ejes embrionarios',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '🧪',
    keyPoints: [
      'La infertilidad afecta al 14–15 % de las parejas; la causa puede ser masculina, femenina o de ambos.',
      'Varón: OLIGOZOOSPERMIA (concentración baja), ASTENOZOOSPERMIA (poca motilidad), AZOOSPERMIA (sin espermatozoides). Mujer: oclusión tubárica (enfermedad pélvica inflamatoria), moco cervical hostil, anovulación.',
      'FIV: estimulación ovárica → punción folicular → fecundación en el laboratorio → cultivo → transferencia. ICSI: se inyecta un espermatozoide en el ovocito. 1978: Louise Brown (Edwards y Steptoe).',
      'Insuficiencia ovárica primaria: antes de los 40 años, amenorrea u oligomenorrea de más de 4 meses, FSH > 25 UI/L, estradiol bajo y AMH baja.',
      'SOMP (síndrome ovárico metabólico poliendocrino, antes síndrome de ovario poliquístico): pulsos rápidos de GnRH → más LH → la teca hace más andrógenos; resistencia a la insulina; principal causa de anovulación crónica.',
      'Planos: SAGITAL (derecha e izquierda), FRONTAL o coronal (anterior y posterior), TRANSVERSAL (superior e inferior). Ejes: cráneo-caudal, dorso-ventral (BMP, SHH) e izquierda-derecha.',
    ],
    sections: [
      {
        id: 'eir-1',
        number: 1,
        title: 'Infertilidad: causas masculinas y femeninas',
        keyTerms: ['oligozoospermia', 'azoospermia', 'astenozoospermia', 'oclusión tubárica', 'anovulación'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos orígenes, a veces combinados',
            left: {
              title: 'Factor masculino',
              items: [
                'Pocos espermatozoides, poca motilidad o ambas cosas',
                'Se considera fecundo un semen con 20 a 50 millones de espermatozoides por mililitro (en un eyaculado de 2 a 6 mL)',
                'OLIGOZOOSPERMIA: concentración baja (por debajo de unos 15 millones/mL)',
                'AZOOSPERMIA: no hay espermatozoides en el eyaculado',
                'ASTENOZOOSPERMIA: motilidad disminuida',
              ],
            },
            right: {
              title: 'Factor femenino',
              items: [
                'Oclusión de las trompas, casi siempre por enfermedad pélvica inflamatoria o por cirugías',
                'Moco cervical hostil a los espermatozoides',
                'Respuesta inmunitaria contra los espermatozoides',
                'Ausencia de ovulación (anovulación) u ovulación infrecuente',
              ],
            },
          },
          {
            type: 'list',
            title: 'Gametos anormales',
            items: [
              'Hasta el 10 % de los espermatozoides tiene defectos visibles: cabeza o cola anormales, formas gigantes o enanas, espermatozoides unidos. Suelen moverse mal y es probable que no fecunden.',
              'Un folículo puede tener dos o tres ovocitos (posible origen de gemelos o trillizos), aunque suelen degenerar antes de madurar.',
              'Un ovocito con dos o tres núcleos muere antes de llegar a la madurez.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Síndrome de Kartagener y fertilidad',
            content: 'Es una forma de discinesia ciliar primaria, de herencia autosómica recesiva: sinusitis, bronquiectasias y situs inversus. El flagelo del espermatozoide tiene la misma estructura que un cilio, así que en el varón la motilidad puede estar muy disminuida o ausente. La ICSI permite usar esos espermatozoides, porque no necesitan nadar hasta el ovocito.',
          },
        ],
      },
      {
        id: 'eir-2',
        number: 2,
        title: 'Ovulación e inducción de la ovulación',
        keyTerms: ['mittelschmerz', 'temperatura basal', 'citrato de clomifeno', 'embarazo múltiple'],
        blocks: [
          {
            type: 'list',
            title: 'Signos de la ovulación',
            items: [
              'MITTELSCHMERZ («dolor intermedio»): dolor leve hacia la mitad del ciclo, que algunas mujeres perciben.',
              'La temperatura basal sube un poco después de ovular; se registra para identificar los días fértiles.',
            ],
          },
          {
            type: 'paragraph',
            content: 'Algunas mujeres no ovulan porque producen poca gonadotropina. En ellas se pueden usar fármacos que estimulan la liberación de FSH y LH. El más conocido es el CITRATO DE CLOMIFENO: bloquea la retroalimentación negativa de los estrógenos en el hipotálamo, aumenta la GnRH y con ella la FSH, y así induce la ovulación. También se usa para estimular el ovario antes de una fecundación in vitro.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Embarazo múltiple',
            content: 'Los inductores de la ovulación suelen hacer que maduren y se liberen varios ovocitos: la probabilidad de un embarazo múltiple llega a ser hasta 10 veces mayor que sin ellos. Por eso se usan con vigilancia ecográfica y hormonal.',
          },
        ],
      },
      {
        id: 'eir-3',
        number: 3,
        title: 'Fecundación in vitro (FIV)',
        keyTerms: ['fecundación in vitro', 'punción folicular', 'transferencia embrionaria', 'Louise Brown', 'genes HOX'],
        blocks: [
          {
            type: 'list',
            title: 'Cómo se llegó a la FIV',
            items: [
              'Siglo XX: la embriología experimental y molecular estudia qué controla el desarrollo (inducción embrionaria, gradientes morfogenéticos) y descubre genes del desarrollo como los HOX, gracias en buena parte a la mosca Drosophila.',
              'Las primeras fecundaciones fuera del cuerpo se lograron en animales (conejo, ratón).',
              'Décadas de 1950 y 1960: primeros intentos en humanos, con problemas para mantener vivos los gametos y lograr la implantación.',
              '25 de julio de 1978: nace en el Reino Unido Louise Brown, la primera persona concebida por FIV, gracias al equipo de Robert Edwards (fisiólogo) y Patrick Steptoe (ginecólogo). Edwards recibió el Premio Nobel de Medicina en 2010.',
              'Décadas de 1980 y 1990: hormonas para estimular la ovulación, mejores medios de cultivo y congelación de embriones.',
            ],
          },
          {
            type: 'steps',
            title: 'Pasos de la FIV',
            steps: [
              'ESTIMULACIÓN OVÁRICA con gonadotropinas (FSH y LH), vigilada con ultrasonido y hormonas.',
              'PUNCIÓN FOLICULAR: se aspiran los ovocitos justo antes de la ovulación, cuando están en las últimas etapas de la meiosis I.',
              'Preparación del semen y FECUNDACIÓN en un medio de cultivo.',
              'CULTIVO EMBRIONARIO hasta etapas tempranas, a menudo hasta blastocisto.',
              'TRANSFERENCIA del embrión a la cavidad uterina y prueba de embarazo después.',
            ],
          },
          {
            type: 'table',
            title: 'Éxito por intento según la edad de la mujer (cifras orientativas)',
            data: {
              headers: ['Edad', 'Embarazo por intento'],
              rows: [
                ['Menos de 35 años', '≈ 30 %'],
                ['35 a 37 años', '≈ 25 %'],
                ['38 a 40 años', '≈ 17 %'],
                ['Más de 40 años', 'menos de 5 %'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Riesgos de la reproducción asistida',
            content: 'Para aumentar la probabilidad de éxito se llegaron a transferir varios embriones, lo que eleva mucho el riesgo de embarazo múltiple, sobre todo en mujeres jóvenes. Los embarazos múltiples explican la mayor parte de los resultados adversos: parto pretérmino (antes de las 37 semanas), peso bajo al nacer (menos de 2500 g) y muy bajo (menos de 1500 g). Por eso hoy se tiende a transferir menos embriones. También se ha descrito una frecuencia algo mayor de defectos congénitos.',
          },
        ],
      },
      {
        id: 'eir-4',
        number: 4,
        title: 'ICSI y diagnóstico genético preimplantacional',
        keyTerms: ['ICSI', 'microinyección', 'microdeleciones del cromosoma Y', 'biopsia de blastómera'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos formas de fecundar en el laboratorio',
            left: {
              title: 'FIV convencional',
              items: ['Se ponen juntos los ovocitos y muchos espermatozoides', 'El espermatozoide tiene que penetrar por sí mismo'],
            },
            right: {
              title: 'ICSI (inyección intracitoplasmática)',
              items: ['Se inyecta un solo espermatozoide en el citoplasma del ovocito', 'Útil en oligozoospermia grave o azoospermia (los espermatozoides pueden obtenerse del testículo)'],
            },
          },
          {
            type: 'note',
            title: 'La ICSI no corrige la causa',
            content: 'Algunas infertilidades masculinas se deben a microdeleciones del cromosoma Y. Con la ICSI esa alteración puede pasar a los hijos varones, por eso se ofrece asesoramiento genético. También se ha descrito una frecuencia algo mayor de defectos congénitos que con la FIV convencional.',
          },
          {
            type: 'paragraph',
            content: 'En el DIAGNÓSTICO GENÉTICO PREIMPLANTACIONAL se toma una o pocas células de un embrión temprano y se analiza su ADN (por ejemplo, ampliándolo con la reacción en cadena de la polimerasa) para buscar alteraciones cromosómicas o genéticas antes de transferirlo. Es costoso y no garantiza un recién nacido sano.',
          },
        ],
      },
      {
        id: 'eir-5',
        number: 5,
        title: 'Insuficiencia ovárica primaria',
        keyTerms: ['insuficiencia ovárica primaria', 'FSH elevada', 'hormona antimülleriana', 'estradiol', 'estriol', 'estrona'],
        blocks: [
          {
            type: 'definition',
            title: 'Insuficiencia ovárica primaria',
            content: 'Pérdida de la función del ovario antes de los 40 años. Se le llamaba menopausia prematura o falla ovárica precoz. En la mayoría de los casos no se encuentra la causa; se conocen causas genéticas (por ejemplo, el síndrome de Turner o la premutación del X frágil), autoinmunes, metabólicas y tratamientos como la quimioterapia.',
          },
          {
            type: 'list',
            title: 'Criterios diagnósticos',
            items: [
              'Edad menor de 40 años.',
              'Amenorrea u oligomenorrea de más de 4 meses.',
              'FSH elevada (> 25 UI/L); tradicionalmente en dos mediciones con un mes de intervalo.',
              'Estradiol bajo (hipoestrogenismo).',
              'Hormona antimülleriana (AMH) BAJA: la producen las células de la granulosa de los folículos pequeños, así que refleja cuántos folículos quedan.',
            ],
          },
          {
            type: 'table',
            title: 'Tres estrógenos',
            data: {
              headers: ['Estrógeno', 'Cuándo predomina'],
              rows: [
                ['Estradiol', 'Edad reproductiva (es el que se mide en la insuficiencia ovárica)'],
                ['Estriol', 'Embarazo'],
                ['Estrona', 'Menopausia y posmenopausia'],
              ],
            },
          },
        ],
      },
      {
        id: 'eir-6',
        number: 6,
        title: 'Síndrome ovárico metabólico poliendocrino (SOMP)',
        keyTerms: ['SOMP', 'síndrome de ovario poliquístico', 'hiperandrogenismo', 'resistencia a la insulina', 'SHBG'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Es el nuevo nombre del síndrome de ovario poliquístico (SOP), adoptado por consenso internacional en 2026: muchas pacientes no tienen quistes, y el trastorno es endocrino y metabólico además de ovárico. Combina disfunción ovulatoria, hiperandrogenismo y, a menudo, ovarios con muchos folículos pequeños. Es la principal causa de anovulación crónica y de infertilidad por anovulación.',
          },
          {
            type: 'steps',
            title: 'Fisiopatología',
            steps: [
              'El hipotálamo libera pulsos de GnRH más rápidos: la hipófisis secreta más LH que FSH.',
              'El exceso de LH estimula la teca interna (hiperplasia tecal): se producen más andrógenos.',
              'Con FSH relativamente baja hay menos aromatasa: los andrógenos no se convierten en estrógenos y los folículos no maduran (atresia).',
              'La resistencia a la insulina causa hiperinsulinemia compensatoria; la insulina estimula a la teca y reduce la SHBG del hígado, con lo que sube la testosterona libre.',
            ],
          },
          {
            type: 'list',
            title: 'Cuadro clínico',
            items: [
              'Trastorno menstrual en cerca del 90 %: oligomenorrea o amenorrea por oligo o anovulación.',
              'Hiperandrogenismo: hirsutismo (≈ 60 %), acné, alopecia de patrón androgénico.',
              'Obesidad y acantosis nigricans, signos de resistencia a la insulina.',
              'Infertilidad, aunque no todas las pacientes son infértiles.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué ayudan el ejercicio y la metformina',
            content: 'El músculo es uno de los tejidos que más glucosa consume. El ejercicio, sobre todo de fuerza, mejora la sensibilidad a la insulina, igual que la metformina y una alimentación con menos azúcares. Al bajar la insulina bajan los andrógenos, y los ciclos y la ovulación pueden mejorar. El manejo se individualiza según lo que busque cada paciente.',
          },
        ],
      },
      {
        id: 'eir-7',
        number: 7,
        title: 'Amenorrea y menopausia',
        keyTerms: ['amenorrea primaria', 'amenorrea secundaria', 'menopausia', 'perimenopausia', 'síndrome climatérico'],
        blocks: [
          {
            type: 'table',
            title: 'Amenorrea: ausencia de menstruación',
            data: {
              headers: ['Tipo', 'Definición', 'Ejemplos'],
              rows: [
                ['PRIMARIA', 'Sin menarca a los 15 años con caracteres sexuales secundarios, o a los 13 años sin ellos', 'Himen imperforado (con caracteres sexuales); síndrome de Turner (sin ellos)'],
                ['SECUNDARIA', 'Sin menstruación más de 3 meses si los ciclos eran regulares, o 6 meses si eran irregulares', 'Embarazo (lo primero que se descarta), SOMP, causas hipotalámicas'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Definiciones alrededor de la menopausia',
            data: {
              headers: ['Término', 'Qué es'],
              rows: [
                ['MENOPAUSIA', 'Última menstruación; se confirma tras 12 meses seguidos sin menstruar, sin otra causa'],
                ['PERIMENOPAUSIA', 'Transición que empieza con los cambios del ciclo y termina un año después de la última menstruación'],
                ['POSMENOPAUSIA', 'Desde la última menstruación en adelante; la temprana abarca los primeros 5 años'],
                ['SÍNDROME CLIMATÉRICO', 'Conjunto de signos y síntomas de la perimenopausia y la posmenopausia temprana'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Antes de los 40 años no es menopausia natural',
            content: 'La menopausia natural ocurre en promedio alrededor de los 50 años. Si la función del ovario se pierde antes de los 40, se trata de una insuficiencia ovárica primaria.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Lo que hacen los estrógenos',
            content: 'Al caer los estrógenos aparecen bochornos, sudoración nocturna, cambios del sueño y del ánimo, síntomas genitourinarios y pérdida de densidad mineral ósea, que aumenta el riesgo de osteoporosis y fracturas.',
          },
        ],
      },
      {
        id: 'eir-8',
        number: 8,
        title: 'Métodos anticonceptivos',
        keyTerms: ['anticonceptivos hormonales', 'DIU de cobre', 'métodos de barrera', 'vasectomía', 'oclusión tubaria', 'anticoncepción de emergencia'],
        blocks: [
          {
            type: 'table',
            title: 'Clasificación',
            data: {
              headers: ['Grupo', 'Métodos', 'Cómo actúan'],
              rows: [
                ['Temporales hormonales', 'Píldoras, parche, anillo vaginal, inyecciones, implantes, DIU hormonal', 'Inhiben la ovulación (frenan FSH y LH), espesan el moco cervical y modifican el endometrio'],
                ['Temporales no hormonales', 'DIU de cobre', 'El cobre es tóxico para los espermatozoides y dificulta la fecundación'],
                ['De barrera', 'Preservativo masculino o femenino, diafragma, capuchón cervical', 'Impiden que los espermatozoides lleguen al útero; el preservativo además protege de infecciones de transmisión sexual'],
                ['Definitivos', 'Vasectomía; oclusión tubaria (salpingoclasia)', 'Interrumpen el paso de los espermatozoides por el conducto deferente o el encuentro de los gametos en la trompa'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Anticoncepción de emergencia',
            items: [
              'Levonorgestrel en una sola dosis: es más eficaz cuanto antes se tome; se usa hasta 72 horas después de la relación (y con menor eficacia hasta 120).',
              'Acetato de ulipristal: modulador del receptor de progesterona, útil hasta 120 horas (5 días).',
              'DIU de cobre: colocado hasta 5 días después; es el método de emergencia más eficaz.',
              'Actúan sobre todo retrasando o impidiendo la ovulación; no interrumpen un embarazo ya implantado.',
            ],
          },
          {
            type: 'note',
            title: 'Mifepristona',
            content: 'Es un antiprogestágeno. En dosis bajas solo se usa como anticonceptivo de emergencia en algunos países; en dosis mayores, después de la implantación, interrumpe el embarazo, porque bloquea la progesterona que lo sostiene.',
          },
          {
            type: 'note',
            title: 'Vasectomía',
            content: 'No es eficaz de inmediato: quedan espermatozoides en la vía seminal, así que se usa otro método hasta que un espermiograma confirme la azoospermia.',
          },
        ],
      },
      {
        id: 'eir-9',
        number: 9,
        title: 'Planos y ejes embrionarios',
        keyTerms: ['plano sagital', 'plano frontal', 'plano transversal', 'eje cráneo-caudal', 'eje dorso-ventral', 'eje izquierda-derecha', 'Sonic hedgehog'],
        blocks: [
          {
            type: 'table',
            title: 'Planos (igual que en el adulto)',
            data: {
              headers: ['Plano', 'Divide en', 'Sirve para ver'],
              rows: [
                ['SAGITAL', 'Derecha e izquierda', 'Tubo neural, notocorda, plegamiento cefalocaudal, corazón primitivo'],
                ['FRONTAL (coronal)', 'Anterior y posterior', 'Cavidades corporales, desarrollo del corazón y del encéfalo, relación entre tórax y abdomen'],
                ['TRANSVERSAL', 'Superior e inferior', 'Cortes histológicos, ecografía obstétrica, desarrollo del diafragma y de las cavidades'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Ejes del embrión',
            data: {
              headers: ['Eje', 'Qué define', 'Si falla'],
              rows: [
                ['CRÁNEO-CAUDAL', 'Cabeza y cola; empieza a fijarse al final de la primera semana (Cerberus y Lefty-1 en el hipoblasto)', 'Defectos del tubo neural, sirenomelia'],
                ['DORSO-VENTRAL', 'Espalda y vientre; lo controlan gradientes de moléculas como BMP y Sonic hedgehog (SHH)', 'Alteraciones de la organización del tubo neural y del cuerpo'],
                ['IZQUIERDA-DERECHA', 'Lateralidad: asimetría del corazón y posición de las vísceras', 'Situs inversus, heterotaxia'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Para el examen de la semana',
            content: 'Se señalaron como base: qué distingue a cada etapa del folículo (primordial, primario y siguientes), cómo se forman las células de la granulosa, las gonadotropinas FSH y LH y sobre qué células actúan, la luteinización y el cuerpo lúteo, la hCG y las pruebas de embarazo, qué pasa con el ovocito si no hay fecundación (degenera en unas 24 horas), los resultados de la fecundación, las blastómeras, la mórula, y embrioblasto contra trofoblasto.',
          },
        ],
      },
    ],
  },
  {
    id: 'embriologia-segunda-semana',
    title: 'Segunda semana del desarrollo e implantación',
    subtitle: 'Semen y trayecto espermático; días 8, 9, 11–12 y 13: trofoblasto, disco bilaminar, cavidad amniótica, etapa lacunar, circulación uteroplacentaria, mesodermo extraembrionario, vellosidades primarias y saco vitelino definitivo; tolerancia inmunológica, embarazo ectópico, placenta previa, mola hidatiforme e incompatibilidad Rh',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '🪺',
    keyPoints: [
      'Semen: pH 7.2–7.7, 2–6 mL por eyaculación, 50–150 millones/mL; oligospermia por debajo de 15 millones/mL. La VESICULASA coagula el semen y después se licúa.',
      'DÍA 8: el trofoblasto se divide en CITOTROFOBLASTO (interno, mononucleado) y SINCITIOTROFOBLASTO (externo, multinucleado, invasor); el embrioblasto forma el disco BILAMINAR (epiblasto + hipoblasto) y aparece la CAVIDAD AMNIÓTICA.',
      'DÍA 9 (ETAPA LACUNAR): coágulo de fibrina en el sitio de entrada, MEMBRANA DE HEUSER (del hipoblasto) que delimita el SACO VITELINO PRIMITIVO, y LAGUNAS en el sincitiotrofoblasto.',
      'DÍAS 11–12: el sincitio erosiona capilares maternos (SINUSOIDES) → CIRCULACIÓN UTEROPLACENTARIA; MESODERMO EXTRAEMBRIONARIO (somático y esplácnico) y CAVIDAD CORIÓNICA; REACCIÓN DECIDUAL.',
      'DÍA 13: VELLOSIDADES PRIMARIAS (columnas de citotrofoblasto cubiertas de sincitio), PEDÍCULO DE FIJACIÓN, QUISTES EXOCELÓMICOS y SACO VITELINO DEFINITIVO.',
      'Clínica de la implantación: ECTÓPICO (2 % de los embarazos; 95 % tubárico, 80 % de estos en la ampolla), PLACENTA PREVIA, MOLA completa (genoma paterno) y parcial (triploide) con hCG muy alta, e incompatibilidad Rh (anti-D a las 28 semanas y en las 72 h posparto).',
    ],
    sections: [
      {
        id: 'ess-1',
        number: 1,
        title: 'Del semen a la ampolla',
        keyTerms: ['semen', 'vesiculasa', 'oligospermia', 'capacitación', 'reacción acrosómica'],
        blocks: [
          {
            type: 'steps',
            title: 'Trayecto en el aparato reproductor masculino',
            steps: [
              'Túbulos seminíferos, donde ocurre la espermatogénesis.',
              'Túbulos rectos y red testicular.',
              'Conductos eferentes.',
              'Epidídimo: maduración y almacenamiento.',
              'Conducto deferente y conductos eyaculadores.',
              'Uretra y exterior.',
            ],
          },
          {
            type: 'table',
            title: 'Características del semen',
            data: {
              headers: ['Parámetro', 'Valor'],
              rows: [
                ['pH', '7.2 a 7.7 (alcalino)'],
                ['Volumen por eyaculación', '2 a 6 mL'],
                ['Concentración', '50 a 150 millones/mL (variable; desde unos 20 millones/mL se considera fértil)'],
                ['Oligospermia', 'Menos de 15 millones/mL'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Funciones del semen',
            items: [
              'Protege y nutre a los espermatozoides (fructosa, aminoácidos).',
              'Neutraliza en parte la acidez de la vagina gracias a su pH alcalino.',
              'Facilita la movilidad de los espermatozoides.',
              'Primero coagula, por acción de una proteína llamada VESICULASA, y después se licúa para que los espermatozoides avancen.',
            ],
          },
          {
            type: 'note',
            title: 'Repaso de la fecundación',
            content: 'De 200 a 300 millones de espermatozoides depositados, menos de 300 llegan a la AMPOLLA de la trompa y normalmente uno fecunda. Siguen los pasos ya vistos en «Fecundación y primera semana del desarrollo»: capacitación (≈ 7 horas, en la trompa) → cruce de la corona radiada → reacción acrosómica al unirse a ZP3 (acrosina y enzimas semejantes a la tripsina) → fusión de membranas → reacciones cortical y de zona → pronúcleos y cigoto → mórula (día 3) → blastocisto (día 5) → eclosión e inicio de la implantación (días 5.5–6).',
          },
        ],
      },
      {
        id: 'ess-2',
        number: 2,
        title: 'Día 8: trofoblasto en dos capas y disco bilaminar',
        keyTerms: ['citotrofoblasto', 'sincitiotrofoblasto', 'epiblasto', 'hipoblasto', 'disco bilaminar', 'cavidad amniótica', 'amnioblastos'],
        blocks: [
          {
            type: 'comparison',
            title: 'Las dos capas del trofoblasto',
            left: {
              title: 'Citotrofoblasto',
              items: ['Capa INTERNA', 'Células individuales, mononucleadas, con membrana propia', 'Se divide y aporta células al sincitio'],
            },
            right: {
              title: 'Sincitiotrofoblasto',
              items: ['Capa EXTERNA', 'Masa multinucleada: las células pierden sus membranas y se fusionan', 'Invade el endometrio y produce hCG'],
            },
          },
          {
            type: 'comparison',
            title: 'Las dos capas del embrioblasto: disco bilaminar',
            left: {
              title: 'Epiblasto',
              items: ['Células cilíndricas altas', 'Junto a él aparece la cavidad amniótica'],
            },
            right: {
              title: 'Hipoblasto',
              items: ['Células cuboides pequeñas', 'Mira hacia la cavidad del blastocisto (blastocele)'],
            },
          },
          {
            type: 'paragraph',
            content: 'Dentro del epiblasto aparece un espacio pequeño, la CAVIDAD AMNIÓTICA, revestida por AMNIOBLASTOS; será el espacio del líquido amniótico. En este momento hay dos cavidades: la amniótica, junto al epiblasto, y el blastocele. El endometrio junto al sitio de implantación está edematoso y muy vascularizado, con glándulas grandes y tortuosas que secretan abundante glucógeno y moco.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Trampa de examen',
            content: 'La cavidad amniótica y el disco bilaminar NO existen en la primera semana: aparecen en la segunda, hacia el día 8, cuando la implantación ya empezó. Y la hCG la produce el SINCITIOTROFOBLASTO, no el citotrofoblasto.',
          },
        ],
      },
      {
        id: 'ess-3',
        number: 3,
        title: 'Día 9: etapa lacunar',
        keyTerms: ['coágulo de fibrina', 'membrana de Heuser', 'membrana exocelómica', 'saco vitelino primitivo', 'lagunas trofoblásticas'],
        blocks: [
          {
            type: 'list',
            title: 'Qué cambia',
            items: [
              'El blastocisto se hunde más en el endometrio y el orificio de entrada se cierra con un COÁGULO DE FIBRINA, que limita el sangrado.',
              'Células del hipoblasto proliferan y migran por la cara interna del citotrofoblasto: forman la MEMBRANA EXOCELÓMICA (de HEUSER).',
              'La membrana de Heuser delimita la CAVIDAD EXOCELÓMICA, también llamada SACO VITELINO PRIMITIVO (el antiguo blastocele).',
              'En el sincitiotrofoblasto aparecen VACUOLAS que se fusionan en espacios mayores: las LAGUNAS trofoblásticas o sincitiales.',
            ],
          },
          {
            type: 'definition',
            title: 'Etapa lacunar',
            content: 'Nombre que recibe el día 9 del desarrollo por la aparición de las lagunas en el sincitiotrofoblasto.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Sangrado de implantación',
            content: 'La penetración del blastocisto en el endometrio puede acompañarse de un sangrado leve alrededor de la fecha esperada de la menstruación. Puede confundirse con una regla escasa y alterar el cálculo de la edad gestacional.',
          },
        ],
      },
      {
        id: 'ess-4',
        number: 4,
        title: 'Días 11–12: circulación uteroplacentaria y mesodermo extraembrionario',
        keyTerms: ['sinusoides maternos', 'circulación uteroplacentaria', 'mesodermo extraembrionario', 'cavidad coriónica', 'reacción decidual'],
        blocks: [
          {
            type: 'steps',
            title: 'Cómo entra la sangre materna',
            steps: [
              'El sincitiotrofoblasto invade más a fondo el estroma endometrial.',
              'Erosiona la pared de los capilares maternos, que se congestionan y dilatan: son los SINUSOIDES MATERNOS.',
              'Las lagunas sincitiales se comunican con los sinusoides y la sangre materna entra al sistema lacunar.',
              'Así comienza la CIRCULACIÓN UTEROPLACENTARIA.',
            ],
          },
          {
            type: 'paragraph',
            content: 'Entre el citotrofoblasto y la membrana de Heuser aparece el MESODERMO EXTRAEMBRIONARIO, un tejido conectivo laxo y fino. En su interior se forman espacios cuyos tabiques se rompen y se unen en una sola gran cavidad: la CAVIDAD EXTRAEMBRIONARIA o CORIÓNICA. El disco bilaminar mide apenas 0.1 a 0.2 mm.',
          },
          {
            type: 'comparison',
            title: 'El mesodermo extraembrionario queda en dos hojas',
            left: {
              title: 'Somático',
              items: ['Recubre el citotrofoblasto y el amnios'],
            },
            right: {
              title: 'Esplácnico',
              items: ['Recubre el saco vitelino'],
            },
          },
          {
            type: 'definition',
            title: 'Reacción decidual',
            content: 'Las células del estroma endometrial, antes alargadas, se vuelven poliédricas y acumulan glucógeno y lípidos (células deciduales); el espacio entre ellas se llena de líquido extravasado y el tejido queda edematoso y muy vascularizado. Empieza alrededor del sitio de implantación y después se extiende a todo el endometrio.',
          },
        ],
      },
      {
        id: 'ess-5',
        number: 5,
        title: 'Día 13: vellosidades primarias y saco vitelino definitivo',
        keyTerms: ['vellosidades primarias', 'placa coriónica', 'pedículo de fijación', 'quistes exocelómicos', 'saco vitelino definitivo'],
        blocks: [
          {
            type: 'list',
            title: 'Estructuras del día 13',
            items: [
              'VELLOSIDADES PRIMARIAS: columnas de citotrofoblasto que crecen hacia el espesor del sincitiotrofoblasto y quedan cubiertas por él.',
              'PLACA CORIÓNICA: el mesodermo extraembrionario somático que reviste al citotrofoblasto por dentro de la cavidad coriónica.',
              'PEDÍCULO DE FIJACIÓN: puente de mesodermo extraembrionario que une al embrión (y su amnios) con el trofoblasto; de él se formará el cordón umbilical.',
              'SACO VITELINO DEFINITIVO (secundario): el saco primitivo se remodela, se desprenden porciones de él (QUISTES EXOCELÓMICOS, temporales, que se reabsorben o se incorporan a los tejidos vecinos) y queda una cavidad más pequeña.',
            ],
          },
          {
            type: 'list',
            title: 'Funciones del saco vitelino vistas en clase',
            items: [
              'Más adelante alberga a las células germinales primordiales.',
              'Forma algunas de las primeras células sanguíneas.',
              'Aporta nutrición temprana mientras el sistema vascular del embrión no está completo.',
            ],
          },
          {
            type: 'paragraph',
            content: 'Las vellosidades siguen madurando: primarias → secundarias → terciarias. Unas llegan hasta la capa citotrofoblástica externa y fijan el tejido (vellosidades DE ANCLAJE); otras, más pequeñas, flotan en los espacios intervellosos llenos de sangre materna (vellosidades LIBRES o flotantes) y son las que hacen la mayor parte del intercambio materno-embrionario.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'La implantación no es solo fijación',
            content: 'Además de anclar al embrión, la implantación permite la invasión del endometrio, el establecimiento de la circulación uteroplacentaria y el inicio de la placenta. Por eso, si hay fecundación pero falla la implantación (al final de la primera semana e inicio de la segunda), no se establece el embarazo y la menstruación llega normal.',
          },
        ],
      },
      {
        id: 'ess-6',
        number: 6,
        title: 'Cronología de la segunda semana',
        keyTerms: ['día 8', 'día 9', 'días 11–12', 'día 13'],
        blocks: [
          {
            type: 'table',
            title: 'Resumen por día',
            data: {
              headers: ['Día', 'Eventos principales'],
              rows: [
                ['8', 'Citotrofoblasto y sincitiotrofoblasto; epiblasto e hipoblasto (disco bilaminar); cavidad amniótica'],
                ['9', 'Coágulo de fibrina; membrana de Heuser; saco vitelino primitivo; lagunas (etapa lacunar)'],
                ['11–12', 'Sinusoides maternos y circulación uteroplacentaria; mesodermo extraembrionario y cavidad coriónica; reacción decidual'],
                ['13', 'Vellosidades primarias; placa coriónica; pedículo de fijación; quistes exocelómicos y saco vitelino definitivo'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Lo que sigue',
            content: 'La tercera semana inicia con la gastrulación (formación de las tres capas germinales), la notocorda y la neurulación.',
          },
        ],
      },
      {
        id: 'ess-7',
        number: 7,
        title: 'Rechazo inmunológico y embarazo',
        keyTerms: ['tolerancia materna', 'inmunidad celular', 'inmunidad humoral', 'anticuerpos antiespermatozoides', 'barrera hematotesticular', 'prostaglandinas'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El embrión recibe cerca del 50 % de su genoma del padre, así que el sistema inmunitario materno podría reconocerlo como extraño. Durante el embarazo la respuesta se ajusta: la inmunidad MEDIADA POR CÉLULAS se atenúa y la HUMORAL (por anticuerpos) adquiere más peso. Ninguna desaparece; cambia el equilibrio, y con él la susceptibilidad a algunas infecciones.',
          },
          {
            type: 'comparison',
            title: 'Enfermedades autoinmunitarias en el embarazo',
            left: {
              title: 'Pueden mejorar',
              items: ['Esclerosis múltiple', 'Artritis reumatoide', 'Predomina el componente celular, que se atenúa'],
            },
            right: {
              title: 'Pueden empeorar',
              items: ['Lupus eritematoso sistémico', 'Predomina el componente humoral (anticuerpos), que se acentúa'],
            },
          },
          {
            type: 'list',
            title: 'Otros escenarios',
            items: [
              'ANTICUERPOS ANTIESPERMATOZOIDES: los produce con más frecuencia la mujer, pero también el varón si se rompe la BARRERA HEMATOTESTICULAR; marcan y destruyen a los espermatozoides (causa de infertilidad).',
              'INFECCIONES (cervicovaginitis, corioamnionitis, infecciones urinarias complicadas): aumentan las PROSTAGLANDINAS, que contraen el músculo liso del miometrio.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Infección y parto pretérmino',
            content: 'Como las prostaglandinas contraen el miometrio, una infección no tratada durante el embarazo eleva el riesgo de contracciones, pérdida gestacional o parto pretérmino. Por eso se buscan y tratan a tiempo las infecciones vaginales y urinarias de la embarazada.',
          },
        ],
      },
      {
        id: 'ess-8',
        number: 8,
        title: 'Implantación anómala: embarazo ectópico y placenta previa',
        keyTerms: ['embarazo ectópico', 'tubárico', 'bolsa de Douglas', 'ovárico primario', 'placenta previa', 'orificio cervical interno'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La implantación normal ocurre en la pared ANTERIOR o POSTERIOR del cuerpo del útero, que puede nutrir, distenderse y contener al embrión. Fuera de ese sitio el embarazo casi nunca se consolida.',
          },
          {
            type: 'table',
            title: 'Localizaciones del embarazo ectópico',
            data: {
              headers: ['Localización', 'Frecuencia y detalle'],
              rows: [
                ['Tubárico', 'Hasta 95 % de los ectópicos; 80 % de ellos en la AMPOLLA, donde ocurre la fecundación'],
                ['Intersticial', '≈ 0.2 %; porción de la trompa que atraviesa la pared uterina'],
                ['Abdominal', '≈ 1.4 %; sobre todo en la bolsa rectouterina (de Douglas), también en peritoneo intestinal u omento'],
                ['Ovárico primario', '≈ 0.2 %; en el ovario mismo'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Sobre las cifras',
            content: 'Los porcentajes de las localizaciones poco frecuentes son los de la presentación de clase. En las series clínicas, el embarazo intersticial suele representar entre el 2 y el 4 % de los embarazos ectópicos, más de lo que indica la diapositiva. Lo constante en todas las fuentes es que la gran mayoría son tubáricos y, de ellos, la mayor parte ocurre en la ampolla.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Sospecha de embarazo ectópico',
            content: 'Representa cerca del 2 % de los embarazos y hasta el 9 % de las muertes relacionadas con la gestación. Se sospecha con prueba de embarazo positiva y ÚTERO VACÍO en el primer ultrasonido, a veces con una masa anexial. Muchos se descubren al romperse el saco gestacional (casi siempre hacia el segundo mes): dolor abdominal intenso y sangrado, una urgencia por hemorragia materna grave.',
          },
          {
            type: 'definition',
            title: 'Placenta previa',
            content: 'La implantación ocurre cerca del ORIFICIO CERVICAL INTERNO y la placenta se desarrolla cubriendo el cuello uterino. Se relaciona con cicatrices de cesáreas previas.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Manejo de la placenta previa',
            content: 'Es una de las principales causas de sangrado en la segunda mitad del embarazo. Una vez identificada se evitan los tactos vaginales, porque pueden desprender la placenta y provocar hemorragia, y el embarazo se resuelve por cesárea.',
          },
        ],
      },
      {
        id: 'ess-9',
        number: 9,
        title: 'Mola hidatiforme e incompatibilidad Rh',
        keyTerms: ['mola completa', 'mola parcial', 'triploidía', 'hCG', 'mola invasiva', 'coriocarcinoma', 'incompatibilidad Rh', 'inmunoglobulina anti-D'],
        blocks: [
          {
            type: 'paragraph',
            content: 'En la MOLA HIDATIFORME el trofoblasto prolifera de forma anormal: hay mucho tejido placentario y escaso o ningún tejido embrionario. Mola hidatiforme designa el tejido anómalo; embarazo molar, a la gestación que lo presenta.',
          },
          {
            type: 'comparison',
            title: 'Mola completa contra mola parcial',
            left: {
              title: 'Mola completa',
              items: [
                'Ovocito SIN material genético',
                'Un espermatozoide aporta su genoma, que se duplica: todo es PATERNO',
                'Solo tejido trofoblástico, sin embrión',
              ],
            },
            right: {
              title: 'Mola parcial',
              items: [
                'Ovocito con su genética normal',
                'Fallan las reacciones cortical y de zona: entran DOS espermatozoides',
                'TRIPLOIDÍA (tres juegos de cromosomas), predominio paterno',
                'Algo de tejido embrionario, no viable',
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cómo se sospecha y por qué se extirpa',
            content: 'El tejido trofoblástico produce hCG en exceso: vómitos intensos y repetidos, y un útero más grande que la edad gestacional (p. ej., embarazo de 12 semanas con útero de 20). El ultrasonido muestra el tejido anómalo. Al resolverlo se extirpa todo el tejido trofoblástico y se vigila que no queden restos, porque puede persistir e invadir: MOLA INVASIVA (invasión local) o CORIOCARCINOMA (maligno, con metástasis a pulmones y cerebro).',
          },
          {
            type: 'definition',
            title: 'Incompatibilidad Rh',
            content: 'Respuesta inmunitaria de una madre Rh negativo contra los eritrocitos de un feto Rh positivo, que se desencadena cuando la sangre fetal entra en contacto con la materna (hemorragias obstétricas o el parto).',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Prevención',
            content: 'Se administra inmunoglobulina anti-D (RhoGAM; en clase se llamó «vacuna») a las 28 semanas de gestación y dentro de las 72 horas posteriores al parto, para que la madre no desarrolle anticuerpos contra los eritrocitos fetales.',
          },
          {
            type: 'note',
            title: 'Gemelos',
            content: 'Dicigóticos: dos ovocitos fecundados por dos espermatozoides distintos. Monocigóticos: un solo cigoto cuyas células se separan en una etapa temprana. Un embarazo gemelar ectópico es poco frecuente y, si ocurre, suele perderse antes.',
          },
        ],
      },
    ],
  },
  {
    id: 'embriologia-tercera-semana',
    title: 'Tercera semana: gastrulación y disco trilaminar',
    subtitle: 'Línea primitiva, nodo e invaginación; FGF8, E-cadherina y BRACHYURY; membranas orofaríngea y cloacal y placa precordal; notocorda y alantoides; mapa del destino; crecimiento cefalocaudal; vellosidades secundarias y terciarias; holoprosencefalia, disgenesia caudal y teratoma sacrococcígeo',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '🧬',
    keyPoints: [
      'Tres eventos de la tercera semana: GASTRULACIÓN, formación de la NOTOCORDA y NEURULACIÓN. El EPIBLASTO es la fuente de las tres capas germinales.',
      'Días 15–16: aparece la LÍNEA PRIMITIVA en el epiblasto, con el NODO PRIMITIVO y la FOSITA PRIMITIVA en su extremo cefálico; marca los ejes cefálico-caudal y derecho-izquierdo.',
      'INVAGINACIÓN: células del epiblasto migran a la línea, toman forma de matraz y se deslizan por debajo. Las primeras forman el ENDODERMO, las siguientes el MESODERMO y las que quedan en la superficie, el ECTODERMO.',
      'El FGF8 suprime la E-CADHERINA y libera a las células para invaginarse; también induce BRACHYURY, que especifica el mesodermo.',
      'La NOTOCORDA se forma con células que migran por el nodo hacia cefálico por la línea media; su remanente en el adulto es el NÚCLEO PULPOSO.',
      'Desarrollo CEFALOCAUDAL: la región cefálica termina de migrar a mitad de la 3.ª semana y la caudal al final de la 4.ª. Vellosidad TERCIARIA (con capilares) al final de la 3.ª semana.',
    ],
    sections: [
      {
        id: 'ets-1',
        number: 1,
        title: 'Panorama y punto de partida',
        keyTerms: ['gastrulación', 'notocorda', 'neurulación', 'gástrula', 'cresta neural'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Al final de la segunda semana el embrión es un DISCO BILAMINAR: epiblasto hacia la cavidad amniótica e hipoblasto hacia el saco vitelino, sostenido por el mesodermo extraembrionario (somático sobre el amnios y el citotrofoblasto, esplácnico o visceral sobre el saco vitelino) y rodeado por el trofoblasto. En la tercera semana se convierte en un DISCO TRILAMINAR, también llamado GÁSTRULA.',
          },
          {
            type: 'list',
            title: 'Tres eventos de la tercera semana',
            items: [
              'Gastrulación: formación de las tres capas germinales.',
              'Formación de la notocorda, que induce el esqueleto axial.',
              'Neurulación: formación del tubo neural, inicio del sistema nervioso.',
            ],
          },
          {
            type: 'table',
            title: 'Derivados de cada capa (adelanto)',
            data: {
              headers: ['Capa', 'Algunos derivados'],
              rows: [
                ['Ectodermo', 'Lo que nos pone en contacto con el exterior: sistema nervioso central y periférico, epidermis, glándulas sebáceas, sudoríparas y mamarias, partes de los órganos de los sentidos, esmalte dental'],
                ['Mesodermo', 'Músculo, tendones, cartílago, hueso, aparato urogenital, células sanguíneas y parte de los vasos; es la capa con más derivados'],
                ['Endodermo', 'Epitelio del tubo digestivo y del aparato respiratorio, y glándulas anexas al digestivo'],
              ],
            },
          },
          {
            type: 'note',
            title: 'La «cuarta capa»',
            content: 'La CRESTA NEURAL nace del ectodermo y forma tantos derivados que se le considera una cuarta capa germinal; es clave para el esqueleto de la cara (viscerocráneo) y para estructuras del corazón.',
          },
          {
            type: 'list',
            title: 'Repaso de la implantación: cuatro fases',
            items: ['Eclosión: salida de la zona pelúcida.', 'Aposición: ligandos del blastocisto frente a receptores del endometrio receptivo.', 'Adhesión.', 'Invasión, a cargo del sincitiotrofoblasto.'],
          },
        ],
      },
      {
        id: 'ets-2',
        number: 2,
        title: 'Línea primitiva e invaginación',
        keyTerms: ['línea primitiva', 'nodo primitivo', 'fosita primitiva', 'invaginación', 'células en matraz'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Vista desde arriba, del disco solo se ve el epiblasto. Hacia los días 15–16 aparece en él una ranura, la LÍNEA PRIMITIVA, que se hace más profunda. En su extremo cefálico hay una pequeña elevación, el NODO PRIMITIVO, rodeada por una depresión, la FOSITA PRIMITIVA. La línea sirve de referencia para ubicar los extremos cefálico y caudal y los lados derecho e izquierdo, y el nodo dirige la gastrulación con múltiples señales.',
          },
          {
            type: 'steps',
            title: 'Invaginación: cómo se forman las capas',
            steps: [
              'Células del epiblasto migran hacia la línea primitiva, de LATERAL a MEDIAL y hacia el extremo cefálico.',
              'Toman forma de matraz, se desprenden del epiblasto y se deslizan por debajo de él.',
              'Las primeras desplazan al hipoblasto y forman el ENDODERMO embrionario.',
              'Otras se colocan entre el epiblasto y el endodermo: forman el MESODERMO.',
              'Las que permanecen en el epiblasto forman el ECTODERMO.',
            ],
          },
          {
            type: 'paragraph',
            content: 'Las células del mesodermo migran en sentido lateral y craneal hasta rebasar el borde del disco y contactar con el mesodermo extraembrionario que cubre el saco vitelino y el amnios.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'La única capa nueva',
            content: 'El ectodermo y el endodermo se forman sobre capas que ya existían (epiblasto e hipoblasto). El MESODERMO es la única capa que se forma «de cero» durante la gastrulación; por eso las fallas de la línea primitiva afectan sobre todo derivados mesodérmicos.',
          },
        ],
      },
      {
        id: 'ets-3',
        number: 3,
        title: 'Control molecular de la gastrulación',
        keyTerms: ['FGF8', 'E-cadherina', 'SNAIL', 'BRACHYURY'],
        blocks: [
          {
            type: 'steps',
            title: 'Cómo se liberan las células',
            steps: [
              'Las células de la propia línea primitiva sintetizan FGF8 (factor de crecimiento de fibroblastos 8); las del epiblasto tienen su receptor.',
              'El FGF8 actúa sobre el núcleo y suprime la E-CADHERINA, la proteína de unión que mantiene a las células del epiblasto unidas como un epitelio.',
              'Sin E-cadherina, las células quedan libres para invaginarse.',
              'El FGF8 también induce el factor de transcripción BRACHYURY, que especifica el mesodermo.',
            ],
          },
        ],
      },
      {
        id: 'ets-4',
        number: 4,
        title: 'Membranas orofaríngea y cloacal y placa precordal',
        keyTerms: ['membrana orofaríngea', 'placa precordal', 'membrana cloacal', 'prosencéfalo'],
        blocks: [
          {
            type: 'table',
            title: 'Tres estructuras del disco trilaminar',
            data: {
              headers: ['Estructura', 'Ubicación', 'Composición', 'Futuro'],
              rows: [
                ['Membrana orofaríngea', 'Extremo cefálico', 'Ectodermo y endodermo unidos, sin mesodermo', 'Sitio de la cavidad oral; separa la boca primitiva del intestino'],
                ['Placa precordal', 'Entre la membrana orofaríngea y el extremo de la notocorda', 'Mesodermo (las primeras células que migran por el nodo hacia cefálico)', 'Límite craneal de la notocorda; induce el prosencéfalo'],
                ['Membrana cloacal', 'Extremo caudal', 'Ectodermo y endodermo unidos, sin mesodermo', 'Comunicación del tubo digestivo con el exterior'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'El PROSENCÉFALO es la vesícula superior del tubo neural y formará los hemisferios cerebrales; le siguen el mesencéfalo y el rombencéfalo, que se continúa con la médula espinal.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué importan las membranas',
            content: 'La membrana orofaríngea y la cloacal son los dos únicos sitios donde el ectodermo y el endodermo quedan pegados sin mesodermo entre ellos. Más adelante se rompen para abrir la boca y el ano; si la membrana anal no se perfora queda un ano imperforado, una de las malformaciones que se buscan en la exploración del recién nacido.',
          },
        ],
      },
      {
        id: 'ets-5',
        number: 5,
        title: 'Formación de la notocorda',
        keyTerms: ['células prenotocordales', 'proceso notocordal', 'placa notocordal', 'conducto neuroentérico', 'notocorda definitiva', 'alantoides'],
        blocks: [
          {
            type: 'steps',
            title: 'Secuencia',
            steps: [
              'CÉLULAS PRENOTOCORDALES migran por el nodo primitivo hacia el extremo cefálico, limitadas a la LÍNEA MEDIA, hasta la placa precordal.',
              'Forman el PROCESO NOTOCORDAL, un cordón sólido que después adquiere una luz (canal notocordal).',
              'Sus células se intercalan en el endodermo y forman la PLACA NOTOCORDAL.',
              'Se abre temporalmente el CONDUCTO NEUROENTÉRICO, que comunica la cavidad amniótica con el saco vitelino.',
              'La placa notocordal prolifera, se desprende del endodermo y forma un cordón sólido: la NOTOCORDA DEFINITIVA.',
            ],
          },
          {
            type: 'paragraph',
            content: 'La notocorda definitiva queda debajo del tubo neural y es un centro de señalización: induce la columna vertebral (esqueleto axial) y el engrosamiento del ectodermo que formará el tubo neural.',
          },
          {
            type: 'definition',
            title: 'Alantoides (divertículo alantoentérico)',
            content: 'Aparece hacia el día 16 en la pared posterior del saco vitelino y se extiende hacia el pedículo de fijación. Se relaciona con la cloaca, de la que derivan la vejiga, la uretra y parte del conducto anal.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La notocorda en el adulto',
            content: 'Su remanente es el NÚCLEO PULPOSO de los discos intervertebrales, rodeado por el anillo fibroso; también quedan restos en el ligamento apical del diente del axis. Cuando el núcleo pulposo protruye a través del anillo se produce la hernia de disco, causa frecuente de lumbalgia con dolor irradiado a la pierna.',
          },
        ],
      },
      {
        id: 'ets-6',
        number: 6,
        title: 'Mapa del destino',
        keyTerms: ['mapa del destino', 'mesodermo paraxial', 'mesodermo intermedio', 'placa lateral', 'SNAIL'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El sitio por donde migra cada célula al atravesar el nodo o la línea primitiva determina en qué se convierte.',
          },
          {
            type: 'table',
            title: 'Región de migración y destino',
            data: {
              headers: ['Por dónde migra', 'Qué forma', 'Derivados'],
              rows: [
                ['Región craneal del nodo', 'Placa precordal y notocorda', 'Inducción del prosencéfalo y del esqueleto axial'],
                ['Bordes laterales del nodo y extremo craneal de la línea', 'Mesodermo PARAXIAL', 'Músculo, hueso, cartílago, tendones y ligamentos'],
                ['Región media de la línea', 'Mesodermo INTERMEDIO', 'Aparato urogenital'],
                ['Región caudal de la línea', 'Mesodermo de la PLACA LATERAL', 'Pared corporal; junto con ectodermo y endodermo, vísceras como el tubo digestivo'],
                ['Región más caudal de la línea', 'Mesodermo extraembrionario', 'Segunda fuente; la primera fue el hipoblasto (saco vitelino primitivo)'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Derecha e izquierda',
            content: 'El factor de transcripción SNAIL se restringe al mesodermo de la placa lateral DERECHA y probablemente regula los genes que establecen ese lado.',
          },
        ],
      },
      {
        id: 'ets-7',
        number: 7,
        title: 'Crecimiento del disco: patrón cefalocaudal',
        keyTerms: ['regresión de la línea primitiva', 'cefalocaudal'],
        blocks: [
          {
            type: 'table',
            title: 'Cuándo termina la migración',
            data: {
              headers: ['Región', 'Termina de migrar e inicia la diferenciación'],
              rows: [
                ['Cefálica', 'Mitad de la tercera semana'],
                ['Caudal', 'Final de la cuarta semana'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'La invaginación y la migración continúan hasta el final de la cuarta semana; después la línea primitiva hace REGRESIÓN: se acorta y desaparece. Por ese desfase el desarrollo es CEFALOCAUDAL: las estructuras craneales se diferencian mientras la gastrulación sigue en la región caudal. El patrón se mantiene durante todo el periodo embrionario y cerca de la primera mitad del fetal (la cabeza va adelante, y los miembros superiores se forman antes que los inferiores).',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El desfase en la clínica',
            content: 'Una falla tardía de la gastrulación compromete sobre todo lo caudal (columna lumbosacra, riñones, genitales, miembros inferiores) y respeta la cabeza, que ya se había formado. Es la lógica de la disgenesia caudal.',
          },
        ],
      },
      {
        id: 'ets-8',
        number: 8,
        title: 'Desarrollo del trofoblasto',
        keyTerms: ['vellosidad secundaria', 'vellosidad terciaria', 'sistema capilar velloso', 'cápsula citotrofoblástica', 'vellosidades troncales', 'espacios intervellosos'],
        blocks: [
          {
            type: 'table',
            title: 'Maduración de las vellosidades',
            data: {
              headers: ['Vellosidad', 'Cuándo', 'Qué tiene'],
              rows: [
                ['Primaria', 'Desde el día 13, inicio de la 3.ª semana', 'Núcleo de citotrofoblasto cubierto por sincitio'],
                ['Secundaria', 'Durante la 3.ª semana', 'Entra mesodermo extraembrionario al núcleo'],
                ['Terciaria (definitiva)', 'Final de la 3.ª semana', 'Aparecen capilares en el núcleo de mesodermo'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'Los capilares de las vellosidades terciarias forman el SISTEMA CAPILAR VELLOSO, que se conecta con los de la placa coriónica y del pedículo de fijación y luego con la circulación intraembrionaria. Son vasos del embrión, no de la madre. Así, cuando el corazón empieza a latir en la cuarta semana, ya puede llevar nutrientes y oxígeno.',
          },
          {
            type: 'list',
            title: 'Fijación al endometrio',
            items: [
              'CÁPSULA CITOTROFOBLÁSTICA EXTERNA: rodea todo el trofoblasto y fija con firmeza el saco coriónico al endometrio.',
              'Vellosidades TRONCALES o de anclaje: van de la placa coriónica a la DECIDUA BASAL, la zona donde se formará la placenta.',
              'Vellosidades LIBRES o terminales (flotantes): ramas laterales de las troncales; ahí ocurre el intercambio.',
              'ESPACIOS INTERVELLOSOS: los espacios entre vellosidades, llenos de sangre materna; son las antiguas lagunas del sincitio.',
              'Días 19–20: el embrión cuelga de la cápsula por un PEDÍCULO DE FIJACIÓN delgado, futuro cordón umbilical.',
            ],
          },
        ],
      },
      {
        id: 'ets-9',
        number: 9,
        title: 'Clínica de la gastrulación',
        keyTerms: ['teratógeno', 'holoprosencefalia', 'hipotelorismo', 'disgenesia caudal', 'sirenomelia', 'teratoma sacrococcígeo'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La gastrulación, y todo el periodo embrionario (semanas 3 a 8), es muy sensible a los TERATÓGENOS: agentes, casi siempre externos, que alteran el desarrollo de los órganos, como la radiación, el tabaco, el alcohol, algunas drogas y fármacos. El riesgo es mayor porque a esa edad muchas mujeres aún no saben que están embarazadas.',
          },
          {
            type: 'definition',
            title: 'Holoprosencefalia',
            content: 'Dosis altas de alcohol matan células de la región ANTERIOR DE LA LÍNEA MEDIA del disco, que según el mapa del destino forman el área óptica y el encéfalo anterior. El resultado es una falta de estructuras craneofaciales de la línea media: prosencéfalo pequeño, ventrículos laterales fusionados en uno solo y ojos muy juntos (HIPOTELORISMO). La cara va de un hipotelorismo leve a la falta de huesos nasales con labio y paladar hendidos, una probóscide en lugar de nariz, anoftalmia o un ojo único.',
          },
          {
            type: 'table',
            title: 'Formas de holoprosencefalia',
            data: {
              headers: ['Forma', 'Separación de los hemisferios', 'Pronóstico'],
              rows: [
                ['Alobar', 'Ninguna: un solo ventrículo', 'La más grave; la mayoría no sobrevive el primer año'],
                ['Semilobar', 'Solo en la parte posterior', 'Intermedio'],
                ['Lobar', 'Casi completa; fusión solo en una parte de los lóbulos frontales', 'Las formas leves pueden llegar a la edad adulta'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Disgenesia caudal (sirenomelia)',
            content: 'Se forma poco mesodermo en la región caudal, por ejemplo cuando la línea primitiva hace regresión antes de tiempo. Afecta miembros inferiores (hipoplasia y fusión, en «cola de sirena»), vértebras lumbosacras, riñones (agenesia renal), ano (imperforado) y genitales. Se asocia con DIABETES MATERNA descontrolada. La agenesia renal bilateral la hace, en general, incompatible con la vida.',
          },
          {
            type: 'definition',
            title: 'Teratoma sacrococcígeo',
            content: 'El escenario contrario: restos de la línea primitiva persisten en la región sacrococcígea. Son células PLURIPOTENCIALES que forman tumores con tejidos de las tres capas (músculo, cartílago, hueso, pelo, dientes, tejido nervioso). Otra fuente son células germinales primordiales que no llegaron a la cresta urogenital. Es el tumor congénito más frecuente del recién nacido (≈ 1 de cada 35 000 a 40 000 nacimientos) y predomina en niñas. Se trata con cirugía, a veces en varios tiempos.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Dos casos que se resuelven con la línea primitiva',
            content: 'Un embrión con cabeza normal y malformaciones caudales graves sugiere una regresión temprana de la línea primitiva: falta MESODERMO, y se nota más abajo porque esa región se forma después. Un recién nacido con una masa sacrococcígea que contiene tejido nervioso, cartílago y epitelio sugiere lo contrario: la línea primitiva persistió y dejó células pluripotenciales.',
          },
        ],
      },
    ],
  },
  {
    id: 'embriologia-periodo-embrionario',
    title: 'Periodo embrionario: derivados de las capas germinales',
    subtitle: 'Semanas 3 a 8: ectodermo (neuroectodermo, ectodermo superficial, placodas), neurulación y neuroporos, defectos del tubo neural y ácido fólico, cresta neural; mesodermo paraxial (somitas), intermedio y de la placa lateral; sangre, vasos y hemangiomas; endodermo y tubo intestinal; aspecto externo del segundo mes; teratógenos y medicamentos en el embarazo',
    colorKey: 'embriologia',
    categoria: 'Embriología',
    emoji: '🌿',
    keyPoints: [
      'PERIODO EMBRIONARIO u organogénesis: semanas 3 a 8; al final de la octava los principales sistemas ya están establecidos.',
      'ECTODERMO: NEUROECTODERMO (encéfalo, médula espinal, retina, neurohipófisis), ECTODERMO SUPERFICIAL (epidermis, pelo, uñas, glándulas de la piel y mamarias, adenohipófisis, esmalte, cristalino, epitelio sensitivo de nariz y oído) y CRESTA NEURAL ★',
      'Neurulación: el cierre empieza en la región cervical (5.º somita) y avanza en ambas direcciones; el NEUROPORO ANTERIOR cierra el día 25 y el POSTERIOR el día 28.',
      'Somitas: primer par el día 20, unos 3 pares por día, 42–44 pares al final de la 5.ª semana. ESCLEROTOMA: vértebras y costillas · MIOTOMA: músculo · DERMATOMA: dermis de la espalda ★',
      'Mesodermo INTERMEDIO: sistema urogenital (pronefros, mesonefros, metanefros y gónadas) · PLACA LATERAL: hoja somática (pared corporal, extremidades, serosas parietales) y esplácnica (pared intestinal, serosas viscerales) ★',
      'ENDODERMO: epitelio del tubo digestivo y del aparato respiratorio, vejiga y uretra; parénquima de tiroides, paratiroides, hígado y páncreas; estroma reticular de timo y amígdalas ★',
    ],
    sections: [
      {
        id: 'epe-1',
        number: 1,
        title: 'El periodo embrionario y el ectodermo',
        keyTerms: ['organogénesis', 'neuroectodermo', 'ectodermo superficial', 'adenohipófisis', 'neurohipófisis'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El PERIODO EMBRIONARIO u ORGANOGÉNESIS va de la tercera a la octava semana: las tres capas germinales se diferencian en tejidos y órganos, y al final de la octava semana los principales sistemas están establecidos y el aspecto externo del embrión es reconocible. Lo esencial es saber qué deriva de cada capa.',
          },
          {
            type: 'paragraph',
            content: 'El ECTODERMO forma lo que nos pone en contacto con el exterior y se divide en tres: NEUROECTODERMO, ECTODERMO SUPERFICIAL y CÉLULAS DE LA CRESTA NEURAL.',
          },
          {
            type: 'comparison',
            title: 'Derivados del ectodermo ★',
            left: {
              title: 'Neuroectodermo (tubo neural)',
              items: ['Encéfalo y médula espinal', 'Retina (desde la vesícula óptica)', 'Lóbulo posterior de la hipófisis (neurohipófisis)'],
            },
            right: {
              title: 'Ectodermo superficial',
              items: ['Epidermis, pelo y uñas', 'Glándulas de la piel y glándulas mamarias', 'Lóbulo anterior de la hipófisis (adenohipófisis)', 'Esmalte dental', 'Epitelio sensitivo de nariz y oído interno', 'Cristalino'],
            },
          },
          {
            type: 'note',
            title: 'Dos lóbulos, dos orígenes',
            content: 'La hipófisis tiene doble origen ectodérmico: la ADENOHIPÓFISIS viene del ectodermo superficial del techo de la boca primitiva y la NEUROHIPÓFISIS, del tubo neural.',
          },
        ],
      },
      {
        id: 'epe-2',
        number: 2,
        title: 'Neurulación',
        keyTerms: ['placa neural', 'pliegues neurales', 'surco neural', 'tubo neural', 'neuroporos', 'vesículas cerebrales'],
        blocks: [
          {
            type: 'steps',
            title: 'Del ectodermo al tubo neural',
            steps: [
              'La NOTOCORDA y el mesodermo precordal inducen el engrosamiento del ectodermo que tienen encima: la PLACA NEURAL (neuroectodermo).',
              'Sus bordes se elevan y forman los PLIEGUES NEURALES; entre ellos queda el SURCO NEURAL.',
              'Los pliegues se acercan a la línea media y se fusionan: se forma el TUBO NEURAL.',
              'La fusión empieza en la región cervical, a nivel del QUINTO SOMITA, y avanza hacia cefálico y hacia caudal.',
              'Mientras termina el cierre, los extremos quedan abiertos a la cavidad amniótica por los NEUROPOROS.',
            ],
          },
          {
            type: 'table',
            title: 'Cierre de los neuroporos',
            data: {
              headers: ['Neuroporo', 'Cierre'],
              rows: [
                ['Anterior (craneal)', 'Día 25, etapa de 18 a 20 somitas'],
                ['Posterior (caudal)', 'Día 28, etapa de 25 somitas'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'Cerrado el tubo, su extremo craneal se dilata en tres VESÍCULAS CEREBRALES PRIMARIAS en la cuarta semana: PROSENCÉFALO (cerebro anterior), MESENCÉFALO (medio) y ROMBENCÉFALO (posterior); la porción caudal, más estrecha, forma la médula espinal. En la quinta semana aparecen las vesículas secundarias.',
          },
        ],
      },
      {
        id: 'epe-3',
        number: 3,
        title: 'Defectos del tubo neural y ácido fólico',
        keyTerms: ['anencefalia', 'espina bífida', 'espina bífida oculta', 'ácido fólico', 'polaridad celular planar'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos defectos del cierre',
            left: { title: 'Anencefalia', items: ['Falla el cierre del NEUROPORO ANTERIOR', 'La mayor parte del encéfalo no se forma', 'Incompatible con la vida'] },
            right: { title: 'Espina bífida', items: ['Falla el cierre CAUDAL', 'Sobre todo lumbosacra', 'Grados variables de compromiso neurológico'] },
          },
          {
            type: 'paragraph',
            content: 'En la ESPINA BÍFIDA OCULTA el defecto queda cubierto por piel, a veces señalado por un mechón de pelo o una pequeña protuberancia, y suele no causar compromiso neurológico. En los defectos abiertos puede haber estructuras expuestas y daño neurológico; en casos seleccionados se considera la cirugía intrauterina.',
          },
          {
            type: 'list',
            title: 'Factores asociados',
            items: [
              'Mutaciones en la vía de POLARIDAD CELULAR PLANAR (genes VANGL), que orienta a las células durante la convergencia y extensión que alarga y cierra el tubo.',
              'Genes que establecen la línea media (en clase se mencionaron ZIC3 y LEFTY1).',
              'Algunos anticonvulsivos, como el ácido valproico.',
              'Deficiencia de folato.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Ácido fólico: cuánto y desde cuándo',
            content: 'Sin antecedentes: 400 µg diarios desde al menos un mes (en clase, tres meses) antes de la concepción y durante el embarazo. Con un embarazo o hijo previo afectado: 4 000 µg (4 mg) diarios desde un mes antes de intentar el embarazo y durante el primer trimestre; la GPC mexicana de control prenatal indica 5 mg en las pacientes de alto riesgo. Como el tubo neural se cierra hacia el día 28, a menudo antes de que se sepa del embarazo, la suplementación tiene que empezar antes de concebir.',
          },
        ],
      },
      {
        id: 'epe-4',
        number: 4,
        title: 'Células de la cresta neural',
        keyTerms: ['cresta neural', 'ruta ventral', 'ruta dorsal', 'melanocitos', 'tracto de salida', 'neuroblastoma'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Las CÉLULAS DE LA CRESTA NEURAL nacen en los bordes de los pliegues neurales; al cerrarse el tubo quedan en su techo y desde ahí migran por todo el embrión. Por la amplitud de sus derivados se les llama la «cuarta capa germinal».',
          },
          {
            type: 'comparison',
            title: 'Dos rutas en el tronco ★',
            left: {
              title: 'Ruta ventral (por la mitad anterior de cada somita)',
              items: ['Ganglios sensitivos (de la raíz dorsal)', 'Neuronas simpáticas', 'Neuronas entéricas', 'Células de Schwann', 'Células de la médula suprarrenal (adrenalina y noradrenalina)'],
            },
            right: {
              title: 'Ruta dorsal (por la dermis)',
              items: ['Melanocitos de la piel', 'Melanocitos de los folículos pilosos'],
            },
          },
          {
            type: 'list',
            title: 'En la cabeza y el corazón',
            items: [
              'Huesos y cartílagos de la cara y del cráneo (esqueleto craneofacial) y estructuras de los arcos faríngeos.',
              'Neuronas de ganglios craneales, glía y melanocitos.',
              'El TRACTO DE SALIDA del corazón, que separa la aorta de la arteria pulmonar.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cara y corazón juntos',
            content: 'Como la cresta neural forma a la vez la cara y el tracto de salida cardiaco, sus alteraciones suelen combinar defectos craneofaciales y cardiopatías, como en la deleción 22q11.2. De sus derivados nacen también tumores: el MELANOMA (melanocitos) y el NEUROBLASTOMA (sistema nervioso simpático y médula suprarrenal), uno de los tumores sólidos más frecuentes de la infancia.',
          },
        ],
      },
      {
        id: 'epe-5',
        number: 5,
        title: 'Placodas',
        keyTerms: ['placoda ótica', 'vesícula ótica', 'placoda del cristalino', 'placoda nasal'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Las PLACODAS son engrosamientos localizados del ectodermo superficial de la región cefálica.',
          },
          {
            type: 'table',
            title: 'Placodas y sus derivados',
            data: {
              headers: ['Placoda', 'Qué forma'],
              rows: [
                ['Ótica (oído)', 'Se invagina y forma la VESÍCULA ÓTICA: estructuras de la audición y el equilibrio'],
                ['Del cristalino', 'Se invagina y en la quinta semana forma el CRISTALINO, que enfoca las imágenes'],
                ['Nasal', 'Epitelio sensitivo de la nariz'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Óptica no es ótica',
            content: '«Ótica» se refiere al oído; «óptica», a la vista. La retina no viene de una placoda: se forma del neuroectodermo, a partir de la vesícula óptica que sale del encéfalo. En clase ambos términos se usaron de forma intercambiable en algunos momentos.',
          },
        ],
      },
      {
        id: 'epe-6',
        number: 6,
        title: 'Mesodermo paraxial: somitas',
        keyTerms: ['somitómeros', 'somitas', 'esclerotoma', 'miotoma', 'dermatoma', 'dermomiotoma'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hacia el día 17 el mesodermo se organiza en PARAXIAL, INTERMEDIO y de la PLACA LATERAL. El paraxial se segmenta primero en SOMITÓMEROS: en la cabeza se quedan así (los somitómeros 1 a 7 forman el mesénquima y la musculatura de la cabeza), y desde la región occipital hacia caudal se organizan en SOMITAS, bloques a ambos lados del tubo neural y la notocorda.',
          },
          {
            type: 'table',
            title: 'Cronología de los somitas',
            data: {
              headers: ['Momento', 'Somitas'],
              rows: [
                ['Día 20', 'Primer par, en la región occipital'],
                ['Cada día', 'Unos 3 pares nuevos, en sentido craneocaudal'],
                ['Final de la 5.ª semana', '42 a 44 pares: 4 occipitales, 8 cervicales, 12 torácicos, 5 lumbares, 5 sacros y 8–10 coccígeos'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'El primer par occipital y los últimos 5 a 7 coccígeos desaparecen; el resto forma el esqueleto axial. Como aparecen a un ritmo constante, el número de somitas sirve para estimar la edad del embrión.',
          },
          {
            type: 'table',
            title: 'Qué forma cada parte del somita ★',
            data: {
              headers: ['Parte', 'Derivados'],
              rows: [
                ['ESCLEROTOMA (región medial)', 'Sus células vuelven a ser mesenquimatosas y rodean el tubo neural y la notocorda: VÉRTEBRAS y COSTILLAS, cartílago y tendones'],
                ['MIOTOMA', 'Músculo esquelético segmentario; las células ventrolaterales migran a la placa lateral y forman los músculos de la pared abdominal (oblicuos y transverso) y casi todos los de las extremidades'],
                ['DERMATOMA', 'Dermis, sobre todo la de la espalda'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Los dermatomas en la clínica',
            content: 'Cada miotoma y dermatoma conserva la inervación de su segmento de origen aunque sus células migren. Por eso existen los DERMATOMAS como mapa de la piel: una compresión medular o radicular causa pérdida de sensibilidad en un dermatoma concreto, y en el HERPES ZÓSTER las vesículas dolorosas aparecen en franja siguiendo el dermatoma del ganglio donde se reactivó el virus.',
          },
        ],
      },
      {
        id: 'epe-7',
        number: 7,
        title: 'Mesodermo intermedio y de la placa lateral',
        keyTerms: ['nefrotomas', 'cordón nefrógeno', 'pronefros', 'mesonefros', 'metanefros', 'celoma intraembrionario', 'hoja somática', 'hoja esplácnica'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El MESODERMO INTERMEDIO forma el SISTEMA UROGENITAL. En las regiones cervical y torácica alta se segmenta en NEFROTOMAS; más abajo forma una masa continua, el CORDÓN NEFRÓGENO. De él salen tres sistemas renales sucesivos: el PRONEFROS (temporal), el MESONEFROS (temporal; parte de él forma conductos genitales masculinos) y el METANEFROS, que es el riñón definitivo. También forma las GÓNADAS.',
          },
          {
            type: 'paragraph',
            content: 'Hacia el día 17 aparece en la PLACA LATERAL una hendidura, el CELOMA o cavidad intraembrionaria, que la divide en dos hojas.',
          },
          {
            type: 'table',
            title: 'Las dos hojas de la placa lateral ★',
            data: {
              headers: ['Hoja', 'Junto a', 'Derivados'],
              rows: [
                ['SOMÁTICA o parietal', 'Ectodermo', 'Pared corporal; dermis de la pared y las extremidades; huesos y tejido conectivo de las extremidades y el esternón; peritoneo parietal y capas parietales de pleura y pericardio'],
                ['ESPLÁCNICA o visceral', 'Endodermo', 'Pared del tubo intestinal; peritoneo visceral y capas viscerales de las serosas alrededor de pulmones y corazón'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'Con los pliegues laterales, el disco plano se dobla como un «taquito»: sus bordes se acercan y se fusionan en la línea media y cierran la pared ventral del cuerpo, a la vez que el plegamiento cefalocaudal.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cuando la pared no cierra',
            content: 'Si los pliegues laterales no se fusionan bien, la pared abdominal queda abierta: en la GASTROSQUISIS las asas intestinales salen sin cubierta, a un lado del ombligo. Se detecta en el ultrasonido prenatal y requiere cirugía al nacer.',
          },
        ],
      },
      {
        id: 'epe-8',
        number: 8,
        title: 'Sangre y vasos',
        keyTerms: ['vasculogénesis', 'angiogénesis', 'islotes sanguíneos', 'hemangioblasto', 'VEGF', 'región aortogonadomesonéfrica'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos formas de hacer vasos',
            left: { title: 'Vasculogénesis', items: ['Vasos nuevos a partir de células precursoras (angioblastos)', 'Así se forman la aorta dorsal y las venas cardinales'] },
            right: { title: 'Angiogénesis', items: ['Vasos nuevos que brotan de vasos ya existentes'] },
          },
          {
            type: 'paragraph',
            content: 'En la tercera semana aparecen ISLOTES SANGUÍNEOS en la pared del saco vitelino, formados por HEMANGIOBLASTOS, precursores comunes de vasos y células sanguíneas; el FGF2 (factor de crecimiento de fibroblastos 2) induce a esas células a diferenciarse en hemangioblastos. Los hemangioblastos centrales dan células troncales hematopoyéticas; los periféricos, angioblastos que forman el endotelio, estimulados por el VEGF del mesodermo vecino. Esta primera sangre es transitoria.',
          },
          {
            type: 'steps',
            title: 'Hematopoyesis definitiva',
            steps: [
              'Las células troncales definitivas nacen del mesodermo que rodea la aorta, junto al mesonefros: la REGIÓN AORTOGONADOMESONÉFRICA.',
              'Colonizan el HÍGADO, principal órgano hematopoyético del segundo al séptimo mes.',
              'Hacia el séptimo mes colonizan la MÉDULA ÓSEA, el tejido hematopoyético definitivo.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Hemangiomas capilares',
            content: 'Son agrupaciones anómalas y muy densas de capilares; compiten con el teratoma sacrococcígeo como el tumor más frecuente del recién nacido (el Langman los estima en cerca de 10 % de los nacimientos; los estudios recientes del hemangioma infantil, en 4 a 5 %). Aparecen sobre todo en la cara y la cabeza. Los LOCALIZADOS suelen crecer unos meses y luego involucionar solos; los DIFUSOS dan más complicaciones (ulceración, cicatrices, obstrucción de la vía aérea en los mandibulares) y son los que se tratan. En estas lesiones se expresa con intensidad el IGF2 (factor de crecimiento 2 parecido a la insulina), que podría promover el crecimiento anómalo de los vasos.',
          },
        ],
      },
      {
        id: 'epe-9',
        number: 9,
        title: 'Endodermo',
        keyTerms: ['intestino primitivo', 'membrana bucofaríngea', 'conducto vitelino', 'membrana cloacal', 'proctodeo', 'parénquima'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El ENDODERMO cubre la cara ventral del embrión y forma el techo del saco vitelino. Con el plegamiento queda incorporado como el TUBO INTESTINAL PRIMITIVO, que tiene tres partes.',
          },
          {
            type: 'table',
            title: 'Intestino primitivo',
            data: {
              headers: ['Porción', 'Límite o comunicación'],
              rows: [
                ['Anterior', 'Membrana bucofaríngea, que se rompe en la 4.ª semana y comunica la boca primitiva (estomodeo, ectodérmico) con el intestino'],
                ['Medio', 'Comunicado con el saco vitelino por el CONDUCTO VITELINO'],
                ['Posterior', 'Membrana cloacal, que se rompe en la 7.ª semana y abre el ano; la parte inferior del conducto anal viene del proctodeo (ectodérmico)'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Derivados del endodermo ★',
            items: [
              'Revestimiento epitelial del tubo digestivo, del aparato respiratorio, de la vejiga y la uretra, de la cavidad timpánica y la trompa auditiva (de Eustaquio).',
              'PARÉNQUIMA (tejido funcional) de tiroides, paratiroides, hígado y páncreas.',
              'ESTROMA RETICULAR de las amígdalas y el timo.',
            ],
          },
          {
            type: 'paragraph',
            content: 'Hacia la quinta semana el conducto vitelino, la alantoides y los vasos umbilicales quedan reunidos en la región umbilical. El SACO VITELINO nutre al embrión muy temprano, forma las primeras células sanguíneas y alberga en su pared posterior las CÉLULAS GERMINALES PRIMORDIALES, que migran después a las gónadas.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El conducto vitelino que no desaparece',
            content: 'Si el conducto vitelino persiste en parte, queda el DIVERTÍCULO DE MECKEL en el íleon, la anomalía congénita más frecuente del tubo digestivo. La mayoría no da síntomas, pero puede sangrar o inflamarse y simular una apendicitis.',
          },
          {
            type: 'note',
            title: 'Alantoides y uraco',
            content: 'La alantoides aparece hacia el día 16 y participa en la formación de la cloaca, de la que derivan la vejiga, la uretra y parte del conducto anal. Su porción que va de la vejiga al ombligo se oblitera y forma el URACO, que en el adulto queda como el LIGAMENTO UMBILICAL MEDIO, entre la vejiga y la pared abdominal.',
          },
        ],
      },
      {
        id: 'epe-10',
        number: 10,
        title: 'Resumen: derivados y cronología',
        keyTerms: ['derivados de las capas germinales'],
        blocks: [
          {
            type: 'table',
            title: 'Derivados de las capas germinales ★',
            data: {
              headers: ['Capa', 'Derivados principales'],
              rows: [
                ['Neuroectodermo', 'Encéfalo, médula espinal, retina, neurohipófisis'],
                ['Ectodermo superficial', 'Epidermis, pelo, uñas, glándulas de la piel y mamarias, adenohipófisis, esmalte, cristalino, epitelio sensitivo de nariz y oído'],
                ['Cresta neural', 'Ganglios sensitivos, neuronas simpáticas y entéricas, células de Schwann, médula suprarrenal, melanocitos, esqueleto craneofacial, tracto de salida cardiaco'],
                ['Mesodermo paraxial', 'Somitas: vértebras y costillas, músculo esquelético, dermis de la espalda'],
                ['Mesodermo intermedio', 'Riñones (pronefros, mesonefros, metanefros) y gónadas'],
                ['Placa lateral somática', 'Pared corporal, extremidades (hueso y tejido conectivo), esternón, serosas parietales'],
                ['Placa lateral esplácnica', 'Pared del tubo intestinal, serosas viscerales'],
                ['Mesodermo (hemangioblastos)', 'Células sanguíneas y vasos'],
                ['Endodermo', 'Epitelio digestivo y respiratorio, vejiga, uretra, cavidad timpánica; parénquima de tiroides, paratiroides, hígado y páncreas; estroma de timo y amígdalas'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Cronología',
            data: {
              headers: ['Momento', 'Evento'],
              rows: [
                ['Día 16', 'Alantoides'],
                ['Día 17', 'Mesodermo paraxial, intermedio y placa lateral; inicio del celoma'],
                ['Día 20', 'Primer par de somitas'],
                ['3.ª semana', 'Islotes sanguíneos en el saco vitelino'],
                ['Día 25', 'Cierre del neuroporo anterior'],
                ['Día 28', 'Cierre del neuroporo posterior'],
                ['4.ª semana', 'Vesículas cerebrales primarias; ruptura de la membrana bucofaríngea'],
                ['5.ª semana', 'Vesículas secundarias; cristalino; 42–44 pares de somitas'],
                ['7.ª semana', 'Ruptura de la membrana cloacal'],
                ['8.ª semana', 'Principales sistemas establecidos'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Estructuras con doble origen',
            content: 'La PIEL tiene epidermis ECTODÉRMICA y dermis MESODÉRMICA (la de la espalda viene del dermatoma). El PULMÓN tiene epitelio ENDODÉRMICO, pero su tejido conectivo, cartílago y músculo liso son MESODÉRMICOS. Los VASOS se forman del mesodermo esplácnico y el RIÑÓN, del mesodermo intermedio.',
          },
        ],
      },
      {
        id: 'epe-11',
        number: 11,
        title: 'Aspecto externo durante el segundo mes',
        keyTerms: ['longitud cefalocaudal', 'yemas de las extremidades', 'radios digitales', 'apoptosis interdigital'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Al final de la cuarta semana, con unos 28 somitas, lo más visible del embrión son los SOMITAS y los ARCOS FARÍNGEOS. En el segundo mes contar somitas se vuelve difícil, así que la edad se estima con la LONGITUD CEFALOCAUDAL (LCC): la distancia del vértex del cráneo al punto medio entre los ápices de las nalgas, en milímetros. El aspecto cambia por el crecimiento de la cabeza y la formación de las extremidades, la cara, los oídos, la nariz y los ojos.',
          },
          {
            type: 'table',
            title: 'Longitud cefalocaudal y edad',
            data: {
              headers: ['LCC (mm)', 'Edad aproximada'],
              rows: [
                ['5–8', '5 semanas'],
                ['10–14', '6 semanas'],
                ['17–22', '7 semanas'],
                ['28–30', '8 semanas'],
              ],
            },
          },
          {
            type: 'steps',
            title: 'Formación de las extremidades',
            steps: [
              'Inicio de la quinta semana: aparecen las YEMAS de las extremidades superiores, dorsales a la protuberancia pericárdica, del 4.º somita cervical a los primeros torácicos; por eso las inerva el plexo braquial.',
              'Poco después aparecen las inferiores, justo por debajo del cordón umbilical, a la altura de los somitas lumbares y sacros superiores.',
              'El extremo distal se aplana y una constricción lo separa del segmento proximal.',
              'Aparecen cuatro surcos radiales (RADIOS) que separan cinco zonas: los futuros dedos, primero en la mano y luego en el pie.',
              'Las células entre los radios mueren por APOPTOSIS, mediada sobre todo por las proteínas morfogenéticas óseas (BMP), y los dedos se separan.',
              'Una segunda constricción divide la parte proximal: se reconocen los tres segmentos de la extremidad adulta.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Para qué sirve la LCC',
            content: 'La longitud cefalocaudal medida por ultrasonido en el primer trimestre es la forma más exacta de fechar un embarazo. Y si la apoptosis interdigital falla, los dedos quedan unidos: es la SINDACTILIA, una de las malformaciones más frecuentes de las extremidades.',
          },
        ],
      },
      {
        id: 'epe-12',
        number: 12,
        title: 'Teratógenos y medicamentos en el embarazo',
        keyTerms: ['periodo de susceptibilidad', 'teratógenos', 'automedicación', 'herbolaria'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El periodo embrionario es el más sensible a los teratógenos, sobre todo las semanas 3 y 4, cuando se forman las capas y empiezan los órganos; muchas mujeres aún no saben que están embarazadas. Por eso se evitan el alcohol, el tabaco, las drogas y la AUTOMEDICACIÓN.',
          },
          {
            type: 'list',
            title: 'Puntos prácticos',
            items: [
              'Algunas plantas son abortivas o inducen contracciones: el té de RUDA es el ejemplo clásico. Cualquier herbolaria durante el embarazo debe consultarse con el médico.',
              'El PARACETAMOL es el analgésico de elección en el embarazo, a la dosis eficaz más baja y por el menor tiempo.',
              'Los AINE (ibuprofeno, naproxeno, clonixinato de lisina) se evitan desde la semana 20, porque pueden disminuir el líquido amniótico y cerrar antes de tiempo el conducto arterioso del feto.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Preguntar siempre',
            content: 'En México es común tomar medicamentos o tés sin receta. En toda consulta de una mujer en edad reproductiva conviene preguntar si puede estar embarazada antes de indicar un fármaco, y en toda embarazada, qué medicamentos, remedios y tés está tomando.',
          },
        ],
      },
    ],
  },
]
