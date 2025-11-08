// components/Manga.jsx
import { useMemo, useState } from "react";
import { Search, Star, BookmarkPlus, X, Filter, ChevronDown } from "lucide-react";

const MOCK_MANGA = [
  {
    id: "bluelock",
    title: "Blue Lock",
    cover: "/bluelock.jpeg", // غيّر المسار لصورك
    rating: 4.6,
    genres: ["Sports", "Shonen"],
    chapters: 250,
    updated: "2d",
    progress: 32, // آخر فصل مقروء
    desc: "Elite strikers locked in a survival training project to create Japan’s No.1 striker.",
  },
  {
    id: "jujutsu",
    title: "Jujutsu Kaisen",
    cover: "/jk.jpeg",
    rating: 4.8,
    genres: ["Action", "Supernatural", "Shonen"],
    chapters: 280,
    updated: "1d",
    progress: 120,
    desc: "Curses, sorcerers, and high-stakes battles with cursed energy and domains.",
  },
  {
    id: "berserk",
    title: "Berserk",
    cover: "/berserk.jpeg",
    rating: 4.9,
    genres: ["Dark", "Seinen", "Fantasy"],
    chapters: 374,
    updated: "1w",
    progress: 40,
    desc: "A brutal dark fantasy following Guts against inhuman odds and fate.",
  },
  {
    id: "naruto",
    title: "Naruto Shippuden",
    cover: "/ns.jpeg",
    rating: 4.7,
    genres: ["Action", "Adventure", "Shonen"],
    chapters: 700,
    updated: "3d",
    progress: 0,
    desc: "A journey of a ninja destined to break the curse of hatred and protect his village.",
  },
  {
    id: "onepiece",
    title: "One Piece",
    cover: "/onepiece.jpeg",
    rating: 4.9,
    genres: ["Adventure", "Fantasy", "Shonen"],
    chapters: 1100,
    updated: "1d",
    progress: 400,
    desc: "Follow Luffy and his crew on their quest to find the greatest treasure: The One Piece.",
  },
  {
    id: "aot",
    title: "Attack on Titan",
    cover: "/aot.jpeg",
    rating: 4.8,
    genres: ["Dark", "Action", "Seinen"],
    chapters: 139,
    updated: "1y",
    progress: 139,
    desc: "Humanity's last stand against towering monsters in a world full of secrets.",
  },
  {
    id: "tokyoghoul",
    title: "Tokyo Ghoul",
    cover: "/tokyoghoul.jpeg",
    rating: 4.5,
    genres: ["Dark", "Seinen", "Horror"],
    chapters: 180,
    updated: "2y",
    progress: 20,
    desc: "A college student becomes a half-ghoul and struggles between two worlds.",
  },
  {
    id: "chainsawman",
    title: "Chainsaw Man",
    cover: "/cm.jpeg",
    rating: 4.7,
    genres: ["Action", "Dark", "Shonen"],
    chapters: 150,
    updated: "5d",
    progress: 80,
    desc: "A devil hunter merges with the Chainsaw devil and aims for a normal life full of chaos.",
  },
  {
    id: "demon_slayer",
    title: "Demon Slayer",
    cover: "/deamonslayer.jpeg",
    rating: 4.6,
    genres: ["Action", "Fantasy", "Shonen"],
    chapters: 205,
    updated: "2y",
    progress: 50,
    desc: "A boy seeks to save his demon-turned sister and avenge his family.",
  },
  {
    id: "solo_leveling",
    title: "Solo Leveling",
    cover: "/sololiveling.jpeg",
    rating: 4.9,
    genres: ["Fantasy", "Action", "Manhwa"],
    chapters: 179,
    updated: "1y",
    progress: 120,
    desc: "The weakest hunter becomes the strongest through a mysterious leveling system.",
  },
  {
    id: "spy_family",
    title: "Spy x Family",
    cover: "/spy.jpeg",
    rating: 4.4,
    genres: ["Comedy", "Slice of Life"],
    chapters: 95,
    updated: "6d",
    progress: 12,
    desc: "A spy, an assassin, and a psychic child form a fake family with real feelings.",
  },
  {
    id: "haikyuu",
    title: "Haikyuu!!",
    cover: "/haikuu.jpeg",
    rating: 4.8,
    genres: ["Sports", "Shonen"],
    chapters: 402,
    updated: "2y",
    progress: 120,
    desc: "A short volleyball player aims for the national stage with sheer passion and grind.",
  },
  {
    id: "madeinabyss",
    title: "Made in Abyss",
    cover: "/mia.jpeg",
    rating: 4.6,
    genres: ["Adventure", "Dark", "Fantasy"],
    chapters: 65,
    updated: "3w",
    progress: 10,
    desc: "Children journey into a vast abyss filled with beauty, secrets, and painful truths.",
  },
  
];

