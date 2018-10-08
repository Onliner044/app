import React from 'react';

import { firebase } from '../../fireBaseCatalog/firebaseInit'

export const RePassword = () => {
    return (
        <div>
            <input type="password" placeholder="Новый пароль" ref={(el) => this.password = el}/>
            <br />            
            <input type="password" placeholder="Введите повторно" ref={(el) => this.confirmPassword = el}/>
            <br />
            <button onClick={() => rePassword(this.password.value, this.confirmPassword.value)}>
                Сменить пароль
            </button>
        </div>
    );
}

const rePassword = (newPassword, confirmPassword) => {
    if (newPassword == confirmPassword) {
        if (newPassword.length >= 6) {
            firebase.auth().currentUser.updatePassword(newPassword);
            alert("Пароль изменен!");
        } else {
            alert("Пароль должен состоять из 6 и более символов!");
        }
    } else {
        alert("Пароль подтверждения введен неверно!");
    }
}