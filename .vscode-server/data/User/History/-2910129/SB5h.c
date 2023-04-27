#include<stdio.h>
#include<string.h>


int tableau (int valeur){
int tab[5];
    int i;


    for(i=0;i<5;i++)
    {
        printf("veuillez saisir la valeur\n");
        scanf("%d",&valeur);

        tab[i]=valeur;

        printf("la valeur est de : %d\n",valeur);

    }

}



int main()
{

    tableau();
}

