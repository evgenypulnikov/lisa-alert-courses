import {
  userAvatar,
  userName,
  userLevel,
  userProf,
  userCountCourses
} from './vars-profile.js';

import { user } from './userInfo.js';

userAvatar.src = user.photo;
userName.textContent = user.name;
userLevel.textContent = user.level;
userProf.textContent = user.profession;
userCountCourses.textContent = `Пройдено ${user.courses} курса`;
