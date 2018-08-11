import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDL7-9FTA8_eF1ZQVBpsjfREB_21Yqnjls",
    authDomain: "todo-mack.firebaseapp.com",
    databaseURL: "https://todo-mack.firebaseio.com",
    projectId: "todo-mack",
    storageBucket: "todo-mack.appspot.com",
    messagingSenderId: "514780547850"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };