import React, { Fragment } from 'react'

import { registration } from '../helpers/firebase/verificationFunctions'

const Registration = ({ errorInfo, setErrorInfo, buttonClassName, errorTextClassName }) => {
  const refEmail = React.createRef()
  const refPassword = React.createRef()
  const refConfirmPassword = React.createRef()

  const onRegistration = () => {
    registration({
      elEmail: refEmail.current,
      elPassword: refPassword.current,
      elConfirmPassword: refConfirmPassword.current
    },
    setErrorInfo
    )
  }

  return (
    <Fragment>
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
          className={buttonClassName}
          type="button"
          onClick={onRegistration}
          defaultValue="Зарегистрироваться"
        />
      </li>
    </Fragment>
  )
}

Registration.defaultProps = {
  buttonClassName: 'btn btn-info',
  errorTextClassName: 'redText'
}

export default Registration
