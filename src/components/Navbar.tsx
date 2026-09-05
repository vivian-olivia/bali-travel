import { useState, useEffect } from "react"
import Logo from "./Logo"

type NavPage = "home" | "transport" | "tours" | "about" | "contact"

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
}

const links: { label: string; page: NavPage }[] = [
  { label: "Home", page: "home" },
  { label: "Transport", page: "transport" },
  { label: "Destination", page: "tours" },
  { label: "About Us", page: "about" },
  { label: "Contact", page: "contact" },
]

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [currentPage])

  const isHome = currentPage === "home"
  const transparent = isHome && !scrolled && !menuOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/75 backdrop-blur-lg shadow-sm shadow-forest-900/5 border-b border-white/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="group flex items-center"
        >
          <Logo
            markClassName={transparent ? "text-white" : "text-forest-900"}
            wordmarkClassName={transparent ? "text-white" : "text-forest-900"}
            taglineClassName={transparent ? "text-gold-400" : "text-gold-600"}
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`relative py-1 text-sm font-medium transition-colors ${
                currentPage === page
                  ? transparent
                    ? "text-white"
                    : "text-forest-900"
                  : transparent
                    ? "text-white/75 hover:text-white"
                    : "text-gray-500 hover:text-forest-900"
              }`}
            >
              {label}
              {currentPage === page && (
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full ${
                    transparent ? "bg-gold-400" : "bg-gold-500"
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden w-11 h-11 -mr-2.5 flex items-center justify-center rounded-lg transition-colors ${
            transparent
              ? "text-white hover:bg-white/10"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-5 pt-3">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`w-full text-left px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                currentPage === page
                  ? "text-forest-900 bg-forest-50"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
