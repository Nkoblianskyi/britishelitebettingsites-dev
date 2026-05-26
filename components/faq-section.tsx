"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
  tag: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    tag: "Eligibility",
    question: "What qualifies a betting site for your elite list?",
    answer:
      "Three baseline conditions must be met before we assess a site: a current, active UKGC licence confirmed via the official register; a clean regulatory history with no outstanding material sanctions; and a full suite of responsible gambling tools available to UK customers. Sites that pass the baseline are then scored across six weighted pillars — only those reaching our composite threshold make the published list.",
  },
  {
    tag: "Safety",
    question: "How do you confirm these sites are safe to use?",
    answer:
      "Safety is verified in several layers. We check UKGC licence status directly through the regulator's public register. We review complaint histories on third-party review platforms. We test responsible gambling controls personally — setting deposit limits, triggering reality checks, and requesting self-exclusion — to confirm they work as described. Only sites with a clean record and functional player protections earn a verified status on our list.",
  },
  {
    tag: "Scores",
    question: "What does the expert score actually measure?",
    answer:
      "Our score is a composite metric across six equally weighted pillars: regulatory standing, welcome offer fairness, ongoing promotion quality, odds competitiveness, platform and mobile usability, and customer support responsiveness. A score of 9.0 or above denotes an elite-tier operator excelling in every category. Scores between 8.0 and 8.9 indicate a highly reliable site with one or two areas of marginal underperformance. Every score is recalculated on our monthly review cycle.",
  },
  {
    tag: "Independence",
    question: "Do operators pay for higher rankings?",
    answer:
      "No. Rankings cannot be purchased under any circumstances. We operate on an affiliate model — we earn a referral fee when you register via our links — but this commercial arrangement is fully disclosed and has zero weight in our scoring methodology. Our editorial team and commercial team are strictly separated. An operator with a significant affiliate budget but a mediocre product will score lower than a smaller brand that performs better across our six pillars.",
  },
  {
    tag: "Bonuses",
    question: "How do welcome bonuses actually work in practice?",
    answer:
      "A welcome bonus grants new customers a form of promotional credit — most commonly matched free bets or bonus funds — when they register and complete a qualifying deposit and bet. The headline figure is rarely what it appears. Wagering requirements dictate how many times you must bet the bonus before withdrawing winnings. Minimum qualifying odds, maximum stake caps, and short expiry windows compound the complexity. Our reviews break down every condition with plain-language analysis so there are no surprises.",
  },
  {
    tag: "Mobile",
    question: "Are these sites tested on mobile devices?",
    answer:
      "Yes — mobile performance is a scored pillar in our assessment model. We test every operator on real iOS and Android devices, not emulators, during live sporting events. We evaluate page load speeds under traffic conditions, in-play stability, navigation efficiency, and ease of accessing account management features including deposit limits and withdrawal requests. App availability, ratings, and last update dates are recorded for each operator.",
  },
  {
    tag: "Support",
    question: "Where can I get help if gambling is becoming a problem?",
    answer:
      "Free, confidential support is available 24 hours a day in the UK. The National Gambling Helpline — operated by GamCare — can be reached on 0808 8020 133 or via live chat at gamcare.org.uk. You can self-exclude simultaneously from all UKGC-licensed online gambling sites by registering with GAMSTOP at gamstop.co.uk — registration takes under five minutes. Every UKGC-licensed operator is legally required to act immediately on self-exclusion requests.",
  },
  {
    tag: "Updates",
    question: "How frequently is the ranking list refreshed?",
    answer:
      "We run a full re-evaluation of all listed operators every calendar month. In addition, we monitor UKGC licence amendments, regulatory decisions, and major product changes on an ongoing basis throughout the year. If an operator loses its licence or receives a material sanction, it is removed from the published list immediately — outside the monthly cycle. Scores are never frozen between cycles if a significant change occurs.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className="bg-surface py-14 md:py-20 px-4 section-sport"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-heading font-bold text-[11px] uppercase tracking-[0.18em] text-primary">
                FAQ
              </span>
            </div>
            <h2
              id="faq-heading"
              className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight uppercase tracking-tight text-balance"
            >
              Questions
              <br />
              Answered Straight
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-sans">
            Clear, direct answers about how we rank sites and how the UK sports betting market operates.
          </p>
        </div>

        {/* FAQ list */}
        <div className="divide-y divide-border border-t border-border">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className={`transition-colors ${isOpen ? "bg-card" : ""}`}>
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  id={`faq-q-${index}`}
                  className="w-full flex items-center justify-between gap-4 px-0 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {/* Tag */}
                    <span className="hidden sm:inline-flex flex-shrink-0 font-heading font-bold text-[9px] uppercase tracking-[0.1em] text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded-sm w-20 justify-center">
                      {item.tag}
                    </span>
                    <span className="font-heading font-bold text-[14px] md:text-[15px] text-foreground leading-snug text-pretty uppercase tracking-tight">
                      {item.question}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-colors duration-150 rounded-sm ${
                      isOpen
                        ? "border-primary bg-primary text-white"
                        : "border-border text-muted-foreground bg-card"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-${index}`}
                    role="region"
                    aria-labelledby={`faq-q-${index}`}
                    className="pb-5 pl-0 sm:pl-24"
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans border-l-2 border-primary/40 pl-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-[11px] text-muted-foreground leading-relaxed">
          18+ only · Gambling can be addictive · Please play responsibly ·{" "}
          <a
            href="/responsible-gambling"
            className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
          >
            Responsible Gambling Guide
          </a>
        </p>

      </div>
    </section>
  )
}
