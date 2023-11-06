//Array is a way of organizing information
//it stores multiple variables that can be assessed using their index value



var list = ['tiger','mouse', 'bear','bird']

//Arrays can hold strings, numbers, booleans, functions, another array etc

var numbers = [1, 2, 4, 5, 6];
let booleans = [true, false, true]

var functionList = [function apple(){
    console.log(apple)
}]

//to get items in an array
console.log(list)// this will return the entire items in the array
console.log([1])//this will return the second item in the array

//Arrays are objects
//this implies that they are properties. These properties are called methods

//Using Methods on Arrays
//the .operators are called Methods. They are like functions in an Object

// list.shift()//this will shift the array to the left, removing the nearest item
// list.pop()//this will remove the last item from the array
// list.push('newAnimal')//this takes one or more arguments. this will add an item to the end of the array
// list.unshift('donkey') // this wil add an element at the beginning of the array
// list.concat(['goat','deer'])//this is used to concatenate with another array. This will create a new array
// list.sort()
// list.filter() //this will create a new array with every element in the array that passes the test
// list.splice(//Starting position, deletecount, newElements)//this is used to add or remove elements at a position. it has a starting posi
//list.splice(2,0,'peacock','rat'). here, we are starting at index 2, no element will be deleted and then adding two elements
// list.indexOf()//ELEMENT or index) //finding the index of an element. if element do not exist, it returns -1
// list.lastIndexOf()
// list.includes()

//callback function

//declare an array of courses with two objects
// const courses = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'}
// ];



//an array of arrays
// let list = [
//     ['man', 'woman'],
//     ['boy', 'girl']
// ]

//to access the above array


//A function that add to your friends list 
//when you get new friends

let myFriends  = [];
// let friendship = []

function addNewFriends(friends) {
    myFriends.push(friends);
    console.log(myFriends);
}

let friendList = addNewFriends(input('Enter a new friend: '));