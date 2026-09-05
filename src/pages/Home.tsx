import { useEffect, useState } from "react"
import {
  travelPackages,
  transportServices,
  formatIDR,
  buildWhatsAppUrl,
  categoryLabels,
  TravelPackage,
  TransportType,
} from "../data"
import {
  packageMatchesFilter,
  getPackageRegionCategory,
  PlaceFilterKey,
} from "../data/packageFilters"
import BookingModal from "../components/BookingModal"
import Reveal from "../components/Reveal"
import {
  SearchIcon,
  MessageIcon,
  CheckCircleIcon,
  CompassIcon,
  ShieldIcon,
  CoinsIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  CarIcon,
  PlaneIcon,
  WavesIcon,
  LeafIcon,
  LandmarkIcon,
  MountainIcon,
  DropletIcon,
  StoreIcon,
  EyeIcon,
} from "../components/icons"

interface HomeProps {
  onNavigate: (page: string, params?: Record<string, string>) => void
}

const heroImages = [
  "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1600&h=1000&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1711609110590-5ad5c4599e56?w=1600&h=1000&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1600&h=1000&fit=crop&auto=format",
]

const faqs = [
  {
    q: "How do I confirm a booking?",
    a: "Click any 'Book via WhatsApp' button and we'll respond to confirm availability, pricing, and send payment details for the booking deposit (DP). Once the deposit is received, your reservation is secured.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes. A booking deposit (DP) is required to secure all reservations. The deposit amount varies by service and will be confirmed over WhatsApp before any payment is made.",
  },
  {
    q: "What's included in the starting price?",
    a: "Starting prices cover the driver, vehicle, fuel, and bottled water. Parking fees, toll fees, and entrance tickets to attractions are paid separately by the guest — all costs are transparent and confirmed in advance.",
  },
  {
    q: "Can I customize a tour itinerary?",
    a: "Absolutely. All tours can be adjusted to your preferences. Just let us know your interests and we'll create a personalized itinerary — message us on WhatsApp.",
  },
  {
    q: "What vehicles do you use?",
    a: "We use clean, air-conditioned Toyota Innova and Avanza vehicles, maintained regularly. For larger groups, we can arrange bigger vehicles — just ask when booking.",
  },
  {
    q: "Do drivers speak English?",
    a: "Yes, all our drivers are conversational in English and can help guide you through attractions and local tips throughout the day.",
  },
]

const reasons = [
  {
    icon: CompassIcon,
    title: "Local Knowledge",
    desc: "We know the best routes, hidden gems, and authentic local experiences.",
  },
  {
    icon: MessageIcon,
    title: "Direct Communication",
    desc: "No middleman, no hidden fees. You chat directly with us on WhatsApp.",
  },
  {
    icon: ShieldIcon,
    title: "Trusted & Reliable",
    desc: "Clean vehicles, punctual service, and drivers you can count on.",
  },
  {
    icon: CoinsIcon,
    title: "Transparent Pricing",
    desc: "Clear starting prices and honest information before you book.",
  },
]

const bookingSteps = [
  {
    icon: SearchIcon,
    label: "Browse",
    desc: "Explore our transport and destination packages",
    gradient: "from-forest-700 to-forest-950",
  },
  {
    icon: MessageIcon,
    label: "Message us",
    desc: 'Tap "Chat on WhatsApp" and send your request',
    gradient: "from-gold-600 to-gold-500",
  },
  {
    icon: CheckCircleIcon,
    label: "Confirm",
    desc: "Agree on availability, pricing, and pay the deposit",
    gradient: "from-forest-800 to-forest-600",
  },
  {
    icon: CompassIcon,
    label: "Enjoy Bali",
    desc: "Your driver picks you up on the day",
    gradient: "from-forest-950 via-forest-800 to-gold-600",
  },
]

