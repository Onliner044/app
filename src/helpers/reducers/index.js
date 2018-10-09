import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter'; 
import verification from './verification';
import registrationInfo from './registrationInfo';

export default combineReducers({
  todos,
  visibilityFilter,
  verification,
  registrationInfo
});