import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyANp29Ua3oRYQdGcu4IVL48A0ieVBmXffo',
	authDomain: 'artisan-b941f.firebaseapp.com',
	projectId: 'artisan-b941f',
	storageBucket: 'artisan-b941f.appspot.com',
	messagingSenderId: '422707297941',
	appId: '1:422707297941:web:db0288a62ff4e6af5ae59c',
	measurementId: 'G-NDC24RGNEV',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const fv = firebase.firestore.FieldValue;

export { db, auth, provider, fv, storage };

export default firebaseApp;
