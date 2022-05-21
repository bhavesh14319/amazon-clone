import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
// import { getAuth} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js"

   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXZuHo8cWvqwXtyhSDC6FP7qkPuDY2rt4",
  authDomain: "clone-1ebf4.firebaseapp.com",
  projectId: "clone-1ebf4",
  storageBucket: "clone-1ebf4.appspot.com",
  messagingSenderId: "581801097869",
  appId: "1:581801097869:web:334ab2d120975e49cb80c4",
  measurementId: "G-L00LFJ23Q0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore();

export {db,auth};