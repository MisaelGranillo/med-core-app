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
]
