import React, { Component } from 'react';

import { deleteTodoInDatabase, renameTodoInDatabase, toogleTodoInDatabase } from '../helpers/firebase/databaseFunctions';

class Todo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isRename: false
    }

    this.input = React.createRef();
  }

  render() {
    return ( 
      <li className="m-2">
        {!this.state.isRename ?
          <div>
            <input 
              className="custom-checkbox float-left"
              onClick={this.onClick}
              type="checkbox"
              defaultChecked={this.props.completed}
            />
            <span className="todoText">
              {this.props.text}
            </span>
            <input 
              className="btn btn-danger m-1 float-right"
              onClick={this.onDeleteTodo}
              type="button"
              defaultValue="X" 
            />
            <input 
              className="btn btn-warning m-1 float-right"
              onClick={this.toggleRename}
              type="button"
              defaultValue="..." 
            />
          </div> :
          <div>
            <input 
              className="btn btn-info m-1 float-right"
              onClick={this.onApply}
              type="button"
              defaultValue="OK" 
            />
            <input 
              type="text" 
              defaultValue={this.props.text} 
              ref={this.input}
            />
            <input 
              className="btn btn-warning m-1 float-right"
              onClick={this.toggleRename}
              type="button"
              defaultValue="X" 
            />
          </div>
        }
      </li>
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