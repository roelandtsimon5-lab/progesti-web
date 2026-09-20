import { IndustryLanding } from "@/components/industry/IndustryLanding";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { BreadcrumbListLd } from "@/components/seo/BreadcrumbListLd";
import type { MarketingPageEntry } from "@/lib/marketing/espace-vert-pages";
import { site } from "@/lib/site";

type Props = {
  entry: MarketingPageEntry;
};

function verticalSoftwareDescription(path: string): string {
  if (path.startsWith("/securite") || path.startsWith("/logiciel-securite")) {
    return "Logiciel de gestion pour sociétés de sécurité privée et de gardiennage : vacations, rondes, preuves de présence et facturation du réalisé.";
  }
  return "Logiciel de gestion pour entreprises d’espaces verts et paysagistes : planning multi-sites, pointage terrain, preuves de passage et facturation du réalisé.";
}

/** Rendu commun pages marketing EV / Sécurité (séparées de la propreté). */
export function MarketingVerticalPage({ entry }: Props) {
  const url = `${site.url}${entry.path}`;
  const crumbs = entry.config.breadcrumbs ?? [];
  return (
    <>
      <SoftwareApplicationLd
        url={url}
        description={verticalSoftwareDescription(entry.path)}
      />
      <FaqPageLd items={[...entry.config.faq]} />
      {crumbs.length > 0 ? (
        <BreadcrumbListLd
          items={crumbs.map((c) => ({
            name: c.label,
            path: c.href,
          }))}
        />
      ) : null}
      <IndustryLanding config={entry.config} />
    </>
  );
}
