import Link from "next/link";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Produit",
    links: [
      { href: "/fonctionnalites", label: "Fonctionnalités" },
      { href: "/tarifs", label: "Tarifs" },
      { href: "/demo", label: "Démo" },
      { href: "/essai-gratuit", label: "Essai gratuit" },
      { href: "/integrations", label: "Intégrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/logiciel-entreprise-nettoyage", label: "Logiciel nettoyage" },
      { href: "/logiciel-planning-nettoyage", label: "Planning" },
      { href: "/logiciel-facturation-proprete", label: "Facturation" },
      { href: "/alternative-propret", label: "Alternative Propret" },
      { href: "/rendez-vous", label: "Rendez-vous" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/ressources", label: "Ressources" },
      { href: "/guides", label: "Guides" },
      { href: "/comparatifs", label: "Comparatifs" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/a-propos", label: "À propos" },
      { href: "/clients", label: "Clients" },
      { href: "/temoignages", label: "Témoignages" },
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/confidentialite", label: "Confidentialité" },
      { href: "/cgv", label: "CGV" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="container section !py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight">{site.name}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.14em] text-emerald">{site.tagline}</p>
            <p className="mt-4 max-w-sm text-sm text-white/75">{site.description}</p>
            <p className="mt-6 text-sm">
              <a className="font-semibold text-emerald hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-white/70">
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
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-emerald">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.company.legalName} — SIREN {site.company.siren} — RCS{" "}
            {site.company.rcs}
          </p>
          <p>Logiciel édité sous la marque {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
