#include <stdio.h>
#include <string.h>

int main()
{
FILE * inputFile = fopen( "./corbeau-renard_u.txt", "r" );
    if ( inputFile == NULL ) {
        printf( "Cannot open file \n");
        return 0;
    }
    
    while ( ! feof( inputFile ) ) {
        int theCurrentChar;
        printf( "Appuyez sur <ENTER> pour lire le prochain caractère du fichier");
        fflush( stdin );
        fgetc( stdin );
        
        theCurrentChar = fgetc( inputFile );
        printf( "Le caractère actuel est <<%c>>\n", theCurrentChar );
    }

    fclose( inputFile );
        
    return 0;
}
