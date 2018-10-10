import React from 'react';

import { registration } from '../helpers/verificationFunctions';

const Registration = ({info, setInfo}) => {
    const refEmail = React.createRef();
    const refPassword = React.createRef();
    const refConfirmPassword = React.createRef();

    const onRegistration = () => {
        registration({
                elEmail: refEmail.current,
                elPassword: refPassword.current,
                elConfirmPassword: refConfirmPassword.current
            },
            setInfo
        );
    }
    
    return (
        <div className="verification">
            <ul>
                <li>
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        ref={refEmail} 
                    />
                    {info.infoEmail}
                </li>
                <li>
                    <input 
                        type="password" 
                        placeholder="Пароль" 
                        ref={refPassword}
                    />
                    <span>{info.infoPassword}</span>
                </li>
                <li>
                    <input 
                        type="password" 
                        placeholder="Подтверждение пароля"
                        ref={refConfirmPassword}
                    />
                    <span>{info.infoConfirmPassword}</span>
                </li>
                <li>
                    <input 
                        type="button" 
                        onClick={onRegistration} 
                        defaultValue="Зарегистрироваться"
                    />
                </li>
            </ul>
        </div>
    )
}

export default Registration;