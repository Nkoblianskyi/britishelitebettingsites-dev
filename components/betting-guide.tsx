import {
  Trophy,
  ShieldCheck,
  Wallet,
  BarChart2,
  Smartphone,
  HeartHandshake,
} from "lucide-react"

const guideItems = [
  {
    number: "01",
    icon: <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />,
    title: "Licence Verification Is Non-Negotiable",
    body: "A valid, active UKGC licence is the baseline requirement for any site we list. That licence means player funds are legally segregated, markets must operate fairly, and operators are obligated to provide robust responsible gambling controls. Unlicensed sites expose your money to zero regulatory protection.",
  },
  {
    number: "02",
    icon: <Wallet className="w-5 h-5 text-accent" aria-hidden="true" />,
    title: "Bonus Terms Define the Real Value",
    body: "A headline bonus figure tells you very little. The actual value sits inside the terms — wagering requirements, minimum qualifying odds, maximum stake restrictions, and expiry timescales. Our expert reviews dissect every condition so you know precisely what you're accepting before you deposit a single pound.",
  },
  {
    number: "03",
    icon: <BarChart2 className="w-5 h-5 text-primary" aria-hidden="true" />,
    title: "Odds Quality Compounds Over Hundreds of Bets",
    body: "A two-percent overround difference may look trivial on a single bet. Across a full season of wagering, it translates to a meaningful difference in your bottom line. We benchmark overrounds on Premier League football, horse racing, and tennis markets to surface which operators consistently offer the sharpest prices.",
  },
  {
    number: "04",
    icon: <Trophy className="w-5 h-5 text-accent" aria-hidden="true" />,
    title: "Market Depth Determines Long-Term Value",
    body: "The strongest UK sportsbooks cover far more than the top flight. EFL Championship, Scottish Premiership, horse racing from every British track, Test cricket, Premiership rugby, golf majors, and ATP tennis — a wide, deep market catalogue ensures you find value regardless of the sports calendar.",
  },
  {
    number: "05",
    icon: <Smartphone className="w-5 h-5 text-primary" aria-hidden="true" />,
    title: "Mobile Performance Is Tested Under Live Conditions",
    body: "Over 70% of UK sports bets are placed on mobile devices. We test every platform on real iOS and Android hardware during live fixtures, checking page load times under traffic spikes, in-play stability, and how straightforward it is to set account limits or request withdrawals from a small screen.",
  },
  {
    number: "06",
    icon: <HeartHandshake className="w-5 h-5 text-accent" aria-hidden="true" />,
    title: "Responsible Gambling Tools Protect Your Session",
    body: "UKGC-licensed operators must provide deposit limits, loss limits, cooling-off periods, reality checks, and self-exclusion. Configure these before you place your first bet — not after a losing run. Sites that make these tools hard to find or that add friction to self-exclusion requests receive a lower safety score in our reviews.",
  },
]

export function BettingGuide() {
  return (
    <section
      className="bg-background py-14 md:py-20 px-4"
      aria-labelledby="guide-heading"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-heading font-bold text-[11px] uppercase tracking-[0.18em] text-primary">
                Our Choice
              </span>
            </div>
            <h2
              id="guide-heading"
              className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight uppercase tracking-tight text-balance"
            >
              What Separates Elite
              <br />
              Betting Sites
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-sans">
            Six criteria our experts apply to every operator — the standards that determine whether a site deserves elite status.
          </p>
        </div>

        {/* Items — alternating layout: number | content */}
        <div className="divide-y divide-border">
          {guideItems.map(({ number, icon, title, body }) => (
            <div
              key={number}
              className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-7 group"
            >
              {/* Left — number + icon */}
              <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 flex-shrink-0 sm:w-20">
                <span className="font-heading font-extrabold text-3xl text-primary/25 leading-none select-none">
                  {number}
                </span>
                <div className="w-9 h-9 rounded-sm border border-border bg-card flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  {icon}
                </div>
              </div>

              {/* Right — title + body */}
              <div className="flex-1">
                <h3 className="font-heading font-bold text-base md:text-lg text-foreground uppercase tracking-tight leading-snug mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans max-w-2xl">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[11px] text-muted-foreground mt-10 leading-relaxed border-t border-border pt-6">
          <span className="text-destructive font-bold">18+</span> only. Gambling involves financial risk.
          Never wager more than you can afford to lose. If you need support, visit{" "}
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
          >
            BeGambleAware.org
          </a>{" "}
          or call <a href="tel:08088020133" className="text-primary underline underline-offset-2">0808 8020 133</a>.
        </p>

      </div>
    </section>
  )
}
