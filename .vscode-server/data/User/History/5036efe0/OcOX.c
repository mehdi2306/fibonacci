#include <stdio.h>
#include <string.h>

int main(){

    char prenom[20];

    while (strcmp(prenom, "FIN") != 0){
        printf("Prenom : ");
        scanf("%s", prenom);
    }

    printf("FIN\n");

    

}