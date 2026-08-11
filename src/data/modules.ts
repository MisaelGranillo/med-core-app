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
    id: 'ingles-medico-uad-s2',
    badge: 'UAD · Inglés Médico I — Semana 2',
    title: 'Terminología médica: construcción de términos',
    subtitle: 'Raíces, formas combinantes, prefijos y sufijos grecolatinos.',
    emoji: '🧬',
    topicIds: ['ingles-word-parts'],
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
  {
    // Adelanto: contenido tomado del libro de texto, aún no impartido. Va al
    // FINAL del índice a propósito: lo impartido tiene prioridad de orden.
    id: 'ingles-medico-adelanto',
    badge: 'UAD · Inglés Médico I — Adelanto',
    title: 'Inglés Médico · Unidades II a VI',
    subtitle: 'Contenido tomado del libro de texto, aún no impartido en clase. Unidades II a VI del programa.',
    emoji: '📚',
    topicIds: ['ingles-plurals', 'ingles-verb-tenses',
               'ingles-sentence-structure', 'ingles-abbreviations',
               'ingles-false-friends', 'ingles-scientific-literature'],
  },
]
