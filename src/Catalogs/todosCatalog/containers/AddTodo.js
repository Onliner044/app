import React from 'react';
import { connect } from 'react-redux';

import { addTodo, setId } from '../actions';

const AddTodo = ({ state, dispatch, nextId }) => {
  let input;
    
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          
          if (!input.value.trim()) {
            return;
          }

          dispatch(setId(++nextId));
          dispatch(addTodo(input.value, nextId));
          input.value = '';
        }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect((state) => {
  return {
    nextId: state.todosReducer.todos.id
  }
})(AddTodo);