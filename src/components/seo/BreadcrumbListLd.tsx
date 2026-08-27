import { site } from "@/lib/site";

type Item = {
  name: string;
  path?: string;
};

type Props = {
  items: readonly Item[];
};

export function BreadcrumbListLd({ items }: Props) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: `${site.url}${item.path}` } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
    />
  );
}
