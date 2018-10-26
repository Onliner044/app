import { call, put, takeEvery } from 'redux-saga/effects';

import { todoListRequest } from './todoList';
import { createTodoXMLHTTPRequest } from '../requests';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_RESPONSE = 'ADD_TODO_RESPONSE';
export const ADD_TODO_FAILURE_RESPONSE = 'ADD_TODO_FAILURE_RESPONSE';

export const addTodoRequest = (title, description) => ({
  title,
  description,
  type: ADD_TODO_REQUEST,
});

export const addTodoResponse = data => ({
  payload: data,
  type: ADD_TODO_RESPONSE,
});

export const addTodoFailureResponse = error => ({
  payload: error,
  type: ADD_TODO_FAILURE_RESPONSE,
});

const addTodo = (title, description) => new Promise((resolve, reject) => {
  createTodoXMLHTTPRequest(title, description).then(
    resolve(title),
  ).catch(
    reject,
  );
});

function* fetchAddTodo(params) {
  try {
    const title = yield call(addTodo, params.title, params.description);
    yield put(addTodoResponse(title));
    yield put(todoListRequest());
  } catch (error) {
    yield put(addTodoFailureResponse(error));
  }
}

export default function* watchAddTodo() {
  yield takeEvery(ADD_TODO_REQUEST, fetchAddTodo);
}
