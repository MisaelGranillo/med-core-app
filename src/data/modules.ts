import type { Module } from '../types'

export const modules: Module[] = [
  {
    id: 'anatomia-uad',
    badge: 'UAD · Anatomía Humana y Disección I',
    title: 'Osteología — Cabeza y Columna',
    subtitle: 'Semana 1: generalidades, planos anatómicos, huesos del cráneo y la cara, y columna vertebral.',
    emoji: '💀',
    topicIds: ['anatomia-generalidades', 'huesos-craneo', 'huesos-cara-hioides', 'columna-vertebral'],
  },
  {
    id: 'ingles-medico-uad',
    badge: 'UAD · Inglés Médico I',
    title: 'Inglés Médico',
    subtitle: 'Semana 1: el expediente clínico en inglés, categorías gramaticales y verbos frasales.',
    emoji: '🩺',
    topicIds: ['ingles-medical-record', 'ingles-parts-of-speech', 'ingles-word-forms'],
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
