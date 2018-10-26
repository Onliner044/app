import { call, put, takeEvery } from 'redux-saga/effects';
import { getTodosXMLHTTPRequest } from '../requests';

export const TODO_LIST_RESPONSE = 'TODO_LIST_RESPONSE';
export const TODO_LIST_FAILURE_RESPONSE = 'TODO_LIST_FAILURE_RESPONSE';
export const TODO_LIST_REQUEST = 'TODO_LIST_REQUEST';

export const todoListRequest = () => ({
  payload: null,
  type: TODO_LIST_REQUEST,
});

export const todoListResponse = data => ({
  payload: data,
  type: TODO_LIST_RESPONSE,
});

export const todoListFailureResponse = error => ({
  payload: error,
  type: TODO_LIST_FAILURE_RESPONSE,
});

export const todoList = () => {
  const todos = new Promise((resolve, reject) => {
    getTodosXMLHTTPRequest().then(
      (value) => {
        try {
          const data = JSON.parse(value.responseText).data.todoList;
          resolve(data);
        } catch (e) {
          reject(e);
        }
      },
    ).catch(
      (value) => {
        reject(value);
      },
    );
  });

  return todos;
};

function* fetchTodoList() {
  try {
    const todos = yield call(todoList);
    yield put(todoListResponse(todos));
  } catch (error) {
    yield put(todoListFailureResponse(error));
  }
}

export default function* watchTodoList() {
  yield takeEvery(TODO_LIST_REQUEST, fetchTodoList);
}
