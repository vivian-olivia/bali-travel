import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import Home from "./pages/Home"
import Transport from "./pages/Transport"
import Tours from "./pages/Tours"
import TourDetail from "./pages/TourDetail"
import About from "./pages/About"
import Contact from "./pages/Contact"
import AdminLogin from "./pages/admin/AdminLogin"
import AdminDashboard from "./pages/admin/AdminDashboard"
import { travelPackages } from "./data"

type PageView = { view: "home" } | { view: "transport" } | { view: "tours" } | {
  view: "tour-detail"
  id: string
} | { view: "about" } | { view: "contact" } | { view: "admin-login" } | {
  view: "admin-dashboard"
}

function pathToPage(pathname: string): PageView {
  const [first, second] = pathname.split("/").filter(Boolean)
  switch (first) {
    case "transport":
      return { view: "transport" }
    case "tours":
      return second ? { view: "tour-detail", id: second } : { view: "tours" }
    case "about":
      return { view: "about" }
    case "contact":
      return { view: "contact" }
    case "admin":
      return second === "dashboard"
        ? { view: "admin-dashboard" }
        : { view: "admin-login" }
    default:
      return { view: "home" }
  }
}

function pageToPath(page: PageView): string {
  switch (page.view) {
    case "transport":
      return "/transport"
    case "tours":
      return "/tours"
    case "tour-detail":
      return `/tours/${page.id}`
    case "about":
      return "/about"
    case "contact":
      return "/contact"
    case "admin-login":
      return "/admin"
    case "admin-dashboard":
      return "/admin/dashboard"
    default:
      return "/"
  }
}

const SITE_TITLE = "Bali Rahayu Travel"

function pageToTitle(page: PageView): string {
  switch (page.view) {
    case "transport":
      return `${SITE_TITLE} | Transport`
    case "tours":
      return `${SITE_TITLE} | Tours`
    case "tour-detail": {
      const pkg = travelPackages.find((p) => p.id === page.id)
      return pkg ? `${SITE_TITLE} | ${pkg.name}` : `${SITE_TITLE} | Tours`
    }
    case "about":
      return `${SITE_TITLE} | About`
    case "contact":
      return `${SITE_TITLE} | Contact`
    case "admin-login":
      return `${SITE_TITLE} | Admin Login`
    case "admin-dashboard":
      return `${SITE_TITLE} | Admin Dashboard`
    default:
      return SITE_TITLE
  }
}

function navigate(setter: (p: PageView) => void) {
  return (page: string, params?: Record<string, string>) => {
    window.scrollTo({ top: 0, behavior: "instant" })
    let next: PageView | undefined
    if (page === "tour-detail" && params?.id) {
      next = { view: "tour-detail", id: params.id }
    } else if (
      page === "home" ||
      page === "transport" ||
      page === "tours" ||
      page === "about" ||
      page === "contact" ||
      page === "admin-login" ||
      page === "admin-dashboard"
    ) {
      next = ({ view: page } as PageView)
    }
    if (next) {
      window.history.pushState(next, "", pageToPath(next))
      setter(next)
    }
  }
}

export default function App() {
  const [page, setPage] = useState<PageView>(() =>
    pathToPage(window.location.pathname),
  )
  const [adminLoggedIn, setAdminLoggedIn] = useState(false)

  const nav = navigate(setPage)

  useEffect(() => {
    const onPopState = () => {
      window.scrollTo({ top: 0, behavior: "instant" })
      setPage(pathToPage(window.location.pathname))
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  useEffect(() => {
    document.title = pageToTitle(page)
  }, [page])

  const isAdminPage =
    page.view === "admin-login" || page.view === "admin-dashboard"
  const showShell = !isAdminPage

  return (
    <div className="font-sans">
      {showShell && <Navbar currentPage={page.view} onNavigate={nav} />}

      {page.view === "home" && <Home onNavigate={nav} />}
      {page.view === "transport" && <Transport />}
      {page.view === "tours" && <Tours onNavigate={nav} />}
      {page.view === "tour-detail" && (
        <TourDetail tourId={page.id} onNavigate={nav} />
      )}
      {page.view === "about" && <About />}
      {page.view === "contact" && <Contact />}
      {page.view === "admin-login" && (
        <AdminLogin
          onLogin={() => {
            setAdminLoggedIn(true)
            setPage({ view: "admin-dashboard" })
          }}
          onBack={() => setPage({ view: "home" })}
        />
      )}
      {page.view === "admin-dashboard" && adminLoggedIn && (
        <AdminDashboard
          onLogout={() => {
            setAdminLoggedIn(false)
            setPage({ view: "home" })
          }}
        />
      )}
      {page.view === "admin-dashboard" && !adminLoggedIn && (
        <AdminLogin
          onLogin={() => {
            setAdminLoggedIn(true)
            setPage({ view: "admin-dashboard" })
          }}
          onBack={() => setPage({ view: "home" })}
        />
      )}

      {showShell && (
        <>
          <Footer onNavigate={nav} />
          <WhatsAppButton />
        </>
      )}
    </div>
  )
}
