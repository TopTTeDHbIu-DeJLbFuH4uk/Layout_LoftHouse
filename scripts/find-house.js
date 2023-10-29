const allHouses = [
    {
        id: 1,
        title: 'LOFTHAUS R70',
        price: 4465000,
        area: 70,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-1.jpg',

    },
    {
        id: 2,
        title: 'LOFTHAUS R90',
        price: 5115000,
        area: 90,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-2.jpg',
    },
    {
        id: 3,
        title: 'LOFTHAUS M102',
        price: 6360000,
        area: 102,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-3.jpg',
    },
    {
        id: 4,
        title: 'LOFTHAUS M125',
        price: 7300000,
        area: 125,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-4.jpg',
    },
    {
        id: 5,
        title: 'LOFTHAUS M130',
        price: 7910000,
        area: 130,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-5.jpg',
    },
    {
        id: 6,
        title: 'LOFTHAUS С140',
        price: 6970000,
        area: 140,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-6.jpg',
    },
    {
        id: 7,
        title: 'LOFTHAUS M150',
        price: 8820000,
        area: 150,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-7.jpg',
    },
    {
        id: 8,
        title: 'LOFTHAUS S160',
        price: 9120000,
        area: 160,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-8.jpg',
    },
    {
        id: 9,
        title: 'LOFTHAUS ONE 200',
        price: 16740000,
        area: 200,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-9.jpg',
    },
    {
        id: 10,
        title: 'LOFTHAUS S207',
        price: 11420000,
        area: 207,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-10.jpg',
    },
    {
        id: 11,
        title: 'LOFTHAUS К227',
        price: 10850000,
        area: 227,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-11.jpg',
    },
];

const containerBtnApplyEl = document.querySelector('.container-btn-apply');
const containerBtnResetEl = document.querySelector('.container-btn-reset');
const filterInputEls = [...document.querySelectorAll('.filter-input')];
const filterInvalidMsgEls = [...document.querySelectorAll('.filter-invalid-msg')];
const templateEl = document.querySelector('section > template');
const containerItemEls = document.querySelector('.container-items');

const renderHouse = (house, index) => {
    const houseTemplate = templateEl.content.firstElementChild.cloneNode(true);

    if (index >= 9) {
        houseTemplate.classList.add('hidden');
    }

    const imgEl = houseTemplate.querySelector('img');
    imgEl.src = house.img;

    const modelHouseEl = houseTemplate.querySelector('.model-house');
    modelHouseEl.innerText = house.title;

    const priceHouseEl = houseTemplate.querySelector('.price-house');
    priceHouseEl.innerText = `${new Intl.NumberFormat('ru-RU', {}).format(house.price).replace(/\s/g, '.')} ₽`;

    const sizeHouseEl = houseTemplate.querySelector('.size-house');
    sizeHouseEl.innerText = `${house.area}м2`;

    containerItemEls.append(houseTemplate);
};

allHouses.forEach((house, index) => {
    renderHouse(house, index);
});

const showAllHousesEl = document.querySelector('.show-all-houses');
const hiddenHouseEls = [...document.querySelectorAll('.hidden')];
const containerShowAllHousesEl = document.querySelector('.container-show-all-houses');
const showAllHousesWrapperEl = document.querySelector('.show-all-houses-wrapper');

showAllHousesEl.addEventListener('click', () => {
    hiddenHouseEls.forEach(hiddenHouse => {
        hiddenHouse.classList.remove('hidden');
    });
    containerShowAllHousesEl.classList.remove('container-show-all-houses');
    showAllHousesWrapperEl.classList.remove('show-all-houses-wrapper');
    showAllHousesEl.classList.remove('show-all-houses');
    showAllHousesEl.innerText = '';
});

const clearContainerItemEls = () => {
    [...containerItemEls.children].forEach(el => el.remove());
};

const getHouses = (filters) => {
    const response = allHouses.filter(house => {
        for (const filterKey in filters) {
            const filterVal = filters[filterKey];
            switch (filterKey) {
                case 'price': {
                    if (house.price < filterVal.from) return false;
                    if (house.price > filterVal.to) return false;
                    break;
                }
                case 'area': {
                    if (house.area < filterVal.from) return false;
                    if (house.area > filterVal.to) return false;
                    break;
                }
            }
        }
        return true;
    });
    return response.length ? response : null;
};

const isValidFilterInputEl = (filterInputEl) => {
    return !!filterInputEl.value || filterInputEl.value === 0;
};

const validateFilterInputEl = (filterInputEl) => {
    const isValid = isValidFilterInputEl(filterInputEl);
    filterInputEl.filterInvalidMsgEls.classList.toggle('hidden-filter-invalid-msg', isValid);
    return isValid;
};

filterInputEls.forEach((filterInputEl, index) => {
    filterInputEl.filterInvalidMsgEls = filterInvalidMsgEls[index];

    filterInputEl.addEventListener('input', () => {
        validateFilterInputEl(filterInputEl);
    });
});

const applyElClickHandler = () => {

    filterInputEls.forEach(filterInputEl => {
        if (!validateFilterInputEl(filterInputEl)) {
            return false;
        }
    });

    const filters = {};
    filterInputEls.forEach(filterInputEl => {
        const [filterKey, filterSubKey] = filterInputEl.id.split('-');
        const filter = filters[filterKey] = filters[filterKey] || {};
        filter[filterSubKey] = filterInputEl.value;
    });

    const houses = getHouses(filters);

    clearContainerItemEls();

    containerShowAllHousesEl.classList.remove('container-show-all-houses');
    showAllHousesWrapperEl.classList.remove('show-all-houses-wrapper');
    showAllHousesEl.classList.remove('show-all-houses');
    showAllHousesEl.innerText = '';

    if (!houses) {
        const noResultsMessageEl = document.querySelector('.no-results-message');
        noResultsMessageEl.classList.remove('hidden-message');
        return false;
    }

    houses.forEach(house => {
        renderHouse(house);
    });
};

containerBtnApplyEl.addEventListener('click', (e) => {
    containerBtnResetEl.classList.remove('hidden-btn-reset');
    applyElClickHandler(e);
});

const resetFunction = () => {
    containerBtnResetEl.classList.add('hidden-btn-reset');

    filterInputEls.forEach((filterInputEl) => {
        filterInputEl.value = '';
    });

    const noResultsMessageEl = document.querySelector('.no-results-message');
    if (!noResultsMessageEl.classList.contains('hidden-message')) {
        noResultsMessageEl.classList.add('hidden-message');
    }

    containerShowAllHousesEl.classList.add('container-show-all-houses');
    showAllHousesWrapperEl.classList.add('show-all-houses-wrapper');
    showAllHousesEl.classList.add('show-all-houses');
    showAllHousesEl.innerText = '+ Все дома';

    allHouses.forEach((house, index) => {
        renderHouse(house, index);
    });
};

containerBtnResetEl.addEventListener('click', resetFunction);


