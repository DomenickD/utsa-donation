import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const sections = [
      document.getElementById('facilities'),
      document.getElementById('give-now'),
    ].filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )

    const topObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection('home')
        })
      },
      { rootMargin: '0px 0px -80% 0px' }
    )

    const hero = document.getElementById('hero')
    if (hero) topObserver.observe(hero)
    sections.forEach((s) => observer.observe(s))

    return () => {
      observer.disconnect()
      topObserver.disconnect()
    }
  }, [location.pathname])

  function scrollToTop(e) {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
    }
  }

  function scrollTo(id, e) {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const activeClass = 'text-[#ac3400] border-b-4 border-[#ac3400] pb-1'
  const inactiveClass = 'text-slate-500 hover:text-[#0C2340] transition-colors cursor-pointer'
  const mobileActiveClass = 'text-[#ac3400] font-black'
  const mobileInactiveClass = 'text-slate-600 hover:text-[#0C2340] transition-colors cursor-pointer'

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(0,13,33,0.08)]">
      <div className="flex justify-between items-center px-5 md:px-12 h-16 md:h-24 max-w-[1920px] mx-auto">

        {/* Logo */}
        <div className="flex items-center">
          <a href="https://goutsa.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 md:gap-3">
            <img
              src="https://goutsa.com/_nuxt/logo.DqjNS18P.png"
              alt="UTSA Roadrunners Athletics"
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span className="text-lg md:text-2xl font-black text-[#0C2340] uppercase tracking-tighter font-lexend">
              UTSA Athletics
            </span>
          </a>

          {/* Divider + desktop tabs */}
          <div className="hidden md:block w-px h-8 bg-slate-200 mx-8" />
          <div className="hidden md:flex items-center space-x-8 font-lexend tracking-tight font-bold">
            <a href="#" onClick={scrollToTop} className={activeSection === 'home' ? activeClass : inactiveClass}>Home</a>
            <a href="#facilities" onClick={(e) => scrollTo('facilities', e)} className={activeSection === 'facilities' ? activeClass : inactiveClass}>Facilities</a>
            <a href="#give-now" onClick={(e) => scrollTo('give-now', e)} className={activeSection === 'give-now' ? activeClass : inactiveClass}>Make a Gift</a>
          </div>
        </div>

        {/* Desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://engage.utsa.edu/givenow"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block bg-[#ac3400] text-white px-6 py-2.5 rounded-full font-lexend font-bold text-sm hover:opacity-80 transition-all duration-300 active:scale-95"
          >
            Make a Gift
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#0C2340] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#0C2340] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#0C2340] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 py-6 flex flex-col gap-6 font-lexend font-bold text-base">
          <a href="#" onClick={scrollToTop} className={activeSection === 'home' ? mobileActiveClass : mobileInactiveClass}>Home</a>
          <a href="#facilities" onClick={(e) => scrollTo('facilities', e)} className={activeSection === 'facilities' ? mobileActiveClass : mobileInactiveClass}>Facilities</a>
          <a href="#give-now" onClick={(e) => scrollTo('give-now', e)} className={activeSection === 'give-now' ? mobileActiveClass : mobileInactiveClass}>Make a Gift</a>
          <a
            href="https://engage.utsa.edu/givenow"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-center bg-[#ac3400] text-white px-6 py-3 rounded-full font-bold text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Make a Gift →
          </a>
        </div>
      )}
    </nav>
  )
}
