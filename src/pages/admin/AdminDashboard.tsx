import { useState, useRef, ComponentType } from "react"
import {
  tours,
  transportServices,
  inquiries as initialInquiries,
  formatIDR,
  categoryLabels,
  transportTypeLabels,
  destinationRegions,
  MAP_ASPECT_RATIO,
  Inquiry,
  InquiryStatus,
  DestinationRegion,
  TourCategory,
} from "../../data"
import {
  loadCustomRegions,
  saveCustomRegions,
  loadPositionOverrides,
  savePositionOverrides,
  applyPositionOverrides,
  loadHiddenRegionIds,
  saveHiddenRegionIds,
  PositionOverrides,
} from "../../data/customRegions"
import baliMap from "../../assets/bali-map.png"
import Logo from "../../components/Logo"
import {
  ChartBarIcon,
  CarIcon,
  CompassIcon,
  MessageIcon,
  SettingsIcon,
  NoteIcon,
  MapPinIcon,
  XIcon,
} from "../../components/icons"

interface AdminDashboardProps {
  onLogout: () => void
}

type Tab =
  | "overview"
  | "transport"
  | "tours"
  | "destinations"
  | "inquiries"
  | "settings"

const statusColors: Record<InquiryStatus, string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-forest-100 text-forest-700",
  completed: "bg-gray-100 text-gray-600",
  cancelled: "bg-red-100 text-red-600",
}

const tabs: {
  label: string
  value: Tab
  icon: ComponentType<{ className?: string }>
}[] = [
  { label: "Overview", value: "overview", icon: ChartBarIcon },
  { label: "Transport", value: "transport", icon: CarIcon },
  { label: "Tours", value: "tours", icon: CompassIcon },
  { label: "Destinations", value: "destinations", icon: MapPinIcon },
  { label: "Inquiries", value: "inquiries", icon: MessageIcon },
  { label: "Settings", value: "settings", icon: SettingsIcon },
]

