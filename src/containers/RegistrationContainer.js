import { connect } from 'react-redux';

import Registration from '../components/Registration';
import { setRegistrationInfo } from '../helpers/actions/index';

const mapStateToProps = (state) => ({
  info: state.registrationInfo
})

const mapDispatchToProps = (dispatch) => ({
  setInfo: (info) => dispatch(setRegistrationInfo(info))
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Registration);