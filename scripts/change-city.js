const containerHeaderUpperEl = document.querySelector('.container-header-upper');
const headerCityEl = document.querySelector('.header-city');
const containerHeaderChangeCityEl = document.querySelector('.container-header-change-city');

function expandWindow() {
    containerHeaderChangeCityEl.classList.add('active');
}
if (containerHeaderUpperEl.addEventListener('click', expandWindow) || headerCityEl.addEventListener('click', expandWindow));


function collapseWindow() {
    containerHeaderChangeCityEl.classList.remove('active');
}
if (containerHeaderChangeCityEl.classList.contains('active')) {
    document.addEventListener('click', (event) => {
        const click = event.composedPath().includes(containerHeaderChangeCityEl);
        if (!click) {
            collapseWindow();
        }
    });
}



