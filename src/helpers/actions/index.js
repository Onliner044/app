import {
  SET_VISIBILITY_FILTER, SET_VERIFICATION, SET_REGISTRATION_INFO, SET_LOGIN_INFO, TOGGLE_RENAME,
  SET_FIND_TEXT, SET_LIST
} from './const'

export const setVisibilityFilter = filter => ({
  filter,
  type: SET_VISIBILITY_FILTER
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

export const setList = (list) => ({
  list,
  type: SET_LIST
})

export const setFindText = (text, isExact = false) => ({
  text,
  isExact,
  type: SET_FIND_TEXT
})
