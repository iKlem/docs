title: Zone de départs
---

## Zone de Novice

Pour aider les joueurs à démarrer sans se faire écraser par les autres joureurs, un système de zones temporaire existe. Elles sont marqués en vert et le label “**Novice Area**” s'affiche lorsque vous mettez le curseur sur la zone.

![](img/novice.png)

Voici une liste des règles imposées lorsque vous êtes dans ces salles :

*   La zone est complètement séparé du monde exterieur avec un mur indestructible, évitant les joueurs exterieur à la zone d'y entrer. Entrer dans une zone Novice ne peux se faire qu'en réapparaissant dans la zone.
*   Seuls les joueurs ayant un Niveau de Contrôle Global inférieur à 3 peuvent commencer dans ces salles.
*   Chaque joueur est autorisé à prendre le [contrôle](/api/#Creep.claimController) de 3 salles maximum. La [réservation](/api/#Creep.reserveController) de salle est illimitée.
*   Pas de temps de rechargement pour l'activation du mode ["Protection"](/defense.html)
*   L'utilisation d'arme nucléaires - [Nukers](/api/#StructureNuker) - est bloqué.

Les zones de Novice possède un compteur en jours. Dès que ce compteur tombe à 0, les salles perdent leur protection, les limitations sont retirées et la zone devient accessible de par tout le monde.

La majoritée des zone de Novice sont divisés en salles de 4x4 (cf. image ci-dessus). A part les murs qui entoure la zone complet (10x10), il y a aussi des murs interne qui sépare les "quartier". Le compteur est différent de celui de la zone, permettant aux joueurs dans leur "quartier" de pouvoir combattre entre eux s'ils le désirent.

## Zone de réapparition

Une autre type de zone isolée est la **Zone de réapparition**. Ces zones sont en bleu et n'ont seulement la restriction des armes nucléaires. Tout les joueurs peuvent apparaitre dans ces zones, qu'importe leur Niveau de Contrôle Global.

![chrome_2017-03-06_14-40-11.png](img/chrome_2017-03-06_14-40-11.png)

## Génération de zones dans les secteurs

Le serveur surveille la population dans les zones de Réapparition & zones de Novices et ouvre de nouvelles zones si nécessaire. Ces zones peuvent s'ouvrir dans des secteurs déjà présent du monde si la zone n'est pas ou peux peuplée et non utilisée par des joueurs.

{% note info %}
Si vous nous souhaitez pas que certaines salles ne se transforme en zone de Novice ou zone de Réapparition, vous devez prendre le pas de [réserver](/api/#Creep.reserveController) ces salles
{% endnote %}

Quand une zone de Novice ou de Réapparition est prévu dans un secteur, toute les salles libre auront un signe ajouté par le jeu avec le message suivant :

![chrome_2017-03-08_13-01-20.png](img/chrome_2017-03-08_13-01-20.png)

Vous pouvez utiliser les constante `SYSTEM_USERNAME`, `SIGN_NOVICE_AREA`, and `SIGN_RESPAWN_AREA` dans votre code pour vérifier si vous devez rapidement prendre contrôle de la salle ou pas.

---
Page traduite par :
- [iKlem](https://github.com/iKlem)
