import { auth } from './init';

export const checkUserLogIn = () => {
    return auth.isSignInWithEmailLink(auth.currentUser.email);
}

export const createUser = (email, password, fulfilled, rejected) => {
    auth.createUserWithEmailAndPassword(email, password).then(
        fulfilled,
        rejected
    );
}