import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import LottieIcon from './LottieIcon'
import arrowAnim from './animations/arrow.json'
import sparkAnim from './animations/spark.json'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,170,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,0,128,0.12),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white/80 text-xs">
            <LottieIcon animationData={sparkAnim} size={14} />
            <span>Powered Solutions, Crafted Ethically</span>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_6px_50px_rgba(0,170,255,0.25)]">
            Your Vision, Our Expertise, Delivered with Integrity.
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            Fast MVPs · Ethical AI · Enterprise-grade Blockchain solutions
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group relative inline-flex items-center justify-center px-6 py-3 rounded-2xl text-white font-medium gap-2">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0AF] via-[#8B5CF6] to-[#FF0080] blur-xl opacity-70 group-hover:opacity-90 transition" />
              <span className="relative z-10">Start Your Project</span>
              <span className="relative z-10"><LottieIcon animationData={arrowAnim} size={18} /></span>
            </a>
            <a href="#services" className="relative px-6 py-3 rounded-2xl text-white/90 border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition inline-flex items-center gap-2">
              <span>Explore Services</span>
              <LottieIcon animationData={arrowAnim} size={18} />
            </a>
          </div>
          <div className="mt-8 text-white/80">
            <span className="text-2xl font-semibold text-white">50+</span> Global Clients
          </div>
        </motion.div>
      </div>
    </section>
  )
}
