import { site } from "@/lib/site";

type Props = {
  name: string;
  description: string;
  price: number;
  url: string;
};

export function OfferLd({ name, description, price, url }: Props) {
  const offerLd = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name,
    description,
    price: String(price),
    priceCurrency: "EUR",
    url,
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: site.company.legalName,
      url: site.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(offerLd) }}
    />
  );
}
