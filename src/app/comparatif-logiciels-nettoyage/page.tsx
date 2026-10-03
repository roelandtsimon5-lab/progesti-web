import type { Metadata } from "next";
import Link from "next/link";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { BreadcrumbListLd } from "@/components/seo/BreadcrumbListLd";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const linkCls = "font-semibold text-blue-royal hover:underline";
const extCls = "font-semibold text-blue-royal hover:underline break-all";

const directAnswer =
  "Pour choisir un logiciel d'entreprise de nettoyage, comparez cinq critères : taille de l'équipe et nombre de sites, pointage mobile, facturation au réalisé, prix public et essai, accompagnement. PROGESTI propose un plan Gratuit pour indépendants, Pro à 49,99 € HT/mois et Premium à 99,99 € HT/mois, avec 15 jours d'essai sans carte bancaire.";

const faq = [
  {
    q: "Quels critères pour choisir un logiciel d'entreprise de nettoyage ?",
    a: "La taille de l'équipe et le nombre de sites, le pointage mobile, le lien entre devis, planning et facturation, le prix public avec une période d'essai, et la qualité de l'accompagnement. Testez avec vos vrais sites avant de vous engager.",
  },
  {
    q: "Existe-t-il un logiciel de nettoyage gratuit pour un indépendant ?",
    a: "L'offre Gratuit de PROGESTI (0 € HT/mois) est réservée aux indépendants, auto-entrepreneurs et micro-entreprises, avec un administrateur et tous les modules. Les autres éditeurs ont leurs propres conditions : comparez sur leurs pages tarifs.",
  },
  {
    q: "Combien coûte un logiciel de gestion pour entreprise de nettoyage ?",
    a: "Les prix publics varient selon les éditeurs et changent : vérifiez-les sur leurs sites. Chez PROGESTI : Gratuit pour indépendants, Pro 49,99 € HT/mois (5 utilisateurs), Premium 99,99 € HT/mois (20 utilisateurs), essai de 15 jours sans carte bancaire.",
  },
  {
    q: "Quel logiciel pour une entreprise de nettoyage de 5 à 20 agents ?",
    a: "Cherchez un outil qui couvre le planning multi-sites, le pointage mobile et la facturation au réalisé sans module à assembler. Comparez le coût total pour votre nombre d'utilisateurs et le temps de prise en main. Les offres Pro et Premium de PROGESTI comptent respectivement 5 et 20 utilisateurs.",
  },
  {
    q: "Comment migrer depuis Excel vers un logiciel de nettoyage ?",
    a: "Importez d'abord vos clients et sites, puis faites tourner un cycle complet en parallèle avant de basculer. Notre guide sur le passage d'Excel à un logiciel détaille les erreurs fréquentes à éviter.",
  },
] as const;

export const metadata: Metadata = pageMeta({
  title: "Comparatif logiciels nettoyage 2026 : 5 critères",
  description: `Comparer les logiciels pour entreprise de nettoyage : critères, taille d'équipe, prix publics datés. Gratuit pour indépendants, essai ${site.trialDays} jours sans CB.`,
  path: "/comparatif-logiciels-nettoyage",
});

const criteria = [
  ["Taille de l'équipe et nombre de sites", "Combien d'utilisateurs et de sites sont inclus dans le prix ? Que coûte un utilisateur de plus ?"],
  ["Pointage et preuves de passage", "Les agents pointent-ils depuis leur téléphone ? Que voyez-vous en temps réel, que garde-t-on comme preuve ?"],
  ["Du devis à la facture", "Le devis accepté alimente-t-il le contrat, le planning, puis la facture, sans ressaisie ?"],
  ["Prix public et essai", "Le prix est-il affiché ? L'essai demande-t-il une carte bancaire ? Quelle est sa durée ?"],
  ["Accompagnement et prise en main", "Qui vous aide à démarrer, par quel canal, et en combien de temps l'outil est-il en service ?"],
] as const;

