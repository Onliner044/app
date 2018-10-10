import { connect } from 'react-redux';

import Login from '../components/Login';
import { setLoginInfo } from '../helpers/actions/index';

const mapStateToProps = (state) => ({
  info: state.loginInfo
})

const mapDispatchToProps = (dispatch) => ({
  setInfo: (info) => dispatch(setLoginInfo(info))
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Login);