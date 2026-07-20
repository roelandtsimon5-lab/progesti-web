import Link from "next/link";
import { site, solutions } from "@/lib/site";
import { cta } from "@/lib/cta";
import { ButtonLink } from "@/components/ui/ButtonLink";

const columns = [
  {
    title: "Produit",
    links: [
      { href: "/fonctionnalites", label: "Fonctionnalités" },
      { href: "/tarifs", label: "Tarifs" },
      { href: cta.demo, label: "Démo" },
      { href: cta.trialApp, label: "Essai gratuit" },
      { href: "/integrations", label: "Intégrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      ...solutions.map((s) => ({ href: `/solutions/${s.slug}`, label: s.title })),
      { href: "/logiciel-entreprise-nettoyage", label: "Logiciel nettoyage" },
      { href: "/alternative-propret", label: "Alternative Propret" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/ressources", label: "Ressources" },
      { href: "/glossaire", label: "Glossaire" },
      { href: "/guides", label: "Guides" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/a-propos", label: "À propos" },
      { href: "/temoignages", label: "Témoignages" },
      { href: "/cas-clients", label: "Cas clients" },
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/confidentialite", label: "Confidentialité" },
      { href: "/cgv", label: "CGV" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-blue-deep text-white">
      <div className="container section !py-14">
        <div className="rounded-2xl bg-white/8 p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight">{site.name}</p>
            <p className="mt-2 text-sm text-white/90">
              Organisez bureaux, syndics, locaux pros et fin de chantier — du planning à la facture.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
            <ButtonLink
              href={cta.trialApp}
              event="trial_start"
              eventPayload={{ cta: "v3_footer_trial" }}
            >
              Essai 2 mois
            </ButtonLink>
            <ButtonLink
              href={cta.demo}
              variant="outline-white"
              eventPayload={{ cta: "v3_footer_demo" }}
            >
              Démo
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.25fr_repeat(4,1fr)]">
          <div>
            <p className="text-sm uppercase tracking-[0.14em] text-[#B8F5D4]">{site.tagline}</p>
            <p className="mt-4 max-w-sm text-sm text-white/90">{site.description}</p>
            <p className="mt-6 text-sm">
              <a
                className="font-semibold text-white underline underline-offset-2 hover:text-[#B8F5D4]"
                href={`tel:${site.phoneTel}`}
              >
                {site.phone}
              </a>
              <br />
              <a className="font-semibold text-white underline underline-offset-2 hover:text-[#B8F5D4]" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-white/80">
              {site.company.address}
              <br />
              {site.company.city}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-display text-sm font-bold uppercase tracking-wider text-white/90">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => {
                  const external = /^https?:\/\//i.test(link.href);
                  return (
                    <li key={`${col.title}-${link.href}`}>
                      {external ? (
                        <a
                          href={link.href}
                          className="text-sm text-white/70 transition hover:text-white"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-white/70 transition hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.company.legalName} — SIREN {site.company.siren} — RCS{" "}
            {site.company.rcs}
          </p>
          <p>
            Logiciel édité sous la marque {site.name} ·{" "}
            <Link href="/v2" className="hover:text-white/80">
              Archive V2
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
