import { useState } from "react"
import { travelPackages, destinations, formatIDR, categoryLabels } from "../data"
import { getPackageRegionCategory } from "../data/packageFilters"
import BookingModal from "../components/BookingModal"
import { MapPinIcon, CheckCircleIcon, ClockIcon } from "../components/icons"

interface TourDetailProps {
  tourId: string
  onNavigate: (page: string, params?: Record<string, string>) => void
}

const difficultyLabels: Record<string, string> = {
  easy: "Easy",
  moderate: "Moderate",
  hard: "Challenging",
}

export default function TourDetail({ tourId, onNavigate }: TourDetailProps) {
  const pkg = travelPackages.find((p) => p.id === tourId)
  const [activeImage, setActiveImage] = useState(0)
  const [bookingOpen, setBookingOpen] = useState(false)

  if (!pkg) {
    return (
      <div className="min-h-screen bg-sand flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Package not found.</p>
          <button
            onClick={() => onNavigate("tours")}
            className="text-forest-600 font-semibold"
          >
            ← Back to tours
          </button>
        </div>
      </div>
    )
  }

  const regionCategory = getPackageRegionCategory(pkg)
  const packageDestinations = pkg.destinationIds
    .map((id) => destinations.find((d) => d.id === id))
    .filter((d): d is (typeof destinations)[number] => Boolean(d))

  return (
    <div className="min-h-screen bg-sand">
      {/* Image gallery */}
      <div className="relative bg-forest-900 pt-20">
        <div className="relative h-[50vh] min-h-72 overflow-hidden">
          <img
            src={pkg.images[activeImage]}
            alt={pkg.name}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/20 to-forest-900/50" />

          {/* Back button */}
          <button
            onClick={() => onNavigate("tours")}
            aria-label="Back to tours"
            className="absolute top-4 left-4 w-11 h-11 flex items-center justify-center bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full transition-colors"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          {/* Category badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
              {regionCategory ? categoryLabels[regionCategory] : pkg.category}
            </span>
          </div>

          {/* Thumbnails */}
          {pkg.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {pkg.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1} of ${pkg.images.length}`}
                  aria-current={i === activeImage}
                  className="p-2.5 -m-2.5"
                >
                  <span
                    className={`block h-2 rounded-full transition-all ${
                      i === activeImage ? "bg-white w-6" : "bg-white/50 w-2"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {pkg.images.length > 1 && (
          <div className="flex gap-2 px-4 sm:px-6 py-3 overflow-x-auto max-w-6xl mx-auto">
            {pkg.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  i === activeImage
                    ? "border-gold-500"
                    : "border-transparent opacity-60"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {pkg.name}
            </h1>
            <p className="text-forest-600 text-sm font-medium mb-4">
              {pkg.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1.5">
                <ClockIcon className="w-4 h-4 text-forest-500" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPinIcon className="w-4 h-4 text-forest-500" />
                {pkg.destinationIds.length} destinations
              </span>
              {pkg.difficulty && (
                <span className="flex items-center gap-1.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 text-forest-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
                    />
                  </svg>
                  {difficultyLabels[pkg.difficulty] ?? pkg.difficulty}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {pkg.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-forest-50 text-forest-700 text-xs font-medium px-2.5 py-1 rounded-full capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              {pkg.description}
            </p>

            {/* Itinerary */}
            <div className="mb-8">
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-5">
                Itinerary
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-forest-100" />
                <div className="space-y-5">
                  {pkg.itinerary.map((item, i) => (
                    <div key={i} className="flex gap-4 relative">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-800 text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                        {i + 1}
                      </div>
                      <div className="flex-1 pb-1">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="text-xs font-bold text-forest-600 tracking-wide">
                            {item.time}
                          </span>
                          <span className="text-gray-900 text-sm font-semibold">
                            {item.title}
                          </span>
                          {item.duration && (
                            <span className="text-[11px] text-gray-400">
                              ({item.duration})
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-forest-50 rounded-xl p-5">
                <h3 className="font-semibold text-forest-800 mb-3 flex items-center gap-2">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  What's included
                </h3>
                <ul className="space-y-2">
                  {pkg.included.length === 0 && (
                    <li className="text-sm text-forest-700/60">
                      Confirmed with your booking on WhatsApp.
                    </li>
                  )}
                  {pkg.included.map((inc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-forest-800"
                    >
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-600 mb-3 flex items-center gap-2">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-red-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Not included
                </h3>
                <ul className="space-y-2">
                  {pkg.excluded.map((ex, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Destinations */}
            <div>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Places on this route
              </h2>
              <div className="flex flex-wrap gap-2">
                {packageDestinations.map((dest) => (
                  <a
                    key={dest.id}
                    href={dest.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium hover:border-forest-400 hover:text-forest-700 hover:bg-forest-50 transition-colors"
                  >
                    <MapPinIcon className="w-3.5 h-3.5 text-forest-500" />
                    {dest.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="mb-5">
                <p className="text-xs text-gray-400 mb-1">Estimated cost</p>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="font-display text-2xl font-bold text-forest-800">
                    {formatIDR(pkg.estimatedCost.min)}
                  </span>
                  <span className="text-gray-400 text-sm">
                    – {formatIDR(pkg.estimatedCost.max)}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Final price confirmed on WhatsApp
                </p>
              </div>

              <button
                onClick={() => setBookingOpen(true)}
                className="w-full py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors text-sm mb-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book via WhatsApp
              </button>

              <p className="text-xs text-center text-gray-400 mb-5">
                Availability & final price confirmed in chat. A deposit (DP)
                secures your booking.
              </p>

              <div className="space-y-2.5 text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-forest-500 mt-0.5 flex-shrink-0" />
                  <span>Private, non-shared vehicle</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-forest-500 mt-0.5 flex-shrink-0" />
                  <span>English-speaking driver-guide</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-forest-500 mt-0.5 flex-shrink-0" />
                  <span>Hotel pickup & drop-off included</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-forest-500 mt-0.5 flex-shrink-0" />
                  <span>Flexible itinerary on request</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-40 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-xs text-gray-400">Estimated cost</p>
          <p className="font-bold text-forest-800 text-base">
            {formatIDR(pkg.estimatedCost.min)}
          </p>
        </div>
        <button
          onClick={() => setBookingOpen(true)}
          className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Book via WhatsApp
        </button>
      </div>

      {bookingOpen && (
        <BookingModal
          serviceName={pkg.name}
          onClose={() => setBookingOpen(false)}
        />
      )}
    </div>
  )
}
