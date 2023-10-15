const containerChooseNumberPhoneHeaderEl = document.querySelector('.container-choose-number-phone-header');
const backgroundHeaderEl = document.querySelector('.background-header');

document.addEventListener('click', (event) => {
    if (event.target.closest('.container-choose-number-phone-header')) {
        return;
    }

    const popup = event.target.closest('.container-menu-header-number-phone');

    if (popup) {
        containerChooseNumberPhoneHeaderEl.classList.toggle('show-modal-window-choose-number-phone');
        backgroundHeaderEl.classList.add('open-background-header');

    } else if (containerChooseNumberPhoneHeaderEl.classList.contains('show-modal-window-choose-number-phone')) {
        containerChooseNumberPhoneHeaderEl.classList.remove('show-modal-window-choose-number-phone');
        backgroundHeaderEl.classList.remove('open-background-header');
    }
});



