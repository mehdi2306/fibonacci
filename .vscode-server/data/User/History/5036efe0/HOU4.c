#include <stdio.h>
#include <string.h>

int main(){

    char prenom[20];
    int note;

    while (strcmp(prenom, "FIN") != 0){
        printf("Prenom élève : ");
        scanf("%s", prenom);

        printf("note élève : ");
        scanf("%d", note);
    }

    printf("FIN\n");

    

}