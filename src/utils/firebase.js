// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCjbLOEg2cs-_jaa3UbSuWNAQpr98psFU",
  authDomain: "nemflix-gpt-77383.firebaseapp.com",
  projectId: "nemflix-gpt-77383",
  storageBucket: "nemflix-gpt-77383.firebasestorage.app",
  messagingSenderId: "690449706",
  appId: "1:690449706:web:4c97077711c2dc731a4253",
  measurementId: "G-81V8QB2WKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();