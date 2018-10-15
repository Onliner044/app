import React, { Component, Fragment } from 'react'

import ContentContainer from './containers/ContentContainer'
import VerificationContainer from './containers/VerificationContainer'
import { userValidation } from './helpers/firebase/verificationFunctions'
import Loading from './components/Loading'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isUserLogin: false,
      isLoading: true
    }
  }

  render () {
    return (
      <Fragment>
        {this.state.isLoading
          ? <Loading />
          : null}
        {this.state.isUserLogin
          ? <ContentContainer />
          : <VerificationContainer />}
      </Fragment>
    )
  }

  componentWillMount () {
    userValidation(
      (user) => {
        if (user) {
          this.setState({
            isUserLogin: true
          })
        }

        this.setState({
          isLoading: false
        })
      }
    )
  }
}

export default App
