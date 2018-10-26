import { call, put, takeEvery } from 'redux-saga/effects';

import { todoListRequest } from './todoList';
import { deleteTodoXMLHTTPRequest } from '../requests';

const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
const DELETE_TODO_RESPONSE = 'DELETE_TODO_RESPONSE';
const DELETE_TODO_FAILURE_RESPONSE = 'DELETE_TODO_FAILURE_RESPONSE';

export const deleteTodoRequest = title => ({
  title,
  type: DELETE_TODO_REQUEST,
});

export const deleteTodoResponse = title => ({
  title,
  type: DELETE_TODO_RESPONSE,
});

export const deleteTodoFailureResponse = error => ({
  payload: error,
  type: DELETE_TODO_FAILURE_RESPONSE,
});

const deleteTodo = title => new Promise((resolve, reject) => {
  deleteTodoXMLHTTPRequest(title).then(
    resolve(title),
  ).catch(
    reject,
  );
});

function* fetchDeleteTodo(params) {
  try {
    const title = yield call(deleteTodo, params.title);
    yield put(deleteTodoResponse(title));
    yield put(todoListRequest());
  } catch (error) {
    yield put(deleteTodoFailureResponse(error));
  }
}

export default function* watchDeleteTodo() {
  yield takeEvery(DELETE_TODO_REQUEST, fetchDeleteTodo);
}
