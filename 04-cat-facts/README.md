# 04-cat-facts

Petite application React qui récupère un fait aléatoire sur les chats depuis l'API [catfact.ninja](https://catfact.ninja/fact) et affiche une image de chat associée au premier mot de ce fait grâce à l'API [cataas.com](https://cataas.com).

## Fonctionnalités

- Récupération et affichage d'un fait aléatoire sur les chats au montage du composant.
- Extraction du premier mot du fait récupéré pour générer une URL d'image dynamique.
- Affichage conditionnel du texte et de l'image (seulement après le chargement des données).
- **Séparation des responsabilités**: logique d'API isolée dans `services/` et logique métier encapsulée dans des *Custom Hooks* (`hooks/useCatFact`, `hooks/useCatImage`).
- **Tests End-to-End (E2E)** exécutés via Playwright pour garantir que l'application affiche bien le texte et l'image depuis l'API.

## Notions abordées

- Custom Hooks: création de crochets personnalisés pour une meilleure réutilisabilité (`useCatFact` et `useCatImage`).
- Le cycle de vie des composants avec `useEffect` (appels de services asynchrones).
- La gestion d'états asynchrones avec `useState` et `fetch`.
- Le rendu conditionnel de données dans le composant principal `App.jsx`.
- Tests E2E avec `@playwright/test` pour automatiser la vérification de l'interface.

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

## Lancer les tests E2E (Playwright)

Pour exécuter les tests end-to-end, assurez-vous d'avoir installé les navigateurs requis (`npx playwright install` si c'est le premier lancement), puis lancez la commande :

```bash
npx playwright test
```
