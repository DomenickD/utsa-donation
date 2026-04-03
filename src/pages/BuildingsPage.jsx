import { Link } from 'react-router-dom'
import { buildings } from '../data/buildings'

export default function BuildingsPage() {
  return (
    <main className="pt-24">

      {/* Hero Section */}
      <section className="relative h-[819px] min-h-[600px] flex items-center overflow-hidden bg-[#000d21]">
        <div className="absolute inset-0 z-0">
          <img
            alt="UTSA Alamodome stadium"
            className="w-full h-full object-cover opacity-60"
            src="https://goutsa.com/imgproxy/m7vqL-ttkHEokm8eatbQRes5QxSrpmXOgW5nB-bqcPw/rs:fit:1980:0:0:0/g:ce:0:0/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvdXRzYS1wcm9kLzIwMjMvMDgvMDMvb0VQaTJab0VlVWpTeXlGMW01WFl6bWRseDlrNms5WmxCWThpMnZHQS5qcGc.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#000d21] via-[#000d21]/40 to-transparent" />
        </div>
        <div className="relative z-10 px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="max-w-2xl">
            <div className="w-24 h-1 bg-[#ac3400] mb-8" />
            <h1 className="font-headline text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase">
              Shape <br />The Future
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 font-body max-w-xl leading-relaxed">
              Leave your mark on UTSA Athletics. Explore premier naming opportunities within our championship-caliber facilities.
            </p>
            <a
              href="https://engage.utsa.edu/givenow"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#ac3400] text-white px-10 py-4 rounded-full font-headline font-extrabold text-lg shadow-[0_16px_32px_-8px_rgba(172,52,0,0.3)] hover:-translate-y-0.5 active:translate-y-px transition-all duration-300"
            >
              Make a Gift
            </a>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <img
              src="https://goutsa.com/_nuxt/logo.DqjNS18P.png"
              alt="UTSA Roadrunners Athletics"
              className="h-64 w-auto object-contain opacity-90 drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Naming Opportunities Grid */}
      <section className="py-24 px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-extrabold text-[#000d21] mb-4 tracking-tight">
              Available Opportunities
            </h2>
            <p className="text-[#44474d] text-lg">
              Partner with us to provide world-class environments for our student-athletes to compete, train, and succeed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buildings.map((building) => (
            <Link
              key={building.id}
              to={`/buildings/${building.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,13,33,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,13,33,0.15)] transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={building.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={building.image}
                  loading="lazy"
                />
                {building.status === 'Available' && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ac3400] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      Available
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-headline text-2xl font-bold text-[#000d21] mb-3">{building.name}</h3>
                <div className="flex items-center justify-between border-t border-[#efedf0] pt-6 mt-auto">
                  {building.giftLevel !== '—' ? (
                    <span className="text-[#000d21] font-lexend font-extrabold text-lg">{building.giftLevel}</span>
                  ) : (
                    <span className="text-[#44474d] font-lexend font-bold text-sm uppercase tracking-widest">Named</span>
                  )}
                  <span className="flex items-center text-[#ac3400] font-bold">
                    Learn More
                    <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 bg-[#f5f3f6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-[#000d21] rounded-2xl p-12 relative overflow-hidden flex flex-col justify-end min-h-[400px]">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-[#000d21]/50 to-transparent" />
                <img
                  alt="UTSA donor recognition"
                  className="w-full h-full object-cover opacity-30"
                  src="https://goutsa.com/imgproxy/QB4WUnLoyMVylGWu--8rbgKh1ERmyYwfbURCbqUNjoo/rs:fit:1980:0:0:0/g:ce:0:0/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvdXRzYS1wcm9kLzIwMjUvMDQvMDgvV0VES0V4RXZMZmlWN050OUJLM2hXUWZYUHhyVElwUFN1NmowVmI2cC5wbmc.png"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-headline text-4xl font-black text-white mb-4 uppercase">Legacy Recognition</h3>
                <p className="text-white/70 text-lg max-w-xl mb-8 leading-relaxed">
                  Donors of naming opportunities receive permanent recognition at the facility, priority points, and exclusive access to championship events.
                </p>
                <button className="bg-[#ac3400] text-white px-8 py-3 rounded-full font-bold hover:opacity-80 transition-opacity">
                  Recognition Levels
                </button>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#ac3400] rounded-2xl p-12 flex flex-col justify-center text-white">
              <span className="material-symbols-outlined text-6xl mb-6 fill-icon">handshake</span>
              <h3 className="font-headline text-3xl font-bold mb-4">Personal Consultation</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Our team is available to discuss custom naming opportunities that align with your passion and legacy.
              </p>
              <a className="font-bold underline underline-offset-4 hover:opacity-80 transition-opacity" href="#">
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact CTA */}
      <section className="py-24 px-12 text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-5xl font-black text-[#000d21] mb-6 tracking-tighter uppercase italic">
          Ready to Lead?
        </h2>
        <p className="text-xl text-[#44474d] mb-12 leading-relaxed">
          Your investment transforms lives and builds a championship culture. Join a select group of leaders committed to the future of UTSA Athletics.
        </p>
        <a
          href="https://engage.utsa.edu/givenow"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#000d21] text-white px-12 py-5 rounded-full font-headline font-black text-xl hover:bg-[#ac3400] transition-all duration-300"
        >
          MAKE A GIFT TODAY
        </a>
      </section>

    </main>
  )
}
