3 + 4;
if (4 + 3 === 7) {
    // alert('Smart guy!');
    console.log('Another smart guy');
}
//Creating a function
//1. Function Declaration

function sayhello() {
    console.log('Helllooooo');
}

sayhello();

//2. Function Expression
var sayBye = function () {
    console.log('say byeeee');
}

//alert(sayBye());

//Using Function Arguments
//An argument is passed into a function. The number of argument depends on the function
function sing(song) {
    console.log(song);
}

sing('ta da');
sing('la la la')

//Function that multiplies two numbers
function multiply(a, b) {//the function takes two arguments
    //return a + b;//this works fine
    //     if (a > 100000 || b > 100000) {
    //         return (console.log('This work is too difficult. Try smaller numbers'));
    //     } else {
    //         return a * b;
    //     }
    // }
    // alert('The answer is' + '' + multiply(4, 5));

    //Keyless Car
    function keyCar(age) {
        //age = prompt('What is your age?');
        if (age < 18) {
            alert('Sorry, you are too young to drive this car. Powering off');
        } else if (age === 18) {
            alert('Congratulations on your first year of driving. Enjoy your ride!');
        } else {
            alert('Powering on. Enjoy your ride');
        }
    }
