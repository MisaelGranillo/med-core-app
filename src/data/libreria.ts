/* Librería de MedCore: catálogo de los libros en PDF (carpeta UAD/Libros +
 * bibliografía de cada materia), organizado como una biblioteca médica real
 * con la Clasificación de la National Library of Medicine (NLM).
 *
 * Signatura topográfica = clase NLM + número + marca de autor (tabla Cutter
 * de la Library of Congress, a partir del apellido del primer autor o de la
 * institución) + año. Ej.: QS 4 M66 2015.
 *
 * Datos verificados en la portada / página legal de cada PDF (oct 2026).
 * Los archivos viven en la biblioteca R2 (libraryUrl); los de terceros con
 * copyright están en privado/ (solo el dueño, detrás de Cloudflare Access). */

import { LIBRARY_PRIVATE, libraryUrl } from './plans'

/* Clases NLM usadas, en el orden de la estantería (Q preclínicas, W clínicas). */
export const NLM_CLASSES = [
  { code: 'QS', label: 'Anatomía humana', hint: 'Anatomía, histología y embriología' },
  { code: 'QT', label: 'Fisiología', hint: 'Fisiología humana' },
  { code: 'QU', label: 'Bioquímica', hint: 'Bioquímica, biología celular y molecular' },
  { code: 'QV', label: 'Farmacología', hint: 'Farmacología y terapéutica' },
  { code: 'QY', label: 'Patología clínica', hint: 'Laboratorio clínico' },
  { code: 'W', label: 'Profesiones de la salud', hint: 'Terminología médica' },
  { code: 'WG', label: 'Sistema cardiovascular', hint: 'Electrocardiografía y reanimación' },
  { code: 'WL', label: 'Sistema nervioso', hint: 'Neuroanatomía y neurología' },
  { code: 'WN', label: 'Radiología', hint: 'Radiología e imagenología diagnóstica' },
  { code: 'WO', label: 'Cirugía', hint: 'Cirugía, anestesia e instrumental quirúrgico' },
  { code: 'WU', label: 'Odontología', hint: 'Odontología e implantología' },
] as const

export type NlmClass = (typeof NLM_CLASSES)[number]['code']

export type Formato = 'Libro' | 'Atlas' | 'Manual' | 'Cuaderno de ejercicios' | 'Catálogo'

export interface LibroCatalogo {
  id: string
  titulo: string
  serie?: string
  autores: string[]          // forma «Apellido, Nombre»; el primero es el asiento principal
  asiento: string            // apellido o institución para la marca de autor
  edicion?: string
  editorial: string
  anio?: string              // undefined → «s. f.» (sin fecha)
  paginas: number
  idioma: 'Español' | 'Inglés'
  formato: Formato
  clase: NlmClass
  numero: string             // número de clase NLM (4 = obras generales, 17 = atlas, 18.2 = repaso…)
  marcaObra?: string         // letra de obra cuando dos libros comparten marca de autor
  materias: string[]         // ids de materia del plan (para filtrar)
  archivo: { subjectId: string; file: string }
  nota?: string
}

