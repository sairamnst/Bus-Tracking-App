// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, onValue } from "firebase/database";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from "@firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDzfcPBW0eKMEmCJSwILrmt1zJ8MXkg70A",
    authDomain: "live-bus-tracking-app.firebaseapp.com",
    projectId: "live-bus-tracking-app",
    storageBucket: "live-bus-tracking-app.appspot.com",
    messagingSenderId: "1064097372378",
    appId: "1:1064097372378:web:41754f46b4c6c5f3e1ede3",
    measurementId: "G-1YNX1DRY6G"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const db = getDatabase(app);
const auth=getAuth(app);

export { db, firestore, auth, ref, set, get, child, onValue };
