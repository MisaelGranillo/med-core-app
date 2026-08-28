/*
 * Plan de Estudios — Medicina, Universidad Autónoma de Durango (UAD)
 * Modalidad Mixta-Virtual · RVOE Federal 20261019 · 14 periodos / 7 años
 *
 * ┌─ SOURCE NOTE ─────────────────────────────────────────────────────────┐
 * │ Fuente autoritativa: "ANEXO 2 · MAPA CURRICULAR · LICENCIATURA EN       │
 * │ MEDICINA GENERAL · MODALIDAD MIXTA" (documento oficial UAD).            │
 * │ Las CLAVES (`code`) y los nombres se transcriben de ese mapa.           │
 * │                                                                         │
 * │ El mapa oficial CORRIGE la hoja preliminar usada antes, que traía       │
 * │ erratas. Se alinearon con el documento oficial:                         │
 * │  • periodo 10: "Décimo Semestre" (no "Cuatrimestre").                    │
 * │  • "Sesiones Anatomoclínicas IV" (no "Seciones Anatomoclinicas").        │
 * │  • periodo 13: "Treceavo Semestre" (no "Terceavo").                      │
 * │  • "Traumatología", "Imagenología", "Ginecología", "Nosología"          │
 * │    (el mapa oficial no les añade el sufijo "I" / "y Ortopedia").         │
 * │  • Servicio Social: el mapa no numera los periodos 13/14.                │
 * │                                                                         │
 * │ Las claves del periodo 10 (PE010062…) se transcriben VERBATIM del mapa. │
 * │ Los `id` (slugs) son estables y NO cambian aunque se corrija un nombre; │
 * │ sirven como clave de enlace profundo.                                    │
 * │                                                                         │
 * │ Fichas y temario (`content`) de Anatomía I e Inglés Médico I tomados de │
 * │ sus Programas Académicos oficiales UAD (Campus Virtual).                 │
 * └─────────────────────────────────────────────────────────────────────────┘
 */

import type { Plan } from './types'

