/*
 * MedLex — Terminología Médica Greco-Latina
 * Fuente: ENP UNAM · Paula Abramo Tostado, 2015
 * Datos adaptados para integración en MedCore
 *
 * ATRIBUCIÓN OBLIGATORIA: Preservar en el pie de página de la sección Terminología.
 */

export interface MedLexTerm {
  id: string
  termino: string
  tipo: 'prefijo' | 'sufijo' | 'raiz'
  origen: 'griego' | 'latino'
  significado: string
  ejemplos: string[]
  sistema: string   // 'general' | 'cardiovascular' | 'digestivo' | 'nervioso' | 'respiratorio' | 'musculoesqueletico' | 'urinario' | 'endocrino' | 'tegumentario' | 'oncologia'
}

// Etiquetas de visualización para los sistemas
export const SISTEMA_LABELS: Record<string, string> = {
  general:           'General',
  cardiovascular:    'Cardiovascular',
  digestivo:         'Digestivo',
  nervioso:          'Nervioso',
  respiratorio:      'Respiratorio',
  musculoesqueletico:'Músculo-Esquelético',
  urinario:          'Urinario',
  endocrino:         'Endocrino',
  tegumentario:      'Tegumentario',
  oncologia:         'Oncología',
}

export const SISTEMA_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  general:           { bg: 'bg-zinc-100',    text: 'text-zinc-700',    border: 'border-zinc-200'   },
  cardiovascular:    { bg: 'bg-red-100',     text: 'text-red-700',     border: 'border-red-200'    },
  digestivo:         { bg: 'bg-amber-100',   text: 'text-amber-700',   border: 'border-amber-200'  },
  nervioso:          { bg: 'bg-violet-100',  text: 'text-violet-700',  border: 'border-violet-200' },
  respiratorio:      { bg: 'bg-sky-100',     text: 'text-sky-700',     border: 'border-sky-200'    },
  musculoesqueletico:{ bg: 'bg-orange-100',  text: 'text-orange-700',  border: 'border-orange-200' },
  urinario:          { bg: 'bg-blue-100',    text: 'text-blue-700',    border: 'border-blue-200'   },
  endocrino:         { bg: 'bg-yellow-100',  text: 'text-yellow-700',  border: 'border-yellow-200' },
  tegumentario:      { bg: 'bg-lime-100',    text: 'text-lime-700',    border: 'border-lime-200'   },
  oncologia:         { bg: 'bg-purple-100',  text: 'text-purple-700',  border: 'border-purple-200' },
}

