# Client Web CesiZen - Configuration du projet

Ce document explique comment utiliser et configurer le projet en Angular 19 standalone afin de pouvoir tester ses fonctionnalité couplé à l'api CesiZen.

## Prérequis
- Avoir installé l'api CesiZen
- Node.js 18+ npm (inclus avec Node.js)
- Angular CLI (installé globalement)

## Installation

Cloner le projet :
```
git clone [URL_DU_DÉPÔT]
```

Installer les dépendances :
```
npm install
```

Pour les test en local : Installez un certificat localement dans le dossier sign du projet
```
|sign-
    |----localhost.crt
    |----localhost.key
```

## Usage

Démarrer le projet : 
```
ng serve --open --ssl
```
L'application est accessible sur https://localhost:4200.

## License

GNU GPL v3 (Copyleft, toute modification doit rester open source)
