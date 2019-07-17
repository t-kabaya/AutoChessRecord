import firebase from 'firebase'
import '@firebase/firestore'
import { Constants } from 'expo'
import { databaseENV } from '../config/environmentConfig'

// Initialize Firebase
firebase.initializeApp(Constants.manifest.extra.firebaseConfig)

export const db = firebase.firestore()

export const dbKey = {
  matchRecord: `${databaseENV}matchRecord`
}
