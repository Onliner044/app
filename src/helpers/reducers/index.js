import { combineReducers } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import verification from './verification'
import registrationInfo from './registrationInfo'
import loginInfo from './loginInfo'
import filterTodos from './filterTodos'
import list from './list'

export default combineReducers({
  todos,
  visibilityFilter,
  verification,
  registrationInfo,
  loginInfo,
  filterTodos,
  list
})
