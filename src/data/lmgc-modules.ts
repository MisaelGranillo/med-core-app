/*
 * Plan de Estudios — LMGC (Licenciatura en Medicina General y Comunitaria)
 * Universidad de la Salud, Ciudad de México
 * 6 años · 37 módulos · 262 créditos
 * Diseño pedagógico: Currículo Invertido (Wiggins & McTighe) + ABP
 *
 * ESCALABILIDAD: Para agregar un nuevo módulo basta con añadir una entrada a
 * este array. No se requieren cambios en el código de los componentes.
 * Ver patrón de extensión al final del archivo.
 */

export interface LMGCModule {
  id: string           // Identificador único: 'M01', 'L01', 'INT01', 'SS01'
  codigo: string       // Código de presentación: 'M-01'
  nombre: string       // Nombre completo del módulo
  año: 1 | 2 | 3 | 4 | 5 | 6
  semanas: number | null
  creditos: number
  tipo: 'modular' | 'longitudinal' | 'internado' | 'servicio-social'
  status: 'disponible' | 'en-construccion' | 'bloqueado'
  descripcion: string
  // Vínculos de contenido:
  sistema_corporal: string | null  // Mapea al filtro del visor 3D
  medlex_sistema: string | null    // Mapea al filtro de Terminología MedLex
  pai: boolean                     // Relevante para el programa PAI de admisión
}

