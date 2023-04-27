#include <stdio.h>
#include <string.h>

int main()
{
    char currentChar;
    int nbr_lettre=0;
    int nbr_mots = 0;

    // Ouverture du fichier
    FILE *fichier = fopen("./corbeau-renard.txt", "r");

    // SI le fichier est existant
    if (fichier != NULL)
    {

        // Tant que le fichier n'es pas finie de lire
        while (!feof(fichier))
        {
            // je lie chaque caractère du fichier
            currentChar = fgetc(fichier);

            // Je print le currentChar
            printf("%c\n", currentChar);

            if  ((currentChar>=65 && currentChar<=90)||(currentChar>=97 && currentChar<=122))
            {
                if (nbr_lettre>=1)
                {
                    return 0;
                }
                else
                {
                    nbr_lettre ++;
                    nbr_mots ++;
                }
            }
            else
            {
                nbr_lettre=0;
            }
        }
    }
    printf("le nombre de mots est de : %d\n", nbr_mots);

    fclose(fichier);

    return 0;
}