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
  {
    id: 'histologia-glandulas',
    title: 'Glándulas y regeneración epitelial',
    subtitle: 'Mecanismos y tipos de secreción, clasificación, estroma/parénquima y células madre',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'Secreción REGULADA: se almacena el producto en gránulos y se libera ante una señal (nerviosa/hormonal). CONSTITUTIVA: se libera de forma continua, sin almacenamiento.',
      'Cuatro tipos: MERÓCRINA (exocitosis, célula intacta — páncreas, sudoríparas), APÓCRINA (pierde el ápice — mamaria), HOLÓCRINA (muere toda la célula — sebácea) y CITÓGENA (libera células completas — óvulos, espermatozoides).',
      'Adenómero = porción secretora; conducto excretor = transporta. Es una diferencia muy preguntada en el examen.',
      'Clasificación: por conducto (simple/compuesta/acinar en racimos), por forma del adenómero (acinosa/alveolar/tubular), por nº de células (unicelular = caliciforme / multicelular), por producto (mucoso/seroso/mixto) y por ubicación (intraepitelial/intramural/extramural).',
      'Producto mucoso: núcleo aplanado, citoplasma claro. Seroso: núcleo redondo, citoplasma granular basófilo. Mixto: semilunas de Gianuzzi (sublingual, submandibular).',
      'Organización topográfica: cápsula, tabiques, lóbulos y lobulillos. ESTROMA = soporte (conjuntivo); PARÉNQUIMA = función (secretora).',
      'El epitelio se renueva por mitosis de células madre: en simples con glándulas, en el fondo del adenómero; en pseudoestratificado y estratificado, en la capa basal. Modelo ASIMÉTRICO (una hija sigue madre, otra se diferencia) vs SIMÉTRICO (expansión).',
    ],
    sections: [
      {
        id: 'hgla-1',
        number: 1,
        title: 'Recap y mecanismos de secreción: regulado vs constitutivo',
        keyTerms: ['secreción regulada', 'secreción constitutiva', 'gránulos'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Las glándulas ya se introdujeron en «Polaridad celular epitelial» (exocrina/endocrina, adenómero y los mecanismos merócrina/apócrina/holócrina). Aquí se amplía la clase: se añade un cuarto mecanismo (citógena), la diferencia entre secreción regulada y constitutiva, y toda la clasificación. Una célula glandular libera su producto por dos vías según cómo lo maneje en el tiempo.',
          },
          {
            type: 'table',
            title: 'Regulado vs constitutivo',
            data: {
              headers: ['Mecanismo', 'Qué ocurre', 'Cuándo se libera'],
              rows: [
                ['Regulado', 'Se almacena el producto en gránulos', 'Ante una señal o estímulo (nervioso, hormonal)'],
                ['Constitutivo', 'Las moléculas van directas a la membrana en vesículas', 'De forma continua, sin almacenamiento previo'],
              ],
            },
          },
        ],
      },
      {
        id: 'hgla-2',
        number: 2,
        title: 'Los cuatro tipos de secreción',
        keyTerms: ['merócrina', 'apócrina', 'holócrina', 'citógena'],
        blocks: [
          {
            type: 'table',
            title: 'Merócrina · apócrina · holócrina · citógena',
            data: {
              headers: ['Tipo', 'Qué ocurre con la célula', 'Ejemplos'],
              rows: [
                ['Merócrina', 'Exocitosis sin pérdida de citoplasma; célula intacta', 'Páncreas, glándulas sudoríparas'],
                ['Apócrina', 'Pierde parte del citoplasma apical junto con el producto', 'Glándula mamaria (algunas sudoríparas)'],
                ['Holócrina', 'Muere la célula completa y pasa a formar parte del producto', 'Glándula sebácea'],
                ['Citógena', 'Se liberan células completas', 'Ovario (óvulos), testículo (espermatozoides)'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Novedad respecto a la Clase 2',
            content: 'La CITÓGENA es el cuarto tipo que se añade en esta clase (no estaba en la tabla de la Clase 2). Es una diferencia señalada como muy preguntada en el examen: asocia merócrina→exocitosis, apócrina→pierde ápice, holócrina→muere la célula, citógena→libera células.',
          },
        ],
      },
      {
        id: 'hgla-3',
        number: 3,
        title: 'Adenómero vs conducto excretor',
        keyTerms: ['adenómero', 'conducto excretor'],
        blocks: [
          {
            type: 'comparison',
            title: 'Las dos porciones de una glándula exocrina',
            left: {
              title: 'Adenómero',
              items: ['Porción SECRETORA.', 'Aquí se localizan las células dedicadas a secretar.'],
            },
            right: {
              title: 'Conducto excretor',
              items: ['TRANSPORTA y guía la secreción.', 'Conecta el adenómero con la superficie.'],
            },
          },
        ],
      },
      {
        id: 'hgla-4',
        number: 4,
        title: 'Clasificación de las glándulas',
        keyTerms: ['simple', 'compuesta', 'acinosa', 'alveolar', 'tubular', 'caliciforme', 'intramural', 'extramural'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Las glándulas se clasifican por varios criterios simultáneos; en el examen conviene poder ubicar una glándula en cada eje. Los cuatro ejes son: el conducto, la forma del adenómero, el número de células y la ubicación del adenómero (el producto se trata aparte).',
          },
          {
            type: 'table',
            title: 'Por conducto y por forma del adenómero',
            data: {
              headers: ['Criterio', 'Categorías'],
              rows: [
                ['Conducto', 'Simple (no se ramifica) · Compuesta (se ramifica) · Acinar/en racimos (múltiples adenómeros agrupados)'],
                ['Forma del adenómero', 'Acinosa (redondeada) · Alveolar (como acinosa, con luz más amplia) · Tubular (en tubo; gástricas e intestinales)'],
                ['Nº de células', 'Unicelular (célula caliciforme, secreta moco) · Multicelular'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Por ubicación del adenómero',
            data: {
              headers: ['Ubicación', 'Dónde está', 'Ejemplos'],
              rows: [
                ['Intraepitelial', 'Dentro del epitelio', 'Células caliciformes'],
                ['Intramural', 'Dentro de la pared del órgano', 'Glándulas del esófago y del estómago'],
                ['Extramural', 'Fuera del órgano, unida por conductos largos', 'Páncreas, hígado, glándulas salivales'],
              ],
            },
          },
        ],
      },
      {
        id: 'hgla-5',
        number: 5,
        title: 'Clasificación por el producto: mucoso, seroso y mixto',
        keyTerms: ['mucoso', 'seroso', 'mixto', 'semilunas de Gianuzzi'],
        blocks: [
          {
            type: 'table',
            title: 'Mucoso vs seroso',
            data: {
              headers: ['Producto', 'Secreción', 'Núcleo', 'Citoplasma'],
              rows: [
                ['Mucoso', 'Rica en moco y glucoproteínas (lubrica y protege)', 'Aplanado', 'Claro'],
                ['Seroso', 'Acuosa, rica en proteínas y enzimas', 'Redondo', 'Granular, basófilo'],
              ],
            },
          },
          {
            type: 'paragraph',
            content:
              'La glándula MIXTA tiene componentes mucosos y serosos. Las células serosas pueden disponerse en media luna alrededor de las mucosas: son las SEMILUNAS DE GIANUZZI, típicas de las glándulas sublingual y submandibular. En el componente mixto, el mucoso lubrica y protege (ayuda a formar el bolo) y el seroso aporta agua y enzimas digestivas.',
          },
        ],
      },
      {
        id: 'hgla-6',
        number: 6,
        title: 'Organización topográfica: estroma vs parénquima',
        keyTerms: ['cápsula', 'tabiques', 'lóbulos', 'lobulillos', 'estroma', 'parénquima'],
        blocks: [
          {
            type: 'list',
            title: 'Organización interna de una glándula grande',
            items: [
              'Cápsula: envoltura externa de tejido conjuntivo.',
              'Tabiques: proyecciones de conjuntivo hacia el interior.',
              'Lóbulos: divisiones principales.',
              'Lobulillos: subdivisiones de los lóbulos.',
            ],
          },
          {
            type: 'comparison',
            title: 'Estroma vs parénquima',
            left: {
              title: 'Estroma',
              items: ['Elementos de tejido conjuntivo.', 'SOPORTE de la glándula.'],
            },
            right: {
              title: 'Parénquima',
              items: ['Porción secretora.', 'FUNCIÓN de la glándula.'],
            },
          },
        ],
      },
      {
        id: 'hgla-7',
        number: 7,
        title: 'Regeneración epitelial y modelos de célula madre',
        keyTerms: ['células madre', 'modelo asimétrico', 'modelo simétrico'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los epitelios se renuevan por mitosis de células madre, y su localización depende del tipo de epitelio: en los epitelios simples con glándulas están en el fondo del adenómero (o repartidas entre las células); en los pseudoestratificados y estratificados, en la capa basal. Al dividirse una célula madre estratificada, una hija conserva el estado de madre y la otra asciende y se diferencia: así se mantiene la reserva y se renueva el epitelio.',
          },
          {
            type: 'comparison',
            title: 'Modelo asimétrico vs simétrico',
            left: {
              title: 'Asimétrico',
              items: ['Una hija sigue siendo madre; la otra se diferencia.', 'Mantiene constante la población de células madre.'],
            },
            right: {
              title: 'Simétrico',
              items: ['Ambas hijas conservan el estado de madre.', 'Favorece la expansión rápida de la población.'],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Por qué la piel conserva reserva de células madre',
            content:
              'En tejidos con alta necesidad de protección y recambio, como la piel, es importante conservar la población de células madre basales. El modelo asimétrico permite renovar el epitelio sin agotar la reserva: una hija repone la superficie y la otra mantiene el pool germinativo.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-epitelios-urinario',
    illustration: {
      src: '/ilustraciones/histologia/urinario-corpusculo.png',
      alt: 'Corpúsculo renal (glomérulo) con sus tipos celulares rotulados: podocitos, célula endotelial capilar, célula mesangial, la hoja parietal de la cápsula de Bowman, mácula densa y arteriolas aferente/eferente.',
      credit: 'NIAID NIH BioART Source — CC BY 4.0',
      source: 'bioart',
      sourceUrl: 'https://bioart.niaid.nih.gov/bioart/562',
      license: 'ccby',
    },
    title: 'Epitelios del aparato urinario: urotelio y glomérulo',
    subtitle: 'Urotelio de transición, células en paraguas, cápsula de Bowman y barrera de filtración',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'El UROTELIO (epitelio de transición) reviste desde los cálices menores → cálices mayores → pelvis renal → uréteres → vejiga → uretra proximal (NO toda la uretra).',
      'Tres poblaciones: basales (pequeñas, tocan la MB, células madre), intermedias (piriformes, reserva) y superficiales o EN PARAGUAS (grandes, binucleadas, enfrentan la orina).',
      'Distensión: vejiga vacía = más estratos y células abombadas (parece grueso); llena = parece delgado, las células se deslizan y aplanan (no se pierden) → de ahí «epitelio de transición».',
      'Protección frente a la orina: placas uroteliales (uroplaquinas), vesículas fusiformes, uniones ocluyentes muy desarrolladas y recambio lento.',
      'Corpúsculo renal = glomérulo + cápsula de Bowman. Hoja PARIETAL = plano simple; hoja VISCERAL = podocitos con pedicelos que forman ranuras de filtración.',
      'Barrera de filtración glomerular (3 capas): endotelio fenestrado + membrana basal glomerular (colágeno IV + heparán sulfato, barrera de carga que frena la albúmina) + podocitos/pedicelos.',
      'La vía urinaria conduce y almacena; NO modifica la orina tras la filtración. Se producen ~180 L/día de ultrafiltrado y se reabsorbe >99 %.',
    ],
    sections: [
      {
        id: 'huri-1',
        number: 1,
        title: 'Urotelio: qué es y hasta dónde llega',
        keyTerms: ['urotelio', 'epitelio de transición', 'vías urinarias'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El urotelio es el epitelio de transición de las vías urinarias. Debe resolver dos problemas a la vez: permitir que la vejiga se distienda sin romperse y evitar que la orina pase al tejido y a la sangre. Su extensión exacta es dato de examen.',
          },
          {
            type: 'note',
            title: '★ Extensión del urotelio',
            content: 'Cálices menores → cálices mayores → pelvis renal → uréteres → vejiga → segmento proximal de la uretra. No reviste toda la uretra.',
          },
        ],
      },
      {
        id: 'huri-2',
        number: 2,
        title: 'Poblaciones celulares y distensión',
        keyTerms: ['células basales', 'células intermedias', 'células en paraguas', 'distensión'],
        blocks: [
          {
            type: 'table',
            title: 'Las tres poblaciones del urotelio',
            data: {
              headers: ['Población', 'Rasgos', 'Función'],
              rows: [
                ['Basales', 'Pequeñas; contactan la membrana basal; mitóticamente activas', 'Células madre del epitelio'],
                ['Intermedias', 'Morfología piriforme', 'Reserva estructural'],
                ['Superficiales / en paraguas', 'Grandes, con frecuencia binucleadas; enfrentan la orina', 'Protección del epitelio'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Vejiga vacía vs llena',
            left: {
              title: 'Vacía / relajada',
              items: ['Se observan más estratos.', 'Células superficiales más abombadas.', 'El epitelio aparenta ser más grueso.'],
            },
            right: {
              title: 'Llena / distendida',
              items: ['Aparenta ser más delgado; menos capas.', 'Las células se deslizan y se aplanan.', 'No se pierden células: cambia su disposición.'],
            },
          },
        ],
      },
      {
        id: 'huri-3',
        number: 3,
        title: 'Protección del urotelio frente a la orina',
        keyTerms: ['placas uroteliales', 'uroplaquinas', 'vesículas fusiformes', 'uniones ocluyentes'],
        blocks: [
          {
            type: 'list',
            title: 'Cuatro mecanismos de protección',
            items: [
              'Placas uroteliales: áreas rígidas de la membrana apical formadas por uroplaquinas.',
              'Vesículas fusiformes: reservas de membrana que se incorporan a la superficie al llenarse y se recuperan por endocitosis.',
              'Uniones ocluyentes muy desarrolladas: reducen el paso paracelular.',
              'Recambio celular lento (puede acelerarse ante lesión).',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Correlaciones clínicas del urotelio',
            content:
              'Cistitis: la inflamación puede exfoliar células en paraguas → disuria, aumento de la frecuencia y, en lesión avanzada, hematuria. Escherichia coli es el patógeno urinario más frecuente y se adhiere al urotelio con fimbrias, dificultando su arrastre en la micción. Reflujo vesicoureteral (sobre todo en niños): retorno de orina hacia los uréteres/riñón, con IVU recurrentes y posible cicatrización renal. Carcinoma urotelial: suele ser multifocal porque todo el urotelio se expuso a los mismos carcinógenos (tabaco, aminas aromáticas, tintes, pinturas, hule, cuero).',
          },
        ],
      },
      {
        id: 'huri-4',
        number: 4,
        title: 'Corpúsculo renal y cápsula de Bowman',
        keyTerms: ['corpúsculo renal', 'cápsula de Bowman', 'podocitos', 'pedicelos', 'polo vascular', 'polo urinario'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El corpúsculo renal = glomérulo (ovillo de capilares) + cápsula de Bowman, y su función es filtrar la sangre para producir el ultrafiltrado. La cápsula tiene dos hojas y su epitelio es dato de examen.',
          },
          {
            type: 'comparison',
            title: 'Las dos hojas de la cápsula de Bowman',
            left: {
              title: 'Hoja parietal',
              items: ['Hoja externa.', 'Epitelio PLANO SIMPLE.', 'Apoyada sobre membrana basal.'],
            },
            right: {
              title: 'Hoja visceral',
              items: ['Hoja interna.', 'Formada por PODOCITOS.', 'Sus pedicelos forman las ranuras de filtración.'],
            },
          },
          {
            type: 'paragraph',
            content:
              'En el POLO VASCULAR entra la arteriola aferente y sale la eferente. En el POLO URINARIO, el epitelio plano simple de la hoja parietal cambia a cúbico simple: es el inicio del túbulo contorneado proximal.',
          },
          {
            type: 'table',
            title: 'Epitelios a lo largo de la nefrona',
            data: {
              headers: ['Región', 'Epitelio'],
              rows: [
                ['Cápsula de Bowman (parietal)', 'Plano simple'],
                ['Túbulo proximal', 'Cúbico simple con borde en cepillo'],
                ['Asa de Henle', 'Plano simple'],
                ['Túbulo colector', 'Cúbico a cilíndrico simple'],
              ],
            },
          },
        ],
      },
      {
        id: 'huri-5',
        number: 5,
        title: 'Barrera de filtración glomerular',
        keyTerms: ['endotelio fenestrado', 'membrana basal glomerular', 'colágeno IV', 'albuminuria'],
        blocks: [
          {
            type: 'list',
            title: 'Las tres capas de la barrera',
            items: [
              'Endotelio fenestrado: poros que dejan pasar moléculas pequeñas y retienen elementos celulares.',
              'Membrana basal glomerular: rica en colágeno tipo IV y heparán sulfato; barrera de tamaño y de carga (la carga negativa frena la albúmina).',
              'Podocitos y pedicelos: sus ranuras de filtración dejan pasar agua, iones y moléculas pequeñas y frenan células y proteínas grandes.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Diabetes y albuminuria',
            content:
              'La hiperglucemia crónica altera la barrera glomerular: hiperfiltración → engrosamiento y daño de la barrera → pérdida de proteínas → ALBUMINURIA (albúmina en orina), señal importante de daño glomerular en el paciente diabético.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Cifras del ultrafiltrado',
            content:
              'El corpúsculo renal produce ~180 L de ultrafiltrado al día; después se reabsorbe más del 99 % a lo largo de los túbulos. La vía urinaria conduce y almacena la orina, pero NO la modifica tras su formación renal.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-epitelios-respiratorio',
    illustration: {
      src: '/ilustraciones/histologia/respiratorio-alveolos.png',
      alt: 'Alvéolo pulmonar: epitelio de neumocitos rodeado de capilares con eritrocitos, sitio del intercambio gaseoso.',
      credit: 'NIAID NIH BioART Source — CC BY 4.0',
      source: 'bioart',
      sourceUrl: 'https://bioart.niaid.nih.gov/bioart/567',
      license: 'ccby',
    },
    title: 'Epitelios del aparato respiratorio y alvéolo',
    subtitle: 'Porción conductora vs respiratoria, epitelio pseudoestratificado ciliado, alvéolo y neumocitos',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'Porción CONDUCTORA (conduce, limpia, calienta y humidifica el aire) vs porción RESPIRATORIA (intercambio gaseoso en los alvéolos).',
      'Epitelio respiratorio (tráquea y bronquios principales): cilíndrico PSEUDOESTRATIFICADO ciliado con caliciformes (todas tocan la MB, no todas llegan a la superficie; núcleos a distinta altura).',
      'Células principales: ciliadas (llegan a la superficie), caliciformes (secretan moco) y basales (madre). Sistema mucociliar: el moco atrapa partículas y los cilios las desplazan.',
      'A menor calibre, epitelio más bajo y menos caliciformes (tráquea → bronquios → bronquiolos → alvéolos). En bronquiolos aparecen las células de Club.',
      'Alvéolo: epitelio PLANO SIMPLE. Neumocito I (≈95 % de la superficie, intercambio gaseoso); neumocito II (surfactante en cuerpos lamelares + célula progenitora que regenera).',
      'Barrera hematogaseosa (~0.2 μm): neumocito I + membranas basales fusionadas + endotelio capilar. Los macrófagos alveolares limpian.',
    ],
    sections: [
      {
        id: 'hres-1',
        number: 1,
        title: 'Porción conductora vs respiratoria',
        keyTerms: ['porción conductora', 'porción respiratoria'],
        blocks: [
          {
            type: 'comparison',
            title: 'Las dos regiones funcionales',
            left: {
              title: 'Conductora',
              items: ['Conduce el aire.', 'Lo limpia, lo calienta y lo humidifica.', 'Tráquea, bronquios, bronquiolos.'],
            },
            right: {
              title: 'Respiratoria',
              items: ['Intercambio gaseoso.', 'Ocurre en los alvéolos.'],
            },
          },
        ],
      },
      {
        id: 'hres-2',
        number: 2,
        title: 'Epitelio respiratorio y sus células',
        keyTerms: ['pseudoestratificado', 'ciliadas', 'caliciformes', 'células basales'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'En la tráquea y los bronquios principales el epitelio es cilíndrico pseudoestratificado ciliado con células caliciformes. Se llama pseudoestratificado porque todas las células se apoyan sobre la membrana basal, pero no todas llegan a la superficie, y sus núcleos quedan a diferentes alturas: parece estratificado sin serlo.',
          },
          {
            type: 'table',
            title: 'Células principales del epitelio respiratorio',
            data: {
              headers: ['Célula', 'Función'],
              rows: [
                ['Ciliadas', 'Abundantes; llegan a la superficie; desplazan el moco'],
                ['Caliciformes', 'Secretan moco'],
                ['Basales', 'Células madre; renuevan el epitelio'],
              ],
            },
          },
          {
            type: 'image',
            src: '/ilustraciones/histologia/respiratorio-epitelio.png',
            alt: 'Célula del epitelio respiratorio ciliado, con los cilios en su superficie apical.',
            caption: 'Epitelio ciliado: los cilios del dominio apical desplazan el moco.',
            source: 'bioart',
            sourceUrl: 'https://bioart.niaid.nih.gov/bioart/824',
            license: 'pd',
          },
        ],
      },
      {
        id: 'hres-3',
        number: 3,
        title: 'Sistema mucociliar y cambio por calibre',
        keyTerms: ['sistema mucociliar', 'células de Club', 'metaplasia escamosa'],
        blocks: [
          {
            type: 'steps',
            title: 'Sistema mucociliar (defensa de la vía aérea)',
            steps: [
              'Una partícula inhalada queda atrapada en el moco.',
              'Los cilios laten de forma coordinada.',
              'El moco cargado de partículas se desplaza hacia fuera.',
            ],
          },
          {
            type: 'note',
            title: 'A menor calibre, epitelio más bajo',
            content: 'Tráquea → bronquios → bronquiolos → alvéolos: el epitelio se hace más bajo y con menos caliciformes. En los bronquiolos aparecen las células de Club.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Tabaquismo y fibrosis quística',
            content:
              'El tabaquismo crónico daña el epitelio respiratorio: pierde cilios y sufre metaplasia escamosa (aparece epitelio plano donde no corresponde), lo que se asocia a enfermedad respiratoria crónica. En la fibrosis quística el moco es espeso y los cilios no lo movilizan bien → infecciones respiratorias recurrentes y bronquiectasias.',
          },
        ],
      },
      {
        id: 'hres-4',
        number: 4,
        title: 'Alvéolo y neumocitos',
        keyTerms: ['alvéolo', 'plano simple', 'neumocito I', 'neumocito II', 'surfactante', 'cuerpos lamelares'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los alvéolos son las estructuras terminales del intercambio gaseoso y su epitelio es PLANO SIMPLE: su extrema delgadez favorece la difusión de gases. En él conviven dos tipos de neumocito.',
          },
          {
            type: 'comparison',
            title: 'Neumocito I vs II',
            left: {
              title: 'Neumocito tipo I',
              items: ['Célula muy plana, citoplasma extendido.', 'Cubre ≈95 % de la superficie alveolar.', 'Función: INTERCAMBIO gaseoso.'],
            },
            right: {
              title: 'Neumocito tipo II',
              items: ['Generalmente cúbico; menor superficie.', 'Produce SURFACTANTE (almacenado en cuerpos lamelares).', 'Célula progenitora: REGENERA el epitelio.'],
            },
          },
          {
            type: 'note',
            title: 'Surfactante',
            content: 'Reduce la tensión superficial, facilita la expansión pulmonar y disminuye el esfuerzo para inflar los alvéolos.',
          },
        ],
      },
      {
        id: 'hres-5',
        number: 5,
        title: 'Barrera hematogaseosa y macrófagos',
        keyTerms: ['barrera hematogaseosa', 'macrófagos alveolares'],
        blocks: [
          {
            type: 'list',
            title: 'Barrera hematogaseosa (~0.2 μm)',
            items: [
              'Citoplasma del neumocito tipo I.',
              'Membranas basales fusionadas.',
              'Citoplasma del endotelio capilar.',
            ],
          },
          {
            type: 'paragraph',
            content:
              'Su extrema delgadez (≈0.2 μm) facilita el intercambio de gases. Los macrófagos alveolares fagocitan partículas y microorganismos y mantienen limpio el alvéolo.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Anafilaxia y edema pulmonar',
            content:
              'En la anafilaxia, una respuesta inmunitaria intensa con liberación masiva de histamina altera los vasos y la barrera alveolar y compromete el intercambio: dificultad respiratoria, caída de la saturación de oxígeno, infiltración de líquido y edema pulmonar agudo.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-piel',
    illustration: {
      src: '/ilustraciones/histologia/piel-epidermis.png',
      alt: 'Corte de piel: epidermis (epitelio estratificado), dermis, folículo piloso y glándula sudorípara, y tejido adiposo de la hipodermis.',
      credit: 'NIAID NIH BioART Source — dominio público',
      source: 'bioart',
      sourceUrl: 'https://bioart.niaid.nih.gov/bioart/677',
      license: 'pd',
    },
    title: 'Histología de la piel: epidermis y estratos',
    subtitle: 'Epidermis plano estratificada queratinizada, los 5 estratos, las 4 células y la unión dermoepidérmica',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'La piel es el órgano más grande (~1.8 m², ≈16 % del peso; recambio epidérmico en 4–6 semanas). Funciones: barrera, termorregulación, sensorial, inmunovigilancia (Langerhans), vitamina D y fotoprotección.',
      'Epidermis (epitelio ectodérmico, AVASCULAR) + dermis (conjuntivo mesodérmico, con vasos y nervios) + hipodermis (fascia superficial; estrictamente no es piel).',
      'Epidermis = plano estratificado QUERATINIZADO. Cinco estratos B-E-G-L-C: basal → espinoso → granuloso → lúcido → córneo. El lúcido solo se ve en PIEL GRUESA (palmas y plantas).',
      'Cuatro poblaciones: queratinocito (ectodermo, 85–90 %), melanocito (cresta neural, basal, melanosomas; 1 melanocito ≈ 30–40 queratinocitos), Langerhans (médula ósea, espinoso, presenta antígeno) y Merkel (basal, mecanorreceptor de adaptación lenta).',
      'Uniones: DESMOSOMA (queratinocito↔queratinocito; desmogleína/desmocolina) vs HEMIDESMOSOMA (queratinocito basal↔membrana basal; integrinas, BP180/BP230).',
      'Clínica: pénfigo vulgar (anti-desmogleína → ampolla INTRAepidérmica) vs penfigoide ampolloso (hemidesmosoma/BP180-BP230 → ampolla SUBepidérmica); vitíligo (destrucción autoinmune de melanocitos) vs albinismo (melanocitos presentes, tirosinasa deficiente); melanoma (invasivo al cruzar la MB; regla ABCDE).',
    ],
    sections: [
      {
        id: 'hpiel-1',
        number: 1,
        title: 'Generalidades y funciones de la piel',
        keyTerms: ['órgano más grande', 'barrera', 'termorregulación', 'inmunovigilancia'],
        blocks: [
          {
            type: 'table',
            title: 'La piel en cifras',
            data: {
              headers: ['Característica', 'Dato'],
              rows: [
                ['Superficie (adulto)', '≈1.8 m²'],
                ['Porcentaje del peso corporal', '≈16 %'],
                ['Espesor', '0.5 mm a >4 mm según la región'],
                ['Recambio epidérmico completo', '4–6 semanas'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Funciones',
            items: [
              'Barrera física, química y microbiológica (organización de la epidermis y sus lípidos).',
              'Termorregulación (plexos vasculares dérmicos y glándulas sudoríparas).',
              'Recepción sensorial (corpúsculos y terminaciones nerviosas de la dermis).',
              'Inmunovigilancia (células de Langerhans).',
              'Síntesis de vitamina D (queratinocitos, 7-dehidrocolesterol).',
              'Fotoprotección frente a la radiación ultravioleta (melanina).',
            ],
          },
        ],
      },
      {
        id: 'hpiel-2',
        number: 2,
        title: 'Componentes: epidermis, dermis e hipodermis',
        keyTerms: ['epidermis', 'dermis', 'hipodermis', 'avascular'],
        blocks: [
          {
            type: 'table',
            title: 'Los tres componentes del tegumento',
            data: {
              headers: ['Región', 'Origen / naturaleza', 'Clave'],
              rows: [
                ['Epidermis', 'Epitelio, ectodermo', 'AVASCULAR'],
                ['Dermis', 'Tejido conectivo, mesodermo', 'Vasos y nervios'],
                ['Hipodermis', 'Conjuntivo laxo y adiposo', 'Fascia superficial; estrictamente no es piel'],
              ],
            },
          },
        ],
      },
      {
        id: 'hpiel-3',
        number: 3,
        title: 'Epidermis y los cinco estratos (B-E-G-L-C)',
        keyTerms: ['plano estratificado queratinizado', 'basal', 'espinoso', 'granuloso', 'lúcido', 'córneo'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La epidermis es un epitelio plano estratificado queratinizado, avascular, apoyado sobre la membrana basal, en el que los queratinocitos se diferencian progresivamente hacia la superficie. De profundo a superficial se ordenan en cinco estratos.',
          },
          {
            type: 'table',
            title: 'Los cinco estratos (de profundo a superficial)',
            data: {
              headers: ['Estrato', 'Rasgos', 'Clave'],
              rows: [
                ['Basal (germinativo)', 'Una hilera, células cúbicas/cilíndricas, núcleos hipercromáticos', 'Mitosis, células madre, melanocitos y Merkel'],
                ['Espinoso', '8–10 hileras poliédricas; desmosomas + tonofilamentos', 'Resistencia mecánica; Langerhans'],
                ['Granuloso', '3–5 hileras aplanadas; gránulos de queratohialina (filagrina)', 'Cuerpos lamelares → ceramidas/colesterol/ácidos grasos = barrera'],
                ['Lúcido', 'Banda clara, eosinófila, anucleada; eleidina', 'SOLO en piel gruesa (palmas y plantas)'],
                ['Córneo', '15–20 hileras de corneocitos anucleados', 'Queratina; barrera física'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Mnemotecnia y piel delgada vs gruesa',
            content: 'B-E-G-L-C: Basal → Espinoso → Granuloso → Lúcido → Córneo. La diferencia epidérmica más útil para identificar al microscopio es la presencia del estrato LÚCIDO: solo aparece en la piel gruesa (palmas y plantas).',
          },
        ],
      },
      {
        id: 'hpiel-4',
        number: 4,
        title: 'Historia de vida del queratinocito',
        keyTerms: ['queratinocito', 'diferenciación', 'descamación'],
        blocks: [
          {
            type: 'steps',
            title: 'Del estrato basal a la descamación',
            steps: [
              'Nace por mitosis en el estrato basal.',
              'En el espinoso adquiere desmosomas y tonofilamentos (resistencia).',
              'En el granuloso forma queratohialina y libera lípidos de barrera.',
              'En piel gruesa atraviesa el estrato lúcido.',
              'En el córneo se convierte en corneocito anucleado y finalmente se descama.',
            ],
          },
        ],
      },
      {
        id: 'hpiel-5',
        number: 5,
        title: 'Las cuatro poblaciones celulares',
        keyTerms: ['queratinocito', 'melanocito', 'Langerhans', 'Merkel', 'unidad melanoepidérmica'],
        blocks: [
          {
            type: 'table',
            title: 'Células de la epidermis',
            data: {
              headers: ['Célula', 'Origen', 'Localización', 'Función', '% aprox.'],
              rows: [
                ['Queratinocito', 'Ectodermo superficial', 'Todos los estratos', 'Protección y queratina', '85–90 %'],
                ['Melanocito', 'Cresta neural', 'Basal', 'Melanina / fotoprotección (melanosomas)', '5–10 %'],
                ['Langerhans', 'Médula ósea', 'Espinoso', 'Presentación de antígeno (inmunovigilancia)', '2–5 %'],
                ['Merkel', 'Precursor epidérmico (según las diapositivas)', 'Basal', 'Mecanorreceptor de adaptación lenta', '<1 %'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Unidad melanoepidérmica',
            content:
              'Un melanocito abastece de melanina a ≈30–40 queratinocitos vecinos. La melanina se distribuye en los queratinocitos y forma una «sombrilla perinuclear» sobre el núcleo: absorbe la radiación ultravioleta y protege el ADN.',
          },
        ],
      },
      {
        id: 'hpiel-6',
        number: 6,
        title: 'Unión dermoepidérmica y membrana basal',
        keyTerms: ['desmosoma', 'hemidesmosoma', 'BP180', 'BP230', 'membrana basal'],
        blocks: [
          {
            type: 'comparison',
            title: 'Desmosoma vs hemidesmosoma',
            left: {
              title: 'Desmosoma',
              items: ['Une queratinocito ↔ queratinocito.', 'Desmogleínas, desmocolinas y tonofilamentos.'],
            },
            right: {
              title: 'Hemidesmosoma',
              items: ['Une queratinocito basal ↔ membrana basal.', 'Integrinas y proteínas de anclaje (BP180, BP230).'],
            },
          },
          {
            type: 'paragraph',
            content:
              'La membrana basal de la unión dermoepidérmica presenta lámina lúcida y lámina densa (colágeno tipo IV) y fibrillas de anclaje (colágeno tipo VII) que la sujetan a la dermis. La dermis se organiza en papilar (superficial, papilas, nutre la epidermis) y reticular (profunda, conjuntivo denso, con folículos, glándulas sebáceas y sudoríparas); sus plexos vasculares sostienen la termorregulación. La celularidad detallada de la dermis se estudia con el tejido conectivo.',
          },
        ],
      },
      {
        id: 'hpiel-7',
        number: 7,
        title: 'Correlaciones clínicas de la piel',
        keyTerms: ['pénfigo vulgar', 'penfigoide ampolloso', 'vitíligo', 'albinismo', 'melanoma', 'ABCDE'],
        blocks: [
          {
            type: 'comparison',
            title: 'Pénfigo vulgar vs penfigoide ampolloso',
            left: {
              title: 'Pénfigo vulgar',
              items: ['Anticuerpos anti-desmogleína 1/3 (desmosoma).', 'Se pierde adhesión queratinocito-queratinocito.', 'Ampolla INTRAepidérmica.'],
            },
            right: {
              title: 'Penfigoide ampolloso',
              items: ['Daño al hemidesmosoma (BP180/BP230).', 'Se separa la basal de la membrana basal.', 'Ampolla SUBepidérmica.'],
            },
          },
          {
            type: 'comparison',
            title: 'Vitíligo vs albinismo',
            left: {
              title: 'Vitíligo',
              items: ['Destrucción autoinmune de melanocitos.', 'Pérdida de pigmentación en las áreas afectadas.'],
            },
            right: {
              title: 'Albinismo',
              items: ['Melanocitos PRESENTES.', 'Deficiencia de tirosinasa → melanina disminuida.'],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Melanoma, psoriasis y quemaduras',
            content:
              'Melanoma: tumor del melanocito; se vuelve invasivo al atravesar la membrana basal y alcanzar vasos sanguíneos y linfáticos (mejor pronóstico si se detecta antes de cruzarla). Se valora con la regla ABCDE (Asimetría, Bordes, Color, Diámetro, Evolución) y el diagnóstico definitivo es por biopsia. Psoriasis: recambio acelerado (~7–10 días frente a las 4–6 semanas normales). Quemadura: la epidermis es avascular y no sangra; si alcanza la dermis (2.º grado) sí sangra.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-repaso-s2',
    title: 'Repaso para el examen — Semana 2',
    subtitle: 'Banco tipo examen: identificación de epitelios y caso clínico',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '📝',
    keyPoints: [
      'El examen es PURAMENTE histológico (identificar epitelios): 30 preguntas de banco aleatorio + 5 del caso clínico = 35.',
      'Plano simple → cápsula de Bowman (hoja parietal), alvéolos y vasos. Un capilar se distingue por los eritrocitos atrapados en la luz; neumocito II abombado vs I aplanado.',
      'Cúbico simple → conductos (colectores renales, ovillos sudoríparos) y glándulas (folículos tiroideos). Cilíndrico simple → vesícula biliar; intestino delgado (borde en cepillo + caliciformes) vs estómago (foveolas, SIN caliciformes).',
      'Plano estratificado QUERATINIZADO → piel y lengua; NO queratinizado → esófago y endocérvix (las células superficiales conservan núcleo).',
      'Urotelio (transición) → de cálices menores a uretra proximal; células en paraguas superficiales, abombadas y BINUCLEADAS; parece adelgazarse al distenderse (las células se deslizan).',
      'Tráquea → cilíndrico pseudoestratificado ciliado con caliciformes; cilio móvil = axonema 9+2 con dineína.',
      'Caso Kartagener (discinesia ciliar primaria): ausencia de los brazos de dineína → cilios inmóviles → bronquiectasias y sinusitis; situs inversus por alteración de los cilios nodales embrionarios.',
    ],
    sections: [
      {
        id: 'hrep2-1',
        number: 1,
        title: 'Cómo usar este repaso',
        keyTerms: ['repaso', 'examen', 'identificación'],
        blocks: [
          {
            type: 'note',
            title: 'Es repaso — banco tipo examen',
            content:
              'No es contenido nuevo: la Clase 5 fue un repaso previo al examen con ejercicios de identificación al microscopio. El examen es PURAMENTE histológico (reconocer epitelios) y consta de 30 preguntas de banco aleatorio + 5 del caso clínico (síndrome de Kartagener) = 35. Cada tema se estudia a fondo en sus topics de Semana 2 (glándulas, epitelios del aparato urinario y respiratorio, y piel).',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Estrategia de examen',
            content:
              'Lee el caso clínico con calma (2–3 veces): todas las preguntas apuntan a temas de histología ya vistos, no a medicina avanzada, así que no busques definiciones más complejas. En opción múltiple, primero descarta los dos distractores obvios y decide entre los dos que quedan. Ubícate siempre en la capa basal y sigue el epitelio hacia la superficie.',
          },
        ],
      },
      {
        id: 'hrep2-2',
        number: 2,
        title: 'Lo evaluable, agrupado (identificación de epitelios)',
        keyTerms: ['plano simple', 'cúbico simple', 'cilíndrico simple', 'estratificado', 'transición', 'pseudoestratificado'],
        blocks: [
          {
            type: 'table',
            title: '★ Asociaciones de alto rendimiento',
            data: {
              headers: ['Epitelio', 'Dónde / cómo se identifica'],
              rows: [
                ['Plano simple', 'Cápsula de Bowman (hoja parietal), alvéolos y vasos. Capilar = eritrocitos en la luz; neumocito II abombado vs I aplanado; macrófago alveolar = célula grande en la luz.'],
                ['Cúbico simple', 'Conductos colectores renales, folículos tiroideos (con coloide) y ovillos de glándulas sudoríparas (luz reducida). Regla: cúbico → conductos/glándulas.'],
                ['Cilíndrico simple', 'Vesícula biliar; intestino delgado (borde en cepillo + caliciformes); estómago (foveolas, SIN caliciformes, secreta moco por sus conductos).'],
                ['Plano estratificado queratinizado', 'Piel (estrato córneo anucleado, aspecto asalmonelado) y lengua (botones gustativos).'],
                ['Plano estratificado no queratinizado', 'Esófago y endocérvix; las células superficiales conservan el núcleo (mucosa húmeda, sin estrato córneo).'],
                ['Cúbico estratificado', 'Dos hileras de células cúbicas: conductos de glándulas sudoríparas y grandes conductos exocrinos; transición anorrectal (línea pectínea).'],
                ['Transición (urotelio)', 'De cálices menores a uretra proximal; células en paraguas superficiales, abombadas y binucleadas; parece adelgazarse al distenderse.'],
                ['Cilíndrico pseudoestratificado ciliado', 'Tráquea y bronquios: todas las células tocan la MB, no todas llegan a la superficie; con caliciformes. Cilio móvil = axonema 9+2 con dineína.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: '★ Dos que se anunciaron como probables',
            content:
              'Hallazgo frecuente de las células en paraguas del urotelio = son BINUCLEADAS. Sitio donde INICIA el urotelio = los cálices menores (renales).',
          },
        ],
      },
      {
        id: 'hrep2-3',
        number: 3,
        title: 'Caso clínico — síndrome de Kartagener',
        keyTerms: ['discinesia ciliar primaria', 'dineína', 'situs inversus', 'cilios nodales'],
        blocks: [
          {
            type: 'note',
            title: 'Enunciado del caso (5 preguntas)',
            content:
              'Hombre de 24 años, no fumador, sin exposición ocupacional, con tos productiva crónica y expectoración mucopurulenta de años de evolución; infecciones respiratorias y sinusitis de repetición desde la infancia, pólipos nasales e infertilidad primaria. Radiografía: dextrocardia. TC: bronquiectasias de predominio en lóbulos inferiores. Espermograma: espermatozoides de morfología normal pero INMÓVILES. La MET del axonema muestra 9 dobletes periféricos + par central conservados, con AUSENCIA de los brazos interno y externo de dineína.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: '★ Claves del caso',
            content:
              'Diagnóstico: discinesia ciliar primaria (síndrome de Kartagener). El déficit de brazos de dineína deja los cilios inmóviles → falla del transporte mucociliar → infecciones y bronquiectasias. El situs inversus se explica por alteración de los cilios NODALES embrionarios, que establecen el eje izquierda-derecha. Tríada clásica: situs inversus + bronquiectasias + sinusitis. (En el caso NO hay metaplasia: es un distractor.)',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-conectivo-matriz',
    title: 'Tejido conectivo: matriz, fibras y colágenos',
    subtitle: 'MEC vs células, clasificación, funciones, fibras y los colágenos I–VII',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'El conectivo es el tejido de SOSTÉN: a diferencia del epitelio (donde mandan las células), aquí predomina la MATRIZ EXTRACELULAR (MEC) sobre las células.',
      'Nueva estrategia de lectura: MEC → fibras → células → organización → función (en epitelio era forma celular → capas → especializaciones).',
      'Clasificación: embrionario (mesénquima), propiamente dicho y especializado (hueso, cartílago, adiposo, sangre).',
      'Cuatro funciones: soporte (tendón de Aquiles ↔ colágeno I), intercambio (vaso → MEC → célula), defensa (macrófagos, mastocitos, linfocitos, plasmocitos) y depósito de grasa (adipocitos → triglicéridos).',
      'MEC = fibras + sustancia fundamental + líquido + proteoglucanos; su composición define las propiedades mecánicas.',
      'Tres fibras: colágenas, elásticas y reticulares. El colágeno es la proteína MÁS abundante (~30 % de la proteína corporal, >28 tipos).',
      'Colágenos clave: I tracción (hueso, dentina, cemento, cicatriz), II cartílago, III reticular (hígado, vasos, granulación), IV lámina densa de la membrana basal, V placenta, VII anclaje (unión dermoepidérmica).',
    ],
    sections: [
      {
        id: 'hcon-1',
        number: 1,
        title: 'Idea central: conectivo vs epitelio',
        keyTerms: ['tejido conectivo', 'matriz extracelular', 'sostén'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El tejido conectivo es el tejido de sostén del organismo. Su diferencia clave con el epitelio es de proporción: en el epitelio las células son el elemento principal, mientras que en el conectivo lo es la MATRIZ EXTRACELULAR (MEC). Ya se vio un conectivo en «Histología de la piel» (la dermis) y su interfaz con el epitelio en «Polaridad celular epitelial» (membrana basal, colágeno IV); aquí se desarrolla el tejido en sí.',
          },
          {
            type: 'note',
            title: 'Regla inicial',
            content: 'Epitelio → las CÉLULAS como elemento principal. Conectivo → la MATRIZ EXTRACELULAR como elemento principal.',
          },
        ],
      },
      {
        id: 'hcon-2',
        number: 2,
        title: 'Clasificación general',
        keyTerms: ['embrionario', 'propiamente dicho', 'especializado', 'mesénquima'],
        blocks: [
          {
            type: 'list',
            title: 'Tres grandes grupos',
            items: [
              'Embrionario: mesénquima.',
              'Propiamente dicho: el que empieza a estudiarse en esta clase.',
              'Especializado: hueso, cartílago, tejido adiposo y sangre (temas de clases siguientes).',
            ],
          },
        ],
      },
      {
        id: 'hcon-3',
        number: 3,
        title: 'Funciones del tejido conectivo',
        keyTerms: ['soporte', 'intercambio', 'defensa', 'depósito de grasa'],
        blocks: [
          {
            type: 'table',
            title: 'Las cuatro funciones',
            data: {
              headers: ['Función', 'En qué consiste', 'Ejemplo'],
              rows: [
                ['Soporte estructural', 'Andamiaje que mantiene órganos y tejidos', 'Tendón de Aquiles (colágeno I organizado para resistir la tracción)'],
                ['Medio de intercambio', 'Los nutrientes pasan del vaso a la célula a través de la MEC', 'Vaso → MEC → célula'],
                ['Defensa y protección', 'Aloja células inmunitarias', 'Macrófagos, mastocitos, linfocitos, plasmocitos'],
                ['Depósito de grasa', 'Reserva de energía', 'Adipocitos → triglicéridos'],
              ],
            },
          },
        ],
      },
      {
        id: 'hcon-4',
        number: 4,
        title: 'Matriz extracelular y fibras',
        keyTerms: ['MEC', 'sustancia fundamental', 'proteoglucanos', 'fibras colágenas', 'fibras elásticas', 'fibras reticulares'],
        blocks: [
          {
            type: 'list',
            title: 'Componentes de la MEC',
            items: [
              'Fibras (colágenas, elásticas, reticulares).',
              'Sustancia fundamental.',
              'Líquido.',
              'Proteoglucanos y otras macromoléculas.',
            ],
          },
          {
            type: 'paragraph',
            content:
              'La composición de la MEC determina las propiedades mecánicas del tejido. Las fibras son de tres tipos —colágenas, elásticas y reticulares— y el objetivo ahora es entrenar el ojo para reconocerlas, sin depender solo de la forma celular.',
          },
        ],
      },
      {
        id: 'hcon-5',
        number: 5,
        title: 'Colágeno: tipos I–VII',
        keyTerms: ['colágeno', 'tracción', 'cartílago', 'reticular', 'lámina densa', 'anclaje'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El colágeno es la proteína MÁS abundante del cuerpo (~30 % de la proteína corporal). Existen más de 28 tipos; esta semana se enfatizan seis.',
          },
          {
            type: 'table',
            title: 'Los colágenos que se enfatizan',
            data: {
              headers: ['Tipo', 'Dónde / asociación', 'Clave'],
              rows: [
                ['I', 'Conectivo, hueso, dentina, cemento, cicatriz', 'Tracción (el más abundante)'],
                ['II', 'Cartílago hialino y elástico', 'Cartílago'],
                ['III', 'Fibras reticulares; hígado y vasos', 'Red / granulación'],
                ['IV', 'Lámina densa de la membrana basal', 'Lámina'],
                ['V', 'Placenta', 'Placenta'],
                ['VII', 'Une la lámina basal con la reticular (unión dermoepidérmica)', 'Anclaje'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Colágenos y MEC en la clínica',
            content:
              'Colágeno I → osteogénesis imperfecta (huesos frágiles). Colágeno III → aparece primero en la reparación y forma el tejido de granulación. Colágeno VII → epidermólisis ampollosa (falla el anclaje dermoepidérmico). Fibrilina/MEC → síndrome de Marfan. La cirrosis es fibrosis: acúmulo de colágeno que sustituye al tejido funcional.',
          },
        ],
      },
      {
        id: 'hcon-6',
        number: 6,
        title: 'Cómo identificar el conectivo al microscopio',
        keyTerms: ['algoritmo', 'identificación'],
        blocks: [
          {
            type: 'note',
            title: 'Algoritmo de identificación',
            content:
              '1) ¿Cuánta matriz extracelular hay? → 2) ¿Qué fibras predominan? → 3) ¿Cómo se organizan? → 4) ¿Qué células aparecen? → 5) ¿Cuál es la función mecánica o biológica? → 6) ¿Qué tejido puede ser? En conectivo se empieza por la MATRIZ, no por la forma celular.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-conectivo-celulas',
    illustration: {
      src: '/ilustraciones/histologia/conectivo-fibroblasto.png',
      alt: 'Fibroblasto: célula fusiforme alargada con núcleo central, la más abundante del tejido conectivo.',
      credit: 'NIAID NIH BioART Source — dominio público',
      source: 'bioart',
      sourceUrl: 'https://bioart.niaid.nih.gov/bioart/844',
      license: 'pd',
    },
    title: 'Células del tejido conectivo',
    subtitle: 'Células fijas y móviles: fibroblasto, adipocito, pericito, mastocito, macrófago y leucocitos',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'FIJAS (residentes): fibroblasto, adipocito, pericito, mastocito y macrófago. MÓVILES (llegan de la sangre): plasmocito, linfocito, neutrófilo, eosinófilo, basófilo y monocito. El macrófago aparece en ambas según su origen.',
      'Fibroblasto: la célula más abundante; SINTETIZA la MEC (colágeno, elastina, sustancia fundamental); fusiforme, RER abundante, Golgi desarrollado. El miofibroblasto participa en la cicatrización.',
      'Adipocito: almacena TRIGLICÉRIDOS y es endocrino (leptina); se ve como una gran gota lipídica clara con el núcleo desplazado a la periferia. Se distingue del folículo tiroideo (que tiene luz + coloide + epitelio).',
      'Pericito: rodea los capilares; regula el flujo y da soporte microvascular (tiene actina/miosina).',
      'Mastocito: gránulos metacromáticos; libera histamina y heparina; inflamación e hipersensibilidad inmediata.',
      'Macrófago: fagocitosis y presentación de antígenos; núcleo excéntrico (arriñonado), lisosomas. Sistema fagocítico mononuclear: monoblasto → monocito → (tejido) → macrófago; especializados: Kupffer (hígado), alveolares (pulmón), microglía (SNC).',
      'Plasmocito: deriva del linfocito B, produce anticuerpos; núcleo excéntrico "en rueda de carro"; vive 2–3 semanas.',
    ],
    sections: [
      {
        id: 'hctc-1',
        number: 1,
        title: 'Células fijas vs móviles',
        keyTerms: ['células fijas', 'células móviles', 'residentes'],
        blocks: [
          {
            type: 'comparison',
            title: 'Dos grandes grupos',
            left: {
              title: 'Fijas (residentes)',
              items: ['Fibroblasto', 'Adipocito', 'Pericito', 'Mastocito', 'Macrófago'],
            },
            right: {
              title: 'Móviles (llegan de la sangre)',
              items: ['Plasmocito', 'Linfocito', 'Neutrófilo', 'Eosinófilo', 'Basófilo', 'Monocito'],
            },
          },
          {
            type: 'note',
            title: 'El macrófago está en ambas',
            content: 'El macrófago aparece en las dos categorías: el monocito circulante (móvil) migra al tejido y se convierte en macrófago (residente). Es la relación monocito ↔ macrófago.',
          },
        ],
      },
      {
        id: 'hctc-2',
        number: 2,
        title: 'Fibroblasto',
        keyTerms: ['fibroblasto', 'MEC', 'miofibroblasto'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El fibroblasto es la célula más abundante y difundida del conectivo, y su función es SINTETIZAR la MEC: colágeno, elastina y sustancia fundamental. Es fusiforme, de núcleo elongado, citoplasma pálido, con RER abundante y Golgi desarrollado (activo cuando fabrica colágeno). El MIOFIBROBLASTO, con capacidad contráctil, participa en la cicatrización de heridas.',
          },
        ],
      },
      {
        id: 'hctc-3',
        number: 3,
        title: 'Adipocito',
        keyTerms: ['adipocito', 'triglicéridos', 'leptina', 'gota lipídica'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El adipocito almacena energía como TRIGLICÉRIDOS y cumple funciones de reserva, aislamiento térmico, protección mecánica y endocrina (produce adipocinas como la LEPTINA). Al microscopio se ve como un gran espacio claro (la gota lipídica se pierde en el procesamiento) con el núcleo desplazado a la periferia.',
          },
          {
            type: 'comparison',
            title: 'Adipocito vs folículo tiroideo (no confundir)',
            left: {
              title: 'Adipocito',
              items: ['Gran gota lipídica (espacio claro).', 'Núcleo periférico.', 'Sin epitelio que forme un folículo.'],
            },
            right: {
              title: 'Folículo tiroideo',
              items: ['Luz con coloide (acidófilo).', 'Rodeado de epitelio cúbico.', 'Es una glándula, no un depósito.'],
            },
          },
        ],
      },
      {
        id: 'hctc-4',
        number: 4,
        title: 'Pericito y mastocito',
        keyTerms: ['pericito', 'mastocito', 'gránulos metacromáticos', 'histamina'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El PERICITO deriva de células mesenquimatosas indiferenciadas, rodea parcialmente el endotelio de los capilares y regula el flujo sanguíneo y el soporte microvascular (contiene actina, miosina y tropomiosina). El MASTOCITO es una célula residente ovoide de núcleo central, con el citoplasma lleno de GRÁNULOS METACROMÁTICOS; libera histamina y heparina y participa en la inflamación y la hipersensibilidad inmediata. Regla: muchos gránulos metacromáticos = mastocito.',
          },
          {
            type: 'image',
            src: '/ilustraciones/histologia/conectivo-mastocito.png',
            alt: 'Mastocito: célula redondeada con núcleo central y el citoplasma cargado de gránulos.',
            caption: 'Mastocito, con su núcleo central y los gránulos citoplasmáticos.',
            source: 'bioart',
            sourceUrl: 'https://bioart.niaid.nih.gov/bioart/879',
            credit: 'NIAID NIH BioART Source — dominio público',
          },
        ],
      },
      {
        id: 'hctc-5',
        number: 5,
        title: 'Macrófago y sistema fagocítico mononuclear',
        keyTerms: ['macrófago', 'sistema fagocítico mononuclear', 'Kupffer', 'microglía'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El macrófago hace fagocitosis, elimina desechos y microorganismos y presenta antígenos. Mide 10–30 μm, de forma irregular, con núcleo excéntrico semejante a un riñón, RER abundante, Golgi desarrollado y lisosomas numerosos.',
          },
          {
            type: 'steps',
            title: 'Sistema fagocítico mononuclear',
            steps: [
              'Célula madre hematopoyética.',
              'Monoblasto.',
              'Monocito (circula en sangre).',
              'Migra al tejido.',
              'Macrófago (residente).',
            ],
          },
          {
            type: 'note',
            title: 'Macrófagos especializados',
            content: 'Células de Kupffer → hígado. Macrófagos alveolares (células de polvo) → pulmón. Microglía → sistema nervioso central. En la inflamación crónica aparecen células epitelioides y células gigantes.',
          },
        ],
      },
      {
        id: 'hctc-6',
        number: 6,
        title: 'Células móviles y tabla de estudio',
        keyTerms: ['plasmocito', 'linfocito', 'neutrófilo', 'eosinófilo', 'basófilo', 'monocito'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El PLASMOCITO deriva del linfocito B y produce anticuerpos; su núcleo excéntrico muestra la heterocromatina "en rueda de carro" y vive 2–3 semanas. Los demás leucocitos: neutrófilo (primer respondedor, defensa bacteriana), eosinófilo (parásitos y alergias), basófilo (alergia; histamina/heparina), linfocito (inmunidad adaptativa) y monocito (precursor del macrófago tisular).',
          },
          {
            type: 'table',
            title: 'Tabla de estudio de células',
            data: {
              headers: ['Célula', 'Clasificación', 'Función', 'Rasgo clave'],
              rows: [
                ['Fibroblasto', 'Fija', 'Sintetiza la MEC', 'Fusiforme, RER abundante'],
                ['Adipocito', 'Fija', 'Almacena triglicéridos', 'Gran gota lipídica, núcleo periférico'],
                ['Pericito', 'Fija', 'Soporte/regulación capilar', 'Rodea capilares'],
                ['Mastocito', 'Fija', 'Inflamación/alergia', 'Gránulos metacromáticos'],
                ['Macrófago', 'Fija/móvil', 'Fagocitosis, presenta antígenos', 'Núcleo excéntrico + lisosomas'],
                ['Plasmocito', 'Móvil', 'Anticuerpos', 'Núcleo "en rueda de carro"'],
                ['Linfocito', 'Móvil', 'Inmunidad adaptativa', 'Célula inmunitaria'],
                ['Neutrófilo', 'Móvil', 'Fagocitosis bacteriana', 'Primer respondedor (inflamación aguda)'],
                ['Eosinófilo', 'Móvil', 'Parásitos/alergias', 'Defensa antiparasitaria'],
                ['Basófilo', 'Móvil', 'Alergia', 'Histamina/heparina'],
                ['Monocito', 'Móvil', 'Precursor del macrófago', 'Circula en sangre'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Células del conectivo en la clínica',
            content:
              'Pericitos → retinopatía diabética (su pérdida daña la microvasculatura) y angiogénesis tumoral. Obesidad → hipertrofia de adipocitos. Cicatrización → fibroblastos y miofibroblastos que depositan y contraen la MEC.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-conectivo-variedades',
    title: 'Variedades del tejido conectivo',
    subtitle: 'Embrionario, laxo, denso (regular/irregular) y reticular',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'Embrionario: MESENQUIMATOSO (precursor del laxo) y MUCOSO (gelatina de Wharton, colágeno I y III, en el cordón umbilical).',
      'LAXO (areolar): fibras SIN orientación preferencial, muy vascularizado, con células inmunes (macrófagos, mastocitos, plasmocitos). Es el principal sitio de inflamación y edema.',
      'DENSO REGULAR COLAGENOSO: haces PARALELOS, resistente a la tracción → tendones, ligamentos, córnea.',
      'DENSO REGULAR ELÁSTICO: disposición "en resorte" → grandes vasos, ligamentos amarillos, ligamento suspensorio del pene.',
      'DENSO IRREGULAR: fibras en MÚLTIPLES ángulos, soporte multidireccional → dermis reticular, cápsulas de órganos.',
      'RETICULAR: colágeno tipo III ramificado en malla → ganglios linfáticos, bazo, médula ósea, hígado (enlaza con los colágenos de la Clase 1).',
    ],
    sections: [
      {
        id: 'hcva-1',
        number: 1,
        title: 'Tejido conectivo embrionario',
        keyTerms: ['mesenquimatoso', 'mucoso', 'gelatina de Wharton', 'cordón umbilical'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Esta clase desarrolla las VARIEDADES del conectivo propiamente dicho; los colágenos y las células ya se definieron en «Tejido conectivo: matriz» y «Células del tejido conectivo». El conectivo embrionario tiene dos formas: el MESENQUIMATOSO, precursor del tejido conectivo laxo, y el MUCOSO, conocido como GELATINA DE WHARTON (rica en colágeno I y III), que se encuentra en el cordón umbilical.',
          },
        ],
      },
      {
        id: 'hcva-2',
        number: 2,
        title: 'Tejido conectivo laxo (areolar)',
        keyTerms: ['laxo', 'areolar', 'vascularizado', 'edema', 'inflamación'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El tejido conectivo LAXO tiene fibras dispuestas SIN orientación preferencial, es muy vascularizado y aloja las células inmunes (macrófagos, mastocitos, plasmocitos). Por eso es el principal sitio de la respuesta inflamatoria y donde se acumula líquido (edema). Se localiza en la lámina propia, la dermis papilar, el mesenterio, la pleura y el peritoneo.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Edema e inflamación en el laxo',
            content:
              'Como el laxo es laxo y vascularizado, es donde se acumula líquido: el edema (p. ej. en la insuficiencia cardíaca) se manifiesta ahí. También es donde se monta la inflamación local, como en la dermatitis de contacto.',
          },
        ],
      },
      {
        id: 'hcva-3',
        number: 3,
        title: 'Tejido conectivo denso',
        keyTerms: ['denso regular', 'denso irregular', 'colagenoso', 'elástico', 'tracción'],
        blocks: [
          {
            type: 'table',
            title: 'Las tres formas de conectivo denso',
            data: {
              headers: ['Variedad', 'Fibras / orientación', 'Localización'],
              rows: [
                ['Denso regular colagenoso', 'Haces PARALELOS; resiste la tracción', 'Tendones, ligamentos, córnea'],
                ['Denso regular elástico', 'Disposición "en resorte" (elástica)', 'Grandes vasos, ligamentos amarillos, suspensorio del pene'],
                ['Denso irregular', 'Fibras en MÚLTIPLES ángulos; soporte multidireccional', 'Dermis reticular, cápsulas de órganos'],
              ],
            },
          },
        ],
      },
      {
        id: 'hcva-4',
        number: 4,
        title: 'Tejido conectivo reticular',
        keyTerms: ['reticular', 'colágeno III', 'malla'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El tejido conectivo RETICULAR está formado por COLÁGENO TIPO III ramificado en una malla de sostén (las mismas fibras reticulares de la Clase 1). Forma el estroma de órganos hematopoyéticos y linfoides: ganglios linfáticos, bazo, médula ósea e hígado (también tiroides y páncreas).',
          },
          {
            type: 'note',
            title: 'Comparativa de variedades',
            content: 'Embrionario (mesenquimatoso/mucoso) → precursor / cordón umbilical. Laxo → fibras sin orientación, vascularizado → inflamación y edema. Denso regular colagenoso → paralelo → tracción (tendón). Denso regular elástico → en resorte → grandes vasos. Denso irregular → múltiples ángulos → dermis reticular/cápsulas. Reticular → colágeno III en malla → bazo/ganglio/médula/hígado.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-tejido-adiposo',
    title: 'Tejido adiposo',
    subtitle: 'Unilocular (blanco) vs multilocular (pardo), función endocrina y obesidad',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'UNILOCULAR (blanco): una gran gota lipídica con el núcleo periférico; predomina en el adulto; función de reserva.',
      'MULTILOCULAR (pardo): múltiples gotas y MITOCONDRIAS abundantes; hace TERMOGÉNESIS; en neonatos y zonas perirrenales.',
      'El adipocito es un órgano ENDOCRINO: leptina (regula el apetito) y adiponectina (mejora la sensibilidad a la insulina). Un ~20–25 % del peso corporal en grasa se considera saludable.',
      'Obesidad: hipertrofia del adipocito, con inflamación e hipoxia del tejido.',
    ],
    sections: [
      {
        id: 'hadi-1',
        number: 1,
        title: 'Unilocular (blanco) vs multilocular (pardo)',
        keyTerms: ['unilocular', 'multilocular', 'termogénesis', 'mitocondrias'],
        blocks: [
          {
            type: 'comparison',
            title: 'Los dos tipos de tejido adiposo',
            left: {
              title: 'Unilocular (blanco)',
              items: ['Una gran gota lipídica.', 'Núcleo desplazado a la periferia.', 'Predomina en el adulto; función de reserva.'],
            },
            right: {
              title: 'Multilocular (pardo)',
              items: ['Múltiples gotas pequeñas.', 'Mitocondrias abundantes → TERMOGÉNESIS.', 'Neonatos y zonas perirrenales.'],
            },
          },
        ],
      },
      {
        id: 'hadi-2',
        number: 2,
        title: 'El adipocito como órgano endocrino',
        keyTerms: ['leptina', 'adiponectina', 'endocrino'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El tejido adiposo no solo almacena energía: es un órgano ENDOCRINO. Produce LEPTINA (regula el apetito y la saciedad) y ADIPONECTINA (mejora la sensibilidad a la insulina). Tener alrededor de un 20–25 % del peso corporal en grasa se considera saludable; el problema aparece con el exceso.',
          },
        ],
      },
      {
        id: 'hadi-3',
        number: 3,
        title: 'Obesidad y manejo',
        keyTerms: ['obesidad', 'hipertrofia', 'GLP-1', 'cortisol'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'En la obesidad el adipocito se HIPERTROFIA y el tejido desarrolla inflamación e hipoxia. El manejo es multidisciplinario: dieta, ejercicio (sobre todo de FUERZA), control del cortisol y buen sueño.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Análogos de GLP-1 (contenido clínico de la clase)',
            content:
              'Los análogos de GLP-1 (Mounjaro, Wegovy) son eficaces para bajar de peso, pero REQUIEREN ejercicio de fuerza para no perder masa muscular junto con la grasa. El seguimiento se hace con el índice cintura-cadera. Es una correlación clínica de la clase, no núcleo histológico.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-cartilago',
    title: 'Tejido cartilaginoso',
    subtitle: 'Matriz, células, pericondrio, tipos (hialino/elástico/fibrocartílago) y placa de crecimiento',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'Conectivo ESPECIALIZADO del mesodermo; matriz SEMISÓLIDA; AVASCULAR, aneural y alinfático → se nutre por DIFUSIÓN. Funciones: sostén, armazón flexible, amortiguación y protección.',
      'Matriz = componente forme (fibras) + amorfo (GAG: condroitín/queratán sulfato, ácido hialurónico; proteoglucanos que retienen agua → 70–80 % del peso es AGUA); la condronectina une fibras ↔ células.',
      'Línea celular: condrógena (progenitora, en el pericondrio) → condroblasto (produce matriz) → condrocito (maduro, en LAGUNAS).',
      'Pericondrio: capa fibrosa (colágeno I, fibroblastos) + capa condrogénica; nutre, hace crecer y repara. EXCEPCIÓN: el fibrocartílago y el cartílago articular NO tienen pericondrio (el articular se nutre del líquido sinovial por compresión-descompresión).',
      'Crecimiento: INTERSTICIAL (desde dentro, condrocitos que se dividen) vs APOSICIONAL (desde el pericondrio/superficie).',
      'Tipos: HIALINO (colágeno II, el más abundante, grupos isógenos, matriz vítrea; articulaciones, tráquea, costillas, esqueleto fetal), ELÁSTICO (fibras elásticas, flexible, SÍ pericondrio; oreja, epiglotis) y FIBROCARTÍLAGO (colágeno I, condrocitos EN HILERAS, SIN pericondrio; discos, meniscos, sínfisis del pubis).',
      'Placa epifisaria (crecimiento longitudinal), 5 zonas: reserva → proliferación (columnas) → hipertrofia → calcificación → formación ósea.',
    ],
    sections: [
      {
        id: 'hcar-1',
        number: 1,
        title: 'Definición y funciones',
        keyTerms: ['cartílago', 'mesodermo', 'avascular', 'difusión'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El tejido cartilaginoso es una especialización del conectivo que deriva del MESODERMO. Cuatro rasgos para memorizar: matriz SEMISÓLIDA (como una gelatina firme, entre el líquido de la sangre y la rigidez del hueso), células separadas por abundante matriz, AVASCULAR, y aneural y alinfático. Al no tener vasos, se nutre por difusión. Funciones: sostén estructural, armazón flexible, amortiguación articular y protección/recubrimiento (cartílagos costales, nariz, oreja, tráquea, articulaciones).',
          },
        ],
      },
      {
        id: 'hcar-2',
        number: 2,
        title: 'Matriz del cartílago',
        keyTerms: ['matriz', 'GAG', 'proteoglucanos', 'condronectina', 'agua'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La matriz tiene un componente FORME (fibras colágenas, elásticas o reticulares según el tipo) y uno AMORFO (glucosaminoglucanos —condroitín sulfato, queratán sulfato, ácido hialurónico—, proteoglucanos y glucoproteínas). Los proteoglucanos RETIENEN AGUA: cerca del 70–80 % del peso del cartílago es agua, lo que le da su capacidad de soportar presión. La CONDRONECTINA es una glucoproteína que une las fibras con las células (el "pegamento" de la matriz).',
          },
        ],
      },
      {
        id: 'hcar-3',
        number: 3,
        title: 'Células: condrógena → condroblasto → condrocito',
        keyTerms: ['condrógena', 'condroblasto', 'condrocito', 'lagunas'],
        blocks: [
          {
            type: 'steps',
            title: 'Línea de maduración',
            steps: [
              'Célula condrógena: progenitora, en la capa interna del pericondrio; origina condroblastos.',
              'Condroblasto: célula joven y activa que sintetiza y secreta matriz; al quedar rodeado por su matriz queda alojado en una laguna.',
              'Condrocito: célula madura dentro de una LAGUNA, menos activa; aislada o en grupos.',
            ],
          },
        ],
      },
      {
        id: 'hcar-4',
        number: 4,
        title: 'Pericondrio, nutrición y crecimiento',
        keyTerms: ['pericondrio', 'líquido sinovial', 'intersticial', 'aposicional'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El PERICONDRIO rodea a casi todos los cartílagos y tiene dos capas: la FIBROSA (conectivo denso con fibroblastos, produce colágeno I) y la CONDROGÉNICA (con células condrógenas). Nutre, hace crecer y repara. Como el cartílago es avascular, los nutrientes difunden desde los vasos del pericondrio hacia los condrocitos; si el pericondrio se daña, baja la nutrición y el cartílago puede necrosarse (de ahí su lenta reparación). EXCEPCIÓN: el fibrocartílago y el cartílago articular NO tienen pericondrio; el articular se nutre del LÍQUIDO SINOVIAL mediante ciclos de compresión-descompresión con el movimiento.',
          },
          {
            type: 'comparison',
            title: 'Crecimiento intersticial vs aposicional',
            left: {
              title: 'Intersticial (desde dentro)',
              items: ['Los condrocitos se dividen dentro de la matriz.', 'Expansión interna; importante en cartílago joven.'],
            },
            right: {
              title: 'Aposicional (desde la superficie)',
              items: ['Las células condrógenas del pericondrio forman condroblastos.', 'Añaden matriz en la superficie → aumenta el espesor.'],
            },
          },
        ],
      },
      {
        id: 'hcar-5',
        number: 5,
        title: 'Los tres tipos de cartílago',
        keyTerms: ['hialino', 'elástico', 'fibrocartílago', 'grupos isógenos', 'colágeno II'],
        blocks: [
          {
            type: 'table',
            title: 'Hialino · elástico · fibrocartílago',
            data: {
              headers: ['Rasgo', 'Hialino', 'Elástico', 'Fibrocartílago'],
              rows: [
                ['Colágeno / fibras', 'Colágeno II (el más abundante)', 'Colágeno II + fibras elásticas', 'Colágeno I (fibras visibles)'],
                ['Células / organización', 'Condrocitos aislados o en grupos isógenos', 'Condrocitos grandes, grupos coronarios', 'Condrocitos escasos, EN HILERAS'],
                ['Matriz', 'Homogénea, vítrea, basófila (grupos isógenos con matriz territorial)', 'Con fibras elásticas', 'Mucho colágeno, poca matriz amorfa'],
                ['Pericondrio', 'Sí (salvo superficies articulares)', 'Sí', 'NO'],
                ['Función / ejemplos', 'Soporte y amortiguación: articulaciones, tráquea, costillas, esqueleto fetal', 'Flexibilidad: oreja, epiglotis, trompa de Eustaquio', 'Tracción + compresión: discos intervertebrales, meniscos, sínfisis del pubis'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Identificación y la tráquea',
            content: 'Condrocitos en lagunas: ¿matriz homogénea + grupos isógenos? → hialino. ¿Fibras elásticas + condrocitos grandes? → elástico. ¿Mucho colágeno + hileras + sin pericondrio? → fibrocartílago. Integración: la TRÁQUEA combina epitelio cilíndrico pseudoestratificado ciliado + glándulas submucosas + cartílago hialino con su pericondrio.',
          },
        ],
      },
      {
        id: 'hcar-6',
        number: 6,
        title: 'Placa epifisaria (crecimiento longitudinal)',
        keyTerms: ['placa epifisaria', 'reserva', 'proliferación', 'hipertrofia', 'calcificación'],
        blocks: [
          {
            type: 'steps',
            title: '★ Las 5 zonas (crecimiento en longitud)',
            steps: [
              'Reserva: condrocitos pequeños, poca mitosis.',
              'Proliferación: condrocitos que se dividen y se ordenan en columnas paralelas (crecimiento longitudinal).',
              'Hipertrofia: condrocitos que aumentan mucho de tamaño; lagunas grandes.',
              'Calcificación: la matriz se calcifica y llegan vasos.',
              'Formación ósea: llegan osteoblastos/osteoclastos; el cartílago calcificado sirve de andamio y se deposita hueso.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Radiología y osificación endocondral',
            content:
              'La placa epifisaria es normal en niños y se cierra con la maduración: una radiografía pediátrica se interpreta según la edad. El cartílago hialino del esqueleto fetal se convierte en hueso por OSIFICACIÓN ENDOCONDRAL, mecanismo que también da el crecimiento longitudinal (ver «Tejido óseo»). El cartílago se regenera lento por ser avascular.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-hueso',
    title: 'Tejido óseo',
    subtitle: 'Matriz mineralizada, osteona (Havers/Volkmann), células, osificación y remodelación',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'Conectivo especializado con matriz MINERALIZADA → dureza y resistencia; es tejido vivo, vascularizado, inervado y en constante remodelación (~14 % del peso corporal).',
      'Matriz: inorgánica ≈65–70 % (hidroxiapatita Ca₁₀(PO₄)₆(OH)₂ → dureza/compresión) + orgánica ≈30–35 % (~90 % colágeno tipo I → flexibilidad/tensión; con osteonectina, osteocalcina, osteopontina, decorina).',
      'Cubiertas: PERIOSTIO (externo; capa fibrosa con fibras de Sharpey que anclan, capa osteogénica con osteoprogenitoras/osteoblastos; muy inervado → dolor óseo) y ENDOSTIO (interno; recubre cavidad medular y canales; sitio de remodelación).',
      'Compacto = OSTEONAS (diáfisis). Esponjoso = TRABÉCULAS + médula (epífisis, vértebras, planos); las trabéculas siguen las líneas de fuerza (ley de Wolff).',
      'Osteona (Havers): línea de cemento → laminillas concéntricas (8–15) → lagunas con osteocitos → canalículos → canal de Havers (central, LONGITUDINAL). Los canales de Volkmann son TRANSVERSALES y conectan los de Havers. ★ Havers longitudinal vs Volkmann transversal.',
      'Células: osteoprogenitora → osteoblasto (forma OSTEOIDE, colágeno I) → osteocito (atrapado en LAGUNA, prolongaciones en canalículos, mecanorreceptor); OSTEOCLASTO (grande, MULTINUCLEADO, línea monocito/macrófago, REABSORBE en la laguna de Howship con catepsina K).',
      'Osificación INTRAMEMBRANOSA (mesénquima → hueso; cráneo, mandíbula, clavícula) vs ENDOCONDRAL (molde de cartílago → hueso; huesos largos, crecimiento longitudinal, reparación de fracturas).',
    ],
    sections: [
      {
        id: 'hhue-1',
        number: 1,
        title: 'Definición y matriz ósea',
        keyTerms: ['matriz mineralizada', 'hidroxiapatita', 'colágeno I'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El hueso es un conectivo especializado con matriz CALCIFICADA/MINERALIZADA, que le da dureza y resistencia conservando cierta flexibilidad. Es tejido vivo, muy vascularizado, inervado y en constante remodelación (~14 % del peso corporal). Su matriz combina una fracción INORGÁNICA, dominada por HIDROXIAPATITA (Ca₁₀(PO₄)₆(OH)₂ → dureza y resistencia a la compresión; con carbonato, magnesio, sodio, flúor, citrato), y una fracción ORGÁNICA, ~90 % COLÁGENO TIPO I (flexibilidad y resistencia a la tensión; más osteonectina, osteocalcina, osteopontina y decorina).',
          },
          {
            type: 'note',
            title: 'Proporción inorgánico/orgánico (rango)',
            content: 'La fuente da dos cifras: la explicación oral, ≈70 % inorgánico / 30 % orgánico; la diapositiva, ≈65 % / 35 %. Se registra como RANGO: ≈65–70 % inorgánico y ≈30–35 % orgánico. La idea fija: hidroxiapatita (inorgánico) + colágeno I (orgánico).',
          },
        ],
      },
      {
        id: 'hhue-2',
        number: 2,
        title: 'Periostio y endostio',
        keyTerms: ['periostio', 'endostio', 'fibras de Sharpey', 'dolor óseo'],
        blocks: [
          {
            type: 'comparison',
            title: 'Las dos cubiertas',
            left: {
              title: 'Periostio (externo)',
              items: ['Capa fibrosa (conectivo denso) con FIBRAS DE SHARPEY que anclan al hueso.', 'Capa osteogénica/cambial: osteoprogenitoras y osteoblastos.', 'Muy inervado → dolor óseo intenso; inserta tendones/ligamentos.'],
            },
            right: {
              title: 'Endostio (interno)',
              items: ['Capa delgada que recubre la cavidad medular y los canales.', 'Osteoprogenitoras, osteoblastos y osteoclastos.', 'Sitio importante de REMODELACIÓN.'],
            },
          },
        ],
      },
      {
        id: 'hhue-3',
        number: 3,
        title: 'Compacto vs esponjoso',
        keyTerms: ['compacto', 'esponjoso', 'osteona', 'trabéculas', 'ley de Wolff'],
        blocks: [
          {
            type: 'table',
            title: 'Hueso compacto vs esponjoso',
            data: {
              headers: ['Rasgo', 'Compacto (cortical)', 'Esponjoso (trabecular)'],
              rows: [
                ['Localización', 'Diáfisis y corticales externas', 'Epífisis, vértebras, huesos cortos y planos'],
                ['Organización', 'Osteonas (sistemas de Havers)', 'Trabéculas con médula entre ellas'],
                ['Densidad / porosidad', 'Alta densidad, poca porosidad', 'Menor densidad, mayor porosidad'],
                ['Otros', 'Cavidad medular profunda', 'Trabéculas siguen las líneas de fuerza (ley de Wolff)'],
              ],
            },
          },
        ],
      },
      {
        id: 'hhue-4',
        number: 4,
        title: 'La osteona: Havers vs Volkmann',
        keyTerms: ['osteona', 'canal de Havers', 'canales de Volkmann', 'laminillas', 'línea de cemento'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La OSTEONA (sistema de Havers) es la unidad del hueso compacto: un cilindro paralelo al eje del hueso. De fuera a dentro: LÍNEA DE CEMENTO (límite, rica en proteoglucanos, limita microfracturas) → LAMINILLAS concéntricas (8–15, con el colágeno en distinta orientación entre capas) → LAGUNAS con osteocitos → CANALÍCULOS → CANAL DE HAVERS central (vasos, nervios, conectivo laxo).',
          },
          {
            type: 'comparison',
            title: '★ Havers vs Volkmann (muy preguntado)',
            left: {
              title: 'Canal de Havers',
              items: ['CENTRAL y LONGITUDINAL (eje de la osteona).', 'Lleva vasos y nervios.'],
            },
            right: {
              title: 'Canales de Volkmann',
              items: ['TRANSVERSALES / perpendiculares.', 'Conectan canales de Havers entre sí y con periostio/endostio.'],
            },
          },
          {
            type: 'note',
            title: 'Hueso primario vs secundario',
            content: 'Primario (inmaduro/reticular): colágeno irregular, más celular, transitorio (feto, primera fase de fractura). Secundario (maduro/laminar): colágeno en laminillas, más resistente; predomina en el adulto (osteonas en compacto, trabéculas en esponjoso).',
          },
        ],
      },
      {
        id: 'hhue-5',
        number: 5,
        title: 'Células óseas',
        keyTerms: ['osteoprogenitora', 'osteoblasto', 'osteocito', 'osteoclasto', 'osteoide'],
        blocks: [
          {
            type: 'table',
            title: '★ Las cuatro células del hueso',
            data: {
              headers: ['Célula', 'Origen', 'Función', 'Rasgo clave'],
              rows: [
                ['Osteoprogenitora', 'Mesenquimal', 'Origina células óseas', 'Periostio/endostio'],
                ['Osteoblasto', 'Osteoprogenitora', 'Forma osteoide (colágeno I)', 'RER y Golgi abundantes; "construye"'],
                ['Osteocito', 'Osteoblasto atrapado', 'Mecanorreceptor; regula la remodelación', 'Cuerpo en la LAGUNA; prolongaciones en canalículos'],
                ['Osteoclasto', 'Línea monocito/macrófago', 'Reabsorbe hueso', 'Grande, MULTINUCLEADO; laguna de Howship, catepsina K'],
              ],
            },
          },
          {
            type: 'note',
            title: '★ Puntos de examen',
            content: 'El cuerpo del osteocito está en la LAGUNA; los canalículos comunican osteocitos y transportan nutrientes. La célula grande MULTINUCLEADA que reabsorbe es el osteoclasto.',
          },
        ],
      },
      {
        id: 'hhue-6',
        number: 6,
        title: 'Osificación: intramembranosa vs endocondral',
        keyTerms: ['osificación intramembranosa', 'osificación endocondral'],
        blocks: [
          {
            type: 'comparison',
            title: '★ Los dos mecanismos',
            left: {
              title: 'Intramembranosa',
              items: ['Mesénquima → osteoblastos → osteoide → hueso (sin molde de cartílago).', 'Cráneo, mandíbula, clavícula.'],
            },
            right: {
              title: 'Endocondral',
              items: ['Molde de cartílago hialino → se calcifica y se reemplaza por hueso.', 'Huesos largos, crecimiento longitudinal, reparación de fracturas.'],
            },
          },
        ],
      },
      {
        id: 'hhue-7',
        number: 7,
        title: 'Remodelación y regulación',
        keyTerms: ['remodelación', 'ARF', 'RANKL', 'PTH', 'calcitonina', 'vitamina D'],
        blocks: [
          {
            type: 'steps',
            title: 'Ciclo de remodelación (ARF + inversión)',
            steps: [
              'Activación: los osteocitos detectan fuerzas/daño y reclutan precursores de osteoclastos (RANKL, M-CSF).',
              'Reabsorción: los osteoclastos crean la laguna de Howship, acidifican y liberan catepsina K → disuelven mineral y colágeno.',
              'Inversión: macrófagos limpian la superficie; TGF-β e IGF-1 reclutan osteoblastos.',
              'Formación: los osteoblastos secretan osteoide y lo mineralizan; algunos quedan como osteocitos.',
            ],
          },
          {
            type: 'paragraph',
            content:
              'En el adulto sano, formación ≈ reabsorción. Si predomina la reabsorción → pérdida de masa ósea (OSTEOPOROSIS, T-score ≤ −2.5); si predomina la formación → osteopetrosis. Regulación: la PTH aumenta la actividad osteoclástica y moviliza calcio; la CALCITONINA la inhibe; la VITAMINA D favorece la absorción de calcio y fósforo y la mineralización (su déficit da RAQUITISMO en niños y OSTEOMALACIA en adultos).',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Reparación de fractura y caso pediátrico',
            content:
              'Cuatro fases: hematoma (0–48 h, inflamación) → callo blando (FIBROCARTÍLAGO) → callo duro (OSIFICACIÓN ENDOCONDRAL, hueso primario, 2–6 sem) → remodelación (hueso secundario). Caso de la clase (niño de 8 años, fractura de fémur): la osificación inicial del callo es ENDOCONDRAL (se forma primero un molde cartilaginoso), y un déficit de VITAMINA D altera la mineralización (menor absorción de calcio).',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-sangre',
    title: 'Tejido sanguíneo: plasma y eritrocitos',
    subtitle: 'La sangre como tejido conjuntivo especializado, plasma, proteínas y eritrocitos',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'La sangre es un TEJIDO CONJUNTIVO ESPECIALIZADO de matriz extracelular LÍQUIDA (el plasma); volumen 5–6 L (~8 % del peso).',
      'Al centrifugar: PLASMA 55 % / ELEMENTOS FORMES 45 % (eritrocitos, leucocitos, plaquetas). Se producen en la médula ósea roja (hematopoyesis).',
      'Plasma = agua 90–92 % + proteínas 7–8 % + iones + orgánicas. Proteínas: albúmina (presión oncótica), globulinas (defensa/transporte) y fibrinógeno (→ fibrina → coagulación).',
      'Eritrocito: disco BICÓNCAVO (~7–8 μm), ANUCLEADO y sin organelos (máximo espacio para hemoglobina); vida ~120 días.',
      'Hemoglobina = 4 globinas + 4 hemo con Fe²⁺, que une el O₂. Eritropoyesis en médula roja, estimulada por EPO (riñón) ante HIPOXIA.',
      'Correlación: la anemia es falta de capacidad de transporte de O₂ (aunque haya eritrocitos, sin hemoglobina suficiente); ↓ albúmina → edema.',
    ],
    sections: [
      {
        id: 'hsan-1',
        number: 1,
        title: 'La sangre como tejido conjuntivo especializado',
        keyTerms: ['matriz líquida', 'plasma', 'elementos formes', 'hematopoyesis'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La sangre es un TEJIDO CONJUNTIVO ESPECIALIZADO: lo particular es que su matriz extracelular es LÍQUIDA (el plasma), a diferencia de los conectivos sólidos. El volumen total en el adulto es de 5–6 L (~8 % del peso corporal). Sus células (elementos formes) se producen continuamente en la médula ósea roja (hematopoyesis, a partir de células madre hematopoyéticas).',
          },
          {
            type: 'note',
            title: 'Centrifugación: 55 / 45',
            content: 'Al centrifugar la sangre se separan PLASMA (~55 %, fracción superior clara) y ELEMENTOS FORMES (~45 %: eritrocitos, leucocitos y plaquetas).',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Volumen y hemorragia',
            content: 'Estimar el volumen perdido orienta el manejo: una pérdida > ~30 % (≈ 1.5 L) puede corresponder a un choque hemorrágico clase III.',
          },
        ],
      },
      {
        id: 'hsan-2',
        number: 2,
        title: 'Plasma: composición',
        keyTerms: ['agua', 'proteínas plasmáticas', 'iones'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El plasma (~55 % del volumen sanguíneo) es el medio de transporte químico de la sangre. Está formado sobre todo por agua, con proteínas, iones y sustancias orgánicas disueltas.',
          },
          {
            type: 'table',
            title: 'Composición del plasma',
            data: {
              headers: ['Componente', 'Proporción / ejemplos'],
              rows: [
                ['Agua', '90–92 % del plasma (medio de transporte)'],
                ['Proteínas', '7–8 % (albúmina, globulinas, fibrinógeno)'],
                ['Iones', 'Na⁺, K⁺, Ca²⁺, Cl⁻, HCO₃⁻ (equilibrio ácido-base, osmolaridad)'],
                ['Orgánicas', 'Glucosa, aminoácidos, lípidos, urea, creatinina, hormonas, desechos'],
              ],
            },
          },
        ],
      },
      {
        id: 'hsan-3',
        number: 3,
        title: 'Proteínas plasmáticas',
        keyTerms: ['albúmina', 'globulinas', 'fibrinógeno', 'presión oncótica'],
        blocks: [
          {
            type: 'table',
            title: 'Tres grupos principales',
            data: {
              headers: ['Proteína', 'Función'],
              rows: [
                ['Albúmina', 'Mantiene la presión oncótica (retiene agua en los vasos)'],
                ['Globulinas', 'Transporte y defensa (inmunoglobulinas/anticuerpos)'],
                ['Fibrinógeno', 'Precursor de la fibrina → coagulación'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: '↓ albúmina → edema',
            content: 'Si baja la albúmina, cae la presión oncótica y el agua sale de los vasos hacia los tejidos → edema (y ascitis en la cavidad abdominal). Ejemplos: cirrosis hepática y síndrome nefrótico.',
          },
        ],
      },
      {
        id: 'hsan-4',
        number: 4,
        title: 'Funciones de la sangre',
        keyTerms: ['transporte de gases', 'hemostasia', 'homeostasis'],
        blocks: [
          {
            type: 'list',
            title: 'Cuatro funciones',
            items: [
              'Transporte de gases: los eritrocitos llevan O₂ y CO₂ (por hemoglobina).',
              'Defensa inmunitaria: leucocitos (fagocitosis, anticuerpos, destrucción de células infectadas).',
              'Hemostasia: plaquetas + factores plasmáticos detienen el sangrado.',
              'Homeostasis: regula temperatura, distribuye nutrientes/hormonas y mantiene el pH (7.35–7.45).',
            ],
          },
        ],
      },
      {
        id: 'hsan-5',
        number: 5,
        title: 'Eritrocitos y hemoglobina',
        keyTerms: ['disco bicóncavo', 'anucleado', 'hemoglobina', 'hierro'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El eritrocito (glóbulo rojo) es un DISCO BICÓNCAVO de ~7–8 μm (≈ 7.5 μm): esa forma aumenta la superficie de intercambio y le da flexibilidad para atravesar capilares. El eritrocito maduro es ANUCLEADO y ha perdido sus organelos, para maximizar el espacio de hemoglobina; su vida es de ~120 días.',
          },
          {
            type: 'note',
            title: 'Hemoglobina',
            content: 'Formada por 4 cadenas de globina + 4 grupos hemo; cada hemo contiene Fe²⁺, que es el que une el O₂. Una molécula de hemoglobina transporta hasta 4 moléculas de O₂.',
          },
        ],
      },
      {
        id: 'hsan-6',
        number: 6,
        title: 'Eritropoyesis, EPO y grupos sanguíneos',
        keyTerms: ['eritropoyesis', 'eritropoyetina', 'reticulocito', 'ABO'],
        blocks: [
          {
            type: 'steps',
            title: 'Eritropoyesis (médula ósea roja)',
            steps: [
              'Hipoxia → el riñón (células peritubulares) libera ERITROPOYETINA (EPO).',
              'La EPO estimula la médula ósea roja.',
              'Maduración: célula madre → eritroblasto → RETICULOCITO (joven, ~12–24 h) → eritrocito maduro.',
            ],
          },
          {
            type: 'note',
            title: 'Grupos sanguíneos (introducción)',
            content: 'El sistema ABO depende de antígenos de la membrana del eritrocito: A (antígeno A), B (antígeno B), AB (A+B), O (ninguno). El sistema Rh añade la clasificación positivo/negativo.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Anemia: no basta con tener eritrocitos',
            content: 'Sin hemoglobina suficiente (p. ej. por déficit de hierro) no hay transporte adecuado de O₂ aunque existan eritrocitos. Distinguir «cuántos eritrocitos» de «cuánta capacidad de transporte».',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-leucocitos',
    title: 'Leucocitos, plaquetas e identificación en frotis',
    subtitle: 'Clasificación y fórmula leucocitaria, morfología de cada célula y reconocimiento en el frotis',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'LEUCOCITOS ≠ linfocitos (el linfocito es un tipo de leucocito). Se dividen en GRANULOCITOS/polimorfonucleares (neutrófilo, eosinófilo, basófilo) y AGRANULOCITOS/mononucleares (linfocito, monocito).',
      'Fórmula leucocitaria: neutrófilos 60–70 %, linfocitos 20–35 %, monocitos 3–8 %, eosinófilos 2–4 %, basófilos 0.5–1 %.',
      'Neutrófilo = núcleo MULTILOBULADO (3–5 lóbulos), fagocitosis bacteriana (NETs). Eosinófilo = BILOBULADO, gránulos NARANJA, parásitos/alergia. Basófilo = gránulos AZUL-VIOLETA que ocultan el núcleo, histamina/heparina (hipersensibilidad tipo I).',
      'Monocito = el más grande (12–20 μm), núcleo ARRIÑONADO → macrófago tisular (Kupffer/microglía/osteoclasto).',
      'Plaqueta = fragmento de megacariocito, SIN núcleo, 2–4 μm, 150,000–400,000/μL, vida 7–10 días.',
      'Terminología: -osis/-filia (aumento) vs -penia (disminución): leucocitosis/leucopenia, neutrofilia/neutropenia, trombocitosis/trombocitopenia.',
    ],
    sections: [
      {
        id: 'hleu-1',
        number: 1,
        title: 'Clasificación de los leucocitos',
        keyTerms: ['granulocitos', 'agranulocitos', 'polimorfonucleares'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los leucocitos (glóbulos blancos) son la defensa celular. Punto clave: LEUCOCITOS ≠ LINFOCITOS; el linfocito es solo un tipo de leucocito. Se clasifican en dos grandes grupos según sus gránulos.',
          },
          {
            type: 'comparison',
            title: 'Dos grandes grupos',
            left: {
              title: 'Granulocitos (polimorfonucleares)',
              items: ['Neutrófilos', 'Eosinófilos', 'Basófilos'],
            },
            right: {
              title: 'Agranulocitos (mononucleares)',
              items: ['Linfocitos', 'Monocitos'],
            },
          },
        ],
      },
      {
        id: 'hleu-2',
        number: 2,
        title: 'Fórmula leucocitaria',
        keyTerms: ['fórmula leucocitaria', 'porcentajes'],
        blocks: [
          {
            type: 'table',
            title: 'Proporciones aproximadas',
            data: {
              headers: ['Leucocito', '% aproximado'],
              rows: [
                ['Neutrófilos', '60–70 %'],
                ['Linfocitos', '20–35 %'],
                ['Monocitos', '3–8 %'],
                ['Eosinófilos', '2–4 %'],
                ['Basófilos', '0.5–1 %'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Memoria',
            content: 'De más a menos: Neutrófilos > Linfocitos > Monocitos > Eosinófilos > Basófilos («Never Let Monkeys Eat Bananas»).',
          },
        ],
      },
      {
        id: 'hleu-3',
        number: 3,
        title: 'Granulocitos: neutrófilo, eosinófilo, basófilo',
        keyTerms: ['neutrófilo', 'eosinófilo', 'basófilo', 'histamina'],
        blocks: [
          {
            type: 'table',
            title: 'Los tres granulocitos',
            data: {
              headers: ['Célula', 'Núcleo / gránulos', 'Función'],
              rows: [
                ['Neutrófilo', 'Multilobulado (3–5 lóbulos), gránulos finos', 'Fagocitosis bacteriana; forma NETs; vida corta'],
                ['Eosinófilo', 'Bilobulado, gránulos grandes NARANJA', 'Parásitos y alergias (proteína básica mayor)'],
                ['Basófilo', 'Gránulos AZUL-VIOLETA que ocultan el núcleo', 'Histamina/heparina; hipersensibilidad inmediata tipo I'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Claves visuales',
            content: 'Muchos lóbulos → neutrófilo. Dos lóbulos + gránulos naranja → eosinófilo. Gránulos violeta que tapan el núcleo → basófilo.',
          },
        ],
      },
      {
        id: 'hleu-4',
        number: 4,
        title: 'Agranulocitos: linfocito y monocito',
        keyTerms: ['linfocito', 'monocito', 'macrófago'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El LINFOCITO es célula pequeña de núcleo grande y redondo con poco citoplasma; es la inmunidad adaptativa (T, B y NK — se detallan en la Clase 2). El MONOCITO es el leucocito más grande (12–20 μm), con núcleo ARRIÑONADO (en herradura) y citoplasma gris-azulado.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Monocito → macrófago',
            content: 'El monocito circula ~1–3 días y migra al tejido para diferenciarse en MACRÓFAGO: osteoclasto (hueso), microglía (SNC), célula de Kupffer (hígado). Enlaza con el sistema fagocítico mononuclear (tejido conectivo, Semana 3).',
          },
        ],
      },
      {
        id: 'hleu-5',
        number: 5,
        title: 'Plaquetas (introducción)',
        keyTerms: ['plaquetas', 'megacariocito', 'trombocitos'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Las plaquetas (trombocitos) NO son células completas: son fragmentos citoplasmáticos derivados de los MEGACARIOCITOS (el núcleo queda en el megacariocito). Miden 2–4 μm, el recuento normal es 150,000–400,000/μL y su vida es de 7–10 días; participan en la hemostasia. (Su estructura y la hemostasia se detallan en la Clase 2.)',
          },
        ],
      },
      {
        id: 'hleu-6',
        number: 6,
        title: 'Terminología de recuentos e identificación en frotis',
        keyTerms: ['-osis', '-penia', 'frotis', 'biometría hemática'],
        blocks: [
          {
            type: 'note',
            title: '-osis/-filia (aumento) vs -penia (disminución)',
            content: 'Leucocitosis/leucopenia · neutrofilia/neutropenia · trombocitosis/trombocitopenia.',
          },
          {
            type: 'table',
            title: 'Reconocimiento en el frotis',
            data: {
              headers: ['Si observas…', 'Piensa en…'],
              rows: [
                ['Núcleo con 3–5 lóbulos', 'Neutrófilo'],
                ['2 lóbulos + gránulos naranja', 'Eosinófilo'],
                ['Gránulos azul-violeta que ocultan el núcleo', 'Basófilo'],
                ['Célula pequeña, núcleo grande, poco citoplasma', 'Linfocito'],
                ['Célula grande, núcleo arriñonado', 'Monocito'],
                ['Fragmentos pequeños sin núcleo', 'Plaquetas'],
                ['Discos rosados sin núcleo, con palidez central', 'Eritrocitos'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Biometría hemática',
            content: 'Una neutrofilia (> ~7,000/μL) ORIENTA hacia infección bacteriana aguda o inflamación (no la diagnostica por sí sola); una neutropenia (< ~1,500/μL) aparece por quimioterapia, virus o supresión medular.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-linfocitos',
    title: 'Linfocitos T, B y NK',
    subtitle: 'Inmunidad humoral, celular e innata: dónde maduran, cómo actúan y sus marcadores',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'En el frotis el linfocito es pequeño, con núcleo grande redondo y poco citoplasma; T y B NO se distinguen por morfología (se requieren marcadores). Proporciones: T 70–80 %, B 10–15 %, NK el resto.',
      'Linfocitos B → inmunidad HUMORAL; se desarrollan en la MÉDULA ÓSEA (pro-B→pre-B→inmaduro→maduro); marcadores CD19/CD20. Al activarse (con coestimulación T) → PLASMOCITO (anticuerpos) o célula B de MEMORIA (base de la vacunación).',
      'Linfocitos T → inmunidad CELULAR; maduran en el TIMO (selección positiva/negativa). CD4+ coordina (citocinas) · CD8+ destruye (perforinas/granzimas → apoptosis).',
      'Reconocimiento: TCR + MHC/CMH. MHC-II → CD4 · MHC-I → CD8.',
      'Células NK → inmunidad INNATA: citotoxicidad SIN sensibilización previa (perforinas/granzimas) contra células infectadas/tumorales.',
      'Correlación: el VIH afecta a los CD4+; CD4 < 200/μL = criterio de SIDA (infecciones oportunistas).',
    ],
    sections: [
      {
        id: 'hlin-1',
        number: 1,
        title: 'Panorama: los linfocitos en el frotis',
        keyTerms: ['linfocito', 'marcadores', 'inmunofenotipo'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'En un frotis convencional el linfocito es una célula pequeña, con núcleo grande, redondo y central, y poco citoplasma. Un punto importante: morfológicamente NO se puede diferenciar con certeza un linfocito T de uno B; para distinguirlos se necesitan marcadores (inmunofenotipificación).',
          },
          {
            type: 'table',
            title: 'Tres tipos de linfocito',
            data: {
              headers: ['Tipo', 'Proporción (dentro de linfocitos)', 'Inmunidad'],
              rows: [
                ['T', '70–80 %', 'Celular / coordinación'],
                ['B', '10–15 %', 'Humoral (anticuerpos)'],
                ['NK', 'El resto', 'Innata (citotoxicidad)'],
              ],
            },
          },
        ],
      },
      {
        id: 'hlin-2',
        number: 2,
        title: 'Linfocitos B (inmunidad humoral)',
        keyTerms: ['linfocito B', 'médula ósea', 'plasmocito', 'memoria', 'CD19/CD20'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los linfocitos B son la inmunidad HUMORAL (anticuerpos). Se desarrollan en la MÉDULA ÓSEA (pro-B → pre-B → B inmaduro → B maduro, ensamblando y probando su receptor). Se identifican con marcadores como CD19, CD20 y CD21. El B maduro circula y espera en órganos linfoides secundarios (ganglios, bazo, MALT) hasta encontrar su antígeno.',
          },
          {
            type: 'note',
            title: 'Activación → plasmocito o memoria',
            content: 'Al reconocer el antígeno y recibir coestimulación de linfocitos T, el B se convierte en PLASMOCITO («fábrica de anticuerpos») o en célula B de MEMORIA (respuesta secundaria rápida). La memoria inmunológica es la base biológica de la VACUNACIÓN.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Plasmocito',
            content: 'El plasmocito produce grandes cantidades de anticuerpos (miles de moléculas por segundo). Enlaza con la célula plasmática del tejido conectivo (Semana 3).',
          },
        ],
      },
      {
        id: 'hlin-3',
        number: 3,
        title: 'Linfocitos T (inmunidad celular): CD4 y CD8',
        keyTerms: ['linfocito T', 'timo', 'CD4', 'CD8', 'TCR', 'MHC'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Los linfocitos T son la inmunidad CELULAR y los más abundantes de los linfocitos. Sus precursores salen de la médula y maduran en el TIMO, con selección positiva (que reconozcan antígeno) y negativa (que no ataquen lo propio). Reconocen el antígeno mediante su receptor TCR unido al complejo MHC/CMH de las células presentadoras.',
          },
          {
            type: 'comparison',
            title: 'CD4 vs CD8',
            left: {
              title: 'CD4+ (colaborador) — «coordina»',
              items: ['Secreta CITOCINAS', 'Activa macrófagos y linfocitos B', 'Recluta otras células efectoras', 'Se activa con MHC-II'],
            },
            right: {
              title: 'CD8+ (citotóxico) — «ejecuta»',
              items: ['Libera PERFORINAS y GRANZIMAS', 'Induce APOPTOSIS', 'Destruye células infectadas/tumorales', 'Se activa con MHC-I'],
            },
          },
          {
            type: 'note',
            title: 'Regla del MHC',
            content: 'MHC-II → CD4 · MHC-I → CD8. Un subgrupo de T queda como células de MEMORIA para responder más rápido en una futura exposición.',
          },
        ],
      },
      {
        id: 'hlin-4',
        number: 4,
        title: 'Células NK (inmunidad innata)',
        keyTerms: ['NK', 'inmunidad innata', 'perforinas', 'granzimas'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Las células NK (Natural Killer) son parte de la inmunidad INNATA. Su característica clave es que actúan SIN sensibilización previa específica, destruyendo células infectadas o tumorales mediante moléculas citotóxicas (perforinas y granzimas).',
          },
        ],
      },
      {
        id: 'hlin-5',
        number: 5,
        title: 'Cuadro comparativo T / B / NK',
        keyTerms: ['comparación', 'inmunidad'],
        blocks: [
          {
            type: 'table',
            title: 'T CD4 · T CD8 · B · NK',
            data: {
              headers: ['Célula', 'Inmunidad', 'Función', 'Asociación'],
              rows: [
                ['T CD4+', 'Adaptativa', 'Coordina mediante citocinas', 'CD4 = coordina'],
                ['T CD8+', 'Adaptativa', 'Destruye células alteradas', 'CD8 = mata (perforina/granzima)'],
                ['B', 'Adaptativa (humoral)', 'Anticuerpos (plasmocito)', 'B = anticuerpos'],
                ['NK', 'Innata', 'Citotoxicidad sin sensibilización', 'NK = destrucción rápida'],
              ],
            },
          },
        ],
      },
      {
        id: 'hlin-6',
        number: 6,
        title: 'Correlación clínica: VIH y trasplantes',
        keyTerms: ['VIH', 'SIDA', 'CD4', 'rechazo', 'ciclosporina'],
        blocks: [
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'VIH → CD4 < 200 = SIDA',
            content: 'El VIH afecta principalmente a los linfocitos T CD4+. Cuando el recuento cae por debajo de 200/μL se usa como criterio de SIDA, con riesgo de infecciones oportunistas (candidiasis, neumonía por Pneumocystis jirovecii). El seguimiento incluye carga viral y recuento de CD4.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Trasplante y rechazo',
            content: 'Los linfocitos T del receptor reconocen el MHC del donante como extraño → rechazo. Se usan inmunosupresores (ciclosporina), que al bajar la respuesta T aumentan el riesgo de infecciones.',
          },
        ],
      },
    ],
  },
  {
    id: 'histologia-medula-hematopoyesis',
    title: 'Plaquetas, hemostasia y médula ósea',
    subtitle: 'Estructura plaquetaria y hemostasia, médula ósea, hematopoyesis y sus reguladores',
    colorKey: 'histologia',
    categoria: 'Histología',
    emoji: '🔬',
    keyPoints: [
      'Plaqueta = HIALÓMERO (citoesqueleto: actina/miosina/microtúbulos) + GRANULÓMERO (gránulos α = fibrinógeno/vWF; densos/δ = ADP, serotonina, Ca²⁺; λ = lisosomales). Sin núcleo, con actividad metabólica. Origen: megacariocito; regulación por TROMBOPOYETINA.',
      'Hemostasia: lesión → ADHESIÓN (el vWF une la plaqueta al colágeno subendotelial) → activación → agregación → tapón plaquetario primario → cascada de coagulación (fibrinógeno → FIBRINA) → coágulo estable.',
      'Enfermedad de von Willebrand = trastorno hemorrágico hereditario más frecuente (sangrado de mucosas). AAS: inhibe COX-1 → ↓ tromboxano A₂ → ANTIAGREGANTE (no anticoagulante).',
      'Médula ROJA (hematopoyética: esternón, costillas, cráneo, vértebras, pelvis, epífisis proximales) vs AMARILLA (grasa/reserva; puede reactivarse). Sinusoides = salida de células maduras; celularidad ≈ 100 − edad.',
      'HSC (células madre hematopoyéticas): AUTORRENOVACIÓN + DIFERENCIACIÓN → línea MIELOIDE (eritrocitos, plaquetas, neutrófilos, eosinófilos, basófilos, monocitos) y LINFOIDE (B, T, NK).',
      'Reguladores clave: SCF (temprana), GM-CSF (granulocitos+macrófagos), G-CSF → neutrófilos, M-CSF → monocitos/macrófagos, IL-5 → eosinófilos, IL-8 → migración de neutrófilos.',
    ],
    sections: [
      {
        id: 'hmed-1',
        number: 1,
        title: 'Estructura de la plaqueta',
        keyTerms: ['hialómero', 'granulómero', 'gránulos alfa', 'gránulos densos', 'trombopoyetina'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La plaqueta (trombocito) es un fragmento de megacariocito SIN núcleo pero con actividad metabólica (mitocondrias, lisosomas, glucógeno). Se produce por trombopoyesis (megacariocito → fragmentación) y se regula por la TROMBOPOYETINA (producida sobre todo en hígado y riñón).',
          },
          {
            type: 'comparison',
            title: 'Dos regiones',
            left: {
              title: 'Hialómero (periférico)',
              items: ['Citoesqueleto: actina, miosina, microtúbulos', 'Mantiene la forma', 'Permite el cambio de forma y la contracción en la activación'],
            },
            right: {
              title: 'Granulómero (central)',
              items: ['Gránulos α: fibrinógeno, factor de von Willebrand', 'Gránulos densos/δ: ADP, serotonina, Ca²⁺', 'Gránulos λ: lisosomales'],
            },
          },
        ],
      },
      {
        id: 'hmed-2',
        number: 2,
        title: 'Hemostasia',
        keyTerms: ['hemostasia', 'von Willebrand', 'fibrina', 'AAS'],
        blocks: [
          {
            type: 'steps',
            title: 'Secuencia de la hemostasia',
            steps: [
              'Lesión vascular.',
              'Adhesión: el factor de von Willebrand (vWF) une la plaqueta al colágeno subendotelial.',
              'Activación y agregación de plaquetas → tapón plaquetario primario.',
              'Cascada de coagulación: fibrinógeno → FIBRINA.',
              'Coágulo estable (hemostasia secundaria).',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'von Willebrand y AAS',
            content: 'La enfermedad de von Willebrand (vWF deficiente/anómalo) es el trastorno hemorrágico hereditario MÁS FRECUENTE: peor adhesión plaquetaria → sangrado de mucosas y menstruación prolongada. El AAS (aspirina) inhibe la COX-1 → ↓ tromboxano A₂ → antiagregante plaquetario (NO anticoagulante).',
          },
        ],
      },
      {
        id: 'hmed-3',
        number: 3,
        title: 'Médula ósea: roja y amarilla',
        keyTerms: ['médula roja', 'médula amarilla', 'sinusoides', 'islotes eritroblásticos'],
        blocks: [
          {
            type: 'comparison',
            title: 'Médula roja vs amarilla',
            left: {
              title: 'Roja (hematopoyética)',
              items: ['Produce eritrocitos, leucocitos y plaquetas', 'En el adulto: esternón, costillas, cráneo, vértebras, pelvis y epífisis proximales de fémur/húmero', 'Muy vascularizada'],
            },
            right: {
              title: 'Amarilla (reserva)',
              items: ['Sobre todo tejido adiposo', 'Reserva de lípidos; no hematopoyética', 'Puede reactivarse ante demanda extrema (anemias hemolíticas crónicas)'],
            },
          },
          {
            type: 'note',
            title: 'Organización y datos',
            content: 'Los SINUSOIDES son las «puertas de salida» de las células maduras hacia la sangre. En los ISLOTES ERITROBLÁSTICOS los eritroblastos rodean a un macrófago central («niñera»). La celularidad medular ≈ 100 − edad (interpretar según la edad del paciente).',
          },
        ],
      },
      {
        id: 'hmed-4',
        number: 4,
        title: 'Hematopoyesis: HSC y las dos líneas',
        keyTerms: ['HSC', 'mieloide', 'linfoide', 'autorrenovación'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'La célula madre hematopoyética (HSC) tiene dos propiedades: AUTORRENOVACIÓN (produce nuevas HSC) y DIFERENCIACIÓN (origina las líneas celulares). Son muy escasas en la médula.',
          },
          {
            type: 'comparison',
            title: 'Dos grandes líneas',
            left: {
              title: 'Línea mieloide',
              items: ['Eritrocitos', 'Plaquetas (megacariocitos)', 'Neutrófilos, eosinófilos, basófilos', 'Monocitos'],
            },
            right: {
              title: 'Línea linfoide',
              items: ['Linfocitos B', 'Linfocitos T', 'Células NK'],
            },
          },
          {
            type: 'note',
            title: 'Nivel de detalle',
            content: 'El árbol detallado de maduración no se exige a ese nivel; lo importante es el concepto de origen común (HSC) y diferenciación en líneas mieloide y linfoide.',
          },
        ],
      },
      {
        id: 'hmed-5',
        number: 5,
        title: 'Reguladores de la hematopoyesis',
        keyTerms: ['SCF', 'G-CSF', 'M-CSF', 'IL-5', 'GM-CSF'],
        blocks: [
          {
            type: 'table',
            title: 'Los reguladores clave',
            data: {
              headers: ['Regulador', 'Asociación principal'],
              rows: [
                ['SCF (factor de célula madre)', 'Hematopoyesis temprana'],
                ['GM-CSF', 'Granulocitos + macrófagos'],
                ['G-CSF', 'Neutrófilos'],
                ['M-CSF', 'Monocitos/macrófagos'],
                ['IL-5', 'Eosinófilos'],
                ['IL-8', 'Migración de neutrófilos'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Referencia',
            content: 'La lista completa (16 factores con su acción y origen) está en el PDF de reguladores de la hemopoyesis — es material de referencia, no de memorizar.',
          },
        ],
      },
      {
        id: 'hmed-6',
        number: 6,
        title: 'Correlación clínica: leucemia y otras alteraciones',
        keyTerms: ['leucemia', 'pancitopenia', 'trombocitopenia', 'poliglobulia'],
        blocks: [
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Leucemia = la fábrica ocupada',
            content: 'La leucemia es una neoplasia hematopoyética cuyas células ocupan la médula y DESPLAZAN la producción normal → anemia + neutropenia + trombocitopenia (PANCITOPENIA). El diagnóstico se apoya en el aspirado/biopsia de médula ósea (cresta ilíaca o esternón).',
          },
          {
            type: 'table',
            title: 'Otras alteraciones integradas',
            data: {
              headers: ['Condición', 'Cambio', 'Clave'],
              rows: [
                ['Anemia', '↓ eritrocitos o hemoglobina', 'Palidez, fatiga, disnea'],
                ['Trombocitopenia', '↓ plaquetas (< 150,000/μL)', 'Petequias (p. ej. dengue grave)'],
                ['Poliglobulia', '↑ eritrocitos por hipoxia crónica', 'EPO ↑ (EPOC, apnea, tabaquismo)'],
                ['Policitemia vera', 'Neoplasia mieloproliferativa', 'Hematocrito alto, rubicundez, trombosis'],
              ],
            },
          },
        ],
      },
    ],
  },
]
