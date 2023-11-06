In programming, if you have groups of data that you would like to relate,
you can assign them to something known as an object. 

Objects are a collection of related properties, where they have key-value pairs

CASE STUDY
Say you want to create a game with different characters. for example a store manager character

instead of doing this,

var storeManager = 'mike';

var storeManagerTraits = 'quiet';
var storeManagerYearfBirth = 1980;
var storeManagerLeadershipScore = 8;

Do this:
create an object

var storeManager = {
    name: 'mike',
    traits: 'quiet',
    yearOfBirth: 1980,
    leadershipScore = 8
}

Should you want to add a new property to the object later, this can easily be done:

storeManager.nextAchievement = 'open a new store'


HOW TO BUILD AN OBJECT
There are two ways - using Object literals and dot notation

Object literals

Sometimes, an entire object can be immediately built,
using the object literal syntax, by specifying the object's properties,
delimited as key-value pairs, using syntax that was already covered in
an earlier lesson item in this lesson.

//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

It essentially consists of two steps: 

1. Declaring a new variable and assigning an object literal to it - in other words, this: var assistantManager = {} 

2. Assigning the values to each of the object's keys, using the assignment operator, =

Notice that it's very easy to build any kind of an object in JavaScript using this example syntax.

For example, here's a table object:

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

To access the table object, I can simply console log the entire object:  
console.log(table);//display the object in the developer console

The returned value is the entire table object:  
{legs: 3, color: 'brown', priceUSD: 100}

Additionally, I can console log any individual property, like this:  
console.log(table.color); // 'brown'

Now that I have this "syntax recipe", I can build any other object in a similar way: 
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

An alternative approach of building objects is to first save an empty
object literal to a variable, then use the dot notation to declare new
properties on the fly, and use the assignment operator to add values to
those properties; for example:
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

Additionally, nothing is preventing me from combining the two approaches. For example:  
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}

This flexbility additionally means that I can update already existing properties, not just add new ones:  
house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}


BRACKET NOTATION
This alternative syntax is known as the brackets notation.

To understand how it works, it's best to use an example, so I'll go
through the process of coding the house2 object again, in the same 
way that I did with the dot notation, only this time, I'll use the 
brackets notation.

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

Note that using the brackets notation, I essentially just wrap each property's key
as a string, inside either the single or double quotes - just like with regular strings. 
Then I wrap the entire property key into an opening and a closing square bracket.
That's essentially all there is to it.
I can both access and update properties on objects using either the dot notation,
or the brackets notation, or a combination of both, like in the following example:
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

For the time being, this is probably enough information on object creation. 
Before I discuss the topic of arrays and objects, let me just give you another
important piece of information about the brackets notation. 
With the brackets notation, I can add space characters inside property names, like this:  
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 5}

Additionally, I can add numbers (as the string data type) as property keys:  
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}

However, doing this is discouraged, due to obvious reasons of having a property key
as a number string not really conveying a lot of useful information.
Finally, there's one really useful thing that bracket notation has but is not
available in the dot notation: It can evaluate expressions.
To understand what that means, consider the following example:
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

The above code will result in the following output:  
100
200
red

Using the fact that brackets notation can evaluate expressions, I accessed the arrOfKeys[i] property on the drone object. 
This value changed on each loop while the for loop was running.
Specifically, the first time it ran, it was evaluated like this: 

The value of i was 0 
The value of arrOfKeys[i] was arrOfKeys[0], which was "speed" 
Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100
This allowed me to loop over each of the values stored inside the drone object, based on each of its properties' keys.