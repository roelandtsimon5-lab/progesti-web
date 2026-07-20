# Automation Cursor — Blog PROGESTI (à créer)

> **Pourquoi ça** : 2 articles / semaine fixes → meilleur signal SEO qu’un boot PC aléatoire.  
> **Toi** : créer l’automation une fois, puis plus rien (sauf fill up la file quand elle est vide).

## Réglages à mettre dans Cursor → Automations

| Champ | Valeur |
|--------|--------|
| Nom | `PROGESTI — Blog mardi/jeudi` |
| Description | Publie 1 article MDX depuis la file éditoriale, 2×/semaine. |
| Déclencheur | **2 automations** (l’UI n’accepte pas `2,4` dans un seul cron) |
| Cron mardi | `0 9 * * 2` |
| Cron jeudi | `0 9 * * 4` |
| Repo | `roelandtsimon5-lab/progesti-web` · branche **`master`** |
| Outils | Open PR (ou push master) + Memories OK |

## Instructions (coller dans le prompt de l’automation)

```
Tu publies UN article de blog PROGESTI pour le SEO.

1. Ouvre docs/blog/editorial-queue.md
2. Prends la première entrée status: todo
3. Si aucune → arrête et note "file vide" dans un commentaire de fin de run
4. Crée content/blog/{slug}.mdx (frontmatter complet + 900–1400 mots FR)
5. Maillage : au moins 3 liens internes (piliers /solutions /fonctionnalites /essai-gratuit /tarifs /alternative-propret ou article voisin)
6. CTA final vers /essai-gratuit (essai 2 mois sans CB)
7. date + updatedAt = date du jour (Europe/Paris)
8. Passe la ligne de la file à status: done + published: YYYY-MM-DD
9. Commit avec message: "blog: publish {slug}"
10. Push sur la branche de déploiement pour que le sitemap se mette à jour

Règles: pas de faux avis clients, pas de chiffres inventés, un seul article par run, ne pas toucher aux slugs déjà publiés.
Référence détaillée: docs/PROMPT-BLOG-AUTO.md
```

## Après création

1. Vérifie que le deploy (Vercel / hébergeur) part bien sur chaque push `main`.
2. Search Console : le sitemap reprend déjà les nouveaux posts automatiquement.
3. Quand la file a < 4 `todo`, demande d’en regénérer 8–12.

## Plan B (déjà installé)

Tâche Windows `Progesti-Blog-OnLogon` : ouvre Cursor au boot mardi/jeudi.  
Utile seulement si tu n’actives pas l’Automation cloud. Sinon tu peux la désactiver :

```powershell
Unregister-ScheduledTask -TaskName Progesti-Blog-OnLogon -Confirm:$false
```
