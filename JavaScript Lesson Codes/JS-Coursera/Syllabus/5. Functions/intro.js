Basic Principle of Coding  = DRY
Don't Repeat Yourself


functions allow you to avoid repetition

Explain using addition of two numbers
var a = 10;
var b = 5;
var c = a + b;
console.log(c)

The above can be put into a function to avoid repeating when needed again
Syntax
function addTwoNumber() {
    //code inside the function
    var a = 10;
    var b = 5;
    var c = a + b;
    console.log(c)

}

PARAMETERS & ARGUMENTS
The above function will always give the same result since variable a and b are specified

to do this, we need to pass values to the functions. These values are call PARAMETERS
Parameters are like variable names. 

function addTwoNumber(a, b) {
    //code inside the function
    var c = a + b;
    console.log(c)

}