import React, { Component } from 'react'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ButtonList from './ButtonList'
import Filters from './Filters';
import FiltersContainer from '../containers/FiltersContainer';

class TodoApp extends Component {
  constructor (props) {
    super(props)

    this.delButton = React.createRef()
    this.props.todoListRequest()
  }

  render () {
    return (
      <div className="todoApp">
        <div className="row">
          <AddTodo />
          {/*<FindTodos
            setFindText={this.props.setFindText}
          />*/}
        </div>
        <div className="text-center">
          <div className="hr d-inline-block"></div>
        </div>
        <FiltersContainer />
        <VisibleTodoList />
        {/*<div className="row bottom mt-3 mb-3">
          
          <ButtonList
            setList={this.props.setList}
            todos={this.props.todos}
          />
          <input
            className="btn btn-danger col-4"
            onClick={this.onDelete}
            type="button"
            hidden
            ref={this.delButton}
          />
        </div>*/}
      </div>
    )
  }
}

export default TodoApp