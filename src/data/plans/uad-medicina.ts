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
              },
              {
                number: 2,
                title: 'Osteología II: tórax y miembros',
                temas: [
                  'Esqueleto del tórax: esternón y costillas',
                  'Esqueleto del miembro superior: hombro, brazo y mano',
                  'Esqueleto del miembro inferior: pelvis, fémur, tibia y peroné, huesos del pie',
                ],
              },
              {
                number: 3,
                title: 'Artrología y Miología I',
                temas: [
                  'Artrología: tipos de articulaciones; articulaciones de la cabeza, columna, tórax y miembros',
                  'Miología: tipos de músculos, inserciones y anexos',
                  'Músculos de la cabeza (cráneo, cara, nuca), cuello, región hioidea y prevertebral',
                  'Músculos superficiales cervicales, dorsales y lumbares; músculos del tórax y diafragma',
                ],
              },
              {
                number: 4,
                title: 'Miología II: abdomen, pelvis y miembros',
                temas: [
                  'Músculos del abdomen y región inguinal',
                  'Músculos de la pelvis',
                  'Músculos del miembro superior',
                  'Músculos del miembro inferior',
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
              { title: 'Clase 3 — Huesos de la Cara y Hioides', file: 'Semana 1 - Clase 3 Huesos de la Cara y Hioides.pdf', kind: 'Clase' },
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
              },
            ],
            bibliografia: [
              { title: 'Colección hemerográfica UAD-UD-UDS en plataforma OVID® (190 recursos)', year: '2017', tipo: 'básica' },
            ],
            materiales: [
              { title: 'Medical Terminology — A Living Language (6.ª ed.)', file: 'Medical Terminology - A Living Language 6th ed.pdf', kind: 'Libro' },
              { title: 'Check Your English Vocabulary for Medicine', file: 'Check Your English Vocabulary for Medicine.pdf', kind: 'Cuaderno' },
              { title: 'The Language of Medicine', file: 'The Language of Medicine.pdf', kind: 'Referencia' },
              { title: 'Medical Abbreviations (Studocu)', file: 'Medical Abbreviations (Studocu).pdf', kind: 'Referencia' },
              { title: 'Useful Vocabulary for Medical Students and Practitioners', file: 'Useful Vocabulary for Medical Students and Practitioners.pdf', kind: 'Artículo' },
              { title: 'English as an International Language of Medicine', file: 'English as an international language of medicine.pdf', kind: 'Artículo' },
              { title: 'Importance of English for Medical Students', file: 'Importance of English for medical students.pdf', kind: 'Artículo' },
              { title: 'Importancia del Inglés en las Ciencias de la Salud', file: 'Importancia del Inglés en las Ciencias de la Salud.pdf', kind: 'Artículo' },
              { title: 'The Role of Medical English in Healthcare Education', file: 'The role of medical English in healthcare education.pdf', kind: 'Artículo' },
              { title: 'Medical Record Keeping for Quality Patient Care', file: 'Medical record keeping for quality patient care.pdf', kind: 'Artículo' },
              { title: 'Inglés Médico I — Programa académico', file: 'Inglés Médico I - Programa.pdf', kind: 'Programa' },
              { title: 'Inglés Médico I — Planeación', file: 'Inglés Médico I - Planeación.pdf', kind: 'Planeación' },
            ],
            recursos: [
              { label: 'Acland Anatomy', url: 'https://www.aclandanatomy.com/' },
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
