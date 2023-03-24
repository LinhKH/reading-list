import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDlfu8uha4H-7G3HMZUviqQ-JvNIr5-0nw",
    authDomain: "fb9-reading-list-a8b91.firebaseapp.com",
    projectId: "fb9-reading-list-a8b91",
    storageBucket: "fb9-reading-list-a8b91.appspot.com",
    messagingSenderId: "1044845355328",
    appId: "1:1044845355328:web:1469dacc05f6d35541daa5"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

export { db }