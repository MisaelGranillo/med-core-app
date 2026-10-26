/* Ajustes — Ruta /ajustes
 *
 * Preferencias de la app: tema (Sistema · Claro · Oscuro) y tamaño de texto
 * (Pequeño · Normal · Grande). Ambos se guardan en este dispositivo
 * (useSettings) y también se cambian desde el botón de Apariencia de la barra. */

import { Check, Desktop, Moon, Sun } from '@phosphor-icons/react'
import { useSettings, type FontScale, type Theme } from '../store/useSettings'

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
            Se guardan en este dispositivo. También puedes cambiarlos desde el botón de apariencia de la barra superior.
          </p>
        </header>

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
