import { SET_VISIBILITY_FILTER, SHOW_NONE } from '../actions/const'

const visibilityFilter = (state = SHOW_NONE, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
