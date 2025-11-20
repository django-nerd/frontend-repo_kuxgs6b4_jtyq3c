import { motion } from 'framer-motion'
import { Compass, HeartPulse, CalendarCheck2, Trophy } from 'lucide-react'

const features = [
  {
    icon: Compass,
    title: 'Learn by doing',
    desc: 'Tap into short, guided moves that feel like levels, not workouts.'
  },
  {
    icon: HeartPulse,
    title: 'Science, made friendly',
    desc: 'Tiny lessons explain pain and safety in plain language you can trust.'
  },
  {
    icon: CalendarCheck2,
    title: 'Keep a gentle streak',
    desc: 'Celebrate consistency without pressure. Miss a day? We guide you back.'
  },
  {
    icon: Trophy,
    title: 'Collect wins',
    desc: 'Earn XP and badges as your range and ease improve, day by day.'
  }
]

export default function Features() {
  return (
    <section id="how-it-works" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(163,230,53,0.15),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">How it works</h2>
          <p className="mt-3 text-slate-600">A cheerful path to easier movement.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-500 flex items-center justify-center mb-4 shadow-inner">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-slate-900 font-extrabold mb-2">{title}</h3>
              <p className="text-slate-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