// ══════════════════════════════════════════════════
// PREFIJOS — 40 entradas
// ══════════════════════════════════════════════════
const prefijos: MedLexTerm[] = [
  { id: 'a-an', termino: 'a-, an-', tipo: 'prefijo', origen: 'griego', significado: 'Sin, privación, negación', ejemplos: ['anemia', 'afagia', 'anestesia', 'anoxia'], sistema: 'general' },
  { id: 'anti', termino: 'anti-', tipo: 'prefijo', origen: 'griego', significado: 'Contra, opuesto', ejemplos: ['antibiótico', 'antiinflamatorio', 'antídoto', 'antiséptico'], sistema: 'general' },
  { id: 'auto', termino: 'auto-', tipo: 'prefijo', origen: 'griego', significado: 'Propio, por sí mismo', ejemplos: ['autoinmune', 'autopsia', 'autofagia'], sistema: 'general' },
  { id: 'bi-bis', termino: 'bi-, bis-', tipo: 'prefijo', origen: 'latino', significado: 'Dos, doble', ejemplos: ['bilateral', 'bíceps', 'bifurcación', 'bipolar'], sistema: 'general' },
  { id: 'brady', termino: 'brady-', tipo: 'prefijo', origen: 'griego', significado: 'Lento', ejemplos: ['bradicardia', 'bradipnea', 'bradicinesia'], sistema: 'cardiovascular' },
  { id: 'cefal', termino: 'cefal-', tipo: 'prefijo', origen: 'griego', significado: 'Cabeza', ejemplos: ['cefalea', 'cefalalgia', 'hidrocefalia', 'macrocefalia'], sistema: 'nervioso' },
  { id: 'dis', termino: 'dis-', tipo: 'prefijo', origen: 'griego', significado: 'Difícil, anormal, defectuoso', ejemplos: ['disfagia', 'disnea', 'disfunción', 'displasia', 'dismenorrea'], sistema: 'general' },
  { id: 'endo', termino: 'endo-', tipo: 'prefijo', origen: 'griego', significado: 'Dentro, interior', ejemplos: ['endoscopia', 'endocardio', 'endometrio', 'endocrina'], sistema: 'general' },
  { id: 'entero', termino: 'entero-', tipo: 'prefijo', origen: 'griego', significado: 'Intestino', ejemplos: ['enteritis', 'gastroenteritis', 'enterocolitis'], sistema: 'digestivo' },
  { id: 'eritro', termino: 'eritro-', tipo: 'prefijo', origen: 'griego', significado: 'Rojo', ejemplos: ['eritrocito', 'eritremia', 'eritropoyetina'], sistema: 'cardiovascular' },
  { id: 'eu', termino: 'eu-', tipo: 'prefijo', origen: 'griego', significado: 'Bien, normal, bueno', ejemplos: ['eupnea', 'euforia', 'eutiroidismo'], sistema: 'general' },
  { id: 'exo-extra', termino: 'exo-, extra-', tipo: 'prefijo', origen: 'griego', significado: 'Fuera, exterior', ejemplos: ['exoftalmia', 'exocrina', 'extracorporal', 'extracelular'], sistema: 'general' },
  { id: 'gastro', termino: 'gastro-', tipo: 'prefijo', origen: 'griego', significado: 'Estómago', ejemplos: ['gastrología', 'gastritis', 'gastrectomía', 'gastroparesia'], sistema: 'digestivo' },
  { id: 'hemo-hemato', termino: 'hemo-, hemato-', tipo: 'prefijo', origen: 'griego', significado: 'Sangre', ejemplos: ['hematología', 'hemorragia', 'hematoma', 'hemofilia'], sistema: 'cardiovascular' },
  { id: 'hiper', termino: 'hiper-', tipo: 'prefijo', origen: 'griego', significado: 'Exceso, sobre, encima', ejemplos: ['hipertensión', 'hiperglucemia', 'hipertiroidismo', 'hipertrofia'], sistema: 'general' },
  { id: 'hipo', termino: 'hipo-', tipo: 'prefijo', origen: 'griego', significado: 'Debajo, deficiencia, insuficiente', ejemplos: ['hipoglucemia', 'hipotensión', 'hipoxia', 'hipotiroidismo'], sistema: 'general' },
  { id: 'leuco', termino: 'leuco-', tipo: 'prefijo', origen: 'griego', significado: 'Blanco', ejemplos: ['leucocito', 'leucemia', 'leucopenia', 'leucorrea'], sistema: 'cardiovascular' },
  { id: 'macro', termino: 'macro-', tipo: 'prefijo', origen: 'griego', significado: 'Grande, largo', ejemplos: ['macrocefalia', 'macrófago', 'macroscópico'], sistema: 'general' },
  { id: 'micro', termino: 'micro-', tipo: 'prefijo', origen: 'griego', significado: 'Pequeño', ejemplos: ['microbioma', 'microscopio', 'microorganismo', 'microcefalia'], sistema: 'general' },
  { id: 'oftalmo', termino: 'oftalmo-', tipo: 'prefijo', origen: 'griego', significado: 'Ojo', ejemplos: ['oftalmología', 'oftalmoscopio', 'oftalmopatía'], sistema: 'general' },
  { id: 'oto', termino: 'oto-', tipo: 'prefijo', origen: 'griego', significado: 'Oído', ejemplos: ['otología', 'otitis', 'otorrinolaringología', 'otoscopia'], sistema: 'general' },
  { id: 'peri', termino: 'peri-', tipo: 'prefijo', origen: 'griego', significado: 'Alrededor, cerca', ejemplos: ['pericardio', 'periostio', 'peritonitis', 'periférico'], sistema: 'general' },
  { id: 'poli', termino: 'poli-', tipo: 'prefijo', origen: 'griego', significado: 'Muchos, varios', ejemplos: ['polineuropatía', 'polifagia', 'policitemia', 'poliartritis'], sistema: 'general' },
  { id: 'psico', termino: 'psico-, psiq-', tipo: 'prefijo', origen: 'griego', significado: 'Mente, alma', ejemplos: ['psicología', 'psiquiatría', 'psicosis', 'psicoterapeuta'], sistema: 'nervioso' },
  { id: 'rino', termino: 'rino-', tipo: 'prefijo', origen: 'griego', significado: 'Nariz', ejemplos: ['rinología', 'rinitis', 'rinoplastia', 'rinofaringitis'], sistema: 'respiratorio' },
  { id: 'sub', termino: 'sub-', tipo: 'prefijo', origen: 'latino', significado: 'Bajo, debajo de', ejemplos: ['subcutáneo', 'sublingual', 'submucosa', 'subclavio'], sistema: 'general' },
  { id: 'taqui', termino: 'taqui-', tipo: 'prefijo', origen: 'griego', significado: 'Rápido', ejemplos: ['taquicardia', 'taquipnea', 'taquiarritmia'], sistema: 'cardiovascular' },
  { id: 'trombo', termino: 'trombo-', tipo: 'prefijo', origen: 'griego', significado: 'Coágulo, trombo', ejemplos: ['trombosis', 'tromboflebitis', 'tromboembolia', 'trombocito'], sistema: 'cardiovascular' },
  { id: 'trans', termino: 'trans-', tipo: 'prefijo', origen: 'latino', significado: 'A través de, más allá', ejemplos: ['transfusión', 'transplante', 'transdermal'], sistema: 'general' },
  { id: 'neo', termino: 'neo-', tipo: 'prefijo', origen: 'griego', significado: 'Nuevo, reciente', ejemplos: ['neoplasia', 'neonatal', 'neovascular'], sistema: 'oncologia' },
]

