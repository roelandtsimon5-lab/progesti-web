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

Dans l’outil PR : active **Merge** / autorise l’écriture sur `master` si proposé.  
Sinon l’agent crée une draft et rien n’apparaît en prod.

## Instructions (remplacer TOUT le prompt actuel par ceci)

```
Tu publies UN article de blog PROGESTI pour le SEO, puis tu le mets EN LIGNE.

1. Ouvre docs/blog/editorial-queue.md
2. Prends la première entrée status: todo
3. Si aucune → arrête et note "file vide"
4. Crée content/blog/{slug}.mdx (frontmatter complet + 900–1400 mots FR)
5. Maillage : au moins 3 liens internes (piliers /solutions /fonctionnalites /essai-gratuit /tarifs /alternative-propret)
6. CTA final vers /essai-gratuit
7. date + updatedAt = date du jour (Europe/Paris)
8. Passe la ligne de la file à status: done + published: YYYY-MM-DD
9. git add les fichiers touchés (article + editorial-queue.md)
10. git commit -m "blog: publish {slug}"
11. OBLIGATOIRE pour publier :
    - Préférence A : push direct sur master
    - Sinon : ouvre une PR NON-draft vers master, puis MERGE immédiatement la PR
12. Ne laisse JAMAIS une PR draft ouverte sans merge — le site ne se mettrait pas à jour

Règles: pas de faux avis, pas de chiffres inventés, un seul article par run.
Réf: docs/PROMPT-BLOG-AUTO.md
```

## Après un run réussi

- Commit visible sur `master`
- Article sur https://progesti.fr/blog/{slug} après deploy
- File éditoriale mise à jour (`done`)
