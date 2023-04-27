#include <stdio.h>
#include <string.h>

int main()
{
int a=0;
int b=1;
int c=0;

while (c<100)
{
c=a+b;
a=b;
b=c;
printf("%d\n",c);
}
}