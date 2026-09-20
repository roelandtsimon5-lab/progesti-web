import { plans, site } from "@/lib/site";
import { organizationLd } from "@/components/seo/OrganizationLd";

type Props = {
  /** Absolute page URL. Defaults to site.url (homepage). */
  url?: string;
  /** Pathname alternative to `url`, e.g. `/tarifs`. */
  path?: string;
  /** Description JSON-LD (sinon site.description — propreté). */
  description?: string;
  /** Nom affiché (sinon site.name). */
  name?: string;
};

/**
 * Renders SoftwareApplication JSON-LD schema.
 * Include only on product pages: homepage, /logiciel-*, /fonctionnalites*,
 * /solutions*, /tarifs, /essai-gratuit, /demo, /alternative-*, verticales marketing.
 */
export function SoftwareApplicationLd({
  url,
  path,
  description,
  name,
}: Props = {}) {
  const resolvedUrl =
    url ??
    (path ? (path === "/" ? site.url : `${site.url}${path}`) : site.url);

  const softwareApplicationLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name ?? site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: description ?? site.description,
    url: resolvedUrl,
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
