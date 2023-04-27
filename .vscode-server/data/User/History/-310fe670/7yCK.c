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
    int i;
    int total;
    int moyenne;

    total = 0;
    for (i = 0; i < 7; i++)
    {
        total = total + valCapteur[i];

        moyenne = total / 8;
    }

    return (moyenne);
}