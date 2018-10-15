import {
  START_TODOS, ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, SET_VERIFICATION,
  SET_REGISTRATION_INFO, SET_LOGIN_INFO, TOGGLE_RENAME, DELETE_TODO, APPLY_RENAME,
  SET_FILTER_TODOS,
  SET_LIST
} from './const'

export const startTodos = (todos) => ({
  todos,
  type: START_TODOS
})

export const addTodo = (text, id) => ({
  id,
  text,
  type: ADD_TODO
})

export const setVisibilityFilter = filter => ({
  filter,
  type: SET_VISIBILITY_FILTER
})

export const toggleTodo = id => ({
  id,
  type: TOGGLE_TODO
})

export const setVerification = () => ({
  type: SET_VERIFICATION
})

export const setRegistrationErrorInfo = (info) => ({
  info,
  type: SET_REGISTRATION_INFO
})

export const setLoginErrorInfo = (info) => ({
  info,
  type: SET_LOGIN_INFO
})

export const toggleRename = () => ({
  type: TOGGLE_RENAME
})

export const deleteTodo = (id) => ({
  id,
  type: DELETE_TODO
})

export const applyRename = (id, text) => ({
  id,
  text,
  type: APPLY_RENAME
})

export const setFilterTodos = (todos) => ({
  todos,
  type: SET_FILTER_TODOS
})

export const setList = (list) => ({
  list,
  type: SET_LIST
})