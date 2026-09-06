import { site } from "@/lib/site";

/** Parse `site.company.city` ("31000 Toulouse") → postal + locality. */
function parseCompanyCity(city: string): { postalCode: string; addressLocality: string } {
  const match = city.match(/^(\d{5})\s+(.+)$/);
  if (match) {
    return { postalCode: match[1], addressLocality: match[2] };
  }
  return { postalCode: "", addressLocality: city };
}

const { postalCode, addressLocality } = parseCompanyCity(site.company.city);

/** Organization NAP — source unique `site` / `site.company`. */
export const organizationLd = {
  "@type": "Organization" as const,
  name: site.name,
  legalName: site.company.legalName,
  url: site.url,
  email: site.email,
  ...(site.phoneTel ? { telephone: site.phoneTel } : site.phone ? { telephone: site.phone } : {}),
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: site.company.address,
    addressLocality,
    ...(postalCode ? { postalCode } : {}),
    addressCountry: "FR",
  },
  ...(site.sameAs.length > 0 ? { sameAs: [...site.sameAs] } : {}),
};

/** Standalone Organization JSON-LD (NAP). */
export function OrganizationLd() {
  const data = {
    "@context": "https://schema.org",
    ...organizationLd,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
