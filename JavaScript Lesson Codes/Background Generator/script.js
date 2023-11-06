let result = document.querySelector('#result');
let firstColor = document.querySelector('#firstColor');
let secondColor = document.querySelector('#secondColor');
let body = document.querySelector('#gradient')

// console.log(end);
// console.log(firstColor);
// console.log(secondColor);
// console.log(body);
// body.style.background = 'yellow'; 

let setGradient = function(){
    body.style.background =
    'linear-gradient(to right, '
    +firstColor.value 
    +','
    + secondColor.value 
    + ')';

    result.textContent = body.style.background+';'
}

firstColor.addEventListener('input', setGradient)
// {
    // console.log(firstColor.value);
    // body.style.background = 'linear-gradient(to right, '+firstColor.value +','+ secondColor.value + ')';

// })

secondColor.addEventListener('input', setGradient)
// {
    // console.log(secondColor.value);
    // body.style.background = 'linear-gradient(to right, '+firstColor.value +','+ secondColor.value + ')';
// })