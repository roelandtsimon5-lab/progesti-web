# Prompt — Accueil auto prospect PROGESTI

À coller / lancer pour **implémenter ou configurer** l’automatisation d’accueil d’un nouveau prospect (Make / n8n / Zapier / code dans `/api/lead`).

## Mission

Dès qu’un **nouveau prospect** s’inscrit ou contacte PROGESTI (essai, landing Ads, formulaire contact), déclencher **immédiatement** 4 envois :

| # | Destinataire | Canal | Objectif |
|---|--------------|-------|----------|
| 1 | Prospect | E-mail HTML | Bienvenue pro, chaleureuse, rassurante |
| 2 | Prospect | SMS | Message perso de Simon + lien/appel vers son portable |
| 3 | Simon | E-mail | Alerte « nouveau prospect » avec toutes les infos |
| 4 | Simon | SMS | Alerte courte pour rappeler / rappeler vite |

Un lead = **une seule** exécution (dédupliquer sur e-mail + téléphone sur 24 h).

## Déclencheur

Source de vérité actuelle : `POST /api/lead` (`web/src/app/api/lead/route.ts`).

Payload typique :

```json
{
  "at": "ISO-8601",
  "intent": "trial | ads_quick | contact | …",
  "campaign": "string | null",
  "name": "Prénom Nom",
  "email": "prospect@entreprise.fr",
  "phone": "06 …",
  "company": "Nom société | null"
}
```

Hook possible : `LEAD_WEBHOOK_URL` déjà prévu, ou enrichissement Resend / SMS dans la route.

## Variables à configurer (ne pas hardcoder en clair dans le repo)

| Variable | Exemple / usage |
|----------|-----------------|
| `SIMON_EMAIL` | e-mail perso de Simon (alerte) |
| `SIMON_MOBILE` | portable Simon en E.164, ex. `+336XXXXXXXX` |
| `SIMON_MOBILE_DISPLAY` | format FR lisible, ex. `06 XX XX XX XX` |
| `FROM_EMAIL` | `Simon de PROGESTI <contact@progesti.fr>` |
| `SITE_URL` | `https://progesti.fr` |
| `ESSAI_URL` | `https://progesti.fr/essai-gratuit` (ou URL app essai) |
| Prestataire e-mail | Resend (déjà branché côté lead) |
| Prestataire SMS | Twilio / Brevo SMS / OVH SMS — lien `sms:` ou `tel:` vers `SIMON_MOBILE` |

Téléphone **public** site (standard) : `05 82 95 09 19` — **ne pas** l’utiliser pour le SMS perso ; le SMS prospect doit pointer vers le **portable de Simon**.

---

## 1 — E-mail prospect (bienvenue)

### Métadonnées

- **From :** `Simon de PROGESTI <contact@progesti.fr>`
- **Reply-To :** `SIMON_EMAIL` (ou `contact@progesti.fr`)
- **To :** `{{email}}`
- **Subject :** `Bienvenue {{prénom}} — je m’occupe de votre essai PROGESTI`
- **Preheader :** `Simon, gérant de PROGESTI — je vous appelle rapidement pour démarrer.`

Extraire `{{prénom}}` = premier mot de `name` (capitalisé). Si un seul mot → utiliser ce mot.

### Design (HTML e-mail)

Direction marque PROGESTI V3 — **pas** de purple SaaS générique :

- Fond page : `#F7FAFC`
- Bandeau / header : `#0B3D6E`
- Accent CTA : `#1FA86B`
- Texte : `#0F2438`
- Police web-safe stack : `Arial, Helvetica, sans-serif` (e-mail)
- Largeur contenu : **600 px**, une colonne, mobile-first
- Logo texte « PROGESTI » en blanc dans le header (ou image logo si dispo)
- **Pas** de cards empilées inutiles, **pas** d’emojis décoratifs, **pas** de stats / badges flottants
- Un seul CTA principal vert : « Accéder à mon essai » → `ESSAI_URL`
- Pied : MSNE SAS · Tournefeuille · `contact@progesti.fr` · lien désinscription / contact

### Corps (texte à respecter — FR, tutoiement interdit, vouvoiement)

Structure HTML (sections dans l’ordre) :

1. **Header** bleu profond : PROGESTI
2. **Titre** : Bonjour {{prénom}},
3. **Accroche** (1 court paragraphe) :
   > Merci pour votre inscription. Je suis **Simon**, gérant de PROGESTI — le logiciel conçu pour les entreprises de nettoyage et de propreté.
4. **Promesse** (1 paragraphe) :
   > Je vous contacte rapidement pour vous aider à configurer la plateforme : vos sites, votre planning, et vos premiers passages. L’essai dure **2 mois**, sans carte bancaire.
5. **CTA** bouton vert pleine largeur (ou quasi) : Accéder à mon essai
6. **Bloc contact perso** (fond `#E8F2FA`, texte simple) :
   > Besoin d’échanger tout de suite ? Appelez-moi ou écrivez-moi au **{{SIMON_MOBILE_DISPLAY}}** — c’est mon portable.
   > Lien cliquable : `tel:{{SIMON_MOBILE}}`
7. **Signature** :
   > À très vite,  
   > **Simon**  
   > Gérant — PROGESTI  
   > {{SIMON_MOBILE_DISPLAY}} · contact@progesti.fr  
   > https://progesti.fr
8. **Footer** légal discret

Version texte brut (fallback multipart) obligatoire, même contenu sans HTML.

---

