import { useState } from 'react'

const faqs = [
  { q: 'How long do projects take?', a: 'MVPs typically ship in 2–4 weeks. Enterprise builds span 3–6 months with phased milestones.' },
  { q: 'What technologies do you use?', a: 'React, Next.js, Node.js, Flutter, Python, TensorFlow, Solidity, AWS, and more — chosen per use-case.' },
  { q: 'Do you provide ongoing support?', a: 'Yes. We offer 24/7 monitoring, SLAs, and continuous improvement cycles.' },
  { q: 'What is your pricing model?', a: 'Transparent time & materials or fixed-scope packages for well-defined projects.' },
  { q: 'How do I get started?', a: 'Book a free consultation — we align on goals, scope, timeline, and get your project moving.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-semibold text-white text-center">FAQs</h3>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          {faqs.map((item, idx) => (
            <button
              key={item.q}
              onClick={() => setOpen(open === idx ? -1 : idx)}
              className="w-full text-left p-6 text-white/90 hover:bg-white/5 transition"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium">{item.q}</div>
                <div className="text-white/60">{open === idx ? '-' : '+'}</div>
              </div>
              {open === idx && (
                <div className="mt-2 text-white/70 text-sm">{item.a}</div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
