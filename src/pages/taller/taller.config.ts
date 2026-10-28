/* Configuración editable del Taller de autoestudio estratégico (/taller).
 * Los campos vacíos se muestran como «Por confirmar» o «Enlace pendiente»
 * en la interfaz, así que se pueden llenar después sin tocar componentes. */

export const TALLER = {
  titulo: 'Taller de autoestudio estratégico',
  resumen: 'Planea tu estudio de Medicina como si dirigieras una empresa: propósito, presupuesto de tiempo, sistema y herramientas.',
  publico: 'Estudiantes de Medicina General, UAD Virtual',
  /** Fecha y hora del taller, p. ej. «Sábado 7 de noviembre de 2026, 10:00 h (Ciudad de México)». */
  fecha: '',
  /** Modalidad, p. ej. «En línea por Zoom». */
  modalidad: '',
  duracion: '2 horas',
  regla: 'Todo funciona con un celular y una cuenta de Google gratuita.',
  enlaces: {
    /** Enlace de Google Docs terminado en /copy, que crea una copia del cuaderno en la cuenta de quien lo abre. */
    copiaCuadernoGoogleDocs: '',
    /** Presentación del taller en Canva (enlace de solo lectura). */
    presentacionCanva: '',
  },
} as const
