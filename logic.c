#include <stdio.h>
#include <math.h>

void decToBin(int dec)
{
    int bin[64];

    int i = 0;

    while (dec > 0)
    {
        bin[i] = dec % 2;
        dec /= 2;
        i++;
    }

    for (int j = i - 1; j >= 0; j--)
        printf("%d", bin[j]);
}

void binToDec(int bin)
{
    int dec = 0, base = 1, rem;

    while(bin)
    {
        rem = bin % 10;
        dec = dec + rem * base;
        bin = bin / 10;
        base = base * 2;
    }

    printf("\n%d\n", dec);

}
    
int main()
{
    int varNum, iterator = 1;
    
    printf("\nEnter number of variables in the expression: ");
    scanf("%d", &varNum);

    decToBin(varNum);

    binToDec(1010110);

/* 
    for (int i = 0; i < pow(varNum, 2) - 1; i++)
    {
        decToBin(i);
        printf("\n");
    }   */  
    return 0;
}