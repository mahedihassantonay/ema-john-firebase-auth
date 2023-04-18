// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwHPJGUMJIlFG8mIIPfXvhuaJc0u4_EFk",
  authDomain: "ema-john-firebase-auth-d9235.firebaseapp.com",
  projectId: "ema-john-firebase-auth-d9235",
  storageBucket: "ema-john-firebase-auth-d9235.appspot.com",
  messagingSenderId: "41797759971",
  appId: "1:41797759971:web:11adb33bf8f3d79342e6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;