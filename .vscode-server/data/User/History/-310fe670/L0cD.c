/*
mehdi_aladag_exo1
Mehdi Aladag
*/
#include <stdio.h>

int normaliseCapteur(int valCapteur[8]);

int main()
{

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
    int total = 0;
    int i;
    int moyenne;
    int max1 = -1;
    int min1 = 1023;
    int max2 = -2;
    int min2 = 1024;
    
    //Boucle pour trouver la valeur la plus petite et plus grande
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

     //Boucle pour trouver la 2ème valeur la plus petite et plus grande
    for (i = 0; i < 8; i++)
    {
        if ((valCapteur[i] < min2) && (valCapteur[i] != min1))
        {
            min2 = valCapteur[i];
        }
        if ((valCapteur[i] > max2) && (valCapteur[i] != max1))
        {
            max2 = valCapteur[i];
        }
    }

    //Boucle qui permet d'exclure les 2 plus petites valeurs et 2 plus grandes valeurs
    for (i = 0; i < 8; i++)
    {
        if ((valCapteur[i] == min1) || (valCapteur[i] == max1) || (valCapteur[i] == max2) || (valCapteur[i] == min2))
        {
            valCapteur[i] = 0;
        }
        printf("%d\n", valCapteur[i]);
        total = total + valCapteur[i];
    }
    
    //Calcule de moyenne
    moyenne = total / 4;
    return (moyenne);
}