import type { Module } from '../types'

export const modules: Module[] = [
  {
    id: 'anatomia-uad',
    badge: 'UAD · Anatomía Humana y Disección I',
    title: 'Osteología — Cabeza',
    subtitle: 'Semana 1: generalidades, planos anatómicos y huesos del cráneo, la cara e hioides.',
    emoji: '💀',
    topicIds: ['anatomia-generalidades', 'huesos-craneo', 'huesos-cara-hioides'],
  },
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
