// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWn3fOgKR3QC6R1sOm9g8LpNBCqEsTU6E",
  authDomain: "chat-d3d07.firebaseapp.com",
  projectId: "chat-d3d07",
  storageBucket: "chat-d3d07.appspot.com",
  messagingSenderId: "377778085778",
  appId: "1:377778085778:web:4cde235c726e800a92eb4b",
  measurementId: "G-CP8V2BCGGQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();

