#include <stdio.h>
#include <string.h>

int main()
{
    char currentChar;
    int nbr_lettre = 0;
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

            // je verifie si c'est une lettre
            if (isAlpha(currentChar)=1)
            {
                // si le nombre de lettre est superieur ou égal a 1 on fait rien
                if (nbr_lettre >= 1)
                {
                    return 0;
                }
                // sinon on ajoute +1 au nombre de lettre et +1 au nombre de mot
                else
                {
                    nbr_lettre++;
                    nbr_mots++;
                }
            }
            // sinon on met le nombre de lettre a 0;
            else
            {
                nbr_lettre = 0;
            }
        }
    }
    printf("le nombre de mots est de : %d\n", nbr_mots);

    fclose(fichier);

    return 0;
}

int isAlpha(int resultat)
{
    int currentChar;
    if ((currentChar >= 65 && currentChar <= 90) || (currentChar >= 97 && currentChar <= 122))
    {
        resultat=1;
    }
    else
    {
        resultat=0;
    }

    return resultat;
    
}