const heroFeatures = [
  {
    icon: CarIcon,
    title: "Private & Comfortable",
    desc: "Travel in comfort with your own driver",
  },
  {
    icon: ShieldIcon,
    title: "Trusted Local Drivers",
    desc: "Friendly, experienced, and professional",
  },
  {
    icon: MapPinIcon,
    title: "Many Destinations",
    desc: "Explore Bali and beyond with ease",
  },
]

const transportIcons: Record<TransportType, typeof CarIcon> = {
  "private-driver": CarIcon,
  "airport-shuttle": PlaneIcon,
  intercity: CarIcon,
}

const destinationFilters: {
  key: PlaceFilterKey | "all"
  label: string
  icon: typeof CompassIcon
}[] = [
  { key: "all", label: "All", icon: MapPinIcon },
  { key: "beach", label: "Beaches", icon: WavesIcon },
  { key: "mountain", label: "Mountains", icon: MountainIcon },
  { key: "waterfall", label: "Waterfalls", icon: DropletIcon },
  { key: "forest", label: "Forests", icon: LeafIcon },
  { key: "watersport", label: "Watersports", icon: CompassIcon },
  { key: "temple", label: "Temples", icon: LandmarkIcon },
  { key: "viewpoint", label: "Viewpoints", icon: EyeIcon },
  { key: "market", label: "Markets", icon: StoreIcon },
]

