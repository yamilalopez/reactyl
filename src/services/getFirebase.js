import firebase from "firebase"
import { initializeApp } from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDmA-hEQK1boxoUwadiPAjKX6jqRPX5hPA",
    authDomain: "reactyl.firebaseapp.com",
    projectId: "reactyl",
    storageBucket: "reactyl.appspot.com",
    messagingSenderId: "357033364610",
    appId: "1:357033364610:web:593b5e8926db575421b89b"
};

const app = initializeApp(firebaseConfig) 

//export function getFirebase(){return app}
export function getFirestore(){return firebase.firestore(app)}