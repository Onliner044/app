import React from 'react';

import Login from './Login';
import RegistrationContainer from '../containers/RegistrationContainer';

const Verification = ({isLogin, onToggleVerification}) => {
    return (
        <div>
            <button onClick={onToggleVerification}>
                {isLogin ? 
                'Нажмите для регистрации' : 
                'Нажмите для входа'}
            </button>
            {isLogin ? 
            <Login /> :
            <RegistrationContainer />}
        </div>
    )
}

export default Verification;