import { TODO_LIST_REQUEST, TODO_LIST_RESPONSE, TODO_LIST_FAILURE_RESPONSE } from '../saga/todoList';

const initialState = {
  data: [],
};
export const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO_LIST_REQUEST:
      return state;
      /*return {
        data: [],
      };*/
    case TODO_LIST_RESPONSE:
      const data = action.payload.map((todo) => ({
        id: todo.todoName,
        text: todo.task,
        completed: todo.success
      }));
      return Object.assign({}, state, {
        data: data,
      });
    case TODO_LIST_FAILURE_RESPONSE:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default todos;
