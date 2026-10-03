import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalPush } from "@/components/conversion/FinalPush";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IndustryPageHero } from "@/components/industry/IndustryPageHero";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { BreadcrumbListLd } from "@/components/seo/BreadcrumbListLd";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { FaqPageLd } from "@/components/seo/FaqPageLd";
import { SoftwareApplicationLd } from "@/components/seo/SoftwareApplicationLd";
import { cta, ctaLabels } from "@/lib/cta";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const directAnswer =
  "Un logiciel de facturation pour entreprise de nettoyage génère les factures à partir du réalisé : passages planifiés et pointés, prestations ponctuelles, contrats récurrents. Dans PROGESTI, la facturation est incluse dans toutes les offres : Gratuit pour indépendants (0 € HT/mois), Pro 49,99 € HT/mois, Premium 99,99 € HT/mois. Essai 15 jours sans carte bancaire.";

const facturationFaq = [
  {
    q: "Quel logiciel de facturation choisir pour une entreprise de nettoyage ?",
    a: "Un logiciel qui relie la facture au planning et au pointage, gère les contrats récurrents et les prestations ponctuelles, et suit les impayés. PROGESTI réunit ces briques et inclut tous les modules dans chaque offre.",
  },
  {
    q: "Combien coûte un logiciel de facturation pour le nettoyage ?",
    a: "Chez PROGESTI : Gratuit (0 € HT/mois) pour les indépendants et micro-entreprises, Pro 49,99 € HT/mois (5 utilisateurs), Premium 99,99 € HT/mois (20 utilisateurs). Essai de 15 jours sans carte bancaire pour les offres payantes.",
  },
  {
    q: "Peut-on générer des factures récurrentes pour des contrats d'entretien ?",
    a: "Oui : pour un contrat récurrent, la facturation est générée selon la fréquence définie. Une prestation ponctuelle se facture à la validation du chantier.",
  },
  {
    q: "La facture repose-t-elle sur les heures réellement pointées ?",
    a: "Oui : le planning définit le prévu, le pointage mobile trace le réalisé, et la facturation s'aligne sur ces données, avec la possibilité d'ajuster avant l'envoi.",
  },
  {
    q: "Comment suivre les factures impayées et relancer un client ?",
    a: "Le suivi des paiements est centralisé : factures échues, retards, montants en jeu. Les relances (modèles 1, 2, 3 et recouvrement) partent depuis la fiche facture, avec l'historique du client. Des règles de relance automatique existent mais sont à activer : vous gardez la main sur le contenu et le moment. Les règlements (virement, chèque, carte bancaire, espèces, prélèvement) s'enregistrent, y compris partiels, et un avoir peut être émis depuis une facture envoyée.",
  },
  {
    q: "PROGESTI est-il prêt pour la facture électronique de 2027 ?",
    a: "Pas pour le raccordement à une plateforme agréée : il n'est pas disponible aujourd'hui, une feuille de route est en cours. PROGESTI facture déjà à partir du réalisé, gère les avoirs, suit les impayés et exporte vos écritures. Dates officielles : voir notre guide (source : impots.gouv.fr). Contact : 07 67 68 55 67.",
  },
] as const;

export const metadata: Metadata = {
  ...pageMeta({
    title: "Logiciel facturation nettoyage — Du réalisé à la facture",
    description: `Logiciel de facturation nettoyage : factures depuis le réalisé, récurrentes ou ponctuelles, suivi des impayés. Gratuit indépendants. Essai ${site.trialDays} j sans CB.`,
    path: "/logiciel-facturation-proprete",
  }),
  // 56 caractères, sans suffixe de marque : reste sous 60.
  title: { absolute: "Logiciel facturation nettoyage — Du réalisé à la facture" },
};

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-2.5">
      {items.map((b) => (
        <li key={b} className="flex gap-2 text-sm text-slate md:text-base">
          <span className="font-bold text-lime-cta" aria-hidden>
            ✓
          </span>
          {b}
        </li>
      ))}
    </ul>
  );
}

const linkCls = "font-semibold text-blue-royal hover:underline";

