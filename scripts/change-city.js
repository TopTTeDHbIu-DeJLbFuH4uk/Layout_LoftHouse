const containerHeaderPopupChangeCityEl = document.querySelector('.container-header-popup-change-city');

document.addEventListener('click', (event) => {
    const popup = event.target.closest('.container-header-popup-change-city');

    if (
        event.target.classList.contains('svg-icon-mark') ||
        event.target.classList.contains('header-city') ||
        event.target.classList.contains('header-mark-city')
    ) {
        containerHeaderPopupChangeCityEl.classList.toggle('show-modal-window-change-city');
    } else if (!popup && containerHeaderPopupChangeCityEl.classList.contains('show-modal-window-change-city')) {
        containerHeaderPopupChangeCityEl.classList.remove('show-modal-window-change-city');
    }

});

const headerCityEl = document.querySelector('.header-city');
const containerHeaderPopupMoscowCityEl = document.querySelector('.container-header-popup-moscow-city');
const containerHeaderPopupSaintPetersburg = document.querySelector('.container-header-popup-saint-petersburg');

const savedCity = localStorage.getItem('selectedCity');

if (savedCity) {
    headerCityEl.innerText = savedCity;
}

containerHeaderPopupMoscowCityEl.addEventListener('click', () => {
    headerCityEl.innerText = containerHeaderPopupMoscowCityEl.innerText;
    window.location.href = 'index.html';

    localStorage.setItem('selectedCity', headerCityEl.innerText);
});

containerHeaderPopupSaintPetersburg.addEventListener('click', () => {
    headerCityEl.innerText = containerHeaderPopupSaintPetersburg.innerText;
    window.location.href = 'index.html';

    localStorage.setItem('selectedCity', headerCityEl.innerText);
});

