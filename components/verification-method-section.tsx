import Image from "next/image"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Operator Vetting & Licence Check",
    body: "Every operator must hold a current, active UK Gambling Commission licence before it reaches our shortlist. We query the UKGC register directly prior to each publication cycle — expired or suspended licences mean immediate removal. No grey-market sites, no exceptions.",
    tag: "Regulatory",
  },
  {
    number: "02",
    title: "Live Account Testing",
    body: "Our analysts open real-money accounts, make genuine deposits, and place live bets. We verify withdrawal speeds using funded accounts, not estimates. Bonus terms are read line by line — wagering requirements, minimum odds clauses, expiry windows, and stake caps are all logged.",
    tag: "Real Testing",
  },
  {
    number: "03",
    title: "Six-Pillar Composite Score",
    body: "Each operator is scored across regulatory standing, offer value, odds competitiveness, platform quality, payment processing speed, and customer support. Points are deducted for misleading T&Cs, slow cashouts, or gaps in responsible gambling tools. The composite score drives the final ranking.",
    tag: "Scoring",
  },
  {
    number: "04",
    title: "Monthly Rankings Refresh",
    body: "The UK betting market shifts constantly — odds policies update, licences get amended, and bonuses change. We re-evaluate every listed operator each month and push updated scores in real time when a material product change occurs. Rankings are never frozen or stale.",
    tag: "Always Current",
  },
]

export function VerificationMethodSection() {
  return (
    <section
      className="relative w-full bg-navy overflow-hidden py-14 md:py-20 px-4"
      id="how-it-works"
      aria-labelledby="methodology-heading"
    >
      {/* Background photo with overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/stadium-hero.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/92" />
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(220 90% 48% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(220 90% 48% / 0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Left stripe */}
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary/60" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-heading font-bold text-[11px] uppercase tracking-[0.18em] text-primary">
                How It Works
              </span>
            </div>
            <h2
              id="methodology-heading"
              className="font-heading font-extrabold text-3xl md:text-5xl text-white leading-tight uppercase tracking-tight text-balance"
            >
              The Method Behind
              <br />
              Every Rating
            </h2>
          </div>
          <p className="text-white/45 text-sm leading-relaxed max-w-xs font-sans">
            No paid placements. No guesswork. A repeatable, transparent process that puts UK bettors first every single time.
          </p>
        </div>

        {/* Steps — horizontal rule layout */}
        <div className="space-y-0">
          {steps.map(({ number, title, body, tag }, i) => (
            <div
              key={number}
              className={`flex flex-col md:flex-row md:items-start gap-0 border-t border-white/10 py-7 ${i === steps.length - 1 ? "border-b border-white/10" : ""}`}
            >
              {/* Step number */}
              <div className="md:w-20 flex-shrink-0 mb-3 md:mb-0">
                <span className="font-heading font-extrabold text-4xl text-primary/30 leading-none select-none">
                  {number}
                </span>
              </div>

              {/* Title + tag */}
              <div className="md:w-64 flex-shrink-0 mb-3 md:mb-0 md:pr-8">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="font-heading font-bold text-base md:text-lg text-white leading-snug uppercase">
                    {title}
                  </h3>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-[0.1em] text-primary bg-primary/15 border border-primary/25 px-2.5 py-0.5 rounded-sm">
                  {tag}
                </span>
              </div>

              {/* Body */}
              <div className="flex-1">
                <p className="text-white/55 text-sm leading-relaxed font-sans max-w-lg">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial independence strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-primary/25 rounded-sm px-5 py-4 bg-primary/8">
          <p className="text-white/65 text-sm leading-relaxed font-sans">
            <span className="text-white font-semibold">Editorial independence guaranteed.</span>{" "}
            Operators listed on British Elite Betting Sites cannot purchase a ranking or influence our scores. Affiliate commissions are disclosed and carry zero weight in our methodology.
          </p>
          <a
            href="/about"
            className="flex items-center gap-1.5 text-primary font-heading font-bold text-sm uppercase tracking-wide whitespace-nowrap hover:text-primary/80 transition-colors flex-shrink-0"
          >
            About Us <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}
