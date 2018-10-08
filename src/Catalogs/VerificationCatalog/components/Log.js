import React, { Component } from 'react';

import { login } from '../other/functions';

export const Log = ({showUserPanel}) => {
  return (
      <form>
          <input type="email" autoComplete="true" placeholder="E-mail" ref={(el) => this.email = el}/>
          <br />
          <input type="password" placeholder="Пароль" ref={(el) => this.password = el}/>
          <br />
          <button onClick={e => onClickLogIn(e, this.email, this.password, showUserPanel)}>
            Войти
          </button>
    </form>
  )
}

const onClickLogIn = (e, email, password, showUserPanel) => {
  e.preventDefault();
  login(email.value, password.value, showUserPanel);
}