const profiles = [
  ["Indépendant ou micro-entreprise", "Un outil simple, avec un prix d'entrée bas ou nul et peu de configuration. Vérifiez que devis et factures sont inclus."],
  ["TPE de quelques agents", "Planning et pointage mobile d'abord, puis devis et facturation reliés. Comparez le coût par utilisateur."],
  ["PME multi-sites", "Gestion de plusieurs sites et équipes, rôles et droits, suivi de la marge par contrat. Demandez une démonstration sur vos propres sites."],
  ["Structure de grande taille", "Des ERP modulaires, avec déploiement accompagné, existent pour des besoins RH et paie plus poussés. Le délai de mise en route compte autant que le prix."],
] as const;

const facts = [
  {
    name: "PROGESTI",
    price:
      "Gratuit 0 € HT/mois (indépendants, auto-entrepreneurs, micro-entreprises ; 1 administrateur, tous modules) · Pro 49,99 € HT/mois (5 utilisateurs) · Premium 99,99 € HT/mois (20 utilisateurs)",
    trial: "15 jours sans carte bancaire (offres payantes)",
    scope:
      "Planning, pointage mobile, devis puis contrat, signature en ligne interne, facturation, avoirs, règlements, relances (règles à activer), export CSV",
    href: "https://progesti.fr/tarifs",
    label: "progesti.fr/tarifs",
  },
  {
    name: "PROPRET",
    price: "« À partir de 29,99 € HT/mois »",
    trial: "« Essai gratuit, sans carte bancaire » (durée non indiquée sur la page consultée)",
    scope:
      "Page d'accueil : planning, pointage terrain, RH, devis, facturation, clients, contrats, qualité et reporting",
    href: "https://propret.fr/",
    label: "propret.fr",
  },
  {
    name: "CleanPlus",
    price:
      "Socle plateforme 29 € HT/mois (1 licence administrateur incluse) ; licence agent 5 € HT/mois ; modules en option",
    trial: "Essai gratuit de 14 jours",
    scope:
      "Page tarifs : devis avec signature, planning multi-vues, pointage GPS et rapports d'heures, portail client",
    href: "https://cleanplus.app/tarifs",
    label: "cleanplus.app/tarifs",
  },
  {
    name: "Kliner",
    price: "39 € HT/mois (1 administrateur inclus) + 4 € HT par utilisateur et par mois ; option « IA Pro »",
    trial: "Essai gratuit de 14 jours",
    scope:
      "Page d'accueil : planning avec optimisation, assistant IA, application mobile avec géolocalisation, facturation, portail client",
    href: "https://kliner.me/",
    label: "kliner.me",
  },
  {
    name: "Progiclean",
    price: "Aucun prix affiché sur la page consultée",
    trial: "Non indiqué sur la page consultée",
    scope:
      "Page d'accueil : ERP modulaire (suivi commercial, planification, facturation, RH, pilotage), déploiement annoncé en 4 à 6 semaines avec formation",
    href: "https://www.progiclean.com/",
    label: "progiclean.com",
  },
] as const;

