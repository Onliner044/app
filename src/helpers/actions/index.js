import * as consts from './const';

let nextTodoId = 0;
export const addTodo = text => ({
  type: consts.ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: consts.SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = id => ({
  type: consts.TOGGLE_TODO,
  id
})

export const setVerification = () => ({
  type: consts.SET_VERIFICATION,
})

export const setRegistrationInfo = (info) => ({
  type: consts.SET_REGISTRATION_INFO,
  info
})

export const VisibilityFilters = {
  SHOW_ALL: consts.SHOW_ALL,
  SHOW_COMPLETED: consts.SHOW_COMPLETED,
  SHOW_ACTIVE: consts.SHOW_ACTIVE
}