const categoryOptions: TourCategory[] = [
  "ubud",
  "south-bali",
  "central-bali",
  "north-bali",
]

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>("overview")
  const [inquiriesList, setInquiriesList] =
    useState<Inquiry[]>(initialInquiries)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [customRegions, setCustomRegions] = useState<DestinationRegion[]>(() =>
    loadCustomRegions(),
  )
  const [overrides, setOverrides] = useState<PositionOverrides>(() =>
    loadPositionOverrides(),
  )
  const [hiddenIds, setHiddenIds] = useState<string[]>(() =>
    loadHiddenRegionIds(),
  )
  const [pendingPin, setPendingPin] = useState<{ x: number; y: number } | null>(
    null,
  )
  const [pinForm, setPinForm] = useState({
    name: "",
    tagline: "",
    category: categoryOptions[0],
  })
  const [dragging, setDragging] = useState<{
    id: string
    isCustom: boolean
    x: number
    y: number
  } | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  const builtInRegions = applyPositionOverrides(destinationRegions, overrides)
  const visibleBuiltInRegions = builtInRegions.filter(
    (r) => !hiddenIds.includes(r.id),
  )

  const persistCustomRegions = (regions: DestinationRegion[]) => {
    setCustomRegions(regions)
    saveCustomRegions(regions)
  }

  const clientToPercent = (clientX: number, clientY: number) => {
    const rect = mapRef.current?.getBoundingClientRect()
    if (!rect) return null
    const x = Math.min(
      100,
      Math.max(0, ((clientX - rect.left) / rect.width) * 100),
    )
    const y = Math.min(
      100,
      Math.max(0, ((clientY - rect.top) / rect.height) * 100),
    )
    return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 }
  }

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const pos = clientToPercent(e.clientX, e.clientY)
    if (!pos) return
    setSelectedId(null)
    setPendingPin(pos)
    setPinForm({ name: "", tagline: "", category: categoryOptions[0] })
  }

  const addPin = () => {
    if (!pendingPin || !pinForm.name.trim()) return
    const region: DestinationRegion = {
      id: `custom-${Date.now()}`,
      name: pinForm.name.trim(),
      tagline: pinForm.tagline.trim(),
      x: pendingPin.x,
      y: pendingPin.y,
      category: pinForm.category,
    }
    persistCustomRegions([...customRegions, region])
    setPendingPin(null)
  }

  const removePin = (id: string) => {
    persistCustomRegions(customRegions.filter((r) => r.id !== id))
    setSelectedId((sel) => (sel === id ? null : sel))
  }

  const hideBuiltIn = (id: string) => {
    const next = [...hiddenIds, id]
    setHiddenIds(next)
    saveHiddenRegionIds(next)
    setSelectedId((sel) => (sel === id ? null : sel))
  }

  const restoreBuiltIn = (id: string) => {
    const next = hiddenIds.filter((hid) => hid !== id)
    setHiddenIds(next)
    saveHiddenRegionIds(next)
  }

  const startDrag =
    (region: DestinationRegion, isCustom: boolean) =>
    (e: React.PointerEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.currentTarget.setPointerCapture(e.pointerId)
      setSelectedId(region.id)
      setDragging({ id: region.id, isCustom, x: region.x, y: region.y })
    }

  const handlePinDrag = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragging) return
    const pos = clientToPercent(e.clientX, e.clientY)
    if (!pos) return
    setDragging((d) => (d ? { ...d, ...pos } : d))
  }

  const endDrag = () => {
    if (!dragging) return
    const { id, isCustom, x, y } = dragging
    if (isCustom) {
      persistCustomRegions(
        customRegions.map((r) => (r.id === id ? { ...r, x, y } : r)),
      )
    } else {
      const next = { ...overrides, [id]: { x, y } }
      setOverrides(next)
      savePositionOverrides(next)
    }
    setDragging(null)
  }

  const [settings, setSettings] = useState({
    businessName: "Bali Nusa Transport & Tours",
    whatsapp: "+62 878-1405-0607",
    email: "hello@balinusatours.com",
    instagram: "@balinusatours",
    note: "A booking deposit (DP) is required to secure all reservations. Final pricing confirmed via WhatsApp.",
  })

  const updateInquiryStatus = (id: string, status: InquiryStatus) => {
    setInquiriesList((list) =>
      list.map((inq) => (inq.id === id ? { ...inq, status } : inq)),
    )
  }

  const newCount = inquiriesList.filter((i) => i.status === "new").length

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-56 bg-forest-900 flex flex-col transition-transform duration-200 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-forest-700">
          <Logo
            size="sm"
            markClassName="text-white"
            wordmarkClassName="text-white"
            taglineClassName="text-white/40"
          />
          <p className="text-white/30 font-mono-tag text-[10px] uppercase mt-1.5 ml-11">
            Admin
          </p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value)
                setSidebarOpen(false)
              }}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2.5 transition-colors ${
                activeTab === tab.value
                  ? "bg-forest-700 text-white"
                  : "text-white/60 hover:text-white hover:bg-forest-800"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.value === "inquiries" && newCount > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {newCount}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="p-3">
          <button
            onClick={onLogout}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm text-white/40 hover:text-white hover:bg-forest-800 transition-colors"
          >
            ← Log out
          </button>
        </div>
      </aside>

      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 md:ml-56">
        {/* Top bar */}
        <div className="bg-white border-b border-gray-100 px-4 sm:px-6 h-14 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h1 className="font-semibold text-gray-900 text-sm">
              {tabs.find((t) => t.value === activeTab)?.label}
            </h1>
          </div>
          <div className="text-xs text-gray-400">
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>

        <div className="p-4 sm:p-6">
          {/* Overview */}
          {activeTab === "overview" && (
            <div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  {
                    label: "Active Tours",
                    value: tours.filter((t) => t.active).length,
                    color: "text-forest-700",
                    bg: "bg-forest-50",
                  },
                  {
                    label: "Transport Services",
                    value: transportServices.filter((s) => s.active).length,
                    color: "text-blue-700",
                    bg: "bg-blue-50",
                  },
                  {
                    label: "New Inquiries",
                    value: newCount,
                    color: "text-red-600",
                    bg: "bg-red-50",
                  },
                  {
                    label: "Total Inquiries",
                    value: inquiriesList.length,
                    color: "text-gray-700",
                    bg: "bg-gray-50",
                  },
                ].map((stat, i) => (
                  <div key={i} className={`${stat.bg} rounded-2xl p-5`}>
                    <p
                      className={`font-display text-3xl font-bold ${stat.color} mb-1`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-gray-500 text-xs font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-900 text-sm">
                    Recent Inquiries
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-50">
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                          Customer
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                          Service
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                          Date
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {inquiriesList.slice(0, 5).map((inq) => (
                        <tr key={inq.id} className="hover:bg-gray-50/50">
                          <td className="px-5 py-3 font-medium text-gray-900">
                            {inq.customerName}
                          </td>
                          <td className="px-5 py-3 text-gray-500">
                            {inq.service}
                          </td>
                          <td className="px-5 py-3 text-gray-500">
                            {inq.travelDate}
                          </td>
                          <td className="px-5 py-3">
                            <span
                              className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[inq.status]}`}
                            >
                              {inq.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Transport */}
          {activeTab === "transport" && (
            <div>
              <div className="flex justify-between items-center mb-5">
                <p className="text-gray-500 text-sm">
                  {transportServices.length} services total
                </p>
                <button className="px-4 py-2 bg-forest-800 text-white rounded-xl text-xs font-semibold hover:bg-forest-700 transition-colors">
                  + Add Service
                </button>
              </div>
              <div className="space-y-3">
                {transportServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4"
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-16 h-12 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-400 capitalize">
                          {transportTypeLabels[service.type]}
                        </span>
                        <span className="text-xs font-semibold text-forest-700">
                          {formatIDR(service.startingPrice)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          service.active
                            ? "bg-forest-100 text-forest-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {service.active ? "Active" : "Inactive"}
                      </span>
                      <button className="text-xs text-gray-400 hover:text-forest-700 transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tours */}
          {activeTab === "tours" && (
            <div>
              <div className="flex justify-between items-center mb-5">
                <p className="text-gray-500 text-sm">
                  {tours.length} packages total
                </p>
                <button className="px-4 py-2 bg-forest-800 text-white rounded-xl text-xs font-semibold hover:bg-forest-700 transition-colors">
                  + Add Tour
                </button>
              </div>
              <div className="space-y-3">
                {tours.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4"
                  >
                    <img
                      src={tour.images[0]}
                      alt={tour.name}
                      className="w-16 h-12 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {tour.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-400">
                          {categoryLabels[tour.category]}
                        </span>
                        <span className="text-xs text-gray-400">
                          {tour.duration}
                        </span>
                        <span className="text-xs font-semibold text-forest-700">
                          {formatIDR(tour.startingPrice)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          tour.active
                            ? "bg-forest-100 text-forest-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {tour.active ? "Active" : "Inactive"}
                      </span>
                      <button className="text-xs text-gray-400 hover:text-forest-700 transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Destinations */}
          {activeTab === "destinations" && (
            <div>
              <p className="text-gray-500 text-sm mb-5">
                Click empty map space to drop a new pin, or drag any existing
                pin to reposition it. Changes are saved in this browser and
                appear on the public site's destination map.
              </p>

              <div className="grid lg:grid-cols-[1fr_20rem] gap-5">
                <div className="bg-white rounded-2xl border border-gray-100 p-4">
                  <div
                    ref={mapRef}
                    onClick={handleMapClick}
                    className="relative w-full rounded-xl overflow-hidden cursor-crosshair select-none"
                    style={{ aspectRatio: MAP_ASPECT_RATIO }}
                  >
                    <img
                      src={baliMap}
                      alt="Illustrated map of Bali"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                      draggable={false}
                    />

                    {[
                      ...visibleBuiltInRegions.map((r) => ({
                        ...r,
                        isCustom: false,
                      })),
                      ...customRegions.map((r) => ({ ...r, isCustom: true })),
                    ].map((region) => {
                      const pos =
                        dragging?.id === region.id
                          ? dragging
                          : { x: region.x, y: region.y }
                      const isHighlighted =
                        selectedId === region.id || dragging?.id === region.id
                      return (
                        <button
                          key={region.id}
                          type="button"
                          onPointerDown={startDrag(region, region.isCustom)}
                          onPointerMove={handlePinDrag}
                          onPointerUp={endDrag}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            left: `${pos.x}%`,
                            top: `${pos.y}%`,
                            zIndex: isHighlighted ? 30 : 10,
                          }}
                          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 cursor-grab active:cursor-grabbing touch-none"
                          title={`${region.name} — drag to move`}
                          aria-label={`Drag to move ${region.name}`}
                        >
                          <span
                            className={`block rounded-full bg-gold-500 border-2 border-white shadow-md transition-all ${
                              isHighlighted
                                ? "w-5 h-5 ring-4 ring-forest-900/40 scale-110"
                                : "w-4 h-4"
                            }`}
                          />
                          {isHighlighted && (
                            <span className="font-mono-tag text-[9px] px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm bg-forest-900 text-gold-400 pointer-events-none">
                              {region.name}
                            </span>
                          )}
                        </button>
                      )
                    })}

                    {pendingPin && (
                      <span
                        style={{
                          left: `${pendingPin.x}%`,
                          top: `${pendingPin.y}%`,
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-md animate-pulse"
                      />
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {pendingPin && (
                    <div className="bg-white rounded-2xl border border-gray-100 p-5">
                      <h3 className="font-semibold text-gray-900 text-sm mb-3">
                        New pin
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                            Area name
                          </label>
                          <input
                            type="text"
                            autoFocus
                            value={pinForm.name}
                            onChange={(e) =>
                              setPinForm((f) => ({
                                ...f,
                                name: e.target.value,
                              }))
                            }
                            placeholder="e.g. Amed"
                            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                            Tagline
                          </label>
                          <input
                            type="text"
                            value={pinForm.tagline}
                            onChange={(e) =>
                              setPinForm((f) => ({
                                ...f,
                                tagline: e.target.value,
                              }))
                            }
                            placeholder="Short description shown in the popup"
                            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                            Destinations (category)
                          </label>
                          <select
                            value={pinForm.category}
                            onChange={(e) =>
                              setPinForm((f) => ({
                                ...f,
                                category: e.target.value as TourCategory,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition"
                          >
                            {categoryOptions.map((cat) => (
                              <option key={cat} value={cat}>
                                {categoryLabels[cat]}
                              </option>
                            ))}
                          </select>
                          <p className="text-xs text-gray-400 mt-1.5">
                            The pin's popup will show existing{" "}
                            {categoryLabels[pinForm.category]} tours.
                          </p>
                        </div>
                        <div className="flex gap-2 pt-1">
                          <button
                            onClick={addPin}
                            disabled={!pinForm.name.trim()}
                            className="flex-1 py-2.5 bg-forest-800 text-white rounded-xl text-sm font-semibold hover:bg-forest-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                          >
                            Save pin
                          </button>
                          <button
                            onClick={() => setPendingPin(null)}
                            className="px-4 py-2.5 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="px-5 py-4 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        Pins ({builtInRegions.length + customRegions.length})
                      </h3>
                    </div>
                    <div className="divide-y divide-gray-50">
                      {[
                        ...builtInRegions.map((r) => ({
                          ...r,
                          isCustom: false,
                          isHidden: hiddenIds.includes(r.id),
                        })),
                        ...customRegions.map((r) => ({
                          ...r,
                          isCustom: true,
                          isHidden: false,
                        })),
                      ].map((region) => (
                        <div
                          key={region.id}
                          className={`flex items-center gap-3 px-5 py-3 transition-colors ${
                            selectedId === region.id ? "bg-forest-50" : ""
                          } ${region.isHidden ? "opacity-50" : ""}`}
                        >
                          <button
                            onClick={() =>
                              !region.isHidden &&
                              setSelectedId((sel) =>
                                sel === region.id ? null : region.id,
                              )
                            }
                            disabled={region.isHidden}
                            className="flex-1 min-w-0 text-left disabled:cursor-default"
                          >
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {region.name}
                              {region.isHidden && (
                                <span className="text-gray-400 font-normal">
                                  {" "}
                                  (hidden)
                                </span>
                              )}
                            </p>
                            <p className="text-xs text-gray-400 truncate">
                              {categoryLabels[region.category]}
                            </p>
                          </button>
                          {region.isHidden ? (
                            <button
                              onClick={() => restoreBuiltIn(region.id)}
                              className="text-xs text-gray-400 hover:text-forest-700 transition-colors flex-shrink-0"
                            >
                              Restore
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                region.isCustom
                                  ? removePin(region.id)
                                  : hideBuiltIn(region.id)
                              }
                              aria-label={`Delete ${region.name}`}
                              className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0"
                            >
                              <XIcon className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Inquiries */}
          {activeTab === "inquiries" && (
            <div>
              <div className="flex gap-2 mb-5 flex-wrap">
                {([
                  "all",
                  "new",
                  "contacted",
                  "confirmed",
                  "completed",
                  "cancelled",
                ] as const).map((status) => (
                  <span
                    key={status}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium cursor-default ${
                      status === "all"
                        ? "bg-gray-900 text-white"
                        : (statusColors[(status as InquiryStatus)] ??
                          "bg-gray-100 text-gray-600")
                    }`}
                  >
                    {status === "all"
                      ? `All (${inquiriesList.length})`
                      : `${status} (${inquiriesList.filter((i) => i.status === status).length})`}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                {inquiriesList.map((inq) => (
                  <div
                    key={inq.id}
                    className="bg-white rounded-2xl border border-gray-100 p-5"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {inq.customerName}
                        </h3>
                        <p className="text-gray-500 text-xs mt-0.5">
                          {inq.phone}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-semibold ${statusColors[inq.status]}`}
                        >
                          {inq.status}
                        </span>
                        <select
                          value={inq.status}
                          onChange={(e) =>
                            updateInquiryStatus(
                              inq.id,
                              e.target.value as InquiryStatus,
                            )
                          }
                          className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-600 focus:outline-none focus:border-forest-500"
                        >
                          {[
                            "new",
                            "contacted",
                            "confirmed",
                            "completed",
                            "cancelled",
                          ].map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-500 mb-2">
                      <div>
                        <span className="text-gray-400">Service</span>
                        <p className="text-gray-800 font-medium">
                          {inq.service}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-400">Date</span>
                        <p className="text-gray-800 font-medium">
                          {inq.travelDate}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-400">People</span>
                        <p className="text-gray-800 font-medium">
                          {inq.people}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-400">Pickup</span>
                        <p className="text-gray-800 font-medium truncate">
                          {inq.pickup}
                        </p>
                      </div>
                    </div>
                    {inq.notes && (
                      <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 mb-3 flex items-start gap-1.5">
                        <NoteIcon className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" />
                        {inq.notes}
                      </p>
                    )}
                    <a
                      href={`https://wa.me/${inq.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi ${inq.customerName.split(" ")[0]}! This is Bali Nusa Transport & Tours regarding your inquiry for ${inq.service}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-whatsapp hover:text-whatsapp-dark transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Reply on WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings */}
          {activeTab === "settings" && (
            <div className="max-w-lg">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
                <h2 className="font-semibold text-gray-900 mb-2">
                  Business Settings
                </h2>
                {[
                  { label: "Business Name", key: "businessName" as const },
                  { label: "WhatsApp Number", key: "whatsapp" as const },
                  { label: "Email", key: "email" as const },
                  { label: "Instagram", key: "instagram" as const },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      value={settings[field.key]}
                      onChange={(e) =>
                        setSettings((s) => ({
                          ...s,
                          [field.key]: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Booking Note (shown to customers)
                  </label>
                  <textarea
                    value={settings.note}
                    onChange={(e) =>
                      setSettings((s) => ({ ...s, note: e.target.value }))
                    }
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition resize-none"
                  />
                </div>
                <button className="w-full py-2.5 bg-forest-800 text-white rounded-xl text-sm font-semibold hover:bg-forest-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
