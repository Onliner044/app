import * as consts from '../actions/const';

const verification = (state = false, action) => {
    switch (action.type) {
        case consts.SET_VERIFICATION:
            return !state;
    }

    return state;
}

export default verification;