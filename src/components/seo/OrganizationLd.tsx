import { site } from "@/lib/site";

/** Organization NAP — source unique `site` / `site.company` (siège Kbis). */
export const organizationLd = {
  "@type": "Organization" as const,
  name: site.name,
  legalName: site.company.legalName,
  url: site.url,
  email: site.email,
  ...(site.phoneTel
    ? { telephone: site.phoneTel }
    : site.phone
      ? { telephone: site.phone }
      : {}),
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: site.company.address,
    addressLocality: site.company.addressLocality,
    postalCode: site.company.postalCode,
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
