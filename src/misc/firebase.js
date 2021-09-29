import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
var config = {
  apiKey: 'AIzaSyCqVs4xA2sB-YR52-uQc2fT7QVWxORIOcM',
  authDomain: 'apna-chat-app-f4816.firebaseapp.com',
  databaseURL: 'https://apna-chat-app-f4816-default-rtdb.firebaseio.com',
  projectId: 'apna-chat-app-f4816',
  storageBucket: 'apna-chat-app-f4816.appspot.com',
  messagingSenderId: '879690433716',
  appId: '1:879690433716:web:33c68f043cf20f254f83e1',
  measurementId: 'G-G4XP65H2EV',
};
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
