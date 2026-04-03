import { useState } from 'react'
import { Link } from 'react-router-dom'
import { buildings } from '../data/buildings'

function groupByDivision(list) {
  return list.reduce((acc, b) => {
    const div = b.division || 'Other'
    if (!acc[div]) acc[div] = []
    acc[div].push(b)
    return acc
  }, {})
}

export default function BuildingsPage() {
  const divisions = groupByDivision(buildings)
  const [collapsed, setCollapsed] = useState({})

  function toggle(division) {
    setCollapsed((prev) => ({ ...prev, [division]: !prev[division] }))
  }

  return (
    <main className="pt-24">

      {/* Hero Section */}
      <section id="hero" className="relative h-[819px] min-h-[600px] flex items-center overflow-hidden bg-[#000d21]">
        <div className="relative z-10 px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
          <div className="w-24 h-1 bg-[#ac3400] mb-8" />
          <h1 className="font-headline text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase">
            Shape <br />The Future
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 font-body max-w-2xl leading-relaxed">
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
      </section>

      {/* Naming Opportunities Grid */}
      <section id="facilities" className="py-24 px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-extrabold text-[#000d21] mb-4 tracking-tight">
            Available Opportunities
          </h2>
          <p className="text-[#44474d] text-lg">
            Partner with us to provide world-class environments for our student-athletes to compete, train, and succeed.
          </p>
        </div>

        {Object.entries(divisions).map(([division, items]) => (
          <div key={division} className="mb-10">
            {/* Division header — clickable to collapse */}
            <button
              onClick={() => toggle(division)}
              className="w-full flex items-center gap-4 mb-8 group text-left"
            >
              <div className="w-1 h-8 bg-[#ac3400] rounded-full" />
              <h3 className="font-headline text-2xl font-black text-[#000d21] uppercase tracking-tight">{division}</h3>
              <div className="flex-1 h-px bg-[#efedf0]" />
              <span className="text-sm font-bold text-[#44474d] uppercase tracking-widest">{items.length} {items.length === 1 ? 'Facility' : 'Facilities'}</span>
              <span className="material-symbols-outlined text-[#44474d] transition-transform duration-300" style={{ transform: collapsed[division] ? 'rotate(-90deg)' : 'rotate(0deg)' }}>
                expand_more
              </span>
            </button>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden transition-all duration-300 ${collapsed[division] ? 'hidden' : ''}`}>
              {items.map((building) => (
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
                    <h3 className="font-headline text-2xl font-bold text-[#000d21] mb-6">{building.name}</h3>
                    <div className="border-t border-[#efedf0] pt-6 mt-auto">
                      <span className="inline-flex items-center gap-2 bg-[#ac3400] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity">
                        Learn More
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Recognition Section */}
      <section className="py-24 bg-[#f5f3f6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-12">
          <div className="bg-[#000d21] rounded-2xl p-16 relative overflow-hidden flex flex-col justify-end min-h-[400px]">
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
              <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                Donors of naming opportunities receive permanent recognition at the facility, priority points, and exclusive access to championship events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact CTA */}
      <section id="give-now" className="py-24 px-12 text-center max-w-4xl mx-auto">
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
