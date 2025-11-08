import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
export default function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    <main
      id="login"
      className="min-h-screen pt-24 flex flex-col justify-between px-4 text-indigo-100
                 bg-linear-to-b from-[#0b0d1e] via-[#111432] to-[#1a1941]/85"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-25"
        style={{
          background:
            "radial-gradient(800px 500px at 15% 15%, rgba(69,73,206,0.2), transparent 65%), radial-gradient(800px 550px at 90% 90%, rgba(124,58,237,0.18), transparent 65%)",
        }}
      />

      <section className="relative w-full max-w-md mx-auto my-8">
        <div
          className="rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                     ring-1 ring-indigo-900/60
                     bg-linear-to-br from-[#0b0d1e]/90 via-[#111432]/85 to-[#1a1941]/85"
        >
          <div className="flex flex-col items-center gap-3 mb-6">
            <a href="#home" className="inline-block" title="Back to Home">
              <img
                src="/8393dee6-7cdb-45d7-a72f-a14e56cff39e.png"
                alt="Logo"
                className="w-16 h-16 md:w-20 md:h-20 opacity-90"
              />
            </a>
            <h1 className="text-2xl font-extrabold tracking-wide">Welcome back</h1>
            <p className="text-sm text-indigo-300/80">Sign in to continue</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-indigo-200">Email</label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-lg px-4 py-3
                           bg-[#1a1c3a]/50 text-indigo-100 placeholder-indigo-400/40
                           outline-none ring-1 ring-indigo-900/50 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-indigo-200">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPass ? "text" : "password"}
                  required
                  className="w-full rounded-lg px-4 py-3 pr-12
                             bg-[#1a1c3a]/50 text-indigo-100 placeholder-indigo-400/40
                             outline-none ring-1 ring-indigo-900/50 focus:ring-indigo-500"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute inset-y-0 right-2 flex items-center text-indigo-300 hover:text-indigo-100"
                >
                  {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-indigo-700 bg-indigo-900/50 text-indigo-400"
                />
                <span className="text-indigo-200">Remember me</span>
              </label>
              <a href="#" className="text-indigo-300 hover:text-indigo-200">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold
                         bg-linear-to-r from-[#3b3fda] to-[#5a62ff]
                         hover:brightness-110 active:scale-[0.98] transition"
            >
              <LogIn className="w-5 h-5" />
              Sign in
            </button>

            <p className="text-center text-sm text-indigo-300/90 pt-1">
              New here?{" "}
              <Link to="/signup" className="text-indigo-200 hover:text-indigo-100 font-semibold">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-indigo-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-indigo-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} AnimeSite. 3bslam, All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-indigo-100">Privacy</a>
            <a href="#terms" className="hover:text-indigo-100">Terms</a>
            <a href="#contact" className="hover:text-indigo-100">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
