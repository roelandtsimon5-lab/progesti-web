import { FinalPush } from "@/components/conversion/FinalPush";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { FeatureUseCaseTabs } from "@/components/features/FeatureUseCaseTabs";
import { ModuleConnectStrip } from "@/components/features/ModuleConnectStrip";
import { ModuleHero } from "@/components/features/ModuleHero";
import { ModulePager } from "@/components/features/ModulePager";
import { ModuleProductSection } from "@/components/features/ModuleProductSection";
import {
  getModuleTestimonial,
  ModuleProofBanner,
} from "@/components/features/ModuleProofBanner";
import { ModuleFaqHelp } from "@/components/features/ModuleFaqHelp";
import { ModuleTopNav } from "@/components/features/ModuleTopNav";
import { ModuleWhySection } from "@/components/features/ModuleWhySection";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import type { ModuleContent } from "@/lib/modules-content";
import { getModuleCreativeAssets, getModuleUi } from "@/lib/module-ui";
import { getModulePager, getModulePillar, pillarHubHref } from "@/lib/navigation";
import { cta } from "@/lib/cta";
import { modules, site } from "@/lib/site";

type Module = (typeof modules)[number];

type Props = {
  mod: Module;
  content: ModuleContent;
  slug: string;
};

export function ModuleLandingPage({ mod, content, slug }: Props) {
  const ui = getModuleUi(slug);
  const assets = getModuleCreativeAssets(slug);
  const pillar = getModulePillar(slug);
  const pager = getModulePager(slug);
  const testimonial = ui ? getModuleTestimonial(ui.testimonialId) : undefined;
  const related = content.relatedModuleSlugs
    ?.map((s) => modules.find((m) => m.slug === s))
    .filter(Boolean) as Module[] | undefined;

  const showcaseImage = assets?.showcase.src ?? content.image;
  const showcaseAlt = assets?.showcase.alt ?? content.imageAlt;
  const heroImage = assets?.hero.src ?? content.image;
  const heroAlt = assets?.hero.alt ?? content.imageAlt;

  const navSections = [
    { id: "produit", label: "Produit" },
    content.useCases?.length ? { id: "cas-usage", label: "Cas d'usage" } : null,
    testimonial ? { id: "preuve", label: "Avis" } : null,
    { id: "pourquoi", label: "Pourquoi" },
    related?.length ? { id: "ecosysteme", label: "Écosystème" } : null,
    { id: "faq", label: "FAQ" },
  ].filter(Boolean) as { id: string; label: string }[];

  return (
    <>
      <ModuleHero
        title={mod.title}
        slug={slug}
        pillar={content.pillar}
        lead={content.heroLead ?? mod.short}
        image={heroImage}
        imageAlt={heroAlt}
        heroQuote={ui?.heroQuote ?? mod.pain.replace(/\.$/, "")}
        stats={content.stats}
        showcaseImage={showcaseImage}
        showcaseAlt={showcaseAlt}
        heroMock={assets?.heroMock}
        showcaseMock={assets?.showcaseMock}
      />

      <ModuleTopNav
        pillarTitle={pillar?.title ?? "Module PROGESTI"}
        pillarItems={pillar?.items ?? []}
        activeSlug={slug}
        sections={navSections}
      />

      <ModuleProductSection
        moduleTitle={mod.title}
        heroImage={heroImage}
        showcaseImage={showcaseImage}
        showcaseImageAlt={showcaseAlt}
        benefits={content.benefits}
        workflow={content.workflow}
        useCase={content.useCases?.length ? undefined : content.useCases?.[0]}
        showcaseMock={assets?.showcaseMock}
        primaryMock={assets?.primaryMock}
      />

      {content.useCases?.length ? (
        <FeatureUseCaseTabs useCases={content.useCases} moduleTitle={mod.title} />
      ) : null}

      {testimonial ? (
        <ModuleProofBanner testimonial={testimonial} moduleTitle={mod.title} />
      ) : null}

      <ModuleWhySection
        moduleTitle={mod.title}
        slug={slug}
        pain={mod.pain}
        problemBody={content.problemBody}
        solutionBullets={content.solutionBullets}
        excelRows={content.excelComparison}
      />

      {related?.length ? (
        <ModuleConnectStrip
          moduleTitle={mod.title}
          slug={slug}
          intro={content.relatedIntro}
          modules={related.map((m) => ({ slug: m.slug, title: m.title, short: m.short }))}
        />
      ) : null}

      <section id="faq" className="section scroll-mt-36 bg-paper pb-12 lg:pb-10">
        <div className="container max-w-3xl">
          <h2 className="font-sans text-3xl font-extrabold text-brand-navy">Questions · {mod.title}</h2>
          <p className="mt-2 text-sm text-slate">Réponses courtes pour décider sereinement.</p>
          <div className="mt-8">
            <IndustryFaq items={content.faq} />
          </div>
          <ModuleFaqHelp moduleTitle={mod.title} slug={slug} />
        </div>
      </section>

      <ModulePager
        pillarTitle={pillar?.title ?? "Modules"}
        pillarHref={pillar ? pillarHubHref(pillar.title) : "/fonctionnalites"}
        prev={pager.prev}
        next={pager.next}
      />

      <FinalPush
        compact
        eventModule={slug}
        title={`Testez ${mod.title} dans PROGESTI`}
        lead={`149 € HT/mois · essai ${site.trialDays} jours sans CB · ${modules.length} modules inclus`}
      />
      <MobileCtaBar
        primary={{
          href: cta.trial,
          label: `Essai ${site.trialDays} jours`,
          variant: "trial",
          event: "trial_start",
          eventPayload: { cta: "mobile_sticky_trial", module: slug },
        }}
      />
    </>
  );
}
