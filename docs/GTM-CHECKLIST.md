# GTM / Google Ads — checklist côté Simon

Conteneur site : **`GTM-K65MM8Q4`** (chargé sur toutes les pages).

Événements déjà poussés dans `dataLayer` :

| Event | Quand |
|-------|--------|
| `page_view` | Chaque navigation (App Router) |
| `cta_click` | Clics boutons trackés |
| `form_submit` | Lead / contact / ads |
| `trial_start` | Démarrage essai |
| `signup_start` | Création compte essai |
| `demo_view` | Accès démo |
| `consent_update` | Accept / refuse cookies |

---

## 1. Hébergeur (Vercel / Railway / autre)

Ajouter la variable d’environnement (recommandé même si un défaut existe dans le code) :

```
NEXT_PUBLIC_GTM_ID=GTM-K65MM8Q4
```

Redeploy après ajout.

---

## 2. Google Tag Manager (tagmanager.google.com)

1. Ouvre le conteneur **GTM-K65MM8Q4**
2. **Balises → Nouvelle**

### A. GA4 Configuration
- Type : **Google Analytics : configuration GA4**
- ID de mesure : ton `G-XXXXXXXX` (crée une propriété GA4 si besoin)
- Déclencheur : **All Pages** + événement personnalisé `page_view` (ou les deux)

### B. GA4 Event — form_submit
- Type : **GA4 Event**
- Nom de l’événement : `form_submit`
- Déclencheur : Événement personnalisé = `form_submit`

### C. GA4 Event — trial_start
- Idem avec `trial_start`

### D. Google Ads — Conversion (après étape 3)
- Type : **Google Ads Conversion Tracking**
- Coller Conversion ID + Label depuis Google Ads
- Déclencheur : `form_submit` **ou** `trial_start` (recommandé : `trial_start` pour essai, `form_submit` pour leads démo)

3. **Envoyer** → **Publier** le conteneur GTM

---

## 3. Google Ads (ads.google.com)

1. **Objectifs → Conversions → Résumé → + Nouvelle conversion**
2. Source : **Site web**
3. Catégorie : **Soumission de lead** (ou Achat / Inscription selon ton funnel)
4. Choisis **Utiliser Google Tag Manager**
5. Copie **ID** + **Label** → colle dans la balise GTM (étape 2.D)
6. Dans la campagne Search : sélectionne cette conversion comme **objectif principal**

Conversions utiles PROGESTI :
- `trial_start` = démarrage essai (prioritaire)
- `form_submit` = lead formulaire (démo / contact / ads)

---

## 4. Lier les comptes

1. GA4 → **Admin → Liens Google Ads** → lier ton compte Ads  
2. Google Ads → **Outils → Linked accounts → Google Analytics** → confirmer  
3. Attendre 24–48 h pour voir les conversions dans Ads

---

## 5. Test rapide (obligatoire)

1. Installe l’extension **Tag Assistant** (Chrome)
2. Va sur `https://progesti.fr/lp/ads/v4/essai`
3. Accepte / ou LP ads (mesure auto) → Tag Assistant doit voir **GTM-K65MM8Q4**
4. Soumets un faux lead (ton numéro) → événement `form_submit` / `trial_start` visible
5. Dans GTM : **Aperçu** (Preview) pendant le test

---

## 6. Ce que le code fait déjà

- GTM sur **tout le site** (layout racine)
- Consent Mode v2 (refus par défaut hors ads)
- Sur `/lp/ads/*` : mesure activée (bandeau masqué pour la conversion)
- Pageviews SPA + events formulaires / CTA

Tu n’as **pas** besoin de recoller le snippet GTM dans le HTML.
