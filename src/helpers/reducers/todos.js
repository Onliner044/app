import * as consts from '../actions/const';
import { addTodoInBase } from '../todoFunctions';

const todos = (state = [], action) => {
    switch (action.type) {
      case consts.START_TODOS:
        return [].concat(action.todos);
      case consts.ADD_TODO:
        addTodoInBase({
          id: action.id,
          text: action.text,
          completed: false
        });

        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      case consts.TOGGLE_TODO:
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