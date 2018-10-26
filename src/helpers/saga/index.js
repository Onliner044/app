import { all, call } from 'redux-saga/effects';

import todoList from './todoList';
import addTodo from './addTodo';
import deleteTodo from './deleteTodo';
import replaceTodo from './replaceTodo';

export function* sagas() {
  return yield all([
    call(todoList),
    call(addTodo),
    call(deleteTodo),
    call(replaceTodo),
  ]);
}
