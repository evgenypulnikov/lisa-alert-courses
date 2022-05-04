/* ___ Courses Vars */

const coursesContainer = document.querySelector('.courses');
const courseTemplate = document.querySelector('#course-template').content;
const courseImage = courseTemplate.querySelector('.courses__course-image');
const courseTitle = courseTemplate.querySelector('.courses__course-title');
const courseLevel = courseTemplate.querySelector('.courses__course-level');
const courseDescription = courseTemplate.querySelector('.courses__course-description');
const courseLessonsAmount = courseTemplate.querySelector('.courses__info-stat_lessons-amount');
const courseHoursAmount = courseTemplate.querySelector('.courses__info-stat_hours-amount');
const courseButton = courseTemplate.querySelector('.button');

let filters = {
  level: [],
  status: []
}

const coursesList = [
  {
    courseImage: 'images/courses-list/cynology.jpg',
    courseTitle: 'Кинологическое направление',
    courseLevel: 'Бывалый',
    courseDescription: 'Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак',
    lessonsAmount: 100,
    hoursAmount: 100,
    courseStatus: 'registered'
  },
  {
    courseImage: 'images/courses-list/duty-officers.jpg',
    courseTitle: 'Оперативные дежурные',
    courseLevel: 'Профессионал',
    courseDescription: 'Оперативное реагирование, контроль поступающих заявок и звонков, распределение задач, помощь в решении вопросов, удалённое',
    lessonsAmount: 144,
    hoursAmount: 144,
    courseStatus: 'active'
  },
  {
    courseImage: 'images/courses-list/drones.jpg',
    courseTitle: 'Беспилотные летательные аппараты',
    courseLevel: 'Бывалый',
    courseDescription: 'Применение БПЛА в поиске людей, а так же передача полученной с помощью техники информации спасательным службам',
    lessonsAmount: 144,
    hoursAmount: 144,
    courseStatus: 'inactive'
  },
  {
    courseImage: 'images/courses-list/first-aid.jpg',
    courseTitle: 'Первая помощь',
    courseLevel: 'Бывалый',
    courseDescription: 'Основы оказания первой помощи на поиске, юридические аспекты, базовые алгоритмы, разбор ошибок при оказания помощи на поиске',
    lessonsAmount: 144,
    hoursAmount: 144,
    courseStatus: 'active'
  },
  {
    courseImage: 'images/courses-list/infogroup.jpg',
    courseTitle: 'Инфогруппа',
    courseLevel: 'Новичок',
    courseDescription: 'Создание ориентировок, заказ карт, связь через мини АТС, обеспечение поиска',
    lessonsAmount: 144,
    hoursAmount: 144,
    courseStatus: 'passed'
  },
  {
    courseImage: 'images/courses-list/calling-operator.jpg',
    courseTitle: 'Операторы 8-800',
    courseLevel: 'Новичок',
    courseDescription: 'Приём заявок на поиск людей с последующей передачей информации инфоргам',
    lessonsAmount: 144,
    hoursAmount: 144,
    courseStatus: 'active'
  },
  {
    courseImage: 'images/courses-list/short-calls.jpg',
    courseTitle: 'Группа коротких прозвонов',
    courseLevel: 'Новичок',
    courseDescription: 'Прозвон больниц, ОВД, различных ведомств, иногда свидетелей и возможных свидетелей',
    lessonsAmount: 100,
    hoursAmount: 100,
    courseStatus: 'active'
  },
  {
    courseImage: 'images/courses-list/newbies.jpg',
    courseTitle: 'Новичковая',
    courseLevel: 'Новичок',
    courseDescription: 'Короткое описание курса. людей в лесу и в городе. Все поисковые мероприятия организуются силами добровольцев «ЛизаАлерт»…',
    lessonsAmount: 144,
    hoursAmount: 144,
    courseStatus: 'passed'
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

function createCourseItem(image, title, level, desc, lessons, hours, status) {
  const courseItem = courseTemplate.cloneNode(true);
  courseItem.querySelector('.courses__course-image').src = image;
  courseItem.querySelector('.courses__course-title').textContent = title;
  courseItem.querySelector('.courses__course-level').textContent = level;
  courseItem.querySelector('.courses__course-description').textContent = maxTextLength(desc, 120);
  courseItem.querySelector('.courses__info-stat_lessons-amount').textContent = `${lessons} занятий`;
  courseItem.querySelector('.courses__info-stat_hours-amount').textContent = `${hours} ч`;
  const courseButton = courseItem.querySelector('.button');

  switch (status) {
    case 'active': {
      courseButton.classList.add('button_type_action');
      courseButton.id = status;
      courseButton.textContent = 'Записаться';
      courseButton.addEventListener('click', () => {
        courseButton.classList.remove('button_type_action');
        courseButton.classList.add('button_type_apply');
        courseButton.textContent = 'Продолжить';
      })
      break;
    }
    case 'passed':
    case 'inactive': {
      courseButton.classList.add('button_type_disabled');
      courseButton.id = status;
      courseButton.textContent = 'Пройден';
      break;
    }
    case 'registered': {
      courseButton.classList.add('button_type_apply');
      courseButton.id = status;
      courseButton.textContent = 'Продолжить';
      break;
    }
  }

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
    coursesList.courseDescription,
    coursesList.lessonsAmount,
    coursesList.hoursAmount,
    coursesList.courseStatus,
    );

  renderCourseItem(item, coursesContainer);
});

