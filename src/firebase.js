// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDojGr2eUc0hdxYe7cp0F8Y20XxhPHrfus",
    authDomain: "ezstaff-1a42a.firebaseapp.com",
    projectId: "ezstaff-1a42a",
    storageBucket: "ezstaff-1a42a.firebasestorage.app",
    messagingSenderId: "177892881562",
    appId: "1:177892881562:web:47cc4bc827b2e564149b23",
    measurementId: "G-CVVKFZ6R2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage, firebaseConfig };