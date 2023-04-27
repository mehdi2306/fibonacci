#include <stdio.h>
#include <string.h>

int main(){

    char prenom[20];

    printf("Prenom: ");
    scanf("%s", prenom);

    if (strcmp( prenom, "toto") == 0 ){
        printf("ton pere le chauve\n");
    }
}