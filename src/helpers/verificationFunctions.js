import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { createUser } from './firebase/functions';
import { addClass, clearClass } from './cssFunctions';

export const registration = (refsElements, setInfo) => {
    const {elEmail, elPassword, elConfirmPassword} = refsElements;
    clearClass(elEmail, elPassword, elConfirmPassword);

    const email = elEmail.value;
    const password = elPassword.value;
    const confirmPassword = elConfirmPassword.value;

    let infoEmail;
    let infoPassword;
    let infoConfirmPassword;
    
    if (email.match("^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$")) {
        if (password.indexOf(' ') == -1) {
            if (password.length >= 6) {
                if (password.trim() === confirmPassword.trim()) {
                    createUser(email, password, 
                        () => alert("Регистрация прошла успешно!"), 
                        () => alert("Ошибка при регистрации!")
                    );
                } else {
                    addClass(elConfirmPassword, "borderRed");
                    infoConfirmPassword = "Пароль и пароль подтверждения не совпадают";
                }
            } else {
                addClass(elPassword, "borderRed");
                infoPassword = "Пароль должен состоять из 6 и более символов!";
            }
        } else {
            addClass(elPassword, "borderRed");
            infoPassword = "Пароль задан неверно!";
        }
    } else {
        addClass(elEmail, "borderRed");
        infoEmail = "E-mail введен неверно!";
    }
    
    setInfo({
        infoEmail: infoEmail,
        infoPassword: infoPassword,
        infoConfirmPassword: infoConfirmPassword
    })
}