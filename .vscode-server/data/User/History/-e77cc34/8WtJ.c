#include <stdio.h>
#include <string.h>

int main(){

    char prenom[] = "azertyuiopqsdfghjklm";

    while (strcmp(prenom, "toto") != 0){
        printf("Prenom : ");
        scanf("%s", prenom);
    }

    printf("Bonjour toto\n");

}