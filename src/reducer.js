import { combineReducers } from 'redux';

import todosReducer from './Catalogs/todosCatalog/reducers/index';
import verificationReducer from './Catalogs/VerificationCatalog/other/reducers';

export default combineReducers({
    todosReducer,
    verificationReducer
});