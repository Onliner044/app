import { connect } from 'react-redux'
import { setVisibilityFilter, setFilterTodos } from '../helpers/actions/index'
import Link from '../components/Link'
import { getVisibleTodos } from './VisibleTodoList'

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setVisibilityFilter: (todos) => {
    dispatch(setFilterTodos(getVisibleTodos(todos, ownProps.filter)))
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
