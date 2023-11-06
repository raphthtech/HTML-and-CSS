// for(var year = 2023; year < 2025; year++) {
//     console.log(year);
//     for(var month = 6; month < 9; month++){
//         console.log(year, month)
//     }
// }

// From the above code, the variables can be replaced with i and j, which are industry standards


// EXERCISES
// 1. Make a multiplication table using a nested loop

//the outer loop
// for(var firstNum = 0; firstNum < 2; firstNum++){
//     console.log(firstNum);
// }

// //the inner loop
// for(var secondNum = 0; secondNum < 10; secondNum++){
//     console.log(secondNum);
// }

//combinning the first and second loop into a nested loop
//nested loop
// for(var firstNum = 0; firstNum < 2; firstNum++){
//     for(var secondNum = 0; secondNum < 10; secondNum++){
//         // console.log(firstNum + ', '+ secondNum);
//         console.log(firstNum + ' times '+ secondNum + ' equals '+firstNum * secondNum);
//     }
    
// }

// 2. Make a Division Table
for(var dividend = 100; dividend > 10; dividend = dividend - 10){
    for(divisor = 10; divisor > 4; divisor = divisor - 5){
        console.log(dividend + ' divided by '+ divisor + ' equals to '+ dividend/divisor)
    }
}