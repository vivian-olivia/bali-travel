import { useState } from "react"
import baliMap from "../assets/bali-map.png"
import {
  travelPackages,
  destinationRegions,
  buildWhatsAppUrl,
  TourCategory,
  MAP_ASPECT_RATIO,
} from "../data"
import {
  loadCustomRegions,
  loadPositionOverrides,
  applyPositionOverrides,
  loadHiddenRegionIds,
} from "../data/customRegions"
import {
  ClockIcon,
  MapPinIcon,
  ArrowRightIcon,
  HandClickIcon,
  XIcon,
} from "./icons"

interface DestinationExplorerProps {
  onNavigate: (page: string, params?: Record<string, string>) => void
  onExplore: (category: TourCategory) => void
}

// Mirrors Tailwind's `sm` breakpoint, which is what gates the popup panel
// below (`hidden sm:flex`) — kept in sync manually since there's no way to
// read a Tailwind breakpoint from JS.
const DESKTOP_QUERY = "(min-width: 640px)"

export default function DestinationExplorer({
  onNavigate,
  onExplore,
}: DestinationExplorerProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [allRegions] = useState(() => {
    const hiddenIds = loadHiddenRegionIds()
    const visibleBuiltIns = applyPositionOverrides(
      destinationRegions,
      loadPositionOverrides(),
    ).filter((r) => !hiddenIds.includes(r.id))
    return [...visibleBuiltIns, ...loadCustomRegions()]
  })

  const active = allRegions.find((r) => r.id === activeId) ?? null
  // Every area pin routes to full curated packages here — never a raw
  // destination linking straight out to Google Maps. A travel agency sells
  // packages, not individual places.
  const activePackages = active
    ? travelPackages.filter((p) => p.active && p.areaId === active.id)
    : []

  // Desktop: tapping a pin opens the preview popup so you can compare
  // regions without leaving the map; the popup's own "Explore" button does
  // the filter+scroll. Mobile: there's no room for a popup without it
  // covering the pins themselves, so a tap jumps straight to the filtered
  // grid below instead.
  const handlePinClick = (region: (typeof allRegions)[number]) => {
    setActiveId(region.id)
    const isDesktop =
      typeof window !== "undefined" && window.matchMedia(DESKTOP_QUERY).matches
    if (!isDesktop) {
      onExplore(region.category)
    }
  }

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-forest-900/10 bg-forest-100 shadow-lg shadow-forest-900/5">
      {/* Map — always shown at its native aspect ratio, never cropped */}
      <div className="relative w-full" style={{ aspectRatio: MAP_ASPECT_RATIO }}>
        <img
          src={baliMap}
          alt="Illustrated map of Bali"
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />

        {/* Region pins */}
        {allRegions.map((region) => {
          const isActive = region.id === activeId
          return (
            <button
              key={region.id}
              onClick={() => handlePinClick(region)}
              style={{ left: `${region.x}%`, top: `${region.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 z-10 group"
              aria-pressed={isActive}
              aria-label={`View destinations near ${region.name}`}
            >
              <span className="relative flex items-center justify-center w-6 h-6">
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-forest-900/50 animate-pulse-ring" />
                )}
                <span
                  className={`relative rounded-full border-2 border-white shadow-md transition-all duration-300 ${
                    isActive
                      ? "w-4 h-4 bg-forest-900 scale-125"
                      : "w-3 h-3 bg-gold-500 group-hover:scale-125 group-hover:bg-gold-600"
                  }`}
                />
              </span>
              <span
                className={`font-mono-tag text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap shadow-sm transition-all duration-300 ${
                  isActive
                    ? "bg-forest-900 text-gold-400"
                    : "bg-white/90 text-forest-900 group-hover:bg-white"
                }`}
              >
                {region.name.toUpperCase()}
              </span>
            </button>
          )
        })}
      </div>

      {/* Popup panel — desktop only (`hidden sm:flex`). On mobile this used
          to render full-bleed over the map (or, before that, cover it
          entirely as an idle placeholder), sitting above every pin and
          making the map untappable — `hidden` removes it from layout and
          hit-testing on mobile instead of just repositioning it. */}
      {active ? (
        <div className="hidden sm:flex sm:flex-col absolute right-5 top-5 bottom-5 w-80 max-w-[22rem] bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden z-20">
          {/* Panel header */}
          <div className="relative flex items-start gap-3.5 p-5 border-b border-gray-100 flex-shrink-0">
            <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-forest-100 ring-2 ring-white shadow">
              {activePackages[0] && (
                <img
                  src={activePackages[0].images[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="pr-7">
              <h3 className="font-display text-lg font-semibold text-gray-900 leading-tight">
                {active.name}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mt-1">
                {active.tagline}
              </p>
            </div>
            <button
              onClick={() => setActiveId(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <XIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Packages here */}
          <div className="px-5 pt-4 pb-1 flex-shrink-0">
            <p className="font-mono-tag text-gold-600 text-[10px] uppercase">
              Packages in {active.name}
            </p>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-3 space-y-3 min-h-0">
            {activePackages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => onNavigate("tour-detail", { id: pkg.id })}
                className="w-full flex items-center gap-3 text-left bg-white hover:bg-forest-50 border border-gray-100 hover:border-forest-200 rounded-xl p-2.5 transition-colors group"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={pkg.images[0]}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 leading-snug truncate">
                    {pkg.name}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mt-0.5">
                    {pkg.tagline}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-1.5">
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="w-3 h-3" />
                      {pkg.destinationIds.length} stop
                      {pkg.destinationIds.length === 1 ? "" : "s"}
                    </span>
                  </div>
                </div>
                <ArrowRightIcon className="w-3.5 h-3.5 text-gray-300 group-hover:text-forest-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </button>
            ))}

            {activePackages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400 text-xs mb-3">
                  No packaged tours here yet — we can still arrange it.
                </p>
                <a
                  href={buildWhatsAppUrl(
                    `Hi! I'd like to ask about visiting ${active.name}. Can you help arrange a trip?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-700 text-xs font-semibold hover:text-forest-900"
                >
                  Ask us on WhatsApp →
                </a>
              </div>
            )}
          </div>

          {/* Explore CTA */}
          {activePackages.length > 0 && (
            <div className="p-4 border-t border-gray-100 flex-shrink-0">
              <button
                onClick={() => onExplore(active.category)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-forest-900 hover:bg-forest-800 text-white text-sm font-semibold rounded-xl transition-colors active:scale-[0.98]"
              >
                <MapPinIcon className="w-4 h-4 text-gold-400" />
                Explore {active.name} Tours
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Idle placeholder — desktop only, same reasoning as above. */
        <div className="hidden sm:flex sm:flex-col absolute right-5 top-5 bottom-5 w-80 max-w-[22rem] bg-white rounded-3xl border border-gray-100 shadow-xl items-center justify-center text-center px-6 gap-3 z-20">
          <span className="w-12 h-12 rounded-full bg-forest-900 flex items-center justify-center text-gold-400 flex-shrink-0">
            <HandClickIcon className="w-5 h-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-forest-900">
              Click on a location
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              to explore destinations
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
