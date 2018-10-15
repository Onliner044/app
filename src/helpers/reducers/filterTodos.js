import { SET_FILTER_TODOS } from '../actions/const'

const filterTodos = (state = [], action) => {
  switch (action.type) {
    case SET_FILTER_TODOS:
      return [...action.todos]
    default:
      return state
  }
}

export default filterTodos
