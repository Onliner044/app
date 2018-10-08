import React, { Component } from 'react';

import { LogContainer } from '../container/LogContainer';
import { Reg } from './Reg';

export class LogReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null
    }
  }
  
  render() {
    return (
      <div>
        <button onClick={this.onClicksetToggleState}>
          {this.state.state ? "Нажмите для регистрации" : "Нажмите для входа"}
        </button>
        {this.state.state ? 
        <LogContainer /> :
        <Reg />}
      </div>
    )
  }

  onClicksetToggleState = () => {
    this.setState({
      state: !this.state.state
    })
  }
}

export default LogReg;
