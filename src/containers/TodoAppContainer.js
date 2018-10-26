import { connect } from 'react-redux';
import { compose } from 'redux';

import TodoApp from '../components/TodoApp';
import { getVisibleTodos } from './VisibleTodoList';
import { todoListRequest } from '../helpers/saga/todoList';
import injectSaga from '../helpers/utils/injectSaga';
import { sagas } from '../helpers/saga/index';

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.data, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  todoListRequest: () => dispatch(todoListRequest()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'todoList', saga: sagas});

export default compose(
  withConnect,
  withSaga
)(TodoApp)
