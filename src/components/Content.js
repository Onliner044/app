import React from 'react';

import UserPanel from './UserPanel';
import TodoAppContainer from '../containers/TodoAppContainer';
import '../styles/contentStyle.css';

const Content = () => (
  <div className="content">
    <div className="header">
      <div className="d-table-cell col-4">
        <span className="headerText">Todo App</span>
      </div>
      <div className="d-table-cell offset-5 col-3 pr-5">
        <UserPanel />
      </div>
    </div>
    <div className="bottom text-center">
      <TodoAppContainer />
    </div>
  </div>
);

export default Content;
