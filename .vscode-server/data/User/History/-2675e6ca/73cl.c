#include <stdio.h>
#include <string.h>

int main()
{
    char currentChar;
    // Ouverture du fichier
    FILE * fichier = fopen( "./corbeau-renard_u.txt", "r" );

    // SI le fichier est existant
    if ( fichier != NULL ) {
        
        // Tant que le fichier n'es pas finie de lire
        while ( ! feof( fichier ) ) {
            // je lie chaque caractère du fichier
            currentChar = fgetc(fichier);
            // Je print le currentChar
            printf("%c", currentChar);
        }

    }
    
    

    fclose( fichier );
        
    return 0;
}
