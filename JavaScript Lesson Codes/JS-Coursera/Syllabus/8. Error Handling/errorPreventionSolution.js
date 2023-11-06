Solution to task 1: Code a function declaration
function addTwoNums(a,b) {
    console.log(a + b) //display the result
}

Solution to task 2: Invoke the addTwoNums function with a number and a string
function addTwoNums(a,b) {
    console.log(a + b)
}
addTwoNums(5, "5") // "55"

Solution to task 3: Update the addTwoNums function with a try...catch block
function addTwoNums(a,b) {
    try {
        console.log(a + b)
    } catch(err) {
        console.log(err)
    }
}

Solution to task 4: If the passed-in arguments are not numbers, throw an error
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log(err)
    }
}


Solution to task 5: Update the catch block
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}

Solution to tasks 6 and 7: Invoke the addTwoNums function and Add another console log under the addTwoNums function invocation
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")