export const lmgcModules: LMGCModule[] = [

  // ══════════════════════════════════════════════════
  // AÑO 1 — 7 módulos (4 modulares + 3 longitudinales)
  // ══════════════════════════════════════════════════

  {
    id: 'M01', codigo: 'M-01', año: 1, tipo: 'modular',
    nombre: 'Introducción a la Medicina',
    semanas: 15, creditos: 8, status: 'en-construccion', pai: true,
    descripcion: 'Fundamentos del quehacer médico: el médico como agente de salud, relación médico-paciente, modelo biopsicosocial, ética médica básica y determinantes sociales de la salud. Primer acercamiento al pensamiento clínico y a la metodología ABP.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'M02', codigo: 'M-02', año: 1, tipo: 'modular',
    nombre: 'Ecología y Salud Humana',
    semanas: 11, creditos: 6, status: 'en-construccion', pai: false,
    descripcion: 'Interacción del ser humano con su entorno. Ecosistemas, ciclos biogeoquímicos, contaminación ambiental y sus efectos en la salud colectiva. Epidemiología ambiental y enfoques ecológicos de la medicina comunitaria.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'M03', codigo: 'M-03', año: 1, tipo: 'modular',
    nombre: 'Nutrición y Metabolismo',
    semanas: 11, creditos: 6, status: 'en-construccion', pai: true,
    descripcion: 'Bases bioquímicas de la nutrición humana: macronutrientes, micronutrientes, metabolismo energético y regulación hormonal de la homeostasis metabólica. Evaluación del estado nutricional y malnutrición en el contexto comunitario.',
    sistema_corporal: null, medlex_sistema: 'endocrino',
  },
  {
    id: 'M04', codigo: 'M-04', año: 1, tipo: 'modular',
    nombre: 'Historia y Filosofía de la Medicina',
    semanas: 3, creditos: 2, status: 'en-construccion', pai: false,
    descripcion: 'Evolución del pensamiento médico desde la medicina tradicional hasta la biomedicina contemporánea. Grandes paradigmas: hipocrático, anatomoclínico, fisiopatológico y molecular. Introducción a la bioética y la filosofía de la ciencia médica.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'L01', codigo: 'L-01', año: 1, tipo: 'longitudinal',
    nombre: 'Curso de Vida I',
    semanas: null, creditos: 4, status: 'en-construccion', pai: false,
    descripcion: 'Módulo longitudinal que acompaña al estudiante durante el primer año. Desarrollo humano desde la concepción hasta la adultez temprana. Ciclo vital, hitos del desarrollo y determinantes sociales en cada etapa.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'L02', codigo: 'L-02', año: 1, tipo: 'longitudinal',
    nombre: 'Sociomedicina I',
    semanas: null, creditos: 3, status: 'en-construccion', pai: false,
    descripcion: 'Medicina social y salud colectiva. Determinantes sociales de la salud, sistemas de salud mexicano e internacional, demografía médica y epidemiología descriptiva. Visitas comunitarias y análisis de casos sociales.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'L03', codigo: 'L-03', año: 1, tipo: 'longitudinal',
    nombre: 'Investigación Médica I',
    semanas: null, creditos: 3, status: 'en-construccion', pai: true,
    descripcion: 'Introducción al método científico aplicado a la medicina. Tipos de estudios epidemiológicos, búsqueda bibliográfica, lectura crítica de artículos y presentación de evidencia científica. Base para el pensamiento estadístico en medicina.',
    sistema_corporal: null, medlex_sistema: null,
  },

  // ══════════════════════════════════════════════════
  // AÑO 2 — 9 módulos (7 modulares + 2 longitudinales)
  // SISTEMAS CORPORALES — DISPONIBLES con visor 3D y MedLex
  // ══════════════════════════════════════════════════

  {
    id: 'M05', codigo: 'M-05', año: 2, tipo: 'modular',
    nombre: 'Aparato Locomotor',
    semanas: 12, creditos: 7, status: 'disponible', pai: true,
    descripcion: 'Anatomía y fisiología del sistema músculo-esquelético: huesos, articulaciones, músculos, tendones y ligamentos. Biomecánica del movimiento, patología frecuente (fracturas, artritis, osteoporosis) y exploración física del aparato locomotor.',
    sistema_corporal: 'musculoesqueletico', medlex_sistema: 'musculoesqueletico',
  },
  {
    id: 'M06', codigo: 'M-06', año: 2, tipo: 'modular',
    nombre: 'Aparato Respiratorio',
    semanas: 10, creditos: 6, status: 'disponible', pai: true,
    descripcion: 'Anatomía funcional de las vías aéreas y los pulmones. Mecánica ventilatoria, intercambio gaseoso, regulación de la respiración y equilibrio ácido-base. Enfermedades respiratorias más frecuentes: asma, EPOC, neumonía.',
    sistema_corporal: 'respiratorio', medlex_sistema: 'respiratorio',
  },
  {
    id: 'M07', codigo: 'M-07', año: 2, tipo: 'modular',
    nombre: 'Aparato Cardiovascular',
    semanas: 12, creditos: 7, status: 'disponible', pai: true,
    descripcion: 'Anatomía del corazón y los vasos sanguíneos. Fisiología cardíaca: ciclo cardíaco, gasto cardíaco, presión arterial y regulación. ECG básico, hemodinámica y cardiopatías frecuentes. Principales factores de riesgo cardiovascular.',
    sistema_corporal: 'cardiovascular', medlex_sistema: 'cardiovascular',
  },
  {
    id: 'M08', codigo: 'M-08', año: 2, tipo: 'modular',
    nombre: 'Aparato Urinario',
    semanas: 10, creditos: 6, status: 'disponible', pai: true,
    descripcion: 'Anatomía del riñón, uréteres, vejiga y uretra. Formación de la orina: filtración, reabsorción y secreción tubular. Regulación del balance hidroelectrolítico y ácido-base. Patología renal: insuficiencia renal, infecciones urinarias, litiasis.',
    sistema_corporal: 'urinario', medlex_sistema: 'urinario',
  },
  {
    id: 'M09', codigo: 'M-09', año: 2, tipo: 'modular',
    nombre: 'Aparato Digestivo',
    semanas: 12, creditos: 7, status: 'disponible', pai: true,
    descripcion: 'Anatomía del tubo digestivo y órganos accesorios (hígado, páncreas, vesícula biliar). Fisiología de la digestión y absorción de nutrientes. Microbiota intestinal. Enfermedades digestivas: ERGE, gastritis, hepatitis, síndrome de intestino irritable.',
    sistema_corporal: 'digestivo', medlex_sistema: 'digestivo',
  },
  {
    id: 'M10', codigo: 'M-10', año: 2, tipo: 'modular',
    nombre: 'Sistema Endocrino',
    semanas: 10, creditos: 6, status: 'disponible', pai: true,
    descripcion: 'Anatomía y función de las glándulas endocrinas: hipófisis, tiroides, paratiroides, suprarrenales, páncreas endocrino y gónadas. Regulación hormonal del metabolismo, crecimiento y reproducción. Diabetes mellitus, disfunción tiroidea.',
    sistema_corporal: 'endocrino', medlex_sistema: 'endocrino',
  },
  {
    id: 'M11', codigo: 'M-11', año: 2, tipo: 'modular',
    nombre: 'Sistema Nervioso y Sensorial',
    semanas: 12, creditos: 7, status: 'disponible', pai: true,
    descripcion: 'Neuroanatomía funcional del sistema nervioso central y periférico. Neurotransmisores, sinapsis y circuitos neurales. Sistema nervioso autónomo. Órganos de los sentidos. Síndromes neurológicos frecuentes: cefalea, neuropatías, Parkinson, Alzheimer.',
    sistema_corporal: 'nervioso', medlex_sistema: 'nervioso',
  },
  {
    id: 'L04', codigo: 'L-04', año: 2, tipo: 'longitudinal',
    nombre: 'Informática Biomédica',
    semanas: null, creditos: 3, status: 'en-construccion', pai: false,
    descripcion: 'Herramientas digitales para la práctica médica: expediente clínico electrónico, bases de datos bibliográficas (PubMed, LILACS), telemedicina y análisis estadístico básico. Competencias digitales para la medicina del siglo XXI.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'L05', codigo: 'L-05', año: 2, tipo: 'longitudinal',
    nombre: 'Curso de Vida II',
    semanas: null, creditos: 4, status: 'en-construccion', pai: false,
    descripcion: 'Desarrollo en la adultez: familia, trabajo, salud reproductiva. Transición epidemiológica y carga de enfermedad en México. Envejecimiento y sus implicaciones para el sistema de salud. Perspectiva de género en la atención médica.',
    sistema_corporal: null, medlex_sistema: null,
  },

  // ══════════════════════════════════════════════════
  // AÑO 3 — 8 módulos (6 modulares + 2 longitudinales)
  // ══════════════════════════════════════════════════

  {
    id: 'M12', codigo: 'M-12', año: 3, tipo: 'modular',
    nombre: 'Salud Reproductiva y Género',
    semanas: 11, creditos: 7, status: 'en-construccion', pai: false,
    descripcion: 'Fisiología de la reproducción humana, ciclo menstrual, embarazo, parto y puerperio. Planificación familiar y métodos anticonceptivos. Perspectiva de género en salud, violencia obstétrica y derechos sexuales y reproductivos.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'M13', codigo: 'M-13', año: 3, tipo: 'modular',
    nombre: 'Inmunología y Enfermedades Infecciosas',
    semanas: 12, creditos: 7, status: 'en-construccion', pai: false,
    descripcion: 'Bases de la inmunología: inmunidad innata y adaptativa, respuesta inflamatoria. Principales agentes infecciosos (bacterias, virus, parásitos, hongos) y sus mecanismos de patogenicidad. Vacunas, antimicrobianos y enfermedades tropicales.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'M14', codigo: 'M-14', año: 3, tipo: 'modular',
    nombre: 'Hematología y Sistema Linfático',
    semanas: 9, creditos: 6, status: 'en-construccion', pai: false,
    descripcion: 'Células sanguíneas: eritropoyesis, leucopoyesis y trombopoyesis. Hemostasia y coagulación. Anemias, leucemias y linfomas. Sistema linfático e inmunidad. Interpretación del hemograma completo en la práctica clínica.',
    sistema_corporal: null, medlex_sistema: 'cardiovascular',
  },
  {
    id: 'M15', codigo: 'M-15', año: 3, tipo: 'modular',
    nombre: 'Dermatología y Sistema Tegumentario',
    semanas: 8, creditos: 5, status: 'en-construccion', pai: false,
    descripcion: 'Estructura y función de la piel, pelo y uñas. Semiología dermatológica: tipos de lesiones elementales. Enfermedades dermatológicas frecuentes: dermatitis, psoriasis, acné, melanoma. Piel como espejo de enfermedades sistémicas.',
    sistema_corporal: null, medlex_sistema: 'tegumentario',
  },
  {
    id: 'M16', codigo: 'M-16', año: 3, tipo: 'modular',
    nombre: 'Salud Mental y Psiquiatría',
    semanas: 11, creditos: 7, status: 'en-construccion', pai: false,
    descripcion: 'Bases neurobiológicas de la salud mental. Trastornos mentales más frecuentes: ansiedad, depresión, esquizofrenia, trastornos de la personalidad. Psicofármacos básicos. Modelo biopsicosocial en la atención a la salud mental en la comunidad.',
    sistema_corporal: null, medlex_sistema: 'nervioso',
  },
  {
    id: 'M17', codigo: 'M-17', año: 3, tipo: 'modular',
    nombre: 'Sistema Endocrino Avanzado',
    semanas: 9, creditos: 6, status: 'en-construccion', pai: false,
    descripcion: 'Profundización en fisiopatología endocrina. Síndrome metabólico, obesidad y sus complicaciones. Manejo integral de la diabetes mellitus y complicaciones. Trastornos del eje hipotálamo-hipófisis. Endocrinología del ejercicio.',
    sistema_corporal: null, medlex_sistema: 'endocrino',
  },
  {
    id: 'L06', codigo: 'L-06', año: 3, tipo: 'longitudinal',
    nombre: 'Investigación Médica II',
    semanas: null, creditos: 3, status: 'en-construccion', pai: false,
    descripcion: 'Diseño y ejecución de proyectos de investigación. Estadística inferencial, análisis multivariado básico, presentación de resultados y redacción científica. Introducción a la medicina basada en evidencia (MBE) y revisiones sistemáticas.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'L07', codigo: 'L-07', año: 3, tipo: 'longitudinal',
    nombre: 'Sociomedicina II',
    semanas: null, creditos: 3, status: 'en-construccion', pai: false,
    descripcion: 'Análisis crítico de los sistemas de salud. Políticas públicas en salud en México y América Latina. Medicina comunitaria: diagnóstico de salud, participación social y planificación de intervenciones en comunidades.',
    sistema_corporal: null, medlex_sistema: null,
  },

  // ══════════════════════════════════════════════════
  // AÑO 4 — 8 módulos (6 modulares + 2 longitudinales)
  // ══════════════════════════════════════════════════

  {
    id: 'M18', codigo: 'M-18', año: 4, tipo: 'modular',
    nombre: 'Medicina Familiar y Comunitaria',
    semanas: 12, creditos: 7, status: 'en-construccion', pai: false,
    descripcion: 'El médico general como primer nivel de atención. Historia clínica completa, exploración física sistematizada, razonamiento clínico y toma de decisiones. Prevención primaria, secundaria y terciaria. Atención centrada en la persona y la familia.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'M19', codigo: 'M-19', año: 4, tipo: 'modular',
    nombre: 'Urgencias y Medicina Crítica',
    semanas: 10, creditos: 6, status: 'en-construccion', pai: false,
    descripcion: 'Atención de emergencias médicas: soporte vital básico y avanzado (ACLS/BLS), manejo de vía aérea, choque, politrauma y urgencias cardiovasculares y neurológicas. Triaje y trabajo en el servicio de urgencias hospitalario.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'M20', codigo: 'M-20', año: 4, tipo: 'modular',
    nombre: 'Cirugía Básica',
    semanas: 11, creditos: 7, status: 'en-construccion', pai: false,
    descripcion: 'Principios quirúrgicos: asepsia, hemostasia, tipos de suturas, cicatrización de heridas. Procedimientos quirúrgicos básicos del médico general. Manejo perioperatorio del paciente. Abdomen agudo y cirugías de urgencia más frecuentes.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'M21', codigo: 'M-21', año: 4, tipo: 'modular',
    nombre: 'Geriatría y Gerontología',
    semanas: 8, creditos: 5, status: 'en-construccion', pai: false,
    descripcion: 'Cambios fisiológicos del envejecimiento y sus implicaciones clínicas. Síndromes geriátricos: caídas, delirium, fragilidad, polifarmacia. Valoración geriátrica integral y cuidados paliativos. Demografía del envejecimiento en México.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'M22', codigo: 'M-22', año: 4, tipo: 'modular',
    nombre: 'Pediatría y Neonatología',
    semanas: 11, creditos: 7, status: 'en-construccion', pai: false,
    descripcion: 'Crecimiento y desarrollo infantil. Neonatología: atención del recién nacido, tamiz neonatal. Enfermedades infecciosas y nutricionales en la infancia. Vacunación pediátrica. Pediatría comunitaria y prevención de accidentes en niños.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'M23', codigo: 'M-23', año: 4, tipo: 'modular',
    nombre: 'Salud Pública y Epidemiología',
    semanas: 10, creditos: 6, status: 'en-construccion', pai: true,
    descripcion: 'Epidemiología descriptiva y analítica. Medidas de frecuencia y asociación. Diseño de estudios epidemiológicos. Vigilancia epidemiológica y control de brotes. Programas de salud pública en México. Indicadores de salud a nivel población.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'L08', codigo: 'L-08', año: 4, tipo: 'longitudinal',
    nombre: 'Curso de Vida III',
    semanas: null, creditos: 4, status: 'en-construccion', pai: false,
    descripcion: 'Etapas avanzadas del ciclo vital: vejez, muerte y duelo. Perspectiva intercultural de la salud. Medicina paliativa y cuidados al final de la vida. Aspectos éticos y legales de la muerte en México.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'L09', codigo: 'L-09', año: 4, tipo: 'longitudinal',
    nombre: 'Investigación Médica III',
    semanas: null, creditos: 3, status: 'en-construccion', pai: false,
    descripcion: 'Elaboración y presentación de tesis o tesina. Redacción de artículo científico. Ética en la investigación con seres humanos y comités de ética. Registro en plataformas internacionales de investigación clínica.',
    sistema_corporal: null, medlex_sistema: null,
  },

  // ══════════════════════════════════════════════════
  // AÑO 5 — INTERNADO (4 rotaciones)
  // ══════════════════════════════════════════════════

  {
    id: 'INT01', codigo: 'INT-01', año: 5, tipo: 'internado',
    nombre: 'Internado: Medicina Interna',
    semanas: 12, creditos: 15, status: 'bloqueado', pai: false,
    descripcion: 'Rotación hospitalaria en el servicio de Medicina Interna. Manejo de pacientes hospitalizados con patologías de alta complejidad: insuficiencia cardiaca, EPOC, diabetes descompensada, sepsis. Trabajo interdisciplinario y presentación de casos clínicos.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'INT02', codigo: 'INT-02', año: 5, tipo: 'internado',
    nombre: 'Internado: Cirugía y Especialidades',
    semanas: 12, creditos: 15, status: 'bloqueado', pai: false,
    descripcion: 'Rotación en quirófano y servicios de especialidades quirúrgicas. Participación como asistente en cirugías programadas y de urgencia. Especialidades: Traumatología, Urología, Ginecología y Cirugía General.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'INT03', codigo: 'INT-03', año: 5, tipo: 'internado',
    nombre: 'Internado: Pediatría y Ginecología',
    semanas: 12, creditos: 15, status: 'bloqueado', pai: false,
    descripcion: 'Rotación dual en servicios de Pediatría y Ginecología-Obstetricia. Atención de urgencias pediátricas, seguimiento de recién nacidos. Atención del trabajo de parto, parto y puerperio. Consulta prenatal y planificación familiar.',
    sistema_corporal: null, medlex_sistema: null,
  },
  {
    id: 'INT04', codigo: 'INT-04', año: 5, tipo: 'internado',
    nombre: 'Internado: Medicina Comunitaria',
    semanas: 12, creditos: 15, status: 'bloqueado', pai: false,
    descripcion: 'Rotación en centros de salud comunitarios y unidades de medicina familiar. Atención primaria, consulta de primer nivel, vacunación, programas preventivos. Diagnóstico de salud comunitario y acciones de medicina preventiva.',
    sistema_corporal: null, medlex_sistema: null,
  },

  // ══════════════════════════════════════════════════
  // AÑO 6 — SERVICIO SOCIAL (1 módulo)
  // ══════════════════════════════════════════════════

  {
    id: 'SS01', codigo: 'SS-01', año: 6, tipo: 'servicio-social',
    nombre: 'Servicio Social Comunitario',
    semanas: 52, creditos: 20, status: 'bloqueado', pai: false,
    descripcion: 'Año completo de servicio social en comunidades o unidades de salud del primer nivel. El pasante ejerce como médico responsable bajo supervisión, aplica habilidades clínicas y contribuye a la salud de la comunidad asignada.',
    sistema_corporal: null, medlex_sistema: null,
  },
]

