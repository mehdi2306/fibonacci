// j'introduis des librairies
#include <stdio.h>
#include <string.h>

int main()
{
    // je déclare et incrémente mes variables
    char prenom[20];
    float note;
    float moyenne = 0;
    int nbr_note=0;
    float note_max = 0;
    char prenom_max[20];
    float note_mini = 20;
    char prenom_mini[20];


    printf("Prenom élève : ");
    scanf("%s", prenom);

    // je fait une boucle qui s'arrête si prenom = FIN

    while (strcmp(prenom, "FIN") != 0) {
        printf("note élève : ");
        scanf("%f", &note);
        //astuce si une note est supérieur à 20 ou inférieur à 0
        while (note<0 || note>20){
            printf("note incorrecte! raissisez la : ");
            scanf("%f", &note);
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
         nbr_note++;
        printf("Prenom élève : ");
        scanf("%s", prenom);

    };

 
    //astuce pour ne pas faire beuguer la moyenne
    if (nbr_note != 0){
        moyenne = moyenne/nbr_note;
        printf("la moyenne est de : %.2f\n", moyenne);

        printf ("la note max est : %.2f\n", note_max);
        printf ("le prenom max est : %s\n", prenom_max);

        if (note_mini != 20 ){

         printf ("la note mini est : %.2f\n", note_mini);
        printf ("le prenom mini est : %s\n", prenom_mini);

        } else {
            printf("il n'y a pas assez de note pour faire une note minimal\n");
        }

    } else {
        printf("la moyenne,l'élève avec la note mini et maxi ne peut être données. \n");
    }

    
    printf("FIN\n");

    
    

}