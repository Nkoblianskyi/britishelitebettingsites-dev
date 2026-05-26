import Image from "next/image"
import { ShieldCheck, Star, Trophy, TrendingUp } from "lucide-react"

const trustStats = [
  { value: "5", label: "Elite Sites Ranked" },
  { value: "UKGC", label: "Licensed Only" },
  { value: "Monthly", label: "Updated" },
  { value: "100%", label: "Independent" },
]

export function SiteHero() {
  return (
    <section
      className="relative w-full min-h-[340px] sm:min-h-[420px] flex flex-col overflow-hidden hero-sport"
      aria-labelledby="hero-heading"
    >
      {/* Sports background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-stadium.jpg"
          alt="Floodlit UK football stadium — British Elite Betting Sites"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay — strict and clean */}
        <div className="absolute inset-0 bg-navy/88" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(220 90% 48% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(220 90% 48% / 0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        {/* Blue left-edge accent stripe */}
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary" aria-hidden="true" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-4 md:px-8 max-w-6xl mx-auto w-full gap-6 py-14 sm:py-20">

        {/* Year badge */}
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-primary flex-shrink-0" aria-hidden="true" />
          <span className="font-heading font-bold text-[11px] uppercase tracking-[0.2em] text-primary">
            {new Date().getFullYear()} Rankings — Verified &amp; Updated Monthly
          </span>
        </div>

        {/* Headline — condensed bold */}
        <h1
          id="hero-heading"
          className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-white tracking-tight text-balance uppercase"
        >
          Britain&apos;s Elite
          <br />
          <span className="text-primary">Betting Sites</span>
          <br />
          <span className="text-white/90">Ranked &amp; Verified</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
          We rigorously test every major UK sportsbook. Only operators holding an active UKGC licence, verified bonuses, and competitive odds earn a place on our list.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <a
            href="#rankings"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-sm transition-all duration-150 shadow-lg shadow-primary/30"
          >
            <Trophy className="w-4 h-4" aria-hidden="true" />
            View Top Sites
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/14 text-white font-heading font-semibold text-sm uppercase tracking-wider px-7 py-3.5 border border-white/20 rounded-sm transition-all duration-150"
          >
            Our Method
          </a>
        </div>

        {/* Trust stat row */}
        <div
          className="flex flex-wrap gap-0 mt-4 border border-white/12 rounded-sm overflow-hidden w-fit"
          aria-label="Key trust statistics"
          role="list"
        >
          {trustStats.map(({ value, label }, i) => (
            <div
              key={label}
              role="listitem"
              className={`flex flex-col items-center justify-center px-5 py-3 bg-white/6 ${i < trustStats.length - 1 ? "border-r border-white/12" : ""}`}
            >
              <span className="font-heading font-extrabold text-lg text-primary leading-none">{value}</span>
              <span className="font-sans text-[10px] text-white/45 tracking-wider uppercase mt-0.5">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
