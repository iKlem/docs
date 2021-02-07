title: Les unités - Les "Creeps"
---

Vous construisez vos unités, appelées **creeps**, de la même manière que dans d'autres jeux de stratégies, mais avec une exception : vous construisez le "corps" de votre unité à partir de 7 **types de partie de corps** ("body part"), le résultat étant une séquence maximum de 50 partie de corps. Cela permet de créer de milliers de combinaison de type d'unité et de roles : travailleurs ordinaires, d'énormes machines de constructions capable de construire ou de réparer une structure en quelques cycles, de gros transporteurs de ressources, des éclaireurs rapide et peu coûteux, des combattants bien équipés avec une capacité de regénération, etc... Il peut même s'agir d'unités ressemblant à des tours ou des forteresses pour l'exploitation minière, la défense ou pour capturer avec très peu de vitesse (quelques "cases" par minutes) mais avec des caractéristiques monstrueuses. Tout dépend de vous, votre tactique et de votre imagination.

![](img/bodyparts.png)

Cependant, rappelez-vous qu'une unité a un cycle de vie de 1500 cycles (le temps en minute dépend de la durée de cycle du serveur). L'unité "vieillit" et meurt. Vous devez donc aussi gérer l'automatisation de la création de nouvelles unités en remplacement des unités vieillissantes.

Un "spawn" standard (la structure) ne peux créer que des unités standard avec un coût total de **300 points de ressource d'énergie**. Pour pouvoir créer des unités plus chers vous aurez besoin d'une **extension de "spawn"** dans la salle. Chaque extension peut contenir jusqu'à **50 points de ressource d'énergie** pouvant être utilisées pour la création d'une unité. L'emplacement exact des extensions dans une salle n'est pas importante mais doivent être dans la même salle que le "spawn" (une extension peut être utilisée par plusieur spawns). L'énergie nécessaire devrait se trouver dans le spawn et les extensions pour la création d'une unité.

Le nombre d'extensions disponibles construisables dépend du niveau du Contrôleur dans la salle. Plus de détails dans "[Le Contrôle](/control.html)"

## Les capacités d'une unité

En donnant à votre unité des partie de corps, vous lui attribuez des capacités spécifique.

Voici la liste des "partie de corps" possible lors de la création d'une unité :

*   <code style="background: #333; color: #ffe56d;">WORK</code> – capacité de récolter de l'énergie ou ressources, construire et réparer des structures, mettre à niveau des contrôleurs.
*   <code style="background: #333; color: #a9b7c6;">MOVE</code> – capacité de se déplacer.
*   <code style="background: #333; color: #777;">CARRY</code> – capacité de stocker et transfer des ressources.
*   <code style="background: #333; color: #f93842;">ATTACK</code> – capacité d'attaque à courte portée.
*   <code style="background: #333; color: #5d80b2;">RANGED_ATTACK</code> – permet d'attaque à distance.
*   <code style="background: #333; color: #65fd62;">HEAL</code> – capacité de guérir les autres (et sois-même).
*   <code style="background: #333; color: #b99cfb;">CLAIM</code> - capacité de revendiquer le contrôle de territoire.
*   <code style="background: #333; color: #fff;">TOUGH</code> – partie de coprs "vide", permet d'ajouter des points de défense.

L'efficacité d'une capacité de partie de corps dépend de la quantité de parties d'un type correspondant. Par exemple, un travailleur avec 3 partie `WORK` fonctionnera 3 fois plus effectivement qu'une unité ayant seulement 1 partie `WORK`. La même chose s'applique à tous les autres types et actions.

## Les déplacements

Chaque partie de corps a son propre poids physique : plus l'unité possède de partie de corps, plus elle lui est difficile de se déplacer. Chaque partie de corps (sauf `MOVE`) génèrent des **points de fatigue** quand l'unité se déplace: 1 point par partie de corps sur les route, 2 point sur du terrain plat, 10 point dans les marécages. Chaque partie de corps `MOVE` diminue les points de fatigue par 2 à chaque cycle. L'unité ne peut se déplacer si sa fatigue est supérieur à 0.

{% note info %}
Pour maintenir la vitesse de déplacement maximale à 1 case par cycle, une unité doit avoir autant de partie de corps `MOVE` que toute les autres partie de corps combinées.
{% endnote %}

En d'autres termes, 1 partie de corps `MOVE` peut déplacer une autre partie d'une case par cycle. Si une unité a moins de partie `MOVE`, son déplacement sera proportionnellement ralenti, vu avec l'augmentation des points de fatigue.

Il convient de noter que les parties `CARRY` vide ne génèrent pas de fatigue.

Exemples :

*   L'unité `[CARRY, WORK, MOVE]` se déplacera d'une case par cycle si elle ne transporte pas de ressources & une case tout les 2 cycle si elle est chargée.
*   L'unité `[TOUGH, ATTACK, ATTACK, MOVE, MOVE, MOVE]` se déplacera à la vitesse maximum d'une case par cycle.
*   L'unité `[TOUGH, ATTACK, ATTACK, MOVE, MOVE]` se déplacera d'une case tout les 2 cycles en raison de l'arrondi.

## Dégâts

La quantité totale de coups ("hits") qu'une unité peut recevoir dépend de la quantité de partie de corps qu'elle possède - 100 points pour chaque partie. L'ordre des partie est important. Durant une attaque, les premières partie à prendre des dégâts sont celles indiquées en premier lors de sa création. L'endommagement complet d'une partie entraine sa désactivation - l'unité ne pourra pas éxecuter les actions liée à la partie de corps endommagée.

---
Page traduite par :
- [iKlem](https://github.com/iKlem)
