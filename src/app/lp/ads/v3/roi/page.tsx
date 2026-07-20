import type { Metadata } from "next";
import { AdsGoogleLanding } from "@/components/sections/ads-v3/AdsGoogleLanding";
import { formatEuro, plans, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "2 mois gratuits puis dès 29,99 €/mois — Logiciel nettoyage PROGESTI",
  description:
    "Essai 2 mois sans CB, puis dès 29,99 € HT/mois. Logiciel de gestion pour entreprises de nettoyage : planning, pointage, facturation. ROI visible dès le 1er mois.",
  robots: { index: false },
};

const starter = plans[0];

export default function AdsV3RoiPage() {
  return (
    <AdsGoogleLanding
      campaign="ads_v3_roi"
      badge={`${site.trialMonths} mois gratuits · Sans CB`}
      priceAnchor={`Dès ${formatEuro(starter.monthly)} HT / mois après l’essai`}
      headline="2 mois gratuits. Puis dès 29,99 € HT/mois pour piloter toute votre boîte."
      subhead="Planning, pointage terrain et facturation dans un seul logiciel métier — conçu pour les entreprises de nettoyage. Vous testez 2 mois sans carte bancaire, vous ne payez que si ça vous fait gagner."
      formType="trial"
      formTitle="Démarrer mes 2 mois gratuits"
      formLead="Compte créé en 2 minutes → accès immédiat à l’application. Aucune CB demandée."
      formCta="Créer mon essai gratuit →"
      primaryCtaLabel="Démarrer mes 2 mois gratuits"
      secondaryCtaLabel="Voir les tarifs mensuels"
      trustItems={[
        `${site.trialMonths} mois sans carte bancaire`,
        "Tous les modules ouverts",
        `Puis dès ${formatEuro(starter.monthly)} HT/mois`,
      ]}
      monthTimelineTitle="Votre parcours mois par mois"
      monthTimelineLead="Pas de piège : vous voyez exactement ce que vous payez — et quand."
      months={[
        {
          label: "Mois 1",
          price: "0 €",
          detail: "Essai complet : planning, pointage mobile, facturation, tous modules. Vous configurez vos premiers sites.",
          highlight: true,
        },
        {
          label: "Mois 2",
          price: "0 €",
          detail: "Vous validez sur le terrain avec vos agents. Toujours sans CB. Vous mesurez le gain de temps réel.",
          highlight: true,
        },
        {
          label: "Mois 3 et +",
          price: `dès ${formatEuro(starter.monthly)}`,
          detail: "Vous choisissez Starter, Pro ou Premium. Facturation mensuelle HT. Résiliable à tout moment.",
        },
      ]}
      roiTitle="Le calcul ROI que font les gérants avant de signer"
      roiLead="Un dirigeant qui passe 6 h/semaine sur l’admin à 40 €/h brûle ~960 €/mois. PROGESTI Pro coûte 49,99 € HT/mois."
      roiItems={[
        {
          label: "Coût admin sans outil",
          value: "~960 €/mois",
          note: "6 h/semaine × 40 €/h × 4 semaines — temps dirigeant non facturé",
        },
        {
          label: "Coût PROGESTI Pro",
          value: `${formatEuro(plans[1].monthly)}/mois`,
          note: "5 utilisateurs · tous modules · facturation mensuelle HT",
        },
        {
          label: "Retour estimé",
          value: "×19",
          note: "960 € gagnés pour 49,99 € investis — sans compter les factures oubliées évitées",
        },
      ]}
      painTitle="Ce que vous payez chaque mois sans logiciel métier"
      pains={[
        {
          title: "Heures admin non facturées",
          text: "Planning le dimanche, relances WhatsApp, factures en retard : 20 à 30 h/mois partent en fumée.",
        },
        {
          title: "Erreurs qui coûtent cher",
          text: "Un agent au mauvais site, une prestation non facturée : 200 à 500 € perdus par incident.",
        },
        {
          title: "Croissance bloquée",
          text: "Vous refusez des contrats parce que vous ne pouvez plus piloter Excel + 15 agents.",
        },
      ]}
      beforeAfterTitle="Sans outil vs avec PROGESTI — sur 3 mois"
      before={[
        "Mois 1–2 : vous « testez » Excel encore une fois",
        "Administration : 25 h/mois minimum",
        "Facturation : toujours en retard de 2 semaines",
        "Visibilité : vous ne savez pas qui est où",
        "Coût caché : ~1 000 €/mois en temps perdu",
      ]}
      after={[
        "Mois 1–2 : essai PROGESTI gratuit, sans CB",
        "Administration : quelques minutes par jour",
        "Facturation : alignée sur le réalisé terrain",
        "Visibilité : cockpit agents / sites en direct",
        "Coût : dès 29,99 € HT/mois si vous continuez",
      ]}
      demoTitle="Ce que vous testez gratuitement pendant 2 mois"
      demoLead="Pas une démo vidéo — votre vrai compte avec tous les modules ouverts."
      demoSteps={[
        {
          title: "Planning agents / sites",
          text: "Créez vos affectations. Voyez conflits et trous sans Excel.",
        },
        {
          title: "Pointage mobile",
          text: "Vos agents valident sur Android / iOS. Preuves d’intervention incluses.",
        },
        {
          title: "Facturation liée",
          text: "Ce qui est fait sur le terrain nourrit la facture. Moins d’oublis.",
        },
      ]}
      testimonials={[
        {
          quote:
            "J’ai attendu le mois 2 pour être sûr. À 49,99 €/mois, c’est le meilleur investissement de l’année.",
          author: "Marc D.",
          role: "Gérant, 12 agents — Toulouse",
        },
        {
          quote: "2 mois gratuits, zéro pression. Au mois 3, l’équipe ne voulait plus revenir en arrière.",
          author: "Sophie V.",
          role: "Dirigeante propreté tertiaire",
        },
      ]}
      stepsTitle="3 étapes — de l’essai au mois 3"
      steps={[
        {
          title: "Mois 1 : créez votre compte",
          text: "2 minutes, sans CB. Vous configurez sites et agents.",
        },
        {
          title: "Mois 2 : validez sur le terrain",
          text: "Vos agents pointent. Vous mesurez le gain réel.",
        },
        {
          title: "Mois 3 : vous décidez",
          text: "Starter dès 29,99 € HT/mois ou vous arrêtez. Aucun prélèvement sans votre accord.",
        },
      ]}
      faq={[
        {
          q: "Est-ce vraiment gratuit pendant 2 mois ?",
          a: "Oui. Tous les modules, sans carte bancaire. Vous ne payez qu’à partir du mois 3 si vous choisissez de continuer.",
        },
        {
          q: "Que se passe-t-il au mois 3 si je ne fais rien ?",
          a: "Rien n’est prélevé automatiquement sans votre décision. Vous choisissez une offre ou vous arrêtez.",
        },
        {
          q: "Puis-je rester sur Starter à 29,99 €/mois ?",
          a: "Oui. Starter = 1 admin, tous modules, facturation mensuelle HT. Vous passez à Pro ou Premium quand vous grandissez.",
        },
        {
          q: "Y a-t-il un engagement minimum ?",
          a: "Non. Facturation mensuelle, résiliable. Option annuelle avec 2 mois offerts si vous préférez.",
        },
        {
          q: "Comment mesurer mon ROI ?",
          a: "Comptez les heures admin économisées × votre taux horaire. La plupart des gérants voient un retour dès le 1er mois d’usage réel.",
        },
      ]}
      finalTitle="Testez 2 mois. Payez seulement si le ROI est là."
      finalLead="960 € de temps admin économisé pour 49,99 €/mois — le calcul est simple. L’essai ne coûte rien."
      guarantee={[
        `${site.trialMonths} mois sans carte bancaire`,
        "Tous les modules inclus",
        `Puis dès ${formatEuro(starter.monthly)} HT/mois`,
        "Résiliable à tout moment",
        "Mise en place offerte",
      ]}
    />
  );
}
