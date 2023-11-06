//Facebook has a database
//let's create an array of object for our database

let database = [
    {
        username: 'mike',
        password: 'Secret'
    },
    {
        username: 'sally',
        password: '1234'
    },
    {
        username: 'jonny',
        password: 'jons'
    },
    {
        username: 'guy',
        password: 'life159'
    }
];

//let's create a newsfeed where users have posted
//we are using an array of objects

let newsFeed = [
    {
        username: 'bob',
        timeline: 'So bored right now'
    },
    {
        username: 'collin',
        timeline: 'Feeling excited in my new journey'
    }
];
    
//using prompt to request user credential
let userNamePrompt = prompt('Enter your username');
let userPassPrompt = prompt('Enter your password');

//a function to check the active user
function isUserValid(user, pass) {
    for(var i = 0; i < database.length; i++) {
        if(database[i].username === user && database[i].password === pass) {
            return true;
        }
    } return false;
}

//a function to authenticate users

//THIS DIDN'T WORK AS REQUIRED SINCE IT HAS 
//TO LOOP THROUGH THE ENTIRE DATABASE

// function signIn(user, pass) {
// for(var i = 0; i < database.length; i++) {
//     if(database[i].username === user && database[i].password === pass) {
//         console.log(newsFeed);
//     } else {
//         alert('Sorry, wrong username and password');
//     }
// }
function signIn(user, pass) {
    if (isUserValid(user, pass)) {
           console.log(newsFeed);
        } else {
            alert('Sorry, wrong username and password');
        }
    };
   
    //OLD SIGNIN FUNCTION
    //function signIn(user, pass) {
    // if(user === database[0].username && pass === database[0].password) {
    //     console.log('Here\'s your feed', newsFeed)
    // } else {
    //    alert('Sorry, your username or password is incorrect!');
    // }
// }

signIn(userNamePrompt, userPassPrompt);