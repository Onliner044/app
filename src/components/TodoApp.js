import React, { Component } from 'react'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
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
        </div>
        <div className="text-center">
          <div className="hr d-inline-block"></div>
        </div>
        <FiltersContainer />
        <VisibleTodoList />
      </div>
    )
  }
}

export default TodoApp