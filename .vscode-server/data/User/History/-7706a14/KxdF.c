#include <stdio.h>

int main()
{
    int a;
    int b;
    int c;
    int t;

    printf("entrez les valeurs de a, b et c \n");
    scanf("%d %d %d", &a, &b, &c);

    t=c;
    c=b;
    b=a;
    a=t;

    printf(" la valeur de a est de : %d\n", a);
    printf(" la valeur de b est de : %d\n", b);
    printf(" la valeur de c est de : %d\n", c);

    return 0;
}