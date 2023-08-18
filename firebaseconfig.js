// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw68zyQ96TbS7EkbmEEXT6HZlcosFjPkM",
  authDomain: "fullstackapp-cf67f.firebaseapp.com",
  projectId: "fullstackapp-cf67f",
  storageBucket: "fullstackapp-cf67f.appspot.com",
  messagingSenderId: "165648805445",
  appId: "1:165648805445:web:cbfc3ee44dd63201733d2c",
  measurementId: "G-5GJZ9R0QJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export {auth,db}
