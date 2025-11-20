import { Menu, Flame } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 py-3 px-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-lime-400 to-emerald-500 flex items-center justify-center shadow-inner">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight">Pain Academy</span>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#how-it-works" className="hover:text-slate-900 transition">How it works</a>
            <a href="#get-started" className="hover:text-slate-900 transition">Get started</a>
            <span className="inline-flex items-center gap-1 rounded-full bg-lime-100 text-lime-700 px-3 py-1 font-semibold">
              🔥 <span className="hidden md:inline">7‑day streak</span><span className="md:hidden">7d</span>
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#get-started" className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white px-4 py-2 text-sm font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition">
              Start free
            </a>
            <button className="sm:hidden text-slate-700" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
