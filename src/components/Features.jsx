import { motion } from 'framer-motion'
import { Compass, HeartPulse, CalendarCheck2, Trophy } from 'lucide-react'

const features = [
  {
    icon: Compass,
    title: 'Explore your body',
    desc: 'Interactive guidance helps you navigate joints, muscles, and breath like a world map.'
  },
  {
    icon: HeartPulse,
    title: 'Pain science, simplified',
    desc: 'Micro-lessons teach you how pain works so you can retrain your system with confidence.'
  },
  {
    icon: CalendarCheck2,
    title: 'Daily movement quests',
    desc: 'Short, gentle practices that stack into lasting change. No streak-stress, just steady progress.'
  },
  {
    icon: Trophy,
    title: 'Level up your comfort',
    desc: 'Track small wins, earn XP, and unlock badges as your range and ease improve.'
  }
]

export default function Features() {
  return (
    <section id="how-it-works" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-blue-100/80">A playful structure that respects your nervous system.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-cyan-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-blue-100/80 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
