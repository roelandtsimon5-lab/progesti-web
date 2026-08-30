import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  GtmConsentBootstrap,
  GtmHead,
  GtmNoscript,
  GtmPageviews,
} from "@/components/analytics/Gtm";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { StickyDesktopCta } from "@/components/layout/StickyDesktopCta";
import { env } from "@/lib/env";
import { site } from "@/lib/site";
import "./globals.css";

/** Single-family Inter — standard enterprise SaaS (Jobber / Stripe tier). */
const inter = Inter({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Logiciel de gestion pour entreprises de nettoyage`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  ...(env.googleSiteVerification
    ? { verification: { google: env.googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#012939",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${inter.variable} h-full`}>
      <head>
        <GtmHead />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <GtmNoscript />
        <GtmConsentBootstrap />
        <GtmPageviews />
        <a
          href="#contenu-principal"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-[2px] focus-visible:bg-brand-navy focus-visible:px-4 focus-visible:py-2 focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-cta"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyDesktopCta />
        <CookieConsent />
      </body>
    </html>
  );
}
