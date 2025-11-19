import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0AF] via-[#8B5CF6] to-[#FF0080] shadow-[0_0_30px_rgba(0,170,255,0.45)]" />
        <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/10" />
      </div>
      <div className="leading-none">
        <div className="text-white font-semibold tracking-wide">The Venice Technologies</div>
        <div className="text-xs text-white/60">Blockchain • AI • Web • Mobile</div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-slate-900/70 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group">
          <BrandMark />
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm text-white/80 hover:text-white transition group rounded-xl relative"
            >
              <span>{item.label}</span>
              <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-[#0AF] to-transparent opacity-0 group-hover:opacity-70 transition" />
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 text-white">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navItems.map((i) => (
            <a key={i.href} href={i.href} className="block px-4 py-3 rounded-xl bg-white/5 text-white/90">
              {i.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
