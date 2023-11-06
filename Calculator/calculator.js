const displayScreen = document.getElementById('display');

const toggleDropdown = function () {
    dropdownMenu.classList.toggle('show');
};

dropdownBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleDropdown();
});