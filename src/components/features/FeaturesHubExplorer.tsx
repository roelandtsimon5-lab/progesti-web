import { IndustryProductExplorer } from "@/components/industry/IndustryProductExplorer";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { cta } from "@/lib/cta";
import { defaultPillars } from "@/lib/industry/default";
import { site } from "@/lib/site";

export function FeaturesHubExplorer() {
  return (
    <section id="explorer" className="scroll-mt-36 border-t border-line bg-white py-14 md:py-16">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Aperçu interactif</p>
            <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
              Parcourez le produit comme sur la home
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
              Planning, marge, contrats, qualité — chaque pilier montre une interface contextualisée
              pour le métier de la propreté.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 md:mt-14">
          <IndustryProductExplorer pillars={defaultPillars} mockContext="default" />
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col items-center gap-3 text-center md:mt-12">
            <ButtonLink
              href={cta.trial}
              size="lg"
              variant="trial"
              className="!rounded-[2px] !px-8"
              event="trial_start"
              eventPayload={{ cta: "features_hub_explorer_trial" }}
            >
              Essai {site.trialDays} jours gratuit
            </ButtonLink>
            <p className="text-sm text-slate">Sans carte bancaire · 149 € HT/mois tout inclus</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
