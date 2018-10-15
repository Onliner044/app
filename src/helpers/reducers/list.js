import { SET_LIST } from '../actions/const'

const list = (state = 1, action) => {
  switch (action.type) {
    case SET_LIST:
      return action.list
  }

  return state
}

export default list
