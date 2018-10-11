import React from 'react';

import AutoLogin from './AutoLogin';
import autoVerificationInfo from '../helpers/autoVerificationInfo';
import { getAutoVerificationMethodOfType, signIn } from '../helpers/firebase/verificationFunctions';

const Login = ({info, setInfo}) => {
  const refEmail = React.createRef();
  const refPassword = React.createRef();

  const login = () => {
    setInfo("");
    signIn(refEmail.current.value, refPassword.current.value, setInfo);
  }

  return (
    <div>
        <ul className="text-center list-inputs list-unstyled mt-4">
            <li>
                <input type="email" placeholder="E-mail" ref={refEmail} />
            </li>
            <li>
                <input type="password" placeholder="Пароль" ref={refPassword} />
            </li>
                <span>{info}</span>
            <li>
                <input 
                    className="btn btn-info mt-1"
                    onClick={login} 
                    type="button" 
                    defaultValue="Войти"
                />
            </li>
            <li>
                {autoVerificationInfo.map((el, i) => (
                    <AutoLogin 
                        key={i}
                        src={el.src}
                        onClick={getAutoVerificationMethodOfType(el.type)}
                        type={el.type}
                    />
                ))}
            </li>
        </ul>
    </div>
  )
}

export default Login;