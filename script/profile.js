import {
  userAvatar,
  userName,
  userLevel,
  userProf,
  userCountCourses
} from './vars-profile.js';

import { User } from './userInfo.js';

userAvatar.src = User.photo;
userName.textContent = User.name;
userLevel.textContent = User.level;
userProf.textContent = User.profession;
userCountCourses.textContent = `Пройдено ${User.courses} курса`
