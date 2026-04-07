import { useState } from 'react'
import utsaFieldImg from '../assets/utsa-field.png'

const GridLines = () => {
  const lines = []
  for (let x = 0; x <= 800; x += 50) {
    lines.push(
      <line key={`v${x}`} x1={x} y1="0" x2={x} y2="500"
        stroke="rgba(100,149,237,0.07)" strokeWidth="0.5" />
    )
  }
  for (let y = 0; y <= 500; y += 50) {
    lines.push(
      <line key={`h${y}`} x1="0" y1={y} x2="800" y2={y}
        stroke="rgba(100,149,237,0.07)" strokeWidth="0.5" />
    )
  }
  return <>{lines}</>
}
function FieldSVG({ zoneId }) {
  const label = zoneId === 1 ? 'FIELD 1 — BLUEPRINT' : 'FIELD 2 — BLUEPRINT'
  return (
    <>
      <rect width="800" height="500" fill="#001228" />
      <GridLines />
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <rect key={i} x={40 + i * (720 / 7)} y="60" width={720 / 7 + 1} height="380"
          fill={i % 2 === 0 ? '#14521a' : '#185e1f'} />
      ))}
      <rect x="40" y="60" width="110" height="380" fill="rgba(172,52,0,0.22)" />
      <rect x="650" y="60" width="110" height="380" fill="rgba(172,52,0,0.22)" />
      <rect x="40" y="60" width="720" height="380" fill="none" stroke="white" strokeWidth="2.5" />
      <line x1="150" y1="60" x2="150" y2="440" stroke="white" strokeWidth="2" />
      <line x1="650" y1="60" x2="650" y2="440" stroke="white" strokeWidth="2" />
      <line x1="400" y1="60" x2="400" y2="440" stroke="white" strokeWidth="2" />
      <circle cx="400" cy="250" r="75" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="400" cy="250" r="3" fill="white" />
      <rect x="40" y="150" width="130" height="200" fill="none" stroke="white" strokeWidth="1.5" />
      <rect x="40" y="195" width="60" height="110" fill="none" stroke="white" strokeWidth="1.5" />
      <rect x="22" y="215" width="18" height="70" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="2" />
      <rect x="630" y="150" width="130" height="200" fill="none" stroke="white" strokeWidth="1.5" />
      <rect x="700" y="195" width="60" height="110" fill="none" stroke="white" strokeWidth="1.5" />
      <rect x="760" y="215" width="18" height="70" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="2" />
      <text x="400" y="22" textAnchor="middle" fill="rgba(100,149,237,0.6)" fontSize="10"
        fontFamily="monospace" fontWeight="bold" letterSpacing="3">{label}</text>
      <line x1="640" y1="483" x2="760" y2="483" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <line x1="640" y1="479" x2="640" y2="487" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <line x1="760" y1="479" x2="760" y2="487" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <text x="700" y="496" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace">100 YDS</text>
      <text x="30" y="494" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace">N ↑</text>
    </>
  )
}

