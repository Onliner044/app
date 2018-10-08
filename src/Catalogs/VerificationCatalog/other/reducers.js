import { combineReducers } from 'redux';

import reducerTodo from '../../todosCatalog/reducers/index';

const reducerUserLog = (state = {}, action) => {    
    switch (action.type) {
        case "LOGIN":
            return {
                    
            }
        case "LOGOUT":
            return [];
    }

    return state;
}

const reducerVisibleUserPanel = (state = true, action) => {
    switch (action.type) {
        case "SET_VISIBLE_USER_PANEL":
            return action.payload
    }

    return state;
}

export default combineReducers({
    reducerUserLog,
    reducerVisibleUserPanel,
    reducerTodo
});