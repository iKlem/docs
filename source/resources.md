title: Les Ressources
---

Il existe 4 types de ressources dans le jeu : **l'énergie**, **les minerais**, **la puissance** et **les commodités**.
Ces ressources peuvent être récoltée, transformée ou échangée dans le marché, transportée par vos unités et stockée dans certaines structures.
Toutes les ressources ont différente utilisation et vous commencer avec la plus basique : l'énergie.

## L'énergie

{% note info %}
**Où en trouver:** une [`Source`](/api/#Source) dans toute les salles. <br>
**Comment récupérer:** envoyez une unité avec une partie de corp `WORK` et utilisez l'action [`récolter`](/api/#Creep.harvest) sur la source. <br>
**Utilisé pour:** apparition d'unité, construction de structures.
{% endnote %}

L'énergie est la ressource principale du monde Screeps. Votre base fonctionne avec l'énergie vous devez donc en récolter le plus possible. Vous pouvez récolter de l'énergie dans votre salle mais aussi dans d'autres salles pour augmenter votre récolte.

## Les mineraux

{% note info %}
**Où en trouver:** un [`Mineral`](/api/#Mineral) dans toute les salles. <br>
**Comment récupérer:** construisez un [`Extracteur`](/api/#StructureExtractor), envoyez une unité avec une partie de corp `WORK`, et utilisez l'action [`récolter`](/api/#Creep.harvest) sur l'extracteur. <br>
**Utilisé pour:** améliorer les capacités de vos unités et pour produire de meilleures commodités.
{% endnote %}

En récoltant et transformant vos mineraux, vous pouvez augmenter rapidement votre économie et l'éfficacité de vos unités.

Utiliser les mineraux consiste en 3 étapes:

### La récolte

Il y a 7 type de mineral de base, visible ci-dessous.

![](img/minerals-01.png)

Chaque salles contient 1 type de mineral. Pour récolter d'autres types, vous devez accéder à d'autres salles ou faire des échanges avec les joueurs.

<img src="img/mining_minerals.png" align="right">Un mineral est situé dans une salle marqué par une lettre. Pour récolter le mineral, vous devez construire dessus un [**Extracteur**](/api/#StructureExtractor) (disponible au Niveau de Contrôle de Salle 6). Après construction, vous pouvez utiliser l'action [`récolte`](/api/#Creep.harvest) d'une de vos unité par la même façon que vous récolter l'énergie.

### Combiner les mineraux

Les mineraux de base n'ont pas d'utilité tel quel. Pour pouvoir les utiliser, vous devez les combiner selon des formules dans la structure appelée [**Lab**](/api/#StructureLab).

![](img/minerals-02.png)

Une simple réaction demande 3 labs : 2 en tant que source contenant tout deux leurs mineraux, les réactifs et un troisième lab qui produira la production. Le rayon d'action se doit d'être au maximum de 2 cases par labs. Un Lab ne peux contenir qu'un seul type de mineral à la fois.

<img src="img/2016-03-09_10-32-33.gif" align="right">

    var labs = room.find(FIND_MY_STRUCTURES,
        {filter: {structureType: STRUCTURE_LAB}});

    labs[0].runReaction(labs[1], labs[2]);

    // au cycle suivant...

    console.log(labs[0].mineralType) // -> OH
    console.log(labs[1].mineralType) // -> O
    console.log(labs[2].mineralType) // -> H

### Augmenter les creeps

Un laboratoire n'est pas destiné à faire des réactions, il peux aussi utiliser les composés pour augmenter de façon permanente leurs propriétés.

Chaque composés est applicable sur un seul partie de corps de votre unité d'un certain type en utilisant la méthode [`StructureLab.boostCreep`](/api/#StructureLab.boostCreep) selon la table ci-dessous et augmentera l'éfficacité d'une ou de plusieurs actions. Les partie de corps augmentées compte comme deux, trois voir quatre fois la même partie de corps. Pour augmenter l'unité dans son entièreté, vous devez donc augmenter chacune des parties de son corps de chaque types.

Augmenter une partie de corps prend 30 unités de composés et 20 unités d'énergie. Une partie du corps ne peux être augmenté qu'avec un seul composé.

<style>
.minerals,
.commodities {
    margin-top: 0 !important;
    border: 0 !important;
    width: 100%;
}
.minerals td,
.commodities td {
    border-top: 1px solid #333;
    color: #bbb;
    background-color: #22242b;
    font-size: 13px;
}
@media (min-width: 1280px) {
    .minerals td:first-child {
        white-space: nowrap;
    }
}
.minerals td:nth-child(2) {
    white-space: nowrap;
}
.minerals td:nth-child(3) {
    text-align: center;
}
.minerals td:nth-child(4) {
    min-width: 87px;
}
.minerals code {
    background-color: #333;
    color: #eee;
    word-break: break-all;
}
.minerals img,
.commodities img {
    margin-right: 5px;
    vertical-align: middle;
}
.minerals__divider th {
    background-color: #333;
    color: #ffe099;
    text-align: center;
    font-size: 13px;
}
.minerals__head th,
.commodities__head th{
    background-color: #22242b;
    color: #ccc;
    font-weight: normal !important;
    font-size: 11px;
}

.commodities em {
    font-style: normal;
    color: #eaeaea;
}
.commodities td {
    padding: 10px 15px !important;
}
</style>

<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Composés</span>
<em>(cliquer pour agrandir)</em>
</div>

<div class="collapsible-table__content">

<table class="minerals">
<colgroup>
<col></col>
<col></col>
<col></col>
<col></col>
</colgroup>
<tbody>
<tr class=minerals__head>
<th>Nom</th>
<th>Formule</th>
<th>Temps</th>
<th>Partie de Corps</th>
<th>Effet</th>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Composé de base</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/OH.png)hydroxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/H.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>20</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZK.png)zynthium keanite</td>
<td>![](//static.screeps.com/upload/mineral-icons/Z.png) + ![](//static.screeps.com/upload/mineral-icons/K.png)</td>
<td>5</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UL.png)utrium lemergite</td>
<td>![](//static.screeps.com/upload/mineral-icons/U.png) + ![](//static.screeps.com/upload/mineral-icons/L.png)</td>
<td>5</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/G.png)ghodium</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZK.png) + ![](//static.screeps.com/upload/mineral-icons/UL.png)</td>
<td>5</td>
<td>—</td>
<td>—</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Tier 1 compounds</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UH.png)utrium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/U.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`ATTACK`</td>
<td>+100% `attack` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UO.png)utrium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/U.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`WORK`</td>
<td>+200% `harvest` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KH.png)keanium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/K.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`CARRY`</td>
<td>+50 capacity</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KO.png)keanium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/K.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`RANGED_ATTACK`</td>
<td>+100% `rangedAttack` and `rangedMassAttack` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LH.png)lemergium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/L.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>15</td>
<td>`WORK`</td>
<td>+50% `repair` and `build` effectiveness without increasing the energy cost</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LO.png)lemergium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/L.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`HEAL`</td>
<td>+100% `heal` and `rangedHeal` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZH.png)zynthium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/Z.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>20</td>
<td>`WORK`</td>
<td>+100% `dismantle` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZO.png)zynthium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/Z.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`MOVE`</td>
<td>+100% fatigue decrease speed</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GH.png)ghodium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/G.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`WORK`</td>
<td>+50% `upgradeController` effectiveness without increasing the energy cost</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GO.png)ghodium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/G.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`TOUGH`</td>
<td>-30% damage taken</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Tier 2 compounds</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UH2O.png)utrium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/UH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`ATTACK`</td>
<td>+200% `attack` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UHO2.png)utrium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/UO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`WORK`</td>
<td>+400% `harvest` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KH2O.png)keanium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/KH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`CARRY`</td>
<td>+100 capacity</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KHO2.png)keanium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/KO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`RANGED_ATTACK`</td>
<td>+200% `rangedAttack` and `rangedMassAttack` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LH2O.png)lemergium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/LH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>10</td>
<td>`WORK`</td>
<td>+80% `repair` and `build` effectiveness without increasing the energy cost</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LHO2.png)lemergium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/LO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`HEAL`</td>
<td>+200% `heal` and `rangedHeal` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZH2O.png)zynthium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>40</td>
<td>`WORK`</td>
<td>+200% `dismantle` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZHO2.png)zynthium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`MOVE`</td>
<td>+200% fatigue decrease speed</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GH2O.png)ghodium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/GH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>15</td>
<td>`WORK`</td>
<td>+80% `upgradeController` effectiveness without increasing the energy cost</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GHO2.png)ghodium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/GO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>30</td>
<td>`TOUGH`</td>
<td>-50% damage taken</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Tier 3 compounds</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XUH2O.png)catalyzed utrium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/UH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`ATTACK`</td>
<td>+300% `attack` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XUHO2.png)catalyzed utrium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/UHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`WORK`</td>
<td>+600% `harvest` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XKH2O.png)catalyzed keanium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/KH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`CARRY`</td>
<td>+150 capacity</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XKHO2.png)catalyzed keanium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/KHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`RANGED_ATTACK`</td>
<td>+300% `rangedAttack` and `rangedMassAttack` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XLH2O.png)catalyzed lemergium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/LH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>65</td>
<td>`WORK`</td>
<td>+100% `repair` and `build` effectiveness without increasing the energy cost</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XLHO2.png)catalyzed lemergium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/LHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`HEAL`</td>
<td>+300% `heal` and `rangedHeal` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XZH2O.png)catalyzed zynthium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>160</td>
<td>`WORK`</td>
<td>+300% `dismantle` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XZHO2.png)catalyzed zynthium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`MOVE`</td>
<td>+300% fatigue decrease speed</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XGH2O.png)catalyzed ghodium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/GH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>80</td>
<td>`WORK`</td>
<td>+100% `upgradeController` effectiveness without increasing the energy cost</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XGHO2.png)catalyzed ghodium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/GHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>150</td>
<td>`TOUGH`</td>
<td>-70% damage taken</td>
</tr>
</tbody>
</table>
</div>
</div>


