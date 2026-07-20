import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Gtm } from "@/components/analytics/Gtm";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
  provider: {
    "@type": "Organization",
    name: site.company.legalName,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.company.address,
      addressLocality: "Tournefeuille",
      postalCode: "31170",
      addressCountry: "FR",
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Gtm />
        <Header />
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
