// Loops are used to repeat an action until a condition is met

let toDos = [
    'clean house',
    'brush teeth',
    'exercise',
    'go shopping',
    'code',
    'eat healthy'
]

//FOR loop
// for(let i = 0; i < toDos.length; i++) {
//     //console.log(toDos[i]+'?')
//     console.log(toDos.pop())

// }

//WHILE loop
// var counterOne = 0;

// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }

//change the variable to 10 and reduce it
// var counterTwo = 10;
// while(counterTwo > 0) {
//     console.log(counterTwo);
//     counterTwo--;
// }

//DO WHILE loop
let counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);

//FOR EACH loop

toDos.forEach(function(todo,i) {
    console.log(todo, i)
})