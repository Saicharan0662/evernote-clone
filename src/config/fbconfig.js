import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB6j3olZ83nREa9WrHihghMKjp5NP9cynI",
    authDomain: "evernote-clone-bec79.firebaseapp.com",
    projectId: "evernote-clone-bec79",
    storageBucket: "evernote-clone-bec79.appspot.com",
    messagingSenderId: "518898418537",
    appId: "1:518898418537:web:504a8508ba58677a01b3f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase