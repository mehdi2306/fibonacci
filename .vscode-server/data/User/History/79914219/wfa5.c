#include <stdio.h>
#include <string.h>

int main(){

    char prenom[20];

    printf("Prenom: ");
    scanf("%s", prenom);

    if (strcmp( prenom, "anas") == 0 ){
        printf("suce moi anas\n");
    }
}