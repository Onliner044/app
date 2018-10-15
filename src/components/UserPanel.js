import React from 'react'

import { logOut, deleteAccount } from '../helpers/firebase/accountFunctions'
import { auth } from '../helpers/firebase/init'
import Dropdown from './Dropdown'

const UserPanel = () => {
  return (
    <div>
      Ваша почта:<span className="userEmail">{auth.currentUser.email}</span>
      <ul className="inline list-unstyled">
        <li>
          <input
            className="btn btn-primary"
            onClick={logOut}
            type="button"
            defaultValue="Выйти"
          />
        </li>
        <li>
          <Dropdown
            textHide="Еще...↓"
            textShow="Скрыть←"
          >
            <input
              className="btn btn-danger"
              onClick={deleteAccount}
              type="button"
              defaultValue="Удалить аккаунт"
            />
          </Dropdown>
        </li>
      </ul>
      {!auth.currentUser.emailVerified
        ? <span className="redText">Подтвердите ваш E-mail для доступа к функционалу</span>
        : null}
    </div>
  )
}

export default UserPanel
