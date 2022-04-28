import {
  userAvatar,
  userName,
  userLevel,
  userProf,
  userCountCourses,
  formUserData,
  inputName,
  inputBirthday,
  inputLocation,
  inputNickname,
  inputPhoto,
  formUserAccount,
  inputPhone,
  inputEmail,
  inputPassword
} from './vars-profile.js';

import { user } from './userInfo.js';

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
