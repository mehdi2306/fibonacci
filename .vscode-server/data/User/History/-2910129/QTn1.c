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
        total = total + tab[i];
    }

    return total;
}

double moyenne_tableau(int *tab)
{
    double moyenne = 0;

    moyenne = (double)total_tableau(tab) / MAX;
    return moyenne;
}

int main()
{

    int tab[MAX];
    tableau(tab);
    printf("%d\n", total_tableau(tab));
    printf("%4.2lf", moyenne_tableau(tab));
}
