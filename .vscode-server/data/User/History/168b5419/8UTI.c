#include <stdio.h>

int main()
{
    int nbr_article;
    int prix_article;
    float prix_total = 0;
    float tva;
    int i=0;

    printf("quel est le nombre d'articles\n");
    scanf("%d", &nbr_article);

    while (nbr_article <= 0 )
    {
        printf("le nombre d'articles n'est pas bon\n");
        scanf("%d", &nbr_article);
    }
    printf("nombre article %d\n", nbr_article);

    for (i=1;i<nbr_article;i++)
    {
      
        printf("quelle est le prix de l'article numero %d \n", i);
        scanf("%d", &prix_article);

        prix_total = prix_total + prix_article;
    }

    printf("votre prix total hors taxe de vos articles est de :  %f\n", prix_total);

    printf("veuillez saisir votre tva\n");
    scanf("%f", &tva);

    prix_total = prix_total*(1+(tva/100));

    printf("votre prix total ttc de vos articles est de : %f\n", prix_total);

    return 0;
}