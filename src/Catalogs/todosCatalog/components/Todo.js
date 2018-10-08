import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { replace, replaceTodo, delTodo } from '../actions/index';

export const Todo = ({ state, dispatch, text, onClick, completed, id }) => {
    var replaceInput;
    var checkbox;

    var todo = <span>{text}</span>;
    var replTodo = 
    <Fragment>
        <input type="text" ref={el => replaceInput = el} defaultValue={text}/>
        <a onClick={e => {e.preventDefault(); onApplyReplace(dispatch, id, checkbox, replaceInput)}} href="/">[OK]</a>        
        <a onClick={e => {e.preventDefault(); onReplace(dispatch, false)}} href="/">[X]</a>        
    </Fragment>
    return (
        <li>
        <label>
            <input onClick={onClick} type="checkbox" ref={el => checkbox = el} defaultChecked={completed}/>
            {state.replace ? replTodo : todo}
        </label>
        {!state.replace ? 
        <Fragment>
            <a onClick={e => {e.preventDefault(); onReplace(dispatch, true)}} href="/">[...]</a>
            <a onClick={e => {e.preventDefault(); onDelete(dispatch, id)}} href="/">[X]</a>
        </Fragment>
         : null}
    </li>
)};

const onReplace = (dispatch, isReplace) => {
    dispatch(replace(isReplace));
}

const onDelete = (dispatch, id) => {
    dispatch(delTodo(id))
}

const onApplyReplace = (dispatch, id, checkbox, input) => {
    console.log(checkbox, input);
    
    var todo = {
        id: id,
        text: input.value,
    }

    dispatch(replaceTodo(todo)); 
    dispatch(replace(false));
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}