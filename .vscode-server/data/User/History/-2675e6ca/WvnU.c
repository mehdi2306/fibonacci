#include <stdio.h>
#include <string.h>

int main()
{
    int nbr_mots= 1 ;
    char currentChar;
    // Ouverture du fichier
    FILE * fichier = fopen( "./corbeau-renard.txt", "r" );

    // SI le fichier est existant
    if ( fichier != NULL ) {
        
        // Tant que le fichier n'es pas finie de lire
        while ( ! feof( fichier ) ) {
            // je lie chaque caractère du fichier
            currentChar = fgetc(fichier);

            // Je print le currentChar
            printf("%c", currentChar);

            //ajoute un mot a chaque retour a la ligne ou espace 
            if (currentChar == 32 || currentChar == 10)
            {
                nbr_mots ++;
            }

            //supprime un mot a chaque !
            if (currentChar == 33 )
            {
                nbr_mots --;
            }

        }

    }
    
    printf("le nombre de mots est de : %d\n", nbr_mots);

    fclose( fichier );
        
    return 0;
}
