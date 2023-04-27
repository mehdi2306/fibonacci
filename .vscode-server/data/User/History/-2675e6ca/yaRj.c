#include <stdio.h>
#include <string.h>

int main()
{

    int nbr_mots = 1 ;
    int currentChar;
    int taille_mots =0;
    
    // Ouverture du fichier
    FILE * fichier = fopen( "./corbeau-renard.txt", "r" );

    // SI le fichier est existant
    if ( fichier != NULL ) {
        
        // Tant que le fichier n'es pas finie de lire
        while ( ! feof( fichier ) ) {
            // je lie chaque caractère du fichier
            currentChar = fgetc(fichier);

            // Je print le currentChar
            printf("%d\n", currentChar);

            //si la taille du mot est différents de 0 et que le caractère est un " " ou "'" ou "." ou ";" ou ":", on ajoute un mots et on réinitialise la taille du mot
            if ((currentChar == 32 || currentChar == 39 || currentChar == 46 || currentChar == 59 || currentChar == 10 || currentChar == 58 || currentChar == 33) && taille_mots != 0)
            {
                taille_mots =0;
                nbr_mots ++;
            }
            // sinon on augemnte la taille du mot
            else
            {
                taille_mots ++;
            }


        }

    }
    
    printf("le nombre de mots est de : %d\n", nbr_mots);

    fclose( fichier );
        
    return 0;
}