## 2 — SMS prospect (perso Simon)

### Règles SMS

- **To :** téléphone du prospect (`phone`, normalisé E.164 FR)
- **Max ~160 caractères** si possible (1 SMS) ; sinon 2 SMS max
- Ton : direct, sympa, pro — comme un gérant qui rappelle vite, pas un robot marketing
- Inclure le numéro ou un lien `tel:` / affichage du portable pour rappel en 1 tap
- Pas de liens courts douteux ; si lien web : uniquement `progesti.fr`

### Message (coller tel quel, variables remplacées)

```
Bonjour {{prénom}}, Simon de PROGESTI. Merci pour votre inscription — je vous appelle vite pour démarrer la config. Besoin de moi avant ? {{SIMON_MOBILE_DISPLAY}}
```

Variante si prénom manquant :

```
Bonjour, Simon gérant de PROGESTI. Merci pour votre inscription — je vous appelle rapidement pour configurer la plateforme. Mon portable : {{SIMON_MOBILE_DISPLAY}}
```

Ne **pas** ajouter d’opt-out marketing verbeux dans ce SMS transactionnel d’accueil (le lead vient de s’inscrire). Respecter la réglementation SMS du prestataire (expéditeur alphanumérique `PROGESTI` si possible).

---

## 3 — E-mail Simon (alerte nouveau prospect)

### Métadonnées

- **From :** `PROGESTI Leads <noreply@progesti.fr>` (ou Resend configuré)
- **To :** `SIMON_EMAIL`
- **Subject :** `Nouveau prospect — {{name}} · {{phone}}`
- Priorité haute si le prestataire le permet

### Corps (HTML simple ou texte — lisibilité mobile)

```
Nouveau prospect PROGESTI

Nom / prénom : {{name}}
E-mail       : {{email}}
Téléphone    : {{phone}}
Entreprise   : {{company|—}}
Intent       : {{intent}}
Campagne     : {{campaign|—}}
Reçu le      : {{at}} (Europe/Paris)

Actions rapides :
• Appeler : tel:{{phone_e164}}
• Écrire  : mailto:{{email}}
```

Pas besoin d’un design marketing — e-mail **outil**, clair, scannable en 3 secondes.

---

## 4 — SMS Simon (alerte)

### Message

```
PROGESTI — nouveau prospect
{{name}}
{{phone}}
{{email}}
{{company}}
```

Si `company` vide, omettre la ligne. Garder court pour lecture sur écran verrouillé.

---

## Ordre d’exécution

1. Valider lead (nom + e-mail ou téléphone selon intent) — déjà fait dans `/api/lead`
2. Normaliser téléphone FR → E.164
3. Dédup 24 h (même e-mail **ou** même mobile) → si doublon : **ne rien renvoyer** au prospect ; optionnel : notifier Simon « lead déjà vu »
4. En parallèle (Promise.allSettled) :
   - E-mail prospect
   - SMS prospect
   - E-mail Simon
   - SMS Simon
5. Logger succès / échec par canal (ne pas faire échouer l’API lead si un SMS rate)

## Règles

- Marque : **PROGESTI** (pas « Progestina »). Société légale : MSNE SAS.
- Simon = gérant, tutoiement **interdit** côté prospect, vouvoiement obligatoire.
- Pas de promesse juridique / ROI inventé dans l’e-mail.
- Pas de pièce jointe.
- Ne pas spammer : 1 bienvenue e-mail + 1 SMS prospect max par lead.
- RGPD : données utilisées uniquement pour rappel commercial / onboarding suite à demande explicite (formulaire).
- Si e-mail prospect = placeholder `*@lead.progesti.fr` (intent `ads_quick` sans e-mail) → **skip e-mail prospect**, garder SMS prospect + alertes Simon.
- Si téléphone invalide → skip SMS concernés, garder e-mails.

## Implémentation (code)

Déjà branché dans `web/src/lib/lead-notify.ts` + `web/src/app/api/lead/route.ts`.

### Stack la moins chère

| Canal | Outil | Coût |
|-------|--------|------|
| E-mail prospect + e-mail Simon | **Resend** | **0 €** (100/jour) |
| SMS Simon | **Free Mobile** (notif SMS) | **0 €** |
| SMS prospect (+ Simon si pas Free) | **Brevo** crédits SMS | ~**0,06 €**/SMS FR |

Sans Free Mobile : un seul `BREVO_API_KEY` couvre les 2 SMS.

### Variables Railway (`progesti-web`)

```
RESEND_API_KEY=re_…
LEAD_FROM_EMAIL=PROGESTI <contact@progesti.fr>
LEAD_NOTIFY_EMAIL=ton@email.fr
SIMON_MOBILE=+336…
SIMON_MOBILE_DISPLAY=06 …
LEAD_NOTIFY_PHONE=+336…
BREVO_API_KEY=xkeysib-…
BREVO_SMS_SENDER=PROGESTI
FREE_MOBILE_USER=…   # option gratuit
FREE_MOBILE_PASS=…
```

## Checklist test manuel

- [ ] Lead essai avec nom + e-mail + mobile → 4 messages reçus
- [ ] Lead Ads prénom + tél sans e-mail réel → SMS prospect + alertes Simon, pas d’e-mail fantôme
- [ ] Double submit < 24 h → pas de 2e bienvenue prospect
- [ ] Clic `tel:` / numéro dans SMS → ouvre l’appel vers Simon
- [ ] Subject alerte Simon lisible sur mobile
