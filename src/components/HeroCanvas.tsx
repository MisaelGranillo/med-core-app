/* HeroCanvas — fondo animado CSS, sin dependencias de Three.js */

import { useEffect, useRef } from 'react'

const DOTS = 52
const COLORS = ['#6366f1', '#14b8a6', '#3b82f6', '#a855f7', '#06b6d4']

interface Dot {
  x: number; y: number; vx: number; vy: number
  r: number; color: string; alpha: number
}

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let W = 0, H = 0

    const dots: Dot[] = []

    function resize() {
      W = canvas!.width  = canvas!.offsetWidth
      H = canvas!.height = canvas!.offsetHeight
    }

    function init() {
      dots.length = 0
      for (let i = 0; i < DOTS; i++) {
        dots.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: 2 + Math.random() * 2.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 0.35 + Math.random() * 0.5,
        })
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)

      // Conectar puntos cercanos
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 140
          if (dist < maxDist) {
            ctx!.beginPath()
            ctx!.strokeStyle = `rgba(99,102,241,${(1 - dist / maxDist) * 0.18})`
            ctx!.lineWidth = 1
            ctx!.moveTo(dots[i].x, dots[i].y)
            ctx!.lineTo(dots[j].x, dots[j].y)
            ctx!.stroke()
          }
        }
      }

      // Dibujar puntos
      for (const d of dots) {
        ctx!.beginPath()
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx!.fillStyle = d.color + Math.round(d.alpha * 255).toString(16).padStart(2, '0')
        ctx!.fill()

        // Mover
        d.x += d.vx; d.y += d.vy
        if (d.x < -10) d.x = W + 10
        if (d.x > W + 10) d.x = -10
        if (d.y < -10) d.y = H + 10
        if (d.y > H + 10) d.y = -10
      }

      raf = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(() => { resize(); init() })
    ro.observe(canvas)
    resize(); init(); draw()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  )
}
