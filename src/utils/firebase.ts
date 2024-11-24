// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRjlbmiaWXUPnAnmUrUJrRZfiuhO_t-Uw",
  authDomain: "vue-firebase-25ebb.firebaseapp.com",
  projectId: "vue-firebase-25ebb",
  storageBucket: "vue-firebase-25ebb.firebasestorage.app",
  messagingSenderId: "973726170606",
  appId: "1:973726170606:web:11776498ebae93295622ff",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db };
