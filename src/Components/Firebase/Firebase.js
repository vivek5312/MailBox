import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4QV--4r3iBUSL2ox_ihKJ-kRb4ohGOyk",
    authDomain: "mailbox-90016.firebaseapp.com",
    projectId: "mailbox-90016",
    storageBucket: "mailbox-90016.appspot.com",
    messagingSenderId: "787538112737",
    appId: "1:787538112737:web:42c635096d60e43d3a87a0"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc }; // Export Firestore functions