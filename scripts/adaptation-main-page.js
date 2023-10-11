const headerMenuTextLastEl = document.querySelector('.header-menu-text-last');
const headerMenuNavigationEl = document.querySelector('.header-menu-navigation');

if (window.innerWidth < 1315) {
    const div = document.createElement('div');
    const svg = document.createElement('svg');
    div.classList.add('container-menu-header-number-phone');
    svg.classList.add('svg-icon-header-phone');
    headerMenuNavigationEl.after(div);
    document.querySelector('.container-menu-header-number-phone').append(svg);
}
