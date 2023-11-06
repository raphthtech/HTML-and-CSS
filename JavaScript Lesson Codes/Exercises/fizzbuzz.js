//FIZZBUZZ
//The user enters a number
//If the user enters a number divisible by 3, it returns Fizz
//if the number is divisible by 5, it returns Buzz
//if the number is divisible by both 3 and 5, it returns FizzBuzz
//if the number is not divisble by 3 and 5, it returns the same number
//if the number is not a number, it returns "not a number "

let num = Number(prompt('Enter any number'));

function fizzBuzz(input) {
    if(input % 3 === 0 && input % 5 === 0) {
        return alert('FizzBuzz');
    } else if (input % 3 === 0) {
        return 'Fizz';
    } else if(input % 5 === 0) {
        return 'Buzz';
    } else if(isNaN(input)) {
        return 'Sorry, what you entered is not a number';
    } else return input
}
alert(fizzBuzz(num));