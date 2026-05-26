"use client"

import Link from "next/link"

function EliteLogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 44"
      fill="none"
      aria-hidden="true"
    >
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
      {/* Diagonal lines — Union Jack diagonals (white) */}
      <path d="M6 8.5 L18 19.5 M22 22.5 L34 33" stroke="white" strokeWidth="3.5" strokeLinecap="butt" />
      <path d="M34 8.5 L22 19.5 M18 22.5 L6 33" stroke="white" strokeWidth="3.5" strokeLinecap="butt" />
      {/* Diagonal lines — red thin overlay */}
      <path d="M6 8.5 L18 19.5 M22 22.5 L34 33" stroke="hsl(0 80% 50%)" strokeWidth="1.5" strokeLinecap="butt" />
      <path d="M34 8.5 L22 19.5 M18 22.5 L6 33" stroke="hsl(0 80% 50%)" strokeWidth="1.5" strokeLinecap="butt" />
      {/* Shield bottom point gold accent line */}
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

function SiteWordmark() {
  return (
    <div className="flex flex-col leading-none select-none">
      <div className="flex items-baseline gap-0">
        <span className="font-heading font-extrabold text-[16px] md:text-[18px] tracking-tight text-white uppercase">
          British
        </span>
        <span
          className="font-heading font-extrabold text-[16px] md:text-[18px] tracking-tight uppercase ml-1.5"
          style={{ color: "hsl(45 100% 58%)" }}
        >
          Elite
        </span>
      </div>
      <span className="font-heading font-bold text-[9px] tracking-[0.22em] text-white/40 uppercase mt-0.5">
        Betting Sites
      </span>
    </div>
  )
}

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-navy border-b border-white/8"
      style={{ boxShadow: "0 1px 0 hsl(220 90% 48% / 0.4), 0 2px 16px hsl(220 55% 10% / 0.5)" }}
      role="banner"
    >
      {/* Thin blue accent bar at top */}
      <div className="h-[3px] w-full bg-primary" aria-hidden="true" />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-13 py-2">

          {/* Logo + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="British Elite Betting Sites — return to homepage"
          >
            <div className="flex-shrink-0 transition-all duration-200 group-hover:opacity-85 drop-shadow-md">
              <EliteLogoMark size={38} />
            </div>
            <SiteWordmark />
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 border-l border-white/15 pl-4">
              <img
                src="/flag.png"
                alt="United Kingdom flag"
                className="h-3.5 w-auto rounded-[2px] object-cover"
              />
              <span className="font-sans text-[10px] font-semibold text-white/40 tracking-[0.12em] uppercase">
                britishelitebettingsites.com
              </span>
            </div>
            <span
              className="font-heading font-bold text-[11px] text-white border border-destructive/50 px-2.5 py-1 bg-destructive/12 uppercase tracking-widest rounded-sm"
              aria-label="Adults 18 and over only"
            >
              18+
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}
