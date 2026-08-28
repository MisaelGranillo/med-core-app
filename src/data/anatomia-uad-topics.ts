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
 * NOMENCLATURA (regla MedCore): el término PRINCIPAL es la Terminología
 * Anatómica (TA) internacional; la nomenclatura clásica del profesor va ENTRE
 * PARÉNTESIS la primera vez que aparece en cada sección. En el examen la forma
 * clásica cuenta como correcta, por eso acompaña SIEMPRE a la TA. No mezclar
 * ambas formas dentro de una misma opción — ver bloque `note` inicial.
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
  title: 'Nomenclatura: Terminología Anatómica (TA) principal, clásica entre paréntesis',
  content:
    'MedCore usa la Terminología Anatómica (TA) internacional como término PRINCIPAL y la nomenclatura clásica del profesor (la de las diapositivas) entre paréntesis. En el examen la forma clásica cuenta como correcta, por eso siempre acompaña a la TA. Equivalencias frecuentes (TA → clásica): Maxilar → maxilar superior · Cigomático → malar (cigomático-malar) · Nasal → hueso propio de la nariz · Lagrimal → unguis · Foramen → agujero · Proceso → apófisis · Incisura → escotadura · Concha nasal → cornete. El error más caro es saber la estructura correcta con el nombre equivocado: por eso se estudian ambos.',
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
    categoria: 'Anatomía general',
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
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La variación es la norma',
            content: 'Las variaciones anatómicas son frecuentes y muchas no dan síntomas; por eso, antes de operar, se confirma la anatomía real del paciente (imagen, disección cuidadosa) en vez de asumir el patrón "de libro".',
          },
        ],
      },
      {
        id: 'gen-2',
        number: 2,
        title: 'Terminología anatómica y médica',
        keyTerms: ['Terminología Anatómica (TA)', 'Nomenclatura clásica', 'Epónimo', 'Foramen / Agujero', 'Proceso / Apófisis'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La Terminología Anatómica (TA) es el lenguaje internacional estandarizado que evita ambigüedad y epónimos. En esta asignatura conviven la nomenclatura clásica (la de las diapositivas y el examen) y la TA (la de Moore y los atlas).',
          },
          notaNomenclatura,
          {
            type: 'table',
            title: 'Equivalencias TA ↔ clásica de uso frecuente',
            data: {
              headers: ['Terminología Anatómica (TA)', 'Clásica (examen)'],
              rows: [
                ['Maxilar', 'Maxilar superior'],
                ['Cigomático', 'Malar / cigomático-malar'],
                ['Nasal', 'Hueso propio de la nariz'],
                ['Lagrimal', 'Unguis'],
                ['Foramen (magno, óptico, ciego…)', 'Agujero'],
                ['Proceso', 'Apófisis'],
                ['Incisura', 'Escotadura'],
                ['Concha nasal', 'Cornete'],
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
    subtitle: 'Los 8 huesos del neurocráneo: caras, bordes, accidentes, forámenes y puntos craneométricos',
    colorKey: 'osteologia',
    categoria: 'Osteología',
    emoji: '💀',
    keyPoints: [
      'El cráneo (neurocráneo) está formado por 8 huesos: 2 pares (parietales y temporales) y 4 impares (frontal, esfenoides, occipital y etmoides).',
      'El frontal presenta 3 caras (anterior, posterior, inferior) y 3 bordes; en su cara posterior están la incisura etmoidal (escotadura etmoidal) y el foramen ciego (agujero ciego).',
      'El etmoides es el hueso de las fosas nasales y la órbita: crista galli, lámina cribosa (forámenes cribosos / agujeros olfatorios) y masas laterales con las conchas nasales superior y media (cornetes).',
      'El esfenoides, en el centro de la base, aloja la silla turca (hipófisis) y sus alas mayores contienen el foramen redondo (agujero redondo mayor), el foramen oval y el foramen espinoso (agujero redondo menor).',
      'El foramen magno (agujero occipital, ≈35 × 30 mm) del occipital comunica el cráneo con el conducto vertebral; a sus lados están los cóndilos que articulan con el atlas.',
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
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Pterión y hematoma epidural',
            content: 'El pterión es el punto más delgado del cráneo y por debajo pasa la arteria meníngea media; un golpe ahí puede romperla y causar un hematoma epidural, una urgencia neuroquirúrgica.',
          },
        ],
      },
      {
        id: 'cra-2',
        number: 2,
        title: 'Hueso frontal',
        keyTerms: ['Glabela', 'Arcos supraciliares', 'Incisura etmoidal (escotadura)', 'Foramen ciego (agujero ciego)', 'Eminencias orbitarias', 'Seno frontal', 'Proceso cigomático del frontal (apófisis)', 'Bregma'],
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
                ['Cara posterior', 'Surco para el seno longitudinal; cresta frontal; foramen ciego (agujero ciego); incisura etmoidal (escotadura etmoidal); eminencias orbitarias; impresiones digitales.'],
                ['Cara inferior', 'Espina nasal del frontal; orificios de los senos frontales; conductos etmoidales anterior y posterior; fosas orbitarias; fosita lagrimal y troclear.'],
                ['Borde anterior', 'Incisura nasal (escotadura nasal); borde supraorbitario con incisura supraorbitaria (escotadura supraorbitaria); proceso orbitario medial (apófisis orbitaria); proceso cigomático del frontal (apófisis cigomática).'],
                ['Borde superior', 'Borde parietal (articula con los parietales por la sutura coronal).'],
                ['Borde posterior', 'Incisura etmoidal (escotadura etmoidal; aloja la lámina cribosa del etmoides).'],
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
        keyTerms: ['Crista galli', 'Lámina perpendicular', 'Lámina cribosa', 'Forámenes cribosos (agujeros olfatorios)', 'Masas laterales', 'Concha nasal superior (cornete)', 'Concha nasal media (cornete)', 'Celdillas etmoidales', 'Proceso unciforme (apófisis unciforme)'],
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
                ['Lámina vertical', 'Crista galli (arriba, inserción de la hoz del cerebro); lámina perpendicular (abajo, forma el tabique nasal óseo).'],
                ['Lámina horizontal — cara superior', 'Canal olfatorio; forámenes cribosos (agujeros olfatorios); lámina cribosa (deja pasar los filetes del nervio olfatorio).'],
                ['Lámina horizontal — cara inferior', 'Bóveda de las fosas nasales.'],
                ['Masas laterales — cara externa', 'Lámina orbitaria (pared medial de la órbita, "os planum").'],
                ['Masas laterales — cara interna', 'Conchas nasales superior y media (cornetes); meato nasal superior.'],
                ['Masas laterales', 'Celdillas etmoidales (anteriores, medias y posteriores); infundíbulo; proceso unciforme (apófisis unciforme); meato nasal medio.'],
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
        keyTerms: ['Cuerpo', 'Silla turca', 'Seno esfenoidal', 'Alas menores', 'Conducto óptico (agujero óptico)', 'Alas mayores', 'Fisura orbitaria superior', 'Foramen redondo (agujero redondo mayor)', 'Foramen oval (agujero oval)', 'Proceso pterigoides (apófisis pterigoides)'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso impar en forma de mariposa, ubicado en el centro de la base del cráneo. Consta de un cuerpo, dos alas menores, dos alas mayores y dos procesos pterigoides (apófisis pterigoides).',
          },
          {
            type: 'table',
            title: 'Partes del esfenoides',
            data: {
              headers: ['Parte', 'Accidentes principales'],
              rows: [
                ['Cuerpo — cara superior', 'Yugo esfenoidal; conducto óptico (canal óptico); tubérculo pituitario; SILLA TURCA (aloja la hipófisis); lámina cuadrilátera; procesos clinoides (apófisis clinoides).'],
                ['Cuerpo — cara anterior', 'Cresta anterior; apertura del seno esfenoidal; carillas etmoidales.'],
                ['Cuerpo — cara inferior', 'Cresta inferior; pico (rostrum); conducto esfenopalatino.'],
                ['Alas menores', 'Base perforada por el CONDUCTO ÓPTICO (agujero óptico); separan la fosa craneal anterior de la media.'],
                ['Alas mayores (borde interno)', 'Fisura orbitaria superior; foramen redondo (agujero redondo mayor); foramen oval (agujero oval); foramen espinoso (agujero redondo menor); língula; conducto pterigoideo.'],
                ['Proceso pterigoides (apófisis pterigoides)', 'Láminas lateral e interna (alas externa e interna); gancho pterigoideo (hámulo); fosa pterigoidea; fosita escafoidea; conducto pterigoideo en su base.'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Orden de los forámenes del ala mayor de anterior a posterior: fisura orbitaria superior → foramen redondo (agujero redondo mayor) → foramen oval (agujero oval) → foramen espinoso (agujero redondo menor). La silla turca del cuerpo es la referencia de la hipófisis.',
          },
        ],
      },
      {
        id: 'cra-5',
        number: 5,
        title: 'Hueso parietal',
        keyTerms: ['Eminencia parietal', 'Líneas temporales', 'Surco de la arteria meníngea media', 'Fositas granulares', 'Foramen parietal (agujero parietal)', 'Bregma', 'Lambda', 'Pterion', 'Asterion'],
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
                ['Borde superior', 'Sutura sagital; canal del seno longitudinal superior; foramen parietal (agujero parietal).'],
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
        keyTerms: ['Foramen magno (agujero occipital)', 'Porción basilar', 'Tubérculo faríngeo', 'Protuberancia occipital externa (inion)', 'Cóndilos occipitales', 'Protuberancia occipital interna', 'Foramen yugular (agujero yugular)', 'Lambda'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso impar de la parte posteroinferior del cráneo. Está perforado por el foramen magno (agujero occipital, ≈ 35 × 30 mm), que comunica la cavidad craneal con el conducto vertebral.',
          },
          {
            type: 'table',
            title: 'Caras del occipital',
            data: {
              headers: ['Cara / Borde', 'Accidentes'],
              rows: [
                ['Cara posteroinferior', 'Foramen magno (agujero occipital); porción basilar con tubérculo faríngeo; porción escamosa; protuberancia occipital externa (INION); cresta occipital externa; líneas curvas (nucales); cóndilos del occipital; conductos condíleos (agujeros condíleos).'],
                ['Cara anterosuperior', 'Canal basilar; protuberancia occipital interna; cresta occipital interna; surco del seno longitudinal superior; surco del seno lateral y sigmoides; fosas occipitales.'],
                ['Bordes', 'Superiores (parietales) → ángulo superior = LAMBDA. Inferiores (temporales): proceso yugular, incisura yugular, tubérculo y foramen yugular (agujero yugular).'],
                ['Ángulos', 'Superior: lambda · Inferior: articula con el cuerpo del esfenoides · Laterales: ASTERION (unión parietotemporal).'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Los cóndilos del occipital, a los lados del foramen magno (agujero occipital), articulan con las carillas superiores del atlas (articulación atlantooccipital) y permiten el movimiento de "sí" con la cabeza.',
          },
        ],
      },
      {
        id: 'cra-7',
        number: 7,
        title: 'Hueso temporal — pendiente',
        keyTerms: ['Temporal', 'Porción petrosa (peñasco)', 'Mastoides', 'Proceso estiloides (apófisis estiloides)', 'Proceso cigomático (apófisis cigomática)'],
        blocks: [
          {
            type: 'note',
            title: 'Pendiente — clase 4',
            content: 'El temporal es el 2.º hueso par del cráneo (junto con los parietales), pero la clase 2 NO lo desarrolló: detalla solo 5 de los 6 huesos distintos. Su estudio (escama, porción petrosa/peñasco, mastoides, porción timpánica, procesos estiloides y cigomático) llega en la clase 4. Se nombra aquí únicamente para completar el conteo de 8 huesos, no como tema impartido.',
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
            type: 'table',
            title: 'Puntos craneométricos (Moore, tabla 8.2)',
            data: {
              headers: ['Punto', 'Etimología', 'Forma y localización'],
              rows: [
                ['Pterión', 'gr. ala', 'Unión del ala mayor del esfenoides, la porción escamosa del temporal y los huesos frontal y parietal; sobre el trayecto de la división anterior de la arteria meníngea media.'],
                ['Lambda', 'gr. letra Λ', 'Unión de las suturas lambdoidea y sagital.'],
                ['Bregma', 'gr. parte anterior de la cabeza', 'Unión de las suturas coronal y sagital.'],
                ['Vértice (vértex)', 'lat. giro, espiral', 'Punto superior del neurocráneo, en la línea media, con el cráneo en el plano orbitomeatal de Frankfort.'],
                ['Asterión', 'gr. estrellado', 'Unión de tres suturas: parietomastoidea, occipitomastoidea y lambdoidea.'],
                ['Glabela', 'lat. liso, pelado', 'Prominencia lisa sobre los frontales, superior a la raíz de la nariz; parte más anterior de la frente.'],
                ['Inión', 'gr. parte posterior de la cabeza', 'Punto más sobresaliente de la protuberancia occipital externa.'],
                ['Nasión', 'lat. nariz', 'Punto donde se encuentran las suturas frontonasal e internasal.'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Discrepancia — asterión (diapositiva vs. Moore)',
            content: 'La diapositiva del occipital define el asterión como "unión parietotemporal"; Moore lo define como la confluencia de TRES suturas (parietomastoidea, occipitomastoidea y lambdoidea). Describen el mismo punto, pero la del profesor es más laxa. El valor clínico del pterión —por su relación con la arteria meníngea media y el hematoma epidural— no aparece en las diapositivas y sí en Moore: es aporte del libro.',
          },
        ],
      },
      {
        id: 'cra-9',
        number: 9,
        title: 'Forámenes de las fosas craneales',
        keyTerms: ['Foramen magno', 'Foramen oval', 'Foramen redondo', 'Foramen espinoso', 'Conducto óptico', 'Fisura orbitaria superior', 'Foramen yugular', 'Foramen rasgado'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Contenido de las aperturas de la base del cráneo, por fosa (Moore, tabla 8.1). Es contenido de alto valor de examen: qué estructura pasa por cada agujero.',
          },
          {
            type: 'table',
            title: 'Fosa craneal anterior',
            data: {
              headers: ['Foramen / abertura', 'Contenido'],
              rows: [
                ['Foramen ciego (agujero ciego)', 'Vena emisaria nasal (en ~1 % de la población).'],
                ['Forámenes cribosos de la lámina cribosa', 'Axones de las células olfatorias que forman los nervios olfatorios (NC I).'],
                ['Forámenes etmoidales anterior y posterior', 'Vasos y nervios del mismo nombre.'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Fosa craneal media',
            data: {
              headers: ['Foramen / abertura', 'Contenido'],
              rows: [
                ['Conducto óptico (agujero óptico)', 'Nervio óptico (NC II) y arteria oftálmica.'],
                ['Fisura orbitaria superior', 'Venas oftálmicas; nervio oftálmico (NC V₁); NC III, IV y VI; fibras simpáticas.'],
                ['Foramen redondo (agujero redondo mayor)', 'Nervio maxilar (NC V₂).'],
                ['Foramen oval (agujero oval)', 'Nervio mandibular (NC V₃) y arteria meníngea accesoria.'],
                ['Foramen espinoso (agujero redondo menor)', 'Arteria y vena meníngeas medias, y ramo meníngeo del NC V₃.'],
                ['Foramen rasgado', 'Nervio petroso profundo, algunas ramas de la arteria meníngea media y venas pequeñas.'],
                ['Surco o hiato del nervio petroso mayor', 'Nervio petroso mayor y rama petrosa de la arteria meníngea media.'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Fosa craneal posterior',
            data: {
              headers: ['Foramen / abertura', 'Contenido'],
              rows: [
                ['Foramen magno (agujero occipital)', 'Médula oblongada y meninges; arterias vertebrales; NC XI; venas de la duramadre; arterias espinales anterior y posteriores.'],
                ['Foramen yugular (agujero yugular)', 'NC IX, X y XI; bulbo superior de la vena yugular interna; senos petroso inferior y sigmoideo; ramas meníngeas de las arterias faríngea ascendente y occipital.'],
                ['Conducto del nervio hipogloso', 'Nervio hipogloso (NC XII).'],
                ['Conducto condíleo', 'Vena emisaria del seno sigmoideo hacia las venas vertebrales del cuello.'],
                ['Foramen mastoideo', 'Vena emisaria mastoidea del seno sigmoideo y rama meníngea de la arteria occipital.'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Foramen rasgado',
            content: 'La arteria carótida interna y sus plexos venoso y simpático atraviesan el área del foramen rasgado HORIZONTALMENTE, no verticalmente. El foramen existe como tal en el cráneo seco; en el individuo vivo está cerrado por cartílago.',
          },
          {
            type: 'table',
            title: 'Nomenclatura: clásica (diapositiva) ↔ internacional (Moore)',
            data: {
              headers: ['Clásica (examen)', 'Internacional (TA / Moore)'],
              rows: [
                ['Agujero Redondo Mayor', 'Foramen redondo'],
                ['Agujero Oval', 'Foramen oval'],
                ['Agujero Redondo Menor', 'Foramen espinoso'],
                ['Agujero Occipital', 'Foramen magno'],
                ['Agujero Óptico / Canal Óptico', 'Conducto óptico'],
                ['Fisura Orbitaria Superior', 'Fisura orbitaria superior (mismo término)'],
                ['Agujero Ciego', 'Foramen ciego'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Las dos filas más traicioneras: "Agujero Redondo Menor" NO es un "foramen redondo menor" sino el FORAMEN ESPINOSO; y el "Agujero Occipital" es el FORAMEN MAGNO. El nombre clásico y el internacional no se parecen.',
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
    title: 'Huesos de la Cara',
    subtitle: 'Viscerocráneo: relieves, cavidades y articulaciones',
    colorKey: 'osteologia',
    categoria: 'Osteología',
    emoji: '🦴',
    keyPoints: [
      'El macizo facial (viscerocráneo) está formado por huesos pares —maxilar (maxilar superior), cigomático (malar), nasal (hueso propio de la nariz), lagrimal (unguis), palatino y concha nasal inferior (cornete inferior)— e impares —vómer y mandíbula.',
      'El maxilar (maxilar superior) es la pieza central de la cara: forma el paladar, el suelo de la órbita y la pared de las fosas nasales; aloja el seno maxilar.',
      'El cigomático (malar) forma el pómulo y, con el proceso cigomático (apófisis cigomática) del temporal, el arco cigomático.',
      'El vómer forma la porción posteroinferior del tabique nasal y separa las coanas.',
      'El palatino, en forma de L, completa por detrás el paladar óseo (porción horizontal) y la pared lateral de la fosa nasal (porción vertical).',
      'El lagrimal (unguis) forma parte del canal lacrimonasal por el que discurre el conducto nasolagrimal.',
      'La clase 3 cubrió los huesos de la cara hasta el lagrimal; la mandíbula y el hueso hioides quedan pendientes (clases 4–5).',
    ],
    sections: [
      {
        id: 'cah-1',
        number: 1,
        title: 'Constitución del macizo facial',
        keyTerms: ['Viscerocráneo', 'Maxilar (maxilar superior)', 'Cigomático (malar)', 'Nasal (hueso propio de la nariz)', 'Lagrimal (unguis)', 'Palatino', 'Concha nasal inferior (cornete inferior)', 'Vómer', 'Mandíbula'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El esqueleto de la cara (viscerocráneo) se dispone bajo el neurocráneo y aloja el inicio de las vías respiratoria y digestiva y los órganos de los sentidos.',
          },
          {
            type: 'comparison',
            title: 'Huesos de la cara',
            left: { title: 'Pares (6)', items: ['Maxilar (maxilar superior)', 'Cigomático (malar)', 'Nasal (hueso propio de la nariz)', 'Lagrimal (unguis)', 'Palatino', 'Concha nasal inferior (cornete inferior)'] },
            right: { title: 'Impares (2)', items: ['Vómer', 'Mandíbula (maxilar inferior)'] },
          },
          notaNomenclatura,
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Sinusitis maxilar',
            content: 'El seno maxilar drena por un orificio ALTO en su pared medial, así que de pie drena mal; es el seno paranasal que más se infecta y el dolor aumenta al inclinar la cabeza.',
          },
        ],
      },
      {
        id: 'cah-2',
        number: 2,
        title: 'Maxilar (maxilar superior)',
        keyTerms: ['Proceso palatino (apófisis palatina)', 'Seno maxilar', 'Proceso frontal (apófisis frontal)', 'Eminencia canina', 'Canal infraorbitario', 'Foramen infraorbitario (orificio infraorbitario)', 'Proceso cigomático (apófisis cigomática)', 'Tuberosidad del maxilar'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso par, pieza central del macizo facial. Contribuye al paladar, al suelo de la órbita, a la pared de la fosa nasal y a la arcada dentaria superior. Aloja el seno maxilar. Se describe con 2 caras, 4 bordes y 4 ángulos.',
          },
          {
            type: 'table',
            title: 'Caras del maxilar',
            data: {
              headers: ['Cara / Borde', 'Accidentes'],
              rows: [
                ['Cara interna (nasal)', 'Proceso palatino (apófisis palatina); foramen palatino anterior (agujero palatino anterior); carilla para el palatino; orificio del seno maxilar; proceso frontal (apófisis frontal).'],
                ['Cara externa (yugal)', 'Fosita mirtiforme; eminencia canina; proceso cigomático (apófisis cigomática); canal y foramen infraorbitario (orificio infraorbitario); fosa cigomática; forámenes alveolares (agujeros dentarios posteriores); reborde infraorbitario; fisura orbitaria inferior.'],
                ['Borde anterior', 'Espina nasal anterior; incisura nasal (escotadura nasal); borde anterior del proceso frontal (apófisis frontal).'],
                ['Borde posterior', 'Tuberosidad del maxilar; carilla para el proceso pterigoides (apófisis pterigoides) y el palatino; conducto palatino mayor.'],
                ['Borde superior', 'Articular para el lagrimal (unguis), etmoides y palatino.'],
                ['Borde inferior', 'Cavidades alveolares superiores (arcada dentaria).'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Los dos procesos palatinos (apófisis palatinas) de ambos maxilares se unen en la línea media y forman los 2/3 anteriores del paladar óseo; el 1/3 posterior lo forman las láminas horizontales de los palatinos.',
          },
        ],
      },
      {
        id: 'cah-3',
        number: 3,
        title: 'Cigomático (malar) y arco cigomático',
        keyTerms: ['Cara externa', 'Cara interna', 'Proceso frontal (apófisis frontal)', 'Proceso temporal (apófisis temporal)', 'Fosa temporal', 'Arco cigomático', 'Reborde orbitario'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso par que forma el relieve del pómulo y la pared lateral e inferior de la órbita. Tiene cara externa e interna, cuatro bordes y varios ángulos con procesos (apófisis).',
          },
          {
            type: 'table',
            title: 'Accidentes del cigomático',
            data: {
              headers: ['Cara / Borde / Ángulo', 'Accidentes'],
              rows: [
                ['Cara externa', 'Superficie del pómulo (subcutánea).'],
                ['Cara interna', 'Mira a la fosa temporal y a la fosa infratemporal.'],
                ['Bordes', 'Anterosuperior: reborde orbitario, proceso orbitario (apófisis orbitaria) · Posterosuperior: fosa temporal · Antero/posteroinferior: articulan con el maxilar.'],
                ['Ángulos / procesos', 'Superior: proceso frontal (apófisis frontal; articula con el frontal) · Posterior: proceso temporal (apófisis temporal; forma el arco cigomático con el temporal).'],
              ],
            },
          },
          {
            type: 'note',
            content: 'El ARCO CIGOMÁTICO resulta de la unión del proceso temporal (apófisis temporal) del cigomático con el proceso cigomático (apófisis cigomática) del temporal. Es un reparo palpable y una fractura frecuente en traumatismos faciales.',
          },
        ],
      },
      {
        id: 'cah-4',
        number: 4,
        title: 'Nasal (hueso propio de la nariz) y lagrimal (unguis)',
        keyTerms: ['Nasal (hueso propio de la nariz)', 'Lagrimal (unguis)', 'Cresta lagrimal posterior', 'Canal lacrimonasal', 'Cartílagos laterales nasales'],
        blocks: [
          {
            type: 'definition',
            title: 'Nasal (hueso propio de la nariz)',
            description: 'Huesecillo par que forma el dorso óseo de la nariz. Cara anterior y posterior (fosas nasales); se articula por arriba con el frontal, por fuera con el maxilar, por dentro con su homónimo, frontal y etmoides, y por abajo con los cartílagos laterales nasales.',
          },
          {
            type: 'definition',
            title: 'Lagrimal (unguis)',
            description: 'Lámina delgada de la pared medial de la órbita. Su cara externa presenta la cresta lagrimal posterior y participa en el canal lacrimonasal; se articula con frontal, etmoides, maxilar y concha nasal inferior (cornete inferior).',
          },
          {
            type: 'note',
            content: 'El canal lacrimonasal (formado por lagrimal/unguis, maxilar y concha nasal inferior/cornete inferior) aloja el conducto nasolagrimal, que drena la lágrima hacia el meato inferior de la fosa nasal.',
          },
        ],
      },
      {
        id: 'cah-5',
        number: 5,
        title: 'Vómer y concha nasal inferior (cornete inferior)',
        keyTerms: ['Vómer', 'Tabique nasal', 'Coanas', 'Canal esfenovomeriano', 'Concha nasal inferior (cornete inferior)', 'Meato inferior'],
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
            title: 'Concha nasal inferior (cornete inferior)',
            description: 'Hueso par, independiente (no es parte del etmoides como las conchas nasales superior y media / cornetes). Su cara externa delimita el meato inferior; presenta procesos lagrimal, maxilar y etmoidal (apófisis), y extremidades anterior (maxilar) y posterior (palatino).',
          },
        ],
      },
      {
        id: 'cah-6',
        number: 6,
        title: 'Hueso palatino',
        keyTerms: ['Porción horizontal', 'Porción vertical', 'Espina nasal posterior', 'Foramen esfenopalatino (agujero esfenopalatino)', 'Surco palatino mayor', 'Proceso piramidal (apófisis piramidal)'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso par en forma de "L", profundo, entre el maxilar (delante) y el proceso pterigoides (apófisis pterigoides) del esfenoides (detrás). Tiene una porción horizontal y una porción vertical.',
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
                ['Vertical — borde superior', 'Incisura palatina (escotadura palatina); foramen esfenopalatino (agujero esfenopalatino); procesos orbitario y esfenoidal (apófisis).'],
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

  // ══════════════════════════════════════════════════════════════════════
  // 4. COLUMNA VERTEBRAL (clase 4)
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'columna-vertebral',
    title: 'Columna Vertebral',
    subtitle: 'Curvaturas, vértebra típica y caracteres de cada región: cervical, torácica (dorsal), lumbar, sacra y coccígea',
    colorKey: 'osteologia',
    categoria: 'Osteología',
    emoji: '🦴',
    keyPoints: [
      '24 vértebras presacras móviles: 7 cervicales, 12 torácicas (dorsales) y 5 lumbares, más el sacro y el cóccix.',
      'La columna representa ~2/5 de la altura total del cuerpo; el ángulo lumbosacro mide 130–160°.',
      'Curvaturas PRIMARIAS (torácica y sacra) están presentes desde la vida fetal; las SECUNDARIAS (cervical y lumbar) aparecen después del nacimiento.',
      'La cifosis acentúa las curvaturas primarias y la lordosis las secundarias (ambas anteroposteriores); la escoliosis es una desviación lateral.',
      'La vértebra típica tiene cuerpo, arco (2 pedículos + 2 láminas) y 7 procesos (apófisis): 2 transversos, 1 espinoso y 4 articulares.',
      'Los forámenes transversos (agujeros transversos) son exclusivos de las cervicales; el diente del axis (apófisis odontoides) es exclusivo del axis (C2).',
      'El foramen vertebral (agujero vertebral) es triangular en cervicales y lumbares, y circular en las torácicas.',
      'El sacro son 5 vértebras fusionadas; el cóccix, 4.',
    ],
    sections: [
      {
        id: 'col-1',
        number: 1,
        title: 'Generalidades y curvaturas',
        keyTerms: ['Vértebras presacras', 'Raquis', 'Ángulo lumbosacro', 'Curvatura primaria', 'Curvatura secundaria', 'Cifosis', 'Lordosis', 'Escoliosis'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La columna vertebral (raquis) está formada por 24 vértebras presacras móviles —7 cervicales, 12 torácicas (dorsales) y 5 lumbares—, más el sacro y el cóccix. Representa aproximadamente 2/5 de la altura total del cuerpo; el ángulo lumbosacro mide 130–160°.',
          },
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica entre paréntesis',
            content: 'MedCore usa la TA como término principal: vértebras torácicas (dorsales); diente del axis (apófisis odontoides); proceso espinoso, transverso y articular (apófisis); proceso costiforme/costal (apófisis transversa lumbar); foramen (agujero). En el examen la forma clásica cuenta como correcta, por eso acompaña siempre a la TA.',
          },
          {
            type: 'comparison',
            title: 'Curvaturas de la columna',
            left: { title: 'Primarias', items: ['Cóncavas hacia adelante (cifóticas).', 'Torácica (dorsal) y sacra.', 'Presentes desde la vida fetal.'] },
            right: { title: 'Secundarias', items: ['Cóncavas hacia atrás (lordóticas).', 'Cervical y lumbar.', 'Aparecen tras el nacimiento (sostener la cabeza, bipedestación).'] },
          },
          {
            type: 'table',
            title: 'Curvaturas patológicas',
            data: {
              headers: ['Desviación', 'Descripción'],
              rows: [
                ['Cifosis', 'Acentuación de las curvaturas primarias (anteroposterior).'],
                ['Lordosis', 'Acentuación de las curvaturas secundarias (anteroposterior).'],
                ['Escoliosis', 'Desviación lateral de la columna.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Punción lumbar segura',
            content: 'La punción lumbar se hace por DEBAJO de L2, donde ya no hay médula (solo cauda equina), para no lesionarla; la línea que une ambas crestas ilíacas (de Tuffier) orienta el nivel L4.',
          },
        ],
      },
      {
        id: 'col-2',
        number: 2,
        title: 'Vértebra típica',
        keyTerms: ['Cuerpo vertebral', 'Arco vertebral', 'Pedículos', 'Incisuras (escotaduras)', 'Láminas', 'Proceso espinoso (apófisis espinosa)', 'Procesos transversos (apófisis)', 'Procesos articulares (apófisis)', 'Foramen vertebral (agujero vertebral)', 'Foramen intervertebral (agujero intervertebral)'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Una vértebra típica consta de un cuerpo (anterior) y un arco vertebral (posterior). Entre ambos queda el foramen vertebral (agujero vertebral); la suma de los forámenes forma el conducto vertebral, que aloja la médula espinal.',
          },
          {
            type: 'table',
            title: 'Partes de la vértebra típica',
            data: {
              headers: ['Parte', 'Componentes'],
              rows: [
                ['Cuerpo', 'Porción anterior, cilíndrica; soporta el peso.'],
                ['Arco vertebral', '2 pedículos (con incisuras / escotaduras superior e inferior) + 2 láminas.'],
                ['Procesos (7) — apófisis', '2 transversos, 1 espinoso, 2 articulares superiores y 2 articulares inferiores.'],
                ['Aberturas', 'Foramen vertebral (agujero vertebral); foramen intervertebral (agujero intervertebral / de conjunción) entre las incisuras de dos vértebras contiguas, da paso al nervio espinal.'],
              ],
            },
          },
        ],
      },
      {
        id: 'col-3',
        number: 3,
        title: 'Vértebras cervicales',
        keyTerms: ['C3–C6 típicas', 'Foramen transverso (agujero transverso)', 'Proceso espinoso bífido (apófisis espinosa)', 'Proceso unciforme (uncus)', 'Atlas (C1)', 'Axis (C2)', 'Diente del axis (apófisis odontoides)', 'C7 prominente'],
        blocks: [
          {
            type: 'table',
            title: 'Cervical típica (C3–C6)',
            data: {
              headers: ['Rasgo', 'Característica'],
              rows: [
                ['Cuerpo', 'Pequeño y ancho (transversalmente).'],
                ['Foramen vertebral (agujero vertebral)', 'Grande y triangular.'],
                ['Proceso espinoso (apófisis espinosa)', 'Corto y bífido.'],
                ['Procesos transversos (apófisis)', 'Con foramen transverso (agujero transverso; paso de la arteria vertebral); tubérculos anterior y posterior.'],
                ['Otros', 'Procesos unciformes (uncus) en los bordes laterales del cuerpo.'],
              ],
            },
          },
          {
            type: 'comparison',
            title: 'Vértebras atípicas: atlas vs. axis',
            left: { title: 'Atlas (C1)', items: ['No tiene cuerpo ni proceso espinoso (apófisis espinosa).', 'Arco anterior (tubérculo anterior) y arco posterior (tubérculo posterior).', '2 masas laterales con carillas para el occipital y el axis.'] },
            right: { title: 'Axis (C2)', items: ['Presenta el diente del axis (apófisis odontoides), que representa el cuerpo del atlas.', 'Es el pivote sobre el que rota el atlas (gesto de "no").', 'Proceso espinoso (apófisis) robusto.'] },
          },
          {
            type: 'note',
            content: 'C7 (vértebra prominente) es de transición: su proceso espinoso (apófisis espinosa) es largo y NO bífido, palpable en la base del cuello.',
          },
        ],
      },
      {
        id: 'col-4',
        number: 4,
        title: 'Vértebras torácicas (dorsales)',
        keyTerms: ['D2–D8 típicas', 'Cuerpo reniforme', 'Carillas costales', 'Proceso espinoso oblicuo (apófisis espinosa)', 'D1', 'D11', 'D12 transición'],
        blocks: [
          {
            type: 'table',
            title: 'Torácica típica (D2–D8)',
            data: {
              headers: ['Rasgo', 'Característica'],
              rows: [
                ['Cuerpo', 'Reniforme; con carillas (semicarillas) costales para la cabeza de la costilla.'],
                ['Foramen vertebral (agujero vertebral)', 'Pequeño y circular.'],
                ['Proceso espinoso (apófisis espinosa)', 'Largo y muy oblicuo hacia abajo.'],
                ['Procesos transversos (apófisis)', 'Con carilla costal para el tubérculo de la costilla.'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Torácicas atípicas',
            data: {
              headers: ['Vértebra', 'Rasgo distintivo'],
              rows: [
                ['D1', 'Carilla costal superior completa; proceso espinoso (apófisis) casi horizontal (recto).'],
                ['D9', 'Solo semicarilla costal superior (medialuna superior).'],
                ['D10', 'Semicarilla costal superior (medialuna superior).'],
                ['D11', 'Carilla costal completa única; sin carillas costales en los procesos transversos (apófisis).'],
                ['D12 (transición)', 'Carilla completa única; proceso espinoso (apófisis) recto; tubérculos mamilar, accesorio y costal.'],
              ],
            },
          },
        ],
      },
      {
        id: 'col-5',
        number: 5,
        title: 'Vértebras lumbares',
        keyTerms: ['L1–L4 típicas', 'Cuerpo reniforme grande', 'Proceso espinoso cuadrilátero (apófisis espinosa)', 'Proceso costiforme (apófisis costiforme)', 'Tubérculo mamilar', 'Tubérculo accesorio', 'L5 transición'],
        blocks: [
          {
            type: 'table',
            title: 'Lumbar típica (L1–L4)',
            data: {
              headers: ['Rasgo', 'Característica'],
              rows: [
                ['Cuerpo', 'Grande y reniforme; soporta la mayor carga.'],
                ['Foramen vertebral (agujero vertebral)', 'Triangular.'],
                ['Proceso espinoso (apófisis espinosa)', 'Grueso, cuadrilátero y horizontal.'],
                ['Procesos transversos (apófisis)', 'Largos y delgados (procesos costiformes/costales); tubérculos accesorio y mamilar.'],
              ],
            },
          },
          {
            type: 'note',
            content: 'L5 (transición) tiene el cuerpo más grueso por delante que por detrás —contribuye al ángulo lumbosacro— y procesos transversos (apófisis) grandes y prominentes.',
          },
        ],
      },
      {
        id: 'col-6',
        number: 6,
        title: 'Sacro',
        keyTerms: ['5 vértebras fusionadas', 'Cara pélvica', 'Cara dorsal', 'Cresta sacra media', 'Forámenes sacros (agujeros sacros)', 'Promontorio', 'Hiato sacro', 'Astas del sacro', 'Conducto sacro'],
        blocks: [
          {
            type: 'paragraph',
            content: 'El sacro son 5 vértebras fusionadas, de forma triangular. Se describen 2 caras, una base, un vértice y 2 bordes laterales.',
          },
          {
            type: 'table',
            title: 'Elementos del sacro',
            data: {
              headers: ['Elemento', 'Detalle'],
              rows: [
                ['Cara anterior (pélvica)', 'Cóncava y lisa; 4 líneas transversales (fusión) y 4 pares de forámenes sacros anteriores (agujeros sacros).'],
                ['Cara posterior (dorsal)', 'Convexa y rugosa; crestas sacras media, intermedia y lateral; astas del sacro; 4 pares de forámenes sacros posteriores (agujeros sacros); hiato sacro.'],
                ['Bordes laterales', 'Superficie auricular (articula con el ilion) y tuberosidad sacra.'],
                ['Base', 'Promontorio; carilla articular lumbosacra; conducto sacro; aletas (alas) sacras; 2 procesos articulares superiores (apófisis).'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Contenido del conducto sacro',
            content: 'Conducto (saco) dural, cauda equina (raíces nerviosas lumbosacras) y filum terminale.',
          },
        ],
      },
      {
        id: 'col-7',
        number: 7,
        title: 'Cóccix',
        keyTerms: ['4 vértebras fusionadas', 'Astas del cóccix', 'Base', 'Vértice'],
        blocks: [
          {
            type: 'definition',
            title: 'Cóccix',
            description: 'Conjunto de 4 vértebras rudimentarias fusionadas (número variable). Presenta 2 caras, 2 bordes laterales, una base —que se articula con el vértice del sacro mediante las astas del cóccix— y un vértice.',
          },
        ],
      },
      {
        id: 'col-8',
        number: 8,
        title: 'Comparativa región por región',
        keyTerms: ['Cervical', 'Torácica (dorsal)', 'Lumbar', 'Sacra', 'Coccígea', 'Número de piezas'],
        blocks: [
          {
            type: 'table',
            title: 'Caracteres por región (el formato en que se pregunta)',
            data: {
              headers: ['Rasgo', 'Cervical', 'Torácica', 'Lumbar'],
              rows: [
                ['Nº de piezas', '7', '12', '5'],
                ['Cuerpo', 'Pequeño, ancho', 'Reniforme, con carillas costales', 'Grande, reniforme'],
                ['Foramen vertebral (agujero vertebral)', 'Grande, triangular', 'Pequeño, circular', 'Triangular'],
                ['Proceso espinoso (apófisis)', 'Corto, bífido', 'Largo, oblicuo', 'Grueso, cuadrilátero'],
                ['Procesos transversos (apófisis)', 'Con foramen transverso', 'Con carilla costal', 'Largos (costiformes)'],
                ['Rasgo exclusivo', 'Forámenes transversos; unciformes', 'Carillas costales', 'Tubérculos mamilar y accesorio'],
              ],
            },
          },
          {
            type: 'note',
            content: 'El sacro (5 vértebras) y el cóccix (4 vértebras) son huesos fusionados, no vértebras móviles. Esta tabla región-por-región es el formato en que casi siempre se pregunta la columna.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // TÓRAX ÓSEO — Semana 2 · Clase 1 (esternón y costillas)
  // Fuente: diapositivas del Dr. Soto Pacheco + Moore, cap. Tórax
  // (Esqueleto del tórax, libro 45–57 / PDF 69–81).
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'torax-oseo',
    title: 'Tórax óseo: esternón y costillas',
    subtitle: 'Caja torácica, esternón, costillas típicas y especiales',
    colorKey: 'osteologia',
    categoria: 'Osteología',
    emoji: '🫁',
    keyPoints: [
      'La caja torácica tiene dos aberturas: superior (opérculo) e inferior (limitada por el ángulo subcostal).',
      'Diámetro mayor de la caja: el lateral (32 cm) > posterior (27) > anterior (15).',
      'El esternón tiene tres partes: manubrio, cuerpo y proceso xifoides (apéndice xifoides).',
      'El manubrio recibe la 1.ª costilla; el cuerpo recibe de la 3.ª a la 6.ª.',
      'Verdaderas 1–7, falsas 8–12, flotantes 11–12 (el profesor clasifica las flotantes como subconjunto de las falsas).',
      'Tienen 1 sola carilla en la cabeza las costillas 1, 10, 11 y 12; las típicas (2–9) tienen dos.',
      'La 1.ª costilla lleva el tubérculo del escaleno anterior (escalénico), con el surco de la vena por delante y el de la arteria por detrás.',
      'Niveles del profesor: articulación manubrio-esternal en D3, xifo-esternal en D10.',
    ],
    sections: [
      {
        id: 'tor-1',
        number: 1,
        title: 'La caja torácica y sus dimensiones',
        keyTerms: ['caja torácica', 'abertura torácica superior', 'abertura torácica inferior', 'ángulo subcostal', 'ángulo infraesternal'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la Terminología Anatómica (TA) como término principal y el clásico del profesor entre paréntesis. En el examen, el término clásico cuenta como correcto. Equivalencias de esta clase: proceso xifoides = apéndice xifoides · incisura yugular = horquilla esternal · incisuras claviculares = escotaduras claviculares · surco costal = canal costal · serrato anterior = serrato mayor · tubérculo del escaleno anterior = tubérculo escalénico (de Lisfranc) · vértebras torácicas (T1–T12) = vértebras dorsales (D1–D12).',
          },
          {
            type: 'note',
            title: 'Discrepancia de niveles: profesor (D3/D10) vs. Moore (T4–T5)',
            content:
              'El profesor sitúa la articulación manubrio-esternal a nivel D3 y la xifo-esternal a nivel D10. La TA/Moore anclan el ángulo del esternón frente al disco T4–T5. El dato del profesor (D3/D10) es el evaluable; el de Moore es referencia. No es una errata sino una convención de nivel distinta.',
          },
          {
            type: 'paragraph',
            content: 'La caja torácica presenta dos aberturas: la superior (opérculo torácico) y la inferior. Tiene una superficie exterior y otra interior, cada una con cara anterior, cara posterior y caras laterales. La abertura torácica inferior está limitada por abajo por el ángulo subcostal (infraesternal).',
          },
          {
            type: 'table',
            title: 'Dimensiones de la caja torácica',
            data: {
              headers: ['Medida', 'Valor'],
              rows: [
                ['Cara posterior', '27 cm'],
                ['Cara anterior', '15 cm (la menor)'],
                ['Cara lateral', '32 cm (la mayor)'],
                ['Abertura superior — anteroposterior', '4–5 cm'],
                ['Abertura superior — transversal', '10–12 cm'],
                ['Abertura inferior — anteroposterior', '12 cm'],
                ['Abertura inferior — transversal', '26 cm'],
              ],
            },
          },
          {
            type: 'note',
            content: 'El diámetro mayor de la caja es el lateral (32 cm); el menor, el anterior (15 cm). La abertura inferior es mucho más ancha en sentido transversal (26 cm) que la superior (10–12 cm).',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Ángulo de Louis',
            content: 'El ángulo del esternón (de Louis) marca la 2.ª costilla: es la referencia para contar los espacios intercostales al auscultar y localizar focos cardíacos.',
          },
        ],
      },
      {
        id: 'tor-2',
        number: 2,
        title: 'El esternón',
        keyTerms: ['manubrio', 'cuerpo del esternón', 'proceso xifoides', 'incisura yugular', 'incisuras claviculares', 'fosita gástrica'],
        blocks: [
          {
            type: 'list',
            title: 'Las tres partes del esternón',
            items: [
              'Manubrio: lleva la incisura yugular (horquilla esternal) en el centro y las dos incisuras claviculares (escotaduras claviculares) a los lados. Recibe la 1.ª costilla.',
              'Cuerpo: parte alargada; recibe de la 3.ª a la 6.ª costilla.',
              'Proceso xifoides (apéndice xifoides): pequeño; en su cara anterior se marca la fosita gástrica.',
            ],
          },
          {
            type: 'table',
            title: 'Articulaciones del esternón (niveles del profesor)',
            data: {
              headers: ['Articulación', 'Costilla / referencia', 'Nivel vertebral'],
              rows: [
                ['Manubrio-esternal (ángulo del esternón)', '2.ª costilla', 'D3'],
                ['Xifo-esternal', '7.ª costilla', 'D10'],
              ],
            },
          },
          {
            type: 'note',
            content: 'La articulación manubrio-esternal marca el punto donde se articula la 2.ª costilla: es la referencia para empezar a contar costillas en la exploración. Moore la sitúa frente al disco T4–T5 (ver nota de niveles).',
          },
        ],
      },
      {
        id: 'tor-3',
        number: 3,
        title: 'Costillas: clasificación',
        keyTerms: ['costillas verdaderas', 'costillas falsas', 'costillas flotantes', 'oblicuidad', 'cartílago costal'],
        blocks: [
          {
            type: 'list',
            title: 'Generalidades',
            items: [
              'Son 12 pares.',
              'Oblicuidad (inclinación descendente): de la 1.ª a la 9.ª.',
              'Longitud: crece de la 1.ª a la 7.ª y luego decrece.',
            ],
          },
          {
            type: 'comparison',
            title: 'Verdaderas vs. falsas vs. flotantes',
            left: {
              title: 'Verdaderas (1.ª–7.ª)',
              items: [
                'Vertebroesternales.',
                'Su cartílago propio llega directo al esternón.',
              ],
            },
            right: {
              title: 'Falsas (8.ª–12.ª)',
              items: [
                'Vertebrocondrales: 8.ª–10.ª unen su cartílago al de la 7.ª.',
                'Falsas flotantes (11.ª y 12.ª): terminan libres, sin unión anterior.',
              ],
            },
          },
          {
            type: 'note',
            content: 'Matiz del profesor a seguir en el examen: las flotantes son un SUBCONJUNTO de las falsas (falsas = 8–12; flotantes = 11–12). Muchos textos dicen "falsas 8–10, flotantes 11–12"; aquí se usa la versión del profesor.',
          },
        ],
      },
      {
        id: 'tor-4',
        number: 4,
        title: 'Costilla tipo (3.ª a 9.ª)',
        keyTerms: ['cabeza', 'cresta interarticular', 'cuello', 'tubérculo costal', 'ángulo', 'surco costal'],
        blocks: [
          {
            type: 'definition',
            title: 'Cabeza',
            content: 'Extremo posterior con dos carillas articulares separadas por la cresta interarticular (articula con dos vértebras contiguas). — Cabeza de la costilla.',
          },
          {
            type: 'definition',
            title: 'Cuello y tubérculo',
            content: 'El cuello une la cabeza al cuerpo; en su unión con el cuerpo está la tuberosidad o tubérculo costal, que articula con la apófisis transversa de la vértebra. — Cuello y tubérculo.',
          },
          {
            type: 'definition',
            title: 'Cuerpo, ángulo y surco costal',
            content: 'El cuerpo es aplanado; presenta el ángulo (cambio de dirección) y, en su borde inferior interno, el surco costal (canal costal) que aloja el paquete vasculonervioso intercostal. — Cuerpo, ángulo y surco costal (canal costal).',
          },
        ],
      },
      {
        id: 'tor-5',
        number: 5,
        title: 'Costillas especiales (1.ª, 2.ª, 10.ª–12.ª)',
        keyTerms: ['1.ª costilla', 'tubérculo del escaleno anterior', 'surco de la arteria subclavia', 'surco de la vena subclavia', 'tuberosidad del serrato anterior'],
        blocks: [
          {
            type: 'list',
            title: 'Rasgos por costilla',
            items: [
              '1.ª costilla: la más pequeña, ancha y plana, de curvatura cerrada; 1 sola carilla articular en la cabeza. En su cara superior: surco de la vena subclavia, tubérculo del escaleno anterior (escalénico) y surco de la arteria subclavia.',
              '2.ª costilla: presenta la tuberosidad del serrato anterior (serrato mayor).',
              '10.ª, 11.ª y 12.ª: 1 sola carilla articular en la cabeza (como la 1.ª).',
            ],
          },
          {
            type: 'comparison',
            title: 'En la 1.ª costilla: vena vs. arteria subclavia',
            left: {
              title: 'Surco de la VENA subclavia',
              items: [
                'Por DELANTE (anterior) del tubérculo del escaleno anterior.',
                'La vena pasa por delante del músculo escaleno anterior.',
              ],
            },
            right: {
              title: 'Surco de la ARTERIA subclavia',
              items: [
                'Por DETRÁS (posterior) del tubérculo del escaleno anterior.',
                'La arteria pasa por detrás del músculo escaleno anterior.',
              ],
            },
          },
          {
            type: 'note',
            content: 'Orden anteroposterior en la 1.ª costilla: surco de la vena → tubérculo del escaleno anterior → surco de la arteria. El tubérculo escalénico separa ambos surcos.',
          },
        ],
      },
      {
        id: 'tor-6',
        number: 6,
        title: 'Reparto de carillas articulares en la cabeza',
        keyTerms: ['carilla articular', 'cresta interarticular'],
        blocks: [
          {
            type: 'table',
            title: 'Cuántas carillas tiene la cabeza de cada costilla',
            data: {
              headers: ['Costillas', 'Carillas en la cabeza'],
              rows: [
                ['1.ª, 10.ª, 11.ª y 12.ª', '1 sola carilla'],
                ['2.ª a 9.ª (típicas)', '2 carillas + cresta interarticular'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Las costillas con una sola carilla (1, 10, 11, 12) articulan con una única vértebra; las típicas, con dos vértebras contiguas a través de las dos carillas separadas por la cresta interarticular.',
          },
        ],
      },
      {
        id: 'tor-7',
        number: 7,
        title: 'Confusiones frecuentes de la clase',
        keyTerms: ['verdaderas', 'falsas', 'flotantes', 'carilla única', 'tubérculo escalénico'],
        blocks: [
          {
            type: 'keypoints',
            title: 'Los puntos que más se confunden (y más caen)',
            items: [
              'Verdaderas 1–7 · falsas 8–12 · flotantes 11–12 (versión del profesor: flotantes ⊂ falsas).',
              'Carilla única en la cabeza: 1, 10, 11 y 12. Dos carillas: las típicas (2–9).',
              'En la 1.ª costilla: surco de la VENA por delante y surco de la ARTERIA por detrás del tubérculo escalénico.',
              'Tubérculo del escaleno anterior → 1.ª costilla; tuberosidad del serrato anterior → 2.ª costilla.',
              'Manubrio recibe la 1.ª costilla; cuerpo recibe de la 3.ª a la 6.ª; la 2.ª marca la articulación manubrio-esternal.',
              'Dimensión mayor de la caja: lateral (32). Abertura inferior transversal (26) ≫ superior (10–12).',
              'Niveles del profesor: manubrio-esternal D3, xifo-esternal D10.',
              'Oblicuidad = 1.ª a 9.ª; longitud creciente = 1.ª a 7.ª. No confundir los dos rangos.',
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // MIEMBRO SUPERIOR ÓSEO — Semana 2 · Clase 2
  // Fuente: diapositivas del Dr. Soto Pacheco + Moore, cap. Miembro superior
  // (Huesos del miembro superior, libro 398–408 / PDF 422–432).
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'miembro-superior-oseo',
    title: 'Miembro superior óseo: cintura escapular, brazo, antebrazo y mano',
    subtitle: 'Clavícula, escápula, húmero, radio, cúbito y huesos de la mano',
    colorKey: 'osteologia',
    categoria: 'Osteología',
    emoji: '🦾',
    keyPoints: [
      'En posición anatómica el radio es lateral (del lado del pulgar) y el cúbito (ulna) es medial.',
      'La cabeza del radio es proximal; la cabeza del cúbito es distal: extremos opuestos.',
      'El cuello quirúrgico del húmero es el que se fractura con frecuencia (no el anatómico).',
      'Epicóndilo medial = epitróclea; epicóndilo lateral = "epicóndilo" del profesor.',
      'Tubérculo mayor = troquíter, tubérculo menor = troquín; entre ellos, la corredera bicipital.',
      'El carpo son 8 huesos en 2 filas de 4; el escafoides es el que más se fractura.',
      'Los metacarpianos se numeran de lateral a medial (I = pulgar); el pulgar tiene 2 falanges.',
      'El olécranon es del cúbito (proximal); el proceso estiloides existe en radio Y cúbito (ambos distales).',
    ],
    sections: [
      {
        id: 'mso-1',
        number: 1,
        title: 'Divisiones del miembro superior',
        keyTerms: ['cintura escapular', 'brazo', 'antebrazo', 'mano'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la Terminología Anatómica (TA) como principal y el clásico del profesor entre paréntesis; en el examen el clásico cuenta como correcto. Mapeo de esta clase: tubérculo mayor = troquíter · tubérculo menor = troquín · surco intertubercular = corredera bicipital · epicóndilo medial = epitróclea · proceso coracoides = apófisis coracoides · incisura troclear/radial = escotadura troclear/radial · ulna = cúbito · proceso estiloides = apófisis estiloides · surco del nervio radial = canal del n. radial.',
          },
          {
            type: 'list',
            title: 'El miembro superior se divide en',
            items: [
              'Cintura escapular (clavícula y escápula): fija el miembro al tronco.',
              'Brazo: húmero.',
              'Antebrazo: radio (lateral) y cúbito/ulna (medial).',
              'Mano: carpo (8), metacarpo (5) y falanges (14).',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Cuello quirúrgico y nervio axilar',
            content: 'El cuello quirúrgico del húmero se fractura con frecuencia y pone en riesgo el nervio axilar, con pérdida de la abducción del hombro y de la sensibilidad sobre el deltoides.',
          },
        ],
      },
      {
        id: 'mso-2',
        number: 2,
        title: 'Clavícula',
        keyTerms: ['extremo acromial', 'extremo esternal', 'tubérculo conoideo', 'línea trapezoide', 'impresión del ligamento costoclavicular'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso largo atípico: tiene 1 diáfisis y 2 epífisis, pero carece de cavidad medular clásica. Se palpa en todo su trayecto y es el hueso que más se fractura del cuerpo.',
          },
          {
            type: 'table',
            title: 'Accidentes de la clavícula',
            data: {
              headers: ['Región', 'Accidente'],
              rows: [
                ['Extremo lateral (acromial)', 'Se articula con el acromion; en su cara inferior, tubérculo conoideo y línea trapezoide'],
                ['Extremo medial (esternal)', 'Se articula con el manubrio; impresión del ligamento costoclavicular'],
                ['Cara inferior (cuerpo)', 'Surco del músculo subclavio (surco subclavio)'],
              ],
            },
          },
        ],
      },
      {
        id: 'mso-3',
        number: 3,
        title: 'Escápula',
        keyTerms: ['fosa subescapular', 'espina', 'acromion', 'fosa supraespinosa', 'fosa infraespinosa', 'proceso coracoides', 'cavidad glenoidea'],
        blocks: [
          {
            type: 'paragraph',
            content: 'Hueso plano triangular con 3 bordes y 3 ángulos, aplicado a la cara posterior del tórax.',
          },
          {
            type: 'comparison',
            title: 'Caras de la escápula',
            left: {
              title: 'Cara anterior (costal)',
              items: ['Fosa subescapular (ocupada por el músculo subescapular).'],
            },
            right: {
              title: 'Cara posterior (dorsal)',
              items: [
                'Espina de la escápula, que termina en el acromion.',
                'Fosa supraespinosa (por encima de la espina).',
                'Fosa infraespinosa (por debajo de la espina).',
                'Incisura espinoglenoidea (escotadura espinoglenoidea).',
              ],
            },
          },
          {
            type: 'list',
            title: 'Otros accidentes',
            items: [
              'Incisura escapular (escotadura coracoidea).',
              'Proceso coracoides (apófisis coracoides).',
              'Cavidad glenoidea (recibe la cabeza del húmero) y cuello.',
              'Tubérculos supraglenoideo e infraglenoideo.',
            ],
          },
        ],
      },
      {
        id: 'mso-4',
        number: 4,
        title: 'Húmero',
        keyTerms: ['cabeza', 'cuello anatómico', 'cuello quirúrgico', 'troquíter', 'troquín', 'corredera bicipital', 'tuberosidad deltoidea', 'surco del nervio radial', 'tróclea', 'epitróclea'],
        blocks: [
          {
            type: 'list',
            title: 'Epífisis superior (proximal)',
            items: [
              'Cabeza (articula con la cavidad glenoidea).',
              'Cuello anatómico y cuello quirúrgico.',
              'Tubérculo mayor (troquíter) y tubérculo menor (troquín), con sus crestas.',
              'Surco intertubercular (corredera bicipital), entre ambos tubérculos.',
            ],
          },
          {
            type: 'definition',
            title: 'Surco intertubercular (corredera bicipital)',
            content: 'Canal entre el troquíter y el troquín por donde discurre el tendón de la porción larga del bíceps braquial. — Surco intertubercular.',
          },
          {
            type: 'list',
            title: 'Diáfisis y epífisis inferior (distal)',
            items: [
              'Diáfisis: tuberosidad deltoidea; surco del nervio radial (canal del n. radial), posterior.',
              'Distal: tróclea y epicóndilo medial (epitróclea); cóndilo/capítulo y epicóndilo lateral.',
              'Crestas supracondíleas interna y externa.',
              'Fosa radial y fosa coronoidea (anteriores); fosa del olécranon (posterior).',
            ],
          },
          {
            type: 'comparison',
            title: 'Cuello anatómico vs. cuello quirúrgico',
            left: {
              title: 'Cuello anatómico',
              items: ['Justo por debajo de la cabeza, en el límite del cartílago articular.'],
            },
            right: {
              title: 'Cuello quirúrgico',
              items: ['Por debajo de los tubérculos; es el sitio que se fractura con frecuencia (relación con el nervio axilar).'],
            },
          },
        ],
      },
      {
        id: 'mso-5',
        number: 5,
        title: 'Radio (lado lateral, del pulgar)',
        keyTerms: ['cabeza del radio', 'cuello', 'tuberosidad radial', 'incisura ulnar', 'proceso estiloides', 'tubérculo dorsal'],
        blocks: [
          {
            type: 'list',
            title: 'De proximal a distal',
            items: [
              'Epífisis superior: cabeza del radio (proximal), cuello y tuberosidad radial (bicipital).',
              'Diáfisis: bordes interóseo, anterior y posterior; cresta del pronador.',
              'Epífisis inferior: incisura ulnar (escotadura cubital), proceso estiloides, tubérculo dorsal (de Lister) y superficie articular carpiana.',
            ],
          },
          {
            type: 'note',
            content: 'La cabeza del radio está en el extremo PROXIMAL (codo). Es el error más frecuente confundirla con la cabeza del cúbito, que es DISTAL (muñeca).',
          },
        ],
      },
      {
        id: 'mso-6',
        number: 6,
        title: 'Cúbito / ulna (lado medial)',
        keyTerms: ['olécranon', 'proceso coronoides', 'incisura troclear', 'incisura radial', 'cabeza del cúbito', 'proceso estiloides'],
        blocks: [
          {
            type: 'definition',
            title: 'Olécranon',
            content: 'Prominencia posterior de la epífisis proximal del cúbito; forma la punta del codo y se aloja en la fosa del olécranon del húmero en extensión. — Olécranon.',
          },
          {
            type: 'definition',
            title: 'Incisura troclear (escotadura troclear)',
            content: 'Concavidad entre el olécranon y el proceso coronoides que articula con la tróclea del húmero. — Incisura troclear.',
          },
          {
            type: 'list',
            title: 'De proximal a distal',
            items: [
              'Epífisis superior: olécranon, proceso coronoides (apófisis coronoides), incisura troclear e incisura radial (escotaduras), tuberosidad del cúbito.',
              'Diáfisis: borde interóseo; cresta del supinador.',
              'Epífisis inferior: cabeza del cúbito (distal), proceso estiloides y circunferencia articular.',
            ],
          },
          {
            type: 'comparison',
            title: 'Incisuras recíprocas (se confunden por el nombre cruzado)',
            left: {
              title: 'Incisura radial DEL CÚBITO',
              items: ['En el cúbito; recibe la cabeza del radio.'],
            },
            right: {
              title: 'Incisura ulnar DEL RADIO',
              items: ['En el radio (distal); recibe la cabeza del cúbito.'],
            },
          },
        ],
      },
      {
        id: 'mso-7',
        number: 7,
        title: 'Huesos de la mano',
        keyTerms: ['carpo', 'escafoides', 'semilunar', 'piramidal', 'pisiforme', 'trapecio', 'trapezoide', 'hueso grande', 'ganchoso', 'metacarpo', 'falanges'],
        blocks: [
          {
            type: 'comparison',
            title: 'Carpo: 8 huesos en 2 filas (lateral → medial)',
            left: {
              title: 'Fila proximal',
              items: ['Escafoides (con tubérculo)', 'Semilunar', 'Piramidal', 'Pisiforme'],
            },
            right: {
              title: 'Fila distal',
              items: ['Trapecio (con tubérculo)', 'Trapezoide', 'Hueso grande (capitate)', 'Ganchoso (apófisis unciforme)'],
            },
          },
          {
            type: 'list',
            title: 'Metacarpo y falanges',
            items: [
              'Metacarpo: 5 huesos numerados de lateral a medial (I = pulgar); cada uno con base, cuerpo y cabeza.',
              'Falanges: proximal, media y distal (con tuberosidad ungueal). El pulgar solo tiene 2 falanges.',
              'Huesos sesamoideos (frecuentes en la articulación metacarpofalángica del pulgar).',
            ],
          },
          {
            type: 'note',
            content: 'El escafoides es el hueso del carpo que más se fractura (caída sobre la mano extendida); su fractura puede complicarse con necrosis por su irrigación.',
          },
        ],
      },
      {
        id: 'mso-8',
        number: 8,
        title: 'Confusiones frecuentes de la clase',
        keyTerms: ['troquíter', 'troquín', 'epitróclea', 'cabeza del radio', 'cabeza del cúbito', 'olécranon', 'escafoides'],
        blocks: [
          {
            type: 'keypoints',
            title: 'Los puntos que más se confunden (y más caen)',
            items: [
              'Troquíter (tubérculo MAYOR) vs troquín (tubérculo MENOR); entre ellos, la corredera bicipital.',
              'Epitróclea = epicóndilo MEDIAL; el "epicóndilo" del profesor = epicóndilo LATERAL. La trampa clásica.',
              'Cuello anatómico vs cuello quirúrgico del húmero: el quirúrgico se fractura.',
              'Fosa del olécranon (POSTERIOR) vs fosas coronoidea y radial (ANTERIORES).',
              'Cabeza del radio = PROXIMAL; cabeza del cúbito = DISTAL. Extremos opuestos.',
              'Olécranon = cúbito (proximal); proceso estiloides = en radio Y cúbito (ambos distales).',
              'Incisura ulnar del radio vs incisura radial del cúbito (recíprocas, nombre cruzado).',
              'Radio = lateral (pulgar); cúbito = medial.',
              'Carpo fila proximal (escafoides, semilunar, piramidal, pisiforme) vs distal (trapecio, trapezoide, hueso grande, ganchoso).',
              'Escafoides = el hueso del carpo que más se fractura.',
              'Metacarpianos numerados lateral → medial (I = pulgar), no al revés.',
              'Escápula: fosa supraespinosa vs infraespinosa; acromion vs proceso coracoides.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'hueso-coxal',
    title: 'Hueso coxal (hueso ilíaco): ilion, isquion, pubis y acetábulo',
    subtitle: 'Los tres huesos de la pelvis ósea y la cavidad acetabular',
    colorKey: 'osteologia',
    categoria: 'Osteología',
    emoji: '🦴',
    keyPoints: [
      'El hueso coxal (hueso ilíaco) es la fusión de tres huesos —ilion, isquion y pubis— que confluyen en el acetábulo.',
      'El ilion es la parte superior en forma de abanico; el isquion, la posteroinferior; el pubis, la anteromedial.',
      'La tuberosidad isquiática (del isquion) es el punto de apoyo del cuerpo al sentarse.',
      'La espina isquiática (espina ciática) separa la incisura isquiática mayor (arriba) de la menor (abajo).',
      'El acetábulo tiene una parte articular (superficie semilunar) y una no articular (fosa acetabular).',
      'El agujero obturado está limitado por el pubis y el isquion, no por el ilion.',
      'La línea arqueada (línea innominada) del ilion forma parte del estrecho superior de la pelvis.',
      'La cara glútea (fosa ilíaca externa) mira atrás y afuera; la fosa ilíaca interna, adelante y adentro.',
    ],
    sections: [
      {
        id: 'cox-1',
        number: 1,
        title: 'Generalidades',
        keyTerms: ['hueso coxal', 'ilion', 'isquion', 'pubis', 'acetábulo'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la Terminología Anatómica (TA) como principal y el clásico del profesor entre paréntesis; en el examen el clásico cuenta como correcto. Mapeo de esta clase: hueso coxal = hueso ilíaco · línea arqueada = línea innominada · incisura isquiática mayor/menor = escotadura ciática mayor/menor · espina isquiática = espina ciática · acetábulo = cavidad cotiloidea · labrum acetabular = rodete cotiloideo · cara glútea del ala del ilion = fosa ilíaca externa (glútea) · carilla auricular = superficie auricular · eminencia iliopúbica = eminencia iliopectínea · agujero obturado = agujero obturador · rama isquiopúbica = rama ascendente del isquion + rama descendente del pubis. La diapositiva del profesor ya es TA-first: "HUESO COXAL (Hueso ilíaco)".',
          },
          {
            type: 'list',
            title: 'El hueso coxal resulta de la fusión de tres huesos',
            items: [
              'Ilion (hueso ilíaco propiamente dicho): superior, aplanado y en forma de abanico.',
              'Isquion: posteroinferior; lleva la tuberosidad isquiática.',
              'Pubis: anteromedial; forma el límite anterior con sus dos ramas.',
              'Los tres confluyen y se osifican en el acetábulo (cavidad cotiloidea).',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Referencia obstétrica',
            content: 'La tuberosidad isquiática soporta el peso al sentarse; es además la referencia ósea para el bloqueo del nervio pudendo en obstetricia.',
          },
        ],
      },
      {
        id: 'cox-2',
        number: 2,
        title: 'Ilion — cuerpo y ala',
        keyTerms: ['línea arqueada', 'eminencia iliopúbica', 'cresta ilíaca', 'EIAS', 'EIPS', 'cara glútea', 'fosa ilíaca interna', 'carilla auricular'],
        blocks: [
          {
            type: 'list',
            title: 'Cuerpo del ilion',
            items: [
              'Línea arqueada (línea innominada): parte del estrecho superior de la pelvis.',
              'Eminencia iliopúbica (iliopectínea): unión del cuerpo del ilion con el pubis.',
              'Forma la parte superior del acetábulo.',
            ],
          },
          {
            type: 'definition',
            title: 'Línea arqueada (línea innominada)',
            content: 'Cresta roma en la cara interna del ilion que continúa con la cresta pectínea del pubis; forma parte del anillo del estrecho superior (límite pelvis mayor/menor). — Línea arqueada.',
          },
          {
            type: 'table',
            title: 'Ala del ilion: 3 bordes',
            data: {
              headers: ['Borde', 'Accidentes'],
              rows: [
                ['Superior', 'Cresta ilíaca (labio externo e interno, intersticio y tubérculo de la cresta); termina en EIAS (espina ilíaca anterosuperior) y EIPS (espina ilíaca posterosuperior)'],
                ['Anterior', 'EIAI (espina ilíaca anteroinferior) y eminencia iliopúbica'],
                ['Posterior', 'EIPI (espina ilíaca posteroinferior) e incisura isquiática mayor (escotadura ciática mayor)'],
                ['Medial', 'Línea arqueada (línea innominada)'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Ala del ilion: 3 caras',
            data: {
              headers: ['Cara', 'Accidentes'],
              rows: [
                ['Glútea (fosa ilíaca externa)', 'Líneas glúteas posterior, anterior e inferior (inserción de los glúteos)'],
                ['Fosa ilíaca interna', 'Superficie cóncava para el músculo ilíaco'],
                ['Sacropélvica', 'Carilla auricular (superficie auricular), tuberosidad ilíaca y surco preauricular'],
              ],
            },
          },
        ],
      },
      {
        id: 'cox-3',
        number: 3,
        title: 'Isquion',
        keyTerms: ['tuberosidad isquiática', 'espina isquiática', 'incisura isquiática mayor', 'incisura isquiática menor', 'rama isquiopúbica'],
        blocks: [
          {
            type: 'definition',
            title: 'Tuberosidad isquiática',
            content: 'Masa ósea gruesa posteroinferior del isquion; es el punto sobre el que descansa el peso del cuerpo al sentarse y da origen a los músculos isquiotibiales. — Tuberosidad isquiática.',
          },
          {
            type: 'list',
            title: 'Cuerpo del isquion',
            items: [
              'Extremidad superior e inferior; 3 caras (femoral, pélvica y posterior) y 3 bordes (externo, posterior y anterior).',
              'Accidentes: tuberosidad isquiática, incisura isquiática mayor, espina isquiática (espina ciática) e incisura isquiática menor.',
              'Rama ascendente (→ rama isquiopúbica): se une a la rama descendente del pubis; presenta borde superior e inferior, cara lateral y medial.',
            ],
          },
          {
            type: 'comparison',
            title: 'Incisura isquiática mayor vs. menor (separadas por la espina isquiática)',
            left: {
              title: 'Incisura isquiática mayor (escotadura ciática mayor)',
              items: ['Por ENCIMA de la espina isquiática.', 'La cierra el ligamento sacroespinoso → agujero ciático mayor.'],
            },
            right: {
              title: 'Incisura isquiática menor (escotadura ciática menor)',
              items: ['Por DEBAJO de la espina isquiática.', 'La cierra el ligamento sacrotuberoso → agujero ciático menor.'],
            },
          },
        ],
      },
      {
        id: 'cox-4',
        number: 4,
        title: 'Pubis',
        keyTerms: ['cuerpo del pubis', 'cresta del pubis', 'espina del pubis', 'rama superior', 'rama inferior', 'cresta pectínea', 'surco obturador'],
        blocks: [
          {
            type: 'list',
            title: 'Cuerpo del pubis',
            items: [
              '3 caras: sinfisiaria (para la sínfisis del pubis), femoral y pélvica.',
              'Cresta del pubis y espina del pubis (tubérculo del pubis) en el borde superior.',
            ],
          },
          {
            type: 'list',
            title: 'Ramas del pubis',
            items: [
              'Rama superior (horizontal): eminencia iliopúbica, cresta pectínea (línea pectínea), cresta obturatriz y surco obturador; 3 bordes (anterior, inferior, posterior) y 3 caras (pectínea, pélvica, obturatriz).',
              'Rama inferior (descendente): se une a la rama del isquion formando la rama isquiopúbica, que limita el agujero obturado por abajo.',
            ],
          },
        ],
      },
      {
        id: 'cox-5',
        number: 5,
        title: 'Acetábulo (cavidad cotiloidea)',
        keyTerms: ['acetábulo', 'superficie semilunar', 'fosa acetabular', 'labrum acetabular', 'incisura isquiopúbica'],
        blocks: [
          {
            type: 'definition',
            title: 'Acetábulo (cavidad cotiloidea)',
            content: 'Cavidad hemisférica en la cara lateral del hueso coxal, formada por la confluencia de ilion, isquion y pubis; recibe la cabeza del fémur. — Acetábulo.',
          },
          {
            type: 'note',
            title: 'Contribución de cada hueso al acetábulo — dato del profesor (cítese literal)',
            content:
              'El profesor anota la contribución de los tres huesos al acetábulo como "isquion +2/5 · pubis 2/5 · ilion −2/5" (diapositiva). Se registra la notación literal de la diapositiva; NO se "corrige" a una fracción limpia. En la mayoría de los textos la proporción se enuncia como isquion ≈ 2/5, ilion ≈ 2/5 y pubis ≈ 1/5, pero aquí se conserva el dato tal como lo dictó el profesor.',
          },
          {
            type: 'comparison',
            title: 'Superficie semilunar vs. fosa acetabular',
            left: {
              title: 'Superficie semilunar (articular)',
              items: ['Media luna periférica revestida de cartílago.', 'Es la parte que articula con la cabeza del fémur.'],
            },
            right: {
              title: 'Fosa acetabular (no articular)',
              items: ['Depresión central rugosa, sin cartílago.', 'Aloja grasa y el ligamento de la cabeza femoral.'],
            },
          },
          {
            type: 'list',
            title: 'Otros accidentes del acetábulo',
            items: [
              'Incisura isquiopúbica (escotadura isquiopúbica): abre el borde inferior del acetábulo.',
              'Labrum acetabular (rodete cotiloideo): anillo fibrocartilaginoso que profundiza la cavidad.',
            ],
          },
        ],
      },
      {
        id: 'cox-6',
        number: 6,
        title: 'Agujero obturado',
        keyTerms: ['agujero obturado', 'membrana obturatriz', 'pubis', 'isquion'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'El agujero obturado (agujero obturador) es la gran abertura ovalada del hueso coxal, limitada por el pubis y el isquion (a través de la rama isquiopúbica). En vida está cerrado casi por completo por la membrana obturatriz, que deja libre por arriba el conducto obturador (paso del paquete obturador). El ilion NO participa en su límite.',
          },
        ],
      },
      {
        id: 'cox-7',
        number: 7,
        title: 'Confusiones frecuentes de la clase',
        keyTerms: ['acetábulo', 'incisura isquiática', 'tuberosidad isquiática', 'línea arqueada', 'agujero obturado'],
        blocks: [
          {
            type: 'keypoints',
            title: 'Los puntos que más se confunden (y más caen)',
            items: [
              'Qué hueso aporta cada parte del acetábulo: ilion, isquion y pubis; proporción del profesor "isquion +2/5 · pubis 2/5 · ilion −2/5".',
              'Incisura isquiática MAYOR (arriba) vs MENOR (abajo), separadas por la espina isquiática (espina ciática).',
              'Tuberosidad isquiática = punto de apoyo al sentarse; pertenece al ISQUION, no al pubis.',
              'Landmarks de la cresta ilíaca: EIAS, EIPS (borde superior) vs EIAI, EIPI (bordes anterior y posterior). No confundir anterosuperior con anteroinferior.',
              'Superficie semilunar (ARTICULAR) vs fosa acetabular (NO articular, con grasa y ligamento).',
              'Cara glútea/externa vs fosa ilíaca interna vs cara sacropélvica (carilla auricular) del ala del ilion.',
              'Línea arqueada (línea innominada) = parte del estrecho superior de la pelvis.',
              'Agujero obturado limitado por pubis + isquion, NUNCA por el ilion.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'miembro-inferior-oseo',
    title: 'Miembro inferior óseo: fémur, tibia, peroné y pie',
    subtitle: 'Muslo, pierna y pie; el hueso coxal se estudia aparte',
    colorKey: 'osteologia',
    categoria: 'Osteología',
    emoji: '🦵',
    keyPoints: [
      'El miembro inferior libre son 3 segmentos óseos: fémur (muslo); tibia y peroné/fíbula (pierna); y los huesos del pie.',
      'El peroné (fíbula) es lateral; la tibia es medial y es la que SOPORTA el peso.',
      'El maléolo medial (interno) es de la TIBIA; el maléolo lateral (externo) es del peroné (fíbula).',
      'La fóvea de la cabeza del fémur (fosita para el ligamento redondo) aloja el ligamento de la cabeza femoral.',
      'La línea áspera es una cresta de la cara POSTERIOR de la diáfisis del fémur.',
      'No confundir la fosa intercondílea (del fémur) con la eminencia intercondílea (de la tibia).',
      'El tarso son 7 huesos, con 3 cuneiformes (cuñas); el talus (astrágalo) articula con la mortaja tibioperonea.',
      'El 5.º metatarsiano tiene una tuberosidad (apófisis estiloides); el hallux solo tiene 2 falanges.',
    ],
    sections: [
      {
        id: 'minf-1',
        number: 1,
        title: 'Divisiones del miembro inferior',
        keyTerms: ['cintura pélvica', 'muslo', 'pierna', 'pie'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la Terminología Anatómica (TA) como principal y el clásico del profesor entre paréntesis; en el examen el clásico cuenta como correcto. El profesor escribe "peroné" y "astrágalo": son justo los que usa el examen. Mapeo de esta clase: fíbula = peroné · talus = astrágalo · hueso navicular = escafoides (del pie) · maléolo medial = maléolo interno · maléolo lateral = maléolo externo · fóvea de la cabeza del fémur = fosita para el ligamento redondo · fosa trocantérea = fosita digital · incisura fibular = escotadura peroneal · tróclea peronea del calcáneo = apófisis peronea · cuneiforme medial/intermedio/lateral = 1.ª/2.ª/3.ª cuña.',
          },
          {
            type: 'list',
            title: 'El miembro inferior se divide en',
            items: [
              'Cintura pélvica (hueso coxal): estudiada en su propio Topic.',
              'Muslo: fémur.',
              'Pierna: tibia (medial) y peroné/fíbula (lateral).',
              'Pie: tarso (7 huesos), metatarso (5) y falanges (14).',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Fractura de cuello femoral',
            content: 'El cuello del fémur se fractura con frecuencia en el anciano; su irrigación retrógrada puede interrumpirse y causar necrosis avascular de la cabeza femoral.',
          },
        ],
      },
      {
        id: 'minf-2',
        number: 2,
        title: 'Fémur — epífisis superior (proximal)',
        keyTerms: ['cabeza', 'fóvea de la cabeza', 'cuello', 'línea intertrocantérea', 'trocánter mayor', 'cresta intertrocantérea', 'fosa trocantérea', 'trocánter menor'],
        blocks: [
          {
            type: 'definition',
            title: 'Fóvea de la cabeza del fémur (fosita para el ligamento redondo)',
            content: 'Pequeña depresión en la cabeza del fémur donde se inserta el ligamento de la cabeza femoral (ligamento redondo). — Fóvea de la cabeza del fémur.',
          },
          {
            type: 'list',
            title: 'Accidentes de la epífisis superior',
            items: [
              'Cabeza: fóvea de la cabeza (fosita para el ligamento redondo).',
              'Cuello: línea intertrocantérea (anterior) y tubérculo cervical.',
              'Trocánter mayor (2 caras, 3 bordes): cresta intertrocantérea (posterior), fosa trocantérea (fosita digital) y tubérculo cuadrado.',
              'Trocánter menor (posteromedial).',
            ],
          },
          {
            type: 'comparison',
            title: 'Línea intertrocantérea vs. cresta intertrocantérea',
            left: {
              title: 'Línea intertrocantérea',
              items: ['En la cara ANTERIOR del cuello.', 'Une los dos trocánteres por delante.'],
            },
            right: {
              title: 'Cresta intertrocantérea',
              items: ['En la cara POSTERIOR.', 'Une los dos trocánteres por detrás; lleva el tubérculo cuadrado.'],
            },
          },
        ],
      },
      {
        id: 'minf-3',
        number: 3,
        title: 'Fémur — diáfisis',
        keyTerms: ['línea áspera', 'labio interno', 'labio externo', 'tuberosidad glútea', 'línea pectínea', 'cresta supracondílea', 'cara poplítea'],
        blocks: [
          {
            type: 'definition',
            title: 'Línea áspera',
            content: 'Cresta rugosa vertical de la cara POSTERIOR de la diáfisis del fémur, con labio interno (medial) y externo (lateral); da inserción a numerosos músculos del muslo. — Línea áspera.',
          },
          {
            type: 'list',
            title: 'Accidentes de la diáfisis',
            items: [
              'Caras: anterior, lateral, medial y posterior; bordes lateral, medial y posterior.',
              'Línea áspera (labios interno y externo), en la cara posterior.',
              'Tuberosidad glútea, línea espiral y línea pectínea.',
              'Crestas supracondíleas externa e interna; tubérculo del 3.er aductor; cara poplítea.',
            ],
          },
        ],
      },
      {
        id: 'minf-4',
        number: 4,
        title: 'Fémur — epífisis inferior (distal)',
        keyTerms: ['cóndilo lateral', 'cóndilo medial', 'fosa intercondílea', 'tróclea femoral', 'epicóndilo medial', 'epicóndilo lateral', 'cresta intercondílea'],
        blocks: [
          {
            type: 'list',
            title: 'Accidentes de la epífisis inferior',
            items: [
              'Cóndilo lateral y cóndilo medial.',
              'Fosa intercondílea (entre ambos cóndilos, posterior).',
              'Tróclea femoral (superficie para la rótula, anterior).',
              'Epicóndilo medial y epicóndilo lateral.',
              'Cresta intercondílea.',
            ],
          },
        ],
      },
      {
        id: 'minf-5',
        number: 5,
        title: 'Tibia',
        keyTerms: ['cóndilo lateral', 'cóndilo medial', 'tuberosidad de la tibia', 'eminencia intercondílea', 'línea del sóleo', 'maléolo medial', 'incisura fibular'],
        blocks: [
          {
            type: 'table',
            title: 'Tibia — de proximal a distal',
            data: {
              headers: ['Región', 'Accidentes'],
              rows: [
                ['Epífisis superior', 'Cóndilo lateral y medial; tuberosidad de la tibia; zona intercondílea anterior y posterior; eminencia intercondílea con tubérculos intercondíleos medial y lateral; carilla articular para la cabeza del peroné.'],
                ['Diáfisis', 'Caras interna, externa y posterior; bordes anterior ("espinilla"), interno y externo; línea del sóleo; agujero nutricio.'],
                ['Epífisis inferior', 'Maléolo medial (interno), con 5 caras; surco maleolar; incisura fibular (escotadura peroneal); carilla articular inferior.'],
              ],
            },
          },
          {
            type: 'note',
            title: 'No confundir: fosa intercondílea vs. eminencia intercondílea',
            content: 'La fosa intercondílea es una DEPRESIÓN de la cara posterior del FÉMUR (entre sus cóndilos). La eminencia intercondílea (espinas tibiales) es un RELIEVE que sobresale en la meseta de la TIBIA. Fémur = hueco; tibia = pico.',
          },
        ],
      },
      {
        id: 'minf-6',
        number: 6,
        title: 'Peroné (fíbula)',
        keyTerms: ['cabeza', 'proceso estiloides', 'cresta interósea', 'maléolo lateral', 'fosa maleolar', 'talus'],
        blocks: [
          {
            type: 'list',
            title: 'Peroné (fíbula) — de proximal a distal',
            items: [
              'Epífisis superior: cabeza, cuello, superficie articular para la tibia y proceso estiloides (apófisis estiloides).',
              'Diáfisis: bordes anterior, medial y posterior; caras anterior, posterior y lateral; cresta interósea (cresta interna).',
              'Epífisis inferior: maléolo lateral (externo), carilla articular para el talus (astrágalo) y fosa maleolar.',
            ],
          },
          {
            type: 'comparison',
            title: 'Tibia vs. peroné (fíbula)',
            left: {
              title: 'Tibia (medial)',
              items: ['Hueso medial y grueso.', 'SOPORTA el peso del cuerpo.', 'Forma el maléolo medial (interno).', 'Se articula con el fémur (rodilla) y el talus.'],
            },
            right: {
              title: 'Peroné / fíbula (lateral)',
              items: ['Hueso lateral y delgado.', 'NO soporta peso (estabiliza el tobillo).', 'Forma el maléolo lateral (externo).', 'No participa en la rodilla.'],
            },
          },
          {
            type: 'comparison',
            title: 'Maléolo medial vs. lateral (la trampa clásica)',
            left: {
              title: 'Maléolo medial (interno)',
              items: ['Pertenece a la TIBIA.', 'Más anterior y más alto.'],
            },
            right: {
              title: 'Maléolo lateral (externo)',
              items: ['Pertenece al PERONÉ (fíbula).', 'Más posterior y desciende más (≈1 cm más distal).'],
            },
          },
        ],
      },
      {
        id: 'minf-7',
        number: 7,
        title: 'Huesos del tarso (7 huesos)',
        keyTerms: ['talus', 'calcáneo', 'navicular', 'cuboides', 'cuneiformes', 'sustentaculum tali', 'tróclea peronea'],
        blocks: [
          {
            type: 'table',
            title: 'Los 7 huesos del tarso',
            data: {
              headers: ['Fila / grupo', 'Huesos'],
              rows: [
                ['Posterior', 'Talus (astrágalo) y calcáneo.'],
                ['Intermedio', 'Navicular (escafoides del pie).'],
                ['Anterior', 'Cuboides y cuneiformes medial, intermedio y lateral (1.ª, 2.ª y 3.ª cuña).'],
              ],
            },
          },
          {
            type: 'definition',
            title: 'Sustentaculum tali',
            content: 'Repisa ósea de la cara medial del calcáneo que SOSTIENE al talus (astrágalo); por su cara inferior discurre el tendón del flexor largo del hallux. — Sustentaculum tali.',
          },
          {
            type: 'list',
            title: 'Talus (astrágalo)',
            items: [
              'Cuerpo: tróclea; carillas maleolares medial y lateral; apófisis lateral; apófisis posterior con surco del flexor largo del hallux y tubérculos medial y lateral; carillas calcáneas posterior y media.',
              'Cuello.',
              'Cabeza: carilla articular para el navicular (escafoides) y carilla calcánea anterior.',
            ],
          },
          {
            type: 'list',
            title: 'Calcáneo (talón)',
            items: [
              'Sustentaculum tali; carillas astragalinas posterior, media y anterior.',
              'Tuberosidad calcánea; tubérculos anterior, medial y lateral.',
              'Surco del flexor largo del hallux; tróclea peronea (apófisis peronea); superficie articular para el cuboides; seno del tarso.',
            ],
          },
          {
            type: 'list',
            title: 'Navicular, cuboides y cuneiformes',
            items: [
              'Navicular (escafoides): tuberosidad del navicular.',
              'Cuboides: tuberosidad, carilla calcánea y surco del m. peroneo largo.',
              'Cuneiformes: medial, intermedio y lateral (1.ª, 2.ª y 3.ª cuña).',
            ],
          },
        ],
      },
      {
        id: 'minf-8',
        number: 8,
        title: 'Metatarso y falanges',
        keyTerms: ['metatarsianos', 'tuberosidad del 5.º metatarsiano', 'falange proximal', 'falange media', 'falange distal', 'hallux'],
        blocks: [
          {
            type: 'list',
            title: 'Metatarso',
            items: [
              'Son 5 metatarsianos; cada uno con base, cuerpo y cabeza.',
              'El 5.º metatarsiano presenta una tuberosidad (apófisis estiloides) en su base.',
            ],
          },
          {
            type: 'list',
            title: 'Falanges',
            items: [
              'Proximal (5), media (4) y distal (5); las distales llevan tuberosidad ungueal.',
              'El hallux (dedo gordo) solo tiene falange proximal y distal (2 falanges).',
            ],
          },
          {
            type: 'note',
            content: 'Recuento: 5 metatarsianos y 14 falanges por pie. Faltan las falanges medias del hallux, por eso son 14 y no 15.',
          },
        ],
      },
    ],
  },
  {
    id: 'repaso-2p',
    title: 'Repaso 2º Parcial — osteología de los miembros y la pelvis',
    subtitle: 'Puntos que el profesor marcó como evaluables (30 preguntas)',
    colorKey: 'osteologia',
    categoria: 'Osteología',
    emoji: '📝',
    keyPoints: [
      'Articulación glenohumeral = cavidad glenoidea (de la escápula) + cabeza del húmero.',
      'El pisiforme es un hueso sesamoideo del carpo; la rótula (patela) es el sesamoideo más grande del cuerpo.',
      'El gancho pertenece al hueso ganchoso (hamate); la fractura más frecuente del carpo es la del escafoides.',
      'El cúbito NO se articula directamente con el carpo: se interpone un disco articular (fibrocartílago triangular).',
      'En posición anatómica: radio lateral (pulgar) y cúbito medial; la cabeza del radio es proximal y la del cúbito, distal.',
      'Maléolo medial (interno) = tibia; maléolo lateral (externo) = peroné (fíbula).',
      'El talón es el calcáneo; el hueso del pie que articula con la pierna (tobillo) es el astrágalo (talus).',
      'El fémur es el hueso más largo; el peso lo soportan el fémur y la tibia (el peroné casi no).',
    ],
    sections: [
      {
        id: 'rep-1',
        number: 1,
        title: 'Cómo usar este repaso',
        keyTerms: ['2º parcial', 'osteología', 'miembros', 'pelvis'],
        blocks: [
          {
            type: 'note',
            title: 'Repaso para el 2º parcial',
            content:
              'No es contenido nuevo; concentra lo que el profesor marcó como evaluable en su deck "REPASO SEGUNDO PARCIAL". Cada estructura se estudia a fondo en su Topic de origen. El examen tiene 30 preguntas sobre la osteología de los miembros y la pelvis.',
          },
          {
            type: 'list',
            title: 'Estudia a fondo en su Topic de origen',
            items: [
              'Cintura escapular, húmero, radio, cúbito y mano → «Miembro superior óseo».',
              'Hueso coxal (ilion, isquion, pubis y acetábulo) → «Hueso coxal».',
              'Fémur, tibia, peroné (fíbula) y huesos del pie → «Miembro inferior óseo».',
            ],
          },
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica entre paréntesis',
            content:
              'Se usa la Terminología Anatómica (TA) como principal y el clásico del profesor entre paréntesis; en el examen el clásico CUENTA como correcto. Este repaso es denso en nomenclatura clásica: troquíter, troquín, epitróclea, corredera bicipital, peroné, astrágalo y escafoides.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'El nombre es la respuesta',
            content: 'En osteología el nombre ES la respuesta del examen: dominar la TA con su equivalente clásico (troquíter, epitróclea, peroné, astrágalo) vale tanto como reconocer la estructura.',
          },
        ],
      },
      {
        id: 'rep-2',
        number: 2,
        title: 'Puntos evaluables por región',
        keyTerms: ['cintura escapular', 'húmero', 'radio', 'cúbito', 'carpo', 'miembro inferior', 'hueso coxal', 'pie'],
        blocks: [
          {
            type: 'table',
            title: 'Lo que marcó el profesor, por región',
            data: {
              headers: ['Región', 'Puntos clave'],
              rows: [
                ['Cintura escapular', 'Clavícula + escápula. Cara anterior: fosa subescapular. Cara posterior: espina, acromion, fosa supraespinosa e infraespinosa. Glenohumeral = cavidad glenoidea + cabeza del húmero.'],
                ['Húmero (proximal)', 'Cabeza, cuello anatómico, cuello quirúrgico (se fractura), tubérculo mayor (troquíter), tubérculo menor (troquín) y surco intertubercular (corredera bicipital).'],
                ['Húmero (distal)', 'Tróclea, capítulo (cóndilo), epicóndilo medial (epitróclea), epicóndilo lateral, fosa coronoidea, fosa radial y fosa del olécranon (posterior).'],
                ['Radio y cúbito', 'Radio lateral, cúbito medial; membrana interósea entre ambos. Cúbito proximal: olécranon, proceso coronoides, incisura troclear y radial (escotaduras). Cúbito distal: cabeza y proceso estiloides.'],
                ['Carpo', 'Fila proximal: escafoides, semilunar, piramidal y pisiforme (sesamoideo). Fila distal: trapecio, trapezoide, hueso grande y ganchoso (el gancho). Radiocarpiana: escafoides y semilunar.'],
                ['Mano', 'Metacarpianos: 5, del I al V de lateral a medial. Falanges: proximal, media y distal; el pulgar solo tiene 2.'],
                ['Miembro inferior', 'Fémur = hueso más largo. Soportan peso: fémur y tibia. Rótula (patela) = sesamoideo más grande. Tobillo (talocrural): tibia + peroné + astrágalo.'],
                ['Hueso coxal', 'Ilion + isquion + pubis → acetábulo. Tuberosidad isquiática (apoyo al sentarse); espina isquiática entre las dos incisuras isquiáticas (escotaduras ciáticas).'],
                ['Pie', 'Tarso = 7 huesos. Talón = calcáneo. Articula con la pierna = astrágalo (talus).'],
              ],
            },
          },
        ],
      },
      {
        id: 'rep-3',
        number: 3,
        title: 'Las trampas clásicas',
        keyTerms: ['troquíter', 'troquín', 'epitróclea', 'radio', 'cúbito', 'maléolo medial', 'maléolo lateral'],
        blocks: [
          {
            type: 'comparison',
            title: 'Troquíter vs. troquín (húmero)',
            left: { title: 'Troquíter', items: ['Es el tubérculo MAYOR del húmero.', 'Lateral.'] },
            right: { title: 'Troquín', items: ['Es el tubérculo MENOR del húmero.', 'Anterior; entre ambos corre la corredera bicipital (surco intertubercular).'] },
          },
          {
            type: 'comparison',
            title: 'Epitróclea vs. epicóndilo (húmero distal)',
            left: { title: 'Epitróclea', items: ['Es el epicóndilo MEDIAL.', 'Da origen a los flexores del antebrazo.'] },
            right: { title: 'Epicóndilo (a secas)', items: ['Es el epicóndilo LATERAL.', 'Da origen a los extensores.'] },
          },
          {
            type: 'comparison',
            title: 'Radio vs. cúbito (posición anatómica)',
            left: { title: 'Radio', items: ['Lateral (lado del pulgar).', 'Su cabeza es PROXIMAL (codo).'] },
            right: { title: 'Cúbito (ulna)', items: ['Medial.', 'Su cabeza es DISTAL (muñeca).'] },
          },
          {
            type: 'comparison',
            title: 'Maléolo medial vs. lateral (tobillo)',
            left: { title: 'Maléolo medial (interno)', items: ['Pertenece a la TIBIA.'] },
            right: { title: 'Maléolo lateral (externo)', items: ['Pertenece al PERONÉ (fíbula); desciende más.'] },
          },
        ],
      },
      {
        id: 'rep-4',
        number: 4,
        title: 'Datos que el profesor repite',
        keyTerms: ['glenohumeral', 'pisiforme', 'ganchoso', 'escafoides', 'disco articular', 'rótula', 'calcáneo', 'astrágalo'],
        blocks: [
          {
            type: 'keypoints',
            title: 'Los que más caen',
            items: [
              'Glenohumeral = cavidad glenoidea (escápula) + cabeza del húmero.',
              'Pisiforme = hueso sesamoideo del carpo; rótula (patela) = sesamoideo más grande del cuerpo.',
              'El gancho es del hueso ganchoso (hamate).',
              'Fractura más frecuente del carpo = escafoides.',
              'El cúbito NO toca el carpo: se interpone un disco articular (fibrocartílago triangular).',
              'Más medial de la fila proximal = pisiforme; más lateral = escafoides.',
              'Talón = calcáneo; articula con la pierna el astrágalo (talus).',
              'Maléolo medial = tibia; maléolo lateral = peroné (fíbula).',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'repaso-3p',
    title: 'Repaso 3er Parcial — artrología y miología',
    subtitle: 'Lo evaluable del módulo: articulaciones, tipos de músculo y músculos de cabeza, cuello y tronco',
    colorKey: 'artrologia',
    categoria: 'Artrología',
    emoji: '📝',
    keyPoints: [
      'Una articulación une hueso con hueso, cartílago o diente; se clasifica por movilidad en sinartrosis (inmóvil), anfiartrosis (semimóvil) y diartrosis (móvil).',
      'Una sinovial requiere cápsula, cavidad con líquido sinovial y cartílago articular. Tibioperonea distal = sindesmosis (membrana interósea).',
      'Glenohumeral y coxofemoral = esferoideas (multiaxiales); húmero-cubital e interfalángicas = trocleares/bisagra (uniaxiales).',
      'Ligamentos cruzados restringen el desplazamiento antero-posterior; los colaterales, el lateral.',
      'Tres tipos de músculo: esquelético (estriado voluntario), liso (involuntario visceral) y cardíaco (estriado involuntario).',
      'Tendón une músculo con hueso; ligamento une hueso con hueso; cartílago amortigua.',
      'ECM: orígenes esternón, clavícula y apófisis mastoides. Diafragma: principal inspirador, nervio frénico.',
      'Masticación V3 vs. mímica VII; suprahioideos con inervación mixta (V, VII, XII). Intercostales elevan/descienden costillas.',
    ],
    sections: [
      {
        id: 'rep3-1',
        number: 1,
        title: 'Cómo usar este repaso',
        keyTerms: ['3er parcial', 'artrología', 'miología'],
        blocks: [
          {
            type: 'note',
            title: 'Repaso para el 3er parcial (no es contenido nuevo)',
            content:
              'No es contenido nuevo: concentra lo que el profesor marcó como evaluable en el repaso de artrología y miología. Cada estructura se estudia a fondo en su Topic de origen. El clásico del profesor cuenta como correcto en el examen.',
          },
          {
            type: 'list',
            title: 'Estudia a fondo en su Topic de origen',
            items: [
              'Clasificación de articulaciones y sinovial → «Artrología: clasificación y articulación sinovial».',
              'Tipos de músculo y generalidades → «Miología: generalidades del músculo».',
              'Masticación (V3) y mímica (VII) → «Músculos de la masticación» y «Músculos de la mímica».',
              'Cuello, nuca e hioideos → «Músculos del cuello y la nuca». Diafragma e intercostales → «Diafragma toracoabdominal».',
            ],
          },
        ],
      },
      {
        id: 'rep3-2',
        number: 2,
        title: 'Artrología: lo de alto rendimiento',
        keyTerms: ['sinovial', 'sindesmosis', 'esferoidea', 'troclear', 'ligamentos cruzados'],
        blocks: [
          {
            type: 'table',
            title: 'Articulaciones que más caen',
            data: {
              headers: ['Concepto', 'Clave'],
              rows: [
                ['Definición', 'Une hueso con hueso, cartílago o diente.'],
                ['Clasificación funcional', 'Sinartrosis (inmóvil) · anfiartrosis (semimóvil) · diartrosis (móvil).'],
                ['Requisitos de una sinovial', 'Cápsula articular + cavidad con líquido sinovial + cartílago articular.'],
                ['Tibioperonea distal', 'Sindesmosis (fibrosa), unida por la membrana interósea.'],
                ['Esferoideas (multiaxiales)', 'Glenohumeral (hombro) y coxofemoral (cadera).'],
                ['Trocleares/bisagra (uniaxiales)', 'Húmero-cubital (codo) e interfalángicas: flexión-extensión, eje transversal.'],
                ['Ligamentos de la rodilla', 'Cruzados → limitan el desplazamiento antero-posterior; colaterales → el lateral.'],
              ],
            },
          },
        ],
      },
      {
        id: 'rep3-3',
        number: 3,
        title: 'Miología: lo de alto rendimiento',
        keyTerms: ['esquelético', 'liso', 'cardíaco', 'tendón', 'ligamento', 'ECM', 'diafragma'],
        blocks: [
          {
            type: 'table',
            title: 'Músculos y estructuras que más caen',
            data: {
              headers: ['Concepto', 'Clave'],
              rows: [
                ['Tipos de músculo', 'Esquelético (estriado voluntario) · liso (involuntario visceral) · cardíaco (estriado involuntario).'],
                ['Tendón vs. ligamento vs. cartílago', 'Tendón: músculo-hueso · ligamento: hueso-hueso · cartílago: amortigua.'],
                ['ECM', 'Orígenes: esternón, clavícula y apófisis mastoides del temporal.'],
                ['Diafragma', 'Principal inspirador; nervio frénico (C3-4-5); "dolor de caballo".'],
                ['Recto anterior del abdomen', 'Poligástrico ("cuadritos"/lavadero). Masetero = el más fuerte (~90 kg).'],
                ['Intercostales', 'Externos elevan (inspiración); internos descienden (espiración) las costillas.'],
                ['Inervación de la cara', 'Masticación V3 · mímica VII. Suprahioideos: inervación mixta (V, VII, XII).'],
                ['Triángulo suboccipital', 'Contenido: arteria vertebral, nervio suboccipital y plexo venoso suboccipital.'],
              ],
            },
          },
        ],
      },
      {
        id: 'rep3-4',
        number: 4,
        title: 'Las trampas clásicas',
        keyTerms: ['sindesmosis', 'esferoidea', 'troclear', 'V3', 'VII'],
        blocks: [
          {
            type: 'comparison',
            title: 'Esferoidea vs. troclear',
            left: { title: 'Esferoidea (multiaxial)', items: ['Glenohumeral y coxofemoral.', 'Se mueve en los tres ejes.'] },
            right: { title: 'Troclear/bisagra (uniaxial)', items: ['Húmero-cubital e interfalángicas.', 'Solo flexión-extensión, eje transversal.'] },
          },
          {
            type: 'comparison',
            title: 'Masticación vs. mímica',
            left: { title: 'Masticación → V3', items: ['Masetero, temporal, pterigoideos.', 'Masetero = el más fuerte.'] },
            right: { title: 'Mímica → VII', items: ['Orbiculares, buccinador, cigomáticos, risorio…', 'Buccinador es de la mímica, no masticatorio.'] },
          },
          {
            type: 'keypoints',
            title: 'Los que más se equivocan',
            items: [
              'Tibioperonea distal = sindesmosis (NO sínfisis ni sinovial).',
              'Sinovial: exige cápsula + cavidad con líquido sinovial + cartílago articular.',
              'Suprahioideos: inervación MIXTA (V, VII, XII), no un solo nervio.',
              'El diafragma lo inerva el FRÉNICO (C3-4-5), no los intercostales.',
              'ECM: se inserta en la MASTOIDES; sus orígenes son esternón y clavícula.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'artrologia-generalidades',
    title: 'Artrología: clasificación y articulación sinovial',
    subtitle: 'Tipos de articulaciones por material y por forma; composición de la sinovial',
    colorKey: 'artrologia',
    categoria: 'Artrología',
    emoji: '🔗',
    keyPoints: [
      'Las articulaciones se clasifican por el material que une los huesos: sinoviales (móviles), cartilaginosas (semimóviles) y fibrosas (inmóviles).',
      'Sinovial = diartrosis; cartilaginosa = anfiartrosis; fibrosa = sinartrosis (nombres clásicos).',
      'La articulación sinovial tiene cartílago hialino, cápsula articular (fibrosa), ligamentos de sostén, membrana sinovial y líquido sinovial.',
      'Las sinoviales se subclasifican por forma y ejes: esferoidea (multiaxial), condílea y selar (biaxiales), plana, y las uniaxiales troclear y trocoide.',
      'Esferoidea (enartrosis) = hombro y cadera; selar (silla de montar) = trapeciometacarpiana del pulgar.',
      'La membrana sinovial produce el líquido sinovial, que nutre el cartílago y lubrica la articulación.',
      'El cartílago hialino recubre las superficies articulares; carece de vasos y nervios.',
    ],
    sections: [
      {
        id: 'art-1',
        number: 1,
        title: 'Clasificación de las articulaciones por su material',
        keyTerms: ['sinovial', 'diartrosis', 'cartilaginosa', 'anfiartrosis', 'fibrosa', 'sinartrosis'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la Terminología Anatómica (TA) como principal y el clásico del profesor entre paréntesis; en el examen el clásico cuenta como correcto. Mapeo de esta clase: articulación sinovial = diartrosis · articulación cartilaginosa = anfiartrosis · articulación fibrosa = sinartrosis · esferoidea = enartrosis · selar (en silla de montar) = encaje recíproco · plana = artrodia · troclear = gínglimo · trocoide = pivote.',
          },
          {
            type: 'comparison',
            title: 'Por el material que une los huesos (y su movilidad)',
            left: {
              title: 'Sinovial (diartrosis)',
              items: ['Cavidad articular con líquido sinovial.', 'MÓVIL (p. ej. hombro, cadera, rodilla).'],
            },
            right: {
              title: 'Cartilaginosa (anfiartrosis) · Fibrosa (sinartrosis)',
              items: ['Cartilaginosa: unida por cartílago; SEMIMÓVIL (discos intervertebrales, sínfisis del pubis).', 'Fibrosa: unida por tejido fibroso; INMÓVIL (suturas del cráneo, sindesmosis).'],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Por qué la artrosis no repara',
            content: 'El cartílago articular es avascular y sin nervios: se nutre del líquido sinovial. Por eso repara mal y su desgaste (artrosis) es en gran parte irreversible.',
          },
        ],
      },
      {
        id: 'art-2',
        number: 2,
        title: 'Composición de la articulación sinovial',
        keyTerms: ['cartílago hialino', 'cápsula articular', 'membrana sinovial', 'líquido sinovial', 'ligamentos'],
        blocks: [
          {
            type: 'list',
            title: 'Elementos de toda articulación sinovial',
            items: [
              'Superficies articulares lisas recubiertas de cartílago hialino (sin vasos ni nervios).',
              'Cápsula articular (fibrosa) que rodea la articulación.',
              'Ligamentos de sostén (refuerzan la cápsula).',
              'Membrana sinovial (tapiza el interior de la cápsula, salvo el cartílago).',
              'Líquido sinovial (lubrica y nutre el cartílago).',
            ],
          },
          {
            type: 'definition',
            title: 'Membrana sinovial',
            content: 'Capa que tapiza la cara interna de la cápsula articular (excepto el cartílago) y produce el líquido sinovial, que nutre el cartílago avascular y reduce la fricción. — Membrana sinovial.',
          },
        ],
      },
      {
        id: 'art-3',
        number: 3,
        title: 'Clasificación de las sinoviales por forma y ejes',
        keyTerms: ['esferoidea', 'condílea', 'selar', 'plana', 'troclear', 'trocoide'],
        blocks: [
          {
            type: 'table',
            title: 'Por número de ejes de movimiento',
            data: {
              headers: ['Ejes', 'Tipo (TA / clásico)', 'Ejemplo'],
              rows: [
                ['Multiaxial', 'Esferoidea (enartrosis)', 'Glenohumeral (hombro), coxofemoral (cadera)'],
                ['Biaxial', 'Condílea (elipsoidal)', 'Radiocarpiana (muñeca)'],
                ['Biaxial', 'Selar / en silla de montar (encaje recíproco)', 'Trapeciometacarpiana del pulgar'],
                ['Poliaxial (deslizamiento)', 'Plana (artrodia)', 'Tarsometatarsianas, cigapofisarias'],
                ['Uniaxial', 'Troclear (gínglimo, bisagra)', 'Húmero-cubital (codo)'],
                ['Uniaxial', 'Trocoide (pivote)', 'Radiocubital proximal, atlantoaxial'],
              ],
            },
          },
        ],
      },
      {
        id: 'art-4',
        number: 4,
        title: 'Confusiones frecuentes de la clase',
        keyTerms: ['diartrosis', 'anfiartrosis', 'sinartrosis', 'esferoidea', 'selar'],
        blocks: [
          {
            type: 'keypoints',
            title: 'Lo que más se confunde',
            items: [
              'Sinovial = diartrosis = MÓVIL; cartilaginosa = anfiartrosis = SEMIMÓVIL; fibrosa = sinartrosis = INMÓVIL.',
              'Esferoidea (enartrosis) = multiaxial (hombro, cadera). No confundir con condílea (biaxial) ni plana (artrodia).',
              'Selar (en silla de montar) = pulgar (trapeciometacarpiana): dos superficies cóncavo-convexas encajadas.',
              'El cartílago articular es hialino, avascular y sin nervios; se nutre del líquido sinovial.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'articulacion-temporomandibular',
    title: 'Articulación temporomandibular (ATM)',
    subtitle: 'Disco articular, ligamentos y músculos de los movimientos mandibulares',
    colorKey: 'artrologia',
    categoria: 'Artrología',
    emoji: '🦷',
    keyPoints: [
      'La ATM es una articulación sinovial con un disco articular que la divide en dos compartimentos.',
      'El disco articular tiene cara superior cóncavo-convexa y cara inferior cóncava; a él se inserta el pterigoideo lateral.',
      'Ligamentos: temporomandibular (lateral, el principal), esfenomandibular (esfenomaxilar) y estilomandibular (estilomaxilar).',
      'Descenso (apertura): pterigoideo lateral, digástrico, milohioideo, geniohioideo y la gravedad.',
      'Elevación (cierre): temporal, masetero y pterigoideo medial.',
      'Protrusión: pterigoideos medial y lateral y masetero; retracción: temporal.',
    ],
    sections: [
      {
        id: 'atm-1',
        number: 1,
        title: 'Generalidades y disco articular',
        keyTerms: ['sinovial', 'disco articular', 'cápsula articular', 'pterigoideo lateral'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la TA como principal y el clásico entre paréntesis (cuenta como correcto en el examen). En la ATM: ligamento esfenomandibular = esfenomaxilar · ligamento estilomandibular = estilomaxilar.',
          },
          {
            type: 'definition',
            title: 'Disco articular',
            content: 'Placa de fibrocartílago entre el hueso temporal y el cóndilo mandibular que divide la articulación en dos compartimentos (superior e inferior). Su cara superior es cóncavo-convexa y la inferior, cóncava; a su parte anterior se inserta el músculo pterigoideo lateral. — Disco articular.',
          },
          {
            type: 'list',
            title: 'Superficies y cápsula',
            items: [
              'Fosa mandibular y tubérculo articular del hueso temporal (arriba).',
              'Cabeza (cóndilo) de la mandíbula (abajo).',
              'Cápsula articular que rodea la articulación; membrana sinovial en cada compartimento.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Chasquido y bloqueo de la ATM',
            content: 'El disco de la ATM puede desplazarse hacia delante y producir un chasquido al abrir la boca y bloqueo mandibular: es el trastorno interno de la ATM, muy frecuente.',
          },
        ],
      },
      {
        id: 'atm-2',
        number: 2,
        title: 'Ligamentos de la ATM',
        keyTerms: ['ligamento temporomandibular', 'ligamento esfenomandibular', 'ligamento estilomandibular'],
        blocks: [
          {
            type: 'list',
            title: 'Los tres ligamentos',
            items: [
              'Ligamento temporomandibular (lateral): refuerza la cápsula por fuera; es el principal.',
              'Ligamento esfenomandibular (esfenomaxilar): del espinoso del esfenoides a la língula de la mandíbula; ligamento accesorio profundo.',
              'Ligamento estilomandibular (estilomaxilar): del proceso estiloides al ángulo de la mandíbula.',
            ],
          },
        ],
      },
      {
        id: 'atm-3',
        number: 3,
        title: 'Movimientos y músculos',
        keyTerms: ['descenso', 'elevación', 'protrusión', 'retracción'],
        blocks: [
          {
            type: 'table',
            title: 'Cada movimiento y sus músculos',
            data: {
              headers: ['Movimiento', 'Músculos'],
              rows: [
                ['Descenso (apertura)', 'Pterigoideo lateral, digástrico, milohioideo, geniohioideo y la gravedad.'],
                ['Elevación (cierre)', 'Temporal, masetero y pterigoideo medial.'],
                ['Protrusión (adelante)', 'Pterigoideos medial y lateral y masetero.'],
                ['Retracción (atrás)', 'Temporal (fibras posteriores).'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Trampa frecuente: el DESCENSO (abrir la boca) lo inicia el pterigoideo lateral (+ suprahioideos y gravedad); la ELEVACIÓN (cerrar) la hacen temporal, masetero y pterigoideo medial.',
          },
        ],
      },
    ],
  },
  {
    id: 'articulaciones-columna',
    title: 'Articulaciones de la columna vertebral',
    subtitle: 'Los seis grupos: cuerpos, arcos, craneovertebrales, costovertebrales y sacroilíaca',
    colorKey: 'artrologia',
    categoria: 'Artrología',
    emoji: '🦴',
    keyPoints: [
      'Entre los CUERPOS vertebrales: discos intervertebrales (cartilaginosas) + ligamento longitudinal anterior y posterior.',
      'Entre los ARCOS vertebrales: articulaciones cigapofisarias (sinoviales planas) + ligamentos flavos, supraespinoso, interespinosos, intertransversos y nucal.',
      'Los ligamentos flavos (amarillos) unen las láminas; el ligamento nucal (cervical posterior) es la continuación cervical del supraespinoso.',
      'La articulación atlantooccipital (occipitoatloidea) es sinovial condílea: permite el gesto de "sí".',
      'La articulación atlantoaxial (atlas–axis) es trocoide (pivote): permite el gesto de "no".',
      'Costovertebrales (vértebras–costillas) y sacroilíaca (sacro–hueso coxal) completan los seis grupos.',
    ],
    sections: [
      {
        id: 'acol-1',
        number: 1,
        title: 'Los seis grupos de articulaciones',
        keyTerms: ['cuerpos vertebrales', 'arcos vertebrales', 'atlantooccipital', 'atlantoaxial', 'costovertebrales', 'sacroilíaca'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la TA como principal y el clásico entre paréntesis (cuenta como correcto). Mapeo: ligamento longitudinal anterior/posterior = ligamento longitudinal común anterior/posterior · ligamentos flavos = ligamentos amarillos · ligamento nucal = ligamento cervical posterior · articulación atlantooccipital = occipitoatloidea.',
          },
          {
            type: 'list',
            title: 'La columna se articula en seis grupos',
            items: [
              'Entre los cuerpos vertebrales (discos intervertebrales).',
              'Entre los arcos vertebrales (articulaciones cigapofisarias).',
              'Atlantooccipital (occipitoatloidea): cráneo–atlas.',
              'Atlantoaxial: atlas–axis.',
              'Costovertebrales: vértebras–costillas.',
              'Sacroilíaca: sacro–hueso coxal.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Estenosis del conducto',
            content: 'Los ligamentos flavos (amarillos) pueden hipertrofiarse con la edad y estrechar el conducto vertebral (estenosis lumbar), comprimiendo las raíces de la cauda equina.',
          },
        ],
      },
      {
        id: 'acol-2',
        number: 2,
        title: 'Entre los cuerpos vertebrales',
        keyTerms: ['disco intervertebral', 'ligamento longitudinal anterior', 'ligamento longitudinal posterior'],
        blocks: [
          {
            type: 'list',
            title: 'Discos y ligamentos de los cuerpos',
            items: [
              'Discos intervertebrales (articulación cartilaginosa / anfiartrosis): anillo fibroso + núcleo pulposo.',
              'Ligamento longitudinal anterior (común anterior): por delante de los cuerpos; limita la extensión.',
              'Ligamento longitudinal posterior (común posterior): por detrás de los cuerpos, dentro del conducto; limita la flexión.',
            ],
          },
        ],
      },
      {
        id: 'acol-3',
        number: 3,
        title: 'Entre los arcos vertebrales',
        keyTerms: ['cigapofisarias', 'ligamentos flavos', 'supraespinoso', 'nucal', 'interespinosos', 'intertransversos'],
        blocks: [
          {
            type: 'table',
            title: 'Articulaciones y ligamentos de los arcos',
            data: {
              headers: ['Estructura', 'Descripción'],
              rows: [
                ['Articulaciones cigapofisarias', 'Sinoviales PLANAS (artrodias) entre los procesos articulares.'],
                ['Ligamentos flavos (amarillos)', 'Unen las láminas de vértebras contiguas; muy elásticos.'],
                ['Ligamento supraespinoso', 'Une los vértices de los procesos espinosos.'],
                ['Ligamento nucal (cervical posterior)', 'Continuación cervical del supraespinoso, hasta la protuberancia occipital externa.'],
                ['Ligamentos interespinosos', 'Entre procesos espinosos contiguos.'],
                ['Ligamentos intertransversos', 'Entre procesos transversos contiguos.'],
              ],
            },
          },
          {
            type: 'note',
            content: 'No confundir: los ligamentos longitudinales (anterior/posterior) unen los CUERPOS; los flavos, supraespinoso, interespinosos e intertransversos unen los ARCOS.',
          },
        ],
      },
      {
        id: 'acol-4',
        number: 4,
        title: 'Articulaciones craneovertebrales',
        keyTerms: ['atlantooccipital', 'atlantoaxial', 'membrana atlantooccipital', 'diente del axis'],
        blocks: [
          {
            type: 'comparison',
            title: 'Atlantooccipital vs. atlantoaxial',
            left: {
              title: 'Atlantooccipital (occipitoatloidea)',
              items: ['Sinovial CONDÍLEA (cóndilos del occipital + masas laterales del atlas).', 'Membranas atlantooccipital anterior y posterior.', 'Movimiento de "sí" (flexoextensión).'],
            },
            right: {
              title: 'Atlantoaxial (atlas–axis)',
              items: ['Trocoide (pivote): el atlas gira sobre el diente del axis.', 'Movimiento de "no" (rotación).'],
            },
          },
        ],
      },
      {
        id: 'acol-5',
        number: 5,
        title: 'Costovertebrales y sacroilíaca',
        keyTerms: ['costovertebrales', 'sacroilíaca'],
        blocks: [
          {
            type: 'list',
            title: 'Los dos grupos restantes',
            items: [
              'Costovertebrales: entre las costillas y las vértebras torácicas (cabeza de la costilla con los cuerpos; tubérculo con el proceso transverso).',
              'Sacroilíaca: entre el sacro y el hueso coxal (superficie auricular); sinovial reforzada por potentes ligamentos, con muy poca movilidad.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'articulaciones-miembro-superior',
    title: 'Articulaciones del miembro superior',
    subtitle: 'Esternoclavicular, hombro, codo, muñeca y mano',
    colorKey: 'artrologia',
    categoria: 'Artrología',
    emoji: '💪',
    keyPoints: [
      'Esternoclavicular: doble encaje recíproco (selar), con fibrocartílago interarticular y DOS cavidades sinoviales.',
      'Hombro: glenohumeral (esferoidea / enartrosis) + acromioclavicular.',
      'Codo: húmero-cubital (troclear) + húmero-radial + radiocubital proximal (trocoide).',
      'Radiocarpiana (muñeca): condílea; radio + escafoides, semilunar y piramidal.',
      'El complejo del fibrocartílago triangular (ligamento triangular) tiene la base en el radio y el vértice hacia el cúbito; separa el cúbito del carpo.',
      'La mano articula el carpo (mediocarpiana), las carpometacarpianas, intermetacarpianas, metacarpofalángicas e interfalángicas.',
    ],
    sections: [
      {
        id: 'amsup-1',
        number: 1,
        title: 'Esternoclavicular',
        keyTerms: ['esternoclavicular', 'encaje recíproco', 'fibrocartílago interarticular', 'costoclavicular'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la TA como principal y el clásico entre paréntesis (cuenta como correcto). Mapeo: articulación radiocarpiana = articulación de la muñeca · complejo del fibrocartílago triangular = ligamento triangular · selar = encaje recíproco.',
          },
          {
            type: 'list',
            title: 'Articulación esternoclavicular',
            items: [
              'Tipo: doble encaje recíproco (selar); única unión del miembro superior con el esqueleto axial.',
              'Superficies: manubrio del esternón, 1.er cartílago costal y extremo (cabeza) medial de la clavícula.',
              'Fibrocartílago interarticular que crea DOS cavidades sinoviales.',
              'Ligamentos: esternoclaviculares anterior, posterior y superior; interclavicular; costoclavicular.',
              'Movimientos: descenso/elevación, protracción/retracción y circunducción.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La articulación que más se luxa',
            content: 'El hombro (glenohumeral) es la articulación que más se luxa del cuerpo, casi siempre hacia delante (anteroinferior), por su gran movilidad y su cavidad glenoidea poco profunda.',
          },
        ],
      },
      {
        id: 'amsup-2',
        number: 2,
        title: 'Hombro',
        keyTerms: ['glenohumeral', 'esferoidea', 'acromioclavicular'],
        blocks: [
          {
            type: 'list',
            title: 'Articulaciones del hombro',
            items: [
              'Glenohumeral: sinovial esferoidea (enartrosis); cavidad glenoidea de la escápula + cabeza del húmero. La más móvil del cuerpo.',
              'Acromioclavicular: entre el acromion y el extremo lateral de la clavícula.',
            ],
          },
        ],
      },
      {
        id: 'amsup-3',
        number: 3,
        title: 'Codo',
        keyTerms: ['húmero-cubital', 'húmero-radial', 'radiocubital proximal', 'troclear'],
        blocks: [
          {
            type: 'list',
            title: 'El codo agrupa tres articulaciones',
            items: [
              'Húmero-cubital: tróclea del húmero + incisura troclear del cúbito; troclear (gínglimo, bisagra) → flexoextensión.',
              'Húmero-radial: capítulo del húmero + cabeza del radio.',
              'Radiocubital proximal: circunferencia de la cabeza del radio + incisura radial del cúbito; trocoide → pronosupinación.',
            ],
          },
        ],
      },
      {
        id: 'amsup-4',
        number: 4,
        title: 'Radiocarpiana (muñeca)',
        keyTerms: ['radiocarpiana', 'condílea', 'complejo del fibrocartílago triangular', 'escafoides', 'semilunar'],
        blocks: [
          {
            type: 'definition',
            title: 'Complejo del fibrocartílago triangular (ligamento triangular)',
            content: 'Disco fibrocartilaginoso con la BASE en el radio (incisura ulnar) y el VÉRTICE hacia el cúbito; se interpone entre la cabeza del cúbito y el carpo, de modo que el cúbito NO articula directamente con los huesos del carpo. — Complejo del fibrocartílago triangular.',
          },
          {
            type: 'list',
            title: 'Radiocarpiana',
            items: [
              'Tipo: condílea (elipsoidal); superficies: extremo distal del radio + escafoides, semilunar y piramidal.',
              'Ligamentos: radiocarpiano palmar, cubitocarpiano palmar, medial (colateral cubital), lateral (colateral radial) y radiocarpiano dorsal.',
              'Movimientos: flexión/extensión y abducción/aducción (desviación radial/cubital).',
            ],
          },
        ],
      },
      {
        id: 'amsup-5',
        number: 5,
        title: 'Articulaciones de la mano',
        keyTerms: ['mediocarpiana', 'carpometacarpianas', 'metacarpofalángicas', 'interfalángicas'],
        blocks: [
          {
            type: 'list',
            title: 'De proximal a distal',
            items: [
              'Del carpo: entre la 1.ª fila, la 2.ª fila y la articulación mediocarpiana (entre ambas filas).',
              'Carpometacarpianas: la del pulgar es selar (silla de montar); las de los otros 4 dedos, planas.',
              'Intermetacarpianas (entre las bases de los metacarpianos).',
              'Metacarpofalángicas (condíleas) e interfalángicas (trocleares).',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'articulaciones-miembro-inferior',
    title: 'Articulaciones del miembro inferior',
    subtitle: 'Cadera, rodilla, tibiofibulares, tobillo y pie',
    colorKey: 'artrologia',
    categoria: 'Artrología',
    emoji: '🦵',
    keyPoints: [
      'Coxofemoral (cadera): esferoidea (enartrosis); el labrum acetabular (rodete cotiloideo) profundiza el acetábulo.',
      'Ligamentos capsulares de la cadera: iliofemoral (el más fuerte, en Y invertida), pubofemoral e isquiofemoral, más la zona orbicular.',
      'El ligamento de la cabeza del fémur (redondo) lleva una arteria a la cabeza femoral (rama acetabular de la obturatriz).',
      'Rodilla: cóndilos femorales y tibiales, meniscos medial y lateral, ligamentos cruzados (anterior y posterior) y colaterales (tibial y peroneo), y la rótula.',
      'Tibiofibular proximal = plana (sinovial); tibiofibular distal = sindesmosis (fibrosa).',
      'Tobillo (talocrural): la mortaja tibioperonea recibe la tróclea del astrágalo (talus); troclear (bisagra).',
    ],
    sections: [
      {
        id: 'aminf-1',
        number: 1,
        title: 'Coxofemoral (cadera)',
        keyTerms: ['coxofemoral', 'esferoidea', 'labrum acetabular', 'iliofemoral', 'ligamento de la cabeza del fémur'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la TA como principal y el clásico entre paréntesis (cuenta como correcto). Mapeo: labrum acetabular = rodete cotiloideo · ligamento de la cabeza del fémur = ligamento redondo · esferoidea = enartrosis.',
          },
          {
            type: 'list',
            title: 'La articulación de la cadera',
            items: [
              'Tipo: sinovial esferoidea (enartrosis); acetábulo + cabeza del fémur.',
              'Labrum acetabular (rodete cotiloideo) y ligamento transverso del acetábulo: profundizan y completan la cavidad.',
              'Ligamentos capsulares: iliofemoral (el MÁS FUERTE, en Y invertida), pubofemoral e isquiofemoral (posterior); zona orbicular.',
              'Ligamento de la cabeza del fémur (redondo): lleva la arteria a la cabeza femoral. Bolsa serosa iliopectínea.',
            ],
          },
          {
            type: 'table',
            title: 'Irrigación e inervación de la cadera',
            data: {
              headers: ['Aspecto', 'Detalle'],
              rows: [
                ['Irrigación', 'A. obturatriz (rama acetabular, por el ligamento redondo); aa. circunflejas femorales lateral y medial (ramas retinaculares).'],
                ['Inervación', 'Nervios femoral, obturador, glúteo superior y del cuadrado femoral.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Ligamento redondo y necrosis',
            content: 'El ligamento de la cabeza del fémur (redondo) lleva una arteria a la cabeza sobre todo en el niño; una luxación o fractura de cadera puede comprometer la irrigación y causar necrosis avascular.',
          },
        ],
      },
      {
        id: 'aminf-2',
        number: 2,
        title: 'Rodilla',
        keyTerms: ['cóndilos', 'meniscos', 'ligamentos cruzados', 'ligamentos colaterales', 'rótula'],
        blocks: [
          {
            type: 'list',
            title: 'Elementos de la rodilla',
            items: [
              'Superficies: cóndilos del fémur + cóndilos (meseta) de la tibia; la rótula (patela) articula con la tróclea femoral.',
              'Meniscos medial y lateral: fibrocartílagos que amortiguan y congruencian.',
              'Ligamentos cruzados anterior y posterior (intraarticulares): estabilidad anteroposterior.',
              'Ligamentos colaterales tibial (medial) y peroneo (lateral): estabilidad lateral.',
            ],
          },
        ],
      },
      {
        id: 'aminf-3',
        number: 3,
        title: 'Articulaciones tibiofibulares',
        keyTerms: ['tibiofibular proximal', 'tibiofibular distal', 'sindesmosis', 'plana'],
        blocks: [
          {
            type: 'comparison',
            title: 'Tibiofibular proximal vs. distal',
            left: {
              title: 'Proximal',
              items: ['Sinovial PLANA (artrodia).', 'Cabeza del peroné + cóndilo lateral de la tibia.', 'Ligamentos anterior y posterior de la cabeza del peroné.'],
            },
            right: {
              title: 'Distal',
              items: ['SINDESMOSIS (fibrosa / fibrocartilaginosa), no sinovial.', 'Une los extremos distales de tibia y peroné; forma la mortaja del tobillo.'],
            },
          },
        ],
      },
      {
        id: 'aminf-4',
        number: 4,
        title: 'Tobillo (talocrural)',
        keyTerms: ['talocrural', 'mortaja tibioperonea', 'talus', 'troclear'],
        blocks: [
          {
            type: 'list',
            title: 'La articulación del tobillo',
            items: [
              'Tipo: troclear (bisagra) → flexión dorsal y plantar.',
              'La mortaja formada por la tibia (maléolo medial + carilla inferior) y el peroné (maléolo lateral) recibe la tróclea del astrágalo (talus).',
              'Ligamentos: medial (deltoideo, muy fuerte) y laterales (peroneoastragalinos anterior y posterior, peroneocalcáneo).',
            ],
          },
          {
            type: 'note',
            content: 'Recuerda: la tibiofibular DISTAL es una sindesmosis (fibrosa) que mantiene unida la mortaja; la PROXIMAL es una articulación plana sinovial. No las intercambies.',
          },
        ],
      },
      {
        id: 'aminf-5',
        number: 5,
        title: 'Articulaciones del pie',
        keyTerms: ['tarsometatarsianas', 'intermetatarsianas', 'metatarsofalángicas', 'interfalángicas'],
        blocks: [
          {
            type: 'table',
            title: 'Articulaciones del antepié',
            data: {
              headers: ['Articulación', 'Tipo y detalle'],
              rows: [
                ['Tarsometatarsianas', 'Planas (artrodias): la 1.ª forma una cavidad aislada; la 2.ª y 3.ª continúan con las intertarsianas; la 4.ª y 5.ª comparten cavidad. Ligamentos tarsometatarsianos dorsales, plantares e interóseos.'],
                ['Intermetatarsianas', 'Planas (artrodias) entre las bases de los metatarsianos (la 1.ª y 2.ª separadas). Ligamentos dorsales, plantares e interóseos.'],
                ['Metatarsofalángicas', 'Condíleas. Ligamentos colaterales y ligamento transverso profundo del metatarso (une las cabezas).'],
                ['Interfalángicas', 'Trocleares (bisagra). Ligamentos colaterales.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Los arcos del pie',
            content: 'Las articulaciones del pie sostienen los arcos longitudinal y transverso, que reparten el peso y amortiguan la marcha; su colapso (pie plano) altera el apoyo y sobrecarga rodillas y cadera.',
          },
        ],
      },
    ],
  },
  {
    id: 'miologia-generalidades',
    title: 'Generalidades del sistema muscular',
    subtitle: 'Propiedades, clasificación, envolturas, partes y nomenclatura del músculo',
    colorKey: 'miologia',
    categoria: 'Miología',
    emoji: '💪',
    keyPoints: [
      'El músculo se contrae y genera movimiento; sus propiedades son excitabilidad, contractilidad, extensibilidad y elasticidad.',
      'Del latín mus / musculus ("ratoncito", por el aspecto del vientre muscular al moverse).',
      'Tejido muscular: estriado (esquelético voluntario y cardíaco involuntario) y liso (involuntario, vísceras).',
      'Envolturas: endomisio rodea la fibra (miocito); perimisio, el fascículo; epimisio, el músculo entero.',
      'Origen = inserción fija; inserción = inserción móvil. El músculo tiene cabeza, vientre y tendón.',
      'La aponeurosis es una lámina tendinosa ancha; el músculo se inserta en hueso, piel, mucosa, aponeurosis o membrana sinovial.',
      'Se nombran por morfología (trapecio), origen/inserción (esternocleidomastoideo), localización, número de vientres (digástrico) o acción (elevador de la escápula).',
    ],
    sections: [
      {
        id: 'mio-1',
        number: 1,
        title: '¿Qué es un músculo? Propiedades',
        keyTerms: ['excitabilidad', 'contractilidad', 'extensibilidad', 'elasticidad'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la Terminología Anatómica (TA) como principal y el clásico del profesor entre paréntesis; en el examen el clásico cuenta como correcto. Mapeo de esta clase: pterigoideo medial/lateral = pterigoideo interno/externo · mandíbula = maxilar inferior · orbicular del ojo = orbicular de los párpados · corrugador superciliar = superciliar · occipitofrontal/epicráneo = cutáneo del cráneo · galea aponeurótica = aponeurosis epicraneal · elevador de la escápula = angular del omóplato · longísimo = dorsal largo · espinoso = epiespinoso.',
          },
          {
            type: 'definition',
            title: 'Músculo',
            content: 'Estructura con capacidad de contraerse y generar movimiento. Sus cuatro propiedades son: excitabilidad (responde a estímulos), contractilidad (se acorta), extensibilidad (se estira) y elasticidad (recupera su forma). — Músculo.',
          },
        ],
      },
      {
        id: 'mio-2',
        number: 2,
        title: 'Clasificación del tejido muscular',
        keyTerms: ['estriado', 'esquelético', 'cardíaco', 'liso'],
        blocks: [
          {
            type: 'comparison',
            title: 'Estriado vs. liso',
            left: {
              title: 'Estriado',
              items: ['Esquelético: VOLUNTARIO (extremidades, paredes).', 'Cardíaco: INVOLUNTARIO (corazón), con discos intercalares.'],
            },
            right: {
              title: 'Liso',
              items: ['INVOLUNTARIO.', 'En las vísceras y los vasos (sistema digestivo, urinario, etc.).'],
            },
          },
        ],
      },
      {
        id: 'mio-3',
        number: 3,
        title: 'Estructura y envolturas',
        keyTerms: ['miocito', 'endomisio', 'fascículo', 'perimisio', 'epimisio', 'aponeurosis'],
        blocks: [
          {
            type: 'definition',
            title: 'Endomisio · perimisio · epimisio',
            content: 'Tres envolturas de tejido conjuntivo, de dentro hacia fuera: el ENDOMISIO rodea cada fibra muscular (miocito); el PERIMISIO agrupa las fibras en fascículos (haces); el EPIMISIO envuelve el músculo entero. — Envolturas del músculo.',
          },
          {
            type: 'steps',
            title: 'De la fibra al músculo',
            steps: [
              'Fibra muscular (miocito) → rodeada por el endomisio.',
              'Fascículo o haz muscular (grupo de fibras) → rodeado por el perimisio.',
              'Músculo entero → rodeado por el epimisio.',
              'Aponeurosis: lámina tendinosa ancha por la que el músculo se inserta.',
            ],
          },
        ],
      },
      {
        id: 'mio-4',
        number: 4,
        title: 'Partes, inserciones y formas',
        keyTerms: ['origen', 'inserción', 'cabeza', 'vientre', 'tendón', 'fusiforme', 'penniforme'],
        blocks: [
          {
            type: 'list',
            title: 'Partes e inserciones',
            items: [
              'Origen (inserción fija) e inserción (inserción móvil).',
              'Cabeza, vientre y tendón.',
              'Se inserta en hueso, piel, mucosa, aponeurosis o membrana sinovial.',
            ],
          },
          {
            type: 'table',
            title: 'Formas del músculo',
            data: {
              headers: ['Forma', 'Ejemplo'],
              rows: [
                ['Fusiforme de 1 cabeza', 'Braquial'],
                ['Fusiforme de 2 cabezas', 'Bíceps braquial'],
                ['Digástrico (2 vientres)', 'Digástrico'],
                ['Poligástrico (varios vientres)', 'Recto del abdomen'],
                ['Unipenniforme (tendón lateral)', 'Tibial posterior'],
                ['Bipenniforme (tendón central)', 'Recto femoral'],
                ['Plano de varias cabezas', 'Oblicuo mayor (externo) del abdomen'],
              ],
            },
          },
        ],
      },
      {
        id: 'mio-5',
        number: 5,
        title: 'Nomenclatura muscular',
        keyTerms: ['morfología', 'origen/inserción', 'localización', 'número de vientres', 'acción'],
        blocks: [
          {
            type: 'table',
            title: 'Cómo se nombra un músculo',
            data: {
              headers: ['Criterio', 'Ejemplo'],
              rows: [
                ['Morfología', 'Trapecio, romboides'],
                ['Origen / inserción', 'Esternocleidomastoideo, estilohioideo'],
                ['Localización', 'Tibial posterior, cubital anterior'],
                ['Número de vientres', 'Digástrico, bíceps braquial'],
                ['Acción', 'Elevador de la escápula, extensor de los dedos'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Origen fijo vs. móvil según el gesto',
            content: 'Origen e inserción pueden invertir su papel: en una dominada, la inserción (húmero) queda fija y el origen (tronco) se mueve hacia el brazo. Por eso "origen fijo / inserción móvil" describe el gesto habitual, no una regla absoluta.',
          },
        ],
      },
    ],
  },
  {
    id: 'musculos-masticacion',
    title: 'Músculos masticatorios',
    subtitle: 'Masetero, temporal y pterigoideos: todos inervados por el V3',
    colorKey: 'miologia',
    categoria: 'Miología',
    emoji: '😬',
    keyPoints: [
      'Los 4 músculos de la masticación son masetero, temporal, pterigoideo medial (interno) y pterigoideo lateral (externo).',
      'TODOS están inervados por el V3 (rama mandibular del trigémino).',
      'Masetero, temporal y pterigoideo medial ELEVAN la mandíbula (cierran la boca).',
      'El pterigoideo lateral (externo) la DESCIENDE y protruye (abre la boca).',
      'Masetero: origen en el arco cigomático; inserción en la mandíbula (maxilar inferior).',
      'Temporal: origen en la fosa temporal; inserción en el proceso coronoides (apófisis coronoides) de la mandíbula.',
    ],
    sections: [
      {
        id: 'mmast-1',
        number: 1,
        title: 'Los cuatro músculos masticatorios',
        keyTerms: ['masetero', 'temporal', 'pterigoideo medial', 'pterigoideo lateral', 'V3'],
        blocks: [
          {
            type: 'note',
            title: 'Todos por el V3',
            content:
              'Los cuatro músculos de la masticación reciben el nervio mandibular (V3), tercera rama del trigémino. Es el dato más evaluable de la clase y el contraste con la mímica (VII). TA principal, clásico entre paréntesis: pterigoideo medial/lateral = interno/externo; mandíbula = maxilar inferior.',
          },
          {
            type: 'table',
            title: 'Origen · inserción · función (inervación: V3 en todos)',
            data: {
              headers: ['Músculo', 'Origen → inserción', 'Función'],
              rows: [
                ['Masetero', 'Arco cigomático → mandíbula (cara lateral del ángulo)', 'Eleva la mandíbula'],
                ['Temporal', 'Fosa temporal → proceso coronoides y rama de la mandíbula', 'Eleva (y retrae) la mandíbula'],
                ['Pterigoideo medial (interno)', 'Lámina pterigoidea lateral y palatino → cara medial del ángulo mandibular', 'Eleva la mandíbula'],
                ['Pterigoideo lateral (externo)', 'Ala mayor del esfenoides y lámina pterigoidea lateral → cápsula de la ATM y cuello mandibular', 'Desciende (abre) y protruye la mandíbula'],
              ],
            },
          },
        ],
      },
      {
        id: 'mmast-2',
        number: 2,
        title: 'Elevación vs. apertura',
        keyTerms: ['elevación', 'descenso', 'protrusión'],
        blocks: [
          {
            type: 'comparison',
            title: 'Quién cierra y quién abre',
            left: {
              title: 'Elevan (cierran)',
              items: ['Masetero', 'Temporal', 'Pterigoideo medial (interno)'],
            },
            right: {
              title: 'Desciende / protruye (abre)',
              items: ['Pterigoideo lateral (externo)', '(con los suprahioideos y la gravedad)'],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'V3 y el reflejo maseterino',
            content: 'Como el V3 lleva la orden motora y también la sensibilidad de la mandíbula, se explora con el reflejo maseterino (percutir el mentón cierra la boca). Su exageración indica una lesión de la vía motora superior por encima del núcleo del trigémino.',
          },
        ],
      },
    ],
  },
  {
    id: 'musculos-cara-craneo',
    title: 'Músculos de la mímica y cutáneos del cráneo',
    subtitle: 'La expresión facial, toda inervada por el VII (facial)',
    colorKey: 'miologia',
    categoria: 'Miología',
    emoji: '🙂',
    keyPoints: [
      'TODOS los músculos de la expresión facial (mímica) están inervados por el VII (nervio facial).',
      'Contraste clave del examen: masticación = V3; mímica = VII.',
      'El occipitofrontal (epicráneo) tiene un vientre occipital y uno frontal unidos por la galea aponeurótica (aponeurosis epicraneal).',
      'Periorbitarios: orbicular del ojo (de los párpados), con porciones orbitaria, palpebral y lagrimal; corrugador superciliar.',
      'Peribucales: orbicular de los labios, buccinador, cigomático mayor y menor, risorio, elevadores y depresores.',
      'El buccinador comprime la mejilla (soplar, masticar), pero es un músculo de la MÍMICA (VII), no masticatorio.',
    ],
    sections: [
      {
        id: 'mcara-1',
        number: 1,
        title: 'La mímica: toda por el VII',
        keyTerms: ['expresión facial', 'nervio facial', 'VII'],
        blocks: [
          {
            type: 'note',
            title: 'Masticación V3 · mímica VII',
            content:
              'Todos los músculos cutáneos de la cara y del cráneo (la expresión facial) reciben el VII (nervio facial). Es el contraste que más se pregunta frente a los masticatorios (V3). TA principal, clásico entre paréntesis: orbicular del ojo = orbicular de los párpados; corrugador superciliar = superciliar; galea aponeurótica = aponeurosis epicraneal.',
          },
        ],
      },
      {
        id: 'mcara-2',
        number: 2,
        title: 'Cutáneos del cráneo: occipitofrontal',
        keyTerms: ['occipitofrontal', 'epicráneo', 'galea aponeurótica'],
        blocks: [
          {
            type: 'definition',
            title: 'Galea aponeurótica (aponeurosis epicraneal)',
            content: 'Lámina tendinosa que cubre la bóveda craneal y une los vientres occipital y frontal del músculo occipitofrontal (epicráneo). Está firmemente unida a la piel del cuero cabelludo y laxamente al periostio. — Galea aponeurótica.',
          },
          {
            type: 'list',
            title: 'Occipitofrontal (epicráneo)',
            items: [
              'Vientre occipital: origen en la línea nucal superior del occipital y la mastoides; inserción en la galea; tensa la aponeurosis.',
              'Vientre frontal: origen en la galea; inserción en la piel de las cejas y la raíz nasal; eleva las cejas y arruga la frente.',
            ],
          },
        ],
      },
      {
        id: 'mcara-3',
        number: 3,
        title: 'Periorbitarios y de la nariz',
        keyTerms: ['orbicular del ojo', 'corrugador superciliar', 'prócer', 'nasal'],
        blocks: [
          {
            type: 'list',
            title: 'Alrededor del ojo y la nariz',
            items: [
              'Orbicular del ojo (de los párpados): porciones orbitaria, palpebral y lagrimal; es el esfínter que cierra los párpados y protege el ojo.',
              'Corrugador superciliar (superciliar): frunce el ceño (arruga vertical entre las cejas).',
              'Depresor de la ceja.',
              'Nariz: prócer/piramidal, transverso de la nariz (nasal) y mirtiforme (depresor del tabique): mueven la piel y los orificios nasales.',
            ],
          },
        ],
      },
      {
        id: 'mcara-4',
        number: 4,
        title: 'Peribucales',
        keyTerms: ['orbicular de los labios', 'buccinador', 'cigomático mayor', 'risorio'],
        blocks: [
          {
            type: 'list',
            title: 'Alrededor de la boca',
            items: [
              'Orbicular de los labios: esfínter de la boca; frunce y proyecta los labios.',
              'Buccinador: origen en ambos maxilares y el ligamento pterigomandibular; comprime la mejilla (soplar, silbar, mantener el bolo entre los dientes).',
              'Cigomático mayor y menor: llevan la comisura arriba y afuera (sonrisa).',
              'Risorio (sonrisa), elevadores del labio y del ala nasal, depresor del ángulo de la boca.',
            ],
          },
        ],
      },
      {
        id: 'mcara-5',
        number: 5,
        title: 'Masticación (V3) vs. mímica (VII)',
        keyTerms: ['V3', 'VII', 'buccinador'],
        blocks: [
          {
            type: 'comparison',
            title: 'La trampa de la inervación',
            left: {
              title: 'Masticación → V3',
              items: ['Masetero, temporal, pterigoideos medial y lateral.', 'Mueven la mandíbula.'],
            },
            right: {
              title: 'Mímica → VII',
              items: ['Occipitofrontal, orbiculares, buccinador, cigomáticos, risorio…', 'Mueven la piel de la cara.'],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Parálisis de Bell',
            content: 'La parálisis del VII (parálisis de Bell) borra los pliegues de un lado de la cara, impide cerrar el ojo y desvía la comisura, pero NO debilita la mordida (V3 intacto). Distinguir mímica de masticación es exactamente lo que localiza la lesión.',
          },
        ],
      },
      {
        id: 'mcara-6',
        number: 6,
        title: 'Músculos de la nariz (detalle)',
        keyTerms: ['piramidal', 'transverso', 'mirtiforme', 'dilatador del ala nasal'],
        blocks: [
          {
            type: 'note',
            title: '11 por lado (según el profesor)',
            content:
              'El profesor cuenta 11 músculos de la nariz por lado; los principales que hay que reconocer son cuatro. Todos son de la mímica → VII (facial).',
          },
          {
            type: 'list',
            title: 'Los cuatro que caen',
            items: [
              'Piramidal (prócer): desciende la piel ciliar (entre las cejas) y produce las arrugas transversales de la raíz nasal.',
              'Transverso de la nariz (nasal, porción transversa): estrecha los orificios nasales.',
              'Mirtiforme (depresor del tabique nasal): estrecha los orificios y baja el tabique.',
              'Dilatador propio del ala nasal: abre (dilata) las alas de la nariz.',
            ],
          },
        ],
      },
      {
        id: 'mcara-7',
        number: 7,
        title: 'Músculos de la boca (detalle)',
        keyTerms: ['orbicular de los labios', 'buccinador', 'conducto de Stenon', 'cigomático mayor', 'risorio de Santorini'],
        blocks: [
          {
            type: 'list',
            title: 'Alrededor de la boca, en detalle',
            items: [
              'Orbicular de los labios: ÚNICO (no par); actúa como esfínter que cierra y proyecta los labios.',
              'Buccinador: permite soplar y silbar; está atravesado por el conducto de Stenon (parotídeo), que drena la glándula parótida.',
              'Elevadores: elevador común del ala de la nariz y del labio superior, elevador propio del labio superior y elevador del ángulo de la boca.',
              'Cigomático mayor y menor: llevan la comisura arriba y afuera.',
              'Risorio (de Santorini): estira la comisura hacia fuera.',
              'Depresores (del labio inferior y del ángulo de la boca) y mentonianos (borla del mentón): bajan y proyectan el labio inferior.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'La sonrisa, el Joker y el VII',
            content:
              'El cigomático mayor es el "músculo de la sonrisa"; el elevador del ángulo de la boca es el "músculo del Joker". Toda la mímica corre por el VII (facial), que se reparte en cinco ramas: temporal, cigomática, bucal, mandibular y cervical.',
          },
        ],
      },
    ],
  },
  {
    id: 'musculos-cuello-nuca',
    title: 'Músculos del cuello y la nuca',
    subtitle: 'Superficiales, suboccipitales, hioideos, escalenos y prevertebrales',
    colorKey: 'miologia',
    categoria: 'Miología',
    emoji: '🦒',
    keyPoints: [
      'Nuca (triángulo suboccipital): límites recto posterior mayor (medial), oblicuo superior (lateral) y oblicuo inferior (inferior); contenido = arteria vertebral, nervio suboccipital (rama posterior de C1) y plexo venoso suboccipital.',
      'Superficiales: platisma (cutáneo del cuello, VII), ECM y trapecio; el ECM y el trapecio comparten inervación XI (motor) + C2–C3 (propiocepción).',
      'Suprahioideos con inervación mixta: V (milohioideo y vientre anterior del digástrico), VII (estilohioideo y vientre posterior del digástrico) y XII/C1 (geniohioideo).',
      'Infrahioideos (esternohioideo, esternotiroideo, tirohioideo, omohioideo): descienden el hioides y la laringe; inervación asa cervical (C1–C2).',
      'Escalenos anterior y medio se insertan en la 1.ª costilla; el posterior, en la 2.ª. Flexión lateral del cuello e inspiradores accesorios.',
      'Prevertebrales: recto lateral y anterior de la cabeza, largo de la cabeza y largo del cuello (flexores del cuello).',
      'Entre el escaleno anterior y el medio pasan el plexo braquial y la arteria subclavia (desfiladero de los escalenos).',
    ],
    sections: [
      {
        id: 'mcue-1',
        number: 1,
        title: 'Los grupos del cuello y la nuca',
        keyTerms: ['suboccipital', 'suprahioideos', 'escalenos', 'prevertebrales'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la TA como principal y el clásico entre paréntesis (cuenta como correcto). En esta clase se ven la nuca (suboccipitales), los suprahioideos, los escalenos y los prevertebrales; los infrahioideos y los triángulos del cuello son referencia de la misma clase.',
          },
        ],
      },
      {
        id: 'mcue-2',
        number: 2,
        title: 'Nuca y triángulo suboccipital',
        keyTerms: ['recto posterior mayor', 'recto posterior menor', 'oblicuo inferior', 'oblicuo superior', 'arteria vertebral'],
        blocks: [
          {
            type: 'table',
            title: 'Músculos suboccipitales (origen → inserción)',
            data: {
              headers: ['Músculo', 'Origen → inserción'],
              rows: [
                ['Recto posterior MAYOR de la cabeza', 'Proceso espinoso de C2 (axis) → línea nucal inferior del occipital'],
                ['Recto posterior MENOR de la cabeza', 'Tubérculo posterior de C1 (atlas) → línea nucal inferior del occipital'],
                ['Oblicuo inferior de la cabeza (oblicuo mayor)', 'Proceso espinoso de C2 → proceso transverso de C1'],
                ['Oblicuo superior de la cabeza (oblicuo menor)', 'Proceso transverso de C1 → occipital'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Triángulo suboccipital: límites, piso, techo y contenido',
            data: {
              headers: ['Elemento', 'Detalle'],
              rows: [
                ['Límite medial', 'Recto posterior MAYOR de la cabeza'],
                ['Límite lateral', 'Oblicuo superior de la cabeza (oblicuo menor)'],
                ['Límite inferior', 'Oblicuo inferior de la cabeza (oblicuo mayor)'],
                ['Piso', 'Membrana atlantooccipital posterior + arco posterior del atlas (C1)'],
                ['Techo', 'Complejo mayor (semiespinoso de la cabeza)'],
                ['Contenido', 'Arteria vertebral, nervio suboccipital y plexo venoso suboccipital'],
              ],
            },
          },
          {
            type: 'note',
            content: 'El nervio suboccipital es la rama posterior (dorsal) de C1 e inerva todos los músculos suboccipitales. La arteria vertebral cruza el triángulo sobre el arco posterior del atlas antes de entrar en el cráneo.',
          },
        ],
      },
      {
        id: 'mcue-3',
        number: 3,
        title: 'Suprahioideos',
        keyTerms: ['digástrico', 'estilohioideo', 'milohioideo', 'geniohioideo'],
        blocks: [
          {
            type: 'table',
            title: 'Suprahioideos (origen → inserción · inervación)',
            data: {
              headers: ['Músculo', 'Origen → inserción', 'Inervación'],
              rows: [
                ['Digástrico', 'Vientre post.: mastoides · vientre ant.: fosa digástrica de la mandíbula → hioides (tendón intermedio)', 'V.a: V3 · V.p: VII'],
                ['Estilohioideo', 'Proceso estiloides → cuerpo del hioides', 'VII (facial)'],
                ['Milohioideo', 'Línea milohioidea de la mandíbula → rafe medio y hioides', 'V3'],
                ['Geniohioideo', 'Espina mentoniana de la mandíbula → hioides', 'C1 (por el XII, hipogloso)'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'mnemotecnia',
            title: 'Suprahioideos: inervación mixta (V, VII, XII)',
            content:
              'Los suprahioideos NO tienen un solo nervio: milohioideo y vientre anterior del digástrico por el V (trigémino); estilohioideo y vientre posterior del digástrico por el VII (facial); geniohioideo por fibras de C1 que viajan con el XII (hipogloso). El digástrico resume la regla: vientre anterior V, vientre posterior VII.',
          },
        ],
      },
      {
        id: 'mcue-4',
        number: 4,
        title: 'Escalenos',
        keyTerms: ['escaleno anterior', 'escaleno medio', 'escaleno posterior', '1.ª costilla', '2.ª costilla'],
        blocks: [
          {
            type: 'table',
            title: 'Escalenos (origen → inserción)',
            data: {
              headers: ['Músculo', 'Origen → inserción'],
              rows: [
                ['Escaleno anterior', 'Tubérculos anteriores de los procesos transversos de C3–C6 → 1.ª costilla'],
                ['Escaleno medio', 'Procesos transversos de C1–C7 → 1.ª costilla'],
                ['Escaleno posterior', 'Tubérculos posteriores de los procesos transversos de C4–C6 → 2.ª costilla'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Función de todos: flexión lateral del cuello e inspiradores accesorios (elevan las dos primeras costillas). Inervación: ramas anteriores cervicales (≈ C3–C4).',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Desfiladero de los escalenos',
            content: 'Entre el escaleno anterior y el medio pasan el plexo braquial y la arteria subclavia; su compresión ahí produce el síndrome del desfiladero torácico (dolor, hormigueo y frialdad del miembro superior).',
          },
        ],
      },
      {
        id: 'mcue-5',
        number: 5,
        title: 'Prevertebrales',
        keyTerms: ['recto lateral de la cabeza', 'recto anterior de la cabeza', 'largo de la cabeza', 'largo del cuello'],
        blocks: [
          {
            type: 'list',
            title: 'Delante de la columna cervical',
            items: [
              'Recto lateral de la cabeza: proceso transverso de C1 → proceso yugular del occipital.',
              'Recto anterior de la cabeza: proceso transverso de C1 → porción basilar del occipital.',
              'Largo de la cabeza: tubérculos anteriores de C3–C6 → occipital.',
              'Largo del cuello: por la cara anterior de las vértebras cervicales y torácicas altas; flexiona el cuello.',
            ],
          },
        ],
      },
      {
        id: 'mcue-6',
        number: 6,
        title: 'Cuello superficiales: platisma, ECM y trapecio',
        keyTerms: ['platisma', 'esternocleidomastoideo', 'ECM', 'trapecio', 'XI'],
        blocks: [
          {
            type: 'table',
            title: 'Superficiales del cuello (función · inervación)',
            data: {
              headers: ['Músculo', 'Función', 'Inervación'],
              rows: [
                ['Platisma (cutáneo del cuello)', 'Tensa la piel del cuello y baja la comisura; es músculo de la mímica', 'VII (facial), rama cervical'],
                ['Esternocleidomastoideo (ECM)', 'Bilateral: flexiona el cuello. Unilateral: gira la cabeza al lado opuesto e inclina al mismo lado', 'XI (accesorio) motor + C2–C3'],
                ['Trapecio', 'Mueve y fija la escápula; extiende el cuello', 'XI (accesorio) motor + C2–C3'],
              ],
            },
          },
          {
            type: 'note',
            content: 'El ECM se origina en el esternón (cabeza esternal) y la clavícula (cabeza clavicular) y se inserta en el proceso mastoides (y la línea nucal superior). El XI aporta la fibra motora; C2–C3 aportan la propiocepción.',
          },
        ],
      },
      {
        id: 'mcue-7',
        number: 7,
        title: 'Infrahioideos',
        keyTerms: ['esternohioideo', 'esternotiroideo', 'tirohioideo', 'omohioideo', 'asa cervical'],
        blocks: [
          {
            type: 'list',
            title: 'Los cuatro infrahioideos (descienden el hioides y la laringe)',
            items: [
              'Esternohioideo: del manubrio esternal al hioides.',
              'Esternotiroideo: del manubrio al cartílago tiroides.',
              'Tirohioideo: del cartílago tiroides al hioides.',
              'Omohioideo: de la escápula al hioides (vientres superior e inferior con tendón intermedio).',
            ],
          },
          {
            type: 'note',
            content: 'Inervación: asa cervical (C1–C2, ansa cervicalis); el tirohioideo es la excepción: recibe una rama independiente de C1 que viaja con el XII (hipogloso). Función común: bajan el hioides y la laringe tras la deglución.',
          },
        ],
      },
    ],
  },
  {
    id: 'musculos-dorso',
    title: 'Músculos del dorso',
    subtitle: 'Superficiales, intermedios y profundos (erectores de la columna)',
    colorKey: 'miologia',
    categoria: 'Miología',
    emoji: '🐢',
    keyPoints: [
      'Superficiales: trapecio y dorsal ancho; mueven el miembro superior (no son propios del dorso).',
      'Intermedios: elevador de la escápula (angular del omóplato), romboides menor y mayor, serrato posterior superior e inferior.',
      'Profundos (propios): erectores de la columna, esplenios y transversoespinoso.',
      'Erectores de la columna, de LATERAL a MEDIAL: iliocostal, longísimo (dorsal largo) y espinoso (epiespinoso).',
      'El transversoespinoso incluye semiespinosos, multífidos, rotadores, interespinosos e intertransversos.',
      'Los serratos posteriores superior e inferior (serrato menor posterosuperior/posteroinferior) son respiratorios accesorios.',
    ],
    sections: [
      {
        id: 'mdor-1',
        number: 1,
        title: 'Los tres grupos del dorso',
        keyTerms: ['superficial', 'intermedio', 'profundo'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la TA como principal y el clásico entre paréntesis. Mapeo: elevador de la escápula = angular del omóplato · serrato posterior superior/inferior = serrato menor posterosuperior/posteroinferior · longísimo = dorsal largo · espinoso = epiespinoso.',
          },
          {
            type: 'list',
            title: 'Por profundidad',
            items: [
              'Superficiales (extrínsecos): trapecio y dorsal ancho — mueven el miembro superior.',
              'Intermedios: elevador de la escápula, romboides y serratos posteriores.',
              'Profundos (intrínsecos): erectores de la columna, esplenios y transversoespinoso — mueven y estabilizan la columna.',
            ],
          },
        ],
      },
      {
        id: 'mdor-2',
        number: 2,
        title: 'Superficiales e intermedios',
        keyTerms: ['trapecio', 'dorsal ancho', 'elevador de la escápula', 'romboides'],
        blocks: [
          {
            type: 'comparison',
            title: 'Superficiales vs. intermedios',
            left: {
              title: 'Superficiales',
              items: ['Trapecio: mueve y fija la escápula; extiende el cuello.', 'Dorsal ancho: aduce, extiende y rota medialmente el brazo.'],
            },
            right: {
              title: 'Intermedios',
              items: ['Elevador de la escápula (angular del omóplato).', 'Romboides menor y mayor (retraen la escápula).', 'Serratos posteriores superior e inferior (respiratorios accesorios).'],
            },
          },
        ],
      },
      {
        id: 'mdor-3',
        number: 3,
        title: 'Profundos: erectores y transversoespinoso',
        keyTerms: ['iliocostal', 'longísimo', 'espinoso', 'esplenios', 'transversoespinoso'],
        blocks: [
          {
            type: 'definition',
            title: 'Erectores de la columna',
            content: 'Columna muscular a cada lado de las apófisis espinosas que endereza el tronco y controla su flexión. De LATERAL a MEDIAL: iliocostal, longísimo (dorsal largo) y espinoso (epiespinoso). — Erector de la columna.',
          },
          {
            type: 'list',
            title: 'Profundos del dorso',
            items: [
              'Erectores de la columna (grupo espinotransverso): iliocostal, longísimo y espinoso.',
              'Esplenios de la cabeza y del cuello: extienden y rotan la cabeza.',
              'Transversoespinoso (grupo transversoespinoso): semiespinosos, multífidos, rotadores, interespinosos e intertransversos.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Lumbalgia y erectores',
            content: 'La sobrecarga de los erectores de la columna es una causa frecuente de lumbalgia mecánica; por eso fortalecer el core y la musculatura paravertebral es clave en su prevención y rehabilitación.',
          },
        ],
      },
    ],
  },
  {
    id: 'musculos-diafragma',
    title: 'Diafragma toracoabdominal',
    subtitle: 'Porciones, orificios e inervación (nervio frénico C3–C4–C5)',
    colorKey: 'miologia',
    categoria: 'Miología',
    emoji: '🫁',
    keyPoints: [
      'El diafragma es el principal músculo de la inspiración; separa el tórax del abdomen.',
      'Tres porciones: esternal (apéndice xifoides), costal (6 últimos cartílagos costales) y lumbar (pilares y ligamentos arqueados).',
      'Todas convergen en el centro tendinoso (frénico).',
      'Inervación: nervio frénico (C3–C4–C5): "C3, 4, 5 keep the diaphragm alive".',
      'Tres orificios: hiato aórtico, hiato esofágico y orificio de la vena cava inferior.',
      'Niveles clásicos: vena cava T8 · esofágico T10 · aórtico T12 (mnemotecnia 8-10-12).',
      'Intercostales externos: elevan las costillas (inspiración); intercostales internos: las descienden (espiración).',
    ],
    sections: [
      {
        id: 'mdia-1',
        number: 1,
        title: 'El principal músculo inspirador',
        keyTerms: ['diafragma', 'centro tendinoso', 'inspiración'],
        blocks: [
          {
            type: 'note',
            title: 'Diafragma toracoabdominal',
            content:
              'Tabique musculotendinoso abovedado que separa el tórax del abdomen. Al contraerse desciende y aumenta el volumen torácico: es el principal músculo de la inspiración. Sus fibras convergen en el centro tendinoso (frénico).',
          },
        ],
      },
      {
        id: 'mdia-2',
        number: 2,
        title: 'Porciones',
        keyTerms: ['porción esternal', 'porción costal', 'porción lumbar', 'pilares'],
        blocks: [
          {
            type: 'table',
            title: 'Las tres porciones (por su origen)',
            data: {
              headers: ['Porción', 'Origen'],
              rows: [
                ['Esternal', 'Cara posterior del apéndice xifoides.'],
                ['Costal', 'Los 6 últimos cartílagos costales y las 4 últimas costillas.'],
                ['Lumbar', 'Pilares derecho e izquierdo y ligamentos arqueados medial, lateral y medio.'],
              ],
            },
          },
        ],
      },
      {
        id: 'mdia-3',
        number: 3,
        title: 'Orificios',
        keyTerms: ['hiato aórtico', 'hiato esofágico', 'orificio de la vena cava'],
        blocks: [
          {
            type: 'table',
            title: 'Los tres orificios (nivel · contenido)',
            data: {
              headers: ['Orificio', 'Nivel', 'Contenido'],
              rows: [
                ['Orificio de la vena cava', 'T8', 'Vena cava inferior, nervio frénico derecho, linfáticos hepáticos.'],
                ['Hiato esofágico', 'T10', 'Esófago y nervios vagos.'],
                ['Hiato aórtico', 'T12', 'Aorta, conducto torácico y nervios esplácnicos mayores.'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Mnemotecnia de niveles: vena Cava T8, Esófago T10, Aorta T12 (8-10-12). El hiato aórtico es el más posterior y bajo; el de la cava, el más alto y en el centro tendinoso.',
          },
        ],
      },
      {
        id: 'mdia-4',
        number: 4,
        title: 'Inervación',
        keyTerms: ['nervio frénico', 'C3', 'C4', 'C5'],
        blocks: [
          {
            type: 'list',
            title: 'Nervio frénico',
            items: [
              'El nervio frénico (C3–C4–C5) da la inervación motora del diafragma y sensitiva del centro tendinoso.',
              'Los nervios intercostales inferiores dan sensibilidad a la periferia.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'C3-4-5 mantiene vivo el diafragma',
            content: 'Como el frénico nace de C3–C4–C5, una lesión medular POR ENCIMA de C3 paraliza el diafragma y exige ventilación mecánica, mientras que una lesión por debajo de C5 la respeta. El hipo es una contracción espasmódica del diafragma por irritación del frénico.',
          },
        ],
      },
      {
        id: 'mdia-5',
        number: 5,
        title: 'Músculos intercostales',
        keyTerms: ['intercostales externos', 'intercostales internos', 'inspiración', 'espiración'],
        blocks: [
          {
            type: 'table',
            title: 'Intercostales (dirección de fibras · función)',
            data: {
              headers: ['Músculo', 'Dirección de las fibras', 'Función'],
              rows: [
                ['Intercostales externos', 'Oblicuas hacia abajo y adelante (como meter las manos en los bolsillos)', 'ELEVAN las costillas → inspiración'],
                ['Intercostales internos', 'Oblicuas hacia abajo y atrás (perpendiculares a las externas)', 'DESCIENDEN las costillas → espiración'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Ocupan los espacios intercostales entre costillas contiguas. Inervación: nervios intercostales (ramas anteriores de los nervios torácicos). Junto con el diafragma forman la musculatura respiratoria: el diafragma y los intercostales externos son los inspiradores principales.',
          },
        ],
      },
    ],
  },

  // ═══════════════ Semana 4 · Miología II ═══════════════
  {
    id: 'musculos-pared-abdominal',
    title: 'Músculos de la pared abdominal',
    subtitle: 'Anterolateral (los "cuadritos" y las capas) y posterior (psoas ilíaco y cuadrado lumbar)',
    colorKey: 'miologia',
    categoria: 'Miología',
    emoji: '🧱',
    keyPoints: [
      'Anterolateral (5): oblicuo externo (mayor), oblicuo interno (menor), transverso del abdomen, recto del abdomen y piramidal.',
      'El recto del abdomen es poligástrico: sus intersecciones tendinosas dan los "cuadritos" (lavadero).',
      'Capas superficiales: piel, fascia de Camper (grasa) y fascia de Scarpa (Escarpa, membranosa).',
      'La vaina del recto (hojas anterior y posterior) se entrecruza en la línea alba; bajo el arco de Douglas desaparece la hoja posterior.',
      'Triángulo lumbar de Petit: medial el dorsal ancho, lateral el oblicuo externo, piso el oblicuo interno, base la cresta ilíaca.',
      'Posterior: psoas ilíaco (iliopsoas) → trocánter menor (flexiona el muslo o el tronco); psoas menor (inconstante) y cuadrado lumbar.',
      'El cuadrado lumbar fija el tronco y la 12.ª costilla; lo inervan el subcostal y el plexo lumbar.',
    ],
    sections: [
      {
        id: 'mpab-1',
        number: 1,
        title: 'Nomenclatura y capas',
        keyTerms: ['oblicuo externo', 'oblicuo interno', 'fascia de Camper', 'fascia de Scarpa'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'Se usa la TA como principal y el clásico entre paréntesis (cuenta como correcto). Mapeo: oblicuo externo = oblicuo mayor · oblicuo interno = oblicuo menor · recto del abdomen = recto anterior del abdomen · fascia de Scarpa = fascia de Escarpa.',
          },
          {
            type: 'list',
            title: 'Capas de la pared (de superficial a profundo)',
            items: [
              'Piel.',
              'Fascia de Camper: capa grasa del tejido subcutáneo.',
              'Fascia de Scarpa (Escarpa): capa membranosa del tejido subcutáneo.',
              'Los tres planos musculares anchos y el recto, envueltos por la vaina del recto.',
            ],
          },
        ],
      },
      {
        id: 'mpab-2',
        number: 2,
        title: 'Anterolateral (5 músculos)',
        keyTerms: ['transverso del abdomen', 'recto del abdomen', 'piramidal', 'poligástrico'],
        blocks: [
          {
            type: 'table',
            title: 'Los cinco (función · inervación)',
            data: {
              headers: ['Músculo', 'Función', 'Inervación'],
              rows: [
                ['Oblicuo externo (mayor)', 'Flexiona y rota el tronco; comprime el abdomen', 'Nervios intercostales inferiores (T7–T11) y subcostal'],
                ['Oblicuo interno (menor)', 'Flexiona y rota el tronco al MISMO lado', 'Intercostales inferiores, subcostal e iliohipogástrico/ilioinguinal (L1)'],
                ['Transverso del abdomen', 'Comprime las vísceras (faja abdominal)', 'Intercostales inferiores, subcostal, iliohipogástrico/ilioinguinal'],
                ['Recto del abdomen', 'Flexiona el tronco; poligástrico ("cuadritos")', 'Intercostales inferiores (T7–T12)'],
                ['Piramidal', 'Tensa la línea alba (inconstante)', 'Subcostal (T12)'],
              ],
            },
          },
        ],
      },
      {
        id: 'mpab-3',
        number: 3,
        title: 'Vaina del recto y línea alba',
        keyTerms: ['vaina del recto', 'línea alba', 'arco de Douglas'],
        blocks: [
          {
            type: 'definition',
            title: 'Línea alba',
            content: 'Rafe fibroso medio, del apéndice xifoides a la sínfisis del pubis, formado por el entrecruzamiento de las aponeurosis de los tres músculos anchos (las hojas de la vaina del recto). — Línea alba.',
          },
          {
            type: 'note',
            content: 'La vaina del recto tiene hoja anterior y posterior. Por debajo del arco de Douglas (línea arqueada) desaparece la hoja posterior: las tres aponeurosis pasan por delante del recto, que queda apoyado sobre la fascia transversalis.',
          },
        ],
      },
      {
        id: 'mpab-4',
        number: 4,
        title: 'Triángulo lumbar de Petit',
        keyTerms: ['triángulo de Petit', 'dorsal ancho', 'cresta ilíaca'],
        blocks: [
          {
            type: 'definition',
            title: 'Triángulo lumbar de Petit',
            content: 'Zona débil de la pared posterolateral: límite medial el borde del dorsal ancho, límite lateral el oblicuo externo, piso el oblicuo interno y base la cresta ilíaca. Punto posible de hernia lumbar. — Triángulo lumbar inferior (de Petit).',
          },
        ],
      },
      {
        id: 'mpab-5',
        number: 5,
        title: 'Pared posterior',
        keyTerms: ['psoas ilíaco', 'iliopsoas', 'psoas menor', 'cuadrado lumbar'],
        blocks: [
          {
            type: 'table',
            title: 'Músculos posteriores (origen → inserción · función · inervación)',
            data: {
              headers: ['Músculo', 'Origen → inserción · función', 'Inervación'],
              rows: [
                ['Psoas ilíaco (iliopsoas)', 'Cuerpos/apófisis lumbares + fosa ilíaca → trocánter menor; flexiona el muslo o el tronco', 'Ramas del plexo lumbar (L1–L3) / nervio femoral (ilíaco)'],
                ['Psoas menor (inconstante)', 'Vértebras T12–L1 → eminencia iliopúbica; ayuda a flexionar la columna', 'Plexo lumbar (L1)'],
                ['Cuadrado lumbar', '12.ª costilla y apófisis transversas → cresta ilíaca; fija el tronco y la 12.ª costilla', 'Subcostal (T12) y plexo lumbar (L1–L4)'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'El iliopsoas y el signo del psoas',
            content: 'El psoas ilíaco es el flexor más potente de la cadera y un músculo bidireccional (mueve el muslo o el tronco según el punto fijo). En una apendicitis, extender la cadera estira el psoas y despierta dolor: es el signo del psoas.',
          },
        ],
      },
    ],
  },
  {
    id: 'musculos-hombro-brazo',
    title: 'Músculos del hombro y el brazo',
    subtitle: 'Región pectoral, dorso, manguito rotador (SITS) y los músculos del brazo',
    colorKey: 'miologia',
    categoria: 'Miología',
    emoji: '💪',
    keyPoints: [
      'Región pectoral: pectoral mayor (→ canal bicipital; aducción y rotación interna), pectoral menor, subclavio y serrato anterior (mayor).',
      'El serrato anterior lo inerva el nervio torácico largo (de Bell); su lesión da la escápula alada.',
      'Manguito rotador = SITS: Supraespinoso, Infraespinoso, redondo menor (Teres minor) y Subescapular.',
      'El manguito estabiliza la cabeza del húmero en la glenoides; el supraespinoso es el que más se desgarra.',
      'Brazo, flexores (musculocutáneo): bíceps braquial, coracobraquial y braquial anterior.',
      'Brazo, extensor: tríceps braquial, inervado por el nervio radial.',
      'El deltoides (nervio axilar) es el principal abductor del hombro tras los primeros grados del supraespinoso.',
    ],
    sections: [
      {
        id: 'mhb-1',
        number: 1,
        title: 'Nomenclatura',
        keyTerms: ['serrato anterior', 'surco intertubercular', 'manguito rotador'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'TA como principal y clásico entre paréntesis (cuenta como correcto). Mapeo: serrato anterior = serrato mayor · elevador de la escápula = angular del omóplato · surco intertubercular = canal (corredera) bicipital · redondo menor = teres minor.',
          },
        ],
      },
      {
        id: 'mhb-2',
        number: 2,
        title: 'Región pectoral',
        keyTerms: ['pectoral mayor', 'pectoral menor', 'subclavio', 'serrato anterior'],
        blocks: [
          {
            type: 'table',
            title: 'Pectorales y serrato (función · inervación)',
            data: {
              headers: ['Músculo', 'Origen → inserción · función', 'Inervación'],
              rows: [
                ['Pectoral mayor', 'Clavícula y esternón → surco intertubercular (canal bicipital); aducción y rotación interna del brazo', 'Nervios pectorales medial y lateral'],
                ['Pectoral menor', '3.ª–5.ª costillas → apófisis coracoides; desciende y estabiliza la escápula', 'Nervio pectoral medial'],
                ['Subclavio', '1.ª costilla → clavícula; estabiliza la clavícula', 'Nervio del subclavio'],
                ['Serrato anterior (mayor)', 'Costillas 1–8 → borde medial de la escápula; la fija y la rota (abducción del brazo)', 'Nervio torácico largo (de Bell)'],
              ],
            },
          },
        ],
      },
      {
        id: 'mhb-3',
        number: 3,
        title: 'Dorso y hombro',
        keyTerms: ['trapecio', 'dorsal ancho', 'deltoides', 'romboides'],
        blocks: [
          {
            type: 'list',
            title: 'Que mueven la escápula y el hombro',
            items: [
              'Trapecio (XI + C3–C4) y dorsal ancho (nervio toracodorsal): superficiales.',
              'Elevador de la escápula (angular del omóplato) y romboides menor/mayor: nervio dorsal escapular.',
              'Deltoides (nervio axilar): abductor principal del hombro.',
              'Redondo mayor (subescapular inferior): aduce y rota internamente el brazo — NO es del manguito.',
            ],
          },
        ],
      },
      {
        id: 'mhb-4',
        number: 4,
        title: 'Manguito rotador (SITS)',
        keyTerms: ['supraespinoso', 'infraespinoso', 'redondo menor', 'subescapular', 'SITS'],
        blocks: [
          {
            type: 'definition',
            title: 'Manguito rotador (SITS)',
            content: 'Los cuatro músculos que rodean y estabilizan la articulación del hombro: Supraespinoso, Infraespinoso, redondo menor (Teres minor) y Subescapular (mnemotecnia SITS / "CIS menor"). — Manguito de los rotadores.',
          },
          {
            type: 'table',
            title: 'Los cuatro del manguito (función · inervación)',
            data: {
              headers: ['Músculo', 'Función', 'Inervación'],
              rows: [
                ['Supraespinoso', 'Inicia la abducción (primeros ~15°)', 'Nervio supraescapular'],
                ['Infraespinoso', 'Rotación externa', 'Nervio supraescapular'],
                ['Redondo menor', 'Rotación externa', 'Nervio axilar'],
                ['Subescapular', 'Rotación interna', 'Nervios subescapular superior e inferior'],
              ],
            },
          },
        ],
      },
      {
        id: 'mhb-5',
        number: 5,
        title: 'Músculos del brazo',
        keyTerms: ['bíceps braquial', 'coracobraquial', 'braquial anterior', 'tríceps braquial'],
        blocks: [
          {
            type: 'comparison',
            title: 'Flexores vs. extensor del brazo',
            left: {
              title: 'Flexores → musculocutáneo',
              items: ['Bíceps braquial (flexiona y supina el antebrazo).', 'Coracobraquial (flexiona el brazo).', 'Braquial anterior (flexor puro del codo).'],
            },
            right: {
              title: 'Extensor → radial',
              items: ['Tríceps braquial: extiende el codo.', 'Inervado por el nervio radial.'],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Signo de Popeye y desgarro del manguito',
            content: 'La ruptura del tendón distal (o de la cabeza larga) del bíceps braquial da el signo de Popeye: el vientre se retrae y abulta en el brazo. Y el manguito rotador (SITS) estabiliza la cabeza del húmero en la glenoides: el supraespinoso es el que más se desgarra.',
          },
        ],
      },
    ],
  },
  {
    id: 'musculos-antebrazo-mano',
    title: 'Músculos del antebrazo y la mano',
    subtitle: 'Antebrazo anterior (flexores) y posterior (extensores), y la musculatura intrínseca de la mano',
    colorKey: 'miologia',
    categoria: 'Miología',
    emoji: '✋',
    keyPoints: [
      'Antebrazo anterior: flexores y pronadores, en planos superficial y profundo; nervio mediano (y cubital en el borde medial).',
      'El túnel del carpo transmite el nervio mediano y los tendones flexores; su compresión da el síndrome del túnel carpiano.',
      'Antebrazo posterior: extensores y supinadores; nervio radial y su rama profunda (interóseo posterior).',
      'Braquiorradial (supinador largo): origen en la cresta supracondílea lateral → estiloides del radio; único posterior que FLEXIONA el antebrazo.',
      'Mano — eminencia tenar (pulgar) e hipotenar (meñique); solo el pulgar y el meñique tienen oponente.',
      'Lumbricales: unen tendón (flexor profundo) con la expansión extensora; interóseos: unen hueso con hueso.',
      'Los interóseos palmares se originan en el 2.º, 4.º y 5.º metacarpianos (corrección de la clase: NO en el 1.º).',
    ],
    sections: [
      {
        id: 'mam-1',
        number: 1,
        title: 'Nomenclatura',
        keyTerms: ['braquiorradial', 'supinador', 'interóseos'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'TA como principal y clásico entre paréntesis (cuenta como correcto). Mapeo: braquiorradial = supinador largo · supinador = supinador corto · extensor de los dedos = extensor común de los dedos · extensor del índice = extensor propio del índice.',
          },
        ],
      },
      {
        id: 'mam-2',
        number: 2,
        title: 'Antebrazo anterior (flexores)',
        keyTerms: ['flexores', 'pronadores', 'túnel del carpo', 'nervio mediano'],
        blocks: [
          {
            type: 'list',
            title: 'Flexores y pronadores',
            items: [
              'Superficiales: pronador redondo, flexor radial del carpo, palmar largo, flexor cubital del carpo y flexor superficial de los dedos.',
              'Profundos: flexor profundo de los dedos, flexor largo del pulgar y pronador cuadrado.',
              'Inervación: nervio mediano; excepción cubital → flexor cubital del carpo y la mitad medial del flexor profundo.',
              'El túnel del carpo transmite el nervio mediano y los tendones flexores bajo el retináculo flexor.',
            ],
          },
        ],
      },
      {
        id: 'mam-3',
        number: 3,
        title: 'Antebrazo posterior (extensores)',
        keyTerms: ['braquiorradial', 'extensor radial', 'ancóneo', 'interóseo posterior'],
        blocks: [
          {
            type: 'note',
            title: 'El braquiorradial, la excepción',
            content: 'El braquiorradial (supinador largo) nace en la cresta supracondílea lateral y se inserta en la apófisis estiloides del radio: pese a estar en el compartimiento posterior, FLEXIONA el antebrazo (sobre todo en semipronación).',
          },
          {
            type: 'list',
            title: 'Superficiales y profundos',
            items: [
              'Superficiales: extensor radial largo y corto del carpo, extensor de los dedos, extensor del meñique, extensor cubital del carpo y ancóneo.',
              'Profundos (5): supinador, abductor largo del pulgar, extensor corto y largo del pulgar y extensor del índice.',
              'Inervación: nervio radial y su rama profunda / nervio interóseo posterior.',
            ],
          },
        ],
      },
      {
        id: 'mam-4',
        number: 4,
        title: 'Músculos de la mano',
        keyTerms: ['eminencia tenar', 'hipotenar', 'lumbricales', 'interóseos'],
        blocks: [
          {
            type: 'table',
            title: 'Intrínsecos de la mano',
            data: {
              headers: ['Grupo', 'Músculos · función'],
              rows: [
                ['Eminencia tenar (pulgar)', 'Abductor corto, flexor corto, oponente y aductor del pulgar'],
                ['Eminencia hipotenar (meñique)', 'Palmar corto, abductor, flexor corto y oponente del meñique'],
                ['Lumbricales', 'Del tendón del flexor profundo → expansión extensora; flexionan MCF y extienden IF'],
                ['Interóseos', 'Palmares (aducen, del 2.º/4.º/5.º MC) y dorsales (abducen); referencia = 3.er dedo'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Inervación: nervio mediano (tenar y lumbricales laterales) y nervio cubital (hipotenar, interóseos, lumbricales mediales y aductor del pulgar). La abducción/aducción de los dedos se refiere al 3.er dedo, no a la línea media del cuerpo.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Síndrome del túnel carpiano',
            content: 'La compresión del nervio mediano en el túnel del carpo produce parestesias en los tres primeros dedos y debilidad de la oposición del pulgar (atrofia tenar): es el síndrome del túnel carpiano, la neuropatía por atrapamiento más frecuente.',
          },
        ],
      },
    ],
  },
  {
    id: 'musculos-cadera-muslo',
    title: 'Músculos de la cadera y el muslo',
    subtitle: 'Glúteos, rotadores externos y los tres compartimientos del muslo',
    colorKey: 'miologia',
    categoria: 'Miología',
    emoji: '🦵',
    keyPoints: [
      'Glúteos: mayor (nervio glúteo inferior), mediano, menor y tensor de la fascia lata (nervio glúteo superior) → tracto iliotibial / trocánter mayor.',
      'Rotadores externos: piriforme (piramidal), obturador interno, gemelos superior e inferior, cuadrado femoral y obturador externo.',
      'Muslo, compartimiento anterior (nervio femoral): cuádriceps (recto femoral + 3 vastos), sartorio, iliopsoas.',
      'Compartimiento medial (nervio obturador): pectíneo, aductores mayor/mediano/menor y grácil (recto interno).',
      'Compartimiento posterior (nervio ciático): bíceps femoral, semitendinoso y semimembranoso (isquiotibiales).',
      'Los isquiotibiales flexionan la pierna y extienden el muslo.',
      'Pata de ganso = sartorio + grácil (recto interno) + semitendinoso, en la cara medial de la tibia.',
    ],
    sections: [
      {
        id: 'mcm-1',
        number: 1,
        title: 'Nomenclatura',
        keyTerms: ['piriforme', 'grácil', 'bíceps femoral', 'tracto iliotibial'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'TA como principal y clásico entre paréntesis (cuenta como correcto). Mapeo: piriforme = piramidal de la pelvis · grácil = recto interno · bíceps femoral = bíceps crural · recto femoral = recto anterior del muslo · tensor de la fascia lata → tracto iliotibial (cintilla de Maissiat).',
          },
        ],
      },
      {
        id: 'mcm-2',
        number: 2,
        title: 'Glúteos y tensor de la fascia lata',
        keyTerms: ['glúteo mayor', 'glúteo mediano', 'glúteo menor', 'TFL'],
        blocks: [
          {
            type: 'table',
            title: 'Región glútea (función · inervación)',
            data: {
              headers: ['Músculo', 'Función', 'Inervación'],
              rows: [
                ['Glúteo mayor', 'Extensor y rotador externo potente de la cadera (único con porción craneal en humanos)', 'Nervio glúteo inferior'],
                ['Glúteo mediano', 'Abduce y estabiliza la pelvis al caminar', 'Nervio glúteo superior'],
                ['Glúteo menor', 'Abduce y rota internamente la cadera', 'Nervio glúteo superior'],
                ['Tensor de la fascia lata (TFL)', 'Tensa el tracto iliotibial; abduce y estabiliza', 'Nervio glúteo superior'],
              ],
            },
          },
        ],
      },
      {
        id: 'mcm-3',
        number: 3,
        title: 'Rotadores externos',
        keyTerms: ['piriforme', 'obturador interno', 'gemelos', 'cuadrado femoral'],
        blocks: [
          {
            type: 'list',
            title: 'Los seis rotadores externos (de arriba abajo)',
            items: [
              'Piriforme (piramidal): referencia clave de la región glútea; la arteria y los nervios salen por encima y por debajo de él.',
              'Obturador interno, con el gemelo superior y el gemelo inferior.',
              'Cuadrado femoral.',
              'Obturador externo (más profundo).',
              'Todos rotan externamente la cadera y la estabilizan.',
            ],
          },
        ],
      },
      {
        id: 'mcm-4',
        number: 4,
        title: 'Los tres compartimientos del muslo',
        keyTerms: ['cuádriceps', 'aductores', 'isquiotibiales', 'fascia lata'],
        blocks: [
          {
            type: 'comparison',
            title: 'Compartimiento y su nervio',
            left: {
              title: 'Anterior → femoral',
              items: ['Cuádriceps: recto femoral + vastos lateral, medial e intermedio.', 'Sartorio (el más largo) e iliopsoas.', 'Extienden la rodilla; flexionan la cadera.'],
            },
            right: {
              title: 'Medial → obturador · Posterior → ciático',
              items: ['Medial: pectíneo, aductores mayor/mediano/menor y grácil (aducen).', 'Posterior (isquiotibiales): bíceps femoral, semitendinoso y semimembranoso.', 'Isquiotibiales: flexión de pierna + extensión de muslo.'],
            },
          },
          {
            type: 'definition',
            title: 'Pata de ganso (pes anserinus)',
            content: 'Inserción común en la cara medial superior de la tibia de tres músculos de tres compartimientos distintos: sartorio (anterior), grácil/recto interno (medial) y semitendinoso (posterior). Comparten la bursa anserina. — Pata de ganso.',
          },
        ],
      },
      {
        id: 'mcm-5',
        number: 5,
        title: 'Correlaciones',
        keyTerms: ['Trendelenburg', 'pata de ganso', 'isquiotibiales'],
        blocks: [
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Marcha de Trendelenburg y tendinitis anserina',
            content: 'La parálisis del glúteo mediano produce la marcha de Trendelenburg ("de pato"): al apoyar en el lado afectado, la pelvis cae hacia el lado sano. Y la tendinitis de la pata de ganso (sartorio, grácil, semitendinoso) inflama la bursa anserina y causa dolor medial de rodilla.',
          },
        ],
      },
    ],
  },
  {
    id: 'musculos-pierna-pie',
    title: 'Músculos de la pierna y el pie',
    subtitle: 'Los tres compartimientos de la pierna, el tendón de Aquiles y los músculos del pie',
    colorKey: 'miologia',
    categoria: 'Miología',
    emoji: '🦶',
    keyPoints: [
      'La fascia de la pierna, la membrana interósea y los tabiques dividen la pierna en tres compartimientos.',
      'Anterior (nervio peroneo profundo): tibial anterior, extensor largo del hallux, extensor largo de los dedos y peroneo anterior (tercer peroneo). Dorsiflexión.',
      'Lateral (nervio peroneo superficial): peroneo largo y peroneo corto. Eversión del pie.',
      'Posterior superficial: gastrocnemio (gemelos), sóleo y plantar → tendón calcáneo (de Aquiles). Flexión plantar.',
      'Posterior profundo (nervio tibial): poplíteo, flexor largo de los dedos, flexor largo del hallux y tibial posterior.',
      'El tendón de Aquiles (calcáneo) es el más grueso y fuerte del cuerpo; su rotura da el signo de Thompson.',
      'Pie, región dorsal: SOLO el extensor corto de los dedos (peroneo profundo). Región plantar: 4 planos.',
      'Inervación plantar: nervio plantar medial (interno) y plantar lateral (externo) según el músculo.',
    ],
    sections: [
      {
        id: 'mpp-1',
        number: 1,
        title: 'Nomenclatura y alcance',
        keyTerms: ['gastrocnemio', 'peroneo', 'tendón calcáneo'],
        blocks: [
          {
            type: 'note',
            title: 'Nomenclatura: TA principal, clásica del profesor entre paréntesis',
            content:
              'TA como principal y clásico entre paréntesis (cuenta como correcto). Mapeo: gastrocnemio = gemelos · peroneo largo/corto = peroné lateral largo/corto (fibular) · tendón calcáneo = tendón de Aquiles.',
          },
          {
            type: 'note',
            content:
              'Además de los tres compartimientos de la pierna, este tema incluye los músculos intrínsecos del pie (Clase 5): una región dorsal y una región plantar en cuatro planos.',
          },
        ],
      },
      {
        id: 'mpp-2',
        number: 2,
        title: 'Compartimiento anterior',
        keyTerms: ['tibial anterior', 'extensor largo del hallux', 'peroneo profundo', 'dorsiflexión'],
        blocks: [
          {
            type: 'list',
            title: 'Anterior → dorsiflexión (nervio peroneo profundo)',
            items: [
              'Tibial anterior: dorsiflexión e inversión del pie.',
              'Extensor largo del hallux: extiende el dedo gordo.',
              'Extensor largo de los dedos: extiende los dedos 2–5.',
              'Peroneo anterior (tercer peroneo): colabora en la dorsiflexión y la eversión.',
            ],
          },
        ],
      },
      {
        id: 'mpp-3',
        number: 3,
        title: 'Compartimiento lateral',
        keyTerms: ['peroneo largo', 'peroneo corto', 'peroneo superficial', 'eversión'],
        blocks: [
          {
            type: 'note',
            content: 'Compartimiento lateral → eversión del pie, inervado por el nervio peroneo superficial. El peroneo largo cruza la planta hasta el 1.er metatarsiano/cuña medial (como el tibial anterior pero por el lado contrario); el peroneo corto se inserta en la apófisis estiloides del 5.º metatarsiano.',
          },
        ],
      },
      {
        id: 'mpp-4',
        number: 4,
        title: 'Compartimiento posterior',
        keyTerms: ['gastrocnemio', 'sóleo', 'tibial posterior', 'nervio tibial'],
        blocks: [
          {
            type: 'comparison',
            title: 'Posterior superficial vs. profundo (nervio tibial)',
            left: {
              title: 'Superficial',
              items: ['Gastrocnemio (gemelos) y sóleo → tríceps sural.', 'Plantar (delgado).', 'Convergen en el tendón calcáneo (de Aquiles); flexión plantar.'],
            },
            right: {
              title: 'Profundo',
              items: ['Poplíteo (desbloquea la rodilla).', 'Flexor largo de los dedos y flexor largo del hallux.', 'Tibial posterior: flexión plantar e inversión.'],
            },
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Tendón de Aquiles y grados de esguince',
            content: 'El tendón calcáneo (de Aquiles) es el más grueso del cuerpo; su rotura impide la flexión plantar (signo de Thompson: al apretar la pantorrilla, el pie no se mueve). Grados de esguince ligamentario: 1 = distensión, 2 = ruptura parcial, 3 = ruptura total.',
          },
        ],
      },
      {
        // Fuente: Semana 4, Clase 5 (músculos del pie: dorsal y planta en 4 planos).
        id: 'mpp-5',
        number: 5,
        title: 'Músculos del pie',
        keyTerms: ['extensor corto de los dedos', 'aponeurosis plantar', 'cuadrado plantar', 'plantar medial', 'plantar lateral'],
        blocks: [
          {
            type: 'note',
            title: 'Región dorsal: un solo músculo',
            content:
              'En el dorso del pie hay un único músculo intrínseco: el extensor corto de los dedos (extensor digitorum brevis), que se inserta del 1.º al 4.º dedo (su fascículo para el 1.º se llama extensor corto del hallux). Lo inerva el nervio peroneo profundo (fibular profundo).',
          },
          {
            type: 'table',
            title: 'Región plantar: cuatro planos (de superficial a profundo)',
            data: {
              headers: ['Plano', 'Músculos'],
              rows: [
                ['1.º (superficial)', 'Aponeurosis plantar + abductor del hallux, flexor corto de los dedos y abductor del 5.º dedo'],
                ['2.º', 'Cuadrado plantar (flexor accesorio) y lumbricales; tendones del flexor largo de los dedos y del flexor largo del hallux'],
                ['3.º', 'Flexor corto del hallux, aductor del hallux y flexor corto del 5.º dedo'],
                ['4.º (profundo)', 'Interóseos plantares (aducen) y dorsales (abducen)'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Inervación plantar: el nervio plantar medial (interno) y el nervio plantar lateral (externo) —ramas del tibial— se reparten los músculos, de forma análoga al mediano y el cubital en la mano. El cuadrado plantar y casi todos los profundos van por el plantar lateral.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Aponeurosis plantar y cuadrado plantar',
            content:
              'La aponeurosis plantar sostiene el arco longitudinal; su inflamación en la inserción calcánea es la fascitis plantar (dolor en el talón a los primeros pasos). El cuadrado plantar corrige la línea de tracción oblicua del flexor largo de los dedos, para que la flexión sea recta hacia el talón.',
          },
        ],
      },
    ],
  },
]
