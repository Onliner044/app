import * as consts from '../actions/const';

const registrationInfo = (state = {}, action) => {
  switch (action.type) {
    case consts.SET_REGISTRATION_INFO:
      return Object.assign({}, action.info);
  }

  return state;
};

export default registrationInfo;
