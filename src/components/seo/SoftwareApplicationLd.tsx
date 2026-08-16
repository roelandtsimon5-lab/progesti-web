import { site } from "@/lib/site";

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

const softwareApplicationLd = {
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

/**
 * Renders SoftwareApplication JSON-LD schema.
 * Include only on product pages: homepage, /logiciel-*, /fonctionnalites*,
 * /solutions*, /tarifs, /essai-gratuit, /demo, /alternative-*.
 */
export function SoftwareApplicationLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
    />
  );
}
