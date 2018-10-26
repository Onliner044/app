import React, { Component } from 'react';

import LoginContainer from '../containers/LoginContainer';
import RegistrationContainer from '../containers/RegistrationContainer';
import ResetPassword from './ResetPassword';
import info from '../helpers/info';
import '../styles/verificationStyle.css';

class Verification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isResetPassword: false,
    };
  }

  render() {
    return (
      <div className="verification">
        <div className="dark text-center full">
          <div className="d-inline-block wrapper h-100">
            <div className="d-table h-100">
              <div className="d-table-cell vertical-center">
                <div className="text-left verificationForm">
                  <div className="header">
                    <div className="headerText float-left">
                      <h2 className="mb-4">
                        {this.props.isLogin
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
                  <ul className="listVerificationInputs list-unstyled">
                    {this.props.isLogin
                      ? <LoginContainer />
                      : <RegistrationContainer />
                      }
                  </ul>
                  <div className="bottom">
                    <input
                      className="verificationBottomBtn btn float-left"
                      onClick={this.props.onToggleVerification}
                      type="button"
                      defaultValue={this.props.isLogin
                        ? 'Регистрация'
                        : 'Вход'}
                    />
                    <input
                      className="verificationBottomBtn btn float-right"
                      onClick={this.onClickResetPassword}
                      type="button"
                      defaultValue="Забыл пароль"
                    />
                    {this.state.isResetPassword
                      ? (
                        <ResetPassword
                          onCancel={this.onCancel}
                        />
                      )
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  onClickResetPassword = () => {
    this.setState({
      isResetPassword: true
    })
  }

  onCancel = () => {
    this.setState({
      isResetPassword: false
    })
  }
}

export default Verification;
