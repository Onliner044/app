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

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.data, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
