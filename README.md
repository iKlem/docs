## Informations à propos du projet
Ce projet contiens la traduction française de la documentation officiel de [Screeps](http://docs.screeps.com/)

## Comment contribuer
Voir le fichier [Contribuer.md](Contribuer.md) pour plus de détails

## Comment utiliser le projet
Dès que vous avez cloné votre fork sur votre machine, vous devez installer les dépendances :
```
npm install
cd api
npm install
cd ..
```

Pour mettre à jour vos modification :
```
npm run generate
cd api
npm run generate
cd ..
```
*Note* : Vous pouvez utiliser `generate-watch` au lieu de `generate` pour mettre à jour vos modifications en temps-réel.

Ensuite vous pouvez lancer le serveur de développement :
```
npm run server
```
