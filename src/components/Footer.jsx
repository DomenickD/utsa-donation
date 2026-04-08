export default function Footer() {
  return (
    <footer className="bg-[#000d21] w-full py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-xs">
          <a href="https://www.utsa.edu" target="_blank" rel="noreferrer" className="inline-block mb-4">
            <img
              src="https://www.utsa.edu/_files/images/logos/ut-san-antonio.svg"
              alt="The University of Texas at San Antonio"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </a>
          <p className="text-sm text-slate-400 leading-relaxed">
            Investing in the future of The University of Texas at San Antonio — from athletics to academics and beyond.
          </p>
        </div>

        <div>
          <h4 className="text-white font-headline font-bold mb-4 uppercase tracking-tight text-sm">Quick Links</h4>
          <ul className="space-y-3">
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="https://goutsa.com" target="_blank" rel="noreferrer">Athletics Home</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="https://engage.utsa.edu/givenow" target="_blank" rel="noreferrer">Make a Gift</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="https://www.utsa.edu" target="_blank" rel="noreferrer">UTSA.edu</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-12 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} The University of Texas at San Antonio. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <a className="text-slate-500 hover:text-white text-xs uppercase tracking-widest" href="https://utsa.edu/compliance" target="_blank" rel="noreferrer">Compliance</a>
          <a className="text-slate-500 hover:text-white text-xs uppercase tracking-widest" href="https://utsa.edu/titleix" target="_blank" rel="noreferrer">Title IX</a>
        </div>
      </div>
    </footer>
  )
}
