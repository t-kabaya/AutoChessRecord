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

// db.collection("matchRecord").add({
//   userId: '34',
//   ranking: 3,
//   units: [
//     {
//       id: 7,
//       level: 2
//     }
//   ],
//   date: new Date()
// })

// import {saveMatchRecordToFireStore} from './MatchRecordORM'
// saveMatchRecordToFireStore({
//   ranking: 8,
//   units: [
//     {
//       id: 7,
//       level: 2
//     }
//   ]
// })




// 設計
// matchRecord table
// ranking 1から10
// userId: string
// units: [
//   {
//     id: 7,
//     level: 2
//   }
// ]
// date: new Date()