export default function PillarFacturationPage() {
  return (
    <>
      <SoftwareApplicationLd />
      <FaqPageLd items={[...facturationFaq]} />
      <BreadcrumbListLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Logiciel entreprise nettoyage", path: "/logiciel-entreprise-nettoyage" },
          { name: "Logiciel facturation propreté" },
        ]}
      />
      <IndustryPageHero
        eyebrow="Facturation propreté"
        title="Logiciel de facturation nettoyage : facturez le réalisé"
        lead="Du devis signé au règlement encaissé : facturez ce qui a été fait sur le terrain, que ce soit un contrat d'entretien récurrent ou une remise en état ponctuelle."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Logiciel facturation propreté" },
        ]}
        trialEvent="pillar_factu_trial"
        demoEvent="pillar_factu_demo"
      />

      <DirectAnswer>{directAnswer}</DirectAnswer>

      <section className="section bg-white">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Pourquoi un logiciel de facturation métier pour la propreté ?
            </h2>
            <p className="mt-4 text-slate">
              Un tableur suffit pour éditer quelques factures. Dès que vous gérez des dizaines de contrats récurrents,
              des prestations ponctuelles et des variables chaque mois, les mêmes problèmes reviennent : des passages
              oubliés, des heures réalisées mais jamais facturées, des relances qui traînent.
            </p>
            <p className="mt-4 text-slate">
              PROGESTI est un{" "}
              <Link href="/logiciel-entreprise-nettoyage" className={linkCls}>
                logiciel pour entreprise de nettoyage
              </Link>
              . La facturation n&apos;y est pas un outil isolé : elle s&apos;appuie sur le devis, sur le planning, sur le
              pointage des agents et sur le suivi des paiements. Ce qui est saisi une fois circule jusqu&apos;à la
              facture.
            </p>
            <CheckList
              items={[
                "Factures générées depuis le réalisé : planning et pointage",
                "Contrats récurrents et prestations ponctuelles",
                "Avoirs liés à la facture d'origine",
                "Suivi des paiements, des impayés et des relances",
              ]}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={cta.trial} variant="trial" event="trial_start" eventPayload={{ cta: "pillar_factu_trial" }}>
                Essai {site.trialDays} jours sans carte bancaire
              </ButtonLink>
              <ButtonLink href={cta.demo} variant="secondary" eventPayload={{ cta: "pillar_factu_demo" }}>
                {ctaLabels.demoGate}
              </ButtonLink>
            </div>
            <p className="mt-3 text-sm text-slate">Gratuit pour indépendants · sans CB · tarif public</p>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="overflow-hidden rounded-[3px] border border-blue-mist/60 shadow-[0_20px_56px_rgba(11,61,110,0.12)]">
              <Image
                src="/screen-factures.webp"
                alt="Facturation PROGESTI — factures et suivi des paiements"
                width={800}
                height={500}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Du devis au règlement : un flux continu
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
              Dans une entreprise de propreté, la facturation commence bien avant l&apos;envoi de la facture. Elle
              démarre au{" "}
              <Link href="/logiciel-devis-nettoyage" className={linkCls}>
                devis
              </Link>
              , passe par l&apos;exécution sur le terrain, et se termine au recouvrement.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["1", "Devis", "Le devis est rattaché au client et à ses sites. Une fois accepté, il se convertit en contrat."],
              ["2", "Réalisé terrain", "Vos agents pointent leurs passages sur mobile. Les heures pointées servent de base à la facture."],
              ["3", "Facture", "La facture est générée à partir du réalisé, que le contrat soit récurrent ou ponctuel, et peut être ajustée avant l'envoi."],
              ["4", "Règlement", "Les règlements sont enregistrés, les retards repérés, les relances envoyées depuis la fiche facture."],
            ].map(([n, t, d], i) => (
              <Reveal key={t} delayMs={i * 50}>
                <div className="industry-card-lift h-full rounded-[3px] border border-blue-mist/80 bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-lime-cta">{n}</p>
                  <h3 className="mt-2 font-display font-extrabold text-blue-deep">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate">
              Pour le fonctionnement détaillé écran par écran, consultez le{" "}
              <Link href="/fonctionnalites/facturation" className={linkCls}>
                module Facturation
              </Link>
              . Cette page sert à choisir votre logiciel ; la fiche module explique comment il fonctionne.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Facturer le réalisé : du planning au pointage, puis à la facture
            </h2>
            <p className="mt-4 text-slate">
              Le problème classique : vos agents travaillent, mais les heures se perdent entre des feuilles papier, un
              tableur et la facture finale. Vous facturez alors le prévu, ou de mémoire, plutôt que ce qui a réellement
              été fait.
            </p>
            <p className="mt-4 text-slate">
              Dans PROGESTI, le{" "}
              <Link href="/logiciel-planning-nettoyage" className={linkCls}>
                logiciel de planning nettoyage
              </Link>{" "}
              définit ce qui doit être fait. Le{" "}
              <Link href="/fonctionnalites/pointage" className={linkCls}>
                pointage mobile
              </Link>{" "}
              trace ce qui a été fait : l&apos;agent pointe son arrivée et son départ, l&apos;information remonte au
              bureau. Au moment de facturer, les heures sont déjà là, et vous pouvez les ajuster avant l&apos;envoi. La
              facture repose sur le réalisé, pas sur une reconstitution de fin de mois.
            </p>
            <CheckList
              items={[
                "Le planning définit les interventions prévues",
                "Le pointage mobile trace les passages réels",
                "La facture s'aligne sur ces données, avec ajustement possible avant envoi",
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Facturation récurrente ou ponctuelle : deux logiques, un même outil
            </h2>
            <p className="mt-4 text-slate">
              L&apos;entretien hebdomadaire de bureaux et la remise en état après travaux n&apos;ont pas la même
              logique, mais dans les deux cas il faut facturer ce qui a été fait, au bon tarif, sans oublier les
              extras.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[3px] border border-line bg-white p-5">
                <p className="font-display font-bold text-ink">Contrat récurrent</p>
                <p className="mt-2 text-sm text-slate">
                  La facturation est générée selon la fréquence définie dans le contrat : mensuelle, trimestrielle,
                  selon votre accord avec le client. Les heures pointées confirment que le travail a été fait.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-white p-5">
                <p className="font-display font-bold text-ink">Prestation ponctuelle et fin de chantier</p>
                <p className="mt-2 text-sm text-slate">
                  Vous validez le chantier terminé et éditez la facture dans la foulée, suppléments demandés sur place
                  compris. Voir aussi la page{" "}
                  <Link href="/solutions/fin-de-chantier" className={linkCls}>
                    solution fin de chantier
                  </Link>
                  .
                </p>
              </div>
            </div>
            <p className="mt-6 text-slate">
              Si vous facturez surtout à la fin de l&apos;intervention, notre article{" "}
              <Link href="/blog/facturer-fin-intervention-sans-repasser-bureau" className={linkCls}>
                facturer en fin d&apos;intervention sans repasser par le bureau
              </Link>{" "}
              détaille le process pas à pas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Avoirs, impayés et relances
            </h2>
            <p className="mt-4 text-slate">
              Une facture envoyée n&apos;est pas une facture payée. Dans beaucoup d&apos;entreprises de propreté, le
              suivi des impayés se fait sur un fichier à part, avec des relances manuelles qui finissent par se
              perdre. PROGESTI centralise le{" "}
              <Link href="/fonctionnalites/impayes" className={linkCls}>
                suivi des impayés
              </Link>{" "}
              : factures échues, retards, montants en jeu, historique du client sous les yeux.
            </p>
            <p className="mt-4 text-slate">
              Pour contrôler vos factures, deux ressources : les{" "}
              <Link href="/blog/mentions-obligatoires-facture-nettoyage" className={linkCls}>
                mentions obligatoires d&apos;une facture de nettoyage
              </Link>{" "}
              (avec les sources officielles datées) et le{" "}
              <Link href="/blog/modele-facture-nettoyage" className={linkCls}>
                modèle de facture de nettoyage
              </Link>{" "}
              avec trois exemples.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Avoirs</p>
                <p className="mt-2 text-sm text-slate">
                  Un avoir se crée depuis une facture envoyée. Il reste lié à la facture d&apos;origine et peut être
                  total ou partiel.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Règlements</p>
                <p className="mt-2 text-sm text-slate">
                  Virement, chèque, carte bancaire, espèces ou prélèvement : le règlement s&apos;enregistre, y compris
                  partiellement, pour que le solde reste juste.
                </p>
              </div>
              <div className="rounded-[3px] border border-line bg-paper p-5">
                <p className="font-display font-bold text-ink">Relances</p>
                <p className="mt-2 text-sm text-slate">
                  Les modèles de relance 1, 2, 3 et de recouvrement partent depuis la fiche facture. Des règles de
                  relance automatique sont paramétrables ; elles sont à activer.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Facture électronique 2026-2027 : où en est-on ?
            </h2>
            <p className="mt-4 text-slate">
              Depuis le 1er septembre 2026, toutes les entreprises assujetties à la TVA doivent pouvoir recevoir des
              factures électroniques. L&apos;obligation d&apos;émettre concerne les micro-entreprises et les PME à
              partir du 1er septembre 2027, via une plateforme agréée (sources : impots.gouv.fr, economie.gouv.fr).
            </p>
            <p className="mt-4 text-slate">
              Côté PROGESTI, soyons précis : le logiciel facture à partir du réalisé, gère les avoirs, suit les impayés
              et permet d&apos;exporter vos écritures. Le raccordement à une plateforme agréée n&apos;est pas encore
              disponible ; une feuille de route est en cours. Pour comprendre les dates, les obligations et
              vous préparer, lisez notre{" "}
              <Link href="/blog/facture-electronique-2026-2027" className={linkCls}>
                guide de la facture électronique 2026-2027
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Logiciel de facturation spécialisé ou outil générique : ce qui change
            </h2>
            <div className="mt-6 overflow-x-auto">
              <table className="industry-data-table w-full text-left text-sm">
                <thead>
                  <tr>
                    <th>Critère</th>
                    <th>Excel ou outil générique</th>
                    <th>Logiciel métier propreté</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Source des données</td>
                    <td>Ressaisie des heures et des sites</td>
                    <td>Planning et pointage alimentent la facture</td>
                  </tr>
                  <tr>
                    <td>Lien avec le planning</td>
                    <td>Aucun, fichiers séparés</td>
                    <td>Même base pour le prévu et le réalisé</td>
                  </tr>
                  <tr>
                    <td>Impayés</td>
                    <td>Fichier parallèle</td>
                    <td>Suivi et relances depuis la fiche facture</td>
                  </tr>
                  <tr>
                    <td>Prix affiché</td>
                    <td>Variable selon l&apos;outil</td>
                    <td>Tarif public : Gratuit, Pro, Premium</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-slate">
              Un tableur reste raisonnable pour quelques factures par mois. Il atteint ses limites quand plusieurs
              contrats, plusieurs équipes et des extras doivent être rapprochés du terrain. Pour une comparaison de
              tarifs avec un autre logiciel du secteur, voir{" "}
              <Link href="/alternative-propret" className={linkCls}>
                l&apos;alternative à Propret
              </Link>
              . Côté comptabilité, vous exportez les données en CSV et un pack mensuel pour votre comptable : voir l&apos;
              <Link href="/integrations" className={linkCls}>
                export comptable
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Comment choisir un logiciel de facturation pour une société de propreté ?
            </h2>
            <p className="mt-4 text-slate">
              Les critères qui comptent vraiment ne sont pas ceux d&apos;un logiciel de facturation généraliste. Une
              entreprise de nettoyage facture du temps de présence, sur des sites multiples, avec des contrats qui
              vivent : absences, remplacements, extras. Voici les questions à poser avant de choisir.
            </p>
            <CheckList
              items={[
                "La facture repose-t-elle sur les heures réellement pointées, ou faut-il tout ressaisir ?",
                "Le logiciel distingue-t-il le contrat récurrent de la prestation ponctuelle ?",
                "Peut-on facturer par client, par site ou par contrat cadre, par exemple pour un syndic ?",
                "Les avoirs sont-ils liés à la facture d'origine, sans bricolage ?",
                "Le suivi des impayés et les relances sont-ils dans le même outil que la facture ?",
                "Le prix est-il public, et tous les modules sont-ils inclus, ou chaque brique se paie-t-elle en plus ?",
                "Que dit l'éditeur, précisément, de la facture électronique et du calendrier 2026-2027 ?",
              ]}
            />
            <p className="mt-6 text-slate">
              Dernier point : demandez toujours ce qui est disponible aujourd&apos;hui, pas ce qui est prévu. Sur la
              facture électronique, par exemple, le raccordement à une plateforme agréée n&apos;est pas encore
              disponible chez PROGESTI, et nous préférons vous le dire clairement plutôt que de le laisser deviner.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-blue-mist bg-[#F5F8FB] py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              Facturer par client, par site ou par contrat cadre
            </h2>
            <p className="mt-4 text-slate">
              Un syndic qui gère plusieurs immeubles, une enseigne avec des points de vente, un prestataire de
              bureaux avec plusieurs étages : chacun attend une facture lisible. Dans PROGESTI, la facturation peut
              être établie par client, par site ou par contrat cadre, et ventilée par site lorsque le client le
              demande. En cas de contestation sur un bâtiment, vous retrouvez les interventions concernées plutôt que
              de reconstruire un montant global.
            </p>
            <p className="mt-4 text-slate">
              Vous pouvez aussi être alerté sur les passages qui n&apos;ont pas encore été facturés, pour éviter les
              oublis de fin de mois. C&apos;est l&apos;un des bénéfices les plus concrets d&apos;une facturation reliée
              au planning : le logiciel sait ce qui a été réalisé, donc ce qui reste à facturer.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-blue-deep md:text-3xl">
              De la facture à la comptabilité : exports pour votre comptable
            </h2>
            <p className="mt-4 text-slate">
              Votre comptable a besoin de données propres, pas d&apos;une ressaisie. PROGESTI permet d&apos;exporter
              vos factures, vos règlements et vos impayés en fichiers CSV, et de produire un pack mensuel pour le
              comptable : journal des ventes, PDF des factures et des avoirs, TVA, encaissements et impayés. Les
              ventes, les PDF et la TVA sont disponibles une fois les cycles de facturation fermés.
            </p>
            <p className="mt-4 text-slate">
              Ces exports sont des fichiers que votre comptable importe ou consulte. Pour le détail des options
              disponibles, consultez la page{" "}
              <Link href="/integrations" className={linkCls}>
                intégrations et export comptable
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
              Tarifs : la facturation est incluse dans chaque offre
            </h2>
            <p className="mt-4 text-slate">
              Il n&apos;y a pas de module de facturation payant en supplément : tous les modules sont inclus dans
              chaque offre.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                href="/solutions/auto-entrepreneurs"
                className="rounded-[3px] border border-blue-mist/70 bg-white p-5 text-center hover:border-blue-royal"
              >
                <p className="font-display text-2xl font-extrabold text-blue-deep">Gratuit</p>
                <p className="text-sm text-slate">0 € HT/mois · 1 admin · indépendants, AE, micro</p>
              </Link>
              <div className="rounded-[3px] border-2 border-lime-cta bg-lime-cta/10 p-5 text-center">
                <p className="font-display text-2xl font-extrabold text-blue-deep">Pro · 49,99 €</p>
                <p className="text-sm text-slate">HT/mois · 5 utilisateurs</p>
              </div>
              <div className="rounded-[3px] border border-blue-mist/70 bg-white p-5 text-center">
                <p className="font-display text-2xl font-extrabold text-blue-deep">Premium · 99,99 €</p>
                <p className="text-sm text-slate">HT/mois · 20 utilisateurs</p>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate">
              Essai {site.trialDays} jours sans CB ·{" "}
              <Link href="/tarifs" className={linkCls}>
                tarifs publics →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-blue-sky/30">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold text-blue-deep">
            Questions fréquentes — logiciel de facturation nettoyage
          </h2>
          <div className="mt-6">
            <IndustryFaq items={facturationFaq} />
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
        title="Prêt à facturer ce qui a été fait ?"
        lead={`Essai ${site.trialDays} jours sans CB · Planning, pointage et facturation inclus · Support FR ${site.phone}`}
      />
      <MobileCtaBar />
    </>
  );
}
