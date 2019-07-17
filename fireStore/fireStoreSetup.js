import firebase from 'firebase'
import '@firebase/firestore'
import { Constants } from 'expo'

// Initialize Firebase
firebase.initializeApp(Constants.manifest.extra.firebaseConfig)

export const db = firebase.firestore()
