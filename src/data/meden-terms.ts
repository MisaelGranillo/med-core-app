/*
 * MedEN — vocabulario inglés↔español de Inglés Médico (UAD).
 *
 * Hermana de MedLex, NO una extensión suya: MedLex es un corpus de morfemas
 * grecolatinos con atribución CC BY-SA de la ENP UNAM. Mezclar el vocabulario
 * inglés ahí rompería esa atribución y confundiría dos objetos distintos.
 *
 * El `term` y el `example` van en inglés (verbatim de la clase cuando existe);
 * `es`, `nota` y las etiquetas de la interfaz van en español.
 *
 * Semana 1: glosario médico de la clase, abreviaturas del expediente, las 25
 * derivaciones verbo↔sustantivo↔adjetivo y los 15 verbos frasales clínicos.
 */

export type MedEnPos =
  | 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun'
  | 'preposition' | 'conjunction' | 'interjection'
  | 'article' | 'phrasal-verb' | 'abbreviation'
  // 'word-part' es morfema, no categoría gramatical: forzarlo a serlo
  // corrompería los filtros de la página. Es el puente hacia MedLex.
  | 'word-part'

export interface MedEnTerm {
  id: string
  term: string          // 'diagnosis'
  pos: MedEnPos
  es: string            // 'diagnóstico'
  forms?: { pos: MedEnPos; word: string; es?: string }[]
  example?: string      // oración en inglés, verbatim de la clase si existe
  categoria: string     // 'historia-clinica' | 'sintomas' | 'diagnostico' | 'general' | 'gramatica'
  semana: number        // 1
  nota?: string         // errata del profesor u observación de uso
}

export const POS_LABELS: Record<MedEnPos, string> = {
  noun: 'Noun',
  verb: 'Verb',
  adjective: 'Adjective',
  adverb: 'Adverb',
  pronoun: 'Pronoun',
  preposition: 'Preposition',
  conjunction: 'Conjunction',
  interjection: 'Interjection',
  article: 'Article',
  'phrasal-verb': 'Phrasal verb',
  abbreviation: 'Abbreviation',
  'word-part': 'Word part',
}

export const CATEGORIA_LABELS: Record<string, string> = {
  'historia-clinica': 'Historia clínica',
  sintomas: 'Síntomas y signos',
  diagnostico: 'Diagnóstico',
  general: 'General',
  gramatica: 'Gramática',
  terminologia: 'Terminología (word parts)',
  abreviaturas: 'Abreviaturas',
  'falsos-cognados': 'Falsos cognados',
}

