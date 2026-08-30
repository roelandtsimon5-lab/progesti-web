import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta, ctaLabels } from "@/lib/cta";
import { site } from "@/lib/site";

type Variant = "demo" | "essai" | "contact";

const copy: Record<
  Variant,
  {
    title: string;
    lead: string;
    primary: { href: string; label: string };
    secondary: { href: string; label: string };
  }
> = {
  demo: {
    title: "Prêt à simplifier votre gestion ?",
    lead: "Demandez une démo et découvrez PROGESTI sur vos cas d'usage réels.",
    primary: {
      href: cta.demo,
      label: ctaLabels.demoGate,
    },
    secondary: { href: cta.trial, label: ctaLabels.trial },
  },
  essai: {
    title: "Mettez PROGESTI au travail",
    lead: `${ctaLabels.trial}, sans carte bancaire. Ou ${ctaLabels.demoGate.toLowerCase()} sur vos cas réels.`,
    primary: {
      href: cta.trial,
      label: ctaLabels.trial,
    },
    secondary: { href: cta.demo, label: ctaLabels.demoGate },
  },
  contact: {
    title: "Une question ? On vous répond",
    lead: "Commercial, migration, essai — équipe MSNE SAS, Toulouse (31).",
    primary: { href: "/contact", label: "Nous contacter" },
    secondary: {
      href: cta.demo,
      label: ctaLabels.demoGate,
    },
  },
};

type Props = {
  variant?: Variant;
  className?: string;
};

export function ConversionBlock({ variant = "demo", className = "" }: Props) {
  const c = copy[variant];
  const primaryVariant = variant === "essai" ? "trial" : "white";

  return (
    <section className={`gradient-cta text-white ${className}`.trim()}>
      <div className="container py-14 text-center md:py-16">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-lime-cta/90">
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
            variant={primaryVariant}
            className="!rounded-[2px]"
            event={variant === "essai" ? "trial_start" : "cta_click"}
            eventPayload={{ cta: `conversion_${variant}_primary` }}
          >
            {c.primary.label}
          </ButtonLink>
          <ButtonLink
            href={c.secondary.href}
            size="lg"
            variant="outline-white"
            className="!rounded-[2px]"
            event={variant === "demo" ? "trial_start" : "cta_click"}
            eventPayload={{ cta: `conversion_${variant}_secondary` }}
          >
            {c.secondary.label}
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-white/75">
          149 € HT/mois · Tous modules inclus · Support FR
        </p>
      </div>
    </section>
  );
}
