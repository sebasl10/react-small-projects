# 04-cat-facts

Petite application React qui récupère un fait aléatoire sur les chats depuis l'API [catfact.ninja](https://catfact.ninja/fact) et affiche une image de chat associée au premier mot de ce fait grâce à l'API [cataas.com](https://cataas.com).

## Fonctionnalités

- Récupération et affichage d'un fait aléatoire sur les chats au montage du composant.
- Extraction du premier mot du fait récupéré pour générer une URL d'image dynamique.
- Affichage conditionnel du texte et de l'image (seulement après le chargement des données).

## Notions abordées

- Le cycle de vie des composants avec `useEffect` (tableau de dépendance vide `[]` vs tableau avec état `[fact]`).
- La liaison entre deux appels asynchrones (le deuxième fetch a besoin du premier).
- La gestion d'états d'une API externe avec `useState`.
- Le rendu conditionnel de données.

## Lancer le projet en local

1. Placez vous dans le dossier du projet:
```bash
cd 04-cat-facts
```

2. Installez les dépendances:
```bash
npm install
```

3. Lancez le serveur de développement:
```bash
npm run dev
```
