import type { Topic } from '../types'

// Genética Básica (UAD · GB01003) — Semana 1, Clases 1–3 :
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
              'El primer mes se centra en la genética clásica: ADN, ARN, cromosomas y las patologías asociadas. No hay libro base único; se sugiere como apoyo «Biología molecular de la célula» (Bruce Alberts). Nota: esta semana es parcial —la Clase 3 (molécula del ADN y código genético) se imparte después—.',
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
              'Las bases del interior no se emparejan al azar: la adenina siempre con la timina (A–T) y la guanina siempre con la citosina (G–C). Lo que las mantiene unidas son puentes de hidrógeno —2 en el par A–T y 3 en el par G–C—, por eso las regiones ricas en G–C son algo más estables. En cada peldaño se une una purina (base grande, de doble anillo: adenina o guanina) con una pirimidina (base pequeña, de un anillo: timina o citosina); así todos los peldaños miden lo mismo y la hélice es uniforme. Truco para recordarlo: el nombre más largo (piri-mi-dina) es la molécula más chica (un solo anillo).',
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
  {
    id: 'genetica-dogma-transcripcion',
    title: 'Dogma central, ARN y transcripción',
    subtitle: 'El flujo ADN → ARN → proteína, los tres tipos de ARN y cómo se transcribe el ADN',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'Dogma central: ADN → ARN → proteína. Transcripción = ADN→ARN; traducción = ARN→proteína.',
      'Dónde: la transcripción ocurre en el NÚCLEO; la traducción, en el CITOPLASMA (pregunta típica de examen).',
      'Nucleósido = base + azúcar; nucleótido = base + azúcar + fosfato.',
      'ADN vs ARN: desoxirribosa vs ribosa; doble vs una cadena; timina (T) vs uracilo (U).',
      'Tres ARN — m: mensaje (copia del ADN), t: transferencia (anticodón + aminoácido), r: forma el ribosoma (se hace en el nucléolo).',
      'Transcripción: la ARN polimerasa abre el ADN y copia una hebra por complementariedad A→U, T→A, C→G, G→C.',
      'El ARNm inicial trae intrones + exones; el procesamiento elimina los intrones y deja solo los exones.',
    ],
    sections: [
      {
        id: 'gdog-1',
        number: 1,
        title: 'El dogma central',
        keyTerms: ['dogma central', 'transcripción', 'traducción', 'núcleo', 'citoplasma'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El dogma central resume cómo fluye la información genética: del ADN se copia un ARN, y del ARN se fabrica una proteína (ADN → ARN → proteína). El primer paso, ADN → ARN, es la transcripción; el segundo, ARN → proteína, es la traducción. Una clave que se pregunta mucho es DÓNDE ocurre cada uno: la transcripción sucede en el NÚCLEO (donde está el ADN) y la traducción en el CITOPLASMA (donde están los ribosomas). Por eso el ARN mensajero tiene que salir del núcleo para ser leído.',
          },
          {
            type: 'table',
            title: 'Los dos procesos',
            data: {
              headers: ['Proceso', 'Convierte', 'Dónde'],
              rows: [
                ['Transcripción', 'ADN → ARN', 'Núcleo'],
                ['Traducción', 'ARN → proteína', 'Citoplasma'],
              ],
            },
          },
        ],
      },
      {
        id: 'gdog-2',
        number: 2,
        title: 'Nucleósido vs. nucleótido · ADN vs. ARN',
        keyTerms: ['nucleósido', 'nucleótido', 'desoxirribosa', 'ribosa', 'uracilo'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La estructura del ADN (doble hélice, bases apareadas A–T/G–C, esqueleto azúcar-fosfato) ya se vio a fondo en «La molécula del ADN». Aquí conviene añadir una distinción nueva y muy preguntada: un NUCLEÓSIDO es solo base + azúcar, mientras que un NUCLEÓTIDO es base + azúcar + fosfato (el nucleótido lleva el fosfato). Y al comparar ADN y ARN: el ARN usa ribosa (no desoxirribosa), es de una sola cadena y sustituye la timina por uracilo (U).',
          },
          {
            type: 'table',
            title: 'ADN vs. ARN',
            data: {
              headers: ['Característica', 'ADN', 'ARN'],
              rows: [
                ['Azúcar', 'Desoxirribosa', 'Ribosa'],
                ['Cadenas', 'Doble', 'Una'],
                ['Base característica', 'Timina (T)', 'Uracilo (U)'],
                ['Bases', 'A, T, G, C', 'A, U, G, C'],
              ],
            },
          },
        ],
      },
      {
        id: 'gdog-3',
        number: 3,
        title: 'Los tres tipos de ARN',
        keyTerms: ['ARNm', 'ARNt', 'ARNr', 'anticodón', 'nucléolo', 'intrones', 'exones'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'De la transcripción salen tres tipos de ARN con papeles complementarios, y una regla mnemónica los ordena por su inicial: m = mensaje, t = transferencia, r = ribosoma. El ARNm lleva la copia de las instrucciones del ADN hasta el ribosoma; el ARNt es el adaptador que reconoce cada codón (con su anticodón) y aporta el aminoácido correspondiente; el ARNr forma, con proteínas, el propio ribosoma y se sintetiza en el nucléolo.',
          },
          {
            type: 'table',
            title: 'ARNm · ARNt · ARNr',
            data: {
              headers: ['Tipo', 'Función'],
              rows: [
                ['ARNm (mensajero)', 'Copia el mensaje del ADN y lo lleva al ribosoma.'],
                ['ARNt (transferencia)', 'Reconoce el codón con su anticodón y transporta el aminoácido.'],
                ['ARNr (ribosomal)', 'Forma el ribosoma; se sintetiza en el nucléolo.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Intrones y exones',
            content:
              'El ARNm recién transcrito contiene intrones (regiones no codificantes) y exones (codificantes). Antes de traducirse, un procesamiento (splicing) ELIMINA los intrones y empalma solo los exones, de modo que el ARNm maduro que llega al ribosoma solo conserva la información que se usará para la proteína.',
          },
        ],
      },
      {
        id: 'gdog-4',
        number: 4,
        title: 'La transcripción, paso a paso',
        keyTerms: ['ARN polimerasa', 'molde', 'complementariedad', 'A→U'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La transcripción ocurre en el núcleo y produce el ARNm a partir de una hebra molde de ADN. La ARN polimerasa abre localmente la doble hélice, toma una de las hebras como molde y va colocando ribonucleótidos por complementariedad de bases; luego el ADN se vuelve a cerrar. La regla de complementariedad es como la del ADN pero con U en lugar de T: frente a una A del ADN se coloca U, frente a T se coloca A, y G↔C como siempre. La longitud del ARNm es variable (la clase da ~2,200 nucleótidos ≈ 730 codones como referencia, no como valor fijo).',
          },
          {
            type: 'table',
            title: 'Complementariedad en la transcripción (ADN → ARN)',
            data: {
              headers: ['Base en el ADN molde', 'Base en el ARN'],
              rows: [['A', 'U'], ['T', 'A'], ['C', 'G'], ['G', 'C']],
            },
          },
          {
            type: 'note',
            content: 'Ejemplo: un molde de ADN A–T–G–C se transcribe como U–A–C–G en el ARN.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-cromosomas-cariotipo',
    title: 'Cromosomas, cariotipo y clasificación',
    subtitle: 'Del empaquetamiento en nucleosomas a la estructura del cromosoma, su clasificación y el cariotipo humano',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'Empaquetamiento: ADN → histonas → nucleosoma → cromatina → cromosoma.',
      'Octámero de histonas = 2× H2A, H2B, H3 y H4 (8 histonas).',
      'Cromatina = poco condensada (interfase); cromosoma = muy condensado y visible durante la división celular.',
      'Estructura: cromátidas, centrómero, brazo p (corto), brazo q (largo), cinetocoro (une el huso) y telómeros (extremos).',
      'Acortamiento de telómeros → envejecimiento celular y mayor entrada en apoptosis.',
      'Clasificación por posición del centrómero: metacéntrico, submetacéntrico, acrocéntrico y telocéntrico.',
      'Cariotipo humano: 46 cromosomas (23 pares); 1–22 autosomas y el par 23 sexual.',
    ],
    sections: [
      {
        id: 'gcro-1',
        number: 1,
        title: 'Empaquetamiento e histonas',
        keyTerms: ['histonas', 'octámero', 'nucleosoma', 'cromatina', 'cromosoma'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Como se vio en «La molécula del ADN», cada célula guarda ~2 m de ADN enrollándolo por niveles: ADN → histonas → nucleosoma → cromatina → cromosoma. El primer nivel es el nucleosoma: el ADN se enrolla alrededor de un octámero de histonas, formado por dos copias de cada una de H2A, H2B, H3 y H4 (2+2+2+2 = 8 histonas). Compactando nucleosomas se obtiene la cromatina, y condensándola al máximo, el cromosoma.',
          },
        ],
      },
      {
        id: 'gcro-2',
        number: 2,
        title: 'Cromatina vs. cromosoma',
        keyTerms: ['cromatina', 'cromosoma', 'interfase', 'división celular'],
        blocks: [
          {
            type: 'comparison',
            title: '¿Cuándo se ve cada uno?',
            left: {
              title: 'Cromatina',
              items: ['ADN + proteínas poco condensados.', 'Estado habitual en la INTERFASE (célula sin dividirse).', 'No se distinguen cromosomas individuales.'],
            },
            right: {
              title: 'Cromosoma',
              items: ['Material genético muy condensado y organizado.', 'Visible durante la DIVISIÓN celular.', 'Es cuando se puede hacer el bandeo/cariotipo.'],
            },
          },
          {
            type: 'note',
            content: 'Pregunta clásica: ¿cuándo se observan claramente los cromosomas? → durante la división celular (por eso el bandeo requiere cromosomas condensados).',
          },
        ],
      },
      {
        id: 'gcro-3',
        number: 3,
        title: 'Estructura del cromosoma',
        keyTerms: ['centrómero', 'brazo p', 'brazo q', 'cinetocoro', 'telómeros'],
        blocks: [
          {
            type: 'list',
            title: 'Partes del cromosoma',
            items: [
              'Cromátidas: las unidades longitudinales que lo forman.',
              'Centrómero: la constricción que lo divide en dos brazos.',
              'Brazo p: el brazo CORTO (p = petit).',
              'Brazo q: el brazo LARGO.',
              'Cinetocoro: región del centrómero donde se une el huso mitótico en la división.',
              'Telómeros: los extremos protectores del cromosoma.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Telómeros y envejecimiento',
            content:
              'Los telómeros se acortan con cada división celular; cuando se acortan demasiado, la célula envejece y entra más fácilmente en apoptosis (muerte programada). Por eso el acortamiento telomérico es uno de los relojes del envejecimiento celular.',
          },
        ],
      },
      {
        id: 'gcro-4',
        number: 4,
        title: 'Clasificación por el centrómero',
        keyTerms: ['metacéntrico', 'submetacéntrico', 'acrocéntrico', 'telocéntrico'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los cromosomas se clasifican por dónde queda el centrómero, porque eso define el largo relativo de los brazos. La secuencia va del centro al extremo: metacéntrico → submetacéntrico → acrocéntrico → telocéntrico.',
          },
          {
            type: 'table',
            title: 'Tipos según la posición del centrómero',
            data: {
              headers: ['Tipo', 'Centrómero', 'Aspecto · ejemplo humano'],
              rows: [
                ['Metacéntrico', 'En el centro', 'Brazos similares (1, 3, 19, 20)'],
                ['Submetacéntrico', 'Desplazado', 'Un brazo corto y otro largo (16, 17, 18 según la clase)'],
                ['Acrocéntrico', 'Muy desplazado', 'Brazo corto muy pequeño (13, 14, 15, 21, 22)'],
                ['Telocéntrico', 'En el extremo', 'Sin brazo corto claro; en humanos no es normal, se asocia a alteraciones'],
              ],
            },
          },
        ],
      },
      {
        id: 'gcro-5',
        number: 5,
        title: 'Cariotipo humano',
        keyTerms: ['cariotipo', '46 cromosomas', 'autosomas', 'cromosomas sexuales', 'bandeo'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El ser humano tiene 46 cromosomas organizados en 23 pares: los pares 1 a 22 son autosomas y el par 23 son los cromosomas sexuales (XX o XY). El cariotipo es la representación ordenada de esos cromosomas, alineados por pares y por tamaño (del 1, el más grande, al 22, el autosoma más pequeño, y al final el par sexual). Sirve para estudiar la dotación cromosómica y detectar alteraciones numéricas o estructurales. Como el bandeo necesita cromosomas condensados, el cariotipo se prepara con células en división.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-traduccion',
    title: 'Aminoácidos, péptidos y traducción',
    subtitle: 'De los aminoácidos y el enlace peptídico a las tres etapas de la síntesis de proteínas',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      '20 aminoácidos estándar; 9 esenciales (deben venir de la dieta), el resto los sintetiza el cuerpo.',
      'La metionina es el aminoácido de inicio; su codón es AUG.',
      'Enlace peptídico: une aminoácidos y libera una molécula de agua (H₂O).',
      'Por número de aminoácidos: oligopéptido (<10), polipéptido (10–50), proteína (>50). Ejemplo gigante: titina (~33,000 aa).',
      'Codón = 3 bases (64 combinaciones); el anticodón complementario está en el ARNt.',
      'Traducción en 3 etapas: iniciación (AUG/Met), elongación (sitios A→P→E) y terminación (codón de paro).',
      'Codones de paro: UAA, UAG y UGA (no codifican aminoácido).',
    ],
    sections: [
      {
        id: 'gtrad-1',
        number: 1,
        title: 'Aminoácidos',
        keyTerms: ['aminoácido', 'esenciales', 'no esenciales', 'metionina', 'AUG'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los aminoácidos son las piezas con que se arman las proteínas; hay 20 estándar en el código genético, y como hay 64 codones, varios codones distintos pueden codificar el mismo aminoácido (el código es redundante). Se dividen en esenciales —los que el cuerpo NO puede fabricar y deben obtenerse de la dieta— y no esenciales —los que sí sintetiza a partir de otras moléculas—. Un aminoácido tiene un papel especial: la metionina, que inicia la síntesis y corresponde al codón AUG.',
          },
          {
            type: 'list',
            title: 'Los 9 aminoácidos esenciales',
            items: [
              'Histidina, Isoleucina, Leucina, Lisina, Metionina, Fenilalanina, Treonina, Triptófano y Valina.',
              'Regla: deben venir de la alimentación (el cuerpo no los produce en cantidad suficiente).',
              'Metionina = inicio (AUG).',
            ],
          },
        ],
      },
      {
        id: 'gtrad-2',
        number: 2,
        title: 'Mutaciones a nivel de aminoácido',
        keyTerms: ['silenciosa', 'missense', 'nonsense'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Un cambio en el ADN puede o no cambiar el aminoácido, y de eso depende su efecto. La pregunta clave no es solo "¿hubo mutación?", sino "¿cambió el aminoácido?" y "¿ese cambio altera la proteína?". Según eso se clasifican tres tipos.',
          },
          {
            type: 'table',
            title: 'Tipos de mutación puntual',
            data: {
              headers: ['Tipo', 'Efecto en el aminoácido'],
              rows: [
                ['Silenciosa', 'El codón cambia pero codifica el MISMO aminoácido (sin efecto).'],
                ['Missense (sentido erróneo)', 'Cambia un aminoácido por otro (efecto variable: conservador o no).'],
                ['Nonsense (sin sentido)', 'Genera un codón de PARO prematuro y trunca la proteína.'],
              ],
            },
          },
        ],
      },
      {
        id: 'gtrad-3',
        number: 3,
        title: 'Péptidos y proteínas',
        keyTerms: ['enlace peptídico', 'oligopéptido', 'polipéptido', 'proteína', 'titina'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los aminoácidos se unen por enlaces peptídicos, y cada enlace formado libera una molécula de agua (H₂O) —una reacción de condensación—. Según cuántos aminoácidos se encadenan, la molécula recibe distinto nombre. El extremo del rango lo ilustra la titina, una proteína del músculo de ~33,000 aminoácidos responsable de su elasticidad.',
          },
          {
            type: 'table',
            title: 'Clasificación por número de aminoácidos',
            data: {
              headers: ['Cantidad', 'Nombre'],
              rows: [['Menos de 10', 'Oligopéptido'], ['10–50', 'Polipéptido'], ['Más de 50', 'Proteína']],
            },
          },
        ],
      },
      {
        id: 'gtrad-4',
        number: 4,
        title: 'La traducción en tres etapas',
        keyTerms: ['iniciación', 'elongación', 'terminación', 'sitios A P E', 'codón', 'anticodón'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La traducción decodifica el ARNm para construir la proteína: el ribosoma lee el mensaje de tres bases en tres bases (cada triplete es un codón) y los ARNt van aportando el aminoácido que corresponde a cada codón, reconociéndolo con su anticodón complementario. Ocurre en tres etapas —inicio, desarrollo y final— y el ribosoma usa tres sitios (A, P, E) por los que pasa cada ARNt.',
          },
          {
            type: 'table',
            title: 'Las tres etapas y los sitios del ribosoma',
            data: {
              headers: ['Etapa', 'Qué pasa'],
              rows: [
                ['Iniciación', 'Se reúnen ribosoma + ARNm + primer ARNt en el codón AUG (metionina).'],
                ['Elongación', 'Sitios A→P→E: el ARNt ENTRA por A, la cadena se une en P, y el ARNt vacío SALE por E; se repite.'],
                ['Terminación', 'Un codón de paro (UAA/UAG/UGA) detiene la síntesis y se libera el polipéptido.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Lo que prioriza el examen',
            content:
              'Para el examen, NO hay que memorizar las 64 combinaciones de la tabla, sino dominar dos puntos: AUG = metionina = inicio, y UAA / UAG / UGA = codones de paro. Recuerda además la regla de los sitios: A entra, P proteína (se une), E sale.',
          },
          {
            type: 'note',
            title: 'La cadena completa',
            content:
              'Reconstruye todo el flujo: ADN → gen → transcripción → ARNm → codón → ARNt/anticodón → aminoácido → ribosoma → polipéptido → proteína. Tras usarse, el ARNm se degrada en el citoplasma y sus componentes se reutilizan.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-reparacion-adn',
    title: 'Reparación del ADN',
    subtitle: 'Daños endógenos y exógenos, enzimas clave y vías de reparación',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'La reparación mantiene intacta la información genética; si el daño no se repara → apoptosis; si se replica con daño → mutaciones y cáncer.',
      'Daño endógeno: radicales libres (electrones no apareados, subproducto de la respiración aerobia).',
      'Daño exógeno: UV, rayos X, rayos gamma, químicos y humo de cigarro.',
      'La radiación UV forma dímeros de timina (T–T) que distorsionan la hélice.',
      'Tres enzimas clave — Glicosilasa: detecta y quita la base dañada; ADN polimerasa: rellena; ADN ligasa: sella (Quitar → Rellenar → Sellar).',
      'La ADN polimerasa además REVISA durante la replicación (corrige un G–T a G–C).',
      'Excisión de BASES (quita una base — glicosilasa) vs excisión de NUCLEÓTIDOS (quita un segmento — distorsiones grandes, dímeros).',
      'Ruptura de doble cadena: recombinación homóloga (usa molde, precisa) vs unión de extremos no homólogos (une sin molde, menos precisa).',
    ],
    sections: [
      {
        id: 'grep-1',
        number: 1,
        title: 'Para qué sirve y qué pasa si falla',
        keyTerms: ['reparación', 'apoptosis', 'mutaciones', 'cáncer'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El ADN sufre daños constantemente, y la reparación es el conjunto de mecanismos que los corrige para mantener intacta la información genética antes de que se transmita en la división celular. El desenlace depende de si el daño se repara: si se corrige, todo sigue normal; si NO puede repararse, la célula suele entrar en apoptosis (muerte programada) para no propagar el error; y si los controles fallan y la célula se divide con el ADN dañado, se acumulan mutaciones y puede aparecer cáncer. Por eso la reparación es a la vez un guardián del genoma y un freno a la tumorogénesis.',
          },
        ],
      },
      {
        id: 'grep-2',
        number: 2,
        title: 'Origen del daño: endógeno vs. exógeno',
        keyTerms: ['radicales libres', 'UV', 'rayos X', 'rayos gamma', 'radiación ionizante'],
        blocks: [
          {
            type: 'comparison',
            title: '¿De dónde viene el daño?',
            left: {
              title: 'Endógeno (interno)',
              items: ['Radicales libres: moléculas con electrones no apareados, muy reactivas.', 'Se producen como subproducto de la respiración aerobia normal.', 'Dañan las bases continuamente.'],
            },
            right: {
              title: 'Exógeno (externo)',
              items: ['UV, rayos X, rayos gamma, químicos, humo de cigarro.', 'Las radiaciones ionizantes rompen una o ambas cadenas.', 'También dañan bases y generan radicales libres.'],
            },
          },
          {
            type: 'note',
            title: 'La UV y los dímeros de timina',
            content:
              'La radiación UV merece atención aparte: une de forma anormal dos timinas adyacentes formando un DÍMERO DE TIMINA (T–T). Ese enlace distorsiona la doble hélice y estorba la replicación, obligando a repararlo por excisión de nucleótidos.',
          },
        ],
      },
      {
        id: 'grep-3',
        number: 3,
        title: 'Revisión y mal apareamiento',
        keyTerms: ['ADN polimerasa', 'revisión', 'mal apareamiento', 'inserciones', 'deleciones'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La primera línea de defensa actúa durante la propia replicación: la ADN polimerasa REVISA lo que va copiando y, si detecta un nucleótido mal apareado (p. ej. una G frente a una T donde debía ir G–C), lo elimina y lo reemplaza por el correcto. Lo que se le escapa lo corrige después la reparación de mal apareamiento, que retira bases mal apareadas y pequeñas inserciones o deleciones (surgidas cuando la polimerasa "resbala"). En ambos casos el patrón final es el mismo: detectar → quitar la región errónea → rellenar (ADN polimerasa) → sellar (ADN ligasa).',
          },
        ],
      },
      {
        id: 'grep-4',
        number: 4,
        title: 'Las tres enzimas clave',
        keyTerms: ['glicosilasa', 'ADN polimerasa', 'ADN ligasa'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Se subrayó que, de todas las moléculas implicadas, hay tres enzimas que sí hay que aprender, porque describen el patrón común de casi toda reparación. La regla mnemónica es Quitar → Rellenar → Sellar.',
          },
          {
            type: 'table',
            title: 'Quitar → Rellenar → Sellar',
            data: {
              headers: ['Enzima', 'Función'],
              rows: [
                ['Glicosilasa', 'Detecta y QUITA la base dañada.'],
                ['ADN polimerasa', 'RELLENA con el/los nucleótido(s) correcto(s).'],
                ['ADN ligasa', 'SELLA la brecha y restablece la continuidad de la hebra.'],
              ],
            },
          },
        ],
      },
      {
        id: 'grep-5',
        number: 5,
        title: 'Vías de excisión: bases vs. nucleótidos',
        keyTerms: ['reversión directa', 'excisión de bases', 'excisión de nucleótidos', 'uracilo'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Existen varias vías. La reversión directa deshace ciertos daños químicos sin quitar nada. Las dos vías de excisión se distinguen por CUÁNTO retiran: la excisión de BASES quita solo la base dañada (la glicosilasa la reconoce) —ejemplo típico: un uracilo que aparece en el ADN, G–U, se corrige a G–C—; la excisión de NUCLEÓTIDOS retira un SEGMENTO entero de la hebra, y se usa para distorsiones grandes como los dímeros de timina o el daño por humo y químicos. Regla: base = quitas una base; nucleótidos = quitas un segmento.',
          },
          {
            type: 'table',
            title: 'Excisión de bases vs. de nucleótidos',
            data: {
              headers: ['', 'Excisión de bases', 'Excisión de nucleótidos'],
              rows: [
                ['Qué elimina', 'Una base', 'Un segmento de nucleótidos'],
                ['Tipo de daño', 'Base dañada puntual (p. ej. uracilo)', 'Distorsión de la hélice (dímeros de timina, químicos)'],
                ['Enzima destacada', 'Glicosilasa', 'Complejo de reparación'],
              ],
            },
          },
        ],
      },
      {
        id: 'grep-6',
        number: 6,
        title: 'Ruptura de doble cadena',
        keyTerms: ['doble cadena', 'recombinación homóloga', 'unión de extremos no homólogos', 'molde'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Cuando se rompen las DOS cadenas a la vez el daño es grave, porque puede perderse un segmento entero de información. Hay dos formas de arreglarlo, y la diferencia clave es si hay un molde de dónde copiar. La RECOMBINACIÓN HOMÓLOGA usa el cromosoma homólogo (una copia sana equivalente) como molde: es precisa y apenas introduce errores, y es la misma maquinaria del entrecruzamiento en la meiosis. La UNIÓN DE EXTREMOS NO HOMÓLOGOS simplemente vuelve a pegar los extremos rotos sin molde: es más rápida pero "tosca" y puede dejar mutaciones. Regla: homóloga = tiene de dónde copiar; no homóloga = une los extremos.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'UV, dímeros y cáncer de piel',
            content:
              'La UV forma dímeros de timina a diario; si la excisión de nucleótidos no los repara, se acumulan mutaciones que pueden derivar en cáncer de piel. Los radicales libres del propio metabolismo son un daño endógeno continuo. (Enriquecimiento, NO dado en clase: el xeroderma pigmentoso es una enfermedad hereditaria por excisión de nucleótidos defectuosa, con fotosensibilidad extrema y cáncer cutáneo temprano —verifícalo aparte—.)',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-repaso-s2',
    title: 'Repaso para el examen — Semana 2',
    subtitle: 'Las 9 prioridades dictadas para el examen: cromosoma, ADN/ARN, transcripción, traducción y reparación',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '📝',
    keyPoints: [
      'Partes del cromosoma y su función: centrómero, brazos p/q, cinetocoro, telómeros, cromátidas.',
      'ADN vs ARN: desoxirribosa/ribosa, doble/una cadena, timina/uracilo.',
      'Nucleosoma = octámero de histonas (2× H2A, H2B, H3, H4 = 8); cadena ADN→histonas→nucleosoma→cromatina→cromosoma.',
      'Tipos de cromosoma por el centrómero: metacéntrico, submetacéntrico, acrocéntrico, telocéntrico.',
      'Transcripción (núcleo, ARN polimerasa, U por T) y traducción (citoplasma, iniciación/elongación/terminación).',
      'Ribosoma: sitios A (entra) → P (proteína) → E (sale).',
      'Codones: AUG = metionina (inicio); UAA/UAG/UGA = paro. Reparación: endógeno/exógeno, enzimas y vías.',
    ],
    sections: [
      {
        id: 'gs2r-1',
        number: 1,
        title: 'Cómo usar este repaso',
        keyTerms: ['prioridades de examen', 'Semana 2'],
        blocks: [
          {
            type: 'note',
            title: 'Banco de prioridades del examen',
            content:
              'No es contenido nuevo: al cerrar la Clase 3, se dictaron las 9 prioridades del examen de la Semana 2. Aquí quedan como guía de estudio; cada punto se estudia a fondo en su topic (dogma/transcripción, cromosomas/cariotipo, traducción y reparación del ADN).',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Estrategia de examen',
            content:
              'El examen se concentra en los conceptos fundamentales y NO exige memorizar nombres complejos adicionales (ni las 64 combinaciones de codones). Domina las 9 prioridades de abajo y las dos parejas clave: AUG = metionina/inicio y UAA/UAG/UGA = paro.',
          },
        ],
      },
      {
        id: 'gs2r-2',
        number: 2,
        title: 'Las 9 prioridades',
        keyTerms: ['cromosoma', 'ADN vs ARN', 'nucleosoma', 'transcripción', 'traducción', 'reparación'],
        blocks: [
          {
            type: 'table',
            title: 'Lo evaluable, en orden',
            data: {
              headers: ['#', 'Prioridad', 'Clave'],
              rows: [
                ['1', 'Partes del cromosoma', 'Centrómero, brazo p (corto)/q (largo), cinetocoro (huso), telómeros (extremos), cromátidas.'],
                ['2', 'ADN vs ARN', 'Azúcar (desoxirribosa/ribosa), base (T/U), estructura (doble/una) y función.'],
                ['3', 'Nucleosoma', 'Octámero: 2× H2A, H2B, H3, H4 = 8. Cadena: ADN→histonas→nucleosoma→cromatina→cromosoma.'],
                ['4', 'Tipos de cromosoma', 'Meta / submeta / acro / telocéntrico (por posición del centrómero).'],
                ['5', 'Transcripción', 'ADN→ARN, en el núcleo, ARN polimerasa; U sustituye a T; ARNm, intrones/exones.'],
                ['6', 'Traducción', 'En el citoplasma; ARNm/ARNt/ARNr; iniciación, elongación, terminación.'],
                ['7', 'Ribosoma A/P/E', 'A entra el ARNt, P se une la cadena, E sale el ARNt.'],
                ['8', 'Codones', 'AUG = metionina (inicio); UAA, UAG, UGA = paro.'],
                ['9', 'Reparación del ADN', 'Endógeno (radicales libres)/exógeno (UV); mal apareamiento; excisión de bases/nucleótidos; doble cadena homóloga/no homóloga; enzimas glicosilasa/polimerasa/ligasa.'],
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-cromosomas-herencia',
    title: 'Bases cromosómicas de la herencia, cariotipo y bandeo',
    subtitle: 'Teoría cromosómica, homólogos, cromatina/cromátida, cariograma y bandeo',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'Teoría cromosómica: genes ↔ ADN ↔ cromosomas ↔ herencia. Los genes son segmentos de ADN en posiciones específicas (LOCI); conecta las leyes de Mendel con el comportamiento de los cromosomas.',
      '46 cromosomas = 23 pares homólogos (uno materno + uno paterno): 22 autosomas + 1 par sexual (XX/XY). El homólogo sano sirve de molde en la reparación homóloga.',
      'CROMATINA = material genético menos condensado; CROMÁTIDA = una copia de un cromosoma duplicado. HOMÓLOGOS = mismo par (materno+paterno); CROMÁTIDAS HERMANAS = copias idénticas unidas por el centrómero.',
      'CARIOTIPO = conjunto de características cromosómicas de la especie; CARIOGRAMA = su representación gráfica ordenada por pares (por tamaño).',
      'Bandeo: G (Giemsa+tripsina, el MÁS usado), Q (quinacrina, fluorescencia), R (patrón inverso, regiones terminales), T (telómeros), C (centrómero/heterocromatina). Alta resolución ~550–650 bandas.',
      'Nomenclatura del locus 7q31.2 → 7 (cromosoma) · q (brazo largo) · 31.2 (región y sub-banda). Recordar: p = brazo corto, q = brazo largo.',
      'El cariotipo detecta número, forma y anomalías cromosómicas (p. ej. trisomía 21); las células se obtienen por cultivo o por amniocentesis.',
    ],
    sections: [
      {
        id: 'gher-1',
        number: 1,
        title: 'Teoría cromosómica de la herencia',
        keyTerms: ['teoría cromosómica', 'gen', 'locus', 'herencia'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La teoría cromosómica de la herencia relaciona genes ↔ ADN ↔ cromosomas ↔ herencia: los genes son segmentos de ADN localizados en posiciones específicas (LOCI) de los cromosomas. Así se conectan los patrones descritos por Mendel (ver «Leyes de Mendel») con el comportamiento de los cromosomas durante la división celular. La secuencia es: cromosoma → cromatina → ADN → genes.',
          },
        ],
      },
      {
        id: 'gher-2',
        number: 2,
        title: 'Cromosomas homólogos',
        keyTerms: ['homólogos', 'autosomas', 'par sexual', 'reparación homóloga'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los cromosomas se organizan en pares homólogos: 46 = 23 pares, cada par con un cromosoma materno y uno paterno. Los primeros 22 pares son AUTOSOMAS y el par 23 es el sexual (XX o XY). Como los homólogos llevan la misma información, el homólogo sano puede servir de molde para reparar el ADN por recombinación homóloga (ver «Reparación del ADN»). Ya se vio el empaquetamiento y la clasificación de los cromosomas en «Cromosomas y cariotipo»; aquí se profundiza en la herencia, el cariograma y el bandeo.',
          },
        ],
      },
      {
        id: 'gher-3',
        number: 3,
        title: 'Dos parejas que se confunden',
        keyTerms: ['cromatina', 'cromátida', 'cromátidas hermanas'],
        blocks: [
          {
            type: 'comparison',
            title: 'Cromatina vs cromátida',
            left: {
              title: 'Cromatina',
              items: ['Material genético MENOS condensado.', 'Estado habitual en el núcleo en interfase.'],
            },
            right: {
              title: 'Cromátida',
              items: ['Una de las dos copias de un cromosoma duplicado.', 'Las cromátidas hermanas se unen por el centrómero.'],
            },
          },
          {
            type: 'comparison',
            title: 'Homólogos vs cromátidas hermanas',
            left: {
              title: 'Cromosomas homólogos',
              items: ['Mismo par: uno materno + uno paterno.', 'Llevan los mismos genes (alelos que pueden diferir).'],
            },
            right: {
              title: 'Cromátidas hermanas',
              items: ['Copias IDÉNTICAS de un cromosoma duplicado.', 'Resultado de la replicación en fase S.'],
            },
          },
        ],
      },
      {
        id: 'gher-4',
        number: 4,
        title: 'Cariotipo vs cariograma',
        keyTerms: ['cariotipo', 'cariograma'],
        blocks: [
          {
            type: 'comparison',
            title: 'No son lo mismo',
            left: {
              title: 'Cariotipo',
              items: ['Conjunto de características cromosómicas de la especie.', 'En humanos: 46 = 23 pares (22 autosómicos + 1 sexual).'],
            },
            right: {
              title: 'Cariograma',
              items: ['Representación gráfica de los cromosomas.', 'Ordenados por pares, según el tamaño.'],
            },
          },
        ],
      },
      {
        id: 'gher-5',
        number: 5,
        title: 'Bandeo cromosómico y nomenclatura del locus',
        keyTerms: ['bandeo G', 'Giemsa', 'quinacrina', 'locus', '7q31.2'],
        blocks: [
          {
            type: 'table',
            title: 'Tipos de bandeo',
            data: {
              headers: ['Bandeo', 'Técnica / patrón', 'Utilidad'],
              rows: [
                ['G', 'Giemsa + tripsina; bandas claras/oscuras', 'Identificación general; el MÁS usado'],
                ['Q', 'Quinacrina; microscopía de fluorescencia', 'Bandas brillantes/opacas'],
                ['R', 'Patrón inverso al G/Q', 'Regiones terminales'],
                ['T', 'Resalta telómeros', 'Regiones teloméricas'],
                ['C', 'Resalta centrómero y heterocromatina', 'Centrómero/heterocromatina'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Nomenclatura del locus (7q31.2) y resolución',
            content: '7q31.2 = cromosoma 7 · brazo largo (q) · región 31, sub-banda 2. Recordar: p = brazo corto, q = brazo largo. El bandeo de alta resolución alcanza ~550–650 bandas (más detalle para ubicar regiones).',
          },
        ],
      },
      {
        id: 'gher-6',
        number: 6,
        title: 'Utilidad clínica del cariotipo',
        keyTerms: ['trisomía 21', 'cultivo', 'amniocentesis'],
        blocks: [
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Qué permite estudiar el cariotipo',
            content:
              'El cariotipo permite ver el número y la forma de los cromosomas y detectar anomalías numéricas y estructurales, como la TRISOMÍA 21 (síndrome de Down). Las células se obtienen por cultivo celular (se reproducen, se tiñen, se fotografían y se ordenan por pares) o por AMNIOCENTESIS (líquido amniótico extraído con aguja fina guiada por ultrasonido) para estudios prenatales.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-ciclo-celular',
    title: 'El ciclo celular: interfase',
    subtitle: 'Interfase (G1, S, G2), diploide/haploide, puntos de control y citocinesis',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'Ciclo celular = INTERFASE (G1 + S + G2) + fase M. La interfase prepara y duplica; en M ocurre la división.',
      'DIPLOIDE 2n = 46 (células somáticas, homólogos, producto de mitosis → 2 hijas) vs HAPLOIDE n = 23 (gametos, producto de meiosis → 4 hijas). Óvulo 23 + espermatozoide 23 → cigoto 46.',
      'G1 (6–12 h): crecimiento, síntesis de proteínas, ATP e inicio de la duplicación de centrosomas. Destinos: seguir a S, G0/quiescencia, senescencia o apoptosis.',
      'Puntos de control (G1 y G2): daño → detención → reparación → si no se repara, apoptosis. Las CDK + ciclinas regulan la progresión por FOSFORILACIÓN.',
      'Fase S (6–8 h): REPLICACIÓN del ADN (cada cadena es molde; se necesitan cebadores/primers) + duplicación del centrosoma.',
      'Fase G2 (~4 h): crecimiento final, verificación de la replicación y preparación de centrosomas; checkpoint con p53 antes de entrar a M.',
      'Citocinesis = división del citoplasma. La interfase dura ≈ 24 h (máximos 12+8+4); no incluye la fase M.',
    ],
    sections: [
      {
        id: 'gcic-1',
        number: 1,
        title: 'Concepto: interfase + fase M',
        keyTerms: ['ciclo celular', 'interfase', 'fase M'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El ciclo celular es la secuencia por la que una célula crece, duplica su material genético, se prepara y se divide. Se divide en INTERFASE (G1 + S + G2) y fase M (división). Esta clase desarrolla la interfase.',
          },
          {
            type: 'note',
            title: 'Adelanto',
            content: 'La mitosis y la meiosis se ven en la siguiente clase; aquí no se desarrollan. Conviene dominar primero G1 → S → G2 → M.',
          },
        ],
      },
      {
        id: 'gcic-2',
        number: 2,
        title: 'Diploide vs haploide',
        keyTerms: ['diploide', 'haploide', '2n', 'n', 'cigoto'],
        blocks: [
          {
            type: 'comparison',
            title: '2n vs n',
            left: {
              title: 'Diploide (2n = 46)',
              items: ['Células somáticas, con homólogos.', 'Producto de la mitosis.', 'La mitosis produce 2 células hijas.'],
            },
            right: {
              title: 'Haploide (n = 23)',
              items: ['Gametos (mitad de la carga).', 'Producto de la meiosis.', 'La meiosis produce 4 células hijas.'],
            },
          },
          {
            type: 'paragraph',
            content:
              'Los gametos son haploides para que, al unirse, se restablezca la diploidía: óvulo 23 + espermatozoide 23 → cigoto 46.',
          },
        ],
      },
      {
        id: 'gcic-3',
        number: 3,
        title: 'Fase G1 y destinos de la célula',
        keyTerms: ['G1', 'G0', 'quiescencia', 'senescencia', 'apoptosis'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'G1 (6–12 h) es sobre todo de preparación: crecimiento, síntesis de proteínas, acumulación de ATP, preparación para replicar el ADN e inicio de la duplicación de los centrosomas. Desde G1 la célula puede tomar distintos caminos.',
          },
          {
            type: 'list',
            title: 'Destinos posibles desde G1',
            items: [
              'Continuar hacia la fase S.',
              'G0 / quiescencia: reposo, viva pero sin dividirse.',
              'Senescencia: deja de dividirse (envejecimiento celular).',
              'Apoptosis: muerte celular programada.',
            ],
          },
        ],
      },
      {
        id: 'gcic-4',
        number: 4,
        title: 'Puntos de control: CDK, ciclinas y fosforilación',
        keyTerms: ['puntos de control', 'CDK', 'ciclinas', 'fosforilación'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'En G1 y G2 hay puntos de control que deciden si la célula avanza: ante un daño importante, se detiene → repara → y si no puede repararse, entra en apoptosis. La progresión la regulan las CDK (quinasas dependientes de ciclinas) junto con las ciclinas, mediante fosforilación (no hace falta memorizar CDK2/CDK4).',
          },
          {
            type: 'note',
            title: 'Fosforilación',
            content: 'Es la adición de un grupo fosfato a una proteína; puede activarla o inactivarla. Es el mecanismo con que las CDK+ciclinas controlan el avance del ciclo.',
          },
        ],
      },
      {
        id: 'gcic-5',
        number: 5,
        title: 'Fase S: replicación del ADN',
        keyTerms: ['fase S', 'replicación', 'cebadores', 'primers', 'centrosoma'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La fase S (síntesis, 6–8 h) es donde se REPLICA el ADN: las cadenas se separan, cada una sirve de molde y se añaden nucleótidos complementarios; para iniciar cada cadena nueva se necesitan pequeños fragmentos llamados cebadores (primers). En S también se duplica el centrosoma, que después organizará el huso mitótico.',
          },
        ],
      },
      {
        id: 'gcic-6',
        number: 6,
        title: 'Fase G2, citocinesis y tiempos',
        keyTerms: ['G2', 'p53', 'citocinesis', 'interfase'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'G2 (~4 h) es la preparación final antes de M: crecimiento, verificación de que el ADN se replicó bien, preparación de los centrosomas y acumulación de energía; su checkpoint destaca a p53 ante el daño. La CITOCINESIS es la división del citoplasma que separa físicamente las células hijas tras la división nuclear.',
          },
          {
            type: 'table',
            title: 'Interfase: fases y tiempos',
            data: {
              headers: ['Fase', 'Función principal', 'Duración'],
              rows: [
                ['G1', 'Crecimiento y preparación', '6–12 h'],
                ['S', 'Replicación del ADN + duplicación del centrosoma', '6–8 h'],
                ['G2', 'Crecimiento final y control antes de M', '~4 h'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Cuánto dura la interfase',
            content: 'Con los valores máximos, 12 + 8 + 4 ≈ 24 h corresponden a la INTERFASE, no al ciclo completo (que incluye la fase M).',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Puntos de control, p53 y cáncer',
            content:
              'Los puntos de control y p53 evitan que una célula con ADN dañado se divida. Cuando este control falla, el daño se transmite a las células hijas: es un mecanismo central en el desarrollo del cáncer.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-mitosis-meiosis',
    title: 'División celular: mitosis y meiosis',
    subtitle: 'Fases de la mitosis y la meiosis, anafase I vs II y crossing over',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'La división celular es la fase M del ciclo (ver «El ciclo celular»). MITOSIS = células somáticas, 1 división → 2 hijas DIPLOIDES (crecimiento/reparación). MEIOSIS = células germinales, 2 divisiones → 4 hijas HAPLOIDES (reduce el número y genera variabilidad).',
      'Fases de la mitosis: profase (condensa, desaparece nucléolo y carioteca, se forma el huso) → prometafase (huso a los cinetocoros) → metafase (placa ecuatorial) → anafase (separa cromátidas hermanas) → telofase (descondensa) → citocinesis (2 células).',
      'MEIOSIS I separa cromosomas HOMÓLOGOS. La Profase I es la más importante: sinapsis de homólogos y CROSSING OVER (en paquiteno) → variabilidad. Da 2 haploides con cromosomas aún duplicados.',
      'MEIOSIS II no tiene nueva replicación del ADN; su anafase separa cromátidas HERMANAS → 4 haploides.',
      'Anafase I = homólogos; anafase II = hermanas; anafase mitótica = hermanas. Regla: mitosis = mantiene; meiosis = mitad + mezcla.',
      'Existen mitosis, meiosis I y meiosis II — NO existe "mitosis I/II".',
    ],
    sections: [
      {
        id: 'gmm-1',
        number: 1,
        title: 'Mitosis: fases',
        keyTerms: ['mitosis', 'profase', 'metafase', 'anafase', 'cinetocoro'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La mitosis divide las células SOMÁTICAS: una célula madre diploide produce 2 células hijas diploides (crecimiento, reparación y desarrollo). Es la fase M que sigue a la interfase (G1→S→G2).',
          },
          {
            type: 'steps',
            title: 'Las fases de la mitosis',
            steps: [
              'Profase: se condensan los cromosomas, desaparece el nucléolo, se desintegra la carioteca y se forma el huso.',
              'Prometafase: el huso se une a los cromosomas por los cinetocoros (aún sin alinear).',
              'Metafase: los cromosomas se alinean en el plano ecuatorial (placa metafásica).',
              'Anafase: se separan las cromátidas hermanas hacia polos opuestos (aquí pueden surgir aneuploidías).',
              'Telofase: los cromosomas llegan a los polos, se descondensan y se rearma la envoltura nuclear.',
              'Citocinesis: se divide el citoplasma → 2 células hijas.',
            ],
          },
        ],
      },
      {
        id: 'gmm-2',
        number: 2,
        title: 'Meiosis I: homólogos y crossing over',
        keyTerms: ['meiosis I', 'sinapsis', 'crossing over', 'paquiteno', 'homólogos'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La meiosis ocurre en células GERMINALES y produce gametos: reduce el número cromosómico y genera variabilidad. La MEIOSIS I separa cromosomas HOMÓLOGOS. Su Profase I es la fase clave: los homólogos se aparean (SINAPSIS) e intercambian segmentos (CROSSING OVER, en paquiteno), lo que produce variabilidad genética. Después: metafase I (doble placa ecuatorial), anafase I (separa homólogos, no las hermanas) y telofase I → 2 células haploides con los cromosomas aún duplicados.',
          },
          {
            type: 'note',
            title: 'Subfases de Profase I',
            content: 'Leptoteno → cigoteno → paquiteno (crossing over) → diploteno → diacinesis. No es necesario memorizar los nombres individuales; sí saber que el crossing over ocurre en paquiteno.',
          },
        ],
      },
      {
        id: 'gmm-3',
        number: 3,
        title: 'Meiosis II y anafase I vs II',
        keyTerms: ['meiosis II', 'cromátidas hermanas', 'anafase'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La meiosis II ocurre justo después de la I y NO hay una nueva replicación del ADN entre ambas. Sus fases (profase II → metafase II → anafase II → telofase II → citocinesis) terminan separando en la anafase II las cromátidas HERMANAS → 4 células haploides. En la Profase II no hay crossing over.',
          },
          {
            type: 'table',
            title: 'Qué se separa en cada anafase',
            data: {
              headers: ['Fase', 'Qué se separa'],
              rows: [
                ['Anafase I (meiosis)', 'Cromosomas homólogos'],
                ['Anafase II (meiosis)', 'Cromátidas hermanas'],
                ['Anafase mitótica', 'Cromátidas hermanas'],
              ],
            },
          },
        ],
      },
      {
        id: 'gmm-4',
        number: 4,
        title: 'Mitosis vs meiosis',
        keyTerms: ['mitosis', 'meiosis', 'ploidía'],
        blocks: [
          {
            type: 'table',
            title: 'Comparación completa',
            data: {
              headers: ['Característica', 'Mitosis', 'Meiosis'],
              rows: [
                ['Tipo celular', 'Somática', 'Germinal'],
                ['Nº de divisiones', '1', '2'],
                ['Células finales', '2', '4'],
                ['Ploidía final', 'Diploide', 'Haploide'],
                ['Nº cromosómico', 'Se mantiene', 'Se reduce'],
                ['Crossing over', 'No', 'Sí (Profase I)'],
                ['Función', 'Crecimiento y reparación', 'Formación de gametos'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Regla y aclaración',
            content: 'MITOSIS = MANTIENE; MEIOSIS = MITAD + MEZCLA. Existen mitosis, meiosis I y meiosis II; NO existe "mitosis I" ni "mitosis II".',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'No disyunción y aneuploidías',
            content:
              'Si la segregación es incorrecta en la anafase (no disyunción), las células hijas quedan con un número anómalo de cromosomas (aneuploidía), como en la trisomía 21 (ver «Bases cromosómicas de la herencia»).',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-gametogenesis',
    title: 'Gametogénesis: ovogénesis y espermatogénesis',
    subtitle: 'Formación de gametos, detenciones del ovocito, espermatogénesis y fecundación',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'MEIOSIS ≠ gametogénesis: la meiosis describe las fases de división; la gametogénesis aplica esos procesos para formar gametos (ovogénesis y espermatogénesis).',
      'Ovogénesis: el ovocito primario queda detenido en PROFASE I (diploteno) hasta la pubertad; al completar meiosis I → ovocito secundario + cuerpo polar; se detiene en METAFASE II (~3 h antes de la ovulación).',
      'El citoplasma se reparte desigual: la ovogénesis da 1 gameto funcional + 3 cuerpos polares.',
      'Espermatogénesis: inicia en la pubertad, en los túbulos seminíferos, asociada a las células de Sertoli. Espermatogonio → espermatocito primario → (meiosis I) → secundarios → (meiosis II) → espermátides → espermiogénesis → espermatozoides. Profase I ~22 días; regulación por LH/FSH.',
      'Espermiogénesis = espermátide → espermatozoide: reduce citoplasma y forma cabeza, acrosoma, pieza intermedia y cola.',
      'Fecundación: n(23) + n(23) → cigoto 2n(46), recuperando la diploidía.',
    ],
    sections: [
      {
        id: 'ggam-1',
        number: 1,
        title: 'Meiosis vs gametogénesis',
        keyTerms: ['gametogénesis', 'ovogénesis', 'espermatogénesis'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La gametogénesis convierte células germinales en gametos y tiene dos formas: ovogénesis y espermatogénesis. Conviene no confundirla con la meiosis: la MEIOSIS describe las fases de la división (ver «División celular»); la GAMETOGÉNESIS aplica esa división a la formación concreta de óvulos y espermatozoides.',
          },
        ],
      },
      {
        id: 'ggam-2',
        number: 2,
        title: 'Ovogénesis',
        keyTerms: ['ovocito primario', 'Profase I', 'Metafase II', 'cuerpos polares'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Lo más importante: el ovocito primario queda DETENIDO en PROFASE I (diploteno) hasta la pubertad. Después, la meiosis se reanuda; al completar la meiosis I se forman el ovocito secundario y un cuerpo polar, y el ovocito vuelve a detenerse en METAFASE II, aproximadamente 3 horas antes de la ovulación.',
          },
          {
            type: 'note',
            title: 'Resultado: 1 útil + 3 polares',
            content: 'La división del citoplasma es desigual: el ovocito funcional se queda con casi todo el citoplasma. Resultado: 1 gameto femenino funcional + 3 cuerpos polares.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Detención prolongada y edad materna',
            content:
              'La larga detención del ovocito en Profase I (años, hasta la ovulación de cada ciclo) se relaciona con el aumento de aneuploidías conforme avanza la edad materna.',
          },
        ],
      },
      {
        id: 'ggam-3',
        number: 3,
        title: 'Espermatogénesis y espermiogénesis',
        keyTerms: ['espermatogénesis', 'túbulos seminíferos', 'Sertoli', 'espermiogénesis', 'acrosoma'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La espermatogénesis inicia en la PUBERTAD, en los TÚBULOS SEMINÍFEROS, asociada a las células de SERTOLI, y está regulada por LH y FSH. Los espermatocitos primarios pasan ~22 días en Profase I.',
          },
          {
            type: 'steps',
            title: 'Secuencia',
            steps: [
              'Espermatogonio.',
              'Espermatocito primario → meiosis I → espermatocitos secundarios.',
              'Meiosis II → espermátides.',
              'Espermiogénesis: la espermátide se transforma en espermatozoide (reduce citoplasma; forma cabeza, acrosoma, pieza intermedia y cola).',
              'Espermatozoides.',
            ],
          },
        ],
      },
      {
        id: 'ggam-4',
        number: 4,
        title: 'Fecundación y clonación',
        keyTerms: ['fecundación', 'cigoto', 'clonación', 'transferencia nuclear'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La meiosis produce gametos haploides (n = 23). En la FECUNDACIÓN, óvulo 23 + espermatozoide 23 → cigoto 2n = 46, recuperando la diploidía.',
          },
          {
            type: 'comparison',
            title: 'Fecundación vs clonación',
            left: {
              title: 'Fecundación (meiosis)',
              items: ['Une dos gametos haploides.', 'Con crossing over → variabilidad genética.', 'Cigoto 2n con mezcla de ambos padres.'],
            },
            right: {
              title: 'Clonación (transferencia nuclear)',
              items: ['Núcleo somático → óvulo enucleado.', 'Conserva la información del donante.', 'EVITA el crossing over → no busca variabilidad.'],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-citogenetica-clinica',
    title: 'Citogenética clínica: anomalías cromosómicas y síndromes',
    subtitle: 'Cariotipo, anomalías numéricas y estructurales, y los síndromes por aneuploidía',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'La citogenética clínica estudia los cromosomas (estructura, número y alteraciones) con aplicación médica: ADN → cromatina → cromosoma → cariotipo → alteraciones.',
      'Enfoque de examen ★: relacionar el CARIOTIPO con el SÍNDROME, no memorizar toda la clínica de cada uno.',
      'Anomalías NUMÉRICAS: monosomía (2n − 1, falta un cromosoma) y trisomía (2n + 1, uno de más); la aneuploidía surge por NO DISYUNCIÓN en la anafase.',
      'Anomalías ESTRUCTURALES: deleción (terminal/intersticial), inversión y translocación (recíproca o robertsoniana = fusión de acrocéntricos → 45 cromosomas).',
      'Aneuploidías clave: Down = trisomía 21 · Edwards = 18 · Patau = 13.',
      'Cromosomas sexuales: Turner = 45,X (mujer, talla baja, disgenesia gonadal) · Klinefelter = 47,XXY (varón, ginecomastia, azoospermia) · Triple X = 47,XXX (mujer, talla alta).',
    ],
    sections: [
      {
        id: 'gcit-1',
        number: 1,
        title: '¿Qué estudia la citogenética clínica?',
        keyTerms: ['citogenética clínica', 'cariotipo', 'aneuploidía'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La citogenética clínica estudia los cromosomas —su estructura, su número y sus alteraciones— con aplicación médica. La cadena conceptual es: ADN → cromatina → cromosoma → cariotipo → alteraciones cromosómicas. El ser humano tiene 46 cromosomas (23 pares): los pares 1–22 son autosomas y el par 23 es sexual (46,XX femenino / 46,XY masculino). Ver «Bases cromosómicas de la herencia» para el cariotipo y el bandeo.',
          },
          {
            type: 'note',
            title: 'El cariotipo permite ver',
            content: 'Cromosomas adicionales o faltantes y alteraciones estructurales (por ejemplo, deleciones), sobre la organización cromosómica ordenada por tamaño.',
          },
        ],
      },
      {
        id: 'gcit-2',
        number: 2,
        title: 'Anomalías numéricas y aneuploidía',
        keyTerms: ['monosomía', 'trisomía', 'aneuploidía', 'no disyunción'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Las anomalías NUMÉRICAS afectan la cantidad de cromosomas. La MONOSOMÍA es la falta de un cromosoma (2n − 1) y la TRISOMÍA es un cromosoma adicional (2n + 1). La ANEUPLOIDÍA es cualquier alteración del número (uno de más o de menos) y se origina por errores de NO DISYUNCIÓN, especialmente durante la ANAFASE.',
          },
          {
            type: 'note',
            title: 'Asociación para examen ★',
            content: 'Anafase → no disyunción → aneuploidía. Monosomía = 2n − 1 · Trisomía = 2n + 1.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Enlace con la meiosis',
            content:
              'La no disyunción durante la meiosis (ver «División celular») reparte mal los cromosomas hacia los gametos; la larga detención del ovocito en Profase I ayuda a explicar el aumento de aneuploidías conforme avanza la edad materna.',
          },
        ],
      },
      {
        id: 'gcit-3',
        number: 3,
        title: 'Anomalías estructurales',
        keyTerms: ['deleción', 'inversión', 'translocación', 'robertsoniana', 'disomía uniparental'],
        blocks: [
          {
            type: 'list',
            title: 'Tipos de alteración estructural',
            items: [
              'Deleción: pérdida de un segmento de ADN; puede ser terminal o intersticial.',
              'Inversión: un segmento del cromosoma cambia de orientación.',
              'Translocación: intercambio de material genético entre cromosomas; puede ser recíproca o robertsoniana.',
            ],
          },
          {
            type: 'note',
            title: 'Translocación robertsoniana',
            content: 'Fusión de cromosomas acrocéntricos en la región de sus centrómeros; el resultado es un total de 45 cromosomas.',
          },
          {
            type: 'definition',
            title: 'Disomía uniparental',
            content: 'Dos copias de un mismo cromosoma provenientes de un solo progenitor y ninguna del otro. — Disomía uniparental.',
          },
        ],
      },
      {
        id: 'gcit-4',
        number: 4,
        title: 'Síndromes por aneuploidía (cariotipo ↔ síndrome ★)',
        keyTerms: ['Down', 'Edwards', 'Patau', 'Turner', 'Klinefelter', 'Triple X'],
        blocks: [
          {
            type: 'table',
            title: 'Aneuploidías más frecuentes',
            data: {
              headers: ['Síndrome', 'Cariotipo', 'Rasgos clave (según clase)'],
              rows: [
                ['Down', 'Trisomía 21', 'Pliegue epicántico, puente nasal plano, manchas de Brushfield, pliegue simiano'],
                ['Edwards', 'Trisomía 18', 'Bajo peso, microcefalia, micrognatia, cabalgamiento de dedos, cardiopatía; supervivencia reducida'],
                ['Patau', 'Trisomía 13', 'Labio/paladar hendido, microcefalia, polidactilia, malformaciones cerebrales/cardíacas'],
                ['Turner', '45,X', 'Mujer; talla baja, cuello alado, disgenesia gonadal, alteraciones de la aorta'],
                ['Klinefelter', '47,XXY', 'Varón; ginecomastia, testículos pequeños, azoospermia/infertilidad'],
                ['Triple X', '47,XXX', 'Mujer; talla alta; suele pasar desapercibido'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Números de las trisomías',
            content: 'Patau 13 · Edwards 18 · Down 21. Sexuales: Turner 45,X · Klinefelter 47,XXY · Triple X 47,XXX.',
          },
        ],
      },
      {
        id: 'gcit-5',
        number: 5,
        title: 'Glosario de términos clínicos',
        keyTerms: ['pliegue epicántico', 'manchas de Brushfield', 'micrognatia', 'ginecomastia'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Términos usados al describir los síndromes (como referencia, no para memorizar en detalle):',
          },
          {
            type: 'table',
            data: {
              headers: ['Término', 'Significado'],
              rows: [
                ['Pliegue epicántico', 'Piel del párpado superior que cubre el ángulo interno del ojo'],
                ['Manchas de Brushfield', 'Manchas blanquecinas/grisáceas en la periferia del iris'],
                ['Micrognatia', 'Mandíbula inferior pequeña'],
                ['Microtia', 'Oreja pequeña o de desarrollo incompleto'],
                ['Microftalmia', 'Desarrollo incompleto de uno o ambos ojos'],
                ['Paladar ojival', 'Paladar estrecho y alto'],
                ['Polidactilia', 'Más dedos de lo habitual'],
                ['Ginecomastia', 'Aumento del tejido mamario en el varón'],
                ['Criptorquidia', 'Testículo no descendido'],
              ],
            },
          },
        ],
      },
      {
        id: 'gcit-6',
        number: 6,
        title: 'Correlación clínica',
        keyTerms: ['detección prenatal', 'ultrasonido estructural'],
        blocks: [
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Detección prenatal en Down',
            content:
              'Se menciona el ultrasonido estructural alrededor de las 12–13 semanas, con valoración del hueso nasal y la región occipital, como parte de la detección prenatal del síndrome de Down.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-errores-metabolismo',
    title: 'Errores innatos del metabolismo y tamiz neonatal',
    subtitle: 'Fenilcetonuria, hipotiroidismo congénito, galactosemia e hiperplasia suprarrenal congénita',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'El tamiz neonatal (2.º–7.º día de vida) busca detectar temprano para tratar temprano y prevenir complicaciones.',
      'Fenilcetonuria (PKU): déficit de fenilalanina hidroxilasa → ↑ fenilalanina (no pasa a tirosina) → daño neurológico; tratamiento = dieta temprana (el aspartamo contiene fenilalanina).',
      'Hipotiroidismo congénito: causa principal disgenesia tiroidea (~85 %); tratamiento levotiroxina; en el tamiz se mide tirotropina (TSH).',
      'Galactosemia: defecto del metabolismo de la galactosa (vía galactosa-1-fosfato) → acumulación → daño hepático/gastrointestinal.',
      'Hiperplasia suprarrenal congénita: déficit de 21-hidroxilasa (~95 %) → ↓ cortisol y aldosterona + ↑ andrógenos.',
      'Enfoque de examen ★: por cada patología, el binomio defecto → consecuencia y su relación con el tamiz.',
    ],
    sections: [
      {
        id: 'gmet-1',
        number: 1,
        title: 'Tamiz neonatal',
        keyTerms: ['tamiz neonatal'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El tamiz neonatal básico se realiza entre el 2.º y el 7.º día de vida y sirve para detectar de forma presintomática cuatro patologías: fenilcetonuria, hipotiroidismo congénito, galactosemia e hiperplasia suprarrenal congénita.',
          },
          {
            type: 'note',
            title: 'Idea central',
            content: 'Detectar temprano → tratar temprano → prevenir complicaciones. La detección antes de los síntomas permite tratar antes del daño.',
          },
        ],
      },
      {
        id: 'gmet-2',
        number: 2,
        title: 'Fenilcetonuria (PKU)',
        keyTerms: ['fenilalanina hidroxilasa', 'fenilalanina', 'dieta'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Se debe al déficit de FENILALANINA HIDROXILASA, la enzima que convierte la fenilalanina en tirosina (mutación asociada al cromosoma 12). Sin ella, la fenilalanina no pasa a tirosina y se ACUMULA, produciendo daño neurológico.',
          },
          {
            type: 'note',
            title: 'Vía bloqueada',
            content: '↓ fenilalanina hidroxilasa → ↑ fenilalanina → daño neurológico. La fenilalanina es un aminoácido esencial de los alimentos ricos en proteínas (carnes, lácteos).',
          },
          {
            type: 'note',
            title: 'Tratamiento y aspartamo',
            content: 'El tratamiento destacado es la dieta temprana y adecuada (restricción de fenilalanina). El aspartamo contiene fenilalanina, por lo que debe evitarse.',
          },
        ],
      },
      {
        id: 'gmet-3',
        number: 3,
        title: 'Hipotiroidismo congénito',
        keyTerms: ['disgenesia tiroidea', 'levotiroxina', 'tirotropina'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Enfermedad endocrina por síntesis insuficiente de hormonas tiroideas. La causa principal es la DISGENESIA TIROIDEA (~85 %; el ~15 % restante corresponde a alteraciones de la síntesis hormonal). Las hormonas tiroideas son clave para el neurodesarrollo, el desarrollo cerebral y la maduración ósea.',
          },
          {
            type: 'note',
            title: 'Tamiz y tratamiento',
            content: 'En el tamiz se mide la TIROTROPINA (TSH). El tratamiento es levotiroxina, con reemplazo temprano. Se toma nueva muestra en prematuros, peso < 2.5 kg, críticos o gemelos.',
          },
        ],
      },
      {
        id: 'gmet-4',
        number: 4,
        title: 'Galactosemia',
        keyTerms: ['galactosa', 'galactosa-1-fosfato', 'daño hepático'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Enfermedad hereditaria con incapacidad para metabolizar adecuadamente la GALACTOSA de la dieta (defecto en la vía de la galactosa-1-fosfato). La galactosa se ACUMULA y provoca daño orgánico. Como la leche expone al recién nacido desde el nacimiento, la enfermedad puede progresar con rapidez.',
          },
          {
            type: 'list',
            title: 'Hallazgos destacados',
            items: [
              'Daño hepatocelular, hepatomegalia e ictericia.',
              'Vómitos, diarrea e intolerancia alimentaria.',
              'Alteraciones de la coagulación y posible septicemia.',
            ],
          },
        ],
      },
      {
        id: 'gmet-5',
        number: 5,
        title: 'Hiperplasia suprarrenal congénita',
        keyTerms: ['21-hidroxilasa', 'cortisol', 'andrógenos'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Grupo de enfermedades hereditarias por deficiencia de las enzimas necesarias para sintetizar cortisol en la corteza suprarrenal. La más frecuente (~95 %) es el déficit de 21-HIDROXILASA.',
          },
          {
            type: 'note',
            title: 'Desequilibrio hormonal',
            content: '↓ 21-hidroxilasa → ↓ cortisol y aldosterona + ↑ andrógenos. Este desequilibrio puede alterar el desarrollo sexual.',
          },
        ],
      },
      {
        id: 'gmet-6',
        number: 6,
        title: 'Tabla resumen y correlación',
        keyTerms: ['defecto', 'consecuencia'],
        blocks: [
          {
            type: 'table',
            title: 'Tamiz neonatal: defecto → consecuencia ★',
            data: {
              headers: ['Patología', 'Defecto básico', 'Consecuencia / clave'],
              rows: [
                ['Fenilcetonuria', '↓ fenilalanina hidroxilasa', '↑ fenilalanina → daño neurológico (tratar con dieta)'],
                ['Hipotiroidismo congénito', 'Disgenesia tiroidea', '↓ hormonas tiroideas → neurodesarrollo (levotiroxina; tamiz: TSH)'],
                ['Galactosemia', 'Metabolismo de galactosa', 'Acumulación → daño hepático/gastrointestinal'],
                ['Hiperplasia suprarrenal congénita', '↓ 21-hidroxilasa', '↓ cortisol/aldosterona + ↑ andrógenos'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'La lógica del tamiz',
            content: 'La detección presintomática permite iniciar el tratamiento antes de que se produzca el daño. Memoriza los cuatro binomios defecto → consecuencia.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-organogenesis',
    title: 'Organogénesis y capas germinales',
    subtitle: 'Del cigoto a las tres capas germinales y las semanas 4–8 del desarrollo',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'Secuencia ★: fecundación → cigoto → divisiones por mitosis → mórula → blastocisto → gastrulación → 3 capas germinales → organogénesis.',
      'El blastocisto aparece cuando se forma una CAVIDAD; tiene trofoblasto (externo) y embrioblasto (interno, que dará el embrión).',
      'La gastrulación (epiblasto/hipoblasto) establece las tres capas: ECTODERMO, MESODERMO y ENDODERMO (disco trilaminar).',
      'Ectodermo → SNC/SNP, epidermis, piel, uñas, pelo, cristalino y córnea (+ cresta neural).',
      'Mesodermo → tejido conectivo, hueso, cartílago, músculo, sangre, linfático, riñón/uréteres y reproductor.',
      'Endodermo → tubo digestivo, hígado, vías respiratorias, vejiga y tiroides/paratiroides.',
      'Semanas 4–8: 4 = arcos + corazón + forma de C; 5 = cabeza; 6 = radios digitales; 7 = muescas; 8 = dedos libres + párpados y pabellones.',
    ],
    sections: [
      {
        id: 'gorg-1',
        number: 1,
        title: 'La secuencia del desarrollo',
        keyTerms: ['organogénesis', 'cigoto', 'mórula', 'blastocisto'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La organogénesis es la formación de los órganos y sistemas durante el desarrollo embrionario. Las primeras divisiones son por MITOSIS, por lo que las células hijas conservan el mismo material genético. Factores endógenos y exógenos pueden alterar el proceso.',
          },
          {
            type: 'steps',
            title: 'De la fecundación a la organogénesis',
            steps: [
              'Fecundación: óvulo + espermatozoide → CIGOTO.',
              'Divisiones por mitosis (1 → 2 → 4 → 8 …).',
              'MÓRULA: masa celular compacta (~12–32, hasta 64 células).',
              'BLASTOCISTO: aparece la cavidad; trofoblasto + embrioblasto.',
              'GASTRULACIÓN: se organizan las tres capas germinales.',
              'ORGANOGÉNESIS: se forman los órganos y sistemas.',
            ],
          },
        ],
      },
      {
        id: 'gorg-2',
        number: 2,
        title: 'Blastocisto: trofoblasto y embrioblasto',
        keyTerms: ['cavidad', 'trofoblasto', 'embrioblasto'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Al llegar el embrión al útero entra líquido y se forma una CAVIDAD: esto diferencia al blastocisto de la mórula. Se distinguen dos poblaciones celulares.',
          },
          {
            type: 'comparison',
            title: 'Dos partes del blastocisto',
            left: {
              title: 'Trofoblasto',
              items: ['Capa externa.', 'Rodea al blastocisto.', 'Contribuye a los anexos (placenta).'],
            },
            right: {
              title: 'Embrioblasto',
              items: ['Grupo celular interno.', 'Dará origen al embrión.'],
            },
          },
        ],
      },
      {
        id: 'gorg-3',
        number: 3,
        title: 'Gastrulación y disco trilaminar',
        keyTerms: ['gastrulación', 'epiblasto', 'hipoblasto', 'cresta neural'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Durante la gastrulación el embrioblasto se organiza en capas (epiblasto e hipoblasto) y se establecen las tres capas germinativas —ECTODERMO, MESODERMO y ENDODERMO— que forman el disco trilaminar. El mesodermo se subdivide en paraxial, intermedio y lateral.',
          },
          {
            type: 'note',
            title: 'Cresta neural',
            content: 'Asociada al tubo neural, sus células migran y contribuyen a estructuras del sistema nervioso periférico, melanocitos y parte del macizo craneofacial (junto al tubo neural y la notocorda).',
          },
        ],
      },
      {
        id: 'gorg-4',
        number: 4,
        title: 'Derivados de las capas germinales ★',
        keyTerms: ['ectodermo', 'mesodermo', 'endodermo'],
        blocks: [
          {
            type: 'table',
            title: 'Qué origina cada capa',
            data: {
              headers: ['Capa germinal', 'Deriva principalmente en'],
              rows: [
                ['Ectodermo', 'SNC y SNP, epidermis, piel, uñas, pelo, cristalino y córnea'],
                ['Mesodermo', 'Tejido conectivo, hueso, cartílago, músculo, sangre, linfático, riñón/uréteres y sistema reproductor'],
                ['Endodermo', 'Tubo digestivo, hígado, vías respiratorias, vejiga y tiroides/paratiroides'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Regla rápida',
            content: 'Ectodermo = nervioso + tegumentos · Mesodermo = soporte + músculo + sangre + riñón · Endodermo = tubo digestivo + respiratorio + hígado + tiroides.',
          },
        ],
      },
      {
        id: 'gorg-5',
        number: 5,
        title: 'Semanas 4–8 ★',
        keyTerms: ['arcos faríngeos', 'radios digitales', 'muescas'],
        blocks: [
          {
            type: 'table',
            title: 'Lo que debes recordar de cada semana',
            data: {
              headers: ['Semana', 'Evento clave'],
              rows: [
                ['4', 'Arcos faríngeos (1.º mandibular, 2.º hioideo) + prominencia cardíaca + forma de C + esbozos de extremidades'],
                ['5', 'Crecimiento marcado de la cabeza (prominencias cerebrales y faciales)'],
                ['6', 'Radios digitales (primordios de los dedos) + se distingue el codo'],
                ['7', 'Muescas entre los radios digitales (dedos más definidos)'],
                ['8', '(~54–55 días) dedos libres + párpados y pabellones auriculares más desarrollados'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Regla rápida',
            content: '4 = arco + corazón + C · 5 = cabeza · 6 = radios · 7 = muescas · 8 = dedos libres.',
          },
        ],
      },
      {
        id: 'gorg-6',
        number: 6,
        title: 'Correlación: el período crítico',
        keyTerms: ['período crítico', 'teratógenos'],
        blocks: [
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Organogénesis = ventana de máxima susceptibilidad',
            content:
              'Como durante la organogénesis (semanas ~3–8) se están formando activamente los órganos, es el período de MÁXIMA susceptibilidad a los teratógenos. Es el puente hacia el tema siguiente: la teratogénesis.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-teratogenesis',
    title: 'Teratogénesis',
    subtitle: 'Grupos de teratógenos y los factores que determinan el daño (agente, dosis, momento)',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'Teratogénesis: alteraciones del desarrollo por factores que interfieren con el embrión o el feto (teratos = «monstruo»).',
      'El efecto depende de AGENTE + DOSIS + DURACIÓN + MOMENTO del desarrollo («no es el veneno, sino la dosis»).',
      'Genética del embrión + ambiente: muchas malformaciones son multifactoriales; gran parte tiene causa desconocida.',
      'Farmacológicos ★: talidomida → focomelia (~21–40 días); ácido valproico → defectos del tubo neural; estreptomicina → sordera; tetraciclinas → pigmentación del esmalte.',
      'Físicos ★: rayos X / radiaciones → microcefalia/hidrocefalia; hipertermia → defectos del tubo neural; mecánicos (bandas amnióticas, oligohidramnios).',
      'Infecciosos ★: rubéola → cataratas + cardiopatía + sordera; toxoplasma → hidrocefalia + calcificaciones; CMV → lesión cerebral.',
    ],
    sections: [
      {
        id: 'gter-1',
        number: 1,
        title: 'Concepto y factores del daño',
        keyTerms: ['teratógeno', 'dosis', 'momento del desarrollo'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La teratogénesis es la aparición de alteraciones del desarrollo por factores que interfieren con el embrión o el feto (teratos = «monstruo»); se asocia a malformaciones anatómicas, que pueden detectarse en la gestación, al nacimiento o después.',
          },
          {
            type: 'note',
            title: 'Principio de dosis ★',
            content: '«No es el veneno, sino la dosis.» El riesgo/gravedad depende del agente + la dosis + la duración + el momento de exposición: no basta con identificar el agente, importa cuánto y cuándo estuvo expuesto el embrión.',
          },
        ],
      },
      {
        id: 'gter-2',
        number: 2,
        title: 'Genética + ambiente y epidemiología',
        keyTerms: ['multifactorial', 'malformaciones congénitas'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Algunos defectos resultan de la interacción entre predisposición genética y factores ambientales, lo que explica por qué muchas malformaciones son MULTIFACTORIALES. Una gran parte tiene, además, origen desconocido.',
          },
          {
            type: 'note',
            title: 'Idea central (porcentajes aproximados)',
            content: 'En la gráfica de la clase: ~50 % desconocidas, ~25 % multifactoriales, ~10 % cromosómicas, ~8 % monogénicas, ~7 % ambientales. Conserva la idea (muchas son desconocidas o multifactoriales), no los números exactos.',
          },
        ],
      },
      {
        id: 'gter-3',
        number: 3,
        title: 'Teratógenos farmacológicos ★',
        keyTerms: ['talidomida', 'focomelia', 'ácido valproico'],
        blocks: [
          {
            type: 'table',
            title: 'Fármacos y su efecto emblemático',
            data: {
              headers: ['Agente', 'Efecto destacado'],
              rows: [
                ['Talidomida', 'Focomelia (acortamiento/ausencia de extremidades); período crítico ~21–40 días'],
                ['Ácido valproico (anticonvulsivante)', 'Defectos del cierre del tubo neural'],
                ['Isotretinoína (ácido retinoico, acné)', 'Daño cardíaco y cerebral'],
                ['Anticoagulantes dicumarínicos', 'Alteraciones del SNC, atrofia óptica, cardiopatía, retraso del crecimiento'],
                ['Estreptomicina (antibiótico)', 'Sordera'],
                ['Tetraciclinas (antibiótico)', 'Pigmentación del esmalte dentario'],
                ['Antineoplásicos', 'Muerte embrionaria/fetal y malformaciones diversas'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Claves ★',
            content: 'Talidomida → focomelia. Ácido valproico → tubo neural.',
          },
        ],
      },
      {
        id: 'gter-4',
        number: 4,
        title: 'Teratógenos físicos ★',
        keyTerms: ['rayos X', 'hipertermia', 'radiaciones'],
        blocks: [
          {
            type: 'list',
            title: 'Agentes físicos',
            items: [
              'Radiaciones atómicas: microcefalia y retraso psicomotor.',
              'Rayos X: aborto, microcefalia, hidrocefalia, defectos oculares y retraso del crecimiento.',
              'Hipertermia: defectos del cierre del tubo neural, microcefalia y alteraciones de cara/cuello.',
              'Factores mecánicos: bandas amnióticas, oligohidramnios, gestación múltiple → deformaciones.',
            ],
          },
          {
            type: 'note',
            title: 'Clave ★',
            content: 'Rayos X / radiaciones → microcefalia/hidrocefalia. Hipertermia → defectos del tubo neural.',
          },
        ],
      },
      {
        id: 'gter-5',
        number: 5,
        title: 'Teratógenos infecciosos ★',
        keyTerms: ['rubéola', 'toxoplasma', 'citomegalovirus'],
        blocks: [
          {
            type: 'table',
            title: 'Infecciones y su efecto',
            data: {
              headers: ['Agente', 'Efecto destacado'],
              rows: [
                ['Rubéola', 'Cataratas + cardiopatía congénita + sordera (0–60 días cataratas/cardiopatía; hasta ~120 días sordera)'],
                ['Citomegalovirus (CMV)', 'Lesión cerebral y retraso del crecimiento'],
                ['Herpes simple', 'Microcefalia, calcificaciones intracraneales, defectos oculares'],
                ['Varicela zóster', 'Defectos de piel, reducción de miembros, retraso del crecimiento'],
                ['Parvovirus B19', 'Hidrops y anemia hemolítica'],
                ['Toxoplasma gondii', 'Hidrocefalia, microftalmia, coriorretinitis y calcificaciones cerebrales'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Claves ★',
            content: 'Rubéola → ojos + corazón + audición. Toxoplasma → hidrocefalia + calcificaciones.',
          },
        ],
      },
      {
        id: 'gter-6',
        number: 6,
        title: 'Correlación clínica',
        keyTerms: ['prevención', 'folato', 'rayos X'],
        blocks: [
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Prevención en la práctica',
            content:
              'Identificar un posible embarazo ANTES de exponer a rayos X; vigilar fármacos de riesgo (control de valproato/isotretinoína) y suplementar folato por el riesgo de defectos del tubo neural. También cuentan factores maternos como la diabetes y la deficiencia de yodo.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-diferenciacion-sexual',
    title: 'Diferenciación sexual: genes y vías',
    subtitle: 'Tres niveles, gónada indiferenciada, genes SRY/SOX9/DAX1/SF1 y las vías masculina y femenina',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'Tres niveles ★: CROMOSÓMICO (XX/XY) → GONADAL (ovario/testículo) → FENOTÍPICO (genitales internos/externos). Regla: cromosoma → gónada → fenotipo.',
      'Al inicio existe una GÓNADA INDIFERENCIADA (SF1 participa en el primordio); de ella parte la vía masculina o la femenina.',
      'SRY (cromosoma Y) inicia la vía masculina activando SOX9; SOX9 induce las células de SERTOLI. DAX1 (cromosoma X) regula la vía femenina y antagoniza la masculina. SF1: primordio gonadal/genital y función endocrina.',
      'Cadena masculina ★: SRY → SOX9 → Sertoli → AMH → regresión de Müller · Leydig → testosterona → conductos de Wolff · testosterona → 5α-reductasa → DHT → genitales externos, próstata y uretra.',
      'Vía femenina: sin la señal masculina se forma el ovario; Müller PERSISTE (trompas, útero, parte superior de vagina) y Wolff regresa.',
      'Enfoque de examen: comprender la lógica de la cadena, no memorizar cada gen o mecanismo.',
    ],
    sections: [
      {
        id: 'gdsx-1',
        number: 1,
        title: 'Tres niveles de diferenciación',
        keyTerms: ['sexo cromosómico', 'sexo gonadal', 'sexo fenotípico'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La diferenciación sexual ocurre en tres niveles encadenados. El sexo CROMOSÓMICO depende del cariotipo (XX, XY u otras variaciones); el sexo GONADAL depende de si se desarrolla ovario o testículo; y el sexo FENOTÍPICO depende de los genitales internos y externos. Cada nivel condiciona al siguiente.',
          },
          {
            type: 'note',
            title: 'Regla ★',
            content: 'Cromosoma → gónada → fenotipo. Una alteración puede aparecer en cualquiera de los tres niveles.',
          },
        ],
      },
      {
        id: 'gdsx-2',
        number: 2,
        title: 'Gónada indiferenciada y genes clave',
        keyTerms: ['gónada indiferenciada', 'SRY', 'SOX9', 'DAX1', 'SF1'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Al inicio del desarrollo no hay ovario ni testículo definidos: existe una GÓNADA INDIFERENCIADA. A partir de ella, un pequeño grupo de genes decide la vía.',
          },
          {
            type: 'table',
            title: 'Los cuatro genes',
            data: {
              headers: ['Gen', 'Localización / papel', 'Idea clave'],
              rows: [
                ['SRY', 'Brazo corto del cromosoma Y', 'Inicia la vía masculina activando SOX9'],
                ['SOX9', 'Actúa tras SRY', 'Induce las células de Sertoli; su duplicación en XX puede favorecer testículo'],
                ['DAX1', 'Cromosoma X', 'Regula la vía gonadal femenina; antagonista de la masculina'],
                ['SF1', 'Antes de la diferenciación definitiva', 'Primordio gonadal/genital y función endocrina; su falla → insuficiencia suprarrenal/disgenesia gonadal'],
              ],
            },
          },
        ],
      },
      {
        id: 'gdsx-3',
        number: 3,
        title: 'Vía masculina ★',
        keyTerms: ['Sertoli', 'AMH', 'Leydig', 'testosterona', '5α-reductasa', 'DHT'],
        blocks: [
          {
            type: 'steps',
            title: 'La cadena masculina',
            steps: [
              'XY → SRY → SOX9 → células de SERTOLI.',
              'Sertoli producen AMH (hormona antimülleriana) → REGRESIÓN de los conductos de Müller.',
              'Células de LEYDIG → TESTOSTERONA → desarrollo de los conductos de WOLFF (epidídimo, conductos deferentes, vesículas seminales).',
              'Testosterona → 5α-REDUCTASA → DHT (dihidrotestosterona).',
              'DHT → genitales externos masculinos, próstata y uretra.',
            ],
          },
          {
            type: 'note',
            title: 'Dos hormonas, dos destinos',
            content: 'La testosterona actúa sobre los conductos INTERNOS (Wolff); la DHT, derivada de ella por la 5α-reductasa, actúa sobre los genitales EXTERNOS y la próstata.',
          },
        ],
      },
      {
        id: 'gdsx-4',
        number: 4,
        title: 'Vía femenina y conductos',
        keyTerms: ['conductos de Müller', 'conductos de Wolff', 'ovario'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'En el escenario XX, y en ausencia de la señal masculina, la gónada sigue la vía ovárica (con DAX1 en la regulación) y se forma el OVARIO. Sin AMH, los conductos de MÜLLER persisten; sin testosterona, los de WOLFF regresan. Los genitales externos femeninos incluyen clítoris, labios menores y mayores y orificio vaginal.',
          },
          {
            type: 'comparison',
            title: 'Qué forma cada conducto',
            left: {
              title: 'Müller (paramesonéfrico)',
              items: ['Trompas de Falopio', 'Útero', 'Parte superior de la vagina', 'Regresa por la AMH en la vía masculina'],
            },
            right: {
              title: 'Wolff (mesonéfrico)',
              items: ['Epidídimo', 'Conductos deferentes', 'Vesículas seminales', 'Se desarrolla por la testosterona'],
            },
          },
        ],
      },
      {
        id: 'gdsx-5',
        number: 5,
        title: 'Genitales externos: período indiferenciado',
        keyTerms: ['tubérculo genital', 'pliegue cloacal', 'eminencias genitales'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Antes de diferenciarse, los genitales externos comparten estructuras comunes: tubérculo genital, pliegue cloacal, eminencias genitales y orificio cloacal. La acción androgénica (DHT) los masculiniza; en su ausencia siguen el desarrollo femenino. Enlaza con la organogénesis (derivados de las capas germinales).',
          },
        ],
      },
      {
        id: 'gdsx-6',
        number: 6,
        title: 'Correlación clínica: dónde falla la cadena',
        keyTerms: ['5α-reductasa', 'AMH'],
        blocks: [
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Dos fallas típicas en 46,XY',
            content:
              'Déficit de 5α-REDUCTASA: la testosterona es normal pero la DHT baja → masculinización externa incompleta pese al cariotipo 46,XY. Falla de la AMH: no regresan los conductos de Müller → útero y trompas persistentes en una persona 46,XY.',
          },
        ],
      },
    ],
  },
  {
    id: 'genetica-dsd',
    title: 'Diferencias del desarrollo sexual (DSD): enfoque clínico',
    subtitle: 'Qué son, cuándo sospecharlas, diagnóstico de primera línea y tratamiento individualizado',
    colorKey: 'genetica',
    categoria: 'Genética',
    emoji: '🧬',
    keyPoints: [
      'DSD = diferencias del desarrollo sexual: una alteración en el nivel cromosómico, gonadal u hormonal/enzimático. Idea central: sexo cromosómico ≠ necesariamente gonadal ≠ necesariamente fenotípico.',
      'Categorías: 46,XY DSD, 46,XX DSD, formas mixtas, disgenesia gonadal, alteraciones de la síntesis/acción de andrógenos y persistencia de Müller.',
      'Se sospecha ante ambigüedad genital, historia familiar de DSD o discordancia entre genitales y cariotipo.',
      'Primera línea ★: CARIOTIPO (+ FISH para SRY) + HORMONAS (testosterona, DHT, AMH, 17-hidroxiprogesterona, electrolitos) + IMAGEN (ecografía: ¿hay útero?).',
      'Tratamiento individualizado: asignación de género + médico (déficit adrenal → hidrocortisona; desarrollo puberal → terapia hormonal) + quirúrgico según el caso.',
      'Turner (45,X) y Klinefelter (47,XXY) son alteraciones cromosómicas del desarrollo sexual (ver «Citogenética clínica»).',
    ],
    sections: [
      {
        id: 'gdsd-1',
        number: 1,
        title: '¿Qué es una DSD?',
        keyTerms: ['DSD', '46,XY DSD', '46,XX DSD', 'disgenesia gonadal'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Las diferencias del desarrollo sexual (DSD) son variaciones que surgen durante el desarrollo fetal por una alteración en cualquiera de los niveles de la cadena: cromosómico, gonadal u hormonal/enzimático. La idea central es que el sexo cromosómico no determina necesariamente el gonadal, ni este el fenotípico.',
          },
          {
            type: 'list',
            title: 'Categorías',
            items: [
              '46,XY DSD y 46,XX DSD.',
              'Formas mixtas (p. ej., alteraciones cromosómicas sexuales).',
              'Disgenesia gonadal (parcial o completa).',
              'Alteraciones de la síntesis o de la acción de los andrógenos.',
              'Persistencia de los conductos de Müller.',
            ],
          },
          {
            type: 'note',
            title: 'Terminología',
            content: 'En el material aparecen términos históricos (pseudohermafroditismo masculino/femenino, hermafroditismo verdadero u ovotesticular). Conviene reconocerlos como vocabulario, pero razonar en términos actuales: DSD + causa concreta.',
          },
        ],
      },
      {
        id: 'gdsd-2',
        number: 2,
        title: '¿Cuándo sospechar una DSD?',
        keyTerms: ['ambigüedad genital', 'clitoromegalia', 'hipospadias', 'escala de masculinización'],
        blocks: [
          {
            type: 'list',
            title: 'Tres situaciones',
            items: [
              'Ambigüedad genital.',
              'Historia familiar de DSD.',
              'Discordancia entre los genitales y el cariotipo.',
            ],
          },
          {
            type: 'comparison',
            title: 'Ejemplos de ambigüedad genital',
            left: {
              title: 'En genitales de apariencia femenina',
              items: ['Hipertrofia del clítoris (clitoromegalia)', 'Fusión labial posterior', 'Masa inguinal o labial'],
            },
            right: {
              title: 'En genitales de apariencia masculina',
              items: ['Micropene', 'Hipospadias proximal o distal', 'Testículos no descendidos bilaterales'],
            },
          },
          {
            type: 'note',
            title: 'Escala de masculinización externa',
            content: 'Describe objetivamente el grado de masculinización valorando la fusión escrotal, el tamaño del tubérculo genital, la posición del meato uretral y la localización de las gónadas. Importa saber qué variables observa, no memorizar los puntajes.',
          },
        ],
      },
      {
        id: 'gdsd-3',
        number: 3,
        title: 'Diagnóstico de primera línea ★',
        keyTerms: ['cariotipo', 'FISH', 'testosterona', 'DHT', 'AMH', '17-hidroxiprogesterona'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El abordaje integra cariotipo, genética, hormonas e imagen para localizar el punto de falla de la vía. El CARIOTIPO define si hay 46,XX, 46,XY u otra alteración; el FISH valora la presencia y localización de SRY.',
          },
          {
            type: 'table',
            title: 'Qué se pide y por qué',
            data: {
              headers: ['Estudio', 'Qué aporta'],
              rows: [
                ['Cariotipo + FISH (SRY)', 'Sexo cromosómico y presencia del gen SRY'],
                ['Testosterona + DHT', 'Juntas valoran la conversión por 5α-reductasa (testosterona normal con DHT baja → falla enzimática)'],
                ['AMH', 'Función de Sertoli y regresión de Müller'],
                ['17-hidroxiprogesterona + electrolitos', 'Orientan a alteraciones suprarrenales (ver hiperplasia suprarrenal congénita)'],
                ['Ecografía', '¿Hay útero y estructuras müllerianas? ¿Dónde están las gónadas?'],
                ['RM, genitograma, laparoscopia, biopsia gonadal', 'Definir la anatomía interna o el tejido gonadal cuando la ecografía no basta'],
              ],
            },
          },
        ],
      },
      {
        id: 'gdsd-4',
        number: 4,
        title: 'Tratamiento individualizado',
        keyTerms: ['asignación de género', 'hidrocortisona', 'terapia hormonal'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'No hay un tratamiento único: se decide caso por caso, con acompañamiento, considerando anatomía, gónadas, hormonas, desarrollo puberal, cariotipo y la identidad y preferencias de la persona. Tiene tres componentes: asignación de género, tratamiento médico y tratamiento quirúrgico.',
          },
          {
            type: 'table',
            title: 'Tratamiento médico',
            data: {
              headers: ['Situación', 'Sustitución'],
              rows: [
                ['Déficit adrenal', 'Hidrocortisona'],
                ['Necesidad de desarrollo hormonal/puberal', 'Terapia hormonal'],
              ],
            },
          },
        ],
      },
      {
        id: 'gdsd-5',
        number: 5,
        title: 'Turner y Klinefelter dentro de las DSD',
        keyTerms: ['Turner', 'Klinefelter'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los síndromes de Turner (45,X) y Klinefelter (47,XXY), estudiados en «Citogenética clínica», son alteraciones del desarrollo sexual originadas en el nivel cromosómico.',
          },
        ],
      },
      {
        id: 'gdsd-6',
        number: 6,
        title: 'Casos para razonar y cierre del curso',
        keyTerms: ['razonamiento clínico', 'SOX9'],
        blocks: [
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Tres casos ★',
            content:
              '(1) 46,XY + testosterona normal + DHT baja → pensar en déficit de 5α-REDUCTASA. (2) 46,XY + útero y trompas presentes → pensar en la vía de la AMH (persistencia de Müller). (3) 46,XX + desarrollo testicular → pensar en duplicación o activación de SOX9.',
          },
          {
            type: 'note',
            title: 'Cierre del curso',
            content: 'La reconstrucción mental que se debe poder hacer es: cariotipo → genes → gónada → hormonas → estructuras internas → genitales externos → diagnóstico. Comprender el proceso es más útil que memorizarlo.',
          },
        ],
      },
    ],
  },
]
