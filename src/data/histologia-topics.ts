import type { Topic } from '../types'

// Histología I y su Laboratorio (UAD · HS01006) — Semana 1, Clases 1–2.
// Se marcan con ★ los puntos que pueden aparecer en el examen: se conservan
// como callouts «★ Punto de examen» (correlacion variant 'dato') o keyPoints con ★.
export const histologiaTopics: Topic[] = [
  {
    id: 'histologia-introduccion',
    title: 'Introducción a la histología',
    subtitle: 'Definición, los 4 tejidos básicos, aplicaciones diagnósticas, origen celular y regeneración',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'Histología = histos (tejido) + logos (estudio): el estudio de los tejidos.',
      'Cuatro tejidos básicos: epitelial, conectivo, muscular y nervioso. Histología I cubre el epitelial y el conectivo.',
      'Método inductivo (de lo particular a lo general: célula → tejido → órgano) frente al deductivo (al revés).',
      'Aplicaciones diagnósticas: la biopsia y la histopatología (p. ej. oncológica) sustentan muchos diagnósticos.',
      'Origen de la vida: sopa primordial → ARN (la chispa) → procariota → eucariota.',
      'Procariota: pequeña, sin organelos membranosos (material genético en el nucleoide); eucariota: núcleo definido y organelos membranosos.',
      '★ Capacidad regenerativa por tejido: epitelial ALTA, conectivo variable, muscular LIMITADA, nervioso MÍNIMA.',
      'Los cardiomiocitos y las neuronas maduras no se dividen: sus lesiones dejan cicatriz o daño permanente.',
    ],
    sections: [
      {
        id: 'hint-1',
        number: 1,
        title: 'Qué es la histología',
        keyTerms: ['histología', 'tejido', 'epitelial', 'conectivo', 'muscular', 'nervioso'],
        blocks: [
          {
            type: 'definition',
            title: 'Histología',
            content: 'Del griego histos (tejido) y logos (estudio): la ciencia que estudia los tejidos, su estructura microscópica y su relación con la función. Enlaza la anatomía (estructura) con la fisiología (función). — Histología.',
          },
          {
            type: 'list',
            title: 'Los cuatro tejidos básicos',
            items: [
              'Tejido epitelial: reviste superficies y forma glándulas. (Histología I)',
              'Tejido conectivo: sostiene y une; incluye óseo, cartilaginoso, adiposo, sanguíneo y linfático. (Histología I)',
              'Tejido muscular: genera movimiento. (Histología II)',
              'Tejido nervioso: recibe y transmite señales. (Histología II)',
            ],
          },
          {
            type: 'note',
            title: 'Qué cubre Histología I',
            content:
              'Histología I estudia el tejido epitelial y el conectivo (con sus variedades). El muscular y el nervioso se abordan en Histología II. Bibliografía de apoyo sugerida: Ross, Histología. Evaluación semanal: examen 40 %, proyecto integrador 30 %, casos clínicos 30 %.',
          },
        ],
      },
      {
        id: 'hint-4',
        number: 4,
        title: 'Método y aplicaciones diagnósticas',
        keyTerms: ['inductivo', 'deductivo', 'biopsia', 'histopatología'],
        blocks: [
          {
            type: 'comparison',
            title: 'Método inductivo vs. deductivo',
            left: {
              title: 'Inductivo',
              items: ['De lo particular a lo general.', 'Célula → tejido → órgano.', 'El abordaje de esta materia.'],
            },
            right: {
              title: 'Deductivo',
              items: ['De lo general a lo particular.', 'Órgano → tejido → célula.'],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La histología en el diagnóstico',
            content:
              'La biopsia y su estudio microscópico (histopatología) confirman diagnósticos que la clínica y la imagen solo sugieren; en oncología, distinguir un tejido benigno de uno maligno depende del patrón histológico. Por eso la histología es la base de la anatomía patológica.',
          },
        ],
      },
      {
        id: 'hint-2',
        number: 2,
        title: 'Origen celular',
        keyTerms: ['sopa primordial', 'ARN', 'procariota', 'eucariota'],
        blocks: [
          {
            type: 'list',
            title: 'De la sopa primordial a la eucariota',
            items: [
              'Sopa primordial: caldo de moléculas orgánicas en la Tierra primitiva.',
              'El ARN aparece como la primera molécula capaz de autorreplicarse (la "chispa" de la vida).',
              'Primero surgen las células procariotas (sin núcleo definido).',
              'Después evolucionan las eucariotas (con núcleo y organelos membranosos).',
            ],
          },
          {
            type: 'comparison',
            title: 'Eucariota vs. procariota',
            left: {
              title: 'Eucariota',
              items: ['Más grande.', 'Núcleo definido (rodeado de membrana).', 'Organelos membranosos (mitocondrias, RE, Golgi…).'],
            },
            right: {
              title: 'Procariota',
              items: ['Pequeña.', 'Sin núcleo: material genético en el nucleoide.', 'Sin organelos membranosos.'],
            },
          },
        ],
      },
      {
        id: 'hint-3',
        number: 3,
        title: 'Capacidad regenerativa por tejido',
        keyTerms: ['regeneración', 'cardiomiocitos', 'neuronas', 'cicatriz'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La capacidad de regenerar depende de si el tejido conserva células capaces de dividirse. El epitelial se renueva sin cesar porque tiene células madre en constante mitosis (por eso cicatriza rápido y, por lo mismo, es donde más aparecen los cánceres). El conectivo repara bien mediante fibroblastos, aunque a menudo deja cicatriz fibrosa. El muscular regenera poco y el nervioso casi nada: los cardiomiocitos y las neuronas maduras salen del ciclo celular y ya no se dividen, de modo que la pérdida se rellena con tejido no funcional. Esta jerarquía (epitelial > conectivo > muscular > nervioso) explica el pronóstico de muchas lesiones.',
          },
          {
            type: 'table',
            title: 'Cuánto regenera cada tejido',
            data: {
              headers: ['Tejido', 'Capacidad de regeneración'],
              rows: [
                ['Epitelial', 'ALTA (se renueva constantemente).'],
                ['Conectivo', 'Variable (depende del subtipo).'],
                ['Muscular', 'LIMITADA.'],
                ['Nervioso', 'MÍNIMA.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué el infarto y el daño neuronal dejan secuela',
            content:
              'Los cardiomiocitos y las neuronas maduras no se dividen: tras una lesión no se reemplazan, sino que dejan cicatriz (fibrosis en el corazón) o daño permanente (gliosis en el sistema nervioso). Por eso el infarto y el ictus dejan secuelas.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-microscopia-tecnica',
    title: 'Microscopía, técnica y tinciones',
    subtitle: 'Microscopios y resolución, el microscopio óptico, la técnica paso a paso y las tinciones',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔭',
    keyPoints: [
      '★ El ojo humano resuelve hasta 0.2 mm; es la referencia de resolución.',
      '★ El microscopio de fuerza atómica (50 pm) tiene la MAYOR resolución de todos.',
      '★ Campo oscuro: solo la luz refractada por la muestra entra al objetivo (fondo negro).',
      '★ Contraste de fase: observa células VIVAS sin teñir, por diferencias de índice de refracción.',
      'MEB 2.5 nm da imagen 3D de superficie; MET 0.2 nm muestra la ultraestructura (organelos).',
      'Técnica: obtención → fijación (formol 4–10 %) → deshidratación → aclaramiento → inclusión (parafina) → corte → tinción → montaje.',
      '★ H&E: hematoxilina tiñe lo basófilo (azul); eosina tiñe lo acidófilo (rosa).',
      '★ El ultramicrotomo fija con tetróxido de osmio (OsO₄) para conservar las membranas (cortes de 50–150 nm).',
    ],
    sections: [
      {
        id: 'hmic-1',
        number: 1,
        title: 'Los puntos de examen (★)',
        keyTerms: ['★', 'punto de examen'],
        blocks: [
          {
            type: 'note',
            title: 'Cómo leer los ★',
            content:
              'Se marcan con una estrella (★) los datos que pueden caer en el examen. En este tema se conservan como callouts «★ Punto de examen». Los ★ confirmados están en la resolución de los microscopios, en las piezas del microscopio óptico y en la técnica y las tinciones.',
          },
        ],
      },
      {
        id: 'hmic-2',
        number: 2,
        title: 'Tipos de microscopio y resolución',
        keyTerms: ['campo claro', 'campo oscuro', 'contraste de fase', 'MEB', 'MET', 'fuerza atómica'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La resolución es la distancia mínima a la que dos puntos se ven separados y no como uno solo: cuanto MENOR es ese número, MEJOR es el microscopio. El ojo humano llega a 0.2 mm; la microscopía óptica, limitada por la longitud de onda de la luz visible, se detiene en torno a 0.2 μm (unas mil veces mejor). Para ver más fino hay que cambiar de "iluminación": los microscopios electrónicos usan haces de electrones (longitud de onda mucho menor) y alcanzan nanómetros —el MEB da relieve de superficie en 3D y el MET, la ultraestructura interna—, mientras que la fuerza atómica "palpa" la muestra con una punta y llega a picómetros. Las variantes ópticas (campo oscuro, contraste de fase, fluorescencia) no mejoran la resolución: cambian el CONTRASTE para ver cosas que el campo claro no muestra, como células vivas sin teñir.',
          },
          {
            type: 'table',
            title: 'Microscopios ordenados por resolución (mayor número = peor resolución)',
            data: {
              headers: ['Microscopio', 'Resolución', 'Uso / nota'],
              rows: [
                ['Ojo humano', '0.2 mm', '★ Referencia de resolución.'],
                ['Campo claro', '0.2 μm', 'Luz directa que atraviesa la muestra teñida (rutina).'],
                ['Campo oscuro', '~0.2 μm', '★ Solo la luz refractada por la muestra entra al objetivo (fondo negro): gota gruesa, sífilis.'],
                ['Contraste de fase', '0.2 μm', '★ Células VIVAS sin teñir (diferencias de índice de refracción).'],
                ['Fluorescencia', '0.2 μm', 'Inmunofluorescencia: antígenos, enfermedades autoinmunes.'],
                ['MEB (barrido)', '2.5 nm', 'Imagen 3D de la superficie.'],
                ['MET (transmisión)', '0.2 nm', 'Ultraestructura (organelos); criofractura.'],
                ['Fuerza atómica', '50 pm', '★ La MAYOR resolución de todas.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — resolución',
            content:
              'El ojo humano resuelve 0.2 mm (referencia). La MAYOR resolución la da el microscopio de FUERZA ATÓMICA (50 pm), no el MET. Campo oscuro = solo luz refractada entra al objetivo; contraste de fase = células vivas sin teñir.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'MET en la clínica',
            content:
              'El microscopio electrónico de transmisión (MET), con criofractura, revela la ultraestructura (p. ej. las mitocondrias). Es útil en miopatías mitocondriales, patología renal y errores del metabolismo.',
          },
        ],
      },
      {
        id: 'hmic-3',
        number: 3,
        title: 'El microscopio óptico',
        keyTerms: ['ocular', 'objetivo', 'condensador', 'diafragma', 'platina'],
        blocks: [
          {
            type: 'list',
            title: 'Partes principales',
            items: [
              'Ocular: lente por la que se observa (cerca del ojo).',
              'Tubo y revólver con los objetivos (las lentes de aumento).',
              'Platina: donde se coloca la preparación.',
              'Condensador y diafragma: manejan la luz que llega a la muestra.',
              'Tornillos macro y micrométrico: el enfoque grueso y fino.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — objetivo vs. condensador',
            content:
              'La LENTE OBJETIVO recoge la luz que ATRAVIESA la muestra y forma la imagen aumentada. El CONDENSADOR enfoca (concentra) el haz de luz SOBRE la muestra antes de que la atraviese. No hay que confundirlos.',
          },
        ],
      },
      {
        id: 'hmic-4',
        number: 4,
        title: 'Técnica histológica',
        keyTerms: ['fijación', 'inclusión', 'microtomo', 'ultramicrotomo', 'tetróxido de osmio'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La técnica histológica convierte un tejido blando y opaco en un corte finísimo, transparente y coloreado que la luz pueda atravesar. Cada paso resuelve un problema: la fijación (formol) mata las enzimas y entrecruza las proteínas para que el tejido no se autodigiera ni se deforme; la deshidratación con alcoholes retira el agua para que pueda entrar un medio que no se mezcla con ella; el aclaramiento con xilol sustituye el alcohol por un solvente miscible con la parafina; la inclusión en parafina endurece la pieza para poder cortarla; el microtomo obtiene secciones de pocas micras; y como el corte es incoloro, la tinción le da contraste. Saltarse o invertir un paso arruina la preparación (p. ej. cortar sin incluir desgarra el tejido).',
          },
          {
            type: 'steps',
            title: 'Del tejido al portaobjetos',
            steps: [
              'Obtención de la muestra (biopsia, pieza quirúrgica).',
              'Fijación: formol (formaldehído) al 4–10 %, para conservar el tejido.',
              'Deshidratación: alcoholes en concentración ascendente.',
              'Aclaramiento (diafanización): xilol o tolueno.',
              'Inclusión: en parafina, para dar consistencia al bloque.',
              'Corte: microtomo (5–15 μm para óptico) o ultramicrotomo (50–150 nm para electrónico).',
              'Tinción: para dar contraste (H&E de rutina).',
              'Montaje: con pineno o resinas, y cubreobjetos.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — ultramicrotomo y OsO₄',
            content:
              'Para microscopía electrónica se usa el ULTRAMICROTOMO (cortes de 50–150 nm) y se fija con TETRÓXIDO DE OSMIO (OsO₄), que conserva las membranas. El microtomo óptico corta secciones mucho más gruesas (5–15 μm).',
          },
        ],
      },
      {
        id: 'hmic-5',
        number: 5,
        title: 'Tinciones',
        keyTerms: ['H&E', 'hematoxilina', 'eosina', 'PAS', 'Feulgen', 'basófilo', 'acidófilo'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Las tinciones funcionan por atracción de cargas. Un colorante BÁSICO (catiónico), como la hematoxilina, se une a lo que tiene carga negativa —ácidos nucleicos: el ADN del núcleo y el ARN—, que por eso se llaman estructuras BASÓFILAS y salen azul-violeta. Un colorante ÁCIDO (aniónico), como la eosina, se une a lo que tiene carga positiva —muchas proteínas citoplasmáticas y del colágeno—, estructuras ACIDÓFILAS que salen rosa. La combinación de ambos es la tinción de rutina H&E: núcleos azules sobre citoplasma rosa. Las demás son tinciones especiales que revelan un componente concreto (PAS para glucógeno, Feulgen para ADN, fucsina-resorcina para fibras elásticas).',
          },
          {
            type: 'table',
            title: 'Tinciones de uso común',
            data: {
              headers: ['Tinción', 'Qué tiñe'],
              rows: [
                ['Hematoxilina (H&E)', 'Estructuras BASÓFILAS en AZUL/violeta (núcleos, ARN, ADN).'],
                ['Eosina (H&E)', 'Estructuras ACIDÓFILAS en ROSA (citoplasma, colágeno).'],
                ['Mallory', 'Tejido conectivo (tricrómico).'],
                ['PAS', 'Glucógeno y polisacáridos (útil en enfermedad celíaca).'],
                ['Feulgen', 'ADN específicamente.'],
                ['Fucsina-resorcina', 'Fibras elásticas.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — H&E',
            content:
              'En la tinción de rutina H&E: la HEMATOXILINA tiñe lo BASÓFILO de azul (núcleos), y la EOSINA tiñe lo ACIDÓFILO de rosa (citoplasma). Es la trampa clásica: basófilo = azul (hematoxilina), acidófilo = rosa (eosina).',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — colorantes ácidos vs. básicos',
            content:
              'Colorantes ÁCIDOS (Eosina ★, naranja G, anilina azul): tiñen los componentes ACIDÓFILOS, como las proteínas citoplasmáticas (acidofilia = afinidad por colorantes ácidos). Colorantes BÁSICOS (Azul de metileno ★, hematoxilina, pironina G): tiñen los componentes BASÓFILOS, como la heterocromatina ★ y el ARN.',
          },
          {
            type: 'table',
            title: '★ Fenómenos de tinción',
            data: {
              headers: ['Fenómeno', 'Qué es'],
              rows: [
                ['Metacromasia ★', 'El colorante tiñe la estructura de un color DISTINTO al suyo (p. ej. azul de toluidina → violeta en mastocitos).'],
                ['Basofilia ★', 'Afinidad de un componente por los colorantes básicos (núcleos, ARN).'],
                ['Birrefringencia ★', 'Propiedad de desdoblar la luz polarizada (colágeno, amiloide con rojo Congo).'],
                ['Estequiometría ★', 'La cantidad de colorante fijado es proporcional a la cantidad de sustancia (permite cuantificar, p. ej. Feulgen para ADN).'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — tinciones especiales',
            content:
              'Especiales que hay que reconocer: Mallory ★ (tricrómico del conectivo), PAS ★ (ácido peryódico de Schiff: glucógeno y polisacáridos) y OsO₄ ★ (tetróxido de osmio: lípidos y membranas). El H&E combina un colorante básico (hematoxilina) y uno ácido (eosina).',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-celula',
    title: 'La célula',
    subtitle: 'Membrana, núcleo, organelos, citoesqueleto y transporte a través de la membrana',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🧫',
    keyPoints: [
      '★ La membrana plasmática mide 8–10 nm; su composición principal es fosfolípidos + colesterol + proteínas.',
      '★ El colesterol es el "pegamento dinámico" de la membrana; las balsas lipídicas planas llevan flotilinas y las caveolares, caveolinas.',
      'Núcleo: centro de control con el ADN; envoltura nuclear con poros; eucromatina (activa) vs heterocromatina (condensada).',
      '★ El retículo endoplásmico RUGOSO sintetiza las proteínas destinadas a secreción; el Golgi las glucosila.',
      'La mitocondria produce ATP (respiración celular) y tiene ADN propio; el proteasoma degrada proteínas marcadas con ubiquitina (76 aa).',
      '★ El citoesqueleto transporta vesículas por microtúbulos de tubulina α/β; la dineína las lleva al extremo negativo (la cinesina, al positivo).',
      '★ Transporte pasivo (difusión, ósmosis) sin ATP vs activo con ATP; la clatrina forma las vesículas recubiertas de la endocitosis mediada por receptor.',
      '★ Macropinocitosis: independiente de clatrina, dependiente de actina; la exocitosis (activa) tiene vías constitutiva y regulada.',
    ],
    sections: [
      {
        id: 'hcel-1',
        number: 1,
        title: 'Cómo estudiar la célula',
        keyTerms: ['membrana', 'núcleo', 'citoplasma'],
        blocks: [
          {
            type: 'list',
            title: 'Tres grandes bloques',
            items: [
              'Membrana celular: barrera selectiva que protege e intercambia sustancias con el entorno.',
              'Núcleo: centro de control que contiene el ADN y dirige las funciones celulares.',
              'Citoplasma: medio interno con los organelos que realizan las funciones vitales.',
            ],
          },
        ],
      },
      {
        id: 'hcel-2',
        number: 2,
        title: 'Membrana plasmática',
        keyTerms: ['fosfolípidos', 'colesterol', 'balsas lipídicas', 'glucoproteínas', 'proteínas receptoras'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La membrana plasmática es una bicapa de fosfolípidos: cada molécula tiene una cabeza hidrofílica (hacia el agua) y dos colas hidrofóbicas (hacia dentro), lo que la hace una barrera para lo hidrosoluble y le da su grosor de 8–10 nm. Sobre esa bicapa "flotan" proteínas (modelo de mosaico fluido): integrales, que la atraviesan y hacen de canales, transportadores o receptores, y periféricas, adosadas a la superficie. El colesterol se intercala entre los fosfolípidos y regula la fluidez —de ahí lo de "pegamento dinámico": ni rígida ni demasiado líquida—. Los carbohidratos unidos a lípidos y proteínas (glucocáliz) sirven de carné de identidad para el reconocimiento celular. Que el espesor sea de solo unos nanómetros es lo que obliga a usar el MET (no el óptico) para verla.',
          },
          {
            type: 'table',
            title: 'Composición y componentes',
            data: {
              headers: ['Componente', 'Nota'],
              rows: [
                ['Espesor total ★', '8–10 nm.'],
                ['Composición principal ★', 'Fosfolípidos + colesterol + proteínas.'],
                ['Proteínas de membrana ★', 'Integrales (atraviesan) y periféricas (asociadas a la superficie).'],
                ['Balsas lipídicas', 'Planas (flotilinas ★) y caveolares (caveolinas); microdominios ordenados.'],
                ['Colesterol ★', 'El "pegamento dinámico": da fluidez y estabilidad a la membrana.'],
                ['Glucoproteínas ★', 'Carbohidratos + proteína; reconocimiento celular (glucocáliz).'],
                ['Proteínas receptoras ★', 'Reconocen señales y desencadenan respuestas.'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Funciones de la membrana',
            items: [
              'Barrera selectiva y mantenimiento del gradiente electroquímico.',
              'Transporte de moléculas pequeñas.',
              'Comunicación y señalización celular.',
              'Motilidad y soporte.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — membrana plasmática',
            content:
              'Datos clave: espesor 8–10 nm ★; composición principal fosfolípidos + colesterol + proteínas ★; proteínas integrales y periféricas ★; balsas lipídicas planas (flotilinas ★) y caveolares (caveolinas); colesterol = pegamento dinámico ★; glucoproteínas ★ y proteínas receptoras ★.',
          },
        ],
      },
      {
        id: 'hcel-3',
        number: 3,
        title: 'Núcleo',
        keyTerms: ['envoltura nuclear', 'poros nucleares', 'eucromatina', 'heterocromatina', 'nucléolo'],
        blocks: [
          {
            type: 'list',
            title: 'El centro de control',
            items: [
              'Contiene el ADN y dirige el crecimiento y la reproducción celular.',
              'Envoltura nuclear: doble membrana con poros que regulan el intercambio con el citoplasma.',
              'Nucleoplasma: el medio interno del núcleo.',
              'Nucléolo: produce y ensambla los componentes de los ribosomas.',
            ],
          },
          {
            type: 'comparison',
            title: 'Eucromatina vs. heterocromatina',
            left: {
              title: 'Eucromatina',
              items: ['Poco condensada (laxa).', 'Transcripcionalmente ACTIVA.', 'Clara al microscopio.'],
            },
            right: {
              title: 'Heterocromatina',
              items: ['Muy condensada.', 'Transcripcionalmente INACTIVA (o poco activa).', 'Oscura (basófila ★).'],
            },
          },
        ],
      },
      {
        id: 'hcel-4',
        number: 4,
        title: 'Organelos membranosos',
        keyTerms: ['retículo endoplásmico', 'aparato de Golgi', 'mitocondria', 'lisosoma', 'proteasoma', 'peroxisoma'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los organelos membranosos separan reacciones incompatibles en compartimentos, y varios forman una cadena de montaje —el sistema de endomembranas—: el ribosoma sintetiza la proteína sobre el retículo endoplásmico RUGOSO, que la pliega y la envía en vesículas al aparato de Golgi, donde se glucosila y se etiqueta según su destino (secreción, membrana o lisosoma). En paralelo, la mitocondria quema nutrientes con oxígeno para producir ATP y, por su origen bacteriano, conserva ADN propio; el lisosoma digiere y recicla material con enzimas ácidas; el proteasoma degrada proteínas concretas marcadas con ubiquitina; y el peroxisoma neutraliza peróxidos y oxida ácidos grasos. Entender ese flujo explica por qué las células muy secretoras (páncreas, plasmocitos) tienen un RE rugoso y un Golgi enormes.',
          },
          {
            type: 'table',
            title: 'Los organelos con membrana',
            data: {
              headers: ['Organelo', 'Función'],
              rows: [
                ['RE rugoso ★', 'Con ribosomas; sintetiza las proteínas destinadas a SECRECIÓN.'],
                ['RE liso', 'Sin ribosomas; síntesis de lípidos, metabolismo y almacén de calcio.'],
                ['Aparato de Golgi', 'Modifica y glucosila proteínas (glicosilación), forma glicolípidos y las clasifica según su destino.'],
                ['Mitocondria', 'Produce ATP (respiración celular, ciclo de Krebs y cadena de transporte); regula apoptosis y calcio; tiene ADN propio.'],
                ['Lisosoma', 'Digestión y reciclaje (enzimas hidrolíticas).'],
                ['Proteasoma', 'Degrada proteínas marcadas con ubiquitina (proteína de 76 aminoácidos, el "beso de la muerte").'],
                ['Peroxisoma', 'Desintoxicación celular (oxida ácidos grasos, neutraliza peróxidos).'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — RE rugoso',
            content:
              'El organelo donde se sintetiza la mayoría de las proteínas destinadas a SECRECIÓN es el retículo endoplásmico RUGOSO (no el liso ni el Golgi). El Golgi las modifica después.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La mitocondria tiene su propio ADN',
            content:
              'Además del núcleo, la mitocondria contiene ADN propio (de herencia materna). Sus defectos causan miopatías mitocondriales, que se estudian con el MET buscando alteraciones de la ultraestructura.',
          },
        ],
      },
      {
        id: 'hcel-5',
        number: 5,
        title: 'Organelos no membranosos y citoesqueleto',
        keyTerms: ['ribosomas', 'microtúbulos', 'tubulina', 'dineína', 'actina', 'filamentos intermedios'],
        blocks: [
          {
            type: 'list',
            title: 'Sin membrana',
            items: [
              'Ribosomas: ensamblan proteínas por traducción del ARN.',
              'Microtúbulos: de tubulina α y β; vías del transporte intracelular de vesículas.',
              'Microfilamentos: de actina; contracción, movimiento amiboideo y soporte de la membrana.',
              'Filamentos intermedios: de proteínas fibrosas (queratina); dan soporte estructural.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — citoesqueleto',
            content:
              'Las estructuras responsables del transporte intracelular de vesículas están formadas por TUBULINA α y β (microtúbulos) ★. La proteína motora que lleva las vesículas hacia el extremo NEGATIVO del microtúbulo es la DINEÍNA ★ (la cinesina las lleva hacia el positivo).',
          },
        ],
      },
      {
        id: 'hcel-6',
        number: 6,
        title: 'Transporte a través de la membrana',
        keyTerms: ['difusión', 'ósmosis', 'endocitosis', 'clatrina', 'macropinocitosis', 'exocitosis'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Como la membrana es selectiva, la célula controla qué entra y qué sale, y la pregunta clave siempre es: ¿gasta energía? El transporte PASIVO va a favor del gradiente de concentración (de donde sobra a donde falta) y no consume ATP: así cruzan los gases (O₂, CO₂) y, por ósmosis, el agua. El ACTIVO va en contra del gradiente y por eso exige ATP (las bombas de iones, la endocitosis y la exocitosis). Para moléculas grandes la célula usa vesículas: en la endocitosis mediada por receptor, la proteína clatrina moldea la vesícula recubierta; la fagocitosis (partículas/bacterias) y la macropinocitosis (grandes tragos de líquido) dependen de actina; y la exocitosis fusiona vesículas con la membrana para secretar, ya sea de forma continua (constitutiva) o solo ante una señal (regulada).',
          },
          {
            type: 'comparison',
            title: 'Pasivo vs. activo',
            left: {
              title: 'Pasivo (sin ATP)',
              items: ['A favor del gradiente (de mayor a menor concentración).', 'Difusión simple (CO₂, O₂, vitaminas), difusión facilitada y ósmosis.'],
            },
            right: {
              title: 'Activo (con ATP)',
              items: ['En contra del gradiente (de menor a mayor).', 'Bombas de iones; endocitosis y exocitosis.'],
            },
          },
          {
            type: 'table',
            title: '★ Endocitosis y exocitosis',
            data: {
              headers: ['Proceso', 'Nota'],
              rows: [
                ['Difusión pasiva ★', 'Moléculas pequeñas a favor del gradiente, sin gasto de energía.'],
                ['Fagocitosis ★', 'Ingesta de partículas grandes (bacterias); dependiente de actina.'],
                ['Pinocitosis', 'Ingesta de líquidos y moléculas pequeñas en vesículas.'],
                ['Endocitosis mediada por receptor', 'La proteína CLATRINA ★ forma las vesículas recubiertas.'],
                ['Macropinocitosis ★', 'Independiente de clatrina, DEPENDIENTE de actina; forma macropinosomas grandes.'],
                ['Exocitosis ★', 'Saca vesículas (activo, con ATP); vías constitutiva y de secreción regulada ★.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Punto de examen — endocitosis',
            content:
              'La difusión pasiva ★ no gasta ATP. La fagocitosis ★ (bacterias) depende de actina. La clatrina ★ forma las vesículas recubiertas de la endocitosis mediada por receptor. La macropinocitosis ★ es independiente de clatrina y dependiente de actina. La exocitosis ★ tiene vías constitutiva y regulada ★.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-repaso-s1',
    title: 'Repaso para el examen — Semana 1',
    subtitle: 'Banco tipo examen: microscopía, tinciones, célula y transporte',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '📝',
    keyPoints: [
      'Criofractura = MET; campo claro 0.2 μm (menor resolución); fuerza atómica 50 pm (mayor).',
      'Contraste de fase = células vivas sin teñir (p. ej. espermatozoides).',
      'Colorantes ácidos: eosina, naranja G, anilina; básicos: hematoxilina, azul de metileno.',
      'Mallory = 3 colorantes ÁCIDOS (anilina azul, fucsina ácida, naranja G); PAS no tiñe ARN.',
      'Proteasoma degrada proteínas marcadas con ubiquitina; el lisosoma digiere material en vesículas.',
      'Pasivo (difusión, ósmosis) = sin ATP; activo (fago/pino/macropinocitosis, endocitosis por receptor, exocitosis) = con ATP.',
      'Microtúbulos: 13 protofilamentos de tubulina α/β, plantilla γ-tubulina, polimerizan con GTP; cinesina → extremo +, dineína → extremo −.',
    ],
    sections: [
      {
        id: 'hrep-1',
        number: 1,
        title: 'Cómo usar este repaso',
        keyTerms: ['repaso', 'examen', 'banco del examen'],
        blocks: [
          {
            type: 'note',
            title: 'Es repaso — banco tipo examen',
            content:
              'No es contenido nuevo: la Clase 5 no tuvo diapositivas; fue un repaso previo al examen en el que se resolvió un banco de preguntas tipo examen. Aquí están esas preguntas. Cada tema se estudia a fondo en «Microscopía, técnica y tinciones» y «La célula».',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Estrategia de examen',
            content:
              'Consejos para el examen: lee bien el enunciado (¿la sustancia ENTRA o SALE de la célula?); en opción múltiple elimina primero los dos distractores obvios y decide entre los dos que quedan; y cuida las UNIDADES de resolución (μm vs nm vs pm), que es la trampa más común.',
          },
        ],
      },
      {
        id: 'hrep-2',
        number: 2,
        title: 'Lo evaluable, agrupado',
        keyTerms: ['microscopía', 'tinciones', 'membrana', 'transporte', 'citoesqueleto'],
        blocks: [
          {
            type: 'table',
            title: 'Datos de alto rendimiento (del banco del examen)',
            data: {
              headers: ['Tema', 'Clave'],
              rows: [
                ['Microscopía', 'Criofractura → MET; campo claro 0.2 μm (menor resolución); contraste de fase → células vivas sin teñir; fuerza atómica 50 pm (mayor).'],
                ['Tinciones', 'Ácidos: eosina, naranja G, anilina · básicos: hematoxilina, azul de metileno. Mallory = 3 ácidos. Metacromasia = cambio de color de una tinción básica. PAS: glucógeno/mucopolisacáridos/glucoproteínas, no ARN.'],
                ['Técnica', 'Aclaramiento con xileno/tolueno; el tetraóxido de osmio es FIJADOR (membranas).'],
                ['Membrana', 'Bicapa 8–10 nm: fosfolípidos + colesterol + proteínas (integrales/periféricas). Balsas planas → flotilinas; caveolares → caveolina. Receptoras: reconocen y unen ligandos.'],
                ['Organelos', 'Proteasoma → proteínas marcadas con ubiquitina; lisosoma → material en vesículas. Membrana mitocondrial interna → cadena respiratoria; RE liso → citocromo P450.'],
                ['Transporte', 'Pasivo (difusión simple/facilitada, ósmosis) sin ATP; activo (fago/pino/macropinocitosis, endocitosis por receptor, exocitosis) con ATP. Exocitosis = SALE de la célula.'],
                ['Citoesqueleto', 'Microtúbulos: 13 protofilamentos de tubulina α/β, plantilla γ-tubulina, GTP. Cinesina → +, dineína → −, catanina los corta. Filamentos intermedios: vimentina (mesodermo), citoqueratinas (epitelios).'],
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-epitelial',
    title: 'Tejido epitelial: generalidades y clasificación',
    subtitle: 'Revestimiento y glándulas: capas, forma celular, funciones, nutrición y ejemplos anatómicos',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'El epitelio es AVASCULAR: descansa sobre una membrana basal y se nutre por difusión desde el tejido conectivo subyacente (corion).',
      'Se clasifica con dos preguntas: ¿cuántas capas? (simple/estratificado/pseudoestratificado/transicional) y ¿qué forma? (plano/cúbico/cilíndrico).',
      'Regla de oro del estratificado: se nombra por la forma de la capa MÁS SUPERFICIAL, no por todas las células.',
      'Pseudoestratificado: parece de varias capas pero TODAS las células tocan la membrana basal (solo algunas llegan a la superficie).',
      'Transicional (urotelio): cambia de forma con la distensión; es EXCLUSIVO del sistema urinario.',
      'Asociaciones de examen: alvéolos/Bowman/vasos → plano simple; tiroides/túbulos renales → cúbico simple; tubo digestivo → cilíndrico simple; piel → plano estratificado queratinizado; tráquea → cilíndrico pseudoestratificado ciliado.',
      'Cinco funciones: protección, transporte (cilios), absorción, síntesis/secreción y recepción de estímulos.',
      'Glándulas: exocrinas secretan por conductos; endocrinas vierten a la sangre.',
    ],
    sections: [
      {
        id: 'hepi-1',
        number: 1,
        title: 'Los cuatro tejidos básicos',
        keyTerms: ['tejido', 'epitelial', 'conectivo', 'muscular', 'nervioso'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Un tejido es la asociación ordenada de células con propiedades estructurales, fisiológicas y químicas semejantes. El cuerpo se organiza en cuatro tejidos básicos —epitelial, conectivo, muscular y nervioso—; en Histología I se estudian el epitelial y el conectivo (el muscular y el nervioso quedan para Histología II). La meta de la materia no es solo etiquetar "qué tejido es", sino aprender a DESCRIBIRLO y DIFERENCIARLO en un corte donde a menudo coexisten varios.',
          },
          {
            type: 'table',
            title: 'Los cuatro tejidos y su idea central',
            data: {
              headers: ['Tejido', 'Idea principal'],
              rows: [
                ['Epitelial', 'Revestimiento, protección, absorción y secreción'],
                ['Conectivo', 'Sostén y unión (incluye hueso, cartílago y sangre)'],
                ['Muscular', 'Contracción y movimiento'],
                ['Nervioso', 'Recepción, integración y conducción de impulsos'],
              ],
            },
          },
        ],
      },
      {
        id: 'hepi-2',
        number: 2,
        title: 'Generalidades del epitelio',
        keyTerms: ['revestimiento', 'glandular', 'avascular', 'membrana basal', 'renovación'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El tejido epitelial se presenta en dos grandes formas: los epitelios de REVESTIMIENTO (cubren superficies externas o revisten cavidades internas) y los epitelios GLANDULARES o secretores (forman glándulas). Comparten rasgos que conviene tener siempre presentes: son AVASCULARES (no tienen vasos propios), descansan sobre una membrana basal, se apoyan en un tejido conectivo subyacente que sí lleva los vasos, y tienen alta capacidad de renovación (a velocidad variable según el órgano). Embriológicamente pueden derivar de las tres hojas: ectodermo (epidermis), mesodermo (mesotelio) y endodermo (epitelio intestinal) — regla mnemónica ecto = exterior, meso = medio, endo = interior.',
          },
        ],
      },
      {
        id: 'hepi-3',
        number: 3,
        title: 'Las cinco funciones',
        keyTerms: ['protección', 'transporte', 'absorción', 'secreción', 'recepción'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La forma del epitelio sigue a su función, así que conocer las cinco funciones ayuda a predecir qué epitelio se encontrará en cada sitio.',
          },
          {
            type: 'table',
            title: 'Función · cómo · ejemplo',
            data: {
              headers: ['Función', 'Cómo / ejemplo'],
              rows: [
                ['Protección', 'Barrera contra virus, bacterias, hongos y partículas (superficies expuestas: piel).'],
                ['Transporte', 'Cilios del polo apical que desplazan líquido/partículas (tráquea).'],
                ['Absorción', 'Captación de agua, iones y moléculas (intestino delgado).'],
                ['Síntesis y secreción', 'Producción de glucoproteínas u hormonas (sudoríparas, tiroides).'],
                ['Recepción de estímulos', 'Neuroepitelios sensoriales (gusto, olfato).'],
              ],
            },
          },
        ],
      },
      {
        id: 'hepi-4',
        number: 4,
        title: 'Cómo clasificar — el algoritmo',
        keyTerms: ['número de capas', 'forma celular', 'capa superficial', 'queratina'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Clasificar un epitelio no es memorizar una lista, sino seguir un procedimiento con dos preguntas encadenadas. Primero: ¿cuántas capas hay? — simple (una), estratificado (varias), pseudoestratificado (parece varias) o transicional. Segundo: ¿qué forma tienen las células? — plano (escamoso), cúbico (cuboidal) o cilíndrico. La combinación de ambas da el nombre (p. ej. "plano simple", "cilíndrico estratificado").',
          },
          {
            type: 'note',
            title: 'Algoritmo de 4 pasos',
            content:
              '1) Localiza la MEMBRANA BASAL (marca la base del epitelio). 2) Cuenta las capas: una → simple; varias → estratificado; parece varias pero todas tocan la membrana basal → pseudoestratificado; cambia de forma por distensión y es del aparato urinario → transicional. 3) Mira la CAPA SUPERFICIAL (en el estratificado, es la que da el nombre): plana / cúbica / cilíndrica. 4) Si es plano estratificado, ¿hay QUERATINA superficial? Sí → queratinizado; no → no queratinizado.',
          },
        ],
      },
      {
        id: 'hepi-5',
        number: 5,
        title: 'Epitelios simples',
        keyTerms: ['plano simple', 'cúbico simple', 'cilíndrico simple', 'endotelio', 'mesotelio'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'En el epitelio simple hay una sola capa y TODAS las células tocan la membrana basal. La forma de esa única capa lo subdivide, y cada forma se asocia a una función: cuanto más plana la célula, más fácil el intercambio; cuanto más alta, más maquinaria de absorción o secreción alberga.',
          },
          {
            type: 'table',
            title: 'Los tres simples',
            data: {
              headers: ['Epitelio', 'Función típica', 'Localización clave'],
              rows: [
                ['Plano simple (escamoso)', 'Intercambio/barrera delgada', 'Alvéolos, cápsula de Bowman, vasos (endotelio), pleura, peritoneo, asa de Henle, mesotelio'],
                ['Cúbico simple', 'Secreción/absorción moderada', 'Túbulos renales, folículo tiroideo, conductos glandulares'],
                ['Cilíndrico simple', 'Absorción y secreción', 'Tubo digestivo, útero, oviducto, vesícula biliar'],
              ],
            },
          },
        ],
      },
      {
        id: 'hepi-6',
        number: 6,
        title: 'Epitelios estratificados',
        keyTerms: ['plano estratificado', 'queratinizado', 'no queratinizado', 'epidermis'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El epitelio estratificado tiene dos o más capas y, a diferencia del simple, NO todas las células tocan la membrana basal: se apilan unas sobre otras. Por eso se nombra por la forma de la capa MÁS SUPERFICIAL —"plano estratificado" no quiere decir que todas las células sean planas, sino que las superficiales lo son—. En el plano estratificado la distinción clínica clave es si la superficie está queratinizada.',
          },
          {
            type: 'comparison',
            title: 'Plano estratificado: no queratinizado vs. queratinizado',
            left: {
              title: 'No queratinizado',
              items: ['Células superficiales planas que CONSERVAN el núcleo.', 'Sin capa de queratina.', 'Boca, faringe, esófago, cuerdas vocales, vagina.'],
            },
            right: {
              title: 'Queratinizado',
              items: ['Células superficiales muertas, SIN núcleo, sustituidas por queratina.', 'Capa de queratina superficial.', 'Epidermis (piel fina y gruesa). Renovación ≈ 28–30 días.'],
            },
          },
          {
            type: 'note',
            content:
              'También existen el cúbico estratificado (superficie cúbica; conductos de glándulas sudoríparas) y el cilíndrico estratificado (superficie cilíndrica; grandes conductos excretores, uretra masculina). En todos rige la regla: el nombre lo da la capa superficial.',
          },
        ],
      },
      {
        id: 'hepi-7',
        number: 7,
        title: 'Pseudoestratificado y transicional',
        keyTerms: ['pseudoestratificado', 'cilios', 'transicional', 'urotelio', 'distensión'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Dos epitelios se prestan a confusión. El cilíndrico PSEUDOESTRATIFICADO parece estratificado porque los núcleos están a distintas alturas, pero TODAS sus células tocan la membrana basal —solo que no todas llegan a la superficie—; suele tener cilios y aparece en la tráquea, los bronquios, el epidídimo y los conductos deferentes. El TRANSICIONAL (urotelio) es el que CAMBIA de forma según la distensión (células más cúbicas cuando está relajado, más planas cuando está distendido) y es EXCLUSIVO del sistema urinario: vías urinarias, cálices renales y uretra proximal. Su función es precisamente permitir que el órgano se distienda.',
          },
          {
            type: 'note',
            content:
              'Trampa clásica: pseudoestratificado ≠ estratificado. La diferencia decisiva es la membrana basal —en el pseudoestratificado TODAS las células la contactan; en el estratificado, no—.',
          },
        ],
      },
      {
        id: 'hepi-8',
        number: 8,
        title: 'Nutrición del epitelio y glándulas',
        keyTerms: ['corion', 'difusión', 'corion papilar', 'exocrina', 'endocrina'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Como el epitelio es avascular, se nutre por DIFUSIÓN: los vasos están en el tejido conectivo subyacente (el corion), y los nutrientes atraviesan la membrana basal a favor de gradiente (proceso pasivo, sin gasto de energía) hasta las células. Cuando el epitelio es delgado basta un corion LISO (interfaz plana, distancia de difusión corta); cuando es grueso, el conectivo forma proyecciones —papilas— hacia el epitelio (corion PAPILAR) que aumentan la superficie de contacto y acercan los vasos. En la piel, esas papilas dérmicas dibujan además la huella dactilar.',
          },
          {
            type: 'list',
            title: 'Glándulas: dos destinos de la secreción',
            items: [
              'Exocrinas: secretan a través de CONDUCTOS (sudoríparas, salivales, mamarias).',
              'Endocrinas: vierten su producto directamente a la SANGRE (tiroides, páncreas).',
            ],
          },
        ],
      },
      {
        id: 'hepi-9',
        number: 9,
        title: 'Tabla maestra y núcleo de examen',
        keyTerms: ['tabla maestra', 'asociaciones de examen'],
        blocks: [
          {
            type: 'table',
            title: 'Epitelio · nº capas · forma · localización clave',
            data: {
              headers: ['Epitelio', 'Capas', 'Forma', 'Localización clave'],
              rows: [
                ['Plano simple', '1', 'Plana', 'Alvéolos, Bowman, vasos (endotelio), pleura, peritoneo'],
                ['Cúbico simple', '1', 'Cúbica', 'Túbulos renales, tiroides, conductos'],
                ['Cilíndrico simple', '1', 'Alta', 'Tubo digestivo, útero, vesícula'],
                ['Plano estrat. no queratinizado', 'Varias', 'Superficial plana (con núcleo)', 'Boca, esófago, vagina'],
                ['Plano estrat. queratinizado', 'Varias', 'Superficial plana + queratina', 'Piel (epidermis)'],
                ['Cúbico estratificado', 'Varias', 'Superficial cúbica', 'Conductos sudoríparos'],
                ['Cilíndrico estratificado', 'Varias', 'Superficial cilíndrica', 'Grandes conductos, uretra masculina'],
                ['Cilíndrico pseudoestratificado', '1 (funcional)', 'Alturas variables, cilios', 'Tráquea, bronquios, epidídimo'],
                ['Transicional (urotelio)', 'Varias', 'Cambia con la distensión', 'Vías urinarias'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Núcleo duro para el examen',
            content:
              'Asociaciones prioritarias para el examen: alvéolos / cápsula de Bowman / vasos → plano simple; tiroides / túbulos renales → cúbico simple; tubo digestivo → cilíndrico simple; piel → plano estratificado queratinizado; esófago → plano estratificado NO queratinizado; tráquea → cilíndrico pseudoestratificado ciliado; vías urinarias → transicional. Y las reglas: el estratificado se nombra por la capa superficial; el epitelio es avascular y se nutre por difusión desde el corion.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-epitelial-polaridad',
    title: 'Polaridad celular epitelial: dominios, uniones y glándulas',
    subtitle: 'Apical/lateral/basal, especializaciones, medios de unión, membrana basal y glándulas',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'La célula epitelial es POLAR: dominio apical (hacia la luz, funcional), lateral (unión y comunicación) y basal (anclaje y nutrición).',
      'Apical: microvellosidades (actina; absorción — ribete en cepillo intestinal, chapa estriada renal), estereocilios (inmóviles, sensoriales) y cilios (móviles).',
      'Cilios móviles = axonema 9+2 con dineína; primarios y nodales = 9+0.',
      'Uniones laterales: zónula occludens (ocludina/claudina, sella), zónula adherente (cadherinas/Ca²⁺), desmosoma (desmogleína/desmocolina) y nexos (conexinas).',
      'Uniones basales a la matriz: hemidesmosoma (integrina + filamentos intermedios) y contacto focal (integrina + actina).',
      'Membrana basal: lámina lúcida, densa (colágeno tipo IV) y reticular; filtra y limita la invasión maligna.',
      'Glándulas: exocrinas (con conducto; adenómero = porción secretora) vs endocrinas (a capilares).',
      'Mecanismos de secreción: merócrina (exocitosis), apócrina (pierde ápice), holócrina (muere la célula), endócrina (a capilares).',
    ],
    sections: [
      {
        id: 'hpol-1',
        number: 1,
        title: 'Polaridad celular: los tres dominios',
        keyTerms: ['polaridad', 'apical', 'lateral', 'basal'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La célula epitelial no es uniforme: tiene POLARIDAD, es decir, tres regiones de membrana con estructura y función distintas. Esa división del trabajo es la que permite dirigir procesos en un sentido —por ejemplo, el enterocito capta nutrientes por su cara apical (la que mira a la luz intestinal) y los entrega por la basal hacia los vasos—. Conocer qué hace cada dominio explica dónde se ubican las especializaciones y las uniones.',
          },
          {
            type: 'table',
            title: 'Los tres dominios',
            data: {
              headers: ['Dominio', 'Ubicación', 'Función'],
              rows: [
                ['Apical', 'Hacia la luz o superficie libre', 'Polo funcional (absorción, secreción, movimiento)'],
                ['Lateral', 'Entre células vecinas', 'Unión y comunicación'],
                ['Basal', 'Hacia la membrana basal', 'Anclaje y nutrición'],
              ],
            },
          },
        ],
      },
      {
        id: 'hpol-2',
        number: 2,
        title: 'Dominio apical: microvellosidades, estereocilios y cilios',
        keyTerms: ['microvellosidades', 'actina', 'estereocilios', 'cilios', 'axonema', 'dineína'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El dominio apical suele llevar prolongaciones especializadas, y conviene no confundirlas. Las MICROVELLOSIDADES son pliegues digitiformes con núcleo de ACTINA (estabilizada por villina) que multiplican la superficie de absorción: se ven como "ribete en cepillo" en el intestino y "chapa estriada" en el túbulo proximal renal. Los ESTEREOCILIOS son prolongaciones largas, filiformes e INMÓVILES (con espectrina), sensoriales o de absorción, en el oído interno, el epidídimo y el conducto deferente. Los CILIOS son MÓVILES (~10 μm), con un esqueleto interno llamado axonema movido por la proteína motora dineína.',
          },
          {
            type: 'table',
            title: 'Tipos de cilios (por su axonema)',
            data: {
              headers: ['Tipo', 'Movimiento', 'Axonema', 'Función / localización'],
              rows: [
                ['Móviles', 'Rítmico y coordinado', '9+2', 'Desplazan moco/partículas: vías respiratorias, trompas de Falopio (golpe efectivo + de recuperación, ritmo metacrónico)'],
                ['Primarios', 'Inmóviles', '9+0', 'Sensoriales; en muchas células'],
                ['Nodales', 'Rotatorio', '9+0', 'Desarrollo embrionario: eje izquierda-derecha'],
              ],
            },
          },
        ],
      },
      {
        id: 'hpol-3',
        number: 3,
        title: 'Dominio lateral: medios de unión',
        keyTerms: ['zónula occludens', 'zónula adherente', 'desmosoma', 'nexos', 'cadherinas', 'conexinas'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'En el dominio lateral, las células vecinas se unen y comunican mediante complejos que se clasifican por su extensión: ZÓNULA (rodea toda la célula, como un cinturón), FASCIA o banda (una zona amplia) y MÁCULA (un punto). De arriba abajo, la zónula occludens sella el espacio; debajo, la zónula adherente y el desmosoma dan resistencia mecánica; y los nexos comunican. Cada una tiene sus proteínas características, que son lo más preguntado.',
          },
          {
            type: 'table',
            title: 'Los cuatro medios de unión',
            data: {
              headers: ['Unión', 'Qué hace', 'Proteínas clave'],
              rows: [
                ['Zónula occludens (estrecha)', 'Sella el espacio intercelular; barrera selectiva', 'Ocludina, claudina'],
                ['Zónula adherente', 'Cinturón de adhesión (bajo la occludens); unida a actina', 'Cadherinas (dependientes de Ca²⁺)'],
                ['Desmosoma (mácula adherente)', 'Unión célula-célula fuerte; resistencia mecánica', 'Desmogleína, desmocolina'],
                ['Unión comunicante (nexo)', 'Comunicación rápida entre células (músculo cardíaco)', 'Conexinas (forman conexones)'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Pénfigo vulgar',
            content:
              'El pénfigo vulgar es una enfermedad autoinmune con autoanticuerpos contra la desmogleína (desmogleína 1/3) del desmosoma: al perderse la adhesión célula-célula, la epidermis se separa y se forman ampollas. Es el ejemplo clínico que liga el desmosoma con la patología.',
          },
        ],
      },
      {
        id: 'hpol-4',
        number: 4,
        title: 'Dominio basal: unión a la matriz',
        keyTerms: ['hemidesmosoma', 'integrina', 'filamentos intermedios', 'contacto focal'],
        blocks: [
          {
            type: 'comparison',
            title: 'Hemidesmosoma vs. contacto focal',
            left: {
              title: 'Hemidesmosoma',
              items: ['Ancla la célula a la membrana basal.', 'Integrina + FILAMENTOS INTERMEDIOS.', 'Epitelios con abrasión: piel, córnea, cavidad oral, esófago, vagina.'],
            },
            right: {
              title: 'Contacto focal',
              items: ['Unión más dinámica a la matriz.', 'Integrina + FILAMENTOS DE ACTINA (vinculina, talina).', 'Migración celular y cicatrización.'],
            },
          },
        ],
      },
      {
        id: 'hpol-5',
        number: 5,
        title: 'Membrana basal',
        keyTerms: ['lámina lúcida', 'lámina densa', 'lámina reticular', 'colágeno tipo IV'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La membrana basal es la lámina sobre la que se asienta todo epitelio y hace de interfaz con el conectivo. Se organiza en tres capas —lámina lúcida, lámina densa y lámina reticular—, y la lámina densa es rica en COLÁGENO TIPO IV (su marcador). Además de dar soporte, filtra de forma selectiva (clave en el glomérulo renal), participa en la reparación y —mientras permanezca intacta— limita la invasión de células malignas; su ruptura es un paso hacia la invasión tumoral.',
          },
        ],
      },
      {
        id: 'hpol-6',
        number: 6,
        title: 'Glándulas',
        keyTerms: ['glándula', 'adenómero', 'exocrina', 'endocrina', 'célula caliciforme'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Una célula glandular es un epitelio especializado en sintetizar y liberar un producto; una glándula es el conjunto organizado de esas células. Se forman por HISTOGÉNESIS: el epitelio se invagina hacia el tejido conjuntivo durante el desarrollo. Si conserva el conducto que la une a la superficie, es EXOCRINA (su porción secretora se llama adenómero); si pierde el conducto y vierte a la sangre, es ENDOCRINA. Un caso unicelular típico es la célula caliciforme, secretora de moco del epitelio gastrointestinal.',
          },
          {
            type: 'list',
            title: 'Cómo se clasifican las glándulas',
            items: [
              'Por el conducto: simple o compuesta.',
              'Por la forma del adenómero (porción secretora).',
              'Por el producto: serosa, mucosa o mixta.',
              'Por el mecanismo de secreción: merócrina, apócrina, holócrina o endócrina.',
            ],
          },
        ],
      },
      {
        id: 'hpol-7',
        number: 7,
        title: 'Mecanismos de secreción (tarea)',
        keyTerms: ['merócrina', 'apócrina', 'holócrina', 'endócrina'],
        blocks: [
          {
            type: 'note',
            title: 'Tarea de clase',
            content: 'Se dejó como TAREA elaborar la tabla de mecanismos de secreción con ejemplos. Aquí queda resuelta.',
          },
          {
            type: 'table',
            title: 'Merócrina · apócrina · holócrina · endócrina',
            data: {
              headers: ['Tipo', 'Qué pasa con la célula', 'Ejemplo'],
              rows: [
                ['Merócrina', 'Queda íntegra; libera por EXOCITOSIS', 'Sudoríparas, acinos pancreáticos'],
                ['Apócrina', 'Pierde parte del citoplasma apical con el producto', 'Glándula mamaria'],
                ['Holócrina', 'MUERE toda la célula y pasa a la secreción', 'Glándula sebácea'],
                ['Endócrina', 'Queda íntegra; libera a los capilares', 'Tiroides'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Enriquecimiento (no visto en clase): cilios y Kartagener',
            content:
              'Dato complementario, no dado en clase: la discinesia ciliar primaria (síndrome de Kartagener) se debe a una dineína ciliar defectuosa; al fallar los cilios móviles 9+2 y los nodales, aparece situs inversus, bronquiectasias e infertilidad. Conecta la biología del cilio con la clínica, pero verifícalo aparte —no formó parte de la clase—.',
          },
        ],
      },
    ],
  },
]
