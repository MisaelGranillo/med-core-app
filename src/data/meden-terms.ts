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
}

export const CATEGORIA_LABELS: Record<string, string> = {
  'historia-clinica': 'Historia clínica',
  sintomas: 'Síntomas y signos',
  diagnostico: 'Diagnóstico',
  general: 'General',
  gramatica: 'Gramática',
}

export const medenTerms: MedEnTerm[] = [
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

export const MEDEN_STATS = {
  total: medenTerms.length,
  historiaClinica: medenTerms.filter(t => t.categoria === 'historia-clinica').length,
  sintomas: medenTerms.filter(t => t.categoria === 'sintomas').length,
  gramatica: medenTerms.filter(t => t.categoria === 'gramatica').length,
}
