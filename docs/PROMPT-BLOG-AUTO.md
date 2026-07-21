# Prompt — Publication auto blog PROGESTI

À coller / lancer quand le script de démarrage ouvre cette tâche.

## Mission

Publie **un seul** article de blog PROGESTI, le prochain de la file `docs/blog/editorial-queue.md`.

Cadence cible : **1 article / semaine** (mardi). Ne jamais publier plus d’un article par exécution.

## Étapes (dans l’ordre)

1. Ouvre `docs/blog/editorial-queue.md`.
2. Prends la **première ligne `status: todo`**. Si aucune → stop, dis « file vide ».
3. Vérifie qu’aucun fichier `content/blog/{slug}.mdx` n’existe déjà pour ce slug.
4. Lis 1–2 articles existants proches (même catégorie) pour le ton et le maillage.
5. Crée `content/blog/{slug}.mdx` avec frontmatter complet :

```yaml
---
title: "…"
slug: "…"
category: "…"   # une des blogCategories de src/lib/site.ts
excerpt: "…"
date: "YYYY-MM-DD"   # date du jour (Europe/Paris)
updatedAt: "YYYY-MM-DD"
readingTime: N
seoTitle: "…"
seoDescription: "…"
keywords: ["…", "…"]
---
```

6. Corps : **900–1400 mots**, FR, H2/H3, listes, ton gérant d’entreprise de nettoyage.
7. Maillage obligatoire (au moins 3 liens internes) parmi :
   - piliers `/logiciel-entreprise-nettoyage`, `/logiciel-planning-nettoyage`, `/logiciel-facturation-proprete`
   - `/alternative-propret`, `/solutions/…`, `/fonctionnalites/…`, `/essai-gratuit`, `/tarifs`
   - 1 article blog voisin si pertinent
8. CTA final clair vers essai 2 mois sans CB (lien `/essai-gratuit`).
9. Passe la ligne de la file à `status: done` + `published: YYYY-MM-DD`.
10. **Commit + mise en ligne obligatoires** (automation cloud) — sans ça le run est un **échec** :
    - `git add` l’article MDX + `docs/blog/editorial-queue.md`
    - `git commit -m "blog: publish {slug}"`
    - **Préférence A** : `git push origin HEAD:master` (push direct)
    - **Sinon** : PR **ready for review** (jamais `--draft` / jamais draft) → **merge immédiat** sur `master` → supprimer la branche
    - Vérifier que le fichier existe sur `master` avant de terminer
    - Interdit : laisser une PR draft / ouverte / non mergée

## Règles

- Ne pas inventer d’avis clients / chiffres non sourcés.
- Ne pas modifier les slugs d’articles déjà publiés.
- Pas de conseils juridiques définitifs (disclaimer si réglementation).
- Pas de cards / emojis inutiles dans le MDX.
- Un article = un fichier = un sujet de la file. Ne pas réécrire la file entière.
- Toujours committer et merger sur `master` en fin de run automation.
- Si une PR draft a déjà été créée pour le même slug : la passer en ready, la merger, fermer les doublons — ne pas en ouvrir une nouvelle.

## Fin

Réponse courte : slug publié, SHA sur `master` (pas seulement URL PR), titre, 3 liens internes, prochaine ligne `todo`.  
Si pas sur `master` → dire « ÉCHEC publication » + pourquoi.
