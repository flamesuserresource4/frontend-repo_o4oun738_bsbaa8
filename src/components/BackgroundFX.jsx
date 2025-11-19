import { useEffect, useRef } from 'react'

// Dynamic starfield + neuron network canvas background
export default function BackgroundFX({ className = '' }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let w, h, dpr
    const stars = []
    const neurons = []

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
      const starCount = Math.floor((w * h) / 12000)
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.2 + 0.2,
          tw: Math.random() * 2 * Math.PI,
          s: 0.2 + Math.random() * 0.8,
        })
      }
      const neuronCount = Math.min(90, Math.floor((w * h) / 9000))
      for (let i = 0; i < neuronCount; i++) {
        neurons.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: 1 + Math.random() * 2,
        })
      }
    }

    let t = 0
    const loop = () => {
      animationRef.current = requestAnimationFrame(loop)
      t += 0.005
      ctx.clearRect(0, 0, w, h)

      // subtle space gradient
      const grad = ctx.createRadialGradient(w * 0.5, h * 0.2, 0, w * 0.5, h * 0.2, Math.max(w, h))
      grad.addColorStop(0, 'rgba(10, 170, 255, 0.04)')
      grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)')
      grad.addColorStop(1, 'rgba(255, 0, 128, 0.02)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      // stars twinkle
      for (const s of stars) {
        s.tw += 0.02 * s.s
        const alpha = 0.5 + 0.5 * Math.sin(s.tw)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r + 0.5 * Math.sin(s.tw), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${0.25 * alpha})`
        ctx.fill()
      }

      // neurons move + connect
      for (const n of neurons) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }

      // connections
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const a = neurons[i], b = neurons[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 120) {
            const alpha = 1 - dist / 120
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
        const pulse = n.r + Math.sin(t * 4 + n.x * 0.02 + n.y * 0.02) * 0.6
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
    resize(); init(); loop()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 ${className}`} />
}
