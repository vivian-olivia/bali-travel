import { BUSINESS_EMAIL, WHATSAPP_NUMBER } from "../data"

function formatWhatsAppNumber(number: string): string {
  // "6281214050607" -> "+62 812-1405-0607"
  const country = number.slice(0, 2)
  const rest = number.slice(2)
  return `+${country} ${rest.slice(0, 3)}-${rest.slice(3, 7)}-${rest.slice(7)}`
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <div className="relative bg-forest-800 pt-32 pb-24 sm:pt-40 sm:pb-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=1200&h=400&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Get in touch
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-white/60 max-w-lg text-sm">
            The fastest way to reach us is WhatsApp. We typically reply within a
            few minutes during operating hours.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact options */}
          <div className="space-y-4">
            {/* WhatsApp — primary */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-whatsapp/10 hover:bg-whatsapp/20 border border-whatsapp/30 rounded-2xl p-6 transition-colors group"
            >
              <div className="w-14 h-14 bg-whatsapp rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-whatsapp/30">
                <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5 font-medium uppercase tracking-wide">
                  WhatsApp (recommended)
                </p>
                <p className="font-semibold text-gray-900 text-lg">
                  {formatWhatsAppNumber(WHATSAPP_NUMBER)}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Available daily 06:00–22:00 WITA · Fast replies
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 text-gray-400 ml-auto group-hover:text-whatsapp transition-colors flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="flex items-center gap-5 bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-6 transition-colors group"
            >
              <div className="w-14 h-14 bg-forest-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-6 h-6 text-forest-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5 font-medium uppercase tracking-wide">
                  Email
                </p>
                <p className="font-semibold text-gray-900">{BUSINESS_EMAIL}</p>
                <p className="text-gray-400 text-xs mt-1">
                  We respond within 24 hours
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-5 bg-white border border-gray-200 rounded-2xl p-6">
              <div className="w-14 h-14 bg-gold-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-6 h-6 text-gold-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5 font-medium uppercase tracking-wide">
                  Based in
                </p>
                <p className="font-semibold text-gray-900">Ubud, Bali</p>
                <p className="text-gray-400 text-xs mt-1">
                  Serving the whole island & East Java
                </p>
              </div>
            </div>
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            <div className="bg-forest-800 rounded-2xl p-7 text-white">
              <h3 className="font-display text-xl font-semibold mb-4">
                How booking works
              </h3>
              <ol className="space-y-4">
                {[
                  {
                    n: "1",
                    text: "Message us on WhatsApp with the service, date, and number of people",
                  },
                  {
                    n: "2",
                    text: "We confirm availability and send you the final price",
                  },
                  {
                    n: "3",
                    text: "Pay the booking deposit (DP) to secure your reservation",
                  },
                  {
                    n: "4",
                    text: "Your driver will contact you the day before to reconfirm",
                  },
                ].map((step) => (
                  <li key={step.n} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gold-500 text-forest-900 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {step.n}
                    </span>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Operating hours
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>WhatsApp replies</span>
                  <span className="font-medium text-gray-900">
                    06:00–22:00 WITA
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Pickup availability</span>
                  <span className="font-medium text-gray-900">
                    24 hours (pre-arranged)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Currency</span>
                  <span className="font-medium text-gray-900">
                    IDR (Indonesian Rupiah)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Languages</span>
                  <span className="font-medium text-gray-900">
                    English, Indonesian
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
