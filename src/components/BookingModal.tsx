import { useEffect, useState } from "react"
import { buildBookingMessage, buildWhatsAppUrl } from "../data"
import { InfoIcon } from "./icons"

interface BookingModalProps {
  serviceName: string
  onClose: () => void
}

export default function BookingModal({
  serviceName,
  onClose,
}: BookingModalProps) {
  const [date, setDate] = useState("")
  const [people, setPeople] = useState(2)
  const [pickup, setPickup] = useState("")
  const [notes, setNotes] = useState("")

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  const handleBook = () => {
    const message = buildBookingMessage({
      service: serviceName,
      date: date || undefined,
      people,
      pickup: pickup || undefined,
      notes: notes || undefined,
    })
    window.open(buildWhatsAppUrl(message), "_blank")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="relative bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-forest-800 px-6 py-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-forest-400 text-xs font-semibold tracking-widest uppercase mb-1">
                Book via WhatsApp
              </p>
              <h3
                id="booking-modal-title"
                className="text-white font-display font-semibold text-lg leading-snug"
              >
                {serviceName}
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-white/60 hover:text-white transition-colors -m-3 p-3"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 py-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="booking-date"
                className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block"
              >
                Travel Date
              </label>
              <input
                id="booking-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="booking-people"
                className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block"
              >
                Passengers
              </label>
              <select
                id="booking-people"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "person" : "people"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="booking-pickup"
              className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block"
            >
              Pickup Location (hotel / area)
            </label>
            <input
              id="booking-pickup"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="e.g. Alaya Resort Ubud"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="booking-notes"
              className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block"
            >
              Additional Notes (optional)
            </label>
            <textarea
              id="booking-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Dietary needs, special requests, flight number for airport pickup..."
              rows={2}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition resize-none"
            />
          </div>

          <div className="bg-gold-100 rounded-lg px-4 py-3 text-xs text-gray-700 leading-relaxed flex items-start gap-2">
            <InfoIcon className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
            <span>
              This opens WhatsApp with your booking details pre-filled. Our team
              will confirm availability, final pricing, and collect a booking
              deposit (DP) to secure your reservation.
            </span>
          </div>

          <button
            onClick={handleBook}
            className="w-full py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Open WhatsApp to Book
          </button>
        </div>
      </div>
    </div>
  )
}
