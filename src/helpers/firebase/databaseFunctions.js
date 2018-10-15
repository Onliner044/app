import { auth, database } from './init'
import { USERS, TODOS, TODO, EMAIL, ID, TEXT, COMPLETED } from './refs'

export const getTodosInDatabase = (fulfilled, rejected) => {
  let todos = []

  database.ref(`${USERS}/${auth.currentUser.uid}/${TODOS}`).once('value', (data) => {
    const vals = data.val()

    for (const key in vals) {
      const todo = vals[key]

      todos.push(todo)
    }
  }).then(
    () => fulfilled(todos),
    () => rejected()
  )
}

export const addEmailInDatabase = (email, fulfilled, rejected) => {
  database.ref(`${USERS}/${auth.currentUser.uid}/${EMAIL}`).set(email).then(
    fulfilled,
    rejected
  )
}

export const addTodoInDatabase = (todo) => {
  const childTodo = database.ref(`${USERS}/${auth.currentUser.uid}/${TODOS}`)
    .child(`${TODO}_${todo.id}`)

  childTodo.child(ID).set(todo.id)
  childTodo.child(TEXT).set(todo.text)
  childTodo.child(COMPLETED).set(todo.completed)
}

export const toogleTodoInDatabase = (id, completed) => {
  const childTodo = database.ref(`${USERS}/${auth.currentUser.uid}/${TODOS}`)
    .child(`${TODO}_${id}`)

  childTodo.child(COMPLETED).set(!completed)
}

export const deleteTodoInDatabase = (id) => {
  const childTodo = database.ref(`${USERS}/${auth.currentUser.uid}/${TODOS}`)
    .child(`${TODO}_${id}`)

  childTodo.remove()
}

export const renameTodoInDatabase = (id, text) => {
  const childTodo = database.ref(`${USERS}/${auth.currentUser.uid}/${TODOS}`)
    .child(`${TODO}_${id}`)

  childTodo.child(TEXT).set(text)
}

export const lastIndexTodo = (callBack) => {
  database.ref(`${USERS}/${auth.currentUser.uid}/${TODOS}`)
    .once('value', (data) => {
      const val = data.val()

      let maxId = 0
      for (const key in val) {
        const el = val[key]

        if (el.id > maxId) {
          maxId = el.id
        }
      }

      callBack(maxId)
    })
}
