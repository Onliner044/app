import { connect } from 'react-redux';

import Todo from '../components/Todo';
import { deleteTodo, applyRename, toggleTodo } from '../helpers/actions/index';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  applyRename: (id, text) => dispatch(applyRename(id, text))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);