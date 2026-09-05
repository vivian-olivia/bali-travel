import { BUSINESS_NAME, BUSINESS_EMAIL, WHATSAPP_NUMBER } from "../data"
import Logo from "./Logo"
import { MailIcon, MapPinIcon, ClockIcon } from "./icons"

function formatWhatsAppNumber(number: string): string {
  // "6281214050607" -> "+62 812-1405-0607"
  const country = number.slice(0, 2)
  const rest = number.slice(2)
  return `+${country} ${rest.slice(0, 3)}-${rest.slice(3, 7)}-${rest.slice(7)}`
}

interface FooterProps {
  onNavigate: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo
                markClassName="text-white"
                wordmarkClassName="text-white"
                taglineClassName="text-white/50"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Private transport and curated tours in Bali. Trusted drivers,
              reliable vehicles, unforgettable experiences.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Private Driver",
                "Airport Shuttle",
                "Intercity Transport",
                "Bali Tours",
                "Ubud Tours",
                "North Bali Tours",
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() =>
                      onNavigate(s.includes("Tour") ? "tours" : "transport")
                    }
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-whatsapp"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {formatWhatsAppNumber(WHATSAPP_NUMBER)}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/40" />
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/40" />
                <span>Based in Ubud, Bali, Indonesia</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/40" />
                <span>Available daily, 06.00–22.00 WITA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <button
              onClick={() => onNavigate("about")}
              className="hover:text-white/60 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="hover:text-white/60 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => onNavigate("admin-login")}
              className="hover:text-white/60 transition-colors"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
