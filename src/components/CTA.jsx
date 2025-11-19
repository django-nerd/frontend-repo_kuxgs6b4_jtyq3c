import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-10 backdrop-blur-sm"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Begin your 7‑day Pain Relief Quest</h3>
          <p className="mt-3 text-blue-100/80">Short, gentle sessions. Big, compounding gains. You’ll feel the difference in a week.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition">
              Start free
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/5 text-white/90 px-6 py-3 font-semibold border border-white/10 hover:bg-white/10 transition">Learn more</a>
          </div>
          <p className="mt-4 text-xs text-blue-200/70">No equipment. No pressure. Just curiosity and kind attention.</p>
        </motion.div>
      </div>
    </section>
  )
}
