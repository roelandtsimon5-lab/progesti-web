# Blog ops — PROGESTI

Cadence cible : **2 articles / semaine** minimum.

## Process

1. **Brief** — requête cible, catégorie (`blogCategories`), 2–4 liens internes (pilier / solution / module / essai).
2. **Rédaction** — fichier `content/blog/{slug}.mdx` avec frontmatter :
   - `title`, `slug`, `category`, `excerpt`, `date`, `updatedAt`, `readingTime`
   - `seoTitle`, `seoDescription`, `keywords`
3. **Corps** — 800–1500 mots, H2/H3, listes, CTA essai en fin d’article.
4. **Publish** — commit + deploy ; le sitemap lit `getAllPosts()` automatiquement.
5. **Maillage** — depuis ressources / solutions / articles liés.

## Catégories

Voir `src/lib/site.ts` → `blogCategories`.

## Loader

`src/lib/blog.ts` parse MDX via `gray-matter` + `marked`.

## Ne pas

- Inventer de faux avis clients
- Changer les slugs existants (404)
- Promettre des conseils juridiques définitifs en réglementation (disclaimer)
