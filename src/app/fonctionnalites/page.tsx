import Link from "next/link";
import { FinalPush } from "@/components/conversion/FinalPush";
import { ClientLogoStrip } from "@/components/conversion/ClientLogoStrip";
import { TestimonialsSection } from "@/components/conversion/TestimonialsSection";
import { FeaturesHubFlow } from "@/components/features/FeaturesHubFlow";
import { FeaturesHubExplorer } from "@/components/features/FeaturesHubExplorer";
import { FeaturesHubHero } from "@/components/features/FeaturesHubHero";
import { FeaturesHubModules } from "@/components/features/FeaturesHubModules";
import { IndustryHelpRail } from "@/components/industry/IndustryHelpRail";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { BreadcrumbListLd } from "@/components/seo/BreadcrumbListLd";
import { cta } from "@/lib/cta";
import { productMegaMenu } from "@/lib/navigation";
import { pageMeta } from "@/lib/seo";
import { modules, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Fonctionnalités",
  description:
    "Toutes les fonctionnalités PROGESTI pour piloter une entreprise de nettoyage : planning, RH, facturation, terrain.",
  path: "/fonctionnalites",
});

export default function FonctionnalitesPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <BreadcrumbListLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Fonctionnalités" },
        ]}
      />
      <FeaturesHubHero />
      <FeaturesHubFlow />
      <FeaturesHubExplorer />
      <TestimonialsSection limit={2} showStats={false} />
      <FeaturesHubModules columns={productMegaMenu.columns} />

      <section className="border-t border-line bg-paper py-12 md:py-14">
        <div className="container">
          <Reveal>
            <div className="overflow-hidden rounded-[2px] border border-line bg-brand-navy p-8 text-white md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-lime-cta">
                    Tarif unique · prix public
                  </p>
                  <p className="mt-2 font-sans text-2xl font-extrabold">
                    149 € HT/mois · {modules.length} modules · 5 utilisateurs
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Essai {site.trialDays} jours sans CB · support {site.phone}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3">
                  <ButtonLink
                    href={cta.trial}
                    variant="trial"
                    className="!rounded-[2px]"
                    event="trial_start"
                    eventPayload={{ cta: "features_hub_bottom_trial" }}
                  >
                    Essai gratuit
                  </ButtonLink>
                  <ButtonLink href="/tarifs" variant="outline-white" className="!rounded-[2px]">
                    Voir les tarifs
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
          <p className="mt-8 text-center text-sm text-slate">
            Voir aussi nos{" "}
            <Link href="/solutions" className="font-semibold text-brand-navy-soft hover:underline">
              solutions par métier
            </Link>{" "}
            ·{" "}
            <Link href="/comparatifs" className="font-semibold text-brand-navy-soft hover:underline">
              comparatifs
            </Link>{" "}
            ·{" "}
            <Link href="/blog" className="font-semibold text-brand-navy-soft hover:underline">
              blog
            </Link>
          </p>
        </div>
      </section>

      <ClientLogoStrip />
      <FinalPush title="Pilotez toute votre activité depuis PROGESTI" />
      <IndustryHelpRail />
      <MobileCtaBar />
    </>
  );
}
