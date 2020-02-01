## Informations à propos du projet
Ce projet contiens la traduction française de la documentation officiel de [Screeps](http://docs.screeps.com/)

## Comment contribuer
Pour contribuer vous devez tout d'abord faire un "fork" de ce projet.  
Ensuite créez vous une branche indiquant le changement ou traduction à faire.  
Ensuite vous devrez installer les dépendances comme suis :
```
npm install
cd api
npm install
cd ..
```

Faites vos changements dans votre branche, vous pouvez tester vos changements en générant le site avec les commandes suivantes :
```
npm run generate
cd api
npm run generate
cd ..
```
*Note* : Vous pouvez utiliser `generate-watch` au lieu de `generate` pour visualiser vos modifications en temps-réel.

Ensuite vous pouvez lancer le serveur de développement :
```
npm run server
```
Dès lors que vos modifications sont corrects, faite un "pull request" vers ce dépôt : "ScreepsFrance/docs -> master_france".  
Une validation sera faite par l'équipe de traduction et sera intégrée dans la branche "master_france".
