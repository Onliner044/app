import { connect } from 'react-redux';

import Filters from '../components/Filters';
import { setVisibilityFilter } from '../helpers/actions';

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);