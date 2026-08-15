import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  GtmConsentBootstrap,
  GtmHead,
  GtmNoscript,
  GtmPageviews,
} from "@/components/analytics/Gtm";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { env } from "@/lib/env";
import { site } from "@/lib/site";
import "./globals.css";

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

const provider = {
  "@type": "Organization" as const,
  name: site.company.legalName,
  url: site.url,
  email: site.email,
  ...(site.phone ? { telephone: site.phone } : {}),
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: site.company.address,
    addressLocality: "Tournefeuille",
    postalCode: "31170",
    addressCountry: "FR",
  },
  ...(site.sameAs.length > 0 ? { sameAs: [...site.sameAs] } : {}),
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  description: site.description,
  url: site.url,
  offers: {
    "@type": "Offer",
    price: "29.99",
    priceCurrency: "EUR",
  },
  provider,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${GeistSans.variable} ${GeistMono.variable} h-full`}>
      <head>
        <GtmHead />
      </head>
      <body className="flex min-h-full flex-col antialiased group/body">
        <GtmNoscript />
        <GtmConsentBootstrap />
        <GtmPageviews />
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-blue-deep focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <div className="group-has-[.home-dark]/body:hidden">
          <Header />
        </div>
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
        <div className="group-has-[.home-dark]/body:hidden">
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
