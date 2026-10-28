/* Manifiesto de descargas del taller (/taller/descargas).
 *
 * Los archivos viven en public/taller/descargas/ y se copian tal cual del
 * paquete entregado; aquí solo se describen. `bytes` es el tamaño real de cada
 * archivo: scripts/check-taller-descargas.ts (en prebuild) falla si alguno no
 * existe o si su tamaño cambió, para que el manifiesto no quede desactualizado.
 *
 * Archivo autocontenido (sin imports) para que Node pueda leerlo directamente
 * desde el script de verificación. */

export type GrupoDescarga = 'todo' | 'cuaderno' | 'plantilla'
export type FormatoDescarga = 'pdf' | 'zip'
export type Frecuencia = 'diaria' | 'semanal' | 'por clase' | 'por examen' | 'por módulo'
export type Orientacion = 'vertical' | 'horizontal'

export interface Descarga {
  id: string
  titulo: string
  descripcion: string
  /** Nombre del archivo en public/taller/descargas/ (también el nombre al descargar). */
  archivo: string
  formato: FormatoDescarga
  bytes: number
  /** null para el ZIP. */
  paginas: number | null
  /** Solo plantillas. */
  frecuencia: Frecuencia | null
  /** Solo plantillas. */
  orientacion: Orientacion | null
  grupo: GrupoDescarga
}

/** Ruta pública de la carpeta de descargas. */
export const CARPETA_DESCARGAS = '/taller/descargas'

export const DESCARGAS: Descarga[] = [
  {
    id: 'completo-pdf',
    titulo: 'Todo en PDF',
    descripcion: 'Cuaderno de trabajo y las 9 plantillas en un solo archivo, con marcadores por sección.',
    archivo: 'Taller_Autoestudio_Completo.pdf',
    formato: 'pdf', bytes: 534324, paginas: 27,
    frecuencia: null, orientacion: null, grupo: 'todo',
  },
  {
    id: 'todo-zip',
    titulo: 'Todo en ZIP',
    descripcion: 'Los 10 PDF por separado: el cuaderno y cada una de las 9 plantillas.',
    archivo: 'Taller_Autoestudio_Todo.zip',
    formato: 'zip', bytes: 515157, paginas: null,
    frecuencia: null, orientacion: null, grupo: 'todo',
  },
  {
    id: 'cuaderno',
    titulo: 'Cuaderno de trabajo',
    descripcion: 'Los ejercicios de cada bloque del taller: propósito, auditoría de tu semana, sistema, IA como tutor, .md, grabación y Gemini Notebook.',
    archivo: '00_Cuaderno_de_trabajo.pdf',
    formato: 'pdf', bytes: 351699, paginas: 18,
    frecuencia: null, orientacion: 'vertical', grupo: 'cuaderno',
  },
  {
    id: 'kit-plantillas',
    titulo: 'Kit de plantillas',
    descripcion: 'Las 9 plantillas en un solo PDF, con marcadores.',
    archivo: 'Kit_de_plantillas.pdf',
    formato: 'pdf', bytes: 61549, paginas: 9,
    frecuencia: null, orientacion: null, grupo: 'plantilla',
  },
  {
    id: 'planificador-semanal',
    titulo: 'Planificador semanal',
    descripcion: 'Bloquea primero lo fijo y después tus rocas grandes; cada bloque con una acción concreta.',
    archivo: '01_Planificador_semanal.pdf',
    formato: 'pdf', bytes: 37206, paginas: 1,
    frecuencia: 'semanal', orientacion: 'horizontal', grupo: 'plantilla',
  },
  {
    id: 'plan-del-dia',
    titulo: 'Plan del día',
    descripcion: 'Decide antes de empezar y compara al final lo planeado con lo real.',
    archivo: '02_Plan_del_dia.pdf',
    formato: 'pdf', bytes: 36937, paginas: 1,
    frecuencia: 'diaria', orientacion: 'vertical', grupo: 'plantilla',
  },
  {
    id: 'matriz-eisenhower',
    titulo: 'Matriz de Eisenhower',
    descripcion: 'Clasifica cada pendiente con dos preguntas: ¿es urgente? ¿es importante?',
    archivo: '03_Matriz_de_Eisenhower.pdf',
    formato: 'pdf', bytes: 36601, paginas: 1,
    frecuencia: 'semanal', orientacion: 'horizontal', grupo: 'plantilla',
  },
  {
    id: 'revision-semanal',
    titulo: 'Revisión semanal',
    descripcion: '20 minutos el domingo para revisar datos, ajustar y planear la semana siguiente.',
    archivo: '04_Revision_semanal.pdf',
    formato: 'pdf', bytes: 37020, paginas: 1,
    frecuencia: 'semanal', orientacion: 'vertical', grupo: 'plantilla',
  },
  {
    id: 'auditoria-168',
    titulo: 'Auditoría de 168 horas',
    descripcion: 'Registra cómo usas tu semana real, no la que te gustaría.',
    archivo: '05_Auditoria_168_horas.pdf',
    formato: 'pdf', bytes: 36780, paginas: 1,
    frecuencia: 'por módulo', orientacion: 'vertical', grupo: 'plantilla',
  },
  {
    id: 'apuntes-cornell',
    titulo: 'Apuntes de clase (Cornell)',
    descripcion: 'Notas a la derecha y preguntas para recuperar de memoria a la izquierda.',
    archivo: '06_Apuntes_de_clase_Cornell.pdf',
    formato: 'pdf', bytes: 35915, paginas: 1,
    frecuencia: 'por clase', orientacion: 'vertical', grupo: 'plantilla',
  },
  {
    id: 'repeticion-espaciada',
    titulo: 'Registro de repetición espaciada',
    descripcion: 'Repasa cada tema en intervalos crecientes y anota qué tanto lo recordaste.',
    archivo: '07_Registro_repeticion_espaciada.pdf',
    formato: 'pdf', bytes: 36538, paginas: 1,
    frecuencia: 'por módulo', orientacion: 'vertical', grupo: 'plantilla',
  },
  {
    id: 'plan-de-examen',
    titulo: 'Plan de examen',
    descripcion: 'Cuenta regresiva de 14 días: temas, nivel actual y repasos con quiz.',
    archivo: '08_Plan_de_examen.pdf',
    formato: 'pdf', bytes: 37463, paginas: 1,
    frecuencia: 'por examen', orientacion: 'vertical', grupo: 'plantilla',
  },
  {
    id: 'sesion-con-ia',
    titulo: 'Sesión de estudio con IA',
    descripcion: 'Protocolo «yo primero, IA después»: la IA acompaña tu esfuerzo, no lo reemplaza.',
    archivo: '09_Sesion_de_estudio_con_IA.pdf',
    formato: 'pdf', bytes: 36793, paginas: 1,
    frecuencia: 'diaria', orientacion: 'vertical', grupo: 'plantilla',
  },
]
