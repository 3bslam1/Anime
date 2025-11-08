import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    monthly: 0,
    yearly: 0,
    tagline: "Get a taste of the platform.",
    features: [
      "Basic browsing",
      "Save up to 20 items",
      "Standard search",
      "Email support",
    ],
    cta: "Get started",
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 7.99,
    yearly: 79.99,
    tagline: "For regular fans who want more.",
    features: [
      "Smart search filters",
      "Unlimited lists",
      "Cross-device sync",
      "Priority email support",
    ],
    highlighted: true,
    cta: "Go Pro",
  },
  {
    id: "ultimate",
    name: "Ultimate",
    monthly: 14.99,
    yearly: 149.99,
    tagline: "Everything unlocked.",
    features: [
      "All Pro features",
      "Early feature access",
      "Advanced recommendations",
      "VIP support",
    ],
    cta: "Unlock all",
  },
];

export default function Subscription() {
  const [period, setPeriod] = useState("monthly"); // 'monthly' | 'yearly'

  return (
    <main
      id="subscription"
      className="min-h-screen pt-28 pb-16 text-indigo-100
                 bg-linear-to-b from-indigo-950 via-blue-950 to-violet-950"
    >
      
      <div
        aria-hidden
        className="fixed inset-0 -z-10 opacity-25"
        style={{
          background:
            "radial-gradient(900px 600px at 12% -10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(1000px 700px at 95% 110%, rgba(37,99,235,0.18), transparent 60%)",
        }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold
                           bg-slate-900/60 border border-indigo-800/40 text-indigo-200">
            Membership
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Choose a plan that grows with you
          </h1>
          <p className="mt-2 text-sm text-indigo-300/90">
            Transparent pricing. Dark, clean, and lightning-fast experience.
          </p>

          
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl
                          bg-[rgba(255,255,255,0.06)] ring-1 ring-indigo-800/40">
            <button
              onClick={() => setPeriod("monthly")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition
                ${period === "monthly"
                  ? "bg-linear-to-r from-indigo-600 to-blue-600 text-white"
                  : "text-indigo-200 hover:bg-[rgba(255,255,255,0.06)]"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod("yearly")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition
                ${period === "yearly"
                  ? "bg-linear-to-r from-indigo-600 to-blue-600 text-white"
                  : "text-indigo-200 hover:bg-[rgba(255,255,255,0.06)]"}`}
            >
              Yearly <span className="ml-1 text-indigo-300/90">(Save 15%)</span>
            </button>
          </div>
        </header>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((p) => {
            const price = period === "monthly" ? p.monthly : p.yearly;
            const isFree = price === 0;
            const badge =
              p.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full
                                 bg-linear-to-r from-indigo-600 to-blue-600 text-white ring-1 ring-indigo-800/40">
                  Most Popular
                </span>
              ) : null;

            return (
              <article
                key={p.id}
                className={`relative rounded-2xl p-6 shadow-xl ring-1 ring-indigo-800/40
                            bg-linear-to-br from-indigo-950/70 via-blue-950/60 to-violet-950/70
                            ${p.highlighted ? "border border-indigo-600/30 shadow-[0_20px_60px_rgba(79,70,229,0.25)]" : ""}`}
              >
                {badge}

                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-indigo-300/90">{p.tagline}</p>

                <div className="mt-5 flex items-end gap-2">
                  <span className="text-3xl font-extrabold text-indigo-50">
                    {isFree ? "Free" : price}
                  </span>
                  {!isFree && (
                    <span className="text-indigo-300/80 text-sm">
                      {period === "monthly" ? "/mo" : "/yr"}
                    </span>
                  )}
                </div>

                <ul className="mt-5 space-y-2">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 rounded-md p-1 bg-[rgba(255,255,255,0.06)] ring-1 ring-indigo-800/40">
                        <Check className="w-4 h-4 text-indigo-300" />
                      </span>
                      <span className="text-sm text-indigo-100">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={isFree ? "#signup" : "#checkout"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold
                             bg-linear-to-r from-indigo-600 to-blue-600 text-white
                             hover:brightness-110 active:scale-[0.99] transition"
                >
                  {p.cta}
                  <ArrowRight className="w-5 h-5" />
                </a>

                <p className="mt-3 text-xs text-indigo-300/80">
                  Cancel anytime. No hidden fees.
                </p>
              </article>
            );
          })}
        </div>

        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["Can I change plans later?", "Yes. You can upgrade or downgrade at any time."],
            ["Is there a free trial?", "You can use Starter for free as long as you want."],
            ["Do you offer refunds?", "Pro-rated refunds on yearly plans within 14 days."],
          ].map(([q, a], i) => (
            <div
              key={i}
              className="rounded-2xl p-6 ring-1 ring-indigo-800/40
                         bg-linear-to-br from-indigo-950/70 via-blue-950/60 to-violet-950/70"
            >
              <h4 className="font-semibold">{q}</h4>
              <p className="mt-2 text-sm text-indigo-300/90">{a}</p>
            </div>
          ))}
        </div>

        
        <div className="mt-12 rounded-2xl p-6 text-center ring-1 ring-indigo-800/40
                        bg-linear-to-r from-indigo-950/70 via-blue-950/70 to-violet-950/70">
          <h3 className="text-xl font-extrabold">Ready to get started?</h3>
          <p className="text-sm text-indigo-300/90 mt-1">Join thousands enjoying the dark, clean experience.</p>
          <a
            href="signUp"
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold
                       bg-linear-to-r from-indigo-600 to-blue-600 text-white hover:brightness-110 transition"
          >
            Create account
            <ArrowRight className="w-5 h-5" />
          </a>
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
