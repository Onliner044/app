import React, { Component, Fragment } from 'react';

import { Grid } from '@material-ui/core';
import info from '../helpers/info';
import Confirm from './Confirm';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRename: false,
      isDeleted: false
    };
    this.todoText = React.createRef();

    this.checkBoxInput = (id, completed) => (
      <li className="d-inline-block text-center">
        <div className="todoCheckBox border-bottom-left-up">
          <div className="custom-checkBox">
            <input
              onClick={this.onToggle}
              id={id}
              type="checkbox"
              defaultChecked={completed}
            />
            <label htmlFor={id}></label>
          </div>
        </div>
      </li>
    );
    this.readOnlyTextInput = (text) => (
      <li className="d-inline-block todoText IEtodoText border-bottom-left-up border-right">
        {text}
      </li>
    );
    this.editTextInput = (text) => (
      <li className="d-inline-block w-100">
        <input
          className="todoText IEtodoText border-bottom-left-up darkText pb-1"
          type="text"
          defaultValue={text}
          ref={this.todoText}
        />
      </li>
    );
    this.editButton = (id) => (
      <li className="d-inline-block text-center">
        <div 
          className="btn-warning todoButton border-bottom-left-up"
          onClick={this.toggleRename}
        >
          <div className="h-100">
            <img 
              id={`img${id}`}
              src={info.pencil2}
            />
          </div>
        </div>
      </li>
    );
    this.deleteButton = (
      <li className="d-inline-block text-center">
        <div 
          className="btn-danger todoButton border-top-bottom-right-radius border-right"
          onClick={this.toggleDelete}
        >
          <div className="h-100">
            <img 
              src={info.trash}
            />
          </div>
        </div>
      </li>
    );
    this.cancelButton = (
      <li className="d-inline-block text-center">
        <div 
          className="btn-warning todoButton border-right"
          onClick={this.toggleRename}
        >
          <div className="h-100">          
            <img src={info.cancel}/>
          </div>
        </div>
      </li>
    );
    this.applyButton = (
      <li className="d-inline-block text-center">
        <div 
          className="btn-info todoButton border-top-bottom-right-radius-5"
          onClick={this.onApply}
        >
          <div className="h-100">
            <img src={info.ok}/>
          </div>
        </div>
      </li>
    );
  }

  render() {
    const { id, completed } = this.props;

    return (
      <Fragment>
        {this.renderConfirm()}
        <Grid 
          container 
          className="todos"
          spacing={0}
        >
          <Grid item xs={2} sm={3} className="d-inline-block text-right">
            {this.checkBoxInput(id, completed)}
          </Grid>
          {this.renderReadOnlyOrEditTodo()}
        </Grid>
      </Fragment>
    );
  }

  renderReadOnlyOrEditTodo = () => {
    const { id, text } = this.props;

    if (!this.state.isRename) {
      return (
        <Fragment>
          <Grid item xs={7} sm={5} className="d-inline-block">
            {this.readOnlyTextInput(text)}
          </Grid>
          <Grid item xs={3} sm={4} className="d-inline-block text-left">
            {this.editButton(id)} 
            {this.deleteButton}
          </Grid>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Grid item xs={7} sm={5} className="d-inline-block">
            {this.editTextInput(text)}
          </Grid>
          <Grid item xs={3} sm={4} className="d-inline-block text-left">
            {this.cancelButton}
            {this.applyButton}
          </Grid>
        </Fragment>
      )
    }
  }

  renderConfirm = () => {
    if (this.state.isDeleted) {
      return (
        <Confirm 
          info="Удалить запись?"
          applyText="Да"
          rejectText="Нет"
          okCallback={this.onDeleteTodo}
          cancelCallback={this.toggleDelete}
        />
      )
    } else {
      return null;
    }
  }

  onToggle = () => {
    const { id, text, completed } = this.props;
    const newTodo = {
      id,
      text,
      completed: !completed + ''
    }  
    this.props.replaceTodo(newTodo);
  }

  
  onDeleteTodo = () => {
    const { id } = this.props;
    this.props.deleteTodo(id);
  }
  
  onApply = () => {
    const {id, completed} = this.props;
    const newTodo = {
      id,
      completed,
      text: this.todoText.current.value,
    }  
    this.props.replaceTodo(newTodo);
    this.toggleRename();
  }
  
  toggleDelete = () => {
    this.setState((state) => ({
      isDeleted: !state.isDeleted
    }))
  }

  toggleRename = () => {
    this.setState((state) => ({
      isRename: !state.isRename
    }))
  }
}

export default Todo;