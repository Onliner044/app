export const setId = id => ({
  type: 'SET_START_ID',
  id
});

export const setTodos = payload => ({
  type: 'SET_TODOS',
  payload
});

export const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  id: id,
  text
});

export const delTodo = id => ({
  type: 'DEL_TODO',
  id
});

export const replaceTodo = payload => ({
  type: 'APPLY_REPLACE',
  payload
});

export const replace = payload => ({
  type: 'REPLACE',
  payload
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}