import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import {
  SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED,
} from '../helpers/actions/const';

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

export const filterTodos = (todos, list) => {
  const count = list * 10;
  return todos.filter((todo, i) => i >= count - 10 && i < count);
};

export const findTodos = (todos, val, isExact) => {
  if (val === '') {
    return todos;
  }

  if (!isExact) {
    return todos.filter(todo => todo.text.indexOf(val) !== -1);
  }
  return todos.filter(todo => todo.text === val);
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.data, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
