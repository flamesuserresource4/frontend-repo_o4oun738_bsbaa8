import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Services from './components/Services'
import TechCarousel from './components/TechCarousel'
import Projects from './components/Projects'
import IsForYou from './components/IsForYou'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundFX from './components/BackgroundFX'

function Background() {
  return (
    <div className="fixed inset-0 -z-0">{/* keep z non-negative per Spline guidance */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(0,170,255,0.15),transparent),radial-gradient(60%_40%_at_80%_10%,rgba(139,92,246,0.12),transparent),radial-gradient(60%_40%_at_10%_80%,rgba(255,0,128,0.08),transparent)]" />
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
      <BackgroundFX className="opacity-70" />
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Partners />
        <Services />
        <TechCarousel />
        <Projects />
        <IsForYou />
        <Process />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
