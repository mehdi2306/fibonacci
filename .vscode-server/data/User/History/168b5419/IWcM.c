#include <stdio.h>

int main()
{
    int nbr_article;
    int prix_article;
    int prix_total = 0;
    int tva;
    int i;

    printf("quelle est le nombre d'article\n");
    scanf("%d", &nbr_article);

    if (nbr_article <= 0)
    {
        printf("le nombre d'article n'est pas bon\n");
        scanf("%d", &nbr_article);
    }

    for (i=0;i<nbr_article;i++)
    {
        printf("quelle est le prix de l'article\n");
        scanf("%d", &prix_article);

        prix_total = prix_total + prix_article;
    }

    printf("votre prix totale hors taxe de vos articles est de :  %d\n", prix_total);

    printf("veuillez saisir votre tva: %d\n");
    scanf("%d\n", &tva);

    prix_total = prix_total *(1(tva/100));

    printf("votre prix totale ttc de vos articles est de : %d\n", prix_total);

    return 0;
}