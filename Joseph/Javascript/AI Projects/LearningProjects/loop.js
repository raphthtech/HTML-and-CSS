//For Loop

var toDoList = [
    'clean room',
    'brush teeth',
    'eat breakfast',
    'exercise',
    'write js codes',
];


// for (var i = 0; i < toDoList.length; i++) {
//     console.log(toDoList[i]);
// }

//create a new variable for the array length
// var toDoListLength = toDoList.length;

// for (var i = 0; i < toDoListLength; i++) {
//     console.log(toDoList[i]);//this iterate over the array
//     toDoList.pop(); //this remove an item out of the array from the last index
//     console.log(toDoList.length); //this console log the length of array at each iteration
// }

var listCheck = function(list, i) {
    console.log(list, i);
}

//FOR EACH Method

// toDoList.forEach(function(list, i) {
//     console.log('forEach method',list, i);
// })

//REDO the ForEach like this
//Here, I have separated the function out of the ForEach

toDoList.forEach(listCheck);

//While Loop
//This check the condition first (while) before running the loop

// var counterOne = 10;

// while (counterOne > 0) { //while this condition remains true
//     console.log(counterOne);
//     counterOne--;
// }

//Do While Loop
// This execute first before checking the condition

// var counterTwo = 10;

// do {
//     console.log('do while loop',counterTwo);
//     counterTwo--;
// } while (counterTwo > 0)

for(var i=0; i<3; i++) {
    console.log('Hello World');
}