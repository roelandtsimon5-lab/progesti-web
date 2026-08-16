# Railway — landing + app

## Service logiciel (déjà déployé)

Variables à avoir :

- `SELF_SERVE_SIGNUP_ENABLED=true` ← **obligatoire** pour le bouton Essai
- `EMAIL_PROVIDER=brevo`
- `BREVO_API_KEY=…`
- `EMAIL_FROM=…` (expéditeur vérifié Brevo)

URL actuelle :
`https://app.progesti.fr`

## Service landing (à créer)

1. New Project / Add service → dossier `Progesti/web` (ou repo dédié)
2. Variables :
   - `NEXT_PUBLIC_SITE_URL=https://progesti.fr`
   - `NEXT_PUBLIC_AUTH_URL=https://app.progesti.fr`
3. Domaine custom `progesti.fr` → ce service

Les boutons Connexion / Essai pointent déjà vers l’app via `NEXT_PUBLIC_AUTH_URL`.
