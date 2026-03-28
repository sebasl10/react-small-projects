# 02-Tic-Tac-Toe

Mini-projet React de jeu du morpion (tic-tac-toe), avec gestion des tours, détection de victoire, égalité, sauvegarde de la partie en cours et reset.

## Notions React & JavaScript travaillées

- **État avec `useState`** :
  - `board` (tableau de 9 cases)
  - `turn` (joueur courant)
  - `winner` (vainqueur ou égalité)
- **Persistance des données** : 
  - Utilisation de `window.localStorage` pour sauvegarder la grille et le tour du joueur, permettant de reprendre une partie après un rafraîchissement.
- **Effets de bord avec `useEffect`** (utilisé pour la synchronisation ou les comportements asynchrones si nécessaire).
- **Mise à jour immuable de l'état** (`newBoard = [...board]`).
- **Composants réutilisables** :
  - `Square` : utilisé dans plusieurs contextes (cases de la grille de jeu + affichage du tour actif).
  - `WinnerModal` : composant dédié pour l'affichage de fin de partie.
- **Communication parent -> enfant** via les *props* (`index`, `updateBoard`, `isSelected`).
- **Rendu conditionnel** :
  - Affichage de la modale de résultat.
  - Affichage du gagnant ou d'une égalité.
- **Rendu de liste** avec `map` pour construire la grille 3x3 de manière dynamique.

## Structure principale

Une architecture propre séparant l'interface utilisateur de la logique métier :

- `src/App.jsx` : Composant racine coordonnant le jeu et l'interface.
- `src/constants.js` : Définition des constantes de l'application (tours, combinaisons gagnantes).
- `src/components/` :
  - `Square.jsx` : Composant visuel de chaque case.
  - `WinnerModal.jsx` : Composant affichant le résultat de la partie avec l'option de recommencer.
- `src/logic/` :
  - `board.js` : Logique de détection de victoire (`checkWinner`) et de fin de jeu (`checkEndGame`).
  - `storage.js` : Logique d'interaction avec le `localStorage` pour sauvegarder et réinitialiser l'état du jeu.

## Lancer le projet

```bash
npm install
npm run dev
```

