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
    double moyenne = (double)total_tableau(tab) / MAX;
    return moyenne;
}

int mini(int *tab)
{
    int mini = *tab;

    for (int i = 0; i < MAX; i++)
    {
        if (mini > *tab)
        {
            mini = *tab;
        }

        *tab++;
    }

    return mini;
}

void print_tableau(int *tab)
{
    for (int i = 0; i < MAX; i++)
    {
        printf("tab[%p]\n valeur : %i", tab, *tab);
        tab++;
    }
}

int maxi(int *tab)
{
    int maxi = *tab;

    for (int i = 0; i < MAX; i++)
    {
        if (maxi < *tab)
        {
            maxi = *tab;
        }

        *tab++;
    }

    return maxi;
}
int main()
{

    int tab[MAX];
    tableau(tab);
    printf("%d\n", total_tableau(tab));
    printf("%4.2lf \n", moyenne_tableau(tab));
    printf("%d\n", mini(tab));
    printf("%d\n", maxi(tab));
    print_tableau(&tab[0]);
}
