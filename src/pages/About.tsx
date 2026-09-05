import {
  CompassIcon,
  MessageIcon,
  CarIcon,
  ClockIcon,
  CoinsIcon,
  ShieldIcon,
  MapPinIcon,
  StarIcon,
} from "../components/icons"

const reviews = [
  {
    name: "Sarah M.",
    country: "United Kingdom",
    text: "Our driver was incredibly knowledgeable and made the whole day special. He took us off the main tourist paths to find hidden gems. Will definitely book again on our next Bali trip.",
    tour: "Ubud Cultural Full Day",
    rating: 5,
  },
  {
    name: "Thomas B.",
    country: "Germany",
    text: "Perfect airport transfer — our driver was waiting with a sign and helped with all our luggage. The car was spotless and air-conditioned. Exactly what you need after a long flight.",
    tour: "Airport → Ubud Transfer",
    rating: 5,
  },
  {
    name: "Yuki T.",
    country: "Japan",
    text: "The Nusa Penida day trip was absolutely breathtaking. Our guide was patient and made sure we had time at each location. Worth every rupiah.",
    tour: "Nusa Penida Day Trip",
    rating: 5,
  },
  {
    name: "Laura C.",
    country: "Singapore",
    text: "Easy WhatsApp booking, prompt replies, great communication. The whole experience was seamless and stress-free. Highly recommend for any Bali travel.",
    tour: "Lovina Dolphins Tour",
    rating: 5,
  },
]

const serviceAreas = [
  "Seminyak / Kuta / Legian",
  "Ubud & Surrounds",
  "Canggu / Pererenan",
  "Nusa Dua / Jimbaran",
  "Uluwatu / Bukit Peninsula",
  "Sanur & East Coast",
  "Bedugul / Tabanan",
  "Lovina / North Bali",
  "Amed / Candidasa",
  "Bromo (East Java)",
  "Kawah Ijen (East Java)",
]

export default function About() {
  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <div className="relative bg-forest-800 pt-32 pb-24 sm:pt-40 sm:pb-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&h=500&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Who we are
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-white/60 max-w-lg text-sm leading-relaxed">
            A small Bali-based team passionate about showing visitors the real
            island — not just the popular spots, but the hidden corners too.
          </p>
        </div>
      </div>

      {/* Our story */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-forest-600 text-xs font-semibold tracking-widest uppercase mb-3">
              Our story
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-snug">
              Born in Bali, built on trust
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                We started as a small family-run transport service in Ubud. Over
                the years, our reputation for punctuality, honesty, and genuine
                care for guests has grown into a full portfolio of tours and
                intercity routes.
              </p>
              <p>
                Our drivers are Balinese locals who know the island intimately —
                which roads to avoid, which warungs serve the best nasi campur,
                and when to arrive at each temple to beat the crowds. That local
                knowledge is something no app can replicate.
              </p>
              <p>
                We keep things personal. Every booking is handled directly
                through WhatsApp, no middlemen, no platform commissions — which
                means better pricing and a real relationship with the people
                driving you around.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559628233-eb1b1a45564b?w=700&h=500&fit=crop&auto=format"
              alt="Bali rice terraces at dawn"
              className="rounded-2xl w-full h-72 sm:h-80 object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-forest-800 text-white rounded-2xl p-4 hidden sm:block">
              <p className="font-display font-semibold text-lg">6+ years</p>
              <p className="text-white/60 text-xs">serving Bali visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-forest-600 text-xs font-semibold tracking-widest uppercase mb-2">
              Why us
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
              What makes us different
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: CompassIcon,
                title: "Local knowledge",
                desc: "Our drivers are Balinese and know the island beyond the tourist trails — hidden viewpoints, best photo spots, authentic local food.",
              },
              {
                icon: MessageIcon,
                title: "Direct communication",
                desc: "No third-party platforms. Your booking is handled directly by us over WhatsApp — fast replies, transparent pricing, real people.",
              },
              {
                icon: CarIcon,
                title: "Clean, reliable vehicles",
                desc: "All our cars are regularly serviced Toyota Innova and Avanza models — air-conditioned, comfortable, and maintained to a high standard.",
              },
              {
                icon: ClockIcon,
                title: "Always on time",
                desc: "We track flights for airport pickups and plan routes carefully. Punctuality is the foundation of our reputation.",
              },
              {
                icon: CoinsIcon,
                title: "Transparent pricing",
                desc: "Starting prices published upfront. Final pricing agreed before deposit. No hidden charges on the day.",
              },
              {
                icon: ShieldIcon,
                title: "Flexible itineraries",
                desc: "Every tour can be customized. Want to skip a stop and add extra time somewhere else? Just ask. It's your day.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-11 h-11 bg-forest-50 rounded-xl flex items-center justify-center mb-4 text-forest-700">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-forest-600 text-xs font-semibold tracking-widest uppercase mb-2">
              Our fleet
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
              Vehicles & Capacity
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                name: "Toyota Avanza",
                capacity: "1–4 passengers",
                features: [
                  "Air-conditioning",
                  "Comfortable seating",
                  "Luggage space",
                ],
                best: "Couples & small groups",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/2022_Toyota_Avanza_%28PH%29.jpg/500px-2022_Toyota_Avanza_%28PH%29.jpg",
              },
              {
                name: "Toyota Innova",
                capacity: "1–6 passengers",
                features: ["Extra legroom", "Air-conditioning", "Large boot"],
                best: "Families & groups",
                image:
                  "https://images.unsplash.com/photo-1748215210939-ad8b6c8c086d?w=500&h=350&fit=crop&auto=format",
              },
              {
                name: "Hiace / Minibus",
                capacity: "7–12 passengers",
                features: [
                  "Group seating",
                  "Air-conditioning",
                  "Large luggage area",
                ],
                best: "Large groups",
                image:
                  "https://images.unsplash.com/photo-1650807486050-a142ea418b19?w=500&h=350&fit=crop&auto=format",
              },
            ].map((vehicle, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden text-center"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {vehicle.name}
                  </h3>
                  <p className="text-forest-600 text-sm font-medium mb-3">
                    {vehicle.capacity}
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1 mb-3">
                    {vehicle.features.map((f, fi) => (
                      <li key={fi}>{f}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 italic">
                    Best for: {vehicle.best}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 px-4 sm:px-6 bg-forest-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-2">
              Coverage
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Service Areas
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 bg-forest-700 text-white/80 text-sm px-4 py-2 rounded-full border border-forest-600"
              >
                <MapPinIcon className="w-3.5 h-3.5 text-gold-400" />
                {area}
              </span>
            ))}
          </div>
          <p className="text-center text-white/40 text-xs mt-6">
            Not listed? Ask us — we'll do our best to accommodate.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-forest-600 text-xs font-semibold tracking-widest uppercase mb-2">
              Guest reviews
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
              What guests say
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-3 text-gold-500">
                  {Array.from({ length: review.rating }).map((_, si) => (
                    <StarIcon key={si} className="w-3.5 h-3.5" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="font-semibold text-gray-700">
                    {review.name} · {review.country}
                  </span>
                  <span>{review.tour}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
