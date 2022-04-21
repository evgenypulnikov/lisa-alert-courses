import { coursesContainer,
  courseTemplate,
  courseImage,
  courseTitle,
  courseLevel,
  courseDescription,
  courseButton,
  coursesList
} from './vars.js';

import { maxTextLength } from './maxTextLength.js';

/* Create Course Item */

export function createCourseItem(image, title, level, desc, status, statusClass) {
  courseImage.src = image;
  courseTitle.textContent = title;
  courseLevel.textContent = level;
  courseDescription.textContent = maxTextLength(desc, 120);
  courseButton.textContent = status;
  courseButton.classList.value = 'button';
  courseButton.classList.add(statusClass);

  const courseItem = courseTemplate.cloneNode(true);

  const courseCardButton = courseItem.querySelector('.button');
  courseCardButton.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('button_type_action')) {
      evt.target.classList.remove('button_type_action');
      evt.target.classList.add('button_type_apply');
      evt.target.textContent = 'Продолжить';
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
    coursesList.statusClass
    );

  renderCourseItem(item, coursesContainer);
});
