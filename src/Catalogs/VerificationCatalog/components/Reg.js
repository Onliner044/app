import React from 'react';

import { registration } from '../other/functions';

export const Reg = () => {
    return (
        <div>
            <form ref={el => this.form = el}>
                <input type="email" autoComplete="true" placeholder="E-mail" ref={(el) => this.email = el}/>
                <br />
                <input type="password" placeholder="Пароль" ref={(el) => this.password = el}/>
                <br />
                <input type="password" placeholder="Подтверждение пароля" ref={(el) => this.confirmPassword = el}/>
                <br />
                <button onClick={e => onClickRegistration(e, this.form, this.email,this.password, this.confirmPassword)}>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    )
}

const onClickRegistration = (e, form, email, password, confirmPassword) => {
    e.preventDefault();
    if (checkIsNull(form) && checkPassword(password, confirmPassword)) {
        registration(email.value, password.value);
    }
}

const checkIsNull = (form) => {
    let inputs = form.elements;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type != "submit") {
            if (inputs[i].value == "") {
                alert("Заполните поля!");
                return false;
            }
        }
    }
        
    return true;
}

const checkPassword = (password, confirmPassword) => {
    if (password.value === confirmPassword.value) {
        if (password.value.length >= 6) {
            return true;
        } else {
            alert("Пароль должен состоять из 6 и более цифр!");
        }
    } else {
        alert("Пароль подтверждения не совподает с введеным паролем!");
    }
} 
