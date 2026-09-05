import { useState } from "react"
import Logo from "../../components/Logo"

interface AdminLoginProps {
  onLogin: () => void
  onBack: () => void
}

export default function AdminLogin({ onLogin, onBack }: AdminLoginProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === "admin@balinusa.com" && password === "admin123") {
      onLogin()
    } else {
      setError("Invalid credentials. Try admin@balinusa.com / admin123")
    }
  }

  return (
    <div className="min-h-screen bg-forest-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-5">
            <Logo withWordmark={false} size="md" />
          </div>
          <h1 className="font-display text-2xl font-semibold text-white mb-1">
            Admin Login
          </h1>
          <p className="text-white/40 text-sm">Bali Nusa Transport & Tours</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-7 shadow-2xl space-y-4"
        >
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@balinusa.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-xs rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-forest-800 hover:bg-forest-700 text-white rounded-xl font-semibold text-sm transition-colors"
          >
            Sign in
          </button>
        </form>

        <button
          onClick={onBack}
          className="mt-4 w-full text-center text-white/40 hover:text-white/70 text-sm transition-colors"
        >
          ← Back to website
        </button>
      </div>
    </div>
  )
}
