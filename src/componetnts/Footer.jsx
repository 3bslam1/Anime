import {  Twitter, Youtube, Mail, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t border-indigo-800/30
                 bg-linear-to-b from-[#0b0d1e] via-[#111432] to-[#1a1941]/85 text-indigo-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/8393dee6-7cdb-45d7-a72f-a14e56cff39e.png"
              alt="AnimeSite"
              className="w-10 h-10 drop-shadow-[0_0_12px_rgba(99,102,241,0.45)]"
            />
            <span className="text-xl font-bold">
              <span className="text-indigo-300">Anime</span>
              <span className="text-blue-300">Site</span>
            </span>
          </div>
          <p className="text-sm text-indigo-300/80 leading-relaxed">
            A clean, dark, and fast experience tailored for fans.
          </p>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook"
               className="p-2 rounded-lg ring-1 ring-indigo-800/40 bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.1)]">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter"
               className="p-2 rounded-lg ring-1 ring-indigo-800/40 bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.1)]">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="YouTube"
               className="p-2 rounded-lg ring-1 ring-indigo-800/40 bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.1)]">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Mail"
               className="p-2 rounded-lg ring-1 ring-indigo-800/40 bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.1)]">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold text-indigo-100 mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="#home" className="hover:text-indigo-100">Home</Link></li>
            <li><Link to="#features" className="hover:text-indigo-100">Features</Link></li>
            <li><Link to="Manga" className="hover:text-indigo-100">Manga</Link></li>
            <li><Link to="Watch" className="hover:text-indigo-100">Watch</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-indigo-100 mb-3">Account</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="login" className="hover:text-indigo-100">Login</Link></li>
            <li><Link to="signup" className="hover:text-indigo-100">Sign Up</Link></li>
            <li><Link to="#reset" className="hover:text-indigo-100">Reset Password</Link></li>
            <li><Link to="#settings" className="hover:text-indigo-100">Settings</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold text-indigo-100 mb-3">Stay in the loop</h4>
          <p className="text-sm text-indigo-300/80 mb-4">
            Get product news and tips (no spam).
          </p>
          <form className="space-y-3">
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-2 rounded-lg
                           bg-[rgba(255,255,255,0.06)] placeholder-indigo-300/50
                           text-indigo-100 ring-1 ring-indigo-800/40
                           focus:ring-2 focus:ring-indigo-500/60 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg font-semibold
                         bg-linear-to-r from-indigo-600 to-blue-600 text-white
                         shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:brightness-110"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-indigo-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-indigo-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} AnimeSite. 3bslam, All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-indigo-100">Privacy</a>
            <a href="#terms" className="hover:text-indigo-100">Terms</a>
            <a href="#contact" className="hover:text-indigo-100">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
