import { motion } from 'framer-motion'

const techs = ['React','Ethereum','TensorFlow','AWS','Flutter','Node.js','Next.js','Solidity','Python','TypeScript','PostgreSQL','MongoDB']

export default function TechCarousel() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-white/70 text-sm mb-4">Our Tech Stack</div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <motion.div
            className="flex gap-10 py-6 px-6 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {[...techs, ...techs].map((t, i) => (
              <div key={i} className="px-5 py-2 rounded-xl bg-slate-900/50 border border-white/10 text-white/80 shadow">
                {t}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
