import React, { Component } from 'react'

import UserPanel from './UserPanel'
import TodoAppContainer from '../containers/TodoAppContainer'
import { isEmailVerified } from '../helpers/firebase/verificationFunctions'
import ButtonList from './ButtonList'

class Content extends Component {
  render () {
    return (
      <div className="full backgroundTodo">
        <div className="container mb-3">
          <div className="row">
            <div className="offset-3 col-6">
              <h3 className="text-center">Todo list</h3>
            </div>
            <div className="col-3">
              <UserPanel />
            </div>
          </div>
          <div className="todoList">
            {isEmailVerified()
              ? <TodoAppContainer />
              : null}
          </div>
        </div>
      </div>
    )
  }
}

export default Content
