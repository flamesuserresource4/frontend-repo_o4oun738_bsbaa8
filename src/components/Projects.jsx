import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Data Dungeon – AI & Analytics Platform',
    tech: 'React, Python, TensorFlow, AWS',
    stats: '10K+ Users • 99.9% Uptime • 4.9/5',
    cta1: 'View Live',
    cta2: 'Case Study',
  },
  {
    title: 'Crypto Alerts Pro – Real-time Crypto Monitoring',
    tech: 'Flutter, Node.js, Web3, MongoDB',
    stats: '25K+ Users • Real-time alerts • 4.8/5',
    cta1: 'View Live',
    cta2: 'Case Study',
  },
  {
    title: 'Smart City Platform – IoT + Blockchain Integration',
    tech: 'Next.js, IoT, AI, Blockchain',
    stats: 'City-wide deployment • 24/7 uptime',
    cta1: 'View Live',
    cta2: 'Case Study',
  },
  {
    title: 'NFT Marketplace – Decentralized NFT Platform',
    tech: 'React, Solidity, Polygon, IPFS',
    stats: '5K+ Users • Low Gas Fees • 4.7/5',
    cta1: 'View Live',
    cta2: 'Case Study',
  },
]

export default function Projects() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Featured Projects</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-[#0AF]/0 via-[#8B5CF6]/15 to-[#FF0080]/0 blur-2xl transition pointer-events-none" />
              <div className="relative">
                <div className="text-white/90 font-medium">{p.title}</div>
                <div className="text-white/60 text-sm mt-1">Tech: {p.tech}</div>
                <div className="text-white/70 text-sm mt-3">{p.stats}</div>
                <div className="mt-5 flex gap-3">
                  <a href="#" className="px-4 py-2 rounded-xl text-xs text-white bg-[#0AF]/20 border border-[#0AF]/30">{p.cta1}</a>
                  <a href="#" className="px-4 py-2 rounded-xl text-xs text-white/90 border border-white/20 bg-white/5">{p.cta2}</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
