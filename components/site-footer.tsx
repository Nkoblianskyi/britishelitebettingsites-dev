import Link from "next/link"
import { Shield } from "lucide-react"

const footerLinks = [
  { label: "Privacy Policy",       href: "/privacy-policy" },
  { label: "Cookie Policy",        href: "/cookie-policy" },
  { label: "About Us",             href: "/about" },
  { label: "Responsible Gambling", href: "/responsible-gambling" },
]

const safetyOrgs = [
  {
    src:    "/gamble-aware.png",
    alt:    "BeGambleAware",
    href:   "https://www.begambleaware.org/",
    width:  130,
    height: 36,
  },
   {
    src:    "/gamstop.svg",
    alt:    "GamStop",
    href:   "https://www.gamstop.co.uk/",
    width:  100,
    height: 36,
  },
  {
    src:    "/gamcare.png",
    alt:    "GamCare",
    href:   "https://www.gamcare.org.uk/",
    width:  110,
    height: 36,
  },

  {
    src:    "/Gambling_Commission_logo.png",
    alt:    "UK Gambling Commission",
    href:   "https://www.gamblingcommission.gov.uk/",
    width:  120,
    height: 36,
  },
    {
    src:    "/gordon.png",
    alt:    "Gambling Therapy",
    href:   "https://www.gamblingtherapy.org/",
    width:  100,
    height: 36,
  },
 
]

function FooterLogoMark() {
  return (
    <svg width="34" height="38" viewBox="0 0 40 44" fill="none" aria-hidden="true">
      {/* Shield outline */}
      <path
        d="M20 2L4 8.5V22c0 9.4 6.8 17.8 16 20 9.2-2.2 16-10.6 16-20V8.5L20 2Z"
        fill="hsl(220 90% 48%)"
      />
      {/* Shield border highlight */}
      <path
        d="M20 4L6 10V22c0 8.6 6.2 16.3 14 18.6C27.8 38.3 34 30.6 34 22V10L20 4Z"
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.25"
        fill="none"
      />
      {/* Union Jack — horizontal bar */}
      <rect x="6" y="18.5" width="28" height="5" fill="white" />
      {/* Union Jack — vertical bar */}
      <rect x="17.5" y="8" width="5" height="26" fill="white" />
      {/* Red cross overlay — horizontal */}
      <rect x="6" y="19.5" width="28" height="3" fill="hsl(0 80% 50%)" />
      {/* Red cross overlay — vertical */}
      <rect x="18.5" y="8" width="3" height="26" fill="hsl(0 80% 50%)" />
      {/* Diagonal lines — white */}
      <path d="M6 8.5 L18 19.5 M22 22.5 L34 33" stroke="white" strokeWidth="3.5" strokeLinecap="butt" />
      <path d="M34 8.5 L22 19.5 M18 22.5 L6 33" stroke="white" strokeWidth="3.5" strokeLinecap="butt" />
      {/* Diagonal lines — red thin */}
      <path d="M6 8.5 L18 19.5 M22 22.5 L34 33" stroke="hsl(0 80% 50%)" strokeWidth="1.5" strokeLinecap="butt" />
      <path d="M34 8.5 L22 19.5 M18 22.5 L6 33" stroke="hsl(0 80% 50%)" strokeWidth="1.5" strokeLinecap="butt" />
      {/* Gold inner shield accent */}
      <path
        d="M20 38.5L10 29V16L20 12.5L30 16V29L20 38.5Z"
        fill="none"
        stroke="hsl(45 100% 58%)"
        strokeWidth="0.7"
        strokeOpacity="0.45"
      />
    </svg>
  )
}

function FooterLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 group mb-4"
      aria-label="British Elite Betting Sites — return to homepage"
    >
      <div className="flex-shrink-0 drop-shadow-md transition-opacity duration-200 group-hover:opacity-85">
        <FooterLogoMark />
      </div>
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-0">
          <span className="font-heading font-extrabold text-[15px] tracking-tight text-white uppercase">British</span>
          <span
            className="font-heading font-extrabold text-[15px] tracking-tight uppercase ml-1.5"
            style={{ color: "hsl(45 100% 58%)" }}
          >
            Elite
          </span>
        </div>
        <span className="font-heading font-bold text-[9px] tracking-[0.22em] text-white/40 uppercase mt-0.5">
          Betting Sites
        </span>
      </div>
    </Link>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="w-full bg-navy text-navy-foreground"
      aria-label="British Elite Betting Sites site footer"
    >
      {/* Main body — 4-column grid on desktop */}
      <div className="border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.6fr] gap-10 lg:gap-8">

            {/* Col 1 — Brand */}
            <div>
              <FooterLogo />
              <p className="text-[12px] text-white/50 leading-relaxed mt-1 max-w-xs font-sans">
                British Elite Betting Sites provides independent expert rankings of UKGC-licensed UK sportsbooks. We do not operate a bookmaker. All rankings are produced by our editorial team with no commercial influence on scores or placement.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-[11px] text-white/40 tracking-wide font-sans">UKGC Licensed Operators Only</span>
              </div>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/30 mb-4">
                Pages
              </p>
              <nav className="flex flex-col gap-3" aria-label="Footer site navigation">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-white/60 hover:text-primary transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 3 — Site info */}
            <div>
              <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/30 mb-4">
                About
              </p>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5 font-heading">Domain</p>
                  <p className="text-[13px] text-white/60 font-heading font-semibold">britishelitebettingsites.com</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5 font-heading">Jurisdiction</p>
                  <p className="text-[13px] text-white/60 font-sans">United Kingdom</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5 font-heading">Regulator</p>
                  <p className="text-[13px] text-white/60 font-sans">UKGC</p>
                </div>
              </div>
            </div>

            {/* Col 4 — Site info extras */}
            <div>
              <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/30 mb-4">
                Commitment
              </p>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5 font-heading">Standard</p>
                  <p className="text-[13px] text-white/60 font-sans">Independent Editorial</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5 font-heading">Age Limit</p>
                  <p className="text-[13px] font-heading font-bold" style={{ color: "hsl(0 80% 55%)" }}>18+ Only</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5 font-heading">Updated</p>
                  <p className="text-[13px] text-white/60 font-sans">{new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Safer Gambling organisations — full-width row */}
      <div className="border-b border-white/10 bg-black/15">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="font-heading font-bold text-[10px] uppercase tracking-[0.18em] text-white/30 flex-shrink-0">
              Safer Gambling
            </span>
            <div
              className="flex flex-row flex-wrap items-center gap-2"
              role="list"
              aria-label="Safer gambling organisations"
            >
              {safetyOrgs.map(({ src, alt, href, width, height }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-centerrounded-sm"
                  aria-label={`${alt} — opens in new tab`}
                  role="listitem"
                >
                  <img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="object-contain"
                    style={{ maxHeight: 24, maxWidth: width }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="bg-black/20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-5">
          <p className="text-[11px] text-white/38 leading-relaxed mb-3 font-sans">
            <span className="text-destructive font-semibold">18+</span> · britishelitebettingsites.com is an independent betting comparison and information service. We may receive affiliate commission when users visit operators via our links — this does not affect our editorial ratings or rankings. All featured operators hold a valid UKGC licence. Betting involves financial risk and is not suitable for all adults. Please gamble responsibly. If you are concerned about your gambling habits, visit{" "}
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity underline underline-offset-2"
              aria-label="BeGambleAware.org — opens in new tab"
            >
              BeGambleAware.org
            </a>{" "}
            or call the free helpline on{" "}
            <a href="tel:08088020133" className="text-primary hover:opacity-80 underline underline-offset-2">
              0808 8020 133
            </a>.
          </p>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/8 pt-3 text-[10px] text-white/25 uppercase tracking-widest font-heading">
            <span>&copy; {year} britishelitebettingsites.com. All rights reserved.</span>
            <span
              className="text-destructive font-heading font-bold border border-destructive/40 px-2 py-0.5 bg-destructive/10"
              aria-label="Adults 18 and over only"
            >
              18+
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}
