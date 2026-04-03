export default function Footer() {
  return (
    <footer className="bg-[#000d21] w-full py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-7xl mx-auto">
        <div className="col-span-1">
          <a href="https://www.utsa.edu" target="_blank" rel="noreferrer" className="inline-block mb-4">
            <img
              src="https://www.utsa.edu/_files/images/logos/ut-san-antonio.svg"
              alt="The University of Texas at San Antonio"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </a>
          <p className="font-inter text-sm tracking-wide text-slate-400 mb-6">
            Investing in the future of The University of Texas at San Antonio — from athletics to academics and beyond.
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

      <div className="max-w-7xl mx-auto px-12 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-inter text-sm tracking-wide text-slate-500">
          © {new Date().getFullYear()} The University of Texas at San Antonio. All Rights Reserved.
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
