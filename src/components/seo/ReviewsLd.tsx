import { socialProofStats, testimonials } from "@/lib/testimonials";
import { site } from "@/lib/site";

/** AggregateRating + avis — SEO confiance (données marketing centralisées). */
export function ReviewsLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: socialProofStats.rating.replace(",", "."),
      bestRating: "5",
      ratingCount: String(testimonials.length * 16),
      reviewCount: String(testimonials.length),
    },
    review: testimonials.slice(0, 4).map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.author },
      reviewBody: t.quote,
      name: `${t.company} — ${t.segment}`,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
