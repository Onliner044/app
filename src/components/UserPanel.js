import React from 'react';

import Dropdown from './Dropdown';
import { logOut } from '../helpers/accountFunctions';

const UserPanel = () => (
  <div>
    <ul className="inline list-unstyled">
      <li>
        <input
          className="btn btn-primary"
          onClick={logOut}
          type="button"
          defaultValue="Выйти"
          />
      </li>
      {/*<li>
        <Dropdown
          textHide="Еще...↓"
          textShow="Скрыть←"
          >
          <input
            className="btn btn-danger"
            //onClick={deleteAccount}
            type="button"
            defaultValue="Удалить аккаунт"
            />
        </Dropdown>
      </li>*/}
    </ul>
    {/*!auth.currentUser.emailVerified
      ? <span className="redText">Подтвердите ваш E-mail для доступа к функционалу</span>
      : null*/}
  </div>
);

export default UserPanel;
