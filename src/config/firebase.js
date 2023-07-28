// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIZBmgRrb-NqdxL64J8mAVwf2WFbBjRxg",
  authDomain: "fires-b35b8.firebaseapp.com",
  projectId: "fires-b35b8",
  storageBucket: "fires-b35b8.appspot.com",
  messagingSenderId: "1072044590783",
  appId: "1:1072044590783:web:db996652b98d26f087680a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
