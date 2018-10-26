import React, { Component } from 'react';

import LoginContainer from '../containers/LoginContainer';
import RegistrationContainer from '../containers/RegistrationContainer';
import info from '../helpers/info';
import '../styles/verificationStyle.css';
import Registration from './Registration';

class Verification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false
    }
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
                        {this.getText()}
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
                    {this.renderLoginOrRegistration()}
                  </ul>
                  <div className="bottom">
                    <input
                      className="verificationBottomBtn btn float-left"
                      onClick={this.onToggleVerification}
                      type="button"
                      defaultValue={this.getText()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderLoginOrRegistration = () => {
    if (this.state.isLogin) {
      return <LoginContainer />;
    } else {
      return <RegistrationContainer />;
    }
  }

  getText = () => {
    if (this.state.isLogin) {
      return 'Вход';
    } else {
      return 'Регистрация';
    }
  }

  onToggleVerification = () => {
    this.setState((state) => ({
      isLogin: !state.isLogin
    }))
  }
}

export default Verification;
