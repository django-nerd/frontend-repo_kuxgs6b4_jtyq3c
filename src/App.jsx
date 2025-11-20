import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen relative bg-white">
      {/* Playful background: soft grid + lime glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(163,230,53,0.15),transparent)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(2,6,23,0.04)_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <Navbar />

      <main className="relative pt-24">
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-slate-200 py-10 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500">
          © {new Date().getFullYear()} Pain Academy • Move with curiosity
        </div>
      </footer>
    </div>
  )
}

export default App
