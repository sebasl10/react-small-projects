# 03-mouse-follower

Petit projet React permettant d'afficher un cercle personnalisé qui suit le curseur de la souris. Un bouton permet d'activer ou de désactiver cet effet visuel à la volée.

Ce projet met particulièrement l'accent sur le cycle de vie des composants et la façon dont React interagit avec le navigateur (DOM et événements).

## Concepts clés abordés

- **Le Hook `useEffect`** : Utilisation pour synchroniser le composant avec des événements globaux de `window`.
- **Abonnements aux événements** : Écoute de l'événement `pointermove` pour récupérer les coordonnées `({clientX, clientY})`.
- **Fonction de nettoyage (Cleanup function)** : Suppression de l'écouteur d'événements (`removeEventListener`) lorsque le composant est démonté ou avant de re-exécuter l'effet pour éviter les fuites de mémoire.
- **Le tableau de dépendances** : Exécution de l'effet uniquement quand l'état `enabled` change.
- **Manipulation conditionnelle de l'UI** : Modification en temps réel des styles CSS en ligne (attribut `transform: translate`) en fonction de l'état local.

## Installation et lancement

1. S'assurer d'être à la racine du projet `03-mouse-follower`
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```
