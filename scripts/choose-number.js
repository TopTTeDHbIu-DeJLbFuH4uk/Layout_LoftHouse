const containerChooseNumberPhoneHeaderEl = document.querySelector('.container-choose-number-phone-header');
// const containerMenuHeaderNumberPhoneEl = document.querySelector('.container-menu-header-number-phone');
const backgroundHeaderEl = document.querySelector('.background-header');

document.addEventListener('click', (event) => {

    const popup = event.target.closest('.container-menu-header-number-phone');
    console.log(popup)

    if (popup) {
        backgroundHeaderEl.style.visibility = 'visible';
        containerChooseNumberPhoneHeaderEl.classList.toggle('show-modal-window-choose-number-phone');

        // const div = document.createElement('div');
        // div.classList.add('background-transparent-header-choose-phone-number');
        // document.body.prepend(div);
        // const div2 = document.createElement('div');
        // div2.classList.add('background-transparent-header-choose-phone-number-1');
        // backgroundTransparentHeaderChoosePhoneNumberEl.append(div2);

        backgroundHeaderEl.classList.add('loaded-background-header');


    } else if (containerChooseNumberPhoneHeaderEl.classList.contains('show-modal-window-choose-number-phone') && !popup) {

        containerChooseNumberPhoneHeaderEl.classList.remove('show-modal-window-choose-number-phone');

        // document.querySelector('div').remove()
        setTimeout(() => {
            backgroundHeaderEl.style.visibility = 'hidden';
        }, 500)
        backgroundHeaderEl.classList.remove('loaded-background-header');
    }

});

