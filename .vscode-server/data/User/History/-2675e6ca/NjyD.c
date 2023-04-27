#include <stdio.h>
#include <string.h>

int main()
{
    char currentChar;
    FILE * fichier = fopen( "./corbeau-renard_u.txt", "r" );

    if ( fichier != NULL ) {
        
        while ( ! feof( fichier ) ) {
            currentChar = fgetc(fichier);
            printf("%c", currentChar);
        }

    }
    
    

    fclose( fichier );
        
    return 0;
}
