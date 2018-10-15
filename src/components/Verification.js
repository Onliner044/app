import React from 'react'
import ReactDOM from 'react-dom'

import LoginContainer from '../containers/LoginContainer'
import RegistrationContainer from '../containers/RegistrationContainer'
import ResetPassword from '../components/ResetPassword'
import info from '../helpers/info'
import { resetPassword } from '../helpers/firebase/accountFunctions'

const Verification = ({ isLogin, onToggleVerification }) => {
  return (
    <div className="verification">
      <div className="dark center full">
        <div className="wrapper">
          <div className="verificationForm">
            <div className="header">
              <div className="headerText float-left">
                <h2 className="mb-4">
                  {isLogin
                    ? 'Вход'
                    : 'Регистрация'}
                </h2>
                <h6 className="darkText pb-5">Введите свои корректные данные:</h6>
              </div>
              <div className="float-right">
                <img
                  className="littleImg"
                  src={info.pencil}
                />
              </div>
            </div>
            <div className="content">
              <ul className="listVerificationInputs list-unstyled">
                {isLogin
                  ? <LoginContainer />
                  : <RegistrationContainer />}
              </ul>
            </div>
            <div className="bottom">
              <input
                className="verificationBottomBtn btn float-left"
                onClick={onToggleVerification}
                type="button"
                defaultValue= {isLogin
                  ? 'Регистрация'
                  : 'Вход'}
              />
              <input
                className="verificationBottomBtn btn float-right"
                type="button"
                defaultValue="Забыл пароль(в разработке)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verification
