import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED, SHOW_NONE } from '../helpers/actions/const'

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case SHOW_NONE:
      return []
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const filterTodos = (todos, list) => {
  const count = list * 10
  return todos.filter((todo, i) => {
    return i >= count - 10 && i < count
  })
}

const mapStateToProps = state => ({
  todos: filterTodos(getVisibleTodos(state.todos, state.visibilityFilter), state.list)
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
