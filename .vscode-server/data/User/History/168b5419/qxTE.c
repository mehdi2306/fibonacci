#include <stdio.h>

int main()
{
    int nbr_article;
    int prix_article;
    int prix_total = 0;
    int tva;
    int i=0;

    printf("quelle est le nombre d'articles\n");
    scanf("%d", &nbr_article);

    while (nbr_article <= 0 )
    {
        printf("le nombre d'articles n'est pas bon\n");
        scanf("%d", &nbr_article);
    }
    printf("nombre article %d\n", nbr_article);

    for (i=0;i<nbr_article;i++)
    {
        printf("quelle est le prix de l'article numero \n", i);
        scanf("%d", &prix_article);

        prix_total = prix_total + prix_article;
    }

    printf("votre prix totale hors taxe de vos articles est de :  %d\n", prix_total);

    printf("veuillez saisir votre tva %d\n");
    scanf("%d", &tva);

    prix_total = prix_total*(tva/100);

    printf("votre prix totale ttc de vos articles est de : %d\n", prix_total);

    return 0;
}