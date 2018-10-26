import React, { Component, Fragment } from 'react';

import Content from './components/Content';
import Verification from './components/Verification';
import Loading from './components/Loading';
import { getTodosXMLHTTPRequest } from './helpers/requests';

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
        {this.renderLoading()}
        {this.renderContentOrVerification()}
      </Fragment>
    );
  }

  renderLoading = () => {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return null;
    }
  }

  renderContentOrVerification = () => {
    if (this.state.isUserLogin) {
      return <Content />;
    } else {
      return <Verification />;
    }
  }

  componentWillMount() {   
    getTodosXMLHTTPRequest().then(
      () => {
        this.setState({
          isUserLogin: true,
        })
        
        this.show();
      }
    ).catch(
      this.show
    );
  }

  show = () => {
    this.setState({
      isLoading: false,
    });
  }
}

export default App;
