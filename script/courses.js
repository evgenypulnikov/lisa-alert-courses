/* ___ Courses Vars */

const coursesContainer = document.querySelector('.courses');
const courseTemplate = document.querySelector('#course-template').content;
const courseCard = courseTemplate.querySelector('.courses__item');
const courseImage = courseTemplate.querySelector('.courses__course-image');
const courseTitle = courseTemplate.querySelector('.courses__course-title');
const courseLevel = courseTemplate.querySelector('.courses__course-level');
const courseDescription = courseTemplate.querySelector('.courses__course-description');
const courseLessonsAmount = courseTemplate.querySelector('.courses__info-stat_lessons-amount');
const courseHoursAmount = courseTemplate.querySelector('.courses__info-stat_hours-amount');
const courseButton = courseTemplate.querySelector('.button');

const coursesList = [
  {
    courseImage: 'images/courses-list/cynology.jpg',
    courseTitle: 'Кинологическое направление',
    courseLevel: 'Бывалый',
    levelClass: 'middle',
    courseDescription: 'Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак',
    lessonsAmount: '100 занятий',
    hoursAmount: '100 ч',
    courseStatus: 'Продолжить',
    statusClass: 'button_type_apply',
  },
  {
    courseImage: 'images/courses-list/duty-officers.jpg',
    courseTitle: 'Оперативные дежурные',
    courseLevel: 'Профессионал',
    levelClass: 'profi',
    courseDescription: 'Оперативное реагирование, контроль поступающих заявок и звонков, распределение задач, помощь в решении вопросов, удалённое',
    lessonsAmount: '144 занятия',
    hoursAmount: '144 ч',
    courseStatus: 'Записаться',
    statusClass: 'button_type_action'
  },
  {
    courseImage: 'images/courses-list/drones.jpg',
    courseTitle: 'Беспилотные летательные аппараты',
    courseLevel: 'Бывалый',
    levelClass: 'middle',
    courseDescription: 'Применение БПЛА в поиске людей, а так же передача полученной с помощью техники информации спасательным службам',
    lessonsAmount: '144 занятия',
    hoursAmount: '144 ч',
    courseStatus: 'Записаться',
    statusClass: 'button_type_action'
  },
  {
    courseImage: 'images/courses-list/first-aid.jpg',
    courseTitle: 'Первая помощь',
    courseLevel: 'Бывалый',
    levelClass: 'middle',
    courseDescription: 'Основы оказания первой помощи на поиске, юридические аспекты, базовые алгоритмы, разбор ошибок при оказания помощи на поиске',
    lessonsAmount: '144 занятия',
    hoursAmount: '144 ч',
    courseStatus: 'Записаться',
    statusClass: 'button_type_action'
  },
  {
    courseImage: 'images/courses-list/infogroup.jpg',
    courseTitle: 'Инфогруппа',
    courseLevel: 'Новичок',
    levelClass: 'newbie',
    courseDescription: 'Создание ориентировок, заказ карт, связь через мини АТС, обеспечение поиска',
    lessonsAmount: '144 занятия',
    hoursAmount: '144 ч',
    courseStatus: 'Пройден',
    statusClass: 'button_type_disabled'
  },
  {
    courseImage: 'images/courses-list/calling-operator.jpg',
    courseTitle: 'Операторы 8-800',
    courseLevel: 'Новичок',
    levelClass: 'newbie',
    courseDescription: 'Приём заявок на поиск людей с последующей передачей информации инфоргам',
    lessonsAmount: '144 занятия',
    hoursAmount: '144 ч',
    courseStatus: 'Записаться',
    statusClass: 'button_type_action'
  },
  {
    courseImage: 'images/courses-list/short-calls.jpg',
    courseTitle: 'Группа коротких прозвонов',
    courseLevel: 'Новичок',
    levelClass: 'newbie',
    courseDescription: 'Прозвон больниц, ОВД, различных ведомств, иногда свидетелей и возможных свидетелей',
    lessonsAmount: '100 занятий',
    hoursAmount: '100 ч',
    courseStatus: 'Записаться',
    statusClass: 'button_type_action'
  },
  {
    courseImage: 'images/courses-list/newbies.jpg',
    courseTitle: 'Новичковая',
    courseLevel: 'Новичок',
    levelClass: 'newbie',
    courseDescription: 'Короткое описание курса. людей в лесу и в городе. Все поисковые мероприятия организуются силами добровольцев «ЛизаАлерт»…',
    lessonsAmount: '144 занятия',
    hoursAmount: '144 ч',
    courseStatus: 'Пройден',
    statusClass: 'button_type_disabled'
  }
]

/* ___ Filters Vars */

