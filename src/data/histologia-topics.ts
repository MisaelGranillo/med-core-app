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
]
