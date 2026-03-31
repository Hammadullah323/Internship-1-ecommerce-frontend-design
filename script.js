// Search bar interactivity
const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Page refresh hone se rokega
    if(searchInput.value !== "") {
        alert("Searching for: " + searchInput.value);
    } else {
        alert("Please enter something to search!");
    }
});