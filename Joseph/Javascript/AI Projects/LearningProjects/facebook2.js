//using array for our database
//array contains an object
//database has 4 users
var database = [
    {
        username: 'raphth',
        password: 'secret'
    },
    {
        username: 'Bobby',
        password: 'password1'
    },
    {
        username: 'jonny',
        password: '123'
    },
    {
        username: 'Sally',
        password: 'Sally1'
    }
];

//using array for users newsfeed
//array contains an object
var newsFeed = [
    {
        username: 'Bobby',
        timeline: 'So tired right now. I\'m bored'
    },
    {
        username: 'Sally',
        timeline: 'Hi guys, just got a new car'
    },
    {
        username: 'raphth',
        timeline: 'Ooops! I did it again!'
    }
];

//THIS FUNCTION AUTHENTICATE USERS AND RETURNS TRUE
function userAuth(username, password) {
    for(var i = 0; i < database.length; i++) {
        if(username === database[i].username && password === database[i].password) {
            console.log('Welcome to the newsfeed')
            return true;
        }
    } return false;
}

//THIS FUNCTION WORKS BUT NOT EFFICIENT. IT WILL BE RECREATED BELOW

// function signIn(username, password){
//     for(var i = 0; i < database.length; i++) {
//         if(database[i].username === username && database[i].password === password ) {
//             console.log(newsFeed);
//         } else {
//             alert('Sorry, username or password is incorrect');
//         }
//     }
// }

function signIn(username, password){
    if(userAuth(username, password)) {
        console.log(newsFeed);
        } else {
            alert('Sorry, username or password is incorrect');
    }
    
}

var userNamePrompt = prompt('Enter Your Username:');
var userPassPrompt = prompt('Enter Your Password');

//function that accepts two arguments and checks if both 
//matches the records in the database
// function signIn(username, password) {
//     if (username === database[0].username && password === database[0].password) {
//         console.log('Welcome to your newsfeed');
//         console.log(newsFeed);
//     } else if (username === database[1].username && password === database[1].password) {
//         console.log('Welcome to your newsfeed');
//         console.log(newsFeed);
//     }
//     else alert('Sorry, your username or password is incorrect');
// }

signIn(userNamePrompt, userPassPrompt);