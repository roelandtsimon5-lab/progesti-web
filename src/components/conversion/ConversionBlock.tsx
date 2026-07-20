import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/lib/cta";
import { site } from "@/lib/site";

type Variant = "essai" | "demo" | "contact";

const copy: Record<
  Variant,
  {
    title: string;
    lead: string;
    primary: { href: string; label: string; event?: "trial_start" };
    secondary: { href: string; label: string; event?: "trial_start" };
  }
> = {
  essai: {
    title: "Passez à une gestion plus simple — testez 2 mois",
    lead: "Sans carte bancaire. Tous les modules. Dès 29,99 € HT/mois après l’essai.",
    primary: {
      href: cta.trialApp,
      label: "Commencer l’essai gratuit",
      event: "trial_start",
    },
    secondary: { href: cta.demo, label: "Voir une démo" },
  },
  demo: {
    title: "Voyez PROGESTI sur votre cas métier",
    lead: "Bureaux, syndics ou fin de chantier — exploration libre du cockpit.",
    primary: { href: cta.demo, label: "Lancer la démo" },
    secondary: {
      href: cta.trialApp,
      label: "Essai 2 mois sans CB",
      event: "trial_start",
    },
  },
  contact: {
    title: "Une question ? On vous répond",
    lead: "Commercial, migration, essai — équipe MSNE SAS, Tournefeuille (31).",
    primary: { href: "/contact", label: "Nous contacter" },
    secondary: {
      href: cta.trialApp,
      label: "Essai gratuit",
      event: "trial_start",
    },
  },
};

type Props = {
  variant?: Variant;
  className?: string;
};

export function ConversionBlock({ variant = "essai", className = "" }: Props) {
  const c = copy[variant];

  return (
    <section className={`bg-blue-deep text-white ${className}`.trim()}>
      <div className="container py-14 text-center md:py-16">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#B8F5D4]">
          {site.name}
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold text-white md:text-4xl">
          {c.title}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white/90">{c.lead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink
            href={c.primary.href}
            size="lg"
            event={c.primary.event}
            eventPayload={{ cta: `v3_conversion_${variant}_primary` }}
          >
            {c.primary.label}
          </ButtonLink>
          <ButtonLink
            href={c.secondary.href}
            size="lg"
            variant="outline-white"
            event={c.secondary.event}
            eventPayload={{ cta: `v3_conversion_${variant}_secondary` }}
          >
            {c.secondary.label}
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-white/75">
          Mise en place offerte · Résiliable · Support FR
        </p>
      </div>
    </section>
  );
}
