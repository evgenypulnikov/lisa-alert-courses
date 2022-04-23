import { coursesContainer,
  courseTemplate,
  courseImage,
  courseTitle,
  courseLevel,
  courseDescription,
  courseLessonsAmount,
  courseHoursAmount,
  courseButton,
  coursesList
} from './vars.js';

import { maxTextLength } from './maxTextLength.js';

/* Create Course Item */

export function createCourseItem(image, title, level, desc, status, statusClass, lessons, hours) {
  courseImage.src = image;
  courseTitle.textContent = title;
  courseLevel.textContent = level;
  courseDescription.textContent = maxTextLength(desc, 120);
  courseLessonsAmount.lastChild.textContent = lessons;
  courseHoursAmount.lastChild.textContent = hours;
  courseButton.textContent = status;
  courseButton.classList.value = 'button';
  courseButton.classList.add(statusClass);

  const courseItem = courseTemplate.cloneNode(true);

  const courseCardButton = courseItem.querySelector('.button');

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

/* Render Course Item */

export function renderCourseItem(item, container) {
  container.append(item);
}

coursesList.forEach(function(coursesList) {
  const item = createCourseItem(
    coursesList.courseImage,
    coursesList.courseTitle,
    coursesList.courseLevel,
    coursesList.courseDescription,
    coursesList.courseStatus,
    coursesList.statusClass,
    coursesList.lessonsAmount,
    coursesList.hoursAmount
    );

  renderCourseItem(item, coursesContainer);
});

/* Courses Array Filter */

export function coursesArrayFilter() {
  const allCoursesButtons = coursesContainer.querySelectorAll('.button');

  for (let i = 0; i < coursesList.length; i++) {
    if (allCoursesButtons[i].classList.contains('button_type_action')) {
      allCoursesButtons[i].addEventListener('click', function() {
        console.log(allCoursesButtons[i]);
        coursesList[i].courseStatus = 'Продолжить';
        console.log(coursesList[i].courseStatus);
        console.log(coursesList[i]);
      });
      console.log(coursesList[i].courseStatus);
    }
  }
}

coursesArrayFilter();
