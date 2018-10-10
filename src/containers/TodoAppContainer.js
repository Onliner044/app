import { connect } from 'react-redux';

import TodoApp from '../components/TodoApp';
import { getTodosInDatabase } from '../helpers/firebase/databaseFunctions';
import { startTodos } from '../helpers/actions/index';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    setStartTodos: () => getTodosInDatabase(
        (vals) => dispatch(startTodos(vals)),
        () => console.log('ошибка при добавлении стартовых значений')
    )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);