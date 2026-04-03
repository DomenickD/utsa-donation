import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getBuildingById } from '../data/buildings'

export default function BuildingDetailPage() {
  const { id } = useParams()
  const building = getBuildingById(id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!building) return <Navigate to="/" replace />

  return (
    <main className="pt-16 md:pt-24 bg-[#fbf9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-8 md:py-16">

        <Link
          to="/"
          className="inline-flex items-center text-[#ac3400] font-bold text-sm mb-6 md:mb-10 hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined mr-1 text-base">arrow_back</span>
          Back to Facilities
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-start">

          {/* Left: image + areas */}
          <div className="lg:col-span-2">
            <h1 className="font-headline text-3xl md:text-5xl font-black text-[#000d21] tracking-tighter mb-5 md:mb-8 uppercase">
              {building.name}
            </h1>
            <div className="relative rounded-2xl overflow-hidden aspect-video mb-5 md:mb-8 bg-[#e3e2e5]">
              <img
                src={building.image}
                alt={building.name}
                className="w-full h-full object-cover"
              />
            </div>

            {building.areas.length > 0 && (
              <div className="bg-white rounded-xl p-5 md:p-8 shadow-[0_4px_20px_-10px_rgba(0,13,33,0.08)]">
                <h2 className="font-headline text-lg md:text-xl font-bold text-[#000d21] mb-4 md:mb-6 uppercase tracking-tight border-b-2 border-[#ac3400] pb-3 inline-block">
                  Areas Within This Facility
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 md:mt-6">
                  {building.areas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-3 bg-[#f5f3f6] rounded-lg px-4 py-3 text-[#000d21] font-body font-medium text-sm"
                    >
                      <span className="material-symbols-outlined text-[#ac3400] text-base">location_on</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: status card — stacks above on mobile */}
          <aside className="lg:col-span-1 order-first lg:order-last">
            <div className="bg-[#000d21] rounded-2xl overflow-hidden shadow-[0_8px_32px_-8px_rgba(0,13,33,0.2)] lg:sticky lg:top-28">
              <div className="px-6 md:px-8 py-5 md:py-6 border-b border-white/10">
                <h2 className="font-headline text-base md:text-lg font-bold text-white uppercase tracking-tight">{building.name}</h2>
              </div>
              <div className="px-6 md:px-8 py-5 md:py-6 space-y-4 md:space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Status</span>
                  <span className={`text-sm font-bold ${building.status === 'Available' ? 'text-[#ac3400]' : 'text-white/70'}`}>
                    {building.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Gift Level</span>
                  <span className="text-white text-sm font-bold">{building.giftLevel}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Named By</span>
                  <span className="text-white text-sm font-bold">{building.namedBy}</span>
                </div>
              </div>
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <a
                  href="https://engage.utsa.edu/givenow"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-[#ac3400] text-white font-headline font-bold py-3.5 md:py-4 rounded-full hover:opacity-80 transition-opacity"
                >
                  Make a Gift
                </a>
                <p className="text-white/40 text-xs text-center mt-3 md:mt-4 leading-relaxed">
                  Contact our team for custom naming opportunities at this facility.
                </p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  )
}
