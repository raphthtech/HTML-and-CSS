// //Functinos are pieces of code that performs an action
//they are a set of statements that performs that performs a task or calculate a value

// //to create a function,
// //call/execute the function using the bracket ()
// //when calling a function, you can optionally pass an argument eg alert('hello')
// //the number of arguments passed depends on the function
// //functions can be called as many times as you want

// //A greet function

// function sayHello() {
//     console.log('Hello');
// }

// sayHello();

// //A bye function
// //This is an anonymous function. It is assigned to a variable
// var sayBye = function() {
//     console.log('Byeeee');
// }

// sayBye()

// //A sing function
// function sing() {
//     console.log('lalalalala');
// }

// sing();

//Modified sing function, using parameters and arguments
function sing(song) {
    console.log(song);
}

sing('lalalalalala');
sing('do re mi fa so la ti do');

//A function that returns/calculates a value
// Multiply function

// function multiply(a, b) {
//     console.log(a*b);
// }

// multiply(5, 7);//this function will not work because we did not use the return keyword
//functions that returns a value must use the return keyword

//modifying the Multiply Function
//return marks the end of the execution of a function

// function multiply(a,b) {
//     return a*b;
// }

// multiply(5, 7);

//limiting the Multiply function
function multiply(a,b) {
    if(a > 100 || b > 100) {
        return alert('this is too difficult');
    } else {
        return a*b;
    }
}
// multiply();

//A function that calculates the square of numbers
function square(number) {
    return alert('The square of'+' '+ number+' '+'is'+' '+number*number);
}

//use the value from the function on a variable

// let number = square(6);
// console.log(number);

// function primes(num) {
//     if (num % 2 === 1) {
//         for(let i = 2; i < num; num--)
//     } else {
        
//     }
// }

// primes()

//function to check the largest of two numbers

function findLargest(num1, num2) {
    if(num1 > num2) {
        console.log('${num1} is largest number')
    } else if (num2 > num1) {
        console.log('${num2} is the largest Number')
    } else {
        console.log('${num1} is equal to {num2}')
    }
}

function findLargestOfThreeNumbers(a, b, c) {
    if(a > b && a > c) {
        console.log('{a} is the largest number',{a});
    } else if(b > c) return '{b} is the largest number';
    else return '{c} is the largest number';
}