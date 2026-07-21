# Prompt — Refonte e-mail bienvenue prospect PROGESTI

À coller / lancer dans Cursor Agent pour **réécrire uniquement** l’e-mail HTML de bienvenue prospect.

## Mission

Améliorer l’e-mail de bienvenue envoyé aux nouveaux prospects (essai, démo, contact, Ads) pour qu’il ait :

- le **logo PROGESTI** visible
- une **meilleure image de marque** (propre, premium, terrain nettoyage — pas un e-mail SaaS générique)
- un **message plus fort** (humain, rassurant, actionnable)
- un rendu **nickel sur mobile Gmail / Apple Mail / Outlook**

Ne pas toucher aux SMS. Ne pas casser l’envoi Resend. L’alerte e-mail Simon peut rester simple (outil interne).

## Fichier à modifier

- `web/src/lib/lead-notify.ts` → fonction `welcomeEmail()` (HTML + texte brut + subject + preheader si possible)

Références marque :
- `web/docs/DESIGN-SYSTEM-V3.md`
- `web/src/lib/site.ts`
- Assets publics :
  - Logo e-mail-safe : `https://progesti.fr/logo.png` (préférer **PNG**, pas webp)
  - Visuel produit optionnel : `https://progesti.fr/hero-mockup.png` ou `https://progesti.fr/dashboard-mockup.png`
- Variables déjà branchées : `env.simonMobile`, `env.simonMobileDisplay`, `env.essaiUrl`, `env.leadNotifyEmail`, `site.*`

## Contraintes e-mail (obligatoires)

1. HTML **tables** + styles **inline** uniquement (pas de CSS externe, pas de `<style>` complexe qui casse Outlook).
2. Largeur max **600 px**, une colonne, padding confortable mobile.
3. Polices web-safe : `Arial, Helvetica, sans-serif`.
4. Images en **URL absolue HTTPS** + `alt` + dimensions width/height explicites.
5. Logo : `https://progesti.fr/logo.png` — hauteur ~40–48 px, pas déformé.
6. Si mockup produit : pleine largeur du contenu (~552 px utiles), `alt="Aperçu PROGESTI — planning nettoyage"`.
7. CTA = **un seul** bouton vert `#1FA86B`, texte blanc, padding généreux, lien vers `env.essaiUrl`.
8. Lien `tel:` vers `SIMON_MOBILE` / `site.phoneTel`.
9. Version **texte brut** multipart toujours à jour (même contenu, sans HTML).
10. Échapper toutes les variables utilisateur (`escapeHtml`).
11. **Interdit** : purple gradients, emojis décoratifs, piles de cards, badges flottants, stats inventées, avis clients inventés, dark mode forcé, `border-radius` excessif sur images (OK léger sur bouton).

## Direction visuelle (marque V3)

| Élément | Valeur |
|---------|--------|
| Fond page | `#F7FAFC` |
| Header bandeau | `#0B3D6E` |
| Texte | `#0F2438` |
| Liens | `#1565A8` |
| CTA | `#1FA86B` |
| Surface douce | `#E8F2FA` |
| Bordure | `#C5DCF0` |

Composition cible (haut → bas) :

1. **Header** bleu profond : logo PNG blanc/contraste OK sur fond bleu (si logo sombre, placer logo sur bandeau blanc fin puis header bleu, ou logo sur fond blanc en haut — choisir le plus lisible).
2. **Hero message** : titre perso + 2 courts paragraphes.
3. **Visuel produit** (mockup) — une seule image, edge-to-edge dans la colonne contenu.
4. **CTA unique** vert.
5. **Bloc contact Simon** (fond `#E8F2FA`) : téléphone cliquable + phrase humaine.
6. **3 piliers ultra courts** (pas des cards marketing) — ex. en lignes simples avec puces texte :
   - Planning multi-sites
   - Pointage terrain
   - Facturation liée au réalisé  
   (une ligne chacun, pas d’icônes emoji)
7. **Signature** Simon, gérant.
8. **Footer** légal MSNE SAS · Tournefeuille · contact@progesti.fr · progesti.fr

## Message (copy à respecter / améliorer dans cet esprit)

Ton : **vouvoiement**, gérant d’entreprise de nettoyage qui parle vrai — pas commercial agressif, pas jargon SaaS (« scale », « disrupt », etc.).

### Subject (améliorer, garder perso)

Propositions à choisir / fusionner (1 seule) :
- `{{prénom}}, bienvenue chez PROGESTI — je vous aide à démarrer`
- `Simon (PROGESTI) — merci {{prénom}}, je vous rappelle vite`

### Preheader (invisible preview Gmail)

`Essai 2 mois sans CB · je vous aide à configurer sites, planning et passages.`

### Corps (structure textuelle)

1. **Accroche**  
   Bonjour {{prénom}},  
   Merci pour votre confiance. Je suis **Simon**, gérant de PROGESTI.

2. **Pourquoi cet e-mail**  
   Vous venez de nous contacter / démarrer un essai. Je ne vous laisse pas seul devant l’écran : je vous appelle rapidement pour configurer ensemble vos sites, votre planning et vos premiers passages.

3. **Offre claire**  
   Essai **2 mois**, tous les modules, **sans carte bancaire**. Vous testez sur votre vraie activité.

4. **CTA**  
   Bouton : `Ouvrir mon espace PROGESTI` (ou `Accéder à mon essai`)

5. **Contact direct**  
   Besoin de moi avant mon appel ?  
   Appelez-moi au **{{SIMON_MOBILE_DISPLAY}}** — c’est mon numéro direct.

6. **Signature**  
   À très bientôt,  
   **Simon**  
   Gérant — PROGESTI  
   {{SIMON_MOBILE_DISPLAY}} · contact@progesti.fr  
   https://progesti.fr

Adapter légèrement la phrase « vous venez de… » selon `intent` si simple :
- `trial` / défaut → inscription / essai
- `demo` → accès démo
- `contact` → prise de contact  

Sans sur-compliquer : 2–3 variantes max dans le code.

## Métadonnées Resend

Conserver :
- `from` = `env.leadFromEmail`
- `reply_to` = `env.leadNotifyEmail`
- `to` = e-mail prospect

Option : ajouter header / balise preheader HTML classique :

```html
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">
  PREHEADER_ICI
</div>
```

## Qualité / checklist avant commit

- [ ] Logo visible en haut (PNG absolu `progesti.fr`)
- [ ] Mockup produit présent et net
- [ ] Subject + preheader + HTML + text alignés
- [ ] CTA unique, vert, cliquable
- [ ] Téléphone Simon en `tel:`
- [ ] Mobile-readable (pas de texte minuscule < 14px corps)
- [ ] Pas de webp dans l’e-mail
- [ ] `escapeHtml` sur toutes les données lead
- [ ] Aucune régression : `notifyNewLead` / SMS / alerte Simon inchangés fonctionnellement
- [ ] Commit clair, ex. `Improve prospect welcome email branding and copy`

## Hors scope

- Ne pas refaire le SMS
- Ne pas ajouter de dépendance npm
- Ne pas créer de template React e-mail framework
- Ne pas inventer de témoignages / chiffres
- Ne pas modifier les landings

## Fin

Réponse courte : subject final, aperçu textuel 5 lignes, URLs images utilisées, fichier modifié, prêt à push/deploy.
