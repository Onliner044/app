import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../helpers/actions/index';

const AddTodo = ({lastIdTodo, dispatch}) => {
  const refInput = React.createRef();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!refInput.current.value.trim()) {
            return
          }
          dispatch(addTodo(refInput.current.value, lastIdTodo))
          refInput.current.value = ''
        }}
      >
        <input ref={refInput} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect((state) => {
    return {
        lastIdTodo: state.todos.length
    }
})(AddTodo)