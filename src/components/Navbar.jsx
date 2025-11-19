import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 py-3 px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400" />
            <span className="font-bold text-white">Pain Academy</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100/80">
            <a href="#how-it-works" className="hover:text-white transition">How it works</a>
            <a href="#get-started" className="hover:text-white transition">Get started</a>
          </nav>
          <button className="sm:hidden text-white/80" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
