import { useEffect, useState } from 'react'
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { getBuildingById } from '../data/buildings'

export default function BuildingDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const building = getBuildingById(id)
  const [hoveredZone, setHoveredZone] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!building) return <Navigate to="/" replace />

  return (
    <main className="pt-24 bg-[#fbf9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-12 py-16">

        <Link
          to="/"
          className="inline-flex items-center text-[#ac3400] font-bold text-sm mb-10 hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined mr-1 text-base">arrow_back</span>
          Back to Facilities
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Left: image + areas */}
          <div className="lg:col-span-2">
            <h1 className="font-headline text-5xl font-black text-[#000d21] tracking-tighter mb-8 uppercase">
              {building.name}
            </h1>
            <div className="relative rounded-2xl overflow-hidden aspect-video mb-8 bg-[#e3e2e5]">
              <img
                src={building.image}
                alt={building.name}
                className="w-full h-full object-cover"
              />
              {building.zones && (
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 1980 1114"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {building.zones.map((zone) => {
                    const pointsStr = zone.points.map((p) => p.join(',')).join(' ')
                    const cx = zone.points.reduce((s, p) => s + p[0], 0) / zone.points.length
                    const cy = zone.points.reduce((s, p) => s + p[1], 0) / zone.points.length
                    const isHovered = hoveredZone === zone.id
                    return (
                      <g
                        key={zone.id}
                        onClick={() => navigate(`/buildings/${id}/zones/${zone.id}`)}
                        onMouseEnter={() => setHoveredZone(zone.id)}
                        onMouseLeave={() => setHoveredZone(null)}
                        style={{ cursor: 'pointer' }}
                      >
                        <polygon
                          points={pointsStr}
                          fill={isHovered ? 'rgba(34,197,94,0.45)' : 'rgba(34,197,94,0)'}
                          stroke={isHovered ? 'rgb(74,222,128)' : 'rgba(74,222,128,0)'}
                          strokeWidth="6"
                          style={{ transition: 'fill 0.15s ease' }}
                        />
                        <text
                          x={cx}
                          y={cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={isHovered ? 'white' : 'rgba(255,255,255,0)'}
                          fontSize="52"
                          fontWeight="bold"
                          fontFamily="sans-serif"
                          style={{
                            pointerEvents: 'none',
                            textShadow: isHovered ? '0 2px 4px rgba(0,0,0,0.9)' : 'none',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {zone.name}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              )}
            </div>

            {building.areas.length > 0 && (
              <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_-10px_rgba(0,13,33,0.08)]">
                <h2 className="font-headline text-xl font-bold text-[#000d21] mb-6 uppercase tracking-tight border-b-2 border-[#ac3400] pb-3 inline-block">
                  Areas Within This Facility
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
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

          {/* Right: status card */}
          <aside className="lg:col-span-1">
            <div className="bg-[#000d21] rounded-2xl overflow-hidden shadow-[0_8px_32px_-8px_rgba(0,13,33,0.2)] sticky top-28">
              <div className="px-8 py-6 border-b border-white/10">
                <h2 className="font-headline text-lg font-bold text-white uppercase tracking-tight">{building.name}</h2>
              </div>
              <div className="px-8 py-6 space-y-5">
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
