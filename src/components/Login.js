import React, { Fragment } from 'react'

import AutoLogin from './AutoLogin'
import info from '../helpers/info'
import { getAutoVerificationMethodOfType, signIn } from '../helpers/firebase/verificationFunctions'

const Login = ({ errorInfo, setErrorInfo, buttonClassName, errorTextClassName }) => {
  const refEmail = React.createRef()
  const refPassword = React.createRef()

  const login = () => {
    setErrorInfo('')
    signIn(refEmail.current.value, refPassword.current.value, setErrorInfo)
  }

  return (
    <Fragment>
      <li>
        <input
          type="email"
          placeholder="E-mail"
          ref={refEmail}
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
        {info.autoVerification.verifications.map((el, i) => (
          <AutoLogin
            key={i}
            src={el.src}
            onClick={getAutoVerificationMethodOfType(el.type)}
            type={el.type}
          />
        ))}
      </li>
    </Fragment>
  )
}

Login.defaultProps = {
  buttonClassName: 'btn btn-info',
  errorTextClassName: 'redText'
}

export default Login
