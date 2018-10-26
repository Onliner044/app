import React, { Component, Fragment } from 'react';
import info from '../helpers/info';
import Confirm from './Confirm';
import { Grid } from '@material-ui/core';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRename: false,
      isDeleted: false
    };
    this.input = React.createRef();

    this.checkBoxInput = () => (
      <li className="d-inline-block text-center">
        <div className="todoCheckBox border-bottom-left-up">
          <div className="custom-checkBox">
            <input
              onClick={this.onToggle}
              id={this.props.id}
              type="checkbox"
              defaultChecked={this.props.completed}
            />
            <label htmlFor={this.props.id}></label>
          </div>
        </div>
      </li>
    );
    this.readOnlyTextInput = () => (
      <li className="d-inline-block todoText IEtodoText border-bottom-left-up border-right">
        {this.props.text}
      </li>
    );
    this.editTextInput = () => (
      <li className="d-inline-block w-100">
        <input
          className="todoText IEtodoText border-bottom-left-up darkText pb-1"
          type="text"
          defaultValue={this.props.text}
          ref={this.input}
        />
      </li>
    );
    this.editButton = (
      <li className="d-inline-block text-center">
        <div 
          className="btn-warning todoButton border-bottom-left-up"
          onClick={this.toggleRename}
        >
          <div className="h-100">
            <img 
              id={`img${this.props.id}`}
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
            <img 
              src={info.cancel}
            />
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
            <img 
              src={info.ok}
            />
          </div>
        </div>
      </li>
    );
  }

  render() {
    return (
      <Fragment>
        {this.state.isDeleted
        ? <Confirm 
            info="Удалить запись?"
            applyText="Да"
            rejectText="Нет"
            okCallback={this.onDeleteTodo}
            cancelCallback={this.toggleDelete}
          />
        : null}
        <Grid 
          container 
          className="todos"
          spacing={0}
        >
          <Grid item xs={2} sm={3} className="d-inline-block text-right">
            {this.checkBoxInput()}
          </Grid>
          {!this.state.isRename
            ? (
              <Fragment>
                <Grid item xs={7} sm={5} className="d-inline-block">
                  {this.readOnlyTextInput()}
                </Grid>
                <Grid item xs={3} sm={4} className="d-inline-block text-left">
                  {this.editButton} 
                  {this.deleteButton}
                </Grid>
              </Fragment>
            )
            : (
              <Fragment>
                <Grid item xs={7} sm={5} className="d-inline-block">
                  {this.editTextInput()}
                </Grid>
                <Grid item xs={3} sm={4} className="d-inline-block text-left">
                  {this.cancelButton}
                  {this.applyButton}
                </Grid>
              </Fragment>
            )
          }
        </Grid>
      </Fragment>
    );
  }

  onToggle = () => {
    const {id, text, completed} = this.props;
    const newTodo = {
      id,
      text,
      completed: !completed + ''
    }  
    console.log(newTodo)
    this.props.replaceTodo(newTodo);
  }

  
  onDeleteTodo = () => {
    this.props.deleteTodo(this.props.id);
  }
  
  onApply = () => {
    const {id, completed} = this.props;
    const newTodo = {
      id,
      completed,
      text: this.input.current.value,
    }  
    this.props.replaceTodo(newTodo);
    this.toggleRename();
  }
  
  toggleDelete = () => {
    this.setState({
      isDeleted: !this.state.isDeleted
    })
  }

  toggleRename = () => {
    this.setState({
      isRename: !this.state.isRename
    })
  }
}

export default Todo;