const ALL_GENRES = [
  "Action","Adventure","Fantasy","Shonen","Seinen","Sports","Romance","Comedy","Supernatural","Dark"
];

export default function Manga() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(null); // modal manga id
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sort, setSort] = useState("rating"); // rating | updated | title

  const filtered = useMemo(() => {
    let data = MOCK_MANGA.filter((m) => {
      const hitQ = m.title.toLowerCase().includes(q.toLowerCase());
      const hitG =
        selectedGenres.length === 0 ||
        selectedGenres.every((g) => m.genres.includes(g));
      return hitQ && hitG;
    });
    switch (sort) {
      case "title":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "updated":
        // تقريب: الأحدث أولاً بناءً على string
        data.sort((a, b) => (a.updated > b.updated ? 1 : -1));
        break;
      default:
        data.sort((a, b) => b.rating - a.rating);
    }
    return data;
  }, [q, selectedGenres, sort]);

  const toggleGenre = (g) =>
    setSelectedGenres((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );

  return (
    <main className="min-h-screen pt-28 pb-16 bg-linear-to-b from-[#0b0d1e] via-[#111432] to-[#1a1941]/85">
      {/* زخارف */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 opacity-25"
        style={{
          background:
            "radial-gradient(800px 500px at 10% 0%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(900px 600px at 90% 100%, rgba(37,99,235,0.18), transparent 60%)",
        }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان + أدوات التحكم */}
        <header className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">Manga Library</h1>
            <p className="text-indigo-300/90 text-sm mt-1">
              
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            {/* بحث */}
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search manga..."
                className="pl-10 pr-3 py-2 rounded-lg w-72
                           bg-[rgba(255,255,255,0.06)] text-indigo-100 placeholder-indigo-200/50
                           outline-none ring-1 ring-indigo-800/40 focus:ring-2 focus:ring-indigo-500/60"
              />
            </div>

            {/* ترتيب */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-indigo-600" />
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

        {/* فلاتر الأنواع */}
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

        {/* الجريد */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((m) => (
            <article
              key={m.id}
              className="group rounded-xl overflow-hidden ring-1 ring-indigo-800/40 bg-linear-to-b from-indigo-900/60 to-blue-900/50 shadow-lg hover:-translate-y-1 transition-transform"
            >
              <div className="relative h-52">
                <img src={m.cover} alt={m.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20" />
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
                    style={{
                      width: `${Math.min((m.progress / m.chapters) * 100, 100)}%`,
                    }}
                  />
                </div>
                <p className="mt-1 text-xs text-indigo-300/80">
                  Progress: {m.progress}/{m.chapters} • Updated {m.updated}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* مودال التفاصيل */}
      {open && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(null)}
        />
    
        {(() => {
          const m = MOCK_MANGA.find((x) => x.id === open);
          if (!m) return null; // مهم
    
          return (
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden ring-1 ring-indigo-800/40
                            bg-linear-to-br from-indigo-900/80 via-blue-900/70 to-violet-900/80 backdrop-blur-md shadow-2xl">
    
              {/* زر إغلاق */}
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

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {m.genres.map((g) => (
                        <span key={g} className="px-2 py-1 text-xs rounded-md bg-[rgba(255,255,255,0.06)] ring-1 ring-indigo-800/40">
                          {g}
                        </span>
                      ))}
                    </div>

                    {/* فصول مختصرة */}
                    <details className="mt-4 group">
                      <summary className="cursor-pointer flex items-center gap-2 text-indigo-200">
                        Chapters <ChevronDown className="w-4 h-4 group-open:rotate-180 transition" />
                      </summary>
                      <div className="mt-2 max-h-44 overflow-y-auto pr-1">
                        {Array.from({ length: Math.min(m.chapters, 40) }).map((_, i) => {
                          const ch = m.chapters - i;
                          return (
                            <a
                              key={ch}
                              href={`#/read/${m.id}/${ch}`}
                              className="block text-sm py-1 px-2 rounded hover:bg-[rgba(255,255,255,0.06)]"
                            >
                              Chapter {ch}
                            </a>
                          );
                        })}
                      </div>
                    </details>

                    <div className="mt-5 flex items-center gap-3">
                      <button className="px-4 py-2 rounded-lg bg-linear-to-r from-indigo-600 to-blue-600 font-semibold">
                        Continue reading
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
