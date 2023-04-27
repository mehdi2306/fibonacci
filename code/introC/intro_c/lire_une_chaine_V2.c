#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(){

    char prenom[] = "azertyuiopqsdfghjklm";

    while (strcmp(prenom, "toto") != 0){
        printf("Prenom : ");
        scanf("%s", prenom);
    }

    printf("Bonjour toto\n");

    return EXIT_SUCCESS;

}