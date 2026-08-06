/*
 * Anatomía Humana y Disección I (UAD · AN01001) — Guías de estudio, Semana 1.
 * Prof. Dr. Leonardo Andrés Soto Pacheco.
 *
 * FUENTE PRIMARIA (autoridad de examen): diapositivas del profesor
 *   · PDF 1 "Generalidades de la Anatomía" (temario + conceptos, planos, términos)
 *   · PDF 2 "Huesos de la Cabeza" (cráneo, hueso por hueso)
 *   · PDF 3 "Huesos de la Cara y Hioides"
 * RESPALDO: Moore, Anatomía con orientación clínica (Cap. 1; Cap. 7 Cabeza).
 *
 * NOMENCLATURA (regla del examen): el término PRINCIPAL es el CLÁSICO que usa
 * el profesor; la Terminología Anatómica (TA) internacional va entre paréntesis.
 * No mezclar ambas formas dentro de una misma opción — ver bloque `note` inicial.
 *
 * NOTA DE FUENTE: el PDF 3 se titula "…y Hioides" pero sus 11 diapositivas
 * terminan en el Lagrimal: NO incluye hioides. El hueso hioides se transcribe de
 * Moore (respaldo) y del temario oficial. El temporal tampoco viene desglosado en
 * el PDF 2; se cubre a nivel de constitución (respaldo Moore).
 */

import type { Topic } from '../types'

// Bloque reutilizable: coexistencia de nomenclatura clásica y TA (regla §3).
const notaNomenclatura = {
  type: 'note' as const,
  title: 'Nomenclatura: clásica vs. Terminología Anatómica (TA)',
  content:
    'Las diapositivas del profesor usan terminología anatómica CLÁSICA (la que se califica en el examen); Moore y los atlas modernos usan la Terminología Anatómica (TA) internacional. No son intercambiables. Equivalencias frecuentes: Maxilar Superior = Maxilar · Malar/Cigomático-Malar = Cigomático · Hueso Propio de la Nariz = Nasal · Unguis = Lagrimal · Agujero = Foramen · Apófisis = Proceso · Escotadura = Incisura. Usa el término clásico como principal y reconoce el de TA; el error más caro es saber la estructura correcta con el nombre equivocado.',
}

