/* Taller — test de perfil de estudio (/taller/perfil)
 *
 * 23 preguntas en cinco bloques. El contenido sale de
 * data/perfil-estudio.data.json y el cálculo de lib/perfil.ts (portado de la
 * implementación de referencia). Las respuestas nunca salen del navegador.
 * No es un test de estilos de aprendizaje. */

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Barbell, CalendarBlank, Copy, DownloadSimple, Printer } from '@phosphor-icons/react'
import { useAlmacenLocal } from './lib/almacen'
import { descargarTexto, hoyIso } from './lib/archivos'
import { copiarTexto } from './lib/portapapeles'
import {
  ANALOGIA_INTRO, DATOS, ESTRATEGIA_EXPLICA, ORGANIZACION_EXPLICA, PREGUNTAS, TIEMPO_CORTO, TIEMPO_USO, calcularPerfil, encabezado, etiquetaHoras, mayuscula, minuscula,
  opcionesDe, perfilMarkdown, respondida, type Perfil, type Pregunta, type Respuestas,
} from './lib/perfil'
import { Aviso, DatosLocales, EncabezadoHerramienta, btnPrimario, btnSecundario } from './ui/comun'

const TOTAL = PREGUNTAS.length

/** Conserva solo respuestas con la forma esperada. */
function normalizar(v: unknown): Respuestas {
  const r: Respuestas = {}
  const d = (v && typeof v === 'object' ? v : {}) as Record<string, unknown>
  for (const p of PREGUNTAS) {
    const a = d[p.id]
    const validos = opcionesDe(p).map(o => String(o[0]))
    if (p.type === 'multi') {
      if (Array.isArray(a)) r[p.id] = a.map(String).filter(x => validos.includes(x)).slice(0, p.max ?? validos.length)
    } else if (typeof a === 'string' && validos.includes(a)) {
      r[p.id] = a
    }
  }
  return r
}

const vacio = (): Respuestas => ({})

