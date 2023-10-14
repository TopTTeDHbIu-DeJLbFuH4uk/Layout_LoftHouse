const containerChooseNumberPhoneHeaderEl = document.querySelector('.container-choose-number-phone-header');
const backgroundHeaderEl = document.querySelector('.background-header');

document.addEventListener('click', (event) => {

    const popup = event.target.closest('.container-menu-header-number-phone');
    console.log(popup)

    if (popup) {
        containerChooseNumberPhoneHeaderEl.classList.toggle('show-modal-window-choose-number-phone');

        backgroundHeaderEl.classList.add('loaded-background-header');

    } else if (containerChooseNumberPhoneHeaderEl.classList.contains('show-modal-window-choose-number-phone') && !popup) {

        containerChooseNumberPhoneHeaderEl.classList.remove('show-modal-window-choose-number-phone');

        backgroundHeaderEl.classList.remove('loaded-background-header');
    }

});

