# Blog ops — PROGESTI

Cadence cible : **2 articles / semaine** (mardi + jeudi).

## Publication auto (recommandé pour Google)

**Cursor Automation cloud** mardi + jeudi 9h — setup : [`docs/blog/AUTOMATION-SETUP.md`](./blog/AUTOMATION-SETUP.md)

- File : [`docs/blog/editorial-queue.md`](./blog/editorial-queue.md)
- Prompt détaillé : [`docs/PROMPT-BLOG-AUTO.md`](./PROMPT-BLOG-AUTO.md)

Pourquoi pas le boot PC comme principal : Google préfère une cadence **fixe** ; le cloud publie même si ton PC est éteint.

### Plan B — démarrage Windows

```powershell
cd web
.\scripts\install-blog-logon-task.ps1
```

Ouvre Cursor + `docs/blog/RUN-TODAY.md` ; tu envoies `@docs/PROMPT-BLOG-AUTO.md`.  
Test : `.\scripts\blog-on-logon.ps1 -Force`

## Process manuel

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
- Publier plus d’un article par run auto
