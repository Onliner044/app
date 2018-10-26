import { connect } from 'react-redux';

import Login from '../components/Login';
import { setLoginErrorInfo } from '../helpers/actions/index';

const mapStateToProps = state => ({
  errorInfo: state.loginInfo,
});

const mapDispatchToProps = dispatch => ({
  setError: info => dispatch(setLoginErrorInfo(info)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
