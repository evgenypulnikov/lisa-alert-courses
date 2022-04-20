import { coursesContainer,
  courseTemplate,
  courseImage,
  courseTitle,
  courseLevel,
  courseDescription,
  courseButton,
  coursesList
} from './vars.js';

/* Create Course Item */

export function createCourseItem(image, title, level, desc, status, statusClass) {
  courseImage.src = image;
  courseTitle.textContent = title;
  courseLevel.textContent = level;
  courseDescription.textContent = desc;
  courseButton.textContent = status;
  courseButton.classList.value = 'courses__button';
  courseButton.classList.add(statusClass);

  const courseItem = courseTemplate.cloneNode(true);

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
