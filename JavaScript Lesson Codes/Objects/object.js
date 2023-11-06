//an object is a collection of related items
//like a person - he has a name, address, likes etc
//multiple related variables can be put in an object
//Objects gives a name and value to elements 

let name = 'mike';
let age = 25;

//these related variables can be put an object

let person = {
    name: 'mike',
    age: 25
};

//objects uses a key-value pair system. the values are properties of the object

//to access the object
console.log(person)

//to access the properties
//1. use dot notation
person.name = 'johnson'//this will change the value of the name properties

console.log(person.name)

//2. use bracket notation
person['name'] = 'johnson';
console.log(person['name'])

//object to store user details
let user = {
    name: 'John',
    age: 4,
    hobby: 'football',
    isMarried: false,
    spells: ['abrakadabra','shazam','boo']//this is an array inside an object
}

//to access items from the object
console.log(user.age)

//to add properties to the object
user.favFood = 'fried rice';

//to change the value of item in the object
user.isMarried = true;

//difference between arrays and object

//an array is an object that uses index while objects uses
//array is good for list of item while object is good for properties like a game tools

//an object inside an array
let list = [
    {
        username: 'mikey',
        password: 'secret'
    },
    {
        username: 'moss',
        password: '123'
    }
]

//using the console,
list
list[0]//this will access the first object
list[0].password; //this will access the value of password in the first object

//setting an empty object

var emptyObj = {};