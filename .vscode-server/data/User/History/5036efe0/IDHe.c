#include <stdio.h>
#include <string.h>

int main(){

    char prenom[20];
    int note;
    int moyenne = 0;

    printf("Prenom élève : ");
    scanf("%s", prenom);
    
    while (strcmp(prenom, "FIN") != 0) {
        printf("note élève : ");
        scanf("%d", &note);

        while (note<0 || note>20){
            printf("note incorrecte! raissisez la : ");
            scanf("%d", &note);
        }

        moyenne = moyenne + note;
        printf("totale des notes est de : %d\n", moyenne);

        printf("Prenom élève : ");
        scanf("%s", prenom);
    };
    
    printf("FIN\n");

    
    

}