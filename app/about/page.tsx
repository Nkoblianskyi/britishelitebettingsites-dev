import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Users, BarChart2, Trophy, Star, Shield, Zap } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "About Us — British Elite Betting Sites",
  description:
    "Learn about British Elite Betting Sites — who we are, how we rank UK sportsbooks, and why our independent methodology puts punters first. britishelitebettingsites.com.",
  alternates: { canonical: "https://britishelitebettingsites.com/about" },
  openGraph: {
    title: "About British Elite Betting Sites",
    description: "Independent experts ranking the best elite UK sportsbooks.",
    url: "https://britishelitebettingsites.com/about",
  },
}

const stats = [
  { value: "50+", label: "Sites Reviewed" },
  { value: "6", label: "Scoring Pillars" },
  { value: "Monthly", label: "Refresh Cycle" },
  { value: "100%", label: "Editorial Independence" },
]

const pillars = [
  { icon: <Shield className="w-5 h-5 text-primary" aria-hidden="true" />, label: "Regulatory Standing", desc: "UKGC licence confirmed active before every publication." },
  { icon: <Star className="w-5 h-5 text-accent" aria-hidden="true" />, label: "Offer Fairness", desc: "Every bonus term reviewed in full — wagering, odds, limits, expiry." },
  { icon: <BarChart2 className="w-5 h-5 text-primary" aria-hidden="true" />, label: "Odds Quality", desc: "Overrounds benchmarked across Premier League, racing and tennis." },
  { icon: <Trophy className="w-5 h-5 text-accent" aria-hidden="true" />, label: "Market Depth", desc: "We count markets, not headlines — over 20 sports assessed." },
  { icon: <Zap className="w-5 h-5 text-primary" aria-hidden="true" />, label: "Platform & Mobile", desc: "Real device testing on iOS and Android under live conditions." },
  { icon: <Users className="w-5 h-5 text-accent" aria-hidden="true" />, label: "Customer Support", desc: "Live chat response times recorded and scored." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Dark hero banner */}
      <div className="bg-navy px-4 py-12 border-b border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(hsl(220 90% 48% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(220 90% 48% / 0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-5xl relative">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-primary transition-colors mb-5 tracking-wide font-sans"
            aria-label="Return to homepage"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Back to Rankings
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-primary flex-shrink-0" aria-hidden="true" />
                <span className="font-heading font-bold text-[11px] uppercase tracking-[0.18em] text-primary">About Us</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-white leading-tight uppercase tracking-tight text-balance">
                We Test.<br />You Decide.
              </h1>
              <p className="text-white/55 text-sm mt-3 max-w-md leading-relaxed font-sans">
                British Elite Betting Sites is an independent comparison service. No bookmaker funds us, no rankings are for sale. Just honest assessments built on real accounts, real bets, and real research.
              </p>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-shrink-0">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center bg-white/6 border border-white/10 px-4 py-3 text-center"
                >
                  <span className="font-heading font-extrabold text-2xl text-primary leading-none">{value}</span>
                  <span className="text-[10px] text-white/45 font-heading font-bold uppercase tracking-wide mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main
        className="container mx-auto max-w-5xl px-4 py-12 space-y-12"
        aria-label="About British Elite Betting Sites"
      >

        {/* Mission — two-col layout */}
        <section aria-labelledby="about-mission">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-primary flex-shrink-0" aria-hidden="true" />
                <span className="font-heading font-bold text-[11px] uppercase tracking-[0.18em] text-primary">Our Mission</span>
              </div>
              <h2 id="about-mission" className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight uppercase tracking-tight mb-4">
                Helping UK Bettors Pick the Right Site
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3 font-sans">
                There are hundreds of UKGC-licensed betting sites operating in the UK. Most look similar on the surface — similar odds, similar bonuses, similar branding. But under the hood, the differences are significant: payout speeds, mobile reliability, actual bonus value after terms, and how a platform behaves when something goes wrong.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                British Elite Betting Sites exists to cut through that noise. We open accounts, fund them, place bets, and test withdrawals — then score each operator across six pillars. No press kit, no PR spin. Just what we found.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 space-y-4 border-l-4 border-l-primary">
              <h3 className="font-heading font-bold text-base text-foreground uppercase tracking-tight">What we are not</h3>
              {[
                "We are not a licensed bookmaker and accept no wagers or deposits.",
                "We do not operate on behalf of any operator or investor.",
                "We do not sell ranking positions or accept payment for editorial content.",
                "Our affiliate links fund our research but have zero weight in our scores.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Six scoring pillars */}
        <section aria-labelledby="about-pillars">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary flex-shrink-0" aria-hidden="true" />
            <span className="font-heading font-bold text-[11px] uppercase tracking-[0.18em] text-primary">Scoring Model</span>
          </div>
          <h2 id="about-pillars" className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight uppercase tracking-tight mb-6">
            Six Pillars. One Score.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map(({ icon, label, desc }) => (
              <div
                key={label}
                className="bg-card border border-border p-5 flex flex-col gap-3 card-hover"
              >
                <div className="w-10 h-10 bg-surface border border-border flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-foreground mb-1 uppercase tracking-tight">{label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div
          className="bg-surface border border-border px-6 py-5 border-l-4 border-l-accent"
          role="note"
          aria-label="Legal disclaimer"
        >
          <p className="text-sm text-muted-foreground leading-relaxed font-sans">
            <strong className="text-foreground font-heading">Disclaimer:</strong> britishelitebettingsites.com is an independent comparison and information service. We are not a licensed bookmaker or gambling operator. Affiliate links may be present — they do not influence our editorial ratings or ranking positions. All operators we feature hold a current, active UKGC licence. Please gamble responsibly.{" "}
            <span className="text-destructive font-semibold">18+</span> only.
          </p>
        </div>

      </main>
    </div>
  )
}
