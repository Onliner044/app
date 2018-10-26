import React, { Fragment } from 'react';

import { signIn } from '../helpers/verificationFunctions';

const Login = ({
  errorInfo, setError, buttonClassName, errorTextClassName,
}) => {
  const refLogin = React.createRef();
  const refPassword = React.createRef();

  const login = () => {
    setError('');
    signIn(refLogin.current.value, refPassword.current.value, setError);
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
    </Fragment>
  );
};

Login.defaultProps = {
  buttonClassName: 'btn btn-info',
  errorTextClassName: 'redText',
};

export default Login;
