import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const PARTICLE_COUNT = 72
const BOX = { x: 12, y: 7, z: 6 }
const CONNECT_DIST = 2.2
const PARTICLE_COLORS = [
  0x6366f1, // indigo
  0x14b8a6, // teal
  0x3b82f6, // blue
  0xa855f7, // purple
  0x06b6d4, // cyan
]

export function HeroCanvas({ className = '' }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    // ── Scene / Camera ────────────────────────────────────────
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 9)

    // ── Particles ─────────────────────────────────────────────
    // Positions + velocities stored flat
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)
    const particleColors = new Float32Array(PARTICLE_COUNT * 3)

    const color = new THREE.Color()
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      positions[i3]     = (Math.random() - 0.5) * BOX.x
      positions[i3 + 1] = (Math.random() - 0.5) * BOX.y
      positions[i3 + 2] = (Math.random() - 0.5) * BOX.z

      velocities[i3]     = (Math.random() - 0.5) * 0.003
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.003
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.002

      color.setHex(PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)])
      particleColors[i3]     = color.r
      particleColors[i3 + 1] = color.g
      particleColors[i3 + 2] = color.b
    }

    // Circular sprite texture
    const canvas2d = document.createElement('canvas')
    canvas2d.width = canvas2d.height = 64
    const ctx = canvas2d.getContext('2d')!
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    grad.addColorStop(0, 'rgba(255,255,255,1)')
    grad.addColorStop(0.5, 'rgba(255,255,255,0.6)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 64, 64)
    const sprite = new THREE.CanvasTexture(canvas2d)

    const ptGeo = new THREE.BufferGeometry()
    ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    ptGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))

    const ptMat = new THREE.PointsMaterial({
      size: 0.12,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const points = new THREE.Points(ptGeo, ptMat)
    scene.add(points)

    // ── Lines ──────────────────────────────────────────────────
    const maxLines = PARTICLE_COUNT * PARTICLE_COUNT
    const linePositions = new Float32Array(maxLines * 6)
    const lineColors = new Float32Array(maxLines * 6)

    const lineGeo = new THREE.BufferGeometry()
    const linePosAttr = new THREE.BufferAttribute(linePositions, 3)
    const lineColAttr = new THREE.BufferAttribute(lineColors, 3)
    linePosAttr.setUsage(THREE.DynamicDrawUsage)
    lineColAttr.setUsage(THREE.DynamicDrawUsage)
    lineGeo.setAttribute('position', linePosAttr)
    lineGeo.setAttribute('color', lineColAttr)

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // ── Mouse parallax ────────────────────────────────────────
    let mx = 0, my = 0
    const onMouseMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2
      my = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // ── Resize ────────────────────────────────────────────────
    const onResize = () => {
      if (!el) return
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }
    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(el)

    // ── Animation loop ────────────────────────────────────────
    let raf = 0
    const clock = new THREE.Clock()
    const tempVec = new THREE.Vector3()
    const tempVec2 = new THREE.Vector3()
    const col1 = new THREE.Color()
    const col2 = new THREE.Color()

    function animate() {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Drift particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3
        positions[i3]     += velocities[i3]     + Math.sin(t * 0.3 + i * 0.7) * 0.0005
        positions[i3 + 1] += velocities[i3 + 1] + Math.cos(t * 0.25 + i * 0.9) * 0.0005
        positions[i3 + 2] += velocities[i3 + 2]

        // Bounce off walls
        if (Math.abs(positions[i3])     > BOX.x / 2) velocities[i3]     *= -1
        if (Math.abs(positions[i3 + 1]) > BOX.y / 2) velocities[i3 + 1] *= -1
        if (Math.abs(positions[i3 + 2]) > BOX.z / 2) velocities[i3 + 2] *= -1
      }
      ptGeo.attributes.position.needsUpdate = true

      // Rebuild lines
      let lineCount = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3
        tempVec.set(positions[i3], positions[i3 + 1], positions[i3 + 2])
        col1.set(particleColors[i3], particleColors[i3 + 1], particleColors[i3 + 2])

        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const j3 = j * 3
          tempVec2.set(positions[j3], positions[j3 + 1], positions[j3 + 2])
          const dist = tempVec.distanceTo(tempVec2)
          if (dist < CONNECT_DIST) {
            const base = lineCount * 6
            linePositions[base]     = positions[i3]
            linePositions[base + 1] = positions[i3 + 1]
            linePositions[base + 2] = positions[i3 + 2]
            linePositions[base + 3] = positions[j3]
            linePositions[base + 4] = positions[j3 + 1]
            linePositions[base + 5] = positions[j3 + 2]

            const alpha = 1 - dist / CONNECT_DIST
            col2.set(particleColors[j3], particleColors[j3 + 1], particleColors[j3 + 2])
            const mixed = col1.clone().lerp(col2, 0.5)
            lineColors[base]     = mixed.r * alpha
            lineColors[base + 1] = mixed.g * alpha
            lineColors[base + 2] = mixed.b * alpha
            lineColors[base + 3] = mixed.r * alpha
            lineColors[base + 4] = mixed.g * alpha
            lineColors[base + 5] = mixed.b * alpha
            lineCount++
          }
        }
      }
      lineGeo.setDrawRange(0, lineCount * 2)
      linePosAttr.needsUpdate = true
      lineColAttr.needsUpdate = true

      // Subtle camera parallax
      camera.position.x += (mx * 0.4 - camera.position.x) * 0.05
      camera.position.y += (my * 0.25 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      resizeObserver.disconnect()
      renderer.dispose()
      ptGeo.dispose()
      lineGeo.dispose()
      ptMat.dispose()
      lineMat.dispose()
      sprite.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
