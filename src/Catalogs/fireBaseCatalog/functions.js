import { firebase } from './firebaseInit';

var ref;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        ref = firebase.database().ref("users/" + user.email.replace(".", ",") + "/todos");
    }
});

export const addTodoInBase = (value) => {
    console.log("add");

    if (!ref)
        return;

    var todoName = "Todo_" + value.id + "/";

    ref.child(todoName + "id").set(value.id);
    ref.child(todoName + "text").set(value.text);
    ref.child(todoName + "checked").set(value.checked);
}

export const delTodoInBase = (id) => {
    console.log("del");

    if (!ref)
        return;

    var todoName = "Todo_" + id;

    ref.child(todoName).remove();    
}

export const toggleTodoInBase = (id) => {
    if (!ref)
        return;

    var todoName = "Todo_" + id;

    ref.child(todoName).once("value", (data) => {
        var val = data.val();
        
        ref.child(todoName + "/checked").set(!val.checked);
    })
}

export const updateTodoInBase = (todo) => {
    if (!ref)
        return;

    var todoName = "Todo_" + todo.id;
    
    ref.child(todoName + "/text").set(todo.text);
}