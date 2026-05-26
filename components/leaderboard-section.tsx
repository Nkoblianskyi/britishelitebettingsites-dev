import { SportsbookCard } from "./sportsbook-card"
import { sportsbooks } from "@/lib/mock-data"
import { Info, Shield } from "lucide-react"

export function LeaderboardSection() {
  return (
    <section
      className="w-full bg-background py-10 md:py-14 section-sport"
      id="rankings"
      aria-labelledby="rankings-heading"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        {/* Section header */}
        <div className="mb-8 pb-6 border-b border-border flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-heading font-bold text-[11px] uppercase tracking-[0.18em] text-primary flex items-center gap-1.5">
                <Shield className="w-3 h-3" aria-hidden="true" />
                Expert Rankings {new Date().getFullYear()}
              </span>
            </div>
            <h2
              id="rankings-heading"
              className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight uppercase tracking-tight"
            >
              Elite UK Betting Sites
              <br />
              This Month
            </h2>
            <p className="text-muted-foreground text-sm mt-2 font-sans">
              Independently reviewed and ranked by our team of UK sports betting specialists.
            </p>
          </div>
          <span className="hidden md:inline-flex items-center text-[10px] font-heading font-bold uppercase tracking-widest text-muted-foreground border border-border px-3 py-1.5 rounded-sm bg-surface gap-1.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-primary rounded-sm" aria-hidden="true" />
            Independently Reviewed
          </span>
        </div>

        {/* Column headers — desktop only */}
        <div
          className="hidden md:grid md:grid-cols-[52px_160px_1fr_140px_160px] px-5 mb-2 text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground gap-0"
          aria-hidden="true"
        >
          <div className="text-center">Rank</div>
          <div className="text-center">Site</div>
          <div className="pl-5">Offer</div>
          <div className="text-center pl-4">Score</div>
          <div className="text-center pl-5">Action</div>
        </div>

        {/* Cards list */}
        <ol className="space-y-3" aria-label="UK betting sites ranked by expert score">
          {sportsbooks.map((site, index) => (
            <li key={site.id}>
              <SportsbookCard site={site} rank={index + 1} />
            </li>
          ))}
        </ol>

        {/* Disclosure note */}
        <div
          className="mt-6 flex items-start gap-3 bg-surface border border-border rounded-sm px-4 py-3.5"
          role="note"
          aria-label="Ranking methodology disclosure"
        >
          <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-[11px] text-muted-foreground leading-relaxed font-sans">
            Rankings on British Elite Betting Sites are produced through independent editorial review. We may earn affiliate commission when you visit an operator via our links — this has no bearing on our ratings or scores. Every listed operator holds an active UKGC licence.{" "}
            <span className="text-destructive font-semibold">18+</span> · Gamble responsibly · BeGambleAware.org
          </p>
        </div>
      </div>
    </section>
  )
}
