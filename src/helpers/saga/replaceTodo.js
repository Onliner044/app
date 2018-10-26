import { call, put, takeEvery } from 'redux-saga/effects';
import { todoListRequest } from './todoList';
import { replaceTodoXMLHTTPRequest } from '../requests';

const REPLACE_TODO_REQUEST = 'REPLACE_TODO_REQUEST';
const REPLACE_TODO_RESPONSE = 'REPLACE_TODO_RESPONSE';
const REPLACE_TODO_FAILURE_RESPONSE = 'REPLACE_TODO_FAILURE_RESPONSE';

export const replaceTodoRequest = todo => ({
  todo,
  type: REPLACE_TODO_REQUEST,
});

export const replaceTodoResponse = todo => ({
  todo,
  type: REPLACE_TODO_RESPONSE,
});

export const replaceTodoFailureResponse = error => ({
  payload: error,
  type: REPLACE_TODO_FAILURE_RESPONSE,
});

const replaceTodo = todo => new Promise((resolve, reject) => {
  replaceTodoXMLHTTPRequest(todo).then(
    () => {
      resolve(todo);
    },
  ).catch(
    (value) => {
      alert('Ошибка');
      console.log(value.status, value.responseText);
    },
  );
});

function* fetchReplaceTodo(params) {
  try {
    const description = yield call(replaceTodo, params.todo);
    yield put(replaceTodoResponse(description));
    yield put(todoListRequest());
  } catch (error) {
    yield put(replaceTodoFailureResponse(error));
  }
}

export default function* watchReplaceTodo() {
  yield takeEvery(REPLACE_TODO_REQUEST, fetchReplaceTodo);
}
