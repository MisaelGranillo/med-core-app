/* Ajustes — Ruta /ajustes
 *
 * Perfil (nombre), tema (Sistema · Claro · Oscuro), tamaño de texto (Pequeño ·
 * Normal · Grande) y respaldo del progreso. Todo se guarda en este dispositivo;
 * tema y tamaño también se cambian desde el botón de Apariencia de la barra. */

import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Desktop, DownloadSimple, HandHeart, Moon, Sun, UploadSimple } from '@phosphor-icons/react'
import { useSettings, type FontScale, type Theme } from '../store/useSettings'
import { NOMBRE_MAX, useProfile } from '../store/useProfile'
import { aplicarRespaldo, descargarRespaldo, leerRespaldo, type Respaldo } from '../utils/respaldo'

const THEMES: { value: Theme; label: string; hint: string; icon: typeof Sun }[] = [
  { value: 'sistema', label: 'Sistema', hint: 'Sigue al dispositivo', icon: Desktop },
  { value: 'claro',   label: 'Claro',   hint: 'Fondo gris suave',     icon: Sun },
  { value: 'oscuro',  label: 'Oscuro',  hint: 'Para estudiar de noche', icon: Moon },
]

// Cada opción muestra su propio tamaño (la «Aa» crece), así el control se
// autoexplica sin depender del valor activo. `preview` es fijo, no escala.
const SIZES: { value: FontScale; label: string; hint: string; preview: string }[] = [
  { value: 'pequeno', label: 'Pequeño', hint: '−12,5 %',     preview: 'text-[15px]' },
  { value: 'normal',  label: 'Normal',  hint: 'Por defecto', preview: 'text-[22px]' },
  { value: 'grande',  label: 'Grande',  hint: '+15 %',       preview: 'text-[30px]' },
]

