import React from 'react';

import LoginContainer from '../containers/LoginContainer';
import RegistrationContainer from '../containers/RegistrationContainer';

const Verification = ({isLogin, onToggleVerification}) => {
    return (
        <div>
            <input 
                onClick={onToggleVerification} 
                type="button"
                defaultValue= {isLogin ? 
                'Нажмите для регистрации' : 
                'Нажмите для входа'}
            />
            {isLogin ? 
            <LoginContainer /> :
            <RegistrationContainer />}
        </div>
    )
}

export default Verification;