import type { Topic } from '../types'

// Medicina Humanística (UAD · MH01007) — Semana 1 (Clase 1: humanismo médico,
// origen de la vida y del ser humano; Clase 2: corporeidad y unidad biopsicosocial), Semana 3 (la relación médico-paciente,
// sesiones 1–3) y Semana 4 (perfiles patológicos, sesiones 1–3).
export const humanisticaTopics: Topic[] = [
  {
    id: 'humanistica-humanismo-medico',
    title: 'Humanismo médico y humanidades médicas',
    subtitle: 'Qué estudia la Medicina Humanística, humanismo y humanidades médicas, deshumanización y despersonalización, perfil del médico humanista, creencias del paciente y tacto, modelo biopsicosocial',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🫶',
    keyPoints: [
      'HUMANIDADES MÉDICAS: campo interdisciplinario que explora los contextos, experiencias y problemas de la medicina y contribuye a la identidad profesional del médico.',
      'HUMANISMO: forma de vida que pone el énfasis en lo específicamente humano; cobra fuerza en épocas de crisis.',
      'Para Ruy Pérez Tamayo la deshumanización no es solo del médico: también es del sistema de salud que lo sobrecarga.',
      'DESPERSONALIZACIÓN: el paciente se vuelve expediente, cama o enfermedad («el de la cama 20») ★',
      'TACTO médico: sensibilidad para comunicar información difícil con empatía y respeto (no es tocar).',
      'MODELO BIOPSICOSOCIAL: la salud resulta de la interacción de lo biológico, lo psicológico y lo social.',
    ],
    sections: [
      {
        id: 'hhm-1',
        number: 1,
        title: 'Humanismo y humanidades médicas',
        keyTerms: ['humanismo', 'humanidades médicas', 'ethos'],
        blocks: [
          {
            type: 'definition',
            title: 'Humanidades médicas',
            content: 'Campo interdisciplinario y multidisciplinario que explora los contextos, las experiencias y los problemas críticos de la medicina y de la atención de la salud, y que contribuye a formar la identidad profesional del médico. Surgen como respuesta a una medicina cada vez más tecnológica; como disciplina académica se establecieron en el Instituto Karolinska de Estocolmo a finales de los años noventa.',
          },
          {
            type: 'list',
            title: 'Áreas de las humanidades médicas',
            items: [
              'Historia de la medicina.',
              'Filosofía de la ciencia médica.',
              'El encuentro médico-paciente-cuidador.',
              'Comprensión del sufrimiento y la enfermedad, también a través del arte y la literatura.',
            ],
          },
          {
            type: 'paragraph',
            content: 'El HUMANISMO es una forma de vida que valora lo específicamente humano y promueve lo que permite su desarrollo. Suele cobrar fuerza en épocas de crisis. Todos los humanismos ponen al ser humano como fin y valor superior, pero explican de distinto modo su dignidad: el RENACENTISTA por su capacidad de elegir y realizarse, el CRISTIANO por su filiación divina y el ATEO por su autonomía y responsabilidad.',
          },
          {
            type: 'comparison',
            title: 'Humanidades antiguas y contemporáneas',
            left: { title: 'Antiguas', items: ['Antigüedad clásica y Renacimiento', 'Gramática, retórica y poética'] },
            right: { title: 'Contemporáneas (desde el s. XIX)', items: ['Estudian los valores', 'Sociología, antropología, psicología e historia'] },
          },
          {
            type: 'note',
            title: 'Ethos',
            content: 'Forma de ser, modo de vida o proyecto de vida. Desde esta mirada, el cuidado de la salud es también un proyecto moral.',
          },
        ],
      },
      {
        id: 'hhm-2',
        number: 2,
        title: 'Deshumanización y el médico humanista',
        keyTerms: ['deshumanización', 'despersonalización', 'médico humanista'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos fallas distintas',
            left: {
              title: 'Deshumanización',
              items: [
                'Pérdida de la dimensión humana de la atención',
                'Ruy Pérez Tamayo: no es solo culpa del médico; también del sistema de salud que lo sobrecarga',
              ],
            },
            right: {
              title: 'Despersonalización',
              items: [
                'El paciente deja de ser reconocido como persona',
                'Se vuelve un expediente, una cama o una enfermedad: «el de la cama 20»',
              ],
            },
          },
          {
            type: 'list',
            title: 'Perfil del médico humanista: portador, conocedor y aplicador de valores humanos',
            items: [
              'Comprensión y compasión.',
              'Capacidad para afrontar el dolor y la muerte.',
              'Cuidado en la atención.',
              'Respeto a la dignidad, la historia y las decisiones del paciente.',
            ],
          },
          {
            type: 'note',
            title: 'Idea clave',
            content: 'Antes de ser médicos somos personas, y el paciente tiene una historia de vida que debe reconocerse. La relación médico-paciente es una de las principales formas en que se expresa el humanismo médico.',
          },
        ],
      },
      {
        id: 'hhm-3',
        number: 3,
        title: 'Creencias del paciente y tacto',
        keyTerms: ['tacto', 'autonomía', 'objeción de conciencia'],
        blocks: [
          {
            type: 'definition',
            title: 'Tacto médico',
            content: 'No significa tocar: es la sensibilidad para comunicar al paciente información difícil de manera empática y respetuosa. La práctica médica es un acto humano y moral que requiere conocimientos, responsabilidad, comunicación y respeto.',
          },
          {
            type: 'paragraph',
            content: 'Las creencias religiosas, culturales o personales influyen en las decisiones de salud. El médico debe conocerlas para comunicarse con respeto y evitar confrontaciones innecesarias. Su responsabilidad es EXPLICAR riesgos, beneficios y consecuencias, no imponer una decisión. La objeción de conciencia del propio médico se estudia en bioética.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Testigos de Jehová y transfusión',
            content: 'Los Testigos de Jehová rechazan la transfusión de sangre total y de sus componentes principales; el uso de algunas fracciones y técnicas de ahorro de sangre queda a la conciencia de cada persona. En un adulto capaz, la decisión informada se respeta y se documenta en el consentimiento; se planean alternativas (hierro, eritropoyetina, recuperación de sangre en cirugía) desde antes del procedimiento.',
          },
        ],
      },
      {
        id: 'hhm-4',
        number: 4,
        title: 'Dimensiones del ser humano y modelo biopsicosocial',
        keyTerms: ['modelo biopsicosocial', 'animal racional', 'animal simbólico'],
        blocks: [
          {
            type: 'comparison',
            title: 'Qué es lo humano',
            left: { title: 'Animal racional (Aristóteles)', items: ['Capaz de pensamiento abstracto'] },
            right: { title: 'Animal simbólico (Ernst Cassirer)', items: ['Capaz de lenguaje y de pensamiento artístico, místico y religioso'] },
          },
          {
            type: 'list',
            title: 'Dimensiones de la persona',
            items: [
              'Neurofisiológica o física.',
              'Cognitivo-psicológica.',
              'Afectivo-emocional.',
              'Comunicativa y expresiva.',
              'Social.',
              'Vocacional y profesional.',
              'Ético-moral.',
              'Espiritual o anímica.',
            ],
          },
          {
            type: 'table',
            title: 'Modelo biopsicosocial (George Engel, 1977)',
            data: {
              headers: ['Componente', 'Incluye'],
              rows: [
                ['Biológico', 'Genética, virus, bacterias, alteraciones orgánicas o estructurales'],
                ['Psicológico', 'Cognición, emociones, conducta, actitudes'],
                ['Social', 'Normas, valores, presiones sociales, condiciones de vida, clase social'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Un mismo diagnóstico, dos pacientes',
            content: 'Dos personas con la misma diabetes tipo 2 pueden evolucionar muy distinto: una tiene apoyo familiar y acceso a alimentos frescos; la otra vive sola, con depresión y trabaja turnos nocturnos. El modelo biopsicosocial explica por qué la misma receta no basta y por qué preguntar por la vida del paciente es parte de la clínica.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-origen-vida-hombre',
    title: 'Origen de la vida y del ser humano',
    subtitle: 'Teorías del origen de la vida (creacionismo, generación espontánea, biogénesis, panspermia, evolución química), Miller y Urey, clasificación del ser humano, hominización y humanización',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🦴',
    keyPoints: [
      'La GENERACIÓN ESPONTÁNEA (vida a partir de materia inerte) fue refutada por REDI (1668), SPALLANZANI y PASTEUR (matraz de cuello de cisne, 1861).',
      'BIOGÉNESIS: la vida procede de vida preexistente · PANSPERMIA (Arrhenius): la vida o sus precursores llegaron del espacio.',
      'EVOLUCIÓN QUÍMICA (Oparin, Haldane): en la Tierra primitiva, gases simples (H₂O, CH₄, NH₃, H₂) y energía formaron moléculas orgánicas («sopa primitiva») ★',
      'MILLER Y UREY (1953): con descargas eléctricas sobre esos gases obtuvieron aminoácidos; no crearon vida, pero mostraron que las moléculas orgánicas pueden formarse así.',
      'Ser humano: Animalia → mamíferos → primates → homínidos → género Homo → Homo sapiens (el hombre moderno, «Homo sapiens sapiens» en la nomenclatura tradicional).',
      'Neandertales y Homo sapiens SÍ se cruzaron. El cuidado de los muertos (entierros rituales) es una señal de humanización.',
    ],
    sections: [
      {
        id: 'hov-1',
        number: 1,
        title: 'Teorías sobre el origen de la vida',
        keyTerms: ['creacionismo', 'generación espontánea', 'biogénesis', 'panspermia'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El universo surgió con el Big Bang hace unos 13,800 millones de años. Tras una era de la radiación vino la era de la materia: al expandirse y enfriarse, la materia se organizó. La vida necesitó un sustrato material y condiciones físicas y químicas adecuadas en la Tierra primitiva.',
          },
          {
            type: 'table',
            title: 'Cinco explicaciones',
            data: {
              headers: ['Teoría', 'Propuesta', 'Situación'],
              rows: [
                ['Creacionismo', 'El universo y la vida se originan por un acto de creación divina', 'Creencia religiosa o filosófica, no hipótesis científica'],
                ['Generación espontánea', 'La vida surge de la materia inerte', 'Refutada experimentalmente'],
                ['Biogénesis', 'Todo ser vivo procede de otro ser vivo', 'Explica la continuidad de la vida, no su primer origen'],
                ['Panspermia', 'La vida o sus precursores llegaron del espacio en meteoritos (Arrhenius)', 'Ni confirmada ni descartada; traslada el problema a otro lugar'],
                ['Evolución química', 'Moléculas simples formaron moléculas orgánicas cada vez más complejas', 'La explicación científica más aceptada'],
              ],
            },
          },
          {
            type: 'steps',
            title: 'Los experimentos que refutaron la generación espontánea',
            steps: [
              'Francesco Redi (1668): la carne en frascos cubiertos no tuvo larvas; las larvas venían de las moscas.',
              'Lazzaro Spallanzani (siglo XVIII): el caldo hervido y sellado no se llenaba de microorganismos; el abierto, sí.',
              'Louis Pasteur (1861): en el matraz de cuello de cisne el caldo hervido seguía estéril aunque el aire entraba; al romper el cuello y llegar el polvo, se contaminaba.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'De Pasteur a la esterilización',
            content: 'Si los microorganismos no nacen de la nada sino que llegan del ambiente, se puede impedir su llegada. Esa idea fundó la asepsia y la antisepsia (Lister aplicó el ácido fénico en cirugía poco después) y la esterilización de material, que hoy evitan las infecciones del sitio quirúrgico.',
          },
        ],
      },
      {
        id: 'hov-2',
        number: 2,
        title: 'Evolución química y el experimento de Miller y Urey',
        keyTerms: ['evolución química', 'Oparin', 'sopa primitiva', 'Miller y Urey'],
        blocks: [
          {
            type: 'steps',
            title: 'La propuesta de Oparin y Haldane',
            steps: [
              'La atmósfera primitiva contenía vapor de agua, metano (CH₄), amoníaco (NH₃) e hidrógeno (H₂), sin oxígeno libre.',
              'La radiación ultravioleta, las descargas eléctricas y el calor volcánico aportaron energía.',
              'Se formaron moléculas orgánicas simples que se acumularon en los mares: la «sopa primitiva».',
              'Esas moléculas se organizaron en estructuras más complejas; por ejemplo, los lípidos forman micelas y vesículas en el agua.',
            ],
          },
          {
            type: 'paragraph',
            content: 'Alexandr Oparin publicó su propuesta en 1924 y J. B. S. Haldane llegó a una idea semejante en 1929, de manera independiente. En 1953, Stanley Miller y Harold Urey hicieron circular esos gases en un sistema cerrado con vapor de agua y descargas eléctricas; al condensar los productos encontraron aminoácidos y otros compuestos orgánicos.',
          },
          {
            type: 'note',
            title: 'Lo que el experimento demostró y lo que no',
            content: 'Miller y Urey mostraron que las moléculas orgánicas pueden formarse de manera natural a partir de sustancias simples. No crearon vida ni una célula: el paso de las moléculas a los primeros seres vivos sigue en estudio.',
          },
        ],
      },
      {
        id: 'hov-3',
        number: 3,
        title: 'El ser humano como problema y su clasificación',
        keyTerms: ['antropología', 'Homo sapiens', 'taxonomía'],
        blocks: [
          {
            type: 'list',
            title: 'Formas de estudiar al ser humano',
            items: [
              'Filosóficas: idealismo platónico (prioridad de las ideas) y realismo aristotélico (la realidad existe y puede conocerse).',
              'Antropología física: características biológicas.',
              'Antropología cultural: culturas y formas de vida.',
              'Antropología filosófica: qué es el ser humano y qué significa ser persona.',
              'Paleoantropología: evolución humana a partir de fósiles.',
            ],
          },
          {
            type: 'comparison',
            title: 'Dos explicaciones del origen humano',
            left: { title: 'Religiosa o creacionista', items: ['Acción divina', 'Se apoya en textos sagrados, revelación o dogma', 'No se somete a prueba'] },
            right: { title: 'Científica', items: ['Proceso natural', 'Evidencias fósiles, genéticas, arqueológicas y lingüísticas', 'Sus hipótesis se revisan ante nuevos hallazgos'] },
          },
          {
            type: 'steps',
            title: 'Clasificación biológica',
            steps: [
              'Reino Animalia.',
              'Vertebrados.',
              'Clase Mammalia (mamíferos).',
              'Orden Primates.',
              'Familia Hominidae (homínidos).',
              'Género Homo.',
              'Especie Homo sapiens; el humano moderno se llama tradicionalmente Homo sapiens sapiens.',
            ],
          },
          {
            type: 'note',
            title: 'Parentesco, no descendencia',
            content: 'El ser humano no desciende de los chimpancés ni de los gorilas actuales: comparte con ellos antepasados comunes.',
          },
        ],
      },
      {
        id: 'hov-4',
        number: 4,
        title: 'Hominización',
        keyTerms: ['hominización', 'bipedestación', 'Lucy', 'neandertal'],
        blocks: [
          {
            type: 'table',
            title: 'Principales homínidos',
            data: {
              headers: ['Especie', 'Antigüedad aproximada', 'Rasgos y hallazgos'],
              rows: [
                ['Ardipithecus ramidus', '≈ 4.4 millones de años', 'Etiopía; bipedestación probable pero parcial («Ardi»)'],
                ['Australopithecus anamensis', '≈ 4.2–3.8 millones de años', 'Kenia; la forma de la tibia indica bipedestación'],
                ['Australopithecus afarensis', '≈ 3.9–2.9 millones de años', '«Lucy» (Etiopía); bípeda, brazos largos, cerebro pequeño'],
                ['Homo habilis', '≈ 2.4–1.4 millones de años', 'África; asociado a herramientas de piedra («hombre hábil»)'],
                ['Homo erectus / ergaster', '≈ 1.9 millones de años en adelante', 'Sale de África hacia Asia; fuego y herramientas elaboradas; niño de Turkana, hombre de Pekín'],
                ['Homo antecessor', '≈ 800,000 años', 'Atapuerca, España'],
                ['Homo neanderthalensis', '≈ 400,000–40,000 años', 'Europa; cerebro grande; entierros intencionales; se cruzó con Homo sapiens'],
                ['Homo sapiens', '≈ 300,000 años', 'Origen africano (Jebel Irhoud); restos de Skhul y Cro-Magnon'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'La hominización no fue una fila de especies que se reemplazaron una a otra: varias convivieron y algunas relaciones siguen en estudio. Las poblaciones con rasgos más favorables al entorno sobrevivieron y se reprodujeron más.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Llevamos ADN neandertal',
            content: 'Las personas con ascendencia no africana conservan alrededor de 1–2 % de ADN neandertal, prueba de que ambas especies se cruzaron y tuvieron descendencia fértil. Algunas de esas variantes influyen hoy en rasgos de la inmunidad y la piel.',
          },
        ],
      },
      {
        id: 'hov-5',
        number: 5,
        title: 'Humanización',
        keyTerms: ['humanización', 'ritos funerarios', 'poblamiento de América'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El cuidado de los muertos se interpreta como señal de humanización: muestra reconocimiento del difunto, vida simbólica y creencias sobre la muerte. Los neandertales enterraban a sus muertos, a veces con herramientas o huesos. El entierro ritual más antiguo conocido en África es el de «Mtoto», un niño de Kenia, de hace unos 78,000 años.',
          },
          {
            type: 'list',
            title: 'Otras ideas de la clase',
            items: [
              'Friedrich Engels: el trabajo tuvo un papel central en la transformación del simio en ser humano (perspectiva materialista dialéctica).',
              'La migración forma parte de la historia humana.',
              'Poblamiento de América: la teoría más aceptada es la llegada por el estrecho de Bering durante las glaciaciones; las rutas por el Pacífico son hipótesis debatidas.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cuidar al que ya no puede cuidarse',
            content: 'Algunos fósiles de homínidos muestran fracturas o enfermedades que la persona solo pudo sobrevivir si otros la alimentaron y protegieron durante meses. El cuidado del enfermo, base de la medicina, es tan antiguo como lo humano.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-corporeidad',
    title: 'Corporeidad, herramienta y naturaleza',
    subtitle: 'El cuerpo vivido como mediador con el mundo; las herramientas como extensión del cuerpo; el cuerpo en Zubiri, Levinas, Marcel, Sartre, Merleau-Ponty y Ricoeur',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🖐️',
    keyPoints: [
      'CORPOREIDAD: la experiencia vivida del propio cuerpo, no solo el cuerpo como objeto físico; a través de él percibimos, sentimos, nos comunicamos y construimos identidad.',
      'El cuerpo media entre el individuo y la NATURALEZA; las HERRAMIENTAS lo extienden, desde la mano y la piedra tallada hasta el estetoscopio y la inteligencia artificial.',
      'ZUBIRI: el cuerpo como «soma», con función organizadora, configuradora y somática · LEVINAS: el «rostro» del otro, que exige responsabilidad ★',
      'MARCEL: cuerpo vivido y encarnado («mi cuerpo en tanto que mío») · SARTRE: cuerpo para mí, cuerpo para el otro y cuerpo conocido por el otro.',
      'MERLEAU-PONTY: el cuerpo como «carne», nuestro medio general para tener un mundo · RICOEUR: el cuerpo y la acción; cuerpo identificado, capacitado y agradecido.',
      'Para la medicina: el paciente no «tiene» un cuerpo enfermo; es una persona que vive su enfermedad en su cuerpo.',
    ],
    sections: [
      {
        id: 'hcp-1',
        number: 1,
        title: 'Corporeidad, herramienta y naturaleza',
        keyTerms: ['corporeidad', 'herramienta', 'naturaleza', 'fenomenología'],
        blocks: [
          {
            type: 'definition',
            title: 'Corporeidad',
            content: 'Experiencia vivida del cuerpo, no solo como objeto físico, sino como totalidad que actúa y es consciente. A través del cuerpo las personas perciben, sienten, se comunican y construyen su identidad. Integra lo físico, lo cognitivo y lo emocional, y también significados culturales y éticos.',
          },
          {
            type: 'table',
            title: 'Los tres términos de la relación',
            data: {
              headers: ['Término', 'Idea central'],
              rows: [
                ['Corporeidad', 'El cuerpo vivido es el vehículo con el que se experimenta la realidad, en un espacio y un tiempo concretos (fenomenología, de Husserl a Merleau-Ponty)'],
                ['Herramienta', 'Extensión del cuerpo que potencia su acción sobre el entorno; con ella el ser humano crea una «segunda naturaleza» cultural'],
                ['Naturaleza', 'El entorno del que formamos parte; la relación con ella requiere equilibrio, y su pérdida (urbanización, sedentarismo) afecta la salud'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'Desde la Antigüedad, Aristóteles y Galeno destacaron el papel de la mano en lo humano. La bipedestación liberó las manos y permitió fabricar herramientas: el cuerpo mismo funcionó como la primera herramienta en la hominización. En medicina, el estetoscopio, el microscopio o la inteligencia artificial son extensiones de los sentidos del médico.',
          },
        ],
      },
      {
        id: 'hcp-2',
        number: 2,
        title: 'Zubiri, Levinas y Marcel',
        keyTerms: ['soma', 'rostro', 'cuerpo vivido', 'encarnación'],
        blocks: [
          {
            type: 'table',
            title: 'Xavier Zubiri (1898–1983): el cuerpo como «soma»',
            data: {
              headers: ['Función', 'Qué hace'],
              rows: [
                ['Organizadora', 'Organiza el sistema entero a partir de sus propiedades físico-químicas'],
                ['Configuradora', 'Configura materialmente al sistema total como figura'],
                ['Somática', 'Es el fundamento material de «estar» físicamente presente en la realidad como sistema psico-orgánico'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'Para Zubiri el cuerpo es una estructura dinámica, constitutivamente abierta al mundo; recupera el enfoque psicosomático para entender la unidad humana.',
          },
          {
            type: 'definition',
            title: 'Emmanuel Levinas (1906–1995): el «rostro»',
            content: 'El rostro del otro no es solo su apariencia: expresa su vulnerabilidad y su dependencia, y apela a nuestra responsabilidad. Su primera palabra es un mandato: «No matarás». Es el rostro del pobre, la viuda, el huérfano y el extranjero; para el médico, el del paciente «por el que yo puedo todo y a quien todo debo». De ese encuentro surge una responsabilidad asimétrica.',
          },
          {
            type: 'list',
            title: 'Gabriel Marcel (1889–1973): cuerpo vivido y encarnación',
            items: [
              'Mi cuerpo en tanto que mío: no lo tengo como un objeto, lo soy.',
              'El significado del sentir.',
              'Mi cuerpo como ser-en-el-mundo.',
              'El cuerpo como señal de existencia.',
            ],
          },
        ],
      },
      {
        id: 'hcp-3',
        number: 3,
        title: 'Sartre y Merleau-Ponty',
        keyTerms: ['cuerpo para sí', 'cuerpo para otro', 'intersubjetividad', 'carne'],
        blocks: [
          {
            type: 'table',
            title: 'Jean-Paul Sartre (1905–1980): tres dimensiones del cuerpo («El ser y la nada»)',
            data: {
              headers: ['Dimensión', 'Idea'],
              rows: [
                ['Cuerpo para mí', 'Existo mi cuerpo: es mi punto de vista sobre el mundo; las cosas existen «a distancia de mí»'],
                ['Cuerpo para el otro', 'El cuerpo del otro se me presenta como un objeto, con utilidad o resistencia'],
                ['Mi cuerpo conocido por el otro', 'Los demás me conocen como cuerpo, y yo existo para mí como conocido por otros'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'Sartre concentra su concepción del cuerpo en el encuentro entre personas: la INTERSUBJETIVIDAD. La dificultad no es unir la conciencia con el propio cuerpo, sino con el cuerpo de los otros.',
          },
          {
            type: 'definition',
            title: 'Maurice Merleau-Ponty (1908–1961): el cuerpo como «carne»',
            content: 'El cuerpo humano es una forma (Gestalt), modulada como forma humana: «el cuerpo es nuestro medio general para tener un mundo». No es un mero mecanismo, sino una estructura de sentido, que conserva su mundo incluso cuando la base anatómica se altera.',
          },
          {
            type: 'list',
            title: 'Seis puntos de su reflexión sobre el cuerpo',
            items: [
              'El cuerpo como objeto según la fisiología mecanicista.',
              'La experiencia del cuerpo según la psicología clásica.',
              'La espacialidad del cuerpo propio y la motricidad.',
              'La síntesis del cuerpo propio.',
              'El cuerpo como ser sexuado.',
              'El cuerpo como expresión y palabra.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El miembro fantasma',
            content: 'Tras una amputación, muchas personas siguen sintiendo el miembro que ya no está, e incluso dolor en él. Merleau-Ponty usó este fenómeno para mostrar que el cuerpo vivido no coincide con el cuerpo anatómico: el «esquema corporal» persiste aunque la base física cambie.',
          },
        ],
      },
      {
        id: 'hcp-4',
        number: 4,
        title: 'Ricoeur: el cuerpo y la acción',
        keyTerms: ['acto voluntario', 'cuerpo identificado', 'cuerpo capacitado', 'cuerpo agradecido'],
        blocks: [
          {
            type: 'list',
            title: 'Paul Ricoeur (1913–2005)',
            items: [
              'El cuerpo y la conciencia son una unidad que existe antes de la formación del yo.',
              'El cuerpo es el órgano de la acción.',
              'Lo voluntario y lo involuntario están entrelazados.',
              'La necesidad, la emoción y el hábito solo tienen sentido en relación con una voluntad que los solicita, motiva y afecta.',
            ],
          },
          {
            type: 'steps',
            title: 'Los tres momentos del acto voluntario',
            steps: ['«Yo quiero»: yo me decido.', '«Yo muevo mi cuerpo».', '«Yo consiento».'],
          },
          {
            type: 'table',
            title: 'El cuerpo reconocido',
            data: {
              headers: ['Cuerpo', 'Significado'],
              rows: [
                ['Identificado', 'El cuerpo como objeto en el mundo, distinto de las cosas: propio y único'],
                ['Capacitado', 'Lugar y medio de las capacidades lingüísticas, activas, narrativas y responsivas de la persona, en su mezcla de poder y no poder'],
                ['Agradecido', 'El cuerpo que se vive con otros: en el amor, la amistad, la fraternidad; cuerpo-expresión, cuerpo-gesto'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El cuerpo en la consulta',
            content: 'La enfermedad cambia la manera en que el paciente vive su cuerpo: lo que antes «podía» (caminar, trabajar, cuidar a otros) ahora no puede. Preguntar qué actividades ha perdido o qué teme perder ayuda a entender su sufrimiento más allá del diagnóstico, y orienta la rehabilitación hacia lo que para él es importante.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-unidad-biopsicosocial',
    title: 'Unidad anatomo-psico-social: del modelo biomédico al biopsicosocial',
    subtitle: 'Modelo biomédico y sus límites, Engel y el modelo biopsicosocial, jerarquía de sistemas, factores biológicos, psicológicos y socioculturales, tarea del médico, espiritualidad y psiconeuroinmunología',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🧩',
    keyPoints: [
      'MODELO BIOMÉDICO: explica la enfermedad solo por desviaciones de variables biológicas medibles; deja fuera lo psicológico, lo social y la conducta.',
      'George L. ENGEL (1913–1999) propuso en 1977 el MODELO BIOPSICOSOCIAL, basado en la teoría de sistemas: niveles de organización integrados e interdependientes.',
      'En la jerarquía de sistemas, la PERSONA es el nivel más alto de la jerarquía orgánica y el más bajo de la jerarquía social.',
      'FACTORES BIOLÓGICOS: genes, células, órganos y sistemas · PSICOLÓGICOS: conciencia de sí, autocrítica, autocontrol, pensamiento y valor ético de los actos · SOCIOCULTURALES: todo lo aprendido en la historia de la humanidad ★',
      'El biopsicosocial es un modelo CIENTÍFICO: explica por qué unas personas viven como «enfermedad» lo que otras viven como «problemas de vida».',
      'Hoy se habla de unidad biopsicosocial y ESPIRITUAL; la espiritualidad influye en la salud mental y física (psiconeuroinmunología).',
    ],
    sections: [
      {
        id: 'hbs-1',
        number: 1,
        title: 'Modelo biomédico',
        keyTerms: ['modelo biomédico', 'biología molecular', 'reduccionismo'],
        blocks: [
          {
            type: 'definition',
            title: 'Modelo biomédico',
            content: 'Modelo dominante de la enfermedad, con la biología molecular como disciplina básica. Asume que la enfermedad se explica por completo por desviaciones de la norma en variables biológicas (somáticas) medibles, y no deja lugar a las dimensiones sociales, psicológicas y conductuales.',
          },
          {
            type: 'paragraph',
            content: 'En este modelo, la tarea del médico se centra en estudios clínicos y de laboratorio para probar sus hipótesis diagnósticas. Sin embargo, una persona se ve afectada también por presión social, normas culturales, valores familiares y experiencias personales, que influyen en sus decisiones y en su salud.',
          },
          {
            type: 'note',
            title: 'Una idea antigua',
            content: 'La medicina hipocrática ya relacionaba la enfermedad con el ambiente, la alimentación y el modo de vida de cada persona, no solo con el cuerpo aislado.',
          },
        ],
      },
      {
        id: 'hbs-2',
        number: 2,
        title: 'Engel y el modelo biopsicosocial',
        keyTerms: ['Engel', 'teoría de sistemas', 'jerarquía', 'persona'],
        blocks: [
          {
            type: 'paragraph',
            content: 'En 1977, el psiquiatra e internista George L. Engel publicó en la revista Science la necesidad de un nuevo modelo médico que integrara lo biológico, lo psicológico y lo social. Se apoyó en la teoría de sistemas: cada nivel de organización es un todo y a la vez parte de un nivel mayor, y los cambios en uno repercuten en los demás.',
          },
          {
            type: 'steps',
            title: 'Jerarquía de sistemas (de menor a mayor)',
            steps: [
              'Partículas subatómicas → átomos → moléculas → organelos → células → tejidos → órganos y sistemas → sistema nervioso.',
              'PERSONA (experiencia y conducta): el nivel más alto de la jerarquía orgánica y el más bajo de la jerarquía social.',
              'Dos personas → familia → comunidad → cultura y subcultura → sociedad y nación → biosfera.',
            ],
          },
          {
            type: 'list',
            title: 'Características del ser humano como ser biopsicosocial',
            items: [
              'No puede desligarse de su esencia como organismo vivo y sintiente.',
              'Puede evolucionar, adaptarse al mundo y transformarlo.',
              'Es una criatura gregaria que no puede subsistir sola.',
            ],
          },
        ],
      },
      {
        id: 'hbs-3',
        number: 3,
        title: 'Los tres factores',
        keyTerms: ['factores biológicos', 'factores psicológicos', 'factores socioculturales'],
        blocks: [
          {
            type: 'table',
            title: 'Definiciones para memorizar',
            data: {
              headers: ['Factor', 'Definición', 'Variables'],
              rows: [
                ['Biológicos', 'Permiten que el ser humano sea un elemento viviente con todos los procesos que le son propios: genes, células, órganos y sistemas', 'Genética, funcionamiento fisiológico, estructura, afectaciones externas e internas'],
                ['Psicológicos', 'Permiten que el ser humano tenga conciencia de sí mismo, con capacidad autocrítica y de autocontrol, estructuración del pensamiento y valor ético de sus actos', 'Creencias, conceptos de salud y enfermedad, hábitos de vida, repertorio emocional'],
                ['Socioculturales', 'Todo lo aprendido por el ser humano durante la antropogénesis y la historia de la humanidad', 'Interacciones personales, familiares y grupales; contexto comunitario, cultural y macrosocial'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Las emociones también enferman',
            content: 'El estrés crónico (por ira, duelo, violencia o pobreza) mantiene activado el eje hipotálamo-hipófisis-suprarrenal y el sistema simpático: sube el cortisol, se altera la respuesta inmune y aumenta el riesgo de hipertensión, infecciones y descontrol de la diabetes. Primero se descarta la enfermedad orgánica, pero ignorar lo emocional deja el tratamiento incompleto.',
          },
        ],
      },
      {
        id: 'hbs-4',
        number: 4,
        title: 'La tarea del médico',
        keyTerms: ['modelo científico', 'sufrimiento', 'cooperación del paciente'],
        blocks: [
          {
            type: 'list',
            title: 'El modelo biopsicosocial es un modelo científico',
            items: [
              'Explica por qué algunas personas viven como «enfermedad» condiciones que otras consideran «problemas de vida», sean reacciones emocionales o síntomas somáticos.',
              'La necesidad del paciente es aliviar la angustia que atribuye, correcta o incorrectamente, a la enfermedad.',
            ],
          },
          {
            type: 'steps',
            title: 'Tarea del médico',
            steps: [
              'Averiguar cómo y qué siente o ha estado sintiendo y experimentando el paciente.',
              'Formular hipótesis sobre esos sentimientos y experiencias: el «por qué» y el «para qué».',
              'Obtener la cooperación del paciente para aliviar el sufrimiento o corregir los trastornos que contribuyen al sufrimiento o la discapacidad.',
            ],
          },
          {
            type: 'note',
            title: 'Terapias complementarias',
            content: 'Prácticas como la meditación o la atención plena pueden ayudar como complemento (por ejemplo, en el dolor y la ansiedad de pacientes con cáncer), pero nunca sustituyen el diagnóstico y el tratamiento de la enfermedad orgánica.',
          },
        ],
      },
      {
        id: 'hbs-5',
        number: 5,
        title: 'Espiritualidad y salud',
        keyTerms: ['espiritualidad', 'psiconeuroinmunología', 'eje intestino-cerebro'],
        blocks: [
          {
            type: 'paragraph',
            content: 'A la unidad biopsicosocial se ha agregado una cuarta dimensión: la ESPIRITUALIDAD (sentido, propósito, conexión, paz, esperanza), religiosa o secular. Se asocia con la salud mental, en sentido positivo (bienestar) y negativo (depresión, ansiedad, adicción), y a través de ella con la salud física: enfermedad cardiovascular, cáncer y mortalidad.',
          },
          {
            type: 'definition',
            title: 'Psiconeuroinmunología',
            content: 'Disciplina que estudia cómo se comunican la mente, el sistema nervioso, el sistema endocrino y el sistema inmune (la impulsó Robert Ader a partir de sus experimentos de los años setenta). Explica por qué el estrés y las emociones modifican la respuesta inmune y el curso de las enfermedades.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'El eje microbiota-intestino-cerebro',
            content: 'La microbiota intestinal se comunica con el sistema nervioso central por el nervio vago, por metabolitos (como los ácidos grasos de cadena corta) y por señales inmunes. Se relaciona con la respuesta al estrés, el estado de ánimo y la conducta alimentaria: otro ejemplo de que lo biológico y lo psicológico no se separan.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-alteridad-rmp',
    title: 'La relación médico-paciente y la alteridad',
    subtitle: 'Definición e historia de la RMP, alteridad, otredad, mismidad e ipseidad; el problema del otro (Laín Entralgo), paradigmas Alter Ego y Alter Tú, Dussel y Levinas; motivos del paciente y del médico',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🤝',
    keyPoints: [
      'RMP: interacción entre personas que se produce en el quehacer clínico, constituye el NÚCLEO de la medicina, la inicia el enfermo o su familia y beneficia a ambos.',
      'ALTERIDAD: condición de ser otro; cambiar la propia perspectiva por la del otro (su cosmovisión, intereses e ideología) sin suponer que la propia es la única posible.',
      'Laín Entralgo: el «problema del otro» es tratar con otra persona en la convivencia concreta con ella.',
      'ALTER EGO: el médico ve al paciente como proyección de sí mismo; lo cosifica y la alteridad se anula · ALTER TÚ: el paciente es un sujeto y el médico se reconoce como «el otro del otro» ★',
      'Dussel: pensar el mundo desde la exterioridad del otro (el oprimido, el pobre); analéctica y transmodernidad. Levinas: el otro es lo absolutamente otro.',
      'Motivos del médico (Laín): ego ADIUVANS (ayuda técnica), ego SAPIENS (conocimiento), ego FUNGENS (funcionario) y ego CUPIENS (lucro y prestigio).',
    ],
    sections: [
      {
        id: 'hrm-1',
        number: 1,
        title: 'Qué es la relación médico-paciente',
        keyTerms: ['relación médico-paciente', 'confianza'],
        blocks: [
          {
            type: 'definition',
            title: 'Relación médico-paciente (RMP)',
            content: 'Interacción entre personas que se produce en el quehacer clínico y constituye el núcleo de la medicina. La inicia el enfermo o su familia y produce beneficios para ambos: para el paciente, la satisfacción por la atención y la conservación o recuperación de la salud, la limitación del daño o la rehabilitación; para el médico, la satisfacción por la relación personal, la educación continua a través de la experiencia y la remuneración.',
          },
          {
            type: 'paragraph',
            content: 'Es una relación especial: uno sufre un desorden en su salud y el otro está capacitado para ayudar a recuperarla. Integra aspectos técnicos, éticos y emocionales, y se basa en la confianza, el respeto, la comunicación y la responsabilidad moral del médico. Puede analizarse desde lo ético-deontológico, lo técnico-científico, lo jurídico, lo administrativo y lo social.',
          },
          {
            type: 'table',
            title: 'Horizonte histórico',
            data: {
              headers: ['Época', 'Forma de la relación'],
              rows: [
                ['Prehistoria', 'Ayuda espontánea, curación mágica y tratamiento empírico'],
                ['Grecia', 'Medicina técnica'],
                ['Edad Media', 'El médico como ministro de la naturaleza y del amor de misericordia'],
                ['Época moderna', 'Camaradería e interés del médico'],
                ['Época contemporánea', 'Asistencia hospitalaria, domiciliaria y consultorio privado'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Del otro lado de la consulta',
            content: 'Una estudiante de último año diagnosticada con linfoma de Hodgkin relató su experiencia: nadie se presentó, el especialista habló con su madre en lugar de con ella, el diagnóstico se dio sin preparación y firmó un formulario sin saber qué era. Diez años después, ya en medicina paliativa, resumió lo aprendido: los pacientes valoran la honestidad y la información clara y oportuna, la falta de información genera pérdida de control y, a veces, basta con acompañar y escuchar.',
          },
        ],
      },
      {
        id: 'hrm-2',
        number: 2,
        title: 'Alteridad: el problema del otro',
        keyTerms: ['alteridad', 'otredad', 'mismidad', 'ipseidad'],
        blocks: [
          {
            type: 'table',
            title: 'Conceptos básicos',
            data: {
              headers: ['Concepto', 'Significado'],
              rows: [
                ['Alteridad', 'Condición de ser otro'],
                ['Otredad', 'Reconocimiento del otro como un individuo diferente, que no forma parte de la comunidad propia'],
                ['Mismidad', 'Condición de ser uno mismo: permanencia, identidad, continuidad'],
                ['Ipseidad', 'Idea de sí mismo; está entre el ser en sí y el ser para sí'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Alteridad (Eduardo Sousa)',
            content: 'Principio filosófico de alternar o cambiar la propia perspectiva por la del otro, considerando su punto de vista, su concepción del mundo (cosmovisión), sus intereses y su ideología, y no dando por supuesto que la «de uno» es la única posible. Aplicada a la RMP, el médico cambia su perspectiva por la del paciente.',
          },
          {
            type: 'paragraph',
            content: 'Para Pedro Laín Entralgo, el «problema del otro» es la operación de tratar con otra persona en la convivencia concreta con ella. Surge durante la hegemonía del pensamiento cristiano y se agudiza con la secularización de la Baja Edad Media y el Renacimiento, el nominalismo de los siglos XV y XVI, la importancia de la individualidad y el descubrimiento de la soledad del hombre en el mundo.',
          },
          {
            type: 'list',
            title: 'Cuatro maneras de entender la alteridad como diferencia',
            items: [
              'Como alteración: lo ajeno se ve como deficiencia; propicia xenofobia y victimización.',
              'Como indiferencia: se reconoce que el otro existe y es distinto, pero no importa.',
              'Como tensión: convivir con el otro genera malestar; se busca en él solo el eco de uno mismo.',
              'Con rostro humano: el encuentro.',
            ],
          },
        ],
      },
      {
        id: 'hrm-3',
        number: 3,
        title: 'Paradigmas Alter Ego y Alter Tú',
        keyTerms: ['Alter Ego', 'Alter Tú', 'cosificación', 'intersubjetividad'],
        blocks: [
          {
            type: 'comparison',
            title: 'Paradigmas de Etchebehere aplicados a la RMP',
            left: {
              title: 'Alter Ego',
              items: [
                'El otro es visto como «otro yo», proyección de mis pensamientos y deseos',
                'El médico representa al paciente según sus imágenes previas y lo adapta a lo conocido',
                'El paciente queda como no-ser, objeto: se le cosifica',
                'Se instituye el «diálogo silencioso» y la alteridad se anula',
                'Origen en la metafísica de Platón',
              ],
            },
            right: {
              title: 'Alter Tú',
              items: [
                'El otro es un tú, no una imagen de imperfección',
                'El conocimiento de la enfermedad se alcanza en el encuentro con el paciente',
                'El médico se comprende como «el otro del otro»',
                'El paciente es sujeto y no objeto',
                'La comunicación es intersubjetiva',
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'Para Enrique Dussel, la alteridad es saber pensar el mundo desde la exterioridad del otro (el oprimido, el pobre), lo que lleva a reconocerlo como diferente a uno mismo en el encuentro cara a cara. Con su método, la ANALÉCTICA, se respeta la voz del otro. En la RMP se da en la dialéctica palabra-oído e interpretación-escucha: los médicos están llamados al servicio y el paciente puede interpretar y exigir justicia y mejor atención. La TRANSMODERNIDAD reconoce las culturas no europeas (pueblos indígenas, culturas china, hindú, musulmana, africanas) que la modernidad excluyó.',
          },
          {
            type: 'note',
            title: 'Levinas',
            content: 'Emmanuel Levinas definió al otro como lo absolutamente otro: un anhelo activo de salir de la monotonía de uno mismo. Su idea del «rostro» del otro es una de las bases de la ética del encuentro clínico.',
          },
        ],
      },
      {
        id: 'hrm-4',
        number: 4,
        title: 'Por qué el paciente y el médico entran en la relación',
        keyTerms: ['ego adiuvans', 'ego sapiens', 'ego fungens', 'ego cupiens'],
        blocks: [
          {
            type: 'list',
            title: 'Motivos del paciente (Laín Entralgo)',
            items: [
              'Qué fin lo movió a buscar ayuda médica, cómo llegó a sentirse enfermo y cómo ha respondido a ello.',
              'Personales: qué busca y espera del médico, a qué médico acude, cómo siente su enfermedad y su actitud frente a la medicina y frente al médico.',
              'Sociales: el papel de la sociedad y de las personas cercanas en la «llamada médica», en el sentimiento de enfermedad y en la respuesta a ella.',
            ],
          },
          {
            type: 'table',
            title: 'Motivaciones del médico (Laín Entralgo)',
            data: {
              headers: ['Motivación', '«Yo» que predomina', 'Cómo ve al paciente'],
              rows: [
                ['Voluntad de ayuda técnica', 'Ego adiuvans', 'Persona doliente y necesitada de ayuda'],
                ['Afán de conocimiento científico', 'Ego sapiens', 'Objeto de conocimiento racional'],
                ['Médico «funcionario»', 'Ego fungens', 'Pieza de la maquinaria social que hay que reparar pronto y al menor costo'],
                ['Interés de lucro y prestigio', 'Ego cupiens', 'Objeto de lucro'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Los cuatro «egos» del médico',
            content: 'ADIUVANS = ayuda (como «adyuvante»). SAPIENS = sabe. FUNGENS = funciona (como «funcionario»). CUPIENS = codicia (como «concupiscencia»). Solo el primero pone al paciente como persona en el centro.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-modelos-rmp',
    title: 'Elementos y modelos de la relación médico-paciente',
    subtitle: 'Estructura según Laín Entralgo (momentos afectivo, cognoscitivo, operativo, ético e histórico-social); modelos de Watzlawick, Szasz-Hollender, Leary, Veatch y Emanuel; medicina centrada en el paciente',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🩺',
    keyPoints: [
      'Laín Entralgo distingue en la RMP su FIN, su MODO de convivencia, su VÍNCULO y su COMUNICACIÓN.',
      'El modo combina operaciones OBJETIVANTES (diagnóstico y tratamiento) y COEJECUTIVAS (convivir con el sentido que la enfermedad tiene para el paciente).',
      'Recursos de comunicación: la mirada, la palabra y el silencio, el contacto manual y la relación instrumental.',
      'Momentos: AFECTIVO (amistad médica, transferencia) · COGNOSCITIVO (diagnóstico) · OPERATIVO (tratamiento) · ÉTICO · HISTÓRICO-SOCIAL.',
      'Szasz-Hollender: ACTIVIDAD-PASIVIDAD (coma, urgencia) · ORIENTACIÓN-COOPERACIÓN (infección aguda) · PARTICIPACIÓN MUTUA (enfermedad crónica) ★',
      'Emanuel: PATERNALISTA (guardián) · INFORMATIVO (técnico) · INTERPRETATIVO (consejero) · DELIBERATIVO (amigo o maestro).',
    ],
    sections: [
      {
        id: 'hmo-1',
        number: 1,
        title: 'Estructura de la relación según Laín Entralgo',
        keyTerms: ['operaciones objetivantes', 'operaciones coejecutivas', 'diagnóstico transubjetivo'],
        blocks: [
          {
            type: 'list',
            title: 'Cuatro aspectos de la estructura',
            items: [
              'El fin propio de la relación.',
              'El modo de convivencia que se establece.',
              'El vínculo propio de la relación.',
              'La comunicación entre médico y paciente durante el encuentro clínico.',
            ],
          },
          {
            type: 'comparison',
            title: 'El modo de la relación',
            left: {
              title: 'Operaciones objetivantes',
              items: ['Dirigidas a establecer el diagnóstico y el tratamiento', 'Tratan la enfermedad como objeto de conocimiento'],
            },
            right: {
              title: 'Operaciones coejecutivas',
              items: ['Convivir psíquicamente el sentido que la enfermedad tiene para el paciente', 'Tratan al enfermo como persona'],
            },
          },
          {
            type: 'paragraph',
            content: 'Los recursos de la comunicación clínica (la MIRADA, la PALABRA y el SILENCIO, el CONTACTO MANUAL y la RELACIÓN INSTRUMENTAL) hacen posible el diagnóstico transubjetivo, en el que se combinan ambas operaciones.',
          },
        ],
      },
      {
        id: 'hmo-2',
        number: 2,
        title: 'Los momentos de la relación',
        keyTerms: ['momento afectivo', 'momento cognoscitivo', 'momento operativo', 'transferencia'],
        blocks: [
          {
            type: 'table',
            title: 'Cinco momentos',
            data: {
              headers: ['Momento', 'Qué comprende'],
              rows: [
                ['Afectivo', 'Emociones y sentimientos de médico y paciente: camaradería, amistad médica, transferencia y contratransferencia'],
                ['Cognoscitivo', 'El diagnóstico: genérico, específico e individual; conocimiento de la enfermedad, de la persona y del pronóstico'],
                ['Operativo', 'La conducta terapéutica; empieza antes del encuentro y termina cuando el paciente se cura'],
                ['Ético', 'Sujeción a las normas que regulan la conducta del médico'],
                ['Histórico-social', 'Aspectos sociales del médico, del paciente, de la enfermedad y de la relación'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'En el momento afectivo, la AMISTAD MÉDICA se vive en el médico como buena voluntad de ayuda técnica y en el paciente como confianza en el médico. La CAMARADERÍA es el vínculo en el que ambos persiguen la salud como un bien objetivo, dejando de lado lo personal.',
          },
          {
            type: 'paragraph',
            content: 'En el momento cognoscitivo, el diagnóstico no es un acto individual del médico, sino el resultado de un encuentro entre dos personas inmersas en una cultura: la confianza del enfermo influye en la forma y el sentido del diagnóstico. El momento operativo incluye el tratamiento como ACTO SOCIAL y el alta como un juicio que devuelve al enfermo a la sociedad como sano; el consejo y el consuelo también son terapéuticos.',
          },
        ],
      },
      {
        id: 'hmo-3',
        number: 3,
        title: 'Modelos de relación médico-paciente',
        keyTerms: ['Szasz-Hollender', 'Watzlawick', 'Leary', 'Veatch'],
        blocks: [
          {
            type: 'table',
            title: 'Modelo de Szasz y Hollender',
            data: {
              headers: ['Modelo', 'Médico', 'Paciente', 'Aplicación', 'Prototipo'],
              rows: [
                ['Actividad-pasividad', 'Hace por el paciente', 'Recibe; no puede responsabilizarse', 'Anestesia, urgencias, coma, delirio', 'Madre-hijo pequeño'],
                ['Orientación-cooperación', 'Le dice qué hacer', 'Coopera, obedece', 'Procesos infecciosos agudos', 'Padre-hijo'],
                ['Participación mutua', 'Negocia la decisión', 'Participa como pareja terapéutica', 'Enfermedades crónicas', 'Adulto-adulto'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Modelo interaccional de Watzlawick, Beavin y Jackson',
            data: {
              headers: ['Relación', 'Control'],
              rows: [
                ['Complementaria', 'Desigual: el médico lo ejerce y el paciente se somete'],
                ['Simétrica', 'Repartido por igual (p. ej., entre profesionales)'],
                ['Paralela', 'Se transfiere continuamente entre los participantes'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'En el modelo circumplejo de Timothy Leary la interacción se mueve en dos ejes: DOMINACIÓN-SOMETIMIENTO (una actitud provoca en el otro la contraria) y AMOR-ODIO (una actitud provoca en el otro la misma).',
          },
          {
            type: 'table',
            title: 'Modelos de ética médica de Robert Veatch',
            data: {
              headers: ['Modelo', 'Imagen del médico', 'Idea central'],
              rows: [
                ['Ingenieril', 'Mecánico', 'Presenta hechos sin valores; el paciente decide'],
                ['Sacerdotal', 'Sacerdote', 'Produce el bien y no daña; conduce al paciente hacia el bien'],
                ['De colegas', 'Colega', 'Confianza e igualdad; metas comunes'],
                ['Contractual', 'Socio', 'Comparte responsabilidades; el paciente conserva la decisión final'],
              ],
            },
          },
        ],
      },
      {
        id: 'hmo-4',
        number: 4,
        title: 'Los cuatro modelos de Emanuel y Emanuel',
        keyTerms: ['paternalista', 'informativo', 'interpretativo', 'deliberativo', 'autonomía'],
        blocks: [
          {
            type: 'table',
            title: 'Modelos según los valores del paciente',
            data: {
              headers: ['Modelo', 'Valores del paciente', 'Papel del médico', 'Imagen', 'Autonomía / beneficencia'],
              rows: [
                ['Paternalista', 'Se consideran objetivos y los mismos del médico', 'Promueve el bienestar como él lo entiende, aun contra las preferencias del paciente', 'Guardián o padre', '+ / ++++'],
                ['Informativo', 'Definidos y claros para el paciente', 'Da información y realiza la intervención que el paciente elige', 'Técnico experto', '++++ / +'],
                ['Interpretativo', 'Poco definidos y en conflicto', 'Ayuda al paciente a aclarar sus valores y respeta su decisión', 'Consultor o consejero', '+++ / ++'],
                ['Deliberativo', 'Abiertos a revisión en el diálogo moral', 'Ayuda a aclarar valores y persuade de los más adecuados; respeta la decisión', 'Amigo o maestro', '++ / +++'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Elegir el modelo según la situación',
            content: 'Un paciente inconsciente en urgencias no puede participar: se actúa por él (actividad-pasividad). Una persona con diabetes tipo 2 vive con su enfermedad toda la vida y decide cada día qué come y si toma sus medicamentos: sin participación mutua y sin un modelo deliberativo o interpretativo, la adherencia fracasa.',
          },
        ],
      },
      {
        id: 'hmo-5',
        number: 5,
        title: 'Modelos centrados en la persona',
        keyTerms: ['medicina centrada en el paciente', 'modelo biopsicosocial', 'medicina familiar'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Para corregir las deficiencias del modelo biomédico, centrado en la enfermedad, se desarrollaron, además del modelo biopsicosocial, tres modelos orientados al paciente: la medicina centrada en el paciente, la medicina del estilo de vida y la medicina centrada en la persona, la familia y la comunidad.',
          },
          {
            type: 'list',
            title: 'Medicina centrada en el paciente',
            items: [
              'Atiende a la persona y no solo a su enfermedad: considera sus valores, objetivos y preferencias.',
              'Toma en cuenta la experiencia de la enfermedad y la persona en su contexto.',
              'Promueve la comunicación y el diálogo.',
              'Incluye al paciente y a su familia en la toma de decisiones.',
              'Empodera al paciente para que se responsabilice de su salud y trabaja en equipo.',
            ],
          },
          {
            type: 'paragraph',
            content: 'La medicina centrada en la persona, la familia y la comunidad parte de las necesidades, potencialidades y relaciones de cada una: busca comprender a la persona en su contexto familiar, social y biográfico y encontrar un terreno común con el médico para manejar el problema. La medicina familiar y comunitaria se encarga del cuidado general con este enfoque.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-etica-comunicacion',
    title: 'Ética, comunicación y proxémica en la relación médico-paciente',
    subtitle: 'Implicaciones éticas y sociales, código de bioética, derechos y obligaciones de pacientes y profesionales, profesionalismo, rol del enfermo, satisfacción del paciente, comunicación no verbal, ergonomía y proxémica',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '⚖️',
    keyPoints: [
      'En cuanto acto humano, la relación médica es un ACTO MORAL. La regla de oro del arte de curar es el BIEN DEL PACIENTE.',
      'Código de bioética para el personal de salud: dignidad y derechos humanos, inclusión, calidad y seguridad, justicia y equidad, consentimiento informado e integridad.',
      'PROFESIONALISMO: integridad, competencia y altruismo; los intereses del paciente por encima de los propios.',
      'Rol del enfermo (Parsons): queda libre de sus obligaciones sociales y no es culpable de su enfermedad, pero debe querer sanar y buscar ayuda competente.',
      'Insatisfacción del paciente: discriminación, espera larga, consulta breve, falta de amabilidad y lenguaje médico incomprensible.',
      'Comunicación no verbal: KINÉSICA (movimientos, gestos, mirada), PROXÉMICA (uso del espacio), PARALENGUAJE (tono, ritmo, pausas) y SIMBÓLICA ★',
    ],
    sections: [
      {
        id: 'hec-1',
        number: 1,
        title: 'Implicaciones éticas',
        keyTerms: ['acto moral', 'código de bioética', 'consentimiento informado'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Para Laín Entralgo, aceptar la condición de médico es adquirir una «segunda naturaleza» hecha de hábitos MENTALES, OPERATIVOS y ESTIMATIVOS (de valoración) para ejercer la medicina. También la forma en que el paciente vive y reacciona a su enfermedad es un acto moral.',
          },
          {
            type: 'list',
            title: 'Principios del código de bioética para el personal de salud',
            items: [
              'Dignidad y derechos humanos.',
              'Inclusión y enfoque diferenciado.',
              'Calidad, seguridad y eficacia.',
              'Justicia y equidad.',
              'Consentimiento informado.',
              'Integridad.',
            ],
          },
          {
            type: 'list',
            title: 'Algunas pautas del código',
            items: [
              'Atención centrada en la persona, comunicación asertiva y decisiones informadas.',
              'Proteger toda la información que se genera durante la atención.',
              'Adaptar la atención a la cultura local y pedir opinión o permiso en la lengua originaria de la comunidad.',
              'Ante padecimientos incurables: aliviar el dolor, evitar tratamientos inútiles, respetar la voluntad anticipada.',
              'La objeción personal del profesional nunca debe impedir la atención que el paciente requiere.',
              'La jerarquía médica sirve para enseñar, no para delegar de forma irresponsable; el personal en formación merece trato digno y supervisión.',
            ],
          },
          {
            type: 'comparison',
            title: 'Decálogos de derechos',
            left: {
              title: 'Pacientes (extracto)',
              items: [
                'Atención oportuna, profesional y eficaz',
                'Trato digno',
                'Información completa, oportuna y veraz',
                'Otorgar o no su consentimiento informado',
                'Protección de sus datos personales',
                'Segunda opinión y expediente clínico único',
                'Atención inmediata en urgencias',
              ],
            },
            right: {
              title: 'Profesionales de la salud (extracto)',
              items: [
                'Ejercer en forma lícita, libre y responsable',
                'Infraestructura y material necesarios',
                'Información veraz de pacientes y familiares',
                'Trato digno y respetuoso',
                'Asesoría jurídica',
                'Remuneración por su trabajo',
              ],
            },
          },
          {
            type: 'list',
            title: 'Obligaciones del profesional (extracto)',
            items: [
              'Trato digno e información integral a pacientes, familiares y cuidadores.',
              'No garantizar resultados y facilitar una segunda opinión ante la duda.',
              'Integrar y resguardar el expediente clínico; proteger la confidencialidad.',
              'Recabar el consentimiento informado.',
              'Referir oportunamente a una unidad de mayor capacidad resolutiva.',
              'Actualizarse y certificarse de forma permanente.',
            ],
          },
        ],
      },
      {
        id: 'hec-2',
        number: 2,
        title: 'Profesionalismo médico',
        keyTerms: ['profesionalismo', 'altruismo', 'confidencialidad', 'ética maximalista'],
        blocks: [
          {
            type: 'definition',
            title: 'Profesionalismo médico',
            content: 'Conjunto de valores, comportamientos y actitudes basados en la confianza del público hacia los médicos, quienes ponen sus conocimientos al servicio del paciente y la sociedad. Obliga a actuar con integridad, competencia y altruismo, y a priorizar los intereses del paciente sobre los propios.',
          },
          {
            type: 'list',
            title: 'Elementos clave',
            items: [
              'Servicio al paciente, por encima de los intereses del médico o de presiones del mercado o la administración.',
              'Altos estándares éticos.',
              'Competencia y aprendizaje permanente.',
              'Confidencialidad.',
              'Responsabilidad social y acceso equitativo a la salud.',
              'Excelencia moral y sabiduría práctica.',
              'Trabajo en equipo.',
            ],
          },
          {
            type: 'table',
            title: 'Exigencias éticas: inclusión, prioridad y severidad',
            data: {
              headers: ['Tipo de ética', 'Qué exige'],
              rows: [
                ['Maximalista', 'Toda acción humana está sujeta a juicio moral; la ética siempre tiene prioridad y puede exigir sacrificios extremos'],
                ['Ordinaria (común)', 'Tras cumplir los deberes morales queda un margen amplio para los intereses personales'],
                ['Mínima', 'Pocas restricciones; amplio margen para actuar según el interés personal'],
              ],
            },
          },
        ],
      },
      {
        id: 'hec-3',
        number: 3,
        title: 'Implicaciones sociales e importancia de la relación',
        keyTerms: ['rebelión del sujeto', 'rol del enfermo', 'satisfacción'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La relación médica es constitutivamente social. Para Laín Entralgo, su crisis es consecuencia de la «REBELIÓN DEL SUJETO»: la reacción de las personas contra la objetivación y la injusticia de la asistencia médica, y contra la idea de que la enfermedad deja al paciente en situación de incompetencia moral.',
          },
          {
            type: 'list',
            title: 'Rol del enfermo (Talcott Parsons)',
            items: [
              'El enfermo queda exento de sus obligaciones sociales habituales.',
              'No se le considera responsable de su enfermedad.',
              'Debe desear recuperarse.',
              'Debe buscar ayuda técnicamente competente y cooperar con ella.',
            ],
          },
          {
            type: 'comparison',
            title: 'Satisfacción del paciente (estudio en Oaxaca)',
            left: {
              title: 'Satisface',
              items: ['Buen trato del médico', 'Entrega de medicamentos', 'Instalaciones limpias', 'Explicaciones claras en lenguaje sencillo'],
            },
            right: {
              title: 'Genera insatisfacción',
              items: ['Discriminación', 'Espera prolongada y consulta breve', 'Falta de amabilidad', 'Lenguaje médico incomprensible y explicaciones insuficientes', 'Escasez de medicamentos'],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Por qué los pacientes prefieren al curandero',
            content: 'En el estudio, los usuarios de la medicina tradicional reportaron más satisfacción con las explicaciones, el trato y el tratamiento: el curandero explica las causas, los cuidados y las consecuencias en lenguaje sencillo y en la lengua materna. Una mejor comunicación del médico se asocia con más adherencia y menos abandono del tratamiento.',
          },
        ],
      },
      {
        id: 'hec-4',
        number: 4,
        title: 'Comunicación, ergonomía y proxémica',
        keyTerms: ['comunicación no verbal', 'kinésica', 'proxémica', 'paralenguaje', 'ergonomía'],
        blocks: [
          {
            type: 'table',
            title: 'Comunicación verbal y no verbal',
            data: {
              headers: ['Tipo', 'Qué estudia', 'Ejemplos'],
              rows: [
                ['Verbal oral y escrita', 'Signos orales y su representación gráfica', 'Palabra hablada, historia clínica'],
                ['Kinésica', 'Movimientos corporales', 'Gestos, expresión facial, mirada, tacto'],
                ['Proxémica', 'Uso y estructuración del espacio', 'Distancia interpersonal, arquitectura del consultorio'],
                ['Paralenguaje', 'Elementos que acompañan a la palabra', 'Tono, entonación, pausas, ritmo, intensidad'],
                ['Simbólica', 'Símbolos y emblemas', 'Bata, estetoscopio, diplomas'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'La RMP tiene una alta carga emocional: el paciente busca en la expresión, los gestos y la mirada del médico la información que no obtiene del lenguaje verbal, porque no lo entiende o porque sospecha que se le oculta algo. Las habilidades comunicativas del médico incluyen escuchar y hablar, leer y escribir, y pensar.',
          },
          {
            type: 'definition',
            title: 'Proxémica (Edward T. Hall)',
            content: 'Estudio de cómo las personas usan y estructuran el espacio inmediato en sus relaciones. Hall describió cuatro distancias: íntima (hasta ≈ 45 cm), personal (≈ 45 cm a 1.2 m), social (≈ 1.2 a 3.6 m) y pública (más de 3.6 m).',
          },
          {
            type: 'definition',
            title: 'Ergonomía',
            content: 'Ciencia que estudia cómo adecuar la relación del ser humano con su entorno de trabajo. En la consulta incluye la disposición del escritorio, la silla y la pantalla para no interponer barreras entre médico y paciente.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La exploración física invade la distancia íntima',
            content: 'Auscultar o palpar obliga a entrar en la distancia íntima del paciente. Por eso conviene explicar antes qué se va a hacer, pedir permiso, cuidar la privacidad y contar con un acompañante cuando la exploración es sensible.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-causalidad-determinantes',
    title: 'Causalidad, determinantes de la salud y perfil epidemiológico',
    subtitle: 'Postulados de Koch-Henle y criterios de Bradford Hill, tipos de causas, campo de salud de Lalonde, determinantes sociales, estilos de vida, carga de la enfermedad y panorama epidemiológico de México',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '📈',
    keyPoints: [
      'KOCH-HENLE (1887): modelo unicausal útil para enfermedades infecciosas · BRADFORD HILL: criterios de causalidad para enfermedades no infecciosas (fuerza, consistencia, temporalidad, gradiente, plausibilidad…).',
      'Causa SUFICIENTE: si está, la enfermedad ocurre · NECESARIA: sin ella no hay enfermedad · FACTOR DE RIESGO: aumenta la probabilidad ★',
      'Campo de salud (Lalonde, 1974): BIOLOGÍA HUMANA, MEDIO AMBIENTE, ESTILO DE VIDA y ORGANIZACIÓN DE LA ATENCIÓN. Dever lo diagramó en 1976.',
      'Determinantes sociales de la salud: las circunstancias en que las personas nacen, crecen, trabajan, viven y envejecen. Los estructurales causan los intermedios.',
      'Carga de la enfermedad: AVISA (años de vida saludable perdidos) = años perdidos por muerte prematura + años vividos con discapacidad.',
      'México: principales causas de muerte, enfermedades del corazón, diabetes y tumores malignos; el 80 % de las enfermedades crónicas podría evitarse con un estilo de vida saludable.',
    ],
    sections: [
      {
        id: 'hcd-1',
        number: 1,
        title: 'Causalidad en medicina',
        keyTerms: ['Koch-Henle', 'Bradford Hill', 'causa necesaria', 'causa suficiente'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La racionalidad causal en epidemiología pasó de teorías unívocas (miasma, germen: modelo unicausal) a teorías multicausales (red causal, ecoepidemiología). El principio de causalidad dice que todo suceso tiene una causa que lo antecede y explica, de forma determinista o probabilística.',
          },
          {
            type: 'list',
            title: 'Postulados de Koch-Henle (1887): el microorganismo debe',
            items: [
              'Encontrarse siempre en los casos de la enfermedad.',
              'Poder aislarse en cultivo como una estructura viva y distinta.',
              'Distribuirse de acuerdo con las lesiones, que explican las manifestaciones.',
              'Reproducir la enfermedad en el animal de experimentación tras cultivarse.',
            ],
          },
          {
            type: 'list',
            title: 'Criterios de Bradford Hill',
            items: [
              'Fuerza de la asociación.',
              'Consistencia.',
              'Especificidad.',
              'Temporalidad: la causa precede al efecto.',
              'Gradiente biológico (dosis-respuesta).',
              'Plausibilidad biológica.',
              'Coherencia con lo que se sabe de la enfermedad.',
              'Evidencia experimental.',
              'Analogía con otras relaciones causales.',
            ],
          },
          {
            type: 'table',
            title: 'Tipos de causa',
            data: {
              headers: ['Tipo', 'Definición', 'Ejemplo'],
              rows: [
                ['Necesaria y suficiente', 'Sin ella no hay enfermedad y basta por sí sola', 'SARS-CoV-2 en la COVID-19 (asociación causal directa)'],
                ['Necesaria y no suficiente', 'Sin ella no hay enfermedad, pero sola no basta', 'Mycobacterium tuberculosis: muchos infectados no enferman'],
                ['No necesaria y no suficiente', 'Ninguna causa aislada basta ni es indispensable (multicausal)', 'Obesidad, sedentarismo, dieta inadecuada y estrés en la diabetes tipo 2 o la hipertensión'],
                ['Factor de riesgo', 'Aumenta la probabilidad de enfermar', 'Tabaquismo para el enfisema'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Cadena causal indirecta',
            content: 'Obesidad → hipertrigliceridemia → aterosclerosis → infarto agudo de miocardio. Cada eslabón es efecto del anterior y causa del siguiente. El enfisema también es multicausal: el tabaco es su principal factor de riesgo, pero la deficiencia de α₁-antitripsina puede causarlo sin tabaquismo.',
          },
        ],
      },
      {
        id: 'hcd-2',
        number: 2,
        title: 'Del modelo biologicista a los determinantes sociales',
        keyTerms: ['triada ecológica', 'campo de salud', 'Lalonde', 'determinantes sociales'],
        blocks: [
          {
            type: 'steps',
            title: 'Evolución del concepto',
            steps: [
              'Concepción biologicista (fines del s. XIX): un organismo agresor (causa) afecta a un huésped (efecto).',
              'Modelo ecológico (mediados del s. XX): triada agente-huésped-medio ambiente.',
              'Campo de salud (Laframboise 1973, Lalonde 1974, diagrama de Dever 1976): biología humana, medio ambiente, estilo de vida y organización de la atención a la salud.',
              'Determinantes sociales de la salud (OMS/OPS) y modelo de capas de Dahlgren y Whitehead.',
            ],
          },
          {
            type: 'table',
            title: 'Campo de salud de Lalonde',
            data: {
              headers: ['Componente', 'Incluye'],
              rows: [
                ['Biología humana', 'Herencia, maduración y envejecimiento, sistemas internos complejos'],
                ['Medio ambiente', 'Factores físicos, químicos, biológicos, psicosociales y culturales'],
                ['Estilo de vida', 'Toma de decisiones y hábitos de vida'],
                ['Organización de la atención', 'Prevención, curación y restauración'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Determinantes sociales de la salud (OMS)',
            content: '«Las circunstancias en que las personas nacen, crecen, trabajan, viven y envejecen», incluido el conjunto más amplio de fuerzas y sistemas que influyen en la vida cotidiana. Los ESTRUCTURALES (factores económicos y sociales, fuentes de inequidad) causan los INTERMEDIOS (empleo, vivienda, transporte, condiciones psicosociales). Las inequidades en salud son diferencias injustas y evitables.',
          },
          {
            type: 'paragraph',
            content: 'Un FACTOR DE RIESGO es cualquier característica o situación que aumenta la probabilidad de enfermar; puede ser modificable o no modificable, y su presencia no garantiza la enfermedad. Los determinantes pueden ser intrínsecos (edad, sexo) o extrínsecos (ingreso, educación, acceso a servicios).',
          },
        ],
      },
      {
        id: 'hcd-3',
        number: 3,
        title: 'Estilo de vida',
        keyTerms: ['estilo de vida', 'PEPS-I', 'Nola Pender', 'Alma-Ata'],
        blocks: [
          {
            type: 'definition',
            title: 'Estilo de vida (OMS, 1986)',
            content: 'Forma general de vida basada en la interacción entre las condiciones de vida y los patrones individuales de conducta, determinados por factores socioculturales y características personales. Un estilo de vida saludable incluye alimentación saludable, actividad física regular y evitar el tabaco y el alcohol.',
          },
          {
            type: 'table',
            title: 'Cuestionario de Perfil de Estilo de Vida (PEPS-I, Nola Pender)',
            data: {
              headers: ['Dato', 'Valor'],
              rows: [
                ['Reactivos', '48, tipo Likert de 1 («nunca») a 4 («siempre»)'],
                ['Dimensiones', 'Nutrición, ejercicio, responsabilidad en salud, manejo del estrés, soporte interpersonal y autoactualización'],
                ['Estilo de vida alto', '132–192 puntos'],
                ['Medio', '108–131 puntos'],
                ['Bajo', '48–107 puntos'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'La Atención Primaria a la Salud, impulsada en la Conferencia de Alma-Ata (1978), ayuda a individuos y familias a adoptar y mantener conductas que mejoran su salud y calidad de vida. La medicina del estilo de vida busca prevenir, tratar e incluso revertir enfermedades cambiando conductas no saludables por saludables.',
          },
        ],
      },
      {
        id: 'hcd-4',
        number: 4,
        title: 'Perfil epidemiológico y carga de la enfermedad en México',
        keyTerms: ['perfil epidemiológico', 'carga de la enfermedad', 'AVISA', 'transición epidemiológica'],
        blocks: [
          {
            type: 'definition',
            title: 'Perfil epidemiológico',
            content: 'Expresa la relación dinámica entre los procesos protectores y destructivos que definen la salud de una población (Barragán, 2007). México vive envejecimiento poblacional, aumento de enfermedades crónicas y persistencia de enfermedades transmisibles.',
          },
          {
            type: 'comparison',
            title: 'Morbilidad y mortalidad',
            left: {
              title: 'Principales causas de enfermedad (2023)',
              items: ['Infecciones respiratorias agudas', 'Infecciones intestinales', 'Infección de vías urinarias', 'Gingivitis y enfermedad periodontal', 'Úlceras, gastritis y duodenitis', 'Obesidad e hipertensión arterial (lugares 7 y 8)'],
            },
            right: {
              title: 'Principales causas de muerte (1.er semestre 2024)',
              items: ['Enfermedades del corazón', 'Diabetes mellitus', 'Tumores malignos', 'Enfermedades del hígado', 'Accidentes', 'Influenza y neumonía'],
            },
          },
          {
            type: 'formula',
            title: 'Carga de la enfermedad',
            formula: 'AVISA = años perdidos por muerte prematura + años vividos con discapacidad',
            description: 'Mide el impacto de una enfermedad considerando mortalidad y morbilidad. Permite comparar enfermedades, factores de riesgo y poblaciones, y priorizar intervenciones y recursos.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Desigualdad y enfermedades crónicas',
            content: 'Las enfermedades crónicas son la principal causa de muerte y discapacidad en México y golpean más a la población con mayores desigualdades; Oaxaca, Chiapas y Guerrero son los estados más vulnerables. La obesidad, el tabaquismo, el colesterol alto y la hipertensión son sus factores de riesgo clave.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-estilos-vida-cronicas',
    title: 'Obesidad, diabetes e hipertensión: estilos de vida',
    subtitle: 'Obesidad desde los enfoques biomédico y biopsicosocial, medicina del estilo de vida y sus seis pilares, remisión de la diabetes tipo 2 y medidas para la hipertensión arterial',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🥗',
    keyPoints: [
      'OBESIDAD: enfermedad crónica, multifactorial y neuroconductual en la que el exceso de grasa causa disfunción del tejido adiposo con consecuencias metabólicas, biomecánicas y psicosociales.',
      'AMBIENTE OBESOGÉNICO: mucha disponibilidad de alimentos altos en grasa y calorías y pocas oportunidades de actividad física.',
      'Medicina del estilo de vida, 6 pilares: NUTRICIÓN, ACTIVIDAD FÍSICA, SUEÑO, MANEJO DEL ESTRÉS, REDES SOCIALES y evitar SUSTANCIAS ★',
      'Remisión de la DM2: HbA1c < 6.5 % mantenida al menos 3 meses sin fármacos para bajar la glucosa.',
      'Actividad física (OMS): 150–300 min/semana de intensidad moderada o 75–150 de vigorosa, más 2 sesiones de fuerza.',
      'HAS: presión ≥ 140/90 mmHg sostenida. En México ≈ 30 % de los adultos la padece y 43 % de ellos no lo sabe.',
    ],
    sections: [
      {
        id: 'hev-1',
        number: 1,
        title: 'Sobrepeso y obesidad',
        keyTerms: ['obesidad', 'ambiente obesogénico', 'medicalización', 'carga alostática'],
        blocks: [
          {
            type: 'definition',
            title: 'Obesidad',
            content: 'Enfermedad crónica, multifactorial y neuroconductual en la que el aumento de la grasa corporal provoca disfunción del tejido adiposo y alteraciones de las fuerzas físicas de la grasa, con consecuencias metabólicas, biomecánicas y psicosociales adversas para la salud.',
          },
          {
            type: 'comparison',
            title: 'Dos miradas sobre la obesidad',
            left: {
              title: 'Enfoque biomédico',
              items: ['Medicalización: la conducta se define como problema médico', 'Herencia genética («gen ahorrador»)', 'Estrés y carga alostática', 'Modificación del estilo de vida'],
            },
            right: {
              title: 'Enfoque biopsicosocial',
              items: ['Urbanización, pobreza y patrones dietéticos', 'Mayor prevalencia en mujeres en pobreza; perspectiva de género', 'Estigma y visión de la obesidad como «problema moral»', 'Publicidad y estereotipos de imagen corporal', 'El estilo de vida como condición colectiva, no solo individual'],
            },
          },
          {
            type: 'definition',
            title: 'Alostasis',
            content: 'Extensión del concepto de homeostasis: proceso por el que el organismo se adapta a desafíos físicos, psicosociales y ambientales. Cuando el estrés es crónico, el costo acumulado de esa adaptación (carga alostática) favorece la enfermedad.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Lo que cuesta el índice de masa corporal elevado',
            content: 'En México, en 2021, el IMC elevado causó unos 4.2 millones de años de vida saludable perdidos, la mitad por diabetes; también contribuye a la enfermedad renal crónica, la cardiopatía isquémica y la enfermedad de la vesícula biliar. Explica alrededor del 65 % de la carga por diabetes.',
          },
        ],
      },
      {
        id: 'hev-2',
        number: 2,
        title: 'Diabetes tipo 2 y medicina del estilo de vida',
        keyTerms: ['diabetes tipo 2', 'medicina del estilo de vida', 'remisión', 'ejercinas'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La diabetes tipo 2 es una enfermedad crónica y progresiva determinada por factores genéticos, biológicos, conductuales y sociales. En México es una de las dos primeras causas de muerte y la primera causa de años de vida saludable perdidos y de pensión por invalidez en el IMSS.',
          },
          {
            type: 'definition',
            title: 'Medicina del estilo de vida',
            content: 'Disciplina que estudia cómo los hábitos cotidianos influyen en la prevención y el tratamiento de las enfermedades, a menudo junto con fármacos o cirugía. El paciente tiene un papel muy activo; los pilares no dicen «cómo» aplicarlos porque eso depende de cada persona.',
          },
          {
            type: 'table',
            title: 'Los seis pilares aplicados a la DM2',
            data: {
              headers: ['Pilar', 'Recomendación'],
              rows: [
                ['Nutrición', 'Alimentación equilibrada con restricción calórica; perder más del 10–15 % del peso; método del plato y dieta mediterránea'],
                ['Actividad física', '150–300 min/semana moderada o 75–150 vigorosa + 2 sesiones de fuerza; equilibrio en adultos mayores'],
                ['Sueño', 'El sueño de mala calidad (Pittsburgh ≥ 6) se asocia con HbA1c más alta y más adiposidad'],
                ['Manejo del estrés', 'Meditación, yoga, mindfulness, tai chi, respiración lenta, relajación muscular progresiva'],
                ['Redes sociales', 'La soledad duplica el riesgo de DM2; el apoyo social mejora HbA1c, presión y lípidos'],
                ['Sustancias', 'Evitar tabaco, alcohol y drogas, que alteran el metabolismo de la glucosa y el endotelio'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Remisión de la diabetes tipo 2',
            content: 'Regreso de la HbA1c a menos de 6.5 % (< 48 mmol/mol), mantenido durante al menos 3 meses sin tratamiento farmacológico para bajar la glucosa. Es el objetivo de la medicina del estilo de vida en la DM2.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Acantosis nigricans',
            content: 'Engrosamiento aterciopelado y oscuro de la piel en pliegues (cuello, axilas, codos). Es un signo visible de resistencia a la insulina: la insulina elevada estimula la proliferación de queratinocitos. Su hallazgo en la consulta obliga a buscar prediabetes o diabetes.',
          },
        ],
      },
      {
        id: 'hev-3',
        number: 3,
        title: 'Hipertensión arterial sistémica',
        keyTerms: ['hipertensión arterial', 'sodio', 'factores de riesgo'],
        blocks: [
          {
            type: 'definition',
            title: 'Hipertensión arterial sistémica (HAS)',
            content: 'Enfermedad crónica, controlable y de etiología multifactorial, caracterizada por un aumento sostenido de la presión sistólica ≥ 140 mmHg y/o de la diastólica ≥ 90 mmHg.',
          },
          {
            type: 'list',
            title: 'Datos clave',
            items: [
              'La OMS estima que afecta a 1 de cada 3 adultos.',
              'En México (Ensanut 2020–2023), ≈ 30 % de los adultos tiene HAS y el 43 % de ellos no conoce su diagnóstico.',
              'Mecanismos: inflamación persistente, estrés oxidativo, remodelado vascular y cambios estructurales del miocardio, que llevan a hipertrofia ventricular izquierda e insuficiencia cardíaca.',
              'Coexiste con obesidad, diabetes, dislipidemia y enfermedad renal crónica.',
            ],
          },
          {
            type: 'list',
            title: 'Estilo de vida saludable en la HAS',
            items: [
              'Reducir la sal (la OMS recomienda menos de 5 g al día), las grasas saturadas y los alimentos procesados.',
              'Alimentación rica en frutas y verduras (potasio y calcio), como la dieta DASH.',
              'Actividad aeróbica constante, al menos 30–45 minutos, 4–5 veces por semana.',
              'Limitar o eliminar tabaco y alcohol.',
              'Manejar el estrés y dormir 7–9 horas de buena calidad.',
              'Apoyo familiar y grupos de autoayuda para mejorar la adherencia.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El «asesino silencioso»',
            content: 'La hipertensión casi nunca da síntomas hasta que produce daño: infarto, evento vascular cerebral o enfermedad renal. Como casi la mitad de los hipertensos no sabe que lo es, medir la presión en toda consulta de adultos es una de las acciones de mayor impacto en atención primaria.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-sindromes-filiacion-cultural',
    title: 'Medicina tradicional y síndromes de filiación cultural',
    subtitle: 'Concepto (Yap, DSM-IV-TR y DSM-5), medicina tradicional indígena y cosmovisión frío-calor; mal de ojo, empacho, susto y caída de mollera',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🌿',
    keyPoints: [
      'Pow Meng Yap acuñó en 1962 el término «síndromes de filiación cultural». El DSM-5 lo sustituyó por «CONCEPTOS CULTURALES DE ANGUSTIA»: síndromes, modismos de angustia y explicaciones.',
      'Síndrome de filiación cultural: combinación de síntomas psíquicos y somáticos reconocida solo dentro de una cultura, sin alteraciones bioquímicas o estructurales demostrables.',
      'Medicina tradicional: salud y enfermedad como equilibrio y desequilibrio entre lo FRÍO y lo CALIENTE; usa herbolaria, masajes, temazcal, limpias y ritos.',
      'MAL DE OJO: «vista fuerte» o envidia; afecta sobre todo a niños (llanto, insomnio, fiebre, diarrea) · EMPACHO: comida «pegada»; se trata con sobada y purga.',
      'SUSTO: pérdida de la sustancia anímica por una fuerte impresión · CAÍDA DE MOLLERA: fontanela anterior hundida, atribuida a una caída; biomédicamente sugiere DESHIDRATACIÓN ★',
      'El médico no necesita compartir la creencia para respetarla, pero debe reconocer los signos de alarma que se esconden detrás.',
    ],
    sections: [
      {
        id: 'hsf-1',
        number: 1,
        title: 'Qué es un síndrome de filiación cultural',
        keyTerms: ['síndrome de filiación cultural', 'conceptos culturales de angustia', 'DSM-5'],
        blocks: [
          {
            type: 'steps',
            title: 'Evolución del concepto',
            steps: [
              'Pow Meng Yap (1962) acuñó el término y los describió, con una mirada colonial, como conductas «raras, exóticas e impredecibles» de personas «no civilizadas».',
              'DSM-IV-TR: patrones recurrentes de conducta aberrante y experiencias perturbadoras propios de una localidad, que pueden o no corresponder a una categoría diagnóstica.',
              'DSM-5: los sustituye por «conceptos culturales de angustia», las formas en que los grupos culturales experimentan, comprenden y comunican el sufrimiento.',
            ],
          },
          {
            type: 'table',
            title: 'Conceptos culturales de angustia (DSM-5)',
            data: {
              headers: ['Concepto', 'Significado'],
              rows: [
                ['Síndromes', 'Grupos de síntomas y atribuciones que ocurren en culturas específicas'],
                ['Modismos de angustia', 'Formas compartidas de expresar el malestar'],
                ['Explicaciones', 'Etiquetas o atribuciones que sugieren la causa de los síntomas'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Síndrome de filiación cultural',
            content: 'Combinación de síntomas psiquiátricos y somáticos que se reconoce solo dentro de una sociedad o cultura específica, sin alteraciones bioquímicas o estructurales demostrables, y que no se reconoce como enfermedad en otra cultura.',
          },
        ],
      },
      {
        id: 'hsf-2',
        number: 2,
        title: 'Medicina tradicional',
        keyTerms: ['medicina tradicional', 'frío-calor', 'herbolaria', 'temazcal'],
        blocks: [
          {
            type: 'definition',
            title: 'Medicina tradicional indígena',
            content: 'Conjunto de prácticas terapéuticas que realizan las médicas y médicos indígenas o tradicionales, con plantas, hongos, animales y minerales, y con elementos culturales como la oralidad (oraciones, plegarias y rezos), para aliviar padecimientos que se explican dentro de un marco sociocultural propio.',
          },
          {
            type: 'list',
            title: 'Componentes del sistema',
            items: [
              'Cosmovisión: salud y enfermedad como equilibrio y desequilibrio entre elementos fríos y calientes.',
              'Nosología propia: clasificación de los padecimientos.',
              'Causalidad: rupturas del equilibrio frío-calor, desórdenes alimenticios, movimientos bruscos, alteraciones de la fuerza vital.',
              'Prevención: evitar los factores que desequilibran.',
              'Terapéutica: herbolaria, productos animales y minerales; masajes, «acomodamientos» y succiones; frío con barro y calor con temazcal; limpias, ensalmos y ritos.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Tonalli',
            content: 'Los nahuas prehispánicos consideraban el tonalli una fuerza interior dadora de vida que residía sobre todo en la cabeza. Diagnosticaban su pérdida tomando el pulso y observando la mollera: de ahí el origen de la «caída de mollera».',
          },
        ],
      },
      {
        id: 'hsf-3',
        number: 3,
        title: 'Mal de ojo y empacho',
        keyTerms: ['mal de ojo', 'empacho', 'purga', 'sobada'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos padecimientos frecuentes en niños',
            left: {
              title: 'Mal de ojo («ojeo»)',
              items: [
                'Causa atribuida: «vista fuerte» o pesada, envidia, el niño llama mucho la atención',
                'Niños: llanto constante, insomnio, diarrea, vómito, fiebre',
                'Adultos: jaqueca, somnolencia, molestia a la luz, falta de fuerza',
                'Tratamiento: amuletos (ojo de venado, azabache, bolsita roja con ajo y chile), limpias con huevo, chile, limón y hierbas (jarilla, ruda, santamaría)',
              ],
            },
            right: {
              title: 'Empacho',
              items: [
                'Causa atribuida: comida que «se queda pegada», exceso de comida seca, galletas, cáscaras',
                'Cuadro: cólico, distensión («suena como tambor»), náusea, diarrea o estreñimiento, lengua blanca, mal aliento, falta de apetito',
                'Tratamiento: sobada del abdomen, «jalar el cuerito» de la espalda, purga con aceite y bebidas, infusiones de anís, hierbabuena y hojas de naranjo',
                'Desde la biomedicina se interpreta como disminución de la motilidad intestinal',
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Purgas con greta y azarcón: intoxicación por plomo',
            content: 'Algunos remedios tradicionales para el empacho, como la greta y el azarcón, son compuestos de plomo (óxido y tetróxido de plomo). Se han documentado intoxicaciones graves por plomo en niños tratados con ellos, con anemia, dolor abdominal, alteraciones neurológicas y encefalopatía. Preguntar con respeto qué remedios se han usado es parte de la historia clínica.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Qué puede esconder el «ojo» o el «empacho»',
            content: 'Fiebre alta, diarrea con vómito, rechazo al alimento y llanto inconsolable en un lactante pueden ser una gastroenteritis con deshidratación, una infección urinaria o una meningitis. El médico puede respetar la limpia o la sobada y, a la vez, explicar en lenguaje sencillo los signos de alarma que requieren atención inmediata.',
          },
        ],
      },
      {
        id: 'hsf-4',
        number: 4,
        title: 'Susto y caída de mollera',
        keyTerms: ['susto', 'espanto', 'caída de mollera', 'fontanela anterior'],
        blocks: [
          {
            type: 'comparison',
            title: 'Susto y caída de mollera',
            left: {
              title: 'Susto (espanto)',
              items: [
                'Causa atribuida: golpe, caída o una fuerte impresión',
                'Se pierde de forma involuntaria la sustancia anímica (alma o «sombra»); la sangre se «estanca» y el calor se concentra en corazón y cabeza',
                'Cuadro: el niño no come, llora, despierta gritando, pesadillas, palidez, adelgazamiento',
                'Tratamiento: rezos, sahumerios, «llamar» al espíritu, té de ajenjo',
                'El DSM-5 lo incluye entre los conceptos culturales de angustia',
              ],
            },
            right: {
              title: 'Caída de mollera',
              items: [
                'Hundimiento de la fontanela anterior del bebé',
                'Causa atribuida: sobre todo una caída del niño',
                'Cuadro: diarrea (el síntoma principal), llanto excesivo, fiebre, ojos hundidos, rechazo al alimento',
                'Tratamiento: empujar el paladar hacia arriba, succionar la mollera, emplastos, infusiones',
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'La fontanela anterior (mollera) se cierra en general entre los 7 y los 18 meses. Una fontanela hundida con diarrea, ojos hundidos y llanto sin lágrimas es un signo clásico de DESHIDRATACIÓN en el lactante: la tradición observó bien el signo, aunque le atribuyó otra causa. Por eso parte de los tratamientos tradicionales incluye dar líquidos.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Nunca sacudir al bebé',
            content: 'Algunas prácticas para «subir la mollera» consisten en sostener al niño de los pies y sacudirlo. Sacudir a un lactante puede causar el traumatismo craneal por sacudida (síndrome del bebé sacudido): hemorragia subdural, hemorragias retinianas y daño cerebral, incluso la muerte. Un bebé con la mollera hundida necesita hidratación y valoración médica urgente.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Tabaco: planta ceremonial, no medicina pulmonar',
            content: 'Para los pueblos nahuas el tabaco es una planta ceremonial de poder, distinta del cigarro comercial. Sin embargo, fumar tabaco, ceremonial o no, daña las vías respiratorias: no trata la bronquitis ni la neumonía. Respetar su valor cultural no implica recomendarlo como remedio.',
          },
        ],
      },
    ],
  },
]
