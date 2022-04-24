export const userAvatar = document.querySelector('.card__photo');
export const userName = document.querySelector('.card__title');
export const userLevel = document.querySelector('.card__user-level');
export const userProf = document.querySelector('.card__user-profession');
export const userCountCourses = document.querySelector('.card__user-courses');

// User data

export const formUserData = document.querySelector('form[name="userData"]'),
             inputName = formUserData.querySelector('input[name="name"]'),
             inputBirthday = formUserData.querySelector('input[name="birthday"]'),
             inputLocation = formUserData.querySelector('input[name="location"]'),
             inputNickname = formUserData.querySelector('input[name="nickname"]'),
             inputPhoto = formUserData.querySelector('input[name="photo"]');

export const formUserAccount = document.querySelector('form[name="userAccount"]'),
             inputPhone = formUserAccount.querySelector('input[name="phone"]'),
             inputEmail = formUserAccount.querySelector('input[name="email"]'),
             inputPassword = formUserAccount.querySelector('input[name="password"]');
