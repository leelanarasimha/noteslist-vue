// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCgCsSurdcSSGp1Tuik8L9GqOE65eenISU',
  authDomain: 'noteslist-vue.firebaseapp.com',
  projectId: 'noteslist-vue',
  storageBucket: 'noteslist-vue.appspot.com',
  messagingSenderId: '692628756704',
  appId: '1:692628756704:web:70ccaed79e28eea4ec1885'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
