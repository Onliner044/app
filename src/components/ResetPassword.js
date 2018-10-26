import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.onClick = () => {
      /*resetPassword(this.input.current.value,
        () => {
          alert('Письмо для сброса пароля отправлено на указанную почту!');
          this.props.onCancel();
        },
        () => alert('Ошибка при изменении пароля!'));*/
    };
  }

  render() {
    return (
      ReactDOM.createPortal((
        <div className="center full dark">
          <div className="text-center resetPassword p-3">
            <h4 className="header text-white">Смена пароля</h4>
            <ul className="row list-unstyled mt-5">
              <li className="col-12">
                <input
                  className="w-100"
                  type="email"
                  ref={this.input}
                  placeholder="E-mail для сброса пароля"
                />
              </li>
            </ul>
            <ul className="row list-unstyled">
              <li className="col-8">
                <input
                  className="w-100 btn btn-info p-0"
                  onClick={this.onClick}
                  type="button"
                  defaultValue="Сбросить пароль"
                />
              </li>
              <li className="col-4">
                <input
                  className="w-100 btn btn-light p-0"
                  onClick={this.props.onCancel}
                  type="button"
                  defaultValue="Отмена"
                />
              </li>
            </ul>
          </div>
        </div>),
      document.body)
    );
  }
}

export default ResetPassword;
