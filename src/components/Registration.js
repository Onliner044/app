import React, { Fragment } from 'react';

import { registration } from '../helpers/verificationFunctions';

const Registration = ({ errorInfo, setErrorInfo }) => {
  let errorTextClassName = 'redText';
  const refLogin = React.createRef();
  const refEmail = React.createRef();
  const refPassword = React.createRef();
  const refConfirmPassword = React.createRef();

  const onRegistration = () => {
    registration({
      elLogin: refLogin.current,
      elEmail: refEmail.current,
      elPassword: refPassword.current,
      elConfirmPassword: refConfirmPassword.current,
    },
    setErrorInfo);
  };

  return (
    <Fragment>
    <li>
      <input
        type="text"
        placeholder="Имя"
        ref={refLogin}
      />
      <span className={errorTextClassName}>{errorInfo.infoLogin}</span>
    </li>
      <li>
        <input
          type="email"
          placeholder="E-mail"
          ref={refEmail}
        />
        <span className={errorTextClassName}>{errorInfo.infoEmail}</span>
      </li>
      <li>
        <input
          type="password"
          placeholder="Пароль"
          ref={refPassword}
        />
        <span className={errorTextClassName}>{errorInfo.infoPassword}</span>
      </li>
      <li>
        <input
          type="password"
          placeholder="Подтверждение пароля"
          ref={refConfirmPassword}
        />
        <span className={errorTextClassName}>{errorInfo.infoConfirmPassword}</span>
      </li>
      <li>
        <input
          className="btn btn-info"
          type="button"
          onClick={onRegistration}
          defaultValue="Зарегистрироваться"
        />
      </li>
    </Fragment>
  );
};

export default Registration;
