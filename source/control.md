title: Le Contrôle
---

## "Global Control Level"

Pour étendre votre empire dans le jeu, vous devez développer votre **Niveau de Contrôle Global** (*Global Control Level* ou *GCL*). Cela affecte deux facteurs importants :

*   **Votre limite de CPU.** Sur le serveur officiel vous commencez avec une limite de 20 CPU vous octroyant un contrôle d'une petite quantité d'unités. Cependant, si vous êtes un joueur [abonné](/subscription.html) vous gagnez 10 CPU pour chaque niveau de GCL jusqu'à une limite de 300 CPU.
*   **La quantité de salles que vous pouvez contrôler.** Par exemple, pour contrôler 3 salles, vous devez avoir votre GCL au niveau 3.

Votre niveau actuel est affiché sur votre [page d'aperçu](https://screeps.com/a/#!/overview).

![](img/gcl-cpu.png)

## "Room Controller Level"

Pour construire de nouvelles structures dans une salle, vous devez en avoir le contrôle. Dans la majorité des salles (mais pas toutes), il y a des structures spéciales appelées **Controlleurs de salles** (*Room Controllers*). Dans votre première salle, le Controlleur est par défaut votre propriété. Tout Controlleur neutre peuvent être [revendiqué](/api/#Creep.claimController) par vos unités avec une partie de corps `CLAIM`, qui donne instantanément la salle sous votre contrôle.


![](img/c1.png)

Un Controlleur nouvellement acquis vous permet donc de construire 1 Spawn dans la salle. Pour construire d'autres Spawn, routes et extensions, vous devez augmenter le **Room Controller Level** (RCL) en envoyant de l'énergie dans le controlleur en utilisant la méthode [`Creep.upgradeController`](/api/#Creep.upgradeController).

![](img/c2.png)

## Liste des structures disponibles par RCL

<table>
<tbody>
<tr>
<th style="width: 10%;">RCL</th>
<th style="width: 20%;">Energie pour amélioration</th>
<th>Structures</th>
</tr>
<tr>
<td>0</td>
<td>—</td>
<td>Routes, 5 Conteneurs</td>
</tr>
<tr>
<td>1</td>
<td>200</td>
<td>Routes, 5 Conteneurs, 1 Spawn</td>
</tr>
<tr>
<td>2</td>
<td>45,000</td>
<td>Routes, 5 Conteneurs, 1 Spawn, 5 Extensions (50 capacité), Ramparts (300K max hits), Murs</td>
</tr>
<tr>
<td>3</td>
<td>135,000</td>
<td>Routes, 5 Conteneurs, 1 Spawn, 10 Extensions (50 capacité), Ramparts (1M max hits), Murs, 1 Tour</td>
</tr>
<tr>
<td>4</td>
<td>405,000</td>
<td>Routes, 5 Conteneurs, 1 Spawn, 20 Extensions (50 capacité), Ramparts (3M max hits), Murs, 1 Tour, Stockage</td>
</tr>
<tr>
<td>5</td>
<td>1,215,000</td>
<td>Routes, 5 Conteneurs, 1 Spawn, 30 Extensions (50 capacité), Ramparts (10M max hits), Murs, 2 Tours, Stockage, 2 Liens</td>
</tr>
<tr>
<td>6</td>
<td>3,645,000</td>
<td>Routes, 5 Conteneurs, 1 Spawn, 40 Extensions (50 capacité), Ramparts (30M max hits), Murs, 2 Tours, Stockage, 3 Liens, Extracteur, 3 Labos, Terminal</td>
</tr>
<tr>
<td>7</td>
<td>10,935,000</td>
<td>Routes, 5 Conteneurs, 2 Spawns, 50 Extensions (100 capacité), Ramparts (100M max hits), Murs, 3 Tours, Stockage, 4 Liens, Extracteur, 6 Labos, Terminal</td>
</tr>
<tr>
<td>8</td>
<td>—</td>
<td>Routes, 5 Conteneurs, 3 Spawns, 60 Extensions (200 capacité), Ramparts (300M max hits), Murs, 6 Tours, Stockage, 6 Liens, Extracteur, 10 Labos, Terminal, Observeur, "Power Spawn"</td>
</tr>
</tbody>
</table>

## Attaquer des controlleurs

Un Controlleur ne peux être endommagé ou détruit. Cependant, un Controlleur non affecté par l'action [`upgradeController`](/api/#Creep.upgradeController) va faire apparaitre un **compteur de rétrogradation** faisant perdre 1 niveau de RCL dès que ce compteur atteint 0. Les compteurs sont listés dans le prototype de [`StructureController`](/api/#StructureController). Dès que le niveau atteint 0, un Controlleur deviens neutre et peut être revendiqué par un autre joueur. Vous devez donc être sûr de mettre à jour vos Controlleurs pour garder vos niveaux de RCL

Vous pouvez attaquer le minuteur de rétrogradation d'un Controlleur d'un autre joueur en utilisant la méthode [`attackController`](/api/#Creep.attackController) sur le Controlleur.

![](img/controllerDowngrade.png)

## Augmenter le GCL

Augmenter le niveau de GCL est faisable en envoyant de l'énergie dans vos Controlleurs - le GCL augmente en paralèlle avec le niveau de vos Controlleurs. Mettre à jour n'importe quel de vos Controlleurs affecte votre niveau de GCL, même si le Controlleur est au niveau maximum (niveau 8).

Après avoir augmenté votre niveau de GCL, vous ne le perdrez pas. Même si vous perdez toutes vos salles, votre niveau de GCL est lié à votre compte pour toujours.

Si dans le futur vous souhaitez acquérir une salle qui vous demande un niveau de GCL plus haut que le votre, vous pouvez toujours [réserver](/api/#Creep.reserveController) son Controlleur. Réserver un Controlleur dans une salle neutre permet de remettre les capacités des sources d'énergie au maximum.

---
Page traduite par :
- [iKlem](https://github.com/iKlem)
