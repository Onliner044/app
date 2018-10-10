import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../helpers/actions/index';
import { addTodoInDatabase } from '../helpers/firebase/databaseFunctions';

const AddTodo = ({addTodo, lastIdTodo}) => {
  const refInput = React.createRef();

  const onClick = () => {
    if (!refInput.current.value.trim()) {
      return;
    }

    addTodo(refInput.current.value, lastIdTodo);
    addTodoInDatabase({
      id: lastIdTodo,
      text: refInput.current.value,
      completed: false
    });

    refInput.current.value = '';
  }

  return (
    <div>
      <input ref={refInput} />
      <input
        onClick={onClick} 
        type="button" 
        defaultValue="Add Todo"
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  lastIdTodo: state.todos.length
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (value, lastIdTodo) => dispatch(addTodo(value, lastIdTodo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);