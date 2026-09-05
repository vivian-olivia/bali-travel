interface IconProps {
  className?: string
}

const base = "none"

export function MapPinIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
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
  )
}

export function ClockIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5v5l3.5 2" />
    </svg>
  )
}

export function SearchIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 20l-4.35-4.35"
      />
    </svg>
  )
}

export function MessageIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337 5.97 5.97 0 01-3.035-.943 5.97 5.97 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C4.93 16.178 4 14.189 4 12c0-4.556 4.03-8.25 9-8.25S21 7.444 21 12z"
      />
    </svg>
  )
}

export function CheckCircleIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 12.5l2.3 2.3 4.7-5"
      />
    </svg>
  )
}

export function CompassIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 9.5l-1.4 4.6-4.6 1.4 1.4-4.6z"
      />
    </svg>
  )
}

export function MailIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  )
}

export function CoinsIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 15.2c.5.5 1.4.9 2.5.9 1.8 0 3-1 3-2.1 0-1.2-1.2-1.7-3-2.1-1.8-.4-3-1-3-2.1 0-1.1 1.2-2.1 3-2.1 1.1 0 2 .3 2.5.9M12 7.3V6m0 12v-1.3"
      />
    </svg>
  )
}

export function CarIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.9 17.9 0 00-3.213-9.193 2.06 2.06 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.55 48.55 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    </svg>
  )
}

export function PlaneIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 20.5l1.5-5.5m0 0l7.5-6.75c1-.9.5-2.25-.85-2.25-.4 0-.79.14-1.1.4L9 12.5l-4.6-1.3a.7.7 0 00-.6 1.2l3.2 2.6 3.5 5.5z"
      />
    </svg>
  )
}

export function ShieldIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75l2.25 2.25L15 9.75m-3-7.04a11.96 11.96 0 01-8.4 3.54A12 12 0 003 9.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15c-3.2 0-6.1-1.25-8.25-3.29z"
      />
    </svg>
  )
}

export function UsersIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <circle cx="9" cy="8" r="3" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 19a5.5 5.5 0 0111 0M16 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM14.5 12.5A5 5 0 0121 17"
      />
    </svg>
  )
}

export function StarIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.48 3.5a.56.56 0 011.04 0l2.12 5.11a.56.56 0 00.48.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 00-.19.56l1.29 5.39a.56.56 0 01-.84.6l-4.73-2.88a.56.56 0 00-.58 0l-4.73 2.88a.56.56 0 01-.84-.6l1.29-5.39a.56.56 0 00-.19-.56l-4.2-3.6a.56.56 0 01.32-.99l5.52-.44a.56.56 0 00.48-.35z" />
    </svg>
  )
}

export function ChartBarIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 21V10.5M12 21V6M20 21v-7.5M4 21h16"
      />
    </svg>
  )
}

export function SettingsIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 10-3 0m3 0a1.5 1.5 0 01-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 00-3 0m3 0a1.5 1.5 0 01-3 0m-9.75 0h9.75"
      />
    </svg>
  )
}

export function NoteIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6M9 15.5h6M9 8.5h3"
      />
      <rect x="4.5" y="4" width="15" height="16" rx="2" />
    </svg>
  )
}

export function InfoIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16v-4.5M12 8.25h.008v.008H12V8.25z"
      />
    </svg>
  )
}

export function ChevronDownIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={2}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export function ArrowRightIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={2}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  )
}

export function WavesIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <circle cx="12" cy="7" r="3" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 14.5c1.5 1.6 3 1.6 4.5 0s3-1.6 4.5 0 3 1.6 4.5 0 3-1.6 4.5 0M2.5 19.5c1.5 1.6 3 1.6 4.5 0s3-1.6 4.5 0 3 1.6 4.5 0 3-1.6 4.5 0"
      />
    </svg>
  )
}

export function LeafIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 4S9.5 3 5.5 8.5C2 13.3 4 19 4 19s5.7 2 10.5-1.5C20 14 20 4 20 4z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 19c3-4.5 6.5-8 12-11"
      />
    </svg>
  )
}

export function HandClickIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 12.5V6a1.5 1.5 0 013 0v5m0-4a1.5 1.5 0 013 0v4m0-2.5a1.5 1.5 0 013 0V14c0 3.5-2 6.5-6 6.5s-5.5-2-6.8-4.6l-1.3-2.6a1.4 1.4 0 012.4-1.4l1.2 1.6"
      />
    </svg>
  )
}

export function XIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={2}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export function MountainIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 19.5l6.5-11 4 6.5 2-3 6.5 7.5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 11.5l1.8-2.8 1.2 1.8"
      />
    </svg>
  )
}

export function DropletIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z"
      />
    </svg>
  )
}

export function StoreIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 9.5L5 4h14l1 5.5M4 9.5a2.25 2.25 0 004.5 0 2.25 2.25 0 004.5 0 2.25 2.25 0 004.5 0 2.25 2.25 0 004.5 0M4 9.5V19a1 1 0 001 1h14a1 1 0 001-1V9.5M9.5 20v-5.5h5V20"
      />
    </svg>
  )
}

export function EyeIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"
      />
      <circle cx="12" cy="12" r="2.75" />
    </svg>
  )
}

export function LandmarkIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg aria-hidden="true"
      viewBox="0 0 24 24"
      fill={base}
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5L21 8H3z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 8v10.5M9 8v10.5M15 8v10.5M19.5 8v10.5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21.5h18" />
    </svg>
  )
}
