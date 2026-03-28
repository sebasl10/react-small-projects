# react-small-projects

Ce repo contient une collection de petits projets React.
L'objectif est de montrer la maitrise de plusieurs notions fondamentales de React a travers des exercices concrets.

## Projets

### 1) 01-twitter-card

Composant de carte "Follow / Unfollow" inspire de Twitter.

Notions React mises en place:

- Composition de composants (`App` + `TwitterFollowCard`)
- Passage de donnees avec les props
- Etat local avec `useState`
- Gestion d'evenements (`onClick`)
- Rendu conditionnel (texte et classe CSS selon l'etat)
- Rendu de listes avec `map` et utilisation de `key`

Voir les details dans [01-twitter-card/README.md](01-twitter-card/README.md).

### 2) 02-tic-tac-toe

Jeu de morpion (tic-tac-toe) avec logique de victoire, sauvegarde de la partie et reset.

Notions React mises en place:

- Gestion de plusieurs etats avec `useState`
- Sauvegarde de l'état avec `localStorage`
- Effets de bord éventuels avec `useEffect`
- Mise a jour immutable d'un tableau d'etat
- Composants reutilisables par dossiers (`components/Square`, `components/WinnerModal`)
- Flux de donnees parent -> enfant via props
- Rendu conditionnel (vainqueur, egalite)
- Logique metier et de stockage isolee (`logic/board.js`, `logic/storage.js`)

Voir les details dans [02-tic-tac-toe/README.md](02-tic-tac-toe/README.md).

## Lancer les projets en local

Chaque projet est autonome (Vite + React).

Exemple:

```bash
cd 01-twitter-card
npm install
npm run dev
```

Puis dans un autre terminal:

```bash
cd 02-tic-tac-toe
npm install
npm run dev
```

## Objectif du repo

Construire une base de projets simples mais solides pour demontrer des competences React:

- architecture de composants
- gestion d'etat
- rendu declaratif
- interactions utilisateur
- logique de UI liee aux donnees
