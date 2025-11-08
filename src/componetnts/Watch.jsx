// components/Watch.jsx
import { useMemo, useState } from "react";
import { Search, Star, BookmarkPlus, X, Filter, ChevronDown, Play } from "lucide-react";

const MOCK_SHOWS = [
  { id: "aot", title: "Attack on Titan", cover: "/aot.jpeg", rating: 4.8, genres: ["Action","Dark","Seinen"], seasons: 4, episodes: 87, updated: "1d",  progressEp: 34, desc: "Humanity fights for survival against towering titans and hidden conspiracies." },
  { id: "onepiece", title: "One Piece", cover: "/onepiece.jpeg", rating: 4.9, genres: ["Adventure","Fantasy","Shonen"], seasons: 20, episodes: 1100, updated: "today", progressEp: 402, desc: "Straw Hat pirates chase the ultimate treasure across a vast and magical world." },
  { id: "jujutsu", title: "Jujutsu Kaisen", cover: "/jk.jpeg", rating: 4.8, genres: ["Action","Supernatural","Shonen"], seasons: 2, episodes: 47, updated: "2d", progressEp: 21, desc: "Curses, sorcerers, and battles of domain expansion in a deadly modern world." },
  { id: "bluelock", title: "Blue Lock", cover: "/bluelock.jpeg", rating: 4.6, genres: ["Sports","Shonen"], seasons: 2, episodes: 36, updated: "3d", progressEp: 12, desc: "Elite strikers are forged in a ruthless program to create Japan’s No.1." },
  { id: "demon_slayer", title: "Demon Slayer", cover: "/deamonslayer.jpeg", rating: 4.6, genres: ["Action","Fantasy","Shonen"], seasons: 4, episodes: 55, updated: "1w", progressEp: 18, desc: "Siblings fight demons with breath styles and fierce resolve." },
  { id: "chainsawman", title: "Chainsaw Man", cover: "/cm.jpeg", rating: 4.7, genres: ["Action","Dark","Shonen"], seasons: 1, episodes: 12, updated: "1y", progressEp: 7, desc: "A devil hunter merges with Chainsaw devil to chase a chaotic ‘normal’ life." },
  { id: "haikyuu", title: "Haikyuu!!", cover: "/haikuu.jpeg", rating: 4.8, genres: ["Sports","Shonen"], seasons: 4, episodes: 85, updated: "2y", progressEp: 44, desc: "Volleyball passion, teamwork, and fast growth towards the national stage." },
  { id: "spy_family", title: "Spy x Family", cover: "/spy.jpeg", rating: 4.4, genres: ["Comedy","Slice of Life"], seasons: 2, episodes: 37, updated: "6d", progressEp: 9, desc: "A spy, an assassin, and a telepath play family for peace and hilarious chaos." },
];

const ALL_GENRES = ["Action","Adventure","Fantasy","Shonen","Seinen","Sports","Romance","Comedy","Supernatural","Dark","Slice of Life"];


const updatedWeight = (u) => {
  if (u === "today") return 0;
  const n = parseInt(u, 10) || 0;
  if (u.endsWith("d")) return n;
  if (u.endsWith("w")) return n * 7;
  if (u.endsWith("y")) return n * 365;
  return 9999;
};

