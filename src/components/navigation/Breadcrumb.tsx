import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: readonly BreadcrumbItem[];
  dark?: boolean;
};

export function Breadcrumb({ items, dark }: Props) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-4">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="inline-flex items-center gap-1.5">
              {i > 0 ? (
                <span className={dark ? "text-white/35" : "text-line"} aria-hidden>
                  /
                </span>
              ) : null}
              {last || !item.href ? (
                <span
                  className={
                    dark
                      ? last
                        ? "max-w-[min(100%,20rem)] truncate font-semibold text-white/90 sm:max-w-none sm:whitespace-normal"
                        : "text-white/55"
                      : last
                        ? "max-w-[min(100%,20rem)] truncate font-semibold text-brand-navy sm:max-w-none sm:whitespace-normal"
                        : "text-slate"
                  }
                  aria-current={last ? "page" : undefined}
                  title={last ? item.label : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={
                    dark
                      ? "font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
                      : "font-medium text-slate underline-offset-4 hover:text-brand-navy-soft hover:underline"
                  }
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function solutionBreadcrumb(title: string, slug: string): BreadcrumbItem[] {
  return [
    { label: "Accueil", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: title },
  ];
}

export function moduleBreadcrumb(title: string): BreadcrumbItem[] {
  return [
    { label: "Accueil", href: "/" },
    { label: "Fonctionnalités", href: "/fonctionnalites" },
    { label: title },
  ];
}
