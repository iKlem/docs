title: Introduction
---

## Quel genre de jeu est Screeps

Screeps est un jeu massivement multijoueur en ligne de stratégie en temps réel. Chaque joueur peuvent créer leurs colonies dans un **monde persistant** partagé par tous les joueurs. Une colonie peut récolter des **ressources**, créer des **unités**, conquérir des **territoires**. Au fur et à mesure que vous conquérez plus de territoire, votre influence dans le monde augmente, ainsi que votre capacité à étendre votre empreinte. Cependant, cela vous demandera de faire des efforts de votre part, car plusieurs joueurs peuvent viser le même territoire.

Screeps est développé pour les personnes avec **des compétences dans la programmation**. Contrairement à d'autres jeux de stratégies en temps réel, vos unités dans le jeu peuvent réagir à des évenements sans votre participation - à condition que vous les ayez correctement programmés. Et contraitement à d'autres jeux massivement multijoueur, vous n'avez pas à jouer constamment pour bien jouer. Il suffit de bien vérifier de temps en temps pour voir si tout se passe correctement.

## Le monde

Le monde se compose de **salles** (*rooms*) interconnectées. Une salle est un espace clos de 50 par 50 cellules ou cases (exemple: imaginez une image de 50 par 50 pixels). Elle peux avoir entre 1 à 4 sortie vers d'autres salles. Le monde est séparé en **regions** (*shard*), interconnectés avec des portails inter-régions. Vous pouvez considérer une région comme un étage du monde.

![](img/shards.png)

Le paysage d'une salle est unique. La vue de chaque salle est générée procéduralement et consiste en trois type de surface:

*   **Le terrain plat** – sol simple avec un coût de mouvement de 2 (note).
*   **Les marécages** augmentent le coût de mouvement de 10.
*   **Les murs naturels** bloquent tout mouvement des unités.

Vous pouvez modifier le paysage d'une salle avec l'aide des structures suivantes:

*   **Les routes** diminue le coût des mouvement de 1. Elles se déteriorent avec les déplacement et/ou avec le temps et nécessitent des réparations.
*   **Les murs construits** peuvent être construits par les joueurs. Contrairement au murs naturels, ils peuvent être attaqués et detruits par des unités.
*   **Les ramparts** sont vos défenses. Seules vos unités peuvent se déplacer à l'intérieur de vos ramparts. De plus, une unité dans un rampart ne peux pas être attaquée tant que le rampart n'est pas detruit. Les ramparts se déteriorent à chaque cycle (tick) de jeu et nécessitent des réparations.

Au début de votre experience de jeu, vous êtes libre de choisir l'emplacement de votre nouvelle colonie dans une salle libre dans le monde. Une fois votre première structure installée, votre salle sera en mode **sans danger** ("safe mode"). Utilisez ce temps pour vous créer de bonne défenses car n'importe quel joueur sera capable de détruire votre colonie !

## Votre colonie

**![](img/colony-center.png)**

**Les sources d'énergie** sont la principale ressource du jeu. Ces ressources peuvent être récoltées par vos unités. La quantitée d'énergie dans une source est limitée mais reprend sa quantité maximum une fois tout les 300 cycles (ticks) de jeu

**Les point d'apparitions (*spawn*)** sont les centres de votre colonie. Ils peuvent accumuler de l'énergie venant des sources et peuvent l'utiliser pour créer vos unités. Il ne peut y avoir plus de 3 "spawn" dans une salle.

Un "spawn" à lui seul peux créer des unités basiques. Pour créer des unités plus complexes vous devez construire une ou plusieurs **extensions**. Plus de détails dans l'article suivant.

---
Page traduite par :
- [iKlem](https://github.com/iKlem)
