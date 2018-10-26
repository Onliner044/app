import { SET_FIND_TEXT } from '../actions/const';

const findTodoText = (state = {}, action) => {
  switch (action.type) {
    case SET_FIND_TEXT:
      return {
        text: action.text,
        isExact: action.isExact,
      };
    default:
      return state;
  }
};

export default findTodoText;
