# Checklist SEO + Google Business Profile — PROGESTI

Source unique NAP / identité : `src/lib/site.ts`  
Site : https://progesti.fr · Contact : contact@progesti.fr · Tél. 05 82 95 09 19  
Siège : 56 boulevard Vincent Auriol, 31170 Tournefeuille (MSNE SAS)

---

## 1. Déjà en place (code)

- [x] `metadataBase`, titles, descriptions, Open Graph root
- [x] Twitter `summary_large_image`
- [x] `sitemap.ts` + `robots.ts` (ads / preview / v1–v3 / app / login exclus ; priorités money pages)
- [x] LPs `/lp/*` noindex (layout + pages) + hors sitemap + `Disallow: /lp/`
- [x] Canonicals pages money + piliers SEO
- [x] JSON-LD `SoftwareApplication` + `Organization` (NAP + `site.phoneTel`)
- [x] `opengraph-image.tsx` racine (money pages via `pageMeta` → DEFAULT_OG)
- [x] Hook Search Console : `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- [x] Redirects courts / legacy → solutions & money (`/bureaux`, `/syndics`, …)

---

## 2. Google Search Console (manuel — après deploy)

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Ajouter / vérifier la propriété :
   - **Préférence** : domaine `progesti.fr` (vérif DNS TXT), ou
   - Préfixe URL `https://progesti.fr` (meta tag)
3. Si meta tag : copier le token → hébergeur / `.env` :
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxx
   ```
   Puis redéployer.
4. Soumettre / resoumettre le sitemap : `https://progesti.fr/sitemap.xml`
5. Demander l’indexation prioritaire :
   - `/`
   - `/logiciel-entreprise-nettoyage`
   - `/logiciel-planning-nettoyage`
   - `/logiciel-facturation-proprete`
   - `/alternative-propret`
   - `/tarifs`, `/solutions`, `/essai-gratuit`
6. Contrôler **Pages** : pas d’indexation de `/lp/**`, `/preview/**`, `/v1`–`/v3`, `/app`, `/login`

---

## 3. Google Business Profile (GMB) — manuel

### Création / alignement NAP

1. [business.google.com](https://business.google.com) → Ajouter ou éditer l’établissement
2. Nom : **PROGESTI** (si Google refuse → **MSNE SAS** + nom commercial PROGESTI dans la description)
3. Catégorie principale : **Éditeur de logiciels** / Software company  
   (ne pas choisir “Entreprise de nettoyage” — ce n’est pas le métier affiché)
4. Adresse : **exactement** `site.company` → 56 boulevard Vincent Auriol, 31170 Tournefeuille
5. Site web : `https://progesti.fr`
6. Téléphone : **05 82 95 09 19** (identique à `site.phone` / `site.phoneTel`)
7. Description (ex.) :

> PROGESTI est le logiciel de gestion pour entreprises de nettoyage et de propreté. Planifiez vos agents, pointez le terrain et facturez — bureaux, syndics, professionnels et fin de chantier. Essai 15 jours sans carte bancaire.

### Après validation Google (courrier / vidéo / téléphone)

- [ ] Photos : façade / bureau (si pertinent), captures produit, logo
- [ ] Horaires d’ouverture (support / commercial)
- [ ] Lien site + bouton “Essai” / “Contact” si dispo
- [ ] 1er post Google (annonce essai 15 jours)
- [ ] Copier l’URL publique Maps / fiche → `site.sameAs` dans `src/lib/site.ts` :
  ```ts
  sameAs: ["https://maps.google.com/…"] as const,
  ```
  (le JSON-LD Organization l’expose automatiquement)

### Attendu réaliste

Signal de confiance + présence Maps.  
Pas de volume SEO local type “entreprise de nettoyage Tournefeuille”.

---

## 4. NAP — règles

| Champ | Où le mettre |
|-------|----------------|
| Nom | `site.name` / `site.company.legalName` |
| Adresse | `site.company` → footer, contact, mentions, JSON-LD, GMB, `llms.txt` |
| Téléphone | `site.phone` + `site.phoneTel` **puis** GMB (jamais l’inverse seul) |
| Email | `site.email` |

Une seule orthographe d’adresse partout. Pas de numéro inventé.

---

## 5. Ne pas faire

- Indexer `/lp/**`, `/preview/**`, `/v1`, `/v2`, `/v3`, `/app`, `/login`
- Remettre des LPs noindex dans le sitemap
- Catégorie GMB “nettoyage” / “ménage” (hors positionnement produit)
- Créer une 2ᵉ fiche avec une adresse différente
- Republier des prix / durées d’essai hors `site.ts`

---

## 6. Téléphone public (déjà en code)

- [x] `site.phone` / `site.phoneTel` renseignés
- [ ] Vérifier que la fiche GMB affiche le **même** numéro
- [ ] Après changement NAP : redéployer + resoumettre sitemap GSC
