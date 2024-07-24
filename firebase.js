// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkrq6NGU0ocalA8QbN7y1aNiKJvUTBfZk",
  authDomain: "notes-app-10839.firebaseapp.com",
  projectId: "notes-app-10839",
  storageBucket: "notes-app-10839.appspot.com",
  messagingSenderId: "805112993966",
  appId: "1:805112993966:web:1ed229f4722df3d4d1353f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")