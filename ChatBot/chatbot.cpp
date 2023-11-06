#include <iostream>
#include <conio.h>
#include <string.h>
#include <process.h>
#include <stdio.h>
using namespace std;

int main()
{
    char input[128];

    while (1)
    {
        gets(input);

        if (strcmp(input, "hi") == 0)
        {
            cout << "Hello sir, I am RAPHTH AI";
        }
        if (strcmp(input, "what are you doing") == 0)
        {
            cout << "I am learning something new";
        }
        if (strcmp(input, "sum") == 0)
        {
            int num1, num2;
            cout << "Give first number\n";
            cin >> num1;
            cout << "Give second number\n";
            cin >> num2;
            cout << "The sum is " << num1 + num2 << "\n";
        }
        if (strcmp(input, "multiply") == 0)
        {
            int num1, num2;
            cout << "Give first number";
            cin >> num1;
            cout << "Give second number";
            cin >> "The product is " << num1 * num2 << "\n";
        }
        if (strcmp(input, "subtract") == 0)
        {
            int num1, num2;
            cout << "Give first number";
            cin >> num1;
            cout << "Give second number";
            cin >> "The difference is " << num1 - num2 << "\n";
        }
        if (strcmp(input, "divide") == 0)
        {
            int num1, num2;
            cout << "Give first number";
            cin >> num1;
            cout << "Give second number";
            cin >> "The answer is " << num1 / num2 << "\n";
        }
        if (strcmp(input, "hello") == 0)
        {
            cout << "Hi sir";
        }
        if (strcmp(input, "what is your name") == 0)
        {
            cout << "Sir, I am RAPHTH AI";
        }
        if (strcmp(input, "hello") == 0)
        {
            cout << "Bye";
        }
    }
}