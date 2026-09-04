import type { Topic } from '../types'

// Genética Básica (UAD · GB01003) — Semana 1, Clases 1–2 (Dra. Cazares).
// Clase 3 (molécula del ADN y código genético) queda pendiente: la semana es parcial.
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
]
