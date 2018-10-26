import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import verification from './verification';
import registrationInfo from './registrationInfo';
import loginInfo from './loginInfo';
import list from './list';
import findTodoText from './findTodoText';

export default combineReducers({
  todos,
  visibilityFilter,
  verification,
  registrationInfo,
  loginInfo,
  list,
  findTodoText,
});
