import Link from "next/link";
import Image from "next/image";
import { ModuleIcon } from "@/components/features/ModuleIcon";
import { Reveal } from "@/components/ui/Reveal";
import { getModuleCreativeAssets } from "@/lib/creative-assets";
import { getModuleNavIcon } from "@/lib/navigation";
import { modules } from "@/lib/site";
const flowSteps = [
  { slug: "planification", label: "Planning" },
  { slug: "pointage", label: "Pointage" },
  { slug: "clients", label: "Clients" },
  { slug: "facturation", label: "Facturation" },
  { slug: "rentabilite", label: "Rentabilité" },
] as const;

export function FeaturesHubFlow() {
  return (
    <section className="border-b border-line bg-paper py-12 md:py-14">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Flux métier</p>
          <h2 className="mt-3 font-sans text-2xl font-extrabold text-brand-navy md:text-3xl">
            Une seule base de la tournée à la marge
          </h2>
          <p className="mt-3 max-w-2xl text-slate">
            Chaque module alimente le suivant : plus de double saisie entre ops, compta et direction.{" "}
            <a
              href="#modules"
              className="font-semibold text-brand-navy-soft underline-offset-4 hover:underline"
            >
              Voir tous les modules
            </a>
          </p>
        </Reveal>

        <div className="relative mt-12 hidden md:block">
          <div className="absolute left-[10%] right-[10%] top-1/2 h-px -translate-y-1/2 bg-line" aria-hidden />
          <ol className="relative flex justify-between gap-2">
            {flowSteps.map((step) => {
              const icon = getModuleNavIcon(step.slug);
              const mod = modules.find((m) => m.slug === step.slug);
              const thumb = getModuleCreativeAssets(step.slug)?.hero;
              return (
                <li key={step.slug} className="flex flex-1 justify-center">
                  <Link
                    href={`/fonctionnalites/${step.slug}`}
                    className="group flex max-w-[9rem] flex-col items-center text-center"
                  >
                    {thumb ? (
                      <span className="relative mb-2 hidden h-16 w-full overflow-hidden rounded-[2px] border border-line opacity-0 shadow-sm transition duration-300 group-hover:opacity-100 xl:block">
                        <Image
                          src={thumb.src}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="144px"
                          aria-hidden
                        />
                      </span>
                    ) : null}
                    <span className="flex h-14 w-14 items-center justify-center rounded-[2px] border border-line bg-white shadow-sm transition group-hover:border-lime-cta group-hover:shadow-[0_8px_24px_rgba(1,41,57,0.08)]">
                      {icon ? <ModuleIcon icon={icon} /> : null}
                    </span>
                    <span className="mt-3 text-sm font-bold text-brand-navy">{step.label}</span>
                    <span className="mt-1 text-[11px] leading-snug text-muted">
                      {mod && mod.short.length > 48 ? `${mod.short.slice(0, 45)}…` : mod?.short}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>

        <ul className="mt-8 flex gap-3 overflow-x-auto pb-2 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {flowSteps.map((step) => {
            const icon = getModuleNavIcon(step.slug);
            return (
              <li key={step.slug} className="shrink-0">
                <Link
                  href={`/fonctionnalites/${step.slug}`}
                  className="flex w-[8.5rem] flex-col items-center rounded-[2px] border border-line bg-white p-4 text-center"
                >
                  {icon ? (
                    <span className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-lime-cta/20">
                      <ModuleIcon icon={icon} className="h-4 w-4" />
                    </span>
                  ) : null}
                  <span className="mt-2 text-xs font-bold text-brand-navy">{step.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
