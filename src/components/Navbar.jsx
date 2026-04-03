import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
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

    // When nothing else is intersecting, default back to home
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
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
    }
  }

  function scrollTo(id, e) {
    e.preventDefault()
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
  const inactiveClass = 'text-slate-400 hover:text-[#0C2340] transition-colors cursor-pointer'

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_32px_64px_-15px_rgba(0,13,33,0.04)]">
      <div className="flex justify-between items-center px-12 h-24 max-w-[1920px] mx-auto">

        {/* Logo + divider + nav tabs */}
        <div className="flex items-center">
          <a href="https://www.utsa.edu" target="_blank" rel="noreferrer" className="flex items-center">
            <img
              src="https://www.utsa.edu/_files/images/logos/ut-san-antonio.svg"
              alt="The University of Texas at San Antonio"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </a>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-slate-200 mx-8" />

          {/* Nav tabs */}
          <div className="hidden md:flex items-center space-x-8 font-lexend tracking-tight font-bold">
            <a
              href="#"
              onClick={scrollToTop}
              className={activeSection === 'home' ? activeClass : inactiveClass}
            >
              Home
            </a>
            <a
              href="#facilities"
              onClick={(e) => scrollTo('facilities', e)}
              className={activeSection === 'facilities' ? activeClass : inactiveClass}
            >
              Facilities
            </a>
            <a
              href="#give-now"
              onClick={(e) => scrollTo('give-now', e)}
              className={activeSection === 'give-now' ? activeClass : inactiveClass}
            >
              Make a Gift
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <a
            href="https://engage.utsa.edu/givenow"
            target="_blank"
            rel="noreferrer"
            className="bg-[#ac3400] text-white px-6 py-2.5 rounded-full font-lexend font-bold text-sm hover:opacity-80 transition-all duration-300 active:scale-95"
          >
            Make a Gift
          </a>
        </div>

      </div>
    </nav>
  )
}
