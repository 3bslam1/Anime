import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 
                 bg-linear-to-b from-[#0b0d1e] via-[#111432] to-[#1a1941]/85 
                 backdrop-blur-lg border-b border-indigo-800/40 
                 transition-all duration-500 shadow-[0_0_25px_rgba(79,70,229,0.3)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          
         
          <Link
            to="/"  
            className="flex items-center space-x-2 cursor-pointer select-none"
          >
            <img
              src="/8393dee6-7cdb-45d7-a72f-a14e56cff39e.png"
              alt="AnimeSite logo"
              className="w-14 h-14 md:w-16 md:h-16 drop-shadow-[0_0_10px_rgba(79,70,229,0.5)]"
            />
            <span className="text-xl md:text-2xl font-bold text-indigo-100 tracking-wide">
              <span className="text-indigo-400">Anime</span>
              <span className="text-blue-400">Site</span>
            </span>
          </Link>

          
          <div className="hidden md:flex items-center space-x-8">
            
            <Link
              to="/Manga"
              className="text-indigo-100 hover:text-blue-300 transition-colors duration-300 text-sm lg:text-base"
            >
              Manga
            </Link>
            <Link
              to="/Watch"
              className="text-indigo-100 hover:text-blue-300 transition-colors duration-300 text-sm lg:text-base"
            >
              Watch
            </Link>
            <Link
              to="/Pricing"
              className="text-indigo-100 hover:text-blue-300 transition-colors duration-300 text-sm lg:text-base"
            >
              Subscriptions
            </Link>
            <Link
  to="/login"
  className="inline-flex items-center justify-center px-5 py-3 rounded-lg shadow-lg text-sm font-semibold
             bg-linear-to-r from-indigo-500 to-blue-600 text-white transform-gpu hover:scale-[1.02] transition"
>
  Login
</Link>


          </div>

         
          <button
            type="button"
            aria-label={mobileMenuIsOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuIsOpen}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-800/40 transition"
            onClick={() => setMobileIsOpen((prev) => !prev)}
          >
            <Menu className="w-6 h-6 text-indigo-200" aria-hidden="true" />
          </button>
        </div>
      </div>

      
      {mobileMenuIsOpen && (
  <div className="md:hidden bg-linear-to-b from-indigo-950/95 via-blue-950/95 to-violet-950/95 border-t border-indigo-800/30 shadow-lg backdrop-blur-lg animate-fade-in-down">
    <div className="px-4 pt-4 pb-6 space-y-3">
      <Link
        to="/Manga"
        onClick={() => setMobileIsOpen(false)}
        className="block text-indigo-100 hover:text-blue-300 transition"
      >
        Manga
      </Link>
      <Link
        to="/Watch"
        onClick={() => setMobileIsOpen(false)}
        className="block text-indigo-100 hover:text-blue-300 transition"
      >
        Watch
      </Link>
      <Link
        to="/Pricing"
        onClick={() => setMobileIsOpen(false)}
        className="block text-indigo-100 hover:text-blue-300 transition"
      >
        Subscriptions
      </Link>
      <Link
        to="/login"
        onClick={() => setMobileIsOpen(false)}
        className="inline-flex items-center justify-center px-5 py-3 rounded-lg shadow-lg text-sm font-semibold
                   bg-linear-to-r from-indigo-500 to-blue-600 text-white transform-gpu hover:scale-[1.02] transition"
      >
        Login
      </Link>
    </div>
  </div>
)}

    </nav>
  );
}
