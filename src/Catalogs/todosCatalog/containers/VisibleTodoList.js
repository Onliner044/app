import { connect } from 'react-redux';

import { toggleTodo } from '../actions';
import { VisibilityFilters } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = state => ({
  state: state.todosReducer.todos,
  todos: getVisibleTodos(state.todosReducer.todos.todos, state.todosReducer.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  dispatch: (action) => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);