import React, { Component, Fragment } from 'react';

import { deleteTodoInDatabase, renameTodoInDatabase, toogleTodoInDatabase } from '../helpers/firebase/databaseFunctions';

class Todo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isRename: false
    }
    this.input = React.createRef();

    this.checkBoxInput = () => (
      <li className="center col-2">
        <input 
          className="custom-checkbox"
          onClick={this.onClick}
          type="checkbox"
          defaultChecked={this.props.completed}
        />
      </li>
    )
    this.readOnlyTextInput = () => (
      <li className="col-6">
        <span className="todoText">
          {this.props.text}
        </span>
      </li>
    )
    this.editTextInput = () => (
      <li className="col-6">
        <input 
          className="w-100"
          type="text" 
          defaultValue={this.props.text} 
          ref={this.input}
        />
      </li>
    )
    this.editButton = (
      <li className="center col-2">
        <input 
          className="btn btn-warning todoButton"
          onClick={this.toggleRename}
          type="button"
          defaultValue="..." 
        />
      </li>
    )
    this.deleteButton = (
      <li className="center col-2">
        <input 
          className="btn btn-danger todoButton"
          onClick={this.onDeleteTodo}
          type="button"
          defaultValue="X" 
        />
      </li>
    )
    this.cancelButton = (
      <li className="center col-2">
        <input 
          className="btn btn-warning todoButton"
          onClick={this.toggleRename}
          type="button"
          defaultValue="X" 
        />
      </li>
    )
    this.applyButton = (
      <li className="center col-2">
        <input 
          className="btn btn-info todoButton"
          onClick={this.onApply}
          type="button"
          defaultValue="OK" 
        />
      </li>
    )
  }

  render() {
    return ( 
      <Fragment>
        <hr className="m-0" />
        <ul className="inline list-unstyled m-0">
          {this.checkBoxInput()}
          {!this.state.isRename ?
            <Fragment>
              {this.readOnlyTextInput()}
              {this.editButton}
              {this.deleteButton}
            </Fragment> :
            <Fragment>
              {this.editTextInput()}
              {this.cancelButton}
              {this.applyButton}
            </Fragment>
          }
        </ul>
      </Fragment>
    )
  }

  onClick = () => {
    this.props.toggleTodo(this.props.id);
    toogleTodoInDatabase(this.props.id, this.props.completed);
  }

  onDeleteTodo = () => {
    this.props.deleteTodo(this.props.id);
    deleteTodoInDatabase(this.props.id);
  }

  onApply = () => {
    const text = this.input.current.value;
    
    this.props.applyRename(this.props.id, text);
    renameTodoInDatabase(this.props.id, text);

    this.toggleRename();
  }

  toggleRename = () => {
    this.setState({
      isRename: !this.state.isRename
    });
  }
}

export default Todo;