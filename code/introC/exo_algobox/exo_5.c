#include <stdio.h>

int main()
{

	int a;
	int b;
	int t;
	
	printf("saisir la valeur de a et de b \n");
	scanf("%d %d", &a, &b);


	t = b;
	b = a;
	a = t;
	
	printf(" la valeur de a est de : %d\n", a);
	printf("la valeur de b est de : %d\n", b);
	
	return 0;
}
