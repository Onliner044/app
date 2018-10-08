import React from 'react';

import Footer from './components/Footer';
import AddTodo from '../todosCatalog/containers/AddTodo';
import VisibleTodoList from '../todosCatalog/containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;