export default function Watch() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sort, setSort] = useState("rating"); // rating | updated | title

  const filtered = useMemo(() => {
    let data = MOCK_SHOWS.filter((m) => {
      const hitQ = m.title.toLowerCase().includes(q.toLowerCase());
      const hitG = selectedGenres.length === 0 || selectedGenres.every((g) => m.genres.includes(g));
      return hitQ && hitG;
    });
    switch (sort) {
      case "title":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "updated":
        data.sort((a, b) => updatedWeight(a.updated) - updatedWeight(b.updated));
        break;
      default:
        data.sort((a, b) => b.rating - a.rating);
    }
    return data;
  }, [q, selectedGenres, sort]);

  const toggleGenre = (g) =>
    setSelectedGenres((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]));

  return (
    <main className="min-h-screen pt-28 pb-16 text-indigo-100 bg-linear-to-b from-[#0b0d1e] via-[#111432] to-[#1a1941]/90">
      
      <div
        aria-hidden
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(900px 600px at 10% -10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(1000px 700px at 100% 110%, rgba(37,99,235,0.18), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "repeating-linear-gradient(120deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 8px)",
        }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <header className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">Watch Library</h1>
            <p className="text-indigo-300/90 text-sm mt-1">
              Browse shows, filter by genres, sort by rating or recency, and continue where you left off.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search shows..."
                className="pl-10 pr-3 py-2 rounded-lg w-72
                           bg-[rgba(255,255,255,0.06)] text-indigo-100 placeholder-indigo-200/50
                           outline-none ring-1 ring-indigo-800/40 focus:ring-2 focus:ring-indigo-500/60"
              />
            </div>

            
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-indigo-400" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.06)] ring-1 ring-indigo-800/40
                           focus:ring-2 focus:ring-indigo-500/60 outline-none"
              >
                <option value="rating" className="text-indigo-950">Top Rated</option>
                <option value="updated" className="text-indigo-950">Recently Updated</option>
                <option value="title" className="text-indigo-950">Title (A–Z)</option>
              </select>
            </div>
          </div>
        </header>

        
        <div className="flex flex-wrap gap-2 mb-6">
          {ALL_GENRES.map((g) => {
            const active = selectedGenres.includes(g);
            return (
              <button
                key={g}
                onClick={() => toggleGenre(g)}
                className={`px-3 py-1.5 rounded-full text-sm ring-1 transition ${
                  active
                    ? "bg-linear-to-r from-indigo-600 to-blue-600 text-white ring-indigo-500/60"
                    : "bg-[rgba(255,255,255,0.06)] text-indigo-200 ring-indigo-800/40 hover:bg-[rgba(255,255,255,0.1)]"
                }`}
              >
                {g}
              </button>
            );
          })}
          {selectedGenres.length > 0 && (
            <button
              onClick={() => setSelectedGenres([])}
              className="px-3 py-1.5 rounded-full text-sm text-indigo-200 bg-[rgba(255,255,255,0.06)] ring-1 ring-indigo-800/40"
            >
              Clear
            </button>
          )}
        </div>

      
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((m) => {
            const progressPct = Math.min((m.progressEp / m.episodes) * 100, 100);
            return (
              <article
                key={m.id}
                className="group rounded-xl overflow-hidden ring-1 ring-indigo-800/40
                           bg-linear-to-b from-indigo-900/60 to-blue-900/50 shadow-lg
                           hover:-translate-y-1 transition-transform"
              >
                <div className="relative h-52 cursor-pointer">
                  <img src={m.cover} alt={m.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/20 to-transparent" />
                  
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="rounded-full p-3 bg-black/50 ring-1 ring-white/20">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <span className="pointer-events-none absolute top-0 left-[-40%] h-full w-1/2
                                   bg-linear-to-r from-transparent via-white/15 to-transparent
                                   group-hover:translate-x-[220%] transition-transform duration-700 ease-out" />
                  
                  <button
                    onClick={() => setOpen(m.id)}
                    className="absolute bottom-3 left-3 px-3 py-1.5 rounded-md text-xs font-semibold
                               bg-linear-to-r from-indigo-600 to-blue-600 text-white shadow"
                  >
                    Details
                  </button>
                  <button
                    className="absolute bottom-3 right-3 p-2 rounded-md bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)]"
                    title="Add to list"
                  >
                    <BookmarkPlus className="w-4 h-4 text-indigo-100" />
                  </button>
                </div>

                <div className="p-3">
                  <h3 className="font-semibold">{m.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-sm text-indigo-300">
                    <Star className="w-4 h-4 text-yellow-300" />
                    <span>{m.rating}</span>
                    <span className="mx-2">•</span>
                    <span className="text-indigo-400/80">{m.genres.slice(0, 2).join(", ")}</span>
                  </div>

                  
                  <div className="mt-2 h-1.5 w-full bg-indigo-900/60 rounded">
                    <div
                      className="h-full bg-linear-to-r from-indigo-500 to-blue-500 rounded"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-indigo-300/80">
                    Progress: Ep {m.progressEp}/{m.episodes} • Seasons: {m.seasons} • Updated {m.updated}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      
      {open && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(null)} />
          {(() => {
            const m = MOCK_SHOWS.find((x) => x.id === open);
            if (!m) return null;

            return (
              <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden ring-1 ring-indigo-800/40
                              bg-linear-to-br from-indigo-900/80 via-blue-900/70 to-violet-900/80 backdrop-blur-md shadow-2xl">
                <button
                  className="absolute right-3 top-3 p-2 rounded-md bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)]"
                  onClick={() => setOpen(null)}
                >
                  <X className="w-5 h-5 text-indigo-100" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 h-48 md:h-full">
                    <img src={m.cover} alt={m.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-2 p-5">
                    <h3 className="text-xl font-bold">{m.title}</h3>
                    <p className="mt-2 text-sm text-indigo-200/90">{m.desc}</p>
                    <div className="mt-3 text-sm text-indigo-300/90">
                      Seasons: {m.seasons} • Episodes: {m.episodes} • Rating: {m.rating}
                    </div>

                    <details className="mt-4 group">
                      <summary className="cursor-pointer flex items-center gap-2 text-indigo-200">
                        Episodes <ChevronDown className="w-4 h-4 group-open:rotate-180 transition" />
                      </summary>
                      <div className="mt-2 max-h-44 overflow-y-auto pr-1">
                        {Array.from({ length: Math.min(m.episodes, 30) }).map((_, i) => {
                          const ep = i + 1;
                          return (
                            <a
                              key={ep}
                              href={`#/watch/${m.id}/ep/${ep}`}
                              className="block text-sm py-1 px-2 rounded hover:bg-[rgba(255,255,255,0.06)]"
                            >
                              Episode {ep}
                            </a>
                          );
                        })}
                      </div>
                    </details>

                    <div className="mt-5 flex items-center gap-3">
                      <button className="px-4 py-2 rounded-lg bg-linear-to-r from-indigo-600 to-blue-600 font-semibold">
                        Continue watching
                      </button>
                      <button className="px-4 py-2 rounded-lg ring-1 ring-indigo-800/40 bg-[rgba(255,255,255,0.06)]">
                        Add to list
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            );
          })()}
        </div>
      )}
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