export const anatomiaUadTopics: Topic[] = [
  // ══════════════════════════════════════════════════════════════════════
  // 1. GENERALIDADES, TERMINOLOGÍA Y PLANOS
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'anatomia-generalidades',
    title: 'Generalidades, Terminología y Planos',
    subtitle: 'Métodos de estudio, posición y planos anatómicos, términos de relación y movimiento',
    colorKey: 'anatomiaGeneral',
    emoji: '🧭',
    keyPoints: [
      'La posición anatómica es la referencia universal: bipedestación, mirada al frente, brazos a los lados y palmas hacia adelante.',
      'Todo término direccional se define respecto a la posición anatómica, sin importar la postura real del paciente.',
      'Los tres planos —sagital/mediano, frontal/coronal y transversal— son perpendiculares entre sí.',
      'Los pares de términos son opuestos: superior/inferior, anterior/posterior, medial/lateral, proximal/distal, superficial/profundo.',
      'Proximal y distal solo se aplican a los miembros (cercanía a la raíz del miembro), no al tronco.',
      'Los movimientos ocurren alrededor de ejes: flexión-extensión (eje latero-lateral), abducción-aducción (eje antero-posterior), rotación (eje longitudinal).',
      'La circunducción es la combinación secuencial de flexión, extensión, abducción y aducción; se da en hombro y cadera.',
      'Las variaciones anatómicas son estadísticamente la norma; el patrón "de libro" es solo el más frecuente.',
    ],
    sections: [
      {
        id: 'gen-1',
        number: 1,
        title: 'Concepto y métodos de estudio de la anatomía',
        keyTerms: ['Anatomía descriptiva', 'Anatomía topográfica', 'Anatomía funcional', 'Anatomía clínica', 'Disección', 'Anatomía de superficie', 'Anatomía radiológica'],
        blocks: [
          {
            type: 'definition',
            title: 'Anatomía',
            description: 'Ciencia que estudia la estructura del cuerpo humano y las relaciones entre sus partes. Del griego aná- (a través) y tomé (corte): "cortar a través", en referencia a la disección como método fundacional.',
          },
          {
            type: 'list',
            title: 'Enfoques de estudio (Moore, Cap. 1)',
            items: [
              'Anatomía descriptiva o sistemática: estudia el cuerpo por aparatos y sistemas (óseo, muscular, etc.).',
              'Anatomía topográfica o regional: estudia una región por capas y las relaciones entre sus estructuras.',
              'Anatomía funcional: relaciona la forma con la función.',
              'Anatomía clínica (aplicada): orienta el conocimiento a la práctica médica y el diagnóstico.',
              'Anatomía de superficie y radiológica: la estructura vista en el vivo y en imágenes.',
            ],
          },
          {
            type: 'list',
            title: 'Métodos',
            items: [
              'Disección en cadáver (método directo; escenario de la asignatura junto con la Mesa Anatomage).',
              'Imagenología: radiografía, TC, RM, ecografía.',
              'Endoscopia y observación in vivo.',
            ],
          },
        ],
      },
      {
        id: 'gen-2',
        number: 2,
        title: 'Terminología anatómica y médica',
        keyTerms: ['Terminología Anatómica (TA)', 'Nomenclatura clásica', 'Epónimo', 'Foramen / Agujero', 'Apófisis / Proceso'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La Terminología Anatómica (TA) es el lenguaje internacional estandarizado que evita ambigüedad y epónimos. En esta asignatura conviven la nomenclatura clásica (la de las diapositivas y el examen) y la TA (la de Moore y los atlas).',
          },
          notaNomenclatura,
          {
            type: 'table',
            title: 'Equivalencias clásica ↔ TA de uso frecuente',
            data: {
              headers: ['Clásica (examen)', 'Terminología Anatómica (TA)'],
              rows: [
                ['Maxilar Superior', 'Maxilar'],
                ['Hueso Malar / Cigomático-Malar', 'Cigomático'],
                ['Hueso Propio de la Nariz', 'Nasal'],
                ['Unguis', 'Lagrimal'],
                ['Agujero (occipital, óptico, ciego…)', 'Foramen'],
                ['Apófisis', 'Proceso'],
                ['Escotadura', 'Incisura'],
              ],
            },
          },
        ],
      },
      {
        id: 'gen-3',
        number: 3,
        title: 'Posición anatómica',
        keyTerms: ['Posición anatómica', 'Bipedestación', 'Supinación de antebrazos', 'Decúbito supino', 'Decúbito prono'],
        blocks: [
          {
            type: 'definition',
            title: 'Posición anatómica',
            description: 'Referencia universal para describir el cuerpo: individuo de pie (bipedestación), cabeza y mirada al frente, boca cerrada, miembros superiores extendidos a los lados del tronco con las palmas hacia adelante (antebrazos en supinación), y miembros inferiores juntos con los pies dirigidos al frente.',
          },
          {
            type: 'note',
            title: 'Por qué importa',
            content: 'Todos los términos de posición y relación se definen SIEMPRE respecto a la posición anatómica, aunque el paciente esté acostado o en otra postura. Decúbito supino = boca arriba; decúbito prono = boca abajo; decúbito lateral = de lado.',
          },
        ],
      },
      {
        id: 'gen-4',
        number: 4,
        title: 'Planos anatómicos',
        keyTerms: ['Plano sagital', 'Plano mediano', 'Plano frontal (coronal)', 'Plano transversal (axial)', 'Cortes'],
        blocks: [
          {
            type: 'definition',
            title: 'Plano sagital / mediano',
            description: 'Plano vertical que divide el cuerpo en mitades derecha e izquierda. El plano mediano (medio-sagital) pasa por la línea media; los planos parasagitales son paralelos a él.',
          },
          {
            type: 'definition',
            title: 'Plano frontal (coronal)',
            description: 'Plano vertical, perpendicular al sagital, que divide el cuerpo en una porción anterior (ventral) y una posterior (dorsal).',
          },
          {
            type: 'definition',
            title: 'Plano transversal (axial / horizontal)',
            description: 'Plano horizontal, perpendicular a los dos anteriores, que divide el cuerpo en una porción superior (craneal) y una inferior (caudal). Es el plano de los cortes de TC y RM.',
          },
          {
            type: 'note',
            content: 'Los tres planos son perpendiculares entre sí. Un plano oblicuo es cualquiera que no sea paralelo a estos tres.',
          },
        ],
      },
      {
        id: 'gen-5',
        number: 5,
        title: 'Términos de relación y comparación',
        keyTerms: ['Superior / Inferior', 'Craneal / Caudal', 'Anterior / Posterior', 'Ventral / Dorsal', 'Medial / Lateral', 'Proximal / Distal', 'Superficial / Profundo'],
        blocks: [
          {
            type: 'table',
            title: 'Pares de términos direccionales',
            data: {
              headers: ['Término', 'Significado (respecto a la posición anatómica)'],
              rows: [
                ['Superior (craneal)', 'Más cerca de la cabeza / vértice.'],
                ['Inferior (caudal)', 'Más cerca de los pies.'],
                ['Anterior (ventral)', 'Hacia el frente del cuerpo.'],
                ['Posterior (dorsal)', 'Hacia la espalda.'],
                ['Medial', 'Más cerca del plano mediano.'],
                ['Lateral', 'Más alejado del plano mediano.'],
                ['Proximal', 'Más cerca de la raíz del miembro o del origen.'],
                ['Distal', 'Más alejado de la raíz del miembro o del origen.'],
                ['Superficial', 'Más cerca de la superficie de la piel.'],
                ['Profundo', 'Más alejado de la superficie.'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'La trampa proximal/distal vs superior/inferior',
            left: { title: 'Proximal / Distal', items: ['Solo en los MIEMBROS.', 'Miden cercanía a la raíz del miembro.', 'El codo es proximal a la muñeca.'] },
            right: { title: 'Superior / Inferior', items: ['En el tronco, cabeza y cuello.', 'Miden cercanía a la cabeza o los pies.', 'Aplicar "proximal" al tronco es un error frecuente.'] },
          },
        ],
      },
      {
        id: 'gen-6',
        number: 6,
        title: 'Ejes y movimientos',
        keyTerms: ['Flexión', 'Extensión', 'Abducción', 'Aducción', 'Rotación medial/lateral', 'Pronación', 'Supinación', 'Circunducción', 'Eje longitudinal', 'Eje latero-lateral', 'Eje antero-posterior'],
        blocks: [
          {
            type: 'table',
            title: 'Movimientos y su eje',
            data: {
              headers: ['Movimiento', 'Eje / Plano'],
              rows: [
                ['Flexión / Extensión', 'Eje latero-lateral (plano sagital).'],
                ['Abducción / Aducción', 'Eje antero-posterior (plano frontal).'],
                ['Rotación medial / lateral', 'Eje longitudinal (plano transversal).'],
                ['Pronación / Supinación', 'Eje longitudinal del antebrazo (radio sobre cúbito).'],
                ['Inversión / Eversión', 'Planta del pie hacia medial / lateral.'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Términos opuestos',
            left: { title: 'Flexión / Abducción', items: ['Flexión: disminuye el ángulo articular.', 'Abducción: aleja del plano mediano.', 'Rotación medial: la cara anterior gira hacia dentro.'] },
            right: { title: 'Extensión / Aducción', items: ['Extensión: aumenta el ángulo articular.', 'Aducción: acerca al plano mediano.', 'Rotación lateral: la cara anterior gira hacia fuera.'] },
          },
          {
            type: 'steps',
            title: 'Circunducción (hombro y cadera)',
            steps: [
              'Es la COMBINACIÓN secuencial de los movimientos anteriores, no un movimiento independiente.',
              'Encadena flexión → abducción → extensión → aducción (o el sentido inverso).',
              'El extremo distal del miembro describe un círculo y el conjunto, un cono.',
              'Requiere articulaciones multiaxiales (enartrosis): hombro y cadera.',
            ],
          },
        ],
      },
      {
        id: 'gen-7',
        number: 7,
        title: 'Variaciones anatómicas',
        keyTerms: ['Variación anatómica', 'Anomalía', 'Variante de la normalidad'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La descripción "de libro" corresponde al patrón más frecuente, no al único. Las variaciones anatómicas (número, forma, trayecto o posición de una estructura) son estadísticamente la norma y muchas carecen de repercusión clínica.',
          },
          {
            type: 'note',
            title: 'Variación ≠ anomalía',
            content: 'Una variación es un patrón alternativo compatible con la función normal (p. ej., una arteria con origen distinto). Una anomalía o malformación sí compromete la función. Reconocerlas evita errores diagnósticos y quirúrgicos.',
          },
        ],
      },
      {
        id: 'gen-8',
        number: 8,
        title: 'Osteología: desarrollo y constitución del esqueleto',
        keyTerms: ['Osificación intramembranosa', 'Osificación endocondral', 'Diáfisis', 'Epífisis', 'Metáfisis', 'Cartílago de crecimiento', 'Centro de osificación'],
        blocks: [
          {
            type: 'comparison',
            title: 'Tipos de osificación (Moore pp. 11–13)',
            left: { title: 'Intramembranosa', items: ['El hueso se forma directamente sobre membrana mesenquimatosa.', 'Huesos planos del cráneo (bóveda) y cara.', 'No hay molde cartilaginoso previo.'] },
            right: { title: 'Endocondral', items: ['El hueso reemplaza un molde de cartílago hialino.', 'Huesos largos, base del cráneo, columna.', 'Ocurre en los centros primario (diáfisis) y secundarios (epífisis).'] },
          },
          {
            type: 'steps',
            title: 'Crecimiento de un hueso largo',
            steps: [
              'Centro de osificación primario: aparece en la diáfisis (cuerpo).',
              'Centros secundarios: aparecen en las epífisis (extremos).',
              'Metáfisis: región entre diáfisis y epífisis donde persiste el cartílago de crecimiento (fisis).',
              'El crecimiento en longitud continúa mientras la fisis esté abierta; al cerrarse queda la línea epifisaria.',
            ],
          },
          {
            type: 'list',
            title: 'Constitución general del esqueleto',
            items: [
              'Esqueleto axial: cráneo, columna vertebral, costillas y esternón.',
              'Esqueleto apendicular: cinturas (escapular y pélvica) y miembros.',
              'Clasificación de los huesos por su forma: largos, cortos, planos, irregulares, sesamoideos y neumáticos.',
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // 2. HUESOS DEL CRÁNEO
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'huesos-craneo',
    title: 'Huesos del Cráneo',
    subtitle: 'Los 8 huesos del neurocráneo: caras, bordes, accidentes y suturas',
    colorKey: 'osteologia',
    emoji: '💀',
    keyPoints: [
      'El cráneo (neurocráneo) está formado por 8 huesos: 2 pares (parietales y temporales) y 4 impares (frontal, esfenoides, occipital y etmoides).',
      'El frontal presenta 3 caras (anterior, posterior, inferior) y 3 bordes; en su cara posterior están la escotadura etmoidal y el agujero ciego.',
      'El etmoides es el hueso de las fosas nasales y la órbita: crista galli, lámina cribosa (agujeros olfatorios) y masas laterales con los cornetes superior y medio.',
      'El esfenoides, en el centro de la base, aloja la silla turca (hipófisis) y sus alas mayores contienen el agujero redondo mayor, el oval y el redondo menor.',
      'El agujero occipital (35 × 30 mm) del occipital comunica el cráneo con el conducto vertebral; a sus lados están los cóndilos que articulan con el atlas.',
      'Los puntos craneométricos nacen del cruce de suturas: bregma (coronal + sagital), lambda (sagital + lambdoidea), pterion y asterion.',
      'El etmoides y el esfenoides son impares y forman parte tanto del cráneo como de las cavidades orbitaria y nasal.',
    ],
    sections: [
      {
        id: 'cra-1',
        number: 1,
        title: 'Constitución del cráneo',
        keyTerms: ['Neurocráneo', 'Viscerocráneo', 'Huesos pares', 'Huesos impares', 'Parietal', 'Temporal', 'Frontal', 'Esfenoides', 'Occipital', 'Etmoides'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El cráneo (neurocráneo) es la caja ósea que aloja y protege el encéfalo. Está formado por 8 huesos.',
          },
          {
            type: 'comparison',
            title: 'Los 8 huesos del cráneo',
            left: { title: '2 pares', items: ['Parietales', 'Temporales'] },
            right: { title: '4 impares', items: ['Frontal', 'Esfenoides', 'Occipital', 'Etmoides'] },
          },
          {
            type: 'comparison',
            title: 'Neurocráneo vs. viscerocráneo',
            left: { title: 'Neurocráneo (cráneo)', items: ['Aloja el encéfalo.', '8 huesos.', 'Bóveda (calvaria) + base.'] },
            right: { title: 'Viscerocráneo (cara)', items: ['Esqueleto de la cara.', 'Aloja órganos de los sentidos y vía aérea/digestiva alta.', 'Ver tema "Huesos de la Cara y Hioides".'] },
          },
          notaNomenclatura,
        ],
      },
      {
        id: 'cra-2',
        number: 2,
        title: 'Hueso frontal',
        keyTerms: ['Glabela', 'Arcos supraciliares', 'Escotadura etmoidal', 'Agujero ciego', 'Eminencias orbitarias', 'Seno frontal', 'Apófisis cigomática del frontal', 'Bregma'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso impar de la parte anterior del cráneo; forma la frente, el techo de las órbitas y parte del techo de las fosas nasales. Presenta 3 caras y 3 bordes.',
          },
          {
            type: 'table',
            title: 'Caras del frontal y sus accidentes',
            data: {
              headers: ['Cara / Borde', 'Accidentes'],
              rows: [
                ['Cara anterior', 'Glabela; eminencias frontales; arcos supraciliares; cresta frontal lateral; sutura mediofrontal (metópica).'],
                ['Cara posterior', 'Surco para el seno longitudinal; cresta frontal; agujero ciego; escotadura etmoidal; eminencias orbitarias; impresiones digitales.'],
                ['Cara inferior', 'Espina nasal del frontal; orificios de los senos frontales; conductos etmoidales anterior y posterior; fosas orbitarias; fosita lagrimal y troclear.'],
                ['Borde anterior', 'Escotadura nasal; borde supraorbitario con escotadura supraorbitaria; apófisis orbitaria medial; apófisis cigomática del frontal.'],
                ['Borde superior', 'Borde parietal (articula con los parietales por la sutura coronal).'],
                ['Borde posterior', 'Escotadura etmoidal (aloja la lámina cribosa del etmoides).'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Suturas del frontal',
            items: [
              'Coronal (con los parietales) → su punto medio es el BREGMA.',
              'Frontonasal, frontomaxilar, frontolacrimal.',
              'Frontocigomática, esfenofrontal, frontoetmoidal.',
            ],
          },
          {
            type: 'note',
            content: 'Los senos frontales son cavidades neumáticas de la cara posterior/inferior; drenan al meato medio de la fosa nasal.',
          },
        ],
      },
      {
        id: 'cra-3',
        number: 3,
        title: 'Hueso etmoides',
        keyTerms: ['Crista galli', 'Lámina perpendicular', 'Lámina cribosa', 'Agujeros olfatorios', 'Masas laterales', 'Cornete superior', 'Cornete medio', 'Celdillas etmoidales', 'Apófisis unciforme'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso impar, central y profundo; participa en el techo de las fosas nasales, el tabique y la pared medial de la órbita. Se describe por una lámina vertical, una lámina horizontal y dos masas laterales.',
          },
          {
            type: 'table',
            title: 'Porciones del etmoides',
            data: {
              headers: ['Cara / Borde', 'Accidentes'],
              rows: [
                ['Lámina vertical', 'Apófisis crista galli (arriba, inserción de la hoz del cerebro); lámina perpendicular (abajo, forma el tabique nasal óseo).'],
                ['Lámina horizontal — cara superior', 'Canal olfatorio; agujeros olfatorios; lámina cribosa (deja pasar los filetes del nervio olfatorio).'],
                ['Lámina horizontal — cara inferior', 'Bóveda de las fosas nasales.'],
                ['Masas laterales — cara externa', 'Lámina orbitaria (pared medial de la órbita, "os planum").'],
                ['Masas laterales — cara interna', 'Cornetes superior y medio; meato nasal superior.'],
                ['Masas laterales', 'Celdillas etmoidales (anteriores, medias y posteriores); infundíbulo; apófisis unciforme; meato nasal medio.'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Suturas del etmoides',
            items: ['Frontoetmoidal, esfenoetmoidal.', 'Etmoidomaxilar, etmoidopalatina.', 'Etmoidovomeriana, etmoidolacrimal.'],
          },
        ],
      },
      {
        id: 'cra-4',
        number: 4,
        title: 'Hueso esfenoides',
        keyTerms: ['Cuerpo', 'Silla turca', 'Seno esfenoidal', 'Alas menores', 'Agujero óptico', 'Alas mayores', 'Fisura orbitaria superior', 'Agujero redondo mayor', 'Agujero oval', 'Apófisis pterigoides'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso impar en forma de mariposa, ubicado en el centro de la base del cráneo. Consta de un cuerpo, dos alas menores, dos alas mayores y dos apófisis pterigoides.',
          },
          {
            type: 'table',
            title: 'Partes del esfenoides',
            data: {
              headers: ['Parte', 'Accidentes principales'],
              rows: [
                ['Cuerpo — cara superior', 'Yugo esfenoidal; canal óptico; tubérculo pituitario; SILLA TURCA (aloja la hipófisis); lámina cuadrilátera; apófisis clinoides.'],
                ['Cuerpo — cara anterior', 'Cresta anterior; apertura del seno esfenoidal; carillas etmoidales.'],
                ['Cuerpo — cara inferior', 'Cresta inferior; pico (rostrum); conducto esfenopalatino.'],
                ['Alas menores', 'Base perforada por el AGUJERO ÓPTICO; separan la fosa craneal anterior de la media.'],
                ['Alas mayores (borde interno)', 'Fisura orbitaria superior; agujero redondo mayor; agujero oval; agujero redondo menor; língula; conducto pterigoideo.'],
                ['Apófisis pterigoides', 'Alas externa e interna; gancho pterigoideo; fosa pterigoidea; fosita escafoidea; conducto pterigoideo en su base.'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Orden de los agujeros del ala mayor de anterior a posterior: fisura orbitaria superior → agujero redondo mayor → agujero oval → agujero redondo menor. La silla turca del cuerpo es la referencia de la hipófisis.',
          },
        ],
      },
      {
        id: 'cra-5',
        number: 5,
        title: 'Hueso parietal',
        keyTerms: ['Eminencia parietal', 'Líneas temporales', 'Surco de la arteria meníngea media', 'Fositas granulares', 'Agujero parietal', 'Bregma', 'Lambda', 'Pterion', 'Asterion'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso par, cuadrilátero, que forma la mayor parte de la bóveda craneal (calvaria). Tiene dos caras, cuatro bordes y cuatro ángulos.',
          },
          {
            type: 'table',
            title: 'Caras, bordes y ángulos del parietal',
            data: {
              headers: ['Cara / Borde / Ángulo', 'Accidentes'],
              rows: [
                ['Cara externa', 'Eminencia parietal; líneas temporales superior e inferior.'],
                ['Cara interna', 'Fosa parietal; surco de la arteria meníngea media; fositas granulares.'],
                ['Borde superior', 'Sutura sagital; canal del seno longitudinal superior; agujero parietal.'],
                ['Bordes (inf./ant./post.)', 'Inferior: temporal · Anterior: frontal · Posterior: occipital.'],
                ['Ángulos', 'Anterosuperior: BREGMA (frontoparietal) · Anteroinferior: PTERION (esfenoides) · Posterosuperior: LAMBDA (occipitoparietal) · Posteroinferior: ASTERION (temporal).'],
              ],
            },
          },
        ],
      },
      {
        id: 'cra-6',
        number: 6,
        title: 'Hueso occipital',
        keyTerms: ['Agujero occipital', 'Porción basilar', 'Tubérculo faríngeo', 'Protuberancia occipital externa (inion)', 'Cóndilos occipitales', 'Protuberancia occipital interna', 'Agujero yugular', 'Lambda'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso impar de la parte posteroinferior del cráneo. Está perforado por el agujero occipital (≈ 35 × 30 mm), que comunica la cavidad craneal con el conducto vertebral.',
          },
          {
            type: 'table',
            title: 'Caras del occipital',
            data: {
              headers: ['Cara / Borde', 'Accidentes'],
              rows: [
                ['Cara posteroinferior', 'Agujero occipital; porción basilar con tubérculo faríngeo; porción escamosa; protuberancia occipital externa (INION); cresta occipital externa; líneas curvas (nucales); cóndilos del occipital; agujeros condíleos.'],
                ['Cara anterosuperior', 'Canal basilar; protuberancia occipital interna; cresta occipital interna; surco del seno longitudinal superior; surco del seno lateral y sigmoides; fosas occipitales.'],
                ['Bordes', 'Superiores (parietales) → ángulo superior = LAMBDA. Inferiores (temporales): apófisis, escotadura, tubérculo y agujero yugular.'],
                ['Ángulos', 'Superior: lambda · Inferior: articula con el cuerpo del esfenoides · Laterales: ASTERION (unión parietotemporal).'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Los cóndilos del occipital, a los lados del agujero occipital, articulan con las carillas superiores del atlas (articulación atlantooccipital) y permiten el movimiento de "sí" con la cabeza.',
          },
        ],
      },
      {
        id: 'cra-7',
        number: 7,
        title: 'Hueso temporal — pendiente',
        keyTerms: ['Temporal', 'Peñasco', 'Mastoides', 'Apófisis estiloides', 'Apófisis cigomática'],
        blocks: [
          {
            type: 'note',
            title: 'Pendiente — clase 4',
            content: 'El temporal es el 2.º hueso par del cráneo (junto con los parietales), pero la clase 2 NO lo desarrolló: detalla solo 5 de los 6 huesos distintos. Su estudio (escama, peñasco/porción petrosa, mastoides, porción timpánica, apófisis estiloides y cigomática) llega en la clase 4. Se nombra aquí únicamente para completar el conteo de 8 huesos, no como tema impartido.',
          },
        ],
      },
      {
        id: 'cra-8',
        number: 8,
        title: 'Suturas y puntos craneométricos',
        keyTerms: ['Sutura coronal', 'Sutura sagital', 'Sutura lambdoidea', 'Sutura escamosa', 'Bregma', 'Lambda', 'Pterion', 'Asterion'],
        blocks: [
          {
            type: 'table',
            title: 'Suturas y sus puntos de encuentro',
            data: {
              headers: ['Punto', 'Suturas / huesos que lo forman'],
              rows: [
                ['Bregma', 'Encuentro de la sutura coronal con la sagital (frontal + parietales).'],
                ['Lambda', 'Encuentro de la sutura sagital con la lambdoidea (parietales + occipital).'],
                ['Pterion', 'Región donde convergen frontal, parietal, ala mayor del esfenoides y escama del temporal.'],
                ['Asterion', 'Unión de parietal, occipital y temporal (mastoides).'],
              ],
            },
          },
          {
            type: 'note',
            content: 'El pterion es un punto débil clínicamente importante: por dentro pasa la arteria meníngea media, y un golpe en esa zona puede provocar hematoma epidural.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // 3. HUESOS DE LA CARA Y HIOIDES
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'huesos-cara-hioides',
    title: 'Huesos de la Cara y Hioides',
    subtitle: 'Viscerocráneo y hueso hioides: relieves, cavidades y articulaciones',
    colorKey: 'osteologia',
    emoji: '🦴',
    keyPoints: [
      'El macizo facial (viscerocráneo) está formado por huesos pares —maxilar superior, malar, nasal, unguis (lagrimal), palatino y cornete inferior— e impares —vómer y mandíbula.',
      'El maxilar superior es la pieza central de la cara: forma el paladar, el suelo de la órbita y la pared de las fosas nasales; aloja el seno maxilar.',
      'El malar (cigomático) forma el pómulo y, con la apófisis cigomática del temporal, el arco cigomático.',
      'El vómer forma la porción posteroinferior del tabique nasal y separa las coanas.',
      'El palatino, en forma de L, completa por detrás el paladar óseo (porción horizontal) y la pared lateral de la fosa nasal (porción vertical).',
      'El unguis (lagrimal) forma parte del canal lacrimonasal por el que discurre el conducto nasolagrimal.',
      'La clase 3 cubrió los huesos de la cara hasta el lagrimal; la mandíbula y el hueso hioides quedan pendientes (clases 4–5).',
    ],
    sections: [
      {
        id: 'cah-1',
        number: 1,
        title: 'Constitución del macizo facial',
        keyTerms: ['Viscerocráneo', 'Maxilar superior', 'Malar (cigomático)', 'Hueso propio de la nariz', 'Unguis (lagrimal)', 'Palatino', 'Cornete inferior', 'Vómer', 'Mandíbula'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El esqueleto de la cara (viscerocráneo) se dispone bajo el neurocráneo y aloja el inicio de las vías respiratoria y digestiva y los órganos de los sentidos.',
          },
          {
            type: 'comparison',
            title: 'Huesos de la cara',
            left: { title: 'Pares (6)', items: ['Maxilar superior', 'Malar / cigomático', 'Hueso propio de la nariz (nasal)', 'Unguis (lagrimal)', 'Palatino', 'Cornete inferior'] },
            right: { title: 'Impares (2)', items: ['Vómer', 'Mandíbula (maxilar inferior)'] },
          },
          notaNomenclatura,
        ],
      },
      {
        id: 'cah-2',
        number: 2,
        title: 'Maxilar superior',
        keyTerms: ['Apófisis palatina', 'Seno maxilar', 'Apófisis frontal', 'Eminencia canina', 'Canal infraorbitario', 'Orificio infraorbitario', 'Apófisis cigomática', 'Tuberosidad del maxilar'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso par, pieza central del macizo facial. Contribuye al paladar, al suelo de la órbita, a la pared de la fosa nasal y a la arcada dentaria superior. Aloja el seno maxilar. Se describe con 2 caras, 4 bordes y 4 ángulos.',
          },
          {
            type: 'table',
            title: 'Caras del maxilar superior',
            data: {
              headers: ['Cara / Borde', 'Accidentes'],
              rows: [
                ['Cara interna (nasal)', 'Apófisis palatina; agujero palatino anterior; carilla para el palatino; orificio del seno maxilar; apófisis frontal.'],
                ['Cara externa (yugal)', 'Fosita mirtiforme; eminencia canina; apófisis cigomática; canal y orificio infraorbitario; fosa cigomática; agujeros dentarios posteriores; reborde infraorbitario; fisura orbitaria inferior.'],
                ['Borde anterior', 'Espina nasal anterior; escotadura nasal; borde anterior de la apófisis frontal.'],
                ['Borde posterior', 'Tuberosidad del maxilar; carilla para la apófisis pterigoides y el palatino; conducto palatino mayor.'],
                ['Borde superior', 'Articular para el unguis, etmoides y palatino.'],
                ['Borde inferior', 'Cavidades alveolares superiores (arcada dentaria).'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Las dos apófisis palatinas de ambos maxilares se unen en la línea media y forman los 2/3 anteriores del paladar óseo; el 1/3 posterior lo forman las láminas horizontales de los palatinos.',
          },
        ],
      },
      {
        id: 'cah-3',
        number: 3,
        title: 'Malar (cigomático) y arco cigomático',
        keyTerms: ['Cara externa', 'Cara interna', 'Apófisis frontal', 'Apófisis temporal', 'Fosa temporal', 'Arco cigomático', 'Reborde orbitario'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso par que forma el relieve del pómulo y la pared lateral e inferior de la órbita. Tiene cara externa e interna, cuatro bordes y varios ángulos con apófisis.',
          },
          {
            type: 'table',
            title: 'Accidentes del malar',
            data: {
              headers: ['Cara / Borde / Ángulo', 'Accidentes'],
              rows: [
                ['Cara externa', 'Superficie del pómulo (subcutánea).'],
                ['Cara interna', 'Mira a la fosa temporal y a la fosa infratemporal.'],
                ['Bordes', 'Anterosuperior: reborde orbitario, apófisis orbitaria · Posterosuperior: fosa temporal · Antero/posteroinferior: articulan con el maxilar.'],
                ['Ángulos / apófisis', 'Superior: apófisis frontal (articula con el frontal) · Posterior: apófisis temporal (forma el arco cigomático con el temporal).'],
              ],
            },
          },
          {
            type: 'note',
            content: 'El ARCO CIGOMÁTICO resulta de la unión de la apófisis temporal del malar con la apófisis cigomática del temporal. Es un reparo palpable y una fractura frecuente en traumatismos faciales.',
          },
        ],
      },
      {
        id: 'cah-4',
        number: 4,
        title: 'Hueso propio de la nariz y unguis (lagrimal)',
        keyTerms: ['Hueso propio de la nariz (nasal)', 'Unguis (lagrimal)', 'Cresta lagrimal posterior', 'Canal lacrimonasal', 'Cartílagos laterales nasales'],
        blocks: [
          {
            type: 'definition',
            title: 'Hueso propio de la nariz (nasal)',
            description: 'Huesecillo par que forma el dorso óseo de la nariz. Cara anterior y posterior (fosas nasales); se articula por arriba con el frontal, por fuera con el maxilar, por dentro con su homónimo, frontal y etmoides, y por abajo con los cartílagos laterales nasales.',
          },
          {
            type: 'definition',
            title: 'Unguis / hueso lagrimal',
            description: 'Lámina delgada de la pared medial de la órbita. Su cara externa presenta la cresta lagrimal posterior y participa en el canal lacrimonasal; se articula con frontal, etmoides, maxilar y cornete inferior.',
          },
          {
            type: 'note',
            content: 'El canal lacrimonasal (formado por unguis, maxilar y cornete inferior) aloja el conducto nasolagrimal, que drena la lágrima hacia el meato inferior de la fosa nasal.',
          },
        ],
      },
      {
        id: 'cah-5',
        number: 5,
        title: 'Vómer y cornete inferior',
        keyTerms: ['Vómer', 'Tabique nasal', 'Coanas', 'Canal esfenovomeriano', 'Cornete inferior', 'Meato inferior'],
        blocks: [
          {
            type: 'table',
            title: 'Vómer',
            data: {
              headers: ['Borde / Cara', 'Descripción'],
              rows: [
                ['Caras (derecha e izquierda)', 'Surco del vómer; forman la porción posteroinferior del tabique nasal óseo.'],
                ['Borde posterior', 'Libre; separa las coanas (aberturas posteriores de las fosas nasales).'],
                ['Borde superior', 'Alas del vómer; articula con el esfenoides (canal esfenovomeriano).'],
                ['Bordes anterior/inferior', 'Articulan con etmoides y cartílago del tabique / maxilar y palatino.'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Cornete inferior',
            description: 'Hueso par, independiente (no es parte del etmoides como los cornetes superior y medio). Su cara externa delimita el meato inferior; presenta apófisis lagrimal, maxilar y etmoidal, y extremidades anterior (maxilar) y posterior (palatino).',
          },
        ],
      },
      {
        id: 'cah-6',
        number: 6,
        title: 'Hueso palatino',
        keyTerms: ['Porción horizontal', 'Porción vertical', 'Espina nasal posterior', 'Agujero esfenopalatino', 'Surco palatino mayor', 'Apófisis piramidal'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso par en forma de "L", profundo, entre el maxilar (delante) y la apófisis pterigoides del esfenoides (detrás). Tiene una porción horizontal y una porción vertical.',
          },
          {
            type: 'table',
            title: 'Porciones del palatino',
            data: {
              headers: ['Porción', 'Descripción'],
              rows: [
                ['Horizontal', 'Cara superior: suelo de las fosas nasales · Cara inferior: techo de la cavidad bucal (1/3 posterior del paladar óseo) · Borde posterior: espina nasal posterior.'],
                ['Vertical — cara externa', 'Fondo de la fosa pterigomaxilar; surco palatino mayor.'],
                ['Vertical — cara interna', 'Pared lateral de las fosas nasales; crestas etmoidal y turbinal; meato medio e inferior.'],
                ['Vertical — borde superior', 'Escotadura palatina; agujero esfenopalatino; apófisis orbitaria y esfenoidal.'],
              ],
            },
          },
        ],
      },
      {
        id: 'cah-7',
        number: 7,
        title: 'Mandíbula e hioides — pendientes',
        keyTerms: ['Mandíbula', 'Hioides'],
        blocks: [
          {
            type: 'note',
            title: 'Pendiente — clases 4–5',
            content: 'Pese al título "Huesos de la Cara y Hioides", la clase 3 terminó en el lagrimal: NO impartió la mandíbula ni el hueso hioides. Ambos llegan en las clases 4 o 5 y se incorporarán entonces. Se dejan como hueco visible para no simular un temario cubierto que aún no lo está.',
          },
        ],
      },
    ],
  },
]
