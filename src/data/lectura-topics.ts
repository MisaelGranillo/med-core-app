import type { Topic } from '../types'

export const lecturaTopics: Topic[] = [
  {
    id: 'comunicacion',
    title: 'Introducción a la Comunicación y el Lenguaje',
    subtitle: 'Fundamentos esenciales para la comprensión e interacción en las ciencias de la salud',
    colorKey: 'comunicacion',
    emoji: '💬',
    keyPoints: [
      'La comunicación es un proceso intencional que requiere de elementos esenciales.',
      'El lenguaje es una facultad humana que utiliza códigos y se concreta en lenguas específicas.',
      'Existen diversos tipos y funciones del lenguaje que se usan en diferentes situaciones.',
      'El lenguaje no verbal complementa y, a veces, refuerza el mensaje verbal.',
      'Comprender estos conceptos mejora la interacción humana y es fundamental en el ámbito de la salud.',
    ],
    sections: [
      {
        id: 'com-1', number: 1, title: 'Definición de Comunicación (RAE)',
        keyTerms: ['comunicación', 'RAE', 'señales', 'código', 'emisor', 'receptor'],
        blocks: [
          { type: 'definition', title: 'Definición de la RAE', content: '"Transmisión de señales mediante un código común al emisor y al receptor."' },
          { type: 'list', title: 'Características de la comunicación',
            items: [
              'Implica un proceso intencional.',
              'Requiere la existencia de al menos dos participantes.',
              'Tiene una finalidad: informar, expresar, persuadir, etc.',
            ],
          },
        ],
      },
      {
        id: 'com-2', number: 2, title: 'Los 6 Elementos del Acto Comunicativo',
        keyTerms: ['emisor', 'receptor', 'mensaje', 'canal', 'código', 'contexto', 'retroalimentación', 'Jakobson'],
        blocks: [
          { type: 'table', title: 'Elementos del acto comunicativo',
            data: {
              headers: ['Elemento', 'Definición'],
              rows: [
                ['EMISOR', 'Quien envía el mensaje.'],
                ['RECEPTOR', 'Quien recibe e interpreta el mensaje.'],
                ['MENSAJE', 'La información o contenido que se transmite.'],
                ['CANAL', 'El medio físico o sensorial por el que circula el mensaje.'],
                ['CÓDIGO', 'Conjunto de reglas o signos compartidos que permiten comprender el mensaje.'],
                ['CONTEXTO', 'Situación, tiempo, lugar y circunstancias que influyen en la interpretación.'],
                ['RETROALIMENTACIÓN', 'Respuesta del receptor al emisor tras recibir el mensaje.'],
              ],
            },
          },
        ],
      },
      {
        id: 'com-3', number: 3, title: 'Comunicación, Lenguaje y Lengua',
        keyTerms: ['comunicación', 'lenguaje', 'lengua', 'distinción', 'español', 'idioma'],
        blocks: [
          { type: 'table', title: 'Diferencias conceptuales',
            data: {
              headers: ['Término', 'Definición', 'Características clave'],
              rows: [
                ['COMUNICACIÓN', 'Proceso mediante el cual los seres humanos intercambian información, ideas y sentimientos.', 'Proceso amplio y dinámico. Puede ser verbal o no verbal. Involucra intención y contexto.'],
                ['LENGUAJE', 'Capacidad humana de expresar y comprender ideas mediante un sistema de signos.', 'Facultad mental y social. Base del pensamiento y la comunicación. Puede manifestarse de formas diversas.'],
                ['LENGUA', 'Sistema de signos lingüísticos compartido por una comunidad para comunicarse.', 'Conjunto de reglas y elementos gramaticales. Es específica de cada comunidad (ej. español).'],
              ],
            },
          },
          { type: 'note', content: 'La comunicación es el fenómeno más amplio; el lenguaje es una de sus formas; la lengua es el sistema concreto que usa una comunidad.' },
        ],
      },
      {
        id: 'com-4', number: 4, title: 'Los 5 Tipos de Lenguaje',
        keyTerms: ['signos', 'señales', 'señas', 'signos lingüísticos', 'símbolos', 'lenguaje de señas'],
        blocks: [
          { type: 'table', title: 'Clasificación de los tipos de lenguaje',
            data: {
              headers: ['Tipo', 'Descripción', 'Ejemplo'],
              rows: [
                ['1. SIGNOS', 'Representaciones convencionales que transmiten un significado.', 'Señal de tránsito "Alto".'],
                ['2. SEÑALES', 'Indicaciones que transmiten información de manera no convencional.', 'El humo indica la presencia de fuego.'],
                ['3. SEÑAS', 'Gestos o movimientos que comunican ideas.', 'Formal: lengua de señas mexicana (LSM). Informal: guiño, saludo.'],
                ['4. SIGNOS LINGÜÍSTICOS', 'Palabras y reglas gramaticales que conforman una lengua.', 'La palabra "salud" en español.'],
                ['5. SÍMBOLOS', 'Signos arbitrarios que representan ideas abstractas o valores culturales.', 'La cruz roja = ayuda humanitaria.'],
              ],
            },
          },
        ],
      },
      {
        id: 'com-5', number: 5, title: 'Las 6 Funciones del Lenguaje (Roman Jakobson)',
        keyTerms: ['función emotiva', 'función referencial', 'función apelativa', 'función fática', 'función metalingüística', 'función poética', 'Jakobson'],
        blocks: [
          { type: 'table', title: 'Funciones del lenguaje según Jakobson',
            data: {
              headers: ['Función', 'Enfoque', '¿Qué busca?', 'Ejemplo'],
              rows: [
                ['EMOTIVA (o Expresiva)', 'Emisor', 'Expresar sentimientos, emociones, estados de ánimo.', '"¡Estoy muy feliz por tu logro!"'],
                ['REFERENCIAL (o Representativa)', 'Contexto', 'Informar sobre hechos, objetos o realidades.', '"La presión arterial normal es 120/80 mmHg."'],
                ['APELATIVA (o Conativa)', 'Receptor', 'Influir, persuadir o provocar una acción en el receptor.', '"Por favor, toma tu medicamento."'],
                ['FÁTICA (o de Contacto)', 'Canal', 'Iniciar, mantener o verificar la comunicación.', '"¿Me escuchas? ¿Todo bien?"'],
                ['METALINGÜÍSTICA', 'Código', 'Hablar del código mismo, aclarar el significado de las palabras.', '"La palabra \'anemia\' significa falta de hemoglobina."'],
                ['POÉTICA (o Estética)', 'Mensaje', 'Embellecer el mensaje, resaltar su forma.', '"Tus ojos son dos luceros que iluminan mi vida."'],
              ],
            },
          },
        ],
      },
      {
        id: 'com-6', number: 6, title: 'Lenguaje Verbal vs. No Verbal',
        keyTerms: ['lenguaje verbal', 'lenguaje no verbal', 'gestos', 'expresión facial', 'postura corporal', 'paralenguaje'],
        blocks: [
          { type: 'comparison',
            left: {
              title: 'LENGUAJE VERBAL',
              items: [
                'Utiliza palabras habladas o escritas para comunicar ideas.',
                'Estructurado y gramatical.',
                'Depende de una lengua (código lingüístico).',
                'Ejemplos: conversación, lectura, escritura, discurso.',
              ],
            },
            right: {
              title: 'LENGUAJE NO VERBAL',
              items: [
                'Utiliza gestos, expresiones, movimientos, posturas y otros signos no lingüísticos.',
                'Universal en gran medida.',
                'Acompaña y refuerza el mensaje verbal.',
                'GESTOS: movimientos de manos, cabeza.',
                'EXPRESIÓN FACIAL: comunica emociones.',
                'POSTURA CORPORAL: refleja seguridad, interés, cansancio.',
              ],
            },
          },
        ],
      },
      {
        id: 'com-7', number: 7, title: 'Niveles del Uso del Lenguaje',
        keyTerms: ['nivel pragmático', 'nivel semántico', 'nivel sintáctico', 'nivel fonológico', 'uso del lenguaje'],
        blocks: [
          { type: 'table', title: 'Niveles del uso del lenguaje',
            data: {
              headers: ['Nivel', 'Enfoque', 'Descripción'],
              rows: [
                ['PRAGMÁTICO (Uso)', 'Contexto', 'Uso adecuado del lenguaje según el contexto social, cultural y situacional.'],
                ['SEMÁNTICO (Significado)', 'Significado', 'Significado de las palabras y las combinaciones de estas.'],
                ['SINTÁCTICO (Estructura)', 'Estructura', 'Orden y relación de las palabras para formar oraciones correctas.'],
                ['FONOLÓGICO (Sonido)', 'Sonido', 'Sonidos del habla y su organización en sílabas y fonemas.'],
              ],
            },
          },
        ],
      },
      {
        id: 'com-8', number: 8, title: 'Importancia en Ciencias de la Salud',
        keyTerms: ['comunicación terapéutica', 'historia clínica', 'adherencia', 'empatía', 'seguridad del paciente'],
        blocks: [
          { type: 'keypoints', title: 'Por qué importa la comunicación en salud',
            items: [
              'Permite una comunicación efectiva entre profesionales, pacientes y equipos de salud.',
              'Favorece la empatía, escucha activa y relación terapéutica.',
              'Es clave para la elaboración de historias clínicas precisas y la educación en salud.',
              'Reduce errores, mejora la adherencia al tratamiento y la seguridad del paciente.',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'lectoescritura',
    title: 'El Lenguaje de la Lectoescritura',
    subtitle: 'Herramientas lingüísticas para comprender, interpretar y producir conocimiento',
    colorKey: 'lectoescritura',
    emoji: '📚',
    keyPoints: [
      'El signo lingüístico une un significante (forma) con un significado (idea).',
      'El lenguaje se caracteriza por ser lineal, arbitrario y articulado.',
      'La doble articulación permite formar palabras a partir de fonemas sin significado.',
      'La lectoescritura universitaria implica leer críticamente y escribir con claridad.',
      'Existen distintos tipos de lectura según el propósito y el nivel de profundidad.',
      'El enfoque de Carlino integra análisis, síntesis, argumentación y producción.',
    ],
    sections: [
      {
        id: 'lec-1', number: 1, title: 'Signo Lingüístico',
        keyTerms: ['signo lingüístico', 'Saussure', 'significante', 'significado', 'arbitrario', 'unidad básica'],
        blocks: [
          { type: 'paragraph', content: 'Según Losada (2013), el signo lingüístico es la unidad básica de la comunicación verbal.' },
          { type: 'definition', title: 'Definición', content: '"Señal perceptible que remite a un significado compartido por una comunidad."' },
          { type: 'steps', title: 'Componentes del signo lingüístico',
            steps: [
              'PERCEPTIBLE (Significante): Lo que se oye o se ve — la forma material del signo.',
              'SIGNO LINGÜÍSTICO: La unidad completa que combina significante y significado.',
              'SIGNIFICADO: La idea, concepto o representación mental que evoca el significante.',
            ],
          },
        ],
      },
      {
        id: 'lec-2', number: 2, title: 'Significante',
        keyTerms: ['significante', 'imagen acústica', 'imagen visual', 'fonema', 'forma sensorial'],
        blocks: [
          { type: 'paragraph', content: 'Parte material o física del signo. Es la forma sensorial que percibimos (imagen acústica o visual).' },
          { type: 'definition', title: 'De Saussure', content: '"El significante es la imagen acústica o la imagen visual del signo."' },
          { type: 'note', content: 'Ejemplo — palabra "perro": La secuencia de sonidos /p/ /e/ /r/ /r/ /o/ es el significante (lo que se oye o lee).' },
        ],
      },
      {
        id: 'lec-3', number: 3, title: 'Significado',
        keyTerms: ['significado', 'concepto', 'idea mental', 'representación', 'referente'],
        blocks: [
          { type: 'paragraph', content: 'Parte conceptual o mental del signo. Es la idea, el concepto o la representación mental que el significante evoca.' },
          { type: 'note', content: 'Ejemplo — palabra "perro": El significado es la idea mental del animal doméstico conocido como "perro". No es el animal real, sino el concepto en la mente.' },
        ],
      },
      {
        id: 'lec-4', number: 4, title: 'Características del Signo Lingüístico',
        keyTerms: ['lineal', 'arbitrario', 'articulado', 'convención social', 'secuencia temporal', 'fonema'],
        blocks: [
          { type: 'table', title: 'Características del signo lingüístico',
            data: {
              headers: ['Característica', 'Definición', 'Ejemplo'],
              rows: [
                ['LINEAL', 'Se produce en una secuencia temporal; sus elementos se suceden en el tiempo.', 'La palabra "casa" se pronuncia: /k/a/s/a/ — un sonido tras otro.'],
                ['ARBITRARIO', 'No existe relación natural entre el significante y el significado; es una convención social.', 'No hay nada en los sonidos /p/e/r/r/o/ que "obligue" a que sea un perro.'],
                ['CARÁCTER ARTICULADO', 'El lenguaje se construye con unidades menores que se combinan para formar unidades mayores.', 'Fonemas → sílabas → palabras → oraciones → textos.'],
              ],
            },
          },
        ],
      },
      {
        id: 'lec-5', number: 5, title: 'Doble Articulación del Lenguaje (De Saussure)',
        keyTerms: ['doble articulación', 'primera articulación', 'segunda articulación', 'morfema', 'fonema', 'unidad significativa'],
        blocks: [
          { type: 'paragraph', content: 'El lenguaje está organizado en dos niveles jerárquicos.' },
          { type: 'comparison',
            left: {
              title: '1ª Articulación (Unidades CON significado)',
              items: ['Unidades significativas: palabras, morfemas, oraciones.', 'Ejemplo: "salud", "bienestar", "enfermedad"'],
            },
            right: {
              title: '2ª Articulación (Unidades SIN significado)',
              items: ['Unidades mínimas llamadas fonemas.', 'Ejemplo: /s/ /a/ /l/ /u/ /d/ — sonidos sin significado propio.'],
            },
          },
          { type: 'note', content: 'Las unidades de la 2ª articulación (fonemas) no tienen significado por sí solas, pero permiten formar unidades con significado en la 1ª articulación.' },
        ],
      },
      {
        id: 'lec-6', number: 6, title: 'Lectoescritura Universitaria (Ferreiro)',
        keyTerms: ['Ferreiro', 'lectura crítica', 'comprensión profunda', 'escritura organizada', 'creatividad', 'pensamiento crítico'],
        blocks: [
          { type: 'list', title: 'Pilares de la lectoescritura universitaria según Ferreiro',
            items: [
              'LECTURA CRÍTICA: Implica analizar, cuestionar y evaluar la información para construir conocimiento propio.',
              'COMPRENSIÓN PROFUNDA: Va más allá de la decodificación; busca entender ideas, relaciones y propósitos del texto.',
              'ESCRITURA ORGANIZADA: Expresar ideas con claridad, coherencia y estructura adecuada al contexto académico.',
              'CREATIVIDAD Y PENSAMIENTO: Generar nuevas ideas y soluciones desde la información leída y comprendida.',
            ],
          },
        ],
      },
      {
        id: 'lec-7', number: 7, title: 'Tipos de Lectura Académica',
        keyTerms: ['lectura extensiva', 'lectura intensiva', 'lectura global', 'lectura analítica', 'comprensión lectora'],
        blocks: [
          { type: 'comparison',
            left: {
              title: 'LECTURA EXTENSIVA (Global o recreativa)',
              items: [
                'Se realiza para obtener una visión general del texto.',
                'Es fluida, rápida y continua.',
                'Busca el sentido global, ideas principales.',
                'Finalidad: información, cultura, placer.',
                'Ej: lectura de artículos, novelas, reportajes.',
              ],
            },
            right: {
              title: 'LECTURA INTENSIVA (Analítica o de estudio)',
              items: [
                'Se realiza para comprender en profundidad.',
                'Es lenta, detallada y reflexiva.',
                'Analiza partes, argumentos, evidencias y estructura.',
                'Finalidad: estudio, investigación, aprendizaje.',
                'Ej: textos científicos, manuales, artículos académicos.',
              ],
            },
          },
        ],
      },
      {
        id: 'lec-8', number: 8, title: 'Enfoque de Carlino para la Lectoescritura Académica',
        keyTerms: ['Carlino', 'análisis crítico', 'producción académica', 'argumentación', 'síntesis', 'escritura académica'],
        blocks: [
          { type: 'steps', title: 'Proceso integral de Carlino',
            steps: [
              'LEER con propósito — saber qué busco en el texto.',
              'COMPRENDER con profundidad — más allá de las palabras.',
              'PENSAR críticamente — cuestionar, comparar e interpretar.',
              'ESCRIBIR con claridad — producción con rigor y adecuación.',
              'COMUNICAR con impacto — transmitir el conocimiento construido.',
            ],
          },
          { type: 'list', title: 'Componentes del enfoque',
            items: [
              'ANÁLISIS CRÍTICO: Cuestionar, comparar e interpretar la información.',
              'PRODUCCIÓN ACADÉMICA: Escribir con propósito, rigor y adecuación a la disciplina.',
              'ARGUMENTACIÓN: Sustentar posturas con evidencias y razonamiento lógico.',
              'SÍNTESIS: Integrar ideas principales y generar conclusiones.',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'gramatica',
    title: 'Gramática',
    subtitle: 'Estructura, uso y reglas para una comunicación clara y precisa',
    colorKey: 'gramatica',
    emoji: '✍️',
    keyPoints: [
      'La gramática estructura nuestras ideas y da claridad al mensaje.',
      'Conocer las categorías gramaticales mejora la comprensión y la expresión.',
      'La correcta acentuación y ortografía evitan ambigüedades.',
      'Distinguir diptongo e hiato ayuda a pronunciar y escribir correctamente.',
      'Usar adecuadamente los signos de puntuación da coherencia y sentido al texto.',
      'La lectura y la escritura críticas son esenciales en la formación universitaria.',
    ],
    sections: [
      {
        id: 'gra-1', number: 1, title: 'Gramática Funcional',
        keyTerms: ['gramática funcional', 'función', 'uso comunicativo', 'contexto', 'forma lingüística'],
        blocks: [
          { type: 'paragraph', content: 'Es el estudio de la estructura gramatical considerando su función y su relación con el uso comunicativo real.' },
          { type: 'keypoints', title: 'Características',
            items: [
              'Se centra en el significado y considera el contexto.',
              'Explica cómo y por qué usamos las formas lingüísticas.',
              'Favorece la comprensión y la producción efectiva de textos.',
            ],
          },
          { type: 'definition', title: 'Cita', content: '"El acento es el alma del discurso." — Rousseau' },
        ],
      },
      {
        id: 'gra-2', number: 2, title: 'Las 9 Categorías Gramaticales',
        keyTerms: ['sustantivo', 'verbo', 'adjetivo', 'adverbio', 'artículo', 'pronombre', 'preposición', 'conjunción', 'interjección'],
        blocks: [
          { type: 'table', title: 'Categorías gramaticales y sus funciones',
            data: {
              headers: ['Categoría', 'Función principal', 'Ejemplo'],
              rows: [
                ['SUSTANTIVO (Nombre)', 'Nombra personas, objetos, ideas o lugares.', 'médico, célula, hospital'],
                ['VERBO', 'Expresa acciones, procesos o estados.', 'estudia, analizó, existe'],
                ['ADJETIVO', 'Califica o determina al sustantivo.', 'humano, clínico, importante'],
                ['ADVERBIO', 'Modifica al verbo, adjetivo u otro adverbio.', 'rápidamente, muy, aquí'],
                ['ARTÍCULO', 'Determina al sustantivo.', 'el, la, los, las, un, una'],
                ['PRONOMBRE', 'Sustituye al sustantivo.', 'él, ella, nosotros, este, aquello'],
                ['PREPOSICIÓN', 'Relaciona palabras entre sí.', 'de, en, a, con, por, para'],
                ['CONJUNCIÓN', 'Une palabras, frases u oraciones.', 'y, pero, porque, aunque, si'],
                ['INTERJECCIÓN', 'Expresa emociones o sentimientos.', '¡ah!, ¡ay!, ¡oh!, ¡bien!'],
              ],
            },
          },
        ],
      },
      {
        id: 'gra-3', number: 3, title: 'El Enunciado: Sujeto + Verbo + Predicado',
        keyTerms: ['enunciado', 'sujeto', 'verbo', 'predicado', 'oración', 'estructura gramatical'],
        blocks: [
          { type: 'paragraph', content: 'El enunciado es la unidad mínima de comunicación con sentido completo. Consta de SUJETO (¿Quién realiza la acción?) + VERBO (Acción o estado) + PREDICADO (Lo que se dice del sujeto).' },
          { type: 'list', title: 'Ejemplos (tomados de la novela "La Tregua" de Mario Benedetti)',
            items: [
              '"Martín Santomé leyó la carta." — Sujeto: Martín Santomé | Verbo: leyó | Predicado: la carta',
              '"La lluvia parecía acompañar su tristeza." — Sujeto: La lluvia | Verbo: parecía | Predicado: acompañar su tristeza',
              '"Él decidió no responder." — Sujeto: Él | Verbo: decidió | Predicado: no responder',
            ],
          },
          { type: 'note', content: 'El orden más común es Sujeto – Verbo – Predicado, pero puede variar sin cambiar el sentido.' },
        ],
      },
      {
        id: 'gra-4', number: 4, title: 'Acentuación: Tipos',
        keyTerms: ['acento prosódico', 'acento ortográfico', 'tilde', 'acento diacrítico', 'monosílabos'],
        blocks: [
          { type: 'table', title: 'Tipos de acento',
            data: {
              headers: ['Tipo', 'Descripción', 'Ejemplo'],
              rows: [
                ['PROSÓDICA', 'Sílabas que se pronuncian con mayor fuerza (sin tilde necesariamente).', 'CAsa, meDIco'],
                ['ORTOGRÁFICA', 'Se marca con tilde según reglas ortográficas.', 'médico, canción'],
                ['DIACRÍTICA', 'La tilde distingue palabras que se escriben igual pero tienen distinto significado.', 'tú/tu, él/el, sé/se'],
                ['MONOSÍLABOS', 'No llevan tilde por regla general (excepto diacrítica).', 'fe, sol, mar → sé/se, tú/tu'],
              ],
            },
          },
        ],
      },
      {
        id: 'gra-5', number: 5, title: 'Clasificación de Palabras según su Acento',
        keyTerms: ['palabras agudas', 'palabras graves', 'palabras llanas', 'palabras esdrújulas', 'palabras sobreesdrújulas', 'tilde', 'acento'],
        blocks: [
          { type: 'table', title: 'Reglas de acentuación ortográfica',
            data: {
              headers: ['Tipo', 'Acento en...', 'Llevan tilde si...', 'Ejemplos'],
              rows: [
                ['AGUDAS', 'Última sílaba', 'Terminan en vocal, n o s.', 'café✓, corazón✓, reloj✗, feliz✗'],
                ['GRAVES o LLANAS', 'Penúltima sílaba', 'Terminan en consonante que NO sea n o s.', 'árbol✓, lápiz✓, mesa✗, camino✗'],
                ['ESDRÚJULAS', 'Antepenúltima sílaba', 'Siempre llevan tilde.', 'médico✓, fácil✓, práctico✓'],
                ['SOBREESDRÚJULAS', 'Antes de la antepenúltima', 'Siempre llevan tilde.', 'dígame✓, cómetelo✓, explícaselo✓'],
              ],
            },
          },
          { type: 'note', content: 'La correcta acentuación mejora la comprensión y la ortografía.' },
        ],
      },
      {
        id: 'gra-6', number: 6, title: 'Reglas Ortográficas Básicas',
        keyTerms: ['B y V', 'Y y LL', 'H muda', 'ortografía', 'escritura correcta'],
        blocks: [
          { type: 'list', title: 'Reglas B / V',
            items: [
              'Se escribe B después de m: cambio, hambre.',
              'Se escribe B en los verbos terminados en -bir (excepto hervir, servir, vivir) y sus derivados: escribir, describir, recibo.',
              'Se escribe V en los verbos terminados en -ver: volver, resolver, prever.',
            ],
          },
          { type: 'list', title: 'Reglas Y / LL',
            items: [
              'Se escribe Y en palabras que terminan en -y: ley, rey, buey.',
              'Se escribe Y en diptongos y triptongos: haya, muy, buey.',
              'Se escribe LL en palabras derivadas de otras que llevan ll: calle→callejón, llamar→llamada.',
            ],
          },
          { type: 'list', title: 'Reglas H',
            items: [
              'La H es muda: no se pronuncia.',
              'Se escribe H al inicio de palabras: hospital, historia.',
              'Indica de C si no suena la /k/: hecho, coche.',
              '¡OJO! No todas las reglas tienen excepciones, pero siempre hay que consultar el diccionario.',
            ],
          },
        ],
      },
      {
        id: 'gra-7', number: 7, title: 'Diptongo e Hiato',
        keyTerms: ['diptongo', 'hiato', 'vocal abierta', 'vocal cerrada', 'sílaba', 'separación silábica'],
        blocks: [
          { type: 'comparison',
            left: {
              title: 'DIPTONGO (dos vocales en la MISMA sílaba)',
              items: [
                'Ocurre cuando dos vocales que podrían formar diptongo se pronuncian juntas.',
                'Vocal cerrada (i, u) + vocal abierta (a, e, o) pronunciadas juntas.',
                'Ejemplos: cielo (cie-lo), cuidado (cui-da-do), fuerte (fuer-te).',
              ],
            },
            right: {
              title: 'HIATO (dos vocales en sílabas DISTINTAS)',
              items: [
                'Ocurre cuando dos vocales que podrían formar diptongo se separan en sílabas distintas.',
                'Vocal abierta + vocal abierta (a,e,o): caer (ca-er), poeta (po-e-ta).',
                'Vocal cerrada TÓNICA: baúl (ba-úl), raíz (ra-íz), país (pa-ís).',
                'La tilde puede marcar el hiato: país, raíz, baúl.',
              ],
            },
          },
        ],
      },
      {
        id: 'gra-8', number: 8, title: 'Palabras Homófonas',
        keyTerms: ['homófonas', 'ortografía', 'significado', 'contexto', 'uso correcto'],
        blocks: [
          { type: 'paragraph', content: 'Son palabras que suenan igual pero se escriben diferente y tienen significado distinto.' },
          { type: 'table', title: 'Pares homófonos frecuentes',
            data: {
              headers: ['Palabras', 'Significado', 'Ejemplo'],
              rows: [
                ['baca / vaca', 'estructura (auto) / animal', 'La baca del coche / La vaca mugió.'],
                ['haya / aya / allá', 'árbol / niñera / lugar lejano', 'Hay una haya en el parque / Mi aya era cariñosa / Allá está la montaña.'],
                ['votar / botar', 'emitir voto / arrojar, tirar', 'Vamos a votar mañana / No tires basura, bótala en el bote.'],
                ['si / sí', 'condicional / afirmación', 'Si vienes, te espero. / Sí, asistiré a la clase.'],
                ['sé / se', 'saber o pronombre', 'Sé la respuesta. / Él se fue temprano.'],
              ],
            },
          },
          { type: 'note', content: 'El contexto es clave para elegir la palabra correcta.' },
        ],
      },
      {
        id: 'gra-9', number: 9, title: 'Los 7 Signos de Puntuación',
        keyTerms: ['punto', 'coma', 'punto y coma', 'dos puntos', 'puntos suspensivos', 'interrogación', 'exclamación'],
        blocks: [
          { type: 'table', title: 'Signos de puntuación y sus usos',
            data: {
              headers: ['Signo', 'Uso principal', 'Ejemplo'],
              rows: [
                ['PUNTO (.)', 'Indica el final de una oración o enunciado.', 'El paciente mejoró.'],
                ['COMA (,)', 'Separa elementos en una enumeración o aclaraciones.', 'El médico revisó, auscultó y diagnosticó.'],
                ['PUNTO Y COMA (;)', 'Separa oraciones relacionadas sin usar conjunción.', 'Estudió mucho; aprobó el examen.'],
                ['DOS PUNTOS (:)', 'Introducen una explicación, enumeración o cita.', 'Necesito tres cosas: tiempo, calma y fe.'],
                ['PUNTOS SUSPENSIVOS (...)', 'Indican suspensión, duda o continuidad.', 'Había muchas opciones... no sabía cuál elegir.'],
                ['SIGNOS DE INTERROGACIÓN (¿?)', 'Se usan al inicio y final de preguntas directas.', '¿Dónde está el laboratorio?'],
                ['SIGNOS DE EXCLAMACIÓN (¡!)', 'Se usan al inicio y final de exclamaciones.', '¡Excelente trabajo!'],
              ],
            },
          },
        ],
      },
    ],
  },

  {
    id: 'redaccion',
    title: 'Redacción',
    subtitle: 'Escribir con claridad, coherencia y propósito académico',
    colorKey: 'redaccion',
    emoji: '📝',
    keyPoints: [
      'El párrafo es la unidad básica del texto: tiene una idea central y desarrollo coherente.',
      'Existen 8 tipos de párrafo según su función comunicativa.',
      'El proceso de escritura incluye planificación, organización y redacción.',
      'El estilo debe ser claro, consistente y adecuado al propósito.',
      'El tono refleja la actitud del autor y se adapta al contexto.',
      'La escritura académica requiere coherencia, cohesión, citas y conectores.',
      'Reescribir mejora la calidad y el impacto del texto.',
    ],
    sections: [
      {
        id: 'red-1', number: 1, title: '¿Qué es un Párrafo?',
        keyTerms: ['párrafo', 'oración principal', 'oraciones secundarias', 'coherencia', 'cohesión', 'unidad básica'],
        blocks: [
          { type: 'paragraph', content: 'El párrafo es la unidad básica de organización del texto escrito.' },
          { type: 'list', title: 'Estructura del párrafo',
            items: [
              'ORACIÓN PRINCIPAL: La idea central del párrafo.',
              'ORACIONES SECUNDARIAS: Desarrollan, explican o ejemplifican la idea central.',
            ],
          },
          { type: 'comparison',
            left: {
              title: 'COHERENCIA',
              items: ['Las ideas tienen sentido y se relacionan entre sí.', 'El texto avanza de forma lógica y ordenada.'],
            },
            right: {
              title: 'COHESIÓN',
              items: ['Las ideas están unidas por conectores y referentes lingüísticos.', 'Las oraciones se enlazan correctamente.'],
            },
          },
        ],
      },
      {
        id: 'red-2', number: 2, title: '8 Tipos de Párrafo',
        keyTerms: ['párrafo introductorio', 'párrafo informativo', 'párrafo de enlace', 'párrafo conclusión', 'párrafo narrativo', 'párrafo argumentativo', 'párrafo expositivo', 'párrafo definición'],
        blocks: [
          { type: 'table', title: 'Tipos de párrafo según su función',
            data: {
              headers: ['Tipo', 'Función principal', 'Ejemplo de inicio'],
              rows: [
                ['Introductorio', 'Presenta el tema y capta la atención.', '"En la actualidad, es fundamental comprender que..."'],
                ['Informativo', 'Aporta datos y explicaciones. Objetivo y preciso.', '"Según la OMS, la hipertensión afecta a..."'],
                ['Enlace', 'Conecta ideas, párrafos o secciones.', '"Por otro lado, además..."'],
                ['Conclusión', 'Cierra y resume lo expuesto.', '"En conclusión, podemos afirmar que..."'],
                ['Narrativo', 'Cuenta hechos o historias en orden temporal.', '"Una tarde, el paciente comenzó a..."'],
                ['Argumentativo', 'Defiende una tesis con razones.', '"Es necesario considerar que..."'],
                ['Expositivo', 'Explica o describe un tema con objetividad.', '"El sistema inmune se compone de..."'],
                ['Definición', 'Aclara el significado de un término.', '"La diabetes mellitus es..."'],
              ],
            },
          },
        ],
      },
      {
        id: 'red-3', number: 3, title: '3 Pasos del Proceso de Escritura',
        keyTerms: ['planificación', 'organización', 'redacción', 'borrador', 'proceso de escritura', 'tesis'],
        blocks: [
          { type: 'steps', title: 'Proceso de escritura',
            steps: [
              'PLANIFICACIÓN: Definir propósito (¿para qué escribo?). Identificar público (¿a quién me dirijo?). Investigar y reunir información confiable. Delimitar tema y tesis (idea central).',
              'ORGANIZACIÓN: Seleccionar y ordenar ideas. Elaborar esquema o mapa conceptual. Establecer estructura del texto (inicio, desarrollo y cierre). Usar transiciones y conectores.',
              'REDACCIÓN: Escribir el borrador inicial. Buscar claridad, coherencia y precisión. Usar voz activa y lenguaje formal. Revisar ortografía y estilo.',
            ],
          },
        ],
      },
      {
        id: 'red-4', number: 4, title: 'Estilo y Tono',
        keyTerms: ['estilo', 'tono', 'formal', 'informal', 'serio', 'registro', 'voz activa'],
        blocks: [
          { type: 'list', title: 'Características de un buen estilo',
            items: [
              'Claro y preciso.',
              'Adecuado al propósito y público.',
              'Consistente a lo largo del texto.',
              'Evita repeticiones y ambigüedades.',
              'Usa vocabulario apropiado.',
            ],
          },
          { type: 'table', title: 'Tipos de tono',
            data: {
              headers: ['Tono', 'Cuándo usarlo'],
              rows: [
                ['FORMAL', 'Textos académicos, científicos, institucionales.'],
                ['INFORMAL', 'Conversaciones, blogs personales, cartas.'],
                ['SERIO', 'Temas sensibles, informes, análisis críticos.'],
                ['HUMORÍSTICO', 'Textos literarios, columnas de opinión.'],
              ],
            },
          },
          { type: 'note', content: 'El tono debe adaptarse al contexto y propósito comunicativo.' },
        ],
      },
      {
        id: 'red-5', number: 5, title: 'Proceso Académico de Escritura',
        keyTerms: ['esquema argumentativo', 'escritura académica', 'reescritura', 'revisión', 'cohesión académica'],
        blocks: [
          { type: 'steps', title: 'Las 3 etapas del proceso académico',
            steps: [
              'ESQUEMA O PLAN ARGUMENTATIVO: Generar ideas clave. Definir tesis o postura. Organizar argumentos y evidencias. Crear un esquema jerárquico.',
              'ESCRITURA: Desarrollar el esquema en un texto completo. Usar conectores y citas de autores. Mantener coherencia y cohesión.',
              'REESCRITURA: Revisar y evaluar el texto. Corregir errores de forma y contenido. Mejorar estructura, claridad y estilo. Cuidar la ortografía y puntuación.',
            ],
          },
          { type: 'note', content: 'CICLO CONTINUO: La reescritura transforma un buen texto en un excelente texto.' },
        ],
      },
      {
        id: 'red-6', number: 6, title: 'Escritura Académica: Principios Clave',
        keyTerms: ['lenguaje formal', 'coherencia', 'cohesión', 'citas', 'referencias', 'APA', 'conectores'],
        blocks: [
          { type: 'keypoints', title: 'Principios de la escritura académica',
            items: [
              'LENGUAJE FORMAL: Registro adecuado y evitar expresiones coloquiales.',
              'COHERENCIA: Las ideas se relacionan lógicamente y siguen un hilo conductor.',
              'COHESIÓN: Las oraciones y párrafos se unen a través de conectores y referentes.',
              'USO DE FUENTES Y CITAS: Sustentar las ideas con autores confiables y citar correctamente.',
              'CONECTORES: Facilitan la transición y relación entre ideas.',
            ],
          },
          { type: 'table', title: 'Conectores frecuentes por función',
            data: {
              headers: ['Función', 'Conectores'],
              rows: [
                ['Adición', 'además, también, asimismo, por otra parte'],
                ['Causa', 'porque, que, puesto que, debido a'],
                ['Contraste', 'sin embargo, no obstante, aunque, por el contrario'],
                ['Conclusión', 'en conclusión, por tanto, finalmente, en síntesis'],
              ],
            },
          },
        ],
      },
      {
        id: 'red-7', number: 7, title: 'Recursos de Cohesión',
        keyTerms: ['referencia', 'conectores lógicos', 'elipsis', 'sustitución léxica', 'marcadores discursivos', 'pronombres'],
        blocks: [
          { type: 'table', title: 'Recursos de cohesión textual',
            data: {
              headers: ['Recurso', 'Función', 'Ejemplo'],
              rows: [
                ['Referencia', 'Evitar repeticiones con pronombres o sustituciones.', '"El paciente presentó fiebre. Él fue hospitalizado."'],
                ['Conectores lógicos', 'Unir ideas y mostrar relaciones.', '"Por lo tanto, el tratamiento fue efectivo."'],
                ['Elipsis', 'Omitir información ya mencionada.', '"Ana estudia medicina y Luis, enfermería."'],
                ['Sustitución léxica', 'Reemplazar palabras por sinónimos.', '"La enfermedad... el padecimiento..."'],
                ['Marcadores discursivos', 'Organizar el discurso del texto.', '"En primer lugar, en segundo lugar, por último..."'],
              ],
            },
          },
        ],
      },
      {
        id: 'red-8', number: 8, title: 'Puntos Clave de la Redacción',
        keyTerms: ['redacción académica', 'escritura profesional', 'párrafos', 'revisión', 'proceso'],
        blocks: [
          { type: 'keypoints', title: 'Puntos clave',
            items: [
              'El párrafo es la unidad básica del texto: tiene una idea central y desarrollo coherente.',
              'Existen 8 tipos de párrafo según su función comunicativa.',
              'El proceso de escritura incluye planificación, organización y redacción.',
              'El estilo debe ser claro, consistente y adecuado al propósito.',
              'El tono refleja la actitud del autor y se adapta al contexto.',
              'La escritura académica requiere coherencia, cohesión, citas y conectores.',
              'Reescribir mejora la calidad y el impacto del texto.',
            ],
          },
          { type: 'definition', title: 'Para recordar', content: '"Un texto bien escrito no solo informa, sino que comunica con claridad, rigor y propósito." — Escribir bien es pensar mejor.' },
        ],
      },
    ],
  },

  {
    id: 'lenguaje',
    title: 'Usos del Lenguaje Hablado y Escrito',
    subtitle: 'Comunicar eficazmente para aprender, comprender y transformar la realidad',
    colorKey: 'lenguaje',
    emoji: '🗣️',
    keyPoints: [
      'El lenguaje hablado es inmediato, dinámico y depende del contexto.',
      'El lenguaje escrito es permanente, estructurado y permite la reflexión.',
      'Existen diferentes tipos de texto según el propósito y el contexto.',
      'Los géneros literarios ofrecen distintas formas de expresión artística e intelectual.',
      'La lectura crítica implica cuestionar, analizar y evaluar para comprender profundamente.',
      'Seguir un proceso de escritura mejora la calidad de los textos.',
      'Escribir con claridad, coherencia y rigor es esencial en la formación profesional.',
    ],
    sections: [
      {
        id: 'len-1', number: 1, title: 'Lenguaje Hablado',
        keyTerms: ['lenguaje hablado', 'oral', 'efímero', 'espontáneo', 'entonación', 'muletillas'],
        blocks: [
          { type: 'paragraph', content: 'Es la forma oral de comunicación que se produce en tiempo real.' },
          { type: 'keypoints', title: 'Características del lenguaje hablado',
            items: [
              'DINÁMICO: Cambia con el contexto y la situación.',
              'EFÍMERO: Desaparece al terminar la interacción.',
              'ESPONTÁNEO: Se produce sin planificación previa.',
              'Contextos: Conversación cotidiana, entrevistas, diálogos.',
              'Uso de entonación, gestos y expresiones faciales.',
              'Puede presentar repeticiones, muletillas o interrupciones.',
            ],
          },
        ],
      },
      {
        id: 'len-2', number: 2, title: 'Lenguaje Escrito',
        keyTerms: ['lenguaje escrito', 'estructurado', 'perdurable', 'reflexivo', 'planificación', 'normas ortográficas'],
        blocks: [
          { type: 'paragraph', content: 'Es la forma gráfica del lenguaje que permanece en el tiempo.' },
          { type: 'keypoints', title: 'Características del lenguaje escrito',
            items: [
              'ESTRUCTURADO: Requiere organización y planificación.',
              'PERDURABLE: Puede consultarse y conservarse.',
              'REFLEXIVO: Permite revisar y corregir antes de su publicación.',
              'Contextos formales y académicos: ensayos, reportes, artículos, libros.',
              'Uso de normas ortográficas, gramaticales y de puntuación.',
              'Favorece la precisión, la claridad y el rigor en la comunicación.',
            ],
          },
        ],
      },
      {
        id: 'len-3', number: 3, title: '3 Tipos de Texto',
        keyTerms: ['texto literario', 'texto cotidiano', 'texto académico', 'propósito comunicativo', 'registro'],
        blocks: [
          { type: 'table', title: 'Clasificación de tipos de texto',
            data: {
              headers: ['Tipo de texto', 'Propósito', 'Características', 'Ejemplos'],
              rows: [
                ['LITERARIO (Estético)', 'Expresar belleza, emociones e imaginación.', 'Lenguaje figurado, creativo, subjetivo.', 'Cuento, poema, novela, teatro.'],
                ['COTIDIANO (Informal)', 'Comunicar ideas en la vida diaria.', 'Sencillo, directo, varía según el contexto.', 'Conversaciones, mensajes, redes sociales, cartas.'],
                ['ACADÉMICO', 'Informar, explicar o argumentar con rigor.', 'Formal, objetivo, con citas y referencias.', 'Artículos, ensayos, reportes, tesis.'],
              ],
            },
          },
          { type: 'note', content: 'El tipo de texto determina el registro, el vocabulario y la estructura que debemos emplear.' },
        ],
      },
      {
        id: 'len-4', number: 4, title: 'Géneros Literarios Clásicos',
        keyTerms: ['género narrativo', 'género lírico', 'género dramático', 'ensayo', 'novela', 'poesía', 'teatro'],
        blocks: [
          { type: 'table', title: 'Los 4 géneros literarios',
            data: {
              headers: ['Género', 'Subgéneros', 'Descripción'],
              rows: [
                ['NARRATIVO', 'Novela, cuento, crónica', 'Relata hechos reales o imaginarios realizados por personajes en un tiempo y espacio.'],
                ['LÍRICO', 'Poesía, oda, elegía', 'Expresa sentimientos y emociones del autor de manera subjetiva y estética.'],
                ['DRAMÁTICO', 'Tragedia, comedia, drama', 'Representa acciones destinadas a ser representadas por actores ante un público.'],
                ['ENSAYO', 'Literario, filosófico, crítico', 'Expone, reflexiona y argumenta sobre temas diversos con libertad estilística.'],
              ],
            },
          },
        ],
      },
      {
        id: 'len-5', number: 5, title: 'Estrategias de Lectura Crítica',
        keyTerms: ['lectura activa', 'preguntas', 'ideas principales', 'estructura textual', 'contextualización', 'evaluación'],
        blocks: [
          { type: 'list', title: '6 estrategias de lectura crítica',
            items: [
              'LECTURA ACTIVA: Interactúa con el texto; subraya, toma notas, formula hipótesis.',
              'FORMULACIÓN DE PREGUNTAS: Antes, durante y después de la lectura para guiar la comprensión.',
              'IDENTIFICAR IDEAS PRINCIPALES: Distingue lo esencial de lo secundario; resume con tus propias palabras.',
              'ANALIZAR ESTRUCTURA: Reconoce la organización del texto (introducción, desarrollo, conclusión).',
              'CONTEXTUALIZAR: Considera el autor, el contexto histórico, cultural y el propósito del texto.',
              'EVALUAR Y JUZGAR: Valora la validez de los argumentos y la calidad de la evidencia.',
            ],
          },
        ],
      },
      {
        id: 'len-6', number: 6, title: 'Pasos para el Análisis de Textos',
        keyTerms: ['análisis de textos', 'lectura exploratoria', 'idea principal', 'argumentos', 'evaluación crítica', 'síntesis'],
        blocks: [
          { type: 'steps', title: '6 pasos para analizar un texto',
            steps: [
              'LECTURA EXPLORATORIA: Revisa título, subtítulos, imágenes, resumen y conclusiones para tener una visión general.',
              'IDENTIFICAR ESTRUCTURA: Reconoce las partes del texto y su organización.',
              'DETERMINAR IDEA PRINCIPAL: ¿De qué trata el texto? ¿Cuál es el mensaje central del autor?',
              'IDENTIFICAR ARGUMENTOS Y EVIDENCIAS: Detecta las ideas secundarias que sustentan la tesis.',
              'EVALUACIÓN CRÍTICA: Valora la lógica, coherencia, actualidad y objetividad de la información.',
              'SÍNTESIS Y REFLEXIÓN: Integra lo leído con tus conocimientos y expresa tu propia postura.',
            ],
          },
        ],
      },
      {
        id: 'len-7', number: 7, title: 'Análisis Cualitativo vs Cuantitativo de Textos',
        keyTerms: ['análisis cualitativo', 'análisis cuantitativo', 'interpretación', 'frecuencia', 'estadística textual'],
        blocks: [
          { type: 'comparison',
            left: {
              title: 'ANÁLISIS CUALITATIVO',
              items: [
                'Interpretar significados, sentidos y contextos.',
                'Preguntas: ¿Qué significa? ¿Por qué? ¿Cómo se relaciona?',
                'Datos: palabras, frases, temas, conceptos.',
                'Análisis temático, hermenéutico, discursivo.',
                'Resultado: comprensión profunda del significado.',
              ],
            },
            right: {
              title: 'ANÁLISIS CUANTITATIVO',
              items: [
                'Medir, contar o cuantificar elementos del texto.',
                'Preguntas: ¿Cuánto? ¿Con qué frecuencia? ¿Cuál es el porcentaje?',
                'Datos: Números, frecuencias, estadísticas.',
                'Conteo de palabras, gráficos, tablas, porcentajes.',
                'Resultado: Resultados medibles y comparables.',
              ],
            },
          },
          { type: 'note', content: 'Ambos análisis se complementan para una comprensión integral de los textos.' },
        ],
      },
      {
        id: 'len-8', number: 8, title: 'Elementos de un Texto Bien Escrito',
        keyTerms: ['propósito', 'audiencia', 'organización', 'coherencia', 'cohesión', 'citas', 'lenguaje adecuado'],
        blocks: [
          { type: 'keypoints', title: 'Elementos de un texto bien escrito',
            items: [
              'PROPÓSITO CLARO: El autor sabe qué quiere comunicar y por qué.',
              'AUDIENCIA DEFINIDA: Se adapta el lenguaje y el tono al lector.',
              'ORGANIZACIÓN LÓGICA: Ideas ordenadas: inicio, desarrollo y cierre.',
              'COHERENCIA: Las ideas se relacionan entre sí con sentido.',
              'COHESIÓN: Uso adecuado de conectores, pronombres, sinónimos y referencias.',
              'CITAS Y REFERENCIAS: Respaldo de ideas con autores y fuentes confiables (normas APA u otras).',
              'LENGUAJE ADECUADO: Corrección gramatical, ortográfica y de puntuación.',
            ],
          },
          { type: 'definition', title: 'Usos del lenguaje en ciencias de la salud', content: 'La comunicación oral con pacientes, elaboración de historias clínicas, lectura y análisis de artículos científicos y guías clínicas, presentación de casos clínicos y defensa de ideas con argumentos.' },
        ],
      },
    ],
  },
]
