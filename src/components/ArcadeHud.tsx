/* Marcador del estilo Arcade: jugador, nivel y XP, racha, jefes y logros.
 * Solo se muestra cuando Ajustes → Estilo es «Arcade 80s». */

import { Link } from 'react-router-dom'
import { Trophy, Lock } from '@phosphor-icons/react'
import type { Juego } from '../utils/juego'

const BLOQUES = 12

export function ArcadeHud({ juego, nombre }: { juego: Juego; nombre: string }) {
  const llenos = Math.round((juego.xpEnNivel / juego.xpParaSubir) * BLOQUES)
  const logrados = juego.logros.filter((l) => l.ok).length
  return (
    <section className="card p-5 sm:p-6 flex flex-col gap-5" aria-label="Marcador">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <Dato etiqueta="1UP" valor={nombre ? nombre.toUpperCase() : 'P1'} />
        <div className="col-span-2 md:col-span-1 flex flex-col gap-1.5">
          <span className="font-display text-xs text-zinc-500">NIVEL {juego.nivel}</span>
          <span className="flex gap-[3px]" role="meter" aria-label="Experiencia para el siguiente nivel"
            aria-valuemin={0} aria-valuemax={juego.xpParaSubir} aria-valuenow={juego.xpEnNivel}>
            {Array.from({ length: BLOQUES }, (_, i) => (
              <span key={i} className={`h-3 flex-1 ${i < llenos ? 'bg-primary' : 'bg-zinc-200'}`} />
            ))}
          </span>
          <span className="text-xs text-zinc-500 tabular-nums">{juego.xpEnNivel} / {juego.xpParaSubir} XP · {juego.xp} en total</span>
        </div>
        <Dato etiqueta="RACHA" valor={`x${juego.racha}`} nota={juego.racha === 1 ? 'día' : 'días seguidos'} />
        <Dato etiqueta="JEFES" valor={`${juego.jefes.vencidos}/${juego.jefes.total}`} nota="exámenes vencidos" enlace="/quiz#examenes" />
      </div>

      <div>
        <p className="font-display text-xs text-zinc-500 mb-2">LOGROS {logrados}/{juego.logros.length}</p>
        <ul className="flex flex-wrap gap-2">
          {juego.logros.map((l) => (
            <li key={l.id} title={l.descripcion}
              className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 border ${l.ok ? 'border-primary text-primary-ink bg-primary-tint' : 'border-zinc-200 text-zinc-500'}`}>
              {l.ok ? <Trophy weight="fill" className="w-3.5 h-3.5" aria-hidden="true" /> : <Lock className="w-3.5 h-3.5" aria-hidden="true" />}
              <span>{l.titulo}</span>
              <span className="sr-only">{l.ok ? 'conseguido' : `pendiente: ${l.descripcion}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Dato({ etiqueta, valor, nota, enlace }: { etiqueta: string; valor: string; nota?: string; enlace?: string }) {
  const cuerpo = (
    <>
      <span className="font-display text-xs text-zinc-500">{etiqueta}</span>
      <span className="font-display text-2xl text-zinc-900 leading-none mt-1 truncate">{valor}</span>
      {nota && <span className="text-xs text-zinc-500 mt-1">{nota}</span>}
    </>
  )
  return enlace
    ? <Link to={enlace} className="flex flex-col min-w-0 hover:opacity-80">{cuerpo}</Link>
    : <div className="flex flex-col min-w-0">{cuerpo}</div>
}
