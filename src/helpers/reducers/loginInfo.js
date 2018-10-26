import * as consts from '../actions/const';

const loginInfo = (state = '', action) => {
  switch (action.type) {
    case consts.SET_LOGIN_INFO:
      return action.info;
    default:
      return state;
  }
};

export default loginInfo;