function BuildingSVG() {
  return (
    <>
      <rect width="800" height="500" fill="#001228" />
      <GridLines />

      {/* Outer shell */}
      <rect x="30" y="40" width="740" height="440"
        fill="#091c36" stroke="rgba(100,149,237,0.65)" strokeWidth="3" />

      {/* ── Top row ── */}
      {/* Lobby */}
      <rect x="30" y="40" width="220" height="200"
        fill="#0c2244" stroke="rgba(100,149,237,0.45)" strokeWidth="1.5" />
      <text x="140" y="138" textAnchor="middle"
        fill="rgba(100,149,237,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="1">
        MAIN LOBBY
      </text>

      {/* Weight Room */}
      <rect x="250" y="40" width="300" height="200"
        fill="#0c2244" stroke="rgba(100,149,237,0.45)" strokeWidth="1.5" />
      <text x="400" y="138" textAnchor="middle"
        fill="rgba(100,149,237,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="1">
        WEIGHT ROOM
      </text>

      {/* Media / Film Room */}
      <rect x="550" y="40" width="220" height="200"
        fill="#0c2244" stroke="rgba(100,149,237,0.45)" strokeWidth="1.5" />
      <text x="660" y="132" textAnchor="middle"
        fill="rgba(100,149,237,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="1">
        MEDIA /
      </text>
      <text x="660" y="148" textAnchor="middle"
        fill="rgba(100,149,237,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="1">
        FILM ROOM
      </text>

      {/* ── Bottom row ── */}
      {/* Locker Room A */}
      <rect x="30" y="240" width="220" height="240"
        fill="#0c2244" stroke="rgba(100,149,237,0.45)" strokeWidth="1.5" />
      <text x="140" y="358" textAnchor="middle"
        fill="rgba(100,149,237,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="1">
        LOCKER RM A
      </text>

      {/* Training Room */}
      <rect x="250" y="240" width="300" height="240"
        fill="#0c2244" stroke="rgba(100,149,237,0.45)" strokeWidth="1.5" />
      <text x="400" y="358" textAnchor="middle"
        fill="rgba(100,149,237,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="1">
        TRAINING ROOM
      </text>

      {/* Coach's Suite */}
      <rect x="550" y="240" width="220" height="120"
        fill="#0c2244" stroke="rgba(100,149,237,0.45)" strokeWidth="1.5" />
      <text x="660" y="298" textAnchor="middle"
        fill="rgba(100,149,237,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="1">
        COACH&apos;S SUITE
      </text>

      {/* Locker Room B */}
      <rect x="550" y="360" width="220" height="120"
        fill="#0c2244" stroke="rgba(100,149,237,0.45)" strokeWidth="1.5" />
      <text x="660" y="418" textAnchor="middle"
        fill="rgba(100,149,237,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="1">
        LOCKER RM B
      </text>

      {/* Blueprint title */}
      <text x="400" y="22" textAnchor="middle"
        fill="rgba(100,149,237,0.6)" fontSize="10"
        fontFamily="monospace" fontWeight="bold" letterSpacing="3">
        BUILDING — FLOOR PLAN
      </text>

      {/* Scale */}
      <line x1="640" y1="490" x2="760" y2="490" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="640" y1="486" x2="640" y2="494" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="760" y1="486" x2="760" y2="494" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <text x="700" y="500" textAnchor="middle"
        fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">
        SCALE
      </text>

      {/* North arrow */}
      <text x="30" y="496" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="monospace">N ↑</text>
    </>
  )
}

