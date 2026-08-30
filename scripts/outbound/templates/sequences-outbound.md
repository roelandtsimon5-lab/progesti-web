# Sequences outbound Progesti — entreprises de proprete

Variables disponibles dans les exports : `{{prenom_dirigeant}}`, `{{raison_sociale}}`, `{{ville}}`

Les colonnes `script_appel`, `email_j0`, `email_j3` du fichier Excel sont deja personnalisees.

---

## Script d'appel (30 secondes)

> Bonjour **[Prenom]**, je suis Simon de Progesti.
>
> Je vois que vous dirigez **[Entreprise]** a **[Ville]**. On aide les entreprises de proprete a centraliser planning, pointage agents et facturation — sans Excel ni WhatsApp.
>
> Est-ce que c'est un sujet chez vous en ce moment ?
>
> *(Si oui)* Je peux vous montrer ca en 15 minutes, quand etes-vous disponible ?
>
> *(Si non / pas le moment)* Pas de souci. Je vous envoie un email avec une demo — vous pourrez regarder quand vous voulez.

---

## Message vocal

> Bonjour **[Prenom]**, Simon de Progesti a l'appareil.
> Je vous appelle car on accompagne des entreprises de nettoyage sur le planning et le pointage terrain.
> Je vous envoie un SMS avec mon numero — rappelez-moi quand vous avez 5 minutes. Bonne journee.

---

## Sequence email (10 jours)

### J0 — Premier contact (apres appel sans reponse)

**Objet :** [Entreprise] — planning et pointage agents

Voir colonne `email_j0` dans l'export Excel.

### J3 — Relance courte

**Objet :** Re: [Entreprise] — une question rapide

Voir colonne `email_j3` dans l'export Excel.

### J7 — Preuve sociale

**Objet :** Comment [Entreprise similaire] a gagne 2h/jour sur l'admin

> Bonjour [Prenom],
>
> Je ne veux pas vous harceler — dernier message.
>
> Une entreprise de proprete de [X] agents nous a dit avoir gagne 2 heures par jour sur l'admin des qu'ils ont centralise planning + pointage.
>
> Si ca vous parle : https://progesti.fr/demo
> Sinon, bonne continuation et bon courage pour la saison.

### J10 — Break-up

**Objet :** Je clos votre dossier

> Bonjour [Prenom],
> Je comprends que ce n'est pas le bon moment.
> Je clos votre dossier — si le sujet revient, voici mon lien : https://progesti.fr/essai-gratuit
> Bonne continuation.

---

## LinkedIn (si pas de reponse telephone + email)

> Bonjour [Prenom], je viens de vous envoyer un email concernant la gestion planning/pointage chez [Entreprise]. Je travaille avec des societes de proprete sur ce sujet — ouvert a un echange rapide si pertinent.

---

## Objections frequentes

| Objection | Reponse |
|-----------|---------|
| "On a deja un logiciel" | "Lequel ? Souvent nos clients viennent de Propret/Excel — on fait une demo comparative en 15 min." |
| "Pas le budget" | "On a un tarif unique transparent sur progesti.fr/tarifs — et un essai gratuit 14 jours." |
| "Mes agents ne sont pas tech" | "L'app mobile est faite pour le terrain — 2 clics pour pointer. On forme en 30 min." |
| "Rappelez dans 3 mois" | "Parfait, je note. Je vous envoie un recap email — vous aurez mon contact." |

---

## KPIs a suivir (dans statut_outbound)

| Statut | Signification |
|--------|---------------|
| a_contacter | Pas encore contacte |
| appele_sans_reponse | Appel + voicemail |
| email_envoye | Sequence lancee |
| repondu | Interet exprime |
| demo_planifiee | RDV pris |
| perdu | Pas interesse |
| client | Converti |

Objectif realiste : **2-5% de taux de demo** sur cold outbound PME proprete.
