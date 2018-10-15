import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Registration from '../components/Registration'
import { setRegistrationErrorInfo } from '../helpers/actions/index'

const mapStateToProps = (state) => ({
  errorInfo: state.registrationInfo
})

const mapDispatchToProps = (dispatch) => ({
  setErrorInfo: (info) => dispatch(setRegistrationErrorInfo(info))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)
