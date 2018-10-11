import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../helpers/actions/index';
import { addTodoInDatabase, lastIndexTodo } from '../helpers/firebase/databaseFunctions';

const AddTodo = ({addTodo}) => {
  const refInput = React.createRef();
  let lastIdTodo;

  lastIndexTodo((lastId) => lastIdTodo = lastId);

  const onClick = () => {
    if (!refInput.current.value.trim()) {
      return;
    }

    addTodo(refInput.current.value, lastIdTodo += 1); //пока без ++ или += не обойтись
    addTodoInDatabase({
      id: lastIdTodo,
      text: refInput.current.value,
      completed: false
    });

    refInput.current.value = '';
  }

  return (
    <div className="text-center">
      <input 
        className="inputAddTodoText"
        ref={refInput}   
      />
      <input
        className="btn btn-success"
        onClick={onClick} 
        type="button" 
        defaultValue="Add Todo"
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (value, lastIdTodo) => dispatch(addTodo(value, lastIdTodo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);