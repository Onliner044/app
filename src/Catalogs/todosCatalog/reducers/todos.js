import { combineReducers } from 'redux';

import { updateTodoInBase, addTodoInBase, delTodoInBase, toggleTodoInBase } from '../../fireBaseCatalog/functions';

const id = (state = 0, action) => {
  switch (action.type) {
    case "SET_START_ID":
      return action.id;
  }

  return state;
}

const replace = (state = false, action) => {
  switch (action.type) {
    case "REPLACE":
      return action.payload;
  }

  return state;
}

const todos = (state = [], action) => {
    switch (action.type) {
      case 'SET_TODOS':
        return action.payload;
      case 'APPLY_REPLACE':
        updateTodoInBase(action.payload);
        
        return state.map((todo) => {
          if (action.payload.id == todo.id) {
            return {
              id: todo.id,
              text: action.payload.text,
              completed: todo.completed
            }
          } 

          return todo;
        }); 
      case 'ADD_TODO':
        addTodoInBase({
          id: action.id,
          text: action.text,
          checked: false
        });
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      case 'DEL_TODO':
        delTodoInBase(action.id);  

        return state.filter((el) => {
          if (el.id != action.id) {
            return el;
          }
        });
      case 'TOGGLE_TODO':
        toggleTodoInBase(action.id);  
        
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        );
      default:
        return state;
    }
}
  
export default combineReducers({
  todos,
  id,
  replace
});