/* ___ Filters Functions */

/* ___ 1. Check Checkboxes */

function checkCheckboxes() {
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
      filterCourses(checkFilters(element));
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
    filterCourses(checkFilters(element));
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
  filters.level = [];
  filters.status = [];
  filterCourses(filters);
})


/* ___ 7. Cards Filters */

function checkFilters(element) {
  if ((element.checked === true) && (filters.level.indexOf(element.id) === -1) && (element.getAttribute('data-atr') === 'level')) {
    filters.level.push(element.id);
  }

  if ((element.checked === true) && (filters.status.indexOf(element.id) === -1) && (element.getAttribute('data-atr') === 'status')) {
    filters.status.push(element.id);
  }

  if (element.checked === false) {
    switch (element.getAttribute('data-atr')) {
      case 'level': {
        let b = filters.level.indexOf(element.id);
        filters.level.splice(b,1);
        break;
      }
      case 'status': {
        let b = filters.status.indexOf(element.id);
        filters.status.splice(b,1);
        break;
      }
    }
  }

  if ((element.id === 'active') && (filters.status.indexOf('inactive') !== -1)) {
    b = filters.status.indexOf('inactive');
    filters.status.splice(b,1);
  }

  if ((element.id === 'inactive') && (filters.status.indexOf('active') !== -1)) {
    b = filters.status.indexOf('active');
    filters.status.splice(b,1);
  }
  return filters;
}

function filterCourses(arr) {
  const courses = document.querySelectorAll('.courses__item');

  courses.forEach(course => {
    course.style.display = 'none';
  })

  if (arr.level.length === 0 && arr.status.length === 0) {
    courses.forEach(course => {
      course.style.display = 'flex';
    })
  }
  courses.forEach(course => {
    let courseLevel = course.querySelector('.courses__course-level').textContent;
    const courseStatus = course.querySelector('.button').id;

    switch (courseLevel) {
      case 'Новичок': {
        courseLevel = 'newbie';
        break;
      }
      case 'Бывалый': {
        courseLevel = 'middle'
        break;
      }
      case 'Профессионал': {
        courseLevel = 'profi';
        break;
      }
    }

    if ((arr.level.length === 0) && (arr.status.length !== 0)) {
      for (let j=0;j<arr.status.length;j++) {
        if (courseStatus == arr.status[j]) {
          course.style.display = 'flex';
        }
      }
    }

    if ((arr.status.length === 0) && (arr.level.length !== 0)) {
      for (let j=0;j<arr.level.length;j++) {
        if (courseLevel == arr.level[j]) {
          course.style.display = 'flex';
        }
      }
    }

    for (let i=0;i<arr.level.length;i++) {
      for (let j=0;j<arr.status.length;j++) {
        if ((courseLevel == arr.level[i]) && (courseStatus == arr.status[j])) {
          course.style.display = 'flex';
        }
      }
    }
  })
}
