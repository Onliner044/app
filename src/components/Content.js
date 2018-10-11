import React from 'react';

import UserPanel from './UserPanel';
import TodoAppContainer from '../containers/TodoAppContainer';
import { isEmailVerified } from '../helpers/firebase/verificationFunctions';

const Content = () => {
    return (
        <div>
            <div className="leftDiv">
            </div>
            <div className="centerDiv">
                {isEmailVerified() ? 
                <TodoAppContainer /> :
                null}
            </div>
            <div className="rightDiv">
                <UserPanel />
            </div>
        </div>
    )
}

export default Content;