export function Ajustes() {
  const { theme, setTheme, fontScale, setFontScale } = useSettings()

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-12 flex flex-col gap-6">
        <header>
          <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900">
            Ajustes
          </h1>
          <p className="mt-2 text-base text-zinc-500 max-w-[55ch]">
            Se guardan en este dispositivo. El tema y el tamaño de texto también se cambian desde el botón de apariencia de la barra superior.
          </p>
        </header>

        <Perfil />

        {/* Tema */}
        <section className="card p-6 sm:p-7" aria-labelledby="h-tema">
          <h2 id="h-tema" className="font-display text-xl font-normal text-zinc-900">Tema</h2>
          <p className="text-[0.9375rem] text-zinc-500 mt-1 mb-5">Elige claro, oscuro o que siga al sistema.</p>
          <div className="grid grid-cols-3 gap-3">
            {THEMES.map(({ value, label, hint, icon: Icon }) => {
              const active = theme === value
              return (
                <button
                  key={value}
                  onClick={() => setTheme(value)}
                  aria-pressed={active}
                  className={`relative flex flex-col items-center justify-center gap-2 py-5 px-2 rounded-2xl border transition-colors duration-150
                    ${active ? 'bg-primary-tint border-primary text-primary-ink' : 'bg-surface border-zinc-200 text-zinc-700 hover:border-zinc-300'}`}
                >
                  {active && (
                    <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check weight="bold" className="w-3 h-3 text-primary-fg" />
                    </span>
                  )}
                  <Icon weight={active ? 'fill' : 'regular'} className="w-6 h-6" />
                  <span className="text-[0.9375rem]">{label}</span>
                  <span className={`text-xs text-center ${active ? 'text-primary-ink' : 'text-zinc-500'}`}>{hint}</span>
                </button>
              )
            })}
          </div>
        </section>

        {/* Tamaño de texto */}
        <section className="card p-6 sm:p-7" aria-labelledby="h-texto">
          <h2 id="h-texto" className="font-display text-xl font-normal text-zinc-900">Tamaño de texto</h2>
          <p className="text-[0.9375rem] text-zinc-500 mt-1 mb-5">
            Ajusta el tamaño de todo el texto de la app. Verás el efecto de inmediato.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {SIZES.map(opt => {
              const active = fontScale === opt.value
              return (
                <button
                  key={opt.value}
                  onClick={() => setFontScale(opt.value)}
                  aria-pressed={active}
                  className={`relative flex flex-col items-center justify-center gap-2 py-5 rounded-2xl border transition-colors duration-150
                    ${active ? 'bg-primary-tint border-primary text-primary-ink' : 'bg-surface border-zinc-200 text-zinc-700 hover:border-zinc-300'}`}
                >
                  {active && (
                    <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check weight="bold" className="w-3 h-3 text-primary-fg" />
                    </span>
                  )}
                  <span className={`font-display font-light leading-none h-8 flex items-end ${opt.preview}`}>Aa</span>
                  <span className="text-[0.9375rem]">{opt.label}</span>
                  <span className={`text-xs ${active ? 'text-primary-ink' : 'text-zinc-500'}`}>{opt.hint}</span>
                </button>
              )
            })}
          </div>

          {/* Muestra en vivo: reacciona al cambio sin salir de la página */}
          <div className="mt-6 rounded-2xl bg-zinc-100 p-5">
            <p className="text-sm text-zinc-500 mb-2">Vista previa</p>
            <p className="text-base text-zinc-800 leading-relaxed">
              El paciente refiere disnea de esfuerzo de seis meses de evolución, con tos seca
              y antecedente de asma en la infancia. A la exploración se auscultan crepitantes
              inspiratorios finos en ambas bases.
            </p>
          </div>
        </section>

        <RespaldoSeccion />

        <Link to="/apoya" className="card card-interactive p-5 sm:p-6 flex items-center gap-4">
          <span className="w-11 h-11 rounded-2xl bg-primary-tint text-primary flex items-center justify-center flex-shrink-0">
            <HandHeart weight="regular" className="w-5 h-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-base text-zinc-900">Apoya a MedCore</span>
            <span className="block text-sm text-zinc-500 mt-0.5">MedCore es gratis. Mira lo que cuesta mantenerlo y cómo aportar.</span>
          </span>
          <ArrowRight weight="regular" className="w-4 h-4 text-primary flex-shrink-0" />
        </Link>

        {/* Créditos / atribución de terceros */}
        <section className="card p-6 sm:p-7" aria-labelledby="h-creditos">
          <h2 id="h-creditos" className="font-display text-xl font-normal text-zinc-900">Créditos</h2>
          <p className="text-[0.9375rem] text-zinc-500 mt-1 mb-4">
            Recursos de terceros utilizados en MedCore.
          </p>
          <p className="text-[0.9375rem] text-zinc-700 leading-relaxed">
            Las ilustraciones provienen de{' '}
            <a
              href="https://bioart.niaid.nih.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary-hover"
            >
              NIAID NIH BioART Source
            </a>{' '}
            (bioart.niaid.nih.gov): la mayoría de dominio público y algunas bajo licencia{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary-hover"
            >
              CC BY 4.0
            </a>
            . Cada figura cita su entrada. Algunas fueron adaptadas (recortadas/optimizadas) para su uso en la app.
          </p>
          <p className="text-[0.9375rem] text-zinc-700 leading-relaxed mt-3">
            Las láminas de Anatomía del Atlas y el visor 3D usan modelos de Open 3D Model / Z-Anatomy (basados en BodyParts3D) bajo licencia{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary-hover"
            >
              CC BY-SA 4.0
            </a>
            ; las imágenes renderizadas a partir de ellos se comparten con la misma licencia.
          </p>
          <p className="text-[0.9375rem] text-zinc-700 leading-relaxed mt-3">
            Algunas láminas incluyen fotografías, micrografías e ilustraciones de{' '}
            <a
              href="https://commons.wikimedia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary-hover"
            >
              Wikimedia Commons
            </a>
            ; cada lámina cita al autor y la licencia de sus imágenes al pie.
          </p>
        </section>
      </div>
    </main>
  )
}

/* ── Perfil: nombre o apodo para el saludo de Inicio ───────────── */
function Perfil() {
  const { nombre, setNombre } = useProfile()
  const [valor, setValor] = useState(nombre)
  const [guardado, setGuardado] = useState(false)
  const limpio = valor.replace(/\s+/g, ' ').trim()
  const cambio = limpio !== nombre

  return (
    <section className="card p-6 sm:p-7" aria-labelledby="h-perfil">
      <h2 id="h-perfil" className="font-display text-xl font-normal text-zinc-900">Perfil</h2>
      <p className="text-[0.9375rem] text-zinc-500 mt-1 mb-5">
        Tu nombre aparece en el saludo de Inicio. No sale de este dispositivo.
      </p>
      <form className="flex flex-wrap items-center gap-3"
            onSubmit={e => { e.preventDefault(); setNombre(valor); setGuardado(true) }}>
        <label htmlFor="nombre" className="sr-only">Nombre o apodo</label>
        <input id="nombre" value={valor} maxLength={NOMBRE_MAX} autoComplete="given-name"
               onChange={e => { setValor(e.target.value); setGuardado(false) }} placeholder="Nombre o apodo"
               className="h-11 flex-1 min-w-0 basis-56 px-4 rounded-2xl bg-surface border border-zinc-200 text-base text-zinc-900
                          placeholder:text-zinc-500 focus:outline-none focus:border-primary" />
        <button type="submit" disabled={!cambio}
                className="h-11 px-5 rounded-2xl bg-primary text-primary-fg text-[0.9375rem] font-medium hover:bg-primary-hover
                           disabled:opacity-50 transition-colors">
          Guardar
        </button>
        <span role="status" className="basis-full text-sm text-zinc-500 min-h-5">
          {guardado && !cambio ? (nombre ? `Listo: «Hola, ${nombre}».` : 'Listo: se quitó el nombre.') : ''}
        </span>
      </form>
    </section>
  )
}

/* ── Respaldo: exportar e importar el progreso como archivo ────── */
function RespaldoSeccion() {
  const input = useRef<HTMLInputElement>(null)
  const [error, setError] = useState('')
  const [pendiente, setPendiente] = useState<Respaldo | null>(null)

  const elegir = async (f: File | undefined) => {
    setError(''); setPendiente(null)
    if (!f) return
    try { setPendiente(leerRespaldo(await f.text())) }
    catch (e) { setError(e instanceof Error ? e.message : 'No se pudo leer el archivo.') }
    if (input.current) input.current.value = ''
  }

  return (
    <section className="card p-6 sm:p-7" aria-labelledby="h-respaldo">
      <h2 id="h-respaldo" className="font-display text-xl font-normal text-zinc-900">Respaldo del progreso</h2>
      <p className="text-[0.9375rem] text-zinc-500 mt-1 mb-5 max-w-[60ch]">
        Tu progreso vive en este navegador. Para pasarlo a otro dispositivo, descarga el respaldo aquí
        y ábrelo allá con «Importar». Incluye tu nombre, temas leídos, quizzes, atlas, plan y ajustes.
      </p>
      <div className="flex flex-wrap gap-3">
        <button onClick={descargarRespaldo}
                className="inline-flex items-center gap-2 h-11 px-4 rounded-2xl bg-surface border border-zinc-200 text-[0.9375rem] text-zinc-800 hover:border-zinc-300 transition-colors">
          <DownloadSimple weight="regular" className="w-[18px] h-[18px] text-primary" />
          Descargar respaldo
        </button>
        <button onClick={() => input.current?.click()}
                className="inline-flex items-center gap-2 h-11 px-4 rounded-2xl bg-surface border border-zinc-200 text-[0.9375rem] text-zinc-800 hover:border-zinc-300 transition-colors">
          <UploadSimple weight="regular" className="w-[18px] h-[18px] text-primary" />
          Importar
        </button>
        <input ref={input} type="file" accept="application/json,.json" className="hidden"
               onChange={e => elegir(e.target.files?.[0])} />
      </div>

      {error && <p role="alert" className="mt-4 text-[0.9375rem] text-zinc-800 rounded-2xl bg-zinc-100 px-4 py-3">{error}</p>}

      {pendiente && (
        <div className="mt-4 rounded-2xl bg-zinc-100 px-4 py-4 flex flex-col gap-3">
          <p className="text-[0.9375rem] text-zinc-800">
            Respaldo del {new Date(pendiente.creado).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}.
            Al importarlo se reemplaza el progreso que hay ahora en este dispositivo.
          </p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => aplicarRespaldo(pendiente)}
                    className="h-10 px-4 rounded-2xl bg-primary text-primary-fg text-[0.9375rem] font-medium hover:bg-primary-hover transition-colors">
              Reemplazar e importar
            </button>
            <button onClick={() => setPendiente(null)}
                    className="h-10 px-4 rounded-2xl text-[0.9375rem] text-zinc-700 hover:bg-zinc-200 transition-colors">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
