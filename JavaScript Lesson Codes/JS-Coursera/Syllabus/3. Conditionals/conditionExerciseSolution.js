Complete the following steps to create: Are You Old Enough? 
Declare a variable age using the var keyword and set it to the number 10.
Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".
Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".
Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".
Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".

Try adjusting the age and executing the program to see how it will affect the output.

// Code the days of the week program as a switch statement
On the next line, define a new variable, name it day, and set its value to "Sunday".
Start coding a switch statement, passing the day variable as the expression to evaluate.
Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.
At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').
Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.


// SOLUTIONS
// 1. var age = 10;

// 2. var age = 10;
// if (age >= 65) {
//    console.log('You get your income from your pension')
// }

// 3.var age = 10;
// if (age >= 65) {
//    console.log('You get your income from your pension')
// } else if (age < 65 && age >= 18) {
//    console.log('Each month you get a salary')
// }

// 4. var age = 10;
// if (age >= 65) {
//    console.log('You get your income from your pension')
// } else if (age < 65 && age >= 18) {
//    console.log('Each month you get a salary')
// } else if (age < 18) {
//    console.log('You get an allowance')
// }

// 5. var age = 10;
// if (age >= 65) {
//    console.log('You get your income from your pension')
// } else if (age < 65 && age >= 18) {
//    console.log('Each month you get a salary')
// } else if (age < 18) {
//    console.log('You get an allowance')
// } else {
//    //this block will run if no condition matches
//    console.log('The value of the age variable is not numerical')
// }


// SOLUTION FOR DAY OF THE WEEK
// 1. var day = `Sunday`;

// 2. var day = `Sunday`;
// switch(day) {
// //add your conditions
// }

// 3. var day = `Sunday`;
// switch(day) {
//    case 'Monday':
//        console.log('Do something');
//        break;
//    case 'Tuesday':
//        console.log('Do something');
//        break;
//    case 'Wednesday':
//        console.log('Do something');
//        break;
//    case 'Thursday':
//        console.log('Do something');
//        break;
//    case 'Friday':
//        console.log('Do something');
//        break;
//    case 'Saturday':
//        console.log('Do something');
//        break;
//    case 'Sunday':
//        console.log('Do something');
//        break;
// }


// 4. var day = `Sunday`;
// switch(day) {
//    case 'Monday':
//        console.log('Do something');
//        break;
//    case 'Tuesday':
//        console.log('Do something');
//        break;
//    case 'Wednesday':
//        console.log('Do something');
//        break;
//    case 'Thursday':
//        console.log('Do something');
//        break;
//    case 'Friday':
//        console.log('Do something');
//        break;
//    case 'Saturday':
//        console.log('Do something');
//        break;
//    case 'Sunday':
//        console.log('Do something');
//        break;
//    default:
//        //this block will run if no condition matches
//        console.log('There is no such day');
// }

// 6. var day = `Sunday`;
// switch(day) {
//    case 'Monday':
//        console.log('Read a book');
//        break;
//    case 'Tuesday':
//        console.log('Watch a movie');
//        break;
//    case 'Wednesday':
//        console.log('Read a book');
//        break;
//    case 'Thursday':
//        console.log('Play basketball');
//        break;
//    case 'Friday':
//        console.log('Socialize');
//        break;
//    case 'Saturday':
//        console.log('Chill');
//        break;
//    case 'Sunday':
//        console.log('Have barbecue');
//        break;
//    default:
//        //this block will run if no condition matches
//        console.log('There is no such day');
// }


IF-ELSE VS SWITCH CASE

When there are a smaller number of possible outcomes of truthy checks, 
it is still possible to use an if else statement, such as:

if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}

However, if there are a lot of possible outcomes, it is best practice
to use a switch statement because it is easier less verbose. Being easier
to read, it is easier to follow the logic, and thus reduce cognitive load 
of reading multiple conditions.

//converting the previous if-else example with switch-case
switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
       break;
}