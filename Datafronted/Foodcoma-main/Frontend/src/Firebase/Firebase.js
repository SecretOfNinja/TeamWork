// Import the functions you need from the SDKs you need
// Firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, serverTimestamp, updateDoc, doc,setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqE2oDHs9Q37ecJq_m-tAI9l6Mufey1UA",
  authDomain: "helphub-c43b9.firebaseapp.com",
  projectId: "helphub-c43b9",
  storageBucket: "helphub-c43b9.appspot.com",
  messagingSenderId: "148558051481",
  appId: "1:148558051481:web:161ea10e231ae4038a6008",
  measurementId: "G-CWLCF9D80Y"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, serverTimestamp, updateDoc, doc,setDoc  };

