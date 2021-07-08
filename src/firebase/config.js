import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBqzgy7N1zilI7IKnEfuovbjVpx7gKF-r4",
  authDomain: "vite-chatapp.firebaseapp.com",
  projectId: "vite-chatapp",
  storageBucket: "vite-chatapp.appspot.com",
  messagingSenderId: "606138610259",
  appId: "1:606138610259:web:3ce7f1c792ec3d2a0fcca6"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export default firebase
export { projectAuth, projectFirestore, timestamp }