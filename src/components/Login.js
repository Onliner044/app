import React, { Fragment } from 'react';

import AutoLogin from './AutoLogin';
import info from '../helpers/info';
import { signIn } from '../helpers/verificationFunctions';

const Login = ({
  errorInfo, setErrorInfo, buttonClassName, errorTextClassName,
}) => {
  const refLogin = React.createRef();
  const refPassword = React.createRef();

  const login = () => {
    setErrorInfo('');
    signIn(refLogin.current.value, refPassword.current.value, setErrorInfo);
  };

  return (
    <Fragment>
      <li>
        <input
          type="text"
          placeholder="Логин"
          ref={refLogin}
        />
      </li>
      <li>
        <input
          type="password"
          placeholder="Пароль"
          ref={refPassword}
        />
      </li>
      <li>
        <span className={errorTextClassName}>{errorInfo}</span>
      </li>
      <li>
        <input
          className={buttonClassName}
          onClick={login}
          type="button"
          defaultValue="Войти"
        />
      </li>
      <li className="text-center">
        {/*info.autoVerification.verifications.map((el, i) => (
          <AutoLogin
            key={i}
            src={el.src}
            //onClick={getAutoVerificationMethodOfType(el.type)}
            type={el.type}
          />
        ))*/}
      </li>
    </Fragment>
  );
};

Login.defaultProps = {
  buttonClassName: 'btn btn-info',
  errorTextClassName: 'redText',
};

export default Login;
