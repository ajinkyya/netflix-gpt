// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL6Q3ASvB4rcskzzWMfyzsif7KD6Bx0EQ",
  authDomain: "netflixgpt-11abf.firebaseapp.com",
  projectId: "netflixgpt-11abf",
  storageBucket: "netflixgpt-11abf.appspot.com",
  messagingSenderId: "237257669831",
  appId: "1:237257669831:web:dd449ff3afaec0e49912e2",
  measurementId: "G-00MBL9BF9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();