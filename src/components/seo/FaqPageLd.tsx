type FaqItem = { q: string; a: string };

type Props = {
  items: FaqItem[];
};

/**
 * FAQPage JSON-LD schema for FAQ sections.
 * See https://schema.org/FAQPage
 */
export function FaqPageLd({ items }: Props) {
  const faqPageLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }}
    />
  );
}