// Total: 37 módulos

// ──────────────────────────────────────────────────────────────
// PATRÓN DE EXTENSIÓN — Cómo agregar un nuevo módulo:
//
//   1. Añade un objeto a este array con los campos requeridos.
//   2. Usa status: 'en-construccion' hasta tener contenido listo.
//   3. Para vincular al visor 3D: añade sistema_corporal con el valor
//      del filtro del visor ('cardiovascular', 'nervioso', etc.).
//   4. Para vincular a MedLex: añade medlex_sistema con el tag del sistema.
//   5. Para marcar como PAI: set pai: true.
//   6. git push origin main → Cloudflare auto-construirá y desplegará.
// ──────────────────────────────────────────────────────────────

// Helpers
export const getModulesByYear = (año: number) =>
  lmgcModules.filter(m => m.año === año)

export const getModuleById = (id: string) =>
  lmgcModules.find(m => m.id === id) ?? null

export const getAvailableModules = () =>
  lmgcModules.filter(m => m.status === 'disponible')

export const getPAIModules = () =>
  lmgcModules.filter(m => m.pai)

export const AÑOS_DISPLAY: Record<number, string> = {
  1: 'Año 1',
  2: 'Año 2',
  3: 'Año 3',
  4: 'Año 4',
  5: 'Internado',
  6: 'Servicio Social',
}

export const TIPO_LABELS: Record<string, string> = {
  modular: 'Módulo',
  longitudinal: 'Longitudinal',
  internado: 'Internado',
  'servicio-social': 'Servicio Social',
}

export const STATUS_STYLES = {
  disponible:       { bg: 'bg-teal-100',   text: 'text-teal-800',  border: 'border-teal-200',  label: 'Disponible'       },
  'en-construccion':{ bg: 'bg-zinc-100',   text: 'text-zinc-600',  border: 'border-zinc-200',  label: 'En construcción'  },
  bloqueado:        { bg: 'bg-zinc-100',   text: 'text-zinc-400',  border: 'border-zinc-200',  label: 'Bloqueado'        },
}
