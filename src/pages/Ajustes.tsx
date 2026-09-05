/* Ajustes — Ruta /ajustes
 *
 * Página de preferencias de la app. Por ahora un único control: el tamaño de
 * texto (Pequeño · Normal · Grande), que escala toda la tipografía vía
 * --fs-scale (ver useSettings + src/index.css). Queda preparada para crecer. */

import { TextAa, Check } from '@phosphor-icons/react'
import { useSettings, type FontScale } from '../store/useSettings'

// Cada opción muestra su propio tamaño (la "A" crece), así el control se
// autoexplica sin depender del valor activo. `preview` es fijo, no escala.
const OPTIONS: { value: FontScale; label: string; hint: string; preview: string }[] = [
  { value: 'pequeno', label: 'Pequeño', hint: '−12,5 %', preview: 'text-base' },
  { value: 'normal',  label: 'Normal',  hint: 'Por defecto', preview: 'text-xl' },
  { value: 'grande',  label: 'Grande',  hint: '+15 %', preview: 'text-3xl' },
]

export function Ajustes() {
  const fontScale = useSettings(s => s.fontScale)
  const setFontScale = useSettings(s => s.setFontScale)

  return (
    <main className="flex-1 pb-20 md:pb-0">
      {/* Encabezado */}
      <section className="bg-surface border-b border-zinc-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
            <TextAa weight="fill" className="w-3.5 h-3.5" />
            Ajustes
          </div>
          <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-none mb-2">
            Ajustes
          </h1>
          <p className="text-zinc-500 text-sm max-w-[55ch]">
            Preferencias de la aplicación. Se guardan en este dispositivo y se conservan entre sesiones.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Tamaño de texto */}
        <section className="card p-6">
          <h2 className="font-bold text-zinc-900 mb-1">Tamaño de texto</h2>
          <p className="text-sm text-zinc-500 mb-5">
            Ajusta el tamaño de todo el texto de la app. Verás el efecto de inmediato.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {OPTIONS.map(opt => {
              const active = fontScale === opt.value
              return (
                <button
                  key={opt.value}
                  onClick={() => setFontScale(opt.value)}
                  aria-pressed={active}
                  className={`relative flex flex-col items-center justify-center gap-2 py-6 rounded-2xl border-2 transition-all duration-150
                    ${active
                      ? 'bg-zinc-900 text-white border-zinc-900'
                      : 'bg-surface text-zinc-600 border-zinc-200 hover:border-zinc-400'}`}
                >
                  {active && (
                    <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-surface flex items-center justify-center">
                      <Check weight="bold" className="w-3 h-3 text-zinc-900" />
                    </span>
                  )}
                  <span className={`font-extrabold leading-none ${opt.preview}`}>A</span>
                  <span className="text-sm font-semibold">{opt.label}</span>
                  <span className={`text-xs ${active ? 'text-zinc-300' : 'text-zinc-400'}`}>{opt.hint}</span>
                </button>
              )
            })}
          </div>

          {/* Muestra en vivo — reacciona al cambio sin salir de la página */}
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-[0.6875rem] font-bold uppercase tracking-widest text-zinc-400 mb-2">
              Vista previa
            </p>
            <p className="text-zinc-800 leading-relaxed">
              El paciente refiere disnea de esfuerzo de seis meses de evolución, con tos seca
              y antecedente de asma en la infancia. A la exploración se auscultan crepitantes
              inspiratorios finos en ambas bases.
            </p>
            <p className="text-sm text-zinc-500 mt-2">
              Este texto cambia de tamaño con la opción seleccionada.
            </p>
          </div>
        </section>

        {/* Futuros ajustes: tema, etc. */}
      </div>
    </main>
  )
}
