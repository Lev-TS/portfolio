import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCULg9VnHg1bc9kflVs-Ld2wnk65statvM",
    authDomain: "lts-portfolio.firebaseapp.com",
    databaseURL: "https://lts-portfolio.firebaseio.com",
    projectId: "lts-portfolio",
    storageBucket: "lts-portfolio.appspot.com",
    messagingSenderId: "149722353849",
    appId: "1:149722353849:web:0930c499d544bda5450b68",
    measurementId: "G-RXRSVYP15F"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;