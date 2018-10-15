import { connect } from 'react-redux'

import Content from '../components/Content'
import { setList } from '../helpers/actions'

const mapStateToProps = (state) => ({  
})

const mapDispatchToProps = (dispatch) => ({
  setList: (list) => dispatch(setList(list))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