## Commodités

{% note info %}
**Où en trouver:** un [`Dépôt`](/api/#Deposit) dans les salles "autoroutes". <br>
**Comment récupérer:** envoyez une unité avec une partie de corp `WORK`, et utilisez l'action [`récolter`](/api/#Creep.harvest) dessus. <br>
**Utilisé pour:** produire des comodités échangable au marché et pour gagner des crédits.
{% endnote %}

Les Commodités sont des ressources que des PNJ sont intéressés. Ces ressources n'ont pas d'autres utilité que d'être échangés pour des crédits.
Produire des commodités de haut niveau est la manière la plus profitable dans le jeux.


### Récolter des commodités

Vous pouvez récolter des commodités pures depuis un [`Dépôt | Deposit`](/api/#Deposit) dans les salles "autoroutes" qui divise les différents secteurs jouables sur la carte.
Il existe 4 types de comodités pures : le Métal (Metal), le Silicone (Silicon), la Biomasse (Biomass) et le Mist (pas de traduction).
Ces commodités pures sont distribuées aléatoirement partout dans la carte du monde: une ressource par type par quadrant de la carte (Nord Ouest, Nord Est, Sud Ouest, Sud Est)

![](img/commodities.png)

Différent des minéraux, ces dépôts s'épuise à chaque récolte : plus vous récoltez, plus le temps de recharge augmente.
Ils disparaissent lorsque vous ne récoltez plus pendant un certains temps et apparaisse à nouveau autre part.
Aussi, un nouveau dépôt apparait dans le secteur lorsque tout les autres dépôts sont épuisés à un certain niveau.

### Commodités de base

Vendre des commodités pures n'est pas profitable.
C'est pourquoi il est préférable de construire une [**Usine (Factory)**](/api/#StructureFactory) (disponible au RCL 7) pour [`produire`](/api/#StructureFactory.produce) des commodités plus complexes.

Une Usine construite n'a pas de niveau, cela signifie qu'elle peux produire des commodités de tout types (rang "tout niveaux" dans le tableau ci-dessous).
Elle peux aussi être utilisée pour stocker des ressources dans une forme "comprimée".

<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Commodités comprimées</span>
<em>(cliquer pour agrandir)</em>
![](img/commodities1.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tbody>
<tr class=commodities__head>
<th>Produit</th><th>Niveau</th><th>Composants</th><th>Temps de recharge</th>
</tr>
<tr><td>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>![](//static.screeps.com/upload/mineral-icons/U.png)Utrium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>{% resource "Lemergium bar" %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>![](//static.screeps.com/upload/mineral-icons/L.png)Lemergium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>![](//static.screeps.com/upload/mineral-icons/Z.png)Zynthium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>![](//static.screeps.com/upload/mineral-icons/K.png)Keanium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>![](//static.screeps.com/upload/mineral-icons/G.png)Ghodium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>![](//static.screeps.com/upload/mineral-icons/O.png)Oxygen&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>![](//static.screeps.com/upload/mineral-icons/H.png)Hydrogen&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>![](//static.screeps.com/upload/mineral-icons/X.png)Catalyst&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>{% resource 'Battery' %}&nbsp;&times;&nbsp;<em>50</em></td><td>Any level</td><td>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>600</em></td><td>10&nbsp;ticks</td></tr>
</tbody>
</table>

</div>
</div>

 Vous pouvez décompresser pour récupere vos ressource pures quand vous le voulez.

 <div class="collapsible-table">

 <div class="collapsible-table__header">
 <i class="fa fa-plus-square"></i>
 <span>Décompressage des commodités</span>
 <em>(cliquer pour agrandir)</em>
 ![](img/commodities2.png)
 </div>

 <div class="collapsible-table__content">
 <table class="commodities">
 <tr class="commodities__head"><th>Produit</th><th>Niveau</th><th>Composants</th><th>Temps de recharge</th></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/U.png)Utrium&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/L.png)Lemergium&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Lemergium bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/Z.png)Zynthium&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/K.png)Keanium&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/G.png)Ghodium&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/O.png)Oxygen&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/H.png)Hydrogen&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/X.png)Catalyst&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Battery' %}&nbsp;&times;&nbsp;<em>50</em></td><td>10&nbsp;ticks</td></tr>
 </table>

 </div>
 </div>

 Quand vous avez accès aux dépôts, vous pouvez commencer à produire des commodités de base.

