const containerHeaderUpperEl = document.querySelector('.container-header-upper');
const headerCityEl = document.querySelector('.header-city');
const containerHeaderPopupChangeCityEl = document.querySelector('.container-header-popup-change-city');

const expandWindow = () => {
    containerHeaderPopupChangeCityEl.classList.add('active');
}
if (containerHeaderUpperEl.addEventListener('click', expandWindow) || headerCityEl.addEventListener('click', expandWindow));




// const collapseWindow = () => {
//     containerHeaderPopupChangeCityEl.classList.remove('active');
// }
document.addEventListener('click', (event) => {
    const click = event.composedPath().includes(containerHeaderPopupChangeCityEl);
    console.log(click);
    if (!click) {
        collapseWindow();
    }
});



