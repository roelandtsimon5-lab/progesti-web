import { getPostBySlug } from "@/lib/blog";
import { modules, solutions } from "@/lib/site";

const moduleLabels = Object.fromEntries(
  modules.map((m) => [`/fonctionnalites/${m.slug}`, m.title]),
) as Record<string, string>;

const solutionLabels = Object.fromEntries(
  solutions.map((s) => [`/solutions/${s.slug}`, s.title]),
) as Record<string, string>;

const staticLabels: Record<string, string> = {
  "/essai-gratuit": "Essai gratuit",
  "/tarifs": "Tarifs",
  "/blog": "Blog",
  "/contact": "Contact",
  "/demo": "Démo",
};

/** Libellé lisible pour un lien « Voir aussi » du glossaire. */
export function glossaryLinkLabel(href: string): string {
  if (moduleLabels[href]) return moduleLabels[href];
  if (solutionLabels[href]) return solutionLabels[href];
  if (staticLabels[href]) return staticLabels[href];
  if (href.startsWith("/blog/")) {
    const slug = href.replace("/blog/", "");
    const post = getPostBySlug(slug);
    if (post?.title) return post.title;
    return slug
      .split("-")
      .slice(0, 5)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  return href.replace(/^\//, "").replace(/-/g, " ");
}
