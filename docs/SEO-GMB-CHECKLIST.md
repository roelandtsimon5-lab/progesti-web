# Checklist SEO + Google Business Profile — PROGESTI

Source unique NAP / identité : `src/lib/site.ts`  
Site : https://progesti.fr · Contact : contact@progesti.fr  
Siège : 56 boulevard Vincent Auriol, 31170 Tournefeuille (MSNE SAS)

---

## 1. Déjà en place (code)

- [x] `metadataBase`, titles, descriptions, Open Graph root
- [x] Twitter `summary_large_image`
- [x] `sitemap.ts` + `robots.ts` (ads / preview / app / login exclus ; priorités money pages)
- [x] LPs `/lp/*` noindex **retirées** du sitemap + `Disallow: /lp/`
- [x] Canonicals pages money + piliers SEO
- [x] JSON-LD `SoftwareApplication` + `Organization` (tél. si `site.phone`)
- [x] `opengraph-image.tsx` racine
- [x] Hook Search Console : `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

---

## 2. Google Search Console (à faire après deploy)

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Ajouter la propriété :
   - **Préférence** : domaine `progesti.fr` (vérif DNS TXT), ou
   - Préfixe URL `https://progesti.fr` (meta tag)
3. Si meta tag : copier le token → hébergeur / `.env` :
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxx
   ```
   Puis redéployer.
4. Soumettre le sitemap : `https://progesti.fr/sitemap.xml`
5. Demander l’indexation prioritaire :
   - `/`
   - `/logiciel-entreprise-nettoyage`
   - `/logiciel-planning-nettoyage`
   - `/logiciel-facturation-proprete`
   - `/alternative-propret`
   - `/tarifs`, `/solutions`, `/essai-gratuit`

---

## 3. Google Business Profile (GMB)

### Création

1. [business.google.com](https://business.google.com) → Ajouter un établissement
2. Nom : **PROGESTI** (si Google refuse → **MSNE SAS** + nom commercial PROGESTI dans la description)
3. Catégorie principale : **Éditeur de logiciels** / Software company  
   (ne pas choisir “Entreprise de nettoyage” — ce n’est pas le métier affiché)
4. Adresse : **exactement** celle de `site.company` (Tournefeuille)
5. Site web : `https://progesti.fr`
6. Téléphone : laisser vide tant que `site.phone` est `null` — puis synchroniser les deux
7. Description (ex.) :

> PROGESTI est le logiciel de gestion pour entreprises de nettoyage et de propreté. Planifiez vos agents, pointez le terrain et facturez — bureaux, syndics, professionnels et fin de chantier. Essai 2 mois sans carte bancaire.

### Après validation Google (courrier / vidéo / téléphone)

- [ ] Photos : façade / bureau (si pertinent), captures produit, logo
- [ ] Horaires d’ouverture (support / commercial)
- [ ] Lien site + bouton “Essai” / “Contact” si dispo
- [ ] 1er post Google (annonce essai 2 mois)
- [ ] Copier l’URL publique Maps / fiche → `site.sameAs` dans `src/lib/site.ts` :
  ```ts
  sameAs: ["https://maps.google.com/…"] as const,
  ```
  (le JSON-LD root l’expose automatiquement)

### Attendu réaliste

Signal de confiance + présence Maps.  
Pas de volume SEO local type “entreprise de nettoyage Tournefeuille”.

---

## 4. NAP — règles

| Champ | Où le mettre |
|-------|----------------|
| Nom | `site.name` / `site.company.legalName` |
| Adresse | `site.company` → footer, contact, mentions, JSON-LD, GMB |
| Téléphone | `site.phone` **puis** GMB (jamais l’inverse seul) |
| Email | `site.email` |

Une seule orthographe d’adresse partout. Pas de numéro inventé.

---

## 5. Ne pas faire

- Indexer `/lp/ads/**`, `/preview/**`, `/v1`, `/v2`, `/app`
- Remettre des LPs noindex dans le sitemap
- Catégorie GMB “nettoyage” / “ménage” (hors positionnement produit)
- Créer une 2ᵉ fiche avec une adresse différente

---

## 6. Quand tu as un téléphone public

1. `site.phone = "+33…"` dans `src/lib/site.ts`
2. Vérifier footer / contact (ils lisent déjà `site`)
3. Mettre à jour la fiche GMB avec le **même** numéro
4. Redéployer (JSON-LD `telephone` s’active tout seul)
