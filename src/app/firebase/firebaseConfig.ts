import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-s4R4MfbTLYJ80TkUdxtzP96Ylw-4tPQ",
    authDomain: "chatapp-caa8c.firebaseapp.com",
    projectId: "chatapp-caa8c",
    storageBucket: "chatapp-caa8c.firebasestorage.app",
    messagingSenderId: "895392983643",
    appId: "1:895392983643:web:a9886a54dbf954efa6ad7e",
    measurementId: "G-WM6ZQVZM7G"
  };

  const app = initializeApp(firebaseConfig)
  export const firestore = getFirestore(app)