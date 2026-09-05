import { useRef, useState } from "react"
import {
  travelPackages,
  formatIDR,
  TourCategory,
  categoryLabels,
  buildWhatsAppUrl,
} from "../data"
import {
  placeFilterDefs,
  packageMatchesFilter,
  getPackageRegionCategory,
  PlaceFilterKey,
} from "../data/packageFilters"
import DestinationExplorer from "../components/DestinationExplorer"

interface ToursProps {
  onNavigate: (page: string, params?: Record<string, string>) => void
}

const categoryTabs: { label: string; value: TourCategory | "all" }[] = [
  { label: "All Areas", value: "all" },
  { label: "Ubud", value: "ubud" },
  { label: "South Bali", value: "south-bali" },
  { label: "Central Bali", value: "central-bali" },
  { label: "North Bali", value: "north-bali" },
  { label: "East Bali", value: "east-bali" },
]

export default function Tours({ onNavigate }: ToursProps) {
  const [activeCategory, setActiveCategory] = useState<TourCategory | "all">(
    "all",
  )
  const [activeType, setActiveType] = useState<PlaceFilterKey | "all">("all")
  const gridRef = useRef<HTMLDivElement>(null)

  const handleExplore = (category: TourCategory) => {
    setActiveCategory(category)
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const filtered = travelPackages.filter((pkg) => {
    if (!pkg.active) return false
    if (
      activeCategory !== "all" &&
      getPackageRegionCategory(pkg) !== activeCategory
    )
      return false
    if (activeType !== "all" && !packageMatchesFilter(pkg, activeType))
      return false
    return true
  })

  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <div className="relative bg-forest-800 pt-32 pb-24 sm:pt-40 sm:pb-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1711609110590-5ad5c4599e56?w=1200&h=400&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Curated Experiences
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Bali Tour Packages
          </h1>
          <p className="text-white/60 max-w-lg text-sm leading-relaxed">
            Handpicked full-day and half-day packages across the island — with
            your own private driver-guide and a flexible itinerary.
          </p>
        </div>
      </div>

      {/* Interactive map */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-5">
          <p className="font-mono-tag text-gold-600 text-xs uppercase mb-1">
            Explore by location
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gray-900">
            Find Your Next Destination
          </h2>
          <p className="text-gray-500 text-sm mt-1.5 max-w-lg">
            Click a spot on the map to see the packages built around it, or
            browse the full list below.
          </p>
        </div>
        <DestinationExplorer onNavigate={onNavigate} onExplore={handleExplore} />
      </div>

      {/* Tabs */}
      <div
        ref={gridRef}
        className="sticky top-20 bg-white/75 backdrop-blur-lg border-b border-white/60 z-10 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 space-y-3">
          {/* Region tabs */}
          <div className="flex gap-1 overflow-x-auto no-scrollbar">
            {categoryTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeCategory === tab.value
                    ? "bg-forest-800 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Place-type filters */}
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveType("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0 border ${
                activeType === "all"
                  ? "bg-gold-500 border-gold-500 text-white"
                  : "border-gray-200 text-gray-500 hover:border-gold-300 hover:text-gold-700"
              }`}
            >
              All Types
            </button>
            {placeFilterDefs.map((filter) => (
              <button
                key={filter.key}
                onClick={() =>
                  setActiveType((cur) => (cur === filter.key ? "all" : filter.key))
                }
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0 border ${
                  activeType === filter.key
                    ? "bg-gold-500 border-gold-500 text-white"
                    : "border-gray-200 text-gray-500 hover:border-gold-300 hover:text-gold-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Packages grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((pkg) => {
            const regionCategory = getPackageRegionCategory(pkg)
            return (
              <button
                key={pkg.id}
                onClick={() => onNavigate("tour-detail", { id: pkg.id })}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-forest-200 hover:shadow-md transition-all text-left"
              >
                <div className="relative h-52 bg-forest-800 overflow-hidden">
                  <img
                    src={pkg.images[0]}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-forest-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {regionCategory ? categoryLabels[regionCategory] : pkg.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-display font-semibold text-white text-base leading-snug">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                    {pkg.tagline}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-3.5 h-3.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" d="M12 6v6l4 2" />
                      </svg>
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-3.5 h-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      {pkg.destinationIds.length} stops
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <div>
                      <p className="text-xs text-gray-400">from</p>
                      <p className="text-forest-700 font-bold text-base">
                        {formatIDR(pkg.estimatedCost.min)}
                      </p>
                    </div>
                    <span className="text-forest-600 text-xs font-semibold group-hover:text-forest-800 transition-colors">
                      View details →
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="mb-3">
              No packages match these filters yet — we can still arrange it.
            </p>
            <a
              href={buildWhatsAppUrl(
                "Hi! I'd like to ask about a Bali trip. Can you help arrange it?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-700 text-sm font-semibold hover:text-forest-900"
            >
              Ask us on WhatsApp →
            </a>
          </div>
        )}

        {/* Custom tour CTA */}
        <div className="mt-12 bg-forest-800 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-semibold text-white mb-2">
            Want a custom itinerary?
          </h3>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
            We can design a fully personalized tour around your interests,
            timeline, and group size. Just tell us what you have in mind.
          </p>
          <a
            href={buildWhatsAppUrl(
              "Hi! I'd like to create a custom Bali tour itinerary. Can you help?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Plan a Custom Tour
          </a>
        </div>
      </div>
    </div>
  )
}
