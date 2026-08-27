import { site } from "@/lib/site";

type Props = {
  name: string;
  description: string;
  path: string;
};

export function WebPageLd({ name, description, path }: Props) {
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${site.url}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    about: {
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
    />
  );
}