export const uadMedicina: Plan = {
  id: 'uad-medicina',
  school: 'Universidad Autónoma de Durango',
  schoolShort: 'UAD',
  degree: 'Medicina',
  modality: 'Mixta-Virtual',
  rvoe: '20261019',
  durationLabel: '7 años',
  periodLabel: 'Semestre',
  periods: [
    {
      index: 1,
      label: 'Primer Semestre',
      subjects: [
        {
          id: 'anatomia-humana-diseccion-1',
          name: 'Anatomía Humana y Disección I',
          code: 'AN01001',
          hasLab: true,
          tags: ['anatomia'],
          topicIds: ['anatomia-generalidades', 'huesos-craneo', 'huesos-cara-hioides', 'columna-vertebral'],
          content: {
            area: 'Ciencias Básicas',
            credits: 13,
            teacherHours: 128,
            independentHours: 80,
            modality: 'Virtual · Teórico-Práctico',
            description:
              'El alumno aprende la conformación del cuerpo humano mediante el estudio teórico-práctico, la integración de los órganos en aparatos y sistemas y sus relaciones entre sí. La disección en cadáver permite el conocimiento directo y la elaboración de correlaciones anatomo-clínicas y terapéuticas. Escenario educativo: plataformas de videoconferencia y Mesa Anatomage.',
            competencia:
              'El alumno reconoce, traslada y relaciona la estructura de cada uno de los huesos y músculos del cuerpo, en un ámbito de compromiso e interés cognitivo, para valorar la función y participar en la elaboración de diagnósticos y tratamientos de calidad.',
            temario: [
              {
                title: '1. Conceptos generales de anatomía',
                items: [
                  'Métodos de estudio de la anatomía',
                  'Terminología anatómica y médica',
                ],
              },
              {
                title: '2. Planos anatómicos del cuerpo humano',
                items: [
                  'Posición y planos anatómicos',
                  'Términos de relación y comparación',
                  'Términos de lateralidad y movimiento',
                  'Variaciones anatómicas',
                ],
              },
              {
                title: '3. Osteología',
                items: [
                  'Desarrollo y crecimiento de los huesos; constitución del esqueleto',
                  'Huesos de la cabeza: cráneo y cara; hueso hioides',
                  'Columna vertebral: cervicales, dorsales, torácicas, sacras y coccígeas',
                  'Esqueleto del tórax: esternón y costillas',
                  'Esqueleto del miembro superior: hombro, brazo y mano',
                  'Esqueleto del miembro inferior: pelvis, fémur, tibia, peroné y pie',
                ],
              },
              {
                title: '4. Artrología',
                items: [
                  'Tipos de articulaciones',
                  'Articulaciones de la cabeza y la columna vertebral',
                  'Articulaciones del tórax',
                  'Articulaciones del miembro superior e inferior',
                ],
              },
              {
                title: '5. Miología',
                items: [
                  'Tipos de músculos, inserciones y anexos',
                  'Músculos de la cabeza, cuello y región hioidea',
                  'Músculos superficiales cervicales, dorsales y lumbares',
                  'Músculos del tórax y diafragma',
                  'Músculos del abdomen, región inguinal y pelvis',
                  'Músculos del miembro superior e inferior',
                ],
              },
            ],
            // SOURCE NOTE: temario transcrito VERBATIM del temario del PDF 1
            // (diapositivas del Dr. Soto Pacheco). La columna vertebral figura en
            // la Semana 1 por ser el temario oficial, aunque su Topic/reactivos se
            // cargan en Fase 2 (jue-vie de la semana), no hoy.
            semanas: [
              {
                number: 1,
                title: 'Conceptos generales, planos anatómicos y Osteología I',
                competencia:
                  'Capacidad para obtener, analizar, organizar y evaluar críticamente la información acerca de las características morfofuncionales a nivel macroscópico de los huesos de la cabeza y de la columna vertebral en condiciones normales y patológicas.',
                temas: [
                  'Conceptos generales de anatomía: métodos de estudio; terminología anatómica y médica',
                  'Planos anatómicos: posición y planos; términos de relación, lateralidad y movimiento; variaciones anatómicas',
                  'Osteología: desarrollo y crecimiento de los huesos; constitución general del esqueleto',
                  'Huesos de la cabeza: cráneo, cara y hueso hioides',
                  'Columna vertebral: vértebras cervicales, dorsales/torácicas, sacras y coccígeas',
                ],
                topicIds: ['anatomia-generalidades', 'huesos-craneo', 'huesos-cara-hioides', 'columna-vertebral'],
              },
              {
                number: 2,
                title: 'Osteología II: tórax y miembros',
                // COMPLETA: se impartieron las Clases 1 (tórax óseo), 2 (miembro
                // superior óseo), 3 (hueso coxal) y 4 (miembro inferior óseo:
                // fémur, tibia, peroné y pie). Semana 2 de osteología cubierta;
                // lo siguiente es artrología y miología (Semana 3).
                estado: 'impartido',
                topicIds: ['torax-oseo', 'miembro-superior-oseo', 'hueso-coxal', 'miembro-inferior-oseo'],
                temas: [
                  'Clase 1 (impartida): esqueleto del tórax — esternón y costillas',
                  'Clase 2 (impartida): esqueleto del miembro superior — clavícula, escápula, húmero, radio, cúbito y mano',
                  'Clase 3 (impartida): hueso coxal (pelvis ósea) — ilion, isquion, pubis y acetábulo',
                  'Clase 4 (impartida): miembro inferior óseo — fémur, tibia, peroné (fíbula) y huesos del pie',
                ],
                fuentes: [
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Tórax, Esqueleto del tórax, libro 45–57 (PDF 69–81)', nota: 'Caja torácica, esternón, costillas típicas y especiales.' },
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Miembro superior, Huesos del miembro superior, libro 398–408 (PDF 422–432)', nota: 'Clavícula, escápula, húmero, radio, cúbito y huesos de la mano.' },
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Pelvis y Periné, Cintura pélvica (pelvis ósea / hueso coxal), libro 196–200 (PDF 220–224)', nota: 'Hueso coxal: ilion, isquion, pubis y acetábulo; fig. 3-2 «Hueso coxal».' },
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Miembro inferior, Huesos del miembro inferior, libro 311–317 (PDF 335–341)', nota: 'Fémur, tibia, peroné (fíbula) y huesos del pie (tarso, metatarso y falanges).' },
                ],
              },
              {
                number: 3,
                title: 'Artrología y Miología I',
                // COMPLETA: Artrología (Clases 1–3, con las articulaciones del
                // pie) y Miología I (Clases 4–5: generalidades y músculos de
                // cabeza, cuello, dorso y diafragma). Miología II (abdomen,
                // pelvis y miembros) queda para la Semana 4.
                estado: 'impartido',
                topicIds: ['artrologia-generalidades', 'articulacion-temporomandibular', 'articulaciones-columna', 'articulaciones-miembro-superior', 'articulaciones-miembro-inferior', 'miologia-generalidades', 'musculos-masticacion', 'musculos-cara-craneo', 'musculos-cuello-nuca', 'musculos-dorso', 'musculos-diafragma'],
                temas: [
                  'Clases 1–3 (impartidas): artrología — clasificación, ATM, columna y articulaciones de los miembros (incluido el pie)',
                  'Clase 4–5 (impartidas): Miología I — generalidades del músculo; masticación (V3); mímica (VII); cuello, nuca, escalenos y prevertebrales; dorso; diafragma',
                  'Por impartir (Miología II, Semana 4): músculos del abdomen y región inguinal, pelvis y miembros superior e inferior',
                ],
                fuentes: [
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Dorso, Articulaciones de la columna vertebral, libro 269–276 (PDF 293–300)', nota: 'Discos IV, ligamentos longitudinales, cigapofisarias, craneovertebrales.' },
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Miembro superior, Articulaciones del miembro superior, libro 446–460 (PDF 470–484)', nota: 'Esternoclavicular, hombro, codo, muñeca y mano.' },
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Miembro inferior, Articulaciones del miembro inferior, libro 343–360 (PDF 367–384)', nota: 'Cadera, rodilla, tibiofibulares, tobillo y pie.' },
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Cabeza, Articulación temporomandibular (ATM) y músculos masticatorios, libro 543–549 (PDF 567–573)', nota: 'ATM y músculos de la masticación (fosa infratemporal).' },
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Dorso, Músculos del dorso, libro 295–305 (PDF 319–329)', nota: 'Extrínsecos, intrínsecos y erectores de la columna.' },
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Tórax, Diafragma, libro 77–85 (PDF 101–109)', nota: 'Porciones, orificios (T8/T10/T12) y nervio frénico.' },
                ],
              },
              {
                number: 4,
                title: 'Miología II: pared abdominal y miembros',
                // COMPLETA salvo el pie: la Clase 4 cerró muslo y pierna; los
                // músculos intrínsecos del pie se impartían en la sesión siguiente
                // (parche pendiente). Cierra Anatomía Humana y Disección I.
                estado: 'impartido',
                topicIds: ['musculos-pared-abdominal', 'musculos-hombro-brazo', 'musculos-antebrazo-mano', 'musculos-cadera-muslo', 'musculos-pierna-pie'],
                temas: [
                  'Clase 1 (impartida): pared abdominal anterolateral (oblicuos, transverso, recto, piramidal; Camper/Scarpa, línea alba, Petit) y posterior (iliopsoas, cuadrado lumbar)',
                  'Clase 2 (impartida): miembro superior — región pectoral, dorso, hombro, manguito rotador (SITS) y brazo',
                  'Clase 3 (impartida): antebrazo posterior y mano (tenar, hipotenar, lumbricales, interóseos); glúteos y rotadores externos',
                  'Clase 4 (impartida): muslo (3 compartimientos, pata de ganso) y pierna (3 compartimientos, tendón de Aquiles)',
                  'Pendiente (parche): músculos intrínsecos del pie (planta y dorso), que cerraban en la sesión siguiente',
                ],
                fuentes: [
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Abdomen, Músculos de la pared anterolateral y posterior, libro 189–210 (PDF 213–234)', nota: 'Oblicuos, transverso, recto, vaina del recto, línea alba, iliopsoas y cuadrado lumbar.' },
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Miembro superior, Músculos, libro 408–446 (PDF 432–470)', nota: 'Pectoral, escápulo-humerales, manguito rotador, brazo, antebrazo y mano.' },
                  { title: 'Moore — Anatomía con orientación clínica', file: 'Moore Anatomía.pdf', paginas: 'cap. Miembro inferior, Músculos, libro 317–343 (PDF 341–367)', nota: 'Glúteos, rotadores externos, compartimientos del muslo y de la pierna.' },
                ],
              },
            ],
            bibliografia: [
              { title: 'Anatomía con orientación clínica', author: 'Moore', editorial: 'Lippincott', year: '2015', tipo: 'básica', file: 'Moore Anatomía.pdf' },
              { title: 'Fundamentos de anatomía con orientación clínica', author: 'Moore', year: '2016', tipo: 'básica' },
              { title: 'Serie RT Anatomía', author: 'Chung, Kyung Won', editorial: 'Lippincott', year: '2016', tipo: 'básica', file: 'Serie RT Anatomía.pdf' },
              { title: 'Anatomía Clínica', author: 'Pró, Eduardo', editorial: 'Médica Panamericana', year: '2014', tipo: 'básica' },
              { title: 'Anatomía Humana', author: 'Quiroz Gutiérrez', editorial: 'Porrúa', year: '2003', tipo: 'complementaria', file: 'Tratado_de_Anatomia_Humana_de_Quiroz_Tom.pdf' },
              { title: 'Anatomía Humana', author: 'Latarjet · Ruiz', editorial: 'Médica Panamericana', year: '2009', tipo: 'complementaria' },
              { title: 'Sobotta · Atlas de Anatomía Humana', author: 'Putz · Pabst', editorial: 'Médica Panamericana', year: '2009', tipo: 'complementaria' },
              { title: 'Atlas de Anatomía Humana', author: 'Netter', editorial: 'Elsevier Masson', year: '2007', tipo: 'complementaria', file: 'Atlas de Anatomía Humana.pdf' },
              { title: 'Anatomía clínica para estudiantes de medicina', author: 'Snell', editorial: 'McGraw Hill', year: '2002', tipo: 'complementaria' },
            ],
            materiales: [
              { title: 'Clase 1 — Generalidades de la Anatomía', file: 'Semana 1 - Clase 1 Generalidades.pdf', kind: 'Clase' },
              { title: 'Clase 2 — Huesos de la Cabeza', file: 'Semana 1 - Clase 2 Huesos de la Cabeza.pdf', kind: 'Clase' },
              { title: 'Clase 3 — Huesos de la Cara', file: 'Semana 1 - Clase 3 Huesos de la Cara.pdf', kind: 'Clase' },
              { title: 'Clase 4 — Columna Vertebral', file: 'Semana 1 - Clase 4 Columna Vertebral.pdf', kind: 'Clase' },
              { title: 'Semana 2 · Clase 1 — Tórax óseo (esternón y costillas)', file: 'Semana 2 - Clase 1 Torax Oseo.pdf', kind: 'Clase' },
              { title: 'Semana 2 · Clase 2 — Miembro superior óseo', file: 'Semana 2 - Clase 2 Miembro Superior Oseo.pdf', kind: 'Clase' },
              { title: 'Semana 2 · Clase 3 — Hueso coxal (pelvis ósea)', file: 'Semana 2 - Clase 3 Hueso Coxal.pdf', kind: 'Clase' },
              { title: 'Semana 2 · Clase 4 — Miembro inferior óseo (fémur, tibia, peroné y pie)', file: 'Semana 2 - Clase 4 Miembro Inferior Oseo.pdf', kind: 'Clase' },
              { title: 'Semana 3 · Clase 1 — Artrología: clasificación, ATM e inicio de columna', file: 'Semana 3 - Clase 1 Artrologia y ATM.pdf', kind: 'Clase' },
              { title: 'Semana 3 · Clase 2 — Articulaciones de la columna y del miembro superior', file: 'Semana 3 - Clase 2 Columna y Miembro Superior.pdf', kind: 'Clase' },
              { title: 'Semana 3 · Clase 3 — Articulaciones de la mano y del miembro inferior', file: 'Semana 3 - Clase 3 Mano y Miembro Inferior.pdf', kind: 'Clase' },
              { title: 'Semana 3 · Clase 4 — Miología I: generalidades y músculos de cabeza, cuello, dorso y diafragma', file: 'Semana 3 - Miologia I Musculos.pdf', kind: 'Clase' },
              { title: 'Semana 3 · Clase 5 — Músculos de cara y cuello (nariz, boca, nuca e hioideos)', file: 'Semana 3 - Clase 5 Musculos cara y cuello.pdf', kind: 'Clase' },
              { title: 'Semana 4 · Clases 1–2 — Miología II: pared abdominal y miembro superior', file: 'Semana 4 - Musculos Clases 1-2.pdf', kind: 'Clase' },
              { title: 'Semana 4 · Clase 3 — Miología II: mano, glúteos y muslo', file: 'Semana 4 - Musculos Clase 3.pdf', kind: 'Clase' },
              { title: 'Semana 4 · Caso Clínico — Ruptura del bíceps (signo de Popeye)', file: 'Semana 4 - Caso Clinico Biceps Popeye.pdf', kind: 'Caso clínico' },
              { title: 'Semana 4 · Proyecto Integrador — Tabla de 5+5 músculos (inserciones, arteria, vena y nervio)', file: 'Semana 4 - Proyecto Integrador Tabla Musculos.pdf', kind: 'Entrega' },
              { title: 'Semana 4 — Músculos (semana completa, incluye pie)', file: 'Semana 4 - Musculos (semana completa).pdf', kind: 'Clase' },
              { title: 'Manual de Anatomía I', file: 'MANUAL ANATOMIA I.pdf', kind: 'Manual' },
              { title: 'Manual de Anatomía Humana y su Disección 1', file: 'MANUAL DE ANATOMIA HUMANA Y SU DISECCION 1.pdf', kind: 'Manual' },
              { title: 'Programa Académico — Anatomía I', file: 'PROGRAMA ANATOMIA I.pdf', kind: 'Programa' },
              { title: 'Secuencia Didáctica — Anatomía I', file: 'SEC DID ANATOMIA I.pdf', kind: 'Programa' },
              { title: 'Formato UAD para entrega de trabajos', file: 'Formato UAD entrega de trabajos.pdf', kind: 'Formato' },
            ],
            recursos: [
              { label: 'Acland Anatomy', url: 'https://www.aclandanatomy.com/' },
              { label: 'Bates Visual Guide', url: 'https://batesvisualguide.com/' },
              { label: 'LWW Health Library', url: 'https://www.lwwhealthlibrary.com' },
              { label: '5-Minute Consult', url: 'https://5minuteconsult.com' },
            ],
          },
        },
        { id: 'bioquimica-1', name: 'Bioquímica I y su laboratorio', code: 'BQ01002', hasLab: true, tags: ['bioquimica'] },
        { id: 'genetica-basica', name: 'Genética Básica', code: 'GB01003' },
        { id: 'embriologia-1', name: 'Embriología I', code: 'EM01004', tags: ['anatomia'] },
        {
          id: 'ingles-medico-1',
          name: 'Inglés Médico I',
          code: 'IN01005',
          tags: ['ingles'],
          topicIds: ['ingles-medical-record', 'ingles-parts-of-speech', 'ingles-word-forms'],
          content: {
            area: 'Ciencias Sociomédicas',
            credits: 4,
            teacherHours: 32,
            independentHours: 32,
            modality: 'Virtual',
            description:
              'Introduce al estudiante en el idioma inglés aplicado a la medicina mediante el estudio, aplicación y discusión de artículos médicos actuales vinculados a las asignaturas del plan, especialmente las que cursa. Escenario: videoconferencias y plataformas virtuales propias de la UAD. Seriación subsecuente: Inglés Médico II.',
            competencia:
              'Conoce la importancia del idioma inglés a partir del manejo de información médica en ese idioma y obtiene las bases para el estudio posterior de información médica en inglés, con una actitud de responsabilidad, respeto y empatía.',
            temario: [
              { title: 'I. Introducción al idioma inglés en medicina', items: [] },
              {
                title: 'II. Terminología griega y latina útil en el lenguaje médico',
                items: ['Introducción', 'Reglas para la formación de plurales'],
              },
              {
                title: 'III. Gramática práctica utilizada en medicina',
                items: [
                  'Tiempos verbales · verbos modales',
                  'Estructuras condicionales · voz pasiva',
                  'Estilo indirecto · preguntas · infinitivo / sufijo –ing',
                  'Artículos · orden de palabras · proposiciones subordinadas',
                  'Adjetivos · preposiciones',
                ],
              },
              {
                title: 'IV. Acrónimos y abreviaturas',
                items: ['Oraciones comunes con abreviaturas', 'Listados de abreviaturas'],
              },
              { title: 'V. Errores frecuentes al hablar inglés en medicina', items: ['Denominaciones incorrectas y falsos cognados'] },
              { title: 'VI. Bibliografía científica', items: [] },
            ],
            semanas: [
              {
                number: 1,
                title: 'Introducción al idioma inglés en medicina',
                competencia:
                  'Identifica y aplica las bases para el uso del idioma inglés en medicina.',
                temas: [
                  'The Medical Record: componentes del expediente clínico y su equivalencia en español',
                  'Parts of Speech: las nueve categorías gramaticales con vocabulario médico',
                  'Word Forms & Phrasal Verbs: derivación verbo↔sustantivo↔adjetivo y verbos frasales clínicos',
                ],
                topicIds: ['ingles-medical-record', 'ingles-parts-of-speech', 'ingles-word-forms'],
              },
              {
                number: 2,
                title: 'Terminología griega y latina útil en el lenguaje médico',
                estado: 'impartido',
                topicIds: ['ingles-word-parts', 'ingles-plurals', 'ingles-abbreviations', 'ingles-healthcare-settings'],
                temas: [
                  'Clase 1 (impartida): construcción de términos — raíz, forma combinante, prefijo y sufijo; regla de la vocal de enlace',
                  'Clase 2 (impartida): interpretación de términos, pronunciación/ortografía y formación de plurales',
                  'Clase 3 (impartida): abreviaturas médicas, healthcare settings y repaso/cierre de la Unidad II (crossword, matching, build-a-term)',
                ],
                fuentes: [
                  { title: 'Medical Terminology — A Living Language', file: 'Medical Terminology - A Living Language 6th ed.pdf', paginas: 'cap. 1, libro 1–20 (PDF 29–48)', nota: 'Construcción de términos, interpretación, pronunciación y formación de plurales.' },
                  { title: 'Medical Terminology — Apéndice III + Medical Abbreviations (Studocu)', file: 'Medical Terminology - A Living Language 6th ed.pdf', paginas: 'Apéndice III, libro 560 (PDF 588)', nota: 'Abreviaturas médicas; case sensitivity y lista do-not-use (Clase 3).' },
                ],
              },
              {
                number: 3,
                title: 'Gramática práctica utilizada en medicina',
                estado: 'impartido',
                topicIds: ['ingles-verb-tenses', 'ingles-sentence-structure'],
                temas: [
                  'Clase 1 (impartida): artículos (a/an/the), verbo to be, preguntas y verbos regulares e irregulares',
                  'Clase 2 (impartida): presente y pasado simple, futuro simple, presente y pasado continuo',
                  'Clase 3 (impartida): tiempos perfectos, verbos modales, condicionales 0–3, voz pasiva y conjunciones subordinantes',
                  'Visto de forma breve: estilo indirecto e infinitivo/–ing (se refuerzan con el workbook)',
                ],
                fuentes: [
                  { title: 'Check Your English Vocabulary for Medicine', file: 'Check Your English Vocabulary for Medicine.pdf', paginas: 'workbook 10–24 (PDF 17–31)', nota: 'Gramática práctica: tiempos, modales y voz pasiva' },
                  { title: 'English Grammar in Use (Murphy)', nota: 'Referencia de gramática para tiempos, modales, condicionales y voz pasiva' },
                ],
              },
              {
                number: 4,
                title: 'Acrónimos, errores frecuentes y comunicación clínica',
                estado: 'impartido',
                topicIds: ['ingles-abbreviations', 'ingles-false-friends', 'ingles-clinical-communication', 'ingles-symptoms'],
                temas: [
                  'Clase 1 (impartida): IV. acrónimos y abreviaturas (origen, ventajas, riesgos ISMP/COFEPRIS/HIPAA) + V. errores frecuentes / collocations y falsos cognados',
                  'Clase 2 (impartida): voz pasiva (repaso), verbos frasales médicos, "have something done" y preguntas sobre el dolor',
                  'Clase 3 (impartida): síntomas de cold & flu y lista de verbos médicos regulares (alcance del examen)',
                  'Por impartir (Unidad VI): bibliografía científica (sigue en adelanto)',
                ],
                fuentes: [
                  { title: 'Medical Terminology — Apéndice III', file: 'Medical Terminology - A Living Language 6th ed.pdf', paginas: 'libro 560 (PDF 588)', nota: 'Abreviaturas' },
                  { title: 'Medical Abbreviations (Studocu)', file: 'Medical Abbreviations (Studocu).pdf', paginas: 'PDF 1–6', nota: 'Listado de abreviaturas por área' },
                  { title: 'Check Your English Vocabulary for Medicine', file: 'Check Your English Vocabulary for Medicine.pdf', paginas: 'workbook 26 y 30 (PDF 33 y 37)', nota: 'Falsos cognados y abreviaturas' },
                  { title: 'The Language of Medicine', file: 'The Language of Medicine.pdf', paginas: 'PDF 1–4', nota: 'El inglés como lingua franca de la medicina' },
                  { title: 'English as an International Language of Medicine', file: 'English as an international language of medicine.pdf', paginas: 'PDF 1–2' },
                  { title: 'Medical Record Keeping for Quality Patient Care', file: 'Medical record keeping for quality patient care.pdf', paginas: 'PDF 1–8' },
                ],
              },
            ],
            bibliografia: [
              { title: 'Colección hemerográfica UAD-UD-UDS en plataforma OVID® (190 recursos)', year: '2017', tipo: 'básica' },
            ],
            materiales: [
              { title: 'Clase 2 — The Medical Record', file: 'Semana 1 - Clase 2 The Medical Record.pdf', kind: 'Clase' },
              { title: 'Clase 3 — Parts of Speech & Word Forms', file: 'Semana 1 - Clase 3 Parts of Speech.pdf', kind: 'Clase' },
              { title: 'Proyecto Integrador Semana 1 — Why is English important…', file: 'Semana 1 - Proyecto Integrador.pdf', kind: 'Entrega' },
              { title: 'Caso Clínico 1 — Shortness of Breath', file: 'Semana 1 - Caso Clinico 1 Shortness of Breath.pdf', kind: 'Caso clínico' },
              { title: 'Semana 2 · Clase 1 — Terminología griega y latina', file: 'Semana 2 - Clase 1 Terminologia Griega y Latina.pdf', kind: 'Clase' },
              { title: 'Semana 2 · Clase 2 — Plurales, interpretación y pronunciación', file: 'Semana 2 - Clase 2 Plurales e Interpretacion.pdf', kind: 'Clase' },
              { title: 'Semana 2 · Clase 3 — Abreviaturas, healthcare settings y repaso', file: 'Semana 2 - Clase 3 Abreviaturas y Healthcare Settings.pdf', kind: 'Clase' },
              { title: 'Proyecto Integrador Semana 2 — Medical Terminology Project', file: 'Semana 2 - Proyecto Integrador Medical Terminology.pdf', kind: 'Entrega' },
              { title: 'Semana 3 · Clase 1 — Gramática: artículos, verbo to be y verbos', file: 'Semana 3 - Clase 1 Gramatica Articulos y Verbos.pdf', kind: 'Clase' },
              { title: 'Semana 3 · Clase 2 — Tiempos: presente, pasado, futuro y continuos', file: 'Semana 3 - Clase 2 Tiempos Simples y Continuos.pdf', kind: 'Clase' },
              { title: 'Semana 3 · Clase 3 — Perfectos, modales, condicionales, voz pasiva y subordinación', file: 'Semana 3 - Clase 3 Perfectos Modales Condicionales Pasiva.pdf', kind: 'Clase' },
              { title: 'Proyecto Integrador Semana III', file: 'Semana 3 - Proyecto Integrador.pdf', kind: 'Entrega' },
              { title: 'Semana 4 · Clase 1 — Abreviaturas, acrónimos y errores comunes', file: 'Semana 4 - Clase 1 Abreviaturas y Errores Comunes.pdf', kind: 'Clase' },
              { title: 'Semana 4 · Clase 2 — Verbos frasales, "have something done" y preguntas de dolor', file: 'Semana 4 - Clase 2 Phrasal Verbs y Have Something Done.pdf', kind: 'Clase' },
              { title: 'Semana 4 · Clase 3 — Síntomas de cold & flu y verbos regulares', file: 'Semana 4 - Clase 3 Sintomas y Verbos Regulares.pdf', kind: 'Clase' },
              { title: 'MIT Semana 4 (calificado por tutores)', file: 'Semana 4 - MIT.pdf', kind: 'Entrega' },
              { title: 'Medical Terminology — A Living Language (6.ª ed.)', file: 'Medical Terminology - A Living Language 6th ed.pdf', kind: 'Libro' },
              { title: 'Check Your English Vocabulary for Medicine', file: 'Check Your English Vocabulary for Medicine.pdf', kind: 'Cuaderno' },
              { title: 'The Language of Medicine', file: 'The Language of Medicine.pdf', kind: 'Referencia' },
              { title: 'Medical Abbreviations (Studocu)', file: 'Medical Abbreviations (Studocu).pdf', kind: 'Referencia' },
              { title: 'Useful Vocabulary for Medical Students and Practitioners', file: 'Useful Vocabulary for Medical Students and Practitioners.pdf', kind: 'Artículo' },
              { title: 'English as an International Language of Medicine', file: 'English as an international language of medicine.pdf', kind: 'Artículo' },
              { title: 'Importance of English for Medical Students', file: 'Importance of English for medical students.pdf', kind: 'Artículo' },
              { title: 'Importancia del Inglés en las Ciencias de la Salud', file: 'Importancia del Ingles en las Ciencias de la Salud.pdf', kind: 'Artículo' },
              { title: 'The Role of Medical English in Healthcare Education', file: 'The role of medical English in healthcare education.pdf', kind: 'Artículo' },
              { title: 'Medical Record Keeping for Quality Patient Care', file: 'Medical record keeping for quality patient care.pdf', kind: 'Artículo' },
              { title: 'Inglés Médico I — Programa académico', file: 'Ingles Medico I - Programa.pdf', kind: 'Programa' },
              { title: 'Inglés Médico I — Planeación', file: 'Ingles Medico I - Planeacion.pdf', kind: 'Planeación' },
            ],
            recursos: [
              // PDF de estudio público (28 KB) servido desde public/descargas/,
              // sin login. URL root-relative: funciona en dev y en medcore.icu.
              { label: 'Medical Terminology — Word Parts (PDF de estudio)', url: '/descargas/medical-terminology-word-parts.pdf' },
              { label: 'Grammar Cheat Sheet — tiempos, modales, condicionales y voz pasiva (PDF)', url: '/descargas/medical-english-grammar-cheatsheet.pdf' },
              { label: 'Abreviaturas médicas (461) — lista completa (PDF)', url: '/descargas/medical-abbreviations-enlex.pdf' },
              { label: 'OVID® (bibliografía básica)', url: 'https://www.ovid.com/' },
              { label: 'Bates Visual Guide', url: 'https://batesvisualguide.com/' },
              { label: 'LWW Health Library', url: 'https://www.lwwhealthlibrary.com' },
              { label: '5-Minute Consult', url: 'https://5minuteconsult.com' },
            ],
          },
        },
        { id: 'histologia-1', name: 'Histología I y su Laboratorio', code: 'HS01006', hasLab: true },
        { id: 'medicina-humanistica', name: 'Medicina Humanística', code: 'MH01007' },
      ],
    },
    {
      index: 2,
      label: 'Segundo Semestre',
      subjects: [
        { id: 'anatomia-humana-diseccion-2', name: 'Anatomía Humana y Disección II', code: 'AN02008', hasLab: true, tags: ['anatomia'] },
        { id: 'bioquimica-2', name: 'Bioquímica II y su laboratorio', code: 'BQ02009', hasLab: true, tags: ['bioquimica'] },
        { id: 'embriologia-2', name: 'Embriología II', code: 'EM02010', tags: ['anatomia'] },
        { id: 'histologia-2', name: 'Histología II y su laboratorio', code: 'HS02011', hasLab: true },
        { id: 'ingles-medico-2', name: 'Inglés Médico II', code: 'IN02012', tags: ['ingles'] },
        { id: 'neuroanatomia-1', name: 'Neuroanatomía I', code: 'NA02013', tags: ['anatomia', 'nervioso'] },
        { id: 'historia-filosofia-medicina', name: 'Historia y Filosofía de la Medicina', code: 'HF02014' },
      ],
    },
    {
      index: 3,
      label: 'Tercer Semestre',
      subjects: [
        { id: 'fisiologia-1', name: 'Fisiología I y su Laboratorio', code: 'FI03015', hasLab: true, tags: ['fisiologia'] },
        { id: 'epidemiologia-bioestadistica', name: 'Epidemiología y Bioestadística', code: 'EE03016', tags: ['salud-publica', 'investigacion'] },
        { id: 'microbiologia', name: 'Microbiología y su laboratorio', code: 'MP03017', hasLab: true },
        { id: 'neuroanatomia-2', name: 'Neuroanatomía II', code: 'NA03018', tags: ['anatomia', 'nervioso'] },
        { id: 'ingles-medico-3', name: 'Inglés Médico III', code: 'IN03019', tags: ['ingles'] },
        { id: 'informatica-aplicada-medicina', name: 'Informática aplicada a la Medicina', code: 'IA03020' },
        { id: 'farmacologia-1', name: 'Farmacología I', code: 'FA03021' },
      ],
    },
    {
      index: 4,
      label: 'Cuarto Semestre',
      subjects: [
        { id: 'fisiologia-2', name: 'Fisiología II y su laboratorio', code: 'FI04022', hasLab: true, tags: ['fisiologia'] },
        { id: 'salud-publica', name: 'Salud Pública', code: 'SP04023', tags: ['salud-publica'] },
        { id: 'parasitologia', name: 'Parasitología y su Laboratorio', code: 'PR04024', hasLab: true },
        { id: 'psicologia-medica', name: 'Psicología Médica', code: 'PM04025' },
        { id: 'aprendizaje-por-competencias', name: 'Aprendizaje por Competencias', code: 'AC04026' },
        { id: 'metodologia-investigacion', name: 'Metodología de la Investigación', code: 'MI04027', tags: ['investigacion'] },
        { id: 'farmacologia-2', name: 'Farmacología II', code: 'FA04028' },
      ],
    },
    {
      index: 5,
      label: 'Quinto Semestre',
      subjects: [
        { id: 'introduccion-clinica-1', name: 'Introducción a la Clínica I', code: 'IC05029' },
        { id: 'patologia-1', name: 'Patología I', code: 'PG05030' },
        { id: 'nosologia-1', name: 'Nosología', code: 'NS05031' },
        { id: 'tecnicas-quirurgicas', name: 'Técnicas Quirúrgicas', code: 'TQ05032' },
        { id: 'medicina-basada-evidencias', name: 'Medicina Basada en Evidencias', code: 'ME05033', tags: ['investigacion'] },
        { id: 'bioetica', name: 'Bioética', code: 'BO05034' },
      ],
    },
    {
      index: 6,
      label: 'Sexto Semestre',
      subjects: [
        { id: 'introduccion-clinica-2', name: 'Introducción a la Clínica II', code: 'IC06035' },
        { id: 'patologia-2', name: 'Patología II', code: 'PG06036' },
        { id: 'infectologia', name: 'Infectología', code: 'IF06037' },
        { id: 'inmunologia', name: 'Inmunología', code: 'IN06038' },
        { id: 'aprendizaje-basado-problemas', name: 'Aprendizaje basado en problemas', code: 'AP06039' },
        { id: 'medicina-legal-trabajo', name: 'Medicina legal y del trabajo', code: 'ML06040' },
      ],
    },
    {
      index: 7,
      label: 'Séptimo Semestre',
      subjects: [
        { id: 'psiquiatria', name: 'Psiquiatría', code: 'PS07041' },
        { id: 'neurologia', name: 'Neurología', code: 'NE07042', tags: ['nervioso'] },
        { id: 'cardiologia', name: 'Cardiología', code: 'CA07043', tags: ['cardiovascular'] },
        { id: 'gastroenterologia', name: 'Gastroenterología', code: 'GA07044', tags: ['digestivo'] },
        { id: 'sesiones-anatomoclinicas-1', name: 'Sesiones Anatomoclínicas I', code: 'SA07045', tags: ['anatomia'] },
        { id: 'nutricion-medica', name: 'Nutrición Médica', code: 'NM07046' },
        { id: 'urgencias-medico-quirurgicas', name: 'Urgencias Médico Quirúrgicas', code: 'UM07047' },
      ],
    },
    {
      index: 8,
      label: 'Octavo Semestre',
      subjects: [
        { id: 'cirugia-general', name: 'Cirugía General', code: 'CG08048' },
        { id: 'oftalmologia', name: 'Oftalmología', code: 'OF08049' },
        { id: 'otorrinolaringologia', name: 'Otorrinolaringología', code: 'OT08050' },
        { id: 'traumatologia-ortopedia', name: 'Traumatología', code: 'TR08051', tags: ['musculoesqueletico'] },
        { id: 'sesiones-anatomoclinicas-2', name: 'Sesiones Anatomoclínicas II', code: 'SA08052', tags: ['anatomia'] },
        { id: 'imagenologia-1', name: 'Imagenología', code: 'IM08053' },
        { id: 'medicina-fisica-rehabilitacion', name: 'Medicina Física y Rehabilitación', code: 'MF08054' },
      ],
    },
    {
      index: 9,
      label: 'Noveno Semestre',
      subjects: [
        { id: 'ginecologia-1', name: 'Ginecología', code: 'GI09055' },
        { id: 'obstetricia', name: 'Obstetricia', code: 'OB09056' },
        { id: 'endocrinologia', name: 'Endocrinología', code: 'EN09057', tags: ['endocrino'] },
        { id: 'dermatologia', name: 'Dermatología', code: 'DE09058', tags: ['tegumentario'] },
        { id: 'sesiones-anatomoclinicas-3', name: 'Sesiones Anatomoclínicas III', code: 'SA09059', tags: ['anatomia'] },
        { id: 'neumologia', name: 'Neumología', code: 'NE09060', tags: ['respiratorio'] },
        { id: 'oncologia-general', name: 'Oncología General', code: 'OG09061' },
      ],
    },
    {
      index: 10,
      label: 'Décimo Semestre', // SOURCE NOTE: el mapa oficial lo rotula "Semestre" (la hoja preliminar decía "Cuatrimestre").
      subjects: [
        { id: 'pediatria-1', name: 'Pediatría I', code: 'PE010062' },
        { id: 'pediatria-2', name: 'Pediatría II', code: 'PE010063' },
        { id: 'medicina-familiar', name: 'Medicina Familiar', code: 'MF010064' },
        { id: 'nefrologia', name: 'Nefrología', code: 'NF010065', tags: ['urinario'] },
        { id: 'sesiones-anatomoclinicas-4', name: 'Sesiones Anatomoclínicas IV', code: 'SA010066', tags: ['anatomia'] },
        { id: 'geriatria', name: 'Geriatría', code: 'GR010067' },
        { id: 'medicina-critica', name: 'Medicina Crítica', code: 'MC010068' },
      ],
    },
    {
      index: 11,
      label: 'Onceavo Semestre',
      subjects: [
        { id: 'internado-medico-pregrado-1', name: 'Internado Médico de Pregrado I' },
      ],
    },
    {
      index: 12,
      label: 'Doceavo Semestre',
      subjects: [
        { id: 'internado-medico-pregrado-2', name: 'Internado Médico de Pregrado II' },
      ],
    },
    {
      index: 13,
      label: 'Treceavo Semestre', // SOURCE NOTE: corregido de "Terceavo" (errata de la hoja preliminar).
      subjects: [
        { id: 'servicio-social-2', name: 'Servicio Social' }, // El mapa oficial no numera los periodos de Servicio Social.
      ],
    },
    {
      index: 14,
      label: 'Catorceavo Semestre',
      subjects: [
        { id: 'servicio-social-1', name: 'Servicio Social' },
      ],
    },
  ],
}
