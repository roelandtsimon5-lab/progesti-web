import type { Metadata } from "next";
import Link from "next/link";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { defaultIndustryConfig } from "@/lib/industry";
import { cta } from "@/lib/cta";
import { faqItems, site, trialCopy } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "FAQ",
  description:
    `FAQ PROGESTI : ${trialCopy.label.toLowerCase()}, tarif 149 € HT/mois, mobile, migration Excel, support FR.`,
  path: "/faq",
});

/** FAQ hub — aligné homepage + questions décideur (site.faqItems). */
const allFaq = [
  ...defaultIndustryConfig.faq,
  ...faqItems.filter(
    (f) => !defaultIndustryConfig.faq.some((h) => h.q.startsWith("Combien coûte PROGESTI")),
  ),
];

export default function FaqPage() {
  return (
    <>
      <FaqPageLd items={allFaq} />
      <IndustryPageHero
        eyebrow="FAQ"
        title="Toutes les réponses avant de vous lancer"
        lead="Essai, tarif, mobile, migration, support — tout ce qu'il faut pour décider sereinement."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "FAQ" },
        ]}
        trialEvent="faq_hub_trial"
        demoEvent="faq_hub_demo"
      />
      <section className="section bg-white pb-28 lg:pb-16">
        <div className="container max-w-3xl">
          <IndustryFaq items={allFaq} />
          <div className="mt-10 rounded-[3px] border border-blue-mist bg-[#F5F8FB] p-6 text-center">
            <p className="font-display font-extrabold text-blue-deep">Une question reste sans réponse ?</p>
            <p className="mt-2 text-sm text-slate">
              Joignez l&apos;équipe au{" "}
              <a href={`tel:${site.phoneTel}`} className="font-bold text-blue-royal hover:underline">
                {site.phone}
              </a>
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact">Nous contacter</ButtonLink>
              <ButtonLink href={cta.trial} variant="secondary" event="trial_start" eventPayload={{ cta: "faq_contact_trial" }}>
                Essai {site.trialDays} jours
              </ButtonLink>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-slate">
            <Link href="/tarifs" className="font-semibold text-blue-royal hover:underline">
              Détail tarifs
            </Link>
            {" · "}
            <Link href="/fonctionnalites" className="font-semibold text-blue-royal hover:underline">
              Fonctionnalités
            </Link>
          </p>
        </div>
      </section>
      <FinalPush />
      <MobileCtaBar />
    </>
  );
}
