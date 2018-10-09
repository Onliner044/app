import React, { Component } from 'react';

import Content from './components/Content';
import VerificationContainer from './containers/VerificationContainer';
import { checkUserLogIn } from './helpers/firebase/functions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLogIn: false
    }
  }

  render() {
    return (
      <div>
        {this.state.isUserLogIn ?
          <Content /> :
          <VerificationContainer />}
      </div>
    )
  }

  componentWillMount() {
    if (false) {
      this.setState({
        isUserLogIn: true
      });
    }
  }
}

export default App;