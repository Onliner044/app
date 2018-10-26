import React from 'react'
import PropTypes from 'prop-types'

import TodoContainer from '../containers/TodoContainer'

const TodoList = ({ todos }) => {
  const renderTodos = () => {
    if (todos.length > 0) {
      return (
        todos.map(todo => (
          <TodoContainer
            key={todo.id}
            {...todo}
          />
        ))
      )
    } else {
      return null;
    }
  }

  return (
    <div>
      {renderTodos()}
    </div>
  )
}

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
