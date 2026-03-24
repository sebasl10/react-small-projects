# 02-tic-tac-toe

Mini-projet React de jeu du morpion (tic-tac-toe), avec gestion des tours, detection de victoire, egalite et reset.

## Notions React travaillees

- Etat avec `useState`:
	- `board` (tableau de 9 cases)
	- `turn` (joueur courant)
	- `winner` (vainqueur ou egalite)
- Mise a jour immutable de l'etat (`newBoard = [...board]`)
- Composant reutilisable `Square` utilise dans plusieurs contextes (grille + affichage du tour)
- Communication parent -> enfant via props (`index`, `updateBoard`, `isSelected`)
- Rendu conditionnel:
	- affichage du bloc resultat
	- affichage du gagnant ou d'une egalite
- Rendu de liste avec `map` pour construire la grille 3x3
- Separation de la logique metier dans des fonctions dediees:
	- `checkWinner`
	- `checkEndGame`
	- `resetGame`

## Structure principale

- `src/App.jsx`: logique complete du jeu et rendu de l'interface
- `src/Square.jsx`: fichier present mais non utilise actuellement (le composant est defini dans `App.jsx`)

## Lancer le projet

```bash
npm install
npm run dev
```

