import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
var config = {
  apiKey: 'AIzaSyCkjKmQ1bYeRmJ-mxrexTi2D7cRvbySuX8',
  authDomain: 'chat-web-app-b46e2.firebaseapp.com',
  projectId: 'chat-web-app-b46e2',
  storageBucket: 'chat-web-app-b46e2.appspot.com',
  messagingSenderId: '743473564359',
  appId: '1:743473564359:web:dbfb81a0c0190033d50ce2',
};
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();