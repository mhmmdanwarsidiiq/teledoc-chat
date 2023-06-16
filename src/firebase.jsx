import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA14UmUQgGUHytRd12xvcOrPFQB9e7o8Fc",
  authDomain: "teledocchat.firebaseapp.com",
  projectId: "teledocchat",
  storageBucket: "teledocchat.appspot.com",
  messagingSenderId: "897413391939",
  appId: "1:897413391939:web:bcfcec6f1a67a3f35996f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);