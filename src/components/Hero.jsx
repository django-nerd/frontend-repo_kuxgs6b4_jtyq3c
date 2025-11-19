import { motion } from 'framer-motion'
import { Sparkles, Play, Map as MapIcon } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-100/90 mb-6"
        >
          <Sparkles className="w-4 h-4 text-cyan-300" />
          New: Turn pain relief into a daily adventure
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(59,130,246,0.25)]"
        >
          Pain Academy
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">
            An adventure through your body
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-blue-100/80"
        >
          Discover pain relief through a playful, science-backed movement practice. Explore your body map, complete daily quests, and level up your comfort—one small win at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition">
            Start your journey
          </a>
          <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 text-white/90 px-6 py-3 font-semibold border border-white/10 hover:bg-white/10 transition">
            <Play className="w-4 h-4" />
            See how it works
          </a>
        </motion.div>

        {/* Decorative body map card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative mt-14"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 text-blue-100/80 mb-4">
              <MapIcon className="w-5 h-5 text-cyan-300" />
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
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-blue-100/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white/90">Quest {i + 1}</span>
                    <span className="text-cyan-300/80">+10 XP</span>
                  </div>
                  <p className="text-blue-100/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
