import { useState } from "react";
import { Eye, EyeOff, UserPlus, CheckCircle2 } from "lucide-react";

export default function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  return (
    <main className="min-h-screen pt-24 bg-linear-to-b from-[#0b0d1e] via-[#111432] to-[#1a1941]/85 text-indigo-100 flex flex-col justify-between">
      
     
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(900px 500px at 15% -10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(900px 500px at 90% 110%, rgba(37,99,235,0.18), transparent 60%)",
        }}
      />

      
      <section className="relative w-full max-w-md mx-auto flex-1 flex items-center px-4">
        <div className="rounded-2xl border border-indigo-800/40 shadow-[0_20px_60px_rgba(79,70,229,0.25)]
                        bg-linear-to-b from-[#0b0d1e] via-[#111432] to-[#1a1941]/85
                        backdrop-blur-md p-6 sm:p-8 w-full">
          
         
          <div className="flex flex-col items-center gap-3 mb-6">
            <img
              src="/8393dee6-7cdb-45d7-a72f-a14e56cff39e.png"
              alt="Logo"
              className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_18px_rgba(99,102,241,0.5)]"
            />
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide">Create your account</h1>
            <p className="text-sm text-indigo-300/90">Join and start your watchlist</p>
          </div>

          
          <form className="space-y-4">
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-indigo-200">Username</label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-lg px-4 py-3 bg-[rgba(255,255,255,0.06)] text-indigo-100
                           placeholder-indigo-200/50 outline-none ring-1 ring-indigo-800/40
                           focus:ring-2 focus:ring-indigo-500/60"
                placeholder="otaku_king"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-indigo-200">Email</label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-lg px-4 py-3 bg-[rgba(255,255,255,0.06)] text-indigo-100
                           placeholder-indigo-200/50 outline-none ring-1 ring-indigo-800/40
                           focus:ring-2 focus:ring-indigo-500/60"
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
                  minLength={8}
                  className="w-full rounded-lg px-4 py-3 pr-12 bg-[rgba(255,255,255,0.06)] text-indigo-100
                             placeholder-indigo-200/50 outline-none ring-1 ring-indigo-800/40
                             focus:ring-2 focus:ring-indigo-500/60"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-2 flex items-center px-2 text-indigo-300 hover:text-indigo-100"
                  onClick={() => setShowPass(v => !v)}
                >
                  {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirm" className="text-sm text-indigo-200">Confirm password</label>
              <div className="relative">
                <input
                  id="confirm"
                  type={showPass2 ? "text" : "password"}
                  required
                  minLength={8}
                  className="w-full rounded-lg px-4 py-3 pr-12 bg-[rgba(255,255,255,0.06)] text-indigo-100
                             placeholder-indigo-200/50 outline-none ring-1 ring-indigo-800/40
                             focus:ring-2 focus:ring-indigo-500/60"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-2 flex items-center px-2 text-indigo-300 hover:text-indigo-100"
                  onClick={() => setShowPass2(v => !v)}
                >
                  {showPass2 ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

         
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-indigo-700 bg-indigo-900/40 text-indigo-400 focus:ring-indigo-500/60"
              />
              <span className="text-indigo-200">
                I agree to the <a href="#terms" className="text-indigo-300 hover:text-indigo-100">Terms & Privacy</a>
              </span>
            </label>

            
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold
                         bg-linear-to-r from-indigo-600 to-blue-600 text-white
                         shadow-[0_10px_30px_rgba(37,99,235,0.35)]
                         hover:brightness-110 active:scale-[0.99] transition"
            >
              <UserPlus className="w-5 h-5" />
              Create account
            </button>

          
            <p className="text-center text-sm text-indigo-300/90">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-200 hover:text-indigo-100 font-semibold inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Sign in
              </a>
            </p>
          </form>
        </div>
      </section>

     
      <div className="border-t border-indigo-800/30 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-indigo-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} AnimeSite. 3bslam, All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-indigo-100">Privacy</a>
            <a href="#terms" className="hover:text-indigo-100">Terms</a>
            <a href="#contact" className="hover:text-indigo-100">Contact</a>
          </div>
        </div>
      </div>

    </main>
  );
}
