import { database, auth } from './firebase/init';
import { TODO, ID, TEXT, COMPLETED, USERS, TODOS } from './firebase/refs';

export const addTodoInBase = (todo) => {
    console.log(todo);
    
    const childTodo = database.ref(`${USERS}/${auth.currentUser.uid}/${TODOS}`)
        .child(`${TODO}_${ID}`);  

    childTodo.child(ID).set(todo.id);
    childTodo.child(TEXT).set(todo.text);
    childTodo.child(COMPLETED).set(todo.completed);
}