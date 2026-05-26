import type React from "react"
import type { Metadata } from "next"
import { Barlow, Barlow_Condensed } from "next/font/google"
import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { ConsentBanner } from "@/components/consent-banner"

const _barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
})

const _barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
})

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: `British Elite Betting Sites – Best UK Sportsbooks Ranked ${currentYear}`,
  description:
    "Discover the UK's elite betting sites ranked and reviewed by independent experts. Compare welcome offers, odds, features and more at britishelitebettingsites.com. Bet responsibly — 18+.",
  metadataBase: new URL("https://britishelitebettingsites.com"),
  keywords: [
    "best betting sites UK",
    "elite UK sportsbooks",
    "British elite betting sites",
    "online betting UK",
    "sports betting UK",
    "betting site reviews",
    "UK bookmakers ranked",
    "top UK sports betting",
  ],
  authors: [{ name: "British Elite Betting Sites" }],
  creator: "British Elite Betting Sites",
  publisher: "British Elite Betting Sites",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://britishelitebettingsites.com",
    siteName: "British Elite Betting Sites",
    title: `British Elite Betting Sites – Top UK Sportsbooks ${currentYear}`,
    description:
      `Find the UK's elite betting sites with expert reviews, verified odds, and exclusive welcome bonuses. Updated rankings for ${currentYear}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `British Elite Betting Sites – Top UK Sportsbooks ${currentYear}`,
    description: "Expert-ranked elite UK betting sites with the best odds, bonuses and features.",
  },
  alternates: {
    canonical: "https://britishelitebettingsites.com",
  },
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#f5f6f8",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${_barlow.variable} ${_barlowCondensed.variable} bg-background`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full bg-background">
          {children}
          <SiteFooter />
          <ConsentBanner />
        </div>
      </body>
    </html>
  )
}
