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
    id: 'bioestadistica',
    badge: 'UAD · Epidemiología y Bioestadística',
    title: 'Bioestadística',
    subtitle: 'Probabilidad, estadística descriptiva e inferencial aplicadas a las ciencias de la salud.',
    emoji: '📊',
    topicIds: ['probabilidad', 'estadDesc', 'estadInf'],
  },
]
