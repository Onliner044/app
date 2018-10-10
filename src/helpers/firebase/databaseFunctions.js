import { auth, database } from './init';
import { USERS, TODOS, EMAIL } from './refs';

export const getTodosInDatabase = (fulfilled, rejected) => {
    let todos = [];

    database.ref(`${USERS}/${auth.currentUser.uid}/${TODOS}`).once('value', (data) => {
        const vals = data.val();

        for (const key in vals) {
            const todo = vals[key];

            todos.push(todo);
        }
    }).then(
        () => fulfilled(todos),
        () => rejected()
    );
}

export const setEmailInDatabase = (email, fulfilled, rejected) => {
    database.ref(`${USERS}/${auth.currentUser.uid}/${EMAIL}`).set(email).then(
        fulfilled,
        rejected
    );
}