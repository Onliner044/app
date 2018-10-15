import { connect } from 'react-redux'

import TodoApp from '../components/TodoApp'
import { getTodosInDatabase } from '../helpers/firebase/databaseFunctions'
import { startTodos, setList } from '../helpers/actions/index'

const mapStateToProps = (state) => ({
  todos: state.todos,
  filterTodos: state.filterTodos
})

const mapDispatchToProps = (dispatch) => ({
  setStartTodos: () => getTodosInDatabase(
    (vals) => dispatch(startTodos(vals)),
    () => console.log('ошибка при добавлении стартовых значений')
  ),
  setList: (list) => dispatch(setList(list))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
