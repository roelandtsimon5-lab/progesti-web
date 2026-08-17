import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { cta } from "@/lib/cta";

export function HomeNew() {
  return (
    <>
      {/* HERO — Navy two-column */}
      <section className="relative overflow-hidden bg-blue-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        <div className="container relative grid items-center gap-10 pb-16 pt-12 lg:grid-cols-2 lg:gap-16 lg:pb-20 lg:pt-16">
          <div>
            <p className="mb-6 font-display text-xs font-bold uppercase tracking-[0.18em] text-[#B8F5D4]">
              Tournefeuille · Entreprises de propreté
            </p>
            
            <h1 className="font-display text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-white md:text-[3.25rem] lg:text-[3.5rem]">
              Gérez votre entreprise de nettoyage depuis un seul logiciel.
            </h1>
            
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
              Planning, salariés, clients, pointage terrain, devis et facturation. 
              Tout centralisé pour les entreprises de propreté.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink
                href={cta.demo}
                size="lg"
                eventPayload={{ cta: "home_hero_demo" }}
              >
                Demander une démo
              </ButtonLink>
              <ButtonLink
                href="#produit"
                size="lg"
                variant="outline-white"
                eventPayload={{ cta: "home_hero_scroll" }}
              >
                Voir le produit
              </ButtonLink>
            </div>

            <p className="mt-8 text-sm text-white/70">
              Essai 7 jours · 149 € HT/mois · 05 82 95 09 19
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
              <Image
                src="/screen-passages.webp"
                alt="Interface PROGESTI — Planning des passages"
                width={800}
                height={500}
                priority
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BAR */}
      <section className="border-b border-blue-mist/60 bg-white py-6">
        <div className="container text-center">
          <p className="text-lg text-slate">
            <span className="italic">« Fait par des gens du nettoyage, pas par une usine à logiciels. »</span>
            <span className="mx-3 text-blue-mist">·</span>
            <span className="font-display font-bold text-blue-deep">{site.company.legalName}</span>
            <span className="mx-3 text-blue-mist">·</span>
            <span>Support FR</span>
          </p>
        </div>
      </section>

      {/* ZIGZAG — Planifier / Pointer / Facturer */}
      <section className="bg-paper" id="produit">
        {/* Planifier */}
        <div className="section">
          <div className="container grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="eyebrow">Planifier</p>
                <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
                  Visualisez et gérez vos passages
                </h2>
                <p className="mt-4 text-lg text-slate">
                  Affectez vos agents aux sites, gérez les récurrences et 
                  suivez les passages validés en temps réel.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Vue calendrier par agent ou par site", "Gestion des récurrences", "Statuts en temps réel"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate">
                      <span className="mt-0.5 text-green-action">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="overflow-hidden rounded-2xl border border-blue-mist/60 shadow-[0_16px_50px_rgba(11,61,110,0.1)]">
                <Image
                  src="/screen-passages.webp"
                  alt="Interface Planning PROGESTI"
                  width={700}
                  height={440}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pointer */}
        <div className="section">
          <div className="container grid items-center gap-12 lg:grid-cols-2">
            <Reveal delayMs={100} className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-blue-mist/60 shadow-[0_16px_50px_rgba(11,61,110,0.1)]">
                <Image
                  src="/screen-telegestion.webp"
                  alt="Interface Télégestion PROGESTI"
                  width={700}
                  height={440}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <div>
                <p className="eyebrow">Pointer</p>
                <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
                  Suivez le terrain en temps réel
                </h2>
                <p className="mt-4 text-lg text-slate">
                  Vos agents pointent via l'app mobile. Départ, arrivée, 
                  géolocalisation — tout remonte automatiquement.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Pointage mobile Android & iOS", "Géolocalisation des interventions", "Historique complet"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate">
                      <span className="mt-0.5 text-green-action">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Facturer */}
        <div className="section">
          <div className="container grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="eyebrow">Facturer</p>
                <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
                  Du devis à la facture sans ressaisie
                </h2>
                <p className="mt-4 text-lg text-slate">
                  Créez vos devis, convertissez-les en contrats, puis en factures. 
                  Le réalisé terrain alimente automatiquement la facturation.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Devis professionnels", "Conversion devis → contrat → facture", "Suivi des impayés"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate">
                      <span className="mt-0.5 text-green-action">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="overflow-hidden rounded-2xl border border-blue-mist/60 shadow-[0_16px_50px_rgba(11,61,110,0.1)]">
                <Image
                  src="/screen-factures.webp"
                  alt="Interface Facturation PROGESTI"
                  width={700}
                  height={440}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section bg-white" id="tarifs">
        <div className="container max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Tarif unique</p>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-deep md:text-4xl">
              149 € HT / mois
            </h2>
            <p className="mt-2 text-lg text-slate">
              5 utilisateurs · Tout inclus
            </p>
            <p className="mt-6 text-slate">
              Planning, pointage, facturation — pas de module en plus.
            </p>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <ButtonLink
                href={cta.demo}
                size="lg"
                eventPayload={{ cta: "home_pricing_demo" }}
              >
                Demander une démo
              </ButtonLink>
              <ButtonLink
                href={cta.trial}
                size="lg"
                variant="secondary"
                eventPayload={{ cta: "home_pricing_trial" }}
              >
                Essai 7 jours gratuit
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
