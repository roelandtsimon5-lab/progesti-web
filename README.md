# PROGESTI — Site commercial

## Démarrer

```bash
cd web
npm install
cp .env.example .env.local
npm run dev
```

## Variables d'environnement

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canonique landing (`https://progesti.fr`) |
| `NEXT_PUBLIC_AUTH_URL` | URL du **logiciel** Railway (login / essai) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (après consentement cookies) |
| `NEXT_PUBLIC_GOOGLE_CALENDAR_URL` | Lien Appointment Schedules sur `/rendez-vous` |
| `LEAD_WEBHOOK_URL` | Webhook CRM sur chaque lead |
| `RESEND_API_KEY` | Email de notification lead |
| `LEAD_NOTIFY_EMAIL` | Destinataire (défaut contact@progesti.fr) |

Défaut `NEXT_PUBLIC_AUTH_URL` si vide :
`https://new-era-planning-mvp-production.up.railway.app`

## Branchement logiciel (Railway)

| CTA landing | Destination |
|---|---|
| Connexion | `{AUTH_URL}/login` |
| Essai | lead `/api/lead` puis `{AUTH_URL}/creer-mon-espace` |
| Mot de passe oublié | `{AUTH_URL}/forgot-password` |

### Sur le service **app** (planning-mvp)

Ajouter / vérifier :

```
SELF_SERVE_SIGNUP_ENABLED=true
```

Sans ça, `/creer-mon-espace` affiche « inscription fermée ».

Emails invites / reset : `EMAIL_PROVIDER=brevo` + `BREVO_API_KEY` + `EMAIL_FROM`.

### Hébergement recommandé : 2 services Railway

| Service | Repo / dossier | Domaine |
|---|---|---|
| `planning-mvp` | New ERA / planning-mvp | app (ex. `app.progesti.fr`) |
| `progesti-web` | Progesti / web | `progesti.fr` |

Sur le service landing : `NEXT_PUBLIC_AUTH_URL` = URL publique du service app.

## Leads

`POST /api/lead` :
- validation email/nom
- honeypot `website`
- rate-limit IP
- écriture locale `.data/leads.jsonl`
- webhook + Resend si configurés

## Parcours

- Essai : `/essai-gratuit` → lead → app Railway `/creer-mon-espace`
- Démo : `/demo` → `/demo/live` (maquette produit)
- Login : redirect → app Railway `/login`
- SEO : `/logiciel-entreprise-nettoyage`

## Build

```bash
npm run build
```

Éditeur : MSNE SAS — contact@progesti.fr
