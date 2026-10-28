/* Taller — guía rápida de herramientas (/taller/guia)
 *
 * Ruta gratuita para grabar y transcribir clases, tabla de herramientas por
 * nivel de esfuerzo y límites del plan gratuito de Gemini Notebook con su
 * fecha de verificación (taller.content.ts). Página estática, sin datos. */

import { Link } from 'react-router-dom'
import { LIMITES_GEMINI_NOTEBOOK as L } from './taller.content'
import { EncabezadoHerramienta } from './ui/comun'

const RUTA = [
  { titulo: 'Pide permiso', texto: 'Antes de grabar, pide permiso al docente. La grabación es para tu estudio personal: no la compartas ni la publiques.' },
  { titulo: 'Graba con el celular', texto: 'Usa la grabadora que ya trae tu celular (Grabadora en Android, Notas de voz en iPhone). Déjalo cerca de la bocina o del altavoz y con batería suficiente.' },
  { titulo: 'Súbelo a Gemini Notebook', texto: 'Crea un cuaderno por materia en Gemini Notebook (antes NotebookLM) y agrega el audio como fuente. Junto a él puedes subir el PDF de la clase y el capítulo del libro.' },
  { titulo: 'Pide apuntes en .md', texto: 'En el chat del cuaderno, pide la transcripción ordenada como apuntes en Markdown, con una sección aparte de lo que el profesor dijo que viene en el examen.' },
  { titulo: 'Guarda en Drive', texto: 'Guarda el archivo .md en Google Drive con una estructura fija por materia y semana, para encontrarlo en segundos.' },
]

const HERRAMIENTAS = [
  { nivel: 'Ya la tienes', items: [
    { nombre: 'Grabadora del celular', para: 'Grabar la clase' },
    { nombre: 'Google Calendar', para: 'Tu semana ideal en bloques' },
    { nombre: 'Google Drive', para: 'Guardar apuntes y grabaciones' },
    { nombre: 'Google Docs', para: 'Tu copia del cuaderno de trabajo' },
  ] },
  { nivel: '5 minutos', items: [
    { nombre: 'Gemini Notebook', para: 'Cuaderno por materia: transcribir, quiz, flashcards y audio a partir de tus fuentes' },
    { nombre: 'Una IA de chat (Gemini, ChatGPT o Claude)', para: 'Tutor con tus instrucciones personalizadas' },
    { nombre: 'MedCore', para: 'Temas, quizzes y atlas de tus materias' },
  ] },
  { nivel: 'Opcional', items: [
    { nombre: 'Anki', para: 'Repetición espaciada con flashcards' },
    { nombre: 'Un editor de .md (Obsidian u otro)', para: 'Organizar y enlazar tus apuntes' },
  ] },
]

const fechaLegible = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number)
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  return `${d} de ${meses[m - 1]} de ${y}`
}

export function TallerGuia() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-6">
      <EncabezadoHerramienta bloque="Bloques 6 y 7 · Grabar, transcribir y Gemini Notebook" titulo="Guía rápida">
        <p>Todo con un celular y una cuenta de Google gratuita. Lo demás es opcional.</p>
      </EncabezadoHerramienta>

      <section aria-labelledby="h-ruta" className="card p-4 sm:p-6 flex flex-col gap-4">
        <h2 id="h-ruta" className="font-display text-xl font-normal text-zinc-900">Ruta gratuita para grabar tus clases</h2>
        <ol className="flex flex-col gap-4">
          {RUTA.map((p, i) => (
            <li key={p.titulo} className="flex gap-4">
              <span className="w-9 h-9 rounded-full bg-primary-tint text-primary-ink flex items-center justify-center flex-shrink-0 tabular-nums" aria-hidden="true">{i + 1}</span>
              <span className="min-w-0">
                <span className="block text-base text-zinc-900">{p.titulo}</span>
                <span className="block text-[0.9375rem] text-zinc-600 mt-0.5">{p.texto}</span>
              </span>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-2">
          <p className="text-[0.9375rem] text-zinc-700">Estructura sugerida en Drive:</p>
          <pre className="rounded-2xl bg-surface-2 p-4 text-sm text-zinc-800 overflow-x-auto font-sans whitespace-pre">{`Medicina/
  Histología/
    Semana-01/
      2026-11-03_histologia_apunte.md
      clase-1.m4a
    Semana-02/
  Bioquímica/
    Semana-01/`}</pre>
        </div>
        <p className="text-sm text-zinc-500">
          Los prompts para convertir la transcripción están en la <Link to="/taller/prompts" className="text-primary underline underline-offset-2">biblioteca de prompts</Link>, categoría «Transcripción de clase a apuntes».
        </p>
      </section>

      <section aria-labelledby="h-herr" className="card p-4 sm:p-6 flex flex-col gap-3">
        <h2 id="h-herr" className="font-display text-xl font-normal text-zinc-900">Herramientas por nivel</h2>
        <table className="w-full text-[0.9375rem]">
          <thead>
            <tr className="text-left text-sm text-zinc-500">
              <th scope="col" className="font-normal pb-2">Herramienta</th>
              <th scope="col" className="font-normal pb-2">Para qué</th>
            </tr>
          </thead>
          {HERRAMIENTAS.map(g => (
            <tbody key={g.nivel} className="divide-y divide-zinc-200">
              <tr>
                <th scope="colgroup" colSpan={2} className="text-left font-medium text-primary-ink pt-4 pb-1">{g.nivel}</th>
              </tr>
              {g.items.map(h => (
                <tr key={h.nombre}>
                  <th scope="row" className="font-normal text-left align-top py-2 pr-3 text-zinc-900">{h.nombre}</th>
                  <td className="py-2 text-zinc-700 align-top">{h.para}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </section>

      <section aria-labelledby="h-limites" className="card p-4 sm:p-6 flex flex-col gap-3">
        <h2 id="h-limites" className="font-display text-xl font-normal text-zinc-900">Límites del plan gratuito de Gemini Notebook</h2>
        <dl className="grid grid-cols-2 gap-3">
          {[
            { n: L.cuadernos, t: 'cuadernos' },
            { n: L.fuentesPorCuaderno, t: 'fuentes por cuaderno' },
            { n: L.preguntasPorDia, t: 'preguntas al chat por día' },
            { n: L.audiosPorDia, t: 'resúmenes en audio por día' },
          ].map(x => (
            <div key={x.t} className="rounded-2xl bg-surface-2 p-4 flex flex-col-reverse gap-1">
              <dt className="text-sm text-zinc-600">{x.t}</dt>
              <dd className="font-display font-extralight text-[2.25rem] leading-none text-zinc-900 tabular-nums">{x.n}</dd>
            </div>
          ))}
        </dl>
        <p className="text-sm text-zinc-500">Verificado el {fechaLegible(L.verificado)}. Google cambia estos límites; revisa la ayuda de Gemini Notebook si notas algo distinto.</p>
        <p className="text-sm text-zinc-600">No subas datos de pacientes ni información personal de terceros a ninguna herramienta de IA.</p>
      </section>
    </div>
  )
}
