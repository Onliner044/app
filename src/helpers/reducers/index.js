import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import registrationInfo from './registrationInfo';
import loginInfo from './loginInfo';

export default combineReducers({
  todos,
  visibilityFilter,
  registrationInfo,
  loginInfo,
});
