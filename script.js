const input = document.querySelector('input');
const searchBtn = document.querySelector('.fa-search');

input.addEventListener('focus', () => {
    searchBtn.style.color = "grey";
})

input.addEventListener('focusout', () => {
    searchBtn.style.color = "white";
})