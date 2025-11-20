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
          className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Begin your 7‑day Pain Relief Quest</h3>
          <p className="mt-3 text-slate-600">Short, friendly sessions that compound into comfort. You’ll feel the difference in a week.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white px-6 py-3 font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition">
              Start free
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-slate-800 px-6 py-3 font-bold border border-slate-200 hover:bg-slate-50 transition">Learn more</a>
          </div>
          <p className="mt-4 text-xs text-slate-500">No equipment. No pressure. Just curiosity and kind attention.</p>
        </motion.div>
      </div>
    </section>
  )
}
