# Automation Cursor — Blog PROGESTI

> Cadence : **1 article / semaine** (mardi 9h Europe/Paris).  
> Objectif : **commit + push sur `master`** pour déployer sans intervention.

## Réglages UI (Cursor Automations)

| Champ | Valeur |
|--------|--------|
| Nom | `SEO AUTOMATION` |
| Trigger | **1 seul** : Tuesday 09:00 (`0 9 * * 2`) |
| Repo | `roelandtsimon5-lab/progesti-web` · branche **`master`** |
| Outils | **Open Pull or Merge Request** + Memories |

### Critique (sinon → draft sans prod)

Dans l’outil PR de l’automation, active **Merge** et autorise l’écriture / push sur **`master`**.  
Sans ça, Cursor ouvre une **draft** et l’article n’apparaît jamais en prod (cas du 21/07/2026).

Checklist UI avant le prochain mardi :
1. Outil PR : merge activé
2. Branche cible : `master`
3. Instructions = **uniquement** le bloc ci-dessous (pas ce fichier entier)
4. Statut automation : **Active**

## Instructions (remplacer TOUT le prompt actuel par ceci)

```
Tu publies UN article de blog PROGESTI pour le SEO, puis tu le mets EN LIGNE sur master.

Critère de succès UNIQUE : le fichier content/blog/{slug}.mdx doit exister sur la branche master à la fin du run. Une PR draft ou ouverte = ÉCHEC.

1. Ouvre docs/blog/editorial-queue.md
2. Prends la première entrée status: todo
3. Si aucune → arrête et note "file vide"
4. Si une PR draft ouverte existe déjà pour ce slug → ready + merge + fermer doublons, puis stop (ne pas recréer l’article)
5. Crée content/blog/{slug}.mdx (frontmatter complet + 900–1400 mots FR)
6. Maillage : au moins 3 liens internes (piliers /solutions /fonctionnalites /essai-gratuit /tarifs /alternative-propret)
7. CTA final vers /essai-gratuit
8. date + updatedAt = date du jour (Europe/Paris)
9. Passe la ligne de la file à status: done + published: YYYY-MM-DD
10. git add (article + editorial-queue.md) ; git commit -m "blog: publish {slug}"
11. Publier :
    - Préférence A : push direct sur master
    - Sinon : PR ready (JAMAIS draft) vers master, puis MERGE immédiat, puis delete branch
12. Vérifie que le fichier est sur master. Sinon corrige avant de terminer.

Règles: pas de faux avis, pas de chiffres inventés, un seul article par run.
Réf: docs/PROMPT-BLOG-AUTO.md
```

## Après un run réussi

- Commit visible sur `master` (pas seulement une PR)
- Article sur https://progesti.fr/blog/{slug} après deploy
- File éditoriale mise à jour (`done`)
- Aucune PR draft ouverte pour le blog
