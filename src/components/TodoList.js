import React from 'react'
import PropTypes from 'prop-types'

import TodoContainer from '../containers/TodoContainer'

const TodoList = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <TodoContainer
        key={todo.id}
        {...todo}
      />
    ))}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default TodoList
