export const firebase = require("firebase");

var config = {
    apiKey: "AIzaSyD_r_zeydvT1H1XOT7pvAL5QbkyY0vaL-o",
    authDomain: "firstfirebase-32ebc.firebaseapp.com",
    databaseURL: "https://firstfirebase-32ebc.firebaseio.com",
    projectId: "firstfirebase-32ebc",
    storageBucket: "firstfirebase-32ebc.appspot.com",
    messagingSenderId: "607482983984"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();