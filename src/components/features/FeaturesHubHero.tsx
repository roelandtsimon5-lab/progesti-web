import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroSocialProof } from "@/components/conversion/TestimonialsSection";
import { cta, ctaLabels } from "@/lib/cta";
import { getModuleCreativeAssets } from "@/lib/creative-assets";
import { modules, site } from "@/lib/site";

const hubMosaicSlugs = ["planification", "pointage", "clients", "facturation"] as const;

export function FeaturesHubHero() {
  return (
    <section className="industry-hero-bg relative overflow-hidden">
      <div className="container relative grid items-center gap-10 pb-8 pt-10 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-12 lg:pb-10 lg:pt-12">
        <div className="industry-hero-rise relative z-10 max-lg:order-2">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Fonctionnalités" },
            ]}
            dark
          />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-lime-cta/90">
            Produit · {modules.length} modules · 149 € HT/mois
          </p>
          <h1 className="mt-3 font-sans text-[1.85rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[2.5rem] lg:text-[2.75rem]">
            Tout le métier de la propreté,{" "}
            <span className="text-lime-cta">dans un seul logiciel</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/78 md:text-[1.05rem]">
            Planning, pointage, devis, facturation, RH, CRM et rentabilité — inclus dès le premier
            jour. Essai {site.trialDays} jours sans carte bancaire.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={cta.trial}
              size="lg"
              variant="trial"
              className="!rounded-[2px] !px-8 !py-3.5 !text-base !font-bold"
              event="trial_start"
              eventPayload={{ cta: "features_hub_trial" }}
            >
              Essai {site.trialDays} jours gratuit
            </ButtonLink>
            <ButtonLink
              href={cta.demo}
              size="lg"
              variant="outline-white"
              className="!rounded-[2px] !border-white/40 !px-8 !py-3.5 !text-base !font-bold"
              eventPayload={{ cta: "features_hub_demo" }}
            >
              {ctaLabels.demoGate}
            </ButtonLink>
          </div>
          <HeroSocialProof />
        </div>

        <div className="industry-hero-rise industry-hero-rise-delay relative max-lg:order-1 max-lg:-mx-4 max-lg:w-[calc(100%+2rem)]">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {hubMosaicSlugs.map((slug, i) => {
              const mod = modules.find((m) => m.slug === slug);
              const assets = getModuleCreativeAssets(slug);
              const shot = assets?.hero;
              if (!mod || !shot) return null;
              return (
              <Link
                key={slug}
                href={`/fonctionnalites/${slug}`}
                className={`group relative block overflow-hidden rounded-[2px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition hover:border-lime-cta/50 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] ${
                  i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  priority={i === 0}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
                <span className="absolute bottom-2 left-2 rounded-[2px] bg-brand-navy/85 px-2 py-1 text-[10px] font-bold text-white sm:text-xs">
                  {mod.title}
                </span>
                <span className="absolute bottom-2 right-2 rounded-[2px] bg-lime-cta px-2 py-0.5 text-[10px] font-extrabold text-brand-navy opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </Link>
            );
            })}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="container py-5">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4">
          {[
            [`${site.trialDays} jours`, "d'essai gratuit"],
            ["149 €", "HT/mois tout inclus"],
            [`${modules.length}`, "modules inclus"],
            ["0", "module payant en plus"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-sans text-xl font-extrabold text-lime-cta md:text-2xl">{value}</p>
              <p className="mt-0.5 text-xs font-medium text-white/65 sm:text-sm">{label}</p>
            </div>
          ))}
          </div>
          <p className="mt-4 text-center md:text-left">
          <a
            href="#explorer"
            className="text-sm font-bold text-white/75 underline-offset-4 hover:text-lime-cta hover:underline"
          >
            Explorer le produit en direct ↓
          </a>
        </p>
        </div>
      </div>

      <div className="industry-hero-wave" aria-hidden />
    </section>
  );
}
