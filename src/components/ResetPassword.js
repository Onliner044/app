import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { resetPassword } from '../helpers/firebase/accountFunctions'

class ResetPassword extends Component {
  constructor (props) {
    super(props)

    this.input = React.createRef()
    this.onClick = () => {
      resetPassword(this.input.current.value)
    }
  }

  render () {
    return (
      ReactDOM.createPortal((
        <div className="center full dark">
          <div className="center resetPassword">
            <ul className="list-unstyled">
              <li>
                <input
                  type="email"
                  placeholder="Ваш E-mail для сброса пароля"
                />
              </li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <input
                  onClick={this.onClick}
                  type="button"
                  defaultValue="Сбросить пароль"
                />
              </li>
              <li>
                <input
                  type="button"
                  defaultValue="Отмена"
                />
              </li>
            </ul>
          </div>
        </div>),
      document.body)
    )
  }
}

export default ResetPassword