export function TallerPerfil() {
  const { valor: resp, setValor, disponible, borrar } = useAlmacenLocal<Respuestas>('perfil', vacio, normalizar)
  const [faltantes, setFaltantes] = useState<Set<string>>(new Set())
  const [estado, setEstado] = useState('')
  const [perfil, setPerfil] = useState<Perfil | null>(null)
  const [aviso, setAviso] = useState('')
  const resultadoRef = useRef<HTMLDivElement>(null)

  const contestadas = PREGUNTAS.filter(p => respondida(p, resp)).length

  useEffect(() => {
    if (!perfil) return
    resultadoRef.current?.focus({ preventScroll: true })
    resultadoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [perfil])

  function elegir(p: Pregunta, valor: string, marcado: boolean) {
    if (p.type === 'multi') {
      const actual = Array.isArray(resp[p.id]) ? (resp[p.id] as string[]) : []
      let lista = marcado ? [...actual, valor] : actual.filter(v => v !== valor)
      if (p.max && lista.length > p.max) {
        lista = actual
        setEstado(`Elige hasta ${p.max} opciones.`)
      }
      setValor(r => ({ ...r, [p.id]: lista }))
    } else {
      setValor(r => ({ ...r, [p.id]: valor }))
    }
    if (faltantes.has(p.id)) setFaltantes(f => { const n = new Set(f); n.delete(p.id); return n })
  }

  function verPerfil() {
    const faltan = PREGUNTAS.filter(p => !respondida(p, resp))
    setFaltantes(new Set(faltan.map(p => p.id)))
    if (faltan.length) {
      setEstado(`Faltan ${faltan.length} ${faltan.length === 1 ? 'pregunta' : 'preguntas'}. Te llevo a la primera.`)
      const fs = document.getElementById(`fs-${faltan[0].id}`)
      fs?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      fs?.querySelector('input')?.focus({ preventScroll: true })
      return
    }
    setEstado('')
    setPerfil(calcularPerfil(resp))
  }

  function borrarTodo() {
    borrar()
    setPerfil(null)
    setFaltantes(new Set())
    setEstado('Respuestas borradas.')
  }

  async function copiar(md: string) {
    setAviso(await copiarTexto(md) ? 'Copiado.' : 'No se pudo copiar. Usa «Descargar mi perfil».')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-6">
      <div className="flex flex-col gap-6 print:hidden">
        <EncabezadoHerramienta bloque="Bloque 2 · Tu punto de partida" titulo="Test de perfil de estudio">
          <p>Responde pensando en una semana normal de este semestre, no en la ideal. No hay respuestas buenas ni malas. Al final verás a qué hora rindes mejor, qué tipo de tiempo libre tienes, qué tan activa es tu forma de estudiar y tres acciones concretas para la próxima semana.</p>
          <ul className="flex flex-wrap gap-2 text-sm" aria-label="Datos del test">
            {['23 preguntas', '5 a 6 minutos', 'No se envía a ningún lado'].map(t => (
              <li key={t} className="rounded-full bg-surface-2 text-zinc-800 px-3 py-1">{t}</li>
            ))}
          </ul>
        </EncabezadoHerramienta>

        <DatosLocales disponible={disponible} onBorrar={borrarTodo} etiqueta="Borrar respuestas" />

        <div className="sticky top-14 z-20 bg-app py-2 -mx-4 px-4 sm:mx-0 sm:px-0 flex flex-col gap-1.5">
          <div className="h-1.5 rounded-full bg-zinc-200 overflow-hidden" aria-hidden="true">
            <div className="h-full bg-primary transition-[width] duration-200 motion-reduce:transition-none" style={{ width: `${(contestadas / TOTAL) * 100}%` }} />
          </div>
          <p className="text-sm text-zinc-500 tabular-nums" aria-live="polite">{contestadas} de {TOTAL} respondidas</p>
        </div>

        <form noValidate onSubmit={e => { e.preventDefault(); verPerfil() }} className="flex flex-col gap-6">
          {DATOS.blocks.map((b, bi) => (
            <section key={b.id} aria-labelledby={`h-${b.id}`} className="card p-4 sm:p-6 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="w-7 h-7 rounded-full bg-primary text-primary-fg text-sm grid place-items-center flex-shrink-0 tabular-nums">{bi + 1}</span>
                <div>
                  <h2 id={`h-${b.id}`} className="font-display text-xl font-normal text-zinc-900">{b.title}</h2>
                  <p className="text-sm text-zinc-500">{b.intro}</p>
                </div>
              </div>
              {b.items.map(p => <PreguntaCampo key={p.id} p={p} resp={resp} falta={faltantes.has(p.id)} onElegir={elegir} />)}
            </section>
          ))}

          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" className={btnPrimario}>Ver mi perfil</button>
            <p role="status" className="text-sm text-zinc-600">{estado}</p>
          </div>
        </form>
      </div>

      {perfil && <Resultado perfil={perfil} refHead={resultadoRef} aviso={aviso} onCopiar={copiar}
        onDescargar={md => { descargarTexto(`${hoyIso()}_mi-perfil-de-estudio.md`, md, 'text/markdown'); setAviso('Archivo .md descargado.') }} />}
    </div>
  )
}

function PreguntaCampo({ p, resp, falta, onElegir }: {
  p: Pregunta; resp: Respuestas; falta: boolean; onElegir: (p: Pregunta, valor: string, marcado: boolean) => void
}) {
  const multi = p.type === 'multi'
  const actual = resp[p.id]
  const rejilla = p.type === 'hours' ? 'grid grid-cols-3 sm:grid-cols-5 gap-2'
    : p.type === 'freq' || p.type === 'agree' ? 'grid grid-cols-4 gap-2'
      : 'flex flex-wrap gap-2'
  return (
    <fieldset id={`fs-${p.id}`} className="min-w-0 flex flex-col gap-2.5 scroll-mt-32">
      <legend className={`font-medium mb-2.5 ${falta ? 'text-primary-ink' : 'text-zinc-900'}`}>{p.q}</legend>
      {p.hint && <p className="text-sm text-zinc-500 -mt-1">{p.hint}</p>}
      {falta && <p className="text-sm text-primary-ink">Falta esta respuesta.</p>}
      <div className={rejilla}>
        {opcionesDe(p).map(([v, etiqueta]) => {
          const valor = String(v)
          const marcado = multi ? Array.isArray(actual) && actual.includes(valor) : actual === valor
          return (
            <label key={valor} className="relative">
              <input
                type={multi ? 'checkbox' : 'radio'}
                name={p.id}
                value={valor}
                checked={marcado}
                onChange={e => onElegir(p, valor, e.target.checked)}
                className="peer absolute inset-0 opacity-0 cursor-pointer m-0"
              />
              <span className={`flex items-center ${rejilla.startsWith('grid') ? 'justify-center text-center text-sm px-1.5' : 'px-3.5 text-[0.9375rem]'} min-h-[44px] h-full py-2 rounded-xl border border-zinc-200 bg-app text-zinc-800 cursor-pointer peer-checked:border-primary peer-checked:bg-primary-tint peer-checked:text-primary-ink peer-checked:font-medium peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 ${falta ? 'border-primary/60' : ''}`}>
                {etiqueta}
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}

function Medidor({ etiqueta, valor, max, suave, sufijo }: { etiqueta: string; valor: number; max: number; suave?: boolean; sufijo: string }) {
  const pct = max ? Math.min(100, (valor / max) * 100) : 0
  return (
    <div className="grid grid-cols-[7.5em_1fr_4.5em] items-center gap-2 text-[0.8125rem]">
      <span className="text-zinc-800">{etiqueta}</span>
      <span className="h-2 rounded-full bg-zinc-200 overflow-hidden" aria-hidden="true">
        <span className={`block h-full rounded-full ${suave ? 'bg-zinc-400' : 'bg-primary'}`} style={{ width: `${pct}%` }} />
      </span>
      <span className="text-right tabular-nums text-zinc-500">{sufijo}</span>
    </div>
  )
}

const etiquetaCard = 'text-xs uppercase tracking-[0.08em] text-zinc-500'
const valorCard = 'text-[1.375rem] font-semibold leading-tight text-zinc-900'

/** La línea de la analogía del gimnasio al pie de cada tarjeta. */
function Gimnasio({ children }: { children: string }) {
  return (
    <p className="mt-auto pt-2 border-t border-zinc-200 text-sm text-zinc-600 flex items-start gap-2">
      <Barbell weight="regular" className="w-[18px] h-[18px] mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
      <span><span className="sr-only">En el gimnasio: </span>{children}</span>
    </p>
  )
}

function Resultado({ perfil: r, refHead, aviso, onCopiar, onDescargar }: {
  perfil: Perfil; refHead: React.RefObject<HTMLDivElement | null>; aviso: string
  onCopiar: (md: string) => void; onDescargar: (md: string) => void
}) {
  const { titulo, subtitulo } = encabezado(r)
  const E = DATOS.energyLabels[r.energy]
  const md = perfilMarkdown(r, hoyIso())
  return (
    <section aria-labelledby="h-resultado" className="flex flex-col gap-5 scroll-mt-20">
      <div ref={refHead} tabIndex={-1} className="rounded-2xl bg-primary text-primary-fg p-5 sm:p-6 flex flex-col gap-2 focus:outline-none print:bg-transparent print:text-zinc-900 print:border print:border-zinc-300">
        <p className="text-xs uppercase tracking-[0.08em] opacity-80">Tu perfil de estudio</p>
        <h2 id="h-resultado" className="font-display text-[1.625rem] sm:text-[1.875rem] font-normal leading-tight [text-wrap:balance]">{titulo}</h2>
        <p className="opacity-90">{subtitulo}</p>
      </div>

      <p className="text-zinc-700 max-w-[65ch]">{ANALOGIA_INTRO}</p>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="card p-4 flex flex-col gap-2">
          <p className={etiquetaCard}>1 · Tu mejor hora</p>
          <p className={valorCard}>{E}</p>
          <p className="text-sm text-zinc-700">
            {r.energy === 'x'
              ? 'No hay una hora en que rindas claramente mejor. Deja lo más difícil para el momento del día en que te sientas con más energía.'
              : `Es cuando tu cabeza tiene más energía. Guarda para ese momento (${DATOS.energyWindow[r.energy]}) lo más difícil: temas nuevos o complicados.`}
          </p>
          {r.mismatch && <p className="text-sm text-primary-ink">Ojo: casi nunca tienes tiempo libre a esa hora. Intenta apartar aunque sea un bloque a la semana en ese horario.</p>}
          <Gimnasio>Lo pesado se levanta cuando tienes más fuerza.</Gimnasio>
        </div>

        <div className="card p-4 flex flex-col gap-2">
          <p className={etiquetaCard}>2 · Tu tiempo</p>
          <p className={valorCard}>Unas {Math.round(r.totalH)} h a la semana</p>
          <div className="flex flex-col gap-1.5">
            {r.timeItems.map(t => <Medidor key={t.id} etiqueta={mayuscula(TIEMPO_CORTO[t.id])} valor={t.h} max={12} suave={t.id !== r.mainTime.id} sufijo={etiquetaHoras(t.h)} />)}
          </div>
          <p className="text-sm text-zinc-700">
            {r.totalH > 0
              ? `Lo que más tienes son ${TIEMPO_CORTO[r.mainTime.id]}: úsalos ${TIEMPO_USO[r.mainTime.id]}.`
              : 'No marcaste tiempo para estudiar. Empieza por encontrar un rato fijo, aunque sea corto.'}
          </p>
          <Gimnasio>No todo ejercicio necesita una hora: unas sentadillas caben en 10 minutos.</Gimnasio>
        </div>

        <div className="card p-4 flex flex-col gap-2">
          <p className={etiquetaCard}>3 · Cómo estudias</p>
          <p className={valorCard}>{r.activeIdx} de 100 en estudio activo</p>
          <div className="flex flex-col gap-1.5">
            <Medidor etiqueta="Activo" valor={r.active} max={12} sufijo={String(r.activeIdx)} />
            <Medidor etiqueta="Pasivo" valor={r.passive} max={12} suave sufijo={String(r.passiveIdx)} />
          </div>
          <p className="text-sm text-zinc-700"><b className="font-medium text-zinc-900">{r.stratLabel}.</b> {ESTRATEGIA_EXPLICA[r.stratLabel]}</p>
          <p className="text-sm text-zinc-600"><b className="font-medium text-zinc-800">Pasivo</b>: releer, subrayar, resumir, ver videos. <b className="font-medium text-zinc-800">Activo</b>: sacar la información de tu memoria (explicar sin mirar, quizzes, flashcards, casos). El activo cuesta más, y por eso se queda.</p>
          <Gimnasio>Releer es ver a alguien levantar pesas; contestar un quiz es levantarlas tú.</Gimnasio>
        </div>

        <div className="card p-4 flex flex-col gap-2">
          <p className={etiquetaCard}>4 · Cómo organizas tu estudio</p>
          <p className={valorCard}>{r.regIdx} de 100 · {r.regLabel}</p>
          <p className="text-sm text-zinc-700">{ORGANIZACION_EXPLICA[r.regLabel]}</p>
          <p className="text-sm text-zinc-700">Lo que más te falta: «{r.weakestReg.q.replace(/\.$/, '')}».</p>
          <Gimnasio>Un buen entrenador anota, mide y cambia la rutina cuando no funciona.</Gimnasio>
        </div>
      </div>

      <div className="card p-4 sm:p-5 flex flex-col gap-3">
        <h3 className="font-medium text-zinc-900">Tus tres acciones para la próxima semana</h3>
        <p className="text-sm text-zinc-600">Empieza por la primera: es la que más puede mejorar tus resultados.</p>
        <ol className="list-decimal pl-5 flex flex-col gap-3 marker:font-semibold marker:text-primary-ink">
          {r.recs.map(x => (
            <li key={x.title}>
              <b className="block font-medium text-zinc-900">{x.title}</b>
              <span className="text-sm text-zinc-700">{x.body}</span>
              <span className="block text-xs text-primary-ink mt-0.5">Te ayuda: {x.tag}</span>
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap gap-2 print:hidden">
          <Link to="/taller/planificador" className={btnSecundario}>
            <CalendarBlank weight="regular" className="w-[18px] h-[18px]" aria-hidden="true" />
            Armar mi semana
          </Link>
          <Link to="/taller/descargas" className={btnSecundario}>
            <DownloadSimple weight="regular" className="w-[18px] h-[18px]" aria-hidden="true" />
            Ver las plantillas
          </Link>
        </div>
      </div>

      <div className="card p-4 sm:p-5 flex flex-col gap-3">
        <h3 className="font-medium text-zinc-900">Tu experimento de dos semanas</h3>
        <p className="text-sm text-zinc-700">Para comprobar en ti mismo qué funciona mejor:</p>
        <ol className="list-decimal pl-5 flex flex-col gap-1.5 text-sm text-zinc-700 marker:text-primary-ink">
          <li>Elige dos temas parecidos de la misma materia.</li>
          <li><b className="font-medium text-zinc-900">Tema A</b>: estúdialo como siempre ({r.habit.short}).</li>
          <li><b className="font-medium text-primary-ink">Tema B</b>: estúdialo poniéndote a prueba ({r.tryActive.short}).</li>
          <li>A los 7 días, contesta un quiz de los dos sin ver apuntes y compara tus resultados.</li>
        </ol>
        <p className="text-sm text-zinc-600">Que decidan los datos, no la sensación de haber estudiado.</p>
      </div>

      <div className="card p-4 sm:p-5 flex flex-col gap-2">
        <h3 className="font-medium text-zinc-900">Cómo te gusta empezar un tema</h3>
        <p className="text-zinc-800">Te gusta empezar con {r.fmt.join(' y ')}. Úsalo como puerta de entrada al tema; después cierra el material y trata de recordarlo sin verlo.</p>
        <p className="text-sm text-zinc-600">Aun así, el tema manda más que el gusto: anatomía e histología se aprenden con imágenes, la terminología repitiéndola y la clínica con casos.</p>
      </div>

      <div className="card p-4 sm:p-5 flex flex-col gap-3 print:hidden">
        <h3 className="font-medium text-zinc-900">Guarda tu perfil</h3>
        <p className="text-sm text-zinc-600">Descárgalo en Markdown o cópialo y pégalo en tus notas, en Google Docs o en Gemini Notebook.</p>
        <div className="flex flex-wrap gap-2">
          <button type="button" className={btnPrimario} onClick={() => onDescargar(md)}>
            <DownloadSimple weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
            Descargar mi perfil (.md)
          </button>
          <button type="button" className={btnSecundario} onClick={() => onCopiar(md)}>
            <Copy weight="regular" className="w-[18px] h-[18px]" aria-hidden="true" />
            Copiar
          </button>
          <button type="button" className={btnSecundario} onClick={() => window.print()}>
            <Printer weight="regular" className="w-[18px] h-[18px]" aria-hidden="true" />
            Imprimir
          </button>
        </div>
        <Aviso texto={aviso} />
      </div>

      <div className="border-t border-zinc-200 pt-4 flex flex-col gap-2 text-sm text-zinc-600">
        <p><b className="font-medium text-zinc-900">¿Y los estilos de aprendizaje?</b> Este test no te clasifica como visual, auditivo o kinestésico. Que prefieras un formato es real, pero no hay evidencia de que estudiar en tu «estilo» mejore los resultados. Lo que sí la tiene es recuperar de memoria y espaciar el estudio.</p>
        <ul className="flex flex-col gap-1">
          {DATOS.sources.map(([t, u]) => (
            <li key={u}><a href={u} target="_blank" rel="noopener noreferrer" className="text-primary-ink underline underline-offset-2 break-words">{t}</a></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
