import {
  SET_VISIBILITY_FILTER, SET_REGISTRATION_INFO, SET_LOGIN_INFO, TOGGLE_RENAME
} from './const'

export const setVisibilityFilter = filter => ({
  filter,
  type: SET_VISIBILITY_FILTER
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
