import { useState } from "react"
import {
  transportServices,
  formatIDR,
  TransportType,
  transportTypeLabels,
} from "../data"
import BookingModal from "../components/BookingModal"
import { InfoIcon } from "../components/icons"

const tabs: { label: string; value: TransportType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Private Driver", value: "private-driver" },
  { label: "Airport Shuttle", value: "airport-shuttle" },
  { label: "Intercity", value: "intercity" },
]

export default function Transport() {
  const [activeTab, setActiveTab] = useState<TransportType | "all">("all")
  const [bookingService, setBookingService] = useState<string | null>(null)
  const [driverChoice, setDriverChoice] = useState<
    Record<string, "with" | "without">
  >({})

  const filtered = transportServices.filter(
    (s) => s.active && (activeTab === "all" || s.type === activeTab),
  )

  return (
    <div className="min-h-screen bg-sand">
      {/* Page header */}
      <div className="relative bg-forest-800 pt-32 pb-24 sm:pt-40 sm:pb-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558005530-a7958896ec60?w=1200&h=400&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Bali Private Transport
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Transport Services
          </h1>
          <p className="text-white/60 max-w-lg text-sm leading-relaxed">
            Private drivers, airport transfers, and intercity transport across
            Bali and East Java. All vehicles are clean, air-conditioned, and
            priced transparently.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-20 bg-white/75 backdrop-blur-lg border-b border-white/60 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeTab === tab.value
                    ? "bg-forest-800 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((service) => {
            const withDriver = (driverChoice[service.id] ?? "with") === "with"
            const displayPrice =
              service.driverOptional && !withDriver && service.selfDrivePrice != null
                ? service.selfDrivePrice
                : service.startingPrice
            const displayInclusions = withDriver
              ? service.inclusions
              : service.inclusions.filter((inc) => !/driver/i.test(inc))
            const displayExclusions = withDriver
              ? service.exclusions
              : ["Driver (self-drive rental)", ...service.exclusions]
            const bookingLabel = service.driverOptional
              ? `${service.name} (${withDriver ? "With Driver" : "Self-Drive, No Driver"})`
              : service.name

            return (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-forest-200 hover:shadow-md transition-all"
            >
              <div className="relative h-44 bg-forest-800 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-forest-800 text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
                    {transportTypeLabels[service.type]}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h2 className="font-semibold text-gray-900 text-base mb-1">
                  {service.name}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {service.driverOptional && (
                  <div className="flex items-center gap-2 mb-4">
                    <button
                      onClick={() =>
                        setDriverChoice((prev) => ({
                          ...prev,
                          [service.id]: "with",
                        }))
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        withDriver
                          ? "bg-forest-800 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      With Driver
                    </button>
                    <button
                      onClick={() =>
                        setDriverChoice((prev) => ({
                          ...prev,
                          [service.id]: "without",
                        }))
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        !withDriver
                          ? "bg-forest-800 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Self-Drive
                    </button>
                  </div>
                )}

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
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
                    {service.duration}
                  </span>
                  {service.destinations.length > 0 && (
                    <span className="flex items-center gap-1.5">
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {service.destinations[0]}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                  <div>
                    <p className="text-gray-400 font-semibold uppercase tracking-wide mb-1.5">
                      Included
                    </p>
                    <ul className="space-y-1">
                      {displayInclusions.map((inc, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1.5 text-gray-600"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-400 font-semibold uppercase tracking-wide mb-1.5">
                      Not included
                    </p>
                    <ul className="space-y-1">
                      {displayExclusions.map((ex, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1.5 text-gray-500"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400">Starting from</p>
                    <p className="text-forest-700 font-bold text-lg">
                      {formatIDR(displayPrice)}
                    </p>
                  </div>
                  <button
                    onClick={() => setBookingService(bookingLabel)}
                    className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
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
                </div>
              </div>
            </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No services in this category.</p>
          </div>
        )}

        {/* Pricing note */}
        <div className="mt-10 bg-forest-100 rounded-2xl p-6 text-sm text-forest-800">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <InfoIcon className="w-4 h-4 text-forest-600" />
            About pricing
          </p>
          <p className="leading-relaxed text-forest-700">
            Prices shown are starting rates and may vary based on your pickup
            location, group size, and specific requirements. Out-of-area or
            long-distance trips may have additional charges. Final pricing is
            always confirmed over WhatsApp before any deposit is collected.
          </p>
        </div>
      </div>

      {bookingService && (
        <BookingModal
          serviceName={bookingService}
          onClose={() => setBookingService(null)}
        />
      )}
    </div>
  )
}
