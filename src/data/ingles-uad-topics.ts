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
]
