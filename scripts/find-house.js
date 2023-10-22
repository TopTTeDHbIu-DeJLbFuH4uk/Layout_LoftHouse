// import allHouses from "./all-houses.js";

const containerBtnApplyEl = document.querySelector('.container-btn-apply');
const filterInputEls = [...document.querySelectorAll('.filter-input')];
const filterInvalidMsgEls = [...document.querySelectorAll('.filter-invalid-msg')];

filterInputEls.forEach((filterInputEl, index) => {
    filterInputEl.filterInvalidMsgEls = filterInvalidMsgEls[index];
    // console.log(filterInputEl.filterInvalidMsgEls);
});

containerBtnApplyEl.addEventListener('click', () => {
   const filters = {};

   filterInputEls.forEach(filterInputEl => {

       if (filterInputEl.value || filterInputEl.value === 0) {
           const [filterKey, filterSubKey] = filterInputEl.id.split('-');
           console.log(filterKey)
           const filter = filters[filterKey] = filters[filterKey] || {};
           filter[filterKey][filterSubKey] = filterInputEl.value;
           console.log(filter)
       } else {
           filterInputEl.filterInvalidMsgEls.classList.add('invalid');
           filterInputEl.filterInvalidMsgEls.classList.remove('hidden-filter-invalid-msg');
       }

       if (!filterInputEl.listensToChanges) {
            filterInputEl.addEventListener('input', () => {
               const isValid = filterInputEl.value || filterInputEl.value === 0;
               filterInputEl.filterInvalidMsgEls.classList.toggle('invalid', !isValid);
               filterInputEl.filterInvalidMsgEls.classList.toggle('hidden-filter-invalid-msg', isValid);
            });
            filterInputEl.listensToChanges = true;
       }
   });
});



const filters = {
    price: {
        from: '1',
        to: '2',
    },
    area: {
      from: '1',
      to: '2'
    },
};


// filter[filterKey] = filter[filterSubKey] = filterInputEl.value;
// filters[filterKey] = filter[filterSubKey] = filterInputEl.value;
// filter[filterKey] = filters[filterSubKey] = filterInputEl.v

