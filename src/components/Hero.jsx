import { motion } from 'framer-motion'
import { Sparkles, Play, Map as MapIcon, Stars } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background blobs, brighter and playful */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-lime-400/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-50 text-lime-700 px-3 py-1 text-sm mb-6 shadow-sm"
        >
          <Stars className="w-4 h-4 text-lime-600" />
          New: Turn pain relief into a daily adventure
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Pain Academy
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-emerald-500 to-teal-500">
            Learn to move, one quest a day
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-slate-600"
        >
          Friendly, bite‑sized sessions that re‑train your system for easier movement. Earn XP, keep a streak, and unlock easy wins for your body.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white px-6 py-3 font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition">
            Start your journey
          </a>
          <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-800 px-6 py-3 font-bold border border-slate-200 hover:bg-slate-50 transition">
            <Play className="w-4 h-4" />
            See how it works
          </a>
        </motion.div>

        {/* Decorative body map card, more Duolingo-like cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative mt-14"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 text-slate-600 mb-4">
              <MapIcon className="w-5 h-5 text-emerald-500" />
              Your body map updates as you move
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                'Neck mobility',
                'Shoulder release',
                'Spine fluidity',
                'Hip reset',
                'Hamstring glide',
                'Ankle circles',
                'Breath pacing',
                'Posture check',
              ].map((label, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-slate-900">Quest {i + 1}</span>
                    <span className="text-emerald-600 font-bold">+10 XP</span>
                  </div>
                  <p className="text-slate-600">{label}</p>
                  <div className="mt-3 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-lime-400 to-emerald-500" style={{ width: `${(i + 2) * 8}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
