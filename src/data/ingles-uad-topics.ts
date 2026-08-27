/*
 * Inglés Médico I (UAD · IN01005) — Guías de estudio, Semana 1.
 * Prof. Dra. Ana Paulina Nájera Soto.
 *
 * IDIOMA: la interfaz y las explicaciones van en español; el CONTENIDO DE
 * APRENDIZAJE —términos, definiciones, oraciones de ejemplo, tablas— va en
 * inglés, verbatim. Es una clase de inglés: traducir el material lo destruye.
 * Donde ayuda, la definición inglesa se acompaña de su glosa en español tras
 * un guion largo (« — »).
 *
 * FUENTE (autoridad de examen): diapositivas de la profesora.
 *   · Clase 2 (mar 4 ago) — The Medical Record (11 diapositivas)
 *   · Clase 3 (mié 5 ago) — Parts of Speech · Word Forms · Phrasal Verbs (23)
 * La Clase 1 fue encuadre (sin capturas): no se genera contenido de ella.
 *
 * ERRATAS: las diapositivas tienen siete errores de inglés verificados. MedCore
 * SIEMPRE enseña la forma correcta; cada Topic afectado cierra con un bloque
 * `note` "Erratas de la presentación" que lista el par dice/debe-decir. No es
 * una queja: breath/breathe y their/they're son justo lo que evalúa el examen.
 */

import type { Topic } from '../types'

