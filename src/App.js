import React, { Component } from 'react';

import Content from './components/Content';
import VerificationContainer from './containers/VerificationContainer';
import { userValidation } from './helpers/firebase/verificationFunctions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserLogin: false
    }
  }

  render() {
    return (
      <div>
        {this.state.isUserLogin ?
          <Content /> :
          <VerificationContainer />}
      </div>
    )
  }
  
  componentWillMount() {
    userValidation(
      (user) => {
        if (user) {
          this.setState({
            isUserLogin: true
          });
        }
      }
    );
  }
}

export default App;