<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Commodités de base</span>
<em>(cliquer pour agrandir)</em>
![](img/commodities3.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>Produit</th><th>Niveau</th><th>Composants</th><th>Temps de recharge</th></tr>
<tr><td>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>20</em></td><td>Any level</td><td>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Silicon' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;ticks</td></tr>
<tr><td>{% resource 'Cell' %}&nbsp;&times;&nbsp;<em>20</em></td><td>Any level</td><td>{% resource 'Lemergium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Biomass' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;ticks</td>
<tr><td>{% resource 'Alloy' %}&nbsp;&times;&nbsp;<em>20</em></td><td>Any level</td><td>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Metal' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;ticks</td></tr>
<tr><td>{% resource 'Condensate' %}&nbsp;&times;&nbsp;<em>20</em></td><td>Any level</td><td>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Mist' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;ticks</td></tr>
</table>
</div>
</div>

Toutes les commodités ci-dessus peuvent être produits dans une usine de n'importe quel niveau.

### Commodités de valeurs

L'utilisation complète d'une usine est possible avec un [Opérateur](power.html#Power-Creeps) seulement et leur pouvoir `OPERATE_FACTORY`.
Quand un Opérateur utilise son pouvoir sur une usine sans niveau, son niveau est réglé en permanence au niveau de la puissance de l'Opérateur et un effet est appliqué.
Cela active de nouveaux composants possible selon le niveau.
L'usine ne peux produire seulement des commodités de son niveau ou de "tout niveau".
Le niveau d'une usine ne peux être mis à jour.
Quand le temps de durée de l'effet tombe à zero, l'usine devient inactive et son niveau est gardé (les commodités de "tout niveau" sont toujours réalisable).
Vous aurez donc besoin de votre Opérateur avec le même niveau de puissance pour réactiver l'usine.
Pour changer le niveau d'usine vous devrez la construire à nouveau.

Chaque niveau de commodité de valeurs requier des commodités de niveau inférieur pour être produit formant des chaines de production. Il existe 4 chaines de productions une pour chaque type : **Méchanique** (consomme du Métal), **Electronique** (consomme du Silicone), **Biologique** (consumme de la Biomasse) et **Mystique** (consumme du Mist) en plus de resources génériques.
Ces commodités ont le plus de valeur dans le marché.

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Commodités communes de valeurs</span>
<em>(cliquer pour agrandir)</em>
![](img/commodities4.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>Produits</th><th>Niveau</th><th>Composants</th><th>Temps de recharge</th></tr>
<tr><td>{% resource 'Composite' %}&nbsp;&times;&nbsp;<em>20</em></td><td>Lvl 1</td><td>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>20</em></td><td>50&nbsp;ticks</td></tr>
<tr><td>{% resource 'Crystal' %}&nbsp;&times;&nbsp;<em>6</em></td><td>Lvl 2</td><td>{% resource 'Lemergium bar' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>45</em></td><td>21&nbsp;ticks</td></tr>
<tr><td>{% resource 'Liquid' %}&nbsp;&times;&nbsp;<em>12</em></td><td>Lvl 3</td><td>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>12</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>12</em><br>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>12</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>90</em></td><td>60&nbsp;ticks</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Chaine Méchanique</span>
<em>(cliquer pour agrandir)</em>
![](img/commodities5.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>Produits</th><th>Niveau</th><th>Composants</th><th>Temps de recharge</th></tr>
<tr><td>{% resource 'Tube' %}&nbsp;&times;&nbsp;<em>2</em></td><td>Lvl 1</td><td>{% resource 'Alloy' %}&nbsp;&times;&nbsp;<em>40</em><br>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>16</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>8</em></td><td>45&nbsp;ticks</td></tr>
<tr><td>{% resource 'Fixtures' %}</td><td>Lvl 2</td><td>{% resource 'Composite' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Alloy' %}&nbsp;&times;&nbsp;<em>41</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>161</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>8</em></td><td>115&nbsp;ticks</td></tr>
<tr><td>{% resource 'Frame' %}</td><td>Lvl 3</td><td>{% resource 'Fixtures' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Tube' %}&nbsp;&times;&nbsp;<em>4</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>330</em><br>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>31</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>125&nbsp;ticks</td></tr>
<tr><td>{% resource 'Hydraulics' %}</td><td>Lvl 4</td><td>{% resource 'Liquid' %}&nbsp;&times;&nbsp;<em>150</em><br>{% resource 'Fixtures' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Tube' %}&nbsp;&times;&nbsp;<em>15</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>208</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;ticks</td></tr>
<tr><td>{% resource 'Machine' %}</td><td>Lvl 5</td><td>{% resource 'Hydraulics' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Frame' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Fixtures' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Tube' %}&nbsp;&times;&nbsp;<em>12</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;ticks</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Chaine Biologique</span>
<em>(cliquer pour agrandir)</em>
![](img/commodities6.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>Produits</th><th>Niveau</th><th>Composants</th><th>Temps de recharge</th></tr>
<tr><td>{% resource 'Phlegm' %}&nbsp;&times;&nbsp;<em>2</em></td><td>Lvl 1</td><td>{% resource 'Cell' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>36</em><br>{% resource 'Lemergium bar' %}&nbsp;&times;&nbsp;<em>16</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>8</em></td><td>35&nbsp;ticks</td></tr>
<tr><td>{% resource 'Tissue' %}&nbsp;&times;&nbsp;<em>2</em></td><td>Lvl 2</td><td>{% resource 'Phlegm' %}&nbsp;&times;&nbsp;<em>10</em><br>{% resource 'Cell' %}&nbsp;&times;&nbsp;<em>10</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>110</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>164&nbsp;ticks</td></tr>
<tr><td>{% resource 'Muscle' %}</td><td>Lvl 3</td><td>{% resource 'Tissue' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Phlegm' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>50</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>50</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>250&nbsp;ticks</td></tr>
<tr><td>{% resource 'Organoid' %}</td><td>Lvl 4</td><td>{% resource 'Muscle' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Tissue' %}&nbsp;&times;&nbsp;<em>5</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>208</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>256</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;ticks</td></tr>
<tr><td>{% resource 'Organism' %}</td><td>Lvl 5</td><td>{% resource 'Organoid' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Liquid' %}&nbsp;&times;&nbsp;<em>150</em><br>{% resource 'Tissue' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Cell' %}&nbsp;&times;&nbsp;<em>310</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;ticks</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Chaine Electronique</span>
<em>(cliquer pour agrandir)</em>
![](img/commodities7.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>Produits</th><th>Niveau</th><th>Composants</th><th>Temps de recharge</th></tr>
<tr><td>{% resource 'Switch' %}&nbsp;&times;&nbsp;<em>5</em></td><td>Lvl 1</td><td>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>40</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>95</em><br>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>35</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>20</em></td><td>70&nbsp;ticks</td></tr>
<tr><td>{% resource 'Transistor' %}</td><td>Lvl 2</td><td>{% resource 'Switch' %}&nbsp;&times;&nbsp;<em>4</em><br>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>15</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>85</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>8</em></td><td>59&nbsp;ticks</td></tr>
<tr><td>{% resource 'Microchip' %}</td><td>Lvl 3</td><td>{% resource 'Transistor' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Composite' %}&nbsp;&times;&nbsp;<em>50</em><br>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>117</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>25</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>250&nbsp;ticks</td></tr>
<tr><td>{% resource 'Circuit' %}</td><td>Lvl 4</td><td>{% resource 'Microchip' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Transistor' %}&nbsp;&times;&nbsp;<em>5</em><br>{% resource 'Switch' %}&nbsp;&times;&nbsp;<em>4</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>115</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;ticks</td></tr>
<tr><td>{% resource 'Device' %}</td><td>Lvl 5</td><td>{% resource 'Circuit' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Microchip' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Crystal' %}&nbsp;&times;&nbsp;<em>110</em><br>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>150</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;ticks</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Chaine Mystique</span>
<em>(cliquer pour agrandir)</em>
![](img/commodities8.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>Produits</th><th>Niveau</th><th>Composants</th><th>Temps de recharge</th></tr>
<tr><td>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>3</em></td><td>Lvl 1</td><td>{% resource 'Condensate' %}&nbsp;&times;&nbsp;<em>30</em><br>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>15</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>54</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>12</em></td><td>41&nbsp;ticks</td></tr>
<tr><td>{% resource 'Extract' %}&nbsp;&times;&nbsp;<em>2</em></td><td>Lvl 2</td><td>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>10</em><br>{% resource 'Condensate' %}&nbsp;&times;&nbsp;<em>30</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>60</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>128&nbsp;ticks</td></tr>
<tr><td>{% resource 'Spirit' %}</td><td>Lvl 3</td><td>{% resource 'Extract' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>90</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>200&nbsp;ticks</td></tr>
<tr><td>{% resource 'Emanation' %}</td><td>Lvl 4</td><td>{% resource 'Spirit' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Extract' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>112</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;ticks</td></tr>
<tr><td>{% resource 'Essence' %}</td><td>Lvl 5</td><td>{% resource 'Emanation' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Spirit' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Crystal' %}&nbsp;&times;&nbsp;<em>110</em><br>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>150</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;ticks</td></tr>
</table>
</div>
</div>


## Puissance

{% note info %}
**Où en trouver:** une [`StructurePowerBank`](/api/#Source) dans les salles "autoroutes". <br>
**Comment récupérer:** détruire la structure et récupérer les ressources au sol. <br>
**Utilisé pour:** la création de Creeps de Puissance.
{% endnote %}


Voir l'article suivant pour plus d'informations : [Puissance](power.html).

---
Page traduite par :
- [iKlem](https://github.com/iKlem)
