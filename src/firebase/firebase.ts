import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANp29Ua3oRYQdGcu4IVL48A0ieVBmXffo",
  authDomain: "artisan-b941f.firebaseapp.com",
  projectId: "artisan-b941f",
  storageBucket: "artisan-b941f.appspot.com",
  messagingSenderId: "422707297941",
  appId: "1:422707297941:web:db0288a62ff4e6af5ae59c",
  measurementId: "G-NDC24RGNEV"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;