export default function BlueprintViewer({ zone }) {
  const [activeSpot, setActiveSpot] = useState(null)

  if (!zone.blueprint) return null

  const { type, spots } = zone.blueprint

  return (
    <div className="space-y-5">

      {/* ── Blueprint SVG ── */}
      <div className="rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,13,33,0.18)]">
        <div className="bg-[#001228]">
          {type === 'field' ? (
            <>
              <div className="relative w-full aspect-video">
                {zone.image ? (
                  <img src={utsaFieldImg} alt={zone.name} className="w-full h-full object-cover block" />
                ) : (
                  <svg viewBox="0 0 800 500" className="w-full h-full" style={{ display: 'block' }}>
                    <FieldSVG zoneId={zone.id} />
                  </svg>
                )}
                <svg
                  viewBox="0 0 800 500"
                  className="absolute inset-0 w-full h-full"
                  style={{ display: 'block' }}
                >
                  {spots.map(spot => {
                    const isActive = activeSpot?.id === spot.id
                    return (
                      <g
                        key={spot.id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setActiveSpot(isActive ? null : spot)}
                      >
                        <circle cx={spot.x} cy={spot.y} r="20"
                          fill={isActive ? 'rgba(172,52,0,0.25)' : 'rgba(245,158,11,0.18)'} />
                        <circle cx={spot.x} cy={spot.y} r="12"
                          fill={isActive ? '#ac3400' : '#f59e0b'}
                          stroke="white" strokeWidth="2" />
                        <text
                          x={spot.x} y={spot.y}
                          textAnchor="middle" dominantBaseline="central"
                          fill="white" fontSize="9"
                          fontFamily="monospace" fontWeight="bold"
                        >
                          {spot.id}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-5 px-4 py-2.5 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-white/45 text-xs font-mono">Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ac3400] flex-shrink-0" />
                  <span className="text-white/45 text-xs font-mono">Selected</span>
                </div>
                <span className="text-white/25 text-xs font-mono ml-auto hidden sm:block">
                  TAP A MARKER TO SELECT
                </span>
              </div>
            </>
          ) : (
            <>
              <svg viewBox="0 0 800 500" className="w-full" style={{ display: 'block' }}>
                {type === 'building' && <BuildingSVG />}

                {spots.map(spot => {
                  const isActive = activeSpot?.id === spot.id
                  return (
                    <g
                      key={spot.id}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setActiveSpot(isActive ? null : spot)}
                    >
                      <circle cx={spot.x} cy={spot.y} r="20"
                        fill={isActive ? 'rgba(172,52,0,0.25)' : 'rgba(245,158,11,0.18)'} />
                      <circle cx={spot.x} cy={spot.y} r="12"
                        fill={isActive ? '#ac3400' : '#f59e0b'}
                        stroke="white" strokeWidth="2" />
                      <text
                        x={spot.x} y={spot.y}
                        textAnchor="middle" dominantBaseline="central"
                        fill="white" fontSize="9"
                        fontFamily="monospace" fontWeight="bold"
                      >
                        {spot.id}
                      </text>
                    </g>
                  )
                })}
              </svg>

              {/* Legend */}
              <div className="flex items-center gap-5 px-4 py-2.5 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-white/45 text-xs font-mono">Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ac3400] flex-shrink-0" />
                  <span className="text-white/45 text-xs font-mono">Selected</span>
                </div>
                <span className="text-white/25 text-xs font-mono ml-auto hidden sm:block">
                  TAP A MARKER TO SELECT
                </span>
              </div>
            </>
          )}
        </div>

        {/* Active spot detail panel */}
        {activeSpot && (
          <div className="bg-[#ac3400]/10 border-t-2 border-[#ac3400] px-6 py-5 flex justify-between items-start">
            <div>
              <p className="text-[#ac3400] font-bold text-xs uppercase tracking-widest mb-0.5">
                Naming Opportunity #{activeSpot.id}
              </p>
              <h3 className="font-headline text-xl font-black text-[#000d21] uppercase tracking-tight">
                {activeSpot.label}
              </h3>
              <div className="flex gap-8 mt-3">
                <div>
                  <p className="text-xs text-[#1b1b1e]/50 uppercase tracking-wide font-bold">Gift Level</p>
                  <p className="font-bold text-[#000d21] text-lg">{activeSpot.giftLevel}</p>
                </div>
                <div>
                  <p className="text-xs text-[#1b1b1e]/50 uppercase tracking-wide font-bold">Status</p>
                  <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                    {activeSpot.status}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setActiveSpot(null)}
              className="text-[#1b1b1e]/35 hover:text-[#1b1b1e] transition-colors mt-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        )}
      </div>

      {/* ── Opportunity list ── */}
      <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,13,33,0.08)]">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-headline text-xs font-bold text-[#000d21] uppercase tracking-widest">
            {spots.length} Naming Opportunities
          </h3>
        </div>
        <div className="divide-y divide-gray-50">
          {spots.map(spot => {
            const isActive = activeSpot?.id === spot.id
            return (
              <button
                key={spot.id}
                onClick={() => setActiveSpot(isActive ? null : spot)}
                className={`w-full text-left px-6 py-4 flex items-center gap-4 transition-colors hover:bg-[#ac3400]/5 ${isActive ? 'bg-[#ac3400]/10' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold font-mono flex-shrink-0
                  ${isActive ? 'bg-[#ac3400]' : 'bg-amber-400'}`}>
                  {spot.id}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#000d21] text-sm">{spot.label}</p>
                  <p className="text-[#1b1b1e]/45 text-xs mt-0.5">{spot.giftLevel}</p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-green-100 text-green-700 flex-shrink-0">
                  {spot.status}
                </span>
              </button>
            )
          })}
        </div>
      </div>

    </div>
  )
}
