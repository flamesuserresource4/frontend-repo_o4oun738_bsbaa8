export default function IsForYou() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">Is The Venice Technologies for you?</h3>
          <ul className="mt-6 space-y-4 text-white/80">
            <li>Enterprise-grade development teams</li>
            <li>Innovation-focused blockchain & AI specialists</li>
            <li>Global-scale solutions & multi-market deployment</li>
            <li>Ethical, transparent, and integrity-driven development</li>
          </ul>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0AF] via-[#8B5CF6] to-[#FF0080] text-white">Start Your Project</a>
            <a href="#contact" className="px-6 py-3 rounded-2xl border border-white/20 text-white/90 bg-white/5">Schedule Free Consultation</a>
          </div>
        </div>
        <div className="relative h-72 md:h-96 rounded-3xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=60')] bg-cover bg-center">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-slate-900/40 to-slate-900/10" />
        </div>
      </div>
    </section>
  )
}
