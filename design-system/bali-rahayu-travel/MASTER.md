# Bali Rahayu Travel — Design System (Master)

Source of truth for the site's existing visual identity, extracted from the
current codebase (not the generic ui-ux-pro-max database output — that
recommends a generic "Aurora UI" sky-blue/orange style with Thai typography,
which does not fit this product and should not be applied). This document
records what's actually implemented so future work stays consistent with it.

## Identity

"Volcanic stone & sunset" — deep tropical teal (not generic eco-resort green)
paired with clay/terracotta (not generic luxury gold), evoking Balinese
temple stone, night ocean, and sunset light. WhatsApp-first booking flow
(no cart/checkout), presented with a recurring **ticket-stub** motif.

## Colors (`src/index.css` `@theme`)

| Token | Hex | Use |
|---|---|---|
| `--color-forest-950` | `#0a211d` | Deepest backgrounds |
| `--color-forest-900` | `#0e2b26` | Nav/footer/section backgrounds |
| `--color-forest-800` | `#163832` | Page hero backgrounds, dark cards |
| `--color-forest-700` | `#1f4b43` | Secondary dark surfaces |
| `--color-forest-600` | `#2c6459` | Mid accents |
| `--color-forest-500` | `#3f8478` | Icon accents on light bg |
| `--color-forest-400` | `#62a99b` | Modal label accents on dark bg |
| `--color-forest-100` | `#e3f1ec` | Light tinted surfaces |
| `--color-forest-50` | `#f3faf7` | Faint tinted surfaces |
| `--color-gold-600` | `#a44d22` | Text accent on light bg |
| `--color-gold-500` | `#c15f2c` | Primary accent (CTAs, active states) |
| `--color-gold-400` | `#dc8a54` | Accent on dark bg |
| `--color-gold-100` | `#f7e4d3` | Tinted accent surfaces |
| `--color-whatsapp` / `-dark` | `#25d366` / `#128c4a` | Booking CTA (brand-locked, don't restyle) |
| `--color-sand` | `#faf6ee` | Page background |
| `--color-stone-50` | `#f2ede0` | Alternate section background |

Neutrals (body text, borders) use plain Tailwind `gray-*`, not custom tokens.

## Typography

- **Display** `--font-display`: Fraunces (variable, incl. italic) — page/section headings, price figures. Self-hosted via `/fonts/*.woff2` (Google Fonts CDN is blocked in some sandboxed preview environments — do not switch to a `@import url(fonts.googleapis.com...)`, it silently falls back and breaks optical alignment).
- **Sans** `--font-sans`: Plus Jakarta Sans (variable) — body/UI text, default.
- **Mono** `--font-mono` (`.font-mono-tag`): IBM Plex Mono, uppercase + `0.08em` tracking — eyebrow/kicker labels only (e.g. "Curated destinations").

## Motifs & Components

- **Ticket-stub divider** (`.ticket-divider` in `index.css`): dashed border with two punched circle notches — the site's signature "claim a ticket" visual metaphor for WhatsApp booking. `--notch-bg` custom property must be set to match whatever sits behind the card at each call site.
- **Reveal system** (`src/components/Reveal.tsx`): IntersectionObserver-driven scroll reveal, variants `up` / `fade` / `scale`, respects `prefers-reduced-motion` (falls back to instant-visible).
- **Radii**: `--radius-card: 14px`, `--radius-btn: 8px` tokens exist but most components use Tailwind's `rounded-xl`/`rounded-2xl` directly — prefer matching existing sibling components over introducing the token inconsistently.
- Booking is always via WhatsApp deep link (`buildWhatsAppUrl` / `buildBookingMessage` in `src/data/index.ts`) — never build a native form-submit checkout.

## Layout & Responsive

- Container: `max-w-7xl` (home) or `max-w-6xl` (inner pages), `px-4 sm:px-6` or `px-6 sm:px-10 lg:px-16`.
- Breakpoints used: `sm` (640px), `md` (768px), `lg` (1024px) — standard Tailwind, no custom breakpoints.
- Sticky sub-nav pattern: `sticky top-20` category tabs on Tours/Transport, offset below the fixed 80px (`h-20`) navbar.

## Accessibility conventions (apply going forward)

- Icons from `src/components/icons.tsx` now carry `aria-hidden="true"` by default (fixed 2026-09-05) — they are always decorative, paired with visible text or a labeled parent button. Any *new* icon-only button still needs its own `aria-label`.
- Icon-only interactive controls need a minimum ~44×44px hit area (use padding, not just icon size) and an `aria-label`. Fixed so far: navbar hamburger, TourDetail back button, TourDetail gallery dots, BookingModal close button.
- Modals need `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and an Escape-to-close handler (pattern established in `BookingModal.tsx`).
- Form `<label>`s must use `htmlFor` paired with the input's `id` (pattern established in `BookingModal.tsx`).
- `WHATSAPP_NUMBER` in `src/data/index.ts` is the single source of truth for the phone number — always render it through a formatter (see `formatWhatsAppNumber` in `Footer.tsx` / `Contact.tsx`) rather than hardcoding a display string, to avoid the two files silently drifting apart (found and fixed 2026-09-05: Contact.tsx was showing a different number than the real WhatsApp link).

## Known follow-ups (not yet fixed — lower priority)

- `DestinationExplorer.tsx` close button (`w-7 h-7`, 28px) and the driver-choice toggle pills in `Transport.tsx` are below the 44px platform touch-target guidance (though above the 24px WCAG minimum).
- No focus trap inside `BookingModal` (Escape-to-close is handled; tabbing can still leave the dialog).
- Many hand-rolled inline WhatsApp-brand SVGs (outside `icons.tsx`) don't carry `aria-hidden="true"` individually — low priority since they always sit beside visible button text.
