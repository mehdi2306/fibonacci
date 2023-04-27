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

int moyenne_tableau(int *tab)
{
    double moyenne = 0;

    moyenne = (double)total_tableau(tab)/MAX;
}

int main()
{

    int tab[MAX];
    tableau(tab);
    total_tableau(tab);
    moyenne_tableau(tab);
}
