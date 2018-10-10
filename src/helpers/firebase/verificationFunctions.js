import { auth, database, firebase } from './init';
import { USERS, EMAIL, TODOS } from './refs';

export const createUser = (email, password, fulfilled, rejected) => {
    auth.createUserWithEmailAndPassword(email, password).then(
        fulfilled,
        rejected
    ); 
}

export const signIn = (email, password, setInfo) => {
    auth.signInWithEmailAndPassword(email, password).then(
        () => {
            console.log('успешная авторизация');
        },
        () => {
            setInfo('Не правильный логин или пароль!');
        }
    ); 
}

export const userValidation = (callback) => {
    auth.onAuthStateChanged(callback);
}

export const isEmailVerified = () => {
    return auth.currentUser.emailVerified;
}

export const existEmail = (email, notExistEmailCallback, existEmailCallback) => {
    database.ref(USERS).once('value', (data) => {
        const val = data.val();

        for (const key in val) {
            const uidUser = val[key];

            if (uidUser.email === email) {
                existEmailCallback();
                return;
            }
        }
        
        notExistEmailCallback();
    });
}

export const sendEmailVerification = (fulfilled, rejected) => {
    auth.currentUser.sendEmailVerification().then(
        fulfilled,
        rejected
    );
}

export const getAutoVerificationEventOfType = (type) => {
    switch (type) {
        case 'google':
            return () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        case 'facebook':
            return () => auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        case 'github':
            return () => auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    }
}