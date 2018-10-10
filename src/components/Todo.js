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
      <li>
        {!this.state.isRename ?
          <div>
            <input 
              onClick={this.onClick}
              type="checkbox"
              defaultChecked={this.props.completed}
            />
            <span>{this.props.text}</span>
            <input 
              onClick={this.toggleRename}
              type="button"
              defaultValue="..." 
            />
            <input 
              onClick={this.onDeleteTodo}
              type="button"
              defaultValue="X" 
            />
          </div> :
          <div>
            <input 
              type="text" 
              defaultValue={this.props.text} 
              ref={this.input}
            />
            <input 
              onClick={this.onApply}
              type="button"
              defaultValue="OK" 
            />
            <input 
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