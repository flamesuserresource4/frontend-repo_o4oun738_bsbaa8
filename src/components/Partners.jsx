import { motion } from 'framer-motion'

const logos = ['IBM','Google Cloud','Polygon','AWS','Microsoft','Solana','Deloitte','TCS']

export default function Partners() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-white/60 text-sm mb-6">Trusted by leading enterprises and partners</div>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur text-white/80">
                {l}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