// ══════════════════════════════════════════════════
// SUFIJOS — 23 entradas
// ══════════════════════════════════════════════════
const sufijos: MedLexTerm[] = [
  { id: 'algia', termino: '-algia', tipo: 'sufijo', origen: 'griego', significado: 'Dolor', ejemplos: ['neuralgia', 'mialgia', 'cefalalgia', 'artralgia', 'gastralgia'], sistema: 'general' },
  { id: 'ectomia', termino: '-ectomía', tipo: 'sufijo', origen: 'griego', significado: 'Extirpación quirúrgica', ejemplos: ['apendicectomía', 'gastrectomía', 'mastectomía', 'nefrectomía'], sistema: 'general' },
  { id: 'emia', termino: '-emia', tipo: 'sufijo', origen: 'griego', significado: 'Condición de la sangre', ejemplos: ['anemia', 'leucemia', 'hipoglucemia', 'bacteriemia', 'septicemia'], sistema: 'cardiovascular' },
  { id: 'fobia', termino: '-fobia', tipo: 'sufijo', origen: 'griego', significado: 'Miedo, temor irracional', ejemplos: ['claustrofobia', 'aracnofobia', 'hematofobia', 'agorafobia'], sistema: 'nervioso' },
  { id: 'grafia', termino: '-grafía', tipo: 'sufijo', origen: 'griego', significado: 'Registro gráfico, imagen diagnóstica', ejemplos: ['electrocardiografía', 'radiografía', 'tomografía', 'ecografía'], sistema: 'general' },
  { id: 'iatria', termino: '-iatría', tipo: 'sufijo', origen: 'griego', significado: 'Tratamiento médico, especialidad', ejemplos: ['psiquiatría', 'pediatría', 'geriatría', 'podiatría'], sistema: 'general' },
  { id: 'itis', termino: '-itis', tipo: 'sufijo', origen: 'griego', significado: 'Inflamación', ejemplos: ['hepatitis', 'artritis', 'dermatitis', 'otitis', 'bronquitis'], sistema: 'general' },
  { id: 'logia', termino: '-logía', tipo: 'sufijo', origen: 'griego', significado: 'Estudio, tratado, ciencia', ejemplos: ['cardiología', 'neurología', 'dermatología', 'oncología'], sistema: 'general' },
  { id: 'megalia', termino: '-megalia', tipo: 'sufijo', origen: 'griego', significado: 'Agrandamiento, aumento de tamaño', ejemplos: ['cardiomegalia', 'hepatomegalia', 'esplenomegalia', 'acromegalia'], sistema: 'general' },
  { id: 'oma', termino: '-oma', tipo: 'sufijo', origen: 'griego', significado: 'Tumor, masa, neoplasia', ejemplos: ['carcinoma', 'fibroma', 'melanoma', 'sarcoma', 'lipoma'], sistema: 'oncologia' },
  { id: 'oscopia', termino: '-oscopia', tipo: 'sufijo', origen: 'griego', significado: 'Examen visual con instrumento', ejemplos: ['laparoscopia', 'endoscopia', 'colonoscopia', 'artroscopia'], sistema: 'general' },
  { id: 'ostomia', termino: '-ostomía', tipo: 'sufijo', origen: 'griego', significado: 'Apertura quirúrgica artificial', ejemplos: ['colostomía', 'traqueostomía', 'ileostomía', 'cistostomía'], sistema: 'general' },
  { id: 'otomia', termino: '-otomía', tipo: 'sufijo', origen: 'griego', significado: 'Incisión, corte quirúrgico', ejemplos: ['traqueotomía', 'laparotomía', 'craniotomía', 'flebotomía'], sistema: 'general' },
  { id: 'patia', termino: '-patía', tipo: 'sufijo', origen: 'griego', significado: 'Enfermedad, padecimiento', ejemplos: ['neuropatía', 'miopatía', 'cardiopatía', 'hepatopatía'], sistema: 'general' },
  { id: 'penia', termino: '-penia', tipo: 'sufijo', origen: 'griego', significado: 'Deficiencia, disminución', ejemplos: ['leucopenia', 'trombocitopenia', 'neutropenia', 'eritropenia'], sistema: 'cardiovascular' },
  { id: 'plasia', termino: '-plasia', tipo: 'sufijo', origen: 'griego', significado: 'Formación, desarrollo celular', ejemplos: ['displasia', 'hipoplasia', 'neoplasia', 'aplasia'], sistema: 'oncologia' },
  { id: 'plastia', termino: '-plastia', tipo: 'sufijo', origen: 'griego', significado: 'Reparación o reconstrucción quirúrgica', ejemplos: ['rinoplastia', 'mamoplastia', 'angioplastia', 'artroplastia'], sistema: 'general' },
  { id: 'rragia', termino: '-rragia', tipo: 'sufijo', origen: 'griego', significado: 'Flujo excesivo, hemorragia', ejemplos: ['hemorragia', 'metrorragia', 'menorragia', 'otorragia'], sistema: 'cardiovascular' },
  { id: 'sclerosis', termino: '-sclerosis', tipo: 'sufijo', origen: 'griego', significado: 'Endurecimiento, fibrosis', ejemplos: ['arteriosclerosis', 'esclerosis múltiple', 'aterosclerosis'], sistema: 'cardiovascular' },
  { id: 'uria', termino: '-uria', tipo: 'sufijo', origen: 'griego', significado: 'Condición o presencia en orina', ejemplos: ['hematuria', 'glucosuria', 'proteinuria', 'piuria', 'oliguria'], sistema: 'urinario' },
  { id: 'osis', termino: '-osis', tipo: 'sufijo', origen: 'griego', significado: 'Proceso, condición patológica', ejemplos: ['cianosis', 'fibrosis', 'tuberculosis', 'esclerosis', 'trombosis'], sistema: 'general' },
  { id: 'ectasia', termino: '-ectasia', tipo: 'sufijo', origen: 'griego', significado: 'Dilatación, expansión', ejemplos: ['bronquiectasia', 'angiectasia', 'telangiectasia'], sistema: 'respiratorio' },
  { id: 'lisis', termino: '-lisis', tipo: 'sufijo', origen: 'griego', significado: 'Destrucción, desintegración', ejemplos: ['hemólisis', 'lipolisis', 'glucólisis', 'diálisis', 'fibrinólisis'], sistema: 'general' },
]

