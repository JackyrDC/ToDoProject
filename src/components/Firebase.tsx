import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB7-fG1mTDgLApVSH0P-NemCSZi4no8s1s",
    authDomain: "proof1-1648d.firebaseapp.com",
    databaseURL: "https://proof1-1648d-default-rtdb.firebaseio.com",
    projectId: "proof1-1648d",
    storageBucket: "proof1-1648d.appspot.com",
    messagingSenderId: "738394705743",
    appId: "1:738394705743:web:4293573c1653d73ae07f3a",
    measurementId: "G-8Z8R5VWV60"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };