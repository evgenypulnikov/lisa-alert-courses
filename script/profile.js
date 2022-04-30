/* Vars */

const userAvatar = document.querySelector('.card__photo');
const userName = document.querySelector('.card__title');
const userLevel = document.querySelector('.card__user-level');
const userProf = document.querySelector('.card__user-profession');
const userCountCourses = document.querySelector('.card__user-courses');

const formUserData = document.querySelector('form[name="userData"]');
const inputName = formUserData.querySelector('input[name="name"]');
const inputBirthday = formUserData.querySelector('input[name="birthday"]');
const inputLocation = formUserData.querySelector('input[name="location"]');
const inputNickname = formUserData.querySelector('input[name="nickname"]');
const inputPhoto = formUserData.querySelector('input[name="photo"]');

const formUserAccount = document.querySelector('form[name="userAccount"]');
const inputPhone = formUserAccount.querySelector('input[name="phone"]');
const inputEmail = formUserAccount.querySelector('input[name="email"]');
const inputPassword = formUserAccount.querySelector('input[name="password"]');

const labels = document.querySelectorAll('.form__label');
const inputs = document.querySelectorAll('.form__input');
const inputButtons = document.querySelectorAll('.card__btn-edit');
const formSubmitButtons = document.querySelectorAll('.button_type_submit');

const user = {
  name: 'Иванова Анна Сидоровна',
  level: 'Профессионал',
  profession: 'Картограф',
  courses: 2,
  birthday: '1990-01-01',
  location: 'г. Санкт-Петербург',
  nickname: 'Белка',
  photo: 'images/profile/belka.svg',
  phone: '+7 123 456 78 90',
  email: 'anna@liza-alert.ru',
  password: 'qwerty123'
}

/* Init Data */

userAvatar.src = user.photo;
userName.textContent = user.name;
userLevel.textContent = user.level;
userProf.textContent = user.profession;
userCountCourses.textContent = `Пройдено ${user.courses} курса`;

inputName.value = user.name;
inputBirthday.value = user.birthday;
inputLocation.value = user.location;
inputNickname.value = user.nickname;

inputEmail.value = user.email;
inputPassword.value = user.password;

/* Inputs Behaviour */

for (let i = 0; i < inputButtons.length; i++) {
  labels[i].addEventListener('click', function(evt) {
    evt.preventDefault();
  });
  inputButtons[i].addEventListener('click', function() {
    inputs[i].focus();
  });
}


