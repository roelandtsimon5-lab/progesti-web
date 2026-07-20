# Automation Cursor — Blog PROGESTI

> Cadence : **1 article / semaine** (mardi 9h Europe/Paris).  
> Une fois Active + prompt correct → plus rien à faire (sauf remplir la file quand elle est vide).

## Réglages

| Champ | Valeur |
|--------|--------|
| Nom | `SEO AUTOMATION` |
| Trigger | **1 seul** : Every week on Tuesday at 09:00 |
| Cron | `0 9 * * 2` |
| Repo | `roelandtsimon5-lab/progesti-web` · branche **`master`** |
| Outils | Open PR (ou push) + Memories |

Pas de 2ᵉ trigger (l’UI n’en garde qu’un et affiche un warning).

## Instructions (coller dans le prompt — rien d’autre)

```
Tu publies UN article de blog PROGESTI pour le SEO.

1. Ouvre docs/blog/editorial-queue.md
2. Prends la première entrée status: todo
3. Si aucune → arrête et note "file vide"
4. Crée content/blog/{slug}.mdx (frontmatter complet + 900–1400 mots FR)
5. Maillage : au moins 3 liens internes (piliers /solutions /fonctionnalites /essai-gratuit /tarifs /alternative-propret)
6. CTA final vers /essai-gratuit
7. date + updatedAt = date du jour (Europe/Paris)
8. Passe la ligne de la file à status: done + published: YYYY-MM-DD
9. Commit: "blog: publish {slug}"
10. Push sur master (ou PR puis merge) pour déployer

Règles: pas de faux avis, pas de chiffres inventés, un seul article par run.
Réf: docs/PROMPT-BLOG-AUTO.md
```

## Après

1. Deploy auto sur push `master`.
2. Sitemap mis à jour via `getAllPosts()`.
3. File < 4 `todo` → demander de la prolonger.
