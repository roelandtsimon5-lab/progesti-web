# Import Google Ads PROGESTI — guide rapide

Fichiers dans ce dossier :

| Fichier | Contenu |
|---------|---------|
| `progesti-google-ads-import.csv` | Campagnes Search + ad groups + mots-clés + RSA |
| `progesti-google-ads-negatifs.csv` | Mots-clés négatifs (niveau campagne) |
| `progesti-google-ads-extensions.csv` | Sitelinks + callouts + structured snippets |

## Landing pages cibles

| Campagne | URL finale (V4 — paid prioritaire) |
|----------|-------------------------------------|
| PROGESTI Search ROI / Prix | `https://progesti.fr/lp/ads/v4/prix` |
| PROGESTI Search Planning / Excel | `https://progesti.fr/lp/ads/v4/excel` |
| PROGESTI Search Essai | `https://progesti.fr/lp/ads/v4/essai` |
| PROGESTI Search Volume | `https://progesti.fr/lp/ads/v4/acces` |
| PROGESTI Search Concurrent | `https://progesti.fr/lp/ads/v4/propret` |

V3 long-form (`/lp/ads/v3/*`) = retargeting uniquement.

## Import via Google Ads Editor (recommandé)

1. Ouvrir **Google Ads Editor** → votre compte PROGESTI
2. **Compte** → **Importer** → **Depuis un fichier**
3. Importer dans l’ordre :
   1. `progesti-google-ads-import.csv`
   2. `progesti-google-ads-negatifs.csv`
   3. `progesti-google-ads-extensions.csv`
4. Vérifier les annonces (RSA) : Google exige ≥ 3 titres et ≥ 2 descriptions — les fichiers en ont 15 / 4
5. **Vérifier les modifications** → corriger les alertes de longueur éventuelles
6. **Publier**

## Avant de publier

- [ ] Remplacer le budget journalier si besoin (défaut : 40 € / campagne)
- [ ] Lier la conversion `trial_start` / `form_submit` dans Google Ads
- [ ] Vérifier que les 3 LP sont en production
- [ ] Activer les campagnes en **Pause** d’abord, puis activer ad group par ad group
- [ ] Ajouter UTM dans les URL finales si vous préférez (déjà pré-remplies dans le CSV)

## Budgets & enchères (défaut fichier)

- Type : Search
- Stratégie : Maximiser les clics (plafond CPC 3,50 €) — à basculer en **Maximiser les conversions** dès 30+ conversions
- Budget : 40 €/jour × 3 campagnes = 120 €/jour max (baisser en phase learning)

## Support

Détail stratégie : `docs/PROMPT-GOOGLE-ADS-ROI.md`

---

## ⚠️ URLs de destination supprimées (30/09/2026)

Les landings `/lp/**` (dont `/lp/ads/v3/*` et `/lp/ads/v4/*`) ont été supprimées du site : elles affichaient d'anciennes offres (essai 2 mois, ancien prix).
Elles répondent maintenant par une **redirection 301 vers https://progesti.fr/tarifs**. Les fichiers CSV de ce dossier pointent encore vers ces anciennes URL : ne pas les réimporter tels quels.
Avant d'activer une campagne, remplacer les URL finales par une page actuelle (`/tarifs`, `/essai-gratuit`, `/logiciel-devis-nettoyage`…). Offre actuelle : Gratuit 0 € HT, Pro 49,99 € HT, Premium 99,99 € HT, essai 15 jours sans CB.
