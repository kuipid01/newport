import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAv1x1ea4kqdJvY-RiWs-EqdigGBkshcT8",
  authDomain: "portfolio-30d06.firebaseapp.com",
  databaseURL: "https://portfolio-30d06-default-rtdb.firebaseio.com",
  projectId: "portfolio-30d06",
  storageBucket: "portfolio-30d06.appspot.com",
  messagingSenderId: "387024554792",
  appId: "1:387024554792:web:392028da6aeb15afbd9e1d",
  measurementId: "G-9NKMNS7T6E"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };