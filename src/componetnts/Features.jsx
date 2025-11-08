import React from "react";
import { Star, Play, BookOpen, ShieldCheck, Search } from "lucide-react";

export default function Features() {
  const features = [
    { id: 1, title: "Curated Categories", desc: "Discover hand-picked anime & manga categories tailored to your tastes.", icon: <Star className="w-6 h-6" /> },
    { id: 2, title: "Read & Watch", desc: "Stream episodes or read chapters — synced progress across devices.", icon: <Play className="w-6 h-6" /> },
    { id: 3, title: "Huge Library", desc: "Thousands of titles with summaries, ratings, and user lists.", icon: <BookOpen className="w-6 h-6" /> },
    { id: 4, title: "Safe & Private", desc: "Privacy-first defaults and parental controls for peace of mind.", icon: <ShieldCheck className="w-6 h-6" /> },
    { id: 5, title: "Smart Search", desc: "Find titles fast with fuzzy search, filters, and recommendations.", icon: <Search className="w-6 h-6" /> },
  ];

  return (
    <main className="relative pt-24 min-h-screen text-indigo-100 overflow-hidden
                     bg-linear-to-b from-indigo-950 via-blue-950 to-violet-950">

      
      <div aria-hidden className="animated-bg pointer-events-none" />

      
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl p-6
                     bg-linear-to-br from-blue-950/80 via-indigo-950/80 to-violet-950/80
                     shadow-[0_18px_60px_rgba(79,70,229,0.25)] ring-1 ring-indigo-900/40 backdrop-blur-md"
        >
          <div className="space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                             bg-indigo-900/60 text-indigo-200 backdrop-blur-sm ring-1 ring-indigo-800/40">
              <strong className="mr-1 text-indigo-200">Anime</strong>Site Features
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-indigo-50 drop-shadow">
              Everything you need to explore, read, and watch anime & manga
            </h1>

            <p className="text-indigo-300/90 max-w-xl">
              From curated lists to synced progress, our platform helps fans find the next series they'll love — fast.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mt-4">
              <a href="#get-started" className="btn-glow">
                Get started
              </a>

              <a
                href="#watch-sample"
                className="btn-ghost"
              >
                Watch sample
              </a>
            </div>

        
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "Titles", v: "12,345+" },
                { k: "Active Users", v: "230k" },
                { k: "Avg Rating", v: "4.7" },
                { k: "Updates / wk", v: "45" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <dt className="text-xs text-indigo-300/80">{s.k}</dt>
                  <dd className="text-lg font-semibold text-indigo-50">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

         
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl
                            bg-linear-to-tr from-blue-950 via-indigo-950 to-violet-900 p-6 ring-1 ring-violet-800/30">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <video
  src="/vecteezy_ai-generated-beautiful-illustration-background-of-anime_38777154.mp4"
  className="w-full h-full object-cover"
  autoPlay muted loop playsInline
/>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent mix-blend-multiply" />
              </div>

              <div
                className="mt-4 p-4 rounded-lg shadow-lg -translate-y-6 backdrop-blur-sm ring-1 ring-violet-800/40"
                style={{ background: "linear-gradient(90deg, rgba(13,13,23,0.55), rgba(53,16,96,0.45))" }}
              >
                <h3 className="text-base font-semibold text-indigo-100">New Season Highlights</h3>
                <p className="text-sm text-indigo-200/90">
                  Discover top anime picks updated weekly with trailers and reading lists.
                </p>
                <div className="mt-3 flex items-center space-x-2">
                  <button className="btn-glow btn-sm">Explore</button>
                  <button className="btn-ghost btn-sm">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="col-span-1 md:col-span-1">
            <div className="rounded-2xl p-6 shadow-xl bg-linear-to-br from-indigo-950 to-blue-950 ring-1 ring-indigo-900/50 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-indigo-100">Key Features</h2>
              <p className="mt-2 text-sm text-indigo-300/90">
                Everything built to keep fans coming back — lightweight UI, powerful filters, and synced watchlists.
              </p>

              <ul className="mt-4 space-y-3">
                {features.slice(0, 3).map((f) => (
                  <li key={f.id} className="flex items-start space-x-3">
                    <div className="rounded-md p-2 text-indigo-200 bg-linear-to-br from-indigo-800/70 to-blue-800/70 ring-1 ring-indigo-900/40">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-indigo-100">{f.title}</h3>
                      <p className="text-xs text-indigo-300/80">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a href="#learn-more" className="mt-6 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200">
                Learn more →
              </a>
            </div>
          </div>

       
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <article
                key={feature.id}
                className="rounded-lg p-5 shadow-lg transition-transform transform hover:-translate-y-1 ring-1 ring-violet-800/20"
                style={{ background: "linear-gradient(180deg, rgba(10,16,30,0.65), rgba(40,12,60,0.6))" }}
                aria-labelledby={`feature-${feature.id}`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="rounded-lg p-3 flex items-center justify-center text-indigo-200"
                    style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.08), rgba(99,102,241,0.08))" }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 id={`feature-${feature.id}`} className="text-sm font-semibold text-indigo-100">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs text-indigo-300/85">{feature.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

   
      <section
        className="relative mt-12 py-10 border-t border-indigo-900/40"
        style={{ background: "linear-gradient(90deg, rgba(7,12,24,0.75), rgba(35,8,56,0.7))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-indigo-100">Ready to dive in?</h3>
            <p className="text-sm text-indigo-300/90">Create an account and start building your watchlist in seconds.</p>
          </div>

          <div className="flex items-center space-x-3">
            <Link to="/signup" className="btn-glow">
              Sign up
            </Link>
            <a href="#demo" className="btn-ghost">
              See demo
            </a>
          </div>
        </div>
      </section>

      

      
      <style>{`
        /* دعم bg-linear-to-* اللي بتحبه */
        .bg-linear-to-b{ background-image:linear-gradient(to bottom,var(--tw-grad-from),var(--tw-grad-via),var(--tw-grad-to)); }
        .bg-linear-to-br{ background-image:linear-gradient(to bottom right,var(--tw-grad-from),var(--tw-grad-via,transparent),var(--tw-grad-to)); }
        .bg-linear-to-tr{ background-image:linear-gradient(to top right,var(--tw-grad-from),var(--tw-grad-via,transparent),var(--tw-grad-to)); }

        /* الخلفية الديناميكية */
        .animated-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(800px 600px at 20% 20%, rgba(79,70,229,0.40), transparent 60%),
    radial-gradient(900px 600px at 80% 80%, rgba(37,99,235,0.40), transparent 60%),
    radial-gradient(700px 500px at 50% 120%, rgba(139,92,246,0.35), transparent 60%);
  animation: bg-flow 28s ease-in-out infinite alternate;
  filter: blur(90px);
}

/* الحركة */
@keyframes bg-flow {
  0%   { transform: translate3d(-3%, -2%, 0) scale(1); }
  25%  { transform: translate3d(3%, -4%, 0) scale(1.05); }
  50%  { transform: translate3d(2%, 2%, 0) scale(1.02); }
  75%  { transform: translate3d(-2%, 3%, 0) scale(1.07); }
  100% { transform: translate3d(0%, 0%, 0) scale(1.04); }
}


        /* زرار إضاءة من الشمال لليمين (Auto Sheen) */
        .btn-glow{
          position: relative;
          display:inline-flex; align-items:center; justify-content:center;
          gap:.5rem; padding:.75rem 1.25rem; border-radius: .75rem;
          font-weight:600; color:white;
          background: linear-gradient(90deg, #4f46e5, #2563eb);
          box-shadow: 0 10px 30px rgba(37,99,235,.35);
          transform: translateZ(0);
          overflow:hidden;
          transition: filter .25s, transform .2s;
        }
        .btn-glow:hover{ filter: brightness(1.1); transform: translateY(-1px); }
        .btn-glow::after{
          content:"";
          position:absolute; inset:-2px;
          background:
            linear-gradient(90deg, rgba(255,255,255,0) 0%,
                                   rgba(255,255,255,0.35) 50%,
                                   rgba(255,255,255,0) 100%);
          transform: translateX(-150%);
          animation: sheen 2.2s linear infinite;
          mix-blend: screen; pointer-events:none;
        }
        @keyframes sheen{
          0%{ transform: translateX(-150%); }
          100%{ transform: translateX(150%); }
        }
        /* حجم أصغر للزر */
        .btn-sm{ padding:.5rem .75rem; border-radius:.5rem; }

        /* زر زجاجي داكن */
        .btn-ghost{
          display:inline-flex; align-items:center; justify-content:center;
          padding:.75rem 1.25rem; border-radius:.75rem; font-weight:500;
          background: rgba(255,255,255,0.05);
          color: #c7d2fe;
          border: 1px solid rgba(99,102,241,0.35);
          backdrop-filter: blur(6px);
          transition: background .25s, transform .2s, border-color .25s;
        }
        .btn-ghost:hover{ background: rgba(255,255,255,0.08); transform: translateY(-1px); border-color:rgba(99,102,241,0.6); }
      `}</style>
    </main>
  );
}
