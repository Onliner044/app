import { connect } from 'react-redux';

import Todo from '../components/Todo';
import { deleteTodoRequest } from '../helpers/saga/deleteTodo';
import { replaceTodoRequest } from '../helpers/saga/replaceTodo';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: title => dispatch(deleteTodoRequest(title)),
  replaceTodo: (todo) => dispatch(replaceTodoRequest(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);
