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
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (défaut `GTM-K65MM8Q4`, Consent Mode v2) |
| `NEXT_PUBLIC_GOOGLE_CALENDAR_URL` | Lien Appointment Schedules sur `/rendez-vous` |
| `LEAD_WEBHOOK_URL` | Webhook CRM sur chaque lead |
| `RESEND_API_KEY` | E-mails bienvenue prospect + alerte Simon (gratuit) |
| `LEAD_FROM_EMAIL` | Expéditeur Resend (après vérif domaine : `PROGESTI <contact@progesti.fr>`) |
| `LEAD_NOTIFY_EMAIL` | E-mail alerte Simon (défaut contact@progesti.fr) |
| `SIMON_MOBILE` / `SIMON_MOBILE_DISPLAY` | Portable affiché au prospect |
| `LEAD_NOTIFY_PHONE` | Portable qui reçoit l’alerte SMS (si pas Free Mobile) |
| `BREVO_API_KEY` | SMS prospect (+ Simon) — crédits ~0,06 €/SMS FR |
| `FREE_MOBILE_USER` / `FREE_MOBILE_PASS` | Alertes Simon **gratuites** (Free Mobile) |

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
- validation email/nom/téléphone
- honeypot `website`
- rate-limit IP
- écriture locale `.data/leads.jsonl`
- webhook si configuré
- **bienvenue auto** : e-mail + SMS prospect, e-mail + SMS Simon (`src/lib/lead-notify.ts`)

### Setup le moins cher (recommandé)

1. **Resend** (gratuit, 100 e-mails/jour) — crée une clé → `RESEND_API_KEY`. Vérifie le domaine `progesti.fr` puis mets `LEAD_FROM_EMAIL=PROGESTI <contact@progesti.fr>`.
2. **Ton portable** → `SIMON_MOBILE=+336…` et `SIMON_MOBILE_DISPLAY=06 …`.
3. **Alertes SMS Simon gratuites** si tu es chez **Free Mobile** : Espace abonné → Mes options → Notifications SMS → active et copie user/pass → `FREE_MOBILE_USER` / `FREE_MOBILE_PASS`.
4. **SMS au prospect** : compte [Brevo](https://www.brevo.com) (déjà utile pour l’app) → achète un petit pack de crédits SMS → `BREVO_API_KEY`. Coût typique ~**0,05–0,07 €** / SMS FR. Sans Free Mobile, le même Brevo envoie aussi l’alerte à `LEAD_NOTIFY_PHONE`.

À coller sur Railway (`progesti-web`) dans les variables d’environnement. Détail messages : `docs/PROMPT-PROSPECT-WELCOME.md`.

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
