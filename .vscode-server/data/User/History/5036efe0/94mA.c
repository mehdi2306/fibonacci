#include <stdio.h>
#include <string.h>

int main(){

    char prenom[20];
    int note;
    float moyenne = 0;
    int nbr_note=0;
    int note_max = 0;
    char prenom_max[20];
    int note_mini = 20;
    char prenom_mini[20];


    printf("Prenom élève : ");
    scanf("%s", prenom);
    
    while (strcmp(prenom, "FIN") != 0) {
        printf("note élève : ");
        scanf("%d", &note);

        while (note<0 || note>20){
            printf("note incorrecte! raissisez la : ");
            scanf("%d", &note);
        }
        if (note>note_max){
            note_max = note;
            strcpy(prenom_max, prenom);
        }
        
        if (note<note_mini && note<note_max)
        {
            note_mini = note;
            strcpy(prenom_mini, prenom);
        }

        moyenne = moyenne + note;

        printf ("la note max est : %d\n", note_max);
        printf ("le prenom max est : %s\n", prenom_max);

        printf ("la note mini est : %d\n", note_mini);
        printf ("le prenom mini est : %s\n", prenom_mini);


        printf("Prenom élève : ");
        scanf("%s", prenom);

        nbr_note++;
    };

    moyenne = moyenne/nbr_note;

    printf("la moyenne est de : %.2f\n", moyenne);
    
    printf("FIN\n");

    
    

}