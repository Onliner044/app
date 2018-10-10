import React from 'react';

import { logOut, deleteAccount } from '../helpers/firebase/accountFunctions';
import { auth } from '../helpers/firebase/init';
import '../style.css';

const UserPanel = () => {
    return (
      <div className="userPanel">
        <ul>
            <li>
                Ваша почта:{auth.currentUser.email}
            </li>
            <li>
                <input 
                    onClick={logOut}
                    type="button"
                    defaultValue="Выйти"
                />
                <input 
                    onClick={deleteAccount}
                    type="button"
                    defaultValue="Удалить аккаунт"
                />
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