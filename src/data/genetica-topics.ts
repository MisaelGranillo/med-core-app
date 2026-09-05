import type { Topic } from '../types'

// Genética Básica (UAD · GB01003) — Semana 1, Clases 1–3 (Dra. Cazares):
// conceptos e historia, leyes de Mendel, y la molécula del ADN y el código genético.
export const geneticaTopics: Topic[] = [
  {
    id: 'genetica-conceptos',
    title: 'Conceptos base e historia de la genética',
    subtitle: 'El vocabulario de la herencia, los tipos de dominancia y los hitos históricos',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'Gen = unidad de herencia; locus = su posición en el cromosoma; alelo = cada variante de un gen.',
      'Homocigoto = dos alelos iguales; heterocigoto = dos alelos distintos.',
      'Genotipo = la dotación génica; fenotipo = el rasgo observable (resultado del genotipo y el ambiente).',
      'Haploide (n) = una sola copia de cada cromosoma (gametos); diploide (2n) = dos copias (células somáticas).',
      'Dominancia: completa (un alelo enmascara al otro), incompleta (mezcla intermedia) y codominancia (se expresan ambos).',
      'Epigenética: el mismo genotipo da fenotipos distintos según el ambiente (gemelas idénticas).',
      'Hitos: Hooke (célula), Mendel (redescubierto en 1900), Watson y Crick (1953) sobre la foto de Rosalind Franklin.',
      'El genoma humano se terminó de secuenciar el 24 de abril de 2003.',
    ],
    sections: [
      {
        id: 'gcon-1',
        number: 1,
        title: 'Enfoque del módulo',
        keyTerms: ['genética clásica', 'ADN', 'ARN', 'cromosomas'],
        blocks: [
          {
            type: 'note',
            title: 'Genética clásica (Semana 1)',
            content:
              'El primer mes se centra en la genética clásica: ADN, ARN, cromosomas y las patologías asociadas. No hay libro base único; la docente sugiere como apoyo «Biología molecular de la célula» (Bruce Alberts). Nota: esta semana es parcial —la Clase 3 (molécula del ADN y código genético) se imparte después—.',
          },
        ],
      },
      {
        id: 'gcon-2',
        number: 2,
        title: 'Conceptos base',
        keyTerms: ['cromosoma', 'gen', 'locus', 'alelo', 'genotipo', 'fenotipo', 'haploide', 'diploide'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La genética estudia cómo se guarda y se transmite la información hereditaria. El ADN se empaqueta con proteínas en cromosomas; cada tramo del ADN que codifica un producto es un gen, y la posición fija que ese gen ocupa en el cromosoma es su locus. De un mismo gen existen variantes —los alelos—. Como heredamos un juego cromosómico de cada progenitor, las células somáticas son diploides (dos alelos por gen): si los dos alelos son iguales el individuo es homocigoto y, si difieren, heterocigoto. Los gametos, en cambio, son haploides (un solo juego), de modo que al unirse restauran la dotación diploide. El conjunto de alelos que se posee es el genotipo, pero lo que se observa es el fenotipo, que surge de la interacción del genotipo con el ambiente. Dominar este vocabulario es lo que permite después leer cualquier cruce.',
          },
          {
            type: 'table',
            title: 'El vocabulario de la herencia',
            data: {
              headers: ['Término', 'Definición'],
              rows: [
                ['Cromosoma', 'Estructura de ADN condensado que porta los genes; el humano tiene 46 (23 pares).'],
                ['Gen', 'Unidad de herencia: segmento de ADN que codifica un producto (proteína o ARN).'],
                ['Locus', 'La posición fija que ocupa un gen en el cromosoma.'],
                ['Alelo', 'Cada una de las variantes de un mismo gen (p. ej. A o a).'],
                ['Homocigoto', 'Los dos alelos son iguales (AA o aa).'],
                ['Heterocigoto', 'Los dos alelos son distintos (Aa).'],
                ['Genotipo', 'La combinación de alelos que tiene el individuo.'],
                ['Fenotipo', 'El rasgo observable, resultado del genotipo y su interacción con el ambiente.'],
                ['Haploide (n)', 'Una sola copia de cada cromosoma: los gametos.'],
                ['Diploide (2n)', 'Dos copias de cada cromosoma: las células somáticas.'],
              ],
            },
          },
        ],
      },
      {
        id: 'gcon-3',
        number: 3,
        title: 'Tipos de dominancia',
        keyTerms: ['dominancia completa', 'dominancia incompleta', 'codominancia', 'heterocromía'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La dominancia describe qué se ve en el heterocigoto (Aa), es decir, cómo se "relacionan" los dos alelos al expresarse. No es una propiedad del gen en abstracto, sino de la pareja concreta de alelos y del rasgo que producen. En la dominancia completa, el alelo dominante fabrica suficiente producto para que el heterocigoto sea indistinguible del homocigoto dominante (el recesivo queda enmascarado). En la incompleta, ninguno domina del todo y el producto intermedio da un fenotipo mezclado. En la codominancia, ambos alelos se expresan a la vez y por separado, de modo que se ven los dos rasgos simultáneamente. Distinguirlas importa porque cambian las proporciones esperadas y explican patrones clínicos como los grupos sanguíneos o la heterocromía.',
          },
          {
            type: 'list',
            title: 'Cómo se expresan los alelos del heterocigoto',
            items: [
              'Dominancia completa: el alelo dominante enmascara por completo al recesivo (el heterocigoto se ve como el dominante).',
              'Dominancia incompleta: el heterocigoto muestra un fenotipo intermedio (mezcla), como la flor rosa de un cruce rojo × blanco.',
              'Codominancia: ambos alelos se expresan a la vez y por separado (p. ej. el grupo sanguíneo AB, el pelaje moteado del ganado).',
              'La heterocromía (ojos de distinto color) ilustra estas variantes de expresión.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Epigenética',
            content:
              'Con un genotipo idéntico, el ambiente puede cambiar el fenotipo: es la epigenética. Dos gemelas idénticas expuestas a climas, estrés o hábitos distintos terminan con rasgos diferentes, sin que su ADN haya cambiado.',
          },
        ],
      },
      {
        id: 'gcon-4',
        number: 4,
        title: 'Historia de la genética',
        keyTerms: ['Hooke', 'Mendel', 'Watson y Crick', 'Rosalind Franklin', 'genoma humano'],
        blocks: [
          {
            type: 'table',
            title: 'Hitos que hay que recordar',
            data: {
              headers: ['Año / autor', 'Aporte'],
              rows: [
                ['Robert Hooke', 'Acuñó el término «célula» al observar corcho al microscopio.'],
                ['Charles Darwin', 'Teoría de la evolución por selección natural (contexto de la herencia).'],
                ['Gregor Mendel', 'Leyes de la herencia con guisantes; ignorado en su época, redescubierto en 1900.'],
                ['Rosalind Franklin (1952)', 'Photo 51: la imagen de difracción de rayos X que reveló la doble hélice del ADN.'],
                ['Watson y Crick (1953)', 'Modelo de la doble hélice del ADN (a partir de la foto de Franklin).'],
                ['24 de abril de 2003', 'Se completa la secuenciación del genoma humano.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'historia',
            title: 'La foto 51 de Rosalind Franklin',
            content:
              'Watson y Crick usaron la fotografía de difracción de Rosalind Franklin (Photo 51, 1952) para deducir la estructura del ADN sin darle crédito. Es el caso histórico más citado de una contribución científica invisibilizada.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-mendel',
    title: 'Las leyes de Mendel',
    subtitle: 'Uniformidad, segregación (3:1), transmisión independiente (9:3:3:1) y herencia mitocondrial',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🫛',
    keyPoints: [
      '1.ª ley (uniformidad): AA × aa → toda la F1 es uniforme y muestra el fenotipo dominante.',
      '2.ª ley (segregación): Aa × Aa → el recesivo reaparece en la F2 en proporción 3:1.',
      '3.ª ley (transmisión independiente): un dihíbrido AaBb × AaBb da 9:3:3:1 (16 combinaciones).',
      'El cuadro de Punnett predice las proporciones cruzando los gametos de cada progenitor.',
      'Grupos sanguíneos: padres A y O NO pueden tener un hijo AB (útil en pruebas de paternidad).',
      'La heterocromía se explica por dominancia incompleta y codominancia.',
      'El ADN mitocondrial se hereda SOLO por vía materna (la cola del espermatozoide se desprende).',
    ],
    sections: [
      {
        id: 'gmen-1',
        number: 1,
        title: 'Mendel, el padre de la genética',
        keyTerms: ['Gregor Mendel', 'guisantes', 'razas puras'],
        blocks: [
          {
            type: 'note',
            title: 'Contexto',
            content:
              'Gregor Mendel dedujo las leyes de la herencia con cruces de guisantes (chícharos). Su trabajo se reconoció hasta 1900, al redescubrirse. Sus tres leyes describen cómo se transmiten los alelos de una generación a otra.',
          },
        ],
      },
      {
        id: 'gmen-2',
        number: 2,
        title: 'Las tres leyes',
        keyTerms: ['uniformidad', 'segregación', 'transmisión independiente', '3:1', '9:3:3:1'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Las tres leyes se entienden a partir de un hecho: durante la meiosis, los dos alelos de cada gen se SEPARAN y cada gameto recibe solo uno (al azar). Por eso un cruce de razas puras (AA × aa) da una F1 toda Aa —uniforme y con el fenotipo dominante— (1.ª ley). Al cruzar esos heterocigotos (Aa × Aa), cada uno aporta A o a con igual probabilidad, y la combinación al azar reconstruye 1 AA : 2 Aa : 1 aa; como AA y Aa se ven igual, el fenotipo sale 3:1 y reaparece el recesivo (2.ª ley). Si seguimos dos genes a la vez y están en cromosomas distintos, se reparten de forma independiente, y el dihíbrido AaBb × AaBb combina las dos proporciones 3:1 en 16 casillas → 9:3:3:1 (3.ª ley). El cuadro de Punnett no es más que la forma visual de contar esas combinaciones.',
          },
          {
            type: 'table',
            title: 'Ley · cruce · proporción',
            data: {
              headers: ['Ley', 'Cruce', 'Resultado'],
              rows: [
                ['1.ª — Uniformidad', 'Razas puras AA × aa', 'F1 uniforme, fenotipo dominante (todos Aa).'],
                ['2.ª — Segregación', 'Heterocigotos Aa × Aa', 'El recesivo reaparece: fenotipos 3:1 (genotipos 1:2:1).'],
                ['3.ª — Transmisión independiente', 'Dihíbrido AaBb × AaBb', 'Los genes se heredan por separado: 9:3:3:1 (16 combinaciones).'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Cuadro de Punnett',
            content: 'Tabla que cruza los gametos posibles de cada progenitor para predecir los genotipos de la descendencia y sus proporciones. — Cuadro de Punnett.',
          },
        ],
      },
      {
        id: 'gmen-3',
        number: 3,
        title: 'Grupos sanguíneos y paternidad',
        keyTerms: ['grupo sanguíneo', 'codominancia', 'paternidad'],
        blocks: [
          {
            type: 'note',
            content:
              'El grupo sanguíneo ABO no sigue la variabilidad mendeliana amplia (hay codominancia entre A y B, y O recesivo). Por eso es útil en pruebas de paternidad para EXCLUIR: unos padres A y O no pueden tener un hijo AB, porque ninguno aporta el alelo B.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Paternidad por grupo sanguíneo',
            content:
              'El grupo sanguíneo sirve para descartar una paternidad, no para confirmarla: si el patrón de alelos del hijo es imposible con los de los padres (p. ej. hijo AB de padres A y O), se excluye. La confirmación requiere pruebas de ADN.',
          },
        ],
      },
      {
        id: 'gmen-4',
        number: 4,
        title: 'Herencia mitocondrial',
        keyTerms: ['ADN mitocondrial', 'herencia materna', 'linaje'],
        blocks: [
          {
            type: 'note',
            content:
              'El ADN mitocondrial se hereda solo por vía materna: al fecundar, la cola del espermatozoide (que lleva sus mitocondrias) se desprende y no entra en el óvulo. Todas las mitocondrias del cigoto vienen de la madre.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Linajes por ADN mitocondrial',
            content:
              'Como el ADN mitocondrial pasa intacto de madre a hijos, permite rastrear linajes maternos a lo largo de generaciones y estudiar enfermedades mitocondriales, que siempre se heredan por la madre.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-adn',
    title: 'La molécula del ADN y el código genético',
    subtitle: 'Estructura de la doble hélice, apareamiento de bases, codones y empaquetamiento en el núcleo',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'Nucleótido = fosfato + desoxirribosa (azúcar) + base nitrogenada; es la unidad del ADN.',
      'El esqueleto externo es azúcar-fosfato unido por enlaces fosfodiéster; las bases apuntan hacia el interior.',
      'Las dos cadenas son antiparalelas: una va 5′→3′ y la complementaria 3′→5′.',
      'Apareamiento: A–T con 2 puentes de hidrógeno; G–C con 3 (siempre una purina con una pirimidina).',
      'Purinas (doble anillo): adenina y guanina; pirimidinas (un anillo): timina y citosina.',
      'Codón = 3 bases (64 combinaciones); en el ARN la timina se sustituye por uracilo (U).',
      'Codón de inicio: AUG (metionina); codones de paro: UAA, UAG y UGA.',
      'El ADN (~2 m por célula) se empaqueta en nucleosomas: nucleótido → ADN → nucleosoma → cromatina → cromosoma.',
    ],
    sections: [
      {
        id: 'gadn-1',
        number: 1,
        title: 'Estructura de la doble hélice',
        keyTerms: ['doble hélice', 'nucleótido', 'desoxirribosa', 'fosfodiéster', 'antiparalelas', "5′→3′"],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El ADN es una escalera de caracol (doble hélice), un modelo que Watson y Crick propusieron en 1953 a partir de la imagen de difracción de rayos X (Photo 51) de Rosalind Franklin (visto en la Clase 1). Sus dos largueros son un esqueleto de azúcar y fosfato que se repite, y sus peldaños son las bases nitrogenadas mirando hacia el interior. La pieza que se repite es el nucleótido: un grupo fosfato + el azúcar desoxirribosa + una base nitrogenada. Los nucleótidos se encadenan porque el fosfato de uno se une al azúcar del siguiente por un enlace fosfodiéster, que forma el larguero. Ese azúcar —la desoxirribosa— es el que da nombre al ácido DESOXIrribonucleico.',
          },
          {
            type: 'definition',
            title: 'Nucleótido',
            content: 'La unidad estructural del ADN: un grupo fosfato + el azúcar desoxirribosa + una base nitrogenada (A, T, G o C). Encadenados por enlaces fosfodiéster forman cada hebra. — Nucleótido.',
          },
          {
            type: 'paragraph',
            content:
              'Las dos hebras corren en sentido opuesto: son antiparalelas. Los carbonos del azúcar se numeran con prima (1′ a 5′), y por eso una hebra va en dirección 5′→3′ mientras su complementaria va 3′→5′. El extremo 5′ lleva un fosfato libre. Esta orientación opuesta no es un detalle cosmético: es la que permite que las bases se apareen de forma correcta y la que marca la dirección en que las enzimas leen y copian el ADN.',
          },
        ],
      },
      {
        id: 'gadn-2',
        number: 2,
        title: 'Apareamiento de bases',
        keyTerms: ['A–T', 'G–C', 'puentes de hidrógeno', 'purinas', 'pirimidinas'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Las bases del interior no se emparejan al azar: la adenina siempre con la timina (A–T) y la guanina siempre con la citosina (G–C). Lo que las mantiene unidas son puentes de hidrógeno —2 en el par A–T y 3 en el par G–C—, por eso las regiones ricas en G–C son algo más estables. En cada peldaño se une una purina (base grande, de doble anillo: adenina o guanina) con una pirimidina (base pequeña, de un anillo: timina o citosina); así todos los peldaños miden lo mismo y la hélice es uniforme. Truco del profesor: el nombre más largo (piri-mi-dina) es la molécula más chica (un solo anillo).',
          },
          {
            type: 'table',
            title: 'Bases y su apareamiento',
            data: {
              headers: ['Grupo', 'Bases', 'Se aparea con'],
              rows: [
                ['Purinas (doble anillo)', 'Adenina (A), Guanina (G)', 'A → T (2 H) · G → C (3 H)'],
                ['Pirimidinas (un anillo)', 'Timina (T), Citosina (C)', 'T → A · C → G'],
              ],
            },
          },
          {
            type: 'note',
            content:
              'Cuidado con una confusión común: A y G son ambas PURINAS, pero eso NO significa que se enlacen entre sí. El par siempre es purina–pirimidina: A con T y G con C.',
          },
        ],
      },
      {
        id: 'gadn-3',
        number: 3,
        title: 'El código genético',
        keyTerms: ['codón', 'AUG', 'uracilo', 'UAA', 'UAG', 'UGA'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La secuencia de bases es un mensaje escrito con un alfabeto de cuatro letras, y se lee de tres en tres: cada triplete de bases es un codón. Con 4 bases en grupos de 3 hay 64 codones posibles (la tabla del código genético), y cada uno especifica un aminoácido o una señal. El ADN es el "libro de instrucciones" que se queda en el núcleo: las proteínas NO se fabrican directamente sobre él, sino sobre una copia de ARN. Por eso, al pasar al lenguaje del ARN, la timina (T) se sustituye por uracilo (U): un codón de ADN "ATG" se lee "AUG" en el ARN.',
          },
          {
            type: 'list',
            title: 'Señales del código',
            items: [
              'Codón de inicio: AUG, que además codifica el aminoácido metionina (toda síntesis empieza aquí).',
              'Codones de paro (no codifican aminoácido, detienen la síntesis): UAA, UAG y UGA.',
              'El resto de los 64 codones especifican los 20 aminoácidos (varios codones por aminoácido: el código es redundante).',
            ],
          },
        ],
      },
      {
        id: 'gadn-4',
        number: 4,
        title: 'Los tres tipos de ARN',
        keyTerms: ['ARNm', 'ARNt', 'ARNr', 'anticodón', 'aminoácidos esenciales'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Si el ADN es el libro que no sale de la biblioteca (el núcleo), el ARN es la fotocopia que se lleva al taller (el ribosoma) para fabricar la proteína. Intervienen tres tipos de ARN con papeles distintos, que conviene reconocer aunque el detalle del proceso se vea en la Semana 2.',
          },
          {
            type: 'table',
            title: 'ARN mensajero, de transferencia y ribosomal',
            data: {
              headers: ['Tipo', 'Función'],
              rows: [
                ['ARNm (mensajero)', 'Copia las bases complementarias del ADN y lleva el mensaje (los codones) al ribosoma.'],
                ['ARNt (transferencia)', 'Lleva el anticodón (complementario del codón) y su aminoácido correspondiente al ribosoma.'],
                ['ARNr (ribosomal)', 'Forma, junto con proteínas, la estructura del ribosoma donde se ensambla la proteína.'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Adelanto (Semana 2)',
            content:
              'La transcripción (ADN → ARNm) y la traducción (ARNm → proteína) se desarrollan en la Semana 2. Aquí solo se nombran los actores. Dato de la clase: los aminoácidos esenciales se obtienen por la dieta; combinaciones como frijol con arroz se complementan para aportarlos todos.',
          },
        ],
      },
      {
        id: 'gadn-5',
        number: 5,
        title: 'Empaquetamiento del ADN en el núcleo',
        keyTerms: ['nucleosoma', 'histonas', 'octámero', 'cromatina', 'cromosoma'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Cada célula guarda alrededor de 2 metros de ADN dentro de un núcleo microscópico, lo que solo es posible enrollándolo de forma muy ordenada. La primera vuelta la da alrededor de un carrete de proteínas: el nucleosoma, formado por un octámero de histonas (dos copias de H2A, H2B, H3 y H4). Enrollarse en nucleosomas, y luego plegar esos nucleosomas una y otra vez, compacta el ADN por niveles crecientes.',
          },
          {
            type: 'steps',
            title: 'Niveles de organización (de lo simple a lo compacto)',
            steps: [
              'Nucleótido: la unidad química.',
              'ADN: la doble hélice (cadena de nucleótidos).',
              'Nucleosoma: el ADN enrollado sobre el octámero de histonas.',
              'Cromatina: los nucleosomas plegados (el estado habitual en la interfase).',
              'Cromosoma: la cromatina condensada al máximo (visible en la división celular).',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Estabilidad de la hélice y mutaciones',
            content:
              'La combinación del esqueleto fosfodiéster (fuerte, covalente) y los puentes de hidrógeno entre bases da a la doble hélice la estabilidad que resiste agresiones internas y externas y evita que las bases se desplacen o cambien —lo que sería una mutación—. Cuando aun así ocurre un daño, entran los mecanismos de reparación del ADN (que se ven en la Semana 2). Por eso entender la estructura es el paso previo para entender la mutación y su reparación.',
          },
        ],
      },
    ],
  },
]
