import firebase from 'firebase'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBd0ecWHnGXvLdbtyV3LSQvACUdEvoI39Q",
  authDomain: "autochessrecord.firebaseapp.com",
  databaseURL: "https://autochessrecord.firebaseio.com",
  projectId: "autochessrecord",
  storageBucket: "autochessrecord.appspot.com",
  messagingSenderId: "990548586835",
  appId: "1:990548586835:web:5a00c7cd7b232d99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

db.collection("TIL").add({
  userId: '34',
  tilContentText: 'oeua',
  date: new Date()
})