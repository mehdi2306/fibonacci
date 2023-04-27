// anne divisible par %4 B
// anne divisible par %100 N-B
// anne divisible par %400 B
// anne divisible par %1600 N-B

// calculer la nombre de jour depuis qu'on a marché sur la lune

// soustraire 201 jour
#include <stdio.h>
#include <stdlib.h>

struct jour
{
    int jour;
    int mois;
    int annee;
};

int get_nombre_jours(int mois, int annee);
int bissextile(int annee);

int main()
{

    struct jour jour_lune = {20, 07, 1969};
    struct jour aujourdhui = {16, 01, 2023};

    printf("jour lune : %d - %d - %d \n", jour_lune.jour, jour_lune.mois, jour_lune.annee);
    printf("jour lune : %d - %d - %d \n", aujourdhui.jour, aujourdhui.mois, aujourdhui.annee);

    printf("nb jour avril 2020 %d\n", get_nombre_jours(2, 2020));
    printf("nb jour avril 2000 %d\n", get_nombre_jours(2, 2000));
    printf("nb jour avril 1980 %d\n", get_nombre_jours(2, 1980));

    return EXIT_SUCCESS;
}

int get_nombre_jours(int mois, int annee)
{

    int nombre_jour[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    if ((mois < 1) || (mois > 12))
    {
        fprintf(stderr, " le mois est incorrect\n");
        return EXIT_FAILURE;
    }

    if (mois != 2)
    {
        return nombre_jour[mois];
    }
    else
    {
        return nombre_jour[2] + bissextile(annee);
    }

    return nombre_jour[mois];
}

int bissextile(int annee)
{
    if (annee % 4 == 0)
    {
        if (annee % 100 == 0)
        {
            if (annee % 400 == 0)
            {
                if (annee % 1600 == 0)
                {
                    return 0;
                }
                else
                {
                    return 1;
                }
            }
            else
            {
                return 0;
            }
        }
        else
        {
            return 1;
        }
    }
    else
    {
        return 0;
    }
}