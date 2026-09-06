import { plans, site } from "@/lib/site";
import { organizationLd } from "@/components/seo/OrganizationLd";

type Props = {
  /** Custom URL for this page. Defaults to site.url (homepage). */
  url?: string;
};

/**
 * Renders SoftwareApplication JSON-LD schema.
 * Include only on product pages: homepage, /logiciel-*, /fonctionnalites*,
 * /solutions*, /tarifs, /essai-gratuit, /demo, /alternative-*.
 */
export function SoftwareApplicationLd({ url }: Props = {}) {
  const softwareApplicationLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: site.description,
    url: url ?? site.url,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: String(plans[0].monthly),
      highPrice: String(plans[2].monthly),
      priceCurrency: "EUR",
      offerCount: plans.length,
    },
    provider: organizationLd,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
    />
  );
}
