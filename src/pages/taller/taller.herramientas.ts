/* Herramientas del taller en el orden de los bloques del cuaderno de trabajo.
 * La portada y la navegación secundaria se generan desde aquí. */
import type { Icon } from '@phosphor-icons/react'
import {
  CalendarBlank, ChatsCircle, ClipboardText, Clock, MarkdownLogo, Microphone, Robot, SquaresFour,
} from '@phosphor-icons/react'

export interface Herramienta {
  slug: string
  titulo: string
  /** Nombre corto para la navegación secundaria. */
  corto: string
  resumen: string
  bloque: string
  icon: Icon
}

export const HERRAMIENTAS: Herramienta[] = [
  { slug: 'semana',        titulo: 'Auditoría de 168 horas',  corto: '168 horas',     bloque: 'Bloque 2',       icon: Clock,
    resumen: 'Registra en qué se va tu semana real y fija tus horas objetivo.' },
  { slug: 'planificador',  titulo: 'Semana ideal',            corto: 'Semana ideal',  bloque: 'Bloque 3',       icon: CalendarBlank,
    resumen: 'Arma tu semana en bloques y expórtala a Google Calendar.' },
  { slug: 'matriz',        titulo: 'Matriz de Eisenhower',    corto: 'Matriz',        bloque: 'Bloque 3',       icon: SquaresFour,
    resumen: 'Ordena tus pendientes por urgencia e importancia.' },
  { slug: 'instrucciones', titulo: 'Instrucciones para tu IA', corto: 'Instrucciones', bloque: 'Bloque 4',       icon: Robot,
    resumen: 'Genera las instrucciones personalizadas de tu tutor de IA.' },
  { slug: 'prompts',       titulo: 'Biblioteca de prompts',   corto: 'Prompts',       bloque: 'Bloque 4',       icon: ChatsCircle,
    resumen: 'Prompts listos para diagnosticar, practicar y repasar.' },
  { slug: 'markdown',      titulo: 'Laboratorio .md',         corto: '.md',           bloque: 'Bloque 5',       icon: MarkdownLogo,
    resumen: 'Escribe apuntes en Markdown y descárgalos.' },
  { slug: 'guia',          titulo: 'Guía rápida',             corto: 'Guía',          bloque: 'Bloques 6 y 7',  icon: Microphone,
    resumen: 'Grabar la clase, transcribirla y estudiar con Gemini Notebook.' },
  { slug: 'revision',      titulo: 'Revisión semanal',        corto: 'Revisión',      bloque: 'Cierre',         icon: ClipboardText,
    resumen: 'Checklist de 20 minutos para cerrar la semana y ajustar la siguiente.' },
]
