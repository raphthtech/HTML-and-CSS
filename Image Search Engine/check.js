const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const submit = document.getElementById('submit');

submit.addEventListener('click',(e)=>{
    searchResult.innerHTML = searchBox.value;
})