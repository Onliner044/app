import React from 'react';

import { logOut, deleteAccount } from '../helpers/firebase/accountFunctions';
import { auth } from '../helpers/firebase/init';
import Dropdown from './Dropdown';

const UserPanel = () => {
    return (
      <div className="userPanel">
        <ul className="list-unstyled">
            <li>
                Ваша почта:<span className="userEmail">{auth.currentUser.email}</span>
            </li>
            <li>
                <input 
                    className="btn btn-primary"
                    onClick={logOut}
                    type="button"
                    defaultValue="Выйти"
                />
                <Dropdown
                    text=""
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
            {!auth.currentUser.emailVerified ?
            <li>
                <span>Подтвердите ваш E-mail для доступа к функционалу</span>
            </li> :
            null}
        </ul>
      </div>
    )
}

export default UserPanel;