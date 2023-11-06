let name = 'Mike'
if (name === 'Mike'){
    alert('Hi'+' '+ name );
} else {
    alert('hmmm, I don\'t know you');
}


//ELSE IF

let firstName = 'Billy';

if(firstName === 'Billy'){
    alert('Hi Billy');
} else if (firstName === 'Mike') {
    alert('Hi, Mike');
} else {
    alert('Sorry, I don\'t know you');
}

//LOGICAL OPERATORS
//|| OR
//&& AND
//! NOT

if (firstName === 'Billy' || firstName === 'Mike') {
    alert('Hi Billy or Mike');
} else {
    alert('sorry, wrong user');
}


//using AND
if(firstName === 'bob' && lastName === 'uche') {
    alert('Welcome'+' '+firstName+' '+lastName)
} else {
    alert('Sorry, I don\'t know you');
}

//using NOT

if (!(firstName === 'mike')) {
    
}

//write a code that greets based on time of the day
//if hour is between 6am and 12pm. Greet Good Morning!
//if hour is between 12pm and 6pm, greet Good Afternoon!
//otherwise, greet Good evening!

let hour = 6;

if(hour >= 6 && hour < 12) {
    alert('Good morning');
} else if (hour >= 12 && hour < 18) {
    alert('Good afternoon!');
} else alert('Good evening');