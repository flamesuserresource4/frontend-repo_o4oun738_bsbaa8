import LottieIcon from './LottieIcon'
import sparkAnim from './animations/spark.json'
import arrowAnim from './animations/arrow.json'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">Schedule your Free Consultation</h3>
          <div className="mt-6 text-white/80 space-y-2">
            <div className="inline-flex items-center gap-2">
              <LottieIcon animationData={sparkAnim} size={18} />
              <span>info@thevenice.in</span>
            </div>
            <div>+91 9974862379 | UK: +44 020 3983 5623</div>
          </div>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0AF] via-[#8B5CF6] to-[#FF0080] text-white">
            <span>Start Your Project</span>
            <LottieIcon animationData={arrowAnim} size={18} />
          </a>
        </div>
        <form className="relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur text-white space-y-4">
          <div>
            <label className="text-sm text-white/70">Name</label>
            <input className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0AF]/50" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input type="email" className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0AF]/50" placeholder="you@company.com" />
          </div>
          <div>
            <label className="text-sm text-white/70">Project Brief</label>
            <textarea rows="4" className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0AF]/50" placeholder="Tell us about your project" />
          </div>
          <button type="button" className="group w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0AF] via-[#8B5CF6] to-[#FF0080] text-white inline-flex items-center justify-center gap-2">
            <span>Send</span>
            <LottieIcon animationData={arrowAnim} size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}