const semana1Terms: MedEnTerm[] = [
  // ─── Glosario médico de la clase (§4.2) ──────────────────────────────
  { id: 'meden-abnormal', term: 'abnormal', pos: 'adjective', es: 'anormal', categoria: 'general', semana: 1 },
  { id: 'meden-ache', term: 'ache', pos: 'noun', es: 'dolor (sordo y continuo)', forms: [{ pos: 'verb', word: 'to ache', es: 'doler' }], categoria: 'sintomas', semana: 1 },
  { id: 'meden-acute', term: 'acute', pos: 'adjective', es: 'agudo(a)', example: 'We knew the baby was coming right away because the woman\'s labour pains were acute.', categoria: 'sintomas', semana: 1 },
  { id: 'meden-allergy', term: 'allergy', pos: 'noun', es: 'alergia', forms: [{ pos: 'adjective', word: 'allergic', es: 'alérgico(a)' }], categoria: 'diagnostico', semana: 1 },
  { id: 'meden-amnesia', term: 'amnesia', pos: 'noun', es: 'amnesia', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-antibiotics', term: 'antibiotics', pos: 'noun', es: 'antibióticos', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-appointment', term: 'appointment', pos: 'noun', es: 'cita médica', categoria: 'general', semana: 1 },
  { id: 'meden-arthritis', term: 'arthritis', pos: 'noun', es: 'artritis', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-biopsy', term: 'biopsy', pos: 'noun', es: 'biopsia', example: 'The biopsy ruled out a number of illnesses.', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-blood-pressure', term: 'blood pressure', pos: 'noun', es: 'presión arterial', categoria: 'sintomas', semana: 1 },
  { id: 'meden-cancer', term: 'cancer', pos: 'noun', es: 'cáncer', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-cyst', term: 'cyst', pos: 'noun', es: 'quiste', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-deaf', term: 'deaf', pos: 'adjective', es: 'sordo(a)', categoria: 'sintomas', semana: 1 },
  { id: 'meden-diagnosis', term: 'diagnosis', pos: 'noun', es: 'diagnóstico', example: 'The doctor would prefer to share the diagnosis with you in private.', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-disease', term: 'disease', pos: 'noun', es: 'enfermedad', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-emergency', term: 'emergency', pos: 'noun', es: 'emergencia', categoria: 'general', semana: 1 },
  { id: 'meden-fever', term: 'fever', pos: 'noun', es: 'fiebre', categoria: 'sintomas', semana: 1 },
  { id: 'meden-flu', term: 'flu / influenza', pos: 'noun', es: 'influenza, gripe', example: 'People who have the flu should not visit hospital patients.', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-fractured', term: 'fractured', pos: 'adjective', es: 'fracturado', categoria: 'sintomas', semana: 1 },
  { id: 'meden-germ', term: 'germ', pos: 'noun', es: 'germen', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-heart-attack', term: 'heart attack', pos: 'noun', es: 'infarto al miocardio', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-hiv', term: 'HIV', pos: 'noun', es: 'VIH', example: 'HIV can be passed down from the mother to her fetus.', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-illness', term: 'illness', pos: 'noun', es: 'enfermedad', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-infection', term: 'infection', pos: 'noun', es: 'infección', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-malignant', term: 'malignant', pos: 'adjective', es: 'maligno', categoria: 'general', semana: 1 },
  { id: 'meden-numb', term: 'numb', pos: 'adjective', es: 'entumecido', categoria: 'sintomas', semana: 1 },
  { id: 'meden-pain', term: 'pain', pos: 'noun', es: 'dolor', categoria: 'sintomas', semana: 1 },
  { id: 'meden-sore', term: 'sore', pos: 'adjective', es: 'dolorido, adolorido', categoria: 'sintomas', semana: 1 },
  { id: 'meden-swollen', term: 'swollen', pos: 'adjective', es: 'hinchado, inflamado', example: 'I knew my ankle was sprained because it was so swollen.', categoria: 'sintomas', semana: 1 },
  { id: 'meden-virus', term: 'virus', pos: 'noun', es: 'virus', example: 'There are very contagious viruses.', categoria: 'diagnostico', semana: 1 },
  { id: 'meden-breathe', term: 'breathe', pos: 'verb', es: 'respirar', forms: [{ pos: 'noun', word: 'breath', es: 'la respiración, el aliento' }], categoria: 'sintomas', semana: 1, nota: 'Errata de la clase: la diapositiva de verbos escribió "Breath". El verbo es breathe /briːð/; breath /breθ/ es el sustantivo.' },

  // ─── Abreviaturas del expediente (§5.4) ──────────────────────────────
  { id: 'meden-cc', term: 'CC', pos: 'abbreviation', es: 'Chief Complaint — motivo de consulta', categoria: 'historia-clinica', semana: 1 },
  { id: 'meden-hpi', term: 'HPI', pos: 'abbreviation', es: 'History of Present Illness — enfermedad actual', categoria: 'historia-clinica', semana: 1 },
  { id: 'meden-pmh', term: 'PMH', pos: 'abbreviation', es: 'Past Medical History — antecedentes personales patológicos', categoria: 'historia-clinica', semana: 1 },
  { id: 'meden-fh', term: 'FH', pos: 'abbreviation', es: 'Family History — antecedentes heredofamiliares', categoria: 'historia-clinica', semana: 1 },
  { id: 'meden-sh', term: 'SH', pos: 'abbreviation', es: 'Social History — hábitos', categoria: 'historia-clinica', semana: 1 },
  { id: 'meden-ros', term: 'ROS', pos: 'abbreviation', es: 'Review of Systems — revisión por sistemas (subjetiva)', categoria: 'historia-clinica', semana: 1 },
  { id: 'meden-pe', term: 'PE', pos: 'abbreviation', es: 'Physical Examination — exploración física (objetiva)', categoria: 'historia-clinica', semana: 1 },
  { id: 'meden-mh', term: 'MH', pos: 'abbreviation', es: 'Medication History — historia farmacológica', categoria: 'historia-clinica', semana: 1 },
  { id: 'meden-hp', term: 'H&P', pos: 'abbreviation', es: 'History & Physical — historia clínica y exploración', categoria: 'historia-clinica', semana: 1 },
  { id: 'meden-cbc', term: 'CBC', pos: 'abbreviation', es: 'Complete Blood Count — biometría hemática', categoria: 'historia-clinica', semana: 1 },
  { id: 'meden-ct', term: 'CT', pos: 'abbreviation', es: 'Computed Tomography — tomografía computarizada', categoria: 'historia-clinica', semana: 1 },
  { id: 'meden-mars', term: 'MARs', pos: 'abbreviation', es: 'Medication Administration Records — registros de administración de fármacos', categoria: 'historia-clinica', semana: 1 },

  // ─── Derivación verbo → sustantivo (§4.3) ────────────────────────────
  { id: 'meden-der-diagnose', term: 'diagnose', pos: 'verb', es: 'diagnosticar', forms: [{ pos: 'noun', word: 'diagnosis', es: 'diagnóstico' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-examine', term: 'examine', pos: 'verb', es: 'examinar', forms: [{ pos: 'noun', word: 'examination', es: 'exploración, examen' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-prescribe', term: 'prescribe', pos: 'verb', es: 'recetar, prescribir', forms: [{ pos: 'noun', word: 'prescription', es: 'receta' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-suffer', term: 'suffer', pos: 'verb', es: 'sufrir, padecer', forms: [{ pos: 'noun', word: 'suffering', es: 'sufrimiento, padecimiento' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-operate', term: 'operate', pos: 'verb', es: 'operar', forms: [{ pos: 'noun', word: 'operation', es: 'operación, intervención' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-cure', term: 'cure', pos: 'verb', es: 'curar', forms: [{ pos: 'noun', word: 'cure', es: 'cura, curación' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-recover', term: 'recover', pos: 'verb', es: 'recuperarse', forms: [{ pos: 'noun', word: 'recovery', es: 'recuperación' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-analyze', term: 'analyze', pos: 'verb', es: 'analizar', forms: [{ pos: 'noun', word: 'analysis', es: 'análisis' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-infect', term: 'infect', pos: 'verb', es: 'infectar', forms: [{ pos: 'noun', word: 'infection', es: 'infección' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-carry', term: 'carry', pos: 'verb', es: 'portar, llevar', forms: [{ pos: 'noun', word: 'carrier', es: 'portador' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-replace', term: 'replace', pos: 'verb', es: 'reemplazar, sustituir', forms: [{ pos: 'noun', word: 'replacement', es: 'reemplazo, prótesis' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-degenerate', term: 'degenerate', pos: 'verb', es: 'degenerar', forms: [{ pos: 'noun', word: 'degeneration', es: 'degeneración' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-refer', term: 'refer', pos: 'verb', es: 'referir, derivar', forms: [{ pos: 'noun', word: 'referral', es: 'referencia, derivación' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-paralyze', term: 'paralyze', pos: 'verb', es: 'paralizar', forms: [{ pos: 'noun', word: 'paralysis', es: 'parálisis' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-obstruct', term: 'obstruct', pos: 'verb', es: 'obstruir', forms: [{ pos: 'noun', word: 'obstruction', es: 'obstrucción' }], categoria: 'gramatica', semana: 1 },

  // ─── Derivación sustantivo → adjetivo (§4.3) ─────────────────────────
  { id: 'meden-der-defect', term: 'defect', pos: 'noun', es: 'defecto', forms: [{ pos: 'adjective', word: 'defective', es: 'defectuoso' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-deficiency', term: 'deficiency', pos: 'noun', es: 'deficiencia, carencia', forms: [{ pos: 'adjective', word: 'deficient', es: 'deficiente' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-dependence', term: 'dependence', pos: 'noun', es: 'dependencia', forms: [{ pos: 'adjective', word: 'dependent', es: 'dependiente' }], categoria: 'gramatica', semana: 1, nota: 'Errata de la clase: la diapositiva escribió "dependance". Correcto: dependence (sustantivo, con e); el adjetivo es dependent (con t).' },
  { id: 'meden-der-excess', term: 'excess', pos: 'noun', es: 'exceso', forms: [{ pos: 'adjective', word: 'excessive', es: 'excesivo' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-hypoglycemia', term: 'hypoglycemia', pos: 'noun', es: 'hipoglucemia', forms: [{ pos: 'adjective', word: 'hypoglycemic', es: 'hipoglucémico' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-immunity', term: 'immunity', pos: 'noun', es: 'inmunidad', forms: [{ pos: 'adjective', word: 'immune', es: 'inmune' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-inactivity', term: 'inactivity', pos: 'noun', es: 'inactividad', forms: [{ pos: 'adjective', word: 'inactive', es: 'inactivo' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-pain', term: 'pain', pos: 'noun', es: 'dolor', forms: [{ pos: 'adjective', word: 'painful', es: 'doloroso' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-spine', term: 'spine', pos: 'noun', es: 'columna vertebral, espina', forms: [{ pos: 'adjective', word: 'spinal', es: 'espinal, raquídeo' }], categoria: 'gramatica', semana: 1 },
  { id: 'meden-der-stiffness', term: 'stiffness', pos: 'noun', es: 'rigidez', forms: [{ pos: 'adjective', word: 'stiff', es: 'rígido, tieso' }], categoria: 'gramatica', semana: 1 },

  // ─── Verbos frasales clínicos (§4.3) ─────────────────────────────────
  { id: 'meden-pv-break-down', term: 'break down', pos: 'phrasal-verb', es: 'ponerse a llorar y venirse abajo', categoria: 'gramatica', semana: 1, example: 'She broke down and cried as she described the symptoms to the doctor.' },
  { id: 'meden-pv-bring-up', term: 'bring up', pos: 'phrasal-verb', es: 'expectorar (sacar moco de los pulmones o la garganta)', categoria: 'gramatica', semana: 1, example: 'He was bringing up mucus.' },
  { id: 'meden-pv-cough-up', term: 'cough up', pos: 'phrasal-verb', es: 'expectorar con esfuerzo (expulsar de la tráquea)', categoria: 'gramatica', semana: 1 },
  { id: 'meden-pv-drop-off', term: 'drop off', pos: 'phrasal-verb', es: 'quedarse dormido', categoria: 'gramatica', semana: 1, example: 'She often drops off in front of the T.V.' },
  { id: 'meden-pv-get-around', term: 'get around', pos: 'phrasal-verb', es: 'desplazarse, moverse', categoria: 'gramatica', semana: 1, example: 'Since she had the accident she got around using crutches.' },
  { id: 'meden-pv-get-over', term: 'get over', pos: 'phrasal-verb', es: 'recuperarse de una enfermedad o un disgusto', categoria: 'gramatica', semana: 1 },
  { id: 'meden-pv-give-up', term: 'give up', pos: 'phrasal-verb', es: 'dejar de hacer algo, rendirse', categoria: 'gramatica', semana: 1 },
  { id: 'meden-pv-go-down', term: 'go down', pos: 'phrasal-verb', es: 'disminuir, bajar (de tamaño)', categoria: 'gramatica', semana: 1 },
  { id: 'meden-pv-knock-out', term: 'knock out', pos: 'phrasal-verb', es: 'dejar inconsciente de un golpe', categoria: 'gramatica', semana: 1 },
  { id: 'meden-pv-look-after', term: 'look after', pos: 'phrasal-verb', es: 'cuidar, atender las necesidades de alguien', categoria: 'gramatica', semana: 1, example: 'The nurses are looking after her very well.' },
  { id: 'meden-pv-pass-out', term: 'pass out', pos: 'phrasal-verb', es: 'desmayarse', categoria: 'gramatica', semana: 1 },
  { id: 'meden-pv-pick-up', term: 'pick up', pos: 'phrasal-verb', es: 'contagiarse, contraer una enfermedad', categoria: 'gramatica', semana: 1 },
  { id: 'meden-pv-prop-up', term: 'prop up', pos: 'phrasal-verb', es: 'incorporar/apoyar a alguien (p. ej. con almohadas)', categoria: 'gramatica', semana: 1 },
  { id: 'meden-pv-take-after', term: 'take after', pos: 'phrasal-verb', es: 'parecerse a uno de los padres', categoria: 'gramatica', semana: 1 },
  { id: 'meden-pv-take-off', term: 'take off', pos: 'phrasal-verb', es: 'quitarse (ropa)', categoria: 'gramatica', semana: 1, example: 'The doctor asked him to take off his shirt.' },
]

// ══════════════════════════════════════════════════════════════════════
// ADELANTO — Unidades II a VI (tomado de los libros de texto, aún no
// impartido). Toda entrada lleva `semana` de su unidad y `nota` que empieza
// por "Adelanto —". Los word parts son el puente hacia MedLex.
// ══════════════════════════════════════════════════════════════════════

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

function buildTerms(
  idPrefix: string,
  rows: [term: string, es: string][],
  base: { pos: MedEnPos; categoria: string; semana: number; notaBase: string; adelanto?: boolean },
): MedEnTerm[] {
  // adelanto por defecto true; los word parts (Semana 2) ya se impartieron, así
  // que van con adelanto:false y su nota NO lleva el prefijo "Adelanto —".
  const adelanto = base.adelanto ?? true
  return rows.map(([term, es]) => ({
    id: `meden-${idPrefix}-${slug(term)}`,
    term,
    pos: base.pos,
    es,
    categoria: base.categoria,
    semana: base.semana,
    nota: adelanto ? `Adelanto — ${base.notaBase}` : base.notaBase,
  }))
}

// Unidad II · Semana 2 — Medical Terminology, Apéndice I (libro 547, PDF 575).
const prefixes: [string, string][] = [
  ['a- / an-', 'sin, ausencia de'], ['ab-', 'lejos de'], ['ad-', 'hacia'],
  ['ante-', 'antes'], ['anti-', 'contra'], ['auto-', 'propio, uno mismo'],
  ['bi-', 'dos'], ['brady-', 'lento'], ['circum-', 'alrededor'],
  ['contra-', 'contra, opuesto'], ['dia-', 'a través'], ['dys-', 'difícil, doloroso, anormal'],
  ['ec- / ex-', 'fuera'], ['ecto-', 'fuera, externo'], ['endo-', 'dentro'],
  ['epi-', 'sobre, encima'], ['eu-', 'normal, bueno'], ['extra-', 'fuera de'],
  ['hemi-', 'mitad'], ['hyper-', 'excesivo, por encima'], ['hypo-', 'deficiente, por debajo'],
  ['infra-', 'debajo'], ['inter-', 'entre'], ['intra-', 'dentro'],
  ['macro-', 'grande'], ['mega-', 'grande'], ['micro-', 'pequeño'],
  ['mono-', 'uno'], ['multi-', 'muchos'], ['neo-', 'nuevo'],
  ['oligo-', 'escaso, poco'], ['pan-', 'todo'], ['para-', 'al lado de, cerca'],
  ['per-', 'a través de'], ['peri-', 'alrededor'], ['poly-', 'muchos'],
  ['post-', 'después'], ['pre-', 'antes'], ['pro-', 'antes, a favor'],
  ['retro-', 'hacia atrás'], ['semi-', 'medio, parcial'], ['sub-', 'debajo'],
  ['supra-', 'por encima'], ['syn- / sym-', 'junto, con'], ['tachy-', 'rápido'],
  ['trans-', 'a través'], ['tri-', 'tres'], ['ultra-', 'más allá'], ['uni-', 'uno'],
  // Añadidos de la Clase 1 (Semana 2)
  ['de-', 'quitar, desde'], ['hetero-', 'distinto, otro'], ['homo-', 'igual, mismo'],
  ['in-', 'en, dentro / no'], ['nulli-', 'ninguno'], ['pseudo-', 'falso'],
  ['quadri-', 'cuatro'], ['re-', 'de nuevo, hacia atrás'], ['tetra-', 'cuatro'], ['un-', 'no'],
]

// Unidad II · Semana 2 — Medical Terminology, Apéndice I (libro 547, PDF 575).
const combiningForms: [string, string][] = [
  ['abdomin/o', 'abdomen'], ['aden/o', 'glándula'], ['angi/o', 'vaso'],
  ['arthr/o', 'articulación'], ['bronch/o', 'bronquio'], ['carcin/o', 'cáncer'],
  ['cardi/o', 'corazón'], ['cephal/o', 'cabeza'], ['cerebr/o', 'cerebro'],
  ['chol/e', 'bilis'], ['chondr/o', 'cartílago'], ['col/o', 'colon'],
  ['cost/o', 'costilla'], ['crani/o', 'cráneo'], ['cyan/o', 'azul'],
  ['cyst/o', 'vejiga, saco'], ['cyt/o', 'célula'], ['dent/o', 'diente'],
  ['derm/o, dermat/o', 'piel'], ['encephal/o', 'encéfalo'], ['enter/o', 'intestino'],
  ['erythr/o', 'rojo'], ['gastr/o', 'estómago'], ['gloss/o', 'lengua'],
  ['gluc/o, glyc/o', 'azúcar, glucosa'], ['gynec/o', 'mujer'], ['hem/o, hemat/o', 'sangre'],
  ['hepat/o', 'hígado'], ['hist/o', 'tejido'], ['hydr/o', 'agua'],
  ['hyster/o', 'útero'], ['leuk/o', 'blanco'], ['lip/o', 'grasa'],
  ['lymph/o', 'linfa'], ['mamm/o, mast/o', 'mama'], ['my/o', 'músculo'],
  ['myel/o', 'médula'], ['nephr/o', 'riñón'], ['neur/o', 'nervio'],
  ['ocul/o, ophthalm/o', 'ojo'], ['oste/o', 'hueso'], ['ot/o', 'oído'],
  ['path/o', 'enfermedad'], ['pharyng/o', 'faringe'], ['phleb/o', 'vena'],
  ['pneum/o, pulmon/o', 'pulmón'], ['proct/o', 'recto, ano'], ['psych/o', 'mente'],
  ['py/o', 'pus'], ['ren/o', 'riñón'], ['rhin/o', 'nariz'],
  ['splen/o', 'bazo'], ['thorac/o', 'tórax'], ['thromb/o', 'coágulo'],
  ['trache/o', 'tráquea'], ['ur/o', 'orina'], ['vas/o', 'vaso, conducto'],
  // Añadidos de la Clase 1 (Semana 2)
  ['bi/o', 'vida'], ['chem/o', 'químico'], ['cis/o', 'cortar'], ['immun/o', 'inmunidad'],
]

// Unidad II · Semana 2 — Medical Terminology, Apéndice I (libro 547, PDF 575).
const suffixes: [string, string][] = [
  ['-ac / -al / -ar / -ary', 'relativo a'], ['-algia', 'dolor'], ['-cele', 'hernia, protrusión'],
  ['-centesis', 'punción para extraer líquido'], ['-cyte', 'célula'], ['-dynia', 'dolor'],
  ['-ectasis', 'dilatación'], ['-ectomy', 'extirpación quirúrgica'], ['-emia', 'condición de la sangre'],
  ['-genic', 'que produce, que origina'], ['-gram', 'registro, imagen'], ['-graphy', 'proceso de registrar'],
  ['-ia', 'condición, estado'], ['-iasis', 'condición patológica'], ['-ic', 'relativo a'],
  ['-ism', 'proceso, estado'], ['-itis', 'inflamación'], ['-logist', 'especialista en'],
  ['-logy', 'estudio de'], ['-lysis', 'destrucción, separación'], ['-malacia', 'reblandecimiento'],
  ['-megaly', 'agrandamiento'], ['-oma', 'tumor'], ['-osis', 'condición anormal'],
  ['-pathy', 'enfermedad'], ['-penia', 'deficiencia'], ['-pexy', 'fijación quirúrgica'],
  ['-phagia', 'deglución'], ['-phasia', 'habla'], ['-phobia', 'temor'],
  ['-plasia', 'formación, desarrollo'], ['-plasty', 'reparación quirúrgica'], ['-plegia', 'parálisis'],
  ['-pnea', 'respiración'], ['-ptosis', 'caída, prolapso'], ['-rrhage / -rrhagia', 'hemorragia'],
  ['-rrhaphy', 'sutura'], ['-rrhea', 'flujo, secreción'], ['-sclerosis', 'endurecimiento'],
  ['-scope', 'instrumento para examinar'], ['-scopy', 'examen visual'], ['-stasis', 'detención, estancamiento'],
  ['-stomy', 'creación de una abertura'], ['-tomy', 'incisión'], ['-trophy', 'desarrollo, nutrición'],
  ['-uria', 'condición de la orina'],
  // Añadidos de la Clase 1 (Semana 2)
  ['-gen', 'que produce, origen'], ['-lytic', 'que destruye, que disuelve'], ['-opsy', 'ver, examinar'],
  ['-plasm', 'formación, sustancia'], ['-rrhexis', 'ruptura'], ['-stenosis', 'estrechamiento'],
  ['-therapy', 'tratamiento'],
]

// Unidad IV · Semana 4 — Medical Terminology, Apéndice III (libro 560, PDF 588)
// + Medical Abbreviations (Studocu, PDF 1–6). Distintas de las de Semana 1.
const abbreviations: [string, string][] = [
  ['Dx', 'diagnosis — diagnóstico'], ['Tx', 'treatment — tratamiento'], ['Hx', 'history — historia clínica'],
  ['Sx', 'symptoms / surgery — síntomas / cirugía'], ['Rx', 'prescription — receta'], ['Fx', 'fracture — fractura'],
  ['Dz', 'disease — enfermedad'], ['c/o', 'complains of — refiere, se queja de'], ['SOB', 'shortness of breath — disnea'],
  ['NAD', 'no acute distress — sin datos de dificultad aguda'], ['WNL', 'within normal limits — dentro de límites normales'],
  ['prn', 'as needed — según se necesite'], ['bid', 'twice a day — dos veces al día'], ['tid', 'three times a day — tres veces al día'],
  ['qid', 'four times a day — cuatro veces al día'], ['po', 'by mouth — vía oral'], ['IV', 'intravenous — intravenoso'],
  ['IM', 'intramuscular — intramuscular'], ['SubQ', 'subcutaneous — subcutáneo'], ['NPO', 'nothing by mouth — nada por vía oral'],
  ['STAT', 'immediately — de inmediato'], ['BMP', 'basic metabolic panel — panel metabólico básico'],
  ['CMP', 'comprehensive metabolic panel — panel metabólico completo'], ['ABG', 'arterial blood gas — gasometría arterial'],
  ['UA', 'urinalysis — examen general de orina'], ['ESR', 'erythrocyte sedimentation rate — VSG'],
  ['INR', 'international normalized ratio — razón normalizada internacional'], ['BP', 'blood pressure — presión arterial'],
  ['HR', 'heart rate — frecuencia cardíaca'], ['RR', 'respiratory rate — frecuencia respiratoria'],
  ['CXR', 'chest X-ray — radiografía de tórax'], ['ECG', 'electrocardiogram — electrocardiograma'],
  ['MRI', 'magnetic resonance imaging — resonancia magnética'], ['US', 'ultrasound — ultrasonido'],
  ['ABx', 'antibiotics — antibióticos'],
]

// Unidad III · Semana 3 — verbos frasales de síntomas (Pugh), distintos de los
// 15 de la clase (Semana 1).
const pughPhrasal: [string, string][] = [
  ['come down with', 'contraer (una enfermedad)'], ['come round / come to', 'volver en sí, recobrar el conocimiento'],
  ['throw up', 'vomitar'], ['block up', 'congestionarse, obstruirse (la nariz)'], ['swell up', 'hincharse'],
  ['flare up', 'exacerbarse, brotar (un síntoma)'], ['break out', 'brotar (un sarpullido)'],
  ['wear off', 'pasar el efecto (de un fármaco o la anestesia)'], ['build up', 'acumularse (líquido, placa)'],
  ['clear up', 'curarse, despejarse (una infección)'], ['pass away', 'fallecer'],
  ['waste away', 'consumirse, adelgazar por enfermedad'], ['dry up', 'secarse (una secreción)'],
  ['seize up', 'agarrotarse (un músculo o articulación)'], ['come out in', 'salirle a uno (un sarpullido): come out in a rash'],
]

// Unidad V · Semana 4 — falsos cognados (workbook 26, PDF 33 + cuadros Word Watch).
// El significado ERRÓNEO va en la `nota`, que empieza por "Adelanto —".
const falseFriends: MedEnTerm[] = [
  { id: 'meden-ff-intoxicated', term: 'intoxicated', pos: 'adjective', es: 'ebrio, bajo efectos de sustancias', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "intoxicado" (poisoned). El más peligroso en una historia clínica.' },
  { id: 'meden-ff-constipated', term: 'constipated', pos: 'adjective', es: 'estreñido', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "constipado / resfriado" (to have a cold).' },
  { id: 'meden-ff-embarrassed', term: 'embarrassed', pos: 'adjective', es: 'avergonzado', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "embarazada" (pregnant).' },
  { id: 'meden-ff-actually', term: 'actually', pos: 'adverb', es: 'en realidad, de hecho', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "actualmente" (currently).' },
  { id: 'meden-ff-eventually', term: 'eventually', pos: 'adverb', es: 'finalmente, con el tiempo', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "eventualmente" (occasionally).' },
  { id: 'meden-ff-assist', term: 'to assist', pos: 'verb', es: 'ayudar', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "asistir a un lugar" (to attend).' },
  { id: 'meden-ff-realize', term: 'to realize', pos: 'verb', es: 'darse cuenta', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "realizar" (to carry out).' },
  { id: 'meden-ff-discuss', term: 'to discuss', pos: 'verb', es: 'tratar, exponer', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "discutir / reñir" (to argue).' },
  { id: 'meden-ff-condition', term: 'condition', pos: 'noun', es: 'estado clínico, afección', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "condición / requisito" (requirement).' },
  { id: 'meden-ff-severe', term: 'severe', pos: 'adjective', es: 'grave, intenso', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "severo de carácter" (strict).' },
  { id: 'meden-ff-labor', term: 'labor', pos: 'noun', es: 'trabajo de parto', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "labor / tarea" (task).' },
  { id: 'meden-ff-disgrace', term: 'disgrace', pos: 'noun', es: 'deshonra', categoria: 'falsos-cognados', semana: 4, nota: 'Adelanto — Falso cognado: NO significa "desgracia" (misfortune).' },
]

const adelantoTerms: MedEnTerm[] = [
  ...buildTerms('wp', prefixes, { pos: 'word-part', categoria: 'terminologia', semana: 2, adelanto: false, notaBase: 'Semana 2 · Unidad II. Prefijo grecolatino; el mismo fenómeno que cubre MedLex, visto desde el inglés.' }),
  ...buildTerms('wp', combiningForms, { pos: 'word-part', categoria: 'terminologia', semana: 2, adelanto: false, notaBase: 'Semana 2 · Unidad II. Forma combinante (raíz + o); ver también MedLex.' }),
  ...buildTerms('wp', suffixes, { pos: 'word-part', categoria: 'terminologia', semana: 2, adelanto: false, notaBase: 'Semana 2 · Unidad II. Sufijo grecolatino; ver también MedLex.' }),
  ...buildTerms('abr', abbreviations, { pos: 'abbreviation', categoria: 'abreviaturas', semana: 4, notaBase: 'Unidad IV. Abreviatura médica.' }),
  ...buildTerms('pv2', pughPhrasal, { pos: 'phrasal-verb', categoria: 'sintomas', semana: 3, notaBase: 'Unidad III. Verbo frasal de síntomas (Pugh).' }),
  ...falseFriends,
]

// Unidad II · Semana 2 · Clase 2 — pares singular↔plural grecolatinos.
// Impartidos: sin marca "Adelanto —". El plural va en `forms`.
const pluralPairs: MedEnTerm[] = [
  { id: 'meden-pl-vertebra', term: 'vertebra', pos: 'noun', es: 'vértebra', forms: [{ pos: 'noun', word: 'vertebrae', es: 'vértebras (plural, -a → -ae)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-thorax', term: 'thorax', pos: 'noun', es: 'tórax', forms: [{ pos: 'noun', word: 'thoraces', es: 'tórax (plural, -ax → -aces)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-appendix', term: 'appendix', pos: 'noun', es: 'apéndice', forms: [{ pos: 'noun', word: 'appendices', es: 'apéndices (plural, -ix → -ices)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-diagnosis', term: 'diagnosis', pos: 'noun', es: 'diagnóstico', forms: [{ pos: 'noun', word: 'diagnoses', es: 'diagnósticos (plural, -is → -es)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-metastasis', term: 'metastasis', pos: 'noun', es: 'metástasis', forms: [{ pos: 'noun', word: 'metastases', es: 'metástasis (plural, -is → -es)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-sarcoma', term: 'sarcoma', pos: 'noun', es: 'sarcoma', forms: [{ pos: 'noun', word: 'sarcomata', es: 'sarcomas (plural, -ma → -mata)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-phalanx', term: 'phalanx', pos: 'noun', es: 'falange', forms: [{ pos: 'noun', word: 'phalanges', es: 'falanges (plural, -nx → -nges)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-ganglion', term: 'ganglion', pos: 'noun', es: 'ganglio', forms: [{ pos: 'noun', word: 'ganglia', es: 'ganglios (plural, -on → -a)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-ovum', term: 'ovum', pos: 'noun', es: 'óvulo', forms: [{ pos: 'noun', word: 'ova', es: 'óvulos (plural, -um → -a)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-atrium', term: 'atrium', pos: 'noun', es: 'aurícula, atrio', forms: [{ pos: 'noun', word: 'atria', es: 'aurículas (plural, -um → -a)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-nucleus', term: 'nucleus', pos: 'noun', es: 'núcleo', forms: [{ pos: 'noun', word: 'nuclei', es: 'núcleos (plural, -us → -i)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-bronchus', term: 'bronchus', pos: 'noun', es: 'bronquio', forms: [{ pos: 'noun', word: 'bronchi', es: 'bronquios (plural, -us → -i)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-biopsy', term: 'biopsy', pos: 'noun', es: 'biopsia', forms: [{ pos: 'noun', word: 'biopsies', es: 'biopsias (plural, -y → -ies)' }], categoria: 'terminologia', semana: 2 },
  { id: 'meden-pl-virus', term: 'virus', pos: 'noun', es: 'virus', forms: [{ pos: 'noun', word: 'viruses', es: 'virus (plural inglés; NO "viri")' }], categoria: 'terminologia', semana: 2, nota: 'Excepción: sigue la regla inglesa (-es), no la grecolatina.' },
]

// Semana 4 · Clase 3 — síntomas de cold & flu y verbos médicos regulares.
// Impartidos (sin marca "Adelanto —"). No se duplican fever/sore/pain (Semana 1).
const semana4Terms: MedEnTerm[] = [
  { id: 'meden-s4-headache', term: 'headache', pos: 'noun', es: 'dolor de cabeza', categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-sore-throat', term: 'sore throat', pos: 'noun', es: 'dolor / irritación de garganta', categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-cough', term: 'cough', pos: 'noun', es: 'tos', forms: [{ pos: 'adjective', word: 'dry / hacking cough', es: 'tos seca / persistente' }, { pos: 'adjective', word: 'wet cough', es: 'tos productiva (con flema)' }], categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-sneezing', term: 'sneezing', pos: 'noun', es: 'estornudos', forms: [{ pos: 'verb', word: 'to sneeze', es: 'estornudar' }], categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-nasal-congestion', term: 'nasal congestion', pos: 'noun', es: 'congestión nasal (nariz tapada)', forms: [{ pos: 'adjective', word: 'stuffy / blocked / bunged up', es: 'tapado (nariz)' }], categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-runny-nose', term: 'runny nose', pos: 'noun', es: 'nariz que gotea / mocos', categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-watering-eyes', term: 'watering eyes', pos: 'noun', es: 'ojos llorosos', categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-chills', term: 'chills', pos: 'noun', es: 'escalofríos', forms: [{ pos: 'noun', word: 'shivering', es: 'tiritar' }], categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-feverish', term: 'feverish', pos: 'adjective', es: 'afiebrado, con fiebre', categoria: 'sintomas', semana: 4, nota: 'raised / high / mild fever = fiebre alta / leve.' },
  { id: 'meden-s4-sweating', term: 'sweating', pos: 'noun', es: 'sudoración', forms: [{ pos: 'noun', word: 'perspiration', es: 'sudoración (formal)' }], categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-fatigue', term: 'fatigue', pos: 'noun', es: 'fatiga, cansancio', forms: [{ pos: 'noun', word: 'weariness / exhaustion', es: 'agotamiento' }], categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-nausea', term: 'nausea', pos: 'noun', es: 'náusea', forms: [{ pos: 'noun', word: 'vomiting', es: 'vómito' }], categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-body-aches', term: 'body aches', pos: 'noun', es: 'dolores corporales generalizados', categoria: 'sintomas', semana: 4 },
  { id: 'meden-s4-loss-of-smell', term: 'loss of smell', pos: 'noun', es: 'pérdida del olfato', categoria: 'sintomas', semana: 4 },
  // Verbos médicos regulares (pasado en -ed) — el examen llega hasta aquí.
  { id: 'meden-s4-administer', term: 'to administer', pos: 'verb', es: 'administrar (un fármaco)', categoria: 'general', semana: 4 },
  { id: 'meden-s4-admit', term: 'to admit', pos: 'verb', es: 'ingresar / hospitalizar', categoria: 'general', semana: 4 },
  { id: 'meden-s4-diagnose', term: 'to diagnose', pos: 'verb', es: 'diagnosticar', categoria: 'general', semana: 4 },
  { id: 'meden-s4-prescribe', term: 'to prescribe', pos: 'verb', es: 'recetar, prescribir', categoria: 'general', semana: 4 },
  { id: 'meden-s4-discharge', term: 'to discharge', pos: 'verb', es: 'dar de alta', categoria: 'general', semana: 4 },
  { id: 'meden-s4-refer', term: 'to refer', pos: 'verb', es: 'derivar / referir a otro servicio', categoria: 'general', semana: 4 },
  { id: 'meden-s4-treat', term: 'to treat', pos: 'verb', es: 'tratar', categoria: 'general', semana: 4 },
  { id: 'meden-s4-vaccinate', term: 'to vaccinate', pos: 'verb', es: 'vacunar', categoria: 'general', semana: 4 },
]

export const medenTerms: MedEnTerm[] = [...semana1Terms, ...adelantoTerms, ...pluralPairs, ...semana4Terms]

export const MEDEN_STATS = {
  total: medenTerms.length,
  historiaClinica: medenTerms.filter(t => t.categoria === 'historia-clinica').length,
  sintomas: medenTerms.filter(t => t.categoria === 'sintomas').length,
  gramatica: medenTerms.filter(t => t.categoria === 'gramatica').length,
  wordParts: medenTerms.filter(t => t.pos === 'word-part').length,
}
