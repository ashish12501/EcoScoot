// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJHejCmZCh3noBKj1fnMaejhDSYE3K_JE",
    authDomain: "eco-scoot.firebaseapp.com",
    projectId: "eco-scoot",
    storageBucket: "eco-scoot.appspot.com",
    messagingSenderId: "180029556962",
    appId: "1:180029556962:web:863d49d9387a8b1b4ab6bb",
    measurementId: "G-C7P81521WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);
export { app, auth, db };