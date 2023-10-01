import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAlzbolZznMMDQIuOAA2TxG1gfNK9n1czI",
    authDomain: "clone-babee.firebaseapp.com",
    databaseURL: "https://clone-babee-default-rtdb.firebaseio.com",
    projectId: "clone-babee",
    storageBucket: "clone-babee.appspot.com",
    messagingSenderId: "267178480048",
    appId: "1:267178480048:web:1fb61f1902783cb98b0675"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);
  
  export { db, collection, addDoc, auth, provider };