export const LIBROS: LibroCatalogo[] = [
  // ── QS · Anatomía humana ─────────────────────────────────────────
  {
    id: 'moore-fundamentos', titulo: 'Fundamentos de anatomía con orientación clínica',
    autores: ['Moore, Keith L.', 'Agur, Anne M. R.', 'Dalley, Arthur F.'], asiento: 'Moore',
    edicion: '5.ª ed.', editorial: 'Wolters Kluwer', anio: '2015', paginas: 710, idioma: 'Español',
    formato: 'Libro', clase: 'QS', numero: '4', materias: ['anatomia-humana-diseccion-1'],
    archivo: { subjectId: 'anatomia-humana-diseccion-1', file: 'Moore Anatomía.pdf' },
  },
  {
    id: 'quiroz-anatomia', titulo: 'Anatomía humana', autores: ['Quiroz Gutiérrez, Fernando'], asiento: 'Quiroz',
    edicion: 'Tomo I', editorial: 'Porrúa', anio: '2003', paginas: 499, idioma: 'Español',
    formato: 'Libro', clase: 'QS', numero: '4', materias: ['anatomia-humana-diseccion-1'],
    archivo: { subjectId: 'anatomia-humana-diseccion-1', file: 'Tratado_de_Anatomia_Humana_de_Quiroz_Tom.pdf' },
    nota: 'Tomo I: generalidades, osteología, artrología y miología.',
  },
  {
    id: 'olinger-atlas', titulo: 'Atlas de anatomía humana', autores: ['Olinger, Anthony B.'], asiento: 'Olinger',
    edicion: '1.ª ed.', editorial: 'Wolters Kluwer', anio: '2016', paginas: 624, idioma: 'Español',
    formato: 'Atlas', clase: 'QS', numero: '17', materias: ['anatomia-humana-diseccion-1'],
    archivo: { subjectId: 'anatomia-humana-diseccion-1', file: 'Atlas de Anatomía Humana.pdf' },
  },
  {
    id: 'chung-rt-anatomia', titulo: 'Anatomía', serie: 'Serie Revisión de Temas',
    autores: ['Chung, Kyung Won', 'Chung, Harold M.', 'Halliday, Nancy L.'], asiento: 'Chung',
    edicion: '8.ª ed.', editorial: 'Wolters Kluwer', anio: '2016', paginas: 544, idioma: 'Español',
    formato: 'Libro', clase: 'QS', numero: '18.2', materias: ['anatomia-humana-diseccion-1'],
    archivo: { subjectId: 'anatomia-humana-diseccion-1', file: 'Serie RT Anatomía.pdf' },
  },
  {
    id: 'uad-manual-anatomia-1', titulo: 'Manual de Anatomía I', autores: ['Universidad Autónoma de Durango'],
    asiento: 'Universidad', editorial: 'Universidad Autónoma de Durango', paginas: 111, idioma: 'Español',
    formato: 'Manual', clase: 'QS', numero: '130', marcaObra: 'm', materias: ['anatomia-humana-diseccion-1'],
    archivo: { subjectId: 'anatomia-humana-diseccion-1', file: 'MANUAL ANATOMIA I.pdf' },
  },
  {
    id: 'uad-manual-diseccion-1', titulo: 'Manual de Anatomía Humana y su Disección 1',
    autores: ['Universidad Autónoma de Durango'], asiento: 'Universidad', editorial: 'Universidad Autónoma de Durango',
    paginas: 55, idioma: 'Español', formato: 'Manual', clase: 'QS', numero: '130', marcaObra: 'ma',
    materias: ['anatomia-humana-diseccion-1'],
    archivo: { subjectId: 'anatomia-humana-diseccion-1', file: 'MANUAL DE ANATOMIA HUMANA Y SU DISECCION 1.pdf' },
  },
  {
    id: 'junqueira-histologia', titulo: 'Histología básica: texto y atlas',
    autores: ['Junqueira, L. C.', 'Carneiro, José'], asiento: 'Junqueira',
    edicion: '12.ª ed.', editorial: 'Médica Panamericana', anio: '2015', paginas: 557, idioma: 'Español',
    formato: 'Libro', clase: 'QS', numero: '504', materias: ['histologia-1'],
    archivo: { subjectId: 'histologia-1', file: 'Histologia_Basica_Texto_y_Atlas_Junqueira_Carneiro.pdf' },
  },
  {
    id: 'gartner-rt-histologia', titulo: 'Biología celular e histología', serie: 'Serie Revisión de Temas',
    autores: ['Gartner, Leslie P.', 'Hiatt, James L.'], asiento: 'Gartner',
    edicion: '7.ª ed.', editorial: 'Wolters Kluwer', anio: '2015', paginas: 434, idioma: 'Español',
    formato: 'Libro', clase: 'QS', numero: '504', materias: ['histologia-1'],
    archivo: { subjectId: 'libreria', file: 'Gartner - Biologia celular e histologia 7a ed.pdf' },
  },
  {
    id: 'dudek-rt-embriologia', titulo: 'Embriología', serie: 'Serie Revisión de Temas',
    autores: ['Dudek, Ronald W.'], asiento: 'Dudek',
    edicion: '6.ª ed.', editorial: 'Wolters Kluwer', anio: '2015', paginas: 325, idioma: 'Español',
    formato: 'Libro', clase: 'QS', numero: '604', materias: ['embriologia-1'],
    archivo: { subjectId: 'libreria', file: 'Dudek - Embriologia 6a ed.pdf' },
  },

  // ── QT · Fisiología ──────────────────────────────────────────────
  {
    id: 'costanzo-rt-fisiologia', titulo: 'Fisiología', serie: 'Serie Revisión de Temas',
    autores: ['Costanzo, Linda S.'], asiento: 'Costanzo',
    edicion: '7.ª ed.', editorial: 'Wolters Kluwer', anio: '2019', paginas: 478, idioma: 'Español',
    formato: 'Libro', clase: 'QT', numero: '18.2', materias: [],
    archivo: { subjectId: 'libreria', file: 'Costanzo - Fisiologia 7a ed.pdf' },
  },

  // ── QU · Bioquímica ──────────────────────────────────────────────
  {
    id: 'mathews-bioquimica', titulo: 'Bioquímica',
    autores: ['Mathews, Christopher K.', 'Van Holde, K. E.', 'Ahern, Kevin G.'], asiento: 'Mathews',
    edicion: '3.ª ed.', editorial: 'Pearson Educación', anio: '2002', paginas: 1374, idioma: 'Español',
    formato: 'Libro', clase: 'QU', numero: '4', materias: ['bioquimica-1'],
    archivo: { subjectId: 'bioquimica-1', file: 'Mathews - Bioquimica 3a ed.pdf' },
  },
  {
    id: 'harper-bioquimica', titulo: 'Harper. Bioquímica ilustrada',
    autores: ['Rodwell, Victor W.', 'Bender, David A.', 'Botham, Kathleen M.', 'Kennelly, Peter J.', 'Weil, P. Anthony'],
    asiento: 'Rodwell', edicion: '30.ª ed.', editorial: 'McGraw-Hill', anio: '2016', paginas: 817, idioma: 'Español',
    formato: 'Libro', clase: 'QU', numero: '4', materias: ['bioquimica-1'],
    archivo: { subjectId: 'bioquimica-1', file: 'Harper - Bioquimica Ilustrada 30a ed.pdf' },
  },
  {
    // El PDF no trae la página legal: año según los catálogos bibliotecarios (ISBN 978-84-282-1667-8).
    id: 'nelson-lehninger-bioquimica', titulo: 'Lehninger. Principios de bioquímica',
    autores: ['Nelson, David L.', 'Cox, Michael M.'], asiento: 'Nelson',
    edicion: '7.ª ed.', editorial: 'Ediciones Omega', anio: '2019', paginas: 1235, idioma: 'Español',
    formato: 'Libro', clase: 'QU', numero: '4', materias: ['bioquimica-1'],
    archivo: { subjectId: 'libreria', file: 'Nelson - Lehninger Principios de bioquimica 7a ed.pdf' },
  },
  {
    id: 'lieberman-rt-bioquimica', titulo: 'Bioquímica, biología molecular y genética', serie: 'Serie Revisión de Temas',
    autores: ['Lieberman, Michael A.', 'Ricer, Rick'], asiento: 'Lieberman',
    edicion: '6.ª ed.', editorial: 'Wolters Kluwer', anio: '2015', paginas: 461, idioma: 'Español',
    formato: 'Libro', clase: 'QU', numero: '18.2', materias: ['bioquimica-1', 'genetica-basica'],
    archivo: { subjectId: 'bioquimica-1', file: 'Lieberman - Bioquimica Biologia Molecular y Genetica.pdf' },
  },

  // ── QV · Farmacología ────────────────────────────────────────────
  {
    id: 'brunton-goodman-gilman', titulo: 'Goodman & Gilman. Las bases farmacológicas de la terapéutica',
    autores: ['Brunton, Laurence L.', 'Hilal-Dandan, Randa', 'Knollmann, Björn C.'], asiento: 'Brunton',
    edicion: '13.ª ed.', editorial: 'McGraw-Hill', anio: '2019', paginas: 1441, idioma: 'Español',
    formato: 'Libro', clase: 'QV', numero: '4', materias: [],
    archivo: { subjectId: 'libreria', file: 'Brunton - Goodman y Gilman Bases farmacologicas 13a ed.pdf' },
  },
  {
    id: 'golan-principios-farmacologia', titulo: 'Principios de farmacología: bases fisiopatológicas del tratamiento farmacológico',
    autores: ['Golan, David E.', 'Tashjian, Armen H.', 'Armstrong, Ehrin J.', 'Armstrong, April W.'], asiento: 'Golan',
    edicion: '3.ª ed.', editorial: 'Wolters Kluwer', anio: '2012', paginas: 972, idioma: 'Español',
    formato: 'Libro', clase: 'QV', numero: '4', materias: [],
    archivo: { subjectId: 'libreria', file: 'Golan - Principios de farmacologia 3a ed.pdf' },
  },
  {
    id: 'katzung-farmacologia', titulo: 'Farmacología básica y clínica',
    autores: ['Katzung, Bertram G.'], asiento: 'Katzung',
    edicion: '14.ª ed.', editorial: 'McGraw-Hill', anio: '2019', paginas: 1265, idioma: 'Español',
    formato: 'Libro', clase: 'QV', numero: '4', materias: [],
    archivo: { subjectId: 'libreria', file: 'Katzung - Farmacologia basica y clinica 14a ed.pdf' },
  },
  {
    id: 'whalen-lir-farmacologia', titulo: 'Farmacología', serie: 'Lippincott Illustrated Reviews',
    autores: ['Whalen, Karen'], asiento: 'Whalen',
    edicion: '7.ª ed.', editorial: 'Wolters Kluwer', anio: '2019', paginas: 1187, idioma: 'Español',
    formato: 'Libro', clase: 'QV', numero: '18.2', materias: [],
    archivo: { subjectId: 'libreria', file: 'Whalen - Farmacologia LIR 7a ed.pdf' },
  },
  {
    id: 'rosenfeld-rt-farmacologia', titulo: 'Farmacología', serie: 'Serie Revisión de Temas',
    autores: ['Rosenfeld, Gary C.', 'Loose, David S.'], asiento: 'Rosenfeld',
    edicion: '6.ª ed.', editorial: 'Wolters Kluwer', anio: '2015', paginas: 461, idioma: 'Español',
    formato: 'Libro', clase: 'QV', numero: '18.2', materias: [],
    archivo: { subjectId: 'libreria', file: 'Rosenfeld - Farmacologia 6a ed.pdf' },
  },
  {
    id: 'dosispedia-antibioticos', titulo: 'Manual práctico. Antibióticos',
    autores: ['Rodríguez, Lorenz', 'Farias Monteiro, Laryssa'], asiento: 'Rodríguez',
    editorial: 'DosisPedia', paginas: 65, idioma: 'Español',
    formato: 'Manual', clase: 'QV', numero: '350', materias: [],
    archivo: { subjectId: 'libreria', file: 'DosisPedia - Manual practico Antibioticos.pdf' },
    nota: 'Familias de antibióticos, espectro y esquemas empíricos por infección.',
  },

  // ── QY · Patología clínica ───────────────────────────────────────
  {
    id: 'dosispedia-laboratorio', titulo: 'Manual práctico. Pruebas de laboratorio',
    autores: ['DosisPedia'], asiento: 'DosisPedia',
    editorial: 'DosisPedia', paginas: 78, idioma: 'Español',
    formato: 'Manual', clase: 'QY', numero: '39', materias: [],
    archivo: { subjectId: 'libreria', file: 'DosisPedia - Manual practico Pruebas de laboratorio.pdf' },
    nota: 'Valores de referencia e interpretación: hemograma, química sanguínea, electrolitos, gasometría, uroanálisis y heces.',
  },

  // ── W · Profesiones de la salud (terminología) ───────────────────
  {
    id: 'fremgen-medical-terminology', titulo: 'Medical Terminology: A Living Language',
    autores: ['Fremgen, Bonnie F.', 'Frucht, Suzanne S.'], asiento: 'Fremgen',
    edicion: '6th ed.', editorial: 'Pearson', anio: '2016', paginas: 669, idioma: 'Inglés',
    formato: 'Libro', clase: 'W', numero: '15', materias: ['ingles-medico-1'],
    archivo: { subjectId: 'ingles-medico-1', file: 'Medical Terminology - A Living Language 6th ed.pdf' },
  },
  {
    id: 'collin-check-your-english', titulo: 'Check Your English Vocabulary for Medicine',
    autores: ['Collin, Peter H.'], asiento: 'Collin',
    edicion: '3rd ed.', editorial: 'A & C Black', anio: '2006', paginas: 65, idioma: 'Inglés',
    formato: 'Cuaderno de ejercicios', clase: 'W', numero: '15', materias: ['ingles-medico-1'],
    archivo: { subjectId: 'ingles-medico-1', file: 'Check Your English Vocabulary for Medicine.pdf' },
  },

  // ── WG · Sistema cardiovascular ──────────────────────────────────
  {
    id: 'dosispedia-ekg', titulo: 'Manual práctico. EKG',
    autores: ['DosisPedia'], asiento: 'DosisPedia',
    editorial: 'DosisPedia', paginas: 40, idioma: 'Español',
    formato: 'Manual', clase: 'WG', numero: '140', materias: [],
    archivo: { subjectId: 'libreria', file: 'DosisPedia - Manual practico EKG.pdf' },
    nota: 'Lectura sistemática del electrocardiograma con casos resueltos.',
  },
  {
    id: 'dosispedia-rcp', titulo: 'Manual práctico. Reanimación cardiopulmonar básica y avanzada',
    autores: ['Miranda, Félix', 'Rodríguez, Lorenz'], asiento: 'Miranda',
    editorial: 'DosisPedia', paginas: 37, idioma: 'Español',
    formato: 'Manual', clase: 'WG', numero: '205', materias: [],
    archivo: { subjectId: 'libreria', file: 'DosisPedia - Manual practico RCP.pdf' },
    nota: 'Soporte vital básico y avanzado conforme a las guías de la AHA.',
  },

  // ── WL · Sistema nervioso ────────────────────────────────────────
  {
    id: 'gould-rt-neuroanatomia', titulo: 'Neuroanatomía', serie: 'Serie Revisión de Temas',
    autores: ['Gould, Douglas J.', 'Fix, James D.'], asiento: 'Gould',
    edicion: '5.ª ed.', editorial: 'Wolters Kluwer', anio: '2015', paginas: 386, idioma: 'Español',
    formato: 'Libro', clase: 'WL', numero: '101', materias: [],
    archivo: { subjectId: 'libreria', file: 'Gould - Neuroanatomia 5a ed.pdf' },
  },

  // ── WN · Radiología ──────────────────────────────────────────────
  {
    id: 'rayospedia-atlas-anatomia', titulo: 'Atlas de anatomía radiológica',
    autores: ['Rodríguez, Lorenz'], asiento: 'Rodríguez',
    editorial: 'RayosPedia', paginas: 56, idioma: 'Español',
    formato: 'Atlas', clase: 'WN', numero: '17', materias: ['anatomia-humana-diseccion-1'],
    archivo: { subjectId: 'libreria', file: 'RayosPedia - Atlas de anatomia radiologica.pdf' },
    nota: 'Miembro superior, miembro inferior y esqueleto axial en radiografía.',
  },
  {
    id: 'rayospedia-rm-cerebral', titulo: 'ABC de la resonancia magnética cerebral',
    autores: ['Rodríguez, Lorenz'], asiento: 'Rodríguez',
    editorial: 'RayosPedia', paginas: 69, idioma: 'Español',
    formato: 'Libro', clase: 'WN', numero: '185', materias: [],
    archivo: { subjectId: 'libreria', file: 'RayosPedia - ABC RM cerebral.pdf' },
  },
  {
    id: 'rayospedia-rx-abdomen', titulo: 'ABC de la radiografía de abdomen',
    autores: ['Rodríguez, Lorenz'], asiento: 'Rodríguez', marcaObra: 'a',
    editorial: 'RayosPedia', paginas: 47, idioma: 'Español',
    formato: 'Libro', clase: 'WN', numero: '200', materias: [],
    archivo: { subjectId: 'libreria', file: 'RayosPedia - ABC Radiografia de abdomen.pdf' },
  },
  {
    id: 'rayospedia-rx-torax', titulo: 'ABC de la radiografía de tórax',
    autores: ['Rodríguez, Lorenz'], asiento: 'Rodríguez', marcaObra: 't',
    editorial: 'RayosPedia', paginas: 65, idioma: 'Español',
    formato: 'Libro', clase: 'WN', numero: '200', materias: [],
    archivo: { subjectId: 'libreria', file: 'RayosPedia - ABC Radiografia de torax.pdf' },
  },
  {
    id: 'rayospedia-tc-craneo', titulo: 'ABC de la tomografía de cráneo',
    autores: ['Rodríguez, Lorenz'], asiento: 'Rodríguez',
    editorial: 'RayosPedia', paginas: 51, idioma: 'Español',
    formato: 'Libro', clase: 'WN', numero: '206', materias: [],
    archivo: { subjectId: 'libreria', file: 'RayosPedia - ABC Tomografia de craneo.pdf' },
  },
  {
    id: 'rayospedia-eco-abdominal', titulo: 'ABC de la ecografía abdominal',
    autores: ['Rodríguez, Lorenz'], asiento: 'Rodríguez',
    editorial: 'RayosPedia', paginas: 56, idioma: 'Español',
    formato: 'Libro', clase: 'WN', numero: '208', materias: [],
    archivo: { subjectId: 'libreria', file: 'RayosPedia - ABC Ecografia abdominal.pdf' },
  },

  // ── WO · Cirugía ─────────────────────────────────────────────────
  {
    id: 'aesculap-instrumental', titulo: 'Catálogo de instrumental quirúrgico',
    autores: ['Aesculap (B. Braun)'], asiento: 'Aesculap',
    editorial: 'B. Braun', anio: '2020', paginas: 64, idioma: 'Español',
    formato: 'Catálogo', clase: 'WO', numero: '162', materias: [],
    archivo: { subjectId: 'libreria', file: 'Aesculap - Catalogo de instrumental quirurgico.pdf' },
    nota: 'Bisturís, pinzas, tijeras, separadores y demás instrumental de cirugía general.',
  },
  {
    id: 'urman-anestesia-bolsillo', titulo: 'Anestesia de bolsillo',
    autores: ['Urman, Richard D.', 'Ehrenfeld, Jesse M.'], asiento: 'Urman',
    edicion: '3.ª ed.', editorial: 'Wolters Kluwer', anio: '2018', paginas: 388, idioma: 'Español',
    formato: 'Manual', clase: 'WO', numero: '200', materias: [],
    archivo: { subjectId: 'libreria', file: 'Urman - Anestesia de bolsillo 3a ed.pdf' },
  },

  // ── WU · Odontología ─────────────────────────────────────────────
  {
    id: 'bti-instrumental', titulo: 'Instrumental quirúrgico',
    autores: ['BTI Biotechnology Institute'], asiento: 'BTI',
    editorial: 'BTI Biotechnology Institute', anio: '2015', paginas: 62, idioma: 'Español',
    formato: 'Catálogo', clase: 'WU', numero: '26', materias: [],
    archivo: { subjectId: 'libreria', file: 'BTI - Instrumental quirurgico.pdf' },
    nota: 'Instrumental de cirugía oral e implantología (periotomos, despegadores, destornilladores).',
  },
]

