import { useEffect, useRef, useState } from 'react'

// Dynamic starfield + neuron network canvas background
export default function BackgroundFX({ className = '' }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(!!mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: true })

    let w, h, dpr
    const stars = []
    const neurons = []
    let mouseX = 0.5, mouseY = 0.2 // normalized

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const init = () => {
      stars.length = 0
      neurons.length = 0
      const area = w * h
      const starDensity = reduced ? 18000 : 12000
      const neuronDensity = reduced ? 13000 : 9000
      const starCount = Math.floor(area / starDensity)
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.2 + 0.2,
          tw: Math.random() * 2 * Math.PI,
          s: 0.2 + Math.random() * 0.8,
        })
      }
      const neuronMax = reduced ? 60 : 90
      const neuronCount = Math.min(neuronMax, Math.floor(area / neuronDensity))
      for (let i = 0; i < neuronCount; i++) {
        neurons.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: 1 + Math.random() * 2,
        })
      }
    }

    let t = 0
    const loop = () => {
      animationRef.current = requestAnimationFrame(loop)
      t += reduced ? 0.002 : 0.005
      ctx.clearRect(0, 0, w, h)

      // subtle space gradient that follows the cursor slightly
      const cx = w * (0.3 + 0.4 * mouseX)
      const cy = h * (0.1 + 0.2 * mouseY)
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h))
      grad.addColorStop(0, 'rgba(10, 170, 255, 0.045)')
      grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.035)')
      grad.addColorStop(1, 'rgba(255, 0, 128, 0.02)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      // stars
      for (const s of stars) {
        if (!reduced) s.tw += 0.02 * s.s
        const alpha = 0.5 + 0.5 * Math.sin(s.tw)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r + (reduced ? 0 : 0.5 * Math.sin(s.tw)), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${0.25 * alpha})`
        ctx.fill()
      }

      // neurons move + connect
      if (!reduced) {
        for (const n of neurons) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
        }
      }

      // connections
      const maxDist = reduced ? 90 : 120
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const a = neurons[i], b = neurons[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist
            ctx.strokeStyle = `rgba(139,92,246,${0.12 * alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // pulsating neuron nodes
      for (const n of neurons) {
        const pulse = n.r + (reduced ? 0.2 : Math.sin(t * 4 + n.x * 0.02 + n.y * 0.02) * 0.6)
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 10)
        glow.addColorStop(0, 'rgba(0,170,255,0.18)')
        glow.addColorStop(1, 'rgba(0,170,255,0)')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(n.x, n.y, 10, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, pulse, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(139,92,246,0.9)'
        ctx.fill()
      }
    }

    const onResize = () => { resize(); init() }
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = (e.clientX - rect.left) / Math.max(1, rect.width)
      mouseY = (e.clientY - rect.top) / Math.max(1, rect.height)
    }

    resize(); init();

    if (!reduced) loop()
    else {
      // render a single static frame for reduced motion
      ctx.clearRect(0, 0, w, h)
      const cx = w * (0.3 + 0.4 * mouseX)
      const cy = h * (0.1 + 0.2 * mouseY)
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h))
      grad.addColorStop(0, 'rgba(10, 170, 255, 0.045)')
      grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.035)')
      grad.addColorStop(1, 'rgba(255, 0, 128, 0.02)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.2)'
        ctx.fill()
      }
      for (const n of neurons) {
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 10)
        glow.addColorStop(0, 'rgba(0,170,255,0.18)')
        glow.addColorStop(1, 'rgba(0,170,255,0)')
        ctx.fillStyle = glow
        ctx.beginPath(); ctx.arc(n.x, n.y, 10, 0, Math.PI * 2); ctx.fill()
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fillStyle = 'rgba(139,92,246,0.9)'; ctx.fill()
      }
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [reduced])

  return <canvas ref={canvasRef} className={`absolute inset-0 ${className}`} aria-hidden />
}
