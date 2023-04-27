#include <stdio.h>
#include <string.h>

int main(){

    char prenom[20];
    int note;

    
    do{

    }while (strcmp(prenom, "FIN") != 0){
        printf("Prenom élève : ");
        scanf("%s", prenom);

        printf("note élève : ");
        scanf("%d", &note);

        if (note<0 || note>20){
            printf("note incorrect!");
            scanf("%d", &note);
        }
    }

    printf("FIN\n");

    
    

}