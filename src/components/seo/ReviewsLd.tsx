import { site } from "@/lib/site";

/**
 * SoftwareApplication structured data for SEO.
 * Note: No aggregateRating or reviews included — Progesti has no verified customer reviews yet.
 */
export function ReviewsLd() {
  const data = {
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
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