export const inglesUadTopics: Topic[] = [
  // ══════════════════════════════════════════════════════════════════════
  // 1. THE MEDICAL RECORD  (Clase 2)
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'ingles-medical-record',
    title: 'The Medical Record',
    subtitle: 'Componentes del expediente clínico en inglés y su equivalencia en español',
    colorKey: 'lenguaje',
    categoria: 'Comunicación clínica',
    emoji: '📋',
    keyPoints: [
      'The Medical Record is also called the Medical History, Case History or Anamnesis.',
      'It is a legal document whose primary purpose is to record information about patients and their care.',
      'The History & Physical (H&P) gathers the subjective history and the objective physical examination.',
      'The Chief Complaint (CC) is the primary reason for the visit, often in the patient\'s own words.',
      'Patient demographics (name, address, gender) are NOT part of the chief complaint.',
      'The Review of Systems (ROS) is subjective; the Physical Examination (PE) is objective.',
      'The Problem List is ordered by decreasing priority; item number one is the working diagnosis.',
      'Learn the standard abbreviations: CC, HPI, PMH, FH, SH, ROS, PE, MH, H&P.',
    ],
    sections: [
      {
        id: 'imr-1',
        number: 1,
        title: 'What is the Medical Record?',
        keyTerms: ['Medical Record', 'Medical History', 'Case History', 'Anamnesis', 'legal document'],
        blocks: [
          {
            type: 'definition',
            title: 'The Medical Record',
            content:
              'A legal document —also called the Medical History, Case History or Anamnesis— that serves many functions, but whose primary purpose is to record information about patients and their care. — Documento legal cuyo propósito primario es registrar información sobre los pacientes y su atención.',
          },
          {
            type: 'paragraph',
            content:
              'It provides clinical staff with the information they need to deliver optimal care during present or future hospital episodes. — Provee al personal clínico la información necesaria para dar atención óptima en episodios hospitalarios presentes o futuros.',
          },
          {
            type: 'list',
            title: 'Other names for the same document',
            items: [
              'The Medical History',
              'Case History',
              'Anamnesis',
              'History & Physical (H&P) — the working format that combines history + examination.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'El orden SOAP',
            content: 'El expediente clínico en inglés sigue el orden SOAP (Subjective, Objective, Assessment, Plan); reconocer sus siglas acelera la lectura de una historia real.',
          },
        ],
      },
      {
        id: 'imr-2',
        number: 2,
        title: 'Components of the Medical History (H&P)',
        keyTerms: ['chief complaint', 'HPI', 'PMH', 'family history', 'social history', 'review of systems', 'problem list'],
        blocks: [
          {
            type: 'list',
            title: 'The full record contains',
            items: [
              'Patient demographics',
              'Chief Complaint (CC)',
              'History of Present Illness (HPI)',
              'Past Medical History (PMH)',
              'Family History (FH)',
              'Social History (SH)',
              'Allergies',
              'Medication History (MH)',
              'Review of Systems (ROS)',
              'Physical Examination (PE)',
              'Laboratory & diagnostic test results',
              'Problem List',
              'Clinical notes and Treatment notes',
            ],
          },
          {
            type: 'note',
            content:
              'Subjetivo vs. objetivo: la HPI y la ROS recogen lo que el paciente refiere (subjetivo); la PE y los resultados de laboratorio recogen lo que el clínico mide (objetivo). Es la base del formato SOAP.',
          },
        ],
      },
      {
        id: 'imr-3',
        number: 3,
        title: 'English–Spanish equivalences',
        keyTerms: ['chief complaint', 'present illness', 'past medical history', 'review of systems'],
        blocks: [
          {
            type: 'table',
            title: 'Record sections — English ↔ Español',
            data: {
              headers: ['English', 'Español'],
              rows: [
                ['Patient demographics', 'Identificación del paciente'],
                ['Chief Complaint (CC)', 'Problema principal o motivo de la consulta'],
                ['History of present illness (HPI)', 'Enfermedad actual o anamnesis próxima'],
                ['Past medical history (PMH)', 'Antecedentes o anamnesis remota'],
                ['Family history (FH)', 'Historial familiar'],
                ['Social history (SH)', 'Hábitos'],
                ['Allergies', 'Alergias'],
                ['Medication history', 'Antecedentes sobre uso de medicamentos'],
                ['Review of systems (ROS)', 'Revisión por sistemas'],
              ],
            },
          },
        ],
      },
      {
        id: 'imr-4',
        number: 4,
        title: 'Section-by-section: history',
        keyTerms: ['demographics', 'chief complaint', 'HPI', 'PMH', 'FH', 'SH', 'allergies', 'medication history'],
        blocks: [
          {
            type: 'definition',
            title: 'Patient Demographics',
            content: 'Name, birth date, address, phone number, gender, race, marital status. — Datos de identificación del paciente.',
          },
          {
            type: 'definition',
            title: 'Chief Complaint (CC)',
            content: 'The primary reason the patient is presenting for care, often expressed in the patient\'s own words. — Motivo de consulta; se registra con las palabras del propio paciente.',
          },
          {
            type: 'definition',
            title: 'History of Present Illness (HPI)',
            content: 'Typically documented in chronological order, describing symptoms in detail and previous treatment information. — Enfermedad actual, en orden cronológico.',
          },
          {
            type: 'definition',
            title: 'Past Medical History (PMH)',
            content: 'A list of past and current medical conditions. — Antecedentes patológicos personales.',
          },
          {
            type: 'definition',
            title: 'Family History (FH)',
            content: 'Age, status (dead or alive) and presence or absence of chronic medical conditions in parents, siblings and children. — Antecedentes heredofamiliares.',
          },
          {
            type: 'definition',
            title: 'Social History (SH)',
            content: 'Lifestyle and personal characteristics. — Hábitos y estilo de vida.',
          },
          {
            type: 'definition',
            title: 'Allergies',
            content: 'Any history of allergic reactions to medications, food, vaccines, stings, contrast media, etc. — Antecedentes alérgicos.',
          },
          {
            type: 'definition',
            title: 'Medication History (MH)',
            content: 'Current medication —prescription, non-prescription, complementary and alternative— plus dosages, frequency, duration and reason for taking. — Historia farmacológica.',
          },
        ],
      },
      {
        id: 'imr-5',
        number: 5,
        title: 'Section-by-section: examination, tests & notes',
        keyTerms: ['review of systems', 'physical examination', 'laboratory results', 'problem list', 'clinical notes', 'treatment notes'],
        blocks: [
          {
            type: 'definition',
            title: 'Review of Systems (ROS)',
            content: 'Subjective feelings or symptoms the patient is experiencing. — Revisión por aparatos y sistemas; subjetiva.',
          },
          {
            type: 'definition',
            title: 'Physical Examination (PE)',
            content: 'Objective information from the practitioner\'s examination, documented head-to-toe. — Exploración física; objetiva, de la cabeza a los pies.',
          },
          {
            type: 'definition',
            title: 'Laboratory & Diagnostic Test Results',
            content: 'Basic metabolic panel, complete blood count (CBC), electrocardiograms, echocardiograms, ultrasounds, CT scans, plus parameters specific to the diagnosis. — Resultados de laboratorio y gabinete.',
          },
          {
            type: 'definition',
            title: 'Problem List',
            content: 'The issues requiring management, in decreasing order of priority. The number one need is the working diagnosis that matches the signs and symptoms with which the patient has presented. — Lista de problemas por prioridad.',
          },
          {
            type: 'comparison',
            title: 'Clinical notes vs. Treatment notes',
            left: {
              title: 'Clinical Notes',
              items: [
                'Daily progress notes by the resident and attending physician.',
                'Consultation notes; off-service / transfer notes.',
                'Discharge summary.',
                'They update the H&P, problem list and plan.',
              ],
            },
            right: {
              title: 'Treatment Notes',
              items: [
                'Medication orders.',
                'Medication administration records (MARs).',
                'Surgical procedure documentation.',
                'Radiation therapy, nutrition, respiratory therapy.',
              ],
            },
          },
        ],
      },
      {
        id: 'imr-6',
        number: 6,
        title: 'Common abbreviations',
        keyTerms: ['CC', 'HPI', 'PMH', 'FH', 'SH', 'ROS', 'PE', 'MH', 'H&P', 'CBC', 'CT', 'MARs'],
        blocks: [
          {
            type: 'table',
            title: 'Medical record abbreviations',
            data: {
              headers: ['Abbreviation', 'Stands for', 'Español'],
              rows: [
                ['CC', 'Chief Complaint', 'Motivo de consulta'],
                ['HPI', 'History of Present Illness', 'Enfermedad actual'],
                ['PMH', 'Past Medical History', 'Antecedentes personales patológicos'],
                ['FH', 'Family History', 'Antecedentes heredofamiliares'],
                ['SH', 'Social History', 'Hábitos'],
                ['ROS', 'Review of Systems', 'Revisión por sistemas'],
                ['PE', 'Physical Examination', 'Exploración física'],
                ['MH', 'Medication History', 'Historia farmacológica'],
                ['H&P', 'History & Physical', 'Historia clínica y exploración'],
                ['CBC', 'Complete Blood Count', 'Biometría hemática'],
                ['CT', 'Computed Tomography', 'Tomografía computarizada'],
                ['MARs', 'Medication Administration Records', 'Registros de administración de fármacos'],
              ],
            },
          },
        ],
      },
      {
        id: 'imr-7',
        number: 7,
        title: 'Review questions',
        keyTerms: ['FH', 'chief complaint', 'primary purpose', 'PMH', 'demographics'],
        blocks: [
          {
            type: 'keypoints',
            title: 'Answer from memory',
            items: [
              'What does FH mean? → Family History.',
              'Are name, address and gender part of the chief complaint? → No; they are patient demographics.',
              'What is the primary purpose of the Medical Record? → To record information about patients and their care.',
              'What does PMH contain? → A list of past and current medical conditions.',
              'Are allergies part of the patient\'s demographics? → No; allergies are a section of their own.',
            ],
          },
        ],
      },
      {
        id: 'imr-8',
        number: 8,
        title: 'Erratas de la presentación',
        keyTerms: ['their', 'they\'re', 'overwhelmed', 'medical record'],
        blocks: [
          {
            type: 'note',
            title: 'Erratas de la presentación — estudia la forma correcta',
            content:
              'Las diapositivas de la Clase 2 contienen tres errores de inglés. MedCore enseña la forma correcta; memoriza el par: ' +
              '(1) «they\'re primary purpose» → their primary purpose (posesivo their, no la contracción they\'re = they are). ' +
              '(2) «easy to become overwhelm» → overwhelmed (participio; después de become se usa el adjetivo/participio). ' +
              '(3) «the patient\'s medial record» → medical record (medial existe y significa "hacia la línea media": otra palabra).',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // 2. PARTS OF SPEECH  (Clase 3)
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'ingles-parts-of-speech',
    title: 'Parts of Speech',
    subtitle: 'Las nueve categorías gramaticales con vocabulario médico',
    colorKey: 'gramatica',
    categoria: 'Comunicación clínica',
    emoji: '🔤',
    keyPoints: [
      'The nine parts of speech: nouns, articles, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, interjections.',
      'Articles: use "a" before a consonant sound, "an" before a vowel sound; "the" is specific.',
      'Verbs express an action or a state of being (to diagnose, to treat, to breathe).',
      'Adjectives modify a noun and normally come before it (acute pain, chronic disease).',
      'Adverbs modify a verb, an adjective or another adverb, and answer how/when/where/how often.',
      'The coordinating conjunctions are FANBOYS: For, And, Nor, But, Or, Yet, So.',
      'Pronouns replace a noun; master the subject/object/possessive/reflexive table.',
      'Beware breath (noun) vs. breathe (verb): same root, different word and pronunciation.',
    ],
    sections: [
      {
        id: 'pos-1',
        number: 1,
        title: 'The nine parts of speech',
        keyTerms: ['noun', 'article', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'A part of speech is the grammatical category of a word according to its function in a sentence. English has nine. — La categoría gramatical de una palabra según su función en la oración; el inglés tiene nueve.',
          },
          {
            type: 'list',
            title: 'The nine categories',
            items: [
              'Nouns — name a person, animal, place, thing or idea.',
              'Articles — signal whether a noun is specific or general.',
              'Verbs — express an action or a state of being.',
              'Adjectives — modify a noun or pronoun.',
              'Adverbs — modify a verb, an adjective or another adverb.',
              'Pronouns — replace a noun to avoid repetition.',
              'Prepositions — connect a noun/pronoun to another word.',
              'Conjunctions — join words and phrases together.',
              'Interjections — express emotional states; can stand alone.',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'La misma palabra, otra función',
            content: 'Muchas palabras médicas cambian de categoría sin cambiar de forma: to chart (verbo) y a chart (sustantivo); la posición en la frase decide su función.',
          },
        ],
      },
      {
        id: 'pos-2',
        number: 2,
        title: 'Nouns & Articles',
        keyTerms: ['noun', 'article', 'a', 'an', 'the', 'diagnosis', 'prescription'],
        blocks: [
          {
            type: 'definition',
            title: 'Noun',
            content: 'A word used to name something: a person, an animal, a place, a thing, or an idea. — Sustantivo.',
          },
          {
            type: 'list',
            title: 'Medical nouns (examples)',
            items: ['diagnosis', 'examination', 'cure', 'allergy', 'antibiotic', 'germ', 'recovery', 'cardiology', 'pathology', 'arm'],
          },
          {
            type: 'definition',
            title: 'Article',
            content: 'A word that comes before a noun to show if it is specific or general. — Artículo.',
          },
          {
            type: 'table',
            title: 'Articles: a / an / the',
            data: {
              headers: ['Article', 'Use', 'Examples'],
              rows: [
                ['a', 'before a consonant sound — un/una', 'a patient, a prescription, a referral, a cure, a paralysis'],
                ['an', 'before a vowel sound — un/una', 'an injection, an operation, an eye, an arm, an ophthalmologist'],
                ['the', 'specific, both genders/numbers — el/la/los/las', 'the patient, the patients, the cure, the diagnoses'],
              ],
            },
          },
        ],
      },
      {
        id: 'pos-3',
        number: 3,
        title: 'Verbs & Adjectives',
        keyTerms: ['verb', 'adjective', 'diagnose', 'treat', 'breathe', 'acute', 'chronic', 'benign', 'malignant'],
        blocks: [
          {
            type: 'definition',
            title: 'Verb',
            content: 'A word that generally expresses an action or a state of being. — Verbo.',
          },
          {
            type: 'list',
            title: 'Medical verbs (examples)',
            items: ['diagnose', 'infect', 'cure', 'treat', 'explore', 'analyze', 'breathe', 'operate', 'faint', 'fracture'],
          },
          {
            type: 'note',
            content:
              'Ojo: breathe /briːð/ es el VERBO (respirar); breath /breθ/ es el SUSTANTIVO (la respiración, el aliento). La diapositiva escribió "Breath" en la lámina de verbos: la forma correcta es breathe (ver Erratas).',
          },
          {
            type: 'definition',
            title: 'Adjective',
            content: 'A word that modifies a noun or pronoun; normally the adjective comes before the noun. — Adjetivo.',
          },
          {
            type: 'list',
            title: 'Medical adjectives (examples)',
            items: ['abnormal', 'acute', 'chronic', 'allergic', 'complex', 'benign', 'malignant', 'sore', 'swollen', 'inflamed'],
          },
        ],
      },
      {
        id: 'pos-4',
        number: 4,
        title: 'Adverbs',
        keyTerms: ['adverb', 'frequency', 'degree', 'manner', 'place', 'time'],
        blocks: [
          {
            type: 'definition',
            title: 'Adverb',
            content: 'A word that modifies an action verb, an adjective or another adverb. — Adverbio.',
          },
          {
            type: 'table',
            title: 'Types of adverbs',
            data: {
              headers: ['Type', 'Examples'],
              rows: [
                ['Frequency', 'always, often, sometimes, rarely, never'],
                ['Degree', 'almost, just, very, too, enough'],
                ['Manner', 'happily, sadly, loudly, quietly, carefully'],
                ['Place', 'here, there, up, down, away'],
                ['Time', 'now, then, always, often, never'],
                ['Interrogative', 'where, when, how, why, which'],
                ['Relative', 'where, when, why, how'],
                ['Conjunctive', 'therefore, however, nevertheless, moreover'],
              ],
            },
          },
        ],
      },
      {
        id: 'pos-5',
        number: 5,
        title: 'Pronouns',
        keyTerms: ['pronoun', 'subject', 'object', 'possessive', 'reflexive', 'their', 'they\'re'],
        blocks: [
          {
            type: 'definition',
            title: 'Pronoun',
            content: 'A word that replaces a noun; pronouns eliminate the need for repetition. — Pronombre.',
          },
          {
            type: 'table',
            title: 'Pronoun table',
            data: {
              headers: ['Person', 'Subject', 'Object', 'Possessive adj.', 'Possessive pron.', 'Reflexive'],
              rows: [
                ['1st', 'I', 'me', 'my', 'mine', 'myself'],
                ['2nd', 'you', 'you', 'your', 'yours', 'yourself'],
                ['3rd m.', 'he', 'him', 'his', 'his', 'himself'],
                ['3rd f.', 'she', 'her', 'her', 'hers', 'herself'],
                ['3rd thing', 'it', 'it', 'its', '(not used)', 'itself'],
                ['1st pl.', 'we', 'us', 'our', 'ours', 'ourselves'],
                ['2nd pl.', 'you', 'you', 'your', 'yours', 'yourselves'],
                ['3rd pl.', 'they', 'them', 'their', 'theirs', 'themselves'],
              ],
            },
          },
          {
            type: 'note',
            content:
              'their (posesivo: "su/sus") no es lo mismo que they\'re (contracción de they are: "ellos son/están"). Homófonos, distinta función. La diapositiva de la Clase 2 confundió ambos (ver Erratas de The Medical Record).',
          },
        ],
      },
      {
        id: 'pos-6',
        number: 6,
        title: 'Prepositions, Conjunctions & Interjections',
        keyTerms: ['preposition', 'conjunction', 'FANBOYS', 'correlative', 'interjection'],
        blocks: [
          {
            type: 'definition',
            title: 'Preposition',
            content: 'A word that, like a conjunction, connects a noun or pronoun to another word in a sentence. — Preposición.',
          },
          {
            type: 'list',
            title: 'Common prepositions',
            items: [
              'in, on, at, by, up, of, with, after, over, upon',
              'under, about, across, during, before, below, against, among',
              'far, off, out, from, near, down, along, inside, beside',
              'behind, outside, around, through',
            ],
          },
          {
            type: 'definition',
            title: 'Conjunction',
            content: 'The "scotch tape" of the grammatical world: it joins words and phrases together. — Conjunción.',
          },
          {
            type: 'comparison',
            title: 'Kinds of conjunction',
            left: {
              title: 'Coordinating — FANBOYS',
              items: ['For', 'And', 'Nor', 'But', 'Or', 'Yet', 'So'],
            },
            right: {
              title: 'Correlative (pairs)',
              items: ['either…or', 'neither…nor', 'not only…but also', 'both…and', 'whether…or', 'as…as'],
            },
          },
          {
            type: 'list',
            title: 'Subordinating conjunctions (examples)',
            items: [
              'although, because, since, while, unless, if, until, when',
              'after, before, as, though, even if, where, as long as',
              'provided that, as soon as, as if, even though, so that',
              'consequently, therefore, in case',
            ],
          },
          {
            type: 'definition',
            title: 'Interjection',
            content: 'A word used to express emotional states; it can stand alone. — Interjección. Primary: oh!, wow!, hurrah!, awful! · Secondary: ah!, hmm., oops., aha! · Volitive: come on!, look out!, help!, stop!',
          },
        ],
      },
      {
        id: 'pos-7',
        number: 7,
        title: 'Medical glossary of the class',
        keyTerms: ['acute', 'biopsy', 'diagnosis', 'malignant', 'swollen', 'numb', 'sore'],
        blocks: [
          {
            type: 'table',
            title: 'Class glossary — term · part of speech · Español',
            data: {
              headers: ['Term', 'POS', 'Español'],
              rows: [
                ['abnormal', 'adj.', 'anormal'],
                ['ache', 'noun/verb', 'dolor / doler'],
                ['acute', 'adj.', 'agudo(a)'],
                ['allergy / allergic', 'noun / adj.', 'alergia / alérgico(a)'],
                ['amnesia', 'noun', 'amnesia'],
                ['antibiotics', 'noun', 'antibióticos'],
                ['appointment', 'noun', 'cita médica'],
                ['arthritis', 'noun', 'artritis'],
                ['biopsy', 'noun', 'biopsia'],
                ['blood pressure', 'noun', 'presión arterial'],
                ['cancer', 'noun', 'cáncer'],
                ['cyst', 'noun', 'quiste'],
                ['deaf', 'adj.', 'sordo(a)'],
                ['diagnosis', 'noun', 'diagnóstico'],
                ['disease / illness', 'noun', 'enfermedad'],
                ['emergency', 'noun', 'emergencia'],
                ['fever', 'noun', 'fiebre'],
                ['flu / influenza', 'noun', 'influenza'],
                ['fractured', 'adj.', 'fracturado'],
                ['germ', 'noun', 'germen'],
                ['heart attack', 'noun', 'infarto al miocardio'],
                ['HIV', 'noun', 'VIH'],
                ['infection', 'noun', 'infección'],
                ['malignant', 'adj.', 'maligno'],
                ['numb', 'adj.', 'entumecido'],
                ['pain / sore', 'noun / adj.', 'dolor / dolorido'],
                ['swollen', 'adj.', 'hinchado'],
                ['virus', 'noun', 'virus'],
              ],
            },
          },
          {
            type: 'list',
            title: 'Usage sentences from the class',
            items: [
              'We knew the baby was coming right away because the woman\'s labour pains were acute.',
              'The biopsy ruled out a number of illnesses.',
              'The doctor would prefer to share the diagnosis with you in private.',
              'People who have the flu should not visit hospital patients.',
              'HIV can be passed down from the mother to her fetus.',
              'I knew my ankle was sprained because it was so swollen.',
              'There are very contagious viruses.',
            ],
          },
        ],
      },
      {
        id: 'pos-8',
        number: 8,
        title: 'Erratas de la presentación',
        keyTerms: ['breath', 'breathe'],
        blocks: [
          {
            type: 'note',
            title: 'Erratas de la presentación — estudia la forma correcta',
            content:
              'La lámina de verbos de la Clase 3 escribió «Breath – Respirar». El verbo correcto es breathe /briːð/ (respirar); breath /breθ/ es el sustantivo (la respiración, el aliento). Regla mnemónica: breathE lleva E de vErbo. Es un par clásico de examen.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // 3. WORD FORMS & PHRASAL VERBS  (Clase 3)
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'ingles-word-forms',
    title: 'Word Forms & Phrasal Verbs',
    subtitle: 'Derivación verbo↔sustantivo↔adjetivo y verbos frasales clínicos',
    colorKey: 'comunicacion',
    categoria: 'Comunicación clínica',
    emoji: '🔀',
    keyPoints: [
      'The same root shifts part of speech: to diagnose (verb) → a diagnosis (noun).',
      'Verb → noun: examine → examination, prescribe → prescription, operate → operation.',
      'Noun/verb → adjective: pain → painful, excess → excessive, spine → spinal.',
      'Watch the spelling: dependence (noun) → dependent (adjective).',
      'A phrasal verb is made up of a verb and a preposition, and often means something new.',
      'pass out = to faint; drop off = to fall asleep; bring up = to cough up material.',
      'Pick the phrasal verb by meaning, not by translating each word separately.',
      'take after = to be like one or the other of your parents.',
    ],
    sections: [
      {
        id: 'wfp-1',
        number: 1,
        title: 'Word derivation',
        keyTerms: ['word form', 'derivation', 'part of speech', 'suffix'],
        blocks: [
          {
            type: 'paragraph',
            content:
              'Many medical words share one root but change their ending —and their part of speech— depending on how the sentence uses them. Choosing the right form is a graded exercise in this course. — Una misma raíz cambia de terminación y de categoría según la función en la oración; elegir la forma correcta es el ejercicio evaluable.',
          },
          {
            type: 'list',
            title: 'The two shifts you must master',
            items: [
              'Verb → Noun: an action becomes a thing (to diagnose → a diagnosis).',
              'Noun → Adjective: a thing becomes a quality (pain → painful).',
            ],
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Derivar multiplica vocabulario',
            content: 'Del mismo lema salen varias formas: diagnose (verbo) → diagnosis (sustantivo) → diagnostic (adjetivo); dominar la derivación multiplica el vocabulario.',
          },
        ],
      },
      {
        id: 'wfp-2',
        number: 2,
        title: 'Verb → Noun (15)',
        keyTerms: ['diagnose', 'diagnosis', 'prescribe', 'prescription', 'analyze', 'analysis', 'refer', 'referral'],
        blocks: [
          {
            type: 'table',
            title: 'Verb → Noun',
            data: {
              headers: ['Verb', 'Noun'],
              rows: [
                ['diagnose', 'diagnosis'],
                ['examine', 'examination'],
                ['prescribe', 'prescription'],
                ['suffer', 'suffering'],
                ['operate', 'operation'],
                ['cure', 'cure'],
                ['recover', 'recovery'],
                ['analyze', 'analysis'],
                ['infect', 'infection'],
                ['carry', 'carrier'],
                ['replace', 'replacement'],
                ['degenerate', 'degeneration'],
                ['refer', 'referral'],
                ['paralyze', 'paralysis'],
                ['obstruct', 'obstruction'],
              ],
            },
          },
        ],
      },
      {
        id: 'wfp-3',
        number: 3,
        title: 'Noun → Adjective (10)',
        keyTerms: ['defect', 'defective', 'deficiency', 'deficient', 'dependence', 'dependent', 'spinal', 'immune'],
        blocks: [
          {
            type: 'table',
            title: 'Noun → Adjective',
            data: {
              headers: ['Noun', 'Adjective'],
              rows: [
                ['defect', 'defective'],
                ['deficiency', 'deficient'],
                ['dependence', 'dependent'],
                ['excess', 'excessive'],
                ['hypoglycemia', 'hypoglycemic'],
                ['immunity', 'immune'],
                ['inactivity', 'inactive'],
                ['pain', 'painful'],
                ['spine', 'spinal'],
                ['stiffness', 'stiff'],
              ],
            },
          },
          {
            type: 'note',
            content:
              'Escritura: el sustantivo es dependence (con e), el adjetivo dependent (con t). La diapositiva escribió «dependance»: es errata (ver Erratas).',
          },
        ],
      },
      {
        id: 'wfp-4',
        number: 4,
        title: 'Sentence pairs (the graded exercise)',
        keyTerms: ['diagnosis', 'examination', 'prescription', 'excessive', 'immune', 'dependent'],
        blocks: [
          {
            type: 'list',
            title: 'Same idea, two forms — verb vs. noun/adjective',
            items: [
              'I diagnosed that the patient had a heart condition. / My diagnosis was that the patient had a heart condition.',
              'I examined the patient fully. / I made a full examination of the patient.',
              'I prescribed a course of antibiotics. / I wrote a prescription for antibiotics.',
              'He suffers very little. / He experienced very little suffering.',
              'We operated immediately. / The operation was performed immediately.',
              'This disease cannot be cured. / There is no cure for this disease.',
              'He has recovered fully. / He has made a full recovery.',
              'The surgeons operated to repair the defect on the heart valve. / …to repair the defective heart valve.',
              'His diet has a calcium deficiency. / His diet is calcium-deficient.',
              'She has a physical dependence on amphetamines. / She is physically dependent on amphetamines.',
              'The doctor noted an excess of bile in the blood. / …an excessive amount of bile…',
              'An attack of hypoglycemia can be prevented… / A hypoglycemic attack can be prevented…',
              'The vaccine should give immunity to tuberculosis. / The vaccine should make you immune to tuberculosis.',
            ],
          },
        ],
      },
      {
        id: 'wfp-5',
        number: 5,
        title: 'Phrasal verbs',
        keyTerms: ['phrasal verb', 'pass out', 'drop off', 'bring up', 'cough up', 'look after', 'take after'],
        blocks: [
          {
            type: 'definition',
            title: 'Phrasal verb',
            content: 'A verb made up of two words: a verb and a preposition. The combination often means something different from the verb alone. — Verbo frasal.',
          },
          {
            type: 'table',
            title: 'Clinical phrasal verbs',
            data: {
              headers: ['Phrasal verb', 'Meaning'],
              rows: [
                ['break down', 'to start to cry and become upset'],
                ['bring up', 'to cough up material such as mucus from the lungs or throat'],
                ['cough up', 'to cough hard to expel a substance from the trachea'],
                ['drop off', 'to fall asleep'],
                ['get around', 'to move about'],
                ['get over', 'to become better after an illness or a shock'],
                ['give up', 'not to do something any more'],
                ['go down', 'to become smaller'],
                ['knock out', 'to hit someone so hard that he or she is no longer conscious'],
                ['look after', 'to take care of a person and attend to his or her needs'],
                ['pass out', 'to faint'],
                ['pick up', 'to catch a disease'],
                ['prop up', 'to support a person, e.g. with pillows'],
                ['take after', 'to be like one or the other of your parents'],
                ['take off', 'to remove something, especially clothes'],
              ],
            },
          },
        ],
      },
      {
        id: 'wfp-6',
        number: 6,
        title: 'Phrasal verbs in context',
        keyTerms: ['look after', 'drop off', 'break down', 'take off', 'get around', 'bring up'],
        blocks: [
          {
            type: 'table',
            title: 'Sentence · verb tense',
            data: {
              headers: ['Sentence', 'Tense'],
              rows: [
                ['The nurses are looking after her very well.', 'Present Continuous'],
                ['She often drops off in front of the T.V.', 'Simple Present'],
                ['She broke down and cried as she described the symptoms to the doctor.', 'Simple Past'],
                ['The doctor asked him to take off his shirt.', 'Simple Present'],
                ['Since she had the accident she got around using crutches.', 'Simple Past'],
                ['He was bringing up mucus.', 'Past Continuous'],
              ],
            },
          },
        ],
      },
      {
        id: 'wfp-7',
        number: 7,
        title: 'Erratas de la presentación',
        keyTerms: ['dependence', 'made up of', 'take after'],
        blocks: [
          {
            type: 'note',
            title: 'Erratas de la presentación — estudia la forma correcta',
            content:
              'La Clase 3 contiene tres errores. MedCore enseña la forma correcta: ' +
              '(1) «dependance» → dependence (sustantivo con e; el adjetivo es dependent). ' +
              '(2) «verbs made up for two words» → made up of (la preposición correcta es of, no for). ' +
              '(3) «Take after: to be like one or other parent» → to be like one or the other of your parents (la construcción original es agramatical).',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // ADELANTO — Unidades II a VI (tomado de los libros de texto, aún no
  // impartido). Cada tema abre con su bloque de nota de adelanto.
  // Fuentes citadas con ambas numeraciones (libro y PDF).
  // ══════════════════════════════════════════════════════════════════════

  // ── Unidad II · Semana 2 ──────────────────────────────────────────────
  {
    id: 'ingles-word-parts',
    title: 'Word Parts: Roots, Prefixes & Suffixes',
    subtitle: 'Cómo se construye y se interpreta un término médico en inglés',
    colorKey: 'gramatica',
    categoria: 'Terminología médica',
    emoji: '🧩',
    keyPoints: [
      'A medical term is built from up to four parts: word root, combining form, suffix and prefix.',
      'The word root carries the core meaning (cardi = heart); the combining form is the root plus a vowel (cardi/o).',
      'The combining vowel is almost always "o", sometimes "i", and links a root to a suffix or to another root.',
      'A prefix goes at the beginning and often signals number, location, time or negation.',
      'A suffix goes at the end and usually turns the term into a noun, adjective or procedure.',
      'Every medical term must have a suffix; not every term has a prefix.',
      'To read a term, start at the suffix, then the prefix, then the root(s): peri/card/itis = inflammation around the heart.',
      'This is the same Greek–Latin machinery MedLex covers, seen from English.',
    ],
    sections: [
      {
        id: 'iwp-1',
        number: 1,
        title: 'Impartido en Semana 2',
        blocks: [
          {
            type: 'note',
            title: 'Impartido — Semana 2, Clase 1 (10 ago)',
            content:
              'Este tema se impartió en la Semana 2, Clase 1 (10 de agosto de 2026). Está basado en el capítulo 1 de Medical Terminology: A Living Language: el profesor tomó las tablas de formas combinantes, prefijos y sufijos casi textualmente del libro. Es la Unidad II del programa: construcción de términos médicos grecolatinos.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'El término se descompone',
            content: 'La mayor parte del vocabulario médico es grecolatino: diagnóstico = dia- (a través) + gnosis (conocimiento); descomponer el término revela su significado sin memorizarlo.',
          },
        ],
      },
      {
        // Fuente: Medical Terminology — A Living Language, Cap. 1 (libro 1–20, PDF 29–48).
        id: 'iwp-2',
        number: 2,
        title: 'The four parts of a medical term',
        keyTerms: ['word root', 'combining form', 'combining vowel', 'prefix', 'suffix'],
        blocks: [
          {
            type: 'definition',
            title: 'Word root',
            content: 'The foundation of the term; it carries the essential meaning. Ex.: cardi (heart), gastr (stomach), hepat (liver). — Raíz.',
          },
          {
            type: 'definition',
            title: 'Combining form',
            content: 'The word root plus a combining vowel (usually "o"): cardi/o, gastr/o, neur/o. Used to join the root to another root or to a suffix that begins with a consonant. — Forma combinante.',
          },
          {
            type: 'definition',
            title: 'Prefix',
            content: 'A word part at the beginning of a term. It modifies the root by indicating number, location, time or negation: peri- (around), sub- (under), hyper- (excessive). — Prefijo.',
          },
          {
            type: 'definition',
            title: 'Suffix',
            content: 'A word part at the end of a term. It usually indicates a condition, a procedure or turns the term into an adjective: -itis (inflammation), -ectomy (excision), -megaly (enlargement). — Sufijo.',
          },
          {
            type: 'note',
            content: 'Enlace con MedLex: es el mismo fenómeno grecolatino que cubre /terminologia, visto desde el inglés. Las raíces y afijos coinciden; cambia la lengua vehicular.',
          },
        ],
      },
      {
        // Fuente: Medical Terminology, Cap. 1 (libro 1–20, PDF 29–48).
        id: 'iwp-3',
        number: 3,
        title: 'Rules for building and reading terms',
        keyTerms: ['combining vowel', 'interpretation', 'suffix-first reading'],
        blocks: [
          {
            type: 'steps',
            title: 'Rules of construction',
            steps: [
              'The combining vowel is usually "o", sometimes "i". The combining form is the root written with its vowel: cardi/o = heart.',
              'ROOT + SUFFIX — suffix begins with a CONSONANT → keep the vowel: arthr/o + -scope → arthroscope.',
              'ROOT + SUFFIX — suffix begins with a VOWEL → drop the vowel: arthr + -itis → arthritis (NOT arthroitis).',
              'ROOT + ROOT — keep the combining vowel to link two roots, even if the second begins with a vowel: gastr/o + enter/o + -itis → gastroenteritis.',
              'A prefix does not usually need a combining vowel: sub- + hepat + -ic → subhepatic.',
            ],
          },
          {
            type: 'note',
            content: 'El punto que más cae: arthr-o-scope (el sufijo -scope empieza por consonante, se conserva la o) frente a arthr-itis (el sufijo -itis empieza por vocal, se elimina la o). La regla depende de con qué empieza el sufijo, no del sufijo en sí.',
          },
          {
            type: 'definition',
            title: 'Trunk example: osteoarthritis',
            content: 'oste/o (bone) + arthr (joint) + -itis (inflammation) → osteoarthritis = inflammation of the bone at a joint. Two roots (oste/o keeps its vowel to link to arthr) and a vowel-initial suffix (-itis, so arthr drops its vowel). — Ejemplo troncal de la clase.',
          },
          {
            type: 'steps',
            title: 'Rules of interpretation (read a term in this order)',
            steps: [
              'Start at the SUFFIX (the end): it tells you the condition or procedure.',
              'Move to the PREFIX (the beginning): it tells you number, location, time or negation.',
              'Finish with the ROOT(S) in the middle.',
              'Example: peri/card/itis → -itis (inflammation) · peri- (around) · card (heart) = inflammation around the heart.',
            ],
          },
        ],
      },
      {
        // Fuente: Medical Terminology, Apéndice I (libro 547, PDF 575).
        id: 'iwp-4',
        number: 4,
        title: 'Common prefixes',
        keyTerms: ['a-', 'anti-', 'brady-', 'dys-', 'hyper-', 'hypo-', 'peri-', 'tachy-'],
        blocks: [
          {
            type: 'table',
            title: 'Frequent prefixes',
            data: {
              headers: ['Prefix', 'Meaning', 'Example'],
              rows: [
                ['a- / an-', 'without, absence of', 'apnea (without breathing)'],
                ['anti-', 'against', 'antibiotic'],
                ['brady-', 'slow', 'bradycardia'],
                ['tachy-', 'fast, rapid', 'tachycardia'],
                ['dys-', 'difficult, painful, abnormal', 'dysphagia'],
                ['hyper-', 'excessive, above normal', 'hyperglycemia'],
                ['hypo-', 'deficient, below normal', 'hypoglycemia'],
                ['endo-', 'within', 'endoscopy'],
                ['peri-', 'around', 'pericarditis'],
                ['inter-', 'between', 'intercostal'],
                ['intra-', 'within', 'intravenous'],
                ['post-', 'after', 'postoperative'],
                ['pre-', 'before', 'prenatal'],
                ['sub-', 'under, below', 'subcutaneous'],
              ],
            },
          },
        ],
      },
      {
        // Fuente: Medical Terminology, Apéndice I (libro 547, PDF 575).
        id: 'iwp-5',
        number: 5,
        title: 'Common combining forms',
        keyTerms: ['cardi/o', 'gastr/o', 'hepat/o', 'nephr/o', 'neur/o', 'oste/o'],
        blocks: [
          {
            type: 'table',
            title: 'Combining forms of the class (Medical Terminology, cap. 1)',
            data: {
              headers: ['Combining form', 'Meaning', 'Example'],
              rows: [
                ['arthr/o', 'joint', 'arthroscopy'],
                ['bi/o', 'life', 'biology'],
                ['carcin/o', 'cancer', 'carcinoma'],
                ['cardi/o', 'heart', 'cardiology'],
                ['chem/o', 'chemical', 'chemotherapy'],
                ['cis/o', 'to cut', 'incision'],
                ['cyt/o', 'cell', 'cytology'],
                ['dermat/o', 'skin', 'dermatitis'],
                ['enter/o', 'small intestine', 'enteritis'],
                ['gastr/o', 'stomach', 'gastritis'],
                ['gynec/o', 'woman', 'gynecology'],
                ['hemat/o', 'blood', 'hematology'],
                ['hepat/o', 'liver', 'hepatomegaly'],
                ['immun/o', 'immunity', 'immunology'],
                ['laryng/o', 'larynx', 'laryngitis'],
                ['my/o', 'muscle', 'myalgia'],
                ['nephr/o', 'kidney', 'nephrology'],
                ['neur/o', 'nerve', 'neuropathy'],
                ['ophthalm/o', 'eye', 'ophthalmology'],
                ['oste/o', 'bone', 'osteoporosis'],
                ['ot/o', 'ear', 'otitis'],
                ['path/o', 'disease', 'pathology'],
                ['pneum/o', 'lung, air', 'pneumonia'],
                ['pulmon/o', 'lung', 'pulmonology'],
                ['rhin/o', 'nose', 'rhinorrhea'],
              ],
            },
          },
        ],
      },
      {
        // Fuente: Medical Terminology, Apéndice I (libro 547, PDF 575).
        id: 'iwp-6',
        number: 6,
        title: 'Common suffixes',
        keyTerms: ['-itis', '-ectomy', '-ology', '-megaly', '-osis', '-algia'],
        blocks: [
          {
            type: 'table',
            title: 'Frequent suffixes',
            data: {
              headers: ['Suffix', 'Meaning', 'Example'],
              rows: [
                ['-itis', 'inflammation', 'arthritis'],
                ['-ectomy', 'surgical removal (excision)', 'appendectomy'],
                ['-otomy', 'incision, cutting into', 'laparotomy'],
                ['-ostomy', 'creation of a new opening', 'colostomy'],
                ['-ology', 'study of', 'cardiology'],
                ['-pathy', 'disease', 'neuropathy'],
                ['-megaly', 'enlargement', 'hepatomegaly'],
                ['-osis', 'abnormal condition', 'cyanosis'],
                ['-emia', 'blood condition', 'anemia'],
                ['-algia', 'pain', 'myalgia'],
                ['-scopy', 'visual examination', 'endoscopy'],
                ['-plasty', 'surgical repair', 'angioplasty'],
              ],
            },
          },
          {
            type: 'note',
            content: 'Esta tabla es representativa. La lista completa de sufijos —y de prefijos y formas combinantes— navegable y con quiz está en Vocabulario (/vocabulario?semana=2).',
          },
        ],
      },
      {
        id: 'iwp-7',
        number: 7,
        title: 'Where the words come from',
        keyTerms: ['Greek', 'Latin', 'Hippocrates', 'Galen', 'Vesalius', 'lingua franca'],
        blocks: [
          {
            type: 'paragraph',
            content: 'About three quarters of medical terminology is of Greek origin, especially clinical terms (cardiology, nephropathy, gastritis); Latin dominates anatomy (ventriculus). The tradition runs from Hippocrates and Galen to Vesalius, whose De humani corporis fabrica (1543) reformed anatomical description. Today English is the lingua franca of medicine, yet about 90% of English medical vocabulary is still Greek or Latin. — Origen histórico del vocabulario médico.',
          },
          {
            type: 'note',
            content: 'El papel del inglés como lengua vehicular de la ciencia médica se desarrolla en la Unidad VI (tema "Reading Scientific Literature"). Aquí interesa solo el origen grecolatino de las palabras.',
          },
        ],
      },
      {
        id: 'iwp-8',
        number: 8,
        title: 'Frequent confusions',
        keyTerms: ['-logy', '-logist', 'numeric prefixes', '-rrhage', '-rrhagia', '-rrhea', '-rrhexis'],
        blocks: [
          {
            type: 'note',
            content: '-logy = el estudio de algo (cardiology); -logist = quien lo estudia (cardiologist). Misma raíz, distinta terminación: es una confusión clásica de examen.',
          },
          {
            type: 'table',
            title: 'Numeric prefixes that get confused',
            data: {
              headers: ['Prefix', 'Number'],
              rows: [
                ['mono- / uni-', 'one'],
                ['bi-', 'two'],
                ['tri-', 'three'],
                ['quadri- / tetra-', 'four'],
                ['hemi- / semi-', 'half, partial'],
                ['poly- / multi-', 'many'],
                ['nulli-', 'none'],
                ['pan-', 'all'],
              ],
            },
          },
          {
            type: 'table',
            title: 'The -rrh- suffixes (they sound almost identical)',
            data: {
              headers: ['Suffix', 'Meaning', 'Example'],
              rows: [
                ['-rrhage', 'excessive flow (bursting forth)', 'hemorrhage'],
                ['-rrhagia', 'condition of excessive flow', 'menorrhagia'],
                ['-rrhea', 'flow, discharge', 'rhinorrhea'],
                ['-rrhexis', 'rupture', 'angiorrhexis'],
              ],
            },
          },
        ],
      },
      {
        // Añadido en la Semana 2 · Clase 2 (11 ago): interpretación de términos.
        id: 'iwp-9',
        number: 9,
        title: 'Interpreting medical terms',
        keyTerms: ['divide', 'define', 'combine', 'gastroenterology'],
        blocks: [
          {
            type: 'steps',
            title: 'Three-step strategy',
            steps: [
              'DIVIDE the term into its word parts.',
              'DEFINE each word part.',
              'COMBINE the meanings, reading from the suffix backwards.',
            ],
          },
          {
            type: 'definition',
            title: 'Worked example: gastroenterology',
            content: 'gastr/o/enter/o/logy → gastr = stomach · o = combining vowel (no meaning) · enter = small intestine · o = combining vowel · logy = study of → "the study of the stomach and small intestine". — Estrategia de 3 pasos aplicada.',
          },
          {
            type: 'table',
            title: 'More worked examples from the class',
            data: {
              headers: ['Term', 'Parts', 'Meaning'],
              rows: [
                ['cardiomegaly', 'cardi/o (heart) + -megaly (enlarged)', 'enlarged heart'],
                ['epidermal', 'epi- (above) + derm/o (skin) + -al (pertaining to)', 'pertaining to above the skin'],
                ['polymyositis', 'poly- (many) + myos/o (muscle) + -itis (inflammation)', 'inflammation of many muscles'],
                ['endocarditis', 'endo- (inner) + cardi/o (heart) + -itis (inflammation)', 'inflammation of the inner lining of the heart'],
                ['hypodermic', 'hypo- (below) + derm/o (skin) + -ic (pertaining to)', 'pertaining to below the skin'],
              ],
            },
          },
        ],
      },
      {
        // Añadido en la Semana 2 · Clase 2 (11 ago): pronunciación y ortografía.
        id: 'iwp-10',
        number: 10,
        title: 'Pronunciation & Spelling',
        keyTerms: ['spelling', 'homophone', 'ileum', 'ilium', 'abduction', 'adduction'],
        blocks: [
          {
            type: 'note',
            content: 'Una palabra puede tener varias pronunciaciones aceptables, pero UNA sola ortografía correcta. Cambiar una letra cambia el significado; ante la duda, consulta un diccionario médico.',
          },
          {
            type: 'comparison',
            title: 'Homophones: same sound, different meaning',
            left: {
              title: 'ileum',
              items: ['The small intestine (its last part).'],
            },
            right: {
              title: 'ilium',
              items: ['The hip bone (part of the pelvis).'],
            },
          },
          {
            type: 'comparison',
            title: 'Opposites that sound almost alike',
            left: {
              title: 'abduction',
              items: ['To move a limb AWAY from the median plane.'],
            },
            right: {
              title: 'adduction',
              items: ['To move a limb TOWARD the median plane.'],
            },
          },
          {
            type: 'table',
            title: 'One sound, two spellings',
            data: {
              headers: ['Sound', 'Spellings', 'Examples'],
              rows: [
                ['"si"', 'psy- or cy-', 'psychiatry · cytology'],
                ['"dis"', 'dys- or dis-', 'dyspepsia · dislocation'],
              ],
            },
          },
        ],
      },
    ],
  },

  {
    id: 'ingles-plurals',
    title: 'Singular & Plural Endings',
    subtitle: 'Reglas grecolatinas para formar el plural de los términos médicos',
    colorKey: 'gramatica',
    categoria: 'Terminología médica',
    emoji: '🔢',
    keyPoints: [
      'Most medical plurals follow the Greek or Latin ending, not the English "-s".',
      '-a → -ae: vertebra → vertebrae. -us → -i: nucleus → nuclei.',
      '-um → -a: bacterium → bacteria. -on → -a: ganglion → ganglia.',
      '-is → -es: diagnosis → diagnoses. -ix/-ex → -ices: appendix → appendices.',
      '-nx → -nges: phalanx → phalanges. -ma → -mata: carcinoma → carcinomata.',
      'Some borrowed words already follow the English rule: virus → viruses, sinus → sinuses.',
      'This is the single most predictable topic of Unit II: learn the ten endings.',
    ],
    sections: [
      {
        id: 'ipl-1',
        number: 1,
        title: 'Impartido en Semana 2',
        blocks: [
          {
            type: 'note',
            title: 'Impartido — Semana 2, Clase 2 (11 ago)',
            content:
              'Este tema se impartió en la Semana 2, Clase 2 (11 de agosto de 2026). Está basado en el capítulo 1 de Medical Terminology: A Living Language. Es la Unidad II del programa: formación de plurales grecolatinos, con sus diez reglas y las excepciones inglesas.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Plural grecolatino, muy evaluado',
            content: 'Los plurales grecolatinos son de lo más evaluado: diagnosis → diagnoses (se pronuncia /iːz/); el singular en -is pasa a -es, no a -ises.',
          },
        ],
      },
      {
        // Fuente: Medical Terminology — A Living Language, Cap. 1 (libro 1–20, PDF 29–48).
        id: 'ipl-2',
        number: 2,
        title: 'The ten plural-ending rules',
        keyTerms: ['-ae', '-i', '-a', '-es', '-ices', '-nges', '-mata'],
        blocks: [
          {
            type: 'table',
            title: 'Singular → plural, with a medical example',
            data: {
              headers: ['Singular ending', 'Plural ending', 'Example'],
              rows: [
                ['-a', '-ae', 'vertebra → vertebrae'],
                ['-ax', '-aces', 'thorax → thoraces'],
                ['-en', '-ina', 'lumen → lumina'],
                ['-ex / -ix', '-ices', 'apex → apices · appendix → appendices'],
                ['-is', '-es', 'diagnosis → diagnoses · metastasis → metastases'],
                ['-ma', '-mata', 'carcinoma → carcinomata · sarcoma → sarcomata'],
                ['-nx', '-nges', 'phalanx → phalanges · larynx → larynges'],
                ['-on', '-a', 'ganglion → ganglia · spermatozoon → spermatozoa'],
                ['-um', '-a', 'bacterium → bacteria · ovum → ova · atrium → atria'],
                ['-us', '-i', 'nucleus → nuclei · bronchus → bronchi · alveolus → alveoli'],
                ['-y', '-ies', 'biopsy → biopsies · therapy → therapies'],
              ],
            },
          },
        ],
      },
      {
        // Fuente: Medical Terminology, Cap. 1 (libro 1–20, PDF 29–48).
        id: 'ipl-3',
        number: 3,
        title: 'Exceptions: words that take the English plural',
        keyTerms: ['virus', 'sinus', 'exception'],
        blocks: [
          {
            type: 'list',
            title: 'They look Latin but add "-es"',
            items: [
              'virus → viruses (NOT "viri").',
              'sinus → sinuses (NOT "sini").',
              'apparatus → apparatuses.',
              'Rule of thumb: when in doubt with a common English-borrowed word, the English "-es" is often accepted; the classical plural is preferred in formal writing.',
            ],
          },
          {
            type: 'note',
            content: 'El par diagnosis → diagnoses es de los más evaluados: el singular termina en -is /ɪs/ y el plural en -es /iːz/. Distinta pronunciación, mismo lema.',
          },
        ],
      },
    ],
  },

  // ── Unidad III · Semana 3 ─────────────────────────────────────────────
  {
    id: 'ingles-verb-tenses',
    title: 'Verb Tenses, Modals & Voice',
    subtitle: 'Tiempos verbales, modales, condicionales y voz pasiva en contexto clínico',
    colorKey: 'lectoescritura',
    categoria: 'Gramática médica',
    emoji: '⏳',
    keyPoints: [
      'Use the present simple for facts and protocols; the present continuous for what is happening now.',
      'Use the present perfect to link a past event to the present: "The patient has recovered."',
      'Modal verbs (can, could, should, must, may, might) express ability, advice, obligation and probability.',
      'Conditionals link a condition to a result: "If the fever persists, call the doctor."',
      'The passive voice is central to scientific writing: "The sample was analyzed."',
      'The signal word usually tells the tense: yesterday → past simple, since/for → present perfect, now → present continuous, by next week → future perfect.',
      'Modals take a bare infinitive (no "to"), no -s in the 3rd person and no do/does: "she must rest", not "she musts to rest".',
      'Reported speech shifts the tense back: "She said she felt dizzy."',
      'After some verbs use the infinitive; after others the -ing form.',
    ],
    sections: [
      {
        id: 'ivt-1',
        number: 1,
        title: 'Impartido en Semana 3',
        blocks: [
          {
            type: 'note',
            title: 'Impartido — Semana 3 (Clases 1–3)',
            content:
              'Impartido en la Semana 3 (Clases 1–3). Gramática práctica: tiempos verbales, modales, condicionales, voz pasiva, subordinación y artículos. Corresponde a la Unidad III del programa. Se apoya en Check Your English Vocabulary for Medicine y en English Grammar in Use (Murphy).',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Por qué la voz pasiva',
            content: 'La literatura médica prefiere la voz pasiva (the sample was analyzed) para centrar el objeto de estudio, no al autor.',
          },
        ],
      },
      {
        // Fuente: Check Your English Vocabulary for Medicine, unidades 15–18 (workbook 15–18, PDF 22–25).
        id: 'ivt-2',
        number: 2,
        title: 'The 12 tenses in clinical context',
        keyTerms: ['signal words', 'present simple', 'present perfect', 'past simple', 'future perfect'],
        blocks: [
          {
            type: 'table',
            title: 'Los 12 tiempos: palabra señal · forma · ejemplo',
            data: {
              headers: ['Tense', 'Signal words', 'Form', 'Clinical example'],
              rows: [
                ['Present simple', 'every day, always, never', 'verb (+s 3rd person)', 'The heart pumps blood to the body.'],
                ['Present continuous', 'now, at the moment', 'am/is/are + -ing', 'The nurse is taking his blood pressure.'],
                ['Present perfect', 'just, yet, ever, since, for, already', 'have/has + past participle', 'She has recovered from the infection.'],
                ['Present perfect continuous', 'all day, since, for, how long', 'have/has + been + -ing', 'He has been coughing for two days.'],
                ['Past simple', 'yesterday, ago, last…, in 1990', 'verb-ed / 2nd column', 'The patient fainted yesterday.'],
                ['Past continuous', 'while', 'was/were + -ing', 'He was bringing up mucus during the night.'],
                ['Past perfect', 'already, just, before', 'had + past participle', 'The pain had started before he arrived.'],
                ['Past perfect continuous', 'how long, since, for', 'had + been + -ing', 'She had been feeling dizzy for hours.'],
                ['Simple future', 'tomorrow, next…', 'will + verb', 'We will discharge her tomorrow.'],
                ['Future continuous', 'at this time tomorrow', 'will be + -ing', 'This time tomorrow she will be recovering.'],
                ['Future perfect', 'by next week', 'will have + past participle', 'By Friday he will have finished the course.'],
                ['Future perfect continuous', 'by … for + duration', 'will have been + -ing', 'By June she will have been working here for a year.'],
              ],
            },
          },
          {
            type: 'note',
            title: 'La palabra señal te dice el tiempo',
            content:
              'La regla práctica del profesor: la palabra señal suele indicar el tiempo. yesterday / ago / last week → past simple · now / at the moment → present continuous · since / for / already / just → present perfect · while → past continuous · by next week → future perfect.',
          },
        ],
      },
      {
        // Fuente: Check Your English Vocabulary for Medicine, unidad 16 (workbook 16, PDF 23).
        id: 'ivt-3',
        number: 3,
        title: 'Modal verbs',
        keyTerms: ['can', 'could', 'may', 'might', 'must', 'have to', 'should', 'shall', 'would'],
        blocks: [
          {
            type: 'table',
            title: 'Matriz de modales por función',
            data: {
              headers: ['Modal', 'Function', 'Example'],
              rows: [
                ['can', 'ability / permission', 'The patient can walk without help.'],
                ["can't", 'impossibility / denied permission', "You can't eat before the test."],
                ['could', 'past ability / possibility / polite permission', 'Could you describe the pain?'],
                ['may', 'possibility / formal permission', 'The rash may be an allergic reaction.'],
                ['might', 'weaker possibility', 'The results might be ready today.'],
                ['must', 'obligation / strong deduction', 'You must fast before surgery.'],
                ['have to', 'external obligation', 'She has to fast before the surgery.'],
                ['shall', 'offers / suggestions', 'Shall I call the doctor?'],
                ['should / ought to', 'advice', 'You should take it with food.'],
                ['had better', 'strong advice / warning', "You'd better rest."],
                ['would', 'offers / hypothetical', 'I would recommend a scan.'],
                ['will', 'future / willingness', 'We will discharge her tomorrow.'],
              ],
            },
          },
          {
            type: 'note',
            title: 'Reglas de los verbos modales',
            content:
              'Los modales NO se conjugan: no llevan -s en 3.ª persona (she must, no "she musts"); no usan do/does en preguntas ni don\'t/doesn\'t en negativos (Must she fast?, She must not eat); van seguidos de INFINITIVO SIN "to" (bare infinitive): "must rest", no "must to rest"; y no tienen formas de infinitivo ni -ing ("to can" ✗, "musting" ✗ → se sustituyen por can/be able to, must/have to).',
          },
        ],
      },
      {
        // Fuente: Check Your English Vocabulary for Medicine, unidad 18 (workbook 18, PDF 25).
        id: 'ivt-4',
        number: 4,
        title: 'Conditionals & passive voice',
        keyTerms: ['zero conditional', 'first conditional', 'second conditional', 'third conditional', 'unless', 'passive voice'],
        blocks: [
          {
            type: 'table',
            title: 'The four conditionals (0–3)',
            data: {
              headers: ['Type', 'Structure', 'Use / example'],
              rows: [
                ['Zero', 'if + present, present', 'Verdad permanente: If you heat water to 100 °C, it boils.'],
                ['First', 'if + present, will/can/must + verb', 'Real y futuro: If I specialize, I will be on cardiology.'],
                ['Second', 'if + past, would/could + inf', 'Improbable/imposible: If I had more time, I would exercise. ("If I were you, I\'d rest" = consejo.)'],
                ['Third', 'if + past perfect, would have + participle', 'Pasado imposible/arrepentimiento: If he had taken it, he would have recovered.'],
              ],
            },
          },
          {
            type: 'note',
            title: 'unless = "if not"',
            content: '"unless" significa "si no" y NUNCA va seguido de will: "Unless you rest, you won\'t recover" (no "unless you will rest"). Introduce la condición negativa del primer condicional.',
          },
          {
            type: 'definition',
            title: 'Passive voice',
            content: 'El receptor de la acción pasa a ser el sujeto; el agente suele omitirse. Forma: sujeto + be + participio pasado + by + agente (opcional): "Appendicitis was diagnosed by the doctor." Se usa para destacar al receptor, cuando el agente es desconocido, obvio o irrelevante, y en la escritura formal/científica: "The sample was analyzed." — Voz pasiva.',
          },
        ],
      },
      {
        // Fuente: Check Your English Vocabulary for Medicine, unidades 15–18 (workbook 15–18, PDF 22–25).
        id: 'ivt-5',
        number: 5,
        title: 'Reported speech, questions & -ing / infinitive',
        keyTerms: ['reported speech', 'questions', 'infinitive', 'gerund'],
        blocks: [
          {
            type: 'note',
            title: 'Visto de forma breve',
            content:
              'El estilo indirecto (reported speech) y la distinción infinitivo/-ing se vieron de forma BREVE en clase; se refuerzan con el workbook (Check Your English Vocabulary for Medicine y English Grammar in Use, Murphy). Repásalos, pero el peso del parcial está en tiempos, modales, condicionales y voz pasiva.',
          },
          {
            type: 'list',
            title: 'Reported speech (tense goes one step back)',
            items: [
              'Direct: "I feel dizzy." → Reported: She said she felt dizzy.',
              'Direct: "I have taken my pills." → Reported: He said he had taken his pills.',
            ],
          },
          {
            type: 'list',
            title: 'Infinitive vs. -ing',
            items: [
              'After some verbs use the infinitive: decide to operate, need to rest, agree to sign the consent.',
              'After others use the -ing form: avoid smoking, stop bleeding, suggest resting.',
              'After prepositions always use -ing: before eating, after fasting, without breathing.',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'ingles-sentence-structure',
    title: 'Articles, Word Order & Subordination',
    subtitle: 'Artículos, orden de palabras, proposiciones subordinadas, adjetivos y preposiciones',
    colorKey: 'redaccion',
    categoria: 'Gramática médica',
    emoji: '🧱',
    keyPoints: [
      'English sentences follow a fixed Subject–Verb–Object order far more strictly than Spanish.',
      'Use "a/an" for something general and "the" for something specific already known.',
      'Adjectives come before the noun and follow a set order (opinion, size, age, colour…).',
      'Subordinate clauses add information with words like because, although, which, that.',
      'Prepositions often do not translate literally: "suffer FROM", "die OF", "admitted TO hospital".',
      'A misplaced word in English can change the meaning, not just the style.',
    ],
    sections: [
      {
        id: 'iss-1',
        number: 1,
        title: 'Impartido en Semana 3',
        blocks: [
          {
            type: 'note',
            title: 'Impartido — Semana 3 (Clases 1–3)',
            content:
              'Impartido en la Semana 3 (Clases 1–3), junto con los tiempos verbales. Cubre artículos, orden de palabras y adjetivos, cláusulas subordinadas y preposiciones. Corresponde a la Unidad III del programa; se apoya en Check Your English Vocabulary for Medicine y English Grammar in Use (Murphy).',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'a/an por el sonido',
            content: 'El artículo se elige por el SONIDO, no por la letra: an X-ray /eks/ pero a university /juː/; un error clásico al leer resultados en voz alta.',
          },
        ],
      },
      {
        // Fuente: Check Your English Vocabulary for Medicine, unidad 20 (workbook 20, PDF 27).
        id: 'iss-2',
        number: 2,
        title: 'Articles in context',
        keyTerms: ['a', 'an', 'the', 'zero article'],
        blocks: [
          {
            type: 'list',
            title: 'a / an / the / no article',
            items: [
              'a / an — one, not specific: The patient has a fever. She needs an X-ray.',
              'the — specific, already known: The fever went down after the second dose.',
              'no article — general/uncountable or most diseases: Patients with diabetes… · He has pneumonia.',
              'Set phrases: in hospital, at home, by ambulance (no article).',
            ],
          },
          {
            type: 'note',
            title: 'a vs. an: se decide por el SONIDO, no por la letra',
            content:
              '"a" antes de sonido consonántico; "an" antes de sonido vocálico. Cuenta el sonido, no la letra: an X-ray /ˈeks/, an MRI /ˈem/, an hour /ˈaʊər/ (h muda); pero a university /juː/, a European, a one-off. Error frecuente: "a X-ray" ✗ → an X-ray.',
          },
        ],
      },
      {
        // Fuente: Check Your English Vocabulary for Medicine, unidad 20 (workbook 20, PDF 27).
        id: 'iss-3',
        number: 3,
        title: 'Word order & adjectives',
        keyTerms: ['SVO', 'adjective order', 'word order'],
        blocks: [
          {
            type: 'paragraph',
            content: 'English keeps a fixed Subject–Verb–Object order: "The doctor (S) examined (V) the patient (O)." Unlike Spanish, the subject is rarely dropped and the order rarely changes. — El inglés mantiene el orden Sujeto–Verbo–Objeto de forma estricta.',
          },
          {
            type: 'list',
            title: 'Adjectives go BEFORE the noun, in a set order',
            items: [
              'Order: opinion → size → age → shape → colour → origin → material → noun.',
              'Example: a small round white pill.',
              'Never: "a pill white" (Spanish order). Always the adjective first in English.',
            ],
          },
        ],
      },
      {
        // Fuente: §4.2 del prompt de Semana 1 (conjunciones subordinantes) + workbook unidad 20.
        id: 'iss-4',
        number: 4,
        title: 'Subordinate clauses & prepositions',
        keyTerms: ['subordinate clause', 'relative clause', 'preposition'],
        blocks: [
          {
            type: 'list',
            title: 'Subordinate clauses add information',
            items: [
              'Reason: We admitted her because her oxygen was low.',
              'Concession: Although the pain was severe, she stayed calm.',
              'Relative: The drug, which is taken orally, has few side effects.',
              'Condition: Call us if the symptoms return.',
            ],
          },
          {
            type: 'note',
            title: 'Conjunciones subordinantes y la regla de la coma',
            content:
              'Conjunciones frecuentes: after, before, since, although, even though, than, that, unless, until, because, when, where, while, in order to, as long as. REGLA DE LA COMA: si la cláusula subordinada va PRIMERO, se separa con coma ("Although the pain was severe, she stayed calm"); si va DESPUÉS de la principal, NO lleva coma ("She stayed calm although the pain was severe").',
          },
          {
            type: 'table',
            title: 'Prepositions that do not translate literally',
            data: {
              headers: ['English', 'Español'],
              rows: [
                ['to suffer from a disease', 'padecer una enfermedad'],
                ['to die of / from', 'morir de'],
                ['to be admitted to hospital', 'ingresar en el hospital'],
                ['to be allergic to', 'ser alérgico a'],
                ['to complain of', 'quejarse de'],
                ['to respond to treatment', 'responder al tratamiento'],
              ],
            },
          },
        ],
      },
    ],
  },

  // ── Unidad IV · Semana 4 ──────────────────────────────────────────────
  {
    id: 'ingles-abbreviations',
    title: 'Acronyms & Abbreviations',
    subtitle: 'Abreviaturas médicas por área y la lista "do-not-use" de seguridad del paciente',
    colorKey: 'comunicacion',
    categoria: 'Terminología médica',
    emoji: '🔠',
    keyPoints: [
      'Abbreviations save time but are a leading source of medical error when ambiguous.',
      'Chart & orders: Dx (diagnosis), Tx (treatment), Hx (history), Rx (prescription), c/o (complains of).',
      'Frequency: prn (as needed), bid (twice a day), tid (three times), qid (four times), po (by mouth).',
      'Lab & imaging: CBC, BMP, ABG, UA, CT, MRI, CXR, ECG/EKG.',
      'The "do-not-use" list forbids dangerous abbreviations: U, IU, QD/QOD, trailing zeros, MS/MSO4.',
      'Case matters: Ca (calcium / cancer) is NOT ca; SM (simple mastectomy) is NOT sm (small).',
      'When in doubt, spell it out: patient safety beats brevity.',
    ],
    sections: [
      {
        id: 'iab-1',
        number: 1,
        title: 'Impartido en Semana 2',
        blocks: [
          {
            type: 'note',
            title: 'Impartido — Semana 2, Clase 3 (12 ago)',
            content:
              'Este tema se impartió en la Semana 2, Clase 3 (12 de agosto de 2026), como parte del repaso/cierre de la Unidad II junto con las abreviaturas y los healthcare settings. Se apoya en el Apéndice III de Medical Terminology y en el listado de abreviaturas de la clase. Las abreviaturas ambiguas son una causa frecuente de error médico: ante la duda, se escribe la palabra completa.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'La lista do-not-use',
            content: 'Las abreviaturas ambiguas causan errores de medicación reales; por eso existe la lista do-not-use (U, IU, MSO4) y la regla de escribir la palabra completa ante la duda.',
          },
          {
            type: 'note',
            title: 'Lista completa en EnLex',
            content:
              'La lista completa de 461 abreviaturas médicas (Medical Terminology: A Living Language, Apéndice III + capítulos) está en EnLex → pestaña «Abreviaturas», con búsqueda por sigla o significado y PDF descargable.',
          },
        ],
      },
      {
        // Fuente: Medical Terminology — Apéndice III (libro 560, PDF 588) + Medical Abbreviations (Studocu, PDF 1–6).
        id: 'iab-2',
        number: 2,
        title: 'Abbreviations by area',
        keyTerms: ['Dx', 'Tx', 'Hx', 'Rx', 'prn', 'bid', 'tid', 'po', 'CBC', 'CT'],
        blocks: [
          {
            type: 'table',
            title: 'Chart & orders',
            data: {
              headers: ['Abbrev.', 'Meaning'],
              rows: [
                ['Dx', 'diagnosis'],
                ['Tx', 'treatment'],
                ['Hx', 'history'],
                ['Sx', 'symptoms / surgery (context)'],
                ['Rx', 'prescription'],
                ['c/o', 'complains of'],
                ['SOB', 'shortness of breath'],
                ['NAD', 'no acute distress'],
                ['WNL', 'within normal limits'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Pharmacology / frequency & route',
            data: {
              headers: ['Abbrev.', 'Meaning'],
              rows: [
                ['prn', 'as needed (pro re nata)'],
                ['bid', 'twice a day'],
                ['tid', 'three times a day'],
                ['qid', 'four times a day'],
                ['po', 'by mouth (per os)'],
                ['IV', 'intravenous'],
                ['IM', 'intramuscular'],
                ['SubQ', 'subcutaneous'],
              ],
            },
          },
          {
            type: 'table',
            title: 'Laboratory & imaging',
            data: {
              headers: ['Abbrev.', 'Meaning'],
              rows: [
                ['CBC', 'complete blood count'],
                ['BMP', 'basic metabolic panel'],
                ['ABG', 'arterial blood gas'],
                ['UA', 'urinalysis'],
                ['CT', 'computed tomography'],
                ['MRI', 'magnetic resonance imaging'],
                ['CXR', 'chest X-ray'],
                ['ECG / EKG', 'electrocardiogram'],
              ],
            },
          },
          {
            // Fuente: listado de abreviaturas de la Clase 3 (Semana 2). Se conserva
            // el orden alfabético de la diapositiva; los pares por mayúscula/minúscula
            // (Ca/ca, SM/sm) se refuerzan en la sección de seguridad.
            type: 'table',
            title: 'From the class list (Semana 2 · Clase 3)',
            data: {
              headers: ['Abbrev.', 'Meaning'],
              rows: [
                ['ā', 'before (antes)'],
                ['AAROM', 'active assistive range of motion'],
                ['AB', 'abortion'],
                ['AIDS', 'acquired immunodeficiency syndrome'],
                ['BC', 'bone conduction'],
                ['BDT', 'bone density testing'],
                ['bpm', 'beats per minute'],
                ['bx / BX', 'biopsy'],
                ['Ca', 'calcium / cancer'],
                ['SM', 'simple mastectomy'],
                ['sm', 'small'],
              ],
            },
          },
        ],
      },
      {
        // Fuente: Medical Terminology, Cap. 1 (advertencia sobre abreviaturas ambiguas) + lista oficial "do-not-use".
        id: 'iab-3',
        number: 3,
        title: 'Patient safety: the do-not-use list',
        keyTerms: ['do-not-use', 'ambiguous abbreviation', 'patient safety'],
        blocks: [
          {
            type: 'note',
            title: 'This is a safety topic, not a vocabulary topic',
            content:
              'El libro (Cap. 1) advierte que las abreviaturas ambiguas son una causa frecuente de error médico. Una abreviatura mal interpretada puede cambiar una dosis o un fármaco. Por eso existe una lista oficial "do-not-use": ante la duda, se escribe la palabra completa.',
          },
          {
            type: 'note',
            title: 'Case sensitivity: the SAME letters, different meaning',
            content:
              'La mayúscula/minúscula cambia el significado: "Ca" = calcio o cáncer, pero "ca" no es lo mismo; "SM" = simple mastectomy, pero "sm" = small. Las abreviaturas son sensibles al contexto y a las mayúsculas; interpretarlas mal es un problema de seguridad del paciente, igual que las de la lista do-not-use.',
          },
          {
            type: 'table',
            title: 'Do-not-use list — write this instead',
            data: {
              headers: ['Avoid', 'Why', 'Write instead'],
              rows: [
                ['U', 'mistaken for 0, 4 or cc', 'unit'],
                ['IU', 'mistaken for IV or 10', 'international unit'],
                ['QD / QOD', 'confused with each other', 'daily / every other day'],
                ['trailing zero (1.0 mg)', 'the dot is missed → 10 mg', '1 mg'],
                ['no leading zero (.5 mg)', 'read as 5 mg', '0.5 mg'],
                ['MS, MSO4, MgSO4', 'morphine vs magnesium confusion', 'morphine sulfate / magnesium sulfate'],
              ],
            },
          },
        ],
      },
    ],
  },

  // ── Semana 2 · Clase 3 (impartida) ────────────────────────────────────
  {
    id: 'ingles-healthcare-settings',
    title: 'Healthcare settings',
    subtitle: 'Tipos de centros donde se usa la terminología médica',
    colorKey: 'comunicacion',
    categoria: 'Terminología médica',
    emoji: '🏥',
    keyPoints: [
      'Los healthcare settings son los distintos centros donde se usa la terminología médica.',
      'Acute care / general hospital: atención de corta estancia; suele incluir urgencias y obstetricia.',
      'Ambulatory / outpatient center: SIN pernocta; desde cirugía menor hasta diagnóstico o terapia.',
      'Long-term care / nursing home: estancia prolongada para quien necesita más recuperación o no puede cuidarse solo.',
      'HMO: servicios prepagados a través de un grupo de médicos de primer contacto y especialistas.',
      'Home health care: enfermería, terapia o cuidado personal en el domicilio del paciente.',
      'Rehabilitation center: fisioterapia y terapia ocupacional intensivas (hospitalizado o ambulatorio).',
      'Hospice: cuidados de soporte (no curativos) para pacientes terminales y sus familias.',
    ],
    sections: [
      {
        // Fuente: diapositivas «Healthcare settings» (Semana 2, Clase 3).
        id: 'hcs-1',
        number: 1,
        title: 'Types of healthcare settings',
        keyTerms: ['Acute care hospital', 'Specialty care hospital', 'Long-term care', 'Ambulatory / Outpatient center', "Physician's office", 'HMO', 'Home health care', 'Rehabilitation center', 'Hospice'],
        blocks: [
          {
            type: 'paragraph',
            content: 'La terminología médica se usa en muchos tipos de centros de salud. Cada uno se define por el tiempo de estancia del paciente (corta, prolongada o sin pernocta), el tipo de atención (general, especializada, domiciliaria) y el modelo de pago. Se conservan los nombres en inglés (es lo que se evalúa) con su definición en español.',
          },
          {
            type: 'table',
            title: 'Healthcare settings — definición',
            data: {
              headers: ['Setting (inglés)', 'Definición (español)'],
              rows: [
                ['Acute care / General hospital', 'Diagnostica y trata por periodos CORTOS; suele ofrecer también urgencias y atención obstétrica.'],
                ['Specialty care hospital', 'Se enfoca en tipos de enfermedad muy específicos (p. ej. psiquiátrico).'],
                ['Nursing home / Long-term care facility', 'Cuidado prolongado para quien necesita más tiempo de recuperación o ya no puede cuidarse a sí mismo.'],
                ['Ambulatory / Surgical / Outpatient center', 'SIN pernocta; desde cirugías simples hasta pruebas diagnósticas o terapia.'],
                ["Physician's office", 'Diagnóstico y tratamiento en un consultorio privado.'],
                ['Health Maintenance Organization (HMO)', 'Amplia gama de servicios PREPAGADOS a través de un grupo de médicos de primer contacto y especialistas.'],
                ['Home health care', 'Enfermería, terapia, cuidado personal o del hogar en el domicilio del paciente.'],
                ['Rehabilitation center', 'Fisioterapia y terapia ocupacional intensivas (hospitalizado y ambulatorio).'],
                ['Hospice', 'Tratamiento de soporte para pacientes terminales y sus familias.'],
              ],
            },
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Outpatient vs inpatient',
            content: 'Distinguir el setting correcto importa en la práctica: outpatient (sin pernocta) frente a inpatient (ingresado) cambia el cuidado, la logística y la facturación.',
          },
        ],
      },
      {
        id: 'hcs-2',
        number: 2,
        title: 'Outpatient vs inpatient / long-term',
        keyTerms: ['outpatient', 'inpatient', 'ambulatory', 'overnight stay', 'long-term care'],
        blocks: [
          {
            type: 'comparison',
            title: 'Sin pernocta vs con estancia',
            left: {
              title: 'Ambulatory / Outpatient (sin pernocta)',
              items: [
                'El paciente NO se queda a dormir (no overnight stay).',
                'Ambulatory / surgical / outpatient center: cirugía menor, diagnóstico o terapia.',
                "Physician's office: consulta y tratamiento en consultorio.",
                'La rehabilitación puede ser ambulatoria.',
              ],
            },
            right: {
              title: 'Inpatient / Long-term (con estancia)',
              items: [
                'El paciente ingresa y pernocta (admitted / inpatient).',
                'Acute care hospital: estancia CORTA (agudos, urgencias, obstetricia).',
                'Nursing home / long-term care: estancia PROLONGADA.',
                'La rehabilitación también puede ser hospitalizada.',
              ],
            },
          },
          {
            type: 'note',
            content: 'La palabra clave para distinguirlos es la pernocta: "outpatient/ambulatory" = sin quedarse a dormir; "inpatient" = ingresado. "Acute" apunta a corto plazo; "long-term", a estancia prolongada.',
          },
        ],
      },
      {
        id: 'hcs-3',
        number: 3,
        title: 'HMO, home health, rehab & hospice',
        keyTerms: ['HMO', 'home health care', 'rehabilitation center', 'hospice', 'palliative'],
        blocks: [
          {
            type: 'note',
            title: 'No confundir cuatro que suelen mezclarse',
            content:
              'HMO no es un lugar físico sino un MODELO de pago: servicios prepagados a través de un grupo de médicos. Home health care lleva la atención al DOMICILIO del paciente. Rehabilitation center ofrece terapia física y ocupacional intensiva. Hospice da cuidados de SOPORTE (no curativos) a pacientes terminales y sus familias.',
          },
          {
            type: 'list',
            title: 'Regla rápida por escenario',
            items: [
              'Paciente terminal, cuidado de confort para él y su familia → hospice.',
              'Recuperación intensiva con fisioterapia tras un ictus o cirugía → rehabilitation center.',
              'Curas y terapia en casa del paciente → home health care.',
              'Plan prepagado con médicos de primer contacto y especialistas → HMO.',
            ],
          },
        ],
      },
    ],
  },

  // ── Unidad V · Semana 4 ───────────────────────────────────────────────
  {
    id: 'ingles-false-friends',
    title: 'Common Errors & False Friends',
    subtitle: 'Falsos cognados español↔inglés que cambian el sentido en la clínica',
    colorKey: 'lenguaje',
    categoria: 'Comunicación clínica',
    emoji: '🎭',
    keyPoints: [
      'A false friend looks like a Spanish word but means something different in English.',
      'intoxicated = drunk / under the influence, NOT "intoxicado" (poisoned).',
      'constipated = estreñido, NOT "constipado / resfriado" (to have a cold).',
      'embarrassed = avergonzado, NOT "embarazada" (pregnant).',
      'actually = en realidad, NOT "actualmente" (currently).',
      'condition = estado clínico / afección, NOT "condición / requisito".',
      'The two costliest in a chart are intoxicated and constipated: they invert what you document.',
    ],
    sections: [
      {
        id: 'iff-1',
        number: 1,
        title: 'Adelanto',
        blocks: [
          {
            type: 'note',
            title: 'Adelanto — aún no impartido',
            content:
              'Este tema procede del libro de texto de la materia, no de una clase impartida. Corresponde a la Unidad V del programa, prevista para la Semana 4. El profesor puede recortarlo, reordenarlo o enfatizar otros puntos. Úsalo para ir por delante, no como guía de lo que entra en el parcial de esta semana.',
          },
          {
            type: 'correlacion',
            variant: 'clinica',
            title: 'Falsos cognados, riesgo clínico',
            content: 'Los falsos cognados son un riesgo clínico: en inglés intoxicated significa ebrio (no intoxicado/poisoned); confundirlos cambia el sentido de una historia clínica.',
          },
        ],
      },
      {
        // Fuente: Check Your English Vocabulary for Medicine, unidad 26 (workbook 26, PDF 33) + cuadros "Word Watch".
        id: 'iff-2',
        number: 2,
        title: 'The false-friends table',
        keyTerms: ['intoxicated', 'constipated', 'embarrassed', 'actually', 'condition', 'severe'],
        blocks: [
          {
            type: 'table',
            title: 'English word · what it means · what it does NOT mean',
            data: {
              headers: ['English', 'Significa', 'NO significa'],
              rows: [
                ['intoxicated', 'ebrio, bajo efectos de sustancias', 'intoxicado (poisoned)'],
                ['constipated', 'estreñido', 'constipado / resfriado (to have a cold)'],
                ['embarrassed', 'avergonzado', 'embarazada (pregnant)'],
                ['actually', 'en realidad', 'actualmente (currently)'],
                ['eventually', 'finalmente, con el tiempo', 'eventualmente (occasionally)'],
                ['to assist', 'ayudar', 'asistir a un lugar (to attend)'],
                ['to realize', 'darse cuenta', 'realizar (to carry out)'],
                ['to discuss', 'tratar, exponer', 'discutir / reñir (to argue)'],
                ['condition', 'estado clínico, afección', 'condición / requisito (requirement)'],
                ['severe', 'grave', 'severo de carácter (strict)'],
                ['labor', 'trabajo de parto', 'labor / tarea (task)'],
                ['disgrace', 'deshonra', 'desgracia (misfortune)'],
              ],
            },
          },
        ],
      },
      {
        id: 'iff-3',
        number: 3,
        title: 'The two that cost the most',
        keyTerms: ['intoxicated', 'constipated'],
        blocks: [
          {
            type: 'note',
            content:
              'intoxicated y constipated son los dos más peligrosos: en una historia clínica invierten el sentido de lo que se documenta. "The patient is intoxicated" = está ebrio, no envenenado (poisoned). "The patient is constipated" = está estreñido, no resfriado (has a cold). Escribir el falso cognado cambia el cuadro clínico.',
          },
        ],
      },
    ],
  },

  // ── Unidad VI · Semana 4 ──────────────────────────────────────────────
  {
    id: 'ingles-scientific-literature',
    title: 'Reading Scientific Literature',
    subtitle: 'Estructura IMRaD, lectura de abstracts y el inglés como lingua franca',
    colorKey: 'lectoescritura',
    categoria: 'Comunicación clínica',
    emoji: '📄',
    keyPoints: [
      'Most research papers follow the IMRaD structure: Introduction, Methods, Results, and Discussion.',
      'The abstract is a miniature of the whole paper; read it first to decide if the paper is relevant.',
      'Read strategically: abstract → figures/tables → discussion → methods, not top to bottom.',
      'English is the lingua franca of medicine: the vast majority of current literature is in English.',
      'The share of German references fell from 80–90% (1920) to 10–20% (1995).',
      'Good clinical record-keeping is the everyday counterpart of clear scientific writing.',
    ],
    sections: [
      {
        id: 'isl-1',
        number: 1,
        title: 'Adelanto',
        blocks: [
          {
            type: 'note',
            title: 'Adelanto — aún no impartido',
            content:
              'Este tema procede del libro de texto de la materia, no de una clase impartida. Corresponde a la Unidad VI del programa, prevista para la Semana 4. El profesor puede recortarlo, reordenarlo o enfatizar otros puntos. Úsalo para ir por delante, no como guía de lo que entra en el parcial de esta semana.',
          },
          {
            type: 'correlacion',
            variant: 'dato',
            title: 'Inglés, lingua franca',
            content: 'El inglés es la lingua franca de la medicina: la mayoría de los artículos indexados en PubMed están en inglés, y leerlo da acceso a la evidencia más reciente.',
          },
        ],
      },
      {
        id: 'isl-2',
        number: 2,
        title: 'The IMRaD structure',
        keyTerms: ['IMRaD', 'introduction', 'methods', 'results', 'discussion'],
        blocks: [
          {
            type: 'table',
            title: 'The four sections of a research paper',
            data: {
              headers: ['Section', 'Answers the question'],
              rows: [
                ['Introduction', 'Why was the study done? (background, gap, aim)'],
                ['Methods', 'How was it done? (design, subjects, procedures)'],
                ['Results', 'What was found? (data, figures, tables)'],
                ['Discussion', 'What does it mean? (interpretation, limitations, conclusion)'],
              ],
            },
          },
        ],
      },
      {
        id: 'isl-3',
        number: 3,
        title: 'How to read an abstract',
        keyTerms: ['abstract', 'background', 'objective', 'conclusion'],
        blocks: [
          {
            type: 'list',
            title: 'A structured abstract mirrors IMRaD',
            items: [
              'Background / Objective — the question and why it matters.',
              'Methods — study design and population in one or two lines.',
              'Results — the key numbers (effect size, p-value, confidence interval).',
              'Conclusion — the take-home message.',
            ],
          },
          {
            type: 'steps',
            title: 'Read strategically, not top to bottom',
            steps: [
              'Read the abstract to decide if the paper is relevant.',
              'Look at the figures and tables — they carry the results.',
              'Read the discussion for the interpretation.',
              'Go to the methods only if you need to judge the quality.',
            ],
          },
        ],
      },
      {
        // Fuente: The Language of Medicine (PDF 1–4) + English as an International Language of Medicine (PDF 1–2).
        id: 'isl-4',
        number: 4,
        title: 'English as the lingua franca of medicine',
        keyTerms: ['lingua franca', 'scientific English'],
        blocks: [
          {
            type: 'paragraph',
            content: 'For most of the 20th century the language of medical science shifted decisively toward English. Reading the current literature — and publishing in it — requires English. — El inglés es hoy la lengua vehicular de la ciencia médica.',
          },
          {
            type: 'note',
            content: 'Dato de The Language of Medicine: la proporción de referencias en alemán cayó de un 80–90 % en 1920 a un 10–20 % en 1995, mientras el inglés se volvió dominante.',
          },
        ],
      },
      {
        // Fuente: Medical Record Keeping for Quality Patient Care (PDF 1–8).
        id: 'isl-5',
        number: 5,
        title: 'From reading to writing: clinical records',
        keyTerms: ['record keeping', 'clarity', 'documentation'],
        blocks: [
          {
            type: 'list',
            title: 'Good clinical record-keeping (Medical record keeping…)',
            items: [
              'Write legibly, date and sign every entry.',
              'Be accurate, objective and contemporaneous (write it at the time).',
              'Avoid ambiguous abbreviations (see the do-not-use list).',
              'Record what was done and why, including what was NOT done and the reason.',
              'The record is a legal document: if it is not written down, it did not happen.',
            ],
          },
        ],
      },
    ],
  },
]
