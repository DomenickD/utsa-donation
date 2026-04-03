export default function Footer() {
  return (
    <footer className="bg-[#000d21] w-full py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <div className="text-xl font-lexend font-bold text-white mb-4 md:mb-6">UTSA Athletics</div>
          <p className="font-inter text-sm tracking-wide text-slate-400 mb-4 md:mb-6">
            Building a premiere collegiate athletic program in the heart of San Antonio.
          </p>
          <div className="flex space-x-4">
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-white">social_leaderboard</span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-white">share</span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-white">mail</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-lexend font-bold mb-4 md:mb-6">Philanthropy</h4>
          <ul className="space-y-3 md:space-y-4">
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-inter tracking-wide" href="#">Our Vision</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-inter tracking-wide" href="#">Impact Reports</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-inter tracking-wide" href="#">Scholarships</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-inter tracking-wide" href="#">Endowments</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-lexend font-bold mb-4 md:mb-6">Quick Links</h4>
          <ul className="space-y-3 md:space-y-4">
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-inter tracking-wide" href="#">Contact Us</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-inter tracking-wide" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-inter tracking-wide" href="#">Giving FAQ</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-inter tracking-wide" href="https://goutsa.com" target="_blank" rel="noreferrer">Athletics Home</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-lexend font-bold mb-4 md:mb-6">Join the Mailing List</h4>
          <div className="relative">
            <input
              className="w-full bg-slate-800/50 border-none rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ac3400]"
              placeholder="Email Address"
              type="email"
            />
            <button className="absolute right-2 top-2 material-symbols-outlined text-[#ac3400]">send</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-12 mt-10 md:mt-16 pt-6 md:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-inter text-sm tracking-wide text-slate-500 text-center md:text-left">
          © {new Date().getFullYear()} UTSA Athletics. All Rights Reserved.
        </div>
        <div className="flex space-x-6">
          <a className="text-slate-500 hover:text-white text-xs uppercase tracking-widest" href="#">Compliance</a>
          <a className="text-slate-500 hover:text-white text-xs uppercase tracking-widest" href="#">Title IX</a>
          <a className="text-slate-500 hover:text-white text-xs uppercase tracking-widest" href="https://utsa.edu" target="_blank" rel="noreferrer">UTSA.edu</a>
        </div>
      </div>
    </footer>
  )
}
