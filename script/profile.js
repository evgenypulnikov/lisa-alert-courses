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
  photo: 'images/profile/belka.png',
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
inputPassword.value = replaceSymbols(user.password);

/* Replace inputs symbols '*' */

function replaceSymbols(str) {
  return str.replace(/./gi,'*');
}

/* Inputs Behaviour */

for (let i = 0; i < inputButtons.length; i++) {
  labels[i].addEventListener('click', function(evt) {
    evt.preventDefault();
  });
  inputButtons[i].addEventListener('click', function() {
    inputs[i].focus();
  });
}

/* Save Changes Data in Forms */

function setBtnActive(button) {
  button.removeAttribute('disabled','');
  button.classList.remove('button_type_disabled');
  button.classList.add('button_type_apply');
}

function setBtnInactive(button) {
  button.setAttribute('disabled','');
  button.classList.add('button_type_disabled');
  button.classList.remove('button_type_apply');
}

inputs.forEach(input => {
  input.addEventListener('input', (evt) => {
    const submitBtn = input.closest('form').querySelector('.button_type_submit');
    if (input.value !== user[evt.target.id]) {
      setBtnActive(submitBtn);
      input.classList.add('changed');
    } else { // Если значение в поле равно значению в массиве, то изменения вносить не нужно
      setBtnInactive(submitBtn);
      input.classList.remove('changed');
    }
  });
});

document.querySelectorAll('.form').forEach(form => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const changedInputs = form.querySelectorAll('.changed'); //Будем перезаписывать в массив только те поля, которые были изменены
    changedInputs.forEach(input => {
      user[input.id] = input.value;
      input.classList.remove('changed');
    });
    const submitBtn = form.querySelector('.button_type_submit');
    setBtnInactive(submitBtn);
  });
});
