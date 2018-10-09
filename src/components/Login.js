import React from 'react';

import css from '../style.css';

const Login = () => {
  return (
    <div className="verification">
        <ul>
            <li>
                <input type="email" placeholder="E-mail" />
            </li>
            <li>
                <input type="password" placeholder="Пароль" />
            </li>
            <li>
                <button>
                    Войти
                </button>
            </li>
            {/*<Verification onClick={getTypeSocialNetwork("google")} src="https://yt3.ggpht.com/a-/ACSszfEg5xl_vAi2hBOieBvZSMPax2GhMLlJSeXApg=s900-mo-c-c0xffffffff-rj-k-no" />*/}
        </ul>
    </div>
  )
}

export default Login;