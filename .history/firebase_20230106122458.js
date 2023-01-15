// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALqXPTywjgRL0h9MXxH0M_oSvdttTZV8c",
  authDomain: "clone-78fc6.firebaseapp.com",
  projectId: "clone-78fc6",
  storageBucket: "clone-78fc6.appspot.com",
  messagingSenderId: "726224766018",
  appId: "1:726224766018:web:d30204607e25c19b9a59db",
  measurementId: "G-JQPCN3S8D5"
};

// Initialize Firebase
const app = (!firebase.apps.length)?firebase.initializeApp(firebaseConfig):firebase.app();
// const app = initializeApp(firebaseConfig);

const db = app.firestore();