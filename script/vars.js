/* Global Scope */

export const coursesContainer = document.querySelector('.courses');
export const courseTemplate = document.querySelector('#course-template').content;
export const courseImage = courseTemplate.querySelector('.courses__course-image');
export const courseTitle = courseTemplate.querySelector('.courses__course-title');
export const courseLevel = courseTemplate.querySelector('.courses__course-level');
export const courseDescription = courseTemplate.querySelector('.courses__course-description');
export const courseButton = courseTemplate.querySelector('.button');

/* Courses List Array */

export const coursesList = [
  {
    courseImage: 'images/courses-list/cynology.jpg',
    courseTitle: 'Кинологическое направление',
    courseLevel: 'Бывалый',
    courseDescription: 'Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак',
    courseStatus: 'Продолжить',
    statusClass: 'button_type_apply'
  },
  {
    courseImage: 'images/courses-list/duty-officers.jpg',
    courseTitle: 'Оперативные дежурные',
    courseLevel: 'Профессионал',
    courseDescription: 'Оперативное реагирование, контроль поступающих заявок и звонков, распределение задач, помощь в решении вопросов, удалённое',
    courseStatus: 'Записаться',
    statusClass: 'button_type_action'
  },
  {
    courseImage: 'images/courses-list/drones.jpg',
    courseTitle: 'Беспилотные летательные аппараты',
    courseLevel: 'Бывалый',
    courseDescription: 'Применение БПЛА в поиске людей, а так же передача полученной с помощью техники информации спасательным службам',
    courseStatus: 'Записаться',
    statusClass: 'button_type_action'
  },
  {
    courseImage: 'images/courses-list/first-aid.jpg',
    courseTitle: 'Первая помощь',
    courseLevel: 'Бывалый',
    courseDescription: 'Основы оказания первой помощи на поиске, юридические аспекты, базовые алгоритмы, разбор ошибок при оказания помощи на поиске',
    courseStatus: 'Записаться',
    statusClass: 'button_type_action'
  },
  {
    courseImage: 'images/courses-list/infogroup.jpg',
    courseTitle: 'Инфогруппа',
    courseLevel: 'Новичок',
    courseDescription: 'Создание ориентировок, заказ карт, связь через мини АТС, обеспечение поиска',
    courseStatus: 'Пройден',
    statusClass: 'button_type_disabled'
  },
  {
    courseImage: 'images/courses-list/calling-operator.jpg',
    courseTitle: 'Операторы 8-800',
    courseLevel: 'Новичок',
    courseDescription: 'Приём заявок на поиск людей с последующей передачей информации инфоргам',
    courseStatus: 'Записаться',
    statusClass: 'button_type_action'
  },
  {
    courseImage: 'images/courses-list/short-calls.jpg',
    courseTitle: 'Группа коротких прозвонов',
    courseLevel: 'Новичок',
    courseDescription: 'Прозвон больниц, ОВД, различных ведомств, иногда свидетелей и возможных свидетелей',
    courseStatus: 'Записаться',
    statusClass: 'button_type_action'
  },
  {
    courseImage: 'images/courses-list/newbies.jpg',
    courseTitle: 'Новичковая',
    courseLevel: 'Новичок',
    courseDescription: 'Короткое описание курса. людей в лесу и в городе. Все поисковые мероприятия организуются силами добровольцев «ЛизаАлер…',
    courseStatus: 'Пройден',
    statusClass: 'button_type_disabled'
  }
]
