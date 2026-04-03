import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_32px_64px_-15px_rgba(0,13,33,0.04)]">
      <div className="flex justify-between items-center px-12 h-24 max-w-[1920px] mx-auto">

        <a href="https://goutsa.com" target="_blank" rel="noreferrer" className="flex items-center gap-3">
          <img
            src="https://goutsa.com/_nuxt/logo.DqjNS18P.png"
            alt="UTSA Roadrunners Athletics"
            className="h-10 w-auto object-contain"
          />
          <span className="text-2xl font-black text-[#0C2340] uppercase tracking-tighter font-lexend">
            UTSA Athletics
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8 font-lexend tracking-tight font-bold">
          <a className="text-slate-400 hover:text-[#0C2340] transition-colors" href="#">Our Vision</a>
          <a className="text-slate-400 hover:text-[#0C2340] transition-colors" href="#">Impact</a>
          <a className="text-slate-400 hover:text-[#0C2340] transition-colors" href="#">Scholarships</a>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-[#ac3400] border-b-4 border-[#ac3400] pb-1'
                : 'text-slate-400 hover:text-[#0C2340] transition-colors'
            }
          >
            Facilities
          </NavLink>
          <a className="text-[#ac3400] border-b-4 border-[#ac3400] pb-1" href="https://engage.utsa.edu/givenow" target="_blank" rel="noreferrer">Give Now</a>
        </div>

        <div className="flex items-center space-x-6">
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
