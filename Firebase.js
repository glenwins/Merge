import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCCs-qRCfw60J9Rt8XTgFAa8sohipYXpJ8",
  authDomain: "baboon-3b542.firebaseapp.com",
  projectId: "baboon-3b542",
  storageBucket: "baboon-3b542.appspot.com",
  messagingSenderId: "382303790537",
  appId: "1:382303790537:web:31439ad70f0a704df9b418",
  measurementId: "G-JYN5RGLR4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { firebase, auth,analytics, database, storage }