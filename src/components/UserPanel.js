import React from 'react';

import TodoApp from './TodoApp';

const UserPanel = () => {
    return (
      <div>
        Ваша почта:
        <button>
            Выйти
        </button>
        <button>
            Удалить аккаунт
        </button>
        <span>E-mail не подтвержден!</span>
      </div>
    )
}

export default UserPanel;