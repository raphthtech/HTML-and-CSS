var database = [
    {
        username: 'raphth',
        password: 'secret'
    },
    {
        username: 'Bobby',
        password: 'password1'
    }
];

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

var userNamePrompt = prompt('Enter Your Username:');
var userPassPrompt = prompt('Enter Your Password');

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log('Welcome to your newsfeed');
        console.log(newsFeed);
    } else if (username === database[1].username && password ===[1].password) {
        console.log('Welcome to your newsfeed');
        console.log(newsFeed);
    }
    else alert('Sorry, your username or password is incorrect');
}

signIn(userNamePrompt, userPassPrompt);