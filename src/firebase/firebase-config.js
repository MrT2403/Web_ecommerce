// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALyJnzeaGFh-xYNmdrqbJq15WVVpUz-do",
  authDomain: "web-ecommerce-se.firebaseapp.com",
  projectId: "web-ecommerce-se",
  storageBucket: "web-ecommerce-se.appspot.com",
  messagingSenderId: "95587234480",
  appId: "1:95587234480:web:857f9a7ff1e74864ab4175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);