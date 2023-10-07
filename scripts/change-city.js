const markCityContainerEl = document.querySelector('.mark-city-container');
const cityEl = document.querySelector('.city');
const changeCityContainerEl = document.querySelector('.change-city-container');

function expandWindow() {
    changeCityContainerEl.classList.add('active');
    changeCityContainerEl.style.transition = 'height 300ms ease';
}
if (markCityContainerEl.addEventListener('click', expandWindow) || cityEl.addEventListener('click', expandWindow));


function collapseWindow() {
    changeCityContainerEl.classList.remove('active');
    changeCityContainerEl.style.transition = 'height 300ms ease';
}
if (changeCityContainerEl.classList.contains('active')) {
    document.addEventListener('click', (event) => {
        const click = event.composedPath().includes(changeCityContainerEl);
        if (!click) {
            collapseWindow();
        }
    });
}



