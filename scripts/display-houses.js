const showAllHousesEl = document.querySelector('.show-all-houses');
const hiddenHouseEl = document.querySelector('.hidden-house');
const containerShowAllHousesEl = document.querySelector('.container-show-all-houses');
const buttonEl = document.querySelector('.container-show-all-houses > button');

showAllHousesEl.addEventListener('click', () => {
   hiddenHouseEl.classList.remove('hidden-house');
   buttonEl.remove();
   containerShowAllHousesEl.classList.remove('container-show-all-houses');
});