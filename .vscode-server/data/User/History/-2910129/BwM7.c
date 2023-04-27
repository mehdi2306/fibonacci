#include <stdio.h>
#include <string.h>
#define MAX 5

void tableau(int * tab)
{
    for (int i = 0; i < MAX; i++)
    {
        printf("veuillez saisir la valeur\n");
        scanf("%d", tab++);
        printf("la valeur est de : %d\n", tab);
        
    }
}

int main()
{
    int tab[MAX];
    tableau(tab);

}
