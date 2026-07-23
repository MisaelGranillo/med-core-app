/*
 * Plan de Estudios — Medicina, Universidad Autónoma de Durango (UAD)
 * Modalidad Mixta-Virtual · RVOE Federal 20261019 · 14 periodos / 7 años
 *
 * ┌─ SOURCE NOTE ─────────────────────────────────────────────────────────┐
 * │ Las etiquetas y nombres se transcriben VERBATIM de la hoja oficial,     │
 * │ incluidas sus inconsistencias. No corregir en silencio:                 │
 * │                                                                         │
 * │  • El periodo 10 se rotula "Décimo Cuatrimestre"; todos los demás son   │
 * │    "Semestre". Se conserva tal cual.                                     │
 * │  • La numeración de Servicio Social está invertida en la fuente:        │
 * │    periodo 13 = "Servicio Social II", periodo 14 = "Servicio Social I". │
 * │  • La fuente contiene los errores tipográficos                          │
 * │    "Seciones Anatomoclinicas" (periodo 10) y "Terceavo" (periodo 13).   │
 * │    Se transcriben sin corregir.                                          │
 * │                                                                         │
 * │ Los `id` (slugs) son estables y NO deben cambiar aunque se corrija un   │
 * │ nombre; sirven como clave de enlace profundo.                           │
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
        { id: 'anatomia-humana-diseccion-1', name: 'Anatomía Humana y Disección I', hasLab: true, tags: ['anatomia'] },
        { id: 'bioquimica-1', name: 'Bioquímica I y su laboratorio', hasLab: true, tags: ['bioquimica'] },
        { id: 'genetica-basica', name: 'Genética Básica' },
        { id: 'embriologia-1', name: 'Embriología I', tags: ['anatomia'] },
        { id: 'ingles-medico-1', name: 'Inglés Médico I', tags: ['ingles'] },
        { id: 'histologia-1', name: 'Histología I y su Laboratorio', hasLab: true },
        { id: 'medicina-humanistica', name: 'Medicina Humanística' },
      ],
    },
    {
      index: 2,
      label: 'Segundo Semestre',
      subjects: [
        { id: 'anatomia-humana-diseccion-2', name: 'Anatomía humana y disección II', hasLab: true, tags: ['anatomia'] },
        { id: 'bioquimica-2', name: 'Bioquímica II y su laboratorio', hasLab: true, tags: ['bioquimica'] },
        { id: 'embriologia-2', name: 'Embriología II', tags: ['anatomia'] },
        { id: 'histologia-2', name: 'Histología II y su laboratorio', hasLab: true },
        { id: 'ingles-medico-2', name: 'Inglés Médico II', tags: ['ingles'] },
        { id: 'neuroanatomia-1', name: 'Neuroanatomía I', tags: ['anatomia', 'nervioso'] },
        { id: 'historia-filosofia-medicina', name: 'Historia y Filosofía de la Medicina' },
      ],
    },
    {
      index: 3,
      label: 'Tercer Semestre',
      subjects: [
        { id: 'fisiologia-1', name: 'Fisiología I y su Laboratorio', hasLab: true, tags: ['fisiologia'] },
        { id: 'epidemiologia-bioestadistica', name: 'Epidemiología y Bioestadística', tags: ['salud-publica', 'investigacion'] },
        { id: 'microbiologia', name: 'Microbiología y su laboratorio', hasLab: true },
        { id: 'neuroanatomia-2', name: 'Neuroanatomía II', tags: ['anatomia', 'nervioso'] },
        { id: 'ingles-medico-3', name: 'Inglés Médico III', tags: ['ingles'] },
        { id: 'informatica-aplicada-medicina', name: 'Informática aplicada a la Medicina' },
        { id: 'farmacologia-1', name: 'Farmacología I' },
      ],
    },
    {
      index: 4,
      label: 'Cuarto Semestre',
      subjects: [
        { id: 'fisiologia-2', name: 'Fisiología II y su laboratorio', hasLab: true, tags: ['fisiologia'] },
        { id: 'salud-publica', name: 'Salud Pública', tags: ['salud-publica'] },
        { id: 'parasitologia', name: 'Parasitología y su Laboratorio', hasLab: true },
        { id: 'psicologia-medica', name: 'Psicología Médica' },
        { id: 'aprendizaje-por-competencias', name: 'Aprendizaje por Competencias' },
        { id: 'metodologia-investigacion', name: 'Metodología de la Investigación', tags: ['investigacion'] },
        { id: 'farmacologia-2', name: 'Farmacología II' },
      ],
    },
    {
      index: 5,
      label: 'Quinto Semestre',
      subjects: [
        { id: 'introduccion-clinica-1', name: 'Introducción a la Clínica I' },
        { id: 'patologia-1', name: 'Patologia I' },
        { id: 'nosologia-1', name: 'Nosología I' },
        { id: 'tecnicas-quirurgicas', name: 'Técnicas Quirúrgicas' },
        { id: 'medicina-basada-evidencias', name: 'Medicina Basada en Evidencias', tags: ['investigacion'] },
        { id: 'bioetica', name: 'Bioética' },
      ],
    },
    {
      index: 6,
      label: 'Sexto Semestre',
      subjects: [
        { id: 'introduccion-clinica-2', name: 'Introducción a la Clínica II' },
        { id: 'patologia-2', name: 'Patología II' },
        { id: 'infectologia', name: 'Infectología' },
        { id: 'inmunologia', name: 'Inmunología' },
        { id: 'aprendizaje-basado-problemas', name: 'Aprendizaje basado en problemas' },
        { id: 'medicina-legal-trabajo', name: 'Medicina legal y del trabajo' },
      ],
    },
    {
      index: 7,
      label: 'Séptimo Semestre',
      subjects: [
        { id: 'psiquiatria', name: 'Psiquiatría' },
        { id: 'neurologia', name: 'Neurología', tags: ['nervioso'] },
        { id: 'cardiologia', name: 'Cardiología', tags: ['cardiovascular'] },
        { id: 'gastroenterologia', name: 'Gastroenterología', tags: ['digestivo'] },
        { id: 'sesiones-anatomoclinicas-1', name: 'Sesiones Anatomoclínicas I', tags: ['anatomia'] },
        { id: 'nutricion-medica', name: 'Nutrición Médica' },
        { id: 'urgencias-medico-quirurgicas', name: 'Urgencias Medico Quirúrgicas' },
      ],
    },
    {
      index: 8,
      label: 'Octavo Semestre',
      subjects: [
        { id: 'cirugia-general', name: 'Cirugía General' },
        { id: 'oftalmologia', name: 'Oftalmología' },
        { id: 'otorrinolaringologia', name: 'Otorrinolaringología' },
        { id: 'traumatologia-ortopedia', name: 'Traumatología y Ortopedia', tags: ['musculoesqueletico'] },
        { id: 'sesiones-anatomoclinicas-2', name: 'Sesiones Anatomoclínicas II', tags: ['anatomia'] },
        { id: 'imagenologia-1', name: 'Imagenología I' },
        { id: 'medicina-fisica-rehabilitacion', name: 'Medicina Física y Rehabilitación' },
      ],
    },
    {
      index: 9,
      label: 'Noveno Semestre',
      subjects: [
        { id: 'ginecologia-1', name: 'Ginecología I' },
        { id: 'obstetricia', name: 'Obstetricia' },
        { id: 'endocrinologia', name: 'Endocrinología', tags: ['endocrino'] },
        { id: 'dermatologia', name: 'Dermatología', tags: ['tegumentario'] },
        { id: 'sesiones-anatomoclinicas-3', name: 'Sesiones Anatomoclínicas III', tags: ['anatomia'] },
        { id: 'neumologia', name: 'Neumología', tags: ['respiratorio'] },
        { id: 'oncologia-general', name: 'Oncología General' },
      ],
    },
    {
      index: 10,
      label: 'Décimo Cuatrimestre', // SOURCE NOTE: rotulado "Cuatrimestre" en la fuente; los demás periodos son "Semestre".
      subjects: [
        { id: 'pediatria-1', name: 'Pediatría I' },
        { id: 'pediatria-2', name: 'Pediatría II' },
        { id: 'medicina-familiar', name: 'Medicina Familiar' },
        { id: 'nefrologia', name: 'Nefrología', tags: ['urinario'] },
        { id: 'sesiones-anatomoclinicas-4', name: 'Seciones Anatomoclinicas IV', tags: ['anatomia'] }, // SOURCE NOTE: typo "Seciones Anatomoclinicas" en la fuente.
        { id: 'geriatria', name: 'Geriatría' },
        { id: 'medicina-critica', name: 'Medicina Crítica' },
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
      label: 'Terceavo Semestre', // SOURCE NOTE: typo "Terceavo" en la fuente (por "Treceavo").
      subjects: [
        { id: 'servicio-social-2', name: 'Servicio Social II' }, // SOURCE NOTE: numeración invertida en la fuente (periodo 13 = II).
      ],
    },
    {
      index: 14,
      label: 'Catorceavo Semestre',
      subjects: [
        { id: 'servicio-social-1', name: 'Servicio Social I' }, // SOURCE NOTE: numeración invertida en la fuente (periodo 14 = I).
      ],
    },
  ],
}
