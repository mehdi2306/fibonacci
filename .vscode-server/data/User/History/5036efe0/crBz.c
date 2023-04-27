// j'introduis des librairies
#include <stdio.h>
#include <string.h>

int main(){
    // je déclare et incrémente mes variables
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

    // je fait une boucle qui s'arrête si prenom = FIN

    while (strcmp(prenom, "FIN") != 0) {
        printf("note élève : ");
        scanf("%d", &note);

        while (note<0 || note>20){
            printf("note incorrecte! raissisez la : ");
            scanf("%d", &note);
        }

        // boucle pour la trouver l'élève avec la note max
        
        if (note>note_max){
            note_max = note;
            strcpy(prenom_max, prenom);
        }

        // boucle pour la trouver l'élève avec la note mini
        
        if (note<note_mini && note<note_max)
        {
            note_mini = note;
            strcpy(prenom_mini, prenom);
        }

        moyenne = moyenne + note;




        printf("Prenom élève : ");
        scanf("%s", prenom);

        nbr_note++;
    };

        printf ("la note max est : %d\n", note_max);
        printf ("le prenom max est : %s\n", prenom_max);

        printf ("la note mini est : %d\n", note_mini);
        printf ("le prenom mini est : %s\n", prenom_mini);

    // je calcule ma moyenne 
    if (nbr_note = 0){
        moyenne = -1;
    }else {
    moyenne = moyenne/nbr_note;
    }
    
    if (moyenne != -1 ){
    printf("la moyenne est de : %.2f\n", moyenne);
    }else{
        printf("la moyenne ne peut être donnée.")
    }

    
    printf("FIN\n");

    
    

}