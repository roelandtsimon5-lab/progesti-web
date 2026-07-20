import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Lead, Section } from "@/components/ui/Section";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { PricingTable } from "@/components/pricing/PricingTable";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqItems, modules, site, solutions, trustBadges } from "@/lib/site";
import { cta } from "@/lib/cta";

export const metadata: Metadata = {
  title: "V2 — Archive visuelle (refonte juillet 2026)",
  description: "Copie archivée de la homepage PROGESTI V2, conservée comme référence avant la refonte V3.",
  robots: { index: false, follow: false },
};

const journey = [
  {
    step: "01",
    title: "Planifier",
    text: "Sites, fréquences, agents titulaires et backups — un planning métier lisible.",
  },
  {
    step: "02",
    title: "Pointer",
    text: "Pointage mobile et bons d’intervention : la preuve terrain, sans papier perdu.",
  },
  {
    step: "03",
    title: "Facturer",
    text: "Du réalisé à la facture, sans ressaisie Excel ni relances chaotiques.",
  },
];

const compareRows = [
  {
    label: "Planning agents / sites",
    before: "Excel + messages perdus",
    after: "Planning métier clair",
  },
  {
    label: "Preuve terrain",
    before: "Photos éparpillées",
    after: "Pointage + bons",
  },
  {
    label: "Facturation",
    before: "Saisie manuelle tardive",
    after: "Liée au réalisé",
  },
  {
    label: "Vision d’activité",
    before: "Fichiers multiples",
    after: "Cockpit temps réel",
  },
];

const featuredModules = modules.slice(0, 6);

export default function V2ArchiveHomePage() {
  const univers = solutions.filter((s) => s.slug !== "auto-entrepreneurs");

  return (
    <>
      <div className="archive-banner">
        Archive design V2 — juillet 2026 ·{" "}
        <Link href="/" className="underline underline-offset-2">
          Voir le site V3
        </Link>
      </div>

      <section className="relative min-h-[min(92vh,52rem)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-mockup-opt.webp"
            alt="Agent de propreté et organisation terrain — logiciel PROGESTI"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#101c28]/92 via-[#152230]/78 to-[#152230]/35"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#101c28]/70 via-transparent to-transparent"
            aria-hidden
          />
        </div>

        <div className="container relative flex min-h-[min(92vh,52rem)] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-20">
          <div className="anim-rise max-w-2xl text-white">
            <p className="font-display text-sm font-bold uppercase tracking-[0.28em] text-emerald md:text-base">
              {site.name}
            </p>
            <h1 className="mt-4 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-white md:text-[3.35rem] lg:text-[3.6rem]">
              Le logiciel qui organise votre nettoyage professionnel
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
              Bureaux, syndics, locaux pros et fin de chantier — du planning au pointage jusqu’à
              la facture. Essai 2 mois sans carte bancaire.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={cta.trialApp}
                size="lg"
                event="trial_start"
                eventPayload={{ cta: "v2_archive_hero" }}
              >
                Essai gratuit 2 mois
              </ButtonLink>
              <ButtonLink
                href={cta.demo}
                size="lg"
                variant="white"
                eventPayload={{ cta: "v2_archive_demo" }}
              >
                Voir la démo
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section atmosphere>
        <div className="container">
          <Reveal>
            <Eyebrow>Univers métier</Eyebrow>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold md:text-4xl">
              Pour qui organisez-vous le ménage ?
            </h2>
            <Lead className="mt-4">
              Quatre contextes terrain. Un même fil : planifier, pointer, facturer.
            </Lead>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {univers.map((s, i) => (
              <Reveal key={s.slug} delayMs={i * 60}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group block border-t border-line pt-6 transition"
                >
                  <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-petrol">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-ink transition group-hover:text-emerald-dark">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-md text-muted">{s.lead}</p>
                  <span className="mt-4 inline-block text-sm font-bold text-emerald-dark underline-offset-4 group-hover:underline">
                    Voir la solution →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <Reveal>
            <Eyebrow>Parcours produit</Eyebrow>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold md:text-4xl">
              Planning → terrain → facture
            </h2>
            <Lead className="mt-4">
              Trois temps métier. Une seule source de vérité — plus d’Excel ni de fils WhatsApp
              comme outil de structure.
            </Lead>
          </Reveal>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {journey.map((j, i) => (
              <Reveal key={j.step} delayMs={i * 80}>
                <li>
                  <p className="font-display text-4xl font-extrabold text-emerald/40">{j.step}</p>
                  <h3 className="mt-3 text-xl font-bold">{j.title}</h3>
                  <p className="mt-2 text-muted">{j.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-14 overflow-hidden border border-line bg-white">
            <Image
              src="/dashboard-mockup-opt.webp"
              alt="Tableau de bord PROGESTI — suivi d’activité nettoyage"
              width={1200}
              height={720}
              className="h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </Section>

      <Section atmosphere tight>
        <div className="container">
          <Reveal>
            <Eyebrow>Avant / après</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Remplacer le chaos opérationnel
            </h2>
            <Lead className="mt-4">
              Excel et WhatsApp restent utiles — pas comme système de gestion.
            </Lead>
          </Reveal>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 pr-4 font-display font-bold text-ink">Sujet</th>
                  <th className="py-3 pr-4 font-display font-bold text-muted">Avant</th>
                  <th className="py-3 font-display font-bold text-emerald-dark">Avec PROGESTI</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-b border-line/70">
                    <td className="py-4 pr-4 font-semibold text-ink">{row.label}</td>
                    <td className="py-4 pr-4 text-muted">{row.before}</td>
                    <td className="py-4 font-semibold text-ink">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <Reveal>
            <Eyebrow>Modules</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Tout le métier, inclus</h2>
            <Lead className="mt-4">
              Planning, RH, facturation, stock, terrain — dans chaque offre, dès 29,99 € HT/mois.
            </Lead>
          </Reveal>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredModules.map((m, i) => (
              <Reveal key={m.slug} delayMs={i * 40}>
                <li className="border-t border-line pt-5">
                  <Link href={`/fonctionnalites/${m.slug}`} className="group block">
                    <h3 className="font-display text-lg font-bold text-ink group-hover:text-emerald-dark">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{m.short}</p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section atmosphere id="tarifs">
        <div className="container">
          <Reveal>
            <Eyebrow>Tarifs</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Prix publics, tout inclus</h2>
            <Lead className="mt-4">
              Starter, Pro ou Premium — mêmes modules. Essai 2 mois sans CB.
            </Lead>
          </Reveal>
          <div className="mt-12">
            <PricingTable />
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white md:text-4xl">
              Archive V2 — ne pas indexer
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/" size="lg" variant="white">
                Retour au site V3
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section atmosphere>
        <div className="container max-w-3xl">
          <FaqAccordion items={faqItems.slice(0, 3)} />
        </div>
      </Section>

      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCtaBar />
    </>
  );
}
