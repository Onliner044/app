import React from 'react';

import LoginContainer from '../containers/LoginContainer';
import RegistrationContainer from '../containers/RegistrationContainer';

const Verification = ({isLogin, onToggleVerification}) => {
    return (
        <div className="centerVerification border border-dark">
            <input className="toggleBtn btn-dark"
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