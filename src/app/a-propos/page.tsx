import type { Metadata } from "next";
import Link from "next/link";
import { ClientLogoStrip } from "@/components/conversion/ClientLogoStrip";
import { FinalPush } from "@/components/conversion/FinalPush";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta, ctaLabels } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { socialProofStats } from "@/lib/testimonials";

export const metadata: Metadata = pageMeta({
  title: "À propos",
  description: `À propos de ${site.name} — logiciel de gestion pour entreprises de nettoyage, édité par ${site.company.legalName}.`,
  path: "/a-propos",
});

const values = [
  {
    title: "Métier d'abord",
    text: "Vocabulaire propreté : sites, vacations, parties communes, fin de chantier — pas un ERP généraliste déguisé.",
  },
  {
    title: "Prix public",
    text: "149 € HT/mois affiché. Pas de devis opaque, pas de module payant caché après signature.",
  },
  {
    title: "Support humain FR",
    text: `Équipe joignable au ${site.phone} — Toulouse (31), qui comprend planning et terrain.`,
  },
] as const;

export default function AProposPage() {
  return (
    <>
      <IndustryPageHero
        eyebrow="À propos · MSNE SAS"
        title="PROGESTI, conçu pour le terrain de la propreté"
        lead="Un logiciel simple et complet pour les entreprises de nettoyage — bureaux, syndics, professionnels, fin de chantier — qui veulent organiser le métier sans Excel ni WhatsApp comme système."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "À propos" },
        ]}
        trialEvent="about_trial"
        demoEvent="about_demo"
      />
      <section className="border-b border-blue-mist bg-white py-10">
        <div className="container">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            <li>
              <p className="font-display text-2xl font-extrabold text-blue-deep">
                {socialProofStats.headline}
              </p>
              <p className="text-xs text-slate">{socialProofStats.headlineSub}</p>
            </li>
            <li>
              <p className="font-display text-2xl font-extrabold text-blue-deep">
                {socialProofStats.rating}
                <span className="text-lg text-lime-cta">/5</span>
              </p>
              <p className="text-xs text-slate">satisfaction support</p>
            </li>
            <li>
              <p className="font-display text-2xl font-extrabold text-blue-deep">149 €</p>
              <p className="text-xs text-slate">HT/mois · tout inclus</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section bg-white pb-28 lg:pb-16">
        <div className="container grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep">Notre intention</h2>
            <p className="mt-3 text-slate">
              Donner aux dirigeants une vision claire : qui va où, ce qui a été fait, et ce qui
              doit être facturé — avec le vocabulaire du ménage professionnel.
            </p>
            <ul className="mt-8 grid gap-4">
              {values.map((v) => (
                <li
                  key={v.title}
                  className="rounded-[2px] border border-blue-mist/80 border-l-[3px] border-l-[#A8E300] bg-[#F5F8FB] p-4"
                >
                  <p className="font-display font-extrabold text-blue-deep">{v.title}</p>
                  <p className="mt-1 text-sm text-slate">{v.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate">
              Voir les{" "}
              <Link href="/temoignages" className="font-semibold text-blue-royal hover:underline">
                avis clients
              </Link>
              {" · "}
              <Link href="/solutions" className="font-semibold text-blue-royal hover:underline">
                solutions
              </Link>
              {" · "}
              <Link href="/blog" className="font-semibold text-blue-royal hover:underline">
                blog
              </Link>
            </p>
          </div>
          <div className="border-t border-blue-mist pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h2 className="font-display text-2xl font-extrabold text-blue-deep">Éditeur</h2>
            <div className="mt-4 rounded-[2px] bg-gradient-to-br from-blue-deep to-blue-royal p-6 text-white">
              <p className="font-display text-lg font-extrabold">{site.company.legalName}</p>
              <p className="mt-2 text-sm text-white/85">
                {site.company.address}
                <br />
                {site.company.city}
              </p>
              <p className="mt-4 text-xs text-white/60">
                SIREN {site.company.siren} · RCS {site.company.rcs} · Capital {site.company.capital}
              </p>
              <a
                className="mt-4 inline-block font-bold text-lime-cta hover:underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/logiciel-entreprise-nettoyage" variant="secondary">
                Découvrir le produit
              </ButtonLink>
              <ButtonLink href={cta.demo} eventPayload={{ cta: "about_demo" }}>
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <ClientLogoStrip />
      <FinalPush title="Rejoignez les entreprises qui structurent leur propreté" />
      <MobileCtaBar />
    </>
  );
}
