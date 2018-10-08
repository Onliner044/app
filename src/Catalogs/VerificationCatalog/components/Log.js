import React, { Component } from 'react';

import { login, getTypeSocialNetwork } from '../other/functions';
import { Verification } from './Verification';

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
      <Verification onClick={getTypeSocialNetwork("google")} src="https://yt3.ggpht.com/a-/ACSszfEg5xl_vAi2hBOieBvZSMPax2GhMLlJSeXApg=s900-mo-c-c0xffffffff-rj-k-no" />
    </form>
  )
}

const onClickLogIn = (e, email, password, showUserPanel) => {
  e.preventDefault();
  login(email.value, password.value, showUserPanel);
}