import React, { Fragment } from 'react';
import { firebase } from '../../fireBaseCatalog/firebaseInit';

import TodoApp from '../../todosCatalog/App';

export const UserPanel = ({onClickLogOut, onClickRemove}) => {
    return (
      <div>
        <div>
            Ваша почта: {firebase.auth().currentUser.email}<br />
        </div>
        <button onClick={onClickLogOut}>
            Выйти
        </button>
        <button onClick={onClickRemove}>
            Удалить аккаунт
        </button>
        <br />
        <br />
        {firebase.auth().currentUser.emailVerified ? 
        <TodoApp /> : 
        <span>E-mail не подтвержден!</span>}
      </div>
    )
}