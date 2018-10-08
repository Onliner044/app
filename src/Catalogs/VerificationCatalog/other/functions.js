import { firebase } from "../../fireBaseCatalog/firebaseInit";
import {  } from '../App';

var database = firebase.database();
var auth = firebase.auth();

export const registration = (email, password) => {
    addUser(email, password);
}

export const login = (email, password) => {
    const isNull = (value) => {
        if (value) {  
            return value.trim() === "";
        }

        return false;
    }

    if (!isNull(email) && !isNull(password)) {
        auth.signInWithEmailAndPassword(email, password).then(
            () => {
                database.ref("users").child(email.replace(".", ",")).on("value", (data) => {
                    var val = data.val();
                });
            },
            () => {
                alert("Не правильный e-mail или пароль!");
            }
        );
    }
}

export const logout = () => {
    auth.signOut();
}

export const getTypeSocialNetwork = (type) => {
    switch (type) {
        case "google":
            return () => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider);
        case "facebook":
            return () => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider);        
        case "twitter":
            return () => auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider);
    }
}

export const addUser = (email, password) => {
    let path = {
        users: "users"
    }
    email = email.replace(".", ",");
    
    database.ref(path.users).once("value", (emails) => {
        var val = emails.val();
        if (isEmailInBase(val, email)) {
            alert("Данный e-mail уже зарегистрирован!!!");
            return;
        } else {   
            addRecordUser(path, email);
            
            email = email.replace(",", ".");
            createUser(email, password);
        }
    });
}

const createUser = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then(() => {  
        auth.currentUser.sendEmailVerification().then(
            () => {
                alert("Регистрация произведена успешно!\nПисьмо с подтверждением было отправлено на ваш e-mail!");
                login(email, password);
            },
            () => {
                console.log("смс подтверждения e-mail не отправлено");
            }
        )
    });
}

const isEmailInBase = (emails, email) => {
    if (emails && email in emails) {
        return true
    }
    
    return false;
}

const addRecordUser = (path, email) => {
    database.ref(path.users).child(email + "/verify").set(false);
}