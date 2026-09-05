interface LogoProps {
  size?: "sm" | "md"
  withWordmark?: boolean
  wordmarkClassName?: string
  taglineClassName?: string
  markClassName?: string
}

export default function Logo({
  size = "md",
  withWordmark = true,
  wordmarkClassName = "text-forest-900",
  taglineClassName = "text-gold-600",
  markClassName = "text-forest-900",
}: LogoProps) {
  const iconSize = size === "sm" ? "w-9 h-9" : "w-11 h-11"

  return (
    <span className="flex items-center gap-3">
      {/* Meru tower — the tiered Balinese temple roof, not a generic map pin */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`${iconSize} ${markClassName} flex-shrink-0`}
      >
        <path
          d="M12 2.2L14.4 6H9.6L12 2.2z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M8.6 6.6h6.8l1.6 3.4H7l1.6-3.4z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M6.6 10.6h10.8l1.9 3.9H4.7l1.9-3.9z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M6.2 14.9h11.6v3.1H6.2z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M4 21.8h16"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M6.6 18v3.8M17.4 18v3.8"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      {withWordmark && (
        <span className="leading-tight text-left">
          <span
            className={`block text-left font-display font-bold text-base sm:text-lg uppercase tracking-wide ${wordmarkClassName}`}
          >
            Bali Rahayu
          </span>
          <span
            className={`block text-left font-mono-tag text-[9px] sm:text-[10px] uppercase tracking-widest whitespace-nowrap ${taglineClassName}`}
          >
            Private Transport &amp; Tours
          </span>
        </span>
      )}
    </span>
  )
}
