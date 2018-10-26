import React, { Component, Fragment } from 'react';

import ContentContainer from './containers/ContentContainer';
import VerificationContainer from './containers/VerificationContainer';
import Loading from './components/Loading';
import { existCookie } from './helpers/cookiesFunctions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserLogin: false,
      isLoading: true,
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.isLoading
          ? <Loading />
          : null}
        {this.state.isUserLogin
          ? <ContentContainer />
          : <VerificationContainer />}
      </Fragment>
    );
  }

  componentWillMount() {    
    if (existCookie('Authorization')) {
      this.setState({
        isUserLogin: true,
      });
    }

    this.setState({
      isLoading: false,
    });
  }
}

export default App;
