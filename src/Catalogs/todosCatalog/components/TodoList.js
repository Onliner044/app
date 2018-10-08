import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../components/Todo';

const TodoList = ({ state, dispatch, toggleTodo, todos }) => (
    <div>
        <ul>
            {todos.map(todo =>
                <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
                text={todo.text}
                completed={todo.completed}
                id={todo.id}
                state={state}
                dispatch={dispatch}
                />
            )}
        </ul>
    </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;