title: Le Marché
---

Le marché dans Screeps permet de faire des échanges de ressources entre joueurs grâce à une structure spéciale appelée [Terminal](/api/#StructureTerminal). Le Terminal permet d'envoyer des ressources instantanément vers d'autres salles qu'importe la distance.

Le commerce dans le jeu requiers des **Crédits**. Vos crédits son lié à votre compte et vous permet de faire vos achats dans le marché.r market orders.

{% note info %}
Pour avoir vos premier crédits, faites un échange avec quelqu'un qui a fait une demande d'achat.
{% endnote %}

## Ordre de marché

Le marché est basé sur un système **d'achats et de ventes** lié aux différents terminaux. En créant un ordre, vous désignez le terminal, le type de ressource et la quantité à acheter ou vendre et le prix pour 1 unité en crédits. Chaque ordre est visible par tout les joueurs grâce au [Marché](https://screeps.com/a/#!/market) ou via la méthode [`Game.market.getAllOrders`](/api/#Game.market.getAllOrders). Créer un ordre est sujet à des frais de 5% en crédits.

Pour réaliser un échange, l'autre partie se dois posséder un terminal pour recevoir les ressources (lors d'un achat d'un ordre de vente) ou pour envoyer (lors d'une vente d'un ordre d'achat). Un échange est réalisable à partir de l'interface du Marché ou par la méthode [`Game.market.deal`](/api/#Game.market.deal) en désignant l'ordre de l'autre joueur, votre terminal contenant la quantité de ressources souhaité. Les deux terminaux vont automatiquement faire les transactions, l'acheteur se vera chargé des crédits correspondant qui sont passé au vendeur.

{% note info %}
L'énergie utilisée pour faire le transfer d'un terminal à un autre est toujours du côté du joueur qui éxecute l'ordre même dans le cas d'achat d'une ressource. Idem pour le temps de recharge du terminal utilisé.
{% endnote %}

Un ordre ne peut être exécuté tant que le terminal n'a pas les ressources à vendre ou que le joueur n'a pas assez de crédits pour l'achat. L'ordre reste inactif tant que les conditions ne sont pas respectées.

## Exemples

Voici quelques exemples pour comprendre ces méchaniques.

*   Assumons que le joueur Alice créée un ordre d'achat pour 1000 unités d'"utrim acid" au prix de 10 Cr l'unité. Pour créer l'ordre, Alice dois d'abord désigner son terminal dans la salle W1N1 et de suite payer les frais de 500 Cr.
*   Le joueur Bob découvre l'ordre d'Alice et décide de vendre pour 200 unités d'"utrium acid" de ses réserves. Le terminal de Bob est dans la salle W4N2, donc de 3 salles de distance de celui d'Alice. Cependant, ses dépenses pour envoyer 200 d'unités sera de 60 unités d'énergies. Bob exécute l'échange et 200 d'unités d'"utrium acid" sont automatiquement envoyé de W4N2 vers W1N1, Bob reçoit 2000 Cr et son terminal perd 60 d'unités d'énergies.
*   Maintenant Bob souhaite dépenser ses crédits et acheter de l'énergie venant du joueur Charlie qui propose une offre de vente dans la salle W1N5 au prix de 0.5 Cr par unité. Les 2000 Cr que Bob a gagné lui permet donc de récupérer 4000 unités d'énergie. Cependant, avec la distance de 4 salles entre les deux terminaux, le coût d'envoie en énergie montera à 1600 unités. Cette quantité dois être présente dans le terminal de Bob pour éxécuter l'échange. Charlie recevra donc 2000 Cr et ne dépensera pas d'énergie pour le transfer.

Voici un résumé des échanges entre les joueurs :

*   Alice (création d'un ordre d'achat, 1000 "utrium acid"): +200 utrium acid, -500-2000 credits.
*   Charlie (création d'un ordre de vente, énergie): -4000 d'énergie, +2000 credits.
*   Bob (marchant): -200 utrium acid, +4000-60-1600 d'énergie, +2000-2000 credits.

## Terminaux PNJ

Dans les croisement des salles "autoroutes" (ex: W0N0, W10N0, W10N10, etc...) des terminaux géré par le serveur sont présent. Vous pouvez réaliser des échanges avec ces terminaux comme s'ils sont des joueurs en utilisant l'interface du Marché ou l'objet [`Game.market`](/api/#Game.market). Les ordres des terminaux PNJ possèdent des ressources limités et sont réapprovisionné selon certains critères. Ces terminaux ne proposent pas les prix les plus compétitifs mais vous permet de convertir les surplus de ressources en crédits et vice versa.

## Jetons d'abonnements

_(Utilisable seulement sur le serveur Screeps Officiel)_

Il existe d'autres objets échangable dans Screeps : **les Jetons d'abonnements**. L'activation de ce jeton permet d'avoir un jour d'abonnement pour 60 CPU dans Screeps. Un jeton n'est pas un objet physique dans le monde, il existe seulement dans votre compte mais peux être échanger entre joueur pour des crédits à partir du même sytème d'ordre du Marché mais sans utilisé de terminaux.

Vous pouvez aussi acheter des jetons comme l'achat d'abonnement normal. Le jeton sera mis à disposition dans votre compte et pouvez le vendre en temps qu'objet virtuel à un autre joueur.

Les jetons sont aussi échangeable à partir du [Marché de la communauté Steam](http://steamcommunity.com/market/listings/464350/Subscription%20Token) permettant d'en vendre ou d'en acheter avec de l'argent réel.

---
Page traduite par :
- [iKlem](https://github.com/iKlem)
