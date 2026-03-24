# 01-twitter-card

Mini-projet React qui simule une carte de suivi Twitter avec un bouton `Follow / Following`.

## Notions React travaillees

- Composants fonctionnels: separation entre `App` et `TwitterFollowCard`
- Props: transmission de `name`, `user`, `initialIsFollowing` et `formatUserName`
- Etat local avec `useState`: suivi de l'etat `isFollowing`
- Gestion d'evenements: mise a jour d'etat via `onClick`
- Rendu conditionnel:
	- texte du bouton (`Follow` / `Following`)
	- classe CSS conditionnelle (`is-following`)
- Rendu de liste avec `map` et cle stable (`key={user}`)
- Donnees derivees en UI: construction dynamique de l'avatar (`unavatar`) et du username affiche

## Structure principale

- `src/App.jsx`: boucle sur une liste d'utilisateurs et rend plusieurs cartes
- `src/TwitterFollowCard.jsx`: composant reutilisable de carte utilisateur

## Lancer le projet

```bash
npm install
npm run dev
```

