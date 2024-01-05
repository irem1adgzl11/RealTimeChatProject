// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2g55VCOWDmGl-L1iLTeMg6UtOu9aPbrA",
  authDomain: "realtimechat-ce106.firebaseapp.com",
  projectId: "realtimechat-ce106",
  storageBucket: "realtimechat-ce106.appspot.com",
  messagingSenderId: "29143589566",
  appId: "1:29143589566:web:4542915933ea15425a34ef",
  measurementId: "G-YNVNHR9TL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}