// ══════════════════════════════════════════════════
// RAÍCES — 28 entradas
// ══════════════════════════════════════════════════
const raices: MedLexTerm[] = [
  { id: 'artro', termino: 'artro-', tipo: 'raiz', origen: 'griego', significado: 'Articulación', ejemplos: ['artritis', 'artroscopia', 'artroplastia', 'artralgia'], sistema: 'musculoesqueletico' },
  { id: 'bio', termino: 'bio-', tipo: 'raiz', origen: 'griego', significado: 'Vida', ejemplos: ['biología', 'biopsia', 'bioquímica', 'antibiótico'], sistema: 'general' },
  { id: 'bronco', termino: 'bronco-', tipo: 'raiz', origen: 'griego', significado: 'Bronquio', ejemplos: ['bronquitis', 'bronconeumonía', 'broncoespasmo', 'bronquiectasia'], sistema: 'respiratorio' },
  { id: 'cardio', termino: 'cardio-', tipo: 'raiz', origen: 'griego', significado: 'Corazón', ejemplos: ['cardiología', 'cardiograma', 'cardiopatía', 'cardiomegalia'], sistema: 'cardiovascular' },
  { id: 'cito-raiz', termino: 'cito-', tipo: 'raiz', origen: 'griego', significado: 'Célula', ejemplos: ['citología', 'citoplasma', 'citotoxicidad', 'leucocito'], sistema: 'general' },
  { id: 'cole', termino: 'cole-', tipo: 'raiz', origen: 'griego', significado: 'Bilis', ejemplos: ['colelitiasis', 'colecistitis', 'coledocolitiasis', 'colestasis'], sistema: 'digestivo' },
  { id: 'cranio', termino: 'cranio-', tipo: 'raiz', origen: 'latino', significado: 'Cráneo', ejemplos: ['craniotomía', 'craneofacial', 'craniofaringioma'], sistema: 'nervioso' },
  { id: 'dermo-raiz', termino: 'dermo-, dermato-', tipo: 'raiz', origen: 'griego', significado: 'Piel', ejemplos: ['dermatosis', 'dermis', 'epidermis', 'dermatología'], sistema: 'tegumentario' },
  { id: 'estomato', termino: 'estomato-', tipo: 'raiz', origen: 'griego', significado: 'Boca', ejemplos: ['estomatología', 'estomatitis', 'estomatoscopio'], sistema: 'digestivo' },
  { id: 'faringo', termino: 'faringo-', tipo: 'raiz', origen: 'griego', significado: 'Faringe', ejemplos: ['faringitis', 'faringoscopia', 'rinofaringitis'], sistema: 'respiratorio' },
  { id: 'flebo', termino: 'flebo-, flebо-', tipo: 'raiz', origen: 'griego', significado: 'Vena', ejemplos: ['flebotomía', 'flebitis', 'flebología', 'tromboflebitis'], sistema: 'cardiovascular' },
  { id: 'gluco', termino: 'gluco-, glico-', tipo: 'raiz', origen: 'griego', significado: 'Glucosa, azúcar', ejemplos: ['glucemia', 'glucosuria', 'glucógeno', 'hiperglucemia'], sistema: 'endocrino' },
  { id: 'hepato-raiz', termino: 'hepato-', tipo: 'raiz', origen: 'griego', significado: 'Hígado', ejemplos: ['hepatocito', 'hepatopatía', 'hepatomegalia', 'hepatitis'], sistema: 'digestivo' },
  { id: 'linfo', termino: 'linfo-', tipo: 'raiz', origen: 'latino', significado: 'Linfa, sistema linfático', ejemplos: ['linfocito', 'linfoma', 'linfadenitis', 'linfangitis'], sistema: 'cardiovascular' },
  { id: 'lipo-raiz', termino: 'lipo-', tipo: 'raiz', origen: 'griego', significado: 'Grasa, lípido', ejemplos: ['lipoma', 'lipoprotína', 'liposarcoma', 'lipolisis'], sistema: 'endocrino' },
  { id: 'mio-raiz', termino: 'mio-', tipo: 'raiz', origen: 'griego', significado: 'Músculo', ejemplos: ['miocardio', 'miositis', 'miopatía', 'mialgia'], sistema: 'musculoesqueletico' },
  { id: 'nefro-raiz', termino: 'nefro-', tipo: 'raiz', origen: 'griego', significado: 'Riñón', ejemplos: ['nefrología', 'nefropatía', 'nefrectomía', 'nefritis'], sistema: 'urinario' },
  { id: 'neuro-raiz', termino: 'neuro-', tipo: 'raiz', origen: 'griego', significado: 'Nervio, sistema nervioso', ejemplos: ['neurona', 'neuropatía', 'neurología', 'neurocirugía'], sistema: 'nervioso' },
  { id: 'onco-raiz', termino: 'onco-', tipo: 'raiz', origen: 'griego', significado: 'Tumor, masa', ejemplos: ['oncogén', 'oncología', 'oncólogo'], sistema: 'oncologia' },
  { id: 'osteo-raiz', termino: 'osteo-', tipo: 'raiz', origen: 'griego', significado: 'Hueso', ejemplos: ['osteoblasto', 'osteoporosis', 'osteomielitis', 'osteosarcoma'], sistema: 'musculoesqueletico' },
  { id: 'pancreo', termino: 'pancreo-', tipo: 'raiz', origen: 'griego', significado: 'Páncreas', ejemplos: ['pancreatitis', 'pancreatectomía', 'pancreatología'], sistema: 'digestivo' },
  { id: 'pleur', termino: 'pleur-', tipo: 'raiz', origen: 'griego', significado: 'Pleura, costado', ejemplos: ['pleuritis', 'pleuroneumonía', 'derrame pleural', 'pleuroscopia'], sistema: 'respiratorio' },
  { id: 'pneumo-raiz', termino: 'pneumo-, neumo-', tipo: 'raiz', origen: 'griego', significado: 'Pulmón, aire', ejemplos: ['neumonía', 'neumotórax', 'neumopatía', 'neumoconiosis'], sistema: 'respiratorio' },
  { id: 'reno', termino: 'reno-', tipo: 'raiz', origen: 'latino', significado: 'Riñón (término latino)', ejemplos: ['renal', 'renograma', 'suprarrenal', 'insuficiencia renal'], sistema: 'urinario' },
  { id: 'sarco', termino: 'sarco-', tipo: 'raiz', origen: 'griego', significado: 'Carne, tejido muscular', ejemplos: ['sarcoma', 'sarcoidosis', 'sarcoplasma'], sistema: 'oncologia' },
  { id: 'traqueo', termino: 'traqueo-', tipo: 'raiz', origen: 'griego', significado: 'Tráquea', ejemplos: ['traqueotomía', 'traqueostomía', 'traqueobronquitis'], sistema: 'respiratorio' },
  { id: 'utero', termino: 'utero-', tipo: 'raiz', origen: 'latino', significado: 'Útero', ejemplos: ['uterografía', 'útero', 'uterotomía', 'intraútero'], sistema: 'general' },
  { id: 'vaso', termino: 'vaso-', tipo: 'raiz', origen: 'latino', significado: 'Vaso sanguíneo, recipiente', ejemplos: ['vasoconstricción', 'vasodilatación', 'vascular', 'cardiovascular'], sistema: 'cardiovascular' },
]

// Dataset completo: 91 términos
export const medlexTerms: MedLexTerm[] = [...prefijos, ...sufijos, ...raices]

// Estadísticas
export const MEDLEX_STATS = {
  total:    medlexTerms.length,   // 81 tras deduplicación
  prefijos: prefijos.length,      // 30 (10 raíces removidas del array incorrecto)
  sufijos:  sufijos.length,       // 23
  raices:   raices.length,        // 28
}

// Lista de sistemas únicos presentes en los datos
export const SISTEMAS_DISPONIBLES = [
  'todos',
  ...Array.from(new Set(medlexTerms.map(t => t.sistema))).sort(),
]