const checkboxes = document.querySelectorAll('.sidebar__hidden-checkbox');
const filterTemplate = document.querySelector("#filter-item").content;
const chosenFilters = document.querySelector('.sidebar__chosen-filters');
const deleteAllFiltersButton = document.querySelector('.sidebar__delete-all-filters');

/* Check Max Text Length */

function maxTextLength(textElement, maxLength) {
  if (textElement.length > maxLength) {
    textElement = textElement.slice(0, maxLength - 3) + '...';
  }
  return textElement;
}

/* Courses Functions */

/* ___ 1. Create Course Item */

function createCourseItem(image, title, level, levelClass, desc, status, statusClass, lessons, hours) {
  courseImage.src = image;
  courseTitle.textContent = title;
  courseLevel.textContent = level;
  courseCard.classList.value = 'courses__item courses__item_visible_all';
  courseCard.classList.add(levelClass);
  courseDescription.textContent = maxTextLength(desc, 120);
  courseLessonsAmount.lastChild.textContent = lessons;
  courseHoursAmount.lastChild.textContent = hours;
  courseButton.textContent = status;
  courseButton.classList.value = 'button';
  courseButton.classList.add(statusClass);

  const courseItem = courseTemplate.cloneNode(true);

  const courseCardButton = courseCard.querySelector('.button');

  courseCardButton.addEventListener('click', function(evt) {
    const target = evt.target;
    if (target.classList.contains('button_type_action')) {
      target.classList.remove('button_type_action');
      target.classList.add('button_type_apply');
      target.textContent = 'Продолжить';
    }
  });

  return courseItem;
}

/* ___ 2. Render Course Item */

function renderCourseItem(item, container) {
  container.append(item);
}

coursesList.forEach(function(coursesList) {
  const item = createCourseItem(
    coursesList.courseImage,
    coursesList.courseTitle,
    coursesList.courseLevel,
    coursesList.levelClass,
    coursesList.courseDescription,
    coursesList.courseStatus,
    coursesList.statusClass,
    coursesList.lessonsAmount,
    coursesList.hoursAmount
    );

  renderCourseItem(item, coursesContainer);
});

/* ___ 3. Courses Array Filter */

function coursesArrayFilter() {
  const allCoursesButtons = coursesContainer.querySelectorAll('.button');

  for (let i = 0; i < coursesList.length; i++) {
    if (allCoursesButtons[i].classList.contains('button_type_action')) {
      allCoursesButtons[i].addEventListener('click', function() {
        coursesList[i].courseStatus = 'Продолжить';
      });
    }
  }
}

coursesArrayFilter();

/* ___ Filters Functions */

/* ___ 1. Check Checkboxes */

function checkCheckboxes() {
  let i = 0;
  checkboxes.forEach(function (element) {
    if (element.checked) {
      element.setAttribute('checked', '');
      deleteAllFiltersButton.classList.add('sidebar__delete-all-filters_opened');
      i++;
    } else if (element.checked === false) {
      element.removeAttribute('checked');
    }
  })
  if (i === 0) {
    deleteAllFiltersButton.classList.remove('sidebar__delete-all-filters_opened');
  }
}

/* ___ 2. Remove Filter */

function removeFilter(element) {
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

function addFilter(element) {
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

/* ___ 4. Active or Not */

function checkActiveOrInactive(element) {
  const inactive = document.querySelector('#inactive');
  const active = document.querySelector('#active');
  if (element.id === 'active') {
    inactive.checked = false;
    removeFilter(inactive);
  }
  if (element.id === 'inactive') {
    active.checked = false;
    removeFilter(active);
  }
}

/* ___ 5. Checkboxes For Each */

checkboxes.forEach(function (element) {
  element.addEventListener('click', function () {
    checkActiveOrInactive(element);
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

/* ___ 7. Courses Filtering */

const coursesCards = coursesContainer.querySelectorAll('.courses__item');
const checkedCheckboxes = document.querySelectorAll('.checkboxes:checked');

function showCourses(option, cards) {
  cards.forEach(function(card) {
    const isFiltered = card.classList.contains(option);
    if (isFiltered) {
      card.classList.add('courses__item_is_visible');
    }
    if (card.classList.contains('courses__item_visible_all')) {
      card.classList.remove('courses__item_visible_all');
    }
  });
}

function hideCourses(option, cards) {
  cards.forEach(function(card) {
    const isFiltered = card.classList.contains(option);
    if (isFiltered) {
      card.classList.remove('courses__item_is_visible');
    }
  });
}

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    const currentOption = checkbox.name;
    if (checkbox.checked) {
      showCourses(currentOption, coursesCards);
    } else {
      hideCourses(currentOption, coursesCards);
    }
  });
});
