import React from 'react';

import UserPanel from './UserPanel';
import TodoAppContainer from '../containers/TodoAppContainer';
import { isEmailVerified } from '../helpers/firebase/verificationFunctions';

const Content = () => {
    return (
        <div>
            <UserPanel />
            {isEmailVerified() ? 
            <TodoAppContainer /> :
            null}
        </div>
    )
}

export default Content;