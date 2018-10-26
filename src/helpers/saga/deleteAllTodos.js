import { call, put, takeEvery } from 'redux-saga/effects';
import { todoListRequest } from './todoList';

const DELETE_ALL_TODO_REQUEST = 'DELETE_ALL_TODO_REQUEST';
const DELETE_ALL_TODO_RESPONSE = 'DELETE_ALL_TODO_RESPONSE';
const DELETE_ALL_TODO_FAILURE_RESPONSE = 'DELETE_ALL_TODO_FAILURE_RESPONSE';

export const deleteAllTodosRequest = id => ({
  id,
  type: DELETE_ALL_TODO_REQUEST,
});

export const deleteAllTodosResponse = id => ({
  id,
  type: DELETE_ALL_TODO_RESPONSE,
});

export const deleteAllTodosFailureResponse = error => ({
  payload: error,
  type: DELETE_ALL_TODO_FAILURE_RESPONSE,
});

const deleteAllTodos = todos => new Promise((resolve, reject) => {
  let deleteTodos;
  todos.forEach((todo) => {
    deleteTodos = {
      ...deleteTodos,
      [todo.id]: null,
    };
  });

  deleteTodos = Object.assign({}, deleteTodos);
  /* database.ref(`${TODOS}`).update(deleteTodos).then(
      () => resolve(todos.length),
      reject
    ) */
});

function* fetchDeleteAllTodos(params) {
  try {
    const id = yield call(deleteAllTodos, params.id);
    yield put(deleteAllTodosResponse(id));
    yield put(todoListRequest());
  } catch (error) {
    yield put(deleteAllTodosFailureResponse(error));
  }
}

export default function* watchDeleteAllTodos() {
  yield takeEvery(DELETE_ALL_TODO_REQUEST, fetchDeleteAllTodos);
}
