import type { Topic } from '../types'

// Medicina Humanística (UAD · MH01007) — Semana 1 (Clase 1: humanismo médico,
// origen de la vida y del ser humano; Clase 2: corporeidad y unidad biopsicosocial;
// Clase 3: relación dialéctica mente-cuerpo, desarrollo humano y envejecimiento), Semana 2
// (Clase 1: cultura, orden cultural, indicadores e interculturalidad; Clase 2: salud,
// enfermedad, muerte y práctica médica; Clase 3: eficacia simbólica, padecer y
// competencia cultural), Semana 3 (la relación médico-paciente,
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
            content: 'Campo interdisciplinario y multidisciplinario que explora los contextos, las experiencias y los problemas críticos de la medicina y de la atención de la salud, y que contribuye a formar la identidad profesional del médico. Surgen como respuesta a una medicina cada vez más tecnológica; como disciplina académica se establecieron en el Instituto Karolinska de Estocolmo a finales de los años noventa. Se introdujeron en la enseñanza de las ciencias de la salud con la aspiración de hacer la práctica médica más compasiva y humana.',
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
      'Ser humano: Animalia → mamíferos → primates → homínidos → género Homo → Homo sapiens. El hombre moderno se clasifica, biológica y paleoantropológicamente, en la subespecie HOMO SAPIENS SAPIENS ★',
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
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Teoría endosimbiótica',
            content: 'Las mitocondrias descienden de bacterias que fueron englobadas por una célula ancestral y se quedaron a vivir en simbiosis con ella (teoría endosimbiótica, defendida por Lynn Margulis). Por eso tienen membrana doble y su propio ADN circular, que en el ser humano se hereda por vía materna.',
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
                ['Australopithecus afarensis', '≈ 3.9–2.9 millones de años', '«Lucy» (Etiopía); bípeda, brazos largos, cerebro pequeño; se considera antecedente directo de Homo habilis'],
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
          {
            type: 'note',
            title: 'El cuerpo del médico también es herramienta',
            content: 'La palpación, la percusión y la auscultación son formas de contacto corporal con las que el médico obtiene información y se relaciona con el paciente; por eso cuidan su comodidad e intimidad. La inteligencia artificial puede apoyar, pero no sustituye el juicio ni la responsabilidad clínica.',
          },
          {
            type: 'paragraph',
            content: 'La naturaleza tiene dimensiones física, biológica y social: también vivimos en entornos familiares y comunitarios. Corrientes antiguas como los cínicos, los epicúreos y los estoicos reflexionaron sobre cómo vivir en equilibrio con ella.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Una Salud',
            content: 'El enfoque «Una Salud» (One Health), que promueven la OMS, la FAO, la Organización Mundial de Sanidad Animal y el PNUMA, reconoce que la salud humana, la animal y la del ambiente están unidas. Muchas enfermedades emergentes, como la rabia o la influenza aviar, pasan de los animales al ser humano.',
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
            content: 'El rostro del otro no es solo su apariencia: expresa su vulnerabilidad y su dependencia, y apela a nuestra responsabilidad. Su primera palabra es un mandato: «No matarás». Es el rostro del pobre, la viuda, el huérfano y el extranjero; para el médico, el del paciente «por el que yo puedo todo y a quien todo debo». De ese encuentro surge una responsabilidad asimétrica. La alteridad se entiende como igualdad en la diferencia: el otro es distinto de mí, pero igual en dignidad.',
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
            content: 'Hipócrates fue de los primeros en relacionar las tres esferas del ser humano con las causas de la enfermedad. En 1977, el psiquiatra e internista George L. Engel publicó en la revista Science la necesidad de un nuevo modelo médico que integrara lo biológico, lo psicológico y lo social. Se apoyó en la teoría de sistemas: cada nivel de organización es un todo y a la vez parte de un nivel mayor, y los cambios en uno repercuten en los demás.',
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
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La medicina no es una ciencia exacta',
            content: 'Un mismo médico puede medir distinto en dos ocasiones (variabilidad intraobservador) y dos médicos pueden discrepar (variabilidad interobservador). Por eso se estandarizan la toma de signos vitales, las mediciones y la historia clínica. También la indicación debe ser precisa: «cada 8 horas» no es lo mismo que «con cada comida», porque los intervalos entre comidas no son iguales.',
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
            type: 'table',
            title: 'Necesidades humanas desde una visión integral',
            data: {
              headers: ['Necesidades', 'Ejemplos'],
              rows: [
                ['Biológicas', 'Alimento, agua, aire, luz, sueño, eliminación, movimiento, actividad sexual'],
                ['Psicológicas', 'Conocimiento, diálogo, recreación, reconocimiento, autonomía'],
                ['Socioculturales', 'Comunicación, participación, pertenencia; valores culturales, éticos y estéticos'],
                ['Espirituales', 'Significado y propósito, conexión, bienestar, paz y esperanza'],
              ],
            },
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
    id: 'humanistica-dialectica-mente-cuerpo',
    title: 'Relación dialéctica entre las esferas anatómica y psíquica',
    subtitle: 'Dialéctica, dualismo cartesiano y problema mente-cuerpo, monismo, dualismo y emergentismo, monismo materialista y cerebro moral, desarrollo moral de Kohlberg, lo social, lo sociológico y lo antropológico',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '☯️',
    keyPoints: [
      'RELACIÓN DIALÉCTICA entre las esferas anatómica y psíquica: interacción recíproca entre el cuerpo y los procesos mentales, emocionales y espirituales, donde cada esfera influye y se ve influida por las demás ★',
      'DESCARTES (s. XVII), dualismo cartesiano: res infinita (Dios; atributo, la perfección), res cogitans (alma; el pensamiento) y res extensa (cuerpo; la extensión). Situaba el alma en la glándula pineal.',
      'Posturas ante el problema mente-cuerpo: MONISMO (fisicalismo, idealismo, monismo neutral), DUALISMO (de sustancias, de propiedades) y EMERGENTISMO ★',
      'MONISMO MATERIALISTA: la mente es el producto fisiológico del encéfalo ★',
      'KOHLBERG, 3 niveles con 2 etapas cada uno: PRECONVENCIONAL (obediencia y castigo; interés propio), CONVENCIONAL (conformidad interpersonal; orden social), POSTCONVENCIONAL (contrato social; principios éticos universales) ★',
      'LO SOCIAL: relaciones, interacciones y estructuras · LO SOCIOLÓGICO: cómo se relaciona el ser humano con las dinámicas de un grupo · LO ANTROPOLÓGICO: el ser humano desde la diversidad cultural ★',
    ],
    sections: [
      {
        id: 'hdm-1',
        number: 1,
        title: 'La relación dialéctica',
        keyTerms: ['dialéctica', 'interacción recíproca', 'esfera anatómica', 'esfera psíquica'],
        blocks: [
          {
            type: 'definition',
            title: 'Relación dialéctica entre las esferas anatómica y psíquica',
            content: 'Describe la interacción recíproca entre el cuerpo y los procesos mentales, emocionales y espirituales, donde cada esfera influye y se ve influida por las demás para favorecer el desarrollo integral del ser humano. Es una relación estructural.',
          },
          {
            type: 'paragraph',
            content: 'La dialéctica tiene una larga historia. En el pensamiento griego era un juego de argumento y contraargumento en el que cada respuesta se apoya en la anterior. Hegel la planteó como tesis y antítesis (con su analogía del amo y el esclavo), y Marx dijo haber «puesto de pie» la filosofía hegeliana con la secuencia tesis-antítesis-síntesis. No toda interacción recíproca es dialéctica: lo es cuando el intercambio construye algo nuevo y transforma a quienes participan.',
          },
          {
            type: 'comparison',
            title: 'Las dos esferas',
            left: {
              title: 'Esfera anatómica',
              items: ['El cuerpo: sentidos, fisiología, morfología, anatomía', 'Desde el mecanicismo, entendida como una máquina que se descompone y hay que arreglar'],
            },
            right: {
              title: 'Esfera psíquica',
              items: ['Alma: voluntad, mente, emociones, sentimientos', 'Espíritu: conciencia, intuición, comunión', 'El estudio se centra en el pensamiento; emociones y conciencia tienen instrumentos clínicos de evaluación'],
            },
          },
          {
            type: 'note',
            title: 'Para el examen',
            content: 'En clase se indicó que solo se pregunta lo que se explicó en clase y en el video de integración, con un número parecido de preguntas por tema (unas cinco en el banco de cada uno). El formato típico es una definición textual con varias opciones de término.',
          },
        ],
      },
      {
        id: 'hdm-2',
        number: 2,
        title: 'Descartes y el problema mente-cuerpo',
        keyTerms: ['dualismo cartesiano', 'cogito', 'res cogitans', 'res extensa', 'glándula pineal', 'mecanicismo'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Con el «pienso, luego existo» (cogito, ergo sum), René Descartes (siglo XVII) separó la mente del cuerpo. En su dualismo, la mente es pensamiento y carece de extensión espacial, mientras que el cuerpo es extensión física. El cuerpo quedó sometido a las leyes de la física, la química y la biología; el pensamiento, a otras leyes. De ahí nace el problema mente-cuerpo: si son dos sustancias distintas, ¿cómo se relacionan?',
          },
          {
            type: 'table',
            title: 'Las tres sustancias de Descartes',
            data: {
              headers: ['Sustancia', 'Qué es', 'Atributo esencial'],
              rows: [
                ['Res infinita', 'Dios: la sustancia en sentido estricto', 'La perfección'],
                ['Res cogitans', 'El alma o mente (sustancia creada)', 'El pensamiento'],
                ['Res extensa', 'El cuerpo (sustancia creada)', 'La extensión'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'Descartes aspiraba a expresar toda la naturaleza en fórmulas matemáticas (de ahí el plano cartesiano) y vio al cuerpo humano como una máquina: es el MECANICISMO. Situó en la GLÁNDULA PINEAL el centro sensorio y el recinto del alma, porque ahí, pensaba, convergía toda la información de los sentidos. Mucho antes, Galeno ya había planteado la localización de los fenómenos psíquicos en estructuras cerebrales.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'La glándula pineal hoy',
            content: 'La pineal secreta melatonina según el ciclo luz-oscuridad. Su precursor es la serotonina, que a su vez se forma a partir del triptófano, un aminoácido esencial de la dieta. En la depresión estacional, frecuente en países con inviernos de pocas horas de luz, se usa la fototerapia (exposición a luz intensa).',
          },
        ],
      },
      {
        id: 'hdm-3',
        number: 3,
        title: 'Posturas ante el problema mente-cuerpo',
        keyTerms: ['monismo', 'fisicalismo', 'idealismo', 'monismo neutral', 'dualismo', 'emergentismo'],
        blocks: [
          {
            type: 'table',
            title: 'Principales posturas filosóficas',
            data: {
              headers: ['Postura', 'Qué sostiene', 'Variantes'],
              rows: [
                ['MONISMO', 'Existe una sola realidad unificadora', 'FISICALISMO: la mente es materia organizada de manera particular · IDEALISMO: solo existe el pensamiento; la materia es una representación mental · MONISMO NEUTRAL: mente y materia son aspectos de una esencia distinta de ambas'],
                ['DUALISMO', 'Mente y cuerpo son entidades separadas', 'DE SUSTANCIAS: la mente es una sustancia distinta que no sigue las leyes físicas · DE PROPIEDADES: los estados mentales son propiedades fundamentales junto con las propiedades físicas'],
                ['EMERGENTISMO', 'Los estados mentales surgen del cerebro, pero poseen propiedades irreductibles con efectos causales reales en la experiencia humana', 'La mente «emerge» de la conectividad neuronal'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'El debate actual va más allá del dualismo y del materialismo clásico: incorpora hallazgos de las neurociencias, las ciencias cognitivas, la física cuántica y la inteligencia artificial, con implicaciones para la identidad personal, la responsabilidad moral y el desarrollo de sistemas artificiales con estados mentales.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué importa en salud mental',
            content: 'Mientras la mente se pensó como algo ajeno al cuerpo, la enfermedad mental quedó fuera de la medicina y su estudio avanzó despacio. Entender que el cerebro es el sustrato de la mente permitió tratar la depresión o la psicosis como problemas de salud, sin reducir a la persona a su cerebro.',
          },
        ],
      },
      {
        id: 'hdm-4',
        number: 4,
        title: 'Monismo materialista y cerebro moral',
        keyTerms: ['monismo materialista', 'lóbulo frontal', 'Phineas Gage', 'psicología', 'psiquiatría'],
        blocks: [
          {
            type: 'definition',
            title: 'Monismo materialista',
            content: 'Todo existe independientemente de la conciencia de quien lo piensa, y la mente es el producto fisiológico del encéfalo. («La mente es el producto fisiológico del encéfalo»: verdadero.)',
          },
          {
            type: 'list',
            title: 'Estructuras relacionadas con decidir entre lo bueno y lo malo',
            items: [
              'Lóbulo frontal, región orbitaria.',
              'Lóbulo frontal, cara dorsolateral.',
              'Cíngulo anterior.',
              'Lóbulo temporal.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'historia',
            title: 'Phineas Gage y Elliot',
            content: 'En 1848 una barra de hierro atravesó el lóbulo frontal del trabajador ferroviario Phineas Gage. Sobrevivió, pero cambiaron su carácter y su juicio. Más de un siglo después, el neurólogo Antonio Damasio describió a «Elliot», que tras una cirugía en la región orbitofrontal conservó su inteligencia pero perdió la capacidad de tomar decisiones. Casos así sustentan que el razonamiento moral tiene un sustrato cerebral.',
          },
          {
            type: 'comparison',
            title: 'Psicología y psiquiatría',
            left: {
              title: 'Psicología',
              items: ['Ciencia con método y objeto de estudio propios', 'Psicoterapias y psicoanálisis', 'No prescribe medicamentos'],
            },
            right: {
              title: 'Psiquiatría',
              items: ['Especialidad médica con una concepción orgánica del cuerpo', 'También hace psicoterapia y psicoanálisis', 'Puede indicar tratamiento farmacológico'],
            },
          },
        ],
      },
      {
        id: 'hdm-5',
        number: 5,
        title: 'Desarrollo moral de Kohlberg',
        keyTerms: ['Kohlberg', 'preconvencional', 'convencional', 'postconvencional'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Lawrence Kohlberg, psicólogo, estudió el desarrollo del razonamiento moral en niños y lo extendió hasta la edad adulta. Lo organizó en tres niveles, cada uno con dos etapas.',
          },
          {
            type: 'table',
            title: 'Niveles y etapas',
            data: {
              headers: ['Nivel', 'Etapa', 'Qué guía el juicio'],
              rows: [
                ['1. PRECONVENCIONAL (infancia): consecuencias personales', '1. Obediencia y castigo', '«Está mal si me castigan»; la autoridad tiene razón porque tiene poder (no pegar para que no me regañen)'],
                ['', '2. Interés propio e intercambio instrumental', 'Lo correcto es lo que me beneficia; «te ayudo si tú me ayudas»'],
                ['2. CONVENCIONAL (adolescencia y muchos adultos): normas sociales y orden', '3. Conformidad interpersonal', 'Ser «bueno» según las expectativas del grupo; importa la aprobación social (fumar porque los amigos fuman)'],
                ['', '4. Mantenimiento del orden social', 'Cumplir leyes y deberes para que la sociedad funcione; la moral se basa en reglas y autoridad legítima'],
                ['3. POSTCONVENCIONAL (no todos llegan): principios éticos abstractos', '5. Contrato social', 'Las leyes son acuerdos modificables para proteger derechos; se evalúa si una norma es justa'],
                ['', '6. Principios éticos universales', 'Justicia, igualdad y dignidad humana; puede implicar desobedecer leyes injustas'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'El desarrollo moral no depende solo de la edad. Hay adultos que siguen razonando en el nivel preconvencional por el contexto en que crecieron («no lo hago porque me pegan» o «porque así lo dijo mi papá»): el desarrollo biológico y el moral no siempre avanzan juntos.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: '¿En qué nivel razona el médico?',
            content: 'En clase se comentó que los estudiantes de medicina y los médicos suelen quedarse en el nivel convencional, porque la práctica se rige por guías de práctica clínica, algoritmos y medicina basada en evidencia. Razonar en el nivel postconvencional no significa ignorar la evidencia, sino poder juzgar si una norma protege los derechos y la dignidad del paciente.',
          },
        ],
      },
      {
        id: 'hdm-6',
        number: 6,
        title: 'Lo social, lo sociológico y lo antropológico',
        keyTerms: ['lo social', 'lo sociológico', 'lo antropológico', 'neuroteología'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La dialéctica entre las esferas anatómica y psíquica se expresa en tres conceptos cercanos pero distintos.',
          },
          {
            type: 'table',
            title: 'Definiciones para memorizar',
            data: {
              headers: ['Concepto', 'Definición'],
              rows: [
                ['LO SOCIAL', 'Conjunto de relaciones, interacciones y estructuras que conforman la vida en sociedad, incluyendo cultura, instituciones y normas compartidas'],
                ['LO SOCIOLÓGICO', 'Forma en que se relaciona el ser humano con las distintas dinámicas sociales y culturales de un grupo social'],
                ['LO ANTROPOLÓGICO', 'Comprensión del ser humano desde el enfoque de la diversidad cultural y los procesos que dan forma a la sociedad contemporánea, considerando la migración, la identidad étnica, los derechos humanos y la globalización'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Así se pregunta',
            content: 'En clase se explicó el formato: se da la definición completa y se pide elegir si es lo social, lo sociológico o lo antropológico. Las imágenes de las diapositivas (mapas cerebrales) solo ilustran; se evalúa la definición.',
          },
          {
            type: 'table',
            title: 'Espiritualidad y cerebro (neuroteología)',
            data: {
              headers: ['Componente', 'Región asociada'],
              rows: [
                ['El «químico de Dios»', 'Tallo cerebral; serotonina'],
                ['El «lugar de Dios»', 'Lóbulo temporal'],
                ['Los virtuosos espirituales (monjes, ministros; meditación)', 'Lóbulos parietales'],
                ['La biología de la creencia', 'Todo el cerebro; efectos en la salud y la enfermedad'],
                ['Experiencias cercanas a la muerte', 'Lóbulo frontal'],
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-desarrollo-humano',
    title: 'Desarrollo biológico y desarrollo humano',
    subtitle: 'Ciclo vital, crecimiento y desarrollo, ámbitos y etapas del desarrollo humano, principios de Baltes, etapas cognitivas de Piaget y etapas psicosociales de Erikson',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '📈',
    keyPoints: [
      'CICLO VITAL HUMANO: proceso de crecimiento y desarrollo que atraviesan las personas desde el nacimiento hasta la muerte ★',
      'CRECIMIENTO: cuantitativo, continuo, secuencial, universal e irreversible (proliferación celular) · DESARROLLO: cualitativo; varía con el grupo social, la cultura y el género ★',
      'Ámbitos del desarrollo: FÍSICO (cuerpo y cerebro, sentidos, motricidad, salud), COGNOSCITIVO (aprendizaje, atención, memoria, lenguaje, pensamiento, creatividad) y PSICOSOCIAL (emociones, personalidad, relaciones) ★',
      'BALTES, 7 principios: dura toda la vida; es multidimensional; multidireccional; cambia la influencia de biología y cultura; redistribuye recursos; muestra plasticidad; depende del contexto histórico y cultural ★',
      'PIAGET: sensoriomotora (0–2 años), preoperacional (2–7), operaciones concretas (7–11) y operaciones formales (desde los 11).',
      'ERIKSON: 8 estadios, cada uno con edad, crisis, relaciones significativas y fuerza básica o virtud ★',
    ],
    sections: [
      {
        id: 'hdh-1',
        number: 1,
        title: 'Ciclo vital: crecimiento y desarrollo',
        keyTerms: ['ciclo vital', 'crecimiento biológico', 'desarrollo', 'desarrollo biológico'],
        blocks: [
          {
            type: 'definition',
            title: 'Ciclo vital humano',
            content: 'Proceso de crecimiento y desarrollo que atraviesan las personas desde el nacimiento hasta la muerte. Tiene dos componentes que no son lo mismo: el crecimiento y el desarrollo.',
          },
          {
            type: 'comparison',
            title: 'Crecimiento y desarrollo',
            left: {
              title: 'Crecimiento biológico',
              items: [
                'Combinación de eventos desde el nivel bioquímico y biofísico hasta el orgánico, que da como resultado la producción íntegra del organismo',
                'Proceso por el que el ser humano aumenta su tamaño y sus capacidades hasta alcanzar la madurez',
                'CUANTITATIVO (peso y talla)',
                'CONTINUO, SECUENCIAL (no se salta etapas), UNIVERSAL (igual para todos) e IRREVERSIBLE',
                'Se caracteriza por la proliferación celular',
              ],
            },
            right: {
              title: 'Desarrollo',
              items: [
                'Proceso CUALITATIVO',
                'Incluye cambios físicos, funcionales, emocionales y sociales',
                'Sus características varían según la diversidad de grupos sociales y culturales y las diferencias de género',
                'DESARROLLO BIOLÓGICO: cambios físicos, orgánicos y celulares desde la fecundación hasta la muerte',
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'Crecimiento y desarrollo pueden parecer un binomio, pero son fenómenos distintos que no siempre evolucionan de manera sincrónica: un adulto con pleno crecimiento biológico puede seguir razonando con una moral preconvencional.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cada sistema crece a su ritmo',
            content: 'Las curvas de crecimiento por sistemas muestran que el sistema nervioso crece muy rápido y se acerca a su tamaño adulto hacia los 5 o 6 años, mientras que el aparato genital casi no crece hasta la pubertad. Por eso la estimulación en los primeros años es tan importante, y la consulta del niño sano vigila peso y talla en sus percentiles: las desviaciones señalan sobrepeso, desnutrición o subcrecimiento.',
          },
        ],
      },
      {
        id: 'hdh-2',
        number: 2,
        title: 'Ámbitos y etapas del desarrollo humano',
        keyTerms: ['desarrollo físico', 'desarrollo cognoscitivo', 'desarrollo psicosocial', 'dirección cefalocaudal'],
        blocks: [
          {
            type: 'table',
            title: 'Ámbitos del desarrollo humano',
            data: {
              headers: ['Ámbito', 'Definición'],
              rows: [
                ['Desarrollo FÍSICO', 'Crecimiento del cuerpo y el cerebro, que incluye las pautas de cambio de las capacidades sensoriales, las habilidades motrices y la salud'],
                ['Desarrollo COGNOSCITIVO', 'Pauta de cambio de los procesos mentales: aprendizaje, atención, memoria, lenguaje, pensamiento, razonamiento y creatividad'],
                ['Desarrollo PSICOSOCIAL', 'Pauta de cambio de las emociones, la personalidad y las relaciones sociales'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'La dirección general del desarrollo es CEFALOCAUDAL: primero maduran las funciones neuromusculares de la cabeza y después las del tronco y las extremidades (el bebé sostiene la cabeza, luego se rueda, gatea, se endereza y se pone de pie). El ritmo es rápido en los dos primeros años y de nuevo a partir de la pubertad. Usar andaderas no salta ninguna de estas etapas.',
          },
          {
            type: 'table',
            title: 'Etapas del desarrollo humano',
            data: {
              headers: ['Etapa', 'Edad aproximada', 'Rasgos'],
              rows: [
                ['Prenatal', 'Concepción–nacimiento', 'Formación de órganos y sistemas; desarrollo embrionario y fetal; alta sensibilidad a factores ambientales'],
                ['Primera infancia', '0–2/3 años', 'Crecimiento físico acelerado; desarrollo motor básico (gateo, marcha); lenguaje inicial y vínculos afectivos'],
                ['Infancia temprana', '2–6 años', 'Lenguaje y pensamiento simbólico; más autonomía; juego cooperativo'],
                ['Niñez', '6–11/12 años', 'Pensamiento lógico concreto; importancia del grupo de pares; avances cognitivos y sociales'],
                ['Adolescencia', '11/12–18/20 años', 'Pubertad y madurez sexual; construcción de la identidad; pensamiento abstracto'],
                ['Adultez temprana', '18/20–40 años', 'Independencia, relaciones estables y proyectos de vida; máximo rendimiento físico'],
                ['Adultez media', '40–65 años', 'Cambios físicos graduales; mayor estabilidad laboral y familiar'],
                ['Adultez tardía o vejez', '60/65 años en adelante', 'Envejecimiento físico y cognitivo; adaptación a nuevas condiciones y roles'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Las edades cambian según el autor',
            content: 'En la misma clase aparecieron dos clasificaciones (por ejemplo, la vejez desde los 60 o desde los 65 años). Se aclaró que no se pregunta en qué año empieza una etapa: lo importante es qué la caracteriza.',
          },
        ],
      },
      {
        id: 'hdh-3',
        number: 3,
        title: 'Principios del desarrollo de Baltes',
        keyTerms: ['Baltes', 'ciclo vital', 'plasticidad', 'multidireccional'],
        blocks: [
          {
            type: 'steps',
            title: 'Los 7 principios del enfoque del ciclo vital (Paul B. Baltes)',
            steps: [
              'El desarrollo dura toda la vida.',
              'El desarrollo es multidimensional.',
              'El desarrollo es multidireccional.',
              'La influencia relativa de la biología y la cultura cambia con el ciclo vital.',
              'El desarrollo implica modificar la distribución de los recursos.',
              'El desarrollo muestra plasticidad.',
              'El contexto histórico y cultural influye en el desarrollo.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Plasticidad: también en el adulto',
            content: 'El cerebro adulto sigue formando y reforzando conexiones cuando se le exige: aprender, practicar y estudiar activamente (no solo escuchar) aprovecha esa plasticidad neuronal a cualquier edad.',
          },
        ],
      },
      {
        id: 'hdh-4',
        number: 4,
        title: 'Etapas cognitivas de Piaget',
        keyTerms: ['Piaget', 'sensoriomotora', 'preoperacional', 'operaciones concretas', 'operaciones formales'],
        blocks: [
          {
            type: 'table',
            title: 'Desarrollo cognitivo',
            data: {
              headers: ['Etapa', 'Edad', 'Características', 'Competencias clave'],
              rows: [
                ['SENSORIOMOTORA', '0–2 años', 'Conoce por la interacción física con el entorno y la repetición de acciones; desarrolla la permanencia del objeto; pensamiento egocéntrico', 'Conducta orientada a metas; permanencia de los objetos'],
                ['PREOPERACIONAL', '2–7 años', 'Usa el lenguaje y los símbolos; juego simbólico; clasificación y lógica básica; pensamiento intuitivo y egocéntrico', 'Pensamiento = símbolos e imágenes mentales; lenguaje; conceptos numéricos básicos'],
                ['OPERACIONES CONCRETAS', '7–11 años', 'Pensamiento lógico y organizado, ligado a situaciones concretas; relaciones de causa y efecto; razonamiento social', 'Seriación, clasificación y conservación; pensamiento sobre fenómenos y objetos reales'],
                ['OPERACIONES FORMALES', 'Desde los 11 años', 'Razonamiento abstracto, hipotético y deductivo; reflexión sobre conceptos morales y éticos; autopercepción, planificación y decisiones complejas', 'Pensamiento abstracto: lógica y razonamiento'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Explicar según la etapa',
            content: 'A un niño de 5 años (etapa preoperacional) se le explica un procedimiento con palabras simples, objetos y juego; un adolescente (operaciones formales) ya puede razonar sobre riesgos, hipótesis y consecuencias, y conviene incluirlo en las decisiones.',
          },
        ],
      },
      {
        id: 'hdh-5',
        number: 5,
        title: 'Etapas psicosociales de Erikson',
        keyTerms: ['Erikson', 'crisis psicosocial', 'relaciones significativas', 'virtud'],
        blocks: [
          {
            type: 'table',
            title: 'Los 8 estadios',
            data: {
              headers: ['Estadio', 'Etapa', 'Edad', 'Crisis', 'Relaciones significativas', 'Fuerza básica (virtud)'],
              rows: [
                ['I', 'Infancia temprana', '0–18 meses', 'Confianza vs. desconfianza', 'Madre', 'Esperanza y fe'],
                ['II', 'Infancia tardía', '18 meses–3 años', 'Autonomía vs. vergüenza', 'Padres', 'Voluntad y determinación'],
                ['III', 'Niñez temprana', '3–6 años', 'Iniciativa vs. culpa', 'Familia', 'Propósito y finalidad'],
                ['IV', 'Edad escolar', '6–12 años', 'Laboriosidad vs. inferioridad', 'Vecindario y escuela', 'Competencia'],
                ['V', 'Adolescencia', '13–18 años', 'Identidad vs. confusión', 'Grupos y modelos de roles', 'Fidelidad y lealtad'],
                ['VI', 'Adultez temprana', '19–40 años', 'Intimidad vs. aislamiento', 'Colegas y amigos', 'Amor'],
                ['VII', 'Adultez', '45–60 años', 'Productividad vs. estancamiento', 'Hogar y compañeros de trabajo', 'Cuidado'],
                ['VIII', 'Edad avanzada', '60 años o más', 'Integridad vs. desesperación', 'Los seres humanos, «los míos»', 'Sabiduría'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Así se pregunta',
            content: 'En clase se señaló que de Erikson se pregunta el estadio, la etapa, la edad, la crisis, las relaciones significativas y la fuerza básica o virtud.',
          },
          {
            type: 'list',
            title: 'Ejemplos de clase',
            items: [
              'Autonomía vs. vergüenza: a un niño de 2 años le pesa que le digan «le voy a decir a tu papá».',
              'Iniciativa vs. culpa: «¿lo hago o no lo hago? Si lo hago, me van a regañar».',
              'Laboriosidad vs. inferioridad: el niño aprende que el esfuerzo da resultados.',
              'Productividad vs. estancamiento: la «crisis de los 40», al evaluar lo logrado y el futuro.',
              'Integridad vs. desesperación: revisar la propia vida y afrontar la mortalidad; la virtud es la sabiduría.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-envejecimiento',
    title: 'Envejecimiento: construcción social y formas de envejecer',
    subtitle: 'Definición de vejez, pirámides poblacionales de México, teorías estocásticas y determinísticas, etapas de la vejez, cambios físicos y cognitivos, tipos y modelos de vejez, envejecimiento exitoso, saludable, activo, frágil y patológico, ageísmo y Plan de Madrid',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🧓',
    keyPoints: [
      'VEJEZ: proceso continuo, heterogéneo, universal e irreversible que determina una pérdida progresiva de la capacidad de adaptación. El envejecimiento es una CONSTRUCCIÓN SOCIAL ★',
      'Teorías ESTOCÁSTICAS (cambios al azar, modificados por el ambiente): genéticas, mutación genética, radicales libres, error catastrófico, uniones cruzadas, productos de desecho, inmunológicas · DETERMINÍSTICAS (solo dos): capacidad replicativa finita de la célula y evolutivas ★',
      'Tipos de envejecimiento: BIOLÓGICO, PSICOLÓGICO, SOCIAL y FUNCIONAL (mantener la independencia en la vida diaria) ★',
      'Modelo DEFICITARIO (enfermedad, improductividad, decadencia) vs. modelo de DESARROLLO (una etapa más, segunda etapa de libertad, tiempo de humanización) ★',
      'EXITOSO (Rowe: bajo riesgo de enfermar, alta actividad física y mental) · SALUDABLE (se construye mucho antes de los 60) · ACTIVO (OMS, 2002): optimizar las oportunidades de SALUD, PARTICIPACIÓN y SEGURIDAD ★',
      'AGEÍSMO (edadismo): prejuicio o discriminación por la edad.',
    ],
    sections: [
      {
        id: 'hen-1',
        number: 1,
        title: 'La vejez como construcción social',
        keyTerms: ['vejez', 'construcción social', 'pirámide poblacional', 'adultez tardía'],
        blocks: [
          {
            type: 'definition',
            title: 'Vejez',
            content: 'Proceso continuo, heterogéneo, universal e irreversible que determina una pérdida progresiva de la capacidad de adaptación. Es un fenómeno extremadamente variable, influido por factores del contexto genético, social e histórico, cargado de afectos y sentimientos que se construyen durante el ciclo vital y están permeados por la cultura y las tradiciones. Por eso no es claro precisar su inicio por la edad cronológica, y tiene mayor estructuración desde lo individual y lo social: el envejecimiento es una CONSTRUCCIÓN SOCIAL.',
          },
          {
            type: 'paragraph',
            content: 'Las pirámides de población de México lo ilustran. La de 1974 era una pirámide de base amplia; la de 2010 empezó a perder esa forma. Las proyecciones indican que en 2030 la mayor proporción de la población tendrá entre 20 y 60 años, y en 2050 entre 45 y 70, con menos niños por la baja de la natalidad. Cada vez menos personas en edad productiva sostendrán a más personas mayores: uno de los grandes retos económicos, familiares y de salud.',
          },
          {
            type: 'list',
            title: 'Aspectos importantes de la adultez tardía',
            items: [
              'REFLEXIÓN sobre la vida: evaluación de logros y experiencias.',
              'PÉRDIDA: afrontar la muerte de seres queridos y la propia mortalidad.',
              'SALUD: manejo de enfermedades y mantenimiento de la independencia.',
              'ACTIVIDADES SOCIALES: participación en grupos y actividades recreativas.',
            ],
          },
          {
            type: 'note',
            title: 'Los casos de clase',
            content: 'María (75 años, se recuperó de un infarto, hace ejercicio y tiene redes de apoyo), Lucy (70 años, vive en una residencia, se considera independiente y alegre) y Manuel (65 años, triste, apático y con una visión negativa de la vejez) muestran que la edad no basta para entender cómo se envejece. Se aclaró que los casos ilustran el tema y no se preguntan como tales.',
          },
          {
            type: 'correlacion',
            variant: 'historia',
            title: 'Prepararse para morir',
            content: 'En la Edad Media circulaban manuales del ars moriendi («el arte de morir») para preparar a las personas ante la muerte. Hoy esa preparación tiene forma clínica y legal: hablar en familia, planear los cuidados al final de la vida y, en México, dejar por escrito una voluntad anticipada.',
          },
        ],
      },
      {
        id: 'hen-2',
        number: 2,
        title: 'Teorías del envejecimiento',
        keyTerms: ['teorías estocásticas', 'teorías determinísticas', 'radicales libres', 'capacidad replicativa finita'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos grupos de teorías',
            left: {
              title: 'Estocásticas',
              items: [
                'Atribuyen los cambios a variaciones que se presentan en forma aleatoria (al azar) y se expresan con cálculos matemáticos',
                'Están modificadas por los factores ambientales que rodean al organismo',
                'Son muchas, y la mayoría tiene base genética',
              ],
            },
            right: {
              title: 'Determinísticas',
              items: [
                'Incorporan posturas que limitan las variables conocidas',
                'Pueden replicarse cada vez que se busca el fenómeno',
                'Solo hay dos',
              ],
            },
          },
          {
            type: 'table',
            title: 'Cuáles son',
            data: {
              headers: ['Estocásticas', 'Determinísticas'],
              rows: [
                ['Teorías genéticas (regulación génica, diferenciación terminal, inestabilidad genómica)', 'Teoría de la capacidad replicativa finita de la célula: el código genético programa cuándo la célula deja de dividirse'],
                ['Teoría de la mutación genética', 'Teorías evolutivas, que también se inspiran en la capacidad replicativa'],
                ['Teoría de los radicales libres', ''],
                ['Teoría del error catastrófico', ''],
                ['Teoría de las uniones cruzadas de estructuras celulares', ''],
                ['Teoría de la acumulación de productos de desecho', ''],
                ['Teorías inmunológicas', ''],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'El límite de Hayflick',
            content: 'En 1961 Leonard Hayflick observó que las células humanas normales en cultivo solo se dividen un número limitado de veces antes de detenerse. El acortamiento de los telómeros en cada división es uno de los mecanismos de ese límite: la base de la teoría de la capacidad replicativa finita.',
          },
        ],
      },
      {
        id: 'hen-3',
        number: 3,
        title: 'Etapas de la vejez y cambios asociados',
        keyTerms: ['prevejez', 'vejez temprana', 'vejez media', 'vejez tardía', 'cambios cognitivos'],
        blocks: [
          {
            type: 'list',
            title: 'Tres periodos de capacidad en la vejez (OMS)',
            items: [
              'Un periodo de capacidad relativamente alta y estable.',
              'Un periodo de capacidad disminuida.',
              'Un periodo de pérdida significativa de la capacidad.',
            ],
          },
          {
            type: 'table',
            title: 'Etapas de la vejez',
            data: {
              headers: ['Etapa', 'Qué la caracteriza', 'Hacia dónde se orienta la atención'],
              rows: [
                ['1. Prevejez', 'Fase previa, no bien definida, con indicios de futuros cambios; suele iniciar tras la jubilación y exige reorientar la rutina', 'Adaptarse a nuevos hábitos y actividades'],
                ['2. Vejez temprana', 'Niveles altos y estables de capacidad física y mental', 'Mantener esas capacidades, vigilar factores de riesgo y controlar a tiempo las enfermedades'],
                ['3. Vejez media', 'Deterioro de las capacidades; es probable que aparezcan enfermedades', 'Minimizar el efecto de las enfermedades sobre la capacidad general'],
                ['4. Vejez tardía', 'Pérdidas significativas de la capacidad, o alta probabilidad de tenerlas', 'Cuidados a largo plazo que respeten derechos, libertades y dignidad'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Cambios físicos (no iguales para todos)',
            items: [
              'Disminución de la masa muscular, de la fuerza y de la función musculoesquelética.',
              'Disminución de la densidad ósea, con más riesgo de fracturas.',
              'Cambios del cartílago articular que aumentan la susceptibilidad de los tejidos.',
              'Empeoramiento de los sentidos, sobre todo la vista y el oído.',
            ],
          },
          {
            type: 'paragraph',
            content: 'Los cambios cognitivos incluyen fallos de memoria, menor velocidad de procesamiento y dificultad para atender varias tareas a la vez. Influyen la situación socioeconómica, las enfermedades crónicas, el uso de medicamentos y el estilo de vida; ayudan la actividad intelectual (psicopedagogía en la tercera edad) y la psicología geriátrica.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El círculo vicioso del miedo a caer',
            content: 'Por miedo a caerse, la persona mayor hace menos ejercicio; sin ejercicio pierde más masa muscular y equilibrio, y el riesgo de caída y fractura aumenta. Romper el círculo con actividad física adaptada y un hogar seguro (escaleras despejadas, buena luz) es parte del tratamiento.',
          },
        ],
      },
      {
        id: 'hen-4',
        number: 4,
        title: 'Tipos y modelos de vejez',
        keyTerms: ['envejecimiento biológico', 'envejecimiento funcional', 'modelo deficitario', 'modelo de desarrollo'],
        blocks: [
          {
            type: 'table',
            title: 'Tipos de envejecimiento (OMS)',
            data: {
              headers: ['Tipo', 'Qué abarca'],
              rows: [
                ['BIOLÓGICO', 'Cambios físicos del cuerpo: menor masa muscular y ósea, peor función sensorial, más riesgo de enfermedades crónicas'],
                ['PSICOLÓGICO', 'Cambios en la mente y las emociones: memoria, atención, estado de ánimo'],
                ['SOCIAL', 'Cambios en roles, relaciones y entorno: jubilación, muerte de familiares y amigos, menos actividades sociales'],
                ['FUNCIONAL', 'Capacidad de mantener la independencia y realizar las actividades de la vida diaria; depende de los otros tres y de la nutrición, el ejercicio y el acceso a la atención médica'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Modelos de vejez',
            left: {
              title: 'Modelo deficitario',
              items: ['Enfermedad', 'Vida sedentaria', 'Improductividad', 'Etapa de ruptura, de involución, vacía de contenido', 'Etapa de decadencia'],
            },
            right: {
              title: 'Modelo de desarrollo',
              items: ['Una etapa más de la vida', 'Desarrollo biográfico e histórico', 'Actividad', 'Encuentro con una segunda etapa de libertad', 'Un tiempo de humanización'],
            },
          },
        ],
      },
      {
        id: 'hen-5',
        number: 5,
        title: 'Formas de envejecer y niveles de cuidado',
        keyTerms: ['envejecimiento exitoso', 'envejecimiento saludable', 'envejecimiento activo', 'envejecimiento frágil', 'envejecimiento patológico'],
        blocks: [
          {
            type: 'table',
            title: 'Cinco formas de envejecer',
            data: {
              headers: ['Forma', 'Definición', 'Cuidados'],
              rows: [
                ['EXITOSO (Rowe)', 'Habilidad para mantenerse en bajo riesgo de enfermar, con alto nivel de actividad física y mental; buena salud, independencia y autonomía', 'Estilo de vida saludable, controles médicos regulares, apoyo emocional y social si se requiere'],
                ['SALUDABLE (OMS, 1998, según la presentación)', 'Etapa que comienza mucho antes de los 60 años; solo se logra con hábitos y estilos de vida saludables desde edades tempranas y prevención temprana de enfermedades y discapacidades', 'Educar para envejecer desde la juventud'],
                ['ACTIVO', 'Mantener la independencia y la participación en actividades significativas', 'Evaluar y seguir la capacidad funcional, ejercicio personalizado, adaptar el entorno, acceso a servicios de apoyo'],
                ['FRÁGIL', 'Mayor vulnerabilidad a la discapacidad y la dependencia; requiere cuidados más intensivos y personalizados', 'Evaluar y manejar riesgos, plan de atención individualizado, ayuda en actividades de la vida diaria, apoyo emocional y social'],
                ['PATOLÓGICO', 'Enfermedades o discapacidades que limitan significativamente la vida independiente; requiere cuidados especializados de alta intensidad', 'Atención médica y de enfermería especializada, terapia física y ocupacional, apoyo emocional y social en equipo'],
              ],
            },
          },
          {
            type: 'steps',
            title: 'Autocuidado: el «arcoíris de la atención»',
            steps: [
              'Autocuidado y autoatención de la propia persona mayor.',
              'Atención informal de familiares y cuidadores.',
              'Atención domiciliaria con personal especializado.',
              'Atención institucional especializada.',
            ],
          },
          {
            type: 'paragraph',
            content: 'El envejecimiento patológico se atiende en equipo: geriatría, enfermería geriátrica, licenciatura en gerontología, trabajo social, fisioterapia, terapia ocupacional y psicología, más otras especialidades (cardiología, neurología, traumatología, reumatología) según el caso.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'La definición actual de la OMS',
            content: 'En su Informe mundial sobre el envejecimiento y la salud (2015), la OMS define el envejecimiento saludable como el proceso de fomentar y mantener la capacidad funcional que permite el bienestar en la vejez. El foco ya no es la ausencia de enfermedad, sino lo que la persona puede hacer.',
          },
        ],
      },
      {
        id: 'hen-6',
        number: 6,
        title: 'Ageísmo, envejecimiento activo y Plan de Madrid',
        keyTerms: ['ageísmo', 'envejecimiento activo', 'Plan de Madrid', 'determinantes del envejecimiento activo'],
        blocks: [
          {
            type: 'definition',
            title: 'Ageísmo (edadismo)',
            content: 'Prejuicio o discriminación basada en la edad; por ejemplo, decidir que alguien debe dejar su trabajo o su cargo solo por ser mayor.',
          },
          {
            type: 'definition',
            title: 'Envejecimiento activo (OMS, 2002)',
            content: 'Proceso de optimización de las oportunidades de salud, participación y seguridad con el fin de mejorar la calidad de vida a medida que las personas envejecen. Permite realizar el potencial de bienestar físico, social y mental a lo largo de todo el ciclo de vida y participar en la sociedad según las necesidades, deseos y capacidades, con protección, seguridad y cuidados cuando se necesita asistencia. «Activo» se refiere a una participación continua en aspectos sociales, económicos, culturales, espirituales y cívicos, no solo a estar físicamente activo o seguir trabajando.',
          },
          {
            type: 'paragraph',
            content: 'En 2002, la II Asamblea Mundial sobre el Envejecimiento, celebrada en Madrid, adoptó el Plan de Acción Internacional de Madrid y asumió el concepto de envejecimiento activo propuesto por la OMS. Sus determinantes no dependen solo de la persona: también del entorno y de las políticas sociales y de salud.',
          },
          {
            type: 'table',
            title: 'Determinantes del envejecimiento activo',
            data: {
              headers: ['Determinante', 'Ejemplos'],
              rows: [
                ['Entorno físico', 'Ámbito urbano o rural, vivienda, prevención de lesiones'],
                ['Económicos', 'Ingresos, trabajo, protección social'],
                ['Conductuales', 'Actividad física, alimentación sana, dejar el tabaco, controlar problemas por alcohol, uso correcto de la medicación'],
                ['Sociales', 'Educación y alfabetización, derechos humanos, apoyo social, prevención de la violencia y el abuso del anciano'],
                ['Personales', 'Biología y genética, capacidad de adaptación'],
                ['Sanidad y servicios sociales', 'Promoción de la salud, prevención de enfermedades, atención primaria, cuidados a largo plazo'],
                ['Transversales', 'GÉNERO y CULTURA, que atraviesan a todos los demás'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Más allá del diagnóstico',
            content: 'El plan de atención de una persona mayor considera, además de sus enfermedades, su vivienda, sus apoyos, su economía, sus hábitos, su autonomía y su posibilidad de participar en la comunidad. Olvidar una dosis, por ejemplo, es un problema conductual que se resuelve con estrategias de adherencia, no con otro fármaco.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-cultura-concepto',
    title: 'La cultura: concepto, autores y cerebro',
    subtitle: 'Cómo se posibilita la cultura, evolución histórica del concepto, definiciones de Tylor, Boas y otros autores, rasgos de la cultura, cerebro y cultura, sistemas de herencia y modelo CNIS',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🎭',
    keyPoints: [
      'La pregunta no es «qué es» sino «cómo se POSIBILITA» la cultura: desde horizontes de comprensión filosófico, ANTROPOLÓGICO (el del curso), sociológico y psicológico. Todas las conductas generan cultura.',
      'TYLOR (1871): la cultura es «ese TODO COMPLEJO que incluye conocimientos, creencias, arte, moral, derecho, costumbres» y demás hábitos ADQUIRIDOS por el ser humano como miembro de una sociedad',
      'BOAS: totalidad de reacciones y actividades mentales y físicas del grupo y del individuo, en relación con el ambiente, con otros grupos, con su propio grupo y consigo mismo; defendió el RELATIVISMO CULTURAL',
      'La cultura es SIMBÓLICA, CONVENCIONAL, APRENDIDA, REPRODUCIDA SOCIALMENTE, ADAPTATIVA y DINÁMICA, con componentes ideológicos y de poder.',
      'Tres sistemas de herencia: GENÉTICA (plantillas moleculares), EPIGENÉTICA (estados regulatorios) y NEUROBIOLÓGICA CULTURAL (arquitecturas neuronales moldeadas por la experiencia)',
      'La transmisión cultural es VERTICAL (cuidado, apego, contexto compartido) y HORIZONTAL (pares, instituciones y rituales).',
    ],
    sections: [
      {
        id: 'hcu-1',
        number: 1,
        title: 'Cómo se posibilita la cultura',
        keyTerms: ['horizontes de comprensión', 'evolucionismo cultural', 'relativismo cultural'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La Unidad 2 busca identificar y relacionar el entorno cultural con la práctica médica. Su punto de partida no es definir la cultura, sino preguntar cómo se POSIBILITA: desde qué horizonte de comprensión se mira. El curso usa el horizonte ANTROPOLÓGICO. La idea central es que todas las conductas generan cultura.',
          },
          {
            type: 'list',
            title: 'Horizontes de comprensión',
            items: ['Filosófico.', 'Antropológico (el que se usa en el curso).', 'Sociológico.', 'Psicológico.'],
          },
          {
            type: 'table',
            title: 'Evolución histórica del concepto de cultura',
            data: {
              headers: ['Época', 'Idea de cultura', 'Referentes'],
              rows: [
                ['Antigüedad clásica (Roma)', 'Cultivo del espíritu', 'Cicerón'],
                ['Ilustración', 'Progreso y civilización', 'Ilustrados europeos'],
                ['Romanticismo', 'Espíritu del pueblo; diversidad', 'Herder'],
                ['Siglo XIX', 'Evolucionismo cultural', 'Tylor, Morgan'],
                ['Siglo XX', 'Relativismo y simbolismo; múltiples escuelas', 'Boas, Kroeber, Lévi-Strauss'],
                ['Actualidad', 'Concepto polisémico, global y dinámico', 'UNESCO y antropología contemporánea'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Toda expresión es cultura',
            content: 'La música clásica, la tambora, la banda sinaloense, el jazz, la bossa nova y el reguetón expresan realidades culturales concretas, guste o no cada una. El «espíritu del pueblo» del Romanticismo produce también estereotipos, como el charro presentado como «lo mexicano».',
          },
        ],
      },
      {
        id: 'hcu-2',
        number: 2,
        title: 'Tylor y Boas',
        keyTerms: ['todo complejo', 'relativismo cultural', 'Tylor', 'Boas'],
        blocks: [
          {
            type: 'definition',
            title: 'Edward B. Tylor (1871): la definición clásica',
            content: '«La cultura o civilización, en sentido etnográfico amplio, es ese TODO COMPLEJO que incluye el conocimiento, las creencias, el arte, la moral, el derecho, las costumbres y cualesquiera otros hábitos y capacidades ADQUIRIDOS por el hombre en cuanto MIEMBRO DE UNA SOCIEDAD».',
          },
          {
            type: 'paragraph',
            content: 'Tylor usa «cultura» como sinónimo de «civilización». Esa equivalencia tuvo un lado oscuro: los pueblos considerados «incivilizados» quedaban como pueblos «sin cultura», y esa idea se usó para justificar la esclavitud. La cultura tampoco se reduce al folclor (la danza del venado o la de los viejitos son solo una parte).',
          },
          {
            type: 'definition',
            title: 'Franz Boas: la cultura como totalidad',
            content: 'Totalidad de las reacciones y actividades mentales y físicas que caracterizan la conducta de los individuos de un grupo social, colectiva e individualmente, en relación con su AMBIENTE NATURAL, con OTROS GRUPOS, con MIEMBROS DEL MISMO GRUPO y de CADA INDIVIDUO HACIA SÍ MISMO. Incluye también los productos de esas actividades.',
          },
          {
            type: 'list',
            title: 'Lo que aporta Boas',
            items: [
              'Cada persona genera cultura también para sí misma, y cada familia genera la suya.',
              'La cultura incluye la relación hombre-naturaleza: alimento, refugio, utensilios, clima (la ropa gruesa de Toluca frente a la ropa ligera de Acapulco).',
              'RELATIVISMO CULTURAL: cada cultura se entiende en su propio contexto, no con la lente de otra.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Relativismo en el hospital',
            content: 'Juzgar la cultura de enfermería desde la cultura médica, o al revés, produce interpretaciones erróneas. Lo mismo ocurre con el paciente: sus decisiones se entienden desde su contexto, no desde el del médico.',
          },
        ],
      },
      {
        id: 'hcu-3',
        number: 3,
        title: 'Otras definiciones y síntesis',
        keyTerms: ['funcionalismo', 'modelos culturales', 'red de símbolos', 'materialismo cultural', 'enfermería transcultural'],
        blocks: [
          {
            type: 'table',
            title: 'Autores y su idea de cultura',
            data: {
              headers: ['Autor', 'Idea clave'],
              rows: [
                ['Bronislaw Malinowski', 'Conjunto integral material, social y simbólico para satisfacer NECESIDADES básicas y derivadas; base del FUNCIONALISMO'],
                ['Ruth Benedict', 'Configuración coherente de comportamientos: MODELOS CULTURALES («Patterns of Culture», 1934)'],
                ['Robert Lowie', 'SUMA TOTAL de lo que el individuo adquiere de su sociedad; legado del pasado transmitido por educación formal e informal'],
                ['Ralph Linton', 'Conocimientos, actitudes y PATRONES CONDUCTUALES compartidos y transmitidos'],
                ['Alfred Radcliffe-Brown', 'RELACIONES SOCIALES RECURRENTES que forman la ESTRUCTURA SOCIAL; la cultura se adapta para mantener la coherencia del sistema'],
                ['Raymond Firth', 'El SIGNIFICADO como eje central, con un elemento moral'],
                ['Ernst Cassirer', 'SISTEMA SIMBÓLICO: el ser humano pasa de «animal racional» a «ANIMAL SIMBÓLICO»'],
                ['Kroeber y Kluckhohn (1952)', 'PATRONES EXPLÍCITOS E IMPLÍCITOS transmitidos mediante símbolos; su núcleo son las IDEAS TRADICIONALES y sus VALORES'],
                ['Claude Lévi-Strauss', 'Sistema de signos y símbolos que revela PATRONES UNIVERSALES del pensamiento'],
                ['Clifford Geertz (1973)', 'SIGNIFICADOS COMPARTIDOS: la cultura es una RED DE SÍMBOLOS que funciona como un TEXTO que se lee e interpreta'],
                ['Raymond Williams', 'Proceso integral, dinámico y plural, material y simbólico: «ESTRUCTURAS DEL SENTIR»'],
                ['Madeleine Leininger', 'Conocimiento aprendido y transmitido que guía a un grupo de forma pautada: ENFERMERÍA TRANSCULTURAL'],
                ['Marvin Harris', 'SISTEMA ADAPTATIVO a las condiciones materiales y ecológicas: MATERIALISMO CULTURAL'],
                ['Stuart Hall', 'Campo dinámico de SIGNIFICADOS, IDENTIDAD y PODER: negociación, conflicto y resistencia'],
                ['Cecil Helman', 'Pautas explícitas e implícitas HEREDADAS para ver el mundo, vivirlo emocionalmente y relacionarse con otros, con lo sobrenatural y con la naturaleza'],
                ['Ángel Díaz de Rada', 'REGLAS CONVENCIONALES con las que las personas dan forma a su acción social'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Ejemplos para fijar a los autores',
            items: [
              'Malinowski: el Día de Muertos, patrimonio cultural inmaterial de la humanidad (UNESCO).',
              'Benedict: el Día de Muertos es un modelo cultural propio; Halloween es otro que se ha ido filtrando, un proceso de interculturalidad.',
              'Linton: las familias obesogénicas comparten un patrón conductual.',
              'Radcliffe-Brown: el sistema de salud es una expresión cultural de la estructura social.',
              'Geertz: sin una perspectiva cultural compartida hay ruptura en la comunicación, también entre médico y paciente.',
              'Williams: la respuesta a «¿cómo me siento?» es cultural.',
            ],
          },
          {
            type: 'definition',
            title: 'Síntesis: qué es la cultura',
            content: 'Un proceso SIMBÓLICO, CONVENCIONAL, APRENDIDO, REPRODUCIDO SOCIALMENTE, ADAPTATIVO y DINÁMICO, con componentes IDEOLÓGICOS y DE PODER.',
          },
          {
            type: 'comparison',
            title: 'Lectura estructural-funcional',
            left: { title: 'Estructura', items: ['Patrón estable de relaciones sociales'] },
            right: { title: 'Función', items: ['Lo que aporta cada práctica a la estabilidad del sistema'] },
          },
          {
            type: 'paragraph',
            content: 'Desde esta lectura, las expresiones culturales solo se entienden dentro de su estructura y su función: se analizan por su papel en el orden social, no por su utilidad individual.',
          },
        ],
      },
      {
        id: 'hcu-4',
        number: 4,
        title: 'Cerebro y cultura',
        keyTerms: ['WEIRD', 'sesgo etnocéntrico', 'herencia neurobiológica cultural', 'CNIS', 'engrama'],
        blocks: [
          {
            type: 'table',
            title: 'Humano anatómicamente moderno frente a neandertal',
            data: {
              headers: ['Homo sapiens', 'Neandertal'],
              rows: [
                ['Desarrollo ontogenético LENTO', 'Desarrollo más acelerado'],
                ['ALTRICIALIDAD extrema: la cría depende mucho tiempo de sus cuidadores', 'Altricialidad menos acentuada'],
                ['NEUROPLASTICIDAD intensa y PERIODO CRÍTICO largo', 'Neuroplasticidad más relajada y periodo crítico más corto'],
                ['Comportamiento flexible y permeable al ambiente', 'Comportamiento menos maleable'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'Ambos tenían un cerebro de alto costo metabólico y lateralizado, y los neandertales ya producían cultura (por ejemplo, el culto a los muertos). Lo que distingue al Homo sapiens es una infancia larga y un cerebro muy moldeable por el ambiente: la cultura se inscribe en él.',
          },
          {
            type: 'comparison',
            title: 'Dos enfoques de la neurociencia',
            left: {
              title: 'Tradicional',
              items: [
                'Asume principios cerebrales universales',
                'Estudia sobre todo poblaciones WEIRD (occidentales, educadas, industrializadas, ricas y democráticas)',
                'Sobregeneraliza; riesgo de SESGO ETNOCÉNTRICO',
              ],
            },
            right: {
              title: 'Culturalmente sensible',
              items: [
                'Interacción bidireccional cerebro-cultura',
                'Diversifica las poblaciones estudiadas',
                'Interpreta los hallazgos en su contexto; intervenciones culturalmente relevantes',
              ],
            },
          },
          {
            type: 'table',
            title: 'Tres sistemas de herencia',
            data: {
              headers: ['Sistema', 'Qué se transmite'],
              rows: [
                ['Genético', 'Plantillas moleculares'],
                ['Epigenético', 'Estados regulatorios'],
                ['Neurobiológico cultural', 'Arquitecturas neuronales funcionales moldeadas por la experiencia'],
              ],
            },
          },
          {
            type: 'steps',
            title: 'Modelo CNIS (sistemas de herencia neurobiológica cultural): cuatro procesos',
            steps: [
              'Neuroplasticidad dependiente y esperada de la experiencia: las experiencias culturales y emocionales forman ENGRAMAS en la corteza prefrontal y en los sistemas hipocampo-corticales.',
              'Estabilización: las redes se consolidan, junto con ajustes neuromoduladores y del eje hipotálamo-hipófisis-suprarrenal, en estados estables que funcionan como conocimientos previos predictivos («priors»).',
              'Transmisión VERTICAL (cuidado, apego, contexto compartido) y HORIZONTAL (pares, instituciones y rituales que sincronizan patrones neuronales).',
              'Retroalimentación y reconsolidación: la actualización continua da flexibilidad y a la vez conserva los patrones heredados.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué cuesta cambiar hábitos',
            content: 'Los hábitos de alimentación, actividad o consumo se aprenden desde la infancia y quedan consolidados en redes neuronales. Por eso cambiar el estilo de vida a los 60 años es difícil: no basta con informar al paciente; ayuda apoyarse en su familia, su comunidad y sus rituales, que son los canales por los que esos patrones se transmiten.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-cultura-salud-orden',
    title: 'Cultura, salud y orden cultural',
    subtitle: 'Cultura y atención médica (caso de la circuncisión «Sunna»), la cultura como sistema ideacional, niveles de análisis de Rojas Soriano, modelos biomédico, biopsicosocial e intercultural, hipótesis Gaia, los tres órdenes de Viniegra y medicina supresora frente a estimulante',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🌎',
    keyPoints: [
      'La cultura, como entramado de significados y cosmovisiones, se expresa en el cuidado, la enfermedad, la curación y la muerte: es elemento central del proceso SALUD-ENFERMEDAD-ATENCIÓN.',
      'Para analizar la relación cultura-enfermedad-medicina, la cultura se entiende como SISTEMA IDEACIONAL: ideas, conceptos, reglas y significados compartidos; lo que los sujetos APRENDEN.',
      'Niveles de análisis de RAÚL ROJAS SORIANO: 1) unicausal y biomédico; 2) multicausal (historia natural de la enfermedad, Leavell y Clark); 3) BIOPSICOSOCIAL Y CULTURAL (historia natural y sociocultural del proceso salud-enfermedad)',
      'En el modelo intercultural el paciente es ALTERIDAD, el médico necesita COMPETENCIA CULTURAL y la relación médico-paciente es ESENCIAL; la causalidad incluye el INDETERMINISMO CULTURAL.',
      'VINIEGRA: órdenes físico-químico, biológico y cultural; el orden cultural pasa por los momentos EGOCÉNTRICO, ETNOCÉNTRICO y ANTROPOCÉNTRICO',
      'Medicina SUPRESORA (enfermedad como anomalía ajena; lucro, mercantilización, medicalización) frente a ESTIMULANTE (trastorno de la armonía interior; atiende pacientes, no enfermedades; vis medicatrix naturae)',
    ],
    sections: [
      {
        id: 'hcs-1',
        number: 1,
        title: 'Cultura y atención médica: un caso',
        keyTerms: ['mutilación genital femenina', 'Declaración de Budapest', 'comité de ética en investigación'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Una antropóloga que trabaja para el DIF con una comunidad de inmigrantes nigerianos musulmanes en una zona rural de Quintana Roo busca integrarla a la sociedad mexicana sin que pierda su cultura islámica. La comunidad practica la circuncisión «Sunna», conocida en Occidente como MUTILACIÓN GENITAL FEMENINA: la extirpación, por lo general violenta, del clítoris.',
          },
          {
            type: 'paragraph',
            content: 'La Asociación Médica Mundial condenó esta práctica en la Declaración de Budapest (1993), igual que la participación de médicos en ella; la OMS también la condena. Tras negociar con el líder religioso se propone un ritual modificado en un hospital del IMSS: una incisión menor con anestesia local, sin extirpación, mientras el líder realiza el rito religioso. Después, la antropóloga quiere convertir la experiencia en su tesis doctoral.',
          },
          {
            type: 'note',
            title: 'Práctica o investigación',
            content: 'Una investigación se diseña primero, la aprueba el comité de ética en investigación y solo después se realiza. Convertir en investigación una práctica ya hecha es mala práctica. El caso muestra, además, que los procesos culturales y la atención a la salud están vinculados: hay que conocer y respetar las creencias de pacientes y comunidades.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Lo que dice la OMS',
            content: 'La OMS clasifica la mutilación genital femenina como una violación de los derechos humanos de niñas y mujeres, sin ningún beneficio para la salud; causa dolor, hemorragia, infecciones, problemas urinarios y complicaciones en el parto. Se opone también a su «medicalización», es decir, a que la realice personal de salud.',
          },
        ],
      },
      {
        id: 'hcs-2',
        number: 2,
        title: 'Niveles de análisis cultura-salud-enfermedad-atención',
        keyTerms: ['sistema ideacional', 'interculturalidad en salud', 'Rojas Soriano', 'Leavell y Clark', 'indeterminismo cultural'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La cultura, como entramado de significados y cosmovisiones (matriz epistémica), se expresa en las prácticas de cuidado, enfermedad, curación y muerte; por eso es un elemento central del proceso salud-enfermedad-atención. Las sociedades actuales son MULTICULTURALES: en un mismo territorio conviven distintas formas de concebir la salud y distintas prácticas curativas. El ENFOQUE INTERCULTURAL EN SALUD propone un diálogo horizontal entre ellas y el respeto a las medicinas tradicionales y complementarias.',
          },
          {
            type: 'definition',
            title: 'La cultura como sistema ideacional',
            content: 'Para analizar la relación triádica cultura-enfermedad-medicina, la cultura se entiende como un sistema de ideas compartidas, articuladas en conceptos, reglas y significados. Se refiere a lo que los sujetos APRENDEN, no solo a lo que hacen y fabrican.',
          },
          {
            type: 'steps',
            title: 'Los tres niveles de análisis (Raúl Rojas Soriano)',
            steps: [
              'Primer nivel: modelo UNICAUSAL y BIOMÉDICO.',
              'Segundo nivel: modelo MULTICAUSAL, asociado a la HISTORIA NATURAL DE LA ENFERMEDAD de Leavell y Clark y sus niveles de prevención.',
              'Tercer nivel: modelo BIOPSICOSOCIAL Y CULTURAL: amplía a Leavell y Clark hacia la historia natural Y SOCIOCULTURAL del PROCESO SALUD-ENFERMEDAD, no solo de la enfermedad.',
            ],
          },
          {
            type: 'table',
            title: 'Tres modelos comparados',
            data: {
              headers: ['Dimensión', 'Biomédico', 'Biopsicosocial', 'Biopsicosocial y cultural (intercultural)'],
              rows: [
                ['Enfermedad', 'Exclusivamente biológica', 'Integración biológica, psicológica y social', 'Biológica, psicológica, social y espiritual, en un contexto cultural'],
                ['Causalidad', 'Lineal', 'Circular, multicausal', 'Circular, multicausal, con INDETERMINISMO CULTURAL'],
                ['Paciente', 'Receptor pasivo', 'Participante activo', 'ALTERIDAD y diversidad cultural'],
                ['Médico', 'Técnico observador', 'Profesional participante y empático', 'COMPETENCIA CULTURAL'],
                ['Relación médico-paciente', 'Secundaria', 'Fundamental y terapéutica', 'ESENCIAL, culturalmente empática y contextual'],
                ['Ser humano', 'Organismo biológico', 'Persona integral con contexto social', 'Unidad bio-psico-social-espiritual culturalmente determinada'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Indeterminismo cultural',
            content: 'Dos pacientes con hipertensión pueden recibir el mismo fármaco, pero lo que comen, cómo entienden su enfermedad y si toman o no el tratamiento dependen de su contexto cultural. Las recomendaciones, y en la práctica la efectividad del tratamiento, cambian de uno a otro.',
          },
        ],
      },
      {
        id: 'hcs-3',
        number: 3,
        title: 'El orden cultural según Viniegra',
        keyTerms: ['hipótesis Gaia', 'Antropoceno', 'orden cultural', 'egocéntrico', 'etnocéntrico', 'antropocéntrico'],
        blocks: [
          {
            type: 'definition',
            title: 'Hipótesis Gaia',
            content: 'Propuesta por James Lovelock y Lynn Margulis en los años setenta: la Tierra funciona como un sistema AUTORREGULADO, una especie de superorganismo en el que suelo, agua, atmósfera y seres vivos interactúan para mantener las condiciones de la vida. Se emparenta con el enfoque actual de «Una sola salud» (One Health), que une la salud humana, animal y ambiental.',
          },
          {
            type: 'paragraph',
            content: 'El ANTROPOCENO designa la época en que la acción humana transforma y daña el planeta, ubicada aproximadamente desde 1950. No es una época geológica oficial: en 2024 la Unión Internacional de Ciencias Geológicas rechazó formalizarla, aunque el término se usa ampliamente.',
          },
          {
            type: 'paragraph',
            content: 'Leonardo Viniegra Velázquez («El orden cultural, la enfermedad y el cuidado de la salud», Boletín Médico del Hospital Infantil de México, 2017) separa, para poder analizarla, la vida entendida de forma holista en tres órdenes.',
          },
          {
            type: 'table',
            title: 'Los tres órdenes',
            data: {
              headers: ['Orden', 'Contenido'],
              rows: [
                ['Físico-químico', 'La materia y la energía; el origen de la vida'],
                ['Biológico', 'De la biosfera a las partículas subatómicas, con la persona al centro'],
                ['Cultural', 'Tres momentos: EGOCÉNTRICO (me preocupo por mí: alimento, refugio, vestido), ETNOCÉNTRICO (me preocupo por mi comunidad: familia, clan) y ANTROPOCÉNTRICO (me preocupo por el ser humano en su totalidad)'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Orden cultural y poder',
            left: {
              title: 'Lo que organiza el orden cultural',
              items: [
                'Preservación de la integridad y protección contra la intemperie',
                'Sexualidad, reproducción y crianza',
                'Alimentación: el paso «de lo crudo a lo cocido»',
                'Convivencia, comunicación, educación, autonomía, vida digna, diversión y ocio',
              ],
            },
            right: {
              title: 'Cómo aparece el poder',
              items: [
                'Campos de acción social con tendencias que interactúan',
                'Intereses de grupos: cosmovisiones, creencias, valores, derechos, riquezas, oficios',
                'Conflictos de intereses entre grupos',
                'Origen en una relación desigual',
              ],
            },
          },
        ],
      },
      {
        id: 'hcs-4',
        number: 4,
        title: 'Medicina supresora y medicina estimulante',
        keyTerms: ['medicina supresora', 'medicina estimulante', 'medicalización', 'vis medicatrix naturae', 'bien vivir'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos visiones de la enfermedad',
            left: {
              title: 'Extrínseca o exógena',
              items: ['Anomalía extraña o adversidad ajena a la naturaleza humana', 'Termina tratándose como una entidad autónoma del organismo'],
            },
            right: {
              title: 'Intrínseca o endógena',
              items: ['Trastorno de la armonía interna o del flujo de energía vital'],
            },
          },
          {
            type: 'paragraph',
            content: 'En el campo de la salud, el orden cultural también obliga a esclarecer qué es una vida digna, grata, plena o serena (el «bien vivir») y advierte sobre la MEDICALIZACIÓN de la vida: convertir procesos vitales en asuntos médicos.',
          },
          {
            type: 'table',
            title: 'Supresora frente a estimulante',
            data: {
              headers: ['Medicina supresora', 'Medicina estimulante'],
              rows: [
                ['Enfermedad como anomalía extraña o adversidad ajena', 'Enfermedad como trastorno de la armonía interior'],
                ['Intereses de lucro; mercantilización de la vida', 'Humanismo médico'],
                ['«Deshumanización» de la medicina', 'Atiende pacientes, no enfermedades'],
                ['Medicalización que controla mentes y cuerpos infundiendo temor', 'Tratamiento según la particularidad del paciente: VIS MEDICATRIX NATURAE (la fuerza curativa de la naturaleza, desde Hipócrates)'],
                ['Ejemplo: la medicina occidental', 'Ejemplos: homeopatía, psicoterapia, acupuntura, hipnosis (medicinas alternativas y complementarias)'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Coexisten',
            content: 'Viniegra no afirma que una sea mejor: señala que ambas coexisten. Hace un paralelo con la educación: el aprendizaje PASIVO consume información; el ACTIVO la elabora y genera ideas nuevas.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Clasificar no es validar',
            content: 'La clasificación de Viniegra describe dos maneras de entender la enfermedad, no la eficacia de cada práctica. La psicoterapia, por ejemplo, tiene evidencia sólida en varios trastornos; la homeopatía, en cambio, no ha mostrado efectos superiores al placebo en las revisiones sistemáticas. Al decidir un tratamiento, el respeto por la cultura del paciente convive con la evidencia.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-indicadores-interculturalidad',
    title: 'Indicadores del proceso salud-enfermedad e interculturalidad',
    subtitle: 'Siete tipos de indicadores para caracterizar la relación cultura-enfermedad-atención, curso de vida, indicadores negativos y positivos; iceberg cultural, definición y principios de la interculturalidad, flor de la identidad e interculturalidad en salud',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🧊',
    keyPoints: [
      'Siete tipos de indicadores: NIVEL DE VIDA (ONU y OCDE), SALUD, RECURSOS Y ACTIVIDADES PARA LA SALUD, ECONÓMICO-SOCIALES, POSITIVOS del nivel de salud, FUNCIONAMIENTO INTERNO DE LA FAMILIA y RENDIMIENTO SOCIAL',
      'Los indicadores de salud clásicos (esperanza de vida, mortalidad general e infantil) son NEGATIVOS: miden enfermedad y muerte. Los POSITIVOS miden salud, como días trabajados o asistencia escolar.',
      'Los indicadores deben diferenciarse por etapa del CURSO DE VIDA; los cambios en el ambiente pueden bajar el umbral de discapacidad.',
      'ICEBERG CULTURAL: cultura SUPERFICIAL (lo visible), BAJO LA SUPERFICIE (reglas tácitas, formas de pensar) y PROFUNDA (reglas inconscientes, formas de sentir)',
      'INTERCULTURALIDAD: proceso de convivencia abierta, horizontal, incluyente, respetuosa y sinérgica entre personas, grupos e instituciones culturalmente diversos',
      'Cuatro principios: RECONOCIMIENTO de la diversidad, RESPETO a las diferencias, RELACIONES EQUITATIVAS y ENRIQUECIMIENTO MUTUO',
    ],
    sections: [
      {
        id: 'hii-1',
        number: 1,
        title: 'Indicadores y curso de vida',
        keyTerms: ['indicadores', 'curso de vida', 'capacidad funcional', 'umbral de discapacidad'],
        blocks: [
          {
            type: 'list',
            title: 'Siete tipos de indicadores de la relación cultura-enfermedad-atención',
            items: [
              'Nivel de vida (ONU y OCDE).',
              'Salud.',
              'Recursos y actividades para la salud.',
              'Económico-sociales.',
              'Positivos del nivel de salud.',
              'Funcionamiento interno de la familia.',
              'Rendimiento social.',
            ],
          },
          {
            type: 'paragraph',
            content: 'La economía de la salud reúne los cuidados de la salud, la industria de la salud y los servicios de soporte; para este análisis interesan sobre todo los cuidados. Los indicadores sirven como una «radiografía» de la cultura y la salud de una región, más allá del folclor.',
          },
          {
            type: 'table',
            title: 'Capacidad funcional a lo largo del curso de vida',
            data: {
              headers: ['Etapa', 'Objetivo'],
              rows: [
                ['Infancia y juventud', 'Crecimiento y desarrollo'],
                ['Vida adulta', 'Mantener el nivel máximo de funcionalidad'],
                ['Adulto mayor', 'Mantener la independencia y prevenir la discapacidad'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'Existe un UMBRAL DE DISCAPACIDAD, y los cambios en el ambiente pueden bajarlo: una rampa, un transporte accesible o una red de apoyo hacen que la misma capacidad funcional alcance para vivir con independencia. Por eso los indicadores deben diferenciarse por etapa del curso de vida.',
          },
        ],
      },
      {
        id: 'hii-2',
        number: 2,
        title: 'Qué mide cada grupo de indicadores',
        keyTerms: ['indicadores negativos', 'indicadores positivos', 'nivel de vida', 'rendimiento social'],
        blocks: [
          {
            type: 'comparison',
            title: 'Nivel de vida',
            left: {
              title: 'ONU',
              items: ['Salud y condiciones demográficas', 'Alimentación y nutrición', 'Educación y alfabetización', 'Trabajo y empleo', 'Consumo y ahorro', 'Transporte, vivienda y vestido', 'Recreación, seguridad social y libertades humanas'],
            },
            right: {
              title: 'OCDE',
              items: ['Enseñanza como oportunidad de autorrealización', 'Salud: riesgo de enfermar y repercusión en el bienestar', 'Empleo y satisfacción laboral', 'Tiempo libre', 'Situación del consumidor', 'Medio ambiente: vivienda y contaminación', 'Seguridad, justicia, posición social y desigualdades'],
            },
          },
          {
            type: 'table',
            title: 'Los demás grupos',
            data: {
              headers: ['Grupo', 'Ejemplos'],
              rows: [
                ['De salud (NEGATIVOS: miden enfermedad y muerte)', 'Esperanza de vida al nacer, tasa de mortalidad general, tasa de mortalidad infantil, razón de mortalidad proporcional'],
                ['Recursos y actividades para la salud (capacidad potencial de dar servicios)', 'Agua potable y alcantarillado, gasto en salud por habitante, camas por 1 000 habitantes, habitantes por médico, partos con asistencia médica, consultas prenatales, niños vacunados'],
                ['Económico-sociales', 'PIB por habitante, población económicamente activa, población urbana y rural, natalidad, analfabetismo, escolaridad, proteínas y calorías por habitante, habitantes por cuarto'],
                ['POSITIVOS del nivel de salud (miden salud y capacidad productiva)', 'Días trabajados frente a días hábiles, incapacidades temporales o permanentes, asistencia escolar de menores de 15 años, desempleo y subempleo'],
                ['Funcionamiento interno de la familia', 'Divorcio y separación, aborto, madres trabajadoras con hijos preescolares, familias monoparentales, ancianos que reciben servicios, personas que viven solas'],
                ['Rendimiento social', 'Porcentaje con aptitud física e intelectual normal, menores con crecimiento normal, adultos con peso óptimo para su estatura'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Dónde buscar los datos de una región',
            content: 'Para caracterizar la salud de una región sirven el Tablero de Indicadores de Salud de México de FUNSALUD, el INEGI (censos, natalidad, mortalidad) y la Secretaría de Salud. Comparar indicadores negativos (mortalidad) con positivos (asistencia escolar, días trabajados) da una imagen más completa que cualquiera de los dos por separado.',
          },
        ],
      },
      {
        id: 'hii-3',
        number: 3,
        title: 'El iceberg cultural',
        keyTerms: ['iceberg cultural', 'cultura superficial', 'cultura profunda', 'árbol intercultural'],
        blocks: [
          {
            type: 'table',
            title: 'Tres niveles de la cultura',
            data: {
              headers: ['Nivel', 'Qué es', 'Ejemplos'],
              rows: [
                ['Superficial o manifiesta (lo visible)', 'Hechos que se reconocen FÁCILMENTE', 'Comida, banderas, festividades, moda, música, bailes, juegos'],
                ['Bajo la superficie', 'REGLAS TÁCITAS y formas de PENSAR; toma tiempo reconocerlas', 'Estilos de comunicación: gestos, contacto visual, espacio personal, tono de voz, manejo de las emociones'],
                ['Profunda', 'REGLAS INCONSCIENTES y formas de SENTIR; solo se reconocen al familiarizarse con la cultura', 'Cortesía y amistad; actitudes hacia la muerte, el trabajo y la autoridad; nociones de individualidad, tiempo, pasado y futuro; religión, matrimonio y crianza'],
              ],
            },
          },
          {
            type: 'paragraph',
            content: 'El ÁRBOL INTERCULTURAL resume la misma idea: sus raíces son la cultura, la identidad, las actitudes, las creencias, los valores, el lenguaje y el comportamiento no verbal; su tronco, la diversidad cultural sustentada en los derechos humanos; sus frutos, la responsabilidad, la resiliencia, la competencia comunicativa, la convivencia y la reflexividad.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Llegar a la cultura profunda del paciente',
            content: 'Decir que alguien «ya me conoce» significa que entró a la cultura profunda. Con el paciente pasa lo mismo: lo que piensa sobre la muerte, la autoridad del médico o la familia no se ve en la primera consulta; se descubre preguntando e interactuando con él y con su comunidad.',
          },
        ],
      },
      {
        id: 'hii-4',
        number: 4,
        title: 'Interculturalidad',
        keyTerms: ['interculturalidad', 'principios de la interculturalidad', 'flor de la identidad', 'interculturalidad en salud'],
        blocks: [
          {
            type: 'definition',
            title: 'Interculturalidad',
            content: 'PROCESO DE CONVIVENCIA en el que personas, grupos e instituciones con características culturales y posiciones diversas conviven y se relacionan de manera ABIERTA, HORIZONTAL, INCLUYENTE, RESPETUOSA y SINÉRGICA en un contexto compartido. En ella subyace el reconocimiento del otro como ser digno de ejercer todos sus derechos, y la diversidad se valora como riqueza.',
          },
          {
            type: 'steps',
            title: 'Cuatro principios básicos',
            steps: ['Reconocimiento de la diversidad.', 'Respeto a las diferencias.', 'Relaciones equitativas.', 'Enriquecimiento mutuo.'],
          },
          {
            type: 'paragraph',
            content: 'La FLOR DE LA IDENTIDAD CULTURAL es una herramienta para explorar las dimensiones de la identidad personal y colectiva: etnia, género, clase, tipo de familia, barrio, región rural o urbana, aficiones, nacionalidad, estado civil, enfermedades o discapacidades, profesión, religión, constitución física, edad, estudios e idioma.',
          },
          {
            type: 'definition',
            title: 'Interculturalidad en salud',
            content: 'Enfoque que promueve, dentro de los servicios de salud, una interacción respetuosa, horizontal y sin jerarquías entre culturas, con dignidad, derechos humanos y reconocimiento de la diversidad. Integra saberes, prácticas y valores, sobre todo en la atención de población indígena o multicultural.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El hospital como espacio intercultural',
            content: 'En un hospital conviven la cultura médica, la de enfermería, la del personal de apoyo y la de cada paciente. Aplicar los cuatro principios significa, por ejemplo, preguntar al paciente cómo explica su enfermedad, negociar el plan de tratamiento en lugar de imponerlo y aceptar prácticas tradicionales que no le causen daño.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-salud-concepto',
    title: 'El concepto de salud',
    subtitle: 'Qué es frente a cómo se posibilita la salud; experiencia hermenéutica y sentido originario (Gadamer); una sola salud; evolución histórica del concepto, de Alcmeón a la OMS, Terris y San Martín; visión normativa y neutralista; estilos de vida; contextos ideal y de uso',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🌱',
    keyPoints: [
      'La pregunta del curso no es «qué es la salud» (una definición) sino «cómo se POSIBILITA la salud»; lo mismo vale para la enfermedad, la muerte y el acto médico.',
      'GADAMER: la salud está en un ESTADO OCULTO; solo nos damos cuenta de ella cuando la perdemos. Su sentido originario es un modo de ser y existir en el mundo, el «olvido de uno mismo».',
      'UNA SOLA SALUD (One Health) integra la salud humana, la animal y la ambiental ★',
      'MILTON TERRIS: la salud tiene grados y dos polos: OBJETIVO (capacidad de funcionamiento) y SUBJETIVO (sensación de bienestar) ★',
      'Visión NORMATIVA: salud y enfermedad están cargadas de valoración · Visión NEUTRALISTA: son una cuestión científico-empírica, sin juicios de valor ★',
      'CONTEXTO IDEAL de la salud: utópico, filosófico-antropológico, económico-político y sociológico · CONTEXTO DE USO: económico-político, de los pacientes, médico-asistencial y sociológico ★',
    ],
    sections: [
      {
        id: 'hsa-1',
        number: 1,
        title: 'La pregunta correcta y un caso ético',
        keyTerms: ['posibilitación', 'autonomía', 'veracidad', 'escala de valores'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos preguntas distintas',
            left: { title: '¿Qué es la salud?', items: ['Pide una DEFINICIÓN: «la salud es…»'] },
            right: { title: '¿Cómo se posibilita la salud?', items: ['Pregunta cómo se hace posible', 'La salud es una experiencia humana que cada quien interpreta según su momento de vida'] },
          },
          {
            type: 'paragraph',
            content: 'La misma distinción se aplica a la enfermedad, la muerte y el acto médico, y aparece en el examen: distinguir la definición de la posibilitación.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El paciente que asiente pero no quiere',
            content: 'Un joven indígena de 25 años con osteosarcoma de la pierna y metástasis pulmonares tiene indicada una amputación para prolongar su vida. Su padre, jefe de la comunidad, la acepta y el joven asiente; en privado le dice al cirujano que no la quiere, porque no desea vivir con discapacidad. La decisión es del paciente, que es adulto y autónomo; el médico no puede mentirle a la familia («hubo problemas médicos») porque le debe veracidad, y necesita conocer la escala de valores del paciente, que es parte de su cultura.',
          },
        ],
      },
      {
        id: 'hsa-2',
        number: 2,
        title: 'La experiencia de la salud',
        keyTerms: ['ser-sano', 'estar-sano', 'saberse-sano', 'estado oculto de la salud', 'Gadamer', 'praxis'],
        blocks: [
          {
            type: 'table',
            title: 'Tres dimensiones de la experiencia hermenéutica de la salud',
            data: {
              headers: ['Dimensión', 'Qué expresa'],
              rows: [
                ['Ser-sano', '«Lo que se muestra en sí misma»: el estado vivido'],
                ['Estar-sano', '«Esto que así se muestra en sí misma»: la conducta que se ve, con días buenos y días malos'],
                ['Saberse-sano', '«Estar en lo que se muestra en sí misma»: un proceso metacognitivo; una persona con diabetes controlada puede saberse sana'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Estado oculto de la salud (Gadamer)',
            content: 'Nos damos cuenta de la salud solo cuando la perdemos, al enfermar. Su SENTIDO ORIGINARIO es un modo de ser y existir del ser-en-el-mundo, con todo su conjunto de relaciones: la salud es el «olvido de uno mismo».',
          },
          {
            type: 'list',
            title: 'Componentes de la experiencia',
            items: ['Historicidad.', 'Estar arrojado (eyecto) al mundo.', 'El acontecer.', 'La finitud: la conciencia de que la vida termina.'],
          },
          {
            type: 'paragraph',
            content: 'La salud es también PRAXIS, una práctica transformadora: hacer salud cambia la manera de vivir.',
          },
        ],
      },
      {
        id: 'hsa-3',
        number: 3,
        title: 'Evolución histórica del concepto',
        keyTerms: ['Alcmeón', 'humores', 'medio interno', 'homeostasis', 'Leriche', 'Dubos', 'Terris', 'San Martín'],
        blocks: [
          {
            type: 'table',
            title: 'Autores y su idea de salud ★',
            data: {
              headers: ['Autor', 'Idea clave'],
              rows: [
                ['Alcmeón de Crotona', 'La enfermedad nace en el individuo como desarmonía o desequilibrio de la physis; causas internas'],
                ['Hipócrates', 'Cuatro humores (sangre, flema, bilis amarilla y bilis negra): salud es su equilibrio; enfermedad, su mezcla inarmónica'],
                ['Galeno', 'Retoma los humores y explica las epidemias por MIASMAS, emanaciones del aire que alteran su equilibrio'],
                ['Claude Bernard', 'Constancia del MEDIO INTERNO'],
                ['Walter Cannon', 'Acuña HOMEOSTASIS: los mecanismos que mantienen constante el medio interno'],
                ['W. H. Perkins', 'Equilibrio relativo de forma y función, por ajuste dinámico ante las fuerzas que tienden a alterarlo'],
                ['OMS', '«Estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades»'],
                ['René Leriche', '«La vida en el silencio de los órganos»'],
                ['René Dubos', 'Estado de ADAPTACIÓN al medio y capacidad de funcionar'],
                ['Milton Terris', 'Bienestar más CAPACIDAD DE FUNCIONAMIENTO; la salud tiene grados y dos polos'],
                ['Congreso de Médicos y Biólogos de Lengua Catalana', 'Una manera de vivir AUTÓNOMA, SOLIDARIA Y GOZOSA'],
                ['Joseph Matarazzo', 'SALUD CONDUCTUAL: responsabilidad individual y peso de los factores psíquicos'],
                ['Hernán San Martín', 'Proceso DINÁMICO salud-enfermedad: histórico, cambia con la época, la cultura y las condiciones de vida'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Sobre la definición de la OMS',
            content: 'En clase se presentó como «estado dinámico de completo bienestar físico, mental, emocional, espiritual y social». La Constitución de la OMS, vigente desde 1948, dice solo «físico, mental y social»; las palabras «dinámico», «emocional» y «espiritual» son ampliaciones posteriores que se han propuesto, pero no forman parte de la definición oficial.',
          },
          {
            type: 'comparison',
            title: 'Los dos polos de Milton Terris ★',
            left: { title: 'Polo objetivo', items: ['Capacidad de funcionamiento', 'Se detecta en distintos grados'] },
            right: { title: 'Polo subjetivo', items: ['Sensación de bienestar', 'Los «días buenos y días malos»'] },
          },
          {
            type: 'paragraph',
            content: 'Para San Martín la salud es un PUNTO DE ENCUENTRO dentro de un sistema de signos, significados y prácticas: entre el individuo, el ambiente y la organización social, y entre lo público, lo privado y la comunidad.',
          },
        ],
      },
      {
        id: 'hsa-4',
        number: 4,
        title: 'Normativa o neutralista; una sola salud y estilos de vida',
        keyTerms: ['visión normativa', 'visión neutralista', 'una sola salud', 'estilo de vida'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos visiones de la salud y la enfermedad ★',
            left: { title: 'Normativa', items: ['Conceptos CARGADOS DE VALORACIÓN: lo deseable, lo útil, lo bueno', 'No se puede decidir objetivamente si algo es salud o enfermedad'] },
            right: { title: 'Neutralista', items: ['NO hace falta recurrir a juicios de valor', 'Salud y enfermedad son una cuestión científico-empírica'] },
          },
          {
            type: 'definition',
            title: 'Una sola salud (One Health) ★',
            content: 'Enfoque que integra la salud HUMANA, la ANIMAL y la AMBIENTAL (ecológica). Se emparenta con la salud planetaria y la salud global. Definir la salud es difícil porque depende de contextos diferentes, parte de presupuestos distintos y resume las aspiraciones e ideales del estado de vida que se desea alcanzar.',
          },
          {
            type: 'list',
            title: 'Estilo de vida: los seis ámbitos de la medicina del estilo de vida',
            items: ['Actividad física.', 'Control del estrés.', 'Relaciones interpersonales.', 'Higiene del sueño.', 'Consumo de sustancias (tabaco, alcohol, cafeína).', 'Alimentación saludable.'],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Una sola salud en la consulta',
            content: 'Una diarrea en un niño de zona rural puede venir del agua, de los animales de traspatio o de los alimentos; las zoonosis, la resistencia a los antibióticos por su uso en animales y la contaminación del agua son ejemplos de por qué la salud humana no se separa de la animal ni de la ambiental.',
          },
        ],
      },
      {
        id: 'hsa-5',
        number: 5,
        title: 'Contextos de la salud',
        keyTerms: ['contexto ideal', 'contexto de uso', 'dolencia'],
        blocks: [
          {
            type: 'table',
            title: 'Contexto ideal de la salud ★',
            data: {
              headers: ['Contexto', 'Qué destaca'],
              rows: [
                ['Ideal o utópico', 'Ideas de felicidad plena y calidad integral de vida'],
                ['Filosófico y antropológico', 'Concepción global del ser humano; la salud es su estado más propio'],
                ['Económico y político', 'La salud como bien económico'],
                ['Sociológico', 'La salud se configura por la sociedad como un todo integrado'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Contexto de uso de la salud ★',
            data: {
              headers: ['Contexto', 'Qué destaca'],
              rows: [
                ['Económico y político', 'Financiación, costo de las enfermedades, oferta y demanda, eficiencia de los servicios'],
                ['De los pacientes', 'Personas que se sienten enfermas en su cultura y su entorno (familia, escuela, institución); su concepto primario es la DOLENCIA'],
                ['Médico-asistencial', 'Actividad y necesidades de los profesionales; curativo y pragmático'],
                ['Sociológico', 'Comprender la sociedad en conjunto y actuar sobre ella'],
              ],
            },
          },
          {
            type: 'steps',
            title: 'Cómo cambió el concepto con cada época',
            steps: [
              'Enfermedades infectocontagiosas: salud como AUSENCIA de enfermedad o invalidez.',
              'Desarrollo del psicoanálisis: salud como BIENESTAR físico, mental y social.',
              'Desarrollo de la ecología: salud como EQUILIBRIO con el entorno y adaptación.',
              'Predominio de las enfermedades crónicas.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-enfermedad-proceso',
    title: 'Enfermedad y proceso salud-enfermedad',
    subtitle: 'Definiciones de enfermedad (Canguilhem, Hesslow, Boorse, De Vito, Scadding, San Martín, Sadegh-Zadeh, Rossi); convención y construcción social; enfoques de Canguilhem y conducta de enfermedad de Mechanic; multicausalidad; Rojas Soriano, Leavell y Clark, horizonte clínico, salud positiva y zona neutra',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🩺',
    keyPoints: [
      'BOORSE: la enfermedad es un estado natural, libre de valoración (teoría bioestadística) · CANGUILHEM y DE VITO: concepto valorativo · HESSLOW: niega un concepto general de enfermedad.',
      'Que un diagnóstico sea una CONVENCIÓN (criterios que se acuerdan) no lo vuelve una construcción social; la RESPUESTA social a la enfermedad sí lo es.',
      '«La INCAPACIDAD DEL ESTADO para atender la salud contribuyó a reconocer el origen MULTICAUSAL de la enfermedad» ★',
      'Los perfiles de salud y enfermedad se explican por el CONTEXTO HISTÓRICO, el MODO DE PRODUCCIÓN y las CLASES SOCIALES.',
      'HORIZONTE CLÍNICO (Leavell y Clark): la línea entre la etapa asintomática y la sintomática; la prevención se apoya en diagnóstico oportuno y tratamiento temprano.',
      'ZONA NEUTRA: el punto del proceso en que no se distingue lo normal de lo patológico.',
    ],
    sections: [
      {
        id: 'hep-1',
        number: 1,
        title: 'Qué es la enfermedad, según cada autor',
        keyTerms: ['Canguilhem', 'Boorse', 'teoría bioestadística', 'Hesslow', 'Scadding', 'lógica difusa'],
        blocks: [
          {
            type: 'table',
            title: 'Definiciones de enfermedad',
            data: {
              headers: ['Autor', 'Idea clave'],
              rows: [
                ['Georges Canguilhem', 'Estado anormal o patológico que predispone a un resultado adverso; concepto VALORATIVO y convencional'],
                ['Germund Hesslow', 'NIEGA un concepto general de enfermedad: no hay teoría biomédica ni leyes generales que la definan'],
                ['Christopher Boorse', 'Estado NATURAL, libre de valoración: TEORÍA BIOESTADÍSTICA, una función disminuida respecto de lo típico para la edad y el sexo'],
                ['De Vito', 'Basada en JUICIOS DE VALOR: la sociedad impone las reglas para designar lo patológico'],
                ['J. G. Scadding', 'La enfermedad se entiende por CONVENCIONES: los criterios diagnósticos se acuerdan y cambian'],
                ['Hernán San Martín', 'DESEQUILIBRIO ECOLÓGICO; no tiene sentido fuera del ser humano como unidad bio-psico-social y espiritual'],
                ['Kazem Sadegh-Zadeh', 'La enfermedad como concepto de LÓGICA DIFUSA («fuzzy disease»): se tiene en grados'],
                ['Rossi', 'La enfermedad depende de lo INDIVIDUAL; la salud participa de lo COLECTIVO'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Convención no es construcción social',
            content: 'Que los criterios de diabetes se fijen por consenso no significa que la diabetes sea una «construcción social»: es una alteración real del metabolismo de la glucosa. Lo que sí es construcción social es la respuesta a la enfermedad: ir al médico, a una limpia o a que «truenen el cuerito».',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Criterios que cambian',
            content: 'La hipertensión es un buen ejemplo de enfermedad definida por convención: el valor de corte ha cambiado con las guías, y un mismo paciente puede pasar de «normal» a «hipertenso» sin que su presión haya cambiado. Eso no vuelve irreal el daño que la presión alta causa a las arterias.',
          },
        ],
      },
      {
        id: 'hep-2',
        number: 2,
        title: 'Enfoques y conducta de enfermedad',
        keyTerms: ['enfoque ontológico', 'enfoque dinámico', 'enfoque social', 'conducta de enfermedad', 'Mechanic'],
        blocks: [
          {
            type: 'list',
            title: 'Tres enfoques de la enfermedad (Canguilhem, «Lo normal y lo patológico»)',
            items: [
              'ONTOLÓGICO: ¿la enfermedad existe en sí misma o solo en el cuerpo del enfermo?',
              'DINÁMICO: alteración de los mecanismos de regulación homeostática.',
              'SOCIAL: la enfermedad como construcción social.',
            ],
          },
          {
            type: 'list',
            title: 'Conducta de enfermedad (David Mechanic): cuatro formas de entenderla',
            items: [
              'Disposición estable de la persona a responder a la enfermedad.',
              'Resultado de la interacción entre variables personales y sociales.',
              'Consecuencia de la estructura y organización del sistema sanitario.',
              'Resultado del proceso de atribución en torno a la salud y la enfermedad.',
            ],
          },
        ],
      },
      {
        id: 'hep-3',
        number: 3,
        title: 'Multicausalidad y determinantes',
        keyTerms: ['multicausalidad', 'factores de riesgo', 'modo de producción', 'clases sociales'],
        blocks: [
          {
            type: 'definition',
            title: 'Pregunta de examen ★',
            content: '«La incapacidad del Estado para atender la salud contribuyó a reconocer el origen multicausal de la enfermedad»: reconocer muchas causas sirvió también para justificar que el Estado se limitara a la prevención y la promoción.',
          },
          {
            type: 'paragraph',
            content: 'El MODELO MULTICAUSAL busca identificar factores de riesgo o determinantes. Los perfiles diferenciales de salud y enfermedad de una población se explican por su CONTEXTO HISTÓRICO, su MODO DE PRODUCCIÓN y sus CLASES SOCIALES; con esos tres elementos se caracteriza la región en el proyecto integrador.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Misma enfermedad, distinto perfil',
            content: 'La tuberculosis y la diabetes complicada no se distribuyen al azar: se concentran donde hay hacinamiento, trabajo precario y poco acceso a servicios. El mismo bacilo o la misma glucosa alta producen perfiles distintos según la clase social y el modo de vida de cada grupo.',
          },
        ],
      },
      {
        id: 'hep-4',
        number: 4,
        title: 'El proceso salud-enfermedad',
        keyTerms: ['dialéctica', 'tríada ecológica', 'historia natural', 'horizonte clínico', 'salud positiva', 'zona neutra'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El proceso salud-enfermedad es una DIALÉCTICA (salud, enfermedad, salud): un fenómeno individual y colectivo con componentes biológicos, sociales, ideológicos y espirituales. Raúl Rojas Soriano lo analiza en tres niveles: el modelo unicausal, el multicausal y el de las relaciones internas del proceso (lo cultural y lo intercultural).',
          },
          {
            type: 'definition',
            title: 'Horizonte clínico',
            content: 'En la historia natural y social de la enfermedad de LEAVELL Y CLARK, que parte de la tríada ecológica (agente, huésped y ambiente) y de la exposición al riesgo, es la línea que separa la etapa asintomática de la sintomática. Un diagnóstico tardío ya cruzó una parte de la historia natural; por eso la prevención se apoya en el DIAGNÓSTICO OPORTUNO y el TRATAMIENTO TEMPRANO.',
          },
          {
            type: 'comparison',
            title: 'Los dos extremos del proceso',
            left: { title: 'Salud positiva', items: ['Bienestar elevado y capacidad de funcionamiento', 'Se mantiene con defensa, fomento, protección, promoción y prevención'] },
            right: { title: 'Pérdida de salud', items: ['Deterioro progresivo', 'Termina en la muerte prematura: toda muerte por enfermedad lo es'] },
          },
          {
            type: 'paragraph',
            content: 'Entre ambos está la ZONA NEUTRA, donde no se distingue lo normal de lo patológico: la persona no está ni sana ni enferma. La protección, la promoción y la prevención también se aplican a quien ya está enfermo, por ejemplo para evitar las complicaciones de la diabetes.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-muerte-practica',
    title: 'La muerte y la práctica médica',
    subtitle: 'Definiciones de muerte, estado y evento (Trueba), muerte encefálica, signos clínicos y fenómenos cadavéricos, duelo, ars moriendi y cuidados paliativos; práctica médica: dimensiones, physis y techné, acto médico y lex artis, lo médico y lo social, consejo médico',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🕯️',
    keyPoints: [
      'TRUEBA GUTIÉRREZ: la muerte como ESTADO y la muerte como EVENTO (el morir): «una cosa es la muerte y otra el morir».',
      'MUERTE ENCEFÁLICA: cese irreversible de las funciones de TODO el encéfalo, incluido el TALLO cerebral, comprobado con pruebas neurológicas y estudios como el EEG sin actividad.',
      'Fenómenos cadavéricos: ALGOR (enfriamiento), RIGOR (rigidez), LIVOR (livideces) y deshidratación.',
      'Duelo en cuatro fases: aturdimiento, anhelo y búsqueda, desorganización y desesperación, y reorganización.',
      '«El ARTE de la medicina surge de la PHYSIS y de la TECHNÉ» ★',
      '«La explicación de lo médico por lo social» comprende el rol del paciente y del médico, la fisonomía de la institución médica, el régimen hospitalario y la personificación del paciente como objeto ★',
    ],
    sections: [
      {
        id: 'hmp-1',
        number: 1,
        title: 'Qué es la muerte',
        keyTerms: ['finitud', 'muerte como estado', 'muerte como evento', 'muerte encefálica'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La conciencia de la finitud se vincula con la experiencia de la muerte. La autoconciencia y la conciencia de la muerte son producto de la evolución que configuró al Homo sapiens, y se expresan desde muy temprano en el culto a los ancestros y en los rituales funerarios.',
          },
          {
            type: 'list',
            title: 'Definiciones',
            items: [
              'Cesación o término de la vida; separación del cuerpo y el alma.',
              'Cese de las funciones respiratoria y circulatoria, o cese irreversible de todas las funciones encefálicas, incluido el tallo.',
              'Para la ciencia médica: el límite en que la función orgánica ya no sostiene la homeostasis.',
            ],
          },
          {
            type: 'comparison',
            title: 'Dos niveles (Trueba Gutiérrez)',
            left: { title: 'La muerte como estado', items: ['El estar muerto'] },
            right: { title: 'La muerte como evento', items: ['El morir: el proceso, el acto de morir'] },
          },
          {
            type: 'definition',
            title: 'Muerte encefálica',
            content: 'Cese irreversible de las funciones de TODO el encéfalo, incluido el tallo cerebral. En México, la Ley General de Salud (art. 343 y 344) reconoce la pérdida de la vida por muerte encefálica o paro cardiaco irreversible; la muerte encefálica se determina por ausencia completa y permanente de conciencia, de respiración espontánea y de reflejos del tallo, y se corrobora con un electroencefalograma sin actividad eléctrica cerebral o una angiografía que muestre ausencia de circulación cerebral.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué importa en la clínica',
            content: 'El diagnóstico de muerte encefálica permite retirar el soporte que ya no beneficia al paciente y es la condición para la donación de órganos de donante fallecido. No debe confundirse con el estado vegetativo, en el que el tallo cerebral sigue funcionando y hay respiración espontánea.',
          },
        ],
      },
      {
        id: 'hmp-2',
        number: 2,
        title: 'Diagnóstico de la muerte',
        keyTerms: ['signos negativos de vida', 'algor mortis', 'rigor mortis', 'livor mortis'],
        blocks: [
          {
            type: 'list',
            title: 'Signos negativos de vida (diagnóstico clínico)',
            items: [
              'Ausencia de pulsos periféricos y de latido cardiaco.',
              'Ausencia de movimientos respiratorios.',
              'Inconsciencia, sin movimientos voluntarios ni reflejos (por ejemplo, el corneal).',
              'Sin respuesta a estímulos dolorosos.',
              'Midriasis paralítica y cianosis.',
            ],
          },
          {
            type: 'table',
            title: 'Fenómenos cadavéricos (signos positivos de muerte)',
            data: {
              headers: ['Fenómeno', 'Qué ocurre'],
              rows: [
                ['Algor mortis', 'Enfriamiento, de alrededor de 1 °C por hora, hasta igualar la temperatura ambiente'],
                ['Rigor mortis', 'Rigidez que aparece tras unas horas de flacidez; empieza en la mandíbula y el cuello y desciende al tronco y las extremidades'],
                ['Livor mortis', 'Livideces: coloración rojo-violácea en las zonas declives, por la sangre que se acumula por gravedad'],
                ['Deshidratación', 'Pérdida progresiva de peso, más notable en los lactantes'],
              ],
            },
          },
        ],
      },
      {
        id: 'hmp-3',
        number: 3,
        title: 'Duelo, ars moriendi y cuidados paliativos',
        keyTerms: ['duelo', 'ars moriendi', 'cuidados paliativos', 'tanatología'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La salud se comprende también desde la experiencia de la muerte (el «misterio de la salud»). En la escala de Elison se pasa de la salud al descontento, el malestar, la inadaptación, la enfermedad y la muerte.',
          },
          {
            type: 'steps',
            title: 'Las cuatro fases del duelo',
            steps: [
              'Aturdimiento o shock: incredulidad; funciona como mecanismo protector.',
              'Anhelo y búsqueda: urgencia de recuperar lo perdido, irritabilidad, autorreproche.',
              'Desorganización y desesperación: tristeza profunda, apatía.',
              'Reorganización: nuevos patrones de vida y nuevos vínculos.',
            ],
          },
          {
            type: 'paragraph',
            content: 'Hay duelo ante cualquier pérdida: la salud, una mascota, una amistad o un objeto, no solo ante la muerte. El ARS MORIENDI medieval era el arte de prepararse para morir, en un contexto religioso. Para Gadamer la muerte es una etapa del ciclo del devenir y el perecer, y hace falta desmitificar la vida y la muerte. Hoy el ars moriendi se expresa en los CUIDADOS PALIATIVOS y la tanatología: «ayudemos a morir enseñando cómo vivir».',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Los primeros contactos con la muerte',
            content: 'El estudiante de medicina se encuentra con la muerte primero como muerte celular y después en la disección de cadáveres. Reconocer esa experiencia ayuda a acompañar más tarde a pacientes y familias en el duelo, que no es una enfermedad sino una respuesta normal a la pérdida; solo cuando se complica y se prolonga requiere atención especializada.',
          },
        ],
      },
      {
        id: 'hmp-4',
        number: 4,
        title: 'La práctica médica: physis, techné y acto médico',
        keyTerms: ['práctica médica', 'tradición médica', 'physis', 'techné', 'frónesis', 'acto médico', 'lex artis'],
        blocks: [
          {
            type: 'definition',
            title: 'Práctica médica',
            content: 'Ejercicio profesional por el que los médicos autorizados diagnostican, tratan y previenen enfermedades, integrando conocimientos científicos, habilidades técnicas y principios éticos. Desde Hipócrates, para saber de medicina hay que conocer lo que es el ser humano.',
          },
          {
            type: 'list',
            title: 'Cuatro dimensiones que convergen en ella',
            items: [
              'El mundo de la vida.',
              'La TRADICIÓN MÉDICA: normas, costumbres, creencias, instituciones y formas de vida del quehacer médico; es el horizonte histórico de la conciencia médica.',
              'La racionalidad médica: el uso de la razón en la medicina.',
              'El juicio clínico.',
            ],
          },
          {
            type: 'definition',
            title: 'Physis y techné ★',
            content: 'PHYSIS (naturaleza) fue el problema central de los primeros filósofos griegos, que buscaban el ARCHÉ o principio de las cosas. TECHNÉ es el conocimiento del cambio y la variabilidad; por eso la medicina es un ARTE y no una simple técnica. La PRAXIS son los principios de acción que transforman el entorno y la FRÓNESIS, el razonamiento práctico. «El arte de la medicina surge de la physis y de la techné».',
          },
          {
            type: 'definition',
            title: 'Acto médico',
            content: 'Conjunto de acciones, desde un diagnóstico simple hasta la cirugía más compleja, con una sobrecarga de riesgos y sin elementos que garanticen un resultado exacto. Sus dimensiones son la médica, la espiritual (comunicación), la volitiva (decisiones), la afectiva, la social (relación médico-paciente) y la religiosa. Lo configuran la PROFESIONALIDAD, la EJECUCIÓN TÍPICA y la LEX ARTIS: la tradición médica más la cultura habitual de trabajo.',
          },
        ],
      },
      {
        id: 'hmp-5',
        number: 5,
        title: 'Lo médico y lo social',
        keyTerms: ['lo médico por lo social', 'encuentro con el otro', 'consejo médico', 'tres universos'],
        blocks: [
          {
            type: 'list',
            title: '«La explicación de lo médico por lo social» comprende el papel de la profesión médica en ★',
            items: ['El rol del paciente y el del médico.', 'La fisonomía de la institución médica.', 'El régimen hospitalario.', 'La personificación del paciente como objeto.'],
          },
          {
            type: 'comparison',
            title: 'Dos salidas de la práctica médica',
            left: { title: 'Relación con el otro', items: ['Confrontación: el médico «sabe»', '«Sigue el tratamiento o no te quejes»'] },
            right: { title: 'Encuentro con el otro', items: ['Enfoque hipocrático', 'Acompañar y aconsejar al que sufre'] },
          },
          {
            type: 'paragraph',
            content: 'El acto médico se concreta en el MÉTODO CLÍNICO y la ENTREVISTA CLÍNICA. El CONSEJO MÉDICO, en clave aristotélica, es un consejo amistoso que expresa el deseo del bien y de lo justo, con buen juicio y compasión; el médico humanista genera cordialidad, confianza, reciprocidad y un diálogo sencillo. La práctica médica tiene tres universos: ONTOLÓGICO (la experiencia), EPISTEMOLÓGICO (cómo conocemos) y ÉTICO (el ethos, con la proáiresis y la frónesis).',
          },
          {
            type: 'note',
            title: 'Sin psicologizar la medicina',
            content: 'Para Federico Ortiz Quezada no se trata de llenar la práctica médica de contenidos sociales hasta psicologizarla y desvirtuarla: los contenidos filosóficos apoyan la comprensión, pero no sustituyen el conocimiento científico.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Del «no te quejes» al encuentro',
            content: 'Ante un paciente que no toma su tratamiento, la relación de confrontación lo regaña; el encuentro pregunta por qué. A menudo hay razones concretas, como el costo, los efectos adversos o una creencia sobre el medicamento, que se pueden resolver juntos.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-eficacia-simbolica',
    title: 'Eficacia simbólica',
    subtitle: 'Definición; magia, religión y ciencia (Frazer); signo y símbolo (Saussure); Lévi-Strauss, la cura chamánica y el complejo chamanístico; la eficacia simbólica no es causal; placebo y nocebo',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🪶',
    keyPoints: [
      'EFICACIA SIMBÓLICA: capacidad de un símbolo para generar efectos reales en la vida de las personas a partir del significado que se le atribuye ★',
      'FRAZER («La rama dorada»): magia, religión y ciencia son explicaciones sucesivas de la realidad.',
      'SIGNO: significado natural o convencional, entidad simple, basta conocerlo · SÍMBOLO: solo convencional, exclusivamente humano, hay que conocerlo e interpretarlo; no hay símbolo sin signo.',
      'LÉVI-STRAUSS: la eficacia simbólica es una «PROPIEDAD INDUCTORA» entre estructuras homólogas de distintos niveles del ser vivo: procesos orgánicos, psiquismo inconsciente y pensamiento reflexivo ★',
      'COMPLEJO CHAMANÍSTICO: creencia del curador en su técnica, creencia del enfermo en el curador y consenso de la opinión colectiva ★',
      'La eficacia simbólica NO es eficacia causal: opera por la fe, la creencia y la interpretación compartida de símbolos en un contexto cultural ★',
    ],
    sections: [
      {
        id: 'hes-1',
        number: 1,
        title: 'Qué es la eficacia simbólica',
        keyTerms: ['eficacia simbólica', 'Frazer', 'magia', 'religión', 'ciencia'],
        blocks: [
          {
            type: 'definition',
            title: 'Eficacia simbólica ★',
            content: 'Capacidad de un símbolo para generar efectos reales en la vida de las personas a partir del significado que se le atribuye. Una calavera con dos huesos cruzados no se lee como Día de Muertos ni como bandera pirata en una puerta: se lee como PELIGRO, y condiciona una acción.',
          },
          {
            type: 'paragraph',
            content: 'James George FRAZER, en «La rama dorada», propuso que la MAGIA, la RELIGIÓN y la CIENCIA son explicaciones sucesivas de la realidad, cada una propia de su momento histórico, aunque la magia no desaparece. La ciencia también tiene sus «dogmas», como aceptar un resultado solo si la significancia estadística es p < 0.05.',
          },
          {
            type: 'list',
            title: 'Pares que ordenan el tema',
            items: ['Realidad e irrealidad.', 'Lo biológico y lo mítico.', 'Lo exterior y lo interior.', 'Significado y significante.', 'Forma y contenido.', 'Signo y símbolo.'],
          },
          {
            type: 'note',
            title: 'Somos seres integrales',
            content: 'La necesidad de creer es humana. Por eso un paciente puede atribuir su curación a la ciencia y a Dios a la vez, y por eso persisten conductas de riesgo aunque se tenga la información: no decidimos solo con datos.',
          },
        ],
      },
      {
        id: 'hes-2',
        number: 2,
        title: 'Signo y símbolo',
        keyTerms: ['Saussure', 'significante', 'significado', 'signo', 'símbolo', 'vara de Esculapio'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Para Ferdinand de SAUSSURE, el signo lingüístico une un SIGNIFICANTE (la imagen acústica o sensorial) y un SIGNIFICADO (el concepto, la idea), con un enlace ARBITRARIO entre ambos.',
          },
          {
            type: 'table',
            title: 'Signo frente a símbolo',
            data: {
              headers: ['Signo', 'Símbolo'],
              rows: [
                ['Significado natural o convencional', 'Solo significado convencional'],
                ['Algunos los entienden los animales (el rojo de la coralillo)', 'Convención exclusivamente humana'],
                ['Para entenderlo basta con conocerlo', 'Hay que conocerlo e INTERPRETARLO'],
                ['Entidad simple', 'Entidad compleja: síntesis de signos'],
                ['Se reconoce de inmediato por su imagen sensorial', 'Requiere asociación de ideas'],
                ['Puede existir sin el símbolo', 'No existe símbolo sin signo'],
                ['Señala algo concreto', 'Significado más amplio y menos concreto'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'El símbolo de la medicina',
            content: 'El símbolo de la medicina es la VARA DE ESCULAPIO: un bastón con UNA serpiente. El caduceo de Mercurio (Hermes), con alas y dos serpientes, es símbolo del comercio, aunque a menudo se usa por error en instituciones de salud. Distinguirlos exige interpretar el símbolo, no solo reconocerlo.',
          },
        ],
      },
      {
        id: 'hes-3',
        number: 3,
        title: 'Lévi-Strauss y la cura chamánica',
        keyTerms: ['Lévi-Strauss', 'propiedad inductora', 'complejo chamanístico', 'relato', 'mito'],
        blocks: [
          {
            type: 'definition',
            title: 'La eficacia simbólica según Claude Lévi-Strauss ★',
            content: '«Consistiría precisamente en esta “propiedad inductora” que poseerían, unas con respecto a otras, ciertas estructuras formalmente homólogas capaces de constituirse, con materiales diferentes, en diferentes niveles del ser vivo: procesos orgánicos, psiquismo inconsciente, pensamiento reflexivo» (Antropología estructural). La analiza en el canto de un chamán que ayuda a una mujer en un parto difícil: una curación por la palabra.',
          },
          {
            type: 'list',
            title: 'El complejo chamanístico: tres creencias ★',
            items: [
              'La creencia del curador en la eficacia de sus técnicas.',
              'La creencia del enfermo en el poder del curador.',
              'La confianza y las exigencias de la opinión colectiva: la situación es un fenómeno de CONSENSO.',
            ],
          },
          {
            type: 'list',
            title: 'Cómo actúa el relato',
            items: [
              'El RELATO contribuye a restituir una experiencia real.',
              'El MITO corresponde, para quien lo comparte, a una realidad objetiva.',
              'La cura induce una transformación orgánica: una reorganización estructural en el psiquismo inconsciente.',
              'Media entre la cura y la enfermedad a través del habla, el recuerdo narrado, la confianza en el acto del curador y la creencia en un sistema de símbolos compartido.',
            ],
          },
        ],
      },
      {
        id: 'hes-4',
        number: 4,
        title: 'No es eficacia causal: placebo y nocebo',
        keyTerms: ['eficacia causal', 'placebo', 'nocebo', 'relación médico-paciente'],
        blocks: [
          {
            type: 'definition',
            title: 'Eficacia simbólica terapéutica ★',
            content: 'Capacidad de los símbolos y rituales para generar efectos transformadores en la vida de las personas a través de la fe, la creencia y la interpretación compartida de significados, en un contexto cultural. NO es eficacia causal: no hay una relación directa de causa y efecto en la que una acción produzca un resultado predecible. La palabra por sí sola no cura.',
          },
          {
            type: 'comparison',
            title: 'Placebo y nocebo',
            left: { title: 'Placebo', items: ['Sustancia o procedimiento sin propiedades activas', 'Puede tener efecto terapéutico cuando el paciente cree que es eficaz'] },
            right: { title: 'Nocebo', items: ['El paciente presenta efectos adversos o síntomas porque cree que ocurrirán', 'Puede ser dañino y afectar la adherencia'] },
          },
          {
            type: 'paragraph',
            content: 'Fabrizio Benedetti estudió la fisiología de la relación médico-paciente: las palabras, los rituales y el contexto de la consulta activan mecanismos cerebrales medibles, por ejemplo de analgesia. Las prácticas religiosas y espirituales también se asocian con la actividad de redes cerebrales específicas.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La palabra del médico también actúa',
            content: 'Leer en voz alta todos los efectos adversos posibles sin contexto aumenta su aparición (nocebo); explicar con confianza para qué sirve un tratamiento mejora la respuesta y la adherencia. No se trata de engañar al paciente, sino de cuidar cómo se comunica la información verdadera.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-padecer-competencia-cultural',
    title: 'Padecer, sistemas médicos y competencia cultural',
    subtitle: 'Enfermedad, padecer y malestar (disease, illness, sickness); padecer médico de Martínez Cortés; modelo de constelación del padecer; dimensión cultural de la enfermedad y sistemas médicos; competencia cultural, sus dimensiones y el modelo de Purnell; competencias interculturales y atención centrada en el paciente',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🤲',
    keyPoints: [
      'ENFERMEDAD (disease): proceso fisiopatológico objetivo · PADECER (illness): estado subjetivo que percibe el individuo · MALESTAR (sickness): acciones y comportamientos del enfermo en la sociedad.',
      'Padecer médico (Fernando Martínez Cortés): datos subjetivos y objetivos de lo que el paciente siente, le molesta, inquieta, preocupa o duele; dos planos: el de los síntomas (historia clínica) y el de sus significados (relato patográfico).',
      'Modelo de constelación del padecer (Morse y Johnson): incertidumbre, interrupción, esfuerzo por recuperarse y recuperación del bienestar.',
      'Dimensión cultural de la enfermedad: su tipificación, la significación social que se le atribuye y los contextos terapéuticos para disolverla o atenuarla.',
      'COMPETENCIA CULTURAL: habilidad para interactuar y negociar con grupos culturalmente diversos con respeto y eficacia; dimensiones: conocimiento, conciencia, habilidades interpersonales y actitudes abiertas ★',
      'No se trata de volverse médico tradicional, sino de comprender la lógica del otro para dialogar con él.',
    ],
    sections: [
      {
        id: 'hpc-1',
        number: 1,
        title: 'Enfermedad, padecer y malestar',
        keyTerms: ['disease', 'illness', 'sickness', 'padecer médico', 'relato patográfico'],
        blocks: [
          {
            type: 'table',
            title: 'Tres caras de estar enfermo',
            data: {
              headers: ['Término', 'Qué es'],
              rows: [
                ['Enfermedad (disease)', 'Proceso fisiopatológico o enfermedad objetiva'],
                ['Padecer (illness)', 'Mal, dolencia o estado subjetivo que percibe el individuo'],
                ['Malestar (sickness)', 'Disfunción social: acciones y comportamientos del enfermo en la sociedad'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Padecer médico (Fernando Martínez Cortés)',
            content: 'Conjunto de datos subjetivos y objetivos relacionados con lo que el paciente siente, lo que le molesta, le inquieta, le preocupa o le duele.',
          },
          {
            type: 'comparison',
            title: 'Dos planos del padecer',
            left: { title: 'Plano de las molestias o síntomas', items: ['Comprender signos y síntomas para diagnosticar y tratar', 'Se instrumenta con la HISTORIA CLÍNICA'] },
            right: { title: 'Plano de las interpretaciones y significados', items: ['Qué significa el padecer para quien lo vive', 'Se instrumenta con el RELATO PATOGRÁFICO personal'] },
          },
          {
            type: 'paragraph',
            content: 'Para Cardoso y colaboradores, el padecimiento integra las ideas, experiencias, creencias, esperanzas, miedos y actitudes de la persona sobre la salud y su enfermedad; su relación con la medicina y los médicos; cómo vive sus redes de apoyo y su religiosidad, y lo que piensa sobre el costo de la enfermedad y su tratamiento.',
          },
          {
            type: 'steps',
            title: 'Modelo de constelación del padecer (Morse y Johnson)',
            steps: [
              'Incertidumbre: la persona percibe o sospecha signos y síntomas.',
              'Interrupción: reconoce la enfermedad y acepta que es real.',
              'Esfuerzo por recuperarse: busca dar sentido a lo que vive.',
              'Recuperación del bienestar: recobra el control de sí y sus relaciones anteriores.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Preguntar qué significa',
            content: 'Preguntar «¿a qué le atribuye su dolor de cabeza?» o «¿qué teme que sea?» explora el plano de los significados, que la consulta apresurada suele omitir. Un mismo síntoma puede vivirse como algo pasajero o como presagio de un cáncer, y eso cambia lo que el paciente hará con las indicaciones.',
          },
        ],
      },
      {
        id: 'hpc-2',
        number: 2,
        title: 'Dimensión cultural y sistemas médicos',
        keyTerms: ['dimensión cultural', 'nivel sígnico', 'nivel simbólico', 'sistemas médicos', 'frío y caliente'],
        blocks: [
          {
            type: 'list',
            title: 'Puntos de la dimensión cultural de la enfermedad',
            items: [
              'La tipificación y definición de las enfermedades (¿infecciosa?, ¿crónica?).',
              'La significación social que se les atribuye: no es lo mismo una gripe que un cáncer.',
              'Los contextos terapéuticos orientados a disolverlas o atenuarlas.',
            ],
          },
          {
            type: 'comparison',
            title: 'Dos planos de interpretación de las dolencias',
            left: { title: 'Nivel sígnico', items: ['Signos y síntomas corporales', 'Los indicadores patológicos de la biomedicina'] },
            right: { title: 'Nivel simbólico', items: ['Los símbolos y significados sociales del padecimiento', 'Sistemas populares o alternativos'] },
          },
          {
            type: 'definition',
            title: 'Sistemas médicos',
            content: 'Conjunto de representaciones y prácticas, formas de atención, técnicas y tecnologías involucradas en el acto de curación y tratamiento de la enfermedad.',
          },
          {
            type: 'table',
            title: 'Sistemas médicos y sus teorías',
            data: {
              headers: ['Sistema', 'Teoría de la aflicción', 'Práctica curativa'],
              rows: [
                ['Biomedicina (medicina occidental)', 'Anatómica, fisiológica, infecciosa', 'Cirugía y medicamentos'],
                ['Homeopatía', 'Fuerza vital fuera de balance', 'Sustancias en muy baja concentración'],
                ['Naturopatía', 'Estado debilitado del cuerpo', 'Dietas, limpiezas y remedios naturales'],
                ['New Age (cristales, aromas, sonido, reiki)', 'Ruptura del balance energético', 'Materiales y manipulaciones para reequilibrar la energía'],
                ['Medicina tradicional mexicana', 'Desequilibrio entre fuerzas FRÍAS y CALIENTES', 'Herbolaria, limpias, sobadas y ritos'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Sobre la homeopatía',
            content: 'Sus diluciones son tan altas que no queda sustancia activa; en las revisiones sistemáticas su efecto no supera al placebo. Que el paciente reporte mejoría ilustra la eficacia simbólica, no un efecto farmacológico.',
          },
        ],
      },
      {
        id: 'hpc-3',
        number: 3,
        title: 'Competencia cultural',
        keyTerms: ['competencia cultural', 'conciencia cultural', 'conocimiento cultural', 'habilidades culturales', 'deseo cultural', 'sensibilidad cultural', 'Purnell'],
        blocks: [
          {
            type: 'definition',
            title: 'Competencia cultural ★',
            content: 'Habilidad y capacidad para interactuar y negociar con grupos culturalmente diversos, comunicándose de forma respetuosa y eficaz de acuerdo con las múltiples identidades de los participantes, fomentando actitudes de respeto, tolerancia, diálogo y enriquecimiento mutuo, constatando que la verdad es plural y relativa y que la diversidad puede ser fuente de riqueza.',
          },
          {
            type: 'table',
            title: 'Dimensiones de la competencia cultural ★',
            data: {
              headers: ['Dimensión', 'Qué implica'],
              rows: [
                ['Conocimiento cultural', 'Conocer las características, valores, creencias, historia y normas de otras culturas, y factores como el poder, la pobreza y la inequidad'],
                ['Conciencia cultural', 'Reconocer y examinar los propios prejuicios y sesgos para no proyectar nuestras normas: «¿desde dónde me relaciono con el otro?»'],
                ['Habilidades interpersonales o culturales', 'Captar cómo el paciente percibe su situación y desarrollar intervenciones culturalmente apropiadas; empatía, escucha activa y adaptabilidad'],
                ['Actitudes abiertas', 'Mentalidad receptiva, respeto y curiosidad por las prácticas y creencias de otros'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Otros aspectos que se profundizan',
            items: [
              'ENCUENTRO cultural: la interacción y convivencia con personas de otras procedencias, que permite refinar las propias creencias.',
              'DESEO cultural: la apertura y flexibilidad del médico para aceptar diferencias, encontrar similitudes y aprender de otros.',
              'SENSIBILIDAD cultural: relaciones entre iguales basadas en confianza, aceptación, respeto, facilitación y negociación, con una comunicación transcultural eficiente.',
            ],
          },
          {
            type: 'paragraph',
            content: 'El modelo de competencia cultural de LARRY PURNELL representa en círculos concéntricos a la sociedad global, la comunidad, la familia y la persona, y en sus sectores los dominios culturales: comunicación, familia, trabajo, ecología biocultural, comportamientos de riesgo, nutrición, embarazo, rituales de muerte, espiritualidad y prácticas de salud, entre otros.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Competencia cultural en la consulta',
            content: 'Saber qué significa el ayuno del Ramadán permite ajustar los horarios de un medicamento; saber que en algunas culturas evitar el contacto visual es respeto evita interpretarlo como desinterés. Ante un mito como «la insulina deja ciego», se explica que lo que daña la retina es la diabetes mal controlada y que la insulina a tiempo la protege.',
          },
        ],
      },
      {
        id: 'hpc-4',
        number: 4,
        title: 'Competencias interculturales y atención centrada en el paciente',
        keyTerms: ['competencias interculturales', 'atención centrada en el paciente', 'servicio social'],
        blocks: [
          {
            type: 'list',
            title: 'Las competencias interculturales comprenden',
            items: [
              'Identificar la singularidad cultural de la población usuaria de los servicios de salud.',
              'Respetar sus expectativas, expresiones y prácticas en torno al proceso salud-enfermedad-atención.',
              'Comunicarse de forma eficiente y asertiva.',
              'Comprender cómo percibe la población la causalidad y el riesgo.',
              'Conocer los marcos filosóficos, científicos y culturales de otros modelos y prácticas terapéuticas que usa la población.',
            ],
          },
          {
            type: 'note',
            title: 'Lo que hacen bien los curanderos',
            content: 'Usan un lenguaje sencillo y de fácil comprensión. Competencia cultural no es volverse médico tradicional, sino comprender su lógica para dialogar con ellos y con sus pacientes.',
          },
          {
            type: 'steps',
            title: 'Atención centrada en el paciente',
            steps: [
              'Explorar la DOLENCIA (sentimientos, ideas, función, expectativas) y la ENFERMEDAD (historia y examen físico).',
              'Entender a la persona como un todo.',
              'Elaborar un proyecto común: problemas, objetivos, roles y decisiones conjuntas.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Antes de llegar al servicio social',
            content: 'Conviene investigar la comunidad antes de llegar: su historia, su organización y el diagnóstico de salud que hicieron pasantes anteriores. Ya ahí, convivir fuera del consultorio e identificar a los líderes comunitarios abre la puerta a la confianza que ningún tratamiento consigue por sí solo.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-alteridad-rmp',
    title: 'La relación médico-paciente y la alteridad',
    subtitle: 'Definición e historia de la RMP, alteridad, otredad, mismidad e ipseidad; el problema del otro (Laín Entralgo) y los sucesos que lo hicieron aparecer; paradigmas Alter Ego y Alter Tú, Dussel, Levinas y la transmodernidad; motivos del paciente y del médico; autores de la alteridad',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🤝',
    keyPoints: [
      'RMP: interacción entre personas que se produce en el quehacer clínico, constituye el NÚCLEO de la medicina, la inicia el enfermo o su familia y beneficia a ambos ★',
      'ALTERIDAD: condición de ser otro; cambiar la propia perspectiva por la del otro (su cosmovisión, intereses e ideología) sin suponer que la propia es la única posible.',
      'MISMIDAD: permanencia, estabilidad, concordancia, continuidad, corporalidad · IPSEIDAD: se asocia a la idea de sí mismo, pero está ENTRE EL SER EN SÍ Y EL SER PARA SÍ (cambio, inestabilidad, discordancia, discontinuidad, intersubjetividad) ★',
      'Laín Entralgo: el «problema del otro» es tratar con otra persona en la convivencia concreta con ella. Sucesos que lo hicieron aparecer: secularización (Baja Edad Media y Renacimiento), nominalismo (siglos XV y XVI), importancia de la individualidad y descubrimiento de la soledad del hombre en el mundo ★',
      'ALTER EGO: el médico ve al paciente como proyección de sí mismo; lo cosifica y la alteridad se anula · ALTER TÚ: el paciente es un sujeto y el médico se reconoce como «el otro del otro» ★',
      'Dussel: pensar el mundo desde la exterioridad del otro (el oprimido, el pobre); analéctica. Levinas: el otro es lo absolutamente otro.',
      'TRANSMODERNIDAD: nuevo paradigma cultural y social que supera y dialoga con la modernidad y la posmodernidad, y promueve la integración intercultural y el empoderamiento de culturas no occidentales ★',
      'Autores: Krotz = experiencia de lo extraño · Carrasquilla = forma de coexistencia · Buber = formas de descubrirse · Arruda = igualdad entre el yo y el otro · González = ecpatía ★',
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
          {
            type: 'note',
            title: 'Consultorio, hospital, domicilio y máquinas',
            content: 'La RMP cambia según el escenario. En la visita casa por casa, el personal de salud entra a un espacio privado sin que la persona lo haya pedido, así que el vínculo exige respetar ese espacio y responder a las necesidades concretas de cada familia, no a un mensaje uniforme. La tecnología agrega un tercero: la atención a distancia, los robots cuidadores y la inteligencia artificial obligan a preguntarse cómo será el encuentro cuando media una máquina.',
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
                ['Mismidad', 'Condición de ser uno mismo: permanencia, estabilidad, concordancia, continuidad, corporalidad'],
                ['Ipseidad', 'Suele asociarse a la idea de sí mismo, pero se encuentra ENTRE EL SER EN SÍ Y EL SER PARA SÍ: cambio, inestabilidad, discordancia, discontinuidad, intersubjetividad'],
                ['Alteridad (resultado)', 'Empatía, diálogo e identidad'],
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
            content: 'DESCUBRIR AL OTRO es darse cuenta de que no somos una sustancia homogénea y radicalmente extraña a todo lo que no es uno mismo: «yo soy un yo, pero los otros también son yos». Para Pedro Laín Entralgo, el «problema del otro» es la operación de tratar con otra persona en la convivencia concreta con ella. Surge durante la hegemonía del pensamiento religioso cristiano.',
          },
          {
            type: 'list',
            title: 'Sucesos importantes para la aparición del problema del otro',
            items: [
              'Secularización de la existencia del hombre occidental en la Baja Edad Media y el Renacimiento: de una visión teocéntrica a una antropocéntrica.',
              'El auge histórico del nominalismo durante los siglos XV y XVI.',
              'Importancia de la individualidad.',
              'Descubrimiento de la soledad del hombre en el mundo.',
            ],
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
          {
            type: 'definition',
            title: 'Transmodernidad (Dussel)',
            content: 'Nuevo paradigma cultural y social que supera y dialoga con la modernidad y la posmodernidad, y promueve la integración intercultural y el empoderamiento de culturas no occidentales. Abarca lo que está más allá (y también antes) de la herencia de la cultura moderna europeo-norteamericana y sigue vigente en las grandes culturas milenarias no europeas: comunidades indígenas, culturas china, del sudeste asiático, hindú, musulmana y pueblos de África como los bantú. La modernidad europea excluyó y oprimió a los pueblos de la periferia; no hay conocimiento completo si se olvida la relación con los otros.',
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
      {
        id: 'hrm-5',
        number: 5,
        title: 'Autores y perspectivas de la alteridad',
        keyTerms: ['Krotz', 'Carrasquilla', 'Buber', 'ecpatía', 'analéctica'],
        blocks: [
          {
            type: 'table',
            title: 'Perspectivas clásicas',
            data: {
              headers: ['Autor', 'La alteridad es…'],
              rows: [
                ['Platón', 'Una propiedad de las Ideas'],
                ['Aristóteles', 'Diferencia'],
                ['Descartes', 'Surge la crítica al centrarse en el cogito cartesiano'],
                ['Kant', 'Principio moral'],
                ['Hegel', 'Dialéctica'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Perspectivas contemporáneas destacadas',
            data: {
              headers: ['Autor', 'Concepción de la alteridad'],
              rows: [
                ['Dussel', 'Metafísica y praxis liberadora; ANALÉCTICA como método (pensar desde la exterioridad del otro); relacionada con la TOLERANCIA'],
                ['Laing', 'La complementariedad'],
                ['Carrasquilla', 'FORMA DE COEXISTENCIA; elemento esencial de la persona'],
                ['Levinas', 'Sociabilidad que excita, imposición del otro; misterio; resiste por un opuesto'],
                ['Buber', 'FORMAS DE DESCUBRIRSE'],
                ['Krotz', 'EXPERIENCIA DE LO EXTRAÑO'],
                ['López', 'Basada en identidad, diferencia y trascendencia'],
                ['Tellez', 'SENTIDO SOCIAL'],
                ['Arruda', 'IGUALDAD ENTRE EL YO Y EL OTRO'],
                ['García', 'El lenguaje como su estructura'],
                ['Valera', 'PEDAGOGÍA DE LA ALTERIDAD'],
                ['Vigo', 'Involucrada en el proceso de apropiación comprensiva'],
                ['Rodríguez', 'RELACIONADA CON LA DISCAPACIDAD'],
                ['González', 'ECPATÍA: comprender las emociones sin absorberlas'],
                ['Silva', 'EL YO RELATIVO ANTE EL OTRO'],
                ['Diez', 'El estereotipo como negación de su complejidad'],
                ['Aguilar', 'CONDICIÓN DE COMUNIDAD; condición para la hermenéutica'],
                ['Lurbe', 'Necesaria para comprender al enfermo mental'],
                ['Alarcón y Gómez', 'POSIBLE SOLO EN LA RELACIÓN CON LA LIBERTAD DEL OTRO'],
                ['Bautista', 'El otro decide rebelarse a través del diálogo'],
                ['Pérez', 'LA ALTERIDAD NEGADA O EL «YO AUSENTE»'],
                ['Morales', 'PROPUESTA PEDAGÓGICA SUSTENTADA EN EL ACOMPAÑAMIENTO DEL OTRO'],
              ],
            },
          },
          {
            type: 'note',
            content: 'En mayúsculas, las concepciones que la presentación resalta en negritas. Krotz no está en negritas, pero se señaló de forma expresa para el examen.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Ecpatía: acompañar sin hundirse',
            content: 'Comprender las emociones del paciente sin absorberlas permite acompañar a quien sufre sin sufrir de la misma manera, y conservar la capacidad profesional de actuar.',
          },
        ],
      },
    ],
  },
  {
    id: 'humanistica-modelos-rmp',
    title: 'Elementos y modelos de la relación médico-paciente',
    subtitle: 'Estructura según Laín Entralgo, relación y encuentro con el otro, momentos afectivo, cognoscitivo, operativo, ético e histórico-social; diagnóstico y tratamiento; modelos de comunicación; modelos de Watzlawick, Szasz-Hollender, Leary, Veatch y Emanuel y sus críticas; medicina centrada en el paciente y en la persona',
    colorKey: 'humanistica',
    categoria: 'Medicina humanística',
    emoji: '🩺',
    keyPoints: [
      'La RMP es un proceso INTERPERSONAL e INTERSUBJETIVO que enfrenta en una relación dinámica al paciente con el médico, cada uno reconocido como tal ★',
      'Laín Entralgo distingue en la RMP su FIN, su MODO de convivencia, su VÍNCULO y su COMUNICACIÓN ★',
      'El modo combina operaciones OBJETIVANTES (diagnóstico y tratamiento) y COEJECUTIVAS (convivir con el sentido que la enfermedad tiene para el paciente).',
      'Recursos de comunicación: la mirada, la palabra y el silencio, el contacto manual y la relación instrumental.',
      'Momentos: AFECTIVO (amistad médica, transferencia) · COGNOSCITIVO (diagnóstico) · OPERATIVO (tratamiento) · ÉTICO · HISTÓRICO-SOCIAL ★',
      'El diagnóstico es «la configuración cognoscitiva de una relación cuasi diádica entre el médico y el enfermo»; el tratamiento es un ACTO SOCIAL y el alta, un JUICIO ★',
      'Modelos de comunicación: relación DIRECTIVA (autoritario hacia la enfermedad, paternalista hacia el paciente) o FACILITADORA (democrático y deliberativo).',
      'Szasz-Hollender: ACTIVIDAD-PASIVIDAD (coma, urgencia) · ORIENTACIÓN-COOPERACIÓN (infección aguda) · PARTICIPACIÓN MUTUA (enfermedad crónica) ★',
      'Emanuel: PATERNALISTA (guardián) · INFORMATIVO (técnico) · INTERPRETATIVO (consejero) · DELIBERATIVO (amigo o maestro). Autonomía y beneficencia van en sentido inverso; no hay modelos puros ★',
    ],
    sections: [
      {
        id: 'hmo-1',
        number: 1,
        title: 'Estructura de la relación según Laín Entralgo',
        keyTerms: ['operaciones objetivantes', 'operaciones coejecutivas', 'diagnóstico transubjetivo', 'intersubjetivo'],
        blocks: [
          {
            type: 'definition',
            title: 'La RMP como proceso (Vázquez Martínez)',
            content: 'Proceso interpersonal, intersubjetivo y que enfrenta en una relación dinámica al paciente, que se reconoce por lo menos socialmente como tal, con el médico, a quien también se reconoce como tal.',
          },
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
        id: 'hmo-6',
        number: 2,
        title: 'Relación con el otro y encuentro con el otro',
        keyTerms: ['confrontación', 'acompañamiento', 'práctica médica'],
        blocks: [
          {
            type: 'comparison',
            title: 'Modelo conceptual de la RMP',
            left: { title: 'RELACIÓN con el otro', items: ['Confrontación', 'La empujan la especialización, la automatización, la racionalidad técnica y la ciencia moderna', 'Puede reducir al paciente a su biología'] },
            right: { title: 'ENCUENTRO con el otro', items: ['Acompañamiento', 'Toma en cuenta normas, costumbres, creencias y formas de vida', 'Ayudar y aconsejar al sufriente'] },
          },
          {
            type: 'paragraph',
            content: 'En el centro está la PRÁCTICA MÉDICA, que exige comprensión, colaboración, responsabilidad y solidaridad: saberse en el mundo y estar en el mundo. Las dos perspectivas aparecen en la práctica; el encuentro es la que reconoce a la persona que vive la enfermedad.',
          },
        ],
      },
      {
        id: 'hmo-2',
        number: 3,
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
        id: 'hmo-7',
        number: 4,
        title: 'El diagnóstico y el tratamiento a detalle',
        keyTerms: ['relación cuasi diádica', 'concepción clásica del diagnóstico', 'acto social', 'plan de vida', 'consejo'],
        blocks: [
          {
            type: 'definition',
            title: 'Diagnóstico médico',
            content: '«La configuración cognoscitiva de una relación cuasi diádica entre el médico y el enfermo». No es un acto individual del médico que nombra lo que padece el enfermo, sino una interacción entre dos personas inmersas en una cultura, impregnada por el concepto de salud y enfermedad de su época.',
          },
          {
            type: 'list',
            title: 'Supuestos de la concepción clásica del diagnóstico',
            items: [
              'Objetivación del paciente para nombrar la enfermedad.',
              'Tipificación de la enfermedad desde un enfoque anatomoclínico, fisiopatológico o etiopatológico.',
              'Inducción lógica.',
            ],
          },
          {
            type: 'list',
            title: 'Momento operativo',
            items: [
              'El tratamiento comienza realmente antes de que se instituya formalmente.',
              'Al prescribir, el médico puede recrear o remodelar la vida del paciente: indica un tratamiento y un PLAN DE VIDA.',
              'El tratamiento es un ACTO SOCIAL y el alta, un JUICIO que devuelve al enfermo a la sociedad con la designación de hombre sano.',
              'Componentes esenciales de la acción terapéutica: el médico, el tratamiento (farmacológico, quirúrgico, higiénico-dietético) y el paciente.',
              'El consuelo y el consejo son parte del tratamiento. Aconsejar exige conocer al paciente y su contexto; con Gadamer: relaciones yo-yo, tú-yo y yo-nosotros.',
            ],
          },
          {
            type: 'list',
            title: 'Momento histórico-social: lo que hoy pesa en la relación',
            items: [
              'Tecnología y especialización; atención repartida entre muchos especialistas.',
              'Factores económicos y de acceso; seguros.',
              'Pacientes más informados y exigentes; judicialización de la medicina.',
              'Inteligencia artificial.',
              'Riesgos: despersonalización, desconfianza, frustración e insatisfacción.',
            ],
          },
        ],
      },
      {
        id: 'hmo-8',
        number: 5,
        title: 'Práctica clínica y humanismo: la comunicación',
        keyTerms: ['relación directiva', 'relación facilitadora', 'modelo autoritario', 'modelo democrático'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Las experiencias del paciente influyen en el resultado de la comunicación: las positivas refuerzan su integridad; las negativas, su vulnerabilidad. El ÉXITO DIAGNÓSTICO Y TERAPÉUTICO requiere que converjan los conocimientos teóricos, los conocimientos técnicos y la comunicación médico-paciente.',
          },
          {
            type: 'table',
            title: 'Modelos de comunicación',
            data: {
              headers: ['', 'Orientada a la enfermedad', 'Orientada al paciente'],
              rows: [
                ['Relación DIRECTIVA', 'Modelo AUTORITARIO', 'Modelo PATERNALISTA'],
                ['Relación FACILITADORA', 'Modelo DEMOCRÁTICO', 'Modelo DELIBERATIVO'],
              ],
            },
          },
        ],
      },
      {
        id: 'hmo-3',
        number: 6,
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
                ['Ingenieril', 'Mecánico', 'Hechos y no valores: presenta los datos y el paciente decide; suspende sus juicios de valor y protege la libertad personal'],
                ['Sacerdotal', 'Sacerdote', 'Produce el bien y no daña; preserva la dignidad; conduce hacia el bien y mantiene sus promesas'],
                ['De colegas', 'Socio', 'Confianza e igualdad; comunidad de intereses y metas; dice la verdad'],
                ['Contractual', 'Comparte responsabilidades', 'El paciente conserva la decisión final; el médico negocia valores y obligaciones y preserva la dignidad individual'],
              ],
            },
          },
        ],
      },
      {
        id: 'hmo-4',
        number: 7,
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
        id: 'hmo-9',
        number: 8,
        title: 'Críticas a los modelos de Emanuel',
        keyTerms: ['no hay modelos puros'],
        blocks: [
          {
            type: 'table',
            title: 'Límites de cada modelo',
            data: {
              headers: ['Modelo', 'Crítica'],
              rows: [
                ['Paternalista', 'Justificable solo en urgencias, cuando el tiempo para informar es vital; fuera de ellas no se puede asumir que médico y paciente tengan los mismos valores'],
                ['Informativo', 'El paciente valora la eficiencia técnica pero rechaza al médico distante; perpetúa la especialización y la práctica impersonal'],
                ['Interpretativo', 'Es difícil que el médico no imponga sus valores; el paciente con valores poco claros acepta la imposición y el modelo se vuelve paternalista'],
                ['Deliberativo', 'Es cuestionable que el médico juzgue los valores del paciente; los valores del médico no deben distorsionar la decisión'],
              ],
            },
          },
          {
            type: 'note',
            content: 'No hay modelos puros: el médico adopta tendencias según el escenario (urgencias, consulta externa, hospitalización, enfermedad crónica, paciente terminal o recién nacido).',
          },
        ],
      },
      {
        id: 'hmo-5',
        number: 9,
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
          {
            type: 'list',
            title: 'Principios de la atención centrada en el paciente y la familia',
            items: [
              'Tratar a las personas con respeto y dignidad.',
              'Compartir información completa e imparcial con los pacientes y sus familias.',
              'Alentar y apoyar su participación en el cuidado y la toma de decisiones.',
              'Colaborar entre pacientes, familiares y proveedores.',
            ],
          },
          {
            type: 'comparison',
            title: 'Medicina basada en evidencia y medicina centrada en el paciente',
            left: { title: 'Basada en evidencia', items: ['Generalización', 'Anclada en la investigación', 'Decisiones regulatorias (eficacia)', 'Resultados para el paciente promedio', 'Análisis de semejanzas y agregación de casos', 'Ensayo clínico; autoridad del médico'] },
            right: { title: 'Centrada en el paciente', items: ['Personalización', 'Anclada en la práctica', 'Decisiones clínicas (efectividad)', 'Resultados para cada paciente', 'Análisis de diferencias y desagregación en subgrupos', 'Mayor valor a la observación y a las preferencias del paciente'] },
          },
          {
            type: 'note',
            content: 'Se integran en la investigación orientada al paciente: combina observación y experimento, busca el beneficio del paciente individual y aplica rápido los resultados.',
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
