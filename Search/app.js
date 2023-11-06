let availableKeywords = [
    'HTML',
    'CSS',
    'Web Development',
    'Front-End Development',
    'Back-end Development',
    'Website Management',
    'JavaScript'
];

const searchResult = document.querySelector('.search-result');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
}