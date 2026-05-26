"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShieldCheck, X } from "lucide-react"

export function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem("bebsCookieConsent")) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const handleChoice = (value: "accepted" | "essential") => {
    try {
      localStorage.setItem("bebsCookieConsent", value)
      localStorage.setItem("bebsCookieConsentDate", new Date().toISOString())
    } catch { /* silent */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie preferences — British Elite Betting Sites"
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-primary" aria-hidden="true" />

      <div className="bg-navy border-t border-white/10" style={{ boxShadow: "0 -4px 32px hsl(220 55% 10% / 0.7)" }}>
        <div className="container mx-auto max-w-6xl px-4 py-4 md:py-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">

            {/* Icon + text */}
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div
                className="w-9 h-9 bg-primary/15 border border-primary/30 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <ShieldCheck className="w-4.5 h-4.5 text-primary" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-heading font-bold text-sm text-white uppercase tracking-wide mb-0.5">
                  Cookie Preferences
                </p>
                <p className="text-xs text-white/50 leading-relaxed">
                  We use essential and analytics cookies to improve{" "}
                  <span className="font-semibold text-white/70">britishelitebettingsites.com</span>.
                  Analytics are optional. Read our{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-primary hover:underline underline-offset-2 font-medium"
                    aria-label="Read our Cookie Policy"
                  >
                    Cookie Policy
                  </Link>{" "}
                  for full details. UK GDPR compliant.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 flex-shrink-0" role="group" aria-label="Cookie consent choices">
              <button
                onClick={() => handleChoice("essential")}
                className="h-9 px-4 text-[11px] font-heading font-bold uppercase tracking-wider border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors rounded-sm bg-transparent"
                aria-label="Accept essential cookies only"
              >
                Essential Only
              </button>
              <button
                onClick={() => handleChoice("accepted")}
                className="h-9 px-6 text-[11px] font-heading font-bold uppercase tracking-wider bg-primary text-white hover:bg-primary/90 transition-colors rounded-sm flex items-center gap-1.5"
                aria-label="Accept all cookies"
              >
                Accept All
              </button>
              <button
                onClick={() => handleChoice("essential")}
                className="h-9 w-9 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8 transition-colors rounded-sm border border-white/15"
                aria-label="Dismiss cookie banner"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
