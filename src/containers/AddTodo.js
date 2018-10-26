import React from 'react';
import { connect } from 'react-redux';

import { addTodoRequest } from '../helpers/saga/addTodo';
import '../styles/todoAppStyle.css';
import { Grid } from '@material-ui/core';

const AddTodo = ({ addTodo }) => {
  const refInput = React.createRef();

  const onClick = () => {
    if (!refInput.current.value.trim()) {
      return;
    }

    addTodo(Date.now(), refInput.current.value);

    refInput.current.value = '';
  };

  return (
    <Grid container direction="row">
      <Grid item xs={3} sm={3} />
      <Grid item xs={6} sm={4} className="d-inline-block text-center">
        <input
          className="inputTodoText m-2"
          ref={refInput}
          placeholder="Введите текст..."
        />
      </Grid>
      <Grid item xs={12} sm={2} className="d-inline-block text-center">
        <input
          onClick={onClick}
          className="buttonAddTodo btn m-2"
          type="button"
          defaultValue="Добавить запись"
        />
      </Grid>
      <Grid item xs={false} sm={3} />
    </Grid>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  addTodo: (title, description) => dispatch(addTodoRequest(title, description)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);
