import Link from "next/link";
import Image from "next/image";
import { ModuleIcon } from "@/components/features/ModuleIcon";
import { getModuleCreativeAssets } from "@/lib/creative-assets";
import { getModuleContent } from "@/lib/modules-content";
import { getModuleNavIcon } from "@/lib/navigation";

type ModuleLink = {
  slug: string;
  title: string;
  short: string;
};

type PillarLink = {
  href: string;
  label: string;
};

type Props = {
  moduleTitle: string;
  slug: string;
  intro: string;
  modules: readonly ModuleLink[];
  pillarLink?: PillarLink;
};

export function ModuleConnectStrip({ moduleTitle, slug, intro, modules: related, pillarLink }: Props) {
  const currentIcon = getModuleNavIcon(slug);

  return (
    <section id="ecosysteme" className="scroll-mt-36 border-t border-line bg-paper py-10 md:py-12">
      <div className="container">
        <p className="eyebrow">Écosystème PROGESTI</p>
        <h2 className="mt-2 font-sans text-xl font-extrabold text-brand-navy md:text-2xl">
          {moduleTitle} ne fonctionne pas isolé
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate">
          {intro}
          {pillarLink ? (
            <>
              {" "}Découvrez aussi notre{" "}
              <Link href={pillarLink.href} className="font-semibold text-brand-navy hover:underline">
                {pillarLink.label}
              </Link>
              .
            </>
          ) : null}
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            {related.map((m) => {
              const icon = getModuleNavIcon(m.slug);
              const assets = getModuleCreativeAssets(m.slug);
              const content = getModuleContent(m.slug);
              const thumb = assets?.hero ?? (content ? { src: content.image, alt: content.imageAlt } : null);
              return (
                <Link
                  key={m.slug}
                  href={`/fonctionnalites/${m.slug}`}
                  className="group flex items-center gap-3 overflow-hidden rounded-[2px] border border-line bg-white transition hover:border-brand-navy-soft hover:shadow-[0_8px_24px_rgba(1,41,57,0.08)] lg:flex-col lg:p-0"
                >
                  {thumb ? (
                    <div className="relative hidden h-20 w-24 shrink-0 overflow-hidden border-r border-line sm:block lg:h-28 lg:w-full lg:border-b lg:border-r-0">
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        fill
                        className="object-cover opacity-90 transition group-hover:scale-[1.03] group-hover:opacity-100"
                        sizes="120px"
                      />
                    </div>
                  ) : null}
                  <div className="flex min-w-0 flex-1 items-center gap-3 p-4 lg:flex-col lg:text-center">
                    {icon ? (
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] bg-lime-cta/20 group-hover:bg-lime-cta/30">
                        <ModuleIcon icon={icon} />
                      </span>
                    ) : null}
                    <div className="min-w-0">
                      <p className="font-sans text-sm font-bold text-brand-navy">{m.title}</p>
                      <p className="mt-0.5 line-clamp-2 text-xs text-slate">{m.short}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="hidden flex-col items-center justify-center gap-2 text-muted lg:flex" aria-hidden>
            <span className="text-2xl">↔</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Lié à</span>
          </div>

          <div className="overflow-hidden rounded-[2px] border-2 border-lime-cta/40 bg-white lg:flex lg:flex-col">
            {(() => {
              const assets = getModuleCreativeAssets(slug);
              const content = getModuleContent(slug);
              const hero = assets?.hero ?? (content ? { src: content.image, alt: content.imageAlt } : null);
              return hero ? (
              <div className="relative h-32 overflow-hidden border-b border-line bg-brand-navy lg:h-36">
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
              </div>
            ) : null;
            })()}
            <div className="flex flex-1 flex-col items-center justify-center gap-3 p-5 text-center">
              {currentIcon ? (
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-[2px] bg-brand-navy">
                  <ModuleIcon icon={currentIcon} className="text-lime-cta" />
                </span>
              ) : null}
              <div>
                <p className="font-sans text-base font-bold text-brand-navy">{moduleTitle}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-lime-cta">
                  Module actuel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
