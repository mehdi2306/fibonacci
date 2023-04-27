#include <stdio.h>
#include <string.h>
#define MAX 5

void tableau(int *tab)
{
    for (int i = 0; i < MAX; i++)
    {
        printf("veuillez saisir la valeur\n");
        scanf("%d", tab);
        *tab++;
    }
}

int total_tableau(int *tab)
{
    int total = 0;
    for (int i = 0; i < MAX; i++)
    {
        printf("%d\n", tab[i]);

        total = total + tab[i];
    }

    printf("%d\n", total);

    return total;
}

int main()
{

    int tab[MAX];
    tableau(tab);
    total_tableau(tab);
}
