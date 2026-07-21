# SEO AUTOMATION — setup en 2 minutes

## 1. Colle le prompt (30 secondes)

1. Ouvre [`AUTOMATION-PROMPT-PASTE.txt`](./AUTOMATION-PROMPT-PASTE.txt)
2. **Ctrl+A** → **Ctrl+C**
3. Cursor → Automations → **SEO AUTOMATION** → zone Instructions
4. **Ctrl+A** → **Ctrl+V** → Save

Ne colle **jamais** ce fichier `AUTOMATION-SETUP.md` — uniquement le `.txt`.

## 2. Vérifie ces 4 réglages

| Réglage | Doit être |
|---------|-----------|
| Active | ON |
| Trigger | mardi 09:00 (`0 9 * * 2`) — **1 seul** |
| Repo / branche | `roelandtsimon5-lab/progesti-web` · `master` |
| Outil PR | **Merge** activé (pas seulement Open PR / Comment / Approval) |

Sans **Merge** → draft → rien en prod.

## 3. C’est bon si…

Après un mardi : commit `blog: publish …` sur `master` + article sur `https://progesti.fr/blog/{slug}`.

Sinon : reviens ici, étape 2 (Merge).
