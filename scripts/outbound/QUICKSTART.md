# Progesti Outbound — Demarrage en 60 secondes

## Le plus simple

**Double-cliquez `APPELER.bat`** dans ce dossier.

Ou depuis la racine du projet : `npm run prospects`

## 1. Installer (une fois)

```powershell
cd scripts/outbound
pip install -r requirements.txt
```

## 2. Lancer ta session d'appels

```powershell
python prospects.py call
```

C'est tout. Cette commande :
1. Reconstruit la liste depuis le cache local (instantane)
2. Ouvre le cockpit en mode Focus (prospects avec dirigeant uniquement)

> **~1 000+ prospects appelables** deja disponibles en IDF.
> Pour enrichir le reste (API gouv.fr) : `python prospects.py enrich`

## 3. Appeler

| Touche | Action |
|--------|--------|
| **A** | Appele (sans reponse) |
| **D** | Demo planifiee |
| **E** | Email envoye |
| **N** | Prospect suivant |
| **C** | Copier le script |
| **Esc** | Quitter |

Pour chaque prospect :
1. Lire le script affiche
2. Cliquer **Pages Jaunes** si pas de telephone
3. Appeler ou envoyer email
4. Appuyer sur **A**, **D** ou **E**

## 4. Fin de session

Cliquer **Sauvegarder** (ou `python prospects.py sync`)

```powershell
python prospects.py finish   # Sync + stats + rapport HTML
```

## Commandes utiles

| Commande | Quand l'utiliser |
|----------|------------------|
| `python prospects.py call` | Chaque jour de prospection |
| `python prospects.py call --force` | Regenerer la liste |
| `python prospects.py sync` | Sauvegarder les statuts CRM |
| `python prospects.py stats` | Combien contactes / demos |
| `python prospects.py report` | Rapport pour toi ou ton equipe |

## Objectifs realistes

- **30 appels/jour** en mode Focus
- **2-5% de demos** sur cold outbound PME
- Commencer par l'**IDF**, puis `python pipeline.py metropoles`

## Besoin d'aide ?

- Scripts email/appel : `templates/sequences-outbound.md`
- Doc complete : `README.md`
