import type { Module } from '../types'

export const modules: Module[] = [
  {
    id: 'anatomia',
    badge: 'Módulo — Anatomía',
    title: 'Anatomía y Medicina',
    subtitle: 'Sistemas del cuerpo humano: digestivo, urinario, reproductor, circulatorio, respiratorio, locomotor y nervioso.',
    emoji: '🫀',
    topicIds: ['digestivo', 'urinario', 'reproductor', 'circulatorio', 'respiratorio', 'locomotor', 'nervioso'],
  },
  {
    id: 'matematicas',
    badge: 'Módulo 7',
    title: 'Matemáticas y Estadística',
    subtitle: 'Fundamentos numéricos para la resolución de problemas en ciencias de la salud.',
    emoji: '📐',
    topicIds: ['aritmetica', 'algebra', 'probabilidad', 'estadDesc', 'estadInf'],
  },
  {
    id: 'lectura',
    badge: 'Módulo 5',
    title: 'Comprensión de la Lectura',
    subtitle: 'Lenguaje, gramática, redacción y usos del lenguaje para la comunicación efectiva.',
    emoji: '📖',
    topicIds: ['comunicacion', 'lectoescritura', 'gramatica', 'redaccion', 'lenguaje'],
  },
]
