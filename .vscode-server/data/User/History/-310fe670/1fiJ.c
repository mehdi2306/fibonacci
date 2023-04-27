/*
mehdi_aladag_exo1
Mehdi Aladag
*/
#include <stdio.h>

int normaliseCapteur(int valCapteur[8]);

int main()
{
    int min1 = 1024;
    int max1 = -1;


    int valCapteur[8] = {2, 56, 180, 60, 10, 1020, 65, 55};
    int moyenne;

    // Calcul et affichage de la valeur du capteur
    moyenne = normaliseCapteur(valCapteur);
    printf("Valeur du capteur = %d\n", moyenne);

    return 0;
}

// Fonction qui normalise les données lues. Ici avec une simple moyenne.
int normaliseCapteur(int valCapteur[8])
{
    int total=0;
    int i;
    int total;
    int moyenne;
    int max1=-1;
    int min1=1023;


        for (i = 0; i < 8; i++)
    {
        if (valCapteur[i] < min1)
        {
            min1 = valCapteur[i];
        }
        if (valCapteur[i] > max1)
        {
            max1 = valCapteur[i];
        }
    }

    printf("%d\n",max1);
    printf("%d\n",min1);
   
    for (i = 0; i < 8; i++)
    {

        printf("%d\n", valCapteur[i]);
        total = total + valCapteur[i];
    }
    moyenne = total / 8;
    return (moyenne);
}