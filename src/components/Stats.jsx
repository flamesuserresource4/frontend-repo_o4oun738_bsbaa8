import { useEffect, useState } from 'react'

function Counter({ to, label }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = 0
    const duration = 1200
    const startTime = performance.now()
    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + (to - start) * eased)
      setValue(current)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [to])
  return (
    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="text-3xl font-semibold">{value}+</div>
      <div className="text-sm text-white/70 mt-1">{label}</div>
      <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0AF] to-transparent opacity-60" />
    </div>
  )
}

export default function Stats() {
  const items = [
    { to: 50, label: 'Projects Delivered' },
    { to: 25, label: 'Global Clients' },
    { to: 100, label: 'Client Satisfaction' },
    { to: 24, label: 'Support' },
  ]
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((i) => (
          <Counter key={i.label} to={i.to} label={i.label} />
        ))}
      </div>
    </section>
  )
}