export default function ComparatifLogicielsNettoyagePage() {
  return (
    <>
      <FaqPageLd items={[...faq]} />
      <BreadcrumbListLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Comparatifs", path: "/comparatifs" },
          { name: "Comparatif logiciels nettoyage" },
        ]}
      />
      <IndustryPageHero
        eyebrow="Comparatif"
        title="Comparatif des logiciels pour entreprise de nettoyage : les critères pour choisir en 2026"
        lead="Cinq questions à poser à chaque éditeur, et des faits relevés sur leurs pages, avec la source et la date."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Comparatifs", href: "/comparatifs" },
          { label: "Comparatif logiciels nettoyage" },
        ]}
        trialEvent="comparatif_logiciels_trial"
        demoEvent="comparatif_logiciels_demo"
      />

      <DirectAnswer>{directAnswer}</DirectAnswer>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-sm text-slate">
              Mis à jour le 3 octobre 2026. Nous éditons PROGESTI : nous sommes donc partie prenante. Pour cette raison, chaque
              information sur un autre éditeur renvoie à sa page source, avec la date de consultation. Voir aussi{" "}
              <Link href="/comparatifs" className={linkCls}>
                tous nos comparatifs
              </Link>
              .
            </p>
            <h2 className="mt-8 font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Comment comparer : les cinq critères
            </h2>
            <p className="mt-4 text-slate">
              Un tableau de fonctionnalités se ressemble d&apos;un éditeur à l&apos;autre. Ce qui change, ce sont les réponses à
              ces cinq questions, à poser avant toute démonstration.
            </p>
            <div className="mt-6 overflow-x-auto rounded-[3px] border border-blue-mist">
              <table className="industry-data-table w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-blue-mist">
                    <th className="py-3 px-4 font-bold text-slate">Critère</th>
                    <th className="py-3 px-4 font-bold text-slate">Question à poser à l&apos;éditeur</th>
                  </tr>
                </thead>
                <tbody>
                  {criteria.map(([c, q]) => (
                    <tr key={c} className="border-b border-blue-mist/60">
                      <td className="py-3 px-4 font-semibold text-blue-deep">{c}</td>
                      <td className="py-3 px-4 text-slate">{q}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Quel profil d&apos;entreprise pour quel type d&apos;outil
            </h2>
            <p className="mt-4 text-slate">
              Nous ne classons aucun éditeur : le bon outil dépend de votre taille et de vos sites.
            </p>
            <ul className="mt-6 space-y-3">
              {profiles.map(([p, d]) => (
                <li key={p} className="text-slate">
                  <span className="font-semibold text-blue-deep">{p}.</span> {d}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate">
              Pour une grille de choix détaillée, voir{" "}
              <Link href="/blog/logiciels-nettoyage-criteres-tpe-2026" className={linkCls}>
                les 8 critères pour une TPE
              </Link>{" "}
              et{" "}
              <Link href="/blog/logiciel-nettoyage-bureaux-criteres" className={linkCls}>
                les critères pour le nettoyage de bureaux
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-5xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Tableau comparatif : faits relevés le 3 octobre 2026
            </h2>
            <p className="mt-4 text-slate">
              Les informations ci-dessous sont celles que chaque éditeur affiche sur la page indiquée, consultée le 3 octobre
              2026. Les prix publics changent : vérifiez-les sur la page source avant de décider. Ce qui n&apos;est pas écrit sur
              la page consultée n&apos;est pas reporté ici, et ce tableau ne dit rien de ce que les outils font ou ne font pas
              au-delà de ce que leurs éditeurs annoncent.
            </p>
            <div className="mt-6 overflow-x-auto rounded-[3px] border border-blue-mist">
              <table className="industry-data-table w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-blue-mist">
                    <th className="py-3 px-3 font-bold text-slate">Éditeur</th>
                    <th className="py-3 px-3 font-bold text-slate">Prix public affiché</th>
                    <th className="py-3 px-3 font-bold text-slate">Essai annoncé</th>
                    <th className="py-3 px-3 font-bold text-slate">Périmètre annoncé</th>
                    <th className="py-3 px-3 font-bold text-slate">Source (consultée le 03/10/2026)</th>
                  </tr>
                </thead>
                <tbody>
                  {facts.map((f) => (
                    <tr key={f.name} className="border-b border-blue-mist/60 align-top">
                      <td className="py-3 px-3 font-semibold text-blue-deep">{f.name}</td>
                      <td className="py-3 px-3 text-slate">{f.price}</td>
                      <td className="py-3 px-3 text-slate">{f.trial}</td>
                      <td className="py-3 px-3 text-slate">{f.scope}</td>
                      <td className="py-3 px-3">
                        <a href={f.href} className={extCls} rel="noopener noreferrer nofollow">
                          {f.label}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate">
              Pour comparer le coût réel, additionnez pour votre équipe : abonnement de base, utilisateurs supplémentaires et
              options. Les formules de calcul diffèrent d&apos;un éditeur à l&apos;autre. Face-à-face détaillé :{" "}
              <Link href="/blog/progesti-vs-propret" className={linkCls}>
                PROGESTI vs Propret
              </Link>
              ,{" "}
              <Link href="/alternative-propret" className={linkCls}>
                alternative à Propret
              </Link>
              . Nos prix :{" "}
              <Link href="/tarifs" className={linkCls}>
                tarifs publics
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Ce que PROGESTI fait aujourd&apos;hui, et ce qu&apos;il ne fait pas
            </h2>
            <p className="mt-4 text-slate">
              <span className="font-semibold text-blue-deep">Ce qu&apos;il fait.</span> Du{" "}
              <Link href="/logiciel-devis-nettoyage" className={linkCls}>
                devis
              </Link>{" "}
              (signature en ligne interne, conversion en contrat) au{" "}
              <Link href="/logiciel-planning-nettoyage" className={linkCls}>
                planning
              </Link>{" "}
              et à la{" "}
              <Link href="/logiciel-facturation-proprete" className={linkCls}>
                facturation
              </Link>{" "}
              : avoirs, règlements partiels, relances (règles à activer par vous) et export CSV avec pack mensuel pour votre
              comptable. Vue d&apos;ensemble :{" "}
              <Link href="/logiciel-entreprise-nettoyage" className={linkCls}>
                logiciel pour entreprise de nettoyage
              </Link>
              .
            </p>
            <p className="mt-4 text-slate">
              <span className="font-semibold text-blue-deep">Ce qu&apos;il ne fait pas.</span> PROGESTI ne propose pas de
              paiement en ligne et ne génère pas de devis par intelligence artificielle. Si l&apos;un de ces points est décisif
              pour vous, mieux vaut le savoir avant l&apos;essai.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">Essayer avant de choisir</h2>
            <p className="mt-4 text-slate">
              Quel que soit l&apos;éditeur, testez avec vos vrais sites et vos vrais agents pendant l&apos;essai. Notre{" "}
              <Link href="/blog/essai-gratuit-logiciel-nettoyage-checklist" className={linkCls}>
                checklist d&apos;essai gratuit
              </Link>{" "}
              liste les points à contrôler. Vous partez d&apos;Excel ? Voir{" "}
              <Link href="/blog/passer-de-excel-a-un-logiciel-nettoyage" className={linkCls}>
                passer d&apos;Excel à un logiciel
              </Link>
              .
            </p>
            <p className="mt-4 text-slate">
              Chez PROGESTI : Gratuit 0 € HT/mois pour les indépendants, auto-entrepreneurs et micro-entreprises (1
              administrateur, tous modules) ; Pro 49,99 € HT/mois (5 utilisateurs) ; Premium 99,99 € HT/mois (20
              utilisateurs) ; essai de {site.trialDays} jours sans carte bancaire sur les offres payantes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-blue-sky/30">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">Questions fréquentes — comparatif</h2>
          <div className="mt-6">
            <IndustryFaq items={faq} />
          </div>
          <p className="mt-6 text-sm text-slate">
            Une autre question ?{" "}
            <a href={`tel:${site.phoneTel}`} className={linkCls}>
              {site.phone}
            </a>{" "}
            ·{" "}
            <Link href="/contact" className={linkCls}>
              Contact
            </Link>
          </p>
        </div>
      </section>

      <FinalPush
        title="Comparez sur votre activité, pas sur une brochure"
        lead={`Essai ${site.trialDays} jours sans CB · Gratuit pour indépendants · Support FR ${site.phone}`}
      />
      <MobileCtaBar />
    </>
  );
}
