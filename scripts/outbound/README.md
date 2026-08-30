# Outbound Progesti — Pipeline complet

Extraire, scorer, enrichir et generer les messages de prospection pour les entreprises de nettoyage en France.

## Une commande pour appeler

```powershell
.\run.ps1 call
```

- **Smart** : ne regenere pas si export du jour existe deja
- **CRM SQLite** : statuts sauvegardes cote serveur (survit au refresh)
- **Mode Focus** : 30 appels/jour, raccourcis clavier
- **Journal** : compteur d'actions de la session

Forcer regeneration : `python pipeline.py call --force`

## Cockpit de prospection (nouveau)

Interface web pour appeler, suivre et exporter vos prospects :

```powershell
.\run.ps1 dashboard
# ou : python serve.py
```

Fonctionnalites :
- Chargement auto du dernier export
- Filtres priorite / statut / departement
- Liens 1-clic : Google Maps, Pages Jaunes, Pappers, LinkedIn
- Script d'appel + email copiables
- Saisie telephone / email / statut (sauvegarde navigateur)
- Export CSV avec vos mises a jour
- Barre de progression outbound

## Demarrage rapide (Windows)

```powershell
cd scripts/outbound
.\run.ps1 all              # IDF complet : ~3 500 prospects + Excel pret a l'emploi
.\run.ps1 all -Limit 50    # Test rapide
```

## Demarrage rapide (tout OS)

```bash
cd scripts/outbound
pip install -r requirements.txt
python pipeline.py idf --skip-download
```

## Ce que le pipeline produit

| Fichier | Contenu |
|---------|---------|
| `*_enrichi.csv` | Liste complete scoree |
| `*_enrichi.xlsx` | Excel 2 onglets : tous + top 100 |
| `*_enrichi_top100.csv` | Les 100 meilleurs prospects a appeler |
| `templates/sequences-outbound.md` | Scripts appel, emails, objections |

### Colonnes cles

| Colonne | Description |
|---------|-------------|
| `score_icp` | Score 0-100 (effectif, age, forme juridique) |
| `priorite` | A / B / C / D |
| `dirigeant` | Nom via API gouv.fr |
| `script_appel` | Script d'appel personnalise |
| `email_j0` | Premier email pret a envoyer |
| `email_j3` | Relance J+3 |
| `url_google_maps` | Trouver le telephone |
| `url_pappers` | Email dirigeant si dispo |

## Commandes

```bash
# Pipeline complet (extract + enrich + excel)
python pipeline.py idf --skip-download
python pipeline.py france --skip-download

# Etapes separees
python extract_sirene_proprete.py --icp-only --vague idf --skip-download
python enrich_prospects.py output/proprete_idf_20260826.csv --resume

# Test 20 prospects
python pipeline.py idf --skip-download --limit 20
```

## Volumes ICP (1-49 salaries)

| Zone | Prospects | Enrichissement |
|------|-----------|----------------|
| IDF | ~3 500 | ~10 min |
| Metropoles | ~2 800 | ~8 min |
| France | ~13 600 | ~40 min |

## Workflow outbound recommande

1. `.\run.ps1 all` ou `python pipeline.py idf`
2. Ouvrir `output/*_enrichi.xlsx` → onglet **top_100**
3. Pour chaque ligne :
   - Lire `script_appel` → appeler
   - Cliquer `url_google_maps` si pas de tel
   - Copier `email_j0` si pas de reponse
4. Mettre a jour `statut_outbound` dans le CSV
5. Consulter `templates/sequences-outbound.md` pour les relances

## Scoring ICP

| Critere | Points |
|---------|--------|
| 6-19 salaries | +30 |
| 3-5 salaries | +22 |
| 20-49 salaries | +18 |
| PME | +15 |
| Creee apres 2020 | +15 |
| Dirigeant connu | +5 |

**Priorite A (70+)** = appeler en premier.

## Couts

Tout le pipeline est **gratuit** (SIRENE + API gouv.fr).
Optionnel : Dropcontact (~50 EUR/mois) pour emails en masse.
