import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getBuildingById } from '../data/buildings'

export default function ZoneDetailPage() {
  const { id, zoneId } = useParams()
  const building = getBuildingById(id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!building || !building.zones) return <Navigate to="/" replace />

  const zone = building.zones.find((z) => z.id === Number(zoneId))
  if (!zone) return <Navigate to={`/buildings/${id}`} replace />

  return (
    <main className="pt-24 bg-[#fbf9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-12 py-16">

        <Link
          to={`/buildings/${id}`}
          className="inline-flex items-center text-[#ac3400] font-bold text-sm mb-10 hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined mr-1 text-base">arrow_back</span>
          Back to {building.name}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Left: zone details */}
          <div className="lg:col-span-2">
            <p className="text-[#ac3400] font-bold text-sm uppercase tracking-widest mb-2">
              {building.name}
            </p>
            <h1 className="font-headline text-5xl font-black text-[#000d21] tracking-tighter mb-8 uppercase">
              {zone.name}
            </h1>

            <div className="bg-white rounded-xl p-10 shadow-[0_4px_20px_-10px_rgba(0,13,33,0.08)] flex flex-col items-center justify-center text-center min-h-64">
              <span className="material-symbols-outlined text-[#ac3400] text-5xl mb-4">construction</span>
              <h2 className="font-headline text-xl font-bold text-[#000d21] mb-3 uppercase tracking-tight">
                Details Coming Soon
              </h2>
              <p className="text-[#1b1b1e]/60 font-body text-sm max-w-md leading-relaxed">
                More information about this area — including naming opportunity pricing and recognition details — will be available here soon.
              </p>
            </div>
          </div>

          {/* Right: donation card */}
          <aside className="lg:col-span-1">
            <div className="bg-[#000d21] rounded-2xl overflow-hidden shadow-[0_8px_32px_-8px_rgba(0,13,33,0.2)] sticky top-28">
              <div className="px-8 py-6 border-b border-white/10">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Naming Opportunity</p>
                <h2 className="font-headline text-lg font-bold text-white uppercase tracking-tight">{zone.name}</h2>
              </div>
              <div className="px-8 py-6 space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Facility</span>
                  <span className="text-white/70 text-sm font-bold">{building.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Gift Level</span>
                  <span className="text-white text-sm font-bold">TBD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Status</span>
                  <span className="text-white/70 text-sm font-bold">Available</span>
                </div>
              </div>
              <div className="px-8 pb-8">
                <a
                  href="https://engage.utsa.edu/givenow"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-[#ac3400] text-white font-headline font-bold py-4 rounded-full hover:opacity-80 transition-opacity"
                >
                  Make a Gift
                </a>
                <p className="text-white/40 text-xs text-center mt-4 leading-relaxed">
                  Contact our team to learn more about this naming opportunity.
                </p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  )
}
