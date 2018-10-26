import { connect } from 'react-redux';

import Verification from '../components/Verification';
import { setVerification } from '../helpers/actions/index';

const mapStateToProps = state => ({
  isLogin: state.verification,
});

const mapDispatchToProps = dispatch => ({
  onToggleVerification: () => dispatch(setVerification()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Verification);
