import React from 'react'
import PropTypes from 'prop-types'

import TodoContainer from '../containers/TodoContainer'

const TodoList = ({ todos }) => (
  <div>
    {todos.length > 0
      ? todos.map(todo => (
        <TodoContainer
          key={todo.id}
          {...todo}
        />
      )) : null}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default TodoList
