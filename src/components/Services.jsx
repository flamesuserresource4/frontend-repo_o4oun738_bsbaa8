import { Brain, Cpu, Smartphone, Globe, PenTool, ShieldCheck, ArrowRight } from 'lucide-react'
import LottieIcon from './LottieIcon'
import arrowAnim from './animations/arrow.json'
import sparkAnim from './animations/spark.json'

const services = [
  {
    title: 'Web Applications',
    desc: 'React, Next.js, Node.js, Real-time APIs, Cloud Deployment',
    icon: Globe,
  },
  {
    title: 'Mobile Apps',
    desc: 'Flutter, React Native, iOS & Android, Store Deployment',
    icon: Smartphone,
  },
  {
    title: 'Blockchain & Crypto',
    desc: 'Smart Contracts, NFT, Tokenomics, DeFi Protocols',
    icon: Cpu,
  },
  {
    title: 'AI & Automation',
    desc: 'AI Chatbots, Machine Learning, Data Analytics',
    icon: Brain,
  },
  {
    title: 'UI/UX Design',
    desc: 'Design Systems, Prototyping, Brand Identity',
    icon: PenTool,
  },
  {
    title: 'Maintenance & Support',
    desc: 'Monitoring, Security, Performance Optimization',
    icon: ShieldCheck,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Technology Solutions</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <a key={title} href="#contact" className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur text-white overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#0AF]/0 via-[#8B5CF6]/10 to-[#FF0080]/0 opacity-0 group-hover:opacity-100 blur-2xl transition pointer-events-none" />

              {/* subtle spark micro-animation */}
              <div className="absolute right-3 top-3 opacity-60 group-hover:opacity-100 transition">
                <LottieIcon animationData={sparkAnim} size={28} />
              </div>

              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <Icon className="text-white" size={22} />
                </div>
                <div>
                  <div className="text-lg font-medium">{title}</div>
                  <div className="text-white/70 text-sm mt-1">{desc}</div>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-[#0AF] opacity-90 group-hover:translate-x-1 transition">
                <span>Learn More</span>
                <ArrowRight size={18} className="hidden sm:block" />
                <LottieIcon animationData={arrowAnim} size={18} className="sm:hidden" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
