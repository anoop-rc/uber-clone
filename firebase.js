// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALJr1J-eFnG7hif8Pyzv8otLPhi8jwx8g",
  authDomain: "uber-challenge-clone.firebaseapp.com",
  projectId: "uber-challenge-clone",
  storageBucket: "uber-challenge-clone.appspot.com",
  messagingSenderId: "635762494454",
  appId: "1:635762494454:web:8bed5c162998d1bad555d7",
  measurementId: "G-5PPM54EXLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
