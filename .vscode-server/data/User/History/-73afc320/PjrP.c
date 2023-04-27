#include <stdio.h>
#include <string.h>

int main()
{
    int a = 0;
    int b = 1;
    int c = 0;
    int n;

    for (n=0;n<32;n++)
    {
        c = a + b;
        a = b;
        b = c;
        printf("%d\n", c);
        printf("%d\n", n);
    }
}