/* ── Marca de autor: tabla Cutter de la Library of Congress ──────────────
 * Inicial + 2 dígitos: el segundo según la 2.ª letra, el tercero según la 3.ª. */
const strip = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z]/g, '')

const step = (ch: string, table: [string, number][]) => {
  let d = table[0][1]
  for (const [from, n] of table) if (ch >= from) d = n
  return d
}
const VOWEL_2: [string, number][] = [['a', 2], ['b', 2], ['d', 3], ['l', 4], ['n', 5], ['p', 6], ['r', 7], ['s', 8], ['u', 9]]
const S_2: [string, number][] = [['a', 2], ['c', 3], ['e', 4], ['h', 5], ['m', 6], ['t', 7], ['u', 8], ['w', 9]]
const QU_2: [string, number][] = [['a', 3], ['e', 4], ['i', 5], ['o', 6], ['r', 7], ['t', 8], ['y', 9]]
const CONS_2: [string, number][] = [['a', 3], ['e', 4], ['i', 5], ['o', 6], ['r', 7], ['u', 8], ['y', 9]]
const EXPAND: [string, number][] = [['a', 3], ['e', 4], ['i', 5], ['m', 6], ['p', 7], ['t', 8], ['w', 9]]

export function cutter(name: string): string {
  const n = strip(name)
  const first = n[0]
  let i = 1
  let second: number
  if ('aeiou'.includes(first)) second = step(n[1], VOWEL_2)
  else if (first === 's') second = n.startsWith('sch') ? 3 : step(n[1], S_2)
  else if (n.startsWith('qu')) { i = 2; second = step(n[2], QU_2) }
  else second = step(n[1], CONS_2)
  const third = n[i + 1] ? step(n[i + 1], EXPAND) : ''
  return `${first.toUpperCase()}${second}${third}`
}

export const signatura = (l: LibroCatalogo) => ({
  clase: `${l.clase} ${l.numero}`,
  autor: cutter(l.asiento) + (l.marcaObra ?? ''),
  anio: l.anio ?? 's. f.',
})

export const signaturaTexto = (l: LibroCatalogo) => {
  const s = signatura(l)
  return `${s.clase} ${s.autor} ${s.anio}`
}

/* Orden de estantería: clase NLM → número → marca de autor → año. */
const classIndex = (c: NlmClass) => NLM_CLASSES.findIndex((x) => x.code === c)
export const ordenEstante = (a: LibroCatalogo, b: LibroCatalogo) =>
  classIndex(a.clase) - classIndex(b.clase) ||
  parseFloat(a.numero) - parseFloat(b.numero) ||
  signatura(a).autor.localeCompare(signatura(b).autor) ||
  (a.anio ?? '').localeCompare(b.anio ?? '')

export const libroUrl = (l: LibroCatalogo) => libraryUrl(l.archivo.subjectId, l.archivo.file)
export const libroPrivado = (l: LibroCatalogo) => LIBRARY_PRIVATE.has(`${l.archivo.subjectId}/${l.archivo.file}`)
