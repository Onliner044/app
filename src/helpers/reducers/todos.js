import { START_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO, APPLY_RENAME } from '../actions/const';

const todos = (state = [], action) => {
    switch (action.type) {
      case START_TODOS:
        return [].concat(action.todos);
      case ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      case DELETE_TODO:
        return state.filter((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }
        });
      case APPLY_RENAME:
        return state.map((todo) => {
          if (todo.id === action.id) {
            return {
              id: todo.id,
              text: action.text,
              completed: todo.completed
            }
          }

          return todo;
        });
      case TOGGLE_TODO:
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        );
      default:
        return state;
    }
}
  
export default todos;