function TicketCard({
  pkg,
  onNavigate,
}: {
  pkg: TravelPackage
  onNavigate: HomeProps["onNavigate"]
}) {
  const regionCategory = getPackageRegionCategory(pkg)
  return (
    <button
      onClick={() => onNavigate("tour-detail", { id: pkg.id })}
      className="group bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:shadow-forest-900/5 transition-all text-left w-full overflow-hidden"
    >
      <div className="h-44 relative">
        <img
          src={pkg.images[0]}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-forest-900 text-[11px] font-semibold px-2.5 py-1 rounded-full">
          {regionCategory ? categoryLabels[regionCategory] : pkg.category}
        </span>
        <span className="absolute bottom-3 left-3 bg-black/55 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
          <ClockIcon className="w-3 h-3" />
          {pkg.duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-3 leading-snug">
          {pkg.name}
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-gray-400">From</p>
            <p className="text-gray-900 font-bold text-sm">
              {formatIDR(pkg.estimatedCost.min)}
            </p>
          </div>
          <span className="w-8 h-8 rounded-full bg-gold-500 group-hover:bg-gold-600 flex items-center justify-center text-white transition-colors flex-shrink-0">
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </button>
  )
}

export default function Home({ onNavigate }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [bookingService, setBookingService] = useState<string | null>(null)
  const [heroIndex, setHeroIndex] = useState(0)
  const [destFilter, setDestFilter] = useState<PlaceFilterKey | "all">("all")

  useEffect(() => {
    const id = setInterval(
      () => setHeroIndex((i) => (i + 1) % heroImages.length),
      5500,
    )
    return () => clearInterval(id)
  }, [])

  const activePackages = travelPackages.filter((p) => p.active)
  const visiblePackages =
    destFilter === "all"
      ? activePackages.slice(0, 4)
      : activePackages
          .filter((p) => packageMatchesFilter(p, destFilter))
          .slice(0, 8)
  const featuredTransport = transportServices
    .filter((t) => t.active)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-sand">
      {/* Hero — full viewport height, auto-rotating background */}
      <section className="relative min-h-[100svh] w-full flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-forest-950">
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Bali landscape"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
                i === heroIndex ? "opacity-60" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/35 to-forest-950/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center gap-10 sm:gap-12 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-24 pb-10 sm:pt-28 sm:pb-12">
          <div className="max-w-2xl">
            <p
              className="hero-in font-mono-tag text-[11px] text-gold-400 uppercase tracking-widest mb-6"
              style={{ animationDelay: "80ms" }}
            >
              Private Transport &amp; Tours
            </p>
            <h1
              className="hero-in font-display text-[2.75rem] sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6"
              style={{ animationDelay: "180ms" }}
            >
              Explore Bali,
              <br />
              <span className="italic font-normal text-gold-400">
                your way.
              </span>
            </h1>
            <p
              className="hero-in text-white/65 text-lg leading-relaxed mb-9 max-w-lg"
              style={{ animationDelay: "320ms" }}
            >
              Private drivers, airport shuttles, and curated island tours. Book
              through WhatsApp. No platform fees, no surprises.
            </p>
            <div
              className="hero-in flex flex-col items-start sm:flex-row sm:items-center gap-3"
              style={{ animationDelay: "440ms" }}
            >
              <a
                href={buildWhatsAppUrl(
                  "Hi! I'd like to plan my Bali trip. Can you help?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-xl transition-all duration-300 text-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <button
                onClick={() => onNavigate("tours")}
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold rounded-xl transition-all duration-300 text-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                See Destinations
              </button>
            </div>
          </div>

          {/* Feature row */}
          <div
            className="hero-in flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12"
            style={{ animationDelay: "560ms" }}
          >
            {heroFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white flex-shrink-0">
                  <feature.icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">
                    {feature.title}
                  </p>
                  <p className="text-white/55 text-xs">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="font-mono-tag text-gold-600 text-xs uppercase mb-1">
                  Curated destinations
                </p>
                <h2 className="font-display text-3xl font-semibold text-gray-900">
                  Popular Destinations
                </h2>
              </div>
              <button
                onClick={() => onNavigate("tours")}
                className="text-forest-700 text-sm font-semibold hover:text-forest-900 transition-colors hidden sm:flex items-center gap-1.5 group"
              >
                View all{" "}
                <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>

          {/* Vibe filters */}
          <Reveal delay={80}>
            <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar mb-10 px-2 py-2">
              {destinationFilters.map((filter) => {
                const active = destFilter === filter.key
                return (
                  <button
                    key={filter.key}
                    onClick={() => setDestFilter(filter.key)}
                    className="group flex flex-col items-center gap-2 flex-shrink-0"
                  >
                    <span
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        active
                          ? "bg-forest-900 text-gold-400 scale-105 shadow-md shadow-forest-900/20"
                          : "bg-forest-50 text-forest-700 group-hover:bg-forest-100 group-hover:-translate-y-0.5"
                      }`}
                    >
                      <filter.icon className="w-5 h-5" />
                    </span>
                    <span
                      className={`text-xs font-medium transition-colors ${
                        active
                          ? "text-forest-900"
                          : "text-gray-500 group-hover:text-forest-800"
                      }`}
                    >
                      {filter.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visiblePackages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 70}>
                <TicketCard pkg={pkg} onNavigate={onNavigate} />
              </Reveal>
            ))}
          </div>

          {visiblePackages.length === 0 && (
            <p className="text-center text-gray-400 text-sm py-12">
              No destinations match this filter yet.
            </p>
          )}

          <button
            onClick={() => onNavigate("tours")}
            className="mt-6 w-full sm:hidden text-center text-forest-700 text-sm font-semibold py-3"
          >
            View all tours →
          </button>
        </div>
      </section>

      {/* Transport */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 overflow-hidden">
        <div className="absolute -top-32 -left-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="font-mono-tag text-gold-400 text-xs uppercase mb-1">
                  Private vehicles
                </p>
                <h2 className="font-display text-3xl font-semibold text-white">
                  Transport
                </h2>
              </div>
              <button
                onClick={() => onNavigate("transport")}
                className="text-white/70 text-sm font-semibold hover:text-white transition-colors hidden sm:flex items-center gap-1.5 group"
              >
                View all{" "}
                <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredTransport.map((service, i) => {
              const Icon = transportIcons[service.type]
              return (
                <Reveal key={service.id} delay={i * 90}>
                  <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-forest-950/30 hover:-translate-y-1.5 transition-all duration-300">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="px-5 pb-5">
                      <div className="relative z-10 -mt-6 mb-3 w-12 h-12 rounded-full bg-forest-900 border-4 border-white flex items-center justify-center text-gold-400 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] text-gray-400">
                            Starting from
                          </p>
                          <p className="text-gray-900 font-bold text-base">
                            {formatIDR(service.startingPrice)}
                          </p>
                        </div>
                        <button
                          onClick={() => setBookingService(service.name)}
                          className="px-4 py-2 bg-whatsapp hover:bg-whatsapp-dark text-white text-xs font-semibold rounded-lg transition-all active:scale-95"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why With Us */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-forest-50/70 via-stone-50 to-forest-50/70 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="font-mono-tag text-gold-600 text-xs uppercase mb-2">
                Why choose us
              </p>
              <h2 className="font-display text-3xl font-semibold text-gray-900">
                What makes us different
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((reason, i) => (
              <Reveal key={i} delay={i * 80} variant="scale">
                <div className="group bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md hover:shadow-forest-900/5 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-forest-50 rounded-full flex items-center justify-center mb-4 mx-auto text-forest-800 transition-colors duration-300 group-hover:bg-forest-900 group-hover:text-gold-400">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-sm mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Trip */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-100/60 via-sand to-sand" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-12 gap-4">
              <div>
                <p className="font-mono-tag text-gold-600 text-xs uppercase mb-2">
                  Simple process
                </p>
                <h2 className="font-display text-3xl font-semibold text-gray-900">
                  Plan Your Trip{" "}
                  <span className="text-forest-700">in 4 Easy Steps</span>
                </h2>
              </div>
              <a
                href={buildWhatsAppUrl(
                  "Hi! I'd like to plan my Bali trip. Can you help?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex px-5 py-2.5 bg-forest-900 hover:bg-forest-800 text-white text-sm font-semibold rounded-full transition-all hover:-translate-y-0.5 active:scale-95 flex-shrink-0"
              >
                Get Started
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {bookingSteps.map((step, i) => (
              <Reveal key={i} delay={i * 90} variant="scale">
                <div
                  className={`group relative h-full min-h-[15rem] flex flex-col justify-between overflow-hidden rounded-3xl p-5 sm:p-6 bg-gradient-to-br ${step.gradient} shadow-lg shadow-forest-900/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-forest-900/25`}
                >
                  {/* Decorative glow */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                  {/* Ghost step numeral */}
                  <span className="absolute -bottom-4 -right-1 font-display text-[6rem] sm:text-[6.5rem] leading-none font-bold text-white/10 select-none pointer-events-none transition-colors duration-300 group-hover:text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                    <step.icon className="w-5 h-5" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-display text-white text-lg font-semibold mb-1.5">
                      {step.label}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed max-w-[85%]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 bg-forest-100/60 overflow-hidden">
        <svg
          viewBox="0 0 200 200"
          className="absolute -bottom-10 left-0 w-64 h-64 text-forest-800/[0.06] pointer-events-none hidden lg:block"
          fill="currentColor"
        >
          <path d="M100 10l25 45h-50zM100 45l32 55h-64zM100 90l40 65h-80z" />
          <rect x="94" y="150" width="12" height="45" />
        </svg>
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.3fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <div>
              <p className="font-mono-tag text-gold-600 text-xs uppercase mb-2">
                Got questions?
              </p>
              <h2 className="font-display text-3xl font-semibold text-gray-900">
                Frequently Asked
              </h2>
            </div>
          </Reveal>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                  >
                    <span className="font-medium text-gray-900 text-sm">
                      {faq.q}
                    </span>
                    <ChevronDownIcon
                      className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: openFaq === i ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {bookingService && (
        <BookingModal
          serviceName={bookingService}
          onClose={() => setBookingService(null)}
        />
      )}
    </div>
  )
}
