#include <stdio.h>
#include <string.h>
#define MAX 5

void tableau(int * tab)
{
    for (int i = 0; i < MAX; i++)
    {
        printf("veuillez saisir la valeur\n");
        scanf("%d", tab);
        
    }
}


int main()
{
    int total=0;
    int tab[MAX];
    tableau(tab);
    for(int i=0;i<MAX;i++)
    {
        printf("%d\n",tab[i]);

        total=total + tab[i];


    }
    
        printf("%d\n",total);
}
