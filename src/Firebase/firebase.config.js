// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPCdb10LTnLMH7TdAXznre8B_bVIUP8L8",
  authDomain: "auth-firebase-context-ta-c4dd2.firebaseapp.com",
  projectId: "auth-firebase-context-ta-c4dd2",
  storageBucket: "auth-firebase-context-ta-c4dd2.appspot.com",
  messagingSenderId: "993605079322",
  appId: "1:993605079322:web:fc82fcc44529c259c9dca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;