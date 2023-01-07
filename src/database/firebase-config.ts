// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHeZ4aFVnt33nkA0e7vUqZDpczl3mk3Ww",
  authDomain: "dalf-1.firebaseapp.com",
  projectId: "dalf-1",
  storageBucket: "dalf-1.appspot.com",
  messagingSenderId: "411365714854",
  appId: "1:411365714854:web:f06d85a5161d091f90bd67",
  measurementId: "G-YKRV5G1QVV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
export const auth = getAuth(app);
