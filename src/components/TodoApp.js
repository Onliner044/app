import React, { Component } from 'react'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ButtonList from './ButtonList'

class TodoApp extends Component {
  constructor (props) {
    super(props)

    this.props.setStartTodos()
    this.headers = ['Cостояние', 'Текст', 'Редактировать / Отменить', 'Удалить / Применить']
  }

  render () {
    return (
      <div>
        <AddTodo />
        <Footer />
        <ul className="inline list-unstyled">
          {this.headers.map((head, i) => {
            let className = 'col-2'

            if (i == 1) {
              className = 'col-6'
            }
            return (
              <li
                className={`${className}`}
                key={i}
              >
                {head}
              </li>
            )
          })}
        </ul>
        <VisibleTodoList />
        <div className="bottom">
          <ButtonList
            setList={this.props.setList}
            todos={this.props.filterTodos}
          />
        </div>
      </div>
    )
  }
}

export default TodoApp
