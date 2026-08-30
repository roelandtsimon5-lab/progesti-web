import Image from "next/image";
import Link from "next/link";
import type { NavMenuItem } from "@/lib/navigation";
import { getModuleCreativeAssets } from "@/lib/creative-assets";
import { getModuleContent } from "@/lib/modules-content";

type Props = {
  pillarTitle: string;
  pillarHref: string;
  prev?: NavMenuItem;
  next?: NavMenuItem;
};

function slugFromHref(href: string) {
  return href.split("/").pop() ?? "";
}

function PagerCard({
  item,
  direction,
}: {
  item: NavMenuItem;
  direction: "prev" | "next";
}) {
  const slug = slugFromHref(item.href);
  const assets = getModuleCreativeAssets(slug);
  const content = getModuleContent(slug);
  const image = assets?.hero ?? (content ? { src: content.image, alt: content.imageAlt } : undefined);
  const isPrev = direction === "prev";

  return (
    <Link
      href={item.href}
      className={`group overflow-hidden rounded-[2px] border border-line bg-paper transition hover:border-brand-navy-soft hover:bg-white hover:shadow-[0_8px_24px_rgba(1,41,57,0.06)] ${
        isPrev ? "" : "text-right sm:col-start-2"
      }`}
    >
      {image ? (
        <div className="relative h-24 overflow-hidden border-b border-line bg-brand-navy">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover opacity-85 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            sizes="(max-width: 640px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
        </div>
      ) : null}
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-muted">
          {isPrev ? "← Module précédent" : "Module suivant →"}
        </p>
        <p className="mt-2 font-sans text-lg font-extrabold text-brand-navy group-hover:text-brand-navy-soft">
          {item.label}
        </p>
        {item.hint ? <p className="mt-1 text-sm text-slate">{item.hint}</p> : null}
      </div>
    </Link>
  );
}

export function ModulePager({ pillarTitle, pillarHref, prev, next }: Props) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label={`Navigation ${pillarTitle}`}
      className="border-t border-line bg-white py-8"
    >
      <div className="container">
        <p className="mb-5 text-center">
          <Link
            href={pillarHref}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy-soft underline-offset-4 hover:text-brand-navy hover:underline"
          >
            ↑ Tous les modules · {pillarTitle}
          </Link>
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <PagerCard item={prev} direction="prev" />
          ) : (
            <div aria-hidden />
          )}
          {next ? <PagerCard item={next} direction="next" /> : null}
        </div>
      </div>
    </nav>
  );
}
