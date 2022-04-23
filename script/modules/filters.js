import {
  checkboxes,
  filterTemplate,
  chosenFilters,
  deleteAllFiltersButton,
  filterBlocks
} from '../vars.js'

/* ___ 1. Check Checkboxes */

export function checkCheckboxes() {
  let i = 0;
  checkboxes.forEach(function (element) {
    if (element.checked) {
      deleteAllFiltersButton.classList.add('sidebar__delete-all-filters_opened');
      i++;
    }
  })
  if (i === 0) {
    deleteAllFiltersButton.classList.remove('sidebar__delete-all-filters_opened');
  }
}

/* ___ 2. Remove Filter */

export function removeFilter(element) {
  const option = element.closest('.sidebar__option');
  const name = option.querySelector('.sidebar__checkbox-label');
  const filterTextes = document.querySelectorAll('.sidebar__filter-text');
  filterTextes.forEach(function (text) {
    if (text.textContent === name.textContent) {
      text.closest('.sidebar__filter-value').remove();
    }
  })
}

/* ___ 3. Add Filter */

export function addFilter(element) {
  const option = element.closest('.sidebar__option');
  const name = option.querySelector('.sidebar__checkbox-label');
  const filterName = filterTemplate
    .querySelector(".sidebar__filter-value")
    .cloneNode(true);
  filterName.querySelector('.sidebar__filter-text').textContent = name.textContent;
  if (element.checked === true) {
    chosenFilters.append(filterName);
    const closeButton = filterName.querySelector('.sidebar__close-button');
    closeButton.addEventListener('click', function () {
      filterName.remove();
      element.checked = false;
      checkCheckboxes();
    })
  } else {
    removeFilter(element);
  }
}

/* ___ 4. Open Filters */

filterBlocks.forEach(function (element) {
  element.addEventListener('click', function () {
    element.classList.toggle("sidebar__filter_active");
    const closestWrapper = element.closest('.sidebar__filter-wrapper');
    const filterOption = closestWrapper.querySelector('.sidebar__filter-options');
    filterOption.classList.toggle('sidebar__filter-options_opened');
  })
})

/* ___ 5. Checkboxes For Each */

checkboxes.forEach(function (element) {
  element.addEventListener('click', function () {
    addFilter(element);
    checkCheckboxes();
  })
})

/* ___ 6. Remove All Filters */

deleteAllFiltersButton.addEventListener('click', function () {
  const allActiveFilters = document.querySelectorAll('.sidebar__filter-value');
  deleteAllFiltersButton.classList.remove('sidebar__delete-all-filters_opened');
  allActiveFilters.forEach(function (element) {
    element.remove();
  })
  checkboxes.forEach(function (element) {
    element.checked = false;
  })
})
