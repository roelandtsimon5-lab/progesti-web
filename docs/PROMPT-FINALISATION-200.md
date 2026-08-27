# Prompt — Finalisation site PROGESTI à 200 %

Utiliser ce prompt pour une passe complète production-ready sur le site marketing PROGESTI.

## Contraintes PROGESTI (non négociables)

- **149 € HT/mois** · **5 utilisateurs** · **essai 7 jours sans CB**
- USP : **« Fait par des gens du nettoyage »**
- Tél : **05 82 95 09 19** · Tokens **blue-deep** + **#B8F000**
- **Interdit** : faux social proof, chat bot fake, témoignages inventés, tiers Starter/Pro/Premium sur le site principal, features absentes du produit

## Architecture cible

- Homepage + landings métier : `IndustryLanding` (`src/components/industry/`)
- Config : `src/lib/industry/` (pillars, FAQ, showcase par slug)
- Hub : `/fonctionnalites`, `/solutions`, `/tarifs` — hero industry + contenu cohérent 149 €
- Archives : `/ancien`, `/v1`, `/v2`, `/lp/*` — **noindex**

## Mission

Finalisation complète à 200 % — **exécuter**, pas seulement auditer.

1. **Audit** : UX/UI, responsive, nav, SEO, a11y, CTA, formulaires, assets, cohérence pricing
2. **Corriger** : hiérarchie, spacing, typo, boutons, cartes, micro-interactions, textes
3. **Niveau** : pixel-perfect, pas de placeholder / lien mort / overflow mobile
4. **Tester** : parcours essai, démo, contact, navigation mega-menu, mobile
5. **Dernier passage** : « Qu’est-ce qui fait amateur ? » → corriger

## Checklist DoD 200 %

- [ ] `/` = `IndustryLanding` · metadata = 149 € / 7 j
- [ ] Logo + images existent dans `public/`
- [ ] Un seul message pricing sur site principal (pas 29,99 €)
- [ ] Header dark sur hero · Contact dans nav · logo alt
- [ ] Section nav ancres · help rail · comparatif Excel
- [ ] `/integrations` et `/comparatifs` complets (pas stub)
- [ ] Essai : pas de redirect si API lead échoue
- [ ] Emails lead : `trialDays` + assets valides
- [ ] `npm run build` OK · test navigateur pages clés

## Commande

```bash
npm run dev   # localhost:3000
npm run build
```
