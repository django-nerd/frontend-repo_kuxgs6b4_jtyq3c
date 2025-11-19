import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.05),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-blue-100/70">
          © {new Date().getFullYear()} Pain Academy • Move with curiosity
        </div>
      </footer>
    </div>
  )
}

export default App
