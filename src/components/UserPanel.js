import React from 'react';

import { logOut } from '../helpers/accountFunctions';

const UserPanel = () => (
  <div>
    <ul className="inline list-unstyled">
      <li>
        <input
          className="btn btn-primary"
          onClick={logOut}
          type="button"
          defaultValue="Выйти"
          />
      </li>
    </ul>
  </div>
);

export default UserPanel;
