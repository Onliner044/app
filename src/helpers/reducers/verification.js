import { SET_VERIFICATION } from '../actions/const';

const verification = (state = false, action) => {
  switch (action.type) {
    case SET_VERIFICATION:
      return !state;
    default:
      return state;
  }
};

export default verification;
