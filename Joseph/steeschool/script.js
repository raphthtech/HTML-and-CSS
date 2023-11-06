let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('#back-btn');
let frontBtn = document.getElementById('#front-btn');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

backBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft += 900;
})