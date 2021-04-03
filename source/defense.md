title: Défendre votre salle
---

Le monde de Screeps n'est pas le plus sûr sur Terre. Cet article vous explique les éléments à votre disposition pour vous protéger des invasions.

## Le mode "Protection" - _Safe mode_

Quand vous commencer dans le jeu, le mode **"Protection"** sera activé dans votre salle. Ce mode permet de bloquer les méthodes utilisables par les autres joueurs qui peuvent affecter vos unités ou structures (vous serez toujours capable de vous défendre). Plus d'informations dans la description du [`StructureController`](/api/#StructureController).

![](img/safe_mode.png)

Le mode "Protection" reste actif pendant **20,000 cycles** (environ 20 heures selon la durée d'un cycle). Cependant, si le Controlleur de la salle possède des activation en plus, vous pouvez à tout moment activer de nouveau le mode "Protection" en utilisant la méthode [`StructureController.activateSafeMode`](/api/#StructureController.activateSafeMode):

    Game.rooms.W1N1.controller.activateSafeMode()

Un controlleur obtient 1 activation avec chaque nouveau niveau. Vous pouvez gagner plus d'activation pour votre controlleur avec l'ajout de ressources de **ghodium** en utilisant la méthode [`Creep.generateSafeMode`](/api/#Creep.generateSafeMode).

Le mode "Protection" est un élément de défense tactique de dernier recours quand vous ne pouvez plus rien faire. De plus, le mode "Protection" ne peux être activé seulement dans une seule salle par shard. Pour une meilleure défense vous devez utiliser les murs, ramparts, tours et des unités avec parties de corps prévu pour l'attaque/défense.

## Les défenses passives : les murs

La manière la plus trivial pour défendre votre salle reste de construire les mêmes **murs** qui entoure votre salles lorsque vous êtes dans une zone "Novice" durant vos premières heures d'apparition. Cependant il y a une différence : les murs initiaux sont placés sur vos sorties bloquant les menaces exterieures de pénétrer, vos nouveaux murs ne pourront pas être construits dans un rayon de 2 cases par rapport au bord de votre salle, permettant aux menaces précédentes de pénétrer votre salle et détruire vos fortifications. Il est donc curcial de ne pas juste construire mais aussi de **fortifier** vos murs qui permettront à vos adversaires de prendre plus de temps pour les détruires.

![](img/defense1.png)

Après qu'un mur est construit, il possède **1 point de vie**. Vous devez donc fortifier votre mur pour que vos ennemis prennent un bon moment avant de détruire complètement votre fortification. Vous pouvez utiliser l'action [`repair`](/api/#Creep.repair) de vos unités sur vos murs. Le nombre maximum de point de vie pour un mur est de **300,000,000 points**. Si vous fortifiez le mur à ce stade, il pourra résister pour plusieurs heures voir jours.

## Les défenses passives : les ramparts

Les murs, bien que pratique, on tout de même un inconvénient : ils bloque non seulement les unités hostiles mais les votre aussi ! Construire des murs proches de vos sortie peuvent bloquer votre propre expansion.

Les **ramparts** sont une autre type de structure passive. Ils se comporte comme des murs pour les unités hostiles en bloquant leurs mouvement, pendant que vos unités peuvent les passer librement. De plus, une unité dans un rampart est invunérable à n'importe quelle attaque, jusqu'à ce que le rampart soit détruit et a la capacité d'attaquer de cette position.

![](img/defense2.png)

Dans la même logique que les murs, un rampart possède **1 point de vie** après construction et a aussi besoin d'être fortifié par vos unités. Le nombre maximum de point de vie pour un rampart dépend de votre **Room Controller level**. Plus de détails dans l'article [Le Contrôle](/control.html).

Le rampart possède une autre particularitée : il se doit d'être maintenu. Après un nombre de cycles, un rampart perd des points de vie, vous devez donc assigner vos unités pour être sûr que vos ramparts ne s'auto-détruise pas.

## Les défenses actives : les tours

Un bon pattern de murs et de ramparts peut-être utile pour résister pour plusieurs jours (quand vous n'êtes pas devant votre machine), mais pourra un jour tomber. C'est pourquoi il est important de ne pas trop compter sur vos fortifications seulement mais d'y ajouter des systèmes de défense pour repousser vos adversaires.

![](img/defense3.png)

Vous pouvez utiliser les **tours** pour vous défendre activement après avoir atteint le niveau 3 de votre salle. Cette structure n'est pas comme les murs ou ramparts car elle demande de la ressource d'énergie pour pouvoir fonctionner d'où son type de défense "active". Elle peux attaquer - [`attack`](/api/#StructureTower.attack) - et guérir vos unités - [`heal`](/api/#StructureTower.heal) - et aussi réparer vos structures - [`repair`](/api/#StructureTower.repair) - (exemple comme vos murs ou ramparts endommagés).

{% note info %}
Le rayon d'action de vos tours couvre la totalité de votre salle mais l'effet est réduit selon la distance de la cible. Placez toujours vos tours au plus proches de leurs cibles potentielles.
{% endnote %}

Chaque action utilise **10 point d'énergie**, soyez donc sûr que vos unités apporte les ressources nécessaire aux tours.

Voici un exemple de code simple pour attaquer une unité énnemie en utilisant les tours :

    function defendRoom(roomName) {
        var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
        if(hostiles.length > 0) {
            var username = hostiles[0].owner.username;
            Game.notify(`User ${username} spotted in room ${roomName}`);
            var towers = Game.rooms[roomName].find(
                FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
            towers.forEach(tower => tower.attack(hostiles[0]));
        }
    }

## Les défenses actives : vos unités

Les tours sont une manière éfficace pour une défense active mais ce n'est pas tout le temps éfficace surtout contre une offense que vous ne pouvez pas contrôler. Une bonne équipe hostile peuvent contourner voir faire pas mal de dégats à vos fortifications et tours. Contrer une telle attaque demande la même type de stratégie : utiliser des unités.

![](img/defense4.png)

Vu que les rampart ont la capacité de protéger vos unités si elles sont dans la même case que la structure, développer votre système de défense de façon à ce que vos unités puissent défendre vos forifications sans trop prendre de coups. Cependant, construire vos unités constamment, même quand vous n'êtes pas attaqué, est une grandre perte de ressources. Il est donc préférable de les construire rapidement durant un siège.

Ecrire la logique pour ce genre d'unités est complexe mais c'est la seul manière éfficace pour défendre votre salle convenablement.

{% note info %}
Vous pouvez faire apparaitre des [NPC invader creeps](/invaders.html) dans votre salle pour tester vos défenses.
{% endnote %}

En résumé, construire vos murs & ramparts dans un pattern spécifique, lié à un bon positionnement de vos tours et une bonne gestion de vos unités donneront du fil à retord à vos adversaires. Eviter de vous recroqueviller dans vos salles, la meilleure défense est l'attaque.

---
Page traduite par :
- [iKlem](https://github.com/iKlem)
